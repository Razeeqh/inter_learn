# Hyperbolic Functions — AP Board Previous-Year Questions

**Board:** Board of Intermediate Education, Andhra Pradesh (BIEAP)
**Paper:** Maths IA · **Chapter 9 — Hyperbolic Functions**

> **About the year tags:** BIEAP recycles the same questions across many sessions,
> often word for word with only the numbers swapped. So everything below is grouped
> by **how often it appears**, not tagged to a single year. Before your exam,
> cross-check against the official question papers at **bie.ap.gov.in**.

**Where this chapter appears in the Maths IA paper:**

```
  Section A  (2 marks each, answer ALL 10)   ->  usually one of Q5 - Q7,
                                                 in the trigonometry block.
                                                 THIS IS THE RELIABLE ONE.
                                                 It appears in most sessions.

  Section B  (4 marks each, answer any 5)    ->  sometimes appears as one of
                                                 Q14 - Q17, normally a
                                                 "prove the log form" or a
                                                 triple-angle proof.

  Section C  (7 marks each, answer any 5)    ->  does NOT appear.
```

> **Honest scope note — please read this properly.**
>
> Chapter 9 is a **short chapter**. In BIEAP Maths IA the seven-mark Section C
> slots are filled by Functions, Mathematical Induction, Matrices, Addition of
> Vectors, Product of Vectors, Trigonometric Ratios and Transformations, and
> Properties of Triangles. **Hyperbolic Functions has not been a standalone
> 7-mark question.**
>
> What it reliably gives you is **one Section A question worth 2 marks in most
> sessions**, and **fairly often a Section B question worth 4 marks**. Because
> Section A has **no choice** — you must answer all ten — a guaranteed 2 marks
> there is worth more to a weak student than a 7-mark question they cannot begin.
>
> **This is the cheapest 2 marks in the whole paper.** Two hours of work.
> Realistic return: **2 marks guaranteed, 4 to 6 marks likely.**
>
> The Section C items in this file are written as **revision-grade** questions:
> genuine, exam-standard, and they string together everything the 2-mark and
> 4-mark questions test. Do them last, after Sections A and B are automatic.

---

# ===============================================================
# SECTION A — VERY SHORT ANSWER (2 marks)
# These are your GUARANTEED marks. Answer all 10 in the paper.
# ===============================================================

## Topic: given one value, find the double angle (THE most asked)

### Q A1
If `sinh x = 3`, find `cosh 2x` and `sinh 2x`.

**ANSWER:**
```
  Given sinh x , so choose the sinh form of cosh 2x :

     cosh 2x = 1 + 2 sinh^2 x = 1 + 2(9) = 19

  For sinh 2x we need cosh x :
     cosh^2 x = 1 + sinh^2 x = 1 + 9 = 10
     cosh x = sqrt(10)         (POSITIVE root, since cosh x >= 1)

     sinh 2x = 2 sinh x cosh x = 2(3)(sqrt10) = 6 sqrt10

  CHECK: cosh^2 2x - sinh^2 2x = 361 - 36(10) = 361 - 360 = 1   CORRECT
```
**`cosh 2x = 19` , `sinh 2x = 6 sqrt(10)`**

---

### Q A2
If `cosh x = 5/2`, find `cosh 2x` and `sinh 2x`.

**ANSWER:**
```
  Given cosh , so choose the cosh form :

     cosh 2x = 2 cosh^2 x - 1 = 2(25/4) - 1 = 25/2 - 1 = 23/2

     sinh^2 x = cosh^2 x - 1 = 25/4 - 1 = 21/4
     sinh x = sqrt(21)/2        (taking x > 0)

     sinh 2x = 2 sinh x cosh x = 2 (sqrt21/2)(5/2) = 5 sqrt21 / 2

  CHECK: (23/2)^2 - (5 sqrt21/2)^2 = 529/4 - 525/4 = 1        CORRECT
```
**`cosh 2x = 23/2` , `sinh 2x = 5 sqrt(21)/2`**

---

### Q A3
If `tanh x = 1/2`, find `cosh 2x` and `sinh 2x`.

**ANSWER:**
```
  Given tanh , so use the tanh forms :

              1 + tanh^2 x     1 + 1/4     5/4      5
  cosh 2x  =  ------------  =  --------  = ---  =  ---
              1 - tanh^2 x     1 - 1/4     3/4      3

                2 tanh x         2(1/2)       1        4
  sinh 2x  =  ------------  =  ---------  =  ---  =  ---
              1 - tanh^2 x       3/4         3/4       3

  CHECK: 25/9 - 16/9 = 9/9 = 1                               CORRECT
```
**`cosh 2x = 5/3` , `sinh 2x = 4/3`**

---

### Q A4
If `sinh x = 3/4`, find `cosh 2x` and `sinh 2x`.

**ANSWER:**
```
  cosh 2x = 1 + 2 sinh^2 x = 1 + 2(9/16) = 1 + 9/8 = 17/8

  cosh^2 x = 1 + 9/16 = 25/16  =>  cosh x = 5/4

  sinh 2x = 2 (3/4)(5/4) = 30/16 = 15/8

  CHECK: (17/8)^2 - (15/8)^2 = (289 - 225)/64 = 64/64 = 1     CORRECT
```
**`cosh 2x = 17/8` , `sinh 2x = 15/8`**

---

### Q A5
If `tanh x = 1/4`, find `cosh 2x` and `sinh 2x`.

**ANSWER:**
```
  tanh^2 x = 1/16

  cosh 2x = (1 + 1/16)/(1 - 1/16) = (17/16)/(15/16) = 17/15

  sinh 2x = 2(1/4)/(15/16) = (1/2)(16/15) = 8/15

  CHECK: 289/225 - 64/225 = 225/225 = 1                       CORRECT
```
**`cosh 2x = 17/15` , `sinh 2x = 8/15`**

---

## Topic: express x as a logarithm

### Q A6
If `sinh x = 3`, show that `x = log(3 + sqrt(10))`.

