# Permutations and Combinations — Competitive Exam Questions

**Maths IIA · Chapter 5 · EAPCET / JEE Main**

This chapter is a gift in entrance exams. Most questions are ONE line of thinking plus
one multiplication. No algebra, no calculus, no long working. Do these first in the exam.

---

# HOW MUCH THIS CHAPTER IS WORTH

```
  +---------------+----------+---------------------+--------+------------------+
  |  EXAM         |  MATHS   |  Qs FROM THIS       | TIME   |  MARKING         |
  |               |  TOTAL   |  CHAPTER (typical)  | EACH   |                  |
  +---------------+----------+---------------------+--------+------------------+
  |  AP EAPCET    |    80    |      2 - 3          |  45 s  |  +1, NO minus    |
  |  TG EAPCET    |    80    |      2 - 3          |  45 s  |  +1, NO minus    |
  |  JEE Main     |    25    |      1 - 2          |  90 s  |  +4 , -1         |
  +---------------+----------+---------------------+--------+------------------+

  EAPCET has NO negative marking  ->  NEVER leave a blank. Guess if you must.
  JEE Main has -1                 ->  skip only what you genuinely cannot start.
```

Counting questions are usually combined with Binomial Theorem and Probability. Every
probability question in EAPCET is secretly a counting question, so this chapter pays
you three times over.

---

# =====================================================================
# PATTERN 1 — EVALUATE, OR SOLVE FOR n OR r
# =====================================================================

### Q1. The value of 10P3 is
(a) 120  (b) 720  (c) 30  (d) 5040

**ANSWER: (b) 720**
```
   10P3 = 10 x 9 x 8 = 720        (3 factors counting down)
```

> **SHORTCUT:** nPr = r factors counting DOWN from n. Never write the factorial form.

---

### Q2. If nP4 = 12 x nP2, then n =
(a) 5  (b) 6  (c) 7  (d) 8

**ANSWER: (b) 6**
```
   n(n-1)(n-2)(n-3)  =  12 n(n-1)
   (n-2)(n-3) = 12 = 4 x 3
   n - 2 = 4    ->    n = 6
```

> **SHORTCUT:** Cancel the common leading factors, then factorise the small number as a
> product of CONSECUTIVE integers. 12 = 4 x 3, 20 = 5 x 4, 42 = 7 x 6, 56 = 8 x 7.

---

### Q3. If nC10 = nC15, then n =
(a) 5  (b) 15  (c) 25  (d) 150

**ANSWER: (c) 25**
```
   10 = 15 is impossible, so  10 + 15 = n   ->   n = 25
```

---

### Q4. The value of 20C17 + 20C18 is
(a) 1140  (b) 1330  (c) 190  (d) 210

**ANSWER: (b) 1330**
```
   Pascal:  20C18 + 20C17  =  21C18  =  21C3

              21 x 20 x 19       7980
   21C3  =  ---------------  =  ------  =  1330
                3 x 2 x 1          6
```

> **SHORTCUT:** Two nCr terms with the SAME n and lower indices differing by 1 always
> merge into a single (n+1)C(bigger index).

---

### Q5. If 2nC3 : nC3 = 11 : 1, then n =
(a) 5  (b) 6  (c) 9  (d) 12

**ANSWER: (b) 6**
```
    2nC3       2n(2n-1)(2n-2)         4n(2n-1)(n-1)        4(2n - 1)
   ------  =  ----------------  =  -------------------  =  ----------
    nC3        n(n-1)(n-2)           n(n-1)(n-2)             n - 2

   4(2n - 1) = 11(n - 2)
   8n - 4 = 11n - 22
   3n = 18       ->      n = 6
```
**Check:** 12C3 = 220, 6C3 = 20, ratio = 11 : 1. Correct.

---

### Q6. If nCr : nC(r+1) = 1 : 2 and nC(r+1) : nC(r+2) = 2 : 3, then (n, r) =
(a) (14, 4)  (b) (12, 4)  (c) (14, 5)  (d) (10, 3)

**ANSWER: (a) (14, 4)**
```
     nCr          r + 1        1
   ---------  =  --------  =  ---     ->   2r + 2 = n - r   ->   n = 3r + 2
   nC(r+1)        n - r        2

   nC(r+1)        r + 2         2
   ---------  =  -----------  = ---   ->  3r + 6 = 2n - 2r - 2  ->  2n = 5r + 8
   nC(r+2)        n - r - 1      3

   Substitute:  2(3r + 2) = 5r + 8   ->   6r + 4 = 5r + 8   ->   r = 4
                n = 3(4) + 2 = 14
```

