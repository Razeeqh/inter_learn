# Functions — Mind Map

**Maths 1A · Chapter 1 · The chapter the paper OPENS with**
Every year: 1 long answer (7M) + 2 very short answers (2M), sometimes a 4M as well

---

## THE WHOLE CHAPTER ON ONE PAGE

```
                          F U N C T I O N S
                                 |
   +----------+----------+-------+-------+----------+----------+
   |          |          |               |          |          |
 WHERE IT   WHAT IS    TYPES OF      STANDARD    BUILDING   COUNTING
 COMES      A FUNCTION FUNCTIONS     FUNCTIONS   NEW ONES   THEM
 FROM         |           |              |          |          |
   |          |           |              |          |          |
 Ordered    Every x    One-one        Identity   f + g      n^m
 pair       gets ONE   (injection)    x          f - g      functions
 (a, b)     image        |              |        f g          |
   |          |        Onto           Constant   f / g      nPm
 Cartesian  Domain     (surjection)   c            |        one-one
 product      |          |              |        Composite    |
 A x B      Codomain   Bijection      Modulus    fog, gof   n! bijections
   |          |        (both)         |x|          |          |
 Relation   Range        |              |        NOT the    Onto by
 R c A x B    |        Many-one       Signum     same!      inclusion-
   |        f(x) =     Into           sgn(x)       |        exclusion
 Function   image        |              |        Inverse
 = special    |        PROVE by       [x] floor   f^-1
 relation   Vertical   f(a)=f(b)        |          |
            line test  => a = b       e^x, log x  only for
                       and y = f(x)   sqrt(x),1/x BIJECTIONS
                       solvable
                                 |
                  +--------------+--------------+
                  |                             |
            FINDING DOMAIN                FINDING RANGE
            (most asked 2M)               (2M or 4M)
                  |                             |
          sqrt( ) >= 0                   Make x the subject
          denominator not 0              Ask: which y are possible?
          log( ) > 0                     Or read it off the graph
```

---

## THE FAMILY TREE OF FUNCTION TYPES

```
                        ALL FUNCTIONS f : A -> B
                                 |
        +------------------------+------------------------+
        |                                                 |
   Look at the INPUTS                              Look at the OUTPUTS
   "do two inputs share                            "does every element of B
    one image?"                                     get used?"
        |                                                 |
   +----+----+                                       +----+----+
   |         |                                       |         |
 ONE-ONE   MANY-ONE                                 ONTO      INTO
(injection)                                      (surjection)
 different  two different                        range = B    range is only
 inputs ->  inputs give the                                   a PART of B
 different  SAME image
 images
        \                                             /
         \                                           /
          +-------------------+---------------------+
                              |
                          BIJECTION
                  (one-one AND onto together)
                              |
                   THIS is the only kind that
                   has an INVERSE f^-1
```

---

## THE 60-SECOND VERSION

A **function** is a machine. You drop in one number, exactly one number falls out.

```
              +-----------------+
    x  ---->  |    f  machine   |  ---->  f(x)
   input      +-----------------+         output
  (domain)                              (image)
```

Two rules the machine must obey:

```
  RULE 1   EVERY element of A must go somewhere.   (nobody is left out)
  RULE 2   NO element of A may go to TWO places.   (no split arrows)
```

That is the entire definition. Everything else in the chapter is a question
about that machine:

| Question asked | Name of the answer | Where it is asked |
|----------------|--------------------|-------------------|
| Which x are ALLOWED in? | **Domain** | Section A, 2 marks |
| Which set did we PROMISE outputs from? | **Codomain** | Section A, 2 marks |
| Which values actually COME OUT? | **Range** | Section A or B |
| Do two inputs collide? | one-one / many-one | Section C, 7 marks |
| Is every output used? | onto / into | Section C, 7 marks |
| Can I run the machine BACKWARDS? | inverse f^-1 | Section C, 7 marks |

---

## WHERE THE MARKS ARE (AP Inter, Maths IA — total 75)

**Paper shape:** Section A = 10 questions x 2 marks (answer ALL) = 20
Section B = 7 questions x 4 marks (answer any 5) = 20
Section C = 7 questions x 7 marks (answer any 5) = 35

| Topic from this chapter | Section | Marks |
|-------------------------|---------|-------|
| Find the domain of a given real function | A | 2 |
| Find the range of a given real function | A | 2 |
| Piecewise function — find f(4), f(-2), f(0) | A | 2 |
| f + g, fg, f/g on a finite set of ordered pairs | A | 2 |
| Find fog and gof, or show fog is not gof | A or B | 2 or 4 |
| Number of functions / one-one / onto from A to B | A | 2 |
| **Prove f is a bijection and find f^-1** | **C** | **7** |
| **Prove gof is a bijection / (gof)^-1 = f^-1 o g^-1** | **C** | **7** |
| Determine injection / surjection / bijection for a list | C | 7 |

