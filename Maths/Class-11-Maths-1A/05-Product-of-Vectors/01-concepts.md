# Product of Vectors — Concepts From Zero

Read this slowly, with a pen. Every worked example is written out in FULL —
no step is skipped, because the skipped step is always the one you get stuck on.

If you have never understood vectors before, start at TOPIC 1 and do not jump.

---

# TOPIC 0 — WHAT YOU NEED FROM CHAPTER 4 (30 seconds)

A vector is an arrow: it has a **length** and a **direction**.
We write it using three fixed unit arrows called **i**, **j**, **k**:

```
        k (up)
        |
        |
        |________ j  (sideways)
       /
      /
     i  (towards you)

   i , j , k  each have length 1
   and each one is perpendicular to the other two.
```

So `a = 2i + 3j - k` means "go 2 steps along i, 3 steps along j, 1 step
backwards along k".

Two facts you must already own:

```
  +-----------------------------------------------------------+
  |                                                           |
  |   LENGTH (magnitude) of  a = a1 i + a2 j + a3 k           |
  |                                                           |
  |        |a|  =  sqrt( a1^2 + a2^2 + a3^2 )                 |
  |                                                           |
  |   UNIT VECTOR in the direction of a                       |
  |                                                           |
  |        a-hat  =  a / |a|                                  |
  |                                                           |
  +-----------------------------------------------------------+
```

**Quick check.** If `a = 2i - 3j + 6k` then
`|a| = sqrt(4 + 9 + 36) = sqrt(49) = 7`, and the unit vector is
`(2i - 3j + 6k)/7`.

> **TRAP:** `|a|` is a NUMBER. Never write `|a| = 2i - 3j + 6k`.
> A length can never contain i, j or k.

---

# TOPIC 1 — WHY THERE ARE TWO KINDS OF "MULTIPLY"

For ordinary numbers, 3 x 4 means one thing. For arrows it does not,
because arrows carry direction as well as size.

Mathematicians found exactly two useful answers:

```
  +---------------------------+     +---------------------------+
  |  DOT PRODUCT   a . b      |     |  CROSS PRODUCT   a x b    |
  |                           |     |                           |
  |  Question it answers:     |     |  Question it answers:     |
  |  "how much do these two   |     |  "how much AREA do these  |
  |   arrows agree?"          |     |   two arrows sweep out?"  |
  |                           |     |                           |
  |  Answer is a NUMBER       |     |  Answer is a VECTOR       |
  +---------------------------+     +---------------------------+
```

Everything in this chapter is one of those two, or the two combined.

> **TRAP:** There is no such thing as "a times b" for vectors. If you write
> `a b` with no symbol between them, the examiner does not know which product
> you mean. **Always write the dot or the cross.**

---

# TOPIC 2 — THE DOT (SCALAR) PRODUCT: DEFINITION

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |          a . b   =   |a| |b| cos(theta)                           |
  |                                                                   |
  |   where theta is the angle BETWEEN the two vectors, measured      |
  |   with both tails at the SAME point,   0 <= theta <= 180 deg      |
  |                                                                   |
  +-------------------------------------------------------------------+
```

The picture — note that both tails must start together:

```
     CORRECT                        WRONG
        b                              b
        ^                              ^
       /                              /
      /                              /
     /theta                         /
    +--------->  a          -------+--------->  a
   tails together                 tails apart, the angle you
                                  read off here is NOT theta
```

**What the sign of a . b tells you, instantly:**

```
     theta = 0 deg     ->  cos = 1     ->  a.b = |a||b|    (biggest possible)
     0 < theta < 90    ->  cos > 0     ->  a.b is POSITIVE
     theta = 90 deg    ->  cos = 0     ->  a.b = 0         <-- PERPENDICULAR
     90 < theta < 180  ->  cos < 0     ->  a.b is NEGATIVE
     theta = 180 deg   ->  cos = -1    ->  a.b = -|a||b|   (most negative)
```

### WORKED EXAMPLE 2.1
`|a| = 5`, `|b| = 4`, and the angle between them is 60 degrees. Find `a . b`.

```
  STEP 1   Write the definition.
              a . b  =  |a| |b| cos(theta)

  STEP 2   Put the numbers in.
              a . b  =  5 x 4 x cos(60 deg)

  STEP 3   cos 60 deg = 1/2.
              a . b  =  5 x 4 x (1/2)

  STEP 4   Multiply.
              a . b  =  20 x (1/2)  =  10
```
**Answer: a . b = 10**

### WORKED EXAMPLE 2.2
`|a| = 3`, `|b| = 2`, `a . b = 3`. Find the angle between a and b.

```
  STEP 1   a . b = |a| |b| cos theta
                3 = 3 x 2 x cos theta

  STEP 2   3 = 6 cos theta

  STEP 3   cos theta = 3/6 = 1/2

  STEP 4   theta = 60 degrees          (since 0 <= theta <= 180)
```
**Answer: theta = 60 degrees**

> **TRAP:** `a . b` is a number, so you must never write `a . b = 10i`.
> And you can never take the dot product of a vector with a number.
> `(a . b) . c` is **meaningless** — you cannot dot a number with a vector.

---

# TOPIC 3 — PROPERTIES OF THE DOT PRODUCT

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   1.  a . b   =  b . a                    (order does NOT matter) |
  |                                                                   |
  |   2.  a . (b + c)  =  a . b  +  a . c     (opens like brackets)   |
  |                                                                   |
  |   3.  (k a) . b  =  k (a . b)  =  a . (k b)                       |
  |                                                                   |
  |   4.  a . a   =  |a|^2         so    |a| = sqrt(a . a)            |
  |                                                                   |
  |   5.  a . 0   =  0             (0 = the zero vector)              |
  |                                                                   |
  |   6.  a . b = 0   <=>   a = 0  or  b = 0  or  a is perp to b      |
  |                                                                   |
  +-------------------------------------------------------------------+
```

Property 2 is the one that makes everything else work. Because brackets open
normally, all your old algebra still applies:

```
  (a + b) . (a + b)  =  a.a + a.b + b.a + b.b
                     =  |a|^2 + 2(a.b) + |b|^2

  So      |a + b|^2  =  |a|^2 + |b|^2 + 2 (a . b)
  And     |a - b|^2  =  |a|^2 + |b|^2 - 2 (a . b)

  Adding: |a+b|^2 + |a-b|^2  =  2|a|^2 + 2|b|^2      (parallelogram law)
  Subtr.: |a+b|^2 - |a-b|^2  =  4 (a . b)
```

### WORKED EXAMPLE 3.1
`|a| = 3`, `|b| = 4`, angle between them = 60 degrees. Find `|a + b|` and `|a - b|`.

```
  STEP 1   First get a . b.
              a . b = 3 x 4 x cos 60 = 12 x (1/2) = 6

  STEP 2   |a + b|^2 = |a|^2 + |b|^2 + 2(a.b)
                     = 9 + 16 + 2(6)
                     = 9 + 16 + 12  =  37
           |a + b| = sqrt(37)

  STEP 3   |a - b|^2 = |a|^2 + |b|^2 - 2(a.b)
                     = 9 + 16 - 12  =  13
           |a - b| = sqrt(13)
```
**Answer: |a + b| = sqrt(37) , |a - b| = sqrt(13)**

### WORKED EXAMPLE 3.2 (a favourite 2-mark question)
Show that if `|a + b| = |a - b|` then a is perpendicular to b.

```
  STEP 1   Square both sides (both are lengths, so both are >= 0).
              |a + b|^2  =  |a - b|^2

  STEP 2   Expand each side.
              |a|^2 + |b|^2 + 2(a.b)  =  |a|^2 + |b|^2 - 2(a.b)

  STEP 3   Cancel |a|^2 and |b|^2 from both sides.
              2(a.b) = -2(a.b)

  STEP 4   Bring together.   4(a.b) = 0   =>   a . b = 0

  STEP 5   a . b = 0 means a is PERPENDICULAR to b.        (proved)
```

> **TRAP:** `(a + b)^2` is NOT allowed notation for vectors. You must write
> `|a + b|^2` or `(a + b) . (a + b)`. Marks are cut for the lazy version.

---

# TOPIC 4 — THE DOT PRODUCTS OF i, j, k

This tiny table is the engine of the whole chapter.

```
       .  |   i     j     k
     -----+-----------------
       i  |   1     0     0
       j  |   0     1     0
       k  |   0     0     1
```