> **SHORTCUT:** Memorise  nCr / nC(r-1) = (n - r + 1)/r. Every ratio question collapses
> to two small linear equations.

---

### Q7. The greatest value of 15Cr is
(a) 15C5  (b) 15C7  (c) 15C15  (d) 15C1

**ANSWER: (b) 15C7**  ( = 15C8 = 6435)
```
   n = 15 is ODD  ->  greatest at  r = (15-1)/2 = 7  or  r = (15+1)/2 = 8.
   Both give the same value.
```

---

# =====================================================================
# PATTERN 2 — ARRANGEMENTS OF A WORD WITH REPEATED LETTERS
# =====================================================================

### Q8. The number of arrangements of the letters of the word SUCCESS is
(a) 420  (b) 840  (c) 5040  (d) 210

**ANSWER: (a) 420**
```
   SUCCESS: 7 letters,  S x3 , C x2 , U , E
   Check: 3 + 2 + 1 + 1 = 7   OK

     7!       5040
   ------  =  -----  =  420
   3! 2!        12
```

---

### Q9. The number of arrangements of the letters of the word BANANA is
(a) 60  (b) 120  (c) 720  (d) 360

**ANSWER: (a) 60**
```
   BANANA: 6 letters, A x3, N x2, B x1

     6!       720
   ------  =  -----  =  60
   3! 2!       12
```

---

### Q10. The number of arrangements of the letters of the word ALLAHABAD is
(a) 7560  (b) 3780  (c) 15120  (d) 362880

**ANSWER: (a) 7560**
```
   ALLAHABAD: 9 letters, A x4, L x2, H, B, D
   Check: 4 + 2 + 1 + 1 + 1 = 9   OK

     9!        362880
   ------  =  --------  =  7560
   4! 2!         48
```

> **SHORTCUT:** Always write the letter-count line first and CHECK it sums to the number
> of letters. That single check catches most wrong options.

---

### Q11. The number of arrangements of the letters of MISSISSIPPI in which no two S's are
adjacent is
(a) 7350  (b) 28350  (c) 34650  (d) 8820

**ANSWER: (a) 7350**
```
   Remove the four S's. Left: M, I, I, I, I, P, P  (7 letters)

     7!        5040
   ------  =  ------  =  105
   4! 2!        48

   7 letters make 8 gaps. The four S's are identical, so CHOOSE 4 gaps:
   8C4 = 70

   105 x 70 = 7350
```

---

# =====================================================================
# PATTERN 3 — ALWAYS TOGETHER / NEVER TOGETHER
# =====================================================================

### Q12. The number of arrangements of the letters of OPTICAL in which the vowels are
always together is
(a) 120  (b) 720  (c) 5040  (d) 1440

**ANSWER: (b) 720**
```
   OPTICAL = 7 different letters.  Vowels O, I, A (3).  Consonants P, T, C, L (4).
   Units = 4 + 1 = 5

   5! x 3! = 120 x 6 = 720
```

> **SHORTCUT:** "Always together" = glue. Answer = (units)! x (inside)!. Two factorials
> multiplied — if an option is a single factorial, it is almost certainly wrong.

---

### Q13. The number of arrangements of the letters of ARRANGE in which the two R's do NOT
come together is
(a) 900  (b) 1260  (c) 360  (d) 540

**ANSWER: (a) 900**
```
   ARRANGE: 7 letters, A x2, R x2, N, G, E

                 7!       5040
   Total   =   ------  =  ------  =  1260
               2! 2!        4

   Two R's together: glue them into one unit -> 6 units, with A still twice

                 6!       720
   Together =   ----   =  -----  =  360
                 2!         2

   Not together = 1260 - 360 = 900
```

---

### Q14. In how many ways can 6 boys and 4 girls be arranged in a row so that no two girls
are together?
(a) 604800  (b) 43200  (c) 86400  (d) 17280

**ANSWER: (a) 604800**
```
   Boys first:  6! = 720
   Gaps: 7      _ B _ B _ B _ B _ B _ B _
   Girls into 4 of the 7 gaps:  7P4 = 7 x 6 x 5 x 4 = 840

   720 x 840 = 604800
```

