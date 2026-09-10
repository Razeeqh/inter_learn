# Permutations and Combinations — Every Question Pattern That Can Be Asked

**Maths IIA · Chapter 5**

A "pattern" is a question SHAPE. The numbers change every year. The shape does not.

For each one, learn:
- **TRIGGER** — how to recognise it in one glance
- **METHOD** — the fixed steps
- **TRAP** — where marks get lost

---

```
  PATTERN 1 — FILL THE SLOTS (fundamental principle)               2 marks
  ------------------------------------------------------------------------
  TRIGGER   "In how many ways can ... be done?" with clear STAGES.
            Signals, routes, seats, shirts-and-trousers, prizes.
  METHOD    1. Draw one empty box for each stage.
            2. Write the number of choices inside each box.
            3. MULTIPLY across the boxes  (AND -> multiply).
            4. If the question splits into separate CASES, do steps
               1-3 for each case and ADD the case answers (OR -> add).
  TRAP      Multiplying when you should add. Test: do I need BOTH
            (multiply) or do I choose ONE (add)?
```

```
  PATTERN 2 — HOW MANY NUMBERS CAN BE FORMED                   2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "How many 3-digit / 4-digit numbers can be formed using
            the digits ...?"
  METHOD    1. Check: IS 0 IN THE LIST?
            2. If yes, fill the LEADING place first with (digits - 1)
               choices, then fill the rest.
            3. No repetition -> the count drops by 1 each slot.
               Repetition allowed -> every slot has the full count.
  TRAP      Letting a number begin with 0. 0537 is not a 4-digit number.
            Fill the restricted place FIRST, always.
```

```
  PATTERN 3 — NUMBERS WITH A DIVISIBILITY CONDITION                4 marks
  ------------------------------------------------------------------------
  TRIGGER   "... which are even" / "divisible by 5" / "divisible by 3"
            / "greater than 3000".
  METHOD    1. Turn the condition into a rule about ONE place:
                 even          -> units is 0, 2, 4, 6 or 8
                 divisible by 5 -> units is 0 or 5
                 divisible by 3 -> the DIGIT SUM must be divisible by 3
                                   (choose the digit SET first)
                 greater than N -> restrict the leading digit
            2. Fill that restricted place FIRST.
            3. If the restricted digit could be 0, split into
                 CASE units = 0   and   CASE units = the other value,
               because 0 in the units frees the leading place.
            4. Add the cases.
  TRAP      Forgetting the split when 0 is one of the allowed units
            digits. That is where half the marks are.
```

```
  PATTERN 4 — SUM OF ALL THE NUMBERS FORMED                        4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the SUM of all the 4-digit numbers formed by ..."
  METHOD    1. Count the numbers formed:  n!
            2. Each digit appears in each column  n!/n = (n-1)!  times.
            3. Sum = (n-1)! x (sum of the digits) x (111...1, n ones).
  TRAP      Using n! instead of (n-1)! for the repeat count.
            Also: this simple formula assumes NO digit is 0. If 0 is
            present you must subtract the arrangements that begin with 0.
```

```
  PATTERN 5 — EVALUATE nPr OR nCr                                  2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the value of 10P3 / 12C4 / 50C47."
  METHOD    nPr : r factors counting DOWN from n, multiplied.
            nCr : r factors down from n, over r factors up from 1.
            If r is more than half of n, FLIP FIRST: nCr = nC(n-r).
  TRAP      Writing out huge factorials and running out of time.
            50C47 = 50C3 = 19600 in five seconds.
```