Why? Each of i, j, k has length 1, so `i . i = 1 x 1 x cos 0 = 1`.
And i is perpendicular to j, so `i . j = 1 x 1 x cos 90 = 0`.

```
  +---------------------------------------------------+
  |     i.i = j.j = k.k = 1                           |
  |     i.j = j.k = k.i = 0   (and the reverses too)  |
  +---------------------------------------------------+
```

**Say it in words: "same one gives 1, different ones give 0."**

---

# TOPIC 5 — THE COMPONENT FORM (the one you actually use)

Take `a = a1 i + a2 j + a3 k` and `b = b1 i + b2 j + b3 k` and just open
the brackets, using the table from TOPIC 4. Every mixed term dies.

```
  a . b = (a1 i + a2 j + a3 k) . (b1 i + b2 j + b3 k)

        = a1b1 (i.i) + a1b2 (i.j) + a1b3 (i.k)
        + a2b1 (j.i) + a2b2 (j.j) + a2b3 (j.k)
        + a3b1 (k.i) + a3b2 (k.j) + a3b3 (k.k)

        = a1b1 (1) + a1b2 (0) + a1b3 (0)
        + a2b1 (0) + a2b2 (1) + a2b3 (0)
        + a3b1 (0) + a3b2 (0) + a3b3 (1)
```

```
  +-------------------------------------------------------------+
  |                                                             |
  |        a . b   =   a1 b1  +  a2 b2  +  a3 b3                |
  |                                                             |
  |   "Multiply the i's, multiply the j's, multiply the k's,    |
  |    then ADD the three answers."                             |
  |                                                             |
  +-------------------------------------------------------------+
```

### WORKED EXAMPLE 5.1
`a = 2i + 3j - k` , `b = i - 2j + 4k`. Find `a . b`.

```
  Line them up:

          i        j        k
   a  :   2        3       -1
   b  :   1       -2        4
         ----     ----     ----
        2 x 1    3 x -2   -1 x 4
         = 2      = -6     = -4

   a . b  =  2 + (-6) + (-4)  =  -8
```
**Answer: a . b = -8** (negative, so the angle between them is obtuse)

### WORKED EXAMPLE 5.2
`a = i + 2j + 3k` , `b = 3i - 2j + k`. Find `a . b`, `|a|` and `|b|`.

```
  a . b = (1)(3) + (2)(-2) + (3)(1)  =  3 - 4 + 3  =  2

  |a|   = sqrt(1^2 + 2^2 + 3^2)   = sqrt(1 + 4 + 9)  = sqrt(14)

  |b|   = sqrt(3^2 + (-2)^2 + 1^2) = sqrt(9 + 4 + 1) = sqrt(14)
```
**Answer: a . b = 2 , |a| = sqrt(14) , |b| = sqrt(14)**

> **TRAP:** Sign errors. Write the two rows of numbers down one above the
> other before you multiply anything, exactly as in Example 5.1. Do not do
> it in your head. This one habit saves more marks than any formula.

---

# TOPIC 6 — THE ANGLE BETWEEN TWO VECTORS

Rearrange the definition and you get the single most-asked formula in this
chapter.

```
  +---------------------------------------------------------------+
  |                                                               |
  |                       a . b            a1b1 + a2b2 + a3b3     |
  |     cos(theta)  =  ----------  =  --------------------------  |
  |                     |a| |b|        |a| |b|                    |
  |                                                               |
  |     theta = the angle between a and b,  0 <= theta <= 180     |
  |                                                               |
  +---------------------------------------------------------------+
```

**The fixed 4-step routine. Never deviate from it.**

```
  STEP 1   compute  a . b        (a number)
  STEP 2   compute  |a|          (a number)
  STEP 3   compute  |b|          (a number)
  STEP 4   cos theta = STEP1 / (STEP2 x STEP3)  ->  read off theta
```

### WORKED EXAMPLE 6.1 (the classic)
Find the angle between `a = i + 2j + 3k` and `b = 3i - j + 2k`.

```
  STEP 1   a . b = (1)(3) + (2)(-1) + (3)(2)
                 = 3 - 2 + 6
                 = 7

  STEP 2   |a| = sqrt(1 + 4 + 9)  = sqrt(14)

  STEP 3   |b| = sqrt(9 + 1 + 4)  = sqrt(14)

  STEP 4   cos theta =      7            7        7      1
                       -------------- = ------ = ---- = ---
                       sqrt14 x sqrt14    14      14     2

           cos theta = 1/2   =>   theta = 60 degrees
```
**Answer: 60 degrees**

### WORKED EXAMPLE 6.2 (the angle between the diagonals of a cube)
A cube has edges of length 1 along i, j, k. Find the angle between two
diagonals of the cube.

```
                 H---------G
                /|        /|
               E---------F |
               | |       | |          Take the cube with one corner at
               | D-------|-C          the origin O = (0,0,0).
               |/        |/
               O---------B

  STEP 1   One diagonal runs from O(0,0,0) to G(1,1,1):
              d1 = i + j + k

           Another diagonal runs from B(1,0,0) to H(0,1,1):
              d2 = (0-1)i + (1-0)j + (1-0)k = -i + j + k

  STEP 2   d1 . d2 = (1)(-1) + (1)(1) + (1)(1) = -1 + 1 + 1 = 1

  STEP 3   |d1| = sqrt(1+1+1) = sqrt3        |d2| = sqrt(1+1+1) = sqrt3

  STEP 4   cos theta =    1          1
                       ---------- = ---
                       sqrt3 x sqrt3   3

           theta = the angle whose cosine is 1/3
                 = about 70 degrees 32 minutes
```
**Answer: cos theta = 1/3, i.e. about 70 deg 32 min**

> **TRAP:** If `cos theta` comes out NEGATIVE, do NOT drop the minus sign.
> A negative cosine means an obtuse angle, and that is a perfectly good answer.
> Example: `cos theta = -1/2` gives `theta = 120 degrees`, not 60.

---

# TOPIC 7 — THE PERPENDICULARITY CONDITION

```
  +-------------------------------------------------------------+
  |                                                             |
  |     a is PERPENDICULAR to b     <=>     a . b  =  0         |
  |                                                             |
  |     (also called ORTHOGONAL, for non-zero a and b)          |
  |                                                             |
  +-------------------------------------------------------------+
```

This is a 2-mark gift almost every year. The question hides one letter
inside a vector and asks you to find it.

### WORKED EXAMPLE 7.1
Find x so that `a = 2i + 4j - k` is perpendicular to `b = 3i - 2j + x k`.

```
  STEP 1   Perpendicular means the dot product is zero.
              a . b = 0

  STEP 2   Compute the dot product in terms of x.
              (2)(3) + (4)(-2) + (-1)(x) = 0
              6 - 8 - x = 0
              -2 - x = 0

  STEP 3   Solve.
              x = -2
```
**Answer: x = -2**

### WORKED EXAMPLE 7.2
Show that `a = 2i - j + k` and `b = i - 3j - 5k` are perpendicular.

```
  a . b = (2)(1) + (-1)(-3) + (1)(-5)
        = 2 + 3 - 5
        = 0

  Since a . b = 0 and neither vector is the zero vector,
  a is perpendicular to b.
```

### WORKED EXAMPLE 7.3 (a proof-type 4-mark question)
Prove that the diagonals of a rhombus are perpendicular to each other.

```
                 D------------C
                /            /
               /            /       Let  AB = a  (vector)
              /            /        and  AD = b  (vector)
             A------------B
                                    A rhombus has ALL SIDES EQUAL,
                                    so  |a| = |b|

  STEP 1   Write the two diagonals as vectors.
              AC = AB + BC = a + b
              DB = AB - AD = a - b

  STEP 2   Dot them together.
              AC . DB = (a + b) . (a - b)
                      = a.a - a.b + b.a - b.b
                      = |a|^2 - |b|^2          (since a.b = b.a, they cancel)

  STEP 3   In a rhombus |a| = |b| , so |a|^2 - |b|^2 = 0.
              AC . DB = 0

  STEP 4   A zero dot product means the two diagonals are perpendicular.
```
**Proved.**

---

# TOPIC 8 — PROJECTION: THE SHADOW OF ONE VECTOR ON ANOTHER

Shine a torch straight down onto vector a. The shadow that b casts on a is
the **projection of b on a**.

