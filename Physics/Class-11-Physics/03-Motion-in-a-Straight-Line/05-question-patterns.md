# Motion in a Straight Line — Every Question Pattern That Can Be Asked

A "pattern" is a question SHAPE. The numbers change every year. The shape does not.

For each one, learn:
- **TRIGGER** — how to recognise it in one glance
- **METHOD** — the fixed steps
- **TRAP** — where marks get lost

---

```
  PATTERN 1 — DISTANCE vs DISPLACEMENT                            2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Distinguish between distance and displacement." /
            "Can displacement be zero when distance is not?"
  METHOD    1. Distance = total path length, SCALAR, always positive.
            2. Displacement = final position minus initial position,
               VECTOR, can be zero or negative.
            3. Give the returning-body example.
            4. State  distance >= | displacement |.
  TRAP      Writing displacement without a sign or a direction.
            You lose half the mark every time.
```

```
  PATTERN 2 — FIND DISTANCE AND DISPLACEMENT FROM A JOURNEY       2 marks
  ------------------------------------------------------------------------
  TRIGGER   "A man walks 300 m north then 400 m south ..."
  METHOD    1. Mark one direction as positive.
            2. Distance  = ADD all the lengths, ignoring signs.
            3. Displacement = ADD the lengths WITH their signs.
            4. State the direction of the displacement.
  TRAP      If the motion is not along one line (e.g. 3 m east then
            4 m north), the displacement is sqrt(3^2 + 4^2) = 5 m,
            not 7 m.
```

```
  PATTERN 3 — AVERAGE SPEED vs AVERAGE VELOCITY                2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Define average speed and average velocity." /
            "A car goes A to B and returns. Find both."
  METHOD    1. Average speed    = total path length / total time.
            2. Average velocity = total displacement / total time.
            3. If the body returns to the start, average velocity = 0.
  TRAP      NEVER take the plain average of the two speeds unless the
            TIMES are equal. Use total distance over total time.
```

```
  PATTERN 4 — THE EQUAL-DISTANCE / EQUAL-TIME AVERAGE            objective
  ------------------------------------------------------------------------
  TRIGGER   "Half the distance at v1 and half at v2 ..." or
            "First hour at v1, second hour at v2 ..."
  METHOD    Equal DISTANCES  ->  2 v1 v2 / ( v1 + v2 )   (harmonic mean)
            Equal TIMES      ->  ( v1 + v2 ) / 2         (ordinary mean)
            Three equal distances -> 3 / (1/v1 + 1/v2 + 1/v3)
  TRAP      Reading "half the time" as "half the distance".
            Read the sentence twice before choosing the formula.
```

```
  PATTERN 5 — DIFFERENTIATE A POSITION EQUATION                2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "x = 3t^2 + 2t + 5 . Find the velocity / acceleration at t = 2 s."
  METHOD    1. v = dx/dt        (differentiate once)
            2. a = dv/dt = d2x/dt2   (differentiate twice)
            3. Substitute the value of t ONLY AT THE END.
  TRAP      Substituting t before differentiating. You then get zero.
            Also: "velocity is zero" means set v = 0 and solve for t.
```

```
  PATTERN 6 — INTEGRATE A VELOCITY EQUATION                    2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "v = 3t^2 + 2t . Find the displacement in the first 2 s."
  METHOD    1. displacement = integral of v dt between the given limits.
            2. For acceleration given as a function of t,
               integrate once for v and twice for x.
  TRAP      Forgetting the initial value (the constant of integration)
            when the body does not start at the origin or from rest.
```

```
  PATTERN 7 — ZERO VELOCITY BUT NON-ZERO ACCELERATION             2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Can a body have zero velocity and non-zero acceleration?"
  METHOD    Answer YES. Give the ball at the highest point of a
            vertical throw: v = 0 there, but a = g = 9.8 m/s^2 down.
  TRAP      Saying "at the top a = 0 as well". Gravity never switches off.
```

```
  PATTERN 8 — SIGN OF ACCELERATION / SPEEDING UP OR SLOWING DOWN  2 marks
  ------------------------------------------------------------------------
  TRIGGER   "A body has negative velocity and negative acceleration.
            Is it speeding up?"
  METHOD    v and a SAME sign      ->  speeding up
            v and a OPPOSITE signs ->  slowing down (retardation)
  TRAP      Assuming that "negative acceleration always means slowing
            down". It does not.
```

