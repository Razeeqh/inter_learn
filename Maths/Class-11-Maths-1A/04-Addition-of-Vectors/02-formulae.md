# Addition of Vectors — Formula Sheet

Copy this by hand into a notebook. Writing it once beats reading it ten times.
The last column tells you **WHEN** to use the formula — that is what the exam
actually tests.

```
  Reminder on notation:
     a , b , c , r     vectors (put a BAR over the letter in your answer book)
     |a|               magnitude — a plain NUMBER, never a vector
     AB                the vector from point A to point B
     a-hat             the unit vector along a
```

---

# 0. THE ONE-LINE SUMMARY

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |    AB = b - a            head minus tail        -> joins 2 points   |
  |    |a| = sqrt(x^2+y^2+z^2)   length             -> a NUMBER         |
  |    a-hat = a / |a|       unit vector            -> length 1         |
  |    r = (mb + na)/(m+n)   section formula        -> splits a segment |
  |    G = (a+b+c)/3         centroid               -> triangles        |
  |                                                                     |
  +---------------------------------------------------------------------+
```

Those five lines answer more than half of every question this chapter can ask.

---

# 1. TYPES OF VECTORS

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |    ZERO / NULL       0        |0| = 0 , direction indeterminate     |
  |    UNIT              a-hat    |a-hat| = 1                            |
  |    EQUAL             a = b    same magnitude AND same direction     |
  |    NEGATIVE          -a       same magnitude, opposite direction    |
  |                               BA = -AB                              |
  |    LIKE              b = k a  with  k > 0                           |
  |    UNLIKE            b = k a  with  k < 0                           |
  |    COLLINEAR         b = k a  for some real k  (k =/= 0)            |
  |    COPLANAR          c = x a + y b  (one is a combination of two)   |
  |    POSITION VECTOR   OP = p   drawn from the fixed origin O         |
  |    FREE              can be slid anywhere                           |
  |    LOCALISED         tied to a fixed initial point                  |
  |    COINITIAL         same starting point                            |
  |    COTERMINOUS       same ending point                              |
  |                                                                     |
  +---------------------------------------------------------------------+
```

| Fact | When to use |
|---|---|
| a, b collinear <=> `b = k a` <=> components proportional | "find x so the vectors are parallel/collinear" |
| k > 0 like, k < 0 unlike | "are they like or unlike?" |
| `\|b\| = \|k\| \|a\|` | comparing lengths of parallel vectors |
| `BA = -AB` | when the letters do not match for nose-to-tail addition |
| a, b, c coplanar <=> one is a combination of the other two | 3-vector coplanarity, linear dependence |

---

# 2. ADDITION — THE THREE LAWS

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |   TRIANGLE LAW          AB  +  BC  =  AC                            |
  |                         (nose to tail)                              |
  |                                                                     |
  |   PARALLELOGRAM LAW     AB  +  AD  =  AC                            |
  |                         (tails together, AC is the diagonal)        |
  |                         other diagonal  DB = AB - AD                |
  |                                                                     |
  |   POLYGON LAW           AB + BC + CD + DE  =  AE                    |
  |                                                                     |
  |   CLOSED FIGURE         AB + BC + CD + DE + EA  =  0                |
  |                                                                     |
  +---------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `AB + BC = AC` | any time two vectors join nose-to-tail |
| `AB + AD = AC` (diagonal) | forces at a point, "resultant" questions |
| `DB = AB - AD` | the OTHER diagonal of a parallelogram |
| sum around a closed figure = 0 | pentagon / hexagon / polygon identity questions |
| `OD = OA + AB + BC + CD` | "given OA, AB, BC, CD, find OD" |

---

