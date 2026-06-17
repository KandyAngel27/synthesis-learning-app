// External category module — CCA (Certified Coding Associate) Prep Track.
// AHIMA's entry-level coding credential, organized by exam domain.

(function () {
    const COMING_SOON_SVG = `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
        <rect width="1100" height="1100" fill="#1a1a2e"/>
        <rect x="80" y="180" width="940" height="740" rx="24" fill="rgba(139,92,246,0.08)" stroke="#8b5cf6" stroke-width="3"/>
        <text x="550" y="320" text-anchor="middle" font-size="78" fill="#ffd700" font-weight="bold">🚧 Coming Soon</text>
        <text x="550" y="410" text-anchor="middle" font-size="32" fill="#888">CCA Prep Track</text>
        <text x="550" y="540" text-anchor="middle" font-size="26" fill="#ffffff">This domain is being authored.</text>
        <text x="550" y="600" text-anchor="middle" font-size="26" fill="#ffffff">Start with Domain 1 — Health Information</text>
        <text x="550" y="650" text-anchor="middle" font-size="26" fill="#ffffff">Concepts — while the rest is built.</text>
        <text x="550" y="800" text-anchor="middle" font-size="22" fill="#8b5cf6">Each domain mirrors the AHIMA blueprint</text>
        <text x="550" y="840" text-anchor="middle" font-size="22" fill="#8b5cf6">for the actual CCA exam.</text>
    </svg>`;

    function comingSoonLessons(scope) {
        return [{
            id: 'coming-soon', title: 'Domain Outline & What You\'ll Learn', duration: '5',
            cards: [{
                type: 'intro',
                title: 'Coming Soon — Domain in Development',
                content: `This domain covers **${scope}**.\n\nThe full lesson content is being authored. In the meantime, start with **Domain 1 — Health Information Concepts** to anchor the rest of the track.\n\nThe Exam Center already tracks your spaced-repetition queue and study streak across whichever domains are live.`,
                visual: { type: 'diagram', svg: COMING_SOON_SVG, caption: 'Coming soon' }
            }]
        }];
    }

    const DOMAIN1_PLACEHOLDER_LESSONS = comingSoonLessons('the health record as a legal/clinical/financial document, key health-data sets (UHDDS, UACDS, MDS, OASIS), and HIPAA fundamentals');

    const BOOKS = [
        {
            id: 'cca-domain-1', title: 'CCA Domain 1: Health Information Concepts',
            author: 'Synthesis Learning',
            description: 'The legal/clinical/financial roles of the health record, the standard data sets that drive coding, and HIPAA\'s rules around protected health information.',
            lessons: 3, duration: 45, progress: 0, category: 'cca-prep',
            lessonList: DOMAIN1_PLACEHOLDER_LESSONS,
        },
        {
            id: 'cca-domain-2', title: 'CCA Domain 2: ICD-10-CM Diagnosis Coding',
            author: 'Synthesis Learning',
            description: 'The Official Guidelines, alphabetic/tabular workflow, principal vs. additional diagnoses, and the conditions that always trip up new coders.',
            lessons: 1, duration: 5, progress: 0, category: 'cca-prep',
            lessonList: comingSoonLessons('ICD-10-CM Official Guidelines, alphabetic/tabular workflow, and principal vs. additional diagnoses'),
        },
        {
            id: 'cca-domain-3', title: 'CCA Domain 3: ICD-10-PCS Procedure Coding',
            author: 'Synthesis Learning',
            description: 'The 7-character structure, the medical/surgical section\'s 31 root operations, and how to build a code that didn\'t exist in ICD-9.',
            lessons: 1, duration: 5, progress: 0, category: 'cca-prep',
            lessonList: comingSoonLessons('the ICD-10-PCS 7-character code structure, the 31 medical/surgical root operations, and the body-system tables'),
        },
        {
            id: 'cca-domain-4', title: 'CCA Domain 4: CPT Outpatient Coding',
            author: 'Synthesis Learning',
            description: 'CPT structure, E/M services, surgery section bundling, modifiers — focused on the outpatient encounters CCA emphasizes.',
            lessons: 1, duration: 5, progress: 0, category: 'cca-prep',
            lessonList: comingSoonLessons('CPT structure, E/M services, the surgery section\'s bundling rules, and outpatient-focused modifiers'),
        },
        {
            id: 'cca-domain-5', title: 'CCA Domain 5: Compliance and Regulatory Standards',
            author: 'Synthesis Learning',
            description: 'NCCI edits, CMS compliance, the Office of Inspector General work plan, and what triggers an audit.',
            lessons: 1, duration: 5, progress: 0, category: 'cca-prep',
            lessonList: comingSoonLessons('NCCI edits, CMS compliance, the OIG work plan, and audit triggers in claim data'),
        },
        {
            id: 'cca-domain-6', title: 'CCA Domain 6: Information Technology',
            author: 'Synthesis Learning',
            description: 'EHRs, computer-assisted coding (CAC), the master patient index, data security, and the IT infrastructure that holds HIM together.',
            lessons: 1, duration: 5, progress: 0, category: 'cca-prep',
            lessonList: comingSoonLessons('EHR functionality, computer-assisted coding (CAC), the master patient index, and HIM data security'),
        },
        {
            id: 'cca-domain-7', title: 'CCA Domain 7: Reimbursement Methodologies',
            author: 'Synthesis Learning',
            description: 'MS-DRGs, APCs, RBRVS, prospective payment systems, and where the dollars actually come from.',
            lessons: 1, duration: 5, progress: 0, category: 'cca-prep',
            lessonList: comingSoonLessons('MS-DRGs, APCs, RBRVS, and the prospective payment systems that drive reimbursement'),
        },
        {
            id: 'cca-mock', title: 'CCA Mock Exam Bank & Test-Day Strategy',
            author: 'Synthesis Learning',
            description: '105-question mock exams in CCA format (90 min, 60% pass), domain-weighted, with item analysis after each.',
            lessons: 1, duration: 5, progress: 0, category: 'cca-prep',
            lessonList: comingSoonLessons('105-question domain-weighted CCA-format mock exams with item analysis and test-day strategy'),
        },
    ];

    window.CCA_PREP_CATEGORY = {
        id: 'cca-prep',
        name: 'CCA Cert Prep',
        icon: '🥇',
        color: '#8b5cf6',
        description: 'An 8-book track aligned to AHIMA\'s Certified Coding Associate exam blueprint. CCA is the recommended first coding credential after the MBC track — same exam-gated, spaced-repetition study system, organized by the 7 official CCA domains.',
        examCenterTrack: false,
        books: BOOKS,
    };
})();
