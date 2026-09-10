# Addition of Vectors — Concepts, Explained From Zero

Read this with a pen. Every worked example is done with **every single step shown**,
because that is exactly how you must write it in the exam to get full marks.

Notation used throughout:

```
  a , b , c , r        vectors   (in your answer book put a BAR over the letter)
  |a|                  the magnitude (length) of a  -- a plain NUMBER
  AB                   the vector from point A to point B
  i , j , k            unit vectors along the x, y, z axes
  O                    the origin
  pv                   short for "position vector"
```

---

# TOPIC 1 — SCALARS AND VECTORS

## The idea in everyday language

Suppose someone says *"walk 5 kilometres."* You cannot do it. **Which way?**

Now suppose they say *"walk 5 kilometres north."* Now you can do it.

```
  SCALAR   =  size only            "5 kilometres"
  VECTOR   =  size AND direction   "5 kilometres, north"
```

| SCALARS (size only) | VECTORS (size + direction) |
|---|---|
| mass, 60 kg | displacement, 5 m east |
| distance, 12 km | velocity, 12 km/h due south |
| speed, 40 km/h | acceleration, 9.8 m/s^2 downward |
| time, 3 hours | force, 20 N to the right |
| temperature, 37 degrees | momentum |
| work, energy, volume, density | weight (it is a force!) |
| electric current * | electric field, magnetic field |

`*` Current has a direction along the wire but it does **not** add by the triangle
law, so it is treated as a scalar. This is a favourite trick question.

> **TRAP:** *distance* is a scalar, *displacement* is a vector.
> *Speed* is a scalar, *velocity* is a vector.
> *Mass* is a scalar, *weight* is a vector. Learn these three pairs.

## How a vector is drawn and named

```
                             B   <-- head / terminal point / tip
                            ^
                           /
                          /        The LENGTH of the segment = the MAGNITUDE
                         /         The ARROWHEAD             = the DIRECTION
                        /
                       A     <-- tail / initial point

           This vector is called  AB   (with a bar over it),
           and its magnitude is written  |AB|  =  the length AB.
```

The direction is measured as the angle the arrow makes with a fixed reference
direction (usually the positive x-axis or the given line).

## Two things that are NOT vectors, however hard they look like one

- A number with a plus or minus sign (like `-7 degrees Celsius`) is still a scalar.
- Finite rotations. Turn a book 90 degrees about x then 90 degrees about y,
  then swap the order — you get different results, so rotations do not add
  commutatively and are not vectors.

## WORKED EXAMPLE 1.1

**Q.** Classify: (i) 40 watts (ii) 40 newtons downward (iii) 15 metres
(iv) 15 metres towards the east (v) the area of a triangle.

**ANSWER:**

```
  (i)   40 watts               ->  SCALAR   (power: size only)
  (ii)  40 newtons downward    ->  VECTOR   (force: size + direction)
  (iii) 15 metres              ->  SCALAR   (distance)
  (iv)  15 metres east         ->  VECTOR   (displacement)
  (v)   area of a triangle     ->  SCALAR at this level.
        (In Chapter 5 you will meet "area as a vector", but in Chapter 4
         the area is just a number.)
```

---

# TOPIC 2 — THE TYPES OF VECTORS

This is a pure memory topic and it is worth an easy 2 marks. Learn the table,
then look at the pictures.

| Name | Definition | Quick test |
|---|---|---|
| **Zero / null vector, 0** | magnitude 0, direction indeterminate | `AA = 0` |
| **Unit vector, a-hat** | magnitude exactly 1 | `\|a-hat\| = 1` |
| **Equal vectors** | same magnitude AND same direction | components match exactly |
| **Negative of a** | same magnitude, opposite direction | `-a`; `BA = -AB` |
| **Like vectors** | parallel, same direction | `b = k a` with **k > 0** |
| **Unlike vectors** | parallel, opposite direction | `b = k a` with **k < 0** |
| **Collinear / parallel** | lie on the same or parallel lines | `b = k a` for some real k |
| **Coplanar** | all lie in (or parallel to) one plane | one is a combination of two others |
| **Position vector of P** | `OP`, drawn from the fixed origin O | starts at O |
| **Free vector** | can be slid anywhere, only size + direction matter | most exam vectors |
| **Localised vector** | tied to a fixed starting point | position vectors, a force at a point |
| **Coinitial vectors** | share the same starting point | tails together |
| **Coterminous vectors** | share the same ending point | heads together |

## The pictures

```
  EQUAL VECTORS                    LIKE VECTORS (b = 2a)
                                   
      ----->                           ----->        a
                                       
      ----->                           ---------->   b     same direction,
                                                           different length
   same length, same direction


  UNLIKE VECTORS (b = -2a)         COINITIAL             COTERMINOUS
                                        
      ----->        a                 ----->                ----->
                                     /                            \
   <----------      b               *----->                   ----->*
                                     \                            /
   opposite directions                ----->                ----->
```

## The two most examinable facts here

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |   a and b are COLLINEAR (parallel)   <=>   b = k a  for some         |
  |                                            real number k            |
  |                                                                     |
  |   In components: the components are PROPORTIONAL                     |
  |                                                                     |
  |        b1     b2     b3                                             |
  |       ---- = ---- = ----  =  k                                      |
  |        a1     a2     a3                                             |
  |                                                                     |
  |        k > 0  ->  LIKE (same direction)                             |
  |        k < 0  ->  UNLIKE (opposite direction)                       |
  |                                                                     |
  +---------------------------------------------------------------------+
```

## WORKED EXAMPLE 2.1

**Q.** Show that `a = 2i - 3j + 4k` and `b = -4i + 6j - 8k` are collinear.
Are they like or unlike? Compare their magnitudes.

**ANSWER:**

```
  Step 1  Compare components:

              -4        6         -8
             ----  =  -----  =  -----      i.e.   -2 = -2 = -2
              2        -3         4

  Step 2  So  b = -2 a.   Since b is a real multiple of a, they are COLLINEAR.

  Step 3  k = -2, which is NEGATIVE, so they are UNLIKE vectors
          (parallel but pointing in opposite directions).

  Step 4  |a| = sqrt( 2^2 + (-3)^2 + 4^2 ) = sqrt( 4 + 9 + 16 ) = sqrt(29)

          |b| = sqrt( (-4)^2 + 6^2 + (-8)^2 ) = sqrt( 16 + 36 + 64 )
              = sqrt(116) = sqrt(4 x 29) = 2 sqrt(29)

  CHECK:  |b| = |k| |a| = |-2| sqrt(29) = 2 sqrt(29).   Correct.
```

> **TRAP:** `|b| = |k| |a|`, with the **modulus** of k. Length is never negative.
> Writing `|b| = -2|a|` is an instant zero on that step.

## WORKED EXAMPLE 2.2

**Q.** If the vectors `-3i + 4j + p k` and `q i + 8j + 6k` are collinear, find p and q.

**ANSWER:**

```
  Proportional components:

          q         8         6
        ----  =  -----  =  -----
        -3         4         p

  Take the middle one:   8/4 = 2.   So the common ratio k = 2.

          q / (-3) = 2   ->   q = -6

          6 / p    = 2   ->   p = 3

  CHECK:  (-6, 8, 6) = 2 x (-3, 4, 3).   Correct.

  p = 3 ,  q = -6
```

---

# TOPIC 3 — ADDING VECTORS: THE THREE LAWS

## 3.1 The TRIANGLE LAW (nose to tail)

This is the only definition of addition. The other two laws are consequences.

```
                          C
                         /|
                        / |
                   b   /  |
                      /   |
                     /    |   a + b        RULE:
                    /     |                Put the TAIL of b on the HEAD of a.
                   B      |                The sum is the arrow that runs
                    \     |                from the FIRST TAIL to the LAST HEAD.
                 a   \    |
                      \   |
                       \  |
                        \ |
                         \|
                          A

                    AB  +  BC  =  AC
```

Why this is obviously true: if you walk from A to B and then from B to C,
your total displacement is exactly from A to C. Vectors add the way journeys add.

**The consequence you will use constantly:**

```
  +---------------------------------------------------------------------+
  |     AB  +  BC  +  CA  =  AA  =  0                                   |
  |                                                                     |
  |     Any CLOSED trip adds up to the ZERO vector.                     |
  +---------------------------------------------------------------------+
