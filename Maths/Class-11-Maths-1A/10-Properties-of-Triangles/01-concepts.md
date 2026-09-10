# Properties of Triangles — Concepts, Explained From Zero

**Maths 1A · Chapter 10**

Read this with a pen. Copy every diagram. You will not learn this chapter by reading.

---

# TOPIC 1 — THE NOTATION (do not skip this)

Every single formula in this chapter uses the same labelling. If you get the labels
wrong, every answer is wrong. So learn the labels first.

```
                        A
                        /\
                       /  \
                    c /    \ b
                     /      \
                    /        \
                   B----------C
                        a
```

**The rule is: a small letter faces its own capital letter.**

| Symbol | Means |
|--------|-------|
| A, B, C | the three ANGLES (capital letters) |
| a, b, c | the three SIDES (small letters) |
| a | the side OPPOSITE angle A, i.e. the side BC |
| b | the side OPPOSITE angle B, i.e. the side CA |
| c | the side OPPOSITE angle C, i.e. the side AB |

Two facts that are always true and are used constantly:

```
  +-------------------------------------------------+
  |   A + B + C = 180 degrees                       |
  |                                                 |
  |   a + b + c = 2s      so   s = (a + b + c)/2    |
  +-------------------------------------------------+
```

`s` is called the **semi-perimeter** ("semi" = half). It is half the perimeter.

Three baby results you will use in almost every proof:

```
  2s - a - b = c          because  a + b + c = 2s
  2s - b - c = a
  2s - c - a = b

  and, very usefully:

  (s - b) + (s - c) = 2s - b - c = a
  (s - c) + (s - a) = b
  (s - a) + (s - b) = c
```

> **TRAP:** Students write `s - a` when they mean `a - s`. Since `a < b + c` always
> (triangle inequality), `s - a` is ALWAYS positive. If your `s - a` is negative,
> you have made an arithmetic slip or the "triangle" does not exist.

**The other symbols**

| Symbol | Name | Meaning in plain English |
|--------|------|--------------------------|
| delta (or S) | Area | the area of triangle ABC |
| R | Circumradius | radius of the circle through all 3 corners |
| r | Inradius | radius of the circle touching all 3 sides inside |
| r1 | Ex-radius opposite A | radius of the circle touching side `a` from outside |
| r2 | Ex-radius opposite B | same idea, touching side `b` |
| r3 | Ex-radius opposite C | same idea, touching side `c` |

**WORKED EXAMPLE 1.1**
In a triangle, a = 13, b = 14, c = 15. Find s, s-a, s-b, s-c.

```
  s = (13 + 14 + 15)/2 = 42/2 = 21

  s - a = 21 - 13 = 8
  s - b = 21 - 14 = 7
  s - c = 21 - 15 = 6

  CHECK: (s-a) + (s-b) + (s-c) = 8 + 7 + 6 = 21 = s     <-- always true
```

That check `(s-a)+(s-b)+(s-c) = s` is free marks-insurance. Use it every time.

---

# TOPIC 2 — THE SINE RULE

## What it says

```
  +===============================================================+
  |                                                               |
  |        a          b          c                                |
  |     ------  =  ------  =  ------  =  2R                       |
  |     sin A      sin B      sin C                               |
  |                                                               |
  |     equivalently:   a = 2R sin A                              |
  |                     b = 2R sin B                              |
  |                     c = 2R sin C                              |
  +===============================================================+
```

**In plain English:** in any triangle, a bigger side always faces a bigger angle, and
the ratio side/sin(its angle) is the same for all three. That common ratio equals the
DIAMETER of the circle drawn through the three corners.

## The proof (this can be asked for 4 marks)

Draw the circumcircle — the circle through A, B and C. Let its centre be O and radius R.

```
  CASE 1: angle A is ACUTE

         Draw the diameter BD from B.
                                              D
              . - - - - - - - .            .
           .                     .      .
          .          A            .   .
         .          / \           . 
         .         /   \        . .
        .         /     \     .    .
        .        /       \  .       .
         .      /       . \         .
          .    /     .     \       .
            B/ - - - - - - - \C
              . _ _ _ _ _ _ .

     Join D to C.
     Angle BCD = 90 degrees      (angle in a semicircle)
     Angle BDC = Angle BAC = A   (angles in the same segment, both stand on arc BC)

     In right triangle BDC:
             sin(BDC) = BC / BD
             sin A    = a / (2R)
     Therefore   a / sin A = 2R
```

```
  CASE 2: angle A is OBTUSE
     Then ABDC is a cyclic quadrilateral, so  angle BDC = 180 - A,
     and sin(180 - A) = sin A. Same conclusion:  a/sin A = 2R.

  CASE 3: angle A = 90 degrees
     Then BC is itself a diameter, a = 2R, and sin A = 1,
     so a/sin A = 2R again.
```

Repeat the argument starting from A or C and you get b/sin B = 2R and c/sin C = 2R.
Hence all three ratios equal 2R.

## What it is FOR

Use the sine rule whenever you know **an angle and the side opposite it** (a matched pair),
plus one more thing.

**WORKED EXAMPLE 2.1**
In triangle ABC, A = 45 degrees, B = 75 degrees, a = 10. Find C, b, c and R.

```
  STEP 1   C = 180 - 45 - 75 = 60 degrees

  STEP 2   Sine rule:   a/sinA = b/sinB = c/sinC

           a/sinA = 10 / sin45 = 10 / 0.70711 = 14.1421

  STEP 3   b = 14.1421 x sin75 = 14.1421 x 0.96593 = 13.660
           c = 14.1421 x sin60 = 14.1421 x 0.86603 = 12.247

  STEP 4   2R = 14.1421   so   R = 7.0711  ( = 5 sqrt(2) )

  CHECK    Biggest angle is B = 75, and b = 13.66 is the biggest side.  Consistent.
           Smallest angle is A = 45, and a = 10 is the smallest side.   Consistent.
```

**WORKED EXAMPLE 2.2**
Prove that in any triangle, `a sin(B - C) + b sin(C - A) + c sin(A - B) = 0`.

```
  Put a = 2R sinA , b = 2R sinB , c = 2R sinC. Take 2R out:

  LHS = 2R [ sinA sin(B-C) + sinB sin(C-A) + sinC sin(A-B) ]

  Use  2 sinX sinY = cos(X - Y) - cos(X + Y):

  2 sinA sin(B-C) = cos(A - B + C) - cos(A + B - C)
  2 sinB sin(C-A) = cos(B - C + A) - cos(B + C - A)
  2 sinC sin(A-B) = cos(C - A + B) - cos(C + A - B)

  Now look at the six cosines. They are:
      cos(A - B + C) and  - cos(B + C - A)        <-- wait, compare carefully
  Listing them:
      +cos(A+C-B)   -cos(A+B-C)
      +cos(A+B-C)   -cos(B+C-A)
      +cos(B+C-A)   -cos(C+A-B)

  Every term appears once with + and once with -.  Total = 0.

  Therefore LHS = 2R x (1/2) x 0 = 0.   PROVED.
```

> **TRAP:** The sine rule needs a MATCHED pair (a side and the angle facing it).
> If you are given two sides and the angle BETWEEN them, the sine rule is useless.
> Use the cosine rule instead.

---

# TOPIC 3 — THE COSINE RULE

## What it says

```
  +===============================================================+
  |                                                               |
  |               b^2 + c^2 - a^2                                 |
  |     cos A = -------------------      a^2 = b^2 + c^2 - 2bc cosA
  |                    2 b c                                      |
  |                                                               |
  |               c^2 + a^2 - b^2                                 |
  |     cos B = -------------------      b^2 = c^2 + a^2 - 2ca cosB
  |                    2 c a                                      |
  |                                                               |
  |               a^2 + b^2 - c^2                                 |
  |     cos C = -------------------      c^2 = a^2 + b^2 - 2ab cosC
  |                    2 a b                                      |
  +===============================================================+
```

