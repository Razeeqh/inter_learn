# Systems of Particles and Rotational Motion — Every Question Pattern

A "pattern" is a question SHAPE. The numbers change every year. The shape does not.

For each one, learn:
- **TRIGGER** — how to recognise it in one glance
- **METHOD** — the fixed steps
- **TRAP** — where marks get lost

---

```
  PATTERN 1 — DEFINE THE CENTRE OF MASS                           2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Define centre of mass." / "What is the centre of mass
            of a system of particles?"
  METHOD    1. One sentence: the point at which the WHOLE MASS of the
               system may be taken to be concentrated, so that the
               motion of that point describes the motion of the system.
            2. Write the formula  R_cm = sum( mi ri ) / M .
  TRAP      Writing only the formula and no definition, or vice versa.
            Both are needed for the full 2 marks.
```

```
  PATTERN 2 — DOES THE CM LIE INSIDE THE BODY?                    2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Does the centre of mass necessarily lie within the body?"
            "Give an example of a body whose CM lies outside it."
  METHOD    Answer NO, then give two examples: a RING and a HOLLOW
            SPHERE (also a horseshoe, a bangle).
            Say the words "the CM lies in empty space".
  TRAP      Saying "yes". This is a trick question and it is asked often.
```

```
  PATTERN 3 — FIND THE CM OF POINT MASSES (numerical)            2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Masses of ... kg are placed at ... Find the centre of mass."
  METHOD    1. Draw axes and write the coordinates of every mass.
            2. Total mass  M = sum( mi ) .
            3. X_cm = sum( mi xi ) / M .
            4. Y_cm = sum( mi yi ) / M  (do each coordinate separately).
            5. Sanity check: the CM must lean towards the heavier mass.
  TRAP      Dividing by the NUMBER of particles instead of the TOTAL MASS.
            Also: forgetting the negative sign on masses to the left of
            the origin.
```

```
  PATTERN 4 — CM OF A STANDARD UNIFORM BODY                       2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Where is the centre of mass of a rod / ring / disc /
            sphere / triangular lamina?"
  METHOD    Quote the symmetry result:
              rod      -> the midpoint
              ring     -> the centre (empty space)
              disc     -> the centre
              sphere   -> the centre
              triangle -> the CENTROID, ((x1+x2+x3)/3, (y1+y2+y3)/3)
  TRAP      For a triangle, writing "the middle" instead of naming the
            CENTROID and giving the averaging formula.
```

```
  PATTERN 5 — MOTION OF THE CM / ISOLATED SYSTEM                 2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that the CM of an isolated system moves with constant
            velocity." / "A shell explodes in mid-air. What happens to
            the CM?"
  METHOD    1. M R_cm = sum( mi ri ) ; differentiate twice.
            2. M A_cm = sum of ALL forces.
            3. Internal forces cancel in action-reaction pairs.
            4. Therefore  M A_cm = F_EXTERNAL .
            5. F_ext = 0  =>  A_cm = 0  =>  V_cm constant.
  TRAP      Forgetting the word EXTERNAL. The whole answer turns on the
            fact that only external forces survive the cancellation.
```

```
  PATTERN 6 — CONSERVATION OF LINEAR MOMENTUM (numerical)         2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "A body at rest explodes into two pieces ..." / "recoil of
            a gun" / "a man walks along a boat".
  METHOD    1. Write  P_before = P_after .
            2. Fix a positive direction and be consistent.
            3. Solve. A negative answer means "the opposite direction".
            4. Check that the momenta cancel in your final answer.
  TRAP      Treating momentum as a scalar and adding magnitudes.
            Momentum is a VECTOR -- signs matter.
```

```
  PATTERN 7 — VECTOR PRODUCT: PROPERTIES                          2 marks
  ------------------------------------------------------------------------
  TRIGGER   "State the properties of the vector product." /
            "Write i x j , j x k , k x i ." / "What is A x A?"
  METHOD    A x B = A B sin(theta) n^ (result is a VECTOR).
              A x B = -( B x A )
              A x A = 0
              maximum A B when theta = 90 degrees
              i x j = k , j x k = i , k x i = j , i x i = 0
  TRAP      Writing i x j = -k. Use the memory circle i -> j -> k -> i:
            forward is positive, backward is negative.
```