> **SHORTCUT:** m free objects give (m + 1) gaps. Never forget the two END gaps.

---

### Q15. In how many ways can 4 boys and 3 girls sit in a row so that all the girls sit
together?
(a) 720  (b) 5040  (c) 144  (d) 1440

**ANSWER: (a) 720**
```
   Units = 4 boys + 1 girl-block = 5   ->   5! = 120
   Inside the block  ->  3! = 6

   120 x 6 = 720
```

---

# =====================================================================
# PATTERN 4 — CIRCULAR ARRANGEMENTS
# =====================================================================

### Q16. The number of ways of seating 10 persons around a circular table is
(a) 10!  (b) 9!  (c) 9!/2  (d) 10!/2

**ANSWER: (b) 9!**  ( = 362880)

---

### Q17. The number of ways of making a necklace with 12 different beads is
(a) 11!  (b) 12!  (c) 11!/2  (d) 12!/2

**ANSWER: (c) 11!/2**  ( = 39916800/2 = 19958400)

> **SHORTCUT:** Can the object be FLIPPED OVER? Necklace, garland, bangle, chain, key
> ring — yes, so divide by 2. People at a table — no, so do not.

---

### Q18. In how many ways can 5 men and 5 women be seated around a circular table so that
no two men sit together?
(a) 2880  (b) 14400  (c) 86400  (d) 120

**ANSWER: (a) 2880**
```
   Seat the 5 women around the circle:   (5 - 1)! = 4! = 24
   Five women create 5 gaps.
   Seat the 5 men in those 5 gaps:        5! = 120

   24 x 120 = 2880
```

---

### Q19. Seven persons sit around a circular table. The number of arrangements in which
two particular persons never sit together is
(a) 480  (b) 240  (c) 720  (d) 1440

**ANSWER: (a) 480**
```
   Total circular arrangements  =  (7 - 1)! = 6! = 720
   Two particular together      =  (6 - 1)! x 2! = 120 x 2 = 240

   Never together = 720 - 240 = 480
```

---

# =====================================================================
# PATTERN 5 — NUMBERS FORMED WITH GIVEN DIGITS
# =====================================================================

### Q20. How many 3-digit numbers can be formed from the digits 0, 1, 2, 3, 4 without
repetition?
(a) 60  (b) 48  (c) 24  (d) 100

**ANSWER: (b) 48**
```
   Hundreds place cannot be 0:

   4  x  4  x  3  =  48
   ^     ^     ^
  not 0  0 now allowed
```

> **SHORTCUT:** In every "how many numbers" question, ask FIRST: is 0 among the digits?
> If yes, fill the leading place first with (digits - 1) choices.

---

### Q21. How many numbers lie between 100 and 1000 that can be formed with the digits
1, 2, 3, 4, 5 if repetition is allowed?
(a) 60  (b) 125  (c) 100  (d) 243

**ANSWER: (b) 125**
```
   Numbers between 100 and 1000 are exactly the 3-digit numbers.
   Each of the 3 places has 5 choices:   5^3 = 125
```

---

### Q22. How many 4-digit numbers formed from the digits 1 to 9 (repetition allowed) are
divisible by 5?
(a) 729  (b) 1000  (c) 6561  (d) 3645

**ANSWER: (a) 729**
```
   0 is not available, so a number is divisible by 5 only if the units digit is 5.

   9 x 9 x 9 x 1  =  729
```

---

### Q23. The number of numbers greater than 1000 but not greater than 4000 that can be
formed with the digits 0, 1, 2, 3, 4 (repetition allowed) is
(a) 350  (b) 375  (c) 500  (d) 376

**ANSWER: (b) 375**
```
   The thousands digit must be 1, 2 or 3      ->  3 choices
   The other three digits are free (all 5)    ->  5 x 5 x 5 = 125

   3 x 125 = 375     ->  but this range is 1000 to 3999

   Now adjust the two ends:
        1000 itself is NOT greater than 1000     ->  subtract 1
        4000 IS allowed ("not greater than 4000") ->  add 1

   375 - 1 + 1 = 375
```

---

### Q24. The sum of all 4-digit numbers formed using the digits 1, 3, 5, 7 without
repetition is
(a) 106656  (b) 79992  (c) 26664  (d) 44440