**In plain English:** this is Pythagoras with a correction term. If A = 90 degrees then
cos A = 0 and the formula collapses to `a^2 = b^2 + c^2`, which is exactly Pythagoras.
The `-2bc cos A` term is the penalty for the angle not being a right angle.

**Memory hook:** the letter that is ALONE on the left (A) matches the side that is
SUBTRACTED on top (a^2), and the two letters on the bottom (b, c) are the other two.

## The proof (4 marks)

Drop a perpendicular AD from A onto BC. Let AD = h and BD = x, so DC = a - x.

```
                     A
                     /|\
                    / | \
                 c /  |h \ b
                  /   |   \
                 /    |    \
                B-----D-----C
                  x      a-x
                <---- a ---->

  In right triangle ABD:   x = c cos B  ,  h = c sin B
  In right triangle ADC:   b^2 = h^2 + (a - x)^2

  So   b^2 = c^2 sin^2 B + (a - c cos B)^2
           = c^2 sin^2 B + a^2 - 2ac cos B + c^2 cos^2 B
           = c^2 (sin^2 B + cos^2 B) + a^2 - 2ac cos B
           = c^2 + a^2 - 2ac cos B

  Rearranged:   cos B = (c^2 + a^2 - b^2)/(2ca)      PROVED.
```

The other two follow by relabelling.

## What it is FOR

Use the cosine rule when you know:
- **all three sides** (and want an angle), or
- **two sides and the angle between them** (and want the third side).

**WORKED EXAMPLE 3.1**
a = 7, b = 8, c = 9. Find all three angles.

```
  cos A = (b^2 + c^2 - a^2)/(2bc) = (64 + 81 - 49)/(2 x 8 x 9) = 96/144 = 2/3
        A = arccos(0.66667) = 48.19 degrees

  cos B = (c^2 + a^2 - b^2)/(2ca) = (81 + 49 - 64)/(2 x 9 x 7) = 66/126 = 11/21
        B = arccos(0.52381) = 58.41 degrees

  cos C = (a^2 + b^2 - c^2)/(2ab) = (49 + 64 - 81)/(2 x 7 x 8) = 32/112 = 2/7
        C = arccos(0.28571) = 73.40 degrees

  CHECK: 48.19 + 58.41 + 73.40 = 180.00       CORRECT
```

**WORKED EXAMPLE 3.2**
b = 8, c = 3, A = 60 degrees. Find a.

```
  a^2 = b^2 + c^2 - 2bc cos A
      = 64 + 9 - 2(8)(3)(0.5)
      = 73 - 24
      = 49
  a = 7

  CHECK with the cosine rule backwards:
  cos A = (64 + 9 - 49)/(2 x 8 x 3) = 24/48 = 0.5 = cos 60.   CORRECT
```

**WORKED EXAMPLE 3.3 — a classic 2-mark question**
If a = 4, b = 5, c = 7, find cos C and say what kind of triangle it is.

```
  cos C = (a^2 + b^2 - c^2)/(2ab) = (16 + 25 - 49)/(2 x 4 x 5) = -8/40 = -1/5

  cos C is NEGATIVE, so C is OBTUSE.  The triangle is obtuse-angled.
```

> **TRAP:** A negative cosine is not a mistake. It just means that angle is obtuse.
> Only ONE angle in a triangle can be obtuse, so at most one cosine can be negative.
> If two of your cosines come out negative, recheck your arithmetic.

---

# TOPIC 4 — THE PROJECTION RULE

## What it says

```
  +===============================================================+
  |                                                               |
  |        a  =  b cos C  +  c cos B                              |
  |        b  =  c cos A  +  a cos C                              |
  |        c  =  a cos B  +  b cos A                              |
  |                                                               |
  |   PATTERN: the side on the left never appears on the right.    |
  +===============================================================+
```

**In plain English:** the foot of the perpendicular from A splits side `a` into two
pieces. One piece is the "shadow" (projection) of side c, the other is the shadow of
side b. Add the two shadows and you get the whole side.

```
                     A
                     /|\
                    / | \
                 c /  |  \ b
                  /   |   \
                 /    |    \
                B-----D-----C
              |<-BD->|<-DC->|
                     a

     In right triangle ABD:  BD = c cos B
     In right triangle ADC:  DC = b cos C

     a = BD + DC = c cos B + b cos C          PROVED.
```

(If angle B is obtuse, D falls outside BC and `cos B` is negative, so the formula still
comes out right — the "shadow" is subtracted. The result holds in every case.)

## What it is FOR

The projection rule is the tool for **proving identities where you see a mixture of
sides and cosines**. Whenever a question has terms like `b cos C + c cos B`, replace the
whole thing with `a` immediately.

**WORKED EXAMPLE 4.1**
Prove that `a(b cos C - c cos B) = b^2 - c^2`.

```
  Use the cosine rule for cos C and cos B:

  b cos C = b . (a^2 + b^2 - c^2)/(2ab) = (a^2 + b^2 - c^2)/(2a)
  c cos B = c . (c^2 + a^2 - b^2)/(2ca) = (c^2 + a^2 - b^2)/(2a)

  b cos C - c cos B = [ (a^2 + b^2 - c^2) - (c^2 + a^2 - b^2) ] / (2a)
                    = [ 2b^2 - 2c^2 ] / (2a)
                    = (b^2 - c^2)/a

  Multiply both sides by a:   a(b cos C - c cos B) = b^2 - c^2      PROVED.

  NUMERICAL CHECK with a=7, b=8, c=9:
     b cos C = 8 x (2/7)   = 16/7  = 2.2857
     c cos B = 9 x (11/21) = 99/21 = 4.7143
     a(b cosC - c cosB) = 7 x (2.2857 - 4.7143) = 7 x (-2.4286) = -17.0
     b^2 - c^2 = 64 - 81 = -17.0                MATCHES
```

**WORKED EXAMPLE 4.2**
Prove that `(b + c) cos A + (c + a) cos B + (a + b) cos C = a + b + c`.

```
  Expand and regroup by grouping the projection pairs:

  LHS = b cosA + c cosA + c cosB + a cosB + a cosC + b cosC

      = (b cosC + c cosB)  +  (c cosA + a cosC)  +  (a cosB + b cosA)
           \___ = a ___/       \____ = b ____/       \____ = c ____/

      = a + b + c  = RHS      PROVED.
```

That is a beautiful 4-mark answer: three lines, no algebra.

---

# TOPIC 5 — THE TANGENT RULE (NAPIER'S ANALOGY)

## What it says

```
  +===============================================================+
  |         / A - B \      / a - b \         / C \                |
  |     tan| ------- |  =  | ------- |  cot | --- |               |
  |         \   2   /      \ a + b /         \ 2 /                |
  |                                                               |
  |         / B - C \      / b - c \         / A \                |
  |     tan| ------- |  =  | ------- |  cot | --- |               |
  |         \   2   /      \ b + c /         \ 2 /                |
  |                                                               |
  |         / C - A \      / c - a \         / B \                |
  |     tan| ------- |  =  | ------- |  cot | --- |               |
  |         \   2   /      \ c + a /         \ 2 /                |
  +===============================================================+
```

**Memory hook:** every letter on the left appears on the right in the same order.
`(A-B)` on the left, `(a-b)` on the right, and the LEFT-OVER letter C goes in the cot.

## The proof (4 marks)

```
  By the sine rule:  a = 2R sinA ,  b = 2R sinB

       a - b     2R sinA - 2R sinB     sinA - sinB
      ------- = ------------------- = -------------
       a + b     2R sinA + 2R sinB     sinA + sinB

  Now use the sum-to-product formulas:
       sinA - sinB = 2 cos((A+B)/2) sin((A-B)/2)
       sinA + sinB = 2 sin((A+B)/2) cos((A-B)/2)

       a - b     2 cos((A+B)/2) sin((A-B)/2)
      ------- = -------------------------------
       a + b     2 sin((A+B)/2) cos((A-B)/2)

              = cot((A+B)/2) . tan((A-B)/2)

  But A + B + C = 180, so (A + B)/2 = 90 - C/2,
  and  cot(90 - C/2) = tan(C/2).

       a - b
      ------- = tan(C/2) . tan((A-B)/2)
       a + b

  Rearranging:   tan((A-B)/2) = ((a-b)/(a+b)) cot(C/2)      PROVED.
```

