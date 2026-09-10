# Properties of Triangles — AP Board Previous-Year Questions

**Board:** Board of Intermediate Education, Andhra Pradesh (BIEAP)
**Paper:** Maths IA · **Chapter 10 — Properties of Triangles**

> **About the year tags:** BIEAP recycles the same questions across many sessions, and the
> same identity can appear as a 4-mark question one year and a 7-mark question the next.
> So everything below is grouped by **how often it appears**, not by a single exam year.
> Before your exam, cross-check with the official question papers at **bie.ap.gov.in**.
> Do not trust any source that claims an exact year for these — including this one.

**Where this chapter appears in the Maths IA paper (75 marks):**

```
  +-------------------------------------------------------------------------+
  |  Section A   Q1 - Q10    2 marks each    answer ALL 10        = 20 marks |
  |  Section B   Q11 - Q17   4 marks each    answer any 5 of 7    = 20 marks |
  |  Section C   Q18 - Q24   7 marks each    answer any 5 of 7    = 35 marks |
  +-------------------------------------------------------------------------+

  Properties of Triangles normally supplies:

     Section A  ->  usually the LAST question of the section (around Q10)
     Section B  ->  usually around Q16 or Q17
     Section C  ->  usually the LAST question of the paper (around Q24)

  Because Section C lets you choose 5 out of 7, the Properties of Triangles
  long answer is one of the EASIEST 7 marks on the paper. It is almost always
  "prove this identity", and the identities repeat.
```

---

# ===============================================================
# SECTION A — VERY SHORT ANSWER (2 marks)
# You must answer ALL of Section A. These are guaranteed marks.
# ===============================================================

## Topic: Sine rule

### Q A1
In triangle ABC, if a = 3, b = 4 and sin A = 3/4, find angle B.

**ANSWER:**
```
  Sine rule:   a/sinA = b/sinB

  sin B = b sinA / a = 4 x (3/4) / 3 = 3/3 = 1

  sin B = 1   ->   B = 90 degrees
```

---

### Q A2
If the angles of a triangle are in the ratio 1 : 2 : 3, find the ratio of the sides.

**ANSWER:**
```
  Angles: x + 2x + 3x = 180  ->  x = 30
  So A = 30 , B = 60 , C = 90.

  By the sine rule  a : b : c = sinA : sinB : sinC
                              = sin30 : sin60 : sin90
                              = 1/2 : sqrt(3)/2 : 1

  Multiply by 2:              = 1 : sqrt(3) : 2
```

---

### Q A3
In triangle ABC, if sin A : sin B : sin C = 3 : 5 : 7, find the largest angle.

**ANSWER:**
```
  By the sine rule the sides are in the same ratio:  a : b : c = 3 : 5 : 7
  Take a = 3k , b = 5k , c = 7k.  The largest side is c, so C is the largest angle.

  cos C = (a^2 + b^2 - c^2)/(2ab) = (9 + 25 - 49)k^2 / (2 x 15 k^2)
        = -15/30 = -1/2

  C = 120 degrees
```

---

### Q A4
In triangle ABC, if a = 6, b = 5, c = 9, find cos A.

**ANSWER:**
```
  cos A = (b^2 + c^2 - a^2)/(2bc) = (25 + 81 - 36)/(2 x 5 x 9)
        = 70/90
        = 7/9
```

---

### Q A5
If a = 4, b = 5, c = 7, find cos C and state the type of the triangle.

**ANSWER:**
```
  cos C = (a^2 + b^2 - c^2)/(2ab) = (16 + 25 - 49)/(2 x 4 x 5) = -8/40 = -1/5

  cos C is negative, so C is obtuse.  The triangle is OBTUSE-ANGLED.
```

---

## Topic: Half-angle formulas

### Q A6
If a = 4, b = 5, c = 7, find cos(C/2).

**ANSWER:**
```
  s = (4 + 5 + 7)/2 = 8

  cos(C/2) = sqrt( s(s-c)/(ab) ) = sqrt( 8 x 1 / (4 x 5) ) = sqrt(8/20)
           = sqrt(2/5)
           = 0.6325   (approximately)
```

---

### Q A7
In triangle ABC, if a = 13, b = 14, c = 15, find sin(A/2).

**ANSWER:**
```
  s = 21 ,  s - a = 8 ,  s - b = 7 ,  s - c = 6

  sin(A/2) = sqrt( (s-b)(s-c)/(bc) ) = sqrt( 7 x 6 / (14 x 15) ) = sqrt(42/210)
           = sqrt(1/5)
           = 1/sqrt(5)  = 0.4472
```

---

### Q A8
In triangle ABC, if (a + b + c)(b + c - a) = 3bc, find angle A.

**ANSWER:**
```
  a + b + c = 2s      and      b + c - a = 2s - 2a = 2(s - a)

  So  (2s)(2(s-a)) = 3bc    ->    4 s(s-a) = 3bc    ->    s(s-a)/(bc) = 3/4

  But  cos^2(A/2) = s(s-a)/(bc) = 3/4

  cos(A/2) = sqrt(3)/2   ->   A/2 = 30   ->   A = 60 degrees
```

---

## Topic: Area, R and r

### Q A9
Find the area of the triangle with sides 13, 14, 15.

