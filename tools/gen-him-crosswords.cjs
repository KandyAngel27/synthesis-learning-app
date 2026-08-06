#!/usr/bin/env node
// ============================================
// SYNTHESIS — HIM crossword grid generator
//
// Turns a flat word bank into a pre-interlocked crossword layout in the shape
// crossword.js expects. Layouts are built here, offline, so the huge grids
// render instantly in the browser instead of being solved at page load.
//
// The previous generator lived in a scratch directory and was lost. This one
// lives in the repo on purpose — regenerating a puzzle should never require
// reconstructing the tool first.
//
// Usage:
//   node tools/gen-him-crosswords.cjs <bank.js> <id> <icon> <color> <title> <desc>
//     ...emits one puzzle object as JSON on stdout.
//
//   node tools/gen-him-crosswords.cjs --selftest
//     ...runs the invariant checks against a small synthetic bank.
//
// A bank file is a bare JS array literal: [{ answer: "ALOS", clue: "..." }, ...]
// Answers must be /^[A-Z]{3,14}$/ and unique.
//
// Output shape (matches the existing puzzles in him-crossword-data.js):
//   { id, track, difficulty, icon, color, title, desc, xp, wordCount,
//     layout: { rows, cols,
//               across: [{num, clue, answer, r, c, dir:'A', cells:[{r,c}...]}],
//               down:   [{...dir:'D'}] } }
// ============================================

'use strict';
const fs = require('fs');
const vm = require('vm');

// Working grid is a sparse map keyed "r,c" so it can grow in any direction;
// coordinates are normalised to a 0-based bounding box at the very end.
class Grid {
    constructor() {
        this.cells = new Map();   // "r,c" -> letter
        this.placed = [];         // {answer, clue, r, c, dir}
    }
    at(r, c) { return this.cells.get(r + ',' + c); }
    set(r, c, ch) { this.cells.set(r + ',' + c, ch); }

    // Can `word` sit at (r,c) running `dir` without breaking crossword rules?
    // Returns the number of crossings, or -1 if the placement is illegal.
    fit(word, r, c, dir) {
        const dr = dir === 'D' ? 1 : 0;
        const dc = dir === 'A' ? 1 : 0;
        // The cell immediately before and after the word must be empty,
        // otherwise we would silently extend an existing entry.
        if (this.at(r - dr, c - dc) !== undefined) return -1;
        if (this.at(r + dr * word.length, c + dc * word.length) !== undefined) return -1;

        let crossings = 0;
        for (let i = 0; i < word.length; i++) {
            const rr = r + dr * i, cc = c + dc * i;
            const existing = this.at(rr, cc);
            if (existing !== undefined) {
                if (existing !== word[i]) return -1;   // letter clash
                crossings++;
                continue;
            }
            // On an empty cell, the two perpendicular neighbours must also be
            // empty. Otherwise this letter would butt against a parallel word
            // and create an unintended two-letter entry.
            const pr = dir === 'A' ? 1 : 0;
            const pc = dir === 'A' ? 0 : 1;
            if (this.at(rr - pr, cc - pc) !== undefined) return -1;
            if (this.at(rr + pr, cc + pc) !== undefined) return -1;
        }
        return crossings;
    }

    place(entry, r, c, dir) {
        const dr = dir === 'D' ? 1 : 0;
        const dc = dir === 'A' ? 1 : 0;
        for (let i = 0; i < entry.answer.length; i++) {
            this.set(r + dr * i, c + dc * i, entry.answer[i]);
        }
        this.placed.push({ answer: entry.answer, clue: entry.clue, r, c, dir });
    }
}

// Try every crossing of `entry` against every already-placed word and keep the
// placement with the most crossings — denser interlock, tighter grid.
function bestPlacement(grid, entry) {
    const word = entry.answer;
    let best = null;
    for (const p of grid.placed) {
        const pDir = p.dir;
        const newDir = pDir === 'A' ? 'D' : 'A';
        for (let i = 0; i < p.answer.length; i++) {
            for (let j = 0; j < word.length; j++) {
                if (p.answer[i] !== word[j]) continue;
                // Cell where the two words cross.
                const cr = p.dir === 'D' ? p.r + i : p.r;
                const cc = p.dir === 'A' ? p.c + i : p.c;
                // Back off along the new word so index j lands on that cell.
                const r = newDir === 'D' ? cr - j : cr;
                const c = newDir === 'A' ? cc - j : cc;
                const score = grid.fit(word, r, c, newDir);
                if (score < 1) continue;
                if (!best || score > best.score) best = { r, c, dir: newDir, score };
            }
        }
    }
    return best;
}

