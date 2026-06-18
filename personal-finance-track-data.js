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
  },
{
    id: "budgeting-track-lesson-10",
    title: "Tools: Apps vs Spreadsheets vs Pen-and-Paper",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "The Tool Doesn't Make the Budget",
        content: `Maya paid **$99/year for YNAB** for three years. She still overspent on groceries every month. Her sister Priya tracked spending in a **$0 spiral notebook** and saved $8,400 last year. The tool isn't the budget — the **habit** is the budget.\n\nBut tools matter for **friction**. The right tool reduces friction enough that you actually do the work. The wrong tool — one that fights your brain — guarantees you'll quit by week 3.\n\nThis lesson is a tour of the **six major budgeting tools** in 2026: YNAB, EveryDollar, Credit Karma (Mint's successor), Tiller, Lunch Money, and Monarch — plus the unkillable spreadsheet and the surprising **pen-and-paper resurgence** among 20-somethings on TikTok.\n\nBy the end you'll know which tool fits your brain, your partner's brain, and your bank's API limits. Spoiler: **the best tool is the one you'll open on a Tuesday night.**`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="80" text-anchor="middle" fill="#ffd700" font-size="38" font-weight="bold">The Friction Equation</text><text x="550" y="130" text-anchor="middle" fill="#888" font-size="20">Why your $99 app loses to a notebook</text><rect x="100" y="180" width="400" height="350" rx="15" fill="#ef4444" opacity="0.2" stroke="#ef4444" stroke-width="3"/><text x="300" y="225" text-anchor="middle" fill="#ef4444" font-size="26" font-weight="bold">High Friction</text><text x="300" y="265" text-anchor="middle" fill="#ffffff" font-size="18">- 12 categories to assign</text><text x="300" y="295" text-anchor="middle" fill="#ffffff" font-size="18">- Bank sync broken weekly</text><text x="300" y="325" text-anchor="middle" fill="#ffffff" font-size="18">- App opens slowly</text><text x="300" y="355" text-anchor="middle" fill="#ffffff" font-size="18">- Notifications overwhelm</text><text x="300" y="395" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">Result:</text><text x="300" y="425" text-anchor="middle" fill="#ffffff" font-size="18">Quit by week 3</text><text x="300" y="475" text-anchor="middle" fill="#ef4444" font-size="40" font-weight="bold">87%</text><text x="300" y="510" text-anchor="middle" fill="#888" font-size="16">churn rate</text><rect x="600" y="180" width="400" height="350" rx="15" fill="#10b981" opacity="0.2" stroke="#10b981" stroke-width="3"/><text x="800" y="225" text-anchor="middle" fill="#10b981" font-size="26" font-weight="bold">Low Friction</text><text x="800" y="265" text-anchor="middle" fill="#ffffff" font-size="18">- 5 categories max</text><text x="800" y="295" text-anchor="middle" fill="#ffffff" font-size="18">- 90-second daily check</text><text x="800" y="325" text-anchor="middle" fill="#ffffff" font-size="18">- Always within reach</text><text x="800" y="355" text-anchor="middle" fill="#ffffff" font-size="18">- Feels like a game</text><text x="800" y="395" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">Result:</text><text x="800" y="425" text-anchor="middle" fill="#ffffff" font-size="18">Sticks past month 6</text><text x="800" y="475" text-anchor="middle" fill="#10b981" font-size="40" font-weight="bold">73%</text><text x="800" y="510" text-anchor="middle" fill="#888" font-size="16">retention</text><rect x="200" y="600" width="700" height="180" rx="15" fill="#0ea5e9" opacity="0.15" stroke="#0ea5e9" stroke-width="2"/><text x="550" y="645" text-anchor="middle" fill="#0ea5e9" font-size="24" font-weight="bold">The Maya vs Priya Test</text><text x="550" y="685" text-anchor="middle" fill="#ffffff" font-size="20">Maya: YNAB Premium, $99/yr, overspent monthly</text><text x="550" y="720" text-anchor="middle" fill="#ffffff" font-size="20">Priya: spiral notebook, $0, saved $8,400</text><text x="550" y="755" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">Habit beats software. Every time.</text><text x="550" y="850" text-anchor="middle" fill="#ffd700" font-size="24" font-weight="bold">The best tool = the one you open Tuesday night</text><circle cx="300" cy="950" r="60" fill="#6366f1" opacity="0.3" stroke="#6366f1" stroke-width="3"/><text x="300" y="958" text-anchor="middle" fill="#ffd700" font-size="24" font-weight="bold">App</text><circle cx="550" cy="950" r="60" fill="#8b5cf6" opacity="0.3" stroke="#8b5cf6" stroke-width="3"/><text x="550" y="958" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">Sheet</text><circle cx="800" cy="950" r="60" fill="#ec4899" opacity="0.3" stroke="#ec4899" stroke-width="3"/><text x="800" y="958" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">Paper</text><text x="550" y="1050" text-anchor="middle" fill="#888" font-size="18">Three paths. Pick the one you'll actually use.</text></svg>`,
          caption: "Friction kills budgets faster than overspending does."
        }
      },
      {
        type: "concept",
        title: "The Six Tools, Ranked by Brain Type",
        content: `**YNAB** ($109/yr) — Zero-based, envelope-style. Best for **control freaks** who want every dollar named. Steep learning curve (8-10 hours). Cult-like community.\n\n**EveryDollar** ($79.99/yr Premium, free tier exists) — Ramsey's app. Simpler than YNAB, weaker bank sync. Best for **debt-payoff focus**.\n\n**Credit Karma** (free) — Mint's successor after Intuit killed Mint in 2024. Ads everywhere, weak budgeting features, but **free and decent for tracking**.\n\n**Tiller** ($79/yr) — Pumps bank data into a **Google Sheet you control**. Best for **spreadsheet lovers** who hate apps.\n\n**Lunch Money** ($100/yr) — Beautiful, indie, made for **freelancers and crypto holders**. Multi-currency. Newsletter-vibes founder.\n\n**Monarch** ($99.99/yr) — The Mint refugees' choice. Great for **couples** (joint + separate views), strong investment tracking.\n\nThe **partner-who-hates-apps fix**: one of you runs the app, the other gets a **weekly 10-minute readout** at the Sunday meeting. No login required for the skeptic.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="60" text-anchor="middle" fill="#ffd700" font-size="34" font-weight="bold">The Six-Tool Comparison Table</text><text x="550" y="100" text-anchor="middle" fill="#888" font-size="18">2026 pricing, brain-type, and best-fit</text><rect x="50" y="140" width="1000" height="50" fill="#6366f1" opacity="0.3" stroke="#6366f1"/><text x="130" y="172" text-anchor="middle" fill="#ffd700" font-size="18" font-weight="bold">Tool</text><text x="320" y="172" text-anchor="middle" fill="#ffd700" font-size="18" font-weight="bold">Cost/yr</text><text x="490" y="172" text-anchor="middle" fill="#ffd700" font-size="18" font-weight="bold">Style</text><text x="700" y="172" text-anchor="middle" fill="#ffd700" font-size="18" font-weight="bold">Best For</text><text x="930" y="172" text-anchor="middle" fill="#ffd700" font-size="18" font-weight="bold">Curve</text><rect x="50" y="190" width="1000" height="70" fill="#10b981" opacity="0.15"/><text x="130" y="232" text-anchor="middle" fill="#10b981" font-size="20" font-weight="bold">YNAB</text><text x="320" y="232" text-anchor="middle" fill="#ffffff" font-size="18">$109</text><text x="490" y="232" text-anchor="middle" fill="#ffffff" font-size="16">Zero-based envelope</text><text x="700" y="232" text-anchor="middle" fill="#ffffff" font-size="16">Control freaks</text><text x="930" y="232" text-anchor="middle" fill="#ef4444" font-size="18">Steep</text><rect x="50" y="260" width="1000" height="70" fill="#f59e0b" opacity="0.15"/><text x="130" y="302" text-anchor="middle" fill="#f59e0b" font-size="18" font-weight="bold">EveryDollar</text><text x="320" y="302" text-anchor="middle" fill="#ffffff" font-size="18">$79.99</text><text x="490" y="302" text-anchor="middle" fill="#ffffff" font-size="16">Zero-based simple</text><text x="700" y="302" text-anchor="middle" fill="#ffffff" font-size="16">Debt payoff</text><text x="930" y="302" text-anchor="middle" fill="#10b981" font-size="18">Easy</text><rect x="50" y="330" width="1000" height="70" fill="#888" opacity="0.15"/><text x="130" y="372" text-anchor="middle" fill="#888" font-size="18" font-weight="bold">CreditKarma</text><text x="320" y="372" text-anchor="middle" fill="#10b981" font-size="18">FREE</text><text x="490" y="372" text-anchor="middle" fill="#ffffff" font-size="16">Track + ads</text><text x="700" y="372" text-anchor="middle" fill="#ffffff" font-size="16">Casual tracking</text><text x="930" y="372" text-anchor="middle" fill="#10b981" font-size="18">Easy</text><rect x="50" y="400" width="1000" height="70" fill="#0ea5e9" opacity="0.15"/><text x="130" y="442" text-anchor="middle" fill="#0ea5e9" font-size="20" font-weight="bold">Tiller</text><text x="320" y="442" text-anchor="middle" fill="#ffffff" font-size="18">$79</text><text x="490" y="442" text-anchor="middle" fill="#ffffff" font-size="16">Sheets + bank feed</text><text x="700" y="442" text-anchor="middle" fill="#ffffff" font-size="16">Sheet lovers</text><text x="930" y="442" text-anchor="middle" fill="#f59e0b" font-size="18">Medium</text><rect x="50" y="470" width="1000" height="70" fill="#ec4899" opacity="0.15"/><text x="130" y="512" text-anchor="middle" fill="#ec4899" font-size="18" font-weight="bold">LunchMoney</text><text x="320" y="512" text-anchor="middle" fill="#ffffff" font-size="18">$100</text><text x="490" y="512" text-anchor="middle" fill="#ffffff" font-size="16">Indie, multicurrency</text><text x="700" y="512" text-anchor="middle" fill="#ffffff" font-size="16">Freelancers</text><text x="930" y="512" text-anchor="middle" fill="#f59e0b" font-size="18">Medium</text><rect x="50" y="540" width="1000" height="70" fill="#8b5cf6" opacity="0.15"/><text x="130" y="582" text-anchor="middle" fill="#8b5cf6" font-size="20" font-weight="bold">Monarch</text><text x="320" y="582" text-anchor="middle" fill="#ffffff" font-size="18">$99.99</text><text x="490" y="582" text-anchor="middle" fill="#ffffff" font-size="16">Joint + separate</text><text x="700" y="582" text-anchor="middle" fill="#ffffff" font-size="16">Couples</text><text x="930" y="582" text-anchor="middle" fill="#10b981" font-size="18">Easy</text><rect x="100" y="660" width="900" height="180" rx="15" fill="#ffd700" opacity="0.1" stroke="#ffd700" stroke-width="2"/><text x="550" y="700" text-anchor="middle" fill="#ffd700" font-size="24" font-weight="bold">The Partner-Who-Hates-Apps Fix</text><text x="550" y="740" text-anchor="middle" fill="#ffffff" font-size="18">One partner runs the app. The other gets:</text><text x="550" y="775" text-anchor="middle" fill="#10b981" font-size="20">A 10-min Sunday readout with 3 numbers:</text><text x="550" y="810" text-anchor="middle" fill="#ffffff" font-size="18">spent, saved, sinking-fund balances</text><rect x="200" y="880" width="700" height="100" rx="15" fill="#ec4899" opacity="0.15" stroke="#ec4899" stroke-width="2"/><text x="550" y="920" text-anchor="middle" fill="#ec4899" font-size="22" font-weight="bold">The Pen-and-Paper Resurgence</text><text x="550" y="955" text-anchor="middle" fill="#ffffff" font-size="18">#cashstuffing on TikTok: 4.2B views, mostly under-25s</text><text x="550" y="1030" text-anchor="middle" fill="#888" font-size="16">Tactile = memorable. The notebook never crashes.</text></svg>`,
          caption: "Match the tool to the brain — not the brain to the tool."
        }
      },
      {
        type: "example",
        title: "Three Real Setups That Worked",
        content: `**Jordan, 28, software engineer, $112K** — Picked **YNAB** because he loves systems. Spent a Saturday categorizing 6 months of transactions. Net worth up **$24,000 in 18 months**. Says: "It's a hobby now."\n\n**Aisha, 34, nurse + husband Dev, hates apps** — Tried Monarch (Dev refused to log in). Switched to a **Tiller Google Sheet**. Aisha updates it; Dev sees it on the shared kitchen iPad on Sundays. They stuck with it **14 months and counting**.\n\n**Tomas, 23, barista, $34K** — Tried YNAB free trial, got overwhelmed by 19 categories. Quit. His roommate showed him **cash stuffing** — a $12 binder with 6 envelopes (rent, food, gas, fun, savings, oh-no fund). He pulls $400 cash every Friday and stuffs it. **Saved $3,100 in 8 months** — first savings of his life.\n\nThree people, three tools, three working budgets. **Friction-fit > feature-fit** every time.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="60" text-anchor="middle" fill="#ffd700" font-size="34" font-weight="bold">Three Setups, Three Wins</text><text x="550" y="100" text-anchor="middle" fill="#888" font-size="18">Different brains, different tools, same outcome</text><rect x="60" y="150" width="320" height="850" rx="15" fill="#10b981" opacity="0.15" stroke="#10b981" stroke-width="3"/><circle cx="220" cy="220" r="50" fill="#10b981" opacity="0.4"/><text x="220" y="232" text-anchor="middle" fill="#ffd700" font-size="30" font-weight="bold">J</text><text x="220" y="300" text-anchor="middle" fill="#10b981" font-size="24" font-weight="bold">Jordan, 28</text><text x="220" y="330" text-anchor="middle" fill="#ffffff" font-size="16">Software Engineer</text><text x="220" y="355" text-anchor="middle" fill="#ffffff" font-size="16">$112,000/yr</text><line x1="100" y1="380" x2="340" y2="380" stroke="#10b981" stroke-width="2"/><text x="220" y="420" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">Tool: YNAB</text><text x="220" y="460" text-anchor="middle" fill="#ffffff" font-size="15">Loves systems</text><text x="220" y="490" text-anchor="middle" fill="#ffffff" font-size="15">Setup: 1 Sat (8 hrs)</text><text x="220" y="520" text-anchor="middle" fill="#ffffff" font-size="15">Categories: 23</text><text x="220" y="550" text-anchor="middle" fill="#ffffff" font-size="15">Bank sync: daily</text><line x1="100" y1="600" x2="340" y2="600" stroke="#10b981" stroke-width="2"/><text x="220" y="640" text-anchor="middle" fill="#ffd700" font-size="18" font-weight="bold">18-month result:</text><text x="220" y="690" text-anchor="middle" fill="#10b981" font-size="32" font-weight="bold">+$24,000</text><text x="220" y="720" text-anchor="middle" fill="#888" font-size="14">net worth growth</text><text x="220" y="800" text-anchor="middle" fill="#ffffff" font-size="14" font-style="italic">"It's a hobby now."</text><rect x="390" y="150" width="320" height="850" rx="15" fill="#8b5cf6" opacity="0.15" stroke="#8b5cf6" stroke-width="3"/><circle cx="550" cy="220" r="50" fill="#8b5cf6" opacity="0.4"/><text x="550" y="232" text-anchor="middle" fill="#ffd700" font-size="30" font-weight="bold">A+D</text><text x="550" y="300" text-anchor="middle" fill="#8b5cf6" font-size="24" font-weight="bold">Aisha 34 + Dev</text><text x="550" y="330" text-anchor="middle" fill="#ffffff" font-size="16">Nurse + Husband</text><text x="550" y="355" text-anchor="middle" fill="#ffffff" font-size="16">Dev refuses apps</text><line x1="430" y1="380" x2="670" y2="380" stroke="#8b5cf6" stroke-width="2"/><text x="550" y="420" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">Tool: Tiller</text><text x="550" y="460" text-anchor="middle" fill="#ffffff" font-size="15">Google Sheet base</text><text x="550" y="490" text-anchor="middle" fill="#ffffff" font-size="15">Aisha updates</text><text x="550" y="520" text-anchor="middle" fill="#ffffff" font-size="15">Dev: kitchen iPad</text><text x="550" y="550" text-anchor="middle" fill="#ffffff" font-size="15">Sunday review</text><line x1="430" y1="600" x2="670" y2="600" stroke="#8b5cf6" stroke-width="2"/><text x="550" y="640" text-anchor="middle" fill="#ffd700" font-size="18" font-weight="bold">14 months in:</text><text x="550" y="690" text-anchor="middle" fill="#8b5cf6" font-size="32" font-weight="bold">Still going</text><text x="550" y="720" text-anchor="middle" fill="#888" font-size="14">zero fights</text><text x="550" y="800" text-anchor="middle" fill="#ffffff" font-size="14" font-style="italic">"Dev doesn't have to log in."</text><rect x="720" y="150" width="320" height="850" rx="15" fill="#ec4899" opacity="0.15" stroke="#ec4899" stroke-width="3"/><circle cx="880" cy="220" r="50" fill="#ec4899" opacity="0.4"/><text x="880" y="232" text-anchor="middle" fill="#ffd700" font-size="30" font-weight="bold">T</text><text x="880" y="300" text-anchor="middle" fill="#ec4899" font-size="24" font-weight="bold">Tomas, 23</text><text x="880" y="330" text-anchor="middle" fill="#ffffff" font-size="16">Barista</text><text x="880" y="355" text-anchor="middle" fill="#ffffff" font-size="16">$34,000/yr</text><line x1="760" y1="380" x2="1000" y2="380" stroke="#ec4899" stroke-width="2"/><text x="880" y="420" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">Tool: Paper</text><text x="880" y="460" text-anchor="middle" fill="#ffffff" font-size="15">$12 binder, 6 envs</text><text x="880" y="490" text-anchor="middle" fill="#ffffff" font-size="15">$400 cash Fridays</text><text x="880" y="520" text-anchor="middle" fill="#ffffff" font-size="15">Stuff &amp; close</text><text x="880" y="550" text-anchor="middle" fill="#ffffff" font-size="15">TikTok-inspired</text><line x1="760" y1="600" x2="1000" y2="600" stroke="#ec4899" stroke-width="2"/><text x="880" y="640" text-anchor="middle" fill="#ffd700" font-size="18" font-weight="bold">8-month result:</text><text x="880" y="690" text-anchor="middle" fill="#ec4899" font-size="32" font-weight="bold">+$3,100</text><text x="880" y="720" text-anchor="middle" fill="#888" font-size="14">first savings ever</text><text x="880" y="800" text-anchor="middle" fill="#ffffff" font-size="14" font-style="italic">"I can SEE the money."</text><text x="550" y="1060" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">Friction-fit beats feature-fit. Always.</text></svg>`,
          caption: "Three completely different setups. Three wins. The fit is what matters."
        }
      },
      {
        type: "quiz",
        title: "Tool Selection Quiz",
        content: `Lila and her partner Sam tried Monarch for 3 months. Sam never opened it. Lila is frustrated because Sam doesn't know how much they spent on groceries. What's the **best fix**?\n\nThink about the partner-who-hates-apps principle.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="34" font-weight="bold">Quiz: The Reluctant Partner</text><rect x="100" y="120" width="900" height="160" rx="15" fill="#6366f1" opacity="0.2" stroke="#6366f1" stroke-width="2"/><text x="550" y="160" text-anchor="middle" fill="#ffffff" font-size="20">Lila + Sam: Monarch, 3 months in</text><text x="550" y="195" text-anchor="middle" fill="#ffffff" font-size="20">Sam refuses to open the app</text><text x="550" y="230" text-anchor="middle" fill="#ffffff" font-size="20">Lila wants Sam to know the grocery number</text><text x="550" y="265" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">What's the best fix?</text><rect x="100" y="320" width="900" height="100" rx="10" fill="#ef4444" opacity="0.15" stroke="#ef4444" stroke-width="2"/><text x="140" y="360" fill="#ef4444" font-size="22" font-weight="bold">A)</text><text x="190" y="360" fill="#ffffff" font-size="20">Set daily push notifications until Sam opens it</text><text x="190" y="390" fill="#888" font-size="16">Nagging via notification — relationship damage</text><rect x="100" y="440" width="900" height="100" rx="10" fill="#10b981" opacity="0.15" stroke="#10b981" stroke-width="2"/><text x="140" y="480" fill="#10b981" font-size="22" font-weight="bold">B)</text><text x="190" y="480" fill="#ffffff" font-size="20">Lila runs the app, gives Sam a 10-min Sunday readout</text><text x="190" y="510" fill="#10b981" font-size="16" font-weight="bold">Correct — partner-who-hates-apps fix</text><rect x="100" y="560" width="900" height="100" rx="10" fill="#ef4444" opacity="0.15" stroke="#ef4444" stroke-width="2"/><text x="140" y="600" fill="#ef4444" font-size="22" font-weight="bold">C)</text><text x="190" y="600" fill="#ffffff" font-size="20">Cancel Monarch, force Sam to use YNAB instead</text><text x="190" y="630" fill="#888" font-size="16">Swapping tools doesn't fix the human</text><rect x="100" y="680" width="900" height="100" rx="10" fill="#ef4444" opacity="0.15" stroke="#ef4444" stroke-width="2"/><text x="140" y="720" fill="#ef4444" font-size="22" font-weight="bold">D)</text><text x="190" y="720" fill="#ffffff" font-size="20">Stop budgeting until Sam agrees to learn the app</text><text x="190" y="750" fill="#888" font-size="16">Punishing the goal to win the tool fight</text><rect x="150" y="820" width="800" height="220" rx="15" fill="#ffd700" opacity="0.1" stroke="#ffd700" stroke-width="2"/><text x="550" y="865" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">Why B works</text><text x="550" y="905" text-anchor="middle" fill="#ffffff" font-size="18">Sam doesn't hate the budget — Sam hates the app.</text><text x="550" y="940" text-anchor="middle" fill="#ffffff" font-size="18">A weekly readout = shared awareness without login pain.</text><text x="550" y="980" text-anchor="middle" fill="#10b981" font-size="20" font-weight="bold">Three numbers: spent, saved, sinking funds.</text><text x="550" y="1020" text-anchor="middle" fill="#ffffff" font-size="16">That's enough for Sam to be a real partner in the plan.</text></svg>`,
          caption: "The fix is delegation, not conversion."
        },
        options: [
          { text: "Set daily push notifications until Sam opens it", correct: false },
          { text: "Lila runs the app, gives Sam a 10-min Sunday readout", correct: true },
          { text: "Cancel Monarch, force Sam to use YNAB instead", correct: false },
          { text: "Stop budgeting until Sam agrees to learn the app", correct: false }
        ],
        explanation: "The partner-who-hates-apps fix: one person owns the tool, the other gets a short weekly readout with 3 numbers (spent, saved, sinking-fund balances). Sam stays informed without ever logging in. Tools should reduce friction, not generate it."
      },
      {
        type: "application",
        title: "Your Tool Decision in 20 Minutes",
        content: `**Step 1 (5 min)**: Rate yourself on three sliders. **Patience for setup**: 1-10. **Love of spreadsheets**: 1-10. **Smartphone-on-couch hours/day**: 1-10. Write the numbers down.\n\n**Step 2 (5 min)**: Match to a tool. **Patience 8+, love sheets 8+** → Tiller. **Patience 5-7, on phone 6+** → Monarch or Lunch Money. **Patience under 4, phone hours under 3** → cash binder. **Debt focus** → EveryDollar. **System lover** → YNAB.\n\n**Step 3 (10 min)**: Sign up for the free trial (every paid tool has one — 14-34 days). Connect ONE bank account only. Categorize the last 30 days of transactions. **Don't go further** — see if the workflow clicks.\n\n**Step 4 (during trial)**: Open it 3 nights this week. If you avoid opening it twice, **the tool is wrong**. Cancel, try the next on your list.\n\nThe right tool feels like a checkpoint. The wrong tool feels like a chore.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="60" text-anchor="middle" fill="#ffd700" font-size="34" font-weight="bold">Your 20-Minute Tool Decision</text><text x="550" y="100" text-anchor="middle" fill="#888" font-size="18">A decision flow, not a paralysis tree</text><rect x="100" y="140" width="900" height="160" rx="15" fill="#0ea5e9" opacity="0.15" stroke="#0ea5e9" stroke-width="3"/><text x="550" y="180" text-anchor="middle" fill="#0ea5e9" font-size="24" font-weight="bold">STEP 1: Rate yourself (5 min)</text><text x="250" y="225" text-anchor="middle" fill="#ffffff" font-size="16">Patience for</text><text x="250" y="245" text-anchor="middle" fill="#ffffff" font-size="16">setup</text><text x="250" y="285" text-anchor="middle" fill="#ffd700" font-size="28" font-weight="bold">__/10</text><text x="550" y="225" text-anchor="middle" fill="#ffffff" font-size="16">Love of</text><text x="550" y="245" text-anchor="middle" fill="#ffffff" font-size="16">spreadsheets</text><text x="550" y="285" text-anchor="middle" fill="#ffd700" font-size="28" font-weight="bold">__/10</text><text x="850" y="225" text-anchor="middle" fill="#ffffff" font-size="16">Phone hours</text><text x="850" y="245" text-anchor="middle" fill="#ffffff" font-size="16">per day</text><text x="850" y="285" text-anchor="middle" fill="#ffd700" font-size="28" font-weight="bold">__/10</text><rect x="100" y="320" width="900" height="240" rx="15" fill="#6366f1" opacity="0.15" stroke="#6366f1" stroke-width="3"/><text x="550" y="360" text-anchor="middle" fill="#6366f1" font-size="24" font-weight="bold">STEP 2: Match to tool (5 min)</text><text x="130" y="400" fill="#10b981" font-size="16" font-weight="bold">Patience 8+ AND sheets 8+</text><text x="600" y="400" fill="#ffffff" font-size="16">→ Tiller ($79/yr)</text><text x="130" y="430" fill="#10b981" font-size="16" font-weight="bold">Patience 5-7 AND phone 6+</text><text x="600" y="430" fill="#ffffff" font-size="16">→ Monarch or Lunch Money</text><text x="130" y="460" fill="#10b981" font-size="16" font-weight="bold">Patience under 4 AND phone under 3</text><text x="600" y="460" fill="#ffffff" font-size="16">→ Cash binder ($12)</text><text x="130" y="490" fill="#10b981" font-size="16" font-weight="bold">Debt-payoff focus</text><text x="600" y="490" fill="#ffffff" font-size="16">→ EveryDollar ($79.99)</text><text x="130" y="520" fill="#10b981" font-size="16" font-weight="bold">System lover, dollar-namer</text><text x="600" y="520" fill="#ffffff" font-size="16">→ YNAB ($109)</text><text x="130" y="550" fill="#10b981" font-size="16" font-weight="bold">Just want free tracking</text><text x="600" y="550" fill="#ffffff" font-size="16">→ Credit Karma (free)</text><rect x="100" y="580" width="900" height="160" rx="15" fill="#8b5cf6" opacity="0.15" stroke="#8b5cf6" stroke-width="3"/><text x="550" y="620" text-anchor="middle" fill="#8b5cf6" font-size="24" font-weight="bold">STEP 3: Free trial test (10 min)</text><text x="550" y="660" text-anchor="middle" fill="#ffffff" font-size="18">Sign up. Connect ONE bank account.</text><text x="550" y="690" text-anchor="middle" fill="#ffffff" font-size="18">Categorize last 30 days only.</text><text x="550" y="720" text-anchor="middle" fill="#ffd700" font-size="18" font-weight="bold">Does the workflow click? Yes/No</text><rect x="100" y="760" width="900" height="160" rx="15" fill="#ec4899" opacity="0.15" stroke="#ec4899" stroke-width="3"/><text x="550" y="800" text-anchor="middle" fill="#ec4899" font-size="24" font-weight="bold">STEP 4: The 3-night test (this week)</text><text x="550" y="840" text-anchor="middle" fill="#ffffff" font-size="18">Open it 3 nights. Track which nights you avoided.</text><text x="550" y="875" text-anchor="middle" fill="#ffffff" font-size="18">2+ skipped = WRONG TOOL. Cancel and try the next.</text><text x="550" y="905" text-anchor="middle" fill="#10b981" font-size="18" font-weight="bold">0-1 skipped = KEEP IT. You found your fit.</text><rect x="200" y="960" width="700" height="100" rx="15" fill="#ffd700" opacity="0.15" stroke="#ffd700" stroke-width="3"/><text x="550" y="1000" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">The Rule</text><text x="550" y="1035" text-anchor="middle" fill="#ffffff" font-size="18">Right tool = checkpoint. Wrong tool = chore.</text></svg>`,
          caption: "Decide in 20 minutes. Trial-test in 1 week. Stop overthinking."
        }
      }
    ]
  },
  {
    id: "budgeting-track-lesson-11",
    title: "Difficult Conversations: Medical Bills, Family Loans, and the Friend Tax",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "The Money Talks Nobody Teaches You",
        content: `Rachel got a **$4,800 emergency room bill** for a 90-minute visit. She paid it. She didn't have to. **62% of medical bills contain errors**, and over half of hospitals will reduce, settle, or waive bills if you simply ask.\n\nMeanwhile, her cousin Marco texted her: "Can I borrow **$2,000** for car repairs? I'll pay you back next month." She said yes. He didn't. Now Thanksgiving is awkward.\n\nAnd her best friend's destination wedding in **Tulum** will cost her **$3,200** in flights, hotel, dress, and the bachelorette in Nashville. She's already said yes to all of it.\n\nThis lesson is three scripts for the three conversations that quietly destroy budgets: **medical bills** (the system expects you to negotiate), **family loans** (the boundary is the love), and the **friend tax** (weddings, dinners, group trips). Each script is short, calm, and battle-tested.\n\nYou will use at least one of these in the next 12 months. **Save them.**`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="36" font-weight="bold">Three Conversations</text><text x="550" y="115" text-anchor="middle" fill="#888" font-size="20">that quietly destroy budgets</text><circle cx="280" cy="320" r="130" fill="#ef4444" opacity="0.2" stroke="#ef4444" stroke-width="4"/><text x="280" y="290" text-anchor="middle" fill="#ef4444" font-size="48" font-weight="bold">$</text><text x="280" y="335" text-anchor="middle" fill="#ffd700" font-size="24" font-weight="bold">Medical</text><text x="280" y="365" text-anchor="middle" fill="#ffd700" font-size="24" font-weight="bold">Bills</text><text x="280" y="500" text-anchor="middle" fill="#ffffff" font-size="20" font-weight="bold">Rachel: $4,800 ER</text><text x="280" y="530" text-anchor="middle" fill="#888" font-size="16">62% contain errors</text><text x="280" y="555" text-anchor="middle" fill="#888" font-size="16">most are negotiable</text><circle cx="550" cy="320" r="130" fill="#f59e0b" opacity="0.2" stroke="#f59e0b" stroke-width="4"/><text x="550" y="305" text-anchor="middle" fill="#f59e0b" font-size="40">family</text><text x="550" y="345" text-anchor="middle" fill="#ffd700" font-size="24" font-weight="bold">Loans</text><text x="550" y="500" text-anchor="middle" fill="#ffffff" font-size="20" font-weight="bold">Marco: $2,000 car</text><text x="550" y="530" text-anchor="middle" fill="#888" font-size="16">never repaid</text><text x="550" y="555" text-anchor="middle" fill="#888" font-size="16">Thanksgiving awkward</text><circle cx="820" cy="320" r="130" fill="#ec4899" opacity="0.2" stroke="#ec4899" stroke-width="4"/><text x="820" y="305" text-anchor="middle" fill="#ec4899" font-size="38">friend</text><text x="820" y="345" text-anchor="middle" fill="#ffd700" font-size="24" font-weight="bold">Tax</text><text x="820" y="500" text-anchor="middle" fill="#ffffff" font-size="20" font-weight="bold">Tulum: $3,200</text><text x="820" y="530" text-anchor="middle" fill="#888" font-size="16">wedding + bachelorette</text><text x="820" y="555" text-anchor="middle" fill="#888" font-size="16">already said yes</text><line x1="280" y1="600" x2="280" y2="660" stroke="#10b981" stroke-width="3"/><line x1="550" y1="600" x2="550" y2="660" stroke="#10b981" stroke-width="3"/><line x1="820" y1="600" x2="820" y2="660" stroke="#10b981" stroke-width="3"/><rect x="100" y="680" width="900" height="280" rx="20" fill="#10b981" opacity="0.15" stroke="#10b981" stroke-width="3"/><text x="550" y="730" text-anchor="middle" fill="#10b981" font-size="28" font-weight="bold">Each has a script.</text><text x="550" y="775" text-anchor="middle" fill="#ffffff" font-size="20">Short. Calm. Battle-tested.</text><text x="550" y="815" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">Medical: 3-step de-escalation</text><text x="550" y="855" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">Family: love + boundary script</text><text x="550" y="895" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">Friend tax: opt-in tiers</text><text x="550" y="935" text-anchor="middle" fill="#ffffff" font-size="18">You'll use one in the next 12 months. Save them.</text><text x="550" y="1030" text-anchor="middle" fill="#888" font-size="18">The conversation IS the budget.</text></svg>`,
          caption: "These three talks decide whether your budget survives the year."
        }
      },
      {
        type: "concept",
        title: "The Three Scripts",
        content: `**Medical bill (3-step de-escalation)**:\n1. **"Please send me a fully itemized statement with CPT codes."** This alone catches 30-40% of errors.\n2. **"I'd like to apply for your financial assistance / charity care program."** Every nonprofit hospital must have one (IRS rule). Income up to **400% of poverty line** often qualifies.\n3. **"I can pay $X today as full settlement."** Offer 25-50% of the bill. Hospitals routinely accept.\n\n**Family loan (love + boundary)**:\n*"I love you and I want to help. I don't lend money to family because it changes the relationship. I can give you $200 as a gift with no expectation back, or I can help you call the lender to set up a payment plan. Which would help more?"*\nThe rule: **gift, don't lend**. A gift you can afford to lose is cheaper than the resentment of a loan that doesn't come back.\n\n**Friend tax (tiers)**: Pick **3 weddings/yr max** at full participation. The 4th gets a card + $75 gift. Group dinners: **suggest the place** so you can pick the price tier.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="55" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold">The Three Scripts (memorize these)</text><rect x="40" y="100" width="1020" height="320" rx="15" fill="#ef4444" opacity="0.12" stroke="#ef4444" stroke-width="3"/><text x="60" y="140" fill="#ef4444" font-size="24" font-weight="bold">MEDICAL BILL — 3-Step De-escalation</text><circle cx="100" cy="200" r="30" fill="#ef4444" opacity="0.5"/><text x="100" y="210" text-anchor="middle" fill="#ffd700" font-size="24" font-weight="bold">1</text><text x="150" y="195" fill="#ffffff" font-size="18" font-weight="bold">"Please send me a fully itemized statement</text><text x="150" y="220" fill="#ffffff" font-size="18" font-weight="bold">with CPT codes."</text><text x="150" y="245" fill="#888" font-size="15">Catches 30-40% errors. Saves average $400.</text><circle cx="100" cy="290" r="30" fill="#ef4444" opacity="0.5"/><text x="100" y="300" text-anchor="middle" fill="#ffd700" font-size="24" font-weight="bold">2</text><text x="150" y="285" fill="#ffffff" font-size="18" font-weight="bold">"I'd like to apply for financial assistance /</text><text x="150" y="310" fill="#ffffff" font-size="18" font-weight="bold">charity care."</text><text x="150" y="335" fill="#888" font-size="15">IRS rule: every nonprofit hospital must offer it. 400% poverty line.</text><circle cx="100" cy="380" r="30" fill="#ef4444" opacity="0.5"/><text x="100" y="390" text-anchor="middle" fill="#ffd700" font-size="24" font-weight="bold">3</text><text x="150" y="375" fill="#ffffff" font-size="18" font-weight="bold">"I can pay $X today as full settlement."</text><text x="150" y="400" fill="#888" font-size="15">Offer 25-50% of bill. Hospitals routinely accept.</text><rect x="40" y="445" width="1020" height="280" rx="15" fill="#f59e0b" opacity="0.12" stroke="#f59e0b" stroke-width="3"/><text x="60" y="485" fill="#f59e0b" font-size="24" font-weight="bold">FAMILY LOAN — Love + Boundary</text><rect x="80" y="510" width="940" height="160" rx="10" fill="#1a1a2e" stroke="#f59e0b" stroke-width="1"/><text x="100" y="540" fill="#ffd700" font-size="18" font-style="italic">"I love you and I want to help.</text><text x="100" y="568" fill="#ffd700" font-size="18" font-style="italic">I don't lend money to family because it changes the relationship.</text><text x="100" y="596" fill="#ffd700" font-size="18" font-style="italic">I can give you $200 as a gift with no expectation back,</text><text x="100" y="624" fill="#ffd700" font-size="18" font-style="italic">or I can help you call the lender to set up a payment plan.</text><text x="100" y="652" fill="#ffd700" font-size="18" font-style="italic">Which would help more?"</text><text x="60" y="700" fill="#10b981" font-size="17" font-weight="bold">Rule: GIFT, don't lend. A gift you can lose &lt; resentment of a loan that won't come back.</text><rect x="40" y="745" width="1020" height="280" rx="15" fill="#ec4899" opacity="0.12" stroke="#ec4899" stroke-width="3"/><text x="60" y="785" fill="#ec4899" font-size="24" font-weight="bold">FRIEND TAX — Tier System</text><rect x="80" y="810" width="300" height="180" rx="10" fill="#10b981" opacity="0.2" stroke="#10b981" stroke-width="2"/><text x="230" y="850" text-anchor="middle" fill="#10b981" font-size="22" font-weight="bold">TIER 1: Full</text><text x="230" y="880" text-anchor="middle" fill="#ffffff" font-size="16">3 weddings/year max</text><text x="230" y="905" text-anchor="middle" fill="#ffffff" font-size="16">Travel + gift + outfit</text><text x="230" y="950" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">~$2,500 cap</text><rect x="400" y="810" width="300" height="180" rx="10" fill="#f59e0b" opacity="0.2" stroke="#f59e0b" stroke-width="2"/><text x="550" y="850" text-anchor="middle" fill="#f59e0b" font-size="22" font-weight="bold">TIER 2: Local</text><text x="550" y="880" text-anchor="middle" fill="#ffffff" font-size="16">Unlimited if drivable</text><text x="550" y="905" text-anchor="middle" fill="#ffffff" font-size="16">Cap gift at $100</text><text x="550" y="950" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">~$600 cap</text><rect x="720" y="810" width="300" height="180" rx="10" fill="#ec4899" opacity="0.2" stroke="#ec4899" stroke-width="2"/><text x="870" y="850" text-anchor="middle" fill="#ec4899" font-size="22" font-weight="bold">TIER 3: Card</text><text x="870" y="880" text-anchor="middle" fill="#ffffff" font-size="16">Everyone else</text><text x="870" y="905" text-anchor="middle" fill="#ffffff" font-size="16">$50-75 + handwritten</text><text x="870" y="950" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">$75 each</text><text x="550" y="1060" text-anchor="middle" fill="#ffd700" font-size="18" font-weight="bold">Pick the restaurant = pick the price tier.</text></svg>`,
          caption: "Three scripts. Print them. Keep them in your phone notes."
        }
      },
      {
        type: "example",
        title: "Rachel Runs All Three in 90 Days",
        content: `**Day 1 — Medical bill, $4,800 ER visit.** Rachel calls billing. Asks for itemized statement. Spots a **duplicate $1,200 charge** for an MRI counted twice. Corrected balance: **$3,600**.\n\n**Day 14 — Financial assistance.** Hospital application takes 20 min. Her household income is **$58K** (under 400% poverty line for her area). Approved for **60% reduction**. Balance now: **$1,440**.\n\n**Day 30 — Settlement offer.** "I can pay **$900** today as full settlement." Billing rep: "Let me check… yes, we can do that." She wires $900 from her **emergency fund**. **Net savings: $3,900.**\n\n**Day 45 — Marco's $2,000 ask.** Rachel uses the script. Marco grumbles, then accepts a **$300 gift** and her offer to help him call the credit union. He sets up a $150/month payment plan. **No loan, no resentment.**\n\n**Day 75 — Tulum wedding.** Rachel goes (Tier 1: full participation), declines the Nashville bachelorette ($600 saved), gives the couple a $200 gift. **Total trip: $1,900 instead of $3,200.**\n\n**90-day savings from three conversations: $6,200.**`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="60" text-anchor="middle" fill="#ffd700" font-size="34" font-weight="bold">Rachel's 90-Day Savings Calendar</text><text x="550" y="100" text-anchor="middle" fill="#888" font-size="18">Three conversations, $6,200 saved</text><rect x="80" y="140" width="940" height="220" rx="15" fill="#ef4444" opacity="0.12" stroke="#ef4444" stroke-width="3"/><text x="120" y="180" fill="#ef4444" font-size="22" font-weight="bold">MEDICAL — $4,800 → $900</text><text x="900" y="180" text-anchor="end" fill="#10b981" font-size="22" font-weight="bold">saved $3,900</text><circle cx="180" cy="230" r="35" fill="#ef4444" opacity="0.4"/><text x="180" y="240" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">D1</text><text x="180" y="295" text-anchor="middle" fill="#ffffff" font-size="14">Itemize</text><text x="180" y="320" text-anchor="middle" fill="#888" font-size="13">Spot dup MRI</text><text x="180" y="340" text-anchor="middle" fill="#10b981" font-size="16" font-weight="bold">$3,600</text><circle cx="420" cy="230" r="35" fill="#ef4444" opacity="0.4"/><text x="420" y="240" text-anchor="middle" fill="#ffd700" font-size="18" font-weight="bold">D14</text><text x="420" y="295" text-anchor="middle" fill="#ffffff" font-size="14">Financial aid</text><text x="420" y="320" text-anchor="middle" fill="#888" font-size="13">60% reduction</text><text x="420" y="340" text-anchor="middle" fill="#10b981" font-size="16" font-weight="bold">$1,440</text><circle cx="660" cy="230" r="35" fill="#ef4444" opacity="0.4"/><text x="660" y="240" text-anchor="middle" fill="#ffd700" font-size="18" font-weight="bold">D30</text><text x="660" y="295" text-anchor="middle" fill="#ffffff" font-size="14">Settle</text><text x="660" y="320" text-anchor="middle" fill="#888" font-size="13">offer 25%</text><text x="660" y="340" text-anchor="middle" fill="#10b981" font-size="16" font-weight="bold">$900 done</text><line x1="215" y1="230" x2="385" y2="230" stroke="#ef4444" stroke-width="2" stroke-dasharray="5,5"/><line x1="455" y1="230" x2="625" y2="230" stroke="#ef4444" stroke-width="2" stroke-dasharray="5,5"/><rect x="80" y="380" width="940" height="180" rx="15" fill="#f59e0b" opacity="0.12" stroke="#f59e0b" stroke-width="3"/><text x="120" y="420" fill="#f59e0b" font-size="22" font-weight="bold">FAMILY — Marco asks $2,000</text><text x="900" y="420" text-anchor="end" fill="#10b981" font-size="22" font-weight="bold">saved $1,700</text><circle cx="180" cy="475" r="35" fill="#f59e0b" opacity="0.4"/><text x="180" y="485" text-anchor="middle" fill="#ffd700" font-size="18" font-weight="bold">D45</text><text x="350" y="465" fill="#ffffff" font-size="17">Used the script. Marco accepts $300 gift</text><text x="350" y="495" fill="#ffffff" font-size="17">+ help calling credit union for payment plan</text><text x="350" y="535" fill="#10b981" font-size="18" font-weight="bold">No loan. No resentment. Thanksgiving safe.</text><rect x="80" y="580" width="940" height="200" rx="15" fill="#ec4899" opacity="0.12" stroke="#ec4899" stroke-width="3"/><text x="120" y="620" fill="#ec4899" font-size="22" font-weight="bold">FRIEND TAX — Tulum wedding</text><text x="900" y="620" text-anchor="end" fill="#10b981" font-size="22" font-weight="bold">saved $600</text><circle cx="180" cy="680" r="35" fill="#ec4899" opacity="0.4"/><text x="180" y="690" text-anchor="middle" fill="#ffd700" font-size="18" font-weight="bold">D75</text><text x="350" y="665" fill="#ffffff" font-size="17">Goes to wedding (Tier 1, full participation)</text><text x="350" y="695" fill="#ffffff" font-size="17">Declines Nashville bachelorette ($600 saved)</text><text x="350" y="725" fill="#ffffff" font-size="17">Gift: $200 instead of $400</text><text x="350" y="760" fill="#10b981" font-size="18" font-weight="bold">$1,900 instead of $3,200 - relationship intact</text><rect x="150" y="820" width="800" height="220" rx="20" fill="#ffd700" opacity="0.15" stroke="#ffd700" stroke-width="4"/><text x="550" y="870" text-anchor="middle" fill="#ffd700" font-size="28" font-weight="bold">90-Day Total</text><text x="550" y="930" text-anchor="middle" fill="#10b981" font-size="64" font-weight="bold">$6,200</text><text x="550" y="980" text-anchor="middle" fill="#ffffff" font-size="20">saved by talking, not earning more</text><text x="550" y="1020" text-anchor="middle" fill="#888" font-size="16">Three calls. Two texts. One short script each.</text></svg>`,
          caption: "Six grand saved without a single side hustle."
        }
      },
      {
        type: "quiz",
        title: "Quiz: The Family Ask",
        content: `Your sister texts: **"Hey, can you spot me $1,500 for rent this month? I'll pay you back when my tax refund comes in March."** You have the cash but you've heard this before. What does the script recommend?\n\nApply the gift-don't-lend principle.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="60" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold">Quiz: Sister Needs $1,500</text><rect x="100" y="110" width="900" height="160" rx="15" fill="#f59e0b" opacity="0.2" stroke="#f59e0b" stroke-width="2"/><text x="550" y="150" text-anchor="middle" fill="#ffffff" font-size="18" font-style="italic">"Hey, can you spot me $1,500 for rent this month?</text><text x="550" y="180" text-anchor="middle" fill="#ffffff" font-size="18" font-style="italic">I'll pay you back when my tax refund comes in March."</text><text x="550" y="230" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">You have the cash. You've heard this before.</text><text x="550" y="258" text-anchor="middle" fill="#888" font-size="18">What does the script recommend?</text><rect x="100" y="310" width="900" height="100" rx="10" fill="#ef4444" opacity="0.15" stroke="#ef4444" stroke-width="2"/><text x="140" y="350" fill="#ef4444" font-size="22" font-weight="bold">A)</text><text x="190" y="350" fill="#ffffff" font-size="20">Lend the full $1,500 with a written contract and interest</text><text x="190" y="380" fill="#888" font-size="16">Money still in play — same trap, lawyered up</text><rect x="100" y="430" width="900" height="100" rx="10" fill="#10b981" opacity="0.15" stroke="#10b981" stroke-width="2"/><text x="140" y="470" fill="#10b981" font-size="22" font-weight="bold">B)</text><text x="190" y="470" fill="#ffffff" font-size="20">Offer a smaller gift (e.g. $300) + help with a payment plan</text><text x="190" y="500" fill="#10b981" font-size="16" font-weight="bold">Correct — gift you can lose, no resentment trap</text><rect x="100" y="550" width="900" height="100" rx="10" fill="#ef4444" opacity="0.15" stroke="#ef4444" stroke-width="2"/><text x="140" y="590" fill="#ef4444" font-size="22" font-weight="bold">C)</text><text x="190" y="590" fill="#ffffff" font-size="20">Say "Of course!" and lend — family always pays back</text><text x="190" y="620" fill="#888" font-size="16">Hope is not a financial strategy</text><rect x="100" y="670" width="900" height="100" rx="10" fill="#ef4444" opacity="0.15" stroke="#ef4444" stroke-width="2"/><text x="140" y="710" fill="#ef4444" font-size="22" font-weight="bold">D)</text><text x="190" y="710" fill="#ffffff" font-size="20">Ghost her until she stops asking</text><text x="190" y="740" fill="#888" font-size="16">Cheap avoidance, expensive relationship</text><rect x="150" y="800" width="800" height="240" rx="15" fill="#ffd700" opacity="0.1" stroke="#ffd700" stroke-width="2"/><text x="550" y="845" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">Why B wins</text><text x="550" y="890" text-anchor="middle" fill="#ffffff" font-size="18">A $300 gift you can afford to lose is cheaper than</text><text x="550" y="918" text-anchor="middle" fill="#ffffff" font-size="18">the resentment of a $1,500 loan that doesn't come back.</text><text x="550" y="960" text-anchor="middle" fill="#10b981" font-size="20" font-weight="bold">Help with the call to the landlord too.</text><text x="550" y="1000" text-anchor="middle" fill="#ffffff" font-size="16">That's actual help — not just transferred problem.</text></svg>`,
          caption: "The boundary is the love."
        },
        options: [
          { text: "Lend the full $1,500 with a written contract and interest", correct: false },
          { text: "Offer a smaller gift (e.g. $300) + help with a payment plan", correct: true },
          { text: "Say 'Of course!' and lend — family always pays back", correct: false },
          { text: "Ghost her until she stops asking", correct: false }
        ],
        explanation: "Gift, don't lend. A $300 gift you can afford to lose costs you less than the resentment of a $1,500 loan that never comes back. Pair the gift with practical help (call the landlord with her, set up a payment plan). The script protects both your money and your relationship."
      },
      {
        type: "application",
        title: "Write Your Three Scripts Tonight",
        content: `**Tonight (20 min)**: Open your phone notes app. Create three notes titled **"Medical Script"**, **"Family Loan Script"**, and **"Friend Tax Tiers"**.\n\n**Medical Script**: Copy the 3 lines verbatim (itemized statement → financial assistance → settlement offer). Add your local hospital's billing phone number.\n\n**Family Script**: Write YOUR version of the love+boundary script in your own voice. Decide your **gift ceiling** — the dollar amount you can give without resentment (often **$100-500**). Write it in the note.\n\n**Friend Tax Tiers**: List people by tier. **Tier 1** (3 weddings max, full participation): name them. **Tier 2** (local, $100 gift cap): list. **Tier 3** (everyone else, card + $75): the rest. Be honest.\n\n**This week**: If you have an outstanding medical bill, call. Ask one question: "Can you send me an itemized statement?" That single call is worth, on average, **$400** in catches.\n\nScripts unused are scripts that don't exist.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="60" text-anchor="middle" fill="#ffd700" font-size="34" font-weight="bold">Your Phone-Note Action Plan</text><text x="550" y="100" text-anchor="middle" fill="#888" font-size="18">20 minutes tonight. Save you thousands.</text><rect x="80" y="140" width="940" height="80" rx="10" fill="#0ea5e9" opacity="0.2" stroke="#0ea5e9" stroke-width="2"/><text x="550" y="190" text-anchor="middle" fill="#0ea5e9" font-size="24" font-weight="bold">Open Phone Notes - Create 3 notes</text><rect x="80" y="240" width="940" height="240" rx="15" fill="#ef4444" opacity="0.12" stroke="#ef4444" stroke-width="3"/><text x="120" y="280" fill="#ef4444" font-size="22" font-weight="bold">NOTE 1: "Medical Script"</text><rect x="120" y="300" width="860" height="50" rx="5" fill="#1a1a2e" stroke="#ef4444"/><text x="140" y="332" fill="#ffd700" font-size="16">1. "Please send itemized statement with CPT codes"</text><rect x="120" y="360" width="860" height="50" rx="5" fill="#1a1a2e" stroke="#ef4444"/><text x="140" y="392" fill="#ffd700" font-size="16">2. "I'd like to apply for financial assistance"</text><rect x="120" y="420" width="860" height="50" rx="5" fill="#1a1a2e" stroke="#ef4444"/><text x="140" y="452" fill="#ffd700" font-size="16">3. "I can pay $___ today as full settlement"</text><rect x="80" y="500" width="940" height="220" rx="15" fill="#f59e0b" opacity="0.12" stroke="#f59e0b" stroke-width="3"/><text x="120" y="540" fill="#f59e0b" font-size="22" font-weight="bold">NOTE 2: "Family Loan Script"</text><rect x="120" y="560" width="860" height="80" rx="5" fill="#1a1a2e" stroke="#f59e0b"/><text x="140" y="588" fill="#ffd700" font-size="15">Your version of "I love you, I don't lend, I can gift $___</text><text x="140" y="610" fill="#ffd700" font-size="15">or help you call the lender. Which would help more?"</text><text x="120" y="670" fill="#10b981" font-size="18" font-weight="bold">Gift ceiling = $______</text><text x="500" y="670" fill="#888" font-size="16">(amount you can lose without resentment)</text><text x="120" y="700" fill="#888" font-size="15">Most people: $100-500</text><rect x="80" y="740" width="940" height="220" rx="15" fill="#ec4899" opacity="0.12" stroke="#ec4899" stroke-width="3"/><text x="120" y="780" fill="#ec4899" font-size="22" font-weight="bold">NOTE 3: "Friend Tax Tiers"</text><rect x="100" y="800" width="290" height="140" rx="8" fill="#10b981" opacity="0.15" stroke="#10b981"/><text x="245" y="835" text-anchor="middle" fill="#10b981" font-size="18" font-weight="bold">TIER 1</text><text x="245" y="860" text-anchor="middle" fill="#ffffff" font-size="14">3 weddings/yr full</text><text x="245" y="885" text-anchor="middle" fill="#ffd700" font-size="14">Name them ↓</text><text x="245" y="915" text-anchor="middle" fill="#888" font-size="13">1._____ 2._____ 3._____</text><rect x="405" y="800" width="290" height="140" rx="8" fill="#f59e0b" opacity="0.15" stroke="#f59e0b"/><text x="550" y="835" text-anchor="middle" fill="#f59e0b" font-size="18" font-weight="bold">TIER 2</text><text x="550" y="860" text-anchor="middle" fill="#ffffff" font-size="14">Local, $100 cap</text><text x="550" y="885" text-anchor="middle" fill="#ffd700" font-size="14">List them</text><text x="550" y="915" text-anchor="middle" fill="#888" font-size="13">drivable only</text><rect x="710" y="800" width="290" height="140" rx="8" fill="#ec4899" opacity="0.15" stroke="#ec4899"/><text x="855" y="835" text-anchor="middle" fill="#ec4899" font-size="18" font-weight="bold">TIER 3</text><text x="855" y="860" text-anchor="middle" fill="#ffffff" font-size="14">Card + $75</text><text x="855" y="885" text-anchor="middle" fill="#ffd700" font-size="14">Everyone else</text><text x="855" y="915" text-anchor="middle" fill="#888" font-size="13">handwritten note</text><rect x="150" y="990" width="800" height="80" rx="15" fill="#ffd700" opacity="0.15" stroke="#ffd700" stroke-width="3"/><text x="550" y="1025" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">This week: Call about ONE bill.</text><text x="550" y="1055" text-anchor="middle" fill="#ffffff" font-size="17">One itemization request = avg $400 in catches.</text></svg>`,
          caption: "Scripts unused are scripts that don't exist."
        }
      }
    ]
  },
  {
    id: "budgeting-track-lesson-12",
    title: "Capstone: Your First Real Budget in 30 Minutes",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "Stop Reading. Start Building.",
        content: `You've learned the 50/30/20 rule, zero-based budgeting, sinking funds, cash-flow timing, couples meetings, annual reviews, variable-income strategies, lifestyle inflation defenses, tool selection, and difficult-conversation scripts. **Eleven lessons.**\n\nNone of it matters if you don't build a real budget tonight.\n\nThis capstone is a **30-minute cold-start**. No fancy software required. A spreadsheet, a notebook, or the back of an envelope all work. You will: **(1) pull your last 3 months of statements, (2) categorize spending into needs/wants/savings, (3) set up sinking funds, (4) name every dollar of next month's paycheck, and (5) schedule your first weekly check-in.**\n\nAt minute 30 you will have a budget. Not a perfect budget. A **real one**. The kind that survives contact with a Tuesday-night DoorDash order and a flat tire.\n\nGet a timer. Get a drink. Open your bank statements. **Let's go.**`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="40" font-weight="bold">30 Minutes.</text><text x="550" y="120" text-anchor="middle" fill="#ffd700" font-size="40" font-weight="bold">One Real Budget.</text><text x="550" y="170" text-anchor="middle" fill="#888" font-size="20">No theory. No prep. Cold start.</text><circle cx="550" cy="500" r="280" fill="none" stroke="#6366f1" stroke-width="6" opacity="0.4"/><circle cx="550" cy="500" r="280" fill="none" stroke="#ffd700" stroke-width="8" stroke-dasharray="1759" stroke-dashoffset="0" transform="rotate(-90 550 500)"/><text x="550" y="480" text-anchor="middle" fill="#ffd700" font-size="80" font-weight="bold">30:00</text><text x="550" y="540" text-anchor="middle" fill="#ffffff" font-size="22">on the clock</text><rect x="80" y="820" width="200" height="180" rx="10" fill="#0ea5e9" opacity="0.2" stroke="#0ea5e9" stroke-width="2"/><text x="180" y="855" text-anchor="middle" fill="#0ea5e9" font-size="26" font-weight="bold">5</text><text x="180" y="880" text-anchor="middle" fill="#ffffff" font-size="14">min</text><text x="180" y="920" text-anchor="middle" fill="#ffd700" font-size="14" font-weight="bold">Pull</text><text x="180" y="945" text-anchor="middle" fill="#ffffff" font-size="13">statements</text><text x="180" y="975" text-anchor="middle" fill="#ffffff" font-size="13">last 3 months</text><rect x="290" y="820" width="200" height="180" rx="10" fill="#10b981" opacity="0.2" stroke="#10b981" stroke-width="2"/><text x="390" y="855" text-anchor="middle" fill="#10b981" font-size="26" font-weight="bold">10</text><text x="390" y="880" text-anchor="middle" fill="#ffffff" font-size="14">min</text><text x="390" y="920" text-anchor="middle" fill="#ffd700" font-size="14" font-weight="bold">Categorize</text><text x="390" y="945" text-anchor="middle" fill="#ffffff" font-size="13">needs/wants/</text><text x="390" y="975" text-anchor="middle" fill="#ffffff" font-size="13">savings</text><rect x="500" y="820" width="200" height="180" rx="10" fill="#8b5cf6" opacity="0.2" stroke="#8b5cf6" stroke-width="2"/><text x="600" y="855" text-anchor="middle" fill="#8b5cf6" font-size="26" font-weight="bold">5</text><text x="600" y="880" text-anchor="middle" fill="#ffffff" font-size="14">min</text><text x="600" y="920" text-anchor="middle" fill="#ffd700" font-size="14" font-weight="bold">Sinking</text><text x="600" y="945" text-anchor="middle" fill="#ffffff" font-size="13">funds</text><text x="600" y="975" text-anchor="middle" fill="#ffffff" font-size="13">listed</text><rect x="710" y="820" width="200" height="180" rx="10" fill="#f59e0b" opacity="0.2" stroke="#f59e0b" stroke-width="2"/><text x="810" y="855" text-anchor="middle" fill="#f59e0b" font-size="26" font-weight="bold">7</text><text x="810" y="880" text-anchor="middle" fill="#ffffff" font-size="14">min</text><text x="810" y="920" text-anchor="middle" fill="#ffd700" font-size="14" font-weight="bold">Name</text><text x="810" y="945" text-anchor="middle" fill="#ffffff" font-size="13">every</text><text x="810" y="975" text-anchor="middle" fill="#ffffff" font-size="13">dollar</text><rect x="920" y="820" width="100" height="180" rx="10" fill="#ec4899" opacity="0.2" stroke="#ec4899" stroke-width="2"/><text x="970" y="855" text-anchor="middle" fill="#ec4899" font-size="22" font-weight="bold">3</text><text x="970" y="880" text-anchor="middle" fill="#ffffff" font-size="13">min</text><text x="970" y="920" text-anchor="middle" fill="#ffd700" font-size="12" font-weight="bold">Schedule</text><text x="970" y="945" text-anchor="middle" fill="#ffffff" font-size="11">first</text><text x="970" y="975" text-anchor="middle" fill="#ffffff" font-size="11">check-in</text><text x="550" y="1060" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">A budget that survives Tuesday-night DoorDash.</text></svg>`,
          caption: "The clock starts the moment you decide to start."
        }
      },
      {
        type: "concept",
        title: "The 5-Step Cold Start",
        content: `**Step 1 — Pull statements (5 min).** Log into your bank. Download CSV or screenshot the **last 3 months** of checking + credit cards. Don't analyze yet. Just gather.\n\n**Step 2 — Categorize (10 min).** Three buckets only. **NEEDS** (rent, utilities, groceries, transport, insurance, minimum debt). **WANTS** (eating out, subscriptions, hobbies, shopping). **SAVINGS/DEBT-PAY** (extra payments, emergency fund, retirement). Sum each. Note your **monthly take-home**.\n\n**Step 3 — Sinking funds (5 min).** List **annual expenses** ÷ 12: car insurance ($1,800 = **$150/mo**), holidays ($600 = **$50/mo**), car repairs ($1,200 = **$100/mo**), birthdays ($360 = **$30/mo**). Total = **monthly sinking-fund contribution**.\n\n**Step 4 — Name every dollar (7 min).** Take next paycheck. Subtract needs, then sinking funds, then a savings target (start at **10%** if you're new), then assign the rest to wants. **Income − assignments must equal $0.** If negative, cut wants.\n\n**Step 5 — Schedule check-in (3 min).** Put a **20-minute weekly review** on your calendar. Friday at 7pm with a beer is a winning combo.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="55" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold">The 5-Step Cold Start Flow</text><rect x="40" y="100" width="1020" height="160" rx="15" fill="#0ea5e9" opacity="0.15" stroke="#0ea5e9" stroke-width="3"/><circle cx="100" cy="180" r="40" fill="#0ea5e9" opacity="0.5"/><text x="100" y="195" text-anchor="middle" fill="#ffd700" font-size="34" font-weight="bold">1</text><text x="170" y="145" fill="#0ea5e9" font-size="22" font-weight="bold">PULL STATEMENTS - 5 min</text><text x="170" y="180" fill="#ffffff" font-size="17">Log in to bank. Download CSV or screenshot</text><text x="170" y="210" fill="#ffffff" font-size="17">last 3 months: checking + every credit card</text><text x="170" y="240" fill="#888" font-size="15">Don't analyze yet. Just gather. No judgment.</text><rect x="40" y="280" width="1020" height="160" rx="15" fill="#10b981" opacity="0.15" stroke="#10b981" stroke-width="3"/><circle cx="100" cy="360" r="40" fill="#10b981" opacity="0.5"/><text x="100" y="375" text-anchor="middle" fill="#ffd700" font-size="34" font-weight="bold">2</text><text x="170" y="325" fill="#10b981" font-size="22" font-weight="bold">CATEGORIZE - 10 min</text><text x="170" y="360" fill="#ffffff" font-size="17">3 buckets: NEEDS (rent, utils, food, min debt)</text><text x="170" y="390" fill="#ffffff" font-size="17">WANTS (eat-out, subs, shopping)  SAVINGS</text><text x="170" y="420" fill="#888" font-size="15">Sum each. Note monthly take-home.</text><rect x="40" y="460" width="1020" height="160" rx="15" fill="#8b5cf6" opacity="0.15" stroke="#8b5cf6" stroke-width="3"/><circle cx="100" cy="540" r="40" fill="#8b5cf6" opacity="0.5"/><text x="100" y="555" text-anchor="middle" fill="#ffd700" font-size="34" font-weight="bold">3</text><text x="170" y="505" fill="#8b5cf6" font-size="22" font-weight="bold">SINKING FUNDS - 5 min</text><text x="170" y="540" fill="#ffffff" font-size="17">Annual costs ÷ 12: insurance $150, holidays $50</text><text x="170" y="570" fill="#ffffff" font-size="17">car repairs $100, birthdays $30 = $330/mo</text><text x="170" y="600" fill="#888" font-size="15">List every yearly bill. Divide. Sum.</text><rect x="40" y="640" width="1020" height="160" rx="15" fill="#f59e0b" opacity="0.15" stroke="#f59e0b" stroke-width="3"/><circle cx="100" cy="720" r="40" fill="#f59e0b" opacity="0.5"/><text x="100" y="735" text-anchor="middle" fill="#ffd700" font-size="34" font-weight="bold">4</text><text x="170" y="685" fill="#f59e0b" font-size="22" font-weight="bold">NAME EVERY DOLLAR - 7 min</text><text x="170" y="720" fill="#ffffff" font-size="17">Income - needs - sinking - savings(10%) - wants = $0</text><text x="170" y="750" fill="#ffffff" font-size="17">If negative: cut wants. Not needs. Not savings.</text><text x="170" y="780" fill="#888" font-size="15">Zero-based. The whole paycheck has a job.</text><rect x="40" y="820" width="1020" height="160" rx="15" fill="#ec4899" opacity="0.15" stroke="#ec4899" stroke-width="3"/><circle cx="100" cy="900" r="40" fill="#ec4899" opacity="0.5"/><text x="100" y="915" text-anchor="middle" fill="#ffd700" font-size="34" font-weight="bold">5</text><text x="170" y="865" fill="#ec4899" font-size="22" font-weight="bold">SCHEDULE CHECK-IN - 3 min</text><text x="170" y="900" fill="#ffffff" font-size="17">Put 20-min weekly review on calendar</text><text x="170" y="930" fill="#ffffff" font-size="17">Friday 7pm with a beer = winning combo</text><text x="170" y="960" fill="#888" font-size="15">Recurring weekly. Don't skip the first 4.</text><text x="550" y="1050" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">30 minutes = a real, working budget.</text></svg>`,
          caption: "Five steps. Thirty minutes. One real budget. No excuses."
        }
      },
      {
        type: "example",
        title: "Devin's Live 30-Minute Build",
        content: `**Devin, 31, marketing manager, take-home $5,200/mo, partner Sara take-home $3,800/mo. Joint $9,000/mo.**\n\n**Min 0-5 — Statements pulled.** Chase checking + 2 credit cards + Sara's checking. Screenshots saved.\n\n**Min 5-15 — Categorized.** NEEDS $5,400 (rent $2,200, utils $250, groceries $850, transit $400, insurance $480, min debt $1,220). WANTS $1,950 (eating out $620, subs $180, gym $80, shopping $410, fun $660). SAVINGS $1,650.\n\n**Min 15-20 — Sinking funds.** Car insurance $1,800/yr = $150. Christmas $900 = $75. Car repairs $1,200 = $100. Vet $400 = $34. Total **$359/mo**.\n\n**Min 20-27 — Named dollars.** $9,000 income − $5,400 needs − $359 sinking − $1,000 emergency fund − $500 Roth − $500 extra to student loan − $1,241 wants = **$0**. Wants cut from $1,950 to $1,241 (mostly eating out trimmed).\n\n**Min 27-30 — Calendar.** Recurring event: **"Money date — every Friday 7pm, kitchen table, 20 min, beer + chips."** Sara invited.\n\n**Devin's first month under the plan**: paid extra **$500 on student loans**, saved **$1,000 to emergency fund**, ate at restaurants **6 times** instead of 14. Felt in control for the first time in 8 years.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="50" text-anchor="middle" fill="#ffd700" font-size="30" font-weight="bold">Devin + Sara - Live Build</text><text x="550" y="85" text-anchor="middle" fill="#888" font-size="16">Joint take-home $9,000/mo - 30 minutes flat</text><circle cx="200" cy="280" r="170" fill="none" stroke="#888" stroke-width="2"/><path d="M 200 110 A 170 170 0 0 1 304 451 L 200 280 Z" fill="#10b981" opacity="0.7"/><path d="M 304 451 A 170 170 0 0 1 65 391 L 200 280 Z" fill="#f59e0b" opacity="0.7"/><path d="M 65 391 A 170 170 0 0 1 200 110 L 200 280 Z" fill="#6366f1" opacity="0.7"/><text x="200" y="270" text-anchor="middle" fill="#ffffff" font-size="20" font-weight="bold">$9,000</text><text x="200" y="298" text-anchor="middle" fill="#888" font-size="14">monthly</text><rect x="420" y="130" width="640" height="320" rx="10" fill="#1a1a2e" stroke="#ffd700" stroke-width="2"/><text x="440" y="165" fill="#ffd700" font-size="22" font-weight="bold">CATEGORIZED</text><rect x="440" y="180" width="20" height="20" fill="#10b981"/><text x="475" y="197" fill="#ffffff" font-size="17">NEEDS: $5,400 (60%)</text><text x="475" y="222" fill="#888" font-size="14">rent 2200 + utils 250 + groc 850 + transit 400</text><text x="475" y="244" fill="#888" font-size="14">+ ins 480 + min debt 1220</text><rect x="440" y="260" width="20" height="20" fill="#f59e0b"/><text x="475" y="277" fill="#ffffff" font-size="17">WANTS: $1,950 → CUT TO $1,241</text><text x="475" y="302" fill="#888" font-size="14">eat-out 620→311, subs 180, gym 80,</text><text x="475" y="324" fill="#888" font-size="14">shopping 410, fun 660</text><rect x="440" y="340" width="20" height="20" fill="#6366f1"/><text x="475" y="357" fill="#ffffff" font-size="17">SAVINGS: $2,000 (22%)</text><text x="475" y="382" fill="#888" font-size="14">$1,000 emergency + $500 Roth</text><text x="475" y="404" fill="#888" font-size="14">+ $500 extra student loan</text><text x="475" y="430" fill="#10b981" font-size="16" font-weight="bold">+ $359 sinking funds</text><rect x="40" y="500" width="1020" height="240" rx="15" fill="#8b5cf6" opacity="0.12" stroke="#8b5cf6" stroke-width="3"/><text x="60" y="540" fill="#8b5cf6" font-size="22" font-weight="bold">SINKING FUNDS BREAKDOWN ($359/mo)</text><rect x="80" y="560" width="220" height="150" rx="10" fill="#1a1a2e" stroke="#8b5cf6"/><text x="190" y="595" text-anchor="middle" fill="#ffd700" font-size="16" font-weight="bold">Car Insurance</text><text x="190" y="625" text-anchor="middle" fill="#ffffff" font-size="15">$1,800/yr</text><text x="190" y="660" text-anchor="middle" fill="#10b981" font-size="28" font-weight="bold">$150</text><text x="190" y="685" text-anchor="middle" fill="#888" font-size="13">per month</text><rect x="320" y="560" width="220" height="150" rx="10" fill="#1a1a2e" stroke="#8b5cf6"/><text x="430" y="595" text-anchor="middle" fill="#ffd700" font-size="16" font-weight="bold">Christmas</text><text x="430" y="625" text-anchor="middle" fill="#ffffff" font-size="15">$900/yr</text><text x="430" y="660" text-anchor="middle" fill="#10b981" font-size="28" font-weight="bold">$75</text><text x="430" y="685" text-anchor="middle" fill="#888" font-size="13">per month</text><rect x="560" y="560" width="220" height="150" rx="10" fill="#1a1a2e" stroke="#8b5cf6"/><text x="670" y="595" text-anchor="middle" fill="#ffd700" font-size="16" font-weight="bold">Car Repairs</text><text x="670" y="625" text-anchor="middle" fill="#ffffff" font-size="15">$1,200/yr</text><text x="670" y="660" text-anchor="middle" fill="#10b981" font-size="28" font-weight="bold">$100</text><text x="670" y="685" text-anchor="middle" fill="#888" font-size="13">per month</text><rect x="800" y="560" width="220" height="150" rx="10" fill="#1a1a2e" stroke="#8b5cf6"/><text x="910" y="595" text-anchor="middle" fill="#ffd700" font-size="16" font-weight="bold">Vet (cat)</text><text x="910" y="625" text-anchor="middle" fill="#ffffff" font-size="15">$400/yr</text><text x="910" y="660" text-anchor="middle" fill="#10b981" font-size="28" font-weight="bold">$34</text><text x="910" y="685" text-anchor="middle" fill="#888" font-size="13">per month</text><rect x="40" y="770" width="1020" height="120" rx="15" fill="#f59e0b" opacity="0.15" stroke="#f59e0b" stroke-width="3"/><text x="550" y="810" text-anchor="middle" fill="#f59e0b" font-size="22" font-weight="bold">ZERO-BASED CHECK</text><text x="550" y="845" text-anchor="middle" fill="#ffffff" font-size="18">$9,000 - 5,400 - 359 - 1,000 - 500 - 500 - 1,241 = $0</text><text x="550" y="875" text-anchor="middle" fill="#10b981" font-size="20" font-weight="bold">Every dollar named. Wants trimmed by $709.</text><rect x="40" y="920" width="1020" height="140" rx="15" fill="#ec4899" opacity="0.15" stroke="#ec4899" stroke-width="3"/><text x="550" y="960" text-anchor="middle" fill="#ec4899" font-size="22" font-weight="bold">MONTH 1 RESULT</text><text x="550" y="995" text-anchor="middle" fill="#ffffff" font-size="17">+$500 student loan, +$1,000 emergency, 6 restaurants (was 14)</text><text x="550" y="1030" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">"In control for the first time in 8 years."</text></svg>`,
          caption: "Devin's actual 30 minutes. Now do yours."
        }
      },
      {
        type: "quiz",
        title: "Quiz: The Zero Check",
        content: `You've built your budget. Income $5,500. Needs $3,200. Sinking $250. Savings $600. Wants assigned $1,600. You hit the **zero check**: $5,500 − $3,200 − $250 − $600 − $1,600 = **−$150**. You're $150 over.\n\nWhat does the cold-start playbook say to do?`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="60" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold">Quiz: You're $150 Over</text><rect x="100" y="110" width="900" height="200" rx="15" fill="#6366f1" opacity="0.15" stroke="#6366f1" stroke-width="3"/><text x="550" y="150" text-anchor="middle" fill="#6366f1" font-size="20" font-weight="bold">Your zero-check math:</text><text x="200" y="200" fill="#ffffff" font-size="20">Income:</text><text x="950" y="200" text-anchor="end" fill="#10b981" font-size="20" font-weight="bold">$5,500</text><text x="200" y="230" fill="#ffffff" font-size="18">- Needs $3,200 - Sinking $250 - Savings $600 - Wants $1,600</text><text x="200" y="270" fill="#ffd700" font-size="22" font-weight="bold">Balance:</text><text x="950" y="270" text-anchor="end" fill="#ef4444" font-size="28" font-weight="bold">-$150</text><rect x="100" y="335" width="900" height="100" rx="10" fill="#ef4444" opacity="0.15" stroke="#ef4444" stroke-width="2"/><text x="140" y="375" fill="#ef4444" font-size="22" font-weight="bold">A)</text><text x="190" y="375" fill="#ffffff" font-size="20">Cut needs by $150 (skip car insurance this month)</text><text x="190" y="405" fill="#888" font-size="15">Needs are non-negotiable. Skipping creates worse damage.</text><rect x="100" y="455" width="900" height="100" rx="10" fill="#ef4444" opacity="0.15" stroke="#ef4444" stroke-width="2"/><text x="140" y="495" fill="#ef4444" font-size="22" font-weight="bold">B)</text><text x="190" y="495" fill="#ffffff" font-size="20">Cut savings by $150 (drop savings to $450)</text><text x="190" y="525" fill="#888" font-size="15">Pay-yourself-first goes first. Savings is not the relief valve.</text><rect x="100" y="575" width="900" height="100" rx="10" fill="#10b981" opacity="0.15" stroke="#10b981" stroke-width="2"/><text x="140" y="615" fill="#10b981" font-size="22" font-weight="bold">C)</text><text x="190" y="615" fill="#ffffff" font-size="20">Cut wants by $150 (down to $1,450)</text><text x="190" y="645" fill="#10b981" font-size="16" font-weight="bold">Correct — wants are the only honest relief valve</text><rect x="100" y="695" width="900" height="100" rx="10" fill="#ef4444" opacity="0.15" stroke="#ef4444" stroke-width="2"/><text x="140" y="735" fill="#ef4444" font-size="22" font-weight="bold">D)</text><text x="190" y="735" fill="#ffffff" font-size="20">Put the $150 on a credit card and "deal with it later"</text><text x="190" y="765" fill="#888" font-size="15">The exact behavior the budget was supposed to fix</text><rect x="150" y="820" width="800" height="240" rx="15" fill="#ffd700" opacity="0.1" stroke="#ffd700" stroke-width="2"/><text x="550" y="865" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">The Order of Operations</text><text x="550" y="910" text-anchor="middle" fill="#ffffff" font-size="18">When the budget doesn't zero out, the cut comes from WANTS.</text><text x="550" y="945" text-anchor="middle" fill="#ffffff" font-size="18">Needs are needs. Savings is non-negotiable.</text><text x="550" y="985" text-anchor="middle" fill="#10b981" font-size="20" font-weight="bold">Wants flex. That's their job.</text><text x="550" y="1025" text-anchor="middle" fill="#ffffff" font-size="16">$1,450 in wants is still real money for fun.</text></svg>`,
          caption: "Wants are the relief valve. Needs and savings aren't."
        },
        options: [
          { text: "Cut needs by $150 (skip car insurance this month)", correct: false },
          { text: "Cut savings by $150 (drop savings to $450)", correct: false },
          { text: "Cut wants by $150 (down to $1,450)", correct: true },
          { text: "Put the $150 on a credit card and 'deal with it later'", correct: false }
        ],
        explanation: "When a budget doesn't zero out, wants is the only honest relief valve. Needs are non-negotiable (skipping creates worse damage). Savings is pay-yourself-first (the whole point of the budget). Credit-carding the gap is the exact behavior the budget exists to fix. Wants flex — that's their job."
      },
      {
        type: "application",
        title: "Do It Now — The 30-Minute Sprint",
        content: `Reading is over. Now you build.\n\n**RIGHT NOW**: Set a phone timer for **30 minutes**. Open a blank Google Sheet or grab a notebook. Title it with this month and year.\n\n**Minutes 0-5**: Open bank app. Screenshot or download last 3 months.\n\n**Minutes 5-15**: Three columns: NEEDS, WANTS, SAVINGS. Drop every transaction into one. Sum each.\n\n**Minutes 15-20**: List every annual expense. Divide by 12. Total = your monthly sinking-fund contribution.\n\n**Minutes 20-27**: Take next paycheck. Subtract: needs, then sinking, then savings (10% if you're new, 20% if you're ready), then wants. **Must equal $0.** If negative, trim wants.\n\n**Minutes 27-30**: Open calendar. Create recurring weekly event: **"Budget check-in — 20 min."** Pick a time you'll actually keep (Friday evenings work for most). Done.\n\n**Tomorrow**: Tell one person what you did. **Accountability is free and works.**\n\nYou built it. **Now keep it.** Lesson 11 was about hard talks. This one was about your hardest talk — the one with yourself. Keep going.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="60" text-anchor="middle" fill="#ffd700" font-size="36" font-weight="bold">START THE TIMER.</text><rect x="100" y="100" width="900" height="80" rx="15" fill="#ef4444" opacity="0.2" stroke="#ef4444" stroke-width="3"/><text x="550" y="140" text-anchor="middle" fill="#ef4444" font-size="22" font-weight="bold">Phone timer: 30:00</text><text x="550" y="168" text-anchor="middle" fill="#ffffff" font-size="16">Blank sheet or notebook. Title with the month.</text><rect x="60" y="200" width="1020" height="100" rx="10" fill="#0ea5e9" opacity="0.15" stroke="#0ea5e9" stroke-width="2"/><rect x="60" y="200" width="100" height="100" rx="10" fill="#0ea5e9" opacity="0.4"/><text x="110" y="245" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">0-5</text><text x="110" y="275" text-anchor="middle" fill="#ffffff" font-size="14">min</text><text x="190" y="240" fill="#0ea5e9" font-size="20" font-weight="bold">PULL</text><text x="190" y="270" fill="#ffffff" font-size="17">Bank app. Screenshots or CSV of last 3 months.</text><rect x="60" y="320" width="1020" height="100" rx="10" fill="#10b981" opacity="0.15" stroke="#10b981" stroke-width="2"/><rect x="60" y="320" width="100" height="100" rx="10" fill="#10b981" opacity="0.4"/><text x="110" y="365" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">5-15</text><text x="110" y="395" text-anchor="middle" fill="#ffffff" font-size="14">min</text><text x="190" y="360" fill="#10b981" font-size="20" font-weight="bold">CATEGORIZE</text><text x="190" y="390" fill="#ffffff" font-size="17">3 columns: NEEDS / WANTS / SAVINGS. Sum each.</text><rect x="60" y="440" width="1020" height="100" rx="10" fill="#8b5cf6" opacity="0.15" stroke="#8b5cf6" stroke-width="2"/><rect x="60" y="440" width="100" height="100" rx="10" fill="#8b5cf6" opacity="0.4"/><text x="110" y="485" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">15-20</text><text x="110" y="515" text-anchor="middle" fill="#ffffff" font-size="14">min</text><text x="190" y="480" fill="#8b5cf6" font-size="20" font-weight="bold">SINKING FUNDS</text><text x="190" y="510" fill="#ffffff" font-size="17">List annual costs ÷ 12. Sum = monthly contribution.</text><rect x="60" y="560" width="1020" height="100" rx="10" fill="#f59e0b" opacity="0.15" stroke="#f59e0b" stroke-width="2"/><rect x="60" y="560" width="100" height="100" rx="10" fill="#f59e0b" opacity="0.4"/><text x="110" y="605" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">20-27</text><text x="110" y="635" text-anchor="middle" fill="#ffffff" font-size="14">min</text><text x="190" y="600" fill="#f59e0b" font-size="20" font-weight="bold">ZERO-BASE</text><text x="190" y="630" fill="#ffffff" font-size="17">Income - needs - sinking - savings - wants = $0</text><rect x="60" y="680" width="1020" height="100" rx="10" fill="#ec4899" opacity="0.15" stroke="#ec4899" stroke-width="2"/><rect x="60" y="680" width="100" height="100" rx="10" fill="#ec4899" opacity="0.4"/><text x="110" y="725" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">27-30</text><text x="110" y="755" text-anchor="middle" fill="#ffffff" font-size="14">min</text><text x="190" y="720" fill="#ec4899" font-size="20" font-weight="bold">SCHEDULE</text><text x="190" y="750" fill="#ffffff" font-size="17">Recurring weekly "Budget check-in 20 min"</text><rect x="100" y="810" width="900" height="100" rx="15" fill="#10b981" opacity="0.2" stroke="#10b981" stroke-width="3"/><text x="550" y="850" text-anchor="middle" fill="#10b981" font-size="24" font-weight="bold">TOMORROW</text><text x="550" y="885" text-anchor="middle" fill="#ffffff" font-size="18">Tell one person what you did. Accountability is free.</text><rect x="100" y="930" width="900" height="140" rx="20" fill="#ffd700" opacity="0.15" stroke="#ffd700" stroke-width="4"/><text x="550" y="975" text-anchor="middle" fill="#ffd700" font-size="26" font-weight="bold">You built it.</text><text x="550" y="1015" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">Now keep it.</text><text x="550" y="1050" text-anchor="middle" fill="#888" font-size="16">The hardest talk was with yourself. You won.</text></svg>`,
          caption: "Reading time over. Build time now. Go."
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
            lessons: 12, duration: 180, progress: 0, category: 'personal-finance-track',
            lessonList: BUDGET_PLACEHOLDER_LESSONS,
        },
        {
            id: 'pf-debt',
            title: 'Debt Payoff: Snowball, Avalanche, and the Math',
            author: 'Synthesis Learning',
            description: 'Snowball vs. avalanche, the psychological math vs. the actual math, balance-transfer cards, refinancing, and the order of operations.',
            lessons: 12, duration: 180, progress: 0, category: 'personal-finance-track',
            lessonList: [
{
    id: "pf-debt-lesson-1",
    title: "Snowball vs Avalanche: The Math and the Psychology",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "Two Roads Out of Debt",
        content: `You have **five credit cards** totaling **$28,400** in debt. You can afford **$600/month** above minimums. Which debt do you attack first?

There are two famous answers:

- **Debt Snowball** — pay the **smallest balance first**, regardless of interest rate. Popularized by Dave Ramsey.
- **Debt Avalanche** — pay the **highest APR first**, regardless of balance. The mathematically optimal choice.

The avalanche **always** wins on pure math — usually by **$200 to $2,000+** on typical $30k debt loads. But a famous **Harvard Business Review study (2016)** found that snowball followers were **more likely to finish** the journey.

This lesson teaches you **both** methods, the exact math behind each, and a decision rule for choosing. Spoiler: if your total debt is under **$50k** and this is your first real attempt, the snowball's psychology often beats the avalanche's math — because the **best plan is the one you actually complete**.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="38" font-weight="bold" font-family="Arial">Snowball vs Avalanche</text><text x="550" y="115" text-anchor="middle" fill="#ffffff" font-size="22" font-family="Arial">Two paths to the same destination: zero debt</text><rect x="80" y="160" width="460" height="380" fill="#6366f1" rx="12"/><text x="310" y="215" text-anchor="middle" fill="#ffffff" font-size="32" font-weight="bold" font-family="Arial">SNOWBALL</text><text x="310" y="250" text-anchor="middle" fill="#ffd700" font-size="20" font-family="Arial">Smallest Balance First</text><line x1="120" y1="280" x2="500" y2="280" stroke="#ffffff" stroke-width="2"/><text x="310" y="320" text-anchor="middle" fill="#ffffff" font-size="20" font-family="Arial">Quick wins build momentum</text><text x="310" y="360" text-anchor="middle" fill="#ffffff" font-size="20" font-family="Arial">Behavioral fuel</text><text x="310" y="400" text-anchor="middle" fill="#ffffff" font-size="20" font-family="Arial">Best for first-timers</text><text x="310" y="455" text-anchor="middle" fill="#10b981" font-size="26" font-weight="bold" font-family="Arial">Higher completion rate</text><text x="310" y="495" text-anchor="middle" fill="#ef4444" font-size="20" font-family="Arial">Costs more interest</text><rect x="560" y="160" width="460" height="380" fill="#8b5cf6" rx="12"/><text x="790" y="215" text-anchor="middle" fill="#ffffff" font-size="32" font-weight="bold" font-family="Arial">AVALANCHE</text><text x="790" y="250" text-anchor="middle" fill="#ffd700" font-size="20" font-family="Arial">Highest APR First</text><line x1="600" y1="280" x2="980" y2="280" stroke="#ffffff" stroke-width="2"/><text x="790" y="320" text-anchor="middle" fill="#ffffff" font-size="20" font-family="Arial">Pure math optimization</text><text x="790" y="360" text-anchor="middle" fill="#ffffff" font-size="20" font-family="Arial">No emotional rewards early</text><text x="790" y="400" text-anchor="middle" fill="#ffffff" font-size="20" font-family="Arial">Best for disciplined savers</text><text x="790" y="455" text-anchor="middle" fill="#10b981" font-size="26" font-weight="bold" font-family="Arial">Saves the most money</text><text x="790" y="495" text-anchor="middle" fill="#ef4444" font-size="20" font-family="Arial">Higher dropout rate</text><rect x="80" y="580" width="940" height="180" fill="#0ea5e9" rx="12"/><text x="550" y="625" text-anchor="middle" fill="#ffffff" font-size="26" font-weight="bold" font-family="Arial">The Real Question</text><text x="550" y="670" text-anchor="middle" fill="#ffffff" font-size="22" font-family="Arial">Will you actually stick with the plan for 24-48 months?</text><text x="550" y="710" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold" font-family="Arial">The math only matters if you finish</text><text x="550" y="745" text-anchor="middle" fill="#ffffff" font-size="20" font-family="Arial">Both methods beat doing nothing by tens of thousands</text><rect x="80" y="800" width="940" height="240" fill="#ffffff" rx="12"/><text x="550" y="845" text-anchor="middle" fill="#1a1a2e" font-size="26" font-weight="bold" font-family="Arial">Decision Framework</text><text x="100" y="890" fill="#1a1a2e" font-size="20" font-family="Arial">If total debt &lt; $50k AND first attempt -&gt; SNOWBALL</text><text x="100" y="930" fill="#1a1a2e" font-size="20" font-family="Arial">If total debt &gt; $50k AND disciplined -&gt; AVALANCHE</text><text x="100" y="970" fill="#1a1a2e" font-size="20" font-family="Arial">If APRs are similar (within 3%) -&gt; SNOWBALL wins both ways</text><text x="100" y="1010" fill="#1a1a2e" font-size="20" font-family="Arial">If one debt has 25%+ APR and others are low -&gt; AVALANCHE</text></svg>`,
          caption: "Two valid strategies — the right one is the one you'll actually finish"
        }
      },
      {
        type: "concept",
        title: "The Math: A Five-Debt Comparison",
        content: `Meet **Maya**. She has five debts totaling **$28,400** and can pay **$600/month** above minimums:

| Debt | Balance | APR | Min Payment |
|------|---------|-----|-------------|
| Store Card | $480 | 26.99% | $25 |
| Visa | $2,100 | 22.49% | $42 |
| Personal Loan | $4,800 | 11.99% | $96 |
| MasterCard | $7,200 | 19.99% | $144 |
| Auto Loan | $13,820 | 6.49% | $278 |

**Snowball order**: Store -> Visa -> Personal Loan -> MasterCard -> Auto
**Avalanche order**: Store -> Visa -> MasterCard -> Personal Loan -> Auto

Running the numbers with **$600/month** of "snowball" extra payments rolled into the next debt:

- **Snowball total interest**: $5,847 — payoff in **39 months**
- **Avalanche total interest**: $5,201 — payoff in **38 months**

The avalanche saves **$646** here. On a $60k debt load with one 29% card, that gap widens to **$2,000+**. The **higher the APR spread**, the more avalanche wins. When all APRs are within 3-4 points, the methods are nearly identical — and **snowball's psychological edge** wins by default.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="55" text-anchor="middle" fill="#ffd700" font-size="34" font-weight="bold" font-family="Arial">Maya's Five Debts</text><text x="550" y="95" text-anchor="middle" fill="#ffffff" font-size="20" font-family="Arial">$28,400 total | $600/month extra | Side-by-side payoff order</text><rect x="60" y="130" width="1000" height="50" fill="#6366f1"/><text x="120" y="163" fill="#ffffff" font-size="18" font-weight="bold" font-family="Arial">Debt</text><text x="340" y="163" fill="#ffffff" font-size="18" font-weight="bold" font-family="Arial">Balance</text><text x="500" y="163" fill="#ffffff" font-size="18" font-weight="bold" font-family="Arial">APR</text><text x="620" y="163" fill="#ffffff" font-size="18" font-weight="bold" font-family="Arial">Min Pay</text><text x="780" y="163" fill="#ffffff" font-size="18" font-weight="bold" font-family="Arial">Snowball #</text><text x="940" y="163" fill="#ffffff" font-size="18" font-weight="bold" font-family="Arial">Avalanche #</text><rect x="60" y="180" width="1000" height="45" fill="#ffffff"/><text x="120" y="210" fill="#1a1a2e" font-size="17" font-family="Arial">Store Card</text><text x="340" y="210" fill="#1a1a2e" font-size="17" font-family="Arial">$480</text><text x="500" y="210" fill="#ef4444" font-size="17" font-weight="bold" font-family="Arial">26.99%</text><text x="620" y="210" fill="#1a1a2e" font-size="17" font-family="Arial">$25</text><text x="810" y="210" fill="#10b981" font-size="20" font-weight="bold" font-family="Arial">1</text><text x="970" y="210" fill="#10b981" font-size="20" font-weight="bold" font-family="Arial">1</text><rect x="60" y="225" width="1000" height="45" fill="#888"/><text x="120" y="255" fill="#ffffff" font-size="17" font-family="Arial">Visa</text><text x="340" y="255" fill="#ffffff" font-size="17" font-family="Arial">$2,100</text><text x="500" y="255" fill="#ef4444" font-size="17" font-weight="bold" font-family="Arial">22.49%</text><text x="620" y="255" fill="#ffffff" font-size="17" font-family="Arial">$42</text><text x="810" y="255" fill="#ffd700" font-size="20" font-weight="bold" font-family="Arial">2</text><text x="970" y="255" fill="#ffd700" font-size="20" font-weight="bold" font-family="Arial">2</text><rect x="60" y="270" width="1000" height="45" fill="#ffffff"/><text x="120" y="300" fill="#1a1a2e" font-size="17" font-family="Arial">Personal Loan</text><text x="340" y="300" fill="#1a1a2e" font-size="17" font-family="Arial">$4,800</text><text x="500" y="300" fill="#10b981" font-size="17" font-weight="bold" font-family="Arial">11.99%</text><text x="620" y="300" fill="#1a1a2e" font-size="17" font-family="Arial">$96</text><text x="810" y="300" fill="#ffd700" font-size="20" font-weight="bold" font-family="Arial">3</text><text x="970" y="300" fill="#ffd700" font-size="20" font-weight="bold" font-family="Arial">4</text><rect x="60" y="315" width="1000" height="45" fill="#888"/><text x="120" y="345" fill="#ffffff" font-size="17" font-family="Arial">MasterCard</text><text x="340" y="345" fill="#ffffff" font-size="17" font-family="Arial">$7,200</text><text x="500" y="345" fill="#f59e0b" font-size="17" font-weight="bold" font-family="Arial">19.99%</text><text x="620" y="345" fill="#ffffff" font-size="17" font-family="Arial">$144</text><text x="810" y="345" fill="#ffd700" font-size="20" font-weight="bold" font-family="Arial">4</text><text x="970" y="345" fill="#ffd700" font-size="20" font-weight="bold" font-family="Arial">3</text><rect x="60" y="360" width="1000" height="45" fill="#ffffff"/><text x="120" y="390" fill="#1a1a2e" font-size="17" font-family="Arial">Auto Loan</text><text x="340" y="390" fill="#1a1a2e" font-size="17" font-family="Arial">$13,820</text><text x="500" y="390" fill="#10b981" font-size="17" font-weight="bold" font-family="Arial">6.49%</text><text x="620" y="390" fill="#1a1a2e" font-size="17" font-family="Arial">$278</text><text x="810" y="390" fill="#ef4444" font-size="20" font-weight="bold" font-family="Arial">5</text><text x="970" y="390" fill="#ef4444" font-size="20" font-weight="bold" font-family="Arial">5</text><text x="550" y="455" text-anchor="middle" fill="#ffd700" font-size="26" font-weight="bold" font-family="Arial">Total Interest Paid</text><rect x="100" y="490" width="420" height="220" fill="#6366f1" rx="10"/><text x="310" y="535" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold" font-family="Arial">SNOWBALL</text><text x="310" y="595" text-anchor="middle" fill="#ffd700" font-size="44" font-weight="bold" font-family="Arial">$5,847</text><text x="310" y="640" text-anchor="middle" fill="#ffffff" font-size="20" font-family="Arial">Payoff: 39 months</text><text x="310" y="680" text-anchor="middle" fill="#ffffff" font-size="18" font-family="Arial">First win in month 1</text><rect x="580" y="490" width="420" height="220" fill="#8b5cf6" rx="10"/><text x="790" y="535" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold" font-family="Arial">AVALANCHE</text><text x="790" y="595" text-anchor="middle" fill="#ffd700" font-size="44" font-weight="bold" font-family="Arial">$5,201</text><text x="790" y="640" text-anchor="middle" fill="#ffffff" font-size="20" font-family="Arial">Payoff: 38 months</text><text x="790" y="680" text-anchor="middle" fill="#ffffff" font-size="18" font-family="Arial">First win in month 1 (same)</text><rect x="100" y="740" width="900" height="100" fill="#10b981" rx="10"/><text x="550" y="785" text-anchor="middle" fill="#ffffff" font-size="26" font-weight="bold" font-family="Arial">Avalanche Saves: $646</text><text x="550" y="820" text-anchor="middle" fill="#ffffff" font-size="20" font-family="Arial">About 1.5 months of Maya's extra payments</text><rect x="100" y="870" width="900" height="200" fill="#ffffff" rx="10"/><text x="550" y="915" text-anchor="middle" fill="#1a1a2e" font-size="24" font-weight="bold" font-family="Arial">Key Insight</text><text x="550" y="955" text-anchor="middle" fill="#1a1a2e" font-size="20" font-family="Arial">When APRs cluster tightly, the methods nearly tie.</text><text x="550" y="990" text-anchor="middle" fill="#1a1a2e" font-size="20" font-family="Arial">A single 29% store card sitting next to 6% loans changes everything.</text><text x="550" y="1030" text-anchor="middle" fill="#ef4444" font-size="22" font-weight="bold" font-family="Arial">Avalanche wins bigger when APR spread is wider.</text></svg>`,
          caption: "Avalanche saves $646 here — but both crush the debt in just over 3 years"
        }
      },
      {
        type: "example",
        title: "The Harvard Study and Real Behavior",
        content: `In **2016**, researchers at **Harvard Business School** (Gal & McShane, *Journal of Marketing Research*) studied 6,000+ users of a debt-payoff app. They tracked who actually **finished** paying off their debt.

The result: **users who closed their smallest balance first** were **15% more likely** to eliminate all debt than users who optimized purely on interest rate. Why?

**Behavioral finance** calls it the **goal-gradient effect** — humans push harder as a finish line gets closer. Eliminating a $480 store card in **month 1** delivers a hit of dopamine that no spreadsheet can match. That **emotional win** funds the next month's discipline.

Compare two people:
- **Devon (Avalanche)**: After 6 months, every debt still has a balance. He's saved $90 in interest but feels like nothing's happening. He quits in month 7 and adds $1,200 back to his cards.
- **Priya (Snowball)**: After 6 months, **2 debts are gone**. She tells her friends. She's emotionally invested. She finishes in month 41.

Devon's "better math" is worthless because **he didn't finish**. Priya paid $700 more in interest — and saved her financial life.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="60" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold" font-family="Arial">The Harvard Study (2016)</text><text x="550" y="100" text-anchor="middle" fill="#ffffff" font-size="20" font-family="Arial">Snowball followers: 15% higher completion rate</text><rect x="80" y="140" width="940" height="80" fill="#0ea5e9" rx="10"/><text x="550" y="175" text-anchor="middle" fill="#ffffff" font-size="20" font-weight="bold" font-family="Arial">Gal &amp; McShane, Journal of Marketing Research</text><text x="550" y="205" text-anchor="middle" fill="#ffffff" font-size="18" font-family="Arial">N = 6,000+ users tracked through full debt-payoff journey</text><text x="550" y="265" text-anchor="middle" fill="#ffd700" font-size="26" font-weight="bold" font-family="Arial">Devon (Avalanche) vs Priya (Snowball)</text><rect x="60" y="290" width="490" height="380" fill="#ef4444" rx="10"/><text x="305" y="335" text-anchor="middle" fill="#ffffff" font-size="24" font-weight="bold" font-family="Arial">DEVON</text><text x="305" y="365" text-anchor="middle" fill="#ffffff" font-size="18" font-family="Arial">Avalanche strategy</text><line x1="90" y1="385" x2="520" y2="385" stroke="#ffffff" stroke-width="2"/><text x="80" y="420" fill="#ffffff" font-size="17" font-family="Arial">Month 1: Attacks 26% store card</text><text x="80" y="455" fill="#ffffff" font-size="17" font-family="Arial">Month 6: Every debt still open</text><text x="80" y="490" fill="#ffffff" font-size="17" font-family="Arial">Feels like nothing is happening</text><text x="80" y="525" fill="#ffffff" font-size="17" font-family="Arial">$90 saved in interest so far</text><text x="80" y="560" fill="#ffd700" font-size="17" font-weight="bold" font-family="Arial">Month 7: Quits the plan</text><text x="80" y="595" fill="#ffd700" font-size="17" font-weight="bold" font-family="Arial">Month 12: Adds $1,200 back</text><text x="305" y="650" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold" font-family="Arial">FAILED</text><rect x="560" y="290" width="490" height="380" fill="#10b981" rx="10"/><text x="805" y="335" text-anchor="middle" fill="#ffffff" font-size="24" font-weight="bold" font-family="Arial">PRIYA</text><text x="805" y="365" text-anchor="middle" fill="#ffffff" font-size="18" font-family="Arial">Snowball strategy</text><line x1="590" y1="385" x2="1020" y2="385" stroke="#ffffff" stroke-width="2"/><text x="580" y="420" fill="#ffffff" font-size="17" font-family="Arial">Month 1: Attacks $480 store card</text><text x="580" y="455" fill="#ffffff" font-size="17" font-family="Arial">Month 2: First debt GONE</text><text x="580" y="490" fill="#ffffff" font-size="17" font-family="Arial">Month 6: Two debts GONE</text><text x="580" y="525" fill="#ffffff" font-size="17" font-family="Arial">Tells friends, posts online</text><text x="580" y="560" fill="#ffd700" font-size="17" font-weight="bold" font-family="Arial">Month 41: Debt-FREE</text><text x="580" y="595" fill="#ffd700" font-size="17" font-weight="bold" font-family="Arial">$700 more interest paid</text><text x="805" y="650" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold" font-family="Arial">FINISHED</text><rect x="80" y="695" width="940" height="180" fill="#6366f1" rx="10"/><text x="550" y="735" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold" font-family="Arial">The Goal-Gradient Effect</text><text x="550" y="775" text-anchor="middle" fill="#ffffff" font-size="19" font-family="Arial">Behavioral finance: humans push harder as a finish line approaches</text><text x="550" y="810" text-anchor="middle" fill="#ffffff" font-size="19" font-family="Arial">Each closed account = dopamine = momentum</text><text x="550" y="845" text-anchor="middle" fill="#ffffff" font-size="19" font-family="Arial">A spreadsheet cannot motivate. A streak can.</text><rect x="80" y="900" width="940" height="160" fill="#ffffff" rx="10"/><text x="550" y="945" text-anchor="middle" fill="#1a1a2e" font-size="22" font-weight="bold" font-family="Arial">The Honest Truth</text><text x="550" y="985" text-anchor="middle" fill="#1a1a2e" font-size="19" font-family="Arial">Math doesn't care about feelings. Humans do.</text><text x="550" y="1020" text-anchor="middle" fill="#ef4444" font-size="22" font-weight="bold" font-family="Arial">The optimal plan is the one you complete.</text></svg>`,
          caption: "Devon's better math is worthless — Priya finished and saved her financial life"
        }
      },
      {
        type: "quiz",
        title: "Choose the Strategy",
        content: `**Scenario**: Marcus has these four debts and can pay $400/month extra:
- Card A: $1,200 balance, 24% APR
- Card B: $8,500 balance, 19% APR
- Card C: $400 balance, 22% APR
- Car Loan: $14,000 balance, 5% APR

This is Marcus's **first attempt** at paying off debt. He's tried before and quit after 3 months because "nothing was changing." Which approach should you recommend?`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="60" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold" font-family="Arial">Marcus's Debt Stack</text><text x="550" y="100" text-anchor="middle" fill="#ffffff" font-size="20" font-family="Arial">Total: $24,100 | Extra: $400/month | First serious attempt</text><rect x="80" y="140" width="940" height="50" fill="#6366f1"/><text x="140" y="173" fill="#ffffff" font-size="20" font-weight="bold" font-family="Arial">Debt</text><text x="450" y="173" fill="#ffffff" font-size="20" font-weight="bold" font-family="Arial">Balance</text><text x="700" y="173" fill="#ffffff" font-size="20" font-weight="bold" font-family="Arial">APR</text><text x="900" y="173" fill="#ffffff" font-size="20" font-weight="bold" font-family="Arial">Snowball #</text><rect x="80" y="190" width="940" height="60" fill="#ffffff"/><text x="140" y="227" fill="#1a1a2e" font-size="20" font-family="Arial">Card A</text><text x="450" y="227" fill="#1a1a2e" font-size="20" font-family="Arial">$1,200</text><text x="700" y="227" fill="#ef4444" font-size="20" font-weight="bold" font-family="Arial">24%</text><text x="950" y="227" fill="#1a1a2e" font-size="22" font-weight="bold" font-family="Arial">2</text><rect x="80" y="250" width="940" height="60" fill="#888"/><text x="140" y="287" fill="#ffffff" font-size="20" font-family="Arial">Card B</text><text x="450" y="287" fill="#ffffff" font-size="20" font-family="Arial">$8,500</text><text x="700" y="287" fill="#f59e0b" font-size="20" font-weight="bold" font-family="Arial">19%</text><text x="950" y="287" fill="#ffffff" font-size="22" font-weight="bold" font-family="Arial">3</text><rect x="80" y="310" width="940" height="60" fill="#10b981"/><text x="140" y="347" fill="#ffffff" font-size="20" font-weight="bold" font-family="Arial">Card C</text><text x="450" y="347" fill="#ffffff" font-size="20" font-weight="bold" font-family="Arial">$400</text><text x="700" y="347" fill="#ffd700" font-size="20" font-weight="bold" font-family="Arial">22%</text><text x="950" y="347" fill="#ffd700" font-size="24" font-weight="bold" font-family="Arial">1</text><rect x="80" y="370" width="940" height="60" fill="#ffffff"/><text x="140" y="407" fill="#1a1a2e" font-size="20" font-family="Arial">Car Loan</text><text x="450" y="407" fill="#1a1a2e" font-size="20" font-family="Arial">$14,000</text><text x="700" y="407" fill="#10b981" font-size="20" font-weight="bold" font-family="Arial">5%</text><text x="950" y="407" fill="#1a1a2e" font-size="22" font-weight="bold" font-family="Arial">4</text><rect x="80" y="470" width="940" height="180" fill="#ec4899" rx="10"/><text x="550" y="515" text-anchor="middle" fill="#ffffff" font-size="24" font-weight="bold" font-family="Arial">Key Detail</text><text x="550" y="555" text-anchor="middle" fill="#ffffff" font-size="20" font-family="Arial">Marcus quit a prior attempt at month 3 because</text><text x="550" y="590" text-anchor="middle" fill="#ffffff" font-size="20" font-family="Arial">"nothing was changing"</text><text x="550" y="630" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold" font-family="Arial">This is a behavioral signal, not a math problem.</text><rect x="80" y="680" width="940" height="100" fill="#0ea5e9" rx="10"/><text x="550" y="720" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold" font-family="Arial">Quick Wins Available</text><text x="550" y="755" text-anchor="middle" fill="#ffffff" font-size="20" font-family="Arial">Card C ($400) could close in month 1. Card A in month 4.</text><rect x="80" y="810" width="940" height="240" fill="#ffffff" rx="10"/><text x="550" y="855" text-anchor="middle" fill="#1a1a2e" font-size="24" font-weight="bold" font-family="Arial">Decision Inputs</text><text x="100" y="895" fill="#1a1a2e" font-size="20" font-family="Arial">- Total debt: $24,100 (under $50k threshold)</text><text x="100" y="930" fill="#1a1a2e" font-size="20" font-family="Arial">- History of motivation failure</text><text x="100" y="965" fill="#1a1a2e" font-size="20" font-family="Arial">- APR spread between top three: only 5 points</text><text x="100" y="1000" fill="#1a1a2e" font-size="20" font-family="Arial">- $400 card closes in month 1 = instant win</text><text x="100" y="1035" fill="#1a1a2e" font-size="20" font-weight="bold" font-family="Arial">- Avalanche savings would be small (~$200)</text></svg>`,
          caption: "Read the human, not just the spreadsheet"
        },
        options: [
          { text: "Avalanche — always optimize for interest savings", correct: false },
          { text: "Snowball — quick wins on Card C and Card A will keep him motivated; APR spread is too small to make avalanche worth the dropout risk", correct: true },
          { text: "Pay all four equally — split the $400 four ways", correct: false },
          { text: "Pay the car loan first because it's the biggest balance", correct: false }
        ],
        explanation: "Snowball is the right call here. Marcus's history of quitting at month 3 is the dominant signal. Card C ($400) closes in month 1 — that's the dopamine hit that fuels months 2-40. The APR spread between his top three debts is only 5 points, so avalanche would save maybe $200 total. Compare $200 saved against the risk of him quitting again and adding $5,000+ back to his cards. The math is clear: snowball. (Paying equally dilutes momentum, and paying the car loan first ignores both methods — that's just intuition, and intuition is what got him into debt.)"
      },
      {
        type: "application",
        title: "Build Your Own Payoff Plan",
        content: `**Your assignment this week** — pick a method and commit. Here's the 4-step playbook:

**Step 1: List every debt.** Open a spreadsheet. Columns: name, balance, APR, minimum payment. Include credit cards, student loans, car loans, medical debt, the $200 you owe your brother. Everything.

**Step 2: Pick your method honestly.**
- Under $50k total + first real attempt + history of quitting -> **Snowball**
- Over $50k OR one debt with 25%+ APR while others are under 10% -> **Avalanche**
- Hybrid: use **Avalanche** but if your highest-APR debt has a $15k+ balance, knock out one small one first for momentum

**Step 3: Find your "extra".** From last book's budget, identify the **debt payment line**. Even $150/month extra cuts years off the timeline.

**Step 4: Automate.** Set up the extra payment as an **auto-transfer** to your target debt on payday. Decisions you make once beat decisions you remake every month.

**Tracking**: Use a free app (Undebt.it, Debt Payoff Planner) or a paper thermometer on your fridge. Visible progress is fuel. Color in a square every $100 paid. Don't break the streak.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="60" text-anchor="middle" fill="#ffd700" font-size="34" font-weight="bold" font-family="Arial">Your 4-Step Payoff Plan</text><text x="550" y="100" text-anchor="middle" fill="#ffffff" font-size="20" font-family="Arial">Build it once. Execute it for 24-48 months. Done.</text><rect x="60" y="140" width="510" height="200" fill="#6366f1" rx="10"/><circle cx="115" cy="195" r="32" fill="#ffd700"/><text x="115" y="208" text-anchor="middle" fill="#1a1a2e" font-size="32" font-weight="bold" font-family="Arial">1</text><text x="165" y="195" fill="#ffffff" font-size="22" font-weight="bold" font-family="Arial">List EVERY debt</text><text x="80" y="245" fill="#ffffff" font-size="18" font-family="Arial">Name, balance, APR, min payment</text><text x="80" y="275" fill="#ffffff" font-size="18" font-family="Arial">Cards, loans, medical, family</text><text x="80" y="305" fill="#ffd700" font-size="18" font-weight="bold" font-family="Arial">Even the $200 you owe your brother</text><rect x="585" y="140" width="455" height="200" fill="#8b5cf6" rx="10"/><circle cx="640" cy="195" r="32" fill="#ffd700"/><text x="640" y="208" text-anchor="middle" fill="#1a1a2e" font-size="32" font-weight="bold" font-family="Arial">2</text><text x="690" y="195" fill="#ffffff" font-size="22" font-weight="bold" font-family="Arial">Pick a method</text><text x="605" y="240" fill="#ffffff" font-size="17" font-family="Arial">Under 50k + first try -&gt; Snowball</text><text x="605" y="270" fill="#ffffff" font-size="17" font-family="Arial">Over 50k + disciplined -&gt; Avalanche</text><text x="605" y="305" fill="#ffd700" font-size="17" font-weight="bold" font-family="Arial">Be honest about who you are</text><rect x="60" y="365" width="510" height="200" fill="#10b981" rx="10"/><circle cx="115" cy="420" r="32" fill="#ffd700"/><text x="115" y="433" text-anchor="middle" fill="#1a1a2e" font-size="32" font-weight="bold" font-family="Arial">3</text><text x="165" y="420" fill="#ffffff" font-size="22" font-weight="bold" font-family="Arial">Find your extra</text><text x="80" y="470" fill="#ffffff" font-size="18" font-family="Arial">From last book's budget</text><text x="80" y="500" fill="#ffffff" font-size="18" font-family="Arial">Even $150/month cuts years off</text><text x="80" y="535" fill="#ffd700" font-size="18" font-weight="bold" font-family="Arial">The "debt payment" line</text><rect x="585" y="365" width="455" height="200" fill="#ec4899" rx="10"/><circle cx="640" cy="420" r="32" fill="#ffd700"/><text x="640" y="433" text-anchor="middle" fill="#1a1a2e" font-size="32" font-weight="bold" font-family="Arial">4</text><text x="690" y="420" fill="#ffffff" font-size="22" font-weight="bold" font-family="Arial">Automate it</text><text x="605" y="470" fill="#ffffff" font-size="18" font-family="Arial">Auto-transfer on payday</text><text x="605" y="500" fill="#ffffff" font-size="18" font-family="Arial">One decision beats 30</text><text x="605" y="535" fill="#ffd700" font-size="18" font-weight="bold" font-family="Arial">Friction = failure</text><rect x="60" y="595" width="980" height="240" fill="#ffffff" rx="10"/><text x="550" y="640" text-anchor="middle" fill="#1a1a2e" font-size="24" font-weight="bold" font-family="Arial">Tracking: Visible Progress = Fuel</text><line x1="100" y1="665" x2="1000" y2="665" stroke="#888" stroke-width="2"/><rect x="100" y="685" width="80" height="80" fill="#10b981"/><rect x="190" y="685" width="80" height="80" fill="#10b981"/><rect x="280" y="685" width="80" height="80" fill="#10b981"/><rect x="370" y="685" width="80" height="80" fill="#10b981"/><rect x="460" y="685" width="80" height="80" fill="#10b981"/><rect x="550" y="685" width="80" height="80" fill="#ffd700"/><rect x="640" y="685" width="80" height="80" fill="#ffffff" stroke="#888" stroke-width="2"/><rect x="730" y="685" width="80" height="80" fill="#ffffff" stroke="#888" stroke-width="2"/><rect x="820" y="685" width="80" height="80" fill="#ffffff" stroke="#888" stroke-width="2"/><rect x="910" y="685" width="80" height="80" fill="#ffffff" stroke="#888" stroke-width="2"/><text x="550" y="800" text-anchor="middle" fill="#1a1a2e" font-size="18" font-family="Arial">$500 paid out of $1,000 goal. 6 squares colored.</text><rect x="60" y="860" width="980" height="190" fill="#0ea5e9" rx="10"/><text x="550" y="905" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold" font-family="Arial">This Week's Action</text><text x="550" y="945" text-anchor="middle" fill="#ffffff" font-size="20" font-family="Arial">1. Spreadsheet: every debt, sorted</text><text x="550" y="980" text-anchor="middle" fill="#ffffff" font-size="20" font-family="Arial">2. Circle your target #1</text><text x="550" y="1015" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold" font-family="Arial">3. Schedule the auto-transfer</text></svg>`,
          caption: "List, pick, fund, automate — the system runs even when motivation doesn't"
        }
      }
    ]
  },
  {
    id: "pf-debt-lesson-2",
    title: "Balance-Transfer Cards: The 0% APR Window",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "A Legal Way to Stop the Bleeding",
        content: `Imagine someone offers to **freeze your credit card interest** for 18 months. No tricks — your $10,000 balance just stops growing while you pay it down. You'd take that deal in a heartbeat.

That deal exists. It's called a **balance-transfer card**, and roughly **40% of US consumers with credit card debt** never use one.

A balance-transfer card is a credit card with a **promotional 0% APR** on transferred balances for **12 to 21 months**. You move your $10,000 from your 24% card to the new card. For the next year and a half, **every dollar you pay goes to principal** — not interest.

The catch: a **3-5% transfer fee** (usually 3%) is added to the balance. On $10,000 you pay $300 upfront. But compare that to paying **24% APR for 18 months** — which is roughly **$3,600 in interest** if you only pay minimums.

The math is brutal: **$300 fee vs $3,600 in interest** = a no-brainer. The trick is using the tool **correctly** — without it, balance transfer cards trap people deeper.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="60" text-anchor="middle" fill="#ffd700" font-size="34" font-weight="bold" font-family="Arial">The Balance-Transfer Window</text><text x="550" y="100" text-anchor="middle" fill="#ffffff" font-size="20" font-family="Arial">A legal pause on credit card interest</text><rect x="80" y="140" width="940" height="180" fill="#6366f1" rx="10"/><text x="550" y="185" text-anchor="middle" fill="#ffd700" font-size="26" font-weight="bold" font-family="Arial">The Offer</text><text x="550" y="225" text-anchor="middle" fill="#ffffff" font-size="22" font-family="Arial">0% APR for 12-21 months on transferred balances</text><text x="550" y="265" text-anchor="middle" fill="#ffffff" font-size="22" font-family="Arial">3-5% one-time transfer fee</text><text x="550" y="305" text-anchor="middle" fill="#ffffff" font-size="20" font-family="Arial">No interest charges during promotional window</text><text x="550" y="365" text-anchor="middle" fill="#ffd700" font-size="26" font-weight="bold" font-family="Arial">The Math on $10,000 Debt</text><rect x="80" y="395" width="450" height="280" fill="#ef4444" rx="10"/><text x="305" y="440" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold" font-family="Arial">Keep at 24% APR</text><text x="305" y="475" text-anchor="middle" fill="#ffffff" font-size="20" font-family="Arial">Paying minimums for 18 months</text><line x1="110" y1="495" x2="500" y2="495" stroke="#ffffff" stroke-width="2"/><text x="305" y="540" text-anchor="middle" fill="#ffffff" font-size="18" font-family="Arial">Monthly interest: ~$200</text><text x="305" y="575" text-anchor="middle" fill="#ffffff" font-size="18" font-family="Arial">18 months of interest</text><text x="305" y="640" text-anchor="middle" fill="#ffd700" font-size="36" font-weight="bold" font-family="Arial">$3,600</text><rect x="570" y="395" width="450" height="280" fill="#10b981" rx="10"/><text x="795" y="440" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold" font-family="Arial">Transfer to 0% Card</text><text x="795" y="475" text-anchor="middle" fill="#ffffff" font-size="20" font-family="Arial">3% transfer fee, 0% APR</text><line x1="600" y1="495" x2="990" y2="495" stroke="#ffffff" stroke-width="2"/><text x="795" y="540" text-anchor="middle" fill="#ffffff" font-size="18" font-family="Arial">One-time fee on $10,000</text><text x="795" y="575" text-anchor="middle" fill="#ffffff" font-size="18" font-family="Arial">Interest during window: $0</text><text x="795" y="640" text-anchor="middle" fill="#ffd700" font-size="36" font-weight="bold" font-family="Arial">$300</text><rect x="80" y="700" width="940" height="140" fill="#ffd700" rx="10"/><text x="550" y="745" text-anchor="middle" fill="#1a1a2e" font-size="26" font-weight="bold" font-family="Arial">Net Savings: $3,300</text><text x="550" y="785" text-anchor="middle" fill="#1a1a2e" font-size="22" font-family="Arial">12 times the cost of the fee</text><text x="550" y="825" text-anchor="middle" fill="#1a1a2e" font-size="20" font-family="Arial">A no-brainer if used correctly</text><rect x="80" y="860" width="940" height="190" fill="#ffffff" rx="10"/><text x="550" y="905" text-anchor="middle" fill="#1a1a2e" font-size="22" font-weight="bold" font-family="Arial">Who Uses This?</text><text x="550" y="950" text-anchor="middle" fill="#1a1a2e" font-size="20" font-family="Arial">Only 60% of consumers with CC debt who could qualify do</text><text x="550" y="990" text-anchor="middle" fill="#1a1a2e" font-size="20" font-family="Arial">The other 40% leave $3,000+ on the table</text><text x="550" y="1030" text-anchor="middle" fill="#ef4444" font-size="22" font-weight="bold" font-family="Arial">Don't be in the 40%.</text></svg>`,
          caption: "$300 fee vs $3,600 in interest — but only if you actually pay it off in the window"
        }
      },
      {
        type: "concept",
        title: "How the Promotion Actually Works",
        content: `Here's what's printed in the fine print of a typical **Citi Diamond Preferred** or **Wells Fargo Reflect** offer:

**Promo period**: 0% APR for **12 to 21 months** from account opening (not from transfer date — applications take 7-14 days).

**Transfer fee**: 3% of the amount transferred (some cards 5%), often with a $5 minimum. Charged immediately to your new balance.

**Transfer window**: You usually have **60-120 days** from account opening to make qualifying transfers at the promo rate.

**After promo APR**: Jumps to **18-29% variable** APR on any remaining balance. This is the trap.

**Payment allocation**: Payments above the minimum are required by **CARD Act of 2009** to go to the **highest-APR balance first**. But minimum payments go to lowest-APR first. So if you put new purchases on the card (at 24%) and pay only minimums, the 24% purchases never go down.

**Two breeds to avoid:**
1. **Deferred-interest "0%"** — common on store cards (Best Buy, Amazon). If any balance remains at promo end, you owe **ALL the back interest** retroactively. This is NOT a true 0% card.
2. **Store-card "no interest if paid in full"** — same trap, different name.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="55" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold" font-family="Arial">Anatomy of a Transfer Offer</text><text x="550" y="95" text-anchor="middle" fill="#ffffff" font-size="20" font-family="Arial">Read the fine print before you sign</text><rect x="60" y="125" width="490" height="150" fill="#6366f1" rx="10"/><text x="305" y="165" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold" font-family="Arial">Promo Period</text><text x="305" y="200" text-anchor="middle" fill="#ffffff" font-size="20" font-family="Arial">12-21 months at 0% APR</text><text x="305" y="235" text-anchor="middle" fill="#ffffff" font-size="18" font-family="Arial">Counts from account opening</text><text x="305" y="262" text-anchor="middle" fill="#ffffff" font-size="16" font-family="Arial">(not from transfer date)</text><rect x="570" y="125" width="490" height="150" fill="#8b5cf6" rx="10"/><text x="815" y="165" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold" font-family="Arial">Transfer Fee</text><text x="815" y="200" text-anchor="middle" fill="#ffffff" font-size="20" font-family="Arial">3-5% of transferred amount</text><text x="815" y="235" text-anchor="middle" fill="#ffffff" font-size="18" font-family="Arial">Added to new card balance</text><text x="815" y="262" text-anchor="middle" fill="#ffffff" font-size="16" font-family="Arial">3% on $10k = $300</text><rect x="60" y="295" width="490" height="150" fill="#0ea5e9" rx="10"/><text x="305" y="335" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold" font-family="Arial">Transfer Window</text><text x="305" y="370" text-anchor="middle" fill="#ffffff" font-size="20" font-family="Arial">60-120 days to qualify</text><text x="305" y="405" text-anchor="middle" fill="#ffffff" font-size="18" font-family="Arial">Late transfers = standard APR</text><text x="305" y="432" text-anchor="middle" fill="#ffffff" font-size="16" font-family="Arial">Do it the first week</text><rect x="570" y="295" width="490" height="150" fill="#ef4444" rx="10"/><text x="815" y="335" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold" font-family="Arial">After Promo</text><text x="815" y="370" text-anchor="middle" fill="#ffffff" font-size="20" font-family="Arial">18-29% variable APR</text><text x="815" y="405" text-anchor="middle" fill="#ffffff" font-size="18" font-family="Arial">Hits remaining balance</text><text x="815" y="432" text-anchor="middle" fill="#ffffff" font-size="16" font-family="Arial">This is the trap</text><rect x="60" y="475" width="1000" height="240" fill="#f59e0b" rx="10"/><text x="560" y="520" text-anchor="middle" fill="#1a1a2e" font-size="26" font-weight="bold" font-family="Arial">Two Breeds to AVOID</text><line x1="100" y1="540" x2="1020" y2="540" stroke="#1a1a2e" stroke-width="2"/><text x="100" y="580" fill="#1a1a2e" font-size="20" font-weight="bold" font-family="Arial">1. Deferred-Interest "0%" (Best Buy, Amazon, store cards)</text><text x="120" y="615" fill="#1a1a2e" font-size="18" font-family="Arial">If ANY balance remains at promo end -&gt; ALL back interest owed</text><text x="120" y="645" fill="#1a1a2e" font-size="18" font-family="Arial">Example: $1 left at month 13 -&gt; you owe interest on full $5,000</text><text x="100" y="680" fill="#1a1a2e" font-size="20" font-weight="bold" font-family="Arial">2. "No Interest If Paid In Full"</text><text x="120" y="710" fill="#1a1a2e" font-size="18" font-family="Arial">Same trap, different name. Run.</text><rect x="60" y="735" width="1000" height="310" fill="#ffffff" rx="10"/><text x="560" y="780" text-anchor="middle" fill="#1a1a2e" font-size="24" font-weight="bold" font-family="Arial">The CARD Act Allocation Rule (2009)</text><line x1="100" y1="800" x2="1020" y2="800" stroke="#888" stroke-width="2"/><text x="100" y="840" fill="#1a1a2e" font-size="19" font-family="Arial">Payments ABOVE the minimum: go to HIGHEST-APR balance first</text><text x="100" y="875" fill="#1a1a2e" font-size="19" font-family="Arial">Payments AT the minimum: go to LOWEST-APR balance first</text><text x="100" y="925" fill="#ef4444" font-size="20" font-weight="bold" font-family="Arial">Why this matters:</text><text x="100" y="960" fill="#1a1a2e" font-size="18" font-family="Arial">If you put NEW purchases on the transfer card (at 24%),</text><text x="100" y="990" fill="#1a1a2e" font-size="18" font-family="Arial">your minimum payment only chips at the 0% balance.</text><text x="100" y="1025" fill="#ef4444" font-size="20" font-weight="bold" font-family="Arial">Rule: NEVER use the transfer card for new spending.</text></svg>`,
          caption: "The mechanics matter — deferred-interest cards are wolves dressed as 0% deals"
        }
      },
      {
        type: "example",
        title: "Jordan's $14,200 Transfer Plan",
        content: `**Jordan** has $14,200 across three credit cards averaging **23% APR**. Paying minimums, he's looking at $4,500+ in interest over 18 months. Here's his transfer plan:

**Step 1 — Qualify.** Jordan's credit score is **702**. He applies for the **Citi Diamond Preferred (21-month 0% APR, 5% transfer fee)**. He's approved for a **$15,000 limit**.

**Step 2 — Transfer within 4 months window.** He transfers all $14,200. Fee: **5% x $14,200 = $710**. New balance: **$14,910**.

**Step 3 — Math the payoff.** To clear $14,910 in 21 months: **$14,910 / 21 = $710/month**. Jordan's budget supports $700/month, so he stretches: he'll have **$210 remaining** at month 21. That $210 will jump to 26% APR, but it's manageable — he'll clear it in month 22.

**Step 4 — Lock down behavior.**
- He **freezes the old cards** but doesn't close them (closing tanks his utilization score).
- He **does not use the new card** for any purchase.
- He sets **autopay of $710** from his checking account.

**Result**: Saves **~$3,800** in interest. The fee paid for itself **5 times over**.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="55" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold" font-family="Arial">Jordan's Transfer Plan</text><text x="550" y="95" text-anchor="middle" fill="#ffffff" font-size="20" font-family="Arial">$14,200 at 23% -&gt; 0% for 21 months</text><rect x="60" y="125" width="1000" height="50" fill="#6366f1"/><text x="150" y="158" fill="#ffffff" font-size="20" font-weight="bold" font-family="Arial">Step</text><text x="350" y="158" fill="#ffffff" font-size="20" font-weight="bold" font-family="Arial">Action</text><text x="800" y="158" fill="#ffffff" font-size="20" font-weight="bold" font-family="Arial">Number</text><rect x="60" y="175" width="1000" height="65" fill="#ffffff"/><text x="150" y="215" fill="#1a1a2e" font-size="20" font-weight="bold" font-family="Arial">1</text><text x="350" y="215" fill="#1a1a2e" font-size="19" font-family="Arial">Qualify with 702 credit score</text><text x="800" y="215" fill="#10b981" font-size="20" font-weight="bold" font-family="Arial">$15k limit</text><rect x="60" y="240" width="1000" height="65" fill="#888"/><text x="150" y="280" fill="#ffffff" font-size="20" font-weight="bold" font-family="Arial">2</text><text x="350" y="280" fill="#ffffff" font-size="19" font-family="Arial">Transfer $14,200 + 5% fee</text><text x="800" y="280" fill="#ffd700" font-size="20" font-weight="bold" font-family="Arial">$710 fee</text><rect x="60" y="305" width="1000" height="65" fill="#ffffff"/><text x="150" y="345" fill="#1a1a2e" font-size="20" font-weight="bold" font-family="Arial">3</text><text x="350" y="345" fill="#1a1a2e" font-size="19" font-family="Arial">$14,910 / 21 months = monthly</text><text x="800" y="345" fill="#ef4444" font-size="20" font-weight="bold" font-family="Arial">$710/mo</text><rect x="60" y="370" width="1000" height="65" fill="#888"/><text x="150" y="410" fill="#ffffff" font-size="20" font-weight="bold" font-family="Arial">4</text><text x="350" y="410" fill="#ffffff" font-size="19" font-family="Arial">Freeze old cards, autopay new</text><text x="800" y="410" fill="#10b981" font-size="20" font-weight="bold" font-family="Arial">Locked in</text><text x="550" y="475" text-anchor="middle" fill="#ffd700" font-size="26" font-weight="bold" font-family="Arial">Interest Comparison</text><rect x="60" y="500" width="490" height="220" fill="#ef4444" rx="10"/><text x="305" y="545" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold" font-family="Arial">WITHOUT Transfer</text><text x="305" y="585" text-anchor="middle" fill="#ffffff" font-size="20" font-family="Arial">$14,200 at 23% APR</text><text x="305" y="620" text-anchor="middle" fill="#ffffff" font-size="20" font-family="Arial">21 months at minimums</text><text x="305" y="685" text-anchor="middle" fill="#ffd700" font-size="36" font-weight="bold" font-family="Arial">~$4,500 interest</text><rect x="570" y="500" width="490" height="220" fill="#10b981" rx="10"/><text x="815" y="545" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold" font-family="Arial">WITH Transfer</text><text x="815" y="585" text-anchor="middle" fill="#ffffff" font-size="20" font-family="Arial">$710 transfer fee</text><text x="815" y="620" text-anchor="middle" fill="#ffffff" font-size="20" font-family="Arial">0% APR for 21 months</text><text x="815" y="685" text-anchor="middle" fill="#ffd700" font-size="36" font-weight="bold" font-family="Arial">$710 total cost</text><rect x="60" y="745" width="1000" height="120" fill="#ffd700" rx="10"/><text x="560" y="790" text-anchor="middle" fill="#1a1a2e" font-size="28" font-weight="bold" font-family="Arial">Net Savings: $3,790</text><text x="560" y="830" text-anchor="middle" fill="#1a1a2e" font-size="22" font-family="Arial">Fee paid for itself 5 times over</text><rect x="60" y="885" width="1000" height="170" fill="#ffffff" rx="10"/><text x="560" y="925" text-anchor="middle" fill="#1a1a2e" font-size="22" font-weight="bold" font-family="Arial">The Behavior Lock</text><text x="100" y="960" fill="#1a1a2e" font-size="18" font-family="Arial">- Freeze old cards (don't close them - utilization)</text><text x="100" y="990" fill="#1a1a2e" font-size="18" font-family="Arial">- Never use the new card for purchases</text><text x="100" y="1020" fill="#1a1a2e" font-size="18" font-family="Arial">- Autopay $710 from checking on the 5th of each month</text></svg>`,
          caption: "$710 fee → $3,790 saved. The math is irresistible if you control the behavior"
        }
      },
      {
        type: "quiz",
        title: "Spot the Trap",
        content: `**Scenario**: Riley has $6,000 on a 22% credit card. She gets two offers:

**Offer A**: Best Buy store card — "**0% deferred interest** for 24 months on a $6,000 purchase. 4% transfer fee."

**Offer B**: Discover It Balance Transfer — "**0% APR for 18 months** on balance transfers. 3% transfer fee. **18% APR** after promo on any remaining balance."

Riley can comfortably afford **$300/month** in payments. Which is the better choice and why?`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="55" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold" font-family="Arial">Riley's Two Offers</text><text x="550" y="95" text-anchor="middle" fill="#ffffff" font-size="20" font-family="Arial">$6,000 debt | $300/month payment capacity</text><rect x="60" y="130" width="490" height="430" fill="#ef4444" rx="10"/><text x="305" y="180" text-anchor="middle" fill="#ffffff" font-size="26" font-weight="bold" font-family="Arial">Offer A</text><text x="305" y="215" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold" font-family="Arial">Best Buy Store Card</text><line x1="90" y1="235" x2="520" y2="235" stroke="#ffffff" stroke-width="2"/><text x="80" y="275" fill="#ffffff" font-size="18" font-family="Arial">0% DEFERRED interest</text><text x="80" y="310" fill="#ffffff" font-size="18" font-family="Arial">24-month promo</text><text x="80" y="345" fill="#ffffff" font-size="18" font-family="Arial">4% fee = $240</text><text x="80" y="395" fill="#ffd700" font-size="20" font-weight="bold" font-family="Arial">The Trap:</text><text x="80" y="430" fill="#ffffff" font-size="17" font-family="Arial">If $1 left at month 25</text><text x="80" y="460" fill="#ffffff" font-size="17" font-family="Arial">you owe ALL back interest</text><text x="80" y="490" fill="#ffffff" font-size="17" font-family="Arial">on the original $6,000</text><text x="305" y="535" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold" font-family="Arial">Risk: ~$2,640 retroactive</text><rect x="570" y="130" width="490" height="430" fill="#10b981" rx="10"/><text x="815" y="180" text-anchor="middle" fill="#ffffff" font-size="26" font-weight="bold" font-family="Arial">Offer B</text><text x="815" y="215" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold" font-family="Arial">Discover It Transfer</text><line x1="600" y1="235" x2="1030" y2="235" stroke="#ffffff" stroke-width="2"/><text x="590" y="275" fill="#ffffff" font-size="18" font-family="Arial">True 0% APR</text><text x="590" y="310" fill="#ffffff" font-size="18" font-family="Arial">18-month promo</text><text x="590" y="345" fill="#ffffff" font-size="18" font-family="Arial">3% fee = $180</text><text x="590" y="395" fill="#ffd700" font-size="20" font-weight="bold" font-family="Arial">The Math:</text><text x="590" y="430" fill="#ffffff" font-size="17" font-family="Arial">$6,180 / 18 = $343/mo needed</text><text x="590" y="460" fill="#ffffff" font-size="17" font-family="Arial">Riley pays $300 = $5,400 in 18mo</text><text x="590" y="490" fill="#ffffff" font-size="17" font-family="Arial">$780 left, 18% APR after</text><text x="815" y="535" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold" font-family="Arial">Worst case: ~$70 extra</text><rect x="60" y="585" width="1000" height="160" fill="#0ea5e9" rx="10"/><text x="560" y="625" text-anchor="middle" fill="#ffffff" font-size="24" font-weight="bold" font-family="Arial">Key Difference</text><text x="560" y="665" text-anchor="middle" fill="#ffffff" font-size="20" font-family="Arial">A: Miss by $1 = $2,640 penalty (binary cliff)</text><text x="560" y="700" text-anchor="middle" fill="#ffffff" font-size="20" font-family="Arial">B: Miss = small interest on remainder (linear)</text><text x="560" y="735" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold" font-family="Arial">B is forgiving. A is a cliff.</text><rect x="60" y="770" width="1000" height="280" fill="#ffffff" rx="10"/><text x="560" y="815" text-anchor="middle" fill="#1a1a2e" font-size="22" font-weight="bold" font-family="Arial">The Deferred-Interest Trap</text><text x="100" y="855" fill="#1a1a2e" font-size="19" font-family="Arial">"0% deferred" is NOT "0% APR."</text><text x="100" y="890" fill="#1a1a2e" font-size="19" font-family="Arial">It means: interest accrues silently. If you finish, it's waived.</text><text x="100" y="925" fill="#1a1a2e" font-size="19" font-family="Arial">If you fall short by even a dollar, every accrued cent is owed.</text><text x="100" y="970" fill="#ef4444" font-size="20" font-weight="bold" font-family="Arial">Store cards (Best Buy, Lowe's, Wayfair) almost always use this</text><text x="100" y="1005" fill="#ef4444" font-size="20" font-weight="bold" font-family="Arial">Real credit-card transfers (Discover, Citi, Chase) do not</text><text x="100" y="1040" fill="#1a1a2e" font-size="19" font-weight="bold" font-family="Arial">Always ask: "True 0% APR or deferred interest?"</text></svg>`,
          caption: "Deferred interest is a binary cliff — a real 0% APR is forgiving"
        },
        options: [
          { text: "Offer A — 24 months is longer than 18 months, so it's safer", correct: false },
          { text: "Offer A — the 4% fee on Best Buy is worth the longer window", correct: false },
          { text: "Offer B — deferred interest is a binary trap; if she falls short even by $1, all the back interest hits. Discover's true 0% APR is forgiving — worst case is small interest on the small remainder", correct: true },
          { text: "Neither — she should just pay down the 22% card directly", correct: false }
        ],
        explanation: "Offer B is the safer choice and almost certainly the cheaper one. Deferred interest is a binary cliff: Riley would need to pay $250/month flawlessly for 24 months. At her $300/month pace she'd actually finish, but one missed payment, one hardship, one late fee — and the bank retroactively charges interest on the FULL $6,000 from day one, often $2,500+. With Offer B (true 0% APR), if she pays $300/month for 18 months she'll have ~$780 left, which then accrues 18% APR — about $70 of interest before she clears it. $70 risk vs $2,640 risk is no contest. And the rule: store cards almost always use deferred interest; real credit-card balance transfers (Discover, Citi, Chase, Wells Fargo) almost always use true 0% APR. Read the fine print every time."
      },
      {
        type: "application",
        title: "Run a Transfer in 4 Steps",
        content: `**Use a balance transfer when**: You have **$3,000+** in credit card debt, your **credit score is 670+**, and you can realistically pay it off within the promo window.

**Step 1: Shop the offers (don't apply yet).** Use **NerdWallet** or **Bankrate** to compare cards. Sort by: longest promo period, lowest fee, no annual fee. Top contenders as of 2025: Wells Fargo Reflect (21 months, 5% fee), Citi Double Cash (18 months, 3% fee), Discover It (18 months, 3% fee).

**Step 2: Apply for one card.** Each application is a hard inquiry (-5 points). Don't shotgun applications.

**Step 3: Execute the transfer within 30 days.** Wait too long and you'll lose the promo window on transfers.

**Step 4: Calculate the monthly minimum to clear.** Formula: **(transferred balance + fee) / months in promo**. Set this as your **autopay**. Round up $10 for safety.

**The behavioral guardrails:**
- **Freeze the old cards** (literally — in water in the freezer, or hide them).
- **Don't close** the old accounts (utilization ratio).
- **Don't use** the new card for any purchase.
- Mark **month 18 (or whenever)** on your calendar with an alarm. The day the promo ends matters.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="55" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold" font-family="Arial">Run a Transfer in 4 Steps</text><text x="550" y="95" text-anchor="middle" fill="#ffffff" font-size="20" font-family="Arial">Qualify -&gt; Shop -&gt; Apply -&gt; Lock down behavior</text><rect x="60" y="130" width="1000" height="100" fill="#0ea5e9" rx="10"/><text x="560" y="170" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold" font-family="Arial">Pre-Check: Do You Qualify?</text><text x="560" y="205" text-anchor="middle" fill="#ffffff" font-size="19" font-family="Arial">$3,000+ CC debt | Credit score 670+ | Can finish in promo window</text><rect x="60" y="250" width="490" height="220" fill="#6366f1" rx="10"/><circle cx="115" cy="305" r="32" fill="#ffd700"/><text x="115" y="318" text-anchor="middle" fill="#1a1a2e" font-size="32" font-weight="bold" font-family="Arial">1</text><text x="165" y="305" fill="#ffffff" font-size="22" font-weight="bold" font-family="Arial">Shop the offers</text><text x="80" y="355" fill="#ffffff" font-size="18" font-family="Arial">NerdWallet / Bankrate</text><text x="80" y="385" fill="#ffffff" font-size="18" font-family="Arial">Sort: longest promo, lowest fee</text><text x="80" y="420" fill="#ffd700" font-size="17" font-weight="bold" font-family="Arial">Wells Fargo Reflect: 21mo / 5%</text><text x="80" y="450" fill="#ffd700" font-size="17" font-weight="bold" font-family="Arial">Discover It: 18mo / 3%</text><rect x="570" y="250" width="490" height="220" fill="#8b5cf6" rx="10"/><circle cx="625" cy="305" r="32" fill="#ffd700"/><text x="625" y="318" text-anchor="middle" fill="#1a1a2e" font-size="32" font-weight="bold" font-family="Arial">2</text><text x="675" y="305" fill="#ffffff" font-size="22" font-weight="bold" font-family="Arial">Apply for ONE</text><text x="590" y="355" fill="#ffffff" font-size="18" font-family="Arial">Hard inquiry = -5 points</text><text x="590" y="385" fill="#ffffff" font-size="18" font-family="Arial">Don't shotgun multiple cards</text><text x="590" y="420" fill="#ffd700" font-size="17" font-weight="bold" font-family="Arial">Pick the best, apply once</text><text x="590" y="450" fill="#ffd700" font-size="17" font-weight="bold" font-family="Arial">Get the decision in minutes</text><rect x="60" y="490" width="490" height="220" fill="#10b981" rx="10"/><circle cx="115" cy="545" r="32" fill="#ffd700"/><text x="115" y="558" text-anchor="middle" fill="#1a1a2e" font-size="32" font-weight="bold" font-family="Arial">3</text><text x="165" y="545" fill="#ffffff" font-size="22" font-weight="bold" font-family="Arial">Transfer within 30 days</text><text x="80" y="595" fill="#ffffff" font-size="18" font-family="Arial">Login -&gt; balance transfer</text><text x="80" y="625" fill="#ffffff" font-size="18" font-family="Arial">Enter old card details</text><text x="80" y="660" fill="#ffd700" font-size="17" font-weight="bold" font-family="Arial">Fee gets added automatically</text><text x="80" y="690" fill="#ffd700" font-size="17" font-weight="bold" font-family="Arial">Takes 5-10 business days</text><rect x="570" y="490" width="490" height="220" fill="#ec4899" rx="10"/><circle cx="625" cy="545" r="32" fill="#ffd700"/><text x="625" y="558" text-anchor="middle" fill="#1a1a2e" font-size="32" font-weight="bold" font-family="Arial">4</text><text x="675" y="545" fill="#ffffff" font-size="22" font-weight="bold" font-family="Arial">Math the autopay</text><text x="590" y="595" fill="#ffffff" font-size="18" font-family="Arial">(balance + fee) / months</text><text x="590" y="625" fill="#ffffff" font-size="18" font-family="Arial">Round up $10 safety margin</text><text x="590" y="660" fill="#ffd700" font-size="17" font-weight="bold" font-family="Arial">Set autopay TODAY</text><text x="590" y="690" fill="#ffd700" font-size="17" font-weight="bold" font-family="Arial">Decision once, not monthly</text><rect x="60" y="730" width="1000" height="320" fill="#ffffff" rx="10"/><text x="560" y="775" text-anchor="middle" fill="#1a1a2e" font-size="24" font-weight="bold" font-family="Arial">Behavioral Guardrails (non-negotiable)</text><line x1="100" y1="795" x2="1020" y2="795" stroke="#888" stroke-width="2"/><text x="100" y="835" fill="#1a1a2e" font-size="19" font-family="Arial">- FREEZE old cards (literally in water, or hide them)</text><text x="100" y="870" fill="#1a1a2e" font-size="19" font-family="Arial">- DO NOT close old accounts (would tank utilization ratio)</text><text x="100" y="905" fill="#1a1a2e" font-size="19" font-family="Arial">- DO NOT use the new card for purchases (CARD Act trap)</text><text x="100" y="940" fill="#1a1a2e" font-size="19" font-family="Arial">- Mark calendar 30 days BEFORE promo ends with an alarm</text><text x="100" y="975" fill="#1a1a2e" font-size="19" font-family="Arial">- If anything remains at promo end, transfer again or aggressive payoff</text><text x="560" y="1025" text-anchor="middle" fill="#ef4444" font-size="22" font-weight="bold" font-family="Arial">Discipline + math = financial freedom</text></svg>`,
          caption: "Four steps in one afternoon. Then 18 months of autopay does the work"
        }
      }
    ]
  },
  {
    id: "pf-debt-lesson-3",
    title: "Refinancing and Consolidation: Personal Loans, HELOCs, Cash-Out Refis",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "When New Debt Replaces Old Debt",
        content: `Sometimes the smartest move isn't paying off your debt — it's **moving it**. Refinancing means taking new debt to extinguish old debt at **better terms**: lower rate, longer (or shorter) term, fixed payments instead of variable.

Three common consolidation routes:

1. **Personal Loan** — unsecured, fixed rate, 2-7 year term. Typical APR **8-15%** for good credit. Replaces variable credit card APR of **22-29%**.
2. **HELOC (Home Equity Line of Credit)** — secured by your house. Variable rate, often **8-10%**. Use only the equity you need.
3. **Cash-Out Refi** — replaces your mortgage with a larger one, you pocket the difference. Long-term, low-rate, but resets your mortgage clock.

The personal loan is usually the **safest tool**. HELOCs and cash-out refis offer lower rates but trade **unsecured debt for secured debt** — and "secured" means your **house is collateral**. If you default on a credit card, your credit score takes a hit. If you default on a HELOC, **you lose your home**.

This lesson covers when each tool makes sense, when each is a trap, and the **3-year recoup rule** for any refinance decision.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="60" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold" font-family="Arial">Three Consolidation Routes</text><text x="550" y="100" text-anchor="middle" fill="#ffffff" font-size="20" font-family="Arial">From safest to most dangerous</text><rect x="60" y="140" width="320" height="380" fill="#10b981" rx="10"/><text x="220" y="190" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold" font-family="Arial">Personal Loan</text><text x="220" y="220" text-anchor="middle" fill="#ffd700" font-size="18" font-family="Arial">SAFEST</text><line x1="80" y1="240" x2="360" y2="240" stroke="#ffffff" stroke-width="2"/><text x="80" y="280" fill="#ffffff" font-size="17" font-family="Arial">- Unsecured</text><text x="80" y="315" fill="#ffffff" font-size="17" font-family="Arial">- Fixed rate</text><text x="80" y="350" fill="#ffffff" font-size="17" font-family="Arial">- 2-7 year term</text><text x="80" y="385" fill="#ffffff" font-size="17" font-family="Arial">- 8-15% APR</text><text x="80" y="420" fill="#ffffff" font-size="17" font-family="Arial">- No collateral</text><text x="220" y="475" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold" font-family="Arial">Best CC consolidation</text><rect x="390" y="140" width="320" height="380" fill="#f59e0b" rx="10"/><text x="550" y="190" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold" font-family="Arial">HELOC</text><text x="550" y="220" text-anchor="middle" fill="#ffd700" font-size="18" font-family="Arial">RISKY</text><line x1="410" y1="240" x2="690" y2="240" stroke="#ffffff" stroke-width="2"/><text x="410" y="280" fill="#ffffff" font-size="17" font-family="Arial">- Secured by house</text><text x="410" y="315" fill="#ffffff" font-size="17" font-family="Arial">- Variable rate</text><text x="410" y="350" fill="#ffffff" font-size="17" font-family="Arial">- 8-10% APR</text><text x="410" y="385" fill="#ffffff" font-size="17" font-family="Arial">- Draw period 10 yrs</text><text x="410" y="420" fill="#ffffff" font-size="17" font-family="Arial">- Closing costs</text><text x="550" y="475" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold" font-family="Arial">House on the line</text><rect x="720" y="140" width="320" height="380" fill="#ef4444" rx="10"/><text x="880" y="190" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold" font-family="Arial">Cash-Out Refi</text><text x="880" y="220" text-anchor="middle" fill="#ffd700" font-size="18" font-family="Arial">MOST RISKY</text><line x1="740" y1="240" x2="1020" y2="240" stroke="#ffffff" stroke-width="2"/><text x="740" y="280" fill="#ffffff" font-size="17" font-family="Arial">- Replaces mortgage</text><text x="740" y="315" fill="#ffffff" font-size="17" font-family="Arial">- Larger principal</text><text x="740" y="350" fill="#ffffff" font-size="17" font-family="Arial">- Resets 30-yr clock</text><text x="740" y="385" fill="#ffffff" font-size="17" font-family="Arial">- 2-5% closing costs</text><text x="740" y="420" fill="#ffffff" font-size="17" font-family="Arial">- House collateral</text><text x="880" y="475" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold" font-family="Arial">Last resort</text><rect x="60" y="545" width="980" height="220" fill="#6366f1" rx="10"/><text x="550" y="590" text-anchor="middle" fill="#ffd700" font-size="26" font-weight="bold" font-family="Arial">The Critical Distinction</text><line x1="100" y1="610" x2="1000" y2="610" stroke="#ffffff" stroke-width="2"/><text x="550" y="650" text-anchor="middle" fill="#ffffff" font-size="22" font-family="Arial">Personal loan default: credit score takes a hit</text><text x="550" y="690" text-anchor="middle" fill="#ffffff" font-size="22" font-family="Arial">HELOC / Cash-Out default: you LOSE YOUR HOME</text><text x="550" y="735" text-anchor="middle" fill="#ef4444" font-size="22" font-weight="bold" font-family="Arial">Unsecured -&gt; Secured = irreversible escalation</text><rect x="60" y="790" width="980" height="260" fill="#ffffff" rx="10"/><text x="550" y="835" text-anchor="middle" fill="#1a1a2e" font-size="24" font-weight="bold" font-family="Arial">The 3-Year Recoup Rule</text><line x1="100" y1="855" x2="1000" y2="855" stroke="#888" stroke-width="2"/><text x="100" y="895" fill="#1a1a2e" font-size="20" font-family="Arial">Closing costs / monthly savings = recoup period</text><text x="100" y="930" fill="#1a1a2e" font-size="20" font-family="Arial">If recoup &gt; 3 years: don't refinance</text><text x="100" y="965" fill="#1a1a2e" font-size="20" font-family="Arial">Example: $4,500 costs, $200/mo savings = 22.5 months = GO</text><text x="100" y="1000" fill="#1a1a2e" font-size="20" font-family="Arial">Example: $6,000 costs, $80/mo savings = 75 months = SKIP</text><text x="550" y="1040" text-anchor="middle" fill="#10b981" font-size="22" font-weight="bold" font-family="Arial">If you'd move or sell before recoup, savings = zero</text></svg>`,
          caption: "Three tools, three risk levels — unsecured beats secured for credit card consolidation"
        }
      },
      {
        type: "concept",
        title: "The Personal Loan Consolidation Move",
        content: `The **personal loan consolidation** is the most common and safest debt restructuring. Here's how it works:

You apply through **SoFi, LightStream, Marcus, Discover, or your credit union**. Based on your credit score and income, you get approved for a fixed-rate loan — say **$30,000 at 12% APR for 5 years**.

The lender either sends the cash to your bank account, or pays your credit cards directly. Your credit cards are now at **$0 balance**. You owe a single payment to the lender — say **$667/month** — for 60 months. Total interest: **$10,025**.

Compare to keeping **$30,000 at 24% average credit card APR**, making minimum payments. That stretches to **20+ years** and **$50,000+** in interest. Even paying 3x the minimum, you'd pay **~$24,000 in interest over 5 years**.

**Real savings: $30k debt at 24% vs 12% over 5 years**:
- **Credit cards at 24% (aggressive payoff)**: ~$24,000 interest
- **Personal loan at 12%**: ~$10,000 interest
- **Net savings: ~$14,000**

**Qualifications**: Score **660+** for decent rates, **720+** for the best rates. Debt-to-income ratio **under 40%**. Steady income.

**The catch**: Cards now empty. If you put new charges back on them, you've just **doubled your debt** — same amount in cards + the loan.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="55" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold" font-family="Arial">$35,000 Credit Card Debt</text><text x="550" y="95" text-anchor="middle" fill="#ffffff" font-size="20" font-family="Arial">Personal loan consolidation over 5 years</text><rect x="60" y="130" width="490" height="380" fill="#ef4444" rx="10"/><text x="305" y="180" text-anchor="middle" fill="#ffffff" font-size="24" font-weight="bold" font-family="Arial">BEFORE</text><text x="305" y="215" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold" font-family="Arial">Credit Cards at 24% APR</text><line x1="90" y1="235" x2="520" y2="235" stroke="#ffffff" stroke-width="2"/><text x="305" y="275" text-anchor="middle" fill="#ffffff" font-size="20" font-family="Arial">Principal: $35,000</text><text x="305" y="310" text-anchor="middle" fill="#ffffff" font-size="20" font-family="Arial">Avg APR: 24%</text><text x="305" y="345" text-anchor="middle" fill="#ffffff" font-size="20" font-family="Arial">Aggressive payment: $1,000/mo</text><text x="305" y="380" text-anchor="middle" fill="#ffffff" font-size="20" font-family="Arial">Payoff time: ~60 months</text><line x1="90" y1="400" x2="520" y2="400" stroke="#ffffff" stroke-width="2"/><text x="305" y="445" text-anchor="middle" fill="#ffd700" font-size="22" font-family="Arial">Total interest paid:</text><text x="305" y="490" text-anchor="middle" fill="#ffd700" font-size="38" font-weight="bold" font-family="Arial">~$25,000</text><rect x="570" y="130" width="490" height="380" fill="#10b981" rx="10"/><text x="815" y="180" text-anchor="middle" fill="#ffffff" font-size="24" font-weight="bold" font-family="Arial">AFTER</text><text x="815" y="215" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold" font-family="Arial">Personal Loan at 12% APR</text><line x1="600" y1="235" x2="1030" y2="235" stroke="#ffffff" stroke-width="2"/><text x="815" y="275" text-anchor="middle" fill="#ffffff" font-size="20" font-family="Arial">Principal: $35,000</text><text x="815" y="310" text-anchor="middle" fill="#ffffff" font-size="20" font-family="Arial">Fixed APR: 12%</text><text x="815" y="345" text-anchor="middle" fill="#ffffff" font-size="20" font-family="Arial">Fixed payment: $779/mo</text><text x="815" y="380" text-anchor="middle" fill="#ffffff" font-size="20" font-family="Arial">Payoff time: 60 months</text><line x1="600" y1="400" x2="1030" y2="400" stroke="#ffffff" stroke-width="2"/><text x="815" y="445" text-anchor="middle" fill="#ffd700" font-size="22" font-family="Arial">Total interest paid:</text><text x="815" y="490" text-anchor="middle" fill="#ffd700" font-size="38" font-weight="bold" font-family="Arial">~$11,000</text><rect x="60" y="535" width="1000" height="130" fill="#ffd700" rx="10"/><text x="560" y="580" text-anchor="middle" fill="#1a1a2e" font-size="28" font-weight="bold" font-family="Arial">Total Savings: $14,000</text><text x="560" y="620" text-anchor="middle" fill="#1a1a2e" font-size="22" font-family="Arial">Over 5 years, same payoff timeline</text><text x="560" y="650" text-anchor="middle" fill="#1a1a2e" font-size="20" font-family="Arial">Lower payment, more breathing room each month</text><rect x="60" y="685" width="1000" height="180" fill="#6366f1" rx="10"/><text x="560" y="725" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold" font-family="Arial">Top Lenders (2025)</text><text x="100" y="765" fill="#ffffff" font-size="19" font-family="Arial">- SoFi: 8.99-25% APR, no fees, $5k-$100k</text><text x="100" y="800" fill="#ffffff" font-size="19" font-family="Arial">- LightStream: 7.49-25% APR, no fees, $5k-$100k</text><text x="100" y="835" fill="#ffffff" font-size="19" font-family="Arial">- Discover: 7.99-24% APR, no origination fee, $2.5k-$40k</text><rect x="60" y="885" width="1000" height="170" fill="#ffffff" rx="10"/><text x="560" y="930" text-anchor="middle" fill="#1a1a2e" font-size="22" font-weight="bold" font-family="Arial">The Catch (Critical)</text><text x="100" y="975" fill="#1a1a2e" font-size="19" font-family="Arial">Your cards are now empty. Charging them again means</text><text x="100" y="1010" fill="#1a1a2e" font-size="19" font-family="Arial">you owe the loan AND the new card balance.</text><text x="100" y="1045" fill="#ef4444" font-size="22" font-weight="bold" font-family="Arial">~30% of consolidators add new card debt within 2 years.</text></svg>`,
          caption: "$14,000 saved — IF you don't refill the cards you just paid off"
        }
      },
      {
        type: "example",
        title: "The HELOC Temptation (and Why It's a Trap)",
        content: `**Carla** owns a home worth $400,000 with a $250,000 mortgage — **$150,000 in equity**. She has **$35,000 in credit card debt at 24% APR**. Her bank offers her a **HELOC at 9% APR**.

**The pitch**: "Pay off all $35,000 of high-interest card debt at 9% instead of 24%. Interest is even **tax-deductible** if used for home improvement. You'll save $20,000+."

**The math**: True. At 24% APR with $700/month payments, she'd pay $25,000+ in interest. At 9% APR she'd pay around $11,000. Net savings: **~$14,000**.

**Why it's still a trap**:

1. **Carla converted unsecured debt to secured debt**. Before, defaulting meant collections calls and a wrecked score. Now, defaulting means **foreclosure**. The card debt couldn't take her house. The HELOC can.

2. **Variable rate**. HELOC rates float with the Prime Rate. The 9% she signed at could become **13% in 2 years** if rates climb — wiping out her savings.

3. **The behavior problem**. Her cards now have **$35,000** of available credit again. Within 18 months, **~40% of HELOC consolidators** rack up new card debt — now they owe both.

4. **The 10/20 trap**. A HELOC has a 10-year draw period (interest-only payments allowed), then a 20-year repayment phase. Many people only pay interest for 10 years, then face a **shocking principal repayment** they can't afford.

**Verdict**: Carla should use a **personal loan at 12%** instead. She pays slightly more, but **her house stays safe**.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="55" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold" font-family="Arial">The HELOC Trap</text><text x="550" y="95" text-anchor="middle" fill="#ffffff" font-size="20" font-family="Arial">Carla: $35k CC debt, $150k home equity</text><rect x="60" y="125" width="1000" height="110" fill="#0ea5e9" rx="10"/><text x="560" y="170" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold" font-family="Arial">The Pitch</text><text x="560" y="205" text-anchor="middle" fill="#ffffff" font-size="20" font-family="Arial">"9% HELOC instead of 24% cards. Save $14,000+"</text><text x="550" y="285" text-anchor="middle" fill="#ffd700" font-size="26" font-weight="bold" font-family="Arial">Four Hidden Risks</text><rect x="60" y="310" width="490" height="220" fill="#ef4444" rx="10"/><text x="305" y="355" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold" font-family="Arial">1. Secured Debt</text><line x1="90" y1="375" x2="520" y2="375" stroke="#ffffff" stroke-width="2"/><text x="305" y="415" text-anchor="middle" fill="#ffffff" font-size="18" font-family="Arial">CC default = credit score hit</text><text x="305" y="445" text-anchor="middle" fill="#ffffff" font-size="18" font-family="Arial">HELOC default = FORECLOSURE</text><text x="305" y="490" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold" font-family="Arial">House becomes collateral</text><rect x="570" y="310" width="490" height="220" fill="#f59e0b" rx="10"/><text x="815" y="355" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold" font-family="Arial">2. Variable Rate</text><line x1="600" y1="375" x2="1030" y2="375" stroke="#ffffff" stroke-width="2"/><text x="815" y="415" text-anchor="middle" fill="#ffffff" font-size="18" font-family="Arial">9% today, could be 13% in 2 yrs</text><text x="815" y="445" text-anchor="middle" fill="#ffffff" font-size="18" font-family="Arial">Tied to Prime Rate</text><text x="815" y="490" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold" font-family="Arial">Wipes out the savings</text><rect x="60" y="545" width="490" height="220" fill="#8b5cf6" rx="10"/><text x="305" y="590" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold" font-family="Arial">3. Behavior</text><line x1="90" y1="610" x2="520" y2="610" stroke="#ffffff" stroke-width="2"/><text x="305" y="650" text-anchor="middle" fill="#ffffff" font-size="18" font-family="Arial">Cards now empty again</text><text x="305" y="680" text-anchor="middle" fill="#ffffff" font-size="18" font-family="Arial">40% of HELOC users refill them</text><text x="305" y="725" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold" font-family="Arial">Then they owe BOTH</text><rect x="570" y="545" width="490" height="220" fill="#ec4899" rx="10"/><text x="815" y="590" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold" font-family="Arial">4. The 10/20 Trap</text><line x1="600" y1="610" x2="1030" y2="610" stroke="#ffffff" stroke-width="2"/><text x="815" y="650" text-anchor="middle" fill="#ffffff" font-size="18" font-family="Arial">10 yrs interest-only allowed</text><text x="815" y="680" text-anchor="middle" fill="#ffffff" font-size="18" font-family="Arial">Then 20 yrs principal+interest</text><text x="815" y="725" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold" font-family="Arial">Payment shock at year 11</text><rect x="60" y="785" width="1000" height="130" fill="#10b981" rx="10"/><text x="560" y="830" text-anchor="middle" fill="#ffffff" font-size="24" font-weight="bold" font-family="Arial">The Safer Move</text><text x="560" y="870" text-anchor="middle" fill="#ffffff" font-size="20" font-family="Arial">Personal loan at 12% APR, fixed, 5 years</text><text x="560" y="900" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold" font-family="Arial">Pay $1,500 more in interest. Keep the house.</text><rect x="60" y="935" width="1000" height="120" fill="#ffffff" rx="10"/><text x="560" y="975" text-anchor="middle" fill="#1a1a2e" font-size="22" font-weight="bold" font-family="Arial">The Rule</text><text x="560" y="1015" text-anchor="middle" fill="#1a1a2e" font-size="20" font-family="Arial">Never escalate unsecured debt to secured debt</text><text x="560" y="1045" text-anchor="middle" fill="#ef4444" font-size="20" font-weight="bold" font-family="Arial">unless you have NO other option.</text></svg>`,
          caption: "Carla saves $14k with the HELOC — and risks losing the house worth $400k"
        }
      },
      {
        type: "quiz",
        title: "Should You Refinance?",
        content: `**Scenario**: Mateo has a $260,000 mortgage at **6.5% APR** with **22 years remaining**. Current market rates for his credit profile are **5.0% APR**. Closing costs would be **$5,200**. He plans to live in the house for at least **10 more years**.

His current payment (P&I only): **$1,950/month**.
His new payment if he refinances to a new 30-year at 5.0%: **$1,395/month**.

Monthly savings: **$555**. Should Mateo refinance?`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="55" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold" font-family="Arial">Mateo's Refi Decision</text><text x="550" y="95" text-anchor="middle" fill="#ffffff" font-size="20" font-family="Arial">$260k mortgage, plans to stay 10+ years</text><rect x="60" y="125" width="490" height="280" fill="#ef4444" rx="10"/><text x="305" y="175" text-anchor="middle" fill="#ffffff" font-size="24" font-weight="bold" font-family="Arial">Current</text><line x1="90" y1="195" x2="520" y2="195" stroke="#ffffff" stroke-width="2"/><text x="80" y="240" fill="#ffffff" font-size="19" font-family="Arial">Rate: 6.5%</text><text x="80" y="275" fill="#ffffff" font-size="19" font-family="Arial">Remaining: 22 years</text><text x="80" y="310" fill="#ffffff" font-size="19" font-family="Arial">P&amp;I payment: $1,950/mo</text><text x="305" y="370" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold" font-family="Arial">$514,800 to pay off</text><rect x="570" y="125" width="490" height="280" fill="#10b981" rx="10"/><text x="815" y="175" text-anchor="middle" fill="#ffffff" font-size="24" font-weight="bold" font-family="Arial">Refi (30-yr)</text><line x1="600" y1="195" x2="1030" y2="195" stroke="#ffffff" stroke-width="2"/><text x="590" y="240" fill="#ffffff" font-size="19" font-family="Arial">Rate: 5.0%</text><text x="590" y="275" fill="#ffffff" font-size="19" font-family="Arial">New term: 30 years</text><text x="590" y="310" fill="#ffffff" font-size="19" font-family="Arial">P&amp;I payment: $1,395/mo</text><text x="815" y="370" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold" font-family="Arial">$502,200 to pay off</text><rect x="60" y="425" width="1000" height="120" fill="#0ea5e9" rx="10"/><text x="560" y="470" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold" font-family="Arial">The Numbers</text><text x="560" y="510" text-anchor="middle" fill="#ffffff" font-size="20" font-family="Arial">Monthly savings: $555 | Closing costs: $5,200</text><rect x="60" y="565" width="1000" height="180" fill="#6366f1" rx="10"/><text x="560" y="610" text-anchor="middle" fill="#ffd700" font-size="24" font-weight="bold" font-family="Arial">3-Year Recoup Rule</text><text x="560" y="655" text-anchor="middle" fill="#ffffff" font-size="20" font-family="Arial">$5,200 / $555 = 9.4 months to break even</text><text x="560" y="690" text-anchor="middle" fill="#ffffff" font-size="20" font-family="Arial">Mateo stays 10 years -&gt; 9.4 months &lt;&lt; 120 months</text><text x="560" y="730" text-anchor="middle" fill="#10b981" font-size="22" font-weight="bold" font-family="Arial">Recoup math: GREEN LIGHT</text><rect x="60" y="765" width="1000" height="170" fill="#f59e0b" rx="10"/><text x="560" y="810" text-anchor="middle" fill="#1a1a2e" font-size="22" font-weight="bold" font-family="Arial">The Hidden Cost: Clock Reset</text><text x="100" y="850" fill="#1a1a2e" font-size="19" font-family="Arial">Going from 22 yrs left to 30 yrs = 8 extra years</text><text x="100" y="880" fill="#1a1a2e" font-size="19" font-family="Arial">Total interest over loan life increases ~$30k</text><text x="100" y="915" fill="#1a1a2e" font-size="19" font-weight="bold" font-family="Arial">FIX: refinance to a 20-year, not a 30-year</text><rect x="60" y="955" width="1000" height="100" fill="#ffffff" rx="10"/><text x="560" y="995" text-anchor="middle" fill="#1a1a2e" font-size="22" font-weight="bold" font-family="Arial">Decision Framework</text><text x="560" y="1030" text-anchor="middle" fill="#1a1a2e" font-size="19" font-family="Arial">Rate drop &gt;1.5%, recoup &lt;3 yrs, term matched -&gt; refinance</text></svg>`,
          caption: "Recoup in under a year is a green light — but watch the clock-reset"
        },
        options: [
          { text: "No — refinancing always costs more in total interest", correct: false },
          { text: "Yes, refinance to a 30-year — the $555/month savings is too good to pass up", correct: false },
          { text: "Yes — but refinance to a 20-year (not 30) to capture the rate savings without extending the clock and adding ~$30k in total interest", correct: true },
          { text: "No — closing costs always exceed the benefit", correct: false }
        ],
        explanation: "Yes refinance, but to a 20-year term not 30. The 3-year recoup rule clearly approves the refi: $5,200 in closing costs divided by $555 monthly savings = only 9.4 months to break even, and Mateo plans to stay 10+ years. That's an easy yes on the rate change. But the trap is letting the lender quote you a 30-year refi when you only have 22 years left. Restarting the clock at 30 years means 8 extra years of payments, adding roughly $30,000+ in total interest over the loan's life — wiping out a large chunk of the rate savings. Match the new term to your remaining term (20 years here). Your monthly payment will still drop (5.0% vs 6.5% is a big spread) and you don't extend the clock. Best of both worlds."
      },
      {
        type: "application",
        title: "Your Consolidation Decision Tree",
        content: `Use this **decision tree** to choose the right consolidation tool — or to decide not to consolidate at all.

**Step 1: Calculate your blended credit card APR.** Weighted average. If you're under **15%**, consolidation rarely helps — focus on snowball/avalanche from Lesson 1.

**Step 2: Pull your credit score.** Free at **Credit Karma** or **annualcreditreport.com**.
- Under 660 -> consolidation rates won't be much better than your cards. Focus on payoff.
- 660-720 -> personal loan at 11-15% APR is realistic.
- 720+ -> top-tier personal loan rates 8-12% APR.

**Step 3: Choose the tool by debt size and risk tolerance.**

| Situation | Best Tool |
|-----------|-----------|
| $3k-$10k CC debt, score 670+ | **Balance transfer card** (from Lesson 2) |
| $10k-$50k CC debt, score 660+ | **Personal loan** |
| $50k+ CC debt, own home, disciplined | **HELOC** (with eyes open) |
| Mortgage rate >1.5% above market | **Standard refi** (match term) |
| Need cash AND mortgage savings | **Cash-out refi** (last resort) |

**Step 4: Apply the 3-year recoup rule** to anything with closing costs.

**Step 5: After consolidating, FREEZE THE CARDS.** Every consolidation that fails fails the same way: the borrower refills the cards. Pre-decide that you will not.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="55" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold" font-family="Arial">Consolidation Decision Tree</text><text x="550" y="95" text-anchor="middle" fill="#ffffff" font-size="20" font-family="Arial">Right tool, right situation, right behavior</text><rect x="60" y="130" width="1000" height="110" fill="#0ea5e9" rx="10"/><text x="560" y="170" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold" font-family="Arial">Step 1: Calculate Your Blended CC APR</text><text x="560" y="205" text-anchor="middle" fill="#ffffff" font-size="19" font-family="Arial">Under 15%? Focus on snowball/avalanche, skip this lesson</text><rect x="60" y="255" width="1000" height="140" fill="#6366f1" rx="10"/><text x="560" y="295" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold" font-family="Arial">Step 2: Pull Your Credit Score</text><text x="100" y="335" fill="#ffffff" font-size="18" font-family="Arial">Under 660: rates won't help. Pay down first.</text><text x="100" y="365" fill="#ffffff" font-size="18" font-family="Arial">660-720: personal loan at 11-15% APR realistic</text><text x="100" y="390" fill="#ffffff" font-size="18" font-family="Arial">720+: top rates 8-12% APR available</text><text x="550" y="445" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold" font-family="Arial">Step 3: Match Tool to Situation</text><rect x="60" y="465" width="1000" height="40" fill="#888"/><text x="120" y="492" fill="#ffffff" font-size="17" font-weight="bold" font-family="Arial">Situation</text><text x="720" y="492" fill="#ffffff" font-size="17" font-weight="bold" font-family="Arial">Best Tool</text><rect x="60" y="505" width="1000" height="40" fill="#ffffff"/><text x="80" y="530" fill="#1a1a2e" font-size="16" font-family="Arial">$3k-$10k CC, score 670+</text><text x="720" y="530" fill="#10b981" font-size="17" font-weight="bold" font-family="Arial">Balance Transfer</text><rect x="60" y="545" width="1000" height="40" fill="#888"/><text x="80" y="570" fill="#ffffff" font-size="16" font-family="Arial">$10k-$50k CC, score 660+</text><text x="720" y="570" fill="#ffd700" font-size="17" font-weight="bold" font-family="Arial">Personal Loan</text><rect x="60" y="585" width="1000" height="40" fill="#ffffff"/><text x="80" y="610" fill="#1a1a2e" font-size="16" font-family="Arial">$50k+ CC, own home, disciplined</text><text x="720" y="610" fill="#f59e0b" font-size="17" font-weight="bold" font-family="Arial">HELOC (caution)</text><rect x="60" y="625" width="1000" height="40" fill="#888"/><text x="80" y="650" fill="#ffffff" font-size="16" font-family="Arial">Mortgage rate &gt;1.5% above market</text><text x="720" y="650" fill="#10b981" font-size="17" font-weight="bold" font-family="Arial">Standard Refi</text><rect x="60" y="665" width="1000" height="40" fill="#ffffff"/><text x="80" y="690" fill="#1a1a2e" font-size="16" font-family="Arial">Need cash AND mortgage savings</text><text x="720" y="690" fill="#ef4444" font-size="17" font-weight="bold" font-family="Arial">Cash-Out Refi</text><rect x="60" y="720" width="490" height="160" fill="#10b981" rx="10"/><text x="305" y="760" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold" font-family="Arial">Step 4: 3-Year Recoup</text><text x="305" y="795" text-anchor="middle" fill="#ffffff" font-size="18" font-family="Arial">Costs / monthly savings = months</text><text x="305" y="830" text-anchor="middle" fill="#ffffff" font-size="18" font-family="Arial">If &lt; 36 months AND staying -&gt; GO</text><text x="305" y="860" text-anchor="middle" fill="#ffd700" font-size="18" font-weight="bold" font-family="Arial">Match the new term to old</text><rect x="570" y="720" width="490" height="160" fill="#ec4899" rx="10"/><text x="815" y="760" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold" font-family="Arial">Step 5: FREEZE THE CARDS</text><text x="815" y="795" text-anchor="middle" fill="#ffffff" font-size="18" font-family="Arial">Every failed consolidation</text><text x="815" y="830" text-anchor="middle" fill="#ffffff" font-size="18" font-family="Arial">fails the same way</text><text x="815" y="860" text-anchor="middle" fill="#ffd700" font-size="18" font-weight="bold" font-family="Arial">Don't refill them</text><rect x="60" y="900" width="1000" height="150" fill="#ffffff" rx="10"/><text x="560" y="945" text-anchor="middle" fill="#1a1a2e" font-size="22" font-weight="bold" font-family="Arial">Next Week's Action</text><text x="560" y="985" text-anchor="middle" fill="#1a1a2e" font-size="19" font-family="Arial">1. Get your credit score (free at annualcreditreport.com)</text><text x="560" y="1015" text-anchor="middle" fill="#1a1a2e" font-size="19" font-family="Arial">2. Pre-qualify (soft pull) at SoFi, LightStream, Marcus</text><text x="560" y="1045" text-anchor="middle" fill="#1a1a2e" font-size="19" font-family="Arial">3. Compare offers vs your balance-transfer plan from Lesson 2</text></svg>`,
          caption: "Pick the tool that matches your situation — then lock the cards in the freezer"
        }
      }
    ]
  },
{
    id: "pf-debt-lesson-4",
    title: "Credit Cards: APR, Compounding, and the Minimum-Payment Trap",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "The Most Expensive Money in America",
        content: `The average US credit card **APR is 22%** — but that headline number hides the real damage. Card interest **compounds daily**, not annually. Each night, the issuer takes your **APR ÷ 365** (~0.060% at 22%) and applies it to your **average daily balance**. That interest is added to the balance, and tomorrow's interest is calculated on the new, larger total.

The result: a **$5,000 balance** at 22% APR paid at the **1% minimum** takes **22+ years** to clear and costs **$11,000+ in interest** — more than double what you borrowed. The card industry calls this the "minimum payment trap," and it's engineered into the disclosure box on every statement. This lesson teaches you the math the issuer would rather you not run.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="80" text-anchor="middle" font-size="42" font-weight="bold" fill="#ffd700">The $5,000 Trap</text><text x="550" y="125" text-anchor="middle" font-size="22" fill="#888">22% APR · 1% minimum payment</text><rect x="100" y="180" width="900" height="180" rx="14" fill="#1a1a2e" stroke="#ef4444" stroke-width="3"/><text x="550" y="225" text-anchor="middle" font-size="26" fill="#ffffff" font-weight="bold">Borrowed</text><text x="550" y="295" text-anchor="middle" font-size="64" fill="#10b981" font-weight="bold">$5,000</text><rect x="100" y="400" width="900" height="180" rx="14" fill="#1a1a2e" stroke="#f59e0b" stroke-width="3"/><text x="550" y="445" text-anchor="middle" font-size="26" fill="#ffffff" font-weight="bold">Total Interest Paid</text><text x="550" y="515" text-anchor="middle" font-size="64" fill="#ef4444" font-weight="bold">$11,000+</text><rect x="100" y="620" width="900" height="180" rx="14" fill="#1a1a2e" stroke="#8b5cf6" stroke-width="3"/><text x="550" y="665" text-anchor="middle" font-size="26" fill="#ffffff" font-weight="bold">Time to Payoff</text><text x="550" y="735" text-anchor="middle" font-size="64" fill="#ec4899" font-weight="bold">22+ Years</text><rect x="100" y="840" width="900" height="200" rx="14" fill="#1a1a2e" stroke="#ffd700" stroke-width="2"/><text x="550" y="885" text-anchor="middle" font-size="22" fill="#ffd700" font-weight="bold">The lesson</text><text x="550" y="930" text-anchor="middle" font-size="20" fill="#ffffff">Pay the minimum and you pay back</text><text x="550" y="970" text-anchor="middle" font-size="20" fill="#ffffff"><tspan fill="#10b981" font-weight="bold">3.2x</tspan> what you borrowed —</text><text x="550" y="1010" text-anchor="middle" font-size="20" fill="#ffffff">over a generation.</text></svg>`,
          caption: "The minimum-payment trap visualized."
        }
      },
      {
        type: "concept",
        title: "Daily Compounding and the Minimum Formula",
        content: `**Daily Periodic Rate (DPR)** = APR ÷ 365. At 22%, DPR ≈ **0.0603% per day**. Each day the issuer multiplies your average daily balance by the DPR and adds the result to a running interest bucket. At cycle close (~30 days), that bucket posts to your account.

The **minimum payment** is typically the greater of **$25** or **1% of balance + monthly interest + fees**. On $5,000 at 22%, that's ~$50 + ~$92 interest = **~$142**. Of that, only **$50 reduces principal** — the other $92 just covers the month's interest. Pay $142/month and the balance barely moves.

The **grace period rule**: if you pay the **statement balance in full** by the due date (typically 21+ days after statement close), you owe **zero interest** on new purchases. Carry **one cent** of balance forward and the grace period vanishes — interest accrues from the **purchase date** on everything.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" font-size="38" font-weight="bold" fill="#ffd700">How Daily Interest Eats You</text><rect x="80" y="120" width="940" height="220" rx="14" fill="#1a1a2e" stroke="#6366f1" stroke-width="2"/><text x="550" y="165" text-anchor="middle" font-size="24" fill="#6366f1" font-weight="bold">Daily Periodic Rate</text><text x="550" y="220" text-anchor="middle" font-size="28" fill="#ffffff">DPR = APR ÷ 365</text><text x="550" y="275" text-anchor="middle" font-size="32" fill="#ffd700" font-weight="bold">22% ÷ 365 = 0.0603%/day</text><text x="550" y="320" text-anchor="middle" font-size="20" fill="#888">applied every night to your balance</text><rect x="80" y="370" width="940" height="280" rx="14" fill="#1a1a2e" stroke="#ef4444" stroke-width="2"/><text x="550" y="415" text-anchor="middle" font-size="24" fill="#ef4444" font-weight="bold">$5,000 Minimum Payment Math</text><text x="120" y="465" font-size="20" fill="#ffffff">1% of balance:</text><text x="980" y="465" text-anchor="end" font-size="20" fill="#10b981" font-weight="bold">$50</text><text x="120" y="505" font-size="20" fill="#ffffff">Monthly interest (22%/12):</text><text x="980" y="505" text-anchor="end" font-size="20" fill="#ef4444" font-weight="bold">+ $92</text><line x1="120" y1="525" x2="980" y2="525" stroke="#888" stroke-width="1"/><text x="120" y="555" font-size="22" fill="#ffd700" font-weight="bold">Minimum due:</text><text x="980" y="555" text-anchor="end" font-size="22" fill="#ffd700" font-weight="bold">$142</text><text x="120" y="605" font-size="20" fill="#ffffff">Principal reduced:</text><text x="980" y="605" text-anchor="end" font-size="20" fill="#ef4444" font-weight="bold">only $50</text><rect x="80" y="680" width="940" height="380" rx="14" fill="#1a1a2e" stroke="#10b981" stroke-width="2"/><text x="550" y="725" text-anchor="middle" font-size="24" fill="#10b981" font-weight="bold">The Grace Period Rule</text><text x="120" y="775" font-size="20" fill="#ffffff">Pay statement balance in full by due date</text><text x="980" y="775" text-anchor="end" font-size="22" fill="#10b981" font-weight="bold">$0 interest</text><text x="120" y="820" font-size="20" fill="#ffffff">(typically 21-25 days after statement close)</text><line x1="120" y1="855" x2="980" y2="855" stroke="#888" stroke-width="1" stroke-dasharray="4,4"/><text x="120" y="895" font-size="20" fill="#ffffff">Carry any balance forward</text><text x="980" y="895" text-anchor="end" font-size="22" fill="#ef4444" font-weight="bold">grace lost</text><text x="120" y="935" font-size="20" fill="#888">Interest accrues from purchase date</text><text x="120" y="975" font-size="20" fill="#888">on EVERY new charge — no free 21 days.</text><text x="550" y="1030" text-anchor="middle" font-size="22" fill="#ffd700" font-weight="bold">Pay in full or pay interest on everything.</text></svg>`,
          caption: "DPR, minimum-payment mechanics, and the grace period."
        }
      },
      {
        type: "example",
        title: "Maya's Card and the Utilization Cliff",
        content: `**Maya** has a **$10,000 credit limit** and currently carries a **$5,500 balance** at 22% APR. Her utilization is **55%** — above the **50% cliff** that triggers a credit-score drop. Her FICO falls from 740 to 685 in one cycle.

She pays only the **$155 minimum**. Daily interest = $5,500 × 0.000603 = **$3.32/day**, or **~$100/month**. Of her $155 payment, only **~$55 hits principal**. At this pace, payoff = **20+ years**.

Maya switches strategies. She pays **$500/month** instead and stops new charges. Month 1: balance drops to $5,100 → utilization 51% (still over). Month 2: $4,690 → **47% (under the cliff)** → score recovers to 720. Month 14: paid off, total interest **~$740** vs **$8,400+** on minimums. Same card, same APR — just a different payment.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" font-size="38" font-weight="bold" fill="#ffd700">Maya's Two Paths</text><text x="550" y="115" text-anchor="middle" font-size="20" fill="#888">$5,500 balance · $10,000 limit · 22% APR</text><rect x="60" y="160" width="490" height="420" rx="14" fill="#1a1a2e" stroke="#ef4444" stroke-width="3"/><text x="305" y="205" text-anchor="middle" font-size="24" fill="#ef4444" font-weight="bold">Path A: Minimum</text><text x="305" y="245" text-anchor="middle" font-size="20" fill="#ffffff">$155/month</text><line x1="90" y1="270" x2="520" y2="270" stroke="#888" stroke-width="1"/><text x="90" y="310" font-size="18" fill="#ffffff">Daily interest</text><text x="520" y="310" text-anchor="end" font-size="18" fill="#ef4444" font-weight="bold">$3.32</text><text x="90" y="350" font-size="18" fill="#ffffff">Monthly interest</text><text x="520" y="350" text-anchor="end" font-size="18" fill="#ef4444" font-weight="bold">~$100</text><text x="90" y="390" font-size="18" fill="#ffffff">Principal paid</text><text x="520" y="390" text-anchor="end" font-size="18" fill="#f59e0b" font-weight="bold">$55</text><text x="90" y="430" font-size="18" fill="#ffffff">Utilization</text><text x="520" y="430" text-anchor="end" font-size="18" fill="#ef4444" font-weight="bold">55%</text><text x="90" y="470" font-size="18" fill="#ffffff">FICO impact</text><text x="520" y="470" text-anchor="end" font-size="18" fill="#ef4444" font-weight="bold">740 → 685</text><text x="305" y="520" text-anchor="middle" font-size="22" fill="#ffd700" font-weight="bold">20+ years</text><text x="305" y="555" text-anchor="middle" font-size="20" fill="#ef4444" font-weight="bold">$8,400+ interest</text><rect x="570" y="160" width="490" height="420" rx="14" fill="#1a1a2e" stroke="#10b981" stroke-width="3"/><text x="815" y="205" text-anchor="middle" font-size="24" fill="#10b981" font-weight="bold">Path B: $500/mo</text><text x="815" y="245" text-anchor="middle" font-size="20" fill="#ffffff">3.2x the minimum</text><line x1="600" y1="270" x2="1030" y2="270" stroke="#888" stroke-width="1"/><text x="600" y="310" font-size="18" fill="#ffffff">Month 1 balance</text><text x="1030" y="310" text-anchor="end" font-size="18" fill="#f59e0b" font-weight="bold">$5,100</text><text x="600" y="350" font-size="18" fill="#ffffff">Month 2 balance</text><text x="1030" y="350" text-anchor="end" font-size="18" fill="#10b981" font-weight="bold">$4,690</text><text x="600" y="390" font-size="18" fill="#ffffff">Utilization drop</text><text x="1030" y="390" text-anchor="end" font-size="18" fill="#10b981" font-weight="bold">47%</text><text x="600" y="430" font-size="18" fill="#ffffff">FICO recovers</text><text x="1030" y="430" text-anchor="end" font-size="18" fill="#10b981" font-weight="bold">685 → 720</text><text x="600" y="470" font-size="18" fill="#ffffff">Payoff month</text><text x="1030" y="470" text-anchor="end" font-size="18" fill="#10b981" font-weight="bold">14</text><text x="815" y="520" text-anchor="middle" font-size="22" fill="#ffd700" font-weight="bold">~14 months</text><text x="815" y="555" text-anchor="middle" font-size="20" fill="#10b981" font-weight="bold">$740 interest</text><rect x="60" y="620" width="1000" height="440" rx="14" fill="#1a1a2e" stroke="#ffd700" stroke-width="2"/><text x="560" y="665" text-anchor="middle" font-size="24" fill="#ffd700" font-weight="bold">The 50% Utilization Cliff</text><line x1="120" y1="800" x2="1000" y2="800" stroke="#888" stroke-width="2"/><line x1="120" y1="800" x2="120" y2="710" stroke="#888" stroke-width="2"/><rect x="180" y="780" width="80" height="20" fill="#10b981"/><text x="220" y="830" text-anchor="middle" font-size="16" fill="#10b981" font-weight="bold">&lt;30%</text><text x="220" y="855" text-anchor="middle" font-size="14" fill="#888">Ideal</text><rect x="340" y="760" width="80" height="40" fill="#10b981"/><text x="380" y="830" text-anchor="middle" font-size="16" fill="#10b981" font-weight="bold">30-50%</text><text x="380" y="855" text-anchor="middle" font-size="14" fill="#888">OK</text><rect x="500" y="740" width="80" height="60" fill="#f59e0b"/><text x="540" y="830" text-anchor="middle" font-size="16" fill="#f59e0b" font-weight="bold">50-70%</text><text x="540" y="855" text-anchor="middle" font-size="14" fill="#888">Score drops</text><rect x="660" y="710" width="80" height="90" fill="#ef4444"/><text x="700" y="830" text-anchor="middle" font-size="16" fill="#ef4444" font-weight="bold">70-90%</text><text x="700" y="855" text-anchor="middle" font-size="14" fill="#888">Big damage</text><rect x="820" y="690" width="80" height="110" fill="#ef4444"/><text x="860" y="830" text-anchor="middle" font-size="16" fill="#ef4444" font-weight="bold">90%+</text><text x="860" y="855" text-anchor="middle" font-size="14" fill="#888">Severe</text><text x="560" y="920" text-anchor="middle" font-size="22" fill="#ffffff">Maya saved <tspan fill="#10b981" font-weight="bold">$7,660 in interest</tspan></text><text x="560" y="960" text-anchor="middle" font-size="22" fill="#ffffff">and <tspan fill="#10b981" font-weight="bold">18+ years</tspan> by tripling her payment.</text><text x="560" y="1015" text-anchor="middle" font-size="20" fill="#ffd700">Stay under 30% utilization to protect your score.</text></svg>`,
          caption: "Minimum vs aggressive payment, plus the utilization tiers."
        }
      },
      {
        type: "quiz",
        title: "Check Your Understanding",
        question: `You have a **$3,000 balance** on a card at **24% APR**. You pay the **statement balance in full** by the due date every month. This month you charge **$400** in new purchases. How much interest will you owe at next statement close?`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="80" text-anchor="middle" font-size="38" font-weight="bold" fill="#ffd700">Grace Period Quiz</text><rect x="100" y="140" width="900" height="200" rx="14" fill="#1a1a2e" stroke="#6366f1" stroke-width="2"/><text x="550" y="190" text-anchor="middle" font-size="22" fill="#ffffff">Balance: <tspan fill="#ffd700" font-weight="bold">$3,000</tspan></text><text x="550" y="235" text-anchor="middle" font-size="22" fill="#ffffff">APR: <tspan fill="#ffd700" font-weight="bold">24%</tspan></text><text x="550" y="280" text-anchor="middle" font-size="22" fill="#ffffff">Last statement: <tspan fill="#10b981" font-weight="bold">paid in FULL</tspan></text><text x="550" y="320" text-anchor="middle" font-size="22" fill="#ffffff">New charges: <tspan fill="#ffd700" font-weight="bold">$400</tspan></text><text x="550" y="400" text-anchor="middle" font-size="26" fill="#ffd700" font-weight="bold">Interest owed?</text><circle cx="200" cy="510" r="30" fill="#ef4444" opacity="0.3"/><text x="200" y="520" text-anchor="middle" font-size="28" fill="#ffffff" font-weight="bold">A</text><text x="260" y="520" font-size="22" fill="#ffffff">~$60 (24%/12 × $3,000)</text><circle cx="200" cy="620" r="30" fill="#ef4444" opacity="0.3"/><text x="200" y="630" text-anchor="middle" font-size="28" fill="#ffffff" font-weight="bold">B</text><text x="260" y="630" font-size="22" fill="#ffffff">~$8 (DPR × $400 × 30)</text><circle cx="200" cy="730" r="30" fill="#10b981" opacity="0.3"/><text x="200" y="740" text-anchor="middle" font-size="28" fill="#ffffff" font-weight="bold">C</text><text x="260" y="740" font-size="22" fill="#ffffff">$0 — grace period active</text><circle cx="200" cy="840" r="30" fill="#ef4444" opacity="0.3"/><text x="200" y="850" text-anchor="middle" font-size="28" fill="#ffffff" font-weight="bold">D</text><text x="260" y="850" font-size="22" fill="#ffffff">~$28 (1% min + APR)</text><rect x="100" y="920" width="900" height="140" rx="14" fill="#1a1a2e" stroke="#10b981" stroke-width="2"/><text x="550" y="965" text-anchor="middle" font-size="22" fill="#10b981" font-weight="bold">The grace period rule</text><text x="550" y="1005" text-anchor="middle" font-size="20" fill="#ffffff">Statement paid in full = no interest on</text><text x="550" y="1035" text-anchor="middle" font-size="20" fill="#ffffff">new purchases this cycle.</text></svg>`,
          caption: "Grace period applies when statement balance is paid in full."
        },
        options: [
          { text: "~$60 — APR/12 × $3,000", correct: false },
          { text: "~$8 — daily rate × $400 × 30 days", correct: false },
          { text: "$0 — grace period is active", correct: true },
          { text: "~$28 — minimum + interest", correct: false }
        ],
        explanation: `**Correct answer: C.** Because you paid the **previous statement balance in full by the due date**, the **grace period is preserved**. That means no interest accrues on new purchases during this cycle — you'd only pay interest if you carry a balance past the next due date. The moment you fail to pay the statement balance in full, the grace period vanishes and interest accrues on every new charge **from the purchase date**, not the statement date.`
      },
      {
        type: "application",
        title: "The Three-Habit Credit Card Rule",
        content: `Build these habits on every card you own:

**1. Pay the statement balance in full, every month.** Set autopay for the **full statement balance** (not "minimum due"). This locks in the grace period and means you literally pay **zero interest**, forever.

**2. Keep utilization under 30%.** On a $10,000 limit, that means **carry under $3,000 at statement close**. Tip: even if you pay in full, your utilization is reported on the **statement date**, not the due date. **Pay mid-cycle** to drop reported utilization further.

**3. If you carry a balance, run the DPR math.** Multiply your balance by APR ÷ 365 to see the daily bleed. A $5,000 balance at 22% bleeds **$3+/day** — about a coffee a day, donated to the bank. Anything above the minimum directly attacks principal.

If you can't trust yourself with a card, **freeze it** (literally, in water) until the balance is zero.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="80" text-anchor="middle" font-size="38" font-weight="bold" fill="#ffd700">The Three-Habit Rule</text><rect x="80" y="140" width="940" height="270" rx="14" fill="#1a1a2e" stroke="#10b981" stroke-width="3"/><circle cx="160" cy="200" r="40" fill="#10b981"/><text x="160" y="215" text-anchor="middle" font-size="36" fill="#1a1a2e" font-weight="bold">1</text><text x="230" y="195" font-size="26" fill="#10b981" font-weight="bold">Autopay statement balance in full</text><text x="230" y="240" font-size="20" fill="#ffffff">Not the minimum. Not the current balance.</text><text x="230" y="270" font-size="20" fill="#ffffff">The full <tspan fill="#ffd700" font-weight="bold">statement balance</tspan>.</text><text x="230" y="320" font-size="20" fill="#888">Result: grace period preserved forever.</text><text x="230" y="355" font-size="24" fill="#10b981" font-weight="bold">Interest paid: $0</text><rect x="80" y="430" width="940" height="270" rx="14" fill="#1a1a2e" stroke="#0ea5e9" stroke-width="3"/><circle cx="160" cy="490" r="40" fill="#0ea5e9"/><text x="160" y="505" text-anchor="middle" font-size="36" fill="#1a1a2e" font-weight="bold">2</text><text x="230" y="485" font-size="26" fill="#0ea5e9" font-weight="bold">Stay under 30% utilization</text><text x="230" y="530" font-size="20" fill="#ffffff"><tspan fill="#ffd700" font-weight="bold">$10K limit</tspan> → carry &lt;$3K at statement close</text><text x="230" y="575" font-size="20" fill="#ffffff">Pay <tspan fill="#ffd700" font-weight="bold">mid-cycle</tspan> to drop reported number.</text><text x="230" y="625" font-size="20" fill="#888">Result: FICO climbs, rate offers improve.</text><text x="230" y="665" font-size="24" fill="#0ea5e9" font-weight="bold">Score impact: +30-60 pts</text><rect x="80" y="720" width="940" height="270" rx="14" fill="#1a1a2e" stroke="#ef4444" stroke-width="3"/><circle cx="160" cy="780" r="40" fill="#ef4444"/><text x="160" y="795" text-anchor="middle" font-size="36" fill="#1a1a2e" font-weight="bold">3</text><text x="230" y="775" font-size="26" fill="#ef4444" font-weight="bold">If you carry a balance, run the math</text><text x="230" y="820" font-size="20" fill="#ffffff">Daily bleed = balance × <tspan fill="#ffd700" font-weight="bold">APR ÷ 365</tspan></text><text x="230" y="860" font-size="20" fill="#ffffff">$5,000 × 22% / 365 = <tspan fill="#ef4444" font-weight="bold">$3.01/day</tspan></text><text x="230" y="910" font-size="20" fill="#888">Every dollar above the minimum</text><text x="230" y="940" font-size="20" fill="#888">attacks principal directly.</text><text x="230" y="980" font-size="22" fill="#ef4444" font-weight="bold">Action: pay aggressively.</text><text x="550" y="1050" text-anchor="middle" font-size="22" fill="#ffd700" font-weight="bold">Can't trust yourself? Freeze the card in water.</text></svg>`,
          caption: "Three habits that turn cards from traps into tools."
        }
      }
    ]
  },
  {
    id: "pf-debt-lesson-5",
    title: "Student Loans: Federal vs Private, IDR Plans, PSLF",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "Not All Student Loans Are the Same",
        content: `Americans carry **$1.7 trillion** in student loan debt across **43 million borrowers** — average balance **~$37,000**. But "student loan" is a category, not a product. The single most important distinction is **federal vs private**, because federal loans come with **borrower protections** worth thousands of dollars and decades of flexibility.

Federal loans offer **income-driven repayment (IDR)**, **forbearance**, **deferment**, **death/disability discharge**, and access to **Public Service Loan Forgiveness (PSLF)**. Private loans offer **none of these by default**. A federal **Direct Subsidized Loan** doesn't even accrue interest while you're in school.

This lesson teaches you the four IDR plans, how **PSLF**'s 120 qualifying payments work, and the single most expensive mistake young professionals make: **refinancing federal loans into private loans** to chase a lower rate, and losing every protection forever.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="80" text-anchor="middle" font-size="40" font-weight="bold" fill="#ffd700">Federal vs Private</text><text x="550" y="125" text-anchor="middle" font-size="22" fill="#888">$1.7T owed by 43M Americans</text><rect x="60" y="180" width="490" height="780" rx="14" fill="#1a1a2e" stroke="#10b981" stroke-width="3"/><text x="305" y="230" text-anchor="middle" font-size="28" fill="#10b981" font-weight="bold">FEDERAL</text><text x="305" y="265" text-anchor="middle" font-size="18" fill="#888">Direct Sub/Unsub, Grad PLUS, Parent PLUS</text><line x1="90" y1="290" x2="520" y2="290" stroke="#888" stroke-width="1"/><text x="105" y="335" font-size="22" fill="#10b981" font-weight="bold">+ Income-driven repayment</text><text x="125" y="365" font-size="18" fill="#ffffff">SAVE, PAYE, IBR, ICR</text><text x="105" y="415" font-size="22" fill="#10b981" font-weight="bold">+ PSLF eligibility</text><text x="125" y="445" font-size="18" fill="#ffffff">120 payments → forgiven</text><text x="105" y="495" font-size="22" fill="#10b981" font-weight="bold">+ Subsidized interest</text><text x="125" y="525" font-size="18" fill="#ffffff">No interest in school</text><text x="105" y="575" font-size="22" fill="#10b981" font-weight="bold">+ Forbearance / Deferment</text><text x="125" y="605" font-size="18" fill="#ffffff">Hardship pause</text><text x="105" y="655" font-size="22" fill="#10b981" font-weight="bold">+ Death/disability discharge</text><text x="125" y="685" font-size="18" fill="#ffffff">Debt forgiven</text><text x="105" y="735" font-size="22" fill="#10b981" font-weight="bold">+ Fixed rate, set by Congress</text><text x="125" y="765" font-size="18" fill="#ffffff">2024-25 undergrad: 6.53%</text><text x="105" y="820" font-size="22" fill="#10b981" font-weight="bold">+ No credit check (most)</text><text x="125" y="850" font-size="18" fill="#ffffff">Access for everyone</text><text x="305" y="925" text-anchor="middle" font-size="22" fill="#ffd700" font-weight="bold">Worth thousands</text><text x="305" y="950" text-anchor="middle" font-size="18" fill="#ffd700">over loan life</text><rect x="570" y="180" width="490" height="780" rx="14" fill="#1a1a2e" stroke="#ef4444" stroke-width="3"/><text x="815" y="230" text-anchor="middle" font-size="28" fill="#ef4444" font-weight="bold">PRIVATE</text><text x="815" y="265" text-anchor="middle" font-size="18" fill="#888">SoFi, Sallie Mae, Earnest, banks</text><line x1="600" y1="290" x2="1030" y2="290" stroke="#888" stroke-width="1"/><text x="615" y="335" font-size="22" fill="#ef4444" font-weight="bold">- No IDR</text><text x="635" y="365" font-size="18" fill="#888">Fixed payment regardless of income</text><text x="615" y="415" font-size="22" fill="#ef4444" font-weight="bold">- No PSLF</text><text x="635" y="445" font-size="18" fill="#888">No forgiveness program, ever</text><text x="615" y="495" font-size="22" fill="#ef4444" font-weight="bold">- Interest from day one</text><text x="635" y="525" font-size="18" fill="#888">Accrues while in school</text><text x="615" y="575" font-size="22" fill="#ef4444" font-weight="bold">- Limited hardship options</text><text x="635" y="605" font-size="18" fill="#888">3-12 months max, lender's discretion</text><text x="615" y="655" font-size="22" fill="#ef4444" font-weight="bold">- Cosigner stays on hook</text><text x="635" y="685" font-size="18" fill="#888">Even after death</text><text x="615" y="735" font-size="22" fill="#ef4444" font-weight="bold">- Variable rates possible</text><text x="635" y="765" font-size="18" fill="#888">Can climb with the prime rate</text><text x="615" y="820" font-size="22" fill="#ef4444" font-weight="bold">- Credit check required</text><text x="635" y="850" font-size="18" fill="#888">Cosigner often needed</text><text x="815" y="925" text-anchor="middle" font-size="22" fill="#ffd700" font-weight="bold">Lower rate, fewer rights</text><text x="815" y="950" text-anchor="middle" font-size="18" fill="#ffd700">Borrower beware</text><text x="550" y="1020" text-anchor="middle" font-size="22" fill="#ffd700" font-weight="bold">Borrow federal first. Always.</text></svg>`,
          caption: "Federal protections vs private terms — the core distinction."
        }
      },
      {
        type: "concept",
        title: "The Four IDR Plans and PSLF",
        content: `**Income-Driven Repayment (IDR)** ties your monthly payment to your **discretionary income** (AGI minus a poverty-line buffer). Four plans exist:

**SAVE** (Saving on a Valuable Education): 5% of discretionary income for undergrad loans, 10% for grad. Lowest payment available; interest doesn't capitalize if you're paying in full.

**PAYE** (Pay As You Earn): 10% of discretionary income, capped at standard 10-year payment. Forgiveness after **20 years**.

**IBR** (Income-Based Repayment): 10-15% of discretionary income. Forgiveness at **20-25 years**.

**ICR** (Income-Contingent Repayment): 20% of discretionary income or fixed 12-year payment. Available for Parent PLUS via consolidation.

**PSLF** (Public Service Loan Forgiveness): Make **120 qualifying monthly payments** (10 years) on an IDR plan while working **full-time for a qualifying employer** — a 501(c)(3) nonprofit or any **federal, state, local, or tribal government**. Remaining balance forgiven, **tax-free**.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" font-size="38" font-weight="bold" fill="#ffd700">The Four IDR Plans</text><rect x="60" y="120" width="500" height="200" rx="14" fill="#1a1a2e" stroke="#10b981" stroke-width="2"/><text x="80" y="160" font-size="26" fill="#10b981" font-weight="bold">SAVE</text><text x="80" y="195" font-size="18" fill="#888">5% undergrad / 10% grad of discretionary</text><text x="80" y="235" font-size="18" fill="#ffffff">Forgiveness: <tspan fill="#ffd700" font-weight="bold">20-25 yrs</tspan></text><text x="80" y="270" font-size="18" fill="#ffffff">Lowest payment available</text><text x="80" y="300" font-size="16" fill="#888">No interest capitalization</text><rect x="580" y="120" width="480" height="200" rx="14" fill="#1a1a2e" stroke="#6366f1" stroke-width="2"/><text x="600" y="160" font-size="26" fill="#6366f1" font-weight="bold">PAYE</text><text x="600" y="195" font-size="18" fill="#888">10% of discretionary income</text><text x="600" y="235" font-size="18" fill="#ffffff">Forgiveness: <tspan fill="#ffd700" font-weight="bold">20 yrs</tspan></text><text x="600" y="270" font-size="18" fill="#ffffff">Capped at 10-yr standard amount</text><text x="600" y="300" font-size="16" fill="#888">For newer borrowers</text><rect x="60" y="340" width="500" height="200" rx="14" fill="#1a1a2e" stroke="#0ea5e9" stroke-width="2"/><text x="80" y="380" font-size="26" fill="#0ea5e9" font-weight="bold">IBR</text><text x="80" y="415" font-size="18" fill="#888">10-15% of discretionary income</text><text x="80" y="455" font-size="18" fill="#ffffff">Forgiveness: <tspan fill="#ffd700" font-weight="bold">20-25 yrs</tspan></text><text x="80" y="490" font-size="18" fill="#ffffff">Capped at standard payment</text><text x="80" y="520" font-size="16" fill="#888">Open to all federal borrowers</text><rect x="580" y="340" width="480" height="200" rx="14" fill="#1a1a2e" stroke="#8b5cf6" stroke-width="2"/><text x="600" y="380" font-size="26" fill="#8b5cf6" font-weight="bold">ICR</text><text x="600" y="415" font-size="18" fill="#888">20% of discretionary or 12-yr fixed</text><text x="600" y="455" font-size="18" fill="#ffffff">Forgiveness: <tspan fill="#ffd700" font-weight="bold">25 yrs</tspan></text><text x="600" y="490" font-size="18" fill="#ffffff">Only IDR for Parent PLUS</text><text x="600" y="520" font-size="16" fill="#888">(via consolidation)</text><rect x="60" y="580" width="1000" height="460" rx="14" fill="#1a1a2e" stroke="#ffd700" stroke-width="3"/><text x="560" y="625" text-anchor="middle" font-size="28" fill="#ffd700" font-weight="bold">PSLF — The Big One</text><text x="80" y="675" font-size="22" fill="#ffffff" font-weight="bold">Requirement 1: 120 qualifying payments</text><text x="100" y="710" font-size="18" fill="#888">= 10 years on an IDR plan (need not be consecutive)</text><text x="80" y="755" font-size="22" fill="#ffffff" font-weight="bold">Requirement 2: Qualifying employer</text><text x="100" y="790" font-size="18" fill="#888">501(c)(3) nonprofit OR federal/state/local/tribal gov</text><text x="100" y="820" font-size="18" fill="#888">Full-time (≥30 hr/week or employer-defined)</text><text x="80" y="865" font-size="22" fill="#ffffff" font-weight="bold">Requirement 3: Direct Loans</text><text x="100" y="900" font-size="18" fill="#888">FFEL/Perkins must be consolidated to Direct first</text><text x="80" y="950" font-size="22" fill="#10b981" font-weight="bold">Result: Remaining balance forgiven, tax-free</text><text x="100" y="985" font-size="20" fill="#ffd700">A doctor with $200K → $80K forgiven after 10 yrs</text><text x="100" y="1015" font-size="20" fill="#ffd700">at a county hospital is a real outcome.</text></svg>`,
          caption: "IDR plan comparison and the PSLF requirements stack."
        }
      },
      {
        type: "example",
        title: "Aisha's $180K Decision: Refinance or Hold?",
        content: `**Aisha** is a 28-year-old social worker at a 501(c)(3) earning **$58,000**. She has **$180,000 federal Direct Loans** at **6.8%**. A private lender, **EarnestSoFi**, offers refinance at **5.1%** — saving ~1.7%.

**Path A — Refinance to Private:** New 10-year private loan at 5.1%. Monthly: **~$1,920**. Total interest: **~$50,400**. Sounds great — until you notice she **just gave up PSLF eligibility forever**. Private loans can never qualify.

**Path B — Stay Federal, Enroll in SAVE, Pursue PSLF:** SAVE monthly payment on $58K AGI: **~$210** (10% of discretionary). After **120 qualifying payments** (10 years), remaining balance — projected **~$200,000 including capitalized interest** — is **forgiven tax-free**.

Total paid Path A: **$230K**. Total paid Path B: **~$25K**. By refinancing for a "better rate," Aisha would have spent **$205,000 more** on the same debt. PSLF math beats refinance math when you qualify.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" font-size="36" font-weight="bold" fill="#ffd700">Aisha's $180K Decision</text><text x="550" y="115" text-anchor="middle" font-size="20" fill="#888">Social worker · 501(c)(3) · $58K salary</text><rect x="60" y="160" width="490" height="540" rx="14" fill="#1a1a2e" stroke="#ef4444" stroke-width="3"/><text x="305" y="205" text-anchor="middle" font-size="24" fill="#ef4444" font-weight="bold">Path A: Refinance Private</text><text x="305" y="240" text-anchor="middle" font-size="20" fill="#ffffff">5.1% · 10-year private loan</text><line x1="90" y1="270" x2="520" y2="270" stroke="#888" stroke-width="1"/><text x="90" y="310" font-size="18" fill="#ffffff">Monthly payment</text><text x="520" y="310" text-anchor="end" font-size="20" fill="#ef4444" font-weight="bold">$1,920</text><text x="90" y="355" font-size="18" fill="#ffffff">Total interest</text><text x="520" y="355" text-anchor="end" font-size="20" fill="#ef4444" font-weight="bold">$50,400</text><text x="90" y="400" font-size="18" fill="#ffffff">PSLF eligible?</text><text x="520" y="400" text-anchor="end" font-size="20" fill="#ef4444" font-weight="bold">NEVER</text><text x="90" y="445" font-size="18" fill="#ffffff">IDR available?</text><text x="520" y="445" text-anchor="end" font-size="20" fill="#ef4444" font-weight="bold">NO</text><text x="90" y="490" font-size="18" fill="#ffffff">Hardship options?</text><text x="520" y="490" text-anchor="end" font-size="20" fill="#f59e0b" font-weight="bold">Limited</text><line x1="90" y1="520" x2="520" y2="520" stroke="#888" stroke-width="1"/><text x="305" y="565" text-anchor="middle" font-size="22" fill="#ffd700" font-weight="bold">Total paid:</text><text x="305" y="615" text-anchor="middle" font-size="44" fill="#ef4444" font-weight="bold">$230,400</text><text x="305" y="665" text-anchor="middle" font-size="18" fill="#888">Lower rate, but no safety net.</text><rect x="570" y="160" width="490" height="540" rx="14" fill="#1a1a2e" stroke="#10b981" stroke-width="3"/><text x="815" y="205" text-anchor="middle" font-size="24" fill="#10b981" font-weight="bold">Path B: SAVE + PSLF</text><text x="815" y="240" text-anchor="middle" font-size="20" fill="#ffffff">Stay federal · 10 yrs nonprofit</text><line x1="600" y1="270" x2="1030" y2="270" stroke="#888" stroke-width="1"/><text x="600" y="310" font-size="18" fill="#ffffff">Monthly payment</text><text x="1030" y="310" text-anchor="end" font-size="20" fill="#10b981" font-weight="bold">$210</text><text x="600" y="355" font-size="18" fill="#ffffff">Payments needed</text><text x="1030" y="355" text-anchor="end" font-size="20" fill="#10b981" font-weight="bold">120</text><text x="600" y="400" font-size="18" fill="#ffffff">Balance forgiven</text><text x="1030" y="400" text-anchor="end" font-size="20" fill="#10b981" font-weight="bold">~$200K</text><text x="600" y="445" font-size="18" fill="#ffffff">Tax on forgiveness</text><text x="1030" y="445" text-anchor="end" font-size="20" fill="#10b981" font-weight="bold">$0</text><text x="600" y="490" font-size="18" fill="#ffffff">Hardship options?</text><text x="1030" y="490" text-anchor="end" font-size="20" fill="#10b981" font-weight="bold">Full IDR</text><line x1="600" y1="520" x2="1030" y2="520" stroke="#888" stroke-width="1"/><text x="815" y="565" text-anchor="middle" font-size="22" fill="#ffd700" font-weight="bold">Total paid:</text><text x="815" y="615" text-anchor="middle" font-size="44" fill="#10b981" font-weight="bold">$25,200</text><text x="815" y="665" text-anchor="middle" font-size="18" fill="#888">$200K forgiven, tax-free.</text><rect x="60" y="730" width="1000" height="330" rx="14" fill="#1a1a2e" stroke="#ffd700" stroke-width="2"/><text x="560" y="775" text-anchor="middle" font-size="26" fill="#ffd700" font-weight="bold">Savings by NOT refinancing:</text><text x="560" y="855" text-anchor="middle" font-size="68" fill="#10b981" font-weight="bold">$205,200</text><text x="560" y="920" text-anchor="middle" font-size="22" fill="#ffffff">If you qualify for PSLF, refinancing is</text><text x="560" y="955" text-anchor="middle" font-size="22" fill="#ffffff">a <tspan fill="#ef4444" font-weight="bold">six-figure mistake</tspan>.</text><text x="560" y="1015" text-anchor="middle" font-size="20" fill="#ffd700">Always model both paths before refinancing federal loans.</text></svg>`,
          caption: "PSLF turns a 'lower rate' into a $200K trap."
        }
      },
      {
        type: "quiz",
        title: "Check Your Understanding",
        question: `**Marcus** has **$95,000 in federal Direct Loans** at 6.5%. He's a high school teacher (state government employee) earning $52,000. His private lender pitches refinancing to a **4.9% rate**, saving "tens of thousands in interest." What should he do?`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="80" text-anchor="middle" font-size="36" font-weight="bold" fill="#ffd700">PSLF Decision Quiz</text><rect x="100" y="140" width="900" height="240" rx="14" fill="#1a1a2e" stroke="#6366f1" stroke-width="2"/><text x="550" y="185" text-anchor="middle" font-size="22" fill="#ffffff">Marcus, 26 · high school teacher</text><text x="550" y="225" text-anchor="middle" font-size="20" fill="#ffffff">Salary: <tspan fill="#ffd700" font-weight="bold">$52,000</tspan> · Employer: <tspan fill="#10b981" font-weight="bold">state gov</tspan></text><text x="550" y="265" text-anchor="middle" font-size="20" fill="#ffffff">Federal loans: <tspan fill="#ffd700" font-weight="bold">$95,000 @ 6.5%</tspan></text><text x="550" y="305" text-anchor="middle" font-size="20" fill="#ffffff">Refinance offer: <tspan fill="#6366f1" font-weight="bold">4.9%</tspan></text><text x="550" y="350" text-anchor="middle" font-size="22" fill="#ffd700" font-weight="bold">Best move?</text><circle cx="200" cy="450" r="30" fill="#ef4444" opacity="0.3"/><text x="200" y="460" text-anchor="middle" font-size="28" fill="#ffffff" font-weight="bold">A</text><text x="260" y="445" font-size="20" fill="#ffffff">Refinance to private — save</text><text x="260" y="470" font-size="20" fill="#ffffff">tens of thousands in interest</text><circle cx="200" cy="560" r="30" fill="#10b981" opacity="0.3"/><text x="200" y="570" text-anchor="middle" font-size="28" fill="#ffffff" font-weight="bold">B</text><text x="260" y="555" font-size="20" fill="#ffffff">Stay federal, enroll in SAVE,</text><text x="260" y="580" font-size="20" fill="#ffffff">pursue PSLF after 120 payments</text><circle cx="200" cy="670" r="30" fill="#ef4444" opacity="0.3"/><text x="200" y="680" text-anchor="middle" font-size="28" fill="#ffffff" font-weight="bold">C</text><text x="260" y="665" font-size="20" fill="#ffffff">Refinance half to private,</text><text x="260" y="690" font-size="20" fill="#ffffff">keep half federal</text><circle cx="200" cy="780" r="30" fill="#ef4444" opacity="0.3"/><text x="200" y="790" text-anchor="middle" font-size="28" fill="#ffffff" font-weight="bold">D</text><text x="260" y="775" font-size="20" fill="#ffffff">Pay extra each month at the</text><text x="260" y="800" font-size="20" fill="#ffffff">standard 10-year rate</text><rect x="100" y="850" width="900" height="200" rx="14" fill="#1a1a2e" stroke="#10b981" stroke-width="2"/><text x="550" y="895" text-anchor="middle" font-size="22" fill="#10b981" font-weight="bold">The PSLF rule</text><text x="550" y="935" text-anchor="middle" font-size="20" fill="#ffffff">State employee + federal loans =</text><text x="550" y="965" text-anchor="middle" font-size="20" fill="#ffffff">qualifying combo. After 120 payments,</text><text x="550" y="995" text-anchor="middle" font-size="20" fill="#ffffff">remaining balance forgiven, tax-free.</text><text x="550" y="1035" text-anchor="middle" font-size="18" fill="#888">Refinancing voids eligibility forever.</text></svg>`,
          caption: "PSLF eligibility is irrevocably lost on refinance."
        },
        options: [
          { text: "Refinance — save thousands in interest", correct: false },
          { text: "Stay federal, enroll in SAVE, pursue PSLF", correct: true },
          { text: "Refinance half, keep half federal", correct: false },
          { text: "Pay extra at standard 10-year rate", correct: false }
        ],
        explanation: `**Correct answer: B.** As a teacher at a public school, Marcus works for a **qualifying PSLF employer** (state government). His federal Direct Loans are already PSLF-eligible. On SAVE, his payment will be ~$190/month — and after **120 qualifying payments** (10 years), the balance is **forgiven tax-free**. **Refinancing to private (even at 4.9%) permanently destroys PSLF eligibility**. The "savings" disappear when you realize he'd pay $120K+ on private but only ~$22K on PSLF. Option C is also wrong — once you refinance the federal portion, those loans are lost to PSLF.`
      },
      {
        type: "application",
        title: "Your Student Loan Action Sequence",
        content: `Follow this sequence to manage federal student loans:

**Step 1 — Inventory:** Log in to **studentaid.gov** and pull your **NSLDS** record. Confirm every loan is **Direct Loan** type (not FFEL or Perkins). If older loans show up, **consolidate to Direct** to unlock PSLF.

**Step 2 — Test PSLF eligibility:** Are you employed full-time by a **501(c)(3) nonprofit** or any **federal/state/local/tribal government**? Use the **PSLF Employer Search Tool** on studentaid.gov. If yes, submit a **PSLF Employment Certification Form (PSLF ECF)** annually to lock in qualifying payments.

**Step 3 — Pick an IDR plan:** If pursuing PSLF, **SAVE** typically minimizes monthly payment and maximizes forgiveness. Recertify your income **every 12 months** or your payment jumps to the standard 10-year amount.

**Step 4 — NEVER refinance federal to private** unless you've ruled out PSLF, IDR, and any future career change into qualifying work. The decision is permanent.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" font-size="38" font-weight="bold" fill="#ffd700">Your Action Sequence</text><rect x="80" y="120" width="940" height="210" rx="14" fill="#1a1a2e" stroke="#10b981" stroke-width="2"/><circle cx="140" cy="175" r="35" fill="#10b981"/><text x="140" y="190" text-anchor="middle" font-size="32" fill="#1a1a2e" font-weight="bold">1</text><text x="200" y="170" font-size="24" fill="#10b981" font-weight="bold">Inventory at studentaid.gov</text><text x="200" y="210" font-size="18" fill="#ffffff">Pull NSLDS record · confirm Direct type</text><text x="200" y="245" font-size="18" fill="#ffffff">Consolidate FFEL/Perkins to Direct</text><text x="200" y="285" font-size="16" fill="#888">Without this, PSLF clock doesn't start.</text><rect x="80" y="350" width="940" height="210" rx="14" fill="#1a1a2e" stroke="#0ea5e9" stroke-width="2"/><circle cx="140" cy="405" r="35" fill="#0ea5e9"/><text x="140" y="420" text-anchor="middle" font-size="32" fill="#1a1a2e" font-weight="bold">2</text><text x="200" y="400" font-size="24" fill="#0ea5e9" font-weight="bold">Test PSLF eligibility</text><text x="200" y="440" font-size="18" fill="#ffffff">Use PSLF Employer Search Tool</text><text x="200" y="475" font-size="18" fill="#ffffff">501(c)(3) or fed/state/local/tribal gov?</text><text x="200" y="515" font-size="16" fill="#888">Submit PSLF ECF every year.</text><rect x="80" y="580" width="940" height="210" rx="14" fill="#1a1a2e" stroke="#8b5cf6" stroke-width="2"/><circle cx="140" cy="635" r="35" fill="#8b5cf6"/><text x="140" y="650" text-anchor="middle" font-size="32" fill="#1a1a2e" font-weight="bold">3</text><text x="200" y="630" font-size="24" fill="#8b5cf6" font-weight="bold">Pick the right IDR plan</text><text x="200" y="670" font-size="18" fill="#ffffff">SAVE: lowest payment, max forgiveness</text><text x="200" y="705" font-size="18" fill="#ffffff">Recertify income every 12 months</text><text x="200" y="745" font-size="16" fill="#888">Miss recert → payment jumps to standard.</text><rect x="80" y="810" width="940" height="270" rx="14" fill="#1a1a2e" stroke="#ef4444" stroke-width="3"/><circle cx="140" cy="870" r="35" fill="#ef4444"/><text x="140" y="885" text-anchor="middle" font-size="32" fill="#1a1a2e" font-weight="bold">4</text><text x="200" y="865" font-size="24" fill="#ef4444" font-weight="bold">DO NOT refinance federal → private</text><text x="200" y="905" font-size="18" fill="#ffffff">Unless you've ruled out:</text><text x="220" y="940" font-size="18" fill="#ffffff">• PSLF forever</text><text x="220" y="970" font-size="18" fill="#ffffff">• IDR safety net</text><text x="220" y="1000" font-size="18" fill="#ffffff">• Any future qualifying career</text><text x="200" y="1045" font-size="20" fill="#ef4444" font-weight="bold">This decision is permanent.</text></svg>`,
          caption: "Four steps to manage federal student loans well."
        }
      }
    ]
  },
  {
    id: "pf-debt-lesson-6",
    title: "Medical Debt: Negotiation, Charity Care, and the Credit Report Rule",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "The Most Negotiable Debt in America",
        content: `Medical debt is the **#1 cause of personal bankruptcy** in the United States — but it's also the **most negotiable debt** you'll ever face. **41% of US adults** carry some medical debt, and the average ER visit billed at **$2,700+** is often settled for **$700-$1,300** when you simply ask.

Hospitals operate on **chargemaster** prices — inflated list prices designed for insurance negotiation, not patient payment. Cash-pay patients are routinely overcharged **2-5x** what insurers pay. The 3-step de-escalation playbook (itemized → charity care → settle) regularly cuts bills by **50-75%**.

A **2023 CFPB rule** made it official: medical debt **under $500** can no longer appear on credit reports, and **all medical debt** gets a **1-year grace period** before it can appear at all. This lesson teaches you how to fight, when to settle, and when bankruptcy makes mathematical sense.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="80" text-anchor="middle" font-size="38" font-weight="bold" fill="#ffd700">Medical Debt by the Numbers</text><rect x="100" y="140" width="900" height="180" rx="14" fill="#1a1a2e" stroke="#ef4444" stroke-width="3"/><text x="550" y="190" text-anchor="middle" font-size="22" fill="#ffffff" font-weight="bold">% of US adults with medical debt</text><text x="550" y="265" text-anchor="middle" font-size="80" fill="#ef4444" font-weight="bold">41%</text><rect x="100" y="350" width="900" height="180" rx="14" fill="#1a1a2e" stroke="#f59e0b" stroke-width="3"/><text x="550" y="400" text-anchor="middle" font-size="22" fill="#ffffff" font-weight="bold">Top cause of US personal bankruptcy</text><text x="550" y="475" text-anchor="middle" font-size="56" fill="#f59e0b" font-weight="bold">#1 reason</text><rect x="100" y="560" width="900" height="180" rx="14" fill="#1a1a2e" stroke="#10b981" stroke-width="3"/><text x="550" y="610" text-anchor="middle" font-size="22" fill="#ffffff" font-weight="bold">Typical reduction via negotiation</text><text x="550" y="685" text-anchor="middle" font-size="64" fill="#10b981" font-weight="bold">50-75% off</text><rect x="100" y="770" width="900" height="280" rx="14" fill="#1a1a2e" stroke="#ffd700" stroke-width="3"/><text x="550" y="815" text-anchor="middle" font-size="24" fill="#ffd700" font-weight="bold">2023 CFPB rule</text><text x="550" y="865" text-anchor="middle" font-size="22" fill="#ffffff">Medical debt under <tspan fill="#10b981" font-weight="bold">$500</tspan></text><text x="550" y="900" text-anchor="middle" font-size="22" fill="#ffffff">no longer appears on credit reports.</text><text x="550" y="960" text-anchor="middle" font-size="22" fill="#ffffff">All medical debt gets a <tspan fill="#10b981" font-weight="bold">1-year grace</tspan></text><text x="550" y="995" text-anchor="middle" font-size="22" fill="#ffffff">before it can be reported at all.</text><text x="550" y="1035" text-anchor="middle" font-size="20" fill="#ffd700">Use that year to fight.</text></svg>`,
          caption: "Medical debt is huge, negotiable, and protected by new rules."
        }
      },
      {
        type: "concept",
        title: "The 3-Step De-Escalation Playbook",
        content: `Every medical bill follows the same playbook. Run these steps **in order** before paying a dime above the minimum.

**Step 1 — Request an itemized statement.** The summary bill is useless. Demand an **itemized statement** with **CPT codes** for every charge. Federal law (No Surprises Act, ACA Section 9007) gives you this right. You'll routinely find: duplicate charges, services never rendered, **wrong CPT codes**, charges already paid by insurance. Industry studies estimate **80%+ of hospital bills contain errors**. Disputing errors alone often reduces the bill **20-40%**.

**Step 2 — Apply for charity care.** Every nonprofit hospital is legally required (IRS §501(r)) to maintain a **Financial Assistance Policy (FAP)**. Households under **200-400% of the federal poverty line** typically qualify for **partial-to-full forgiveness**. Apply even if you think you earn too much — thresholds are higher than people expect.

**Step 3 — Settle for cash, lump sum.** Offer **25-50%** of the (corrected) balance as a **single lump-sum payment** in exchange for a **"paid in full"** notation. Get the agreement in writing **before** you pay.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" font-size="38" font-weight="bold" fill="#ffd700">The 3-Step Playbook</text><rect x="80" y="120" width="940" height="280" rx="14" fill="#1a1a2e" stroke="#0ea5e9" stroke-width="3"/><circle cx="150" cy="180" r="38" fill="#0ea5e9"/><text x="150" y="195" text-anchor="middle" font-size="34" fill="#1a1a2e" font-weight="bold">1</text><text x="210" y="175" font-size="26" fill="#0ea5e9" font-weight="bold">Itemized statement</text><text x="210" y="215" font-size="20" fill="#ffffff">Demand CPT codes for every charge</text><text x="210" y="255" font-size="18" fill="#888">Your right under No Surprises Act</text><text x="210" y="305" font-size="18" fill="#ffffff">Find: duplicates · wrong codes ·</text><text x="210" y="335" font-size="18" fill="#ffffff">phantom services · already-paid items</text><text x="210" y="375" font-size="22" fill="#10b981" font-weight="bold">Typical reduction: 20-40%</text><rect x="80" y="420" width="940" height="280" rx="14" fill="#1a1a2e" stroke="#8b5cf6" stroke-width="3"/><circle cx="150" cy="480" r="38" fill="#8b5cf6"/><text x="150" y="495" text-anchor="middle" font-size="34" fill="#1a1a2e" font-weight="bold">2</text><text x="210" y="475" font-size="26" fill="#8b5cf6" font-weight="bold">Apply for charity care</text><text x="210" y="515" font-size="20" fill="#ffffff">Nonprofits MUST offer this (IRS §501(r))</text><text x="210" y="555" font-size="18" fill="#888">Ask for the Financial Assistance Policy (FAP)</text><text x="210" y="605" font-size="18" fill="#ffffff">Qualifying: 200-400% of federal poverty</text><text x="210" y="635" font-size="18" fill="#ffffff">Outcomes: partial → full forgiveness</text><text x="210" y="675" font-size="22" fill="#10b981" font-weight="bold">Apply even if you doubt you'll qualify</text><rect x="80" y="720" width="940" height="320" rx="14" fill="#1a1a2e" stroke="#ec4899" stroke-width="3"/><circle cx="150" cy="780" r="38" fill="#ec4899"/><text x="150" y="795" text-anchor="middle" font-size="34" fill="#1a1a2e" font-weight="bold">3</text><text x="210" y="775" font-size="26" fill="#ec4899" font-weight="bold">Settle lump-sum cash</text><text x="210" y="815" font-size="20" fill="#ffffff">Offer 25-50% of corrected balance</text><text x="210" y="855" font-size="18" fill="#888">Hospitals would rather get something now</text><text x="210" y="885" font-size="18" fill="#888">than chase collections for years</text><text x="210" y="935" font-size="20" fill="#ffd700" font-weight="bold">GET IT IN WRITING:</text><text x="210" y="965" font-size="18" fill="#ffffff">"Paid in full" notation before any payment</text><text x="210" y="1005" font-size="22" fill="#10b981" font-weight="bold">Typical final: 25-50% of original</text></svg>`,
          caption: "Itemize, charity care, then lump-sum settle — in that order."
        }
      },
      {
        type: "example",
        title: "Jordan's $14,200 ER Bill Becomes $2,100",
        content: `**Jordan** has an appendix removal: hospital bills **$14,200** after insurance. Income: $42,000 (single).

**Step 1 — Itemized:** He requests the itemized statement. Findings: a **duplicate $1,800 anesthesia charge**, a **$640 saline bag** billed twice, a $400 "consult" with a doctor he never met. He disputes. Hospital corrects bill: **$11,100**.

**Step 2 — Charity care:** Jordan's income is **270% of the federal poverty line**. Hospital FAP grants **70% forgiveness** for incomes between 200-300% FPL. New balance: **$3,330**.

**Step 3 — Settle:** Jordan calls billing: "I can pay **$2,100 today, lump sum, to close this account paid-in-full**." After 10 minutes on hold, the billing rep agrees. He gets it **in writing**, then pays.

**Total paid: $2,100** on a $14,200 bill — **85% reduction**. The credit report rule means even if he'd delayed 12 months, the debt couldn't have damaged his FICO during that window.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" font-size="36" font-weight="bold" fill="#ffd700">Jordan's $14,200 → $2,100</text><text x="550" y="115" text-anchor="middle" font-size="20" fill="#888">Appendectomy · 85% reduction</text><rect x="80" y="160" width="940" height="180" rx="14" fill="#1a1a2e" stroke="#ef4444" stroke-width="3"/><text x="550" y="205" text-anchor="middle" font-size="24" fill="#ef4444" font-weight="bold">Starting bill</text><text x="550" y="275" text-anchor="middle" font-size="58" fill="#ef4444" font-weight="bold">$14,200</text><text x="550" y="315" text-anchor="middle" font-size="18" fill="#888">Post-insurance "patient responsibility"</text><text x="550" y="365" text-anchor="middle" font-size="28" fill="#ffd700">↓</text><rect x="80" y="385" width="940" height="170" rx="14" fill="#1a1a2e" stroke="#0ea5e9" stroke-width="2"/><text x="550" y="425" text-anchor="middle" font-size="22" fill="#0ea5e9" font-weight="bold">Step 1: Itemized · errors disputed</text><text x="100" y="465" font-size="18" fill="#ffffff">• Duplicate anesthesia</text><text x="980" y="465" text-anchor="end" font-size="18" fill="#10b981" font-weight="bold">-$1,800</text><text x="100" y="495" font-size="18" fill="#ffffff">• Double-billed saline</text><text x="980" y="495" text-anchor="end" font-size="18" fill="#10b981" font-weight="bold">-$640</text><text x="100" y="525" font-size="18" fill="#ffffff">• Phantom consult</text><text x="980" y="525" text-anchor="end" font-size="18" fill="#10b981" font-weight="bold">-$660</text><text x="550" y="580" text-anchor="middle" font-size="28" fill="#10b981" font-weight="bold">→ $11,100</text><rect x="80" y="610" width="940" height="170" rx="14" fill="#1a1a2e" stroke="#8b5cf6" stroke-width="2"/><text x="550" y="650" text-anchor="middle" font-size="22" fill="#8b5cf6" font-weight="bold">Step 2: Charity care</text><text x="550" y="685" text-anchor="middle" font-size="20" fill="#ffffff">Jordan @ 270% FPL → FAP grants 70% off</text><text x="550" y="725" text-anchor="middle" font-size="28" fill="#10b981" font-weight="bold">→ $3,330</text><rect x="80" y="800" width="940" height="170" rx="14" fill="#1a1a2e" stroke="#ec4899" stroke-width="2"/><text x="550" y="840" text-anchor="middle" font-size="22" fill="#ec4899" font-weight="bold">Step 3: Lump-sum settle</text><text x="550" y="875" text-anchor="middle" font-size="20" fill="#ffffff">"$2,100 cash today, paid-in-full" — accepted</text><text x="550" y="915" text-anchor="middle" font-size="28" fill="#10b981" font-weight="bold">→ $2,100</text><rect x="80" y="990" width="940" height="80" rx="14" fill="#1a1a2e" stroke="#ffd700" stroke-width="3"/><text x="550" y="1035" text-anchor="middle" font-size="26" fill="#ffd700" font-weight="bold">$12,100 saved · 85% off · all legal</text></svg>`,
          caption: "Three steps shrink a $14,200 bill to $2,100."
        }
      },
      {
        type: "quiz",
        title: "Check Your Understanding",
        question: `You just received a **$420 medical bill** from a hospital lab. The bill is 6 months old and has gone to collections. The collector calls and threatens to **report it to the credit bureaus tomorrow** unless you pay in full today. Under the 2023 CFPB rule, what's true?`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="80" text-anchor="middle" font-size="36" font-weight="bold" fill="#ffd700">CFPB Rule Quiz</text><rect x="100" y="140" width="900" height="240" rx="14" fill="#1a1a2e" stroke="#6366f1" stroke-width="2"/><text x="550" y="190" text-anchor="middle" font-size="22" fill="#ffffff">Medical lab bill</text><text x="550" y="240" text-anchor="middle" font-size="44" fill="#ffd700" font-weight="bold">$420</text><text x="550" y="285" text-anchor="middle" font-size="20" fill="#ffffff">6 months old · in collections</text><text x="550" y="325" text-anchor="middle" font-size="20" fill="#ef4444" font-weight="bold">Collector threatens credit report TOMORROW</text><text x="550" y="365" text-anchor="middle" font-size="22" fill="#ffd700" font-weight="bold">What's true?</text><circle cx="200" cy="450" r="30" fill="#ef4444" opacity="0.3"/><text x="200" y="460" text-anchor="middle" font-size="28" fill="#ffffff" font-weight="bold">A</text><text x="260" y="445" font-size="20" fill="#ffffff">Pay today — they can damage</text><text x="260" y="470" font-size="20" fill="#ffffff">your credit immediately</text><circle cx="200" cy="560" r="30" fill="#10b981" opacity="0.3"/><text x="200" y="570" text-anchor="middle" font-size="28" fill="#ffffff" font-weight="bold">B</text><text x="260" y="555" font-size="20" fill="#ffffff">Under $500 — can't appear on</text><text x="260" y="580" font-size="20" fill="#ffffff">credit report at all. Negotiate freely.</text><circle cx="200" cy="670" r="30" fill="#ef4444" opacity="0.3"/><text x="200" y="680" text-anchor="middle" font-size="28" fill="#ffffff" font-weight="bold">C</text><text x="260" y="665" font-size="20" fill="#ffffff">Only debts under $100 are</text><text x="260" y="690" font-size="20" fill="#ffffff">protected from credit reporting</text><circle cx="200" cy="780" r="30" fill="#ef4444" opacity="0.3"/><text x="200" y="790" text-anchor="middle" font-size="28" fill="#ffffff" font-weight="bold">D</text><text x="260" y="775" font-size="20" fill="#ffffff">Bankruptcy is your only option</text><text x="260" y="800" font-size="20" fill="#ffffff">to avoid credit damage</text><rect x="100" y="850" width="900" height="200" rx="14" fill="#1a1a2e" stroke="#10b981" stroke-width="2"/><text x="550" y="895" text-anchor="middle" font-size="22" fill="#10b981" font-weight="bold">The CFPB 2023 rule</text><text x="550" y="935" text-anchor="middle" font-size="20" fill="#ffffff">Medical debt &lt;$500: cannot appear on</text><text x="550" y="965" text-anchor="middle" font-size="20" fill="#ffffff">credit reports — ever.</text><text x="550" y="1005" text-anchor="middle" font-size="20" fill="#ffffff">All medical debt: 1-year grace before</text><text x="550" y="1035" text-anchor="middle" font-size="20" fill="#ffffff">any reporting allowed.</text></svg>`,
          caption: "Under $500 medical debt has zero credit-report leverage."
        },
        options: [
          { text: "Pay today — they can damage your credit immediately", correct: false },
          { text: "Under $500 — it can't appear on credit reports at all", correct: true },
          { text: "Only debts under $100 are protected", correct: false },
          { text: "Bankruptcy is your only option to avoid damage", correct: false }
        ],
        explanation: `**Correct answer: B.** Under the **CFPB's 2023 rule**, **medical debt under $500 cannot appear on credit reports** — period. The collector's threat is **legally impossible**. Even if your debt were over $500, **all medical debt has a 1-year grace period** before it can be reported at all, giving you 12 months to dispute, negotiate, apply for charity care, and settle. Knowing this rule removes the collector's primary intimidation tool: fear of credit damage. Use that leverage to negotiate calmly.`
      },
      {
        type: "application",
        title: "When Bankruptcy Makes Mathematical Sense",
        content: `Sometimes the math says **bankruptcy** is the right move. It's not a moral failing — it's a legal financial reset built into US law.

**Chapter 7 ("liquidation"):** A **means test** (income below the state median) determines eligibility. Most unsecured debt — **medical, credit cards, personal loans** — is **discharged** (wiped) in **3-6 months**. You keep exempt assets (retirement accounts, some home equity, basic vehicle). Stays on credit report **10 years** but credit can begin rebuilding immediately after discharge.

**Chapter 13 ("reorganization"):** For people whose income is **too high for Ch 7** or who want to **keep non-exempt assets** (a home with significant equity). A **3-5 year repayment plan** consolidates debts; remaining balance discharged at plan end. Stays on credit report **7 years**.

**When it's right:** If your total unsecured debt exceeds **40% of annual income** and you can't realistically pay it off within **5 years**, bankruptcy often costs less — in dollars and in years of life lost to debt anxiety — than dragging it out.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" font-size="38" font-weight="bold" fill="#ffd700">When Bankruptcy Is Right</text><rect x="60" y="120" width="490" height="540" rx="14" fill="#1a1a2e" stroke="#10b981" stroke-width="3"/><text x="305" y="170" text-anchor="middle" font-size="28" fill="#10b981" font-weight="bold">Chapter 7</text><text x="305" y="205" text-anchor="middle" font-size="20" fill="#888">Liquidation · "fresh start"</text><line x1="90" y1="230" x2="520" y2="230" stroke="#888" stroke-width="1"/><text x="90" y="270" font-size="20" fill="#ffffff" font-weight="bold">Eligibility:</text><text x="90" y="300" font-size="18" fill="#888">Means test (under state median income)</text><text x="90" y="345" font-size="20" fill="#ffffff" font-weight="bold">Timeline:</text><text x="90" y="375" font-size="18" fill="#10b981">3-6 months to discharge</text><text x="90" y="420" font-size="20" fill="#ffffff" font-weight="bold">What's wiped:</text><text x="90" y="450" font-size="18" fill="#888">Medical · credit cards · personal loans</text><text x="90" y="495" font-size="20" fill="#ffffff" font-weight="bold">What you keep:</text><text x="90" y="525" font-size="18" fill="#888">Retirement · basic car · some equity</text><text x="90" y="570" font-size="20" fill="#ffffff" font-weight="bold">Credit report:</text><text x="90" y="600" font-size="18" fill="#ef4444">10 years</text><text x="90" y="640" font-size="18" fill="#10b981">Credit can rebuild from discharge day</text><rect x="570" y="120" width="490" height="540" rx="14" fill="#1a1a2e" stroke="#0ea5e9" stroke-width="3"/><text x="815" y="170" text-anchor="middle" font-size="28" fill="#0ea5e9" font-weight="bold">Chapter 13</text><text x="815" y="205" text-anchor="middle" font-size="20" fill="#888">Reorganization · keep assets</text><line x1="600" y1="230" x2="1030" y2="230" stroke="#888" stroke-width="1"/><text x="600" y="270" font-size="20" fill="#ffffff" font-weight="bold">Eligibility:</text><text x="600" y="300" font-size="18" fill="#888">Income above Ch 7 means test</text><text x="600" y="345" font-size="20" fill="#ffffff" font-weight="bold">Timeline:</text><text x="600" y="375" font-size="18" fill="#0ea5e9">3-5 year repayment plan</text><text x="600" y="420" font-size="20" fill="#ffffff" font-weight="bold">Plan structure:</text><text x="600" y="450" font-size="18" fill="#888">Pay a court-set amount each month</text><text x="600" y="495" font-size="20" fill="#ffffff" font-weight="bold">What you keep:</text><text x="600" y="525" font-size="18" fill="#888">Home with significant equity · cars</text><text x="600" y="570" font-size="20" fill="#ffffff" font-weight="bold">Credit report:</text><text x="600" y="600" font-size="18" fill="#ef4444">7 years</text><text x="600" y="640" font-size="18" fill="#0ea5e9">Remaining balance discharged at end</text><rect x="60" y="680" width="1000" height="380" rx="14" fill="#1a1a2e" stroke="#ffd700" stroke-width="3"/><text x="560" y="725" text-anchor="middle" font-size="26" fill="#ffd700" font-weight="bold">The Trigger Rule</text><text x="560" y="785" text-anchor="middle" font-size="22" fill="#ffffff">Unsecured debt &gt; <tspan fill="#ffd700" font-weight="bold">40% of annual income</tspan></text><text x="560" y="825" text-anchor="middle" font-size="22" fill="#ffffff">AND no realistic 5-year payoff?</text><text x="560" y="890" text-anchor="middle" font-size="26" fill="#10b981" font-weight="bold">Bankruptcy likely costs less</text><text x="560" y="925" text-anchor="middle" font-size="20" fill="#ffffff">in dollars AND in years of debt anxiety.</text><text x="560" y="985" text-anchor="middle" font-size="20" fill="#888">Consult a bankruptcy attorney — most offer</text><text x="560" y="1015" text-anchor="middle" font-size="20" fill="#888">a free consult. It's not failure; it's a legal reset.</text></svg>`,
          caption: "Ch 7 vs Ch 13, and when the math says go."
        }
      }
    ]
  },
{
    id: "pf-debt-lesson-7",
    title: "Mortgage Debt — the 28/36 Rule, PMI, Refinancing Math",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "The Biggest Debt You'll Ever Take On",
        content: `A **mortgage** is usually the largest loan of your life — and the longest. On a **$300,000 home** at **7% over 30 years**, you'll pay roughly **$418,000 in interest** alone. That's more than the house itself.

But mortgages are also the **cheapest debt** most people will ever access. Interest is often **tax-deductible**, rates are far lower than credit cards, and the asset (usually) appreciates.

The danger isn't taking a mortgage — it's taking **too much** mortgage. Lenders will approve you for far more than you can comfortably afford. They profit on the interest; you bear the risk.

This lesson covers three core mortgage math concepts: the **28/36 affordability rule**, **PMI** (and how to kill it), and **refinancing** — when the math actually works in your favor.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="80" text-anchor="middle" fill="#ffd700" font-size="38" font-weight="bold">$300K Mortgage @ 7%, 30 Years</text><text x="550" y="130" text-anchor="middle" fill="#888" font-size="22">Where Your Money Actually Goes</text><rect x="200" y="200" width="700" height="120" fill="#10b981" rx="8"/><text x="550" y="245" text-anchor="middle" fill="#ffffff" font-size="26" font-weight="bold">PRINCIPAL: $300,000</text><text x="550" y="280" text-anchor="middle" fill="#ffffff" font-size="20">The actual house</text><text x="550" y="305" text-anchor="middle" fill="#ffffff" font-size="20">42% of total payments</text><rect x="200" y="360" width="700" height="280" fill="#ef4444" rx="8"/><text x="550" y="430" text-anchor="middle" fill="#ffffff" font-size="32" font-weight="bold">INTEREST: $418,527</text><text x="550" y="475" text-anchor="middle" fill="#ffffff" font-size="22">More than the house itself</text><text x="550" y="510" text-anchor="middle" fill="#ffffff" font-size="22">58% of total payments</text><text x="550" y="560" text-anchor="middle" fill="#ffd700" font-size="26" font-weight="bold">Monthly P&amp;I: $1,996</text><text x="550" y="600" text-anchor="middle" fill="#ffffff" font-size="20">Total paid: $718,527</text><rect x="150" y="700" width="800" height="320" fill="#16213e" rx="12" stroke="#ffd700" stroke-width="2"/><text x="550" y="750" text-anchor="middle" fill="#ffd700" font-size="26" font-weight="bold">3 KEY DECISIONS</text><circle cx="220" cy="820" r="30" fill="#6366f1"/><text x="220" y="830" text-anchor="middle" fill="#ffffff" font-size="28" font-weight="bold">1</text><text x="280" y="815" fill="#ffffff" font-size="22" font-weight="bold">28/36 Rule</text><text x="280" y="845" fill="#888" font-size="18">How much house can I afford?</text><circle cx="220" cy="900" r="30" fill="#10b981"/><text x="220" y="910" text-anchor="middle" fill="#ffffff" font-size="28" font-weight="bold">2</text><text x="280" y="895" fill="#ffffff" font-size="22" font-weight="bold">PMI</text><text x="280" y="925" fill="#888" font-size="18">Killing the insurance tax</text><circle cx="220" cy="980" r="30" fill="#f59e0b"/><text x="220" y="990" text-anchor="middle" fill="#ffffff" font-size="28" font-weight="bold">3</text><text x="280" y="975" fill="#ffffff" font-size="22" font-weight="bold">Refinancing</text><text x="280" y="1005" fill="#888" font-size="18">When the math actually works</text></svg>`,
          caption: "Over 30 years at 7%, interest exceeds principal — making this the most expensive purchase of your life."
        }
      },
      {
        type: "concept",
        title: "The 28/36 Rule — and Why PMI Exists",
        content: `The **28/36 rule** is the gold-standard affordability test:

**28%**: Monthly housing costs (P&I + taxes + insurance) ≤ **28% of gross monthly income**
**36%**: Total monthly debt payments (housing + car + student loans + credit cards) ≤ **36% of gross income**

If you earn **$8,000/month gross**, your housing max is **$2,240** and total debt max is **$2,880**. Lenders may approve you up to **43% DTI**, but that's the cliff — not a target.

**PMI (Private Mortgage Insurance)** is required when your down payment is **under 20%**. It protects the *lender* (not you) and costs **0.5%–1.5% of the loan annually** — about **$125–$375/month** on a $300K loan.

**How to kill PMI**: Request removal at **80% LTV** (loan-to-value), or it **auto-drops at 78% LTV**. Extra principal payments accelerate this. Don't let lenders "forget."`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="36" font-weight="bold">The 28/36 Rule</text><text x="550" y="115" text-anchor="middle" fill="#888" font-size="22">Example: $8,000/month gross income</text><rect x="80" y="160" width="450" height="320" fill="#10b981" rx="12"/><text x="305" y="215" text-anchor="middle" fill="#ffffff" font-size="32" font-weight="bold">28%</text><text x="305" y="250" text-anchor="middle" fill="#ffffff" font-size="22">HOUSING ONLY</text><text x="305" y="295" text-anchor="middle" fill="#ffd700" font-size="42" font-weight="bold">$2,240</text><text x="305" y="325" text-anchor="middle" fill="#ffffff" font-size="18">per month max</text><text x="305" y="370" text-anchor="middle" fill="#ffffff" font-size="18">Principal + Interest</text><text x="305" y="395" text-anchor="middle" fill="#ffffff" font-size="18">+ Property Tax</text><text x="305" y="420" text-anchor="middle" fill="#ffffff" font-size="18">+ Homeowner Insurance</text><text x="305" y="455" text-anchor="middle" fill="#ffffff" font-size="18">(+ PMI if applicable)</text><rect x="570" y="160" width="450" height="320" fill="#6366f1" rx="12"/><text x="795" y="215" text-anchor="middle" fill="#ffffff" font-size="32" font-weight="bold">36%</text><text x="795" y="250" text-anchor="middle" fill="#ffffff" font-size="22">TOTAL DEBT</text><text x="795" y="295" text-anchor="middle" fill="#ffd700" font-size="42" font-weight="bold">$2,880</text><text x="795" y="325" text-anchor="middle" fill="#ffffff" font-size="18">per month max</text><text x="795" y="370" text-anchor="middle" fill="#ffffff" font-size="18">Housing + Auto loan</text><text x="795" y="395" text-anchor="middle" fill="#ffffff" font-size="18">+ Student loans</text><text x="795" y="420" text-anchor="middle" fill="#ffffff" font-size="18">+ Credit card minimums</text><text x="795" y="455" text-anchor="middle" fill="#ffffff" font-size="18">+ Personal loans</text><rect x="80" y="520" width="940" height="220" fill="#16213e" rx="12" stroke="#f59e0b" stroke-width="2"/><text x="550" y="565" text-anchor="middle" fill="#f59e0b" font-size="28" font-weight="bold">PMI: Private Mortgage Insurance</text><text x="550" y="610" text-anchor="middle" fill="#ffffff" font-size="20">Required when down payment &lt; 20%</text><text x="550" y="645" text-anchor="middle" fill="#ffffff" font-size="20">Costs 0.5% – 1.5% of loan annually</text><text x="550" y="685" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">On $300K loan: $125 – $375 per month</text><text x="550" y="720" text-anchor="middle" fill="#ef4444" font-size="20">Protects the LENDER, not you</text><rect x="80" y="780" width="940" height="280" fill="#0ea5e9" rx="12"/><text x="550" y="825" text-anchor="middle" fill="#ffffff" font-size="28" font-weight="bold">Killing PMI</text><text x="550" y="875" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">REQUEST removal at 80% LTV</text><text x="550" y="905" text-anchor="middle" fill="#ffffff" font-size="18">(loan balance is 80% of original home value)</text><text x="550" y="950" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">AUTO-DROPS at 78% LTV</text><text x="550" y="980" text-anchor="middle" fill="#ffffff" font-size="18">(federal law — Homeowners Protection Act)</text><text x="550" y="1025" text-anchor="middle" fill="#ffffff" font-size="18">Extra principal payments accelerate this</text></svg>`,
          caption: "Apply 28% to housing and 36% to total debt. PMI auto-drops at 78% LTV — but request it sooner at 80%."
        }
      },
      {
        type: "example",
        title: "The Refinancing Decision",
        content: `**The 1.5% / 3-year / Breakeven Rule** for refinancing:

Rates must drop **1.5+ points** below your current rate
You must plan to stay **3+ more years**
**Closing costs** must be recoupable within that window

**Example**: Sarah has a **$280K balance at 7.5%**, payment $2,158/month. Rates drop to **5.75%** — a **1.75-point drop**. New payment: **$1,634**. **Savings: $524/month**.

Closing costs: **$6,500**. Breakeven: **$6,500 ÷ $524 = 12.4 months**. If Sarah stays 3+ years, she saves **$524 × 36 − $6,500 = $12,364**.

**Bonus strategy — one extra payment per year**: On a 30-year mortgage, one extra principal payment annually cuts roughly **5 years** off the loan. On Sarah's $280K loan, that saves **~$67,000 in interest**. Just split your extra payment into 12 chunks and add it monthly.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="34" font-weight="bold">Sarah's Refinance Math</text><text x="550" y="110" text-anchor="middle" fill="#888" font-size="20">$280K balance • Considering 5.75% refi from 7.5%</text><rect x="80" y="150" width="450" height="220" fill="#ef4444" rx="12"/><text x="305" y="195" text-anchor="middle" fill="#ffffff" font-size="24" font-weight="bold">CURRENT</text><text x="305" y="240" text-anchor="middle" fill="#ffd700" font-size="40" font-weight="bold">7.50%</text><text x="305" y="290" text-anchor="middle" fill="#ffffff" font-size="22">Payment: $2,158/mo</text><text x="305" y="330" text-anchor="middle" fill="#ffffff" font-size="18">Remaining: 26 years</text><rect x="570" y="150" width="450" height="220" fill="#10b981" rx="12"/><text x="795" y="195" text-anchor="middle" fill="#ffffff" font-size="24" font-weight="bold">REFINANCED</text><text x="795" y="240" text-anchor="middle" fill="#ffd700" font-size="40" font-weight="bold">5.75%</text><text x="795" y="290" text-anchor="middle" fill="#ffffff" font-size="22">Payment: $1,634/mo</text><text x="795" y="330" text-anchor="middle" fill="#ffffff" font-size="18">New 30-year term</text><rect x="80" y="410" width="940" height="160" fill="#6366f1" rx="12"/><text x="550" y="455" text-anchor="middle" fill="#ffffff" font-size="26" font-weight="bold">Monthly Savings: $524</text><text x="550" y="500" text-anchor="middle" fill="#ffffff" font-size="22">Closing costs: $6,500</text><text x="550" y="540" text-anchor="middle" fill="#ffd700" font-size="24" font-weight="bold">Breakeven: $6,500 ÷ $524 = 12.4 months</text><rect x="80" y="610" width="940" height="180" fill="#10b981" rx="12"/><text x="550" y="655" text-anchor="middle" fill="#ffffff" font-size="26" font-weight="bold">3-Year Net Savings</text><text x="550" y="710" text-anchor="middle" fill="#ffd700" font-size="38" font-weight="bold">$12,364</text><text x="550" y="755" text-anchor="middle" fill="#ffffff" font-size="20">($524 × 36 months) − $6,500</text><rect x="80" y="830" width="940" height="230" fill="#16213e" rx="12" stroke="#f59e0b" stroke-width="2"/><text x="550" y="875" text-anchor="middle" fill="#f59e0b" font-size="26" font-weight="bold">BONUS: One Extra Payment / Year</text><text x="550" y="915" text-anchor="middle" fill="#ffffff" font-size="20">Add 1/12 of your payment each month → 13 total/year</text><text x="550" y="955" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">Cuts 30-year mortgage to ~25 years</text><text x="550" y="1000" text-anchor="middle" fill="#ffffff" font-size="20">Interest saved on $280K loan: ~$67,000</text><text x="550" y="1040" text-anchor="middle" fill="#888" font-size="18">No refinance needed. No closing costs. Just math.</text></svg>`,
          caption: "Refinance when rates drop 1.5+ points AND you'll stay 3+ years AND closing costs are recoupable."
        }
      },
      {
        type: "quiz",
        title: "Check Your Understanding",
        question: "You earn $9,000/month gross. You have a $450/month car payment and $200/month student loan payment. Under the 28/36 rule, what is your MAXIMUM affordable monthly housing payment?",
        options: [
          { text: "$2,520 (the full 28% of gross income)", correct: false },
          { text: "$2,520, but capped at $2,590 by the 36% rule after subtracting other debts", correct: true },
          { text: "$3,240 (the full 36% of gross income)", correct: false },
          { text: "$1,870 (subtract all debts from 28%)", correct: false }
        ],
        explanation: "28% of $9,000 = $2,520 (housing cap). 36% of $9,000 = $3,240 (total debt cap). Subtract existing debts ($450 + $200 = $650) from $3,240 to get $2,590 remaining for housing. Since $2,590 > $2,520, the 28% rule is the binding constraint. Either way, $2,520 is your max — both rules must be satisfied simultaneously, and the lower number wins.",
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="80" text-anchor="middle" fill="#ffd700" font-size="36" font-weight="bold">Apply Both Rules — Lower Wins</text><text x="550" y="130" text-anchor="middle" fill="#888" font-size="20">Income: $9,000/mo • Car: $450 • Student: $200</text><rect x="80" y="190" width="450" height="380" fill="#10b981" rx="12"/><text x="305" y="240" text-anchor="middle" fill="#ffffff" font-size="26" font-weight="bold">28% Rule</text><text x="305" y="285" text-anchor="middle" fill="#ffffff" font-size="20">Housing only</text><text x="305" y="340" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold">28% × $9,000</text><text x="305" y="395" text-anchor="middle" fill="#ffd700" font-size="48" font-weight="bold">$2,520</text><text x="305" y="445" text-anchor="middle" fill="#ffffff" font-size="20">max housing payment</text><text x="305" y="510" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">← BINDING LIMIT</text><text x="305" y="545" text-anchor="middle" fill="#ffffff" font-size="20">(lower of the two)</text><rect x="570" y="190" width="450" height="380" fill="#6366f1" rx="12"/><text x="795" y="240" text-anchor="middle" fill="#ffffff" font-size="26" font-weight="bold">36% Rule</text><text x="795" y="285" text-anchor="middle" fill="#ffffff" font-size="20">Total debt cap</text><text x="795" y="335" text-anchor="middle" fill="#ffd700" font-size="28" font-weight="bold">36% × $9,000 = $3,240</text><text x="795" y="380" text-anchor="middle" fill="#ffffff" font-size="20">Minus existing: $650</text><text x="795" y="425" text-anchor="middle" fill="#ffd700" font-size="38" font-weight="bold">$2,590 left</text><text x="795" y="470" text-anchor="middle" fill="#ffffff" font-size="20">for housing</text><text x="795" y="540" text-anchor="middle" fill="#888" font-size="20">(but capped by 28%)</text><rect x="80" y="610" width="940" height="200" fill="#16213e" rx="12" stroke="#ffd700" stroke-width="3"/><text x="550" y="660" text-anchor="middle" fill="#ffd700" font-size="28" font-weight="bold">ANSWER: $2,520 max</text><text x="550" y="710" text-anchor="middle" fill="#ffffff" font-size="22">28% rule is binding here</text><text x="550" y="755" text-anchor="middle" fill="#ffffff" font-size="20">Both rules must pass. The lower limit wins.</text><text x="550" y="790" text-anchor="middle" fill="#888" font-size="18">If car payment were $700, then 36% rule would bind instead.</text><rect x="80" y="850" width="940" height="200" fill="#0ea5e9" rx="12"/><text x="550" y="895" text-anchor="middle" fill="#ffffff" font-size="24" font-weight="bold">KEY INSIGHT</text><text x="550" y="945" text-anchor="middle" fill="#ffffff" font-size="20">Lenders may approve up to 43% DTI</text><text x="550" y="985" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">28/36 is the safe target, not the ceiling</text><text x="550" y="1025" text-anchor="middle" fill="#ffffff" font-size="18">Buy at 28/36 — you'll have room to breathe and save.</text></svg>`,
          caption: "Both rules must be satisfied. The lower limit always wins."
        }
      },
      {
        type: "application",
        title: "Your Mortgage Action Plan",
        content: `Whether you're buying, already own, or considering a refi — here's your checklist:

**If buying**: Calculate **28% of gross income** as your true housing target — not what the lender approves. Aim for **20% down** to skip PMI entirely. If you can't, plan to kill PMI fast.

**If you own with PMI**: Request a home value reassessment when you hit **80% LTV**. Submit a **written request** to your servicer (they won't volunteer it). If denied, wait for the **automatic 78% drop**. On a $300K loan with $250/mo PMI, killing it 5 years early saves **$15,000**.

**If considering refi**: Run the **breakeven calc**. Don't refi for less than **1.5 points** improvement unless you're staying 10+ years. Watch for sneaky "no-cost" refis that just roll fees into the loan balance.

**Everyone**: Add **one extra payment per year** (1/12 monthly). Free 5 years off your mortgage. ~$67K saved in interest.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="80" text-anchor="middle" fill="#ffd700" font-size="38" font-weight="bold">Mortgage Action Checklist</text><rect x="80" y="140" width="940" height="200" fill="#6366f1" rx="12"/><text x="110" y="190" fill="#ffd700" font-size="24" font-weight="bold">IF BUYING</text><text x="110" y="230" fill="#ffffff" font-size="20">☐ Calculate 28% of GROSS income as housing target</text><text x="110" y="265" fill="#ffffff" font-size="20">☐ Aim for 20% down to skip PMI entirely</text><text x="110" y="300" fill="#ffffff" font-size="20">☐ Ignore what lender approves — use 28/36 rule</text><text x="110" y="330" fill="#888" font-size="18">Lender's approval ≠ what you can actually afford</text><rect x="80" y="370" width="940" height="200" fill="#10b981" rx="12"/><text x="110" y="420" fill="#ffd700" font-size="24" font-weight="bold">IF YOU OWN WITH PMI</text><text x="110" y="460" fill="#ffffff" font-size="20">☐ Track LTV — when you hit 80%, submit WRITTEN request</text><text x="110" y="495" fill="#ffffff" font-size="20">☐ Auto-drops at 78% LTV (federal law)</text><text x="110" y="530" fill="#ffffff" font-size="20">☐ Extra principal accelerates the timeline</text><text x="110" y="560" fill="#ffd700" font-size="20" font-weight="bold">Killing $250/mo PMI 5 yrs early = $15,000 saved</text><rect x="80" y="600" width="940" height="200" fill="#f59e0b" rx="12"/><text x="110" y="650" fill="#1a1a2e" font-size="24" font-weight="bold">IF CONSIDERING REFI</text><text x="110" y="690" fill="#1a1a2e" font-size="20">☐ Rate drop ≥ 1.5 points (less = wait)</text><text x="110" y="725" fill="#1a1a2e" font-size="20">☐ Staying ≥ 3 years</text><text x="110" y="760" fill="#1a1a2e" font-size="20">☐ Closing costs recoupable in &lt;24 months</text><text x="110" y="790" fill="#1a1a2e" font-size="20" font-weight="bold">☐ Watch "no-cost" refis — fees roll into balance</text><rect x="80" y="830" width="940" height="220" fill="#ffd700" rx="12"/><text x="550" y="880" text-anchor="middle" fill="#1a1a2e" font-size="28" font-weight="bold">EVERYONE: The Free $67K Strategy</text><text x="550" y="930" text-anchor="middle" fill="#1a1a2e" font-size="22">Add 1/12 of your payment each month</text><text x="550" y="970" text-anchor="middle" fill="#1a1a2e" font-size="22">= one extra annual payment</text><text x="550" y="1015" text-anchor="middle" fill="#1a1a2e" font-size="26" font-weight="bold">Cuts 30 yrs → 25 yrs, saves ~$67,000</text></svg>`,
          caption: "Three paths — buy smart, kill PMI, refi only when math works. The bonus payment trick works for everyone."
        }
      }
    ]
  },
  {
    id: "pf-debt-lesson-8",
    title: "Tax Debt — IRS Payment Plans, Offer in Compromise, Liens",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "The Creditor You Cannot Outrun",
        content: `Most debts can be discharged in bankruptcy, escaped by moving, or negotiated down. **Federal tax debt is different.**

The IRS has powers no other creditor has: it can **garnish wages without a court order**, **seize bank accounts**, **levy Social Security**, and **place a lien** that follows you for **10+ years**. Federal tax debt is **generally NOT dischargeable in bankruptcy** (with narrow exceptions for income taxes over 3 years old).

But the IRS is also surprisingly **willing to negotiate**. They'd rather collect 60% over 5 years than chase you for 10. They have **formal programs** for taxpayers who can't pay in full.

This lesson covers three IRS programs every American should know: the **Streamlined Installment Agreement** (the most common), the **Offer in Compromise** (settle for less), and **Currently Not Collectible** status (pause collections during hardship).`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="80" text-anchor="middle" fill="#ffd700" font-size="36" font-weight="bold">Why Tax Debt Is Different</text><rect x="80" y="130" width="940" height="280" fill="#ef4444" rx="12"/><text x="550" y="180" text-anchor="middle" fill="#ffffff" font-size="26" font-weight="bold">IRS Powers Beyond Normal Creditors</text><text x="120" y="230" fill="#ffffff" font-size="20">• Garnish wages WITHOUT a court order</text><text x="120" y="265" fill="#ffffff" font-size="20">• Seize bank accounts (bank levy)</text><text x="120" y="300" fill="#ffffff" font-size="20">• Levy Social Security up to 15%</text><text x="120" y="335" fill="#ffffff" font-size="20">• Place federal tax lien — follows you 10+ years</text><text x="120" y="370" fill="#ffffff" font-size="20">• Generally NOT dischargeable in bankruptcy</text><rect x="80" y="450" width="940" height="200" fill="#16213e" rx="12" stroke="#ffd700" stroke-width="2"/><text x="550" y="500" text-anchor="middle" fill="#ffd700" font-size="26" font-weight="bold">BUT: The IRS Negotiates</text><text x="550" y="550" text-anchor="middle" fill="#ffffff" font-size="20">They'd rather collect 60% over 5 years</text><text x="550" y="585" text-anchor="middle" fill="#ffffff" font-size="20">than chase you for 10.</text><text x="550" y="625" text-anchor="middle" fill="#888" font-size="18">Three formal programs exist. Use them.</text><rect x="80" y="690" width="290" height="320" fill="#10b981" rx="12"/><text x="225" y="740" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">PROGRAM 1</text><text x="225" y="785" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">Streamlined</text><text x="225" y="815" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">Installment</text><text x="225" y="855" text-anchor="middle" fill="#ffffff" font-size="18">Pay over time</text><text x="225" y="885" text-anchor="middle" fill="#ffffff" font-size="18">Up to 72 months</text><text x="225" y="940" text-anchor="middle" fill="#ffffff" font-size="16">Setup online</text><text x="225" y="975" text-anchor="middle" fill="#ffffff" font-size="16">Most common</text><rect x="405" y="690" width="290" height="320" fill="#6366f1" rx="12"/><text x="550" y="740" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">PROGRAM 2</text><text x="550" y="785" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">Offer in</text><text x="550" y="815" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">Compromise</text><text x="550" y="855" text-anchor="middle" fill="#ffffff" font-size="18">Settle for less</text><text x="550" y="885" text-anchor="middle" fill="#ffffff" font-size="18">~40% acceptance</text><text x="550" y="940" text-anchor="middle" fill="#ffffff" font-size="16">Form 656</text><text x="550" y="975" text-anchor="middle" fill="#ffffff" font-size="16">Hardship-based</text><rect x="730" y="690" width="290" height="320" fill="#f59e0b" rx="12"/><text x="875" y="740" text-anchor="middle" fill="#1a1a2e" font-size="22" font-weight="bold">PROGRAM 3</text><text x="875" y="785" text-anchor="middle" fill="#1a1a2e" font-size="20" font-weight="bold">Currently Not</text><text x="875" y="815" text-anchor="middle" fill="#1a1a2e" font-size="20" font-weight="bold">Collectible</text><text x="875" y="855" text-anchor="middle" fill="#1a1a2e" font-size="18">Pause collections</text><text x="875" y="885" text-anchor="middle" fill="#1a1a2e" font-size="18">Temporary status</text><text x="875" y="940" text-anchor="middle" fill="#1a1a2e" font-size="16">Reviewed yearly</text><text x="875" y="975" text-anchor="middle" fill="#1a1a2e" font-size="16">Interest keeps running</text></svg>`,
          caption: "The IRS has extreme collection powers but also formal negotiation programs. Use them — don't ignore tax bills."
        }
      },
      {
        type: "concept",
        title: "Three IRS Programs Compared",
        content: `**1. Streamlined Installment Agreement** — The default option.
Owe **under $50,000**? You can set it up **online at irs.gov** in 15 minutes. Pay over **up to 72 months**. **Interest (~8%) and a small failure-to-pay penalty (0.25%/mo) continue**, but no liens if you stay current. Setup fee: **$31 with direct debit**.

**2. Offer in Compromise (OIC)** — Settle for less than owed.
Required when paying the full amount would create **economic hardship**. File **Form 656** with $205 fee + **20% down payment** of your offer. If accepted, pay the balance over **5 months** (lump-sum option) or **24 months** (periodic). **Acceptance rate: ~40%**. Tip: IRS uses your "reasonable collection potential" (RCP) — assets + future income — to set the floor.

**3. Currently Not Collectible (CNC)** — The pause button.
For genuine hardship (basic living expenses exceed income). Collections **stop temporarily**, but **interest still accrues** and liens may still be filed. IRS reviews yearly. The 10-year **collection statute** keeps running — sometimes debt expires while in CNC.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="34" font-weight="bold">Three Programs Side-by-Side</text><line x1="80" y1="130" x2="1020" y2="130" stroke="#888" stroke-width="2"/><text x="120" y="170" fill="#ffd700" font-size="20" font-weight="bold">Program</text><text x="400" y="170" fill="#ffd700" font-size="20" font-weight="bold">Best for</text><text x="700" y="170" fill="#ffd700" font-size="20" font-weight="bold">Cost / Catch</text><line x1="80" y1="190" x2="1020" y2="190" stroke="#888" stroke-width="1"/><rect x="80" y="210" width="940" height="230" fill="#10b981" rx="8"/><text x="120" y="250" fill="#ffffff" font-size="22" font-weight="bold">Streamlined</text><text x="120" y="280" fill="#ffffff" font-size="18">Installment</text><text x="120" y="310" fill="#ffffff" font-size="18">Agreement</text><text x="120" y="345" fill="#ffd700" font-size="16">Under $50K owed</text><text x="120" y="375" fill="#ffd700" font-size="16">Up to 72 months</text><text x="120" y="405" fill="#ffd700" font-size="16">Online setup</text><text x="400" y="250" fill="#ffffff" font-size="18">Can pay full amount</text><text x="400" y="280" fill="#ffffff" font-size="18">but need time</text><text x="400" y="320" fill="#ffffff" font-size="18">Stable income</text><text x="400" y="355" fill="#ffffff" font-size="18">Want simplest option</text><text x="400" y="395" fill="#ffffff" font-size="18">Want to avoid liens</text><text x="700" y="250" fill="#ffffff" font-size="18">Setup: $31 (debit)</text><text x="700" y="285" fill="#ffffff" font-size="18">Interest ~8% APR</text><text x="700" y="320" fill="#ffffff" font-size="18">0.25%/mo penalty</text><text x="700" y="355" fill="#ef4444" font-size="18">Default = lien filed</text><rect x="80" y="460" width="940" height="230" fill="#6366f1" rx="8"/><text x="120" y="500" fill="#ffffff" font-size="22" font-weight="bold">Offer in</text><text x="120" y="530" fill="#ffffff" font-size="22" font-weight="bold">Compromise</text><text x="120" y="565" fill="#ffd700" font-size="16">Form 656</text><text x="120" y="595" fill="#ffd700" font-size="16">$205 fee + 20% down</text><text x="120" y="625" fill="#ffd700" font-size="16">~40% acceptance</text><text x="120" y="655" fill="#ffd700" font-size="16">Settle for less</text><text x="400" y="500" fill="#ffffff" font-size="18">Genuine inability</text><text x="400" y="530" fill="#ffffff" font-size="18">to pay full</text><text x="400" y="565" fill="#ffffff" font-size="18">Few/no assets</text><text x="400" y="600" fill="#ffffff" font-size="18">Low future income</text><text x="400" y="640" fill="#ffffff" font-size="18">Major hardship</text><text x="700" y="500" fill="#ffffff" font-size="18">RCP calculation</text><text x="700" y="535" fill="#ffffff" font-size="18">(assets + income)</text><text x="700" y="570" fill="#ffffff" font-size="18">caps the discount</text><text x="700" y="615" fill="#ef4444" font-size="18">Must file taxes for</text><text x="700" y="650" fill="#ef4444" font-size="18">5 yrs after or default</text><rect x="80" y="710" width="940" height="230" fill="#f59e0b" rx="8"/><text x="120" y="750" fill="#1a1a2e" font-size="22" font-weight="bold">Currently</text><text x="120" y="780" fill="#1a1a2e" font-size="22" font-weight="bold">Not Collectible</text><text x="120" y="815" fill="#1a1a2e" font-size="16">"CNC" status</text><text x="120" y="845" fill="#1a1a2e" font-size="16">Form 433-F</text><text x="120" y="875" fill="#1a1a2e" font-size="16">Reviewed annually</text><text x="120" y="905" fill="#1a1a2e" font-size="16">Pause button</text><text x="400" y="750" fill="#1a1a2e" font-size="18">Living expenses</text><text x="400" y="780" fill="#1a1a2e" font-size="18">exceed income</text><text x="400" y="815" fill="#1a1a2e" font-size="18">Temporary hardship</text><text x="400" y="850" fill="#1a1a2e" font-size="18">Unemployment</text><text x="400" y="890" fill="#1a1a2e" font-size="18">Disability</text><text x="700" y="750" fill="#1a1a2e" font-size="18">Interest still accrues</text><text x="700" y="785" fill="#1a1a2e" font-size="18">Liens may be filed</text><text x="700" y="825" fill="#1a1a2e" font-size="18">10-yr clock runs</text><text x="700" y="870" fill="#ef4444" font-size="18" font-weight="bold">→ debt can expire</text><rect x="80" y="970" width="940" height="80" fill="#16213e" rx="8" stroke="#ffd700" stroke-width="2"/><text x="550" y="1020" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">All three require ALL tax returns to be filed and current</text></svg>`,
          caption: "Match the program to your situation: capacity to pay (installment), inability (OIC), or temporary crisis (CNC)."
        }
      },
      {
        type: "example",
        title: "Marcus's $38K Tax Debt",
        content: `**Marcus**, a freelance graphic designer, didn't pay quarterly taxes for 2 years. He owes **$38,000** in back taxes + penalties + interest. He earns **$72,000/year** and has **$4,500** in savings.

**Option A — Streamlined Installment**: Under $50K threshold ✓. Online setup. Pay **$528/month for 72 months** = **$38,000 + ~$8,000 interest** = **$46,000 total**. Manageable but expensive.

**Option B — Offer in Compromise**: The IRS calculates his **RCP**: assets ($4,500) + future income capacity over 12 months. With necessary living expenses, IRS estimates Marcus could pay **~$22,000**. He offers $22,000 → **20% down ($4,400) + 5 monthly payments of $3,520**. **If accepted, he saves $16,000.**

**Best move for Marcus**: Submit OIC. While IRS reviews (4–9 months), collections pause. **Worst case**: rejected → fall back to installment plan. **Best case**: accepted → save **$24,000** vs. full installment payoff.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="34" font-weight="bold">Marcus: $38K Owed, $72K Income</text><text x="550" y="115" text-anchor="middle" fill="#888" font-size="20">Freelance designer • 2 years of unpaid quarterlies</text><rect x="80" y="160" width="450" height="380" fill="#6366f1" rx="12"/><text x="305" y="210" text-anchor="middle" fill="#ffffff" font-size="26" font-weight="bold">Option A:</text><text x="305" y="245" text-anchor="middle" fill="#ffffff" font-size="26" font-weight="bold">Installment Plan</text><line x1="120" y1="275" x2="490" y2="275" stroke="#ffd700" stroke-width="1"/><text x="305" y="320" text-anchor="middle" fill="#ffd700" font-size="24" font-weight="bold">$528/month × 72</text><text x="305" y="370" text-anchor="middle" fill="#ffffff" font-size="20">Principal: $38,000</text><text x="305" y="405" text-anchor="middle" fill="#ffffff" font-size="20">Interest: ~$8,000</text><text x="305" y="445" text-anchor="middle" fill="#ffd700" font-size="26" font-weight="bold">TOTAL: $46,000</text><text x="305" y="490" text-anchor="middle" fill="#ffffff" font-size="18">Easy setup, full payback</text><text x="305" y="520" text-anchor="middle" fill="#888" font-size="18">6 years of payments</text><rect x="570" y="160" width="450" height="380" fill="#10b981" rx="12"/><text x="795" y="210" text-anchor="middle" fill="#ffffff" font-size="26" font-weight="bold">Option B:</text><text x="795" y="245" text-anchor="middle" fill="#ffffff" font-size="26" font-weight="bold">Offer in Compromise</text><line x1="610" y1="275" x2="980" y2="275" stroke="#ffd700" stroke-width="1"/><text x="795" y="320" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">Offer: $22,000</text><text x="795" y="365" text-anchor="middle" fill="#ffffff" font-size="20">20% down: $4,400</text><text x="795" y="400" text-anchor="middle" fill="#ffffff" font-size="20">+ 5 × $3,520/mo</text><text x="795" y="445" text-anchor="middle" fill="#ffd700" font-size="26" font-weight="bold">TOTAL: $22,000</text><text x="795" y="490" text-anchor="middle" fill="#ffffff" font-size="18">Settle for ~58% of debt</text><text x="795" y="520" text-anchor="middle" fill="#888" font-size="18">~40% IRS acceptance rate</text><rect x="80" y="580" width="940" height="180" fill="#16213e" rx="12" stroke="#ffd700" stroke-width="2"/><text x="550" y="625" text-anchor="middle" fill="#ffd700" font-size="26" font-weight="bold">RCP Calculation (IRS Formula)</text><text x="550" y="670" text-anchor="middle" fill="#ffffff" font-size="20">RCP = Net Equity in Assets + Future Income Capacity</text><text x="550" y="710" text-anchor="middle" fill="#ffffff" font-size="20">$4,500 savings + (12 × monthly disposable income)</text><text x="550" y="745" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">= ~$22,000 → your minimum offer</text><rect x="80" y="800" width="940" height="240" fill="#ffd700" rx="12"/><text x="550" y="850" text-anchor="middle" fill="#1a1a2e" font-size="26" font-weight="bold">SAVINGS BY GOING OIC FIRST</text><text x="550" y="905" text-anchor="middle" fill="#1a1a2e" font-size="38" font-weight="bold">$24,000</text><text x="550" y="950" text-anchor="middle" fill="#1a1a2e" font-size="20">($46,000 installment − $22,000 OIC)</text><text x="550" y="995" text-anchor="middle" fill="#1a1a2e" font-size="20">Worst case if denied: fall back to installment plan</text><text x="550" y="1025" text-anchor="middle" fill="#1a1a2e" font-size="18">Low downside, high upside — submit the OIC.</text></svg>`,
          caption: "Try OIC first when you qualify. Worst case you're denied and fall back to the installment plan."
        }
      },
      {
        type: "quiz",
        title: "Check Your Understanding",
        question: "Which of the following statements about federal tax debt is TRUE?",
        options: [
          { text: "Federal tax debt can be discharged in Chapter 7 bankruptcy just like credit card debt", correct: false },
          { text: "An Offer in Compromise requires 20% down payment of the offered amount with Form 656", correct: true },
          { text: "Currently Not Collectible status forgives the debt after 1 year of hardship", correct: false },
          { text: "Streamlined Installment Agreements stop interest from accruing while you pay", correct: false }
        ],
        explanation: "An OIC requires Form 656 with a $205 fee and a 20% down payment of your offered amount, with the remainder paid over 5 months (lump-sum option). Federal tax debt is generally NOT dischargeable in bankruptcy (narrow exceptions for income taxes over 3 years old). CNC pauses collections but doesn't forgive debt — interest still accrues, and the IRS reviews status annually. Installment agreements do NOT stop interest (~8%) or the failure-to-pay penalty (0.25%/month) from accruing.",
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="80" text-anchor="middle" fill="#ffd700" font-size="36" font-weight="bold">Tax Debt Facts Check</text><rect x="80" y="140" width="940" height="180" fill="#ef4444" rx="12"/><text x="110" y="190" fill="#ffffff" font-size="22" font-weight="bold">MYTH: "I can bankrupt my way out"</text><text x="110" y="235" fill="#ffffff" font-size="20">Federal tax debt is generally NOT dischargeable.</text><text x="110" y="270" fill="#ffffff" font-size="20">Narrow exception: income taxes filed 3+ years ago,</text><text x="110" y="300" fill="#ffffff" font-size="20">assessed 2+ years ago, no fraud/evasion.</text><rect x="80" y="350" width="940" height="180" fill="#10b981" rx="12"/><text x="110" y="400" fill="#ffd700" font-size="22" font-weight="bold">FACT: OIC = Form 656 + $205 + 20% down</text><text x="110" y="445" fill="#ffffff" font-size="20">Lump-sum option: 20% down + 5 months for balance</text><text x="110" y="480" fill="#ffffff" font-size="20">Periodic option: monthly payments over 24 months</text><text x="110" y="515" fill="#ffffff" font-size="20">Acceptance rate: ~40%</text><rect x="80" y="560" width="940" height="180" fill="#ef4444" rx="12"/><text x="110" y="610" fill="#ffffff" font-size="22" font-weight="bold">MYTH: "CNC forgives the debt"</text><text x="110" y="655" fill="#ffffff" font-size="20">CNC PAUSES collections. Does not forgive.</text><text x="110" y="690" fill="#ffffff" font-size="20">Interest accrues. Liens can be filed.</text><text x="110" y="725" fill="#ffffff" font-size="20">BUT: 10-year statute keeps running → can expire</text><rect x="80" y="770" width="940" height="180" fill="#ef4444" rx="12"/><text x="110" y="820" fill="#ffffff" font-size="22" font-weight="bold">MYTH: "Installment plan stops interest"</text><text x="110" y="865" fill="#ffffff" font-size="20">Wrong. Interest ~8% APR keeps running.</text><text x="110" y="900" fill="#ffffff" font-size="20">Failure-to-pay penalty: 0.25%/month (reduced).</text><text x="110" y="935" fill="#ffffff" font-size="20">$38K debt → $46K paid over 72 months.</text><rect x="80" y="980" width="940" height="80" fill="#ffd700" rx="12"/><text x="550" y="1030" text-anchor="middle" fill="#1a1a2e" font-size="24" font-weight="bold">ANSWER: B — OIC = Form 656 + 20% down</text></svg>`,
          caption: "Federal tax debt has unique rules. Know the programs so you can pick the right one."
        }
      },
      {
        type: "application",
        title: "If You Owe the IRS — Action Steps",
        content: `**Step 1 — File first, pay later.** Filing without paying triggers **0.5%/mo failure-to-pay**. NOT filing triggers **5%/mo failure-to-file** (10× worse). **Always file**, even if you can't pay a cent.

**Step 2 — Pull your IRS transcript.** Free at **irs.gov/transcripts**. Confirms what you owe, by tax year. Don't negotiate blind.

**Step 3 — Match program to situation.**
- Owe **<$50K** + steady income → **Streamlined Installment** (online, 15 min)
- Owe **anything** + genuine inability to pay → **OIC (Form 656)**
- **Temporary crisis** (job loss, medical) → **CNC (Form 433-F)**

**Step 4 — Stay compliant for 5 years after.** OIC defaults if you miss filing or underpay any future tax. The IRS reinstates the FULL original debt.

**Step 5 — Don't use "tax relief" TV scams.** Companies promising "pennies on the dollar" charge **$3K–$10K** for the same Form 656 you can file yourself. Hire a **local CPA or Enrolled Agent** instead — flat fee, real expertise.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="36" font-weight="bold">If You Owe the IRS: 5 Steps</text><rect x="80" y="120" width="940" height="160" fill="#10b981" rx="12"/><circle cx="140" cy="200" r="35" fill="#ffd700"/><text x="140" y="212" text-anchor="middle" fill="#1a1a2e" font-size="32" font-weight="bold">1</text><text x="200" y="180" fill="#ffffff" font-size="22" font-weight="bold">FILE — even if you can't pay</text><text x="200" y="215" fill="#ffffff" font-size="18">Failure-to-FILE penalty: 5%/month</text><text x="200" y="245" fill="#ffffff" font-size="18">Failure-to-PAY penalty: 0.5%/month</text><text x="200" y="270" fill="#ffd700" font-size="18" font-weight="bold">Filing alone saves 10x the penalty rate</text><rect x="80" y="300" width="940" height="120" fill="#6366f1" rx="12"/><circle cx="140" cy="360" r="35" fill="#ffd700"/><text x="140" y="372" text-anchor="middle" fill="#1a1a2e" font-size="32" font-weight="bold">2</text><text x="200" y="345" fill="#ffffff" font-size="22" font-weight="bold">Pull your IRS transcript (free)</text><text x="200" y="378" fill="#ffffff" font-size="18">irs.gov/transcripts → confirms what you owe</text><text x="200" y="408" fill="#888" font-size="18">Never negotiate without knowing the number</text><rect x="80" y="440" width="940" height="220" fill="#f59e0b" rx="12"/><circle cx="140" cy="510" r="35" fill="#1a1a2e"/><text x="140" y="522" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold">3</text><text x="200" y="490" fill="#1a1a2e" font-size="22" font-weight="bold">Match program to situation</text><text x="200" y="525" fill="#1a1a2e" font-size="18">&lt;$50K + steady income → STREAMLINED INSTALLMENT</text><text x="200" y="560" fill="#1a1a2e" font-size="18">Genuine inability to pay → OIC (Form 656)</text><text x="200" y="595" fill="#1a1a2e" font-size="18">Temporary crisis → CNC (Form 433-F)</text><text x="200" y="630" fill="#1a1a2e" font-size="18">Each has different forms, fees, and acceptance criteria</text><rect x="80" y="680" width="940" height="150" fill="#ef4444" rx="12"/><circle cx="140" cy="755" r="35" fill="#ffd700"/><text x="140" y="767" text-anchor="middle" fill="#1a1a2e" font-size="32" font-weight="bold">4</text><text x="200" y="730" fill="#ffffff" font-size="22" font-weight="bold">Stay compliant for 5 years after OIC</text><text x="200" y="765" fill="#ffffff" font-size="18">Miss a filing OR underpay → OIC defaults</text><text x="200" y="800" fill="#ffffff" font-size="18">FULL original debt reinstated. Don't slip.</text><rect x="80" y="850" width="940" height="200" fill="#8b5cf6" rx="12"/><circle cx="140" cy="930" r="35" fill="#ffd700"/><text x="140" y="942" text-anchor="middle" fill="#1a1a2e" font-size="32" font-weight="bold">5</text><text x="200" y="900" fill="#ffffff" font-size="22" font-weight="bold">Skip the "tax relief" TV scams</text><text x="200" y="935" fill="#ffffff" font-size="18">They charge $3K-$10K to file the same Form 656</text><text x="200" y="970" fill="#ffffff" font-size="18">that you can file yourself for $205</text><text x="200" y="1005" fill="#ffd700" font-size="18" font-weight="bold">Hire a local CPA or Enrolled Agent (flat fee)</text><text x="200" y="1035" fill="#ffffff" font-size="16">Real expertise, fraction of the cost</text></svg>`,
          caption: "File first. Pull transcripts. Pick the right program. Stay compliant. Skip the scams."
        }
      }
    ]
  },
  {
    id: "pf-debt-lesson-9",
    title: "Auto Loans and the Upside-Down Trap",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "The Asset That Crashes the Moment You Buy It",
        content: `Cars are the worst investment most people make on purpose. A new vehicle loses **20–30% of value the moment you drive it off the lot** — the so-called "drive-off depreciation." Within **5 years**, it's worth roughly **40% of what you paid**.

This wouldn't matter if you paid cash. But **85% of new cars** are financed, increasingly on **7- and 8-year terms**. The longer the loan, the slower you build equity — and the faster the car loses value.

The result? An **upside-down loan**: you owe more than the car is worth. Roughly **1 in 4 American auto loans** is currently upside-down. The average negative equity: **$6,500**.

This lesson covers the **depreciation curve**, the **20/4/10 rule** for buying smart, how to recognize the upside-down trap, and **four ways out** when you're already stuck in one.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="36" font-weight="bold">The $40K Car Depreciation Curve</text><text x="550" y="110" text-anchor="middle" fill="#888" font-size="20">New car value over time</text><line x1="120" y1="900" x2="1020" y2="900" stroke="#ffffff" stroke-width="2"/><line x1="120" y1="200" x2="120" y2="900" stroke="#ffffff" stroke-width="2"/><text x="105" y="200" text-anchor="end" fill="#ffffff" font-size="16">$40K</text><text x="105" y="340" text-anchor="end" fill="#ffffff" font-size="16">$32K</text><text x="105" y="480" text-anchor="end" fill="#ffffff" font-size="16">$24K</text><text x="105" y="620" text-anchor="end" fill="#ffffff" font-size="16">$16K</text><text x="105" y="760" text-anchor="end" fill="#ffffff" font-size="16">$8K</text><text x="105" y="900" text-anchor="end" fill="#ffffff" font-size="16">$0</text><text x="120" y="940" fill="#ffffff" font-size="16">Day 1</text><text x="280" y="940" fill="#ffffff" font-size="16">Year 1</text><text x="450" y="940" fill="#ffffff" font-size="16">Year 2</text><text x="615" y="940" fill="#ffffff" font-size="16">Year 3</text><text x="780" y="940" fill="#ffffff" font-size="16">Year 4</text><text x="945" y="940" fill="#ffffff" font-size="16">Year 5</text><polyline points="120,200 180,400 320,520 470,610 620,680 770,730 950,760" fill="none" stroke="#ef4444" stroke-width="4"/><circle cx="120" cy="200" r="8" fill="#ffd700"/><circle cx="180" cy="400" r="8" fill="#ef4444"/><circle cx="950" cy="760" r="8" fill="#ef4444"/><text x="200" y="370" fill="#ffd700" font-size="18" font-weight="bold">Lose 20-30%</text><text x="200" y="395" fill="#ffd700" font-size="16">in seconds</text><text x="780" y="730" fill="#ef4444" font-size="18" font-weight="bold">Worth ~40%</text><text x="780" y="755" fill="#ef4444" font-size="16">after 5 yrs</text><rect x="120" y="990" width="880" height="60" fill="#16213e" rx="8" stroke="#ffd700" stroke-width="2"/><text x="560" y="1025" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">1 in 4 US auto loans is upside-down. Avg negative equity: $6,500.</text></svg>`,
          caption: "A new car loses 20-30% the day you buy it, and 60% over 5 years — but loans now stretch 7-8 years."
        }
      },
      {
        type: "concept",
        title: "The 20/4/10 Rule for Buying Smart",
        content: `The **20/4/10 rule** is the discipline that keeps you out of the upside-down trap:

**20% down** — On a $30K car, that's $6,000 cash. This offsets day-1 depreciation. You start with equity, not negative equity.

**4-year max term** — 48 months is the longest term that builds equity faster than the car loses value. **84-month loans guarantee you'll be upside-down for years.**

**10% of gross income** — All car costs (loan payment + insurance + fuel + maintenance) ≤ **10% of gross monthly income**. Earn $6,000/month? Cap all car costs at $600 — not just the payment.

**The math**: $30K car − $6K down = $24K loan at 7% × 48 months = **$575/month**. Add $150 insurance + $200 fuel + $50 maintenance = **$975/mo**. Need **$9,750/mo gross** ($117K/yr) to comfortably afford this.

If the math doesn't work, **buy used or buy cheaper**. The car you can finance with 84 months is the car you can't afford.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="38" font-weight="bold">The 20/4/10 Rule</text><text x="550" y="115" text-anchor="middle" fill="#888" font-size="20">Three numbers that keep you out of the trap</text><rect x="80" y="160" width="300" height="320" fill="#10b981" rx="12"/><text x="230" y="220" text-anchor="middle" fill="#ffffff" font-size="60" font-weight="bold">20%</text><text x="230" y="265" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">DOWN</text><line x1="120" y1="285" x2="340" y2="285" stroke="#ffffff" stroke-width="1"/><text x="230" y="325" text-anchor="middle" fill="#ffffff" font-size="18">Minimum down payment</text><text x="230" y="365" text-anchor="middle" fill="#ffffff" font-size="18">Offsets day-1</text><text x="230" y="390" text-anchor="middle" fill="#ffffff" font-size="18">depreciation</text><text x="230" y="430" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">Start with equity</text><text x="230" y="460" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">Not deficit</text><rect x="400" y="160" width="300" height="320" fill="#6366f1" rx="12"/><text x="550" y="220" text-anchor="middle" fill="#ffffff" font-size="60" font-weight="bold">4</text><text x="550" y="265" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">YEAR MAX</text><line x1="440" y1="285" x2="660" y2="285" stroke="#ffffff" stroke-width="1"/><text x="550" y="325" text-anchor="middle" fill="#ffffff" font-size="18">48 months max term</text><text x="550" y="365" text-anchor="middle" fill="#ffffff" font-size="18">Builds equity faster</text><text x="550" y="390" text-anchor="middle" fill="#ffffff" font-size="18">than car loses value</text><text x="550" y="430" text-anchor="middle" fill="#ef4444" font-size="18" font-weight="bold">Avoid 72/84 mo loans</text><text x="550" y="460" text-anchor="middle" fill="#ef4444" font-size="18" font-weight="bold">= guaranteed trap</text><rect x="720" y="160" width="300" height="320" fill="#f59e0b" rx="12"/><text x="870" y="220" text-anchor="middle" fill="#1a1a2e" font-size="60" font-weight="bold">10%</text><text x="870" y="265" text-anchor="middle" fill="#1a1a2e" font-size="22" font-weight="bold">OF INCOME</text><line x1="760" y1="285" x2="980" y2="285" stroke="#1a1a2e" stroke-width="1"/><text x="870" y="325" text-anchor="middle" fill="#1a1a2e" font-size="18">ALL car costs</text><text x="870" y="365" text-anchor="middle" fill="#1a1a2e" font-size="18">Loan + insurance</text><text x="870" y="390" text-anchor="middle" fill="#1a1a2e" font-size="18">+ fuel + maintenance</text><text x="870" y="430" text-anchor="middle" fill="#1a1a2e" font-size="20" font-weight="bold">≤ 10% gross</text><text x="870" y="460" text-anchor="middle" fill="#1a1a2e" font-size="20" font-weight="bold">monthly income</text><rect x="80" y="520" width="940" height="280" fill="#16213e" rx="12" stroke="#ffd700" stroke-width="2"/><text x="550" y="565" text-anchor="middle" fill="#ffd700" font-size="26" font-weight="bold">Example: $30,000 Car</text><text x="120" y="620" fill="#ffffff" font-size="20">20% down: $6,000 cash</text><text x="120" y="660" fill="#ffffff" font-size="20">Loan: $24,000 at 7% × 48 mo = $575/month</text><text x="120" y="700" fill="#ffffff" font-size="20">+ Insurance: $150/mo + Fuel: $200/mo + Maintenance: $50/mo</text><text x="120" y="745" fill="#ffd700" font-size="24" font-weight="bold">Total car costs: $975/mo</text><text x="120" y="785" fill="#ffd700" font-size="22" font-weight="bold">Need $9,750/mo gross ($117K/yr) to afford comfortably</text><rect x="80" y="830" width="940" height="220" fill="#ef4444" rx="12"/><text x="550" y="880" text-anchor="middle" fill="#ffffff" font-size="26" font-weight="bold">Can't make 20/4/10 work?</text><text x="550" y="935" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">Buy used. Buy cheaper. Wait.</text><text x="550" y="985" text-anchor="middle" fill="#ffffff" font-size="20">The car you can finance with 84 months</text><text x="550" y="1020" text-anchor="middle" fill="#ffffff" font-size="20">is the car you cannot actually afford.</text></svg>`,
          caption: "20% down + 4-year max + 10% of gross income for ALL car costs. Miss the math? Buy something cheaper."
        }
      },
      {
        type: "example",
        title: "Jenna's Upside-Down SUV",
        content: `**Jenna** bought a $42,000 SUV with **$0 down** on an **84-month loan at 8%**. Payment: **$655/month**. After **18 months**, she's paid **$11,790** — but most was interest. Her loan balance: **$36,800**.

Meanwhile, the SUV's market value: **$28,500** (Kelley Blue Book).

**Negative equity: $36,800 − $28,500 = $8,300 upside-down.**

Now Jenna needs to move for work. Her four options:

**1. Drive it to payoff** (5.5 more years). Cheapest long-term but she's stuck.
**2. Total it + GAP insurance**: GAP would cover the $8,300 gap. (She doesn't have GAP — most $0-down buyers should.)
**3. Sell privately for $28,500**, pay the **$8,300 difference in cash** to her lender to close the loan. Painful but clean.
**4. Trade in with negative equity rolled into a new loan** — the dealer "buries" $8,300 into a new $45K car loan. **New loan: $53,300.** She's now **$20K+ upside-down on day 1**. The worst option, but the most common.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="34" font-weight="bold">Jenna's Upside-Down SUV</text><text x="550" y="115" text-anchor="middle" fill="#888" font-size="20">$42K SUV • $0 down • 84-mo @ 8% • 18 months in</text><rect x="80" y="160" width="450" height="180" fill="#ef4444" rx="12"/><text x="305" y="210" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">Loan Balance Owed</text><text x="305" y="270" text-anchor="middle" fill="#ffd700" font-size="42" font-weight="bold">$36,800</text><text x="305" y="315" text-anchor="middle" fill="#ffffff" font-size="18">(paid $11,790 — mostly interest)</text><rect x="570" y="160" width="450" height="180" fill="#6366f1" rx="12"/><text x="795" y="210" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">Car Market Value</text><text x="795" y="270" text-anchor="middle" fill="#ffd700" font-size="42" font-weight="bold">$28,500</text><text x="795" y="315" text-anchor="middle" fill="#ffffff" font-size="18">(Kelley Blue Book)</text><rect x="80" y="370" width="940" height="120" fill="#16213e" rx="12" stroke="#ef4444" stroke-width="3"/><text x="550" y="420" text-anchor="middle" fill="#ef4444" font-size="28" font-weight="bold">NEGATIVE EQUITY: $8,300 UPSIDE-DOWN</text><text x="550" y="465" text-anchor="middle" fill="#ffffff" font-size="20">$36,800 owed − $28,500 value</text><text x="550" y="530" text-anchor="middle" fill="#ffd700" font-size="24" font-weight="bold">Four Ways Out</text><rect x="80" y="555" width="220" height="240" fill="#10b981" rx="12"/><text x="190" y="595" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">#1</text><text x="190" y="625" text-anchor="middle" fill="#ffd700" font-size="18" font-weight="bold">Drive to Payoff</text><text x="190" y="665" text-anchor="middle" fill="#ffffff" font-size="14">5.5 more years</text><text x="190" y="700" text-anchor="middle" fill="#ffffff" font-size="14">Cheapest long-term</text><text x="190" y="730" text-anchor="middle" fill="#ffffff" font-size="14">No new debt</text><text x="190" y="770" text-anchor="middle" fill="#888" font-size="14">Stuck with the car</text><rect x="320" y="555" width="220" height="240" fill="#6366f1" rx="12"/><text x="430" y="595" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">#2</text><text x="430" y="625" text-anchor="middle" fill="#ffd700" font-size="18" font-weight="bold">GAP + Total It</text><text x="430" y="665" text-anchor="middle" fill="#ffffff" font-size="14">GAP covers $8,300</text><text x="430" y="700" text-anchor="middle" fill="#ffffff" font-size="14">$0 out of pocket</text><text x="430" y="730" text-anchor="middle" fill="#ffffff" font-size="14">if vehicle totaled</text><text x="430" y="770" text-anchor="middle" fill="#ef4444" font-size="14">Need GAP first!</text><rect x="560" y="555" width="220" height="240" fill="#f59e0b" rx="12"/><text x="670" y="595" text-anchor="middle" fill="#1a1a2e" font-size="22" font-weight="bold">#3</text><text x="670" y="625" text-anchor="middle" fill="#1a1a2e" font-size="18" font-weight="bold">Sell Private</text><text x="670" y="665" text-anchor="middle" fill="#1a1a2e" font-size="14">Sell for $28,500</text><text x="670" y="700" text-anchor="middle" fill="#1a1a2e" font-size="14">Pay bank $8,300</text><text x="670" y="730" text-anchor="middle" fill="#1a1a2e" font-size="14">cash difference</text><text x="670" y="770" text-anchor="middle" fill="#1a1a2e" font-size="14" font-weight="bold">Painful but clean</text><rect x="800" y="555" width="220" height="240" fill="#ef4444" rx="12"/><text x="910" y="595" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">#4</text><text x="910" y="625" text-anchor="middle" fill="#ffd700" font-size="18" font-weight="bold">Roll Into New</text><text x="910" y="665" text-anchor="middle" fill="#ffffff" font-size="14">Bury $8,300 in</text><text x="910" y="700" text-anchor="middle" fill="#ffffff" font-size="14">new $45K loan</text><text x="910" y="730" text-anchor="middle" fill="#ffffff" font-size="14">= $53,300 loan</text><text x="910" y="770" text-anchor="middle" fill="#ffd700" font-size="14" font-weight="bold">WORST option</text><rect x="80" y="820" width="940" height="220" fill="#16213e" rx="12" stroke="#ffd700" stroke-width="2"/><text x="550" y="865" text-anchor="middle" fill="#ffd700" font-size="24" font-weight="bold">Option #4 is the most common — and the worst</text><text x="550" y="910" text-anchor="middle" fill="#ffffff" font-size="20">"No money down" deals usually mean rolling old negative equity</text><text x="550" y="945" text-anchor="middle" fill="#ffffff" font-size="20">into the new loan. You start day 1 already $20K+ upside-down.</text><text x="550" y="990" text-anchor="middle" fill="#ef4444" font-size="22" font-weight="bold">Each trade = more debt, never less.</text><text x="550" y="1025" text-anchor="middle" fill="#888" font-size="18">Best: drive to payoff. Second best: sell + pay the gap.</text></svg>`,
          caption: "Four ways out, ranked best to worst. Rolling negative equity into a new loan makes it worse every time."
        }
      },
      {
        type: "quiz",
        title: "Check Your Understanding",
        question: "Which option is the WORST way to escape an upside-down auto loan with $8,000 of negative equity?",
        options: [
          { text: "Drive the car until the loan is paid off, accepting you're stuck with it", correct: false },
          { text: "Sell privately at market value and pay the negative equity to the bank in cash", correct: false },
          { text: "Trade in at a dealer who rolls the $8,000 negative equity into a new car loan", correct: true },
          { text: "Total the car and let GAP insurance cover the negative equity (if you have GAP)", correct: false }
        ],
        explanation: "Rolling negative equity into a new loan is the worst option because you START the new loan already $8,000 upside-down — plus the new car's day-1 depreciation, you're often $15K-$20K+ upside-down on day one. This trap compounds: each subsequent trade rolls in MORE negative equity. The dealer makes it look easy ('no money down!') because they profit. Driving to payoff is cheapest. Selling privately is clean. GAP insurance covers the gap if you total it. Only option 3 makes your financial position strictly worse.",
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="80" text-anchor="middle" fill="#ffd700" font-size="36" font-weight="bold">Ranking the Four Exits</text><text x="550" y="125" text-anchor="middle" fill="#888" font-size="20">$8,000 upside-down — what makes things worse?</text><rect x="80" y="170" width="940" height="170" fill="#10b981" rx="12"/><text x="120" y="215" fill="#ffd700" font-size="22" font-weight="bold">BEST: Drive to payoff</text><text x="120" y="255" fill="#ffffff" font-size="18">No new debt. Each payment builds equity.</text><text x="120" y="290" fill="#ffffff" font-size="18">Drawback: stuck with the car until loan ends.</text><text x="120" y="325" fill="#ffd700" font-size="18" font-weight="bold">Net result: zero new damage</text><rect x="80" y="360" width="940" height="170" fill="#6366f1" rx="12"/><text x="120" y="405" fill="#ffd700" font-size="22" font-weight="bold">GOOD: GAP + total it (if insured)</text><text x="120" y="445" fill="#ffffff" font-size="18">GAP insurance pays the $8K gap.</text><text x="120" y="480" fill="#ffffff" font-size="18">Only works if vehicle is actually totaled.</text><text x="120" y="515" fill="#ffd700" font-size="18" font-weight="bold">Net result: $0 out of pocket</text><rect x="80" y="550" width="940" height="170" fill="#f59e0b" rx="12"/><text x="120" y="595" fill="#1a1a2e" font-size="22" font-weight="bold">PAINFUL: Sell private + pay gap cash</text><text x="120" y="635" fill="#1a1a2e" font-size="18">Sell for market. Write check for $8K to bank.</text><text x="120" y="670" fill="#1a1a2e" font-size="18">Closes the loan cleanly. No more interest.</text><text x="120" y="705" fill="#1a1a2e" font-size="18" font-weight="bold">Net result: −$8K cash, but you're free</text><rect x="80" y="740" width="940" height="280" fill="#ef4444" rx="12"/><text x="120" y="790" fill="#ffd700" font-size="22" font-weight="bold">WORST: Roll into new loan ← ANSWER</text><text x="120" y="830" fill="#ffffff" font-size="18">Dealer buries $8K into a NEW car loan.</text><text x="120" y="865" fill="#ffffff" font-size="18">Looks like "no money down" — feels easy.</text><text x="120" y="900" fill="#ffffff" font-size="18">Reality: start NEW loan $8K already upside-down,</text><text x="120" y="935" fill="#ffffff" font-size="18">plus new car's day-1 depreciation.</text><text x="120" y="975" fill="#ffd700" font-size="20" font-weight="bold">Net result: $15K-$20K+ upside-down on day 1</text><text x="120" y="1005" fill="#ffd700" font-size="20" font-weight="bold">Each trade compounds the trap.</text></svg>`,
          caption: "Rolling negative equity into a new loan is the only option that strictly makes things worse."
        }
      },
      {
        type: "application",
        title: "Your Auto Loan Action Plan",
        content: `**If you're shopping**: Apply the **20/4/10 rule** ruthlessly. Calculate **TOTAL car costs** — not just the payment dealers love to focus on. Get pre-approved financing from your **bank or credit union** BEFORE you visit the dealer; their financing is often 1-3 points worse.

**If you're upside-down**: Pull your **current loan balance** (lender statement) and **current car value** (Kelley Blue Book, free). Calculate the gap.

- **Gap < $3,000?** Make extra principal payments until you're flat, THEN consider selling.
- **Gap $3,000-$10,000?** Keep the car. Drive to payoff. Consider buying **GAP insurance** if you don't have it (~$20-40/yr).
- **Gap > $10,000?** Talk to a credit union about a **refinance** at a lower rate. Pay aggressively on principal.

**Never**: trade in upside-down to get a new car. Never extend a loan beyond **60 months** under any circumstances. The "lower monthly payment" longer loans offer is a trap with a payment tag on it.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="38" font-weight="bold">Auto Loan Action Plan</text><rect x="80" y="130" width="940" height="220" fill="#10b981" rx="12"/><text x="110" y="180" fill="#ffd700" font-size="24" font-weight="bold">IF SHOPPING</text><text x="110" y="220" fill="#ffffff" font-size="20">☐ Apply 20/4/10 rule ruthlessly</text><text x="110" y="255" fill="#ffffff" font-size="20">☐ Calculate TOTAL car costs (not just payment)</text><text x="110" y="290" fill="#ffffff" font-size="20">☐ Pre-approve financing at bank/credit union FIRST</text><text x="110" y="325" fill="#ffd700" font-size="18" font-weight="bold">Dealer financing is often 1-3 points worse</text><rect x="80" y="370" width="940" height="380" fill="#6366f1" rx="12"/><text x="110" y="420" fill="#ffd700" font-size="24" font-weight="bold">IF UPSIDE-DOWN</text><text x="110" y="460" fill="#ffffff" font-size="20">Step 1: Pull loan balance (statement) + car value (KBB)</text><text x="110" y="495" fill="#ffffff" font-size="20">Step 2: Calculate the gap → pick playbook</text><line x1="110" y1="515" x2="990" y2="515" stroke="#ffffff" stroke-width="1"/><circle cx="140" cy="555" r="18" fill="#10b981"/><text x="140" y="563" text-anchor="middle" fill="#ffffff" font-size="18" font-weight="bold">A</text><text x="180" y="555" fill="#ffd700" font-size="20" font-weight="bold">Gap &lt; $3K</text><text x="180" y="585" fill="#ffffff" font-size="18">→ Extra principal payments until flat. Then sell.</text><circle cx="140" cy="625" r="18" fill="#f59e0b"/><text x="140" y="633" text-anchor="middle" fill="#1a1a2e" font-size="18" font-weight="bold">B</text><text x="180" y="625" fill="#ffd700" font-size="20" font-weight="bold">Gap $3K–$10K</text><text x="180" y="655" fill="#ffffff" font-size="18">→ Keep + drive to payoff. Buy GAP if missing ($20-40/yr)</text><circle cx="140" cy="695" r="18" fill="#ef4444"/><text x="140" y="703" text-anchor="middle" fill="#ffffff" font-size="18" font-weight="bold">C</text><text x="180" y="695" fill="#ffd700" font-size="20" font-weight="bold">Gap &gt; $10K</text><text x="180" y="725" fill="#ffffff" font-size="18">→ Refi at credit union. Aggressive principal payments.</text><rect x="80" y="770" width="940" height="260" fill="#ef4444" rx="12"/><text x="550" y="820" text-anchor="middle" fill="#ffd700" font-size="26" font-weight="bold">NEVER DO THESE</text><text x="550" y="870" text-anchor="middle" fill="#ffffff" font-size="20">✗ Trade in upside-down to get a new car</text><text x="550" y="905" text-anchor="middle" fill="#ffffff" font-size="20">✗ Extend any auto loan beyond 60 months</text><text x="550" y="940" text-anchor="middle" fill="#ffffff" font-size="20">✗ Believe "lower monthly payment" = better deal</text><text x="550" y="985" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">A 7-year loan is a 4-year car you can't afford</text><text x="550" y="1015" text-anchor="middle" fill="#ffffff" font-size="18">with a payment tag stretched over twice the time.</text></svg>`,
          caption: "Shop smart with 20/4/10. If upside-down, match strategy to gap size. Never roll negative equity forward."
        }
      }
    ]
  },
{
    id: "pf-debt-lesson-10",
    title: "Debt and Credit Scores — FICO, VantageScore, and the Five Factors",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "Your Three-Digit Reputation",
        content: `Your **credit score** is a three-digit number (300-850) that determines whether you get approved for loans, what **interest rate** you pay, your insurance premiums, and even whether landlords rent to you. A 760+ score on a $300,000 mortgage saves roughly **$80,000** in interest over 30 years vs. a 620 score. Two main models exist: **FICO** (used in 90% of lending decisions) and **VantageScore** (used by Credit Karma and most free apps). They share the same data — your **credit reports** from Equifax, Experian, and TransUnion — but weight factors differently. This lesson breaks down the **five FICO factors**, the critical **30% and 10% utilization thresholds**, and how long negative items stick around. Master these and you control the number, not the other way around.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="80" font-size="42" fill="#ffd700" text-anchor="middle" font-weight="bold">FICO Score Ranges</text><rect x="100" y="180" width="900" height="80" fill="#ef4444" rx="8"/><text x="550" y="232" font-size="32" fill="#ffffff" text-anchor="middle" font-weight="bold">300-579 — Poor (denied or 25%+ APR)</text><rect x="100" y="290" width="900" height="80" fill="#f59e0b" rx="8"/><text x="550" y="342" font-size="32" fill="#ffffff" text-anchor="middle" font-weight="bold">580-669 — Fair (subprime rates)</text><rect x="100" y="400" width="900" height="80" fill="#0ea5e9" rx="8"/><text x="550" y="452" font-size="32" fill="#ffffff" text-anchor="middle" font-weight="bold">670-739 — Good (average rates)</text><rect x="100" y="510" width="900" height="80" fill="#10b981" rx="8"/><text x="550" y="562" font-size="32" fill="#ffffff" text-anchor="middle" font-weight="bold">740-799 — Very Good (best rates)</text><rect x="100" y="620" width="900" height="80" fill="#ffd700" rx="8"/><text x="550" y="672" font-size="32" fill="#1a1a2e" text-anchor="middle" font-weight="bold">800-850 — Exceptional (top tier)</text><text x="550" y="800" font-size="28" fill="#ffd700" text-anchor="middle" font-weight="bold">The 100-point gap = real money</text><text x="550" y="850" font-size="24" fill="#ffffff" text-anchor="middle">$300k mortgage at 760 vs 620:</text><text x="550" y="890" font-size="32" fill="#10b981" text-anchor="middle" font-weight="bold">~$80,000 saved over 30 years</text><text x="550" y="970" font-size="22" fill="#888" text-anchor="middle">FICO 8 is the most widely used model</text><text x="550" y="1010" font-size="22" fill="#888" text-anchor="middle">FICO 9 and 10 are gradually being adopted</text></svg>`,
          caption: "The score band you land in determines APR, approval, and sometimes employment."
        }
      },
      {
        type: "concept",
        title: "The Five FICO Factors",
        content: `FICO weights five inputs to build your score. **Payment history (35%)** is king — one 30-day-late payment can drop a 780 score by 80-110 points. **Amounts owed / credit utilization (30%)** measures revolving balances vs. limits. The magic numbers: keep total utilization **under 30%** for a good score, **under 10%** for an excellent score. A $10,000 limit means stay under $3,000 (good) or $1,000 (great). **Length of credit history (15%)** rewards old accounts — never close your oldest card. **Credit mix (10%)** likes a blend of revolving (cards) and installment (auto, mortgage). **New credit (10%)** penalizes recent hard inquiries; each one costs about 5 points and stays on your report for 2 years. Focus on the top two — they're 65% of the score.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" font-size="40" fill="#ffd700" text-anchor="middle" font-weight="bold">FICO Score: The Five Factors</text><circle cx="550" cy="450" r="280" fill="none" stroke="#888" stroke-width="2"/><path d="M 550 170 A 280 280 0 0 1 814 540 L 550 450 Z" fill="#10b981"/><path d="M 814 540 A 280 280 0 0 1 624 716 L 550 450 Z" fill="#6366f1"/><path d="M 624 716 A 280 280 0 0 1 422 712 L 550 450 Z" fill="#f59e0b"/><path d="M 422 712 A 280 280 0 0 1 290 510 L 550 450 Z" fill="#0ea5e9"/><path d="M 290 510 A 280 280 0 0 1 550 170 L 550 450 Z" fill="#ec4899"/><rect x="80" y="820" width="440" height="60" fill="#10b981" rx="6"/><text x="300" y="862" font-size="26" fill="#1a1a2e" text-anchor="middle" font-weight="bold">35% Payment History</text><rect x="580" y="820" width="440" height="60" fill="#ec4899" rx="6"/><text x="800" y="862" font-size="26" fill="#ffffff" text-anchor="middle" font-weight="bold">30% Amounts Owed</text><rect x="80" y="895" width="320" height="55" fill="#6366f1" rx="6"/><text x="240" y="932" font-size="22" fill="#ffffff" text-anchor="middle" font-weight="bold">15% Length of History</text><rect x="410" y="895" width="300" height="55" fill="#f59e0b" rx="6"/><text x="560" y="932" font-size="22" fill="#1a1a2e" text-anchor="middle" font-weight="bold">10% Credit Mix</text><rect x="720" y="895" width="300" height="55" fill="#0ea5e9" rx="6"/><text x="870" y="932" font-size="22" fill="#ffffff" text-anchor="middle" font-weight="bold">10% New Credit</text><text x="550" y="1010" font-size="24" fill="#ffd700" text-anchor="middle" font-weight="bold">Top 2 factors = 65% of score</text><text x="550" y="1050" font-size="20" fill="#888" text-anchor="middle">Focus there for the biggest lift</text></svg>`,
          caption: "Payment history and utilization dwarf the other three factors combined."
        }
      },
      {
        type: "example",
        title: "Utilization Math: The 30% / 10% Thresholds",
        content: `Maria has three credit cards: $5,000, $3,000, and $2,000 limits — **$10,000 total**. She owes $1,200 on card A, $900 on card B, $0 on card C — **$2,100 total balance**. Her **overall utilization** is 2,100 / 10,000 = **21%** (under 30% — good zone). Her **per-card utilization** on card B is 900 / 3,000 = **30%** — borderline. FICO looks at *both* numbers. If Maria paid card B down to $200, her per-card hits 7% and her overall drops to 14%. Expected score lift: **20-40 points** within one billing cycle. Counter-example: closing card C drops her total limit to $8,000, pushing utilization to 26%. Her score stays roughly flat, but if she later charges $1,500 to card A, utilization jumps to 45% and the score craters 50+ points.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" font-size="38" fill="#ffd700" text-anchor="middle" font-weight="bold">Maria's Utilization Breakdown</text><rect x="80" y="130" width="300" height="200" fill="#1a1a2e" stroke="#6366f1" stroke-width="3" rx="10"/><text x="230" y="170" font-size="24" fill="#ffffff" text-anchor="middle" font-weight="bold">Card A</text><text x="230" y="210" font-size="20" fill="#888" text-anchor="middle">Limit: $5,000</text><text x="230" y="245" font-size="20" fill="#888" text-anchor="middle">Owed: $1,200</text><rect x="110" y="270" width="240" height="20" fill="#1a1a2e" stroke="#888"/><rect x="110" y="270" width="58" height="20" fill="#10b981"/><text x="230" y="315" font-size="22" fill="#10b981" text-anchor="middle" font-weight="bold">24%</text><rect x="400" y="130" width="300" height="200" fill="#1a1a2e" stroke="#6366f1" stroke-width="3" rx="10"/><text x="550" y="170" font-size="24" fill="#ffffff" text-anchor="middle" font-weight="bold">Card B</text><text x="550" y="210" font-size="20" fill="#888" text-anchor="middle">Limit: $3,000</text><text x="550" y="245" font-size="20" fill="#888" text-anchor="middle">Owed: $900</text><rect x="430" y="270" width="240" height="20" fill="#1a1a2e" stroke="#888"/><rect x="430" y="270" width="72" height="20" fill="#f59e0b"/><text x="550" y="315" font-size="22" fill="#f59e0b" text-anchor="middle" font-weight="bold">30%</text><rect x="720" y="130" width="300" height="200" fill="#1a1a2e" stroke="#6366f1" stroke-width="3" rx="10"/><text x="870" y="170" font-size="24" fill="#ffffff" text-anchor="middle" font-weight="bold">Card C</text><text x="870" y="210" font-size="20" fill="#888" text-anchor="middle">Limit: $2,000</text><text x="870" y="245" font-size="20" fill="#888" text-anchor="middle">Owed: $0</text><rect x="750" y="270" width="240" height="20" fill="#1a1a2e" stroke="#888"/><text x="870" y="315" font-size="22" fill="#10b981" text-anchor="middle" font-weight="bold">0%</text><rect x="150" y="400" width="800" height="120" fill="#10b981" rx="10"/><text x="550" y="445" font-size="28" fill="#1a1a2e" text-anchor="middle" font-weight="bold">Overall: $2,100 / $10,000 = 21%</text><text x="550" y="490" font-size="24" fill="#1a1a2e" text-anchor="middle">Under 30% — Good Zone</text><text x="550" y="580" font-size="26" fill="#ffd700" text-anchor="middle" font-weight="bold">If Maria pays Card B to $200:</text><text x="550" y="625" font-size="22" fill="#ffffff" text-anchor="middle">Overall drops to 14%, per-card B to 7%</text><text x="550" y="680" font-size="30" fill="#10b981" text-anchor="middle" font-weight="bold">Expected lift: +20 to +40 points</text><text x="550" y="780" font-size="26" fill="#ef4444" text-anchor="middle" font-weight="bold">Trap: closing Card C</text><text x="550" y="825" font-size="22" fill="#ffffff" text-anchor="middle">Total limit shrinks $10k -> $8k</text><text x="550" y="865" font-size="22" fill="#ffffff" text-anchor="middle">Same balances now = 26% utilization</text><text x="550" y="940" font-size="22" fill="#888" text-anchor="middle">Rule: never close your oldest or highest-limit card</text><text x="550" y="985" font-size="22" fill="#888" text-anchor="middle">Pay down BEFORE statement closes for max benefit</text></svg>`,
          caption: "FICO looks at overall AND per-card utilization. Pay before statement date."
        }
      },
      {
        type: "quiz",
        title: "Score Factor Check",
        question: "You have three credit cards with a combined limit of $15,000 and total balances of $4,800. What is your overall utilization and how would FICO categorize it?",
        options: [
          { text: "48% — excellent zone, no action needed", correct: false },
          { text: "32% — slightly above the 30% threshold, pay down to under $4,500 to enter the good zone", correct: true },
          { text: "32% — perfect, this is the optimal target", correct: false },
          { text: "16% — under 20% means score is maximized", correct: false }
        ],
        explanation: "4,800 / 15,000 = 32%. That's just over the 30% threshold FICO uses as a soft cap for the 'good' zone. Paying $301 brings you to 29.99% and typically lifts the score 10-20 points within a cycle. For excellent-tier scoring, drive utilization under 10% (under $1,500 here).",
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="80" font-size="40" fill="#ffd700" text-anchor="middle" font-weight="bold">Utilization Threshold Map</text><rect x="100" y="180" width="900" height="100" fill="#10b981" rx="8"/><text x="550" y="220" font-size="30" fill="#1a1a2e" text-anchor="middle" font-weight="bold">0% - 10%: Excellent</text><text x="550" y="258" font-size="22" fill="#1a1a2e" text-anchor="middle">Max score impact, "Super-prime" tier</text><rect x="100" y="305" width="900" height="100" fill="#0ea5e9" rx="8"/><text x="550" y="345" font-size="30" fill="#ffffff" text-anchor="middle" font-weight="bold">10% - 30%: Good</text><text x="550" y="383" font-size="22" fill="#ffffff" text-anchor="middle">Healthy, normal use of credit</text><rect x="100" y="430" width="900" height="100" fill="#f59e0b" rx="8"/><text x="550" y="470" font-size="30" fill="#1a1a2e" text-anchor="middle" font-weight="bold">30% - 50%: Fair (caution)</text><text x="550" y="508" font-size="22" fill="#1a1a2e" text-anchor="middle">Score drops 20-50 points</text><rect x="100" y="555" width="900" height="100" fill="#ef4444" rx="8"/><text x="550" y="595" font-size="30" fill="#ffffff" text-anchor="middle" font-weight="bold">50%+: Poor / High Risk</text><text x="550" y="633" font-size="22" fill="#ffffff" text-anchor="middle">Significant score damage</text><text x="550" y="750" font-size="28" fill="#ffd700" text-anchor="middle" font-weight="bold">Your number: $4,800 / $15,000 = 32%</text><text x="550" y="800" font-size="24" fill="#ef4444" text-anchor="middle">Just over the threshold</text><text x="550" y="870" font-size="26" fill="#10b981" text-anchor="middle" font-weight="bold">Quick fix: pay $301 to reach 29.99%</text><text x="550" y="920" font-size="22" fill="#888" text-anchor="middle">Bigger win: get under $1,500 (10%) for max score</text></svg>`,
          caption: "Utilization is the easiest factor to move — and the second-most important."
        }
      },
      {
        type: "application",
        title: "FICO vs VantageScore + The Aging Timeline",
        content: `**FICO** is used by 90% of mortgage, auto, and credit card lenders. **VantageScore** (from the three bureaus + a joint venture) shows up in Credit Karma, NerdWallet, and most free apps. Same 300-850 range, but VantageScore is often **20-40 points higher** than your FICO — don't assume the free number is what the lender sees. Pay $1 at MyFICO.com or check your card issuer's FICO display. **Aging clock for negatives**: late payments stay **7 years**, collections **7 years from original delinquency** (not from payoff), Chapter 13 bankruptcy **7 years**, **Chapter 7 bankruptcy 10 years**, hard inquiries **2 years** (only affect score for 1). Action: pull all three reports free at AnnualCreditReport.com, dispute errors (1 in 5 reports has one), and pay every bill on time — even one 30-day late after years of perfect history is devastating.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" font-size="38" fill="#ffd700" text-anchor="middle" font-weight="bold">How Long Negatives Stick</text><line x1="120" y1="200" x2="1020" y2="200" stroke="#888" stroke-width="3"/><line x1="120" y1="190" x2="120" y2="210" stroke="#888" stroke-width="3"/><line x1="1020" y1="190" x2="1020" y2="210" stroke="#888" stroke-width="3"/><text x="120" y="170" font-size="20" fill="#888" text-anchor="middle">Year 0</text><text x="1020" y="170" font-size="20" fill="#888" text-anchor="middle">Year 10</text><rect x="120" y="240" width="180" height="60" fill="#0ea5e9" rx="6"/><text x="210" y="278" font-size="20" fill="#ffffff" text-anchor="middle" font-weight="bold">Hard inquiry: 2 yr</text><rect x="120" y="320" width="630" height="60" fill="#f59e0b" rx="6"/><text x="435" y="358" font-size="22" fill="#1a1a2e" text-anchor="middle" font-weight="bold">Late payment: 7 years</text><rect x="120" y="400" width="630" height="60" fill="#ef4444" rx="6"/><text x="435" y="438" font-size="22" fill="#ffffff" text-anchor="middle" font-weight="bold">Collection: 7 yr from original delinquency</text><rect x="120" y="480" width="630" height="60" fill="#ec4899" rx="6"/><text x="435" y="518" font-size="22" fill="#ffffff" text-anchor="middle" font-weight="bold">Chapter 13 bankruptcy: 7 years</text><rect x="120" y="560" width="900" height="60" fill="#ef4444" rx="6"/><text x="570" y="598" font-size="22" fill="#ffffff" text-anchor="middle" font-weight="bold">Chapter 7 bankruptcy: 10 years</text><text x="550" y="710" font-size="28" fill="#ffd700" text-anchor="middle" font-weight="bold">FICO vs VantageScore</text><rect x="80" y="740" width="440" height="200" fill="#1a1a2e" stroke="#10b981" stroke-width="3" rx="10"/><text x="300" y="780" font-size="26" fill="#10b981" text-anchor="middle" font-weight="bold">FICO</text><text x="300" y="820" font-size="20" fill="#ffffff" text-anchor="middle">Used by 90% of lenders</text><text x="300" y="855" font-size="20" fill="#ffffff" text-anchor="middle">Mortgage, auto, cards</text><text x="300" y="890" font-size="20" fill="#888" text-anchor="middle">Check via MyFICO or issuer</text><rect x="580" y="740" width="440" height="200" fill="#1a1a2e" stroke="#6366f1" stroke-width="3" rx="10"/><text x="800" y="780" font-size="26" fill="#6366f1" text-anchor="middle" font-weight="bold">VantageScore</text><text x="800" y="820" font-size="20" fill="#ffffff" text-anchor="middle">Free apps (Credit Karma)</text><text x="800" y="855" font-size="20" fill="#ffffff" text-anchor="middle">Often 20-40 pts higher</text><text x="800" y="890" font-size="20" fill="#888" text-anchor="middle">Not what lenders see</text><text x="550" y="1010" font-size="22" fill="#ffd700" text-anchor="middle" font-weight="bold">AnnualCreditReport.com — free weekly pulls</text><text x="550" y="1050" font-size="20" fill="#888" text-anchor="middle">1 in 5 reports has an error — dispute them</text></svg>`,
          caption: "Track the right score (FICO) and watch the aging clock — time heals."
        }
      }
    ]
  },
  {
    id: "pf-debt-lesson-11",
    title: "Predatory Debt — Payday Loans, Car Title Loans, Pawnshops",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "Loans Designed to Trap You",
        content: `**Predatory lending** targets people in crisis with products structured to extract maximum fees while making repayment nearly impossible. The three workhorses of the industry: **payday loans** (small, short-term, against your next paycheck), **car title loans** (using your car title as collateral), and **pawnshops** (using a physical item). All three charge **triple-digit APRs** — 200% to 700%+ is normal. The CFPB found **80% of payday loans are rolled over** within 14 days, and the average borrower pays **$520 in fees** on a $375 loan they never repay in one cycle. This lesson dissects the math, shows which is least-bad (spoiler: pawnshop, because you only lose the item), and lists every legal alternative you should exhaust first. The goal: recognize the trap before you sign.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="80" font-size="42" fill="#ffd700" text-anchor="middle" font-weight="bold">The Three Predatory Products</text><rect x="80" y="180" width="320" height="380" fill="#1a1a2e" stroke="#ef4444" stroke-width="4" rx="12"/><text x="240" y="230" font-size="28" fill="#ef4444" text-anchor="middle" font-weight="bold">Payday Loan</text><text x="240" y="285" font-size="22" fill="#ffffff" text-anchor="middle">$100-$1,000</text><text x="240" y="325" font-size="22" fill="#ffffff" text-anchor="middle">14 days</text><text x="240" y="365" font-size="22" fill="#ffffff" text-anchor="middle">$15-$30 per $100</text><text x="240" y="430" font-size="32" fill="#ef4444" text-anchor="middle" font-weight="bold">~390% APR</text><text x="240" y="490" font-size="18" fill="#888" text-anchor="middle">80% get rolled over</text><text x="240" y="520" font-size="18" fill="#888" text-anchor="middle">Avg borrower: $520 fees</text><rect x="420" y="180" width="320" height="380" fill="#1a1a2e" stroke="#ef4444" stroke-width="4" rx="12"/><text x="580" y="230" font-size="28" fill="#ef4444" text-anchor="middle" font-weight="bold">Car Title Loan</text><text x="580" y="285" font-size="22" fill="#ffffff" text-anchor="middle">$100-$10,000</text><text x="580" y="325" font-size="22" fill="#ffffff" text-anchor="middle">30 days typical</text><text x="580" y="365" font-size="22" fill="#ffffff" text-anchor="middle">25% per month fee</text><text x="580" y="430" font-size="32" fill="#ef4444" text-anchor="middle" font-weight="bold">~300% APR</text><text x="580" y="490" font-size="18" fill="#888" text-anchor="middle">Default = lose car</text><text x="580" y="520" font-size="18" fill="#888" text-anchor="middle">1 in 5 borrowers loses it</text><rect x="760" y="180" width="260" height="380" fill="#1a1a2e" stroke="#f59e0b" stroke-width="4" rx="12"/><text x="890" y="230" font-size="28" fill="#f59e0b" text-anchor="middle" font-weight="bold">Pawnshop</text><text x="890" y="285" font-size="22" fill="#ffffff" text-anchor="middle">25-60% of</text><text x="890" y="315" font-size="22" fill="#ffffff" text-anchor="middle">item value</text><text x="890" y="365" font-size="22" fill="#ffffff" text-anchor="middle">30-90 days</text><text x="890" y="430" font-size="32" fill="#f59e0b" text-anchor="middle" font-weight="bold">~200% APR</text><text x="890" y="490" font-size="18" fill="#888" text-anchor="middle">Default = lose item</text><text x="890" y="520" font-size="18" fill="#888" text-anchor="middle">No credit hit</text><text x="550" y="660" font-size="32" fill="#ffd700" text-anchor="middle" font-weight="bold">Compare: Credit Card APR ~22%</text><text x="550" y="710" font-size="26" fill="#ffffff" text-anchor="middle">Personal loan (good credit) ~10%</text><text x="550" y="760" font-size="26" fill="#ffffff" text-anchor="middle">Credit union PAL ~28% (capped)</text><text x="550" y="850" font-size="30" fill="#ef4444" text-anchor="middle" font-weight="bold">These products cost 10-30x normal credit</text><text x="550" y="950" font-size="22" fill="#888" text-anchor="middle">If you're considering one, exhaust the alternatives first</text></svg>`,
          caption: "All three carry triple-digit APRs. The differences are which asset you lose."
        }
      },
      {
        type: "concept",
        title: "The Payday APR Math",
        content: `A payday loan looks small: borrow **$300, pay back $345** in two weeks ($45 fee). That's "15% per $100" — sounds reasonable. But APR is annualized: $45 / $300 = 15% for **14 days**. Multiply by 365/14 = **26.07 cycles per year**. True APR = 15% × 26.07 = **391%**. If you can't pay the $345 in two weeks (most can't — the average payday borrower is in debt 5 months a year), you "roll" the loan: pay the $45 fee, keep the $300, restart the clock. After **8 rollovers**, you've paid $360 in fees and still owe the original $300 — total cost $660 for a $300 loan. The CFPB found the **median payday borrower pays $458 in fees on a $350 loan** before getting out. Car title loans run similar math but you lose your car — your transportation to work, the source of the income that was supposed to repay the loan.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" font-size="38" fill="#ffd700" text-anchor="middle" font-weight="bold">$300 Payday Loan — 8 Rollovers</text><text x="80" y="160" font-size="22" fill="#ffffff" font-weight="bold">Cycle</text><text x="280" y="160" font-size="22" fill="#ffffff" font-weight="bold">Date</text><text x="500" y="160" font-size="22" fill="#ffffff" font-weight="bold">Fee Paid</text><text x="720" y="160" font-size="22" fill="#ffffff" font-weight="bold">Cumulative</text><text x="940" y="160" font-size="22" fill="#ffffff" font-weight="bold">Owed</text><line x1="60" y1="175" x2="1040" y2="175" stroke="#888" stroke-width="2"/><text x="80" y="215" font-size="20" fill="#ffd700">0</text><text x="280" y="215" font-size="20" fill="#ffffff">Day 0</text><text x="500" y="215" font-size="20" fill="#ffffff">$45</text><text x="720" y="215" font-size="20" fill="#ffffff">$45</text><text x="940" y="215" font-size="20" fill="#ffffff">$300</text><text x="80" y="255" font-size="20" fill="#ffd700">1</text><text x="280" y="255" font-size="20" fill="#ffffff">Day 14</text><text x="500" y="255" font-size="20" fill="#ffffff">$45</text><text x="720" y="255" font-size="20" fill="#ffffff">$90</text><text x="940" y="255" font-size="20" fill="#ffffff">$300</text><text x="80" y="295" font-size="20" fill="#ffd700">2</text><text x="280" y="295" font-size="20" fill="#ffffff">Day 28</text><text x="500" y="295" font-size="20" fill="#ffffff">$45</text><text x="720" y="295" font-size="20" fill="#ffffff">$135</text><text x="940" y="295" font-size="20" fill="#ffffff">$300</text><text x="80" y="335" font-size="20" fill="#ffd700">3</text><text x="280" y="335" font-size="20" fill="#ffffff">Day 42</text><text x="500" y="335" font-size="20" fill="#ffffff">$45</text><text x="720" y="335" font-size="20" fill="#ffffff">$180</text><text x="940" y="335" font-size="20" fill="#ffffff">$300</text><text x="80" y="375" font-size="20" fill="#ffd700">4</text><text x="280" y="375" font-size="20" fill="#ffffff">Day 56</text><text x="500" y="375" font-size="20" fill="#ffffff">$45</text><text x="720" y="375" font-size="20" fill="#ffffff">$225</text><text x="940" y="375" font-size="20" fill="#ffffff">$300</text><text x="80" y="415" font-size="20" fill="#ffd700">5</text><text x="280" y="415" font-size="20" fill="#ffffff">Day 70</text><text x="500" y="415" font-size="20" fill="#ffffff">$45</text><text x="720" y="415" font-size="20" fill="#ffffff">$270</text><text x="940" y="415" font-size="20" fill="#ffffff">$300</text><text x="80" y="455" font-size="20" fill="#ffd700">6</text><text x="280" y="455" font-size="20" fill="#ffffff">Day 84</text><text x="500" y="455" font-size="20" fill="#ffffff">$45</text><text x="720" y="455" font-size="20" fill="#ffffff">$315</text><text x="940" y="455" font-size="20" fill="#ffffff">$300</text><text x="80" y="495" font-size="20" fill="#ef4444">7</text><text x="280" y="495" font-size="20" fill="#ef4444">Day 98</text><text x="500" y="495" font-size="20" fill="#ef4444">$45</text><text x="720" y="495" font-size="20" fill="#ef4444">$360</text><text x="940" y="495" font-size="20" fill="#ef4444">$300</text><line x1="60" y1="520" x2="1040" y2="520" stroke="#ef4444" stroke-width="2"/><rect x="100" y="560" width="900" height="120" fill="#ef4444" rx="10"/><text x="550" y="605" font-size="32" fill="#ffffff" text-anchor="middle" font-weight="bold">Total fees paid: $360</text><text x="550" y="650" font-size="26" fill="#ffffff" text-anchor="middle">Still owe original: $300 — Net out: $660</text><text x="550" y="780" font-size="26" fill="#ffd700" text-anchor="middle" font-weight="bold">APR calculation</text><text x="550" y="825" font-size="22" fill="#ffffff" text-anchor="middle">$45 / $300 = 15% per 14 days</text><text x="550" y="865" font-size="22" fill="#ffffff" text-anchor="middle">15% × (365/14) = 391% annual</text><text x="550" y="950" font-size="24" fill="#ec4899" text-anchor="middle" font-weight="bold">CFPB: median borrower pays $458 on $350 loan</text></svg>`,
          caption: "The rollover is the business model. Every cycle is pure fee revenue."
        }
      },
      {
        type: "example",
        title: "The Title Loan Trap vs the Pawnshop",
        content: `**Dee borrows $1,000 against her car title.** Her 2014 Civic is worth $9,000 but the lender only loans 25%. Terms: **$1,250 due in 30 days** (25% fee = 300% APR). She can't pay. The lender lets her **roll** — pay $250 fee, owe $1,000 again. Three rollovers later she's paid $750 in fees, still owes $1,000, and misses the next deadline. The repo truck takes her **$9,000 car for the $1,250 balance**, sells it at auction for $4,500, pockets the difference (most states allow this). **Net loss: $9,000 car + $750 fees - $1,000 cash received = $8,750.** Contrast: **Marcus pawns a $400 guitar** for $150 at 20% per month. He can't repay; the pawnshop **keeps the guitar** and that's it. No credit hit, no calls, no repo. **Net loss: $400 guitar - $150 cash = $250.** Pawnshops are usurious but the downside is bounded.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" font-size="38" fill="#ffd700" text-anchor="middle" font-weight="bold">Title Loan vs Pawnshop — Outcomes</text><rect x="60" y="130" width="490" height="780" fill="#1a1a2e" stroke="#ef4444" stroke-width="4" rx="12"/><text x="305" y="180" font-size="28" fill="#ef4444" text-anchor="middle" font-weight="bold">Dee — Car Title Loan</text><line x1="100" y1="200" x2="510" y2="200" stroke="#ef4444"/><text x="80" y="245" font-size="20" fill="#ffffff">Asset: 2014 Civic worth $9,000</text><text x="80" y="285" font-size="20" fill="#ffffff">Borrowed: $1,000 (25% LTV)</text><text x="80" y="325" font-size="20" fill="#ffffff">Fee: 25% per month</text><text x="80" y="365" font-size="20" fill="#ffffff">Due day 30: $1,250</text><line x1="100" y1="395" x2="510" y2="395" stroke="#888"/><text x="80" y="435" font-size="20" fill="#f59e0b">Rollover 1: +$250 fee</text><text x="80" y="475" font-size="20" fill="#f59e0b">Rollover 2: +$250 fee</text><text x="80" y="515" font-size="20" fill="#f59e0b">Rollover 3: +$250 fee</text><text x="80" y="555" font-size="20" fill="#ef4444">Miss day 120 — REPO</text><line x1="100" y1="585" x2="510" y2="585" stroke="#ef4444"/><text x="80" y="625" font-size="20" fill="#ffffff">Car auctioned: $4,500</text><text x="80" y="665" font-size="20" fill="#ffffff">Lender keeps surplus</text><text x="80" y="705" font-size="20" fill="#ffffff">(legal in most states)</text><line x1="100" y1="735" x2="510" y2="735" stroke="#ef4444"/><rect x="80" y="755" width="450" height="120" fill="#ef4444" rx="8"/><text x="305" y="795" font-size="22" fill="#ffffff" text-anchor="middle" font-weight="bold">Net loss: $8,750</text><text x="305" y="830" font-size="18" fill="#ffffff" text-anchor="middle">+ no transportation to work</text><text x="305" y="860" font-size="18" fill="#ffffff" text-anchor="middle">+ credit damage</text><rect x="570" y="130" width="470" height="780" fill="#1a1a2e" stroke="#f59e0b" stroke-width="4" rx="12"/><text x="805" y="180" font-size="28" fill="#f59e0b" text-anchor="middle" font-weight="bold">Marcus — Pawnshop</text><line x1="610" y1="200" x2="1020" y2="200" stroke="#f59e0b"/><text x="590" y="245" font-size="20" fill="#ffffff">Asset: Guitar worth $400</text><text x="590" y="285" font-size="20" fill="#ffffff">Borrowed: $150 (38% LTV)</text><text x="590" y="325" font-size="20" fill="#ffffff">Fee: 20% per month</text><text x="590" y="365" font-size="20" fill="#ffffff">Due day 90: $240</text><line x1="610" y1="395" x2="1020" y2="395" stroke="#888"/><text x="590" y="435" font-size="20" fill="#ffffff">Can't pay</text><text x="590" y="475" font-size="20" fill="#ffffff">No rollover — keeps it simple</text><text x="590" y="515" font-size="20" fill="#ffffff">Pawnshop keeps guitar</text><text x="590" y="555" font-size="20" fill="#ffffff">That's the entire downside</text><line x1="610" y1="585" x2="1020" y2="585" stroke="#888"/><text x="590" y="625" font-size="20" fill="#10b981">No credit hit</text><text x="590" y="665" font-size="20" fill="#10b981">No collections calls</text><text x="590" y="705" font-size="20" fill="#10b981">No deficiency balance</text><line x1="610" y1="735" x2="1020" y2="735" stroke="#f59e0b"/><rect x="590" y="755" width="430" height="120" fill="#f59e0b" rx="8"/><text x="805" y="795" font-size="22" fill="#1a1a2e" text-anchor="middle" font-weight="bold">Net loss: $250</text><text x="805" y="830" font-size="18" fill="#1a1a2e" text-anchor="middle">Bounded — no cascade</text><text x="805" y="860" font-size="18" fill="#1a1a2e" text-anchor="middle">Can replace guitar later</text><text x="550" y="980" font-size="26" fill="#ffd700" text-anchor="middle" font-weight="bold">Bounded loss beats unbounded loss</text><text x="550" y="1030" font-size="22" fill="#888" text-anchor="middle">If you must use one, pawn — never sign over the car title</text></svg>`,
          caption: "Pawnshop loss caps at the item. Title loan losses cascade into the car and job."
        }
      },
      {
        type: "quiz",
        title: "Predatory Loan Triage",
        question: "You need $400 in 5 days to fix your car so you can get to work. Which option should you try FIRST before considering any payday/title/pawn product?",
        options: [
          { text: "Walk into a payday lender — fastest and easiest", correct: false },
          { text: "Ask your employer for a payroll advance, then check if your credit union offers a PAL (Payday Alternative Loan, capped 28% APR), then ask the mechanic for a payment plan", correct: true },
          { text: "Title loan against the car — you only need it for a few days", correct: false },
          { text: "Take a cash advance at 30% APR from your credit card", correct: false }
        ],
        explanation: "The triage order is: (1) employer payday advance (often free, like Earnin or built into payroll like DailyPay), (2) credit union PAL — federally capped at 28% APR, $200-$2,000, designed exactly for this, (3) negotiated payment plan with the original creditor (mechanic, utility, doctor) — they often agree to split into 2-3 payments. Even a 30% credit card cash advance is 10x cheaper than payday, but it's behind the first three. Title loan is last because losing the car is catastrophic when you need it for work.",
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" font-size="38" fill="#ffd700" text-anchor="middle" font-weight="bold">Emergency Cash — Triage Order</text><rect x="100" y="140" width="900" height="100" fill="#10b981" rx="10"/><text x="160" y="190" font-size="50" fill="#1a1a2e" font-weight="bold">1</text><text x="240" y="180" font-size="24" fill="#1a1a2e" font-weight="bold">Employer payday advance</text><text x="240" y="215" font-size="20" fill="#1a1a2e">Earnin, DailyPay, payroll tools — often $0 fee</text><rect x="100" y="265" width="900" height="100" fill="#10b981" rx="10"/><text x="160" y="315" font-size="50" fill="#1a1a2e" font-weight="bold">2</text><text x="240" y="305" font-size="24" fill="#1a1a2e" font-weight="bold">Credit union PAL</text><text x="240" y="340" font-size="20" fill="#1a1a2e">$200-$2,000, capped 28% APR, 1-12 months</text><rect x="100" y="390" width="900" height="100" fill="#10b981" rx="10"/><text x="160" y="440" font-size="50" fill="#1a1a2e" font-weight="bold">3</text><text x="240" y="430" font-size="24" fill="#1a1a2e" font-weight="bold">Payment plan with original creditor</text><text x="240" y="465" font-size="20" fill="#1a1a2e">Mechanic/doctor/utility — split into 2-3 payments</text><rect x="100" y="515" width="900" height="100" fill="#0ea5e9" rx="10"/><text x="160" y="565" font-size="50" fill="#ffffff" font-weight="bold">4</text><text x="240" y="555" font-size="24" fill="#ffffff" font-weight="bold">Charity / church emergency fund</text><text x="240" y="590" font-size="20" fill="#ffffff">Local United Way 211, faith orgs, mutual aid groups</text><rect x="100" y="640" width="900" height="100" fill="#f59e0b" rx="10"/><text x="160" y="690" font-size="50" fill="#1a1a2e" font-weight="bold">5</text><text x="240" y="680" font-size="24" fill="#1a1a2e" font-weight="bold">Credit card cash advance</text><text x="240" y="715" font-size="20" fill="#1a1a2e">~30% APR + $10 fee — bad but 10x better than payday</text><rect x="100" y="765" width="900" height="100" fill="#ef4444" rx="10"/><text x="160" y="815" font-size="50" fill="#ffffff" font-weight="bold">X</text><text x="240" y="805" font-size="24" fill="#ffffff" font-weight="bold">Payday / Title / Pawn — LAST RESORT</text><text x="240" y="840" font-size="20" fill="#ffffff">200-700% APR. Pawn if you must — never title</text><text x="550" y="950" font-size="26" fill="#ffd700" text-anchor="middle" font-weight="bold">Most people skip 1-4 because they don't know they exist</text><text x="550" y="1000" font-size="22" fill="#888" text-anchor="middle">Call 211 first. Your credit union's PAL takes 1-2 business days.</text></svg>`,
          caption: "Work top-to-bottom. The first three options solve most $200-$1,000 emergencies."
        }
      },
      {
        type: "application",
        title: "The CFPB Rule + Building Your Defense",
        content: `In **2017** the CFPB finalized a rule requiring payday lenders to verify a borrower's **ability to repay** before lending — same standard mortgage lenders use. The rule would have killed the rollover model. In **2020** the CFPB **rescinded the ability-to-repay underwriting requirement** (the payment-transfer protections survived). Result: rollovers remain legal in most states, with **16 states + DC** capping payday rates at 36% APR or banning them outright (NY, NJ, CT, GA, NC, MA, MD, AR, AZ, MT, OR, WV, VT, NH, CO, IL). **Your defense plan**: build a starter **$500 emergency fund** in a separate savings account (kills 80% of payday demand), join a **credit union** today so the PAL is pre-approved when you need it, list local **211** as a contact for charity/utility assistance referrals, and write down two creditors' hardship-line phone numbers before you need them. **The trap closes fastest on people who never planned an exit.**`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" font-size="38" fill="#ffd700" text-anchor="middle" font-weight="bold">Your Pre-Crisis Defense Kit</text><rect x="80" y="140" width="940" height="110" fill="#10b981" rx="10"/><text x="550" y="185" font-size="28" fill="#1a1a2e" text-anchor="middle" font-weight="bold">1. $500 starter emergency fund</text><text x="550" y="225" font-size="20" fill="#1a1a2e" text-anchor="middle">Separate high-yield savings — kills 80% of payday-loan demand</text><rect x="80" y="275" width="940" height="110" fill="#0ea5e9" rx="10"/><text x="550" y="320" font-size="28" fill="#ffffff" text-anchor="middle" font-weight="bold">2. Join a credit union TODAY</text><text x="550" y="360" font-size="20" fill="#ffffff" text-anchor="middle">PAL pre-approved, 28% APR cap, $200-$2,000 same-day</text><rect x="80" y="410" width="940" height="110" fill="#6366f1" rx="10"/><text x="550" y="455" font-size="28" fill="#ffffff" text-anchor="middle" font-weight="bold">3. Save 211 to your phone</text><text x="550" y="495" font-size="20" fill="#ffffff" text-anchor="middle">United Way line — rent, utility, food, medical referrals</text><rect x="80" y="545" width="940" height="110" fill="#f59e0b" rx="10"/><text x="550" y="590" font-size="28" fill="#1a1a2e" text-anchor="middle" font-weight="bold">4. Write 2 creditor hardship phone numbers</text><text x="550" y="630" font-size="20" fill="#1a1a2e" text-anchor="middle">Utility + landlord/mortgage — they have hardship programs</text><text x="550" y="730" font-size="28" fill="#ffd700" text-anchor="middle" font-weight="bold">CFPB Rule Timeline</text><rect x="100" y="765" width="400" height="180" fill="#1a1a2e" stroke="#10b981" stroke-width="3" rx="10"/><text x="300" y="805" font-size="22" fill="#10b981" text-anchor="middle" font-weight="bold">2017 Rule</text><text x="300" y="845" font-size="18" fill="#ffffff" text-anchor="middle">Required ability-to-repay</text><text x="300" y="875" font-size="18" fill="#ffffff" text-anchor="middle">verification</text><text x="300" y="910" font-size="18" fill="#ffffff" text-anchor="middle">Would have ended rollovers</text><rect x="600" y="765" width="400" height="180" fill="#1a1a2e" stroke="#ef4444" stroke-width="3" rx="10"/><text x="800" y="805" font-size="22" fill="#ef4444" text-anchor="middle" font-weight="bold">2020 Reversal</text><text x="800" y="845" font-size="18" fill="#ffffff" text-anchor="middle">Underwriting rule rescinded</text><text x="800" y="875" font-size="18" fill="#ffffff" text-anchor="middle">Payment protections kept</text><text x="800" y="910" font-size="18" fill="#ffffff" text-anchor="middle">Rollovers still legal</text><text x="550" y="1000" font-size="22" fill="#ffd700" text-anchor="middle" font-weight="bold">16 states + DC cap payday at 36% APR or ban them</text><text x="550" y="1040" font-size="20" fill="#888" text-anchor="middle">Check your state's cap at nclc.org before you ever consider one</text></svg>`,
          caption: "The federal floor is weak. Build defenses BEFORE the emergency hits."
        }
      }
    ]
  },
  {
    id: "pf-debt-lesson-12",
    title: "Capstone: Building Your Personal Debt-Freedom Plan",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "Twelve Lessons, One Plan",
        content: `Everything in this book — **snowball vs avalanche**, **balance transfers**, **refinancing**, **utilization**, **predatory loan defense** — only matters if it ends in a plan you actually execute. This capstone walks the full buildout: **(1)** inventory every debt with balance, APR, minimum, due date; **(2)** pick **snowball** (smallest balance first, behavioral wins) or **avalanche** (highest APR first, mathematically optimal); **(3)** calculate your **extra payment** — the amount above all minimums you can throw at the target debt; **(4)** set a **target payoff date** using a debt calculator; **(5)** **automate** every minimum and the extra payment to fire on payday; **(6)** schedule a **weekly 10-minute debt check-in**. The plan must fit on one page. We'll build a realistic 5-debt example and project the payoff month.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="80" font-size="40" fill="#ffd700" text-anchor="middle" font-weight="bold">The 6-Step Debt-Freedom Plan</text><rect x="80" y="150" width="940" height="110" fill="#10b981" rx="10"/><circle cx="140" cy="205" r="35" fill="#1a1a2e"/><text x="140" y="220" font-size="36" fill="#10b981" text-anchor="middle" font-weight="bold">1</text><text x="220" y="195" font-size="24" fill="#1a1a2e" font-weight="bold">INVENTORY every debt</text><text x="220" y="230" font-size="20" fill="#1a1a2e">Balance, APR, minimum, due date — one row each</text><rect x="80" y="280" width="940" height="110" fill="#6366f1" rx="10"/><circle cx="140" cy="335" r="35" fill="#1a1a2e"/><text x="140" y="350" font-size="36" fill="#6366f1" text-anchor="middle" font-weight="bold">2</text><text x="220" y="325" font-size="24" fill="#ffffff" font-weight="bold">CHOOSE snowball or avalanche</text><text x="220" y="360" font-size="20" fill="#ffffff">Behavioral wins vs. math-optimal — pick one and commit</text><rect x="80" y="410" width="940" height="110" fill="#0ea5e9" rx="10"/><circle cx="140" cy="465" r="35" fill="#1a1a2e"/><text x="140" y="480" font-size="36" fill="#0ea5e9" text-anchor="middle" font-weight="bold">3</text><text x="220" y="455" font-size="24" fill="#ffffff" font-weight="bold">CALCULATE the extra payment</text><text x="220" y="490" font-size="20" fill="#ffffff">Income minus essentials minus minimums = attack fund</text><rect x="80" y="540" width="940" height="110" fill="#f59e0b" rx="10"/><circle cx="140" cy="595" r="35" fill="#1a1a2e"/><text x="140" y="610" font-size="36" fill="#f59e0b" text-anchor="middle" font-weight="bold">4</text><text x="220" y="585" font-size="24" fill="#1a1a2e" font-weight="bold">SET the target payoff date</text><text x="220" y="620" font-size="20" fill="#1a1a2e">Run undebt.it or unbury.us — write the date on the fridge</text><rect x="80" y="670" width="940" height="110" fill="#8b5cf6" rx="10"/><circle cx="140" cy="725" r="35" fill="#1a1a2e"/><text x="140" y="740" font-size="36" fill="#8b5cf6" text-anchor="middle" font-weight="bold">5</text><text x="220" y="715" font-size="24" fill="#ffffff" font-weight="bold">AUTOMATE every payment</text><text x="220" y="750" font-size="20" fill="#ffffff">Minimums + extra fires on payday — no willpower needed</text><rect x="80" y="800" width="940" height="110" fill="#ec4899" rx="10"/><circle cx="140" cy="855" r="35" fill="#1a1a2e"/><text x="140" y="870" font-size="36" fill="#ec4899" text-anchor="middle" font-weight="bold">6</text><text x="220" y="845" font-size="24" fill="#ffffff" font-weight="bold">WEEKLY 10-min check-in</text><text x="220" y="880" font-size="20" fill="#ffffff">Same time each week — log balances, adjust if life shifted</text><text x="550" y="1000" font-size="26" fill="#ffd700" text-anchor="middle" font-weight="bold">One page. Six steps. The rest is just time.</text></svg>`,
          caption: "Six steps. Each takes hours, not weeks. Then it's just consistency."
        }
      },
      {
        type: "concept",
        title: "Snowball vs Avalanche — Decision Rule",
        content: `**Avalanche** (highest APR first) saves the most money — mathematically dominant in every spreadsheet. On a typical $40,000 mixed-debt portfolio, avalanche saves about **$1,500-$3,000** more interest than snowball over 3-5 years. But Northwestern's behavioral research (Gal & McShane) found that people on the **snowball** method are **15% more likely to finish** because eliminating an entire debt — even a small one — produces a dopamine hit that fuels persistence. **The decision rule**: if your highest-APR debt is also your smallest (or close to it), use **avalanche** — same result. If the highest-APR debt is your biggest (a $25,000 student loan at 8% while you have a $400 medical bill at 0%), and you've quit and restarted debt payoff before, use **snowball** — kill the medical bill in month one for the win. If you've never quit a financial goal mid-stream, use **avalanche**. The best method is the one you finish.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" font-size="38" fill="#ffd700" text-anchor="middle" font-weight="bold">Snowball vs Avalanche — Picking</text><rect x="60" y="130" width="490" height="700" fill="#1a1a2e" stroke="#10b981" stroke-width="4" rx="12"/><text x="305" y="180" font-size="30" fill="#10b981" text-anchor="middle" font-weight="bold">SNOWBALL</text><text x="305" y="215" font-size="20" fill="#ffffff" text-anchor="middle">(Smallest balance first)</text><line x1="80" y1="240" x2="530" y2="240" stroke="#10b981"/><text x="80" y="285" font-size="22" fill="#ffd700" font-weight="bold">Strengths</text><text x="80" y="320" font-size="18" fill="#ffffff">+ Fast emotional wins</text><text x="80" y="350" font-size="18" fill="#ffffff">+ Simpler to track</text><text x="80" y="380" font-size="18" fill="#ffffff">+ 15% higher completion rate</text><text x="80" y="410" font-size="18" fill="#ffffff">+ Frees up cash flow fast</text><text x="80" y="465" font-size="22" fill="#ffd700" font-weight="bold">Weaknesses</text><text x="80" y="500" font-size="18" fill="#ffffff">- Pays more total interest</text><text x="80" y="530" font-size="18" fill="#ffffff">- Slower if smallest = lowest APR</text><text x="80" y="600" font-size="22" fill="#10b981" font-weight="bold">Pick if</text><text x="80" y="635" font-size="18" fill="#ffffff">You've quit goals before</text><text x="80" y="665" font-size="18" fill="#ffffff">You have 4+ small debts</text><text x="80" y="695" font-size="18" fill="#ffffff">You need momentum</text><text x="80" y="725" font-size="18" fill="#ffffff">Spouse/partner needs buy-in</text><text x="80" y="790" font-size="20" fill="#888">Avg extra cost: $1,500-3,000</text><rect x="570" y="130" width="470" height="700" fill="#1a1a2e" stroke="#6366f1" stroke-width="4" rx="12"/><text x="805" y="180" font-size="30" fill="#6366f1" text-anchor="middle" font-weight="bold">AVALANCHE</text><text x="805" y="215" font-size="20" fill="#ffffff" text-anchor="middle">(Highest APR first)</text><line x1="590" y1="240" x2="1020" y2="240" stroke="#6366f1"/><text x="590" y="285" font-size="22" fill="#ffd700" font-weight="bold">Strengths</text><text x="590" y="320" font-size="18" fill="#ffffff">+ Mathematically optimal</text><text x="590" y="350" font-size="18" fill="#ffffff">+ Saves most interest</text><text x="590" y="380" font-size="18" fill="#ffffff">+ Finishes fastest in months</text><text x="590" y="410" font-size="18" fill="#ffffff">+ Best ROI on every dollar</text><text x="590" y="465" font-size="22" fill="#ffd700" font-weight="bold">Weaknesses</text><text x="590" y="500" font-size="18" fill="#ffffff">- Slow visible progress if</text><text x="590" y="530" font-size="18" fill="#ffffff">  high-APR debt is large</text><text x="590" y="560" font-size="18" fill="#ffffff">- Easier to lose motivation</text><text x="590" y="600" font-size="22" fill="#6366f1" font-weight="bold">Pick if</text><text x="590" y="635" font-size="18" fill="#ffffff">You're discipline-driven</text><text x="590" y="665" font-size="18" fill="#ffffff">Your highest APR is huge gap</text><text x="590" y="695" font-size="18" fill="#ffffff">You're math-motivated</text><text x="590" y="725" font-size="18" fill="#ffffff">You track in a spreadsheet</text><text x="590" y="790" font-size="20" fill="#888">Avg saves: $1,500-3,000</text><text x="550" y="900" font-size="28" fill="#ffd700" text-anchor="middle" font-weight="bold">The best method is the one you finish</text><text x="550" y="950" font-size="22" fill="#ffffff" text-anchor="middle">Pick in 60 seconds — don't overthink. You can switch.</text><text x="550" y="1010" font-size="20" fill="#888" text-anchor="middle">Use undebt.it to run both and compare timelines</text></svg>`,
          caption: "Avalanche wins on math. Snowball wins on follow-through. Both beat doing nothing."
        }
      },
      {
        type: "example",
        title: "Sara's 5-Debt Plan — End-to-End",
        content: `**Sara's debts (total $24,600):** Medical bill $400 @ 0%, Store card $1,800 @ 26%, Visa $4,200 @ 22%, Auto loan $6,200 @ 7%, Student loan $12,000 @ 6%. Minimums total **$580/month**. Sara nets $4,200/month, spends $3,420 on essentials and minimums — leaving **$200 extra** to throw at debt. **Avalanche order**: Store (26%) → Visa (22%) → Auto (7%) → Student (6%) → Medical (0%, ignore until last). With $200 extra applied to the store card on top of its $50 minimum: **store gone in 11 months**. The freed-up $250 rolls to Visa → **Visa gone in month 26**. The rolling $370 attacks the auto → **auto gone in month 38**. Student loan gets $470/month → **gone month 64**. Medical bill stays at $25/min throughout → cleared month 16. **Total: 64 months / 5.3 years. Interest paid: $4,180.** Snowball version finishes month 67 and pays $4,690 — $510 more.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="60" font-size="36" fill="#ffd700" text-anchor="middle" font-weight="bold">Sara's Debt Inventory</text><text x="80" y="120" font-size="20" fill="#ffd700" font-weight="bold">Debt</text><text x="380" y="120" font-size="20" fill="#ffd700" font-weight="bold">Balance</text><text x="580" y="120" font-size="20" fill="#ffd700" font-weight="bold">APR</text><text x="730" y="120" font-size="20" fill="#ffd700" font-weight="bold">Min</text><text x="880" y="120" font-size="20" fill="#ffd700" font-weight="bold">Order</text><line x1="60" y1="135" x2="1040" y2="135" stroke="#888"/><text x="80" y="175" font-size="20" fill="#ffffff">Medical bill</text><text x="380" y="175" font-size="20" fill="#ffffff">$400</text><text x="580" y="175" font-size="20" fill="#10b981">0%</text><text x="730" y="175" font-size="20" fill="#ffffff">$25</text><text x="880" y="175" font-size="20" fill="#888">last</text><text x="80" y="215" font-size="20" fill="#ffffff">Store card</text><text x="380" y="215" font-size="20" fill="#ffffff">$1,800</text><text x="580" y="215" font-size="20" fill="#ef4444">26%</text><text x="730" y="215" font-size="20" fill="#ffffff">$50</text><text x="880" y="215" font-size="22" fill="#ffd700" font-weight="bold">1</text><text x="80" y="255" font-size="20" fill="#ffffff">Visa</text><text x="380" y="255" font-size="20" fill="#ffffff">$4,200</text><text x="580" y="255" font-size="20" fill="#ef4444">22%</text><text x="730" y="255" font-size="20" fill="#ffffff">$105</text><text x="880" y="255" font-size="22" fill="#ffd700" font-weight="bold">2</text><text x="80" y="295" font-size="20" fill="#ffffff">Auto loan</text><text x="380" y="295" font-size="20" fill="#ffffff">$6,200</text><text x="580" y="295" font-size="20" fill="#f59e0b">7%</text><text x="730" y="295" font-size="20" fill="#ffffff">$200</text><text x="880" y="295" font-size="22" fill="#ffd700" font-weight="bold">3</text><text x="80" y="335" font-size="20" fill="#ffffff">Student loan</text><text x="380" y="335" font-size="20" fill="#ffffff">$12,000</text><text x="580" y="335" font-size="20" fill="#f59e0b">6%</text><text x="730" y="335" font-size="20" fill="#ffffff">$200</text><text x="880" y="335" font-size="22" fill="#ffd700" font-weight="bold">4</text><line x1="60" y1="355" x2="1040" y2="355" stroke="#888"/><text x="80" y="395" font-size="22" fill="#ffd700" font-weight="bold">Total</text><text x="380" y="395" font-size="22" fill="#ffd700" font-weight="bold">$24,600</text><text x="730" y="395" font-size="22" fill="#ffd700" font-weight="bold">$580</text><text x="550" y="465" font-size="28" fill="#ffd700" text-anchor="middle" font-weight="bold">Avalanche Timeline ($200 extra/month)</text><rect x="100" y="495" width="900" height="50" fill="#1a1a2e" stroke="#888" stroke-width="2" rx="6"/><rect x="100" y="495" width="155" height="50" fill="#ef4444" rx="6"/><text x="178" y="528" font-size="18" fill="#ffffff" text-anchor="middle">Store m1-11</text><rect x="255" y="495" width="210" height="50" fill="#ec4899" rx="6"/><text x="360" y="528" font-size="18" fill="#ffffff" text-anchor="middle">Visa m12-26</text><rect x="465" y="495" width="170" height="50" fill="#f59e0b" rx="6"/><text x="550" y="528" font-size="18" fill="#1a1a2e" text-anchor="middle">Auto m27-38</text><rect x="635" y="495" width="365" height="50" fill="#0ea5e9" rx="6"/><text x="817" y="528" font-size="18" fill="#ffffff" text-anchor="middle">Student loan m39-64</text><text x="100" y="580" font-size="16" fill="#888">m0</text><text x="540" y="580" font-size="16" fill="#888">m32</text><text x="990" y="580" font-size="16" fill="#888">m64</text><text x="550" y="660" font-size="24" fill="#ffd700" text-anchor="middle" font-weight="bold">Result Comparison</text><rect x="100" y="690" width="430" height="240" fill="#1a1a2e" stroke="#6366f1" stroke-width="3" rx="10"/><text x="315" y="730" font-size="24" fill="#6366f1" text-anchor="middle" font-weight="bold">Avalanche</text><text x="315" y="780" font-size="20" fill="#ffffff" text-anchor="middle">Done: 64 months</text><text x="315" y="820" font-size="20" fill="#ffffff" text-anchor="middle">Interest: $4,180</text><text x="315" y="870" font-size="22" fill="#10b981" text-anchor="middle" font-weight="bold">Free on Oct 2031</text><rect x="570" y="690" width="430" height="240" fill="#1a1a2e" stroke="#10b981" stroke-width="3" rx="10"/><text x="785" y="730" font-size="24" fill="#10b981" text-anchor="middle" font-weight="bold">Snowball</text><text x="785" y="780" font-size="20" fill="#ffffff" text-anchor="middle">Done: 67 months</text><text x="785" y="820" font-size="20" fill="#ffffff" text-anchor="middle">Interest: $4,690</text><text x="785" y="870" font-size="22" fill="#f59e0b" text-anchor="middle" font-weight="bold">Costs $510 more</text><text x="550" y="990" font-size="22" fill="#ffd700" text-anchor="middle" font-weight="bold">Either way, Sara is debt-free before 2032</text><text x="550" y="1030" font-size="20" fill="#888" text-anchor="middle">$200/month + automation + 5 years = freedom</text></svg>`,
          caption: "Same income, same debts, same lifetime — the only variable was the plan."
        }
      },
      {
        type: "quiz",
        title: "Your Plan Buildout",
        question: "You finish your inventory: $1,200 medical at 0%, $3,500 credit card at 24%, $8,000 personal loan at 12%, $14,000 student loan at 6%. You have $250 extra/month after minimums. Using avalanche, what's the FIRST month's payment plan?",
        options: [
          { text: "Pay minimums on everything, throw $250 extra at the student loan since it's largest", correct: false },
          { text: "Pay minimums on student loan, personal loan, medical — throw all $250 extra plus the credit card minimum at the 24% credit card", correct: true },
          { text: "Split the $250 evenly across all four debts", correct: false },
          { text: "Pay off the $1,200 medical first since it's smallest (that's snowball)", correct: false }
        ],
        explanation: "Avalanche targets the highest APR first — that's the 24% credit card. The rule: pay minimums on every other debt to avoid penalties and credit damage, then stack your full extra payment ($250) PLUS the target debt's minimum on top of the target. You're not 'overpaying' the credit card — you're concentrating fire so the principal drops fast and interest charges shrink. Splitting evenly is the worst option because no debt gets killed fast enough to free up cash flow. Once the credit card is gone, the freed-up minimum + $250 rolls to the 12% personal loan.",
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" font-size="38" fill="#ffd700" text-anchor="middle" font-weight="bold">Month 1 — Avalanche Allocation</text><rect x="80" y="140" width="940" height="120" fill="#1a1a2e" stroke="#888" stroke-width="2" rx="10"/><text x="100" y="180" font-size="22" fill="#ffffff" font-weight="bold">Medical $1,200 @ 0%</text><text x="100" y="220" font-size="18" fill="#888">Minimum only — no interest accruing</text><text x="900" y="200" font-size="32" fill="#10b981" text-anchor="middle" font-weight="bold">$25</text><rect x="80" y="280" width="940" height="180" fill="#ef4444" rx="10"/><text x="100" y="320" font-size="24" fill="#ffffff" font-weight="bold">Credit Card $3,500 @ 24% — TARGET</text><text x="100" y="360" font-size="20" fill="#ffffff">Minimum: $90</text><text x="100" y="395" font-size="20" fill="#ffffff">+ Extra: $250</text><text x="100" y="435" font-size="20" fill="#ffd700" font-weight="bold">Total to this debt: $340</text><text x="900" y="380" font-size="40" fill="#ffd700" text-anchor="middle" font-weight="bold">$340</text><rect x="80" y="480" width="940" height="120" fill="#1a1a2e" stroke="#888" stroke-width="2" rx="10"/><text x="100" y="520" font-size="22" fill="#ffffff" font-weight="bold">Personal Loan $8,000 @ 12%</text><text x="100" y="560" font-size="18" fill="#888">Minimum only — wait its turn</text><text x="900" y="540" font-size="32" fill="#0ea5e9" text-anchor="middle" font-weight="bold">$180</text><rect x="80" y="620" width="940" height="120" fill="#1a1a2e" stroke="#888" stroke-width="2" rx="10"/><text x="100" y="660" font-size="22" fill="#ffffff" font-weight="bold">Student Loan $14,000 @ 6%</text><text x="100" y="700" font-size="18" fill="#888">Minimum only — wait its turn</text><text x="900" y="680" font-size="32" fill="#6366f1" text-anchor="middle" font-weight="bold">$160</text><line x1="80" y1="770" x2="1020" y2="770" stroke="#ffd700" stroke-width="2"/><text x="100" y="815" font-size="26" fill="#ffd700" font-weight="bold">Total month 1 outflow: $705</text><text x="100" y="855" font-size="22" fill="#ffffff">All four debts paid — only one targeted</text><text x="550" y="940" font-size="24" fill="#10b981" text-anchor="middle" font-weight="bold">Credit card gone in ~12 months</text><text x="550" y="980" font-size="22" fill="#ffffff" text-anchor="middle">Then $340 rolls to personal loan, etc.</text><text x="550" y="1040" font-size="20" fill="#888" text-anchor="middle">This is the snowball effect powering avalanche order</text></svg>`,
          caption: "Concentrate fire on the highest APR. Minimums everywhere else."
        }
      },
      {
        type: "application",
        title: "Automate, Check In, Finish",
        content: `**Automation kills the willpower tax.** Set every minimum on autopay through your bank or the lender's site, dated 2 days after payday. Set the **extra payment** as a recurring transfer the day after payday — into the target debt directly, so you never see the money in checking. Most people who try to "send extra when there's some left" send extra **zero times**. **Weekly check-in (10 minutes, same time):** open one spreadsheet or app (undebt.it, YNAB, Excel). Log each balance. Confirm autopay fired. Note one thing that changed (raise, surprise bill, etc.). Adjust target date if needed. **Monthly:** pull your credit report (free, weekly at AnnualCreditReport.com) and verify no surprises. **Quarterly:** ask your highest-APR remaining creditor for a rate reduction — say *"I've been current 12+ months, requesting an APR reduction."* Roughly 1 in 3 calls succeeds. **The plan is a one-page document. Print it. Tape it inside a cabinet. Cross out each debt as it dies. That's it.**`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" font-size="38" fill="#ffd700" text-anchor="middle" font-weight="bold">The Operating Rhythm</text><rect x="80" y="140" width="940" height="180" fill="#8b5cf6" rx="12"/><text x="550" y="185" font-size="28" fill="#ffffff" text-anchor="middle" font-weight="bold">Day 0 — Automate Everything</text><text x="550" y="225" font-size="20" fill="#ffffff" text-anchor="middle">Every minimum on autopay (2 days after payday)</text><text x="550" y="260" font-size="20" fill="#ffffff" text-anchor="middle">Extra payment auto-transfers to target debt</text><text x="550" y="295" font-size="20" fill="#ffd700" text-anchor="middle" font-weight="bold">Willpower removed from the loop</text><rect x="80" y="340" width="940" height="160" fill="#ec4899" rx="12"/><text x="550" y="385" font-size="28" fill="#ffffff" text-anchor="middle" font-weight="bold">Every Week — 10-min Check-in</text><text x="550" y="420" font-size="20" fill="#ffffff" text-anchor="middle">Same day, same time. Log balances.</text><text x="550" y="455" font-size="20" fill="#ffffff" text-anchor="middle">Confirm autopay. Note any life change.</text><text x="550" y="490" font-size="18" fill="#ffd700" text-anchor="middle">Spreadsheet or undebt.it / YNAB</text><rect x="80" y="520" width="940" height="160" fill="#0ea5e9" rx="12"/><text x="550" y="565" font-size="28" fill="#ffffff" text-anchor="middle" font-weight="bold">Every Month — Credit Report Pull</text><text x="550" y="600" font-size="20" fill="#ffffff" text-anchor="middle">Free at AnnualCreditReport.com (weekly access)</text><text x="550" y="635" font-size="20" fill="#ffffff" text-anchor="middle">Verify no surprises, dispute errors</text><text x="550" y="670" font-size="18" fill="#ffd700" text-anchor="middle">Track score trend — it should rise monthly</text><rect x="80" y="700" width="940" height="160" fill="#10b981" rx="12"/><text x="550" y="745" font-size="28" fill="#1a1a2e" text-anchor="middle" font-weight="bold">Every Quarter — Ask for Rate Cut</text><text x="550" y="780" font-size="20" fill="#1a1a2e" text-anchor="middle">Call the highest remaining APR creditor</text><text x="550" y="815" font-size="20" fill="#1a1a2e" text-anchor="middle">"12+ months current — APR reduction please"</text><text x="550" y="850" font-size="18" fill="#1a1a2e" text-anchor="middle">~1 in 3 calls work. Free 5-minute phone call.</text><text x="550" y="940" font-size="28" fill="#ffd700" text-anchor="middle" font-weight="bold">Print the plan. Tape it inside a cabinet.</text><text x="550" y="985" font-size="22" fill="#ffffff" text-anchor="middle">Cross out each debt as it dies.</text><text x="550" y="1040" font-size="22" fill="#10b981" text-anchor="middle" font-weight="bold">That's the whole system. Go finish it.</text></svg>`,
          caption: "Automate, then check in. The rhythm carries you across the finish line."
        }
      }
    ]
  }
],
        },
        {
            id: 'pf-emergency-fund',
            title: 'The Emergency Fund: Sizing, Where to Hold It, When to Use It',
            author: 'Synthesis Learning',
            description: 'How much you actually need (1/3/6/12 months by life stage), high-yield savings vs. money market vs. T-bills, and what counts as a real emergency.',
            lessons: 3, duration: 45, progress: 0, category: 'personal-finance-track',
            lessonList: [
{
    id: "pf-emergency-fund-lesson-1",
    title: "Why Emergency Funds Are Different from Savings",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "Two Different Buckets",
        content: `**Savings** and an **emergency fund** look identical in your bank app — both are cash sitting in an account. But they serve **opposite purposes**, and confusing them is one of the most expensive mistakes in personal finance.

**Savings** funds **planned, known goals**: a $3,000 vacation in July, a $25,000 car in 18 months, a $60,000 house down payment in 3 years. You know the **amount** and the **date**.

An **emergency fund** funds **unplanned shocks** — the things you cannot predict: a layoff, a $1,800 transmission, a hospital deductible, a flooded basement. You know **neither the amount nor the date**.

A Federal Reserve survey found **37% of Americans** cannot cover a $400 unexpected expense with cash. That gap is what an emergency fund closes — turning a financial **catastrophe** into a financial **inconvenience**.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="80" text-anchor="middle" fill="#ffd700" font-size="42" font-weight="bold">Two Buckets, Two Purposes</text><rect x="80" y="160" width="440" height="780" rx="20" fill="#0ea5e9" opacity="0.18" stroke="#0ea5e9" stroke-width="4"/><text x="300" y="230" text-anchor="middle" fill="#0ea5e9" font-size="38" font-weight="bold">SAVINGS</text><text x="300" y="280" text-anchor="middle" fill="#ffffff" font-size="22">Planned Goals</text><text x="300" y="360" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">You Know:</text><text x="300" y="400" text-anchor="middle" fill="#ffffff" font-size="20">• The amount</text><text x="300" y="435" text-anchor="middle" fill="#ffffff" font-size="20">• The date</text><text x="300" y="510" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">Examples:</text><text x="300" y="555" text-anchor="middle" fill="#ffffff" font-size="19">Vacation $3,000</text><text x="300" y="595" text-anchor="middle" fill="#ffffff" font-size="19">New car $25,000</text><text x="300" y="635" text-anchor="middle" fill="#ffffff" font-size="19">Down payment $60k</text><text x="300" y="675" text-anchor="middle" fill="#ffffff" font-size="19">Wedding $15,000</text><text x="300" y="780" text-anchor="middle" fill="#10b981" font-size="22" font-weight="bold">Spend it on purpose</text><rect x="580" y="160" width="440" height="780" rx="20" fill="#ef4444" opacity="0.18" stroke="#ef4444" stroke-width="4"/><text x="800" y="230" text-anchor="middle" fill="#ef4444" font-size="38" font-weight="bold">EMERGENCY FUND</text><text x="800" y="280" text-anchor="middle" fill="#ffffff" font-size="22">Unplanned Shocks</text><text x="800" y="360" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">You Don't Know:</text><text x="800" y="400" text-anchor="middle" fill="#ffffff" font-size="20">• The amount</text><text x="800" y="435" text-anchor="middle" fill="#ffffff" font-size="20">• The date</text><text x="800" y="510" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">Examples:</text><text x="800" y="555" text-anchor="middle" fill="#ffffff" font-size="19">Layoff (3-month gap)</text><text x="800" y="595" text-anchor="middle" fill="#ffffff" font-size="19">Transmission $1,800</text><text x="800" y="635" text-anchor="middle" fill="#ffffff" font-size="19">ER + deductible $2k</text><text x="800" y="675" text-anchor="middle" fill="#ffffff" font-size="19">Roof leak $5,000</text><text x="800" y="780" text-anchor="middle" fill="#10b981" font-size="22" font-weight="bold">Hope you never spend it</text><text x="550" y="1000" text-anchor="middle" fill="#888" font-size="22" font-style="italic">Same dollars. Opposite jobs.</text><text x="550" y="1050" text-anchor="middle" fill="#ef4444" font-size="26" font-weight="bold">37% of Americans can't cover a $400 surprise</text></svg>`,
          caption: "Savings funds known goals. Emergency funds cover unknowns."
        }
      },
      {
        type: "concept",
        title: "The Bridge Between Debt and Investing",
        content: `An emergency fund sits in a specific **place in your financial order of operations** — it's the **bridge** between paying off high-interest debt and starting to invest meaningfully.

**Standard order of operations:**
1. **Starter fund** ($1,000 buffer)
2. **Kill high-interest debt** (credit cards, 18%+ APR)
3. **Build full emergency fund** (3-6 months expenses)
4. **Invest** for retirement, growth, long-term goals

Without the fund, an unexpected $2,000 car repair forces you back onto **credit cards at 24% APR**, undoing months of debt progress. Without the fund, a layoff forces you to **sell investments at the worst possible time** — typically during a recession when stocks are already down 30%.

The emergency fund is **psychological insurance**: it lets you take **investment risk** confidently, because you know a single bad month won't blow up your plan.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="40" font-weight="bold">Order of Operations</text><rect x="100" y="140" width="900" height="130" rx="15" fill="#ef4444" opacity="0.25" stroke="#ef4444" stroke-width="3"/><text x="160" y="200" fill="#ef4444" font-size="50" font-weight="bold">1</text><text x="240" y="195" fill="#ffffff" font-size="28" font-weight="bold">Starter Fund</text><text x="240" y="235" fill="#888" font-size="22">$1,000 buffer — stop the bleeding</text><rect x="100" y="290" width="900" height="130" rx="15" fill="#f59e0b" opacity="0.25" stroke="#f59e0b" stroke-width="3"/><text x="160" y="350" fill="#f59e0b" font-size="50" font-weight="bold">2</text><text x="240" y="345" fill="#ffffff" font-size="28" font-weight="bold">Kill High-Interest Debt</text><text x="240" y="385" fill="#888" font-size="22">Credit cards, payday loans (18%+ APR)</text><rect x="100" y="440" width="900" height="130" rx="15" fill="#0ea5e9" opacity="0.25" stroke="#0ea5e9" stroke-width="5"/><text x="160" y="500" fill="#0ea5e9" font-size="50" font-weight="bold">3</text><text x="240" y="495" fill="#ffffff" font-size="28" font-weight="bold">Full Emergency Fund</text><text x="240" y="535" fill="#0ea5e9" font-size="22" font-weight="bold">3-6 months of expenses — THE BRIDGE</text><rect x="100" y="590" width="900" height="130" rx="15" fill="#10b981" opacity="0.25" stroke="#10b981" stroke-width="3"/><text x="160" y="650" fill="#10b981" font-size="50" font-weight="bold">4</text><text x="240" y="645" fill="#ffffff" font-size="28" font-weight="bold">Invest for the Long Term</text><text x="240" y="685" fill="#888" font-size="22">401(k), IRA, brokerage — 7%+ real return</text><rect x="100" y="770" width="900" height="280" rx="20" fill="#8b5cf6" opacity="0.18" stroke="#8b5cf6" stroke-width="3"/><text x="550" y="820" text-anchor="middle" fill="#8b5cf6" font-size="26" font-weight="bold">Without the Fund:</text><text x="550" y="870" text-anchor="middle" fill="#ffffff" font-size="22">$2,000 repair → back on 24% APR credit card</text><text x="550" y="910" text-anchor="middle" fill="#ffffff" font-size="22">Layoff → sell stocks during a 30% crash</text><text x="550" y="970" text-anchor="middle" fill="#ffd700" font-size="22" font-style="italic">The fund makes every other step possible.</text></svg>`,
          caption: "Emergency fund sits between debt payoff and investing — it protects both."
        }
      },
      {
        type: "example",
        title: "Same Crisis, Two Outcomes",
        content: `**Sarah** and **Marcus** both earn $5,000/month. Both are laid off in March. Both find new jobs by mid-June — a **3.5-month gap**.

**Sarah** has **no emergency fund**. She charges rent ($1,400), groceries, and gas to a credit card for 3 months — racking up **$11,500 at 24% APR**. By the time she's employed again, the minimum payments eat $310/month for **4+ years**. Total interest paid: **$5,800**.

**Marcus** has **4 months of expenses** ($14,000) in a high-yield savings account. He withdraws $3,500/month, lives normally, and even takes an extra week to find a **better-paying** job rather than grabbing the first offer. He returns to work with **$0 of debt** and refills the fund over 12 months from his higher salary.

**Same crisis. Same paycheck. Different bank balance four years later: ~$30,000.**`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="38" font-weight="bold">Same Layoff. Different Outcomes.</text><rect x="60" y="120" width="480" height="880" rx="20" fill="#ef4444" opacity="0.15" stroke="#ef4444" stroke-width="3"/><text x="300" y="180" text-anchor="middle" fill="#ef4444" font-size="32" font-weight="bold">SARAH</text><text x="300" y="215" text-anchor="middle" fill="#ffffff" font-size="20">No emergency fund</text><line x1="100" y1="245" x2="500" y2="245" stroke="#ef4444" stroke-width="2"/><text x="300" y="290" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">During 3.5-mo gap:</text><text x="300" y="330" text-anchor="middle" fill="#ffffff" font-size="19">Credit card balance climbs</text><text x="300" y="365" text-anchor="middle" fill="#ffffff" font-size="19">to $11,500 @ 24% APR</text><text x="300" y="430" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">Job pressure:</text><text x="300" y="470" text-anchor="middle" fill="#ffffff" font-size="19">Takes first offer to stop</text><text x="300" y="505" text-anchor="middle" fill="#ffffff" font-size="19">the bleeding</text><text x="300" y="570" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">After 4 years:</text><text x="300" y="615" text-anchor="middle" fill="#ef4444" font-size="22" font-weight="bold">$5,800 in interest paid</text><text x="300" y="655" text-anchor="middle" fill="#ffffff" font-size="19">$310/mo gone for years</text><text x="300" y="780" text-anchor="middle" fill="#ef4444" font-size="42" font-weight="bold">- $17,300</text><text x="300" y="820" text-anchor="middle" fill="#ffffff" font-size="18">debt + lost opportunity</text><rect x="560" y="120" width="480" height="880" rx="20" fill="#10b981" opacity="0.15" stroke="#10b981" stroke-width="3"/><text x="800" y="180" text-anchor="middle" fill="#10b981" font-size="32" font-weight="bold">MARCUS</text><text x="800" y="215" text-anchor="middle" fill="#ffffff" font-size="20">$14,000 in HYSA</text><line x1="600" y1="245" x2="1000" y2="245" stroke="#10b981" stroke-width="2"/><text x="800" y="290" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">During 3.5-mo gap:</text><text x="800" y="330" text-anchor="middle" fill="#ffffff" font-size="19">Withdraws $3,500/mo</text><text x="800" y="365" text-anchor="middle" fill="#ffffff" font-size="19">Lives normally</text><text x="800" y="430" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">Job pressure:</text><text x="800" y="470" text-anchor="middle" fill="#ffffff" font-size="19">Takes extra week,</text><text x="800" y="505" text-anchor="middle" fill="#ffffff" font-size="19">lands higher salary</text><text x="800" y="570" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">After 4 years:</text><text x="800" y="615" text-anchor="middle" fill="#10b981" font-size="22" font-weight="bold">$0 debt, fund refilled</text><text x="800" y="655" text-anchor="middle" fill="#ffffff" font-size="19">Compounding ahead</text><text x="800" y="780" text-anchor="middle" fill="#10b981" font-size="42" font-weight="bold">+ $12,000</text><text x="800" y="820" text-anchor="middle" fill="#ffffff" font-size="18">net of fund replenished</text><text x="550" y="1060" text-anchor="middle" fill="#ffd700" font-size="26" font-weight="bold">Gap between them: ~$30,000</text></svg>`,
          caption: "The fund changes the crisis from a catastrophe into an inconvenience."
        }
      },
      {
        type: "quiz",
        title: "Knowledge Check",
        question: "Why is it a bad idea to keep an emergency fund invested in the stock market?",
        options: [
          { text: "Stocks have low long-term returns", correct: false },
          { text: "Stocks can drop 30%+ exactly when emergencies cluster (recessions, layoffs), forcing you to sell at the worst time", correct: true },
          { text: "Brokerages charge withdrawal fees", correct: false },
          { text: "It's illegal to hold emergency funds in stocks", correct: false }
        ],
        explanation: "Emergencies and market crashes correlate: recessions trigger both layoffs AND stock drops. A fund that's down 35% when you also lose your job has failed at its one job — being there when you need it. Stocks have great long-term returns, but emergency funds need stable principal, not growth.",
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="80" text-anchor="middle" fill="#ffd700" font-size="38" font-weight="bold">Emergencies Cluster with Crashes</text><rect x="100" y="140" width="900" height="500" rx="15" fill="#16213e" stroke="#888" stroke-width="2"/><line x1="150" y1="600" x2="950" y2="600" stroke="#888" stroke-width="2"/><line x1="150" y1="180" x2="150" y2="600" stroke="#888" stroke-width="2"/><polyline points="150,300 250,290 350,310 450,500 550,560 650,540 750,420 850,380 950,360" fill="none" stroke="#ef4444" stroke-width="5"/><text x="950" y="630" text-anchor="end" fill="#888" font-size="18">2008</text><text x="150" y="630" fill="#888" font-size="18">2006</text><text x="500" y="200" text-anchor="middle" fill="#ef4444" font-size="26" font-weight="bold">S&amp;P 500 fell 37%</text><circle cx="500" cy="510" r="12" fill="#ffd700"/><text x="520" y="495" fill="#ffd700" font-size="20">← You get laid off here</text><rect x="100" y="690" width="900" height="320" rx="15" fill="#ef4444" opacity="0.15" stroke="#ef4444" stroke-width="3"/><text x="550" y="740" text-anchor="middle" fill="#ef4444" font-size="26" font-weight="bold">The Trap</text><text x="550" y="790" text-anchor="middle" fill="#ffffff" font-size="22">$15,000 in stocks → worth $9,450 during crash</text><text x="550" y="830" text-anchor="middle" fill="#ffffff" font-size="22">Sell to cover rent → lock in $5,550 loss</text><text x="550" y="880" text-anchor="middle" fill="#ffffff" font-size="22">Market recovers 2 years later → you missed it</text><text x="550" y="960" text-anchor="middle" fill="#ffd700" font-size="22" font-style="italic">Emergency funds need stable principal,</text><text x="550" y="990" text-anchor="middle" fill="#ffd700" font-size="22" font-style="italic">not the highest return.</text></svg>`,
          caption: "Stock losses and emergencies tend to happen at the same time."
        }
      },
      {
        type: "application",
        title: "Build Your Starter Fund This Month",
        content: `Before you tackle anything else, get to a **$1,000 starter fund** — the minimum buffer that stops most small emergencies from cascading into credit card debt.

**This week, do exactly this:**
1. **Open a separate high-yield savings account** at Ally, Marcus, Wealthfront, or Capital One 360 — keep it **out of your checking app** so you don't see it daily.
2. **Name the account** "Emergency Fund — Do Not Touch."
3. **Calculate the gap**: $1,000 minus what's already there.
4. **Set an automatic transfer** of $50-$200/week from checking until it hits $1,000.
5. **Sell one thing** (an unused bike, an old gaming console) to jump-start it.

Most people reach $1,000 in **6-10 weeks**. Once you're there, you've **broken the cycle** where every small surprise lands on a credit card. That is the first real moment of financial breathing room.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="80" text-anchor="middle" fill="#ffd700" font-size="40" font-weight="bold">Your $1,000 Starter Plan</text><rect x="80" y="140" width="940" height="130" rx="15" fill="#0ea5e9" opacity="0.18" stroke="#0ea5e9" stroke-width="3"/><text x="140" y="205" fill="#0ea5e9" font-size="44" font-weight="bold">1</text><text x="210" y="195" fill="#ffffff" font-size="24" font-weight="bold">Open a separate HYSA</text><text x="210" y="235" fill="#888" font-size="20">Ally, Marcus, Wealthfront, Capital One 360</text><rect x="80" y="290" width="940" height="130" rx="15" fill="#8b5cf6" opacity="0.18" stroke="#8b5cf6" stroke-width="3"/><text x="140" y="355" fill="#8b5cf6" font-size="44" font-weight="bold">2</text><text x="210" y="345" fill="#ffffff" font-size="24" font-weight="bold">Name it: "Do Not Touch"</text><text x="210" y="385" fill="#888" font-size="20">Hide it from your daily banking app</text><rect x="80" y="440" width="940" height="130" rx="15" fill="#f59e0b" opacity="0.18" stroke="#f59e0b" stroke-width="3"/><text x="140" y="505" fill="#f59e0b" font-size="44" font-weight="bold">3</text><text x="210" y="495" fill="#ffffff" font-size="24" font-weight="bold">Auto-transfer $50-$200/week</text><text x="210" y="535" fill="#888" font-size="20">Day after payday — pay yourself first</text><rect x="80" y="590" width="940" height="130" rx="15" fill="#ec4899" opacity="0.18" stroke="#ec4899" stroke-width="3"/><text x="140" y="655" fill="#ec4899" font-size="44" font-weight="bold">4</text><text x="210" y="645" fill="#ffffff" font-size="24" font-weight="bold">Sell one thing to jump-start</text><text x="210" y="685" fill="#888" font-size="20">Bike, console, old phone — instant $200-$500</text><rect x="80" y="740" width="940" height="130" rx="15" fill="#10b981" opacity="0.18" stroke="#10b981" stroke-width="3"/><text x="140" y="805" fill="#10b981" font-size="44" font-weight="bold">5</text><text x="210" y="795" fill="#ffffff" font-size="24" font-weight="bold">Hit $1,000 in 6-10 weeks</text><text x="210" y="835" fill="#888" font-size="20">Then move on to debt + full fund</text><text x="550" y="940" text-anchor="middle" fill="#ffd700" font-size="26" font-weight="bold">$1,000 = the end of the credit card panic spiral</text><text x="550" y="990" text-anchor="middle" fill="#ffffff" font-size="22" font-style="italic">This is the first real win in your finances.</text></svg>`,
          caption: "Five steps. Six to ten weeks. The starter fund is reachable for almost everyone."
        }
      }
    ]
  },
  {
    id: "pf-emergency-fund-lesson-2",
    title: "Sizing Your Fund by Life Stage",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "How Much Is Enough?",
        content: `"Three to six months of expenses" is the famous rule — but **it's wrong for most people** because it doesn't account for **your specific risk profile**.

The right size depends on three variables: **how stable your income is**, **how easy you'd be to replace at work**, and **how many people depend on your paycheck**.

A married accountant whose spouse also earns $80k needs **far less** than a single, commission-only realtor supporting two kids. They're not in the same risk class.

The tiered approach below scales to **your actual life**, not an average:
- **$1,000 starter** — while paying down debt
- **1 month** — renter, stable W-2, dual income
- **3 months** — typical adult, the industry default
- **6 months** — single income, homeowner, or family
- **12 months** — self-employed, commissioned, freelance, seasonal

The goal isn't maximum cushion. It's **calibrated cushion**.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="40" font-weight="bold">The Sizing Tiers</text><text x="550" y="115" text-anchor="middle" fill="#888" font-size="22">Match the fund to your risk profile</text><rect x="80" y="160" width="940" height="120" rx="12" fill="#ef4444" opacity="0.22" stroke="#ef4444" stroke-width="3"/><text x="160" y="225" fill="#ef4444" font-size="36" font-weight="bold">$1,000</text><text x="450" y="210" fill="#ffffff" font-size="24" font-weight="bold">Starter (Step 1)</text><text x="450" y="245" fill="#888" font-size="20">Still paying off high-interest debt</text><rect x="80" y="300" width="940" height="120" rx="12" fill="#f59e0b" opacity="0.22" stroke="#f59e0b" stroke-width="3"/><text x="160" y="365" fill="#f59e0b" font-size="36" font-weight="bold">1 mo</text><text x="450" y="350" fill="#ffffff" font-size="24" font-weight="bold">Renter, stable W-2, dual income</text><text x="450" y="385" fill="#888" font-size="20">Low fixed costs, partner safety net</text><rect x="80" y="440" width="940" height="120" rx="12" fill="#0ea5e9" opacity="0.22" stroke="#0ea5e9" stroke-width="4"/><text x="160" y="505" fill="#0ea5e9" font-size="36" font-weight="bold">3 mo</text><text x="450" y="490" fill="#ffffff" font-size="24" font-weight="bold">Typical adult ← Industry default</text><text x="450" y="525" fill="#888" font-size="20">Covers typical 2-3 month job search</text><rect x="80" y="580" width="940" height="120" rx="12" fill="#8b5cf6" opacity="0.22" stroke="#8b5cf6" stroke-width="3"/><text x="160" y="645" fill="#8b5cf6" font-size="36" font-weight="bold">6 mo</text><text x="450" y="630" fill="#ffffff" font-size="24" font-weight="bold">Single income OR homeowner OR kids</text><text x="450" y="665" fill="#888" font-size="20">Mortgage + dependents = bigger floor</text><rect x="80" y="720" width="940" height="120" rx="12" fill="#10b981" opacity="0.22" stroke="#10b981" stroke-width="3"/><text x="160" y="785" fill="#10b981" font-size="36" font-weight="bold">12 mo</text><text x="450" y="770" fill="#ffffff" font-size="24" font-weight="bold">Self-employed / commission / seasonal</text><text x="450" y="805" fill="#888" font-size="20">Lumpy income = bigger buffer</text><text x="550" y="900" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">Pick the tier that matches your reality</text><text x="550" y="945" text-anchor="middle" fill="#ffffff" font-size="20">Not your worst fear. Not "what feels safe."</text><text x="550" y="980" text-anchor="middle" fill="#ffffff" font-size="20">Your actual risk profile.</text></svg>`,
          caption: "Calibrated cushion: the right size depends on income stability and dependents."
        }
      },
      {
        type: "concept",
        title: "Calculate Your Bare-Bones Monthly",
        content: `Your emergency fund covers **bare-bones survival expenses**, NOT your current spending. This distinction matters: if you lose your job, you'd cancel streaming, stop dining out, and skip travel. The fund only has to cover what you **literally cannot stop paying**.

**Include (essential):**
- **Housing**: rent or mortgage + property tax + HOA
- **Utilities**: electric, gas, water, internet
- **Food**: groceries (not restaurants)
- **Transportation**: gas, insurance, minimum auto loan
- **Insurance**: health, auto, life premiums
- **Minimum debt payments**: cards, student loans
- **Childcare**: if you'd lose your spot by stopping

**Exclude (discretionary):**
- Restaurants, takeout, coffee out
- Streaming, gym, subscriptions
- Travel, entertainment, hobbies
- Retirement contributions (pause in true emergency)

**Example**: someone spending $5,000/month normally might only need **$3,200/month** bare-bones. Their 3-month fund = $9,600, not $15,000.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="38" font-weight="bold">Bare-Bones, Not Normal Spending</text><rect x="60" y="130" width="500" height="800" rx="15" fill="#10b981" opacity="0.15" stroke="#10b981" stroke-width="3"/><text x="310" y="185" text-anchor="middle" fill="#10b981" font-size="28" font-weight="bold">INCLUDE</text><text x="310" y="215" text-anchor="middle" fill="#888" font-size="18">Can't be cancelled</text><text x="90" y="280" fill="#ffffff" font-size="20">Housing (rent/mortgage)</text><text x="450" y="280" text-anchor="end" fill="#ffd700" font-size="20" font-weight="bold">$1,400</text><text x="90" y="325" fill="#ffffff" font-size="20">Utilities + internet</text><text x="450" y="325" text-anchor="end" fill="#ffd700" font-size="20" font-weight="bold">$220</text><text x="90" y="370" fill="#ffffff" font-size="20">Groceries</text><text x="450" y="370" text-anchor="end" fill="#ffd700" font-size="20" font-weight="bold">$500</text><text x="90" y="415" fill="#ffffff" font-size="20">Gas + auto insurance</text><text x="450" y="415" text-anchor="end" fill="#ffd700" font-size="20" font-weight="bold">$340</text><text x="90" y="460" fill="#ffffff" font-size="20">Health insurance</text><text x="450" y="460" text-anchor="end" fill="#ffd700" font-size="20" font-weight="bold">$280</text><text x="90" y="505" fill="#ffffff" font-size="20">Min. debt payments</text><text x="450" y="505" text-anchor="end" fill="#ffd700" font-size="20" font-weight="bold">$320</text><text x="90" y="550" fill="#ffffff" font-size="20">Phone</text><text x="450" y="550" text-anchor="end" fill="#ffd700" font-size="20" font-weight="bold">$60</text><text x="90" y="595" fill="#ffffff" font-size="20">Childcare (if applicable)</text><text x="450" y="595" text-anchor="end" fill="#ffd700" font-size="20" font-weight="bold">$80</text><line x1="80" y1="640" x2="540" y2="640" stroke="#10b981" stroke-width="2"/><text x="90" y="685" fill="#ffffff" font-size="22" font-weight="bold">Bare-bones total:</text><text x="450" y="685" text-anchor="end" fill="#10b981" font-size="28" font-weight="bold">$3,200</text><text x="310" y="780" text-anchor="middle" fill="#ffffff" font-size="20">3-month fund:</text><text x="310" y="820" text-anchor="middle" fill="#10b981" font-size="32" font-weight="bold">$9,600</text><rect x="580" y="130" width="460" height="800" rx="15" fill="#ef4444" opacity="0.15" stroke="#ef4444" stroke-width="3"/><text x="810" y="185" text-anchor="middle" fill="#ef4444" font-size="28" font-weight="bold">EXCLUDE</text><text x="810" y="215" text-anchor="middle" fill="#888" font-size="18">Can be paused</text><text x="610" y="280" fill="#ffffff" font-size="20">Restaurants / coffee</text><text x="1020" y="280" text-anchor="end" fill="#888" font-size="20">$400</text><text x="610" y="325" fill="#ffffff" font-size="20">Streaming, gym</text><text x="1020" y="325" text-anchor="end" fill="#888" font-size="20">$80</text><text x="610" y="370" fill="#ffffff" font-size="20">Travel, hobbies</text><text x="1020" y="370" text-anchor="end" fill="#888" font-size="20">$300</text><text x="610" y="415" fill="#ffffff" font-size="20">Shopping</text><text x="1020" y="415" text-anchor="end" fill="#888" font-size="20">$250</text><text x="610" y="460" fill="#ffffff" font-size="20">401(k) (pause it)</text><text x="1020" y="460" text-anchor="end" fill="#888" font-size="20">$500</text><text x="610" y="505" fill="#ffffff" font-size="20">Extra debt payoff</text><text x="1020" y="505" text-anchor="end" fill="#888" font-size="20">$270</text><line x1="600" y1="550" x2="1030" y2="550" stroke="#ef4444" stroke-width="2"/><text x="610" y="600" fill="#ffffff" font-size="22" font-weight="bold">Skipped:</text><text x="1020" y="600" text-anchor="end" fill="#ef4444" font-size="26" font-weight="bold">$1,800</text><text x="810" y="700" text-anchor="middle" fill="#ffffff" font-size="20">Normal: $5,000</text><text x="810" y="740" text-anchor="middle" fill="#ffffff" font-size="20">Bare-bones: $3,200</text><text x="810" y="790" text-anchor="middle" fill="#ffd700" font-size="22" font-style="italic">36% less to save</text><text x="550" y="1000" text-anchor="middle" fill="#ffd700" font-size="24" font-weight="bold">Right number is smaller than you think</text></svg>`,
          caption: "Cancel the cancellable. Fund the unstoppable. Save 30-40% on the target."
        }
      },
      {
        type: "example",
        title: "Three Real Sizing Decisions",
        content: `**Case 1 — Jamie, 25, renter, software engineer.**
W-2 income $95k, partner also W-2, no kids, $1,800/mo bare-bones. Job market hot.
→ **Target: 1 month = $1,800.** Risk is low; building investments matters more than over-funding cash.

**Case 2 — Priya & Raj, 38, homeowners, one income, 2 kids.**
Priya is staff nurse ($82k), Raj stays home. Bare-bones $4,800/mo. Mortgage = no flexibility.
→ **Target: 6 months = $28,800.** One paycheck supports four people; a layoff is a major event. Larger cushion buys patience to find the right next job.

**Case 3 — Carlos, 41, commissioned sales.**
Income swings $5k-$18k/month. Bare-bones $5,500. Average year $130k, but a bad quarter is real.
→ **Target: 12 months = $66,000.** Income volatility is the risk. The fund smooths the lumps and prevents desperate deal-taking that hurts long-term earnings.

**Same expenses, different fund sizes. Risk profile drives the answer.**`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="38" font-weight="bold">Three Real Sizing Decisions</text><rect x="60" y="130" width="320" height="800" rx="15" fill="#10b981" opacity="0.15" stroke="#10b981" stroke-width="3"/><text x="220" y="180" text-anchor="middle" fill="#10b981" font-size="26" font-weight="bold">JAMIE, 25</text><text x="220" y="215" text-anchor="middle" fill="#888" font-size="18">Renter • SWE • Dual income</text><text x="220" y="285" text-anchor="middle" fill="#ffffff" font-size="18">W-2: $95k</text><text x="220" y="320" text-anchor="middle" fill="#ffffff" font-size="18">No kids</text><text x="220" y="355" text-anchor="middle" fill="#ffffff" font-size="18">Hot job market</text><text x="220" y="430" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">Bare-bones</text><text x="220" y="465" text-anchor="middle" fill="#ffffff" font-size="20">$1,800/mo</text><text x="220" y="560" text-anchor="middle" fill="#10b981" font-size="22" font-weight="bold">Target: 1 mo</text><text x="220" y="630" text-anchor="middle" fill="#10b981" font-size="38" font-weight="bold">$1,800</text><text x="220" y="740" text-anchor="middle" fill="#888" font-size="16">Then invest the surplus</text><rect x="400" y="130" width="320" height="800" rx="15" fill="#8b5cf6" opacity="0.15" stroke="#8b5cf6" stroke-width="3"/><text x="560" y="180" text-anchor="middle" fill="#8b5cf6" font-size="26" font-weight="bold">PRIYA &amp; RAJ, 38</text><text x="560" y="215" text-anchor="middle" fill="#888" font-size="18">Homeowner • 1 income • 2 kids</text><text x="560" y="285" text-anchor="middle" fill="#ffffff" font-size="18">Priya: $82k nurse</text><text x="560" y="320" text-anchor="middle" fill="#ffffff" font-size="18">Raj: stay-at-home</text><text x="560" y="355" text-anchor="middle" fill="#ffffff" font-size="18">Mortgage = fixed</text><text x="560" y="430" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">Bare-bones</text><text x="560" y="465" text-anchor="middle" fill="#ffffff" font-size="20">$4,800/mo</text><text x="560" y="560" text-anchor="middle" fill="#8b5cf6" font-size="22" font-weight="bold">Target: 6 mo</text><text x="560" y="630" text-anchor="middle" fill="#8b5cf6" font-size="38" font-weight="bold">$28,800</text><text x="560" y="740" text-anchor="middle" fill="#888" font-size="16">Time to find right job</text><rect x="740" y="130" width="320" height="800" rx="15" fill="#ef4444" opacity="0.15" stroke="#ef4444" stroke-width="3"/><text x="900" y="180" text-anchor="middle" fill="#ef4444" font-size="26" font-weight="bold">CARLOS, 41</text><text x="900" y="215" text-anchor="middle" fill="#888" font-size="18">Commission sales</text><text x="900" y="285" text-anchor="middle" fill="#ffffff" font-size="18">$5k-$18k/mo swings</text><text x="900" y="320" text-anchor="middle" fill="#ffffff" font-size="18">Avg year $130k</text><text x="900" y="355" text-anchor="middle" fill="#ffffff" font-size="18">Lumpy income</text><text x="900" y="430" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">Bare-bones</text><text x="900" y="465" text-anchor="middle" fill="#ffffff" font-size="20">$5,500/mo</text><text x="900" y="560" text-anchor="middle" fill="#ef4444" font-size="22" font-weight="bold">Target: 12 mo</text><text x="900" y="630" text-anchor="middle" fill="#ef4444" font-size="38" font-weight="bold">$66,000</text><text x="900" y="740" text-anchor="middle" fill="#888" font-size="16">Smooths the lumps</text><text x="550" y="1010" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">Risk profile drives the size — not income level</text></svg>`,
          caption: "Three real households. Three different right answers."
        }
      },
      {
        type: "quiz",
        title: "Knowledge Check",
        question: "A freelance graphic designer with two kids and a mortgage has $4,500/month bare-bones expenses. Which fund target fits best?",
        options: [
          { text: "$1,000 starter — they have skills, they'll be fine", correct: false },
          { text: "3 months = $13,500 — the industry standard works for everyone", correct: false },
          { text: "12 months = $54,000 — self-employed with dependents and a mortgage is the highest-risk profile", correct: true },
          { text: "24 months = $108,000 — better safe than sorry, hoard cash", correct: false }
        ],
        explanation: "This person hits three risk multipliers: (1) self-employed/freelance income is lumpy and lacks unemployment benefits, (2) dependents, (3) a mortgage with no flexibility. That's the 12-month tier. 24 months is over-funding — cash dragging at 4% when long-term investments earn 7-10% real means leaving real wealth on the table.",
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="80" text-anchor="middle" fill="#ffd700" font-size="38" font-weight="bold">Stack the Risk Multipliers</text><rect x="100" y="160" width="900" height="120" rx="15" fill="#ef4444" opacity="0.2" stroke="#ef4444" stroke-width="3"/><text x="150" y="225" fill="#ef4444" font-size="40" font-weight="bold">+</text><text x="210" y="215" fill="#ffffff" font-size="22" font-weight="bold">Self-employed / freelance</text><text x="210" y="250" fill="#888" font-size="19">Lumpy income, no unemployment insurance</text><rect x="100" y="300" width="900" height="120" rx="15" fill="#ef4444" opacity="0.2" stroke="#ef4444" stroke-width="3"/><text x="150" y="365" fill="#ef4444" font-size="40" font-weight="bold">+</text><text x="210" y="355" fill="#ffffff" font-size="22" font-weight="bold">Two dependents</text><text x="210" y="390" fill="#888" font-size="19">Kids' costs are non-negotiable</text><rect x="100" y="440" width="900" height="120" rx="15" fill="#ef4444" opacity="0.2" stroke="#ef4444" stroke-width="3"/><text x="150" y="505" fill="#ef4444" font-size="40" font-weight="bold">+</text><text x="210" y="495" fill="#ffffff" font-size="22" font-weight="bold">Homeowner with mortgage</text><text x="210" y="530" fill="#888" font-size="19">Can't move to cheaper place quickly</text><rect x="100" y="600" width="900" height="220" rx="15" fill="#10b981" opacity="0.2" stroke="#10b981" stroke-width="4"/><text x="550" y="660" text-anchor="middle" fill="#10b981" font-size="28" font-weight="bold">Highest-risk tier: 12 months</text><text x="550" y="720" text-anchor="middle" fill="#ffffff" font-size="24">$4,500 × 12 = $54,000</text><text x="550" y="780" text-anchor="middle" fill="#ffd700" font-size="22" font-style="italic">Calibrated to actual exposure</text><text x="550" y="880" text-anchor="middle" fill="#ef4444" font-size="22" font-weight="bold">$1,000 leaves them exposed</text><text x="550" y="940" text-anchor="middle" fill="#ef4444" font-size="22" font-weight="bold">24 months over-funds → cash drag on wealth</text></svg>`,
          caption: "Three risk multipliers stack into the highest-risk tier."
        }
      },
      {
        type: "application",
        title: "Run the Math on Your Number",
        content: `Pick up a piece of paper or open a spreadsheet right now and do this **15-minute exercise**:

**Step 1 — Bare-bones monthly.** List only the **must-pay** lines: housing, utilities, food, transportation, insurance, minimum debt payments, childcare. Total it. Most people land **30-40% below normal spending**.

**Step 2 — Pick your tier.** Score yourself:
- W-2 job in stable industry? **3 months**
- Dual income, low fixed costs? **1 month**
- Single income OR homeowner OR kids? **6 months**
- Self-employed/commissioned/freelance? **12 months**

**Step 3 — Multiply.** Bare-bones × tier months = your **target fund**.

**Step 4 — Subtract what you have.** Gap = what's left to save.

**Step 5 — Set the timeline.** Divide gap by **comfortable monthly savings** ($300? $800?). Most people fund 3 months in **12-18 months**.

Write the target on a sticky note and put it where you'll see it daily.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="40" font-weight="bold">Your 15-Minute Worksheet</text><rect x="80" y="130" width="940" height="700" rx="15" fill="#16213e" stroke="#ffd700" stroke-width="2"/><text x="120" y="190" fill="#0ea5e9" font-size="22" font-weight="bold">Step 1: Bare-bones monthly</text><line x1="600" y1="195" x2="980" y2="195" stroke="#888" stroke-width="1"/><text x="980" y="190" text-anchor="end" fill="#ffd700" font-size="22">$ ____________</text><text x="120" y="285" fill="#0ea5e9" font-size="22" font-weight="bold">Step 2: Your tier (months)</text><text x="140" y="320" fill="#888" font-size="18">Dual W-2 = 1 | Typical = 3 | Single/owner/kids = 6 | Self-emp = 12</text><line x1="600" y1="335" x2="980" y2="335" stroke="#888" stroke-width="1"/><text x="980" y="330" text-anchor="end" fill="#ffd700" font-size="22">____ months</text><text x="120" y="425" fill="#0ea5e9" font-size="22" font-weight="bold">Step 3: Target = Step 1 × Step 2</text><line x1="600" y1="475" x2="980" y2="475" stroke="#ffd700" stroke-width="3"/><text x="980" y="470" text-anchor="end" fill="#10b981" font-size="28" font-weight="bold">$ ____________</text><text x="120" y="565" fill="#0ea5e9" font-size="22" font-weight="bold">Step 4: Already saved</text><line x1="600" y1="615" x2="980" y2="615" stroke="#888" stroke-width="1"/><text x="980" y="610" text-anchor="end" fill="#ffd700" font-size="22">- $ ____________</text><text x="120" y="700" fill="#0ea5e9" font-size="22" font-weight="bold">Step 5: Gap remaining</text><line x1="600" y1="750" x2="980" y2="750" stroke="#ef4444" stroke-width="3"/><text x="980" y="745" text-anchor="end" fill="#ef4444" font-size="28" font-weight="bold">$ ____________</text><text x="120" y="800" fill="#888" font-size="20">÷ monthly savings = months to target</text><rect x="80" y="870" width="940" height="180" rx="15" fill="#10b981" opacity="0.18" stroke="#10b981" stroke-width="3"/><text x="550" y="930" text-anchor="middle" fill="#10b981" font-size="26" font-weight="bold">Put the target on a sticky note</text><text x="550" y="980" text-anchor="middle" fill="#ffffff" font-size="22">On your monitor. Mirror. Wallet.</text><text x="550" y="1020" text-anchor="middle" fill="#ffd700" font-size="22" font-style="italic">A goal you see daily is a goal you hit.</text></svg>`,
          caption: "Five lines on paper. Your exact target. Done in 15 minutes."
        }
      }
    ]
  },
  {
    id: "pf-emergency-fund-lesson-3",
    title: "Where to Hold It: HYSA, Money Market, Treasury Bills",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "The Access vs Yield Tradeoff",
        content: `Once you know **how much** to hold, the next question is **where**. The right place balances three properties:

1. **Liquidity** — how fast you can get the cash (same-day? 1 week? 1 month?)
2. **Yield** — what interest it earns
3. **Safety** — is the principal guaranteed?

The four real options in 2026:

- **High-Yield Savings Account (HYSA)** — same-day access, ~4-5% APY, FDIC-insured
- **Money Market Account (MMA)** — same-day, ~4-5%, sometimes check-writing
- **Treasury Bills (T-bills)** — 4 to 52 weeks, ~5%, state-tax-free, U.S. government-backed
- **I-Bonds** — inflation hedge, but **1-year lockup** (not a true emergency tool)

For most people, a **plain HYSA** is the right answer. For larger funds, a **HYSA + laddered T-bill** combo squeezes out 30-50 extra basis points without losing access.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="38" font-weight="bold">The Three Properties</text><circle cx="380" cy="450" r="200" fill="#0ea5e9" opacity="0.3" stroke="#0ea5e9" stroke-width="3"/><circle cx="720" cy="450" r="200" fill="#10b981" opacity="0.3" stroke="#10b981" stroke-width="3"/><circle cx="550" cy="700" r="200" fill="#ffd700" opacity="0.3" stroke="#ffd700" stroke-width="3"/><text x="280" y="370" text-anchor="middle" fill="#0ea5e9" font-size="28" font-weight="bold">Liquidity</text><text x="280" y="405" text-anchor="middle" fill="#ffffff" font-size="18">Same-day?</text><text x="820" y="370" text-anchor="middle" fill="#10b981" font-size="28" font-weight="bold">Yield</text><text x="820" y="405" text-anchor="middle" fill="#ffffff" font-size="18">~4-5%?</text><text x="550" y="800" text-anchor="middle" fill="#ffd700" font-size="28" font-weight="bold">Safety</text><text x="550" y="835" text-anchor="middle" fill="#ffffff" font-size="18">FDIC / Treasury</text><text x="550" y="560" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">SWEET</text><text x="550" y="595" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">SPOT</text><rect x="100" y="930" width="900" height="120" rx="15" fill="#16213e" stroke="#ffd700" stroke-width="2"/><text x="550" y="975" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">Emergency funds prioritize Liquidity + Safety</text><text x="550" y="1015" text-anchor="middle" fill="#ffffff" font-size="20">Yield is the bonus — never the goal</text></svg>`,
          caption: "Liquidity and safety are the requirements. Yield is the bonus."
        }
      },
      {
        type: "concept",
        title: "The Four Vehicles Compared",
        content: `**High-Yield Savings Account (HYSA)** — the default. Online banks (**Ally, Marcus by Goldman Sachs, Wealthfront Cash, Capital One 360, SoFi**) pay ~**4-5% APY** with **FDIC insurance up to $250k per depositor per bank**. Same-day transfers. Open in 10 minutes online.

**Money Market Account (MMA)** — similar yield, sometimes adds **check-writing or a debit card**. Watch for **Regulation D** — the old 6-withdrawal/month cap was relaxed in 2020, but **some banks kept the limit**. Read the fine print.

**Treasury Bills (T-bills)** — short-term U.S. government debt (**4, 8, 13, 17, 26, 52 weeks**). Buy at **TreasuryDirect.gov**, $100 minimum, ~5% yield. **No state income tax** — meaningful in CA, NY, OR. Backed by the U.S. Treasury (higher safety than FDIC banks). Locked until maturity.

**I-Bonds** — inflation-linked, capped at $10k/year, **1-year minimum hold**, 3-month interest penalty if cashed before 5 years. **Great inflation hedge, not great for emergencies** because of the lockup.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="60" text-anchor="middle" fill="#ffd700" font-size="34" font-weight="bold">Vehicle Comparison</text><rect x="60" y="100" width="1000" height="60" fill="#16213e" stroke="#888" stroke-width="1"/><text x="200" y="140" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">Vehicle</text><text x="500" y="140" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">Yield</text><text x="700" y="140" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">Access</text><text x="900" y="140" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">Insured by</text><rect x="60" y="160" width="1000" height="180" fill="#0ea5e9" opacity="0.15"/><text x="200" y="210" text-anchor="middle" fill="#0ea5e9" font-size="22" font-weight="bold">HYSA</text><text x="200" y="245" text-anchor="middle" fill="#888" font-size="16">Online banks</text><text x="500" y="225" text-anchor="middle" fill="#ffffff" font-size="22">~4-5%</text><text x="700" y="215" text-anchor="middle" fill="#10b981" font-size="20">Same-day</text><text x="700" y="245" text-anchor="middle" fill="#888" font-size="16">1-2 day transfer</text><text x="900" y="225" text-anchor="middle" fill="#ffffff" font-size="20">FDIC $250k</text><text x="200" y="295" text-anchor="middle" fill="#10b981" font-size="18" font-weight="bold">Best default for most</text><rect x="60" y="340" width="1000" height="180" fill="#8b5cf6" opacity="0.15"/><text x="200" y="390" text-anchor="middle" fill="#8b5cf6" font-size="22" font-weight="bold">Money Market</text><text x="200" y="425" text-anchor="middle" fill="#888" font-size="16">MMA</text><text x="500" y="405" text-anchor="middle" fill="#ffffff" font-size="22">~4-5%</text><text x="700" y="395" text-anchor="middle" fill="#10b981" font-size="20">Same-day</text><text x="700" y="425" text-anchor="middle" fill="#f59e0b" font-size="16">Check Reg D limits</text><text x="900" y="405" text-anchor="middle" fill="#ffffff" font-size="20">FDIC $250k</text><text x="200" y="475" text-anchor="middle" fill="#888" font-size="18">Adds check-writing</text><rect x="60" y="520" width="1000" height="180" fill="#10b981" opacity="0.15"/><text x="200" y="570" text-anchor="middle" fill="#10b981" font-size="22" font-weight="bold">T-Bills</text><text x="200" y="605" text-anchor="middle" fill="#888" font-size="16">4-52 weeks</text><text x="500" y="585" text-anchor="middle" fill="#ffffff" font-size="22">~5%</text><text x="500" y="615" text-anchor="middle" fill="#10b981" font-size="14">+ no state tax</text><text x="700" y="575" text-anchor="middle" fill="#f59e0b" font-size="18">At maturity</text><text x="700" y="605" text-anchor="middle" fill="#888" font-size="16">4-52 wks lockup</text><text x="900" y="585" text-anchor="middle" fill="#ffffff" font-size="20">US Treasury</text><text x="900" y="615" text-anchor="middle" fill="#ffd700" font-size="14">(highest)</text><text x="200" y="655" text-anchor="middle" fill="#888" font-size="18">$100 min, TreasuryDirect</text><rect x="60" y="700" width="1000" height="180" fill="#ef4444" opacity="0.15"/><text x="200" y="750" text-anchor="middle" fill="#ef4444" font-size="22" font-weight="bold">I-Bonds</text><text x="200" y="785" text-anchor="middle" fill="#888" font-size="16">Inflation-linked</text><text x="500" y="765" text-anchor="middle" fill="#ffffff" font-size="22">Var.</text><text x="500" y="795" text-anchor="middle" fill="#888" font-size="14">= CPI + fixed</text><text x="700" y="755" text-anchor="middle" fill="#ef4444" font-size="18">1-year LOCK</text><text x="700" y="785" text-anchor="middle" fill="#888" font-size="16">3-mo penalty &lt;5yr</text><text x="900" y="765" text-anchor="middle" fill="#ffffff" font-size="20">US Treasury</text><text x="200" y="835" text-anchor="middle" fill="#ef4444" font-size="18">NOT for emergency fund</text><text x="550" y="970" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">Default = HYSA. Optimize later.</text></svg>`,
          caption: "HYSA wins for simplicity. T-bills add yield. I-bonds don't belong here."
        }
      },
      {
        type: "example",
        title: "The HYSA + T-Bill Ladder Strategy",
        content: `**Aisha** has a $30,000 emergency fund. Here's how she structures it:

**Bucket 1 — Liquid layer ($6,000 in Ally HYSA @ 4.5%)**
Covers any sudden shock. Same-day access. About 1 month of expenses.

**Bucket 2 — T-bill ladder ($24,000 across 4 rungs)**
- $6,000 in **13-week T-bill** maturing in 4 weeks
- $6,000 in **13-week T-bill** maturing in 7 weeks
- $6,000 in **13-week T-bill** maturing in 10 weeks
- $6,000 in **13-week T-bill** maturing in 13 weeks

Every **3 weeks** something matures. She gets ~**5.1%** + **no state tax** (saves $290/year in California).

**If a true emergency hits:** drain the $6,000 HYSA first → next T-bill matures within 21 days → repeat. **Worst-case wait: 3 weeks** for additional cash.

**Annual yield gain vs all-HYSA: ~$180.** Small but real. Don't bother below ~$15k.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="38" font-weight="bold">Aisha's $30k Ladder</text><rect x="80" y="130" width="940" height="180" rx="15" fill="#0ea5e9" opacity="0.2" stroke="#0ea5e9" stroke-width="3"/><text x="130" y="175" fill="#0ea5e9" font-size="24" font-weight="bold">Bucket 1: Liquid Layer</text><text x="130" y="215" fill="#ffffff" font-size="20">Ally HYSA @ 4.5% APY</text><text x="130" y="250" fill="#888" font-size="18">Same-day access — first dollar in any emergency</text><text x="980" y="220" text-anchor="end" fill="#0ea5e9" font-size="36" font-weight="bold">$6,000</text><text x="980" y="265" text-anchor="end" fill="#888" font-size="18">~1 month expenses</text><text x="130" y="365" fill="#10b981" font-size="24" font-weight="bold">Bucket 2: T-Bill Ladder @ 5.1%</text><text x="130" y="400" fill="#888" font-size="18">No state tax. Something matures every 3 weeks.</text><rect x="80" y="430" width="220" height="170" rx="12" fill="#10b981" opacity="0.25" stroke="#10b981" stroke-width="2"/><text x="190" y="475" text-anchor="middle" fill="#10b981" font-size="22" font-weight="bold">Rung 1</text><text x="190" y="515" text-anchor="middle" fill="#ffffff" font-size="20">$6,000</text><text x="190" y="555" text-anchor="middle" fill="#ffd700" font-size="18">Matures</text><text x="190" y="580" text-anchor="middle" fill="#ffd700" font-size="18">in 4 wks</text><rect x="320" y="430" width="220" height="170" rx="12" fill="#10b981" opacity="0.25" stroke="#10b981" stroke-width="2"/><text x="430" y="475" text-anchor="middle" fill="#10b981" font-size="22" font-weight="bold">Rung 2</text><text x="430" y="515" text-anchor="middle" fill="#ffffff" font-size="20">$6,000</text><text x="430" y="555" text-anchor="middle" fill="#ffd700" font-size="18">Matures</text><text x="430" y="580" text-anchor="middle" fill="#ffd700" font-size="18">in 7 wks</text><rect x="560" y="430" width="220" height="170" rx="12" fill="#10b981" opacity="0.25" stroke="#10b981" stroke-width="2"/><text x="670" y="475" text-anchor="middle" fill="#10b981" font-size="22" font-weight="bold">Rung 3</text><text x="670" y="515" text-anchor="middle" fill="#ffffff" font-size="20">$6,000</text><text x="670" y="555" text-anchor="middle" fill="#ffd700" font-size="18">Matures</text><text x="670" y="580" text-anchor="middle" fill="#ffd700" font-size="18">in 10 wks</text><rect x="800" y="430" width="220" height="170" rx="12" fill="#10b981" opacity="0.25" stroke="#10b981" stroke-width="2"/><text x="910" y="475" text-anchor="middle" fill="#10b981" font-size="22" font-weight="bold">Rung 4</text><text x="910" y="515" text-anchor="middle" fill="#ffffff" font-size="20">$6,000</text><text x="910" y="555" text-anchor="middle" fill="#ffd700" font-size="18">Matures</text><text x="910" y="580" text-anchor="middle" fill="#ffd700" font-size="18">in 13 wks</text><rect x="80" y="640" width="940" height="170" rx="15" fill="#8b5cf6" opacity="0.18" stroke="#8b5cf6" stroke-width="3"/><text x="550" y="685" text-anchor="middle" fill="#8b5cf6" font-size="24" font-weight="bold">Emergency Hits — What Happens</text><text x="550" y="725" text-anchor="middle" fill="#ffffff" font-size="20">1. Drain $6,000 HYSA same day</text><text x="550" y="760" text-anchor="middle" fill="#ffffff" font-size="20">2. Next rung matures within 21 days → another $6k</text><text x="550" y="795" text-anchor="middle" fill="#ffffff" font-size="20">3. Continue every 3 weeks if needed</text><rect x="80" y="840" width="940" height="200" rx="15" fill="#ffd700" opacity="0.15" stroke="#ffd700" stroke-width="3"/><text x="550" y="885" text-anchor="middle" fill="#ffd700" font-size="24" font-weight="bold">Annual benefit vs all-HYSA</text><text x="550" y="935" text-anchor="middle" fill="#ffffff" font-size="22">Extra yield: ~$120 • CA state tax savings: ~$290</text><text x="550" y="985" text-anchor="middle" fill="#ffffff" font-size="22">Worst-case wait for next $6k: 3 weeks</text><text x="550" y="1020" text-anchor="middle" fill="#888" font-size="18">Skip the ladder under ~$15k — not worth the complexity</text></svg>`,
          caption: "HYSA covers the first shock. T-bill ladder fuels the rest at higher yield."
        }
      },
      {
        type: "quiz",
        title: "Knowledge Check",
        question: "Why are I-Bonds a poor choice for an emergency fund despite their inflation protection?",
        options: [
          { text: "I-Bonds aren't insured by the government", correct: false },
          { text: "I-Bonds have a 1-year minimum holding period — you literally cannot access the money in year 1, defeating the purpose of an emergency fund", correct: true },
          { text: "I-Bond yields are always under 1%", correct: false },
          { text: "You can only buy I-Bonds through a financial advisor", correct: false }
        ],
        explanation: "I-Bonds have a hard 1-year lockup with no exceptions, plus a 3-month interest penalty if cashed before year 5. An emergency fund must be accessible TODAY when a crisis hits. I-Bonds are excellent for medium-term inflation-protected savings, but they fail the fundamental access requirement. Keep them for goals 1-5 years out instead.",
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="80" text-anchor="middle" fill="#ffd700" font-size="38" font-weight="bold">The I-Bond Lockup Problem</text><rect x="100" y="150" width="900" height="100" rx="15" fill="#16213e" stroke="#888" stroke-width="2"/><text x="120" y="195" fill="#ffffff" font-size="22">Day 0: Buy I-Bond</text><text x="980" y="195" text-anchor="end" fill="#10b981" font-size="22">Money in</text><text x="550" y="230" text-anchor="middle" fill="#ef4444" font-size="20" font-weight="bold">↓ Locked for 12 months ↓</text><rect x="100" y="280" width="900" height="150" rx="15" fill="#ef4444" opacity="0.25" stroke="#ef4444" stroke-width="3"/><text x="550" y="335" text-anchor="middle" fill="#ef4444" font-size="28" font-weight="bold">Month 6: EMERGENCY</text><text x="550" y="380" text-anchor="middle" fill="#ffffff" font-size="22">Car transmission dies — $1,800 needed</text><text x="550" y="410" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">You CANNOT touch the I-Bond</text><rect x="100" y="460" width="900" height="100" rx="15" fill="#16213e" stroke="#888" stroke-width="2"/><text x="120" y="505" fill="#ffffff" font-size="22">Month 12: Lockup ends</text><text x="980" y="505" text-anchor="end" fill="#888" font-size="20">Cash with -3mo penalty</text><text x="550" y="545" text-anchor="middle" fill="#888" font-size="18">Still penalized for next 4 years</text><rect x="100" y="610" width="900" height="220" rx="15" fill="#10b981" opacity="0.18" stroke="#10b981" stroke-width="3"/><text x="550" y="660" text-anchor="middle" fill="#10b981" font-size="26" font-weight="bold">I-Bonds belong in a 1-5 year bucket</text><text x="550" y="710" text-anchor="middle" fill="#ffffff" font-size="22">Use for: house down payment in 3 years</text><text x="550" y="745" text-anchor="middle" fill="#ffffff" font-size="22">Inflation-protected medium-term savings</text><text x="550" y="795" text-anchor="middle" fill="#ffd700" font-size="22" font-style="italic">Right tool. Wrong slot.</text><text x="550" y="900" text-anchor="middle" fill="#ffd700" font-size="24" font-weight="bold">An emergency fund means "available NOW"</text><text x="550" y="950" text-anchor="middle" fill="#ffffff" font-size="22">If you can't reach it today, it doesn't qualify</text></svg>`,
          caption: "I-Bonds lock for 12 months. Emergencies don't wait."
        }
      },
      {
        type: "application",
        title: "Open Your HYSA This Week",
        content: `Pick **one** online bank from this list and open an account in the next **48 hours**. Decision fatigue is the enemy — all four are excellent and rates differ by 0.1-0.3% which is noise.

**Top picks (2026):**
- **Ally Bank** — clean app, no fees, sub-accounts ("buckets") for goals
- **Marcus by Goldman Sachs** — slightly higher rate, simple
- **Wealthfront Cash** — highest typical rate, swept across partner banks for **up to $8M FDIC coverage**
- **Capital One 360** — works if you already use Capital One

**Setup checklist:**
1. Open account online (10 minutes)
2. Link your existing checking account
3. Transfer your starter amount in
4. **Turn on automatic weekly transfer** (the magic step — automation beats willpower)
5. **Disable the linked debit card** if one ships — friction is protective

If your fund grows past **$15,000**, revisit and consider adding a **T-bill ladder** at TreasuryDirect for ~30 extra basis points and state-tax savings. Until then: **HYSA only**. Simplicity wins.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="40" font-weight="bold">Pick One. Open It This Week.</text><rect x="60" y="130" width="240" height="240" rx="15" fill="#0ea5e9" opacity="0.2" stroke="#0ea5e9" stroke-width="3"/><text x="180" y="195" text-anchor="middle" fill="#0ea5e9" font-size="24" font-weight="bold">Ally</text><text x="180" y="245" text-anchor="middle" fill="#ffffff" font-size="18">Clean app</text><text x="180" y="275" text-anchor="middle" fill="#ffffff" font-size="18">"Buckets" feature</text><text x="180" y="305" text-anchor="middle" fill="#ffffff" font-size="18">No fees</text><text x="180" y="345" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">~4.5% APY</text><rect x="310" y="130" width="240" height="240" rx="15" fill="#10b981" opacity="0.2" stroke="#10b981" stroke-width="3"/><text x="430" y="195" text-anchor="middle" fill="#10b981" font-size="24" font-weight="bold">Marcus</text><text x="430" y="225" text-anchor="middle" fill="#888" font-size="16">Goldman Sachs</text><text x="430" y="265" text-anchor="middle" fill="#ffffff" font-size="18">Simple</text><text x="430" y="295" text-anchor="middle" fill="#ffffff" font-size="18">Higher rate</text><text x="430" y="345" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">~4.6% APY</text><rect x="560" y="130" width="240" height="240" rx="15" fill="#8b5cf6" opacity="0.2" stroke="#8b5cf6" stroke-width="3"/><text x="680" y="195" text-anchor="middle" fill="#8b5cf6" font-size="24" font-weight="bold">Wealthfront</text><text x="680" y="245" text-anchor="middle" fill="#ffffff" font-size="18">Top rate</text><text x="680" y="275" text-anchor="middle" fill="#ffffff" font-size="18">$8M FDIC</text><text x="680" y="305" text-anchor="middle" fill="#ffffff" font-size="18">(via sweep)</text><text x="680" y="345" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">~4.8% APY</text><rect x="810" y="130" width="240" height="240" rx="15" fill="#ec4899" opacity="0.2" stroke="#ec4899" stroke-width="3"/><text x="930" y="195" text-anchor="middle" fill="#ec4899" font-size="22" font-weight="bold">Capital One</text><text x="930" y="225" text-anchor="middle" fill="#888" font-size="16">360 Performance</text><text x="930" y="265" text-anchor="middle" fill="#ffffff" font-size="18">Brick locations</text><text x="930" y="295" text-anchor="middle" fill="#ffffff" font-size="18">Easy if existing</text><text x="930" y="345" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">~4.3% APY</text><rect x="80" y="420" width="940" height="500" rx="15" fill="#16213e" stroke="#ffd700" stroke-width="2"/><text x="550" y="470" text-anchor="middle" fill="#ffd700" font-size="26" font-weight="bold">5-Step Setup Checklist</text><text x="120" y="535" fill="#10b981" font-size="22" font-weight="bold">1.</text><text x="170" y="535" fill="#ffffff" font-size="22">Open account online (10 min)</text><text x="120" y="590" fill="#10b981" font-size="22" font-weight="bold">2.</text><text x="170" y="590" fill="#ffffff" font-size="22">Link existing checking account</text><text x="120" y="645" fill="#10b981" font-size="22" font-weight="bold">3.</text><text x="170" y="645" fill="#ffffff" font-size="22">Transfer starter amount in</text><text x="120" y="700" fill="#ffd700" font-size="22" font-weight="bold">4.</text><text x="170" y="700" fill="#ffd700" font-size="22" font-weight="bold">Turn on automatic weekly transfer ←</text><text x="170" y="730" fill="#888" font-size="18">The magic step. Automation beats willpower.</text><text x="120" y="800" fill="#10b981" font-size="22" font-weight="bold">5.</text><text x="170" y="800" fill="#ffffff" font-size="22">Disable any debit card that ships</text><text x="170" y="830" fill="#888" font-size="18">Friction is protective — keep it hard to spend</text><text x="550" y="990" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">Past $15k? Layer in a T-bill ladder.</text><text x="550" y="1030" text-anchor="middle" fill="#ffffff" font-size="20" font-style="italic">Until then: HYSA only. Simplicity wins.</text></svg>`,
          caption: "Pick one bank. Open in 48 hours. Automate. Done."
        }
      }
    ]
  }
],
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
