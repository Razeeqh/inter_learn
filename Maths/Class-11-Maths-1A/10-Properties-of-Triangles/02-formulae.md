# Properties of Triangles — Formula Sheet

**Maths 1A · Chapter 10**

Copy this by hand into a notebook. Writing it once beats reading it ten times.
The "When to use" column is the part exams actually test.

Throughout: sides `a, b, c` face angles `A, B, C`;
`2s = a + b + c`; `delta` = area; `R` = circumradius; `r` = inradius;
`r1, r2, r3` = ex-radii opposite A, B, C.

---

# 1. THE BASICS

```
  +-------------------------------------------------------------+
  |   A + B + C = 180 degrees                                   |
  |                                                             |
  |   a + b + c = 2s          s = (a + b + c)/2                 |
  |                                                             |
  |   s - a = (b + c - a)/2                                     |
  |   s - b = (c + a - b)/2                                     |
  |   s - c = (a + b - c)/2                                     |
  |                                                             |
  |   (s-a) + (s-b) + (s-c) = s        <-- free self-check      |
  |                                                             |
  |   2s - a - b = c      2s - b - c = a      2s - c - a = b    |
  |                                                             |
  |   (s-b) + (s-c) = a   (s-c) + (s-a) = b   (s-a) + (s-b) = c |
  +-------------------------------------------------------------+
```

| Formula | When to use |
|---------|-------------|
| `s = (a+b+c)/2` | ALWAYS the first line of any numerical question |
| `(s-a)+(s-b)+(s-c) = s` | to check your arithmetic in 3 seconds |
| `2s - a - b = c` | inside every identity proof, to kill a bracket |
| `a < b + c` (triangle inequality) | to test whether a triangle exists at all |
| Biggest side faces the biggest angle | to sanity-check a solved triangle |

---

# 2. THE SINE RULE

```
  +=============================================================+
  |        a          b          c                              |
  |     ------  =  ------  =  ------  =  2R                     |
  |     sin A      sin B      sin C                             |
  |                                                             |
  |     a = 2R sin A      sin A = a/(2R)                        |
  |     b = 2R sin B      sin B = b/(2R)                        |
  |     c = 2R sin C      sin C = c/(2R)                        |
  +=============================================================+
```

| Formula | When to use |
|---------|-------------|
| `a/sinA = b/sinB = c/sinC` | you know a matched pair (side + its opposite angle) |
| `a = 2R sin A` | to convert a SIDES problem into an ANGLES problem — the single most useful move in the chapter |
| `2R = a/sinA` | to find R when you know one side and its angle |
| `a : b : c = sinA : sinB : sinC` | "the sides are in ratio ..." questions |
| `sinA + sinB + sinC = s/R` | proof questions mixing sines and s |
| `a sin(B-C) + b sin(C-A) + c sin(A-B) = 0` | a standard 4-mark proof |

---

# 3. THE COSINE RULE

```
  +=============================================================+
  |            b^2 + c^2 - a^2                                  |
  |   cos A = -----------------      a^2 = b^2 + c^2 - 2bc cosA |
  |                 2 b c                                       |
  |                                                             |
  |            c^2 + a^2 - b^2                                  |
  |   cos B = -----------------      b^2 = c^2 + a^2 - 2ca cosB |
  |                 2 c a                                       |
  |                                                             |
  |            a^2 + b^2 - c^2                                  |
  |   cos C = -----------------      c^2 = a^2 + b^2 - 2ab cosC |
  |                 2 a b                                       |
  +=============================================================+
```

| Formula | When to use |
|---------|-------------|
| `cos A = (b^2+c^2-a^2)/(2bc)` | you know all three sides, want an angle |
| `a^2 = b^2+c^2-2bc cosA` | you know two sides + the angle BETWEEN them |
| `cos A = 0` -> A = 90 | Pythagoras is just the cosine rule with a right angle |
| `cos A < 0` -> A is obtuse | quick "what kind of triangle is it?" answer |
| `cos A = 1/2` -> A = 60 | very common in exam questions with nice numbers |

**Sign shortcut** for "is the triangle acute / right / obtuse?" — compare `c^2` with `a^2 + b^2`
(where c is the LONGEST side):

```
   c^2 <  a^2 + b^2   ->   ACUTE
   c^2 =  a^2 + b^2   ->   RIGHT
   c^2 >  a^2 + b^2   ->   OBTUSE
```