# 3. PROPERTIES OF ADDITION AND SCALAR MULTIPLICATION

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |   ADDITION                                                          |
  |                                                                     |
  |     CLOSURE          a + b is a vector                              |
  |     COMMUTATIVE      a + b  =  b + a                                |
  |     ASSOCIATIVE      (a + b) + c  =  a + (b + c)                    |
  |     IDENTITY         a + 0  =  a           (0 = zero vector)        |
  |     INVERSE          a + (-a)  =  0                                 |
  |                                                                     |
  |     => the vectors form an ABELIAN GROUP under addition             |
  |                                                                     |
  |   SUBTRACTION                                                       |
  |                                                                     |
  |     a - b  =  a + (-b)        and   a - b  =  -(b - a)              |
  |                                                                     |
  |   SCALAR MULTIPLE   k a                                             |
  |                                                                     |
  |     |k a|  =  |k| |a|                                               |
  |     k > 0 -> same direction   ,   k < 0 -> opposite direction       |
  |     k (a + b)  =  k a + k b                                         |
  |     (k + m) a  =  k a + m a                                         |
  |     k (m a)    =  (k m) a                                           |
  |     1 a = a ,  (-1) a = -a ,  0 a = 0                               |
  |                                                                     |
  |   TRIANGLE INEQUALITY                                               |
  |                                                                     |
  |     | |a| - |b| |  <=  |a + b|  <=  |a| + |b|                       |
  |                                                                     |
  +---------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| the 5 addition properties | the direct 2-mark "state the properties" question |
| `\|k a\| = \|k\| \|a\|` | comparing magnitudes; MCQ traps with negative k |
| `\|a+b\| <= \|a\|+\|b\|` | MCQ bounds; equality only for LIKE vectors |
| `\|a+b\| = \|a\|+\|b\|` | proves a and b are like (same direction) |

---

# 4. POSITION VECTORS — THE MOST USED FORMULA IN THE CHAPTER

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |          AB  =  b  -  a           HEAD MINUS TAIL                   |
  |                                                                     |
  |   For  A(x1, y1, z1)  and  B(x2, y2, z2) :                          |
  |                                                                     |
  |     AB   =  (x2-x1) i + (y2-y1) j + (z2-z1) k                       |
  |                                                                     |
  |     |AB| =  sqrt( (x2-x1)^2 + (y2-y1)^2 + (z2-z1)^2 )               |
  |                                                                     |
  |     AB + BA = 0        and       AA = 0                             |
  |                                                                     |
  +---------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `AB = b - a` | EVERY question that gives you POINTS instead of vectors |
| `\|AB\| = ...` | distance between two points, side length of a triangle |
| `\|AB\|^2 + \|BC\|^2 = \|AC\|^2` | proving a triangle is right-angled (Chapter 4 method) |
| all three sides equal | proving equilateral |
| two sides equal | proving isosceles |

---

# 5. COMPONENT FORM, MAGNITUDE, UNIT VECTOR

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |      r  =  x i  +  y j  +  z k         for the point P(x, y, z)     |
  |                                                                     |
  |      |r|  =  sqrt( x^2 + y^2 + z^2 )                                |
  |                                                                     |
  |                    r            x i + y j + z k                     |
  |      r-hat  =  --------  =  ----------------------                  |
  |                   |r|        sqrt(x^2+y^2+z^2)                      |
  |                                                                     |
  |      vector of magnitude p along r   =   p * r-hat                  |
  |                                                                     |
  |      |i| = |j| = |k| = 1                                            |
  |                                                                     |
  |      a = b   <=>   a1 = b1  AND  a2 = b2  AND  a3 = b3              |
  |                                                                     |
  +---------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `\|r\| = sqrt(x^2+y^2+z^2)` | in EVERY numerical question in the chapter |
| `r-hat = r/\|r\|` | "find the unit vector in the direction of ..." |
| `p * r-hat` | "find the vector of magnitude p in the direction of ..." |
| `-r-hat` | "unit vector in the OPPOSITE direction" |
| equate components | "find x, y, z if the two vectors are equal" |

**2D special case:** if `r` makes an angle theta with the x-axis and `|r| = m`,
then `r = m cos(theta) i + m sin(theta) j`.

---

# 6. DIRECTION COSINES AND DIRECTION RATIOS

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |   For  r = x i + y j + z k   making angles alpha, beta, gamma       |
  |   with the x, y, z axes:                                            |
  |                                                                     |
  |        l = cos alpha = x / |r|                                      |
  |        m = cos beta  = y / |r|                                      |
  |        n = cos gamma = z / |r|                                      |
  |                                                                     |
  |        l^2  +  m^2  +  n^2  =  1        <-- ALWAYS. Use it to check |
  |                                                                     |
  |        r-hat  =  l i  +  m j  +  n k                                |
  |                                                                     |
  |   DIRECTION RATIOS  a : b : c  =  any triple proportional to l:m:n  |
  |   (x, y, z themselves are the easiest direction ratios)             |
  |                                                                     |
  |   Ratios -> cosines:   divide by sqrt(a^2 + b^2 + c^2)              |
  |                                                                     |
  |   sin^2 alpha + sin^2 beta + sin^2 gamma  =  3 - 1  =  2            |
  |                                                                     |
  +---------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `l = x/\|r\|` etc. | "find the direction cosines of ..." |
