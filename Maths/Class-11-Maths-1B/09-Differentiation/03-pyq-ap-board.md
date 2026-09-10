# Differentiation — AP Board Previous-Year Questions

**Board:** Board of Intermediate Education, Andhra Pradesh (BIEAP)
**Paper:** Maths IB · **Chapter 9**

> **About the year tags:** BIEAP recycles the same questions across many sessions.
> So the questions below are grouped by **"how often they appear"** rather than
> being tagged to one exact year. No year has been invented for any question here.
> Before your exam, cross-check with the official question papers at
> **bie.ap.gov.in**.

**Where this chapter appears in the Maths IB paper:**

```
  +--------------------------------------------------------------------+
  |  SECTION A   10 questions x 2 marks   ANSWER ALL          =  20    |
  |  SECTION B    7 questions x 4 marks   ANSWER ANY 5        =  20    |
  |  SECTION C    7 questions x 7 marks   ANSWER ANY 5        =  35    |
  |                                                   TOTAL   =  75    |
  +--------------------------------------------------------------------+

  Differentiation normally supplies:

  Section A  ->  TWO questions, usually near the end of the section
                 (around Q9 and Q10)
  Section B  ->  usually ONE question (around Q18 or Q19)
  Section C  ->  usually ONE question (around Q21 or Q22), and very often a
                 SECOND one is hidden inside the "Applications of Derivatives"
                 question, which you cannot start without this chapter

  So: about 13 to 17 marks, every single year.
```

---

# ===============================================================
# SECTION A — VERY SHORT ANSWER (2 marks)
# These are your GUARANTEED marks. Answer all 10.
# ===============================================================

## Topic: Polynomials and basic power rule

### Q A1
If f(x) = 2x^2 + 3x - 5, prove that f'(0) + 3 f'(-1) = 0.

**ANSWER:**
```
  f(x)   =  2x^2 + 3x - 5

  f'(x)  =  4x + 3

  f'(0)  =  4(0) + 3   =  3

  f'(-1) =  4(-1) + 3  =  -1

  f'(0) + 3 f'(-1)  =  3  +  3(-1)  =  3 - 3  =  0        PROVED
```

---

### Q A2
Find the derivative of y = x^e + e^x + e^e.

**ANSWER:**
```
  x^e   ->  power rule  (base has x, power is a number)   ->  e x^(e-1)
  e^x   ->  exponential rule                              ->  e^x
  e^e   ->  a PURE NUMBER (about 15.15)                   ->  0

  dy/dx  =  e x^(e-1)  +  e^x
```

> Note the trap: e^e contains no x at all, so its derivative is zero.

---

### Q A3
Find the derivative of y = 7^x + 7^7 + x^7.

**ANSWER:**
```
  7^x   ->  a^x log a   ->  7^x . log 7
  7^7   ->  a number    ->  0
  x^7   ->  power rule  ->  7 x^6

  dy/dx  =  7^x log 7  +  7 x^6
```

---

### Q A4
If f(x) = 1 + x + x^2 + x^3 + ... + x^100, find f'(1).

**ANSWER:**
```
  f'(x)  =  0 + 1 + 2x + 3x^2 + ... + 100 x^99

  f'(1)  =  1 + 2 + 3 + ... + 100

          =  100 x 101 / 2

          =  5050
```

---

### Q A5
Find the derivative of y = sqrt(2x - 3) + sqrt(7 - 3x).

**ANSWER:**
```
  d                            2                 1
 ---- sqrt(2x - 3)  =  ------------------  =  -------------
  dx                    2 sqrt(2x - 3)         sqrt(2x - 3)


  d                           -3
 ---- sqrt(7 - 3x)  =  -----------------
  dx                    2 sqrt(7 - 3x)


                 1                   3
  dy/dx  =  -------------   -   -----------------
             sqrt(2x - 3)        2 sqrt(7 - 3x)
```

---

## Topic: Product and quotient rules

### Q A6
Find the derivative of y = (ax + b) / (cx + d).

**ANSWER:**
```
  u = ax + b     v = cx + d
  u' = a         v' = c

           a (cx + d)  -  (ax + b) c        acx + ad - acx - bc
  dy/dx = --------------------------- =  ------------------------
                  (cx + d)^2                   (cx + d)^2

              ad  -  bc
         =  --------------
             (cx + d)^2
```

---

### Q A7
If f(x) = x e^x sin x, find f'(x).

