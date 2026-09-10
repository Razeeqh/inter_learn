# Product of Vectors — Formula Sheet

Copy this by hand into a notebook. Writing it once beats reading it ten times.
The last column tells you WHEN to use the formula — that is what exams actually test.

---

# 0. THE ONE-LINE SUMMARY

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |     a . b        DOT     ->  a NUMBER   ->  angles, projections     |
  |     a x b        CROSS   ->  a VECTOR   ->  areas, perpendiculars   |
  |     [a b c]      TRIPLE  ->  a NUMBER   ->  volumes, coplanarity    |
  |     a x (b x c)  TRIPLE  ->  a VECTOR   ->  identities              |
  |                                                                     |
  +---------------------------------------------------------------------+
```

---

# 1. CARRIED OVER FROM CHAPTER 4

```
  For  a = a1 i + a2 j + a3 k :

  |a|          =  sqrt( a1^2 + a2^2 + a3^2 )

  unit vector  =  a / |a|                   (written a-hat)

  AB (vector)  =  B - A          "head minus tail"
```

| Formula | When to use |
|---|---|
| \|a\| = sqrt(a1^2 + a2^2 + a3^2) | in EVERY angle, projection, area and volume question |
| a-hat = a/\|a\| | unit vector questions, moment about a line |
| AB = B - A | whenever the question gives you POINTS instead of vectors |

---

# 2. THE DOT (SCALAR) PRODUCT — DEFINITION

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |        a . b  =  |a| |b| cos(theta)          0 <= theta <= 180 deg  |
  |                                                                     |
  |        a . b  =  a1 b1  +  a2 b2  +  a3 b3      (component form)    |
  |                                                                     |
  +---------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| a . b = \|a\|\|b\| cos theta | when the question gives LENGTHS and an ANGLE |
| a . b = a1b1 + a2b2 + a3b3 | when the question gives vectors in i, j, k form |
| a . b > 0 | to say the angle is acute |
| a . b < 0 | to say the angle is obtuse |
| a . b = 0 | to prove PERPENDICULAR, or to find a missing letter |

---

# 3. PROPERTIES OF THE DOT PRODUCT

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |    a . b        =  b . a                     commutative            |
  |    a . (b + c)  =  a.b  +  a.c               distributive           |
  |    (k a) . b    =  k (a . b)  =  a . (k b)                          |
  |    a . a        =  |a|^2      so   |a| = sqrt(a . a)                |
  |    a . 0        =  0                                                |
  |                                                                     |
  |    a . b = 0  <=>  a = 0  or  b = 0  or  a is perpendicular to b    |
  |                                                                     |
  +---------------------------------------------------------------------+
```

## The i, j, k table

```
       .  |   i     j     k                    i.i = j.j = k.k = 1
     -----+-----------------                   i.j = j.k = k.i = 0
       i  |   1     0     0
       j  |   0     1     0                    "same one -> 1
       k  |   0     0     1                     different -> 0"
```

## Expansions you must be able to write instantly

```
  |a + b|^2  =  |a|^2 + |b|^2 + 2 (a . b)

  |a - b|^2  =  |a|^2 + |b|^2 - 2 (a . b)

  (a + b).(a - b)  =  |a|^2 - |b|^2

  |a+b|^2 + |a-b|^2  =  2( |a|^2 + |b|^2 )        parallelogram law

  |a+b|^2 - |a-b|^2  =  4 (a . b)

  |a + b + c|^2 = |a|^2 + |b|^2 + |c|^2 + 2(a.b + b.c + c.a)
```

| Formula | When to use |
|---|---|
| \|a+b\|^2 = \|a\|^2+\|b\|^2+2(a.b) | "find \|a+b\| given \|a\|, \|b\| and the angle" |
| (a+b).(a-b) = \|a\|^2-\|b\|^2 | rhombus / diagonal perpendicularity proofs |
| \|a+b\| = \|a-b\| gives a.b = 0 | classic 2-mark "show perpendicular" |
| \|a+b+c\|^2 expansion | when a + b + c = 0 is given; find a.b + b.c + c.a |

---

