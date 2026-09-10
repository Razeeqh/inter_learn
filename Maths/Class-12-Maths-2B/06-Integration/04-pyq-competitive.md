# Integration — JEE Main / AP EAPCET / TG EAPCET Questions

All multiple choice.

```
  +------------------+----------------------+---------------------------+
  |  EXAM            |  MARKING             |  STRATEGY                 |
  +------------------+----------------------+---------------------------+
  |  AP EAPCET       |  +1 , NO negative    |  NEVER leave a blank      |
  |  TG EAPCET       |  +1 , NO negative    |  NEVER leave a blank      |
  |  JEE Main        |  +4 , -1 wrong       |  Skip only if you truly   |
  |                  |                      |  cannot narrow it down    |
  +------------------+----------------------+---------------------------+
```

**How many questions come from Integration (indefinite):**

```
  AP EAPCET  (Maths, 80 questions)  ->  4 to 6
  TG EAPCET  (Maths, 80 questions)  ->  4 to 6
  JEE Main   (Maths, 25 questions)  ->  1 to 2
                                        (plus 2 to 3 more from
                                         Definite Integrals, which
                                         use exactly these methods)
```

```
  +------------------------------------------------------------------+
  |  THE ONE THING THAT MAKES INTEGRATION THE EASIEST MCQ TOPIC:      |
  |                                                                   |
  |  You never have to integrate. You only have to DIFFERENTIATE      |
  |  the four options and see which one gives the question back.      |
  |                                                                   |
  |  Differentiating is fast, mechanical and cannot go wrong.         |
  |  Integrating is slow and can go wrong ten different ways.         |
  +------------------------------------------------------------------+
```

> Questions are grouped by PATTERN, not by year, because the pattern is what
> repeats. Verify with official papers before the exam.

---

# PATTERN 1 — Direct standard integral, or f(ax + b)

These are pure recall. Aim for **under 20 seconds each**.

### Q1
```
   INT ( x + 1/x )^2 dx  =  ?

   (a)  x^3/3 + 2x - 1/x + c        (b)  x^3/3 + 2x + 1/x + c
   (c)  (1/3)( x + 1/x )^3 + c      (d)  x^3/3 - 1/x + c
```
**ANSWER: (a)**
```
   EXPAND FIRST. You cannot integrate a bracket squared as it stands.

   ( x + 1/x )^2  =  x^2  +  2  +  1/x^2  =  x^2 + 2 + x^(-2)

                      x^3            x^(-1)        x^3           1
   INT ( ... ) dx =  -----  +  2x + -------- + c = ----- + 2x - --- + c
                       3              -1            3            x

   CHECK by differentiating:  x^2 + 2 + 1/x^2   correct.
```
> Option (c) is the trap: `INT [f(x)]^n dx` is NOT `[f(x)]^(n+1)/(n+1)`
> unless `f'(x)` is sitting there too.

---

### Q2
```
   INT sin ( 3x + 1 ) dx  =  ?

   (a)  (1/3) cos(3x+1) + c         (b)  -(1/3) cos(3x+1) + c
   (c)  -3 cos(3x+1) + c            (d)  -cos(3x+1) + c
```
**ANSWER: (b)**
```
   Rule:   INT f(ax + b) dx  =  (1/a) F(ax + b) + c

   INT sin x dx = -cos x , so divide by the coefficient of x, which is 3.

   CHECK:  d/dx [ -(1/3) cos(3x+1) ] = (1/3)( sin(3x+1) )( 3 ) = sin(3x+1)  correct
```

---

### Q3
```
   INT ( 2x + 3 )^5 dx  =  ?

   (a)  (2x+3)^6 / 6 + c            (b)  (2x+3)^6 / 12 + c
   (c)  (2x+3)^6 / 10 + c           (d)  5(2x+3)^4 + c
```
**ANSWER: (b)**
```
        ( 2x + 3 )^(5+1)        ( 2x + 3 )^6
   =   -------------------  =  --------------  +  c
            2 x ( 5 + 1 )            12
             ^      ^
        coefficient  new power
          of x

   CHECK:  d/dx [ (2x+3)^6 / 12 ] = 6(2x+3)^5 (2) / 12 = (2x+3)^5   correct
```

---

### Q4
```
             dx
   INT --------------  =  ?
        1 + cos 2x

   (a)  (1/2) tan x + c      (b)  tan x + c
   (c)  (1/2) cot x + c      (d)  2 tan x + c
```
**ANSWER: (a)**
```
   Identity:   1 + cos 2x  =  2 cos^2 x

            dx           1                     1
   INT ------------ =   --- INT sec^2 x dx =  --- tan x  +  c
        2 cos^2 x        2                     2
```
> **SHORTCUT:** in any integral containing `1 ± cos 2x` or `1 ± cos x`,
> replace it with the half-angle form BEFORE you do anything else.
> `1 + cos x = 2cos^2(x/2)` , `1 - cos x = 2sin^2(x/2)`.

---

# PATTERN 2 — The top is the derivative of the bottom

