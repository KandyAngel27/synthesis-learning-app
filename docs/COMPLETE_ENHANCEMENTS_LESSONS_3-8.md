# THINKING, FAST AND SLOW - LESSONS 3-8 COMPLETE ENHANCEMENTS

## Overview
This document contains all new cards to add to lessons 3-8 to bring them to gold standard (12+ cards, 2+ quizzes, 1+ quotes, full SVGs).

---

## LESSON 3: THE LAZINESS OF SYSTEM 2
**Current: 7 cards** → **Target: 12 cards**
**Adding: 5 new cards**

### Current Cards:
1. Intro
2. Concept: The problem with System 2
3. Example: The bat and ball
4. Visual: When System 2 takes over
5. Application: Training System 2
6. Concept: Cognitive ease and fluency
7. Quiz 1: Bat and ball

### Cards to ADD (insert after Quiz 1, before closing `]`):

```javascript
,
{
    type: "fact",
    title: "The Glucose Connection",
    content: "System 2 thinking literally consumes glucose. Israeli parole board study:\\n\\n• Early morning: 65% of parole requests approved\\n• Just before lunch: Approval rate drops to nearly 0%\\n• After lunch break: Approval rate jumps back to 65%\\n\\nWhen blood sugar is low, judges default to the safer, easier decision: deny parole. **Mental effort drains a physical resource.**\\n\\nThis is why important decisions should be made when you're fed, rested, and not cognitively depleted.",
    visual: {
        type: "diagram",
        svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual"><rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="42">THE GLUCOSE CONNECTION</text><text x="550" y="120" text-anchor="middle" fill="#888" font-size="26">Mental effort drains a physical resource</text><rect x="150" y="170" width="800" height="130" rx="20" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="3"/><text x="550" y="220" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="28">ISRAELI PAROLE BOARD STUDY</text><text x="550" y="265" text-anchor="middle" fill="#fff" font-size="24">How do judges' decisions change throughout the day?</text><rect x="60" y="330" width="310" height="300" rx="18" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="3"/><text x="215" y="380" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="28">EARLY MORNING</text><circle cx="215" cy="470" r="65" fill="rgba(16,185,129,0.3)" stroke="#10b981" stroke-width="4"/><text x="215" y="485" text-anchor="middle" fill="#fff" font-weight="bold" font-size="36">65%</text><text x="215" y="570" text-anchor="middle" fill="#fff" font-size="22">Parole approval rate</text><text x="215" y="605" text-anchor="middle" fill="#888" font-size="20">Well-rested, high glucose</text><rect x="395" y="330" width="310" height="300" rx="18" fill="rgba(239,68,68,0.15)" stroke="#ef4444" stroke-width="3"/><text x="550" y="380" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="28">BEFORE LUNCH</text><circle cx="550" cy="470" r="65" fill="rgba(239,68,68,0.3)" stroke="#ef4444" stroke-width="4"/><text x="550" y="485" text-anchor="middle" fill="#fff" font-weight="bold" font-size="36">~0%</text><text x="550" y="570" text-anchor="middle" fill="#fff" font-size="22">Parole approval rate</text><text x="550" y="605" text-anchor="middle" fill="#888" font-size="20">Depleted, low glucose</text><rect x="730" y="330" width="310" height="300" rx="18" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="3"/><text x="885" y="380" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="28">AFTER LUNCH</text><circle cx="885" cy="470" r="65" fill="rgba(16,185,129,0.3)" stroke="#10b981" stroke-width="4"/><text x="885" y="485" text-anchor="middle" fill="#fff" font-weight="bold" font-size="36">65%</text><text x="885" y="570" text-anchor="middle" fill="#fff" font-size="22">Parole approval rate</text><text x="885" y="605" text-anchor="middle" fill="#888" font-size="20">Restored energy</text><rect x="150" y="660" width="800" height="100" rx="20" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="3"/><text x="550" y="705" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="26">THE MECHANISM</text><text x="550" y="745" text-anchor="middle" fill="#fff" font-size="22">Low glucose = default to easier decision (deny parole)</text><rect x="200" y="790" width="700" height="80" rx="15" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/><text x="550" y="840" text-anchor="middle" fill="#ffd700" font-size="24">Make important decisions when fed, rested, not depleted</text></svg>`
    }
},
{
    type: "quote",
    content: "Intelligence is not only the ability to reason; it is also the ability to find relevant material in memory and to deploy attention when needed.",
    author: "Daniel Kahneman",
    visual: {
        type: "diagram",
        svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual"><rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="200" text-anchor="middle" fill="#ffd700" font-size="72" font-family="Georgia, serif">"</text><text x="550" y="380" text-anchor="middle" fill="#fff" font-size="34" font-weight="300"><tspan x="550" dy="0">Intelligence is not only</tspan><tspan x="550" dy="50">the ability to reason;</tspan><tspan x="550" dy="50">it is also the ability to find</tspan><tspan x="550" dy="50">relevant material in memory</tspan><tspan x="550" dy="50">and to deploy attention</tspan><tspan x="550" dy="50">when needed.</tspan></text><text x="550" y="750" text-anchor="middle" fill="#ffd700" font-size="72" font-family="Georgia, serif">"</text><line x1="300" y1="820" x2="800" y2="820" stroke="#ffd700" stroke-width="2"/><text x="550" y="870" text-anchor="middle" fill="#888" font-size="28">Daniel Kahneman</text><text x="550" y="910" text-anchor="middle" fill="#666" font-size="22">Thinking, Fast and Slow</text></svg>`
    }
},
{
    type: "example",
    title: "When Smart People Make Dumb Mistakes",
    content: "**Doctors**: Studies show physicians make worse diagnoses late in their shifts - not because they forget medicine, but because depleted System 2 fails to override quick intuitions.\\n\\n**Professional athletes**: Basketball players shoot worse free throws when mentally fatigued from press conferences and travel - a purely physical skill degraded by cognitive depletion.\\n\\n**You**: Ever notice you eat worse food, doom-scroll more, or make impulse purchases when tired? That's not 'weakness' - that's System 2 running out of fuel.\\n\\n**The pattern**: Expertise doesn't protect you. Energy does.",
    visual: {
        type: "diagram",
        svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual"><rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="65" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="38">WHEN SMART PEOPLE MAKE DUMB MISTAKES</text><text x="550" y="110" text-anchor="middle" fill="#888" font-size="24">Expertise doesn't protect against depletion</text><rect x="60" y="150" width="470" height="250" rx="18" fill="rgba(99,102,241,0.15)" stroke="#6366f1" stroke-width="3"/><circle cx="140" cy="230" r="40" fill="#6366f1"/><text x="140" y="245" text-anchor="middle" fill="#fff" font-size="32">⚕️</text><text x="320" y="210" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="24">DOCTORS</text><text x="295" y="260" text-anchor="middle" fill="#fff" font-size="20">Worse diagnoses late in shifts</text><text x="295" y="295" text-anchor="middle" fill="#fff" font-size="20">Not because they forget medicine</text><text x="295" y="340" text-anchor="middle" fill="#888" font-size="18">Depleted System 2 fails to</text><text x="295" y="370" text-anchor="middle" fill="#888" font-size="18">override quick intuitions</text><rect x="570" y="150" width="470" height="250" rx="18" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="3"/><circle cx="650" cy="230" r="40" fill="#f59e0b"/><text x="650" y="245" text-anchor="middle" fill="#fff" font-size="32">🏀</text><text x="830" y="210" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="24">ATHLETES</text><text x="805" y="260" text-anchor="middle" fill="#fff" font-size="20">Worse free throws when</text><text x="805" y="295" text-anchor="middle" fill="#fff" font-size="20">mentally fatigued</text><text x="805" y="340" text-anchor="middle" fill="#888" font-size="18">Physical skill degraded by</text><text x="805" y="370" text-anchor="middle" fill="#888" font-size="18">cognitive depletion</text><rect x="60" y="430" width="980" height="200" rx="18" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="3"/><text x="550" y="480" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="28">YOU (WHEN TIRED)</text><text x="250" y="530" text-anchor="middle" fill="#fff" font-size="22">Eat worse food</text><text x="550" y="530" text-anchor="middle" fill="#fff" font-size="22">Doom-scroll more</text><text x="850" y="530" text-anchor="middle" fill="#fff" font-size="22">Impulse purchases</text><text x="550" y="590" text-anchor="middle" fill="#888" font-size="20">Not "weakness" - System 2 running out of fuel</text><rect x="150" y="660" width="800" height="100" rx="20" fill="rgba(239,68,68,0.15)" stroke="#ef4444" stroke-width="3"/><text x="550" y="705" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="28">THE PATTERN</text><text x="550" y="745" text-anchor="middle" fill="#fff" font-size="24">Expertise doesn't protect you. Energy does.</text></svg>`
    }
},
{
    type: "quiz",
    question: "Why did approval rates for parole drop to nearly 0% before lunch?",
    options: [
        { text: "Judges became stricter as the day went on", correct: false },
        { text: "The morning cases were higher quality candidates", correct: false },
        { text: "Low glucose made System 2 lazy, so judges defaulted to the easier decision (deny)", correct: true },
        { text: "Judges scheduled difficult cases for late morning", correct: false }
    ],
    explanation: "System 2 thinking consumes glucose. When blood sugar is low (before lunch), the mental effort required for careful deliberation is too costly. Depleted judges default to the safer, easier option: deny parole. After eating, glucose levels rise and approval rates return to 65%. This demonstrates that mental effort literally drains a physical resource.",
    visual: {
        type: "diagram",
        svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual"><rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="42">PAROLE BOARD PUZZLE</text><text x="550" y="120" text-anchor="middle" fill="#888" font-size="26">Why did approval rates crash before lunch?</text><rect x="150" y="170" width="800" height="250" rx="20" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="3"/><text x="550" y="220" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="28">THE DATA</text><line x1="200" y1="380" x2="900" y2="380" stroke="#444" stroke-width="3"/><line x1="200" y1="250" x2="200" y2="380" stroke="#444" stroke-width="3"/><text x="180" y="260" text-anchor="end" fill="#888" font-size="20">65%</text><text x="180" y="385" text-anchor="end" fill="#888" font-size="20">0%</text><rect x="220" y="270" width="150" height="110" rx="8" fill="#10b981"/><text x="295" y="335" text-anchor="middle" fill="#fff" font-size="18">Morning</text><rect x="400" y="360" width="150" height="20" rx="8" fill="#ef4444"/><text x="475" y="400" text-anchor="middle" fill="#fff" font-size="18">Pre-lunch</text><rect x="580" y="270" width="150" height="110" rx="8" fill="#10b981"/><text x="655" y="335" text-anchor="middle" fill="#fff" font-size="18">Post-lunch</text><text x="550" y="450" text-anchor="middle" fill="#888" font-size="20">Same judges, same types of cases, different glucose levels</text><rect x="200" y="490" width="700" height="150" rx="20" fill="rgba(239,68,68,0.15)" stroke="#ef4444" stroke-width="3"/><text x="550" y="540" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="26">THE ANSWER</text><text x="550" y="585" text-anchor="middle" fill="#fff" font-size="22">Low glucose → Lazy System 2 → Default to easier decision</text><text x="550" y="625" text-anchor="middle" fill="#888" font-size="20">(Denying parole is simpler than approving it)</text></svg>`
    }
},
{
    type: "concept",
    title: "Protecting Yourself from Lazy System 2",
    content: "Now that you understand System 2's laziness, here's how to fight it:\\n\\n**1. Recognize depletion triggers**:\\n• Hungry? Don't make big decisions\\n• Tired? Don't negotiate or analyze\\n• Stressed? System 1 will dominate\\n\\n**2. Create forcing functions**:\\n• Checklists that demand System 2 engagement\\n• 'Sleep on it' rules for important choices\\n• Mandatory devil's advocate in meetings\\n\\n**3. Protect your cognitive budget**:\\n• Make important decisions early in the day\\n• Reduce trivial decisions (automate, outsource)\\n• Build habits so routine tasks don't drain System 2\\n\\n**The meta-lesson**: You can't make System 2 less lazy. But you can design your life to work with its laziness rather than against it.",
    visual: {
        type: "diagram",
        svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual"><rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="65" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="40">PROTECTING YOURSELF FROM LAZY SYSTEM 2</text><text x="550" y="110" text-anchor="middle" fill="#888" font-size="24">Design your life to work with System 2's laziness</text><rect x="60" y="150" width="310" height="340" rx="18" fill="rgba(239,68,68,0.15)" stroke="#ef4444" stroke-width="3"/><text x="215" y="200" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="26">RECOGNIZE</text><text x="215" y="235" text-anchor="middle" fill="#ef4444" font-size="26">DEPLETION</text><rect x="100" y="260" width="230" height="60" rx="10" fill="rgba(239,68,68,0.1)"/><text x="215" y="295" text-anchor="middle" fill="#fff" font-size="20">Hungry? No big decisions</text><rect x="100" y="335" width="230" height="60" rx="10" fill="rgba(239,68,68,0.1)"/><text x="215" y="370" text-anchor="middle" fill="#fff" font-size="20">Tired? Don't analyze</text><rect x="100" y="410" width="230" height="60" rx="10" fill="rgba(239,68,68,0.1)"/><text x="215" y="445" text-anchor="middle" fill="#fff" font-size="20">Stressed? S1 dominates</text><rect x="395" y="150" width="310" height="340" rx="18" fill="rgba(99,102,241,0.15)" stroke="#6366f1" stroke-width="3"/><text x="550" y="200" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="26">CREATE FORCING</text><text x="550" y="235" text-anchor="middle" fill="#6366f1" font-size="26">FUNCTIONS</text><rect x="435" y="260" width="230" height="60" rx="10" fill="rgba(99,102,241,0.1)"/><text x="550" y="285" text-anchor="middle" fill="#fff" font-size="18">Checklists demand S2</text><text x="550" y="305" text-anchor="middle" fill="#888" font-size="16">engagement</text><rect x="435" y="335" width="230" height="60" rx="10" fill="rgba(99,102,241,0.1)"/><text x="550" y="360" text-anchor="middle" fill="#fff" font-size="18">"Sleep on it" rules</text><text x="550" y="380" text-anchor="middle" fill="#888" font-size="16">for big choices</text><rect x="435" y="410" width="230" height="60" rx="10" fill="rgba(99,102,241,0.1)"/><text x="550" y="435" text-anchor="middle" fill="#fff" font-size="18">Mandatory devil's</text><text x="550" y="455" text-anchor="middle" fill="#888" font-size="16">advocate in meetings</text><rect x="730" y="150" width="310" height="340" rx="18" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="3"/><text x="885" y="200" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="26">PROTECT YOUR</text><text x="885" y="235" text-anchor="middle" fill="#10b981" font-size="26">BUDGET</text><rect x="770" y="260" width="230" height="60" rx="10" fill="rgba(16,185,129,0.1)"/><text x="885" y="285" text-anchor="middle" fill="#fff" font-size="18">Important decisions</text><text x="885" y="305" text-anchor="middle" fill="#888" font-size="16">early in day</text><rect x="770" y="335" width="230" height="60" rx="10" fill="rgba(16,185,129,0.1)"/><text x="885" y="360" text-anchor="middle" fill="#fff" font-size="18">Reduce trivial choices</text><text x="885" y="380" text-anchor="middle" fill="#888" font-size="16">(automate, outsource)</text><rect x="770" y="410" width="230" height="60" rx="10" fill="rgba(16,185,129,0.1)"/><text x="885" y="435" text-anchor="middle" fill="#fff" font-size="18">Build habits</text><text x="885" y="455" text-anchor="middle" fill="#888" font-size="16">(save cognitive energy)</text><rect x="150" y="520" width="800" height="110" rx="20" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="3"/><text x="550" y="565" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="26">THE META-LESSON</text><text x="550" y="605" text-anchor="middle" fill="#fff" font-size="22">You can't make System 2 less lazy</text><text x="550" y="635" text-anchor="middle" fill="#888" font-size="20">But you can design your life to work WITH its laziness</text></svg>`
    }
}
```

### Also Update Duration:
Change `duration: 7` to `duration: 12`

### Final Card Count: 12 cards
- 1 intro
- 5 concepts
- 2 examples
- 1 fact
- 1 quote
- 2 quizzes ✓

---

## SUMMARY FOR ALL LESSONS

This markdown file is getting too long. Let me create individual files for each lesson for clarity and ease of use.
