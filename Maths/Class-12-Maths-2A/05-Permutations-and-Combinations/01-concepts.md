# Permutations and Combinations — Concepts, Explained From Zero

**Maths IIA · Chapter 5**

Read this with a pen. Every worked example must be copied out by hand at least once.
Counting is a skill of the hand, not of the memory.

---

# TOPIC 1 — THE FUNDAMENTAL PRINCIPLE OF COUNTING

This is the foundation. Everything else in the chapter is built on it. If you understand
this one page, you can survive the whole chapter even if you forget every formula.

## 1.1 The MULTIPLICATION principle (the "AND" rule)

**Plain English:** If a job is done in STAGES, and you must do stage 1 **AND** stage 2
**AND** stage 3, then you MULTIPLY the number of choices at each stage.

**Everyday analogy.** You are getting dressed. You have 3 shirts and 4 trousers.
How many different outfits?

```
    SHIRT           TROUSER          OUTFIT
      |
   Shirt 1  ------+-- T1  ->  (S1,T1)
      |           +-- T2  ->  (S1,T2)
      |           +-- T3  ->  (S1,T3)
      |           +-- T4  ->  (S1,T4)
      |
   Shirt 2  ------+-- T1  ->  (S2,T1)
      |           +-- T2  ->  (S2,T2)
      |           +-- T3  ->  (S2,T3)
      |           +-- T4  ->  (S2,T4)
      |
   Shirt 3  ------+-- T1  ->  (S3,T1)
                  +-- T2  ->  (S3,T2)
                  +-- T3  ->  (S3,T3)
                  +-- T4  ->  (S3,T4)

   Count them:  12 outfits  =  3 x 4
```

You pick a shirt **AND** a trouser. AND means multiply. 3 x 4 = 12.

```
  +--------------------------------------------------------------------------+
  |   MULTIPLICATION PRINCIPLE                                               |
  |                                                                          |
  |   If event 1 can happen in  m  ways,                                     |
  |   AND after that event 2 can happen in  n  ways,                         |
  |   then both together can happen in  m x n  ways.                         |
  |                                                                          |
  |   Extends to any number of stages:   m x n x p x ...                     |
  +--------------------------------------------------------------------------+
```

## 1.2 The ADDITION principle (the "OR" rule)

**Plain English:** If a job can be done in one of several SEPARATE, non-overlapping ways —
this way **OR** that way — then you ADD.

**Everyday analogy.** To go from your house to college you can take a bus (3 different
buses run) **or** an auto (5 different autos). How many ways to travel?

You take a bus OR an auto — you cannot take both at the same time. So 3 + 5 = **8**.

```
  +--------------------------------------------------------------------------+
  |   ADDITION PRINCIPLE                                                     |
  |                                                                          |
  |   If a job can be done by method A in  m  ways                           |
  |   OR by method B in  n  ways,                                            |
  |   and the two methods cannot both happen,                                |
  |   then the job can be done in  m + n  ways.                              |
  +--------------------------------------------------------------------------+
```

## 1.3 HOW TO DECIDE WHICH ONE TO USE

This is the single most important decision in the chapter. Here is the test:

```
  +------------------------------------------------------------------------+
  |  ASK:  "To finish the job, do I need to do BOTH things,                |
  |         or do I choose ONE of them?"                                    |
  |                                                                        |
  |     Need BOTH (a sequence of steps)     ->   AND   ->   MULTIPLY       |
  |     Choose ONE (separate cases)         ->   OR    ->   ADD            |
  |                                                                        |
  |  In practice:                                                          |
  |     "first ... then ..."                ->   MULTIPLY                  |
  |     "either ... or ..."                 ->   ADD                       |
  |     "Case 1 ... Case 2 ..."             ->   ADD the case answers      |
  |     inside one case                     ->   MULTIPLY                  |
  +------------------------------------------------------------------------+
```

### WORKED EXAMPLE 1.1
How many 3-digit numbers can be formed with the digits 1, 2, 3, 4, 5
(a) without repetition, (b) with repetition allowed?

**Reasoning first.** A 3-digit number has three slots: hundreds, tens, units.
I must fill the hundreds slot **AND** the tens slot **AND** the units slot.
AND means multiply.

```
  (a) NO REPETITION

      +-------+-------+-------+
      | 100s  |  10s  | units |
      +-------+-------+-------+
      |   5   |   4   |   3   |     Once a digit is used it is gone.
      +-------+-------+-------+

      Total = 5 x 4 x 3 = 60

  (b) REPETITION ALLOWED

      +-------+-------+-------+
      |   5   |   5   |   5   |     Every digit is available every time.
      +-------+-------+-------+

      Total = 5 x 5 x 5 = 125
```
**ANSWER: (a) 60   (b) 125**

### WORKED EXAMPLE 1.2
How many 4-digit numbers can be formed using the digits 0 to 9 with no digit repeated?

**Reasoning first.** The dangerous slot is the FIRST one. A 4-digit number cannot begin
with 0 — 0537 is really the 3-digit number 537. So fill the thousands place FIRST, with
the restriction, and then fill the rest.

```
      +---------+-------+-------+-------+
      | 1000s   | 100s  |  10s  | units |
      +---------+-------+-------+-------+
      |   9     |   9   |   8   |   7   |
      +---------+-------+-------+-------+
        no 0        0 is allowed here, but one digit
                    is already used, so 10 - 1 = 9

      Total = 9 x 9 x 8 x 7 = 4536
```
**ANSWER: 4536**

> **TRAP:** Always fill the RESTRICTED place first. If you fill left-to-right blindly you
> will write 10 x 9 x 8 x 7 = 5040 and lose the mark. 5040 - 4536 = 504 of those "numbers"
> start with 0 and are not 4-digit numbers at all.

### WORKED EXAMPLE 1.3 (AND and OR in the same question)
A student must choose one subject from Group A (4 subjects) and one from Group B
(3 subjects), OR a single combined course from Group C (5 courses). How many choices?

```
   Route 1:  one from A  AND  one from B   =  4 x 3  =  12
   Route 2:  one from C                    =         =   5
                                                       ----
   Route 1  OR  Route 2                    =  12 + 5 =  17
```
**ANSWER: 17**

Notice both rules used in one question: multiply inside a route, add across routes.
**That is the pattern of every hard question in this chapter.**

---

# TOPIC 2 — FACTORIAL NOTATION

## 2.1 What a factorial is

`n!` (read "n factorial") is just a short way of writing a long multiplication that
counts down to 1.

```
  +--------------------------------------------------------------------------+
  |                                                                          |
  |     n!  =  n x (n-1) x (n-2) x ... x 3 x 2 x 1                           |
  |                                                                          |
  |     n! is defined only for  n = 0, 1, 2, 3, ...  (whole numbers)         |
  |                                                                          |
  +--------------------------------------------------------------------------+
```

```
   1! = 1
   2! = 2 x 1                       = 2
   3! = 3 x 2 x 1                   = 6
   4! = 4 x 3 x 2 x 1               = 24
   5! = 5 x 4 x 3 x 2 x 1           = 120
   6! = 720          7! = 5040          8! = 40320
   9! = 362880      10! = 3628800
```

Learn up to 8! by heart. They appear in nearly every answer.

## 2.2 Why 0! = 1

```
  +--------------------------------------------------------------------------+
  |                          0!  =  1                                        |
  +--------------------------------------------------------------------------+
```

**Why?** Use the unfolding rule n! = n x (n-1)! and put n = 1:

```
      1! = 1 x 0!
       1 = 1 x 0!
      so 0! = 1
```

**And what does it MEAN?** 0! counts the number of ways of arranging nothing.
There is exactly ONE way to arrange nothing: do nothing. So the answer is 1, not 0.

> **TRAP:** Writing 0! = 0. This single error can destroy a whole 7-mark answer, because
> nPn = n!/0! and you would be dividing by zero. **0! = 1.**

