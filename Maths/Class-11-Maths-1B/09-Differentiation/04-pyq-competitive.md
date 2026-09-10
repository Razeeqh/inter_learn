# Differentiation — JEE Main / AP EAPCET / TG EAPCET Questions

All multiple choice.

```
  +------------------+----------------------+---------------------------+
  |  EXAM            |  MARKING             |  STRATEGY                 |
  +------------------+----------------------+---------------------------+
  |  AP EAPCET       |  +1 , NO negative    |  NEVER leave a blank      |
  |  TG EAPCET       |  +1 , NO negative    |  NEVER leave a blank      |
  |  JEE Main        |  +4 , -1 wrong       |  Skip if you truly don't  |
  |                  |                      |  know                     |
  +------------------+----------------------+---------------------------+
```

**How many questions come from Differentiation:**

```
  AP EAPCET  (Maths, 80 questions)  ->  4 to 6   (plus 3-5 more from
  TG EAPCET  (Maths, 80 questions)  ->  4 to 6    Applications of Derivatives,
                                                  which needs this chapter)
  JEE Main   (Maths, 25 questions)  ->  2 to 3
```

> Questions are grouped by PATTERN, not by year, because the pattern is what
> repeats. No exam-year has been invented here. Verify with the official papers
> before your exam.

---

# PATTERN 1 — Straight application of product / quotient / chain rule

### Q1
```
  d
 ---- ( x^2 sin x )  =
  dx

  (a) 2x cos x                (b) 2x sin x + x^2 cos x
  (c) x^2 cos x               (d) 2x sin x
```
**ANSWER: (b)**
```
  PRODUCT rule:  u = x^2 , v = sin x

  u'v + uv'  =  2x . sin x  +  x^2 . cos x
```

> **SHORTCUT:** if a product-rule option has only ONE term, it is wrong.
> The answer must always have TWO terms.

---

### Q2
```
  If y = ( 1 + x ) / ( 1 - x ) , then dy/dx =

  (a) 1 / (1 - x)^2      (b) 2 / (1 - x)^2
  (c) -2 / (1 - x)^2     (d) 2 / (1 + x)^2
```
**ANSWER: (b)**
```
           1 . (1 - x)  -  (1 + x)(-1)         1 - x + 1 + x            2
  dy/dx = ----------------------------- =  ------------------  =  -----------
                   (1 - x)^2                    (1 - x)^2          (1 - x)^2
```

---

### Q3
```
  If f(x) = x^3 - 3x , then f'(2) =

  (a) 2      (b) 6      (c) 9      (d) 12
```
**ANSWER: (c)**
```
  f'(x) = 3x^2 - 3        f'(2) = 3(4) - 3 = 12 - 3 = 9
```

---

### Q4
```
  d
 ---- sqrt( tan x )  =
  dx

  (a) sec^2 x / (2 sqrt(tan x))       (b) 1 / (2 sqrt(tan x))
  (c) sec x tan x / sqrt(tan x)       (d) 2 sec^2 x sqrt(tan x)
```
**ANSWER: (a)**
```
                1                        sec^2 x
  dy/dx  =  --------------  x  sec^2 x = ---------------
             2 sqrt(tan x)                2 sqrt(tan x)
```

---

### Q5
```
  d
 ---- log( sec x + tan x )  =
  dx

  (a) tan x      (b) sec x      (c) cosec x      (d) sec x tan x
```
**ANSWER: (b)**
```
   sec x tan x + sec^2 x        sec x ( tan x + sec x )
  ------------------------  =  ------------------------  =  sec x
      sec x + tan x                 sec x + tan x
```

> **SHORTCUT:** the pair log(sec x + tan x) -> sec x and log(tan(x/2)) -> cosec x
> are two of the most reused single-line results in EAPCET. Memorise both.

---

### Q6
```
  d
 ---- ( sin x degrees )  =
  dx

  (a) cos x degrees                 (b) (180/pi) cos x degrees
  (c) (pi/180) cos x degrees        (d) - cos x degrees
```
**ANSWER: (c)**
```
  x degrees  =  ( pi x / 180 ) radians

  y = sin( pi x / 180 )

  dy/dx = cos( pi x /180 ) x ( pi/180 )  =  (pi/180) cos x degrees
```

> **SHORTCUT:** whenever an angle is in DEGREES, convert to radians first.
> A stray factor pi/180 in the options is the giveaway.

