# Functions — Formula Sheet

Copy this by hand into a notebook. Writing it once beats reading it ten times.
The last column tells you WHEN to use the formula — that is what exams actually test.

---

# 1. ORDERED PAIRS AND CARTESIAN PRODUCT

```
  (a, b) = (c, d)         means     a = c   AND   b = d

  A x B  =  { (a, b)  :  a in A ,  b in B }

  n(A x B)  =  n(A) x n(B)  =  m n
```

| Formula | When to use |
|---------|-------------|
| (a,b) = (c,d) => a=c, b=d | "find x and y if (…) = (…)" |
| n(A x B) = mn | "how many elements in A x B?" |
| A x B is not B x A (unless A = B) | true/false and MCQ |
| A x (B U C) = (A x B) U (A x C) | set-identity proofs |
| A x (B ∩ C) = (A x B) ∩ (A x C) | set-identity proofs |
| A x B is empty <=> A empty or B empty | objective |
| n(A x A) = m^2 | "list A x A" questions |

---

# 2. RELATIONS

```
  R is a relation from A to B   <=>   R is a SUBSET of A x B

  Domain of R  =  set of all FIRST components appearing in R
  Range  of R  =  set of all SECOND components appearing in R
  Codomain     =  the whole set B
```

| Formula | When to use |
|---------|-------------|
| Number of relations from A to B = 2^(mn) | 2-mark counting question |
| Number of relations on A (A to A) = 2^(m^2) | EAPCET objective |
| Range is contained in Codomain, always | conceptual MCQ |

---

# 3. DEFINITION OF A FUNCTION

```
  +-------------------------------------------------------------+
  |                                                             |
  |   f : A -> B  is a FUNCTION  when                           |
  |                                                             |
  |     (1)  EVERY element of A has an image        (no gaps)   |
  |     (2)  NO element of A has TWO images         (no splits) |
  |                                                             |
  |   Arrows LEAVING the left set : exactly ONE each            |
  |   Arrows ARRIVING at the right set : any number, incl. 0    |
  |                                                             |
  +-------------------------------------------------------------+
```

| Test | Rule | When to use |
|------|------|-------------|
| Arrow-diagram test | one arrow out of every left element | diagram questions |
| **Vertical line test** | a vertical line meets the graph at most once | graph questions |
| Horizontal line test — at most once | function is ONE-ONE | injection from a graph |
| Horizontal line test — at least once | function is ONTO | surjection from a graph |

---

# 4. DOMAIN, CODOMAIN, RANGE

```
  DOMAIN    =  all legal INPUTS          (the whole left set A)
  CODOMAIN  =  the promised output set   (the whole right set B)
  RANGE     =  outputs that ACTUALLY occur  =  f(A)

  RANGE  is contained in  CODOMAIN
  RANGE  =  CODOMAIN    <=>   f is ONTO
```

| Fact | When to use |
|------|-------------|
| Range = Codomain <=> onto | every surjection question |
| Domain of f^-1 = Range of f | inverse questions |
| Range of f^-1 = Domain of f | inverse questions |

---

# 5. THE DOMAIN RULES — the most-asked 2 marks

```
  +----------------------------------------------------------------+
  |                                                                |
  |   1.   sqrt( E )          ->    E  >=  0                       |
  |                                                                |
  |              1                                                 |
  |   2.       -----          ->    E  is not 0                    |
  |              E                                                 |
  |                                                                |
  |   3.   log( E )           ->    E  >  0     (strictly)         |
  |                                                                |
  |              1                                                 |
  |   4.     ---------        ->    E  >  0     (both rules)       |
  |           sqrt(E)                                              |
  |                                                                |
  |   MORE THAN ONE CONDITION  ->  take the INTERSECTION           |
  |                                                                |
  +----------------------------------------------------------------+
```

