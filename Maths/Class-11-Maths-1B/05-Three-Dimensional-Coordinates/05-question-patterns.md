# Three Dimensional Coordinates — Every Question Pattern That Can Be Asked

**Maths 1B · Chapter 5**

A "pattern" is a question SHAPE. The numbers change every year. The shape does not.
There are only **thirty** shapes in this whole chapter, and twenty of them are 2-mark
questions you can finish in ninety seconds.

For each one, learn:
- **TRIGGER** — how to recognise it in one glance
- **METHOD** — the fixed steps
- **TRAP** — where marks get lost

---

```
  PATTERN 1 — DISTANCE BETWEEN TWO POINTS                            2 marks
  --------------------------------------------------------------------------
  TRIGGER   "Find the distance between A(...) and B(...)."
  METHOD    1. Write the three differences in a column:
                  x2 - x1
                  y2 - y1
                  z2 - z1
             2. Square each, add.
             3. Take the square root and simplify the surd
                (sqrt 45 = sqrt(9 x 5) = 3 sqrt 5).
  TRAP      Eating a minus sign.  1 - (-3) = 4, NOT -2.
            Write every subtraction out fully before you square it.
```

```
  PATTERN 2 — DISTANCE OF A POINT FROM THE ORIGIN                    2 marks
  --------------------------------------------------------------------------
  TRIGGER   "Find the distance of P(x,y,z) from the origin", or "find OP".
  METHOD    OP = sqrt(x^2 + y^2 + z^2).  Nothing else.
  TRAP      Forgetting that this is just the distance formula with
            (0,0,0) as the second point. Do not over-think it.
```

```
  PATTERN 3 — DISTANCE OF A POINT FROM AN AXIS                       2 marks
  --------------------------------------------------------------------------
  TRIGGER   "Find the distance of P from the x-axis / y-axis / z-axis."
  METHOD    DROP the letter that names the axis. Square the other two,
            add, take the root.
                  from x-axis  ->  sqrt(y^2 + z^2)
                  from y-axis  ->  sqrt(z^2 + x^2)
                  from z-axis  ->  sqrt(x^2 + y^2)
  TRAP      Keeping the wrong letter. Self-check with
                  (answer)^2 + (dropped letter)^2 = OP^2.
            If that does not come out right, you picked the wrong pair.
```

```
  PATTERN 4 — DISTANCE OF A POINT FROM A COORDINATE PLANE            2 marks
  --------------------------------------------------------------------------
  TRIGGER   "Find the distance of P from the xy-plane / yz-plane / zx-plane",
            or "how high above the xy-plane is P?"
  METHOD    KEEP ONLY the letter that is MISSING from the plane's name,
            and take its modulus.
                  from xy-plane  ->  |z|
                  from yz-plane  ->  |x|
                  from zx-plane  ->  |y|
  TRAP      Giving a negative answer. A distance is never negative.
            Also: this is the OPPOSITE rule to Pattern 3. Axis = drop.
            Plane = keep the missing one.
```

```
  PATTERN 5 — FIND AN UNKNOWN COORDINATE FROM A GIVEN DISTANCE       2 marks
  --------------------------------------------------------------------------
  TRIGGER   "If the distance between (5,-1,7) and (x,5,1) is 9, find x."
  METHOD    1. Write AB^2 = (given distance)^2.  Never use a square root.
             2. The unknown appears in one squared bracket.
             3. Solve  (x - a)^2 = k   ->   x - a = + sqrt(k) OR - sqrt(k).
             4. Substitute BOTH answers back to check.
  TRAP      Giving only ONE answer. A squared equation has TWO roots and the
            examiner wants both.
```