| `l^2+m^2+n^2 = 1` | to CHECK your answer, and for MCQ shortcuts |
| `sin^2 + sin^2 + sin^2 = 2` | a very common EAPCET one-liner |
| direction ratios = the components | "find the direction ratios" — no dividing needed |
| dc of a LINE joining A and B | first form `AB = b - a`, then divide by \|AB\| |

> Only TWO sets of direction cosines exist for a line: `(l, m, n)` and
> `(-l, -m, -n)`. But INFINITELY many sets of direction ratios exist.

---

# 7. THE SECTION FORMULA

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |   P divides AB in the ratio  m : n                                  |
  |                                                                     |
  |                        m b  +  n a                                  |
  |    INTERNALLY   r  =  ---------------                               |
  |                          m  +  n                                    |
  |                                                                     |
  |                        m b  -  n a                                  |
  |    EXTERNALLY   r  =  ---------------          ( m =/= n )          |
  |                          m  -  n                                    |
  |                                                                     |
  |                        a  +  b                                      |
  |    MIDPOINT     r  =  ----------            (m = n = 1)             |
  |                            2                                        |
  |                                                                     |
  |   MEMORY HOOK:  "CROSS OVER" —  m goes with b,  n goes with a.      |
  |   SELF-CHECK :  put m = n = 1. You must get the midpoint.           |
  |   EXTERNAL   =  INTERNAL with n replaced by (-n).                   |
  |                                                                     |
  +---------------------------------------------------------------------+
```

**In coordinates (internal, ratio m : n):**

```
       ( m x2 + n x1     m y2 + n y1     m z2 + n z1 )
   P = ( -----------  ,  -----------  ,  ----------- )
       (    m + n           m + n           m + n    )
```

| Formula | When to use |
|---|---|
| internal section formula | "find the point dividing AB in the ratio 3:2" |
| external section formula | the word **externally** appears |
| midpoint `(a+b)/2` | midpoints of sides, diagonals bisecting |
| `AP:PB = m:n` from a known P | rearrange and compare coefficients |
| ratio in which a point divides | let the ratio be `k : 1`, then solve for k |

**The "k : 1" trick:** if the question asks *in what ratio* P divides AB,
set the ratio as `k : 1` so that

```
        k b + a
   p = ---------      then compare components and solve for k.
        k + 1         Answer is  k : 1.   k negative => EXTERNAL division.
```

---

# 8. CENTROIDS AND SPECIAL POINTS

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |   MIDPOINT of AB           =  ( a + b ) / 2                         |
  |                                                                     |
  |   CENTROID of triangle ABC =  ( a + b + c ) / 3                     |
  |         divides each median  2 : 1  from the vertex                 |
  |                                                                     |
  |   CENTROID of tetrahedron  =  ( a + b + c + d ) / 4                 |
  |   ABCD                                                              |
  |         divides each vertex-to-opposite-face-centroid line  3 : 1   |
  |                                                                     |
  |   RULE:  count the corners, add the position vectors,               |
  |          divide by how many corners.                                |
  |                                                                     |
  +---------------------------------------------------------------------+
```

**Also worth knowing (they appear in MCQs):**

```
   INCENTRE of triangle ABC, with side lengths
   a = |BC| , b = |CA| , c = |AB| :

                a A  +  b B  +  c C
        I  =  -----------------------
                   a  +  b  +  c

   If G is the centroid then    GA + GB + GC  =  0
   and for any point P :        PA + PB + PC  =  3 PG
```

| Formula | When to use |
|---|---|
| `(a+b+c)/3` | "find the centroid", median problems, concurrency proofs |
| `(a+b+c+d)/4` | tetrahedron questions |
| `GA + GB + GC = 0` | quick MCQ elimination |
| `PA + PB + PC = 3 PG` | "show that ... = 3 PG" style questions |
| incentre formula | EAPCET MCQ only; rarely in the board paper |

