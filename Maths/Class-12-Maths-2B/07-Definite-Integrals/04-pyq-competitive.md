# Definite Integrals — JEE Main / AP EAPCET / TG EAPCET Questions

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

**How many questions come from Definite Integrals:**

```
  AP EAPCET  (Maths, 80 questions)  ->  4 to 6
  TG EAPCET  (Maths, 80 questions)  ->  4 to 6
  JEE Main   (Maths, 25 questions)  ->  2 to 3
                                        (definite integrals and areas
                                         together are one of the most
                                         reliable JEE topics)
```

```
  +------------------------------------------------------------------+
  |  WHY THIS IS THE BEST MCQ CHAPTER YOU WILL EVER MEET:            |
  |                                                                  |
  |  The answer is a NUMBER. So you can:                             |
  |                                                                  |
  |   - estimate it roughly (average height x width) and eliminate   |
  |   - test the special cases (put a = 1, n = 1, and check)         |
  |   - use a property and finish in one line instead of five        |
  |                                                                  |
  |  Half of these questions do not need any integration at all.     |
  +------------------------------------------------------------------+
```

> Questions are grouped by PATTERN, not by year, because the pattern is what
> repeats. Verify with official papers before the exam.

---

# PATTERN 1 — DIRECT EVALUATION AND SIMPLE SUBSTITUTION

Pure speed. Under 30 seconds each.

### Q1
```
   INT from 0 to 1 of dx / ( 1 + x^2 )  =  ?

   (a)  pi/2         (b)  pi/4         (c)  pi/3         (d)  log 2
```
**ANSWER: (b)**
```
   [ Tan^-1 x ] from 0 to 1  =  Tan^-1 1 - Tan^-1 0  =  pi/4 - 0  =  pi/4
```
> **SHORTCUT:** `1/(1+x^2)` with limits 0 to 1 gives pi/4. This appears in a
> quarter of all definite-integral MCQs. Know it on sight.

---

### Q2
```
   INT from 0 to 1 of x / ( 1 + x^2 ) dx  =  ?

   (a)  log 2        (b)  (1/2) log 2   (c)  pi/4         (d)  1/2
```
**ANSWER: (b)**
```
   The top is HALF the derivative of the bottom.

   =  (1/2) [ log( 1 + x^2 ) ] from 0 to 1  =  (1/2)( log 2 - log 1 )
   =  (1/2) log 2
```
> **SHORTCUT:** Q1 has no x on top -> Tan^-1. Q2 has an x on top -> log.
> One little x changes the whole answer. Look at the top first.

---

### Q3
```
   INT from 0 to 1 of e^x / ( 1 + e^x ) dx  =  ?

   (a)  log( 1 + e )      (b)  log( ( 1 + e )/2 )
   (c)  e - 1             (d)  (1/2) log( 1 + e )
```
**ANSWER: (b)**
```
   INT f'/f = log|f| , with f = 1 + e^x .

   =  [ log( 1 + e^x ) ] from 0 to 1  =  log( 1 + e ) - log 2
                                      =  log( (1+e)/2 )
```

---

### Q4
```
   INT from 1 to 4 of dx / sqrt( x )  =  ?

   (a)  1            (b)  2            (c)  3            (d)  4
```
**ANSWER: (b)**
```
   [ 2 sqrt x ] from 1 to 4  =  2(2) - 2(1)  =  4 - 2  =  2
```

---

### Q5
```
   INT from 0 to pi/4 of tan x dx  =  ?

   (a)  log 2        (b)  (1/2) log 2   (c)  log( sqrt2 )  (d)  both (b),(c)
```
**ANSWER: (d)**  — (b) and (c) are the same number.
```
   [ log | sec x | ] from 0 to pi/4  =  log sqrt2  -  log 1
                                     =  log 2^(1/2)  =  (1/2) log 2
```
> In a real paper only one of these would be listed. The point: recognise
> that `log sqrt2` and `(1/2) log 2` are the same, or you will reject the
> correct option.

---