## What it is FOR

**This is THE tool for the case "two sides and the included angle".** You know b, c and A.
You cannot use the sine rule (no matched pair). So:

```
  1.  (B + C)/2 = 90 - A/2                    <-- known immediately
  2.  tan((B - C)/2) = ((b - c)/(b + c)) cot(A/2)   <-- gives (B - C)/2
  3.  Add and subtract to get B and C separately.
  4.  Get a from the sine rule.
```

**WORKED EXAMPLE 5.1**
b = 8, c = 3, A = 60 degrees. Find B and C.

```
  STEP 1   (B + C)/2 = 90 - 30 = 60 degrees

  STEP 2   tan((B-C)/2) = ((8 - 3)/(8 + 3)) . cot(30)
                        = (5/11) x 1.73205
                        = 0.78730
           (B - C)/2 = 38.213 degrees

  STEP 3   B = 60 + 38.213 = 98.213 degrees
           C = 60 - 38.213 = 21.787 degrees

  CHECK    A + B + C = 60 + 98.213 + 21.787 = 180.000       CORRECT
           Sine rule: a = 7 (from Example 3.2)
              a/sinA = 7/0.86603 = 8.0829
              b/sinB = 8/0.98974 = 8.0829
              c/sinC = 3/0.37116 = 8.0829              ALL MATCH
```

> **TRAP:** `(B+C)/2 = 90 - A/2`, NOT `180 - A`. You are halving, so the 180 becomes 90.

---

# TOPIC 6 — THE HALF-ANGLE FORMULAS

These are the workhorses of the chapter. Learn them cold.

```
  +===============================================================+
  |                                                               |
  |          / A \       /  (s-b)(s-c)  \                         |
  |      sin| --- | = sqrt| ------------ |                        |
  |          \ 2 /       \      b c     /                         |
  |                                                               |
  |          / A \       /   s (s-a)    \                         |
  |      cos| --- | = sqrt| ------------ |                        |
  |          \ 2 /       \      b c     /                         |
  |                                                               |
  |          / A \       /  (s-b)(s-c)  \                         |
  |      tan| --- | = sqrt| ------------ |                        |
  |          \ 2 /       \   s (s-a)    /                         |
  |                                                               |
  +===============================================================+
```

**How to remember all three at once:**

```
      the letter in the half-angle is A
                     |
      sin  gets  the OTHER two:  (s-b)(s-c)      "sin gets the strangers"
      cos  gets  s and its OWN:  s(s-a)          "cos gets s and self"
      tan  =  sin / cos , so it is (s-b)(s-c) over s(s-a)

      the bottom of sin and cos is always  bc  (the two sides touching angle A)
```

For angle B, swap the roles: `sin(B/2) = sqrt((s-c)(s-a)/(ca))`, and so on.

## The derivation (4 marks — asked directly)

```
  Start from  cos A = 1 - 2 sin^2(A/2)      so     2 sin^2(A/2) = 1 - cos A

  2 sin^2(A/2) = 1 - (b^2 + c^2 - a^2)/(2bc)
               = [ 2bc - b^2 - c^2 + a^2 ] / (2bc)
               = [ a^2 - (b - c)^2 ] / (2bc)
               = (a - b + c)(a + b - c) / (2bc)

  Now  a - b + c = 2s - 2b = 2(s - b)
  and  a + b - c = 2s - 2c = 2(s - c)

  2 sin^2(A/2) = 4(s - b)(s - c) / (2bc)

    sin^2(A/2) = (s - b)(s - c) / (bc)

    sin(A/2)   = sqrt( (s-b)(s-c) / (bc) )        PROVED.
    (positive root, because 0 < A/2 < 90 so sin(A/2) > 0)


  Similarly from  cos A = 2 cos^2(A/2) - 1     so    2 cos^2(A/2) = 1 + cos A

  2 cos^2(A/2) = 1 + (b^2 + c^2 - a^2)/(2bc)
               = [ 2bc + b^2 + c^2 - a^2 ] / (2bc)
               = [ (b + c)^2 - a^2 ] / (2bc)
               = (b + c - a)(b + c + a) / (2bc)
               = 2(s - a) . 2s / (2bc)

    cos^2(A/2) = s(s - a)/(bc)

    cos(A/2)   = sqrt( s(s-a)/(bc) )              PROVED.

  Dividing:   tan(A/2) = sqrt( (s-b)(s-c) / (s(s-a)) )     PROVED.
```

**WORKED EXAMPLE 6.1**
a = 7, b = 8, c = 9. Find sin(A/2), cos(A/2), tan(A/2).

```
  s = (7+8+9)/2 = 12 ,  s-a = 5 ,  s-b = 4 ,  s-c = 3

  sin(A/2) = sqrt( (4)(3) / (8 x 9) )  = sqrt(12/72)  = sqrt(1/6)  = 0.40825
  cos(A/2) = sqrt( (12)(5) / (8 x 9) ) = sqrt(60/72)  = sqrt(5/6)  = 0.91287
  tan(A/2) = sqrt( 12/60 ) = sqrt(1/5) = 0.44721

  CHECK 1:  sin^2 + cos^2 = 1/6 + 5/6 = 1                      CORRECT
  CHECK 2:  sin/cos = 0.40825/0.91287 = 0.44721 = tan          CORRECT
  CHECK 3:  cos A = 1 - 2 sin^2(A/2) = 1 - 2(1/6) = 2/3,
            which matches Example 3.1.                          CORRECT
```

**WORKED EXAMPLE 6.2 — the "cot(A/2)" version, very commonly asked**

```
  cot(A/2) = sqrt( s(s - a) / ((s-b)(s-c)) )

  For a=13, b=14, c=15  (s=21, s-a=8, s-b=7, s-c=6):

  cot(A/2) = sqrt( 21 x 8 / (7 x 6) ) = sqrt(168/42) = sqrt(4) = 2
  cot(B/2) = sqrt( 21 x 7 / (8 x 6) ) = sqrt(147/48) = 1.75
  cot(C/2) = sqrt( 21 x 6 / (7 x 8) ) = sqrt(126/56) = 1.5

  Sum = 2 + 1.75 + 1.5 = 5.25
  And  s^2/delta = 441/84 = 5.25                                MATCHES

  That is the standard result:  cot(A/2) + cot(B/2) + cot(C/2) = s^2 / delta
```

> **TRAP:** Never write `sin(A/2) = sqrt((s-a)(s-b)/bc)`. It is the two brackets that
> do NOT contain the angle's own letter. For A that is `(s-b)(s-c)`.

---

# TOPIC 7 — AREA OF A TRIANGLE (delta), IN FIVE FORMS

```
  +===============================================================+
  |                                                               |
  |   1.   delta = (1/2) ab sin C = (1/2) bc sin A                |
  |                = (1/2) ca sin B                               |
  |                                                               |
  |   2.   delta = sqrt( s(s-a)(s-b)(s-c) )        [HERON]        |
  |                                                               |
  |   3.   delta = abc / (4R)                                     |
  |                                                               |
  |   4.   delta = r . s                                          |
  |                                                               |
  |                a^2 sin B sin C                                |
  |   5.   delta = ----------------                               |
  |                   2 sin A                                     |
  |                                                               |
  +===============================================================+
```

## Where each one comes from

