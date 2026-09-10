# Permutations and Combinations — Formula Sheet

**Maths IIA · Chapter 5**

Copy this by hand into a notebook. Writing it once beats reading it ten times.
The last column tells you WHEN to use the formula — that is what exams actually test.

---

# 1. THE FUNDAMENTAL PRINCIPLE OF COUNTING

```
  +--------------------------------------------------------------------------+
  |                                                                          |
  |   MULTIPLICATION PRINCIPLE  ("AND")                                      |
  |        m ways  AND then  n ways     =    m x n  ways                     |
  |                                                                          |
  |   ADDITION PRINCIPLE  ("OR")                                             |
  |        m ways  OR  n ways           =    m + n  ways                     |
  |        (the two must not overlap)                                        |
  |                                                                          |
  +--------------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| m x n x p ... | the job has STAGES: do this, then this, then this |
| m + n + p ... | the job splits into separate CASES: this OR that |
| multiply inside a case, add across cases | every mixed question |

---

# 2. FACTORIALS

```
  +--------------------------------------------------------------------------+
  |                                                                          |
  |     n!  =  n (n-1) (n-2) ... 3 . 2 . 1                                   |
  |                                                                          |
  |     0!  =  1                     <--  NOT ZERO                           |
  |     1!  =  1                                                             |
  |     n!  =  n x (n-1)!            <--  the unfolding / cancelling rule    |
  |                                                                          |
  |     (2n)!  =  2^n  x  n!  x  {1 . 3 . 5 . ... . (2n - 1)}                |
  |                                                                          |
  +--------------------------------------------------------------------------+

     1! = 1        2! = 2         3! = 6          4! = 24
     5! = 120      6! = 720       7! = 5040       8! = 40320
     9! = 362880  10! = 3628800  11! = 39916800  12! = 479001600
```

| Formula | When to use |
|---|---|
| 0! = 1 | direct 2-mark question; also inside nPn = n!/0! |
| n! = n(n-1)! | cancelling in every "find n" equation |
| (2n)! = 2^n n! {1.3.5...(2n-1)} | standard 4-mark proof question |
| n!/(n-r)! = n(n-1)...(n-r+1) | evaluating nPr quickly |

**NOT TRUE — the three factorial traps**
```
     n! + m!  =  (n + m)!     <-- FALSE     2! + 3! = 8  but  5! = 120
     n! x m!  =  (nm)!        <-- FALSE     2! x 3! = 12 but  6! = 720
     0!       =  0            <-- FALSE     0! = 1
```

---

# 3. PERMUTATIONS (ARRANGEMENTS — ORDER MATTERS)

```
  +--------------------------------------------------------------------------+
  |                                                                          |
  |                        n!                                                |
  |      nPr   =   ----------------   =   n(n-1)(n-2)...(n-r+1)              |
  |                     (n - r)!               \___ r factors ___/           |
  |                                                                          |
  |      nPn   =   n!            nP1  =  n           nP0  =  1               |
  |      nP(n-1) = n!            (same as nPn)                               |
  |                                                                          |
  +--------------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| nPr = n!/(n-r)! | "arrange r out of n", "r-letter words from n letters" |
| nPn = n! | "using all the letters", "seat all n people in a row" |
| n^r | arranging r places when REPETITION is allowed |
| nPr = nCr x r! | converting between the two; "find n and r" questions |
| nP(r) = (n-1)P(r) + r x (n-1)P(r-1) | rarely asked, objective only |

```
  +--------------------------------------------------------------------------+
  |   REPETITION ALLOWED                                                     |
  |                                                                          |
  |      r places, each fillable in n ways     =     n^r                     |
  |                                                                          |
  |      "5 letters into 3 letter boxes"       =     3^5   (letters choose)  |
  |      "n students into r hostels"           =     r^n                     |
  |      functions from a set of m to a set of n =   n^m                     |
  |      one-one functions from m to n           =   nPm                     |
  +--------------------------------------------------------------------------+
```

