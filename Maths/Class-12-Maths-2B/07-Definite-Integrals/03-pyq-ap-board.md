# Definite Integrals — AP Board Previous-Year Questions

**Board:** Board of Intermediate Education, Andhra Pradesh (BIEAP)
**Paper:** Maths IIB · **Chapter 7 — Definite Integrals**

> **About the year tags:** BIEAP recycles the same definite integrals across
> many sessions, usually with only the numbers changed. The questions below are
> therefore grouped by **"how often they appear"** rather than being tagged to
> one exact year. Before your exam, cross-check with the official question
> papers at **bie.ap.gov.in**.

**Where this chapter appears in the Maths IIB paper:**

```
  +-------------+---------------------------------+---------------------+
  | SECTION A   | 10 questions, ANSWER ALL, 2M    | 2 of them come from |
  |             |                                 | Definite Integrals  |
  +-------------+---------------------------------+---------------------+
  | SECTION B   | 7 questions, ANY 5, 4M          | 1 or 2 from this    |
  |             |                                 | chapter (often one  |
  |             |                                 | is an AREA question)|
  +-------------+---------------------------------+---------------------+
  | SECTION C   | 7 questions, ANY 5, 7M          | 1 or 2 — usually    |
  |             |                                 | a PROPERTIES        |
  |             |                                 | question and/or an  |
  |             |                                 | AREA question       |
  +-------------+---------------------------------+---------------------+
  |                                    PAPER TOTAL = 75 marks           |
  +---------------------------------------------------------------------+

  Realistic harvest from this chapter alone:  12 to 18 marks.
  With Chapter 6 (Integration) as well:       about 25 to 30 marks.
```

**The three things the examiner asks for over and over:**

```
   1.  Evaluate a definite integral using a PROPERTY          (7 marks)
   2.  Derive a REDUCTION formula, then use Wallis            (7 marks)
   3.  Find an AREA by integration, with a sketch             (7 marks)
```

---

# ===============================================================
# SECTION A — VERY SHORT ANSWER (2 marks)
# These are your GUARANTEED marks. Answer ALL of Section A.
# ===============================================================

## Topic: Straight evaluation using F(b) - F(a)

### Q A1
Evaluate `INT from 0 to 2 of ( x^2 + 1 ) dx`

**ANSWER:**
```
        [  x^3        ] 2         (  8      )
    =   [ ----- +  x  ]      =    ( --- + 2 )  -  ( 0 + 0 )
        [   3         ] 0         (  3      )

         8      6       14
    =   --- +  ---  =  ----
         3      3        3
```

---

### Q A2
Evaluate `INT from 0 to 1 of dx / ( 3 + 2x )`

**ANSWER:**
```
   Standard form  INT dx/(ax + b) = (1/a) log|ax + b| .   Here a = 2 .

         1                    1        1
    =   --- [ log( 3 + 2x ) ]     =   --- ( log 5  -  log 3 )
         2                    0        2

         1        5
    =   --- log ( --- )
         2        3
```
**CHECK:** (1/2)log(1.667) = 0.255. The integrand runs from 1/3 to 1/5, average
about 0.26, width 1. Matches.

---

### Q A3
Evaluate `INT from 0 to pi/2 of sin 2x dx`

**ANSWER:**
```
        [    cos 2x  ] pi/2        (   cos pi )     (   cos 0 )
    =   [ - -------- ]        =    ( - ------ )  -  ( - ------ )
        [       2    ] 0           (     2    )     (     2   )

             1        1
    =    ( + --- ) - ( - --- )   =   1
             2            2
```

---

### Q A4
Evaluate `INT from 1 to 5 of dx / ( 2x - 1 )`

**ANSWER:**
```
         1                     5        1
    =   --- [ log | 2x - 1 | ]      =  --- ( log 9  -  log 1 )
         2                     1        2

         1              1
    =   --- log 9  =   --- ( 2 log 3 )   =   log 3
         2              2
```

---

### Q A5
Evaluate `INT from 0 to pi/2 of cos x / ( 1 + sin x ) dx`

**ANSWER:**
```
   The TOP is the derivative of the BOTTOM, so this is  INT f'/f = log|f| .

                             pi/2
    =   [ log ( 1 + sin x ) ]        =   log ( 1 + 1 )  -  log ( 1 + 0 )
                             0

    =   log 2  -  log 1   =   log 2
```

---

### Q A6
Evaluate `INT from 0 to 1 of x e^(x^2) dx`

**ANSWER:**
```
   Put  t = x^2 ,   dt = 2x dx ,   x dx = dt/2 .

   NEW LIMITS:   x = 0 -> t = 0 ;   x = 1 -> t = 1 .

         1    1                1        1        1
    =   INT  --- e^t dt   =   --- [ e^t ]   =   --- ( e  -  1 )
         0    2                2        0        2
```

---

### Q A7
Evaluate `INT from 2 to 3 of x / ( x^2 + 1 ) dx`

**ANSWER:**
```
   Top is half the derivative of the bottom.

         1                     3        1
    =   --- [ log ( x^2 + 1 ) ]     =  --- ( log 10  -  log 5 )
         2                     2        2

         1         10        1
    =   --- log ( ---- ) =  --- log 2
         2          5        2
```

---

### Q A8
Evaluate `INT from 0 to 1 of dx / sqrt( 3 - 2x )`

**ANSWER:**
```
   Guess  - sqrt( 3 - 2x )  and differentiate to check:

        d                            -1              1
       --- [ - sqrt(3 - 2x) ]  =  ---------- ( -2 ) = -----------   correct
        dx                        2sqrt(3-2x)         sqrt(3-2x)

                            1
    =  [ - sqrt( 3 - 2x ) ]     =  - sqrt(1)  -  ( - sqrt 3 )
                            0

    =  sqrt 3  -  1        ( = 0.732 )
```

---

### Q A9
Evaluate `INT from 0 to pi/2 of sqrt( 1 - cos 2x ) dx`

**ANSWER:**
```
   IDENTITY FIRST:   1 - cos 2x  =  2 sin^2 x

   sqrt( 2 sin^2 x )  =  sqrt 2 . | sin x |  =  sqrt 2 . sin x
                                   ( sin x >= 0 on [0, pi/2] )

                       pi/2                                pi/2
    =  sqrt 2   INT         sin x dx  =  sqrt2 [ - cos x ]
                       0                                   0

    =  sqrt 2 ( 0 + 1 )   =   sqrt 2
```
> Never write `sqrt(sin^2 x) = sin x` without checking the sign. Here it is
> safe because sin x is positive on [0, pi/2].

---

### Q A10
Evaluate `INT from 1 to 2 of ( 1/x  -  1/x^2 ) dx`

**ANSWER:**
```
        [            1 ] 2         (            1 )     (           )
    =   [ log x  +  --- ]     =    ( log 2  +  --- )  -  ( log 1 + 1 )
        [            x  ] 1        (            2 )     (           )

                    1                        1
    =   log 2  +   ---  -  0  -  1  =  log2 - ---
                    2                        2
```

---

## Topic: Modulus and piecewise (use P2 — SPLIT)

### Q A11
Evaluate `INT from 0 to 2 of | 1 - x | dx`