```
              b
              ^
             /|
            / |
      |b|  /  |   the dashed line is perpendicular to a
          /   |
         /    |
        /theta|
       +------+-------------------->  a
       |<---->|
        length = |b| cos theta
                = the PROJECTION of b on a
```

Now `a . b = |a||b| cos theta`, so `|b| cos theta = (a . b)/|a|`.

```
  +-----------------------------------------------------------------+
  |                                                                 |
  |                                     a . b                       |
  |   PROJECTION (length) of b on a = ---------      A NUMBER       |
  |                                      |a|                        |
  |                                                                 |
  |                                     a . b                       |
  |   PROJECTION (length) of a on b = ---------      A NUMBER       |
  |                                      |b|                        |
  |                                                                 |
  |                                    ( a . b )                    |
  |   PROJECTION VECTOR of b on a  =   ---------  a    A VECTOR     |
  |                                      |a|^2                      |
  |                                                                 |
  +-----------------------------------------------------------------+
```

**Reading the question:** "projection **OF b ON a**" — the vector after
the word **ON** is the one you divide by. Underline it in the question paper.

```
      "projection of  b  on  a "
                      ^       ^
                      |       |
                 the shadow   the floor  <-- divide by THIS one's length
```

### WORKED EXAMPLE 8.1
Find the projection of `a = 2i + 3j + 2k` on `b = i + 2j + k`.

```
  STEP 1   The word "on" points at b, so we divide by |b|.

  STEP 2   a . b = (2)(1) + (3)(2) + (2)(1) = 2 + 6 + 2 = 10

  STEP 3   |b| = sqrt(1 + 4 + 1) = sqrt(6)

  STEP 4   Projection = (a . b)/|b| = 10 / sqrt(6)

           Rationalise if you like:  10 sqrt6 / 6  =  5 sqrt6 / 3
```
**Answer: 10/sqrt(6) , that is 5 sqrt(6)/3**

### WORKED EXAMPLE 8.2
Find the projection of `a = i + 3j - k` on `b = 2i - 3j + 6k`.

```
  STEP 1   a . b = (1)(2) + (3)(-3) + (-1)(6) = 2 - 9 - 6 = -13

  STEP 2   |b| = sqrt(4 + 9 + 36) = sqrt(49) = 7

  STEP 3   Projection = -13/7
```
**Answer: -13/7**
The minus sign is correct and important: it says the shadow falls on the
*opposite* side, so the angle between a and b is obtuse.

> **TRAP:** Do not "make it positive". The projection is a signed number.
> Only the *magnitude* of a projection is forced to be positive, and the
> question would have to say the word "magnitude".

---

# TOPIC 9 — COMPONENTS ALONG b AND PERPENDICULAR TO b

Any vector a can be split into exactly two pieces: one lying **along** b and
one standing **perpendicular** to b. This is a standard 4-mark question.

```
              a
              ^
             /|
            / |
           /  |  <---- this piece is PERPENDICULAR to b
          /   |         = a - (component along b)
         /    |
        +-----+---------------->  b
        |<--->|
         this piece is ALONG b
         = ((a.b)/|b|^2) b
```

```
  +---------------------------------------------------------------+
  |                                                               |
  |                              ( a . b )                        |
  |   Component of a ALONG b  =  ---------  b       (a VECTOR)    |
  |                                |b|^2                          |
  |                                                               |
  |                                          ( a . b )            |
  |   Component of a PERP to b  =   a   -    ---------  b         |
  |                                            |b|^2              |
  |                                                               |
  |   and the two pieces ADD BACK UP to a.  Always check this.    |
  |                                                               |
  +---------------------------------------------------------------+
```

### WORKED EXAMPLE 9.1
Find the components of `a = 2i + 3j + k` along and perpendicular to
`b = i + j + k`.

```
  STEP 1   a . b = (2)(1) + (3)(1) + (1)(1) = 2 + 3 + 1 = 6

  STEP 2   |b|^2 = 1^2 + 1^2 + 1^2 = 3
           (note: |b|^2, so NO square root here)

  STEP 3   Component ALONG b:

              (a.b)/|b|^2 x b  =  (6/3) (i + j + k)
                               =  2 (i + j + k)
                               =  2i + 2j + 2k

  STEP 4   Component PERPENDICULAR to b:

              a - (component along b)
                 = (2i + 3j + k) - (2i + 2j + 2k)
                 = (2-2)i + (3-2)j + (1-2)k
                 = 0i + j - k
                 = j - k

  STEP 5   CHECK 1 - do the two pieces add back to a?
              (2i + 2j + 2k) + (j - k) = 2i + 3j + k  = a     YES

  STEP 6   CHECK 2 - is the second piece really perpendicular to b?
              (j - k) . (i + j + k) = 0 + 1 - 1 = 0           YES
```
**Answer: along b = 2i + 2j + 2k , perpendicular to b = j - k**

> **TRAP:** In the "along" formula the denominator is `|b|^2`, NOT `|b|`.
> Because the answer must be a vector, you multiply by b, and b already
> carries one factor of length — so you must divide by length twice.

---

# TOPIC 10 — GEOMETRICAL MEANING AND USEFUL IDENTITIES

The dot product is a machine for turning geometry into arithmetic.
Here is the complete list of what it "means".

| Expression | Geometric meaning |
|---|---|
| a . a | the square of the length of a |
| a . b | (length of a) x (shadow of b on a) |
| a . b = 0 | a and b meet at a right angle |
| a . b > 0 | the angle between them is acute |
| a . b < 0 | the angle between them is obtuse |
| (a . b)/\|b\| | the length of the shadow of a on b |
| \|a + b\|^2 - \|a - b\|^2 | equals 4(a . b) |

### WORKED EXAMPLE 10.1 (proving the COSINE RULE — a classic 7-mark proof)
In triangle ABC, prove that `a^2 = b^2 + c^2 - 2 b c cos A`.

```
                    A
                   /|\
             c    / | \    b
                 /  |  \
                /   |   \
               B---------C
                    a

  Here a, b, c are the LENGTHS of the sides opposite A, B, C.

  STEP 1   Set up vectors from the vertex A.
              Let  AB = p (vector)   with  |p| = c
              Let  AC = q (vector)   with  |q| = b
              The angle between p and q at A is the angle A.

  STEP 2   Write the third side as a vector.
              BC = AC - AB = q - p      and     |BC| = a

  STEP 3   Take the square of the length.
              a^2 = |q - p|^2
                  = (q - p) . (q - p)

  STEP 4   Expand using the distributive property.
                  = q.q - q.p - p.q + p.p
                  = |q|^2 - 2 (p . q) + |p|^2

  STEP 5   Replace the lengths and the dot product.
              |q|^2 = b^2 ,  |p|^2 = c^2
              p . q = |p||q| cos A = c b cos A

              a^2 = b^2 + c^2 - 2 b c cos A
```
**Proved.** The same working from vertex B gives `b^2 = c^2 + a^2 - 2ca cos B`.

### WORKED EXAMPLE 10.2
If `|a| = |b| = |c| = 1` and `a + b + c = 0`, find `a.b + b.c + c.a`.

```
  STEP 1   Since a + b + c = 0, take the square of its length:
              |a + b + c|^2 = 0

  STEP 2   Expand.
              (a+b+c).(a+b+c)
                = a.a + b.b + c.c + 2(a.b + b.c + c.a)
                = |a|^2 + |b|^2 + |c|^2 + 2(a.b + b.c + c.a)

  STEP 3   Substitute the lengths.
              0 = 1 + 1 + 1 + 2(a.b + b.c + c.a)
              0 = 3 + 2(a.b + b.c + c.a)

  STEP 4   Solve.
              a.b + b.c + c.a = -3/2
```
**Answer: -3/2**

---

# TOPIC 11 — WORK DONE BY A FORCE

This is the physics use of the dot product, and it is worth 2 or 4 marks.

```
         F (force)
          ^
         /
        /
       / theta
      +----------------------->  d  (displacement)

   Only the part of F that lies ALONG d actually does any work.
   That part has size |F| cos theta.

   So      WORK  =  (|F| cos theta) x |d|  =  F . d
```

```
  +-------------------------------------------------------------+
  |                                                             |
  |     W  =  F . d          where  d = displacement vector     |
  |                                                             |
  |     If a particle moves from A to B,   d = AB = B - A       |
  |                                                             |
  |     Several forces?  W = (F1 + F2 + F3) . d                 |
  |                                                             |
  +-------------------------------------------------------------+
```

