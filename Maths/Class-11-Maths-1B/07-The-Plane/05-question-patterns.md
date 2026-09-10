# The Plane — Every Question Pattern That Can Be Asked

A "pattern" is a question SHAPE. The numbers change every year. The shape does not.

For each one, learn:
- **TRIGGER** — how to recognise it in one glance
- **METHOD** — the fixed steps
- **TRAP** — where marks get lost

This chapter has only about 24 shapes in total, and half of them are one-liners.
That is why it is the cheapest chapter in Maths IB.

---

```
  PATTERN 1 — DIRECTION RATIOS OF THE NORMAL                      2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the direction ratios of the normal to the plane ..."
  METHOD    Copy the coefficients of x, y, z.  That is the whole answer.
            For  a x + b y + c z + d = 0   ->   normal DRs = (a, b, c)
  TRAP      Answering with the point (a, b, c) as if it were on the plane,
            or including the constant d. The constant is never part of it.
```

```
  PATTERN 2 — DIRECTION COSINES OF THE NORMAL                     2 marks
  ------------------------------------------------------------------------
  TRIGGER   The word COSINES instead of RATIOS.
  METHOD    1. DRs = (a, b, c)
            2. r = sqrt(a^2 + b^2 + c^2)
            3. DCs = (a/r , b/r , c/r)
            4. CHECK  l^2 + m^2 + n^2 = 1
  TRAP      Forgetting to divide by r. Also: both (l,m,n) and (-l,-m,-n)
            are correct - do not panic if the key shows the other sign.
```

```
  PATTERN 3 — REDUCE A PLANE TO NORMAL FORM                       2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Reduce / transform / express ... in the normal form."
  METHOD    1. a x + b y + c z = -d       (constant alone on the right)
            2. r = sqrt(a^2 + b^2 + c^2)
            3. Divide by  r  or by  -r , whichever makes the RIGHT side
               come out POSITIVE.
            4. Read off l, m, n and p.  State p as the distance from O.
  TRAP      Leaving p negative. p is a DISTANCE - flip every sign instead.
```

```
  PATTERN 4 — DISTANCE OF A PLANE FROM THE ORIGIN                 2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the perpendicular distance of the plane from the origin",
            or "find the value of p".
  METHOD    p = |d| / sqrt(a^2 + b^2 + c^2).  One line.
  TRAP      Using d without the modulus. Also, make sure the plane is
            written as  "... + d = 0"  before you read off d.
```

```
  PATTERN 5 — FIND THE INTERCEPTS                                 2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the intercepts made on the coordinate axes by ..."
  METHOD    Put y = z = 0  ->  x-intercept
            Put x = z = 0  ->  y-intercept
            Put x = y = 0  ->  z-intercept
            Shortcut for  ax+by+cz+d = 0 :  -d/a , -d/b , -d/c
  TRAP      If a variable is MISSING from the equation, that intercept does
            not exist - the plane is parallel to that axis. Do not write 0.
```

```
  PATTERN 6 — WRITE A PLANE FROM ITS INTERCEPTS                   2 marks
  ------------------------------------------------------------------------
  TRIGGER   "The plane makes intercepts a, b, c on the axes ..."
  METHOD    x/a + y/b + z/c = 1 , then clear the fractions by multiplying
            by the LCM. Verify each intercept point gives a true statement.
  TRAP      Writing  ax + by + cz = 1  instead of dividing. The intercepts
            go UNDERNEATH.
```

```
  PATTERN 7 — PLANE THROUGH A POINT WITH A GIVEN NORMAL           2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Through (x1,y1,z1) with normal DRs (a,b,c)" , or
            "through (x1,y1,z1) PERPENDICULAR to the line whose DRs are ..."
  METHOD    Fast form:   a x + b y + c z  =  a x1 + b y1 + c z1
            (same left side as the normal, point plugged into the right)
            Then CHECK the point gives 0.
  TRAP      Confusing "perpendicular to a LINE" (the line is the normal)
            with "parallel to a line" (that would be Pattern 21).
```

