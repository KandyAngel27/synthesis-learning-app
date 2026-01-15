# SYNTHESIS Lesson Creation Standards

## The Gold Standard: Medical Terminology Level Quality

Every lesson in SYNTHESIS must be designed to maximize engagement, retention, and application. This document defines the minimum quality standards for all lessons.

---

## Core Philosophy

**Lessons are NOT just reading material.** Each lesson is an interactive learning experience that:
- Hooks the learner emotionally in the first 10 seconds
- Uses multiple learning modalities (visual, textual, kinesthetic)
- Breaks complex concepts into digestible chunks
- Tests understanding THROUGHOUT (not just at the end)
- Provides real-world application immediately
- Makes the learner WANT to continue

---

## Required Card Structure

### Minimum Cards Per Lesson: 8-12
Each lesson MUST include this progression:

| Order | Card Type | Purpose | Required? |
|-------|-----------|---------|-----------|
| 1 | `intro` | Emotional hook, "why this matters" | YES |
| 2 | `concept` | First core concept with visual | YES |
| 3 | `visual` | SVG diagram reinforcing concept 1 | YES |
| 4 | `example` | Real-world application of concept 1 | YES |
| 5 | `quiz` | Check understanding before moving on | YES |
| 6 | `concept` | Second core concept | YES |
| 7 | `visual` | SVG diagram for concept 2 | YES |
| 8 | `example` | Real-world application of concept 2 | RECOMMENDED |
| 9 | `quote` | Memorable quote from author/expert | RECOMMENDED |
| 10 | `application` | "How to apply this TODAY" | YES |
| 11 | `quiz` | Final knowledge check | YES |
| 12 | `concept` | Key takeaways summary | RECOMMENDED |

---

## Card Type Specifications

### 1. INTRO Card (Required First)

**Purpose:** Hook the learner, create emotional investment

**Must Include:**
- A compelling question or scenario
- Why this matters to THEIR life
- Preview of transformation they'll experience
- Conversational, engaging tone

**Example:**
```javascript
{
    type: "intro",
    title: "Your Brain Has Two Speeds",
    content: "Imagine walking into a hospital and hearing: 'The patient presents with acute cholecystitis...' Sounds like a foreign language, right? That's because it IS a language - and you're about to become fluent in it.\n\nThis isn't about memorizing a dictionary. It's about learning a CODE. By the end of this lesson, you'll decode medical terms you've never seen before. Let's crack the code!",
    visual: {
        type: "diagram",
        svg: `<svg>...</svg>`,
        caption: "From confusion to clarity"
    }
}
```

