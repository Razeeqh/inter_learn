# De Moivre's Theorem — AP Board Previous-Year Questions

**Board:** Board of Intermediate Education, Andhra Pradesh (BIEAP)
**Paper:** Maths IIA · **Chapter 2 — De Moivre's Theorem**

> **About the year tags:** BIEAP recycles the same questions across many sessions.
> So these are grouped by "how often they appear" rather than by a single year.
> Before your exam, cross-check with the official papers at **bie.ap.gov.in**.
> Never trust a study guide that claims a question came from one exact year.

**Where this chapter appears in the Maths IIA paper:**

```
  Section A  (2 marks each, answer ALL 10)   ->  usually Q2 , sometimes Q1
  Section B  (4 marks each, answer any 5)    ->  occasionally Q11 or Q12
  Section C  (7 marks each, answer any 5)    ->  Q14 almost every session

  Paper total:   10 x 2  +  5 x 4  +  5 x 7   =   20 + 20 + 35  =  75
```

> **Honest note:** this chapter is one of the few in Maths IIA that reliably
> supplies a **full 7-mark Section C question**. In most sessions Q14 is either
> "find all the values of ..." or one of the four standard proofs in Section C
> below. Learn those four and you have banked 7 marks. Add the guaranteed 2-mark
> omega question and you are at 9 marks from one short chapter.

---

# ===============================================================
# SECTION A — VERY SHORT ANSWER (2 marks)
# These are your GUARANTEED marks. Answer all 10 in the paper.
# ===============================================================

## Topic: De Moivre for an integral index

### Q A1
State De Moivre's theorem for an integral index.

**ANSWER:**
```
  For every INTEGER n (positive, zero or negative) and every real t,

        ( cos t + i sin t )^n  =  cos n t + i sin n t
```
Also acceptable, and worth adding: "More generally
`[ r(cos t + i sin t) ]^n = r^n ( cos nt + i sin nt )`."

---

### Q A2
If n is an integer, show that `(cos t + i sin t)^n + (cos t - i sin t)^n = 2 cos nt`.

**ANSWER:**
```
  cos t - i sin t = cis(-t)

  (cis t)^n  + (cis(-t))^n  =  cis(nt) + cis(-nt)

     = ( cos nt + i sin nt ) + ( cos nt - i sin nt )

     = 2 cos nt                                              [the i-parts cancel]
```
**2 cos nt**

---

### Q A3
Simplify `(cos t + i sin t)^4 / (sin t + i cos t)^4`.

**ANSWER:**
```
  First fix the bottom:   sin t + i cos t = cos(pi/2 - t) + i sin(pi/2 - t)
                                          = cis( pi/2 - t )

  Top    = cis( 4t )
  Bottom = cis( 4(pi/2 - t) ) = cis( 2pi - 4t )

  Quotient = cis( 4t - 2pi + 4t ) = cis( 8t - 2pi ) = cis( 8t )
```
**`cos 8t + i sin 8t`**

---

### Q A4
Find the value of `(cos t + i sin t)(cos 2t + i sin 2t) ... (cos nt + i sin nt)`.

**ANSWER:**
```
  Multiplying cis terms ADDS the angles:

     cis( t + 2t + 3t + ... + nt )  =  cis( t (1 + 2 + ... + n) )

                                                      n(n+1)
                                    =  cis  ( t x ----------- )
                                                        2
```
**`cos[ n(n+1)t/2 ] + i sin[ n(n+1)t/2 ]`**

---

### Q A5
Find `(1 + i)^8`.

**ANSWER:**
```
  1 + i = sqrt2 cis( pi/4 )

  (1 + i)^8 = (sqrt2)^8 cis( 8 x pi/4 ) = 2^4 cis( 2 pi ) = 16 ( 1 + 0i )

  CHECK:  (1+i)^2 = 2i ,  (1+i)^4 = (2i)^2 = -4 ,  (1+i)^8 = 16
```
**16**

---

### Q A6
Find the value of `(1 - i sqrt3)^3`.

**ANSWER:**
```
  r = sqrt(1 + 3) = 2 .  The point (1, -sqrt3) is in Q4, alpha = pi/3 ,
  so the amplitude is -pi/3 .

  1 - i sqrt3 = 2 cis( -pi/3 )

  ( 1 - i sqrt3 )^3 = 2^3 cis( -pi ) = 8 ( cos pi - i sin pi ) = 8(-1) = -8
```
**-8**

---

### Q A7
Find `(sqrt3 + i)^6`.

**ANSWER:**
```
  r = sqrt(3 + 1) = 2 ,  Q1 ,  alpha = tan^-1(1/sqrt3) = pi/6

  sqrt3 + i = 2 cis( pi/6 )

  ( sqrt3 + i )^6 = 2^6 cis( 6 x pi/6 ) = 64 cis( pi ) = 64 (-1) = -64
```
**-64**

---

### Q A8
Find the value of `(1 + i sqrt3)^3 + (1 - i sqrt3)^3`.

**ANSWER:**
```
  1 + i sqrt3 = 2 cis( pi/3 )       1 - i sqrt3 = 2 cis( -pi/3 )

  Sum = 2^3 cis(pi) + 2^3 cis(-pi) = 8(-1) + 8(-1) = -16

  (Or use the standard result 2^(n+1) cos(n pi/3) with n = 3 :
       2^4 cos(pi) = 16 x (-1) = -16 )
```
**-16**

---

### Q A9
Find the least positive integer n for which `( (1 + i)/(1 - i) )^n = 1`.

**ANSWER:**
```
   1 + i     (1 + i)(1 + i)     1 + 2i - 1      2i
  -------- = ---------------- = ------------ = ----- = i
   1 - i       1^2 + 1^2             2           2

  So we need  i^n = 1 , which happens when 4 divides n.

  The least positive such n is 4.
```
**n = 4**

---

## Topic: Cube roots of unity

### Q A10
If `w` is a complex cube root of unity, find the value of `(1 - w + w^2)^3`.

**ANSWER:**
```
  From 1 + w + w^2 = 0  we get  1 + w^2 = -w .

  1 - w + w^2 = ( 1 + w^2 ) - w = -w - w = -2w

  ( -2w )^3 = -8 w^3 = -8 (1) = -8                            [since w^3 = 1]
```
**-8**

---

### Q A11
If `w` is a complex cube root of unity, find `(1 - w + w^2)^5 + (1 + w - w^2)^5`.