```
  PATTERN 6 — NAME THE OCTANT                                        2 marks
  --------------------------------------------------------------------------
  TRIGGER   "In which octant does the point (...) lie?"
  METHOD    1. Read the signs of x and y as an ordinary 2D quadrant:
                  (+,+)=1   (-,+)=2   (-,-)=3   (+,-)=4
             2. If z is NEGATIVE, add 4.
  TRAP      A point containing a ZERO is in NO octant - it lies on a
            coordinate plane (one zero) or on an axis (two zeros).
            Say that instead of guessing a number.
```

```
  PATTERN 7 — PROJECTION OF A POINT                                  2 marks
  --------------------------------------------------------------------------
  TRIGGER   The word "projection", "foot of the perpendicular from P to ...",
            or "shadow".
  METHOD    Set to ZERO every coordinate NOT named by the axis or plane.
                  on the x-axis    ->  (x, 0, 0)
                  on the xy-plane  ->  (x, y, 0)
  TRAP      Confusing it with the IMAGE. Projection uses ZEROS.
            Underline the word in the question before you write.
```

```
  PATTERN 8 — IMAGE (REFLECTION) OF A POINT                          2 marks
  --------------------------------------------------------------------------
  TRIGGER   The word "image", "reflection", or "mirror".
  METHOD    FLIP THE SIGN of every coordinate NOT named by the axis or plane.
                  in the x-axis    ->  ( x, -y, -z)     [axis: 1 survives]
                  in the xy-plane  ->  ( x,  y, -z)     [plane: 2 survive]
                  in the origin    ->  (-x, -y, -z)     [nothing survives]
  TRAP      Doing it the other way round for axes and planes. Remember:
            AXIS keeps ONE letter, PLANE keeps TWO.
            Check: the projection must be the midpoint of P and its image.
```

```
  PATTERN 9 — WRITE THE FORM OF A POINT ON AN AXIS OR IN A PLANE     2 marks
  --------------------------------------------------------------------------
  TRIGGER   "Find the point ON the x-axis such that ...", or
            "Find the point IN the xy-plane such that ..."
  METHOD    Set up the unknown with the right number of zeros FIRST:
                  on the x-axis     ->  P(x, 0, 0)
                  on the y-axis     ->  P(0, y, 0)
                  on the z-axis     ->  P(0, 0, z)
                  in the xy-plane   ->  P(x, y, 0)
                  in the yz-plane   ->  P(0, y, z)
            Then apply whatever condition follows.
  TRAP      "On the x-axis" means y = 0 and z = 0. It does NOT mean x = 0.
            This one mistake ruins the whole question.
```

```
  PATTERN 10 — MIDPOINT                                              2 marks
  --------------------------------------------------------------------------
  TRIGGER   "Find the midpoint of AB", or a question about a MEDIAN,
            or a DIAGONAL of a parallelogram.
  METHOD    Average each coordinate:  ((x1+x2)/2, (y1+y2)/2, (z1+z2)/2).
  TRAP      Forgetting that it is the section formula with m = n = 1,
            so it is the same idea, not a new one.
```

```
  PATTERN 11 — SECTION FORMULA, INTERNAL DIVISION                    2 marks
  --------------------------------------------------------------------------
  TRIGGER   "Find the point dividing AB in the ratio m : n" (no word
            "externally").
  METHOD    P = ( (m x2 + n x1)/(m+n) , (m y2 + n y1)/(m+n) ,
                                        (m z2 + n z1)/(m+n) )
            " m goes with the SECOND point, n with the FIRST. "
  TRAP      Writing n with x2. It is the CROSS-OVER that matters.
            Sanity check: if m < n the point must be nearer A.
```

```
  PATTERN 12 — SECTION FORMULA, EXTERNAL DIVISION                    2 marks
  --------------------------------------------------------------------------
  TRIGGER   The word "externally", or a ratio that comes out negative.
  METHOD    Same formula, every plus becomes a minus:
                  ( (m x2 - n x1)/(m - n) , ... )
            OR, easier: use the internal formula with the ratio m : (-n).
  TRAP      Changing the top but forgetting the bottom (or vice versa).
            BOTH become minus.
            Also, if m = n the external point does not exist - the two
            lines are parallel and never meet.
```

