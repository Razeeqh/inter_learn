# Integration — AP Board Previous-Year Questions

**Board:** Board of Intermediate Education, Andhra Pradesh (BIEAP)
**Paper:** Maths IIB · **Chapter 6 — Integration**

> **About the year tags:** BIEAP recycles the same integrals across many
> sessions, often with only the numbers changed. So the questions below are
> grouped by **"how often they appear"** rather than being tagged to one exact
> year. Before your exam, cross-check with the official papers at
> **bie.ap.gov.in**.

**Where this chapter appears in the Maths IIB paper:**

```
  +-------------+---------------------------------+---------------------+
  | SECTION A   | 10 questions, ANSWER ALL, 2M    | 2 or 3 of them come |
  |             |                                 | from Integration    |
  +-------------+---------------------------------+---------------------+
  | SECTION B   | 7 questions, ANY 5, 4M          | 1 or 2 from         |
  |             |                                 | Integration         |
  +-------------+---------------------------------+---------------------+
  | SECTION C   | 7 questions, ANY 5, 7M          | 1 from Integration  |
  |             |                                 | (+ 1 from Definite  |
  |             |                                 | Integrals)          |
  +-------------+---------------------------------+---------------------+
  |                                    PAPER TOTAL = 75 marks           |
  +---------------------------------------------------------------------+

  Realistic harvest from this chapter alone:  13 to 17 marks.
```

---

# ===============================================================
# SECTION A — VERY SHORT ANSWER (2 marks)
# These are your GUARANTEED marks. Answer all 10 in Section A.
# ===============================================================

## Topic: Direct standard integrals and algebraic tidying

### Q A1
Evaluate `INT ( 2x^3 - 3x + 5 ) / x^2 dx`

**ANSWER:**
```
   Split the fraction first (the bottom is a single term):

          2x^3      3x       5                        3       5
   INT [ ------  -  ----  +  ---- ] dx = INT [ 2x  -  ---  +  ---- ] dx
           x^2      x^2      x^2                       x      x^2

                                                              5
   =  x^2  -  3 log|x|  +  5 . ( x^-1 / -1 )  =  x^2 - 3 log|x| - ---  +  c
                                                              x
```

---

### Q A2
Evaluate `INT ( sqrt(x) + 1/sqrt(x) )^2 dx`

**ANSWER:**
```
   Expand:  ( sqrt x + 1/sqrt x )^2  =  x + 2 + 1/x

                                x^2
   INT ( x + 2 + 1/x ) dx  =   -----  +  2x  +  log|x|  +  c
                                 2
```

---

### Q A3
Evaluate `INT ( x^6 - 1 ) / ( x^2 - 1 ) dx`

**ANSWER:**
```
   x^6 - 1 = (x^2 - 1)(x^4 + x^2 + 1)      [ difference of cubes in x^2 ]

   So the integrand is simply  x^4 + x^2 + 1

        x^5      x^3
   =   -----  + -----  +  x  +  c
         5        3
```

---

### Q A4
Evaluate `INT x^2 / ( x^2 + 1 ) dx`

**ANSWER:**
```
    x^2       (x^2 + 1) - 1               1
   ------- = --------------- =  1  -  ---------
   x^2+1        x^2 + 1                x^2 + 1

   =  x  -  Tan^-1 x  +  c
```

---

## Topic: The f(ax + b) rule

### Q A5
Evaluate `INT e^(3x + 4) dx`

**ANSWER:**
```
         1
   =    --- e^(3x + 4)  +  c
         3

   CHECK:  d/dx [ (1/3) e^(3x+4) ] = (1/3)(3) e^(3x+4) = e^(3x+4)     correct
```

---

### Q A6
Evaluate `INT sin( 3x + 7 ) dx`

**ANSWER:**
```
          1
   =  -  --- cos( 3x + 7 )  +  c
          3
```

---

### Q A7
Evaluate `INT 1 / ( 5x - 2 ) dx`

**ANSWER:**
```
        1
   =   --- log | 5x - 2 |  +  c
        5
```

---

### Q A8
Evaluate `INT ( 3x + 1 )^5 dx`

**ANSWER:**
```
        1     ( 3x + 1 )^6        ( 3x + 1 )^6
   =   --- x --------------  =   --------------  +  c
        3          6                   18
```

---

## Topic: INT f'(x)/f(x) dx  =  log |f(x)|

### Q A9
Evaluate `INT ( 2x + 1 ) / ( x^2 + x + 5 ) dx`

**ANSWER:**
```
   d/dx ( x^2 + x + 5 ) = 2x + 1      <-- exactly the numerator

   =  log | x^2 + x + 5 |  +  c
```

---

### Q A10
Evaluate `INT cos x / ( 1 + sin x ) dx`

