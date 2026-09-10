# Functions — Concepts Explained Simply

Read one topic. Do its worked example. Then move to the next.
Nothing here assumes you remember anything from Class 10.

---

# TOPIC 1 — Ordered pairs

An **ordered pair** is just two things written in a fixed order inside round
brackets: `(a, b)`.

- `a` is called the **first component**.
- `b` is called the **second component**.
- The word **ordered** means the order MATTERS.

```
      (2, 5)        is NOT the same as        (5, 2)
```

Think of a cinema ticket that says **(Row 2, Seat 5)**. If you sit in
Row 5 Seat 2 you are in the wrong place. Same two numbers, different pair.

**Rule for equality of ordered pairs:**

```
  +--------------------------------------------+
  |                                            |
  |   (a, b) = (c, d)   means   a = c          |
  |                       AND   b = d          |
  |                                            |
  +--------------------------------------------+
```

> **TRAP:** In a SET, order does not matter: {2, 5} = {5, 2}.
> In an ORDERED PAIR it does: (2, 5) is not (5, 2).
> Curly brackets = set. Round brackets = ordered pair. Look at the brackets.

### Worked example
Find x and y if (3x - 1, 2y + 5) = (5, 11).

```
  Compare component by component:

     first :   3x - 1 = 5      ->   3x = 6     ->   x = 2
     second:   2y + 5 = 11     ->   2y = 6     ->   y = 3

  Answer:  x = 2 ,  y = 3
```

---

# TOPIC 2 — Cartesian product A x B

Take two sets A and B. The **Cartesian product** `A x B` is the set of ALL
ordered pairs where the first component comes from A and the second from B.

```
  A x B  =  { (a, b)  :  a is in A  and  b is in B }
```

Read the symbol `x` as "cross". Say it out loud: "A cross B".

### The picture — pair EVERY element of A with EVERY element of B

```
      A = {1, 2}                B = {p, q, r}

        1 ------------------------> p
         \--\---------------------> q
          \  \-------------------->  r
                                     
        2 ------------------------> p
         \--\---------------------> q
          \  \--------------------> r

  A x B = { (1,p), (1,q), (1,r), (2,p), (2,q), (2,r) }        6 pairs
```

### The counting rule (a favourite 2-mark question)

```
  +----------------------------------------------------+
  |                                                    |
  |     n(A x B)  =  n(A)  x  n(B)                     |
  |                                                    |
  |     Here:  n(A) = 2 ,  n(B) = 3  ->  2 x 3 = 6     |
  |                                                    |
  +----------------------------------------------------+
```

### The grid view (useful for A x A)

If A = {1, 2, 3}, then A x A has 3 x 3 = 9 pairs. Draw it as a table:

```
              second component
            |   1        2        3
     -------+---------------------------
first    1  | (1,1)    (1,2)    (1,3)
comp-    2  | (2,1)    (2,2)    (2,3)
onent    3  | (3,1)    (3,2)    (3,3)
```

> **TRAP:** A x B is NOT the same as B x A (unless A = B, or one of them is
> empty). In the example above, B x A would start with (p, 1), not (1, p).

### Useful facts

```
  A x (B union C)        =  (A x B) union (A x C)
  A x (B intersect C)    =  (A x B) intersect (A x C)
  A x B = empty set      <=>  A is empty  or  B is empty
  If n(A) = m and n(B) = n , then n(A x B) = mn
```

### Worked example
If A = {1, 2} and B = {3, 4}, write A x B, B x A, and A x A.

```
  A x B = { (1,3), (1,4), (2,3), (2,4) }

  B x A = { (3,1), (3,2), (4,1), (4,2) }        clearly different from A x B

  A x A = { (1,1), (1,2), (2,1), (2,2) }
```

---

# TOPIC 3 — Relations

A **relation** R from A to B is **any subset of A x B**. That is all.
Pick some of the pairs, throw away the rest — what you keep is a relation.

```
  R  is a relation from A to B     means     R  is contained in  A x B
```

If `(a, b)` is in R we write `a R b` and say "a is related to b".

- **Domain of R** = the set of all FIRST components that actually appear in R.
- **Range of R** = the set of all SECOND components that actually appear in R.
- **Codomain of R** = the whole set B (whether used or not).

### Worked example

```
  A = {1, 2, 3, 4}     B = {1, 4, 9, 16, 25}

  R = { (a, b) : b = a^2 }
    = { (1,1), (2,4), (3,9), (4,16) }

  Domain of R   =  {1, 2, 3, 4}
  Range of R    =  {1, 4, 9, 16}
  Codomain      =  {1, 4, 9, 16, 25}       (25 is never used)
```

### How many relations are there?

Every relation is a subset of A x B, and A x B has mn elements.
A set with k elements has 2^k subsets. So:

```
  +--------------------------------------------------------+
  |                                                        |
  |   Number of relations from A to B  =  2^(mn)           |
  |          where  m = n(A) ,  n = n(B)                   |
  |                                                        |
  |   Example: n(A) = 2 , n(B) = 3  ->  2^6  =  64         |
  |                                                        |
  +--------------------------------------------------------+
```

---

# TOPIC 4 — What is a FUNCTION?

A **function** f from A to B is a relation in which

```
  RULE 1   EVERY element of A appears as a first component.
           (nobody in A is left out)

  RULE 2   NO element of A appears TWICE as a first component.
           (nobody in A has two images)
```

Written `f : A -> B`, read "f is a function from A to B".
If (a, b) is in f we write **b = f(a)** and call b the **image** of a,
and a a **pre-image** of b.

### The machine picture

```
              +-----------------+
    x  ---->  |    f  machine   |  ---->  f(x)
              +-----------------+
   INPUT           the RULE            OUTPUT
```

### The arrow-diagram test — look at the LEFT side only

```
  YES, A FUNCTION                    NOT A FUNCTION (Rule 1 broken)
   A          B                        A          B
  +---+     +---+                     +---+     +---+
  | 1 |---->| a |                     | 1 |---->| a |
  | 2 |---->| b |                     | 2 |     | b |       2 has NO arrow
  | 3 |--/  |   |                     | 3 |---->| c |
  +---+     +---+                     +---+     +---+
   every left element has                 2 is left out
   exactly ONE arrow leaving


  YES, A FUNCTION (many-one is fine)  NOT A FUNCTION (Rule 2 broken)
   A          B                        A          B
  +---+     +---+                     +---+     +---+
  | 1 |---->| a |                     | 1 |---->| a |
  | 2 |---->| a |                     | 1 |---->| b |   1 has TWO arrows
  | 3 |---->| b |                     | 2 |---->| c |
  +---+     +---+                     +---+     +---+
   two arrows may ARRIVE at the           forbidden
   same place - that is allowed
```

