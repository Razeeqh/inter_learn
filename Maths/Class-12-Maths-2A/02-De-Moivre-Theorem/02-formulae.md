# De Moivre's Theorem — Formula Sheet

Copy this by hand into a notebook. Writing it once beats reading it ten times.
The last column tells you WHEN to use the formula — that is what exams actually test.

---

# 1. POLAR (MODULUS-AMPLITUDE) FORM — the starting point for everything

```
  +--------------------------------------------------------------+
  |                                                              |
  |     z  =  x + i y  =  r ( cos t + i sin t )                  |
  |                                                              |
  |     r  =  | z |  =  sqrt( x^2 + y^2 )        r >= 0          |
  |                                                              |
  |     x  =  r cos t          y  =  r sin t                     |
  |                                                              |
  |     PRINCIPAL amplitude:   - pi  <  t  <=  pi                |
  |                                                              |
  |     SHORTHAND:   cis t   means   cos t + i sin t             |
  |                                                              |
  +--------------------------------------------------------------+
```

## The quadrant rule (alpha = tan^-1 | y / x | , a positive acute angle)

| Point (x, y) | Quadrant | Principal amplitude t |
|---|---|---|
| `(+ , +)` | Q1 | `alpha` |
| `(- , +)` | Q2 | `pi - alpha` |
| `(- , -)` | Q3 | `alpha - pi` |
| `(+ , -)` | Q4 | `-alpha` |
| `(+ , 0)` | on +Re axis | `0` |
| `(- , 0)` | on -Re axis | `pi` |
| `(0 , +)` | on +Im axis | `pi/2` |
| `(0 , -)` | on -Im axis | `-pi/2` |

| Formula | When to use |
|---|---|
| `r = sqrt(x^2 + y^2)` | ALWAYS the first line of any De Moivre answer |
| quadrant rule | every single time you write an amplitude |
| `cis t` shorthand | rough working; expand it once in the final answer |

---

# 2. THE ALGEBRA OF cis

```
  +--------------------------------------------------------------+
  |                                                              |
  |     cis A  x  cis B    =   cis ( A + B )      angles ADD     |
  |                                                              |
  |     cis A  /  cis B    =   cis ( A - B )      angles SUBTRACT|
  |                                                              |
  |         1 / cis t      =   cis ( -t )                        |
  |                                                              |
  |         ( cis t ) bar  =   cis ( -t )                        |
  |                                                              |
  |         | cis t |      =   1        for every t              |
  |                                                              |
  +--------------------------------------------------------------+
```

## The rewrites that stop sign errors

```
        cos t - i sin t   =   cis( -t )
       -cos t + i sin t   =   cis( pi - t )
       -cos t - i sin t   =   cis( pi + t )
        sin t + i cos t   =   cis( pi/2 - t )
        sin t - i cos t   =   cis( t - pi/2 )
```

| Formula | When to use |
|---|---|
| `cos t - i sin t = cis(-t)` | THE most common source of lost marks — apply it on sight |
| `sin t + i cos t = cis(pi/2 - t)` | when a question mixes sin first, cos second |
| `1/cis t = cis(-t)` | any negative index |

---

# 3. DE MOIVRE'S THEOREM — INTEGRAL INDEX

```
  +--------------------------------------------------------------+
  |                                                              |
  |     ( cos t + i sin t )^n   =   cos n t + i sin n t          |
  |                                                              |
  |     for EVERY integer n  ( positive , zero , negative )      |
  |                                                              |
  |     In general:   [ r cis t ]^n  =  r^n cis( n t )           |
  |                                                              |
  +--------------------------------------------------------------+
```

**Proof route to quote in the exam:**

```
   n POSITIVE  ->  mathematical induction (base n = 1, then multiply by
                   one more factor and use the compound-angle formulas)

   n = 0       ->  both sides equal 1

   n NEGATIVE  ->  put n = -m , take the reciprocal, and rationalise with
                   ( cos mt - i sin mt ) ; the denominator becomes
                   cos^2 mt + sin^2 mt = 1
```

## The bookkeeping trick for the 2-mark simplification question