**ANSWER:**
```
   d/dx ( 1 + sin x ) = cos x

   =  log | 1 + sin x |  +  c
```

---

### Q A11
Evaluate `INT 1 / ( x log x ) dx`

**ANSWER:**
```
   Put  t = log x  ,  dt = (1/x) dx

   INT (1/t) dt  =  log | t |  +  c   =   log | log x |  +  c
```

---

### Q A12
Evaluate `INT sec^2 x / ( 1 + tan x ) dx`

**ANSWER:**
```
   d/dx ( 1 + tan x ) = sec^2 x

   =  log | 1 + tan x |  +  c
```

---

## Topic: Substitution

### Q A13
Evaluate `INT x e^(x^2) dx`

**ANSWER:**
```
   Put  t = x^2  ,  dt = 2x dx  ,  so  x dx = (1/2) dt

        1                1              1
   =   --- INT e^t dt = --- e^t + c  = --- e^(x^2)  +  c
        2                2              2
```

---

### Q A14
Evaluate `INT ( log x )^2 / x dx`

**ANSWER:**
```
   Put  t = log x  ,  dt = (1/x) dx

                    t^3          ( log x )^3
   INT t^2 dt  =   -----  + c = -------------  +  c
                     3                3
```

---

### Q A15
Evaluate `INT sin^3 x cos x dx`

**ANSWER:**
```
   Put  t = sin x  ,  dt = cos x dx

                   t^4         sin^4 x
   INT t^3 dt  =  -----  +c = ---------  +  c
                    4             4
```

---

### Q A16
Evaluate `INT e^(tan x) sec^2 x dx`

**ANSWER:**
```
   Put  t = tan x  ,  dt = sec^2 x dx

   INT e^t dt  =  e^t + c  =  e^(tan x)  +  c
```

---

## Topic: The nine standard forms

### Q A17
Evaluate `INT dx / ( x^2 + 9 )`

**ANSWER:**
```
   Here a = 3.

        1              x
   =   --- Tan^-1  ( ----- )  +  c
        3              3
```

---

### Q A18
Evaluate `INT dx / ( x^2 - 4 )`

**ANSWER:**
```
   Here a = 2.

        1        | x - 2 |
   =   --- log   | ------- |  +  c
        4        | x + 2 |
```

---

### Q A19
Evaluate `INT dx / sqrt( 25 - x^2 )`

**ANSWER:**
```
                   x
   =  Sin^-1  ( ------- )  +  c
                   5
```

---

### Q A20
Evaluate `INT dx / sqrt( x^2 + 16 )`

**ANSWER:**
```
   =  log | x  +  sqrt( x^2 + 16 ) |  +  c
```

---

## Topic: e^x [ f(x) + f'(x) ]

### Q A21
Evaluate `INT e^x ( sin x + cos x ) dx`

**ANSWER:**
```
   f = sin x  ,  f' = cos x        so the bracket is  f + f'

   =  e^x sin x  +  c
```

---

### Q A22
Evaluate `INT e^x ( 1/x - 1/x^2 ) dx`

**ANSWER:**
```
   f = 1/x  ,  f' = -1/x^2

          e^x
   =    -------  +  c
           x
```

---

### Q A23
Evaluate `INT e^x ( sec x + sec x tan x ) dx`

**ANSWER:**
```
   f = sec x  ,  f' = sec x tan x

   =  e^x sec x  +  c
```

---

## Topic: Trigonometric identities first

### Q A24
Evaluate `INT tan^2 x dx`

**ANSWER:**
```
   tan^2 x = sec^2 x - 1

   INT ( sec^2 x - 1 ) dx  =  tan x  -  x  +  c
```

---

### Q A25
Evaluate `INT dx / ( 1 + cos x )`

**ANSWER:**
```
   1 + cos x = 2 cos^2 ( x/2 )

          1                        1                             x
   = INT ------------- dx  =      --- INT sec^2 (x/2) dx =  tan ---  +  c
         2 cos^2(x/2)              2                             2

   (the 1/2 outside is cancelled by the 2 from integrating a function of x/2)
```

---

### Q A26
Evaluate `INT 2^x 3^x dx`

**ANSWER:**
```
   2^x 3^x = 6^x

        6^x
   =  --------  +  c
      log 6
```

---

# ===============================================================
# SECTION B — SHORT ANSWER (4 marks)
# Answer any 5 out of 7. Integration usually supplies 1 or 2.
# ===============================================================

### Q B1
Evaluate `INT x e^x dx`

**ANSWER:**
```
   Integration by parts.  ILATE:  x is Algebraic (A), e^x is Exponential (E).
   A comes before E, so  u = x ,  v = e^x .

   INT v dx = e^x

   INT x e^x dx  =  x e^x  -  INT ( 1 ) ( e^x ) dx

                 =  x e^x  -  e^x  +  c

                 =  e^x ( x - 1 )  +  c

   CHECK:  d/dx [ e^x(x-1) ] = e^x(x-1) + e^x = x e^x        correct
```