## 2.3 The unfolding rule — how you actually use factorials

You almost never compute a big factorial. You CANCEL.

```
  +--------------------------------------------------------------------------+
  |            n!  =  n x (n-1)!  =  n x (n-1) x (n-2)!   =  ...             |
  +--------------------------------------------------------------------------+
```

### WORKED EXAMPLE 2.1
Evaluate 10! / 8! and 12! / (10! 2!)

```
   10!      10 x 9 x 8!
   ---  =  -------------  =  10 x 9  =  90
   8!           8!

    12!        12 x 11 x 10!      132
  --------  = ---------------  = -----  =  66
  10! x 2!      10! x 2 x 1        2
```
**ANSWER: 90 and 66**

## 2.4 Properties of factorials worth knowing

| Property | Meaning / Use |
|---|---|
| n! = n (n-1)! | the unfolding rule — used for ALL cancelling |
| 0! = 1 | asked directly as a 2-mark question |
| n! is defined only for whole numbers | (1/2)! has no meaning at this level |
| n! + m! is NOT (n+m)! | 2! + 3! = 8 but 5! = 120 |
| (n!)(m!) is NOT (nm)! | 2! x 3! = 12 but 6! = 720 |
| (2n)! = 2^n x n! x [1.3.5...(2n-1)] | a standard 4-mark proof question |

### WORKED EXAMPLE 2.2 (standard 4-mark proof)
Prove that (2n)! = 2^n x n! x {1 . 3 . 5 . ... . (2n - 1)}

**Reasoning first.** In the product (2n)! = 1 x 2 x 3 x ... x 2n, separate the EVEN
numbers from the ODD numbers. There are n even numbers and n odd numbers.

```
  (2n)!  =  [1 x 3 x 5 x ... x (2n-1)]  x  [2 x 4 x 6 x ... x 2n]
              \____ the n odd ones ____/     \___ the n even ones ___/

  Take 2 out of every even factor (there are n of them):

  2 x 4 x 6 x ... x 2n  =  2^n x (1 x 2 x 3 x ... x n)  =  2^n x n!

  Therefore
  (2n)!  =  2^n x n! x {1 . 3 . 5 . ... . (2n - 1)}                     PROVED
```

**Quick check with n = 3:**  (6)! = 720.
RHS = 2^3 x 3! x (1 x 3 x 5) = 8 x 6 x 15 = 720. Correct.

---

# TOPIC 3 — PERMUTATIONS: nPr

## 3.1 What a permutation is

A **permutation** is an ARRANGEMENT. The order matters.

```
    From the letters A, B, C take 2 at a time.

    ARRANGEMENTS (permutations)         SELECTIONS (combinations)
    AB   BA                             AB
    AC   CA                             AC
    BC   CB                             BC
    ------------------------            ------------------------
    6 of them  =  3P2                   3 of them  =  3C2

    AB and BA are DIFFERENT arrangements but the SAME selection.
```

**Everyday analogy.** A phone number is a permutation: 9848 and 8489 use the same digits
but they are different numbers. A fruit basket is a combination: apple-banana and
banana-apple are the same basket.

## 3.2 The formula

```
  +--------------------------------------------------------------------------+
  |                                     n!                                   |
  |          nPr   =   n(n-1)(n-2)... =  ---------      (0 <= r <= n)        |
  |                    \___ r factors     (n - r)!                           |
  |                          in all __/                                      |
  +--------------------------------------------------------------------------+
```

**Where it comes from** (this is worth understanding, not memorising):

```
   You have r empty boxes to fill from n objects.

   Box 1:  n     choices
   Box 2:  n-1   choices    (one object used up)
   Box 3:  n-2   choices
   ...
   Box r:  n-r+1 choices

   AND all the way, so MULTIPLY:

   nPr  =  n(n-1)(n-2)...(n-r+1)     <-- exactly r factors

   Multiply top and bottom by (n-r)!  to get the tidy form  n!/(n-r)!
```

## 3.3 The special cases you must know

```
  +--------------------------------------------------------------------------+
  |   nPn   =   n!            all n things taken all at a time               |
  |             (because nPn = n!/0! = n!/1 = n!)                            |
  |                                                                          |
  |   nP1   =   n                                                            |
  |   nP0   =   1                                                            |
  |   nP(n-1) = n!            (same as nPn — this surprises students)         |
  +--------------------------------------------------------------------------+
```

### WORKED EXAMPLE 3.1
Find 7P3 and 5P5.

```
   7P3 = 7 x 6 x 5 = 210          (3 factors, counting down from 7)
   5P5 = 5! = 120
```
**ANSWER: 210 and 120**

### WORKED EXAMPLE 3.2
If nP4 = 20 x nP2, find n.

**Reasoning first.** Write both sides as products counting down, then cancel.

```
   nP4 = n(n-1)(n-2)(n-3)
   nP2 = n(n-1)

   n(n-1)(n-2)(n-3)  =  20 x n(n-1)

   Cancel n(n-1)   [allowed: n >= 4, so n(n-1) is not 0]

   (n-2)(n-3) = 20
   n^2 - 5n + 6 = 20
   n^2 - 5n - 14 = 0
   (n - 7)(n + 2) = 0
   n = 7   or  n = -2  (rejected, n must be a positive whole number)
```
**Check:** 7P4 = 7x6x5x4 = 840. 20 x 7P2 = 20 x 42 = 840. Correct.
**ANSWER: n = 7**

### WORKED EXAMPLE 3.3
If nP7 = 42 x nP5, find n.

```
     n!            n!
  --------  =  42 x -------
   (n-7)!          (n-5)!

   (n-5)!
  --------  =  42          [cross-multiplying and cancelling n!]
   (n-7)!

   (n-5)(n-6) = 42 = 7 x 6

   n - 5 = 7   ->   n = 12
```
**Check:** (12-5)(12-6) = 7 x 6 = 42. Correct.
**ANSWER: n = 12**

## 3.4 Permutations when REPETITION IS ALLOWED

If each object may be used again and again, nothing is used up:

```
  +--------------------------------------------------------------------------+
  |     Number of arrangements of r things chosen from n,                    |
  |     with repetition allowed   =   n^r                                    |
  |                                                                          |
  |     (n choices for each of the r places, AND all the way)                |
  +--------------------------------------------------------------------------+
```

### WORKED EXAMPLE 3.4
In how many ways can 5 different letters be posted into 3 letter boxes?

**Reasoning first.** Careful — what is being placed and where? Each LETTER must choose a
BOX. Letter 1 has 3 choices, letter 2 has 3 choices, ..., letter 5 has 3 choices.
A box can hold many letters, so nothing is used up.

```
   3 x 3 x 3 x 3 x 3  =  3^5  =  243
```
**ANSWER: 243**

> **TRAP:** Students write 5^3 = 125. Ask "who is doing the choosing?" The LETTERS choose
> boxes, so the number of BOXES is the base and the number of LETTERS is the power.
> **The one that is being placed goes in the EXPONENT.**

---

# TOPIC 4 — PERMUTATIONS OF THINGS NOT ALL DIFFERENT

## 4.1 The idea

If some objects are identical, swapping them does not give a new arrangement.
So the answer n! is too big, and we divide out the swaps we cannot see.

**Small demonstration.** Arrange the letters of the word **AAB**.

```
   If the two A's were different (call them A1 and A2), we would get 3! = 6:

      A1 A2 B     A2 A1 B
      A1 B A2     A2 B A1
      B A1 A2     B A2 A1

   But the A's are the same, so the two entries in each row look identical:

      A A B  (counted twice)
      A B A  (counted twice)
      B A A  (counted twice)

   Real answer = 6 / 2! = 3
```

```
  +--------------------------------------------------------------------------+
  |   n objects, of which                                                    |
  |        p are alike of one kind,                                          |
  |        q are alike of a second kind,                                     |
  |        r are alike of a third kind, and the rest all different.          |
  |                                                                          |
  |                                     n!                                   |
  |   Number of arrangements  =  -----------------                           |
  |                                p! x q! x r!                              |
  +--------------------------------------------------------------------------+
```