**ANSWER: (a) 106656**
```
   Numbers formed = 4! = 24. Each digit sits in each column 24/4 = 6 times.
   Sum of digits = 1 + 3 + 5 + 7 = 16

   Sum = 6 x 16 x 1111 = 96 x 1111 = 106656
```

> **SHORTCUT:** Sum = (n-1)! x (sum of digits) x (repunit). For 4 digits the repunit is
> 1111, for 3 digits it is 111, for 5 digits it is 11111.

---

### Q25. The number of 5-digit telephone numbers (digits 0-9, leading zero allowed) having
at least one digit repeated is
(a) 69760  (b) 30240  (c) 100000  (d) 90000

**ANSWER: (a) 69760**
```
   Total possible          =  10^5   =  100000
   All digits DIFFERENT    =  10P5   =  10 x 9 x 8 x 7 x 6  =  30240

   At least one repeated   =  100000 - 30240  =  69760
```

> **SHORTCUT:** "At least one repeated" is always TOTAL minus ALL-DIFFERENT. Never count
> the repeats directly.

---

# =====================================================================
# PATTERN 6 — SELECTIONS AND COMMITTEES
# =====================================================================

### Q26. A committee of 5 is to be formed from 6 men and 5 women. The number of committees
containing at least one woman is
(a) 456  (b) 462  (c) 6  (d) 450

**ANSWER: (a) 456**
```
   Total committees      =  11C5  =  462
   Committees with NO woman (all 5 men)  =  6C5  =  6

   At least one woman    =  462 - 6  =  456
```

> **SHORTCUT:** "At least ONE" is almost always faster as TOTAL minus NONE.
> "At least THREE" usually needs the cases added.

---

### Q27. A bag contains 5 black and 6 red balls. The number of ways of selecting 2 black
and 3 red balls is
(a) 200  (b) 100  (c) 300  (d) 462

**ANSWER: (a) 200**
```
   5C2 x 6C3  =  10 x 20  =  200
```

---

### Q28. From 4 officers and 8 jawans, in how many ways can 6 be chosen to include exactly
one officer?
(a) 224  (b) 896  (c) 56  (d) 112

**ANSWER: (a) 224**
```
   4C1 x 8C5  =  4 x 56  =  224           (8C5 = 8C3 = 56)
```

---

### Q29. The number of ways of selecting any number of fruits from 5 identical apples,
10 identical mangoes and 15 identical oranges, taking at least one fruit, is
(a) 1055  (b) 1056  (c) 750  (d) 2^30 - 1

**ANSWER: (a) 1055**
```
   Apples : take 0,1,...,5    ->   6 choices
   Mangoes: take 0,1,...,10   ->  11 choices
   Oranges: take 0,1,...,15   ->  16 choices

   6 x 11 x 16  =  1056        (includes taking nothing)
   At least one =  1056 - 1  =  1055
```

> **SHORTCUT:** IDENTICAL items give (count + 1) choices, NOT 2^count.
> DIFFERENT items give 2^n. Read the word "identical" carefully.

---

### Q30. The number of ways of distributing 5 different books among 3 students (a student
may get any number, including none) is
(a) 243  (b) 125  (c) 15  (d) 10

**ANSWER: (a) 243**
```
   Each BOOK chooses a student:   3 x 3 x 3 x 3 x 3  =  3^5  =  243
```

> **SHORTCUT:** The thing being PLACED goes in the exponent. Books are placed into
> students, so 3^5 not 5^3.

---

# =====================================================================
# PATTERN 7 — COUNTING IN GEOMETRY
# =====================================================================

### Q31. The number of diagonals of a polygon of 20 sides is
(a) 170  (b) 190  (c) 380  (d) 210

**ANSWER: (a) 170**
```
   n(n - 3)/2  =  20 x 17 / 2  =  170
```

---

### Q32. There are 12 points in a plane of which 5 are collinear. The number of triangles
formed is
(a) 210  (b) 220  (c) 200  (d) 110

**ANSWER: (a) 210**
```
   12C3 - 5C3  =  220 - 10  =  210
```

---

### Q33. In the same figure (12 points, 5 collinear), the number of straight lines is
(a) 57  (b) 66  (c) 56  (d) 46