| Formula / shape | Domain | When to use |
|-----------------|--------|-------------|
| 1 / (x - a) | R \ {a} | simple rational |
| 1 / (x^2 - a^2) | R \ {a, -a} | factorise first |
| sqrt(x - a) | [a, inf) | single root |
| sqrt(a - x) | (-inf, a] | reversed root |
| sqrt(a^2 - x^2) | [-a, a] | circle-type root |
| sqrt(x^2 - a^2) | (-inf,-a] U [a, inf) | outside-the-roots root |
| 1 / sqrt(a^2 - x^2) | (-a, a) | open interval, no equality |
| log(x - a) | (a, inf) | single log |
| log(x^2 - a^2) | (-inf,-a) U (a, inf) | quadratic inside a log |
| sqrt(x-a) + sqrt(b-x) | [a, b] if a <= b | two roots, take overlap |
| a^x , e^x , polynomials | R | never restricts anything |

**Sign of a quadratic a x^2 + bx + c with a > 0 and real roots p < q:**

```
  ---------- + ----------o---------- - ----------o---------- + ----------
                         p                       q

     OUTSIDE the roots  ->  POSITIVE
     BETWEEN the roots  ->  NEGATIVE

  "Positive outside, negative in between."   (only when a > 0)
  If a < 0, multiply by -1 first and FLIP the inequality sign.
```

**Bracket rule:**

```
  >=  or  <=    ->   SQUARE bracket   [ ]     the endpoint IS included
  >   or  <     ->   ROUND  bracket   ( )     the endpoint is NOT included
  Infinity ALWAYS gets a round bracket.
```

---

# 6. FINDING THE RANGE

```
  METHOD A   Put y = f(x), make x the SUBJECT, then ask which y are legal.
  METHOD B   Build up from a known range:   x^2 >= 0 ,  |x| >= 0 ,
             sqrt(x) >= 0 ,  a^x > 0
  METHOD C   Read the highest and lowest point off the graph.
```

| Function | Range | When to use |
|----------|-------|-------------|
| x^2 + k | [k, inf) | shifted parabola |
| k - x^2 | (-inf, k] | flipped parabola |
| \|x\| + k | [k, inf) | V shifted up |
| sqrt(a^2 - x^2) | [0, a] | semicircle |
| 1 / x | R \ {0} | reciprocal |
| (x^2 - a^2)/(x - a) | R \ {2a} | after cancelling, a HOLE remains |
| x / (1 + x) | R \ {1} | make x the subject |
| (ax + b)/(cx + d) | R \ {a/c} | the standard family |
| a^x | (0, inf) | exponential |
| log x | R | logarithm |
| [x] | Z | greatest integer |
| x - [x] | [0, 1) | fractional part |
| sgn(x) | {-1, 0, 1} | signum |

---

# 7. THE STANDARD FUNCTIONS — DOMAIN AND RANGE TABLE

| Function | Formula | Domain | Range |
|----------|---------|--------|-------|
| Constant | f(x) = c | R | {c} |
| Identity | f(x) = x | R | R |
| Linear | ax + b, a not 0 | R | R |
| Square | x^2 | R | [0, inf) |
| Cube | x^3 | R | R |
| Modulus | \|x\| | R | [0, inf) |
| Signum | sgn(x) | R | {-1, 0, 1} |
| Greatest integer | [x] | R | Z |
| Fractional part | x - [x] | R | [0, 1) |
| Square root | sqrt(x) | [0, inf) | [0, inf) |
| Reciprocal | 1/x | R \ {0} | R \ {0} |
| Exponential | a^x, a>0, a not 1 | R | (0, inf) |
| Logarithm | log_a x | (0, inf) | R |

**Modulus rules:**

```
  |x| >= 0
  |x| = a  (a > 0)   ->   x = a  or  x = -a
  |x| < a  (a > 0)   ->   -a < x < a
  |x| > a  (a > 0)   ->   x < -a  or  x > a
  |xy| = |x| |y|
  |x + y| <= |x| + |y|
  sqrt(x^2) = |x|          <-- NOT x
```