```
   Turn every bracket into cis( signed angle ), then just add the top angles,
   add the bottom angles, and subtract.

      ( cos pt + i sin pt )^m      ->   + p m
      ( cos pt - i sin pt )^m      ->   - p m
      anything in the DENOMINATOR  ->   change its sign at the end
```

| Formula | When to use |
|---|---|
| `(cis t)^n = cis(nt)` | every question in the chapter |
| `(r cis t)^n = r^n cis(nt)` | powers of `1+i`, `sqrt3 + i`, etc. |
| reduce final angle mod `2 pi` | before writing the answer in a + ib form |

---

# 4. DE MOIVRE'S THEOREM — RATIONAL INDEX

```
  +----------------------------------------------------------------------+
  |                                                                      |
  |   p , q integers , q > 0 , p/q in LOWEST TERMS.                      |
  |                                                                      |
  |        cos( p t / q ) + i sin( p t / q )                             |
  |                                                                      |
  |   is  ONE  of the values of   ( cos t + i sin t )^(p/q) ,            |
  |                                                                      |
  |   and there are EXACTLY  q  values altogether, namely                |
  |                                                                      |
  |            p ( 2k pi + t )              p ( 2k pi + t )              |
  |      cos ------------------ + i sin ------------------               |
  |                   q                          q                       |
  |                                                                      |
  |      k = 0 , 1 , 2 , ... , q - 1                                     |
  |                                                                      |
  +----------------------------------------------------------------------+
```

**Why q values:** `cis t = cis(2k pi + t)`, and increasing k by q changes the
angle by `2 p pi` — a whole number of turns, i.e. the same point. So the list
repeats with period q.

| Fact | When to use |
|---|---|
| the word "one of the values" | write it in the answer; it is a mark |
| number of values = q (the DENOMINATOR) | "how many values does `(1+i)^(3/5)` have?" -> 5 |
| reduce p/q first | `(z)^(4/6)` has 3 values, not 6 |

---

# 5. EXPANDING cos n t AND sin n t

**Method:** `cos nt + i sin nt = (cos t + i sin t)^n`, expand by the binomial
theorem, then equate real and imaginary parts.

```
  +------------------------------------------------------------------+
  |                                                                  |
  |  cos nt = C(n,0)c^n - C(n,2)c^(n-2)s^2 + C(n,4)c^(n-4)s^4 - ...  |
  |                                                                  |
  |  sin nt = C(n,1)c^(n-1)s - C(n,3)c^(n-3)s^3 + C(n,5)... - ...    |
  |                                                                  |
  |         ( c = cos t , s = sin t )                                |
  |                                                                  |
  +------------------------------------------------------------------+
```

| n | `cos nt` | `sin nt` |
|---|---|---|
| 2 | `2 cos^2 t - 1` | `2 sin t cos t` |
| 3 | `4 cos^3 t - 3 cos t` | `3 sin t - 4 sin^3 t` |
| 4 | `8 cos^4 t - 8 cos^2 t + 1` | `4 sin t cos t (cos^2 t - sin^2 t)` |
| 5 | `16 cos^5 t - 20 cos^3 t + 5 cos t` | `16 sin^5 t - 20 sin^3 t + 5 sin t` |
| 6 | `32 cos^6 t - 48 cos^4 t + 18 cos^2 t - 1` | `2 sin t cos t (16 cos^4 t - 16 cos^2 t + 3)` |

```
   TANGENT VERSIONS   ( T = tan t )

                3 T - T^3                             4 T - 4 T^3
   tan 3t  =  --------------          tan 4t  =  ----------------------
                1 - 3 T^2                          1 - 6 T^2 + T^4
```

```
   SELF-CHECK  put t = 0 :  every cos nt formula must give 1.
               3 : 4 - 3 = 1 .   4 : 8 - 8 + 1 = 1 .
               5 : 16 - 20 + 5 = 1 .   6 : 32 - 48 + 18 - 1 = 1 .
```

| Formula | When to use |
|---|---|
| `cos 3t = 4c^3 - 3c` | asked directly, and all over trigonometry |
| `sin 3t = 3s - 4s^3` | same |
| general binomial pattern | when n is 5, 6 or 7 and no formula is memorised |
| `tan 3t` | "express tan 3t in terms of tan t" |

