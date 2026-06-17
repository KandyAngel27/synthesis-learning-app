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
  }
];

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
        courseHub: true,
        parts: [
            { romanNum: 'Part I',   title: 'Cash Flow',               bookIds: ['pf-budgeting'] },
            { romanNum: 'Part II',  title: 'Stability',               bookIds: ['pf-debt','pf-emergency-fund'] },
            { romanNum: 'Part III', title: 'Long-Term Wealth',        bookIds: ['pf-taxes','pf-retirement','pf-investing','pf-real-estate'] },
        ],
        books: BOOKS,
    };
})();
