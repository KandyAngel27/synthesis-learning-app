# German From Scratch — work in progress

The monthly API spend limit was hit partway through building this course, after
5 of 20 lessons were completed and validated. This directory preserves the
finished work so it survives the build session; nothing here is loaded by the
app — there is no script tag and no externalBooks entry for German yet.

State:
- GERMAN-SPEC.md — the complete shared spec all 20 lessons are written against
- de-l1.js .. de-l5.js — finished lessons, each validated at 14 cards / 4 quizzes,
  ASCII-only SVGs, captions present

To resume: write lessons 6-20 against the spec (the lesson-by-lesson assignments
are in the session transcript; the spec alone is sufficient to recreate them),
then build assemble-de.js from assemble-fr.js the way assemble-fr.js was built
from assemble-es.js, register FRENCH-style in data.js (after the Spanish entry,
which creates the category), add the index.html script tag, verify in headless
Chromium, and delete this directory in the shipping commit.