```
  PATTERN 13 — FIND THE RATIO IN WHICH P DIVIDES AB              2 or 4 marks
  --------------------------------------------------------------------------
  TRIGGER   "In what ratio does P(...) divide the join of A and B?"
  METHOD    1. Let the ratio be  k : 1.
             2. Use ONE coordinate - pick the easiest - and solve for k.
             3. VERIFY k in the other two coordinates. (This carries marks.)
             4. STATE the answer: k > 0 -> INTERNAL, k < 0 -> EXTERNAL.
  TRAP      Not stating internal or external. That is a mark on its own.
            Also, if one coordinate is identical in A and B (say y1 = y2),
            that coordinate gives you no information - choose another.
```

```
  PATTERN 14 — RATIO IN WHICH A COORDINATE PLANE DIVIDES AB          2 marks
  --------------------------------------------------------------------------
  TRIGGER   "In what ratio does the yz-plane (or zx, or xy) divide the
            join of A and B?"  Often followed by "and find the point".
  METHOD    Use the one-line shortcut, taking the coordinate that the
            plane sets to zero:
                  yz-plane (x = 0)   ->   -x1 : x2
                  zx-plane (y = 0)   ->   -y1 : y2
                  xy-plane (z = 0)   ->   -z1 : z2
            POSITIVE -> internal.  NEGATIVE -> external.
            To find the point, put that ratio back into the section formula.
  TRAP      Forgetting the minus sign on x1. Fast physical check:
            if x1 and x2 have the SAME sign, A and B are on the same side
            of the plane, so the division MUST be external.
```

```
  PATTERN 15 — CENTROID OF A TRIANGLE                                2 marks
  --------------------------------------------------------------------------
  TRIGGER   "Find the centroid of the triangle with vertices ..."
  METHOD    Add the three x's and divide by 3. Same for y and z.
  TRAP      Confusing it with the tetrahedron (divide by 4) or the incentre
            (weighted). Count the vertices before dividing.
```

```
  PATTERN 16 — CENTROID OF A TETRAHEDRON                             2 marks
  --------------------------------------------------------------------------
  TRIGGER   The word "tetrahedron", or FOUR vertices are listed.
  METHOD    Add all FOUR x's and divide by 4. Same for y and z.
  TRAP      Dividing by 3 out of habit. A tetrahedron is a triangular
            PYRAMID - four corners, four triangular faces.
```

```
  PATTERN 17 — FIND THE MISSING VERTEX FROM THE CENTROID             2 marks
  --------------------------------------------------------------------------
  TRIGGER   "Two (or three) vertices and the centroid are given.
            Find the remaining vertex."
  METHOD    missing = (number of vertices) x centroid - (sum of the given)

                  TRIANGLE     ->   3G - (sum of 2 given)
                  TETRAHEDRON  ->   4G - (sum of 3 given)

            Then CHECK by recomputing the centroid.
  TRAP      Using 3 for a tetrahedron. Also arithmetic slips with negatives -
            the check step catches them for free.
```

```
  PATTERN 18 — SHOW THAT THREE POINTS ARE COLLINEAR              2 or 4 marks
  --------------------------------------------------------------------------
  TRIGGER   "Show that A, B, C are collinear", or "Prove that the points
            lie on a straight line."
  METHOD    1. Compute AB, BC, CA using the distance formula.
             2. Identify the BIGGEST.
             3. Show (sum of the two smaller) = (the biggest).
             4. WRITE THE CONCLUSION: "hence A, B, C are collinear."
  TRAP      Rounding the surds to decimals and then claiming equality.
            Keep them exact:  sqrt(11) + 2 sqrt(11) = 3 sqrt(11).
            Never eyeball it - sqrt(3) + sqrt(17) is NOT sqrt(34).
```

