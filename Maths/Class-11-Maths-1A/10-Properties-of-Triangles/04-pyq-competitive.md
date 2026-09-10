# Properties of Triangles — Competitive Exam Questions

**Maths 1A · Chapter 10** — for AP EAPCET, TG EAPCET and JEE Main

```
  +---------------+--------+---------+-----------+--------+----------------+
  |  EXAM         |  MATHS | PHYSICS | CHEMISTRY | TOTAL  |  MARKING       |
  +---------------+--------+---------+-----------+--------+----------------+
  |  AP EAPCET    |   80   |   40    |    40     |  160   |  +1, NO minus  |
  |  TG EAPCET    |   80   |   40    |    40     |  160   |  +1, NO minus  |
  |  JEE Main     |   25   |   25    |    25     |  300   |  +4 , -1       |
  +---------------+--------+---------+-----------+--------+----------------+

  QUESTIONS FROM THIS CHAPTER (typical):

     AP EAPCET   ->  2 to 3 questions  (bundled with Trigonometry)
     TG EAPCET   ->  2 to 3 questions
     JEE Main    ->  0 to 1 question   (usually merged into a trig problem)
```

> **EAPCET has NO negative marking.** Never leave a blank. If you are stuck, eliminate
> and guess.
> **JEE Main has -1.** Skip anything you genuinely cannot start within 30 seconds.

Questions below are grouped by **PATTERN**, not by year, because the same shapes
recycle endlessly.

---

# PATTERN 1 — SINE RULE AND RATIOS OF SIDES

### Q1
In triangle ABC, a = 5 and A = 30 degrees. Then R =

(a) 2.5  (b) 5  (c) 10  (d) 7.5

**ANSWER: (b) 5**
```
  a/sinA = 2R   ->   5/(1/2) = 2R   ->   10 = 2R   ->   R = 5
```

---

### Q2
If sin A : sin B : sin C = 4 : 5 : 6, then cos A =

(a) 3/4  (b) 9/16  (c) 1/8  (d) 2/3

**ANSWER: (a) 3/4**
```
  Sine rule -> a : b : c = 4 : 5 : 6.  Take a=4, b=5, c=6.
  cos A = (25 + 36 - 16)/(2 x 5 x 6) = 45/60 = 3/4
```

> **SHORTCUT:** "sinA : sinB : sinC" ALWAYS means "a : b : c". Swap it in your head
> instantly and treat the numbers as side lengths.

---

### Q3
If a : b : c = 4 : 5 : 6, then cos A : cos B : cos C =

(a) 12 : 9 : 2  (b) 2 : 9 : 12  (c) 6 : 5 : 4  (d) 1 : 1 : 1

**ANSWER: (a) 12 : 9 : 2**
```
  cos A = (25+36-16)/60 = 45/60 = 3/4
  cos B = (16+36-25)/48 = 27/48 = 9/16
  cos C = (16+25-36)/40 = 5/40  = 1/8

  3/4 : 9/16 : 1/8    (multiply everything by 16)
  = 12 : 9 : 2
```

---

### Q4
If the angles of a triangle are in the ratio 1 : 2 : 3, the sides are in the ratio

(a) 1 : 2 : 3  (b) 1 : sqrt(3) : 2  (c) 2 : sqrt(3) : 1  (d) 1 : sqrt(2) : sqrt(3)

**ANSWER: (b) 1 : sqrt(3) : 2**
```
  Angles are 30, 60, 90.
  a : b : c = sin30 : sin60 : sin90 = 1/2 : sqrt3/2 : 1 = 1 : sqrt3 : 2
```

> **SHORTCUT:** Angles in ratio 1:2:3 is ALWAYS the 30-60-90 triangle.

---

### Q5
In triangle ABC, sin A + sin B + sin C =

(a) s/R  (b) 2s/R  (c) s/(2R)  (d) R/s

**ANSWER: (a) s/R**
```
  sinA + sinB + sinC = (a + b + c)/(2R) = 2s/(2R) = s/R
```

