// External category module — NCLEX Foundations Track.
// Pairs with the existing A&P and Pathophysiology books in HIM to give
// nursing-pivot students a full NCLEX-RN/PN prep path.

(function () {
    const COMING_SOON_SVG = `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
        <rect width="1100" height="1100" fill="#1a1a2e"/>
        <rect x="80" y="180" width="940" height="740" rx="24" fill="rgba(236,72,153,0.08)" stroke="#ec4899" stroke-width="3"/>
        <text x="550" y="320" text-anchor="middle" font-size="78" fill="#ffd700" font-weight="bold">🚧 Coming Soon</text>
        <text x="550" y="410" text-anchor="middle" font-size="32" fill="#888">NCLEX Foundations</text>
        <text x="550" y="540" text-anchor="middle" font-size="26" fill="#ffffff">This book is being authored.</text>
        <text x="550" y="600" text-anchor="middle" font-size="26" fill="#ffffff">Start with Book 1 — NCLEX Fundamentals —</text>
        <text x="550" y="650" text-anchor="middle" font-size="26" fill="#ffffff">to learn the ABCs / Maslow / ADPIE rules.</text>
        <text x="550" y="800" text-anchor="middle" font-size="22" fill="#ec4899">Pairs with the A&amp;P and Pathophysiology</text>
        <text x="550" y="840" text-anchor="middle" font-size="22" fill="#ec4899">books already in the HIM category.</text>
    </svg>`;

    function comingSoonLessons(scope) {
        return [{
            id: 'coming-soon', title: 'Book Outline & What You\'ll Learn', duration: '5',
            cards: [{
                type: 'intro',
                title: 'Coming Soon — Book in Development',
                content: `This book covers **${scope}**.\n\nThe full lesson content is being authored. In the meantime, start with **Book 1 — NCLEX Fundamentals** to learn the priority frameworks (ABCs, Maslow, nursing process) that every NCLEX question hides behind its wording.\n\n**Already live and useful:** the A&P I & II books and Pathophysiology in the HIM category — they cover 60% of the science NCLEX expects you to know.`,
                visual: { type: 'diagram', svg: COMING_SOON_SVG, caption: 'Coming soon' }
            }]
        }];
    }

    const FUND_PLACEHOLDER_LESSONS = comingSoonLessons('the priority frameworks (ABCs, Maslow, nursing process / ADPIE) that every NCLEX question is built around');

    const BOOKS = [
        {
            id: 'nclex-fundamentals',
            title: 'NCLEX Fundamentals: The ABCs, Maslow, and Nursing Process',
            author: 'Synthesis Learning',
            description: 'The three priority frameworks every NCLEX question hides behind its wording — the ABCs (airway/breathing/circulation), Maslow\'s hierarchy as a triage tool, and the nursing process (ADPIE).',
            lessons: 3, duration: 45, progress: 0, category: 'nclex-foundations',
            lessonList: FUND_PLACEHOLDER_LESSONS,
        },
        {
            id: 'nclex-pharmacology',
            title: 'Pharmacology for the NCLEX',
            author: 'Synthesis Learning',
            description: 'High-yield drug classes, prefixes/suffixes that tell you the class, lab values, and the side effects NCLEX always tests.',
            lessons: 1, duration: 5, progress: 0, category: 'nclex-foundations',
            lessonList: comingSoonLessons('high-yield drug classes, name prefix/suffix patterns (-pril, -olol, -statin, etc.), critical lab values, and high-test side effects'),
        },
        {
            id: 'nclex-med-surg',
            title: 'Medical-Surgical Nursing Core',
            author: 'Synthesis Learning',
            description: 'The largest NCLEX content area — cardiac, respiratory, GI, GU, endocrine, neuro — focused on the priority assessments and interventions.',
            lessons: 1, duration: 5, progress: 0, category: 'nclex-foundations',
            lessonList: comingSoonLessons('cardiac, respiratory, GI, GU, endocrine, and neuro med-surg nursing care for the largest NCLEX content area'),
        },
        {
            id: 'nclex-pediatrics',
            title: 'Pediatric Nursing',
            author: 'Synthesis Learning',
            description: 'Growth & development milestones, immunization schedules, pediatric-specific dosing, and the conditions NCLEX loves (sickle cell, cystic fibrosis, leukemia).',
            lessons: 1, duration: 5, progress: 0, category: 'nclex-foundations',
            lessonList: comingSoonLessons('growth & development milestones, immunization schedules, pediatric dosing, and high-yield peds conditions'),
        },
        {
            id: 'nclex-maternal',
            title: 'Maternal-Newborn Nursing',
            author: 'Synthesis Learning',
            description: 'Prenatal, labor stages, postpartum complications, and newborn assessment — with the lab values and red flags NCLEX expects you to catch.',
            lessons: 1, duration: 5, progress: 0, category: 'nclex-foundations',
            lessonList: comingSoonLessons('prenatal care, the four labor stages, postpartum complications, and newborn assessment with red flags'),
        },
        {
            id: 'nclex-mental-health',
            title: 'Mental Health Nursing',
            author: 'Synthesis Learning',
            description: 'Therapeutic communication patterns NCLEX scores on, the major disorders, suicide-risk assessment, and psych meds.',
            lessons: 1, duration: 5, progress: 0, category: 'nclex-foundations',
            lessonList: comingSoonLessons('therapeutic communication, major psych disorders, suicide-risk assessment, and psychiatric medication management'),
        },
        {
            id: 'nclex-critical-care',
            title: 'Critical Care & Emergency Nursing',
            author: 'Synthesis Learning',
            description: 'Shock states, ABG interpretation, triage, the cardiac rhythms you have to recognize on sight, and disaster response.',
            lessons: 1, duration: 5, progress: 0, category: 'nclex-foundations',
            lessonList: comingSoonLessons('shock states, ABG interpretation, ED triage, key cardiac rhythms, and disaster response'),
        },
        {
            id: 'nclex-pathophys',
            title: 'Pathophysiology for NCLEX Reasoning',
            author: 'Synthesis Learning',
            description: 'The "why" behind every nursing intervention — pulling the mechanisms together so SATA and prioritization questions get easier.',
            lessons: 1, duration: 5, progress: 0, category: 'nclex-foundations',
            lessonList: comingSoonLessons('the pathophysiologic mechanisms that drive nursing interventions — the why behind the what'),
        },
        {
            id: 'nclex-strategy',
            title: 'NCLEX Test-Taking Strategy and SATA',
            author: 'Synthesis Learning',
            description: 'How CAT scoring actually works, the Select-All-That-Apply technique that beats guessing, and the four-step process for prioritization questions.',
            lessons: 1, duration: 5, progress: 0, category: 'nclex-foundations',
            lessonList: comingSoonLessons('how CAT scoring works, SATA technique, and a four-step process for prioritization questions'),
        },
        {
            id: 'nclex-mock',
            title: 'Full-Length NCLEX Mock Exams',
            author: 'Synthesis Learning',
            description: 'Computer-adaptive-style mock exams with the same question-type mix and difficulty as the real Next Gen NCLEX.',
            lessons: 1, duration: 5, progress: 0, category: 'nclex-foundations',
            lessonList: comingSoonLessons('computer-adaptive-style mock exams matching the Next Gen NCLEX question mix and difficulty'),
        },
    ];

    window.NCLEX_FOUNDATIONS_CATEGORY = {
        id: 'nclex-foundations',
        name: 'NCLEX Foundations',
        icon: '🩺',
        color: '#ec4899',
        description: 'A 10-book NCLEX-RN/PN prep track. Pairs with the A&P I & II and Pathophysiology books already in the HIM category to give nursing-pivot students a complete prep system — priority frameworks, pharm, med-surg, peds, maternal, mental health, critical care, plus the test-taking strategy and full-length mock exams.',
        examCenterTrack: false,
        books: BOOKS,
    };
})();
