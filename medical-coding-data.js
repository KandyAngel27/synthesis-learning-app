// ============================================
// MEDICAL CODING DATA - UPDATEABLE MODULE
// Last Updated: January 2026
// Version: 2026.1 (Q1)
// ============================================

const CODING_UPDATES = {
    lastUpdated: '2026-01-04',
    version: '2026.1',
    changelog: [
        { date: '2026-01-04', version: '2026.1', changes: ['Initial 2026 guidelines added'] }
    ],
    upcomingChanges: [
        { effectiveDate: '2026-04-01', description: 'Q2 HCPCS updates', source: 'CMS' },
        { effectiveDate: '2026-10-01', description: 'FY2027 ICD-10 updates', source: 'CMS' }
    ]
};

const MEDICAL_CODING_CATEGORY = {
    id: "medical-coding",
    name: "Medical Coding",
    icon: "🏥",
    color: "#0ea5e9",
    description: "ICD-10, CPT, HCPCS, and PCS coding guidelines",
    updateInfo: CODING_UPDATES,
    books: [
        {
            id: "icd10-cm-2026",
            title: "ICD-10-CM 2026 Guidelines",
            author: "CMS/NCHS",
            description: "Complete guide to ICD-10-CM diagnosis coding for 2026",
            lessons: 12,
            duration: 90,
            progress: 0,
            category: "medical-coding",
            featured: true,
            version: "2026",
            effectiveDate: "2025-10-01",
            lessonList: [
                {
                    id: 1,
                    title: "Introduction to ICD-10-CM",
                    duration: 15,
                    completed: false,
                    cards: [
                        // CARD 1: VISUAL ANALOGY - Making it relatable
                        {
                            type: "intro",
                            title: "Think of ICD-10-CM Like a Universal Translator",
                            content: "Imagine every doctor in the world speaking a different language. One says 'the patient has a broken leg,' another writes it in medical Latin, another uses shorthand. How would hospitals, insurance companies, and researchers ever communicate?\n\nICD-10-CM is the universal translator. It converts every possible medical condition into a standardized code that everyone understands. When a doctor in Texas writes E11.9, a coder in New York, an insurance company in California, and a researcher in Florida all know exactly what it means: Type 2 diabetes without complications.",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 400 300" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="300" fill="#1a1a2e"/>

                                    <!-- Title -->
                                    <text x="200" y="25" text-anchor="middle" fill="#0ea5e9" font-weight="bold" font-size="13">THE UNIVERSAL MEDICAL TRANSLATOR</text>

                                    <!-- Different inputs on left -->
                                    <rect x="20" y="50" width="100" height="35" rx="6" fill="rgba(239,68,68,0.2)" stroke="#ef4444"/>
                                    <text x="70" y="72" text-anchor="middle" fill="#fff" font-size="8">"Broken leg"</text>

                                    <rect x="20" y="95" width="100" height="35" rx="6" fill="rgba(245,158,11,0.2)" stroke="#f59e0b"/>
                                    <text x="70" y="117" text-anchor="middle" fill="#fff" font-size="8">"Fractura femoris"</text>

                                    <rect x="20" y="140" width="100" height="35" rx="6" fill="rgba(16,185,129,0.2)" stroke="#10b981"/>
                                    <text x="70" y="162" text-anchor="middle" fill="#fff" font-size="8">"Fx R femur"</text>

                                    <rect x="20" y="185" width="100" height="35" rx="6" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6"/>
                                    <text x="70" y="207" text-anchor="middle" fill="#fff" font-size="8">"骨折" (Japanese)</text>

                                    <!-- Arrows to center -->
                                    <path d="M125 67 L160 130" stroke="#ef4444" stroke-width="2"/>
                                    <path d="M125 112 L160 130" stroke="#f59e0b" stroke-width="2"/>
                                    <path d="M125 157 L160 145" stroke="#10b981" stroke-width="2"/>
                                    <path d="M125 202 L160 160" stroke="#8b5cf6" stroke-width="2"/>

                                    <!-- Central ICD-10-CM box -->
                                    <rect x="160" y="100" width="80" height="80" rx="12" fill="rgba(14,165,233,0.3)" stroke="#0ea5e9" stroke-width="3"/>
                                    <text x="200" y="135" text-anchor="middle" fill="#0ea5e9" font-weight="bold" font-size="11">ICD-10-CM</text>
                                    <text x="200" y="155" text-anchor="middle" fill="#fff" font-size="9">TRANSLATOR</text>

                                    <!-- Arrow to output -->
                                    <path d="M245 140 L280 140" stroke="#0ea5e9" stroke-width="3" marker-end="url(#arrow)"/>
                                    <defs><marker id="arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#0ea5e9"/></marker></defs>

                                    <!-- Universal output -->
                                    <rect x="280" y="105" width="100" height="70" rx="10" fill="rgba(14,165,233,0.4)" stroke="#0ea5e9" stroke-width="2"/>
                                    <text x="330" y="130" text-anchor="middle" fill="#0ea5e9" font-weight="bold" font-size="14">S72.001A</text>
                                    <text x="330" y="150" text-anchor="middle" fill="#fff" font-size="8">Everyone</text>
                                    <text x="330" y="162" text-anchor="middle" fill="#fff" font-size="8">understands!</text>

                                    <!-- Bottom icons showing who uses it -->
                                    <rect x="40" y="245" width="320" height="45" rx="8" fill="rgba(255,255,255,0.05)"/>
                                    <text x="200" y="262" text-anchor="middle" fill="#888" font-size="9">WHO USES THESE CODES?</text>

                                    <text x="80" y="282" text-anchor="middle" fill="#fff" font-size="18">🏥</text>
                                    <text x="140" y="282" text-anchor="middle" fill="#fff" font-size="18">💰</text>
                                    <text x="200" y="282" text-anchor="middle" fill="#fff" font-size="18">🔬</text>
                                    <text x="260" y="282" text-anchor="middle" fill="#fff" font-size="18">📊</text>
                                    <text x="320" y="282" text-anchor="middle" fill="#fff" font-size="18">🌍</text>
                                </svg>`,
                                caption: "ICD-10-CM turns any medical description into a universal code"
                            }
                        },

                        // CARD 2: INFOGRAPHIC - Key Statistics
                        {
                            type: "visual",
                            title: "ICD-10-CM By The Numbers",
                            content: "Before we dive deep, let's understand the scale of this coding system. These numbers show why ICD-10-CM is such a powerful tool for modern healthcare.",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 400 320" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="320" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#0ea5e9" font-weight="bold" font-size="14">ICD-10-CM BY THE NUMBERS</text>

                                    <!-- Big number 1 -->
                                    <rect x="25" y="50" width="165" height="80" rx="10" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <text x="107" y="90" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="32">70,000+</text>
                                    <text x="107" y="115" text-anchor="middle" fill="#fff" font-size="10">Diagnosis Codes</text>

                                    <!-- Big number 2 -->
                                    <rect x="210" y="50" width="165" height="80" rx="10" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="292" y="90" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="32">21</text>
                                    <text x="292" y="115" text-anchor="middle" fill="#fff" font-size="10">Chapters</text>

                                    <!-- Big number 3 -->
                                    <rect x="25" y="145" width="165" height="80" rx="10" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <text x="107" y="185" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="32">3-7</text>
                                    <text x="107" y="210" text-anchor="middle" fill="#fff" font-size="10">Characters Per Code</text>

                                    <!-- Big number 4 -->
                                    <rect x="210" y="145" width="165" height="80" rx="10" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="292" y="185" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="32">Oct 1</text>
                                    <text x="292" y="210" text-anchor="middle" fill="#fff" font-size="10">Annual Update Date</text>

                                    <!-- Timeline showing evolution -->
                                    <rect x="25" y="245" width="350" height="60" rx="8" fill="rgba(14,165,233,0.1)" stroke="#0ea5e9"/>
                                    <text x="200" y="265" text-anchor="middle" fill="#0ea5e9" font-size="10">EVOLUTION OF DETAIL</text>

                                    <!-- Timeline dots -->
                                    <circle cx="80" cy="285" r="15" fill="rgba(107,114,128,0.3)" stroke="#6b7280"/>
                                    <text x="80" y="289" text-anchor="middle" fill="#fff" font-size="8">13K</text>
                                    <text x="80" y="305" text-anchor="middle" fill="#888" font-size="7">ICD-9</text>

                                    <line x1="100" y1="285" x2="165" y2="285" stroke="#888" stroke-width="2" stroke-dasharray="4"/>

                                    <circle cx="200" cy="285" r="20" fill="rgba(14,165,233,0.3)" stroke="#0ea5e9" stroke-width="2"/>
                                    <text x="200" y="289" text-anchor="middle" fill="#fff" font-size="9">70K</text>
                                    <text x="200" y="305" text-anchor="middle" fill="#0ea5e9" font-size="8">ICD-10</text>

                                    <line x1="225" y1="285" x2="280" y2="285" stroke="#888" stroke-width="2" stroke-dasharray="4"/>

                                    <circle cx="320" cy="285" r="15" fill="rgba(16,185,129,0.3)" stroke="#10b981"/>
                                    <text x="320" y="289" text-anchor="middle" fill="#fff" font-size="8">???</text>
                                    <text x="320" y="305" text-anchor="middle" fill="#888" font-size="7">ICD-11</text>
                                </svg>`,
                                caption: "The expansion from ICD-9 to ICD-10 increased codes by over 5x"
                            }
                        },

                        // CARD 3: COLOR-CODED BREAKDOWN - Code Structure
                        {
                            type: "visual",
                            title: "Decoding the Code: A Color-Coded Breakdown",
                            content: "Every ICD-10-CM code tells a story. Each character has a specific purpose. Let's break down a real code piece by piece so you can read any code like a pro.",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 400 350" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="350" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#0ea5e9" font-weight="bold" font-size="13">ANATOMY OF AN ICD-10-CM CODE</text>

                                    <!-- The code display -->
                                    <rect x="75" y="45" width="250" height="60" rx="10" fill="rgba(14,165,233,0.1)" stroke="#0ea5e9"/>

                                    <!-- Individual characters with colors -->
                                    <rect x="90" y="55" width="35" height="40" rx="6" fill="#ef4444"/>
                                    <text x="107" y="83" text-anchor="middle" fill="#fff" font-weight="bold" font-size="24">S</text>

                                    <rect x="130" y="55" width="35" height="40" rx="6" fill="#f59e0b"/>
                                    <text x="147" y="83" text-anchor="middle" fill="#fff" font-weight="bold" font-size="24">7</text>

                                    <rect x="170" y="55" width="35" height="40" rx="6" fill="#f59e0b"/>
                                    <text x="187" y="83" text-anchor="middle" fill="#fff" font-weight="bold" font-size="24">2</text>

                                    <text x="215" y="83" text-anchor="middle" fill="#888" font-size="24">.</text>

                                    <rect x="225" y="55" width="25" height="40" rx="6" fill="#10b981"/>
                                    <text x="237" y="83" text-anchor="middle" fill="#fff" font-weight="bold" font-size="24">0</text>

                                    <rect x="255" y="55" width="25" height="40" rx="6" fill="#10b981"/>
                                    <text x="267" y="83" text-anchor="middle" fill="#fff" font-weight="bold" font-size="24">0</text>

                                    <rect x="285" y="55" width="25" height="40" rx="6" fill="#10b981"/>
                                    <text x="297" y="83" text-anchor="middle" fill="#fff" font-weight="bold" font-size="24">1</text>

                                    <rect x="315" y="55" width="25" height="40" rx="6" fill="#8b5cf6"/>
                                    <text x="327" y="83" text-anchor="middle" fill="#fff" font-weight="bold" font-size="24">A</text>

                                    <!-- Explanation boxes with connecting lines -->
                                    <!-- Character 1 -->
                                    <line x1="107" y1="100" x2="107" y2="125" stroke="#ef4444" stroke-width="2"/>
                                    <rect x="20" y="125" width="175" height="50" rx="6" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <text x="107" y="145" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="10">CHARACTER 1: CHAPTER</text>
                                    <text x="107" y="162" text-anchor="middle" fill="#fff" font-size="9">S = Injury, Poisoning</text>

                                    <!-- Characters 2-3 -->
                                    <line x1="167" y1="100" x2="280" y2="125" stroke="#f59e0b" stroke-width="2"/>
                                    <rect x="205" y="125" width="175" height="50" rx="6" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <text x="292" y="145" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="10">CHARACTERS 2-3: CATEGORY</text>
                                    <text x="292" y="162" text-anchor="middle" fill="#fff" font-size="9">72 = Fracture of Femur</text>

                                    <!-- Characters 4-6 -->
                                    <rect x="20" y="190" width="175" height="65" rx="6" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="107" y="210" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="10">CHARACTERS 4-6: DETAILS</text>
                                    <text x="107" y="227" text-anchor="middle" fill="#fff" font-size="9">0 = Neck of femur</text>
                                    <text x="107" y="242" text-anchor="middle" fill="#fff" font-size="9">01 = Right side, unspecified</text>

                                    <!-- Character 7 -->
                                    <rect x="205" y="190" width="175" height="65" rx="6" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="292" y="210" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="10">CHARACTER 7: ENCOUNTER</text>
                                    <text x="292" y="227" text-anchor="middle" fill="#fff" font-size="9">A = Initial encounter</text>
                                    <text x="292" y="242" text-anchor="middle" fill="#fff" font-size="9">D = Subsequent | S = Sequela</text>

                                    <!-- Full meaning at bottom -->
                                    <rect x="40" y="275" width="320" height="60" rx="10" fill="rgba(14,165,233,0.2)" stroke="#0ea5e9" stroke-width="2"/>
                                    <text x="200" y="297" text-anchor="middle" fill="#0ea5e9" font-weight="bold" font-size="11">FULL MEANING:</text>
                                    <text x="200" y="318" text-anchor="middle" fill="#fff" font-size="10">Fracture of unspecified part of neck of right femur,</text>
                                    <text x="200" y="332" text-anchor="middle" fill="#fff" font-size="10">initial encounter for closed fracture</text>
                                </svg>`,
                                caption: "Each character adds more specificity to the diagnosis"
                            }
                        },

                        // CARD 4: MEMORY TRICK - Chapter Letters
                        {
                            type: "concept",
                            title: "Memory Trick: First Letter = Chapter",
                            content: "The first letter of any ICD-10-CM code instantly tells you what body system or type of condition you're dealing with. Here's an easy way to remember the most common ones.",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 400 380" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="380" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#0ea5e9" font-weight="bold" font-size="13">MEMORY TRICK: FIRST LETTERS</text>
                                    <text x="200" y="45" text-anchor="middle" fill="#888" font-size="10">The first letter tells you the chapter instantly!</text>

                                    <!-- Grid of letters with meanings -->
                                    <!-- Row 1 -->
                                    <rect x="20" y="60" width="85" height="55" rx="6" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <text x="62" y="85" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="28">A-B</text>
                                    <text x="62" y="105" text-anchor="middle" fill="#fff" font-size="8">🦠 Infections</text>

                                    <rect x="115" y="60" width="85" height="55" rx="6" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <text x="157" y="85" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="28">C-D</text>
                                    <text x="157" y="105" text-anchor="middle" fill="#fff" font-size="8">🎗️ Cancer/Blood</text>

                                    <rect x="210" y="60" width="85" height="55" rx="6" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="252" y="85" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="28">E</text>
                                    <text x="252" y="105" text-anchor="middle" fill="#fff" font-size="8">🍬 Diabetes/Endo</text>

                                    <rect x="305" y="60" width="85" height="55" rx="6" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="347" y="85" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="28">F</text>
                                    <text x="347" y="105" text-anchor="middle" fill="#fff" font-size="8">🧠 Mental Health</text>

                                    <!-- Row 2 -->
                                    <rect x="20" y="125" width="85" height="55" rx="6" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <text x="62" y="150" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="28">G</text>
                                    <text x="62" y="170" text-anchor="middle" fill="#fff" font-size="8">⚡ Nervous System</text>

                                    <rect x="115" y="125" width="85" height="55" rx="6" fill="rgba(236,72,153,0.15)" stroke="#ec4899"/>
                                    <text x="157" y="150" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="28">I</text>
                                    <text x="157" y="170" text-anchor="middle" fill="#fff" font-size="8">❤️ Heart/Circ</text>

                                    <rect x="210" y="125" width="85" height="55" rx="6" fill="rgba(20,184,166,0.15)" stroke="#14b8a6"/>
                                    <text x="252" y="150" text-anchor="middle" fill="#14b8a6" font-weight="bold" font-size="28">J</text>
                                    <text x="252" y="170" text-anchor="middle" fill="#fff" font-size="8">🫁 Respiratory</text>

                                    <rect x="305" y="125" width="85" height="55" rx="6" fill="rgba(251,146,60,0.15)" stroke="#fb923c"/>
                                    <text x="347" y="150" text-anchor="middle" fill="#fb923c" font-weight="bold" font-size="28">K</text>
                                    <text x="347" y="170" text-anchor="middle" fill="#fff" font-size="8">🍽️ Digestive</text>

                                    <!-- Row 3 -->
                                    <rect x="20" y="190" width="85" height="55" rx="6" fill="rgba(168,85,247,0.15)" stroke="#a855f7"/>
                                    <text x="62" y="215" text-anchor="middle" fill="#a855f7" font-weight="bold" font-size="28">M</text>
                                    <text x="62" y="235" text-anchor="middle" fill="#fff" font-size="8">🦴 Muscles/Bones</text>

                                    <rect x="115" y="190" width="85" height="55" rx="6" fill="rgba(34,197,94,0.15)" stroke="#22c55e"/>
                                    <text x="157" y="215" text-anchor="middle" fill="#22c55e" font-weight="bold" font-size="28">N</text>
                                    <text x="157" y="235" text-anchor="middle" fill="#fff" font-size="8">🫘 Kidney/GU</text>

                                    <rect x="210" y="190" width="85" height="55" rx="6" fill="rgba(244,63,94,0.15)" stroke="#f43f5e"/>
                                    <text x="252" y="215" text-anchor="middle" fill="#f43f5e" font-weight="bold" font-size="28">O</text>
                                    <text x="252" y="235" text-anchor="middle" fill="#fff" font-size="8">🤰 Pregnancy</text>

                                    <rect x="305" y="190" width="85" height="55" rx="6" fill="rgba(99,102,241,0.15)" stroke="#6366f1"/>
                                    <text x="347" y="215" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="28">S-T</text>
                                    <text x="347" y="235" text-anchor="middle" fill="#fff" font-size="8">🩹 Injuries</text>

                                    <!-- Row 4 - Z codes highlighted -->
                                    <rect x="115" y="260" width="170" height="55" rx="6" fill="rgba(14,165,233,0.2)" stroke="#0ea5e9" stroke-width="2"/>
                                    <text x="200" y="290" text-anchor="middle" fill="#0ea5e9" font-weight="bold" font-size="28">Z</text>
                                    <text x="200" y="308" text-anchor="middle" fill="#fff" font-size="9">✅ Encounters, Screenings, History</text>

                                    <!-- Tip at bottom -->
                                    <rect x="40" y="330" width="320" height="40" rx="8" fill="rgba(245,158,11,0.1)" stroke="#f59e0b"/>
                                    <text x="55" y="355" fill="#f59e0b" font-size="16">💡</text>
                                    <text x="200" y="355" text-anchor="middle" fill="#fff" font-size="10">See a code? Look at the first letter - you already know the body system!</text>
                                </svg>`,
                                caption: "Memorize these letters to quickly identify any diagnosis category"
                            }
                        },

                        // CARD 5: FLOWCHART - The Coding Process
                        {
                            type: "visual",
                            title: "The Coding Process: Step-by-Step Flowchart",
                            content: "Every time you code a diagnosis, you should follow this exact process. Skipping steps leads to errors, claim denials, and compliance issues. This flowchart will become second nature with practice.",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 400 400" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="400" fill="#1a1a2e"/>
                                    <text x="200" y="22" text-anchor="middle" fill="#0ea5e9" font-weight="bold" font-size="12">THE CODING PROCESS FLOWCHART</text>

                                    <!-- Step 1 -->
                                    <rect x="125" y="35" width="150" height="40" rx="20" fill="rgba(16,185,129,0.3)" stroke="#10b981" stroke-width="2"/>
                                    <text x="200" y="58" text-anchor="middle" fill="#fff" font-size="10">1. Read Documentation</text>
                                    <text x="45" y="55" fill="#10b981" font-size="18">📋</text>

                                    <line x1="200" y1="75" x2="200" y2="90" stroke="#888" stroke-width="2" marker-end="url(#arrowGray)"/>
                                    <defs><marker id="arrowGray" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#888"/></marker></defs>

                                    <!-- Step 2 -->
                                    <rect x="125" y="90" width="150" height="40" rx="20" fill="rgba(59,130,246,0.3)" stroke="#3b82f6" stroke-width="2"/>
                                    <text x="200" y="113" text-anchor="middle" fill="#fff" font-size="10">2. Find Main Term</text>
                                    <text x="45" y="110" fill="#3b82f6" font-size="18">🔍</text>

                                    <line x1="200" y1="130" x2="200" y2="145" stroke="#888" stroke-width="2" marker-end="url(#arrowGray)"/>

                                    <!-- Step 3 -->
                                    <rect x="125" y="145" width="150" height="40" rx="20" fill="rgba(245,158,11,0.3)" stroke="#f59e0b" stroke-width="2"/>
                                    <text x="200" y="168" text-anchor="middle" fill="#fff" font-size="10">3. Look Up in Index</text>
                                    <text x="45" y="165" fill="#f59e0b" font-size="18">📖</text>

                                    <line x1="200" y1="185" x2="200" y2="200" stroke="#888" stroke-width="2" marker-end="url(#arrowGray)"/>

                                    <!-- Step 4 - Critical -->
                                    <rect x="105" y="200" width="190" height="50" rx="6" fill="rgba(239,68,68,0.3)" stroke="#ef4444" stroke-width="3"/>
                                    <text x="200" y="222" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="10">4. VERIFY IN TABULAR LIST</text>
                                    <text x="200" y="238" text-anchor="middle" fill="#fff" font-size="9">Never skip this step!</text>
                                    <text x="45" y="225" fill="#ef4444" font-size="18">⚠️</text>

                                    <line x1="200" y1="250" x2="200" y2="265" stroke="#888" stroke-width="2" marker-end="url(#arrowGray)"/>

                                    <!-- Step 5 -->
                                    <rect x="125" y="265" width="150" height="40" rx="20" fill="rgba(139,92,246,0.3)" stroke="#8b5cf6" stroke-width="2"/>
                                    <text x="200" y="288" text-anchor="middle" fill="#fff" font-size="10">5. Read ALL Notes</text>
                                    <text x="45" y="285" fill="#8b5cf6" font-size="18">📝</text>

                                    <line x1="200" y1="305" x2="200" y2="320" stroke="#888" stroke-width="2" marker-end="url(#arrowGray)"/>

                                    <!-- Step 6 -->
                                    <rect x="125" y="320" width="150" height="40" rx="20" fill="rgba(14,165,233,0.3)" stroke="#0ea5e9" stroke-width="2"/>
                                    <text x="200" y="343" text-anchor="middle" fill="#fff" font-size="10">6. Assign Most Specific</text>
                                    <text x="45" y="340" fill="#0ea5e9" font-size="18">✅</text>

                                    <!-- Success indicator -->
                                    <circle cx="355" y="340" r="20" fill="rgba(16,185,129,0.3)" stroke="#10b981" stroke-width="2"/>
                                    <text x="355" y="346" text-anchor="middle" fill="#10b981" font-size="18">✓</text>
                                    <line x1="280" y1="340" x2="330" y2="340" stroke="#10b981" stroke-width="2"/>

                                    <!-- Time indicator -->
                                    <rect x="300" y="370" width="90" height="25" rx="4" fill="rgba(255,255,255,0.05)"/>
                                    <text x="345" y="387" text-anchor="middle" fill="#888" font-size="9">~2-5 min/code</text>
                                </svg>`,
                                caption: "Follow this flowchart for every diagnosis you code"
                            }
                        },

                        // CARD 6: COMPARISON TABLE - Index vs Tabular
                        {
                            type: "visual",
                            title: "Index vs. Tabular List: Know the Difference",
                            content: "The two main parts of ICD-10-CM serve different purposes. Think of the Index as GPS directions and the Tabular as the actual destination. You need both to get there correctly.",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 400 340" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="340" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#0ea5e9" font-weight="bold" font-size="13">ALPHABETIC INDEX vs TABULAR LIST</text>

                                    <!-- Index Column -->
                                    <rect x="20" y="50" width="170" height="230" rx="10" fill="rgba(245,158,11,0.1)" stroke="#f59e0b"/>
                                    <rect x="20" y="50" width="170" height="40" rx="10" fill="rgba(245,158,11,0.2)"/>
                                    <text x="105" y="75" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="12">📖 ALPHABETIC INDEX</text>

                                    <text x="35" y="110" fill="#fff" font-size="9">✓ Alphabetical by condition</text>
                                    <text x="35" y="130" fill="#fff" font-size="9">✓ Quick lookup tool</text>
                                    <text x="35" y="150" fill="#fff" font-size="9">✓ Shows code suggestions</text>
                                    <text x="35" y="170" fill="#fff" font-size="9">✓ Cross-references</text>
                                    <text x="35" y="190" fill="#888" font-size="9">✗ No full descriptions</text>
                                    <text x="35" y="210" fill="#888" font-size="9">✗ No instructional notes</text>
                                    <text x="35" y="230" fill="#888" font-size="9">✗ May show truncated codes</text>

                                    <rect x="35" y="250" width="140" height="25" rx="4" fill="rgba(239,68,68,0.2)" stroke="#ef4444"/>
                                    <text x="105" y="267" text-anchor="middle" fill="#ef4444" font-size="9">START HERE ONLY</text>

                                    <!-- Tabular Column -->
                                    <rect x="210" y="50" width="170" height="230" rx="10" fill="rgba(16,185,129,0.1)" stroke="#10b981"/>
                                    <rect x="210" y="50" width="170" height="40" rx="10" fill="rgba(16,185,129,0.2)"/>
                                    <text x="295" y="75" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="12">📋 TABULAR LIST</text>

                                    <text x="225" y="110" fill="#fff" font-size="9">✓ Numerical order by code</text>
                                    <text x="225" y="130" fill="#fff" font-size="9">✓ Full code descriptions</text>
                                    <text x="225" y="150" fill="#fff" font-size="9">✓ Includes/Excludes notes</text>
                                    <text x="225" y="170" fill="#fff" font-size="9">✓ Code First instructions</text>
                                    <text x="225" y="190" fill="#fff" font-size="9">✓ Required characters shown</text>
                                    <text x="225" y="210" fill="#fff" font-size="9">✓ Chapter guidelines</text>
                                    <text x="225" y="230" fill="#fff" font-size="9">✓ Complete, valid codes</text>

                                    <rect x="225" y="250" width="140" height="25" rx="4" fill="rgba(16,185,129,0.2)" stroke="#10b981"/>
                                    <text x="295" y="267" text-anchor="middle" fill="#10b981" font-size="9">ALWAYS VERIFY HERE</text>

                                    <!-- Bottom rule -->
                                    <rect x="40" y="295" width="320" height="35" rx="6" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <text x="200" y="318" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="11">⚠️ NEVER code from the Index alone!</text>
                                </svg>`,
                                caption: "Always use both tools together - Index to find, Tabular to verify"
                            }
                        },

                        // CARD 7: REAL EXAMPLE WALKTHROUGH
                        {
                            type: "example",
                            title: "Let's Code Together: A Real Example",
                            content: "A patient comes in with documentation stating: 'Type 2 diabetes mellitus with diabetic chronic kidney disease, stage 3.' Let's walk through coding this step by step using everything we've learned.",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 400 400" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="400" fill="#1a1a2e"/>
                                    <text x="200" y="22" text-anchor="middle" fill="#0ea5e9" font-weight="bold" font-size="12">CODING WALKTHROUGH: DIABETES WITH CKD</text>

                                    <!-- Original documentation -->
                                    <rect x="25" y="35" width="350" height="45" rx="6" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <text x="40" y="55" fill="#f59e0b" font-size="10">📋 DOCUMENTATION:</text>
                                    <text x="40" y="72" fill="#fff" font-size="9">"Type 2 diabetes mellitus with diabetic CKD, stage 3"</text>

                                    <!-- Step 1 -->
                                    <rect x="25" y="90" width="165" height="70" rx="6" fill="rgba(59,130,246,0.1)" stroke="#3b82f6"/>
                                    <text x="107" y="108" text-anchor="middle" fill="#3b82f6" font-size="9">STEP 1: INDEX LOOKUP</text>
                                    <text x="40" y="125" fill="#fff" font-size="8">Look up: Diabetes</text>
                                    <text x="40" y="138" fill="#fff" font-size="8">→ type 2</text>
                                    <text x="40" y="151" fill="#fff" font-size="8">  → with kidney complication</text>

                                    <!-- Arrow -->
                                    <path d="M195 125 L210 125" stroke="#888" stroke-width="2" marker-end="url(#arrowGray)"/>

                                    <!-- Step 2 -->
                                    <rect x="210" y="90" width="165" height="70" rx="6" fill="rgba(16,185,129,0.1)" stroke="#10b981"/>
                                    <text x="292" y="108" text-anchor="middle" fill="#10b981" font-size="9">STEP 2: TABULAR VERIFY</text>
                                    <text x="225" y="125" fill="#fff" font-size="8">E11.22 confirmed:</text>
                                    <text x="225" y="140" fill="#888" font-size="7">"Type 2 diabetes mellitus</text>
                                    <text x="225" y="152" fill="#888" font-size="7">with diabetic CKD"</text>

                                    <!-- First code result -->
                                    <rect x="100" y="175" width="200" height="40" rx="8" fill="rgba(14,165,233,0.2)" stroke="#0ea5e9" stroke-width="2"/>
                                    <text x="200" y="195" text-anchor="middle" fill="#0ea5e9" font-weight="bold" font-size="16">E11.22</text>
                                    <text x="200" y="210" text-anchor="middle" fill="#fff" font-size="8">Primary Code ✓</text>

                                    <!-- Note about additional code -->
                                    <rect x="25" y="230" width="350" height="50" rx="6" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6"/>
                                    <text x="40" y="250" fill="#8b5cf6" font-size="9">📝 TABULAR NOTE SAYS:</text>
                                    <text x="40" y="270" fill="#fff" font-size="8">"Use additional code to identify stage of CKD (N18.-)"</text>

                                    <!-- Second code lookup -->
                                    <rect x="25" y="295" width="165" height="50" rx="6" fill="rgba(59,130,246,0.1)" stroke="#3b82f6"/>
                                    <text x="40" y="315" fill="#3b82f6" font-size="8">Look up: CKD, stage 3</text>
                                    <text x="40" y="332" fill="#fff" font-size="8">→ N18.3</text>

                                    <path d="M195 320 L210 320" stroke="#888" stroke-width="2" marker-end="url(#arrowGray)"/>

                                    <rect x="210" y="295" width="165" height="50" rx="6" fill="rgba(16,185,129,0.1)" stroke="#10b981"/>
                                    <text x="225" y="315" fill="#10b981" font-size="8">N18.3 confirmed:</text>
                                    <text x="225" y="332" fill="#888" font-size="7">"Chronic kidney disease, stage 3"</text>

                                    <!-- Final result -->
                                    <rect x="75" y="355" width="250" height="35" rx="8" fill="rgba(16,185,129,0.25)" stroke="#10b981" stroke-width="2"/>
                                    <text x="200" y="377" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="12">FINAL: E11.22 + N18.3 ✓</text>
                                </svg>`,
                                caption: "Both codes together tell the complete clinical story"
                            }
                        },

                        // CARD 8: MNEMONIC DEVICE
                        {
                            type: "concept",
                            title: "Remember This: The VERIFY Mnemonic",
                            content: "Use this mnemonic to remember the key steps every time you code. Say it to yourself: 'V-E-R-I-F-Y' - this keeps you from making the most common coding mistakes.",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 400 360" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="360" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#0ea5e9" font-weight="bold" font-size="14">THE VERIFY MNEMONIC</text>

                                    <!-- V -->
                                    <rect x="30" y="50" width="340" height="45" rx="6" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <text x="55" y="80" fill="#ef4444" font-weight="bold" font-size="28">V</text>
                                    <text x="95" y="75" fill="#fff" font-size="11">View the documentation completely</text>
                                    <text x="95" y="90" fill="#888" font-size="9">Read everything before you start coding</text>

                                    <!-- E -->
                                    <rect x="30" y="100" width="340" height="45" rx="6" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <text x="55" y="130" fill="#f59e0b" font-weight="bold" font-size="28">E</text>
                                    <text x="95" y="125" fill="#fff" font-size="11">Extract the main diagnosis term</text>
                                    <text x="95" y="140" fill="#888" font-size="9">Find the condition name, not anatomy</text>

                                    <!-- R -->
                                    <rect x="30" y="150" width="340" height="45" rx="6" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="55" y="180" fill="#10b981" font-weight="bold" font-size="28">R</text>
                                    <text x="95" y="175" fill="#fff" font-size="11">Reference the Alphabetic Index</text>
                                    <text x="95" y="190" fill="#888" font-size="9">Look up the main term first</text>

                                    <!-- I -->
                                    <rect x="30" y="200" width="340" height="45" rx="6" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <text x="55" y="230" fill="#3b82f6" font-weight="bold" font-size="28">I</text>
                                    <text x="95" y="225" fill="#fff" font-size="11">Investigate the Tabular List</text>
                                    <text x="95" y="240" fill="#888" font-size="9">ALWAYS check here - read all notes!</text>

                                    <!-- F -->
                                    <rect x="30" y="250" width="340" height="45" rx="6" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="55" y="280" fill="#8b5cf6" font-weight="bold" font-size="28">F</text>
                                    <text x="95" y="275" fill="#fff" font-size="11">Follow all instructional notes</text>
                                    <text x="95" y="290" fill="#888" font-size="9">Excludes, Code First, Use Additional</text>

                                    <!-- Y -->
                                    <rect x="30" y="300" width="340" height="45" rx="6" fill="rgba(14,165,233,0.15)" stroke="#0ea5e9"/>
                                    <text x="55" y="330" fill="#0ea5e9" font-weight="bold" font-size="28">Y</text>
                                    <text x="95" y="325" fill="#fff" font-size="11">Yield the most specific code</text>
                                    <text x="95" y="340" fill="#888" font-size="9">Use all required characters</text>
                                </svg>`,
                                caption: "VERIFY - say it every time you code!"
                            }
                        },

                        // CARD 9: QUICK REFERENCE CARD
                        {
                            type: "visual",
                            title: "Quick Reference: Keep This Handy",
                            content: "Here's a visual summary of everything we've covered. Screenshot this or print it out to keep at your desk while you're learning.",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 400 380" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="380" fill="#1a1a2e"/>
                                    <rect x="10" y="10" width="380" height="360" rx="12" fill="rgba(14,165,233,0.05)" stroke="#0ea5e9" stroke-width="2"/>
                                    <text x="200" y="35" text-anchor="middle" fill="#0ea5e9" font-weight="bold" font-size="13">📋 ICD-10-CM QUICK REFERENCE</text>

                                    <!-- Code Structure -->
                                    <rect x="25" y="50" width="165" height="90" rx="6" fill="rgba(239,68,68,0.1)" stroke="#ef4444"/>
                                    <text x="107" y="70" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="10">CODE STRUCTURE</text>
                                    <text x="35" y="88" fill="#fff" font-size="8">• 3-7 characters</text>
                                    <text x="35" y="102" fill="#fff" font-size="8">• 1st = Letter (chapter)</text>
                                    <text x="35" y="116" fill="#fff" font-size="8">• 2nd-3rd = Numbers</text>
                                    <text x="35" y="130" fill="#fff" font-size="8">• 4th-7th = Specificity</text>

                                    <!-- Common Letters -->
                                    <rect x="210" y="50" width="165" height="90" rx="6" fill="rgba(16,185,129,0.1)" stroke="#10b981"/>
                                    <text x="292" y="70" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="10">COMMON LETTERS</text>
                                    <text x="220" y="88" fill="#fff" font-size="8">E = Diabetes/Endocrine</text>
                                    <text x="220" y="102" fill="#fff" font-size="8">I = Heart/Circulatory</text>
                                    <text x="220" y="116" fill="#fff" font-size="8">J = Respiratory</text>
                                    <text x="220" y="130" fill="#fff" font-size="8">S-T = Injuries</text>

                                    <!-- Key Rules -->
                                    <rect x="25" y="150" width="350" height="70" rx="6" fill="rgba(245,158,11,0.1)" stroke="#f59e0b"/>
                                    <text x="200" y="170" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="10">⚡ KEY RULES</text>
                                    <text x="40" y="190" fill="#fff" font-size="9">1. NEVER code from Index alone - always verify in Tabular</text>
                                    <text x="40" y="205" fill="#fff" font-size="9">2. Code to highest specificity - use all required characters</text>

                                    <!-- Conventions -->
                                    <rect x="25" y="230" width="165" height="80" rx="6" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6"/>
                                    <text x="107" y="250" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="10">PUNCTUATION</text>
                                    <text x="35" y="270" fill="#fff" font-size="8">[ ] = Synonyms</text>
                                    <text x="35" y="285" fill="#fff" font-size="8">( ) = Optional words</text>
                                    <text x="35" y="300" fill="#fff" font-size="8"> :  = Required modifier</text>

                                    <!-- Abbreviations -->
                                    <rect x="210" y="230" width="165" height="80" rx="6" fill="rgba(59,130,246,0.1)" stroke="#3b82f6"/>
                                    <text x="292" y="250" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="10">ABBREVIATIONS</text>
                                    <text x="220" y="270" fill="#fff" font-size="8">NEC = Other specified</text>
                                    <text x="220" y="285" fill="#888" font-size="7">(doc specific, no code)</text>
                                    <text x="220" y="300" fill="#fff" font-size="8">NOS = Unspecified</text>

                                    <!-- Excludes -->
                                    <rect x="25" y="320" width="350" height="40" rx="6" fill="rgba(239,68,68,0.1)" stroke="#ef4444"/>
                                    <text x="40" y="340" fill="#ef4444" font-size="9">Excludes1 = NEVER code together</text>
                                    <text x="40" y="355" fill="#10b981" font-size="9">Excludes2 = CAN code both if present</text>
                                </svg>`,
                                caption: "Your go-to reference for ICD-10-CM coding essentials"
                            }
                        },

                        // CARD 10: QUIZ
                        {
                            type: "quiz",
                            question: "You find a code in the Alphabetic Index. What should you do next?",
                            options: [
                                { text: "Assign the code immediately - the Index is accurate", correct: false },
                                { text: "Verify the code in the Tabular List and read all notes", correct: true },
                                { text: "Check with a supervisor before using any code", correct: false },
                                { text: "Look it up online to confirm", correct: false }
                            ],
                            explanation: "Always verify codes in the Tabular List! The Index is just your starting point. The Tabular contains full descriptions, Excludes notes, 'Use Additional Code' instructions, and required character information that the Index doesn't show. Never code directly from the Index."
                        },

                        // CARD 11: QUIZ 2
                        {
                            type: "quiz",
                            question: "What does the first character of an ICD-10-CM code tell you?",
                            options: [
                                { text: "The severity of the condition", correct: false },
                                { text: "The chapter/body system category", correct: true },
                                { text: "Whether it's acute or chronic", correct: false },
                                { text: "The year the code was created", correct: false }
                            ],
                            explanation: "The first character (always a letter) identifies the chapter and general category. For example, E = Endocrine/Diabetes, I = Circulatory, J = Respiratory, S = Injuries. This helps you quickly understand what type of condition you're dealing with."
                        },

                        // CARD 12: LESSON SUMMARY
                        {
                            type: "visual",
                            title: "Lesson Complete! Key Takeaways",
                            content: "Congratulations on completing this lesson! Here's what you've learned and should remember going forward.",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 400 350" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="350" fill="#1a1a2e"/>
                                    <text x="200" y="30" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="14">🎉 LESSON 1 COMPLETE!</text>

                                    <!-- Achievement unlocked style -->
                                    <rect x="50" y="50" width="300" height="280" rx="15" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>

                                    <text x="200" y="85" text-anchor="middle" fill="#10b981" font-size="11">YOU NOW UNDERSTAND:</text>

                                    <!-- Checkmarks -->
                                    <text x="75" y="115" fill="#10b981" font-size="14">✓</text>
                                    <text x="100" y="115" fill="#fff" font-size="10">What ICD-10-CM is and why it matters</text>

                                    <text x="75" y="145" fill="#10b981" font-size="14">✓</text>
                                    <text x="100" y="145" fill="#fff" font-size="10">The 3-7 character code structure</text>

                                    <text x="75" y="175" fill="#10b981" font-size="14">✓</text>
                                    <text x="100" y="175" fill="#fff" font-size="10">First letter = chapter/body system</text>

                                    <text x="75" y="205" fill="#10b981" font-size="14">✓</text>
                                    <text x="100" y="205" fill="#fff" font-size="10">Index → Tabular List process</text>

                                    <text x="75" y="235" fill="#10b981" font-size="14">✓</text>
                                    <text x="100" y="235" fill="#fff" font-size="10">The VERIFY mnemonic</text>

                                    <text x="75" y="265" fill="#10b981" font-size="14">✓</text>
                                    <text x="100" y="265" fill="#fff" font-size="10">Key punctuation and abbreviations</text>

                                    <!-- Next lesson teaser -->
                                    <rect x="75" y="290" width="250" height="30" rx="6" fill="rgba(59,130,246,0.2)" stroke="#3b82f6"/>
                                    <text x="200" y="310" text-anchor="middle" fill="#3b82f6" font-size="10">NEXT: Coding Conventions & Symbols →</text>
                                </svg>`,
                                caption: "Great progress! You're building a strong foundation in medical coding."
                            }
                        }
                    ]
                },

                // ========================================
                // LESSON 2: CODING CONVENTIONS & SYMBOLS
                // ========================================
                {
                    id: 2,
                    title: "Coding Conventions & Symbols",
                    duration: 12,
                    completed: false,
                    cards: [
                        {
                            type: "intro",
                            title: "The Secret Language of ICD-10-CM",
                            content: "Imagine you're reading a treasure map, but you don't know that X marks the spot or that dotted lines mean 'walk here.' You'd miss the treasure!\n\nICD-10-CM has its own symbols and conventions that tell you EXACTLY how to use each code. Miss these signals, and you'll code incorrectly every time. Master them, and you'll read the code book like a pro.\n\n**Why Conventions Matter:**\n• They tell you when to add more codes\n• They warn you when codes can't be used together\n• They show you the correct sequencing\n• They indicate required specificity",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 400 300" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="300" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="14">CONVENTIONS: YOUR CODING GPS</text>

                                    <rect x="30" y="45" width="340" height="70" rx="8" fill="rgba(245,158,11,0.1)" stroke="#f59e0b"/>
                                    <text x="200" y="70" text-anchor="middle" fill="#f59e0b" font-size="11">WITHOUT CONVENTIONS</text>
                                    <text x="200" y="95" text-anchor="middle" fill="#888" font-size="9">Like driving without road signs...</text>
                                    <text x="200" y="110" text-anchor="middle" fill="#ef4444" font-size="9">❌ Wrong turns, missed exits, accidents</text>

                                    <rect x="30" y="125" width="340" height="70" rx="8" fill="rgba(16,185,129,0.1)" stroke="#10b981"/>
                                    <text x="200" y="150" text-anchor="middle" fill="#10b981" font-size="11">WITH CONVENTIONS</text>
                                    <text x="200" y="175" text-anchor="middle" fill="#888" font-size="9">Clear directions at every step...</text>
                                    <text x="200" y="190" text-anchor="middle" fill="#10b981" font-size="9">✓ Accurate codes, proper sequencing, compliance</text>

                                    <rect x="30" y="210" width="160" height="80" rx="6" fill="rgba(59,130,246,0.1)" stroke="#3b82f6"/>
                                    <text x="110" y="235" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="10">SYMBOLS</text>
                                    <text x="110" y="255" text-anchor="middle" fill="#fff" font-size="8">Visual markers that</text>
                                    <text x="110" y="270" text-anchor="middle" fill="#fff" font-size="8">guide your coding</text>

                                    <rect x="210" y="210" width="160" height="80" rx="6" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6"/>
                                    <text x="290" y="235" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="10">NOTES</text>
                                    <text x="290" y="255" text-anchor="middle" fill="#fff" font-size="8">Instructions that</text>
                                    <text x="290" y="270" text-anchor="middle" fill="#fff" font-size="8">explain relationships</text>
                                </svg>`,
                                caption: "Conventions are your roadmap to accurate coding"
                            }
                        },
                        {
                            type: "concept",
                            title: "Includes & Excludes Notes: The Gatekeepers",
                            content: "**INCLUDES NOTES** tell you what conditions belong in a category. Think of them as the 'welcome mat' - these terms ARE included even if not specifically listed.\n\n**EXCLUDES1** = 'NOT CODED HERE - EVER!'\nThese conditions are MUTUALLY EXCLUSIVE. The patient CANNOT have both conditions at the same time. If you see Excludes1, you must choose ONE code, not both.\n\n**EXCLUDES2** = 'Not included here, but could coexist'\nThe excluded condition is different from the current code BUT the patient could have both. If documented, you CAN code both - just not with THIS code for THAT condition.\n\n**Memory Trick:**\n• Excludes**1** = **1** code only, pick one\n• Excludes**2** = **2** codes possible, both can exist",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 400 320" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="320" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#0ea5e9" font-weight="bold" font-size="13">INCLUDES vs EXCLUDES NOTES</text>

                                    <!-- Includes -->
                                    <rect x="20" y="45" width="360" height="60" rx="8" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="40" y="68" fill="#10b981" font-weight="bold" font-size="11">INCLUDES</text>
                                    <text x="40" y="88" fill="#fff" font-size="9">✓ "Welcome mat" - these terms belong here</text>
                                    <text x="40" y="100" fill="#888" font-size="8">Example: J06 "Acute upper respiratory infection" includes "URI NOS"</text>

                                    <!-- Excludes1 - Red/Danger -->
                                    <rect x="20" y="115" width="360" height="85" rx="8" fill="rgba(239,68,68,0.15)" stroke="#ef4444" stroke-width="2"/>
                                    <text x="40" y="138" fill="#ef4444" font-weight="bold" font-size="12">⛔ EXCLUDES1</text>
                                    <text x="40" y="158" fill="#fff" font-size="9">NEVER code together - mutually exclusive!</text>
                                    <text x="40" y="175" fill="#888" font-size="8">Patient cannot have both conditions simultaneously</text>
                                    <rect x="250" y="125" width="120" height="30" rx="4" fill="rgba(239,68,68,0.3)"/>
                                    <text x="310" y="145" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="10">PICK ONE!</text>
                                    <text x="40" y="193" fill="#888" font-size="8">Example: Burn code excludes frostbite - can't have both same site</text>

                                    <!-- Excludes2 - Yellow/Caution -->
                                    <rect x="20" y="210" width="360" height="85" rx="8" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                                    <text x="40" y="233" fill="#f59e0b" font-weight="bold" font-size="12">⚠️ EXCLUDES2</text>
                                    <text x="40" y="253" fill="#fff" font-size="9">Not here, but CAN coexist - code both if documented</text>
                                    <text x="40" y="270" fill="#888" font-size="8">Patient could have both, just use different codes</text>
                                    <rect x="250" y="220" width="120" height="30" rx="4" fill="rgba(245,158,11,0.3)"/>
                                    <text x="310" y="240" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="10">BOTH OK!</text>
                                    <text x="40" y="288" fill="#888" font-size="8">Example: J44.1 COPD excludes asthma J45 - patient could have both</text>
                                </svg>`,
                                caption: "Excludes1 = Never together | Excludes2 = Can coexist separately"
                            }
                        },
                        {
                            type: "concept",
                            title: "Code First, Use Additional, Code Also",
                            content: "These three instructions tell you about SEQUENCING - which code goes first when multiple codes are needed.\n\n**CODE FIRST (Etiology)**\nThis code is for the MANIFESTATION (result). You MUST code the underlying cause FIRST.\nExample: G63 Polyneuropathy says 'Code first underlying disease' - if caused by diabetes, E11.42 goes FIRST.\n\n**USE ADDITIONAL CODE**\nThe current code needs a PARTNER. Add another code to complete the picture.\nExample: J96.0 Respiratory failure says 'Use additional code for associated condition'\n\n**CODE ALSO**\nSuggests an additional code MAY be appropriate but isn't mandatory. Use clinical judgment.\n\n**The CAUSE-EFFECT Rule:**\nCause (etiology) → Effect (manifestation)\nCause codes FIRST, effect codes SECOND",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 400 340" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="340" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#0ea5e9" font-weight="bold" font-size="13">SEQUENCING INSTRUCTIONS</text>

                                    <!-- Code First -->
                                    <rect x="20" y="45" width="360" height="80" rx="8" fill="rgba(239,68,68,0.1)" stroke="#ef4444"/>
                                    <text x="40" y="68" fill="#ef4444" font-weight="bold" font-size="11">CODE FIRST</text>
                                    <text x="40" y="88" fill="#fff" font-size="9">"I'm the result - put my CAUSE before me"</text>
                                    <rect x="250" y="55" width="60" height="25" rx="4" fill="#ef4444"/>
                                    <text x="280" y="72" text-anchor="middle" fill="#fff" font-size="8">CAUSE</text>
                                    <text x="315" y="72" fill="#888" font-size="10">→</text>
                                    <rect x="325" y="55" width="45" height="25" rx="4" fill="rgba(239,68,68,0.3)" stroke="#ef4444"/>
                                    <text x="347" y="72" text-anchor="middle" fill="#ef4444" font-size="8">This</text>
                                    <text x="40" y="115" fill="#888" font-size="8">Example: Diabetic neuropathy → E11.42 (diabetes) THEN G63 (neuropathy)</text>

                                    <!-- Use Additional -->
                                    <rect x="20" y="135" width="360" height="80" rx="8" fill="rgba(16,185,129,0.1)" stroke="#10b981"/>
                                    <text x="40" y="158" fill="#10b981" font-weight="bold" font-size="11">USE ADDITIONAL CODE</text>
                                    <text x="40" y="178" fill="#fff" font-size="9">"I need a partner code - add one after me"</text>
                                    <rect x="250" y="145" width="45" height="25" rx="4" fill="#10b981"/>
                                    <text x="272" y="162" text-anchor="middle" fill="#fff" font-size="8">This</text>
                                    <text x="300" y="162" fill="#888" font-size="10">→</text>
                                    <rect x="310" y="145" width="60" height="25" rx="4" fill="rgba(16,185,129,0.3)" stroke="#10b981"/>
                                    <text x="340" y="162" text-anchor="middle" fill="#10b981" font-size="8">+ADD</text>
                                    <text x="40" y="205" fill="#888" font-size="8">Example: Sepsis A41.9 → Use additional code for organ dysfunction</text>

                                    <!-- Code Also -->
                                    <rect x="20" y="225" width="360" height="80" rx="8" fill="rgba(245,158,11,0.1)" stroke="#f59e0b"/>
                                    <text x="40" y="248" fill="#f59e0b" font-weight="bold" font-size="11">CODE ALSO</text>
                                    <text x="40" y="268" fill="#fff" font-size="9">"Consider adding - use your judgment"</text>
                                    <rect x="250" y="235" width="45" height="25" rx="4" fill="#f59e0b"/>
                                    <text x="272" y="252" text-anchor="middle" fill="#fff" font-size="8">This</text>
                                    <text x="300" y="252" fill="#888" font-size="10">→</text>
                                    <rect x="310" y="235" width="60" height="25" rx="4" fill="rgba(245,158,11,0.3)" stroke="#f59e0b"/>
                                    <text x="340" y="252" text-anchor="middle" fill="#f59e0b" font-size="8">Maybe?</text>
                                    <text x="40" y="295" fill="#888" font-size="8">Not mandatory - code if clinically relevant and documented</text>
                                </svg>`,
                                caption: "Remember: Cause before Effect, Primary before Secondary"
                            }
                        },
                        {
                            type: "concept",
                            title: "Memory Tool: SCENE",
                            content: "Remember the 5 key conventions with SCENE:\n\n**S - SEQUENCING matters**\nCode First, Use Additional - order tells the story\n\n**C - CAN'T coexist (Excludes1)**\nMutually exclusive conditions - pick one\n\n**E - EITHER can exist (Excludes2)**\nBoth conditions possible - code separately if documented\n\n**N - NOTES are mandatory**\nIncludes notes, chapter notes - read them all\n\n**E - EXPAND to specificity**\nPlaceholder X, 7th character - use all required characters\n\n**Say it:** 'Set the SCENE for accurate coding - Sequencing, Can't coexist, Either exists, Notes, Expand!'",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 400 300" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="300" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#0ea5e9" font-weight="bold" font-size="16">S C E N E</text>
                                    <text x="200" y="45" text-anchor="middle" fill="#888" font-size="10">Your Conventions Memory Tool</text>

                                    <!-- S -->
                                    <rect x="20" y="60" width="70" height="90" rx="6" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <text x="55" y="85" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">S</text>
                                    <text x="55" y="105" text-anchor="middle" fill="#ef4444" font-size="7">SEQUENCING</text>
                                    <text x="55" y="120" text-anchor="middle" fill="#fff" font-size="6">Order</text>
                                    <text x="55" y="132" text-anchor="middle" fill="#fff" font-size="6">matters</text>
                                    <text x="55" y="144" text-anchor="middle" fill="#888" font-size="5">Code First</text>

                                    <!-- C -->
                                    <rect x="95" y="60" width="70" height="90" rx="6" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <text x="130" y="85" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">C</text>
                                    <text x="130" y="105" text-anchor="middle" fill="#f59e0b" font-size="7">CAN'T</text>
                                    <text x="130" y="120" text-anchor="middle" fill="#fff" font-size="6">Excludes1</text>
                                    <text x="130" y="132" text-anchor="middle" fill="#fff" font-size="6">Never</text>
                                    <text x="130" y="144" text-anchor="middle" fill="#888" font-size="5">together</text>

                                    <!-- E -->
                                    <rect x="170" y="60" width="70" height="90" rx="6" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="205" y="85" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">E</text>
                                    <text x="205" y="105" text-anchor="middle" fill="#10b981" font-size="7">EITHER</text>
                                    <text x="205" y="120" text-anchor="middle" fill="#fff" font-size="6">Excludes2</text>
                                    <text x="205" y="132" text-anchor="middle" fill="#fff" font-size="6">Both</text>
                                    <text x="205" y="144" text-anchor="middle" fill="#888" font-size="5">can exist</text>

                                    <!-- N -->
                                    <rect x="245" y="60" width="70" height="90" rx="6" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <text x="280" y="85" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="22">N</text>
                                    <text x="280" y="105" text-anchor="middle" fill="#3b82f6" font-size="7">NOTES</text>
                                    <text x="280" y="120" text-anchor="middle" fill="#fff" font-size="6">Read all</text>
                                    <text x="280" y="132" text-anchor="middle" fill="#fff" font-size="6">Includes</text>
                                    <text x="280" y="144" text-anchor="middle" fill="#888" font-size="5">Chapter</text>

                                    <!-- E -->
                                    <rect x="320" y="60" width="70" height="90" rx="6" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="355" y="85" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">E</text>
                                    <text x="355" y="105" text-anchor="middle" fill="#8b5cf6" font-size="7">EXPAND</text>
                                    <text x="355" y="120" text-anchor="middle" fill="#fff" font-size="6">Specificity</text>
                                    <text x="355" y="132" text-anchor="middle" fill="#fff" font-size="6">7th char</text>
                                    <text x="355" y="144" text-anchor="middle" fill="#888" font-size="5">Placeholder</text>

                                    <!-- Phrase -->
                                    <rect x="30" y="165" width="340" height="50" rx="8" fill="rgba(14,165,233,0.2)" stroke="#0ea5e9"/>
                                    <text x="200" y="188" text-anchor="middle" fill="#fff" font-size="9">"Set the SCENE for accurate coding!"</text>
                                    <text x="200" y="205" text-anchor="middle" fill="#0ea5e9" font-size="8">Sequencing • Can't • Either • Notes • Expand</text>

                                    <!-- Quick reference -->
                                    <rect x="30" y="225" width="340" height="65" rx="6" fill="rgba(255,255,255,0.05)"/>
                                    <text x="200" y="245" text-anchor="middle" fill="#888" font-size="9">QUICK REFERENCE</text>
                                    <text x="110" y="265" text-anchor="middle" fill="#ef4444" font-size="8">Excludes1 = NEVER</text>
                                    <text x="290" y="265" text-anchor="middle" fill="#10b981" font-size="8">Excludes2 = MAYBE</text>
                                    <text x="200" y="282" text-anchor="middle" fill="#fff" font-size="8">Code First = Cause → Effect</text>
                                </svg>`,
                                caption: "SCENE: Your guide to coding conventions"
                            }
                        },
                        {
                            type: "concept",
                            title: "Placeholder X and 7th Character Requirements",
                            content: "Some ICD-10-CM codes MUST have 7 characters. But what if the base code only has 3-5? Enter the placeholder 'X'!\n\n**PLACEHOLDER X:**\nUsed to fill empty positions so you can add required characters. The X has NO meaning itself - it's just a spaceholder.\n\nExample: T36.0X1A (Poisoning by penicillins)\n• T36.0 = Penicillins\n• X = Placeholder (no 5th character exists)\n• 1 = Accidental\n• A = Initial encounter\n\n**7TH CHARACTER REQUIREMENTS:**\nMany codes (especially injuries, pregnancy) require a 7th character:\n• A = Initial encounter\n• D = Subsequent encounter\n• S = Sequela (late effect)\n\n**If you see a code marked as needing 7 characters and you submit fewer, the claim will be REJECTED!**",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 400 320" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="320" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#0ea5e9" font-weight="bold" font-size="13">PLACEHOLDER X &amp; 7TH CHARACTER</text>

                                    <!-- Visual code breakdown -->
                                    <rect x="50" y="45" width="300" height="70" rx="8" fill="rgba(14,165,233,0.1)" stroke="#0ea5e9"/>
                                    <text x="200" y="65" text-anchor="middle" fill="#0ea5e9" font-size="10">EXAMPLE: T36.0X1A</text>

                                    <rect x="80" y="80" width="30" height="25" rx="4" fill="#ef4444"/>
                                    <text x="95" y="97" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">T</text>

                                    <rect x="115" y="80" width="30" height="25" rx="4" fill="#f59e0b"/>
                                    <text x="130" y="97" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">3</text>

                                    <rect x="150" y="80" width="30" height="25" rx="4" fill="#f59e0b"/>
                                    <text x="165" y="97" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">6</text>

                                    <text x="190" y="97" text-anchor="middle" fill="#888" font-size="14">.</text>

                                    <rect x="200" y="80" width="30" height="25" rx="4" fill="#10b981"/>
                                    <text x="215" y="97" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">0</text>

                                    <rect x="235" y="80" width="30" height="25" rx="4" fill="#8b5cf6" stroke="#fff" stroke-width="2"/>
                                    <text x="250" y="97" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">X</text>

                                    <rect x="270" y="80" width="30" height="25" rx="4" fill="#3b82f6"/>
                                    <text x="285" y="97" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">1</text>

                                    <rect x="305" y="80" width="30" height="25" rx="4" fill="#ec4899"/>
                                    <text x="320" y="97" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">A</text>

                                    <!-- Labels -->
                                    <text x="250" y="125" text-anchor="middle" fill="#8b5cf6" font-size="8">PLACEHOLDER</text>
                                    <text x="320" y="125" text-anchor="middle" fill="#ec4899" font-size="8">7TH CHAR</text>

                                    <!-- 7th character options -->
                                    <rect x="20" y="145" width="360" height="100" rx="8" fill="rgba(236,72,153,0.1)" stroke="#ec4899"/>
                                    <text x="200" y="168" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="11">7TH CHARACTER OPTIONS (Injuries)</text>

                                    <rect x="40" y="180" width="100" height="50" rx="6" fill="rgba(16,185,129,0.2)"/>
                                    <text x="90" y="200" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="14">A</text>
                                    <text x="90" y="218" text-anchor="middle" fill="#fff" font-size="8">Initial</text>
                                    <text x="90" y="228" text-anchor="middle" fill="#888" font-size="7">First treatment</text>

                                    <rect x="150" y="180" width="100" height="50" rx="6" fill="rgba(245,158,11,0.2)"/>
                                    <text x="200" y="200" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="14">D</text>
                                    <text x="200" y="218" text-anchor="middle" fill="#fff" font-size="8">Subsequent</text>
                                    <text x="200" y="228" text-anchor="middle" fill="#888" font-size="7">Follow-up care</text>

                                    <rect x="260" y="180" width="100" height="50" rx="6" fill="rgba(139,92,246,0.2)"/>
                                    <text x="310" y="200" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="14">S</text>
                                    <text x="310" y="218" text-anchor="middle" fill="#fff" font-size="8">Sequela</text>
                                    <text x="310" y="228" text-anchor="middle" fill="#888" font-size="7">Late effect</text>

                                    <!-- Warning -->
                                    <rect x="40" y="260" width="320" height="45" rx="6" fill="rgba(239,68,68,0.2)" stroke="#ef4444"/>
                                    <text x="200" y="280" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="10">⚠️ MISSING 7TH CHARACTER = CLAIM REJECTED!</text>
                                    <text x="200" y="295" text-anchor="middle" fill="#fff" font-size="8">Always check if code requires 7 characters</text>
                                </svg>`,
                                caption: "X is a placeholder, 7th character is mandatory for many codes"
                            }
                        },
                        {
                            type: "quiz",
                            question: "A code has an Excludes1 note listing another condition. What does this mean?",
                            options: [
                                { text: "You should code both conditions together", correct: false },
                                { text: "The conditions are mutually exclusive - NEVER code both", correct: true },
                                { text: "The second condition is included in the first code", correct: false },
                                { text: "You need supervisor approval to use the code", correct: false }
                            ],
                            explanation: "Excludes1 means the two conditions are MUTUALLY EXCLUSIVE - they cannot occur together in the same patient at the same time. You must choose ONE code. If you see 'burns excludes1 frostbite,' you can't code both for the same site because you can't have a burn AND frostbite simultaneously on the same area."
                        },
                        {
                            type: "quiz",
                            question: "What is the purpose of the placeholder 'X' in ICD-10-CM codes?",
                            options: [
                                { text: "It indicates an unknown diagnosis", correct: false },
                                { text: "It fills empty character positions to allow required 7th characters", correct: true },
                                { text: "It means the code is experimental", correct: false },
                                { text: "It indicates the code is for external causes only", correct: false }
                            ],
                            explanation: "The placeholder X has no meaning itself - it simply fills empty character positions (usually the 5th or 6th) when the code structure requires a 7th character. For example, T36.0X1A needs the X because there's no 5th character in the penicillin poisoning category, but a 6th (intent) and 7th (encounter) character are required."
                        },
                        {
                            type: "visual",
                            title: "Lesson 2 Summary: Conventions Mastered!",
                            content: "You now understand the critical conventions that guide accurate ICD-10-CM coding.",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 400 320" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="320" fill="#1a1a2e"/>
                                    <text x="200" y="30" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="14">🎉 LESSON 2 COMPLETE!</text>

                                    <rect x="40" y="50" width="320" height="250" rx="12" fill="rgba(16,185,129,0.1)" stroke="#10b981"/>

                                    <text x="200" y="80" text-anchor="middle" fill="#10b981" font-size="11">YOU'VE MASTERED:</text>

                                    <text x="60" y="110" fill="#10b981" font-size="14">✓</text>
                                    <text x="85" y="110" fill="#fff" font-size="9">Includes notes - what belongs in a category</text>

                                    <text x="60" y="135" fill="#10b981" font-size="14">✓</text>
                                    <text x="85" y="135" fill="#fff" font-size="9">Excludes1 - NEVER code together</text>

                                    <text x="60" y="160" fill="#10b981" font-size="14">✓</text>
                                    <text x="85" y="160" fill="#fff" font-size="9">Excludes2 - CAN coexist separately</text>

                                    <text x="60" y="185" fill="#10b981" font-size="14">✓</text>
                                    <text x="85" y="185" fill="#fff" font-size="9">Code First / Use Additional / Code Also</text>

                                    <text x="60" y="210" fill="#10b981" font-size="14">✓</text>
                                    <text x="85" y="210" fill="#fff" font-size="9">Placeholder X and 7th character rules</text>

                                    <text x="60" y="235" fill="#10b981" font-size="14">✓</text>
                                    <text x="85" y="235" fill="#fff" font-size="9">SCENE mnemonic for conventions</text>

                                    <rect x="60" y="260" width="280" height="30" rx="6" fill="rgba(59,130,246,0.2)" stroke="#3b82f6"/>
                                    <text x="200" y="280" text-anchor="middle" fill="#3b82f6" font-size="10">NEXT: General Coding Guidelines →</text>
                                </svg>`,
                                caption: "Conventions are the rules that make coding consistent"
                            }
                        }
                    ]
                },

                // ========================================
                // LESSON 3: GENERAL CODING GUIDELINES
                // ========================================
                {
                    id: 3,
                    title: "General Coding Guidelines",
                    duration: 15,
                    completed: false,
                    cards: [
                        {
                            type: "intro",
                            title: "The Universal Rules of Medical Coding",
                            content: "Before you dive into specific diseases, you need to understand the GENERAL rules that apply to ALL coding situations. These are the foundational principles that guide every code you assign.\n\n**The Official Guidelines:**\nCMS and NCHS publish the Official ICD-10-CM Guidelines annually. These aren't suggestions - they're REQUIREMENTS for accurate coding and proper reimbursement.\n\n**Three Main Sections:**\n• Section I: Conventions and General Guidelines\n• Section II: Selection of Principal Diagnosis (Inpatient)\n• Section III: Reporting Additional Diagnoses\n• Section IV: Outpatient Coding Guidelines\n\nMastering these rules prevents claim denials, audit findings, and compliance violations.",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 400 300" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="300" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#0ea5e9" font-weight="bold" font-size="13">OFFICIAL CODING GUIDELINES</text>

                                    <rect x="100" y="45" width="200" height="50" rx="25" fill="rgba(14,165,233,0.3)" stroke="#0ea5e9" stroke-width="2"/>
                                    <text x="200" y="75" text-anchor="middle" fill="#0ea5e9" font-weight="bold" font-size="11">CMS/NCHS GUIDELINES</text>

                                    <!-- Arrows down -->
                                    <line x1="200" y1="95" x2="200" y2="115" stroke="#0ea5e9" stroke-width="2"/>
                                    <line x1="200" y1="115" x2="100" y2="135" stroke="#0ea5e9" stroke-width="2"/>
                                    <line x1="200" y1="115" x2="200" y2="135" stroke="#0ea5e9" stroke-width="2"/>
                                    <line x1="200" y1="115" x2="300" y2="135" stroke="#0ea5e9" stroke-width="2"/>

                                    <!-- Four sections -->
                                    <rect x="20" y="140" width="85" height="70" rx="6" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <text x="62" y="160" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="9">SECTION I</text>
                                    <text x="62" y="178" text-anchor="middle" fill="#fff" font-size="7">Conventions</text>
                                    <text x="62" y="192" text-anchor="middle" fill="#fff" font-size="7">&amp; General</text>
                                    <text x="62" y="206" text-anchor="middle" fill="#888" font-size="6">Rules</text>

                                    <rect x="115" y="140" width="85" height="70" rx="6" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="157" y="160" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="9">SECTION II</text>
                                    <text x="157" y="178" text-anchor="middle" fill="#fff" font-size="7">Principal Dx</text>
                                    <text x="157" y="192" text-anchor="middle" fill="#fff" font-size="7">Selection</text>
                                    <text x="157" y="206" text-anchor="middle" fill="#888" font-size="6">Inpatient</text>

                                    <rect x="210" y="140" width="85" height="70" rx="6" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <text x="252" y="160" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="9">SECTION III</text>
                                    <text x="252" y="178" text-anchor="middle" fill="#fff" font-size="7">Additional</text>
                                    <text x="252" y="192" text-anchor="middle" fill="#fff" font-size="7">Diagnoses</text>
                                    <text x="252" y="206" text-anchor="middle" fill="#888" font-size="6">Secondary</text>

                                    <rect x="305" y="140" width="85" height="70" rx="6" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="347" y="160" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="9">SECTION IV</text>
                                    <text x="347" y="178" text-anchor="middle" fill="#fff" font-size="7">Outpatient</text>
                                    <text x="347" y="192" text-anchor="middle" fill="#fff" font-size="7">Guidelines</text>
                                    <text x="347" y="206" text-anchor="middle" fill="#888" font-size="6">Office/ER</text>

                                    <!-- Bottom callout -->
                                    <rect x="40" y="225" width="320" height="60" rx="8" fill="rgba(239,68,68,0.1)" stroke="#ef4444"/>
                                    <text x="200" y="248" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="10">⚠️ NOT OPTIONAL!</text>
                                    <text x="200" y="268" text-anchor="middle" fill="#fff" font-size="9">These guidelines are required by HIPAA for all</text>
                                    <text x="200" y="282" text-anchor="middle" fill="#fff" font-size="9">healthcare settings - violation = compliance risk</text>
                                </svg>`,
                                caption: "Official Guidelines are mandatory, not optional"
                            }
                        },
                        {
                            type: "concept",
                            title: "Rule #1: Code to the Highest Level of Specificity",
                            content: "This is the GOLDEN RULE of medical coding. Always assign the most specific code that the documentation supports.\n\n**What This Means:**\n• If laterality is documented (right/left), code it\n• If the type is specified (acute/chronic), code it\n• If the cause is known, code it\n• Never use 'unspecified' when specifics are documented\n\n**Why It Matters:**\n• More specific codes = better data quality\n• Unspecified codes may trigger claim edits\n• Auditors look for inappropriate unspecified codes\n• Affects reimbursement and quality metrics\n\n**Example:**\n• BAD: M54.5 (Low back pain - unspecified)\n• GOOD: M54.51 (Vertebrogenic low back pain) - if documented\n\nUnspecified codes are only appropriate when the documentation truly lacks detail.",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 400 320" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="320" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="14">THE GOLDEN RULE: SPECIFICITY</text>

                                    <!-- Pyramid showing specificity levels -->
                                    <polygon points="200,50 80,180 320,180" fill="none" stroke="#10b981" stroke-width="2"/>
                                    <line x1="120" y1="130" x2="280" y2="130" stroke="#10b981" stroke-width="1"/>
                                    <line x1="100" y1="155" x2="300" y2="155" stroke="#10b981" stroke-width="1"/>

                                    <text x="200" y="75" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="9">MOST SPECIFIC</text>
                                    <text x="200" y="90" text-anchor="middle" fill="#fff" font-size="8">Full 7 characters</text>

                                    <text x="200" y="120" text-anchor="middle" fill="#f59e0b" font-size="9">MORE DETAIL</text>
                                    <text x="200" y="135" text-anchor="middle" fill="#fff" font-size="8">Laterality, type</text>

                                    <text x="200" y="160" text-anchor="middle" fill="#ef4444" font-size="9">UNSPECIFIED</text>
                                    <text x="200" y="175" text-anchor="middle" fill="#888" font-size="8">Only when no detail</text>

                                    <!-- Good vs Bad example -->
                                    <rect x="20" y="200" width="170" height="55" rx="6" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <text x="105" y="220" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="10">❌ TOO VAGUE</text>
                                    <text x="105" y="240" text-anchor="middle" fill="#fff" font-size="9">M54.5 Low back pain</text>
                                    <text x="105" y="252" text-anchor="middle" fill="#888" font-size="7">"Unspecified"</text>

                                    <rect x="210" y="200" width="170" height="55" rx="6" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="295" y="220" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="10">✓ SPECIFIC</text>
                                    <text x="295" y="240" text-anchor="middle" fill="#fff" font-size="9">M54.51 Vertebrogenic</text>
                                    <text x="295" y="252" text-anchor="middle" fill="#888" font-size="7">When documented</text>

                                    <!-- Rule -->
                                    <rect x="40" y="265" width="320" height="45" rx="6" fill="rgba(16,185,129,0.2)" stroke="#10b981"/>
                                    <text x="200" y="285" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="10">RULE: Use unspecified ONLY when documentation lacks detail</text>
                                    <text x="200" y="300" text-anchor="middle" fill="#fff" font-size="8">Query the provider if you need more information</text>
                                </svg>`,
                                caption: "Always climb to the top of the specificity pyramid"
                            }
                        },
                        {
                            type: "concept",
                            title: "Rule #2: Acute vs. Chronic Conditions",
                            content: "When a patient has BOTH an acute and chronic form of the same condition, there are specific rules for coding:\n\n**THE RULE:**\nIf separate subentries exist for acute/subacute and chronic at the same indentation level in the Index, code BOTH - with the ACUTE code FIRST.\n\n**Example - Bronchitis:**\nPatient has acute exacerbation of chronic bronchitis:\n• J20.9 Acute bronchitis (FIRST)\n• J42 Chronic bronchitis (SECOND)\n\n**EXCEPTION:**\nIf a COMBINATION code exists that captures both, use that single code instead.\n• J44.1 COPD with acute exacerbation (one code captures both!)\n\n**Key Point:**\nAcute conditions are generally more resource-intensive and are sequenced first when both exist separately.",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 400 300" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="300" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#0ea5e9" font-weight="bold" font-size="13">ACUTE vs CHRONIC CODING</text>

                                    <!-- Scenario 1: Both separate -->
                                    <rect x="20" y="45" width="170" height="110" rx="8" fill="rgba(245,158,11,0.1)" stroke="#f59e0b"/>
                                    <text x="105" y="68" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="10">SEPARATE CODES EXIST</text>

                                    <rect x="35" y="80" width="60" height="30" rx="4" fill="#ef4444"/>
                                    <text x="65" y="100" text-anchor="middle" fill="#fff" font-size="9">ACUTE</text>
                                    <text x="105" y="100" fill="#fff" font-size="12">→</text>
                                    <text x="120" y="100" fill="#10b981" font-size="9">1st</text>

                                    <rect x="35" y="115" width="60" height="30" rx="4" fill="#3b82f6"/>
                                    <text x="65" y="135" text-anchor="middle" fill="#fff" font-size="9">CHRONIC</text>
                                    <text x="105" y="135" fill="#fff" font-size="12">→</text>
                                    <text x="120" y="135" fill="#888" font-size="9">2nd</text>

                                    <!-- Scenario 2: Combination exists -->
                                    <rect x="210" y="45" width="170" height="110" rx="8" fill="rgba(16,185,129,0.1)" stroke="#10b981"/>
                                    <text x="295" y="68" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="10">COMBINATION EXISTS</text>

                                    <rect x="235" y="85" width="120" height="50" rx="6" fill="#10b981"/>
                                    <text x="295" y="108" text-anchor="middle" fill="#fff" font-size="9">ONE CODE</text>
                                    <text x="295" y="125" text-anchor="middle" fill="#fff" font-size="8">captures both!</text>

                                    <!-- Example -->
                                    <rect x="20" y="170" width="360" height="110" rx="8" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6"/>
                                    <text x="200" y="193" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="11">EXAMPLE: COPD with Acute Exacerbation</text>

                                    <rect x="40" y="210" width="145" height="55" rx="6" fill="rgba(239,68,68,0.1)"/>
                                    <text x="112" y="228" text-anchor="middle" fill="#ef4444" font-size="8">❌ DON'T DO THIS:</text>
                                    <text x="112" y="245" text-anchor="middle" fill="#fff" font-size="8">J44.9 + J44.1</text>
                                    <text x="112" y="258" text-anchor="middle" fill="#888" font-size="7">Redundant codes</text>

                                    <rect x="215" y="210" width="145" height="55" rx="6" fill="rgba(16,185,129,0.1)"/>
                                    <text x="287" y="228" text-anchor="middle" fill="#10b981" font-size="8">✓ DO THIS:</text>
                                    <text x="287" y="245" text-anchor="middle" fill="#fff" font-size="8">J44.1 only</text>
                                    <text x="287" y="258" text-anchor="middle" fill="#888" font-size="7">Combo code!</text>
                                </svg>`,
                                caption: "Check for combination codes before using separate acute/chronic codes"
                            }
                        },
                        {
                            type: "concept",
                            title: "Rule #3: Combination Codes",
                            content: "A COMBINATION CODE is a single code that captures:\n• A diagnosis WITH a manifestation, OR\n• A diagnosis WITH a complication, OR\n• Two diagnoses, OR\n• A diagnosis WITH an associated secondary process\n\n**THE RULE:**\nAssign only the combination code when one fully describes ALL elements documented. Do NOT assign multiple codes when a combination code exists.\n\n**How to Identify:**\n• Look for 'with' in the code description\n• Look for 'in' subterms in the Index\n• Read Includes/Excludes notes\n\n**Examples:**\n• E11.65 Type 2 diabetes WITH hyperglycemia (one code!)\n• K50.114 Crohn's disease WITH abscess (one code!)\n• J44.1 COPD WITH acute exacerbation (one code!)\n\n**Warning:** Using separate codes when a combination exists is a common audit finding!",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 400 320" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="320" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#0ea5e9" font-weight="bold" font-size="13">COMBINATION CODES</text>
                                    <text x="200" y="45" text-anchor="middle" fill="#888" font-size="10">One code captures multiple elements</text>

                                    <!-- What they capture -->
                                    <rect x="20" y="60" width="360" height="75" rx="8" fill="rgba(14,165,233,0.1)" stroke="#0ea5e9"/>
                                    <text x="200" y="80" text-anchor="middle" fill="#0ea5e9" font-size="10">COMBINATION CODES CAPTURE:</text>
                                    <text x="100" y="105" text-anchor="middle" fill="#fff" font-size="8">Diagnosis +</text>
                                    <text x="100" y="120" text-anchor="middle" fill="#fff" font-size="8">Manifestation</text>
                                    <text x="200" y="105" text-anchor="middle" fill="#fff" font-size="8">Diagnosis +</text>
                                    <text x="200" y="120" text-anchor="middle" fill="#fff" font-size="8">Complication</text>
                                    <text x="300" y="105" text-anchor="middle" fill="#fff" font-size="8">Two Related</text>
                                    <text x="300" y="120" text-anchor="middle" fill="#fff" font-size="8">Diagnoses</text>

                                    <!-- Example -->
                                    <rect x="20" y="145" width="170" height="80" rx="6" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <text x="105" y="165" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="9">❌ WRONG (2 codes)</text>
                                    <text x="105" y="185" text-anchor="middle" fill="#fff" font-size="8">E11.9 Type 2 diabetes</text>
                                    <text x="105" y="200" text-anchor="middle" fill="#fff" font-size="8">R73.9 Hyperglycemia</text>
                                    <text x="105" y="218" text-anchor="middle" fill="#888" font-size="7">Redundant!</text>

                                    <rect x="210" y="145" width="170" height="80" rx="6" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="295" y="165" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="9">✓ CORRECT (1 code)</text>
                                    <text x="295" y="190" text-anchor="middle" fill="#fff" font-size="9">E11.65</text>
                                    <text x="295" y="208" text-anchor="middle" fill="#fff" font-size="8">Type 2 DM with</text>
                                    <text x="295" y="220" text-anchor="middle" fill="#fff" font-size="8">hyperglycemia</text>

                                    <!-- How to find -->
                                    <rect x="20" y="235" width="360" height="70" rx="8" fill="rgba(245,158,11,0.1)" stroke="#f59e0b"/>
                                    <text x="200" y="255" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="10">HOW TO IDENTIFY COMBINATION CODES</text>
                                    <text x="100" y="280" text-anchor="middle" fill="#fff" font-size="9">"with" in title</text>
                                    <text x="200" y="280" text-anchor="middle" fill="#fff" font-size="9">"in" subterms</text>
                                    <text x="310" y="280" text-anchor="middle" fill="#fff" font-size="9">Includes notes</text>
                                    <text x="100" y="295" text-anchor="middle" fill="#888" font-size="7">E11.65</text>
                                    <text x="200" y="295" text-anchor="middle" fill="#888" font-size="7">Index lookup</text>
                                    <text x="310" y="295" text-anchor="middle" fill="#888" font-size="7">Tabular List</text>
                                </svg>`,
                                caption: "Look for 'with' and 'in' to find combination codes"
                            }
                        },
                        {
                            type: "concept",
                            title: "Memory Tool: SMART Coding",
                            content: "Remember the general guidelines with SMART:\n\n**S - SPECIFICITY First**\nAlways code to the highest level of detail documented\n\n**M - MANIFESTATIONS Follow**\nCode etiology first, then manifestation (Code First rules)\n\n**A - ACUTE Before Chronic**\nWhen both exist separately, acute comes first\n\n**R - REDUCE with Combinations**\nUse combination codes instead of multiple separate codes\n\n**T - TABULAR is Truth**\nAlways verify in the Tabular List - never trust Index alone\n\n**Say it:** 'Be SMART - Specificity, Manifestations follow, Acute first, Reduce with combos, Tabular is truth!'",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 400 320" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="320" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#0ea5e9" font-weight="bold" font-size="16">S M A R T</text>
                                    <text x="200" y="45" text-anchor="middle" fill="#888" font-size="10">General Guidelines Memory Tool</text>

                                    <!-- S -->
                                    <rect x="20" y="60" width="70" height="85" rx="6" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="55" y="85" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">S</text>
                                    <text x="55" y="105" text-anchor="middle" fill="#10b981" font-size="7">SPECIFICITY</text>
                                    <text x="55" y="120" text-anchor="middle" fill="#fff" font-size="6">Highest</text>
                                    <text x="55" y="132" text-anchor="middle" fill="#fff" font-size="6">detail</text>

                                    <!-- M -->
                                    <rect x="95" y="60" width="70" height="85" rx="6" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <text x="130" y="85" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">M</text>
                                    <text x="130" y="105" text-anchor="middle" fill="#f59e0b" font-size="7">MANIFEST</text>
                                    <text x="130" y="120" text-anchor="middle" fill="#fff" font-size="6">Etiology</text>
                                    <text x="130" y="132" text-anchor="middle" fill="#fff" font-size="6">first</text>

                                    <!-- A -->
                                    <rect x="170" y="60" width="70" height="85" rx="6" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <text x="205" y="85" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">A</text>
                                    <text x="205" y="105" text-anchor="middle" fill="#ef4444" font-size="7">ACUTE</text>
                                    <text x="205" y="120" text-anchor="middle" fill="#fff" font-size="6">Before</text>
                                    <text x="205" y="132" text-anchor="middle" fill="#fff" font-size="6">chronic</text>

                                    <!-- R -->
                                    <rect x="245" y="60" width="70" height="85" rx="6" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <text x="280" y="85" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="22">R</text>
                                    <text x="280" y="105" text-anchor="middle" fill="#3b82f6" font-size="7">REDUCE</text>
                                    <text x="280" y="120" text-anchor="middle" fill="#fff" font-size="6">Combo</text>
                                    <text x="280" y="132" text-anchor="middle" fill="#fff" font-size="6">codes</text>

                                    <!-- T -->
                                    <rect x="320" y="60" width="70" height="85" rx="6" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="355" y="85" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">T</text>
                                    <text x="355" y="105" text-anchor="middle" fill="#8b5cf6" font-size="7">TABULAR</text>
                                    <text x="355" y="120" text-anchor="middle" fill="#fff" font-size="6">Always</text>
                                    <text x="355" y="132" text-anchor="middle" fill="#fff" font-size="6">verify</text>

                                    <!-- Phrase -->
                                    <rect x="30" y="160" width="340" height="45" rx="8" fill="rgba(14,165,233,0.2)" stroke="#0ea5e9"/>
                                    <text x="200" y="182" text-anchor="middle" fill="#fff" font-size="9">"Be SMART when coding!"</text>
                                    <text x="200" y="198" text-anchor="middle" fill="#0ea5e9" font-size="8">Specificity • Manifestations • Acute • Reduce • Tabular</text>

                                    <!-- Quick tips -->
                                    <rect x="30" y="215" width="340" height="90" rx="6" fill="rgba(255,255,255,0.05)"/>
                                    <text x="200" y="235" text-anchor="middle" fill="#888" font-size="9">QUICK APPLICATION</text>
                                    <text x="200" y="255" text-anchor="middle" fill="#fff" font-size="8">1. Code most specific first</text>
                                    <text x="200" y="272" text-anchor="middle" fill="#fff" font-size="8">2. Check for "with" combo codes</text>
                                    <text x="200" y="289" text-anchor="middle" fill="#fff" font-size="8">3. Sequence acute → chronic → unspecified</text>
                                </svg>`,
                                caption: "SMART: Your guide to general coding guidelines"
                            }
                        },
                        {
                            type: "quiz",
                            question: "A patient has both acute bronchitis (J20.9) and chronic bronchitis (J42). How should you code this?",
                            options: [
                                { text: "J42 only - chronic is the underlying condition", correct: false },
                                { text: "J20.9 first, then J42 - acute before chronic", correct: true },
                                { text: "J20.9 only - acute is more important", correct: false },
                                { text: "Either order is acceptable", correct: false }
                            ],
                            explanation: "When a patient has both acute and chronic forms of a condition and separate codes exist for each, sequence the ACUTE code first, then the chronic code. Acute conditions generally require more immediate resources and attention. However, always check for a combination code first - if one exists (like J44.1 COPD with acute exacerbation), use that single code instead."
                        },
                        {
                            type: "quiz",
                            question: "Documentation states 'Type 2 diabetes with hyperglycemia.' How should you code this?",
                            options: [
                                { text: "E11.9 (Type 2 DM) + R73.9 (Hyperglycemia)", correct: false },
                                { text: "E11.65 (Type 2 DM with hyperglycemia) - one combination code", correct: true },
                                { text: "R73.9 only - the symptom is what's being treated", correct: false },
                                { text: "E11.9 only - hyperglycemia is assumed", correct: false }
                            ],
                            explanation: "E11.65 is a COMBINATION code that captures both the diabetes and the hyperglycemia in a single code. Using two separate codes (E11.9 + R73.9) would be incorrect and could trigger audit flags. Always look for combination codes when documentation shows 'with' relationships between conditions."
                        },
                        {
                            type: "visual",
                            title: "Lesson 3 Summary: Guidelines Mastered!",
                            content: "You now understand the foundational rules that govern ALL medical coding.",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 400 320" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="320" fill="#1a1a2e"/>
                                    <text x="200" y="30" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="14">🎉 LESSON 3 COMPLETE!</text>

                                    <rect x="40" y="50" width="320" height="250" rx="12" fill="rgba(16,185,129,0.1)" stroke="#10b981"/>

                                    <text x="200" y="80" text-anchor="middle" fill="#10b981" font-size="11">YOU'VE MASTERED:</text>

                                    <text x="60" y="110" fill="#10b981" font-size="14">✓</text>
                                    <text x="85" y="110" fill="#fff" font-size="9">Code to highest specificity (Golden Rule)</text>

                                    <text x="60" y="135" fill="#10b981" font-size="14">✓</text>
                                    <text x="85" y="135" fill="#fff" font-size="9">Acute before chronic sequencing</text>

                                    <text x="60" y="160" fill="#10b981" font-size="14">✓</text>
                                    <text x="85" y="160" fill="#fff" font-size="9">Combination codes vs. multiple codes</text>

                                    <text x="60" y="185" fill="#10b981" font-size="14">✓</text>
                                    <text x="85" y="185" fill="#fff" font-size="9">Official Guidelines structure (Sections I-IV)</text>

                                    <text x="60" y="210" fill="#10b981" font-size="14">✓</text>
                                    <text x="85" y="210" fill="#fff" font-size="9">SMART mnemonic for guidelines</text>

                                    <text x="60" y="235" fill="#10b981" font-size="14">✓</text>
                                    <text x="85" y="235" fill="#fff" font-size="9">Why unspecified codes should be avoided</text>

                                    <rect x="60" y="260" width="280" height="30" rx="6" fill="rgba(59,130,246,0.2)" stroke="#3b82f6"/>
                                    <text x="200" y="280" text-anchor="middle" fill="#3b82f6" font-size="10">NEXT: Chapter-Specific Guidelines (1-5) →</text>
                                </svg>`,
                                caption: "These rules apply to EVERY code you assign!"
                            }
                        }
                    ]
                },

                // ========================================
                // LESSON 4: CHAPTER GUIDELINES (1-5)
                // ========================================
                {
                    id: 4,
                    title: "Chapter Guidelines: Infections to Endocrine",
                    duration: 15,
                    completed: false,
                    cards: [
                        {
                            type: "intro",
                            title: "Chapters 1-5: The Foundation of Disease Coding",
                            content: "Now we dive into CHAPTER-SPECIFIC guidelines. Each chapter has unique rules you must know. Let's cover the first five:\n\n**Chapter 1 (A00-B99): Infectious Diseases**\nBacteria, viruses, parasites - the invaders\n\n**Chapter 2 (C00-D49): Neoplasms**\nCancer and tumors - the abnormal growths\n\n**Chapter 3 (D50-D89): Blood & Immune**\nAnemia, clotting disorders, immune dysfunction\n\n**Chapter 4 (E00-E89): Endocrine & Metabolic**\nDiabetes, thyroid, obesity, nutrition\n\n**Chapter 5 (F01-F99): Mental & Behavioral**\nPsychiatric conditions, substance abuse\n\nEach chapter has critical rules that differ from the general guidelines. Missing these chapter-specific rules is a top cause of coding errors!",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 400 300" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="300" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#0ea5e9" font-weight="bold" font-size="13">CHAPTERS 1-5 OVERVIEW</text>

                                    <!-- Chapter boxes -->
                                    <rect x="20" y="45" width="110" height="70" rx="6" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <text x="75" y="65" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="10">CH 1: A-B</text>
                                    <text x="75" y="82" text-anchor="middle" fill="#fff" font-size="8">Infectious</text>
                                    <text x="75" y="95" text-anchor="middle" fill="#fff" font-size="8">Diseases</text>
                                    <text x="75" y="108" text-anchor="middle" fill="#888" font-size="7">🦠 Infections</text>

                                    <rect x="145" y="45" width="110" height="70" rx="6" fill="rgba(236,72,153,0.15)" stroke="#ec4899"/>
                                    <text x="200" y="65" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="10">CH 2: C-D48</text>
                                    <text x="200" y="82" text-anchor="middle" fill="#fff" font-size="8">Neoplasms</text>
                                    <text x="200" y="95" text-anchor="middle" fill="#fff" font-size="8">(Tumors)</text>
                                    <text x="200" y="108" text-anchor="middle" fill="#888" font-size="7">🎗️ Cancer</text>

                                    <rect x="270" y="45" width="110" height="70" rx="6" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="325" y="65" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="10">CH 3: D50-89</text>
                                    <text x="325" y="82" text-anchor="middle" fill="#fff" font-size="8">Blood &amp;</text>
                                    <text x="325" y="95" text-anchor="middle" fill="#fff" font-size="8">Immune</text>
                                    <text x="325" y="108" text-anchor="middle" fill="#888" font-size="7">🩸 Anemia</text>

                                    <rect x="80" y="125" width="110" height="70" rx="6" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="135" y="145" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="10">CH 4: E</text>
                                    <text x="135" y="162" text-anchor="middle" fill="#fff" font-size="8">Endocrine</text>
                                    <text x="135" y="175" text-anchor="middle" fill="#fff" font-size="8">&amp; Metabolic</text>
                                    <text x="135" y="188" text-anchor="middle" fill="#888" font-size="7">🍬 Diabetes</text>

                                    <rect x="210" y="125" width="110" height="70" rx="6" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <text x="265" y="145" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="10">CH 5: F</text>
                                    <text x="265" y="162" text-anchor="middle" fill="#fff" font-size="8">Mental</text>
                                    <text x="265" y="175" text-anchor="middle" fill="#fff" font-size="8">&amp; Behavioral</text>
                                    <text x="265" y="188" text-anchor="middle" fill="#888" font-size="7">🧠 Psychiatric</text>

                                    <!-- Why it matters -->
                                    <rect x="30" y="210" width="340" height="75" rx="8" fill="rgba(245,158,11,0.1)" stroke="#f59e0b"/>
                                    <text x="200" y="232" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="10">⚠️ WHY CHAPTER GUIDELINES MATTER</text>
                                    <text x="200" y="252" text-anchor="middle" fill="#fff" font-size="9">Each chapter has UNIQUE rules that override general guidelines</text>
                                    <text x="200" y="270" text-anchor="middle" fill="#fff" font-size="9">Missing these = coding errors, claim denials, audit findings</text>
                                </svg>`,
                                caption: "Each chapter has rules you must know"
                            }
                        },
                        {
                            type: "concept",
                            title: "Chapter 1: Infectious Diseases (A00-B99)",
                            content: "**KEY RULES FOR INFECTIONS:**\n\n**1. Organism + Infection Site**\nOften need TWO codes: one for the organism (B95-B97), one for the infection site (J15, etc.)\nExample: Pneumonia due to Strep → J15.4 (includes organism)\nOR: J18.9 (pneumonia) + B95.1 (Strep) if no combo code exists\n\n**2. Sepsis Coding (A40-A41)**\nSepsis requires underlying infection code FIRST when applicable\n• Code systemic infection (A41.9)\n• Then code any acute organ dysfunction (R65.2x for severe sepsis)\n• Use additional codes for organ failures\n\n**3. HIV/AIDS (B20)**\n• Only code B20 if CONFIRMED by provider\n• Inconclusive HIV = R75\n• Asymptomatic HIV = Z21\n\n**4. COVID-19 (U07.1)**\n• Only when confirmed\n• Code associated respiratory or other manifestations additionally",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 400 320" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="320" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="13">CHAPTER 1: INFECTIOUS DISEASES</text>

                                    <!-- Sepsis box -->
                                    <rect x="20" y="45" width="175" height="120" rx="8" fill="rgba(239,68,68,0.1)" stroke="#ef4444"/>
                                    <text x="107" y="65" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="10">SEPSIS CODING</text>
                                    <text x="30" y="85" fill="#fff" font-size="8">1. Underlying infection</text>
                                    <text x="30" y="100" fill="#fff" font-size="8">2. A41.x Sepsis code</text>
                                    <text x="30" y="115" fill="#fff" font-size="8">3. R65.2x if severe</text>
                                    <text x="30" y="130" fill="#fff" font-size="8">4. Organ failure codes</text>
                                    <rect x="30" y="140" width="155" height="20" rx="4" fill="rgba(239,68,68,0.3)"/>
                                    <text x="107" y="155" text-anchor="middle" fill="#fff" font-size="7">SEQUENCE MATTERS!</text>

                                    <!-- HIV box -->
                                    <rect x="205" y="45" width="175" height="120" rx="8" fill="rgba(236,72,153,0.1)" stroke="#ec4899"/>
                                    <text x="292" y="65" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="10">HIV STATUS CODES</text>
                                    <text x="215" y="90" fill="#10b981" font-size="9">B20 = Confirmed HIV/AIDS</text>
                                    <text x="215" y="110" fill="#f59e0b" font-size="9">R75 = Inconclusive test</text>
                                    <text x="215" y="130" fill="#3b82f6" font-size="9">Z21 = Asymptomatic HIV</text>
                                    <text x="215" y="155" fill="#888" font-size="7">Must be provider-confirmed!</text>

                                    <!-- Organism + Site -->
                                    <rect x="20" y="175" width="360" height="65" rx="8" fill="rgba(16,185,129,0.1)" stroke="#10b981"/>
                                    <text x="200" y="195" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="10">ORGANISM + SITE CODING</text>
                                    <text x="40" y="218" fill="#fff" font-size="8">Many infections need 2 codes:</text>
                                    <text x="200" y="218" fill="#10b981" font-size="8">SITE (J-codes)</text>
                                    <text x="285" y="218" fill="#fff" font-size="8">+</text>
                                    <text x="315" y="218" fill="#10b981" font-size="8">ORGANISM (B95-97)</text>
                                    <text x="200" y="233" text-anchor="middle" fill="#888" font-size="7">Unless a combination code exists!</text>

                                    <!-- COVID callout -->
                                    <rect x="20" y="250" width="360" height="55" rx="8" fill="rgba(59,130,246,0.1)" stroke="#3b82f6"/>
                                    <text x="200" y="270" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="10">COVID-19: U07.1</text>
                                    <text x="200" y="290" text-anchor="middle" fill="#fff" font-size="8">Only when confirmed • Add manifestation codes separately</text>
                                </svg>`,
                                caption: "Infections often require multiple codes - check for combos first"
                            }
                        },
                        {
                            type: "concept",
                            title: "Chapter 2: Neoplasms (C00-D49)",
                            content: "**THE NEOPLASM TABLE IS YOUR BEST FRIEND!**\n\nLocate neoplasms using the Neoplasm Table in the Index. It has 6 columns:\n\n**MALIGNANT:**\n• Primary - Where cancer STARTED (most important)\n• Secondary - Where cancer SPREAD to (metastasis)\n• Ca in situ - Pre-invasive cancer (hasn't spread)\n\n**BENIGN:**\n• Non-cancerous tumors\n\n**UNCERTAIN BEHAVIOR:**\n• Pathologist can't determine if malignant/benign\n\n**UNSPECIFIED:**\n• Type not documented\n\n**KEY RULES:**\n1. Code PRIMARY site first, then secondary sites\n2. If primary unknown, use C80.1\n3. Treatment directed at secondary site? Still code primary first\n4. History of cancer = Z85.x (personal history)\n5. Active cancer vs history - crucial distinction!",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 400 340" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="340" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="13">CHAPTER 2: NEOPLASMS</text>

                                    <!-- Neoplasm Table -->
                                    <rect x="15" y="45" width="370" height="130" rx="8" fill="rgba(236,72,153,0.1)" stroke="#ec4899"/>
                                    <text x="200" y="65" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="10">THE NEOPLASM TABLE (6 COLUMNS)</text>

                                    <!-- Headers -->
                                    <rect x="25" y="75" width="55" height="40" rx="4" fill="rgba(239,68,68,0.3)"/>
                                    <text x="52" y="92" text-anchor="middle" fill="#fff" font-size="7">PRIMARY</text>
                                    <text x="52" y="105" text-anchor="middle" fill="#888" font-size="6">Origin</text>

                                    <rect x="85" y="75" width="55" height="40" rx="4" fill="rgba(239,68,68,0.2)"/>
                                    <text x="112" y="92" text-anchor="middle" fill="#fff" font-size="7">SECOND</text>
                                    <text x="112" y="105" text-anchor="middle" fill="#888" font-size="6">Metastasis</text>

                                    <rect x="145" y="75" width="55" height="40" rx="4" fill="rgba(245,158,11,0.3)"/>
                                    <text x="172" y="92" text-anchor="middle" fill="#fff" font-size="7">IN SITU</text>
                                    <text x="172" y="105" text-anchor="middle" fill="#888" font-size="6">Pre-invasive</text>

                                    <rect x="205" y="75" width="55" height="40" rx="4" fill="rgba(16,185,129,0.3)"/>
                                    <text x="232" y="92" text-anchor="middle" fill="#fff" font-size="7">BENIGN</text>
                                    <text x="232" y="105" text-anchor="middle" fill="#888" font-size="6">Non-cancer</text>

                                    <rect x="265" y="75" width="55" height="40" rx="4" fill="rgba(139,92,246,0.3)"/>
                                    <text x="292" y="92" text-anchor="middle" fill="#fff" font-size="7">UNCERT</text>
                                    <text x="292" y="105" text-anchor="middle" fill="#888" font-size="6">Unknown</text>

                                    <rect x="325" y="75" width="55" height="40" rx="4" fill="rgba(107,114,128,0.3)"/>
                                    <text x="352" y="92" text-anchor="middle" fill="#fff" font-size="7">UNSPEC</text>
                                    <text x="352" y="105" text-anchor="middle" fill="#888" font-size="6">Not stated</text>

                                    <!-- Malignant label -->
                                    <text x="82" y="130" text-anchor="middle" fill="#ef4444" font-size="8">MALIGNANT →</text>

                                    <!-- Sequencing -->
                                    <rect x="15" y="125" width="180" height="45" rx="6" fill="rgba(239,68,68,0.2)"/>
                                    <text x="105" y="150" text-anchor="middle" fill="#fff" font-size="8">Primary → Secondary</text>
                                    <text x="105" y="165" text-anchor="middle" fill="#888" font-size="7">Always code primary first!</text>

                                    <!-- Key rules -->
                                    <rect x="15" y="185" width="370" height="140" rx="8" fill="rgba(255,255,255,0.05)"/>
                                    <text x="200" y="205" text-anchor="middle" fill="#fff" font-weight="bold" font-size="10">KEY NEOPLASM RULES</text>

                                    <text x="30" y="230" fill="#10b981" font-size="14">✓</text>
                                    <text x="50" y="230" fill="#fff" font-size="8">Primary FIRST, then secondary (metastatic) sites</text>

                                    <text x="30" y="252" fill="#10b981" font-size="14">✓</text>
                                    <text x="50" y="252" fill="#fff" font-size="8">Unknown primary? Use C80.1</text>

                                    <text x="30" y="274" fill="#10b981" font-size="14">✓</text>
                                    <text x="50" y="274" fill="#fff" font-size="8">History of cancer (no longer present) = Z85.x</text>

                                    <text x="30" y="296" fill="#10b981" font-size="14">✓</text>
                                    <text x="50" y="296" fill="#fff" font-size="8">Current treatment for cancer = active codes (C/D)</text>
                                </svg>`,
                                caption: "Use the Neoplasm Table - always code primary site first"
                            }
                        },
                        {
                            type: "concept",
                            title: "Chapter 4: Endocrine - DIABETES (E08-E13)",
                            content: "**DIABETES IS THE #1 TESTED TOPIC!**\n\nDiabetes codes are organized by TYPE and COMPLICATION:\n\n**DIABETES TYPES:**\n• E08 - Due to underlying condition (code underlying first!)\n• E09 - Drug/chemical induced\n• E10 - Type 1 (juvenile, insulin-dependent)\n• E11 - Type 2 (adult onset, most common)\n• E13 - Other specified\n\n**4TH-6TH CHARACTERS = COMPLICATIONS:**\n• .2x - Kidney complications\n• .3x - Eye complications\n• .4x - Neurological complications\n• .5x - Circulatory complications\n• .6x - Other specified complications\n• .65 - With hyperglycemia\n• .69 - With other complication\n\n**GOLDEN RULES:**\n1. Use as MANY codes as needed to describe ALL complications\n2. 'With' = assumed relationship (no 'due to' needed)\n3. Type not documented? Default to E11 (Type 2)",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 400 340" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="340" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="14">DIABETES CODING (E08-E13)</text>
                                    <text x="200" y="42" text-anchor="middle" fill="#888" font-size="9">#1 Most Tested Topic!</text>

                                    <!-- Type selector -->
                                    <rect x="15" y="55" width="370" height="90" rx="8" fill="rgba(16,185,129,0.1)" stroke="#10b981"/>
                                    <text x="200" y="75" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="10">STEP 1: IDENTIFY THE TYPE</text>

                                    <rect x="25" y="85" width="65" height="50" rx="4" fill="rgba(239,68,68,0.2)"/>
                                    <text x="57" y="102" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="10">E08</text>
                                    <text x="57" y="118" text-anchor="middle" fill="#fff" font-size="6">Underlying</text>
                                    <text x="57" y="128" text-anchor="middle" fill="#fff" font-size="6">condition</text>

                                    <rect x="95" y="85" width="65" height="50" rx="4" fill="rgba(245,158,11,0.2)"/>
                                    <text x="127" y="102" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="10">E09</text>
                                    <text x="127" y="118" text-anchor="middle" fill="#fff" font-size="6">Drug/</text>
                                    <text x="127" y="128" text-anchor="middle" fill="#fff" font-size="6">chemical</text>

                                    <rect x="165" y="85" width="65" height="50" rx="4" fill="rgba(59,130,246,0.2)"/>
                                    <text x="197" y="102" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="10">E10</text>
                                    <text x="197" y="118" text-anchor="middle" fill="#fff" font-size="6">Type 1</text>
                                    <text x="197" y="128" text-anchor="middle" fill="#fff" font-size="6">(juvenile)</text>

                                    <rect x="235" y="85" width="65" height="50" rx="4" fill="rgba(16,185,129,0.4)" stroke="#10b981" stroke-width="2"/>
                                    <text x="267" y="102" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="10">E11</text>
                                    <text x="267" y="118" text-anchor="middle" fill="#fff" font-size="6">Type 2</text>
                                    <text x="267" y="128" text-anchor="middle" fill="#10b981" font-size="5">DEFAULT!</text>

                                    <rect x="305" y="85" width="65" height="50" rx="4" fill="rgba(139,92,246,0.2)"/>
                                    <text x="337" y="102" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="10">E13</text>
                                    <text x="337" y="118" text-anchor="middle" fill="#fff" font-size="6">Other</text>
                                    <text x="337" y="128" text-anchor="middle" fill="#fff" font-size="6">specified</text>

                                    <!-- Complications -->
                                    <rect x="15" y="155" width="370" height="100" rx="8" fill="rgba(245,158,11,0.1)" stroke="#f59e0b"/>
                                    <text x="200" y="175" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="10">STEP 2: ADD COMPLICATIONS (4th-6th characters)</text>

                                    <text x="75" y="200" text-anchor="middle" fill="#fff" font-size="8">.2x Kidney</text>
                                    <text x="155" y="200" text-anchor="middle" fill="#fff" font-size="8">.3x Eye</text>
                                    <text x="235" y="200" text-anchor="middle" fill="#fff" font-size="8">.4x Neuro</text>
                                    <text x="325" y="200" text-anchor="middle" fill="#fff" font-size="8">.5x Circ</text>

                                    <text x="115" y="225" text-anchor="middle" fill="#fff" font-size="8">.6x Other</text>
                                    <text x="200" y="225" text-anchor="middle" fill="#10b981" font-size="8">.65 Hyperglycemia</text>
                                    <text x="295" y="225" text-anchor="middle" fill="#fff" font-size="8">.69 Other complication</text>

                                    <text x="200" y="248" text-anchor="middle" fill="#888" font-size="7">Use MULTIPLE codes for multiple complications!</text>

                                    <!-- Golden rules -->
                                    <rect x="15" y="265" width="370" height="60" rx="8" fill="rgba(239,68,68,0.1)" stroke="#ef4444"/>
                                    <text x="200" y="285" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="9">⚡ "WITH" = ASSUMED CAUSAL RELATIONSHIP</text>
                                    <text x="200" y="303" text-anchor="middle" fill="#fff" font-size="8">If documentation says "diabetes with CKD" → E11.22</text>
                                    <text x="200" y="318" text-anchor="middle" fill="#888" font-size="7">No need for provider to write "due to" - it's assumed!</text>
                                </svg>`,
                                caption: "Type + Complications = Complete diabetes coding"
                            }
                        },
                        {
                            type: "concept",
                            title: "Memory Tool: INSIDE for Chapters 1-5",
                            content: "Remember key rules for Chapters 1-5 with INSIDE:\n\n**I - INFECTIONS need organism codes**\nB95-B97 for bacterial/viral identification\n\n**N - NEOPLASMS: Primary first**\nAlways sequence primary site before secondary\n\n**S - SEPSIS sequencing**\nUnderlying infection → Sepsis → Severity → Organ dysfunction\n\n**I - INSULIN doesn't determine type**\nType 1 vs Type 2 based on TYPE, not treatment\n\n**D - DIABETES 'with' = assumed**\nCausal relationship assumed, no 'due to' needed\n\n**E - E11 is default**\nType not specified? Default to Type 2 (E11)\n\n**Say it:** 'Look INSIDE for chapter-specific rules!'",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 400 320" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="320" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#0ea5e9" font-weight="bold" font-size="16">I N S I D E</text>
                                    <text x="200" y="45" text-anchor="middle" fill="#888" font-size="10">Chapters 1-5 Memory Tool</text>

                                    <!-- Letters -->
                                    <rect x="15" y="60" width="60" height="80" rx="6" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <text x="45" y="85" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">I</text>
                                    <text x="45" y="102" text-anchor="middle" fill="#ef4444" font-size="6">INFECTIONS</text>
                                    <text x="45" y="115" text-anchor="middle" fill="#fff" font-size="5">Need</text>
                                    <text x="45" y="125" text-anchor="middle" fill="#fff" font-size="5">organism</text>
                                    <text x="45" y="135" text-anchor="middle" fill="#888" font-size="5">B95-97</text>

                                    <rect x="80" y="60" width="60" height="80" rx="6" fill="rgba(236,72,153,0.15)" stroke="#ec4899"/>
                                    <text x="110" y="85" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="20">N</text>
                                    <text x="110" y="102" text-anchor="middle" fill="#ec4899" font-size="6">NEOPLASM</text>
                                    <text x="110" y="115" text-anchor="middle" fill="#fff" font-size="5">Primary</text>
                                    <text x="110" y="125" text-anchor="middle" fill="#fff" font-size="5">site</text>
                                    <text x="110" y="135" text-anchor="middle" fill="#888" font-size="5">first</text>

                                    <rect x="145" y="60" width="60" height="80" rx="6" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <text x="175" y="85" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">S</text>
                                    <text x="175" y="102" text-anchor="middle" fill="#f59e0b" font-size="6">SEPSIS</text>
                                    <text x="175" y="115" text-anchor="middle" fill="#fff" font-size="5">Sequence</text>
                                    <text x="175" y="125" text-anchor="middle" fill="#fff" font-size="5">infection</text>
                                    <text x="175" y="135" text-anchor="middle" fill="#888" font-size="5">→sepsis→organ</text>

                                    <rect x="210" y="60" width="60" height="80" rx="6" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <text x="240" y="85" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="20">I</text>
                                    <text x="240" y="102" text-anchor="middle" fill="#3b82f6" font-size="6">INSULIN</text>
                                    <text x="240" y="115" text-anchor="middle" fill="#fff" font-size="5">Doesn't</text>
                                    <text x="240" y="125" text-anchor="middle" fill="#fff" font-size="5">define</text>
                                    <text x="240" y="135" text-anchor="middle" fill="#888" font-size="5">type</text>

                                    <rect x="275" y="60" width="60" height="80" rx="6" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="305" y="85" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">D</text>
                                    <text x="305" y="102" text-anchor="middle" fill="#10b981" font-size="6">DIABETES</text>
                                    <text x="305" y="115" text-anchor="middle" fill="#fff" font-size="5">"With"</text>
                                    <text x="305" y="125" text-anchor="middle" fill="#fff" font-size="5">=assumed</text>
                                    <text x="305" y="135" text-anchor="middle" fill="#888" font-size="5">causal</text>

                                    <rect x="340" y="60" width="50" height="80" rx="6" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="365" y="85" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">E</text>
                                    <text x="365" y="102" text-anchor="middle" fill="#8b5cf6" font-size="6">E11</text>
                                    <text x="365" y="115" text-anchor="middle" fill="#fff" font-size="5">Default</text>
                                    <text x="365" y="125" text-anchor="middle" fill="#fff" font-size="5">Type 2</text>
                                    <text x="365" y="135" text-anchor="middle" fill="#888" font-size="5">diabetes</text>

                                    <!-- Phrase -->
                                    <rect x="30" y="155" width="340" height="45" rx="8" fill="rgba(14,165,233,0.2)" stroke="#0ea5e9"/>
                                    <text x="200" y="178" text-anchor="middle" fill="#fff" font-size="9">"Look INSIDE for chapter-specific rules!"</text>
                                    <text x="200" y="195" text-anchor="middle" fill="#0ea5e9" font-size="8">Infections • Neoplasms • Sepsis • Insulin • Diabetes • E11</text>

                                    <!-- Quick ref -->
                                    <rect x="30" y="210" width="340" height="95" rx="6" fill="rgba(255,255,255,0.05)"/>
                                    <text x="200" y="230" text-anchor="middle" fill="#888" font-size="9">QUICK REFERENCE</text>
                                    <text x="200" y="252" text-anchor="middle" fill="#ef4444" font-size="8">Sepsis: Infection → A41.x → R65.2x → Organ codes</text>
                                    <text x="200" y="272" text-anchor="middle" fill="#ec4899" font-size="8">Cancer: Primary C-code → Secondary C-codes → Z85 history</text>
                                    <text x="200" y="292" text-anchor="middle" fill="#10b981" font-size="8">Diabetes: E11 default + .xx for each complication</text>
                                </svg>`,
                                caption: "INSIDE: Your guide to Chapters 1-5"
                            }
                        },
                        {
                            type: "quiz",
                            question: "Documentation states 'Type 2 diabetes with diabetic nephropathy.' What code(s) should be assigned?",
                            options: [
                                { text: "E11.9 (Type 2 DM) + N18.9 (CKD unspecified)", correct: false },
                                { text: "E11.22 (Type 2 DM with diabetic CKD) - one combination code", correct: true },
                                { text: "N18.9 only - the kidney disease is the main problem", correct: false },
                                { text: "E11.9 only - nephropathy is assumed", correct: false }
                            ],
                            explanation: "E11.22 is the combination code for 'Type 2 diabetes mellitus with diabetic chronic kidney disease.' The guideline states that 'with' in the diabetes codes indicates an assumed causal relationship, so no additional documentation is needed to link the conditions. Always look for the combination code first!"
                        },
                        {
                            type: "quiz",
                            question: "A patient has lung cancer with metastasis to the brain. How should this be coded?",
                            options: [
                                { text: "C79.31 (brain metastasis) only - that's where treatment is directed", correct: false },
                                { text: "C34.90 (lung primary) first, then C79.31 (brain secondary)", correct: true },
                                { text: "C79.31 first, then C34.90 - brain is more serious", correct: false },
                                { text: "C80.1 (unknown primary) + C79.31", correct: false }
                            ],
                            explanation: "ALWAYS code the PRIMARY cancer site FIRST (C34.90 lung), then the SECONDARY/metastatic site(s) (C79.31 brain). This rule applies even if treatment is directed at the metastatic site. The primary site tells the story of where the cancer originated, which is crucial for treatment planning and statistics."
                        },
                        {
                            type: "visual",
                            title: "Lesson 4 Complete!",
                            content: "You've mastered the chapter-specific guidelines for Chapters 1-5!",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 400 300" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="300" fill="#1a1a2e"/>
                                    <text x="200" y="30" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="14">🎉 LESSON 4 COMPLETE!</text>

                                    <rect x="40" y="50" width="320" height="230" rx="12" fill="rgba(16,185,129,0.1)" stroke="#10b981"/>

                                    <text x="200" y="80" text-anchor="middle" fill="#10b981" font-size="11">CHAPTERS 1-5 MASTERED:</text>

                                    <text x="60" y="110" fill="#ef4444" font-size="12">✓</text>
                                    <text x="85" y="110" fill="#fff" font-size="9">Ch1: Infections - Sepsis sequencing, HIV rules</text>

                                    <text x="60" y="135" fill="#ec4899" font-size="12">✓</text>
                                    <text x="85" y="135" fill="#fff" font-size="9">Ch2: Neoplasms - Primary before secondary</text>

                                    <text x="60" y="160" fill="#8b5cf6" font-size="12">✓</text>
                                    <text x="85" y="160" fill="#fff" font-size="9">Ch3: Blood/Immune basics</text>

                                    <text x="60" y="185" fill="#10b981" font-size="12">✓</text>
                                    <text x="85" y="185" fill="#fff" font-size="9">Ch4: Diabetes types and complications</text>

                                    <text x="60" y="210" fill="#3b82f6" font-size="12">✓</text>
                                    <text x="85" y="210" fill="#fff" font-size="9">Ch5: Mental/Behavioral overview</text>

                                    <text x="60" y="235" fill="#f59e0b" font-size="12">✓</text>
                                    <text x="85" y="235" fill="#fff" font-size="9">INSIDE mnemonic for quick recall</text>

                                    <rect x="60" y="250" width="280" height="25" rx="6" fill="rgba(59,130,246,0.2)" stroke="#3b82f6"/>
                                    <text x="200" y="267" text-anchor="middle" fill="#3b82f6" font-size="9">NEXT: Chapters 6-10 Guidelines →</text>
                                </svg>`,
                                caption: "Great progress through the chapter guidelines!"
                            }
                        }
                    ]
                },

                // ========================================
                // LESSON 5: CHAPTER GUIDELINES (6-10)
                // ========================================
                {
                    id: 5,
                    title: "Chapter Guidelines: Nervous to Respiratory",
                    duration: 15,
                    completed: false,
                    cards: [
                        {
                            type: "intro",
                            title: "Chapters 6-10: The Body Systems",
                            content: "Now we tackle the major body system chapters - these are HIGH-VOLUME codes you'll use daily!\n\n**Chapter 6 (G00-G99): Nervous System**\nBrain, spinal cord, nerves - strokes, epilepsy, migraines\n\n**Chapter 7 (H00-H59): Eye & Adnexa**\nCataracts, glaucoma, retinal conditions\n\n**Chapter 8 (H60-H95): Ear & Mastoid**\nHearing loss, otitis, vertigo\n\n**Chapter 9 (I00-I99): Circulatory System**\nHeart disease, hypertension, strokes - #1 cause of death!\n\n**Chapter 10 (J00-J99): Respiratory System**\nPneumonia, COPD, asthma, COVID complications\n\nChapters 9 and 10 are among the MOST COMMONLY CODED - master these!",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 400 300" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="300" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#0ea5e9" font-weight="bold" font-size="13">CHAPTERS 6-10: BODY SYSTEMS</text>

                                    <rect x="20" y="45" width="110" height="65" rx="6" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="75" y="65" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="10">CH 6: G</text>
                                    <text x="75" y="82" text-anchor="middle" fill="#fff" font-size="8">Nervous System</text>
                                    <text x="75" y="102" text-anchor="middle" fill="#888" font-size="7">⚡ Brain/Nerves</text>

                                    <rect x="145" y="45" width="110" height="65" rx="6" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <text x="200" y="65" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="10">CH 7: H00-59</text>
                                    <text x="200" y="82" text-anchor="middle" fill="#fff" font-size="8">Eye &amp; Adnexa</text>
                                    <text x="200" y="102" text-anchor="middle" fill="#888" font-size="7">👁️ Vision</text>

                                    <rect x="270" y="45" width="110" height="65" rx="6" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <text x="325" y="65" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="10">CH 8: H60-95</text>
                                    <text x="325" y="82" text-anchor="middle" fill="#fff" font-size="8">Ear &amp; Mastoid</text>
                                    <text x="325" y="102" text-anchor="middle" fill="#888" font-size="7">👂 Hearing</text>

                                    <rect x="80" y="120" width="110" height="65" rx="6" fill="rgba(239,68,68,0.2)" stroke="#ef4444" stroke-width="2"/>
                                    <text x="135" y="140" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="10">CH 9: I</text>
                                    <text x="135" y="157" text-anchor="middle" fill="#fff" font-size="8">Circulatory</text>
                                    <text x="135" y="177" text-anchor="middle" fill="#ef4444" font-size="7">❤️ #1 CODED!</text>

                                    <rect x="210" y="120" width="110" height="65" rx="6" fill="rgba(20,184,166,0.2)" stroke="#14b8a6" stroke-width="2"/>
                                    <text x="265" y="140" text-anchor="middle" fill="#14b8a6" font-weight="bold" font-size="10">CH 10: J</text>
                                    <text x="265" y="157" text-anchor="middle" fill="#fff" font-size="8">Respiratory</text>
                                    <text x="265" y="177" text-anchor="middle" fill="#14b8a6" font-size="7">🫁 HIGH VOLUME!</text>

                                    <rect x="30" y="200" width="340" height="85" rx="8" fill="rgba(239,68,68,0.1)" stroke="#ef4444"/>
                                    <text x="200" y="222" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="10">⚡ HIGH-FREQUENCY CHAPTERS</text>
                                    <text x="200" y="245" text-anchor="middle" fill="#fff" font-size="9">Circulatory (I) = Heart attacks, HTN, heart failure, strokes</text>
                                    <text x="200" y="265" text-anchor="middle" fill="#fff" font-size="9">Respiratory (J) = Pneumonia, COPD, asthma, COVID</text>
                                    <text x="200" y="280" text-anchor="middle" fill="#888" font-size="8">Master these - you'll code them DAILY!</text>
                                </svg>`,
                                caption: "Chapters 9 and 10 are the highest-volume codes"
                            }
                        },
                        {
                            type: "concept",
                            title: "Chapter 9: Circulatory System (I00-I99)",
                            content: "**THE MOST IMPORTANT CHAPTER FOR INPATIENT CODING!**\n\n**HYPERTENSION (I10-I16):**\n• I10 = Essential (primary) hypertension - most common\n• Hypertensive heart disease: I11.x (use 'with' relationship)\n• Hypertensive CKD: I12.x (assumed relationship!)\n• Both heart + CKD: I13.x combination codes\n\n**HEART FAILURE (I50):**\n• Systolic, diastolic, or combined\n• Acute, chronic, or acute on chronic\n• Left, right, or biventricular\n\n**MYOCARDIAL INFARCTION:**\n• STEMI vs NSTEMI (Type 1 vs Type 2)\n• Initial (first 4 weeks) vs Subsequent\n• Current vs Old/healed MI\n\n**KEY RULE:** Hypertension with heart disease or CKD has an ASSUMED causal relationship - code as hypertensive disease unless documentation states otherwise!",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 400 340" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="340" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="13">CHAPTER 9: CIRCULATORY SYSTEM</text>

                                    <!-- HTN Section -->
                                    <rect x="15" y="45" width="180" height="130" rx="8" fill="rgba(239,68,68,0.1)" stroke="#ef4444"/>
                                    <text x="105" y="65" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="10">HYPERTENSION</text>
                                    <text x="25" y="85" fill="#fff" font-size="8">I10 = Essential HTN</text>
                                    <text x="25" y="102" fill="#fff" font-size="8">I11.x = HTN + Heart disease</text>
                                    <text x="25" y="119" fill="#fff" font-size="8">I12.x = HTN + CKD</text>
                                    <text x="25" y="136" fill="#fff" font-size="8">I13.x = HTN + Heart + CKD</text>
                                    <rect x="25" y="148" width="160" height="20" rx="4" fill="rgba(239,68,68,0.3)"/>
                                    <text x="105" y="162" text-anchor="middle" fill="#fff" font-size="7">"WITH" = ASSUMED!</text>

                                    <!-- Heart Failure -->
                                    <rect x="205" y="45" width="180" height="130" rx="8" fill="rgba(236,72,153,0.1)" stroke="#ec4899"/>
                                    <text x="295" y="65" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="10">HEART FAILURE (I50)</text>
                                    <text x="215" y="88" fill="#fff" font-size="8">Type: Systolic/Diastolic/Both</text>
                                    <text x="215" y="108" fill="#fff" font-size="8">Timing: Acute/Chronic/AOC</text>
                                    <text x="215" y="128" fill="#fff" font-size="8">Side: Left/Right/Both</text>
                                    <text x="215" y="155" fill="#888" font-size="7">Multiple aspects = Multiple codes</text>
                                    <text x="215" y="168" fill="#888" font-size="7">if needed for specificity</text>

                                    <!-- MI Section -->
                                    <rect x="15" y="185" width="370" height="80" rx="8" fill="rgba(245,158,11,0.1)" stroke="#f59e0b"/>
                                    <text x="200" y="205" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="10">MYOCARDIAL INFARCTION (MI)</text>

                                    <rect x="30" y="218" width="100" height="40" rx="4" fill="rgba(239,68,68,0.2)"/>
                                    <text x="80" y="235" text-anchor="middle" fill="#ef4444" font-size="8">STEMI</text>
                                    <text x="80" y="250" text-anchor="middle" fill="#fff" font-size="7">I21.0-I21.3</text>

                                    <rect x="145" y="218" width="100" height="40" rx="4" fill="rgba(245,158,11,0.2)"/>
                                    <text x="195" y="235" text-anchor="middle" fill="#f59e0b" font-size="8">NSTEMI</text>
                                    <text x="195" y="250" text-anchor="middle" fill="#fff" font-size="7">I21.4</text>

                                    <rect x="260" y="218" width="110" height="40" rx="4" fill="rgba(107,114,128,0.2)"/>
                                    <text x="315" y="235" text-anchor="middle" fill="#888" font-size="8">Old MI</text>
                                    <text x="315" y="250" text-anchor="middle" fill="#fff" font-size="7">I25.2 (healed)</text>

                                    <!-- Key rule -->
                                    <rect x="15" y="275" width="370" height="50" rx="8" fill="rgba(16,185,129,0.2)" stroke="#10b981"/>
                                    <text x="200" y="295" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="9">KEY RULE: HTN + Heart/CKD = Assumed Causal Relationship</text>
                                    <text x="200" y="312" text-anchor="middle" fill="#fff" font-size="8">Code as hypertensive disease (I11, I12, I13) unless docs state otherwise</text>
                                </svg>`,
                                caption: "Hypertension relationships are ASSUMED - use combination codes"
                            }
                        },
                        {
                            type: "concept",
                            title: "Chapter 10: Respiratory System (J00-J99)",
                            content: "**HIGH-VOLUME CHAPTER - Especially Post-COVID!**\n\n**PNEUMONIA:**\n• Code the ORGANISM if known (J13-J16)\n• Unspecified organism = J18.9\n• Add organism code (B95-B97) if not in primary code\n\n**COPD (J44):**\n• J44.0 - with acute lower respiratory infection\n• J44.1 - with acute exacerbation\n• J44.9 - unspecified (avoid if possible!)\n• COPD + Asthma? Can code both if documented\n\n**ASTHMA (J45):**\n• By severity: mild, moderate, severe\n• By control: intermittent, persistent\n• With exacerbation or status asthmaticus\n\n**RESPIRATORY FAILURE (J96):**\n• Acute vs Chronic vs Acute-on-Chronic\n• Hypoxic (Type 1) vs Hypercapnic (Type 2)\n• Often a secondary diagnosis - check sequencing rules",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 400 340" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="340" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#14b8a6" font-weight="bold" font-size="13">CHAPTER 10: RESPIRATORY SYSTEM</text>

                                    <!-- Pneumonia -->
                                    <rect x="15" y="45" width="180" height="100" rx="8" fill="rgba(59,130,246,0.1)" stroke="#3b82f6"/>
                                    <text x="105" y="65" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="10">PNEUMONIA</text>
                                    <text x="25" y="85" fill="#fff" font-size="8">Known organism → J13-J16</text>
                                    <text x="25" y="102" fill="#fff" font-size="8">Unknown → J18.9 + B95-B97</text>
                                    <text x="25" y="119" fill="#888" font-size="7">Always identify organism if possible!</text>
                                    <text x="25" y="135" fill="#888" font-size="7">Aspiration pneumonia = J69.x</text>

                                    <!-- COPD -->
                                    <rect x="205" y="45" width="180" height="100" rx="8" fill="rgba(16,185,129,0.1)" stroke="#10b981"/>
                                    <text x="295" y="65" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="10">COPD (J44)</text>
                                    <text x="215" y="85" fill="#fff" font-size="8">.0 = with infection</text>
                                    <text x="215" y="100" fill="#fff" font-size="8">.1 = with exacerbation</text>
                                    <text x="215" y="115" fill="#fff" font-size="8">.9 = unspecified</text>
                                    <text x="215" y="135" fill="#10b981" font-size="7">COPD + Asthma = Both OK!</text>

                                    <!-- Asthma -->
                                    <rect x="15" y="155" width="180" height="90" rx="8" fill="rgba(245,158,11,0.1)" stroke="#f59e0b"/>
                                    <text x="105" y="175" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="10">ASTHMA (J45)</text>
                                    <text x="25" y="195" fill="#fff" font-size="8">Mild → Moderate → Severe</text>
                                    <text x="25" y="210" fill="#fff" font-size="8">Intermittent vs Persistent</text>
                                    <text x="25" y="225" fill="#fff" font-size="8">+ Exacerbation or Status</text>
                                    <text x="25" y="240" fill="#888" font-size="7">5th char = severity</text>

                                    <!-- Resp Failure -->
                                    <rect x="205" y="155" width="180" height="90" rx="8" fill="rgba(239,68,68,0.1)" stroke="#ef4444"/>
                                    <text x="295" y="175" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="10">RESP FAILURE (J96)</text>
                                    <text x="215" y="195" fill="#fff" font-size="8">Acute / Chronic / AOC</text>
                                    <text x="215" y="210" fill="#fff" font-size="8">Type 1 (hypoxic)</text>
                                    <text x="215" y="225" fill="#fff" font-size="8">Type 2 (hypercapnic)</text>
                                    <text x="215" y="240" fill="#888" font-size="7">Check sequencing rules!</text>

                                    <!-- COVID note -->
                                    <rect x="15" y="255" width="370" height="70" rx="8" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6"/>
                                    <text x="200" y="275" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="10">COVID-19 RESPIRATORY MANIFESTATIONS</text>
                                    <text x="200" y="295" text-anchor="middle" fill="#fff" font-size="8">U07.1 (COVID) + J respiratory codes for manifestations</text>
                                    <text x="200" y="312" text-anchor="middle" fill="#888" font-size="8">J12.82 = COVID pneumonia | J96.x = Respiratory failure</text>
                                </svg>`,
                                caption: "Respiratory codes require organism identification when possible"
                            }
                        },
                        {
                            type: "concept",
                            title: "Memory Tool: HEARTS for Chapters 6-10",
                            content: "Remember key rules for Chapters 6-10 with HEARTS:\n\n**H - HYPERTENSION assumes relationships**\nHTN + heart disease or CKD = combo codes (I11, I12, I13)\n\n**E - EYE laterality required**\nAlways code right, left, or bilateral (H00-H59)\n\n**A - ACUTE MI timing matters**\nInitial (≤4 weeks) vs subsequent vs old/healed\n\n**R - RESPIRATORY organism identification**\nCode the organism when known for pneumonia\n\n**T - TYPE of heart failure**\nSystolic, diastolic, combined - get specific!\n\n**S - SEVERITY for asthma**\nMild, moderate, severe + intermittent/persistent\n\n**Say it:** 'Code with your HEARTS - Hypertension, Eye laterality, Acute MI, Respiratory organisms, Type, Severity!'",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 400 320" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="320" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="16">H E A R T S</text>
                                    <text x="200" y="45" text-anchor="middle" fill="#888" font-size="10">Chapters 6-10 Memory Tool</text>

                                    <!-- Letters -->
                                    <rect x="15" y="60" width="60" height="80" rx="6" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <text x="45" y="85" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="18">H</text>
                                    <text x="45" y="100" text-anchor="middle" fill="#ef4444" font-size="6">HTN</text>
                                    <text x="45" y="112" text-anchor="middle" fill="#fff" font-size="5">Assumed</text>
                                    <text x="45" y="122" text-anchor="middle" fill="#fff" font-size="5">relationship</text>
                                    <text x="45" y="134" text-anchor="middle" fill="#888" font-size="5">I11/I12/I13</text>

                                    <rect x="80" y="60" width="60" height="80" rx="6" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <text x="110" y="85" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="18">E</text>
                                    <text x="110" y="100" text-anchor="middle" fill="#3b82f6" font-size="6">EYE</text>
                                    <text x="110" y="112" text-anchor="middle" fill="#fff" font-size="5">Laterality</text>
                                    <text x="110" y="122" text-anchor="middle" fill="#fff" font-size="5">required</text>
                                    <text x="110" y="134" text-anchor="middle" fill="#888" font-size="5">R/L/Bilateral</text>

                                    <rect x="145" y="60" width="60" height="80" rx="6" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <text x="175" y="85" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="18">A</text>
                                    <text x="175" y="100" text-anchor="middle" fill="#f59e0b" font-size="6">ACUTE MI</text>
                                    <text x="175" y="112" text-anchor="middle" fill="#fff" font-size="5">Timing</text>
                                    <text x="175" y="122" text-anchor="middle" fill="#fff" font-size="5">matters</text>
                                    <text x="175" y="134" text-anchor="middle" fill="#888" font-size="5">≤4 wks=initial</text>

                                    <rect x="210" y="60" width="60" height="80" rx="6" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="240" y="85" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="18">R</text>
                                    <text x="240" y="100" text-anchor="middle" fill="#10b981" font-size="6">RESP</text>
                                    <text x="240" y="112" text-anchor="middle" fill="#fff" font-size="5">Organism</text>
                                    <text x="240" y="122" text-anchor="middle" fill="#fff" font-size="5">when known</text>
                                    <text x="240" y="134" text-anchor="middle" fill="#888" font-size="5">J13-J16</text>

                                    <rect x="275" y="60" width="60" height="80" rx="6" fill="rgba(236,72,153,0.15)" stroke="#ec4899"/>
                                    <text x="305" y="85" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="18">T</text>
                                    <text x="305" y="100" text-anchor="middle" fill="#ec4899" font-size="6">TYPE</text>
                                    <text x="305" y="112" text-anchor="middle" fill="#fff" font-size="5">Heart</text>
                                    <text x="305" y="122" text-anchor="middle" fill="#fff" font-size="5">failure</text>
                                    <text x="305" y="134" text-anchor="middle" fill="#888" font-size="5">Sys/Dia/Both</text>

                                    <rect x="340" y="60" width="50" height="80" rx="6" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="365" y="85" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="18">S</text>
                                    <text x="365" y="100" text-anchor="middle" fill="#8b5cf6" font-size="6">SEVERITY</text>
                                    <text x="365" y="112" text-anchor="middle" fill="#fff" font-size="5">Asthma</text>
                                    <text x="365" y="122" text-anchor="middle" fill="#fff" font-size="5">level</text>
                                    <text x="365" y="134" text-anchor="middle" fill="#888" font-size="5">Mild/Mod/Sev</text>

                                    <!-- Phrase -->
                                    <rect x="30" y="155" width="340" height="45" rx="8" fill="rgba(239,68,68,0.2)" stroke="#ef4444"/>
                                    <text x="200" y="178" text-anchor="middle" fill="#fff" font-size="9">"Code with your HEARTS!"</text>
                                    <text x="200" y="195" text-anchor="middle" fill="#ef4444" font-size="8">HTN • Eye • Acute MI • Respiratory • Type • Severity</text>

                                    <!-- Quick ref -->
                                    <rect x="30" y="210" width="340" height="95" rx="6" fill="rgba(255,255,255,0.05)"/>
                                    <text x="200" y="230" text-anchor="middle" fill="#888" font-size="9">QUICK REFERENCE</text>
                                    <text x="200" y="252" text-anchor="middle" fill="#ef4444" font-size="8">HTN + Heart/CKD → I11, I12, or I13 (combo codes)</text>
                                    <text x="200" y="272" text-anchor="middle" fill="#14b8a6" font-size="8">Pneumonia → Identify organism! J13-J16 or J18+B95-97</text>
                                    <text x="200" y="292" text-anchor="middle" fill="#f59e0b" font-size="8">MI → STEMI (I21.0-3), NSTEMI (I21.4), Old (I25.2)</text>
                                </svg>`,
                                caption: "HEARTS: Your guide to Chapters 6-10"
                            }
                        },
                        {
                            type: "quiz",
                            question: "A patient has hypertension and heart failure. How should this be coded?",
                            options: [
                                { text: "I10 (HTN) + I50.9 (Heart failure) - two separate codes", correct: false },
                                { text: "I11.0 (Hypertensive heart disease with heart failure) - one combination code", correct: true },
                                { text: "I50.9 only - heart failure is more serious", correct: false },
                                { text: "I10 only - hypertension is the underlying cause", correct: false }
                            ],
                            explanation: "There is an ASSUMED causal relationship between hypertension and heart disease! When a patient has both HTN and heart failure, use I11.0 (Hypertensive heart disease with heart failure) as a combination code. This is different from diabetes where 'with' must be in the documentation - for HTN, the relationship is assumed unless documented otherwise."
                        },
                        {
                            type: "quiz",
                            question: "A patient has pneumonia due to Streptococcus. What code(s) should be assigned?",
                            options: [
                                { text: "J18.9 (Pneumonia, unspecified)", correct: false },
                                { text: "J15.4 (Pneumonia due to other streptococci)", correct: true },
                                { text: "J18.9 + B95.4 (two codes needed)", correct: false },
                                { text: "B95.4 only (organism code)", correct: false }
                            ],
                            explanation: "When the organism is known, use the specific pneumonia code that identifies the organism - J15.4 (Pneumonia due to other streptococci). This is a combination code that includes both the pneumonia and the organism. Only use separate codes (J18.9 + B95.x) when a combination code doesn't exist."
                        },
                        {
                            type: "visual",
                            title: "Lesson 5 Complete!",
                            content: "You've mastered the high-volume body system chapters!",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 400 300" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="300" fill="#1a1a2e"/>
                                    <text x="200" y="30" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="14">🎉 LESSON 5 COMPLETE!</text>

                                    <rect x="40" y="50" width="320" height="230" rx="12" fill="rgba(16,185,129,0.1)" stroke="#10b981"/>

                                    <text x="200" y="80" text-anchor="middle" fill="#10b981" font-size="11">CHAPTERS 6-10 MASTERED:</text>

                                    <text x="60" y="110" fill="#8b5cf6" font-size="12">✓</text>
                                    <text x="85" y="110" fill="#fff" font-size="9">Ch6: Nervous system basics</text>

                                    <text x="60" y="135" fill="#3b82f6" font-size="12">✓</text>
                                    <text x="85" y="135" fill="#fff" font-size="9">Ch7-8: Eye/Ear laterality requirements</text>

                                    <text x="60" y="160" fill="#ef4444" font-size="12">✓</text>
                                    <text x="85" y="160" fill="#fff" font-size="9">Ch9: HTN assumed relationships</text>

                                    <text x="60" y="185" fill="#14b8a6" font-size="12">✓</text>
                                    <text x="85" y="185" fill="#fff" font-size="9">Ch10: Respiratory organism coding</text>

                                    <text x="60" y="210" fill="#f59e0b" font-size="12">✓</text>
                                    <text x="85" y="210" fill="#fff" font-size="9">MI timing and heart failure types</text>

                                    <text x="60" y="235" fill="#ec4899" font-size="12">✓</text>
                                    <text x="85" y="235" fill="#fff" font-size="9">HEARTS mnemonic for quick recall</text>

                                    <rect x="60" y="250" width="280" height="25" rx="6" fill="rgba(59,130,246,0.2)" stroke="#3b82f6"/>
                                    <text x="200" y="267" text-anchor="middle" fill="#3b82f6" font-size="9">NEXT: Injuries & External Causes →</text>
                                </svg>`,
                                caption: "Great work on the body system chapters!"
                            }
                        }
                    ]
                },

                // ========================================
                // LESSON 6: INJURIES & EXTERNAL CAUSES
                // ========================================
                {
                    id: 6,
                    title: "Injuries & External Causes (S-T, V-Y Codes)",
                    duration: 15,
                    completed: false,
                    cards: [
                        {
                            type: "intro",
                            title: "Chapter 19 & 20: Injuries Tell a Complete Story",
                            content: "Injury coding is DIFFERENT from disease coding. Every injury requires you to answer THREE questions:\n\n**1. WHAT happened? (S/T codes)**\n• S codes = Specific body region injuries\n• T codes = Burns, poisonings, complications, multiple body regions\n\n**2. HOW did it happen? (V-Y codes)**\n• V = Transport accidents\n• W = Falls, exposures\n• X = Assaults, self-harm, undetermined\n• Y = Complications of care\n\n**3. WHERE did it happen? (Place of occurrence - Y93)**\n• Home, work, school, sports facility, etc.\n\n**4. WHAT was the patient doing? (Activity - Y93)**\n• Walking, running, sports, leisure, etc.\n\n**CRITICAL:** S/T codes require a 7th character extension!\n• A = Initial encounter\n• D = Subsequent encounter\n• S = Sequela",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 400 320" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="320" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="13">INJURY CODING: THE COMPLETE STORY</text>

                                    <!-- Four Questions -->
                                    <rect x="15" y="45" width="180" height="65" rx="6" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <text x="105" y="65" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="10">1. WHAT? (S/T)</text>
                                    <text x="25" y="85" fill="#fff" font-size="8">S = Body region injuries</text>
                                    <text x="25" y="100" fill="#fff" font-size="8">T = Burns, poisoning, multi</text>

                                    <rect x="205" y="45" width="180" height="65" rx="6" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <text x="295" y="65" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="10">2. HOW? (V-Y)</text>
                                    <text x="215" y="85" fill="#fff" font-size="8">V = Transport accidents</text>
                                    <text x="215" y="100" fill="#fff" font-size="8">W/X/Y = Falls, assaults, etc</text>

                                    <rect x="15" y="120" width="180" height="65" rx="6" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="105" y="140" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="10">3. WHERE? (Y92)</text>
                                    <text x="25" y="160" fill="#fff" font-size="8">Place of occurrence</text>
                                    <text x="25" y="175" fill="#fff" font-size="8">Home, work, school, etc</text>

                                    <rect x="205" y="120" width="180" height="65" rx="6" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="295" y="140" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="10">4. DOING WHAT? (Y93)</text>
                                    <text x="215" y="160" fill="#fff" font-size="8">Activity at time of injury</text>
                                    <text x="215" y="175" fill="#fff" font-size="8">Sports, work, leisure</text>

                                    <!-- 7th Character -->
                                    <rect x="15" y="195" width="370" height="110" rx="8" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                                    <text x="200" y="218" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="11">⚠️ 7TH CHARACTER REQUIRED!</text>

                                    <rect x="40" y="235" width="100" height="55" rx="6" fill="rgba(16,185,129,0.2)"/>
                                    <text x="90" y="258" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="16">A</text>
                                    <text x="90" y="278" text-anchor="middle" fill="#fff" font-size="8">Initial encounter</text>

                                    <rect x="150" y="235" width="100" height="55" rx="6" fill="rgba(245,158,11,0.2)"/>
                                    <text x="200" y="258" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="16">D</text>
                                    <text x="200" y="278" text-anchor="middle" fill="#fff" font-size="8">Subsequent</text>

                                    <rect x="260" y="235" width="100" height="55" rx="6" fill="rgba(139,92,246,0.2)"/>
                                    <text x="310" y="258" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="16">S</text>
                                    <text x="310" y="278" text-anchor="middle" fill="#fff" font-size="8">Sequela</text>
                                </svg>`,
                                caption: "Injuries need WHAT + HOW + WHERE + ACTIVITY + 7th character"
                            }
                        },
                        {
                            type: "concept",
                            title: "7th Character Extensions Explained",
                            content: "The 7th character is NOT about the visit number - it's about the PHASE OF TREATMENT!\n\n**A = Initial Encounter**\nPatient is receiving ACTIVE treatment for the injury\n• First ER visit for fracture? → A\n• Surgery to repair fracture? → A\n• Still in active treatment phase? → A\n\n**D = Subsequent Encounter**\nPatient is receiving ROUTINE care during healing\n• Cast check for fracture? → D\n• Wound care follow-up? → D\n• Physical therapy for injury? → D\n\n**S = Sequela**\nCare for a LATE EFFECT of the injury\n• Chronic pain from old fracture? → S\n• Scar revision from old burn? → S\n• Arthritis from old injury? → S\n\n**Common Mistake:** Using 'D' for the second visit. It's not about visit count - it's about treatment phase!",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 400 320" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="320" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#0ea5e9" font-weight="bold" font-size="13">7TH CHARACTER: PHASE OF TREATMENT</text>
                                    <text x="200" y="45" text-anchor="middle" fill="#888" font-size="9">NOT visit number - treatment PHASE!</text>

                                    <!-- A - Initial -->
                                    <rect x="15" y="60" width="370" height="75" rx="8" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="50" y="85" fill="#10b981" font-weight="bold" font-size="24">A</text>
                                    <text x="90" y="85" fill="#10b981" font-weight="bold" font-size="11">INITIAL ENCOUNTER</text>
                                    <text x="90" y="102" fill="#fff" font-size="8">Patient receiving ACTIVE treatment for the injury</text>
                                    <text x="90" y="118" fill="#888" font-size="7">Examples: ER visit, surgery, initial casting, wound debridement</text>
                                    <text x="90" y="130" fill="#10b981" font-size="7">Multiple "A" visits are common during active treatment!</text>

                                    <!-- D - Subsequent -->
                                    <rect x="15" y="145" width="370" height="75" rx="8" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <text x="50" y="170" fill="#f59e0b" font-weight="bold" font-size="24">D</text>
                                    <text x="90" y="170" fill="#f59e0b" font-weight="bold" font-size="11">SUBSEQUENT ENCOUNTER</text>
                                    <text x="90" y="187" fill="#fff" font-size="8">Patient receiving ROUTINE care during healing</text>
                                    <text x="90" y="203" fill="#888" font-size="7">Examples: Cast removal, wound check, suture removal, PT</text>
                                    <text x="90" y="215" fill="#f59e0b" font-size="7">The injury is healing - not active treatment</text>

                                    <!-- S - Sequela -->
                                    <rect x="15" y="230" width="370" height="75" rx="8" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="50" y="255" fill="#8b5cf6" font-weight="bold" font-size="24">S</text>
                                    <text x="90" y="255" fill="#8b5cf6" font-weight="bold" font-size="11">SEQUELA (Late Effect)</text>
                                    <text x="90" y="272" fill="#fff" font-size="8">Treatment for a COMPLICATION of a healed injury</text>
                                    <text x="90" y="288" fill="#888" font-size="7">Examples: Chronic pain, malunion, scar contracture</text>
                                    <text x="90" y="300" fill="#8b5cf6" font-size="7">The original injury has healed - treating the consequence</text>
                                </svg>`,
                                caption: "A = Active treatment, D = Routine healing, S = Late effect"
                            }
                        },
                        {
                            type: "concept",
                            title: "External Cause Coding (V-Y Codes)",
                            content: "External cause codes tell the story of HOW the injury happened. They're required for injury claims!\n\n**V00-V99: Transport Accidents**\n• Who was injured (driver, passenger, pedestrian)\n• What vehicle (car, motorcycle, bicycle)\n• What happened (collision, rollover, fall)\n\n**W00-W19: Falls**\n• Type of fall (from height, on same level)\n• What caused it (ice, stairs, furniture)\n\n**W20-W49: Exposure to Mechanical Forces**\n• Struck by, caught between objects\n\n**X00-X19: Fire/Heat/Burns**\n\n**X71-X83: Intentional Self-Harm**\n\n**X92-Y09: Assault**\n\n**Y10-Y34: Undetermined Intent**\n\n**Y62-Y84: Complications of Medical Care**\n\n**SEQUENCING:** Injury code (S/T) FIRST, then external cause (V-Y)",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 400 340" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="340" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="13">EXTERNAL CAUSE CODES (V-Y)</text>

                                    <!-- V codes -->
                                    <rect x="15" y="45" width="180" height="60" rx="6" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <text x="105" y="65" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="10">V00-V99</text>
                                    <text x="105" y="82" text-anchor="middle" fill="#fff" font-size="8">Transport Accidents</text>
                                    <text x="105" y="97" text-anchor="middle" fill="#888" font-size="7">MVA, motorcycle, bicycle, pedestrian</text>

                                    <!-- W codes -->
                                    <rect x="205" y="45" width="180" height="60" rx="6" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="295" y="65" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="10">W00-W99</text>
                                    <text x="295" y="82" text-anchor="middle" fill="#fff" font-size="8">Falls &amp; Exposures</text>
                                    <text x="295" y="97" text-anchor="middle" fill="#888" font-size="7">Falls, struck by, drowning</text>

                                    <!-- X codes -->
                                    <rect x="15" y="115" width="180" height="60" rx="6" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <text x="105" y="135" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="10">X00-X83</text>
                                    <text x="105" y="152" text-anchor="middle" fill="#fff" font-size="8">Fire, Heat, Self-Harm</text>
                                    <text x="105" y="167" text-anchor="middle" fill="#888" font-size="7">Burns, intentional self-harm</text>

                                    <!-- Y codes -->
                                    <rect x="205" y="115" width="180" height="60" rx="6" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="295" y="135" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="10">X92-Y84</text>
                                    <text x="295" y="152" text-anchor="middle" fill="#fff" font-size="8">Assault &amp; Complications</text>
                                    <text x="295" y="167" text-anchor="middle" fill="#888" font-size="7">Violence, medical complications</text>

                                    <!-- Place and Activity -->
                                    <rect x="15" y="185" width="180" height="55" rx="6" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <text x="105" y="205" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="10">Y92 - PLACE</text>
                                    <text x="105" y="225" text-anchor="middle" fill="#fff" font-size="8">Where it happened</text>
                                    <text x="105" y="237" text-anchor="middle" fill="#888" font-size="7">Home, work, school, street</text>

                                    <rect x="205" y="185" width="180" height="55" rx="6" fill="rgba(236,72,153,0.15)" stroke="#ec4899"/>
                                    <text x="295" y="205" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="10">Y93 - ACTIVITY</text>
                                    <text x="295" y="225" text-anchor="middle" fill="#fff" font-size="8">What they were doing</text>
                                    <text x="295" y="237" text-anchor="middle" fill="#888" font-size="7">Sports, work, leisure</text>

                                    <!-- Sequencing rule -->
                                    <rect x="15" y="250" width="370" height="75" rx="8" fill="rgba(14,165,233,0.15)" stroke="#0ea5e9" stroke-width="2"/>
                                    <text x="200" y="273" text-anchor="middle" fill="#0ea5e9" font-weight="bold" font-size="10">SEQUENCING ORDER</text>
                                    <rect x="40" y="285" width="80" height="30" rx="4" fill="#ef4444"/>
                                    <text x="80" y="305" text-anchor="middle" fill="#fff" font-size="9">S/T Code</text>
                                    <text x="130" y="305" fill="#888" font-size="12">→</text>
                                    <rect x="145" y="285" width="80" height="30" rx="4" fill="#f59e0b"/>
                                    <text x="185" y="305" text-anchor="middle" fill="#fff" font-size="9">V-Y Code</text>
                                    <text x="235" y="305" fill="#888" font-size="12">→</text>
                                    <rect x="250" y="285" width="50" height="30" rx="4" fill="#10b981"/>
                                    <text x="275" y="305" text-anchor="middle" fill="#fff" font-size="8">Y92</text>
                                    <text x="310" y="305" fill="#888" font-size="12">→</text>
                                    <rect x="325" y="285" width="50" height="30" rx="4" fill="#ec4899"/>
                                    <text x="350" y="305" text-anchor="middle" fill="#fff" font-size="8">Y93</text>
                                </svg>`,
                                caption: "Injury FIRST, then external cause, place, and activity"
                            }
                        },
                        {
                            type: "quiz",
                            question: "A patient returns for a cast check 2 weeks after fracture repair surgery. What 7th character should be used?",
                            options: [
                                { text: "A - Initial encounter (it's a follow-up to the initial treatment)", correct: false },
                                { text: "D - Subsequent encounter (routine care during healing)", correct: true },
                                { text: "S - Sequela (it's after the initial injury)", correct: false },
                                { text: "No 7th character needed for follow-ups", correct: false }
                            ],
                            explanation: "Use 'D' for subsequent encounter because the patient is receiving ROUTINE care during the healing phase. The surgery was the active treatment (A), but a cast check is routine healing care (D). Remember: A = active treatment, D = routine healing, S = late effect/complication after healing."
                        },
                        {
                            type: "quiz",
                            question: "A patient has chronic pain in their wrist from a fracture that healed 2 years ago. What 7th character?",
                            options: [
                                { text: "A - They're receiving treatment now", correct: false },
                                { text: "D - This is a follow-up for the original injury", correct: false },
                                { text: "S - This is a sequela (late effect) of the healed injury", correct: true },
                                { text: "The fracture is healed so no injury code is needed", correct: false }
                            ],
                            explanation: "Use 'S' for sequela because the chronic pain is a LATE EFFECT of the healed fracture. The original injury has healed, but the patient is now dealing with a consequence of that injury. You would code the chronic pain condition AND the original fracture code with 'S' to show the relationship."
                        },
                        {
                            type: "visual",
                            title: "Lesson 6 Complete!",
                            content: "You've mastered injury and external cause coding!",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 400 280" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="280" fill="#1a1a2e"/>
                                    <text x="200" y="30" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="14">🎉 LESSON 6 COMPLETE!</text>

                                    <rect x="40" y="50" width="320" height="210" rx="12" fill="rgba(16,185,129,0.1)" stroke="#10b981"/>

                                    <text x="200" y="80" text-anchor="middle" fill="#10b981" font-size="11">INJURY CODING MASTERED:</text>

                                    <text x="60" y="110" fill="#ef4444" font-size="12">✓</text>
                                    <text x="85" y="110" fill="#fff" font-size="9">S/T codes for WHAT happened</text>

                                    <text x="60" y="135" fill="#f59e0b" font-size="12">✓</text>
                                    <text x="85" y="135" fill="#fff" font-size="9">V-Y codes for HOW it happened</text>

                                    <text x="60" y="160" fill="#10b981" font-size="12">✓</text>
                                    <text x="85" y="160" fill="#fff" font-size="9">7th character: A (active), D (routine), S (sequela)</text>

                                    <text x="60" y="185" fill="#3b82f6" font-size="12">✓</text>
                                    <text x="85" y="185" fill="#fff" font-size="9">Place (Y92) and Activity (Y93) codes</text>

                                    <text x="60" y="210" fill="#8b5cf6" font-size="12">✓</text>
                                    <text x="85" y="210" fill="#fff" font-size="9">Proper sequencing: Injury → Cause → Place → Activity</text>

                                    <rect x="60" y="230" width="280" height="25" rx="6" fill="rgba(59,130,246,0.2)" stroke="#3b82f6"/>
                                    <text x="200" y="247" text-anchor="middle" fill="#3b82f6" font-size="9">NEXT: Z Codes & Special Situations →</text>
                                </svg>`,
                                caption: "Excellent work on injury coding!"
                            }
                        }
                    ]
                },

                // ========================================
                // LESSON 7: Z CODES
                // ========================================
                {
                    id: 7,
                    title: "Z Codes: Factors Influencing Health Status",
                    duration: 12,
                    completed: false,
                    cards: [
                        {
                            type: "intro",
                            title: "Z Codes: When There's No Disease",
                            content: "What code do you use when a patient isn't sick? Z codes!\n\n**Z codes capture:**\n• Encounters when no disease is present\n• Reasons influencing health status\n• Contact with health services\n\n**Common Uses:**\n• Screening visits (Z11-Z13)\n• Vaccination encounters (Z23)\n• Follow-up after treatment (Z09)\n• Personal history of disease (Z85-Z87)\n• Family history (Z80-Z84)\n• Social determinants of health (Z55-Z65)\n\n**KEY RULES:**\n1. Z codes can be principal OR secondary diagnosis\n2. Some Z codes are ONLY principal (like Z23 vaccination)\n3. Some are ONLY secondary (like Z codes for status)\n4. History codes (Z85-Z87) indicate RESOLVED conditions\n5. Status codes indicate ongoing conditions/states",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 400 300" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="300" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="14">Z CODES: BEYOND DISEASE</text>

                                    <!-- What Z codes capture -->
                                    <rect x="100" y="45" width="200" height="40" rx="20" fill="rgba(16,185,129,0.3)" stroke="#10b981" stroke-width="2"/>
                                    <text x="200" y="70" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="11">NO DISEASE PRESENT?</text>

                                    <text x="200" y="95" text-anchor="middle" fill="#fff" font-size="12">↓</text>

                                    <rect x="100" y="100" width="200" height="35" rx="8" fill="rgba(16,185,129,0.2)" stroke="#10b981"/>
                                    <text x="200" y="123" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="14">USE Z CODES!</text>

                                    <!-- Categories -->
                                    <rect x="15" y="150" width="115" height="65" rx="6" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <text x="72" y="170" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="9">SCREENINGS</text>
                                    <text x="72" y="188" text-anchor="middle" fill="#fff" font-size="7">Z11-Z13</text>
                                    <text x="72" y="205" text-anchor="middle" fill="#888" font-size="6">No symptoms, testing</text>

                                    <rect x="140" y="150" width="115" height="65" rx="6" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <text x="197" y="170" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="9">VACCINATIONS</text>
                                    <text x="197" y="188" text-anchor="middle" fill="#fff" font-size="7">Z23</text>
                                    <text x="197" y="205" text-anchor="middle" fill="#888" font-size="6">Immunization</text>

                                    <rect x="265" y="150" width="115" height="65" rx="6" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="322" y="170" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="9">HISTORY</text>
                                    <text x="322" y="188" text-anchor="middle" fill="#fff" font-size="7">Z85-Z87</text>
                                    <text x="322" y="205" text-anchor="middle" fill="#888" font-size="6">Past conditions</text>

                                    <rect x="80" y="225" width="115" height="65" rx="6" fill="rgba(236,72,153,0.15)" stroke="#ec4899"/>
                                    <text x="137" y="245" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="9">FOLLOW-UP</text>
                                    <text x="137" y="263" text-anchor="middle" fill="#fff" font-size="7">Z09</text>
                                    <text x="137" y="280" text-anchor="middle" fill="#888" font-size="6">After treatment</text>

                                    <rect x="205" y="225" width="115" height="65" rx="6" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <text x="262" y="245" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="9">SOCIAL</text>
                                    <text x="262" y="263" text-anchor="middle" fill="#fff" font-size="7">Z55-Z65</text>
                                    <text x="262" y="280" text-anchor="middle" fill="#888" font-size="6">SDOH factors</text>
                                </svg>`,
                                caption: "Z codes capture encounters without active disease"
                            }
                        },
                        {
                            type: "concept",
                            title: "History vs Status Codes",
                            content: "**HISTORY CODES (Z85-Z87):**\nIndicate a condition that NO LONGER EXISTS.\n\n• Z85.x = Personal history of malignant neoplasm\n  (Cancer is cured/in remission - NOT active!)\n• Z86.x = Personal history of other diseases\n• Z87.x = Personal history of other conditions\n\n**When to use:** Patient had cancer 5 years ago, now cured. Code Z85.x, NOT the active cancer code.\n\n**STATUS CODES (Z93-Z99):**\nIndicate an ONGOING state affecting health.\n\n• Z93.x = Artificial opening status (colostomy, etc.)\n• Z94.x = Transplant status\n• Z95.x = Cardiac device status (pacemaker)\n• Z96.x = Presence of implants\n• Z99.x = Dependence on machines/devices\n\n**When to use:** Patient has a pacemaker. Code Z95.0 on every relevant encounter - it's an ongoing state.",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 400 300" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="300" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#0ea5e9" font-weight="bold" font-size="13">HISTORY vs STATUS CODES</text>

                                    <!-- History -->
                                    <rect x="15" y="45" width="180" height="180" rx="10" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6"/>
                                    <text x="105" y="70" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="12">HISTORY (Z85-Z87)</text>
                                    <text x="105" y="92" text-anchor="middle" fill="#fff" font-size="9">Condition NO LONGER EXISTS</text>

                                    <rect x="25" y="105" width="160" height="35" rx="4" fill="rgba(139,92,246,0.2)"/>
                                    <text x="105" y="120" text-anchor="middle" fill="#fff" font-size="8">Z85.x = Past cancer (cured)</text>
                                    <text x="105" y="135" text-anchor="middle" fill="#888" font-size="7">NOT active disease!</text>

                                    <rect x="25" y="150" width="160" height="30" rx="4" fill="rgba(139,92,246,0.15)"/>
                                    <text x="105" y="170" text-anchor="middle" fill="#fff" font-size="8">Z86/Z87 = Past conditions</text>

                                    <text x="105" y="205" text-anchor="middle" fill="#8b5cf6" font-size="8">EXAMPLE:</text>
                                    <text x="105" y="220" text-anchor="middle" fill="#fff" font-size="7">"Breast cancer cured 5 yrs ago"</text>
                                    <text x="105" y="235" text-anchor="middle" fill="#10b981" font-size="8">→ Z85.3</text>

                                    <!-- Status -->
                                    <rect x="205" y="45" width="180" height="180" rx="10" fill="rgba(16,185,129,0.1)" stroke="#10b981"/>
                                    <text x="295" y="70" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="12">STATUS (Z93-Z99)</text>
                                    <text x="295" y="92" text-anchor="middle" fill="#fff" font-size="9">ONGOING state affecting health</text>

                                    <rect x="215" y="105" width="160" height="35" rx="4" fill="rgba(16,185,129,0.2)"/>
                                    <text x="295" y="120" text-anchor="middle" fill="#fff" font-size="8">Z95.x = Cardiac devices</text>
                                    <text x="295" y="135" text-anchor="middle" fill="#888" font-size="7">Pacemaker, stent, etc.</text>

                                    <rect x="215" y="150" width="160" height="30" rx="4" fill="rgba(16,185,129,0.15)"/>
                                    <text x="295" y="170" text-anchor="middle" fill="#fff" font-size="8">Z94.x = Transplant status</text>

                                    <text x="295" y="205" text-anchor="middle" fill="#10b981" font-size="8">EXAMPLE:</text>
                                    <text x="295" y="220" text-anchor="middle" fill="#fff" font-size="7">"Patient has pacemaker"</text>
                                    <text x="295" y="235" text-anchor="middle" fill="#10b981" font-size="8">→ Z95.0 (every visit)</text>

                                    <!-- Key difference -->
                                    <rect x="40" y="235" width="320" height="50" rx="8" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <text x="200" y="255" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="10">KEY DIFFERENCE</text>
                                    <text x="200" y="275" text-anchor="middle" fill="#fff" font-size="9">History = RESOLVED | Status = ONGOING</text>
                                </svg>`,
                                caption: "History codes = past conditions | Status codes = current states"
                            }
                        },
                        {
                            type: "quiz",
                            question: "A patient had colon cancer 3 years ago, now in remission, comes in for a routine colonoscopy. What codes are needed?",
                            options: [
                                { text: "C18.9 (Colon cancer) - they still have the history", correct: false },
                                { text: "Z12.11 (Screening colonoscopy) + Z85.038 (Personal history of colon cancer)", correct: true },
                                { text: "Z85.038 only - that's the main reason for the visit", correct: false },
                                { text: "Z12.11 only - history doesn't matter for screenings", correct: false }
                            ],
                            explanation: "The patient no longer has active cancer (in remission = resolved), so use Z85.038 (personal history) NOT the active cancer code. The screening colonoscopy (Z12.11) is the reason for the encounter. The history code explains WHY increased surveillance is needed. Both codes tell the complete story."
                        },
                        {
                            type: "visual",
                            title: "Lesson 7 Complete!",
                            content: "You've mastered Z codes!",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 400 260" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="260" fill="#1a1a2e"/>
                                    <text x="200" y="30" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="14">🎉 LESSON 7 COMPLETE!</text>

                                    <rect x="40" y="50" width="320" height="190" rx="12" fill="rgba(16,185,129,0.1)" stroke="#10b981"/>

                                    <text x="200" y="80" text-anchor="middle" fill="#10b981" font-size="11">Z CODE MASTERY:</text>

                                    <text x="60" y="110" fill="#10b981" font-size="12">✓</text>
                                    <text x="85" y="110" fill="#fff" font-size="9">When to use Z codes (no active disease)</text>

                                    <text x="60" y="135" fill="#8b5cf6" font-size="12">✓</text>
                                    <text x="85" y="135" fill="#fff" font-size="9">History codes (Z85-Z87) = RESOLVED</text>

                                    <text x="60" y="160" fill="#10b981" font-size="12">✓</text>
                                    <text x="85" y="160" fill="#fff" font-size="9">Status codes (Z93-Z99) = ONGOING</text>

                                    <text x="60" y="185" fill="#f59e0b" font-size="12">✓</text>
                                    <text x="85" y="185" fill="#fff" font-size="9">Screenings, vaccines, follow-ups</text>

                                    <rect x="60" y="210" width="280" height="25" rx="6" fill="rgba(59,130,246,0.2)" stroke="#3b82f6"/>
                                    <text x="200" y="227" text-anchor="middle" fill="#3b82f6" font-size="9">NEXT: ICD-10-CM Review & Practice →</text>
                                </svg>`,
                                caption: "Z codes complete the coding picture!"
                            }
                        }
                    ]
                },

                // ========================================
                // LESSON 8-12: Remaining lessons (abbreviated)
                // ========================================
                {
                    id: 8,
                    title: "Outpatient vs Inpatient Guidelines",
                    duration: 10,
                    completed: false,
                    cards: [
                        {
                            type: "intro",
                            title: "Different Settings, Different Rules",
                            content: "Outpatient and inpatient coding follow DIFFERENT guidelines!\n\n**INPATIENT (Section II):**\n• Use 'Principal Diagnosis' = condition AFTER STUDY\n• Can code 'rule out', 'probable', 'suspected' as if confirmed\n• Code all conditions that affect care\n\n**OUTPATIENT (Section IV):**\n• Use 'First-Listed Diagnosis' = reason for encounter\n• CANNOT code 'rule out' - use signs/symptoms instead\n• Code to highest certainty\n\n**KEY DIFFERENCE:**\nInpatient: 'Rule out pneumonia' → Code pneumonia\nOutpatient: 'Rule out pneumonia' → Code symptoms only (cough, fever)",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 400 280" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="280" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#0ea5e9" font-weight="bold" font-size="13">INPATIENT vs OUTPATIENT CODING</text>

                                    <rect x="15" y="45" width="180" height="140" rx="8" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <text x="105" y="70" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="11">INPATIENT (Section II)</text>
                                    <text x="25" y="95" fill="#fff" font-size="8">• Principal Dx = after study</text>
                                    <text x="25" y="115" fill="#fff" font-size="8">• CAN code "probable/rule out"</text>
                                    <text x="25" y="135" fill="#fff" font-size="8">• Code affects LOS/resources</text>
                                    <rect x="25" y="150" width="160" height="25" rx="4" fill="rgba(239,68,68,0.3)"/>
                                    <text x="105" y="168" text-anchor="middle" fill="#fff" font-size="8">"Rule out" → Code it!</text>

                                    <rect x="205" y="45" width="180" height="140" rx="8" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="295" y="70" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="11">OUTPATIENT (Section IV)</text>
                                    <text x="215" y="95" fill="#fff" font-size="8">• First-Listed Dx = reason</text>
                                    <text x="215" y="115" fill="#fff" font-size="8">• CANNOT code uncertain dx</text>
                                    <text x="215" y="135" fill="#fff" font-size="8">• Code to highest certainty</text>
                                    <rect x="215" y="150" width="160" height="25" rx="4" fill="rgba(16,185,129,0.3)"/>
                                    <text x="295" y="168" text-anchor="middle" fill="#fff" font-size="8">"Rule out" → Symptoms only</text>

                                    <rect x="40" y="200" width="320" height="65" rx="8" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <text x="200" y="222" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="10">EXAMPLE: "Rule out Pneumonia"</text>
                                    <text x="200" y="242" text-anchor="middle" fill="#ef4444" font-size="9">Inpatient → J18.9 (pneumonia code)</text>
                                    <text x="200" y="258" text-anchor="middle" fill="#10b981" font-size="9">Outpatient → R05.9 (cough), R50.9 (fever)</text>
                                </svg>`,
                                caption: "Inpatient can code uncertain; Outpatient cannot"
                            }
                        },
                        {
                            type: "quiz",
                            question: "An outpatient comes in with cough and fever. Documentation says 'rule out pneumonia.' How do you code this?",
                            options: [
                                { text: "J18.9 (Pneumonia) - that's what's being ruled out", correct: false },
                                { text: "R05.9 (Cough) + R50.9 (Fever) - signs/symptoms only", correct: true },
                                { text: "Z03.89 (Observation for suspected condition)", correct: false },
                                { text: "No code needed - nothing was confirmed", correct: false }
                            ],
                            explanation: "In OUTPATIENT settings, you CANNOT code uncertain diagnoses like 'rule out,' 'probable,' or 'suspected.' Instead, code the signs and symptoms that are documented - cough (R05.9) and fever (R50.9). Only inpatient coding allows coding uncertain conditions as if confirmed."
                        }
                    ]
                },
                {
                    id: 9,
                    title: "Principal Diagnosis Selection",
                    duration: 10,
                    completed: false,
                    cards: [
                        {
                            type: "intro",
                            title: "Choosing the Principal Diagnosis",
                            content: "The PRINCIPAL DIAGNOSIS drives reimbursement and must be selected correctly!\n\n**DEFINITION (Inpatient):**\nThe condition established AFTER STUDY to be chiefly responsible for occasioning the admission.\n\n**Selection Guidelines:**\n1. Symptoms followed by contrasting diagnoses → Code the confirmed diagnosis\n2. Two or more interrelated conditions → Either can be principal\n3. Two or more conditions equally meeting definition → Either can be principal\n4. Original treatment vs complications → Code original reason\n5. Symptom followed by diagnosis → Code the diagnosis\n\n**NEVER as Principal:**\n• External cause codes (V-Y)\n• Manifestation codes with 'Code First' notes\n• Codes marked 'Use Additional Code'",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 400 280" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="280" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#0ea5e9" font-weight="bold" font-size="13">PRINCIPAL DIAGNOSIS SELECTION</text>

                                    <rect x="50" y="45" width="300" height="50" rx="8" fill="rgba(14,165,233,0.2)" stroke="#0ea5e9"/>
                                    <text x="200" y="70" text-anchor="middle" fill="#0ea5e9" font-size="10">Condition AFTER STUDY chiefly responsible</text>
                                    <text x="200" y="88" text-anchor="middle" fill="#fff" font-size="9">for occasioning the admission</text>

                                    <rect x="15" y="110" width="115" height="70" rx="6" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="72" y="130" text-anchor="middle" fill="#10b981" font-size="9">Symptom + Dx</text>
                                    <text x="72" y="148" text-anchor="middle" fill="#fff" font-size="8">→ Code the</text>
                                    <text x="72" y="163" text-anchor="middle" fill="#fff" font-size="8">DIAGNOSIS</text>

                                    <rect x="140" y="110" width="115" height="70" rx="6" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <text x="197" y="130" text-anchor="middle" fill="#f59e0b" font-size="9">Two Conditions</text>
                                    <text x="197" y="148" text-anchor="middle" fill="#fff" font-size="8">→ Either can</text>
                                    <text x="197" y="163" text-anchor="middle" fill="#fff" font-size="8">be principal</text>

                                    <rect x="265" y="110" width="120" height="70" rx="6" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="325" y="130" text-anchor="middle" fill="#8b5cf6" font-size="9">Complication</text>
                                    <text x="325" y="148" text-anchor="middle" fill="#fff" font-size="8">→ Original</text>
                                    <text x="325" y="163" text-anchor="middle" fill="#fff" font-size="8">reason first</text>

                                    <rect x="30" y="195" width="340" height="70" rx="8" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <text x="200" y="218" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="10">NEVER PRINCIPAL:</text>
                                    <text x="200" y="240" text-anchor="middle" fill="#fff" font-size="9">V-Y codes | Manifestation codes | "Use Additional" codes</text>
                                    <text x="200" y="255" text-anchor="middle" fill="#888" font-size="8">These are ALWAYS secondary diagnoses</text>
                                </svg>`,
                                caption: "Principal diagnosis = main reason for admission after study"
                            }
                        }
                    ]
                },
                {
                    id: 10,
                    title: "Common Coding Scenarios",
                    duration: 12,
                    completed: false,
                    cards: [
                        {
                            type: "intro",
                            title: "Putting It All Together: Real Scenarios",
                            content: "Let's practice with common coding scenarios you'll encounter daily!\n\n**SCENARIO TYPES:**\n1. Diabetes with multiple complications\n2. Hypertension with heart disease and CKD\n3. Pneumonia with respiratory failure\n4. Cancer with metastasis\n5. Injuries with external causes\n6. Screenings and follow-ups\n\n**APPROACH:**\n1. Identify ALL conditions documented\n2. Determine relationships (with, due to)\n3. Check for combination codes\n4. Apply sequencing rules\n5. Verify in Tabular List\n6. Add required characters (7th, laterality)",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 400 280" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="280" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#0ea5e9" font-weight="bold" font-size="13">CODING SCENARIO APPROACH</text>

                                    <rect x="15" y="45" width="370" height="35" rx="8" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <text x="30" y="67" fill="#ef4444" font-weight="bold" font-size="11">1.</text>
                                    <text x="55" y="67" fill="#fff" font-size="10">Identify ALL conditions documented</text>

                                    <rect x="15" y="90" width="370" height="35" rx="8" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <text x="30" y="112" fill="#f59e0b" font-weight="bold" font-size="11">2.</text>
                                    <text x="55" y="112" fill="#fff" font-size="10">Determine relationships (with, due to, caused by)</text>

                                    <rect x="15" y="135" width="370" height="35" rx="8" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="30" y="157" fill="#10b981" font-weight="bold" font-size="11">3.</text>
                                    <text x="55" y="157" fill="#fff" font-size="10">Check for combination codes FIRST</text>

                                    <rect x="15" y="180" width="370" height="35" rx="8" fill="rgba(59,130,246,0.15)" stroke="#3b82f6"/>
                                    <text x="30" y="202" fill="#3b82f6" font-weight="bold" font-size="11">4.</text>
                                    <text x="55" y="202" fill="#fff" font-size="10">Apply sequencing rules (Code First, etc.)</text>

                                    <rect x="15" y="225" width="370" height="35" rx="8" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6"/>
                                    <text x="30" y="247" fill="#8b5cf6" font-weight="bold" font-size="11">5.</text>
                                    <text x="55" y="247" fill="#fff" font-size="10">Verify in Tabular + Add required characters</text>
                                </svg>`,
                                caption: "Follow this systematic approach for every scenario"
                            }
                        }
                    ]
                },
                {
                    id: 11,
                    title: "Practice Cases",
                    duration: 15,
                    completed: false,
                    cards: [
                        {
                            type: "intro",
                            title: "Practice Makes Perfect",
                            content: "Work through these practice cases to solidify your coding skills!\n\n**CASE 1:** Type 2 DM with diabetic nephropathy and neuropathy\n**ANSWER:** E11.22, E11.42 (two codes for two complications)\n\n**CASE 2:** HTN, heart failure, and CKD stage 3\n**ANSWER:** I13.0, N18.3 (combo code + CKD stage)\n\n**CASE 3:** Lung cancer with brain metastasis\n**ANSWER:** C34.90, C79.31 (primary first)\n\n**CASE 4:** Fall from ladder at home, initial encounter for closed femur fracture\n**ANSWER:** S72.001A, W11.XXXA, Y92.009, Y93.89\n\n**CASE 5:** Screening colonoscopy with personal history of colon polyps\n**ANSWER:** Z12.11, Z86.010",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 400 280" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="280" fill="#1a1a2e"/>
                                    <text x="200" y="25" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="13">PRACTICE CASE REVIEW</text>

                                    <rect x="15" y="45" width="370" height="45" rx="6" fill="rgba(16,185,129,0.15)" stroke="#10b981"/>
                                    <text x="25" y="65" fill="#10b981" font-size="9">Case 1: DM + nephropathy + neuropathy</text>
                                    <text x="25" y="82" fill="#fff" font-size="9">→ E11.22, E11.42 (two complications = two codes)</text>

                                    <rect x="15" y="100" width="370" height="45" rx="6" fill="rgba(239,68,68,0.15)" stroke="#ef4444"/>
                                    <text x="25" y="120" fill="#ef4444" font-size="9">Case 2: HTN + HF + CKD3</text>
                                    <text x="25" y="137" fill="#fff" font-size="9">→ I13.0 (combo), N18.3 (stage)</text>

                                    <rect x="15" y="155" width="370" height="45" rx="6" fill="rgba(236,72,153,0.15)" stroke="#ec4899"/>
                                    <text x="25" y="175" fill="#ec4899" font-size="9">Case 3: Lung CA + brain mets</text>
                                    <text x="25" y="192" fill="#fff" font-size="9">→ C34.90 (primary), C79.31 (secondary)</text>

                                    <rect x="15" y="210" width="370" height="55" rx="6" fill="rgba(245,158,11,0.15)" stroke="#f59e0b"/>
                                    <text x="25" y="230" fill="#f59e0b" font-size="9">Case 4: Ladder fall, femur fracture</text>
                                    <text x="25" y="247" fill="#fff" font-size="9">→ S72.001A + W11.XXXA + Y92.009 + Y93.89</text>
                                    <text x="25" y="260" fill="#888" font-size="7">(Injury + cause + place + activity)</text>
                                </svg>`,
                                caption: "Apply everything you've learned!"
                            }
                        }
                    ]
                },
                {
                    id: 12,
                    title: "ICD-10-CM Review & Certification Prep",
                    duration: 15,
                    completed: false,
                    cards: [
                        {
                            type: "intro",
                            title: "Final Review: You're Ready!",
                            content: "Congratulations! You've completed the ICD-10-CM course. Here's your final review:\n\n**KEY MNEMONICS:**\n• VERIFY - Basic coding process\n• SCENE - Conventions\n• SMART - General guidelines\n• INSIDE - Chapters 1-5\n• HEARTS - Chapters 6-10\n\n**TOP RULES:**\n1. Code to highest specificity\n2. Verify in Tabular List - ALWAYS\n3. Use combination codes when available\n4. Acute before chronic\n5. 7th character for injuries\n6. Assumed relationships (HTN, DM 'with')\n\n**CERTIFICATION TIPS:**\n• Know chapter-specific guidelines cold\n• Practice timing - 3-5 codes per minute\n• Read ALL answer choices\n• Use process of elimination",
                            visual: {
                                type: "diagram",
                                svg: `<svg viewBox="0 0 400 300" class="lesson-visual">
                                    <rect x="0" y="0" width="400" height="300" fill="#1a1a2e"/>
                                    <rect x="60" y="15" width="280" height="50" rx="10" fill="rgba(16,185,129,0.3)" stroke="#10b981" stroke-width="2"/>
                                    <text x="200" y="48" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="16">🎓 COURSE COMPLETE!</text>

                                    <text x="200" y="85" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">YOUR MNEMONICS TOOLKIT:</text>

                                    <rect x="20" y="100" width="70" height="35" rx="4" fill="rgba(239,68,68,0.3)"/>
                                    <text x="55" y="123" text-anchor="middle" fill="#fff" font-size="9">VERIFY</text>

                                    <rect x="95" y="100" width="70" height="35" rx="4" fill="rgba(245,158,11,0.3)"/>
                                    <text x="130" y="123" text-anchor="middle" fill="#fff" font-size="9">SCENE</text>

                                    <rect x="170" y="100" width="70" height="35" rx="4" fill="rgba(16,185,129,0.3)"/>
                                    <text x="205" y="123" text-anchor="middle" fill="#fff" font-size="9">SMART</text>

                                    <rect x="245" y="100" width="70" height="35" rx="4" fill="rgba(59,130,246,0.3)"/>
                                    <text x="280" y="123" text-anchor="middle" fill="#fff" font-size="9">INSIDE</text>

                                    <rect x="320" y="100" width="70" height="35" rx="4" fill="rgba(239,68,68,0.3)"/>
                                    <text x="355" y="123" text-anchor="middle" fill="#fff" font-size="9">HEARTS</text>

                                    <text x="200" y="165" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">MASTERED SKILLS:</text>

                                    <text x="60" y="190" fill="#10b981" font-size="12">✓</text>
                                    <text x="80" y="190" fill="#fff" font-size="9">Code structure &amp; conventions</text>

                                    <text x="60" y="210" fill="#10b981" font-size="12">✓</text>
                                    <text x="80" y="210" fill="#fff" font-size="9">Chapter-specific guidelines</text>

                                    <text x="60" y="230" fill="#10b981" font-size="12">✓</text>
                                    <text x="80" y="230" fill="#fff" font-size="9">Injury &amp; external cause coding</text>

                                    <text x="60" y="250" fill="#10b981" font-size="12">✓</text>
                                    <text x="80" y="250" fill="#fff" font-size="9">Z codes &amp; special situations</text>

                                    <text x="60" y="270" fill="#10b981" font-size="12">✓</text>
                                    <text x="80" y="270" fill="#fff" font-size="9">Sequencing &amp; principal diagnosis</text>

                                    <rect x="50" y="280" width="300" height="15" rx="3" fill="rgba(16,185,129,0.2)"/>
                                    <rect x="50" y="280" width="300" height="15" rx="3" fill="#10b981"/>
                                    <text x="200" y="291" text-anchor="middle" fill="#fff" font-size="8">PROGRESS: 100% COMPLETE</text>
                                </svg>`,
                                caption: "You're ready for certification!"
                            }
                        },
                        {
                            type: "quiz",
                            question: "FINAL EXAM: What is the GOLDEN RULE of medical coding?",
                            options: [
                                { text: "Always code what the patient tells you", correct: false },
                                { text: "Code to the highest level of specificity supported by documentation", correct: true },
                                { text: "Use unspecified codes to be safe", correct: false },
                                { text: "Code from the Index only to save time", correct: false }
                            ],
                            explanation: "The GOLDEN RULE is to always code to the highest level of specificity that the documentation supports. This means using all available characters, including laterality, type, timing, and any other specifics documented. Unspecified codes should only be used when the documentation truly lacks detail. Always verify in the Tabular List!"
                        }
                    ]
                }
            ]
        }
    ]
};

// Function to check for coding updates
function checkCodingUpdates() {
    return CODING_UPDATES;
}

// Export for use in main app
if (typeof window !== 'undefined') {
    window.MEDICAL_CODING_CATEGORY = MEDICAL_CODING_CATEGORY;
    window.CODING_UPDATES = CODING_UPDATES;
    window.checkCodingUpdates = checkCodingUpdates;
}