```
  PATTERN 9 — DERIVE THE EQUATIONS OF MOTION, GRAPHICAL METHOD  4 or 8 marks
  ------------------------------------------------------------------------
  TRIGGER   "Derive v = u + at and s = ut + (1/2)at^2 using a
            velocity-time graph."
  METHOD    1. DRAW the v-t graph with OA = u , CD = v , OD = t.
               (The drawing itself carries marks.)
            2. Equation 1: slope of BC = a = (v - u)/t.
            3. Equation 2: s = area of rectangle ABDO + area of
               triangle BCD = ut + (1/2)at^2.
            4. Equation 3: s = area of the trapezium = (1/2)(u+v)t ,
               then substitute t = (v-u)/a.
            5. State that all three need CONSTANT acceleration.
  TRAP      Not drawing and LABELLING the graph. Half the marks are
            for the labelled diagram.
  NOTE      *** THE HIGHEST-FREQUENCY LONG QUESTION IN THIS CHAPTER ***
```

```
  PATTERN 10 — DERIVE THE EQUATIONS OF MOTION, CALCULUS METHOD  4 or 8 marks
  ------------------------------------------------------------------------
  TRIGGER   "Derive the equations of motion using calculus."
  METHOD    1. From  a = dv/dt , integrate  dv = a dt   ->  v = u + at
            2. From  v = dx/dt , integrate  dx = (u + at) dt
                                                    ->  s = ut + (1/2)at^2
            3. From  a = v dv/dx , integrate  v dv = a dx
                                                    ->  v^2 - u^2 = 2as
  TRAP      Forgetting to write the LIMITS of integration
            (u to v , 0 to t , 0 to s). Marks are given for them.
```

```
  PATTERN 11 — STRAIGHT SUBSTITUTION NUMERICAL                 2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "A car accelerates from 10 m/s to 30 m/s in 5 s. Find ..."
  METHOD    1. Write down u , v , a , t , s and mark which is unknown.
            2. Choose the equation that does NOT contain the quantity
               you were not given.
            3. Substitute and solve.
            4. Write the unit.
  TRAP      Not converting km/h to m/s. Multiply by 5/18.
```

```
  PATTERN 12 — DISTANCE TRAVELLED IN THE nth SECOND            2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the distance travelled in the 5th second." /
            "Derive the expression for distance in the nth second."
  METHOD    Formula:   s(nth) = u + (a/2)( 2n - 1 )
            Derivation: s(nth) = s(n) - s(n-1) , then simplify
                        n^2 - (n-1)^2 = 2n - 1.
  TRAP      Confusing "in the 5th second" with "in 5 seconds".
            The second one uses s = ut + (1/2)at^2.
```

```
  PATTERN 13 — RATIO OF DISTANCES IN SUCCESSIVE SECONDS          objective
  ------------------------------------------------------------------------
  TRIGGER   "A body starts from rest. Find the ratio of distances
            covered in the 1st, 2nd and 3rd seconds."
  METHOD    Distances in successive seconds  ->  1 : 3 : 5 : 7 ...
            Total distances after 1,2,3 s    ->  1 : 4 : 9 : 16 ...
  TRAP      Both ratios hold ONLY when the body STARTS FROM REST.
```

```
  PATTERN 14 — DRAW x-t , v-t AND a-t GRAPHS                      4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Draw the position-time, velocity-time and acceleration-time
            graphs for a body at rest / with uniform velocity /
            with uniform acceleration."
  METHOD    Draw NINE small graphs in a 3 x 3 arrangement.
              REST            : x horizontal , v on axis , a on axis
              UNIFORM VELOCITY: x sloping    , v horizontal , a on axis
              UNIFORM ACCN    : x parabola   , v sloping    , a horizontal
            Label BOTH axes with the quantity AND the unit.
  TRAP      Drawing the x-t graph for uniform acceleration as a straight
            line. It is a PARABOLA.
```

```
  PATTERN 15 — READ A GIVEN GRAPH                              2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   A graph is printed and you are asked for velocity,
            acceleration or displacement.
  METHOD    x-t graph, velocity asked      ->  find the SLOPE
            v-t graph, acceleration asked  ->  find the SLOPE
            v-t graph, displacement asked  ->  find the AREA
            a-t graph, change in v asked   ->  find the AREA
  TRAP      Area BELOW the time axis is NEGATIVE displacement.
            For DISTANCE, add the areas ignoring the signs.
```

```
  PATTERN 16 — AREA-UNDER-GRAPH NUMERICAL (trapezium)             4 marks
  ------------------------------------------------------------------------
  TRIGGER   "A car accelerates for 10 s, runs steadily for 20 s, then
            decelerates for 5 s. Find the total distance."
  METHOD    1. Draw the v-t graph: triangle + rectangle + triangle.
            2. Triangle = (1/2) base x height.
               Rectangle = length x breadth.
            3. Add the three areas.
            4. Average speed = total distance / total time, if asked.
  TRAP      Using the trapezium formula with the wrong "parallel sides".
            The parallel sides are the two horizontal edges, and the
            height is the vertical velocity.
```