```
  PATTERN 6 — SOLVE FOR n IN AN nPr EQUATION                       2 marks
  ------------------------------------------------------------------------
  TRIGGER   "If nP4 = 20 nP2, find n"  /  "If nP7 = 42 nP5, find n"
            /  "If 12Pr = 1320, find r".
  METHOD    1. Write both sides as products counting down.
            2. Cancel the common leading factors.
            3. You are left with a product of CONSECUTIVE integers
               equal to a number. Factorise that number as consecutive
               integers:  12 = 4x3 , 20 = 5x4 , 42 = 7x6 , 56 = 8x7 ,
               1320 = 12x11x10 , 5040 = 10x9x8x7.
            4. Reject negative or fractional roots.
  TRAP      Solving a quadratic and keeping the negative root.
            n must be a positive whole number with n >= r.
```

```
  PATTERN 7 — SOLVE FOR r WHEN  nCx = nCy                          2 marks
  ------------------------------------------------------------------------
  TRIGGER   Two nCr expressions with the SAME n, joined by "=".
  METHOD    1. CASE 1:   x = y
            2. CASE 2:   x + y = n
            3. Solve both. Keep every answer that is a whole number
               satisfying 0 <= r <= n.
  TRAP      Giving only ONE answer. Many BIEAP questions have TWO
            (e.g. 12C(r+1) = 12C(3r-5) gives r = 3 AND r = 4).
```

```
  PATTERN 8 — ARRANGEMENTS OF A WORD (letters repeat)              2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the number of ways of arranging the letters of the
            word ..."
  METHOD    1. Write the letter-count table.
            2. CHECK that the counts add up to the number of letters.
            3. Answer =  (total)! / (product of the repeat factorials).
  TRAP      Miscounting the letters. The 10-second addition check is
            the difference between 2 marks and 0.
```

```
  PATTERN 9 — r-LETTER WORDS FROM DISTINCT LETTERS                 2 marks
  ------------------------------------------------------------------------
  TRIGGER   "How many 4-letter words can be formed from the letters of
            MIRACLE / MONDAY / EQUATION?"  (all letters different)
  METHOD    Straight nPr.   7P4 = 7 x 6 x 5 x 4 = 840.
  TRAP      Using nCr. "Words" means the ORDER matters.
```

```
  PATTERN 10 — r-LETTER WORDS WHEN LETTERS REPEAT                  7 marks
  ------------------------------------------------------------------------
  TRIGGER   "How many 4-letter words from RAMANA / EXAMINATION?"
            — a word with repeats, taking only SOME letters.
  METHOD    There is NO single formula. Split into CASES on how many
            copies of the repeated letter you use:
            1. CASE: all three A's used + choose the rest
                     -> arrange with 4!/3!
            2. CASE: two A's used + choose 2 others
                     -> arrange with 4!/2!
            3. CASE: one A + three others (all different) -> 4!
            4. CASE: no A -> often impossible, say so.
            5. ADD the cases.
  TRAP      Trying to use n!/(p!q!) directly. That formula only works
            when you take ALL the letters.
```

```
  PATTERN 11 — ALL VOWELS (or a group) TOGETHER                    4 marks
  ------------------------------------------------------------------------
  TRIGGER   "... so that all the vowels come together" / "all the girls
            sit together" / "the books of the same subject stay together".
  METHOD    1. Glue the group into ONE block.
            2. Count the units:  (rest) + 1.
            3. Arrange the units — divide by repeat factorials if the
               remaining letters repeat.
            4. Arrange INSIDE the block — again divide by repeats.
            5. MULTIPLY steps 3 and 4.
  TRAP      Forgetting step 4. Half the marks live inside the block.
            Also: if the block itself has repeated letters (four E's in
            INDEPENDENCE) you must divide inside too:  5!/4! = 5.
```

```
  PATTERN 12 — NO TWO OF THEM TOGETHER (the GAP method)            4 marks
  ------------------------------------------------------------------------
  TRIGGER   "no two girls sit together" / "no two vowels come together"
            / "no two P's are adjacent".
  METHOD    1. Arrange the FREE objects first (the ones with no condition).
            2. Count the gaps:  m objects give (m + 1) gaps, INCLUDING
               the two ends.
            3. Place the restricted objects one per gap:
                    (m+1)Pk   if they are all DIFFERENT
                    (m+1)Ck   if they are IDENTICAL
                    (m+1)Ck x (arrangements of the multiset) if mixed
            4. MULTIPLY steps 1 and 3.
  TRAP      Counting only the (m - 1) internal gaps and forgetting the
            two END positions.
```