```
  +------------------------------------------------------------+
  |                                                            |
  |   THE ONE-LINE RULE                                        |
  |                                                            |
  |   Arrows LEAVING a left-hand element : exactly ONE each.   |
  |   Arrows ARRIVING at a right-hand element : any number,    |
  |                                             including 0.   |
  |                                                            |
  +------------------------------------------------------------+
```

> **TRAP:** Students say "two arrows point to the same element, so it is not a
> function." WRONG. That is perfectly legal — it is called many-one.
> Only the LEFT side has rules.

### Worked example
Which of these relations from A = {1, 2, 3} to B = {4, 5, 6} are functions?

```
  R1 = { (1,4), (2,5), (3,6) }        FUNCTION  - all three used once
  R2 = { (1,4), (2,4), (3,4) }        FUNCTION  - many-one, still legal
  R3 = { (1,4), (1,5), (2,6) }        NOT       - 1 appears twice
  R4 = { (1,4), (2,5) }               NOT       - 3 is missing
```

---

# TOPIC 5 — Domain, codomain and range

For `f : A -> B`:

| Name | Symbol | Meaning | Where you look |
|------|--------|---------|----------------|
| **Domain** | A | all the allowed INPUTS | the left set, ALL of it |
| **Codomain** | B | the set outputs are promised from | the right set, ALL of it |
| **Range** | f(A) | the outputs that ACTUALLY appear | only the arrow-heads |

```
        DOMAIN A              CODOMAIN B
        +-------+            +-----------+
        |  1 ---|----------->|--- p      |
        |  2 ---|----------->|--- q      |   <-- RANGE = {p, q}
        |  3 ---|-----/      |    r      |   <-- r is in the codomain
        +-------+            +-----------+       but NOT in the range
```

```
  +---------------------------------------------------+
  |                                                   |
  |    RANGE  is always contained inside  CODOMAIN    |
  |                                                   |
  |    RANGE = CODOMAIN   <=>   the function is ONTO  |
  |                                                   |
  +---------------------------------------------------+
```

### Worked example
f : {1, 2, 3, 4} -> Z is defined by f(x) = x^2 - 1. Find the range.

```
  f(1) = 1 - 1 = 0
  f(2) = 4 - 1 = 3
  f(3) = 9 - 1 = 8
  f(4) = 16 - 1 = 15

  Domain   = {1, 2, 3, 4}
  Codomain = Z  (all integers)
  Range    = {0, 3, 8, 15}
```

---

# TOPIC 6 — The VERTICAL LINE TEST (for graphs)

If the relation is drawn as a graph, you do not need arrow diagrams.

```
  +---------------------------------------------------------------+
  |                                                               |
  |   Slide a VERTICAL line across the whole graph.               |
  |                                                               |
  |   Cuts the curve at MOST ONCE everywhere  ->  FUNCTION        |
  |   Cuts the curve TWICE anywhere           ->  NOT a function  |
  |                                                               |
  +---------------------------------------------------------------+
```

Why? A vertical line is "one fixed x". Two crossings would mean that one x
has two different outputs — Rule 2 broken.

```
   y = x^2   IS a function              x = y^2   is NOT a function
        |                                     |
   \    |    /                                |     ----
    \   |   /                                 |   /
     \  |  /                                  | /
   ---\-+-/---  x                        -----+---------  x
       \|/                                    | \
        |                                     |   \
                                              |     ----
   vertical line hits once            vertical line hits TWICE
```

There is a second test you will need later:

```
  HORIZONTAL LINE TEST  (only for a function)

  every horizontal line meets the graph AT MOST once  ->  ONE-ONE
  every horizontal line meets the graph AT LEAST once ->  ONTO
```

---

# TOPIC 7 — ONE-ONE (injection) and MANY-ONE

**One-one (injection):** different inputs always give different outputs.
No two arrows land on the same point.

```
  ONE-ONE (injection)                MANY-ONE
   A          B                      A          B
  +---+     +---+                   +---+     +---+
  | 1 |---->| a |                   | 1 |---->| a |
  | 2 |---->| b |                   | 2 |---->| a |   <- collision
  | 3 |---->| c |                   | 3 |---->| b |
  +---+     +---+                   +---+     +---+
   no two arrows share               1 and 2 share the image a
   a landing point
```

### The two ways to say the same thing

```
  +---------------------------------------------------------------+
  |                                                               |
  |   f is ONE-ONE  means:                                        |
  |                                                               |
  |     a is not b   =>   f(a) is not f(b)      (the idea)        |
  |                                                               |
  |     f(a) = f(b)  =>   a = b                 (USE THIS ONE)    |
  |                                                               |
  +---------------------------------------------------------------+
```

The second form is the one you write in the exam, because you can DO algebra
with an equals sign. You can do nothing with "is not".

### HOW TO PROVE ONE-ONE — the fixed three lines

```
  Line 1   Let a, b be in A with  f(a) = f(b).
  Line 2   (write out the formula and simplify)
  Line 3   Therefore a = b.  Hence f is one-one (an injection).
```

### Worked example
Show that f : R -> R, f(x) = 4x + 7 is one-one.

```
  Let  f(a) = f(b)

        4a + 7  =  4b + 7
            4a  =  4b            (subtract 7 from both sides)
             a  =  b             (divide both sides by 4)

  So  f(a) = f(b)  forces  a = b.   Therefore f is ONE-ONE.
```

### HOW TO PROVE NOT one-one — give ONE counter-example

You do not need a proof. You need one collision.

```
  f : R -> R ,  f(x) = x^2

      f(2) = 4   and   f(-2) = 4        but  2 is not -2

  Two different inputs, same output.  So f is NOT one-one (many-one).
```

> **TRAP:** to DISPROVE one-one you only need one example. To PROVE it you
> need the general algebra. Never try to prove one-one with examples.

### The graph test

```
   ONE-ONE:  f(x) = 4x + 7             MANY-ONE:  f(x) = x^2
        y                                    y
        |        /                           |
        |      /                          \  |  /
   -----+----/------ x                     \ | /
        |  /                           -----\+/------ x
        |/                                   |
       /|                                    |
     /  |
   every horizontal line               the horizontal line y = 4
   cuts it ONCE                        cuts it TWICE  -> many-one
```

---

# TOPIC 8 — ONTO (surjection) and INTO

**Onto (surjection):** every element of the codomain B is hit by at least one
arrow. Nothing in B is wasted.