```
  PATTERN 17 — IMPOSSIBLE GRAPH                                  objective
  ------------------------------------------------------------------------
  TRIGGER   "Which of these graphs is not possible?"
  METHOD    Anything with a VERTICAL segment is impossible
            (infinite velocity or infinite acceleration).
            Anything giving TWO values at the SAME instant of time
            is impossible.
            A distance-time graph can never come DOWN.
  TRAP      A DISPLACEMENT-time graph CAN come down. A DISTANCE-time
            graph cannot. Read which one is drawn.
```

```
  PATTERN 18 — FREE FALL NUMERICAL                             2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "A stone is dropped from a tower ... find the height /
            the time / the striking velocity."
  METHOD    u = 0 , a = g. Then
                 h = (1/2) g t^2
                 v = g t
                 v = sqrt( 2 g h )
                 t = sqrt( 2 h / g )
  TRAP      Reading "dropped" as "thrown". "Dropped" or "released"
            always means u = 0.
```

```
  PATTERN 19 — BODY THROWN VERTICALLY UPWARD                   4 or 8 marks
  ------------------------------------------------------------------------
  TRIGGER   "A ball is thrown vertically up with velocity u. Find the
            maximum height, the time of ascent and the time of flight." /
            "Show that time of ascent = time of descent."
  METHOD    1. Take UP as positive, so a = -g.
            2. At the top,  v = 0.
            3. H = u^2 / 2g ,  t(up) = u/g ,  T = 2u/g.
            4. For the proof, compute t(down) from H = (1/2)g t^2 and
               show it also equals u/g.
  TRAP      Using a = +g while taking up as positive. Everything then
            comes out with the wrong sign.
```

```
  PATTERN 20 — THROWN UP FROM A TOWER (lands below the start)     4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Thrown up with u from the top of a tower of height H.
            When does it hit the ground?"
  METHOD    1. Up positive: u = +u , a = -g , and at landing s = -H.
            2. Put these into  s = ut + (1/2)at^2 .
            3. Solve the resulting QUADRATIC in t.
            4. Reject the negative root.
            5. Striking speed:  v = sqrt( u^2 + 2 g H ).
  TRAP      Writing s = +H instead of -H. This single sign changes
            the whole answer.
```

```
  PATTERN 21 — TWO BODIES MEETING UNDER GRAVITY                   4 marks
  ------------------------------------------------------------------------
  TRIGGER   "A stone is dropped from a tower and at the same instant
            another is thrown up from the ground. When do they meet?"
  METHOD    1. Let them meet after time t.
            2. Distance fallen by one + distance risen by the other
               = the total separation.
            3. The (1/2)g t^2 terms CANCEL, leaving a simple equation.
            4. Fast version: relative acceleration is zero, so
               time = separation / relative velocity.
  TRAP      Trying to solve two quadratics separately. Add them first
            and watch the t^2 terms disappear.
```

```
  PATTERN 22 — RELATIVE VELOCITY IN ONE DIMENSION              2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the velocity of A with respect to B." /
            "Rain falls at ... a lift descends at ..."
  METHOD    1. Draw the arrows.
            2. Fix a positive direction and give both velocities signs.
            3. v(AB) = v(A) - v(B).
            4. State the direction of the answer.
  TRAP      Same direction -> SUBTRACT ; opposite directions -> ADD.
            Students reverse these under pressure.
```

```
  PATTERN 23 — TRAINS CROSSING OR OVERTAKING                      4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Two trains of lengths ... moving at ... How long to cross?"
  METHOD    1. Convert both speeds to m/s.
            2. Relative speed: same direction -> subtract,
                               opposite -> add.
            3. Distance to cover = SUM OF THE TWO LENGTHS.
            4. time = distance / relative speed.
  TRAP      Using only ONE train's length. Both lengths must be added
            in every crossing and overtaking problem.
```

```
  PATTERN 24 — BOAT AND RIVER ALONG THE STREAM                 2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "A boat moves at 8 km/h in still water. The river flows at
            3 km/h. Find the downstream and upstream speeds."
  METHOD    Downstream = v(boat) + v(river)
            Upstream   = v(boat) - v(river)
            For a round trip, use total distance over total time,
            NOT the average of the two speeds.
  TRAP      Averaging 11 and 5 to get 8 km/h for a round trip.
            The correct round-trip average speed is
            2(11)(5)/(11+5) = 6.875 km/h.
```