---

### Q7
```
  If y = log_10 x + log_x 10 + log_x x + log_10 10 , then dy/dx =

              1          log 10                    1        log 10
  (a)  ------------  -  -----------      (b)  ---------  +  ---------
        x . log 10       x (log x)^2           x log 10      x log x

  (c)  1 / x                             (d)  0
```
**ANSWER: (a)**
```
  Rewrite everything in natural logs:

           log x       log 10
    y  =  --------  +  -------  +  1  +  1
           log 10       log x

  The last two terms are constants -> derivative 0.

            1                       ( 1 )
  dy/dx = --------  +  log 10 . ( - ---- ) . ( --- )
          x log 10                (log x)^2     x

              1              log 10
         = ----------  -  ---------------
            x log 10       x ( log x )^2
```

---

# PATTERN 2 — Inverse trig with an ugly inside (SUBSTITUTE, never expand)

### Q8
```
  d      (      2x     )
 ---- arctan ( -------- )   =
  dx      (   1 - x^2   )

  (a) 1/(1 + x^2)     (b) 2/(1 + x^2)
  (c) 2/(1 - x^2)     (d) 1/sqrt(1 - x^2)
```
**ANSWER: (b)**
```
  Put x = tan t.  Inside becomes tan 2t.  So y = 2t = 2 arctan x.

  dy/dx = 2 / (1 + x^2)
```

---

### Q9
```
  d      (     2x      )
 ---- arcsin ( --------- )   =
  dx      (   1 + x^2   )

  (a) 2/(1 + x^2)     (b) 1/(1 + x^2)
  (c) 2/sqrt(1 - x^2) (d) -2/(1 + x^2)
```
**ANSWER: (a)**
```
  Put x = tan t.  Inside becomes sin 2t.  So y = 2t = 2 arctan x.

  dy/dx = 2 / (1 + x^2)
```

---

### Q10
```
  d      (   1 - x^2   )
 ---- arccos ( --------- )   =
  dx      (   1 + x^2   )

  (a) -2/(1 + x^2)    (b) 2/(1 + x^2)
  (c) -1/(1 + x^2)    (d) 2/(1 - x^2)
```
**ANSWER: (b)**
```
  Put x = tan t.  Inside becomes cos 2t.  So y = 2t = 2 arctan x.

  dy/dx = 2 / (1 + x^2)                   (for x > 0)
```

> **SHORTCUT — the big one.** These THREE all simplify to **2 arctan x**, so all
> three have derivative **2/(1 + x^2)**:
> ```
>    arctan( 2x/(1 - x^2) )      arcsin( 2x/(1 + x^2) )
>    arccos( (1 - x^2)/(1 + x^2) )
> ```
> Recognising this turns a 4-minute question into a 5-second one.

---

### Q11
```
  d
 ---- arcsin ( 3x - 4x^3 )  =
  dx

  (a) 3/sqrt(1 - x^2)    (b) -3/sqrt(1 - x^2)
  (c) 1/sqrt(1 - x^2)    (d) 3/(1 + x^2)
```
**ANSWER: (a)**
```
  Put x = sin t.  3 sin t - 4 sin^3 t = sin 3t.  So y = 3t = 3 arcsin x.

  dy/dx = 3 / sqrt(1 - x^2)
```

---

### Q12
```
  d
 ---- arccos ( 4x^3 - 3x )  =
  dx

  (a) 3/sqrt(1 - x^2)    (b) -3/sqrt(1 - x^2)
  (c) -1/sqrt(1 - x^2)   (d) 4/sqrt(1 - x^2)
```
**ANSWER: (b)**
```
  Put x = cos t.  4 cos^3 t - 3 cos t = cos 3t.  So y = 3t = 3 arccos x.

  dy/dx = - 3 / sqrt(1 - x^2)
```

---

### Q13
```
  d      (    cos x    )
 ---- arctan ( ----------- )  =
  dx      ( 1 + sin x   )

  (a) 1/2      (b) -1/2      (c) 1      (d) -1
```
**ANSWER: (b)**
```
   cos x / (1 + sin x)  =  tan( pi/4  -  x/2 )         [standard identity]

   y  =  pi/4  -  x/2

   dy/dx  =  - 1/2
```

---

