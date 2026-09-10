# Permutations and Combinations — AP Board Previous-Year Questions

**Board:** Board of Intermediate Education, Andhra Pradesh (BIEAP)
**Paper:** Maths IIA · **Chapter 5**

> **About the year tags:** BIEAP recycles the same questions across many sessions.
> So these are grouped by "how often they appear" rather than by a single year.
> Before your exam, cross-check with the official papers at **bie.ap.gov.in**.
> Never quote a year you have not personally verified.

**Where this chapter appears in the Maths IIA paper:**

```
  MATHS IIA  =  75 marks

  Section A  (2 marks each, answer ALL 10)   ->  usually Q4 and Q5
  Section B  (4 marks each, answer any 5)    ->  usually Q17
  Section C  (7 marks each, answer any 5)    ->  usually Q21 or Q22

  Realistic haul from this chapter:  2 + 2 + 4 + 7  =  about 13-15 marks
```

**How to use this file.** Cover the answer with a sheet of paper. Attempt the question.
Then check. If you got it wrong, write the correct solution out by hand — do not just
read it.

---

# ===============================================================
# SECTION A — VERY SHORT ANSWER (2 marks)
# These are your GUARANTEED marks. Answer all 10 in the paper.
# ===============================================================

## Topic: nPr — evaluating and solving for n or r

### Q A1
If nP7 = 42 x nP5, find n.

**ANSWER:**
```
      n!                n!
   --------  =  42 x --------
    (n - 7)!          (n - 5)!

   Cancel n! from both sides and cross-multiply:

    (n - 5)!
   ----------  =  42
    (n - 7)!

   (n - 5)(n - 6)  =  42  =  7 x 6

   n - 5 = 7   ->   n = 12
```
**Check:** (12-5)(12-6) = 7 x 6 = 42. Correct.  **n = 12**

---

### Q A2
If 12Pr = 1320, find r.

**ANSWER:**
```
   12Pr means r factors counting down from 12.

   12 x 11        =   132
   12 x 11 x 10   =  1320      <-- three factors

   r = 3
```
**r = 3**

---

### Q A3
If (n+1)P5 : nP5 = 3 : 2, find n.

**ANSWER:**
```
   (n+1)P5       (n+1)!       (n - 5)!         n + 1
   --------  =  --------  x  ----------  =  ---------
     nP5         (n - 4)!        n!            n - 4

    n + 1       3
   -------  =  ---
    n - 4       2

   2(n + 1) = 3(n - 4)
   2n + 2 = 3n - 12
   n = 14
```
**Check:** 15P5/14P5 = (15.14.13.12.11)/(14.13.12.11.10) = 15/10 = 3/2. Correct.
**n = 14**

---

### Q A4
Find the number of 4-letter words that can be formed using the letters of the word
MIRACLE.

**ANSWER:**
```
   MIRACLE has 7 different letters. "Words" means ARRANGE.

   7P4  =  7 x 6 x 5 x 4  =  840
```
**840**

---

### Q A5
Find the number of injections (one-one functions) from a set with 4 elements into a set
with 6 elements.

**ANSWER:**
```
   Each of the 4 elements must go to a DIFFERENT image, so nothing repeats.

   6P4  =  6 x 5 x 4 x 3  =  360
```
**360**

---

### Q A6
Find the number of functions from a set with 5 elements into a set with 4 elements.

**ANSWER:**
```
   Every one of the 5 elements independently picks any of the 4 images.

   4^5  =  1024
```
**1024**

---

## Topic: Arrangements of the letters of a word

### Q A7
Find the number of ways of arranging the letters of the word MATHEMATICS.

**ANSWER:**
```
   MATHEMATICS has 11 letters:  M x2, A x2, T x2, and H, E, I, C, S once each.
   Check: 2 + 2 + 2 + 1 + 1 + 1 + 1 + 1 = 11   OK

      11!        39916800
   ---------  =  ---------  =  4989600
   2! 2! 2!          8
```
**4989600**

---

### Q A8
Find the number of ways of arranging the letters of the word INTERMEDIATE.

**ANSWER:**
```
   12 letters:  E x3, I x2, T x2, and N, R, M, D, A once each.
   Check: 3 + 2 + 2 + 1 + 1 + 1 + 1 + 1 = 12   OK

      12!         479001600
   ---------  =  -----------  =  19958400
   3! 2! 2!           24
```
**19958400**

---

### Q A9
Find the number of ways of arranging the letters of the word SPECIAL so that the vowels
come together.