**ANSWER:**
```
  s = 21 ,  s-a = 8 ,  s-b = 7 ,  s-c = 6

  delta = sqrt( 21 x 8 x 7 x 6 ) = sqrt(7056) = 84 square units
```

---

### Q A10
If the sides of a triangle are 3, 4, 5, find R and r.

**ANSWER:**
```
  s = 6 ,  delta = sqrt(6 x 3 x 2 x 1) = sqrt(36) = 6

  R = abc/(4 delta) = (3 x 4 x 5)/(4 x 6) = 60/24 = 2.5
  r = delta/s       = 6/6 = 1

  CHECK: 3-4-5 is right-angled, so R = hypotenuse/2 = 5/2 = 2.5.   Correct.
```

---

### Q A11
In triangle ABC, a = 13, b = 14, c = 15. Find r1.

**ANSWER:**
```
  s = 21 ,  delta = 84 ,  s - a = 8

  r1 = delta/(s - a) = 84/8 = 10.5   ( = 21/2 )
```

---

### Q A12
If r1 = 2, r2 = 3, r3 = 6, find r.

**ANSWER:**
```
  1/r = 1/r1 + 1/r2 + 1/r3 = 1/2 + 1/3 + 1/6

      = 3/6 + 2/6 + 1/6 = 6/6 = 1

  r = 1
```

---

### Q A13
In triangle ABC, show that r = (s - c) tan(C/2).

**ANSWER:**
```
  r = delta/s = sqrt( s(s-a)(s-b)(s-c) ) / s = sqrt( (s-a)(s-b)(s-c)/s )

    = sqrt( (s-c)^2 (s-a)(s-b) / ( s (s-c) ) )

    = (s - c) sqrt( (s-a)(s-b) / ( s(s-c) ) )

    = (s - c) tan(C/2)                                    PROVED
```

---

### Q A14
In a right-angled triangle, the right angle is at C. Show that r = s - c.

**ANSWER:**
```
  C = 90  ->  a^2 + b^2 = c^2  and  delta = (1/2)ab

  r = delta/s = ab/(a + b + c)

  Multiply top and bottom by (a + b - c):

    = ab(a+b-c) / [ (a+b)^2 - c^2 ]
    = ab(a+b-c) / [ a^2 + 2ab + b^2 - c^2 ]
    = ab(a+b-c) / (2ab)                         (since a^2 + b^2 = c^2)
    = (a + b - c)/2
    = s - c                                                 PROVED
```

---

### Q A15
If a = 13, b = 14, c = 15, find R.

**ANSWER:**
```
  delta = 84

  R = abc/(4 delta) = (13 x 14 x 15)/(4 x 84) = 2730/336 = 65/8 = 8.125
```

---

### Q A16
In triangle ABC show that r1 + r2 = c cot(C/2).

**ANSWER:**
```
  r1 + r2 = delta/(s-a) + delta/(s-b)
          = delta [ (s-b) + (s-a) ] / [ (s-a)(s-b) ]
          = delta . c / [ (s-a)(s-b) ]           (since 2s - a - b = c)

  Multiply top and bottom by s(s-c):

          = delta . c . s(s-c) / [ s(s-a)(s-b)(s-c) ]
          = delta . c . s(s-c) / delta^2
          = c . s(s-c)/delta
          = c cot(C/2)                                     PROVED

  (because cot(C/2) = sqrt( s(s-c)/((s-a)(s-b)) ) = s(s-c)/delta )

  CHECK with 13,14,15:  r1 + r2 = 10.5 + 12 = 22.5 ,  c cot(C/2) = 15(1.5) = 22.5
```

---

## Topic: Cosine and projection rules

### Q A17
In triangle ABC, prove that a(b cos C - c cos B) = b^2 - c^2.

**ANSWER:**
```
  b cos C = b (a^2 + b^2 - c^2)/(2ab) = (a^2 + b^2 - c^2)/(2a)
  c cos B = c (c^2 + a^2 - b^2)/(2ca) = (c^2 + a^2 - b^2)/(2a)

  Subtract:  b cosC - c cosB = [2b^2 - 2c^2]/(2a) = (b^2 - c^2)/a

  Multiply by a:   a(b cosC - c cosB) = b^2 - c^2               PROVED
```

---

### Q A18
If cot(A/2) : cot(B/2) : cot(C/2) = 1 : 2 : 3, find a : b : c.

**ANSWER:**
```
  cot(A/2) = s(s-a)/delta ,  so  cot(A/2) : cot(B/2) : cot(C/2)
                                 = (s-a) : (s-b) : (s-c)

  So   s - a = k ,  s - b = 2k ,  s - c = 3k

  Add:  (s-a)+(s-b)+(s-c) = s   ->   6k = s

  a = s - k  = 5k
  b = s - 2k = 4k
  c = s - 3k = 3k

  a : b : c = 5 : 4 : 3
```

---

### Q A19
In triangle ABC, if b = 8, c = 3 and A = 60 degrees, find a.

**ANSWER:**
```
  a^2 = b^2 + c^2 - 2bc cos A = 64 + 9 - 2(8)(3)(1/2) = 73 - 24 = 49

  a = 7
```

---

### Q A20
Find the length of the median from A in the triangle with a = 13, b = 14, c = 15.