```
  FORM 1   Area = (1/2) x base x height.
           Take base = a. Height from A is h = b sin C  (from the right triangle).
           So delta = (1/2) a . b sin C.

  FORM 2   delta = (1/2) bc sinA = (1/2) bc . 2 sin(A/2) cos(A/2)
                 = bc . sqrt((s-b)(s-c)/bc) . sqrt(s(s-a)/bc)
                 = bc . sqrt( s(s-a)(s-b)(s-c) ) / bc
                 = sqrt( s(s-a)(s-b)(s-c) )                  HERON PROVED

  FORM 3   delta = (1/2) ab sinC  and  sinC = c/(2R)
                 = (1/2) ab . c/(2R) = abc/(4R)

  FORM 4   See Topic 8 below (split the triangle by joining the incentre to the corners).

  FORM 5   delta = (1/2) bc sinA. Put b = a sinB/sinA and c = a sinC/sinA:
                 = (1/2) . (a sinB/sinA)(a sinC/sinA) . sinA
                 = a^2 sinB sinC / (2 sinA)
```

**WORKED EXAMPLE 7.1**
a = 13, b = 14, c = 15. Find the area four different ways and check they agree.

```
  s = 21,  s-a = 8,  s-b = 7,  s-c = 6

  HERON:   delta = sqrt(21 x 8 x 7 x 6) = sqrt(7056) = 84

  Via cos C:  cos C = (169 + 196 - 225)/(2 x 13 x 14) = 140/364 = 0.384615
              sin C = sqrt(1 - 0.147929) = sqrt(0.852071) = 0.923077
              delta = (1/2)(13)(14)(0.923077) = 91 x 0.923077 = 84.000     MATCH

  Via R:      R = abc/(4 delta) = 2730/336 = 8.125
              check: abc/(4R) = 2730/32.5 = 84                             MATCH

  Via r:      r = delta/s = 84/21 = 4
              check: r.s = 4 x 21 = 84                                     MATCH
```

**WORKED EXAMPLE 7.2 — a 2-mark question shape**
If the sides are 3, 4, 5, find the area and the circumradius.

```
  s = 6,  s-a = 3, s-b = 2, s-c = 1
  delta = sqrt(6 x 3 x 2 x 1) = sqrt(36) = 6
  R = abc/(4 delta) = 60/24 = 2.5

  SENSE CHECK: 3-4-5 is a right triangle, so the hypotenuse is a diameter.
               R = 5/2 = 2.5.                                    CORRECT
               Area = (1/2)(3)(4) = 6.                           CORRECT
```

> **TRAP:** Heron's formula gives delta, NOT delta^2. Do not forget the square root.
> Half the lost marks in this chapter are a missing sqrt.

---

# TOPIC 8 — R, r, r1, r2, r3 : THE FOUR CIRCLES

## The circumradius R

```
  +-------------------------------------------------------+
  |          abc            a           b           c     |
  |   R = ---------  =  --------- = --------- = --------- |
  |        4 delta       2 sin A     2 sin B     2 sin C  |
  +-------------------------------------------------------+
```

## The inradius r

The incircle touches all three sides from inside. Join the incentre I to A, B and C.
The big triangle is split into three small ones, each of height r:

```
                    A
                    /\
                   /  \
                  / \/ \
                 / _ I _ \
                /_/     \_\
               B-----------C

    Area(ABC) = Area(IBC) + Area(ICA) + Area(IAB)
              = (1/2) a r + (1/2) b r + (1/2) c r
              = (1/2) r (a + b + c)
              = (1/2) r (2s)
              = r s

    Therefore   r = delta / s          PROVED
```

All the standard forms of r:

```
  +-------------------------------------------------------------------+
  |   r = delta / s                                                   |
  |                                                                   |
  |   r = (s - a) tan(A/2) = (s - b) tan(B/2) = (s - c) tan(C/2)      |
  |                                                                   |
  |   r = 4R sin(A/2) sin(B/2) sin(C/2)                               |
  |                                                                   |
  |            a sin(B/2) sin(C/2)                                    |
  |   r =  --------------------------                                 |
  |               cos(A/2)                                            |
  |                                                                   |
  |   r = (s - a) tan(A/2)   and also   r = 4R sin(A/2)sin(B/2)sin(C/2)|
  +-------------------------------------------------------------------+
```

**Proof that r = (s - a) tan(A/2):**

```
  r = delta/s = sqrt(s(s-a)(s-b)(s-c))/s
              = sqrt( (s-a)(s-b)(s-c)/s )
              = sqrt( (s-a)^2 . (s-b)(s-c) / (s(s-a)) )
              = (s - a) sqrt( (s-b)(s-c)/(s(s-a)) )
              = (s - a) tan(A/2)                       PROVED
```

**Proof that r = 4R sin(A/2) sin(B/2) sin(C/2):**

```
  4R sin(A/2) sin(B/2) sin(C/2)

    = 4R . sqrt((s-b)(s-c)/bc) . sqrt((s-c)(s-a)/ca) . sqrt((s-a)(s-b)/ab)

    = 4R . sqrt( (s-a)^2 (s-b)^2 (s-c)^2 / (a^2 b^2 c^2) )

    = 4R . (s-a)(s-b)(s-c) / (abc)

  Now 4R = abc/delta, so this is

    = (abc/delta) . (s-a)(s-b)(s-c)/(abc)
    = (s-a)(s-b)(s-c)/delta
    = [ delta^2 / s ] / delta            (since (s-a)(s-b)(s-c) = delta^2/s)
    = delta/s
    = r                                                PROVED
```

## The ex-radii r1, r2, r3

An **excircle** is a circle that touches one side of the triangle and the EXTENSIONS
of the other two. There are three of them.

```
   THE EXCIRCLE OPPOSITE A  (radius r1, centre I1)

                        A
                        /\
                       /  \
                      /    \
                     B------C
                    /   ..   \
                   /  .    .  \
                  /  .  I1  .  \
                 /    .    .    \
                       ....

     It touches side  a = BC ,
     and the extensions of AB and AC beyond B and C.
     Its centre I1 lies on the INTERNAL bisector of A
     and the EXTERNAL bisectors of B and C.
```

```
  +-------------------------------------------------------------------+
  |   r1 = delta/(s - a)      r2 = delta/(s - b)     r3 = delta/(s - c)|
  |                                                                   |
  |   r1 = s tan(A/2)         r2 = s tan(B/2)        r3 = s tan(C/2)   |
  |                                                                   |
  |   r1 = 4R sin(A/2) cos(B/2) cos(C/2)                              |
  |   r2 = 4R cos(A/2) sin(B/2) cos(C/2)                              |
  |   r3 = 4R cos(A/2) cos(B/2) sin(C/2)                              |
  |                                                                   |
  |             a cos(B/2) cos(C/2)                                   |
  |   r1 =  --------------------------                                |
  |                cos(A/2)                                           |
  +-------------------------------------------------------------------+
```

**Proof that r1 = s tan(A/2):**

```
  r1 = delta/(s-a) = sqrt(s(s-a)(s-b)(s-c))/(s-a)
                   = sqrt( s(s-b)(s-c)/(s-a) )
                   = sqrt( s^2 (s-b)(s-c) / (s(s-a)) )
                   = s sqrt( (s-b)(s-c)/(s(s-a)) )
                   = s tan(A/2)                        PROVED
```

**WORKED EXAMPLE 8.1**
a = 13, b = 14, c = 15. Find R, r, r1, r2, r3.

```
  s = 21 , s-a = 8 , s-b = 7 , s-c = 6 , delta = 84

  R  = abc/(4 delta) = (13 x 14 x 15)/(4 x 84) = 2730/336 = 8.125  ( = 65/8 )
  r  = delta/s       = 84/21 = 4
  r1 = delta/(s-a)   = 84/8  = 10.5   ( = 21/2 )
  r2 = delta/(s-b)   = 84/7  = 12
  r3 = delta/(s-c)   = 84/6  = 14

  CHECK 1:  r1 + r2 + r3 - r = 10.5 + 12 + 14 - 4 = 32.5 = 4R = 4(8.125)   MATCH
  CHECK 2:  1/r1 + 1/r2 + 1/r3 = 8/84 + 7/84 + 6/84 = 21/84 = 1/4 = 1/r    MATCH
  CHECK 3:  r . r1 . r2 . r3 = 4 x 10.5 x 12 x 14 = 7056 = 84^2 = delta^2  MATCH
```