**ANSWER:**
```
   SPECIAL = 7 different letters.  Vowels: E, I, A (3).  Consonants: S, P, C, L (4).

   Glue the vowels:   [E I A] S P C L   ->  5 units

   Arrange the units       =  5!  =  120
   Arrange inside the block =  3!  =    6

   120 x 6  =  720
```
**720**

---

### Q A10
Find the number of ways of arranging the letters of the word ANGLE so that no two
vowels come together.

**ANSWER:**
```
   Consonants N, G, L:   3!  =  6
   Gaps:   _ N _ G _ L _         ->  4 gaps
   Place the 2 different vowels A, E:   4P2  =  4 x 3  =  12

   6 x 12  =  72
```
**Check:** total 5! = 120; vowels together = 4! x 2! = 48; 120 - 48 = 72. Correct.
**72**

---

## Topic: Numbers formed with given digits

### Q A11
How many 4-digit numbers can be formed using the digits 1, 2, 5, 7, 9 without repetition?

**ANSWER:**
```
   5P4  =  5 x 4 x 3 x 2  =  120
```
**120**

---

### Q A12
How many 3-digit even numbers can be formed using the digits 1, 2, 5, 6, 9 without
repetition?

**ANSWER:**
```
   The RESTRICTED place is the units place. Fill it first.

   Units:      must be 2 or 6                ->  2 ways
   Hundreds:   any of the remaining 4        ->  4 ways
   Tens:       any of the remaining 3        ->  3 ways

   2 x 4 x 3  =  24
```
**24**

---

### Q A13
How many 4-digit numbers can be formed using the digits 0 to 9 with no digit repeated?

**ANSWER:**
```
   Thousands place cannot be 0:

   9 x 9 x 8 x 7  =  4536
```
**4536**

---

## Topic: Circular permutations

### Q A14
Find the number of ways of arranging 6 persons around a circular table.

**ANSWER:**
```
   (6 - 1)!  =  5!  =  120
```
**120**

---

### Q A15
Find the number of ways of preparing a chain with 6 different coloured beads.

**ANSWER:**
```
   A chain can be turned over, so clockwise = anticlockwise. Divide by 2.

   (6 - 1)! / 2  =  5!/2  =  120/2  =  60
```
**60**

---

### Q A16
In how many ways can 8 persons be seated at a round table if two particular persons
must sit together?

**ANSWER:**
```
   Glue the two into one block  ->  7 units around a circle.

   (7 - 1)!  x  2!  =  720 x 2  =  1440
```
**1440**

---

## Topic: nCr — evaluating and solving

### Q A17
If nC4 = 210, find n.

**ANSWER:**
```
   n(n-1)(n-2)(n-3) / 24  =  210
   n(n-1)(n-2)(n-3)  =  5040

   Try n = 10:   10 x 9 x 8 x 7  =  5040    YES

   n = 10
```
**n = 10**

---

### Q A18
If 12C(r+1) = 12C(3r-5), find r.

**ANSWER:**
```
   nCx = nCy  =>  x = y  OR  x + y = n.  CHECK BOTH.

   CASE 1:  r + 1 = 3r - 5   ->   2r = 6   ->   r = 3
   CASE 2:  (r+1) + (3r-5) = 12  ->  4r = 16  ->  r = 4
```
**Check:** r=3 gives 12C4 = 12C4 = 495. r=4 gives 12C5 = 792 and 12C7 = 792. Both correct.
**r = 3 or r = 4**

---

### Q A19
If nC5 = nC6, find 13Cn.

**ANSWER:**
```
   5 = 6 is impossible, so  5 + 6 = n   ->   n = 11

                            13 x 12
   13C11  =  13C2  =  ---------------  =  78
                             2 x 1
```
**78**

---

### Q A20
If 10 x nC2 = 3 x (n+1)C3, find n.

**ANSWER:**
```
        n(n-1)             (n+1) n (n-1)
   10 x --------  =  3 x  ---------------
           2                     6

   5 n(n-1)  =  (n+1) n (n-1) / 2

   Multiply by 2 and cancel n(n-1)   [n >= 2, so it is not zero]

   10 = n + 1     ->     n = 9
```
**Check:** 10 x 9C2 = 10 x 36 = 360;  3 x 10C3 = 3 x 120 = 360. Correct.
**n = 9**

---

### Q A21
Find the value of 10C5 + 10C4.

**ANSWER:**
```
   Pascal's rule:  nCr + nC(r-1) = (n+1)Cr

   10C5 + 10C4  =  11C5  =  462

   (Direct check: 252 + 210 = 462.)
```
**462**