---

### Q B2
Evaluate `INT x sin x dx`

**ANSWER:**
```
   ILATE:  u = x  (A) ,  v = sin x  (T) ,   INT v dx = -cos x

   =  x ( -cos x )  -  INT ( 1 )( -cos x ) dx

   =  -x cos x  +  INT cos x dx

   =  -x cos x  +  sin x  +  c

   CHECK:  d/dx ( -x cos x + sin x ) = -cos x + x sin x + cos x = x sin x
```

---

### Q B3
Evaluate `INT x^2 log x dx`

**ANSWER:**
```
   ILATE:  L before A, so  u = log x ,  v = x^2 ,  INT v dx = x^3 / 3

        x^3                1      x^3
   =  ------- log x  - INT --- . ------ dx
         3                 x       3

        x^3            1
   =  ------- log x - --- INT x^2 dx
         3            3

        x^3            x^3
   =  ------- log x - ------  +  c
         3              9
```

---

### Q B4
Evaluate `INT Tan^-1 x dx`

**ANSWER:**
```
   Write it as  ( Tan^-1 x ) x 1 .   ILATE: I comes first,
   so  u = Tan^-1 x ,  v = 1 ,  INT v dx = x .

                               1
   =  x Tan^-1 x  -  INT  --------- . x dx
                           1 + x^2

                       1          2x
   =  x Tan^-1 x  -   --- INT --------- dx
                       2      1 + x^2

                       1
   =  x Tan^-1 x  -   --- log ( 1 + x^2 )  +  c
                       2
```

---

### Q B5
Evaluate `INT sin 3x cos 5x dx`

**ANSWER:**
```
   A product of sines/cosines can never be integrated directly.
   Use  2 sin A cos B = sin(A+B) + sin(A-B) :

                     1                             1
   sin 3x cos 5x =  --- [ sin 8x + sin(-2x) ]  =  --- [ sin 8x - sin 2x ]
                     2                             2

         1
   = INT --- ( sin 8x - sin 2x ) dx
         2

        1     -cos 8x       -cos 2x
   =   --- [ ---------  -  --------- ]  +  c
        2        8             2

          cos 8x       cos 2x
   =  -  --------  +  --------  +  c
            16            4
```

---

### Q B6
Evaluate `INT sin^2 x dx`

**ANSWER:**
```
              1 - cos 2x
   sin^2 x = ------------
                  2

        1                          1        sin 2x
   =   --- INT ( 1 - cos 2x ) dx = --- [ x - -------- ]  +  c
        2                          2            2

        x      sin 2x
   =   ---  -  --------  +  c
        2         4
```

---

### Q B7
Evaluate `INT dx / ( x^2 + 4x + 13 )`

**ANSWER:**
```
   Complete the square:

   x^2 + 4x + 13  =  ( x^2 + 4x + 4 )  +  9  =  ( x + 2 )^2  +  3^2

              dx                1              x + 2
   = INT --------------  =     --- Tan^-1  ( --------- )  +  c
        (x+2)^2 + 3^2           3                3
```

---

### Q B8
Evaluate `INT dx / sqrt( x^2 + 2x + 5 )`

**ANSWER:**
```
   x^2 + 2x + 5  =  ( x + 1 )^2  +  4  =  ( x + 1 )^2 + 2^2

              dx
   = INT --------------------
         sqrt( (x+1)^2 + 2^2 )

   =  log | ( x + 1 )  +  sqrt( x^2 + 2x + 5 ) |   +  c
```

---

### Q B9
Evaluate `INT dx / sqrt( 5 - 2x - x^2 )`

**ANSWER:**
```
   5 - 2x - x^2 = -( x^2 + 2x - 5 ) = -( (x+1)^2 - 6 ) = 6 - ( x + 1 )^2

                 dx                                x + 1
   = INT ------------------------  =  Sin^-1  ( ----------- )  +  c
         sqrt( (sqrt 6)^2 - (x+1)^2 )              sqrt 6
```

---

### Q B10
Evaluate `INT dx / ( 2x^2 + x - 1 )`

**ANSWER:**
```
   The bottom FACTORISES, so partial fractions is faster than completing
   the square:

   2x^2 + x - 1 = ( 2x - 1 )( x + 1 )

         1              A          B
   -------------- =  --------  +  -------
   (2x-1)(x+1)        2x - 1       x + 1

   1 = A( x + 1 ) + B( 2x - 1 )

   x = -1   :   1 = -3B        =>   B = -1/3
   x = 1/2  :   1 = (3/2) A    =>   A = 2/3

        2       dx           1       dx
   =   --- INT ------   -   --- INT -------
        3      2x - 1        3       x + 1

        2      1                    1
   =   --- .  --- log|2x - 1|  -   --- log|x + 1|  +  c
        3      2                    3

        1        | 2x - 1 |
   =   --- log   | -------- |  +  c
        3        |  x + 1  |
```