```
  PATTERN 13 — TWO PARTICULAR THINGS NEVER TOGETHER            2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "A and B are never side by side" (exactly TWO objects).
  METHOD    Never together  =  (total)  -  (together)
                            =  n!  -  (n-1)! x 2!
            Circular version =  (n-1)!  -  (n-2)! x 2!
  TRAP      Using subtraction when THREE or more objects must be apart.
            For three or more, subtraction over-corrects — use the GAP
            method (Pattern 12) instead.
```

```
  PATTERN 14 — FIXED POSITIONS                                     2 marks
  ------------------------------------------------------------------------
  TRIGGER   "begins with M and ends with Y" / "the first place is always
            a vowel" / "R occupies the third place".
  METHOD    1. Place the fixed letters. They are DONE, no choices.
            2. Arrange the remaining (n - k) letters in (n - k)! ways,
               dividing by any repeats that remain.
  TRAP      Forgetting to remove the fixed letters from the repeat
            counts. In INDEPENDENCE beginning with I and ending with P,
            the middle 10 letters are N,N,N,D,D,E,E,E,E,C -> 10!/(3!2!4!).
```

```
  PATTERN 15 — NEVER BEGINS WITH ... (subtract)                    2 marks
  ------------------------------------------------------------------------
  TRIGGER   "How many arrangements do NOT begin with P?"
  METHOD    (total arrangements)  -  (those that DO begin with P)
  TRAP      Forgetting that if P is a repeated letter you must divide by
            the repeats in BOTH counts.
```

```
  PATTERN 16 — SEATING AROUND A CIRCLE                             2 marks
  ------------------------------------------------------------------------
  TRIGGER   "round a circular table" / "in a circle" / "round a ring".
  METHOD    Answer  =  (n - 1)!
            Reason: fix one person to kill the rotations.
  TRAP      Writing n!. Also: if the seats are NUMBERED or the positions
            are marked, the circle is really a row -> n!.
```

```
  PATTERN 17 — NECKLACE / GARLAND / CHAIN                          2 marks
  ------------------------------------------------------------------------
  TRIGGER   The words garland, necklace, bangle, chain, key ring,
            or "clockwise and anticlockwise are not different".
  METHOD    Answer  =  (n - 1)! / 2
  TRAP      Using it for PEOPLE at a table. A person cannot be flipped
            over; a garland can.
```

```
  PATTERN 18 — CIRCULAR WITH A RESTRICTION                         4 marks
  ------------------------------------------------------------------------
  TRIGGER   "round a table so that no two ladies sit together" /
            "so that two particular persons sit together".
  METHOD    TOGETHER:  glue -> (n - k + 1 - 1)! x k!  =  (n-k)! x k!
            NO TWO TOGETHER:
              1. Seat the m unrestricted people in the circle: (m-1)!
              2. m people create m gaps (a circle has as many gaps as
                 people — NOT m + 1).
              3. Place the k restricted people:  mPk.
              4. Multiply.
  TRAP      Using (m + 1) gaps. In a CIRCLE, m objects create exactly
            m gaps. In a ROW they create m + 1.
```

```
  PATTERN 19 — RANK OF A WORD, ALL LETTERS DIFFERENT               7 marks
  ------------------------------------------------------------------------
  TRIGGER   "... permuted in all possible ways and arranged as in a
            dictionary. Find the rank of the word ..."
  METHOD    1. Write the letters in ALPHABETICAL order. State n!.
            2. For POSITION 1: count the available letters SMALLER than
               the actual first letter. Multiply that count by (n-1)!.
            3. FIX the actual letter. Remove it from the available list.
            4. Repeat for position 2 with (n-2)!, position 3 with
               (n-3)!, and so on.
            5. RANK = (sum of all the counts) + 1.
  TRAP      Forgetting the final "+ 1". Also forgetting to REMOVE the
            fixed letter from the available list — at position 3 you
            compare only against the letters still unused.
```