### Q6
```
   INT from 0 to 2 of dx / ( 4 + x^2 )  =  ?

   (a)  pi/4         (b)  pi/8         (c)  pi/2         (d)  pi/16
```
**ANSWER: (b)**
```
   INT dx/(a^2 + x^2) = (1/a) Tan^-1( x/a ) ,  a = 2 .

   =  (1/2)[ Tan^-1( x/2 ) ] from 0 to 2  =  (1/2)( Tan^-1 1 - 0 )
   =  (1/2)( pi/4 )  =  pi/8
```
> **SHORTCUT:** `INT 0 to a of dx/(a^2 + x^2) = pi/(4a)` — always. Here
> a = 2 gives pi/8 straight away.

---

### Q7
```
   INT from 0 to 1 of x e^(x^2) dx  =  ?

   (a)  e - 1        (b)  ( e - 1 )/2   (c)  e/2         (d)  ( e + 1 )/2
```
**ANSWER: (b)**
```
   t = x^2 , limits 0 to 1 :   (1/2) INT 0 to 1 e^t dt = (1/2)( e - 1 )
```

---

# PATTERN 2 — EVEN AND ODD (limits -a to a)

**Look at the limits FIRST.** If they are `-a to a`, test `f(-x)` before you
read the rest of the question.

### Q8
```
   INT from -1 to 1 of x^15 cos^4 x dx  =  ?

   (a)  0            (b)  2/16         (c)  1            (d)  cannot be found
```
**ANSWER: (a)**
```
   x^15 is ODD, cos^4 x is EVEN, so the product is ODD.
   Symmetric limits + odd function  =  0 .
```
> **SHORTCUT:** you never had to look at the cos^4 at all. The high power on
> x is bait to make you start integrating. Don't.

---

### Q9
```
   INT from -pi/4 to pi/4 of x^3 sin^4 x dx  =  ?

   (a)  0            (b)  pi^4/64      (c)  1/4          (d)  2
```
**ANSWER: (a)**   ODD (odd x even). Zero.

---

### Q10
```
   INT from -2 to 2 of ( x^2 + 1 ) dx  =  ?

   (a)  0            (b)  14/3         (c)  28/3         (d)  16/3
```
**ANSWER: (c)**
```
   x^2 + 1 is EVEN , so it DOUBLES (it does NOT vanish).

           [       x^3 ] 2         (      8 )        14      28
   =  2    [  x + ---- ]      = 2  ( 2 +  --- )  = 2 --- =  ----
           [        3  ] 0         (      3 )         3       3
```
> **TRAP:** option (a) is there for everyone who sees symmetric limits and
> writes 0 by reflex. EVEN doubles, ODD dies. Test first.

---

### Q11
```
   INT from -1 to 1 of | x | dx  =  ?

   (a)  0            (b)  1/2          (c)  1            (d)  2
```
**ANSWER: (c)**
```
   | -x | = | x | , so |x| is EVEN .

   =  2 INT from 0 to 1 of x dx  =  2 ( 1/2 )  =  1
```
> **SHORTCUT:** geometrically this is two triangles, each of base 1 and
> height 1: 1/2 + 1/2 = 1. No integration needed.

---

### Q12
```
   INT from -pi/2 to pi/2 of ( sin^2 x + x^5 ) dx  =  ?

   (a)  pi/2         (b)  pi/4         (c)  0            (d)  pi
```
**ANSWER: (a)**
```
   x^5      : ODD  -> 0
   sin^2 x  : EVEN -> 2 INT 0 to pi/2 sin^2 x dx = 2 ( pi/4 ) = pi/2
```

---

# PATTERN 3 — THE REFLECTION PROPERTIES (P3 and P4)

If the answer options contain `pi/4` and the limits are `0 to pi/2`,
this is almost certainly the pattern.

### Q13
```
   INT from 0 to pi/2 of dx / ( 1 + tan^3 x )  =  ?

   (a)  pi/2         (b)  pi/4         (c)  0            (d)  1
```
**ANSWER: (b)**
```
        1              cos^3 x
   ------------  =  -----------------
   1 + tan^3 x      cos^3 x + sin^3 x

   Replacing x by pi/2 - x swaps sin and cos, so I also equals the same
   integral with sin^3 on top. Adding gives  2 I = INT 0 to pi/2 of 1 dx
   = pi/2 , hence  I = pi/4 .
```
> **SHORTCUT — the "half the interval" rule:** any integral of the form
> `INT 0 to a of g(x)/( g(x) + g(a - x) ) dx` equals **a/2**.
> With a = pi/2 the answer is pi/4. Full stop. The power 3 is irrelevant.

---