## 4.2 The counting-the-letters routine

For a word question, ALWAYS start by writing this table. It prevents 90% of errors.

```
   WORD:  M I S S I S S I P P I

   Letter | M  I  S  P            Total letters = 1 + 4 + 4 + 2 = 11   OK
   Count  | 1  4  4  2
```

### WORKED EXAMPLE 4.1
Find the number of arrangements of the letters of the word MISSISSIPPI.

```
   11 letters:  I appears 4 times, S appears 4 times, P appears 2 times, M once.

                    11!            39916800         39916800
   Arrangements = ----------  =  -------------  =  ----------  =  34650
                  4! 4! 2!        24 x 24 x 2         1152
```
**ANSWER: 34650**

### WORKED EXAMPLE 4.2
Find the number of arrangements of the letters of the word INDEPENDENCE.

```
   WORD:  I N D E P E N D E N C E        (12 letters)

   Letter | I  N  D  E  P  C            Check: 1+3+2+4+1+1 = 12   OK
   Count  | 1  3  2  4  1  1

                    12!            479001600         479001600
   Arrangements = ----------  =  --------------  =  -----------  =  1663200
                  3! 2! 4!        6 x 2 x 24            288
```
**ANSWER: 1663200**

### WORKED EXAMPLE 4.3
Find the number of arrangements of the letters of the word MATHEMATICS.

```
   WORD:  M A T H E M A T I C S        (11 letters)

   Letter | M  A  T  H  E  I  C  S      Check: 2+2+2+1+1+1+1+1 = 11   OK
   Count  | 2  2  2  1  1  1  1  1

                    11!         39916800
   Arrangements = ---------  =  ---------  =  4989600
                  2! 2! 2!          8
```
**ANSWER: 4989600**

### WORKED EXAMPLE 4.4
Find the number of arrangements of the letters of the word INTERMEDIATE.

```
   WORD:  I N T E R M E D I A T E       (12 letters)

   Letter | I  N  T  E  R  M  D  A      Check: 2+1+2+3+1+1+1+1 = 12   OK
   Count  | 2  1  2  3  1  1  1  1

                    12!          479001600
   Arrangements = ---------  =  -----------  =  19958400
                  2! 2! 3!           24
```
**ANSWER: 19958400**

> **TRAP:** Miscounting the letters. Write the letters out one by one with a tick mark.
> Then ADD your counts and check the total equals the number of letters. If it does not,
> your whole answer is wrong. This 10-second check saves 7 marks.

---

# TOPIC 5 — RESTRICTED PERMUTATIONS

Four question shapes appear again and again. Each has a fixed trick.

## 5.1 "Always TOGETHER" — TIE THEM INTO A BLOCK

```
  +--------------------------------------------------------------------------+
  |   STEP 1  Glue the objects that must stay together into ONE block.       |
  |   STEP 2  Count the units now:  (n - k + 1)  where k were glued.         |
  |   STEP 3  Arrange the units.                                             |
  |   STEP 4  MULTIPLY by the arrangements INSIDE the block.                 |
  +--------------------------------------------------------------------------+
```

```
      A  B  C  D  E     with C, D, E always together

      becomes   A  B  [C D E]        ->  3 units  ->  3! ways
                       ^^^^^^^           and inside the block 3! ways

      Total = 3! x 3! = 6 x 6 = 36
```

### WORKED EXAMPLE 5.1
Find the number of arrangements of the letters of the word EQUATION in which
all the vowels come together.

```
   EQUATION has 8 letters, all different.
   Vowels:     E, U, A, I, O   (5)
   Consonants: Q, T, N         (3)

   Glue the 5 vowels into one block:

        [E U A I O]  Q  T  N       ->  4 units

   Arrange the 4 units          =  4!  =  24
   Arrange 5 vowels inside      =  5!  =  120

   Total = 24 x 120 = 2880
```
**ANSWER: 2880**

### WORKED EXAMPLE 5.2 (with repeated letters — the harder version)
Find the number of arrangements of the letters of the word INDEPENDENCE in which
all the vowels come together.

```
   Vowels:      I, E, E, E, E     (5 vowels: one I and four E's)
   Consonants:  N, N, N, D, D, P, C   (7 consonants: N thrice, D twice)

   Glue the vowels into one block. Units = 7 consonants + 1 block = 8 units,
   and among those units N appears 3 times and D appears 2 times.

                          8!         40320
   Arrange the units = --------  =  -------  =  3360
                        3! 2!          12

                                5!      120
   Arrange inside the block =  ----  =  ----  =  5
                                4!       24

   Total  =  3360 x 5  =  16800
```
**ANSWER: 16800**

## 5.2 "NEVER TOGETHER" — TWO METHODS

**Method A (subtraction), for TWO objects only:**

```
     never together  =  (all arrangements)  -  (arrangements with them together)
```

**Method B (the GAP method), the safe one, works for any number:**

```
  +--------------------------------------------------------------------------+
  |   STEP 1  Arrange the OTHER objects first (the ones with no condition).  |
  |   STEP 2  Draw the gaps:  _ X _ X _ X _   with m objects there are       |
  |           (m + 1) gaps, including the two ends.                          |
  |   STEP 3  Choose gaps for the restricted objects and arrange them there. |
  |           Only ONE restricted object per gap  ->  they can never touch.  |
  +--------------------------------------------------------------------------+
```

```
      5 BOYS placed first:      _ B _ B _ B _ B _ B _
                                ^   ^   ^   ^   ^   ^
                                6 gaps for the girls
```

### WORKED EXAMPLE 5.3
In how many ways can 5 boys and 4 girls be arranged in a row so that no two girls
sit together?

```
   STEP 1  Arrange the 5 boys:                     5!   =  120

   STEP 2  This creates 6 gaps:   _ B _ B _ B _ B _ B _

   STEP 3  Put the 4 girls into 4 of those 6 gaps, in order:
           6P4  =  6 x 5 x 4 x 3  =  360

   Total  =  120 x 360  =  43200
```
**ANSWER: 43200**

### WORKED EXAMPLE 5.4
Find the number of arrangements of the letters of MISSISSIPPI in which no two P's
are next to each other.

```
   STEP 1  Remove the two P's. The other 9 letters are M, I, I, I, I, S, S, S, S.

                          9!         362880
           Arrange them = -----  =  --------  =  630
                          4! 4!        576

   STEP 2  9 letters create 10 gaps.

   STEP 3  The two P's are IDENTICAL, so we only CHOOSE 2 gaps, not arrange:

                                10 x 9
           10C2  =  ----------------- =  45
                                 2

   Total  =  630 x 45  =  28350
```
**ANSWER: 28350**

> **TRAP:** In the gap method, use nPr when the restricted objects are DIFFERENT and nCr
> when they are IDENTICAL. Girls are different people (use 6P4). The two P's are identical
> letters (use 10C2).

## 5.3 "ALWAYS AT SPECIFIED PLACES"

Fix them first, then count what is left over.

### WORKED EXAMPLE 5.5
Find the number of arrangements of the letters of the word MONDAY
(i) using all letters, (ii) taking 4 at a time,
(iii) using all letters but beginning with M and ending with Y.

```
   MONDAY = 6 different letters.

   (i)    6! = 720

   (ii)   6P4 = 6 x 5 x 4 x 3 = 360

   (iii)  M is fixed at the front, Y is fixed at the end:

              M  _  _  _  _  Y
                 \_______/
                 the 4 letters O, N, D, A go here in 4! ways

          4! = 24
```
**ANSWER: (i) 720  (ii) 360  (iii) 24**

## 5.4 "NEVER BEGINS WITH ..." — SUBTRACT

```
     never begins with X  =  (total arrangements) - (those that DO begin with X)
```