```
   +--------------------------------------------------------------+
   |            f'(x)                                             |
   |     INT ----------- dx   =   log | f(x) |   +   c            |
   |            f(x)                                              |
   +--------------------------------------------------------------+
```
Spot it in 3 seconds: **differentiate the bottom in your head and look at the top.**

### Q5
```
          2x + 3
   INT ------------- dx  =  ?
       x^2 + 3x + 7

   (a)  log | x^2 + 3x + 7 | + c        (b)  2 log | x^2+3x+7 | + c
   (c)  (1/2) log | x^2+3x+7 | + c      (d)  Tan^-1 ( x^2 + 3x + 7 ) + c
```
**ANSWER: (a)**
```
   d/dx ( x^2 + 3x + 7 ) = 2x + 3      EXACT match with the top.

   So the answer is  log | x^2 + 3x + 7 |  +  c    straight away.
```

---

### Q6
```
        sec^2 x
   INT --------- dx  =  ?
         tan x

   (a)  log | sec x | + c        (b)  log | tan x | + c
   (c)  tan^2 x / 2 + c          (d)  log | cot x | + c
```
**ANSWER: (b)**
```
   f = tan x  ,  f' = sec^2 x        MATCH

   =  log | tan x |  +  c
```

---

### Q7
```
            dx
   INT ------------  =  ?
        x  log x

   (a)  log | log x | + c        (b)  (log x)^2 / 2 + c
   (c)  1 / log x + c            (d)  log | x log x | + c
```
**ANSWER: (a)**
```
   Write it as   INT ( 1/x ) / ( log x ) dx

   f = log x  ,  f' = 1/x           MATCH

   =  log | log x |  +  c

   CHECK:  d/dx log|log x| = (1/log x)(1/x) = 1/(x log x)     correct
```

---

### Q8
```
        e^(2x)
   INT ---------- dx  =  ?
       e^(2x) + 1

   (a)  log ( e^(2x) + 1 ) + c        (b)  (1/2) log ( e^(2x) + 1 ) + c
   (c)  2 log ( e^(2x) + 1 ) + c      (d)  e^(2x) log ( e^(2x)+1 ) + c
```
**ANSWER: (b)**
```
   f = e^(2x) + 1  ,  f' = 2 e^(2x)       The top is only HALF of f'.

        1        2 e^(2x)            1
   =   --- INT ------------ dx  =   --- log ( e^(2x) + 1 )  +  c
        2       e^(2x) + 1           2
```
> **TRAP:** the most common wrong answer here is (a) — students match the
> shape but forget to fix the constant. Always ask: *is the top EXACTLY f',
> or a multiple of it?*

---

# PATTERN 3 — Something to a power, with its derivative outside

```
   +--------------------------------------------------------------+
   |                              [ f(x) ]^(n+1)                  |
   |   INT [f(x)]^n f'(x) dx  =  ----------------  +  c           |
   |                                  n + 1                       |
   |                                                              |
   |          f'(x)                                               |
   |   INT ----------- dx     =  2 sqrt( f(x) )  +  c             |
   |       sqrt( f(x) )                                           |
   +--------------------------------------------------------------+
```

### Q9
```
   INT x sqrt( x^2 + 1 ) dx  =  ?

   (a)  (1/3)( x^2 + 1 )^(3/2) + c      (b)  (2/3)( x^2+1 )^(3/2) + c
   (c)  (1/2) x^2 sqrt(x^2+1) + c       (d)  ( x^2+1 )^(3/2) + c
```
**ANSWER: (a)**
```
   f = x^2 + 1 ,  f' = 2x .  The top has x, i.e. HALF of f'.

        1                            1     ( x^2+1 )^(3/2)
   =   --- INT ( x^2+1 )^(1/2) 2x dx = --- . ----------------  + c
        2                            2          3/2

        1
   =   --- ( x^2 + 1 )^(3/2)  +  c
        3

   CHECK:  (1/3)(3/2)(x^2+1)^(1/2)(2x) = x sqrt(x^2+1)      correct
```

---

### Q10
```
   INT sin^3 x cos x dx  =  ?

   (a)  sin^4 x / 4 + c        (b)  -cos^4 x / 4 + c
   (c)  sin^4 x + c            (d)  cos^4 x / 4 + c
```
**ANSWER: (a)**
```
   f = sin x  ,  f' = cos x   sitting right there.

        sin^4 x
   =   ---------  +  c
           4
```

---

### Q11
```
           x
   INT ------------- dx  =  ?
       sqrt(x^2 + 4)

   (a)  sqrt(x^2 + 4) + c            (b)  2 sqrt(x^2+4) + c
   (c)  log | x + sqrt(x^2+4) | + c  (d)  (1/2) log(x^2+4) + c
```
**ANSWER: (a)**
```
   f = x^2 + 4 , f' = 2x .  Top is x = f'/2.

        1        2x               1
   =   --- INT ---------- dx  =  --- . 2 sqrt(x^2+4)  =  sqrt(x^2+4) + c
        2      sqrt(x^2+4)        2
```
> **TRAP:** option (c) is the answer to `INT dx/sqrt(x^2+4)` — the version
> with **no x on top**. One little x changes the whole method. Read carefully.

---

