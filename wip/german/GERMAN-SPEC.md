# SHARED SPEC — German From Scratch (book id `german-foundations`)

You are writing **exactly one lesson** of a 20-lesson German course for a learning app.
Read this whole file before writing.

---

## THE BOOK

**Title:** German From Scratch: Speak, Read and Understand
**Category:** `languages`
**Who it is for:** an English-speaking adult beginner. No prior German assumed.

**The promise:** by the end they can introduce themselves, handle shops, restaurants, stations
and hotels, describe people and routines, talk about the past and the future, and read German
with real comprehension — including the long compound words that look terrifying and are not.

### THE HONEST CONSTRAINT

**The app has no audio.** No sound files, no speech synthesis.

German sits between Spanish and French for a text-only course: its spelling is quite regular —
far more so than French — so written rules genuinely work for most of the sound system. A
handful of sounds still need to be heard (the two ch sounds, the r, ü and ö). Lesson 2 should
teach the rules with justified confidence, name the handful that need audio, and tell the
reader to pair the course with hearing real German — without the heavier warnings the French
course needed.

Respelling convention, used consistently: English-reader approximation in capitals with
hyphens, stressed syllable in bold-caps context (write it as the emphasized syllable in caps):
**danke** → DAHN-kuh · **entschuldigung** → ent-SHOOL-dee-goong · **ich** → ish (with the note
that the ch is softer than English sh — a sound to confirm by ear).
For ü write ue-with-rounded-lips guidance once in lesson 2, then respell as "ue" (**für** →
fuer → FYOOR approximation with the caveat).

### What makes German genuinely different — the spine of the course

German's difficulty is not sounds or spelling; it is **grammar architecture**: three genders,
four cases, verb-second word order, separable verbs, and the verb-at-the-end rule in
subordinate clauses. The course must teach these as a coherent system, honestly, without
drowning a beginner. Cases are introduced gradually: nominative from the start, accusative in
lesson 5, dative in lesson 12, genitive named-and-deferred. Do not front-load the full case
table in an early lesson.

### The 20 lessons — stay strictly in your lane

1. Hallo: The Language English Grew Up Next To
2. The Sound System: Rules You Can Actually Trust
3. Nouns, der/die/das, and Why Every Noun Is Capitalised
4. Sein and Haben: The Two Verbs Everything Rests On
5. The Present Tense, and Your First Case: the Accusative
6. The Irregulars and Modals: können, müssen, wollen, mögen, gehen, fahren
7. Word Order: The Verb-Second Rule That Runs Everything
8. Numbers, Time and Dates
9. Adjectives, Comparisons, and Compound Words Decoded
10. People, Family and Introducing Yourself
11. Food, Restaurants and Shopping
12. Travel, Directions and the Dative Case
13. Separable Verbs and Your Daily Routine
14. The Perfekt: Talking About What Happened
15. The Präteritum You Actually Need: war, hatte and the Modals
16. The Future, werden, and Talking About Plans
17. Pronouns Across the Cases, and the Famous German "es"
18. Commands, Subordinate Clauses, and the Verb at the End
19. Real Conversation: du vs Sie, Fillers and Politeness
20. Weitermachen: How to Actually Get Fluent

---

## YOUR OUTPUT

Write **one file** to:

`/tmp/claude-0/-home-user-synthesis-learning-app/54bfc152-433c-5de5-937d-92794f2fb10f/scratchpad/de-lN.js`

A **single bare JavaScript object literal** — no `const`, no `module.exports`, no `window.X =`,
no trailing semicolon, no markdown fences. Valid as `({ ...your file... })`.

```javascript
{
    id: "de-lN",
    title: "<exact title from the list above>",
    duration: "15 min",
    description: "One sentence, 15-30 words.",
    cards: [ /* card objects */ ]
}
```

**Cards: exactly 14. Quizzes: exactly 4.**

### HARD PROCESS RULE — build the file incrementally

Write the object opening plus the first ~4 cards with the Write tool, then append the rest
with a series of small Edit calls (3–4 cards each). Close the array and object on your final
Edit. Do not attempt the whole file in one call.