### WORKED EXAMPLE 11.1
A force `F = 3i + 2j - 4k` moves a particle from `A(1, 2, 3)` to `B(5, 4, 1)`.
Find the work done.

```
  STEP 1   Find the displacement vector.
              d = AB = B - A
                = (5 - 1)i + (4 - 2)j + (1 - 3)k
                = 4i + 2j - 2k

  STEP 2   Work = F . d
                = (3)(4) + (2)(2) + (-4)(-2)
                = 12 + 4 + 8
                = 24
```
**Answer: 24 units of work**

### WORKED EXAMPLE 11.2
Forces `F1 = i + 2j - 3k`, `F2 = 2i - j + k` and `F3 = -i + j + 2k` act on a
particle which moves from `A(2, 1, 0)` to `B(3, 3, 2)`. Find the work done.

```
  STEP 1   Add the forces first (much faster than three separate dots).
              F = F1 + F2 + F3
                = (1 + 2 - 1)i + (2 - 1 + 1)j + (-3 + 1 + 2)k
                = 2i + 2j + 0k
                = 2i + 2j

  STEP 2   d = AB = (3-2)i + (3-1)j + (2-0)k = i + 2j + 2k

  STEP 3   W = F . d = (2)(1) + (2)(2) + (0)(2) = 2 + 4 + 0 = 6
```
**Answer: 6 units**

> **TRAP:** `d` is the DISPLACEMENT, that is **B minus A**, in that order.
> Writing `A - B` flips the sign of your whole answer.

---

# TOPIC 12 — THE CROSS (VECTOR) PRODUCT: DEFINITION

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |        a x b   =   |a| |b| sin(theta)  n                          |
  |                                                                   |
  |   theta = angle between a and b   (0 <= theta <= 180)             |
  |   n     = the UNIT vector perpendicular to BOTH a and b,          |
  |           pointing the way given by the RIGHT-HAND RULE           |
  |                                                                   |
  +-------------------------------------------------------------------+
```

**The right-hand rule** (do this with your actual right hand):

```
          a x b
            ^
            |                Point the fingers of your RIGHT hand
            |                along  a , then curl them towards  b .
            |     b          Your THUMB now points along  a x b .
            |    /
            |   /
            |  /
            | /
            +-----------------> a

   Curl from b to a instead and your thumb flips DOWNWARDS.
   That is why    b x a  =  - (a x b).
```

The length of a x b has a beautiful meaning:

```
                 +---------------------+
                /                     /
               /                     /
          b   /       AREA          /       |a x b|  =  |a||b| sin theta
             /    = |a x b|        /                 =  AREA of this
            /                     /                     parallelogram
           /                     /
          +---------------------+
                    a
                                          (base |a|, height |b| sin theta)
```

---

# TOPIC 13 — PROPERTIES OF THE CROSS PRODUCT

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   1.  a x b  =  -(b x a)               ANTI-COMMUTATIVE           |
  |                                        order matters, sign flips  |
  |                                                                   |
  |   2.  a x (b + c) = (a x b) + (a x c)  distributive, brackets     |
  |                                        open normally              |
  |                                                                   |
  |   3.  (k a) x b = k (a x b) = a x (k b)                           |
  |                                                                   |
  |   4.  a x a  =  0        (the ZERO VECTOR, not the number 0)      |
  |                                                                   |
  |   5.  a x b  =  0   <=>   a = 0 or b = 0 or a is PARALLEL to b    |
  |                                                                   |
  |   6.  (a x b) is perpendicular to a AND perpendicular to b:       |
  |          a . (a x b) = 0     and     b . (a x b) = 0              |
  |                                                                   |
  |   7.  NOT ASSOCIATIVE:   a x (b x c)  is NOT  (a x b) x c         |
  |                                                                   |
  +-------------------------------------------------------------------+
```

**Property 7 in one tiny example — memorise this, it is a 2-mark answer:**

```
     i x (i x j)  =  i x k   =  -j          <-- one answer

     (i x i) x j  =  0 x j   =  0           <-- a completely different answer

     -j  is not  0   =>   the cross product is NOT associative.
```

**Lagrange's Identity** (links the two products, often asked in Section B):

```
  +---------------------------------------------------------------+
  |                                                               |
  |     |a x b|^2  +  (a . b)^2   =   |a|^2 |b|^2                 |
  |                                                               |
  |  (because  sin^2 theta + cos^2 theta = 1 )                    |
  |                                                               |
  |  Also written:   |a x b|^2  =  |a|^2 |b|^2 - (a.b)^2          |
  |                                                               |
  |                              =  | a.a   a.b |                 |
  |                                 | a.b   b.b |                 |
  |                                                               |
  +---------------------------------------------------------------+
```

### WORKED EXAMPLE 13.1
`|a| = 13`, `|b| = 5`, `a . b = 60`. Find `|a x b|`.

```
  STEP 1   Lagrange:  |a x b|^2 = |a|^2 |b|^2 - (a.b)^2

  STEP 2   |a x b|^2 = (13)^2 (5)^2 - (60)^2
                     = 169 x 25 - 3600
                     = 4225 - 3600
                     = 625

  STEP 3   |a x b| = sqrt(625) = 25
```
**Answer: 25**

> **TRAP:** `a x a = 0` where 0 is the ZERO VECTOR (write it as 0 with a bar,
> or say "the zero vector"). But `a . a = |a|^2` which is a NUMBER.
> Mixing these up is the single most common cross-product error.

---

# TOPIC 14 — THE CROSS PRODUCTS OF i, j, k

Learn the circle. It takes 20 seconds and it never leaves you.

```
                    i
                   / \
                  /   \
        going    /     \    going
      CLOCKWISE /       \  CLOCKWISE
      = PLUS   k---------j = PLUS


      Go WITH the arrows (i -> j -> k -> i)  :  answer is POSITIVE
      Go AGAINST the arrows                  :  answer is NEGATIVE
```

```
  +---------------------------------------------------+
  |                                                   |
  |     i x j =  k        j x i = -k                  |
  |     j x k =  i        k x j = -i                  |
  |     k x i =  j        i x k = -j                  |
  |                                                   |
  |     i x i = j x j = k x k = 0  (the zero vector)  |
  |                                                   |
  +---------------------------------------------------+
```

Full table:

```
       x  |    i      j      k
     -----+----------------------
       i  |    0      k     -j
       j  |   -k      0      i
       k  |    j     -i      0
```

Read it as ROW x COLUMN. So `j x k` = row j, column k = `i`. Correct.

---

# TOPIC 15 — THE DETERMINANT FORM (the working method)

Open the brackets in `(a1 i + a2 j + a3 k) x (b1 i + b2 j + b3 k)` using
TOPIC 14 and after some tidying you get exactly a 3 x 3 determinant.

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |                     |  i     j     k  |                           |
  |        a x b   =    |  a1    a2    a3 |                           |
  |                     |  b1    b2    b3 |                           |
  |                                                                   |
  |   =  (a2 b3 - a3 b2) i  -  (a1 b3 - a3 b1) j  +  (a1 b2 - a2 b1) k|
  |                                                                   |
  |            ^^^^ NOTE THE MINUS SIGN IN FRONT OF j ^^^^            |
  |                                                                   |
  +-------------------------------------------------------------------+
```

**How to expand it, by covering columns:**

```
   For the  i  part : cover column 1        For the  j  part : cover column 2
   |  .    j    k  |                        |  i    .     k  |
   |  .    a2   a3 |  -> a2b3 - a3b2        |  a1   .    a3  | -> a1b3 - a3b1
   |  .    b2   b3 |                        |  b1   .    b3  |    then PUT A
                                                                 MINUS IN FRONT

   For the  k  part : cover column 3
   |  i    j    .  |
   |  a1   a2   .  |  -> a1b2 - a2b1
   |  b1   b2   .  |