**Bad Example (Don't Do This):**
```javascript
{
    type: "intro",
    title: "Introduction",
    content: "In this lesson we will learn about cognitive biases."
}
```

---

### 2. CONCEPT Card

**Purpose:** Teach one specific idea clearly

**Must Include:**
- ONE main concept (not multiple crammed together)
- Bullet points for scanability
- Bold key terms with `**term**`
- Visual diagram when concept is complex
- Analogies to familiar concepts

**Content Length:** 150-300 words (enough to explain, not overwhelm)

**Example:**
```javascript
{
    type: "concept",
    title: "The Four Building Blocks of Medical Terms",
    content: "Every medical term is constructed from up to four building blocks. Think of them like LEGO pieces - once you know the pieces, you can build (and decode) anything:\n\n**1. WORD ROOT** - The foundation, the core meaning\nExample: CARDI = heart, GASTR = stomach\n\n**2. COMBINING VOWEL** - The glue (usually 'O')\nConnects word parts for pronunciation\n\n**3. PREFIX** - Beginning modifier\nBRADY- = slow, TACHY- = fast\n\n**4. SUFFIX** - The ending that tells the story\n-ITIS = inflammation, -ECTOMY = removal",
    visual: {
        type: "diagram",
        svg: `<svg viewBox="0 0 700 300">...</svg>`,
        caption: "The 4 building blocks"
    }
}
```

---

### 3. VISUAL Card

**Purpose:** Reinforce concepts through diagrams

**Must Include:**
- SVG diagram (not just text saying "imagine a diagram")
- Color-coded elements
- Clear labels
- Caption explaining the visual
- Supporting text if needed

**SVG Requirements:**
- Viewbox: `viewBox="0 0 700 300"` or similar (700 width standard - FULL PAGE WIDTH)
- CRITICAL: Use FULL WIDTH (700px) to prevent cramped/scrunched graphics
- Dark background: `fill="#1a1a2e"`
- Use brand colors:
  - Primary: `#6366f1` (indigo)
  - Success: `#10b981` (green)
  - Warning: `#f59e0b` (amber)
  - Error: `#ef4444` (red)
  - Accent: `#14b8a6` (teal)
  - Purple: `#8b5cf6`
  - Pink: `#ec4899`
- Text: `fill="#fff"` for main, `fill="#888"` for secondary
- Always include title text at top

**SVG Template:**
```javascript
visual: {
    type: "diagram",
    svg: `<svg viewBox="0 0 700 300" class="lesson-visual">
        <rect x="0" y="0" width="700" height="300" fill="#1a1a2e"/>
        <text x="350" y="25" text-anchor="middle" fill="#14b8a6" font-weight="bold" font-size="14">DIAGRAM TITLE</text>

        <!-- Content boxes - spread across full 700px width -->
        <rect x="40" y="50" width="180" height="60" rx="10" fill="rgba(99,102,241,0.2)" stroke="#6366f1"/>
        <text x="130" y="85" text-anchor="middle" fill="#fff" font-size="12">Label 1</text>

        <rect x="260" y="50" width="180" height="60" rx="10" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6"/>
        <text x="350" y="85" text-anchor="middle" fill="#fff" font-size="12">Label 2</text>

        <rect x="480" y="50" width="180" height="60" rx="10" fill="rgba(16,185,129,0.2)" stroke="#10b981"/>
        <text x="570" y="85" text-anchor="middle" fill="#fff" font-size="12">Label 3</text>

        <!-- Arrows -->
        <path d="M220 80 L260 80" stroke="#14b8a6" stroke-width="2"/>
        <polygon points="260,80 250,75 250,85" fill="#14b8a6"/>

        <path d="M440 80 L480 80" stroke="#14b8a6" stroke-width="2"/>
        <polygon points="480,80 470,75 470,85" fill="#14b8a6"/>

        <!-- More elements... -->
    </svg>`,
    caption: "How the components connect"
}
```

---

### 4. EXAMPLE Card

**Purpose:** Show real-world application

**Must Include:**
- Concrete scenario (not abstract)
- Specific details (names, numbers, situations)
- Connection back to the concept
- "This is why it matters" moment

**Example:**
```javascript
{
    type: "example",
    title: "Real-World Impact",
    content: "**Medical Diagnosis**: Doctors often overweight symptoms that 'look like' a disease while ignoring how rare that disease actually is.\n\n**Hiring**: Interviewers choose candidates who 'seem like' successful employees, ignoring the actual success rate of similar hires.\n\n**Investing**: We think companies with impressive founders will be successful because they 'look like' winners, ignoring how many similar companies fail.",
    visual: {
        type: "diagram",
        svg: `<svg>...</svg>`
    }
}
```

---

### 5. QUIZ Card

**Purpose:** Test understanding, reinforce learning

**Requirements:**
- 4 answer options
- Only ONE correct answer
- Plausible wrong answers (not obviously wrong)
- Detailed explanation for WHY the answer is correct
- Reference back to concepts taught

**Quiz Placement:**
- After every 2-3 concept cards (not just at end)
- Minimum 2 quizzes per lesson

**Example:**
```javascript
{
    type: "quiz",
    question: "In the term 'CARDIOLOGY', what is the WORD ROOT?",
    options: [
        { text: "CARDI", correct: true },
        { text: "CARDIO", correct: false },
        { text: "OLOGY", correct: false },
        { text: "LOGY", correct: false }
    ],
    explanation: "CARDI is the word root meaning 'heart.' CARDIO (cardi + o) is the COMBINING FORM - the word root plus the combining vowel. -OLOGY is the suffix meaning 'study of.' Remember: the word root is the foundation without any vowels attached!"
}
```

---

### 6. QUOTE Card

**Purpose:** Memorable wisdom, emotional resonance

**Must Include:**
- Relevant quote from book author or expert
- Attribution
- Brief context if needed

**Example:**
```javascript
{
    type: "quote",
    content: "We can be blind to the obvious, and we are also blind to our blindness.",
    author: "Daniel Kahneman"
}
```

---

### 7. APPLICATION Card

**Purpose:** Bridge learning to action

**Must Include:**
- Specific actions they can take TODAY
- Numbered steps
- Realistic, achievable tasks
- Connection to their life

**Example:**
```javascript
{
    type: "application",
    title: "Apply This Today",
    content: "1. **Create friction**: Don't rush decisions. Sleep on important choices.\n\n2. **Ask 'What am I missing?'**: This prompts System 2 to check System 1's work\n\n3. **Schedule important decisions for high-energy times**: Not when depleted\n\n4. **Distrust intuitive answers to hard questions**: If it feels too easy, you might be answering the wrong question"
}
```

---

## Content Quality Standards

### Writing Style
- **Conversational**: Write like you're explaining to a smart friend
- **Active voice**: "You will learn" not "Learning will occur"
- **Second person**: "You" not "the learner" or "one"
- **Present tense**: "This is" not "This will be"
- **Concrete over abstract**: Specific examples over general statements

### Formatting
- Use `**bold**` for key terms and emphasis
- Use bullet points (•) for lists
- Use `\n\n` for paragraph breaks
- Keep paragraphs to 3-4 sentences max
- Use numbered lists for sequential steps

### Length Guidelines
- Intro card: 100-200 words
- Concept card: 150-300 words
- Example card: 100-200 words
- Application card: 100-200 words
- Quiz explanation: 50-100 words

---

## SVG Visual Standards

### Color Palette
```
Primary:     #6366f1 (indigo)
Secondary:   #8b5cf6 (violet)
Success:     #10b981 (emerald)
Warning:     #f59e0b (amber)
Error:       #ef4444 (red)
Info:        #3b82f6 (blue)
Accent:      #14b8a6 (teal)
Pink:        #ec4899
Background:  #1a1a2e (dark)
Text:        #fff (primary), #888 (secondary)
```

### Transparency for Boxes
```
rgba(99,102,241,0.2)   - indigo box bg
rgba(139,92,246,0.2)   - violet box bg
rgba(16,185,129,0.2)   - green box bg
rgba(245,158,11,0.2)   - amber box bg
rgba(239,68,68,0.2)    - red box bg
rgba(20,184,166,0.15)  - teal box bg
```

### Common SVG Patterns (All use 700px width)

**Labeled Box (for 700px wide canvas):**
```svg
<!-- Left position -->
<rect x="40" y="50" width="180" height="50" rx="8" fill="rgba(99,102,241,0.2)" stroke="#6366f1"/>
<text x="130" y="80" text-anchor="middle" fill="#fff" font-size="11">Label Here</text>

<!-- Center position -->
<rect x="260" y="50" width="180" height="50" rx="8" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6"/>
<text x="350" y="80" text-anchor="middle" fill="#fff" font-size="11">Center Label</text>

<!-- Right position -->
<rect x="480" y="50" width="180" height="50" rx="8" fill="rgba(16,185,129,0.2)" stroke="#10b981"/>
<text x="570" y="80" text-anchor="middle" fill="#fff" font-size="11">Right Label</text>
```

**Arrow:**
```svg
<path d="M220 75 L260 75" stroke="#14b8a6" stroke-width="2"/>
<polygon points="260,75 250,70 250,80" fill="#14b8a6"/>
```

**Circle Node (for 700px canvas):**
```svg
<!-- Spread across width: positions at ~117, 350, 583 for 3 nodes -->
<circle cx="117" cy="100" r="30" fill="#6366f1"/>
<text x="117" y="105" text-anchor="middle" fill="#fff" font-size="14">1</text>

<circle cx="350" cy="100" r="30" fill="#8b5cf6"/>
<text x="350" y="105" text-anchor="middle" fill="#fff" font-size="14">2</text>

<circle cx="583" cy="100" r="30" fill="#10b981"/>
<text x="583" y="105" text-anchor="middle" fill="#fff" font-size="14">3</text>
```

**Flow Diagram (700px wide - 4 steps):**
```svg
<!-- Step 1 -->
<rect x="40" y="50" width="130" height="45" rx="6" fill="#ef4444"/>
<text x="105" y="78" text-anchor="middle" fill="#fff" font-size="11">Step 1</text>

<!-- Arrow 1 -->
<path d="M170 72 L210 72" stroke="#14b8a6" stroke-width="2"/>
<polygon points="210,72 200,67 200,77" fill="#14b8a6"/>

<!-- Step 2 -->
<rect x="210" y="50" width="130" height="45" rx="6" fill="#f59e0b"/>
<text x="275" y="78" text-anchor="middle" fill="#fff" font-size="11">Step 2</text>

<!-- Arrow 2 -->
<path d="M340 72 L380 72" stroke="#14b8a6" stroke-width="2"/>
<polygon points="380,72 370,67 370,77" fill="#14b8a6"/>

<!-- Step 3 -->
<rect x="380" y="50" width="130" height="45" rx="6" fill="#10b981"/>
<text x="445" y="78" text-anchor="middle" fill="#fff" font-size="11">Step 3</text>

<!-- Arrow 3 -->
<path d="M510 72 L550 72" stroke="#14b8a6" stroke-width="2"/>
<polygon points="550,72 540,67 540,77" fill="#14b8a6"/>

<!-- Step 4 -->
<rect x="550" y="50" width="110" height="45" rx="6" fill="#6366f1"/>
<text x="605" y="78" text-anchor="middle" fill="#fff" font-size="11">Step 4</text>
```

---

## Complete Lesson Template

```javascript
{
    id: 1,
    title: "Lesson Title Here",
    duration: 7,  // minutes (calculate based on card count: ~45 sec per card)
    completed: false,
    cards: [
        {
            type: "intro",
            title: "Hook Title",
            content: "Engaging opening that creates curiosity and emotional investment...",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 700 300">...</svg>`,  // FULL WIDTH
                caption: "Visual hook"
            }
        },
        {
            type: "concept",
            title: "Core Concept 1",
            content: "Clear explanation with **bold key terms** and bullet points:\n\n• Point one\n• Point two\n• Point three",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 700 300">...</svg>`,  // FULL WIDTH
                caption: "Concept visualization"
            }
        },
        {
            type: "visual",
            title: "Understanding the Process",
            content: "Additional context for the visual...",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 700 350">...</svg>`,  // FULL WIDTH
                caption: "Process flow"
            }
        },
        {
            type: "example",
            title: "Real-World Application",
            content: "**Scenario 1**: Specific example...\n\n**Scenario 2**: Another example...",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 700 300">...</svg>`  // FULL WIDTH
            }
        },
        {
            type: "quiz",
            question: "Question testing concept 1?",
            options: [
                { text: "Correct answer", correct: true },
                { text: "Plausible wrong answer 1", correct: false },
                { text: "Plausible wrong answer 2", correct: false },
                { text: "Plausible wrong answer 3", correct: false }
            ],
            explanation: "Detailed explanation of why this is correct and why others are wrong."
        },
        {
            type: "concept",
            title: "Core Concept 2",
            content: "Second major teaching point...",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 700 300">...</svg>`  // FULL WIDTH
            }
        },
        {
            type: "quote",
            content: "Memorable quote from the book or expert.",
            author: "Author Name"
        },
        {
            type: "application",
            title: "Apply This Today",
            content: "1. **First action**: Description\n\n2. **Second action**: Description\n\n3. **Third action**: Description"
        },
        {
            type: "quiz",
            question: "Final check question?",
            options: [
                { text: "Option A", correct: false },
                { text: "Option B", correct: true },
                { text: "Option C", correct: false },
                { text: "Option D", correct: false }
            ],
            explanation: "Why B is correct..."
        }
    ]
}
```

---

## Quality Checklist

Before considering a lesson complete, verify:

### Structure
- [ ] Minimum 8 cards
- [ ] Starts with engaging intro
- [ ] At least 2 quiz cards
- [ ] Ends with application or summary
- [ ] Logical flow from concept to concept

### Visuals
- [ ] At least 2 SVG diagrams
- [ ] Diagrams use correct color palette
- [ ] Diagrams have captions
- [ ] Visuals reinforce text (not decorative)

### Content
- [ ] Conversational tone
- [ ] Key terms bolded
- [ ] Bullet points for lists
- [ ] Real-world examples included
- [ ] Actionable takeaways

### Quizzes
- [ ] 4 options per quiz
- [ ] Plausible wrong answers
- [ ] Detailed explanations
- [ ] Tests actual understanding (not memorization)

### Engagement
- [ ] Would YOU want to keep reading?
- [ ] Is there a "wow" moment?
- [ ] Does it connect to their life?
- [ ] Does it make them feel smarter?

---

## Anti-Patterns (Don't Do These)

### Bad Intro
```javascript
// DON'T
{ type: "intro", title: "Introduction", content: "This lesson covers cognitive biases." }