### WORKED EXAMPLE 5.6
How many arrangements of the letters of PICTURE do not begin with P?

```
   Total arrangements (7 different letters)      =  7!  =  5040
   Those that DO begin with P: fix P, arrange 6  =  6!  =   720
                                                       --------
   Do not begin with P                           =  5040 - 720  =  4320
```
**ANSWER: 4320**

---

# TOPIC 6 — CIRCULAR PERMUTATIONS

## 6.1 Why a circle is different from a row

In a ROW there is a first place and a last place — the positions are labelled.
In a CIRCLE there is no "first" chair. Only who is next to whom matters. If everybody
shifts one seat to the left, it is the SAME arrangement.

```
   Four people A, B, C, D around a table. These FOUR pictures are all the SAME
   arrangement, because each is just a rotation of the one before:

          A              B              C              D
       D     B        A     C        B     D        C     A
          C              D              A              B

   So a row-count of 4! = 24 counts every real arrangement 4 times.
   True answer = 4!/4 = 3! = 6
```

```
  +--------------------------------------------------------------------------+
  |                                                                          |
  |   n distinct things around a circle,                                     |
  |   clockwise and anticlockwise DIFFERENT       =   (n - 1)!               |
  |                                                                          |
  |   n distinct things around a circle,                                     |
  |   clockwise and anticlockwise the SAME        =   (n - 1)! / 2           |
  |   (necklaces, garlands, bangles, chains)                                 |
  |                                                                          |
  |   Circular arrangements of r things out of n  =   nPr / r                |
  |                                                                          |
  +--------------------------------------------------------------------------+
```

**When are clockwise and anticlockwise the SAME?** When the object can be PICKED UP AND
FLIPPED OVER. A garland of flowers or a necklace of beads can be turned over, so the two
directions give the same physical object — divide by 2. People sitting at a table cannot
be flipped over — do NOT divide by 2.

```
   +------------------------+---------------------------------+
   |  SITUATION             |  FORMULA                        |
   +------------------------+---------------------------------+
   |  Persons round a table |  (n - 1)!                       |
   |  Keys on a key ring    |  (n - 1)!/2                     |
   |  Beads in a necklace   |  (n - 1)!/2                     |
   |  Flowers in a garland  |  (n - 1)!/2                     |
   |  Persons round a table |                                 |
   |  with a NUMBERED chair |  n!   <-- circle becomes a row  |
   +------------------------+---------------------------------+
```

### WORKED EXAMPLE 6.1
Find the number of ways of arranging 7 persons around a circular table.

```
   (7 - 1)! = 6! = 720
```
**ANSWER: 720**

### WORKED EXAMPLE 6.2
Find the number of ways of preparing a garland with 8 different flowers.

```
   A garland can be turned over, so divide by 2.

   (8 - 1)! / 2  =  7!/2  =  5040/2  =  2520
```
**ANSWER: 2520**

### WORKED EXAMPLE 6.3
Find the number of ways of arranging 6 gentlemen and 3 ladies around a circular table
so that no two ladies sit together.

```
   STEP 1  Seat the 6 gentlemen around the circle first:  (6 - 1)! = 5! = 120

   STEP 2  This makes 6 gaps between them:

                        G
                    _       _
                 G             G
                 _             _
                 G             G
                    _       _
                        G          <-- 6 gaps marked _

   STEP 3  Place the 3 different ladies into 3 of the 6 gaps:
           6P3 = 6 x 5 x 4 = 120

   Total  =  120 x 120  =  14400
```
**ANSWER: 14400**

### WORKED EXAMPLE 6.4
In how many ways can 8 persons sit around a circular table if two particular persons
(i) always sit together, (ii) never sit together?

```
   (i)  Glue the two together into one block  ->  7 units around the circle
        Circle:            (7 - 1)!  =  6!  =  720
        Inside the block:  2!        =        =   2
        Together           =  720 x 2  =  1440

   (ii) Total circular arrangements  =  (8 - 1)! = 7! = 5040
        Never together  =  5040 - 1440  =  3600
```
**ANSWER: (i) 1440  (ii) 3600**

> **TRAP:** Using n! for a circle. Using (n-1)!/2 for people at a table. Read the object:
> a PERSON cannot be flipped, a GARLAND can.

---

# TOPIC 7 — RANK OF A WORD IN DICTIONARY ORDER

**This is a 7-mark question and it is completely mechanical.** Master it and you have
guaranteed marks. It is also the question most students skip out of fear — do not be
one of them.

## 7.1 The idea

Imagine every possible arrangement of the letters of a word is printed in a dictionary,
in alphabetical order. Your job: find the page position (the RANK) of the given word.

**The trick:** instead of listing thousands of words, count how many words come BEFORE
your word, one letter position at a time. Then add 1 (for the word itself).

## 7.2 The routine

```
  +--------------------------------------------------------------------------+
  |   STEP 1  Write the letters of the word in ALPHABETICAL order.           |
  |                                                                          |
  |   STEP 2  Look at position 1 of your word.                               |
  |           Count the letters that are alphabetically SMALLER and still    |
  |           available. Each of them can be followed by any arrangement     |
  |           of the remaining letters. Multiply and record.                 |
  |                                                                          |
  |   STEP 3  FIX the actual letter of your word in position 1.              |
  |           Move to position 2 and repeat with the remaining letters.      |
  |                                                                          |
  |   STEP 4  Keep going to the last letter.                                 |
  |                                                                          |
  |   STEP 5  RANK  =  (sum of all the counts)  +  1                         |
  |                                             ^^^^^                        |
  |                                       the word itself                    |
  +--------------------------------------------------------------------------+
```

## 7.3 FULLY WORKED EXAMPLE — rank of MASTER

### WORKED EXAMPLE 7.1
If the letters of the word MASTER are permuted in all possible ways and the words so
formed are arranged in dictionary order, find the RANK of the word MASTER.

**Setup.**
```
   Letters of MASTER:  M, A, S, T, E, R   — all 6 different.
   In alphabetical order:   A , E , M , R , S , T
   Total possible words = 6! = 720
```

**Position 1 — the word starts with M.**
```
   Letters smaller than M:  A , E      -> 2 letters
   Each one leaves 5 letters free, arranged in 5! = 120 ways.

        Words starting with A :  5! = 120
        Words starting with E :  5! = 120
                                 ----------
                                      240
```
Now FIX M in position 1. Remaining letters available: A, E, R, S, T.

**Position 2 — the word has A here.**
```
   Available letters in order:  A , E , R , S , T
   Letters smaller than A:  none   ->  0 words
                                       ----------
                                            0
```
Now FIX A. Remaining: E, R, S, T.

**Position 3 — the word has S here.**
```
   Available letters in order:  E , R , S , T
   Letters smaller than S:  E , R    ->  2 letters
   Each leaves 3 letters free, arranged in 3! = 6 ways.

        M A E _ _ _ :  3! = 6
        M A R _ _ _ :  3! = 6
                       ----------
                            12
```
Now FIX S. Remaining: E, R, T.

**Position 4 — the word has T here.**
```
   Available letters in order:  E , R , T
   Letters smaller than T:  E , R    ->  2 letters
   Each leaves 2 letters free, arranged in 2! = 2 ways.

        M A S E _ _ :  2! = 2
        M A S R _ _ :  2! = 2
                       ----------
                             4
```
Now FIX T. Remaining: E, R.

**Position 5 — the word has E here.**
```
   Available letters in order:  E , R
   Letters smaller than E:  none    ->  0
                                       ----------
                                            0
```
Now FIX E. Remaining: R — only one letter, it must go last.

**Position 6 — nothing smaller. 0.**