---

# 4. THE PROJECTION RULE

```
  +=============================================================+
  |     a  =  b cos C  +  c cos B                               |
  |     b  =  c cos A  +  a cos C                               |
  |     c  =  a cos B  +  b cos A                               |
  +=============================================================+
```

| Formula | When to use |
|---------|-------------|
| `a = b cosC + c cosB` | the instant you see the pattern `(side)(cos) + (side)(cos)` |
| `(b+c)cosA + (c+a)cosB + (a+b)cosC = a+b+c` | a 4-mark proof that is 3 lines long |
| `a(b cosC - c cosB) = b^2 - c^2` | standard 4-mark proof (use the cosine rule) |
| `a cosA + b cosB + c cosC = 2 delta / R` | mixed identity questions |

---

# 5. THE TANGENT RULE (NAPIER'S ANALOGY)

```
  +=============================================================+
  |       / A - B \     / a - b \       / C \                   |
  |   tan| ------- | =  | ------ | cot | --- |                  |
  |       \   2   /     \ a + b /       \ 2 /                   |
  |                                                             |
  |       / B - C \     / b - c \       / A \                   |
  |   tan| ------- | =  | ------ | cot | --- |                  |
  |       \   2   /     \ b + c /       \ 2 /                   |
  |                                                             |
  |       / C - A \     / c - a \       / B \                   |
  |   tan| ------- | =  | ------ | cot | --- |                  |
  |       \   2   /     \ c + a /       \ 2 /                   |
  |                                                             |
  |   Companion fact:   (B + C)/2 = 90 - A/2                    |
  |                     cot((B+C)/2) = tan(A/2)                 |
  +=============================================================+
```

| Formula | When to use |
|---------|-------------|
| `tan((B-C)/2) = ((b-c)/(b+c)) cot(A/2)` | given two sides + the INCLUDED angle |
| `(B+C)/2 = 90 - A/2` | always paired with the line above |
| Add and subtract to get B and C | the last step of the SAS case |

---

# 6. HALF-ANGLE FORMULAS

```
  +=============================================================+
  |         / A \       /  (s-b)(s-c)  \                        |
  |     sin| --- | = sqrt| ------------ |                       |
  |         \ 2 /       \      b c     /                        |
  |                                                             |
  |         / A \       /   s (s-a)    \                        |
  |     cos| --- | = sqrt| ------------ |                       |
  |         \ 2 /       \      b c     /                        |
  |                                                             |
  |         / A \       /  (s-b)(s-c)  \                        |
  |     tan| --- | = sqrt| ------------ |                       |
  |         \ 2 /       \   s (s-a)    /                        |
  |                                                             |
  |         / A \       /   s (s-a)    \                        |
  |     cot| --- | = sqrt| ------------ |                       |
  |         \ 2 /       \  (s-b)(s-c)  /                        |
  +=============================================================+

  For B:  sin(B/2) = sqrt((s-c)(s-a)/(ca))   cos(B/2) = sqrt(s(s-b)/(ca))
  For C:  sin(C/2) = sqrt((s-a)(s-b)/(ab))   cos(C/2) = sqrt(s(s-c)/(ab))
```

**Memory rule:**

```
     sin(A/2)  ->  the two brackets that DO NOT contain a  ->  (s-b)(s-c)
     cos(A/2)  ->  s and its OWN bracket                   ->  s(s-a)
     bottom    ->  always the two sides TOUCHING angle A   ->  bc
```

Two more that come straight from these:

```
  +-------------------------------------------------------------+
  |   sin A = 2 sin(A/2) cos(A/2) = 2 sqrt(s(s-a)(s-b)(s-c))/bc |
  |         = 2 delta / (bc)                                    |
  |                                                             |
  |   cot(A/2) + cot(B/2) + cot(C/2)  =  s^2 / delta            |
  |   tan(A/2) tan(B/2) + tan(B/2) tan(C/2)                     |
  |                     + tan(C/2) tan(A/2)  =  1               |
  +-------------------------------------------------------------+
```

| Formula | When to use |
|---------|-------------|
| `sin(A/2) = sqrt((s-b)(s-c)/bc)` | "find sin(A/2) given the 3 sides" — 2 marks |
| `tan(A/2) = sqrt((s-b)(s-c)/(s(s-a)))` | to solve a triangle from 3 sides without a cos table |
| `sinA = 2 delta/(bc)` | to jump between area and angle in one step |
| `cot(A/2)+cot(B/2)+cot(C/2) = s^2/delta` | a standard 4- or 7-mark proof |