**ANSWER:**
```
  Method 1 -- quote the log form:
     sinh^-1 a = log( a + sqrt(a^2 + 1) )
     x = sinh^-1(3) = log( 3 + sqrt(9 + 1) ) = log( 3 + sqrt10 )

  Method 2 -- from the definition (safer for full marks):
     3 = (e^x - e^-x)/2   =>   6 = e^x - e^-x
     Put t = e^x  (t > 0) :   6 = t - 1/t   =>   t^2 - 6t - 1 = 0
     t = (6 +/- sqrt(36+4))/2 = 3 +/- sqrt10
     3 - sqrt10 < 0 , rejected because e^x > 0
     t = 3 + sqrt10   =>   x = log(3 + sqrt10)

  CHECK: log(6.16228) = 1.818446 ; e^1.818446 = 6.16228 ,
         e^-1.818446 = 0.16228 ; (6.16228 - 0.16228)/2 = 3    CORRECT
```
**`x = log(3 + sqrt10)`**

---

### Q A7
If `sinh x = 5`, show that `x = log(5 + sqrt(26))`.

**ANSWER:**
```
  10 = e^x - e^-x .  Put t = e^x :   t^2 - 10t - 1 = 0
  t = (10 +/- sqrt(100 + 4))/2 = 5 +/- sqrt26
  Reject 5 - sqrt26 (negative, since sqrt26 = 5.0990 > 5)
  t = 5 + sqrt26  =>  x = log(5 + sqrt26)

  CHECK: 5 + sqrt26 = 10.099020 ; 1/10.099020 = 0.099020
         (10.099020 - 0.099020)/2 = 5                         CORRECT
```
**`x = log(5 + sqrt26)`**

---

### Q A8
Find the value of `tanh^-1(1/2)`.

**ANSWER:**
```
                     1        1 + x           1        1 + 1/2
  tanh^-1 x  =      ---  log -------  =>     ---  log ---------
                     2        1 - x           2        1 - 1/2

             =  (1/2) log( (3/2)/(1/2) )  =  (1/2) log 3

  CHECK: (1/2) log 3 = 0.549306 ; tanh(0.549306)
         e^0.549306 = 1.732051 (= sqrt3) , e^-0.549306 = 0.577350
         (1.732051 - 0.577350)/(1.732051 + 0.577350)
         = 1.154701 / 2.309401 = 0.5                          CORRECT
```
**`tanh^-1(1/2) = (1/2) log 3`**

---

### Q A9
Evaluate `sinh^-1(3/4)`.

**ANSWER:**
```
  sinh^-1 x = log( x + sqrt(x^2 + 1) )

  = log( 3/4 + sqrt(9/16 + 1) ) = log( 3/4 + sqrt(25/16) )
  = log( 3/4 + 5/4 ) = log 2

  CHECK: sinh(log 2) = (2 - 1/2)/2 = (3/2)/2 = 3/4            CORRECT
```
**`sinh^-1(3/4) = log 2`**

---

### Q A10
Evaluate `cosh^-1(2)`.

**ANSWER:**
```
  cosh^-1 x = log( x + sqrt(x^2 - 1) )

  = log( 2 + sqrt(4 - 1) ) = log( 2 + sqrt3 )

  CHECK: 2 + sqrt3 = 3.732051 ; 1/3.732051 = 0.267949
         cosh = (3.732051 + 0.267949)/2 = 4/2 = 2             CORRECT
```
**`cosh^-1(2) = log(2 + sqrt3)`**

---

## Topic: evaluate from the definition

### Q A11
Find `sinh(log 2)` and `cosh(log 2)`.

**ANSWER:**
```
  e^(log 2) = 2 ,  e^-(log 2) = 1/2

  sinh(log2) = (2 - 1/2)/2 = (3/2)/2 = 3/4
  cosh(log2) = (2 + 1/2)/2 = (5/2)/2 = 5/4

  CHECK: (5/4)^2 - (3/4)^2 = 25/16 - 9/16 = 1                 CORRECT
```
**`sinh(log 2) = 3/4` , `cosh(log 2) = 5/4`**

---

### Q A12
Find the value of `tanh(log 3)`.

**ANSWER:**
```
  e^(log 3) = 3 ,  e^-(log 3) = 1/3

  sinh(log3) = (3 - 1/3)/2 = (8/3)/2 = 4/3
  cosh(log3) = (3 + 1/3)/2 = (10/3)/2 = 5/3

  tanh(log3) = (4/3)/(5/3) = 4/5

  CHECK: (5/3)^2 - (4/3)^2 = 25/9 - 16/9 = 1                  CORRECT
```
**`tanh(log 3) = 4/5`**

---

### Q A13
If `cosh x = 5/3` and `x > 0`, find the values of the other five hyperbolic
functions of `x`.

**ANSWER:**
```
  sinh^2 x = cosh^2 x - 1 = 25/9 - 1 = 16/9
  sinh x = 4/3          (positive, since x > 0)

  tanh x   = (4/3)/(5/3) = 4/5
  coth x   = 5/4
  sech x   = 3/5
  cosech x = 3/4

  CHECK: 1 - tanh^2 = 1 - 16/25 = 9/25 = sech^2 x             CORRECT
```
**`sinh x = 4/3`, `tanh x = 4/5`, `coth x = 5/4`, `sech x = 3/5`, `cosech x = 3/4`**

---

## Topic: quick proofs

### Q A14
Prove that `cosh x + sinh x = e^x` and `cosh x - sinh x = e^-x`.

**ANSWER:**
```
                     e^x + e^-x     e^x - e^-x     2 e^x
  cosh x + sinh x =  ---------- +  ----------  =  -------  =  e^x
                          2             2            2

                     e^x + e^-x     e^x - e^-x     2 e^-x
  cosh x - sinh x =  ---------- -  ----------  =  -------  =  e^-x
                          2             2            2
                                                              PROVED
```

---