```

### WORKED EXAMPLE 15.1
`a = 2i + j + 3k` , `b = 3i + 5j - 2k`. Find `a x b` and `|a x b|`.

```
  STEP 1   Set up the determinant. TOP row is always i j k.
           MIDDLE row is the FIRST vector.  BOTTOM row is the SECOND.

                    |  i    j    k  |
           a x b =  |  2    1    3  |
                    |  3    5   -2  |

  STEP 2   The i part - cover column 1.
                    |  1    3  |
                    |  5   -2  |   =  (1)(-2) - (3)(5) = -2 - 15 = -17

  STEP 3   The j part - cover column 2, then PUT A MINUS IN FRONT.
                    |  2    3  |
                    |  3   -2  |   =  (2)(-2) - (3)(3) = -4 - 9 = -13

                    with the minus in front:  -(-13) = +13

  STEP 4   The k part - cover column 3.
                    |  2    1  |
                    |  3    5  |   =  (2)(5) - (1)(3) = 10 - 3 = 7

  STEP 5   Put it together.
              a x b  =  -17 i  +  13 j  +  7 k

  STEP 6   Magnitude.
              |a x b| = sqrt( (-17)^2 + 13^2 + 7^2 )
                      = sqrt( 289 + 169 + 49 )
                      = sqrt( 507 )
                      = sqrt( 169 x 3 )
                      = 13 sqrt(3)

  STEP 7   CHECK (20 seconds, always do it):
              a . (a x b) = (2)(-17) + (1)(13) + (3)(7)
                          = -34 + 13 + 21 = 0        YES
              b . (a x b) = (3)(-17) + (5)(13) + (-2)(7)
                          = -51 + 65 - 14 = 0        YES
```
**Answer: a x b = -17i + 13j + 7k , |a x b| = 13 sqrt(3)**

> **TRAP:** The MINUS in front of the j term. Forget it and everything
> afterwards is wrong. Write the sign board `+ - +` above your determinant
> before you start expanding.

> **TRAP:** Row order. The FIRST-named vector goes in the MIDDLE row.
> Swap the rows and your answer comes out with every sign flipped.

---

# TOPIC 16 — THE PARALLEL (COLLINEAR) CONDITION

```
  +---------------------------------------------------------------+
  |                                                               |
  |   a is PARALLEL to b    <=>    a x b  =  0  (zero vector)     |
  |                                                               |
  |   equivalently:         a1     a2     a3                      |
  |                        ---- = ---- = ----                     |
  |                         b1     b2     b3                      |
  |                                                               |
  |   equivalently:         a = k b   for some number k           |
  |                                                               |
  +---------------------------------------------------------------+
```

Compare the two zero conditions and never confuse them again:

```
  +----------------------+-------------------------+
  |   a . b  =  0        |    a x b  =  0          |
  |   PERPENDICULAR      |    PARALLEL             |
  |   (90 degrees)       |    (0 or 180 degrees)   |
  +----------------------+-------------------------+
```

### WORKED EXAMPLE 16.1
Find x so that `a = 2i + x j + 3k` is parallel to `b = 4i - 6j + 6k`.

```
  STEP 1   Parallel means the components are proportional.
               2      x       3
             ---- = ----- = -----
               4     -6       6

  STEP 2   From the first and last:  2/4 = 3/6 = 1/2.  Consistent, good.

  STEP 3   So   x / (-6) = 1/2   =>   x = -3
```
**Answer: x = -3**

---

# TOPIC 17 — A UNIT VECTOR PERPENDICULAR TO TWO GIVEN VECTORS

Since `a x b` is already perpendicular to both a and b, you only have to
shrink it to length 1.

```
  +---------------------------------------------------------------+
  |                                                               |
  |   Unit vector perpendicular to both a and b                   |
  |                                                               |
  |                        a x b                                  |
  |          n   =   +/-  --------                                |
  |                       |a x b|                                 |
  |                                                               |
  |   The +/- is REQUIRED: there are TWO such unit vectors,       |
  |   one pointing up out of the plane, one pointing down.        |
  |                                                               |
  +---------------------------------------------------------------+
```

### WORKED EXAMPLE 17.1
Find a unit vector perpendicular to both `a = 2i + j + 3k` and `b = 3i + 5j - 2k`.

```
  STEP 1   From WORKED EXAMPLE 15.1 we already have
              a x b   = -17i + 13j + 7k
              |a x b| = 13 sqrt(3)

  STEP 2   Divide.
                          -17i + 13j + 7k
              n  =  +/-  ------------------
                             13 sqrt(3)
```
**Answer: n = +/- (-17i + 13j + 7k) / (13 sqrt 3)**

### WORKED EXAMPLE 17.2
Find a unit vector perpendicular to the plane through the points
`A(1, -1, 2)`, `B(2, 0, -1)` and `C(0, 2, 1)`.

```
  STEP 1   Two vectors that LIE IN the plane:
              AB = B - A = (2-1)i + (0-(-1))j + (-1-2)k = i + j - 3k
              AC = C - A = (0-1)i + (2-(-1))j + (1-2)k  = -i + 3j - k

  STEP 2   AB x AC is perpendicular to the plane.

                       |  i    j    k  |
              AB x AC= |  1    1   -3  |
                       | -1    3   -1  |

              i part :  (1)(-1) - (-3)(3)  = -1 + 9  =  8
              j part : -[ (1)(-1) - (-3)(-1) ] = -[ -1 - 3 ] = -(-4) = 4
              k part :  (1)(3) - (1)(-1)   =  3 + 1  =  4

              AB x AC = 8i + 4j + 4k   =  4(2i + j + k)

  STEP 3   |AB x AC| = 4 sqrt(4 + 1 + 1) = 4 sqrt(6)

  STEP 4   n = +/- 4(2i + j + k) / (4 sqrt6) = +/- (2i + j + k)/sqrt(6)
```
**Answer: +/- (2i + j + k)/sqrt(6)**

> **TRAP:** Taking out the common factor 4 in STEP 2 makes STEP 3 four times
> easier. Always look for a common factor in `a x b` before finding its length.

---

# TOPIC 18 — AREA OF A PARALLELOGRAM AND OF A TRIANGLE

```
  +---------------------------------------------------------------+
  |                                                               |
  |  PARALLELOGRAM, given ADJACENT SIDES a and b                  |
  |                                                               |
  |        Area  =  |a x b|                                       |
  |                                                               |
  |  PARALLELOGRAM, given DIAGONALS d1 and d2                     |
  |                                                               |
  |        Area  =  (1/2) |d1 x d2|                               |
  |                                                               |
  |  TRIANGLE, given two sides a and b from the same vertex       |
  |                                                               |
  |        Area  =  (1/2) |a x b|                                 |
  |                                                               |
  |  TRIANGLE ABC, given the three vertices                       |
  |                                                               |
  |        Area  =  (1/2) |AB x AC|                               |
  |                                                               |
  +---------------------------------------------------------------+
```

The picture that explains the 1/2:

```
        +-------------------+                    +
       /                   /                    /|
      /                   /                    / |
     /   PARALLELOGRAM   /                    /  |   TRIANGLE
    /     = |a x b|     /                    /   |   = HALF of it
   /                   /                    /    |
  +-------------------+                    +-----+
```

### WORKED EXAMPLE 18.1
Find the area of the triangle whose vertices are `A(1,1,1)`, `B(1,2,3)`, `C(2,3,1)`.

```
  STEP 1   Two side vectors from the SAME vertex A.
              AB = B - A = (1-1)i + (2-1)j + (3-1)k = 0i + j + 2k
              AC = C - A = (2-1)i + (3-1)j + (1-1)k = i + 2j + 0k

  STEP 2   Cross them.
                        |  i    j    k  |
              AB x AC = |  0    1    2  |
                        |  1    2    0  |

              i part :  (1)(0) - (2)(2)  = 0 - 4  = -4
              j part : -[ (0)(0) - (2)(1) ] = -[ 0 - 2 ] = +2
              k part :  (0)(2) - (1)(1)  = 0 - 1  = -1

              AB x AC = -4i + 2j - k

  STEP 3   Magnitude.
              |AB x AC| = sqrt(16 + 4 + 1) = sqrt(21)

  STEP 4   Area = (1/2) sqrt(21)
```
**Answer: sqrt(21)/2 square units**

### WORKED EXAMPLE 18.2
Find the area of the parallelogram whose diagonals are `d1 = 3i + j - 2k`
and `d2 = i - 3j + 4k`.

```
  STEP 1   Diagonals given, so use  Area = (1/2)|d1 x d2|.

                        |  i    j    k  |
              d1 x d2 = |  3    1   -2  |
                        |  1   -3    4  |

              i part :  (1)(4) - (-2)(-3) = 4 - 6 = -2
              j part : -[ (3)(4) - (-2)(1) ] = -[ 12 + 2 ] = -14
              k part :  (3)(-3) - (1)(1) = -9 - 1 = -10

              d1 x d2 = -2i - 14j - 10k

  STEP 2   |d1 x d2| = sqrt(4 + 196 + 100) = sqrt(300)
                     = sqrt(100 x 3) = 10 sqrt(3)

  STEP 3   Area = (1/2)(10 sqrt3) = 5 sqrt(3)