# 4. ANGLE, PERPENDICULARITY, PROJECTION

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |                        a . b            a1b1 + a2b2 + a3b3          |
  |     cos(theta)   =   ---------   =   -------------------------      |
  |                       |a| |b|            |a|  x  |b|                |
  |                                                                     |
  |     PERPENDICULAR   <=>   a . b = 0                                 |
  |                                                                     |
  |                                        a . b                        |
  |     Projection (LENGTH) of a on b  =  -------          a NUMBER     |
  |                                         |b|                         |
  |                                                                     |
  |                                        ( a . b )                    |
  |     Projection VECTOR of a on b    =   ---------  b    a VECTOR     |
  |                                          |b|^2                      |
  |                                                                     |
  |                                        ( a . b )                    |
  |     Component of a ALONG b         =   ---------  b    a VECTOR     |
  |                                          |b|^2                      |
  |                                                                     |
  |                                              ( a . b )              |
  |     Component of a PERP to b       =  a  -   ---------  b           |
  |                                                |b|^2                |
  |                                                                     |
  +---------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| cos theta = (a.b)/(\|a\|\|b\|) | "find the angle between" — the most asked 2-mark item |
| a . b = 0 | "find x so that a is perpendicular to b" |
| (a.b)/\|b\| | "find the projection of a ON b" |
| ((a.b)/\|b\|^2) b | when the answer is asked as a VECTOR |
| a - ((a.b)/\|b\|^2) b | "component perpendicular to b" |
| a . b / (\|a\|\|b\|) with the sign kept | never make a negative cosine positive |

```
  MEMORY HOOK for projection:

      "projection of  a  ON  b"
                           ^^
                    divide by the length of the vector after ON
```

---

# 5. WORK DONE BY A FORCE

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |      W  =  F . d          d = displacement = (final) - (initial)    |
  |                                                                     |
  |      Several forces at once:   W = (F1 + F2 + ... ) . d             |
  |                                                                     |
  +---------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| W = F . d | "a force moves a particle from A to B, find the work done" |
| d = B - A | always; getting this backwards flips the sign |
| add the forces first | when several forces act on the same particle |

---

# 6. THE CROSS (VECTOR) PRODUCT — DEFINITION

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |      a x b  =  |a| |b| sin(theta)  n                                |
  |                                                                     |
  |      n = unit vector perpendicular to both a and b,                 |
  |          direction given by the RIGHT-HAND RULE                     |
  |                                                                     |
  |                    | i     j     k  |                               |
  |      a x b   =     | a1    a2    a3 |                               |
  |                    | b1    b2    b3 |                               |
  |                                                                     |
  |    = (a2b3 - a3b2) i - (a1b3 - a3b1) j + (a1b2 - a2b1) k            |
  |                                                                     |
  |                   ^^^ MINUS in front of j ^^^                       |
  |                                                                     |
  +---------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| a x b = \|a\|\|b\| sin theta n | when lengths and the angle are given |
| the 3 x 3 determinant | whenever the vectors are in i, j, k form — i.e. nearly always |
| \|a x b\| = \|a\|\|b\| sin theta | to find sin theta, or an area, from lengths |

---

# 7. PROPERTIES OF THE CROSS PRODUCT

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |    a x b        =  - (b x a)                 ANTI-COMMUTATIVE       |
  |    a x (b + c)  =  (a x b) + (a x c)         distributive           |
  |    (k a) x b    =  k (a x b)  =  a x (k b)                          |
  |    a x a        =  0    (the ZERO VECTOR)                           |
  |                                                                     |
  |    a x b = 0  <=>  a = 0  or  b = 0  or  a is PARALLEL to b         |
  |                                                                     |
  |    a . (a x b) = 0        and       b . (a x b) = 0                 |
  |                                                                     |
  |    a x (b x c)  is NOT equal to  (a x b) x c    NOT ASSOCIATIVE     |
  |                                                                     |
  +---------------------------------------------------------------------+
```

## The i, j, k circle

```
                    i                        i x j =  k     j x i = -k
                   / \                       j x k =  i     k x j = -i
                  /   \                      k x i =  j     i x k = -j
                 /     \
                k-------j                    i x i = j x j = k x k = 0


       x  |    i      j      k          Read ROW x COLUMN.
     -----+----------------------       Forward round the circle -> PLUS
       i  |    0      k     -j          Backward round the circle -> MINUS
       j  |   -k      0      i
       k  |    j     -i      0