### Q12
```
        e^(sqrt x)
   INT ------------- dx  =  ?
          sqrt x

   (a)  e^(sqrt x) + c        (b)  2 e^(sqrt x) + c
   (c)  (1/2) e^(sqrt x) + c  (d)  e^(sqrt x) / sqrt x + c
```
**ANSWER: (b)**
```
   Put  t = sqrt x      =>    dt = dx / ( 2 sqrt x )    =>   dx/sqrt x = 2 dt

   = INT e^t . 2 dt  =  2 e^t  +  c  =  2 e^(sqrt x)  +  c

   CHECK:  d/dx [ 2 e^(sqrt x) ] = 2 e^(sqrt x) . 1/(2 sqrt x)
                                 = e^(sqrt x)/sqrt x        correct
```

---

# PATTERN 4 — Integration by parts (ILATE)

```
   I nverse trig  >  L og  >  A lgebraic  >  T rig  >  E xponential
   whichever comes FIRST in that list is  u
```

### Q13
```
   INT x cos x dx  =  ?

   (a)  x sin x + cos x + c        (b)  x sin x - cos x + c
   (c)  -x cos x + sin x + c       (d)  x^2 sin x / 2 + c
```
**ANSWER: (a)**
```
   ILATE:  A before T   =>   u = x , v = cos x , INT v dx = sin x

   = x sin x  -  INT ( 1 )( sin x ) dx  =  x sin x  +  cos x  +  c

   CHECK:  sin x + x cos x - sin x  =  x cos x      correct
```
> **SHORTCUT for MCQ:** don't integrate at all — differentiate the options.
> Option (b) gives `sin x + x cos x + sin x`, wrong. Option (a) gives
> `x cos x`. Done in 10 seconds.

---

### Q14
```
   INT x^2 e^x dx  =  ?

   (a)  e^x ( x^2 - 2x + 2 ) + c      (b)  e^x ( x^2 + 2x + 2 ) + c
   (c)  e^x ( x^2 - 2x - 2 ) + c      (d)  e^x x^3 / 3 + c
```
**ANSWER: (a)**
```
   By parts twice, or use the pattern for INT x^n e^x dx :

       signs alternate  + - + - ...  starting with +

       e^x [ x^2  -  (2x)  +  (2) ]   =   e^x ( x^2 - 2x + 2 )

   CHECK:  e^x(x^2-2x+2) + e^x(2x-2) = e^x x^2       correct
```
> **UNIVERSAL METHOD for `INT (polynomial) e^x dx` MCQs:** the answer is
> always `e^x times (poly - poly' + poly'' - ...)`. No working needed.

---

### Q15
```
        log x
   INT --------- dx  =  ?
         x^2

   (a)  -(1 + log x)/x + c        (b)  (1 + log x)/x + c
   (c)  (log x)^2 / 2 + c         (d)  -(log x)/x + c
```
**ANSWER: (a)**
```
   ILATE:  L before A  =>  u = log x , v = x^(-2) , INT v dx = -1/x

           -log x            1      -1
   =      --------  -  INT  --- . ( ---- ) dx
              x              x       x

           -log x            dx        -log x       1
   =      --------  +  INT ------  =  -------- -  ----- + c
              x             x^2          x          x

            1 + log x
   =   -  ------------  +  c
                x

   CHECK:  d/dx [ -(1+log x)/x ] = -[ (1/x)(x) - (1+log x) ] / x^2
                                 = -( 1 - 1 - log x )/x^2 = log x / x^2   correct
```

---

### Q16
```
   INT e^x cos x dx  =  ?

   (a)  (e^x/2)( sin x + cos x ) + c      (b)  (e^x/2)( sin x - cos x ) + c
   (c)  e^x sin x + c                     (d)  e^x cos x + c
```
**ANSWER: (a)**
```
   Standard result:

                              e^(ax)
   INT e^(ax) cos(bx) dx =  ----------- ( a cos bx  +  b sin bx )  +  c
                             a^2 + b^2

   Here a = 1 , b = 1  :   ( e^x / 2 )( cos x + sin x )

   CHECK:  (1/2)[ e^x(sin+cos) + e^x(cos - sin) ] = (1/2)(2 e^x cos x)
                                                  = e^x cos x        correct
```

---

# PATTERN 5 — The e^x [ f(x) + f'(x) ] one-liner

```
   +--------------------------------------------------------------+
   |     INT e^x [ f(x) + f'(x) ] dx   =   e^x f(x)  +  c          |
   +--------------------------------------------------------------+
```
**Method:** look at the bracket. Two pieces. Is one the derivative of the
other? If yes, the answer is `e^x times the piece that is NOT the derivative`.

### Q17
```
   INT e^x ( 1/x  -  1/x^2 ) dx  =  ?

   (a)  e^x / x + c        (b)  -e^x / x + c
   (c)  e^x log x + c      (d)  e^x / x^2 + c
```
**ANSWER: (a)**
```
   f = 1/x    =>   f' = -1/x^2         MATCH

   =  e^x . ( 1/x )  +  c

   CHECK:  d/dx ( e^x / x ) = ( e^x . x - e^x )/x^2 = e^x/x - e^x/x^2   correct
```