```
  PATTERN 19 — COLLINEAR + FIND THE RATIO                            4 marks
  --------------------------------------------------------------------------
  TRIGGER   "Show A, B, C are collinear AND find the ratio in which B
            divides AC."
  METHOD    1. Do Pattern 18 first.
             2. The ratio is simply  AB : BC  (the two lengths you already
                have). Cancel the common surd.
             3. Verify with the section formula.
  TRAP      Giving BC : AB by mistake. B divides AC, so the piece nearest A
            comes first.
```

```
  PATTERN 20 — WHAT TYPE OF TRIANGLE DO THREE POINTS FORM?           4 marks
  --------------------------------------------------------------------------
  TRIGGER   "Show that the points form an equilateral / isosceles /
            right angled triangle", or "find the type of triangle".
  METHOD    1. Compute AB^2, BC^2, CA^2 and KEEP THEM SQUARED.
             2. All three equal            ->  equilateral
                exactly two equal          ->  isosceles
                small^2 + mid^2 = big^2    ->  right angled, at the vertex
                                               where the two SHORT sides meet
                both of the last two       ->  right angled isosceles
             3. Write the conclusion, naming the right-angle vertex.
  TRAP      Stopping at "isosceles" without testing Pythagoras. The famous
            shape  k, k, 2k  is ALWAYS right angled isosceles.
```

```
  PATTERN 21 — WHAT TYPE OF QUADRILATERAL DO FOUR POINTS FORM?       4 marks
  --------------------------------------------------------------------------
  TRIGGER   "Show that A, B, C, D form a square / rhombus / rectangle /
            parallelogram."
  METHOD    Compute the FOUR sides AB, BC, CD, DA and the TWO diagonals
            AC, BD - all SQUARED.
                  4 sides equal + diagonals equal    ->  SQUARE
                  4 sides equal + diagonals unequal  ->  RHOMBUS
                  opposite sides equal + diagonals equal    -> RECTANGLE
                  opposite sides equal + diagonals unequal  -> PARALLELOGRAM
  TRAP      Declaring "square" after only checking the four sides.
            THE DIAGONALS ARE THE WHOLE QUESTION. Four equal sides alone
            is only a rhombus.
```

```
  PATTERN 22 — FOURTH VERTEX OF A PARALLELOGRAM                      4 marks
  --------------------------------------------------------------------------
  TRIGGER   "A, B, C are three vertices of the parallelogram ABCD.
            Find D."
  METHOD    1. In ABCD the diagonals are AC and BD.
             2. They bisect each other, so midpoint AC = midpoint BD.
             3. Solve, or use the shortcut  D = A + C - B  coordinate by
                coordinate.
             4. Verify:  vector AB should equal vector DC.
  TRAP      The LETTER ORDER. In ABCD the diagonals are AC and BD; in ABDC
            they would be AD and BC. Read the name of the parallelogram.
```

```
  PATTERN 23 — SHOW THAT FOUR POINTS ARE COPLANAR                    4 marks
  --------------------------------------------------------------------------
  TRIGGER   "Show that the four points are coplanar / lie in one plane."
  METHOD    1. Show the diagonals of the quadrilateral ABCD bisect each
                other (midpoint AC = midpoint BD).
             2. Hence AC and BD INTERSECT.
             3. Two intersecting lines determine exactly one plane, and all
                four points lie on those two lines.
             4. Conclusion: the four points are COPLANAR.
  TRAP      Writing "they look coplanar". You must produce the common
            midpoint. The arithmetic IS the proof.
```

```
  PATTERN 24 — POINT ON AN AXIS EQUIDISTANT FROM TWO POINTS          4 marks
  --------------------------------------------------------------------------
  TRIGGER   "Find the point on the x-axis (or y-axis, or z-axis)
            equidistant from A and B."
  METHOD    1. Write the unknown with the correct zeros (Pattern 9).
             2. Write  PA^2 = PB^2 .  NEVER take square roots.
             3. The squared unknown cancels; you get a LINEAR equation.
             4. Solve, then substitute back and show the two distances
                really are equal.
  TRAP      Taking square roots and creating a mess. Squaring first is the
            whole trick.
```