---

### Q B11
Evaluate `INT dx / ( ( x + 1 )( x + 2 ) )`

**ANSWER:**
```
        1              A          B
   ------------  =  -------  +  -------
   (x+1)(x+2)        x + 1       x + 2

   1 = A( x + 2 ) + B( x + 1 )

   x = -1  :  1 = A     =>  A = 1
   x = -2  :  1 = -B    =>  B = -1

   =  log |x + 1|  -  log |x + 2|  +  c

               | x + 1 |
   =  log      | ------- |  +  c
               | x + 2 |
```

---

### Q B12
Evaluate `INT sqrt( 9 - x^2 ) dx`

**ANSWER:**
```
   Standard form with a = 3 :

                             x                   a^2         x
   INT sqrt(a^2 - x^2) dx = --- sqrt(a^2-x^2) + ----- Sin^-1 ---  + c
                             2                    2          a

        x                    9              x
   =   --- sqrt( 9 - x^2 ) + --- Sin^-1  ( --- )  +  c
        2                    2              3
```

---

### Q B13
Evaluate `INT e^x ( 1 + sin x ) / ( 1 + cos x ) dx`

**ANSWER:**
```
   Use half angles:   1 + sin x = 1 + 2 sin(x/2) cos(x/2)
                      1 + cos x = 2 cos^2 (x/2)

   1 + sin x           1                 2 sin(x/2) cos(x/2)
   ----------  =  -------------   +    ---------------------
   1 + cos x      2 cos^2(x/2)             2 cos^2(x/2)

                      1
              =      --- sec^2 (x/2)   +   tan (x/2)
                      2

   Now this is exactly  f'(x) + f(x)  with  f(x) = tan (x/2) ,
   because  f'(x) = (1/2) sec^2 (x/2) .

   INT e^x [ f + f' ] dx  =  e^x f(x)

                                     x
   =  e^x  tan  ( --- )   +   c
                    2
```

---

### Q B14
Evaluate `INT e^x ( x + 1 ) / ( x + 2 )^2 dx`

**ANSWER:**
```
   Split the numerator:  x + 1 = ( x + 2 ) - 1

     x + 1          x + 2             1            1            1
   ---------- =  ---------- -  ---------- =   -------  -  -----------
   (x + 2)^2     (x + 2)^2     (x + 2)^2       x + 2       (x + 2)^2

   Take  f(x) = 1/(x + 2)   =>   f'(x) = -1/(x + 2)^2

   The bracket is exactly  f + f' .

               e^x
   =        ---------  +  c
              x + 2
```

---

### Q B15
Evaluate `INT dx / ( 1 - sin x )`

**ANSWER:**
```
   Multiply top and bottom by ( 1 + sin x ) :

        1 + sin x            1 + sin x
   INT ------------ dx = INT ----------- dx
        1 - sin^2 x            cos^2 x

   = INT ( sec^2 x  +  sec x tan x ) dx

   =  tan x  +  sec x  +  c
```

---

### Q B16
Evaluate `INT cos^3 x dx`

**ANSWER:**
```
   Method 1 (identity):

              3 cos x + cos 3x
   cos^3 x = ------------------
                    4

        3               1     sin 3x       3 sin x       sin 3x
   =   --- sin x  +    --- . --------  =  ----------  +  --------  +  c
        4               4       3              4            12


   Method 2 (substitution) — same answer in a different form:

   cos^3 x = ( 1 - sin^2 x ) cos x  ,   put t = sin x , dt = cos x dx

                            t^3                 sin^3 x
   = INT ( 1 - t^2 ) dt = t - ---- + c = sin x - --------- + c
                             3                      3
```

---

### Q B17
Evaluate `INT ( 3x + 1 ) / sqrt( x^2 + 4x + 5 ) dx`

**ANSWER:**
```
   Derivative of the inside:  d/dx ( x^2 + 4x + 5 ) = 2x + 4

   Write   3x + 1  =  A ( 2x + 4 )  +  B

     x terms   :  3 = 2A          =>  A = 3/2
     constants :  1 = 4A + B = 6 + B   =>  B = -5

        3          2x + 4                             dx
   =   --- INT ------------------- dx  -  5 INT -------------------
        2      sqrt(x^2 + 4x + 5)             sqrt(x^2 + 4x + 5)

   FIRST PIECE:  INT f'/sqrt(f) = 2 sqrt(f)

        3
   =   --- . 2 sqrt( x^2 + 4x + 5 )  =  3 sqrt( x^2 + 4x + 5 )
        2

   SECOND PIECE:  x^2 + 4x + 5 = ( x + 2 )^2 + 1

   =  - 5 log | ( x + 2 ) + sqrt( x^2 + 4x + 5 ) |

   FINAL:

   = 3 sqrt(x^2+4x+5)  -  5 log | (x+2) + sqrt(x^2+4x+5) |  +  c
```

