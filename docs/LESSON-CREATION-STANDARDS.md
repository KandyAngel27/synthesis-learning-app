# SYNTHESIS Lesson & Book Creation Standards

## The Gold Standard: Maximum Knowledge, Maximum Engagement

Every book and lesson in SYNTHESIS must be designed to maximize depth, engagement, retention, and real-world application. More knowledge is always better — if a concept needs 14 cards to teach properly, use 14 cards. Never cut corners to hit a number. These standards define the **minimum** quality bar. Exceed them whenever possible.

---

## Book-Level Requirements

### Minimum 12 Lessons Per Book

Every book MUST have **12 or more lessons**. Each lesson covers ONE core concept from the book in depth.

| Lesson Position | Purpose |
|-----------------|---------|
| Lesson 1 | Opening concept — hook the learner into the book's worldview |
| Lessons 2-10 | One core concept per lesson — the meat of the book |
| Lesson 11 | Penultimate concept or integration of earlier ideas |
| Lesson 12 | Synthesis — weave all concepts together, provide a path forward |

**Lesson titles** should be compelling, not academic:
- **Good**: "Shinrin-Yoku: The Medicine of Trees"
- **Bad**: "Chapter 4: Forest Bathing Overview"

**Total book duration**: 70-100 minutes (sum of all lesson durations).

---

### College-Depth Categories (No Limits)

The following categories are part of the user's **college degree program** and require **maximum depth**. For these categories, there are **NO lesson maximums** and **NO card maximums**. The goal is to teach at the level of a full college course — every concept, every detail, every nuance.

| Category | Category ID | Scope |
|----------|-------------|-------|
| **Health Information Management** | `him` | All HITT courses — coding, compliance, healthcare data, legal/ethical, statistics, quality, systems |
| **Medical Coding** | *(covered within `him`)* | ICD-10-CM/PCS, CPT, HCPCS, DRGs, ambulatory coding, reimbursement — all coding-specific HITT courses |
| **Data Analytics & Microsoft 365** | `data-analytics` | Excel, Power BI, Access, data visualization, statistical analysis, database design |
| **Anatomy & Physiology** | `anatomy-physiology` | Body systems, medical terminology in anatomical context, pathophysiology, clinical correlations |

#### Rules for College-Depth Categories

1. **NO lesson maximum** — A book can have 15, 20, 25, or more lessons. Cover every topic the college course covers.
2. **NO card maximum** — A lesson can have 12, 15, 20, or more cards. If a concept needs 18 cards to teach properly at college depth, use 18 cards.
3. **Minimum 12 lessons** still applies — but there is NO ceiling. More is better.
4. **Minimum 10 cards per lesson** still applies — but there is NO ceiling. More is better.
5. **College-course depth required**:
   - Cover the same topics a professor would cover in a full semester
   - Include terminology, definitions, classifications, and taxonomies
   - Include real-world clinical/professional scenarios
   - Include regulatory and compliance details (CMS, Joint Commission, state/federal law)
   - Include calculations, formulas, and procedures where applicable
   - Reference actual standards (ICD-10, CPT, HIPAA, HITECH, ACA, etc.)
   - Quizzes should test at the level of a college exam — not surface-level recall
6. **Every card still gets a full SVG** — no exceptions, same visual standards apply
7. **Duration is uncapped** — these books can be 100, 150, 200+ minutes. The priority is completeness.
8. **"More knowledge is better" applies double** — when in doubt, add another card, another lesson, another example. The user is studying for their degree and career. Every piece of knowledge matters.

#### What College-Depth Looks Like

**Surface-level (NOT acceptable for these categories):**
> "Medicare is a federal health insurance program for people 65 and older."

**College-depth (THIS is the standard):**
> "**Medicare** is a federal health insurance program administered by **CMS (Centers for Medicare & Medicaid Services)** under the **Department of Health and Human Services (HHS)**. Established by **Title XVIII of the Social Security Act (1965)**, it covers:\n\n• **Part A (Hospital Insurance)**: Inpatient hospital stays, SNF care, hospice, home health — funded by **payroll taxes (FICA, 1.45% employee + 1.45% employer)**\n• **Part B (Medical Insurance)**: Physician services, outpatient care, DME, preventive services — funded by **premiums + general revenue**\n• **Part C (Medicare Advantage)**: Private managed care plans that combine Parts A & B, often with Part D — must cover everything Original Medicare covers\n• **Part D (Prescription Drug Coverage)**: Added by **MMA 2003**, voluntary outpatient drug benefit through private plans\n\nEligibility: Age 65+, under 65 with certain disabilities (24-month waiting period), ESRD (end-stage renal disease), ALS. Enrollment periods: IEP (Initial Enrollment Period), GEP (General Enrollment Period Jan-Mar), SEP (Special Enrollment Period)."