**Greatest integer rules:**

```
  [x] = x                    when x is an integer
  [x] <= x < [x] + 1
  x - 1 < [x] <= x
  [x + n] = [x] + n          for integer n
  [2.7] = 2 ,  [-2.7] = -3 ,  [-0.5] = -1
```

**Log rules (needed for domain questions):**

```
  log(mn) = log m + log n
  log(m/n) = log m - log n
  log(m^k) = k log m
  log_a(1) = 0 ,  log_a(a) = 1
  log E is defined only when E > 0
  a^(log_a x) = x  and  log_a(a^x) = x
```

---

# 8. TYPES OF FUNCTIONS — DEFINITIONS AND HOW TO PROVE

```
  +-----------------+---------------------------+------------------------+
  |  TYPE           |  DEFINITION               |  HOW TO PROVE IT       |
  +-----------------+---------------------------+------------------------+
  |  ONE-ONE        |  f(a) = f(b) => a = b     |  start "let f(a)=f(b)" |
  |  (injection)    |                           |  finish at "a = b"     |
  +-----------------+---------------------------+------------------------+
  |  MANY-ONE       |  some a not b with        |  ONE counter-example   |
  |                 |  f(a) = f(b)              |  is enough             |
  +-----------------+---------------------------+------------------------+
  |  ONTO           |  Range = Codomain         |  take y in B, solve    |
  |  (surjection)   |  every y has a pre-image  |  y = f(x), show x in A |
  +-----------------+---------------------------+------------------------+
  |  INTO           |  Range smaller than       |  name ONE y with no    |
  |                 |  Codomain                 |  pre-image             |
  +-----------------+---------------------------+------------------------+
  |  BIJECTION      |  one-one AND onto         |  do both proofs, then  |
  |                 |                           |  write the conclusion  |
  +-----------------+---------------------------+------------------------+
```

**The exam skeletons — memorise these word shapes:**

```
  ONE-ONE
      Let a, b be in A with f(a) = f(b).
      ... algebra ...
      Therefore a = b, so f is one-one.

  ONTO
      Let y be any element of B.
      Solving y = f(x) gives x = ...
      This x lies in A, and f(x) = y.
      Therefore every element of B has a pre-image, so f is onto.

  CONCLUSION
      f is one-one and onto, hence f is a bijection.
```

**Instant verdicts:**

| Function | Verdict | Why |
|----------|---------|-----|
| ax + b, R -> R, a not 0 | bijection | strictly monotonic, covers all of R |
| x^2, R -> R | neither | f(-2) = f(2) ; negatives missed |
| x^2, R -> [0, inf) | onto, not one-one | codomain fixed |
| x^2, N -> N | one-one, not onto | 3 has no natural square root |
| x^3, R -> R | bijection | strictly increasing, covers all of R |
| \|x\|, R -> R | neither | V shape, negatives missed |
| a^x, R -> R | one-one, not onto | output never <= 0 |
| a^x, R -> (0, inf) | bijection | codomain fixed |
| log x, (0,inf) -> R | bijection | mirror of a^x |
| constant, R -> R | neither | (unless the domain is a single point) |
| any even power | never one-one over R | f(-a) = f(a) |
| strictly increasing / decreasing | one-one | no repeats possible |

---

# 9. ALGEBRA OF REAL FUNCTIONS

Let `D = D(f) intersect D(g)`.