```
  ONTO (surjection)                  INTO (not onto)
   A          B                      A          B
  +---+     +---+                   +---+     +---+
  | 1 |---->| a |                   | 1 |---->| a |
  | 2 |---->| b |                   | 2 |---->| b |
  | 3 |--/  |   |                   | 3 |--/  | c |  <- c never used
  | 4 |--/  |   |                   +---+     +---+
  +---+     +---+
   every right-hand element          c has no arrow arriving
   receives at least one arrow       -> NOT onto -> INTO
```

```
  +-------------------------------------------------+
  |                                                 |
  |    ONTO   <=>   RANGE  =  CODOMAIN              |
  |    INTO   <=>   RANGE  is smaller than CODOMAIN |
  |                                                 |
  +-------------------------------------------------+
```

### HOW TO PROVE ONTO — the fixed three lines

```
  Line 1   Let y be any element of B.
  Line 2   Solve  y = f(x)  for x.
  Line 3   Show the x you found really lies in A.
           Then f(x) = y, so every y has a pre-image.  Hence f is ONTO.
```

### Worked example
Show that f : R -> R, f(x) = 4x + 7 is onto.

```
  Let y be any real number.  We want an x with f(x) = y.

        4x + 7  =  y
            4x  =  y - 7
             x  =  (y - 7) / 4

  Since y is real, (y - 7)/4 is also a real number, so x is in R.

  Check:   f( (y-7)/4 )  =  4 [ (y-7)/4 ] + 7  =  (y - 7) + 7  =  y

  Every y in R has a pre-image.  Therefore f is ONTO.
```

### HOW TO PROVE NOT onto — name one element that is missed

```
  f : R -> R ,  f(x) = x^2

      x^2 is never negative, so  -9  is never an output.
      -9 is in the codomain R but not in the range.

  Therefore f is NOT onto.   Range = [0, infinity) which is smaller than R.
```

> **TRAP:** onto depends ENTIRELY on what codomain the question wrote down.
> The SAME formula can be onto or not:
>
> ```
>   f : R -> R ,        f(x) = x^2      NOT onto  (negatives missed)
>   f : R -> [0, inf) , f(x) = x^2      IS onto   (range = codomain)
> ```
> Always read the arrow `->` in the question before you answer.

---

# TOPIC 9 — BIJECTION

```
  +---------------------------------------------------+
  |                                                   |
  |   BIJECTION  =  ONE-ONE  and  ONTO  together      |
  |                                                   |
  |   Also called a "one-one correspondence".         |
  |                                                   |
  +---------------------------------------------------+
```

```
        BIJECTION — perfect pairing, nobody spare on either side
         A                B
        +---+           +---+
        | 1 |---------->| a |
        | 2 |---------->| b |
        | 3 |---------->| c |
        +---+           +---+
```

### The four-box summary

```
  +---------------+-----------------------+-----------------------+
  |               |    ONTO               |    INTO               |
  +---------------+-----------------------+-----------------------+
  |  ONE-ONE      |    BIJECTION          |  one-one into         |
  +---------------+-----------------------+-----------------------+
  |  MANY-ONE     |  many-one onto        |  many-one into        |
  +---------------+-----------------------+-----------------------+
```

### Worked example — the complete 7-mark shape
Show that f : R -> R defined by f(x) = 4x + 7 is a bijection.

```
  STEP 1 : ONE-ONE
     Let f(a) = f(b)
        4a + 7 = 4b + 7
            4a = 4b
             a = b
     So f is one-one.

  STEP 2 : ONTO
     Let y be in R.  Put  y = 4x + 7  ->  x = (y - 7)/4 ,  which is in R.
     Then f(x) = 4[(y-7)/4] + 7 = y.
     So f is onto.

  STEP 3 : CONCLUSION
     f is both one-one and onto, hence f is a BIJECTION.
```

### Quick checks that save time

| Situation | Verdict |
|-----------|---------|
| f(x) = ax + b with a not 0, from R to R | always a bijection |
| Any even power (x^2, x^4, \|x\|) from R to R | never one-one |
| Strictly increasing or strictly decreasing on its whole domain | one-one |
| n(A) is not n(B) and both are finite | bijection impossible |

---

# TOPIC 10 — Constant, identity and equal functions

## Constant function

Every input gives the SAME output.

```
   f(x) = c   for all x

        A               B
       +---+          +---+
       | 1 |--\       | c |     all arrows land on one point
       | 2 |---+----->|   |
       | 3 |--/       | d |
       +---+          +---+

   Domain = R ,   Range = { c }   (a single element)

   GRAPH:  a horizontal straight line
                 y
                 |
        ---------+--------- y = c
                 |
        ---------+--------- x
                 |
```

A constant function is many-one (unless the domain has only one element),
and it is into (unless the codomain is just {c}).

## Identity function

The "do-nothing" machine. Written I or I_A.

```
   I(x) = x   for all x

        A               A
       +---+          +---+
       | 1 |--------->| 1 |
       | 2 |--------->| 2 |
       | 3 |--------->| 3 |
       +---+          +---+

   Domain = R ,   Range = R ,   it IS a bijection

   GRAPH:  the 45-degree line through the origin
                 y
                 |      /
                 |    /
                 |  /
        ---------+/--------- x
                /|
              /  |
```

The identity function is the reason `f o f^-1 = I` makes sense.

## Equal functions

```
  +----------------------------------------------------------+
  |                                                          |
  |   f = g   requires BOTH:                                 |
  |                                                          |
  |     1.  same DOMAIN                                      |
  |     2.  f(x) = g(x)  for every x in that domain          |
  |                                                          |
  +----------------------------------------------------------+
```

> **TRAP:** the classic exam pair
>
> ```
>            x^2 - 4
>   f(x) =  ---------          g(x) = x + 2
>             x - 2
> ```
>
> The algebra cancels to x + 2, BUT f is not defined at x = 2 while g is.
> Different domains, so **f is NOT equal to g**.

### Worked example
Are f(x) = |x| and g(x) = sqrt(x^2) equal functions on R?

```
  Domain of f = R.        Domain of g = R  (x^2 is never negative).

  For any x:   sqrt(x^2) = |x|      (the square root symbol means the
                                     NON-NEGATIVE root)

  Same domain and same values.   So YES, f = g.
```

---

# TOPIC 11 — The standard real functions and their graphs

Learn each one as: **formula -> domain -> range -> picture**.

## 11.1 Polynomial functions

```
  f(x) = a0 + a1 x + a2 x^2 + ... + an x^n
```

| Function | Domain | Range |
|----------|--------|-------|
| Constant f(x) = c | R | {c} |
| Linear f(x) = ax + b, a not 0 | R | R |
| f(x) = x^2 | R | [0, infinity) |
| f(x) = x^3 | R | R |