**ANSWER:**
```
  Three factors:  ( u v w )' = u'vw + uv'w + uvw'

  u = x , v = e^x , w = sin x

  f'(x)  =  1 . e^x . sin x
          +  x . e^x . sin x
          +  x . e^x . cos x

         =  e^x ( sin x  +  x sin x  +  x cos x )
```

---

### Q A8
Find the derivative of y = e^(2x) . log(3x + 4).

**ANSWER:**
```
  u = e^(2x)          v = log(3x + 4)
  u' = 2 e^(2x)       v' = 3 / (3x + 4)          <- chain rule both times

                                              3
  dy/dx  =  2 e^(2x) log(3x + 4)  +  e^(2x) . -------
                                             3x + 4

                    (                          3      )
         =  e^(2x)  ( 2 log(3x + 4)   +   ----------- )
                    (                       3x + 4    )
```

---

## Topic: Chain rule

### Q A9
Find the derivative of y = log( tan 5x ).

**ANSWER:**
```
              1                                5 sec^2 5x
  dy/dx  =  -------  x  sec^2(5x) x 5   =   ---------------
             tan 5x                             tan 5x

  Now simplify:

     sec^2 5x        1                cos 5x            1
    ---------- = ------------- x  ------------ = ----------------
      tan 5x      cos^2 5x           sin 5x       sin 5x cos 5x

                                       2                2
                                =  ------------  =  ----------
                                    2 sin5x cos5x     sin 10x

                    10
  dy/dx  =  ---------------
                sin 10x
```

---

### Q A10
Find the derivative of y = log( sin( log x ) ).

**ANSWER:**
```
              1                            1
  dy/dx = ------------- x cos(log x)  x  -----
           sin(log x)                      x

             cot( log x )
          =  -------------
                  x
```

---

### Q A11
Find the derivative of y = cos( log( cot x ) ).

**ANSWER:**
```
                                1
  dy/dx = - sin( log cot x ) . ------ . ( - cosec^2 x )
                                cot x

        =  sin( log cot x ) . tan x . cosec^2 x

                                 sin x         1
        =  sin( log cot x )  .  ------- .  ---------
                                 cos x      sin^2 x

               sin( log cot x )            2 sin( log cot x )
        =  ------------------------  =  -----------------------
              sin x . cos x                      sin 2x
```

---

### Q A12
Find the derivative of y = sec( tan( sqrt(x) ) ).

**ANSWER:**
```
  Three layers: sec( ) outside, tan( ) middle, sqrt(x) inside.

                                                                1
  dy/dx = sec(tan sqrt x) . tan(tan sqrt x) . sec^2(sqrt x) . ---------
                                                              2 sqrt x


           sec( tan sqrt x ) . tan( tan sqrt x ) . sec^2( sqrt x )
        = ---------------------------------------------------------
                                2 sqrt(x)
```

---

### Q A13
Find the derivative of y = log( sec x + tan x ).

**ANSWER:**
```
             sec x tan x  +  sec^2 x
  dy/dx  =  -------------------------
                 sec x + tan x

             sec x ( tan x  +  sec x )
          =  --------------------------      <- factor out sec x
                  sec x  +  tan x

          =  sec x
```

---

### Q A14
Find the derivative of y = log( tan( x/2 ) ).

**ANSWER:**
```
               1                       1
  dy/dx  =  ---------- . sec^2(x/2) . ---
             tan(x/2)                  2

                         1                              1
          =  ------------------------------  =  -------------------
              2 sin(x/2) cos(x/2)                    sin x

          =  cosec x
```

---

## Topic: Inverse trigonometric functions

### Q A15
Find the derivative of y = arcsin( sqrt(x) ).

**ANSWER:**
```
                 1                    1
  dy/dx = -------------------  x  ----------
           sqrt(1 - (sqrt x)^2)    2 sqrt x

                       1
          =  ---------------------------
              2 sqrt(x) . sqrt(1 - x)

                     1
          =  ------------------
              2 sqrt(x - x^2)
```

---

### Q A16
Find the derivative of y = arctan( e^x ).

**ANSWER:**
```
                  1                        e^x
  dy/dx  =  ------------- x e^x   =   --------------
             1 + (e^x)^2               1 + e^(2x)
```

---

### Q A17
Find the derivative of arcsin x with respect to arccos x.