```
  PATTERN 25 — POINT EQUIDISTANT FROM THREE OR FOUR POINTS           4 marks
  --------------------------------------------------------------------------
  TRIGGER   "Find the point equidistant from the four given points",
            or "find the centre of the sphere through ...".
  METHOD    1. Let P = (x, y, z).
             2. Write PA^2 = PB^2, PA^2 = PC^2, PA^2 = PD^2.
             3. Each one loses its x^2, y^2, z^2 terms, giving three
                LINEAR equations.
             4. Solve the system, then check all four distances.
  TRAP      Trying to solve three quadratic equations. Subtracting the
            squared distances is what makes them linear.
```

```
  PATTERN 26 — LOCUS PROBLEMS  ( PA = PB ,  PA^2 + PB^2 = k )        4 marks
  --------------------------------------------------------------------------
  TRIGGER   "Find the locus of P such that ...", "find the equation of
            the set of points such that ..."
  METHOD    1. Let P = (x, y, z).
             2. Turn the condition into SQUARED distances.
             3. Expand and simplify.
                  PA = PB      ->  a linear equation  ->  a PLANE
                  OP = r       ->  x^2+y^2+z^2 = r^2  ->  a SPHERE
                  PA^2+PB^2=k  ->  a sphere
             4. CHECK: for PA = PB, the midpoint of AB must satisfy your
                answer.
  TRAP      Leaving square roots in. Square everything at the first line.
```

```
  PATTERN 27 — INCENTRE OF A TRIANGLE                                4 marks
  --------------------------------------------------------------------------
  TRIGGER   "Find the incentre of the triangle with vertices ..."
  METHOD    1. Write the side lengths in the STANDARD naming:
                     a = BC  (opposite A)
                     b = CA  (opposite B)
                     c = AB  (opposite C)
             2. I = ( (a x1 + b x2 + c x3)/(a+b+c) , same for y , same for z )
             3. If all three sides are equal, the incentre IS the centroid -
                say so and finish in one line.
  TRAP      Pairing a with AB instead of BC. Write the three lengths down
            with their names BEFORE touching the formula.
```

```
  PATTERN 28 — TRANSLATION OF AXES                                   2 marks
  --------------------------------------------------------------------------
  TRIGGER   "The origin is shifted to (h,k,l) without changing the
            direction of the axes. Find the new coordinates of P."
            Or the reverse: "the new coordinates are ..., find the original."
  METHOD    NEW = OLD - SHIFT        X = x - h ,  Y = y - k ,  Z = z - l
            OLD = NEW + SHIFT        x = X + h ,  y = Y + k ,  z = Z + l
  TRAP      Adding instead of subtracting. Test yourself on the new origin:
            it MUST become (0,0,0), and h - h = 0 only if you subtract.
```

```
  PATTERN 29 — EQUATION OF A COORDINATE PLANE OR A PARALLEL PLANE    2 marks
  --------------------------------------------------------------------------
  TRIGGER   "Write the equation of the xy-plane", or "find the plane
            through P parallel to the zx-plane", or "the distance between
            the planes z = 4 and z = -3".
  METHOD    xy-plane -> z = 0 ,  yz-plane -> x = 0 ,  zx-plane -> y = 0.
            A plane parallel to one of them is the same letter = constant,
            and the constant comes from the given point.
            Distance between z = c1 and z = c2 is |c1 - c2|.
  TRAP      Naming the wrong letter. The MISSING letter is the one that
            equals a constant:  the xy-plane misses z, so it is z = 0.
```