**WORKED EXAMPLE 8.2 — the right-angled special case**
In a right triangle with the right angle at C, show r = s - c and R = c/2.

```
  C = 90, so cos C = 0, giving a^2 + b^2 = c^2.
  delta = (1/2) ab.

  r = delta/s = ab/(a + b + c)
  Multiply top and bottom by (a + b - c):
      = ab(a+b-c) / [ (a+b)^2 - c^2 ]
      = ab(a+b-c) / [ a^2 + 2ab + b^2 - c^2 ]
      = ab(a+b-c) / [ 2ab ]                     (since a^2+b^2 = c^2)
      = (a + b - c)/2
      = s - c                                   PROVED

  R = c/(2 sin C) = c/(2 x 1) = c/2             PROVED

  CHECK with 3,4,5:  r = (3+4-5)/2 = 1,  and delta/s = 6/6 = 1.   MATCH
                     R = 5/2 = 2.5.                               MATCH
```

> **TRAP:** `r1` is NOT "the radius at vertex A". It is the radius of the circle
> touching side `a` (the side OPPOSITE A) from outside. That is why the formula has
> `(s - a)` in the denominator.

---

# TOPIC 9 — THE STANDARD IDENTITIES (this is the 7-mark question)

```
  +===============================================================+
  |                                                               |
  |   I1.   r1 + r2 + r3 - r  =  4R                               |
  |                                                               |
  |   I2.   1/r  =  1/r1 + 1/r2 + 1/r3                            |
  |                                                               |
  |   I3.   r . r1 . r2 . r3  =  delta^2                          |
  |                                                               |
  |   I4.   r1 r2 + r2 r3 + r3 r1  =  s^2                         |
  |                                                               |
  |   I5.   (r1 - r)(r2 - r)(r3 - r)  =  4 R r^2                  |
  |                                                               |
  |   I6.   r + r1 + r2 - r3  =  4R cos C                         |
  |                                                               |
  |   I7.   cos A + cos B + cos C  =  1 + r/R                     |
  |                                                               |
  |   I8.   sin A + sin B + sin C  =  s / R                       |
  |                                                               |
  +===============================================================+
```

## HOW TO PROVE ANY OF THEM — the universal method

```
  STEP 1   Write EVERY radius as delta over something:
              r = delta/s , r1 = delta/(s-a) , r2 = delta/(s-b) , r3 = delta/(s-c)
  STEP 2   Take delta outside as a common factor.
  STEP 3   Add the fractions over a common denominator.
  STEP 4   Simplify the numerator using  a + b + c = 2s.
  STEP 5   Recognise  s(s-a)(s-b)(s-c) = delta^2  and  abc = 4R delta.
```

## FULL PROOF of I1 — the single most-asked 7-mark question

**Prove that r1 + r2 + r3 - r = 4R.**

```
  LHS = delta/(s-a) + delta/(s-b) + delta/(s-c) - delta/s

      = delta [ 1/(s-a) + 1/(s-b) + 1/(s-c) - 1/s ]

  Pair them cleverly:  (first two) and (last two)

    1/(s-a) + 1/(s-b) =  [ (s-b) + (s-a) ] / [ (s-a)(s-b) ]
                      =  ( 2s - a - b ) / [ (s-a)(s-b) ]
                      =  c / [ (s-a)(s-b) ]                    (since 2s-a-b = c)

    1/(s-c) - 1/s     =  [ s - (s - c) ] / [ s(s-c) ]
                      =  c / [ s(s-c) ]

  Add them:

    = c [ 1/((s-a)(s-b)) + 1/(s(s-c)) ]

    = c [ s(s-c) + (s-a)(s-b) ] / [ s(s-a)(s-b)(s-c) ]

  Numerator inside the bracket:
     s(s-c) + (s-a)(s-b) = s^2 - sc + s^2 - s(a+b) + ab
                         = 2s^2 - s(a + b + c) + ab
                         = 2s^2 - s(2s) + ab
                         = ab

  So the bracket = c . ab / [ s(s-a)(s-b)(s-c) ] = abc / delta^2

  Therefore  LHS = delta . abc/delta^2 = abc/delta

  And since  R = abc/(4 delta) ,  we get  abc/delta = 4R.

  LHS = 4R      PROVED.

  NUMERICAL CHECK (13,14,15):  10.5 + 12 + 14 - 4 = 32.5 ,  4R = 4(8.125) = 32.5
```

## FULL PROOF of I2

```
  1/r1 + 1/r2 + 1/r3 = (s-a)/delta + (s-b)/delta + (s-c)/delta

                     = [ (s-a) + (s-b) + (s-c) ] / delta

                     = [ 3s - (a + b + c) ] / delta

                     = [ 3s - 2s ] / delta

                     = s / delta

                     = 1 / r                  (since r = delta/s)     PROVED
```

## FULL PROOF of I3

```
  r . r1 . r2 . r3 = (delta/s) . (delta/(s-a)) . (delta/(s-b)) . (delta/(s-c))

                   = delta^4 / [ s(s-a)(s-b)(s-c) ]

                   = delta^4 / delta^2            (Heron)

                   = delta^2                                        PROVED
```

## FULL PROOF of I4

```
  r1 r2 + r2 r3 + r3 r1
     = delta^2 [ 1/((s-a)(s-b)) + 1/((s-b)(s-c)) + 1/((s-c)(s-a)) ]

     = delta^2 . [ (s-c) + (s-a) + (s-b) ] / [ (s-a)(s-b)(s-c) ]

     = delta^2 . s / [ (s-a)(s-b)(s-c) ]

  But  (s-a)(s-b)(s-c) = delta^2 / s , so

     = delta^2 . s . s / delta^2
     = s^2                                                          PROVED

  CHECK (13,14,15): 10.5(12) + 12(14) + 14(10.5) = 126 + 168 + 147 = 441 = 21^2
```

## FULL PROOF of I5

```
  r1 - r = delta/(s-a) - delta/s = delta [ s - (s-a) ] / [ s(s-a) ] = delta.a/[s(s-a)]

  Similarly   r2 - r = delta.b/[s(s-b)]  ,  r3 - r = delta.c/[s(s-c)]

  Product = delta^3 . abc / [ s^3 (s-a)(s-b)(s-c) ]
          = delta^3 . abc / [ s^2 . s(s-a)(s-b)(s-c) ]
          = delta^3 . abc / [ s^2 . delta^2 ]
          = delta . abc / s^2

  Now abc = 4R delta  and  delta/s = r , so

          = delta . 4R delta / s^2 = 4R (delta/s)^2 = 4 R r^2       PROVED

  CHECK (13,14,15): (10.5-4)(12-4)(14-4) = 6.5 x 8 x 10 = 520
                    4 R r^2 = 4(8.125)(16) = 520                    MATCH
```

## PROOF of I7 (uses the R-form of r)

```
  cos A + cos B + cos C = 1 + 4 sin(A/2) sin(B/2) sin(C/2)     [standard trig identity]

  and  r = 4R sin(A/2) sin(B/2) sin(C/2)  from Topic 8,
  so   4 sin(A/2) sin(B/2) sin(C/2) = r/R.

  Therefore  cos A + cos B + cos C = 1 + r/R                       PROVED

  CHECK (13,14,15): cosA = 0.600000, cosB = 0.507692, cosC = 0.384615
                    sum  = 1.492308
                    1 + r/R = 1 + 4/8.125 = 1.492308               MATCH
```

## PROOF of I8