```
  PATTERN 8 — PLANE THROUGH A POINT, PARALLEL TO A GIVEN PLANE    2 marks
  ------------------------------------------------------------------------
  TRIGGER   "... parallel to the plane ax + by + cz + d = 0"
  METHOD    Keep a, b, c EXACTLY as they are.
            New constant = the point substituted into ax + by + cz.
  TRAP      "Simplifying" the coefficients by dividing. That changes the
            normal and therefore changes the plane.
```

```
  PATTERN 9 — PLANE PARALLEL TO A COORDINATE PLANE                2 marks
  ------------------------------------------------------------------------
  TRIGGER   "... parallel to the XOY / YOZ / ZOX plane through (p, q, r)"
  METHOD    XOY is z = 0  ->  answer  z = r
            YOZ is x = 0  ->  answer  x = p
            ZOX is y = 0  ->  answer  y = q
  TRAP      Mixing up ZOX with XOY. Write the letters down: the plane named
            by two letters is the one where the THIRD letter is zero.
```

```
  PATTERN 10 — DISTANCE FROM A POINT TO A PLANE                   2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the distance from the point ... to the plane ...", or
            "the length of the perpendicular from ... to ..."
  METHOD    1. Write the plane as  ax + by + cz + d = 0
            2. D = |a x1 + b y1 + c z1 + d| / sqrt(a^2+b^2+c^2)
  TRAP      Forgetting to move the constant across first. "2x - y + 2z = 5"
            has d = -5, not +5.
```

```
  PATTERN 11 — DISTANCE BETWEEN TWO PARALLEL PLANES               2 marks
  ------------------------------------------------------------------------
  TRIGGER   Two plane equations whose coefficients are proportional.
  METHOD    1. SCALE one equation so both have IDENTICAL a, b, c.
            2. D = |d1 - d2| / sqrt(a^2 + b^2 + c^2)
            Alternative that always works: take any point on plane 1 and
            use Pattern 10 on plane 2.
  TRAP      Subtracting the constants before scaling. This is the single
            most common wrong answer in the whole chapter.
```

```
  PATTERN 12 — ANGLE BETWEEN TWO PLANES                        2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the angle between the planes ..."
  METHOD    1. Write both normals n1 = (a1,b1,c1) , n2 = (a2,b2,c2)
            2. cos(theta) = |n1 . n2| / (|n1| |n2|)
            3. Give theta as a standard angle if it is one,
               otherwise leave it as cos^-1( ... ).
  TRAP      Using SIN. Plane-to-plane is COSINE. Sine belongs to Pattern 18.
```

```
  PATTERN 13 — PROVE / USE PERPENDICULARITY OF TWO PLANES         2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that the planes are perpendicular", or
            "Find k so that the planes are perpendicular".
  METHOD    a1 a2 + b1 b2 + c1 c2 = 0.
            To prove: compute it and show it equals 0.
            To find k: set it equal to 0 and solve the linear equation.
            Substitute k back and confirm.
  TRAP      Trying to use the full cos formula. You only need the numerator.
```

```
  PATTERN 14 — PROVE / USE PARALLELISM OF TWO PLANES              2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show the planes are parallel" , "find k so that ... parallel"
  METHOD    a1/a2 = b1/b2 = c1/c2.
            Then check the constant ratio d1/d2:
               if it MATCHES too, they are the SAME plane
               if it does NOT, they are parallel and distinct.
  TRAP      Stopping before the constant check and calling two copies of the
            same plane "two parallel planes".
```

```
  PATTERN 15 — PLANE THROUGH THREE GIVEN POINTS                   4 marks
  ------------------------------------------------------------------------
  TRIGGER   Three points listed, "find the equation of the plane through".
  METHOD    (safer version)
            1. v1 = B - A ,  v2 = C - A
            2. n = v1 x v2   (cross product)
            3. Divide n by any common factor
            4. Plane: n1(x-x1) + n2(y-y1) + n3(z-z1) = 0
            5. CHECK ALL THREE points
            (determinant version)
                 | x-x1   y-y1   z-z1  |
                 | x2-x1  y2-y1  z2-z1 |  =  0    then expand
                 | x3-x1  y3-y1  z3-z1 |
  TRAP      Checking only one point. Also: if n comes out (0,0,0) the three
            points are COLLINEAR and no unique plane exists - say so.
```