```

## 3.2 The PARALLELOGRAM LAW (tail to tail)

```
              D +-------------------+ C
               /                   /
              /                   /
         b   /       a + b       /
            /                   /            AB = a  and  AD = b, both
           /                   /             starting at A.
          /                   /              Complete the parallelogram ABCD.
         /                   /               Then the diagonal AC = a + b.
        +-------------------+
        A         a          B

              AB  +  AD  =  AC
```

The two laws agree, because `AD = BC` (opposite sides of a parallelogram are equal
vectors), so `AB + AD = AB + BC = AC` by the triangle law.

**And the other diagonal is the DIFFERENCE:**

```
              D +-------------------+ C
               /  \                /
              /     \  DB = a - b /
         b   /        \          /
            /           \       /
           /              \    /
          /                 \ /
         /                   X
        +-------------------+ \
        A         a          B  (the diagonals cross here)

        In triangle ADB:   DA + AB = DB
                           -b  +  a = DB
                    so     DB = a - b
```

> **TRAP:** the diagonal starting at the corner where both vectors start is the
> **SUM**. The other diagonal is the **DIFFERENCE**. Students mix these up
> constantly and lose the whole question.

## 3.3 The POLYGON LAW (many vectors, nose to tail)

```
                    C ---------> D
                   ^              \
                  /                \
                 /                  v
                B                    E
                 ^                  /
                  \                /
                   \              v
                    A <----------  F

        AB + BC + CD + DE + EF  =  AF

        and if the polygon CLOSES (F is back at A):

        AB + BC + CD + DE + EA  =  0
```

## WORKED EXAMPLE 3.1

**Q.** `OA = i + j + k`, `AB = 3i - 2j + k`, `BC = i + 2j - 2k`, `CD = 2i + j + 3k`.
Find `OD`.

**ANSWER:**

```
  By the polygon law,   OD = OA + AB + BC + CD

  i components:   1 + 3 + 1 + 2  =  7
  j components:   1 - 2 + 2 + 1  =  2
  k components:   1 + 1 - 2 + 3  =  3

  OD  =  7i + 2j + 3k
```

## WORKED EXAMPLE 3.2 (a favourite 4-mark question)

**Q.** In a pentagon ABCDE, show that `AB + BC + CD + DE + EA = 0`, and that
`AB + AE + BC + DC + ED + AC = 3 AC`.

**ANSWER:**

```
  PART 1
  ------
  AB + BC + CD + DE + EA
     = (AB + BC) + (CD + DE) + EA          group nose-to-tail
     = AC + CE + EA
     = AE + EA                             since AC + CE = AE
     = AA
     = 0                                   a closed trip is zero


  PART 2
  ------
  Regroup the six terms into three closed paths that each run A -> C:

     AB + BC              = AC              (path A->B->C)
     AE + ED + DC         = AC              (path A->E->D->C)
     AC                   = AC              (already there)

  Adding the three:

     AB + AE + BC + DC + ED + AC  =  AC + AC + AC  =  3 AC
```

> **TRAP:** you may **only** join two vectors nose-to-tail when the head letter of
> the first equals the tail letter of the second: `AB + BC` works, `AB + CB` does
> not. If the letters do not match, flip one using `CB = -BC` first.

---

# TOPIC 4 — PROPERTIES OF ADDITION, AND SUBTRACTION

## The four properties (a standard 2-mark "state the properties" question)

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |  1. CLOSURE          a + b is again a vector                        |
  |                                                                     |
  |  2. COMMUTATIVE      a + b  =  b + a                                |
  |                                                                     |
  |  3. ASSOCIATIVE      (a + b) + c  =  a + (b + c)                    |
  |                                                                     |
  |  4. ADDITIVE         a + 0  =  0 + a  =  a                          |
  |     IDENTITY         (the zero vector 0 is the identity)            |
  |                                                                     |
  |  5. ADDITIVE         a + (-a)  =  0                                 |
  |     INVERSE          (every vector a has the inverse -a)            |
  |                                                                     |
  |  Because of 1-5, the set of vectors is an ABELIAN GROUP under +.    |
  |                                                                     |
  +---------------------------------------------------------------------+
```

**Why commutative is true — read it off the parallelogram:**

```
              D +-------------------+ C
               /                   /
          b   /                   / b          Going A -> B -> C uses a then b.
             /                   /             Going A -> D -> C uses b then a.
            /                   /              Both land on C.
           +-------------------+               So  a + b = b + a.
           A         a          B
                     (BC = AD = b, and DC = AB = a)
```

## Subtraction

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |        a - b  =  a + (-b)                                           |
  |                                                                     |
  |   Subtracting b means ADDING the reversed arrow.                    |
  |   Subtraction is NOT commutative:   a - b  =  -(b - a)              |
  |                                                                     |
  +---------------------------------------------------------------------+
```

```
        b                          -b
       ^                            |
      /                             |
     /                              v
    *------> a       becomes      *------> a         then nose-to-tail
                                                     gives a - b
```

## The triangle inequality (useful for MCQs)

```
  |a| - |b|   <=   |a + b|   <=   |a| + |b|

  |a + b| = |a| + |b|   only when a and b are LIKE (same direction)
  |a + b| = | |a| - |b| |  only when a and b are UNLIKE (opposite)
```

## WORKED EXAMPLE 4.1

**Q.** `a = 2i + 3j - k` and `b = i - 2j + 3k`. Find `a + b`, `a - b`, `|a - b|`.

**ANSWER:**

```
  a + b = (2+1) i + (3-2) j + (-1+3) k  =  3i + j + 2k

  a - b = (2-1) i + (3+2) j + (-1-3) k  =   i + 5j - 4k

  |a - b| = sqrt( 1^2 + 5^2 + (-4)^2 ) = sqrt( 1 + 25 + 16 ) = sqrt(42)
```

---

# TOPIC 5 — MULTIPLYING A VECTOR BY A SCALAR

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |   k a   is a vector with                                            |
  |                                                                     |
  |        magnitude  =  |k| |a|                                        |
  |                                                                     |
  |        direction  =  SAME as a   if  k > 0                          |
  |                      OPPOSITE    if  k < 0                          |
  |                      (and  0 a = 0, the zero vector)                |
  |                                                                     |
  +---------------------------------------------------------------------+
```

```
        a          ------->

        2a         -------------->            twice as long, same way

        (1/2)a     --->                       half as long, same way

        -a         <-------                    same length, reversed

        -3a        <----------------------     3 times, reversed
```

**Properties:**

```
     k (a + b)  =  k a  +  k b                distributive over vectors
     (k + m) a  =  k a  +  m a                distributive over scalars
     k (m a)    =  (k m) a                    associative
     1 a        =  a
     (-1) a     =  -a
```

## WORKED EXAMPLE 5.1

**Q.** Find the vector of magnitude 6 in the direction of `a = i + 2j + 2k`.

**ANSWER:**

```
  Step 1   |a| = sqrt( 1^2 + 2^2 + 2^2 ) = sqrt(1 + 4 + 4) = sqrt(9) = 3

  Step 2   unit vector along a:

                    a       i + 2j + 2k
           a-hat = ----- = --------------
                   |a|           3

  Step 3   required vector = 6 x a-hat

                              i + 2j + 2k
                       =  6 x -------------  =  2 ( i + 2j + 2k )
                                   3

                       =  2i + 4j + 4k

  CHECK:  |2i + 4j + 4k| = sqrt(4 + 16 + 16) = sqrt(36) = 6.   Correct.
```

> **TRAP:** "a vector of magnitude p in the direction of a" is `p * a/|a|`,
> **not** `p * a`. You must divide by |a| first. Forgetting this is the single
> most common 2-mark loss in the chapter.

---

# TOPIC 6 — POSITION VECTORS AND `AB = b - a`

## What a position vector is

Fix one point O and call it the **origin**. Then every point P in space gets a
unique arrow `OP` drawn from O to P. That arrow is the **position vector of P**,
usually written as a small letter: `OP = p`.

Two points, two arrows, and the picture that solves half the chapter:

```
                        B  (position vector b)
                       /|
                      / |
                AB   /  |
                    /   |
                   /    |
                  A     |
                   \    |
                 a  \   |  b
                     \  |
                      \ |
                       \|
                        O

        Triangle law on O, A, B :     OA + AB = OB

                                       a + AB = b

  +---------------------------------------------------------------------+
  |                                                                     |
  |            AB  =  b  -  a        HEAD MINUS TAIL                    |
  |                                                                     |
  +---------------------------------------------------------------------+
```

Say it out loud until it is automatic: **"A-B equals b minus a. Head minus tail."**

## In coordinates

```
  If  A = (x1, y1, z1)   then   a = x1 i + y1 j + z1 k
      B = (x2, y2, z2)          b = x2 i + y2 j + z2 k

  AB  =  (x2 - x1) i  +  (y2 - y1) j  +  (z2 - z1) k

  |AB| =  sqrt( (x2-x1)^2 + (y2-y1)^2 + (z2-z1)^2 )   = distance AB
```

That last line is just the ordinary distance formula. Vectors did not change it.

## WORKED EXAMPLE 6.1

**Q.** The position vectors of A and B are `2i + 3j - k` and `4i - 3j + 2k`.
Find `AB` and `|AB|`.

**ANSWER:**

```
  AB = b - a
     = (4i - 3j + 2k) - (2i + 3j - k)
     = (4-2) i + (-3-3) j + (2+1) k
     = 2i - 6j + 3k

  |AB| = sqrt( 2^2 + (-6)^2 + 3^2 )
       = sqrt( 4 + 36 + 9 )
       = sqrt(49)
       = 7
```

## WORKED EXAMPLE 6.2

**Q.** Show that the points `A(2i - j + k)`, `B(i - 3j - 5k)`, `C(3i - 4j - 4k)`
form a right-angled triangle.

**ANSWER:**

```
  Step 1  Find the three sides using "head minus tail":

     AB = b - a = (1-2)i + (-3+1)j + (-5-1)k  =  -i - 2j - 6k
     BC = c - b = (3-1)i + (-4+3)j + (-4+5)k  =  2i -  j +  k
     CA = a - c = (2-3)i + (-1+4)j + (1+4)k   =  -i + 3j + 5k

  Step 2  Find the squares of the lengths (no square roots needed yet):

     |AB|^2 = 1 + 4 + 36 = 41
     |BC|^2 = 4 + 1 +  1 =  6
     |CA|^2 = 1 + 9 + 25 = 35

  Step 3  Check Pythagoras:

     |BC|^2 + |CA|^2  =  6 + 35  =  41  =  |AB|^2

  So the triangle is RIGHT-ANGLED, and the right angle is at C
  (the vertex where the two shorter sides BC and CA meet).
```

> **TRAP:** the right angle sits at the vertex **opposite** the longest side.
> Longest side here is AB, so the angle is at C. Do not just write "right angled"
> — name the vertex. That is worth a mark.

---

# TOPIC 7 — COMPONENT FORM: i, j, k

## The three basic unit vectors

```
                     z
                     ^
                     |  k
                     |  ^
                     |  |
                     |  |
                     +-------------> y
                    /       j
                   /
                  /  i
                 v
                x

        i  =  unit vector along the x-axis
        j  =  unit vector along the y-axis
        k  =  unit vector along the z-axis

        |i| = |j| = |k| = 1     and they are mutually perpendicular
```

## Writing any vector in components

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |    r  =  x i  +  y j  +  z k          <-- the point P(x, y, z)      |
  |                                                                     |
  |    |r|  =  sqrt( x^2 + y^2 + z^2 )                                  |
  |                                                                     |
  |    x, y, z are the COMPONENTS (or the scalar components) of r        |
  |    xi, yj, zk are the VECTOR components of r                        |
  |                                                                     |
  +---------------------------------------------------------------------+
```

Picture in 2D (the 3D one is the same idea with a third box):

```
            y
            ^
            |
        y   +- - - - - - - -* P(x, y)
            |             / |
            |           /   |
            |         /     |
            |       /       |     r = x i + y j
            |     /         |
            |   /           |     |r| = sqrt(x^2 + y^2)   (Pythagoras)
            | /             |
            +-------+-------+------> x
            O               x
```

## Adding in component form — just add the matching parts

```
  a = a1 i + a2 j + a3 k
  b = b1 i + b2 j + b3 k

  a + b  =  (a1+b1) i + (a2+b2) j + (a3+b3) k
  k a    =  (k a1) i + (k a2) j + (k a3) k
  a = b  <=>  a1 = b1  AND  a2 = b2  AND  a3 = b3     (all three, every time)
```

## The unit vector along a

```
  +---------------------------------------------------------------------+
  |                     a           x i + y j + z k                     |
  |         a-hat  =  ------  =  ---------------------                  |
  |                    |a|        sqrt(x^2 + y^2 + z^2)                 |
  +---------------------------------------------------------------------+
```

## WORKED EXAMPLE 7.1

**Q.** `a = 3i - 6j + 2k`. Find `|a|` and the unit vector in the direction of a.
Also find a unit vector in the direction **opposite** to a.

**ANSWER:**

```
  |a| = sqrt( 3^2 + (-6)^2 + 2^2 ) = sqrt( 9 + 36 + 4 ) = sqrt(49) = 7

                    3i - 6j + 2k         3      6      2
  a-hat  =  ------------------  =   --- i - --- j + --- k
                          7            7      7      7

  CHECK:  (3/7)^2 + (6/7)^2 + (2/7)^2 = (9 + 36 + 4)/49 = 49/49 = 1.  Correct,
          it really does have length 1.

  Opposite direction:   - a-hat  =  ( -3i + 6j - 2k ) / 7
```

## WORKED EXAMPLE 7.2

**Q.** `a = i + 2j + 3k`, `b = 3i + j`. Find the unit vector in the direction of `a + b`.

**ANSWER:**

```
  a + b = (1+3) i + (2+1) j + (3+0) k  =  4i + 3j + 3k

  |a + b| = sqrt( 16 + 9 + 9 ) = sqrt(34)

                       4i + 3j + 3k
  unit vector  =  ---------------------
                        sqrt(34)
```

> **TRAP:** leave `sqrt(34)` as it is. Do NOT turn it into a decimal.
> Boards want exact surds.

---

# TOPIC 8 — DIRECTION COSINES AND DIRECTION RATIOS

## The idea

A vector `r` makes some angle with each of the three axes. Call those angles
alpha (with x), beta (with y), gamma (with z). The **cosines** of those three
angles are the **direction cosines**, written l, m, n.

```
                     z
                     ^
                     |            r
                     |         /
                     |  gamma/
                     |     /
                     |   /
                     | / alpha (down towards the x-axis)
                     +--------------> y
                    /  beta
                   /
                  v
                 x
```

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |   For   r = x i + y j + z k    with   |r| = sqrt(x^2+y^2+z^2) :     |
  |                                                                     |
  |                x                 y                 z                |
  |     l = cos alpha = ---   m = cos beta = ---   n = cos gamma = ---  |
  |               |r|               |r|               |r|               |
  |                                                                     |
  |     THE IDENTITY:      l^2  +  m^2  +  n^2  =  1                    |
  |                                                                     |
  |     So the direction cosines ARE the components of the UNIT vector: |
  |                                                                     |
  |                r-hat  =  l i  +  m j  +  n k                        |
  |                                                                     |
  +---------------------------------------------------------------------+
```

**Direction ratios** are any three numbers `a : b : c` proportional to `l : m : n`.
The components x, y, z themselves are the easiest set of direction ratios.

```
  DIRECTION RATIOS   ->   there are INFINITELY many sets (any multiple works)
  DIRECTION COSINES  ->   there are only TWO sets (l,m,n) and (-l,-m,-n),
                          one for each way of pointing along the line

  To turn ratios (a,b,c) into cosines, divide by sqrt(a^2 + b^2 + c^2).
```

## WORKED EXAMPLE 8.1

**Q.** Find the direction cosines of `a = 3i - 6j + 2k`, and the angles it makes
with the axes.

**ANSWER:**