---

### Q18
```
         x e^x
   INT ---------- dx  =  ?
       ( 1 + x )^2

   (a)  e^x / (1 + x) + c        (b)  e^x (1 + x) + c
   (c)  -e^x / (1+x) + c         (d)  e^x / (1+x)^2 + c
```
**ANSWER: (a)**
```
   You must do the algebra before you can see it. Split the top:

        x  =  ( 1 + x ) - 1

        x            ( 1 + x )            1              1            1
   ---------- =    ----------- -    ----------- =    ------- -  -----------
   ( 1+x )^2        ( 1+x )^2       ( 1+x )^2        1 + x       ( 1+x )^2

   Now:   f = 1/(1+x)   =>   f' = -1/(1+x)^2        MATCH

               e^x
   =        ---------  +  c
             1 + x
```
> **SHORTCUT:** any MCQ of the form `INT e^x [ something ] dx` where the
> options are `e^x times something`, just differentiate the options.
> `d/dx [ e^x/(1+x) ] = e^x/(1+x) - e^x/(1+x)^2 = x e^x/(1+x)^2`. Match.

---

### Q19
```
   INT e^x ( sec x  +  sec x tan x ) dx  =  ?

   (a)  e^x sec x + c        (b)  e^x tan x + c
   (c)  e^x ( sec x + tan x ) + c    (d)  e^x sec x tan x + c
```
**ANSWER: (a)**
```
   f = sec x   =>   f' = sec x tan x        MATCH

   =  e^x sec x  +  c
```

---

# PATTERN 6 — The nine standard forms, quoted directly

| Form | Answer |
|------|--------|
| 1/(x^2 + a^2) | (1/a) Tan^-1(x/a) |
| 1/(x^2 - a^2) | (1/2a) log abs((x-a)/(x+a)) |
| 1/(a^2 - x^2) | (1/2a) log abs((a+x)/(a-x)) |
| 1/sqrt(a^2 - x^2) | Sin^-1(x/a) |
| 1/sqrt(x^2 ± a^2) | log abs(x + sqrt(x^2 ± a^2)) |
| sqrt(a^2 - x^2) | (x/2)sqrt(a^2-x^2) + (a^2/2) Sin^-1(x/a) |

### Q20
```
             dx
   INT -------------  =  ?
        4x^2 + 9

   (a)  (1/6) Tan^-1 ( 2x/3 ) + c        (b)  (1/3) Tan^-1 ( 2x/3 ) + c
   (c)  (1/2) Tan^-1 ( 2x/3 ) + c        (d)  (1/6) Tan^-1 ( 3x/2 ) + c
```
**ANSWER: (a)**
```
   Take the 4 out of the WHOLE bottom first.

          dx             1              dx
   INT --------- =      --- INT ------------------
       4(x^2+9/4)        4       x^2 + ( 3/2 )^2

        1      1              x            1              2x
   =   --- . ------ Tan^-1 ------- + c =  --- Tan^-1  ( ------ )  +  c
        4      3/2            3/2          6              3

   CHECK: d/dx = (1/6) . 1/(1 + 4x^2/9) . (2/3) = (1/9).(9/(9+4x^2))
                                                = 1/(4x^2+9)      correct
```
> **TRAP:** forgetting to divide the constant term by 4 as well. If you get
> `x^2 + 9` instead of `x^2 + 9/4`, every later step is wrong.

---

### Q21
```
              dx
   INT ----------------  =  ?
       sqrt( 9 - 4x^2 )

   (a)  Sin^-1 ( 2x/3 ) + c        (b)  (1/2) Sin^-1 ( 2x/3 ) + c
   (c)  (1/2) Sin^-1 ( x/3 ) + c   (d)  (1/3) Sin^-1 ( 2x/3 ) + c
```
**ANSWER: (b)**
```
   9 - 4x^2 = 4 ( 9/4 - x^2 )  ,  so sqrt( ... ) = 2 sqrt( (3/2)^2 - x^2 )

        1                dx             1              x
   =   --- INT ------------------- =   --- Sin^-1  ( ------ )  +  c
        2       sqrt((3/2)^2 - x^2)     2              3/2

        1                2x
   =   --- Sin^-1   ( ------ )  +  c
        2                3
```

---

### Q22
```
   INT sqrt( 4 - x^2 ) dx  =  ?

   (a)  (x/2) sqrt(4-x^2) + 2 Sin^-1(x/2) + c
   (b)  (x/2) sqrt(4-x^2) + 4 Sin^-1(x/2) + c
   (c)  (x/2) sqrt(4-x^2) - 2 Sin^-1(x/2) + c
   (d)  (2/3)( 4 - x^2 )^(3/2) + c
```
**ANSWER: (a)**
```
                             x                    a^2         x
   INT sqrt(a^2 - x^2) dx = --- sqrt(a^2 - x^2) + ---- Sin^-1 ---  + c
                             2                     2          a

   Here a = 2 ,  so  a^2/2 = 4/2 = 2 .

        x                          x
   =   --- sqrt( 4 - x^2 )  + 2 Sin^-1 ---  +  c
        2                              2
```
> **SHORTCUT:** the Group-3 answer is always
> `(x/2) x THE ROOT  +  (a^2/2) x THE GROUP-2 ANSWER`.
> Options that put `a^2` instead of `a^2/2` (like (b)) are the standard trap.