---

### Q B18
Evaluate `INT e^x sin x dx`

**ANSWER:**
```
   Call the integral  I.   By parts with  u = sin x , v = e^x :

   I  =  e^x sin x  -  INT e^x cos x dx

   By parts again on the second integral, u = cos x , v = e^x :

   INT e^x cos x dx  =  e^x cos x  +  INT e^x sin x dx  =  e^x cos x  +  I

   So    I  =  e^x sin x  -  e^x cos x  -  I

        2I  =  e^x ( sin x - cos x )

              e^x
         I = ----- ( sin x  -  cos x )  +  c
               2
```

---

# ===============================================================
# SECTION C — LONG ANSWER (7 marks)
# Answer any 5 out of 7. Integration reliably gives you ONE of them.
# Write EVERY step. Marks are given step by step.
# ===============================================================

## Q C1  ***  the single most repeated 7-mark integral  ***
Evaluate `INT ( 2x + 5 ) / sqrt( x^2 + 2x + 5 ) dx`

**ANSWER:**

```
  STEP 1 — Differentiate the quadratic under the root.

           d
          ---- ( x^2 + 2x + 5 )  =  2x + 2
           dx

  STEP 2 — Split the numerator against that derivative.

          2x + 5  =  A ( 2x + 2 )  +  B

          Compare x         :   2 = 2A          =>  A = 1
          Compare constants :   5 = 2A + B = 2 + B   =>  B = 3

  STEP 3 — Break the integral into two pieces.

                     2x + 2                              dx
      I  =  1 . INT ------------------- dx   +   3 INT -------------------
                    sqrt(x^2 + 2x + 5)               sqrt(x^2 + 2x + 5)

            \______________________/           \_______________________/
                    I(1)                                 I(2)

  STEP 4 — Do I(1).  It is exactly  INT f'(x) / sqrt(f(x)) dx  =  2 sqrt(f(x)).

      I(1)  =  2 sqrt( x^2 + 2x + 5 )

      ( Put t = x^2 + 2x + 5 , dt = (2x+2) dx , then INT dt/sqrt t = 2 sqrt t )

  STEP 5 — Do I(2).  Complete the square.

      x^2 + 2x + 5  =  ( x^2 + 2x + 1 ) + 4  =  ( x + 1 )^2  +  2^2

                        dx
      I(2)  =  3 INT --------------------  =  3 log | (x+1) + sqrt((x+1)^2+4) |
                     sqrt( (x+1)^2 + 2^2 )

            =  3 log | ( x + 1 )  +  sqrt( x^2 + 2x + 5 ) |

  STEP 6 — Add them and put + c.

   +--------------------------------------------------------------------+
   |                                                                    |
   |  I = 2 sqrt(x^2+2x+5) + 3 log | (x+1) + sqrt(x^2+2x+5) |  +  c     |
   |                                                                    |
   +--------------------------------------------------------------------+

  CHECK (do this if you have 40 seconds spare):

     d/dx [ 2 sqrt(f) ]  =  (2x+2)/sqrt(f)

     d/dx [ 3 log|(x+1) + sqrt(f)| ]
         =  3 . [ 1 + (x+1)/sqrt(f) ] / [ (x+1) + sqrt(f) ]
         =  3 . [ sqrt(f) + (x+1) ] / [ sqrt(f) ( (x+1) + sqrt(f) ) ]
         =  3 / sqrt(f)

     Sum  =  (2x + 2 + 3) / sqrt(f)  =  (2x + 5)/sqrt(x^2+2x+5)     correct
```

---

## Q C2  ***  the t = tan(x/2) machine  ***
Evaluate `INT dx / ( 4 cos x + 3 sin x + 5 )`

**ANSWER:**