**ANSWER:**
```
  u = arcsin x   ->   du/dx =  1 / sqrt(1 - x^2)
  v = arccos x   ->   dv/dx = -1 / sqrt(1 - x^2)

   du       1 / sqrt(1 - x^2)
  ---- =  --------------------   =   - 1
   dv      -1 / sqrt(1 - x^2)
```

---

### Q A18
Find the derivative of x^3 with respect to x^2.

**ANSWER:**
```
  u = x^3   ->  du/dx = 3x^2
  v = x^2   ->  dv/dx = 2x

   du      3 x^2        3x
  ---- =  --------  =  ----
   dv       2x           2
```

---

## Topic: Hyperbolic functions

### Q A19
Find the derivative of y = cosh( log x ).

**ANSWER:**
```
                              1        sinh( log x )
  dy/dx  =  sinh( log x )  x  ---  =  ---------------
                              x              x
```

---

### Q A20
Find the derivative of y = log( cosh x ).

**ANSWER:**
```
                 1                    sinh x
  dy/dx  =  ----------  x  sinh x  = --------  =  tanh x
              cosh x                  cosh x
```

---

### Q A21
Find the derivative of y = sinh( 3x + 1 ) and of y = tanh( x^2 ).

**ANSWER:**
```
  d
 ---- sinh(3x + 1)  =  cosh(3x + 1) x 3   =   3 cosh(3x + 1)
  dx

  d
 ---- tanh( x^2 )   =  sech^2( x^2 ) x 2x  =  2x sech^2( x^2 )
  dx
```

---

## Topic: Second derivatives and miscellaneous

### Q A22
If y = e^(2x), find d2y/dx2.

**ANSWER:**
```
  dy/dx    =  2 e^(2x)

  d2y/dx2  =  4 e^(2x)   =   4 y
```

---

### Q A23
If y = sin( ax ), show that d2y/dx2 + a^2 y = 0.

**ANSWER:**
```
  y1  =  a cos(ax)

  y2  =  - a^2 sin(ax)   =   - a^2 y

  Therefore   y2 + a^2 y = 0                      PROVED
```

---

### Q A24
Show that f(x) = abs(x) is NOT differentiable at x = 0.

**ANSWER:**
```
  Right derivative:

        f(0 + h) - f(0)        abs(h) - 0        h
   lim  ---------------- = lim ----------- = lim --- = 1     (h > 0)
  h->0+        h          h->0+     h       h->0+ h


  Left derivative:

        f(0 + h) - f(0)        abs(h) - 0        -h
   lim  ---------------- = lim ----------- = lim ---- = -1   (h < 0)
  h->0-        h          h->0-     h       h->0-  h

  Left derivative (-1) is NOT equal to Right derivative (+1).

  So the limit does not exist, and f is NOT differentiable at x = 0.
  (It IS continuous there — continuity does not guarantee differentiability.)
```

---

### Q A25
Find dy/dx if x = a cos^3 t and y = a sin^3 t.

**ANSWER:**
```
  dx/dt  =  - 3a cos^2 t . sin t

  dy/dt  =    3a sin^2 t . cos t

               3a sin^2 t cos t             sin t
  dy/dx  =  ---------------------  =   -  -------  =  - tan t
              - 3a cos^2 t sin t            cos t
```

---

### Q A26
If x^2 + y^2 = 1, find dy/dx.

**ANSWER:**
```
  Differentiate both sides w.r.t. x:

     2x  +  2y . dy/dx  =  0

     dy/dx  =  - x / y
```

---

# ===============================================================
# SECTION B — SHORT ANSWER (4 marks) — answer any 5 of 7
# ===============================================================

## Topic: First principles (ab initio)

### Q B1
Find the derivative of **sin 2x** from first principles.

**ANSWER:**
```
  f(x) = sin 2x           f(x + h) = sin( 2x + 2h )

                       sin(2x + 2h) - sin 2x
   f'(x)  =   lim     ------------------------
             h -> 0             h

  Use  sin C - sin D = 2 cos( (C+D)/2 ) sin( (C-D)/2 )
  with C = 2x + 2h and D = 2x :

       (C + D)/2 = 2x + h          (C - D)/2 = h

                       2 cos( 2x + h ) sin h
          =   lim     -----------------------
             h -> 0             h

                                          sin h
          =   lim   2 cos( 2x + h )   x   ------
             h -> 0                          h

          =   2 cos 2x  x  1

          =   2 cos 2x
```