---

# 9. LINEAR COMBINATION, DEPENDENCE, COLLINEARITY, COPLANARITY

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |   LINEAR COMBINATION        r = x a + y b + z c                     |
  |                                                                     |
  |   LINEARLY DEPENDENT        x1 a1 + ... + xn an = 0 is possible     |
  |                             with the x's NOT all zero               |
  |                                                                     |
  |   LINEARLY INDEPENDENT      that forces x1 = x2 = ... = 0           |
  |                                                                     |
  |   2 vectors dependent   <=>  COLLINEAR                              |
  |   3 vectors dependent   <=>  COPLANAR                               |
  |   4 or more in 3D space <=>  ALWAYS dependent                       |
  |                                                                     |
  |   i, j, k are independent — so components are UNIQUE.               |
  |                                                                     |
  |   IF a, b, c are NON-COPLANAR and                                   |
  |         x a + y b + z c = x' a + y' b + z' c                        |
  |   THEN  x = x' ,  y = y' ,  z = z'    (COMPARE COEFFICIENTS)        |
  |                                                                     |
  +---------------------------------------------------------------------+
```

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |   THREE POINTS A, B, C ARE COLLINEAR                                |
  |                                                                     |
  |      AB = t (AC)        for some real t                             |
  |                                                                     |
  |      or:  x A + y B + z C = 0  with  x + y + z = 0,                 |
  |           x, y, z not all zero                                      |
  |                                                                     |
  |                                                                     |
  |   FOUR POINTS A, B, C, D ARE COPLANAR                               |
  |                                                                     |
  |      AD = x (AB) + y (AC)     for some real x, y                    |
  |                                                                     |
  |      or:  x A + y B + z C + w D = 0  with  x + y + z + w = 0,       |
  |           x, y, z, w not all zero                                   |
  |                                                                     |
  +---------------------------------------------------------------------+
```

| Test | When to use |
|---|---|
| `AB = t AC` | "prove the 3 points are collinear" (Section B, 4 marks) |
| `AD = x AB + y AC` | "prove the 4 points are coplanar" (Section C, 7 marks) |
| compare coefficients of a, b, c | whenever the problem says "non-coplanar a, b, c" |
| coefficients sum to zero | the alternative write-up of both tests |
| `[a b c] = 0` (Chapter 5) | faster coplanarity test once you know triple products |

---

# 10. VECTOR EQUATIONS OF LINES AND PLANES

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |   LINE through a, parallel to b                                     |
  |                                                                     |
  |        r  =  a  +  t b                     t in R                   |
  |                                                                     |
  |                                                                     |
  |   LINE through the two points a and b                               |
  |                                                                     |
  |        r  =  a  +  t ( b - a )                                      |
  |        r  =  (1 - t) a  +  t b             coefficients sum to 1    |
  |                                                                     |
  |        t = 0 -> A ,  t = 1 -> B ,  t = 1/2 -> midpoint              |
  |                                                                     |
  |                                                                     |
  |   PLANE through a, parallel to b and c                              |
  |                                                                     |
  |        r  =  a  +  s b  +  t c             s, t in R                |
  |                                                                     |
  |                                                                     |
  |   PLANE through the three points a, b, c                            |
  |                                                                     |
  |        r  =  a  +  s ( b - a )  +  t ( c - a )                      |
  |        r  =  (1 - s - t) a  +  s b  +  t c    coefficients sum to 1 |
  |                                                                     |
  +---------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| `r = a + t b` | "line through the point ... parallel to ..." |
| `r = (1-t)a + t b` | "line joining the points ..." |
| `r = (1-s-t)a + s b + t c` | "plane through the three points ..." |
| both lines with **t** and **s**, then equate | "find the point of intersection" |

**INTERSECTION RECIPE (the 7-mark question):**

```
  1. Write line 1 as  r = (1-t) P + t Q  and collect the a, b, c coefficients.
  2. Write line 2 as  r = (1-s) R + s S  and collect the a, b, c coefficients.
  3. Set them equal. Compare coefficients of a, b, c (legal because a, b, c
     are non-coplanar) — this gives THREE equations in TWO unknowns.
  4. Solve any TWO of them for t and s.
  5. VERIFY in the third. If it works, the lines meet; if not, they are skew.
  6. Substitute t back into line 1 to get the point. Confirm with line 2.
```

