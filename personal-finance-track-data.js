// External category module — Personal Finance Track.
// Expands the single Personal Finance 101 book into a full life-skills course.

(function () {
    const COMING_SOON_SVG = `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
        <rect width="1100" height="1100" fill="#1a1a2e"/>
        <rect x="80" y="180" width="940" height="740" rx="24" fill="rgba(245,158,11,0.08)" stroke="#f59e0b" stroke-width="3"/>
        <text x="550" y="320" text-anchor="middle" font-size="78" fill="#ffd700" font-weight="bold">🚧 Coming Soon</text>
        <text x="550" y="410" text-anchor="middle" font-size="32" fill="#888">Personal Finance Track</text>
        <text x="550" y="540" text-anchor="middle" font-size="26" fill="#ffffff">This book is being authored.</text>
        <text x="550" y="600" text-anchor="middle" font-size="26" fill="#ffffff">Start with Book 1 — Budgeting that</text>
        <text x="550" y="650" text-anchor="middle" font-size="26" fill="#ffffff">Actually Works — to anchor the rest.</text>
        <text x="550" y="800" text-anchor="middle" font-size="22" fill="#f59e0b">A 7-book sequence: budget → debt</text>
        <text x="550" y="840" text-anchor="middle" font-size="22" fill="#f59e0b">→ taxes → retirement → invest → home.</text>
    </svg>`;

    function comingSoonLessons(scope) {
        return [{
            id: 'coming-soon', title: 'Book Outline & What You\'ll Learn', duration: '5',
            cards: [{
                type: 'intro',
                title: 'Coming Soon — Book in Development',
                content: `This book covers **${scope}**.\n\nThe full lesson content is being authored. In the meantime, start with **Book 1 — Budgeting that Actually Works** to set up the cash-flow foundation the later books all assume.\n\nAlready live: the original **Personal Finance 101** book in the Civics & Economics category — it covers the highlights of several of these tracks at a shallower depth.`,
                visual: { type: 'diagram', svg: COMING_SOON_SVG, caption: 'Coming soon' }
            }]
        }];
    }

    const BUDGET_PLACEHOLDER_LESSONS = comingSoonLessons('budgeting that survives week 3 — the psychology of restriction, the 50/30/20 rule, and zero-based budgeting');

    const BOOKS = [
        {
            id: 'pf-budgeting',
            title: 'Budgeting that Actually Works: From Spreadsheets to Habits',
            author: 'Synthesis Learning',
            description: 'Why most budgets collapse in week 3, the 50/30/20 rule and when to break it, and zero-based budgeting as a system that survives real life.',
            lessons: 3, duration: 45, progress: 0, category: 'personal-finance-track',
            lessonList: BUDGET_PLACEHOLDER_LESSONS,
        },
        {
            id: 'pf-debt',
            title: 'Debt Payoff: Snowball, Avalanche, and the Math',
            author: 'Synthesis Learning',
            description: 'Snowball vs. avalanche, the psychological math vs. the actual math, balance-transfer cards, refinancing, and the order of operations.',
            lessons: 1, duration: 5, progress: 0, category: 'personal-finance-track',
            lessonList: comingSoonLessons('snowball vs. avalanche, balance-transfer cards, refinancing, and the right order of operations for paying off debt'),
        },
        {
            id: 'pf-emergency-fund',
            title: 'The Emergency Fund: Sizing, Where to Hold It, When to Use It',
            author: 'Synthesis Learning',
            description: 'How much you actually need (1/3/6/12 months by life stage), high-yield savings vs. money market vs. T-bills, and what counts as a real emergency.',
            lessons: 1, duration: 5, progress: 0, category: 'personal-finance-track',
            lessonList: comingSoonLessons('how to size your emergency fund by life stage, where to hold it (HYSA vs MMA vs T-bills), and what counts as a real emergency'),
        },
        {
            id: 'pf-taxes',
            title: 'Tax Basics: Filing, Brackets, and Common Deductions',
            author: 'Synthesis Learning',
            description: 'How marginal brackets actually work, the standard deduction vs. itemizing, the credits people miss, and when to hire a CPA.',
            lessons: 1, duration: 5, progress: 0, category: 'personal-finance-track',
            lessonList: comingSoonLessons('marginal vs effective tax rates, the standard deduction vs itemizing, commonly-missed credits, and when to hire a CPA'),
        },
        {
            id: 'pf-retirement',
            title: 'Retirement Accounts: 401(k), IRA, Roth, HSA',
            author: 'Synthesis Learning',
            description: 'The tax treatment of each account, contribution limits, the employer match, the Roth conversion ladder, and the HSA as the best account no one talks about.',
            lessons: 1, duration: 5, progress: 0, category: 'personal-finance-track',
            lessonList: comingSoonLessons('401(k) / IRA / Roth IRA / HSA tax treatment, contribution limits, employer match math, and the Roth conversion ladder'),
        },
        {
            id: 'pf-investing',
            title: 'Investing for Adults: Index Funds, Allocation, Time Horizon',
            author: 'Synthesis Learning',
            description: 'Why index funds beat 90% of active funds, how to think about allocation (stocks/bonds/cash) by horizon, the 4% rule, and target-date funds.',
            lessons: 1, duration: 5, progress: 0, category: 'personal-finance-track',
            lessonList: comingSoonLessons('why index funds beat most active funds, allocation by time horizon, the 4% rule, and target-date funds'),
        },
        {
            id: 'pf-real-estate',
            title: 'Real Estate Basics: Renting vs. Buying, Mortgages, Equity',
            author: 'Synthesis Learning',
            description: 'The rent vs. buy math that\'s not just "rent is throwing money away," mortgage types, PMI, closing costs, and the equity build that\'s hidden in the amortization table.',
            lessons: 1, duration: 5, progress: 0, category: 'personal-finance-track',
            lessonList: comingSoonLessons('the rent vs buy math, mortgage types, PMI and closing costs, and the equity build hidden in the amortization table'),
        },
    ];

    window.PERSONAL_FINANCE_TRACK_CATEGORY = {
        id: 'personal-finance-track',
        name: 'Personal Finance Track',
        icon: '💰',
        color: '#f59e0b',
        description: 'A 7-book life-skills sequence: budget → debt payoff → emergency fund → taxes → retirement accounts → investing → real estate. Goes deeper than the single Personal Finance 101 book in Civics & Economics and is designed to be worked top to bottom over a year.',
        examCenterTrack: false,
        books: BOOKS,
    };
})();