```
  PATTERN 30 — PROVE THE MEDIANS ARE CONCURRENT / DERIVE A FORMULA   4 marks
  --------------------------------------------------------------------------
  TRIGGER   "Prove that the medians of a triangle are concurrent", or
            "derive the section formula", or "prove that the centroid
            divides each median in the ratio 2 : 1".
  METHOD    1. Take general vertices A(x1,y1,z1), B(x2,y2,z2), C(x3,y3,z3).
             2. Write the midpoint D of BC.
             3. Apply the section formula to AD with the ratio 2 : 1.
             4. Get ( (x1+x2+x3)/3 , ... ).
             5. Point out that the expression is SYMMETRIC in A, B, C, so
                the same point comes from all three medians.
             6. Conclude: concurrent, at the centroid, dividing 2 : 1.
  TRAP      Using specific numbers. A "prove" question needs general letters.
```

---

# SELF-TEST — can you name the pattern in 5 seconds?

Cover the right column. Read the question stem. Say the pattern number out loud.

| Question stem | Pattern |
|---|---|
| "Find the distance between `(3,4,-2)` and `(1,0,7)`." | 1 |
| "Find the distance of `(1,2,2)` from the origin." | 2 |
| "Find the distance of `(3,4,12)` from the z-axis." | 3 |
| "How far is `(2,-3,6)` from the `yz`-plane?" | 4 |
| "If the distance between `(5,-1,7)` and `(x,5,1)` is 9, find `x`." | 5 |
| "In which octant does `(-2,3,-5)` lie?" | 6 |
| "Find the foot of the perpendicular from `P` to the `xy`-plane." | 7 |
| "Find the image of `(3,-2,5)` in the origin." | 8 |
| "Find the point **on the y-axis** such that ..." | 9 (then 24) |
| "Find the midpoint of the join of ..." | 10 |
| "Find the point dividing `AB` in the ratio `2:3`." | 11 |
| "Find the point dividing `AB` **externally** in `2:1`." | 12 |
| "In what ratio does `P(5,4,-6)` divide `AB`?" | 13 |
| "In what ratio does the `yz`-plane divide `AB`?" | 14 |
| "Find the centroid of the triangle ..." | 15 |
| "Find the centroid of the **tetrahedron** ..." | 16 |
| "Two vertices and the centroid are given. Find the third." | 17 |
| "Show that the three points are collinear." | 18 |
| "Show collinear and find the ratio in which `B` divides `AC`." | 19 |
| "Show that the points form a right angled triangle." | 20 |
| "Show that `A, B, C, D` are the vertices of a square." | 21 |
| "`A, B, C` are three vertices of parallelogram `ABCD`. Find `D`." | 22 |
| "Show that the four points are coplanar." | 23 |
| "Find the point on the z-axis equidistant from `A` and `B`." | 24 |
| "Find the point equidistant from the four given points." | 25 |
| "Find the locus of `P` such that `PA = PB`." | 26 |
| "Find the incentre of the triangle ..." | 27 |
| "The origin is shifted to `(1,2,-3)`. Find the new coordinates." | 28 |
| "Write the equation of the plane through `P` parallel to the `zx`-plane." | 29 |
| "Prove that the medians of a triangle are concurrent." | 30 |

If you can name all thirty in five seconds each, you are done with this chapter.

---

# THE PATTERNS THAT SHARE ONE ENGINE

Most of these thirty are the **same two formulas** wearing different clothes.

```
                        THE DISTANCE FORMULA
                                 |
        +---------+---------+----+----+---------+----------+
        |         |         |         |         |          |
     P1, P2    P3, P4      P5     P18, P19   P20, P21   P24, P25, P26
    distances  from axes  unknown  collinear  triangle   equidistant
               and planes  coord              & quad     & locus
                                                             |
                                                          P27 incentre
                                                          (needs sides)


                        THE SECTION FORMULA
                                 |
        +---------+---------+----+----+---------+
        |         |         |         |         |
     P10       P11, P12    P13       P14     P22, P30
   midpoint   int / ext   find the  plane   parallelogram,
                           ratio    ratio   medians proof
                                              |
                                        P15, P16, P17
                                        centroids (a
                                        2:1 section)


                        PURE MEMORY, NO FORMULA
                                 |
              +--------+---------+---------+--------+
              |        |         |         |        |
             P6       P7        P8        P9      P28, P29
           octants  project-   images   the form  translation
                    ions                of a      and planes
                                        point
```