```
  |a| = sqrt(9 + 36 + 4) = 7        (done in Example 7.1)

  l = 3/7 ,   m = -6/7 ,   n = 2/7

  CHECK:  l^2 + m^2 + n^2 = (9 + 36 + 4)/49 = 1.   Correct.

  alpha = cos^-1(3/7)     beta = cos^-1(-6/7)     gamma = cos^-1(2/7)

  Direction ratios:  3 : -6 : 2   (or 6 : -12 : 4, or any multiple)
```

## WORKED EXAMPLE 8.2

**Q.** Find the direction cosines of the line joining `A(1, 2, 3)` and `B(4, 6, 3)`.

**ANSWER:**

```
  AB = (4-1) i + (6-2) j + (3-3) k  =  3i + 4j + 0k

  |AB| = sqrt( 9 + 16 + 0 ) = sqrt(25) = 5

  l = 3/5 ,   m = 4/5 ,   n = 0

  CHECK:  9/25 + 16/25 + 0 = 25/25 = 1.   Correct.

  n = 0 means the line is PERPENDICULAR to the z-axis (gamma = 90 degrees) —
  which makes sense, both points have z = 3.
```

> **TRAP:** direction cosines of a **line joining two points** means you must
> first form `AB = b - a`. Do not use the coordinates of B alone.

---

# TOPIC 9 — THE SECTION FORMULA

This is the heart of the chapter. Learn the derivation — it is asked as a proof.

## 9.1 Internal division

```
                         n                m
              A *----------------* P ---------------* B
                                                          AP : PB = m : n
             pv = a           pv = r              pv = b
```

**Derivation (write this out in the exam — it is worth marks):**

```
  P divides AB internally in the ratio m : n, so

           AP        m
          ----  =  ---     and AP, PB point the SAME way,
           PB        n     so     n (AP)  =  m (PB)         ... (*)

  Now use head minus tail:

           AP = r - a          PB = b - r

  Substitute into (*):

           n ( r - a )  =  m ( b - r )

           n r - n a    =  m b - m r

           n r + m r    =  m b + n a

           (m + n) r    =  m b + n a

  +---------------------------------------------------------------------+
  |                            m b  +  n a                              |
  |                     r  =  ---------------                           |
  |                              m  +  n                                 |
  +---------------------------------------------------------------------+
```

**Memory hook:** `m` is the ratio number nearest B... no — the opposite.
The safe way to remember it:

```
      m is the FIRST number and it multiplies the FAR point b.
      n is the SECOND number and it multiplies the NEAR point a.

      "CROSS them over."      m : n   ->   m b + n a
                              A : B         B    A
```

**Sanity test you can do in 3 seconds:** put `m = n = 1`. You should get
`(b + a)/2`, the midpoint. If your version gives something else, you have it
backwards.

## 9.2 External division

```
                                          n
              A *------------------* B ------------* P     AP : PB = m : n
                                                            externally
             pv = a             pv = b          pv = r
              |<--------------- m ------------------>|
```

Now `AP` and `PB` point in **opposite** directions, so the ratio carries a minus
sign. Replacing `n` by `-n` in the internal formula gives:

```
  +---------------------------------------------------------------------+
  |                            m b  -  n a                              |
  |                     r  =  ---------------           ( m =/= n )     |
  |                              m  -  n                                 |
  +---------------------------------------------------------------------+

  If m = n the formula blows up — and correctly so: a point dividing a
  segment externally in the ratio 1 : 1 does not exist (it is "at infinity").
```

## 9.3 Midpoint

```
  +---------------------------------------------------------------------+
  |                             a  +  b                                 |
  |          midpoint of AB  =  ----------      (put m = n = 1)         |
  |                                 2                                   |
  +---------------------------------------------------------------------+
```

## WORKED EXAMPLE 9.1 (numbers)

**Q.** `A = i + 2j + 3k`, `B = 4i - j`. Find the point P dividing AB
(i) internally in the ratio 2 : 1, (ii) externally in the ratio 2 : 1.

**ANSWER:**

```
  Here  a = i + 2j + 3k ,  b = 4i - j + 0k ,  m = 2 , n = 1.

  (i) INTERNAL

         m b + n a      2(4i - j) + 1(i + 2j + 3k)
   r =  ----------- =  ----------------------------
           m + n                  2 + 1

              (8i - 2j) + (i + 2j + 3k)        9i + 0j + 3k
          =  ---------------------------  =  ---------------
                        3                            3

          =  3i + k                so P = (3, 0, 1)

   CHECK: go 2/3 of the way from A to B.
          AB = (4-1, -1-2, 0-3) = (3, -3, -3)
          A + (2/3) AB = (1, 2, 3) + (2, -2, -2) = (3, 0, 1).   Correct.

  (ii) EXTERNAL

         m b - n a      2(4i - j) - 1(i + 2j + 3k)
   r =  ----------- =  ----------------------------
           m - n                  2 - 1

          =  (8i - 2j) - (i + 2j + 3k)
          =  7i - 4j - 3k          so P = (7, -4, -3)

   CHECK: AP = (7-1, -4-2, -3-3) = (6, -6, -6)
          PB = (4-7, -1+4, 0+3)  = (-3, 3, 3)
          AP = -2 PB, so AP : PB = 2 : 1 with opposite signs
          = external division in the ratio 2 : 1.   Correct.
```

## WORKED EXAMPLE 9.2 (letters — the exam version)

**Q.** Find the position vector of the point which divides the join of the points
`2a - 3b` and `3a - 2b` (i) internally and (ii) externally in the ratio 2 : 3.

**ANSWER:**

```
  Let  P = 2a - 3b   (this is the FIRST point, so it plays the role of "a")
       Q = 3a - 2b   (the SECOND point, the role of "b")
       m = 2 , n = 3

  (i) INTERNAL

        m Q + n P      2(3a - 2b) + 3(2a - 3b)
   r = ----------- = ---------------------------
          m + n                 2 + 3

             (6a - 4b) + (6a - 9b)        12a - 13b
        =  -------------------------  =  -----------
                      5                       5

  (ii) EXTERNAL

        m Q - n P      2(3a - 2b) - 3(2a - 3b)
   r = ----------- = ---------------------------
          m - n                 2 - 3

            (6a - 4b) - (6a - 9b)        0a + 5b
        = ------------------------- =  ----------  =  -5 b
                     -1                    -1

   CHECK on (ii):  R = -5b.
        PR = R - P = -5b - 2a + 3b = -2a - 2b = -2(a + b)
        RQ = Q - R = 3a - 2b + 5b  =  3a + 3b =  3(a + b)
        PR : RQ = -2 : 3 , the negative sign confirming EXTERNAL
        division in the ratio 2 : 3.   Correct.
```

> **TRAP:** for external division with `m < n`, the denominator `m - n` is
> **negative**. Do not "fix" it by flipping the sign. Just divide carefully.

---

# TOPIC 10 — CENTROIDS

## 10.1 Centroid of a triangle

```
                            A (a)
                            /\
                           /  \
                          /    \
                     F   /      \   E         D = midpoint of BC
                    *   /    G   \   *        E = midpoint of CA
                       /     *    \           F = midpoint of AB
                      /            \
                     /              \         AD, BE, CF are the MEDIANS
              B ----------- * ---------- C    G is the CENTROID
             (b)            D            (c)
```

**Derivation:**

```
  D is the midpoint of BC, so    D  =  (b + c) / 2

  G lies on the median AD and divides it in the ratio  AG : GD = 2 : 1.

  Section formula on A and D with m : n = 2 : 1 :

          2 D + 1 A       2 (b+c)/2  +  a        (b + c) + a
    G  = ----------- =  ------------------  =  ---------------
            2 + 1               3                     3

  +---------------------------------------------------------------------+
  |                          a  +  b  +  c                              |
  |         CENTROID   G  =  --------------                             |
  |                                3                                    |
  +---------------------------------------------------------------------+

  Notice the answer is SYMMETRIC in a, b, c — it does not care which median
  we used. THAT is why the three medians all pass through the same point.
```

## 10.2 Centroid of a tetrahedron

A tetrahedron has 4 vertices A, B, C, D. Its centroid is where the four lines
from each vertex to the centroid of the opposite face meet.