> **The exponent rule:** whatever is BEING PLACED goes in the EXPONENT.
> The number of PLACES it can go into is the BASE.

---

# 4. PERMUTATIONS OF THINGS NOT ALL DIFFERENT

```
  +--------------------------------------------------------------------------+
  |                                                                          |
  |   n things,  p alike of one kind, q alike of another, s alike of a       |
  |   third, rest all different:                                             |
  |                                                                          |
  |                                    n!                                    |
  |          Arrangements   =   ------------------                           |
  |                               p!  q!  s!                                 |
  |                                                                          |
  +--------------------------------------------------------------------------+
```

**The standard words — memorise these answers, they repeat:**

| Word | Letters | Repeats | Arrangements |
|---|---|---|---|
| MISSISSIPPI | 11 | I x4, S x4, P x2 | 11!/(4!4!2!) = **34650** |
| INDEPENDENCE | 12 | E x4, N x3, D x2 | 12!/(4!3!2!) = **1663200** |
| MATHEMATICS | 11 | M x2, A x2, T x2 | 11!/(2!2!2!) = **4989600** |
| INTERMEDIATE | 12 | E x3, I x2, T x2 | 12!/(3!2!2!) = **19958400** |
| PERMUTATION | 11 | T x2 | 11!/2! = **19958400** |
| ENGINEERING | 11 | E x3, N x3, I x2, G x2 | 11!/(3!3!2!2!) = **277200** |
| ASSASSINATION | 13 | S x4, A x3, I x2, N x2 | 13!/(4!3!2!2!) = **10810800** |

---

# 5. RESTRICTED PERMUTATIONS

```
  +--------------------------------------------------------------------------+
  |                                                                          |
  |  ALWAYS TOGETHER (k objects glued into a block)                          |
  |        (n - k + 1)!  x  k!                                               |
  |         \_________/     \__/                                             |
  |         arrange the      arrange inside                                  |
  |         units            the block                                       |
  |                                                                          |
  |  NEVER TOGETHER (2 objects)                                              |
  |        n!  -  (n-1)! x 2!                                                |
  |                                                                          |
  |  NO TWO TOGETHER (GAP METHOD, any number)                                |
  |        arrange the m free objects:  m!                                   |
  |        gaps created:                m + 1                                |
  |        place the k restricted:      (m+1)P k   if they are DIFFERENT     |
  |                                     (m+1)C k   if they are IDENTICAL     |
  |        Answer  =  m!  x  (that)                                          |
  |                                                                          |
  |  FIXED POSITIONS                                                         |
  |        fix them, then arrange the remaining (n - k) in (n - k)! ways     |
  |                                                                          |
  |  NEVER BEGINS WITH a given letter                                        |
  |        (total)  -  (those that DO begin with it)                         |
  |                                                                          |
  +--------------------------------------------------------------------------+
```

| Situation | Formula | When to use |
|---|---|---|
| k particular things always together | (n-k+1)! x k! | "all vowels together", "girls sit together" |
| 2 particular things never together | n! - 2!(n-1)! | "A and B are never side by side" |
| no two of k together | m! x (m+1)Pk | "no two girls sit together" |
| no two of k IDENTICAL letters together | (arrangements of rest) x (m+1)Ck | "no two P's adjacent" |
| begins with X, ends with Y | (n-2)! | "starts with M and ends with Y" |
| relative order of some letters kept | n!/(k!) | "vowels in alphabetical order" |

---

# 6. CIRCULAR PERMUTATIONS