```
**Answer: 5 sqrt(3) square units**

> **TRAP:** Read whether you were given SIDES or DIAGONALS.
> Sides -> no 1/2. Diagonals -> put in the 1/2. Triangle -> put in the 1/2.

---

# TOPIC 19 — MOMENT (TORQUE) OF A FORCE

**Moment about a POINT.** A force F acts at a point A. How hard does it try
to spin things about a point P?

```
              F
              ^
             /
            /
           A                 r = PA = A - P   (from the PIVOT to the
          /                                    POINT WHERE F ACTS)
         /
        P  (pivot)

        MOMENT  M  =  r x F           <-- a VECTOR
        |M| = |r||F| sin theta = (force) x (perpendicular distance)
```

```
  +---------------------------------------------------------------+
  |                                                               |
  |   Moment of F (acting at A) about the point P                 |
  |                                                               |
  |        M  =  r x F        where  r = PA = (position of A)     |
  |                                            - (position of P)  |
  |                                                               |
  |   Moment of F (acting at A) about a LINE through P            |
  |   whose direction is the UNIT vector u                        |
  |                                                               |
  |        moment  =  (r x F) . u   =   [ r  F  u ]   <-- NUMBER  |
  |                                                               |
  +---------------------------------------------------------------+
```

Notice the difference: about a **point** the answer is a **vector**;
about a **line** the answer is a **number** (you only keep the part of the
turning that twists around that line).

### WORKED EXAMPLE 19.1
Find the moment about the point `M(-2, 4, -6)` of the force represented by
`AB`, where `A = (1, 2, -3)` and `B = (3, -4, 2)`.

```
  STEP 1   The force vector.
              F = AB = B - A = (3-1)i + (-4-2)j + (2-(-3))k
                             = 2i - 6j + 5k

  STEP 2   The position vector from the pivot M to the point A where the
           force acts.
              r = MA = A - M = (1-(-2))i + (2-4)j + (-3-(-6))k
                             = 3i - 2j + 3k

  STEP 3   Moment = r x F.

                     |  i    j    k  |
              r x F= |  3   -2    3  |
                     |  2   -6    5  |

              i part :  (-2)(5) - (3)(-6)  = -10 + 18 =  8
              j part : -[ (3)(5) - (3)(2) ] = -[ 15 - 6 ] = -9
              k part :  (3)(-6) - (-2)(2)  = -18 + 4 = -14

  STEP 4   Moment = 8i - 9j - 14k
```
**Answer: 8i - 9j - 14k**

### WORKED EXAMPLE 19.2 (moment about a LINE)
A force `F = 2i + j + 3k` acts at the point `A(1, 2, 0)`. Find its moment
about the line through the origin whose direction is the unit vector
`u = (2i + 2j + k)/3`.

```
  STEP 1   r = OA = i + 2j + 0k   (the line passes through the origin)

  STEP 2   r x F.
                      |  i    j    k  |
              r x F = |  1    2    0  |
                      |  2    1    3  |

              i part :  (2)(3) - (0)(1)  = 6
              j part : -[ (1)(3) - (0)(2) ] = -3
              k part :  (1)(1) - (2)(2)  = 1 - 4 = -3

              r x F = 6i - 3j - 3k

  STEP 3   Dot with the unit direction u.
              (r x F) . u = (6i - 3j - 3k) . (2i + 2j + k)/3
                          = [ (6)(2) + (-3)(2) + (-3)(1) ] / 3
                          = [ 12 - 6 - 3 ] / 3
                          = 3 / 3
                          = 1
```
**Answer: 1**

> **TRAP:** For a moment about a line, `u` must be a UNIT vector. If the
> question gives you a plain direction vector, divide it by its length first.

---

# TOPIC 20 — THE SCALAR TRIPLE PRODUCT [a b c]

Take three vectors. Cross the last two (that gives a vector), then dot the
first one into it (that gives a number).

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |        [ a b c ]   =   a . ( b x c )        <--  A NUMBER         |
  |                                                                   |
  |                        |  a1    a2    a3  |                       |
  |                    =   |  b1    b2    b3  |                       |
  |                        |  c1    c2    c3  |                       |
  |                                                                   |
  |   ROW 1 = a's numbers,  ROW 2 = b's,  ROW 3 = c's                 |
  |                                                                   |
  +-------------------------------------------------------------------+
```

That is the whole thing: **one ordinary 3 x 3 determinant.** If you can
evaluate a determinant from Chapter 3, you can already do this topic.

### WORKED EXAMPLE 20.1
`a = i - 2j + 3k` , `b = 2i + j - k` , `c = j + k`. Find `[a b c]`.

```
  STEP 1   Write c fully as  0i + 1j + 1k.  Do not leave the 0 out.

  STEP 2   Build the determinant, a on top, then b, then c.

                     |  1   -2    3  |
           [a b c] = |  2    1   -1  |
                     |  0    1    1  |

  STEP 3   Expand along the top row with the sign board  + - +.

           +1 x |  1   -1 |  =  1 x [ (1)(1) - (-1)(1) ] = 1 x (1 + 1) =  2
                |  1    1 |

           -(-2) x |  2   -1 |  = +2 x [ (2)(1) - (-1)(0) ] = 2 x 2   =  4
                   |  0    1 |

           +3 x |  2    1 |  =  3 x [ (2)(1) - (1)(0) ] = 3 x 2       =  6
                |  0    1 |

  STEP 4   Add:  [a b c] = 2 + 4 + 6 = 12
```
**Answer: [a b c] = 12**

---

# TOPIC 21 — PROPERTIES OF THE SCALAR TRIPLE PRODUCT

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   1.  CYCLIC property (rotate the letters, nothing changes):      |
  |                                                                   |
  |          [a b c] = [b c a] = [c a b]                              |
  |                                                                   |
  |          a ----> b                                                |
  |           \     /        keep going round the circle              |
  |            \   /         and the value stays the same             |
  |              c                                                    |
  |                                                                   |
  |   2.  SWAP any two letters  ->  the SIGN flips:                   |
  |                                                                   |
  |          [a b c] = -[b a c] = -[a c b] = -[c b a]                 |
  |                                                                   |
  |   3.  The dot and the cross can TRADE PLACES:                     |
  |                                                                   |
  |          a . (b x c)  =  (a x b) . c                              |
  |                                                                   |
  |   4.  If ANY TWO of the vectors are EQUAL, the answer is 0:       |
  |                                                                   |
  |          [a a c] = 0 ,   [a b a] = 0 ,   [a b b] = 0              |
  |                                                                   |
  |   5.  [ i  j  k ]  =  1                                           |
  |                                                                   |
  |   6.  [k a , b , c] = k [a b c]                                   |
  |                                                                   |
  |   7.  [a+d , b , c] = [a b c] + [d b c]                           |
  |                                                                   |
  +-------------------------------------------------------------------+
```

**Why property 4 is true, in one line:** the determinant would have two
identical rows, and a determinant with two identical rows is always 0.
Geometrically: the "box" is squashed flat, so its volume is 0.

**Why property 2 is true:** swapping two rows of a determinant flips its sign.

> **TRAP:** The cyclic order is `a -> b -> c -> a`. `[a c b]` is NOT the same
> as `[a b c]` — it is the NEGATIVE of it. One swap = one sign change.

---

# TOPIC 22 — VOLUME OF A PARALLELEPIPED AND OF A TETRAHEDRON

A "parallelepiped" is a squashed box: six faces, all of them parallelograms.

```
                    c
                    ^        +-------------------+
                    |       /                   /|
                    |      /                   / |
                    |     +-------------------+  |
                    |     |                   |  |
                    |     |     VOLUME        |  +
                    |     |  = |[a b c]|      | /
                    |     |                   |/
                    +---> +-------------------+
                   /              a
                  /
                 b

   Why?  Volume = (area of base) x (height)
               = |b x c|         x  (projection of a on the normal b x c)
               = |b x c| x  (a.(b x c))/|b x c|
               = a . (b x c)  =  [a b c]
   and we take the modulus because a volume cannot be negative.