```
        f(x) = x^2                       f(x) = x^3
            y                                 y
            |                                 |        /
      \     |     /                           |       /
       \    4    /                            |     _/
        \   |   /                             |   _/
         \  1  /                       -------+--/--------- x
    ------\-+-/------- x                    _/|
       -2  \|/  2                          /  |
            0                             /   |

  Domain R , Range [0, inf)          Domain R , Range R
  many-one, into                     one-one, onto -> BIJECTION
```

## 11.2 Rational function

```
             p(x)
    f(x) = --------      where p, q are polynomials
             q(x)

    DOMAIN = R  minus  { all x where q(x) = 0 }
```

## 11.3 Modulus (absolute value) function

```
              +-  x     if x >= 0
    |x|  =   -|
              +- -x     if x <  0

    Domain = R           Range = [0, infinity)

              y
              |
      \       3      /
       \      |     /
        \     2    /
         \    |   /
          \   1  /
   --------\--+--/--------- x
      -3 -2 -1 0 1 2 3
            the "V"

    many-one (|3| = |-3| = 3) , into if codomain is R
```

Useful facts:

```
   |x| >= 0  always
   |x| = a   ( a > 0 )   ->   x = a  or  x = -a
   |x| < a   ( a > 0 )   ->   -a < x < a
   |x| > a   ( a > 0 )   ->   x < -a  or  x > a
   |x + y| <= |x| + |y|
```

## 11.4 Signum function

```
                 +-   1    if x > 0
    sgn(x)  =   -|    0    if x = 0
                 +-  -1    if x < 0

    Also written  sgn(x) = |x| / x  for x not 0.

    Domain = R           Range = { -1, 0, 1 }

              y
              |
        1     |  o----------------
              |
   -----------o-----------------  x
              |0
              |
   -----------o    -1
              |

    ( o = open circle, the point is not included there )

    many-one and into
```

## 11.5 Greatest integer (floor / step) function

```
    [x]  =  the greatest INTEGER that is less than or equal to x
            "round DOWN, always"

    Domain = R           Range = Z  (the set of all integers)
```

```
    [2.7] = 2        [5] = 5        [0.3] = 0
    [-2.7] = -3      <-- NOT -2 !  Round DOWN on the number line.
    [-0.5] = -1

              y
              |
          3   |            o-----
          2   |       o-----
          1   |  o-----
   -----------+-----------------  x
       -2 -1  0  1  2  3
         o----     (each step is closed on the left, open on the right)
   -1  o----
   -2 ----
```

> **TRAP:** [-2.7]. Students write -2. It is **-3**, because -3 is less than
> -2.7 and -2 is greater. "Greatest integer NOT EXCEEDING x."

Facts:

```
   [x] = x            when x is an integer
   [x] <= x < [x] + 1
   x - 1 < [x] <= x
   [x + n] = [x] + n  when n is an integer
```

## 11.6 Exponential function

```
    f(x) = a^x        with  a > 0  and  a not equal to 1
    Most common case:  f(x) = e^x

    Domain = R                 Range = (0, infinity)
    NEVER zero, NEVER negative.

              y                              y
              |        /                     |
              |       /                  \   |
              |      /                    \  |
              |   __/                      \_|__
        ------+--/--------- x         -------+---\------- x
              1                              1     \___
        a > 1  : INCREASING            0 < a < 1 : DECREASING

    passes through (0, 1) always, because a^0 = 1
    one-one ; onto only if the codomain is written as (0, infinity)
```

## 11.7 Logarithmic function

```
    f(x) = log_a(x)     with  a > 0 , a not 1 , and  x > 0

    Domain = (0, infinity)      Range = R

              y
              |        ______
              |    ___/
              |  _/
        ------+-/---------------- x
              |1
              /
             /|
            / |

    passes through (1, 0) always, because log_a(1) = 0
    It is the MIRROR IMAGE of a^x in the line y = x.
    one-one and onto R  ->  BIJECTION
```

Log rules you will need for domains:

```
   log(mn)   = log m + log n
   log(m/n)  = log m - log n
   log(m^k)  = k log m
   log_a(1)  = 0
   log_a(a)  = 1
   log x is defined ONLY for x > 0
```

## 11.8 Square root function

```
    f(x) = sqrt(x)

    Domain = [0, infinity)      Range = [0, infinity)

              y
              |        ______
              |   ____/
              |  /
              | /
        ------+/----------------- x
              0

    one-one ; the output is NEVER negative
```

## 11.9 Reciprocal function

```
              1
    f(x) =  -----
              x

    Domain = R minus {0}        Range = R minus {0}

                  y
                  |
             \    |
              \   |         (branch in the first quadrant)
               \__|__
        ----------+----------- x
             __   |   \__
            /     |      \
           /      |       \
                  |
       (branch in the third quadrant)

    one-one ; onto R minus {0}
```

## THE MASTER TABLE — copy this into your notebook

| Function | Domain | Range |
|----------|--------|-------|
| c (constant) | R | {c} |
| x (identity) | R | R |
| ax + b (a not 0) | R | R |
| x^2 | R | [0, inf) |
| x^3 | R | R |
| \|x\| | R | [0, inf) |
| sgn(x) | R | {-1, 0, 1} |
| [x] | R | Z |
| x - [x] (fractional part) | R | [0, 1) |
| sqrt(x) | [0, inf) | [0, inf) |
| 1/x | R \ {0} | R \ {0} |
| a^x (a > 0, a not 1) | R | (0, inf) |
| log_a x | (0, inf) | R |
| sqrt(a^2 - x^2) | [-a, a] | [0, a] |
| 1 / sqrt(a^2 - x^2) | (-a, a) | [1/a, inf) |

---

# TOPIC 12 — FINDING THE DOMAIN (the most-asked 2-mark question)

Domain = every real x for which the formula makes sense.
Only THREE things can break a formula.

```
  +--------------------------------------------------------------+
  |                                                              |
  |   1.  sqrt( SOMETHING )     ->   SOMETHING  >=  0            |
  |                                                              |
  |   2.  ANY / BOTTOM          ->   BOTTOM  not equal to 0      |
  |                                                              |
  |   3.  log( SOMETHING )      ->   SOMETHING  >  0             |
  |                                                              |
  |   Both a square root AND a denominator?                      |
  |   -> the inside must be STRICTLY greater than 0.             |
  |                                                              |
  +--------------------------------------------------------------+
```

## Worked example 1 — a denominator

```
                1
    f(x) =  ---------
             x^2 - 1

    Bottom must not be 0:     x^2 - 1  is not 0
                              (x - 1)(x + 1)  is not 0
                              x is not 1  and  x is not -1

    DOMAIN  =  R  minus  { 1 , -1 }
```