```
  +--------------------------------------------------------------------+
  |                                                                    |
  |   (f + g)(x) = f(x) + g(x)              domain  D                  |
  |   (f - g)(x) = f(x) - g(x)              domain  D                  |
  |   (f g)(x)   = f(x) . g(x)              domain  D                  |
  |   (c f)(x)   = c . f(x)                 domain  D(f)               |
  |   (f^n)(x)   = [ f(x) ]^n               domain  D(f)               |
  |                                                                    |
  |     f            f(x)                   domain  D  minus           |
  |    ---(x)   =   ------                  { x : g(x) = 0 }           |
  |     g            g(x)                                              |
  |                                                                    |
  |   sqrt(f)(x) = sqrt( f(x) )             domain  { x : f(x) >= 0 }  |
  |                                                                    |
  |   |f|(x)     = | f(x) |                 domain  D(f)               |
  |                                                                    |
  +--------------------------------------------------------------------+
```

| Rule | When to use |
|------|-------------|
| Domain of f ± g and fg = intersection | any "find the domain of f+g" |
| Domain of f/g = intersection minus zeros of g | the extra-marks step |
| Domain of sqrt(f) = where f is non-negative | the ordered-pair question |
| On a finite set, apply the operation to the SECOND components only | f = {(1,2),(2,-3),…} type |

---

# 10. COMPOSITE FUNCTIONS

```
  +--------------------------------------------------------------+
  |                                                              |
  |   (fog)(x)  =  f( g(x) )      do  g  FIRST , then  f         |
  |   (gof)(x)  =  g( f(x) )      do  f  FIRST , then  g         |
  |                                                              |
  |   "The letter nearest to x acts first."                      |
  |                                                              |
  |   Domain of fog = { x in D(g) : g(x) is in D(f) }            |
  |                                                              |
  +--------------------------------------------------------------+
```

| Property | Note |
|----------|------|
| fo(goh) = (fog)oh | associative — always true |
| **fog is generally NOT gof** | not commutative — the standard exam point |
| foI = Iof = f | I is the identity function |
| f and g one-one => gof one-one | proof theorem |
| f and g onto => gof onto | proof theorem |
| f and g bijections => gof bijection | 7-mark theorem |
| (gof)^-1 = f^-1 o g^-1 | **ORDER REVERSES** — 7-mark theorem |
| fog = gof = I => g = f^-1 | how you IDENTIFY an inverse |

---

# 11. INVERSE FUNCTION

```
  +--------------------------------------------------------------+
  |                                                              |
  |   f^-1 exists   <=>   f is a BIJECTION                       |
  |                                                              |
  |   f^-1(y) = x   means   f(x) = y                             |
  |                                                              |
  |   f o f^-1 = I_B          f^-1 o f = I_A                     |
  |                                                              |
  |   Domain of f^-1  =  Range  of f                             |
  |   Range  of f^-1  =  Domain of f                             |
  |                                                              |
  |   Graph of f^-1  =  graph of f reflected in the line y = x   |
  |                                                              |
  +--------------------------------------------------------------+
```

**The three-step recipe:**

```
   STEP 1   write   y = f(x)
   STEP 2   make    x  the subject
   STEP 3   swap letters:   f^-1(x) = (that expression)
```

**Standard inverses worth memorising:**

| f(x) | f^-1(x) | Domain of f^-1 |
|------|---------|----------------|
| ax + b | (x - b)/a | R |
| x^3 | x^(1/3) | R |
| x^2 on [0, inf) | sqrt(x) | [0, inf) |
| a^x | log_a x | (0, inf) |
| log_a x | a^x | R |
| 1/x | 1/x | R \ {0} |
| (ax+b)/(cx+d) | (-dx+b)/(cx-a) | R \ {a/c} |

---

# 12. THE (ax + b)/(cx + d) FAMILY

```
  +----------------------------------------------------------------+
  |               a x + b                                          |
  |    f(x) =   -----------      c not 0 ,   ad - bc not 0         |
  |               c x + d                                          |
  |                                                                |
  |    DOMAIN  =  R  minus  { -d/c }                               |
  |    RANGE   =  R  minus  {  a/c }                               |
  |                                                                |
  |                          -d x + b                              |
  |    f^-1(x)  =  -------------------                             |
  |                           c x - a                              |
  |                                                                |
  |    f : R\{-d/c} -> R\{a/c}   is a BIJECTION                    |
  |                                                                |
  |    a + d = 0    =>    f^-1 = f    (f is its own inverse,       |
  |                                    so (fof)(x) = x)            |
  |                                                                |
  |    ad - bc = 0  =>    f is CONSTANT, not a bijection           |
  |                                                                |
  +----------------------------------------------------------------+
```