### Q14
```
   INT from 0 to pi/2 of sqrt(tan x) / ( sqrt(tan x) + sqrt(cot x) ) dx  =  ?

   (a)  pi/4         (b)  pi/2         (c)  1            (d)  pi
```
**ANSWER: (a)**   Same "half the interval" rule. pi/2 divided by 2 = pi/4.

---

### Q15
```
   INT from 0 to pi of x sin x / ( 1 + cos^2 x ) dx  =  ?

   (a)  pi^2/2       (b)  pi^2/4       (c)  pi/4         (d)  pi^2
```
**ANSWER: (b)**
```
   P3:  2 I  =  pi INT 0 to pi of sinx/(1+cos^2x) dx

   t = cos x :   INT -1 to 1 of dt/(1+t^2)  =  pi/2

   2 I = pi ( pi/2 )  ->  I = pi^2/4
```
> **SHORTCUT:** the "x in front" rule. If `f(pi - x) = f(x)`, then
> `INT 0 to pi of x f(x) dx = (pi/2) INT 0 to pi of f(x) dx`.
> Replace the x by pi/2 and pull it out.

---

### Q16
```
   INT from 0 to pi/2 of log( tan x ) dx  =  ?

   (a)  0            (b)  pi log 2     (c)  -(pi/2) log 2   (d)  1
```
**ANSWER: (a)**
```
   By P3:  log tan( pi/2 - x ) = log( cot x ) = - log( tan x )

   So   I = - I   ->   2 I = 0   ->   I = 0
```

---

### Q17
```
   INT from 0 to 1 of log ( 1/x  -  1 ) dx  =  ?

   (a)  0            (b)  1            (c)  log 2        (d)  -1
```
**ANSWER: (a)**
```
   1/x - 1 = ( 1 - x )/x .   By P3 (a = 1), replace x by 1 - x :

        log( x/(1-x) )  =  - log( (1-x)/x )

   So   I = - I    ->   I = 0
```

---

### Q18
```
   INT from 0 to pi of x / ( 1 + cos^2 x ) dx  =  ?

   (a)  pi^2 / 4              (b)  pi^2 / ( 2 sqrt 2 )
   (c)  pi / sqrt 2           (d)  pi^2 / 2
```
**ANSWER: (b)**
```
   "x in front" rule:   I = ( pi/2 ) INT 0 to pi of dx/(1 + cos^2 x)

   cos^2( pi - x ) = cos^2 x , so by P5 that integral doubles:
        = 2 INT 0 to pi/2 of dx/(1 + cos^2 x)

   Divide top and bottom by cos^2 x :  sec^2 x / ( sec^2 x + 1 )
                                     = sec^2 x / ( 2 + tan^2 x )

   t = tan x , limits 0 to infinity :

        INT 0 to inf of dt/(2 + t^2) = (1/sqrt2)[ Tan^-1( t/sqrt2 ) ]
                                     = (1/sqrt2)( pi/2 )

   So   INT 0 to pi dx/(1+cos^2x) = 2 x pi/(2 sqrt2) = pi/sqrt2

        I  =  ( pi/2 )( pi/sqrt2 )  =  pi^2 / ( 2 sqrt 2 )
```
> **SHORTCUT for eliminating:** the answer must have `pi^2` in it (there is
> an x in front, which carries one power of pi, and the integral carries
> another). That kills option (c) immediately.

---

# PATTERN 4 — THE 0 TO 2a TEST

### Q19
```
   INT from 0 to pi of cos^5 x dx  =  ?

   (a)  8/15         (b)  16/15        (c)  0            (d)  2/5
```
**ANSWER: (c)**
```
   2a = pi , so a = pi/2 .
   f( pi - x ) = cos^5( pi - x ) = ( - cos x )^5 = - cos^5 x

   Opposite sign  ->  the integral is 0 .
```
> **SHORTCUT:** `INT 0 to pi of cos^(odd) x dx = 0` **always**.
> `INT 0 to pi of sin^(anything) x dx` is never 0 (sin stays positive there).

---

### Q20
```
   INT from 0 to pi of sin^4 x dx  =  ?

   (a)  3 pi / 16    (b)  3 pi / 8     (c)  3 pi / 4     (d)  pi / 2
```
**ANSWER: (b)**
```
   sin( pi - x ) = sin x , so the integral DOUBLES :

        = 2 INT 0 to pi/2 of sin^4 x dx  =  2 ( 3 pi / 16 )  =  3 pi / 8
```
> **TRAP:** option (a) is the Wallis value itself. You must remember to
> double it for the limits 0 to pi.