```
  sinA + sinB + sinC = a/(2R) + b/(2R) + c/(2R)
                     = (a + b + c)/(2R)
                     = 2s/(2R)
                     = s/R                                          PROVED

  CHECK (13,14,15): 13/16.25 + 14/16.25 + 15/16.25 = 42/16.25 = 2.5846
                    s/R = 21/8.125 = 2.5846                        MATCH
```

> **TRAP:** In the exam, do NOT try to prove these by drawing pictures or by chasing
> angles. Convert everything to delta and s in the FIRST line. Examiners award marks
> for that first substitution line. Even if you get stuck later, you keep 2-3 marks.

---

# TOPIC 10 — THE INCIRCLE, CIRCUMCIRCLE, EXCIRCLES AND THE DISTANCES BETWEEN CENTRES

## The four centres

| Centre | Symbol | Where it is | Formed by |
|--------|--------|-------------|-----------|
| Circumcentre | O | centre of circle through the 3 vertices | perpendicular bisectors of the sides |
| Incentre | I | centre of circle touching the 3 sides | internal bisectors of the 3 angles |
| Excentre opposite A | I1 | centre of the excircle touching side a | internal bisector of A + external bisectors of B and C |
| Orthocentre | H | meeting point of the altitudes | the 3 altitudes |