```
  STEP 1 — Name the substitution and write the three replacements.

        Put   t = tan ( x / 2 )

                    2t                    1 - t^2                2 dt
        sin x  =  --------     cos x  =  ---------      dx  =  ---------
                  1 + t^2                 1 + t^2               1 + t^2

  STEP 2 — Rebuild the denominator.

                                 1 - t^2         2t
        4 cos x + 3 sin x + 5 = 4 --------- + 3 -------- + 5
                                  1 + t^2       1 + t^2

                                4( 1 - t^2 ) + 3( 2t ) + 5( 1 + t^2 )
                             = ---------------------------------------
                                             1 + t^2

                                4 - 4t^2 + 6t + 5 + 5t^2
                             = --------------------------
                                        1 + t^2

                                t^2 + 6t + 9        ( t + 3 )^2
                             = --------------  =  ---------------
                                  1 + t^2            1 + t^2

  STEP 3 — Substitute everything in. Watch the (1 + t^2) cancel.

                2 dt / ( 1 + t^2 )                    2 dt
        I = INT ---------------------- = INT ------------------
                (t + 3)^2 / (1 + t^2)          ( t + 3 )^2

  STEP 4 — Integrate in t.

        I = 2 INT ( t + 3 )^-2 dt

                ( t + 3 )^-1              -2
          = 2 . -------------- + c  =  ---------- + c
                     -1                  t + 3

  STEP 5 — Put x back.

   +----------------------------------------------------------------+
   |                                                                |
   |                       - 2                                      |
   |        I   =   ----------------------   +   c                  |
   |                 tan ( x / 2 )  +  3                            |
   |                                                                |
   +----------------------------------------------------------------+
```

---

## Q C3  ***  the other t = tan(x/2) favourite  ***
Evaluate `INT dx / ( 5 + 4 cos x )`

**ANSWER:**

```
  STEP 1 — Put  t = tan(x/2) ,  cos x = (1 - t^2)/(1 + t^2) ,
           dx = 2 dt / (1 + t^2).

  STEP 2 — Rebuild the denominator.

                          1 - t^2       5(1 + t^2) + 4(1 - t^2)
        5 + 4 cos x = 5 + 4 -------- = -------------------------
                            1 + t^2            1 + t^2

                          5 + 5t^2 + 4 - 4t^2        t^2 + 9
                       = ---------------------  =  -----------
                               1 + t^2               1 + t^2

  STEP 3 — Substitute.

                2 dt / (1 + t^2)                2 dt
        I = INT ------------------  =  INT  ------------
                (t^2 + 9)/(1 + t^2)           t^2 + 9

  STEP 4 — Standard form  INT dt/(t^2 + a^2) = (1/a) Tan^-1 (t/a),  a = 3.

                  1              t              2              t
        I = 2 .  --- Tan^-1  ( --- )  + c  =   --- Tan^-1  ( --- ) + c
                  3             3               3             3

  STEP 5 — Put x back.

   +--------------------------------------------------------------+
   |                                                              |
   |          2                 tan ( x / 2 )                     |
   |   I  =  --- Tan^-1   (  ------------------  )   +   c        |
   |          3                       3                           |
   |                                                              |
   +--------------------------------------------------------------+
```

---

## Q C4  ***  partial fractions with a repeated factor  ***
Evaluate `INT ( 3x - 2 ) / ( ( x + 1 )^2 ( x + 3 ) ) dx`

**ANSWER:**

```
  STEP 1 — Check the degrees.
        Top has degree 1, bottom has degree 3.  1 < 3, so NO division needed.

  STEP 2 — Write the correct shape.  A repeated factor (x+1)^2 needs TWO terms.

          3x - 2                A            B             C
      ------------------  =  -------  +  ----------  +  -------
      ( x+1 )^2 ( x+3 )       x + 1      ( x+1 )^2       x + 3

  STEP 3 — Multiply through by ( x+1 )^2 ( x+3 ).

      3x - 2  =  A ( x + 1 )( x + 3 )  +  B ( x + 3 )  +  C ( x + 1 )^2

  STEP 4 — Substitute smart values.

      Put x = -1 :    3(-1) - 2  =  B ( 2 )
                             -5  =  2B          =>   B = -5/2

      Put x = -3 :    3(-3) - 2  =  C ( -2 )^2
                            -11  =  4C          =>   C = -11/4

      Compare the coefficient of x^2 (there is no x^2 on the left, so it is 0):

                    0  =  A  +  C     =>   A = -C = 11/4

  STEP 5 — Write the three easy integrals.

        11        dx          5           dx           11        dx
   I = ---- INT -------  -   --- INT -----------  -   ---- INT -------
        4        x+1          2       ( x+1 )^2        4        x+3

  STEP 6 — Integrate each one.

        INT dx/(x+1)      =  log | x + 1 |
        INT dx/(x+1)^2    =  -1 / ( x + 1 )
        INT dx/(x+3)      =  log | x + 3 |

        11                  5        -1          11
   I = ---- log|x+1|   -   --- . ( --------- ) - ---- log|x+3| + c
        4                   2       x + 1         4

  STEP 7 — Tidy up.

   +-----------------------------------------------------------------+
   |                                                                 |
   |        11        | x + 1 |             5                        |
   |  I =  ---- log   | ------- |   +   ----------   +   c           |
   |         4        | x + 3 |          2( x + 1 )                  |
   |                                                                 |
   +-----------------------------------------------------------------+
```