```
  PATTERN 25 — STOPPING DISTANCE AND REACTION TIME                4 marks
  ------------------------------------------------------------------------
  TRIGGER   "A car moving at ... is braked with retardation ... The
            driver's reaction time is ... Find the stopping distance."
  METHOD    1. Reaction distance = v x t(reaction).
            2. Braking distance = v^2 / (2a) , from v^2 - u^2 = 2as.
            3. Total stopping distance = the two added together.
  TRAP      Omitting the reaction distance. If the question gives you a
            reaction time, it wants BOTH parts of the answer.
```

```
  PATTERN 26 — PROPORTIONALITY / RATIO QUESTION                  objective
  ------------------------------------------------------------------------
  TRIGGER   "If the speed is doubled, the stopping distance becomes ..."
            "Two balls thrown up with u and 2u. Ratio of heights?"
  METHOD    Do NOT compute numbers. Use the proportionality:
                 H  prop.  u^2          T  prop.  u
                 d(braking) prop. v^2   t(fall) prop. sqrt(h)
                 s(from rest) prop. t^2
  TRAP      Assuming everything is directly proportional. Height and
            braking distance go with the SQUARE of the speed.
```

```
  PATTERN 27 — FRAME OF REFERENCE / POINT OBJECT THEORY           2 marks
  ------------------------------------------------------------------------
  TRIGGER   "What is a frame of reference?" /
            "When can a body be treated as a point object?"
  METHOD    Frame of reference = coordinate system + clock, attached
            to some body. Needed because rest and motion are relative.
            Point object: size negligible compared with the distance
            travelled. Give the Earth-around-the-Sun example.
  TRAP      Pure recall marks. Never leave this blank.
```

---

# SELF-TEST — can you name the pattern in 5 seconds?

```
  +----------------------------------------------------------+---------+
  |  QUESTION STEM                                           | PATTERN |
  +----------------------------------------------------------+---------+
  |  "Derive v = u + at using a velocity-time graph"          |    9    |
  |  "Find the distance travelled in the 6th second"          |   12    |
  |  "A ball thrown up returns after 6 s. Max height?"        |   19    |
  |  "Half the distance at 40 km/h and half at 60 km/h"       |    4    |
  |  "x = 2t^3 - 3t^2 + 4t . Find a at t = 2 s"               |    5    |
  |  "Two trains 120 m and 80 m in opposite directions"       |   23    |
  |  "Can displacement be zero when distance is not?"         |    1    |
  |  "Thrown up with 20 m/s from a 25 m tower"                |   20    |
  |  "Which position-time graph is impossible?"               |   17    |
  |  "Ratio of distances in the 1st, 2nd and 3rd seconds"     |   13    |
  |  "Reaction time is 0.5 s. Find the stopping distance"     |   25    |
  |  "Area under the v-t graph for the first 10 s"            |   15    |
  |  "Speed doubled, what happens to braking distance?"       |   26    |
  |  "A stone dropped and one thrown up meet where?"          |   21    |
  |  "Draw x-t, v-t and a-t graphs for uniform velocity"      |   14    |
  |  "When can a body be treated as a point object?"          |   27    |
  +----------------------------------------------------------+---------+
```

---

# GUARANTEED-MARKS PLAN FOR THIS CHAPTER

```
  TIER 1  -  DO THESE FIRST. About 6 marks, and they need no cleverness.

     1.  Distance vs displacement, with the returning-body example.
     2.  The three equations of motion, memorised perfectly.
     3.  Free fall:  h = (1/2)g t^2  ,  v = sqrt(2gh).
     4.  Thrown up:  H = u^2/2g , t(up) = u/g , T = 2u/g.
     5.  Slope of x-t = v , slope of v-t = a , AREA of v-t = s.


  TIER 2  -  ADD THESE FOR A SOLID 10 MARKS.

     6.  The graphical derivation of all three equations (draw the graph).
     7.  Distance in the nth second, with the derivation.
     8.  The 1 : 3 : 5 : 7 ratio for a body starting from rest.
     9.  Relative velocity: trains crossing and overtaking.
    10.  Stopping distance = reaction distance + braking distance.


  TIER 3  -  ONLY IF YOU HAVE TIME LEFT.

    11.  The calculus derivation of the three equations.
    12.  Thrown up from a tower (the quadratic).
    13.  Two bodies meeting under gravity.
```

Total study time needed: about **six hours**, spread over two days.

If you can name the pattern, you already know the first three steps of the answer.
**That is the entire point of this file.**