---

### Q A22
If nPr = 5040 and nCr = 210, find n and r.

**ANSWER:**
```
   nPr = nCr x r!
   5040 = 210 x r!    ->    r! = 24    ->    r = 4

   nP4 = 5040    ->    n(n-1)(n-2)(n-3) = 5040 = 10 x 9 x 8 x 7    ->    n = 10
```
**n = 10, r = 4**

---

## Topic: Geometry and selection counting

### Q A23
Find the number of diagonals of a polygon with 12 sides.

**ANSWER:**
```
   n(n - 3)/2  =  12 x 9 / 2  =  54
```
**54**

---

### Q A24
How many chords can be drawn through 21 points on a circle?

**ANSWER:**
```
   A chord needs 2 points, order does not matter.

                21 x 20
   21C2  =  ------------  =  210
                 2 x 1
```
**210**

---

### Q A25
Find the number of positive divisors of 1080.

**ANSWER:**
```
   1080  =  2^3 x 3^3 x 5^1

   Number of divisors  =  (3+1)(3+1)(1+1)  =  4 x 4 x 2  =  32
```
**32**

---

### Q A26
Find the number of ways of selecting one or more items from 5 different books.

**ANSWER:**
```
   2^5 - 1  =  32 - 1  =  31
```
**31**

---

# ===============================================================
# SECTION B — SHORT ANSWER (4 marks)
# Answer any 5 out of 7. This chapter usually supplies one.
# ===============================================================

### Q B1
Find the number of ways of arranging the letters of the word INDEPENDENCE so that all
the vowels come together.

**ANSWER:**
```
   INDEPENDENCE = 12 letters.
   Letter | I  N  D  E  P  C          Check: 1+3+2+4+1+1 = 12   OK
   Count  | 1  3  2  4  1  1

   Vowels:      I, E, E, E, E                   (5)
   Consonants:  N, N, N, D, D, P, C             (7)

   STEP 1  Glue the 5 vowels into one block.
           Units = 7 consonants + 1 block = 8 units,
           with N repeated 3 times and D repeated 2 times.

                   8!        40320
           ------------- =  -------  =  3360
              3!  2!           12

   STEP 2  Arrange the vowels inside the block (four E's are alike):

               5!      120
             ------ = ------  =  5
               4!      24

   STEP 3  Multiply:     3360 x 5  =  16800
```
**16800**

---

### Q B2
Find the number of arrangements of the letters of the word MISSISSIPPI in which no two
P's come together.

**ANSWER:**
```
   STEP 1  Set the two P's aside. The other 9 letters are M, I, I, I, I, S, S, S, S.

                 9!        362880
              -------  =  --------  =  630
               4! 4!         576

   STEP 2  Nine letters create 10 gaps (including both ends):

              _ L _ L _ L _ L _ L _ L _ L _ L _ L _        10 gaps

   STEP 3  The two P's are IDENTICAL, so only CHOOSE 2 of the 10 gaps:

                       10 x 9
              10C2 = ---------- = 45
                        2 x 1

   STEP 4  630 x 45  =  28350
```
**28350**

---

### Q B3
Prove that (2n)! = 2^n x n! x {1 . 3 . 5 . ... . (2n - 1)}

**ANSWER:**
```
   (2n)!  =  1 . 2 . 3 . 4 . ... . (2n)

   Separate the odd and the even factors. There are n of each.

   (2n)!  =  [1 . 3 . 5 . ... . (2n-1)]  x  [2 . 4 . 6 . ... . 2n]

   From every even factor take out a 2 — there are n of them:

   2 . 4 . 6 . ... . 2n  =  2^n [1 . 2 . 3 . ... . n]  =  2^n . n!

   Therefore  (2n)!  =  2^n . n! . {1 . 3 . 5 . ... . (2n - 1)}          PROVED
```
**Verification with n = 3:** LHS = 6! = 720.
RHS = 2^3 x 3! x (1 x 3 x 5) = 8 x 6 x 15 = 720. Correct.

---

### Q B4
Find the sum of all 4-digit numbers that can be formed using the digits 1, 2, 4, 5
without repetition.

