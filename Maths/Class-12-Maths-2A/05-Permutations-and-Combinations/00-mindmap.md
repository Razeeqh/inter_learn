# Permutations and Combinations — Mind Map

**Maths IIA · Chapter 5 · The chapter you can pass on WITHOUT knowing algebra**
Every year: 1 long answer (7M) + 1 short answer (4M) + 1-2 very short answers (2M)

This chapter is pure COUNTING. There is no formula to memorise that is longer than one
line. If you can multiply and you can think slowly and carefully, you can score here.
Many weak students get more marks in this one chapter than in the whole rest of the paper.

---

## THE WHOLE CHAPTER ON ONE PAGE

```
              P E R M U T A T I O N S   A N D   C O M B I N A T I O N S
                                        |
        +-------------------------------+-------------------------------+
        |                               |                               |
   THE COUNTING RULES            PERMUTATIONS                     COMBINATIONS
   (everything starts here)      "ARRANGE"                        "SELECT"
        |                        order MATTERS                    order does NOT matter
        |                               |                               |
   +----+----+              +-----------+-----------+           +-------+-------+
   |         |              |           |           |           |               |
 AND        OR          nPr =        n^r        n!/(p!q!r!)   nCr =           PROPERTIES
 rule      rule        n!/(n-r)!   repetition   letters not   n!/(r!(n-r)!)      |
   |         |              |       allowed     all different       |      nCr = nC(n-r)
 MULTIPLY   ADD             |                        |              |      nCr + nC(r-1)
   |         |         all at a time                 |         nPr = nCr x r!     = (n+1)Cr
   |         |          = n!                         |              |      nCx = nCy
   |         |              |                        |              |      => x=y or x+y=n
   |         |         +----+----+                   |              |      greatest nCr
   |         |         |         |                   |              |
   |         |    RESTRICTED  CIRCULAR               |         +----+----+
   |         |         |         |                   |         |         |
   |         |    together    (n-1)!            SPECIAL     AT LEAST /  GROUPS &
   |         |    never tog.  necklace &        WORDS       AT MOST     DIVISION
   |         |    fixed place garland                       include /   equal /
   |         |    never begin  (n-1)!/2                     exclude     unequal
   |         |         |                                       |            |
   |         |    RANK OF A WORD                          COMMITTEES     DISTRIBUTE
   |         |    (dictionary order)                      (m men,        to named
   |         |         |                                   w women)      people
   +---------+---------+---------------------------------------+------------+
                                        |
                           +------------+------------+
                           |                         |
                     GEOMETRY COUNTING        NUMBER COUNTING
                           |                         |
                     diagonals n(n-3)/2        total subsets 2^n
                     triangles nC3             at least one 2^n - 1
                     straight lines nC2        divisors of a number
                     rectangles 9C2 x 9C2      sum of divisors
                     handshakes nC2            beggar method C(n+r-1, r-1)
```

---

## FACTORIALS — the alphabet of this chapter

```
        n!  =  n x (n-1) x (n-2) x ... x 3 x 2 x 1

        0!  =  1        <-- NOT zero. Learn this. It is asked directly.
        1!  =  1
        2!  =  2
        3!  =  6
        4!  =  24
        5!  =  120
        6!  =  720
        7!  =  5040
        8!  =  40320
        9!  =  362880
       10!  =  3628800

        KEY UNFOLDING RULE:     n!  =  n x (n-1)!
        This is how you cancel factorials.  10!/8! = 10 x 9 = 90
```

---

## THE 60-SECOND VERSION

Every single question in this chapter is answered by asking **two questions in order**:

```
   QUESTION 1:  Does the ORDER matter?

                YES, order matters   ->  PERMUTATION  ->  use nPr
                     ("arrange", "words", "seat", "numbers", "rank", "in a row")

                NO, order does not   ->  COMBINATION  ->  use nCr
                     ("select", "choose", "committee", "team", "handshake",
                      "triangle", "line", "group")

   QUESTION 2:  Am I doing steps one AFTER another, or choosing BETWEEN cases?

                AND  (this step AND then that step)   ->  MULTIPLY
                OR   (this case OR that case)         ->  ADD
```

That is it. That is the whole chapter. Everything else is a special case dressed up.

| Job | What you actually do | Where it is asked |
|-----|----------------------|-------------------|
| Evaluate / solve for n or r | nPr = 5040, find n | Section A, 2 marks |
| Count arrangements of a word | MISSISSIPPI, INDEPENDENCE | Section A or B |
| Circular / necklace | round a table, garland | Section A or B |
| Selections, committees, nCr properties | at least 4 bowlers | Section B, 4 marks |
| **Rank of a word in dictionary order** | **MASTER, PRISON, REMAST** | **Section C, 7 marks** |
| **Big selection / arrangement problem** | **cricket team, no two together** | **Section C, 7 marks** |

---

## WHERE THE MARKS ARE (AP Inter, Maths IIA)

| Topic | Section | Marks |
|-------|---------|-------|
| Value of nPr / nCr, solve for n or r | A | 2 |
| Number of arrangements of a word | A | 2 |
| Circular permutations, garlands | A | 2 |
| Numbers formed with given digits | A or B | 2 or 4 |
| Selections with a condition (at least / include) | B | 4 |
| Letters together / never together | B | 4 |
| Sum of all numbers formed by given digits | B | 4 |
| **Rank of a word in dictionary order** | **C** | **7** |
| **Team / committee selection with conditions** | **C** | **7** |
| **Combination identity: 34C5 + sum of terms** | **C** | **7** |