// DO
{ type: "intro", title: "Your Brain Is Lying To You", content: "Right now, invisible forces are shaping every decision you make..." }
```

### Missing Visuals
```javascript
// DON'T
{ type: "visual", title: "The Process", content: "Imagine a flowchart showing..." }

// DO
{ type: "visual", title: "The Process", content: "...", visual: { svg: `<svg>...</svg>` } }
```

### Weak Quiz
```javascript
// DON'T
options: [
    { text: "The correct answer", correct: true },
    { text: "Obviously wrong", correct: false },
    { text: "Also clearly wrong", correct: false },
    { text: "Nonsense", correct: false }
]

// DO
options: [
    { text: "Correct but not obvious why", correct: true },
    { text: "Seems right but has subtle flaw", correct: false },
    { text: "Common misconception", correct: false },
    { text: "Partially correct but incomplete", correct: false }
]
```

### No Application
```javascript
// DON'T - ending with just a concept
{ type: "concept", title: "Summary", content: "In conclusion, biases affect us all." }

// DO - ending with action
{ type: "application", title: "Your Next Steps", content: "1. **Today**: Notice one decision you made on autopilot..." }
```

---

## Revision History

- v1.0 - Initial standards based on Medical Terminology lesson analysis
- Created: January 2026

---

*Remember: Every lesson should make the learner feel like they've gained a superpower. If it doesn't, it's not done yet.*