**ANSWER:**
```
   Total numbers formed = 4! = 24.

   By symmetry, each digit stands in each of the four columns equally often:
        24 / 4  =  6  =  3!  times.

   Sum of the digits  =  1 + 2 + 4 + 5  =  12

   Contribution of the units column      =  6 x 12 x    1
   Contribution of the tens column       =  6 x 12 x   10
   Contribution of the hundreds column   =  6 x 12 x  100
   Contribution of the thousands column  =  6 x 12 x 1000
                                            ------------------
   Sum  =  6 x 12 x (1 + 10 + 100 + 1000)
        =  6 x 12 x 1111
        =  72 x 1111
        =  79992
```
**Check:** the numbers run from 1245 to 5421, average about 3333, and 24 x 3333 = 79992.
**79992**

---

### Q B5
How many 4-digit numbers can be formed using the digits 0, 1, 2, 3, 4, 5 without
repetition which are divisible by 5?

**ANSWER:**
```
   Divisible by 5  ->  the units digit must be 0 or 5. Two separate CASES, so ADD.

   CASE 1:  units digit = 0
            Thousands: any of 1,2,3,4,5              ->  5
            Hundreds:  any of the 4 left             ->  4
            Tens:      any of the 3 left             ->  3
            Count = 5 x 4 x 3 = 60

   CASE 2:  units digit = 5
            Thousands: cannot be 0 or 5, so 1,2,3,4  ->  4
            Hundreds:  4 digits left (0 is allowed)  ->  4
            Tens:      3 left                        ->  3
            Count = 4 x 4 x 3 = 48

   Total  =  60 + 48  =  108
```
**108**

---

### Q B6
A cricket team of 11 is to be selected from 15 players. Two particular players must
always be included and one particular player must always be excluded. Find the number
of ways.

**ANSWER:**
```
   2 players are already in     ->  only 11 - 2 = 9 more are needed
   1 player is banned           ->  pool = 15 - 2 - 1 = 12

                              12 x 11 x 10
   12C9  =  12C3  =  --------------------  =  220
                                3 x 2 x 1
```
**220**

---

### Q B7
From 6 men and 4 women, a committee of 5 is to be formed containing at least 3 men.
Find the number of ways.

**ANSWER:**
```
   "At least 3 men" out of 5 members  ->  3 men, or 4 men, or 5 men. ADD the cases.

   CASE 1:  3 men, 2 women   ->  6C3 x 4C2  =  20 x 6  =  120
   CASE 2:  4 men, 1 woman   ->  6C4 x 4C1  =  15 x 4  =   60
   CASE 3:  5 men, 0 women   ->  6C5 x 4C0  =   6 x 1  =    6
                                                          -----
   Total                                                    186
```
**186**

---

### Q B8
Find the number of ways of arranging 6 gentlemen and 3 ladies around a circular table
so that no two ladies sit together.

**ANSWER:**
```
   STEP 1  Seat the 6 gentlemen around the circle:   (6 - 1)! = 5! = 120

   STEP 2  Six gentlemen create 6 gaps between them.

   STEP 3  Seat the 3 different ladies in 3 of those 6 gaps:
           6P3 = 6 x 5 x 4 = 120

   Total  =  120 x 120  =  14400
```
**14400**

---

### Q B9
There are 10 points in a plane of which 4 are collinear. Find the number of
(i) straight lines and (ii) triangles that can be formed.

**ANSWER:**
```
   (i)  Every pair of points gives a line, EXCEPT that the 4 collinear points
        give only ONE line instead of 4C2 = 6.

        Lines  =  10C2  -  4C2  +  1  =  45 - 6 + 1  =  40

   (ii) Every 3 points give a triangle, EXCEPT any 3 chosen from the 4 collinear
        points (they lie on a line, so no triangle).

        Triangles  =  10C3  -  4C3  =  120 - 4  =  116
```
**(i) 40   (ii) 116**

---

### Q B10
Find the number of 5-letter words that can be formed using 3 vowels and 2 consonants
taken from the letters of the word INVOLUTE.

**ANSWER:**
```
   INVOLUTE:  vowels  I, O, U, E     (4)
              consonants  N, V, L, T (4)

   STEP 1  Choose 3 vowels from 4          :  4C3 = 4
   STEP 2  Choose 2 consonants from 4      :  4C2 = 6
   STEP 3  ARRANGE the 5 chosen letters    :  5!  = 120

   Total  =  4 x 6 x 120  =  2880
```
**2880**

---

### Q B11
If 15C(2r-1) = 15C(2r+4), find r.

**ANSWER:**
```
   CASE 1:  2r - 1 = 2r + 4   ->   -1 = 4, impossible. REJECT.
   CASE 2:  (2r - 1) + (2r + 4) = 15
            4r + 3 = 15
            4r = 12
            r = 3
```
**Check:** 15C5 = 15C10 and 5 + 10 = 15. Correct.  **r = 3**