**ANSWER:**
```
   | 1 - x |  =  1 - x   when x < 1
              =  x - 1   when x > 1        SPLIT AT x = 1 .

         1                    2
    = INT  ( 1 - x ) dx  + INT  ( x - 1 ) dx
         0                    1

        [       x^2 ] 1      [  x^2       ] 2
    =   [  x - ---- ]    +   [ ----- -  x ]
        [        2  ] 0      [   2        ] 1

    =   ( 1 - 1/2 ) - 0   +   ( 2 - 2 ) - ( 1/2 - 1 )

    =   1/2  +  0  +  1/2   =   1
```
**CHECK geometrically:** two right triangles, each with base 1 and height 1,
so 1/2 + 1/2 = 1. Correct.

---

### Q A12
Evaluate `INT from 0 to 2pi of | sin x | dx`

**ANSWER:**
```
   sin x is positive on [0, pi] and negative on [pi, 2pi] , so SPLIT at pi.

         pi                 2pi
    = INT   sin x dx  -  INT    sin x dx
         0                 pi

                    pi                     2pi
    = [ - cos x ]        -  [ - cos x ]
                    0                      pi

    = ( 1 + 1 )   -   ( - 1 - 1 )   =   2  +  2   =   4
```

---

## Topic: Even and odd (P6) — the fastest 2 marks in the paper

### Q A13
Evaluate `INT from -1 to 1 of ( x^3 + x cos x + tan^5 x + 1 ) dx`

**ANSWER:**
```
   Test each term with  f(-x) :

        x^3      ->  ODD   ->  contributes 0
        x cos x  ->  odd x even = ODD  ->  contributes 0
        tan^5 x  ->  ODD   ->  contributes 0
        1        ->  EVEN  ->  2 INT from 0 to 1 of 1 dx  =  2

   ANSWER  =  2
```

---

### Q A14
Evaluate `INT from -pi/2 to pi/2 of sin^2 x dx`

**ANSWER:**
```
   sin^2(-x) = ( - sin x )^2 = sin^2 x  ->  EVEN , so it DOUBLES.

                pi/2                      pi         pi
    =  2   INT        sin^2 x dx  =  2 x ----   =   ----
                0                         4          2

   ( using the Wallis value  INT 0 to pi/2 sin^2 x dx = pi/4 )
```
> **TRAP:** symmetric limits do NOT automatically mean zero. Test f(-x) first.

---

### Q A15
Evaluate `INT from -2 to 2 of x^3 cos x dx`

**ANSWER:**
```
   x^3 is ODD , cos x is EVEN , so the product is ODD .

   ANSWER  =  0
```

---

## Topic: Wallis (2-mark version)

### Q A16
Evaluate `INT from 0 to pi/2 of sin^5 x dx`

**ANSWER:**
```
   n = 5 is ODD , so stop at 2/3 and there is NO pi .

         4      2        8
    =   --- x  ---  =   ----
         5      3        15
```

---

### Q A17
Evaluate `INT from 0 to pi/2 of cos^6 x dx`

**ANSWER:**
```
   n = 6 is EVEN , so go down to 1/2 and multiply by pi/2 .

         5      3      1      pi        15      pi      5 pi
    =   --- x  --- x  --- x  ----  =   ---- x  ----  = ------
         6      4      2       2        48       2       32
```
> If your answer for an EVEN power has no pi in it, you slipped. Check.

---

### Q A18
Evaluate `INT from 0 to pi/2 of sin^2 x cos^2 x dx`

**ANSWER:**
```
   Mixed Wallis with m = 2 , n = 2 , m + n = 4 .
   BOTH powers are even, so the pi/2 tail applies.

        ( 1 ) x ( 1 )      pi        1     pi        pi
    =  --------------- x  ----  =   --- x ----  =   -----
           4  x  2          2        8      2        16
```

---

### Q A19
Evaluate `INT from 0 to pi of sin^3 x dx`

**ANSWER:**
```
   sin( pi - x ) = sin x , so by P5 the integral DOUBLES:

                 pi/2                          2         4
    =  2   INT         sin^3 x dx  =  2   x   ---   =   ---
                 0                             3         3
```

---

### Q A20
Evaluate `INT from 0 to pi of cos^3 x dx`

**ANSWER:**
```
   cos( pi - x ) = - cos x , so cos^3( pi - x ) = - cos^3 x .
   By P5 the integral is ZERO.

   ANSWER  =  0
```

---

## Topic: Substitution and properties

### Q A21
Evaluate `INT from 0 to a of x sqrt( a^2 - x^2 ) dx`

**ANSWER:**
```
   Put  t = a^2 - x^2 ,  dt = - 2x dx ,  x dx = - dt/2 .

   NEW LIMITS:  x = 0 -> t = a^2 ;   x = a -> t = 0 .

           0    ( - dt )             a^2   1
    =  INT      -------- sqrt t = INT     --- sqrt t dt
          a^2      2                 0     2

         1   [  2         ] a^2       1                     a^3
    =   --- [  --- t^(3/2) ]      =  --- x (2/3) x a^3  =  ------
         2   [  3          ] 0        2                       3
```

---

### Q A22
Evaluate `INT from 0 to 1 of x ( 1 - x )^9 dx`

**ANSWER:**
```
   By P3 (replace x by 1 - x) :

         1                       1
    = INT  ( 1 - x ) x^9 dx = INT ( x^9  -  x^10 ) dx
         0                       1              0

        [ x^10     x^11 ] 1        1        1        11 - 10        1
    =   [ ------ - ------]     =  ----  -  ----  =  ---------  =  -----
        [   10      11  ] 0        10       11         110         110
```

---

### Q A23
Evaluate `INT from 0 to 1 of dx / ( x^2 + 5x + 6 )`

**ANSWER:**
```
   x^2 + 5x + 6 = ( x + 2 )( x + 3 )

      1              1          1
   ---------  =   -------  -  -------
   (x+2)(x+3)      x + 2       x + 3

                                          1
    =  [ log( x+2 )  -  log( x+3 ) ]
                                          0

        [     ( x + 2 ) ] 1            3             2
    =   [ log ( ------- )]     =   log --- -   log  ---
        [     ( x + 3 ) ] 0            4             3

             3     3            9
    =   log( --- x --- ) =  log ---
             4     2            8
```

---

### Q A24
Find the area bounded by `y = x^2`, the x-axis, `x = 0` and `x = 3`.

**ANSWER:**
```
                       3          [ x^3 ] 3       27
    A  =    INT           x^2 dx = [ --- ]    =  ----  =  9  sq units
                       0          [  3  ] 0       3
```

---

# ===============================================================
# SECTION B — SHORT ANSWER (4 marks)
# Answer any 5 of the 7. Aim to have 2 of them from here.
# ===============================================================

### Q B1
Evaluate `INT from 0 to pi/2 of sin x / ( sin x + cos x ) dx`