```
  PATTERN 8 — COMPUTE A CROSS PRODUCT                             2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find A x B" / "Find the torque when F acts at r" /
            "Find the angular momentum of the particle."
  METHOD    1. Write the 3 x 3 determinant with i, j, k on the top row.
            2. Expand:  i(a2b3 - a3b2) - j(a1b3 - a3b1) + k(a1b2 - a2b1)
            3. VERIFY: dot the answer with A and with B. Both must be 0.
  TRAP      The MINUS sign in front of the j term. This single sign is
            the most common error in the whole chapter.
```

```
  PATTERN 9 — ANGULAR KINEMATICS NUMERICAL                        2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "A wheel starts from rest and reaches N rpm in t seconds ..."
            "How many revolutions before it stops?"
  METHOD    1. Convert rpm to rad/s:  omega = 2 pi N / 60 .
            2. Pick the right equation:
                 w = w0 + alpha t
                 theta = w0 t + (1/2) alpha t^2
                 w^2 = w0^2 + 2 alpha theta
            3. Revolutions = theta / (2 pi).
  TRAP      Leaving the answer in rpm when the question wants rad/s, or
            leaving theta in radians when it asks for revolutions.
  SHORTCUT  For "how many revolutions before stopping" under uniform
            deceleration: use AVERAGE rpm x time in MINUTES.
```

```
  PATTERN 10 — RELATION v = r omega                               2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Write the relation between linear and angular velocity."
            "Compare the speeds of two points on a rotating disc."
  METHOD    1. s = r theta ; differentiate ->  v = r omega .
            2. State that omega is the SAME for all particles of a rigid
               body while v is proportional to r.
            3. For a ratio question, v1 : v2 = r1 : r2 .
  TRAP      Saying "all points of a rotating body move with the same
            speed". They have the same ANGULAR speed, not the same speed.
```

```
  PATTERN 11 — DEFINE TORQUE / UNITS / WHEN IS IT ZERO            2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Define torque." / "SI unit and dimensions of torque."
            "When is the torque zero?"
  METHOD    tau = r x F , | tau | = r F sin(theta) = F d .
            Unit N m , dimensions [M L^2 T^-2] , a VECTOR.
            Zero when theta = 0 or 180 degrees, or r = 0.
            Maximum when theta = 90 degrees.
  TRAP      Writing the unit of torque as the joule. Torque is measured
            in N m, never in joules, even though the dimensions match.
```

```
  PATTERN 12 — DERIVE tau = I alpha                               4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Show that torque = moment of inertia x angular acceleration."
  METHOD    1. Tangential force on the i-th particle: Fi = mi ai
               = mi ri alpha .
            2. Torque of that force: taui = Fi ri = mi ri^2 alpha .
            3. Sum over all particles; alpha is common:
                 tau = [ sum( mi ri^2 ) ] alpha = I alpha .
            4. Note it is the analogue of F = m a.
  TRAP      Forgetting that alpha (not omega) is the same for all
            particles, and using v instead of a in step 1.
```

```
  PATTERN 13 — DERIVE tau = dL/dt                                 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Derive the relation between torque and angular momentum."
            "Show that the rate of change of angular momentum equals
             the external torque."
  METHOD    1. L = r x p .
            2. dL/dt = (dr/dt x p) + (r x dp/dt) .
            3. First term = v x m v = m ( v x v ) = 0 .
            4. Second term = r x F = tau .
            5. Conclude tau_ext = dL/dt , and hence the conservation law.
  TRAP      Skipping the reason why the first term vanishes. Write the
            words "any vector crossed with itself is zero".
```

```
  PATTERN 14 — CONSERVATION OF ANGULAR MOMENTUM (theory)          2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "State the law of conservation of angular momentum."
            "Why does an ice skater spin faster?" / "Explain the diver /
             the rotating stool."
  METHOD    1. tau_ext = 0  =>  L = I omega = constant  =>  I1 w1 = I2 w2.
            2. Explain: pulling mass towards the axis REDUCES I, so
               omega must RISE to keep I omega fixed.
            3. Give the example asked for: skater / diver / stool /
               planet near the Sun.
  TRAP      Saying "no force acts". The condition is NO EXTERNAL TORQUE.
            Also: never claim kinetic energy is conserved as well.
```