**ANSWER:**
```
  1 - w + w^2 = -2w            1 + w - w^2 = (1 + w) - w^2 = -w^2 - w^2 = -2w^2

  (-2w)^5 + (-2w^2)^5 = -32 w^5 - 32 w^10

  w^5  : 5 = 3(1) + 2   -> w^2
  w^10 : 10 = 3(3) + 1  -> w

  = -32 ( w^2 + w ) = -32 ( -1 ) = 32
```
**32**

---

### Q A12
Find the value of `(1 + w)(1 + w^2)(1 + w^4)(1 + w^8)`.

**ANSWER:**
```
  Reduce the powers by the remainder on division by 3:
        w^4 = w      w^8 = w^2

  = (1 + w)(1 + w^2)(1 + w)(1 + w^2)
  = (-w^2)(-w)(-w^2)(-w)                    [1 + w = -w^2 , 1 + w^2 = -w]
  = w^2 . w . w^2 . w                       [four minus signs -> plus]
  = w^6 = ( w^3 )^2 = 1
```
**1**

---

### Q A13
Show that `(1 - w)(1 - w^2)(1 - w^4)(1 - w^5) = 9`.

**ANSWER:**
```
  w^4 = w  and  w^5 = w^2 , so the product is [ (1 - w)(1 - w^2) ]^2 .

  (1 - w)(1 - w^2) = 1 - w^2 - w + w^3
                   = 1 - ( w + w^2 ) + 1
                   = 1 - ( -1 ) + 1  =  3

  Product = 3^2 = 9
```
**9**

---

### Q A14
If `w` is a complex cube root of unity, find `w^2018`.

**ANSWER:**
```
  Only the remainder of the power on division by 3 matters, and the remainder
  of a number on division by 3 equals the remainder of its DIGIT SUM.

     2 + 0 + 1 + 8 = 11  ->  1 + 1 = 2   ->  remainder 2

  So w^2018 = w^2
```
**`w^2`**

---

### Q A15
Simplify `(a + b w + c w^2) / (c + a w + b w^2)`.

**ANSWER:**
```
  Multiply the DENOMINATOR by w^2 :

     w^2 ( c + a w + b w^2 ) = c w^2 + a w^3 + b w^4
                             = c w^2 + a + b w              [w^3=1 , w^4=w]
                             = a + b w + c w^2   = NUMERATOR

  So numerator = w^2 x denominator, hence the fraction = w^2.
```
**`w^2`**

---

### Q A16
Prove that `(1 + w)^3 = -1`.

**ANSWER:**
```
  1 + w = -w^2

  ( -w^2 )^3 = - w^6 = - ( w^3 )^2 = - (1)^2 = -1
```
**-1**

---

## Topic: Roots of unity and roots of complex numbers

### Q A17
Find the sum and the product of the fifth roots of unity.

**ANSWER:**
```
  SUM      = 0                          (true for the n nth roots of unity, n>=2)

  PRODUCT  = (-1)^(n+1) = (-1)^(5+1) = (-1)^6 = +1

  (n = 5 is odd, so the product is +1.)
```
**Sum = 0, Product = 1**

---

### Q A18
Find the sum and the product of the fourth roots of unity, and verify them.

**ANSWER:**
```
  The fourth roots of unity are  1 , i , -1 , -i .

  SUM     = 1 + i - 1 - i = 0                                  matches "sum = 0"

  PRODUCT = 1 . i . (-1) . (-i) = i x i = i^2 = -1
            formula: (-1)^(4+1) = (-1)^5 = -1                  matches
```
**Sum = 0, Product = -1**

---

### Q A19
Find the cube roots of 8.

**ANSWER:**
```
  The cube roots of any number = ( one cube root ) x ( 1 , w , w^2 ).

  One cube root of 8 is 2, so the three cube roots are

        2 ,  2w ,  2w^2   =   2 ,  -1 + i sqrt3 ,  -1 - i sqrt3

  CHECK the sum: 2 + (-1 + i sqrt3) + (-1 - i sqrt3) = 0 , as it must be for
  z^3 - 8 = 0 (no z^2 term).
```
**`2 , -1 + i sqrt3 , -1 - i sqrt3`**

---

### Q A20
Find all the cube roots of `-1`.

**ANSWER:**
```
  -1 = cos pi + i sin pi = cis( 2k pi + pi )

  cube roots = cis( (2k + 1) pi / 3 ) ,  k = 0, 1, 2

     k = 0 :  cis( pi/3 )   =  1/2 + i sqrt3/2
     k = 1 :  cis( pi )     =  -1
     k = 2 :  cis( 5pi/3 )  =  1/2 - i sqrt3/2

  CHECK:  [ cis(pi/3) ]^3 = cis(pi) = -1                        correct
```
**`-1 , 1/2 + i sqrt3/2 , 1/2 - i sqrt3/2`**

---

### Q A21
How many values does `(1 + i)^(3/5)` have?

**ANSWER:**
```
  For a rational index p/q in LOWEST TERMS, there are exactly q values.

  Here p/q = 3/5 , already in lowest terms, so q = 5.
```
**5 values**

---

### Q A22
If `x = cos t + i sin t`, find the value of `x^6 + 1/x^6`.

**ANSWER:**
```
  x^6 = cis( 6t )        and       1/x^6 = cis( -6t )

  x^6 + 1/x^6 = ( cos 6t + i sin 6t ) + ( cos 6t - i sin 6t ) = 2 cos 6t
```
**`2 cos 6t`**

---

### Q A23
If A, B, C are the angles of a triangle and `x = cis A`, `y = cis B`, `z = cis C`,
find the value of `xyz`.

**ANSWER:**
```
  x y z = cis( A + B + C )

  In a triangle  A + B + C = pi , so

  x y z = cis( pi ) = cos pi + i sin pi = -1
```
**-1**

---

### Q A24
Write `-1 - i` in modulus-amplitude form and hence find `(-1 - i)^4`.

**ANSWER:**
```
  r = sqrt(1 + 1) = sqrt2 .  The point (-1, -1) is in Q3, alpha = pi/4 ,
  so the principal amplitude is  alpha - pi = pi/4 - pi = -3pi/4 .

     -1 - i = sqrt2 cis( -3pi/4 )

  (-1 - i)^4 = (sqrt2)^4 cis( -3 pi ) = 4 cis( -3pi ) = 4 ( -1 ) = -4

  CHECK: (-1-i)^2 = 1 + 2i + i^2 = 2i ; (2i)^2 = -4                correct
```
**`sqrt2 cis(-3pi/4)` and `(-1 - i)^4 = -4`**

