# WRITING SPEC — read this before writing any chapter

You are writing study material for a **WEAK Andhra Pradesh Intermediate (BIEAP) MPC student**
who is very low at studies and starting from zero. Assume no prior knowledge. Be encouraging,
concrete and blunt about what earns marks.

---

## 1. FORMATTING RULES — absolute, no exceptions

The user explicitly rejected LaTeX and diagram code because it is unreadable as plain text.

```
  FORBIDDEN:   $ ... $      $$ ... $$      \frac      \begin{}      \int
               ```mermaid          <details>          <summary>

  REQUIRED:    plain text that reads correctly in any editor, with no rendering
```

| Thing | How to write it |
|---|---|
| Formulas | inside ``` fenced code blocks, drawn in boxes made of `+ - |` characters |
| Fractions | inside code blocks with a horizontal `---` line, or `a / b` inline |
| Powers | `x^2`, `T^-2`, `10^-19` |
| Roots | `sqrt(x)` |
| Integrals | `INT f(x) dx` |
| Derivatives | `dy/dx`, `f'(x)`, `d2y/dx2` |
| Greek letters | spelled out: theta, alpha, beta, pi, mu, rho, lambda, sigma, omega, delta |
| Matrices | ASCII grids with `+---+` borders |
| Mind maps | ASCII trees using `|` and `+--` inside fenced code blocks |
| Diagrams | ASCII art inside fenced code blocks — graphs, circuits, ray diagrams, free body diagrams, orbital boxes, reaction maps |
| Chemical formulas | plain: `H2SO4`, `[Co(NH3)6]Cl3`, `CH3-CH2-OH` |
| Reactions | plain with conditions on the arrow: `2 NaCl + 2 H2O --(electrolysis)--> 2 NaOH + Cl2 + H2` |
| Answers | written **openly** under the question after `**ANSWER:**` — never hidden |
| Tables | markdown tables are allowed and encouraged (they read fine raw) |

Reference chapters to copy the style and depth from:

```
  Maths      ->  Maths/Class-11-Maths-1A/03-Matrices/
  Physics    ->  Physics/Class-11-Physics/02-Units-and-Measurements/
  Chemistry  ->  Chemistry/Class-11-Chemistry/01-Atomic-Structure/
```

Read at least the `00-mindmap.md`, `02-formulae.md`, `03-pyq-ap-board.md` and
`05-question-patterns.md` of the matching reference before you start.

---

## 2. THE SIX FILES

Write them **one at a time**, saving each before starting the next, so a network failure
does not lose everything.

### 00-mindmap.md
- Title line, course/chapter line, and one line on why the chapter matters.
- `THE WHOLE CHAPTER ON ONE PAGE` — a large ASCII tree of every topic.
- `THE 60-SECOND VERSION` — the core idea in a few lines.
- `WHERE THE MARKS ARE` — table of topic -> section -> marks, and a realistic total.
- `STUDY THIS ORDER` — ASCII dependency flow with STEP 1, STEP 2, ... and arrows.
- A key box holding the one or two formulas that unlock most questions.
- `IF YOU ONLY HAVE 2 DAYS` (or 3) — a concrete plan.

### 01-concepts.md
- Numbered `TOPIC 1`, `TOPIC 2`, ... covering the whole chapter.
- Plain-English explanation for a beginner, with everyday analogies.
- ASCII diagrams wherever they help.
- At least one fully **WORKED EXAMPLE** per topic, every step shown.
- `> TRAP:` blockquotes for the places marks get lost.
- Ends with `CHECKLIST BEFORE YOU HAND IN THE PAPER` of `[ ]` items.
- This is the longest file. Be thorough.

### 02-formulae.md
- Every formula of every topic, grouped by numbered section, in ASCII boxes.
- Markdown tables with a **"When to use"** column.
- For fact-heavy inorganic/organic chapters, make it a REACTIONS AND FACTS sheet instead.
- Ends with `THE 10 FORMULAE TO WRITE ON YOUR PALM` (or 12 / 15).

### 03-pyq-ap-board.md
- Header naming BIEAP, the paper and the chapter.
- An honest note: questions are grouped as **"repeatedly asked"** rather than tagged to one
  exact year, because BIEAP recycles them; verify against the official papers at
  **bie.ap.gov.in**. Never invent a specific exam-year citation.
- A code block showing where the chapter sits in the paper.
- `SECTION A — VERY SHORT ANSWER (2 marks)` — 18-24 questions, each with `**ANSWER:**` and the
  full working written openly.
- `SECTION B — SHORT ANSWER (4 marks)` — 12-16 questions with complete solutions.
- `SECTION C — LONG ANSWER` — 3-6 questions with complete model answers or detailed skeletons
  showing the mark split.
- Ends with `WHICH QUESTIONS REPEAT MOST` — a ranked table (rank / type / section / chance).

### 04-pyq-competitive.md
- Header table of the three entrance exams and how many questions come from this chapter.
- MCQs **grouped by PATTERN**, not by year: `PATTERN 1`, `PATTERN 2`, ... 25-40 questions with
  options, `**ANSWER:**` and the working.
- `> SHORTCUT:` notes for exam speed.
- Ends with `SPEED RULES FOR THE EXAM HALL` — a two-column ASCII table:
  "IF YOU SEE THIS ..." / "DO THIS IMMEDIATELY".

### 05-question-patterns.md
- Every distinct question shape as `PATTERN 1` ... `PATTERN N` (aim 20-30), each inside a
  fenced code block with: pattern name + marks, `TRIGGER`, `METHOD` (numbered steps), `TRAP`.
- Ends with `SELF-TEST — can you name the pattern in 5 seconds?` mapping question stems to
  pattern numbers, and a `GUARANTEED-MARKS PLAN FOR THIS CHAPTER`.

---

## 3. EXAM BLUEPRINTS

```
  AP INTER MATHS  (papers IA, IB, IIA, IIB)  ->  75 marks
     Section A  VSAQ  10 questions x 2 marks   answer ALL      = 20
     Section B  SAQ    7 questions x 4 marks   answer any 5    = 20
     Section C  LAQ    7 questions x 7 marks   answer any 5    = 35
     Pass = 26

  AP INTER PHYSICS and CHEMISTRY             ->  60 marks
     Section A  VSAQ  10 questions x 2 marks   answer ALL      = 20
     Section B  SAQ    8 questions x 4 marks   answer any 6    = 24
     Section C  LAQ    3 questions x 8 marks   answer any 2    = 16
     Pass = 21
```

```
  +---------------+--------+---------+-----------+--------+----------------+
  |  EXAM         |  MATHS | PHYSICS | CHEMISTRY | TOTAL  |  MARKING       |
  +---------------+--------+---------+-----------+--------+----------------+
  |  AP EAPCET    |   80   |   40    |    40     |  160   |  +1, NO minus  |
  |  TG EAPCET    |   80   |   40    |    40     |  160   |  +1, NO minus  |
  |  JEE Main     |   25   |   25    |    25     |  300   |  +4 , -1       |
  +---------------+--------+---------+-----------+--------+----------------+
```

EAPCET has **no negative marking**, so the advice is always "never leave a blank".
JEE Main has −1, so the advice is "skip what you genuinely do not know".

---

## 4. HOUSE RULES

- Do NOT edit `PROGRESS.md`, `README.md`, `_tools/`, or anything outside your target folder.
- Do NOT create any file other than the six named ones.
- Be factually accurate. Verify every numerical answer (differentiate integrals back,
  substitute solutions back, check cross products against a dot product of zero).
- Never fabricate a precise exam-year citation.
- Write substantial files. This is the student's only study material.