---

### Q21
```
   INT from 0 to pi of sin^7 x dx  =  ?

   (a)  16/35        (b)  32/35        (c)  0            (d)  8/35
```
**ANSWER: (b)**
```
   = 2 x ( Wallis for n = 7 ) = 2 x ( 16/35 ) = 32/35
```

---

# PATTERN 5 — WALLIS

The single most predictable MCQ in the whole of Maths IIB.

### Q22
```
   INT from 0 to pi/2 of sin^4 x dx  =  ?

   (a)  3 pi / 16    (b)  3 pi / 8     (c)  8/15         (d)  pi / 4
```
**ANSWER: (a)**
```
   n = 4 is EVEN , so:   (3/4)(1/2)(pi/2)  =  3 pi / 16
```
> **SHORTCUT — eliminate in two seconds:** n is EVEN, so the answer MUST
> contain pi. Option (c) has no pi — gone. Option (d) is the n = 2 value.

---

### Q23
```
   INT from 0 to pi/2 of cos^9 x dx  =  ?

   (a)  128/315      (b)  16/35        (c)  35 pi/256    (d)  8/15
```
**ANSWER: (a)**
```
   n = 9 is ODD , so NO pi :

        ( 8/9 )( 6/7 )( 4/5 )( 2/3 )  =  384 / 945  =  128 / 315
```
> **SHORTCUT:** n odd -> no pi -> option (c) is gone instantly. Then the
> answer must be SMALLER than the n = 7 value 16/35 = 0.457, and
> 128/315 = 0.406 is the only one that fits.

---

### Q24
```
   INT from 0 to pi/2 of sin^6 x cos^2 x dx  =  ?

   (a)  5 pi / 256   (b)  5 pi / 32    (c)  1/24         (d)  pi / 16
```
**ANSWER: (a)**
```
   m = 6 , n = 2 , m + n = 8 . BOTH even, so the pi/2 tail applies.

        ( 5 x 3 x 1 ) x ( 1 )      pi        15      pi       5 pi
   =   -----------------------  x ----  =   ----- x ----  =  -------
        ( 8 x 6 x 4 x 2 )           2        384      2        256
```

---

### Q25
```
   INT from 0 to pi/2 of sin^3 x cos^5 x dx  =  ?

   (a)  1/24         (b)  pi/24        (c)  8/315        (d)  2/15
```
**ANSWER: (a)**
```
   m = 3 , n = 5 , m + n = 8 .  Not both even  ->  NO pi .

        ( 2 ) x ( 4 x 2 )        16         1
   =   -------------------  =  ------  =  ----
        8 x 6 x 4 x 2           384        24
```
**CHECK by substitution:** with t = cos x,
`INT 0 to 1 of (1 - t^2) t^5 dt = 1/6 - 1/8 = 1/24`. Correct.

> **SHORTCUT:** one of the powers is ODD, so there is no pi. Option (b) dies
> without any arithmetic.

---

### Q26
```
   INT from 0 to 2pi of sin^2 x dx  =  ?

   (a)  0            (b)  pi/2         (c)  pi           (d)  2 pi
```
**ANSWER: (c)**
```
   sin^2 x has period pi , and 2pi = 2 periods:

        = 2 INT 0 to pi of sin^2 x dx = 2 ( pi/2 ) = pi

   Or : average value of sin^2 over a whole number of periods is 1/2 ,
        so the integral is (1/2) x ( length 2pi ) = pi .
```
> **SHORTCUT — the average-value trick:** over any whole number of periods,
> `sin^2` and `cos^2` both average exactly **1/2**. So
> `INT over length L = L/2`. This answers a whole family of questions in
> five seconds.

---

# PATTERN 6 — A LIMIT THAT IS SECRETLY AN INTEGRAL