---

# 6. POWERS OF cos t AND sin t IN MULTIPLE ANGLES (the reverse job)

**Tools:** put `z = cis t`.

```
  +-------------------------------------------------------------+
  |                                                             |
  |     z  +  1/z    =   2 cos t                                |
  |     z  -  1/z    =   2 i sin t                              |
  |                                                             |
  |     z^n + 1/z^n  =   2 cos n t                              |
  |     z^n - 1/z^n  =   2 i sin n t                            |
  |                                                             |
  +-------------------------------------------------------------+
```

**Method:** expand `(z + 1/z)^n` or `(z - 1/z)^n`, pair the terms from the two
ends, and read off `2 cos kt` or `2i sin kt`.

```
  +------------------------------------------------------------------+
  |                                                                  |
  |    cos^2 t  =  ( 1 + cos 2t ) / 2                                |
  |    sin^2 t  =  ( 1 - cos 2t ) / 2                                |
  |                                                                  |
  |    cos^3 t  =  ( cos 3t + 3 cos t ) / 4                          |
  |    sin^3 t  =  ( 3 sin t - sin 3t ) / 4                          |
  |                                                                  |
  |    cos^4 t  =  ( cos 4t + 4 cos 2t + 3 ) / 8                     |
  |    sin^4 t  =  ( cos 4t - 4 cos 2t + 3 ) / 8                     |
  |                                                                  |
  |    cos^5 t  =  ( cos 5t + 5 cos 3t + 10 cos t ) / 16             |
  |    sin^5 t  =  ( sin 5t - 5 sin 3t + 10 sin t ) / 16             |
  |                                                                  |
  |    cos^6 t  =  ( cos 6t + 6 cos 4t + 15 cos 2t + 10 ) / 32       |
  |    sin^6 t  =  ( 10 - 15 cos 2t + 6 cos 4t - cos 6t ) / 32       |
  |                                                                  |
  +------------------------------------------------------------------+
```

```
   THE NUMBERS ARE JUST PASCAL'S TRIANGLE

     row 3 :  1  3  3  1        ->  cos^3 t  uses  1 , 3        , / 2^(3-1) = 4
     row 4 :  1  4  6  4  1     ->  cos^4 t  uses  1 , 4 , 6/2=3 , / 2^(4-1) = 8
     row 5 :  1  5 10 10  5  1  ->  cos^5 t  uses  1 , 5 , 10    , / 2^(5-1) = 16
     row 6 :  1  6 15 20 15 6 1 ->  cos^6 t  uses  1 , 6 , 15 , 20/2=10 , / 32

     ODD n   ->  the middle coefficient is used as it is
     EVEN n  ->  the middle coefficient is HALVED (it has no partner)
```

```
   SELF-CHECK  put t = 0 :  every  cos^n t  formula must give 1 .
               cos^4 : (1 + 4 + 3)/8 = 1 .  cos^5 : (1 + 5 + 10)/16 = 1 .
               cos^6 : (1 + 6 + 15 + 10)/32 = 32/32 = 1 .
   SELF-CHECK  put t = 0 :  every  sin^n t  formula must give 0 .
               sin^6 : (10 - 15 + 6 - 1)/32 = 0 .
```

| Formula | When to use |
|---|---|
| `z + 1/z = 2 cos t` | starting line of every "express in multiple angles" answer |
| `cos^3 t`, `sin^3 t` | 4-mark question, and integration in Maths IIB |
| `cos^4 t`, `sin^4 t` | the most common 4-mark version |
| Pascal's-triangle check | to verify your answer in 5 seconds |

---

# 7. nth ROOTS OF UNITY

```
  +------------------------------------------------------------------+
  |                                                                  |
  |     SOLVE   z^n = 1                                              |
  |                                                                  |
  |                    2 k pi              2 k pi                    |
  |          z  =  cos --------  +  i sin --------                   |
  |                       n                   n                      |
  |                                                                  |
  |          k = 0 , 1 , 2 , ... , n-1        (EXACTLY n roots)      |
  |                                                                  |
  |     Writing  a = cis( 2 pi / n )  they are                       |
  |                                                                  |
  |          1 ,  a ,  a^2 ,  ... ,  a^(n-1)                         |
  |                                                                  |
  +------------------------------------------------------------------+
```