---

### Q B12
Prove that nCr + nC(r-1) = (n+1)Cr.

**ANSWER:**
```
                     n!                  n!
   LHS  =  ------------------  +  ----------------------
             r! (n - r)!            (r-1)! (n - r + 1)!

   Take out the common factor  n! / [ (r-1)! (n-r)! ] :

                 n!                 1              1
   LHS  =  ---------------- x  [  -----  +  ---------------  ]
            (r-1)! (n-r)!            r        (n - r + 1)

                 n!            (n - r + 1) + r
        =  ---------------- x  -----------------
            (r-1)! (n-r)!        r (n - r + 1)

                 n!                 n + 1
        =  ---------------- x  -----------------
            (r-1)! (n-r)!        r (n - r + 1)

                    (n + 1)!
        =  --------------------------
              r!  (n + 1 - r)!

        =  (n + 1)Cr   =  RHS                                          PROVED
```
**Verification:** 9C4 + 9C3 = 126 + 84 = 210 = 10C4. Correct.

---

### Q B13
In how many ways can 12 different books be divided
(i) into three equal groups of 4, (ii) among three students, 4 books each?

**ANSWER:**
```
   (i)  Groups of the SAME size and no names, so divide by 3! as well:

              12!               479001600         479001600
        ---------------  =  ---------------  =  ------------  =  5775
         (4!)^3  x  3!         13824 x 6            82944

   (ii) Named students, so multiply by 3!:

        5775 x 6  =  34650

        (Or directly:  12!/(4! 4! 4!)  =  479001600 / 13824  =  34650)
```
**(i) 5775   (ii) 34650**

---

### Q B14
In how many ways can 12 identical oranges be distributed among 4 boys so that
(i) each boy gets at least one, (ii) a boy may get none?

**ANSWER:**
```
   Identical objects into distinct boxes — the "beggar" formula.

                                          11 x 10 x 9
   (i)   (12 - 1) C (4 - 1)  =  11C3 =  ---------------  =  165
                                            3 x 2 x 1

                                              15 x 14 x 13
   (ii)  (12 + 4 - 1) C (4 - 1)  =  15C3 =  ---------------  =  455
                                               3 x 2 x 1
```
**(i) 165   (ii) 455**

---

### Q B15
Find the number of ways of arranging 5 boys and 4 girls in a row so that no two girls
sit together.

**ANSWER:**
```
   STEP 1  Seat the 5 boys first:   5! = 120

   STEP 2  Five boys create 6 gaps:   _ B _ B _ B _ B _ B _

   STEP 3  Seat the 4 different girls in 4 of the 6 gaps:
           6P4 = 6 x 5 x 4 x 3 = 360

   Total  =  120 x 360  =  43200
```
**43200**

---

### Q B16
Find the number of divisors of 3600 and the sum of those divisors.

**ANSWER:**
```
   3600  =  36 x 100  =  (2^2 x 3^2)(2^2 x 5^2)  =  2^4 x 3^2 x 5^2

   Number of divisors  =  (4+1)(2+1)(2+1)  =  5 x 3 x 3  =  45

   Sum  =  (1 + 2 + 4 + 8 + 16) x (1 + 3 + 9) x (1 + 5 + 25)
        =  31 x 13 x 31
        =  403 x 31
        =  12493
```
**45 divisors, sum = 12493**

---

# ===============================================================
# SECTION C — LONG ANSWER (7 marks)
# Answer any 5 out of 7. This chapter usually supplies one, sometimes two.
# ===============================================================

### Q C1  (THE MOST REPEATED 7-MARK QUESTION IN THIS CHAPTER)
If the letters of the word **MASTER** are permuted in all possible ways and the words
thus formed are arranged in dictionary order, find the **rank** of the word MASTER.

**ANSWER:**

**Mark split:** alphabetical listing 1 · each position counted 1 each · final +1 and
statement 1.