---

## Q C5  ***  root on top, plus completing the square  ***
Evaluate `INT sqrt( x^2 + 2x + 5 ) dx`

**ANSWER:**

```
  STEP 1 — Complete the square under the root.

      x^2 + 2x + 5  =  ( x^2 + 2x + 1 ) + 4  =  ( x + 1 )^2  +  2^2

  STEP 2 — Substitute  X = x + 1 , so dX = dx , and a = 2.

      I  =  INT sqrt( X^2 + a^2 ) dX

  STEP 3 — Quote the standard form.

                                X                    a^2
      INT sqrt(X^2 + a^2) dX = --- sqrt(X^2 + a^2) + ---- log | X + sqrt(X^2+a^2) |
                                2                     2

  STEP 4 — Put a = 2.

           X                         4
      I = --- sqrt( X^2 + 4 )  +   ---- log | X + sqrt( X^2 + 4 ) |
           2                         2

           X
        = --- sqrt( X^2 + 4 )  +  2 log | X + sqrt( X^2 + 4 ) |

  STEP 5 — Replace X by ( x + 1 ).

   +---------------------------------------------------------------------+
   |                                                                     |
   |        x + 1                                                        |
   |  I =  ------- sqrt( x^2 + 2x + 5 )                                  |
   |          2                                                          |
   |                                                                     |
   |          +  2 log | ( x + 1 ) + sqrt( x^2 + 2x + 5 ) |   +   c      |
   |                                                                     |
   +---------------------------------------------------------------------+
```

---

## Q C6  ***  obtain and use a reduction formula  ***
Obtain a reduction formula for `INT sin^n x dx` (n a positive integer, n >= 2)
and hence evaluate `INT sin^4 x dx`.

**ANSWER:**

```
  PART 1 — THE DERIVATION

  Let   I(n)  =  INT sin^n x dx  =  INT sin^(n-1) x . sin x dx

  Integrate by parts with

        u = sin^(n-1) x                v = sin x
        u' = (n-1) sin^(n-2) x cos x   INT v dx = - cos x

  I(n) = sin^(n-1)x ( -cos x )  -  INT (n-1) sin^(n-2)x cos x ( -cos x ) dx

       = - sin^(n-1)x cos x  +  (n-1) INT sin^(n-2)x cos^2 x dx

  Replace  cos^2 x = 1 - sin^2 x :

       = - sin^(n-1)x cos x  +  (n-1) INT sin^(n-2)x ( 1 - sin^2 x ) dx

       = - sin^(n-1)x cos x  +  (n-1) INT sin^(n-2)x dx
                             -  (n-1) INT sin^n x dx

       = - sin^(n-1)x cos x  +  (n-1) I(n-2)  -  (n-1) I(n)

  Bring the I(n) term to the left:

       I(n) + (n-1) I(n)  =  - sin^(n-1)x cos x  +  (n-1) I(n-2)

              n I(n)      =  - sin^(n-1)x cos x  +  (n-1) I(n-2)

   +---------------------------------------------------------------------+
   |                                                                     |
   |               - sin^(n-1) x cos x           n - 1                   |
   |     I(n)  =  ----------------------   +   -------  I(n-2)           |
   |                        n                      n                     |
   |                                                                     |
   +---------------------------------------------------------------------+

  PART 2 — USE IT FOR n = 4

        - sin^3 x cos x       3
  I(4) = ---------------  +  --- I(2)
               4              4

  Now  I(2) = INT sin^2 x dx = INT (1 - cos 2x)/2 dx

                x      sin 2x
            =  ---  -  --------
                2         4

  Therefore

        - sin^3 x cos x       3       x      sin 2x
  I(4) = ---------------  +  --- (   ---  -  -------- )   +   c
               4              4       2         4

   +---------------------------------------------------------------------+
   |                                                                     |
   |          - sin^3 x cos x        3x        3 sin 2x                  |
   |  I(4) = -----------------  +  ------  -  -----------   +   c        |
   |                 4               8            16                     |
   |                                                                     |
   +---------------------------------------------------------------------+
```

---

## Q C7  ***  triple product of cosines  ***
Evaluate `INT cos x cos 2x cos 3x dx`

**ANSWER:**

