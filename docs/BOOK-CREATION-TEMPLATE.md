# SYNTHESIS Book Creation Template

## The Complete Playbook for Adding a New Book

This template documents the exact end-to-end process for creating a new book module in SYNTHESIS. Follow every step in order. Skip nothing.

---

## PHASE 1: RESEARCH & PLANNING

### Step 1: Understand the Book
Before writing a single line of code, gather:
- **Full title and author**
- **Core thesis** — what is the book's central argument in one sentence?
- **Key concepts** — identify 10-12 major ideas from the book (these become lessons)
- **Target audience** — beginner, intermediate, or advanced?
- **Category** — which existing SYNTHESIS category fits? (psychology, productivity, philosophy, personal-development, health-wellness, history, art-history, business, leadership, science-tech)

### Step 2: Design the Lesson Map
Plan **12 lessons minimum** (more is fine, fewer is not). Each lesson should cover ONE core concept.

**Lesson map structure:**
| Lesson | Concept | Duration | Key Teaching |
|--------|---------|----------|--------------|
| 1 | Opening concept / worldview introduction | 6-7 min | Hook the learner into the book's philosophy |
| 2-10 | One core concept per lesson | 6-7 min | Deep dive into each idea |
| 11 | Penultimate concept or integration | 6-7 min | Connect ideas together |
| 12 | Synthesis / Bringing It All Together | 6-7 min | Weave all concepts, practical path forward |

**Naming conventions:**
- Lesson titles should be compelling, not academic: "Shinrin-Yoku: The Medicine of Trees" not "Chapter 4: Forest Bathing"
- Use the foreign/original term when it adds value: "Ikigai" not "Purpose"
- Add a subtitle that explains the concept for newcomers

### Step 3: Choose the Color Palette & Cover
- `coverGradient`: Pick 3 colors that evoke the book's mood
- Use the standard SYNTHESIS SVG color palette for all lesson visuals (see Phase 3)

---

## PHASE 2: BOOK METADATA

### The Book Object (data.js format)
```javascript
{
    id: "book-id-kebab-case",
    title: "Full Book Title",
    author: "Author Name",
    description: "One compelling sentence about the book. Second sentence about what the learner will gain.",
    lessons: 12,                    // Must be 12+
    duration: 78,                   // Total minutes (sum of all lesson durations)
    progress: 0,
    category: "philosophy",         // Must match an existing category id
    featured: true,                 // Set true for new books to boost visibility
    lessonList: [ ... ]             // Array of lesson objects
}
```

**ID Rules:**
- All lowercase, kebab-case: `eight-million-ways-happiness`
- Short but recognizable: `atomic-habits`, `deep-work`
- No special characters or spaces

---

## PHASE 3: LESSON CREATION

### Card Structure: MINIMUM 10 Cards Per Lesson (More If the Concept Demands It)

**The more knowledge the better.** If a concept needs 14 cards to teach properly, use 14 cards. 12 is the floor, not the ceiling. Use as many cards as needed to help the user learn the content AND check that they remember it. Never artificially truncate knowledge to save cards.

Every lesson MUST follow this progression at minimum:

| Order | Card Type | Purpose | Required? |
|-------|-----------|---------|-----------|
| 1 | `intro` | Emotional hook, "why this matters" | **YES** |
| 2 | `concept` | First core concept explained | **YES** |
| 3 | `visual` or `concept` | SVG-driven visual reinforcement | **YES** |
| 4 | `example` | Real-world application of concept 1 | **YES** |
| 5 | `quiz` | Mid-lesson knowledge check | **YES** |
| 6 | `concept` | Second core concept | **YES** |
| 7 | `visual` or `concept` | SVG visual for concept 2 | **YES** |
| 8 | `example` | Real-world application of concept 2 | **YES** |
| 9 | `application` | "How to apply this TODAY" with steps | **YES** |
| 10 | `quiz` | Final knowledge check | **YES** |
| 11+ | `concept`, `quote`, `example` | Additional depth — add as many as needed | **ENCOURAGED** |

**When to add more than 12 cards:**
- The concept has sub-ideas that each deserve their own card
- There are more than 2 great real-world examples
- A quote from the author would add emotional resonance
- A third quiz would reinforce a tricky concept
- Historical context or research data enriches the lesson