```
   STEP 1  The letters M, A, S, T, E, R are all different.
           In ALPHABETICAL order:      A ,  E ,  M ,  R ,  S ,  T
           Total possible words = 6! = 720.

   STEP 2  POSITION 1.  The word begins with M.
           Available letters SMALLER than M:  A and E.
           Each choice leaves 5 letters, arranged in 5! ways.

                A _ _ _ _ _   ->  5! = 120
                E _ _ _ _ _   ->  5! = 120
                                  ----------
                                       240

           Now FIX M.  Letters still available: A, E, R, S, T.

   STEP 3  POSITION 2.  The word has A here.
           Letters smaller than A:  none.
                                       0

           Now FIX A.  Available: E, R, S, T.

   STEP 4  POSITION 3.  The word has S here.
           Letters smaller than S:  E and R.
           Each leaves 3 letters, arranged in 3! = 6 ways.

                M A E _ _ _   ->  3! = 6
                M A R _ _ _   ->  3! = 6
                                  ----------
                                       12

           Now FIX S.  Available: E, R, T.

   STEP 5  POSITION 4.  The word has T here.
           Letters smaller than T:  E and R.
           Each leaves 2 letters, arranged in 2! = 2 ways.

                M A S E _ _   ->  2! = 2
                M A S R _ _   ->  2! = 2
                                  ----------
                                        4

           Now FIX T.  Available: E, R.

   STEP 6  POSITION 5.  The word has E here.
           Letters smaller than E:  none.
                                        0

           Now FIX E.  Only R remains, so position 6 contributes 0.

   STEP 7  ADD UP.

           +---------------------------------------------+
           |  Position 1     2 x 5!   =  2 x 120  =  240 |
           |  Position 2                          =    0 |
           |  Position 3     2 x 3!   =  2 x   6  =   12 |
           |  Position 4     2 x 2!   =  2 x   2  =    4 |
           |  Position 5                          =    0 |
           |  Position 6                          =    0 |
           |                                       ----- |
           |  Words BEFORE MASTER                    256 |
           |  MASTER itself                        +   1 |
           |                                       ----- |
           |  RANK OF MASTER                         257 |
           +---------------------------------------------+
```
**RANK = 257**

**Sanity check:** MASTER starts with M, the third letter alphabetically, so it must come
after the 2 x 120 = 240 words starting with A or E — and 257 > 240. Also 257 < 720.
Consistent.

---

### Q C2
If the letters of the word **REMAST** are permuted in all possible ways and arranged in
dictionary order, find the rank of the word REMAST.

**ANSWER:**
```
   Letters R, E, M, A, S, T — all different.
   Alphabetical order:   A , E , M , R , S , T          Total = 6! = 720

   POSITION 1 : word has R.   Smaller available: A, E, M  ->  3 x 5! = 3 x 120 = 360
   FIX R.   Left: A, E, M, S, T

   POSITION 2 : word has E.   Smaller available: A        ->  1 x 4! = 1 x  24 =  24
   FIX E.   Left: A, M, S, T

   POSITION 3 : word has M.   Smaller available: A        ->  1 x 3! = 1 x   6 =   6
   FIX M.   Left: A, S, T

   POSITION 4 : word has A.   Smaller available: none     ->                     0
   FIX A.   Left: S, T

   POSITION 5 : word has S.   Smaller available: none     ->                     0
   FIX S.   Left: T

   POSITION 6 :                                                                  0
                                                                            -------
   Words before REMAST                                                          390
   REMAST itself                                                               +  1
                                                                            -------
   RANK                                                                         391
```
**RANK = 391**

**The repeated-letter version (also asked): rank of EAMCET.**
```
   E, A, M, C, E, T   ->  E appears twice.
   Alphabetical:  A , C , E , E , M , T       Total words = 6!/2! = 360

   POS 1 : word has E.  Smaller: A, C.
           Starting with A: rest C,E,E,M,T  ->  5!/2! = 60
           Starting with C: rest A,E,E,M,T  ->  5!/2! = 60          ->    120
   FIX E.  Left: A, C, E, M, T   (all different now — one E is used up)

   POS 2 : word has A.  Smaller: none                              ->      0
   POS 3 : word has M.  Smaller: C, E     ->  2 x 3! = 2 x 6       ->     12
   POS 4 : word has C.  Smaller: none                              ->      0
   POS 5 : word has E.  Smaller: none                              ->      0
   POS 6 :                                                         ->      0
                                                                       ------
   Words before EAMCET                                                    132
   EAMCET itself                                                        +   1
                                                                       ------
   RANK                                                                   133
```
**RANK of EAMCET = 133**

---

### Q C3
Find the number of ways of selecting an 11-member cricket team from 7 batsmen,
6 bowlers and 2 wicket-keepers so that the team contains **2 wicket-keepers** and
**at least 4 bowlers**.

**ANSWER:**

**Mark split:** setting up the cases 2 · each case 1 each · addition and statement 2.

