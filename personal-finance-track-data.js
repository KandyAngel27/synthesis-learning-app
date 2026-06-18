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

    const BUDGET_PLACEHOLDER_LESSONS = [
{
    id: "budgeting-track-lesson-1",
    title: "Why Most Budgets Fail in Week Three",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "The Week-Three Cliff",
        content: `Studies of personal finance app usage show a consistent pattern: roughly **80% of new budgeters abandon their plan within three weeks**. The reason is almost never math — it's psychology and design.

A budget that feels like a **diet of restriction** triggers the same rebound behavior as a crash diet. The first slice of pizza outside the plan becomes permission to abandon the whole thing.

The second killer is **tracking friction**. If logging a coffee takes more than 10 seconds, your brain stops doing it. Missed entries snowball into "I have no idea where I am" — and you quit.

This lesson is about designing a budget you'll **still be using in month six**.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="80" text-anchor="middle" fill="#ffd700" font-size="42" font-weight="bold">The Week-Three Cliff</text>
            <text x="550" y="125" text-anchor="middle" fill="#888" font-size="22">Budget adherence by week (new budgeters)</text>
            <line x1="120" y1="900" x2="1000" y2="900" stroke="#ffffff" stroke-width="3"/>
            <line x1="120" y1="200" x2="120" y2="900" stroke="#ffffff" stroke-width="3"/>
            <text x="60" y="210" fill="#888" font-size="18">100%</text>
            <text x="70" y="555" fill="#888" font-size="18">50%</text>
            <text x="80" y="905" fill="#888" font-size="18">0%</text>
            <rect x="180" y="220" width="100" height="680" fill="#10b981"/>
            <text x="230" y="940" text-anchor="middle" fill="#ffffff" font-size="20">Wk 1</text>
            <text x="230" y="205" text-anchor="middle" fill="#ffffff" font-size="18">95%</text>
            <rect x="320" y="290" width="100" height="610" fill="#10b981"/>
            <text x="370" y="940" text-anchor="middle" fill="#ffffff" font-size="20">Wk 2</text>
            <text x="370" y="275" text-anchor="middle" fill="#ffffff" font-size="18">85%</text>
            <rect x="460" y="500" width="100" height="400" fill="#f59e0b"/>
            <text x="510" y="940" text-anchor="middle" fill="#ffffff" font-size="20">Wk 3</text>
            <text x="510" y="485" text-anchor="middle" fill="#ffffff" font-size="18">55%</text>
            <rect x="600" y="680" width="100" height="220" fill="#ef4444"/>
            <text x="650" y="940" text-anchor="middle" fill="#ffffff" font-size="20">Wk 4</text>
            <text x="650" y="665" text-anchor="middle" fill="#ffffff" font-size="18">30%</text>
            <rect x="740" y="780" width="100" height="120" fill="#ef4444"/>
            <text x="790" y="940" text-anchor="middle" fill="#ffffff" font-size="20">Wk 6</text>
            <text x="790" y="765" text-anchor="middle" fill="#ffffff" font-size="18">15%</text>
            <rect x="880" y="830" width="100" height="70" fill="#ef4444"/>
            <text x="930" y="940" text-anchor="middle" fill="#ffffff" font-size="20">Wk 8</text>
            <text x="930" y="815" text-anchor="middle" fill="#ffffff" font-size="18">8%</text>
            <text x="550" y="1020" text-anchor="middle" fill="#ffd700" font-size="22">The drop happens at week 3 — not week 1</text>
            <text x="550" y="1060" text-anchor="middle" fill="#888" font-size="18">Design for week 12, not week 1</text>
          </svg>`,
          caption: "Budget adherence collapses around week three, when novelty fades and friction compounds."
        }
      },
      {
        type: "concept",
        title: "Three Failure Modes (and Their Design Fixes)",
        content: `**Failure 1: Restriction Psychology.** A budget framed as "no more eating out" triggers scarcity thinking. The fix is **category allowances**, not prohibitions. "$120/month for restaurants" feels like a permission slip; "no restaurants" feels like punishment.

**Failure 2: Tracking Friction.** Manual entry of every purchase is unsustainable. The fix is **automation by default** — link accounts to a tool (Monarch, YNAB, Copilot) that imports transactions, then spend 10 minutes a week categorizing.

**Failure 3: The Perfectionism Trap.** One overspend and many people declare the month "ruined." The fix is the **monthly reset**: every budget gets a clean slate on the 1st. Last month's data is feedback, not failure.

The common thread: **systems beat willpower**. A budget that survives needs to require almost no decisions on a Tuesday afternoon.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="80" text-anchor="middle" fill="#ffd700" font-size="40" font-weight="bold">3 Failure Modes, 3 Design Fixes</text>
            <text x="550" y="125" text-anchor="middle" fill="#888" font-size="22">Match the symptom to the structural fix</text>
            <rect x="80" y="180" width="440" height="240" fill="#ef4444" rx="12"/>
            <text x="300" y="225" text-anchor="middle" fill="#ffffff" font-size="24" font-weight="bold">1. Restriction</text>
            <text x="300" y="265" text-anchor="middle" fill="#ffffff" font-size="18">"No more eating out"</text>
            <text x="300" y="300" text-anchor="middle" fill="#ffffff" font-size="18">Triggers scarcity rebellion</text>
            <text x="300" y="340" text-anchor="middle" fill="#ffffff" font-size="18">First slip = abandonment</text>
            <text x="300" y="385" text-anchor="middle" fill="#ffd700" font-size="18">Diet-style willpower</text>
            <rect x="580" y="180" width="440" height="240" fill="#10b981" rx="12"/>
            <text x="800" y="225" text-anchor="middle" fill="#ffffff" font-size="24" font-weight="bold">Fix: Allowances</text>
            <text x="800" y="265" text-anchor="middle" fill="#ffffff" font-size="18">"$120/mo for restaurants"</text>
            <text x="800" y="300" text-anchor="middle" fill="#ffffff" font-size="18">Permission, not prohibition</text>
            <text x="800" y="340" text-anchor="middle" fill="#ffffff" font-size="18">Frame as a budget, not a ban</text>
            <rect x="80" y="450" width="440" height="240" fill="#ef4444" rx="12"/>
            <text x="300" y="495" text-anchor="middle" fill="#ffffff" font-size="24" font-weight="bold">2. Friction</text>
            <text x="300" y="535" text-anchor="middle" fill="#ffffff" font-size="18">Manual entry of every $</text>
            <text x="300" y="570" text-anchor="middle" fill="#ffffff" font-size="18">Missed days snowball</text>
            <text x="300" y="610" text-anchor="middle" fill="#ffffff" font-size="18">"I have no idea where I am"</text>
            <rect x="580" y="450" width="440" height="240" fill="#10b981" rx="12"/>
            <text x="800" y="495" text-anchor="middle" fill="#ffffff" font-size="24" font-weight="bold">Fix: Automate</text>
            <text x="800" y="535" text-anchor="middle" fill="#ffffff" font-size="18">Linked accounts auto-import</text>
            <text x="800" y="570" text-anchor="middle" fill="#ffffff" font-size="18">10 min/week categorizing</text>
            <text x="800" y="610" text-anchor="middle" fill="#ffffff" font-size="18">YNAB, Monarch, Copilot</text>
            <rect x="80" y="720" width="440" height="240" fill="#ef4444" rx="12"/>
            <text x="300" y="765" text-anchor="middle" fill="#ffffff" font-size="24" font-weight="bold">3. Perfectionism</text>
            <text x="300" y="805" text-anchor="middle" fill="#ffffff" font-size="18">One overspend = quit</text>
            <text x="300" y="840" text-anchor="middle" fill="#ffffff" font-size="18">"The month is ruined"</text>
            <text x="300" y="880" text-anchor="middle" fill="#ffffff" font-size="18">All-or-nothing thinking</text>
            <rect x="580" y="720" width="440" height="240" fill="#10b981" rx="12"/>
            <text x="800" y="765" text-anchor="middle" fill="#ffffff" font-size="24" font-weight="bold">Fix: Monthly Reset</text>
            <text x="800" y="805" text-anchor="middle" fill="#ffffff" font-size="18">Clean slate on the 1st</text>
            <text x="800" y="840" text-anchor="middle" fill="#ffffff" font-size="18">Last month = data, not shame</text>
            <text x="800" y="880" text-anchor="middle" fill="#ffffff" font-size="18">Adjust, don't abandon</text>
            <text x="550" y="1030" text-anchor="middle" fill="#ffd700" font-size="22">Systems beat willpower</text>
          </svg>`,
          caption: "Restriction, friction, and perfectionism each have a structural fix that removes willpower from the equation."
        }
      },
      {
        type: "example",
        title: "Maya's Restart: From Spreadsheet to Sustainable",
        content: `**Maya, 29, makes $5,200/month after tax.** Her first budget (January) was a color-coded spreadsheet with **22 categories**, manual entry, and zero buffer for restaurants. She quit January 19th.

**February attempt** used the design fixes. She collapsed 22 categories into **8** (Rent, Utilities, Groceries, Transport, Restaurants, Subscriptions, Fun, Savings). She linked her checking account to a budgeting app — **transactions imported automatically**.

She gave restaurants a **$140 allowance** instead of zeroing it out. When she overspent by $35 in week two, she pulled it from "Fun" rather than calling the month a failure.

**Result by month 4:** Maya had saved **$1,800**, was still using the app, and had genuinely stopped feeling guilty about coffee. The math wasn't different from January — the **design** was.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="40" font-weight="bold">Maya's Two Budgets</text>
            <text x="550" y="115" text-anchor="middle" fill="#888" font-size="22">Same income. Different design.</text>
            <rect x="60" y="170" width="480" height="780" fill="#1a1a2e" stroke="#ef4444" stroke-width="3" rx="10"/>
            <text x="300" y="215" text-anchor="middle" fill="#ef4444" font-size="26" font-weight="bold">January (Failed)</text>
            <line x1="80" y1="240" x2="520" y2="240" stroke="#888" stroke-width="1"/>
            <text x="90" y="285" fill="#ffffff" font-size="20">Categories:</text>
            <text x="490" y="285" text-anchor="end" fill="#ef4444" font-size="22" font-weight="bold">22</text>
            <text x="90" y="335" fill="#ffffff" font-size="20">Tracking:</text>
            <text x="490" y="335" text-anchor="end" fill="#ef4444" font-size="18">Manual entry</text>
            <text x="90" y="385" fill="#ffffff" font-size="20">Restaurants:</text>
            <text x="490" y="385" text-anchor="end" fill="#ef4444" font-size="18">$0 (banned)</text>
            <text x="90" y="435" fill="#ffffff" font-size="20">Overspend rule:</text>
            <text x="490" y="435" text-anchor="end" fill="#ef4444" font-size="18">"Month ruined"</text>
            <text x="90" y="485" fill="#ffffff" font-size="20">Buffer:</text>
            <text x="490" y="485" text-anchor="end" fill="#ef4444" font-size="18">None</text>
            <text x="90" y="535" fill="#ffffff" font-size="20">Time/week:</text>
            <text x="490" y="535" text-anchor="end" fill="#ef4444" font-size="18">~90 min</text>
            <line x1="80" y1="580" x2="520" y2="580" stroke="#888" stroke-width="1"/>
            <text x="90" y="630" fill="#ffd700" font-size="22" font-weight="bold">Outcome:</text>
            <text x="300" y="700" text-anchor="middle" fill="#ef4444" font-size="34" font-weight="bold">Quit Jan 19</text>
            <text x="300" y="750" text-anchor="middle" fill="#ffffff" font-size="22">Saved: $0</text>
            <text x="300" y="800" text-anchor="middle" fill="#ffffff" font-size="20">Felt: guilty, stressed</text>
            <rect x="560" y="170" width="480" height="780" fill="#1a1a2e" stroke="#10b981" stroke-width="3" rx="10"/>
            <text x="800" y="215" text-anchor="middle" fill="#10b981" font-size="26" font-weight="bold">February (Worked)</text>
            <line x1="580" y1="240" x2="1020" y2="240" stroke="#888" stroke-width="1"/>
            <text x="590" y="285" fill="#ffffff" font-size="20">Categories:</text>
            <text x="990" y="285" text-anchor="end" fill="#10b981" font-size="22" font-weight="bold">8</text>
            <text x="590" y="335" fill="#ffffff" font-size="20">Tracking:</text>
            <text x="990" y="335" text-anchor="end" fill="#10b981" font-size="18">Auto-import</text>
            <text x="590" y="385" fill="#ffffff" font-size="20">Restaurants:</text>
            <text x="990" y="385" text-anchor="end" fill="#10b981" font-size="18">$140 allowance</text>
            <text x="590" y="435" fill="#ffffff" font-size="20">Overspend rule:</text>
            <text x="990" y="435" text-anchor="end" fill="#10b981" font-size="18">Pull from "Fun"</text>
            <text x="590" y="485" fill="#ffffff" font-size="20">Buffer:</text>
            <text x="990" y="485" text-anchor="end" fill="#10b981" font-size="18">$80 flex</text>
            <text x="590" y="535" fill="#ffffff" font-size="20">Time/week:</text>
            <text x="990" y="535" text-anchor="end" fill="#10b981" font-size="18">~10 min</text>
            <line x1="580" y1="580" x2="1020" y2="580" stroke="#888" stroke-width="1"/>
            <text x="590" y="630" fill="#ffd700" font-size="22" font-weight="bold">Outcome (mo 4):</text>
            <text x="800" y="700" text-anchor="middle" fill="#10b981" font-size="34" font-weight="bold">Still using it</text>
            <text x="800" y="750" text-anchor="middle" fill="#ffffff" font-size="22">Saved: $1,800</text>
            <text x="800" y="800" text-anchor="middle" fill="#ffffff" font-size="20">Felt: in control</text>
            <text x="550" y="1020" text-anchor="middle" fill="#ffd700" font-size="22">Design changed. Math didn't.</text>
          </svg>`,
          caption: "Identical income, totally different outcome — the second budget was engineered for a tired Tuesday, not a motivated Sunday."
        }
      },
      {
        type: "quiz",
        title: "Diagnose the Failure",
        content: `A friend tells you: "I made a budget on Sunday, was perfect Mon–Wed, but on Thursday I bought a $14 lunch I hadn't planned for. By Saturday I'd ordered DoorDash twice and stopped tracking entirely."

**What's the primary failure mode here?**`,
        question: "Which design flaw most directly caused this collapse?",
        options: [
          { text: "Insufficient income — they simply don't earn enough to budget", correct: false },
          { text: "The perfectionism trap — one unplanned purchase was treated as 'the month is ruined' permission to quit", correct: true },
          { text: "Lack of investment knowledge — they need to learn about index funds first", correct: false },
          { text: "Wrong app choice — they should have used a paid tool instead of free", correct: false }
        ],
        explanation: `This is classic **perfectionism collapse**. The $14 lunch wasn't the problem — the all-or-nothing reaction was. A well-designed budget includes a **flex buffer** for exactly these moments, and frames the monthly reset as inevitable: every overspend gets absorbed, the month continues, and next month starts clean. The fix isn't more willpower; it's removing the binary "on the budget / off the budget" thinking entirely.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="80" text-anchor="middle" fill="#ffd700" font-size="40" font-weight="bold">The Collapse Pattern</text>
            <text x="550" y="125" text-anchor="middle" fill="#888" font-size="22">One slip → total abandonment</text>
            <rect x="100" y="200" width="200" height="120" fill="#10b981" rx="10"/>
            <text x="200" y="245" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">Sun-Wed</text>
            <text x="200" y="285" text-anchor="middle" fill="#ffffff" font-size="20">Perfect</text>
            <text x="200" y="310" text-anchor="middle" fill="#ffffff" font-size="18">On plan</text>
            <text x="320" y="270" fill="#ffd700" font-size="36">→</text>
            <rect x="370" y="200" width="200" height="120" fill="#f59e0b" rx="10"/>
            <text x="470" y="245" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">Thursday</text>
            <text x="470" y="285" text-anchor="middle" fill="#ffffff" font-size="20">$14 lunch</text>
            <text x="470" y="310" text-anchor="middle" fill="#ffffff" font-size="18">unplanned</text>
            <text x="590" y="270" fill="#ffd700" font-size="36">→</text>
            <rect x="640" y="200" width="200" height="120" fill="#ef4444" rx="10"/>
            <text x="740" y="245" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">Sat-Sun</text>
            <text x="740" y="285" text-anchor="middle" fill="#ffffff" font-size="20">DoorDash x2</text>
            <text x="740" y="310" text-anchor="middle" fill="#ffffff" font-size="18">stopped tracking</text>
            <text x="860" y="270" fill="#ffd700" font-size="36">→</text>
            <rect x="900" y="200" width="160" height="120" fill="#1a1a2e" stroke="#ef4444" stroke-width="3" rx="10"/>
            <text x="980" y="260" text-anchor="middle" fill="#ef4444" font-size="22" font-weight="bold">Quit</text>
            <text x="980" y="295" text-anchor="middle" fill="#ffffff" font-size="18">Month over</text>
            <line x1="150" y1="430" x2="950" y2="430" stroke="#888" stroke-width="2"/>
            <text x="550" y="490" text-anchor="middle" fill="#ffd700" font-size="28" font-weight="bold">What broke?</text>
            <text x="550" y="540" text-anchor="middle" fill="#ffffff" font-size="22">Not the $14 lunch.</text>
            <text x="550" y="580" text-anchor="middle" fill="#ffffff" font-size="22">The binary "on/off" framing.</text>
            <rect x="200" y="640" width="700" height="280" fill="#1a1a2e" stroke="#10b981" stroke-width="2" rx="10"/>
            <text x="550" y="690" text-anchor="middle" fill="#10b981" font-size="24" font-weight="bold">The Fix</text>
            <text x="240" y="740" fill="#ffffff" font-size="20">1. Build in a $40-80/mo flex buffer</text>
            <text x="240" y="785" fill="#ffffff" font-size="20">2. Treat overspend as "pull from another category"</text>
            <text x="240" y="830" fill="#ffffff" font-size="20">3. Monthly reset is automatic, not earned</text>
            <text x="240" y="875" fill="#ffffff" font-size="20">4. Imperfect tracking still beats no tracking</text>
            <text x="550" y="1010" text-anchor="middle" fill="#ffd700" font-size="22">Slips are data, not verdicts</text>
          </svg>`,
          caption: "The collapse rarely happens at the slip — it happens at the all-or-nothing reaction to the slip."
        }
      },
      {
        type: "application",
        title: "Your 4-Step Survivable Budget",
        content: `Before next paycheck, do this in **30 minutes total**:

**1. Collapse categories (10 min).** List your spending in **6–8 buckets**, not 20. Suggested: Housing, Utilities, Groceries, Transport, Restaurants/Fun, Subscriptions, Savings, Flex.

**2. Connect an automation tool (10 min).** Pick one: YNAB ($109/yr), Monarch ($100/yr), or Copilot ($95/yr). Link your checking and main credit card. Let it auto-categorize.

**3. Set allowances, not bans (5 min).** Every "tempting" category gets a non-zero number. Restaurants: $X, not $0. Coffee: $X, not "stop buying coffee."

**4. Add a $50-100 flex buffer (5 min).** This is the line you pull from when life happens. It's not failure — it's the **system working as designed**.

Open the app on the 7th of next month for a 10-minute review. That's it.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="80" text-anchor="middle" fill="#ffd700" font-size="42" font-weight="bold">Your 30-Minute Setup</text>
            <text x="550" y="125" text-anchor="middle" fill="#888" font-size="22">Then check in once on the 7th</text>
            <circle cx="180" cy="260" r="55" fill="#6366f1"/>
            <text x="180" y="275" text-anchor="middle" fill="#ffffff" font-size="40" font-weight="bold">1</text>
            <text x="280" y="240" fill="#ffd700" font-size="26" font-weight="bold">Collapse (10 min)</text>
            <text x="280" y="280" fill="#ffffff" font-size="20">22 categories → 6-8 buckets</text>
            <text x="280" y="310" fill="#888" font-size="18">Housing, Utilities, Groceries, Transport, Fun, Subs, Savings, Flex</text>
            <circle cx="180" cy="430" r="55" fill="#10b981"/>
            <text x="180" y="445" text-anchor="middle" fill="#ffffff" font-size="40" font-weight="bold">2</text>
            <text x="280" y="410" fill="#ffd700" font-size="26" font-weight="bold">Automate (10 min)</text>
            <text x="280" y="450" fill="#ffffff" font-size="20">Link accounts to YNAB / Monarch / Copilot</text>
            <text x="280" y="480" fill="#888" font-size="18">Transactions import — you just categorize</text>
            <circle cx="180" cy="600" r="55" fill="#f59e0b"/>
            <text x="180" y="615" text-anchor="middle" fill="#ffffff" font-size="40" font-weight="bold">3</text>
            <text x="280" y="580" fill="#ffd700" font-size="26" font-weight="bold">Allowances (5 min)</text>
            <text x="280" y="620" fill="#ffffff" font-size="20">Every tempting category gets a number</text>
            <text x="280" y="650" fill="#888" font-size="18">Restaurants $140 ≠ "stop eating out"</text>
            <circle cx="180" cy="770" r="55" fill="#ec4899"/>
            <text x="180" y="785" text-anchor="middle" fill="#ffffff" font-size="40" font-weight="bold">4</text>
            <text x="280" y="750" fill="#ffd700" font-size="26" font-weight="bold">Flex buffer (5 min)</text>
            <text x="280" y="790" fill="#ffffff" font-size="20">$50-100 "life happens" line item</text>
            <text x="280" y="820" fill="#888" font-size="18">Pulling from it = the system working</text>
            <rect x="200" y="890" width="700" height="120" fill="#1a1a2e" stroke="#ffd700" stroke-width="3" rx="10"/>
            <text x="550" y="935" text-anchor="middle" fill="#ffd700" font-size="24" font-weight="bold">Check in: 7th of next month</text>
            <text x="550" y="970" text-anchor="middle" fill="#ffffff" font-size="20">10 minutes. Adjust. Reset. Continue.</text>
            <text x="550" y="998" text-anchor="middle" fill="#888" font-size="16">No re-doing the spreadsheet from scratch</text>
          </svg>`,
          caption: "Four small steps. Once you're set up, ten minutes a month maintains the whole system."
        }
      }
    ]
  },
  {
    id: "budgeting-track-lesson-2",
    title: "The 50/30/20 Rule and When to Break It",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "A Rule of Thumb, Not a Law",
        content: `**50/30/20** is the most widely taught budgeting framework: **50% to needs, 30% to wants, 20% to savings and debt payoff**. It comes from a 2005 book by Elizabeth Warren and Amelia Tyagi, and it spread because it's simple enough to do in your head.

For someone making **$60K in Indianapolis**, it's a reasonable starting point. For someone making **$60K in San Francisco**, it's mathematically impossible — rent alone often exceeds 50%.

This lesson covers what each bucket really means, the regional adjustments that make it usable, and the moments when the framework should be **set aside entirely** in favor of something tighter or looser.

The goal isn't memorizing the rule. It's knowing **when it fits you and when it doesn't**.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="80" text-anchor="middle" fill="#ffd700" font-size="42" font-weight="bold">The 50/30/20 Rule</text>
            <text x="550" y="125" text-anchor="middle" fill="#888" font-size="22">A starting point, not a verdict</text>
            <circle cx="550" cy="560" r="280" fill="#1a1a2e" stroke="#888" stroke-width="2"/>
            <path d="M 550 560 L 550 280 A 280 280 0 0 1 550 840 Z" fill="#6366f1"/>
            <path d="M 550 560 L 550 840 A 280 280 0 0 1 304 661 Z" fill="#10b981"/>
            <path d="M 550 560 L 304 661 A 280 280 0 0 1 550 280 Z" fill="#f59e0b"/>
            <text x="700" y="500" fill="#ffffff" font-size="44" font-weight="bold">50%</text>
            <text x="700" y="545" fill="#ffffff" font-size="22">NEEDS</text>
            <text x="700" y="575" fill="#ffffff" font-size="16">Rent, utilities,</text>
            <text x="700" y="595" fill="#ffffff" font-size="16">groceries, insurance</text>
            <text x="430" y="780" fill="#ffffff" font-size="40" font-weight="bold">30%</text>
            <text x="430" y="820" fill="#ffffff" font-size="22">WANTS</text>
            <text x="380" y="700" fill="#ffffff" font-size="36" font-weight="bold">20%</text>
            <text x="370" y="735" fill="#ffffff" font-size="20">SAVINGS</text>
            <text x="550" y="920" text-anchor="middle" fill="#ffd700" font-size="22">Easy math. Often unrealistic.</text>
            <text x="200" y="990" fill="#888" font-size="18">High COL cities:</text>
            <text x="200" y="1020" fill="#ffffff" font-size="18">Needs can hit 60-70%</text>
            <text x="700" y="990" fill="#888" font-size="18">Debt payoff mode:</text>
            <text x="700" y="1020" fill="#ffffff" font-size="18">Savings should hit 30-40%</text>
          </svg>`,
          caption: "The classic split — useful as a default, but rarely the right answer once geography and life stage enter the picture."
        }
      },
      {
        type: "concept",
        title: "What Each Bucket Actually Includes",
        content: `**Needs (50%)** are expenses you'd still have to pay if you lost your job tomorrow: **rent or mortgage, utilities, basic groceries, insurance, minimum debt payments, transportation to work**. Not the new car — the *minimum* car. Not Whole Foods — the *grocery floor*.

**Wants (30%)** are everything that improves life but isn't survival: **restaurants, streaming, hobbies, travel, the nicer apartment, the gym, gifts**. This is where most people are surprised by their real numbers.

**Savings & Debt (20%)** covers anything that improves your future balance sheet: **emergency fund, retirement (401k, IRA), extra debt payments above minimums, brokerage investing**. Note: only debt *above* the minimum counts here — minimums are needs.

The hardest categorization is often **subscriptions and "lifestyle creep"** — a $90/mo gym is a want, even if you call it health. Be honest in this exercise; it's the whole point.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="40" font-weight="bold">What Goes Where</text>
            <text x="550" y="115" text-anchor="middle" fill="#888" font-size="22">Honest categorization beats clever categorization</text>
            <rect x="60" y="160" width="320" height="800" fill="#1a1a2e" stroke="#6366f1" stroke-width="3" rx="10"/>
            <rect x="60" y="160" width="320" height="60" fill="#6366f1" rx="10"/>
            <text x="220" y="200" text-anchor="middle" fill="#ffffff" font-size="26" font-weight="bold">NEEDS 50%</text>
            <text x="80" y="260" fill="#ffd700" font-size="18">Test: would you still pay it</text>
            <text x="80" y="285" fill="#ffd700" font-size="18">if you lost your job?</text>
            <line x1="80" y1="310" x2="360" y2="310" stroke="#888" stroke-width="1"/>
            <text x="80" y="350" fill="#ffffff" font-size="20">• Rent / mortgage</text>
            <text x="80" y="390" fill="#ffffff" font-size="20">• Utilities (gas/elec/water)</text>
            <text x="80" y="430" fill="#ffffff" font-size="20">• Basic groceries</text>
            <text x="80" y="470" fill="#ffffff" font-size="20">• Health insurance</text>
            <text x="80" y="510" fill="#ffffff" font-size="20">• Car insurance</text>
            <text x="80" y="550" fill="#ffffff" font-size="20">• Phone (basic plan)</text>
            <text x="80" y="590" fill="#ffffff" font-size="20">• Min. debt payments</text>
            <text x="80" y="630" fill="#ffffff" font-size="20">• Transit / gas to work</text>
            <text x="80" y="670" fill="#ffffff" font-size="20">• Childcare</text>
            <text x="80" y="710" fill="#ffffff" font-size="20">• Prescriptions</text>
            <line x1="80" y1="750" x2="360" y2="750" stroke="#888" stroke-width="1"/>
            <text x="80" y="790" fill="#888" font-size="16">NOT: organic upgrades,</text>
            <text x="80" y="815" fill="#888" font-size="16">nicer apartment, premium</text>
            <text x="80" y="840" fill="#888" font-size="16">phone plan, second car</text>
            <rect x="395" y="160" width="320" height="800" fill="#1a1a2e" stroke="#10b981" stroke-width="3" rx="10"/>
            <rect x="395" y="160" width="320" height="60" fill="#10b981" rx="10"/>
            <text x="555" y="200" text-anchor="middle" fill="#ffffff" font-size="26" font-weight="bold">WANTS 30%</text>
            <text x="415" y="260" fill="#ffd700" font-size="18">Test: improves life</text>
            <text x="415" y="285" fill="#ffd700" font-size="18">but isn't survival</text>
            <line x1="415" y1="310" x2="695" y2="310" stroke="#888" stroke-width="1"/>
            <text x="415" y="350" fill="#ffffff" font-size="20">• Restaurants / takeout</text>
            <text x="415" y="390" fill="#ffffff" font-size="20">• Streaming services</text>
            <text x="415" y="430" fill="#ffffff" font-size="20">• Coffee shops</text>
            <text x="415" y="470" fill="#ffffff" font-size="20">• Gym / fitness apps</text>
            <text x="415" y="510" fill="#ffffff" font-size="20">• Travel / vacations</text>
            <text x="415" y="550" fill="#ffffff" font-size="20">• Hobbies / books</text>
            <text x="415" y="590" fill="#ffffff" font-size="20">• Clothing (beyond basics)</text>
            <text x="415" y="630" fill="#ffffff" font-size="20">• Gifts</text>
            <text x="415" y="670" fill="#ffffff" font-size="20">• "Nicer" rent upgrade</text>
            <text x="415" y="710" fill="#ffffff" font-size="20">• Premium phone plan</text>
            <line x1="415" y1="750" x2="695" y2="750" stroke="#888" stroke-width="1"/>
            <text x="415" y="790" fill="#888" font-size="16">Hardest call: gym, "health"</text>
            <text x="415" y="815" fill="#888" font-size="16">food, books "for work" —</text>
            <text x="415" y="840" fill="#888" font-size="16">be honest, not clever</text>
            <rect x="730" y="160" width="320" height="800" fill="#1a1a2e" stroke="#f59e0b" stroke-width="3" rx="10"/>
            <rect x="730" y="160" width="320" height="60" fill="#f59e0b" rx="10"/>
            <text x="890" y="200" text-anchor="middle" fill="#ffffff" font-size="26" font-weight="bold">SAVINGS 20%</text>
            <text x="750" y="260" fill="#ffd700" font-size="18">Test: improves future</text>
            <text x="750" y="285" fill="#ffd700" font-size="18">balance sheet</text>
            <line x1="750" y1="310" x2="1030" y2="310" stroke="#888" stroke-width="1"/>
            <text x="750" y="350" fill="#ffffff" font-size="20">• 401(k) contribution</text>
            <text x="750" y="390" fill="#ffffff" font-size="20">• IRA / Roth IRA</text>
            <text x="750" y="430" fill="#ffffff" font-size="20">• HSA contributions</text>
            <text x="750" y="470" fill="#ffffff" font-size="20">• Emergency fund</text>
            <text x="750" y="510" fill="#ffffff" font-size="20">• Brokerage investing</text>
            <text x="750" y="550" fill="#ffffff" font-size="20">• Extra debt payoff</text>
            <text x="750" y="590" fill="#ffffff" font-size="20">  (above minimums)</text>
            <text x="750" y="630" fill="#ffffff" font-size="20">• Sinking funds</text>
            <text x="750" y="670" fill="#ffffff" font-size="20">  (car, home repair)</text>
            <line x1="750" y1="750" x2="1030" y2="750" stroke="#888" stroke-width="1"/>
            <text x="750" y="790" fill="#888" font-size="16">Note: minimum debt =</text>
            <text x="750" y="815" fill="#888" font-size="16">NEED. Only payments</text>
            <text x="750" y="840" fill="#888" font-size="16">above min count here.</text>
            <text x="550" y="1020" text-anchor="middle" fill="#ffd700" font-size="22">Disagreement is fine — what matters is your accounting is consistent</text>
          </svg>`,
          caption: "Three buckets, three honest tests. The gym membership is a want — even if it makes you feel better about paying for it."
        }
      },
      {
        type: "example",
        title: "Same Salary, Three Cities",
        content: `**Marcus, Priya, and Jordan each make $5,800/month after tax.** They live in three different US cities. The textbook 50/30/20 says each should spend $2,900 on needs, $1,740 on wants, and save $1,160. Reality:

**Marcus, Cleveland.** Rent: $1,100. Utilities + groceries + insurance + transit: $1,400. **Needs: $2,500 (43%).** He saves $1,400 (24%) and spends $1,900 (33%) on wants. Easily under 50/30/20.

**Priya, Austin.** Rent: $1,850. Other needs: $1,500. **Needs: $3,350 (58%).** She has to flex — she lives with 50/35/15 and is aggressive about hitting 20% via her 401k match.

**Jordan, San Francisco.** Rent: $2,750 (with roommate). Other needs: $1,600. **Needs: $4,350 (75%).** The textbook rule is impossible. Jordan runs a **75/15/10** while planning to either earn more or relocate within 18 months.

Same salary. **Three different mathematically valid budgets.**`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="40" font-weight="bold">$5,800/mo — Three Cities</text>
            <text x="550" y="115" text-anchor="middle" fill="#888" font-size="22">Same income. Geography rewrites the rule.</text>
            <text x="180" y="180" fill="#10b981" font-size="26" font-weight="bold">Marcus — Cleveland</text>
            <text x="180" y="210" fill="#888" font-size="18">43 / 33 / 24</text>
            <rect x="180" y="230" width="473" height="50" fill="#6366f1"/>
            <rect x="653" y="230" width="362" height="50" fill="#10b981"/>
            <rect x="1015" y="230" width="35" height="50" fill="#f59e0b"/>
            <text x="416" y="262" text-anchor="middle" fill="#ffffff" font-size="18" font-weight="bold">Needs $2,500</text>
            <text x="834" y="262" text-anchor="middle" fill="#ffffff" font-size="18" font-weight="bold">Wants $1,900</text>
            <text x="1032" y="262" text-anchor="middle" fill="#ffffff" font-size="14">$1,400</text>
            <text x="180" y="310" fill="#10b981" font-size="18">Easily under 50/30/20 — comfortable savings rate</text>
            <text x="180" y="395" fill="#f59e0b" font-size="26" font-weight="bold">Priya — Austin</text>
            <text x="180" y="425" fill="#888" font-size="18">58 / 27 / 15</text>
            <rect x="180" y="445" width="504" height="50" fill="#6366f1"/>
            <rect x="684" y="445" width="235" height="50" fill="#10b981"/>
            <rect x="919" y="445" width="131" height="50" fill="#f59e0b"/>
            <text x="432" y="477" text-anchor="middle" fill="#ffffff" font-size="18" font-weight="bold">Needs $3,350</text>
            <text x="801" y="477" text-anchor="middle" fill="#ffffff" font-size="18" font-weight="bold">Wants $1,580</text>
            <text x="984" y="477" text-anchor="middle" fill="#ffffff" font-size="14">$870</text>
            <text x="180" y="525" fill="#f59e0b" font-size="18">Rule strained — uses 401k match to push savings toward 20%</text>
            <text x="180" y="610" fill="#ef4444" font-size="26" font-weight="bold">Jordan — San Francisco</text>
            <text x="180" y="640" fill="#888" font-size="18">75 / 15 / 10</text>
            <rect x="180" y="660" width="652" height="50" fill="#6366f1"/>
            <rect x="832" y="660" width="131" height="50" fill="#10b981"/>
            <rect x="963" y="660" width="87" height="50" fill="#f59e0b"/>
            <rect x="180" y="660" width="870" height="50" fill="none" stroke="#ffd700" stroke-width="2"/>
            <text x="506" y="692" text-anchor="middle" fill="#ffffff" font-size="18" font-weight="bold">Needs $4,350</text>
            <text x="897" y="692" text-anchor="middle" fill="#ffffff" font-size="16" font-weight="bold">$870</text>
            <text x="1006" y="692" text-anchor="middle" fill="#ffffff" font-size="14">$580</text>
            <text x="180" y="740" fill="#ef4444" font-size="18">Rule impossible — plans to earn more or relocate within 18 mo</text>
            <line x1="100" y1="800" x2="1000" y2="800" stroke="#888" stroke-width="2"/>
            <text x="550" y="860" text-anchor="middle" fill="#ffd700" font-size="26" font-weight="bold">The Rule Isn't Wrong — Geography Is Brutal</text>
            <text x="550" y="910" text-anchor="middle" fill="#ffffff" font-size="20">If 50/30/20 is impossible, the answer isn't "spend less on groceries."</text>
            <text x="550" y="945" text-anchor="middle" fill="#ffffff" font-size="20">It's "raise income, change location, or accept a lower savings rate."</text>
            <text x="550" y="1010" text-anchor="middle" fill="#888" font-size="20">Adjust the rule. Don't fake the budget.</text>
          </svg>`,
          caption: "Three valid budgets at the same income — geography determines which version of the rule applies."
        }
      },
      {
        type: "quiz",
        title: "When to Break the Rule",
        content: `**Scenario:** Dana, 31, makes $4,500/month after tax. She has **$22,000 in credit card debt at 24% APR**. Her minimum payments are $560/month. Her current spending is **48% needs, 32% wants, 20% savings (split evenly between 401k and extra debt payoff)**.

She's technically inside 50/30/20. But her debt is growing faster than her savings. **What's the right move?**`,
        question: "Which adjustment to the 50/30/20 split makes the most financial sense for Dana?",
        options: [
          { text: "Keep the rule exactly — 20% to savings is the standard for a reason", correct: false },
          { text: "Drop savings to 0% and put everything possible into debt — savings can wait", correct: false },
          { text: "Shift toward roughly 50/15/35 — keep 401k match, cut wants, throw aggressive money at the 24% debt", correct: true },
          { text: "Stop her 401k and reduce her needs to 30% by moving home", correct: false }
        ],
        explanation: `At **24% APR**, that debt is compounding faster than essentially any investment will earn. Paying it off is mathematically equivalent to a guaranteed 24% return. The right move is to **shift the wants category down** (from 32% to ~15%), keep enough 401k to capture employer match (which is free money), and put the rest — roughly 35% — toward debt payoff. This isn't "ignoring savings"; it's recognizing that **eliminating a 24% liability IS savings**. Once the card is gone, she rebalances toward classic 50/30/20.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="40" font-weight="bold">Dana's Debt Crisis Mode</text>
            <text x="550" y="115" text-anchor="middle" fill="#888" font-size="22">When 24% APR rewrites the rule</text>
            <text x="280" y="200" text-anchor="middle" fill="#888" font-size="22">Current: 48 / 32 / 20</text>
            <text x="820" y="200" text-anchor="middle" fill="#ffd700" font-size="22">Better: 50 / 15 / 35</text>
            <rect x="120" y="230" width="320" height="80" fill="#6366f1"/>
            <text x="280" y="280" text-anchor="middle" fill="#ffffff" font-size="20" font-weight="bold">Needs 48%</text>
            <rect x="120" y="320" width="213" height="80" fill="#10b981"/>
            <text x="226" y="370" text-anchor="middle" fill="#ffffff" font-size="20" font-weight="bold">Wants 32%</text>
            <rect x="120" y="410" width="133" height="80" fill="#f59e0b"/>
            <text x="186" y="460" text-anchor="middle" fill="#ffffff" font-size="20" font-weight="bold">Save 20%</text>
            <text x="120" y="525" fill="#888" font-size="18">Debt grows faster than savings</text>
            <text x="120" y="555" fill="#ef4444" font-size="18">Net worth: declining</text>
            <text x="550" y="370" text-anchor="middle" fill="#ffd700" font-size="40">→</text>
            <rect x="660" y="230" width="320" height="80" fill="#6366f1"/>
            <text x="820" y="280" text-anchor="middle" fill="#ffffff" font-size="20" font-weight="bold">Needs 50%</text>
            <rect x="660" y="320" width="96" height="80" fill="#10b981"/>
            <text x="708" y="370" text-anchor="middle" fill="#ffffff" font-size="16" font-weight="bold">15%</text>
            <rect x="660" y="410" width="224" height="80" fill="#ef4444"/>
            <text x="772" y="450" text-anchor="middle" fill="#ffffff" font-size="20" font-weight="bold">Debt payoff</text>
            <text x="772" y="475" text-anchor="middle" fill="#ffffff" font-size="18">35%</text>
            <text x="660" y="525" fill="#888" font-size="18">Eliminating 24% debt</text>
            <text x="660" y="555" fill="#10b981" font-size="18">= guaranteed 24% "return"</text>
            <rect x="120" y="610" width="860" height="200" fill="#1a1a2e" stroke="#ffd700" stroke-width="2" rx="10"/>
            <text x="550" y="660" text-anchor="middle" fill="#ffd700" font-size="24" font-weight="bold">Hierarchy under high-rate debt</text>
            <text x="150" y="710" fill="#ffffff" font-size="20">1. Keep 401(k) match (free money — 100% return)</text>
            <text x="150" y="750" fill="#ffffff" font-size="20">2. Pay every penny above match to highest-APR debt</text>
            <text x="150" y="790" fill="#ffffff" font-size="20">3. Once toxic debt is gone — rebalance to 50/30/20</text>
            <text x="550" y="900" text-anchor="middle" fill="#10b981" font-size="26" font-weight="bold">Debt payoff IS savings</text>
            <text x="550" y="950" text-anchor="middle" fill="#ffffff" font-size="20">Cutting a 24% liability beats earning 10% in stocks</text>
            <text x="550" y="1010" text-anchor="middle" fill="#888" font-size="18">Crisis mode is temporary — that's why it works</text>
          </svg>`,
          caption: "When debt compounds at 24%, killing it IS the savings strategy. Break the rule on purpose, then come back to it."
        }
      },
      {
        type: "application",
        title: "Calculate Your Honest Split",
        content: `**This week, pull last month's transactions** from your bank app or your tracking tool. Then:

**1. Total each bucket.** Sum needs, wants, and savings/debt-payoff using the strict definitions from card 2. Don't fudge — gym is a want.

**2. Divide by take-home pay.** Get your real percentages. Most first-timers are surprised — wants are usually 5–15% higher than they guessed.

**3. Compare to 50/30/20.** Don't panic if you're off. The question is: **why?** High needs → cost of living, not character. High wants → easiest place to cut. Low savings → the symptom; fix the cause.

**4. Pick your target split.** Maybe it's classic 50/30/20. Maybe it's **60/20/20** because you're in a high-COL city, or **50/15/35** because you're killing toxic debt. **Write it down**. That's your custom rule.

Your budget tool then enforces *your* version of the rule, not Elizabeth Warren's.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="80" text-anchor="middle" fill="#ffd700" font-size="42" font-weight="bold">Find Your Honest Split</text>
            <text x="550" y="125" text-anchor="middle" fill="#888" font-size="22">Last month's data → next month's rule</text>
            <rect x="80" y="180" width="940" height="100" fill="#1a1a2e" stroke="#6366f1" stroke-width="2" rx="8"/>
            <circle cx="135" cy="230" r="30" fill="#6366f1"/>
            <text x="135" y="240" text-anchor="middle" fill="#ffffff" font-size="24" font-weight="bold">1</text>
            <text x="190" y="220" fill="#ffd700" font-size="22" font-weight="bold">Pull last month's transactions</text>
            <text x="190" y="255" fill="#ffffff" font-size="18">Bank app, credit card statements, or budgeting tool</text>
            <rect x="80" y="300" width="940" height="100" fill="#1a1a2e" stroke="#10b981" stroke-width="2" rx="8"/>
            <circle cx="135" cy="350" r="30" fill="#10b981"/>
            <text x="135" y="360" text-anchor="middle" fill="#ffffff" font-size="24" font-weight="bold">2</text>
            <text x="190" y="340" fill="#ffd700" font-size="22" font-weight="bold">Sum each bucket honestly</text>
            <text x="190" y="375" fill="#ffffff" font-size="18">Needs / Wants / Savings — gym is a want, no shortcuts</text>
            <rect x="80" y="420" width="940" height="100" fill="#1a1a2e" stroke="#f59e0b" stroke-width="2" rx="8"/>
            <circle cx="135" cy="470" r="30" fill="#f59e0b"/>
            <text x="135" y="480" text-anchor="middle" fill="#ffffff" font-size="24" font-weight="bold">3</text>
            <text x="190" y="460" fill="#ffd700" font-size="22" font-weight="bold">Divide by take-home pay</text>
            <text x="190" y="495" fill="#ffffff" font-size="18">Get your real %. Compare to 50/30/20. Ask: WHY off?</text>
            <rect x="80" y="540" width="940" height="100" fill="#1a1a2e" stroke="#ec4899" stroke-width="2" rx="8"/>
            <circle cx="135" cy="590" r="30" fill="#ec4899"/>
            <text x="135" y="600" text-anchor="middle" fill="#ffffff" font-size="24" font-weight="bold">4</text>
            <text x="190" y="580" fill="#ffd700" font-size="22" font-weight="bold">Pick your custom split</text>
            <text x="190" y="615" fill="#ffffff" font-size="18">Write it down. That's the rule your tool enforces.</text>
            <rect x="200" y="690" width="700" height="290" fill="#1a1a2e" stroke="#ffd700" stroke-width="2" rx="10"/>
            <text x="550" y="735" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">Common custom splits</text>
            <line x1="240" y1="755" x2="860" y2="755" stroke="#888" stroke-width="1"/>
            <text x="240" y="795" fill="#ffffff" font-size="20">• 50 / 30 / 20 — classic, mid-COL, no toxic debt</text>
            <text x="240" y="835" fill="#ffffff" font-size="20">• 60 / 20 / 20 — high-COL city (Austin, Seattle)</text>
            <text x="240" y="875" fill="#ffffff" font-size="20">• 50 / 15 / 35 — aggressive debt payoff mode</text>
            <text x="240" y="915" fill="#ffffff" font-size="20">• 40 / 20 / 40 — FIRE / early retirement push</text>
            <text x="240" y="955" fill="#ffffff" font-size="20">• 70 / 20 / 10 — survival mode, raise income next</text>
            <text x="550" y="1040" text-anchor="middle" fill="#888" font-size="20">The rule serves you, not the reverse</text>
          </svg>`,
          caption: "Four steps to find your real split, then commit to a custom rule that matches your geography and life stage."
        }
      }
    ]
  },
  {
    id: "budgeting-track-lesson-3",
    title: "Zero-Based Budgeting: Give Every Dollar a Job",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "Income Minus Allocations Equals Zero",
        content: `**Zero-based budgeting (ZBB)** is the most rigorous popular framework. The rule: **every dollar of income gets assigned to a category before the month begins, until your "to allocate" balance equals zero**.

It's the philosophy behind **YNAB (You Need A Budget)**, EveryDollar, and many enterprise budgeting tools. Where 50/30/20 says "roughly this percentage," ZBB says **"exactly this dollar."**

The shift in mindset is dramatic. You stop asking "how much can I afford to spend on X?" and start asking **"what is the next dollar's most important job?"** Groceries? Rent? Roth IRA? Vacation fund?

ZBB is more work upfront — and it makes a budget that **actually controls your money** rather than just describing it after the fact.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="80" text-anchor="middle" fill="#ffd700" font-size="42" font-weight="bold">Income − Allocations = $0</text>
            <text x="550" y="125" text-anchor="middle" fill="#888" font-size="22">Every dollar has a job before the month starts</text>
            <rect x="320" y="200" width="460" height="100" fill="#10b981" rx="10"/>
            <text x="550" y="245" text-anchor="middle" fill="#ffffff" font-size="28" font-weight="bold">Income: $5,000</text>
            <text x="550" y="280" text-anchor="middle" fill="#ffffff" font-size="20">Starting balance to allocate</text>
            <text x="550" y="335" text-anchor="middle" fill="#ffd700" font-size="36">↓</text>
            <rect x="180" y="370" width="740" height="450" fill="#1a1a2e" stroke="#6366f1" stroke-width="2" rx="10"/>
            <text x="550" y="410" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">Assign every dollar</text>
            <text x="220" y="455" fill="#ffffff" font-size="20">Rent</text>
            <text x="880" y="455" text-anchor="end" fill="#ffffff" font-size="20">$1,400</text>
            <text x="220" y="495" fill="#ffffff" font-size="20">Utilities</text>
            <text x="880" y="495" text-anchor="end" fill="#ffffff" font-size="20">$180</text>
            <text x="220" y="535" fill="#ffffff" font-size="20">Groceries</text>
            <text x="880" y="535" text-anchor="end" fill="#ffffff" font-size="20">$500</text>
            <text x="220" y="575" fill="#ffffff" font-size="20">Transport</text>
            <text x="880" y="575" text-anchor="end" fill="#ffffff" font-size="20">$320</text>
            <text x="220" y="615" fill="#ffffff" font-size="20">Restaurants</text>
            <text x="880" y="615" text-anchor="end" fill="#ffffff" font-size="20">$200</text>
            <text x="220" y="655" fill="#ffffff" font-size="20">Subscriptions</text>
            <text x="880" y="655" text-anchor="end" fill="#ffffff" font-size="20">$95</text>
            <text x="220" y="695" fill="#ffffff" font-size="20">Roth IRA</text>
            <text x="880" y="695" text-anchor="end" fill="#ffffff" font-size="20">$500</text>
            <text x="220" y="735" fill="#ffffff" font-size="20">Emergency fund</text>
            <text x="880" y="735" text-anchor="end" fill="#ffffff" font-size="20">$400</text>
            <text x="220" y="775" fill="#ffffff" font-size="20">Vacation sinking fund</text>
            <text x="880" y="775" text-anchor="end" fill="#ffffff" font-size="20">$200</text>
            <text x="220" y="810" fill="#ffd700" font-size="20" font-weight="bold">Flex buffer</text>
            <text x="880" y="810" text-anchor="end" fill="#ffd700" font-size="20" font-weight="bold">$1,205</text>
            <text x="550" y="855" text-anchor="middle" fill="#ffd700" font-size="36">↓</text>
            <rect x="320" y="890" width="460" height="100" fill="#1a1a2e" stroke="#10b981" stroke-width="3" rx="10"/>
            <text x="550" y="935" text-anchor="middle" fill="#10b981" font-size="32" font-weight="bold">To allocate: $0</text>
            <text x="550" y="970" text-anchor="middle" fill="#ffffff" font-size="18">Every dollar has a job</text>
            <text x="550" y="1050" text-anchor="middle" fill="#888" font-size="18">Not zero spending — zero unassigned</text>
          </svg>`,
          caption: "Every incoming dollar is consciously assigned somewhere — the goal is zero unallocated, not zero spent."
        }
      },
      {
        type: "concept",
        title: "Four Rules and the Age of Money",
        content: `YNAB formalizes ZBB into **four rules**:

**Rule 1: Give Every Dollar a Job.** No unallocated money sitting in checking — every dollar belongs to a category, even if that category is "fun" or "next month's rent."

**Rule 2: Embrace Your True Expenses.** Annual expenses (insurance, car registration, holiday gifts) become **monthly sinking funds**. $1,200 car insurance/year = $100/mo set aside, so it never feels like a surprise.

**Rule 3: Roll With the Punches.** Overspend in groceries? **Move money** from another category. No shame, no abandonment — just rebalance.

**Rule 4: Age Your Money.** The goal is to spend money you earned **at least 30 days ago**. When your **"age of money"** hits 30+, you've fully escaped paycheck-to-paycheck living.

The age-of-money metric is the single best **early indicator of financial stability**. A rising number means you're winning, even before your net worth changes much.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="40" font-weight="bold">YNAB's Four Rules</text>
            <text x="550" y="115" text-anchor="middle" fill="#888" font-size="22">Operating system for ZBB</text>
            <rect x="60" y="170" width="490" height="220" fill="#1a1a2e" stroke="#6366f1" stroke-width="3" rx="10"/>
            <text x="305" y="215" text-anchor="middle" fill="#6366f1" font-size="24" font-weight="bold">Rule 1: Every Dollar a Job</text>
            <line x1="80" y1="235" x2="530" y2="235" stroke="#888" stroke-width="1"/>
            <text x="80" y="280" fill="#ffffff" font-size="20">No money loose in checking</text>
            <text x="80" y="315" fill="#ffffff" font-size="20">Even "fun" is an assignment</text>
            <text x="80" y="350" fill="#ffffff" font-size="18">"Future rent" is a legitimate job</text>
            <rect x="560" y="170" width="490" height="220" fill="#1a1a2e" stroke="#10b981" stroke-width="3" rx="10"/>
            <text x="805" y="215" text-anchor="middle" fill="#10b981" font-size="24" font-weight="bold">Rule 2: True Expenses</text>
            <line x1="580" y1="235" x2="1030" y2="235" stroke="#888" stroke-width="1"/>
            <text x="580" y="280" fill="#ffffff" font-size="20">Annual costs → monthly sinking</text>
            <text x="580" y="315" fill="#ffffff" font-size="20">$1,200 insurance = $100/mo</text>
            <text x="580" y="350" fill="#ffffff" font-size="18">No "surprise" bills exist</text>
            <rect x="60" y="410" width="490" height="220" fill="#1a1a2e" stroke="#f59e0b" stroke-width="3" rx="10"/>
            <text x="305" y="455" text-anchor="middle" fill="#f59e0b" font-size="24" font-weight="bold">Rule 3: Roll With Punches</text>
            <line x1="80" y1="475" x2="530" y2="475" stroke="#888" stroke-width="1"/>
            <text x="80" y="520" fill="#ffffff" font-size="20">Overspent? Move money.</text>
            <text x="80" y="555" fill="#ffffff" font-size="20">No shame in reallocating</text>
            <text x="80" y="590" fill="#ffffff" font-size="18">Pull from "fun" → "groceries"</text>
            <rect x="560" y="410" width="490" height="220" fill="#1a1a2e" stroke="#ec4899" stroke-width="3" rx="10"/>
            <text x="805" y="455" text-anchor="middle" fill="#ec4899" font-size="24" font-weight="bold">Rule 4: Age Your Money</text>
            <line x1="580" y1="475" x2="1030" y2="475" stroke="#888" stroke-width="1"/>
            <text x="580" y="520" fill="#ffffff" font-size="20">Spend dollars 30+ days old</text>
            <text x="580" y="555" fill="#ffffff" font-size="20">Metric: avg age in days</text>
            <text x="580" y="590" fill="#ffffff" font-size="18">30+ = escaped paycheck-to-paycheck</text>
            <rect x="100" y="670" width="900" height="280" fill="#1a1a2e" stroke="#ffd700" stroke-width="2" rx="10"/>
            <text x="550" y="715" text-anchor="middle" fill="#ffd700" font-size="24" font-weight="bold">Age of Money — Stability Ladder</text>
            <line x1="150" y1="780" x2="950" y2="780" stroke="#ffffff" stroke-width="2"/>
            <rect x="150" y="755" width="160" height="50" fill="#ef4444"/>
            <text x="230" y="788" text-anchor="middle" fill="#ffffff" font-size="18" font-weight="bold">0-7 days</text>
            <rect x="310" y="755" width="160" height="50" fill="#f59e0b"/>
            <text x="390" y="788" text-anchor="middle" fill="#ffffff" font-size="18" font-weight="bold">8-29 days</text>
            <rect x="470" y="755" width="160" height="50" fill="#10b981"/>
            <text x="550" y="788" text-anchor="middle" fill="#ffffff" font-size="18" font-weight="bold">30-60 days</text>
            <rect x="630" y="755" width="160" height="50" fill="#6366f1"/>
            <text x="710" y="788" text-anchor="middle" fill="#ffffff" font-size="18" font-weight="bold">60-90 days</text>
            <rect x="790" y="755" width="160" height="50" fill="#8b5cf6"/>
            <text x="870" y="788" text-anchor="middle" fill="#ffffff" font-size="18" font-weight="bold">90+ days</text>
            <text x="230" y="840" text-anchor="middle" fill="#888" font-size="16">Paycheck</text>
            <text x="230" y="860" text-anchor="middle" fill="#888" font-size="16">to paycheck</text>
            <text x="390" y="840" text-anchor="middle" fill="#888" font-size="16">Catching</text>
            <text x="390" y="860" text-anchor="middle" fill="#888" font-size="16">breath</text>
            <text x="550" y="840" text-anchor="middle" fill="#888" font-size="16">Truly</text>
            <text x="550" y="860" text-anchor="middle" fill="#888" font-size="16">stable</text>
            <text x="710" y="840" text-anchor="middle" fill="#888" font-size="16">Wealthy</text>
            <text x="710" y="860" text-anchor="middle" fill="#888" font-size="16">cash flow</text>
            <text x="870" y="840" text-anchor="middle" fill="#888" font-size="16">No worry</text>
            <text x="870" y="860" text-anchor="middle" fill="#888" font-size="16">about timing</text>
            <text x="550" y="920" text-anchor="middle" fill="#ffd700" font-size="22">Rising age-of-money = winning</text>
          </svg>`,
          caption: "Four rules and the age-of-money metric — a single number that captures whether you're climbing the stability ladder."
        }
      },
      {
        type: "example",
        title: "Carlos & Lin's First ZBB Month",
        content: `**Carlos and Lin earn $7,400/month combined after tax** and have struggled with month-end "where did it go?" anxiety despite never feeling extravagant.

**Their first ZBB allocation:** Rent $1,950, utilities $220, groceries $700, transportation $480, restaurants $250, subscriptions $85, kid activities $150, true expenses (insurance + car registration + gifts sinking funds) $420, **savings $1,200, debt payoff $400, fun money $300**, flex buffer $245, vacation fund $300, Roth IRAs $700. **Total: $7,400.** Balance to allocate: **$0.**

**Mid-month**, restaurants ran over by $80 (Lin's birthday). They **pulled $80 from fun money** — done. Felt fine. Not a "broken month."

**By month 6**, age of money hit **18 days** (up from 0). By month 9 it hit **32 days**. They had savings of **$8,400** and — for the first time — felt the next paycheck was a bonus, not a rescue.

The plan didn't change their income. It changed their **relationship with their dollars**.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="40" font-weight="bold">Carlos &amp; Lin — Month 1 to 9</text>
            <text x="550" y="115" text-anchor="middle" fill="#888" font-size="22">$7,400/mo combined. Same income, transformed.</text>
            <text x="180" y="180" fill="#ffd700" font-size="24" font-weight="bold">The Allocation</text>
            <rect x="100" y="200" width="450" height="640" fill="#1a1a2e" stroke="#6366f1" stroke-width="2" rx="10"/>
            <text x="120" y="240" fill="#ffffff" font-size="18">Rent</text>
            <text x="530" y="240" text-anchor="end" fill="#ffffff" font-size="18">$1,950</text>
            <text x="120" y="275" fill="#ffffff" font-size="18">Utilities</text>
            <text x="530" y="275" text-anchor="end" fill="#ffffff" font-size="18">$220</text>
            <text x="120" y="310" fill="#ffffff" font-size="18">Groceries</text>
            <text x="530" y="310" text-anchor="end" fill="#ffffff" font-size="18">$700</text>
            <text x="120" y="345" fill="#ffffff" font-size="18">Transportation</text>
            <text x="530" y="345" text-anchor="end" fill="#ffffff" font-size="18">$480</text>
            <text x="120" y="380" fill="#ffffff" font-size="18">Restaurants</text>
            <text x="530" y="380" text-anchor="end" fill="#ffffff" font-size="18">$250</text>
            <text x="120" y="415" fill="#ffffff" font-size="18">Subscriptions</text>
            <text x="530" y="415" text-anchor="end" fill="#ffffff" font-size="18">$85</text>
            <text x="120" y="450" fill="#ffffff" font-size="18">Kid activities</text>
            <text x="530" y="450" text-anchor="end" fill="#ffffff" font-size="18">$150</text>
            <text x="120" y="485" fill="#ffffff" font-size="18">True expenses (sinking)</text>
            <text x="530" y="485" text-anchor="end" fill="#ffffff" font-size="18">$420</text>
            <text x="120" y="520" fill="#10b981" font-size="18">Savings (emergency)</text>
            <text x="530" y="520" text-anchor="end" fill="#10b981" font-size="18">$1,200</text>
            <text x="120" y="555" fill="#10b981" font-size="18">Debt payoff</text>
            <text x="530" y="555" text-anchor="end" fill="#10b981" font-size="18">$400</text>
            <text x="120" y="590" fill="#10b981" font-size="18">Roth IRAs</text>
            <text x="530" y="590" text-anchor="end" fill="#10b981" font-size="18">$700</text>
            <text x="120" y="625" fill="#ffffff" font-size="18">Fun money</text>
            <text x="530" y="625" text-anchor="end" fill="#ffffff" font-size="18">$300</text>
            <text x="120" y="660" fill="#ffffff" font-size="18">Vacation fund</text>
            <text x="530" y="660" text-anchor="end" fill="#ffffff" font-size="18">$300</text>
            <text x="120" y="695" fill="#ffd700" font-size="18">Flex buffer</text>
            <text x="530" y="695" text-anchor="end" fill="#ffd700" font-size="18">$245</text>
            <line x1="120" y1="720" x2="530" y2="720" stroke="#ffffff" stroke-width="2"/>
            <text x="120" y="755" fill="#ffd700" font-size="22" font-weight="bold">Total assigned</text>
            <text x="530" y="755" text-anchor="end" fill="#ffd700" font-size="22" font-weight="bold">$7,400</text>
            <text x="120" y="800" fill="#10b981" font-size="22" font-weight="bold">To allocate</text>
            <text x="530" y="800" text-anchor="end" fill="#10b981" font-size="26" font-weight="bold">$0 ✓</text>
            <text x="780" y="180" fill="#ffd700" font-size="24" font-weight="bold">The Results</text>
            <rect x="580" y="200" width="460" height="220" fill="#1a1a2e" stroke="#10b981" stroke-width="2" rx="10"/>
            <text x="600" y="245" fill="#ffffff" font-size="20">Mid-month overspend:</text>
            <text x="600" y="280" fill="#ffffff" font-size="20">+$80 restaurants (birthday)</text>
            <text x="600" y="320" fill="#ffd700" font-size="20">→ pulled from "fun money"</text>
            <text x="600" y="360" fill="#10b981" font-size="20">Month still on track ✓</text>
            <text x="600" y="395" fill="#888" font-size="16">No shame, no abandonment</text>
            <rect x="580" y="440" width="460" height="380" fill="#1a1a2e" stroke="#ffd700" stroke-width="2" rx="10"/>
            <text x="810" y="485" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">9-Month Progress</text>
            <line x1="600" y1="500" x2="1020" y2="500" stroke="#888" stroke-width="1"/>
            <text x="610" y="540" fill="#ffffff" font-size="18">Month 1 Age of Money:</text>
            <text x="1010" y="540" text-anchor="end" fill="#ef4444" font-size="20" font-weight="bold">0 days</text>
            <text x="610" y="585" fill="#ffffff" font-size="18">Month 6:</text>
            <text x="1010" y="585" text-anchor="end" fill="#f59e0b" font-size="20" font-weight="bold">18 days</text>
            <text x="610" y="630" fill="#ffffff" font-size="18">Month 9:</text>
            <text x="1010" y="630" text-anchor="end" fill="#10b981" font-size="20" font-weight="bold">32 days</text>
            <line x1="600" y1="660" x2="1020" y2="660" stroke="#888" stroke-width="1"/>
            <text x="610" y="700" fill="#ffffff" font-size="18">Total saved (mo 9):</text>
            <text x="1010" y="700" text-anchor="end" fill="#10b981" font-size="22" font-weight="bold">$8,400</text>
            <text x="610" y="745" fill="#ffffff" font-size="18">Debt remaining:</text>
            <text x="1010" y="745" text-anchor="end" fill="#10b981" font-size="20" font-weight="bold">$3,600 (was $7,200)</text>
            <text x="810" y="800" text-anchor="middle" fill="#ffd700" font-size="18">Next paycheck = bonus, not rescue</text>
          </svg>`,
          caption: "A full ZBB allocation on the left; nine months later, age of money has climbed past the 30-day threshold."
        }
      },
      {
        type: "quiz",
        title: "ZBB Mid-Month Decision",
        content: `**It's the 18th of the month.** Your ZBB plan allocated $500 to groceries. You've spent $440, so you have $60 left for the last 12 days — clearly not enough.

You have **$180 left in restaurants**, $90 in fun money, $200 in vacation sinking fund, and $30 in flex buffer.

**Which move best embodies the YNAB philosophy?**`,
        question: "Which response is most consistent with zero-based budgeting principles?",
        options: [
          { text: "Stop buying groceries and eat only restaurant food until the 1st", correct: false },
          { text: "Declare the month broken and stop tracking — you'll restart next month", correct: false },
          { text: "Move ~$80-100 from restaurants and flex buffer into groceries; eat in more; continue the month", correct: true },
          { text: "Borrow from the vacation sinking fund and replace it with next month's allocation", correct: false }
        ],
        explanation: `This is **Rule 3: Roll With the Punches** in action. The right move is to **reallocate from a lower-priority category** — restaurants and the flex buffer — into groceries, then adjust behavior (eat in more often). You don't break the month, you don't borrow from future allocations, and you don't raid sinking funds for unrelated purposes. The move takes 30 seconds and keeps the system intact. Touching the vacation fund would defeat its specific purpose; quitting would surrender the system entirely.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="40" font-weight="bold">Roll With the Punches</text>
            <text x="550" y="115" text-anchor="middle" fill="#888" font-size="22">Day 18: groceries running low</text>
            <text x="280" y="190" text-anchor="middle" fill="#888" font-size="22">Before reallocation</text>
            <text x="820" y="190" text-anchor="middle" fill="#ffd700" font-size="22">After reallocation</text>
            <rect x="100" y="220" width="360" height="80" fill="#ef4444" rx="8"/>
            <text x="120" y="255" fill="#ffffff" font-size="20">Groceries</text>
            <text x="440" y="255" text-anchor="end" fill="#ffffff" font-size="20">$60 left</text>
            <text x="120" y="285" fill="#ffffff" font-size="16">12 days remaining — short</text>
            <rect x="100" y="320" width="360" height="60" fill="#10b981" rx="8"/>
            <text x="120" y="355" fill="#ffffff" font-size="20">Restaurants</text>
            <text x="440" y="355" text-anchor="end" fill="#ffffff" font-size="20">$180</text>
            <rect x="100" y="400" width="360" height="60" fill="#6366f1" rx="8"/>
            <text x="120" y="435" fill="#ffffff" font-size="20">Fun money</text>
            <text x="440" y="435" text-anchor="end" fill="#ffffff" font-size="20">$90</text>
            <rect x="100" y="480" width="360" height="60" fill="#ec4899" rx="8"/>
            <text x="120" y="515" fill="#ffffff" font-size="20">Vacation fund</text>
            <text x="440" y="515" text-anchor="end" fill="#ffffff" font-size="20">$200</text>
            <rect x="100" y="560" width="360" height="60" fill="#f59e0b" rx="8"/>
            <text x="120" y="595" fill="#ffffff" font-size="20">Flex buffer</text>
            <text x="440" y="595" text-anchor="end" fill="#ffffff" font-size="20">$30</text>
            <text x="490" y="420" text-anchor="middle" fill="#ffd700" font-size="40">→</text>
            <rect x="640" y="220" width="360" height="80" fill="#10b981" rx="8"/>
            <text x="660" y="255" fill="#ffffff" font-size="20">Groceries</text>
            <text x="980" y="255" text-anchor="end" fill="#ffffff" font-size="20">$160 ✓</text>
            <text x="660" y="285" fill="#ffffff" font-size="16">Enough for last 12 days</text>
            <rect x="640" y="320" width="360" height="60" fill="#10b981" rx="8"/>
            <text x="660" y="355" fill="#ffffff" font-size="20">Restaurants</text>
            <text x="980" y="355" text-anchor="end" fill="#ffffff" font-size="20">$100 (-$80)</text>
            <rect x="640" y="400" width="360" height="60" fill="#6366f1" rx="8"/>
            <text x="660" y="435" fill="#ffffff" font-size="20">Fun money</text>
            <text x="980" y="435" text-anchor="end" fill="#ffffff" font-size="20">$90 (unchanged)</text>
            <rect x="640" y="480" width="360" height="60" fill="#ec4899" rx="8"/>
            <text x="660" y="515" fill="#ffffff" font-size="20">Vacation fund</text>
            <text x="980" y="515" text-anchor="end" fill="#ffffff" font-size="20">$200 (protected)</text>
            <rect x="640" y="560" width="360" height="60" fill="#f59e0b" rx="8"/>
            <text x="660" y="595" fill="#ffffff" font-size="20">Flex buffer</text>
            <text x="980" y="595" text-anchor="end" fill="#ffffff" font-size="20">$10 (-$20)</text>
            <rect x="150" y="680" width="800" height="240" fill="#1a1a2e" stroke="#ffd700" stroke-width="2" rx="10"/>
            <text x="550" y="725" text-anchor="middle" fill="#ffd700" font-size="24" font-weight="bold">Why this is right</text>
            <text x="180" y="775" fill="#ffffff" font-size="20">• Pulls from "want" categories first (restaurants)</text>
            <text x="180" y="815" fill="#ffffff" font-size="20">• Uses flex buffer as designed</text>
            <text x="180" y="855" fill="#ffffff" font-size="20">• Protects purpose-specific sinking funds (vacation)</text>
            <text x="180" y="895" fill="#ffffff" font-size="20">• Takes 30 seconds. Month stays intact.</text>
            <text x="550" y="1010" text-anchor="middle" fill="#10b981" font-size="22">Rule 3 in action — no shame, just reallocation</text>
          </svg>`,
          caption: "Rolling with the punches: take from lower-priority buckets, protect purpose-built funds, and keep the month alive."
        }
      },
      {
        type: "application",
        title: "Run Your First ZBB Month",
        content: `**This is a one-hour setup followed by a 30-day experiment.** Worth it:

**1. Pick a tool.** YNAB ($109/yr, the OG), Actual Budget (free, self-hosted), or a custom spreadsheet. The tool matters less than the discipline.

**2. List every income event.** When does pay land? Side hustle? Reimbursements? Get exact dates and amounts for the next 30 days.

**3. List every expense category, including sinking funds.** Rent, utilities, groceries, etc. — AND **monthly slices of annual costs** (car insurance, holidays, registration, vet visits).

**4. Allocate until you hit $0.** If you can't get to zero, you're either missing categories or over-allocating. Iterate.

**5. Practice Rule 3 once.** When the first overspend happens (it will), **deliberately move money** rather than panic. That's the rep that builds the habit.

**6. Check age of money on day 30.** Write the number down. Try to beat it in month 2.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="80" text-anchor="middle" fill="#ffd700" font-size="42" font-weight="bold">Run a 30-Day ZBB Experiment</text>
            <text x="550" y="125" text-anchor="middle" fill="#888" font-size="22">One hour setup. One month commitment.</text>
            <circle cx="140" cy="220" r="40" fill="#6366f1"/>
            <text x="140" y="232" text-anchor="middle" fill="#ffffff" font-size="28" font-weight="bold">1</text>
            <text x="210" y="205" fill="#ffd700" font-size="22" font-weight="bold">Pick a tool</text>
            <text x="210" y="235" fill="#ffffff" font-size="18">YNAB ($109/yr), Actual Budget (free),</text>
            <text x="210" y="260" fill="#ffffff" font-size="18">or a custom spreadsheet — discipline &gt; app</text>
            <circle cx="140" cy="335" r="40" fill="#10b981"/>
            <text x="140" y="347" text-anchor="middle" fill="#ffffff" font-size="28" font-weight="bold">2</text>
            <text x="210" y="320" fill="#ffd700" font-size="22" font-weight="bold">List income events</text>
            <text x="210" y="350" fill="#ffffff" font-size="18">Paycheck dates, side hustle, reimbursements</text>
            <text x="210" y="375" fill="#ffffff" font-size="18">Exact dollars for next 30 days</text>
            <circle cx="140" cy="450" r="40" fill="#f59e0b"/>
            <text x="140" y="462" text-anchor="middle" fill="#ffffff" font-size="28" font-weight="bold">3</text>
            <text x="210" y="435" fill="#ffd700" font-size="22" font-weight="bold">List ALL categories</text>
            <text x="210" y="465" fill="#ffffff" font-size="18">Including monthly slices of annual costs:</text>
            <text x="210" y="490" fill="#ffffff" font-size="18">car insurance, holidays, registration, vet</text>
            <circle cx="140" cy="565" r="40" fill="#ec4899"/>
            <text x="140" y="577" text-anchor="middle" fill="#ffffff" font-size="28" font-weight="bold">4</text>
            <text x="210" y="550" fill="#ffd700" font-size="22" font-weight="bold">Allocate to $0</text>
            <text x="210" y="580" fill="#ffffff" font-size="18">Income − allocations = $0</text>
            <text x="210" y="605" fill="#ffffff" font-size="18">Can't hit zero? Missing or over — iterate</text>
            <circle cx="140" cy="680" r="40" fill="#8b5cf6"/>
            <text x="140" y="692" text-anchor="middle" fill="#ffffff" font-size="28" font-weight="bold">5</text>
            <text x="210" y="665" fill="#ffd700" font-size="22" font-weight="bold">Practice Rule 3</text>
            <text x="210" y="695" fill="#ffffff" font-size="18">First overspend? MOVE MONEY, not panic</text>
            <text x="210" y="720" fill="#ffffff" font-size="18">That's the habit-building rep</text>
            <circle cx="140" cy="795" r="40" fill="#0ea5e9"/>
            <text x="140" y="807" text-anchor="middle" fill="#ffffff" font-size="28" font-weight="bold">6</text>
            <text x="210" y="780" fill="#ffd700" font-size="22" font-weight="bold">Measure age of money</text>
            <text x="210" y="810" fill="#ffffff" font-size="18">Write down day-30 number</text>
            <text x="210" y="835" fill="#ffffff" font-size="18">Beat it in month 2. Beat it again in month 3.</text>
            <rect x="100" y="880" width="900" height="160" fill="#1a1a2e" stroke="#ffd700" stroke-width="3" rx="10"/>
            <text x="550" y="925" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">The Promise</text>
            <text x="550" y="965" text-anchor="middle" fill="#ffffff" font-size="20">By month 6, "where did it go?" disappears.</text>
            <text x="550" y="1000" text-anchor="middle" fill="#ffffff" font-size="20">By month 12, age of money is your favorite metric.</text>
            <text x="550" y="1030" text-anchor="middle" fill="#888" font-size="18">Income hasn't changed. Your relationship to it has.</text>
          </svg>`,
          caption: "Six steps to your first zero-based month — then a habit you measure with one number: how old your dollars are when you spend them."
        }
      }
    ]
  },
{
    id: "budgeting-track-lesson-4",
    title: "Sinking Funds: The Anti-Surprise Money System",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "The Surprise That Isn't a Surprise",
        content: `Your car needs new tires. Christmas is in December. Your insurance premium hits every six months. Your dog needs a vet visit. None of these are **emergencies** — they are **predictable irregular expenses**. Yet most households treat them like asteroid strikes, reaching for a credit card every time one lands.

A **sinking fund** is the fix: a small monthly amount you set aside *before* the expense hits, so the money is already waiting when the bill arrives. The name comes from 19th-century bond accounting — money "sinks" into a pot until needed.

People who run sinking funds report dramatically fewer "emergency" credit card swipes. The expense didn't change. The **timing** of the saving did. In this lesson, you'll build your own list, do the math, and pick the right account to hold it.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="80" text-anchor="middle" fill="#ffd700" font-size="44" font-weight="bold" font-family="sans-serif">Sinking Funds</text><text x="550" y="130" text-anchor="middle" fill="#888" font-size="24" font-family="sans-serif">Predictable expenses, prepaid in small chunks</text><rect x="100" y="200" width="400" height="700" fill="#ef4444" opacity="0.15" stroke="#ef4444" stroke-width="3" rx="12"/><text x="300" y="260" text-anchor="middle" fill="#ef4444" font-size="28" font-weight="bold" font-family="sans-serif">Without Sinking Fund</text><text x="300" y="320" text-anchor="middle" fill="#ffffff" font-size="20" font-family="sans-serif">Jan-Nov: $0 saved</text><text x="300" y="360" text-anchor="middle" fill="#ffffff" font-size="20" font-family="sans-serif">Dec: $1,200 gifts</text><rect x="150" y="400" width="300" height="60" fill="#ef4444" opacity="0.6"/><text x="300" y="438" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold" font-family="sans-serif">Credit Card Swipe</text><text x="300" y="500" text-anchor="middle" fill="#ffffff" font-size="18" font-family="sans-serif">+ 22% APR carryover</text><text x="300" y="540" text-anchor="middle" fill="#ffffff" font-size="18" font-family="sans-serif">+ Months of payments</text><text x="300" y="600" text-anchor="middle" fill="#888" font-size="16" font-family="sans-serif">Real cost: ~$1,400+</text><rect x="600" y="200" width="400" height="700" fill="#10b981" opacity="0.15" stroke="#10b981" stroke-width="3" rx="12"/><text x="800" y="260" text-anchor="middle" fill="#10b981" font-size="28" font-weight="bold" font-family="sans-serif">With Sinking Fund</text><text x="800" y="320" text-anchor="middle" fill="#ffffff" font-size="20" font-family="sans-serif">Jan-Nov: $100/mo</text><text x="800" y="360" text-anchor="middle" fill="#ffffff" font-size="20" font-family="sans-serif">Dec: $1,200 ready</text><rect x="650" y="400" width="300" height="60" fill="#10b981" opacity="0.6"/><text x="800" y="438" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold" font-family="sans-serif">Cash Payment</text><text x="800" y="500" text-anchor="middle" fill="#ffffff" font-size="18" font-family="sans-serif">No interest</text><text x="800" y="540" text-anchor="middle" fill="#ffffff" font-size="18" font-family="sans-serif">No January regret</text><text x="800" y="600" text-anchor="middle" fill="#ffd700" font-size="16" font-weight="bold" font-family="sans-serif">Real cost: $1,200</text><text x="550" y="1020" text-anchor="middle" fill="#ffd700" font-size="22" font-family="sans-serif">Same expense. Different timing. $200+ saved.</text></svg>`,
          caption: "Sinking funds convert one painful annual hit into 12 painless monthly transfers."
        }
      },
      {
        type: "concept",
        title: "The Math: Annual Cost ÷ 12",
        content: `The formula is embarrassingly simple: **Annual Cost ÷ 12 = Monthly Sinking Amount**.

A few real examples:
- **Car maintenance** ($900/yr oil, tires, brakes) → $75/mo
- **Christmas + birthdays** ($1,200/yr) → $100/mo
- **Auto insurance** ($1,440/yr paid semi-annually) → $120/mo
- **Vet & pet care** ($600/yr) → $50/mo
- **Annual subscriptions** (Amazon Prime, domain, software, $300/yr) → $25/mo
- **Property tax / HOA** ($2,400/yr) → $200/mo

Total in this example: **$570/month**. That feels like a lot — until you realize it's already what you spend, just on a different schedule. You're not adding expenses; you're **smoothing** them.

Pro tip: round **up** by 10–20% to absorb price creep. If holiday spending was $1,200 last year, budget $1,400 this year. Surplus rolls to next year's fund. **Never** rolls into checking.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="40" font-weight="bold" font-family="sans-serif">Sinking Fund Worksheet</text><text x="550" y="115" text-anchor="middle" fill="#888" font-size="22" font-family="sans-serif">Annual cost ÷ 12 = monthly transfer</text><rect x="80" y="160" width="940" height="60" fill="#6366f1" opacity="0.3"/><text x="120" y="200" fill="#ffd700" font-size="22" font-weight="bold" font-family="sans-serif">Category</text><text x="540" y="200" fill="#ffd700" font-size="22" font-weight="bold" font-family="sans-serif">Annual</text><text x="780" y="200" fill="#ffd700" font-size="22" font-weight="bold" font-family="sans-serif">Monthly</text><rect x="80" y="220" width="940" height="55" fill="#ffffff" opacity="0.05"/><text x="120" y="256" fill="#ffffff" font-size="20" font-family="sans-serif">Car maintenance</text><text x="540" y="256" fill="#ffffff" font-size="20" font-family="sans-serif">$900</text><text x="780" y="256" fill="#10b981" font-size="20" font-weight="bold" font-family="sans-serif">$75</text><rect x="80" y="275" width="940" height="55" fill="#ffffff" opacity="0.08"/><text x="120" y="311" fill="#ffffff" font-size="20" font-family="sans-serif">Holidays + gifts</text><text x="540" y="311" fill="#ffffff" font-size="20" font-family="sans-serif">$1,200</text><text x="780" y="311" fill="#10b981" font-size="20" font-weight="bold" font-family="sans-serif">$100</text><rect x="80" y="330" width="940" height="55" fill="#ffffff" opacity="0.05"/><text x="120" y="366" fill="#ffffff" font-size="20" font-family="sans-serif">Auto insurance (6-mo)</text><text x="540" y="366" fill="#ffffff" font-size="20" font-family="sans-serif">$1,440</text><text x="780" y="366" fill="#10b981" font-size="20" font-weight="bold" font-family="sans-serif">$120</text><rect x="80" y="385" width="940" height="55" fill="#ffffff" opacity="0.08"/><text x="120" y="421" fill="#ffffff" font-size="20" font-family="sans-serif">Vet &amp; pet care</text><text x="540" y="421" fill="#ffffff" font-size="20" font-family="sans-serif">$600</text><text x="780" y="421" fill="#10b981" font-size="20" font-weight="bold" font-family="sans-serif">$50</text><rect x="80" y="440" width="940" height="55" fill="#ffffff" opacity="0.05"/><text x="120" y="476" fill="#ffffff" font-size="20" font-family="sans-serif">Annual subscriptions</text><text x="540" y="476" fill="#ffffff" font-size="20" font-family="sans-serif">$300</text><text x="780" y="476" fill="#10b981" font-size="20" font-weight="bold" font-family="sans-serif">$25</text><rect x="80" y="495" width="940" height="55" fill="#ffffff" opacity="0.08"/><text x="120" y="531" fill="#ffffff" font-size="20" font-family="sans-serif">Property tax</text><text x="540" y="531" fill="#ffffff" font-size="20" font-family="sans-serif">$2,400</text><text x="780" y="531" fill="#10b981" font-size="20" font-weight="bold" font-family="sans-serif">$200</text><rect x="80" y="570" width="940" height="70" fill="#ffd700" opacity="0.25" stroke="#ffd700" stroke-width="2"/><text x="120" y="615" fill="#ffd700" font-size="24" font-weight="bold" font-family="sans-serif">TOTAL</text><text x="540" y="615" fill="#ffd700" font-size="24" font-weight="bold" font-family="sans-serif">$6,840</text><text x="780" y="615" fill="#ffd700" font-size="24" font-weight="bold" font-family="sans-serif">$570</text><text x="550" y="730" text-anchor="middle" fill="#ffffff" font-size="22" font-family="sans-serif">This isn't new spending —</text><text x="550" y="770" text-anchor="middle" fill="#ffffff" font-size="22" font-family="sans-serif">it's existing spending, spread evenly.</text><text x="550" y="860" text-anchor="middle" fill="#f59e0b" font-size="20" font-family="sans-serif">Tip: round up 10-20% for price creep</text><text x="550" y="900" text-anchor="middle" fill="#888" font-size="18" font-family="sans-serif">Last year's overage = next year's cushion</text></svg>`,
          caption: "Six common sinking-fund categories totaling $570/mo — the same dollars, smoothed across the year."
        }
      },
      {
        type: "example",
        title: "Where to Hold Them: One Account, Many Buckets",
        content: `Meet **Priya**, 32, software analyst, take-home $5,200/mo. She kept "savings" in one lumpy account, raided it constantly, and never knew what was "real" savings vs. earmarked.

Her fix: a single **high-yield savings account** (HYSA, ~4.5% APY) plus a budgeting app (YNAB / Monarch / a spreadsheet) that splits the balance into **virtual buckets**.

One account. No new fees. Twelve named jobs. Her January statement:

| Bucket | Balance |
|---|---|
| Car maintenance | $300 (4 mo × $75) |
| Christmas 2026 | $100 |
| Auto insurance | $480 |
| Vet | $200 |
| Travel | $400 |
| **Total balance** | **$1,480** |

When her car needed $620 in brakes in April, she moved $620 from the **car bucket** to checking. Zero stress. The other buckets were untouched. Her "real" emergency fund — for **unpredictable** events like job loss — stayed separate. Sinking funds protect the emergency fund from getting nibbled to death.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="40" font-weight="bold" font-family="sans-serif">One HYSA, Many Buckets</text><text x="550" y="115" text-anchor="middle" fill="#888" font-size="22" font-family="sans-serif">Priya's January balance: $1,480</text><circle cx="550" cy="600" r="280" fill="none" stroke="#ffffff" stroke-width="2" opacity="0.2"/><path d="M 550 600 L 550 320 A 280 280 0 0 1 815 689 Z" fill="#6366f1" opacity="0.85"/><path d="M 550 600 L 815 689 A 280 280 0 0 1 633 869 Z" fill="#10b981" opacity="0.85"/><path d="M 550 600 L 633 869 A 280 280 0 0 1 410 855 Z" fill="#f59e0b" opacity="0.85"/><path d="M 550 600 L 410 855 A 280 280 0 0 1 282 530 Z" fill="#ec4899" opacity="0.85"/><path d="M 550 600 L 282 530 A 280 280 0 0 1 550 320 Z" fill="#8b5cf6" opacity="0.85"/><text x="660" y="460" fill="#ffffff" font-size="18" font-weight="bold" font-family="sans-serif">Insurance</text><text x="660" y="485" fill="#ffffff" font-size="16" font-family="sans-serif">$480</text><text x="740" y="780" fill="#ffffff" font-size="18" font-weight="bold" font-family="sans-serif">Car</text><text x="740" y="805" fill="#ffffff" font-size="16" font-family="sans-serif">$300</text><text x="500" y="840" fill="#ffffff" font-size="18" font-weight="bold" font-family="sans-serif">Travel</text><text x="500" y="865" fill="#ffffff" font-size="16" font-family="sans-serif">$400</text><text x="320" y="720" fill="#ffffff" font-size="18" font-weight="bold" font-family="sans-serif">Vet</text><text x="320" y="745" fill="#ffffff" font-size="16" font-family="sans-serif">$200</text><text x="380" y="460" fill="#ffffff" font-size="18" font-weight="bold" font-family="sans-serif">Xmas</text><text x="380" y="485" fill="#ffffff" font-size="16" font-family="sans-serif">$100</text><text x="550" y="600" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold" font-family="sans-serif">HYSA</text><text x="550" y="625" text-anchor="middle" fill="#ffd700" font-size="18" font-family="sans-serif">4.5% APY</text><rect x="80" y="950" width="940" height="100" fill="#10b981" opacity="0.15" stroke="#10b981" stroke-width="2" rx="8"/><text x="550" y="990" text-anchor="middle" fill="#10b981" font-size="20" font-weight="bold" font-family="sans-serif">April: $620 brake job</text><text x="550" y="1020" text-anchor="middle" fill="#ffffff" font-size="18" font-family="sans-serif">Pulled from Car bucket. Other buckets untouched. Emergency fund untouched.</text></svg>`,
          caption: "One account holds all sinking funds; software tracks named buckets so balances never blur together."
        }
      },
      {
        type: "quiz",
        title: "Quick Check",
        content: `Test the formula and the philosophy.`,
        question: "Your dog's annual vet care averages $720, and you currently put $0/month aside, paying with a credit card when the bill hits. What's the correct sinking fund transfer, and where should it live?",
        options: [
          { text: "$60/month transferred to checking on the 1st", correct: false },
          { text: "$60/month transferred to a high-yield savings account, tracked as a 'Vet' bucket", correct: true },
          { text: "$720/month for one month, then stop", correct: false },
          { text: "Nothing — keep using the credit card and pay it off each month", correct: false }
        ],
        explanation: "**$720 ÷ 12 = $60/month**. It belongs in a **high-yield savings account** (not checking, where it'll get spent by accident), and a budgeting app/spreadsheet tracks it as a labeled bucket. Paying credit cards 'in full each month' still leaves you exposed if the bill lands the same week as rent. Sinking funds remove the timing risk entirely.",
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="80" text-anchor="middle" fill="#ffd700" font-size="40" font-weight="bold" font-family="sans-serif">Quick Check</text><text x="550" y="130" text-anchor="middle" fill="#888" font-size="22" font-family="sans-serif">Annual ÷ 12, held in HYSA</text><rect x="200" y="220" width="700" height="120" fill="#6366f1" opacity="0.2" stroke="#6366f1" stroke-width="2" rx="8"/><text x="550" y="270" text-anchor="middle" fill="#ffffff" font-size="26" font-family="sans-serif">Vet care annual: $720</text><text x="550" y="310" text-anchor="middle" fill="#ffd700" font-size="22" font-family="sans-serif">$720 ÷ 12 = $60/month</text><line x1="550" y1="370" x2="550" y2="430" stroke="#ffd700" stroke-width="3"/><polygon points="540,425 550,445 560,425" fill="#ffd700"/><rect x="200" y="460" width="700" height="120" fill="#10b981" opacity="0.2" stroke="#10b981" stroke-width="2" rx="8"/><text x="550" y="510" text-anchor="middle" fill="#10b981" font-size="24" font-weight="bold" font-family="sans-serif">High-Yield Savings</text><text x="550" y="550" text-anchor="middle" fill="#ffffff" font-size="20" font-family="sans-serif">Bucket labeled: "Vet"</text><line x1="550" y1="610" x2="550" y2="670" stroke="#ffd700" stroke-width="3"/><polygon points="540,665 550,685 560,665" fill="#ffd700"/><rect x="200" y="700" width="700" height="120" fill="#ffd700" opacity="0.2" stroke="#ffd700" stroke-width="2" rx="8"/><text x="550" y="750" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold" font-family="sans-serif">When bill arrives:</text><text x="550" y="790" text-anchor="middle" fill="#ffffff" font-size="20" font-family="sans-serif">Move bucket -&gt; checking. Pay cash.</text><text x="550" y="920" text-anchor="middle" fill="#ffffff" font-size="18" font-family="sans-serif">Checking = today's bills. HYSA = future's bills.</text><text x="550" y="960" text-anchor="middle" fill="#888" font-size="16" font-family="sans-serif">Mixing them is why people raid savings.</text></svg>`,
          caption: "Formula plus placement: do both, or the sinking fund won't survive temptation."
        }
      },
      {
        type: "application",
        title: "Build Your Sinking Fund List Tonight",
        content: `**A 20-minute exercise. Do it before you close the app.**

1. **Open your last 12 months of statements.** Bank, credit card, everything. Look for any expense over $200 that wasn't a regular monthly bill.

2. **List every irregular expense.** Car repairs, insurance premiums paid 6-month or annual, holiday gifts, birthdays, vacations, vet, kids' sports fees, school supplies, Amazon Prime renewal, software subscriptions, property tax, HOA, gym annual, Costco membership.

3. **Total each category for the year, then divide by 12.** Round up 15%.

4. **Open (or use existing) high-yield savings account.** Ally, Marcus, Wealthfront, SoFi — anything paying ≥4% APY.

5. **Automate the transfer for the day after payday.** Sinking funds that wait for a "decision" don't survive month two.

6. **Track buckets** in a free spreadsheet or YNAB. One row per category, one column for current balance.

When the first irregular expense hits and you pay cash with zero panic, you'll never go back.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="40" font-weight="bold" font-family="sans-serif">Tonight's 20-Minute Setup</text><text x="550" y="115" text-anchor="middle" fill="#888" font-size="22" font-family="sans-serif">Six steps from chaos to calm</text><circle cx="150" cy="220" r="40" fill="#6366f1"/><text x="150" y="232" text-anchor="middle" fill="#ffffff" font-size="32" font-weight="bold" font-family="sans-serif">1</text><text x="220" y="215" fill="#ffd700" font-size="22" font-weight="bold" font-family="sans-serif">Pull 12 months of statements</text><text x="220" y="245" fill="#ffffff" font-size="18" font-family="sans-serif">Bank + credit card. Flag anything over $200.</text><circle cx="150" cy="340" r="40" fill="#8b5cf6"/><text x="150" y="352" text-anchor="middle" fill="#ffffff" font-size="32" font-weight="bold" font-family="sans-serif">2</text><text x="220" y="335" fill="#ffd700" font-size="22" font-weight="bold" font-family="sans-serif">List every irregular expense</text><text x="220" y="365" fill="#ffffff" font-size="18" font-family="sans-serif">Car, insurance, gifts, vet, subscriptions, tax...</text><circle cx="150" cy="460" r="40" fill="#0ea5e9"/><text x="150" y="472" text-anchor="middle" fill="#ffffff" font-size="32" font-weight="bold" font-family="sans-serif">3</text><text x="220" y="455" fill="#ffd700" font-size="22" font-weight="bold" font-family="sans-serif">Annual ÷ 12, round up 15%</text><text x="220" y="485" fill="#ffffff" font-size="18" font-family="sans-serif">Cushion absorbs price creep.</text><circle cx="150" cy="580" r="40" fill="#10b981"/><text x="150" y="592" text-anchor="middle" fill="#ffffff" font-size="32" font-weight="bold" font-family="sans-serif">4</text><text x="220" y="575" fill="#ffd700" font-size="22" font-weight="bold" font-family="sans-serif">Open HYSA (4%+ APY)</text><text x="220" y="605" fill="#ffffff" font-size="18" font-family="sans-serif">Ally, Marcus, Wealthfront, SoFi.</text><circle cx="150" cy="700" r="40" fill="#f59e0b"/><text x="150" y="712" text-anchor="middle" fill="#ffffff" font-size="32" font-weight="bold" font-family="sans-serif">5</text><text x="220" y="695" fill="#ffd700" font-size="22" font-weight="bold" font-family="sans-serif">Automate the day after payday</text><text x="220" y="725" fill="#ffffff" font-size="18" font-family="sans-serif">No decision = no skipped month.</text><circle cx="150" cy="820" r="40" fill="#ec4899"/><text x="150" y="832" text-anchor="middle" fill="#ffffff" font-size="32" font-weight="bold" font-family="sans-serif">6</text><text x="220" y="815" fill="#ffd700" font-size="22" font-weight="bold" font-family="sans-serif">Track buckets in a spreadsheet</text><text x="220" y="845" fill="#ffffff" font-size="18" font-family="sans-serif">One row per category, current balance.</text><rect x="100" y="920" width="900" height="120" fill="#10b981" opacity="0.15" stroke="#10b981" stroke-width="2" rx="8"/><text x="550" y="965" text-anchor="middle" fill="#10b981" font-size="22" font-weight="bold" font-family="sans-serif">The Payoff</text><text x="550" y="1000" text-anchor="middle" fill="#ffffff" font-size="18" font-family="sans-serif">First irregular bill you pay cash, zero panic =</text><text x="550" y="1025" text-anchor="middle" fill="#ffd700" font-size="18" font-weight="bold" font-family="sans-serif">the habit locks in forever.</text></svg>`,
          caption: "Six concrete steps; the whole setup fits in one evening and protects every irregular expense for years."
        }
      }
    ]
  },
  {
    id: "budgeting-track-lesson-5",
    title: "Cash-Flow Timing: Why the Calendar Matters More than the Monthly Total",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "Enough Money, Wrong Days",
        content: `Here's a paradox that crushes households: **the budget balances on paper, but the bank account doesn't.** Income exceeds expenses for the month. Yet around the 28th, the account is at $42 and the rent hits on the 1st.

The problem isn't the monthly total. The problem is the **calendar**. Most paychecks land twice a month. Most bills cluster around the 1st or the 15th. If your big bills arrive *before* your paycheck does, you're forced into a cycle of overdraft fees, credit card swipes, and "I'll fix it next month" — except next month has the same calendar.

In this lesson: how to map your **pay cadence** against your **bill cadence**, what the **one-month-ahead buffer** actually means, and a household example of two earners making $98,000 who were chronically overdrawn until they fixed timing — without earning a single extra dollar.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="40" font-weight="bold" font-family="sans-serif">The Calendar Paradox</text><text x="550" y="115" text-anchor="middle" fill="#888" font-size="22" font-family="sans-serif">Right total, wrong days</text><text x="100" y="200" fill="#ffffff" font-size="20" font-weight="bold" font-family="sans-serif">Account balance over the month:</text><line x1="100" y1="600" x2="1000" y2="600" stroke="#888" stroke-width="2"/><line x1="100" y1="280" x2="100" y2="900" stroke="#888" stroke-width="2"/><text x="80" y="290" text-anchor="end" fill="#888" font-size="16" font-family="sans-serif">$3000</text><text x="80" y="450" text-anchor="end" fill="#888" font-size="16" font-family="sans-serif">$1500</text><text x="80" y="605" text-anchor="end" fill="#888" font-size="16" font-family="sans-serif">$0</text><text x="80" y="760" text-anchor="end" fill="#888" font-size="16" font-family="sans-serif">-$500</text><text x="100" y="930" fill="#888" font-size="16" font-family="sans-serif">1</text><text x="250" y="930" fill="#888" font-size="16" font-family="sans-serif">7</text><text x="400" y="930" fill="#888" font-size="16" font-family="sans-serif">15</text><text x="700" y="930" fill="#888" font-size="16" font-family="sans-serif">22</text><text x="980" y="930" fill="#888" font-size="16" font-family="sans-serif">30</text><polyline points="100,750 100,400 250,380 400,250 400,500 550,490 700,450 850,520 1000,720" fill="none" stroke="#ef4444" stroke-width="3"/><circle cx="100" cy="750" r="6" fill="#ef4444"/><circle cx="400" cy="250" r="6" fill="#10b981"/><circle cx="1000" cy="720" r="6" fill="#ef4444"/><text x="100" y="785" text-anchor="middle" fill="#ef4444" font-size="14" font-family="sans-serif">Rent hits</text><text x="400" y="235" text-anchor="middle" fill="#10b981" font-size="14" font-family="sans-serif">Payday</text><text x="1000" y="755" text-anchor="middle" fill="#ef4444" font-size="14" font-family="sans-serif">Overdraft</text><rect x="100" y="970" width="900" height="80" fill="#f59e0b" opacity="0.2" stroke="#f59e0b" stroke-width="2" rx="8"/><text x="550" y="1005" text-anchor="middle" fill="#f59e0b" font-size="20" font-weight="bold" font-family="sans-serif">Month total: +$200 surplus</text><text x="550" y="1035" text-anchor="middle" fill="#ffffff" font-size="18" font-family="sans-serif">But the bank account still hit zero on day 30.</text></svg>`,
          caption: "A surplus on the spreadsheet, an overdraft in the bank — purely a timing problem."
        }
      },
      {
        type: "concept",
        title: "Map Your Pay vs. Your Bills",
        content: `Four common **pay cadences**:
- **Weekly** (52 paychecks/yr) — every Friday
- **Biweekly** (26 paychecks/yr) — every other Friday; two months a year you get a "bonus" 3rd check
- **Semi-monthly** (24 paychecks/yr) — 1st and 15th, predictable dates
- **Monthly** (12 paychecks/yr) — one lump on the same date

Two common **bill clusters**:
- **Month-start (1st–5th)**: rent/mortgage, daycare, gym, most subscriptions
- **Month-end (25th–30th)**: utilities, credit cards, cell phone

**Mismatch risk**: biweekly pay + month-start bills = you might get paid on the 30th *or* on the 13th depending on the month. The month where the only check before rent landed on the 18th of the prior month is the month you crash.

**Fix #1**: Move what you can. Most lenders, utilities, and subscriptions will change due dates on request. Aim for bills to land **3–5 days after** a paycheck. Fix #2 (next page) is the real solution: the one-month-ahead buffer.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="60" text-anchor="middle" fill="#ffd700" font-size="38" font-weight="bold" font-family="sans-serif">Pay vs. Bill Calendar</text><text x="550" y="105" text-anchor="middle" fill="#888" font-size="20" font-family="sans-serif">Biweekly pay, month-start bills</text><text x="100" y="180" fill="#10b981" font-size="22" font-weight="bold" font-family="sans-serif">Paydays (green)</text><text x="600" y="180" fill="#ef4444" font-size="22" font-weight="bold" font-family="sans-serif">Bills (red)</text><g font-family="sans-serif"><rect x="80" y="220" width="60" height="60" fill="#ffffff" opacity="0.08" stroke="#888"/><text x="110" y="258" text-anchor="middle" fill="#ffffff" font-size="20">1</text><rect x="140" y="220" width="60" height="60" fill="#ef4444" opacity="0.7"/><text x="170" y="258" text-anchor="middle" fill="#ffffff" font-size="20" font-weight="bold">2</text><rect x="200" y="220" width="60" height="60" fill="#ffffff" opacity="0.08" stroke="#888"/><text x="230" y="258" text-anchor="middle" fill="#ffffff" font-size="20">3</text><rect x="260" y="220" width="60" height="60" fill="#ef4444" opacity="0.7"/><text x="290" y="258" text-anchor="middle" fill="#ffffff" font-size="20" font-weight="bold">4</text><rect x="320" y="220" width="60" height="60" fill="#10b981" opacity="0.8"/><text x="350" y="258" text-anchor="middle" fill="#ffffff" font-size="20" font-weight="bold">5</text><rect x="380" y="220" width="60" height="60" fill="#ffffff" opacity="0.08" stroke="#888"/><text x="410" y="258" text-anchor="middle" fill="#ffffff" font-size="20">6</text><rect x="440" y="220" width="60" height="60" fill="#ffffff" opacity="0.08" stroke="#888"/><text x="470" y="258" text-anchor="middle" fill="#ffffff" font-size="20">7</text></g><text x="80" y="320" fill="#ef4444" font-size="18" font-family="sans-serif">Day 2: Rent $1500 hits BEFORE Day 5 paycheck</text><text x="80" y="345" fill="#ef4444" font-size="18" font-family="sans-serif">Day 4: Daycare $800 also before paycheck</text><text x="100" y="430" fill="#ffd700" font-size="24" font-weight="bold" font-family="sans-serif">The 4 pay cadences</text><rect x="80" y="460" width="940" height="50" fill="#6366f1" opacity="0.2"/><text x="120" y="492" fill="#ffffff" font-size="20" font-family="sans-serif">Weekly</text><text x="500" y="492" fill="#ffffff" font-size="18" font-family="sans-serif">52/yr</text><text x="700" y="492" fill="#10b981" font-size="18" font-family="sans-serif">Easiest to align</text><rect x="80" y="510" width="940" height="50" fill="#6366f1" opacity="0.3"/><text x="120" y="542" fill="#ffffff" font-size="20" font-family="sans-serif">Biweekly</text><text x="500" y="542" fill="#ffffff" font-size="18" font-family="sans-serif">26/yr + 2 "bonus" months</text><text x="700" y="542" fill="#f59e0b" font-size="18" font-family="sans-serif">Date drifts</text><rect x="80" y="560" width="940" height="50" fill="#6366f1" opacity="0.2"/><text x="120" y="592" fill="#ffffff" font-size="20" font-family="sans-serif">Semi-monthly</text><text x="500" y="592" fill="#ffffff" font-size="18" font-family="sans-serif">24/yr, fixed 1st &amp; 15th</text><text x="700" y="592" fill="#10b981" font-size="18" font-family="sans-serif">Predictable</text><rect x="80" y="610" width="940" height="50" fill="#6366f1" opacity="0.3"/><text x="120" y="642" fill="#ffffff" font-size="20" font-family="sans-serif">Monthly</text><text x="500" y="642" fill="#ffffff" font-size="18" font-family="sans-serif">12/yr</text><text x="700" y="642" fill="#ef4444" font-size="18" font-family="sans-serif">Hardest, needs buffer</text><rect x="80" y="720" width="940" height="200" fill="#ffd700" opacity="0.12" stroke="#ffd700" stroke-width="2" rx="8"/><text x="550" y="770" text-anchor="middle" fill="#ffd700" font-size="24" font-weight="bold" font-family="sans-serif">Fix #1: Move the due dates</text><text x="550" y="810" text-anchor="middle" fill="#ffffff" font-size="20" font-family="sans-serif">Call lenders/utilities/subscriptions.</text><text x="550" y="840" text-anchor="middle" fill="#ffffff" font-size="20" font-family="sans-serif">Aim: bills land 3-5 days AFTER a paycheck.</text><text x="550" y="890" text-anchor="middle" fill="#888" font-size="18" font-family="sans-serif">Free, takes one phone call each.</text></svg>`,
          caption: "Pay cadence × bill cluster determines whether the month is smooth or panicked."
        }
      },
      {
        type: "example",
        title: "Jordan & Sam: $98K, Always Overdrawn",
        content: `**Jordan and Sam**: married, no kids, combined take-home $6,300/mo ($75,600/yr after tax). Monthly expenses $5,800. On paper: $500 monthly surplus. Reality: **eight overdraft fees in the last year** ($35 each = $280), plus three credit card cash advances at 28% APR.

The breakdown:
- Jordan: biweekly, paid Fridays
- Sam: monthly, paid on the **last business day**
- Rent ($1,950) + daycare ($1,200) + car loan ($420) all due by the **5th**

The 5th hit before either paycheck about half the time. They were covering month-start with last month's leftover — which by definition was tiny.

**The fix took 90 days, not new income**:
1. Moved car payment to the 20th (one call, free)
2. Moved 3 subscriptions to mid-month
3. Banked one full extra biweekly check into a buffer
4. Once buffer hit $3,000, used it to fund the **next** month's bills

Now: paychecks land *in* the buffer; bills get paid *from* the buffer. They are now **one month ahead**. Overdrafts: zero.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="60" text-anchor="middle" fill="#ffd700" font-size="38" font-weight="bold" font-family="sans-serif">Jordan &amp; Sam: 90-Day Fix</text><text x="550" y="105" text-anchor="middle" fill="#888" font-size="20" font-family="sans-serif">$98K, always overdrawn -&gt; one month ahead</text><rect x="60" y="160" width="500" height="380" fill="#ef4444" opacity="0.12" stroke="#ef4444" stroke-width="3" rx="10"/><text x="310" y="200" text-anchor="middle" fill="#ef4444" font-size="24" font-weight="bold" font-family="sans-serif">BEFORE</text><text x="90" y="245" fill="#ffffff" font-size="18" font-family="sans-serif">Take-home: $6,300</text><text x="90" y="280" fill="#ffffff" font-size="18" font-family="sans-serif">Expenses: $5,800</text><text x="90" y="315" fill="#ffffff" font-size="18" font-family="sans-serif">Paper surplus: $500</text><line x1="80" y1="340" x2="540" y2="340" stroke="#888"/><text x="90" y="375" fill="#ef4444" font-size="18" font-family="sans-serif">Rent + daycare + car: due by 5th</text><text x="90" y="410" fill="#ef4444" font-size="18" font-family="sans-serif">Sam paid last business day</text><text x="90" y="445" fill="#ef4444" font-size="18" font-family="sans-serif">Jordan biweekly Friday drift</text><text x="90" y="495" fill="#ffd700" font-size="20" font-weight="bold" font-family="sans-serif">8 overdrafts/yr = $280</text><text x="90" y="525" fill="#ffd700" font-size="18" font-family="sans-serif">3 cash advances @ 28%</text><rect x="580" y="160" width="460" height="380" fill="#10b981" opacity="0.12" stroke="#10b981" stroke-width="3" rx="10"/><text x="810" y="200" text-anchor="middle" fill="#10b981" font-size="24" font-weight="bold" font-family="sans-serif">AFTER (90 days)</text><text x="610" y="245" fill="#ffffff" font-size="18" font-family="sans-serif">Take-home: $6,300 (same)</text><text x="610" y="280" fill="#ffffff" font-size="18" font-family="sans-serif">Expenses: $5,800 (same)</text><text x="610" y="315" fill="#ffffff" font-size="18" font-family="sans-serif">Paper surplus: $500 (same)</text><line x1="600" y1="340" x2="1020" y2="340" stroke="#888"/><text x="610" y="375" fill="#10b981" font-size="18" font-family="sans-serif">Car moved to 20th</text><text x="610" y="410" fill="#10b981" font-size="18" font-family="sans-serif">3 subs moved to mid-month</text><text x="610" y="445" fill="#10b981" font-size="18" font-family="sans-serif">$3,000 buffer banked</text><text x="610" y="495" fill="#ffd700" font-size="20" font-weight="bold" font-family="sans-serif">0 overdrafts</text><text x="610" y="525" fill="#ffd700" font-size="18" font-family="sans-serif">0 cash advances</text><text x="550" y="610" text-anchor="middle" fill="#ffd700" font-size="26" font-weight="bold" font-family="sans-serif">The 4-Step Sequence</text><rect x="80" y="650" width="940" height="60" fill="#6366f1" opacity="0.3" rx="6"/><text x="120" y="690" fill="#ffffff" font-size="20" font-family="sans-serif">1. Call lenders -&gt; move due dates 3-5 days after a paycheck (free)</text><rect x="80" y="720" width="940" height="60" fill="#8b5cf6" opacity="0.3" rx="6"/><text x="120" y="760" fill="#ffffff" font-size="20" font-family="sans-serif">2. Move 3 subscriptions to mid-month</text><rect x="80" y="790" width="940" height="60" fill="#0ea5e9" opacity="0.3" rx="6"/><text x="120" y="830" fill="#ffffff" font-size="20" font-family="sans-serif">3. Bank one full biweekly check as buffer ($1,500-3,000)</text><rect x="80" y="860" width="940" height="60" fill="#10b981" opacity="0.3" rx="6"/><text x="120" y="900" fill="#ffffff" font-size="20" font-family="sans-serif">4. Use buffer to fund NEXT month's bills -&gt; one month ahead</text><text x="550" y="980" text-anchor="middle" fill="#ffffff" font-size="20" font-family="sans-serif">Same income. Same expenses. Different calendar.</text></svg>`,
          caption: "Jordan and Sam's overdrafts went to zero by fixing timing alone — no raise, no cuts."
        }
      },
      {
        type: "quiz",
        title: "Quick Check",
        content: `Identify the real problem.`,
        question: "A household nets $5,000/month and spends $4,700/month — clearly profitable on paper. Yet they get overdraft fees almost every month. Which fix addresses the root cause?",
        options: [
          { text: "Cut $300 more from expenses each month", correct: false },
          { text: "Find a side hustle to earn more", correct: false },
          { text: "Build a one-month buffer so paychecks fund next month's bills, not this month's", correct: true },
          { text: "Move all savings into checking so the balance looks bigger", correct: false }
        ],
        explanation: "The math already works — income exceeds spending by $300/mo. The problem is purely **timing**: bills are hitting before paychecks. Cutting more doesn't help if rent is still due on the 1st and pay lands on the 5th. The fix is a **one-month-ahead buffer**: enough cash sitting in checking that *this* month's bills are paid from *last* month's earnings. Once you're a month ahead, paycheck dates stop mattering.",
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="80" text-anchor="middle" fill="#ffd700" font-size="38" font-weight="bold" font-family="sans-serif">One Month Ahead</text><text x="550" y="130" text-anchor="middle" fill="#888" font-size="22" font-family="sans-serif">The structural fix</text><rect x="80" y="200" width="400" height="500" fill="#ef4444" opacity="0.15" stroke="#ef4444" stroke-width="3" rx="10"/><text x="280" y="240" text-anchor="middle" fill="#ef4444" font-size="22" font-weight="bold" font-family="sans-serif">Living paycheck to paycheck</text><text x="280" y="320" text-anchor="middle" fill="#ffffff" font-size="18" font-family="sans-serif">June paycheck</text><text x="280" y="345" text-anchor="middle" fill="#ffd700" font-size="16" font-family="sans-serif">|</text><text x="280" y="370" text-anchor="middle" fill="#ffffff" font-size="18" font-family="sans-serif">pays June bills</text><text x="280" y="440" text-anchor="middle" fill="#888" font-size="18" font-family="sans-serif">Race the calendar</text><text x="280" y="500" text-anchor="middle" fill="#ef4444" font-size="20" font-weight="bold" font-family="sans-serif">Any date mismatch =</text><text x="280" y="530" text-anchor="middle" fill="#ef4444" font-size="20" font-weight="bold" font-family="sans-serif">overdraft</text><rect x="620" y="200" width="400" height="500" fill="#10b981" opacity="0.15" stroke="#10b981" stroke-width="3" rx="10"/><text x="820" y="240" text-anchor="middle" fill="#10b981" font-size="22" font-weight="bold" font-family="sans-serif">One month ahead</text><text x="820" y="320" text-anchor="middle" fill="#ffffff" font-size="18" font-family="sans-serif">June paycheck</text><text x="820" y="345" text-anchor="middle" fill="#ffd700" font-size="16" font-family="sans-serif">|</text><text x="820" y="370" text-anchor="middle" fill="#ffffff" font-size="18" font-family="sans-serif">funds JULY bills</text><text x="820" y="440" text-anchor="middle" fill="#888" font-size="18" font-family="sans-serif">No race</text><text x="820" y="500" text-anchor="middle" fill="#10b981" font-size="20" font-weight="bold" font-family="sans-serif">Dates stop mattering</text><text x="820" y="530" text-anchor="middle" fill="#10b981" font-size="20" font-weight="bold" font-family="sans-serif">Sleep at night</text><text x="550" y="800" text-anchor="middle" fill="#ffffff" font-size="20" font-family="sans-serif">Buffer size = 1 month of total bills</text><text x="550" y="840" text-anchor="middle" fill="#ffffff" font-size="20" font-family="sans-serif">Build via tax refund, bonus, or 3-6 months</text><text x="550" y="880" text-anchor="middle" fill="#ffffff" font-size="20" font-family="sans-serif">of small extras going to the buffer first.</text></svg>`,
          caption: "Cutting expenses can't solve a timing problem; a buffer can."
        }
      },
      {
        type: "application",
        title: "Map Your Calendar This Weekend",
        content: `**A 30-minute exercise. You'll need a calendar app or a printed monthly grid.**

1. **List every paycheck for the next 60 days.** Exact dates. Include any side income.

2. **List every recurring bill.** Due date, amount, payee. Include subscriptions and minimums on debt.

3. **Plot both on one calendar.** Green dots for paydays, red dots for bills. The mismatch becomes obvious.

4. **Identify "danger windows."** Any stretch of 5+ days where bills hit but no paycheck arrives. These are your future overdraft dates.

5. **Make 3 due-date change calls.** Pick the bills due in your danger windows. Most lenders, utilities, and subscriptions will move dates for free if you ask. Aim for due dates **3–5 days after** a paycheck.

6. **Set the buffer goal.** Total your monthly bills. That's your target. Even **half a month** ($1,500 for most households) eliminates most overdrafts immediately. Build it from tax refunds, bonuses, or routing 100% of small surpluses to the buffer until full.

The day timing stops being a stressor is the day budgeting starts feeling easy.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="40" font-weight="bold" font-family="sans-serif">Weekend Calendar Map</text><text x="550" y="115" text-anchor="middle" fill="#888" font-size="22" font-family="sans-serif">30 minutes -&gt; permanent overdraft fix</text><text x="100" y="180" fill="#ffd700" font-size="22" font-weight="bold" font-family="sans-serif">Sample 30-day plot</text><g font-family="sans-serif"><rect x="100" y="220" width="120" height="80" fill="#10b981" opacity="0.7" rx="6"/><text x="160" y="252" text-anchor="middle" fill="#ffffff" font-size="16" font-weight="bold">FRI 1</text><text x="160" y="278" text-anchor="middle" fill="#ffffff" font-size="14">Pay $1,575</text><rect x="240" y="220" width="120" height="80" fill="#ef4444" opacity="0.7" rx="6"/><text x="300" y="252" text-anchor="middle" fill="#ffffff" font-size="16" font-weight="bold">MON 4</text><text x="300" y="278" text-anchor="middle" fill="#ffffff" font-size="14">Rent $1,500</text><rect x="380" y="220" width="120" height="80" fill="#ef4444" opacity="0.7" rx="6"/><text x="440" y="252" text-anchor="middle" fill="#ffffff" font-size="16" font-weight="bold">WED 6</text><text x="440" y="278" text-anchor="middle" fill="#ffffff" font-size="14">Daycare $400</text><rect x="520" y="220" width="120" height="80" fill="#ef4444" opacity="0.7" rx="6"/><text x="580" y="252" text-anchor="middle" fill="#ffffff" font-size="16" font-weight="bold">FRI 8</text><text x="580" y="278" text-anchor="middle" fill="#ffffff" font-size="14">Car $420</text><rect x="660" y="220" width="120" height="80" fill="#f59e0b" opacity="0.7" rx="6"/><text x="720" y="252" text-anchor="middle" fill="#ffffff" font-size="16" font-weight="bold">SUN 10</text><text x="720" y="278" text-anchor="middle" fill="#ffffff" font-size="14">DANGER</text><rect x="800" y="220" width="120" height="80" fill="#10b981" opacity="0.7" rx="6"/><text x="860" y="252" text-anchor="middle" fill="#ffffff" font-size="16" font-weight="bold">FRI 15</text><text x="860" y="278" text-anchor="middle" fill="#ffffff" font-size="14">Pay $1,575</text></g><text x="100" y="360" fill="#ef4444" font-size="18" font-family="sans-serif">Danger window: 5 days between days 10-15, $0 cushion</text><text x="100" y="430" fill="#ffd700" font-size="24" font-weight="bold" font-family="sans-serif">6 Steps This Weekend</text><rect x="80" y="460" width="940" height="50" fill="#6366f1" opacity="0.3" rx="6"/><text x="120" y="492" fill="#ffffff" font-size="18" font-family="sans-serif">1. List all paychecks in next 60 days (exact dates)</text><rect x="80" y="515" width="940" height="50" fill="#8b5cf6" opacity="0.3" rx="6"/><text x="120" y="547" fill="#ffffff" font-size="18" font-family="sans-serif">2. List every recurring bill with date + amount</text><rect x="80" y="570" width="940" height="50" fill="#0ea5e9" opacity="0.3" rx="6"/><text x="120" y="602" fill="#ffffff" font-size="18" font-family="sans-serif">3. Plot both: green for pay, red for bills</text><rect x="80" y="625" width="940" height="50" fill="#f59e0b" opacity="0.3" rx="6"/><text x="120" y="657" fill="#ffffff" font-size="18" font-family="sans-serif">4. Circle danger windows (5+ days bills, no pay)</text><rect x="80" y="680" width="940" height="50" fill="#ec4899" opacity="0.3" rx="6"/><text x="120" y="712" fill="#ffffff" font-size="18" font-family="sans-serif">5. Make 3 due-date change calls (free)</text><rect x="80" y="735" width="940" height="50" fill="#10b981" opacity="0.3" rx="6"/><text x="120" y="767" fill="#ffffff" font-size="18" font-family="sans-serif">6. Set buffer goal = 1 month of bills</text><rect x="100" y="830" width="900" height="200" fill="#ffd700" opacity="0.12" stroke="#ffd700" stroke-width="2" rx="8"/><text x="550" y="870" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold" font-family="sans-serif">Bonus targets for the buffer:</text><text x="550" y="910" text-anchor="middle" fill="#ffffff" font-size="20" font-family="sans-serif">Tax refund. Annual bonus. The "3rd paycheck"</text><text x="550" y="945" text-anchor="middle" fill="#ffffff" font-size="20" font-family="sans-serif">that biweekly earners get twice a year.</text><text x="550" y="990" text-anchor="middle" fill="#10b981" font-size="20" font-weight="bold" font-family="sans-serif">Half a buffer ($1,500) kills most overdrafts.</text></svg>`,
          caption: "A simple paydays-vs-bills plot reveals every future overdraft date; three phone calls usually fixes them."
        }
      }
    ]
  },
  {
    id: "budgeting-track-lesson-6",
    title: "Couples & Budgets: Joint, Separate, or Yours-Mine-Ours",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "Money Is the #1 Fight",
        content: `Survey after survey lands on the same finding: **money is the leading source of conflict** in romantic relationships, and **financial incompatibility** is one of the strongest predictors of divorce. Yet most couples have never had a structured money conversation — they just default into whoever-pays-whatever and hope.

The good news: the conflict is rarely about money itself. It's about **mismatched mental models**. One person assumes "we share everything." The other assumes "I keep what I earn, you keep what you earn." Both are reasonable. Both can work. They just can't both be true *at the same time, unspoken*.

In this lesson: the three structures couples use (**full pool**, **fully separate**, and **hybrid**), what each handles well and badly, a pre-merge **money date** checklist, and a tested script for the first joint budget meeting that doesn't end in tears.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="80" text-anchor="middle" fill="#ffd700" font-size="42" font-weight="bold" font-family="sans-serif">Couples &amp; Budgets</text><text x="550" y="130" text-anchor="middle" fill="#888" font-size="22" font-family="sans-serif">The conflict is rarely about money</text><rect x="80" y="200" width="940" height="160" fill="#ef4444" opacity="0.12" stroke="#ef4444" stroke-width="2" rx="10"/><text x="550" y="250" text-anchor="middle" fill="#ef4444" font-size="24" font-weight="bold" font-family="sans-serif">The Stat Wall</text><text x="550" y="295" text-anchor="middle" fill="#ffffff" font-size="20" font-family="sans-serif">Money: #1 source of relationship conflict</text><text x="550" y="330" text-anchor="middle" fill="#ffffff" font-size="20" font-family="sans-serif">Financial incompatibility: top divorce predictor</text><text x="550" y="430" text-anchor="middle" fill="#ffd700" font-size="28" font-weight="bold" font-family="sans-serif">The actual problem:</text><text x="550" y="475" text-anchor="middle" fill="#ffffff" font-size="22" font-family="sans-serif">Mismatched, unspoken mental models</text><rect x="80" y="540" width="440" height="240" fill="#6366f1" opacity="0.2" stroke="#6366f1" stroke-width="2" rx="8"/><text x="300" y="585" text-anchor="middle" fill="#6366f1" font-size="22" font-weight="bold" font-family="sans-serif">Partner A's model:</text><text x="300" y="640" text-anchor="middle" fill="#ffffff" font-size="20" font-family="sans-serif">"We share everything."</text><text x="300" y="700" text-anchor="middle" fill="#888" font-size="18" font-family="sans-serif">Reasonable.</text><text x="300" y="740" text-anchor="middle" fill="#888" font-size="18" font-family="sans-serif">Often unspoken.</text><rect x="580" y="540" width="440" height="240" fill="#ec4899" opacity="0.2" stroke="#ec4899" stroke-width="2" rx="8"/><text x="800" y="585" text-anchor="middle" fill="#ec4899" font-size="22" font-weight="bold" font-family="sans-serif">Partner B's model:</text><text x="800" y="640" text-anchor="middle" fill="#ffffff" font-size="20" font-family="sans-serif">"I keep what I earn."</text><text x="800" y="700" text-anchor="middle" fill="#888" font-size="18" font-family="sans-serif">Also reasonable.</text><text x="800" y="740" text-anchor="middle" fill="#888" font-size="18" font-family="sans-serif">Also unspoken.</text><rect x="80" y="850" width="940" height="160" fill="#10b981" opacity="0.15" stroke="#10b981" stroke-width="2" rx="10"/><text x="550" y="900" text-anchor="middle" fill="#10b981" font-size="24" font-weight="bold" font-family="sans-serif">The Fix</text><text x="550" y="945" text-anchor="middle" fill="#ffffff" font-size="20" font-family="sans-serif">Pick a structure, say it out loud, write it down.</text><text x="550" y="985" text-anchor="middle" fill="#ffffff" font-size="20" font-family="sans-serif">Any of the three works. Silence works for none.</text></svg>`,
          caption: "Conflict comes from unspoken models, not the dollars themselves."
        }
      },
      {
        type: "concept",
        title: "The Three Structures",
        content: `**1. Full pool ("joint everything")**
All income lands in joint accounts. All bills pay from joint. Each partner may get a small "no-questions" personal allowance. **Best for**: aligned values, similar incomes, long-married couples. **Risks**: feels controlling if one partner earns far more; vulnerable if one partner has poor money habits.

**2. Fully separate**
Each keeps their own accounts. Shared expenses split 50/50 or proportionally. **Best for**: second marriages with kids from prior relationships, big income gaps with strong autonomy values, early-stage cohabitation. **Risks**: hard to plan jointly (retirement, house), invisible inequalities, "who paid for Costco?" friction.

**3. Hybrid: Yours-Mine-Ours**
Three accounts: joint for shared expenses + savings, two personal for individual spending. Each contributes to the joint **proportionally to income** (if A earns $80K and B earns $40K, A contributes 67%, B contributes 33%). **Best for**: most modern couples — combines fairness, autonomy, and shared goals. **Risks**: more accounts to track; requires honest income disclosure.

There is no "right" structure. There is only the structure you both **chose deliberately** vs. the one you slid into.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="60" text-anchor="middle" fill="#ffd700" font-size="38" font-weight="bold" font-family="sans-serif">Three Structures</text><text x="550" y="105" text-anchor="middle" fill="#888" font-size="20" font-family="sans-serif">Pick deliberately. Any works; silence doesn't.</text><rect x="60" y="150" width="320" height="820" fill="#6366f1" opacity="0.12" stroke="#6366f1" stroke-width="3" rx="10"/><text x="220" y="195" text-anchor="middle" fill="#6366f1" font-size="22" font-weight="bold" font-family="sans-serif">1. Full Pool</text><text x="220" y="225" text-anchor="middle" fill="#888" font-size="16" font-family="sans-serif">Joint everything</text><circle cx="220" cy="310" r="60" fill="#6366f1" opacity="0.5"/><text x="220" y="318" text-anchor="middle" fill="#ffffff" font-size="18" font-weight="bold" font-family="sans-serif">JOINT</text><text x="80" y="410" fill="#ffd700" font-size="16" font-weight="bold" font-family="sans-serif">Best for:</text><text x="80" y="440" fill="#ffffff" font-size="15" font-family="sans-serif">- Aligned values</text><text x="80" y="465" fill="#ffffff" font-size="15" font-family="sans-serif">- Similar incomes</text><text x="80" y="490" fill="#ffffff" font-size="15" font-family="sans-serif">- Long-married</text><text x="80" y="540" fill="#ef4444" font-size="16" font-weight="bold" font-family="sans-serif">Risks:</text><text x="80" y="570" fill="#ffffff" font-size="15" font-family="sans-serif">- Controlling if</text><text x="80" y="595" fill="#ffffff" font-size="15" font-family="sans-serif">  income unequal</text><text x="80" y="620" fill="#ffffff" font-size="15" font-family="sans-serif">- Bad habits</text><text x="80" y="645" fill="#ffffff" font-size="15" font-family="sans-serif">  hurt both</text><text x="80" y="710" fill="#10b981" font-size="16" font-weight="bold" font-family="sans-serif">Allowance:</text><text x="80" y="740" fill="#ffffff" font-size="15" font-family="sans-serif">Each gets small</text><text x="80" y="765" fill="#ffffff" font-size="15" font-family="sans-serif">"no-questions"</text><text x="80" y="790" fill="#ffffff" font-size="15" font-family="sans-serif">personal sum</text><rect x="395" y="150" width="320" height="820" fill="#ec4899" opacity="0.12" stroke="#ec4899" stroke-width="3" rx="10"/><text x="555" y="195" text-anchor="middle" fill="#ec4899" font-size="22" font-weight="bold" font-family="sans-serif">2. Fully Separate</text><text x="555" y="225" text-anchor="middle" fill="#888" font-size="16" font-family="sans-serif">Split shared bills</text><circle cx="500" cy="310" r="50" fill="#ec4899" opacity="0.5"/><text x="500" y="318" text-anchor="middle" fill="#ffffff" font-size="16" font-weight="bold" font-family="sans-serif">A</text><circle cx="610" cy="310" r="50" fill="#ec4899" opacity="0.5"/><text x="610" y="318" text-anchor="middle" fill="#ffffff" font-size="16" font-weight="bold" font-family="sans-serif">B</text><text x="415" y="410" fill="#ffd700" font-size="16" font-weight="bold" font-family="sans-serif">Best for:</text><text x="415" y="440" fill="#ffffff" font-size="15" font-family="sans-serif">- 2nd marriages</text><text x="415" y="465" fill="#ffffff" font-size="15" font-family="sans-serif">- Big income gap</text><text x="415" y="490" fill="#ffffff" font-size="15" font-family="sans-serif">- Early dating</text><text x="415" y="540" fill="#ef4444" font-size="16" font-weight="bold" font-family="sans-serif">Risks:</text><text x="415" y="570" fill="#ffffff" font-size="15" font-family="sans-serif">- Joint planning</text><text x="415" y="595" fill="#ffffff" font-size="15" font-family="sans-serif">  hard</text><text x="415" y="620" fill="#ffffff" font-size="15" font-family="sans-serif">- Hidden gaps</text><text x="415" y="645" fill="#ffffff" font-size="15" font-family="sans-serif">- "Who paid?"</text><text x="415" y="670" fill="#ffffff" font-size="15" font-family="sans-serif">  friction</text><text x="415" y="730" fill="#10b981" font-size="16" font-weight="bold" font-family="sans-serif">Split rule:</text><text x="415" y="760" fill="#ffffff" font-size="15" font-family="sans-serif">50/50 or</text><text x="415" y="785" fill="#ffffff" font-size="15" font-family="sans-serif">proportional</text><rect x="730" y="150" width="320" height="820" fill="#10b981" opacity="0.12" stroke="#10b981" stroke-width="3" rx="10"/><text x="890" y="195" text-anchor="middle" fill="#10b981" font-size="22" font-weight="bold" font-family="sans-serif">3. Hybrid (YMO)</text><text x="890" y="225" text-anchor="middle" fill="#888" font-size="16" font-family="sans-serif">Yours-Mine-Ours</text><circle cx="820" cy="290" r="40" fill="#10b981" opacity="0.5"/><text x="820" y="298" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="bold" font-family="sans-serif">MINE</text><circle cx="960" cy="290" r="40" fill="#10b981" opacity="0.5"/><text x="960" y="298" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="bold" font-family="sans-serif">YOURS</text><circle cx="890" cy="370" r="50" fill="#10b981" opacity="0.7"/><text x="890" y="378" text-anchor="middle" fill="#ffffff" font-size="16" font-weight="bold" font-family="sans-serif">OURS</text><text x="750" y="460" fill="#ffd700" font-size="16" font-weight="bold" font-family="sans-serif">Best for:</text><text x="750" y="490" fill="#ffffff" font-size="15" font-family="sans-serif">Most modern</text><text x="750" y="515" fill="#ffffff" font-size="15" font-family="sans-serif">couples</text><text x="750" y="555" fill="#ffffff" font-size="15" font-family="sans-serif">- Fairness +</text><text x="750" y="580" fill="#ffffff" font-size="15" font-family="sans-serif">- Autonomy +</text><text x="750" y="605" fill="#ffffff" font-size="15" font-family="sans-serif">- Shared goals</text><text x="750" y="660" fill="#ef4444" font-size="16" font-weight="bold" font-family="sans-serif">Risks:</text><text x="750" y="690" fill="#ffffff" font-size="15" font-family="sans-serif">- More accounts</text><text x="750" y="715" fill="#ffffff" font-size="15" font-family="sans-serif">- Needs honest</text><text x="750" y="740" fill="#ffffff" font-size="15" font-family="sans-serif">  income share</text><text x="750" y="790" fill="#ffd700" font-size="16" font-weight="bold" font-family="sans-serif">Proportional:</text><text x="750" y="820" fill="#ffffff" font-size="15" font-family="sans-serif">$80K + $40K =</text><text x="750" y="845" fill="#ffffff" font-size="15" font-family="sans-serif">67% / 33% split</text><text x="550" y="1030" text-anchor="middle" fill="#888" font-size="18" font-family="sans-serif">No "right" answer — only deliberate vs. drifted-into.</text></svg>`,
          caption: "Three structures, each with clear strengths; the worst pick is the one no one named out loud."
        }
      },
      {
        type: "example",
        title: "The First Money Date: Checklist & Script",
        content: `**Maya and Devon** — engaged, moving in together. They scheduled a 90-minute "money date" with takeout and no phones. The checklist they used:

**Disclose (each, alone in advance, then share):**
1. Current income (gross + net)
2. All accounts and rough balances
3. All debts (type, balance, interest rate, minimum)
4. Credit score
5. Any financial obligations to family (supporting a parent, etc.)
6. Money baggage from childhood ("we never had enough," "money was a fight")

**Decide together:**
7. Which structure (1, 2, or 3 from previous card)?
8. What counts as "shared"? Rent, groceries, utilities, vacations, gifts to each other's families?
9. **No-ask threshold** — biggest personal purchase you can make solo. Common: $200.
10. Monthly money meeting cadence — same day each month, 30 minutes.

**Their opening script** (verbatim, from a therapist):
*"I want us to be a team about money. I'm going to share everything honestly, even the embarrassing parts, because hiding it will cost us more than telling will. Can we agree no one is in trouble for what they share tonight?"*

That sentence prevents 80% of first-meeting disasters.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="60" text-anchor="middle" fill="#ffd700" font-size="38" font-weight="bold" font-family="sans-serif">The First Money Date</text><text x="550" y="105" text-anchor="middle" fill="#888" font-size="20" font-family="sans-serif">90 minutes, takeout, no phones</text><rect x="60" y="150" width="500" height="500" fill="#6366f1" opacity="0.12" stroke="#6366f1" stroke-width="2" rx="10"/><text x="310" y="195" text-anchor="middle" fill="#6366f1" font-size="22" font-weight="bold" font-family="sans-serif">DISCLOSE (each)</text><text x="80" y="245" fill="#ffd700" font-size="18" font-weight="bold" font-family="sans-serif">1.</text><text x="115" y="245" fill="#ffffff" font-size="17" font-family="sans-serif">Income: gross + net</text><text x="80" y="285" fill="#ffd700" font-size="18" font-weight="bold" font-family="sans-serif">2.</text><text x="115" y="285" fill="#ffffff" font-size="17" font-family="sans-serif">All accounts + balances</text><text x="80" y="325" fill="#ffd700" font-size="18" font-weight="bold" font-family="sans-serif">3.</text><text x="115" y="325" fill="#ffffff" font-size="17" font-family="sans-serif">All debts (type/rate/min)</text><text x="80" y="365" fill="#ffd700" font-size="18" font-weight="bold" font-family="sans-serif">4.</text><text x="115" y="365" fill="#ffffff" font-size="17" font-family="sans-serif">Credit score</text><text x="80" y="405" fill="#ffd700" font-size="18" font-weight="bold" font-family="sans-serif">5.</text><text x="115" y="405" fill="#ffffff" font-size="17" font-family="sans-serif">Family obligations</text><text x="80" y="445" fill="#ffd700" font-size="18" font-weight="bold" font-family="sans-serif">6.</text><text x="115" y="445" fill="#ffffff" font-size="17" font-family="sans-serif">Childhood money baggage</text><rect x="80" y="490" width="460" height="140" fill="#ffd700" opacity="0.1" stroke="#ffd700" stroke-width="1" rx="6"/><text x="310" y="525" text-anchor="middle" fill="#ffd700" font-size="18" font-weight="bold" font-family="sans-serif">Pro tip:</text><text x="310" y="560" text-anchor="middle" fill="#ffffff" font-size="16" font-family="sans-serif">Write yours alone first.</text><text x="310" y="590" text-anchor="middle" fill="#ffffff" font-size="16" font-family="sans-serif">Trade pages. Then talk.</text><rect x="580" y="150" width="460" height="500" fill="#10b981" opacity="0.12" stroke="#10b981" stroke-width="2" rx="10"/><text x="810" y="195" text-anchor="middle" fill="#10b981" font-size="22" font-weight="bold" font-family="sans-serif">DECIDE (together)</text><text x="600" y="245" fill="#ffd700" font-size="18" font-weight="bold" font-family="sans-serif">7.</text><text x="635" y="245" fill="#ffffff" font-size="17" font-family="sans-serif">Structure: 1, 2, or 3</text><text x="600" y="285" fill="#ffd700" font-size="18" font-weight="bold" font-family="sans-serif">8.</text><text x="635" y="285" fill="#ffffff" font-size="17" font-family="sans-serif">What counts as "shared"</text><text x="600" y="325" fill="#ffd700" font-size="18" font-weight="bold" font-family="sans-serif">9.</text><text x="635" y="325" fill="#ffffff" font-size="17" font-family="sans-serif">No-ask threshold ($200?)</text><text x="600" y="365" fill="#ffd700" font-size="18" font-weight="bold" font-family="sans-serif">10.</text><text x="640" y="365" fill="#ffffff" font-size="17" font-family="sans-serif">Monthly meeting cadence</text><rect x="600" y="420" width="420" height="200" fill="#10b981" opacity="0.15" stroke="#10b981" stroke-width="1" rx="6"/><text x="810" y="455" text-anchor="middle" fill="#10b981" font-size="16" font-weight="bold" font-family="sans-serif">Examples:</text><text x="810" y="490" text-anchor="middle" fill="#ffffff" font-size="15" font-family="sans-serif">Shared: rent, groceries,</text><text x="810" y="515" text-anchor="middle" fill="#ffffff" font-size="15" font-family="sans-serif">utilities, vacations, gifts</text><text x="810" y="545" text-anchor="middle" fill="#ffffff" font-size="15" font-family="sans-serif">to in-laws</text><text x="810" y="580" text-anchor="middle" fill="#ffffff" font-size="15" font-family="sans-serif">Solo: personal hobbies,</text><text x="810" y="605" text-anchor="middle" fill="#ffffff" font-size="15" font-family="sans-serif">solo gifts to friends</text><rect x="80" y="700" width="940" height="280" fill="#ffd700" opacity="0.15" stroke="#ffd700" stroke-width="3" rx="10"/><text x="550" y="745" text-anchor="middle" fill="#ffd700" font-size="24" font-weight="bold" font-family="sans-serif">The Opening Script</text><text x="550" y="800" text-anchor="middle" fill="#ffffff" font-size="20" font-style="italic" font-family="sans-serif">"I want us to be a team about money.</text><text x="550" y="835" text-anchor="middle" fill="#ffffff" font-size="20" font-style="italic" font-family="sans-serif">I'm going to share everything honestly,</text><text x="550" y="870" text-anchor="middle" fill="#ffffff" font-size="20" font-style="italic" font-family="sans-serif">even the embarrassing parts.</text><text x="550" y="910" text-anchor="middle" fill="#ffffff" font-size="20" font-style="italic" font-family="sans-serif">Can we agree no one is in trouble</text><text x="550" y="945" text-anchor="middle" fill="#ffffff" font-size="20" font-style="italic" font-family="sans-serif">for what they share tonight?"</text><text x="550" y="1030" text-anchor="middle" fill="#888" font-size="18" font-family="sans-serif">That one sentence prevents 80% of first-meeting disasters.</text></svg>`,
          caption: "Maya and Devon's 10-item checklist plus the therapist-tested opening line."
        }
      },
      {
        type: "quiz",
        title: "Quick Check",
        content: `Apply the proportional rule.`,
        question: "Alex earns $90,000/year. Jamie earns $30,000/year. They use the hybrid 'Yours-Mine-Ours' structure with proportional contribution. Their joint expenses total $4,000/month. How much should each contribute to the joint account?",
        options: [
          { text: "Alex $2,000, Jamie $2,000 (50/50 is always fairest)", correct: false },
          { text: "Alex $3,000, Jamie $1,000 (75% / 25% by income share)", correct: true },
          { text: "Alex $4,000, Jamie $0 (higher earner pays everything)", correct: false },
          { text: "Both contribute whatever they feel like that month", correct: false }
        ],
        explanation: "Combined income is $120,000. Alex's share = $90K / $120K = **75%**. Jamie's share = $30K / $120K = **25%**. Applied to $4,000 of joint expenses: Alex contributes **$3,000**, Jamie contributes **$1,000**. Each then keeps the rest of their paycheck for personal accounts. This preserves the higher earner's larger personal spending power while making the joint contribution feel equitable — each partner gives up the **same percentage** of their income, not the same dollar amount.",
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="80" text-anchor="middle" fill="#ffd700" font-size="38" font-weight="bold" font-family="sans-serif">Proportional Math</text><text x="550" y="130" text-anchor="middle" fill="#888" font-size="22" font-family="sans-serif">Joint expense = $4,000</text><rect x="80" y="200" width="940" height="80" fill="#6366f1" opacity="0.2" rx="6"/><text x="120" y="250" fill="#ffd700" font-size="22" font-weight="bold" font-family="sans-serif">Step 1: Combined income</text><text x="700" y="250" fill="#ffffff" font-size="22" font-family="sans-serif">$90K + $30K = $120K</text><rect x="80" y="295" width="940" height="80" fill="#8b5cf6" opacity="0.25" rx="6"/><text x="120" y="345" fill="#ffd700" font-size="22" font-weight="bold" font-family="sans-serif">Step 2: Each share</text><text x="700" y="335" fill="#ffffff" font-size="18" font-family="sans-serif">Alex: 90/120 = 75%</text><text x="700" y="360" fill="#ffffff" font-size="18" font-family="sans-serif">Jamie: 30/120 = 25%</text><rect x="80" y="390" width="940" height="80" fill="#10b981" opacity="0.25" rx="6"/><text x="120" y="440" fill="#ffd700" font-size="22" font-weight="bold" font-family="sans-serif">Step 3: Apply to $4,000</text><text x="700" y="430" fill="#ffffff" font-size="18" font-family="sans-serif">Alex: $3,000</text><text x="700" y="455" fill="#ffffff" font-size="18" font-family="sans-serif">Jamie: $1,000</text><g transform="translate(0, 540)"><rect x="100" y="0" width="400" height="320" fill="#6366f1" opacity="0.15" stroke="#6366f1" stroke-width="3" rx="10"/><text x="300" y="40" text-anchor="middle" fill="#6366f1" font-size="24" font-weight="bold" font-family="sans-serif">Alex</text><text x="300" y="85" text-anchor="middle" fill="#ffffff" font-size="20" font-family="sans-serif">Income: $7,500/mo</text><line x1="130" y1="110" x2="470" y2="110" stroke="#888"/><text x="300" y="150" text-anchor="middle" fill="#ffd700" font-size="20" font-family="sans-serif">To joint: $3,000</text><text x="300" y="195" text-anchor="middle" fill="#ffffff" font-size="20" font-family="sans-serif">Keeps: $4,500</text><rect x="170" y="220" width="260" height="40" fill="#6366f1" opacity="0.6"/><text x="300" y="248" text-anchor="middle" fill="#ffffff" font-size="16" font-weight="bold" font-family="sans-serif">75% to joint</text><text x="300" y="290" text-anchor="middle" fill="#10b981" font-size="16" font-family="sans-serif">Same % as Jamie</text><rect x="600" y="0" width="400" height="320" fill="#ec4899" opacity="0.15" stroke="#ec4899" stroke-width="3" rx="10"/><text x="800" y="40" text-anchor="middle" fill="#ec4899" font-size="24" font-weight="bold" font-family="sans-serif">Jamie</text><text x="800" y="85" text-anchor="middle" fill="#ffffff" font-size="20" font-family="sans-serif">Income: $2,500/mo</text><line x1="630" y1="110" x2="970" y2="110" stroke="#888"/><text x="800" y="150" text-anchor="middle" fill="#ffd700" font-size="20" font-family="sans-serif">To joint: $1,000</text><text x="800" y="195" text-anchor="middle" fill="#ffffff" font-size="20" font-family="sans-serif">Keeps: $1,500</text><rect x="670" y="220" width="260" height="40" fill="#ec4899" opacity="0.6"/><text x="800" y="248" text-anchor="middle" fill="#ffffff" font-size="16" font-weight="bold" font-family="sans-serif">25% to joint</text><text x="800" y="290" text-anchor="middle" fill="#10b981" font-size="16" font-family="sans-serif">Same % as Alex</text></g><text x="550" y="930" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold" font-family="sans-serif">Fairness = same % share, not same $ amount</text></svg>`,
          caption: "Proportional contribution gives equal sacrifice without equalizing personal spending power."
        }
      },
      {
        type: "application",
        title: "Schedule the Money Date This Week",
        content: `**If you're partnered and haven't had this conversation, do it within 7 days.**

1. **Pick the time.** 90 minutes, weekend morning is best (not after a long workday). Cancel everything else.

2. **Send the agenda in advance.** Use the 10-item checklist from card 3 verbatim. Tell your partner: "I want us to fill out steps 1–6 on our own first, then share." This avoids the surprise-attack feeling.

3. **Fill out your sheet alone.** Be brutally honest. The 401(k) you forgot about. The store credit card. The loan from your parent. Everything.

4. **Set the room up.** Takeout, drinks if you want, phones in another room. Sit beside each other, not across — research shows side-by-side feels collaborative, face-to-face feels confrontational.

5. **Open with the script** from card 3: *"I want us to be a team about money..."*

6. **End with one decision and one date.** Pick the structure (1/2/3). Schedule the next 30-minute money meeting for ~4 weeks out. Put it on the shared calendar.

The first conversation is hardest. The 12th feels routine. The 24th feels normal. The 36th feels like a strength of your relationship.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="40" font-weight="bold" font-family="sans-serif">Schedule It This Week</text><text x="550" y="115" text-anchor="middle" fill="#888" font-size="22" font-family="sans-serif">90 minutes that changes the relationship</text><circle cx="130" cy="200" r="35" fill="#6366f1"/><text x="130" y="212" text-anchor="middle" fill="#ffffff" font-size="28" font-weight="bold" font-family="sans-serif">1</text><text x="190" y="195" fill="#ffd700" font-size="20" font-weight="bold" font-family="sans-serif">Pick the time (90 min, weekend AM)</text><text x="190" y="223" fill="#ffffff" font-size="16" font-family="sans-serif">Not after a workday. Cancel everything else.</text><circle cx="130" cy="290" r="35" fill="#8b5cf6"/><text x="130" y="302" text-anchor="middle" fill="#ffffff" font-size="28" font-weight="bold" font-family="sans-serif">2</text><text x="190" y="285" fill="#ffd700" font-size="20" font-weight="bold" font-family="sans-serif">Send agenda in advance</text><text x="190" y="313" fill="#ffffff" font-size="16" font-family="sans-serif">"Let's each fill steps 1-6 alone first." No surprises.</text><circle cx="130" cy="380" r="35" fill="#0ea5e9"/><text x="130" y="392" text-anchor="middle" fill="#ffffff" font-size="28" font-weight="bold" font-family="sans-serif">3</text><text x="190" y="375" fill="#ffd700" font-size="20" font-weight="bold" font-family="sans-serif">Fill your sheet alone, brutally honest</text><text x="190" y="403" fill="#ffffff" font-size="16" font-family="sans-serif">The 401(k), the store card, the parent loan. All of it.</text><circle cx="130" cy="470" r="35" fill="#10b981"/><text x="130" y="482" text-anchor="middle" fill="#ffffff" font-size="28" font-weight="bold" font-family="sans-serif">4</text><text x="190" y="465" fill="#ffd700" font-size="20" font-weight="bold" font-family="sans-serif">Set the room: side-by-side, no phones</text><text x="190" y="493" fill="#ffffff" font-size="16" font-family="sans-serif">Research: collaborative vs. confrontational seating.</text><circle cx="130" cy="560" r="35" fill="#f59e0b"/><text x="130" y="572" text-anchor="middle" fill="#ffffff" font-size="28" font-weight="bold" font-family="sans-serif">5</text><text x="190" y="555" fill="#ffd700" font-size="20" font-weight="bold" font-family="sans-serif">Open with the script</text><text x="190" y="583" fill="#ffffff" font-size="16" font-style="italic" font-family="sans-serif">"I want us to be a team about money..."</text><circle cx="130" cy="650" r="35" fill="#ec4899"/><text x="130" y="662" text-anchor="middle" fill="#ffffff" font-size="28" font-weight="bold" font-family="sans-serif">6</text><text x="190" y="645" fill="#ffd700" font-size="20" font-weight="bold" font-family="sans-serif">End with ONE decision + ONE date</text><text x="190" y="673" fill="#ffffff" font-size="16" font-family="sans-serif">Pick structure. Calendar next 30-min meeting in 4 wks.</text><rect x="100" y="730" width="900" height="280" fill="#ffd700" opacity="0.12" stroke="#ffd700" stroke-width="2" rx="10"/><text x="550" y="775" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold" font-family="sans-serif">The compound effect of repeat money dates</text><text x="200" y="830" fill="#ffffff" font-size="18" font-family="sans-serif">Meeting #1:</text><text x="500" y="830" fill="#ef4444" font-size="18" font-family="sans-serif">Hardest. Vulnerable. Awkward.</text><text x="200" y="870" fill="#ffffff" font-size="18" font-family="sans-serif">Meeting #12:</text><text x="500" y="870" fill="#f59e0b" font-size="18" font-family="sans-serif">Routine. 20 minutes.</text><text x="200" y="910" fill="#ffffff" font-size="18" font-family="sans-serif">Meeting #24:</text><text x="500" y="910" fill="#10b981" font-size="18" font-family="sans-serif">Normal. Even pleasant.</text><text x="200" y="950" fill="#ffffff" font-size="18" font-family="sans-serif">Meeting #36:</text><text x="500" y="950" fill="#10b981" font-size="18" font-weight="bold" font-family="sans-serif">A relationship strength.</text><text x="550" y="990" text-anchor="middle" fill="#888" font-size="16" font-family="sans-serif">Three years of monthly meetings, ~18 hours total. Cheapest therapy ever.</text></svg>`,
          caption: "Six steps to schedule the first money date and the compound payoff of repeating it monthly."
        }
      }
    ]
  },
{
    id: "budgeting-track-lesson-7",
    title: "The Annual Review: Why a Yearly Budget Pass Beats 12 Independent Monthlies",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "The Calendar Doesn't Care About Your Monthly Budget",
        content: `Your **monthly budget** is a lie your spreadsheet tells you. The real rhythm of money is **annual**: car insurance hits in March and September. Property taxes land in November. Vacation in July. Costco renewal in January. Amazon Prime in May. The kids' soccer registration in August. Holiday spending in December eats $1,800 you didn't plan for.

If you only think in **monthly slices**, you'll be "on budget" eleven months and catastrophically off in the twelfth. A family making $8,000/month can be **$11,000 short by December** despite "sticking to the budget" all year.

The fix is an **annual budget pass**: one Saturday in January where you map all 12 months at once. You see the **lumpy expenses** before they hit. You front-load savings into months where rent is your only big bill. You stop being surprised by your own predictable life.

This lesson teaches the annual lens, the **zero-out accounts** (HSA, FSA, 401k) that operate on calendar years, and a December audit checklist.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="60" text-anchor="middle" fill="#ffd700" font-size="34" font-weight="bold">The True Shape of Annual Spending</text>
            <text x="550" y="100" text-anchor="middle" fill="#888" font-size="18">Monthly budgets hide the lumpy months</text>
            <line x1="80" y1="900" x2="1020" y2="900" stroke="#888" stroke-width="2"/>
            <line x1="80" y1="200" x2="80" y2="900" stroke="#888" stroke-width="2"/>
            <text x="40" y="905" fill="#888" font-size="14">$0</text>
            <text x="40" y="800" fill="#888" font-size="14">$2k</text>
            <text x="40" y="700" fill="#888" font-size="14">$4k</text>
            <text x="40" y="600" fill="#888" font-size="14">$6k</text>
            <text x="40" y="500" fill="#888" font-size="14">$8k</text>
            <text x="40" y="400" fill="#888" font-size="14">$10k</text>
            <text x="40" y="300" fill="#888" font-size="14">$12k</text>
            <text x="40" y="200" fill="#888" font-size="14">$14k</text>
            <line x1="80" y1="600" x2="1020" y2="600" stroke="#6366f1" stroke-width="2" stroke-dasharray="6,6"/>
            <text x="1030" y="595" fill="#6366f1" font-size="13">avg $6k/mo</text>
            <g font-size="13" fill="#ffffff" text-anchor="middle">
              <rect x="100" y="650" width="60" height="250" fill="#10b981"/>
              <text x="130" y="920">Jan</text>
              <text x="130" y="640" fill="#10b981">$5k</text>
              <rect x="180" y="600" width="60" height="300" fill="#10b981"/>
              <text x="210" y="920">Feb</text>
              <text x="210" y="590" fill="#10b981">$6k</text>
              <rect x="260" y="450" width="60" height="450" fill="#f59e0b"/>
              <text x="290" y="920">Mar</text>
              <text x="290" y="440" fill="#f59e0b">$9k</text>
              <text x="290" y="970" fill="#f59e0b" font-size="11">car ins</text>
              <rect x="340" y="650" width="60" height="250" fill="#10b981"/>
              <text x="370" y="920">Apr</text>
              <text x="370" y="640" fill="#10b981">$5k</text>
              <rect x="420" y="600" width="60" height="300" fill="#10b981"/>
              <text x="450" y="920">May</text>
              <text x="450" y="590" fill="#10b981">$6k</text>
              <rect x="500" y="650" width="60" height="250" fill="#10b981"/>
              <text x="530" y="920">Jun</text>
              <text x="530" y="640" fill="#10b981">$5k</text>
              <rect x="580" y="300" width="60" height="600" fill="#ef4444"/>
              <text x="610" y="920">Jul</text>
              <text x="610" y="290" fill="#ef4444">$12k</text>
              <text x="610" y="970" fill="#ef4444" font-size="11">vacation</text>
              <rect x="660" y="500" width="60" height="400" fill="#f59e0b"/>
              <text x="690" y="920">Aug</text>
              <text x="690" y="490" fill="#f59e0b">$8k</text>
              <text x="690" y="970" fill="#f59e0b" font-size="11">school</text>
              <rect x="740" y="450" width="60" height="450" fill="#f59e0b"/>
              <text x="770" y="920">Sep</text>
              <text x="770" y="440" fill="#f59e0b">$9k</text>
              <text x="770" y="970" fill="#f59e0b" font-size="11">car ins</text>
              <rect x="820" y="650" width="60" height="250" fill="#10b981"/>
              <text x="850" y="920">Oct</text>
              <text x="850" y="640" fill="#10b981">$5k</text>
              <rect x="900" y="200" width="60" height="700" fill="#ef4444"/>
              <text x="930" y="920">Nov</text>
              <text x="930" y="190" fill="#ef4444">$14k</text>
              <text x="930" y="970" fill="#ef4444" font-size="11">prop tax</text>
              <rect x="980" y="300" width="60" height="600" fill="#ef4444"/>
              <text x="1010" y="920">Dec</text>
              <text x="1010" y="290" fill="#ef4444">$12k</text>
              <text x="1010" y="970" fill="#ef4444" font-size="11">holidays</text>
            </g>
            <rect x="100" y="1000" width="20" height="20" fill="#10b981"/>
            <text x="130" y="1016" fill="#ffffff" font-size="14">normal month</text>
            <rect x="290" y="1000" width="20" height="20" fill="#f59e0b"/>
            <text x="320" y="1016" fill="#ffffff" font-size="14">elevated</text>
            <rect x="450" y="1000" width="20" height="20" fill="#ef4444"/>
            <text x="480" y="1016" fill="#ffffff" font-size="14">shock month</text>
            <text x="700" y="1015" fill="#ffd700" font-size="16" font-weight="bold">Annual total: $96k. Monthly avg lies.</text>
          </svg>`,
          caption: "The same household — when monthly thinking pretends each month is identical, lumpy months blow up the budget."
        }
      },
      {
        type: "concept",
        title: "Monthly vs. Annual Budgeting: Two Different Tools",
        content: `**Monthly budgeting** answers: "Did I spend what I planned this month?" It's a **steering wheel** — useful for tactical decisions like grocery overruns or skipping a dinner out.

**Annual budgeting** answers: "Does the whole year balance, and where are the cliffs?" It's a **map** — useful for strategic moves like front-loading retirement contributions or timing a car purchase.

You need **both**. The annual pass identifies **12 categories of yearly expenses** that monthly budgets miss:

1. **Insurance premiums** (auto, home, umbrella) — often semi-annual
2. **Property taxes** — annual or biannual
3. **Tax prep / accountant** — Feb–April
4. **Vacations** — summer + winter break
5. **Holiday gifting** — November–December
6. **Annual subscriptions** (Costco, Amazon, AAA, software)
7. **Birthdays** (yours, kids', parents')
8. **Back-to-school** — August
9. **Vehicle maintenance** (tires every 3 years, brakes, registration)
10. **Medical deductible reset** — January
11. **HOA / club dues**
12. **Charitable giving** — December

The **annual zero-out accounts** matter most for **HSA** ($4,300 individual / $8,550 family in 2026), **FSA** ($3,300 with use-it-or-lose-it), and **401k** ($23,500). Miss the December deadline and the **tax benefit vanishes**. Annual planning catches these. Monthly planning doesn't.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="50" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold">Monthly Steering vs. Annual Map</text>
            <rect x="60" y="100" width="490" height="500" fill="#1a1a2e" stroke="#6366f1" stroke-width="2"/>
            <text x="305" y="140" text-anchor="middle" fill="#6366f1" font-size="22" font-weight="bold">MONTHLY BUDGET</text>
            <text x="305" y="170" text-anchor="middle" fill="#888" font-size="14">the steering wheel</text>
            <text x="80" y="210" fill="#ffffff" font-size="15" font-weight="bold">Asks:</text>
            <text x="80" y="235" fill="#ffffff" font-size="14">"Am I on track THIS month?"</text>
            <text x="80" y="275" fill="#ffffff" font-size="15" font-weight="bold">Time horizon:</text>
            <text x="80" y="300" fill="#ffffff" font-size="14">30 days</text>
            <text x="80" y="340" fill="#ffffff" font-size="15" font-weight="bold">Catches:</text>
            <text x="80" y="365" fill="#10b981" font-size="13">+ overspending on groceries</text>
            <text x="80" y="385" fill="#10b981" font-size="13">+ rent / mortgage timing</text>
            <text x="80" y="405" fill="#10b981" font-size="13">+ subscription creep</text>
            <text x="80" y="440" fill="#ffffff" font-size="15" font-weight="bold">Misses:</text>
            <text x="80" y="465" fill="#ef4444" font-size="13">- semi-annual car insurance</text>
            <text x="80" y="485" fill="#ef4444" font-size="13">- property taxes in Nov</text>
            <text x="80" y="505" fill="#ef4444" font-size="13">- HSA / FSA / 401k deadlines</text>
            <text x="80" y="525" fill="#ef4444" font-size="13">- holiday $1,800 shock</text>
            <text x="80" y="545" fill="#ef4444" font-size="13">- tire replacement year</text>
            <text x="80" y="580" fill="#888" font-size="13" font-style="italic">"On budget" 11 months, broke in Dec</text>
            <rect x="570" y="100" width="490" height="500" fill="#1a1a2e" stroke="#ffd700" stroke-width="2"/>
            <text x="815" y="140" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">ANNUAL BUDGET</text>
            <text x="815" y="170" text-anchor="middle" fill="#888" font-size="14">the map</text>
            <text x="590" y="210" fill="#ffffff" font-size="15" font-weight="bold">Asks:</text>
            <text x="590" y="235" fill="#ffffff" font-size="14">"Does the whole year balance?"</text>
            <text x="590" y="275" fill="#ffffff" font-size="15" font-weight="bold">Time horizon:</text>
            <text x="590" y="300" fill="#ffffff" font-size="14">12 months ahead</text>
            <text x="590" y="340" fill="#ffffff" font-size="15" font-weight="bold">Catches:</text>
            <text x="590" y="365" fill="#10b981" font-size="13">+ all lumpy annual bills</text>
            <text x="590" y="385" fill="#10b981" font-size="13">+ HSA/FSA/401k contrib gaps</text>
            <text x="590" y="405" fill="#10b981" font-size="13">+ deductible reset in Jan</text>
            <text x="590" y="425" fill="#10b981" font-size="13">+ Q4 tax estimate</text>
            <text x="590" y="445" fill="#10b981" font-size="13">+ vacation funding window</text>
            <text x="590" y="465" fill="#10b981" font-size="13">+ raise / bonus allocation</text>
            <text x="590" y="500" fill="#ffffff" font-size="15" font-weight="bold">Misses:</text>
            <text x="590" y="525" fill="#ef4444" font-size="13">- daily / weekly spend drift</text>
            <text x="590" y="545" fill="#ef4444" font-size="13">- in-month emergencies</text>
            <text x="590" y="580" fill="#888" font-size="13" font-style="italic">Strategic, not tactical</text>
            <rect x="60" y="630" width="1000" height="440" fill="#1a1a2e" stroke="#10b981" stroke-width="2"/>
            <text x="560" y="670" text-anchor="middle" fill="#10b981" font-size="22" font-weight="bold">USE BOTH: Annual sets the targets, Monthly executes</text>
            <text x="80" y="710" fill="#ffd700" font-size="16" font-weight="bold">The 12 yearly expenses monthly thinking forgets:</text>
            <g font-size="13" fill="#ffffff">
              <text x="100" y="745">1. Auto insurance ($1,800 semi-annual)</text>
              <text x="100" y="770">2. Homeowners / renters insurance ($1,400/yr)</text>
              <text x="100" y="795">3. Property taxes ($4,200 in Nov)</text>
              <text x="100" y="820">4. Tax prep / CPA ($350 in March)</text>
              <text x="100" y="845">5. Vacations ($3,500 in July)</text>
              <text x="100" y="870">6. Holiday gifting ($1,800 in Dec)</text>
              <text x="580" y="745">7. Annual subs: Costco/Prime/AAA ($420)</text>
              <text x="580" y="770">8. Birthdays — family ($600)</text>
              <text x="580" y="795">9. Back-to-school ($800 in Aug)</text>
              <text x="580" y="820">10. Tires + maintenance ($1,200)</text>
              <text x="580" y="845">11. HOA / club dues ($900)</text>
              <text x="580" y="870">12. Charitable giving ($1,500 in Dec)</text>
            </g>
            <text x="100" y="920" fill="#ef4444" font-size="16" font-weight="bold">Total hidden annual load: $18,470</text>
            <text x="100" y="950" fill="#ffffff" font-size="14">That's $1,540/month you must reserve — but monthly budgeting only sees it as it hits.</text>
            <text x="100" y="990" fill="#ffd700" font-size="16" font-weight="bold">Annual rule:</text>
            <text x="100" y="1020" fill="#ffffff" font-size="14">Divide each yearly expense by 12 → auto-transfer to a sinking fund each month.</text>
            <text x="100" y="1050" fill="#ffffff" font-size="14">When the bill hits, you're already paid up. No December crisis.</text>
          </svg>`,
          caption: "Monthly budgeting is tactical execution. Annual budgeting is strategic mapping. You need both — the annual map identifies the cliffs your monthly steering can't see coming."
        }
      },
      {
        type: "example",
        title: "Diana's January Annual Pass — A Real Walkthrough",
        content: `**Diana**, 38, software PM, household income **$172,000**. For three years she's done "monthly budgeting" and felt **broke every December**. This January, she sits down for **3 hours** with a coffee and does an **annual pass**.

She lists every **lumpy expense** on a calendar grid (right). Then she sums: **$22,840 in non-monthly expenses**. Divided by 12, that's **$1,903/month** that needs to leave her checking account into **sinking funds** before she "feels rich."

The biggest finding: she'd been **under-contributing to her HSA** by $2,100/year because she set it in January and forgot. The **employer match** caps at $1,000 if she contributes $4,300 — she'd been leaving **$1,000 on the table annually**.

She also discovers her **car insurance renewal** in March + **vacation deposit** in May fall in the same 60-day window, exactly when her **tax refund** lands. She **earmarks the refund** for that window — no scramble.

By February, she has **9 named savings buckets** auto-funding monthly. By next December, **holiday spending is already paid for**. The annual pass took 3 hours and saved her **~$3,400** in interest, late fees, and missed tax benefits.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="50" text-anchor="middle" fill="#ffd700" font-size="30" font-weight="bold">Diana's Annual Calendar Map</text>
            <text x="550" y="85" text-anchor="middle" fill="#888" font-size="16">January annual pass — every lumpy expense placed on the year</text>
            <g font-size="13" fill="#ffffff">
              <rect x="60" y="120" width="240" height="100" fill="#1a1a2e" stroke="#6366f1"/>
              <text x="75" y="145" fill="#6366f1" font-weight="bold" font-size="16">JAN</text>
              <text x="75" y="170">Costco $130</text>
              <text x="75" y="190">Deductible resets</text>
              <text x="75" y="210" fill="#ffd700">HSA contrib starts</text>
              <rect x="310" y="120" width="240" height="100" fill="#1a1a2e" stroke="#6366f1"/>
              <text x="325" y="145" fill="#6366f1" font-weight="bold" font-size="16">FEB</text>
              <text x="325" y="170">Prime $139</text>
              <text x="325" y="190">Tax docs gather</text>
              <text x="325" y="210" fill="#10b981">Refund est: +$2,800</text>
              <rect x="560" y="120" width="240" height="100" fill="#1a1a2e" stroke="#ef4444"/>
              <text x="575" y="145" fill="#ef4444" font-weight="bold" font-size="16">MAR</text>
              <text x="575" y="170" fill="#ef4444">Car insurance $1,800</text>
              <text x="575" y="190">CPA fee $350</text>
              <text x="575" y="210">Birthday — mom $150</text>
              <rect x="810" y="120" width="240" height="100" fill="#1a1a2e" stroke="#6366f1"/>
              <text x="825" y="145" fill="#6366f1" font-weight="bold" font-size="16">APR</text>
              <text x="825" y="170">Q1 estimated tax</text>
              <text x="825" y="190">Spring break $600</text>
              <text x="825" y="210">AAA $80</text>
              <rect x="60" y="230" width="240" height="100" fill="#1a1a2e" stroke="#f59e0b"/>
              <text x="75" y="255" fill="#f59e0b" font-weight="bold" font-size="16">MAY</text>
              <text x="75" y="280" fill="#f59e0b">Vacation deposit $1,500</text>
              <text x="75" y="300">Mother's Day $120</text>
              <text x="75" y="320">Tire rotation $80</text>
              <rect x="310" y="230" width="240" height="100" fill="#1a1a2e" stroke="#6366f1"/>
              <text x="325" y="255" fill="#6366f1" font-weight="bold" font-size="16">JUN</text>
              <text x="325" y="280">Q2 est tax</text>
              <text x="325" y="300">Father's Day $100</text>
              <text x="325" y="320">Kid's birthday $250</text>
              <rect x="560" y="230" width="240" height="100" fill="#1a1a2e" stroke="#ef4444"/>
              <text x="575" y="255" fill="#ef4444" font-weight="bold" font-size="16">JUL</text>
              <text x="575" y="280" fill="#ef4444">Vacation $3,500</text>
              <text x="575" y="300">Diana birthday $200</text>
              <text x="575" y="320">Pool open $180</text>
              <rect x="810" y="230" width="240" height="100" fill="#1a1a2e" stroke="#f59e0b"/>
              <text x="825" y="255" fill="#f59e0b" font-weight="bold" font-size="16">AUG</text>
              <text x="825" y="280" fill="#f59e0b">Back to school $800</text>
              <text x="825" y="300">Soccer reg $200</text>
              <text x="825" y="320">Anniversary $300</text>
              <rect x="60" y="340" width="240" height="100" fill="#1a1a2e" stroke="#ef4444"/>
              <text x="75" y="365" fill="#ef4444" font-weight="bold" font-size="16">SEP</text>
              <text x="75" y="390" fill="#ef4444">Car insurance $1,800</text>
              <text x="75" y="410">Q3 est tax</text>
              <text x="75" y="430">Husband bday $200</text>
              <rect x="310" y="340" width="240" height="100" fill="#1a1a2e" stroke="#f59e0b"/>
              <text x="325" y="365" fill="#f59e0b" font-weight="bold" font-size="16">OCT</text>
              <text x="325" y="390">HOA dues $450</text>
              <text x="325" y="410">Halloween $80</text>
              <text x="325" y="430">Flu shots $60</text>
              <rect x="560" y="340" width="240" height="100" fill="#1a1a2e" stroke="#ef4444"/>
              <text x="575" y="365" fill="#ef4444" font-weight="bold" font-size="16">NOV</text>
              <text x="575" y="390" fill="#ef4444">Property tax $4,200</text>
              <text x="575" y="410">Thanksgiving $400</text>
              <text x="575" y="430">FSA last spend!</text>
              <rect x="810" y="340" width="240" height="100" fill="#1a1a2e" stroke="#ef4444"/>
              <text x="825" y="365" fill="#ef4444" font-weight="bold" font-size="16">DEC</text>
              <text x="825" y="390" fill="#ef4444">Gifts $1,800</text>
              <text x="825" y="410" fill="#ef4444">Charity $1,500</text>
              <text x="825" y="430" fill="#ffd700">401k catch-up</text>
            </g>
            <rect x="60" y="475" width="990" height="240" fill="#1a1a2e" stroke="#10b981" stroke-width="2"/>
            <text x="555" y="510" text-anchor="middle" fill="#10b981" font-size="22" font-weight="bold">The Math That Surprised Diana</text>
            <text x="80" y="550" fill="#ffffff" font-size="14">Total lumpy annual expenses found:</text>
            <text x="750" y="550" fill="#ef4444" font-size="20" font-weight="bold">$22,840</text>
            <text x="80" y="585" fill="#ffffff" font-size="14">Divided by 12 (monthly sinking fund target):</text>
            <text x="750" y="585" fill="#ffd700" font-size="20" font-weight="bold">$1,903 / mo</text>
            <text x="80" y="620" fill="#ffffff" font-size="14">HSA gap she'd been missing (employer match left on table):</text>
            <text x="750" y="620" fill="#10b981" font-size="20" font-weight="bold">+$1,000 / yr</text>
            <text x="80" y="655" fill="#ffffff" font-size="14">Tax refund earmarked for Mar–May window:</text>
            <text x="750" y="655" fill="#10b981" font-size="20" font-weight="bold">+$2,800</text>
            <text x="80" y="690" fill="#ffd700" font-size="16" font-weight="bold">Total value of 3-hour annual pass: ~$3,400 saved + zero December panic</text>
            <rect x="60" y="730" width="990" height="340" fill="#1a1a2e" stroke="#ffd700"/>
            <text x="555" y="765" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">Diana's 9 Sinking Fund Buckets</text>
            <g font-size="14" fill="#ffffff">
              <text x="80" y="800">1. Insurance fund</text>
              <text x="450" y="800" fill="#ffd700">$300/mo → $3,600/yr</text>
              <text x="80" y="830">2. Property tax</text>
              <text x="450" y="830" fill="#ffd700">$350/mo → $4,200/yr</text>
              <text x="80" y="860">3. Vacation</text>
              <text x="450" y="860" fill="#ffd700">$400/mo → $4,800/yr</text>
              <text x="80" y="890">4. Holidays + gifts</text>
              <text x="450" y="890" fill="#ffd700">$300/mo → $3,600/yr</text>
              <text x="80" y="920">5. Birthdays</text>
              <text x="450" y="920" fill="#ffd700">$100/mo → $1,200/yr</text>
              <text x="80" y="950">6. Back-to-school + activities</text>
              <text x="450" y="950" fill="#ffd700">$120/mo → $1,440/yr</text>
              <text x="80" y="980">7. Car maintenance</text>
              <text x="450" y="980" fill="#ffd700">$100/mo → $1,200/yr</text>
              <text x="80" y="1010">8. Annual subscriptions</text>
              <text x="450" y="1010" fill="#ffd700">$50/mo → $600/yr</text>
              <text x="80" y="1040">9. Charity</text>
              <text x="450" y="1040" fill="#ffd700">$125/mo → $1,500/yr</text>
            </g>
            <line x1="720" y1="1010" x2="980" y2="1010" stroke="#10b981" stroke-width="2"/>
            <text x="720" y="1040" fill="#10b981" font-size="16" font-weight="bold">Total: $1,845/mo</text>
            <text x="720" y="1060" fill="#888" font-size="13">all 9 buckets auto-funded</text>
          </svg>`,
          caption: "Diana's January 3-hour annual pass mapped every lumpy expense onto a calendar, surfaced a $1,000 employer match she was missing, and built 9 sinking funds totaling $1,845/month so December never panics again."
        }
      },
      {
        type: "quiz",
        title: "Annual Budget Pass — Check Your Understanding",
        content: `Test your understanding of why the annual lens matters.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="60" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold">Quiz: The Annual Lens</text>
            <text x="80" y="130" fill="#ffffff" font-size="20" font-weight="bold">Scenario</text>
            <text x="80" y="165" fill="#ffffff" font-size="16">A household earns $120,000/year ($10,000/month).</text>
            <text x="80" y="195" fill="#ffffff" font-size="16">Monthly recurring expenses: $7,500. Feels like $2,500 surplus.</text>
            <text x="80" y="225" fill="#ffffff" font-size="16">Annual-only expenses they forgot: $24,000.</text>
            <text x="80" y="285" fill="#ffd700" font-size="18" font-weight="bold">What's their TRUE monthly surplus?</text>
            <g font-size="16">
              <rect x="80" y="320" width="940" height="60" fill="#1a1a2e" stroke="#888"/>
              <text x="110" y="358" fill="#ffffff">A) $2,500 — the annual stuff is separate from monthly budgeting</text>
              <rect x="80" y="395" width="940" height="60" fill="#1a1a2e" stroke="#10b981" stroke-width="3"/>
              <text x="110" y="433" fill="#10b981" font-weight="bold">B) $500 — divide $24k by 12 = $2,000 hidden monthly load</text>
              <rect x="80" y="470" width="940" height="60" fill="#1a1a2e" stroke="#888"/>
              <text x="110" y="508" fill="#ffffff">C) $0 — annual expenses always wipe out surplus</text>
              <rect x="80" y="545" width="940" height="60" fill="#1a1a2e" stroke="#888"/>
              <text x="110" y="583" fill="#ffffff">D) -$1,500 — the annual stuff doubles the visible expenses</text>
            </g>
            <rect x="80" y="640" width="940" height="380" fill="#1a1a2e" stroke="#ffd700"/>
            <text x="550" y="680" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">Why B is correct</text>
            <text x="100" y="720" fill="#ffffff" font-size="15">$24,000 annual expenses ÷ 12 months = $2,000/month hidden load.</text>
            <text x="100" y="750" fill="#ffffff" font-size="15">Apparent monthly surplus: $10,000 - $7,500 = $2,500.</text>
            <text x="100" y="780" fill="#ffffff" font-size="15">Real monthly surplus: $2,500 - $2,000 = $500.</text>
            <text x="100" y="830" fill="#10b981" font-size="16" font-weight="bold">Lesson:</text>
            <text x="100" y="860" fill="#ffffff" font-size="15">A household that "feels like" they have $2,500/month of breathing room is</text>
            <text x="100" y="885" fill="#ffffff" font-size="15">actually operating on a $500/month margin. That's why they feel broke in</text>
            <text x="100" y="910" fill="#ffffff" font-size="15">November and December — the load they ignored all year hits in one quarter.</text>
            <text x="100" y="960" fill="#ffd700" font-size="16" font-weight="bold">Rule of thumb:</text>
            <text x="100" y="990" fill="#ffffff" font-size="15">Before declaring any monthly surplus, divide ALL annual expenses by 12</text>
            <text x="100" y="1015" fill="#ffffff" font-size="15">and subtract that line from your monthly take-home FIRST.</text>
          </svg>`,
          caption: "The $2,000/month hidden annual load is invisible until you do the annual pass — that's why monthly-only budgeters always feel broke at year-end."
        },
        question: "A household earns $10,000/month, spends $7,500/month on recurring bills, and has $24,000 of annual-only expenses they haven't accounted for. What's their TRUE monthly surplus?",
        options: [
          { text: "$2,500 — the annual stuff is separate from monthly budgeting", correct: false },
          { text: "$500 — divide $24k by 12 = $2,000 hidden monthly load to subtract", correct: true },
          { text: "$0 — annual expenses always wipe out surplus", correct: false },
          { text: "-$1,500 — the annual stuff doubles the visible expenses", correct: false }
        ],
        explanation: "Divide annual expenses by 12 to find the hidden monthly load: $24,000/12 = $2,000. Subtract from apparent surplus: $2,500 - $2,000 = $500. The annual pass surfaces this invisible weight."
      },
      {
        type: "application",
        title: "Your December Annual Audit Checklist",
        content: `Before year-end, run this **5-step audit**. Schedule **2 hours on a December Saturday**. Coffee, spreadsheet, statements.

**Step 1 — Tax-advantaged zero-out check.** Did you max your **HSA** ($4,300/$8,550)? Your **FSA** is **use-it-or-lose-it** — schedule the dentist, buy glasses, stock up on contacts before Dec 31. **401k** at $23,500? **IRA** at $7,000 (deadline is April 15, but pre-fund now)?

**Step 2 — Charitable giving stack.** If itemizing, **bunch** donations into this year vs. next. Consider a **donor-advised fund** for appreciated stock.

**Step 3 — Subscription audit.** Pull 12 months of statements. Cancel every subscription you haven't used in 60 days. Average household saves **$340/year**.

**Step 4 — Insurance shop.** Get 3 quotes on auto and home. Households who shop every 3 years save an average of **$420/year**.

**Step 5 — Set next year's annual map.** Open a fresh calendar. Place all lumpy expenses. Calculate the **sinking fund monthly** target. Schedule January's auto-transfers.

This 2-hour audit typically returns **$2,000–$4,000** in tax savings, fee reductions, and behavior changes. It's the highest hourly return on financial work you'll do all year.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold">December Annual Audit Checklist</text>
            <text x="550" y="90" text-anchor="middle" fill="#888" font-size="16">2 hours. One Saturday. ~$2,000–$4,000 returned.</text>
            <g>
              <rect x="60" y="120" width="990" height="170" fill="#1a1a2e" stroke="#10b981" stroke-width="2"/>
              <circle cx="100" cy="160" r="22" fill="#10b981"/>
              <text x="100" y="167" text-anchor="middle" fill="#1a1a2e" font-size="22" font-weight="bold">1</text>
              <text x="140" y="155" fill="#10b981" font-size="20" font-weight="bold">Tax-advantaged zero-out</text>
              <text x="140" y="182" fill="#ffffff" font-size="14">HSA at $4,300 (single) / $8,550 (family)?  Top up if not.</text>
              <text x="140" y="207" fill="#ffffff" font-size="14">FSA: USE-IT-OR-LOSE-IT. Schedule dental, optometry, refill prescriptions.</text>
              <text x="140" y="232" fill="#ffffff" font-size="14">401k at $23,500? IRA at $7,000 (Apr 15 deadline)?  Backdoor Roth?</text>
              <text x="140" y="257" fill="#ffd700" font-size="14" font-weight="bold">Avg recovery: $1,000 employer match + $500 tax savings</text>
              <rect x="60" y="305" width="990" height="170" fill="#1a1a2e" stroke="#f59e0b" stroke-width="2"/>
              <circle cx="100" cy="345" r="22" fill="#f59e0b"/>
              <text x="100" y="352" text-anchor="middle" fill="#1a1a2e" font-size="22" font-weight="bold">2</text>
              <text x="140" y="340" fill="#f59e0b" font-size="20" font-weight="bold">Charitable giving stack</text>
              <text x="140" y="368" fill="#ffffff" font-size="14">Itemize this year vs standard deduction? Run both numbers.</text>
              <text x="140" y="393" fill="#ffffff" font-size="14">"Bunch" 2 years of donations into 1 year if it pushes you over standard.</text>
              <text x="140" y="418" fill="#ffffff" font-size="14">Donor-advised fund: donate appreciated stock, avoid capital gains tax.</text>
              <text x="140" y="445" fill="#ffd700" font-size="14" font-weight="bold">Avg recovery: $400 in tax savings via bunching</text>
              <rect x="60" y="490" width="990" height="170" fill="#1a1a2e" stroke="#6366f1" stroke-width="2"/>
              <circle cx="100" cy="530" r="22" fill="#6366f1"/>
              <text x="100" y="537" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">3</text>
              <text x="140" y="525" fill="#6366f1" font-size="20" font-weight="bold">Subscription audit</text>
              <text x="140" y="553" fill="#ffffff" font-size="14">Pull 12 months of credit card statements.</text>
              <text x="140" y="578" fill="#ffffff" font-size="14">List every recurring charge. Cancel anything unused 60+ days.</text>
              <text x="140" y="603" fill="#ffffff" font-size="14">Common kills: 2nd streaming, unused gym, app trials never canceled.</text>
              <text x="140" y="630" fill="#ffd700" font-size="14" font-weight="bold">Avg recovery: $340 / year</text>
              <rect x="60" y="675" width="990" height="170" fill="#1a1a2e" stroke="#0ea5e9" stroke-width="2"/>
              <circle cx="100" cy="715" r="22" fill="#0ea5e9"/>
              <text x="100" y="722" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">4</text>
              <text x="140" y="710" fill="#0ea5e9" font-size="20" font-weight="bold">Insurance shop</text>
              <text x="140" y="738" fill="#ffffff" font-size="14">Get 3 quotes: auto, home/renters, umbrella, life.</text>
              <text x="140" y="763" fill="#ffffff" font-size="14">Raise deductibles if emergency fund supports it.</text>
              <text x="140" y="788" fill="#ffffff" font-size="14">Bundle multi-policy with same carrier — often 10-15% off.</text>
              <text x="140" y="815" fill="#ffd700" font-size="14" font-weight="bold">Avg recovery: $420 / year per household that shops every 3 yrs</text>
              <rect x="60" y="860" width="990" height="200" fill="#1a1a2e" stroke="#ec4899" stroke-width="2"/>
              <circle cx="100" cy="900" r="22" fill="#ec4899"/>
              <text x="100" y="907" text-anchor="middle" fill="#1a1a2e" font-size="22" font-weight="bold">5</text>
              <text x="140" y="895" fill="#ec4899" font-size="20" font-weight="bold">Set NEXT year's annual map</text>
              <text x="140" y="923" fill="#ffffff" font-size="14">Open a blank 12-month calendar. Place every known lumpy expense.</text>
              <text x="140" y="948" fill="#ffffff" font-size="14">Sum totals. Divide by 12. That's your sinking fund monthly target.</text>
              <text x="140" y="973" fill="#ffffff" font-size="14">Open named savings sub-accounts. Schedule auto-transfers for Jan 5.</text>
              <text x="140" y="998" fill="#ffffff" font-size="14">Calendar block 1 hour each quarter to re-sync.</text>
              <text x="140" y="1030" fill="#ffd700" font-size="14" font-weight="bold">Recovery: zero December panic next year — priceless</text>
            </g>
          </svg>`,
          caption: "Five steps, two hours, every December. The highest hourly ROI financial work most households can do."
        }
      }
    ]
  },
  {
    id: "budgeting-track-lesson-8",
    title: "Variable Income: Budgeting When Your Paycheck Swings",
    duration: "16",
    cards: [
      {
        type: "intro",
        title: "When Every Month Is a Different Number",
        content: `**Standard budgets assume a flat paycheck.** They break the moment your income looks like this: $4,200 in January. $11,800 in February. $2,900 in March. $9,400 in April. $3,100 in May. $14,200 in June.

This is the reality for **1099 contractors, freelancers, commission salespeople, real estate agents, Etsy sellers, rideshare drivers, consultants, and small business owners** — roughly **38 million Americans**. Most use the same envelope or 50/30/20 method designed for **W-2 employees with biweekly paychecks** and wonder why it never works.

The variable-income brain runs on a **vicious cycle**: feast months feel rich, so spending balloons. Famine months panic, so credit cards come out. Tax time arrives and **30% of feast-month income** that should have been withheld is gone.

The fix is the **floor-based budget** — you live as if your income is your **lowest realistic monthly take-home**, and everything above the floor is routed to **specific categories before it ever feels like spendable cash**. This lesson covers the floor method, quarterly tax estimates, and **income smoothing**.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold">A Freelancer's Income — 12 Months</text>
            <text x="550" y="90" text-anchor="middle" fill="#888" font-size="16">Why "average" lies and "floor" tells the truth</text>
            <line x1="80" y1="900" x2="1020" y2="900" stroke="#888" stroke-width="2"/>
            <line x1="80" y1="200" x2="80" y2="900" stroke="#888" stroke-width="2"/>
            <text x="40" y="905" fill="#888" font-size="13">$0</text>
            <text x="40" y="810" fill="#888" font-size="13">$3k</text>
            <text x="40" y="720" fill="#888" font-size="13">$6k</text>
            <text x="40" y="630" fill="#888" font-size="13">$9k</text>
            <text x="40" y="540" fill="#888" font-size="13">$12k</text>
            <text x="40" y="450" fill="#888" font-size="13">$15k</text>
            <text x="40" y="360" fill="#888" font-size="13">$18k</text>
            <line x1="80" y1="690" x2="1020" y2="690" stroke="#6366f1" stroke-width="2" stroke-dasharray="6,6"/>
            <text x="1030" y="685" fill="#6366f1" font-size="13">avg $7,083</text>
            <line x1="80" y1="813" x2="1020" y2="813" stroke="#10b981" stroke-width="3"/>
            <text x="1030" y="808" fill="#10b981" font-size="13" font-weight="bold">FLOOR $2,900</text>
            <g font-size="12" fill="#ffffff" text-anchor="middle">
              <rect x="100" y="775" width="60" height="125" fill="#ef4444"/>
              <text x="130" y="920">Jan</text>
              <text x="130" y="770" fill="#ef4444">$4.2k</text>
              <rect x="180" y="546" width="60" height="354" fill="#10b981"/>
              <text x="210" y="920">Feb</text>
              <text x="210" y="540" fill="#10b981">$11.8k</text>
              <rect x="260" y="813" width="60" height="87" fill="#ef4444"/>
              <text x="290" y="920">Mar</text>
              <text x="290" y="808" fill="#ef4444">$2.9k</text>
              <rect x="340" y="618" width="60" height="282" fill="#10b981"/>
              <text x="370" y="920">Apr</text>
              <text x="370" y="612" fill="#10b981">$9.4k</text>
              <rect x="420" y="807" width="60" height="93" fill="#ef4444"/>
              <text x="450" y="920">May</text>
              <text x="450" y="802" fill="#ef4444">$3.1k</text>
              <rect x="500" y="474" width="60" height="426" fill="#10b981"/>
              <text x="530" y="920">Jun</text>
              <text x="530" y="468" fill="#10b981">$14.2k</text>
              <rect x="580" y="753" width="60" height="147" fill="#f59e0b"/>
              <text x="610" y="920">Jul</text>
              <text x="610" y="748" fill="#f59e0b">$4.9k</text>
              <rect x="660" y="690" width="60" height="210" fill="#f59e0b"/>
              <text x="690" y="920">Aug</text>
              <text x="690" y="685" fill="#f59e0b">$7k</text>
              <rect x="740" y="600" width="60" height="300" fill="#10b981"/>
              <text x="770" y="920">Sep</text>
              <text x="770" y="595" fill="#10b981">$10k</text>
              <rect x="820" y="780" width="60" height="120" fill="#ef4444"/>
              <text x="850" y="920">Oct</text>
              <text x="850" y="775" fill="#ef4444">$4k</text>
              <rect x="900" y="540" width="60" height="360" fill="#10b981"/>
              <text x="930" y="920">Nov</text>
              <text x="930" y="535" fill="#10b981">$12k</text>
              <rect x="980" y="540" width="60" height="360" fill="#10b981"/>
              <text x="1010" y="920">Dec</text>
              <text x="1010" y="535" fill="#10b981">$12k</text>
            </g>
            <rect x="100" y="970" width="20" height="20" fill="#ef4444"/>
            <text x="130" y="986" fill="#ffffff" font-size="14">famine</text>
            <rect x="220" y="970" width="20" height="20" fill="#f59e0b"/>
            <text x="250" y="986" fill="#ffffff" font-size="14">normal</text>
            <rect x="340" y="970" width="20" height="20" fill="#10b981"/>
            <text x="370" y="986" fill="#ffffff" font-size="14">feast</text>
            <text x="500" y="985" fill="#ffd700" font-size="16" font-weight="bold">Live on the floor. Route everything above to specific jobs.</text>
            <text x="80" y="1040" fill="#888" font-size="14">Annual total: $85,000  •  Average month: $7,083  •  Lowest month: $2,900  •  Range: 4.9x</text>
            <text x="80" y="1065" fill="#ef4444" font-size="14" font-weight="bold">If you budget at average, you're broke 5 months a year. If you budget at floor, you're never broke.</text>
          </svg>`,
          caption: "A freelancer's 12-month income. Budgeting at the average ($7,083) means broke 5 months. Budgeting at the floor ($2,900) means never broke — and surplus has nowhere to leak."
        }
      },
      {
        type: "concept",
        title: "The Floor-Based Budget: How It Works",
        content: `**Step 1 — Find your floor.** Look at the last **24 months** of self-employment income. Throw out the lowest outlier (a true emergency month). The **next-lowest realistic month** is your **floor**. For our freelancer: **$2,900**.

**Step 2 — Build a normal household budget at the floor.** Rent, utilities, groceries, minimum debt payments, transportation, baseline insurance — all sized to **$2,900/month**. If it doesn't fit, your fixed costs are too high. Cut until it does.

**Step 3 — Open three "above-floor" buckets:**
- **Tax bucket** (30–35% of every dollar above the floor — covers federal, state, self-employment tax)
- **Smoothing fund** (build to **6× floor**, so $17,400 — pays you in famine months)
- **Goal bucket** (Roth IRA, sinking funds, retirement)

**Step 4 — Route on receipt.** Every payment hits a "**business holding account**." You **pay yourself** the floor on the 1st and 15th. Tax % auto-transfers to a high-yield savings account. Everything left routes by % to smoothing → goals.

**Step 5 — Quarterly tax estimates.** **April 15, June 15, Sept 15, Jan 15.** Pay 25% of expected annual tax each quarter. Underpayment penalty if you miss.

The freelancer never touches "feast money" directly. Their **lifestyle never feels** the swings.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold">The Floor-Based Budget System</text>
            <text x="550" y="90" text-anchor="middle" fill="#888" font-size="16">How every dollar gets a job before it feels like cash</text>
            <rect x="370" y="130" width="360" height="90" fill="#1a1a2e" stroke="#0ea5e9" stroke-width="3" rx="6"/>
            <text x="550" y="165" text-anchor="middle" fill="#0ea5e9" font-size="20" font-weight="bold">Business Holding Account</text>
            <text x="550" y="195" text-anchor="middle" fill="#ffffff" font-size="14">All client payments land here first</text>
            <line x1="550" y1="220" x2="550" y2="270" stroke="#888" stroke-width="2"/>
            <polygon points="540,265 550,280 560,265" fill="#888"/>
            <rect x="80" y="290" width="220" height="130" fill="#1a1a2e" stroke="#10b981" stroke-width="2" rx="6"/>
            <text x="190" y="325" text-anchor="middle" fill="#10b981" font-size="18" font-weight="bold">1. FLOOR pay</text>
            <text x="190" y="355" text-anchor="middle" fill="#ffffff" font-size="14">to personal checking</text>
            <text x="190" y="380" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">$2,900 / mo</text>
            <text x="190" y="405" text-anchor="middle" fill="#888" font-size="12">on 1st and 15th</text>
            <rect x="320" y="290" width="220" height="130" fill="#1a1a2e" stroke="#ef4444" stroke-width="2" rx="6"/>
            <text x="430" y="325" text-anchor="middle" fill="#ef4444" font-size="18" font-weight="bold">2. TAX bucket</text>
            <text x="430" y="355" text-anchor="middle" fill="#ffffff" font-size="14">HYSA, untouchable</text>
            <text x="430" y="380" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">30-35%</text>
            <text x="430" y="405" text-anchor="middle" fill="#888" font-size="12">of EVERY incoming dollar</text>
            <rect x="560" y="290" width="220" height="130" fill="#1a1a2e" stroke="#8b5cf6" stroke-width="2" rx="6"/>
            <text x="670" y="325" text-anchor="middle" fill="#8b5cf6" font-size="18" font-weight="bold">3. SMOOTHING</text>
            <text x="670" y="355" text-anchor="middle" fill="#ffffff" font-size="14">build to 6x floor</text>
            <text x="670" y="380" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">$17,400</text>
            <text x="670" y="405" text-anchor="middle" fill="#888" font-size="12">your future paycheck</text>
            <rect x="800" y="290" width="220" height="130" fill="#1a1a2e" stroke="#ec4899" stroke-width="2" rx="6"/>
            <text x="910" y="325" text-anchor="middle" fill="#ec4899" font-size="18" font-weight="bold">4. GOALS</text>
            <text x="910" y="355" text-anchor="middle" fill="#ffffff" font-size="14">Roth, retirement,</text>
            <text x="910" y="375" text-anchor="middle" fill="#ffffff" font-size="14">sinking funds</text>
            <text x="910" y="405" text-anchor="middle" fill="#ffd700" font-size="18" font-weight="bold">residual</text>
            <rect x="60" y="450" width="990" height="280" fill="#1a1a2e" stroke="#ffd700"/>
            <text x="555" y="485" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">The Routing Math on a $11,800 Feast Month</text>
            <text x="80" y="525" fill="#ffffff" font-size="15">Client pays $11,800 → lands in business account</text>
            <text x="80" y="560" fill="#ffffff" font-size="15">Step 1: Tax skim 32% → $3,776 to tax HYSA</text>
            <text x="80" y="595" fill="#ffffff" font-size="15">After tax: $8,024 remains</text>
            <text x="80" y="630" fill="#ffffff" font-size="15">Step 2: Pay yourself floor $2,900 → personal checking</text>
            <text x="80" y="665" fill="#ffffff" font-size="15">After floor: $5,124 remains</text>
            <text x="80" y="700" fill="#ffffff" font-size="15">Step 3: Smoothing fund (until full) gets 70% → $3,587</text>
            <text x="80" y="720" fill="#ffffff" font-size="15">Step 4: Goals get 30% → $1,537</text>
            <rect x="60" y="755" width="990" height="280" fill="#1a1a2e" stroke="#10b981"/>
            <text x="555" y="790" text-anchor="middle" fill="#10b981" font-size="22" font-weight="bold">On a $2,900 Famine Month</text>
            <text x="80" y="830" fill="#ffffff" font-size="15">Client pays $2,900 → lands in business account</text>
            <text x="80" y="865" fill="#ffffff" font-size="15">Step 1: Tax skim 32% → $928 to tax HYSA (yes, even on small months)</text>
            <text x="80" y="900" fill="#ffffff" font-size="15">After tax: $1,972 in business account</text>
            <text x="80" y="935" fill="#ffffff" font-size="15">Step 2: Pay yourself floor $2,900 → smoothing fund covers the $928 gap</text>
            <text x="80" y="970" fill="#ffffff" font-size="15">Personal checking still receives the full $2,900</text>
            <text x="80" y="1005" fill="#10b981" font-size="16" font-weight="bold">Lifestyle never changes. Income volatility is invisible to you.</text>
          </svg>`,
          caption: "Every dollar gets a job at the holding account. Tax skim first, then floor, then smoothing, then goals. The feast/famine cycle disappears from your personal life."
        }
      },
      {
        type: "example",
        title: "Marcus the Realtor: From Chaos to System",
        content: `**Marcus**, 41, real estate agent, **6 closings/year**. Last year he made **$118,000 commission**, but in May he was **borrowing from his credit card** to make rent.

**The chaos year:** February closing → $22,000 commission. He bought a new MacBook, took his wife to Cabo, paid down some debt. Felt great. April through July: zero closings. By June he was **$8,000 in credit card debt** at 24% APR. October closing → $19,000 — went straight to paying off the cards. Year-end he had **$0 saved, $2,200 still on cards**, and a $14,000 tax bill he hadn't reserved for.

**This year — floor system:** He looked at 24 months and set his floor at **$4,500/month** (covers his $1,800 mortgage, $400 car, $700 groceries, $600 utilities, $1,000 other). He routes every commission as: **35% tax**, then **$4,500/mo floor**, then **70% smoothing / 30% goals**.

**The February $22,000 closing** now becomes: $7,700 tax → $4,500 to checking → $6,860 to smoothing → $2,940 to goals. He spent **none of it on lifestyle**. His Cabo trip is funded from a **specific vacation sinking fund** that builds $250/month.

**Result by month 9:** Smoothing fund at $19,000 (full). Goals at $14,200. Tax bill **fully covered** in HYSA. Zero credit card use.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="50" text-anchor="middle" fill="#ffd700" font-size="30" font-weight="bold">Marcus: Two Years, Same Income</text>
            <text x="550" y="85" text-anchor="middle" fill="#888" font-size="16">$118,000 commission both years — radically different outcomes</text>
            <rect x="60" y="115" width="490" height="450" fill="#1a1a2e" stroke="#ef4444" stroke-width="2"/>
            <text x="305" y="150" text-anchor="middle" fill="#ef4444" font-size="22" font-weight="bold">Year 1: CHAOS</text>
            <text x="305" y="175" text-anchor="middle" fill="#888" font-size="13">no system, spent on receipt</text>
            <g font-size="14" fill="#ffffff">
              <text x="80" y="215">Feb: $22,000 closing</text>
              <text x="80" y="240" fill="#ef4444">→ MacBook + Cabo + paydown</text>
              <text x="80" y="270">Mar-Jul: $0 income</text>
              <text x="80" y="295" fill="#ef4444">→ credit cards to make rent</text>
              <text x="80" y="325">Aug: $15k closing</text>
              <text x="80" y="350" fill="#ef4444">→ pays minimum on cards</text>
              <text x="80" y="380">Oct: $19k closing</text>
              <text x="80" y="405" fill="#ef4444">→ wipes cards</text>
              <text x="80" y="435">Dec: $35k closing</text>
              <text x="80" y="460" fill="#ef4444">→ "saving" for taxes (spent half)</text>
            </g>
            <line x1="80" y1="485" x2="530" y2="485" stroke="#888"/>
            <text x="80" y="510" fill="#ffffff" font-size="14">Saved by year-end:</text>
            <text x="450" y="510" fill="#ef4444" font-size="18" font-weight="bold">$0</text>
            <text x="80" y="535" fill="#ffffff" font-size="14">CC debt remaining:</text>
            <text x="450" y="535" fill="#ef4444" font-size="18" font-weight="bold">$2,200</text>
            <text x="80" y="560" fill="#ffffff" font-size="14">Tax bill owed (unreserved):</text>
            <text x="450" y="560" fill="#ef4444" font-size="18" font-weight="bold">$14,000</text>
            <rect x="570" y="115" width="490" height="450" fill="#1a1a2e" stroke="#10b981" stroke-width="2"/>
            <text x="815" y="150" text-anchor="middle" fill="#10b981" font-size="22" font-weight="bold">Year 2: FLOOR SYSTEM</text>
            <text x="815" y="175" text-anchor="middle" fill="#888" font-size="13">routes every dollar before it feels spendable</text>
            <g font-size="14" fill="#ffffff">
              <text x="590" y="215">Feb: $22,000 closing</text>
              <text x="590" y="240" fill="#10b981">→ routed: tax/floor/smooth/goal</text>
              <text x="590" y="270">Mar-Jul: $0 income</text>
              <text x="590" y="295" fill="#10b981">→ smoothing pays the floor</text>
              <text x="590" y="325">Aug: $15k closing</text>
              <text x="590" y="350" fill="#10b981">→ refills smoothing fund</text>
              <text x="590" y="380">Oct: $19k closing</text>
              <text x="590" y="405" fill="#10b981">→ tops smoothing + funds goals</text>
              <text x="590" y="435">Dec: $35k closing</text>
              <text x="590" y="460" fill="#10b981">→ tax already covered, goals + Roth</text>
            </g>
            <line x1="590" y1="485" x2="1040" y2="485" stroke="#888"/>
            <text x="590" y="510" fill="#ffffff" font-size="14">Saved by year-end:</text>
            <text x="960" y="510" fill="#10b981" font-size="18" font-weight="bold">$33,200</text>
            <text x="590" y="535" fill="#ffffff" font-size="14">CC debt remaining:</text>
            <text x="960" y="535" fill="#10b981" font-size="18" font-weight="bold">$0</text>
            <text x="590" y="560" fill="#ffffff" font-size="14">Tax bill (in HYSA):</text>
            <text x="960" y="560" fill="#10b981" font-size="18" font-weight="bold">$15,200 ✓</text>
            <rect x="60" y="595" width="1000" height="465" fill="#1a1a2e" stroke="#ffd700" stroke-width="2"/>
            <text x="555" y="635" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">Marcus's Year 2 Routing on Each Closing</text>
            <g font-size="14">
              <text x="80" y="675" fill="#ffd700" font-weight="bold">Closing</text>
              <text x="240" y="675" fill="#ef4444" font-weight="bold">Tax 35%</text>
              <text x="400" y="675" fill="#0ea5e9" font-weight="bold">Floor advance</text>
              <text x="600" y="675" fill="#8b5cf6" font-weight="bold">Smoothing</text>
              <text x="780" y="675" fill="#ec4899" font-weight="bold">Goals</text>
              <text x="940" y="675" fill="#10b981" font-weight="bold">Status</text>
              <line x1="80" y1="690" x2="1040" y2="690" stroke="#888"/>
              <text x="80" y="715" fill="#ffffff">$22,000 (Feb)</text>
              <text x="240" y="715" fill="#ffffff">$7,700</text>
              <text x="400" y="715" fill="#ffffff">$4,500</text>
              <text x="600" y="715" fill="#ffffff">$6,860</text>
              <text x="780" y="715" fill="#ffffff">$2,940</text>
              <text x="940" y="715" fill="#10b981">building</text>
              <text x="80" y="745" fill="#ffffff">$0 (Mar)</text>
              <text x="240" y="745" fill="#888">—</text>
              <text x="400" y="745" fill="#ffffff">$4,500</text>
              <text x="600" y="745" fill="#ef4444">-$4,500</text>
              <text x="780" y="745" fill="#888">—</text>
              <text x="940" y="745" fill="#ffd700">drawing</text>
              <text x="80" y="775" fill="#ffffff">$0 (Apr-Jul)</text>
              <text x="240" y="775" fill="#888">—</text>
              <text x="400" y="775" fill="#ffffff">$18,000</text>
              <text x="600" y="775" fill="#ef4444">-$18,000</text>
              <text x="780" y="775" fill="#888">—</text>
              <text x="940" y="775" fill="#ffd700">drawing</text>
              <text x="80" y="805" fill="#ffffff">$15,000 (Aug)</text>
              <text x="240" y="805" fill="#ffffff">$5,250</text>
              <text x="400" y="805" fill="#ffffff">$4,500</text>
              <text x="600" y="805" fill="#ffffff">$5,250</text>
              <text x="780" y="805" fill="#888">—</text>
              <text x="940" y="805" fill="#10b981">refilling</text>
              <text x="80" y="835" fill="#ffffff">$0 (Sep)</text>
              <text x="240" y="835" fill="#888">—</text>
              <text x="400" y="835" fill="#ffffff">$4,500</text>
              <text x="600" y="835" fill="#ef4444">-$4,500</text>
              <text x="780" y="835" fill="#888">—</text>
              <text x="940" y="835" fill="#ffd700">drawing</text>
              <text x="80" y="865" fill="#ffffff">$19,000 (Oct)</text>
              <text x="240" y="865" fill="#ffffff">$6,650</text>
              <text x="400" y="865" fill="#ffffff">$4,500</text>
              <text x="600" y="865" fill="#ffffff">$4,500</text>
              <text x="780" y="865" fill="#ffffff">$3,350</text>
              <text x="940" y="865" fill="#10b981">refilling</text>
              <text x="80" y="895" fill="#ffffff">$0 (Nov)</text>
              <text x="240" y="895" fill="#888">—</text>
              <text x="400" y="895" fill="#ffffff">$4,500</text>
              <text x="600" y="895" fill="#ef4444">-$4,500</text>
              <text x="780" y="895" fill="#888">—</text>
              <text x="940" y="895" fill="#ffd700">drawing</text>
              <text x="80" y="925" fill="#ffffff">$35,000 (Dec)</text>
              <text x="240" y="925" fill="#ffffff">$12,250</text>
              <text x="400" y="925" fill="#ffffff">$4,500</text>
              <text x="600" y="925" fill="#ffffff">$6,250</text>
              <text x="780" y="925" fill="#ffffff">$12,000</text>
              <text x="940" y="925" fill="#10b981">all full</text>
              <line x1="80" y1="945" x2="1040" y2="945" stroke="#888"/>
              <text x="80" y="975" fill="#ffd700" font-weight="bold">Totals</text>
              <text x="240" y="975" fill="#ef4444" font-weight="bold">$31,850</text>
              <text x="400" y="975" fill="#0ea5e9" font-weight="bold">$54,000</text>
              <text x="600" y="975" fill="#8b5cf6" font-weight="bold">$15,000 net</text>
              <text x="780" y="975" fill="#ec4899" font-weight="bold">$18,290</text>
              <text x="940" y="975" fill="#10b981" font-weight="bold">$118k ✓</text>
            </g>
            <text x="80" y="1020" fill="#10b981" font-size="14" font-weight="bold">Tax skim covers his $15,200 quarterly estimates with buffer.</text>
            <text x="80" y="1045" fill="#10b981" font-size="14" font-weight="bold">$33,200 net saved (smoothing + goals) on the same $118k income.</text>
          </svg>`,
          caption: "Same $118,000 commission both years. The floor system turned $0 saved + $2,200 in CC debt into $33,200 saved with taxes pre-funded."
        }
      },
      {
        type: "quiz",
        title: "Variable Income — Check Your Understanding",
        content: `Test your grasp of the floor-based system.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold">Quiz: Variable Income</text>
            <text x="80" y="125" fill="#ffffff" font-size="18" font-weight="bold">Scenario</text>
            <text x="80" y="160" fill="#ffffff" font-size="15">A freelance consultant just received a $14,000 client payment.</text>
            <text x="80" y="185" fill="#ffffff" font-size="15">Floor: $4,200/mo. Tax rate: 30%. Smoothing fund: 60% full ($10k of $25k target).</text>
            <text x="80" y="245" fill="#ffd700" font-size="18" font-weight="bold">What's the CORRECT order of routing?</text>
            <g font-size="15">
              <rect x="80" y="285" width="940" height="65" fill="#1a1a2e" stroke="#888"/>
              <text x="100" y="315" fill="#ffffff">A) Spend $5k on lifestyle, then split the rest between tax, smoothing, goals</text>
              <text x="100" y="338" fill="#888" font-size="13">(treats feast money as "extra")</text>
              <text x="100" y="365" width="940" height="65" fill="#1a1a2e" stroke="#10b981" stroke-width="3"/>
              <text x="100" y="395" fill="#10b981" font-weight="bold">B) Tax 30% first ($4,200) → pay floor ($4,200) → smoothing until full → goals</text>
              <text x="100" y="418" fill="#10b981" font-size="13">(tax skim is non-negotiable, floor is your paycheck, surplus has a hierarchy)</text>
              <rect x="80" y="445" width="940" height="65" fill="#1a1a2e" stroke="#888"/>
              <text x="100" y="475" fill="#ffffff">C) Put everything in checking and just don't overspend</text>
              <text x="100" y="498" fill="#888" font-size="13">(this is the chaos approach — feast/famine guaranteed)</text>
              <text x="100" y="525" width="940" height="65" fill="#1a1a2e" stroke="#888"/>
              <text x="100" y="555" fill="#ffffff">D) Pay floor first, then tax with whatever's left over</text>
              <text x="100" y="578" fill="#888" font-size="13">(this is how people end up with surprise tax bills)</text>
            </g>
            <text x="80" y="625" width="940" height="430" fill="#1a1a2e" stroke="#ffd700"/>
            <text x="550" y="665" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">Why B is correct: the math</text>
            <text x="100" y="705" fill="#ffffff" font-size="15">Starting: $14,000 from client</text>
            <text x="100" y="735" fill="#ef4444" font-size="15">Tax skim 30%: -$4,200 → into tax HYSA (untouchable)</text>
            <text x="100" y="765" fill="#0ea5e9" font-size="15">Pay yourself floor: -$4,200 → into personal checking</text>
            <text x="100" y="795" fill="#ffffff" font-size="15">Remaining in business account: $5,600</text>
            <text x="100" y="825" fill="#8b5cf6" font-size="15">Smoothing fund needs $15k to fill → all $5,600 goes here</text>
            <text x="100" y="855" fill="#ec4899" font-size="15">Goals: $0 this cycle (smoothing fund priority until full)</text>
            <text x="100" y="905" fill="#10b981" font-size="16" font-weight="bold">Lifestyle impact: zero. Personal checking received the same $4,200 as always.</text>
            <text x="100" y="935" fill="#ffd700" font-size="15" font-weight="bold">Hierarchy: Tax → Floor → Smoothing (until full) → Goals → never lifestyle</text>
            <text x="100" y="980" fill="#ffffff" font-size="14">The discipline: feast-month surplus never touches your spendable checking</text>
            <text x="100" y="1005" fill="#ffffff" font-size="14">account. You see the same $4,200 every month regardless of income.</text>
            <text x="100" y="1035" fill="#ffffff" font-size="14">That removes the hedonic spike — feast money has no emotional gravity.</text>
          </svg>`,
          caption: "Routing order is non-negotiable: Tax → Floor → Smoothing → Goals. Lifestyle never sees the feast."
        },
        question: "A freelancer just received a $14,000 payment. Floor is $4,200/mo, tax rate 30%, smoothing fund at $10k of $25k target. What's the correct routing order?",
        options: [
          { text: "Spend $5k on lifestyle first, then split the rest between tax, smoothing, goals", correct: false },
          { text: "Tax 30% first ($4,200) → pay yourself the floor ($4,200) → smoothing until full → goals", correct: true },
          { text: "Put everything in checking and just don't overspend", correct: false },
          { text: "Pay yourself the floor first, then tax with whatever's left over", correct: false }
        ],
        explanation: "Tax skim is non-negotiable and happens first ($4,200). Then pay yourself the floor ($4,200). The remaining $5,600 goes to smoothing until full (priority over goals). Personal checking sees the same $4,200 regardless of income size — the lifestyle never feels the swing."
      },
      {
        type: "application",
        title: "The Boring Boring Boring SPIKE Pattern + Your Quarterly Tax Calendar",
        content: `Variable-income earners who succeed long-term describe their bank account as feeling **boring, boring, boring, SPIKE, boring, boring, SPIKE**. The boring is intentional — the system absorbs the spikes silently. The lifestyle stays flat. **Boring is the win.**

**Set up your floor system this weekend:**

1. **Open 3 accounts** at a high-yield savings bank (most allow sub-accounts): Tax Reserve, Smoothing Fund, Goals.
2. **Open a separate business checking** if you don't have one — all client payments land here.
3. **Calculate your floor** from your lowest realistic month in the last 24 months.
4. **Set the tax %**: most self-employed earners need **25–35%** (federal income tax + 15.3% self-employment tax + state). Use **30%** as a starting default.
5. **Schedule the routing**: every Friday, open your business account and route incoming funds per the hierarchy.

**Quarterly tax estimates — set calendar reminders now:**
- **April 15** (Q1)
- **June 15** (Q2)
- **September 15** (Q3)
- **January 15** (Q4 of prior year)

Use **IRS Form 1040-ES**. Pay via **IRS Direct Pay** or **EFTPS** — both free, instant. Miss a quarter? **Underpayment penalty** ~8% APR on the shortfall.

The boring rhythm of monthly floor + quarterly tax pay = a freelance career that doesn't financially break you.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold">Your Variable-Income Action Plan</text>
            <text x="60" y="110" fill="#ffd700" font-size="22" font-weight="bold">Personal Checking: The Boring SPIKE pattern</text>
            <line x1="60" y1="270" x2="1040" y2="270" stroke="#888"/>
            <line x1="60" y1="150" x2="60" y2="270" stroke="#888"/>
            <text x="50" y="155" text-anchor="end" fill="#888" font-size="12">$5k</text>
            <text x="50" y="215" text-anchor="end" fill="#888" font-size="12">$2.5k</text>
            <text x="50" y="275" text-anchor="end" fill="#888" font-size="12">$0</text>
            <g>
              <rect x="80" y="215" width="60" height="55" fill="#10b981"/>
              <rect x="160" y="215" width="60" height="55" fill="#10b981"/>
              <rect x="240" y="215" width="60" height="55" fill="#10b981"/>
              <rect x="320" y="215" width="60" height="55" fill="#10b981"/>
              <rect x="400" y="215" width="60" height="55" fill="#10b981"/>
              <rect x="480" y="215" width="60" height="55" fill="#10b981"/>
              <rect x="560" y="215" width="60" height="55" fill="#10b981"/>
              <rect x="640" y="215" width="60" height="55" fill="#10b981"/>
              <rect x="720" y="215" width="60" height="55" fill="#10b981"/>
              <rect x="800" y="215" width="60" height="55" fill="#10b981"/>
              <rect x="880" y="215" width="60" height="55" fill="#10b981"/>
              <rect x="960" y="215" width="60" height="55" fill="#10b981"/>
            </g>
            <text x="555" y="295" text-anchor="middle" fill="#10b981" font-size="14" font-weight="bold">Personal checking: flat $4,500 every month. Boring. Boring. Boring.</text>
            <text x="60" y="335" fill="#ffd700" font-size="22" font-weight="bold">Business Account: The actual spike pattern</text>
            <line x1="60" y1="500" x2="1040" y2="500" stroke="#888"/>
            <line x1="60" y1="380" x2="60" y2="500" stroke="#888"/>
            <text x="50" y="385" text-anchor="end" fill="#888" font-size="12">$22k</text>
            <text x="50" y="445" text-anchor="end" fill="#888" font-size="12">$11k</text>
            <text x="50" y="505" text-anchor="end" fill="#888" font-size="12">$0</text>
            <g>
              <rect x="80" y="495" width="60" height="5" fill="#888"/>
              <rect x="160" y="385" width="60" height="115" fill="#ef4444"/>
              <text x="190" y="380" text-anchor="middle" fill="#ef4444" font-size="11">SPIKE</text>
              <rect x="240" y="495" width="60" height="5" fill="#888"/>
              <rect x="320" y="495" width="60" height="5" fill="#888"/>
              <rect x="400" y="495" width="60" height="5" fill="#888"/>
              <rect x="480" y="420" width="60" height="80" fill="#ef4444"/>
              <text x="510" y="415" text-anchor="middle" fill="#ef4444" font-size="11">SPIKE</text>
              <rect x="560" y="495" width="60" height="5" fill="#888"/>
              <rect x="640" y="495" width="60" height="5" fill="#888"/>
              <rect x="720" y="440" width="60" height="60" fill="#ef4444"/>
              <text x="750" y="435" text-anchor="middle" fill="#ef4444" font-size="11">SPIKE</text>
              <rect x="800" y="495" width="60" height="5" fill="#888"/>
              <rect x="880" y="495" width="60" height="5" fill="#888"/>
              <rect x="960" y="395" width="60" height="105" fill="#ef4444"/>
              <text x="990" y="390" text-anchor="middle" fill="#ef4444" font-size="11">SPIKE</text>
            </g>
            <text x="555" y="525" text-anchor="middle" fill="#888" font-size="13">Spikes happen in the business account — your personal life never sees them.</text>
            <text x="60" y="560" width="490" height="490" fill="#1a1a2e" stroke="#0ea5e9" stroke-width="2"/>
            <text x="305" y="595" text-anchor="middle" fill="#0ea5e9" font-size="20" font-weight="bold">5-Step Weekend Setup</text>
            <text x="80" y="630" fill="#ffd700" font-size="14" font-weight="bold">1.  Open 3 HYSA sub-accounts</text>
            <text x="80" y="650" fill="#ffffff" font-size="13">Tax Reserve  •  Smoothing Fund  •  Goals</text>
            <text x="80" y="680" fill="#ffd700" font-size="14" font-weight="bold">2.  Open business checking</text>
            <text x="80" y="700" fill="#ffffff" font-size="13">All client invoices land here, never personal</text>
            <text x="80" y="730" fill="#ffd700" font-size="14" font-weight="bold">3.  Calculate floor</text>
            <text x="80" y="750" fill="#ffffff" font-size="13">Lowest realistic month in last 24 months</text>
            <text x="80" y="780" fill="#ffd700" font-size="14" font-weight="bold">4.  Set tax %</text>
            <text x="80" y="800" fill="#ffffff" font-size="13">Default 30%. Adjust for state + income level</text>
            <text x="80" y="830" fill="#ffd700" font-size="14" font-weight="bold">5.  Friday routing ritual</text>
            <text x="80" y="850" fill="#ffffff" font-size="13">Every Friday: route business funds per hierarchy</text>
            <text x="80" y="900" fill="#10b981" font-size="14" font-weight="bold">Total setup time: 90 minutes</text>
            <text x="80" y="925" fill="#10b981" font-size="14" font-weight="bold">Weekly maintenance: 5 minutes</text>
            <text x="80" y="980" fill="#ffffff" font-size="13">Recommended HYSAs offering sub-accounts:</text>
            <text x="80" y="1005" fill="#888" font-size="12">Ally, Capital One 360, Marcus, SoFi</text>
            <rect x="570" y="560" width="480" height="490" fill="#1a1a2e" stroke="#ef4444" stroke-width="2"/>
            <text x="810" y="595" text-anchor="middle" fill="#ef4444" font-size="20" font-weight="bold">Quarterly Tax Calendar</text>
            <text x="810" y="620" text-anchor="middle" fill="#888" font-size="13">Set 4 calendar reminders NOW</text>
            <g font-size="14">
              <rect x="600" y="650" width="420" height="60" fill="#1a1a2e" stroke="#888"/>
              <text x="620" y="680" fill="#ffd700" font-weight="bold">Q1 — April 15</text>
              <text x="620" y="700" fill="#ffffff" font-size="12">covers income from Jan 1 - Mar 31</text>
              <rect x="600" y="720" width="420" height="60" fill="#1a1a2e" stroke="#888"/>
              <text x="620" y="750" fill="#ffd700" font-weight="bold">Q2 — June 15</text>
              <text x="620" y="770" fill="#ffffff" font-size="12">covers income from Apr 1 - May 31</text>
              <rect x="600" y="790" width="420" height="60" fill="#1a1a2e" stroke="#888"/>
              <text x="620" y="820" fill="#ffd700" font-weight="bold">Q3 — September 15</text>
              <text x="620" y="840" fill="#ffffff" font-size="12">covers income from Jun 1 - Aug 31</text>
              <rect x="600" y="860" width="420" height="60" fill="#1a1a2e" stroke="#888"/>
              <text x="620" y="890" fill="#ffd700" font-weight="bold">Q4 — January 15</text>
              <text x="620" y="910" fill="#ffffff" font-size="12">covers income from Sep 1 - Dec 31</text>
            </g>
            <text x="590" y="950" fill="#10b981" font-size="13" font-weight="bold">Pay via: IRS Direct Pay (free) or EFTPS</text>
            <text x="590" y="975" fill="#ffffff" font-size="13">Form 1040-ES helps you estimate</text>
            <text x="590" y="1000" fill="#ef4444" font-size="13" font-weight="bold">Miss a quarter? ~8% APR underpayment penalty</text>
            <text x="590" y="1025" fill="#ffd700" font-size="13" font-weight="bold">Safe harbor: pay 110% of last year's tax</text>
          </svg>`,
          caption: "Setup: 90 minutes this weekend. Maintenance: 5 minutes every Friday. Quarterly tax deadlines on the calendar. The boring rhythm is the system working."
        }
      }
    ]
  },
  {
    id: "budgeting-track-lesson-9",
    title: "Lifestyle Inflation: Why Raises Don't Make You Richer",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "The Treadmill You Didn't Know You Were On",
        content: `**Lifestyle inflation** (also called **lifestyle creep** or the **hedonic treadmill**) is the silent thief of every American raise. The pattern is so predictable researchers have named it: when income rises by **10%**, spending rises by an average of **8.7%**. Almost the entire raise vanishes into a slightly bigger life that you'll quickly stop noticing.

You get the **promotion**. The slightly nicer apartment seems "deserved." The car upgrade. The unconscious upgrade from Toyota to Lexus. The Whole Foods grocery run instead of Kroger. Streaming services you don't cancel. The vacation to Europe instead of camping.

**Two years later**, your bank balance is the same. Your stress is the same. Your sense of "enough" has been **redefined upward** so that going back feels like deprivation. This is the treadmill: you walked up the speed setting, then realized you're still standing in the same spot.

The fix isn't deprivation. It's a **deliberate allocation rule**: when income rises, **only 50% of the increase** is allowed to touch lifestyle. The other 50% is captured into savings/investing **before you ever feel it**.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold">The Hedonic Treadmill</text>
            <text x="550" y="90" text-anchor="middle" fill="#888" font-size="16">Income rises 10%. Spending rises 8.7%. Wealth rises... barely.</text>
            <line x1="120" y1="700" x2="1020" y2="700" stroke="#888" stroke-width="2"/>
            <line x1="120" y1="180" x2="120" y2="700" stroke="#888" stroke-width="2"/>
            <text x="60" y="705" fill="#888" font-size="13">$50k</text>
            <text x="60" y="615" fill="#888" font-size="13">$70k</text>
            <text x="60" y="530" fill="#888" font-size="13">$90k</text>
            <text x="60" y="445" fill="#888" font-size="13">$110k</text>
            <text x="60" y="360" fill="#888" font-size="13">$130k</text>
            <text x="60" y="275" fill="#888" font-size="13">$150k</text>
            <text x="60" y="190" fill="#888" font-size="13">$170k</text>
            <polyline points="160,640 280,560 400,475 520,395 640,310 760,230 880,180" fill="none" stroke="#10b981" stroke-width="4"/>
            <text x="900" y="185" fill="#10b981" font-size="14" font-weight="bold">income</text>
            <polyline points="160,650 280,580 400,500 520,425 640,350 760,280 880,235" fill="none" stroke="#ef4444" stroke-width="4" stroke-dasharray="6,4"/>
            <text x="900" y="240" fill="#ef4444" font-size="14" font-weight="bold">spending</text>
            <polyline points="160,660 280,655 400,651 520,648 640,646 760,645 880,644" fill="none" stroke="#ffd700" stroke-width="4"/>
            <text x="900" y="640" fill="#ffd700" font-size="14" font-weight="bold">net worth</text>
            <g font-size="13" fill="#ffffff" text-anchor="middle">
              <text x="160" y="720">Yr 1</text>
              <text x="280" y="720">Yr 2</text>
              <text x="400" y="720">Yr 3</text>
              <text x="520" y="720">Yr 4</text>
              <text x="640" y="720">Yr 5</text>
              <text x="760" y="720">Yr 6</text>
              <text x="880" y="720">Yr 7</text>
            </g>
            <text x="555" y="765" text-anchor="middle" fill="#ef4444" font-size="18" font-weight="bold">Income grew $120k → $170k. Net worth grew ~$8k.</text>
            <text x="120" y="800" width="900" height="250" fill="#1a1a2e" stroke="#ffd700"/>
            <text x="570" y="840" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">The Research</text>
            <text x="140" y="880" fill="#ffffff" font-size="15">• Survey data shows 8.7% spending increase per 10% income increase (Federal Reserve)</text>
            <text x="140" y="910" fill="#ffffff" font-size="15">• 78% of Americans live paycheck to paycheck — including 36% earning $100k+ (LendingClub)</text>
            <text x="140" y="940" fill="#ffffff" font-size="15">• "Adaptation level theory" (Brickman 1971): humans adjust to new income within 6-18 months</text>
            <text x="140" y="970" fill="#ffffff" font-size="15">• Happiness rises ~$0 above $100k household income (Killingsworth 2023 updated curve)</text>
            <text x="140" y="1010" fill="#ffd700" font-size="16" font-weight="bold">Translation: the upgrades you'll buy with your raise won't make you happier.</text>
          </svg>`,
          caption: "The treadmill: 7 years of raises grew income by $50,000 — and net worth by ~$8,000 — because spending grew almost as fast."
        }
      },
      {
        type: "concept",
        title: "The 50% Rule for Every Raise",
        content: `Researchers studying behavioral finance find that **the moment a raise hits your paycheck**, you have a **30-day window** before adaptation kicks in. After that, your "new normal" is set. The fix exploits this window.

**The 50% Rule:** When your **take-home pay increases**, route **50% of the increase** directly into savings/investing **before the first paycheck at the new rate hits your checking account**. The remaining 50% becomes lifestyle.

This works because:
1. **You never see** the full raise as spendable. The hedonic adaptation point is **based on what you see**, not what you earn.
2. **50% of a raise** is still a real lifestyle upgrade — you don't feel deprived.
3. **The captured 50%**, compounded over a career, becomes a fortune.

**Where the captured 50% goes** (in priority order):
1. **401k contribution increase** — pre-tax, possibly matched
2. **HSA contribution** if eligible — triple tax advantage
3. **Roth IRA** — tax-free growth
4. **Taxable brokerage** — VTI / VOO index funds

**Example:** $8,000 annual raise ($667/mo). Take-home increase ~$485/mo after taxes. Route $242/mo to investments (raise 401k by 3%). Keep $243/mo lifestyle. **Over 30 years at 8%**, the captured half becomes **$340,000**.

This single rule, applied to every raise of a career, is the difference between **retiring at 55 with $2M** and retiring at 67 with $400k.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold">The 50% Rule on a $8,000 Raise</text>
            <text x="550" y="90" text-anchor="middle" fill="#888" font-size="16">Half to lifestyle, half captured before you feel it</text>
            <rect x="370" y="125" width="360" height="80" fill="#1a1a2e" stroke="#10b981" stroke-width="3" rx="6"/>
            <text x="550" y="160" text-anchor="middle" fill="#10b981" font-size="20" font-weight="bold">Raise hits: $8,000/yr</text>
            <text x="550" y="185" text-anchor="middle" fill="#ffffff" font-size="14">take-home ≈ $485/mo after taxes</text>
            <line x1="450" y1="205" x2="320" y2="270" stroke="#888" stroke-width="2"/>
            <line x1="650" y1="205" x2="780" y2="270" stroke="#888" stroke-width="2"/>
            <polygon points="315,265 320,280 330,275" fill="#888"/>
            <polygon points="785,265 780,280 770,275" fill="#888"/>
            <rect x="100" y="285" width="380" height="200" fill="#1a1a2e" stroke="#ec4899" stroke-width="2" rx="6"/>
            <text x="290" y="320" text-anchor="middle" fill="#ec4899" font-size="20" font-weight="bold">50% LIFESTYLE</text>
            <text x="290" y="350" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">$242 / mo</text>
            <text x="120" y="385" fill="#ffffff" font-size="13">• Nicer groceries (+$80)</text>
            <text x="120" y="410" fill="#ffffff" font-size="13">• One streaming + 1 dinner out (+$60)</text>
            <text x="120" y="435" fill="#ffffff" font-size="13">• Better gym membership (+$50)</text>
            <text x="120" y="460" fill="#ffffff" font-size="13">• Pad to discretionary (+$52)</text>
            <rect x="620" y="285" width="380" height="200" fill="#1a1a2e" stroke="#10b981" stroke-width="2" rx="6"/>
            <text x="810" y="320" text-anchor="middle" fill="#10b981" font-size="20" font-weight="bold">50% CAPTURED</text>
            <text x="810" y="350" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">$243 / mo</text>
            <text x="640" y="385" fill="#ffffff" font-size="13">• 401k contribution +3% ($150)</text>
            <text x="640" y="410" fill="#ffffff" font-size="13">• Roth IRA top-up ($60)</text>
            <text x="640" y="435" fill="#ffffff" font-size="13">• Brokerage VTI ($33)</text>
            <text x="640" y="460" fill="#ffffff" font-size="13">Set up BEFORE first new paycheck</text>
            <text x="60" y="510" width="990" height="280" fill="#1a1a2e" stroke="#ffd700"/>
            <text x="555" y="545" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">What $243/mo Becomes Over Time @ 8%</text>
            <line x1="120" y1="750" x2="1020" y2="750" stroke="#888"/>
            <line x1="120" y1="580" x2="120" y2="750" stroke="#888"/>
            <g>
              <rect x="180" y="725" width="80" height="25" fill="#10b981"/>
              <text x="220" y="770" text-anchor="middle" fill="#ffffff" font-size="13">5 yr</text>
              <text x="220" y="720" text-anchor="middle" fill="#ffd700" font-size="13">$18k</text>
              <rect x="300" y="690" width="80" height="60" fill="#10b981"/>
              <text x="340" y="770" text-anchor="middle" fill="#ffffff" font-size="13">10 yr</text>
              <text x="340" y="685" text-anchor="middle" fill="#ffd700" font-size="13">$45k</text>
              <rect x="420" y="620" width="80" height="130" fill="#10b981"/>
              <text x="460" y="770" text-anchor="middle" fill="#ffffff" font-size="13">15 yr</text>
              <text x="460" y="615" text-anchor="middle" fill="#ffd700" font-size="13">$84k</text>
              <rect x="540" y="530" width="80" height="220" fill="#10b981"/>
              <text x="580" y="770" text-anchor="middle" fill="#ffffff" font-size="13">20 yr</text>
              <text x="580" y="525" text-anchor="middle" fill="#ffd700" font-size="13">$144k</text>
              <rect x="660" y="470" width="80" height="280" fill="#ffd700"/>
              <text x="700" y="770" text-anchor="middle" fill="#ffffff" font-size="13">25 yr</text>
              <text x="700" y="465" text-anchor="middle" fill="#ffd700" font-size="13" font-weight="bold">$230k</text>
              <rect x="780" y="410" width="80" height="340" fill="#ffd700"/>
              <text x="820" y="770" text-anchor="middle" fill="#ffffff" font-size="13">30 yr</text>
              <text x="820" y="405" text-anchor="middle" fill="#ffd700" font-size="13" font-weight="bold">$340k</text>
              <rect x="900" y="350" width="80" height="400" fill="#ffd700"/>
              <text x="940" y="770" text-anchor="middle" fill="#ffffff" font-size="13">35 yr</text>
              <text x="940" y="345" text-anchor="middle" fill="#ffd700" font-size="13" font-weight="bold">$494k</text>
            </g>
            <text x="60" y="810" width="990" height="240" fill="#1a1a2e" stroke="#ec4899"/>
            <text x="555" y="850" text-anchor="middle" fill="#ec4899" font-size="22" font-weight="bold">Stacking the Rule Across a Career</text>
            <text x="80" y="890" fill="#ffffff" font-size="15">• Age 28: $8k raise → captures $243/mo → 30 yrs = $340k</text>
            <text x="80" y="920" fill="#ffffff" font-size="15">• Age 32: $12k raise → captures $360/mo → 26 yrs = $370k</text>
            <text x="80" y="950" fill="#ffffff" font-size="15">• Age 38: $18k promotion → captures $540/mo → 20 yrs = $320k</text>
            <text x="80" y="980" fill="#ffffff" font-size="15">• Age 45: $25k jump → captures $750/mo → 13 yrs = $190k</text>
            <text x="80" y="1010" fill="#ffd700" font-size="16" font-weight="bold">Total from 4 disciplined raises: $1.22M at retirement</text>
            <text x="80" y="1040" fill="#10b981" font-size="14">Lifestyle still upgraded each time. You still felt richer.</text>
          </svg>`,
          caption: "The 50% rule: route half before it hits checking. A single $8,000 raise compounds to $340,000 over 30 years. Four raises across a career = $1.22M."
        }
      },
      {
        type: "example",
        title: "Anna's $20,000 Raise That Became Zero Net Wealth",
        content: `**Anna**, 32, marketing manager. She was earning **$95,000** when her boss called her in: **promotion + $20,000 raise** to $115,000. Take-home went from $5,800/month to **$6,900/month** — an extra **$1,100/month** in checking.

She didn't run the math. She didn't open a new account. She just felt **rich for the first time** in her adult life.

**Month 1:** Apartment lease was up — she **upgraded** from $1,800 studio to $2,400 1-bedroom in a nicer building. Net change: -$600/mo.

**Month 4:** Old Honda needed work. She **traded it** for a Mazda CX-5 lease at $480/mo (vs $0 owned). Insurance went up $80/mo. Net change: -$560/mo.

**Month 8:** Started ordering **DoorDash 3x/week** because "I can afford it now." Spending up ~$320/mo. Gym upgrade to Equinox: +$140/mo.

**Month 12:** Eurotrip on credit card: $4,200 paid off over 6 months.

**Month 18:** New iPhone Pro Max + AirPods + smart watch upgrade. Subscriptions stacked up to $94/mo.

**Month 24:** Boyfriend moves in — but she's now committed to all these **fixed costs**.

**Net wealth change over 2 years**: ~$200 increase. She's not saving more, not investing more, not paying down debt faster. The **entire $20,000 raise** dissolved into a slightly more comfortable life she'd already adapted to.

Compare: had she **routed $550/mo** (50% of take-home increase) to a 401k + brokerage, she'd have **$14,300 invested**, growing to **$140,000 over 30 years**.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-size="30" font-weight="bold">Anna's $20k Raise: Month-by-Month</text>
            <text x="550" y="90" text-anchor="middle" fill="#888" font-size="16">$1,100/mo extra take-home → $0 net wealth in 24 months</text>
            <rect x="60" y="115" width="1000" height="430" fill="#1a1a2e" stroke="#ef4444" stroke-width="2"/>
            <text x="80" y="150" fill="#ffd700" font-size="16" font-weight="bold">Month</text>
            <text x="200" y="150" fill="#ffd700" font-size="16" font-weight="bold">Decision</text>
            <text x="620" y="150" fill="#ffd700" font-size="16" font-weight="bold">Monthly impact</text>
            <text x="880" y="150" fill="#ffd700" font-size="16" font-weight="bold">Cumulative</text>
            <line x1="80" y1="160" x2="1040" y2="160" stroke="#888"/>
            <g font-size="14" fill="#ffffff">
              <text x="80" y="190">Start</text>
              <text x="200" y="190">Raise hits: +$1,100/mo take-home</text>
              <text x="620" y="190" fill="#10b981">+$1,100 surplus</text>
              <text x="880" y="190" fill="#10b981">+$1,100</text>
              <text x="80" y="220">M 1</text>
              <text x="200" y="220">Upgrade apartment ($1,800 → $2,400)</text>
              <text x="620" y="220" fill="#ef4444">-$600 fixed</text>
              <text x="880" y="220" fill="#10b981">+$500</text>
              <text x="80" y="250">M 4</text>
              <text x="200" y="250">Mazda lease replaces paid-off Honda</text>
              <text x="620" y="250" fill="#ef4444">-$560 fixed</text>
              <text x="880" y="250" fill="#ef4444">-$60</text>
              <text x="80" y="280">M 6</text>
              <text x="200" y="280">DoorDash 3x/week, Equinox upgrade</text>
              <text x="620" y="280" fill="#ef4444">-$460 variable</text>
              <text x="880" y="280" fill="#ef4444">-$520</text>
              <text x="80" y="310">M 8</text>
              <text x="200" y="310">Subscription stacking (5 streaming + 3 apps)</text>
              <text x="620" y="310" fill="#ef4444">-$94 fixed</text>
              <text x="880" y="310" fill="#ef4444">-$614</text>
              <text x="80" y="340">M 12</text>
              <text x="200" y="340">Europe trip on credit card ($4,200)</text>
              <text x="620" y="340" fill="#ef4444">-$700/mo for 6 mo</text>
              <text x="880" y="340" fill="#ef4444">-$1,314</text>
              <text x="80" y="370">M 15</text>
              <text x="200" y="370">Wardrobe refresh: $1,800 over 3 months</text>
              <text x="620" y="370" fill="#ef4444">-$600/mo</text>
              <text x="880" y="370" fill="#ef4444">-$1,914</text>
              <text x="80" y="400">M 18</text>
              <text x="200" y="400">iPhone Pro Max + AirPods + smartwatch</text>
              <text x="620" y="400" fill="#ef4444">-$80/mo financing</text>
              <text x="880" y="400" fill="#ef4444">-$1,994</text>
              <text x="80" y="430">M 20</text>
              <text x="200" y="430">Eurotrip CC paid off, frees $700/mo</text>
              <text x="620" y="430" fill="#10b981">+$700 (recovered)</text>
              <text x="880" y="430" fill="#ef4444">-$1,294</text>
              <text x="80" y="460">M 22</text>
              <text x="200" y="460">"Cocktails out 2x/wk" becomes new normal</text>
              <text x="620" y="460" fill="#ef4444">-$280/mo</text>
              <text x="880" y="460" fill="#ef4444">-$1,574</text>
              <text x="80" y="490">M 24</text>
              <text x="200" y="490">Boyfriend moves in, splits some costs</text>
              <text x="620" y="490" fill="#10b981">+$400</text>
              <text x="880" y="490" fill="#ef4444">-$1,174</text>
              <line x1="80" y1="505" x2="1040" y2="505" stroke="#888"/>
              <text x="80" y="535" fill="#ffd700" font-weight="bold">END</text>
              <text x="200" y="535" fill="#ffd700" font-weight="bold">2 years of "feeling rich"</text>
              <text x="620" y="535" fill="#ef4444" font-weight="bold">net change: ~$0</text>
              <text x="880" y="535" fill="#ef4444" font-weight="bold">+$200 saved</text>
            </g>
            <text x="60" y="565" width="1000" height="490" fill="#1a1a2e" stroke="#10b981" stroke-width="2"/>
            <text x="560" y="605" text-anchor="middle" fill="#10b981" font-size="22" font-weight="bold">If Anna Had Used the 50% Rule</text>
            <text x="80" y="650" fill="#ffffff" font-size="15">Day 1 of new salary: she increases 401k contribution by $300/mo</text>
            <text x="80" y="680" fill="#ffffff" font-size="15">Day 1: she sets up $250/mo auto-transfer to Roth IRA</text>
            <text x="80" y="710" fill="#ffffff" font-size="15">Total captured: $550/mo. Take-home now appears $550 higher than before.</text>
            <text x="80" y="750" fill="#ffd700" font-size="16" font-weight="bold">Her lifestyle gets the OTHER $550/mo:</text>
            <text x="100" y="780" fill="#ffffff" font-size="14">• Apartment upgrade — but to a $2,100 1BR (not $2,400) — $300/mo</text>
            <text x="100" y="805" fill="#ffffff" font-size="14">• Keeps the paid-off Honda, saves for next car cash</text>
            <text x="100" y="830" fill="#ffffff" font-size="14">• Eurotrip from sinking fund, no credit card</text>
            <text x="100" y="855" fill="#ffffff" font-size="14">• DoorDash 1x/week treat — not 3x — $130/mo</text>
            <text x="100" y="880" fill="#ffffff" font-size="14">• Better wardrobe pieces from budget — $120/mo</text>
            <text x="80" y="925" fill="#10b981" font-size="16" font-weight="bold">Results after 24 months:</text>
            <text x="100" y="955" fill="#ffffff" font-size="14">• 401k balance: $14,300 invested ($7,200 employer match included)</text>
            <text x="100" y="980" fill="#ffffff" font-size="14">• Roth IRA: $6,000 invested</text>
            <text x="100" y="1005" fill="#ffffff" font-size="14">• Still upgraded apartment, still took Eurotrip, still felt richer</text>
            <text x="100" y="1035" fill="#ffd700" font-size="16" font-weight="bold">30-yr future value of captured raise @ 8%: $140,000</text>
          </svg>`,
          caption: "Anna's $20,000 raise vanished into a slightly nicer life. The 50% rule version: she would have felt almost as rich AND have $140,000 at retirement from this single raise."
        }
      },
      {
        type: "quiz",
        title: "Lifestyle Inflation — Check Your Understanding",
        content: `Test the rule and the timing.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold">Quiz: The 50% Rule</text>
            <text x="80" y="125" fill="#ffffff" font-size="18" font-weight="bold">Scenario</text>
            <text x="80" y="160" fill="#ffffff" font-size="15">Ravi gets promoted: $72,000 → $90,000 salary. Take-home increase: ~$1,050/mo.</text>
            <text x="80" y="185" fill="#ffffff" font-size="15">His first new paycheck hits Friday. He has $0 in his 401k beyond match.</text>
            <text x="80" y="245" fill="#ffd700" font-size="18" font-weight="bold">What should he do BEFORE Friday?</text>
            <g font-size="15">
              <rect x="80" y="285" width="940" height="70" fill="#1a1a2e" stroke="#888"/>
              <text x="100" y="315" fill="#ffffff">A) Let the paycheck hit, see how it feels, decide next month</text>
              <text x="100" y="340" fill="#888" font-size="13">(this is exactly when adaptation makes you spend it)</text>
              <rect x="80" y="365" width="940" height="70" fill="#1a1a2e" stroke="#10b981" stroke-width="3"/>
              <text x="100" y="395" fill="#10b981" font-weight="bold">B) Increase 401k contribution by ~$525/mo so he never sees half the raise</text>
              <text x="100" y="420" fill="#10b981" font-size="13">(captures within the 30-day adaptation window, pre-tax bonus)</text>
              <rect x="80" y="445" width="940" height="70" fill="#1a1a2e" stroke="#888"/>
              <text x="100" y="475" fill="#ffffff">C) Save 100% of the raise — no lifestyle change at all</text>
              <text x="100" y="500" fill="#888" font-size="13">(virtuous but not sustainable; deprivation triggers rebound spending)</text>
              <rect x="80" y="525" width="940" height="70" fill="#1a1a2e" stroke="#888"/>
              <text x="100" y="555" fill="#ffffff">D) Wait a year, "treat himself" first, save next year</text>
              <text x="100" y="580" fill="#888" font-size="13">(this is the path to net zero gain after 2 years)</text>
            </g>
            <rect x="80" y="630" width="940" height="420" fill="#1a1a2e" stroke="#ffd700"/>
            <text x="550" y="670" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">Why B is correct</text>
            <text x="100" y="710" fill="#ffffff" font-size="15">Take-home raise: $1,050/mo. The 50% rule: capture $525/mo.</text>
            <text x="100" y="745" fill="#ffd700" font-size="15" font-weight="bold">Where to put it:</text>
            <text x="100" y="775" fill="#ffffff" font-size="14">• 401k contribution increase: $525/mo (pre-tax → costs only ~$400 take-home)</text>
            <text x="100" y="800" fill="#ffffff" font-size="14">• OR split: $300/mo 401k + $225/mo Roth IRA</text>
            <text x="100" y="840" fill="#10b981" font-size="15" font-weight="bold">Timing matters: BEFORE Friday's paycheck</text>
            <text x="100" y="870" fill="#ffffff" font-size="14">If he waits even 2-3 paychecks, the extra appears as "normal" income.</text>
            <text x="100" y="895" fill="#ffffff" font-size="14">Adapting back down feels like loss — humans avoid loss 2x more than gain.</text>
            <text x="100" y="940" fill="#ffd700" font-size="15" font-weight="bold">What about lifestyle?</text>
            <text x="100" y="970" fill="#ffffff" font-size="14">He still sees ~$525/mo more in checking — that's a real, felt upgrade.</text>
            <text x="100" y="1000" fill="#ffffff" font-size="14">He doesn't feel deprived (avoiding answer C's rebound risk).</text>
            <text x="100" y="1030" fill="#10b981" font-size="14" font-weight="bold">Result: real lifestyle improvement + $525/mo for 30 years = ~$735k at retirement.</text>
          </svg>`,
          caption: "Timing is the secret: capture the 50% before the first new paycheck so adaptation never anchors to the full amount."
        },
        question: "Ravi just got promoted from $72,000 to $90,000, adding $1,050/mo to his take-home. His first new paycheck hits Friday. What should he do BEFORE Friday?",
        options: [
          { text: "Let the paycheck hit, see how it feels, decide next month", correct: false },
          { text: "Increase his 401k contribution by ~$525/mo so half the raise never enters his checking", correct: true },
          { text: "Save 100% of the raise — no lifestyle change at all", correct: false },
          { text: "Wait a year, treat himself first, save next year", correct: false }
        ],
        explanation: "Capture 50% within the 30-day adaptation window — ideally before the first new paycheck arrives. A 401k bump uses pre-tax dollars, so $525/mo invested only costs ~$400 in take-home. He still sees a real lifestyle upgrade (the other $525/mo), avoiding the deprivation rebound from a 100% capture."
      },
      {
        type: "application",
        title: "Your Raise-Day Script: What to Do in the First 72 Hours",
        content: `When you get a raise, **the first 72 hours** determine whether it builds wealth or vanishes. Use this script.

**Hour 1 — Calculate the take-home increase.**
Multiply gross raise by **~0.70** to estimate after-tax. ($10k raise ≈ $7,000 take-home, or ~$583/mo.)

**Hour 2 — Decide the 50% split.**
Half to **capture**, half to **lifestyle**. Write the numbers down. Tell your partner.

**Hour 24 — Log into your 401k.**
**Increase your contribution by half** the take-home raise. If $7k take-home raise = $292/mo, raise your contribution by **$300/mo**. The portal lets you set this as a **% of salary** — calculate the % needed.

**Hour 48 — Set Roth IRA auto-transfer.**
If 401k is already maxed or you want diversification, set a **monthly auto-transfer to your Roth IRA** for the captured amount.

**Hour 72 — Decide the lifestyle half.**
What specific upgrade brings real joy? Pick **one** of: better apartment, gym you'll actually use, nicer groceries, more dinners with friends. **Not** subscriptions, cars, or gadgets — those depreciate and lock you in.

**The trap to avoid:** "I'll set up savings *after* I see how it feels." That sentence is how the entire raise vanishes. **Set up the capture BEFORE the first new paycheck.**

This script takes 90 minutes. The compounded value over a career: **hundreds of thousands of dollars**.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold">Your 72-Hour Raise-Day Script</text>
            <text x="550" y="90" text-anchor="middle" fill="#888" font-size="16">90 minutes of work → hundreds of thousands of dollars over a career</text>
            <g>
              <rect x="60" y="120" width="990" height="150" fill="#1a1a2e" stroke="#10b981" stroke-width="2"/>
              <circle cx="110" cy="160" r="28" fill="#10b981"/>
              <text x="110" y="168" text-anchor="middle" fill="#1a1a2e" font-size="14" font-weight="bold">HR 1</text>
              <text x="160" y="155" fill="#10b981" font-size="20" font-weight="bold">Calculate the take-home increase</text>
              <text x="160" y="185" fill="#ffffff" font-size="14">Gross raise × 0.70 ≈ after-tax annual.  Divide by 12 = monthly increase.</text>
              <text x="160" y="212" fill="#ffd700" font-size="14" font-weight="bold">Example: $10,000 gross → $7,000 take-home → $583/mo</text>
              <text x="160" y="240" fill="#888" font-size="13">Pull up your last paystub for accurate effective tax rate</text>
              <rect x="60" y="290" width="990" height="150" fill="#1a1a2e" stroke="#ffd700" stroke-width="2"/>
              <circle cx="110" cy="330" r="28" fill="#ffd700"/>
              <text x="110" y="338" text-anchor="middle" fill="#1a1a2e" font-size="14" font-weight="bold">HR 2</text>
              <text x="160" y="325" fill="#ffd700" font-size="20" font-weight="bold">Decide the 50% split, write it down</text>
              <text x="160" y="355" fill="#ffffff" font-size="14">Capture half, lifestyle half.  Tell your partner / accountability friend.</text>
              <text x="160" y="382" fill="#ffd700" font-size="14" font-weight="bold">$583/mo split: $292 captured, $291 lifestyle</text>
              <text x="160" y="410" fill="#888" font-size="13">Saying it out loud commits you. Texting it to someone doubles the odds you follow through.</text>
              <rect x="60" y="460" width="990" height="150" fill="#1a1a2e" stroke="#6366f1" stroke-width="2"/>
              <circle cx="110" cy="500" r="28" fill="#6366f1"/>
              <text x="110" y="508" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="bold">HR 24</text>
              <text x="160" y="495" fill="#6366f1" font-size="20" font-weight="bold">Log into 401k, increase contribution</text>
              <text x="160" y="525" fill="#ffffff" font-size="14">Most plans ask for a %.  Calculate: (capture_amount × 12) / new_gross_salary = %</text>
              <text x="160" y="555" fill="#ffd700" font-size="14" font-weight="bold">$292/mo capture on $90k salary = ~3.9% additional contribution</text>
              <text x="160" y="583" fill="#888" font-size="13">If 401k already maxed, route capture to HSA (if eligible) then Roth IRA</text>
              <rect x="60" y="630" width="990" height="150" fill="#1a1a2e" stroke="#0ea5e9" stroke-width="2"/>
              <circle cx="110" cy="670" r="28" fill="#0ea5e9"/>
              <text x="110" y="678" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="bold">HR 48</text>
              <text x="160" y="665" fill="#0ea5e9" font-size="20" font-weight="bold">Set Roth IRA auto-transfer</text>
              <text x="160" y="695" fill="#ffffff" font-size="14">If 401k already covers the capture, layer in Roth for diversification.</text>
              <text x="160" y="725" fill="#ffffff" font-size="14">2026 limits: $7,000 IRA, $8,000 if age 50+.  Backdoor Roth if over income limit.</text>
              <text x="160" y="755" fill="#ffd700" font-size="14" font-weight="bold">Fidelity, Schwab, Vanguard all support free auto-transfers</text>
              <rect x="60" y="800" width="990" height="150" fill="#1a1a2e" stroke="#ec4899" stroke-width="2"/>
              <circle cx="110" cy="840" r="28" fill="#ec4899"/>
              <text x="110" y="848" text-anchor="middle" fill="#1a1a2e" font-size="13" font-weight="bold">HR 72</text>
              <text x="160" y="835" fill="#ec4899" font-size="20" font-weight="bold">Decide the lifestyle half — pick ONE upgrade</text>
              <text x="160" y="865" fill="#10b981" font-size="14">YES: better groceries, restaurant nights with friends, used gym, music lessons</text>
              <text x="160" y="893" fill="#ef4444" font-size="14">AVOID: subscriptions, car upgrades, leased gadgets, fixed-cost commitments</text>
              <text x="160" y="925" fill="#888" font-size="13">Experiences and food beat objects in long-run happiness research</text>
              <rect x="60" y="970" width="990" height="90" fill="#1a1a2e" stroke="#ef4444" stroke-width="2"/>
              <text x="80" y="1005" fill="#ef4444" font-size="18" font-weight="bold">The trap: "I'll set up savings AFTER I see how it feels."</text>
              <text x="80" y="1035" fill="#ffffff" font-size="14">That sentence is how every raise vanishes. Adaptation happens in 30 days. Capture BEFORE.</text>
            </g>
          </svg>`,
          caption: "The 72-hour script. Hour 1: math. Hour 2: split. Hour 24: 401k bump. Hour 48: Roth setup. Hour 72: one chosen lifestyle upgrade. Done before the first new paycheck."
        }
      }
    ]
  }
];

    const BOOKS = [
        {
            id: 'pf-budgeting',
            title: 'Budgeting that Actually Works: From Spreadsheets to Habits',
            author: 'Synthesis Learning',
            description: 'Why most budgets collapse in week 3, the 50/30/20 rule and when to break it, and zero-based budgeting as a system that survives real life.',
            lessons: 9, duration: 135, progress: 0, category: 'personal-finance-track',
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
        courseHub: true,
        parts: [
            { romanNum: 'Part I',   title: 'Cash Flow',               bookIds: ['pf-budgeting'] },
            { romanNum: 'Part II',  title: 'Stability',               bookIds: ['pf-debt','pf-emergency-fund'] },
            { romanNum: 'Part III', title: 'Long-Term Wealth',        bookIds: ['pf-taxes','pf-retirement','pf-investing','pf-real-estate'] },
        ],
        books: BOOKS,
    };
})();