### Q14
```
  d       (      1 - cos x      )
 ---- arctan (  sqrt ----------  )  =
  dx       (      1 + cos x     )

  (a) 1      (b) 1/2      (c) x/2      (d) -1/2
```
**ANSWER: (b)**
```
   1 - cos x = 2 sin^2(x/2) ,  1 + cos x = 2 cos^2(x/2)

   sqrt of the ratio  =  tan( x/2 )

   y = arctan( tan(x/2) ) = x/2      ->     dy/dx = 1/2
```

---

### Q15
```
  d
 ---- [ arcsin x  +  arccos x ]  =
  dx

  (a) 2/sqrt(1 - x^2)   (b) 0    (c) 1/sqrt(1 - x^2)   (d) pi/2
```
**ANSWER: (b)**
```
  arcsin x + arccos x  =  pi/2 , which is a CONSTANT.

  Derivative of a constant  =  0.
```

> **SHORTCUT:** the same trick works for arctan x + arccot x and
> arcsec x + arccosec x. All three sums equal pi/2, all three derivatives are 0.

---

### Q16
```
  d       (       1        )
 ---- arcsec (  -----------  )  =
  dx       (  2x^2 - 1     )

  (a) 2/sqrt(1 - x^2)    (b) -2/sqrt(1 - x^2)
  (c) 1/sqrt(1 - x^2)    (d) -1/sqrt(1 - x^2)
```
**ANSWER: (b)**
```
  Put x = cos t.   2 cos^2 t - 1 = cos 2t.

  arcsec( 1 / cos 2t )  =  arccos( cos 2t )  =  2t  =  2 arccos x

  dy/dx  =  - 2 / sqrt(1 - x^2)
```

---

# PATTERN 3 — Logarithmic differentiation

### Q17
```
  If y = x^x , then dy/dx =

  (a) x . x^(x-1)         (b) x^x log x
  (c) x^x ( 1 + log x )   (d) x^x ( 1 - log x )
```
**ANSWER: (c)**
```
  log y = x log x
  (1/y) y' = log x + 1
  y' = x^x ( 1 + log x )
```

> **SHORTCUT:** option (a) is the classic trap — the power rule does NOT apply
> when the base contains x AND the power contains x.

---

### Q18
```
  If y = x^x , the value of dy/dx at x = 1 is

  (a) 0      (b) 1      (c) 2      (d) e
```
**ANSWER: (b)**
```
  dy/dx = x^x ( 1 + log x )

  at x = 1 :   1^1 ( 1 + log 1 )  =  1 ( 1 + 0 )  =  1
```

---

### Q19
```
  If y = x^(1/x) , then dy/dx =

  (a) x^(1/x) ( 1 - log x ) / x^2      (b) x^(1/x) ( 1 + log x )
  (c) (1/x) x^(1/x - 1)                (d) x^(1/x) log x / x^2
```
**ANSWER: (a)**
```
  log y = (1/x) log x

   1               1   1                (   1   )
  --- y'  =   --- . --- +  log x  x  ( - ----- )
   y               x   x                (  x^2  )

              1 - log x
          =  -----------
                 x^2

  y'  =  x^(1/x) ( 1 - log x ) / x^2
```

---

### Q20
```
  If y = ( sin x )^x , then dy/dx =

  (a) x (sin x)^(x-1) cos x
  (b) (sin x)^x [ log(sin x) + x cot x ]
  (c) (sin x)^x . x cot x
  (d) (sin x)^x log(sin x)
```
**ANSWER: (b)**
```
  log y = x log( sin x )

   1                             cos x
  --- y'  =  log(sin x)  +  x . -------  =  log(sin x)  +  x cot x
   y                             sin x

  y' = (sin x)^x [ log(sin x) + x cot x ]
```

---

# PATTERN 4 — Implicit functions

### Q21
```
  If x^2 + y^2 = 25 , then dy/dx at the point ( 3 , 4 ) is

  (a) 3/4      (b) -3/4      (c) 4/3      (d) -4/3
```
**ANSWER: (b)**
```
  2x + 2y y' = 0    ->    y' = - x / y

  at (3, 4) :    y' = - 3/4
```

---

### Q22
```
  If x y = c^2 , then dy/dx =

  (a) y/x      (b) -y/x      (c) x/y      (d) -x/y
```
**ANSWER: (b)**
```
  Product rule on the left:   x y' + y = 0    ->    y' = - y / x
```