### Book Metadata
```javascript
{
    id: "book-id-kebab-case",        // Unique, lowercase, no spaces
    title: "Full Book Title",
    author: "Author Name",
    description: "Compelling 1-2 sentence description of what the learner will gain.",
    lessons: 12,                      // Must be 12+
    duration: 78,                     // Sum of all lesson durations in minutes
    progress: 0,
    category: "philosophy",           // Must match an existing category id
    featured: true,
    lessonList: [ ... ]
}
```

---

## Core Philosophy

**Lessons are NOT just reading material.** Each lesson is an interactive learning experience that:
- Hooks the learner emotionally in the first 10 seconds
- Uses multiple learning modalities (visual, textual, kinesthetic)
- Breaks complex concepts into digestible chunks
- Tests understanding THROUGHOUT (not just at the end)
- Provides real-world application immediately
- Makes the learner WANT to continue
- **Teaches as deeply as the concept requires — never artificially truncate knowledge to save cards**

---

## Required Card Structure

### Minimum 10 Cards Per Lesson (No Exceptions)

If a concept is rich enough to warrant more cards, **use more cards**. The more knowledge the better. 10 is the floor, not the ceiling. Complex lessons may need 12-15 cards.

Every lesson MUST include this progression at minimum:

| Order | Card Type | Purpose | Required? |
|-------|-----------|---------|-----------|
| 1 | `intro` | Emotional hook, compelling question, "why this matters to YOU" | **YES** |
| 2 | `concept` | First core concept with visual | **YES** |
| 3 | `visual` or `concept` | SVG-driven visual reinforcement or deeper exploration | **YES** |
| 4 | `example` | Real-world application of concept 1 (specific, concrete) | **YES** |
| 5 | `quiz` | Mid-lesson knowledge check (tests concept 1) | **YES** |
| 6 | `concept` | Second core concept | **YES** |
| 7 | `visual` or `concept` | Visual or deeper layer for concept 2 | **YES** |
| 8 | `example` | Real-world application of concept 2 | **YES** |
| 9 | `application` | "How to apply this TODAY" — numbered, specific steps | **YES** |
| 10 | `quiz` | Final knowledge check (tests concept 2 or full lesson) | **YES** |
| 11+ | Any type | Additional depth — more concepts, examples, quotes, visuals | **ENCOURAGED** |

**When to add more than 10 cards:**
- The concept has multiple sub-ideas that each deserve their own card
- There are more than 2 great real-world examples worth showing
- A quote from the author would add emotional resonance
- A third quiz would reinforce a tricky concept
- The application section benefits from a preceding visual
- Historical context or research data enriches the lesson

### CRITICAL: Every Single Card Gets an SVG Visual

**No exceptions. No card should ever be text-only.**

Every card type — `intro`, `concept`, `visual`, `example`, `quiz`, `application`, `quote` — MUST include a `visual` property with a full SVG diagram.

This ensures:
- Consistent visual engagement on every swipe
- Better retention through dual-coding (visual + text)
- Professional, polished appearance
- Maximum learning effectiveness

Even quiz cards get a relevant SVG — a simple graphic reinforcing the concept being tested.

---

## Card Type Specifications

### 1. INTRO Card (Required First)

**Purpose:** Hook the learner, create emotional investment, make them NEED to keep reading.

**Must Include:**
- A compelling question or vivid scenario
- Why this matters to THEIR life — not abstract, personal
- Preview of the transformation they'll experience
- Conversational, engaging tone — like a friend sharing something exciting

**Content Length:** 100-200 words

