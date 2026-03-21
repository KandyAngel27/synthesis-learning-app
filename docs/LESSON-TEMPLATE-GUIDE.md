# Synthesis Learning App - Lesson & SVG Template Guide

## Overview
This document provides templates and guidelines for creating consistent, visually appealing lessons with properly formatted SVG visuals.

---

## Lesson Structure

Each lesson contains an array of **cards** with different types:

### Card Types
| Type | Purpose | Has SVG |
|------|---------|---------|
| `intro` | Lesson introduction with overview | Yes |
| `concept` | Detailed content explanation | Yes |
| `visual` | Visual-focused card | Yes |
| `quiz` | Multiple choice question | No |

---

## SVG ViewBox Standards

### Standard Sizes
```
Full card:    viewBox="0 0 1100 1100"
Wide card:    viewBox="0 0 1100 700"
Tall card:    viewBox="0 0 1100 1024"
```

### Background
Always start with a dark background rectangle:
```svg
<rect x="0" y="0" width="1100" height="700" fill="#1a1a2e"/>
```

---

## Color Palette

### Primary Colors
| Color | Hex | Use Case |
|-------|-----|----------|
| Purple | `#8b5cf6` | Primary accent, headers |
| Blue | `#3b82f6` | Info boxes, links |
| Green | `#10b981` | Success, completion |
| Red | `#ef4444` | Alerts, important facts |
| Yellow/Gold | `#ffd700` / `#f59e0b` | Highlights, tips |
| Pink | `#ec4899` | Fun facts, secondary |

### Background Box Colors (with transparency)
```svg
<!-- Purple box -->
<rect fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>

<!-- Blue box -->
<rect fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>

<!-- Green box -->
<rect fill="rgba(16,185,129,0.15)" stroke="#10b981"/>

<!-- Red box -->
<rect fill="rgba(239,68,68,0.1)" stroke="#ef4444"/>

<!-- Yellow box -->
<rect fill="rgba(255,215,0,0.1)" stroke="#ffd700"/>

<!-- Pink box -->
<rect fill="rgba(236,72,153,0.1)" stroke="#ec4899"/>
```

---

## Text Sizing Guidelines

### CRITICAL: Preventing Text Overflow

**Maximum characters per line by font size:**
| Font Size | Max Chars | Box Width Needed |
|-----------|-----------|------------------|
| 36-38px | ~30 chars | 900-1000px |
| 28-32px | ~40 chars | 800-900px |
| 24-26px | ~50 chars | 700-800px |
| 20-22px | ~60 chars | 600-700px |
| 18px | ~70 chars | 600px |
| 16px | ~80 chars | 500px |

**Rules:**
1. Always split long text into multiple `<text>` elements
2. Leave 20-30px vertical spacing between lines
3. Add 40-60px padding inside boxes (text should not touch edges)
4. Use `text-anchor="middle"` for centered text

### Text Hierarchy
```svg
<!-- Main Title (top of card) -->
<text x="550" y="50" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="38">TITLE HERE</text>

<!-- Section Header -->
<text x="550" y="130" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="28">SECTION NAME</text>

<!-- Body Text -->
<text x="550" y="180" text-anchor="middle" fill="#fff" font-size="22">Main content text</text>

<!-- Secondary/Muted Text -->
<text x="550" y="210" text-anchor="middle" fill="#888" font-size="18">Supporting details</text>
```

---

## Common SVG Patterns

### Title Box at Top
```svg
<rect x="200" y="20" width="700" height="70" rx="35" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6"/>
<text x="550" y="65" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="32">CARD TITLE</text>
```

### Two-Column Layout
```svg
<!-- Left Column -->
<rect x="40" y="100" width="500" height="300" rx="15" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
<text x="290" y="150" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="26">LEFT TITLE</text>

<!-- Right Column -->
<rect x="560" y="100" width="500" height="300" rx="15" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
<text x="810" y="150" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="26">RIGHT TITLE</text>
```

### Bottom Summary Bar
```svg
<rect x="100" y="600" width="900" height="70" rx="35" fill="rgba(255,215,0,0.2)" stroke="#ffd700"/>
<text x="550" y="645" text-anchor="middle" fill="#ffd700" font-size="22">Summary or key takeaway here</text>
```