## Worked example 2 — a square root

```
    f(x) = sqrt(4 - x^2)

    Inside must be >= 0:      4 - x^2  >=  0
                              x^2  <=  4
                              -2  <=  x  <=  2

    DOMAIN  =  [ -2 , 2 ]
```

## Worked example 3 — square root of a quadratic that FACTORS

```
    f(x) = sqrt(x^2 - 3x + 2)

    x^2 - 3x + 2  >=  0
    (x - 1)(x - 2)  >=  0

    Critical points 1 and 2 split the line into three pieces.
    Test one number from each piece:

        x = 0 :  (0-1)(0-2) = (-1)(-2) = +2   POSITIVE   -> allowed
        x = 1.5: (0.5)(-0.5) = -0.25          NEGATIVE   -> not allowed
        x = 3 :  (2)(1) = 2                   POSITIVE   -> allowed

    -------- + --------o--------- - --------o-------- + --------
                       1                    2

    DOMAIN  =  ( -inf , 1 ]  union  [ 2 , inf )
    (square brackets, because >= allows equality)
```

## Worked example 4 — a log

```
    f(x) = log( x^2 - 4x + 3 )

    Inside must be > 0:   x^2 - 4x + 3  >  0
                          (x - 1)(x - 3)  >  0

        test x = 0 : (+)(+) -> positive   allowed
        test x = 2 : (1)(-1) = -1         not allowed
        test x = 4 : (3)(1) = 3           allowed

    DOMAIN  =  ( -inf , 1 )  union  ( 3 , inf )
    (round brackets, because > does NOT allow equality)
```

## Worked example 5 — two conditions at once

```
                 1
    f(x) =  -------------
             sqrt(x - 2)

    Square root  ->  x - 2 >= 0
    It is also the BOTTOM  ->  sqrt(x - 2) is not 0  ->  x - 2 is not 0

    Combine:   x - 2 > 0   ->   x > 2

    DOMAIN  =  ( 2 , infinity )
```

## Worked example 6 — a sum of two square roots

```
    f(x) = sqrt(x - 1) + sqrt(3 - x)

    First root :  x - 1 >= 0   ->   x >= 1
    Second root:  3 - x >= 0   ->   x <= 3

    BOTH must hold at the same time -> take the OVERLAP:

        ----------[==========]----------
                  1          3

    DOMAIN  =  [ 1 , 3 ]
```

> **TRAP:** with two or more conditions, students take the union.
> You must take the **INTERSECTION** — every condition has to hold together.

## The sign-of-a-quadratic shortcut

```
  For a quadratic  a x^2 + b x + c  with a > 0 and REAL distinct roots p < q:

      OUTSIDE the roots ( x < p  or  x > q )  ->  POSITIVE
      BETWEEN the roots ( p < x < q )         ->  NEGATIVE

  Memory line: "positive outside, negative in between" (when a > 0).

  If a < 0, multiply the whole inequality by -1 FIRST and flip the sign.
```

---

# TOPIC 13 — FINDING THE RANGE

Range = every value that actually comes out.

## Method A — make x the subject, then ask what y is allowed

```
              x
    f(x) =  -------
             1 + x

    Put y = x / (1 + x)
        y (1 + x) = x
        y + xy = x
        y = x - xy = x(1 - y)
                y
        x  =  ------- ,   which needs  1 - y  not equal to 0
               1 - y

    So y can be anything except 1.

    RANGE  =  R  minus  {1}
```

## Method B — use the known range of a standard piece

```
    f(x) = x^2 + 5

    x^2 >= 0  always
    so  x^2 + 5 >= 5

    RANGE  =  [ 5 , infinity )
```

```
    f(x) = sqrt(9 - x^2)

    Domain: 9 - x^2 >= 0  ->  -3 <= x <= 3
    Inside runs from 0 (at x = ±3) up to 9 (at x = 0)
    sqrt of that runs from 0 up to 3

    RANGE  =  [ 0 , 3 ]
```

## Method C — read it off the graph

```
    f(x) = |x| - 2

              y
              |
       \      |      /
        \     |     /
   -------\---+---/------- x
           \  |  /
            \_|_/
              -2       lowest point

    RANGE = [ -2 , infinity )
```

## The "hole" case — a very common 2-mark question

```
             x^2 - 4
    f(x) =  ---------
              x - 2

    Cancel:  f(x) = x + 2 ,   BUT x cannot be 2.
    So the output x + 2 can never be 2 + 2 = 4.

    DOMAIN  =  R minus {2}
    RANGE   =  R minus {4}
```

> **TRAP:** after cancelling, students forget the missing point.
> The cancellation removes the hole from the FORMULA, not from the FUNCTION.

---

# TOPIC 14 — Algebra of real functions

Let f and g be real functions with domains D(f) and D(g).
Write `D = D(f) intersect D(g)` — the values where BOTH are alive.

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   (f + g)(x)  =  f(x) + g(x)              domain  D               |
  |   (f - g)(x)  =  f(x) - g(x)              domain  D               |
  |   (f g)(x)    =  f(x) . g(x)              domain  D               |
  |   (c f)(x)    =  c . f(x)                 domain  D(f)            |
  |                                                                   |
  |    f          f(x)                        domain  D  minus        |
  |   ---(x)  =  ------                       { x : g(x) = 0 }        |
  |    g          g(x)                                                |
  |                                                                   |
  +-------------------------------------------------------------------+
```

### Worked example 1 — with formulas

```
    f(x) = sqrt(x)        D(f) = [0, inf)
    g(x) = x - 3          D(g) = R

    D = [0, inf) intersect R = [0, inf)

    (f + g)(x) = sqrt(x) + x - 3          domain [0, inf)
    (f g)(x)   = x^(1/2) (x - 3)          domain [0, inf)

     f          sqrt(x)
    ---(x)  =  ---------                  domain [0, inf) minus {3}
     g           x - 3                    i.e.  [0, 3) union (3, inf)
```

### Worked example 2 — with ordered pairs (a classic AP 2-marker)

```
    f = { (1, 2), (2, -3), (3, -1) }

    2f      = { (1, 4), (2, -6), (3, -2) }        double every output

    f^2     = { (1, 4), (2, 9), (3, 1) }          square every output

    2 + f   = { (1, 4), (2, -1), (3, 1) }         add 2 to every output

    sqrt(f) = { (1, sqrt 2) }
              only x = 1 survives, because -3 and -1 are NEGATIVE and
              sqrt of a negative number is not a real number