**ANSWER: (a) 57**
```
   12C2 - 5C2 + 1  =  66 - 10 + 1  =  57
```

> **SHORTCUT:** Triangles SUBTRACT only. Lines subtract AND add back 1 (the collinear
> points still form one line). Forgetting the +1 is the commonest error here.

---

### Q34. Four parallel lines are cut by six other parallel lines. The number of
parallelograms formed is
(a) 90  (b) 60  (c) 24  (d) 120

**ANSWER: (a) 90**
```
   4C2 x 6C2  =  6 x 15  =  90
```

---

### Q35. The number of squares on an ordinary 8 x 8 chessboard is
(a) 64  (b) 204  (c) 1296  (d) 1092

**ANSWER: (b) 204**
```
   1^2 + 2^2 + 3^2 + ... + 8^2
   = 1 + 4 + 9 + 16 + 25 + 36 + 49 + 64
   = 204

   (Rectangles = 9C2 x 9C2 = 1296.  Non-square rectangles = 1296 - 204 = 1092.)
```

---

### Q36. In a party each person shakes hands with every other person once. If there were
45 handshakes, the number of persons is
(a) 9  (b) 10  (c) 11  (d) 15

**ANSWER: (b) 10**
```
   nC2 = 45   ->   n(n-1)/2 = 45   ->   n(n-1) = 90 = 10 x 9   ->   n = 10
```

---

# =====================================================================
# PATTERN 8 — DIVISORS, SUBSETS, IDENTICAL OBJECTS
# =====================================================================

### Q37. The number of divisors of 2^5 x 3^4 x 5^2 is
(a) 90  (b) 60  (c) 40  (d) 120

**ANSWER: (a) 90**
```
   (5 + 1)(4 + 1)(2 + 1)  =  6 x 5 x 3  =  90
```

---

### Q38. The number of EVEN divisors of 720 is
(a) 24  (b) 30  (c) 6  (d) 12

**ANSWER: (a) 24**
```
   720  =  2^4 x 3^2 x 5

   All divisors  =  5 x 3 x 2  =  30
   ODD divisors  =  the ones with no 2 at all  =  3 x 2  =  6
   EVEN divisors =  30 - 6  =  24
```

> **SHORTCUT:** For EVEN divisors, force at least one 2: the exponent of 2 has
> (power) choices instead of (power + 1). Here 4 x 3 x 2 = 24 — same answer, one step.

---

### Q39. The number of ways of distributing 10 identical balls into 4 distinct boxes
(a box may be empty) is
(a) 286  (b) 84  (c) 210  (d) 1001

**ANSWER: (a) 286**
```
   (n + r - 1) C (r - 1)  =  13C3

               13 x 12 x 11        1716
   13C3  =  ------------------  =  ------  =  286
                 3 x 2 x 1            6
```

---

### Q40. The number of non-negative integer solutions of x + y + z = 10 is
(a) 66  (b) 36  (c) 55  (d) 45

**ANSWER: (a) 66**
```
   Same beggar formula with n = 10, r = 3:

                             12 x 11
   12C2  =  --------------------------  =  66
                              2 x 1
```

> **SHORTCUT:** "x + y + z = n, non-negative" -> (n + 2)C2.
> "x, y, z all POSITIVE" -> (n - 1)C2.

---

### Q41. The number of subsets of a set containing 8 elements, having at least one element,
is
(a) 255  (b) 256  (c) 128  (d) 254

**ANSWER: (a) 255**
```
   2^8 - 1  =  256 - 1  =  255
```

---

# =====================================================================
# PATTERN 9 — RANK OF A WORD (appears in JEE Main too)
# =====================================================================

### Q42. If the letters of the word SACHIN are arranged in all possible ways and listed in
dictionary order, the word SACHIN appears at serial number
(a) 601  (b) 600  (c) 603  (d) 602

**ANSWER: (a) 601**
```
   Alphabetical order:  A , C , H , I , N , S

   Position 1: the word starts with S — the LAST letter alphabetically.
               So all 5 other starting letters come first:
                    5 x 5!  =  5 x 120  =  600

   Fix S. Left: A, C, H, I, N.
   The rest of the word is A C H I N — which is exactly alphabetical order,
   so nothing comes before it at any later position.

   Rank = 600 + 1 = 601
```