### Q27
```
           [    n         n              n     ]
      lim  [ ------- + ------- + ... + -------- ]   =  ?
     n->inf[ n^2+1^2   n^2+2^2         n^2+n^2  ]

   (a)  pi/2         (b)  pi/4         (c)  log 2        (d)  1
```
**ANSWER: (b)**
```
   General term:   n/(n^2 + r^2) .  Divide top and bottom by n^2 :

        ( 1/n ) / ( 1 + (r/n)^2 )

   So the sum is  (1/n) SUM f(r/n)  with  f(x) = 1/(1 + x^2) ,
   and r/n runs from 0 to 1 .

        LIMIT  =  INT 0 to 1 of dx/(1 + x^2)  =  pi/4
```

---

### Q28
```
           [   1        1                1    ]
      lim  [ ----- + ------- + ... + --------- ]   =  ?
     n->inf[ n + 1    n + 2           n + n    ]

   (a)  log 2        (b)  1            (c)  pi/4         (d)  1/2
```
**ANSWER: (a)**
```
        1              1/n
      ------  =   -------------
      n + r        1 + ( r/n )

        LIMIT  =  INT 0 to 1 of dx/(1 + x)  =  [ log(1+x) ] = log 2
```

---

### Q29
```
           1  [      pi         2pi              n pi ]
      lim  -- [ sin ---- + sin ------ + ... + sin ----- ]   =  ?
     n->inf n [      n           n                 n   ]

   (a)  1/pi         (b)  2/pi         (c)  pi/2         (d)  0
```
**ANSWER: (b)**
```
        = INT 0 to 1 of sin( pi x ) dx

              [   cos( pi x ) ] 1        1                    2
        =     [ - ----------- ]     =  ---- ( 1 + 1 )    =  -----
              [       pi      ] 0       pi                    pi
```

---

### Q30
```
           1^2 + 2^2 + 3^2 + ... + n^2
      lim  ----------------------------   =  ?
     n->inf            n^3

   (a)  1/2          (b)  1/3          (c)  1/6          (d)  1
```
**ANSWER: (b)**
```
   Either use the sum formula  n(n+1)(2n+1)/6 , whose leading term is
   2n^3/6 = n^3/3 , giving 1/3 .

   Or read it as  (1/n) SUM (r/n)^2  =  INT 0 to 1 of x^2 dx  =  1/3 .
```

---

# PATTERN 7 — AREAS

### Q31
```
   The area enclosed between  y = x^2  and  y = x  is

   (a)  1/2          (b)  1/3          (c)  1/6          (d)  1
```
**ANSWER: (c)**
```
   Intersections:  x^2 = x  ->  x = 0 , 1 .
   On ( 0 , 1 ) the LINE is above the parabola.

        A = INT 0 to 1 of ( x - x^2 ) dx = 1/2 - 1/3 = 1/6
```
> **SHORTCUT:** for a parabola and a chord, the area is
> `| a | ( x2 - x1 )^3 / 6` where `a` is the coefficient of x^2 in
> `(curve - line)`. Here a = 1 and the roots are 0 and 1, so
> `1 x 1^3 / 6 = 1/6`. Instant.

---

### Q32
```
   The area of the ellipse  x^2/25  +  y^2/16  =  1  is

   (a)  20 pi        (b)  40 pi        (c)  9 pi         (d)  400 pi
```
**ANSWER: (a)**
```
   a = 5 , b = 4 ,  Area = pi a b = 20 pi
```
> **SHORTCUT:** do NOT integrate. `pi a b`, with a and b the SQUARE ROOTS of
> the denominators. Option (d) is the trap for people who use 25 x 16.

---

### Q33
```
   The AREA bounded by  y = x^3 , the x-axis , x = -2 and x = 2  is

   (a)  0            (b)  4            (c)  8            (d)  16
```
**ANSWER: (c)**
```
   x^3 is ODD, so the INTEGRAL is 0 — but the question says AREA.
   Split at x = 0 and take moduli:

        2 x INT 0 to 2 of x^3 dx = 2 [ x^4/4 ] = 2 ( 4 ) = 8
```
> **TRAP:** option (a) is there for everyone who does not read the word
> "area". Integral 0, area 8. Read the verb in the question.

---

### Q34
```
   The area under  y = e^x  from  x = 0  to  x = 1  is

   (a)  e            (b)  e - 1        (c)  1            (d)  e + 1
```
**ANSWER: (b)**
```
   [ e^x ] from 0 to 1  =  e - 1   ( = 1.718 )
```
> **SHORTCUT:** estimate. The curve runs from height 1 to height e = 2.72
> over width 1, so the area is between 1 and 2.72 and nearer the middle.
> Only (b) = 1.718 fits.