**ANSWER:**
```
  m(a) = (1/2) sqrt( 2b^2 + 2c^2 - a^2 )
       = (1/2) sqrt( 2(196) + 2(225) - 169 )
       = (1/2) sqrt( 392 + 450 - 169 )
       = (1/2) sqrt(673)
       = 12.97   (approximately)
```

---

### Q A21
In triangle ABC prove that a cos A + b cos B + c cos C = 4R sinA sinB sinC.

**ANSWER:**
```
  a cos A = 2R sinA cosA = R sin 2A     (and similarly for the others)

  LHS = R ( sin2A + sin2B + sin2C )
      = R . 4 sinA sinB sinC                [standard identity for A+B+C = 180]
      = 4R sinA sinB sinC                                        PROVED
```

---

### Q A22
If a = 13, b = 14, c = 15, find cos A.

**ANSWER:**
```
  cos A = (b^2 + c^2 - a^2)/(2bc) = (196 + 225 - 169)/(2 x 14 x 15)
        = 252/420
        = 3/5  = 0.6
```

---

### Q A23
Show that in any triangle, R >= 2r.

**ANSWER:**
```
  Euler's formula:  OI^2 = R^2 - 2Rr  , where O is the circumcentre and I the incentre.

  A squared length can never be negative, so  R^2 - 2Rr >= 0
                                              R(R - 2r) >= 0
  Since R > 0,   R - 2r >= 0   ->   R >= 2r                       PROVED

  (Equality holds only when O and I coincide, i.e. for an EQUILATERAL triangle.)
```

---

### Q A24
In triangle ABC, if a : b : c = 7 : 8 : 9, find cos A : cos B : cos C.

**ANSWER:**
```
  Take a = 7k , b = 8k , c = 9k.

  cos A = (64 + 81 - 49)/(2 x 8 x 9) = 96/144 = 2/3
  cos B = (81 + 49 - 64)/(2 x 9 x 7) = 66/126 = 11/21
  cos C = (49 + 64 - 81)/(2 x 7 x 8) = 32/112 = 2/7

  Ratio = 2/3 : 11/21 : 2/7.  Multiply every term by 21:

  cos A : cos B : cos C = 14 : 11 : 6
```

---

# ===============================================================
# SECTION B — SHORT ANSWER (4 marks)
# Answer any 5 of the 7 offered. This chapter usually gives Q16 or Q17.
# ===============================================================

### Q B1 — Prove the projection rule
Show that `a = b cos C + c cos B`.

**ANSWER:**
```
  Drop the perpendicular AD from A onto BC.

                     A
                     /|\
                    / | \
                 c /  |  \ b
                  /   |   \
                 B----D----C
              |<-BD->|<-DC->|

  In right triangle ABD:   BD = c cos B
  In right triangle ADC:   DC = b cos C

  a = BC = BD + DC = c cos B + b cos C                        PROVED

  (If B is obtuse, D falls outside BC, cos B is negative, and the same
   formula still holds.)

  ALGEBRAIC PROOF (equally acceptable):
  b cosC + c cosB = b(a^2+b^2-c^2)/(2ab) + c(c^2+a^2-b^2)/(2ca)
                  = (a^2+b^2-c^2)/(2a) + (c^2+a^2-b^2)/(2a)
                  = (2a^2)/(2a)
                  = a
```

---

### Q B2 — Prove the half-angle sine formula
Show that `sin(A/2) = sqrt( (s-b)(s-c)/(bc) )`.

**ANSWER:**
```
  cos A = 1 - 2 sin^2(A/2)     ->     2 sin^2(A/2) = 1 - cos A

  2 sin^2(A/2) = 1 - (b^2 + c^2 - a^2)/(2bc)
               = [ 2bc - b^2 - c^2 + a^2 ] / (2bc)
               = [ a^2 - (b - c)^2 ] / (2bc)
               = (a - b + c)(a + b - c) / (2bc)

  a - b + c = 2s - 2b = 2(s - b)
  a + b - c = 2s - 2c = 2(s - c)

  2 sin^2(A/2) = 4(s-b)(s-c)/(2bc)

    sin^2(A/2) = (s-b)(s-c)/(bc)

    sin(A/2) = sqrt( (s-b)(s-c)/(bc) )                        PROVED

  (positive root, since 0 < A/2 < 90 makes sin(A/2) positive)
```

---

### Q B3 — Prove Napier's analogy
Show that `tan((B - C)/2) = ((b - c)/(b + c)) cot(A/2)`.

**ANSWER:**
```
  b = 2R sinB , c = 2R sinC.

    b - c     sinB - sinC     2 cos((B+C)/2) sin((B-C)/2)
   ------- = ------------- = -------------------------------
    b + c     sinB + sinC     2 sin((B+C)/2) cos((B-C)/2)

          = cot((B+C)/2) . tan((B-C)/2)

  Since A + B + C = 180,   (B + C)/2 = 90 - A/2,
  so  cot((B+C)/2) = cot(90 - A/2) = tan(A/2).

    (b - c)/(b + c) = tan(A/2) . tan((B-C)/2)

  Rearranged:   tan((B-C)/2) = ((b-c)/(b+c)) cot(A/2)         PROVED
```

---

### Q B4
Show that `(b + c) cos A + (c + a) cos B + (a + b) cos C = a + b + c`.