## The five properties

```
  +------------------------------------------------------------------+
  |                                                                  |
  |  (1)  There are exactly  n  of them.                             |
  |                                                                  |
  |  (2)  They are in G.P. with first term 1 and common ratio a.     |
  |                                                                  |
  |  (3)  SUM      =  0            ( for n >= 2 )                    |
  |                                                                  |
  |  (4)  PRODUCT  =  (-1)^(n+1)                                     |
  |            n odd  -> +1        n even -> -1                      |
  |                                                                  |
  |  (5)  They are the VERTICES OF A REGULAR n-GON inscribed in      |
  |       the unit circle, one vertex at the point 1, spacing        |
  |       360/n degrees.                                             |
  |                                                                  |
  +------------------------------------------------------------------+
```

```
   TWO ONE-LINE PROOFS TO QUOTE

   SUM        1 + a + ... + a^(n-1) = ( a^n - 1 ) / ( a - 1 )
                                    = ( 1 - 1 ) / ( a - 1 ) = 0
              because a^n = cis(2 pi) = 1 and a is not 1.

   PRODUCT    1 . a . a^2 . ... . a^(n-1) = a^( n(n-1)/2 )
                                          = cis( (n-1) pi )
                                          = (-1)^(n-1) = (-1)^(n+1)
              or: product of roots of z^n - 1 = 0 is (-1)^n(-1)/1 = (-1)^(n+1)
```

## Extra facts

```
   *  Any nth root of unity other than 1 satisfies
            1 + z + z^2 + ... + z^(n-1) = 0

   *  Sum of the p-th powers of the n roots
            = n   if n divides p
            = 0   otherwise

   *  If a is an nth root of unity then so are  a bar = 1/a = a^(n-1) .

   *  Number of common roots of z^n = 1 and z^m = 1  is  H.C.F.(n, m).
```

| Formula | When to use |
|---|---|
| `z = cis(2k pi / n)` | "find the nth roots of unity" |
| sum = 0 | the most-asked 2-mark fact of the whole chapter |
| product = `(-1)^(n+1)` | second most-asked |
| regular n-gon | the diagram mark in a 7-mark question |
| `1 + z + ... + z^(n-1) = 0` | any "sum of powers of a root" problem |

---

# 8. CUBE ROOTS OF UNITY — the highest-value 2 marks in the chapter

```
  +------------------------------------------------------------------+
  |                                                                  |
  |     1 ,   w = ( -1 + i sqrt3 ) / 2 ,   w^2 = ( -1 - i sqrt3 ) / 2|
  |                                                                  |
  |     w   = cis( 2 pi / 3 ) = cis 120 deg                          |
  |     w^2 = cis( 4 pi / 3 ) = cis 240 deg                          |
  |                                                                  |
  |     -------------- THE TWO KEY FACTS --------------              |
  |                                                                  |
  |            w^3  =  1              1 + w + w^2  =  0              |
  |                                                                  |
  +------------------------------------------------------------------+
```

## Rearrangements (write these three lines first, every time)

```
        1 + w    =  -w^2
        1 + w^2  =  -w
        w + w^2  =  -1
```

## More properties

| Property | Note |
|---|---|
| `w^2 = w bar` | the two non-real roots are conjugates |
| `1/w = w^2`, `1/w^2 = w` | since `w . w^2 = 1` |
| `|w| = 1`, `amp w = 2pi/3` | on the unit circle |
| `w - w^2 = i sqrt3` | subtract the surd forms |
| `(w - w^2)^2 = -3` | square the above |
| `1 + w + w^2 + ... + w^(3m-1) = 0` | complete groups of three vanish |
| `w^n` = 1, w or w^2 | by the REMAINDER of n divided by 3 |

```
   REDUCING A HIGH POWER OF w

        remainder of n / 3  =  0  ->  w^n = 1
                            =  1  ->  w^n = w
                            =  2  ->  w^n = w^2

   SHORTCUT: the remainder on division by 3 equals the remainder of the
             DIGIT SUM.   2018 -> 2+0+1+8 = 11 -> 1+1 = 2  ->  w^2018 = w^2
```