```
  STEP 1 — Pair up TWO of them first. Take cos x and cos 3x.

        2 cos A cos B = cos(A+B) + cos(A-B)

                          1                        1
        cos x cos 3x  =  --- [ cos 4x + cos 2x ] = --- ( cos 4x + cos 2x )
                          2                        2

  STEP 2 — Multiply by the remaining cos 2x.

                                    1
        cos x cos 2x cos 3x  =     --- ( cos 4x cos 2x  +  cos^2 2x )
                                    2

  STEP 3 — Convert each piece again.

                            1
        cos 4x cos 2x  =   --- ( cos 6x + cos 2x )
                            2

                            1 + cos 4x
        cos^2 2x       =  -------------
                                2

  STEP 4 — Put it together.

              1     1                       1 + cos 4x
        =    --- [ --- ( cos6x + cos2x ) + ------------ ]
              2     2                            2

              1
        =    --- ( cos 6x + cos 2x + 1 + cos 4x )
              4

  STEP 5 — Integrate term by term.

              1     sin 6x     sin 2x           sin 4x
        I =  --- [ -------- + -------- +  x  + -------- ]  +  c
              4       6          2                4

   +-------------------------------------------------------------------+
   |                                                                   |
   |         sin 6x      sin 2x       x       sin 4x                   |
   |   I =  --------  +  -------  +  ---  +  --------   +   c          |
   |           24           8         4         16                     |
   |                                                                   |
   +-------------------------------------------------------------------+
```

---

## Q C8  ***  linear over quadratic  ***
Evaluate `INT ( x + 3 ) / ( x^2 + 4x + 13 ) dx`

**ANSWER:**

```
  STEP 1 — Derivative of the bottom:   d/dx ( x^2 + 4x + 13 ) = 2x + 4

  STEP 2 — Split the numerator against it.

        x + 3  =  A ( 2x + 4 )  +  B

        x terms   :   1 = 2A            =>  A = 1/2
        constants :   3 = 4A + B = 2 + B  =>  B = 1

  STEP 3 — Two pieces.

         1        2x + 4                          dx
   I =  --- INT ------------- dx    +    1 . INT -------------
         2      x^2 + 4x + 13                    x^2 + 4x + 13

  STEP 4 — First piece is  INT f'/f = log|f| .

         1
   =    --- log | x^2 + 4x + 13 |
         2

  STEP 5 — Second piece: complete the square.

        x^2 + 4x + 13 = ( x + 2 )^2 + 3^2

                dx                1              x + 2
        INT --------------  =    --- Tan^-1  ( --------- )
            (x+2)^2 + 3^2         3                3

  STEP 6 — Final answer.

   +-------------------------------------------------------------------+
   |                                                                   |
   |        1                           1              x + 2           |
   |  I =  --- log | x^2 + 4x + 13 | + --- Tan^-1  ( ------- )  +  c   |
   |        2                           3                3             |
   |                                                                   |
   +-------------------------------------------------------------------+
```

---

# ===============================================================
# WHICH QUESTIONS REPEAT MOST — study top-down if short on time
# ===============================================================

```
  RANK  QUESTION TYPE                                    SECTION   CHANCE
  ----  ---------------------------------------------    -------   -----------
   1    (px + q)/sqrt(ax^2+bx+c)  by splitting            C         almost every
        the numerator                                              year
   2    1/(a + b cos x) or 1/(a sinx + b cosx + c)        C         almost every
        using t = tan(x/2)                                          year
   3    Integration by parts, one round                   B         very high
        (x sin x , x e^x , x^2 log x , Tan^-1 x)
   4    e^x [ f(x) + f'(x) ] type                         A / B     very high
   5    INT f'(x)/f(x) dx = log|f(x)|                     A         very high
   6    Complete the square:  1/(ax^2+bx+c)               B         very high
        and 1/sqrt(ax^2+bx+c)
   7    Partial fractions                                 B / C     high
   8    Trigonometric products                            B / C     high
        (sin mx cos nx , cos x cos 2x cos 3x)
   9    Direct standard integral / f(ax + b)              A         guaranteed
  10    The nine standard forms quoted directly           A / B     high
        (1/(x^2+a^2) , 1/sqrt(a^2-x^2) , sqrt(a^2-x^2))
  11    Reduction formula for sin^n x or cos^n x          C         moderate
  12    Powers of sin and cos (sin^2 , cos^3 , sin^4)     B         moderate
  13    e^(ax) sin(bx) , e^(ax) cos(bx)                   B         moderate
  14    Substitution t = log x , t = tan x , t = e^x      A         moderate
```

```
  +-------------------------------------------------------------------+
  |  EXAM-HALL PLAN FOR THIS CHAPTER                                  |
  |                                                                   |
  |  Section A : answer the Integration questions FIRST.              |
  |              They take 60 seconds each and cannot be lost.        |
  |                                                                   |
  |  Section B : take the by-parts one and the complete-the-square    |
  |              one. Skip anything you do not recognise in 15 sec.   |
  |                                                                   |
  |  Section C : the Integration question is nearly always either     |
  |              a (px+q)/sqrt(...) or a t = tan(x/2).                |
  |              Practise those two shapes until they are automatic   |
  |              and you have a 7-mark question banked before you     |
  |              even open the paper.                                 |
  +-------------------------------------------------------------------+
```