**ANSWER:**
```
  LHS = b cosA + c cosA + c cosB + a cosB + a cosC + b cosC

  Regroup into projection-rule pairs:

      = ( b cosC + c cosB ) + ( c cosA + a cosC ) + ( a cosB + b cosA )
          \_____ = a ____/     \_____ = b ____/     \_____ = c ____/

      = a + b + c = RHS                                       PROVED
```

---

### Q B5
Prove that `1/r1 + 1/r2 + 1/r3 = 1/r`.

**ANSWER:**
```
  r1 = delta/(s-a) ,  r2 = delta/(s-b) ,  r3 = delta/(s-c) ,  r = delta/s

  1/r1 + 1/r2 + 1/r3 = (s-a)/delta + (s-b)/delta + (s-c)/delta

                     = [ 3s - (a + b + c) ] / delta

                     = [ 3s - 2s ] / delta

                     = s/delta

                     = 1/r                                     PROVED

  CHECK (13,14,15):  1/10.5 + 1/12 + 1/14 = 8/84 + 7/84 + 6/84 = 21/84 = 1/4 = 1/r
```

---

### Q B6
Prove that `r . r1 . r2 . r3 = delta^2`, and hence that `delta = sqrt(r r1 r2 r3)`.

**ANSWER:**
```
  r . r1 . r2 . r3 = (delta/s) (delta/(s-a)) (delta/(s-b)) (delta/(s-c))

                   = delta^4 / [ s(s-a)(s-b)(s-c) ]

                   = delta^4 / delta^2               (Heron's formula squared)

                   = delta^2                                   PROVED

  Taking square roots:   delta = sqrt( r r1 r2 r3 )

  CHECK (13,14,15):  4 x 10.5 x 12 x 14 = 7056 = 84^2           Correct
```

---

### Q B7
Prove that `r1 r2 + r2 r3 + r3 r1 = s^2`.

**ANSWER:**
```
  r1 r2 + r2 r3 + r3 r1
     = delta^2 [ 1/((s-a)(s-b)) + 1/((s-b)(s-c)) + 1/((s-c)(s-a)) ]

     = delta^2 . [ (s-c) + (s-a) + (s-b) ] / [ (s-a)(s-b)(s-c) ]

     = delta^2 . s / [ (s-a)(s-b)(s-c) ]

  Now  s(s-a)(s-b)(s-c) = delta^2 , so (s-a)(s-b)(s-c) = delta^2/s.

     = delta^2 . s . s / delta^2
     = s^2                                                     PROVED

  CHECK (13,14,15): 10.5(12) + 12(14) + 14(10.5) = 126 + 168 + 147 = 441 = 21^2
```

---

### Q B8
Prove that `r = 4R sin(A/2) sin(B/2) sin(C/2)`.

**ANSWER:**
```
  4R sin(A/2) sin(B/2) sin(C/2)

   = 4R sqrt((s-b)(s-c)/bc) . sqrt((s-c)(s-a)/ca) . sqrt((s-a)(s-b)/ab)

   = 4R sqrt( (s-a)^2 (s-b)^2 (s-c)^2 / (a^2 b^2 c^2) )

   = 4R (s-a)(s-b)(s-c) / (abc)

  Since  4R = abc/delta :

   = (abc/delta) (s-a)(s-b)(s-c)/(abc)
   = (s-a)(s-b)(s-c)/delta
   = (delta^2/s)/delta
   = delta/s
   = r                                                         PROVED
```

---

### Q B9
Prove that `cot(A/2) + cot(B/2) + cot(C/2) = s^2 / delta`.

**ANSWER:**
```
  cot(A/2) = sqrt( s(s-a)/((s-b)(s-c)) )

  Multiply inside by (s(s-a)) top and bottom:

  cot(A/2) = s(s-a) / sqrt( s(s-a)(s-b)(s-c) ) = s(s-a)/delta

  Similarly  cot(B/2) = s(s-b)/delta  and  cot(C/2) = s(s-c)/delta

  Sum = s[ (s-a) + (s-b) + (s-c) ] / delta
      = s . s / delta
      = s^2 / delta                                            PROVED

  CHECK (13,14,15):  2 + 1.75 + 1.5 = 5.25 ,  s^2/delta = 441/84 = 5.25
```

---

### Q B10
Prove that `a^2 cot A + b^2 cot B + c^2 cot C = 4 delta`.

**ANSWER:**
```
  a^2 cot A = (2R sinA)^2 . (cosA/sinA) = 4R^2 sinA cosA = 2R^2 sin 2A

  Sum = 2R^2 ( sin2A + sin2B + sin2C )
      = 2R^2 . 4 sinA sinB sinC          [identity valid when A+B+C = 180]
      = 8R^2 sinA sinB sinC

  And  delta = (1/2) ab sinC = (1/2)(2R sinA)(2R sinB) sinC
             = 2R^2 sinA sinB sinC

  So the sum = 4 delta                                          PROVED

  CHECK (3,4,5): 9(4/3) + 16(3/4) + 25(0) = 12 + 12 + 0 = 24 = 4(6)
```

---

### Q B11
Prove that `a sin(B - C) + b sin(C - A) + c sin(A - B) = 0`.

