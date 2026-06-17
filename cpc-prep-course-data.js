// External category module — CPC (Certified Professional Coder) Prep Track.
// Loaded BEFORE data.js so it's available when integrateExternalCategories() runs.
// AAPC's CPC is the most-sought medical-coding certification in the US.

(function () {
    const COMING_SOON_SVG = `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
        <rect width="1100" height="1100" fill="#1a1a2e"/>
        <rect x="80" y="180" width="940" height="740" rx="24" fill="rgba(14,165,233,0.08)" stroke="#0ea5e9" stroke-width="3"/>
        <text x="550" y="320" text-anchor="middle" font-size="78" fill="#ffd700" font-weight="bold">🚧 Coming Soon</text>
        <text x="550" y="410" text-anchor="middle" font-size="32" fill="#888">CPC Prep Track</text>
        <text x="550" y="540" text-anchor="middle" font-size="26" fill="#ffffff">This book is being authored.</text>
        <text x="550" y="600" text-anchor="middle" font-size="26" fill="#ffffff">Start with Book 1 — CPC Foundation —</text>
        <text x="550" y="650" text-anchor="middle" font-size="26" fill="#ffffff">while the rest of the track is built out.</text>
        <text x="550" y="800" text-anchor="middle" font-size="22" fill="#0ea5e9">Pass each lesson's quiz at 80%</text>
        <text x="550" y="840" text-anchor="middle" font-size="22" fill="#0ea5e9">to unlock the next.</text>
    </svg>`;

    function comingSoonLessons(scope) {
        return [{
            id: 'coming-soon',
            title: 'Book Outline & What You\'ll Learn',
            duration: '5',
            cards: [{
                type: 'intro',
                title: 'Coming Soon — Book in Development',
                content: `This book covers **${scope}**.\n\nThe full lesson content is being authored. In the meantime, start with **Book 1 — CPC Foundation** to build the medical terminology and anatomy base every CPC question assumes you have.\n\nThe Exam Center already works for the books that are live — your spaced-repetition queue and streak both count any lesson you complete.`,
                visual: { type: 'diagram', svg: COMING_SOON_SVG, caption: 'Coming soon' }
            }]
        }];
    }

    // ============================
    // BOOK 1 — CPC FOUNDATION (seed; real lessons spliced in)
    // ============================
    const FOUNDATION_PLACEHOLDER_LESSONS = comingSoonLessons('the anatomy, body planes, and medical-term decoding that every CPC exam question assumes you already know');

    const BOOKS = [
        {
            id: 'cpc-foundation',
            title: 'CPC Foundation: Med Term & A&P Review for Coders',
            author: 'Synthesis Learning',
            description: 'The anatomy, body planes, and medical-term decoding system that every CPC exam question assumes you already know. The base layer for everything else in the track.',
            lessons: 3, duration: 45, progress: 0,
            category: 'cpc-prep',
            lessonList: FOUNDATION_PLACEHOLDER_LESSONS, // replaced by seed content when available
        },
        {
            id: 'cpc-icd10cm',
            title: 'ICD-10-CM Coding Conventions and Guidelines',
            author: 'Synthesis Learning',
            description: 'The Official Guidelines for Coding and Reporting, alphabetic vs. tabular index, code-first/use-additional, laterality, combination codes.',
            lessons: 1, duration: 5, progress: 0, category: 'cpc-prep',
            lessonList: comingSoonLessons('ICD-10-CM conventions, the Official Guidelines for Coding and Reporting, and the alphabetic/tabular index workflow'),
        },
        {
            id: 'cpc-cpt-surg-1',
            title: 'CPT Surgical Section I: Integumentary, Musculoskeletal, Respiratory',
            author: 'Synthesis Learning',
            description: 'Lesion excisions, fracture care, endoscopies — including the bundling rules and add-on codes that trip up new coders.',
            lessons: 1, duration: 5, progress: 0, category: 'cpc-prep',
            lessonList: comingSoonLessons('integumentary lesion excision, musculoskeletal fracture care, and respiratory endoscopy coding'),
        },
        {
            id: 'cpc-cpt-surg-2',
            title: 'CPT Surgical Section II: Cardiovascular, Digestive, Urinary',
            author: 'Synthesis Learning',
            description: 'Cath labs, GI endoscopies, urologic procedures, and the parenthetical instructions that change the right code.',
            lessons: 1, duration: 5, progress: 0, category: 'cpc-prep',
            lessonList: comingSoonLessons('cardiovascular cath/PCI coding, GI endoscopy, and urology procedural coding'),
        },
        {
            id: 'cpc-cpt-radpath',
            title: 'CPT Radiology, Pathology, and Medicine Sections',
            author: 'Synthesis Learning',
            description: 'Imaging guidance and supervision-vs-interpretation, lab panels, the medicine section\'s odd corners (vaccines, infusions, dialysis).',
            lessons: 1, duration: 5, progress: 0, category: 'cpc-prep',
            lessonList: comingSoonLessons('radiology supervision-and-interpretation, pathology panels, and medicine-section infusion/vaccine coding'),
        },
        {
            id: 'cpc-em',
            title: 'Evaluation and Management (E/M) Services',
            author: 'Synthesis Learning',
            description: 'The 2021/2023 E/M guideline overhaul — MDM levels, time-based coding, new vs. established patients, hospital and SNF E/M.',
            lessons: 1, duration: 5, progress: 0, category: 'cpc-prep',
            lessonList: comingSoonLessons('the 2021/2023 E/M guidelines, MDM-based and time-based level selection, and the office/hospital/SNF E/M families'),
        },
        {
            id: 'cpc-modifiers',
            title: 'Modifiers: -25, -59, -76, -77, -91 and the Rest',
            author: 'Synthesis Learning',
            description: 'The 2-character codes that change reimbursement, unbundle correctly, and protect you from RAC audits.',
            lessons: 1, duration: 5, progress: 0, category: 'cpc-prep',
            lessonList: comingSoonLessons('how modifiers -25, -59 (and the X{EPSU} subset), -76, -77, -91, -50, -51, and -LT/-RT change claim adjudication'),
        },
        {
            id: 'cpc-hcpcs',
            title: 'HCPCS Level II: J-Codes, Supplies, and Outpatient Drugs',
            author: 'Synthesis Learning',
            description: 'When CPT runs out, HCPCS picks up — drug J-codes, DME, ambulance, and the modifier overlap.',
            lessons: 1, duration: 5, progress: 0, category: 'cpc-prep',
            lessonList: comingSoonLessons('HCPCS Level II structure, J-codes for injectable drugs, DME and ambulance coding'),
        },
        {
            id: 'cpc-compliance',
            title: 'Compliance, Audits, and the OIG Work Plan',
            author: 'Synthesis Learning',
            description: 'The False Claims Act, the OIG annual work plan, RAC/MAC/ZPIC audits, and the documentation that survives them.',
            lessons: 1, duration: 5, progress: 0, category: 'cpc-prep',
            lessonList: comingSoonLessons('the False Claims Act, the OIG annual work plan, and how to prepare documentation for RAC/MAC/ZPIC audits'),
        },
        {
            id: 'cpc-mock',
            title: 'CPC Mock Exam Bank & Test-Taking Strategy',
            author: 'Synthesis Learning',
            description: '5+ full-length 100-question mock exams in CPC format, plus the timing, elimination, and code-book strategies that buy you 30 extra minutes.',
            lessons: 1, duration: 5, progress: 0, category: 'cpc-prep',
            lessonList: comingSoonLessons('5+ full-length 100-question CPC-format mock exams plus timing, elimination, and code-book strategies'),
        },
    ];

    window.CPC_PREP_CATEGORY = {
        id: 'cpc-prep',
        name: 'CPC Cert Prep',
        icon: '📋',
        color: '#0ea5e9',
        description: 'A 10-book track for the AAPC Certified Professional Coder exam — the most-sought medical-coding credential in the US. Starts with the anatomy/terminology base every CPC question assumes, then walks the code books (ICD-10-CM, CPT, HCPCS) section by section, finishes with modifiers, compliance, and full-length mock exams.',
        examCenterTrack: false, // toggle to true once enough content lands to gate it
        books: BOOKS,
    };
})();
