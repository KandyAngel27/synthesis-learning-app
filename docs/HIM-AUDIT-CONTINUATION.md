# HIM Audit — Continuation Guide

This is a working playbook for resuming the bottom-up HIM category audit.
Each book in `APP_DATA.categories.him.books` is rebuilt to the same
college-depth standard: 14+ cards per lesson, 3+ quizzes per lesson,
EVERY card has a full SVG visual following the style spec.

## Status (as of this commit)

Working from BOTTOM up the HIM books array. **Completed rebuilds:**

| Idx | Book ID | Lessons | Cards | Notes |
|-----|---------|---------|-------|-------|
| 16 | ahima-domains | (was already large — skipped) | — | already 32 lessons |
| 15 | hitt-2149 | (was already large — skipped) | — | already 28 lessons |
| 14 | hitt-2239 | 20 | ~296 | DONE |
| 13 | hitt-2343 | 22 | ~321 | DONE |
| 12 | hitt-1255 | 20 | 280 | DONE |
| 11 | hitt-2246 | 26 | 393 | DONE |
| 10 | hitt-2335 | 24 | 350 | DONE |
| 9 | hprs-2301 | 20 | 293 | DONE |
| 8 | hitt-1211 | 20 | 295 | DONE |
| 7 | hitt-1345 | 22 | 278 | Light touch-up only (was already mostly compliant) |
| 6 | hitt-1253 | 22 | 328 | DONE |
| 5 | hitt-1342 | 20 | 295 | DONE |
| 4 | hitt-1341 | 24 | 380 | DONE — THE core coding course |
| 3 | hitt-1301 | 24 | 363 | DONE |
| 2 | biol-2402 | 22 | 326 | DONE |
| 1 | biol-2401 | 22 | 334 | DONE (this PR) |
| 0 | hitt-1305 | ??? | ??? | **NEXT — Medical Terminology** |

**Next book to audit:** `hitt-1305` (Medical Terminology) at index 0.

After HIM, other categories may still need audit work — check:
`anatomy-physiology`, `data-analytics`, etc.

## The Workflow (proven over 14+ rebuilds)

### 1. Set up branch + workspace
```
git checkout main && git pull origin main
git checkout -b claude/<bookid>-rebuild-VJiB4
mkdir -p /tmp/<bookid>
cp /tmp/<prev-book>/style-spec.md /tmp/<bookid>/style-spec.md
# Copy plan if it exists in /home/user/synthesis-learning-app/plans/
cp plans/PLAN-<BOOKID>.md /tmp/<bookid>/plan.md  # or write one
```

### 2. Audit existing book
```js
node -e "
const vm = require('vm');
const fs = require('fs');
const src = fs.readFileSync('data.js', 'utf8');
const ctx = {window:{}, localStorage:{getItem:()=>null,setItem:()=>{}}, document:{}, console};
ctx.globalThis = ctx; vm.createContext(ctx);
vm.runInContext(src + ';globalThis.__A=APP_DATA;', ctx);
const him = ctx.__A.categories.find(c => c.id === 'him');
const b = him.books.find(b => b.id === '<bookid>');
let total = 0, vis = 0;
b.lessonList.forEach(l => {
  total += l.cards.length;
  l.cards.forEach(c => { if (c && c.visual && c.visual.svg) vis++; });
});
console.log(b.lessons, 'lessons /', total, 'cards /', vis, 'visuals');
"
```

### 3. Write or read the plan file
A 22-24 lesson plan, each with paragraph-length topic guides. Plan
files live at `/home/user/synthesis-learning-app/plans/PLAN-<BOOKID>.md`.
If none exists, write one (see PLAN-HITT2246.md for a template).

### 4. Dispatch 5-6 parallel agents
Each agent writes 3-5 lessons. Critical agent prompt elements:
- Read the plan + style-spec + LESSON-CREATION-STANDARDS.md
- Write bare object literals (NO `module.exports`, NO trailing semicolon)
- 14+ cards per lesson, 3+ quizzes each, EVERY card has full SVG
- Cite real codes/regulations/case studies (college-depth)
- Approved palette: indigo #6366f1, violet #8b5cf6, green #10b981,
  amber #f59e0b, red #ef4444, pink #ec4899, teal #14b8a6, gold #ffd700
- Dark #1a1a2e background, viewBox 0 0 1100 1100
- Title fs36 gold y=70, subtitle fs24 gray y=115, section fs26, body fs22, secondary fs18

### 5. Handle agent failures (this happens ~30% of the time)
- Socket errors / timeouts / monthly usage limits → some files may still be written
- Check `ls /tmp/<bookid>/lesson-*.js` to see what came through
- For missing lessons, EITHER re-dispatch a smaller agent batch OR write manually
- I wrote L12 of hitt-1211, L8 of biol-2402, L13/L16 of biol-2401 manually