**Total available from this one chapter: about 13-15 marks out of 75.**

Add Binomial Theorem (Chapter 6), which USES nCr, and the two chapters together are worth
about 25 marks. Learning nCr properly pays you twice.

---

## STUDY THIS ORDER (each step needs the one before it)

```
  STEP 1   Fundamental Principle of Counting
           AND -> multiply     OR -> add
              |
  STEP 2   Factorials.  n! , 0! = 1 , n! = n(n-1)!
              |
     +--------+------------------------+
     |                                 |
  STEP 3                            STEP 8
  PERMUTATIONS  nPr                 COMBINATIONS  nCr
     |                                 |
  STEP 4                            STEP 9
  Repetition allowed  n^r           Properties of nCr
  Not all different  n!/(p!q!r!)    nCr = nC(n-r) , Pascal's rule
     |                                 |
  STEP 5                            STEP 10
  Restricted: together /            At least / at most /
  never together / fixed place      always include / exclude
     |                                 |
  STEP 6                            STEP 11
  CIRCULAR (n-1)!                   Committees, teams,
  necklace/garland (n-1)!/2         groups & division
     |                                 |
  STEP 7                            STEP 12
  RANK OF A WORD  (7 marks)         Geometry counting:
     |                              diagonals, triangles, lines
     |                                 |
     +----------------+----------------+
                      |
              STEP 13  Divisors of a number, 2^n, beggar method
                      |
              READY FOR THE 7-MARK QUESTION
```

---

## THE KEY BOX — the two formulas that unlock most of the paper

```
  +--------------------------------------------------------------------------+
  |                                                                          |
  |                              n!                                          |
  |          nPr    =    ------------------      (ARRANGE r out of n)        |
  |                          (n - r)!                                        |
  |                                                                          |
  |                              n!                                          |
  |          nCr    =    ------------------      (SELECT r out of n)         |
  |                        r! (n - r)!                                       |
  |                                                                          |
  |          LINK:       nPr   =   nCr  x  r!                                |
  |                      (select the r, THEN arrange them)                   |
  |                                                                          |
  +--------------------------------------------------------------------------+

  SHORTCUT WAY TO WRITE THEM (this is how you should actually compute):

       nPr  =  n (n-1) (n-2) ...   r factors going down
               10P3 = 10 x 9 x 8 = 720

                 n (n-1) (n-2) ...  r factors
       nCr  =   ---------------------------------
                        r (r-1) ... 1

                 10 x 9 x 8
       10C3  =  ------------  =  120
                  3 x 2 x 1
```

---

## THE ONE-LINE DECISION TREE (stick this on your wall)

```
   READ THE QUESTION
          |
          v
   Would swapping two of the chosen things give a DIFFERENT answer?
          |
     +----+------------------------------+
     |                                   |
    YES                                 NO
     |                                   |
  PERMUTATION                        COMBINATION
  (arrange, word, seat,              (select, team, committee,
   number, rank, order)               handshake, triangle, line)
     |                                   |
  Any letters repeated?              Any condition?
     |                                   |
   +-+-----------+                    +--+---------------+
   |             |                    |                  |
  NO            YES                "at least"         "always include k"
   |             |                    |                  |
  n!         n!/(p!q!r!)          ADD the cases      nCr becomes
                                                     (n-k)C(r-k)
```

---

## IF YOU ONLY HAVE 2 DAYS

**Day 1 morning (2 hours)** — Fundamental principle of counting + factorials + nPr.
Do only this: count how many 3-digit numbers you can make from 1,2,3,4,5 with and
without repetition. Then do 6 more like it. This alone is 2-4 marks.

**Day 1 afternoon (2 hours)** — Arrangements of a word. Learn n!/(p!q!r!).
Do MISSISSIPPI, INDEPENDENCE, MATHEMATICS, INTERMEDIATE. Then do "all vowels together".

**Day 1 evening (1 hour)** — Circular permutations. Only three facts:
round a table = (n-1)!, necklace/garland = (n-1)!/2, and "no two together" = arrange
the others in a circle first, then drop the rest into the gaps.

**Day 2 morning (2 hours)** — RANK OF A WORD. This is a 7-mark question and it is a
mechanical procedure. Do MASTER (answer 257), PRISON (answer 438), REMAST (answer 391).
Once you have done three, you can do any of them. **This is the single highest
marks-per-hour topic in the whole of Maths IIA.**

**Day 2 afternoon (2 hours)** — nCr, its properties, and "at least" selection problems.
Do the cricket team question (answer 560). Do the committee questions.

**Day 2 evening (1 hour)** — Geometry counting: diagonals, triangles with some points
collinear, straight lines, chessboard rectangles. All are one-liners.

That plan is worth about 13 of the 75 marks in Maths IIA — half of what you need to pass,
from one chapter, in two days.

---

## THE FIVE THINGS THAT LOSE MARKS EVERY YEAR

```
  1.  Using nCr when the question says "arrange" (or nPr when it says "select").
  2.  Forgetting 0! = 1.
  3.  In "numbers" questions, forgetting that a number CANNOT start with 0.
  4.  In circular permutations, using n! instead of (n-1)!.
  5.  In "at least" questions, forgetting to ADD all the cases.
```