```
  +--------------------------------------------------------------------------+
  |                                                                          |
  |   n distinct things around a circle                                      |
  |   (clockwise and anticlockwise are DIFFERENT)     =   (n - 1)!           |
  |                                                                          |
  |   n distinct things around a circle                                      |
  |   (clockwise and anticlockwise are the SAME)      =   (n - 1)! / 2       |
  |         necklaces, garlands, bangles, key rings                          |
  |                                                                          |
  |   r out of n arranged in a circle                 =   nPr / r            |
  |                                                                          |
  |   circle with NUMBERED / marked seats             =   n!                 |
  |         (the circle is really a row)                                     |
  |                                                                          |
  +--------------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| (n-1)! | persons around a round table |
| (n-1)!/2 | garland of flowers, necklace of beads, key ring, chain |
| (n-1)! x k! | k persons always sit together at a round table (glue them) |
| (n-1)! - (n-2)! x 2! | 2 persons never sit together at a round table |
| (m-1)! x mPk | k persons never adjacent: seat the m others first, use the m gaps |
| n! | seats are numbered / the table is not really circular |

**Standard values worth remembering:**
```
   5 persons round a table  =  4!   =     24
   6 persons round a table  =  5!   =    120
   7 persons round a table  =  6!   =    720
   8 persons round a table  =  7!   =   5040
   garland of 6 flowers     =  5!/2 =     60
   garland of 8 flowers     =  7!/2 =   2520
   necklace of 10 beads     =  9!/2 = 181440
```

---

# 7. RANK OF A WORD IN DICTIONARY ORDER

```
  +--------------------------------------------------------------------------+
  |                                                                          |
  |   RANK  =  1  +  SUM over each position of                               |
  |                                                                          |
  |            (number of available letters SMALLER than the actual one)     |
  |                       x                                                  |
  |            (arrangements of the letters remaining after that position)   |
  |                                                                          |
  |   If repeats remain, "arrangements of the rest" means                    |
  |            (remaining count)! / (factorials of the repeats LEFT)         |
  |                                                                          |
  +--------------------------------------------------------------------------+
```

**Worked ranks you should know cold:**

| Word | Total words | Rank |
|---|---|---|
| MASTER | 720 | **257** |
| PRISON | 720 | **438** |
| REMAST | 720 | **391** |
| EAMCET | 360 | **133** |
| RANDOM | 720 | **614** |

---

# 8. COMBINATIONS (SELECTIONS — ORDER DOES NOT MATTER)

```
  +--------------------------------------------------------------------------+
  |                                                                          |
  |                          n!                n(n-1)...(n-r+1)              |
  |      nCr   =   -------------------   =   ---------------------           |
  |                    r! (n - r)!                 r (r-1) ... 1             |
  |                                                                          |
  |      nC0 = nCn = 1        nC1 = n        nCr is ALWAYS a whole number    |
  |                                                                          |
  |                        nPr                                               |
  |      nCr   =   -----------      i.e.    nPr  =  nCr  x  r!               |
  |                        r!                                                |
  |                                                                          |
  +--------------------------------------------------------------------------+