**ANSWER:**
```
  a = 2R sinA etc.  Take out 2R:

  LHS = 2R [ sinA sin(B-C) + sinB sin(C-A) + sinC sin(A-B) ]

  Use 2 sinX sinY = cos(X - Y) - cos(X + Y):

  2 sinA sin(B-C) = cos(A - B + C) - cos(A + B - C)
  2 sinB sin(C-A) = cos(B - C + A) - cos(B + C - A)
  2 sinC sin(A-B) = cos(C - A + B) - cos(C + A - B)

  Collect the six cosines:
     + cos(A + C - B)   - cos(A + B - C)
     + cos(A + B - C)   - cos(B + C - A)
     + cos(B + C - A)   - cos(A + C - B)

  Everything cancels in pairs.  Total = 0.

  LHS = 2R x (1/2) x 0 = 0                                      PROVED
```

---

### Q B12
Solve the triangle with a = 7, b = 8, c = 9 (find all three angles).

**ANSWER:**
```
  cos A = (64 + 81 - 49)/(2 x 8 x 9) = 96/144 = 0.66667  ->  A = 48 deg 11 min
                                                              (48.19 degrees)
  cos B = (81 + 49 - 64)/(2 x 9 x 7) = 66/126 = 0.52381  ->  B = 58 deg 25 min
                                                              (58.41 degrees)
  C = 180 - 48.19 - 58.41 = 73.40 degrees  (73 deg 24 min)

  CHECK: cos C = (49 + 64 - 81)/(2 x 7 x 8) = 32/112 = 0.28571 -> 73.40   Correct
```

---

### Q B13
If b = 8, c = 3 and A = 60 degrees, solve the triangle completely.

**ANSWER:**
```
  STEP 1  a^2 = 64 + 9 - 2(8)(3)(0.5) = 49   ->   a = 7

  STEP 2  (B + C)/2 = 90 - A/2 = 90 - 30 = 60

  STEP 3  tan((B-C)/2) = ((b-c)/(b+c)) cot(A/2)
                       = (5/11) cot 30
                       = (5/11)(1.73205) = 0.78730
          (B - C)/2 = 38.21 degrees

  STEP 4  B = 60 + 38.21 = 98.21 degrees
          C = 60 - 38.21 = 21.79 degrees

  CHECK   A + B + C = 60 + 98.21 + 21.79 = 180.00
          Sine rule: 7/sin60 = 8.083 , 8/sin98.21 = 8.083 , 3/sin21.79 = 8.083
```

---

### Q B14
Prove that `cos A + cos B + cos C = 1 + r/R`.

**ANSWER:**
```
  Standard triangle identity (A + B + C = 180):

     cos A + cos B + cos C = 1 + 4 sin(A/2) sin(B/2) sin(C/2)

  From Q B8 we know  r = 4R sin(A/2) sin(B/2) sin(C/2),

  so   4 sin(A/2) sin(B/2) sin(C/2) = r/R.

  Therefore  cos A + cos B + cos C = 1 + r/R                    PROVED

  CHECK (13,14,15): 0.6 + 0.507692 + 0.384615 = 1.492308
                    1 + 4/8.125 = 1.492308                      Correct
```

---

### Q B15
If p1, p2, p3 are the lengths of the altitudes of a triangle,
show that `1/p1 + 1/p2 + 1/p3 = 1/r`.

**ANSWER:**
```
  Area = (1/2) x base x height, so

     delta = (1/2) a p1   ->   p1 = 2 delta / a
     delta = (1/2) b p2   ->   p2 = 2 delta / b
     delta = (1/2) c p3   ->   p3 = 2 delta / c

  1/p1 + 1/p2 + 1/p3 = a/(2 delta) + b/(2 delta) + c/(2 delta)
                     = (a + b + c)/(2 delta)
                     = 2s/(2 delta)
                     = s/delta
                     = 1/r                                      PROVED

  CHECK (13,14,15): p1 = 168/13 = 12.923 , p2 = 12 , p3 = 11.2
                    1/12.923 + 1/12 + 1/11.2 = 0.07738 + 0.08333 + 0.08929
                                             = 0.25 = 1/4 = 1/r   Correct
```

---

### Q B16
In triangle ABC, show that `r1 + r2 = 4R cos^2(C/2)`.

**ANSWER:**
```
  Use the R-forms:
     r1 = 4R sin(A/2) cos(B/2) cos(C/2)
     r2 = 4R cos(A/2) sin(B/2) cos(C/2)

  r1 + r2 = 4R cos(C/2) [ sin(A/2) cos(B/2) + cos(A/2) sin(B/2) ]
          = 4R cos(C/2) sin( (A + B)/2 )

  But (A + B)/2 = 90 - C/2, so sin((A+B)/2) = cos(C/2).

  r1 + r2 = 4R cos(C/2) cos(C/2) = 4R cos^2(C/2)                PROVED

  CHECK (13,14,15): r1 + r2 = 22.5
                    cos^2(C/2) = s(s-c)/(ab) = 126/182 = 0.692308
                    4R cos^2(C/2) = 32.5 x 0.692308 = 22.5       Correct
```

---

# ===============================================================
# SECTION C — LONG ANSWER (7 marks)
# Answer any 5 of the 7 offered. This chapter usually gives Q24.
# Every one of these has appeared repeatedly. Learn C1 word for word.
# ===============================================================

### Q C1 — THE MOST-ASKED LONG ANSWER IN THIS CHAPTER
Prove that `r1 + r2 + r3 - r = 4R`.

**ANSWER:** *(full model answer — this is exactly what to write)*