```
   STEP 1  The wicket-keepers.
           Exactly 2 are wanted and exactly 2 exist, so both must play.
                     2C2  =  1 way.
           Places used: 2.   Places remaining: 11 - 2 = 9.

   STEP 2  The 9 remaining places come from 7 batsmen and 6 bowlers,
           with at least 4 bowlers. So bowlers = 4, 5 or 6
           (7 is impossible — only 6 bowlers exist).
           Bowlers AND batsmen -> multiply.  Case OR case -> add.

   CASE 1:  4 bowlers, 5 batsmen
                6C4 x 7C5  =  15 x 21  =  315

   CASE 2:  5 bowlers, 4 batsmen
                6C5 x 7C4  =   6 x 35  =  210

   CASE 3:  6 bowlers, 3 batsmen
                6C6 x 7C3  =   1 x 35  =   35
                                          -----
   STEP 3  Total  =  315 + 210 + 35   =    560
```
**560**

**Supporting values (show these in the exam):**
```
   6C4 = 15    6C5 = 6     6C6 = 1
   7C5 = 7C2 = 21     7C4 = 7C3 = 35
```

---

### Q C4
Simplify   34C5  +  SUM (from r = 0 to 4) of (38 - r)C4.

**ANSWER:**

**Reasoning first.** Write the sum out. Then keep using Pascal's rule
nCr + nC(r-1) = (n+1)Cr on the two SMALLEST terms — they always merge into one term.

```
   STEP 1  Write out the sum.

     34C5 + 38C4 + 37C4 + 36C4 + 35C4 + 34C4
              r=0    r=1    r=2    r=3    r=4

   STEP 2  Reorder so the smallest come first.

     = 34C5 + 34C4 + 35C4 + 36C4 + 37C4 + 38C4

   STEP 3  Merge repeatedly using  nCr + nC(r-1) = (n+1)Cr.

     34C5 + 34C4  =  35C5
     35C5 + 35C4  =  36C5
     36C5 + 36C4  =  37C5
     37C5 + 37C4  =  38C5
     38C5 + 38C4  =  39C5

   STEP 4  Answer  =  39C5
```
**39C5**

**Why it works, in one line:** nCr + nC(r-1) = (n+1)Cr, so each time the top index goes
up by 1 and the term with lower index 4 is swallowed.

**The same question appears with other numbers.** The pattern is always:
```
   nCr  +  (n)C(r-1) + (n+1)C(r-1) + (n+2)C(r-1) + ... + mC(r-1)   =   (m+1)Cr

   e.g.  25C4 + 25C3 + 26C3 + 27C3 + 28C3 + 29C3  =  30C4
```

---

### Q C5
Find the number of 4-letter words that can be formed using the letters of the word
**RAMANA**.

**ANSWER:**

**Reasoning first.** RAMANA is not made of distinct letters — A appears three times.
So you cannot use a single formula. You must split into cases by HOW MANY A's the
4-letter word uses.

```
   STEP 1  Count the letters.
           R A M A N A   ->   A x 3 ,  R x 1 ,  M x 1 ,  N x 1
           Distinct letters available: A, R, M, N.

   STEP 2  Split into cases on the number of A's used.

   CASE 1:  three A's and one other letter
            Choose the other letter from R, M, N   ->  3C1 = 3
            Arrange A, A, A, X   ->   4!/3!  =  24/6  =  4
            Count = 3 x 4 = 12

   CASE 2:  two A's and two different other letters
            Choose 2 from R, M, N                  ->  3C2 = 3
            Arrange A, A, X, Y   ->   4!/2!  =  24/2  =  12
            Count = 3 x 12 = 36

   CASE 3:  one A and three other letters
            The only three others are R, M, N      ->  3C3 = 1
            Arrange A, R, M, N (all different)     ->  4!  =  24
            Count = 1 x 24 = 24

   CASE 4:  no A at all
            Only 3 letters remain — a 4-letter word is impossible.
            Count = 0

   STEP 3  Total  =  12 + 36 + 24 + 0  =  72
```
**72**

> **The key exam habit:** whenever letters repeat AND you are taking only SOME of them,
> you must split into cases by the number of repeats used. There is no shortcut formula.

---

### Q C6
Find the number of ways of arranging the letters of the word **INDEPENDENCE** so that
(i) all the vowels come together,
(ii) no two vowels come together,
(iii) the arrangement begins with I and ends with P.