---

# ===============================================================
# SECTION B — SHORT ANSWER (4 marks)
# Answer any 5 of 7. These are worth 20 marks together.
# ===============================================================

### Q B1
Simplify

```
        ( cos 2t - i sin 2t )^7  ( cos 3t + i sin 3t )^-5
       -------------------------------------------------------
        ( cos 4t + i sin 4t )^12 ( cos 5t - i sin 5t )^-6
```

**ANSWER:**
```
  STEP 1  Turn every bracket into cis( signed angle ).

     (cos 2t - i sin 2t)^7   = [ cis(-2t) ]^7   = cis( -14 t )
     (cos 3t + i sin 3t)^-5  = [ cis( 3t) ]^-5  = cis( -15 t )
     (cos 4t + i sin 4t)^12  = [ cis( 4t) ]^12  = cis(  48 t )
     (cos 5t - i sin 5t)^-6  = [ cis(-5t) ]^-6  = cis(  30 t )

  STEP 2  Combine.

     TOP    = cis(-14t) x cis(-15t) = cis( -29 t )
     BOTTOM = cis( 48t) x cis( 30t) = cis(  78 t )

  STEP 3  Divide (subtract the angles).

     cis( -29t - 78t ) = cis( -107 t )
```
**`cos 107t - i sin 107t`**

---

### Q B2
If n is a positive integer, show that
`(1 + i)^n + (1 - i)^n = 2^((n+2)/2) cos( n pi / 4 )`.

**ANSWER:**
```
  1 + i = sqrt2 cis( pi/4 )       [ r = sqrt2 , Q1 , alpha = pi/4 ]
  1 - i = sqrt2 cis( -pi/4 )      [ r = sqrt2 , Q4 , alpha = pi/4 ]

  By De Moivre's theorem:

     (1 + i)^n = 2^(n/2) [ cos(n pi/4) + i sin(n pi/4) ]
     (1 - i)^n = 2^(n/2) [ cos(n pi/4) - i sin(n pi/4) ]

  Adding, the imaginary parts cancel:

     (1+i)^n + (1-i)^n = 2^(n/2) . 2 cos( n pi/4 )
                       = 2^(n/2 + 1) cos( n pi/4 )
                       = 2^((n+2)/2) cos( n pi / 4 )                  [proved]

  CHECK n = 4 :  LHS = -4 + (-4) = -8 ;  RHS = 2^3 cos pi = -8       correct
  CHECK n = 8 :  LHS = 16 + 16 = 32 ;    RHS = 2^5 cos 2pi = 32      correct
```

---

### Q B3
If `alpha` and `beta` are the roots of `x^2 - 2x + 4 = 0`, prove that
`alpha^n + beta^n = 2^(n+1) cos( n pi / 3 )`.

**ANSWER:**
```
  STEP 1  Solve the quadratic.

     x = [ 2 +/- sqrt(4 - 16) ] / 2 = [ 2 +/- sqrt(-12) ] / 2
       = [ 2 +/- 2 i sqrt3 ] / 2 = 1 +/- i sqrt3

     alpha = 1 + i sqrt3 ,   beta = 1 - i sqrt3

  STEP 2  Polar form.  r = sqrt(1 + 3) = 2 ; alpha is in Q1 with
          tan^-1(sqrt3) = pi/3 :

     alpha = 2 cis( pi/3 )     beta = 2 cis( -pi/3 )

  STEP 3  De Moivre.

     alpha^n = 2^n [ cos(n pi/3) + i sin(n pi/3) ]
     beta^n  = 2^n [ cos(n pi/3) - i sin(n pi/3) ]

  STEP 4  Add.

     alpha^n + beta^n = 2^n . 2 cos( n pi/3 ) = 2^(n+1) cos( n pi / 3 )
                                                                      [proved]

  CHECK n = 1 : LHS = 2 ; RHS = 4 cos(pi/3) = 4(1/2) = 2             correct
  CHECK n = 2 : alpha^2 + beta^2 = (alpha+beta)^2 - 2 alpha beta
                                 = 4 - 8 = -4 ;
                RHS = 8 cos(2pi/3) = 8(-1/2) = -4                    correct
```

---

### Q B4
Using De Moivre's theorem, prove that `cos 3t = 4 cos^3 t - 3 cos t` and
`sin 3t = 3 sin t - 4 sin^3 t`.

**ANSWER:**
```
  Write c = cos t , s = sin t .

  By De Moivre:   cos 3t + i sin 3t = ( c + i s )^3

  Expand by the binomial theorem:

     ( c + is )^3 = c^3 + 3 c^2 (is) + 3 c (is)^2 + (is)^3
                  = c^3 + 3i c^2 s - 3 c s^2 - i s^3
                  = ( c^3 - 3 c s^2 ) + i ( 3 c^2 s - s^3 )

  EQUATE REAL PARTS:
     cos 3t = c^3 - 3 c s^2 = c^3 - 3c(1 - c^2) = 4 c^3 - 3 c

  EQUATE IMAGINARY PARTS:
     sin 3t = 3 c^2 s - s^3 = 3(1 - s^2)s - s^3 = 3 s - 4 s^3
                                                                      [proved]

  CHECK t = 0 : 4 - 3 = 1 = cos 0 .
  CHECK t = pi/2 : 3(1) - 4(1) = -1 = sin(3pi/2) .
```

---

### Q B5
Express `cos^4 t` in terms of multiple angles.

**ANSWER:**
```
  Let z = cis t . Then  z + 1/z = 2 cos t  and  z^n + 1/z^n = 2 cos nt .

  ( 2 cos t )^4 = ( z + 1/z )^4

  16 cos^4 t = z^4 + 4 z^3 (1/z) + 6 z^2 (1/z^2) + 4 z (1/z^3) + 1/z^4

             = z^4 + 4 z^2 + 6 + 4/z^2 + 1/z^4

             = ( z^4 + 1/z^4 ) + 4 ( z^2 + 1/z^2 ) + 6

             =   2 cos 4t      + 4 ( 2 cos 2t )   + 6

             =   2 cos 4t + 8 cos 2t + 6

  Divide by 16:
                      cos 4t + 4 cos 2t + 3
        cos^4 t   =  -----------------------
                                8

  CHECK t = 0 : ( 1 + 4 + 3 )/8 = 1 = cos^4 0                        correct
  CHECK t = pi/2 : ( cos 2pi + 4 cos pi + 3 )/8 = (1 - 4 + 3)/8 = 0  correct
```