### CRITICAL RULE: Every Card Gets an SVG

**No exceptions.** Every card type — intro, concept, visual, example, quiz, application, quote — MUST include a `visual` property with a full SVG diagram.

Even quiz cards get a relevant SVG (a simple reinforcement graphic of the concept being tested).

### Card Object Format
```javascript
{
    type: "concept",                    // intro | concept | visual | example | quiz | application | quote
    title: "Card Title Here",
    content: "Body text with **bold terms**, bullet points, and \\n\\n paragraph breaks...",
    visual: {
        type: "diagram",
        svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">...</svg>`,
        caption: "Short description of the visual"
    }
}
```

### Quiz Card Format
```javascript
{
    type: "quiz",
    question: "Clear, specific question?",
    options: [
        { text: "Plausible wrong answer A", correct: false },
        { text: "The correct answer", correct: true },
        { text: "Common misconception C", correct: false },
        { text: "Partially correct but incomplete D", correct: false }
    ],
    explanation: "Why the correct answer is right and why the most tempting wrong answer is wrong. 50-100 words.",
    visual: {
        type: "diagram",
        svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">...</svg>`,
        caption: "Concept reinforcement"
    }
}
```

---

## PHASE 4: SVG VISUAL STANDARDS

### Canvas Size (Non-Negotiable)
```
ALL SVGs: viewBox="0 0 1100 1100"
Background: <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
```

### Color Palette
```
Indigo:     #6366f1     rgba(99,102,241,0.15)
Violet:     #8b5cf6     rgba(139,92,246,0.15)
Green:      #10b981     rgba(16,185,129,0.15)
Amber:      #f59e0b     rgba(245,158,11,0.15)
Red:        #ef4444     rgba(239,68,68,0.1)
Blue:       #3b82f6     rgba(59,130,246,0.15)
Pink:       #ec4899     rgba(236,72,153,0.1)
Teal:       #14b8a6     rgba(20,184,166,0.15)
Gold:       #ffd700     rgba(255,215,0,0.1)
Text:       #fff (primary), #888 (secondary)
Background: #1a1a2e
```

### Text Sizing (for 1100x1100 canvas)
```
Main title:      font-size="36"   max ~29 chars    y="55"
Subtitle:        font-size="23"   max ~40 chars    y="100"
Section header:  font-size="22-24" max ~48 chars   bold, colored
Body text:       font-size="18-20" max ~58 chars
Secondary text:  font-size="14"    max ~65 chars   fill="#888"
Small text:      font-size="12"    max ~70 chars
```

### TEXT PADDING RULES (Critical — Prevents Overflow)
1. **Always leave 40-60px padding** inside boxes (text must never touch edges)
2. **Line spacing**: 30-40px vertical spacing between text lines
3. **Split long text**: Break any sentence longer than the max chars into multiple `<text>` elements
4. **Center calculation**: For a box at `x=150, width=800`, center text at `x=550` (150 + 800/2)
5. **Vertical center**: For a box at `y=200, height=160`, first text at `y=250` (200 + 50px padding)

### Standard SVG Header
```svg
<svg viewBox="0 0 1100 1100" class="lesson-visual">
    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">TITLE</text>
    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Subtitle</text>
    <!-- Content below -->
</svg>
```

### Common Layouts

**Two-Column Comparison:**
```svg
<rect x="60" y="170" width="460" height="320" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
<text x="290" y="220" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">LEFT TITLE</text>
<!-- Left content: x centered at 290, padding starts at y=260 -->

<rect x="580" y="170" width="460" height="320" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
<text x="810" y="220" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">RIGHT TITLE</text>
<!-- Right content: x centered at 810 -->
```

**Three-Column Grid:**
```svg
<rect x="80" y="170" width="300" height="180" rx="20" fill="rgba(99,102,241,0.15)" stroke="#6366f1" stroke-width="2"/>
<text x="230" y="225" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">COL 1</text>

<rect x="400" y="170" width="300" height="180" rx="20" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
<text x="550" y="225" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">COL 2</text>