### Fact/Tip Box
```svg
<rect x="100" y="500" width="900" height="100" rx="15" fill="rgba(236,72,153,0.1)" stroke="#ec4899"/>
<text x="550" y="540" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="20">FUN FACT</text>
<text x="550" y="575" text-anchor="middle" fill="#fff" font-size="18">Interesting detail goes here</text>
```

### Feynman Test Ready Badge (Lesson Complete)
```svg
<rect x="100" y="600" width="900" height="80" rx="40" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="3"/>
<circle cx="180" cy="640" r="25" fill="#10b981"/>
<text x="180" y="650" text-anchor="middle" fill="#fff" font-size="32">✓</text>
<text x="570" y="630" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="26">FEYNMAN TEST READY</text>
<text x="570" y="660" text-anchor="middle" fill="#fff" font-size="20">You can explain this topic!</text>
```

---

## Complete Card Templates

### Intro Card Template
```javascript
{
    type: "intro",
    title: "Lesson Title Here",
    content: "Introduction text explaining what the lesson covers...",
    visual: {
        type: "diagram",
        svg: `<svg viewBox="0 0 1100 700" class="lesson-visual">
            <rect x="0" y="0" width="1100" height="700" fill="#1a1a2e"/>
            <text x="550" y="50" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="38">LESSON TITLE</text>

            <!-- Main content boxes here -->

            <rect x="200" y="600" width="700" height="60" rx="30" fill="rgba(16,185,129,0.2)" stroke="#10b981"/>
            <text x="550" y="640" text-anchor="middle" fill="#10b981" font-size="20">Key takeaway for this lesson</text>
        </svg>`,
        caption: "Brief caption describing the visual"
    }
}
```

### Concept Card Template
```javascript
{
    type: "concept",
    title: "Concept Name",
    content: "Detailed explanation of the concept...\n\n**Key Points:**\n• Point one\n• Point two\n• Point three",
    visual: {
        type: "diagram",
        svg: `<svg viewBox="0 0 1100 700" class="lesson-visual">
            <rect x="0" y="0" width="1100" height="700" fill="#1a1a2e"/>
            <text x="550" y="50" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="36">CONCEPT NAME</text>

            <!-- Visual representation of concept -->

        </svg>`,
        caption: "Caption here"
    }
}
```

### Quiz Card Template
```javascript
{
    type: "quiz",
    question: "What is the correct answer to this question?",
    options: [
        { text: "Wrong answer A", correct: false },
        { text: "Wrong answer B", correct: false },
        { text: "Correct answer C", correct: true },
        { text: "Wrong answer D", correct: false }
    ],
    explanation: "Explanation of why the correct answer is correct and why the others are wrong."
}
```

---

## Lesson Complete Modal

The app uses a styled modal instead of browser alerts. Key elements:
- Celebration icon (🎉)
- XP earned display
- Book progress bar
- "Continue" button returns to lesson list

---

## Checklist Before Submitting

- [ ] All text fits within box boundaries
- [ ] Long text split into multiple lines
- [ ] Consistent color scheme used
- [ ] viewBox matches content height
- [ ] Font sizes follow hierarchy
- [ ] Quiz has exactly 4 options with 1 correct
- [ ] Explanation provided for quiz
- [ ] Caption provided for visuals

---

## Common Fixes for Text Overflow

1. **Expand the box:**
   ```svg
   <!-- Before: too narrow -->
   <rect x="200" y="500" width="700" height="80"/>

   <!-- After: wider and taller -->
   <rect x="100" y="500" width="900" height="100"/>
   ```

2. **Split text into lines:**
   ```svg
   <!-- Before: one long line -->
   <text x="550" y="540">This is a very long line that will overflow the box boundaries</text>

   <!-- After: two lines -->
   <text x="550" y="530">This is a very long line that will</text>
   <text x="550" y="560">overflow the box boundaries</text>
   ```

3. **Reduce font size:**
   ```svg
   <!-- Before -->
   <text font-size="24">Long text here</text>

   <!-- After -->
   <text font-size="20">Long text here</text>
   ```