```
  PATTERN 15 — CONSERVATION OF ANGULAR MOMENTUM (numerical)       2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "I is reduced from X to Y; find the new angular speed."
            "If the Earth shrank to half its radius ..."
  METHOD    1. I1 w1 = I2 w2 , solve for the unknown.
            2. For a shrinking body use I proportional to R^2, and
               omega proportional to 1/T, so T proportional to R^2.
            3. If asked about energy, use KE = L^2 / (2 I) --
               KE RISES when I falls.
  TRAP      Applying the formula when an external torque IS acting
            (for example, friction or an applied motor torque).
```

```
  PATTERN 16 — DEFINE MOMENT OF INERTIA / RADIUS OF GYRATION      2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Define moment of inertia." / "Define radius of gyration."
            "On what factors does the moment of inertia depend?"
  METHOD    I = sum( mi ri^2 ) , unit kg m^2 , dimensions [M L^2 T^0].
            K = sqrt( I / M ) , unit metre.
            Depends on (1) mass, (2) distribution of mass about the axis,
            (3) position and direction of the AXIS.
  TRAP      Forgetting factor (3). Also: I is NOT a fixed property of a
            body -- always name the axis.
```

```
  PATTERN 17 — MOMENT OF INERTIA OF POINT MASSES                  2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Four masses at the corners of a square ..." / "Three masses
            at the vertices of a triangle ..."
  METHOD    1. DRAW the figure and mark the axis.
            2. Find the perpendicular distance r of EACH mass from the axis
               (half the diagonal for a square; a/sqrt(3) for the centroid
               of an equilateral triangle).
            3. I = sum( m r^2 ).
            4. If asked, K = sqrt( I / M ) with M = total mass.
  TRAP      Using the distance between masses instead of the distance
            from the AXIS. Masses lying ON the axis contribute ZERO.
```

```
  PATTERN 18 — QUOTE THE MOMENT OF INERTIA OF A STANDARD BODY     2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Write the moment of inertia of a ring / disc / rod /
            solid sphere / hollow sphere / cylinder about ..."
  METHOD    Straight recall from the table:
              ring, central perpendicular axis   M R^2
              ring, diameter                  (1/2) M R^2
              disc, central perpendicular     (1/2) M R^2
              disc, diameter                  (1/4) M R^2
              rod, centre, perpendicular      (1/12) M L^2
              rod, one end, perpendicular     (1/3) M L^2
              solid sphere, diameter          (2/5) M R^2
              hollow sphere, diameter         (2/3) M R^2
              solid cylinder, own axis        (1/2) M R^2
              hollow cylinder, own axis         M R^2
  TRAP      Confusing the SOLID sphere (2/5) with the HOLLOW sphere (2/3),
            and the ring's central axis (M R^2) with its diameter
            ((1/2) M R^2).
```

```
  PATTERN 19 — STATE AND APPLY THE PARALLEL AXES THEOREM          4 marks
  ------------------------------------------------------------------------
  TRIGGER   "State the parallel axes theorem." / "Find I about a tangent
            / about one end / about an axis d away from the centre."
  METHOD    1. STATEMENT, word for word.
            2. DIAGRAM with the two parallel axes and the distance d.
            3. I = I_cm + M d^2 .
            4. Apply: look up I_cm, identify d, substitute.
                 rod about an end:      M L^2/12 + M(L/2)^2 = M L^2/3
                 sphere about tangent:  (2/5)MR^2 + MR^2 = (7/5)MR^2
                 disc, tangent in plane:(1/4)MR^2 + MR^2 = (5/4)MR^2
  TRAP      Using an I_cm that is NOT about an axis parallel to the new
            one. For a disc's tangent IN the plane you must start from
            the DIAMETER value, not from the central perpendicular value.
```

```
  PATTERN 20 — STATE AND APPLY THE PERPENDICULAR AXES THEOREM     4 marks
  ------------------------------------------------------------------------
  TRIGGER   "State the perpendicular axes theorem." / "Find I of a disc
            or ring about a DIAMETER."
  METHOD    1. STATEMENT, word for word, including the words PLANE LAMINA.
            2. DIAGRAM with X and Y in the plane and Z perpendicular.
            3. I_z = I_x + I_y .
            4. Use symmetry: for a disc or ring, I_x = I_y = I_d , so
               I_d = I_z / 2 .
                 ring:  M R^2 = 2 I_d   ->  I_d = M R^2 / 2
                 disc:  (1/2)M R^2 = 2 I_d -> I_d = M R^2 / 4
  TRAP      Applying it to a SPHERE or a SOLID CYLINDER. It works ONLY
            for flat laminae. State that condition in your answer -- it
            carries a mark.
```