```
  +---------------------------------------------------------------------+
  |                          a  +  b  +  c  +  d                        |
  |     TETRAHEDRON   G  =  ----------------------                      |
  |                                   4                                 |
  |                                                                     |
  |     and G divides each vertex-to-face-centroid line in the          |
  |     ratio  3 : 1  (from the vertex).                                |
  +---------------------------------------------------------------------+
```

**Quick proof:** the centroid of face BCD is `G1 = (b+c+d)/3`. Divide `A G1` in
the ratio 3 : 1:

```
        3 G1 + 1 A       3(b+c+d)/3 + a       a + b + c + d
   G = ------------ =  ------------------ =  ---------------
          3 + 1                4                    4
```

Symmetric again, so all four lines meet there.

**The pattern:** count the corners, add the position vectors, divide by the count.

## WORKED EXAMPLE 10.1

**Q.** Find the centroid of the triangle whose vertices have position vectors
`i + 2j + 3k`, `2i + 3j + k`, `3i + j + 2k`.

**ANSWER:**

```
       a + b + c      (1+2+3) i + (2+3+1) j + (3+1+2) k
  G = ----------- =  ----------------------------------
           3                        3

            6i + 6j + 6k
       =  ---------------  =  2i + 2j + 2k
                  3
```

## WORKED EXAMPLE 10.2

**Q.** Find the centroid of the tetrahedron with vertices
`i + j + k`, `2i + 3j - k`, `3i - j + 2k`, `2i + j + 2k`.

**ANSWER:**

```
  i components:   1 + 2 + 3 + 2  =  8
  j components:   1 + 3 - 1 + 1  =  4
  k components:   1 - 1 + 2 + 2  =  4

       8i + 4j + 4k
  G = --------------  =  2i + j + k
             4
```

---

# TOPIC 11 — LINEAR COMBINATION, DEPENDENCE AND INDEPENDENCE

## Linear combination

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |   r  =  x a  +  y b  +  z c        (x, y, z real numbers)           |
  |                                                                     |
  |   is called a LINEAR COMBINATION of a, b and c.                     |
  |                                                                     |
  +---------------------------------------------------------------------+
```

Everyday version: `4i + 3j` is a linear combination of i and j. You made a new
vector by scaling old ones and adding.

## Linearly dependent vs independent

```
  a1, a2, ..., an are LINEARLY DEPENDENT if there exist scalars
  x1, x2, ..., xn, NOT ALL ZERO, with

              x1 a1 + x2 a2 + ... + xn an  =  0

  Otherwise they are LINEARLY INDEPENDENT
  (i.e. the ONLY way to get 0 is x1 = x2 = ... = xn = 0).
```

**In plain English:** *dependent* means at least one of them is a wasted copy —
you can build it out of the others. *Independent* means each one brings a genuinely
new direction.

```
  +--------------------------+------------------------------------------+
  |  HOW MANY VECTORS        |  THEY ARE DEPENDENT EXACTLY WHEN         |
  +--------------------------+------------------------------------------+
  |  Two vectors a, b        |  they are COLLINEAR (parallel)           |
  |  Three vectors a, b, c   |  they are COPLANAR                       |
  |  Four or more in 3D      |  ALWAYS dependent (3D has only 3         |
  |                          |  independent directions)                 |
  +--------------------------+------------------------------------------+

  i, j, k are linearly INDEPENDENT — that is why every vector in space has
  ONE AND ONLY ONE expression as x i + y j + z k.
```

**The consequence you will use in every 7-mark question:**

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |   If a, b, c are NON-COPLANAR (= linearly independent) and          |
  |                                                                     |
  |        x a + y b + z c  =  x' a + y' b + z' c                       |
  |                                                                     |
  |   then    x = x' ,    y = y' ,    z = z'                            |
  |                                                                     |
  |   "COMPARE THE COEFFICIENTS." This is exactly like comparing         |
  |   the i, j, k parts of two equal vectors.                           |
  |                                                                     |
  +---------------------------------------------------------------------+
```

## WORKED EXAMPLE 11.1

**Q.** Express `d = 3i + 2j + 5k` as a linear combination of
`a = 2i - j + k`, `b = i + 3j - 2k`, `c = -2i + j - 3k`.

**ANSWER:**

```
  Let  d = x a + y b + z c.  Compare i, j, k coefficients:

     i :   2x  +  y  - 2z  =  3        ...(1)
     j :   -x  + 3y  +  z  =  2        ...(2)
     k :    x  - 2y  - 3z  =  5        ...(3)

  From (1):   y = 3 - 2x + 2z

  Put into (2):   -x + 3(3 - 2x + 2z) + z = 2
                  -x + 9 - 6x + 6z + z = 2
                  -7x + 7z = -7
                       -x + z = -1        so    z = x - 1

  Put y and z into (3):
                  x - 2(3 - 2x + 2z) - 3z = 5
                  x - 6 + 4x - 4z - 3z = 5
                  5x - 7z = 11
                  5x - 7(x - 1) = 11
                  5x - 7x + 7 = 11
                       -2x = 4        so    x = -2

  Then   z = x - 1 = -3        and   y = 3 - 2(-2) + 2(-3) = 3 + 4 - 6 = 1

  CHECK all three:
     (1)  2(-2) + 1 - 2(-3) = -4 + 1 + 6 = 3   OK
     (2)  -(-2) + 3(1) + (-3) = 2 + 3 - 3 = 2  OK
     (3)  (-2) - 2(1) - 3(-3) = -2 - 2 + 9 = 5 OK

  ANSWER:   d  =  -2a  +  b  -  3c
```

> **TRAP:** always substitute back into **all three** equations. If only two of
> them work, the vectors were coplanar and no such combination exists —
> which is itself the answer to some questions.

---

# TOPIC 12 — COLLINEAR POINTS AND COPLANAR POINTS

These two are the classic Section B and Section C questions. Learn the recipes.

## 12.1 Three points are COLLINEAR

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |   A, B, C are COLLINEAR                                             |
  |                                                                     |
  |      <=>   AB  =  t (AC)   for some real number t                   |
  |                                                                     |
  |   (they already share the point A, so parallel + shared point       |
  |    = same straight line)                                            |
  |                                                                     |
  |   EQUIVALENT FORM (often quicker with abstract a, b, c):            |
  |                                                                     |
  |      there exist x, y, z NOT all zero with                          |
  |                                                                     |
  |            x A + y B + z C = 0     AND     x + y + z = 0            |
  |                                                                     |
  +---------------------------------------------------------------------+
```

**The method, every time:**

```
  STEP 1   AB = b - a
  STEP 2   AC = c - a
  STEP 3   Is AC a plain number times AB?  Check each component.
  STEP 4   If yes: "AC = t AB, so AC is parallel to AB. They have the point A
           in common, therefore A, B, C are COLLINEAR."
           Bonus: t also tells you the ratio, e.g. AC = 3 AB means B divides
           AC in the ratio 1 : 2.
```

## WORKED EXAMPLE 12.1

**Q.** If a, b, c are non-coplanar, show that the points with position vectors
`-2a + 3b + 5c`, `a + 2b + 3c`, `7a - c` are collinear.

**ANSWER:**

```
  Name them   P = -2a + 3b + 5c
              Q =   a + 2b + 3c
              R =  7a + 0b -  c

  PQ = Q - P = (1+2) a + (2-3) b + (3-5) c  =   3a -  b - 2c

  PR = R - P = (7+2) a + (0-3) b + (-1-5) c =   9a - 3b - 6c

  Now      9a - 3b - 6c  =  3 ( 3a - b - 2c )

  So       PR  =  3 PQ

  PR is parallel to PQ and they share the point P.
  Therefore P, Q, R are COLLINEAR.

  Extra information for free:  |PR| = 3 |PQ|, so Q divides PR
  in the ratio  PQ : QR = 1 : 2.
