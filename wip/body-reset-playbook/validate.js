// Validator for Healthivora Body Reset lesson JSON files.
// Usage: node validate.js [dir]
const fs = require('fs');
const path = require('path');

const dir = process.argv[2] || __dirname;
const MAX_CHARS = [
  { min: 34, max: 30 },
  { min: 24, max: 42 },
  { min: 20, max: 50 },
  { min: 17, max: 58 },
  { min: 0, max: 64 },
];
function maxCharsFor(size) {
  for (const r of MAX_CHARS) if (size >= r.min) return r.max;
  return 64;
}

let totalCards = 0, totalSvgs = 0, totalQuizzes = 0, totalLessons = 0;
const problems = [];

function checkSvg(svg, where) {
  if (!/^<svg viewBox="0 0 1100 1100" class="lesson-visual">/.test(svg.trim())) {
    problems.push(`${where}: SVG header not exactly '<svg viewBox="0 0 1100 1100" class="lesson-visual">'`);
  }
  if (!/fill="#1a1a2e"/.test(svg)) problems.push(`${where}: missing #1a1a2e background`);
  if (!/<\/svg>\s*$/.test(svg.trim())) problems.push(`${where}: SVG not closed`);

  // Raw unescaped ampersands (not part of an entity)
  const bad = svg.match(/&(?!(amp|lt|gt|quot|apos|#\d+|#x[0-9a-fA-F]+);)/g);
  if (bad) problems.push(`${where}: ${bad.length} unescaped '&' in SVG`);

  // Smart quotes / em dashes inside SVG
  if (/[‘’“”–—]/.test(svg)) {
    problems.push(`${where}: smart quotes or dashes inside SVG`);
  }

  // Tag balance
  const opens = (svg.match(/<(svg|g|text|rect|circle|path|polygon|line|ellipse|tspan|defs|linearGradient|stop|polyline)\b/g) || []).length;
  const selfClose = (svg.match(/\/>/g) || []).length;
  const closes = (svg.match(/<\/(svg|g|text|tspan|defs|linearGradient)>/g) || []).length;
  if (opens !== selfClose + closes) {
    problems.push(`${where}: tag balance off (opens=${opens} selfClose=${selfClose} closes=${closes})`);
  }

  // Text overflow heuristic
  const texts = [...svg.matchAll(/<text\b([^>]*)>([\s\S]*?)<\/text>/g)];
  for (const m of texts) {
    const attrs = m[1];
    const inner = m[2].replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
    const fs_ = parseFloat((attrs.match(/font-size="(\d+(?:\.\d+)?)"/) || [])[1] || '18');
    const limit = maxCharsFor(fs_);
    if (inner.length > limit + 6) {
      problems.push(`${where}: text overflow risk (font-size=${fs_}, ${inner.length} chars > ~${limit}): "${inner.slice(0, 70)}"`);
    }
    // Off-canvas x
    const x = parseFloat((attrs.match(/\bx="(-?\d+(?:\.\d+)?)"/) || [])[1] || '550');
    const y = parseFloat((attrs.match(/\by="(-?\d+(?:\.\d+)?)"/) || [])[1] || '0');
    if (x < 0 || x > 1100 || y < 0 || y > 1100) {
      problems.push(`${where}: text outside canvas (x=${x}, y=${y})`);
    }
  }
}

const files = fs.readdirSync(dir).filter(f => /^lesson-\d+\.json$/.test(f))
  .sort((a, b) => parseInt(a.match(/\d+/)[0]) - parseInt(b.match(/\d+/)[0]));

for (const f of files) {
  const p = path.join(dir, f);
  let lesson;
  try {
    lesson = JSON.parse(fs.readFileSync(p, 'utf8'));
  } catch (e) {
    problems.push(`${f}: INVALID JSON — ${e.message}`);
    continue;
  }
  totalLessons++;
  const L = f.replace('.json', '');
  const n = parseInt(f.match(/\d+/)[0]);

  if (lesson.id !== `body-reset-playbook-lesson-${n}`) problems.push(`${L}: wrong id "${lesson.id}"`);
  if (!lesson.title) problems.push(`${L}: missing title`);
  if (lesson.duration !== '18') problems.push(`${L}: duration should be "18", got ${JSON.stringify(lesson.duration)}`);
  if (lesson.completed !== false) problems.push(`${L}: completed should be false`);
  if (!Array.isArray(lesson.cards)) { problems.push(`${L}: cards not an array`); continue; }

  const cards = lesson.cards;
  totalCards += cards.length;
  if (cards.length < 13) problems.push(`${L}: only ${cards.length} cards (need 13+)`);

  const types = cards.map(c => c.type);
  if (types[0] !== 'intro') problems.push(`${L}: first card is "${types[0]}", must be intro`);
  const count = t => types.filter(x => x === t).length;
  const quizzes = count('quiz');
  totalQuizzes += quizzes;
  if (quizzes < 3) problems.push(`${L}: only ${quizzes} quizzes (need 3+)`);
  if (count('example') < 3) problems.push(`${L}: only ${count('example')} examples (need 3+)`);
  if (count('application') < 3) problems.push(`${L}: only ${count('application')} application cards (need 3+)`);
  if (count('quote') < 1) problems.push(`${L}: no quote card`);
  if (count('visual') < 1) problems.push(`${L}: no visual card`);

  const allowed = new Set(['intro', 'concept', 'visual', 'example', 'quiz', 'application', 'quote']);
  cards.forEach((c, i) => {
    const where = `${L} card${i + 1}(${c.type})`;
    if (!allowed.has(c.type)) problems.push(`${where}: unknown card type`);
    if (!c.visual || !c.visual.svg) { problems.push(`${where}: MISSING visual.svg`); }
    else {
      totalSvgs++;
      if (c.visual.type !== 'diagram') problems.push(`${where}: visual.type should be "diagram"`);
      if (!c.visual.caption) problems.push(`${where}: missing caption`);
      checkSvg(c.visual.svg, where);
    }
    if (c.type === 'quiz') {
      if (!c.question) problems.push(`${where}: quiz missing question`);
      if (!Array.isArray(c.options) || c.options.length !== 4) {
        problems.push(`${where}: quiz needs exactly 4 options, got ${c.options ? c.options.length : 0}`);
      } else {
        const nCorrect = c.options.filter(o => o.correct === true).length;
        if (nCorrect !== 1) problems.push(`${where}: quiz has ${nCorrect} correct options (need exactly 1)`);
        c.options.forEach((o, j) => { if (!o.text) problems.push(`${where}: option ${j + 1} missing text`); });
      }
      if (!c.explanation || c.explanation.split(/\s+/).length < 25) {
        problems.push(`${where}: quiz explanation missing or too short`);
      }
    } else if (c.type === 'quote') {
      if (!c.content) problems.push(`${where}: quote missing content`);
      if (!c.author) problems.push(`${where}: quote missing author`);
    } else {
      if (!c.title) problems.push(`${where}: missing title`);
      if (!c.content || c.content.split(/\s+/).length < 30) problems.push(`${where}: content missing or too short`);
    }
  });
}

console.log(`Lessons: ${totalLessons}/15   Cards: ${totalCards}   SVGs: ${totalSvgs}   Quizzes: ${totalQuizzes}`);
if (!problems.length) {
  console.log('\n✅ ALL CHECKS PASSED');
} else {
  console.log(`\n❌ ${problems.length} problem(s):\n`);
  const byLesson = {};
  problems.forEach(p => {
    const k = (p.match(/^lesson-\d+/) || ['other'])[0];
    (byLesson[k] = byLesson[k] || []).push(p);
  });
  for (const k of Object.keys(byLesson)) {
    console.log(`--- ${k} (${byLesson[k].length}) ---`);
    byLesson[k].slice(0, 25).forEach(p => console.log('  ' + p));
    if (byLesson[k].length > 25) console.log(`  ...and ${byLesson[k].length - 25} more`);
  }
  process.exitCode = 1;
}