---

### Q B6
Express `sin^5 t` in terms of multiple angles.

**ANSWER:**
```
  Let z = cis t . Then z - 1/z = 2i sin t and z^n - 1/z^n = 2i sin nt .

  ( 2i sin t )^5 = ( z - 1/z )^5

  32 i^5 sin^5 t = z^5 - 5z^3 + 10 z - 10/z + 5/z^3 - 1/z^5

  i^5 = i , so

  32 i sin^5 t = ( z^5 - 1/z^5 ) - 5 ( z^3 - 1/z^3 ) + 10 ( z - 1/z )

               = 2i sin 5t - 5 ( 2i sin 3t ) + 10 ( 2i sin t )

               = i ( 2 sin 5t - 10 sin 3t + 20 sin t )

  Divide by 32 i :
                      sin 5t - 5 sin 3t + 10 sin t
        sin^5 t  =  --------------------------------
                                  16

  CHECK t = pi/2 :  sin(5pi/2) = 1 , sin(3pi/2) = -1 , sin(pi/2) = 1
        ( 1 + 5 + 10 )/16 = 1 = sin^5(pi/2)                          correct
```

---

### Q B7
If `w` is a complex cube root of unity, prove that
`a^3 + b^3 + c^3 - 3abc = (a + b + c)(a + bw + cw^2)(a + bw^2 + cw)`.

**ANSWER:**
```
  STEP 1  Multiply the last two brackets.

  (a + bw + cw^2)(a + bw^2 + cw)

     = a^2 + a b w^2 + a c w
     + a b w + b^2 w^3 + b c w^2
     + a c w^2 + b c w^4 + c^2 w^3

  STEP 2  Use w^3 = 1 and w^4 = w .

     = a^2 + b^2 + c^2 + ab( w + w^2 ) + bc( w^2 + w ) + ca( w + w^2 )

  STEP 3  Use w + w^2 = -1 .

     = a^2 + b^2 + c^2 - ab - bc - ca

  STEP 4  Multiply by (a + b + c) and use the standard identity

     (a + b + c)(a^2 + b^2 + c^2 - ab - bc - ca) = a^3 + b^3 + c^3 - 3abc
                                                                      [proved]

  CHECK  a = 1, b = 1, c = 0 :
     LHS = 1 + 1 + 0 - 0 = 2
     RHS = (2)(1 + w)(1 + w^2) = 2 (-w^2)(-w) = 2 w^3 = 2            correct
```

---

### Q B8
Find all the cube roots of `8i` and show that their sum is zero.

**ANSWER:**
```
  STEP 1  Polar form.  8i = 0 + 8i , r = 8 , the point (0, 8) lies on the
          positive imaginary axis, so t = pi/2 .

     8i = 8 cis( 2k pi + pi/2 )

  STEP 2  Cube roots.

     z = 8^(1/3) cis( ( 2k pi + pi/2 ) / 3 ) = 2 cis( (4k pi + pi) / 6 ) ,
     k = 0, 1, 2

     k = 0 :  2 cis( pi/6 )   = 2( sqrt3/2 + i/2 )  =  sqrt3 + i
     k = 1 :  2 cis( 5pi/6 )  = 2( -sqrt3/2 + i/2 ) = -sqrt3 + i
     k = 2 :  2 cis( 3pi/2 )  = 2( 0 - i )          = -2i

  STEP 3  Sum.

     ( sqrt3 + i ) + ( -sqrt3 + i ) + ( -2i ) = 0 + 2i - 2i = 0

  CHECK: ( sqrt3 + i )^3 = [ 2 cis(pi/6) ]^3 = 8 cis(pi/2) = 8i      correct
```

---

### Q B9
Solve `x^4 + 4 = 0`.

**ANSWER:**
```
  x^4 = -4 = 4 ( cos pi + i sin pi ) = 4 cis( 2k pi + pi )

  x = 4^(1/4) cis( (2k + 1) pi / 4 ) = sqrt2 cis( (2k+1) pi / 4 ) , k = 0,1,2,3

    k = 0 :  sqrt2 cis( pi/4 )  = sqrt2 ( 1/sqrt2 + i/sqrt2 ) =  1 + i
    k = 1 :  sqrt2 cis( 3pi/4 ) = -1 + i
    k = 2 :  sqrt2 cis( 5pi/4 ) = -1 - i
    k = 3 :  sqrt2 cis( 7pi/4 ) =  1 - i

  ROOTS:   1 + i ,  -1 + i ,  -1 - i ,  1 - i     ( i.e.  +/- 1 +/- i )

  CHECK: (1 + i)^4 = [ (1+i)^2 ]^2 = (2i)^2 = -4 , so (1+i)^4 + 4 = 0  correct
```

---

### Q B10
Prove that the sum of the n nth roots of unity is 0 and their product is
`(-1)^(n+1)`.

**ANSWER:**
```
  The n nth roots of unity are  1 , a , a^2 , ... , a^(n-1)
  where  a = cis( 2 pi / n ) .  Note a^n = cis(2 pi) = 1 and a is not 1 (n >= 2).

  SUM   (a geometric progression, n terms, ratio a)

        1 + a + a^2 + ... + a^(n-1)  =  ( a^n - 1 ) / ( a - 1 )
                                     =  ( 1 - 1 ) / ( a - 1 )
                                     =  0

  PRODUCT

        1 . a . a^2 . ... . a^(n-1)  =  a^( 0 + 1 + 2 + ... + (n-1) )

                                     =  a^( n(n-1)/2 )

                                     =  cis ( (2 pi / n) . n(n-1)/2 )

                                     =  cis ( (n-1) pi )

                                     =  cos (n-1)pi + i sin (n-1)pi

                                     =  (-1)^(n-1)  =  (-1)^(n+1)      [proved]

  CHECK n = 4 : sum = 1 + i - 1 - i = 0 ;
                product = 1 . i . (-1) . (-i) = -1 = (-1)^5           correct
```

---

### Q B11
If `x = cis alpha` and `y = cis beta`, prove that
`x/y + y/x = 2 cos(alpha - beta)` and `x^m y^n + 1/(x^m y^n) = 2 cos(m alpha + n beta)`.