---

# PATTERN 2 — COSINE RULE, FINDING AN ANGLE OR THE THIRD SIDE

### Q6
The sides of a triangle are 3, 5, 7. The largest angle is

(a) 90  (b) 120  (c) 135  (d) 150   (degrees)

**ANSWER: (b) 120**
```
  The largest angle faces the largest side (7).
  cos C = (9 + 25 - 49)/(2 x 3 x 5) = -15/30 = -1/2   ->   C = 120 degrees
```

> **SHORTCUT:** cos = -1/2 means 120. cos = -1/sqrt2 means 135. Learn those two by sight.

---

### Q7
In triangle ABC, a = 2, b = 3, C = 60 degrees. Then c =

(a) sqrt(7)  (b) sqrt(19)  (c) 5  (d) sqrt(5)

**ANSWER: (a) sqrt(7)**
```
  c^2 = 4 + 9 - 2(2)(3)(1/2) = 13 - 6 = 7   ->   c = sqrt(7)
```

---

### Q8
If in triangle ABC, `b^2 + c^2 - a^2 = bc`, then A =

(a) 30  (b) 45  (c) 60  (d) 90   (degrees)

**ANSWER: (c) 60**
```
  cos A = (b^2 + c^2 - a^2)/(2bc) = bc/(2bc) = 1/2   ->   A = 60 degrees
```

> **SHORTCUT:** The numerator of cos A is exactly `b^2 + c^2 - a^2`. If the question
> hands you that expression, you are one division away from the answer.

---

### Q9
In triangle ABC, if a = 2, b = 3, c = 4, then cos A =

(a) 7/8  (b) 11/16  (c) 1/4  (d) -1/4

**ANSWER: (a) 7/8**
```
  cos A = (9 + 16 - 4)/(2 x 3 x 4) = 21/24 = 7/8
```

---

### Q10
The sides of a triangle are in AP and the greatest angle is twice the smallest.
The sides are in the ratio

(a) 3 : 4 : 5  (b) 4 : 5 : 6  (c) 5 : 6 : 7  (d) 2 : 3 : 4

**ANSWER: (b) 4 : 5 : 6**
```
  Test option (b): a = 4, b = 5, c = 6.  Smallest angle A, largest angle C.

  cos A = (25 + 36 - 16)/60 = 45/60 = 3/4
  cos C = (16 + 25 - 36)/40 = 5/40  = 1/8

  Is C = 2A ?   cos 2A = 2 cos^2 A - 1 = 2(9/16) - 1 = 18/16 - 16/16 = 2/16 = 1/8
  Yes, cos 2A = cos C.                                       Option (b) is correct.
```

> **SHORTCUT:** In an MCQ with ratios, SUBSTITUTE THE OPTIONS. It is far faster than
> setting up `a = x-d, b = x, c = x+d` and solving.

---

# PATTERN 3 — HALF-ANGLE FORMULAS

### Q11
In triangle ABC, a = 5, b = 6, c = 7. Then tan(A/2) =

(a) 1/sqrt(6)  (b) sqrt(6)  (c) 1/6  (d) 6

**ANSWER: (a) 1/sqrt(6)**
```
  s = 9 ,  s-a = 4 ,  s-b = 3 ,  s-c = 2

  tan(A/2) = sqrt( (s-b)(s-c)/(s(s-a)) ) = sqrt( 3 x 2/(9 x 4) ) = sqrt(6/36)
           = 1/sqrt(6)
```

---

### Q12
In triangle ABC with a = 13, b = 14, c = 15, sin(A/2) =

(a) 1/sqrt(5)  (b) 2/sqrt(5)  (c) 1/5  (d) sqrt(5)/2

**ANSWER: (a) 1/sqrt(5)**
```
  s = 21 ,  s-b = 7 ,  s-c = 6
  sin(A/2) = sqrt( 7 x 6 /(14 x 15) ) = sqrt(42/210) = sqrt(1/5) = 1/sqrt(5)
```

---