### Q A15
Prove that `(cosh x - sinh x)^n = cosh nx - sinh nx` for any integer `n`.

**ANSWER:**
```
  (cosh x - sinh x)^n = (e^-x)^n        [from Q A14]
                      = e^(-nx)
                      = cosh(nx) - sinh(nx)   [same result applied to nx]
                                                              PROVED
```

---

### Q A16
Prove that `cosh^2 x - sinh^2 x = 1`.

**ANSWER:**
```
  cosh^2 x - sinh^2 x = (cosh x + sinh x)(cosh x - sinh x)
                      = (e^x)(e^-x)
                      = e^(x - x) = e^0 = 1                   PROVED

  CHECK at x = 1 : 1.543081^2 - 1.175201^2
                 = 2.381098 - 1.381098 = 1                    CORRECT
```

---

### Q A17
Prove that `sech^2 x + tanh^2 x = 1`.

**ANSWER:**
```
  Start from  cosh^2 x - sinh^2 x = 1  and divide every term by cosh^2 x
  (legal: cosh x >= 1, never zero) :

      1  -  tanh^2 x  =  sech^2 x

  i.e.  sech^2 x + tanh^2 x = 1                               PROVED
```

---

### Q A18
Prove that `coth^2 x - cosech^2 x = 1` for `x =/= 0`.

**ANSWER:**
```
  Divide  cosh^2 x - sinh^2 x = 1  by sinh^2 x (allowed when x =/= 0) :

      coth^2 x  -  1  =  cosech^2 x

  i.e.  coth^2 x - cosech^2 x = 1                             PROVED
```

---

### Q A19
Prove that `cosh^4 x - sinh^4 x = cosh 2x`.

**ANSWER:**
```
  cosh^4 x - sinh^4 x
     = (cosh^2 x - sinh^2 x)(cosh^2 x + sinh^2 x)
     = (1)(cosh^2 x + sinh^2 x)
     = cosh 2x                                                PROVED

  CHECK at x = 1 : 2.381098^2 - 1.381098^2 = 5.669627 - 1.907431
                 = 3.762196 = cosh 2                          CORRECT
```

---

## Topic: domain, range, definitions

### Q A20
Write the domain and range of `cosh x` and of `tanh x`.

**ANSWER:**
```
  cosh x :  DOMAIN = R  (every real number)
            RANGE  = [ 1 , infinity )
            Reason: by AM >= GM on the positive numbers e^x and e^-x,
                    (e^x + e^-x)/2 >= sqrt(e^x . e^-x) = 1 ,
                    with equality only at x = 0.

  tanh x :  DOMAIN = R
            RANGE  = ( -1 , 1 )   -- OPEN, the ends are never reached
            Reason: tanh x = 1 - 2/(e^2x + 1) and e^2x + 1 > 1 .
```

---

### Q A21
Write the domain and range of `coth x` and `sech x`.

**ANSWER:**
```
  coth x :  DOMAIN = R - {0}      (sinh x = 0 only at x = 0)
            RANGE  = ( -inf , -1 ) U ( 1 , inf )

  sech x :  DOMAIN = R            (cosh x is never zero)
            RANGE  = ( 0 , 1 ]    (reciprocal of [1, inf))
```

---

### Q A22
Is `cosh^-1(1/2)` defined? Justify.

**ANSWER:**
```
  The domain of cosh^-1 is [1, infinity) , because the range of cosh is
  [1, infinity) .  Since 1/2 < 1 , there is NO real x with cosh x = 1/2 .

  Therefore  cosh^-1(1/2) is NOT DEFINED.
```
**Not defined.** (Same reasoning: `tanh^-1(2)` is not defined, because
`tanh x` always lies strictly between `-1` and `1`.)

---

### Q A23
Why are `sinh` and `cosh` called **hyperbolic** functions?

**ANSWER:**
```
  Because  cosh^2 t - sinh^2 t = 1  for every real t .

  So the point  P( cosh t , sinh t )  satisfies  x^2 - y^2 = 1 ,
  which means P always lies on the rectangular hyperbola x^2 - y^2 = 1
  (on the right-hand branch, since cosh t >= 1).

  This is exactly parallel to  cos^2 t + sin^2 t = 1 , which puts
  ( cos t , sin t ) on the circle x^2 + y^2 = 1 -- the reason cos and sin
  are called CIRCULAR functions.
```

---

### Q A24
Which hyperbolic functions are even and which are odd? Prove your claim for
`sinh` and `cosh`.

**ANSWER:**
```
                 e^-x - e^x        e^x - e^-x
  sinh(-x)  =  -------------  =  - ----------  =  - sinh x     ODD
                     2                  2

                 e^-x + e^x       e^x + e^-x
  cosh(-x)  =  -------------  =  ----------  =  cosh x         EVEN
                     2                2

  Consequently:
     EVEN :  cosh , sech        (sech = 1/cosh)
     ODD  :  sinh , tanh , coth , cosech
```

---

# ===============================================================
# SECTION B — SHORT ANSWER (4 marks)
# Appears fairly often. Almost always a PROOF.
# ===============================================================

### Q B1
Prove that `sinh 3x = 3 sinh x + 4 sinh^3 x`.

**ANSWER:**
```
  sinh 3x = sinh(2x + x)
          = sinh 2x cosh x + cosh 2x sinh x

  Substitute  sinh 2x = 2 sinh x cosh x  and  cosh 2x = 1 + 2 sinh^2 x :

          = (2 sinh x cosh x) cosh x + (1 + 2 sinh^2 x) sinh x
          = 2 sinh x cosh^2 x + sinh x + 2 sinh^3 x

  Replace cosh^2 x = 1 + sinh^2 x :

          = 2 sinh x (1 + sinh^2 x) + sinh x + 2 sinh^3 x
          = 2 sinh x + 2 sinh^3 x + sinh x + 2 sinh^3 x
          = 3 sinh x + 4 sinh^3 x                             PROVED

  CHECK at x = 1 : 3(1.175201) + 4(1.623068) = 3.525604 + 6.492272
                 = 10.017876 = sinh 3                         CORRECT
```