---

# PATTERN 7 — Complete the square first

**Trigger:** a full quadratic `ax^2 + bx + c` on the bottom, with **no x on top**.

### Q23
```
             dx
   INT ---------------  =  ?
       x^2 + 6x + 13

   (a)  (1/2) Tan^-1 ( (x+3)/2 ) + c      (b)  Tan^-1 ( x + 3 ) + c
   (c)  (1/4) Tan^-1 ( (x+3)/2 ) + c      (d)  (1/2) log | x^2+6x+13 | + c
```
**ANSWER: (a)**
```
   x^2 + 6x + 13  =  ( x^2 + 6x + 9 ) + 4  =  ( x + 3 )^2  +  2^2

             dX             1            X            1            x + 3
   INT ------------- =     --- Tan^-1 ( --- )  + c = --- Tan^-1 ( ------- ) + c
        X^2 + 2^2           2            2            2              2

   CHECK: d/dx = (1/2) . 1/(1 + (x+3)^2/4) . (1/2)
               = (1/4) . 4/( 4 + (x+3)^2 ) = 1/( x^2+6x+13 )     correct
```

---

### Q24
```
              dx
   INT -------------------  =  ?
       sqrt( 3 - 2x - x^2 )

   (a)  Sin^-1 ( (x+1)/2 ) + c        (b)  Sin^-1 ( (x-1)/2 ) + c
   (c)  log | (x+1) + sqrt(3-2x-x^2) | + c   (d)  (1/2) Sin^-1 ( (x+1)/2 ) + c
```
**ANSWER: (a)**
```
   Take the minus out of the x terms FIRST.

   3 - 2x - x^2  =  -( x^2 + 2x - 3 )
                 =  -[ ( x + 1 )^2 - 1 - 3 ]
                 =  -[ ( x + 1 )^2 - 4 ]
                 =  4  -  ( x + 1 )^2   =   2^2 - ( x + 1 )^2

               dX                     X                    x + 1
   INT --------------------- = Sin^-1 --- + c   =  Sin^-1 ------- + c
       sqrt( 2^2 - X^2 )               2                     2
```
> **TRAP:** if x^2 has a minus sign in front, the answer is a `Sin^-1`.
> If x^2 is positive, the answer is a `log`. Decide that before you start.

---

### Q25
```
              dx
   INT --------------------  =  ?
       sqrt( x^2 - 4x + 13 )

   (a)  log | (x-2) + sqrt(x^2-4x+13) | + c
   (b)  Sin^-1 ( (x-2)/3 ) + c
   (c)  (1/3) Tan^-1 ( (x-2)/3 ) + c
   (d)  2 sqrt( x^2 - 4x + 13 ) + c
```
**ANSWER: (a)**
```
   x^2 - 4x + 13  =  ( x - 2 )^2  +  3^2

               dX
   INT ---------------- = log | X + sqrt( X^2 + 9 ) | + c
       sqrt(X^2 + 3^2)

   Put X = x - 2 back in.
```

---

# PATTERN 8 — (px + q) on top

```
   +--------------------------------------------------------------+
   |     px + q  =  A ( DERIVATIVE of the quadratic )  +  B        |
   |                                                               |
   |     Piece 1 -> INT f'/f = log|f|   or   INT f'/sqrt f = 2sqrt f|
   |     Piece 2 -> a completed-square standard form               |
   +--------------------------------------------------------------+
```

### Q26
```
          2x + 1
   INT ------------- dx  =  ?
       x^2 + 4x + 13

   (a)  log | x^2+4x+13 |  -  Tan^-1 ( (x+2)/3 )  +  c
   (b)  log | x^2+4x+13 |  +  Tan^-1 ( (x+2)/3 )  +  c
   (c)  (1/2) log | x^2+4x+13 |  -  3 Tan^-1 ( (x+2)/3 )  +  c
   (d)  2 sqrt( x^2 + 4x + 13 )  +  c
```
**ANSWER: (a)**
```
   STEP 1   d/dx ( x^2 + 4x + 13 ) = 2x + 4

   STEP 2   2x + 1  =  A ( 2x + 4 )  +  B

            x terms   :   2 = 2A          =>   A = 1
            constants :   1 = 4A + B = 4 + B  =>   B = -3

   STEP 3          2x + 4                        dx
            INT ------------- dx   -   3 INT -------------
                x^2 + 4x + 13                x^2 + 4x + 13

   STEP 4   First piece  =  log | x^2 + 4x + 13 |

            Second: x^2+4x+13 = ( x + 2 )^2 + 3^2

                            1            x + 2
                  3  x     --- Tan^-1 ( ------- )  =  Tan^-1 ( (x+2)/3 )
                            3              3

   ANSWER:  log | x^2 + 4x + 13 |  -  Tan^-1 ( (x+2)/3 )  +  c
```
> Note how the `3` from B and the `1/3` from the standard form cancel. That
> happens constantly — expect it and you will spot the right option faster.