### Q13
In triangle ABC, `tan(A/2) tan(B/2)` equals

(a) (s-c)/s  (b) s/(s-c)  (c) (s-a)/(s-b)  (d) 1

**ANSWER: (a) (s-c)/s**
```
  tan(A/2) = delta/(s(s-a))  and  tan(B/2) = delta/(s(s-b))

  Product = delta^2 / [ s^2 (s-a)(s-b) ]
          = s(s-a)(s-b)(s-c) / [ s^2 (s-a)(s-b) ]
          = (s - c)/s
```

---

### Q14
If `tan(A/2) = 5/6` and `tan(C/2) = 2/5` in triangle ABC, then

(a) a, b, c are in AP  (b) a, b, c are in GP  (c) b = a + c  (d) a = b = c

**ANSWER: (a) a, b, c are in AP**
```
  tan(A/2) tan(C/2) = (s - b)/s          [same identity as Q13, with b in the middle]

  (5/6)(2/5) = 10/30 = 1/3

  So (s - b)/s = 1/3   ->   3s - 3b = s   ->   2s = 3b   ->   a + b + c = 3b
                       ->   a + c = 2b     ->   AP
```

---

### Q15
In triangle ABC, `cot(B/2) cot(C/2)` equals

(a) s/(s-a)  (b) (s-a)/s  (c) s/(s-b)  (d) (s-b)(s-c)/s^2

**ANSWER: (a) s/(s-a)**
```
  cot(B/2) = s(s-b)/delta ,  cot(C/2) = s(s-c)/delta

  Product = s^2 (s-b)(s-c)/delta^2 = s^2(s-b)(s-c)/[s(s-a)(s-b)(s-c)] = s/(s-a)
```

---

### Q16
If in triangle ABC, `b + c = 3a`, then `cot(B/2) cot(C/2)` =

(a) 1  (b) 2  (c) 3  (d) 4

**ANSWER: (b) 2**
```
  cot(B/2) cot(C/2) = s/(s-a)

  b + c = 3a  ->  2s - a = 3a  ->  2s = 4a  ->  s = 2a
  s - a = 2a - a = a

  s/(s-a) = 2a/a = 2
```

---

### Q17
If `(s-a)(s-b) = s(s-c)` in triangle ABC, then C =

(a) 30  (b) 45  (c) 60  (d) 90   (degrees)

**ANSWER: (d) 90**
```
  tan^2(C/2) = (s-a)(s-b)/(s(s-c)) = 1

  tan(C/2) = 1   ->   C/2 = 45   ->   C = 90 degrees
```

---

# PATTERN 4 — AREA OF THE TRIANGLE

### Q18
The area of the triangle with sides 13, 14, 15 is

(a) 84  (b) 42  (c) 168  (d) 7056

**ANSWER: (a) 84**
```
  s = 21 ,  delta = sqrt(21 x 8 x 7 x 6) = sqrt(7056) = 84
```

> **TRAP:** 7056 is delta SQUARED. If 7056 is an option, it is there to catch people
> who forget the square root.

---

### Q19
In triangle ABC, a = 6, b = 8 and C = 30 degrees. The area is

(a) 12  (b) 24  (c) 6  (d) 12 sqrt(3)

**ANSWER: (a) 12**
```
  delta = (1/2) ab sinC = (1/2)(6)(8)(1/2) = 12
```

---

### Q20
The area of an equilateral triangle whose circumradius is R is

(a) (3 sqrt3 /4) R^2  (b) (sqrt3/4) R^2  (c) 3 R^2  (d) (sqrt3/2) R^2

**ANSWER: (a) (3 sqrt3 / 4) R^2**
```
  For an equilateral triangle of side a:  R = a/sqrt(3)  ->  a = R sqrt(3)

  delta = (sqrt3/4) a^2 = (sqrt3/4)(3 R^2) = (3 sqrt3/4) R^2
```

---

### Q21
In triangle ABC, `a^2 cot A + b^2 cot B + c^2 cot C` equals