---

### Q B2
Prove that `cosh 3x = 4 cosh^3 x - 3 cosh x`.

**ANSWER:**
```
  cosh 3x = cosh(2x + x)
          = cosh 2x cosh x + sinh 2x sinh x        [PLUS sign for cosh]

  Substitute  cosh 2x = 2 cosh^2 x - 1  and  sinh 2x = 2 sinh x cosh x :

          = (2 cosh^2 x - 1) cosh x + (2 sinh x cosh x) sinh x
          = 2 cosh^3 x - cosh x + 2 cosh x sinh^2 x

  Replace sinh^2 x = cosh^2 x - 1 :

          = 2 cosh^3 x - cosh x + 2 cosh x (cosh^2 x - 1)
          = 2 cosh^3 x - cosh x + 2 cosh^3 x - 2 cosh x
          = 4 cosh^3 x - 3 cosh x                             PROVED

  CHECK at x = 1 : 4(3.674226) - 3(1.543081) = 14.696904 - 4.629242
                 = 10.067662 = cosh 3                         CORRECT
```

---

### Q B3
Prove that `sinh^-1 x = log( x + sqrt(x^2 + 1) )` for all real `x`.

**ANSWER:**
```
  Let y = sinh^-1 x , so that  x = sinh y .

              e^y - e^-y
        x  =  -----------        =>   2x = e^y - e^-y
                   2

  Put t = e^y . Since the exponential is always positive, t > 0 .

        2x = t - 1/t        =>    t^2 - 2x t - 1 = 0

  Solve the quadratic in t :

              2x +/- sqrt(4x^2 + 4)
        t  =  ---------------------  =  x +/- sqrt(x^2 + 1)
                        2

  REJECT the minus root:  sqrt(x^2 + 1) > sqrt(x^2) = |x| >= x ,
  so  x - sqrt(x^2 + 1) < 0 , which cannot equal t = e^y > 0 .

        e^y = x + sqrt(x^2 + 1)

  Taking natural logarithms,

        y = log( x + sqrt(x^2 + 1) )
  i.e.  sinh^-1 x = log( x + sqrt(x^2 + 1) )                  PROVED
```
> The rejection line is worth a mark. Never leave it out.

---

### Q B4
Prove that `cosh^-1 x = log( x + sqrt(x^2 - 1) )` for `x >= 1`.

**ANSWER:**
```
  Let y = cosh^-1 x , so  x = cosh y  with  y >= 0  (the principal branch,
  needed because cosh is an even function and hence many-to-one).

              e^y + e^-y
        x  =  -----------      =>   2x = t + 1/t ,  t = e^y > 0
                   2

        t^2 - 2x t + 1 = 0

              2x +/- sqrt(4x^2 - 4)
        t  =  ---------------------  =  x +/- sqrt(x^2 - 1)
                        2

  The square root is real only when x^2 >= 1 , and since cosh y >= 1 we
  have x >= 1 . Both roots are positive, and their product is 1, so

        x - sqrt(x^2 - 1)  =  1 / ( x + sqrt(x^2 - 1) )

  Their logarithms are therefore negatives of each other. Since we require
  y >= 0 , i.e. t = e^y >= 1 , we must take

        t = x + sqrt(x^2 - 1)

        cosh^-1 x = log( x + sqrt(x^2 - 1) ) ,  x >= 1        PROVED
```

---

### Q B5
Prove that `tanh^-1 x = (1/2) log( (1+x)/(1-x) )` for `|x| < 1`.

**ANSWER:**
```
  Let y = tanh^-1 x , so  x = tanh y .

              e^y - e^-y
        x  =  ------------
              e^y + e^-y

  Multiply numerator and denominator by e^y :

              e^2y - 1
        x  =  ----------
              e^2y + 1

        x ( e^2y + 1 ) = e^2y - 1
        x e^2y + x = e^2y - 1
        x + 1 = e^2y ( 1 - x )

                  1 + x
        e^2y  =  -------
                  1 - x

  The right-hand side must be positive, which happens exactly when
  -1 < x < 1 . That is the stated condition. Taking logs,

        2y = log( (1+x)/(1-x) )

                       1        1 + x
        tanh^-1 x  =  ---  log -------                        PROVED
                       2        1 - x

  CHECK at x = 1/2 : (1/2) log 3 = 0.549306 ,
                     and tanh(0.549306) = 0.5                 CORRECT
```

---

### Q B6
Prove that `sinh(x + y) = sinh x cosh y + cosh x sinh y` from the definitions.

**ANSWER:**
```
  RHS =  (e^x - e^-x)  (e^y + e^-y)     (e^x + e^-x)  (e^y - e^-y)
         ------------ .------------  +  ------------ .------------
              2             2                2             2

  First product:
         e^(x+y) + e^(x-y) - e^(-x+y) - e^(-x-y)
         ---------------------------------------
                          4

  Second product:
         e^(x+y) - e^(x-y) + e^(-x+y) - e^(-x-y)
         ---------------------------------------
                          4

  Adding, the e^(x-y) terms cancel and the e^(-x+y) terms cancel:

         2 e^(x+y) - 2 e^-(x+y)      e^(x+y) - e^-(x+y)
      =  ----------------------  =  --------------------  =  sinh(x+y)
                    4                        2
                                                              PROVED

  CHECK at x = 1, y = 2 :
     (1.175201)(3.762196) + (1.543081)(3.626860)
     = 4.421338 + 5.596538 = 10.017876 = sinh 3               CORRECT
```

---

### Q B7
Prove that `cosh(x + y) = cosh x cosh y + sinh x sinh y`, and deduce the three
forms of `cosh 2x`.