**ANSWER:**
```
   FIRST, the letter count (do this before anything else):

      I N D E P E N D E N C E     ->   12 letters
      Letter | I  N  D  E  P  C          Check: 1+3+2+4+1+1 = 12   OK
      Count  | 1  3  2  4  1  1

      Vowels:      I, E, E, E, E             (5, with four E's alike)
      Consonants:  N, N, N, D, D, P, C       (7, with N x3 and D x2)

   ------------------------------------------------------------------
   (i)  ALL VOWELS TOGETHER

        Glue the 5 vowels into one block. Units = 7 consonants + 1 block = 8.
        Among the units, N repeats 3 times and D repeats 2 times.

                    8!         40320
        Units  =  -------  =  -------  =  3360
                   3! 2!         12

                        5!      120
        Inside  =    ------  =  ----  =  5
                        4!       24

        Answer  =  3360 x 5  =  16800

   ------------------------------------------------------------------
   (ii) NO TWO VOWELS TOGETHER   (gap method)

        STEP 1  Arrange the 7 consonants first:

                    7!        5040
                  -------  =  -----  =  420
                   3! 2!        12

        STEP 2  Seven consonants create 8 gaps:

                  _ C _ C _ C _ C _ C _ C _ C _     ->  8 gaps

        STEP 3  Choose 5 of the 8 gaps for the 5 vowels, one vowel per gap:

                  8C5  =  8C3  =  56

        STEP 4  The vowels are I, E, E, E, E — not all alike. Once the 5 gaps
                are chosen, arrange the vowels among them:

                        5!
                      ------  =  5
                        4!

        Answer  =  420 x 56 x 5  =  420 x 280  =  117600

   ------------------------------------------------------------------
   (iii) BEGINS WITH I AND ENDS WITH P

        Fix I at the front and P at the end:

              I  _ _ _ _ _ _ _ _ _ _  P
                 \________________/
                  10 letters go here

        The 10 letters left are  N,N,N, D,D, E,E,E,E, C
        (one I and one P have been used up).

                    10!            3628800        3628800
        Answer = ----------  =  -------------  =  ---------  =  12600
                  3! 2! 4!        6 x 2 x 24         288
```
**(i) 16800   (ii) 117600   (iii) 12600**

**Cross-check on (i) and (ii):** total arrangements of INDEPENDENCE = 12!/(3!2!4!)
= 1663200. Both 16800 and 117600 are much smaller than 1663200, as they must be.

---

# ===============================================================
# WHICH QUESTIONS REPEAT MOST
# ===============================================================

| Rank | Question type | Section | Chance of appearing |
|------|---------------|---------|---------------------|
| 1 | **Rank of a word in dictionary order** (MASTER / PRISON / REMAST / EAMCET) | C (7M) | Very high |
| 2 | **Team or committee selection with "at least"** (cricket team = 560) | C (7M) | Very high |
| 3 | **Combination identity nCr + nC(r-1) = (n+1)Cr** used to simplify a sum | C (7M) | High |
| 4 | Arrangements of a word with repeated letters | A (2M) | Very high |
| 5 | "All the vowels come together" for a word | B (4M) | Very high |
| 6 | Solve for n or r in nPr / nCr equations | A (2M) | Very high |
| 7 | Circular permutations, garlands, chains | A (2M) | High |
| 8 | "No two ... together" (gap method) | B (4M) | High |
| 9 | Numbers formed with given digits (even, divisible by 5) | A or B | High |
| 10 | Sum of all numbers formed by given digits | B (4M) | Medium-high |
| 11 | Points with some collinear: triangles and lines | B (4M) | Medium-high |
| 12 | Divisors of a number and their sum | A or B | Medium |
| 13 | Dividing into groups, distributing to students | B (4M) | Medium |
| 14 | Prove (2n)! = 2^n n! {1.3.5...(2n-1)} | B (4M) | Medium |
| 15 | Beggar method (identical objects into boxes) | B (4M) | Medium |
| 16 | Words from a word with repeated letters, taken r at a time (RAMANA) | C (7M) | Medium |

---

# THE MINIMUM YOU MUST BE ABLE TO DO ON EXAM DAY

```
  +--------------------------------------------------------------------------+
  |                                                                          |
  |   1.  Solve  nPr = k  or  nCx = nCy  for n or r.          (2 marks)      |
  |                                                                          |
  |   2.  Count the arrangements of any word.                 (2 marks)      |
  |                                                                          |
  |   3.  "All the vowels together" for any word.             (4 marks)      |
  |                                                                          |
  |   4.  RANK OF A WORD.                                     (7 marks)      |
  |                                                                          |
  |   5.  "At least" team-selection with cases.               (7 marks)      |
  |                                                                          |
  |   That is 15 marks. Pass mark for the whole paper is 26.                 |
  |                                                                          |
  +--------------------------------------------------------------------------+
```