(a) delta  (b) 2 delta  (c) 4 delta  (d) delta/2

**ANSWER: (c) 4 delta**
```
  a^2 cotA = 4R^2 sinA cosA = 2R^2 sin2A
  Sum = 2R^2 (sin2A + sin2B + sin2C) = 8R^2 sinA sinB sinC = 4 delta
  (since delta = 2R^2 sinA sinB sinC)

  QUICK CHECK with 3,4,5: 9(4/3) + 16(3/4) + 25(0) = 24 = 4 x 6.   Correct.
```

---

# PATTERN 5 — CIRCUMRADIUS R AND INRADIUS r

### Q22
For the triangle with sides 3, 4, 5, the values of R and r are

(a) 2.5 and 1  (b) 2 and 1  (c) 2.5 and 2  (d) 5 and 1

**ANSWER: (a) 2.5 and 1**
```
  s = 6 , delta = 6
  R = abc/(4 delta) = 60/24 = 2.5      (or: hypotenuse/2 = 5/2)
  r = delta/s = 6/6 = 1                (or: r = s - c = 6 - 5 = 1)
```

> **SHORTCUT for right triangles:** R = hypotenuse/2 and r = s - hypotenuse.
> No Heron needed.

---

### Q23
In an equilateral triangle, r : R : r1 =

(a) 1 : 2 : 3  (b) 1 : 3 : 2  (c) 2 : 1 : 3  (d) 1 : 1 : 1

**ANSWER: (a) 1 : 2 : 3**
```
  Side a:   s = 3a/2 ,  delta = (sqrt3/4)a^2 ,  s - a = a/2

  r  = delta/s     = (sqrt3/4 a^2)/(3a/2) = (sqrt3/6) a
  R  = a/sqrt3     = (sqrt3/3) a
  r1 = delta/(s-a) = (sqrt3/4 a^2)/(a/2)  = (sqrt3/2) a

  Ratio = 1/6 : 1/3 : 1/2 = 1 : 2 : 3
```

---

### Q24
If R = 2r in a triangle, then the triangle is

(a) right-angled  (b) isosceles  (c) equilateral  (d) obtuse-angled

**ANSWER: (c) equilateral**
```
  Euler: OI^2 = R^2 - 2Rr.  If R = 2r then OI^2 = R^2 - R^2 = 0,
  so the circumcentre and incentre coincide.  That happens only for an
  equilateral triangle.
```

---

### Q25
In triangle ABC, `cos A + cos B + cos C` =

(a) 1 + r/R  (b) 1 - r/R  (c) r/R  (d) 1 + R/r

**ANSWER: (a) 1 + r/R**
```
  cosA + cosB + cosC = 1 + 4 sin(A/2)sin(B/2)sin(C/2)  and  r = 4R sin(A/2)sin(B/2)sin(C/2)

  QUICK CHECK with 3,4,5: cosA = 4/5, cosB = 3/5, cosC = 0. Sum = 1.4
                          1 + r/R = 1 + 1/2.5 = 1.4.       Correct.
```

---

### Q26
If in triangle ABC, `a^2 + b^2 + c^2 = 8 R^2`, then the triangle is

(a) equilateral  (b) right-angled  (c) isosceles  (d) obtuse-angled

**ANSWER: (b) right-angled**
```
  4R^2(sin^2A + sin^2B + sin^2C) = 8R^2  ->  sin^2A + sin^2B + sin^2C = 2
  and  sin^2A + sin^2B + sin^2C = 2 + 2 cosA cosB cosC
  so  cosA cosB cosC = 0  ->  one angle is 90 degrees.

  QUICK CHECK: 3,4,5 gives 9+16+25 = 50 and 8R^2 = 8(6.25) = 50.   Correct.
```

---

# PATTERN 6 — THE EX-RADII r1, r2, r3 AND THEIR IDENTITIES

### Q27
`r1 + r2 + r3 - r` equals

(a) 2R  (b) 4R  (c) R  (d) 4r