```
  STEP 1  Write down the standard forms.                       [1 mark]

          r  = delta/s          r1 = delta/(s-a)
          r2 = delta/(s-b)      r3 = delta/(s-c)

  STEP 2  Substitute into the left-hand side.                  [1 mark]

          LHS = delta/(s-a) + delta/(s-b) + delta/(s-c) - delta/s

              = delta [ 1/(s-a) + 1/(s-b) + 1/(s-c) - 1/s ]

  STEP 3  Combine the FIRST TWO fractions.                     [1 mark]

          1/(s-a) + 1/(s-b) = [ (s-b) + (s-a) ] / [ (s-a)(s-b) ]
                            = ( 2s - a - b ) / [ (s-a)(s-b) ]
                            = c / [ (s-a)(s-b) ]        since 2s - a - b = c

  STEP 4  Combine the LAST TWO fractions.                      [1 mark]

          1/(s-c) - 1/s = [ s - (s - c) ] / [ s(s-c) ]
                        = c / [ s(s-c) ]

  STEP 5  Add the two results.                                 [1 mark]

          LHS = delta . c [ 1/((s-a)(s-b)) + 1/(s(s-c)) ]

              = delta . c . [ s(s-c) + (s-a)(s-b) ] / [ s(s-a)(s-b)(s-c) ]

  STEP 6  Simplify the numerator inside the bracket.           [1 mark]

          s(s-c) + (s-a)(s-b)
             = s^2 - sc + s^2 - s(a + b) + ab
             = 2s^2 - s(a + b + c) + ab
             = 2s^2 - s(2s) + ab
             = ab

  STEP 7  Finish.                                              [1 mark]

          LHS = delta . abc / [ s(s-a)(s-b)(s-c) ]
              = delta . abc / delta^2               (Heron)
              = abc / delta

          And  R = abc/(4 delta)  gives  abc/delta = 4R.

          Therefore   r1 + r2 + r3 - r = 4R          HENCE PROVED

  VERIFICATION (write this if you have time — it impresses):
          For a = 13, b = 14, c = 15:  r = 4, r1 = 10.5, r2 = 12, r3 = 14,
          R = 8.125.  LHS = 10.5 + 12 + 14 - 4 = 32.5 ,  4R = 32.5.  Equal.
```

---

### Q C2
If `r1 = 2, r2 = 3, r3 = 6` and `r = 1`, prove that `a = 3, b = 4, c = 5`.

**ANSWER:**
```
  STEP 1  Check r is consistent.
          1/r1 + 1/r2 + 1/r3 = 1/2 + 1/3 + 1/6 = 1 = 1/r.   Consistent.

  STEP 2  Find the area using  r r1 r2 r3 = delta^2.

          delta^2 = 1 x 2 x 3 x 6 = 36    ->    delta = 6

  STEP 3  Find s using  r = delta/s.

          s = delta/r = 6/1 = 6

  STEP 4  Find s-a, s-b, s-c using  r1 = delta/(s-a)  etc.

          s - a = delta/r1 = 6/2 = 3   ->   a = 6 - 3 = 3
          s - b = delta/r2 = 6/3 = 2   ->   b = 6 - 2 = 4
          s - c = delta/r3 = 6/6 = 1   ->   c = 6 - 1 = 5

  STEP 5  Verify.
          a + b + c = 3 + 4 + 5 = 12 = 2s.                    Correct.
          Heron: sqrt(6 x 3 x 2 x 1) = sqrt(36) = 6 = delta.  Correct.
          3^2 + 4^2 = 5^2, so it is a right triangle, and r = s - c = 1. Correct.

  Therefore a = 3, b = 4, c = 5.                              HENCE PROVED
```

> This "work backwards from the radii" question is a gift. Learn the four steps:
> **delta from the product, s from r, then s-a, s-b, s-c from r1, r2, r3.**

---

### Q C3
Prove that `a^3 cos(B - C) + b^3 cos(C - A) + c^3 cos(A - B) = 3 a b c`.

**ANSWER:**
```
  STEP 1  Take the first term and use a = 2R sinA.

          a^3 cos(B-C) = a^2 . a cos(B-C)
                       = a^2 . 2R sinA cos(B-C)

  STEP 2  Since A = 180 - (B + C),  sinA = sin(B + C).

                       = a^2 . 2R sin(B+C) cos(B-C)

  STEP 3  Use  2 sinX cosY = sin(X+Y) + sin(X-Y)  with X = B+C, Y = B-C:

          2 sin(B+C) cos(B-C) = sin 2B + sin 2C

                       = a^2 . R ( sin2B + sin2C )
                       = a^2 . R ( 2 sinB cosB + 2 sinC cosC )
                       = a^2 [ (2R sinB) cosB + (2R sinC) cosC ]
                       = a^2 ( b cos B + c cos C )

  STEP 4  By the same working:
          b^3 cos(C-A) = b^2 ( c cos C + a cos A )
          c^3 cos(A-B) = c^2 ( a cos A + b cos B )

  STEP 5  Add all three and collect:

          LHS = a cosA (b^2 + c^2) + b cosB (c^2 + a^2) + c cosC (a^2 + b^2)

  STEP 6  Put in the cosine rule and let x = a^2, y = b^2, z = c^2.
          After multiplying through by 2abc the claim becomes

          x(y+z)(y+z-x) + y(z+x)(z+x-y) + z(x+y)(x+y-z) = 6xyz

  STEP 7  Expand:  x(y+z)(y+z-x) = x(y+z)^2 - x^2(y+z), and similarly.

          SUM of x(y+z)^2 = (xy^2 + xz^2 + yz^2 + yx^2 + zx^2 + zy^2) + 6xyz
          SUM of x^2(y+z) = (x^2 y + x^2 z + y^2 z + y^2 x + z^2 x + z^2 y)

          The two bracketed sums are IDENTICAL, so the difference is 6xyz.

  Therefore LHS = 3abc.                                       HENCE PROVED

  VERIFICATION with a=3, b=4, c=5 (A=36.87, B=53.13, C=90):
          27 cos(-36.87) = 27(0.8)  = 21.6
          64 cos(53.13)  = 64(0.6)  = 38.4
         125 cos(-16.26) = 125(0.96)= 120.0
          Total = 180 ,  3abc = 3(60) = 180.   Equal.
```