```
  PATTERN 20 — RANK OF A WORD WITH A REPEATED LETTER               7 marks
  ------------------------------------------------------------------------
  TRIGGER   The same question but the word has a letter twice
            (EAMCET, LETTER, INDIA).
  METHOD    Identical to Pattern 19, with ONE change:
            "arrangements of the remaining letters" becomes
                 (number left)! / (factorials of the repeats STILL LEFT)
            Recount the repeats at EVERY step — once a repeated letter
            is fixed, one copy is used up.
  TRAP      Continuing to divide by 2! after the repeated letter has
            already been placed. In EAMCET, after the first E is fixed
            the remaining letters are all different.
```

```
  PATTERN 21 — SELECTION WITH ALWAYS-INCLUDE / ALWAYS-EXCLUDE      4 marks
  ------------------------------------------------------------------------
  TRIGGER   "2 particular players are always included and 1 is always
            excluded."
  METHOD    1. Included players are already on the team -> reduce r.
            2. Excluded players leave the pool          -> reduce n.
            3. Answer = (n - included - excluded) C (r - included).
  TRAP      Reducing n by the included players too. They leave the POOL
            and fill a PLACE, so BOTH n and r drop by that amount.
            Excluded players reduce n only.
```

```
  PATTERN 22 — "AT LEAST" SELECTION (case method)              4 or 7 marks
  ------------------------------------------------------------------------
  TRIGGER   "at least 3 men" / "at least 4 bowlers" / "at least 2 girls".
  METHOD    1. List the possible cases:  m, m+1, ... up to the maximum
               allowed by the supply.
            2. In each case MULTIPLY the two (or three) nCr's.
            3. ADD the cases.
            4. Write the case headings clearly — examiners give method
               marks for correctly identified cases.
  TRAP      Missing a case at the top end, or including an impossible
            one (you cannot pick 7 bowlers from 6).
```

```
  PATTERN 23 — "AT LEAST ONE" (complement method)             2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "at least one woman" / "at least one digit repeated" /
            "one or more".
  METHOD    Answer  =  (total)  -  (none)
            "at least one from n different things"  =  2^n - 1
            "at least one digit repeated"           =  total - all different
  TRAP      Adding all the cases when the complement takes one line.
            Use cases only when the threshold is 2 or more.
```

```
  PATTERN 24 — SELECT, THEN ARRANGE                                4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Form 5-letter WORDS using 3 vowels and 2 consonants from
            the letters of INVOLUTE."
  METHOD    1. SELECT the vowels:      aCp
            2. SELECT the consonants:  bCq
            3. ARRANGE all (p + q) chosen letters:  (p + q)!
            4. Multiply all three.
  TRAP      Stopping after step 2. The word "words" demands step 3.
            This single omission is the commonest 4-mark loss in the
            whole chapter.
```

```
  PATTERN 25 — DIVIDING INTO GROUPS / DISTRIBUTING                 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "divide 12 books into three groups of 4" /
            "distribute among three students, 4 each".
  METHOD    Unequal sizes p, q, s :        n! / (p! q! s!)
            k EQUAL groups of size m :     n! / ((m!)^k x k!)
            Distributed to k NAMED people: multiply by k!
                                        =  n! / (m!)^k
  TRAP      Forgetting the extra k! for EQUAL, UNNAMED groups.
            Test: "if I swap group A and group B entirely, is anything
            different?" No name -> nothing different -> divide by k!.
```