> **SHORTCUT:** for xy = c^2 you can also write y = c^2 / x, so
> y' = -c^2/x^2 = -(xy)/x^2 = -y/x. Same answer, either route.

---

### Q23
```
  If x^3 + y^3 = 3 a x y , then dy/dx =

  (a) (ay - x^2)/(y^2 - ax)      (b) (x^2 - ay)/(y^2 - ax)
  (c) (ay + x^2)/(y^2 + ax)      (d) (ax - y^2)/(x^2 - ay)
```
**ANSWER: (a)**
```
  3x^2 + 3y^2 y'  =  3a ( x y' + y )

  x^2 + y^2 y'    =  a x y'  +  a y

  y' ( y^2 - a x ) = a y - x^2

  y' = ( a y - x^2 ) / ( y^2 - a x )
```

---

### Q24
```
  If a x^2 + 2 h x y + b y^2 = 0 , then dy/dx =

  (a) -(ax + hy)/(hx + by)       (b) (ax + hy)/(hx + by)
  (c) -(ax + by)/(hx + hy)       (d) -(hx + by)/(ax + hy)
```
**ANSWER: (a)**
```
  2ax + 2h( x y' + y ) + 2b y y' = 0

  ax + h y + y' ( h x + b y ) = 0

  y' = - ( a x + h y ) / ( h x + b y )
```

> **SHORTCUT for objective questions only:** for F(x, y) = 0,
> dy/dx = - (dF/dx) / (dF/dy), treating the other variable as a constant each
> time. It gives this answer in about ten seconds.

---

# PATTERN 5 — Parametric functions

### Q25
```
  If x = a t^2 and y = 2 a t , then dy/dx =

  (a) t      (b) 1/t      (c) 2/t      (d) -1/t
```
**ANSWER: (b)**
```
  dx/dt = 2 a t        dy/dt = 2 a

  dy/dx = 2a / (2 a t) = 1 / t
```

---

### Q26
```
  If x = a cos t and y = b sin t , then dy/dx =

  (a) (b/a) tan t     (b) -(b/a) cot t
  (c) -(a/b) cot t    (d) (b/a) cot t
```
**ANSWER: (b)**
```
  dx/dt = - a sin t         dy/dt = b cos t

              b cos t          b
  dy/dx  =  ------------  = - --- cot t
             - a sin t         a
```

---

### Q27
```
  If x = a( t - sin t ) and y = a( 1 - cos t ) , then dy/dx =

  (a) tan(t/2)     (b) cot(t/2)     (c) tan t     (d) cot t
```
**ANSWER: (b)**
```
  dx/dt = a( 1 - cos t ) = 2a sin^2(t/2)

  dy/dt = a sin t        = 2a sin(t/2) cos(t/2)

             2a sin(t/2) cos(t/2)       cos(t/2)
  dy/dx  =  ----------------------  =  ----------  =  cot(t/2)
              2a sin^2(t/2)             sin(t/2)
```

---

### Q28
```
  If x = e^t ( sin t + cos t ) and y = e^t ( sin t - cos t ) , then dy/dx =

  (a) tan t     (b) cot t     (c) 1     (d) -tan t
```
**ANSWER: (a)**
```
  dx/dt = e^t (sin t + cos t) + e^t (cos t - sin t)  =  2 e^t cos t

  dy/dt = e^t (sin t - cos t) + e^t (cos t + sin t)  =  2 e^t sin t

  dy/dx = ( 2 e^t sin t ) / ( 2 e^t cos t )  =  tan t
```

---

### Q29
```
  If x = a t^2 and y = 2 a t , then d2y/dx2 =

  (a) -1/(2 a t^3)     (b) 1/(2 a t^3)
  (c) 0                (d) -1/t^2
```
**ANSWER: (a)**
```
  dy/dx = 1/t

   d  ( 1 )        1
  ---- ( - )  =  - ---
   dt  ( t )       t^2

   d2y        1          1              1
  -----  =  - ---  x  --------  =  - ----------
   dx^2       t^2      2 a t          2 a t^3
```

> **SHORTCUT / TRAP:** option (c) is what you get from the wrong formula
> (d2y/dt2)/(d2x/dt2) = 0/(2a) = 0. That option is placed there deliberately.
> **Always** use d2y/dx2 = [ d/dt (dy/dx) ] / (dx/dt).

---

# PATTERN 6 — Second derivatives and relations