**ANSWER:**
```
   STEP 1.             pi/2      sin x
              I  = INT          --------------- dx                ...(1)
                        0        sin x + cos x

   STEP 2.  Apply P3:  INT 0 to a f(x) dx = INT 0 to a f(a - x) dx
            with a = pi/2 .   sin(pi/2 - x) = cos x ,
                              cos(pi/2 - x) = sin x .

                        pi/2      cos x
              I  = INT          --------------- dx                ...(2)
                        0        cos x + sin x

   STEP 3.  ADD (1) and (2) — same denominator, so add the tops:

                        pi/2   sin x + cos x            pi/2
            2 I  =  INT       --------------- dx  = INT       1 dx
                        0      sin x + cos x            0

                              pi/2        pi
            2 I  =   [ x ]           =   ----
                              0           2

   STEP 4.                     pi
                        I  =  ----
                               4
```
> The same four lines answer `INT 0 to pi/2 dx/(1 + tan x)`,
> `INT 0 to pi/2 dx/(1 + cot x)` and
> `INT 0 to pi/2 sqrt(sinx)/(sqrt(sinx)+sqrt(cosx)) dx`. All equal pi/4.

---

### Q B2
Evaluate `INT from 0 to pi of x sin x dx`

**ANSWER:**
```
   METHOD 1 — by the property (faster).

        I  =  INT 0 to pi of x sin x dx                            ...(1)

        By P3 with a = pi , and sin( pi - x ) = sin x :

        I  =  INT 0 to pi of ( pi - x ) sin x dx                   ...(2)

        ADD:   2 I  =  pi  INT 0 to pi of sin x dx
                          = pi [ - cos x ] from 0 to pi
                          = pi ( 1 + 1 )  =  2 pi

                 I  =  pi

   METHOD 2 — by parts (the check).

        [ - x cos x ] from 0 to pi  +  INT 0 to pi of cos x dx

        =  ( - pi cos pi + 0 )  +  [ sin x ] from 0 to pi
        =  ( pi )  +  ( 0 - 0 )
        =  pi                                    SAME ANSWER.
```

---

### Q B3
Evaluate `INT from 0 to 1 of x Tan^-1 x dx`

**ANSWER:**
```
   ILATE:  Inverse trig beats Algebraic , so  u = Tan^-1 x , v = x .
   INT v dx = x^2 / 2 .

        [        x^2 ] 1        1   x^2       1
   =    [ Tan^-1 --- ]     - INT   ----- x -------- dx
        [         2  ] 0        0    2      1 + x^2

        1     pi        1     1     x^2
   =   --- x ----   -  --- INT    -------- dx
        2     4         2     0    1 + x^2

   For the leftover integral, do the standard split:

        x^2        ( x^2 + 1 ) - 1              1
      -------- =  ----------------- =  1  -  --------
      1 + x^2         1 + x^2                1 + x^2

        1  (           1 )       1  (       pi )
   INT    ( 1  -   -------- ) = [x - Tan^-1 x] = 1 - ----
        0  (       1 + x^2 )                          4

   So

         pi       1  (      pi )      pi      1      pi
   I  = ----  -  --- ( 1 - ---- ) =  ---- -  --- +  ----
          8       2  (      4  )       8      2       8

         pi      1
   I  = ----  - ---            ( = 0.7854 - 0.5 = 0.2854 )
         4       2
```
**CHECK:** x Tan^-1 x runs from 0 to (1)(0.785) over width 1, and is convex,
so the average is well under 0.39 — around 0.29. Matches.

---

### Q B4
Evaluate `INT from 0 to pi/2 of sin^4 x cos^5 x dx`

**ANSWER:**
```
   Mixed Wallis:  m = 4 , n = 5 , m + n = 9 .
   n is ODD , so NO pi/2 tail.

        [ ( m-1 )( m-3 ) ] x [ ( n-1 )( n-3 ) ]
   =    --------------------------------------------
        [ ( m+n )( m+n-2 )( m+n-4 )( m+n-6 )( m+n-8 ) ]

        ( 3 x 1 ) x ( 4 x 2 )        3 x 8         24
   =    -----------------------  =  ---------  =  -----
        9 x 7 x 5 x 3 x 1             945          945

          8
   =    -----
         315
```
**CHECK by substitution (an independent route):**
```
   sin^4 x cos^5 x  =  sin^4 x ( 1 - sin^2 x )^2 cos x

   Put t = sin x , dt = cos x dx , limits 0 to 1 :

        1                        1
   INT     t^4 ( 1 - t^2 )^2 dt = INT  ( t^4 - 2 t^6 + t^8 ) dt
        0                        0

        1     2     1       63 - 90 + 35        8
   =   --- - --- + ---  =  --------------  =  -----      MATCHES.
        5     7     9           315            315
```

---

### Q B5
Evaluate `INT from 0 to 4 of | x - 1 | dx`

**ANSWER:**
```
   x - 1 changes sign at x = 1 , which lies inside [0, 4] . SPLIT there (P2).

           1                       4
   I = INT   ( 1 - x ) dx  +   INT   ( x - 1 ) dx
           0                       1

       [      x^2 ] 1        [ x^2       ] 4
   =   [ x - ---- ]     +    [ ---  -  x ]
       [       2  ] 0        [  2        ] 1

   =   ( 1 - 1/2 ) - 0    +    ( 8 - 4 )  -  ( 1/2 - 1 )

   =   1/2   +   4   +   1/2

   =   5
```
**CHECK geometrically:** triangle of base 1 height 1 gives 1/2; triangle of
base 3 height 3 gives 9/2; total 5. Matches.

---

### Q B6
Evaluate `INT from 0 to 1 of ( x^2 + 1 ) dx` **as the limit of a sum**.

**ANSWER:**
```
   a = 0 , b = 1 , f(x) = x^2 + 1 ,   h = 1/n ,   sample point  r h = r/n .

              n-1  [ ( r )2      ]      1   n-1  [ r^2       ]
   S_n  =  h  SUM  [ ( - )   + 1 ]  =  --- SUM   [ ----- + 1 ]
              r=0  [ ( n )       ]      n   r=0  [  n^2      ]

              1   n-1            1   n-1
        =    ---  SUM  r^2   +  --- SUM  1
             n^3  r=0            n  r=0

              1     ( n - 1 ) n ( 2n - 1 )      1
        =    ---  x ------------------------ + --- x n
             n^3               6                n

              ( n - 1 )( 2n - 1 )
        =    ---------------------  +  1
                    6 n^2

              1  (     1 ) (      1 )
        =    --- ( 1 - - ) ( 2 -  - )   +   1
              6  (     n ) (      n )

   As  n -> infinity , 1/n -> 0 :

              1                     2          1            4
   LIMIT  =  --- x ( 1 )( 2 ) + 1 = --- + 1 = --- + 1  =   ---
              6                     6          3            3
```
**CHECK by the Fundamental Theorem:**
`[x^3/3 + x] from 0 to 1 = 1/3 + 1 = 4/3`. Matches.

---

### Q B7
Evaluate `INT from 2 to 3 of dx / ( x^2 - 1 )`

**ANSWER:**
```
   Standard form:   INT dx/(x^2 - a^2) = (1/2a) log | (x - a)/(x + a) | + c
   Here a = 1 .

         1     [     | x - 1 | ] 3
    =   --- x  [ log | ----- | ]
         2     [     | x + 1 | ] 2

         1  [       2            1  ]
    =   --- [  log ---   -  log --- ]
         2  [       4            3  ]

         1  [       1            1  ]      1        1     3
    =   --- [  log ---   -  log --- ] =   --- log ( --- x --- )
         2  [       2            3  ]      2        2     1

         1         3
    =   --- log ( --- )          ( = 0.5 x 0.405 = 0.203 )
         2         2
```
**CHECK numerically:** the integrand is 1/3 at x = 2 and 1/8 at x = 3;
average about 0.20 over width 1. Matches.