**ANSWER:**
```
  cosh x cosh y =  e^(x+y) + e^(x-y) + e^(-x+y) + e^(-x-y)
                   ---------------------------------------
                                    4

  sinh x sinh y =  e^(x+y) - e^(x-y) - e^(-x+y) + e^(-x-y)
                   ---------------------------------------
                                    4

  ADD (the middle terms cancel):

                   2 e^(x+y) + 2 e^-(x+y)      e^(x+y) + e^-(x+y)
                =  ----------------------  =  --------------------
                             4                         2

                =  cosh(x + y)                                PROVED

  DEDUCTION -- put y = x :
     cosh 2x = cosh^2 x + sinh^2 x
             = cosh^2 x + (cosh^2 x - 1) = 2 cosh^2 x - 1
             = (1 + sinh^2 x) + sinh^2 x = 1 + 2 sinh^2 x
```

---

### Q B8
Prove that `tanh(x + y) = (tanh x + tanh y) / (1 + tanh x tanh y)`.

**ANSWER:**
```
                    sinh(x+y)      sinh x cosh y + cosh x sinh y
   tanh(x + y)  =  -----------  =  ------------------------------
                    cosh(x+y)      cosh x cosh y + sinh x sinh y

   Divide every term, top and bottom, by cosh x cosh y
   (allowed: cosh is never zero) :

                    tanh x + tanh y
                =  -----------------                          PROVED
                   1 + tanh x tanh y

   CHECK at x = y = 1 :
      (0.761594 + 0.761594)/(1 + 0.580026) = 1.523188/1.580026
      = 0.964028 = tanh 2                                     CORRECT
```

---

### Q B9
If `cosh x = sec theta`, prove that `tanh^2(x/2) = tan^2(theta/2)`.

**ANSWER:**
```
  From cosh x = 1 + 2 sinh^2(x/2)  we get  cosh x - 1 = 2 sinh^2(x/2)
  From cosh x = 2 cosh^2(x/2) - 1  we get  cosh x + 1 = 2 cosh^2(x/2)

  Dividing,
                        cosh x - 1
       tanh^2 (x/2)  =  -----------
                        cosh x + 1

  Substitute cosh x = sec theta :

                        sec theta - 1
                     =  --------------
                        sec theta + 1

  Write sec theta = 1/cos theta and multiply top and bottom by cos theta :

                        1 - cos theta      2 sin^2(theta/2)
                     =  --------------  =  -----------------
                        1 + cos theta      2 cos^2(theta/2)

                     =  tan^2 (theta/2)                       PROVED
```

---

### Q B10
If `x = log( cot(pi/4 + theta) )`, prove that
(i) `cosh x = sec 2theta` and (ii) `sinh x = - tan 2theta`.

**ANSWER:**
```
  Write A = pi/4 + theta . Then

        e^x = cot A          and       e^-x = tan A

  (i)              e^x + e^-x      cot A + tan A
        cosh x  =  ----------  =  ---------------
                        2                2

                   (cos A/sin A) + (sin A/cos A)
                =  -----------------------------
                                2

                   cos^2 A + sin^2 A          1              1
                =  -------------------  =  -----------  =  -------
                     2 sin A cos A         2 sinA cosA     sin 2A

        Now 2A = pi/2 + 2theta , so sin 2A = sin(pi/2 + 2theta) = cos 2theta

        cosh x = 1/cos 2theta = sec 2theta                    PROVED

  (ii)             e^x - e^-x      cot A - tan A
        sinh x  =  ----------  =  ---------------
                        2                2

                   cos^2 A - sin^2 A       cos 2A
                =  ------------------  =  --------  =  cot 2A
                     2 sin A cos A         sin 2A

                =  cot(pi/2 + 2theta)  =  - tan 2theta        PROVED

  CHECK with the key identity:
     cosh^2 x - sinh^2 x = sec^2 2theta - tan^2 2theta = 1    CORRECT
```

---

### Q B11
If `u = log( tan(pi/4 + theta/2) )` and `cos theta > 0`, prove that
`cosh u = sec theta` and `tanh u = sin theta`.

**ANSWER:**
```
  Write B = pi/4 + theta/2 . Then e^u = tan B , e^-u = cot B , 2B = pi/2 + theta.

              tan B + cot B      sin^2 B + cos^2 B         1
  cosh u  =  ---------------  =  ------------------  =  --------
                    2              2 sin B cos B         sin 2B

           =  1 / sin(pi/2 + theta)  =  1 / cos theta  =  sec theta

              tan B - cot B      sin^2 B - cos^2 B        - cos 2B
  sinh u  =  ---------------  =  ------------------  =  ------------
                    2              2 sin B cos B            sin 2B

           = - cot 2B = - cot(pi/2 + theta) = tan theta

              sinh u      tan theta
  tanh u  =  --------  =  ------------  =  sin theta
              cosh u      sec theta
                                                              PROVED
  CHECK: cosh^2 - sinh^2 = sec^2 theta - tan^2 theta = 1      CORRECT
```

---

### Q B12
If `sinh x = 3/4`, find `cosh 2x`, `sinh 2x` and `tanh 2x`, and verify your
answers.

**ANSWER:**
```
  cosh^2 x = 1 + 9/16 = 25/16   =>   cosh x = 5/4

  sinh 2x = 2 (3/4)(5/4) = 15/8
  cosh 2x = 1 + 2(9/16)  = 17/8
  tanh 2x = (15/8)/(17/8) = 15/17

  VERIFY 1: cosh^2 2x - sinh^2 2x = 289/64 - 225/64 = 1       CORRECT
  VERIFY 2: 1 - tanh^2 2x = 1 - 225/289 = 64/289 ,
            sech^2 2x = (8/17)^2 = 64/289                     CORRECT
```
**`cosh 2x = 17/8` , `sinh 2x = 15/8` , `tanh 2x = 15/17`**

---

### Q B13
Prove that `(cosh x + sinh x)^n = cosh nx + sinh nx` for every integer `n`, and
hence write `(cosh x + sinh x)^3` in hyperbolic form.