```
  PATTERN 21 — BOTH THEOREMS IN ONE PROBLEM                       4 or 8 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find I of a disc about a tangent perpendicular to its plane."
            "Find I of a ring about a tangent in its plane."
  METHOD    1. Start from a TABLE value.
            2. If the required axis is IN the plane, first use the
               PERPENDICULAR axes theorem to get the diameter value.
            3. Then use the PARALLEL axes theorem to shift it by d = R.
            Results:
                 ring, tangent in plane        (3/2) M R^2
                 ring, tangent perpendicular    2    M R^2
                 disc, tangent in plane        (5/4) M R^2
                 disc, tangent perpendicular   (3/2) M R^2
  TRAP      Doing the two shifts in the wrong order, or applying the
            parallel axes theorem from an axis that does not pass
            through the centre of mass.
```

```
  PATTERN 22 — ROTATIONAL ANALOGUE TABLE                          4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Write the rotational analogues of the linear quantities."
            "Compare linear and rotational motion."
  METHOD    Draw a two-column table:
              s <-> theta ,  v <-> omega ,  a <-> alpha ,
              m <-> I ,  F <-> tau ,  p <-> L ,
              F = ma <-> tau = I alpha ,
              KE = (1/2)mv^2 <-> KE = (1/2) I w^2 ,
              W = F s <-> W = tau theta ,  P = F v <-> P = tau omega ,
              plus the three equations of motion.
  TRAP      Stopping after six rows. The examiner wants the DYNAMICS
            rows (tau = I alpha, L = I omega) and the ENERGY rows too.
```

```
  PATTERN 23 — ROTATIONAL KE / WORK / POWER (numerical)           2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "A flywheel of moment of inertia ... rotating at ... find
            its kinetic energy / angular momentum / the torque needed
            to stop it / the power developed."
  METHOD    KE = (1/2) I omega^2       L = I omega
            W  = tau theta             P = tau omega
            Retarding torque:  tau = (kinetic energy) / (angle turned).
  TRAP      Using rpm directly in these formulas. Convert to rad/s first
            with omega = 2 pi N / 60.
```

```
  PATTERN 24 — DERIVE ROTATIONAL KINETIC ENERGY                   4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Derive an expression for the kinetic energy of a rotating
            body." / "What is the physical significance of the moment
            of inertia?"
  METHOD    1. vi = ri omega for the i-th particle.
            2. KE_i = (1/2) mi ri^2 omega^2 .
            3. Sum, taking omega outside: KE = (1/2)[sum(mi ri^2)] w^2 .
            4. KE = (1/2) I omega^2 .
            5. Compare with (1/2) m v^2 : I plays the role of mass, so
               I is the ROTATIONAL INERTIA of the body.
  TRAP      Forgetting step 5. The "physical significance" part is worth
            a mark on its own.
```

```
  PATTERN 25 — EQUILIBRIUM / COUPLE / PRINCIPLE OF MOMENTS        2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "State the conditions of equilibrium." / "Define a couple."
            "A see-saw / metre scale / lever is balanced ..."
  METHOD    1. sum F = 0  AND  sum tau = 0 .
            2. Couple: two equal, opposite, parallel forces with
               different lines of action; moment = F x d; the same about
               every point; example = turning a steering wheel.
            3. Numerical: F1 d1 = F2 d2 about the pivot.
            4. Lever: MA = load / effort = effort arm / load arm.
  TRAP      In metre-scale problems, the moments equation gives the
            distance FROM THE PIVOT. Convert it back into a scale
            reading before writing the final answer.
```

```
  PATTERN 26 — CENTRE OF GRAVITY vs CENTRE OF MASS                2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Distinguish between centre of mass and centre of gravity."
            "How would you find the CG of an irregular lamina?"
  METHOD    1. CM: whole MASS acts there; depends only on mass
               distribution; exists without gravity.
               CG: whole WEIGHT acts there; depends on g as well.
            2. They COINCIDE when g is uniform over the body -- true for
               all ordinary objects.
            3. Experiment: suspend from two different points, draw the
               plumb lines, and the INTERSECTION is the CG.
  TRAP      Saying they are "always the same". They differ for very
            large bodies where g varies, and the CG then lies slightly
            BELOW the CM.
```