function build(bank) {
    // Longest first: long words are hardest to place and make the best spines.
    const words = bank.slice().sort((a, b) => b.answer.length - a.answer.length);
    const grid = new Grid();
    const unplaced = [];

    grid.place(words[0], 0, 0, 'A');

    // Several passes — a word that could not cross anything early on often
    // fits once the grid has filled out around it.
    let pending = words.slice(1);
    for (let pass = 0; pass < 4 && pending.length; pass++) {
        const stillPending = [];
        for (const entry of pending) {
            const spot = bestPlacement(grid, entry);
            if (spot) grid.place(entry, spot.r, spot.c, spot.dir);
            else stillPending.push(entry);
        }
        if (stillPending.length === pending.length) break;   // no progress
        pending = stillPending;
    }
    unplaced.push(...pending);

    return { grid, unplaced };
}

// Normalise to a 0-based box and apply standard crossword numbering: scan in
// row-major order, and number any cell that begins an across or down entry.
function finalise(grid) {
    const coords = [...grid.cells.keys()].map(k => k.split(',').map(Number));
    const minR = Math.min(...coords.map(x => x[0]));
    const minC = Math.min(...coords.map(x => x[1]));
    const maxR = Math.max(...coords.map(x => x[0]));
    const maxC = Math.max(...coords.map(x => x[1]));

    const placed = grid.placed.map(p => ({ ...p, r: p.r - minR, c: p.c - minC }));
    // Sort by start cell so numbering runs left-to-right, top-to-bottom.
    placed.sort((a, b) => (a.r - b.r) || (a.c - b.c));

    const numAt = new Map();
    let next = 1;
    const across = [], down = [];
    for (const p of placed) {
        const key = p.r + ',' + p.c;
        // A cell that starts both an across and a down entry shares one number.
        if (!numAt.has(key)) numAt.set(key, next++);
        const num = numAt.get(key);
        const cells = [];
        for (let i = 0; i < p.answer.length; i++) {
            cells.push({
                r: p.dir === 'D' ? p.r + i : p.r,
                c: p.dir === 'A' ? p.c + i : p.c,
            });
        }
        (p.dir === 'A' ? across : down).push({
            num, clue: p.clue, answer: p.answer, r: p.r, c: p.c, dir: p.dir, cells,
        });
    }
    return { rows: maxR - minR + 1, cols: maxC - minC + 1, across, down };
}

// Independent re-check of the finished layout. The generator enforces these
// while placing, but a bug there would ship a broken puzzle, so verify the
// output rather than trusting the process.
function validate(layout) {
    const problems = [];
    const board = new Map();
    const all = [...layout.across, ...layout.down];

    for (const e of all) {
        if (e.cells.length !== e.answer.length) problems.push(`${e.answer}: cells/answer length mismatch`);
        e.cells.forEach((cell, i) => {
            if (cell.r < 0 || cell.c < 0 || cell.r >= layout.rows || cell.c >= layout.cols) {
                problems.push(`${e.answer}: cell ${i} out of bounds`);
            }
            const k = cell.r + ',' + cell.c;
            const prev = board.get(k);
            if (prev !== undefined && prev !== e.answer[i]) {
                problems.push(`${e.answer}: letter conflict at ${k} (${prev} vs ${e.answer[i]})`);
            }
            board.set(k, e.answer[i]);
        });
    }

    // No entry may be a strict prefix-extension of another in the same run —
    // i.e. the cell before/after an entry must be empty.
    for (const e of all) {
        const dr = e.dir === 'D' ? 1 : 0, dc = e.dir === 'A' ? 1 : 0;
        if (board.has((e.r - dr) + ',' + (e.c - dc))) problems.push(`${e.answer}: runs into a letter before its start`);
        const er = e.r + dr * e.answer.length, ec = e.c + dc * e.answer.length;
        if (board.has(er + ',' + ec)) problems.push(`${e.answer}: runs into a letter after its end`);
    }

    // Every maximal run of 2+ letters on the board must be a declared entry;
    // anything else is an accidental word the solver would be asked to fill.
    const declared = new Set(all.map(e => e.dir + ':' + e.r + ',' + e.c + ':' + e.answer.length));
    for (const dir of ['A', 'D']) {
        const dr = dir === 'D' ? 1 : 0, dc = dir === 'A' ? 1 : 0;
        for (const key of board.keys()) {
            const [r, c] = key.split(',').map(Number);
            if (board.has((r - dr) + ',' + (c - dc))) continue;   // not a run start
            let len = 0;
            while (board.has((r + dr * len) + ',' + (c + dc * len))) len++;
            if (len < 2) continue;
            if (!declared.has(dir + ':' + r + ',' + c + ':' + len)) {
                problems.push(`undeclared ${dir} run of ${len} at ${r},${c}`);
            }
        }
    }

    // Numbering must be consistent: one number per start cell, and a shared
    // cell must carry the same number in both directions.
    const numByCell = new Map();
    for (const e of all) {
        const k = e.r + ',' + e.c;
        if (numByCell.has(k) && numByCell.get(k) !== e.num) {
            problems.push(`cell ${k} has two numbers (${numByCell.get(k)}, ${e.num})`);
        }
        numByCell.set(k, e.num);
    }
    return problems;
}