---

### Q C4
Prove that `(r1 - r)(r2 - r)(r3 - r) = 4 R r^2`.

**ANSWER:**
```
  STEP 1  Each bracket separately.

          r1 - r = delta/(s-a) - delta/s
                 = delta [ s - (s - a) ] / [ s(s-a) ]
                 = delta . a / [ s(s-a) ]

          Similarly   r2 - r = delta . b / [ s(s-b) ]
                      r3 - r = delta . c / [ s(s-c) ]

  STEP 2  Multiply.

          Product = delta^3 . abc / [ s^3 (s-a)(s-b)(s-c) ]

  STEP 3  Split s^3 as s^2 . s and use Heron:
          s(s-a)(s-b)(s-c) = delta^2

          Product = delta^3 . abc / [ s^2 . delta^2 ]
                  = delta . abc / s^2

  STEP 4  Replace abc using  abc = 4R delta.

          Product = delta . 4R delta / s^2
                  = 4R (delta/s)^2
                  = 4 R r^2                                   HENCE PROVED

  VERIFICATION (13,14,15):
          (10.5 - 4)(12 - 4)(14 - 4) = 6.5 x 8 x 10 = 520
          4 R r^2 = 4 (8.125)(16) = 520.   Equal.
```

---

### Q C5
Prove that `r + r1 + r3 - r2 = 4R cos B`, and hence write down the other two forms.

**ANSWER:**
```
  STEP 1  Write all four radii in R-form.

          r  = 4R sin(A/2) sin(B/2) sin(C/2)
          r1 = 4R sin(A/2) cos(B/2) cos(C/2)
          r2 = 4R cos(A/2) sin(B/2) cos(C/2)
          r3 = 4R cos(A/2) cos(B/2) sin(C/2)

  STEP 2  Group r1 with r3 (both have cos(B/2)).

          r1 + r3 = 4R cos(B/2) [ sin(A/2) cos(C/2) + cos(A/2) sin(C/2) ]
                  = 4R cos(B/2) sin( (A + C)/2 )

          Since (A + C)/2 = 90 - B/2,  sin((A+C)/2) = cos(B/2).

          r1 + r3 = 4R cos^2(B/2)

  STEP 3  Group r with -r2 (both have sin(B/2)).

          r - r2 = 4R sin(B/2) [ sin(A/2) sin(C/2) - cos(A/2) cos(C/2) ]
                 = - 4R sin(B/2) cos( (A + C)/2 )
                 = - 4R sin(B/2) sin(B/2)
                 = - 4R sin^2(B/2)

  STEP 4  Add.

          r + r1 + r3 - r2 = 4R [ cos^2(B/2) - sin^2(B/2) ]
                           = 4R cos B                          HENCE PROVED

  BY SYMMETRY:   r + r2 + r3 - r1 = 4R cos A
                 r + r1 + r2 - r3 = 4R cos C

  VERIFICATION (13,14,15):  4 + 10.5 + 14 - 12 = 16.5
          cos B = (225 + 169 - 196)/(2 x 15 x 13) = 198/390 = 0.507692
          4R cos B = 32.5 (0.507692) = 16.5.   Equal.
```

---

### Q C6
Prove that `cos^2(A/2)/a + cos^2(B/2)/b + cos^2(C/2)/c = s^2 / (abc)`.

**ANSWER:**
```
  STEP 1  Use  cos^2(A/2) = s(s-a)/(bc).

          cos^2(A/2)/a = s(s-a)/(abc)

  STEP 2  Similarly,

          cos^2(B/2)/b = s(s-b)/(abc)          [since cos^2(B/2) = s(s-b)/(ca)]
          cos^2(C/2)/c = s(s-c)/(abc)          [since cos^2(C/2) = s(s-c)/(ab)]

  STEP 3  Add.

          LHS = s [ (s-a) + (s-b) + (s-c) ] / (abc)
              = s [ 3s - 2s ] / (abc)
              = s . s / (abc)
              = s^2 / (abc)                                   HENCE PROVED

  VERIFICATION (13,14,15):
          cos^2(A/2)/a = 0.8/13      = 0.0615385
          cos^2(B/2)/b = 0.753846/14 = 0.0538462
          cos^2(C/2)/c = 0.692308/15 = 0.0461538
          Sum = 0.1615385
          s^2/(abc) = 441/2730 = 0.1615385.   Equal.
```