---

### Q B8
Evaluate `INT from 0 to pi/2 of x sin x cos x dx`

**ANSWER:**
```
   FIRST simplify:  sin x cos x = (1/2) sin 2x .

         1      pi/2
   I  = ---  INT      x sin 2x dx
         2      0

   By parts, u = x , INT v dx = - (cos 2x)/2 :

         1  ( [    x cos 2x ] pi/2      pi/2   cos 2x     )
      = --- ( [ - ---------- ]      + INT      -------- dx )
         2  ( [        2     ] 0        0         2       )

   First bracket:   at x = pi/2 :  - (pi/2)( cos pi )/2 = - (pi/2)(-1)/2 = pi/4
                    at x = 0    :  0
                    -> pi/4

   Second piece:    (1/2) [ (sin 2x)/2 ] from 0 to pi/2
                    =  (1/4)( sin pi - sin 0 )  =  0

         1  (  pi        )      pi
   I  = --- (  ----  + 0 )  =  ----
         2  (   4        )      8
```
**CHECK numerically:** pi/8 = 0.3927. The integrand peaks near x = 1.0 at
about 0.45, over width 1.571. Plausible — matches.

---

### Q B9
Evaluate `INT from 0 to 2 of x sqrt( 2 - x ) dx`

**ANSWER:**
```
   By P3 (a = 2): replace x by ( 2 - x ) .

         2
   I = INT  ( 2 - x ) sqrt( x ) dx
         0

         2  (                     )
     = INT  ( 2 x^(1/2) - x^(3/2) ) dx
         0  (                     )

       [    2                2         ] 2
     = [ 2 x--- x^(3/2)  -  --- x^(5/2)]
       [    3                5         ] 0

       [  4                 2          ]
     = [ --- ( 2 sqrt 2 ) - --- ( 4 sqrt2 ) ]        ( 2^(3/2) = 2 sqrt2 ,
       [  3                 5          ]               2^(5/2) = 4 sqrt2 )

        8 sqrt2      8 sqrt2                (  1     1 )
     = --------- -  ---------  =  8 sqrt2 x ( --- - --- )
           3            5                    (  3     5 )

                       2       16 sqrt 2
     =  8 sqrt 2  x   ----  =  ----------      ( = 1.509 )
                       15          15
```
**CHECK by direct substitution t = 2 - x:** x = 2 - t, dx = -dt, limits 2 to 0,
which flips to `INT 0 to 2 of (2 - t) sqrt(t) dt` — exactly the integral above.
Same. Matches.

---

### Q B10
Find the area bounded by `y = x^2`, the x-axis, `x = 1` and `x = 2`.

**ANSWER:**
```
        y
        ^
      4 |                    *
        |                  * |
        |                *///|
      1 |            * //////|
        |        *  /////////|
        +-------*---+--------+-------> x
        0           1        2

                2               [ x^3 ] 2        8       1        7
   A  =    INT      x^2 dx  =   [ --- ]      =  ---  -  ---  =   ---
                1               [  3  ] 1        3       3        3

   A  =  7/3  square units      ( = 2.33 )
```
**CHECK:** the region lies between the rectangles 1x1 = 1 and 1x4 = 4.
2.33 sits sensibly between. Good.

---

### Q B11
Find the area between the curves `y = sin x` and `y = cos x`
from `x = 0` to `x = pi/4`.

**ANSWER:**
```
        y
        ^
      1 |'-.__                 y = cos x
        |  ///''-.__       .-'
        | ////////  '-.,-'`
        |///////  ,-'`  '-.
        |//// ,-'`          '-.     y = sin x
        +-,-'`------------------------> x
        0            pi/4

   On [0, pi/4] , cos x  >  sin x , so cos is the UPPER curve.

                pi/4
   A  =    INT        ( cos x  -  sin x ) dx
                0

                            pi/4
     =  [ sin x  +  cos x ]

                            0

     =  ( sin(pi/4) + cos(pi/4) )  -  ( sin 0 + cos 0 )

          1        1
     = ( ----- + ----- )   -   ( 0 + 1 )
        sqrt2    sqrt2

     =  sqrt 2   -   1        ( = 0.414 )   square units
```

---

### Q B12
Evaluate `INT from 0 to pi/2 of cos^7 x dx`

**ANSWER:**
```
   n = 7 is ODD , so stop at 2/3 with no pi .

         6      4      2       48        16
    =   --- x  --- x  ---  =  -----  =  ----
         7      5      3       105       35
```
**CHECK against the pattern:** the sequence
`1 , 2/3 , 8/15 , 16/35 = 1 , 0.667 , 0.533 , 0.457`
is steadily decreasing, as it must be (higher powers of a number below 1 are
smaller). Good.

---

### Q B13
Evaluate `INT from 0 to 1 of x e^x dx`

**ANSWER:**
```
   ILATE:  u = x  (Algebraic before Exponential) ,  INT v dx = e^x .

                    1        1
    =  [ x e^x ]        - INT   ( 1 ) e^x dx
                    0        1
                             0
                    1        1
    =  [ x e^x ]        - [ e^x ]
                    0             0

    =  ( 1 . e  -  0 )  -  ( e  -  1 )

    =  e  -  e  +  1   =   1
```

---

### Q B14
Evaluate `INT from 0 to pi/2 of dx / ( 1 + cot x )`

**ANSWER:**
```
   Turn cot into sin and cos first — that is the whole trick.

            1                 1                 sin x
        ---------  =  -------------------  =  ---------------
        1 + cot x     1 + ( cos x / sin x )    sin x + cos x

   which is exactly Q B1.

                       pi
        ANSWER  =     ----
                       4
```

---

### Q B15
Evaluate `INT from -pi/2 to pi/2 of ( sin^3 x + x^2 cos x ) dx`

**ANSWER:**
```
   Term 1:  sin^3(-x) = - sin^3 x    ->  ODD   ->  0

   Term 2:  x^2 is EVEN, cos x is EVEN, product is EVEN
                                       ->  2 INT 0 to pi/2 of x^2 cos x dx

   By parts twice, u = x^2 :

        INT x^2 cos x dx  =  x^2 sin x  +  2x cos x  -  2 sin x

   ( check by differentiating:
       2x sinx + x^2 cosx + 2cosx - 2x sinx - 2cosx = x^2 cos x    correct )

   At x = pi/2 :  ( pi^2/4 )( 1 ) + ( pi )( 0 ) - 2 ( 1 ) = pi^2/4  -  2
   At x = 0     :  0 + 0 - 0  =  0

                  (  pi^2       )         pi^2
   ANSWER  =  2 x (  ------ - 2 )   =    ------  -  4      ( = 0.935 )
                  (    4        )           2