function loadBank(path) {
    const bank = vm.runInNewContext('(' + fs.readFileSync(path, 'utf8') + ')');
    const seen = new Set();
    const clean = [];
    const rejected = [];
    for (const e of bank) {
        const a = String(e.answer || '').toUpperCase();
        if (!/^[A-Z]{3,14}$/.test(a)) { rejected.push(a + ' (bad shape)'); continue; }
        if (seen.has(a)) { rejected.push(a + ' (duplicate)'); continue; }
        if (!e.clue) { rejected.push(a + ' (no clue)'); continue; }
        seen.add(a);
        clean.push({ answer: a, clue: String(e.clue).trim() });
    }
    return { clean, rejected };
}

function generate(bankPath, meta) {
    const { clean, rejected } = loadBank(bankPath);
    const { grid, unplaced } = build(clean);
    const layout = finalise(grid);
    const problems = validate(layout);
    const wordCount = layout.across.length + layout.down.length;
    const puzzle = {
        id: meta.id, track: 'him', difficulty: 'hard',
        icon: meta.icon, color: meta.color, title: meta.title, desc: meta.desc,
        xp: wordCount * 2, wordCount,
        layout,
    };
    return { puzzle, problems, rejected, unplaced: unplaced.map(u => u.answer) };
}

// ---- self-test ----------------------------------------------------------
function selftest() {
    const bank = [
        { answer: 'RECORD', clue: 'a' }, { answer: 'CODING', clue: 'b' },
        { answer: 'DATA', clue: 'c' }, { answer: 'AUDIT', clue: 'd' },
        { answer: 'PRIVACY', clue: 'e' }, { answer: 'ACCESS', clue: 'f' },
        { answer: 'QUALITY', clue: 'g' }, { answer: 'REGISTRY', clue: 'h' },
        { answer: 'CENSUS', clue: 'i' }, { answer: 'MEDIAN', clue: 'j' },
    ];
    const { grid, unplaced } = build(bank);
    const layout = finalise(grid);
    const problems = validate(layout);
    console.log('selftest: placed ' + (layout.across.length + layout.down.length) +
        '/' + bank.length + ', unplaced ' + unplaced.length +
        ', problems ' + problems.length);
    problems.slice(0, 10).forEach(p => console.log('  ' + p));
    process.exit(problems.length ? 1 : 0);
}

if (require.main === module) {
    if (process.argv[2] === '--selftest') selftest();
    const [, , bankPath, id, icon, color, title, desc] = process.argv;
    if (!bankPath) {
        console.error('usage: gen-him-crosswords.cjs <bank.js> <id> <icon> <color> <title> <desc>');
        process.exit(2);
    }
    const res = generate(bankPath, { id, icon, color, title, desc });
    if (res.problems.length) {
        console.error('LAYOUT PROBLEMS in ' + id + ':');
        res.problems.slice(0, 20).forEach(p => console.error('  ' + p));
        process.exit(1);
    }
    process.stderr.write(`${id}: ${res.puzzle.wordCount} clues, ` +
        `${res.puzzle.layout.rows}x${res.puzzle.layout.cols}, ` +
        `unplaced ${res.unplaced.length}, rejected ${res.rejected.length}\n`);
    process.stdout.write(JSON.stringify(res.puzzle));
}

module.exports = { build, finalise, validate, generate, loadBank };
