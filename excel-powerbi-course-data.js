// External category module — Excel + Power BI Professional Track.
// Expands the single Data Analytics book into a full 9-book exam-prep
// curriculum culminating in a Power BI capstone.

(function () {
    const COMING_SOON_SVG = `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
        <rect width="1100" height="1100" fill="#1a1a2e"/>
        <rect x="80" y="180" width="940" height="740" rx="24" fill="rgba(16,185,129,0.08)" stroke="#10b981" stroke-width="3"/>
        <text x="550" y="320" text-anchor="middle" font-size="78" fill="#ffd700" font-weight="bold">🚧 Coming Soon</text>
        <text x="550" y="410" text-anchor="middle" font-size="32" fill="#888">Excel + Power BI Track</text>
        <text x="550" y="540" text-anchor="middle" font-size="26" fill="#ffffff">This book is being authored.</text>
        <text x="550" y="600" text-anchor="middle" font-size="26" fill="#ffffff">Start with Book 1 — Excel Foundations —</text>
        <text x="550" y="650" text-anchor="middle" font-size="26" fill="#ffffff">to build the mental model the rest leans on.</text>
        <text x="550" y="800" text-anchor="middle" font-size="22" fill="#10b981">9-book sequence ends with a capstone:</text>
        <text x="550" y="840" text-anchor="middle" font-size="22" fill="#10b981">a real Power BI dashboard from raw data.</text>
    </svg>`;

    function comingSoonLessons(scope) {
        return [{
            id: 'coming-soon', title: 'Book Outline & What You\'ll Learn', duration: '5',
            cards: [{
                type: 'intro',
                title: 'Coming Soon — Book in Development',
                content: `This book covers **${scope}**.\n\nThe full lesson content is being authored. In the meantime, start with **Book 1 — Excel Foundations** so the mental model the rest of the track leans on is solid.\n\nAlready live: the Excel/Microsoft 365 books in the **Data Analytics & Microsoft 365** category.`,
                visual: { type: 'diagram', svg: COMING_SOON_SVG, caption: 'Coming soon' }
            }]
        }];
    }

    const FOUND_PLACEHOLDER_LESSONS = comingSoonLessons('how Excel actually thinks: cells, the calculation engine, relative vs. absolute references, and named ranges');

    const BOOKS = [
        {
            id: 'excel-foundations',
            title: 'Excel Foundations: Cells, References, and the Mental Model',
            author: 'Synthesis Learning',
            description: 'How Excel actually thinks — the calculation engine, the cell/sheet/workbook hierarchy, relative vs. absolute references, and named ranges. The base mental model the rest of the track leans on.',
            lessons: 3, duration: 45, progress: 0, category: 'excel-powerbi',
            lessonList: FOUND_PLACEHOLDER_LESSONS,
        },
        {
            id: 'excel-formulas',
            title: 'Excel Formulas: Logic, Lookup, and Text',
            author: 'Synthesis Learning',
            description: 'IF / IFS / SWITCH, XLOOKUP and the legacy VLOOKUP, INDEX/MATCH, text functions, error handling — the formula toolkit every analyst uses daily.',
            lessons: 1, duration: 5, progress: 0, category: 'excel-powerbi',
            lessonList: comingSoonLessons('IF/IFS/SWITCH logic, XLOOKUP vs VLOOKUP vs INDEX/MATCH, text functions, and error handling with IFERROR'),
        },
        {
            id: 'excel-pivot',
            title: 'Pivot Tables and the Data Model',
            author: 'Synthesis Learning',
            description: 'From flat tables to pivot summaries, slicers, timelines, calculated fields, and the leap into the in-memory Data Model with Power Pivot.',
            lessons: 1, duration: 5, progress: 0, category: 'excel-powerbi',
            lessonList: comingSoonLessons('pivot table fundamentals, slicers and timelines, calculated fields, and the Data Model / Power Pivot bridge'),
        },
        {
            id: 'excel-power-query',
            title: 'Power Query: Connect, Clean, Combine',
            author: 'Synthesis Learning',
            description: 'The ETL engine inside Excel and Power BI — connecting to sources, applied steps, merging queries, and the M language at a usable level.',
            lessons: 1, duration: 5, progress: 0, category: 'excel-powerbi',
            lessonList: comingSoonLessons('Power Query / M — source connection, applied steps, merge/append, and the most-used M language patterns'),
        },
        {
            id: 'excel-dax',
            title: 'DAX Basics for Power Pivot and Power BI',
            author: 'Synthesis Learning',
            description: 'Measures vs. calculated columns, CALCULATE as the heart of DAX, time-intelligence, filter context — the parts you actually need to ship a dashboard.',
            lessons: 1, duration: 5, progress: 0, category: 'excel-powerbi',
            lessonList: comingSoonLessons('measures vs calculated columns, CALCULATE, time-intelligence functions, and filter context in DAX'),
        },
        {
            id: 'excel-pbi-desktop',
            title: 'Power BI Desktop: Visuals and Relationships',
            author: 'Synthesis Learning',
            description: 'Star-schema modeling, the visualization grammar, drill-through, bookmarks, and getting your first useful report on screen.',
            lessons: 1, duration: 5, progress: 0, category: 'excel-powerbi',
            lessonList: comingSoonLessons('star-schema modeling, Power BI Desktop visualization grammar, drill-through, and bookmarks'),
        },
        {
            id: 'excel-pbi-service',
            title: 'Power BI Service: Workspaces, Datasets, Apps',
            author: 'Synthesis Learning',
            description: 'Publishing, refresh schedules, row-level security, dataflows, the workspace permissions model, and packaging reports as apps.',
            lessons: 1, duration: 5, progress: 0, category: 'excel-powerbi',
            lessonList: comingSoonLessons('publishing to the Service, refresh schedules, row-level security, dataflows, and workspaces as apps'),
        },
        {
            id: 'excel-dashboards',
            title: 'Dashboards and Reports: Design for Decisions',
            author: 'Synthesis Learning',
            description: 'Why most dashboards fail — chart-type selection, color discipline, hierarchy, the executive summary that gets read in 30 seconds.',
            lessons: 1, duration: 5, progress: 0, category: 'excel-powerbi',
            lessonList: comingSoonLessons('chart-type selection, color and typography discipline, visual hierarchy, and executive-summary design'),
        },
        {
            id: 'excel-capstone',
            title: 'Capstone: A Real Business Dashboard from Raw Data',
            author: 'Synthesis Learning',
            description: 'A full end-to-end build — raw CSVs in, Power Query cleaning, DAX measures, a 3-page Power BI report, and the brief you would actually email your boss.',
            lessons: 1, duration: 5, progress: 0, category: 'excel-powerbi',
            lessonList: comingSoonLessons('an end-to-end capstone — raw CSVs through Power Query, into a star schema, with DAX measures and a 3-page Power BI report'),
        },
    ];

    window.EXCEL_POWERBI_CATEGORY = {
        id: 'excel-powerbi',
        name: 'Excel + Power BI Professional',
        icon: '📊',
        color: '#10b981',
        description: 'A 9-book sequence that takes you from "I can use SUM" to "I shipped a Power BI dashboard the executive team uses." Maps cleanly to Microsoft\'s MO-200/MO-201 (Excel Associate/Expert) and the PL-300 (Power BI Data Analyst) certifications.',
        examCenterTrack: false,
        books: BOOKS,
    };
})();
