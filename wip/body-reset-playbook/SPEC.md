# SPEC — "The Body Reset Playbook" lesson authoring

You are writing ONE lesson for a book in the SYNTHESIS learning app. Output is a
single JSON file. Follow this spec EXACTLY.

## The book

**Title:** The Body Reset Playbook
**Author:** Synthesis Curriculum
**Category:** health (Health & Wellness)

This is the **applied companion** to "The Healthivora Body Reset". That book
taught the mechanisms — gut barrier, microbiome, liver, blood sugar, insulin,
inflammation, fats, hormones, mitochondria, gut-brain axis, circadian timing.
**This book is the execution**: what to actually cook, what to actually buy, and
what to actually do in the gym.

**The governing difference:** book one answered *why*. This one answers *what,
exactly, today*. Every lesson should leave the learner able to DO something
specific — not merely understand it. Prefer a concrete build ("three eggs, a
handful of spinach, half an avocado, a slice of rye") over a category
("a protein-rich breakfast").

**Tone:** A good coach. Direct, warm, specific, never preachy or hype-y. Assume
the learner is intelligent, busy, and has tried and abandoned plans before.

## The system this book teaches (be consistent with it)

**The Permanent Plate** — half the plate plants of varied colour, a palm of
protein, a fist of intact starch, a thumb of extra-virgin olive oil or nuts, and
something fermented most days. A template, not a meal plan: a template only
needs substitution, a plan needs adherence.

**Two rules:** (1) Eat in order — vegetables and protein before starch. (2)
Front-load the day; a consistent 10-12 hour eating window, weighted early.

**Four phases across 28 days:** Calm (days 1-7, stabilise glucose) → Rebuild
(8-14, ramp fibre gradually and start ferments small) → Restore (15-21,
crucifers, oily fish twice weekly, extra-virgin olive oil, pause alcohol,
caffeine cutoff) → Personalise (22-28, reintroduce one item at a time, three
days apart, log the response).

**Training — three jobs, three tools:**
- **Post-meal walk**, 10-15 min after the largest meal, daily. Contracting
  muscle clears glucose via contraction-mediated GLUT4 translocation, which does
  NOT require insulin. Highest return per unit effort in the whole programme.
- **Strength, 2-3x/week**, full-body, alternating Session A and Session B.
  Skeletal muscle is the body's largest glucose sink. RPE 7-8, two to three reps
  left in reserve.
- **Zone 2 aerobic**, conversational pace, plus optional intervals from week 3.
  Drives mitochondrial biogenesis via PGC-1-alpha.

**Session A:** goblet squat or leg press 3x8-10 · dumbbell bench press or
push-up 3x8-12 · one-arm dumbbell row 3x10 each side · Romanian deadlift 3x8-10
· plank 3x30-45 sec.
**Session B:** split squat or walking lunge 3x8-10 each side · overhead press
3x8-10 · lat pulldown or assisted pull-up 3x8-12 · hip thrust or glute bridge
3x10-12 · farmer carry 3x30-40 m.
**Progression:** add reps to the top of the range on every set, then add load and
drop back to the bottom of the range.

**30 plants a week:** each distinct plant type counts once per week. Herbs and
spices count as a quarter. Legumes, whole grains, nuts and seeds all count.

## CRITICAL content-integrity rules

1. **Only real science.** Mechanisms, studies and findings must be genuinely true
   and mainstream. Never invent a study, journal, statistic or researcher. If
   unsure of a number, describe the finding qualitatively.
2. **No invented quotes.** Quote real, attributable people saying things they
   actually said, or use `"author": "The Body Reset principle"`.
3. **No calorie targets and no food moralising.** No "bad foods", no "clean
   eating", no earning/burning framing. Changes are additive wherever possible.
   Portions are described by hand-size (palm, fist, thumb, handful), never in
   calories.
4. **Nothing that encourages disordered eating.** If a lesson touches tracking,
   include the note that if tracking raises anxiety, drop the tracking and keep
   the plate.
5. **Real safety where it belongs.** Training lessons must include genuine form
   cautions and a "stop and get this looked at" line where relevant. Nutrition
   lessons flag when a symptom needs a clinician. The insulin/sulfonylurea
   hypoglycaemia warning must appear in any lesson about adding walks or
   training volume — diet change plus exercise lowers glucose, and on those
   medications that requires a dose conversation with a doctor.
6. **Recipes must actually work.** If you give quantities and a method, they must
   be plausible and cookable. Do not invent cooking times that would undercook
   poultry or fish.

## Output format

Write ONE file to the exact path you are given, containing **only** valid JSON —
no markdown fences, no commentary. Top-level shape:

```json
{
  "id": "body-reset-playbook-lesson-<N>",
  "title": "<the exact lesson title you were given>",
  "duration": "18",
  "cards": [ ... ],
  "completed": false
}
```

Validate before finishing:
`node -e "JSON.parse(require('fs').readFileSync('<path>','utf8'))"`

## Card requirements

**Minimum 13 cards.** More if the material earns it.

Because this is an applied book, weight it toward doing:
**at least 3 `application` cards, at least 3 `example` cards, at least 3 `quiz`
cards, at least 1 `quote`, at least 1 `visual`.** Card 1 is always `intro`.

A workable progression (adapt as the lesson needs):
intro → concept → visual → example → quiz → application → concept → example →
quiz → application → example → quote → application → quiz

### Card shapes

```json
{ "type": "concept", "title": "...", "content": "...",
  "visual": { "type": "diagram", "svg": "<svg ...>...</svg>", "caption": "..." } }
```

```json
{ "type": "quote", "content": "quote text without surrounding quote marks",
  "author": "Real Person, credential",
  "visual": { "type": "diagram", "svg": "...", "caption": "..." } }
```

```json
{ "type": "quiz", "question": "...?",
  "options": [
    { "text": "plausible distractor", "correct": false },
    { "text": "the right answer", "correct": true },
    { "text": "common misconception", "correct": false },
    { "text": "partly right but incomplete", "correct": false }
  ],
  "explanation": "50-100 words on why the answer is right AND why the most tempting wrong answer is wrong.",
  "visual": { "type": "diagram", "svg": "...", "caption": "..." } }
```

Quiz rules: exactly 4 options, exactly 1 correct, genuinely plausible
distractors, never joke answers, never "all of the above". Vary which position
the correct answer sits in. Quizzes in this book should test **application**
("you have 20 minutes and these four ingredients — what do you build?"), not
just recall.

### Content text formatting
- `**bold**` for key terms, ingredients, and exercise names
- `\n\n` between paragraphs
- bullets as `\n• ` at line start
- numbered steps as `\n\n1. **Label**: text`
- Keep paragraphs to 3-4 sentences

## SVG requirements — EVERY SINGLE CARD

No card may lack a `visual`. Quiz, quote and application cards all get one.

**Canvas (non-negotiable):**
```
<svg viewBox="0 0 1100 1100" class="lesson-visual">
<rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
<text x="550" y="70" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">TITLE</text>
<text x="550" y="115" text-anchor="middle" fill="#888" font-size="24">Subtitle</text>
...content...
</svg>
```

**Palette — use ONLY these:**
```
#6366f1 indigo   rgba(99,102,241,0.12)
#8b5cf6 violet   rgba(139,92,246,0.12)
#10b981 green    rgba(16,185,129,0.12)
#f59e0b amber    rgba(245,158,11,0.12)
#ef4444 red      rgba(239,68,68,0.12)
#3b82f6 blue     rgba(59,130,246,0.12)
#ec4899 pink     rgba(236,72,153,0.12)
#14b8a6 teal     rgba(20,184,166,0.12)
#ffd700 gold     rgba(255,215,0,0.1)
#fff  primary text   #888 secondary text   #1a1a2e background
```

**Text-overflow rules (the most common failure — obey strictly):**
| font-size | max chars per line |
|---|---|
| 36 | 27 |
| 24-26 | 40 |
| 20-22 | 48 |
| 17-18 | 55 |
| 16 | 60 |

- 40-60px padding inside every box; text must never touch a border
- 30-44px vertical spacing between text lines
- Split long sentences across multiple `<text>` elements
- Box at `x=A width=W` → centred text at `x = A + W/2`
- Box at `y=B` → first text line at `y = B + 48`
- Escape `&` as `&amp;`, `<` as `&lt;`, `>` as `&gt;` inside text nodes
- Straight ASCII apostrophes only — no smart quotes, no em-dashes in SVG text
- Never draw a decorative line or curve that crosses a content box

**This book's SVGs should look like kitchen and gym reference cards.** Favour
layouts a person would actually glance at mid-task:
plate diagrams (circle split into segments), a day-strip of meals across a
timeline, shopping-list grids with tick boxes, a set/rep table, a simple drawn
figure showing a movement's start and end position, a weekly calendar grid, a
progression ladder, a portion-by-hand-size comparison, a before/after panel pair,
a numbered step stack, and a gold summary bar at the bottom.

Use the full canvas — spread content down to y≈980. Do not crowd the top third.

Gold summary bar (good closer for most cards):
```
<rect x="120" y="880" width="860" height="100" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
<text x="550" y="942" text-anchor="middle" fill="#ffd700" font-size="22">One-line takeaway</text>
```

## Self-check before you finish
- [ ] Valid JSON, parses with `JSON.parse`
- [ ] 13+ cards, every one has `visual.svg` and `visual.caption`
- [ ] 3+ application, 3+ example, 3+ quiz, 1+ quote, 1+ visual
- [ ] Every quiz: exactly 4 options, exactly 1 correct
- [ ] Every SVG opens `<svg viewBox="0 0 1100 1100" class="lesson-visual">` with
      the `#1a1a2e` background rect
- [ ] No text overflows its box; no line crosses a box
- [ ] Layouts vary between cards
- [ ] No invented studies, statistics or quotes; no calorie targets