```

> **TRAP:** in the sqrt(f) part, students list all three pairs.
> Throw away every pair whose second component is negative.

---

# TOPIC 15 — Composite functions  fog and gof

A composite is two machines wired in series.

```
   (fog)(x)  =  f( g(x) )        read RIGHT to LEFT:  do g FIRST, then f

               +-----+          +-----+
      x  ----->|  g  |--g(x)--->|  f  |-----> f(g(x))
               +-----+          +-----+
                first            second


   (gof)(x)  =  g( f(x) )        do f FIRST, then g

               +-----+          +-----+
      x  ----->|  f  |--f(x)--->|  g  |-----> g(f(x))
               +-----+          +-----+
```

> **TRAP:** the letter written FIRST acts LAST. In `fog`, g goes first.
> Memory line: **"the one nearest to x goes first."**

### Chain of sets

```
     g : A -> B      f : B -> C        =>      fog : A -> C
                                               (careful: many books write
                                               fog when g : A -> B first)

   The output of the inner machine must be a LEGAL INPUT of the outer one.
```

### Worked example 1

```
    f(x) = 2x - 1        g(x) = x^2 + 2

    (fog)(x) = f( g(x) ) = f( x^2 + 2 )
                         = 2(x^2 + 2) - 1
                         = 2x^2 + 4 - 1
                         = 2x^2 + 3

    (gof)(x) = g( f(x) ) = g( 2x - 1 )
                         = (2x - 1)^2 + 2
                         = 4x^2 - 4x + 1 + 2
                         = 4x^2 - 4x + 3

    2x^2 + 3   is NOT   4x^2 - 4x + 3

    Therefore  fog  is not equal to  gof.
```

That worked example IS the standard exam answer to
"Show that fog is not equal to gof."

### Worked example 2 — numerical version

```
    f(x) = 3x - 1 ,  g(x) = x^2 + 1.   Find (fog)(2) and (gof)(2).

    (fog)(2) = f( g(2) ) = f( 4 + 1 ) = f(5) = 3(5) - 1 = 14

    (gof)(2) = g( f(2) ) = g( 6 - 1 ) = g(5) = 25 + 1   = 26
```

### Worked example 3 — when they ARE equal (that means inverses)

```
    f(x) = 2x - 1 ,   g(x) = (x + 1)/2

    (gof)(x) = g(2x - 1) = ((2x - 1) + 1)/2 = 2x/2 = x

    (fog)(x) = f((x+1)/2) = 2 . (x+1)/2 - 1 = (x + 1) - 1 = x

    Both give the identity function.  So  g = f^-1.
```

### Properties

```
   fo(goh) = (fog)oh                     composition IS associative
   foI = Iof = f                         I is the identity function
   fog is generally NOT gof              composition is NOT commutative

   If f and g are both one-one  ->  gof is one-one
   If f and g are both onto     ->  gof is onto
   If f and g are both bijections -> gof is a bijection

   (gof)^-1  =  f^-1 o g^-1              <-- ORDER REVERSES
```

Why the order reverses: to undo "put on socks, then shoes" you must
"take off shoes, then socks."

---

# TOPIC 16 — Inverse of a function

```
  +---------------------------------------------------------------+
  |                                                               |
  |   f^-1 exists   IF AND ONLY IF   f is a BIJECTION             |
  |                                                               |
  |   f^-1 : B -> A  ,  and   f^-1(y) = x   means   f(x) = y      |
  |                                                               |
  |   f o f^-1 = I_B          f^-1 o f = I_A                      |
  |                                                               |
  |   Domain of f^-1  =  Range  of f                              |
  |   Range  of f^-1  =  Domain of f                              |
  |                                                               |
  +---------------------------------------------------------------+
```

Why a bijection is needed:

```
   NOT one-one -> two inputs share an output -> going back, which one
                  do we return to?  Ambiguous.  No inverse.

   NOT onto    -> some y has no arrow arriving -> going back from that y
                  leads nowhere.  No inverse.
```

### THE THREE-STEP RECIPE

```
   STEP 1   Write  y = f(x).
   STEP 2   Rearrange until  x = (something in y).
   STEP 3   Replace y by x:   f^-1(x) = (that something).
```

### Worked example 1

```
    f : R -> R ,  f(x) = 4x + 7

    y = 4x + 7
    y - 7 = 4x
    x = (y - 7) / 4

                     x - 7
    So   f^-1(x)  =  -------
                        4

    CHECK:  f( f^-1(x) ) = 4 [ (x-7)/4 ] + 7 = x - 7 + 7 = x   correct
```

### Worked example 2 — the (ax + b)/(cx + d) type (AP favourite)

```
                      x - 3
    f(x)  =  ---------------------      f : R\{2} -> R\{1}
                      x - 2

    STEP 1     y = (x - 3)/(x - 2)

    STEP 2     y(x - 2) = x - 3
               xy - 2y = x - 3
               xy - x = 2y - 3
               x(y - 1) = 2y - 3
                      2y - 3
               x  =  --------          needs y not equal to 1
                       y - 1

    STEP 3               2x - 3
               f^-1(x) = --------  ,   x not equal to 1
                          x - 1
```

Notice: the excluded value in the DOMAIN of f was x = 2, and it reappears as
the excluded value in the RANGE of f^-1. That is the swap rule in action.

### The graph fact

```
   The graph of f^-1 is the MIRROR IMAGE of the graph of f in the line y = x.

              y        y = x
              |       /
              |     /   ____ f
              |   /  __/
              | / __/
        ------+/-------------- x
             /|  \__
           /  |     \___  f^-1
```

That is exactly why e^x and log x look like mirror images of each other.

---

# TOPIC 17 — The (ax + b)/(cx + d) family — everything on one page

```
              a x + b
    f(x) =  ----------- ,     with  c not 0  and  ad - bc not 0
              c x + d
```

```
  +----------------------------------------------------------------+
  |                                                                |
  |   DOMAIN   =  R  minus  { -d/c }      (bottom cannot be 0)     |
  |                                                                |
  |   RANGE    =  R  minus  {  a/c }      (that value is never     |
  |                                        reached)                |
  |                                                                |
  |                       -d x + b                                 |
  |   INVERSE  f^-1(x) = -----------                               |
  |                        c x - a                                 |
  |                                                                |
  |   f is a BIJECTION from  R\{-d/c}  onto  R\{a/c}               |
  |                                                                |
  |   If  a + d = 0  then  f^-1 = f   (f is its own inverse)       |
  |                                                                |
  +----------------------------------------------------------------+