**ANSWER: (b) 4R**
```
  Standard identity.
  QUICK CHECK with 3,4,5: r1 = 6/3 = 2, r2 = 6/2 = 3, r3 = 6/1 = 6, r = 1
                          2 + 3 + 6 - 1 = 10 ,  4R = 4(2.5) = 10.   Correct.
```

---

### Q28
`r1 r2 + r2 r3 + r3 r1` equals

(a) s  (b) s^2  (c) delta^2  (d) 4R

**ANSWER: (b) s^2**
```
  QUICK CHECK with 3,4,5: 2(3) + 3(6) + 6(2) = 6 + 18 + 12 = 36 = 6^2 = s^2.
```

---

### Q29
`r . r1 . r2 . r3` equals

(a) delta  (b) delta^2  (c) s^2  (d) 4R r

**ANSWER: (b) delta^2**
```
  QUICK CHECK with 3,4,5: 1 x 2 x 3 x 6 = 36 = 6^2 = delta^2.
```

---

### Q30
If r1 = 8, r2 = 12, r3 = 24, then r =

(a) 2  (b) 4  (c) 6  (d) 8

**ANSWER: (b) 4**
```
  1/r = 1/8 + 1/12 + 1/24 = 3/24 + 2/24 + 1/24 = 6/24 = 1/4   ->   r = 4
```

---

### Q31
With r1 = 8, r2 = 12, r3 = 24 (so r = 4), the sides a, b, c are

(a) 12, 16, 20  (b) 6, 8, 10  (c) 3, 4, 5  (d) 8, 15, 17

**ANSWER: (a) 12, 16, 20**
```
  delta = sqrt(r r1 r2 r3) = sqrt(4 x 8 x 12 x 24) = sqrt(9216) = 96
  s     = delta/r = 96/4 = 24
  s - a = delta/r1 = 96/8  = 12   ->   a = 12
  s - b = delta/r2 = 96/12 = 8    ->   b = 16
  s - c = delta/r3 = 96/24 = 4    ->   c = 20

  CHECK: 12 + 16 + 20 = 48 = 2s.  And 12^2 + 16^2 = 400 = 20^2, a right triangle
  with area (1/2)(12)(16) = 96.                                     Correct.
```

> **SHORTCUT:** Given the three ex-radii, the four-step recovery is always:
> `r` from the reciprocal sum, `delta = sqrt(r r1 r2 r3)`, `s = delta/r`,
> then `a = s - delta/r1` and so on.

---

### Q32
`(r1 - r)(r2 - r)(r3 - r)` equals

(a) 4 R r^2  (b) 4 R^2 r  (c) R r^2  (d) delta^2

**ANSWER: (a) 4 R r^2**
```
  QUICK CHECK with 3,4,5: (2-1)(3-1)(6-1) = 1 x 2 x 5 = 10
                          4 R r^2 = 4(2.5)(1) = 10.        Correct.
```

---

### Q33
In a triangle right-angled at C, `r1 + r2` equals

(a) a  (b) b  (c) c  (d) 2c

**ANSWER: (c) c**
```
  r1 + r2 = 4R cos^2(C/2).  With C = 90:  cos^2(45) = 1/2,
  so r1 + r2 = 4R(1/2) = 2R = c   (hypotenuse = diameter).

  CHECK with 3,4,5: r1 = 2, r2 = 3, sum = 5 = c.           Correct.
```

---

### Q34
`r1 r2 r3` equals

(a) s delta  (b) s^2 delta  (c) delta^2  (d) r s^2

**ANSWER: (a) s delta   [ which also equals (d) r s^2 ]**
```
  r1 r2 r3 = delta^3/[(s-a)(s-b)(s-c)] = delta^3/(delta^2/s) = s delta

  And since delta = r s, this is also r s^2. Both forms appear in option lists —
  read the options carefully.

  CHECK with 13,14,15: 10.5 x 12 x 14 = 1764 ,  s delta = 21 x 84 = 1764.
```

---