```

## WORKED EXAMPLE 12.2 (coordinates version)

**Q.** Show that `A(1, -2, 3)`, `B(2, 3, -4)`, `C(-1, -12, 17)` are collinear.

**ANSWER:**

```
  AB = (2-1) i + (3+2) j + (-4-3) k   =    i + 5j -  7k

  AC = (-1-1) i + (-12+2) j + (17-3) k = -2i -10j + 14k

  AC = -2 ( i + 5j - 7k ) = -2 AB

  So AC is parallel to AB, and A is common. A, B, C are COLLINEAR.

  (t = -2 is negative, so A lies BETWEEN B and C.)
```

## 12.2 Four points are COPLANAR

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |   A, B, C, D are COPLANAR                                           |
  |                                                                     |
  |      <=>   AD  =  x (AB)  +  y (AC)    for some real x, y           |
  |                                                                     |
  |   (AD lies in the flat sheet spanned by AB and AC)                  |
  |                                                                     |
  |   EQUIVALENT FORM:  there exist x, y, z, w NOT all zero with        |
  |                                                                     |
  |     x A + y B + z C + w D = 0     AND     x + y + z + w = 0         |
  |                                                                     |
  +---------------------------------------------------------------------+
```

```
                          D
                         /
                        /            All four points lie in one FLAT SHEET.
              A -------*------- C    The arrow AD can be reached by walking
               \      /              some amount along AB and then some
                \    /               amount along AC — without ever leaving
                 \  /                the sheet.
                  B
```

## WORKED EXAMPLE 12.3 (the classic 7-mark question)

**Q.** If a, b, c are non-coplanar vectors, prove that the four points

```
   P = 6a + 2b -  c ,   Q =  2a -  b + 3c ,
   R =  -a + 2b - 4c ,  S = -12a -  b - 3c
```

are coplanar.

**ANSWER:**

```
  Step 1  Form three vectors from the SAME point P:

     PQ = Q - P = (2-6)a  + (-1-2)b + (3+1)c    =  -4a - 3b + 4c
     PR = R - P = (-1-6)a + (2-2)b  + (-4+1)c   =  -7a + 0b - 3c
     PS = S - P = (-12-6)a + (-1-2)b + (-3+1)c  = -18a - 3b - 2c

  Step 2  Try to write   PS = x (PQ) + y (PR).
          Compare the coefficients of a, b, c (allowed, since a, b, c
          are NON-COPLANAR, hence linearly independent):

     a :   -4x - 7y  =  -18       ...(1)
     b :   -3x + 0y  =   -3       ...(2)
     c :    4x - 3y  =   -2       ...(3)

  Step 3  From (2):        -3x = -3     =>   x = 1

          Put x = 1 in (3):  4 - 3y = -2   =>   -3y = -6   =>   y = 2

  Step 4  VERIFY with the unused equation (1):

          -4(1) - 7(2)  =  -4 - 14  =  -18       matches the right side.

  Step 5  So   PS = 1 (PQ) + 2 (PR).

          PS is a linear combination of PQ and PR, so PS lies in the plane
          of PQ and PR. All four points share the point P.

          Therefore P, Q, R, S are COPLANAR.       [proved]
```

**Alternative finish (the "sum of coefficients is zero" version), if you prefer it:**

```
  Rearranged, PS = PQ + 2PR means

        (S - P) = (Q - P) + 2(R - P)
             S  = Q + 2R - 2P
        -2P + Q + 2R - S = 0

  Coefficients:  -2 + 1 + 2 - 1 = 0,  and they are not all zero.
  Hence the four points are coplanar.
```

> **TRAP:** you must state the reason you are allowed to compare coefficients:
> *"since a, b, c are non-coplanar they are linearly independent"*. Examiners
> give a mark for that sentence.

---

# TOPIC 13 — VECTOR EQUATION OF A LINE

## Through one point, parallel to a given vector

```
                              P (r)  <-- a general point on the line
                             /
                     t b    /
                           /
                    A ----*----------------> direction b
                   (a)
                  /
             a   /
                /
               O

        OP = OA + AP        and AP is parallel to b, so AP = t b

  +---------------------------------------------------------------------+
  |                                                                     |
  |           r  =  a  +  t b          t is any real number             |
  |                                                                     |
  |     a = position vector of a known point ON the line                |
  |     b = any vector PARALLEL to the line (the direction vector)      |
  |                                                                     |
  +---------------------------------------------------------------------+
```

Each value of t gives one point of the line. `t = 0` gives A itself.

## Through two given points A(a) and B(b)

The direction is `AB = b - a`, so:

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |       r  =  a  +  t ( b - a )                                       |
  |                                                                     |
  |   or, expanded,                                                     |
  |                                                                     |
  |       r  =  (1 - t) a  +  t b                                       |
  |                                                                     |
  |   t = 0  gives A ,   t = 1  gives B ,   t = 1/2 gives the midpoint  |
  |   0 < t < 1 gives points BETWEEN A and B                            |
  |                                                                     |
  +---------------------------------------------------------------------+
```

Notice that the two coefficients `(1-t)` and `t` always add up to 1. That is the
"sum of coefficients = 1" signature of a straight line, and it is exactly the
collinearity condition in disguise.

## WORKED EXAMPLE 13.1

**Q.** Find the vector equation of the line passing through the point
`2i + 3j + k` and parallel to the vector `4i - 2j + 3k`.

**ANSWER:**

```
  r = a + t b
    = ( 2i + 3j + k )  +  t ( 4i - 2j + 3k ) ,    t in R
```

## WORKED EXAMPLE 13.2

**Q.** Find the vector equation of the line joining the points
`2i + j + 3k` and `-4i + 3j - k`.

**ANSWER:**

```
  a = 2i + j + 3k ,   b = -4i + 3j - k

  b - a = (-4-2) i + (3-1) j + (-1-3) k  =  -6i + 2j - 4k

  r = a + t (b - a)
    = ( 2i + j + 3k )  +  t ( -6i + 2j - 4k ) ,    t in R

  (You may divide the direction by -2 and write it as
   r = (2i + j + 3k) + s (3i - j + 2k). Same line, both are accepted.)
```

## WORKED EXAMPLE 13.3 — the intersection question (7 marks)

**Q.** If a, b, c are non-coplanar, find the point of intersection of the line
passing through the points `2a + 3b - c` and `3a + 4b - 2c` with the line joining
the points `a - 2b + 3c` and `a - 6b + 6c`.

**ANSWER:**

```
  LINE 1 through  P = 2a + 3b - c  and  Q = 3a + 4b - 2c :

     r = (1 - t) P + t Q
       = (1-t)(2a + 3b - c) + t(3a + 4b - 2c)

     a :  2(1-t) + 3t  =  2 - 2t + 3t  =  2 + t
     b :  3(1-t) + 4t  =  3 - 3t + 4t  =  3 + t
     c : -1(1-t) - 2t  = -1 +  t - 2t  = -1 - t

     r = (2 + t) a + (3 + t) b + (-1 - t) c          ...(I)


  LINE 2 through  R = a - 2b + 3c  and  S = a - 6b + 6c :

     r = (1 - s) R + s S
       = (1-s)(a - 2b + 3c) + s(a - 6b + 6c)

     a :  1(1-s) + 1s   =  1 - s + s   =  1
     b : -2(1-s) - 6s   = -2 + 2s - 6s = -2 - 4s
     c :  3(1-s) + 6s   =  3 - 3s + 6s =  3 + 3s

     r = (1) a + (-2 - 4s) b + (3 + 3s) c            ...(II)


  The lines meet where (I) = (II). Since a, b, c are NON-COPLANAR
  we may compare coefficients:

     a :   2 + t  =  1                 =>   t = -1
     b :   3 + t  =  -2 - 4s
     c :  -1 - t  =  3 + 3s

  Put t = -1 into the b equation:
           3 - 1 = -2 - 4s
               2 = -2 - 4s
              4s = -4          =>   s = -1

  VERIFY with the c equation:
           LHS = -1 - (-1) = 0
           RHS =  3 + 3(-1) = 0        they agree, so the lines DO meet.

  Point of intersection, from (I) with t = -1:

           r = (2 - 1) a + (3 - 1) b + (-1 + 1) c
             =  a  +  2b  +  0c

  +---------------------------------------------------+
  |    POINT OF INTERSECTION  =   a  +  2b            |
  +---------------------------------------------------+

  CHECK using (II) with s = -1:
           r = a + (-2 + 4) b + (3 - 3) c = a + 2b.   Same point. Correct.