**ANSWER:**
```
  x/y = cis(alpha) / cis(beta) = cis( alpha - beta )
  y/x = cis( beta - alpha ) = cis( -(alpha - beta) )

  x/y + y/x = [ cos(a-b) + i sin(a-b) ] + [ cos(a-b) - i sin(a-b) ]
            = 2 cos( alpha - beta )

  Next, by De Moivre  x^m = cis(m alpha) and y^n = cis(n beta), so

     x^m y^n = cis( m alpha + n beta )
     1 / ( x^m y^n ) = cis( -(m alpha + n beta) )

  Adding, the i-parts cancel:

     x^m y^n + 1/( x^m y^n ) = 2 cos( m alpha + n beta )               [proved]
```

---

### Q B12
If `cos alpha + cos beta + cos gamma = 0` and
`sin alpha + sin beta + sin gamma = 0`, prove that
`cos 3alpha + cos 3beta + cos 3gamma = 3 cos(alpha + beta + gamma)`.

**ANSWER:**
```
  Let  x = cis alpha ,  y = cis beta ,  z = cis gamma .

  Then  x + y + z = ( cos a + cos b + cos g ) + i ( sin a + sin b + sin g )
                  = 0 + i(0) = 0 .

  Now use the identity:  if x + y + z = 0 then x^3 + y^3 + z^3 = 3 x y z .
  (It follows from  x^3+y^3+z^3-3xyz = (x+y+z)(x^2+y^2+z^2-xy-yz-zx) .)

  By De Moivre,  x^3 = cis 3a , y^3 = cis 3b , z^3 = cis 3g ,
  and  x y z = cis( a + b + g ) .

  So      cis 3a + cis 3b + cis 3g  =  3 cis( a + b + g )

  EQUATE REAL PARTS:
        cos 3a + cos 3b + cos 3g = 3 cos( a + b + g )                 [proved]

  (Equating imaginary parts gives sin 3a + sin 3b + sin 3g = 3 sin(a+b+g).)
```

---

### Q B13
If n is a positive integer, show that

```
                    1/n              1/n                    1/(2n)     [  1     -1  q  ]
        ( p + i q )     + ( p - i q )     =  2 ( p^2 + q^2 )        cos[ --- tan  --- ]
                                                                       [  n         p  ]
```

**ANSWER:**
```
  Let  p + i q = r cis t  where

        r = sqrt( p^2 + q^2 )        and       t = tan^-1( q / p )

  Then  p - i q = r cis( -t )   (it is the conjugate).

  Taking one value of each nth root (De Moivre, rational index):

        ( p + iq )^(1/n) = r^(1/n) cis(  t/n )
        ( p - iq )^(1/n) = r^(1/n) cis( -t/n )

  ADD.  The imaginary parts cancel:

        = r^(1/n) . 2 cos( t / n )

                        1/n        [  1     -1  q  ]
        = 2 ( p^2+q^2 )^(1/2)      cos[ --- tan  --- ]
                                   [  n         p  ]

                             1/(2n)     [ 1     -1  q ]
        = 2 ( p^2 + q^2 )           cos [ - tan   --- ]
                                        [ n         p ]                [proved]

  ( because r^(1/n) = [ (p^2+q^2)^(1/2) ]^(1/n) = (p^2+q^2)^(1/(2n)) )
```

---

### Q B14
Show that the points in the Argand plane representing the cube roots of unity
form an equilateral triangle.

**ANSWER:**
```
  The cube roots of unity are

     A : 1                B : w = -1/2 + i sqrt3/2      C : w^2 = -1/2 - i sqrt3/2

  AB = | 1 - w |     = | 1 - (-1/2) - i sqrt3/2 | = | 3/2 - i sqrt3/2 |
                     = sqrt( 9/4 + 3/4 ) = sqrt3

  BC = | w - w^2 |   = | i sqrt3 | = sqrt3

  CA = | w^2 - 1 |   = | -3/2 - i sqrt3/2 | = sqrt( 9/4 + 3/4 ) = sqrt3

  AB = BC = CA = sqrt3 , so triangle ABC is EQUILATERAL.               [proved]

  (Geometrically: all three lie on the unit circle at angles 0, 120 and 240
   degrees, i.e. equally spaced, so they are the vertices of a regular
   3-gon = an equilateral triangle.)
```

---

### Q B15
Express `tan 3t` in terms of `tan t` using De Moivre's theorem.

**ANSWER:**
```
  From Q B4:   cos 3t = c^3 - 3 c s^2       sin 3t = 3 c^2 s - s^3

              sin 3t        3 c^2 s - s^3
  tan 3t  =  --------  =  -----------------
              cos 3t        c^3 - 3 c s^2

  Divide the top and the bottom by c^3 :

               3 (s/c) - (s/c)^3        3 tan t - tan^3 t
          =  ----------------------- = --------------------
                 1 - 3 (s/c)^2            1 - 3 tan^2 t

  CHECK t = pi/6 : tan t = 1/sqrt3 ; tan 3t should be tan(pi/2) = undefined.
        Denominator = 1 - 3(1/3) = 0 -> undefined                     correct
```

---

### Q B16
Find all the values of `(16)^(1/4)` and mark them on the Argand plane.

**ANSWER:**
```
  16 = 16 ( cos 0 + i sin 0 ) = 16 cis( 2k pi )

  (16)^(1/4) = 16^(1/4) cis( 2k pi / 4 ) = 2 cis( k pi / 2 ) ,  k = 0,1,2,3

     k = 0 :  2 cis 0        =  2
     k = 1 :  2 cis( pi/2 )  =  2i
     k = 2 :  2 cis( pi )    = -2
     k = 3 :  2 cis( 3pi/2 ) = -2i

  VALUES:  2 , 2i , -2 , -2i        ( = 2 x the fourth roots of unity )

                            Im
                             ^
                             * 2i
                             |
                             |
              ------*--------+--------*------> Re
                   -2        O        2
                             |
                             |
                             * -2i

  The four points are the vertices of a SQUARE of circumradius 2.
  Sum = 0 ; product = 2^4 x (-1) = -16 .
```

---

# ===============================================================
# SECTION C — LONG ANSWER (7 marks)
# Answer any 5 of 7. This chapter usually supplies ONE of them.
# ===============================================================

### Q C1  (the single most likely 7-marker)
Find all the values of `(1 + i)^(1/3)` and represent them on the Argand plane.

**MODEL ANSWER (mark split shown on the right)**