> **SHORTCUT:** If the letters after the first are already in alphabetical order, the
> word is the FIRST of its block, so the rank is just (count before) + 1.

---

### Q43. The number of words that can be formed using all the letters of DELHI which begin
with D and end with I is
(a) 6  (b) 24  (c) 120  (d) 12

**ANSWER: (a) 6**
```
   D _ _ _ I   with E, L, H in the middle:   3! = 6
```

---

### Q44. The number of ways of arranging 6 different books on a shelf so that two
particular books are never together is
(a) 480  (b) 240  (c) 720  (d) 600

**ANSWER: (a) 480**
```
   Total       =  6!            =  720
   Together    =  5! x 2!       =  120 x 2  =  240
   Never       =  720 - 240     =  480
```

---

# =====================================================================
# SPEED RULES FOR THE EXAM HALL
# =====================================================================

```
  +--------------------------------------+-------------------------------------+
  |  IF YOU SEE THIS ...                 |  DO THIS IMMEDIATELY                |
  +--------------------------------------+-------------------------------------+
  |  "arrange" / "words" / "numbers"     |  PERMUTATION. Use nPr.              |
  |  "select" / "committee" / "team"     |  COMBINATION. Use nCr.              |
  |  "handshakes" / "lines" / "chords"   |  nC2                                |
  |  "triangles"                         |  nC3                                |
  |  "diagonals"                         |  n(n-3)/2                           |
  |  "collinear points" + triangles      |  nC3 - mC3                          |
  |  "collinear points" + lines          |  nC2 - mC2 + 1   (do not lose the +1)|
  |  "round a table"                     |  (n-1)!                             |
  |  "necklace / garland / chain / ring" |  (n-1)!/2                           |
  |  "always together"                   |  glue: (units)! x (inside)!         |
  |  "never together" (2 objects)        |  total - together                   |
  |  "no two together" (many objects)    |  arrange the rest, then use gaps    |
  |  gaps                                |  m objects -> (m+1) gaps            |
  |  "at least ONE"                      |  total - none                       |
  |  "at least THREE / FOUR"             |  add the cases                      |
  |  "at least one digit repeated"       |  total - all different              |
  |  a word with repeated letters        |  n!/(p! q! r!)                      |
  |  "repetition allowed"                |  n^r  (placed thing in the EXPONENT)|
  |  "identical" objects, any number     |  (p+1)(q+1)(r+1)                    |
  |  "different" objects, any number     |  2^n     (at least one -> 2^n - 1)  |
  |  identical objects into boxes        |  (n+r-1)C(r-1)  or  (n-1)C(r-1)     |
  |  x + y + z = n, non-negative         |  (n+2)C2                            |
  |  divisors of a number                |  factorise, then (p+1)(q+1)(s+1)    |
  |  even divisors                       |  drop one from the power of 2       |
  |  nCx = nCy                           |  x = y  OR  x + y = n  — CHECK BOTH |
  |  nCr + nC(r-1)                       |  = (n+1)Cr, merge instantly         |
  |  a big r in nCr                      |  flip it: nCr = nC(n-r)             |
  |  "rank in dictionary order"          |  count-before, then + 1             |
  |  the digit 0 is in the list          |  fill the LEADING place first       |
  |  the answer is a fraction            |  you made an arithmetic slip        |
  +--------------------------------------+-------------------------------------+
```

---

# THE 45-SECOND ROUTINE

```
   0 - 5 s     Read once. Circle the key word: arrange? select? together? at least?

   5 - 15 s    Write the ONE formula that matches. Nothing else.

  15 - 35 s    Substitute and multiply. Use the down-counting form of nPr and nCr —
               never full factorials.

  35 - 45 s    Sanity check:
                  Is the answer a whole number?
                  Is it smaller than the unrestricted total?
                  Does the size feel right?

   If you are still lost at 45 seconds:  in EAPCET, GUESS (no negative marking) —
   in JEE Main, move on.
```

---

# THE FIVE MISTAKES THAT COST THE MOST MARKS HERE

```
  1.  nCr used where nPr was needed (or the reverse).            Read the verb.
  2.  Forgetting the "+1" in  nC2 - mC2 + 1.
  3.  Using n! for a circular arrangement.
  4.  Using 2^n for IDENTICAL objects instead of (n + 1).
  5.  Letting a number start with 0.
```