```
  PATTERN 16 — SHOW FOUR POINTS ARE COPLANAR                      4 marks
  ------------------------------------------------------------------------
  TRIGGER   Four points listed, "show that they are coplanar".
  METHOD    1. Build the plane through the FIRST THREE (Pattern 15)
            2. Substitute the FOURTH point
            3. If it gives 0, they are coplanar - say the sentence.
  TRAP      Not writing the concluding sentence. The final mark is for
            stating "hence the four points are coplanar".
```

```
  PATTERN 17 — FOOT OF THE PERPENDICULAR AND IMAGE                4 marks
  ------------------------------------------------------------------------
  TRIGGER   "foot of the perpendicular" , "image" , "reflection" ,
            "mirror of the point in the plane"
  METHOD    1. V = a x1 + b y1 + c z1 + d        (value at the point)
            2. k = -V / (a^2 + b^2 + c^2)
            3. FOOT  = (x1 + ak , y1 + bk , z1 + ck)
            4. IMAGE = (x1 + 2ak , y1 + 2bk , z1 + 2ck)
            5. CHECK: foot satisfies the plane, AND foot is the midpoint
               of the point and the image.
  TRAP      Using k instead of 2k for the image. The midpoint check catches
            it in five seconds - always do it.
```

```
  PATTERN 18 — ANGLE BETWEEN A LINE AND A PLANE                4 marks
  ------------------------------------------------------------------------
  TRIGGER   One LINE (given as ratios or by two points) and one PLANE.
  METHOD    1. Line direction (l, m, n) ; plane normal (a, b, c)
            2. sin(theta) = |al + bm + cn| / ( sqrt(a^2+b^2+c^2)
                                               sqrt(l^2+m^2+n^2) )
            3. theta = sin^-1( ... )
  TRAP      Using COS. Line-to-plane is SINE, because the plane is
            represented by an arrow at 90 degrees to itself.
```

```
  PATTERN 19 — LINE PARALLEL TO A PLANE / LIES IN THE PLANE       4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that the line is parallel to the plane" , or
            "show that the line lies in the plane".
  METHOD    CONDITION 1 (both cases):  a l + b m + c n = 0
            CONDITION 2 (only "lies in"): a point of the line satisfies
                                          the plane equation.
            parallel & outside  ->  C1 holds, C2 fails
            lies in the plane   ->  C1 and C2 both hold
            If asked for the distance of a parallel line, use Pattern 10
            with any point of the line.
  TRAP      Writing only Condition 1 for a "lies in" question. Condition 2
            carries its own mark.
```

```
  PATTERN 20 — POINT OF INTERSECTION OF A LINE AND A PLANE        4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the point where the line meets the plane."
  METHOD    1. Set the line ratios = t :
                 x = x1 + lt , y = y1 + mt , z = z1 + nt
            2. Substitute into the plane
            3. Solve the single linear equation for t
            4. Put t back to get the point
            5. CHECK the point in the plane
            If t vanishes and the statement is FALSE -> line is parallel.
            If t vanishes and the statement is TRUE  -> line lies in it.
  TRAP      Substituting t back into the PLANE instead of into the LINE.
            The point comes from the line.
```

```
  PATTERN 21 — PLANE THROUGH THE INTERSECTION OF TWO PLANES       4 marks
  ------------------------------------------------------------------------
  TRIGGER   "through the line of intersection of the planes ... and ..."
  METHOD    1. Write both as  P1 = 0  and  P2 = 0
            2. Family:  P1 + k P2 = 0
            3. Use the ONE extra condition to find k:
                  through a point  -> substitute the point
                  through origin   -> d1 + k d2 = 0
                  perpendicular to a plane -> new normal DOT that normal = 0
                  parallel to a plane      -> new normal proportional to it
            4. Substitute k, clear fractions, CHECK the extra condition.
  TRAP      Forgetting to move every constant to the left first. P1 must
            genuinely be "= 0", not "= 6".
```