---

### Q C7
If `a^2 + b^2 + c^2 = 8 R^2`, prove that the triangle is right-angled.

**ANSWER:**
```
  STEP 1  Convert the sides into angles using a = 2R sinA.

          4R^2 ( sin^2 A + sin^2 B + sin^2 C ) = 8 R^2

          sin^2 A + sin^2 B + sin^2 C = 2

  STEP 2  Use the standard triangle identity.
          (Proof of it, if asked: expand sin^2 = (1 - cos2)/2 and use
           cos2A + cos2B + cos2C = -1 - 4 cosA cosB cosC.)

          sin^2 A + sin^2 B + sin^2 C = 2 + 2 cosA cosB cosC

  STEP 3  Compare.

          2 + 2 cosA cosB cosC = 2
                  cosA cosB cosC = 0

  STEP 4  A product is zero only if a factor is zero, so
          cos A = 0  or  cos B = 0  or  cos C = 0,
          i.e. A = 90 or B = 90 or C = 90.

          The triangle is RIGHT-ANGLED.                       HENCE PROVED

  VERIFICATION with 3, 4, 5:
          a^2 + b^2 + c^2 = 9 + 16 + 25 = 50
          8 R^2 = 8 (2.5)^2 = 8 (6.25) = 50.   Equal, and C = 90.  Correct.
```

---

### Q C8
Show that `1/p1 + 1/p2 + 1/p3 = 1/r` and `p1 p2 p3 = (abc)^2 / (8 R^3)`,
where p1, p2, p3 are the altitudes.

**ANSWER:**
```
  PART 1
          p1 = 2 delta/a ,  p2 = 2 delta/b ,  p3 = 2 delta/c

          1/p1 + 1/p2 + 1/p3 = (a + b + c)/(2 delta) = 2s/(2 delta)
                             = s/delta = 1/r                        PROVED

  PART 2
          p1 p2 p3 = (2 delta/a)(2 delta/b)(2 delta/c) = 8 delta^3/(abc)

          Substitute  delta = abc/(4R) :

          delta^3 = (abc)^3 / (64 R^3)

          p1 p2 p3 = 8 (abc)^3 / [ 64 R^3 . abc ]
                   = (abc)^2 / (8 R^3)                              PROVED

  VERIFICATION (13,14,15):
          p1 = 168/13 = 12.9231 , p2 = 12 , p3 = 11.2
          product = 12.9231 x 12 x 11.2 = 1736.8
          (abc)^2/(8R^3) = 2730^2 / (8 x 8.125^3) = 7452900/4290.97 = 1736.8
          Equal.
```

---

# WHICH QUESTIONS REPEAT MOST

| Rank | Question type | Section | Marks | Chance it appears |
|------|---------------|---------|-------|-------------------|
| 1 | Prove an identity in r, r1, r2, r3, R (especially `r1+r2+r3-r = 4R`) | C | 7 | Very high |
| 2 | Find cos A / cos C from three given sides | A | 2 | Very high |
| 3 | Prove `1/r1 + 1/r2 + 1/r3 = 1/r` or `r r1 r2 r3 = delta^2` | B or C | 4 or 7 | High |
| 4 | Find sin(A/2), cos(A/2) or tan(A/2) from three sides | A | 2 | High |
| 5 | Given r1, r2, r3 — find r, then the sides a, b, c | C | 7 | High |
| 6 | Projection-rule proof or `(b+c)cosA + ... = a+b+c` | B | 4 | High |
| 7 | `a^3 cos(B-C) + b^3 cos(C-A) + c^3 cos(A-B) = 3abc` | C | 7 | Medium-high |
| 8 | Area / R / r for a numerical triangle (3-4-5, 13-14-15 type) | A | 2 | Medium-high |
| 9 | Napier's analogy: prove it, or solve a triangle with it | B | 4 | Medium |
| 10 | `cot(A/2)+cot(B/2)+cot(C/2) = s^2/delta` | B or C | 4 or 7 | Medium |
| 11 | Half-angle derivation `sin(A/2) = sqrt((s-b)(s-c)/bc)` | B | 4 | Medium |
| 12 | Altitudes p1, p2, p3 identities | B or C | 4 or 7 | Medium |
| 13 | `a^2+b^2+c^2 = 8R^2` implies right-angled | C | 7 | Medium |
| 14 | `cosA + cosB + cosC = 1 + r/R` | B or C | 4 or 7 | Medium |
| 15 | Solve a triangle numerically (SSS or SAS) | B | 4 | Medium-low |
| 16 | Median or angle-bisector length | A or B | 2 or 4 | Low |

```
  +-------------------------------------------------------------------------+
  |  THE EXAM-DAY BET                                                       |
  |                                                                         |
  |  If you learn ONLY these three proofs cold:                             |
  |                                                                         |
  |      r1 + r2 + r3 - r = 4R                                              |
  |      1/r = 1/r1 + 1/r2 + 1/r3                                           |
  |      r . r1 . r2 . r3 = delta^2                                         |
  |                                                                         |
  |  plus the four numerical facts for a = 13, b = 14, c = 15,              |
  |  you are very likely to walk out with 9 to 11 marks from this chapter.  |
  +-------------------------------------------------------------------------+
```