```

## Quick nCr table

| n \ r | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|---|---|---|---|---|---|---|---|---|
| 4 | 1 | 4 | 6 | 4 | 1 | | | |
| 5 | 1 | 5 | 10 | 10 | 5 | 1 | | |
| 6 | 1 | 6 | 15 | 20 | 15 | 6 | 1 | |
| 7 | 1 | 7 | 21 | 35 | 35 | 21 | 7 | 1 |
| 8 | 1 | 8 | 28 | 56 | 70 | 56 | 28 | 8 |
| 9 | 1 | 9 | 36 | 84 | 126 | 126 | 84 | 36 |
| 10 | 1 | 10 | 45 | 120 | 210 | 252 | 210 | 120 |
| 11 | 1 | 11 | 55 | 165 | 330 | 462 | 462 | 330 |
| 12 | 1 | 12 | 66 | 220 | 495 | 792 | 924 | 792 |

---

# 9. PROPERTIES OF nCr

```
  +--------------------------------------------------------------------------+
  |                                                                          |
  |   P1.  nCr  =  nC(n - r)                                                 |
  |                                                                          |
  |   P2.  If nCx = nCy   then   x = y   OR   x + y = n                      |
  |                                                                          |
  |   P3.  nCr + nC(r - 1)  =  (n + 1)Cr            [PASCAL'S RULE]          |
  |                                                                          |
  |   P4.    nCr          n - r + 1                                          |
  |        --------  =  -------------                                        |
  |        nC(r-1)            r                                              |
  |                                                                          |
  |   P5.  n . (n-1)C(r-1)  =  r . nCr                                       |
  |                                                                          |
  |   P6.  nC0 + nC1 + nC2 + ... + nCn  =  2^n                               |
  |                                                                          |
  |   P7.  nC0 + nC2 + nC4 + ...  =  nC1 + nC3 + nC5 + ...  =  2^(n-1)       |
  |                                                                          |
  |   P8.  GREATEST nCr:                                                     |
  |          n EVEN  ->  r = n/2                                             |
  |          n ODD   ->  r = (n-1)/2  or  (n+1)/2   (equal values)           |
  |                                                                          |
  +--------------------------------------------------------------------------+
```

| Property | When to use |
|---|---|
| nCr = nC(n-r) | shrink a big r: 50C47 = 50C3 = 19600 |
| nCx = nCy => x = y or x + y = n | every "find r" question — CHECK BOTH |
| Pascal's rule | the 7-mark "34C5 + sum" simplification question |
| nCr/nC(r-1) = (n-r+1)/r | ratio questions, greatest-term arguments |
| sum = 2^n | "total number of selections" |
| greatest at r = n/2 | objective / EAPCET |

**The telescoping identity (a guaranteed 7-mark question shape):**
```
  +--------------------------------------------------------------------------+
  |                                                                          |
  |   nCr + nC(r-1) = (n+1)Cr    used repeatedly gives                       |
  |                                                                          |
  |   nCn + (n+1)Cn + (n+2)Cn + ... + mCn   =   (m+1)C(n+1)                  |
  |                                                                          |
  |   Example:  34C5 + 34C4 + 35C4 + 36C4 + 37C4 + 38C4  =  39C5             |
  |                                                                          |
  |   Method: keep adding the two LOWEST terms, they always merge.           |
  |     34C5 + 34C4 = 35C5 ; 35C5 + 35C4 = 36C5 ; 36C5 + 36C4 = 37C5 ;       |
  |     37C5 + 37C4 = 38C5 ; 38C5 + 38C4 = 39C5.                             |
  +--------------------------------------------------------------------------+
```

---

# 10. SELECTIONS WITH RESTRICTIONS

```
  +--------------------------------------------------------------------------+
  |                                                                          |
  |   ALWAYS INCLUDE k particular objects   =   (n - k) C (r - k)            |
  |   ALWAYS EXCLUDE k particular objects   =   (n - k) C r                  |
  |                                                                          |
  |   NEVER include 2 particular together                                    |
  |        =  nCr  -  (n - 2) C (r - 2)                                      |
  |                                                                          |
  |   AT LEAST m   ->   add the cases  m, m+1, ..., up to the maximum        |
  |   AT MOST  m   ->   add the cases  0, 1, ..., m                          |
  |                                                                          |
  |   COMMITTEE of p men and q women from m men and w women                  |
  |        =  mCp  x  wCq        (choose men AND women -> multiply)          |
  |                                                                          |
  +--------------------------------------------------------------------------+
```

| Situation | Formula | When to use |
|---|---|---|
| team of r, k must play | (n-k)C(r-k) | "2 particular players always included" |
| team of r, k are banned | (n-k)Cr | "one player always excluded" |
| at least m of a type | sum of cases | "at least 4 bowlers" |
| select then form words | nCr x mCs x (r+s)! | "3 vowels and 2 consonants, form words" |
| at least one from each part | (2^a - 1)(2^b - 1)(2^c - 1) | question-paper choice problems |

---

# 11. DIVIDING INTO GROUPS AND DISTRIBUTING

```
  +--------------------------------------------------------------------------+
  |                                                                          |
  |   UNEQUAL groups of sizes p, q, s   (p + q + s = n)                      |
  |                                     n!                                   |
  |          number of ways  =   ---------------                             |
  |                                p!  q!  s!                                |
  |                                                                          |
  |   EQUAL groups: k groups of size m each  (km = n)                        |
  |                                     n!                                   |
  |          number of ways  =   -----------------                           |
  |                               (m!)^k   x   k!                            |
  |                                                                          |
  |   DISTRIBUTING those groups to k NAMED people: multiply by k!            |
  |                                     n!                                   |
  |          number of ways  =   -----------                                 |
  |                               (m!)^k                                     |
  |                                                                          |
  |   IDENTICAL objects into DISTINCT boxes  (BEGGAR / STARS-AND-BARS)       |
  |          each box may be empty      =   (n + r - 1) C (r - 1)            |
  |          each box at least one      =   (n - 1) C (r - 1)                |
  |                                                                          |
  +--------------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| n!/(p! q! s!) | groups of DIFFERENT sizes |
| n!/((m!)^k k!) | groups of the SAME size, groups unnamed |
| n!/(m!)^k | same-size groups given to named people |
| (n+r-1)C(r-1) | n identical sweets to r children, some may get none |
| (n-1)C(r-1) | n identical sweets to r children, each gets at least one |

**Standard results:**
```
   12 books into groups of 3, 4, 5        =  12!/(3!4!5!)      =  27720
   12 books into 3 equal groups of 4      =  12!/((4!)^3 x 3!) =   5775
   12 books among 3 students, 4 each      =  12!/(4!)^3        =  34650
   12 identical oranges to 4 boys, >= 1   =  11C3              =    165
   12 identical oranges to 4 boys, any    =  15C3              =    455
```

---

# 12. COUNTING IN GEOMETRY

```
  +--------------------------------------------------------------------------+
  |                                                                          |
  |   n points, NO three collinear:                                          |
  |         straight lines  =  nC2                                           |
  |         triangles       =  nC3                                           |
  |         quadrilaterals  =  nC4                                           |
  |                                                                          |
  |   n points of which m are COLLINEAR:                                     |
  |         straight lines  =  nC2 - mC2 + 1                                 |
  |         triangles       =  nC3 - mC3                                     |
  |                                                                          |
  |   CONVEX POLYGON of n sides:                                             |
  |                                       n (n - 3)                          |
  |         diagonals  =  nC2  -  n   =  -----------                         |
  |                                            2                             |
  |         triangles using vertices  =  nC3                                 |
  |                                                                          |
  |   m parallel lines cut by n parallel lines:                              |
  |         parallelograms  =  mC2  x  nC2                                   |
  |                                                                          |
  |   CHESSBOARD (8 x 8):                                                    |
  |         rectangles  =  9C2 x 9C2  =  36 x 36  =  1296                    |
  |         squares     =  1^2 + 2^2 + ... + 8^2  =  204                     |
  |         non-square rectangles     =  1296 - 204  =  1092                 |
  |                                                                          |
  |   HANDSHAKES among n people  =  nC2                                      |
  |   GIFTS exchanged among n people (A to B differs from B to A) = nP2      |
  |                                                                          |
  +--------------------------------------------------------------------------+
```

| Formula | When to use |
|---|---|
| nC2 | lines, chords, handshakes, "each with every other once" |
| nC3 | triangles |
| n(n-3)/2 | diagonals of a polygon (also "find n given the diagonals") |
| nC3 - mC3 | triangles when m points are collinear |
| nC2 - mC2 + 1 | lines when m points are collinear (do not forget the +1) |
| mC2 x nC2 | parallelograms / rectangles from two sets of parallel lines |
| nP2 | gifts, cards sent, ordered pairs — order MATTERS here |

---

# 13. TOTAL SELECTIONS, DIVISORS, SUM OF NUMBERS

```
  +--------------------------------------------------------------------------+
  |                                                                          |
  |   From n DIFFERENT things                                                |
  |        total selections               =  2^n                             |
  |        selections of ONE OR MORE      =  2^n - 1                         |
  |                                                                          |
  |   From p + q + r things where p are alike, q alike, r alike              |
  |        selections of one or more      =  (p+1)(q+1)(r+1) - 1             |
  |                                                                          |
  |   DIVISORS of  N = a^p . b^q . c^s   (a, b, c distinct PRIMES)           |
  |        number of divisors             =  (p+1)(q+1)(s+1)                 |
  |        sum of divisors                =  (1+a+...+a^p)(1+b+...+b^q)      |
  |                                                        (1+c+...+c^s)     |
  |        proper divisors (not 1, not N) =  (p+1)(q+1)(s+1) - 2             |
  |                                                                          |
  |   SUM OF ALL NUMBERS formed by n given non-zero digits, no repetition    |
  |        =  (n - 1)!  x  (sum of the digits)  x  (111...1, n ones)         |
  |                                                                          |
  +--------------------------------------------------------------------------+
```

**Powers of 2 you will need:**
```
   2^1=2   2^2=4    2^3=8    2^4=16   2^5=32
   2^6=64  2^7=128  2^8=256  2^9=512  2^10=1024
```

---

# 14. THE COMPLETE DECISION TABLE

```
  +----------------------------------+---------------------------------------+
  |  THE QUESTION SAYS ...           |  USE ...                              |
  +----------------------------------+---------------------------------------+
  |  arrange / word / number / seat  |  nPr                                  |
  |  select / choose / committee     |  nCr                                  |
  |  team / group / handshake        |  nCr                                  |
  |  repetition allowed              |  n^r                                  |
  |  letters repeated in the word    |  n!/(p! q! r!)                        |
  |  round a table                   |  (n-1)!                               |
  |  garland / necklace / chain      |  (n-1)!/2                             |
  |  always together                 |  glue -> (n-k+1)! x k!                |
  |  never together / no two adjacent|  gap method                           |
  |  dictionary rank                 |  count-before + 1                     |
  |  at least / at most              |  add the cases                        |
  |  always include k                |  (n-k)C(r-k)                          |
  |  divide into equal groups        |  n!/((m!)^k k!)                       |
  |  identical objects into boxes    |  (n+r-1)C(r-1)  or  (n-1)C(r-1)       |
  |  diagonals                       |  n(n-3)/2                             |
  |  triangles with collinear points |  nC3 - mC3                            |
  |  number of divisors              |  (p+1)(q+1)(s+1)                      |
  |  one or more items               |  2^n - 1                              |
  +----------------------------------+---------------------------------------+
```

---

# THE 12 FORMULAE TO WRITE ON YOUR PALM

```
  +--------------------------------------------------------------------------+
  |                                                                          |
  |   1.   AND -> MULTIPLY        OR -> ADD                                  |
  |                                                                          |
  |   2.   0!  =  1                                                          |
  |                                                                          |
  |   3.   nPr  =  n! / (n - r)!  =  n(n-1)(n-2)... [r factors]              |
  |                                                                          |
  |   4.   nCr  =  n! / (r! (n - r)!)         and     nPr = nCr x r!         |
  |                                                                          |
  |   5.   repetition allowed  ->  n^r                                       |
  |                                                                          |
  |   6.   letters repeated    ->  n! / (p! q! r!)                           |
  |                                                                          |
  |   7.   round a table  ->  (n - 1)!        garland  ->  (n - 1)!/2        |
  |                                                                          |
  |   8.   together  ->  (n - k + 1)! x k!                                   |
  |        no two together  ->  arrange the rest, then use the gaps          |
  |                                                                          |
  |   9.   nCr = nC(n-r)      and      nCr + nC(r-1) = (n+1)Cr               |
  |                                                                          |
  |  10.   nCx = nCy   =>   x = y   OR   x + y = n                           |
  |                                                                          |
  |  11.   diagonals = n(n-3)/2        triangles = nC3 - mC3                 |
  |                                                                          |
  |  12.   divisors of a^p b^q c^s  =  (p+1)(q+1)(s+1)                       |
  |        one or more from n different things  =  2^n - 1                   |
  |                                                                          |
  +--------------------------------------------------------------------------+
```

**And the four numbers that show up most often in AP papers:**
```
      MISSISSIPPI    ->   34650
      INDEPENDENCE   ->  1663200   (all vowels together -> 16800)
      MASTER rank    ->     257
      cricket team   ->     560
```