```
  STEP 1  MODULUS AND AMPLITUDE                                        [1 mark]

     1 + i :  a = 1 , b = 1 , the point (1, 1) is in the FIRST quadrant.

        r = sqrt( 1^2 + 1^2 ) = sqrt2
        alpha = tan^-1( 1/1 ) = pi/4 ,  Q1  ->  amplitude t = pi/4

        1 + i = sqrt2 ( cos pi/4 + i sin pi/4 )

  STEP 2  PUT IN THE GENERAL ANGLE                                     [1 mark]

     Since cos t + i sin t = cos( 2k pi + t ) + i sin( 2k pi + t ) for every
     integer k,

        1 + i = sqrt2 [ cos( 2k pi + pi/4 ) + i sin( 2k pi + pi/4 ) ]

  STEP 3  APPLY DE MOIVRE FOR A RATIONAL INDEX                         [2 marks]

                 1/3            1/3 [       2k pi + pi/4            2k pi + pi/4  ]
        (1 + i)      = (sqrt2)      [ cos --------------- + i sin -------------- ]
                                    [            3                       3        ]

        and  (sqrt2)^(1/3) = ( 2^(1/2) )^(1/3) = 2^(1/6)

  STEP 4  PUT k = 0, 1, 2  (there are exactly 3 values)                [2 marks]

        k = 0 :   ( pi/4 ) / 3           =  pi / 12          ( = 15 deg )

        k = 1 :   ( 2pi + pi/4 ) / 3     =  (9pi/4)/3
                                         =  3 pi / 4         ( = 135 deg )

        k = 2 :   ( 4pi + pi/4 ) / 3     =  (17pi/4)/3
                                         =  17 pi / 12       ( = 255 deg )

     THE THREE VALUES ARE

            1/6                     1/6                     1/6
           2    cis( pi/12 ) ,     2    cis( 3pi/4 ) ,     2    cis( 17pi/12 )

     The middle one simplifies:
           2^(1/6) ( -1/sqrt2 + i/sqrt2 ) = 2^(-1/3) ( -1 + i )

  STEP 5  THE ARGAND DIAGRAM                                           [1 mark]

     All three have modulus 2^(1/6) = 1.12 approx, and the angles differ by
     120 degrees, so they are the vertices of an EQUILATERAL TRIANGLE.

                              Im
                               ^
                               |
          135 deg              |
                  *            |      * 15 deg
                    \          |     /
                      \        |    /
                        \      |   /
                          \    |  /
        ------------------- \--+-/ ---------------> Re
                              \|/ O
                               |\
                               | \
                               |  \
                               |   * 255 deg

  CHECK (always do this)
        [ 2^(1/6) cis(3pi/4) ]^3 = 2^(1/2) cis( 9pi/4 )
                                 = sqrt2 cis( 9pi/4 - 2pi )
                                 = sqrt2 cis( pi/4 ) = 1 + i          correct
```

> **Where students lose the marks:** they write only the `k = 0` answer.
> That is worth about 2 out of 7. The `2k pi` and the list `k = 0, 1, 2`
> are what the examiner is paying for.

---

### Q C2
If n is an integer, prove that

```
   ( 1 + cos t + i sin t )^n + ( 1 + cos t - i sin t )^n
                          =  2^(n+1) cos^n ( t/2 ) cos( n t / 2 )
```

**MODEL ANSWER**

```
  STEP 1  HALF-ANGLE FACTORISATION                                    [2 marks]

     Use   1 + cos t = 2 cos^2 ( t/2 )
           sin t     = 2 sin( t/2 ) cos( t/2 )

     1 + cos t + i sin t = 2 cos^2(t/2) + 2 i sin(t/2) cos(t/2)

                        = 2 cos( t/2 ) [ cos( t/2 ) + i sin( t/2 ) ]

     and likewise

     1 + cos t - i sin t = 2 cos( t/2 ) [ cos( t/2 ) - i sin( t/2 ) ]

  STEP 2  RAISE TO THE POWER n USING DE MOIVRE                        [2 marks]

     ( 1 + cos t + i sin t )^n = 2^n cos^n(t/2) [ cos( n t/2 ) + i sin( n t/2 ) ]

     ( 1 + cos t - i sin t )^n = 2^n cos^n(t/2) [ cos( n t/2 ) - i sin( n t/2 ) ]

  STEP 3  ADD                                                          [2 marks]

     The imaginary parts cancel:

        = 2^n cos^n( t/2 ) x 2 cos( n t / 2 )

        = 2^(n+1) cos^n ( t/2 ) cos( n t / 2 )                          [proved]

  STEP 4  VERIFICATION                                                 [1 mark]

     Put t = 0 :  LHS = 2^n + 2^n = 2^(n+1) .
                  RHS = 2^(n+1) . 1^n . 1 = 2^(n+1) .                   correct
```

> **The one line that carries this question** is
> `1 + cos t + i sin t = 2 cos(t/2) [ cos(t/2) + i sin(t/2) ]`.
> Learn it. Everything after it is two lines of De Moivre.

---

### Q C3
Prove that the n nth roots of unity are in geometric progression, that their sum
is zero, that their product is `(-1)^(n+1)`, and that they are the vertices of a
regular n-gon inscribed in the unit circle.

**MODEL ANSWER**

```
  STEP 1  FIND THEM                                                    [2 marks]

     Solve z^n = 1 .   Write  1 = cos 2k pi + i sin 2k pi  (k any integer).

        z^n = cos 2k pi + i sin 2k pi

        z   = cos( 2k pi / n ) + i sin( 2k pi / n )      [De Moivre, index 1/n]

        k = 0, 1, 2, ..., n-1 give n DIFFERENT values; k = n repeats k = 0.

     So there are exactly n nth roots of unity.

  STEP 2  THEY ARE A G.P.                                              [1 mark]

     Put a = cis( 2 pi / n ) . By De Moivre  a^k = cis( 2k pi / n ) , so the
     roots are

        1 , a , a^2 , ... , a^(n-1)

     a G.P. with first term 1 and common ratio a.  Also  a^n = cis( 2pi ) = 1 .

  STEP 3  SUM = 0                                                      [1 mark]

     Sum of a G.P. with n terms:

        1 + a + ... + a^(n-1) = ( a^n - 1 ) / ( a - 1 ) = ( 1 - 1 )/( a - 1 ) = 0

     (valid because a is not 1 when n >= 2).

  STEP 4  PRODUCT = (-1)^(n+1)                                        [2 marks]

        1 . a . a^2 . ... . a^(n-1) = a^( 1 + 2 + ... + (n-1) )
                                    = a^( n(n-1)/2 )
                                    = cis ( (2pi/n) x n(n-1)/2 )
                                    = cis ( (n-1) pi )
                                    = cos(n-1)pi + i sin(n-1)pi
                                    = (-1)^(n-1) = (-1)^(n+1)

  STEP 5  THE GEOMETRY                                                 [1 mark]

     Every root has modulus | cis(2k pi/n) | = 1 , so all n points lie on the
     UNIT CIRCLE. Their amplitudes are 0 , 2pi/n , 4pi/n , ... , i.e. equally
     spaced by 2 pi / n . Equally spaced points on a circle are the vertices
     of a REGULAR n-SIDED POLYGON, with one vertex at the point 1.

        n = 6 example                    Im
                                          ^
                          120 deg         |        60 deg
                              *           |          *
                                \         |        /
                                  \       |      /
        ---------*------------------\-----+----/-------------*------> Re
              180 deg                      O               0 deg
                                  /       |      \
                                /         |        \
                              *           |          *
                          240 deg         |        300 deg

     Sum = 0 is the statement that the centre of gravity of a regular polygon
     is its centre, the origin.
```