**Good Example:**
```javascript
{
    type: "intro",
    title: "What If Everything Around You Was Alive?",
    content: "In Japan, there is an ancient phrase: yaoyorozu no kami — 'eight million gods.' The number isn't literal. It means countless, everywhere. In the Japanese worldview, spirit inhabits everything — a moss-covered stone, the steam from tea, the wind through bamboo. This isn't theology. It's a way of paying attention. And it might change how you experience your entire day.",
    visual: {
        type: "diagram",
        svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
            <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
            <!-- Compelling visual hook -->
        </svg>`,
        caption: "Descriptive caption"
    }
}
```

**Bad Example (Never Do This):**
```javascript
{ type: "intro", title: "Introduction", content: "In this lesson we will learn about Japanese spirituality." }
```

---

### 2. CONCEPT Card

**Purpose:** Teach one specific idea clearly and memorably.

**Must Include:**
- ONE main concept (don't cram multiple ideas)
- Bullet points for scanability
- Bold key terms with `**term**`
- Analogies to familiar concepts when possible
- An SVG diagram that visualizes the concept

**Content Length:** 150-300 words

```javascript
{
    type: "concept",
    title: "Wabi Originally Meant Loneliness",
    content: "**Wabi** originally meant the loneliness of living in nature, far from society. **Sabi** referred to the passage of time and the deterioration it brings.\n\nTogether, they describe a worldview that finds beauty in what is:\n• **Worn** — a leather journal softened by years of use\n• **Weathered** — a wooden fence turning silver in the rain\n• **Transient** — cherry blossoms that last only two weeks\n• **Asymmetric** — a handmade ceramic that's perfectly imperfect",
    visual: {
        type: "diagram",
        svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">...</svg>`,
        caption: "The spectrum of wabi-sabi"
    }
}
```

---

### 3. VISUAL Card

**Purpose:** Reinforce or deepen concepts through a diagram-forward card.

**Must Include:**
- SVG diagram as the primary focus
- Color-coded elements with clear labels
- Caption explaining the visual
- Brief supporting text if needed

```javascript
{
    type: "visual",
    title: "The Kintsugi Process",
    content: "The art of kintsugi treats damage as part of an object's history, not something to hide.",
    visual: {
        type: "diagram",
        svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">...</svg>`,
        caption: "Break, repair with gold, transform"
    }
}
```

---

### 4. EXAMPLE Card

**Purpose:** Make concepts real with specific, concrete scenarios.

**Must Include:**
- Concrete scenarios (not abstract descriptions)
- Specific details — names, numbers, places, situations
- Connection back to the concept just taught
- A "this is why it matters" moment

**Content Length:** 100-200 words

```javascript
{
    type: "example",
    title: "Gaman After the 2011 Tohoku Earthquake",
    content: "On March 11, 2011, a magnitude 9.0 earthquake struck Japan. Nearly 20,000 people died.\n\n**What the world saw**:\n• Displaced citizens forming **orderly lines** for water\n• People **sharing supplies** without being asked\n• Strangers **helping strangers** without recognition\n• No looting, no riots, no chaos\n\nThis was gaman — not because people weren't suffering. They were devastated. But they bore their pain with dignity, knowing composure during crisis strengthens everyone.",
    visual: {
        type: "diagram",
        svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">...</svg>`,
        caption: "Gaman in action"
    }
}
```

---

### 5. QUIZ Card

**Purpose:** Test understanding, reinforce learning, catch misconceptions.

**Requirements:**
- Exactly 4 answer options
- Only ONE correct answer
- **Plausible wrong answers** — common misconceptions, partially-correct statements, things that sound right
- Detailed explanation (50-100 words) for WHY the answer is correct and why the most tempting wrong answer is wrong
- Reference back to concepts taught in the lesson
- **Must include an SVG visual** reinforcing the concept being tested

**Quiz Placement:**
- One after the first major concept block (card 5 area)
- One at the end of the lesson (card 10 area)
- Additional quizzes for complex lessons with 3+ concepts

```javascript
{
    type: "quiz",
    question: "What is kintsugi?",
    options: [
        { text: "A Japanese meditation technique for stress relief", correct: false },
        { text: "The practice of repairing broken pottery with gold", correct: true },
        { text: "A breathing exercise for finding inner calm", correct: false },
        { text: "A minimalist Japanese garden design style", correct: false }
    ],
    explanation: "Kintsugi is the art of repairing broken pottery with gold lacquer, treating cracks as part of the object's history rather than something to hide. It's the ultimate expression of wabi-sabi — beauty in imperfection.",
    visual: {
        type: "diagram",
        svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
            <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">KNOWLEDGE CHECK</text>
            <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
            <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="24">KINTSUGI</text>
            <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="20">Broken pottery repaired with gold</text>
            <text x="550" y="260" text-anchor="middle" fill="#888" font-size="18">Cracks become the most beautiful part</text>
        </svg>`,
        caption: "Test your understanding"
    }
}
```

---

### 6. QUOTE Card

**Purpose:** Memorable wisdom, emotional resonance, pause for reflection.

**Must Include:**
- Relevant quote from the book author or a recognized expert
- Attribution
- An SVG visual (can be a styled quote card design)

```javascript
{
    type: "quote",
    content: "We can be blind to the obvious, and we are also blind to our blindness.",
    author: "Daniel Kahneman",
    visual: {
        type: "diagram",
        svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
            <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">WISDOM</text>
            <rect x="100" y="150" width="900" height="200" rx="20" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" stroke-width="2"/>
            <text x="150" y="220" text-anchor="start" fill="#fff" font-style="italic" font-size="24">"We can be blind to the obvious,</text>
            <text x="150" y="265" text-anchor="start" fill="#fff" font-style="italic" font-size="24">and we are also blind to our blindness."</text>
            <text x="850" y="320" text-anchor="end" fill="#8b5cf6" font-size="20">— Daniel Kahneman</text>
        </svg>`,
        caption: "A moment of reflection"
    }
}
```

---

### 7. APPLICATION Card

**Purpose:** Bridge learning to action — make the knowledge immediately useful.

**Must Include:**
- Specific actions they can take TODAY (not "someday")
- Numbered steps (3-5 actions)
- Realistic, achievable tasks
- Direct connection to their actual life
- An SVG visual showing the steps or action plan

**Content Length:** 100-200 words

```javascript
{
    type: "application",
    title: "Your Forest Bathing Practice",
    content: "**Plan your session today:**\n\n1. **Find your spot** — a park, garden, or tree-lined street\n\n2. **Set aside 20 minutes** — no phone, no earbuds, no agenda\n\n3. **Walk slowly** — half your normal speed\n\n4. **Engage all five senses** — deliberately notice what each sense receives\n\n5. **Stop and sit** — for at least 5 minutes, just be still",
    visual: {
        type: "diagram",
        svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
            <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="40">YOUR PRACTICE</text>
            <text x="550" y="100" text-anchor="middle" fill="#888" font-size="27">Five steps to your first forest bath</text>
            <rect x="150" y="170" width="800" height="80" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
            <text x="200" y="220" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="22">1.</text>
            <text x="240" y="220" text-anchor="start" fill="#fff" font-size="20">Find your spot</text>
            <rect x="150" y="290" width="800" height="80" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
            <text x="200" y="340" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="22">2.</text>
            <text x="240" y="340" text-anchor="start" fill="#fff" font-size="20">Set aside 20 minutes</text>
            <rect x="150" y="410" width="800" height="80" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
            <text x="200" y="460" text-anchor="start" fill="#10b981" font-weight="bold" font-size="22">3.</text>
            <text x="240" y="460" text-anchor="start" fill="#fff" font-size="20">Walk at half your normal speed</text>
            <rect x="150" y="530" width="800" height="80" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
            <text x="200" y="580" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="22">4.</text>
            <text x="240" y="580" text-anchor="start" fill="#fff" font-size="20">Engage all five senses</text>
            <rect x="150" y="650" width="800" height="80" rx="20" fill="rgba(236,72,153,0.12)" stroke="#ec4899" stroke-width="2"/>
            <text x="200" y="700" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="22">5.</text>
            <text x="240" y="700" text-anchor="start" fill="#fff" font-size="20">Stop and sit for 5 minutes</text>
        </svg>`,
        caption: "Today's action plan"
    }
}
```

---

## Content Quality Standards

### Writing Style
- **Conversational**: Write like you're explaining to a smart friend over coffee
- **Active voice**: "You will discover" not "It will be discovered"
- **Second person**: "You" not "the learner" or "one"
- **Present tense**: "This is" not "This will be"
- **Concrete over abstract**: Specific names, numbers, places — not vague generalizations
- **Depth over brevity**: If a concept deserves more explanation, give it more. Don't sacrifice understanding for word count.

### Formatting
- Use `**bold**` for key terms and emphasis
- Use bullet points with `\n•` for lists
- Use `\n\n` for paragraph breaks
- Keep paragraphs to 3-4 sentences max
- Use numbered lists for sequential steps

### Length Guidelines
| Card Type | Word Count |
|-----------|------------|
| Intro | 100-200 words |
| Concept | 150-300 words |
| Example | 100-250 words |
| Application | 100-200 words |
| Quiz explanation | 50-100 words |
| Quote | The quote + brief context |

---

## SVG Visual Standards

### CRITICAL: Standard Canvas Size
**ALL SVGs MUST use `viewBox="0 0 1100 1100"`**

This ensures:
- Large, readable text
- Professional, non-cramped layouts
- Consistent appearance across all lessons
- Proper scaling on all screen sizes

### Every SVG Starts With:
```svg
<svg viewBox="0 0 1100 1100" class="lesson-visual">
    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="40">TITLE</text>
    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="27">Subtitle</text>
    <!-- Content below -->
</svg>
```

### Color Palette
```
Indigo:      #6366f1     rgba(99,102,241,0.15)    — Primary accent
Violet:      #8b5cf6     rgba(139,92,246,0.15)    — Secondary accent
Green:       #10b981     rgba(16,185,129,0.15)    — Success, positive
Amber:       #f59e0b     rgba(245,158,11,0.15)    — Warning, highlight
Red:         #ef4444     rgba(239,68,68,0.1)      — Alert, negative
Blue:        #3b82f6     rgba(59,130,246,0.15)    — Info
Pink:        #ec4899     rgba(236,72,153,0.1)     — Fun, accent
Teal:        #14b8a6     rgba(20,184,166,0.15)    — Accent, arrows
Gold:        #ffd700     rgba(255,215,0,0.1)      — Titles, highlights
White:       #fff                                   — Primary text
Gray:        #888                                   — Secondary text
Background:  #1a1a2e                                — Dark background
```

### Text Size Standards
```
Main title:      font-size="40"    max ~27 chars    y="55"
Subtitle:        font-size="27"    max ~38 chars    y="100"
Section header:  font-size="24-26" max ~45 chars    bold, colored
Body text:       font-size="20-22" max ~55 chars    fill="#fff"
Secondary text:  font-size="18"    max ~60 chars    fill="#888"
Small text:      font-size="16"    max ~65 chars
```

### CRITICAL: Text Must Stay Inside Box Borders

**Maximum characters per line by font size:**
| Font Size | Max Chars | Recommended Box Width |
|-----------|-----------|----------------------|
| 40px | ~27 chars | 900-1000px |
| 34-36px | ~32 chars | 900-1000px |
| 26-30px | ~45 chars | 800-900px |
| 22-24px | ~55 chars | 700-800px |
| 18-20px | ~60 chars | 600-700px |
| 16px | ~70 chars | 600px |

### Padding & Spacing Rules
1. **Padding**: Always leave **40-60px** padding inside boxes — text must NEVER touch edges
2. **Line spacing**: **30-40px** vertical spacing between text lines
3. **Split long text**: Always break sentences that exceed max chars into multiple `<text>` elements
4. **Center calculation**: For box at `x=150, width=800`, center text at `x=550` (that's `150 + 800/2`)
5. **Vertical start**: For box at `y=200, height=160`, first text at `y=250` (that's `200 + 50px padding`)

**Properly Contained Text Example:**
```svg
<!-- Box at x=150, width=800 → center is x=550 -->
<rect x="150" y="200" width="800" height="160" rx="20" fill="rgba(99,102,241,0.15)" stroke="#6366f1" stroke-width="2"/>
<!-- Title with 50px top padding: y = 200 + 50 = 250 -->
<text x="550" y="250" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="24">SECTION TITLE</text>
<!-- Body text with 40px line spacing -->
<text x="550" y="295" text-anchor="middle" fill="#fff" font-size="20">First line of content here</text>
<text x="550" y="335" text-anchor="middle" fill="#888" font-size="18">Second line with smaller text</text>
```

**Common Mistakes to AVOID:**
- Text extending past box edges (always verify: `boxX + 40 < textX < boxX + boxWidth - 40`)
- Font too large for box width (use the character count table above)
- Not splitting long sentences into multiple `<text>` lines
- Insufficient vertical spacing causing text overlap (minimum 30px between lines)
- Forgetting `text-anchor="middle"` when centering

### Box Transparency Values
```
rgba(99,102,241,0.12-0.15)   indigo box background
rgba(139,92,246,0.12-0.15)   violet box background
rgba(16,185,129,0.12-0.15)   green box background
rgba(245,158,11,0.12-0.15)   amber box background
rgba(239,68,68,0.1)          red box background
rgba(59,130,246,0.15)        blue box background
rgba(236,72,153,0.1)         pink box background
rgba(20,184,166,0.15)        teal box background
rgba(255,215,0,0.1)          gold box background
rgba(255,255,255,0.05)       subtle gray background
```

---

## SVG Layout Templates

### Two-Column Comparison
```svg
<rect x="60" y="170" width="460" height="320" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
<text x="290" y="220" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="24">LEFT TITLE</text>
<text x="290" y="265" text-anchor="middle" fill="#fff" font-size="20">Content line 1</text>
<text x="290" y="300" text-anchor="middle" fill="#888" font-size="18">Content line 2</text>

<rect x="580" y="170" width="460" height="320" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
<text x="810" y="220" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="24">RIGHT TITLE</text>
<text x="810" y="265" text-anchor="middle" fill="#fff" font-size="20">Content line 1</text>
<text x="810" y="300" text-anchor="middle" fill="#888" font-size="18">Content line 2</text>
```

### Three-Column Grid
```svg
<rect x="80" y="170" width="300" height="180" rx="20" fill="rgba(99,102,241,0.15)" stroke="#6366f1" stroke-width="2"/>
<text x="230" y="225" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">COL 1</text>
<text x="230" y="265" text-anchor="middle" fill="#fff" font-size="18">Description</text>

<rect x="400" y="170" width="300" height="180" rx="20" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
<text x="550" y="225" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">COL 2</text>
<text x="550" y="265" text-anchor="middle" fill="#fff" font-size="18">Description</text>

<rect x="720" y="170" width="300" height="180" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
<text x="870" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">COL 3</text>
<text x="870" y="265" text-anchor="middle" fill="#fff" font-size="18">Description</text>
```

### Four-Box Grid
```svg
<rect x="80" y="170" width="440" height="160" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
<text x="300" y="235" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">BOX 1</text>
<text x="300" y="275" text-anchor="middle" fill="#888" font-size="18">Description</text>

<rect x="580" y="170" width="440" height="160" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
<text x="800" y="235" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">BOX 2</text>
<text x="800" y="275" text-anchor="middle" fill="#888" font-size="18">Description</text>

<rect x="80" y="390" width="440" height="160" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
<text x="300" y="455" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">BOX 3</text>
<text x="300" y="495" text-anchor="middle" fill="#888" font-size="18">Description</text>

<rect x="580" y="390" width="440" height="160" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
<text x="800" y="455" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">BOX 4</text>
<text x="800" y="495" text-anchor="middle" fill="#888" font-size="18">Description</text>
```

### Stacked Steps (for application/process cards)
```svg
<rect x="150" y="170" width="800" height="80" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
<text x="200" y="220" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="22">1.</text>
<text x="240" y="220" text-anchor="start" fill="#fff" font-size="20">First step description</text>
<!-- Repeat with y+120 for each step, cycling through colors -->
```

### Flow Diagram (4 steps with arrows)
```svg
<rect x="60" y="200" width="220" height="100" rx="15" fill="rgba(239,68,68,0.2)" stroke="#ef4444" stroke-width="2"/>
<text x="170" y="260" text-anchor="middle" fill="#fff" font-size="20">Step 1</text>

<path d="M280 250 L340 250" stroke="#14b8a6" stroke-width="2"/>
<polygon points="340,250 328,242 328,258" fill="#14b8a6"/>

<rect x="340" y="200" width="220" height="100" rx="15" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="2"/>
<text x="450" y="260" text-anchor="middle" fill="#fff" font-size="20">Step 2</text>

<path d="M560 250 L620 250" stroke="#14b8a6" stroke-width="2"/>
<polygon points="620,250 608,242 608,258" fill="#14b8a6"/>

<rect x="620" y="200" width="220" height="100" rx="15" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="2"/>
<text x="730" y="260" text-anchor="middle" fill="#fff" font-size="20">Step 3</text>

<path d="M840 250 L900 250" stroke="#14b8a6" stroke-width="2"/>
<polygon points="900,250 888,242 888,258" fill="#14b8a6"/>

<rect x="900" y="200" width="140" height="100" rx="15" fill="rgba(99,102,241,0.2)" stroke="#6366f1" stroke-width="2"/>
<text x="970" y="260" text-anchor="middle" fill="#fff" font-size="20">Step 4</text>
```

### Circle Nodes (for concept maps)
```svg
<circle cx="200" cy="400" r="65" fill="rgba(59,130,246,0.3)" stroke="#3b82f6" stroke-width="2"/>
<text x="200" y="407" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="20">Node 1</text>

<circle cx="550" cy="400" r="65" fill="rgba(236,72,153,0.3)" stroke="#ec4899" stroke-width="2"/>
<text x="550" y="407" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="20">Node 2</text>

<circle cx="900" cy="400" r="65" fill="rgba(16,185,129,0.3)" stroke="#10b981" stroke-width="2"/>
<text x="900" y="407" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">Node 3</text>
```

### Connecting Elements
```svg
<!-- Solid arrow -->
<path d="M360 250 L400 250" stroke="#14b8a6" stroke-width="2"/>
<polygon points="400,250 388,242 388,258" fill="#14b8a6"/>

<!-- Dashed connecting line -->
<line x1="340" y1="340" x2="550" y2="260" stroke="#ffd700" stroke-width="2" stroke-dasharray="6" opacity="0.5"/>
```

### Summary Takeaway Bar
```svg
<rect x="200" y="600" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
<text x="550" y="650" text-anchor="middle" fill="#ffd700" font-size="22">Key takeaway text here</text>
```

### Quiz Knowledge Check Header
```svg
<text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">KNOWLEDGE CHECK</text>
<rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
<text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="24">CONCEPT NAME</text>
<text x="550" y="225" text-anchor="middle" fill="#fff" font-size="20">One-line summary</text>
<text x="550" y="260" text-anchor="middle" fill="#888" font-size="18">Supporting detail</text>
```

---

## Complete Lesson Template

```javascript
{
    id: 1,
    title: "Lesson Title: Compelling Subtitle",
    duration: 7,  // minutes (~40-45 sec per card)
    completed: false,
    cards: [
        // CARD 1: INTRO — Hook them immediately
        {
            type: "intro",
            title: "Hook Question or Vivid Scenario?",
            content: "Opening that creates curiosity and emotional investment. Why this matters to YOUR life. 100-200 words.",
            visual: { type: "diagram", svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">...</svg>`, caption: "Visual hook" }
        },
        // CARD 2: CONCEPT — First core idea
        {
            type: "concept",
            title: "First Core Concept",
            content: "Clear explanation with **bold terms** and bullet points. 150-300 words.",
            visual: { type: "diagram", svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">...</svg>`, caption: "Concept 1 visualized" }
        },
        // CARD 3: VISUAL — Reinforce concept 1
        {
            type: "visual",
            title: "Seeing the Concept",
            content: "Brief supporting context for the visual.",
            visual: { type: "diagram", svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">...</svg>`, caption: "Concept diagram" }
        },
        // CARD 4: EXAMPLE — Make concept 1 real
        {
            type: "example",
            title: "Real-World Application",
            content: "Concrete scenarios with specific details. 100-250 words.",
            visual: { type: "diagram", svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">...</svg>`, caption: "Examples illustrated" }
        },
        // CARD 5: QUIZ — Test concept 1
        {
            type: "quiz",
            question: "Question testing concept 1?",
            options: [
                { text: "Plausible wrong answer", correct: false },
                { text: "Correct answer", correct: true },
                { text: "Common misconception", correct: false },
                { text: "Partially correct but incomplete", correct: false }
            ],
            explanation: "Why the correct answer is right. 50-100 words.",
            visual: { type: "diagram", svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">...</svg>`, caption: "Concept check" }
        },
        // CARD 6: CONCEPT — Second core idea
        {
            type: "concept",
            title: "Second Core Concept",
            content: "Second major teaching point. 150-300 words.",
            visual: { type: "diagram", svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">...</svg>`, caption: "Concept 2 visualized" }
        },
        // CARD 7: CONCEPT/VISUAL — Deepen concept 2
        {
            type: "concept",
            title: "Going Deeper",
            content: "Deeper layer or third concept. More knowledge is better.",
            visual: { type: "diagram", svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">...</svg>`, caption: "Deeper understanding" }
        },
        // CARD 8: EXAMPLE — Make concept 2 real
        {
            type: "example",
            title: "More Real-World Proof",
            content: "Additional concrete examples. 100-250 words.",
            visual: { type: "diagram", svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">...</svg>`, caption: "More proof" }
        },
        // CARD 9: APPLICATION — Bridge to action
        {
            type: "application",
            title: "Apply This Today",
            content: "1. **Action one**: Description\n\n2. **Action two**: Description\n\n3. **Action three**: Description",
            visual: { type: "diagram", svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">...</svg>`, caption: "Your action plan" }
        },
        // CARD 10: QUIZ — Final assessment
        {
            type: "quiz",
            question: "Final assessment question?",
            options: [
                { text: "Option A", correct: false },
                { text: "Option B", correct: true },
                { text: "Option C", correct: false },
                { text: "Option D", correct: false }
            ],
            explanation: "Why B is correct. Tie back to the lesson's core message.",
            visual: { type: "diagram", svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">...</svg>`, caption: "Final check" }
        }
        // CARDS 11+: Add more if the concept demands it!
    ]
}
```

---

## Quality Checklist

Before considering a book complete, verify ALL of the following:

### Book Level
- [ ] 12 or more lessons (no maximum for college-depth categories)
- [ ] Total duration is 70-100 minutes (uncapped for college-depth categories)
- [ ] `lessons` count matches actual lesson count
- [ ] `duration` matches sum of lesson durations
- [ ] `id` is unique across all books
- [ ] `category` matches an existing category id
- [ ] `description` is compelling and under 2 sentences
- [ ] Lesson 1 hooks the reader into the book's worldview
- [ ] Lesson 12 synthesizes all concepts into a cohesive whole

### Per Lesson
- [ ] **Minimum 10 cards** (no maximum for college-depth categories — use as many as needed)
- [ ] Starts with an engaging `intro` card
- [ ] At least **2 quiz cards** (mid-lesson + end)
- [ ] At least 1 `application` card with specific actions
- [ ] At least 2 `example` cards with concrete scenarios
- [ ] Logical flow from concept to concept
- [ ] Duration is 6-8 minutes

### Visuals
- [ ] **Every single card** has a `visual` property with SVG — no exceptions
- [ ] All SVGs use `viewBox="0 0 1100 1100"`
- [ ] All SVGs have dark background `fill="#1a1a2e"`
- [ ] **Text stays inside box borders** (40-60px padding verified)
- [ ] Text sizes follow the standard hierarchy
- [ ] Colors from the approved palette only
- [ ] All visuals have descriptive captions

### Content
- [ ] Conversational "you" tone throughout
- [ ] Key terms bolded with `**term**`
- [ ] Specific details (names, numbers, dates, places)
- [ ] Real-world examples — not abstract
- [ ] Actionable takeaways in every application card

### Quizzes
- [ ] Exactly 4 options per quiz
- [ ] Plausible wrong answers (common misconceptions, partial truths)
- [ ] Detailed explanations (50-100 words)
- [ ] Tests understanding, not memorization
- [ ] References concepts taught in that lesson
- [ ] Each quiz card has an SVG visual

### Engagement
- [ ] Would YOU want to keep swiping through these cards?
- [ ] Is there at least one "wow, I didn't know that" moment per lesson?
- [ ] Does every lesson connect to the learner's actual life?
- [ ] Does completing the book make the learner feel genuinely smarter?

---

## Anti-Patterns (Never Do These)

### Bad Intro
```javascript
// WRONG — Boring, academic, no hook
{ type: "intro", title: "Introduction", content: "This lesson covers Japanese spirituality." }

// RIGHT — Compelling, personal, creates curiosity
{ type: "intro", title: "What If Everything Around You Was Alive?", content: "In Japan, there is an ancient phrase..." }
```

### Missing Visual
```javascript
// WRONG — Any card without a visual property
{ type: "concept", title: "The Process", content: "Imagine a flowchart..." }

// RIGHT — Every card has a visual
{ type: "concept", title: "The Process", content: "...", visual: { type: "diagram", svg: `<svg>...</svg>`, caption: "..." } }
```

### Text Overflow in SVG
```svg
<!-- WRONG: 55-char text at font-size 26 in a 400px box -->
<rect x="100" y="200" width="400" height="100"/>
<text x="300" y="250" font-size="26">This long sentence will overflow the box on both sides</text>

<!-- RIGHT: Split into lines, reduced font, proper padding -->
<rect x="100" y="200" width="400" height="120"/>
<text x="300" y="245" text-anchor="middle" font-size="18">This text is properly split</text>
<text x="300" y="275" text-anchor="middle" font-size="18">across two sized lines</text>
```

### Weak Quiz Distractors
```javascript
// WRONG — Obviously wrong answers
options: [
    { text: "The correct answer about ikigai", correct: true },
    { text: "Ikigai means pizza", correct: false },
    { text: "Nobody knows what it means", correct: false },
    { text: "All of the above", correct: false }
]

// RIGHT — Plausible distractors
options: [
    { text: "A small thing that gives your days quiet joy", correct: true },
    { text: "The intersection of passion, profession, mission, and vocation", correct: false },
    { text: "A career that perfectly aligns with your talents", correct: false },
    { text: "A philosophy only accessible through formal study", correct: false }
]
```

### Fewer Than 10 Cards
```
7 cards per lesson   // WRONG — below minimum, knowledge is being cut short
10+ cards per lesson // RIGHT — meets the standard, add more if needed
```

### Fewer Than 12 Lessons
```
8 lessons per book   // WRONG — the book isn't being covered in enough depth
12+ lessons per book // RIGHT — every major concept gets its own lesson
```

---

## Revision History

- **v1.0** — Initial standards based on Medical Terminology lesson analysis (January 2026)
- **v1.1** — SVG Size Standard Update: Changed from 700px to 1100x1100 viewBox
- **v2.0** — Major update (February 2026): Unified with BOOK-CREATION-TEMPLATE.md
  - Minimum lessons per book raised to **12**
  - Minimum cards per lesson raised to **10**
  - **Every card must have an SVG** — no exceptions (including quiz, example, application)
  - Added book-level requirements and metadata format
  - Added complete SVG layout templates (two-column, three-column, four-box, stacked steps, flow diagram, circle nodes, quiz header)
  - Added full lesson template with all 10 required cards
  - Expanded quality checklist to cover book-level and per-lesson verification
  - Added "more knowledge is better" philosophy — never truncate teaching to save cards
  - Consolidated all standards into one authoritative document
- **v2.1** — College-Depth Categories (February 2026):
  - Added **College-Depth Categories** section for 5 degree-program areas
  - HIM, Medical Coding, Data Analytics & Microsoft 365, Anatomy & Physiology
  - **NO lesson maximum** and **NO card maximum** for these categories
  - College-course depth required — semester-level coverage
  - Duration uncapped for these categories
  - Updated quality checklist to reflect unlimited rules

---

*The guiding principle: every lesson should make the learner feel like they've gained a superpower. Every book should feel like the best 90 minutes they've ever spent learning. If it doesn't hit that bar, it's not done yet. Add more cards, more depth, more examples — the more knowledge the better.*
