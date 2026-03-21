// ============================================
// SVG TEMPLATE GUIDE FOR SYNTHESIS LEARNING APP
// ============================================
// Use these templates as starting points for new lesson visuals.
// All SVGs should follow these standards for consistency.

const SVG_STANDARDS = {
    // VIEWBOX: Always use 1100x1100 for square, centered layouts
    viewBox: "0 0 1100 1100",

    // BACKGROUND: Dark theme base
    background: "#1a1a2e",

    // FONT SIZES:
    fonts: {
        title: "40-42px",        // Main titles at top
        subtitle: "28-31px",      // Section headers
        body: "24-26px",          // Body text
        small: "22-25px",         // Captions, small labels
        emoji: "42px"             // Emoji icons
    },

    // COLOR PALETTE:
    colors: {
        gold: "#ffd700",          // Art history, important highlights
        pink: "#ec4899",          // Art history primary
        blue: "#0ea5e9",          // Medical coding primary
        red: "#ef4444",           // Errors, warnings, box 1
        orange: "#f59e0b",        // Box 2, highlights
        green: "#10b981",         // Success, box 3
        purple: "#8b5cf6",        // Box 4, special
        gray: "#888",             // Subtitles, captions
        white: "#fff",            // Body text
        darkBg: "#1a1a2e"         // Background
    },

    // SPACING:
    spacing: {
        titleY: "45-55",          // Title from top
        subtitleY: "80-100",      // Subtitle below title
        contentStartY: "110-140", // Where main content begins
        boxPadding: "20-40",      // Padding inside boxes
        rowGap: "30-50",          // Space between rows
        columnGap: "30-40"        // Space between columns
    },

    // ELEMENT STYLES:
    elements: {
        boxRx: "14-20",           // Border radius for boxes
        strokeWidth: "2-3",       // Default stroke width
        heavyStroke: "5-7"        // Emphasized strokes
    }
};

// ============================================
// TEMPLATE: INTRO CARD (Title + Map/Visual + Legend)
// ============================================
const INTRO_TEMPLATE = `<svg viewBox="0 0 1100 1100" class="lesson-visual">
    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>

    <!-- TITLE SECTION -->
    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="42">MAIN TITLE HERE</text>
    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="29">Subtitle description text</text>

    <!-- MAIN VISUAL AREA (y=120 to y=700) -->
    <!-- Add diagrams, maps, illustrations here -->

    <!-- LEGEND/INFO BOXES AT BOTTOM (y=720 onwards) -->
    <rect x="60" y="720" width="480" height="160" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
    <text x="300" y="775" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="31">BOX 1 TITLE</text>
    <text x="300" y="820" text-anchor="middle" fill="#fff" font-size="26">Description line 1</text>
    <text x="300" y="855" text-anchor="middle" fill="#888" font-size="25">Description line 2</text>

    <rect x="560" y="720" width="480" height="160" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
    <text x="800" y="775" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="31">BOX 2 TITLE</text>
    <text x="800" y="820" text-anchor="middle" fill="#fff" font-size="26">Description line 1</text>
    <text x="800" y="855" text-anchor="middle" fill="#888" font-size="25">Description line 2</text>

    <!-- BOTTOM DATE/INFO BAR -->
    <rect x="200" y="920" width="700" height="60" rx="15" fill="rgba(255,255,255,0.05)" stroke="#666" stroke-width="1"/>
    <text x="550" y="960" text-anchor="middle" fill="#888" font-size="28">Footer information here</text>
</svg>`;