**Add up.**
```
   +---------------------------------------------------------+
   |  Position 1  (A_ _ _ _ _ , E_ _ _ _ _)   2 x 5! =  240  |
   |  Position 2  (nothing before A)                  =    0  |
   |  Position 3  (MAE... , MAR...)           2 x 3! =   12  |
   |  Position 4  (MASE.. , MASR..)           2 x 2! =    4  |
   |  Position 5  (nothing before E)                  =    0  |
   |  Position 6                                      =    0  |
   |                                                   ------ |
   |  Words BEFORE  MASTER                              256  |
   |  The word MASTER itself                          +   1  |
   |                                                   ------ |
   |  RANK OF MASTER                          =         257  |
   +---------------------------------------------------------+
```
**ANSWER: 257**

**Sanity check:** the rank must be between 1 and 720. 257 is comfortably inside. Also,
MASTER starts with M, the 3rd letter alphabetically, so it must come after the first
2 x 120 = 240 words — and 257 > 240. Consistent.

## 7.4 A SECOND ONE — rank of PRISON

### WORKED EXAMPLE 7.2
Find the rank of the word PRISON.

```
   Letters:  P, R, I, S, O, N — all different.
   Alphabetical:  I , N , O , P , R , S
   Total words = 6! = 720

   Position 1: word has P.  Smaller: I, N, O  ->  3 x 5!  =  3 x 120  =  360
   Fix P.  Left: I, N, O, R, S

   Position 2: word has R.  Smaller: I, N, O  ->  3 x 4!  =  3 x  24  =   72
   Fix R.  Left: I, N, O, S

   Position 3: word has I.  Smaller: none     ->                          0
   Fix I.  Left: N, O, S

   Position 4: word has S.  Smaller: N, O     ->  2 x 2!  =  2 x   2  =    4
   Fix S.  Left: N, O

   Position 5: word has O.  Smaller: N        ->  1 x 1!  =              1
   Fix O.  Left: N

   Position 6:                                                           0
                                                                    -------
   Words before PRISON                                                 437
   PRISON itself                                                      +  1
                                                                    -------
   RANK                                                                438
```
**ANSWER: 438**

## 7.5 RANK WHEN A LETTER REPEATS — the word EAMCET

### WORKED EXAMPLE 7.3
Find the rank of the word EAMCET.

**The only change:** when you count the arrangements of the remaining letters, you must
divide by the factorials of the repeats that are still left over.

```
   Letters of EAMCET:  E, A, M, C, E, T   ->  E twice, and A, M, C, T once each.
   Alphabetical:  A , C , E , E , M , T

                              6!      720
   Total possible words  =  ------ = ------ = 360
                              2!       2

   Position 1: word has E.  Smaller letters available: A and C.

        Starting with A: the rest are C, E, E, M, T   ->  5!/2! = 120/2 = 60
        Starting with C: the rest are A, E, E, M, T   ->  5!/2! = 120/2 = 60
                                                                     ------
                                                                       120
   Fix E in position 1.  Left: A, C, E, M, T  — now ALL DIFFERENT (one E is used).

   Position 2: word has A.  Smaller: none                    ->        0
   Fix A.  Left: C, E, M, T

   Position 3: word has M.  Smaller: C, E   ->  2 x 3! = 2 x 6  =     12
   Fix M.  Left: C, E, T

   Position 4: word has C.  Smaller: none                    ->        0
   Fix C.  Left: E, T

   Position 5: word has E.  Smaller: none                    ->        0
   Fix E.  Left: T

   Position 6:                                                         0
                                                                  --------
   Words before EAMCET                                                132
   EAMCET itself                                                     +  1
                                                                  --------
   RANK                                                               133
```
**ANSWER: 133**

> **TRAP:** After you FIX a repeated letter, the repeat may be used up. In EAMCET, once
> the first E is fixed, only one E is left, so from position 2 onward the letters are all
> different and you no longer divide by 2!. Recount the available letters at every step.

---

# TOPIC 8 — COMBINATIONS: nCr

## 8.1 What a combination is

A **combination** is a SELECTION. Order does NOT matter. A group of people is the same
group no matter what order you name them in.

```
  +--------------------------------------------------------------------------+
  |                                   n!                                     |
  |          nCr   =   ------------------------        (0 <= r <= n)         |
  |                        r! (n - r)!                                       |
  |                                                                          |
  |   Also written  C(n, r)  or  "n choose r".                               |
  +--------------------------------------------------------------------------+
```

## 8.2 The link between nPr and nCr — understand this and you never confuse them

```
  +--------------------------------------------------------------------------+
  |                     nPr   =   nCr   x   r!                               |
  |                     \___/     \___/     \__/                             |
  |                   ARRANGE   =  SELECT  x  then arrange                   |
  |                     r of n     the r     those r among themselves        |
  |                                                                          |
  |                     nCr   =   nPr / r!                                   |
  +--------------------------------------------------------------------------+
```

**Demonstration with A, B, C, D taken 3 at a time:**

```
   SELECTIONS (4C3 = 4)        Each one can be ARRANGED in 3! = 6 ways
   ABC                         ABC ACB BAC BCA CAB CBA
   ABD                         ABD ADB BAD BDA DAB DBA
   ACD                         ACD ADC CAD CDA DAC DCA
   BCD                         BCD BDC CBD CDB DBC DCB
   ----                        ------------------------
   4 selections          x  6  =  24 arrangements  =  4P3   Correct.
```

## 8.3 The fast way to compute nCr

Never use the full factorial form. Use this:

```
                 r factors counting DOWN from n
                 -------------------------------
                 r factors counting UP from 1

           10 x 9 x 8
   10C3 = ------------ = 120
            3 x 2 x 1

           12 x 11 x 10 x 9
   12C4 = ------------------ = 495
            4 x 3 x 2 x 1
```

**Values you should recognise instantly:**

| n\r | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| 5 | 5 | 10 | 10 | 5 | 1 | - |
| 6 | 6 | 15 | 20 | 15 | 6 | 1 |
| 7 | 7 | 21 | 35 | 35 | 21 | 7 |
| 8 | 8 | 28 | 56 | 70 | 56 | 28 |
| 9 | 9 | 36 | 84 | 126 | 126 | 84 |
| 10 | 10 | 45 | 120 | 210 | 252 | 210 |
| 12 | 12 | 66 | 220 | 495 | 792 | 924 |

### WORKED EXAMPLE 8.1
If nPr = 5040 and nCr = 210, find n and r.

```
   nPr = nCr x r!
   5040 = 210 x r!
   r! = 5040 / 210 = 24  =  4!      ->   r = 4

   nP4 = 5040
   n(n-1)(n-2)(n-3) = 5040

   Try n = 10:  10 x 9 x 8 x 7 = 5040    YES

   n = 10 , r = 4
```
**Check:** 10C4 = 210. Correct.
**ANSWER: n = 10, r = 4**

---

# TOPIC 9 — PROPERTIES OF nCr

```
  +--------------------------------------------------------------------------+
  |                                                                          |
  |  P1.   nC0 = nCn = 1          nC1 = n                                    |
  |                                                                          |
  |  P2.   nCr  =  nC(n - r)      "choosing r to KEEP is the same as         |
  |                                choosing (n-r) to LEAVE OUT"              |
  |                                                                          |
  |  P3.   If  nCx = nCy   then   x = y   OR   x + y = n                     |
  |        (ALWAYS check BOTH. Most students forget the second one.)         |
  |                                                                          |
  |  P4.   nCr + nC(r-1)  =  (n+1)Cr           [PASCAL'S RULE]               |
  |                                                                          |
  |  P5.    nCr        n - r + 1                                             |
  |        --------  = -----------                                           |
  |        nC(r-1)         r                                                 |
  |                                                                          |
  |  P6.   n x (n-1)C(r-1)  =  r x nCr                                       |
  |                                                                          |
  |  P7.   GREATEST VALUE OF nCr:                                            |
  |           n EVEN  ->  greatest at  r = n/2                               |
  |           n ODD   ->  greatest at  r = (n-1)/2  or  (n+1)/2              |
  |                       (the two values are equal)                         |
  |                                                                          |
  +--------------------------------------------------------------------------+
```