### Q30
```
  If y = a cos( n x ) + b sin( n x ) , then d2y/dx2 =

  (a) n^2 y      (b) - n^2 y      (c) n y      (d) - n y
```
**ANSWER: (b)**
```
  y1 = - a n sin nx + b n cos nx

  y2 = - a n^2 cos nx - b n^2 sin nx  =  - n^2 y

  (equivalently: y2 + n^2 y = 0)
```

---

### Q31
```
  If y = a e^(mx) + b e^(-mx) , then d2y/dx2 =

  (a) m y      (b) - m^2 y      (c) m^2 y      (d) 0
```
**ANSWER: (c)**
```
  y1 = a m e^(mx) - b m e^(-mx)

  y2 = a m^2 e^(mx) + b m^2 e^(-mx)  =  m^2 y
```

> **SHORTCUT — remember the sign pattern:**
> ```
>    EXPONENTIALS  (e^mx , e^-mx)   ->   y2 = + m^2 y
>    TRIG          (sin nx, cos nx) ->   y2 = - n^2 y
> ```

---

### Q32
```
  If x = t^2 and y = t^3 , then d2y/dx2 =

  (a) 3/(2t)     (b) 3/(4t)     (c) 3t/2     (d) 3/2
```
**ANSWER: (b)**
```
  dx/dt = 2t        dy/dt = 3t^2

  dy/dx = 3t^2 / (2t) = 3t/2

   d  ( 3t )      3
  ---- ( -- ) =  ---
   dt  ( 2  )     2

   d2y       3       1        3
  ----- =   ---  x  ----  =  ----
   dx^2      2       2t       4t
```

---

### Q33
```
  The n-th derivative of e^(2x) is

  (a) 2 e^(2x)     (b) 2^n e^(2x)     (c) n e^(2x)     (d) e^(2x)
```
**ANSWER: (b)**
```
  Each differentiation pulls out one factor of 2.
  After n times:  2^n e^(2x).

  (General rule: the n-th derivative of e^(ax) is a^n e^(ax).)
```

---

# PATTERN 7 — Differentiability

### Q34
```
  Which of the following is NOT differentiable at x = 0 ?

  (a) x^2     (b) abs(x)     (c) x . abs(x)     (d) x^3
```
**ANSWER: (b)**
```
  For abs(x) at 0:

    right derivative  = +1        left derivative  = -1

  They differ, so the derivative does not exist.
  (x.abs(x) IS differentiable at 0, with derivative 0. Its GRAPH has no corner.)
```

---

### Q35
```
  f(x) = abs( x - 1 ) is

  (a) differentiable everywhere
  (b) continuous everywhere but not differentiable at x = 1
  (c) discontinuous at x = 1
  (d) not continuous anywhere
```
**ANSWER: (b)**
```
  The graph is a V with its corner at x = 1.
  No break  ->  continuous everywhere.
  A sharp corner  ->  no unique tangent at x = 1  ->  not differentiable there.
```

> **SHORTCUT:** any modulus sign creates a corner at the point where the inside
> becomes zero. Continuous there, NOT differentiable there. That single sentence
> answers most differentiability MCQs.

---

# PATTERN 8 — One function with respect to another

### Q36
```
  The derivative of sin^2 x with respect to cos^2 x is

  (a) 1      (b) -1      (c) tan^2 x      (d) -tan^2 x
```
**ANSWER: (b)**
```
  du/dx = 2 sin x cos x
  dv/dx = - 2 sin x cos x

  du/dv = -1
```

---

### Q37
```
  The derivative of arctan x with respect to arcsin x is

  (a) sqrt(1 - x^2)/(1 + x^2)      (b) (1 + x^2)/sqrt(1 - x^2)
  (c) 1                            (d) 1/(1 + x^2)
```
**ANSWER: (a)**
```
  du/dx = 1 / (1 + x^2)
  dv/dx = 1 / sqrt(1 - x^2)

   du       1/(1 + x^2)          sqrt(1 - x^2)
  ---- =  ------------------ =  ---------------
   dv      1/sqrt(1 - x^2)          1 + x^2
```

---

### Q38
```
  The derivative of arctan( 2x/(1 - x^2) ) with respect to
  arcsin( 2x/(1 + x^2) ) is

  (a) 0      (b) 1      (c) 2      (d) 1/2
```
**ANSWER: (b)**
```
  Both simplify to 2 arctan x.
  Two identical functions -> the derivative of one w.r.t. the other is 1.
```