---

### Q C4
Solve the equation `(x - 1)^n = x^n` (n a positive integer) and show that all its
roots lie on a straight line parallel to the imaginary axis.

**MODEL ANSWER**

```
  STEP 1  DIVIDE                                                       [1 mark]

     x = 0 is not a solution, because it would give (-1)^n = 0, impossible.
     So divide both sides by x^n :

        ( ( x - 1 ) / x )^n = 1

     Hence ( x - 1 ) / x is an nth root of unity.

  STEP 2  WRITE DOWN THE ROOTS OF UNITY                                [1 mark]

        ( x - 1 ) / x  =  cis( 2k pi / n ) ,   k = 0, 1, ..., n-1

     k = 0 gives (x-1)/x = 1 , i.e. -1 = 0 : IMPOSSIBLE, so discard k = 0.
     Therefore k = 1, 2, ..., n-1 and the equation has  n - 1  roots.

  STEP 3  MAKE x THE SUBJECT                                           [1 mark]

     Write A = 2k pi / n .

        x - 1 = x cis A     =>     x ( 1 - cis A ) = 1     =>   x = 1/(1 - cis A)

  STEP 4  SIMPLIFY WITH HALF ANGLES                                   [2 marks]

        1 - cis A = 1 - cos A - i sin A
                  = 2 sin^2( A/2 ) - 2 i sin( A/2 ) cos( A/2 )
                  = 2 sin( A/2 ) [ sin( A/2 ) - i cos( A/2 ) ]

     So
                                 1
        x = ----------------------------------------
             2 sin(A/2) [ sin(A/2) - i cos(A/2) ]

     Multiply top and bottom by [ sin(A/2) + i cos(A/2) ] ; the bottom bracket
     becomes sin^2 + cos^2 = 1 :

              sin( A/2 ) + i cos( A/2 )        1      i
        x =  ---------------------------  =  ---  +  --- cot( A/2 )
                    2 sin( A/2 )               2      2

  STEP 5  WRITE THE ANSWER                                             [1 mark]

     With A/2 = k pi / n :

        +-------------------------------------------------------+
        |          1      i            k pi                     |
        |   x  =  ---  + ---  cot ( ---------- ) ,  k=1..n-1    |
        |          2      2              n                      |
        +-------------------------------------------------------+

  STEP 6  THE GEOMETRY                                                 [1 mark]

     Every root has REAL PART equal to 1/2 , whatever k is. So all n-1 roots
     lie on the vertical line  Re(z) = 1/2 , which is PARALLEL TO THE
     IMAGINARY AXIS.

                       Im
                        ^      | Re = 1/2
                        |      * k = 1
                        |      * k = 2
              ----------+------|--------------> Re
                        O      * k = 3
                        |      * k = 4

  CHECK n = 3 :  (x-1)^3 = x^3  =>  -3x^2 + 3x - 1 = 0  =>  3x^2 - 3x + 1 = 0
        x = ( 3 +/- sqrt(9 - 12) )/6 = 1/2 +/- i/(2 sqrt3)
     Formula: k = 1 -> 1/2 + (i/2) cot(pi/3) = 1/2 + i/(2 sqrt3)      correct
              k = 2 -> 1/2 + (i/2) cot(2pi/3) = 1/2 - i/(2 sqrt3)     correct
```

---

### Q C5
If `cos alpha + cos beta + cos gamma = 0` and
`sin alpha + sin beta + sin gamma = 0`, prove that

```
   (i)   cos 3a + cos 3b + cos 3g = 3 cos( a + b + g )
   (ii)  sin 3a + sin 3b + sin 3g = 3 sin( a + b + g )
   (iii) cos^2 a + cos^2 b + cos^2 g = sin^2 a + sin^2 b + sin^2 g = 3/2
   (iv)  cos( a + b ) + cos( b + g ) + cos( g + a ) = 0
```

**MODEL ANSWER**