**ANSWER:**
```
  Since  cosh x + sinh x = (e^x + e^-x)/2 + (e^x - e^-x)/2 = e^x ,

     (cosh x + sinh x)^n = (e^x)^n = e^(nx)

  and applying the same identity at the value nx ,

     e^(nx) = cosh(nx) + sinh(nx)

  Therefore  (cosh x + sinh x)^n = cosh nx + sinh nx          PROVED

  With n = 3 :   (cosh x + sinh x)^3 = cosh 3x + sinh 3x
                                     = (4cosh^3 x - 3cosh x)
                                       + (3 sinh x + 4 sinh^3 x)
```

---

### Q B14
Prove that `sinh^-1(3/4) + cosh^-1(5/4) = tanh^-1(15/17)`.

**ANSWER:**
```
  LEFT SIDE
     sinh^-1(3/4) = log( 3/4 + sqrt(9/16 + 1) ) = log(3/4 + 5/4) = log 2
     cosh^-1(5/4) = log( 5/4 + sqrt(25/16 - 1) ) = log(5/4 + 3/4) = log 2

     Sum = log 2 + log 2 = log 4

  RIGHT SIDE
     tanh^-1(15/17) = (1/2) log( (1 + 15/17)/(1 - 15/17) )
                    = (1/2) log( (32/17)/(2/17) )
                    = (1/2) log 16
                    = (1/2)(4 log 2) = 2 log 2 = log 4

  LEFT = RIGHT = log 4                                        PROVED
```

---

### Q B15
Evaluate `cosh^-1(17/8)` and `tanh^-1(15/17)` and comment on the result.

**ANSWER:**
```
  cosh^-1(17/8) = log( 17/8 + sqrt(289/64 - 1) )
                = log( 17/8 + sqrt(225/64) )
                = log( 17/8 + 15/8 )
                = log( 32/8 ) = log 4

  tanh^-1(15/17) = (1/2) log( (32/17)/(2/17) ) = (1/2) log 16 = log 4

  COMMENT: both equal log 4 . This is expected, because if cosh y = 17/8
  then sinh y = 15/8 and hence tanh y = 15/17 -- the SAME y . Verified by
  cosh^2 - sinh^2 = 289/64 - 225/64 = 1 .                     CORRECT
```

---

### Q B16
If `tanh x = 1/4`, express `x` as a logarithm and hence find `cosh 2x`.

**ANSWER:**
```
                       1        1 + 1/4        1        5/4        1       5
  x = tanh^-1(1/4) =  ---  log ---------  =   ---  log -----  =   --- log ---
                       2        1 - 1/4        2        3/4        2       3

  cosh 2x = (1 + tanh^2 x)/(1 - tanh^2 x)
          = (1 + 1/16)/(1 - 1/16) = (17/16)/(15/16) = 17/15

  CHECK: sinh 2x = 2(1/4)/(15/16) = 8/15 ;
         (17/15)^2 - (8/15)^2 = (289 - 64)/225 = 225/225 = 1  CORRECT
```
**`x = (1/2) log(5/3)` , `cosh 2x = 17/15`**

---

# ===============================================================
# SECTION C — LONG ANSWER (7 marks)
# REVISION-GRADE. See the honest note at the top of this file:
# BIEAP does NOT set a standalone 7-mark question from Chapter 9.
# These are here to make you fluent, and every part of them is
# exactly the kind of thing that IS asked in Sections A and B.
# ===============================================================

### Q C1
(a) Define all six hyperbolic functions in terms of the exponential function.
(b) State the domain and range of each.
(c) Prove the three fundamental identities.

**ANSWER (mark split: 2 + 2 + 3):**
```
  (a) DEFINITIONS                                            [2 marks]

        sinh x = (e^x - e^-x)/2          cosh x = (e^x + e^-x)/2
        tanh x = sinh x / cosh x         coth x = cosh x / sinh x , x =/= 0
        sech x = 1 / cosh x            cosech x = 1 / sinh x     , x =/= 0

  (b) DOMAIN AND RANGE                                       [2 marks]

      +-----------+-------------+-------------------------------+
      | FUNCTION  |  DOMAIN     |  RANGE                        |
      +-----------+-------------+-------------------------------+
      | sinh x    |  R          |  R                            |
      | cosh x    |  R          |  [ 1 , inf )                  |
      | tanh x    |  R          |  ( -1 , 1 )                   |
      | coth x    |  R - {0}    |  (-inf,-1) U (1, inf)         |
      | sech x    |  R          |  ( 0 , 1 ]                    |
      | cosech x  |  R - {0}    |  R - {0}                      |
      +-----------+-------------+-------------------------------+

      Justification of the two hardest entries:
        cosh x >= 1 by AM >= GM applied to e^x and e^-x .
        tanh x = 1 - 2/(e^2x + 1) , and e^2x + 1 > 1 , so -1 < tanh x < 1 .

  (c) THE THREE IDENTITIES                                   [3 marks]

      (i)   cosh^2 x - sinh^2 x
              = (cosh x + sinh x)(cosh x - sinh x)
              = (e^x)(e^-x) = e^0 = 1

      (ii)  Divide (i) by cosh^2 x  (never zero) :
              1 - tanh^2 x = sech^2 x

      (iii) Divide (i) by sinh^2 x  (x =/= 0) :
              coth^2 x - 1 = cosech^2 x
```

---

### Q C2
Derive the logarithmic forms of `sinh^-1 x`, `cosh^-1 x` and `tanh^-1 x`,
stating the conditions on `x` in each case. Hence evaluate `sinh^-1(3/4)`,
`cosh^-1(5/4)` and `tanh^-1(3/5)`.