<rect x="720" y="170" width="300" height="180" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
<text x="870" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">COL 3</text>
```

**Four-Box Grid:**
```svg
<rect x="80" y="170" width="440" height="160" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
<text x="300" y="230" text-anchor="middle" ...>BOX 1</text>

<rect x="580" y="170" width="440" height="160" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
<text x="800" y="230" text-anchor="middle" ...>BOX 2</text>

<rect x="80" y="390" width="440" height="160" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
<text x="300" y="450" text-anchor="middle" ...>BOX 3</text>

<rect x="580" y="390" width="440" height="160" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
<text x="800" y="450" text-anchor="middle" ...>BOX 4</text>
```

**Stacked Steps (for application/process cards):**
```svg
<rect x="150" y="170" width="800" height="90" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
<text x="200" y="225" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="22">1.</text>
<text x="240" y="225" text-anchor="start" fill="#fff" font-size="20">Step description here</text>
<!-- Repeat at y+130 for each step -->
```

**Quiz Knowledge Check (for quiz card SVGs):**
```svg
<text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
<rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
<text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">KEY CONCEPT</text>
<text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">One-line summary of what's being tested</text>
<text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">Supporting detail</text>
```

**Summary Takeaway Bar:**
```svg
<rect x="200" y="600" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
<text x="550" y="650" text-anchor="middle" fill="#ffd700" font-size="20">Key takeaway text here</text>
```

---

## PHASE 5: CONTENT QUALITY STANDARDS

### Writing Style
- **Conversational**: Like explaining to a smart friend
- **Active voice**: "You will discover" not "It will be discovered"
- **Second person**: "You" not "the learner"
- **Present tense**: "This is" not "This will be"
- **Specific over abstract**: Real examples, real numbers, real names

### Content Formatting
- Use `**bold**` for key terms and emphasis
- Use `\n\n` for paragraph breaks
- Use bullet points with `\n•` for lists
- Keep paragraphs to 3-4 sentences max
- Use numbered lists for sequential steps

### Card Content Length
| Card Type | Word Count |
|-----------|------------|
| Intro | 100-200 words |
| Concept | 150-300 words |
| Example | 100-200 words |
| Application | 100-200 words |
| Quiz explanation | 50-100 words |

### Quiz Quality Rules
- **4 options** per question (no more, no less)
- **1 correct** answer only
- **Plausible wrong answers** — not obviously wrong
- **Common misconceptions** as distractors
- **Explanations** must reference the taught content
- **2 quizzes per lesson minimum** — one mid-lesson, one at end

---

## PHASE 6: INTEGRATION INTO DATA.JS

### Step 1: Write the Book to a Temporary File
Write the complete book object (from `{` to `}`) into a standalone `.js` file. This makes it easier to validate before inserting.

### Step 2: Validate the Content
Run these checks before inserting:
```bash
# Count lessons (should be 12+)
grep -c "id: [0-9]" temp-book.js

# Count SVGs (should equal total number of cards)
grep -c "svg viewBox" temp-book.js

# Verify proper bracket closure at end of file
tail -5 temp-book.js
```

### Step 3: Find the Insert Point
The book goes into its **category's books array** in `data.js`.

```bash
# Find the category
grep -n 'id: "philosophy"' data.js

# Find the end of that category's books array
# Look for the ']' that closes the books array, followed by '},' closing the category
```

### Step 4: Splice Into data.js
Use a script to:
1. Read data.js into memory
2. Find the insertion point (end of the target category's books array, before the `]`)
3. Insert a comma + the new book object
4. Write the updated file

### Step 5: Verify Integration
```bash
# Confirm book exists
grep "book-id-here" data.js