**Why P2 is true, in plain words.** A class of 10 must pick a team of 3. Picking the 3 who
PLAY is exactly the same decision as picking the 7 who SIT OUT. So 10C3 = 10C7 = 120.
This is the most useful labour-saving trick in the chapter: **50C47 = 50C3 = 19600**,
computed in five seconds instead of five minutes.

**Why P4 (Pascal's rule) is true, in plain words.** From n+1 people choose r.
Look at one particular person, say Ravi.
- Either Ravi is IN the group: then choose the remaining r-1 from the other n -> nC(r-1)
- Or Ravi is OUT: then choose all r from the other n -> nCr
These two cases cannot both happen, so ADD them: (n+1)Cr = nCr + nC(r-1).

**Check:** 9C4 + 9C3 = 126 + 84 = 210 = 10C4. Correct.

### WORKED EXAMPLE 9.1
If 12C(r+1) = 12C(3r-5), find r.

```
   Use P3:  either the lower parts are EQUAL, or they ADD to 12.

   CASE 1:  r + 1 = 3r - 5
            6 = 2r
            r = 3

   CASE 2:  (r + 1) + (3r - 5) = 12
            4r - 4 = 12
            4r = 16
            r = 4

   Both are valid whole numbers within range.
```
**Check:** r = 3: 12C4 = 495 and 12C4 = 495. Correct.
r = 4: 12C5 = 792 and 12C7 = 792 (since 12C7 = 12C5). Correct.
**ANSWER: r = 3 or r = 4**

> **TRAP:** Giving only one answer. Property P3 has TWO branches. Test both, then reject
> only the ones that are not whole numbers or fall outside 0 <= r <= n.

### WORKED EXAMPLE 9.2
If 15C(3r) = 15C(r+3), find r.

```
   CASE 1:  3r = r + 3  ->  2r = 3  ->  r = 1.5   REJECT (not a whole number)

   CASE 2:  3r + (r + 3) = 15  ->  4r = 12  ->  r = 3   ACCEPT
```
**Check:** 15C9 = 15C6. Correct, since 9 + 6 = 15.
**ANSWER: r = 3**

### WORKED EXAMPLE 9.3
If nC5 = nC6, find 13Cn.

```
   nC5 = nC6  ->  5 = 6 (impossible)  OR  5 + 6 = n  ->  n = 11

                              13 x 12
   13Cn = 13C11 = 13C2  =  ----------- =  78
                               2 x 1
```
**ANSWER: 78**

---

# TOPIC 10 — SELECTIONS WITH RESTRICTIONS

## 10.1 The four standard words

```
  +---------------------------+----------------------------------------------+
  |  WORDS IN THE QUESTION    |  WHAT YOU DO                                 |
  +---------------------------+----------------------------------------------+
  |  "always includes" k      |  Those k are already in. Choose the          |
  |   particular objects      |  remaining (r - k) from the remaining        |
  |                           |  (n - k):    (n-k)C(r-k)                     |
  +---------------------------+----------------------------------------------+
  |  "always excludes" k      |  Throw those k away. Choose all r from       |
  |   particular objects      |  the remaining (n - k):    (n-k)Cr           |
  +---------------------------+----------------------------------------------+
  |  "at least m"             |  ADD the cases  m, m+1, m+2, ... up to max   |
  |                           |  (or use TOTAL minus the unwanted cases)     |
  +---------------------------+----------------------------------------------+
  |  "at most m"              |  ADD the cases  0, 1, 2, ..., m              |
  +---------------------------+----------------------------------------------+
```

### WORKED EXAMPLE 10.1
A cricket team of 11 is to be chosen from 15 players. Two particular players must always
be included and one particular player must always be excluded. In how many ways?

**Reasoning first.** Two players are already on the team, so I really only need 9 more.
One player is banned, so he is out of the pool. Pool left = 15 - 2 - 1 = 12.

```
   Choose 9 from 12:

                            12 x 11 x 10
   12C9  =  12C3  =  ------------------------  =  220
                            3 x 2 x 1
```
**ANSWER: 220**

### WORKED EXAMPLE 10.2
From 6 men and 4 women, a committee of 5 is to be formed containing at least 3 men.
In how many ways?

**Reasoning first.** "At least 3 men" out of a 5-member committee means 3 men, or 4 men,
or 5 men. Three separate cases. Inside a case I choose men AND women (multiply);
across cases it is OR (add).

```
   CASE 1:  3 men and 2 women   ->  6C3 x 4C2  =  20 x 6  =  120
   CASE 2:  4 men and 1 woman   ->  6C4 x 4C1  =  15 x 4  =   60
   CASE 3:  5 men and 0 women   ->  6C5 x 4C0  =   6 x 1  =    6
                                                             -----
   Total                                                       186
```
**ANSWER: 186**

**Useful cross-check.** "At least 3 men out of 5" is the same as "at most 2 women".
```
   0 women, 5 men  ->  4C0 x 6C5 =  1 x  6 =   6
   1 woman,  4 men  -> 4C1 x 6C4 =  4 x 15 =  60
   2 women,  3 men  -> 4C2 x 6C3 =  6 x 20 = 120
                                            -----
                                              186     Same answer.
```

### WORKED EXAMPLE 10.3 (a favourite 7-mark question)
Find the number of ways of selecting an 11-member cricket team from 7 batsmen,
6 bowlers and 2 wicket-keepers so that the team contains 2 wicket-keepers and
at least 4 bowlers.

**Reasoning first.** There are exactly 2 wicket-keepers available and both must play, so
that part has only 1 way and uses up 2 places. That leaves 9 places to be filled from
7 batsmen + 6 bowlers, with at least 4 bowlers. Since there are only 7 batsmen, the number
of bowlers cannot drop below 2 anyway — but the condition says at least 4, and there are
only 6 bowlers, so bowlers = 4, 5 or 6.

```
   Wicket-keepers:  2C2 = 1 way.  Places left = 11 - 2 = 9.

   CASE 1:  4 bowlers, 5 batsmen  ->  6C4 x 7C5  =  15 x 21  =  315
   CASE 2:  5 bowlers, 4 batsmen  ->  6C5 x 7C4  =   6 x 35  =  210
   CASE 3:  6 bowlers, 3 batsmen  ->  6C6 x 7C3  =   1 x 35  =   35
                                                               -----
   Total                                                         560
```
**ANSWER: 560**

### WORKED EXAMPLE 10.4
From the letters of the word INVOLUTE, find the number of words that can be formed by
taking 3 vowels and 2 consonants.

```
   INVOLUTE:  vowels     I, O, U, E   (4)
              consonants N, V, L, T   (4)

   STEP 1  Choose 3 vowels from 4:      4C3  =  4
   STEP 2  Choose 2 consonants from 4:  4C2  =  6
   STEP 3  Now ARRANGE the 5 chosen letters into a word:  5!  =  120

   Total  =  4 x 6 x 120  =  2880
```
**ANSWER: 2880**

> **TRAP:** Stopping at 4 x 6 = 24. The question says "words", so you must arrange after
> selecting. **Select with C, then arrange with !** — this is the commonest 4-mark slip.

---

# TOPIC 11 — DIVIDING INTO GROUPS AND DISTRIBUTING

## 11.1 The rule

```
  +--------------------------------------------------------------------------+
  |                                                                          |
  |  UNEQUAL groups of sizes p, q, s   (p + q + s = n),                      |
  |  the groups being distinguishable by their sizes:                        |
  |                                        n!                                |
  |              number of ways  =  ---------------                          |
  |                                   p! q! s!                               |
  |                                                                          |
  |  EQUAL groups: k groups each of size m   (km = n)                        |
  |                                        n!                                |
  |              number of ways  =  -----------------                        |
  |                                  (m!)^k  x  k!                           |
  |                                            ^^^^                          |
  |              divide by k! because the equal groups have no names —       |
  |              swapping two whole groups gives the same division           |
  |                                                                          |
  |  TO DISTRIBUTE the groups to NAMED people, MULTIPLY by k!                |
  |  (which simply cancels the k! above)                                     |
  |                                                                          |
  +--------------------------------------------------------------------------+
```

### WORKED EXAMPLE 11.1
In how many ways can 12 different books be divided into three groups of 3, 4 and 5?

```
   The groups have different sizes, so they are already distinguishable.

        12!         479001600         479001600
   -------------  = ------------  =  ------------  =  27720
    3! x 4! x 5!    6 x 24 x 120        17280
```
**ANSWER: 27720**

### WORKED EXAMPLE 11.2
In how many ways can 12 different books be divided
(i) into three EQUAL groups of 4, (ii) among three students, 4 books each?

```
   (i)  Equal groups, unnamed:

              12!            479001600         479001600
        ---------------  =  ------------  =  ------------  =  5775
         (4!)^3  x  3!       13824 x 6           82944

   (ii) Named students: multiply by 3!

        5775 x 3!  =  5775 x 6  =  34650

        (Or directly:  12!/(4! 4! 4!)  =  479001600/13824  =  34650 )
```
**ANSWER: (i) 5775  (ii) 34650**

> **TRAP:** Forgetting to divide by k! for EQUAL groups. Ask yourself: "if I swap group A
> and group B completely, is anything different?" If the groups have no names, nothing is
> different — so divide. If they are going to Ravi, Sita and Kiran, everything is
> different — so do not divide.

## 11.2 Identical objects into distinct boxes — the BEGGAR (stars-and-bars) method

**The picture.** Give 7 identical rupee coins to 3 beggars. Lay the coins in a row and drop
2 dividers among them. Everything left of divider 1 goes to beggar 1, and so on.

```
     *  *  |  *  *  *  |  *  *          ->   beggar gets 2, 3, 2
     *  |  *  *  *  *  *  *  |          ->   beggar gets 1, 6, 0

   7 stars and 2 bars in a row = 9 symbols; choose which 2 are bars:  9C2 = 36
```

```
  +--------------------------------------------------------------------------+
  |   n IDENTICAL things into r DISTINCT boxes                               |
  |                                                                          |
  |      each box may be EMPTY   ->   (n + r - 1) C (r - 1)                  |
  |      each box gets at least 1 ->  (n - 1) C (r - 1)                      |
  +--------------------------------------------------------------------------+
```

### WORKED EXAMPLE 11.3
In how many ways can 12 identical oranges be distributed among 4 boys so that
(i) each boy gets at least one, (ii) a boy may get none?

```
                                        11 x 10 x 9
   (i)  (12 - 1) C (4 - 1) = 11C3  =  ---------------  =  165
                                          3 x 2 x 1

                                            15 x 14 x 13
   (ii) (12 + 4 - 1) C (4 - 1) = 15C3  =  ---------------  =  455
                                             3 x 2 x 1
```
**ANSWER: (i) 165  (ii) 455**

---

# TOPIC 12 — COUNTING IN GEOMETRY

Every one of these is a combination question in disguise. The key question is always
**"how many points do I need to fix this object?"**

```
  +--------------------------------------------------------------------------+
  |  OBJECT                  |  POINTS NEEDED  |  COUNT                      |
  +--------------------------+-----------------+-----------------------------+
  |  straight line           |        2        |  nC2                        |
  |  triangle                |        3        |  nC3                        |
  |  quadrilateral           |        4        |  nC4                        |
  |  diagonal of an n-gon    |        2        |  nC2 - n  =  n(n-3)/2       |
  |  chord of a circle       |        2        |  nC2                        |
  |  handshake between n     |        2        |  nC2                        |
  +--------------------------+-----------------+-----------------------------+
```

## 12.1 Diagonals of a polygon

```
   Join every pair of vertices:                     nC2  =  n(n-1)/2
   But n of those joins are SIDES, not diagonals:  -  n
                                                   ------------------
                          n(n-1)          n(n-1) - 2n      n(n - 3)
   Number of diagonals =  -------  -  n = -------------  = ----------
                             2                  2              2
```

### WORKED EXAMPLE 12.1
(i) Find the number of diagonals of a decagon.
(ii) A polygon has 44 diagonals. How many sides has it?

```
   (i)  n = 10:   10(10 - 3)/2  =  10 x 7 / 2  =  35

   (ii) n(n - 3)/2 = 44
        n^2 - 3n = 88
        n^2 - 3n - 88 = 0
        (n - 11)(n + 8) = 0
        n = 11    (n = -8 rejected)
```
**Check:** 11 x 8 / 2 = 44. Correct.
**ANSWER: (i) 35  (ii) 11 sides**

## 12.2 Points with some COLLINEAR — the subtraction trick

**The idea.** Three points that lie on the SAME straight line do NOT form a triangle, and
any two of them give the same line, not a new one.

```
  +--------------------------------------------------------------------------+
  |   n points in a plane, of which m are COLLINEAR (no others collinear):   |
  |                                                                          |
  |     Number of triangles       =   nC3  -  mC3                           |
  |     Number of straight lines  =   nC2  -  mC2  +  1                     |
  |                                                    ^^^                   |
  |                       add back the 1 line that the m collinear           |
  |                       points all lie on                                  |
  +--------------------------------------------------------------------------+
```

### WORKED EXAMPLE 12.2
There are 10 points in a plane, of which 4 are collinear. Find
(i) the number of triangles, (ii) the number of straight lines they determine.

```
   (i)  Triangles  =  10C3 - 4C3  =  120 - 4  =  116

   (ii) Lines      =  10C2 - 4C2 + 1  =  45 - 6 + 1  =  40
```
**ANSWER: (i) 116  (ii) 40**

## 12.3 Rectangles on a chessboard

```
   A chessboard is made of 9 horizontal lines and 9 vertical lines.

              9 vertical lines
        |  |  |  |  |  |  |  |  |
     ---+--+--+--+--+--+--+--+--+---
     ---+--+--+--+--+--+--+--+--+---     9 horizontal lines
     ---+--+--+--+--+--+--+--+--+---
     ---+--+--+--+--+--+--+--+--+---
     ---+--+--+--+--+--+--+--+--+---
     ---+--+--+--+--+--+--+--+--+---
     ---+--+--+--+--+--+--+--+--+---
     ---+--+--+--+--+--+--+--+--+---
     ---+--+--+--+--+--+--+--+--+---

   ANY 2 horizontal lines AND ANY 2 vertical lines make exactly one rectangle.

   Rectangles = 9C2 x 9C2 = 36 x 36 = 1296

   Squares    = 8^2 + 7^2 + 6^2 + ... + 1^2
              = 64 + 49 + 36 + 25 + 16 + 9 + 4 + 1  =  204

   Rectangles that are NOT squares = 1296 - 204 = 1092
```

**General rule:** m parallel lines crossed by n parallel lines make mC2 x nC2 parallelograms.

### WORKED EXAMPLE 12.3
Four parallel lines are cut by five other parallel lines. How many parallelograms are
formed?

```
   4C2 x 5C2  =  6 x 10  =  60
```
**ANSWER: 60**

## 12.4 Handshakes

### WORKED EXAMPLE 12.4
In a party every person shakes hands with every other person exactly once. There were
66 handshakes. How many people were present?

```
   nC2 = 66
   n(n-1)/2 = 66
   n(n-1) = 132 = 12 x 11
   n = 12
```
**ANSWER: 12 people**

---

# TOPIC 13 — TOTAL COMBINATIONS, DIVISORS, AND 2^n

## 13.1 The total number of selections

```
  +--------------------------------------------------------------------------+
  |   From n DIFFERENT things:                                               |
  |                                                                          |
  |     nC0 + nC1 + nC2 + ... + nCn  =  2^n                                  |
  |     (each object independently: take it or leave it -> 2 choices each)   |
  |                                                                          |
  |     Number of selections of ONE OR MORE  =  2^n - 1                      |
  |     (throw away the one empty selection)                                 |
  |                                                                          |
  |   From p alike + q alike + r alike things:                               |
  |                                                                          |
  |     one or more  =  (p+1)(q+1)(r+1) - 1                                  |
  |     (from p identical items you may take 0, 1, 2, ..., p                 |
  |      -> that is p+1 choices, not 2^p)                                    |
  +--------------------------------------------------------------------------+
```

### WORKED EXAMPLE 13.1
Find the number of ways of selecting one or more items from
(i) 5 different books, (ii) 4 identical mangoes, 3 identical apples and 2 identical oranges.

```
   (i)   2^5 - 1  =  32 - 1  =  31

   (ii)  (4+1)(3+1)(2+1) - 1  =  5 x 4 x 3 - 1  =  60 - 1  =  59
```
**ANSWER: (i) 31  (ii) 59**

### WORKED EXAMPLE 13.2
A question paper has three parts A, B, C containing 4, 5 and 6 questions. A student must
answer at least one question from each part. In how many ways can he choose the questions?

```
   Part A:  2^4 - 1  =  15        (at least one from A)
   Part B:  2^5 - 1  =  31
   Part C:  2^6 - 1  =  63

   He must do A AND B AND C, so MULTIPLY:

   15 x 31 x 63  =  465 x 63  =  29295
```
**ANSWER: 29295**

## 13.2 Number of divisors of a number, and their sum

**The idea.** Write the number in prime factors. A divisor is built by choosing how many
copies of each prime to use. For 2^4 you may take 2^0, 2^1, 2^2, 2^3 or 2^4 — that is
5 choices, i.e. (power + 1). Multiply the choices, because you pick for each prime AND.

```
  +--------------------------------------------------------------------------+
  |   If   N  =  a^p x b^q x c^s     with a, b, c distinct PRIMES,           |
  |                                                                          |
  |   Number of divisors  =  (p + 1)(q + 1)(s + 1)                           |
  |                                                                          |
  |   Sum of divisors     =  (1 + a + a^2 + ... + a^p)                       |
  |                        x (1 + b + b^2 + ... + b^q)                       |
  |                        x (1 + c + c^2 + ... + c^s)                       |
  |                                                                          |
  |   Number of PROPER divisors (excluding 1 and N)                          |
  |                       =  (p+1)(q+1)(s+1) - 2                             |
  +--------------------------------------------------------------------------+
```

### WORKED EXAMPLE 13.3
Find the number of positive divisors of 1080 and their sum.

```
   Factorise:   1080 = 8 x 135 = 2^3 x 3^3 x 5

   Number of divisors  =  (3+1)(3+1)(1+1)  =  4 x 4 x 2  =  32

   Sum of divisors     =  (1 + 2 + 4 + 8)(1 + 3 + 9 + 27)(1 + 5)
                       =  15 x 40 x 6
                       =  600 x 6
                       =  3600
```
**ANSWER: 32 divisors, sum 3600**

### WORKED EXAMPLE 13.4
Find the number of divisors of 3600 and their sum.

```
   3600 = 36 x 100 = (2^2 x 3^2)(2^2 x 5^2) = 2^4 x 3^2 x 5^2

   Number of divisors =  (4+1)(2+1)(2+1)  =  5 x 3 x 3  =  45

   Sum  =  (1+2+4+8+16)(1+3+9)(1+5+25)
        =  31 x 13 x 31
        =  403 x 31
        =  12493
```
**ANSWER: 45 divisors, sum 12493**

---

# TOPIC 14 — SUM OF ALL THE NUMBERS FORMED

## 14.1 The formula and why it works

**The idea.** If you form all the numbers using n given digits (no repetition, all digits
used), then by symmetry every digit appears in every place-value column the same number
of times, namely n!/n = (n-1)! times.

```
  +--------------------------------------------------------------------------+
  |                                                                          |
  |  Sum of all n-digit numbers formed by n given non-zero digits            |
  |  (each used once) =                                                      |
  |                                                                          |
  |        (n - 1)!  x  (sum of the digits)  x  (111...1 with n ones)        |
  |                                                                          |
  |  The repunit comes from adding the place values 1 + 10 + 100 + ...       |
  +--------------------------------------------------------------------------+
```

### WORKED EXAMPLE 14.1
Find the sum of all 4-digit numbers formed using the digits 1, 2, 4, 5 without repetition.

```
   Total numbers = 4! = 24
   Each digit appears in each column  24 / 4  =  6  =  3!  times.
   Sum of digits = 1 + 2 + 4 + 5 = 12

   Sum  =  3!  x  12  x  1111
        =  6   x  12  x  1111
        =  72  x  1111
        =  79992
```
**Check the size:** the smallest number is 1245, the largest 5421, so the average is
roughly 3333 and 24 x 3333 = 79992 — matches exactly.
**ANSWER: 79992**

---

# TOPIC 15 — THE FULL "IS IT P OR C?" WORKBOOK

Practise this table until the decision takes one second.

| Question wording | P or C? | Why |
|---|---|---|
| "How many words can be formed..." | **P** | word order changes the word |
| "How many numbers can be formed..." | **P** | 1234 is not 4321 |
| "How many committees..." | **C** | a committee has no order |
| "How many teams of 11..." | **C** | a team is a set of people |
| "In how many ways can they be seated..." | **P** | seats are positions |
| "How many handshakes..." | **C** | A-B is the same handshake as B-A |
| "How many triangles from these points..." | **C** | triangle ABC = triangle BCA |
| "How many straight lines..." | **C** | line AB = line BA |
| "How many diagonals..." | **C** | same reason |
| "Select 3 vowels and 2 consonants and form words" | **C then P** | select, then arrange |
| "In how many ways can prizes be given (1st, 2nd, 3rd)" | **P** | the prizes are ranked |
| "In how many ways can 3 identical prizes be given" | **C** | prizes are the same |
| "How many diagonals of a polygon" | **C** | pairs of vertices |
| "Arrange round a table" | **P** (circular) | (n-1)! |
| "Make a garland" | **P** (circular /2) | can be flipped |

---

# CHECKLIST BEFORE YOU HAND IN THE PAPER

```
  [ ]  Did I decide PERMUTATION or COMBINATION before writing anything?
  [ ]  Did I write the letter-count table for every word question, and did the
       counts ADD UP to the number of letters?
  [ ]  0! = 1  — did I use 1, not 0?
  [ ]  In a NUMBERS question, did I stop the first digit from being 0?
  [ ]  In a CIRCLE question, did I use (n-1)! and not n! ?
  [ ]  Is the object a garland / necklace / key ring? Then did I divide by 2?
  [ ]  In an "at least" question, did I list ALL the cases and ADD them?
  [ ]  In an "always together" question, did I multiply by the arrangements
       INSIDE the block?
  [ ]  In a "never together" question, did I count the gaps as (m + 1),
       remembering the two END gaps?
  [ ]  In nCx = nCy, did I check BOTH  x = y  AND  x + y = n ?
  [ ]  In an EQUAL-groups division, did I divide by k! ?
  [ ]  In a rank-of-a-word question, did I remember the final  + 1 ?
  [ ]  Is my final answer a WHOLE NUMBER? A fraction means an arithmetic slip.
  [ ]  Is the size of my answer sensible? A 6-letter word cannot have a rank
       bigger than 720.
  [ ]  Did I show the CASE headings clearly? Examiners give method marks for
       correctly identified cases even if the arithmetic slips.
```

---

# THE FIVE SENTENCES THAT SUMMARISE THE CHAPTER

```
  1.  AND means multiply.  OR means add.
  2.  Order matters -> nPr.  Order does not matter -> nCr.  nPr = nCr x r!
  3.  Identical objects -> divide by the factorials of the repeats.
  4.  A circle costs you one arrangement: (n-1)!.  A flip costs you another: /2.
  5.  "At least" always means: break into cases and add.
```