---

### Q B2
Find the derivative of **cos^2 x** from first principles.

**ANSWER:**
```
  f(x) = cos^2 x          f(x + h) = cos^2 ( x + h )

  Use  cos^2 A - cos^2 B  =  - sin( A + B ) sin( A - B )
  with A = x + h and B = x :

     cos^2(x+h) - cos^2 x  =  - sin( 2x + h ) sin( h )

                       - sin(2x + h) sin h
   f'(x)  =   lim     ----------------------
             h -> 0            h

                                             sin h
          =   lim   - sin( 2x + h )    x     ------
             h -> 0                             h

          =   - sin 2x  x  1

          =   - sin 2x
```

---

### Q B3
Find the derivative of **sec 3x** from first principles.

**ANSWER:**
```
  f(x) = sec 3x = 1 / cos 3x

                        1              1
   f(x+h) - f(x)  =  ----------  -  --------
                     cos(3x+3h)      cos 3x

                      cos 3x  -  cos( 3x + 3h )
                  =  ---------------------------
                       cos( 3x + 3h ) . cos 3x

  Use  cos C - cos D = - 2 sin( (C+D)/2 ) sin( (C-D)/2 )
  with C = 3x , D = 3x + 3h :

     cos 3x - cos(3x+3h)  =  2 sin( 3x + 3h/2 ) sin( 3h/2 )

                       2 sin( 3x + 3h/2 ) sin( 3h/2 )
   f'(x)  =   lim     ---------------------------------
             h -> 0    h . cos( 3x + 3h ) . cos 3x

  Write   sin(3h/2) / h  =  (3/2) . sin(3h/2) / (3h/2)   ->   3/2

                     3
          =   2  x  ---  x   sin 3x  /  ( cos 3x . cos 3x )
                     2

              3 sin 3x
          =  ----------   =   3 . sec 3x . tan 3x
              cos^2 3x
```

---

### Q B4
Find the derivative of **x sin x** from first principles.

**ANSWER:**
```
  f(x + h) - f(x)  =  ( x + h ) sin( x + h )  -  x sin x

                   =  x [ sin(x + h) - sin x ]  +  h sin( x + h )

  Divide by h :

     x . [ sin(x+h) - sin x ] / h     +     sin( x + h )

  For the first bracket use  sin C - sin D = 2 cos((C+D)/2) sin((C-D)/2) :

     sin(x+h) - sin x  =  2 cos( x + h/2 ) sin( h/2 )

                                              sin(h/2)
     so the first part  =  x . cos( x + h/2 ) . --------  ->  x cos x
                                                  h/2

     and the second part  ->  sin x

  f'(x)  =  x cos x  +  sin x
```

---

## Topic: Implicit differentiation

### Q B5
If x^y = y^x, find dy/dx.

**ANSWER:**
```
  Take log of both sides:

       y . log x   =   x . log y

  Differentiate both sides w.r.t. x  (PRODUCT rule on each side):

                   y                          1   dy
     log x . y1 + ---   =   log y   +   x  . --- . ---
                   x                          y    dx

                  x                         y
     y1 ( log x - --- )   =   log y   -   -----
                  y                         x

  Multiply everything by  x y  to clear the fractions:

     y1 ( x y log x  -  x^2 )   =   x y log y  -  y^2


              y ( x log y  -  y )
     dy/dx = ---------------------
              x ( y log x  -  x )
```

---

### Q B6
If sin y = x sin( a + y ), prove that dy/dx = sin^2( a + y ) / sin a.

**ANSWER:**
```
  Differentiate both sides w.r.t. x. The right side needs the PRODUCT rule.

     cos y . y1   =   sin( a + y ) . 1   +   x . cos( a + y ) . y1

  From the original equation,   x  =  sin y / sin( a + y ).  Substitute:

                                             sin y . cos( a + y )
     cos y . y1  =  sin( a + y )   +   y1 . ----------------------
                                                sin( a + y )

     Move the y1 terms together:

           (            sin y cos( a + y )  )
     y1  x ( cos y  -  -------------------- )   =   sin( a + y )
           (               sin( a + y )     )

           ( cos y sin( a + y )  -  sin y cos( a + y ) )
     y1  x ( ----------------------------------------- ) = sin( a + y )
           (             sin( a + y )                  )

  The top is  sin( (a + y) - y )  =  sin a .   So

              sin a
     y1  x  ------------   =   sin( a + y )
            sin( a + y )


                  sin^2( a + y )
     dy/dx  =   ------------------                            PROVED
                      sin a
```