# PATTERN 7 — PROJECTION RULE IDENTITIES

### Q35
`b cos C + c cos B` equals

(a) a  (b) b  (c) c  (d) 2s

**ANSWER: (a) a**

> **SHORTCUT:** Recognise the shape `(side)(cos) + (side)(cos)`. If the two cosines are
> the two angles NOT matching the two sides, the answer is the third side.

---

### Q36
`(b + c) cos A + (c + a) cos B + (a + b) cos C` equals

(a) s  (b) 2s  (c) 3s  (d) 4s

**ANSWER: (b) 2s**
```
  Regroup into projection pairs: = a + b + c = 2s
```

---

### Q37
`a (b cos C - c cos B)` equals

(a) b^2 - c^2  (b) c^2 - b^2  (c) a^2 - b^2  (d) 0

**ANSWER: (a) b^2 - c^2**

---

### Q38
`a cos A + b cos B + c cos C` equals

(a) 2 delta / R  (b) delta/R  (c) 4 delta / R  (d) s/R

**ANSWER: (a) 2 delta / R**
```
  a cosA = R sin2A , so the sum = R(sin2A + sin2B + sin2C) = 4R sinA sinB sinC.
  And delta = 2R^2 sinA sinB sinC, so 4R sinA sinB sinC = 2 delta/R.

  CHECK with 3,4,5: 3(4/5) + 4(3/5) + 5(0) = 2.4 + 2.4 = 4.8
                    2 delta/R = 12/2.5 = 4.8.                  Correct.
```

---

# PATTERN 8 — SOLVING TRIANGLES AND THE AMBIGUOUS CASE

### Q39
If a = 6, b = 8 and A = 30 degrees, the number of triangles possible is

(a) 0  (b) 1  (c) 2  (d) infinitely many

**ANSWER: (c) 2**
```
  sin B = b sinA/a = 8(0.5)/6 = 2/3 < 1 , and a = 6 < b = 8.
  So B can be acute (41.81) OR obtuse (138.19). Both give a valid triangle.
```

---

### Q40
If a = 4, b = 10 and A = 30 degrees, the number of triangles possible is

(a) 0  (b) 1  (c) 2  (d) 3

**ANSWER: (a) 0**
```
  sin B = 10(0.5)/4 = 1.25 > 1.  Impossible.
```

> **SHORTCUT for SSA:** compute `b sinA` and compare it with `a`.
> `b sinA > a` -> none. `= a` -> one (right angle). `< a` and `a < b` -> two.
> `a >= b` -> one.

---

### Q41
In triangle ABC, a = 5, b = 4 and cos(A - B) = 31/32. Then c =

(a) 6  (b) 5  (c) 7  (d) 8

**ANSWER: (a) 6**
```
  tan^2((A-B)/2) = (1 - cos(A-B))/(1 + cos(A-B)) = (1/32)/(63/32) = 1/63

  Napier:  tan((A-B)/2) = ((a-b)/(a+b)) cot(C/2) = (1/9) cot(C/2)

     1/sqrt(63) = (1/9) cot(C/2)   ->   cot(C/2) = 9/sqrt(63) = 3/sqrt(7)
                                        tan(C/2) = sqrt(7)/3

  cos C = (1 - tan^2(C/2))/(1 + tan^2(C/2)) = (1 - 7/9)/(1 + 7/9) = (2/9)/(16/9) = 1/8

  c^2 = a^2 + b^2 - 2ab cosC = 25 + 16 - 2(5)(4)(1/8) = 41 - 5 = 36
  c = 6
```

---

### Q42
`(a + b + c)(tan(A/2) + tan(B/2))` equals

(a) 2c cot(C/2)  (b) c cot(C/2)  (c) 2c tan(C/2)  (d) 2s cot(C/2)