---

### Q27
```
            x + 3
   INT ------------------- dx  =  ?
       sqrt( x^2 + 2x + 5 )

   (a)  sqrt(x^2+2x+5) + 2 log | (x+1) + sqrt(x^2+2x+5) | + c
   (b)  2 sqrt(x^2+2x+5) + 3 log | (x+1) + sqrt(x^2+2x+5) | + c
   (c)  sqrt(x^2+2x+5) - 2 log | (x+1) + sqrt(x^2+2x+5) | + c
   (d)  (1/2) log | x^2 + 2x + 5 | + c
```
**ANSWER: (a)**
```
   STEP 1   Derivative of the inside  =  2x + 2

   STEP 2   x + 3  =  A ( 2x + 2 )  +  B

            x terms   :   1 = 2A            =>   A = 1/2
            constants :   3 = 2A + B = 1 + B  =>   B = 2

   STEP 3    1          2x + 2                          dx
            --- INT ------------------ dx  +  2 INT -------------------
             2      sqrt(x^2 + 2x + 5)             sqrt(x^2 + 2x + 5)

   STEP 4   Piece 1 = (1/2) . 2 sqrt(x^2+2x+5)  =  sqrt(x^2 + 2x + 5)

            Piece 2:  x^2+2x+5 = (x+1)^2 + 2^2

                    =  2 log | (x + 1) + sqrt(x^2 + 2x + 5) |
```
> **TRAP:** splitting `px + q` against the QUADRATIC instead of its
> DERIVATIVE. It must be `A(2ax + b) + B`.

---

# PATTERN 9 — Partial fractions

### Q28
```
             dx
   INT --------------  =  ?
       x^2 - 5x + 6

   (a)  log | (x-3)/(x-2) | + c        (b)  log | (x-2)/(x-3) | + c
   (c)  (1/5) log | (x-3)/(x-2) | + c  (d)  Tan^-1 ( x - 5/2 ) + c
```
**ANSWER: (a)**
```
   x^2 - 5x + 6  =  ( x - 2 )( x - 3 )

   COVER-UP RULE:

     over ( x - 3 ) :  cover it, put x = 3  ->  1/(3 - 2) =  1
     over ( x - 2 ) :  cover it, put x = 2  ->  1/(2 - 3) = -1

           1            1          1
      ----------- =  ------- -  -------
      (x-2)(x-3)      x - 3      x - 2

   = log|x-3| - log|x-2| + c  =  log | (x-3)/(x-2) |  +  c
```

---

### Q29
```
            x
   INT ------------------ dx  =  ?
       ( x - 1 )( x - 2 )

   (a)  2 log|x-2| - log|x-1| + c      (b)  log|x-1| - 2 log|x-2| + c
   (c)  log | (x-1)(x-2) | + c         (d)  log | x(x-1)(x-2) | + c
```
**ANSWER: (a)**
```
   COVER-UP RULE:

     over ( x - 1 ) :  put x = 1  ->  1/(1 - 2)  =  -1
     over ( x - 2 ) :  put x = 2  ->  2/(2 - 1)  =   2

            x            -1            2
      ------------- =  ------- +   -------
      (x-1)(x-2)        x - 1       x - 2

   =  - log|x-1|  +  2 log|x-2|  +  c
```
> **SHORTCUT:** the cover-up rule works for every DISTINCT LINEAR factor.
> It turns a 3-minute job into 15 seconds. It does NOT work for repeated
> factors or for irreducible quadratics — do those the long way.

---

# PATTERN 10 — t = tan(x/2)

```
   +--------------------------------------------------------------+
   |     t = tan ( x/2 )                                          |
   |                                                              |
   |     sin x = 2t/(1+t^2)    cos x = (1-t^2)/(1+t^2)            |
   |     dx    = 2 dt/(1+t^2)                                     |
   +--------------------------------------------------------------+
```
**Trigger:** `1 over ( a + b cos x )`, `1 over ( a + b sin x )`, or
`1 over ( a sin x + b cos x + c )`.

### Q30
```
             dx
   INT -------------  =  ?
       5 + 4 cos x

   (a)  (2/3) Tan^-1 ( (1/3) tan(x/2) ) + c
   (b)  (1/3) Tan^-1 ( tan(x/2)/3 ) + c
   (c)  (2/3) Tan^-1 ( 3 tan(x/2) ) + c
   (d)  (1/3) log | (3 + tan(x/2)) / (3 - tan(x/2)) | + c
```
**ANSWER: (a)**
```
   Put t = tan(x/2) :

                       1 - t^2      5(1+t^2) + 4(1-t^2)       t^2 + 9
   5 + 4 cos x  = 5 + 4 -------- = --------------------- =  ----------
                       1 + t^2           1 + t^2             1 + t^2

           2 dt / ( 1 + t^2 )              2 dt
   = INT --------------------- =  INT ------------
         ( t^2 + 9 )/( 1+t^2 )          t^2 + 9

             1            t              2               t
   = 2 .   ----- Tan^-1  ---  + c  =   ---  Tan^-1  (  --- )  +  c
             3            3              3               3

        2                tan( x/2 )
   =   --- Tan^-1  (   ------------ )  +  c
        3                    3
```
> **SPEED RULE:** if `a > b` you land on a **Tan^-1**. If `a < b` the
> quadratic in t becomes a difference of squares and you land on a **log**.
> Check `a` against `b` first and you can eliminate two options instantly.