---

### Q35
```
   The area of the region bounded by  y^2 = 4x  and  x = 4  is

   (a)  32/3         (b)  64/3         (c)  16/3         (d)  128/3
```
**ANSWER: (b)**
```
   Upper half  y = 2 sqrt x , double it by symmetry :

        A = 2 INT 0 to 4 of 2 sqrt(x) dx = 4 [ (2/3) x^(3/2) ] from 0 to 4

          = ( 8/3 )( 8 )  =  64/3
```
> **SHORTCUT:** the parabolic segment is two thirds of its bounding
> rectangle. The rectangle is 4 wide and 8 tall (y runs -4 to 4... check:
> at x = 4, y^2 = 16 so y = +-4, height 8). (2/3)(4)(8) = 64/3. Instant.

---

# PATTERN 8 — MODULUS AND GREATEST INTEGER (split, do not integrate)

### Q36
```
   INT from 0 to 3 of | x - 2 | dx  =  ?

   (a)  5/2          (b)  3/2          (c)  2            (d)  9/2
```
**ANSWER: (a)**
```
   Split at x = 2 .

   INT 0 to 2 ( 2 - x ) dx  =  [ 2x - x^2/2 ] = 4 - 2  =  2
   INT 2 to 3 ( x - 2 ) dx  =  [ x^2/2 - 2x ] = ( 4.5 - 6 ) - ( 2 - 4 )
                                              =  -1.5 + 2   =  1/2

   TOTAL  =  2 + 1/2  =  5/2
```
> **SHORTCUT:** two triangles. Left one: base 2, height 2 -> area 2.
> Right one: base 1, height 1 -> area 1/2. Total 5/2. No integration at all.

---

### Q37
```
   INT from 0 to 4 of | x - 2 | dx  =  ?

   (a)  2            (b)  4            (c)  6            (d)  8
```
**ANSWER: (b)**
```
   Two triangles, each base 2 and height 2:  2 + 2  =  4 .
```

---

### Q38
```
   INT from 0 to 2 of [ x ] dx , where [ x ] is the greatest integer
   function, is

   (a)  0            (b)  1            (c)  2            (d)  3
```
**ANSWER: (b)**
```
   [ x ] = 0  on  [ 0 , 1 )
   [ x ] = 1  on  [ 1 , 2 )

   Area = ( 0 )( 1 )  +  ( 1 )( 1 )  =  1
```
> **SHORTCUT:** a step function integrates to a sum of rectangles. Draw the
> steps, add the boxes. Never try to integrate `[x]` symbolically.

---

# PATTERN 9 — DIFFERENTIATING AN INTEGRAL (mostly JEE)

### Q39
```
       d   [   x^2                 ]
      --- [ INT     sqrt(1 + t^3) dt ]   =  ?
       dx  [   0                    ]

   (a)  sqrt( 1 + x^3 )              (b)  2x sqrt( 1 + x^6 )
   (c)  sqrt( 1 + x^6 )              (d)  2x sqrt( 1 + x^3 )
```
**ANSWER: (b)**
```
   Leibniz rule:   d/dx INT 0 to u(x) of f(t) dt  =  f( u(x) ) . u'(x)

   Here  u = x^2 , u' = 2x , and  f(u) = sqrt( 1 + (x^2)^3 ) = sqrt(1 + x^6)

   ANSWER  =  2x sqrt( 1 + x^6 )
```
> **TRAP:** forgetting the `u'(x)` chain-rule factor gives option (c).
> Forgetting to substitute `t = x^2` gives option (a).

---

### Q40
```
   If  INT from 0 to a of 3 x^2 dx  =  8 , then  a  =  ?

   (a)  1            (b)  2            (c)  3            (d)  4
```
**ANSWER: (b)**
```
   [ x^3 ] from 0 to a  =  a^3  =  8   ->   a = 2
```
> **SHORTCUT:** in "find the limit" questions, just try the options. Putting
> a = 2 gives 8 in one second. Do not solve — substitute.

---

# SPEED RULES FOR THE EXAM HALL