> **SHORTCUT:** whenever a question asks for "derivative of A w.r.t. B" and BOTH
> A and B are inverse-trig monsters, simplify both first. They almost always
> collapse to multiples of arctan x or arcsin x, and the answer is a plain number.

---

# ===============================================================
# SPEED RULES FOR THE EXAM HALL
# ===============================================================

```
  +-----------------------------------+------------------------------------+
  |  IF YOU SEE THIS ...              |  DO THIS IMMEDIATELY               |
  +-----------------------------------+------------------------------------+
  |  arctan(2x/(1-x^2))               |  it is 2 arctan x                  |
  |  arcsin(2x/(1+x^2))               |  -> derivative 2/(1 + x^2)         |
  |  arccos((1-x^2)/(1+x^2))          |                                    |
  +-----------------------------------+------------------------------------+
  |  arcsin(3x - 4x^3)                |  3 arcsin x  -> 3/sqrt(1 - x^2)    |
  |  arccos(4x^3 - 3x)                |  3 arccos x  -> -3/sqrt(1 - x^2)   |
  +-----------------------------------+------------------------------------+
  |  arcsin x + arccos x  (or the     |  it is pi/2, a CONSTANT            |
  |  arctan/arccot, arcsec/arccosec   |  -> derivative is 0                |
  |  pair)                            |                                    |
  +-----------------------------------+------------------------------------+
  |  x in the base AND in the power   |  LOG both sides. Power rule and    |
  |  (x^x , (sin x)^x , [f]^[g])      |  a^x log a are both WRONG here     |
  +-----------------------------------+------------------------------------+
  |  A long product / quotient /      |  take logs first; it turns into    |
  |  root chain                       |  a sum of simple terms             |
  +-----------------------------------+------------------------------------+
  |  x and y tangled together         |  IMPLICIT: differentiate, attach   |
  |                                   |  dy/dx to every y term, collect    |
  +-----------------------------------+------------------------------------+
  |  x = f(t) , y = g(t)              |  dy/dx = (dy/dt)/(dx/dt)           |
  +-----------------------------------+------------------------------------+
  |  Second derivative of a           |  y2 = [d/dt (dy/dx)] / (dx/dt)     |
  |  parametric function              |  NOT (d2y/dt2)/(d2x/dt2)           |
  +-----------------------------------+------------------------------------+
  |  Any modulus sign, abs( )         |  corner at the zero of the inside: |
  |                                   |  continuous but NOT differentiable |
  +-----------------------------------+------------------------------------+
  |  Angle written in DEGREES         |  convert to radians; expect a      |
  |                                   |  factor of pi/180                  |
  +-----------------------------------+------------------------------------+
  |  y = a e^(mx) + b e^(-mx)         |  y2 = + m^2 y                      |
  |  y = a cos nx + b sin nx          |  y2 = - n^2 y                      |
  +-----------------------------------+------------------------------------+
  |  "derivative of A w.r.t. B"       |  (dA/dx) divided by (dB/dx)        |
  +-----------------------------------+------------------------------------+
  |  Product-rule option with only    |  it is wrong. The answer must have |
  |  ONE term                         |  two terms                         |
  +-----------------------------------+------------------------------------+
  |  Quotient-rule option without a   |  it is wrong. There is always a    |
  |  squared denominator              |  v^2 on the bottom                 |
  +-----------------------------------+------------------------------------+
  |  Stuck, and it's EAPCET           |  GUESS - there is no negative      |
  |                                   |  marking                           |
  +-----------------------------------+------------------------------------+
```

---

# THE NUMBER-SUBSTITUTION TRICK

If a derivative question has algebraic options and you are short of time:

```
  STEP 1   Pick an easy value, usually x = 0 or x = 1.
  STEP 2   Work out the true derivative at that value
           (differentiate roughly, or use a known simple case).
  STEP 3   Put the same value into every OPTION.
  STEP 4   Whichever option matches is the answer.
```

Example: for y = x^x at x = 1 the true value is 1.
Option x . x^(x-1) gives 1 as well — so this test alone does not separate them;
try x = e instead, where x^x(1 + log x) = e^e . 2 but x . x^(x-1) = e^e.
Two well-chosen numbers will always kill the wrong options.

Use this whenever the options are formulas rather than numbers.