```
  PATTERN 26 — IDENTICAL OBJECTS INTO BOXES (beggar method)        4 marks
  ------------------------------------------------------------------------
  TRIGGER   "identical oranges among 4 boys" / "x + y + z = 10,
            non-negative integers" / "n identical balls into r boxes".
  METHOD    Each box may be empty      ->  (n + r - 1) C (r - 1)
            Each box gets at least 1   ->  (n - 1) C (r - 1)
            For "each box at least 2" : first give 2 to each, then use
            the empty-allowed formula on what is left.
  TRAP      Using this when the objects are DIFFERENT. Different objects
            into r boxes is r^n, a completely different answer.
```

```
  PATTERN 27 — DIAGONALS OF A POLYGON                              2 marks
  ------------------------------------------------------------------------
  TRIGGER   "number of diagonals of a polygon of n sides" or the
            reverse: "a polygon has 44 diagonals, find n".
  METHOD    Diagonals = nC2 - n = n(n - 3)/2.
            Reverse: set n(n-3)/2 = given, solve the quadratic,
            reject the negative root.
  TRAP      Forgetting to subtract the n SIDES. nC2 counts sides too.
```

```
  PATTERN 28 — TRIANGLES AND LINES WITH COLLINEAR POINTS           4 marks
  ------------------------------------------------------------------------
  TRIGGER   "n points in a plane of which m are collinear."
  METHOD    Triangles       =  nC3 - mC3
            Straight lines  =  nC2 - mC2 + 1
  TRAP      Forgetting the "+ 1" in the line count. The m collinear
            points still determine ONE line, so you must add it back
            after removing the mC2 pairs.
```

```
  PATTERN 29 — RECTANGLES, SQUARES, PARALLELOGRAMS                 2 marks
  ------------------------------------------------------------------------
  TRIGGER   "chessboard" / "m parallel lines cut by n parallel lines".
  METHOD    Parallelograms / rectangles  =  mC2 x nC2
            Chessboard rectangles        =  9C2 x 9C2 = 1296
            Chessboard squares           =  1^2 + ... + 8^2 = 204
            Non-square rectangles        =  1296 - 204 = 1092
  TRAP      Using 8 lines instead of 9. An 8 x 8 board is bounded by
            NINE lines in each direction.
```

```
  PATTERN 30 — DIVISORS OF A NUMBER AND THEIR SUM              2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "number of divisors of 1080 / 3600" / "sum of the divisors".
  METHOD    1. Write N = a^p b^q c^s in PRIME factors.
            2. Number of divisors = (p+1)(q+1)(s+1).
            3. Sum = (1+a+...+a^p)(1+b+...+b^q)(1+c+...+c^s).
            4. Proper divisors (excluding 1 and N) = the count minus 2.
            5. EVEN divisors: force one 2 out first.
  TRAP      Not factorising into PRIMES. 1080 = 2^3 x 3^3 x 5,
            not 8 x 135.
```

```
  PATTERN 31 — TOTAL NUMBER OF SELECTIONS                          2 marks
  ------------------------------------------------------------------------
  TRIGGER   "one or more" / "any number of" / "total selections".
  METHOD    n DIFFERENT things :  2^n     (one or more -> 2^n - 1)
            p, q, r IDENTICAL groups :  (p+1)(q+1)(r+1)
                                        (one or more -> minus 1)
            At least one from each part of a paper:
                    (2^a - 1)(2^b - 1)(2^c - 1)
  TRAP      Using 2^n for IDENTICAL items. From 5 identical apples you
            have 6 choices (take 0 to 5), not 2^5.
```

```
  PATTERN 32 — SIMPLIFY A SUM OF nCr TERMS (Pascal telescoping)    7 marks
  ------------------------------------------------------------------------
  TRIGGER   "Simplify 34C5 + SUM (r = 0 to 4) of (38-r)C4."
  METHOD    1. Write the sum out term by term.
            2. Reorder so the SMALLEST top index comes first.
            3. Merge the first two with nCr + nC(r-1) = (n+1)Cr.
            4. Repeat — each merge swallows one term.
            5. State the single final nCr.
  TRAP      Merging from the wrong end. Always start with the two
            SMALLEST top indices, and show every merge on its own line.
```