```
  +----------------------------------+---------------------------------+
  |  IF YOU SEE THIS ...             |  DO THIS IMMEDIATELY            |
  +----------------------------------+---------------------------------+
  |  Limits  -a  to  a               |  Test f(-x).                    |
  |                                  |  ODD -> 0. EVEN -> 2 INT 0 to a.|
  |                                  |  Do NOT integrate first.        |
  +----------------------------------+---------------------------------+
  |  Limits  0  to  2a               |  Test f(2a - x).                |
  |                                  |  Same -> double. Opposite -> 0. |
  +----------------------------------+---------------------------------+
  |  g(x) / ( g(x) + g(a - x) )      |  Answer is  a / 2 .             |
  |  on 0 to a                       |  With 0 to pi/2 that is pi/4.   |
  +----------------------------------+---------------------------------+
  |  A lone  x  in front, limits     |  Replace the x by  pi/2  and    |
  |  0 to pi, rest unchanged by      |  pull it out of the integral.   |
  |  x -> pi - x                     |                                 |
  +----------------------------------+---------------------------------+
  |  sin^n or cos^n on 0 to pi/2     |  WALLIS. Even n -> has pi.      |
  |                                  |  Odd n -> no pi. Eliminate half |
  |                                  |  the options before computing.  |
  +----------------------------------+---------------------------------+
  |  sin^m cos^n on 0 to pi/2        |  Mixed Wallis. pi/2 tail ONLY   |
  |                                  |  if BOTH m and n are even.      |
  +----------------------------------+---------------------------------+
  |  sin^(odd) or cos^(odd) on       |  cos^(odd) on 0 to pi  =  0 .   |
  |  0 to pi                         |  sin^n on 0 to pi = 2 x Wallis. |
  +----------------------------------+---------------------------------+
  |  sin^2 or cos^2 over a whole     |  Average value is 1/2 , so the  |
  |  number of periods               |  answer is  (length) / 2 .      |
  +----------------------------------+---------------------------------+
  |  A modulus, or [x], or a         |  SPLIT at the break point and   |
  |  piecewise function              |  add rectangles/triangles.      |
  |                                  |  Draw it — do not integrate.    |
  +----------------------------------+---------------------------------+
  |  A big sum with n -> infinity    |  Force out 1/n , replace r/n    |
  |                                  |  by x , integrate from 0 to 1.  |
  +----------------------------------+---------------------------------+
  |  "AREA" (not "integral")         |  Answer must be POSITIVE.       |
  |                                  |  Cross out any 0 or negative    |
  |                                  |  option at once.                |
  +----------------------------------+---------------------------------+
  |  "Area of the ellipse"           |  pi a b . Never integrate.      |
  |  "Area of the circle"            |  pi a^2 .                       |
  +----------------------------------+---------------------------------+
  |  A parabola and a chord/line     |  Area = |a| (x2 - x1)^3 / 6     |
  |                                  |  where a is the x^2 coefficient |
  |                                  |  of (curve minus line).         |
  +----------------------------------+---------------------------------+
  |  A parabolic segment             |  It is 2/3 of its bounding      |
  |                                  |  rectangle. Use it to check.    |
  +----------------------------------+---------------------------------+
  |  d/dx of an integral with a      |  Leibniz: f( u(x) ) x u'(x) .   |
  |  variable upper limit u(x)       |  Do NOT forget u'(x) .          |
  +----------------------------------+---------------------------------+
  |  "Find a such that INT ... = k"  |  SUBSTITUTE THE OPTIONS.        |
  |                                  |  Do not solve the equation.     |
  +----------------------------------+---------------------------------+
  |  You are completely stuck        |  ESTIMATE:                      |
  |                                  |  answer ~ (average height) x    |
  |                                  |  (width). Then pick the closest |
  |                                  |  option. On EAPCET this is      |
  |                                  |  free — there is no negative    |
  |                                  |  marking.                       |
  +----------------------------------+---------------------------------+
```

```
  +------------------------------------------------------------------+
  |  THE 20-SECOND OPENING MOVE, EVERY TIME:                         |
  |                                                                  |
  |     1.  Read the LIMITS before the function.                     |
  |     2.  Ask: does a property kill this?                          |
  |     3.  Only if the answer is no, start integrating.             |
  |                                                                  |
  |  Students who integrate first run out of time. Students who      |
  |  look at the limits first finish this chapter in half the time   |
  |  and get more of it right.                                       |
  +------------------------------------------------------------------+
```