```

---

### Q B16
Find the area of the region bounded by `y = 4 - x^2` and the x-axis.

**ANSWER:**
```
        y
        ^
      4 |         ___
        |      ,-'///'-.
        |    ,'///////// '.
        |  ,'///////////// '.
        | /|///////////////| \
        +--+---------------+-----> x
          -2       0        2

   LIMITS: the curve meets the x-axis where 4 - x^2 = 0 , i.e. x = -2 , 2 .

   The integrand is EVEN, so use P6:

                  2
   A  =  2   INT     ( 4 - x^2 ) dx
                  0

            [        x^3 ] 2            (       8 )          16       32
     =  2   [ 4 x - ---- ]      =   2 x ( 8  - --- )  =  2 x ---- =  ----
            [         3  ] 0            (       3 )           3        3

   A  =  32/3   square units       ( = 10.67 )
```
**CHECK:** the bounding rectangle is 4 wide and 4 tall, area 16. A parabolic
segment is two thirds of its rectangle: (2/3)(16) = 32/3. Matches.

---

# ===============================================================
# SECTION C — LONG ANSWER (7 marks)
# Answer any 5 of the 7. Aim to have 1 or 2 from here.
# ===============================================================

### Q C1  (the single most repeated 7-mark question in this chapter)
Evaluate `INT from 0 to pi of x sin x / ( 1 + cos^2 x ) dx`

**ANSWER — full model answer with the mark split:**

```
   MARK SPLIT:  statement of the property 1 ; applying it 2 ;
                adding and simplifying 1 ; substitution 2 ; final answer 1 .
```

```
   STEP 1.  Name the integral.                                  [1 mark]

                        pi     x sin x
              I  =  INT       ------------- dx                   ...(1)
                        0     1 + cos^2 x

   STEP 2.  State the property being used.                       [1 mark]

              INT from 0 to a of f(x) dx  =  INT from 0 to a of f(a - x) dx

   STEP 3.  Apply it with a = pi .                               [2 marks]

              sin( pi - x )  =    sin x
              cos( pi - x )  =  - cos x   ->  cos^2 stays the SAME

                        pi   ( pi - x ) sin x
              I  =  INT      ----------------- dx                ...(2)
                        0      1 + cos^2 x

   STEP 4.  ADD (1) and (2).   x + ( pi - x ) = pi .             [1 mark]

                        pi      pi sin x
            2 I  =  INT        ------------- dx
                        0      1 + cos^2 x

                              pi     sin x
                 =  pi   INT        ------------ dx
                              0     1 + cos^2 x

   STEP 5.  Substitute  t = cos x ,  dt = - sin x dx .           [2 marks]

            NEW LIMITS:   x = 0   ->  t = cos 0  =  1
                          x = pi  ->  t = cos pi = -1

                 pi   sin x            -1   ( - dt )         1     dt
            INT       ---------- dx = INT   --------- =  INT     -------
                 0    1 + cos^2x        1    1 + t^2       -1    1 + t^2

                                          1
                       =  [ Tan^-1 t ]
                                         -1

                       =  Tan^-1 ( 1 )  -  Tan^-1 ( -1 )

                            pi     (   pi  )       pi
                       =   ----  - ( - ----)  =   ----
                            4      (    4  )       2

   STEP 6.  Finish.                                              [1 mark]

                              pi          pi^2
            2 I  =  pi   x   ----   =    ------
                              2            2

                                pi^2
                      I  =     ------
                                 4
```

```
   +---------------------------------------------------------+
   |   ANSWER   INT 0 to pi of x sinx/(1+cos^2x) dx = pi^2/4 |
   +---------------------------------------------------------+
```

**CHECK numerically:** pi^2/4 = 2.467. Sampling the integrand at
x = pi/4, pi/2, 3pi/4 gives 0.370, 1.571, 1.111. Simpson's rule with those and
the zero endpoints gives roughly 2.4. Matches.

> **Related questions that use the identical five steps:**
> `INT 0 to pi of x/(1 + sin x) dx = pi` ,
> `INT 0 to pi of x tan x/(sec x + tan x) dx = pi(pi - 2)/2` ,
> `INT 0 to pi of x sin^3 x dx = 2 pi/3` .

---

### Q C2
**Obtain the reduction formula for `INT sin^n x dx` and hence evaluate
`INT from 0 to pi/2 of sin^6 x dx`.**

**ANSWER:**

```
   PART A — DERIVE THE FORMULA                                  [4 marks]

   Let   I_n  =  INT sin^n x dx .

   Write   sin^n x  =  ( sin^(n-1) x )( sin x )  and use BY PARTS with

        u  =  sin^(n-1) x           v  =  sin x
        du/dx = (n-1) sin^(n-2) x cos x         INT v dx = - cos x

   I_n  =  ( sin^(n-1) x )( - cos x )
              -  INT [ ( n-1 ) sin^(n-2) x cos x ] ( - cos x ) dx

        =  - sin^(n-1) x cos x  +  ( n - 1 ) INT sin^(n-2) x cos^2 x dx

   Replace  cos^2 x = 1 - sin^2 x :

        =  - sin^(n-1) x cos x
                 + ( n - 1 ) INT sin^(n-2) x ( 1 - sin^2 x ) dx

        =  - sin^(n-1) x cos x + (n-1) INT sin^(n-2) x dx
                                - (n-1) INT sin^n x dx

        =  - sin^(n-1) x cos x + ( n - 1 ) I_(n-2)  -  ( n - 1 ) I_n

   Bring the I_n terms together:

        I_n  +  ( n - 1 ) I_n  =  - sin^(n-1) x cos x + ( n - 1 ) I_(n-2)

              n I_n            =  - sin^(n-1) x cos x + ( n - 1 ) I_(n-2)

   +==================================================================+
   |                     sin^(n-1) x . cos x        n - 1             |
   |   INT sin^n x dx = - --------------------  +  ------- I_(n-2)    |
   |                              n                   n               |
   +==================================================================+

   PART B — THE DEFINITE VERSION ON [0, pi/2]                   [1 mark]

   Evaluate the first term between 0 and pi/2 :

        at x = pi/2 :   - sin^(n-1)(pi/2) . cos(pi/2)  =  - (1)(0)  =  0
        at x = 0     :   - sin^(n-1)(0) . cos(0)       =  - (0)(1)  =  0

   The first term VANISHES.   Hence, for  I_n = INT 0 to pi/2 sin^n x dx ,

                   n - 1
        I_n  =    -------  I_(n-2)          with  I_0 = pi/2 ,  I_1 = 1
                     n

   PART C — USE IT FOR n = 6                                    [2 marks]

        I_6  =  ( 5/6 ) I_4
             =  ( 5/6 )( 3/4 ) I_2
             =  ( 5/6 )( 3/4 )( 1/2 ) I_0
             =  ( 5/6 )( 3/4 )( 1/2 )( pi/2 )

                  15      pi        5 pi
             =   ----- x ----  =  --------
                  48      2         32
```

```
   +----------------------------------------------+
   |   INT 0 to pi/2 of sin^6 x dx  =  5 pi / 32  |
   +----------------------------------------------+