```

### Where the range comes from (the derivation the examiner wants)

```
    y = (ax + b)/(cx + d)
    y(cx + d) = ax + b
    cxy + dy = ax + b
    cxy - ax = b - dy
    x(cy - a) = b - dy
              b - dy
    x  =  ------------      this needs  cy - a  not equal to 0
              cy - a

    So  y  can never be  a/c.        RANGE = R minus { a/c }
```

### Worked example — the self-inverse case

```
              2x + 1
    f(x) =  ---------        here a = 2, b = 1, c = 3, d = -2
              3x - 2

    ad - bc = (2)(-2) - (1)(3) = -4 - 3 = -7 ,  not 0 , so f is a bijection.

    Domain = R minus {2/3}       (3x - 2 = 0 at x = 2/3)
    Range  = R minus {2/3}       (a/c = 2/3)

    Inverse:   y(3x - 2) = 2x + 1
               3xy - 2y = 2x + 1
               3xy - 2x = 2y + 1
               x(3y - 2) = 2y + 1
               x = (2y + 1)/(3y - 2)

                          2x + 1
               f^-1(x) = --------- = f(x)
                          3x - 2

    Since a + d = 2 + (-2) = 0, f is its OWN inverse.  (fof)(x) = x.
```

---

# TOPIC 18 — Counting functions from A to B

Let `n(A) = m` and `n(B) = n`. Every element of A must choose one image in B,
independently of the others.

```
  +------------------------------------------------------------------+
  |                                                                  |
  |   Number of RELATIONS from A to B      =  2^(mn)                 |
  |                                                                  |
  |   Number of FUNCTIONS from A to B      =  n^m                    |
  |            (each of the m inputs has n choices)                  |
  |                                                                  |
  |   Number of ONE-ONE functions          =  nPm = n! / (n - m)!    |
  |            valid only when  n >= m ;  otherwise  0               |
  |                                                                  |
  |   Number of ONTO functions             =  see below              |
  |            valid only when  m >= n ;  otherwise  0               |
  |                                                                  |
  |   Number of BIJECTIONS                 =  n!  when m = n         |
  |                                           0   otherwise          |
  |                                                                  |
  |   Number of CONSTANT functions         =  n                      |
  |                                                                  |
  +------------------------------------------------------------------+
```

### Why n^m and not m^n

```
      A = {1, 2, 3}          B = {a, b}          m = 3 , n = 2

      input 1  can go to  a or b       ->  2 choices
      input 2  can go to  a or b       ->  2 choices
      input 3  can go to  a or b       ->  2 choices

      Total  =  2 x 2 x 2  =  2^3  =  8  =  n^m