---

### Q31
```
             dx
   INT -------------  =  ?
        1 + sin x

   (a)  -2 / ( 1 + tan(x/2) ) + c        (b)  2 / ( 1 + tan(x/2) ) + c
   (c)  tan(x/2) + c                     (d)  log | 1 + tan(x/2) | + c
```
**ANSWER: (a)**
```
   Put t = tan(x/2) :

                       2t          1 + t^2 + 2t        ( 1 + t )^2
   1 + sin x  =  1 + -------- =  ---------------  =  --------------
                     1 + t^2         1 + t^2            1 + t^2

              2 dt
   = INT -------------  =  2 INT ( 1 + t )^(-2) dt
        ( 1 + t )^2

              -1               -2                 -2
   = 2 .   -------- + c  =  -------- + c  =  ---------------  +  c
            1 + t            1 + t            1 + tan(x/2)
```

---

# PATTERN 11 — Trigonometric products and powers

```
   2 sin A cos B = sin(A+B) + sin(A-B)      sin^2 x = (1 - cos 2x)/2
   2 cos A cos B = cos(A+B) + cos(A-B)      cos^2 x = (1 + cos 2x)/2
   2 sin A sin B = cos(A-B) - cos(A+B)
```

### Q32
```
   INT sin 3x cos 5x dx  =  ?

   (a)  cos 2x / 4  -  cos 8x / 16  +  c
   (b)  cos 8x / 16  -  cos 2x / 4  +  c
   (c)  -cos 8x / 8  +  cos 2x / 2  +  c
   (d)  -( cos 3x sin 5x ) / 15  +  c
```
**ANSWER: (a)**
```
   2 sin 3x cos 5x  =  sin( 3x + 5x )  +  sin( 3x - 5x )
                    =  sin 8x  +  sin( -2x )
                    =  sin 8x  -  sin 2x

                        1
   sin 3x cos 5x  =    --- ( sin 8x  -  sin 2x )
                        2

         1     -cos 8x        cos 2x           cos 2x       cos 8x
   =    --- [ ---------  +  --------- ] + c = -------- -  --------- + c
         2        8              2               4            16
```
> Option (d) is the classic *"you cannot integrate a product term by term"*
> trap. There is no product rule for integration.

---

### Q33
```
              dx
   INT -----------------  =  ?
       sin^2 x cos^2 x

   (a)  tan x - cot x + c        (b)  tan x + cot x + c
   (c)  -2 cot 2x + c            (d)  both (a) and (c)
```
**ANSWER: (d)**
```
   METHOD 1   Split the 1 on top as  sin^2 x + cos^2 x :

        sin^2 x + cos^2 x            1              1
      -------------------  =    ---------  +   ---------  = sec^2 x + cosec^2 x
        sin^2 x cos^2 x          cos^2 x        sin^2 x

      INT ( sec^2 x + cosec^2 x ) dx  =  tan x  -  cot x  +  c

   METHOD 2   sin x cos x = (1/2) sin 2x , so sin^2 x cos^2 x = (1/4) sin^2 2x

      = 4 INT cosec^2 2x dx  =  4 . ( -1/2 ) cot 2x  =  -2 cot 2x  +  c

   The two answers differ only by a constant, because
   tan x - cot x = -2 cot 2x . Both are correct.
```
> **SHORTCUT:** whenever you see `1 / (sin^2 x cos^2 x)` type expressions,
> replace the 1 on top by `sin^2 x + cos^2 x` and split. It works every time.

---

# PATTERN 12 — EAPCET favourites (one clever move each)

### Q34
```
            dx
   INT -----------  =  ?
        1 + e^x

   (a)  x - log( 1 + e^x ) + c        (b)  log( 1 + e^x ) + c
   (c)  x + log( 1 + e^x ) + c        (d)  -1/( 1 + e^x ) + c
```
**ANSWER: (a)**
```
   Add and subtract e^x on the top:

        1          ( 1 + e^x ) - e^x                e^x
     -------- =   ------------------  =   1   -   --------
     1 + e^x          1 + e^x                     1 + e^x

   The second piece is INT f'/f  with  f = 1 + e^x .

   =  x  -  log( 1 + e^x )  +  c

   CHECK:  1 - e^x/(1+e^x)  =  ( 1 + e^x - e^x )/(1+e^x) = 1/(1+e^x)   correct
```

---