---

### Q B7
If x^2 + y^2 = a^2, find d2y/dx2.

**ANSWER:**
```
  FIRST derivative:

     2x + 2y y1 = 0      ->      y1  =  - x / y


  SECOND derivative — quotient rule on ( - x / y ) :

              y . ( -1 )  -  ( - x ) . y1          - y  +  x y1
     y2  =  --------------------------------  =  ----------------
                        y^2                            y^2

  Substitute y1 = - x / y :

              - y  +  x ( - x / y )          - y^2 - x^2
     y2  =  -------------------------  =  ------------------
                      y^2                        y^3

  But x^2 + y^2 = a^2, so

                 - a^2
     y2   =    ---------
                  y^3
```

---

## Topic: Parametric differentiation

### Q B8
If x = a( cos t + t sin t ) and y = a( sin t - t cos t ), find dy/dx.

**ANSWER:**
```
  dx/dt  =  a [ - sin t  +  ( sin t . 1  +  t . cos t ) ]     <- product rule
         =  a [ - sin t  +  sin t  +  t cos t ]
         =  a t cos t

  dy/dt  =  a [ cos t  -  ( cos t . 1  +  t . ( - sin t ) ) ]  <- product rule
         =  a [ cos t  -  cos t  +  t sin t ]
         =  a t sin t

              a t sin t          sin t
  dy/dx  =  -------------  =   -------   =   tan t
              a t cos t          cos t
```

---

### Q B9
If x = 3 cos t - 2 cos^3 t and y = 3 sin t - 2 sin^3 t, find dy/dx.

**ANSWER:**
```
  dx/dt  =  - 3 sin t  -  6 cos^2 t . ( - sin t )
         =  - 3 sin t  +  6 sin t cos^2 t
         =  - 3 sin t ( 1  -  2 cos^2 t )
         =  - 3 sin t ( - cos 2t )
         =    3 sin t cos 2t

  dy/dt  =    3 cos t  -  6 sin^2 t . cos t
         =    3 cos t ( 1  -  2 sin^2 t )
         =    3 cos t . cos 2t

              3 cos t cos 2t          cos t
  dy/dx  =  -------------------  =   -------   =   cot t
              3 sin t cos 2t          sin t
```

---

### Q B10
If x = a t^2 and y = 2 a t, find d2y/dx2.

**ANSWER:**
```
  dx/dt  =  2 a t             dy/dt  =  2 a

               2a         1
  dy/dx  =  --------  =  ---
              2 a t       t

  Now the SECOND derivative. Differentiate dy/dx with respect to t, then
  divide by dx/dt:

   d  (  1  )        1
  ---- ( --- )  =  - ---
   dt  (  t  )       t^2


   d2y         1          1              1
  -----  =  - ---   x   ------   =   - --------
   dx^2       t^2        2 a t          2 a t^3
```

> **TRAP:** the answer is NOT (d2y/dt2)/(d2x/dt2), which would give 0/(2a) = 0.
> That is wrong. Always differentiate dy/dx with respect to t and divide by dx/dt.

---

## Topic: Substitution in inverse trigonometric functions

### Q B11
Find the derivative of y = arctan( 2x / ( 1 - x^2 ) ).

**ANSWER:**
```
  Put   x = tan( theta ) ,   so   theta = arctan x .

                    (    2 tan theta    )
     y  =  arctan   ( ----------------- )  =  arctan ( tan 2 theta )
                    ( 1 - tan^2 theta   )

        =  2 theta   =   2 arctan x

                      1                    2
  dy/dx  =  2   x  ---------   =    -------------
                    1 + x^2           1 + x^2
```

---

### Q B12
Find the derivative of y = arcsin( 3x - 4x^3 ).

**ANSWER:**
```
  Put   x = sin( theta ) ,   so   theta = arcsin x .

     3x - 4x^3  =  3 sin theta - 4 sin^3 theta  =  sin( 3 theta )

     y  =  arcsin( sin 3 theta )  =  3 theta  =  3 arcsin x

                          1                     3
  dy/dx  =  3   x   --------------   =   --------------
                    sqrt(1 - x^2)        sqrt(1 - x^2)
```

---

### Q B13
Find the derivative of y = arctan( sqrt( (1 - x) / (1 + x) ) ).