```
  SET UP                                                               [1 mark]

     Let  x = cis a ,  y = cis b ,  z = cis g .   Each has modulus 1.

     x + y + z = ( cos a + cos b + cos g ) + i ( sin a + sin b + sin g )
               = 0 + i(0) = 0                                            ... (1)

     Since 1/x = x bar = cos a - i sin a  and similarly for y, z,

     1/x + 1/y + 1/z = ( cos a + cos b + cos g ) - i ( sin a + sin b + sin g )
                     = 0                                                 ... (2)

     Multiplying (2) by xyz :   y z + z x + x y = 0                      ... (3)

  PARTS (i) AND (ii)                                                   [2 marks]

     From (1) and the identity
        x^3 + y^3 + z^3 - 3xyz = (x+y+z)(x^2+y^2+z^2-xy-yz-zx)
     we get   x^3 + y^3 + z^3 = 3 x y z .

     By De Moivre,  x^3 = cis 3a , y^3 = cis 3b , z^3 = cis 3g ,
     and  x y z = cis( a + b + g ) . So

        cis 3a + cis 3b + cis 3g  =  3 cis( a + b + g )

     Equate REAL parts  ->  (i)
     Equate IMAGINARY parts  ->  (ii)

  PART (iii)                                                          [3 marks]

     x^2 + y^2 + z^2 = ( x + y + z )^2 - 2 ( xy + yz + zx )
                     = 0^2 - 2(0)          [by (1) and (3)]
                     = 0

     So   cis 2a + cis 2b + cis 2g = 0 , and equating real parts,

          cos 2a + cos 2b + cos 2g = 0

     Now use  cos 2a = 2 cos^2 a - 1 :

          ( 2cos^2 a - 1 ) + ( 2cos^2 b - 1 ) + ( 2cos^2 g - 1 ) = 0

          2 ( cos^2 a + cos^2 b + cos^2 g ) = 3

          cos^2 a + cos^2 b + cos^2 g = 3/2

     And since cos^2 + sin^2 = 1 for each of the three angles (total 3),

          sin^2 a + sin^2 b + sin^2 g = 3 - 3/2 = 3/2

  PART (iv)                                                            [1 mark]

     From (3) :   x y + y z + z x = 0 , i.e.

          cis( a + b ) + cis( b + g ) + cis( g + a ) = 0

     Equating real parts:

          cos( a+b ) + cos( b+g ) + cos( g+a ) = 0                     [proved]

  SANITY CHECK   take a = 0 , b = 2pi/3 , g = 4pi/3 (the cube roots of unity):
     cos sum = 1 - 1/2 - 1/2 = 0 ,  sin sum = 0 + sqrt3/2 - sqrt3/2 = 0 . Good.
     cos^2 sum = 1 + 1/4 + 1/4 = 3/2                                    correct
     cos 3a + cos 3b + cos 3g = 1 + 1 + 1 = 3 ,
     3 cos( a+b+g ) = 3 cos( 2pi ) = 3                                  correct
```

---

### Q C6
Find all the values of `(sqrt3 + i)^(1/4)` and show that they are the vertices of
a square.

**MODEL ANSWER**

```
  STEP 1  POLAR FORM                                                   [1 mark]

     sqrt3 + i :  the point ( sqrt3 , 1 ) is in Q1.

        r = sqrt( 3 + 1 ) = 2
        alpha = tan^-1( 1 / sqrt3 ) = pi/6  ->  t = pi/6

        sqrt3 + i = 2 ( cos pi/6 + i sin pi/6 )

  STEP 2  GENERAL ANGLE                                                [1 mark]

        sqrt3 + i = 2 [ cos( 2k pi + pi/6 ) + i sin( 2k pi + pi/6 ) ]

  STEP 3  DE MOIVRE, INDEX 1/4                                        [2 marks]

                     1/4      1/4 [       2k pi + pi/6              2k pi + pi/6  ]
        (sqrt3 + i)      =  2     [ cos ---------------- + i sin ---------------- ]
                                  [            4                        4         ]

  STEP 4  k = 0, 1, 2, 3                                              [2 marks]

        k = 0 :  ( pi/6 ) / 4         =  pi / 24         (  7.5 deg )
        k = 1 :  ( 2pi + pi/6 ) / 4   =  13 pi / 24      ( 97.5 deg )
        k = 2 :  ( 4pi + pi/6 ) / 4   =  25 pi / 24      (187.5 deg )
        k = 3 :  ( 6pi + pi/6 ) / 4   =  37 pi / 24      (277.5 deg )

     THE FOUR VALUES

        2^(1/4) cis( pi/24 ) ,  2^(1/4) cis( 13pi/24 ) ,
        2^(1/4) cis( 25pi/24 ) , 2^(1/4) cis( 37pi/24 )

  STEP 5  THE GEOMETRY                                                 [1 mark]

     All four have the same modulus 2^(1/4), so they lie on a circle of that
     radius. Consecutive amplitudes differ by

        13pi/24 - pi/24 = 12 pi / 24 = pi / 2  = 90 degrees.

     Four points on a circle, 90 degrees apart, are the vertices of a SQUARE.

                            Im
                             ^
                     97.5    |
                        *    |    * 7.5 deg
                          \  |  /
                            \|/
        ---------------------+---------------------> Re
                            /|\
                          /  |  \
                        *    |    *
                    187.5    |    277.5

  CHECK  [ 2^(1/4) cis( pi/24 ) ]^4 = 2 cis( pi/6 ) = sqrt3 + i        correct
```

---

# WHICH QUESTIONS REPEAT MOST

| Rank | Question type | Section | Chance of appearing |
|---|---|---|---|
| 1 | Cube roots of unity: evaluate an expression in `w` | A | Very high |
| 2 | Find ALL the values of `(a + ib)^(p/q)` | **C** | Very high |
| 3 | `(1 + cos t + i sin t)^n + (1 + cos t - i sin t)^n` | **C** | High |
| 4 | Simplify a product/quotient of `cis` terms | A or B | High |
| 5 | `alpha^n + beta^n` from a quadratic with complex roots | B or C | High |
| 6 | Sum / product of the nth roots of unity (state or prove) | A or C | High |
| 7 | Power of a standard number: `(1+i)^n`, `(1 - i sqrt3)^3` | A | High |
| 8 | Express `cos^n t` or `sin^n t` in multiple angles | B | Medium-high |
| 9 | `(1+i)^n + (1-i)^n = 2^((n+2)/2) cos(n pi/4)` | B | Medium |
| 10 | Prove `cos 3t`, `sin 3t`, `tan 3t` expansions | B | Medium |
| 11 | Solve `z^n = a + ib` or `x^4 + 4 = 0` | B or C | Medium |
| 12 | `a^3+b^3+c^3-3abc` factorisation with `w` | B or C | Medium |
| 13 | `(x - 1)^n = x^n` and the line `Re = 1/2` | **C** | Medium |
| 14 | `cos a + cos b + cos g = 0` set of four results | **C** | Medium |
| 15 | `(p + iq)^(1/n) + (p - iq)^(1/n)` formula | B or C | Medium |
| 16 | Triangle-angle results with `x = cis A` | A or B | Medium-low |
| 17 | Number of values of a fractional power | A | Low but free |

```
   THE MINIMUM VIABLE REVISION FOR THIS CHAPTER

     1.  1 + w + w^2 = 0 , w^3 = 1 , and the six standard w evaluations
     2.  the general nth root formula with 2k pi
     3.  the half-angle factorisation 1 + cos t + i sin t = 2 cos(t/2) cis(t/2)
     4.  (1 + i) = sqrt2 cis(pi/4)

   Those four things cover ranks 1, 2, 3, 6, 7 and 9 in the table above —
   which is 2 + 7 = 9 marks, and often more.
```