## Useful distances

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   OI^2  = R^2 - 2Rr                     [EULER'S FORMULA]         |
  |   OI1^2 = R^2 + 2R r1                                             |
  |   OI2^2 = R^2 + 2R r2                                             |
  |   OI3^2 = R^2 + 2R r3                                             |
  |                                                                   |
  |   AI  = r / sin(A/2)  = 4R sin(B/2) sin(C/2)                      |
  |   AI1 = r1 / sin(A/2) = 4R cos(B/2) cos(C/2)                      |
  |                                                                   |
  |   Distance from circumcentre O to side a   =  R cos A             |
  |   Distance from orthocentre H to vertex A  =  2R cos A            |
  |                                                                   |
  |   I1 I2 = 4R cos(C/2)     (and cyclically)                        |
  |   I I1  = a / cos(A/2)                                            |
  |                                                                   |
  +-------------------------------------------------------------------+
```

Because `OI^2 = R^2 - 2Rr` must be >= 0, we get **Euler's inequality: R >= 2r**,
with equality only for an equilateral triangle. That is a nice 2-mark fact.

**WORKED EXAMPLE 10.1**
For a = 13, b = 14, c = 15, find the distance between the circumcentre and the incentre.

```
  R = 8.125 , r = 4

  OI^2 = R^2 - 2Rr = 65.640625 - 2(8.125)(4)
                   = 65.640625 - 65
                   = 0.640625

  OI = sqrt(0.640625) = 0.8004

  SENSE CHECK: R = 8.125 and 2r = 8, so R > 2r (just barely) — the triangle is
  nearly, but not quite, equilateral in that sense. OI comes out small. Consistent.
```

**Tangent lengths** (asked occasionally):

```
  From vertex A, the tangent length to the INCIRCLE  = s - a
  From vertex B, the tangent length to the INCIRCLE  = s - b
  From vertex C, the tangent length to the INCIRCLE  = s - c

  From vertex A, the tangent length to the EXCIRCLE opposite A = s
```

---

# TOPIC 11 — SOLUTION OF TRIANGLES (the four cases)

"Solving a triangle" means: given three of the six measurements, find the other three.

```
  +---------------------------------------------------------------------------+
  |  CASE  |  YOU ARE GIVEN            |  USE                    |  ANSWERS   |
  +--------+---------------------------+-------------------------+------------+
  |   1    |  three SIDES  a, b, c     |  cosine rule OR         |  exactly   |
  |        |  (SSS)                    |  tan(A/2) half-angle    |  ONE       |
  +--------+---------------------------+-------------------------+------------+
  |   2    |  two sides + INCLUDED     |  cosine rule for the    |  exactly   |
  |        |  angle, e.g. b, c, A (SAS)|  3rd side, then sine    |  ONE       |
  |        |                           |  rule OR tangent rule   |            |
  +--------+---------------------------+-------------------------+------------+
  |   3    |  two ANGLES + one side    |  3rd angle = 180 - sum, |  exactly   |
  |        |  e.g. A, B, a  (ASA/AAS)  |  then sine rule         |  ONE       |
  +--------+---------------------------+-------------------------+------------+
  |   4    |  two sides + a NON-       |  sine rule for sin B    |  0, 1 or 2 |
  |        |  included angle a, b, A   |  --> AMBIGUOUS CASE     |  triangles |
  |        |  (SSA)                    |                         |            |
  +---------------------------------------------------------------------------+
```

## CASE 1 — three sides given (SSS)

**Method:** use the cosine rule for two angles, then `C = 180 - A - B`.
If the numbers are ugly, the half-angle tangent formula is safer.

**WORKED EXAMPLE 11.1** — a = 7, b = 8, c = 9. Solve the triangle.

```
  cos A = (64 + 81 - 49)/144 = 96/144 = 0.666667  ->  A = 48.19 degrees
  cos B = (81 + 49 - 64)/126 = 66/126 = 0.523810  ->  B = 58.41 degrees
  C = 180 - 48.19 - 58.41 = 73.40 degrees

  CHECK by the third cosine:
  cos C = (49 + 64 - 81)/112 = 32/112 = 0.285714  ->  C = 73.40    MATCH
```

## CASE 2 — two sides and the included angle (SAS)

**Method A (fastest):** cosine rule for the third side, then sine rule.
**Method B (the "book" method):** Napier's analogy.

**WORKED EXAMPLE 11.2** — b = 8, c = 3, A = 60 degrees. Solve.

```
  METHOD A
  a^2 = 64 + 9 - 2(8)(3)(0.5) = 49  ->  a = 7
  sin B = b sinA / a = 8(0.86603)/7 = 0.98974  ->  B = 81.79 or 98.21 ?
        Since b (=8) is the LARGEST side, B must be the LARGEST angle,
        so B = 98.21 degrees.
  C = 180 - 60 - 98.21 = 21.79 degrees

  METHOD B (safer — no ambiguity at all)
  (B + C)/2 = 90 - A/2 = 60
  tan((B-C)/2) = ((8-3)/(8+3)) cot 30 = (5/11)(1.73205) = 0.78730
  (B - C)/2 = 38.21
  B = 60 + 38.21 = 98.21 ,  C = 60 - 38.21 = 21.79
  Then a = b sinA/sinB = 8(0.86603)/0.98974 = 7.00        MATCH
```

> **TRAP in Method A:** `arcsin` on a calculator always gives the ACUTE answer.
> If the side you are working from is the largest side, the angle must be the largest
> angle, which may be obtuse. Method B never has this problem — prefer it.

## CASE 3 — two angles and a side (ASA or AAS)

**Method:** third angle by subtraction, then two applications of the sine rule.

**WORKED EXAMPLE 11.3** — A = 45, B = 75, a = 10. Solve.

```
  C = 180 - 45 - 75 = 60

  b = a sinB/sinA = 10 (0.965926)/(0.707107) = 13.660
  c = a sinC/sinA = 10 (0.866025)/(0.707107) = 12.247

  CHECK: order of sides matches order of angles:
         A=45 < C=60 < B=75  and  a=10 < c=12.25 < b=13.66      CONSISTENT
```

## CASE 4 — two sides and a NON-included angle (SSA) — THE AMBIGUOUS CASE

Given `a`, `b` and angle `A` (note: A is opposite a, but b is the "spare" side).

```
  Sine rule:   sin B = (b sin A) / a
```

Now count the possibilities:

```
  +----------------------------------------------------------------------+
  |  CONDITION                          |  NUMBER OF TRIANGLES           |
  +-------------------------------------+--------------------------------+
  |  b sinA > a    (sinB > 1)           |  NONE — impossible             |
  |  b sinA = a    (sinB = 1)           |  exactly ONE, right-angled at B|
  |  b sinA < a  AND  a < b             |  TWO (B acute and B obtuse)    |
  |  a >= b                             |  exactly ONE (B must be acute) |
  +----------------------------------------------------------------------+
```

**The picture of why there are two:**

```
        Swing side a from C. It can hit the base line in TWO places.

                    C
                   /|\
                  / | \
               b /  |  \  a          a
                /   |   \  \        /
               /    |    \  \      /
              A-----+-----B2--\---B1
                            (two possible positions of B)

     Both give a valid triangle with the same a, b and A.
```

**WORKED EXAMPLE 11.4 — TWO triangles**
a = 6, b = 8, A = 30 degrees.

```
  sin B = b sinA / a = 8(0.5)/6 = 0.666667

  b sinA = 4 , and a = 6 , so b sinA < a.  Also a = 6 < b = 8.
  Therefore TWO triangles.

  TRIANGLE 1:  B = 41.81 degrees
               C = 180 - 30 - 41.81 = 108.19
               c = a sinC/sinA = 6(0.949927)/0.5 = 11.399

  TRIANGLE 2:  B = 180 - 41.81 = 138.19 degrees
               C = 180 - 30 - 138.19 = 11.81
               c = 6 (0.204631)/0.5 = 2.456

  CHECK Triangle 1 with the cosine rule:
     cos A should be (b^2+c^2-a^2)/(2bc) = (64 + 129.94 - 36)/(2 x 8 x 11.399)
                                         = 157.94/182.38 = 0.8660 = cos30   CORRECT
  CHECK Triangle 2:
     (64 + 6.03 - 36)/(2 x 8 x 2.456) = 34.03/39.30 = 0.8660 = cos30        CORRECT
```

**WORKED EXAMPLE 11.5 — NO triangle**
a = 4, b = 10, A = 30 degrees.

```
  sin B = 10(0.5)/4 = 1.25 > 1.  Impossible.  NO triangle exists.
```

**WORKED EXAMPLE 11.6 — exactly ONE (right-angled)**
a = 5, b = 10, A = 30 degrees.

```
  sin B = 10(0.5)/5 = 1  ->  B = 90 degrees exactly.  ONE right triangle.
  C = 60 , c = a sinC/sinA = 5(0.866025)/0.5 = 8.660 ( = 5 sqrt3 )
  Check: 5^2 + 8.660^2 = 25 + 75 = 100 = 10^2.     CORRECT (b is the hypotenuse)
```

> **TRAP:** The ambiguity only happens in the SSA case. Cases 1, 2 and 3 always give
> exactly one triangle. Do not waste time hunting for a second answer there.

---

# TOPIC 12 — MEDIANS AND ANGLE BISECTORS

## Length of a median

A **median** joins a vertex to the MIDPOINT of the opposite side.

```
                A
                /\
               /  \
            c /    \ b
             /      \
            /   m(a) \
           B----D-----C     D is the midpoint of BC,  BD = DC = a/2
                a           AD = m(a) = the median from A
```

```
  +-----------------------------------------------------------+
  |                 1                                         |
  |    m(a)  =  --------- sqrt( 2b^2 + 2c^2 - a^2 )           |
  |                 2                                         |
  |                                                           |
  |    m(b)  =  (1/2) sqrt( 2c^2 + 2a^2 - b^2 )               |
  |    m(c)  =  (1/2) sqrt( 2a^2 + 2b^2 - c^2 )               |
  |                                                           |
  |    m(a)^2 + m(b)^2 + m(c)^2  =  (3/4)(a^2 + b^2 + c^2)    |
  +-----------------------------------------------------------+
```

**Where it comes from:** apply the cosine rule in triangle ABD with angle B:

```
  AD^2 = c^2 + (a/2)^2 - 2 . c . (a/2) . cos B
       = c^2 + a^2/4 - ac . (c^2 + a^2 - b^2)/(2ca)
       = c^2 + a^2/4 - (c^2 + a^2 - b^2)/2
       = (4c^2 + a^2 - 2c^2 - 2a^2 + 2b^2)/4
       = (2b^2 + 2c^2 - a^2)/4

  So m(a) = (1/2) sqrt(2b^2 + 2c^2 - a^2)                PROVED
```

**WORKED EXAMPLE 12.1** — a = 13, b = 14, c = 15. Find all three medians.

```
  m(a) = (1/2) sqrt(2(196) + 2(225) - 169) = (1/2) sqrt(392 + 450 - 169)
       = (1/2) sqrt(673) = (1/2)(25.942) = 12.971

  m(b) = (1/2) sqrt(2(225) + 2(169) - 196) = (1/2) sqrt(450 + 338 - 196)
       = (1/2) sqrt(592) = (1/2)(24.331) = 12.166

  m(c) = (1/2) sqrt(2(169) + 2(196) - 225) = (1/2) sqrt(338 + 392 - 225)
       = (1/2) sqrt(505) = (1/2)(22.472) = 11.236

  CHECK: m(a)^2 + m(b)^2 + m(c)^2 = 673/4 + 592/4 + 505/4 = 1770/4 = 442.5
         (3/4)(a^2+b^2+c^2) = (3/4)(169 + 196 + 225) = (3/4)(590) = 442.5   MATCH
```

## Length of an internal angle bisector

The bisector from A meets BC at E and bisects angle A.

```
  +-----------------------------------------------------------+
  |                2 b c cos(A/2)                             |
  |    t(a)  =  ---------------------                         |
  |                    b + c                                  |
  |                                                           |
  |    similarly  t(b) = 2ca cos(B/2)/(c+a)                   |
  |               t(c) = 2ab cos(C/2)/(a+b)                   |
  |                                                           |
  |    and the bisector divides side a in the ratio  c : b    |
  |    i.e.  BE : EC = c : b                                  |
  +-----------------------------------------------------------+
```

**Where it comes from:** area(ABE) + area(AEC) = area(ABC):

```
  (1/2) c . t(a) . sin(A/2) + (1/2) b . t(a) . sin(A/2) = (1/2) bc sinA

  (1/2) t(a) sin(A/2) (b + c) = (1/2) bc . 2 sin(A/2) cos(A/2)

  t(a) (b + c) = 2 bc cos(A/2)

  t(a) = 2bc cos(A/2)/(b + c)                            PROVED
```

**WORKED EXAMPLE 12.2** — a = 13, b = 14, c = 15. Find the bisector from A.

```
  s = 21, s - a = 8
  cos(A/2) = sqrt( s(s-a)/(bc) ) = sqrt(21 x 8/(14 x 15)) = sqrt(168/210)
           = sqrt(0.8) = 0.894427

  t(a) = 2(14)(15)(0.894427)/(14 + 15) = 420(0.894427)/29 = 375.66/29 = 12.954

  SENSE CHECK: the bisector should be a bit shorter than the median m(a) = 12.971
  when the triangle is nearly balanced. 12.954 < 12.971.        CONSISTENT
```

---

# TOPIC 13 — HEIGHTS AND DISTANCES (the practical application)

These questions use the sine and cosine rules on a real-life triangle.
Two words you must know:

```
  ANGLE OF ELEVATION            ANGLE OF DEPRESSION
  --------------------          --------------------
  looking UP from horizontal    looking DOWN from horizontal

            /|                     O------- horizontal
           / |                      \  ) angle of depression
          /  | h                     \
         /th)|                        \
   O-----+---+                         \
     horizontal                         X
```

**WORKED EXAMPLE 13.1**
From a point on the ground the angle of elevation of the top of a tower is 30 degrees.
Walking 40 m towards the tower, the elevation becomes 60 degrees. Find the height.

```
                          T
                          /|
                         / |
                        /  | h
                       /   |
              30  /  60|   |
          P------Q------+---+
          <--40--><-x-->

  In triangle PQT:   angle TPQ = 30 , exterior angle TQ(base) = 60,
                     so angle PTQ = 60 - 30 = 30.
                     Triangle PQT is isosceles:  QT = PQ = 40.

  In right triangle at the base:  h = QT sin60 = 40 x 0.866025 = 34.64 m

  CHECK: horizontal distance from Q = 40 cos60 = 20.
         From P the distance is 40 + 20 = 60.
         tan30 = 34.64/60 = 0.5774 = tan30.               CORRECT

  HEIGHT = 34.64 m  ( = 20 sqrt(3) m )