**ANSWER:**
```
  Put   x = cos( 2 theta ) ,  so  theta = (1/2) arccos x .

  Use   1 - cos 2 theta = 2 sin^2 theta
        1 + cos 2 theta = 2 cos^2 theta

          ( 1 - x )           ( 2 sin^2 theta )
    sqrt  ( ----- )  =  sqrt  ( ------------- )  =  tan theta
          ( 1 + x )           ( 2 cos^2 theta )

     y  =  arctan( tan theta )  =  theta  =  (1/2) arccos x

              1   (        -1        )              -1
  dy/dx  =  ---  x(  --------------  )   =   ------------------
              2   (   sqrt(1 - x^2)  )        2 sqrt( 1 - x^2 )
```

---

### Q B14
Find the derivative of y = arctan( ( 3x - x^3 ) / ( 1 - 3x^2 ) ).

**ANSWER:**
```
  Put x = tan( theta ). Use the triple-angle formula

                    3 tan t  -  tan^3 t
     tan( 3 t )  = ---------------------
                     1  -  3 tan^2 t

     y  =  arctan( tan 3 theta )  =  3 theta  =  3 arctan x

                      1                3
  dy/dx  =  3  x  ---------   =   ---------
                   1 + x^2         1 + x^2
```

---

### Q B15
Differentiate arctan( 2x / (1 - x^2) ) with respect to arcsin( 2x / (1 + x^2) ).

**ANSWER:**
```
  Simplify BOTH first, using x = tan theta:

     u  =  arctan( 2x/(1 - x^2) )  =  2 arctan x
     v  =  arcsin( 2x/(1 + x^2) )  =  2 arctan x

  du/dx  =  2 / (1 + x^2)
  dv/dx  =  2 / (1 + x^2)

    du        2 / (1 + x^2)
   ----  =  ----------------   =   1
    dv        2 / (1 + x^2)
```

---

## Topic: Logarithmic differentiation

### Q B16
If y = x^x, find dy/dx.

**ANSWER:**
```
  Neither the power rule nor a^x log a applies (x is in BOTH base and power).
  Take logs.

     log y  =  x . log x

  Differentiate both sides w.r.t. x (product rule on the right):

      1     dy                          1
     --- . ----   =   1 . log x  +  x . ---   =   log x  +  1
      y     dx                          x

     dy/dx  =  y ( 1 + log x )

     dy/dx  =  x^x ( 1 + log x )
```

---

### Q B17
If y = ( sin x )^( log x ), find dy/dx.

**ANSWER:**
```
     log y  =  log x . log( sin x )

  Differentiate (product rule on the right):

      1     dy        1                              cos x
     --- . ----  =   --- . log( sin x )   +  log x . -------
      y     dx        x                               sin x

                     log( sin x )
                =   --------------   +   log x . cot x
                          x


                              (  log(sin x)                   )
     dy/dx  =  (sin x)^(log x)( -------------  +  cot x log x )
                              (       x                       )
```

---

# ===============================================================
# SECTION C — LONG ANSWER (7 marks) — answer any 5 of 7
# ===============================================================

### Q C1
Find the derivative of **tan 2x** from first principles.

**ANSWER:**

```
  STEP 1 — Write the function and the shifted function

     f(x)      =  tan 2x
     f(x + h)  =  tan( 2x + 2h )


  STEP 2 — Form the difference and put it over a common denominator

     f(x+h) - f(x)  =  tan( 2x + 2h )  -  tan 2x

                       sin( 2x + 2h )      sin 2x
                    =  ---------------  -  --------
                       cos( 2x + 2h )      cos 2x

                       sin(2x+2h) cos 2x  -  cos(2x+2h) sin 2x
                    =  ----------------------------------------
                                cos( 2x + 2h ) . cos 2x


  STEP 3 — Recognise the top

     The top is exactly   sin( A - B )   with  A = 2x + 2h , B = 2x .

     sin( (2x + 2h) - 2x )  =  sin( 2h )

                                    sin( 2h )
     So  f(x+h) - f(x)  =  ------------------------------
                            cos( 2x + 2h ) . cos 2x


  STEP 4 — Divide by h and take the limit

                                  sin 2h
     f'(x)  =    lim    -------------------------------------
                h -> 0   h . cos( 2x + 2h ) . cos 2x


     Write   sin 2h / h   =   2 . [ sin 2h / 2h ]    and note  sin 2h/2h -> 1 :

                                sin 2h              1
     f'(x)  =    lim    2  x   --------   x   ---------------------------
                h -> 0            2h           cos( 2x + 2h ) . cos 2x


  STEP 5 — Put h = 0

                          1                    2
     f'(x)  =  2  x  ------------------  =  ----------  =  2 sec^2 2x
                     cos 2x . cos 2x         cos^2 2x


                +----------------------------------+
                |   d                              |
                |  ---- ( tan 2x )  =  2 sec^2 2x  |
                |   dx                             |
                +----------------------------------+
```