```
  PATTERN 27 — ROLLING: CONDITION AND VELOCITIES                  2 marks
  ------------------------------------------------------------------------
  TRIGGER   "Write the condition for rolling without slipping."
            "What is the velocity of the point of contact / of the
             topmost point of a rolling wheel?"
  METHOD    v_cm = R omega ( and a_cm = R alpha ).
            Contact point: v = 0 (instantaneously at rest).
            Centre: v.   Topmost point: 2v.
  TRAP      Saying the contact point moves with speed v. It is ZERO --
            that is exactly what "without slipping" means.
```

```
  PATTERN 28 — TOTAL KINETIC ENERGY OF A ROLLING BODY             4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the total kinetic energy of a rolling disc / ring /
            sphere." / "What fraction of the energy is rotational?"
  METHOD    1. KE = (1/2) M v^2 + (1/2) I omega^2 .
            2. Put I = M K^2 and omega = v/R :
                 KE = (1/2) M v^2 ( 1 + K^2/R^2 ) .
            3. With n = K^2/R^2 :
                 rotational fraction    = n / (1 + n)
                 translational fraction = 1 / (1 + n)
               solid sphere 2/7 and 5/7 ; disc 1/3 and 2/3 ;
               hollow sphere 2/5 and 3/5 ; ring 1/2 and 1/2.
  TRAP      Writing only (1/2) M v^2. A rolling body ALWAYS has both a
            translational and a rotational term.
```

```
  PATTERN 29 — ROLLING DOWN AN INCLINE (derivation)               4 or 8 marks
  ------------------------------------------------------------------------
  TRIGGER   "Derive the acceleration / velocity of a body rolling down
            an inclined plane."
  METHOD    ENERGY route (for v):
              M g h = (1/2) M v^2 ( 1 + K^2/R^2 )
              ->  v = sqrt( 2gh / ( 1 + K^2/R^2 ) )
            DYNAMICS route (for a):
              M g sin(theta) - f = M a
              f R = I alpha = M K^2 (a/R)   ->  f = M K^2 a / R^2
              ->  a = g sin(theta) / ( 1 + K^2/R^2 )
            Then t = (1/sin theta) sqrt( 2h(1 + K^2/R^2) / g ).
  TRAP      Forgetting to say that friction does NO WORK (the contact
            point does not slide), which is why energy is conserved.
            Also: a and v do NOT depend on M or R -- say so.
```

```
  PATTERN 30 — WHICH BODY REACHES THE BOTTOM FIRST?               2 or 4 marks
  ------------------------------------------------------------------------
  TRIGGER   "A ring, a disc and a sphere roll down the same incline.
            Which arrives first?" / "Why does a solid sphere beat a ring?"
  METHOD    1. Quote a = g sin(theta) / ( 1 + K^2/R^2 ).
            2. Compare K^2/R^2 :
                 solid sphere 2/5 < disc 1/2 < hollow sphere 2/3 < ring 1
            3. Smallest K^2/R^2 -> largest a -> arrives FIRST.
            4. One-line reason: the sphere puts the least energy into
               rotation and the most into translation.
            5. Add that the result is independent of M and R.
  TRAP      Saying "the heavier one wins" or "the smaller one wins".
            Mass and radius cancel out completely. Only SHAPE matters.
```

```
  PATTERN 31 — MINIMUM FRICTION FOR PURE ROLLING                  4 marks
  ------------------------------------------------------------------------
  TRIGGER   "Find the minimum coefficient of friction for the body to
            roll without slipping down the incline."
  METHOD    1. f = M K^2 a / R^2 with a = g sin(theta)/(1 + K^2/R^2).
            2. Require f <= mu N = mu M g cos(theta).
            3. mu_min = ( K^2/R^2 ) tan(theta) / ( 1 + K^2/R^2 ).
               solid sphere (2/7) tan th ; disc (1/3) tan th ;
               ring (1/2) tan th.
  TRAP      Using N = M g instead of N = M g cos(theta) on an incline.
```

---

# SELF-TEST — can you name the pattern in 5 seconds?