```

**WORKED EXAMPLE 13.2**
Two ships leave a port. One sails 12 km on a bearing making 40 degrees with the other's
course, which is 15 km. How far apart are they?

```
  This is SAS. Use the cosine rule:

  d^2 = 12^2 + 15^2 - 2(12)(15) cos40
      = 144 + 225 - 360(0.766044)
      = 369 - 275.78
      = 93.22
  d = 9.655 km

  SENSE CHECK: the answer must lie between 15 - 12 = 3 and 15 + 12 = 27.  It does.
```

---

# TOPIC 14 — A COLLECTION OF RESULTS THAT KEEP APPEARING

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   a^2 cot A + b^2 cot B + c^2 cot C   =  4 delta                   |
  |                                                                   |
  |   cot A + cot B + cot C  =  (a^2 + b^2 + c^2)/(4 delta)            |
  |                                                                   |
  |   a cos A + b cos B + c cos C  =  4R sinA sinB sinC = 2 delta / R  |
  |                                                                   |
  |   a^3 cos(B-C) + b^3 cos(C-A) + c^3 cos(A-B)  =  3 a b c          |
  |                                                                   |
  |   cot(A/2) + cot(B/2) + cot(C/2)  =  s^2 / delta                   |
  |                                                                   |
  |   cos^2(A/2)/a + cos^2(B/2)/b + cos^2(C/2)/c  =  s^2 / (abc)       |
  |                                                                   |
  |   If a^2 + b^2 + c^2 = 8R^2 , the triangle is RIGHT-ANGLED         |
  |                                                                   |
  +-------------------------------------------------------------------+
```

**PROOF that a^2 cot A + b^2 cot B + c^2 cot C = 4 delta**

```
  a^2 cot A = (2R sinA)^2 . cosA/sinA = 4R^2 sinA cosA = 2R^2 sin 2A

  Sum = 2R^2 ( sin2A + sin2B + sin2C )
      = 2R^2 . 4 sinA sinB sinC              [standard identity in a triangle]
      = 8 R^2 sinA sinB sinC

  And  delta = (1/2) ab sinC = (1/2)(2R sinA)(2R sinB) sinC = 2R^2 sinA sinB sinC

  So the sum = 4 delta                                             PROVED

  CHECK with 3,4,5 (C = 90):
     cotA = 0.8/0.6 = 1.3333 , a^2 cotA = 9(1.3333) = 12
     cotB = 0.6/0.8 = 0.75   , b^2 cotB = 16(0.75)  = 12
     cotC = 0                , c^2 cotC = 0
     Sum = 24 ,  4 delta = 4(6) = 24                               MATCH
```

**PROOF that a^3 cos(B-C) + b^3 cos(C-A) + c^3 cos(A-B) = 3abc**  *(classic 7 marks)*

```
  Take the first term:
     a^3 cos(B-C) = a^2 . a cos(B-C)
                  = a^2 . 2R sinA cos(B-C)
                  = a^2 . 2R sin(B+C) cos(B-C)          [since A = 180-(B+C)]
                  = a^2 . R [ sin2B + sin2C ]           [2 sinX cosY = sin(X+Y)+sin(X-Y)]
                  = a^2 . R [ 2 sinB cosB + 2 sinC cosC ]
                  = a^2 [ (2R sinB) cosB + (2R sinC) cosC ]
                  = a^2 [ b cosB + c cosC ]

  By the same working:
     b^3 cos(C-A) = b^2 [ c cosC + a cosA ]
     c^3 cos(A-B) = c^2 [ a cosA + b cosB ]

  Adding and collecting:
     LHS = a cosA (b^2 + c^2) + b cosB (c^2 + a^2) + c cosC (a^2 + b^2)

  Substitute the cosine rule and put x = a^2, y = b^2, z = c^2.
  Multiplying through by 2abc turns the statement into

     x(y+z)(y+z-x) + y(z+x)(z+x-y) + z(x+y)(x+y-z) = 6xyz

  Expand the first bracket:  x(y+z)^2 - x^2(y+z), and similarly for the others.

     SUM x(y+z)^2  = (xy^2 + xz^2 + yz^2 + yx^2 + zx^2 + zy^2) + 6xyz
     SUM x^2(y+z)  = (x^2y + x^2z + y^2z + y^2x + z^2x + z^2y)

  Those two bracketed sums are identical, so the difference is 6xyz.  PROVED.

  NUMERICAL CHECK with a=3, b=4, c=5 (A=36.87, B=53.13, C=90):
     27 cos(53.13-90)  = 27 cos(-36.87) = 27(0.8)  = 21.6
     64 cos(90-36.87)  = 64 cos(53.13)  = 64(0.6)  = 38.4
    125 cos(36.87-53.13)= 125 cos(-16.26)= 125(0.96) = 120.0
     Sum = 180.0 ,   3abc = 3(60) = 180                             MATCH
```

**PROOF that a^2 + b^2 + c^2 = 8R^2 implies a right angle**

```
  a = 2R sinA etc, so   4R^2 ( sin^2 A + sin^2 B + sin^2 C ) = 8 R^2
                        sin^2 A + sin^2 B + sin^2 C = 2

  Standard triangle identity:  sin^2A + sin^2B + sin^2C = 2 + 2 cosA cosB cosC

  So  2 + 2 cosA cosB cosC = 2   ->   cosA cosB cosC = 0

  A product is zero only if a factor is zero, so one of cosA, cosB, cosC is 0,
  i.e. one angle is 90 degrees. The triangle is RIGHT-ANGLED.        PROVED
```

---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

```
  [ ]  Did I draw and LABEL the triangle? (Free method marks.)

  [ ]  Is a opposite A, b opposite B, c opposite C in my diagram?

  [ ]  Did I compute s = (a+b+c)/2 BEFORE anything else in a numerical question?

  [ ]  Did I check (s-a) + (s-b) + (s-c) = s ?

  [ ]  Are all of s-a, s-b, s-c POSITIVE?

  [ ]  In Heron's formula, did I take the SQUARE ROOT at the end?

  [ ]  Did I use degrees mode on the calculator, not radians?

  [ ]  In sin(A/2), did I use the two brackets WITHOUT the letter a, i.e. (s-b)(s-c)?

  [ ]  In an identity proof, did I write "r = delta/s, r1 = delta/(s-a), ..." as my
       very first line? Those substitution marks are awarded even if I get stuck.

  [ ]  Did I state 2s = a + b + c whenever I replaced 2s - a - b by c?

  [ ]  In the SSA case, did I test whether TWO triangles are possible?

  [ ]  Did I finish with the word "PROVED" or "HENCE PROVED" and box the answer?

  [ ]  Did I sanity-check the answer? (Biggest side faces biggest angle.
       Area positive. R >= 2r. Sum of angles = 180.)

  [ ]  In a numerical answer, did I write the UNITS (cm, m, sq. units)?
```

---

## THE FIVE MISTAKES THAT COST THE MOST MARKS

| # | Mistake | Fix |
|---|---------|-----|
| 1 | Mixing up which bracket goes with sin(A/2) | sin gets the two that are NOT its own letter |
| 2 | Forgetting the square root in Heron | delta^2 = s(s-a)(s-b)(s-c), so delta = sqrt(...) |
| 3 | Writing r1 = delta/(s-b) | r1 goes with (s - a). The subscript matches the letter subtracted |
| 4 | Using the sine rule without a matched side-angle pair | If the angle is BETWEEN the two sides, use the cosine rule |
| 5 | Taking the acute value of arcsin in the SSA case | Check whether the obtuse partner also works |