```

## Lagrange's identity

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |     |a x b|^2  +  (a . b)^2   =   |a|^2 |b|^2                       |
  |                                                                     |
  |     |a x b|^2  =  |a|^2 |b|^2 - (a . b)^2                           |
  |                                                                     |
  |                =  |  a.a    a.b  |                                  |
  |                   |  a.b    b.b  |                                  |
  |                                                                     |
  +---------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| a x b = -(b x a) | any "is the cross product commutative?" question |
| a x a = 0 (vector) | simplifying expressions like (a+b) x (a-b) |
| (a+b) x (a-b) = 2(b x a) | a standard 2-mark simplification |
| a x b = 0 | to prove PARALLEL / COLLINEAR, or to find a missing letter |
| Lagrange | given \|a\|, \|b\| and a.b, find \|a x b\| — and the reverse |
| i x (i x j) is not (i x i) x j | the standard "not associative" 2-mark answer |

---

# 8. UNIT VECTOR PERPENDICULAR TO TWO VECTORS

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |                              a x b                                  |
  |          n   =   +  or  -   --------                                |
  |                             |a x b|                                 |
  |                                                                     |
  |          THE  +/-  IS PART OF THE ANSWER. There are two such        |
  |          unit vectors, one on each side of the plane.               |
  |                                                                     |
  |          Vector of LENGTH m perpendicular to both:                  |
  |                                                                     |
  |                     m ( a x b ) / |a x b|                           |
  |                                                                     |
  +---------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| +/- (a x b)/\|a x b\| | "find a unit vector perpendicular to a and b" |
| same, with AB and AC | "perpendicular to the plane through A, B, C" |
| m(a x b)/\|a x b\| | "find a vector of magnitude m perpendicular to both" |

---

# 9. AREAS

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |   PARALLELOGRAM, adjacent SIDES a and b       =   | a x b |         |
  |                                                                     |
  |   PARALLELOGRAM, DIAGONALS d1 and d2          =   (1/2)| d1 x d2 |  |
  |                                                                     |
  |   TRIANGLE, two sides a and b from one vertex =   (1/2)| a x b |    |
  |                                                                     |
  |   TRIANGLE ABC given three vertices           =   (1/2)| AB x AC |  |
  |                                                                     |
  |   TRIANGLE, position vectors a, b, c of the vertices                |
  |                        =  (1/2) | a x b  +  b x c  +  c x a |       |
  |                                                                     |
  +---------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| \|a x b\| | SIDES of a parallelogram are given — **no 1/2** |
| (1/2)\|d1 x d2\| | DIAGONALS of a parallelogram are given — **use 1/2** |
| (1/2)\|AB x AC\| | three vertices of a triangle are given |
| (1/2)\|a x b + b x c + c x a\| | position vectors of the vertices are given |
| A, B, C collinear <=> AB x AC = 0 | "show the three points are collinear" |

```
   READ THE QUESTION:      SIDES  ->  no 1/2
                           DIAGONALS -> 1/2
                           TRIANGLE  -> 1/2
```

---

# 10. MOMENT (TORQUE) OF A FORCE

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |   Moment of force F acting at A, ABOUT THE POINT P                  |
  |                                                                     |
  |        M  =  r x F        where  r = PA = A - P     <-- a VECTOR    |
  |                                                                     |
  |        |M| = |r| |F| sin theta = force x perpendicular distance     |
  |                                                                     |
  |   Moment of F acting at A, ABOUT A LINE through P with UNIT         |
  |   direction vector u                                                |
  |                                                                     |
  |        moment  =  (r x F) . u  =  [ r  F  u ]       <-- a NUMBER    |
  |                                                                     |
  +---------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| M = r x F | "find the moment about the point P" |
| r = A - P | always from the PIVOT to the POINT WHERE THE FORCE ACTS |
| [r F u] | "find the moment about the line ..." |
| make u a unit vector first | whenever a plain direction vector is given |

---

# 11. THE SCALAR TRIPLE PRODUCT

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |                                     | a1    a2    a3 |              |
  |     [a b c]  =  a . ( b x c )   =   | b1    b2    b3 |              |
  |                                     | c1    c2    c3 |              |
  |                                                                     |
  |     ROW 1 = a ,  ROW 2 = b ,  ROW 3 = c .   Answer is a NUMBER.     |
  |                                                                     |
  +---------------------------------------------------------------------+
```

## Properties

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |   CYCLIC   [a b c] = [b c a] = [c a b]                              |
  |                                                                     |
  |   ONE SWAP FLIPS THE SIGN                                           |
  |            [a b c] = -[b a c] = -[a c b] = -[c b a]                 |
  |                                                                     |
  |   DOT and CROSS CAN TRADE PLACES                                    |
  |            a . (b x c)  =  (a x b) . c                              |
  |                                                                     |
  |   TWO EQUAL VECTORS -> ZERO                                         |
  |            [a a c] = [a b a] = [a b b] = 0                          |
  |                                                                     |
  |   [ i j k ] = 1                                                     |
  |                                                                     |
  |   [k a , b , c] = k [a b c]                                         |
  |                                                                     |
  |   [a + d , b , c] = [a b c] + [d b c]                               |
  |                                                                     |
  |   [a+b , b+c , c+a] = 2 [a b c]        <-- standard 4-mark result   |
  |                                                                     |
  |   [a x b , b x c , c x a] = [a b c]^2  <-- standard 4-mark result   |
  |                                                                     |
  +---------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| the 3 x 3 determinant | "find [a b c]" — just evaluate it |