```
  PATTERN 22 — WHICH SIDE OF A PLANE / RATIO OF DIVISION       2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "same side or opposite sides" , "the ratio in which the plane
            divides the segment joining ..."
  METHOD    S1 = value of the plane expression at A
            S2 = value at B
            SIGNS same     -> same side (the plane misses segment AB)
            SIGNS opposite -> opposite sides (the plane cuts AB)
            RATIO = -S1 : S2 ,  positive = internal, negative = external.
            CHECK by computing the dividing point and substituting it.
  TRAP      Forgetting the minus sign in front of S1. Also: for a
            coordinate plane like z = 0, the "expression" is just z.
```

```
  PATTERN 23 — PLANE PERPENDICULAR TO TWO GIVEN PLANES            4 marks
  ------------------------------------------------------------------------
  TRIGGER   "through the point ... and perpendicular to EACH of the planes"
  METHOD    1. n = n1 x n2   (cross product of the two given normals)
            2. Plane through the point with normal n (Pattern 7)
            3. CHECK: n . n1 = 0 and n . n2 = 0 and the point fits.
  TRAP      Adding the two normals instead of crossing them.
```

```
  PATTERN 24 — PLANE THROUGH TWO POINTS, PERPENDICULAR TO A PLANE 4 marks
  ------------------------------------------------------------------------
  TRIGGER   Two points AND one plane, with the word "perpendicular".
  METHOD    1. AB = B - A
            2. n = AB x (normal of the given plane)
            3. Plane through A with normal n
            4. CHECK both points and the perpendicularity.
  TRAP      Crossing in the wrong order gives the negative of n - which is
            the SAME plane, so do not waste time worrying about it.
```

```
  PATTERN 25 — PERPENDICULAR BISECTOR PLANE OF A SEGMENT          4 marks
  ------------------------------------------------------------------------
  TRIGGER   "the plane bisecting AB at right angles" , or
            "the locus of points equidistant from A and B".
  METHOD    1. Midpoint M of AB
            2. Normal = AB
            3. Plane through M with normal AB
            CHECK by showing the distances to A and to B are equal.
  TRAP      Using A instead of the midpoint.
```

```
  PATTERN 26 — ANGLE-BISECTOR PLANES                              4 marks
  ------------------------------------------------------------------------
  TRIGGER   "the planes bisecting the angles between ..."
  METHOD    1. Make d1 and d2 BOTH POSITIVE (multiply by -1 if needed)
            2. (P1)/sqrt(a1^2+b1^2+c1^2) = +- (P2)/sqrt(a2^2+b2^2+c2^2)
            3. "+" gives the bisector of the angle CONTAINING THE ORIGIN
            4. CHECK: pick a point on your answer and show its distances
               to the two planes are equal; also check the two bisectors
               are perpendicular to each other.
  TRAP      Not normalising the signs of d1 and d2 first, which swaps which
            bisector contains the origin.
```

---

# SELF-TEST — CAN YOU NAME THE PATTERN IN 5 SECONDS?

Cover the right column. Read the stem. Say the pattern number out loud.

| Question stem you might see | Pattern |
|---|---|
| "Find the d.r.'s of the normal to `3x - y + 2z = 7`" | 1 |
| "Find the d.c.'s of the normal to `x + 2y + 2z = 5`" | 2 |
| "Reduce `x + 2y - 2z - 9 = 0` to the normal form" | 3 |
| "Find the distance of the plane from the origin" | 4 |
| "Find the intercepts made by the plane on the axes" | 5 |
| "The plane makes intercepts 2, 3, 4 — find its equation" | 6 |
| "Through (2,3,4), perpendicular to the line with d.r.'s (1,-2,3)" | 7 |
| "Through (1,2,3) and parallel to `2x + 3y - 4z = 1`" | 8 |
| "Through (1,2,3) parallel to the XOY plane" | 9 |
| "Find the perpendicular distance from (2,5,-3) to the plane" | 10 |
| "Find the distance between `2x-2y+z+3=0` and `4x-4y+2z+5=0`" | 11 |
| "Find the angle between the planes ... and ..." | 12 |
| "Find k so that the planes are perpendicular" | 13 |
| "Find k so that the planes are parallel" | 14 |
| "Find the plane through the points A, B and C" | 15 |
| "Show that the four points are coplanar" | 16 |
| "Find the image of the point in the plane" | 17 |
| "Find the angle between the line and the plane" | 18 |
| "Show that the line lies in the plane" | 19 |
| "Find the point where the line meets the plane" | 20 |
| "Through the line of intersection of the two planes and (1,1,1)" | 21 |
| "In what ratio does the plane divide the join of A and B?" | 22 |
| "Through (1,-1,2), perpendicular to each of the two planes" | 23 |
| "Through A and B, perpendicular to the plane `x + y - z = 0`" | 24 |
| "The plane bisecting AB at right angles" | 25 |
| "The planes bisecting the angles between two given planes" | 26 |
| "Find the foot of the perpendicular from the origin to the plane" | 17 (with the point = origin) |
| "What does `x = 5` represent in space?" | 9 (a plane parallel to YOZ) |
| "The foot of the perpendicular from O is (1,2,3) — find the plane" | 7 (the foot IS the normal) |
| "Show that the planes `2x - y + z = 5` and `x + y - z = 3` are perpendicular" | 13 |