// ============================================
// TEMPLATE: GRID LAYOUT (2x2, 3x2, etc.)
// ============================================
const GRID_2X2_TEMPLATE = `<svg viewBox="0 0 1100 1100" class="lesson-visual">
    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
    <text x="550" y="55" text-anchor="middle" fill="#0ea5e9" font-weight="bold" font-size="42">GRID TITLE</text>
    <text x="550" y="95" text-anchor="middle" fill="#888" font-size="29">Grid subtitle</text>

    <!-- ROW 1 -->
    <rect x="40" y="130" width="495" height="300" rx="18" fill="rgba(239,68,68,0.15)" stroke="#ef4444" stroke-width="3"/>
    <text x="288" y="200" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="32">BOX 1</text>
    <text x="288" y="280" text-anchor="middle" fill="#fff" font-size="26">Content here</text>

    <rect x="565" y="130" width="495" height="300" rx="18" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="3"/>
    <text x="812" y="200" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="32">BOX 2</text>
    <text x="812" y="280" text-anchor="middle" fill="#fff" font-size="26">Content here</text>

    <!-- ROW 2 -->
    <rect x="40" y="460" width="495" height="300" rx="18" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="3"/>
    <text x="288" y="530" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="32">BOX 3</text>
    <text x="288" y="610" text-anchor="middle" fill="#fff" font-size="26">Content here</text>

    <rect x="565" y="460" width="495" height="300" rx="18" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="3"/>
    <text x="812" y="530" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="32">BOX 4</text>
    <text x="812" y="610" text-anchor="middle" fill="#fff" font-size="26">Content here</text>

    <!-- BOTTOM SUMMARY -->
    <rect x="100" y="800" width="900" height="100" rx="16" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
    <text x="550" y="860" text-anchor="middle" fill="#ffd700" font-size="28" font-weight="bold">Summary text here</text>
</svg>`;

// ============================================
// TEMPLATE: NUMBERED BOXES (1-2-3 Pattern)
// ============================================
const NUMBERED_BOXES_TEMPLATE = `<svg viewBox="0 0 1100 1100" class="lesson-visual">
    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
    <text x="550" y="45" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="38">KEY POINTS TITLE</text>
    <text x="550" y="80" text-anchor="middle" fill="#888" font-size="26">Subtitle here</text>

    <!-- Row 1: Boxes 1-3 -->
    <rect x="40" y="110" width="320" height="200" rx="16" fill="rgba(239,68,68,0.15)" stroke="#ef4444" stroke-width="3"/>
    <circle cx="200" cy="145" r="26" fill="#ef4444"/>
    <text x="200" y="155" text-anchor="middle" fill="#fff" font-weight="bold" font-size="28">1</text>
    <text x="200" y="195" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="26">POINT ONE</text>
    <text x="200" y="230" text-anchor="middle" fill="#fff" font-size="24">Description</text>
    <text x="200" y="265" text-anchor="middle" fill="#888" font-size="24">Details here</text>

    <rect x="390" y="110" width="320" height="200" rx="16" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="3"/>
    <circle cx="550" cy="145" r="26" fill="#8b5cf6"/>
    <text x="550" y="155" text-anchor="middle" fill="#fff" font-weight="bold" font-size="28">2</text>
    <text x="550" y="195" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="26">POINT TWO</text>
    <text x="550" y="230" text-anchor="middle" fill="#fff" font-size="24">Description</text>
    <text x="550" y="265" text-anchor="middle" fill="#888" font-size="24">Details here</text>

    <rect x="740" y="110" width="320" height="200" rx="16" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="3"/>
    <circle cx="900" cy="145" r="26" fill="#10b981"/>
    <text x="900" y="155" text-anchor="middle" fill="#fff" font-weight="bold" font-size="28">3</text>
    <text x="900" y="195" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="26">POINT THREE</text>
    <text x="900" y="230" text-anchor="middle" fill="#fff" font-size="24">Description</text>
    <text x="900" y="265" text-anchor="middle" fill="#888" font-size="24">Details here</text>

    <!-- Add more rows as needed -->
</svg>`;