```
  PATTERN 33 — PROVE  (2n)! = 2^n . n! . {1.3.5...(2n-1)}          4 marks
  ------------------------------------------------------------------------
  TRIGGER   The identity is quoted and you are asked to "prove" or
            "show".
  METHOD    1. Write (2n)! = 1.2.3...(2n).
            2. Separate the n ODD factors from the n EVEN factors.
            3. Take a 2 out of each of the n even factors: 2^n.
            4. What is left inside is 1.2.3...n = n!.
            5. State the result.
  TRAP      Not saying that there are exactly n even and n odd factors.
            That sentence carries a mark.
```

```
  PATTERN 34 — PROVE  nCr + nC(r-1) = (n+1)Cr                      4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Prove Pascal's rule" or it appears as a step in a longer
            proof.
  METHOD    1. Write both terms in factorial form.
            2. Take out the common factor n!/[(r-1)!(n-r)!].
            3. Add the two fractions:  1/r + 1/(n-r+1) = (n+1)/[r(n-r+1)].
            4. Recombine into (n+1)!/[r!(n+1-r)!].
            5. Alternatively give the counting proof: from n+1 people
               choose r — either a fixed person is IN (nC(r-1)) or
               OUT (nCr).
  TRAP      Algebra slips when adding the fractions. The counting proof
            is shorter and gets full marks if written in full sentences.
```

---

# SELF-TEST — can you name the pattern in 5 seconds?

Cover the right column. Read the stem. Say the pattern number out loud.

| Question stem | Pattern |
|---|---|
| "Find the number of ways of arranging the letters of MATHEMATICS" | 8 |
| "If nP7 = 42 nP5, find n" | 6 |
| "If 12C(r+1) = 12C(3r-5), find r" | 7 |
| "Find the rank of the word MASTER" | 19 |
| "Find the rank of the word EAMCET" | 20 |
| "... so that all the vowels come together" | 11 |
| "... so that no two girls sit together" | 12 |
| "Find the number of diagonals of a polygon of 12 sides" | 27 |
| "10 points, 4 collinear — how many triangles?" | 28 |
| "Cricket team with at least 4 bowlers" | 22 |
| "Committee with at least one woman" | 23 |
| "Find the number of ways of preparing a garland with 8 flowers" | 17 |
| "6 gentlemen and 3 ladies round a table, no two ladies together" | 18 |
| "How many 4-digit numbers divisible by 5 from 0,1,2,3,4,5?" | 3 |
| "Find the sum of all 4-digit numbers formed by 1,2,4,5" | 4 |
| "Form 5-letter words with 3 vowels and 2 consonants" | 24 |
| "Divide 12 books into three equal groups of 4" | 25 |
| "12 identical oranges among 4 boys, each at least one" | 26 |
| "Number of divisors of 3600 and their sum" | 30 |
| "Number of ways of selecting one or more from 5 books" | 31 |
| "Simplify 34C5 + 38C4 + 37C4 + ..." | 32 |
| "Prove (2n)! = 2^n n! {1.3.5...(2n-1)}" | 33 |
| "How many 4-letter words from the word RAMANA?" | 10 |
| "5 letters posted into 3 letter boxes" | 1 |
| "Arrangements of PICTURE not beginning with P" | 15 |
| "Number of arrangements of MONDAY beginning with M, ending with Y" | 14 |
| "8 persons round a table, two particular never together" | 13 + 18 |
| "How many 3-digit numbers from 0,1,2,3,4 without repetition?" | 2 |
| "Number of parallelograms from 4 and 6 parallel lines" | 29 |
| "2 players always in, 1 always out, choose 11 from 15" | 21 |
| "Prove nCr + nC(r-1) = (n+1)Cr" | 34 |
| "No two P's adjacent in MISSISSIPPI" | 12 |
| "50C47 = ?" | 5 |