---

# GUARANTEED-MARKS PLAN FOR THIS CHAPTER

```
  +-------------------------------------------------------------------+
  |                                                                   |
  |   TIER 1  -  LEARN THESE OR NOTHING ELSE       (Patterns 1-11)    |
  |                                                                   |
  |   Every one of them is a 2-mark question that takes 60 to 90      |
  |   seconds. They all come from just three facts:                   |
  |                                                                   |
  |        (a, b, c) is the normal                                    |
  |        p  =  |d| / sqrt(a^2 + b^2 + c^2)                          |
  |        D  =  |value at the point| / sqrt(a^2 + b^2 + c^2)         |
  |                                                                   |
  |   Time needed: ONE EVENING.                                       |
  |   Expected return: the 2-mark question in Section A, which        |
  |   appears almost every year.                                      |
  |                                                                   |
  +-------------------------------------------------------------------+

  +-------------------------------------------------------------------+
  |                                                                   |
  |   TIER 2  -  ADD THESE IF YOU HAVE A SECOND EVENING               |
  |                                        (Patterns 12-17, 21, 22)   |
  |                                                                   |
  |   Angle between planes, the perpendicular/parallel conditions,    |
  |   plane through three points, foot and image, family of planes,   |
  |   ratio of division.                                              |
  |                                                                   |
  |   These cover the 4-mark question if one appears, and several     |
  |   of them (12, 13, 14) are also asked as 2-markers.               |
  |                                                                   |
  +-------------------------------------------------------------------+

  +-------------------------------------------------------------------+
  |                                                                   |
  |   TIER 3  -  ONLY IF YOU ARE ALREADY COMFORTABLE                  |
  |                                    (Patterns 18-20, 23-26)        |
  |                                                                   |
  |   Line-and-plane work and the cross-product constructions.        |
  |   Valuable for EAPCET and JEE Main, less so for the board paper.  |
  |                                                                   |
  +-------------------------------------------------------------------+
```

## The honest bottom line

```
     Study time      Patterns        Marks you can expect
     -----------     ------------    -----------------------------------
     1 evening       1 - 11          the 2-mark Section A question
     2 evenings      1 - 17, 21, 22  that, plus a 4-mark Section B if set
     3 evenings      all 26          all of the above, plus the EAPCET
                                     and JEE Main questions from 3D

     This chapter will NOT give you a 7-mark long answer in Maths IB.
     Do not spend a week here. Spend two evenings, bank the easy marks,
     and put the rest of your time into Differentiation, Applications of
     Derivatives, The Straight Line and Pair of Straight Lines - that is
     where the 35 Section C marks live.
```

## The three lines to write in the margin of your answer sheet

```
   1.   normal = (a, b, c)

   2.   V = a x1 + b y1 + c z1 + d          <- "the value at the point"
        distance = |V| / sqrt(a^2+b^2+c^2)
        sign of V = which side
        k = -V / (a^2+b^2+c^2)  ->  foot = +k n , image = +2k n

   3.   planes -> COS of normals        line & plane -> SIN
```

If you can write those three lines from memory, you can answer every
2-mark and most 4-mark questions this chapter has ever produced.