**Read that diagram again.** Two formulas and one memory table cover the entire chapter.

---

# GUARANTEED-MARKS PLAN FOR THIS CHAPTER

```
  +--------------------------------------------------------------------------+
  |                                                                          |
  |   STEP 1 - THE ABSOLUTE MINIMUM  (about 2 hours)                         |
  |                                                                          |
  |     Learn ONLY these five things:                                        |
  |       * the distance formula, all three terms                            |
  |       * OP = sqrt(x^2 + y^2 + z^2)                                       |
  |       * axis -> drop the letter ;  plane -> keep the missing one         |
  |       * projection = zeros ;  image = minus signs                        |
  |       * centroid: /3 for a triangle, /4 for a tetrahedron                |
  |                                                                          |
  |     That covers Patterns 1, 2, 3, 4, 6, 7, 8, 15, 16, 17                 |
  |     = TEN of the thirty patterns, and it is enough to answer the         |
  |       Section A question from this chapter in almost any year.           |
  |                                                                          |
  |     PAYOFF: 2 marks, near-guaranteed.                                    |
  |                                                                          |
  +--------------------------------------------------------------------------+
  |                                                                          |
  |   STEP 2 - THE SECTION FORMULA  (about 2 hours)                          |
  |                                                                          |
  |       * internal, external, midpoint                                     |
  |       * "in what ratio does P divide AB" using k : 1                     |
  |       * the plane shortcut  -x1 : x2                                     |
  |       * D = A + C - B for a parallelogram                                |
  |                                                                          |
  |     That covers Patterns 10, 11, 12, 13, 14, 22.                         |
  |                                                                          |
  |     PAYOFF: a SECOND Section A question becomes safe, and the            |
  |     Section B question becomes possible.  +2 to +4 marks.                |
  |                                                                          |
  +--------------------------------------------------------------------------+
  |                                                                          |
  |   STEP 3 - THE 4-MARK SHAPES  (about 1.5 hours)                          |
  |                                                                          |
  |       * collinear (Pattern 18, 19)                                       |
  |       * type of triangle (Pattern 20)                                    |
  |       * square / rhombus, remembering the DIAGONALS (Pattern 21)         |
  |       * equidistant point (Pattern 24)                                   |
  |                                                                          |
  |     PAYOFF: the Section B question, in the years it appears. +4 marks.   |
  |                                                                          |
  +--------------------------------------------------------------------------+
  |                                                                          |
  |   STEP 4 - THE LEFTOVERS  (30 minutes, only if you have time)            |
  |                                                                          |
  |       * incentre (27), coplanar (23), locus (26), translation (28),      |
  |         four-point equidistance (25), the medians proof (30)             |
  |                                                                          |
  |     These are rare. Do them last. Do not let them stop you from          |
  |     finishing Steps 1 to 3.                                              |
  |                                                                          |
  +--------------------------------------------------------------------------+
```

```
  +--------------------------------------------------------------------------+
  |  THE HONEST BOTTOM LINE                                                  |
  |                                                                          |
  |  Six hours of work on this chapter buys you 2 marks you will almost      |
  |  certainly get, up to 6 marks in a good year, AND it makes Chapter 6     |
  |  (Direction Cosines) and Chapter 7 (The Plane) roughly half as hard.     |
  |                                                                          |
  |  Those three chapters together are 8 to 16 marks of Maths IB, and they   |
  |  are the three shortest chapters in the book. Start here.                |
  +--------------------------------------------------------------------------+
```