```
  +--------------------------------------------------------+---------+
  |  QUESTION STEM                                         | PATTERN |
  +--------------------------------------------------------+---------+
  |  "Masses 2 kg and 5 kg are 7 m apart. Find the CM."    |    3    |
  |  "Does the CM always lie inside the body?"             |    2    |
  |  "Where is the CM of a triangular lamina?"             |    4    |
  |  "A shell explodes in flight. What happens to the CM?" |    5    |
  |  "A gun of mass M fires a bullet of mass m ..."        |    6    |
  |  "Write i x j and j x k."                              |    7    |
  |  "F = 3i - 2j acts at r = 2i + j. Find the torque."    |    8    |
  |  "A wheel reaches 600 rpm in 5 s. Find alpha."         |    9    |
  |  "Compare the speeds of two points on a fan blade."    |   10    |
  |  "When is the torque acting on a body zero?"           |   11    |
  |  "Show that torque = I alpha."                         |   12    |
  |  "Derive tau = dL/dt."                                 |   13    |
  |  "Why does an ice skater spin faster?"                 |   14    |
  |  "If the Earth shrank to half its radius ..."          |   15    |
  |  "Define radius of gyration."                          |   16    |
  |  "Four masses at the corners of a square. Find I."     |   17    |
  |  "Write the moment of inertia of a hollow sphere."     |   18    |
  |  "Find I of a rod about a perpendicular axis at one    |         |
  |   end."                                                |   19    |
  |  "Find I of a disc about its diameter."                |   20    |
  |  "Find I of a ring about a tangent in its plane."      |   21    |
  |  "Write the rotational analogues of s, v, a, m, F, p." |   22    |
  |  "A flywheel of I = 10 kg m^2 spins at 20 rad/s ..."   |   23    |
  |  "Derive the kinetic energy of a rotating body."       |   24    |
  |  "A 50 kg boy and a 30 kg girl on a see-saw ..."       |   25    |
  |  "Distinguish between CM and CG."                      |   26    |
  |  "What is the velocity of the contact point of a       |         |
  |   rolling wheel?"                                      |   27    |
  |  "What fraction of a rolling disc's KE is rotational?" |   28    |
  |  "Derive the acceleration of a body rolling down an    |         |
  |   incline."                                            |   29    |
  |  "A ring and a sphere race down a slope. Who wins?"    |   30    |
  |  "Find the minimum mu for pure rolling."               |   31    |
  +--------------------------------------------------------+---------+
```

---

# GUARANTEED-MARKS PLAN FOR THIS CHAPTER

```
  TIER 1 -- PURE MEMORY, NO THINKING REQUIRED       (learn these first)
  --------------------------------------------------------------------
     Patterns 1, 2, 4, 7, 11, 16, 18, 22, 26, 27

     - the definition of the centre of mass
     - "the CM can lie outside the body" (ring, hollow sphere)
     - the CM of a rod / ring / disc / sphere / triangle
     - i x j = k , j x k = i , k x i = j , A x A = 0
     - the definition, unit and dimensions of torque
     - the definition of moment of inertia and radius of gyration
     - the moment of inertia TABLE (10 rows)
     - the rotational analogue table
     - CM vs CG
     - v_cm = R omega , contact point at rest, top point at 2v

     These alone will cover almost every Section A question this
     chapter has ever produced.


  TIER 2 -- ONE FIXED RECIPE EACH                   (learn these second)
  --------------------------------------------------------------------
     Patterns 3, 9, 17, 19, 20, 23, 30

     - CM of point masses (divide by TOTAL MASS)
     - rpm to rad/s, then the three rotational equations
     - I of point masses at the corners of a square or triangle
     - PARALLEL axes theorem + one application
     - PERPENDICULAR axes theorem + one application
     - flywheel numericals (KE, L, tau, P)
     - "which body reaches the bottom first" -- compare K^2/R^2

     Patterns 19 and 20 together are the single most likely 4-mark
     question in the chapter. Learn both statements word for word
     and be able to draw both diagrams.


  TIER 3 -- FULL DERIVATIONS                        (learn these last)
  --------------------------------------------------------------------
     Patterns 12, 13, 24, 29 and the Section C answers

     - tau = I alpha
     - tau = dL/dt
     - KE = (1/2) I omega^2
     - rolling down an incline: a, v and t


  IF YOU ARE SHORT OF TIME
  --------------------------------------------------------------------
     Do TIER 1 completely and TIER 2 partially. That is a realistic
     6 marks out of the 6 to 10 this chapter is worth, for perhaps
     three hours of work -- one of the best returns in the whole
     Physics paper.

     THE FOUR NUMBERS THAT DO THE MOST WORK:

          solid sphere 2/5  <  disc 1/2  <  hollow sphere 2/3  <  ring 1
```