**ANSWER (mark split: 2 + 2 + 2 + 1):**
```
  PART 1 -- sinh^-1                                          [2 marks]
     y = sinh^-1 x  =>  2x = e^y - e^-y .  Put t = e^y > 0 :
     t^2 - 2xt - 1 = 0  =>  t = x +/- sqrt(x^2 + 1) .
     sqrt(x^2+1) > |x| , so the minus root is negative -- reject it.
     sinh^-1 x = log( x + sqrt(x^2 + 1) ) ,  valid for ALL real x
     (because x^2 + 1 > 0 always).

  PART 2 -- cosh^-1                                          [2 marks]
     y = cosh^-1 x with y >= 0  =>  t^2 - 2xt + 1 = 0
     t = x +/- sqrt(x^2 - 1) .  Real only if x >= 1 .
     The two roots multiply to 1, so one is >= 1 and the other <= 1;
     y >= 0 forces t >= 1 , so take the plus root.
     cosh^-1 x = log( x + sqrt(x^2 - 1) ) ,  x >= 1

  PART 3 -- tanh^-1                                          [2 marks]
     y = tanh^-1 x  =>  x = (e^2y - 1)/(e^2y + 1)
     x e^2y + x = e^2y - 1  =>  e^2y (1 - x) = 1 + x
     e^2y = (1+x)/(1-x) , which is positive only for |x| < 1 .
     tanh^-1 x = (1/2) log( (1+x)/(1-x) ) ,  |x| < 1

  PART 4 -- EVALUATIONS                                      [1 mark]
     sinh^-1(3/4) = log(3/4 + 5/4) = log 2
     cosh^-1(5/4) = log(5/4 + 3/4) = log 2
     tanh^-1(3/5) = (1/2) log( (8/5)/(2/5) ) = (1/2) log 4 = log 2

     All three equal log 2 , consistent with
     sinh(log2) = 3/4 , cosh(log2) = 5/4 , tanh(log2) = 3/5 .   CORRECT
```

---

### Q C3
Prove the addition formulas for `sinh(x+y)` and `cosh(x+y)` from the exponential
definitions. Hence derive `sinh 2x`, all forms of `cosh 2x`, `sinh 3x` and
`cosh 3x`.

**ANSWER (mark split: 2 + 2 + 3):**
```
  PART 1 -- ADDITION FORMULAS                                [2 marks]
     (Full expansion as in Q B6 and Q B7.)
        sinh(x+y) = sinh x cosh y + cosh x sinh y
        cosh(x+y) = cosh x cosh y + sinh x sinh y

  PART 2 -- DOUBLE ANGLE (put y = x)                         [2 marks]
        sinh 2x = 2 sinh x cosh x
        cosh 2x = cosh^2 x + sinh^2 x
                = 2 cosh^2 x - 1          [using sinh^2 = cosh^2 - 1]
                = 1 + 2 sinh^2 x          [using cosh^2 = 1 + sinh^2]
        Dividing the first form top and bottom by cosh^2 x :
        cosh 2x = (1 + tanh^2 x)/(1 - tanh^2 x)

  PART 3 -- TRIPLE ANGLE                                     [3 marks]
        sinh 3x = sinh(2x + x)
                = 2 sinh x cosh^2 x + (1 + 2 sinh^2 x) sinh x
                = 2 sinh x (1 + sinh^2 x) + sinh x + 2 sinh^3 x
                = 3 sinh x + 4 sinh^3 x

        cosh 3x = cosh(2x + x)
                = (2 cosh^2 x - 1) cosh x + 2 cosh x sinh^2 x
                = 2 cosh^3 x - cosh x + 2 cosh x (cosh^2 x - 1)
                = 4 cosh^3 x - 3 cosh x

  NUMERICAL CHECK at x = 1 :
     3(1.175201) + 4(1.623068) = 10.017876 = sinh 3
     4(3.674226) - 3(1.543081) = 10.067662 = cosh 3           CORRECT
```

---

### Q C4
State Osborne's Rule. Using it, write down the hyperbolic analogues of six named
trigonometric identities, and then **prove** two of them independently.

**ANSWER (mark split: 1 + 3 + 3):**
```
  PART 1 -- THE RULE                                         [1 mark]
     In any trigonometric identity, replace each circular function by the
     corresponding hyperbolic function (sin -> sinh, cos -> cosh, ...) and
     CHANGE THE SIGN of every term that contains a product of two sines,
     whether that product is visible (sin x sin y, sin^2 x) or hidden
     (tan^2 x, cot^2 x, tan x tan y, sin^3 x).

  PART 2 -- SIX CONVERSIONS                                  [3 marks]
     1. cos^2 + sin^2 = 1              ->  cosh^2 x - sinh^2 x = 1
     2. sec^2 = 1 + tan^2              ->  sech^2 x = 1 - tanh^2 x
     3. cos(x+y) = cosxcosy - sinxsiny ->  cosh(x+y)=coshxcoshy+sinhxsinhy
     4. tan(x+y) = (t1+t2)/(1-t1t2)    ->  tanh(x+y)=(T1+T2)/(1+T1T2)
     5. cos 2x = 1 - 2 sin^2 x         ->  cosh 2x = 1 + 2 sinh^2 x
     6. sin 3x = 3 sin x - 4 sin^3 x   ->  sinh 3x = 3 sinh x + 4 sinh^3 x

  PART 3 -- INDEPENDENT PROOFS                               [3 marks]
     (i)  cosh^2 x - sinh^2 x = (cosh x + sinh x)(cosh x - sinh x)
                              = e^x . e^-x = 1

     (ii) cosh(x+y): expand both products of exponentials over 4 and add;
          the e^(x-y) and e^(-x+y) terms cancel, leaving
          (e^(x+y) + e^-(x+y))/2 = cosh(x+y) .

  CAUTION worth stating for a mark: Osborne's Rule applies only to
  ALGEBRAIC IDENTITIES. It does not transfer periodicity, boundedness
  (|sin x| <= 1 is true, |sinh x| <= 1 is false) or special values.
```

---

### Q C5
If `x = log( cot(pi/4 + theta) )` where `theta` lies in `(-pi/4, pi/4)`, prove
that (i) `cosh x = sec 2theta`, (ii) `sinh x = -tan 2theta`,
(iii) `tanh x = -sin 2theta`, and verify the fundamental identity.