| cyclic property | to rearrange before computing, or in proofs |
| [a b c] = 0 when two are equal | instant answer to many objective questions |
| [a+b, b+c, c+a] = 2[a b c] | a named Section B proof |
| [a x b, b x c, c x a] = [a b c]^2 | a named Section B proof |
| a.(b x c) = (a x b).c | to switch the dot and the cross in a proof |

---

# 12. VOLUMES

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |   PARALLELEPIPED with coterminous edges a, b, c                     |
  |                                                                     |
  |          V  =  | [a b c] |                                          |
  |                                                                     |
  |   TETRAHEDRON with coterminous edges a, b, c                        |
  |                                                                     |
  |          V  =  (1/6) | [a b c] |                                    |
  |                                                                     |
  |   TETRAHEDRON with vertices A, B, C, D                              |
  |                                                                     |
  |          V  =  (1/6) | [ AB  AC  AD ] |                             |
  |                                                                     |
  +---------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| \|[a b c]\| | "volume of the parallelepiped" — **no 1/6** |
| (1/6)\|[a b c]\| | "volume of the tetrahedron" — **use 1/6** |
| (1/6)\|[AB AC AD]\| | four VERTICES are given |
| take the modulus last | a volume is never negative |

---

# 13. COPLANARITY

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |   Three vectors a, b, c are COPLANAR    <=>   [a b c] = 0           |
  |                                                                     |
  |   Four points A, B, C, D are COPLANAR   <=>   [AB  AC  AD] = 0      |
  |                                                                     |
  |   (equivalently, the volume of the box they make is zero)           |
  |                                                                     |
  +---------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| [a b c] = 0 | "show they are coplanar" |
| [a b c] = 0, solve for lambda | "find lambda so that they are coplanar" |
| [AB AC AD] = 0 | "show the four points lie in one plane" |
| [a b c] not 0 | "show they are NOT coplanar / form a genuine box" |

---

# 14. THE VECTOR TRIPLE PRODUCT

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |     a x ( b x c )   =   ( a . c ) b   -   ( a . b ) c               |
  |                                                                     |
  |     ( a x b ) x c   =   ( a . c ) b   -   ( b . c ) a               |
  |                                                                     |
  |     a x (b x c) + b x (c x a) + c x (a x b)  =  0                   |
  |                                                                     |
  +---------------------------------------------------------------------+

     MEMORY RULE:      " B A C   minus   C A B "

          a x (b x c)  =  b (a.c)  -  c (a.b)
                          -------     -------
                           B A C       C A B

     The MIDDLE letter of the bracket comes first and is POSITIVE.
     The OUTER letter of the bracket comes second and is NEGATIVE.
```

| Formula | When to use |
|---|---|
| (a.c)b - (a.b)c | "simplify a x (b x c)" — far faster than two crosses |
| (a.c)b - (b.c)a | when the bracket is on the LEFT |
| the sum of the three = 0 | a standard identity proof (Jacobi) |
| i x (i x j) is not (i x i) x j | to show it is not associative |

---

# 15. PRODUCTS OF FOUR VECTORS

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |   SCALAR:                                                           |
  |        (a x b) . (c x d)  =  (a.c)(b.d)  -  (a.d)(b.c)              |
  |                                                                     |
  |                           =  |  a.c    a.d  |                       |
  |                              |  b.c    b.d  |                       |
  |                                                                     |
  |   VECTOR:                                                           |
  |        (a x b) x (c x d)  =  [a b d] c  -  [a b c] d                |
  |                           =  [a c d] b  -  [b c d] a                |
  |                                                                     |
  +---------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| (a.c)(b.d) - (a.d)(b.c) | "find (a x b).(c x d)" or prove Lagrange |
| the 2 x 2 determinant layout | easier to remember than the expanded form |
| [a b d]c - [a b c]d | rare, but appears in EAPCET |

---

# 16. GEOMETRY RESULTS PROVED WITH VECTORS

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |   COSINE RULE      a^2 = b^2 + c^2 - 2 b c cos A                    |
  |                    (start from  BC = AC - AB , then square)         |
  |                                                                     |
  |   SINE RULE        sin A / a = sin B / b = sin C / c                |
  |                    (start from  p + q + r = 0 , then cross)         |
  |                                                                     |
  |   PROJECTION RULE  a = b cos C + c cos B                            |
  |                                                                     |
  |   PERPENDICULAR DISTANCE from P to the line through A               |
  |   with direction u                                                  |
  |                                                                     |
  |                    d  =  | AP x u |  /  | u |                       |
  |                                                                     |
  |   Diagonals of a RHOMBUS are perpendicular                          |
  |                    (a + b) . (a - b) = |a|^2 - |b|^2 = 0            |
  |                                                                     |
  |   Angle in a SEMICIRCLE is 90 degrees                               |
  |                    (r + a) . (r - a) = |r|^2 - |a|^2 = 0            |
  |                                                                     |
  +---------------------------------------------------------------------+
```