```

**Memory line: the BASE is the size of the set you are going TO.**

### One-one functions — no repeats allowed

```
      A = {1, 2}          B = {p, q, r}          m = 2 , n = 3

      input 1 has 3 choices
      input 2 has only 2 left (it may not repeat input 1's image)

      Total = 3 x 2 = 6  =  3P2  =  3! / 1!  =  6

      If m > n, two inputs MUST collide (pigeonhole), so the answer is 0.
```

### Onto functions

```
   Formula (inclusion-exclusion), for m >= n:

      number of onto functions
        =  n^m  -  nC1 (n-1)^m  +  nC2 (n-2)^m  -  nC3 (n-3)^m  + ...

   The two cases you actually need:

      n = 2 :   2^m - 2
      n = 3 :   3^m - 3 . 2^m + 3
```

### Worked example

```
    n(A) = 3 , n(B) = 2.   Count everything.

    Relations   =  2^(3 x 2)  =  2^6  =  64
    Functions   =  n^m = 2^3  =  8
    One-one     =  0            (m = 3 > n = 2 , collisions forced)
    Onto        =  2^3 - 2 = 6  (throw out the 2 constant functions)
    Bijections  =  0            (m is not n)
    Constants   =  2
```

```
    n(A) = 2 , n(B) = 3.   Count everything.

    Relations   =  2^6  =  64
    Functions   =  3^2  =  9
    One-one     =  3P2  =  6
    Onto        =  0            (only 2 arrows for 3 targets)
    Bijections  =  0
    Constants   =  3
```

---

# TOPIC 19 — Piecewise-defined functions

One function, different formulas on different stretches of the number line.

```
                +-  3x - 2      if  x > 3
                |
     f(x)  =   -|  x^2 - 2      if  -2 <= x <= 2
                |
                +-  2x + 1      if  x < -3
```

**How to evaluate:** find which line the input belongs to, then use ONLY that
line's formula.

### Worked example (this exact style appears in the AP textbook)

```
    f(4)    :  4 > 3           ->  3(4) - 2   =  10
    f(2.5)  :  2.5 is NOT > 3, and NOT in [-2, 2], and NOT < -3
                               ->  f(2.5) is NOT DEFINED
    f(-2)   :  -2 is in [-2,2] ->  (-2)^2 - 2 =  2
    f(0)    :  0 is in [-2,2]  ->  0 - 2      = -2
    f(-4)   :  -4 < -3         ->  2(-4) + 1  = -7
    f(-7)   :  -7 < -3         ->  2(-7) + 1  = -13
```

> **TRAP:** the gaps. Between 2 and 3, and between -3 and -2, NO formula
> applies. The honest answer is "not defined". Students invent a value and
> lose the mark. Always check the intervals cover your input.

The domain of that f is:

```
     ( -inf , -3 )   union   [ -2 , 2 ]   union   ( 3 , inf )
```

---

# TOPIC 20 — The full classification drill

Determine whether each is an injection, a surjection, both, or neither.

```
  +---------------------------+------------+------------+----------------+
  |  Function                 |  ONE-ONE?  |   ONTO?    |  Verdict       |
  +---------------------------+------------+------------+----------------+
  |  f: R -> R , f(x)=2x+1    |    YES     |    YES     |  bijection     |
  |  f: R -> R , f(x)=x^2     |    NO      |    NO      |  neither       |
  |  f: R -> [0,inf), x^2     |    NO      |    YES     |  surjection    |
  |  f: N -> N , f(x)=x^2     |    YES     |    NO      |  injection     |
  |  f: R -> R , f(x)=x^3     |    YES     |    YES     |  bijection     |
  |  f: R -> R , f(x)=|x|     |    NO      |    NO      |  neither       |
  |  f: R -> (0,inf), f=2^x   |    YES     |    YES     |  bijection     |
  |  f: R -> R , f(x)=2^x     |    YES     |    NO      |  injection     |
  |  f: R -> R , f(x)=5       |    NO      |    NO      |  neither       |
  |  f: R -> R , f(x)=sin x   |    NO      |    NO      |  neither       |
  +---------------------------+------------+------------+----------------+
```

Read the table twice. Notice that in rows 2, 3 and 4 the FORMULA never changed
— only the sets did. **The sets decide the answer.**

### Worked example — the full write-up

```
    Is  f : N -> N ,  f(x) = x^2  an injection?  A surjection?

    ONE-ONE:
        Let f(a) = f(b) with a, b in N.
            a^2 = b^2
            a^2 - b^2 = 0
            (a - b)(a + b) = 0
        Since a, b are natural numbers, a + b > 0, so a + b is not 0.
        Hence a - b = 0, i.e. a = b.
        Therefore f is ONE-ONE (an injection).

    ONTO:
        Take y = 3 in the codomain N.
        We would need x^2 = 3, i.e. x = sqrt(3), which is NOT a natural number.
        So 3 has no pre-image.
        Therefore f is NOT ONTO (it is an injection into N).
```

Note how the phrase "since a, b are natural numbers, a + b > 0" is doing all
the work. Over R the same argument fails, because a = -b is possible.

---

# TOPIC 21 — The five theorems the 7-mark question is built from

You do not need to memorise the proofs word-for-word, but you must be able to
reproduce these lines.

## Theorem 1 — f o f^-1 = I and f^-1 o f = I

```
    Let f : A -> B be a bijection, so f^-1 : B -> A exists.

    Take any a in A.  Let f(a) = b.  Then by definition f^-1(b) = a.

        (f^-1 o f)(a) = f^-1( f(a) ) = f^-1(b) = a = I_A(a)

    True for every a, so   f^-1 o f = I_A.

    Take any b in B.  Since f is onto, b = f(a) for some a, and f^-1(b) = a.

        (f o f^-1)(b) = f( f^-1(b) ) = f(a) = b = I_B(b)

    True for every b, so   f o f^-1 = I_B.
```

## Theorem 2 — the composite of two bijections is a bijection

```
    Let f : A -> B and g : B -> C both be bijections.

    ONE-ONE:  suppose (gof)(a1) = (gof)(a2)
                  g( f(a1) ) = g( f(a2) )
              g is one-one   ->   f(a1) = f(a2)
              f is one-one   ->   a1 = a2                so gof is one-one

    ONTO:     let c be in C.
              g is onto  ->  there is b in B with g(b) = c
              f is onto  ->  there is a in A with f(a) = b
              Then (gof)(a) = g(f(a)) = g(b) = c          so gof is onto

    Hence gof is a bijection.
```

## Theorem 3 — (gof)^-1 = f^-1 o g^-1

```
    Both f and g are bijections, so gof is a bijection and (gof)^-1 exists.

    ( f^-1 o g^-1 ) o ( g o f )
        = f^-1 o ( g^-1 o g ) o f            (associativity)
        = f^-1 o I_B o f
        = f^-1 o f
        = I_A

    Similarly  (g o f) o (f^-1 o g^-1) = I_C.

    So f^-1 o g^-1 is the inverse of gof, i.e.  (gof)^-1 = f^-1 o g^-1.
```

## Theorem 4 — if gof = I_A and fog = I_B then g = f^-1

```
    gof = I_A  forces f to be one-one:
        f(a1) = f(a2) -> g(f(a1)) = g(f(a2)) -> a1 = a2

    fog = I_B  forces f to be onto:
        for b in B,  f( g(b) ) = b , so g(b) is a pre-image of b

    So f is a bijection and f^-1 exists.  Then

        g = g o I_B = g o (f o f^-1) = (g o f) o f^-1 = I_A o f^-1 = f^-1
```

## Theorem 5 — the inverse is unique

```
    Suppose g and h are both inverses of f.

        g = g o I = g o (f o h) = (g o f) o h = I o h = h

    So there is only ONE inverse function.
```

---

# TOPIC 22 — Putting it together: the model 7-mark answer

**Question.** Show that f : R\{2} -> R\{1} defined by f(x) = (x - 3)/(x - 2)
is a bijection and find f^-1.

```
  PART 1 — ONE-ONE

      Let  f(a) = f(b)  with a, b in R\{2}.

            a - 3       b - 3
           -------  =  -------
            a - 2       b - 2

      Cross multiply:
           (a - 3)(b - 2)  =  (b - 3)(a - 2)
           ab - 2a - 3b + 6  =  ab - 2b - 3a + 6
             -2a - 3b        =    -2b - 3a
             -2a + 3a        =    -2b + 3b
                    a        =     b

      Therefore f is ONE-ONE.

  PART 2 — ONTO

      Let y be any element of R\{1}.  Solve y = (x - 3)/(x - 2):

           y(x - 2) = x - 3
           xy - 2y = x - 3
           xy - x = 2y - 3
           x(y - 1) = 2y - 3
                 2y - 3
           x = ---------        which is defined because y is not 1
                  y - 1

      Also x is not 2:  if (2y-3)/(y-1) = 2 then 2y - 3 = 2y - 2,
      giving -3 = -2, impossible.  So x lies in R\{2}.

      And f(x) = y by construction.  Therefore f is ONTO.

  PART 3 — CONCLUSION AND INVERSE

      f is one-one and onto, hence a BIJECTION, so f^-1 exists.

                      2x - 3
           f^-1(x) = --------- ,      x in R\{1}
                       x - 1

      CHECK:      f( f^-1(x) )
                  = [ (2x-3)/(x-1) - 3 ] / [ (2x-3)/(x-1) - 2 ]
                  = [ (2x - 3 - 3x + 3) ] / [ (2x - 3 - 2x + 2) ]
                  = ( -x ) / ( -1 )
                  = x            correct
```

That layout — PART 1, PART 2, PART 3, CHECK — is worth full marks every time.

---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

```
  [ ]  Did I read the ARROW in "f : A -> B"?  Onto depends on the codomain.
  [ ]  For a domain question, did I check ALL THREE:
           sqrt >= 0 , denominator not 0 , log > 0 ?
  [ ]  With two conditions, did I take the INTERSECTION (overlap), not
       the union?
  [ ]  Square bracket for >= and <= ; round bracket for > and < ?
  [ ]  In fog, did I apply g FIRST?
  [ ]  For one-one, did I start with "let f(a) = f(b)" and END at "a = b"?
  [ ]  For onto, did I actually SOLVE y = f(x) for x and check x is in the
       domain?
  [ ]  Did I write the final sentence "hence f is a bijection"?
       The examiner looks for that line.
  [ ]  After finding f^-1, did I substitute back and get x?
       (Takes 30 seconds. Confirms 7 marks.)
  [ ]  [-2.7] = -3 , not -2.
  [ ]  After cancelling (x^2-4)/(x-2), did I remember the hole at x = 2?
```