```

> **TRAP:** you must use **different letters** for the two parameters (t and s).
> Using t for both forces the lines to meet at matching parameter values and
> will give you a wrong answer or "no solution".

---

# TOPIC 14 — VECTOR EQUATION OF A PLANE

## Through a point, parallel to two vectors

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |        r  =  a  +  s b  +  t c        s, t any real numbers         |
  |                                                                     |
  |   a = a point in the plane,  b and c = two NON-PARALLEL vectors     |
  |   lying in (or parallel to) the plane                               |
  |                                                                     |
  +---------------------------------------------------------------------+
```

## Through THREE given points A(a), B(b), C(c)

Take AB and AC as the two directions:

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |     r  =  a  +  s ( b - a )  +  t ( c - a )                         |
  |                                                                     |
  |  or, expanded,                                                      |
  |                                                                     |
  |     r  =  (1 - s - t) a  +  s b  +  t c                             |
  |                                                                     |
  |  (again the coefficients add up to 1)                               |
  |                                                                     |
  +---------------------------------------------------------------------+
```

```
                          C (c)
                         /
                        /                 Start at A. Walk s of the way
              A -------/------- B (b)     along AB, then t of the way
             (a)      /                   along AC. You can reach every
                     /                    point of the plane this way.
                    * P(r)
```

## WORKED EXAMPLE 14.1

**Q.** Find the vector equation of the plane passing through the points
`i - 2j + 5k`, `-5j - k` and `-3i + 5j`.

**ANSWER:**

```
  a =  i - 2j + 5k
  b =  0i - 5j -  k
  c = -3i + 5j + 0k

  b - a = (0-1) i + (-5+2) j + (-1-5) k  =  -i - 3j - 6k
  c - a = (-3-1) i + (5+2) j + (0-5) k   = -4i + 7j - 5k

  r = a + s (b - a) + t (c - a)

  r = ( i - 2j + 5k ) + s ( -i - 3j - 6k ) + t ( -4i + 7j - 5k )

  Equivalent accepted form:

  r = (1 - s - t)( i - 2j + 5k ) + s( -5j - k ) + t( -3i + 5j )
```

## WORKED EXAMPLE 14.2

**Q.** Find the vector equation of the plane through the points
`(0, 0, 0)`, `(0, 5, 0)` and `(2, 0, 1)`.

**ANSWER:**

```
  a = 0        b = 5j        c = 2i + k

  b - a = 5j
  c - a = 2i + k

  r  =  0  +  s (5j)  +  t (2i + k)

  r  =  s (5j)  +  t (2i + k)      or simply   r = p j + t(2i + k)
```

---

# TOPIC 15 — PROVING GEOMETRY WITH VECTORS (the 7-mark proofs)

## The universal recipe

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |  STEP 1   Choose the ORIGIN at a convenient vertex (usually A or O).|
  |  STEP 2   Name the two (or three) basic edges: let AB = b, AD = d.  |
  |  STEP 3   Write EVERY other point of the figure in terms of b and d.|
  |  STEP 4   Compute the two things the question compares.             |
  |  STEP 5   Show they are equal (or one is a multiple of the other)   |
  |           and write a one-line CONCLUSION sentence.                 |
  |                                                                     |
  +---------------------------------------------------------------------+
```

## PROOF 1 — The diagonals of a parallelogram bisect each other

```
              D -------------------- C
             /                      /
            /                      /            Let A be the origin.
           /                      /             AB = b ,  AD = d
          /                      /
         /                      /               Then AC = b + d  (parallelogram law)
        A -------------------- B
```

**Proof:**

```
  Take A as the origin, so   A = 0 ,  B = b ,  D = d ,  C = b + d.

  Midpoint of the diagonal AC :

         A + C        0 + (b + d)        b + d
        -------  =  --------------  =  ---------
           2               2               2

  Midpoint of the diagonal BD :

         B + D          b + d
        -------  =  ------------
           2              2

  The two midpoints are THE SAME POINT.

  Therefore each diagonal passes through the midpoint of the other,
  i.e. the diagonals of a parallelogram BISECT EACH OTHER.     [proved]
```

**The converse (also asked):** if the diagonals of a quadrilateral ABCD bisect
each other then `(a + c)/2 = (b + d)/2`, so `a + c = b + d`, so `b - a = c - d`,
i.e. `AB = DC`. Equal and parallel opposite sides means ABCD is a parallelogram.

## PROOF 2 — The line joining the midpoints of two sides of a triangle is
parallel to the third side and half its length

```
                            A (a)
                            /\
                           /  \
                      E   /    \   F        E = midpoint of AB
                     *---/------\--*        F = midpoint of AC
                        /        \
                       /          \
              B ------------------------ C
             (b)                        (c)
```

**Proof:**

```
  Position vectors:  A = a , B = b , C = c.

  E is the midpoint of AB :      E  =  ( a + b ) / 2
  F is the midpoint of AC :      F  =  ( a + c ) / 2

  EF  =  F - E                                (head minus tail)

           a + c       a + b
      =  --------- - ---------
             2           2

           (a + c) - (a + b)          c - b
      =  --------------------  =  -----------
                   2                    2

  But   BC = c - b.

  Therefore     EF  =  (1/2) BC

  (i)  EF is a scalar multiple of BC, so EF is PARALLEL to BC.
  (ii) |EF| = (1/2) |BC|, so EF is HALF the length of BC.      [proved]
```

## PROOF 3 — The medians of a triangle are concurrent (they meet at the centroid)

```
                            A (a)
                            /\
                           /  \
                      F   /    \   E        D = midpoint BC
                     *   /  G   \   *       E = midpoint CA
                        /   *    \          F = midpoint AB
                       /          \
              B --------- * ---------- C
             (b)          D           (c)
```

**Proof:**

```
  Step 1  D, the midpoint of BC, has position vector   D = (b + c)/2

  Step 2  Take the point G on the median AD that divides it in the
          ratio  AG : GD = 2 : 1.  By the section formula,

               2 D + 1 A      2 (b+c)/2 + a        a + b + c
          G = ----------- =  ---------------  =  -------------
                  2 + 1             3                  3

  Step 3  Now do exactly the same on the median BE, where E = (c + a)/2 :

               2 E + 1 B      2 (c+a)/2 + b        a + b + c
                ---------- =  ---------------  =  -------------
                  2 + 1             3                  3

          and on the median CF, where F = (a + b)/2 :

               2 F + 1 C      2 (a+b)/2 + c        a + b + c
                ---------- =  ---------------  =  -------------
                  2 + 1             3                  3

  Step 4  All three points of division are the SAME point (a+b+c)/3.

          Therefore the three medians all pass through this one point.
          The medians are CONCURRENT, and the point of concurrence is the
          CENTROID  G = (a + b + c)/3, which divides each median in the
          ratio 2 : 1 from the vertex.                          [proved]
```

## PROOF 4 — The regular hexagon identity

**Q.** ABCDEF is a regular hexagon with centre O. Show that
`AB + AC + AD + AE + AF = 3 AD = 6 AO`.

```
                 C ------------- B
                /                 \
               /                   \
              /          O          \
           D  +           *          +  A
              \                     /
               \                   /
                \                 /
                 E ------------- F

        In a regular hexagon:
          * O is the MIDPOINT of every main diagonal (AD, BE, CF)
          * BC and FE are each equal (as vectors) to AO
          * ABOF is a rhombus, so its diagonal AO = AB + AF
```

**Proof:**

```
  Step 1   O is the midpoint of AD, so       AD = 2 AO           ...(1)

  Step 2   BC is parallel to AD and equal in length to the radius,
           and points the same way as AO, so   BC = AO
           Similarly                            FE = AO

  Step 3   AC = AB + BC = AB + AO             ...(2)
           AE = AF + FE = AF + AO             ...(3)

  Step 4   ABOF is a rhombus with AB and AF as adjacent sides, so by the
           parallelogram law its diagonal from A is

                     AB + AF  =  AO           ...(4)

  Step 5   Add everything up:

     AB + AC + AD + AE + AF
        = AB + (AB + AO) + AD + (AF + AO) + AF        using (2) and (3)
        = 2 AB + 2 AF + 2 AO + AD
        = 2 (AB + AF) + 2 AO + AD
        = 2 (AO) + 2 AO + AD                          using (4)
        = 4 AO + AD
        = 4 AO + 2 AO                                 using (1)
        = 6 AO

     and since AD = 2 AO ,   6 AO = 3 (2 AO) = 3 AD.

     Therefore   AB + AC + AD + AE + AF = 3 AD = 6 AO.        [proved]
```