**ANSWER: (a) 2c cot(C/2)**
```
  tan(A/2) = delta/(s(s-a)) , tan(B/2) = delta/(s(s-b))

  2s [ delta/(s(s-a)) + delta/(s(s-b)) ] = 2 delta [ 1/(s-a) + 1/(s-b) ]
                                         = 2 delta . c/((s-a)(s-b))
                                         = 2 (r1 + r2)
                                         = 2 c cot(C/2)

  CHECK with 13,14,15: 42 (0.5 + 0.571429) = 42(1.071429) = 45
                       2 c cot(C/2) = 2(15)(1.5) = 45.        Correct.
```

---

# PATTERN 9 — MEDIANS, ALTITUDES AND DISTANCES

### Q43
The sum of the squares of the medians of a triangle equals

(a) (3/4)(a^2+b^2+c^2)  (b) (a^2+b^2+c^2)  (c) (4/3)(a^2+b^2+c^2)  (d) (1/2)(a^2+b^2+c^2)

**ANSWER: (a) (3/4)(a^2 + b^2 + c^2)**
```
  m(a)^2 = (2b^2 + 2c^2 - a^2)/4 , and similarly for the other two.
  Adding: [ 3a^2 + 3b^2 + 3c^2 ]/4 = (3/4)(a^2 + b^2 + c^2)
```

---

### Q44
If p1, p2, p3 are the altitudes of a triangle, then `1/p1 + 1/p2 + 1/p3` =

(a) 1/r  (b) 1/R  (c) r  (d) s/delta^2

**ANSWER: (a) 1/r**
```
  p1 = 2delta/a etc., so the sum = (a+b+c)/(2delta) = s/delta = 1/r
```

---

### Q45
The distance between the circumcentre and the incentre of a triangle is

(a) sqrt(R^2 - 2Rr)  (b) sqrt(R^2 + 2Rr)  (c) R - r  (d) sqrt(R^2 - r^2)