---

### Q C2
If y = x^( tan x ) + ( sin x )^( cos x ), find dy/dx.

**ANSWER:**

```
  You CANNOT take the log of a sum. Split first.

     Let  u = x^( tan x )        and     v = ( sin x )^( cos x )

     Then  y = u + v   and   dy/dx = du/dx + dv/dx.


  ===== PIECE 1 :  u = x^( tan x ) =====

     log u  =  tan x . log x

  Differentiate both sides w.r.t. x (product rule on the right):

      1     du                                 1
     --- . ----  =  sec^2 x . log x  +  tan x . ---
      u     dx                                  x

                                            (                    tan x )
     du/dx  =  x^( tan x )   x   ( sec^2 x . log x   +   ------- )
                                            (                      x   )

     du/dx  =  x^( tan x ) [ sec^2 x . log x  +  ( tan x ) / x ]


  ===== PIECE 2 :  v = ( sin x )^( cos x ) =====

     log v  =  cos x . log( sin x )

  Differentiate both sides w.r.t. x (product rule on the right):

      1     dv                                            cos x
     --- . ----  =  ( - sin x ) . log( sin x )  +  cos x . -------
      v     dx                                             sin x

                =  - sin x . log( sin x )   +   cos x . cot x

     dv/dx  =  ( sin x )^( cos x ) [ cos x . cot x  -  sin x . log( sin x ) ]


  ===== ADD THEM =====

     dy/dx  =  x^( tan x ) [ sec^2 x . log x  +  ( tan x ) / x ]

             + ( sin x )^( cos x ) [ cos x . cot x  -  sin x . log( sin x ) ]
```

---

### Q C3
If y = e^( a . arcsin x ), prove that ( 1 - x^2 ) y2 - x y1 - a^2 y = 0.

**ANSWER:**

```
  STEP 1 — First derivative (chain rule)

                                       a                    a y
     y1  =  e^( a arcsin x )   x   -------------  =   ---------------
                                   sqrt(1 - x^2)      sqrt( 1 - x^2 )


  STEP 2 — Clear the square root, then square both sides

     sqrt( 1 - x^2 ) . y1   =   a y

     Squaring:      ( 1 - x^2 ) y1^2   =   a^2 y^2


  STEP 3 — Differentiate this relation w.r.t. x
           (product rule on the left, chain rule on y1^2 and y^2)

     ( 1 - x^2 ) . 2 y1 y2   +   y1^2 . ( - 2x )   =   a^2 . 2 y y1


  STEP 4 — Every term contains 2 y1. Divide throughout by 2 y1
           (y1 is not identically zero).

     ( 1 - x^2 ) y2   -   x y1   =   a^2 y


  STEP 5 — Rearrange

     ( 1 - x^2 ) y2   -   x y1   -   a^2 y   =   0        PROVED
```

---

### Q C4
If y = ( x + sqrt( 1 + x^2 ) )^m, prove that ( 1 + x^2 ) y2 + x y1 - m^2 y = 0.

**ANSWER:**

```
  STEP 1 — First derivative (chain rule)

                                       (              x          )
     y1 = m ( x + sqrt(1+x^2) )^(m-1)  ( 1  +  --------------- )
                                       (        sqrt( 1 + x^2 )  )

  Combine the bracket over one denominator:

                                       ( sqrt(1+x^2)  +  x )
        = m ( x + sqrt(1+x^2) )^(m-1)  ( ----------------- )
                                       (   sqrt(1 + x^2)   )

  The bracket's TOP is the same as the base, so it raises the power back to m:

           m ( x + sqrt(1+x^2) )^m               m y
        = --------------------------   =   ---------------
                sqrt( 1 + x^2 )             sqrt( 1 + x^2 )


  STEP 2 — Clear the root, then square

     sqrt( 1 + x^2 ) . y1   =   m y

     Squaring:      ( 1 + x^2 ) y1^2   =   m^2 y^2


  STEP 3 — Differentiate w.r.t. x

     ( 1 + x^2 ) . 2 y1 y2   +   y1^2 . ( 2x )   =   m^2 . 2 y y1


  STEP 4 — Divide throughout by 2 y1

     ( 1 + x^2 ) y2   +   x y1   =   m^2 y


  STEP 5 — Rearrange

     ( 1 + x^2 ) y2   +   x y1   -   m^2 y   =   0        PROVED
```