---

# GUARANTEED-MARKS PLAN FOR THIS CHAPTER

```
  +--------------------------------------------------------------------------+
  |                                                                          |
  |  TIER 1  —  LEARN THESE FIRST. They are short, mechanical, and they      |
  |             appear EVERY year.                     (about 8 marks)       |
  |                                                                          |
  |     Pattern  8   arrangements of a word              2 marks             |
  |     Pattern  6   solve for n in nPr                  2 marks             |
  |     Pattern  7   solve for r in nCx = nCy            2 marks             |
  |     Pattern 16   round a table  (n-1)!               2 marks             |
  |     Pattern 17   garland  (n-1)!/2                   2 marks             |
  |     Pattern 27   diagonals  n(n-3)/2                 2 marks             |
  |                                                                          |
  |     You only need TWO of these in Section A, but knowing all six         |
  |     guarantees you recognise whichever one appears.                      |
  |                                                                          |
  +--------------------------------------------------------------------------+

  +--------------------------------------------------------------------------+
  |                                                                          |
  |  TIER 2  —  ONE 4-mark question comes from here.    (4 marks)            |
  |                                                                          |
  |     Pattern 11   all vowels together                                     |
  |     Pattern 12   no two together (gap method)                            |
  |     Pattern 22   at least ... (cases)                                    |
  |     Pattern 24   select then arrange                                     |
  |     Pattern 28   triangles and lines with collinear points               |
  |                                                                          |
  |     Learn 11 and 12 properly. Between them they cover most of what       |
  |     BIEAP asks at 4 marks.                                               |
  |                                                                          |
  +--------------------------------------------------------------------------+

  +--------------------------------------------------------------------------+
  |                                                                          |
  |  TIER 3  —  THE 7-MARK QUESTION.                    (7 marks)            |
  |                                                                          |
  |     Pattern 19   RANK OF A WORD          <-- learn this one FIRST        |
  |     Pattern 22   team with at least ...  <-- learn this one SECOND       |
  |     Pattern 32   Pascal telescoping sum  <-- learn this one THIRD        |
  |                                                                          |
  |     These three cover almost every 7-mark question this chapter has      |
  |     produced. Pattern 19 is pure procedure — no cleverness needed.       |
  |     Do MASTER, PRISON and REMAST once each and you own 7 marks.          |
  |                                                                          |
  +--------------------------------------------------------------------------+

  +--------------------------------------------------------------------------+
  |                                                                          |
  |    REALISTIC TARGET FROM THIS CHAPTER ALONE                              |
  |                                                                          |
  |         Section A   2 questions x 2 marks   =    4                       |
  |         Section B   1 question  x 4 marks   =    4                       |
  |         Section C   1 question  x 7 marks   =    7                       |
  |                                                  ---                     |
  |                                                   15  out of 75          |
  |                                                                          |
  |    The pass mark for the whole paper is 26.                              |
  |    This ONE chapter, learned properly, gets you more than half way.      |
  |                                                                          |
  +--------------------------------------------------------------------------+
```

---

# THE LAST THING TO READ BEFORE THE EXAM

```
   1.  AND -> multiply.   OR -> add.
   2.  Arrange -> nPr.    Select -> nCr.    nPr = nCr x r!
   3.  0! = 1.
   4.  Repeated letters -> divide by the repeat factorials.
   5.  Circle -> (n-1)!.   Garland -> (n-1)!/2.
   6.  Together -> glue and multiply by the inside arrangements.
   7.  Never together -> arrange the rest, then use the gaps.
   8.  At least -> cases, and ADD them.
   9.  Rank -> count what comes before, then ADD 1.
  10.  If the answer is not a whole number, you slipped somewhere.
```