### HARD SCOPE RULE

Do **not** write, edit, or create anything inside `/home/user/synthesis-learning-app/`.

---

## CARD RULES

**Every card — including every quiz card — must have a full SVG visual with a `caption`.**
A missing caption fails the build.

**Card types:** `intro`, `concept`, `visual`, `example`, `quiz`, `application`, `quote`.
Non-quiz cards need `title` and `content`. Quiz cards need `question`, `options`, `explanation`
— and **must not** have `title` or `content`. Exactly 4 options, exactly 1 correct. Vary the
position of the correct answer.

**Quiz style:** test production and comprehension — "which sentence is correct", "what does
this mean", "which form fits the gap" — not "what is the German for X".

### Formatting inside `content`
- `**bold**` for German words and phrases on first use
- `\n•` for bullets, `\n\n` for paragraph breaks
- Second person, present tense, warm but never patronising
- **Write literal characters, never HTML entities.** German umlauts and ß in prose must be
  real characters: **ä ö ü ß**. Writing `&auml;` or `&#228;` is a build failure.

### Teaching a German item — the required pattern
Give the German, the respelling, the literal English where it differs, and a natural
translation. Then a sentence the learner could actually say.

```
**Es gibt**  (es GIPT)  — literally "it gives", meaning "there is" or "there are"
```

Aim for **15–25 new German items per lesson** in vocabulary-led lessons, fewer where grammar
depth matters more.

---

## SVG RULES (a build-time checker enforces these — violations abort the build)

1. Open with exactly `<svg viewBox="0 0 1100 1100" class="lesson-visual">`
2. First child exactly `<rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>`
3. Title line: `<text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">TITLE</text>`
4. **Every `&` inside SVG must be written `&amp;`.**
5. **ASCII-ONLY INSIDE SVG.** Umlauts and ß are unreliable in these inline SVGs. Inside
   `<text>` use the standard German ASCII fallbacks, which are themselves correct German
   orthography: **ae oe ue ss** — schoen, fuer, heisst, Strasse. Keep the real umlauts in card
   `content`, where they render correctly. Where the umlaut itself is the teaching point,
   describe it in words ("a with two dots") rather than rendering the character.
6. **Only these colors:** `#6366f1` `#8b5cf6` `#10b981` `#f59e0b` `#ef4444` `#3b82f6`
   `#ec4899` `#14b8a6` `#ffd700` `#fff` `#888` `#1a1a2e`, with matching rgba box fills.
7. **Text must stay inside its box.** Max chars per line: 36px→27 · 26-30px→45 · 22-24px→55 ·
   18-20px→60 · 16px→70. Split long strings. 40–60px padding inside boxes, 30–40px line
   spacing.
8. Use the full canvas — reach toward y=1000.
9. **Vary layouts.** German earns particular diagrams: der/die/das three-way splits, case
   tables built gradually, verb-second slot diagrams, separable-verb bracket diagrams,
   compound-word decomposition chains, sentence-frame visuals for the verb-at-the-end rule.
   Never repeat a layout on consecutive cards.

---

## ACCURACY RULES

- Correct standard German (Hochdeutsch) throughout. Where usage differs, say so rather than
  choosing silently: Austrian and Swiss variants where genuinely relevant (Grüezi, Servus,
  Jänner), the ß-vs-ss difference in Switzerland (no ß there).
- Gender and case endings must be right everywhere. A wrong der/die/das in a teaching example
  is a serious defect.
- Do not invent idioms. Do not assert frequency data.
- Name the errors English speakers reliably make: false friends (**Gift** means poison,
  **bekommen** means to receive not become, **Chef** means boss, **also** means "so/well",
  **Rat** means advice, **fast** means almost, **bald** means soon), capitalising nouns,
  the verb-second rule, and pronouncing **w** as English w instead of v.

---

## YOUR ASSIGNMENT

Your lesson number, title, and the ground to cover are in the accompanying message.