## The results you can quote straight off

```
  +------------------------------------------------------------------+
  |                                                                  |
  |     1 - w + w^2  =  -2 w              1 + w - w^2  =  -2 w^2     |
  |                                                                  |
  |     ( 1 - w )( 1 - w^2 )      =  3                               |
  |     ( 1 + w )( 1 + w^2 )      =  1                               |
  |     ( 1 - w + w^2 )^3         =  -8                              |
  |     ( 1 + w - w^2 )^3         =  -8                              |
  |     ( 1 - w + w^2 )^3 + ( 1 + w - w^2 )^3  =  -16                |
  |     ( 1 - w + w^2 )^6 + ( 1 + w - w^2 )^6  =  128                |
  |     ( 1 + w )^3               =  -1                              |
  |                                                                  |
  |      a + b w + c w^2                                             |
  |     -----------------  =  w^2                                    |
  |      c + a w + b w^2                                             |
  |                                                                  |
  |      a + b w + c w^2                                             |
  |     -----------------  =  w                                      |
  |      b + c w + a w^2                                             |
  |                                                                  |
  +------------------------------------------------------------------+
```

## The factorisations

```
  +------------------------------------------------------------------+
  |                                                                  |
  |   a^3 + b^3 + c^3 - 3abc                                         |
  |       = ( a + b + c )( a + b w + c w^2 )( a + b w^2 + c w )      |
  |                                                                  |
  |   ( a + b w + c w^2 )( a + b w^2 + c w )                         |
  |       = a^2 + b^2 + c^2 - ab - bc - ca                           |
  |                                                                  |
  |   a^3 + b^3 = ( a + b )( a w + b w^2 )( a w^2 + b w )            |
  |                                                                  |
  |   a^2 + ab + b^2 = ( a - b w )( a - b w^2 )                      |
  |                                                                  |
  |   a^2 - ab + b^2 = ( a + b w )( a + b w^2 )                      |
  |                                                                  |
  +------------------------------------------------------------------+
```

```
   CHECK  a^2 + ab + b^2 = (a - bw)(a - bw^2)
          = a^2 - ab w^2 - ab w + b^2 w^3
          = a^2 - ab( w + w^2 ) + b^2
          = a^2 + ab + b^2                     correct
```

| Formula | When to use |
|---|---|
| `1 + w + w^2 = 0` | EVERY omega question. Write it first. |
| `w^3 = 1` | reducing high powers |
| `1 - w + w^2 = -2w` | the standard 2-mark evaluation |
| `a^3+b^3+c^3-3abc` factorisation | 4- or 7-mark proof |
| remainder-of-3 rule | `w^100`, `w^2018` type questions |

---

# 9. FOURTH ROOTS OF UNITY

```
  +------------------------------------------------------------------+
  |                                                                  |
  |     z^4 = 1     ->     z  =  1 ,  i ,  -1 ,  -i                  |
  |                                                                  |
  |     i.e.   +/- 1   and   +/- i                                   |
  |                                                                  |
  |     as a G.P. :   1 , i , i^2 , i^3     ( ratio i )              |
  |                                                                  |
  |     SUM     =  0                                                 |
  |     PRODUCT =  -1     ( = (-1)^(4+1) )                           |
  |                                                                  |
  |     They are the vertices of a SQUARE on the unit circle.        |
  |                                                                  |
  +------------------------------------------------------------------+
```

This is why powers of `i` repeat with period 4 — the cycle `1, i, -1, -i` **is**
the set of fourth roots of unity.

---

# 10. nth ROOTS OF ANY COMPLEX NUMBER

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   z = r ( cos t + i sin t )                                        |
  |                                                                    |
  |                1/n [        2 k pi + t              2 k pi + t  ]  |
  |   z_k   =     r    [  cos ------------- +  i sin ------------- ]   |
  |                      [           n                      n       ]  |
  |                                                                    |
  |   k = 0 , 1 , 2 , ... , n-1                                        |
  |                                                                    |
  +--------------------------------------------------------------------+