---

# 7. AREA OF THE TRIANGLE (delta)

```
  +=============================================================+
  |                                                             |
  |   delta = (1/2) ab sinC = (1/2) bc sinA = (1/2) ca sinB     |
  |                                                             |
  |   delta = sqrt( s(s-a)(s-b)(s-c) )              [HERON]     |
  |                                                             |
  |   delta = abc / (4R)                                        |
  |                                                             |
  |   delta = r s  =  r1 (s-a)  =  r2 (s-b)  =  r3 (s-c)       |
  |                                                             |
  |             a^2 sin B sin C                                 |
  |   delta = ------------------                                |
  |                2 sin A                                      |
  |                                                             |
  |   delta = 2 R^2 sinA sinB sinC                              |
  |                                                             |
  |   delta^2 = s(s-a)(s-b)(s-c)                                |
  |   (s-a)(s-b)(s-c) = delta^2 / s                             |
  |                                                             |
  +=============================================================+
```

| Formula | When to use |
|---------|-------------|
| `(1/2) ab sinC` | two sides and the included angle |
| Heron `sqrt(s(s-a)(s-b)(s-c))` | all three sides given |
| `abc/(4R)` | the circumradius is involved |
| `r s` | the inradius is involved |
| `a^2 sinB sinC/(2 sinA)` | ONE side and all three angles given |
| `2R^2 sinA sinB sinC` | pure-angle proofs |
| `(s-a)(s-b)(s-c) = delta^2/s` | inside almost every 7-mark identity proof |

---

# 8. CIRCUMRADIUS R

```
  +=============================================================+
  |            abc            a           b           c         |
  |     R = ---------  =  --------- = --------- = ---------     |
  |          4 delta       2 sin A     2 sin B     2 sin C      |
  |                                                             |
  |     abc = 4 R delta                                         |
  |                                                             |
  |     Right-angled triangle:  R = (hypotenuse)/2              |
  |     Equilateral of side a:  R = a/sqrt(3)                   |
  |                                                             |
  |     EULER'S INEQUALITY:  R >= 2r                            |
  |     (equality only for an equilateral triangle)             |
  +=============================================================+
```

---

# 9. INRADIUS r AND EX-RADII r1, r2, r3

```
  +=============================================================+
  |                                                             |
  |   r  = delta / s                                            |
  |   r  = (s-a) tan(A/2) = (s-b) tan(B/2) = (s-c) tan(C/2)     |
  |   r  = 4R sin(A/2) sin(B/2) sin(C/2)                        |
  |   r  = a sin(B/2) sin(C/2) / cos(A/2)                       |
  |                                                             |
  |   r1 = delta / (s - a)      r2 = delta/(s-b)  r3 = delta/(s-c)
  |   r1 = s tan(A/2)           r2 = s tan(B/2)   r3 = s tan(C/2)
  |   r1 = 4R sin(A/2) cos(B/2) cos(C/2)                        |
  |   r2 = 4R cos(A/2) sin(B/2) cos(C/2)                        |
  |   r3 = 4R cos(A/2) cos(B/2) sin(C/2)                        |
  |   r1 = a cos(B/2) cos(C/2) / cos(A/2)                       |
  |                                                             |
  |   Right angle at C:   r = s - c                             |
  |   Equilateral side a: r = a/(2 sqrt3) ,  R = a/sqrt3 = 2r   |
  +=============================================================+
```

**The subscript rule:** the number on `r` matches the letter that is SUBTRACTED.

```
        r1  <-->  (s - a)  <-->  angle A  <-->  tan(A/2)
        r2  <-->  (s - b)  <-->  angle B  <-->  tan(B/2)
        r3  <-->  (s - c)  <-->  angle C  <-->  tan(C/2)
```

| Formula | When to use |
|---------|-------------|
| `r = delta/s` | the definition — first line of nearly every proof |
| `r1 = delta/(s-a)` | same — write all four together as line 1 |
| `r = (s-a) tan(A/2)`, `r1 = s tan(A/2)` | when the question mixes radii with half-angles |
| `r = 4R sin(A/2)sin(B/2)sin(C/2)` | when R appears on the other side |
| `r1 = 4R sin(A/2)cos(B/2)cos(C/2)` | note: ONE sin, TWO cos — the sin matches the subscript |
| `r = s - c` (right angle at C) | 2-mark shortcut |