---

### Q C5
If x^y = e^( x - y ), show that dy/dx = log x / ( 1 + log x )^2.

**ANSWER:**

```
  STEP 1 — Take logs of both sides

     log ( x^y )   =   log ( e^( x - y ) )

     y . log x     =   ( x - y ) . log e   =   x - y      ( since log e = 1 )


  STEP 2 — Make y the subject

     y log x  +  y   =   x

     y ( 1 + log x ) =   x

                     x
     y   =   ---------------
              1  +  log x


  STEP 3 — Quotient rule

     u = x                    ->  u' = 1
     v = 1 + log x            ->  v' = 1 / x

                u' v  -  u v'         ( 1 + log x ) . 1   -   x . ( 1/x )
     dy/dx  =  ---------------   =   -------------------------------------
                     v^2                       ( 1 + log x )^2


  STEP 4 — Simplify the top

                1 + log x  -  1                   log x
     dy/dx  =  ------------------   =   ---------------------
                ( 1 + log x )^2           ( 1 + log x )^2      PROVED
```

---

### Q C6
If y = a cos( log x ) + b sin( log x ), prove that x^2 y2 + x y1 + y = 0.

**ANSWER:**

```
  STEP 1 — First derivative (chain rule; the inside is log x, whose
           derivative is 1/x)

                                    1                       1
     y1  =  - a sin( log x ) .  ---   +   b cos( log x ) .  ---
                                    x                       x

             - a sin( log x )  +  b cos( log x )
         =  -------------------------------------
                            x

  Multiply both sides by x to get rid of the fraction:

     x y1   =   - a sin( log x )  +  b cos( log x )        ... (*)


  STEP 2 — Differentiate (*) w.r.t. x.
           The left side needs the PRODUCT rule.

                                     1                        1
     x y2  +  y1  =  - a cos(log x) . ---   -   b sin(log x) . ---
                                     x                        x

                      - [ a cos( log x )  +  b sin( log x ) ]
                  =  -----------------------------------------
                                      x

  The bracket is exactly the original y :

                       - y
     x y2  +  y1  =   -----
                        x


  STEP 3 — Multiply throughout by x

     x^2 y2   +   x y1   =   - y


  STEP 4 — Rearrange

     x^2 y2   +   x y1   +   y   =   0                     PROVED
```

---

# ===============================================================
# WHICH QUESTIONS REPEAT MOST — study top-down if short on time
# ===============================================================

```
  RANK  QUESTION TYPE                                   SECTION   CHANCE
  ----  ---------------------------------------------   -------   -------------
   1    Derivative from FIRST PRINCIPLES                  B / C    almost every
        (sin ax, cos ax, tan ax, sec ax, x sin x)                  year
   2    Prove a relation in y, y1, y2                       C      almost every
        (the e^(a arcsin x) family)                              year
   3    Logarithmic differentiation  [f]^[g]                C      very high
        (x^tan x + (sin x)^cos x type)
   4    Substitution in inverse trig                        B      very high
        (arctan 2x/(1-x^2) and friends)
   5    Parametric  dy/dx = (dy/dt)/(dx/dt)                 B      very high
   6    Chain rule 2-markers                                A      certain
        (log tan 5x, sec(tan sqrt x), cos(log cot x))
   7    Implicit differentiation                            B      high
        (x^y = y^x , sin y = x sin(a+y))
   8    Product / quotient 2-markers                        A      certain
   9    Second derivative of a parametric function          B      moderate
  10    Hyperbolic function derivatives                     A      moderate
  11    One function w.r.t. another                         B      moderate
  12    Differentiability of abs(x) at x = 0                A      moderate
```

**Reading of the table:** ranks 1, 2 and 3 alone cover the 7-mark question in
almost every paper. Ranks 6 and 8 cover both 2-mark questions. Master those five
rows and you have secured most of what this chapter can give you.