```

```
   READ IT AS A RECIPE

   1.  every root has the SAME modulus  r^(1/n)
   2.  first root (k=0) has amplitude   t / n
   3.  each later root adds             2 pi / n
   4.  stop after n roots
   5.  they form a REGULAR n-GON of radius r^(1/n)
```

```
   EQUIVALENT STATEMENT (fast for MCQs)

   nth roots of z  =  ( any ONE nth root of z )  x  ( the n nth roots of unity )

   e.g. cube roots of 8  =  2 , 2w , 2w^2
        cube roots of 27 =  3 , 3w , 3w^2
```

## Special cases worth memorising

```
   z^n =  1   ->   angles  2k pi / n         ( EVEN multiples of pi/n )
   z^n = -1   ->   angles  (2k+1) pi / n     ( ODD  multiples of pi/n )

   z^4 = -16  ->   +/- sqrt2 +/- i sqrt2
   z^4 = -4   ->   +/- 1 +/- i
   z^3 = -8   ->   -2 ,  1 + i sqrt3 ,  1 - i sqrt3
   z^3 = 8i   ->   sqrt3 + i ,  -sqrt3 + i ,  -2i
   z^2 = i    ->   +/- ( 1 + i ) / sqrt2
```

| Formula | When to use |
|---|---|
| the master root formula | every 7-mark "find all values" question |
| `roots = one root x roots of unity` | EAPCET speed |
| odd/even multiples of `pi/n` | telling `z^n = 1` from `z^n = -1` |

---

# 11. THE STANDARD BOARD RESULTS (learn the statements; the proofs are in file 01)

```
  +------------------------------------------------------------------------+
  |                                                                        |
  |  (a)  ( 1 + i )^n + ( 1 - i )^n  =  2^((n+2)/2) cos( n pi / 4 )        |
  |                                                                        |
  |  (b)  ( 1 + cos t + i sin t )^n + ( 1 + cos t - i sin t )^n            |
  |             =  2^(n+1) cos^n ( t/2 ) cos( n t / 2 )                    |
  |                                                                        |
  |  (c)  roots of  x^2 - 2x + 4 = 0   ->  alpha^n + beta^n                |
  |             =  2^(n+1) cos( n pi / 3 )                                 |
  |                                                                        |
  |  (d)  roots of  x^2 - 2x + 2 = 0   ->  alpha^n + beta^n                |
  |             =  2^((n+2)/2) cos( n pi / 4 )                             |
  |                                                                        |
  |  (e)  one value of  [ (1 + sin t + i cos t)/(1 + sin t - i cos t) ]^n  |
  |             =  cos n( pi/2 - t ) + i sin n( pi/2 - t )                 |
  |                                                                        |
  |  (f)  ( p + i q )^(1/n) + ( p - i q )^(1/n)                            |
  |                        1/(2n)      1        -1                         |
  |             = 2 ( p^2 + q^2 )      cos [ --- tan  ( q / p ) ]          |
  |                                            n                           |
  |                                                                        |
  |  (g)  ( x - 1 )^n = x^n  has  n - 1  roots, all with  Re = 1/2 :       |
  |                                                                        |
  |             x  =  1/2  +  ( i / 2 ) cot( k pi / n ) ,  k = 1..n-1      |
  |                                                                        |
  +------------------------------------------------------------------------+
```

**The half-angle factorisations that make (b) and (e) work — memorise them:**

```
     1 + cos t + i sin t  =  2 cos( t/2 ) [ cos( t/2 ) + i sin( t/2 ) ]

     1 - cos t + i sin t  =  2 sin( t/2 ) [ sin( t/2 ) + i cos( t/2 ) ]

     1 + cos t - i sin t  =  2 cos( t/2 ) [ cos( t/2 ) - i sin( t/2 ) ]
```

## Triangle-angle results (A + B + C = pi , x = cis A , y = cis B , z = cis C)

```
     x y z = cis( pi ) = -1

     x/y + y/x = 2 cos( A - B )

     x y + 1/( x y ) = 2 cos( A + B ) = -2 cos C

     x^2 y^2 z^2 + 1/( x^2 y^2 z^2 ) = 2