**ANSWER (mark split: 2 + 2 + 2 + 1):**
```
  Put A = pi/4 + theta , so that e^x = cot A and e^-x = tan A ,
  and note 2A = pi/2 + 2theta .

  (i)  cosh x = (cot A + tan A)/2
              = (cos^2 A + sin^2 A)/(2 sin A cos A)
              = 1/sin 2A = 1/sin(pi/2 + 2theta) = 1/cos 2theta
              = sec 2theta                                   [2 marks]

  (ii) sinh x = (cot A - tan A)/2
              = (cos^2 A - sin^2 A)/(2 sin A cos A)
              = cos 2A / sin 2A = cot 2A
              = cot(pi/2 + 2theta) = - tan 2theta            [2 marks]

  (iii) tanh x = sinh x / cosh x
               = (- tan 2theta)/(sec 2theta)
               = - (sin2theta/cos2theta)(cos 2theta)
               = - sin 2theta                                [2 marks]

  (iv) VERIFICATION                                          [1 mark]
       cosh^2 x - sinh^2 x = sec^2 2theta - tan^2 2theta = 1  CORRECT
       and  1 - tanh^2 x = 1 - sin^2 2theta = cos^2 2theta
            sech^2 x     = cos^2 2theta                      CORRECT

  Note on the range: theta in (-pi/4, pi/4) gives A in (0, pi/2) , so
  cot A > 0 and the logarithm is defined. Stating this earns a mark.
```

---

### Q C6
(a) Show that `cosh x >= 1` for all real `x`, with equality only at `x = 0`.
(b) Show that `-1 < tanh x < 1` for all real `x`.
(c) Hence state the domain of each of the six inverse hyperbolic functions and
decide whether `cosh^-1(0.5)`, `tanh^-1(2)`, `sech^-1(3)` and `sinh^-1(-7)` are
defined.

**ANSWER (mark split: 2 + 2 + 3):**
```
  (a)  e^x and e^-x are both positive, so by AM >= GM

           e^x + e^-x
          ------------  >=  sqrt( e^x . e^-x )  =  sqrt(1)  =  1
                2

       i.e. cosh x >= 1 . Equality in AM-GM holds only when the two
       numbers are equal, i.e. e^x = e^-x , i.e. e^2x = 1 , i.e. x = 0 .
       And indeed cosh 0 = 1 .                               [2 marks]

  (b)  Multiply top and bottom of tanh x by e^x :

                     e^2x - 1              2
           tanh x = ----------  =  1 -  ---------
                     e^2x + 1            e^2x + 1

       Since e^2x > 0 , we have e^2x + 1 > 1 , so
           0 < 2/(e^2x + 1) < 2
       and therefore  -1 < tanh x < 1 , with neither end attained.
                                                             [2 marks]

  (c)  DOMAINS OF THE INVERSES (= ranges of the originals)   [3 marks]

           sinh^-1   : R
           cosh^-1   : [ 1 , inf )
           tanh^-1   : ( -1 , 1 )
           coth^-1   : (-inf, -1) U (1, inf)
           sech^-1   : ( 0 , 1 ]
           cosech^-1 : R - {0}

       cosh^-1(0.5) : NOT DEFINED, since 0.5 < 1 and cosh x >= 1 .
       tanh^-1(2)   : NOT DEFINED, since |2| > 1 and |tanh x| < 1 .
       sech^-1(3)   : NOT DEFINED, since sech x lies in (0, 1] .
       sinh^-1(-7)  : DEFINED, and equals log(-7 + sqrt50) .
                      (Note sqrt50 = 7.0711 > 7 , so the bracket is
                       positive and the logarithm exists.)
```

---

# ===============================================================
# WHICH QUESTIONS REPEAT MOST
# ===============================================================

| Rank | Question type | Section | Chance of appearing |
|------|---------------|---------|---------------------|
| **1** | Given `sinh x` / `cosh x` / `tanh x`, find `cosh 2x` and `sinh 2x` | **A** | **Very high** |
| **2** | Given `sinh x = k`, show `x = log(k + sqrt(k^2+1))` | **A** | **High** |
| **3** | Prove one of the three identities (`cosh^2 - sinh^2 = 1` etc.) | A | High |
| 4 | Evaluate `sinh(log a)`, `cosh(log a)`, `tanh(log a)` | A | Moderate–high |
| 5 | Prove `(cosh x +/- sinh x)^n = cosh nx +/- sinh nx` | A | Moderate |
| 6 | Derive a logarithmic form (`sinh^-1`, `cosh^-1`, `tanh^-1`) | **B** | **High (when B appears)** |
| 7 | Prove `sinh 3x = 3 sinh x + 4 sinh^3 x` or the `cosh 3x` version | **B** | **High (when B appears)** |
| 8 | `cosh x = sec theta` ⇒ `tanh^2(x/2) = tan^2(theta/2)` | B | Moderate |
| 9 | `x = log(cot(pi/4 + theta))` type substitution proof | B | Moderate |
| 10 | State the domain and range of a named function | A | Moderate |
| 11 | Prove `cosh^4 x - sinh^4 x = cosh 2x` | A / B | Moderate |
| 12 | "Is `cosh^-1(1/2)` defined?" / definitions and Osborne's Rule | A | Low–moderate |
| — | Standalone 7-mark long answer | C | **Does not happen** |

---

# THE HONEST TWO-LINE STRATEGY FOR THIS CHAPTER

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |  1. Memorise the two definitions and cosh^2 x - sinh^2 x = 1 .     |
  |  2. Drill "given one value, find cosh 2x and sinh 2x" until it     |
  |     takes 30 seconds.                                              |
  |                                                                    |
  |  That is the Section A mark, secured. Then learn the three log     |
  |  forms and the two triple-angle proofs for the Section B mark.     |
  |                                                                    |
  |  Total study time: about two hours. Return: 2 to 6 marks.          |
  |  Nothing else in Maths IA pays this well.                          |
  |                                                                    |
  +--------------------------------------------------------------------+
```