# Confirm surrounding structure is intact
# Check that the next category still follows correctly
```

### Step 6: Test in Browser
1. Open `index.html` in browser
2. Navigate to the book's category in Library
3. Verify the book card appears with correct metadata
4. Open the book and verify all lessons are listed
5. Play through at least Lesson 1 completely:
   - All cards render with SVGs
   - Quizzes work (correct/incorrect feedback)
   - Progress saves
6. Spot-check 2-3 other lessons

### Step 7: Clean Up
- Delete the temporary book file
- Optionally update `booksData.ts` (TypeScript source) to stay in sync

---

## PHASE 7: QUALITY CHECKLIST

### Before Marking a Book Complete:

**Structure**
- [ ] 12+ lessons
- [ ] Every lesson has 12+ cards
- [ ] Every lesson starts with `intro` card
- [ ] Every lesson ends with `quiz` card
- [ ] Every lesson has an `application` card
- [ ] Every lesson has 2+ quizzes
- [ ] Total duration is 70-90 minutes

**Visuals**
- [ ] Every single card has an SVG (including quiz, example, application)
- [ ] All SVGs use `viewBox="0 0 1100 1100"`
- [ ] All SVGs have dark background `fill="#1a1a2e"`
- [ ] Text stays inside box borders (40-60px padding)
- [ ] Text sizes follow the standard hierarchy
- [ ] Colors from the approved palette only
- [ ] All visuals have captions

**Content**
- [ ] Conversational tone throughout
- [ ] Key terms bolded
- [ ] Real-world examples in every lesson
- [ ] Specific details (names, numbers, dates) — not vague
- [ ] Actionable takeaways in every `application` card

**Quizzes**
- [ ] 4 options per quiz
- [ ] Plausible wrong answers (not obviously wrong)
- [ ] Detailed explanations (50-100 words)
- [ ] Tests understanding, not memorization
- [ ] References concepts taught in that lesson

**Metadata**
- [ ] `lessons` count matches actual lesson count
- [ ] `duration` matches sum of lesson durations
- [ ] `category` matches an existing category id
- [ ] `id` is unique (not used by any other book)
- [ ] `description` is compelling and under 2 sentences

---

## REFERENCE: Complete Lesson Template

```javascript
{
    id: 1,
    title: "Lesson Title: Compelling Subtitle",
    duration: 7,
    completed: false,
    cards: [
        // CARD 1: INTRO (Required)
        {
            type: "intro",
            title: "Hook Question or Statement?",
            content: "Opening paragraph that creates curiosity and emotional investment. Why this matters to YOUR life. Preview of the transformation you'll experience. 100-200 words.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <!-- Visual hook for the lesson -->
                </svg>`,
                caption: "Caption describing the visual"
            }
        },
        // CARD 2: CONCEPT (Required)
        {
            type: "concept",
            title: "First Core Concept",
            content: "Clear explanation with **bold key terms** and bullet points:\n\n• Point one\n• Point two\n• Point three\n\n150-300 words.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">...</svg>`,
                caption: "Concept visualization"
            }
        },
        // CARD 3: VISUAL/CONCEPT (Required)
        {
            type: "visual",
            title: "Visual Reinforcement",
            content: "Context for the visual diagram. Brief supporting text.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">...</svg>`,
                caption: "Process or structure diagram"
            }
        },
        // CARD 4: EXAMPLE (Required)
        {
            type: "example",
            title: "Real-World Application",
            content: "**Scenario 1**: Specific, concrete example...\n\n**Scenario 2**: Another real example...\n\n100-200 words.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">...</svg>`,
                caption: "Examples illustrated"
            }
        },
        // CARD 5: QUIZ (Required — Mid-Lesson Check)
        {
            type: "quiz",
            question: "Question testing concept 1?",
            options: [
                { text: "Plausible wrong answer", correct: false },
                { text: "Correct answer", correct: true },
                { text: "Common misconception", correct: false },
                { text: "Partially right but incomplete", correct: false }
            ],
            explanation: "Why correct answer is right. Reference the concept taught. 50-100 words.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">...</svg>`,
                caption: "Concept reinforcement"
            }
        },
        // CARD 6: CONCEPT (Required)
        {
            type: "concept",
            title: "Second Core Concept",
            content: "Second major teaching point of the lesson...",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">...</svg>`,
                caption: "Second concept visualized"
            }
        },
        // CARD 7: VISUAL/CONCEPT (Required)
        {
            type: "concept",
            title: "Deeper Exploration",
            content: "Third concept or deeper layer of concept 2...",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">...</svg>`,
                caption: "Deeper understanding"
            }
        },
        // CARD 8: EXAMPLE (Required)
        {
            type: "example",
            title: "More Real-World Proof",
            content: "Additional concrete examples reinforcing the concepts...",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">...</svg>`,
                caption: "More examples"
            }
        },
        // CARD 9: APPLICATION (Required)
        {
            type: "application",
            title: "Apply This Today",
            content: "**Specific actions for today**:\n\n1. **First action**: Description\n\n2. **Second action**: Description\n\n3. **Third action**: Description",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">...</svg>`,
                caption: "Your action plan"
            }
        },
        // CARD 10: QUIZ (Required — Final Check)
        {
            type: "quiz",
            question: "Final assessment question?",
            options: [
                { text: "Option A", correct: false },
                { text: "Option B", correct: true },
                { text: "Option C", correct: false },
                { text: "Option D", correct: false }
            ],
            explanation: "Why B is correct. Tie back to the lesson's key message.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">...</svg>`,
                caption: "Final check"
            }
        }
        // CARDS 11+: Optional additional depth (concept, quote, example)
    ]
}
```

---

## REFERENCE: Process Used for "Eight Million Ways to Happiness"

### What We Did (Step by Step)

1. **Explored the codebase** — understood data.js structure, card formats, SVG standards, existing books as templates
2. **Read existing standards** — LESSON-CREATION-STANDARDS.md and LESSON-TEMPLATE-GUIDE.md
3. **Identified 12 core concepts** from the book — yaoyorozu, ikigai, wabi-sabi, shinrin-yoku, mono no aware, ritual/ma, gaman, omotenashi, kaizen, musubi, oubaitori, synthesis
4. **Wrote book metadata** — id, title, author, description, category, tags, duration
5. **Created lessons 1-2** as a foundation — established the tone, SVG style, card flow
6. **Created lessons 3-12** in parallel — maintaining consistency with lessons 1-2
7. **Verified every card has an SVG** — 87 cards, 87 SVGs, zero exceptions
8. **Validated bracket structure** — proper closing at end of file
9. **Spliced into data.js** — replaced old version, verified surrounding structure intact
10. **Tested in browser** — opened app, navigated to Philosophy, verified book renders

### Stats
- 12 lessons
- 87 total cards (this was the first book — all future books require 12+ cards per lesson)
- 87 SVG diagrams
- 24 quiz questions
- 78 minutes total duration
- Written and integrated in one session

---

## ANTI-PATTERNS (Don't Do These)

### Bad Lesson Title
```
"Chapter 4: Forest Bathing"          // Academic, boring
"Shinrin-Yoku: The Medicine of Trees" // Compelling, teaches the term
```

### Missing SVG on a Card
```javascript
// WRONG — quiz without visual
{ type: "quiz", question: "...", options: [...], explanation: "..." }

// RIGHT — quiz with visual
{ type: "quiz", question: "...", options: [...], explanation: "...",
  visual: { type: "diagram", svg: `<svg>...</svg>`, caption: "..." } }
```

### Text Overflow in SVG
```svg
<!-- WRONG: 60-char text at font-size 26 in a 400px-wide box -->
<rect x="100" y="200" width="400" height="100"/>
<text x="300" y="250" font-size="24">This text is way too long to fit inside this narrow box</text>

<!-- RIGHT: Split into two lines, reduce font size -->
<rect x="100" y="200" width="400" height="120"/>
<text x="300" y="245" font-size="18">This text is split across</text>
<text x="300" y="275" font-size="18">two properly sized lines</text>
```

### Weak Quiz Distractors
```javascript
// WRONG — obviously wrong answers
options: [
    { text: "The correct answer about ikigai", correct: true },
    { text: "Ikigai means pizza", correct: false },         // Ridiculous
    { text: "Nobody knows what ikigai means", correct: false }, // Lazy
    { text: "All of the above", correct: false }             // Filler
]

// RIGHT — plausible distractors
options: [
    { text: "A small thing that gives your days quiet joy", correct: true },
    { text: "The intersection of passion, profession, mission, and vocation", correct: false }, // Common misconception
    { text: "A career that perfectly aligns with your talents", correct: false }, // Partially right
    { text: "A philosophy only accessible through formal study", correct: false } // Sounds reasonable
]
```

### Fewer Than 10 Cards
```
7 cards per lesson  // WRONG — below minimum
12+ cards per lesson // RIGHT — meets the standard
```

---

*This template was established February 2026 based on the "Eight Million Ways to Happiness" build. All future books must follow this process.*