---

# 11. THE STANDARD GEOMETRY RESULTS (know the statement AND the 1-line proof idea)

| Result | The one-line proof idea |
|---|---|
| Diagonals of a parallelogram bisect each other | both midpoints equal `(b+d)/2` |
| Diagonals bisect => it IS a parallelogram | `a + c = b + d` gives `AB = DC` |
| Midpoint line is parallel to the third side and half it | `EF = (c-b)/2 = (1/2) BC` |
| Medians of a triangle are concurrent | each 2:1 point equals `(a+b+c)/3` |
| Centroid divides a median 2 : 1 | section formula on A and `(b+c)/2` |
| DE and BF trisect the diagonal AC of a parallelogram | intersections at `(1/3)(b+d)` and `(2/3)(b+d)` |
| Regular hexagon: `AB+AC+AD+AE+AF = 3AD = 6AO` | `BC = FE = AO`, `AB + AF = AO`, `AD = 2AO` |
| `AL + AM = (3/2) AC` (L, M midpoints of BC, CD) | `AL = b + d/2`, `AM = b/2 + d` |
| Line joining midpoints of the diagonals of a trapezium | equals half the difference of the parallel sides |
| Four diagonals of a parallelepiped bisect each other | all four midpoints equal `(a+b+c)/2` |

---

# 12. THE UNITS-AND-SANITY CHECKS

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |   IS MY ANSWER A VECTOR OR A NUMBER?                                |
  |                                                                     |
  |     a + b , a - b , k a , AB , position vector, centroid  -> VECTOR |
  |     |a| , |AB| , l, m, n , the ratio m:n , distance       -> NUMBER |
  |                                                                     |
  |   IF I GOT A NUMBER WHERE A VECTOR BELONGS, I HAVE GONE WRONG.      |
  |                                                                     |
  |   Other instant checks:                                             |
  |     * l^2 + m^2 + n^2 must equal 1                                  |
  |     * a unit vector must have magnitude exactly 1                   |
  |     * m = n = 1 in the section formula must give the midpoint       |
  |     * a centroid must lie INSIDE the triangle                       |
  |     * internal division gives a point BETWEEN A and B               |
  |     * external division gives a point OUTSIDE segment AB            |
  |                                                                     |
  +---------------------------------------------------------------------+
```

---

# THE 12 FORMULAE TO WRITE ON YOUR PALM

```
  +---+-----------------------------------------------------------------+
  | 1 |  AB  =  b - a                       (head minus tail)           |
  +---+-----------------------------------------------------------------+
  | 2 |  |a|  =  sqrt(x^2 + y^2 + z^2)                                  |
  +---+-----------------------------------------------------------------+
  | 3 |  a-hat  =  a / |a|      ;   magnitude p along a  =  p a / |a|   |
  +---+-----------------------------------------------------------------+
  | 4 |  l = x/|r| , m = y/|r| , n = z/|r|  ;  l^2+m^2+n^2 = 1          |
  +---+-----------------------------------------------------------------+
  | 5 |  INTERNAL   r = ( m b + n a ) / ( m + n )                       |
  +---+-----------------------------------------------------------------+
  | 6 |  EXTERNAL   r = ( m b - n a ) / ( m - n )                       |
  +---+-----------------------------------------------------------------+
  | 7 |  MIDPOINT   r = ( a + b ) / 2                                   |
  +---+-----------------------------------------------------------------+
  | 8 |  CENTROID (triangle) = (a+b+c)/3 ; (tetrahedron) = (a+b+c+d)/4  |
  +---+-----------------------------------------------------------------+
  | 9 |  COLLINEAR   AB = t AC                                          |
  +---+-----------------------------------------------------------------+
  |10 |  COPLANAR    AD = x AB + y AC                                   |
  +---+-----------------------------------------------------------------+
  |11 |  LINE   r = (1-t) a + t b        PLANE  r = (1-s-t)a + s b + t c|
  +---+-----------------------------------------------------------------+
  |12 |  a, b, c NON-COPLANAR  =>  you may COMPARE COEFFICIENTS          |
  +---+-----------------------------------------------------------------+
```

If you can write those twelve lines from memory in three minutes, you can
attempt every single question this chapter has ever asked.