```

```
  +---------------------------------------------------------------+
  |                                                               |
  |   Volume of PARALLELEPIPED with coterminous edges a, b, c     |
  |                                                               |
  |          V  =  | [a b c] |                                    |
  |                                                               |
  |   Volume of TETRAHEDRON with coterminous edges a, b, c        |
  |                                                               |
  |          V  =  (1/6) | [a b c] |                              |
  |                                                               |
  |   Volume of TETRAHEDRON with VERTICES A, B, C, D              |
  |                                                               |
  |          V  =  (1/6) | [ AB  AC  AD ] |                       |
  |                                                               |
  +---------------------------------------------------------------+
```

"Coterminous" just means "all three edges start from the same corner".

### WORKED EXAMPLE 22.1
Find the volume of the parallelepiped whose coterminous edges are
`a = i - 2j + 3k`, `b = 2i + j - k`, `c = j + k`.

```
  From WORKED EXAMPLE 20.1,  [a b c] = 12.

  Volume = |12| = 12 cubic units.
```
**Answer: 12 cubic units**

### WORKED EXAMPLE 22.2
Find the volume of the tetrahedron whose vertices are `A(1,2,1)`, `B(3,2,5)`,
`C(2,-1,0)` and `D(-1,0,1)`.

```
  STEP 1   Three edge vectors, ALL from the same vertex A.
              AB = B - A = (3-1)i + (2-2)j + (5-1)k   =  2i + 0j + 4k
              AC = C - A = (2-1)i + (-1-2)j + (0-1)k  =  1i - 3j - 1k
              AD = D - A = (-1-1)i + (0-2)j + (1-1)k  = -2i - 2j + 0k

  STEP 2   The determinant.

                              |  2    0    4  |
              [AB AC AD]  =   |  1   -3   -1  |
                              | -2   -2    0  |

  STEP 3   Expand along the top row (there is a 0 there, which helps).

           +2 x |  -3   -1 |  = 2 x [ (-3)(0) - (-1)(-2) ] = 2 x (0 - 2) = -4
                |  -2    0 |

           -0 x ( anything )                                             =  0

           +4 x |   1   -3 |  = 4 x [ (1)(-2) - (-3)(-2) ]
                |  -2   -2 |    = 4 x ( -2 - 6 ) = 4 x (-8)              = -32

           [AB AC AD] = -4 + 0 - 32 = -36

  STEP 4   Volume = (1/6)|-36| = 36/6 = 6
```
**Answer: 6 cubic units**

> **TRAP:** The answer to a determinant may be negative — that is fine, it
> only records the orientation. But a VOLUME is never negative. Take the
> modulus at the very end.

> **TRAP:** For a tetrahedron do not forget the 1/6. For a parallelepiped
> do not put a 1/6 in. Half the marks vanish either way.

---

# TOPIC 23 — COPLANARITY

Three vectors are **coplanar** if you can lay all three flat on one sheet of
paper (after sliding them to a common starting point).

```
     NOT COPLANAR                       COPLANAR
     (a real box, volume > 0)           (squashed flat, volume = 0)

        +--------+                      ------------------
       /        /|                      |  a   b     c   |
      +--------+ |                      | --> -->   -->  |
      |        | +                      ------------------
      |        |/                       all three lie in one plane
      +--------+
```

```
  +---------------------------------------------------------------+
  |                                                               |
  |   a, b, c are COPLANAR      <=>     [a b c]  =  0             |
  |                                                               |
  |   Four POINTS A, B, C, D are COPLANAR                         |
  |                             <=>     [ AB  AC  AD ]  =  0      |
  |                                                               |
  +---------------------------------------------------------------+
```

### WORKED EXAMPLE 23.1
Show that `a = i - 2j + 3k`, `b = -2i + 3j - 4k`, `c = i - 3j + 5k` are coplanar.

```
  STEP 1   Build the determinant.

                     |  1   -2    3  |
           [a b c] = | -2    3   -4  |
                     |  1   -3    5  |

  STEP 2   Expand along the top row, sign board  + - +.

           +1 x |  3   -4 |  = 1 x [ (3)(5) - (-4)(-3) ] = 1 x (15 - 12) =  3
                | -3    5 |

           -(-2) x | -2   -4 | = +2 x [ (-2)(5) - (-4)(1) ]
                   |  1    5 |   = 2 x ( -10 + 4 ) = 2 x (-6)            = -12

           +3 x | -2    3 |  = 3 x [ (-2)(-3) - (3)(1) ] = 3 x (6 - 3)   =  9
                |  1   -3 |

  STEP 3   [a b c] = 3 - 12 + 9 = 0

  STEP 4   Since [a b c] = 0, the three vectors are COPLANAR.
```
**Proved.**

### WORKED EXAMPLE 23.2
Find lambda so that `a = 2i - j + k`, `b = i + 2j - 3k`, `c = 3i + lambda j + 5k`
are coplanar.

```
  STEP 1   Coplanar means [a b c] = 0.

                     |  2    -1        1  |
           [a b c] = |  1     2       -3  |  =  0
                     |  3   lambda     5  |

  STEP 2   Expand along the top row.

           +2 x |  2       -3 | = 2 x [ (2)(5) - (-3)(lambda) ]
                | lambda    5 |   = 2 x ( 10 + 3 lambda )
                                  = 20 + 6 lambda

           -(-1) x |  1    -3 | = +1 x [ (1)(5) - (-3)(3) ]
                   |  3     5 |   = 5 + 9  =  14

           +1 x |  1      2     | = 1 x [ (1)(lambda) - (2)(3) ]
                |  3    lambda  |   = lambda - 6

  STEP 3   Add and set to zero.
              (20 + 6 lambda) + 14 + (lambda - 6) = 0
              7 lambda + 28 = 0
              7 lambda = -28
              lambda = -4
```
**Answer: lambda = -4**

---

# TOPIC 24 — THE VECTOR TRIPLE PRODUCT

Now cross THREE vectors. The answer is a vector.

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |        a x ( b x c )   =   ( a . c ) b   -   ( a . b ) c          |
  |                                                                   |
  |        ( a x b ) x c   =   ( a . c ) b   -   ( b . c ) a          |
  |                                                                   |
  +-------------------------------------------------------------------+
```

**THE MEMORY RULE — "BAC minus CAB":**

```
      a x (b x c)  =  b (a.c)  -  c (a.b)
                      -------     -------
                       B A C       C A B

   Say out loud:  " BACK  minus  CAB "
   The MIDDLE vector of the bracket (b) comes FIRST and is POSITIVE.
   The OUTSIDE vector of the bracket (c) comes SECOND and is NEGATIVE.
```

**Why the answer must look like this:** `b x c` is perpendicular to the plane
of b and c. Crossing a into it produces something that is perpendicular to
`b x c` — that is, something lying back IN the plane of b and c. So the answer
has to be "some amount of b plus some amount of c". That is exactly the formula.

### WORKED EXAMPLE 24.1
`a = 2i - j + 3k` , `b = i + j - k` , `c = 3i - 2j + k`. Find `a x (b x c)`.

```
  STEP 1   Use the formula, NOT two separate cross products. It is faster.
              a x (b x c) = (a.c) b - (a.b) c

  STEP 2   a . c = (2)(3) + (-1)(-2) + (3)(1) = 6 + 2 + 3 = 11

  STEP 3   a . b = (2)(1) + (-1)(1) + (3)(-1) = 2 - 1 - 3 = -2

  STEP 4   Substitute.
              a x (b x c) = 11 (i + j - k)  -  (-2)(3i - 2j + k)
                          = 11i + 11j - 11k  +  6i - 4j + 2k
                          = (11 + 6)i + (11 - 4)j + (-11 + 2)k
                          = 17i + 7j - 9k
```
**Answer: 17i + 7j - 9k**

*(Verify the long way if you doubt it: `b x c = -i - 4j - 5k`, and crossing a
into that gives `17i + 7j - 9k` again.)*

### WORKED EXAMPLE 24.2 (why it is NOT associative — a 2-mark answer)
Show that `a x (b x c)` is not always `(a x b) x c`.

```
  Take  a = i ,  b = i ,  c = j .

  LEFT SIDE:    i x (i x j)  =  i x k
                             =  -j              (from the i j k circle)

  RIGHT SIDE:   (i x i) x j  =  0 x j
                             =  0               (the zero vector)

  -j  is not equal to  0 , so the two are different.
  Therefore the cross product is NOT associative.
```

> **TRAP:** The brackets in a vector triple product are NOT decoration.
> `a x b x c` written without brackets is meaningless. Always keep them.