## PROOF 5 — The trisection result in a parallelogram

**Q.** In a parallelogram ABCD, E and F are the midpoints of the sides AB and CD.
Show that the line segments DE and BF trisect the diagonal AC.

```
              D ---------- F --------- C
             /                        /
            /                        /
           /                        /
          /                        /
         A ---------- E --------- B
```

**Proof:**

```
  Take A as the origin.  Let  AB = b  and  AD = d.

     A = 0 ,  B = b ,  D = d ,  C = b + d
     E = midpoint of AB = b/2
     F = midpoint of DC = d + b/2

  The diagonal AC is the set of points   p = k (b + d).

  (i) Where does DE cut AC?

      Points of DE :   d + u ( E - D ) = d + u ( b/2 - d )
                     = (u/2) b + (1 - u) d

      Set equal to k(b + d) and compare coefficients of b and d
      (b and d are non-parallel, so this is allowed):

           b :   u/2  =  k
           d :  1 - u =  k

      So   u/2 = 1 - u   =>   u = 2 - 2u   =>   3u = 2   =>   u = 2/3
      and  k = u/2 = 1/3.

      So DE meets AC at the point   P = (1/3)(b + d).

  (ii) Where does BF cut AC?

      Points of BF :   b + v ( F - B ) = b + v ( d + b/2 - b )
                     = b + v ( d - b/2 )
                     = (1 - v/2) b + v d

      Set equal to k(b + d):

           b :  1 - v/2 = k
           d :        v = k

      So   v = 1 - v/2   =>   2v = 2 - v   =>   3v = 2   =>   v = 2/3
      and  k = 2/3.

      So BF meets AC at the point   Q = (2/3)(b + d).

  (iii) A is at k = 0, P is at k = 1/3, Q is at k = 2/3, C is at k = 1.

        So P and Q divide AC into three equal parts.
        DE and BF TRISECT the diagonal AC.                     [proved]
```

## PROOF 6 — Ratio finding in a triangle (very common Section C)

**Q.** In triangle OAB, E is the midpoint of OB and D is the point on AB with
`AD : DB = 2 : 1`. OD and AE meet at P. Find `AP : PE` and `DP : PO`.

```
                     B
                    /|
                   / |
                  /  D          E is the midpoint of OB
                 /   |          D divides AB in 2 : 1
                /    |          P = intersection of OD and AE
               E     |
                \  P |
                 \ * |
                  \  |
                   \ |
              O ---- A
```

**Proof:**

```
  Take O as origin.  Let  OA = a ,  OB = b.

     E = midpoint of OB = b/2

     D divides AB in the ratio AD : DB = 2 : 1, so by the section formula
     (far point B gets the 2, near point A gets the 1):

           2 b + 1 a       a + 2b
     D =  ----------- =  ----------
             2 + 1            3

  P lies on OD :        P = t D = t ( a + 2b ) / 3            ...(I)

  P lies on AE :        P = a + s ( E - A ) = a + s ( b/2 - a )
                          = (1 - s) a + (s/2) b               ...(II)

  a and b are not parallel (they are two sides of a triangle),
  so compare coefficients of a and b in (I) and (II):

       a :   t/3    =  1 - s          ...(1)
       b :   2t/3   =  s/2            ...(2)

  From (2):    s = 4t/3

  Put into (1):   t/3 = 1 - 4t/3
                  t/3 + 4t/3 = 1
                  5t/3 = 1        =>   t = 3/5      and   s = 4/5

  Therefore   P = (3/5)(a + 2b)/3 = ( a + 2b ) / 5

  READING OFF THE RATIOS:

     On AE, the parameter s runs from 0 at A to 1 at E, and s = 4/5.
     So   AP : PE  =  4/5 : 1/5  =  4 : 1

     On OD, the parameter t runs from 0 at O to 1 at D, and t = 3/5.
     So   OP : PD  =  3/5 : 2/5  =  3 : 2 ,  hence  DP : PO = 2 : 3

  CHECK:  from (II) with s = 4/5,
          P = (1 - 4/5) a + (4/10) b = a/5 + 2b/5 = (a + 2b)/5.
          Same as from (I). Correct.

  ANSWER:   AP : PE = 4 : 1        DP : PO = 2 : 3
```

## PROOF 7 — A quick one worth memorising

**Q.** ABCD is a parallelogram. L and M are the midpoints of BC and CD.
Express AL and AM in terms of AB and AD, and prove `AL + AM = (3/2) AC`.

**ANSWER:**

```
  Let  AB = b  and  AD = d.   Then  AC = b + d,  and taking A as origin:

     B = b ,  D = d ,  C = b + d

     L = midpoint of BC = ( b + (b + d) ) / 2 = b + d/2
     M = midpoint of CD = ( (b + d) + d ) / 2 = b/2 + d

  So        AL  =  b + d/2   =  AB + (1/2) AD
            AM  =  b/2 + d   =  (1/2) AB + AD

  Adding:   AL + AM  =  (3/2) b  +  (3/2) d
                     =  (3/2) ( b + d )
                     =  (3/2) AC                                [proved]
```

---

# THE MISTAKES THAT COST THE MOST MARKS

| # | The mistake | The fix |
|---|---|---|
| 1 | Writing `AB = a - b` | It is **b - a**. HEAD minus TAIL. |
| 2 | No bar/arrow over vector letters | Draw the bar. It is free. |
| 3 | Writing `a = 5` for a magnitude | Write `\|a\| = 5`. |
| 4 | Section formula upside down | Test with m = n = 1; you must get the midpoint. |
| 5 | Using `p a` instead of `p a/\|a\|` for "magnitude p along a" | Divide by \|a\| first. |
| 6 | Same parameter t for both lines in an intersection question | Use t and s. |
| 7 | Not verifying with the third equation | Always substitute back. |
| 8 | Forgetting to say "since a, b, c are non-coplanar" | One sentence, one mark. |
| 9 | Sum vs difference diagonal in a parallelogram | Sum starts at the shared corner. |
| 10 | `\|b\| = k\|a\|` with a negative k | It is `\|k\|\|a\|`. Lengths are never negative. |
| 11 | Adding `AB + CB` nose-to-tail | Letters must match: flip to `-BC` first. |
| 12 | Giving a decimal instead of a surd | Leave sqrt(34) as sqrt(34). |
| 13 | Not naming the vertex of the right angle | Name it. |
| 14 | Stopping at "AC = 3AB" without a conclusion sentence | Add "hence A, B, C are collinear". |

---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

```
  [ ]  Every vector letter has a BAR or an ARROW over it.
  [ ]  Every magnitude is written with modulus bars:  |a| , |AB|.
  [ ]  In every "join two points" step I wrote  b - a , not  a - b.
  [ ]  Every square root is simplified:  sqrt(116) written as 2 sqrt(29).
  [ ]  No decimals where a surd belongs.
  [ ]  In every unit-vector answer I divided by the magnitude.
  [ ]  In every section-formula answer, the FIRST ratio number sits with
       the SECOND point.
  [ ]  In every collinear / coplanar proof I wrote the final sentence:
       "therefore the points are collinear / coplanar".
  [ ]  In every coefficient-comparison I wrote the reason:
       "since a, b, c are non-coplanar (linearly independent)".
  [ ]  In every intersection problem I used TWO different parameters,
       and I verified the answer in BOTH line equations.
  [ ]  Every numerical answer was checked by substituting back.
  [ ]  Every diagram is labelled with the letters used in the working.
  [ ]  I attempted ALL 10 questions in Section A (they are compulsory).
  [ ]  I attempted exactly 5 in Section B and exactly 5 in Section C —
       extra attempts waste time and only the first ones may be marked.
```