**Total available from this one chapter: about 11-13 marks out of 75.**
And it is the EASIEST 11 marks in the whole paper, because the two Section A
questions are almost always pure domain-and-range.

---

## STUDY THIS ORDER (each step needs the one before it)

```
  STEP 1   Ordered pairs -> Cartesian product A x B
              |
  STEP 2   Relation  =  any subset of A x B
              |
  STEP 3   FUNCTION = the special relation
           (every input used, no input repeated)
              |
  STEP 4   Domain / Codomain / Range
              |
     +--------+--------+
     |                 |
  STEP 5          STEP 7
  Standard        Types:
  functions       one-one, onto,
  and their       bijection
  GRAPHS             |
     |            STEP 8
  STEP 6          How to PROVE each one
  DOMAIN and         |
  RANGE of a      STEP 9
  given formula   Composite  fog , gof
  (2 marks)          |
     |            STEP 10
     |            INVERSE  f^-1
     |               |
     +--------+------+
              |
        THE 7-MARK QUESTION
   "Show f is a bijection and find f^-1"
              |
  STEP 11  Algebra of functions (f+g, fg, f/g)
              |
  STEP 12  Counting: n^m functions, nPm one-one, n! bijections
```

---

## THE ONE BOX THAT DECIDES HALF THE MARKS

```
  +--------------------------------------------------------------+
  |                                                              |
  |   FINDING THE DOMAIN — only THREE things can go wrong        |
  |                                                              |
  |   1.  sqrt( SOMETHING )     ->   SOMETHING  >=  0            |
  |                                                              |
  |   2.  ANYTHING                                               |
  |       -----------           ->   BOTTOM  is not  0           |
  |         BOTTOM                                               |
  |                                                              |
  |   3.  log( SOMETHING )      ->   SOMETHING  >   0            |
  |                                  (strictly greater)          |
  |                                                              |
  |   If two of them appear together, do BOTH and take the       |
  |   OVERLAP (the intersection).                                |
  |                                                              |
  |   Nothing else in a board question restricts a domain.       |
  |                                                              |
  +--------------------------------------------------------------+
```

Learn that box and you will never lose the Section A function question again.

---

## THE SECOND BOX — RUNNING THE MACHINE BACKWARDS

```
  +--------------------------------------------------------------+
  |                                                              |
  |    f  has an inverse   <=>   f  is a BIJECTION               |
  |                                                              |
  |    To find f^-1 :                                            |
  |         1.  write   y = f(x)                                 |
  |         2.  make  x  the subject                             |
  |         3.  swap the letters:  f^-1(x) = (that expression)   |
  |                                                              |
  |    Check:   f( f^-1(x) ) = x     and     f^-1( f(x) ) = x    |
  |                                                              |
  |    Domain of f^-1  =  Range of f                             |
  |    Range  of f^-1  =  Domain of f                            |
  |                                                              |
  +--------------------------------------------------------------+
```

---

## IF YOU ONLY HAVE 2 DAYS

**Day 1 morning — the 2-mark machine.**
Learn only the DOMAIN box above. Then do 15 domain questions in a row:
five with a square root, five with a denominator, five with a log.
Nothing else. This alone is 2 marks that you cannot miss.

**Day 1 evening — range + piecewise + graphs.**
Draw the 9 standard graphs (identity, constant, |x|, sgn x, [x], x^2, sqrt x,
1/x, e^x and log x) on one sheet of paper with their domain and range written
underneath. Then do the piecewise f(4), f(-2), f(0) type. Another 2 marks.

**Day 2 morning — the 7-mark question, part one.**
Learn the three-line proof of one-one and the three-line proof of onto.
They are the SAME three lines every single year:

```
  ONE-ONE:  let f(a) = f(b)  ->  algebra  ->  a = b   ->  f is one-one
  ONTO:     let y be in B, solve y = f(x) for x,
            show that x lies in A                     ->  f is onto
  Therefore f is a BIJECTION.
```

**Day 2 evening — the inverse and composites.**
Take f(x) = 4x + 7 and f(x) = (x - 3)/(x - 2). Prove each is a bijection and
find f^-1. Then compute fog and gof for f(x) = 2x - 1, g(x) = x^2 + 2 and
SEE with your own eyes that they are different.

That is about 11 of the 75 marks in Maths IA, from the easiest chapter in
the book, in two days.
