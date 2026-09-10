# Binomial Theorem — Mind Map

**Maths IIA · Chapter 6 · One of the top three scoring chapters in IIA**
Almost every year: 1 long answer (7M) + 1 short answer (4M) + 1-2 very short answers (2M)

---

## THE WHOLE CHAPTER ON ONE PAGE

```
                       B I N O M I A L   T H E O R E M
                                     |
        +--------------------+-------+-------+--------------------+
        |                    |               |                    |
   POSITIVE INTEGER      THE GENERAL      BINOMIAL           RATIONAL /
      INDEX  n           TERM T(r+1)     COEFFICIENTS      NEGATIVE INDEX
        |                    |               |                    |
   Pascal's            T(r+1) =          nCr = nC(n-r)      (1 + x)^n
   triangle            nCr a^(n-r) x^r        |             valid only for
        |                    |            nCr + nC(r-1)         |x| < 1
   (a + x)^n =         THIS ONE FORMULA   = (n+1)Cr             |
   sum of nCr          ANSWERS ABOUT           |             Standard four
   a^(n-r) x^r         80% OF THE          Sum of all       expansions
        |              CHAPTER             = 2^n            (1-x)^-1
   Number of                |                  |            (1+x)^-1
   terms = n+1         +----+----+----+    Odd sum =        (1-x)^-2
        |              |    |    |    |    Even sum =       (1+x)^-2
   Sum of coeffs    MIDDLE  COEFF  TERM  = 2^(n-1)              |
   = put x = 1        TERM   OF   INDEP.      |             General term
                        |    x^k  OF x     Series sums      p(p-1)...(p-r+1)
                        |     |     |      C0+C1+...        ---------------
                     n even  set   set        |                   r!
                     -> ONE  power power   C1+2C2+...              |
                     n odd   = k   = 0     C0^2+C1^2+...      APPROXIMATIONS
                     -> TWO   |     |          |             (1+x)^n = 1 + nx
                        |     |     |          |             for tiny x
                        +-----+-----+----------+                  |
                              |                              SUM OF AN
                    NUMERICALLY GREATEST TERM               INFINITE SERIES
                    & GREATEST COEFFICIENT                  (the 7-mark one)
                              |
                    ratio T(r+1)/T(r)
                              |
                      DIVISIBILITY AND
                      REMAINDER PROBLEMS
```

---

## PASCAL'S TRIANGLE — the whole idea in one picture

```
   n = 0                       1
   n = 1                    1     1
   n = 2                 1     2     1
   n = 3              1     3     3     1
   n = 4           1     4     6     4     1
   n = 5        1     5    10    10     5     1
   n = 6     1     6    15    20    15     6     1
   n = 7  1     7    21    35    35    21     7     1

   RULE:  each number = the two numbers just above it, ADDED.
          e.g.  10 = 4 + 6

   THAT RULE IS THE FORMULA:   nC(r-1) + nCr = (n+1)Cr

   Row n gives the coefficients of (a + x)^n.
   Row n has (n + 1) numbers.
   Row n adds up to 2^n.        (row 4: 1+4+6+4+1 = 16 = 2^4)
   Every row reads the same backwards.   (that is nCr = nC(n-r))
```

---

## THE 60-SECOND VERSION

(a + x)^n means multiply (a + x) by itself n times. Nobody wants to do that.
The binomial theorem gives you **any one term you want, straight away**, without
expanding anything.

Everything in this chapter is one of five jobs:

| Job | What you actually do | Where it is asked |
|-----|----------------------|-------------------|
| Expand | write out all n+1 terms | Section A, 2 marks |
| Pick one term out | use T(r+1), solve for r | Section A / B |
| Play with nCr | use nCr = nC(n-r) and Pascal | Section B, 4 marks |
| Biggest term | ratio of consecutive terms | **Section C, 7 marks** |
| Rational index | expand or sum an infinite series | **Section C, 7 marks** |

---

## THE ONE FORMULA THAT RUNS THE CHAPTER

```
  +--------------------------------------------------------------+
  |                                                              |
  |        T(r + 1)  =  nCr  x  a^(n - r)  x  x^r                |
  |                                                              |
  |        in the expansion of  (a + x)^n                        |
  |                                                              |
  |        r = 0 gives the 1st term                              |
  |        r = 1 gives the 2nd term                              |
  |        r = n gives the last term                             |
  |                                                              |
  |        POWERS ALWAYS ADD UP TO n :   (n - r) + r  =  n       |
  |                                                              |
  +--------------------------------------------------------------+

  HOW EVERY QUESTION USES IT:

  +---------------------------+----------------------------------+
  |  "Find the 6th term"      |  put r + 1 = 6, so r = 5         |
  |  "Coefficient of x^7"     |  set power of x = 7, solve for r |
  |  "Term independent of x"  |  set power of x = 0, solve for r |
  |  "Middle term"            |  r = n/2  (n even)               |
  |  "Greatest term"          |  compare T(r+1) with T(r)        |
  +---------------------------+----------------------------------+
```