| Result | When to use |
|---|---|
| cosine rule proof | a named 7-mark Section C question |
| sine rule proof | a named 7-mark Section C question |
| \|AP x u\|/\|u\| | "find the distance from the point to the line" |
| rhombus diagonals | a named 4-mark proof |
| angle in a semicircle | a named 4-mark proof |

---

# 17. THE ZERO CONDITIONS — DO NOT MIX THESE UP

```
  +-----------------------+-------------------------+---------------------+
  |     a . b  =  0       |      a x b  =  0        |    [a b c] = 0      |
  +-----------------------+-------------------------+---------------------+
  |   PERPENDICULAR       |     PARALLEL            |    COPLANAR         |
  |   angle = 90 deg      |     angle = 0 or 180    |    volume = 0       |
  |   answer is a NUMBER  |     answer is a VECTOR  |    answer NUMBER    |
  +-----------------------+-------------------------+---------------------+
```

---

# THE 15 FORMULAE TO WRITE ON YOUR PALM

If you learn nothing else in this chapter, learn these fifteen lines.
They cover every 2-mark and 4-mark question this chapter has ever produced.

```
  +----+--------------------------------------------------------------+
  | 1  |  a . b  =  a1b1 + a2b2 + a3b3                                |
  +----+--------------------------------------------------------------+
  | 2  |  a . b  =  |a| |b| cos theta                                 |
  +----+--------------------------------------------------------------+
  | 3  |  cos theta  =  (a . b) / ( |a| |b| )                         |
  +----+--------------------------------------------------------------+
  | 4  |  PERPENDICULAR  <=>  a . b = 0                               |
  +----+--------------------------------------------------------------+
  | 5  |  projection of a on b  =  (a . b) / |b|                      |
  +----+--------------------------------------------------------------+
  | 6  |  component of a along b  =  ((a . b)/|b|^2) b                |
  +----+--------------------------------------------------------------+
  | 7  |  W  =  F . d      with   d = B - A                           |
  +----+--------------------------------------------------------------+
  | 8  |                    | i    j    k |                           |
  |    |    a x b   =       | a1   a2   a3|      (MINUS on the j)     |
  |    |                    | b1   b2   b3|                           |
  +----+--------------------------------------------------------------+
  | 9  |  PARALLEL  <=>  a x b = 0        and   a x b = -(b x a)      |
  +----+--------------------------------------------------------------+
  | 10 |  unit vector perpendicular  =  +/- (a x b)/|a x b|           |
  +----+--------------------------------------------------------------+
  | 11 |  area of triangle  =  (1/2) | AB x AC |                      |
  |    |  area of parallelogram from sides = | a x b |                |
  |    |  area of parallelogram from diagonals = (1/2)| d1 x d2 |     |
  +----+--------------------------------------------------------------+
  | 12 |  moment about a point  =  r x F ,   r = A - P                |
  |    |  moment about a line   =  [ r  F  u ] ,  u a UNIT vector     |
  +----+--------------------------------------------------------------+
  | 13 |                    | a1   a2   a3 |                          |
  |    |    [a b c]   =     | b1   b2   b3 |     = a . (b x c)        |
  |    |                    | c1   c2   c3 |                          |
  +----+--------------------------------------------------------------+
  | 14 |  volume of parallelepiped = |[a b c]|                        |
  |    |  volume of tetrahedron    = (1/6)|[a b c]|                   |
  |    |  COPLANAR  <=>  [a b c] = 0                                  |
  +----+--------------------------------------------------------------+
  | 15 |  a x (b x c)  =  (a.c) b  -  (a.b) c        "BAC - CAB"      |
  +----+--------------------------------------------------------------+
```

**Test yourself:** cover the right-hand side, read the number, and write the
formula from memory. Do this every morning for a week. That is the whole
revision plan for this chapter.