// ============================================
// TEMPLATE: PROCESS/STEPS (Arrows connecting boxes)
// ============================================
const PROCESS_TEMPLATE = `<svg viewBox="0 0 1100 1100" class="lesson-visual">
    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="40">PROCESS TITLE</text>
    <text x="550" y="95" text-anchor="middle" fill="#888" font-size="27">How something works step by step</text>

    <!-- Step 1 -->
    <rect x="40" y="140" width="290" height="250" rx="18" fill="rgba(239,68,68,0.15)" stroke="#ef4444" stroke-width="3"/>
    <text x="185" y="220" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="32">STEP 1</text>
    <text x="185" y="280" text-anchor="middle" fill="#fff" font-size="26">Description</text>
    <text x="185" y="360" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="31">1. ACTION</text>

    <!-- Arrow 1 -->
    <path d="M 340 265 L 390 265" stroke="#ffd700" stroke-width="5" fill="none"/>
    <polygon points="390,265 370,250 370,280" fill="#ffd700"/>

    <!-- Step 2 -->
    <rect x="405" y="140" width="290" height="250" rx="18" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="3"/>
    <text x="550" y="220" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="32">STEP 2</text>
    <text x="550" y="280" text-anchor="middle" fill="#fff" font-size="26">Description</text>
    <text x="550" y="360" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="31">2. ACTION</text>

    <!-- Arrow 2 -->
    <path d="M 705 265 L 755 265" stroke="#ffd700" stroke-width="5" fill="none"/>
    <polygon points="755,265 735,250 735,280" fill="#ffd700"/>

    <!-- Step 3 -->
    <rect x="770" y="140" width="290" height="250" rx="18" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="3"/>
    <text x="915" y="220" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="32">STEP 3</text>
    <text x="915" y="280" text-anchor="middle" fill="#fff" font-size="26">Description</text>
    <text x="915" y="360" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="31">3. ACTION</text>
</svg>`;

// ============================================
// TEMPLATE: LETTER GRID (like ELEGANCE mnemonic)
// ============================================
const LETTER_GRID_TEMPLATE = `<svg viewBox="0 0 1100 1100" class="lesson-visual">
    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
    <text x="550" y="45" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="46">A B C D E F</text>
    <text x="550" y="80" text-anchor="middle" fill="#888" font-size="28">Mnemonic for remembering key concepts</text>

    <!-- Row 1: 4 letters -->
    <rect x="40" y="110" width="240" height="160" rx="14" fill="rgba(236,72,153,0.2)" stroke="#ec4899" stroke-width="3"/>
    <text x="160" y="145" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="40">A</text>
    <text x="160" y="180" text-anchor="middle" fill="#fff" font-size="26">Word for A</text>
    <text x="160" y="210" text-anchor="middle" fill="#fff" font-size="26">meaning</text>
    <!-- Icon or visual at y=240 -->

    <rect x="300" y="110" width="240" height="160" rx="14" fill="rgba(255,215,0,0.2)" stroke="#ffd700" stroke-width="3"/>
    <text x="420" y="145" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="40">B</text>
    <text x="420" y="180" text-anchor="middle" fill="#fff" font-size="26">Word for B</text>
    <text x="420" y="210" text-anchor="middle" fill="#fff" font-size="26">meaning</text>

    <rect x="560" y="110" width="240" height="160" rx="14" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6" stroke-width="3"/>
    <text x="680" y="145" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="40">C</text>
    <text x="680" y="180" text-anchor="middle" fill="#fff" font-size="26">Word for C</text>
    <text x="680" y="210" text-anchor="middle" fill="#fff" font-size="26">meaning</text>

    <rect x="820" y="110" width="240" height="160" rx="14" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="3"/>
    <text x="940" y="145" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="40">D</text>
    <text x="940" y="180" text-anchor="middle" fill="#fff" font-size="26">Word for D</text>
    <text x="940" y="210" text-anchor="middle" fill="#fff" font-size="26">meaning</text>

    <!-- Row 2: remaining letters at y=300 -->
</svg>`;

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        SVG_STANDARDS,
        INTRO_TEMPLATE,
        GRID_2X2_TEMPLATE,
        NUMBERED_BOXES_TEMPLATE,
        PROCESS_TEMPLATE,
        LETTER_GRID_TEMPLATE
    };
}