```

---

# 12. THE STANDARD POWERS — know these without working

| Expression | Polar form | Value |
|---|---|---|
| `(1 + i)^2` | `2 cis(pi/2)` | `2i` |
| `(1 + i)^4` | `4 cis(pi)` | `-4` |
| `(1 + i)^8` | `16 cis(2pi)` | `16` |
| `(1 + i)^16` | `256 cis(4pi)` | `256` |
| `(1 - i)^2` | `2 cis(-pi/2)` | `-2i` |
| `(1 - i)^4` | `4 cis(-pi)` | `-4` |
| `(1 - i)^8` | `16 cis(-2pi)` | `16` |
| `(1 + i sqrt3)^3` | `8 cis(pi)` | `-8` |
| `(1 - i sqrt3)^3` | `8 cis(-pi)` | `-8` |
| `(-1 + i sqrt3)^3` | `8 cis(2pi)` | `8` |
| `(sqrt3 + i)^6` | `64 cis(pi)` | `-64` |
| `(sqrt3 + i)^12` | `4096 cis(2pi)` | `4096` |
| `((1+i)/(1-i))^n` | `cis(n pi/2)` | `i^n` |
| `(1 + i)^n` | `2^(n/2) cis(n pi/4)` | real when 4 divides n |

```
   USEFUL SPIN-OFFS

   Least positive n with  ( (1+i)/(1-i) )^n = 1        ->   n = 4
   Least positive n with  ( 1 + i )^n real            ->   n = 4
   Least positive n with  ( 1 + i )^n purely imaginary->   n = 2
   Least positive n with  ( sqrt3 + i )^n real        ->   n = 6
```

## The cis values you must recognise instantly

| Angle | `cis` value | Angle | `cis` value |
|---|---|---|---|
| `0` | `1` | `pi/2` | `i` |
| `pi/6` | `sqrt3/2 + i/2` | `2pi/3` | `-1/2 + i sqrt3/2` |
| `pi/4` | `(1 + i)/sqrt2` | `3pi/4` | `(-1 + i)/sqrt2` |
| `pi/3` | `1/2 + i sqrt3/2` | `5pi/6` | `-sqrt3/2 + i/2` |
| `pi` | `-1` | `-pi/2` | `-i` |

---

# THE 12 FORMULAE TO WRITE ON YOUR PALM

```
  +---------------------------------------------------------------------+
  |                                                                     |
  |   1.  ( cos t + i sin t )^n  =  cos nt + i sin nt      n in Z       |
  |                                                                     |
  |   2.  cos t - i sin t  =  cis( -t )                                 |
  |                                                                     |
  |   3.  ( r cis t )^n  =  r^n cis( nt )                               |
  |                                                                     |
  |   4.  nth roots of  r cis t :                                       |
  |          r^(1/n) cis( ( 2k pi + t ) / n ) ,   k = 0..n-1            |
  |                                                                     |
  |   5.  nth roots of unity:  cis( 2k pi / n ) ,   k = 0..n-1          |
  |                                                                     |
  |   6.  SUM of nth roots of unity = 0                                 |
  |                                                                     |
  |   7.  PRODUCT of nth roots of unity = (-1)^(n+1)                    |
  |                                                                     |
  |   8.  1 + w + w^2 = 0      and      w^3 = 1                         |
  |                                                                     |
  |   9.  z + 1/z = 2 cos t ,  z^n + 1/z^n = 2 cos nt                   |
  |                                                                     |
  |  10.  cos 3t = 4 cos^3 t - 3 cos t                                  |
  |       sin 3t = 3 sin t - 4 sin^3 t                                  |
  |                                                                     |
  |  11.  1 + cos t + i sin t = 2 cos(t/2) [ cos(t/2) + i sin(t/2) ]    |
  |                                                                     |
  |  12.  (1+i) = sqrt2 cis(pi/4)   and   (1+i)^2 = 2i                  |
  |                                                                     |
  +---------------------------------------------------------------------+
```

If you learn only three of those twelve, learn **1, 4 and 8**.
Formula 1 answers Section A, formula 4 answers Section C, and formula 8 is the
single most repeated 2-mark question in the whole of Maths IIA.