---

# 10. THE STANDARD IDENTITIES (the 7-mark bank)

```
  +=============================================================+
  |                                                             |
  |   r1 + r2 + r3 - r  =  4R                                   |
  |                                                             |
  |   1/r  =  1/r1 + 1/r2 + 1/r3                                |
  |                                                             |
  |   r . r1 . r2 . r3  =  delta^2                              |
  |                                                             |
  |   r1 r2 + r2 r3 + r3 r1  =  s^2                             |
  |                                                             |
  |   (r1 - r)(r2 - r)(r3 - r)  =  4 R r^2                      |
  |                                                             |
  |   r + r1 + r2 - r3  =  4R cos C                             |
  |   r + r2 + r3 - r1  =  4R cos A                             |
  |   r + r3 + r1 - r2  =  4R cos B                             |
  |                                                             |
  |   cos A + cos B + cos C  =  1 + r/R                         |
  |   sin A + sin B + sin C  =  s / R                           |
  |                                                             |
  |   a^2 cotA + b^2 cotB + c^2 cotC  =  4 delta                |
  |   cotA + cotB + cotC  =  (a^2 + b^2 + c^2)/(4 delta)        |
  |                                                             |
  |   a^3 cos(B-C) + b^3 cos(C-A) + c^3 cos(A-B)  =  3 a b c    |
  |                                                             |
  |   cos^2(A/2)/a + cos^2(B/2)/b + cos^2(C/2)/c = s^2/(abc)    |
  |                                                             |
  |   sin^2A + sin^2B + sin^2C = 2 + 2 cosA cosB cosC           |
  |   (so  a^2+b^2+c^2 = 8R^2  <=>  the triangle is right-angled)
  |                                                             |
  +=============================================================+
```

| Identity | When to use |
|----------|-------------|
| `r1+r2+r3-r = 4R` | THE most-asked 7-mark question. Learn the proof word for word |
| `1/r = 1/r1+1/r2+1/r3` | 4-mark version of the same idea |
| `r r1 r2 r3 = delta^2` | also gives `delta = sqrt(r r1 r2 r3)` for "find the sides" questions |
| `r1r2 + r2r3 + r3r1 = s^2` | gives `s = sqrt(r1r2 + r2r3 + r3r1)` |
| `cosA+cosB+cosC = 1 + r/R` | anything mixing cosines with r and R |
| `a^2+b^2+c^2 = 8R^2` | "prove the triangle is right-angled" |

**The reverse trick (a guaranteed exam question):** if you are told r, r1, r2, r3, recover
the triangle:

```
  delta = sqrt( r . r1 . r2 . r3 )
  s     = delta / r
  s - a = delta / r1   ->  a = s - delta/r1
  s - b = delta / r2   ->  b = s - delta/r2
  s - c = delta / r3   ->  c = s - delta/r3
```

---

# 11. DISTANCES BETWEEN CENTRES, MEDIANS, BISECTORS

```
  +=============================================================+
  |   OI^2  = R^2 - 2 R r          [Euler]                      |
  |   OI1^2 = R^2 + 2 R r1                                      |
  |   OI2^2 = R^2 + 2 R r2                                      |
  |   OI3^2 = R^2 + 2 R r3                                      |
  |                                                             |
  |   AI  = r / sin(A/2)  = 4R sin(B/2) sin(C/2)                |
  |   AI1 = r1 / sin(A/2) = 4R cos(B/2) cos(C/2)                |
  |   I I1 = a / cos(A/2)                                       |
  |   I1 I2 = 4R cos(C/2)                                       |
  |                                                             |
  |   Distance from O to side a          = R cos A              |
  |   Distance from orthocentre H to A   = 2R cos A             |
  |                                                             |
  |   Tangent length from A to incircle  = s - a                |
  |   Tangent length from A to excircle opposite A = s          |
  +=============================================================+
```