### 6. Validate all 20-24 lessons
```js
cd /tmp/<bookid> && node -e "
const fs = require('fs');
const vm = require('vm');
let totals = {cards:0, quizzes:0, visuals:0};
for (let i = 1; i <= N; i++) {
  const src = fs.readFileSync('lesson-' + String(i).padStart(2,'0') + '.js', 'utf8');
  const lesson = vm.runInNewContext('(' + src + ')');
  const cards = lesson.cards;
  totals.cards += cards.length;
  totals.quizzes += cards.filter(c=>c.type==='quiz').length;
  totals.visuals += cards.filter(c=>c.visual && c.visual.svg).length;
}
console.log(totals);
"
```

### 7. Splice into data.js
```js
node -e "
const fs = require('fs');
const vm = require('vm');
const lessons = [];
for (let i = 1; i <= N; i++) {
  const src = fs.readFileSync('/tmp/<bookid>/lesson-' + String(i).padStart(2,'0') + '.js', 'utf8');
  lessons.push(vm.runInNewContext('(' + src + ')'));
}
const dataSrc = fs.readFileSync('data.js', 'utf8');
const ctx = {window:{}, localStorage:{getItem:()=>null,setItem:()=>{}}, document:{}, console};
ctx.globalThis = ctx; vm.createContext(ctx);
vm.runInContext(dataSrc + ';globalThis.__A=APP_DATA;', ctx);
const A = ctx.__A;
const him = A.categories.find(c => c.id === 'him');
const bookIdx = him.books.findIndex(b => b.id === '<bookid>');
const oldBook = him.books[bookIdx];
function extractMin(d) { if (typeof d === 'number') return d; const m = (d||'').match(/(\\d+)/); return m ? parseInt(m[1]) : 14; }
const totalMin = lessons.reduce((acc, l) => acc + extractMin(l.duration), 0);
him.books[bookIdx] = {
  ...oldBook,
  duration: String(totalMin),
  lessons: lessons.length,
  description: 'College-depth ...', // update to reflect new scope
  lessonList: lessons
};
const objStart = dataSrc.indexOf('{', dataSrc.indexOf('const APP_DATA'));
const helperIdx = dataSrc.indexOf('// Helper function', objStart);
let endBrace = helperIdx;
while (endBrace > 0 && !(dataSrc[endBrace] === ';' && dataSrc[endBrace-1] === '}')) endBrace--;
endBrace = endBrace - 1;
const newContent = dataSrc.slice(0, objStart) + JSON.stringify(A, null, 2) + dataSrc.slice(endBrace + 1);
fs.writeFileSync('data.js', newContent);
"
```

**IMPORTANT:** Set `book.lessons` (numeric), `book.duration` (plain
number string, no "min" suffix — the UI adds "Minutes" label),
`book.description` to reflect new scope. The book detail page reads
all three at the top.

### 8. Bump cache buster + commit + push + PR
```bash
# Edit index.html — find `data.js?v=...` and increment the suffix
git add data.js index.html
git commit -m "..."
git push -u origin claude/<bookid>-rebuild-VJiB4
# Then mcp__github__create_pull_request as draft
```

### 9. Wait for user "merge"
User reviews briefly, says "merge", then mcp__github__update_pull_request
(draft→ready) followed by mcp__github__merge_pull_request with squash.

## Common Pitfalls

1. **Agent returns lessons with `module.exports = {...}` or trailing `};`**
   These break the `vm.runInNewContext('(' + src + ')')` parser.
   Strip them with `perl -i -pe`.

2. **Agent returns lessons below 14-card minimum.**
   The L22 of biol-2402 came in at 13. Either pad with one more
   card or accept (12 is the absolute minimum per CLAUDE.md).

3. **Org's monthly usage limit / socket errors mid-run.**
   These have been increasing. When dispatched, agents are doing
   ~1.2M-2M tokens per 4-lesson batch. Smaller batches (2-3 lessons)
   are more resilient. If half complete before the error, the
   partial files are still usable.

4. **Splice corrupts data.js if `// Helper function` marker moves.**
   Always verify with PARSE OK after splicing.

## Style Spec (Critical)

Located at `/tmp/<bookid>/style-spec.md`. Copy from a previous book.
Every SVG must use:
- viewBox="0 0 1100 1100"
- Dark #1a1a2e background as first rect
- Gold #ffd700 title at fs36, y=70, x=550, text-anchor middle, font-weight bold
- Gray #888 subtitle at fs24, y=115, x=550, text-anchor middle
- Section titles fs26 (colored), body fs22 white, secondary fs18 gray
- Containers rx=20, stroke-width=3, fill rgba(...,0.15) with 40px+ inner padding
- Footer "pill" at y=900-1000, rounded (rx=40), with key takeaway in gold

## Files Modified Per Rebuild

- `data.js` (replaces book at known index)
- `index.html` (cache buster bump)

## Standards Files (DO NOT BREAK)

- `/home/user/synthesis-learning-app/docs/LESSON-CREATION-STANDARDS.md` — 12 card min, 2 quiz min
- `/home/user/synthesis-learning-app/docs/BOOK-CREATION-TEMPLATE.md` — playbook
- `/home/user/synthesis-learning-app/CLAUDE.md` — top-level instructions