> **TRAP:** In `(a x b) x c` the answer is `(a.c)b - (b.c)a` — the two
> surviving vectors are the ones INSIDE the bracket, both times. Get in the
> habit of first rewriting `(a x b) x c` as `-c x (a x b)` and then applying
> BAC-CAB if you find that safer.

---

# TOPIC 25 — PRODUCTS OF FOUR VECTORS

Two formulas. They appear in Section B and in EAPCET, rarely in Section A.

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |  SCALAR product of four vectors                                   |
  |                                                                   |
  |     (a x b) . (c x d)  =  (a.c)(b.d)  -  (a.d)(b.c)               |
  |                                                                   |
  |                        =  |  a.c    a.d  |                        |
  |                           |  b.c    b.d  |                        |
  |                                                                   |
  |  VECTOR product of four vectors                                   |
  |                                                                   |
  |     (a x b) x (c x d)  =  [a b d] c  -  [a b c] d                 |
  |                                                                   |
  |                        =  [a c d] b  -  [b c d] a                 |
  |                                                                   |
  +-------------------------------------------------------------------+
```

The layout of the first one is easy to remember:

```
        |   a.c     a.d   |     first letters go DOWN the rows  (a then b)
        |   b.c     b.d   |     second letters go ACROSS the columns (c then d)
```

### WORKED EXAMPLE 25.1
Prove that `(a x b) . (a x b) = |a|^2 |b|^2 - (a.b)^2`.

```
  STEP 1   Apply the four-vector rule with c = a and d = b.
              (a x b).(a x b) = (a.a)(b.b) - (a.b)(b.a)

  STEP 2   Use  a.a = |a|^2 ,  b.b = |b|^2 ,  and  b.a = a.b.
              = |a|^2 |b|^2 - (a.b)^2

  STEP 3   The left side is |a x b|^2, so
              |a x b|^2 = |a|^2 |b|^2 - (a.b)^2
```
**Proved.** (This is Lagrange's identity from TOPIC 13 — now you have seen why.)

---

# TOPIC 26 — DISTANCES AND ANGLES IN GEOMETRY PROBLEMS

Two standard results that use the cross product. Both turn up in Section B.

```
  +---------------------------------------------------------------+
  |                                                               |
  |  PERPENDICULAR DISTANCE from a point P to the line through    |
  |  A with direction vector u                                    |
  |                                                               |
  |              | AP  x  u |                                     |
  |        d  =  --------------                                   |
  |                  | u |                                        |
  |                                                               |
  +---------------------------------------------------------------+

           P
           |\
           | \  AP
         d |  \                 The parallelogram on AP and u has
           |   \                area |AP x u| and base |u|,
           +----A-------> u     so its height is |AP x u| / |u| .
             the foot           That height IS the distance.
```

### WORKED EXAMPLE 26.1
Find the perpendicular distance from `P(1, 1, 1)` to the line through the
origin with direction `u = i + 2j + 2k`.

```
  STEP 1   AP = OP = i + j + k     (A is the origin)

  STEP 2   AP x u.
                     |  i    j    k  |
              AP x u=|  1    1    1  |
                     |  1    2    2  |

              i part :  (1)(2) - (1)(2)  = 2 - 2 =  0
              j part : -[ (1)(2) - (1)(1) ] = -[ 2 - 1 ] = -1
              k part :  (1)(2) - (1)(1)  = 2 - 1 =  1

              AP x u = 0i - j + k

  STEP 3   |AP x u| = sqrt(0 + 1 + 1) = sqrt(2)
           |u|      = sqrt(1 + 4 + 4) = sqrt(9) = 3

  STEP 4   d = sqrt(2) / 3
```
**Answer: sqrt(2)/3 units**

### WORKED EXAMPLE 26.2 (proving the SINE RULE — a 7-mark favourite)
In triangle ABC prove that `sin A / a = sin B / b = sin C / c`.

```
                    A
                   /|\
             c    / | \    b
                 /  |  \
                /   |   \
               B---------C
                    a

  STEP 1   Give the sides directions so that they chase round the triangle:
              let  p = BC ,  q = CA ,  r = AB   (as vectors)
           Going right round the triangle brings you back to the start:
              p + q + r = 0

  STEP 2   Cross the whole equation with p (on the left).
              p x (p + q + r) = p x 0
              (p x p) + (p x q) + (p x r) = 0
                0     + (p x q) + (p x r) = 0
              so   p x q  =  - (p x r)  =  r x p

  STEP 3   Do the same with q, and you get
              p x q  =  q x r  =  r x p

  STEP 4   Take magnitudes of all three.
              |p||q| sin(angle between p and q) = |q||r| sin(...) = ...

           The angle between the vectors BC and CA works out to
           180 - C, and sin(180 - C) = sin C. Similarly for the others. So

              a b sin C  =  b c sin A  =  c a sin B

  STEP 5   Divide everything by  a b c .

               sin C        sin A        sin B
              -------  =   -------  =   -------
                 c            a            b
```
**Proved.**

---

# TOPIC 27 — THE COMPLETE COMPARISON TABLE

Photocopy this page. It answers "which formula do I use?" in one glance.

| Question says | Product to use | Formula |
|---|---|---|
| find the angle between | dot | cos theta = (a.b)/(\|a\|\|b\|) |
| prove perpendicular / find x | dot | a . b = 0 |
| projection / component along | dot | (a.b)/\|b\| |
| component perpendicular to b | dot | a - ((a.b)/\|b\|^2) b |
| work done | dot | W = F . d |
| find a vector perpendicular to both | cross | a x b |
| unit vector perpendicular to both | cross | +/- (a x b)/\|a x b\| |
| prove parallel / collinear | cross | a x b = 0 |
| area of a parallelogram (sides) | cross | \|a x b\| |
| area of a parallelogram (diagonals) | cross | (1/2)\|d1 x d2\| |
| area of a triangle | cross | (1/2)\|AB x AC\| |
| moment about a point | cross | r x F |
| moment about a line | triple | [r F u] |
| volume of a parallelepiped | scalar triple | \|[a b c]\| |
| volume of a tetrahedron | scalar triple | (1/6)\|[a b c]\| |
| coplanar / find lambda | scalar triple | [a b c] = 0 |
| simplify a x (b x c) | vector triple | (a.c)b - (a.b)c |
| distance from a point to a line | cross | \|AP x u\|/\|u\| |

---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

Run down this list. Each line has cost real students real marks.

```
  [ ]  1.  Did I write the ANSWER TYPE correctly?
           dot product and [a b c] -> a NUMBER (no i, j, k anywhere)
           cross product          -> a VECTOR (must have i, j, k)

  [ ]  2.  Did I put the MINUS in front of the j term of every
           cross-product determinant?

  [ ]  3.  In a x b, is the FIRST vector in the MIDDLE row and the
           SECOND vector in the BOTTOM row?

  [ ]  4.  For "projection of a ON b", did I divide by |b| (not |a|)?

  [ ]  5.  For "component ALONG b", did I divide by |b|^2 (not |b|)?

  [ ]  6.  Triangle area - did I put the 1/2?
           Parallelogram from DIAGONALS - did I put the 1/2?
           Parallelogram from SIDES - did I leave the 1/2 OUT?

  [ ]  7.  Tetrahedron - did I put the 1/6?
           Parallelepiped - did I leave the 1/6 OUT?

  [ ]  8.  Is my final volume / area / distance POSITIVE?
           (take the modulus at the end)

  [ ]  9.  Unit vector perpendicular to two vectors - did I write "+/-"?

  [ ] 10.  Did I write the zero VECTOR as 0 (vector), not as the number 0,
           wherever a x a or a x b = 0 appears?

  [ ] 11.  Did I check  a . (a x b) = 0  and  b . (a x b) = 0 ?
           It takes 20 seconds and catches almost every arithmetic slip.

  [ ] 12.  Did I convert direction vectors to UNIT vectors where the
           formula demanded it (moment about a line)?

  [ ] 13.  Did I keep the brackets in every vector triple product?

  [ ] 14.  Displacement d = B - A , in that order. Did I get it round
           the right way?

  [ ] 15.  Did I state the final answer on its own line with units:
           "square units" for area, "cubic units" for volume, "degrees"
           for an angle?
```

**Last thing.** In this chapter almost every mistake is arithmetic, not
understanding. So slow down on the determinants. Write every row of numbers
out. That is where the marks live.
