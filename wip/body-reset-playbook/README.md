# WIP — The Body Reset Playbook

**Status: incomplete. 4 of 15 lessons written. Not wired into the app.**

Nothing in this folder is loaded by `index.html`. It is parked here so the
finished lessons survive; deleting the folder has no effect on the app.

## What this book is

The applied companion to *The Healthivora Body Reset* (merged in #344). Book one
taught the mechanisms; this one is the execution — what to cook, what to buy,
what to do in the gym.

Planned as **15 lessons**, category `health`, author `Synthesis Curriculum`.

## Lesson map

| # | Title | Status |
|---|-------|--------|
| 1 | The Plate Before the Plan | missing |
| 2 | Eat in Order, Eat Early | **done** — 19 cards |
| 3 | Breakfast: The Meal That Sets the Curve | **done** — 19 cards |
| 4 | Lunch That Does Not Cost You the Afternoon | **done** — 19 cards |
| 5 | Dinner: Protein, Two Vegetables, One Grain | missing |
| 6 | Your Seven-Day Meal Plan | missing |
| 7 | The Shopping List and the 30-Plant Rule | missing |
| 8 | Batch Day: Two Hours That Buy Back Your Week | missing |
| 9 | The Ten-Minute Walk That Beats Most Supplements | **done** — 18 cards |
| 10 | Strength Session A, Movement by Movement | missing |
| 11 | Strength Session B, Movement by Movement | missing |
| 12 | Progression: Getting Stronger Without Getting Hurt | missing |
| 13 | Zone 2 and Intervals: Building the Engine | missing |
| 14 | The Four-Week Ramp: Food and Training Together | missing |
| 15 | Day 29: Making It Outlive the Reset | missing |

The 11 missing lessons were being written when the account hit its monthly spend
limit and the authoring agents were terminated.

## To resume

1. `SPEC.md` is the authoring contract — hand it to whoever (or whatever) writes
   the remaining lessons. It carries the card structure, SVG standards, palette,
   text-overflow table, and the content-integrity rules.
2. `validate.js` checks a directory of `lesson-N.json` files:
   `node validate.js .` — it verifies JSON validity, card counts and mix, quiz
   shape, SVG headers, palette compliance, and text overflow.
3. Once all 15 exist and validate, assemble into a book object and ship it as an
   **external module** — `body-reset-playbook-data.js` defining
   `window.BODY_RESET_PLAYBOOK_BOOK`, registered in the `externalBooks` list in
   `integrateExternalCategories()` against `categoryId: 'health'`, with a script
   tag in `index.html` before `data.js`.

   **`data.js` cannot take another inline book** — it sits at 99.5 MB against
   GitHub's hard 100 MB per-file cap. See #344 for the pattern to copy.

## Current state

All four completed lessons pass `validate.js` clean: 75 cards, 75 SVGs,
12 quizzes, zero violations.