### Q35
```
              dx
   INT ----------------  =  ?
       x ( x^5 + 1 )

   (a)  (1/5) log | x^5 / ( x^5 + 1 ) | + c
   (b)  (1/5) log | ( x^5 + 1 ) / x^5 | + c
   (c)  log | x / ( x^5 + 1 ) | + c
   (d)  (1/5) Tan^-1 ( x^5 ) + c
```
**ANSWER: (a)**
```
   Multiply top and bottom by x^4 :

           x^4 dx
   = INT -----------------      put  t = x^5 ,  dt = 5 x^4 dx
         x^5 ( x^5 + 1 )

        1            dt            1              1        1
   =   --- INT ------------- =    --- INT [    -----  -  ------- ] dt
        5        t ( t + 1 )       5              t        t+1

        1          |    t    |          1          |    x^5    |
   =   --- log     | ------- |  + c =  --- log     | --------- |  +  c
        5          |  t + 1  |          5          |  x^5 + 1  |
```
> **GENERAL RESULT worth memorising:**
> `INT dx / ( x ( x^n + 1 ) ) = (1/n) log | x^n / ( x^n + 1 ) | + c`

---

# ===============================================================
# SPEED RULES FOR THE EXAM HALL
# ===============================================================

```
  +-----------------------------------+------------------------------------+
  |  IF YOU SEE THIS ...              |  DO THIS IMMEDIATELY               |
  +-----------------------------------+------------------------------------+
  |  Four options that all look like  |  DIFFERENTIATE THE OPTIONS.        |
  |  integrals of the question        |  Do not integrate anything.        |
  |                                   |                                    |
  |  Options differ only by a number  |  Differentiate ONE option, then    |
  |  in front (1/2 , 1/3 , 2 ...)     |  fix the constant. Skip the rest.  |
  |                                   |                                    |
  |  Top is exactly d/dx (bottom)     |  answer is  log | bottom |         |
  |                                   |                                    |
  |  Bracket to a power + its         |  answer is bracket^(n+1)/(n+1)     |
  |  derivative outside               |                                    |
  |                                   |                                    |
  |  e^x times a two-piece bracket    |  is one piece the derivative of    |
  |                                   |  the other? -> e^x f(x). One line. |
  |                                   |                                    |
  |  x^2 with a coefficient on the    |  take the coefficient out of the   |
  |  bottom (4x^2 + 9)                |  WHOLE quadratic first             |
  |                                   |                                    |
  |  Full quadratic, no x on top      |  COMPLETE THE SQUARE               |
  |                                   |                                    |
  |  Minus sign in front of x^2       |  answer will be a Sin^-1           |
  |  under a root                     |                                    |
  |                                   |                                    |
  |  Plus sign under the root         |  answer will be a LOG              |
  |                                   |                                    |
  |  (px + q) on top of a quadratic   |  split px+q = A(2ax+b) + B         |
  |                                   |                                    |
  |  1/(a + b cos x) , 1/(a + b sin x)|  t = tan(x/2)                      |
  |  a > b -> Tan^-1 ,  a < b -> log  |                                    |
  |                                   |                                    |
  |  Bottom factorises into linears   |  COVER-UP RULE, 15 seconds         |
  |                                   |                                    |
  |  Product of sines / cosines       |  transformation formula FIRST      |
  |                                   |                                    |
  |  Even powers of sin or cos        |  (1 ± cos 2x)/2                    |
  |                                   |                                    |
  |  Odd power of sin or cos          |  peel one factor, substitute       |
  |                                   |                                    |
  |  An option with NO + c            |  it can still be right - EAPCET    |
  |                                   |  often drops the + c. Don't panic. |
  |                                   |                                    |
  |  Stuck, and it's EAPCET           |  GUESS - there is no negative      |
  |                                   |  marking                           |
  +-----------------------------------+------------------------------------+
```

---

# THE DIFFERENTIATE-THE-OPTIONS METHOD, IN FULL

This is the single most valuable technique in the whole of MCQ integration.

```
  STEP 1   Do NOT read the integral as a problem to solve.
           Read it as an ANSWER you have to produce.

  STEP 2   Pick the option that looks structurally right
           (log if the bottom was a quadratic that factorises,
            Tan^-1 if it was a sum of squares, etc.)

  STEP 3   Differentiate it. Use only the chain rule and quotient rule.

  STEP 4   If you get the question back, tick it and move on.
           If you get the question back TIMES A NUMBER k,
           the answer is that option DIVIDED by k -
           and one of the other options will be exactly that.

  STEP 5   Never spend more than 60 seconds. EAPCET has 80 questions
           in 180 minutes: that is 135 seconds each, and Integration
           questions should take you HALF of that so you can bank
           time for coordinate geometry.
```

## Worked demonstration of the method

```
             dx
   INT ------------- = ?      (a) Tan^-1(x+1)   (b) (1/2)Tan^-1((x+1)/2)
       x^2 + 2x + 2           (c) log|x^2+2x+2| (d) Sin^-1(x+1)

   Differentiate (a):

     d                        1                       1
    --- Tan^-1 ( x + 1 ) = ------------- . 1 =  ---------------
     dx                     1 + (x+1)^2          x^2 + 2x + 2

   That IS the question.  ANSWER: (a).   Total time: 12 seconds.
   No integration was performed at any point.
```

## When the trick does NOT help

```
  - When the options are "none of these" style.
  - When every option contains an unevaluated integral.
  - When differentiating is genuinely harder than integrating
    (rare - usually only for nested inverse trig).

  In those three cases, fall back on the pattern table above.
```