| Fact | When to use |
|------|-------------|
| Domain excludes -d/c | 2-mark domain question |
| Range excludes a/c | 2-mark range question |
| a + d = 0 means f o f = I | EAPCET one-liner |
| ad - bc = 0 means f is constant | trick MCQ |

---

# 13. COUNTING FUNCTIONS   (n(A) = m , n(B) = n)

```
  +------------------------------------+-----------------------------+
  |  Number of RELATIONS from A to B   |   2^(mn)                    |
  +------------------------------------+-----------------------------+
  |  Number of FUNCTIONS from A to B   |   n^m                       |
  +------------------------------------+-----------------------------+
  |  Number of ONE-ONE functions       |   nPm = n!/(n-m)!  if n>=m  |
  |                                    |   0                if n< m  |
  +------------------------------------+-----------------------------+
  |  Number of ONTO functions          |   see the formula below     |
  |                                    |   0                if m< n  |
  +------------------------------------+-----------------------------+
  |  Number of BIJECTIONS              |   n!   if m = n             |
  |                                    |   0    otherwise            |
  +------------------------------------+-----------------------------+
  |  Number of CONSTANT functions      |   n                         |
  +------------------------------------+-----------------------------+
```

```
  ONTO formula (inclusion-exclusion), for m >= n :

     n^m  -  nC1 (n-1)^m  +  nC2 (n-2)^m  -  nC3 (n-3)^m  +  ...

  The two cases you will actually meet:

     n = 2  ->   2^m - 2
     n = 3  ->   3^m - 3 . 2^m + 3
```

**Memory line: the BASE is the size of the set you are going TO.**
So it is n^m, never m^n.

| Quick numbers | Value |
|---------------|-------|
| m = 3, n = 2 : functions | 8 |
| m = 3, n = 2 : one-one | 0 |
| m = 3, n = 2 : onto | 6 |
| m = 2, n = 3 : functions | 9 |
| m = 2, n = 3 : one-one | 6 |
| m = 2, n = 3 : onto | 0 |
| m = n = 3 : bijections | 6 |
| m = n = 4 : bijections | 24 |

---

# 14. PIECEWISE FUNCTIONS

```
                 +-  formula 1     on interval 1
     f(x)  =    -|  formula 2     on interval 2
                 +-  formula 3     on interval 3

  TO EVALUATE:  find which interval the input lies in,
                use ONLY that formula.

  DOMAIN     =  the UNION of the intervals listed.
  IF THE INPUT FALLS IN A GAP  ->  "f is NOT DEFINED there."
```

---

# THE 10 THINGS TO WRITE ON YOUR PALM

```
   1.  sqrt(E) needs E >= 0 ;  1/E needs E not 0 ;  log(E) needs E > 0
   2.  Two conditions  ->  take the OVERLAP (intersection)
   3.  ONE-ONE:  let f(a) = f(b)  ->  ...  ->  a = b
   4.  ONTO:     solve y = f(x) for x, show x is in the domain
   5.  BIJECTION = one-one + onto  ->  only then does f^-1 exist
   6.  fog means g FIRST ;  fog is NOT gof
   7.  (gof)^-1 = f^-1 o g^-1        (order reverses)
   8.  Domain of f^-1 = Range of f   (and the other way round)
   9.  (ax+b)/(cx+d):  domain R\{-d/c} , range R\{a/c} ,
                       f^-1(x) = (-dx+b)/(cx-a)
  10.  Counting:  n^m functions ,  nPm one-one ,  n! bijections ,
                  2^(mn) relations
```