```

**CHECK:** 5pi/32 = 0.4909. The Wallis sequence runs
`pi/4 = 0.785 , 3pi/16 = 0.589 , 5pi/32 = 0.491` — steadily decreasing, as
required. And it must be less than `INT 0 to pi/2 sin^4 x dx = 0.589`. Correct.

> The examiner may ask the same question for `cos^n x`. Identical working,
> except the first term is `+ cos^(n-1) x sin x / n` and it still vanishes
> at both limits.

---

### Q C3
Evaluate `INT from 0 to pi/4 of log( 1 + tan x ) dx`

**ANSWER:**

```
   STEP 1.
                        pi/4
              I  =  INT       log( 1 + tan x ) dx                ...(1)

                        0

   STEP 2.  The limits are a = 0 and b = pi/4 , so a + b = pi/4 .
            Apply P4:  replace x by ( pi/4 - x ) .              [1 mark]

   STEP 3.  Simplify tan( pi/4 - x ) .                          [2 marks]

                             tan(pi/4)  -  tan x       1 - tan x
            tan( pi/4 - x ) = --------------------- = -------------
                             1 + tan(pi/4) tan x       1 + tan x

                                       1 - tan x
            1 + tan( pi/4 - x )  = 1 + -----------
                                       1 + tan x

                                   ( 1 + tan x ) + ( 1 - tan x )
                                 = ------------------------------
                                            1 + tan x

                                         2
                                 =  -------------
                                     1 + tan x

   STEP 4.  Write the second version of I .                     [1 mark]

                        pi/4     (      2      )
              I  =  INT        log( ----------- ) dx
                        0        (  1 + tan x  )

                        pi/4  [                          ]
                 =  INT       [ log 2 - log( 1 + tan x ) ] dx
                        0     [                          ]

                        pi/4                pi/4
                 =  INT       log 2 dx - INT      log( 1 + tan x ) dx
                        0                    0

                             pi
                 =  log2 x  ----   -   I                          ...(2)
                             4

   STEP 5.  Solve for I .                                       [2 marks]

                              pi
              2 I  =  log 2 x ----
                              4

                        pi
              I  =     ---- log 2
                        8

   STEP 6.  State the answer.                                   [1 mark]
```

```
   +--------------------------------------------------------+
   |  INT 0 to pi/4 of log(1 + tan x) dx  =  (pi/8) log 2   |
   +--------------------------------------------------------+