**ANSWER: (a) sqrt(R^2 - 2Rr)**   *(Euler's formula)*

---

### Q46
In a triangle, `AI` (the distance from vertex A to the incentre) equals

(a) r / sin(A/2)  (b) r sin(A/2)  (c) R / sin(A/2)  (d) 4R sin(A/2)

**ANSWER: (a) r / sin(A/2)**
```
  Drop a perpendicular from I to side AB; its length is r and it subtends A/2 at A.
  So sin(A/2) = r/AI, giving AI = r/sin(A/2).
```

---

# PATTERN 10 — "WHAT KIND OF TRIANGLE IS IT?"

### Q47
If in triangle ABC, `cos A / a = cos B / b = cos C / c`, the triangle is

(a) right-angled  (b) isosceles  (c) equilateral  (d) obtuse

**ANSWER: (c) equilateral**
```
  By the sine rule a = 2R sinA, so the condition becomes
     cosA/sinA = cosB/sinB = cosC/sinC
     cot A = cot B = cot C
     A = B = C = 60 degrees.
```

---

### Q48
If `a cos A = b cos B` in triangle ABC, the triangle is

(a) equilateral  (b) isosceles OR right-angled  (c) always right-angled  (d) impossible

**ANSWER: (b) isosceles OR right-angled**
```
  2R sinA cosA = 2R sinB cosB   ->   sin2A = sin2B
  So  2A = 2B  (isosceles, a = b)  OR  2A = 180 - 2B, i.e. A + B = 90,
  which makes C = 90 (right-angled).

  BOTH cases are valid — that is why the correct option says "or".
```

---

### Q49
In triangle ABC, if `sin^2 A + sin^2 B = sin^2 C`, then C =

(a) 30  (b) 45  (c) 60  (d) 90   (degrees)

**ANSWER: (d) 90**
```
  Multiply by 4R^2:   a^2 + b^2 = c^2.  By the converse of Pythagoras, C = 90.
```

---

### Q50
The largest possible value of `r/R` in a triangle is

(a) 1/2  (b) 1  (c) 2  (d) 1/4

**ANSWER: (a) 1/2**
```
  Euler's inequality R >= 2r gives r/R <= 1/2, with equality only for an
  equilateral triangle.
```

---

# SPEED RULES FOR THE EXAM HALL

```
  +----------------------------------------+----------------------------------------+
  |  IF YOU SEE THIS ...                   |  DO THIS IMMEDIATELY                   |
  +----------------------------------------+----------------------------------------+
  |  sinA : sinB : sinC = p : q : t        |  Replace by a : b : c = p : q : t      |
  +----------------------------------------+----------------------------------------+
  |  Any expression with b^2 + c^2 - a^2   |  It IS 2bc cos A. Divide and finish.   |
  +----------------------------------------+----------------------------------------+
  |  Three sides given, angle wanted       |  Cosine rule. Do NOT hunt for the      |
  |                                        |  sine rule.                            |
  +----------------------------------------+----------------------------------------+
  |  Two sides + the angle BETWEEN them    |  Cosine rule for the third side, then  |
  |                                        |  the sine rule.                        |
  +----------------------------------------+----------------------------------------+
  |  Two sides + a NON-included angle      |  Compare b sinA with a.                |
  |                                        |  >a: none. =a: one. <a & a<b: TWO.     |
  +----------------------------------------+----------------------------------------+
  |  (side)(cos) + (side)(cos)             |  Projection rule -> it is the 3rd side |
  +----------------------------------------+----------------------------------------+
  |  Anything with r, r1, r2, r3           |  Write r = delta/s, r1 = delta/(s-a),  |
  |                                        |  ... then just add fractions.          |
  +----------------------------------------+----------------------------------------+
  |  Given r1, r2, r3 -> find the sides    |  1/r = sum of reciprocals ;            |
  |                                        |  delta = sqrt(r r1 r2 r3) ; s = delta/r|
  |                                        |  ; s-a = delta/r1                      |
  +----------------------------------------+----------------------------------------+
  |  A right triangle is mentioned         |  R = hypotenuse/2  and  r = s - hyp.   |
  |                                        |  Skip Heron entirely.                  |
  +----------------------------------------+----------------------------------------+
  |  "Equilateral" appears in the options  |  Test A = B = C = 60. It takes 5 sec.  |
  +----------------------------------------+----------------------------------------+
  |  R = 2r  , or  r/R = 1/2               |  EQUILATERAL. Nothing else does it.    |
  +----------------------------------------+----------------------------------------+
  |  sin^2A + sin^2B = sin^2C              |  a^2 + b^2 = c^2 -> C = 90.            |
  +----------------------------------------+----------------------------------------+
  |  a^2 + b^2 + c^2 = 8R^2                |  RIGHT-ANGLED.                         |
  +----------------------------------------+----------------------------------------+
  |  cos = -1/2 in the working             |  The angle is 120 degrees.             |
  +----------------------------------------+----------------------------------------+
  |  An option equal to 7056, 36, 1764 ... |  Check whether it is delta^2 and you   |
  |                                        |  forgot the square root.               |
  +----------------------------------------+----------------------------------------+
  |  You are stuck, and it is EAPCET       |  Test the numbers 3, 4, 5 or 13,14,15  |
  |                                        |  in every option. Eliminate. Then GUESS|
  |                                        |  — there is no negative marking.       |
  +----------------------------------------+----------------------------------------+
  |  You are stuck, and it is JEE Main     |  Give it 30 seconds, then SKIP.        |
  |                                        |  A wrong answer costs -1.              |
  +----------------------------------------+----------------------------------------+
```

```
  +-------------------------------------------------------------------------+
  |  THE TWO TEST TRIANGLES TO CARRY IN YOUR HEAD                           |
  |                                                                         |
  |    3, 4, 5      s=6,  delta=6,  r=1, R=2.5,  r1=2, r2=3, r3=6           |
  |    13, 14, 15   s=21, delta=84, r=4, R=8.125, r1=10.5, r2=12, r3=14     |
  |                                                                         |
  |  Any identity option can be tested against these in about 20 seconds.   |
  |  This turns a "prove it" question into an "arithmetic" question.        |
  +-------------------------------------------------------------------------+
```