---

## WHERE THE MARKS ARE (AP Inter 2nd Year, Maths IIA)

The IIA paper is **75 marks**:

```
  +-------------+----------------------------+-----------------+
  |  SECTION A  |  10 questions x 2 marks    |  ANSWER ALL     |  = 20
  |  SECTION B  |   7 questions x 4 marks    |  ANSWER ANY 5   |  = 20
  |  SECTION C  |   7 questions x 7 marks    |  ANSWER ANY 5   |  = 35
  +-------------+----------------------------+-----------------+
                                                       TOTAL      = 75
```

| Topic from this chapter | Section | Marks |
|-------------------------|---------|-------|
| Find a stated term / number of terms / general term | A | 2 |
| Interval of validity for a rational index | A | 2 |
| First three terms of a rational-index expansion | A | 2 |
| Middle term(s) of an expansion | B | 4 |
| Coefficient of x^k / term independent of x | B | 4 |
| Coefficients in AP or GP, find n or r | B | 4 |
| **Numerically greatest term** | **C** | **7** |
| **Sum of an infinite series (rational index)** | **C** | **7** |
| **Proving a binomial-coefficient identity** | **C** | **7** |

**Total available from this one chapter: about 13 to 20 marks out of 75.**

---

## STUDY THIS ORDER (each step needs the one before it)

```
  STEP 1   Pascal's triangle + what nCr means
              |
  STEP 2   The binomial theorem for (a + x)^n
              |
  STEP 3   THE GENERAL TERM  T(r+1)      <---- live here for two days
              |
     +--------+--------+--------------------+
     |                 |                    |
  STEP 4          STEP 5               STEP 6
  Middle term     Coefficient of x^k    Term independent of x
     |                 |                    |
     +--------+--------+--------------------+
              |
  STEP 7   Ratio of consecutive terms  T(r+1) / T(r)
              |
     +--------+--------+
     |                 |
  STEP 8          STEP 9
  Numerically     Greatest
  greatest term   coefficient
     |                 |
     +--------+--------+
              |
  STEP 10  Properties of nCr  (nCr = nC(n-r), Pascal, sums)
              |
  STEP 11  Series of binomial coefficients (C0 + C1 + ... type)
              |
  STEP 12  Divisibility and remainder problems
              |
  STEP 13  Binomial theorem for a RATIONAL / NEGATIVE index
              |
     +--------+--------+
     |                 |
  STEP 14         STEP 15
  Approximations  SUM OF AN INFINITE SERIES  (the classic 7-mark)
```

---

## THE THREE THINGS BEGINNERS ALWAYS GET WRONG

```
  1.  r  is NOT the term number.
      The (r+1)th term uses r.   6th term  ->  r = 5.

  2.  In  (a - x)^n  the sign belongs to the term.
      Write it as  (a + (-x))^n  and keep (-1)^r.

  3.  For a RATIONAL index there is NO nCr and NO last term.
      The expansion goes on forever and only works when |x| < 1.
```

---

## IF YOU ONLY HAVE 2 DAYS

**Day 1 morning** — Pascal's triangle, the statement of the theorem, and the
general term T(r+1). Write T(r+1) = nCr a^(n-r) x^r fifty times if you must.
Then do five "find the 5th term" questions. That is Section A locked.

**Day 1 evening** — Middle term, coefficient of x^k, term independent of x.
All three are the SAME question with a different target. Do six of them.
That is a Section B question locked.

**Day 2 morning** — Numerically greatest term. It is a fixed 5-step recipe with
no thinking required. Do the standard (4 + 3x)^15 with x = 7/2 problem twice.
That is one 7-mark question locked.

**Day 2 evening** — Rational index. Memorise the four small expansions, then
learn the ONE recipe for "sum of the infinite series" questions. Do the
1/5 + 1.3/(5.10) + ... problem three times until it is automatic.
That is a second 7-mark question locked.

That alone is worth about 15 of the 75 marks in Maths IIA — and it is the
easiest 15 marks in the whole paper because the questions barely change.