```

**CHECK numerically:** (0.3927)(0.6931) = 0.2722. The integrand rises from
log 1 = 0 to log 2 = 0.693 over a width of 0.785, and is concave, so the
average is a little under half of 0.693, giving roughly 0.27. Matches.

---

### Q C4
**Find the area of the region enclosed by the parabolas `y^2 = 4x` and
`x^2 = 4y`.**

**ANSWER:**

```
   STEP 1.  FIND THE INTERSECTION POINTS.                       [2 marks]

            From  x^2 = 4y  we get  y = x^2 / 4 .
            Substitute into  y^2 = 4x :

                 (  x^2 )2
                 ( ---- )   =  4 x
                 (  4   )

                  x^4
                 -----  =  4 x       ->     x^4  =  64 x
                   16

                 x ( x^3  -  64 )  =  0     ->     x = 0  or  x = 4

            When x = 0 , y = 0 .    When x = 4 , y = 16/4 = 4 .

            POINTS OF INTERSECTION:   ( 0 , 0 )   and   ( 4 , 4 ) .

   STEP 2.  SKETCH AND DECIDE WHICH CURVE IS ON TOP.            [1 mark]

        y
        ^
      4 |                          *(4,4)
        |                    ,-'''/|
        |                ,-'/////,'
        |             ,-'////// ,'         y = 2 sqrt(x)   [ upper ]
        |          ,-'//////, -'
      2 |       ,-'/////,-'                y = x^2 / 4     [ lower ]
        |    ,-'///,,-'
        |  ,'//,,-'
        +-*'-'------------------------------> x
        0           2          4

            Test x = 1 :   y^2 = 4x gives y = 2
                           x^2 = 4y gives y = 0.25
            So  y = 2 sqrt(x)  is ABOVE  y = x^2/4  on ( 0 , 4 ) .

   STEP 3.  SET UP THE INTEGRAL.                                [1 mark]

                        4  [                x^2 ]
              A  =  INT    [ 2 sqrt( x )  - --- ] dx
                        0  [                 4  ]

   STEP 4.  INTEGRATE.                                          [2 marks]

                  [       2              x^3 ] 4
              A = [ 2 x  --- x^(3/2)  - ----- ]
                  [       3              12  ] 0

                  [  4                 x^3 ] 4
                = [ --- x^(3/2)   -   ----- ]
                  [  3                 12  ] 0

   STEP 5.  SUBSTITUTE THE LIMITS.                              [1 mark]

            At x = 4 :    4^(3/2) = 8 ,   4^3 = 64

                  4              64        32       16
                 --- ( 8 )   -  ----   =  ----  -  ----
                  3              12        3        3

                  16
             =   ----
                   3

            At x = 0 :   0

                       16
              A  =    ----   square units       ( = 5.33 )
                        3
```

**CHECK by symmetry (an independent route):** the two parabolas are mirror
images in the line y = x, and both pass through (0,0) and (4,4).
Area under `y = 2 sqrt x` from 0 to 4 = `[ (4/3) x^(3/2) ] = 32/3 = 10.67`.
Area under `y = x^2/4` from 0 to 4 = `[ x^3/12 ] = 64/12 = 16/3 = 5.33`.
Difference = 10.67 - 5.33 = **5.33 = 16/3**. Matches.

Also: the enclosing square is 4 by 4 = 16, and the region is exactly one third
of it. Sensible.

---

### Q C5
**Find the area of the ellipse `x^2/a^2 + y^2/b^2 = 1` by integration, and
hence find the area of `x^2/16 + y^2/9 = 1`.**

**ANSWER:**

```
   STEP 1.  SKETCH AND USE SYMMETRY.                            [1 mark]

        y
        ^
      b |     ,---+---.
        |  ,'///////|///////'.
        | ///////// | ////////\
        +-----------+----------+-----> x
       -a \/////////|////////  a
        |  './//////|///////,'
     -b |     '-----+-----'

        The ellipse is symmetric about BOTH axes, so

              AREA  =  4 x ( area in the first quadrant )

   STEP 2.  MAKE y THE SUBJECT.                                 [1 mark]

              y^2         x^2         a^2 - x^2
             -----  = 1 - ----- =  --------------
              b^2         a^2           a^2

                        b
              y   =    --- sqrt( a^2 - x^2 )        ( upper half )
                        a

   STEP 3.  SET UP THE INTEGRAL.                                [1 mark]

            In the first quadrant x runs from 0 to a .

                                b       a
              A  =    4    x   ---  INT     sqrt( a^2 - x^2 ) dx
                                a       0

   STEP 4.  USE THE STANDARD RESULT.                            [2 marks]

              INT sqrt(a^2 - x^2) dx
                        x                     a^2          x
                  =   ---- sqrt(a^2 - x^2) + ----- Sin^-1( --- )  + c
                        2                      2            a

            At x = a :   (a/2)( 0 )  +  (a^2/2) Sin^-1( 1 )
                       =  0  +  ( a^2/2 )( pi/2 )   =   pi a^2 / 4

            At x = 0 :   0  +  ( a^2/2 ) Sin^-1( 0 )  =  0

                    a                            pi a^2
              INT      sqrt( a^2 - x^2 ) dx  =  --------
                    0                               4

   STEP 5.  FINISH.                                             [1 mark]

                          b      pi a^2
              A  =  4 x  ---  x --------   =   pi a b
                          a         4
```

```
   +----------------------------------------+
   |   AREA OF THE ELLIPSE  =  pi a b       |
   +----------------------------------------+
```

```
   STEP 6.  THE NUMERICAL PART.                                 [1 mark]

            For  x^2/16 + y^2/9 = 1 :   a^2 = 16 -> a = 4
                                        b^2 =  9 -> b = 3

              A  =  pi ( 4 )( 3 )  =  12 pi   square units    ( = 37.7 )
```

**CHECK:** put b = a and the formula gives `pi a^2`, the area of a circle —
which an ellipse with equal axes is. The formula passes. Good.

> The same six steps, with `b = a`, are the complete answer to
> **"Find the area of the circle x^2 + y^2 = a^2 by integration"**,
> which gives `pi a^2`. Learn one, get two.

---

### Q C6
Evaluate `INT from 0 to pi/2 of dx / ( 4 + 5 cos x )`

**ANSWER:**

```
   STEP 1.  Recognise the shape  1 / ( a + b cos x ) .
            The substitution is  t = tan( x/2 ) .              [1 mark]

              2 dt                 1 - t^2                 2 t
        dx = --------  ,   cos x = ---------  ,   sin x = ---------
              1 + t^2               1 + t^2                1 + t^2

   STEP 2.  CHANGE THE LIMITS.                                  [1 mark]

              x = 0     ->  t = tan 0      =  0
              x = pi/2  ->  t = tan( pi/4 ) =  1

   STEP 3.  Simplify the denominator.                           [2 marks]

                              ( 1 - t^2 )     4( 1 + t^2 ) + 5( 1 - t^2 )
              4 + 5 cos x = 4+5( ------- ) = -----------------------------
                              ( 1 + t^2 )              1 + t^2

                              4 + 4t^2 + 5 - 5t^2        9 - t^2
                          =  ---------------------  =  -----------
                                    1 + t^2              1 + t^2

   STEP 4.  Put it all together.                                [1 mark]

                        1    1 + t^2        2 dt              1     2 dt
              I  =  INT      ---------  x  --------  =  INT       ---------
                        0    9 - t^2        1 + t^2         0      9 - t^2

            The ( 1 + t^2 ) cancels — that is the whole point of the
            substitution.

   STEP 5.  Standard form.                                      [1 mark]

                         dx        1        | a + x |
              INT    ---------- = ----- log | ----- |  + c        , a = 3
                      a^2 - x^2    2 a      | a - x |

                              1       | 3 + t | 1
              I  =  2   x   ------ log| ----- |
                             2 ( 3 )  | 3 - t | 0

   STEP 6.  Substitute the limits.                              [1 mark]

                    1  [       ( 3 + 1 )           ( 3 + 0 ) ]
              =    --- [  log  ( ------- )  -  log ( ------- )]
                    3  [       ( 3 - 1 )           ( 3 - 0 ) ]

                    1  [                    ]
              =    --- [  log 2  -  log 1   ]
                    3  [                    ]

                    1
              I =  --- log 2               ( = 0.231 )
                    3
```

**CHECK numerically:** the integrand is 1/9 = 0.111 at x = 0, 1/(4 + 5/sqrt2)
= 0.132 at x = pi/4, and 1/4 = 0.25 at x = pi/2. Simpson's rule on those three
points gives (1.571/6)(0.111 + 4(0.132) + 0.25) = 0.229. Matches 0.231.

---

### Q C7
**Evaluate `INT from 0 to 2 of x^2 dx` as the limit of a sum, and hence verify
the Fundamental Theorem for this integral.**

**ANSWER:**

```
   PART A — THE LIMIT OF A SUM                                  [5 marks]

   STEP 1.  State the definition.

              INT a to b of f(x) dx
                   =  lim   h [ f(a) + f(a+h) + ... + f(a + (n-1)h) ]
                     n->inf

              with  h = ( b - a ) / n .

   STEP 2.  Here  a = 0 , b = 2 , f(x) = x^2 , so  h = 2/n
            and the r-th sample point is  a + r h = 2r/n .

   STEP 3.  Write the sum.

                          n-1  ( 2 r )2       2      n-1   4 r^2
              S_n  =  h   SUM  ( --- )   =   ---     SUM   ------
                          r=0  (  n  )        n      r=0    n^2

                            8     n-1
                   =      -----   SUM   r^2
                           n^3    r=0

   STEP 4.  Use  0^2 + 1^2 + ... + (n-1)^2 = ( n-1 ) n ( 2n-1 ) / 6 .

                        8       ( n - 1 ) n ( 2n - 1 )
              S_n  =  -----  x  -----------------------
                       n^3                6

                        8      ( n - 1 )( 2n - 1 )
                   =   ---  x  ---------------------
                        6              n^2

                        8   (      1 ) (       1 )
                   =   --- ( 1 -  --- )( 2  -  --- )
                        6   (      n ) (       n  )

   STEP 5.  Let  n -> infinity , so  1/n -> 0 .

                        8                     16        8
              LIMIT =  --- x ( 1 )( 2 )  =   ----  =   ---
                        6                      6        3

   PART B — VERIFY WITH THE FUNDAMENTAL THEOREM                 [2 marks]

              F(x)  =  x^3 / 3     since   F'(x) = x^2

              INT 0 to 2 of x^2 dx  =  F(2) - F(0)

                                       2^3       0^3        8
                                    =  -----  -  -----  =  ---
                                        3         3         3

              The two methods agree.
```

```
   +-------------------------------------------------+
   |   INT from 0 to 2 of x^2 dx  =  8/3             |
   +-------------------------------------------------+
```

> **TRAP:** if the question says "as the limit of a sum", Part A **is** the
> answer. Doing only Part B scores nothing, even though the number is right.

---

### Q C8
**Find the area of the region bounded by the parabola `y^2 = 4ax` and its
latus rectum.**

**ANSWER:**

```
   STEP 1.  SKETCH.                                             [1 mark]

            For y^2 = 4ax the focus is ( a , 0 ) and the latus rectum is
            the vertical line  x = a .  It meets the curve where
            y^2 = 4a(a) = 4a^2 , i.e. y = +2a and y = -2a .

        y
        ^
        |            | x = a
     2a |          ,-*  (a, 2a)
        |      ,-'////|
        |   ,-'///////|
        | ,'//////////|
        +*------------+-------------> x
        0 '.\\\\\\\\\\|
        |    '-.\\\\\\|
    -2a |       '-.\\\*  (a, -2a)

   STEP 2.  USE THE SYMMETRY ABOUT THE X-AXIS.                  [1 mark]

              AREA  =  2 x ( area of the upper half )

   STEP 3.  UPPER HALF:  y = sqrt( 4 a x ) = 2 sqrt(a) sqrt(x) ,
            x running from 0 to a .                             [1 mark]

                            a
              A  =  2  INT     2 sqrt(a) . x^(1/2) dx
                            0

   STEP 4.  INTEGRATE.                                          [2 marks]

                              [  2          ] a
              A  =  4 sqrt(a) [ --- x^(3/2) ]
                              [  3          ] 0

                     8
                =   --- sqrt(a) . a^(3/2)
                     3

   STEP 5.  SIMPLIFY.                                           [1 mark]

              sqrt(a) . a^(3/2)  =  a^(1/2 + 3/2)  =  a^2

                     8 a^2
              A  =  -------   square units
                       3

   STEP 6.  STATE THE ANSWER.                                   [1 mark]
```

```
   +-----------------------------------------------+
   |   AREA  =  8 a^2 / 3   square units           |
   +-----------------------------------------------+
```

**CHECK by slicing the other way (independent route):**
```
   x = y^2 / ( 4a ) , and each horizontal strip runs from the curve to x = a .

        A  =  INT from -2a to 2a of [ a  -  y^2/(4a) ] dy

           =  2 INT from 0 to 2a of [ a - y^2/(4a) ] dy      ( even integrand )

                 [        y^3   ] 2a         [          8 a^3 ]
           =  2  [ a y - ------- ]      =  2 [ 2 a^2 - ------- ]
                 [        12 a   ] 0         [           12 a  ]

           =  2 [ 2a^2  -  2a^2/3 ]  =  2 x ( 4 a^2 / 3 )  =  8 a^2 / 3

   MATCHES.
```

**CHECK a third way:** the bounding rectangle is `a` wide and `4a` tall, area
`4a^2`. A parabolic segment fills two thirds of its rectangle:
`(2/3)(4a^2) = 8a^2/3`. Matches again.

---

### Q C9
Evaluate `INT from 0 to pi of x / ( 1 + sin x ) dx`

**ANSWER:**

```
   STEP 1.
                        pi      x
              I  =  INT      --------- dx                        ...(1)
                        0    1 + sin x

   STEP 2.  P3 with a = pi , and  sin( pi - x ) = sin x .        [2 marks]

                        pi    pi - x
              I  =  INT      --------- dx                        ...(2)
                        0    1 + sin x

   STEP 3.  ADD (1) and (2).                                     [1 mark]

                        pi       pi                    pi     dx
            2 I  =  INT      ---------- dx  =  pi  INT      ---------
                        0    1 + sin x                 0    1 + sin x

   STEP 4.  Rationalise the denominator.                         [2 marks]

               1            1 - sin x         1 - sin x
            ---------- = ----------------- = -----------
            1 + sin x    (1+sinx)(1-sinx)      cos^2 x

                       =  sec^2 x  -  sec x tan x

   STEP 5.  Integrate.                                           [1 mark]

              INT ( sec^2 x - sec x tan x ) dx  =  tan x  -  sec x

            Note that  tan x - sec x = ( sin x - 1 )/cos x  is perfectly
            well behaved at x = pi/2 (both pieces blow up but the
            difference tends to 0), so we may substitute the limits.

                                     pi
              [ tan x  -  sec x ]
                                     0

              at x = pi :   tan pi - sec pi  =  0 - ( -1 )  =   1
              at x = 0  :   tan 0  - sec 0   =  0 -    1    =  -1

              value  =  1  -  ( -1 )  =  2

   STEP 6.  Finish.                                              [1 mark]

              2 I  =  pi x 2  =  2 pi

                I  =  pi
```

```
   +---------------------------------------------+
   |   INT 0 to pi of x/(1 + sin x) dx  =  pi    |
   +---------------------------------------------+
```

**CHECK numerically:** pi = 3.14. The integrand is 0 at x = 0, about 0.79 at
x = pi/2, and 3.14 at x = pi. Its average over width 3.14 is around 1.0,
giving roughly 3.1. Matches.

---

# WHICH QUESTIONS REPEAT MOST

```
  +------+--------------------------------------+---------+-------------+
  | RANK | QUESTION TYPE                        | SECTION | CHANCE IT   |
  |      |                                      |         | APPEARS     |
  +------+--------------------------------------+---------+-------------+
  |  1   | AREA by integration (curve + axis,   |    C    |  VERY HIGH  |
  |      | two curves, circle, ellipse,         |         |   ~ 85 %    |
  |      | parabola + latus rectum)             |         |             |
  +------+--------------------------------------+---------+-------------+
  |  2   | Evaluate using P3 / P4               |    C    |  VERY HIGH  |
  |      | ( sinx/(sinx+cosx) , x sinx/(1+cos^2x)|        |   ~ 80 %    |
  |      |   log(1+tanx) , x/(1+sinx) )         |         |             |
  +------+--------------------------------------+---------+-------------+
  |  3   | Wallis: INT 0 to pi/2 sin^n x dx     |  A or B |    HIGH     |
  |      | or cos^n x or sin^m cos^n            |         |   ~ 75 %    |
  +------+--------------------------------------+---------+-------------+
  |  4   | Straight evaluation, F(b) - F(a),    |    A    |  CERTAIN    |
  |      | with substitution                    |         |   ~ 95 %    |
  +------+--------------------------------------+---------+-------------+
  |  5   | REDUCTION formula: derive it for     |    C    |    HIGH     |
  |      | sin^n x (or cos^n x) and use it      |         |   ~ 60 %    |
  +------+--------------------------------------+---------+-------------+
  |  6   | EVEN / ODD property, limits -a to a  |    A    |    HIGH     |
  |      |                                      |         |   ~ 55 %    |
  +------+--------------------------------------+---------+-------------+
  |  7   | Definite integration by parts        |    B    |   MEDIUM    |
  |      | ( x sinx , x e^x , log x , Tan^-1 x )|         |   ~ 50 %    |
  +------+--------------------------------------+---------+-------------+
  |  8   | MODULUS integral, split at the       |  A or B |   MEDIUM    |
  |      | break point                          |         |   ~ 40 %    |
  +------+--------------------------------------+---------+-------------+
  |  9   | LIMIT OF A SUM from first principles |  B or C |   MEDIUM    |
  |      |                                      |         |   ~ 35 %    |
  +------+--------------------------------------+---------+-------------+
  | 10   | t = tan(x/2) with limits             |    C    |   MEDIUM    |
  |      | ( 1/(a + b cos x) )                  |         |   ~ 30 %    |
  +------+--------------------------------------+---------+-------------+
  | 11   | Periodic-function property           |    A    |    LOW      |
  |      | ( INT 0 to 2pi of |sin x| dx )       |         |   ~ 20 %    |
  +------+--------------------------------------+---------+-------------+
  | 12   | Reduction for tan^n x / sec^n x      |  B or C |    LOW      |
  |      |                                      |         |   ~ 15 %    |
  +------+--------------------------------------+---------+-------------+
```

```
  +------------------------------------------------------------------+
  |  THE MINIMUM VIABLE PREPARATION FOR THIS CHAPTER                 |
  |                                                                  |
  |  If you learn ONLY these five things you will still collect      |
  |  about 13 marks:                                                 |
  |                                                                  |
  |    1.  F(b) - F(a) , and changing limits on substitution   (4 M) |
  |    2.  The Wallis table for n = 2 to 7                     (2 M) |
  |    3.  The even/odd test on limits -a to a                 (2 M) |
  |    4.  "Call it I, write it twice, add" for P3/P4          (7 M) |
  |    5.  Area = INT (upper - lower) dx , with a sketch       (7 M) |
  |                                                                  |
  |  Items 4 and 5 are alternatives in Section C — you only need     |
  |  to attempt whichever one appears. Either way, 13 marks from     |
  |  five ideas is the best return in the whole paper.               |
  +------------------------------------------------------------------+
```