```
  +=============================================================+
  |   MEDIANS                                                   |
  |                                                             |
  |   m(a) = (1/2) sqrt( 2b^2 + 2c^2 - a^2 )                    |
  |   m(b) = (1/2) sqrt( 2c^2 + 2a^2 - b^2 )                    |
  |   m(c) = (1/2) sqrt( 2a^2 + 2b^2 - c^2 )                    |
  |                                                             |
  |   m(a)^2 + m(b)^2 + m(c)^2 = (3/4)(a^2 + b^2 + c^2)         |
  |                                                             |
  |   The centroid divides each median in the ratio 2 : 1       |
  +=============================================================+

  +=============================================================+
  |   INTERNAL ANGLE BISECTORS                                  |
  |                                                             |
  |   t(a) = 2 b c cos(A/2) / (b + c)                           |
  |   t(b) = 2 c a cos(B/2) / (c + a)                           |
  |   t(c) = 2 a b cos(C/2) / (a + b)                           |
  |                                                             |
  |   The bisector from A cuts BC in the ratio  c : b           |
  +=============================================================+

  +=============================================================+
  |   ALTITUDES                                                 |
  |                                                             |
  |   h(a) = 2 delta / a     h(b) = 2 delta / b                 |
  |   h(c) = 2 delta / c                                        |
  |                                                             |
  |   1/h(a) + 1/h(b) + 1/h(c) = 1/r                            |
  +=============================================================+
```

---

# 12. THE FOUR CASES OF SOLVING A TRIANGLE

| Given | Case | Use this | Answers |
|-------|------|----------|---------|
| a, b, c | SSS | cosine rule (or `tan(A/2)`) | exactly 1 |
| b, c, A | SAS | cosine rule for `a`, then Napier | exactly 1 |
| A, B, a | AAS/ASA | `C = 180-A-B`, then sine rule | exactly 1 |
| a, b, A | SSA | sine rule for `sin B` | 0, 1 or 2 |

**The SSA count table:**

```
  +---------------------------------------+-----------------------------+
  |  b sinA > a       (sin B > 1)         |  NO triangle                |
  |  b sinA = a       (sin B = 1)         |  ONE, right-angled at B     |
  |  b sinA < a  and  a < b               |  TWO triangles              |
  |  a >= b                               |  ONE triangle               |
  +---------------------------------------+-----------------------------+
```

---

# 13. SPECIAL TRIANGLES — memorise these values

| Triangle | s | delta | r | R | r1, r2, r3 |
|----------|---|-------|---|---|------------|
| 3, 4, 5 | 6 | 6 | 1 | 2.5 | 2, 3, 6 |
| 5, 12, 13 | 15 | 30 | 2 | 6.5 | 3, 10, 15 |
| 13, 14, 15 | 21 | 84 | 4 | 8.125 | 10.5, 12, 14 |
| Equilateral, side a | 3a/2 | (sqrt3/4)a^2 | a/(2 sqrt3) | a/sqrt3 | 3r each, i.e. (sqrt3/2)a |

```
  Use ANY of these to test a formula you half-remember.
  Example: does r1 + r2 + r3 - r = 4R hold for 3,4,5?
           2 + 3 + 6 - 1 = 10  and  4R = 4(2.5) = 10.    YES.
```

---

# THE 12 FORMULAE TO WRITE ON YOUR PALM

```
  +===================================================================+
  |                                                                   |
  |   1.   a/sinA = b/sinB = c/sinC = 2R                              |
  |                                                                   |
  |   2.   cos A = (b^2 + c^2 - a^2)/(2bc)                            |
  |                                                                   |
  |   3.   a = b cosC + c cosB                                        |
  |                                                                   |
  |   4.   tan((A-B)/2) = ((a-b)/(a+b)) cot(C/2)                      |
  |                                                                   |
  |   5.   sin(A/2) = sqrt( (s-b)(s-c)/(bc) )                         |
  |                                                                   |
  |   6.   cos(A/2) = sqrt( s(s-a)/(bc) )                             |
  |                                                                   |
  |   7.   delta = sqrt( s(s-a)(s-b)(s-c) )                           |
  |                                                                   |
  |   8.   delta = (1/2) ab sinC = abc/(4R) = r s                     |
  |                                                                   |
  |   9.   R = abc/(4 delta)                                          |
  |                                                                   |
  |  10.   r = delta/s ,  r1 = delta/(s-a) ,  r2 = delta/(s-b) ,      |
  |                       r3 = delta/(s-c)                            |
  |                                                                   |
  |  11.   r1 + r2 + r3 - r = 4R                                      |
  |                                                                   |
  |  12.   r . r1 . r2 . r3 = delta^2                                 |
  |                                                                   |
  +===================================================================+

  If you can write those twelve lines from memory, you can attempt every
  question this chapter has ever asked.
```
