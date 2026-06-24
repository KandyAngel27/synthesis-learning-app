// External book module — From Operator to Owner (12-lesson business/leadership book)
window.OPERATOR_TO_OWNER_BOOK = {
  id: 'operator-to-owner',
  title: 'From Operator to Owner: Exiting the Middle',
  author: 'Synthesis Learning',
  description: 'The work that got you here is holding you back. A 12-lesson playbook for moving from daily operator to strategic owner — what to keep, what to delegate, and how to actually let go.',
  lessons: 12,
  duration: 180,
  progress: 0,
  category: 'business',
  lessonList: [
{
    id: "operator-to-owner-lesson-1",
    title: "The Operator's Trap",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "The Founder Who Became a Bottleneck",
        content: `In 2010, **Ben Horowitz** wrote that the **CEO's job changes every six months** — but most founders don't change with it. They keep doing the work that built the company, long after that work has become the **single biggest constraint on growth**.

You feel it before you can name it. The Slack notifications never stop. People wait outside your office. Decisions queue up behind your inbox. You arrive early, leave late, and somehow the **most important work never gets done**.

This is **The Operator's Trap**: the slow, invisible process by which the founder becomes the bottleneck of their own company. You didn't fail. You're being **punished by your own success**. The behaviors that made you indispensable at $1M ARR are the same behaviors that **strangle the business at $10M**.

This lesson covers the **4 unmistakable signs** you've outgrown your role:

1. **Decision queues** — work stops when you're unavailable
2. **Inbox-as-job** — your calendar is whatever email shouts loudest
3. **Identity-fused-with-tasks** — you ARE the doer, not the leader
4. **Calendar 100% reactive** — zero time for strategy, hiring, or thinking

By the end, you'll run a **Pareto analysis** on your own week and see, in stark terms, where you're trapped — and why your brain refuses to let go.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
  <rect width="1100" height="1100" fill="#1a1a2e"/>
  <text x="550" y="80" fill="#ffd700" font-size="38" font-weight="bold" text-anchor="middle">The Operator's Trap</text>
  <text x="550" y="125" fill="#888" font-size="22" text-anchor="middle">When the engine of growth becomes the brake</text>

  <circle cx="550" cy="500" r="160" fill="none" stroke="#ef4444" stroke-width="6"/>
  <text x="550" y="490" fill="#ffffff" font-size="32" font-weight="bold" text-anchor="middle">YOU</text>
  <text x="550" y="525" fill="#ef4444" font-size="20" text-anchor="middle">(the bottleneck)</text>

  <rect x="100" y="220" width="220" height="80" rx="12" fill="#6366f1" opacity="0.85"/>
  <text x="210" y="255" fill="#ffffff" font-size="20" font-weight="bold" text-anchor="middle">Decision Queue</text>
  <text x="210" y="282" fill="#ffffff" font-size="15" text-anchor="middle">"I need your sign-off"</text>

  <rect x="780" y="220" width="220" height="80" rx="12" fill="#f59e0b" opacity="0.85"/>
  <text x="890" y="255" fill="#1a1a2e" font-size="20" font-weight="bold" text-anchor="middle">Inbox-as-Job</text>
  <text x="890" y="282" fill="#1a1a2e" font-size="15" text-anchor="middle">"Loudest wins"</text>

  <rect x="100" y="700" width="220" height="80" rx="12" fill="#8b5cf6" opacity="0.85"/>
  <text x="210" y="735" fill="#ffffff" font-size="20" font-weight="bold" text-anchor="middle">Identity Fusion</text>
  <text x="210" y="762" fill="#ffffff" font-size="15" text-anchor="middle">"I AM the work"</text>

  <rect x="780" y="700" width="220" height="80" rx="12" fill="#0ea5e9" opacity="0.85"/>
  <text x="890" y="735" fill="#ffffff" font-size="20" font-weight="bold" text-anchor="middle">Reactive Calendar</text>
  <text x="890" y="762" fill="#ffffff" font-size="15" text-anchor="middle">"100% interrupts"</text>

  <line x1="320" y1="260" x2="430" y2="440" stroke="#ef4444" stroke-width="3" stroke-dasharray="6,4"/>
  <line x1="780" y1="260" x2="670" y2="440" stroke="#ef4444" stroke-width="3" stroke-dasharray="6,4"/>
  <line x1="320" y1="740" x2="430" y2="560" stroke="#ef4444" stroke-width="3" stroke-dasharray="6,4"/>
  <line x1="780" y1="740" x2="670" y2="560" stroke="#ef4444" stroke-width="3" stroke-dasharray="6,4"/>

  <text x="550" y="900" fill="#ffd700" font-size="22" font-weight="bold" text-anchor="middle">Every arrow points back at you.</text>
  <text x="550" y="935" fill="#10b981" font-size="20" text-anchor="middle">That's the trap.</text>
  <text x="550" y="985" fill="#888" font-size="17" text-anchor="middle" font-style="italic">"What got you here will not get you there." — Marshall Goldsmith</text>
</svg>`,
          caption: "The four arrows of the Operator's Trap — each one a behavior that once helped, now strangles."
        }
      },
      {
        type: "concept",
        title: "The 4 Signs You've Outgrown Your Role",
        content: `Each sign maps to a specific **failure of leverage**. You can be guilty of one and survive. Two, and the company stalls. Three or four, and **growth is already plateauing — you just haven't seen the lagging numbers yet**.

**Sign 1 — Decision Queues.** Walk through your DMs. Count the messages that read "*Just need a yes from you*" or "*Quick question when you have a sec.*" If the count is **>5 per day**, your team can't move without you. **Reid Hoffman** calls this the *"single-threaded CEO"* problem — every workflow blocks on one person.

**Sign 2 — Inbox-as-Job.** Open your calendar. How many of yesterday's hours were **planned in advance** versus **reactions to something that landed in your inbox**? If reactive > 60%, you don't have a job — **email has a job, and you're its assistant**.

**Sign 3 — Identity-Fused-With-Tasks.** Try this thought experiment: "If I stopped writing every proposal / closing every deal / approving every hire — *who would I be?*" If the answer makes your stomach drop, you're not the **owner of a company**. You're a **highly-paid senior IC** with a fancy title. **Brian Chesky** wrote the entire first-version Airbnb pitch deck himself — and had to consciously stop doing that work to become a CEO.

**Sign 4 — Calendar 100% Reactive.** Look at next Tuesday. Block out everything that's a meeting **someone else called**. What's left? If the answer is "*lunch and the gym*," you have **zero offensive time**. Strategy, hiring, vision, and capital allocation are the **4 things only the CEO can do**. If they don't appear on your calendar, they're not happening.

The **diagnostic question**: *"If I disappeared for 30 days, what breaks?"* The bigger the list, the deeper the trap.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
  <rect width="1100" height="1100" fill="#1a1a2e"/>
  <text x="550" y="70" fill="#ffd700" font-size="34" font-weight="bold" text-anchor="middle">The 4 Signs — Severity Scale</text>
  <text x="550" y="110" fill="#888" font-size="20" text-anchor="middle">Score yourself honestly. 1 = trace, 5 = constant.</text>

  <rect x="80" y="170" width="940" height="180" rx="10" fill="#6366f1" opacity="0.2" stroke="#6366f1" stroke-width="2"/>
  <text x="110" y="215" fill="#6366f1" font-size="26" font-weight="bold">1. Decision Queues</text>
  <text x="110" y="250" fill="#ffffff" font-size="18">Symptom: "Need your sign-off" messages pile up daily.</text>
  <text x="110" y="280" fill="#ffffff" font-size="18">Test: Count Slack DMs asking permission. &gt;5/day = trapped.</text>
  <text x="110" y="320" fill="#10b981" font-size="17" font-style="italic">Cure preview: Decision rights matrix + DACI.</text>
  <circle cx="940" cy="260" r="40" fill="#ef4444"/>
  <text x="940" y="270" fill="#ffffff" font-size="34" font-weight="bold" text-anchor="middle">5</text>

  <rect x="80" y="370" width="940" height="180" rx="10" fill="#f59e0b" opacity="0.2" stroke="#f59e0b" stroke-width="2"/>
  <text x="110" y="415" fill="#f59e0b" font-size="26" font-weight="bold">2. Inbox-as-Job</text>
  <text x="110" y="450" fill="#ffffff" font-size="18">Symptom: Day is dictated by whoever emailed first.</text>
  <text x="110" y="480" fill="#ffffff" font-size="18">Test: % of calendar that was planned 24h in advance.</text>
  <text x="110" y="520" fill="#10b981" font-size="17" font-style="italic">Cure preview: Calendar-first, inbox-last protocol.</text>
  <circle cx="940" cy="460" r="40" fill="#f59e0b"/>
  <text x="940" y="470" fill="#1a1a2e" font-size="34" font-weight="bold" text-anchor="middle">4</text>

  <rect x="80" y="570" width="940" height="180" rx="10" fill="#8b5cf6" opacity="0.2" stroke="#8b5cf6" stroke-width="2"/>
  <text x="110" y="615" fill="#8b5cf6" font-size="26" font-weight="bold">3. Identity Fusion</text>
  <text x="110" y="650" fill="#ffffff" font-size="18">Symptom: "If I'm not doing X, who am I?"</text>
  <text x="110" y="680" fill="#ffffff" font-size="18">Test: List 3 tasks you'd grieve giving up. That's the fusion.</text>
  <text x="110" y="720" fill="#10b981" font-size="17" font-style="italic">Cure preview: Re-anchor identity to outcomes, not tasks.</text>
  <circle cx="940" cy="660" r="40" fill="#8b5cf6"/>
  <text x="940" y="670" fill="#ffffff" font-size="34" font-weight="bold" text-anchor="middle">5</text>

  <rect x="80" y="770" width="940" height="180" rx="10" fill="#0ea5e9" opacity="0.2" stroke="#0ea5e9" stroke-width="2"/>
  <text x="110" y="815" fill="#0ea5e9" font-size="26" font-weight="bold">4. Reactive Calendar</text>
  <text x="110" y="850" fill="#ffffff" font-size="18">Symptom: Zero blocks for hiring, strategy, capital.</text>
  <text x="110" y="880" fill="#ffffff" font-size="18">Test: Hours of self-initiated work in past 5 days.</text>
  <text x="110" y="920" fill="#10b981" font-size="17" font-style="italic">Cure preview: 4 protected blocks for CEO-only work.</text>
  <circle cx="940" cy="860" r="40" fill="#ef4444"/>
  <text x="940" y="870" fill="#ffffff" font-size="34" font-weight="bold" text-anchor="middle">5</text>

  <text x="550" y="1010" fill="#ffd700" font-size="20" font-weight="bold" text-anchor="middle">Total &gt; 12 = you are the constraint on the business.</text>
  <text x="550" y="1050" fill="#888" font-size="16" text-anchor="middle" font-style="italic">Score honestly. Nobody else sees this.</text>
</svg>`,
          caption: "Score each sign 1-5. A total above 12 means YOU are the company's growth ceiling."
        }
      },
      {
        type: "example",
        title: "Pareto on Your Week — A Real Founder's Audit",
        content: `Meet **Marcus**, founder of a $4M ARR B2B SaaS. He has 22 employees, a head of sales, a head of engineering, and a fractional CFO. On paper, he's built a team. In reality, he's working **65 hours a week** and **growth has flattened** for 3 quarters.

He runs the **Pareto audit**: timesheet every block for one week, then sort.

**What he found:**

| Activity | Hours | % of week |
|---|---|---|
| Slack DMs / decision approvals | 14 | 22% |
| Customer escalations (existing accounts) | 11 | 17% |
| Sales calls (deals < $20k) | 9 | 14% |
| Bug triage with engineering | 7 | 11% |
| Hiring/interviews | 3 | 5% |
| Strategy / planning | 1 | 2% |
| Reactive email | 12 | 18% |
| 1:1s with direct reports | 4 | 6% |
| Misc | 4 | 5% |

**Pareto's law** says **20% of activities drive 80% of value**. For Marcus, the 20% that mattered was: **strategy, hiring, and the 3 enterprise deals over $100k**. That's **maybe 4 hours**.

The other **61 hours? Operational substitution.** He was **doing the jobs of his head of sales, his head of engineering, and his customer success lead — simultaneously**. Each one of them was waiting for him.

The diagnosis was brutal: **Marcus had hired managers, but kept the management work**. He paid them six figures to be **glorified assistants who needed his approval to act**.

**What changed in 90 days**: Marcus moved the 14 hours of decision-approvals into a **weekly decision-rights review** (3 hours). He killed all sub-$20k sales calls (his head of sales took them). He stopped attending bug triage. **Result: 22 hours/week reclaimed, ARR grew 31% over the next 2 quarters**. He didn't work harder. He **stopped substituting for his team**.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
  <rect width="1100" height="1100" fill="#1a1a2e"/>
  <text x="550" y="70" fill="#ffd700" font-size="32" font-weight="bold" text-anchor="middle">Marcus's Week — Before the Audit</text>
  <text x="550" y="110" fill="#888" font-size="20" text-anchor="middle">65 hours. 4 of them mattered.</text>

  <rect x="80" y="160" width="940" height="80" fill="#ef4444" opacity="0.9"/>
  <text x="100" y="195" fill="#ffffff" font-size="20" font-weight="bold">Slack approvals</text>
  <text x="100" y="222" fill="#ffffff" font-size="16">14 hrs — should be team's decision</text>
  <text x="1000" y="208" fill="#ffffff" font-size="22" font-weight="bold" text-anchor="end">22%</text>

  <rect x="80" y="250" width="780" height="65" fill="#f59e0b" opacity="0.9"/>
  <text x="100" y="280" fill="#1a1a2e" font-size="19" font-weight="bold">Customer escalations</text>
  <text x="100" y="305" fill="#1a1a2e" font-size="15">11 hrs — should be CS lead</text>
  <text x="840" y="290" fill="#1a1a2e" font-size="20" font-weight="bold" text-anchor="end">17%</text>

  <rect x="80" y="325" width="780" height="60" fill="#f59e0b" opacity="0.7"/>
  <text x="100" y="352" fill="#ffffff" font-size="18" font-weight="bold">Reactive email</text>
  <text x="100" y="375" fill="#ffffff" font-size="14">12 hrs — pure noise</text>
  <text x="840" y="362" fill="#ffffff" font-size="20" font-weight="bold" text-anchor="end">18%</text>

  <rect x="80" y="395" width="620" height="55" fill="#8b5cf6" opacity="0.8"/>
  <text x="100" y="420" fill="#ffffff" font-size="17" font-weight="bold">Small sales calls</text>
  <text x="100" y="441" fill="#ffffff" font-size="14">9 hrs — head of sales role</text>
  <text x="680" y="430" fill="#ffffff" font-size="19" font-weight="bold" text-anchor="end">14%</text>

  <rect x="80" y="460" width="480" height="50" fill="#8b5cf6" opacity="0.6"/>
  <text x="100" y="483" fill="#ffffff" font-size="16" font-weight="bold">Bug triage</text>
  <text x="100" y="502" fill="#ffffff" font-size="13">7 hrs — engineering's job</text>
  <text x="540" y="492" fill="#ffffff" font-size="18" font-weight="bold" text-anchor="end">11%</text>

  <rect x="80" y="520" width="280" height="45" fill="#6366f1" opacity="0.8"/>
  <text x="100" y="542" fill="#ffffff" font-size="15" font-weight="bold">1:1s</text>
  <text x="100" y="560" fill="#ffffff" font-size="13">4 hrs</text>
  <text x="340" y="550" fill="#ffffff" font-size="17" font-weight="bold" text-anchor="end">6%</text>

  <rect x="80" y="575" width="220" height="40" fill="#10b981" opacity="0.9"/>
  <text x="100" y="595" fill="#ffffff" font-size="15" font-weight="bold">Hiring</text>
  <text x="100" y="610" fill="#ffffff" font-size="13">3 hrs — CEO work</text>
  <text x="280" y="600" fill="#ffffff" font-size="16" font-weight="bold" text-anchor="end">5%</text>

  <rect x="80" y="625" width="80" height="35" fill="#ffd700"/>
  <text x="170" y="650" fill="#ffd700" font-size="16" font-weight="bold">Strategy: 1 hr — 2% (!!)</text>

  <line x1="80" y1="700" x2="1020" y2="700" stroke="#888" stroke-width="2" stroke-dasharray="6,4"/>

  <text x="550" y="740" fill="#10b981" font-size="22" font-weight="bold" text-anchor="middle">The Pareto Truth</text>
  <text x="550" y="780" fill="#ffffff" font-size="18" text-anchor="middle">80% of value came from 5% of the week.</text>
  <text x="550" y="810" fill="#ffffff" font-size="18" text-anchor="middle">95% of the week was operational substitution.</text>

  <rect x="200" y="850" width="700" height="180" rx="14" fill="#10b981" opacity="0.18" stroke="#10b981" stroke-width="2"/>
  <text x="550" y="890" fill="#10b981" font-size="22" font-weight="bold" text-anchor="middle">After 90-day cleanup:</text>
  <text x="550" y="930" fill="#ffffff" font-size="18" text-anchor="middle">Hours reclaimed: 22/week</text>
  <text x="550" y="965" fill="#ffffff" font-size="18" text-anchor="middle">ARR growth: +31% over 2 quarters</text>
  <text x="550" y="1000" fill="#ffd700" font-size="18" font-style="italic" text-anchor="middle">He didn't work harder. He stopped subbing in.</text>
</svg>`,
          caption: "Marcus's week mapped: only 5% drove 80% of the value. The rest was substitution work."
        }
      },
      {
        type: "quiz",
        title: "Quick Check",
        question: "A founder runs Pareto on her week and finds she spends 18 hours on customer escalations, 12 hours on Slack approvals, and 2 hours on strategy. Which sign of the Operator's Trap is MOST clearly diagnostic?",
        options: [
          { text: "Inbox-as-Job — she clearly has too many emails to process", correct: false },
          { text: "Decision Queues — the 12 hours of approvals mean the team can't move without her, and the 2 hours of strategy proves CEO-only work is being crowded out", correct: true },
          { text: "Identity Fusion — she enjoys solving customer problems", correct: false },
          { text: "There's no trap — 18 hours of customer work shows she's customer-obsessed, which is good", correct: false }
        ],
        explanation: "The 12 hours of approvals is the clearest signal: every approval is a moment her team needed her to move. Combined with only 2 hours on strategy (CEO-only work), the diagnosis is unambiguous — she's a bottleneck. Identity fusion may also be present, but it can't be diagnosed from the data alone. Customer obsession is good in moderation, but 18 hours/week means she's substituting for a CS lead, not leading.",
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
  <rect width="1100" height="1100" fill="#1a1a2e"/>
  <text x="550" y="80" fill="#ffd700" font-size="34" font-weight="bold" text-anchor="middle">Diagnostic Lens</text>
  <text x="550" y="125" fill="#888" font-size="20" text-anchor="middle">What the hours actually tell you</text>

  <rect x="120" y="200" width="860" height="100" rx="12" fill="#ef4444" opacity="0.85"/>
  <text x="160" y="240" fill="#ffffff" font-size="22" font-weight="bold">12 hrs — Slack approvals</text>
  <text x="160" y="275" fill="#ffffff" font-size="17">Diagnostic: Decision Queue. Team can't move without her.</text>

  <rect x="120" y="330" width="860" height="100" rx="12" fill="#f59e0b" opacity="0.85"/>
  <text x="160" y="370" fill="#1a1a2e" font-size="22" font-weight="bold">18 hrs — Customer escalations</text>
  <text x="160" y="405" fill="#1a1a2e" font-size="17">Symptom: she's doing CS lead's job (substitution).</text>

  <rect x="120" y="460" width="860" height="100" rx="12" fill="#10b981" opacity="0.85"/>
  <text x="160" y="500" fill="#ffffff" font-size="22" font-weight="bold">2 hrs — Strategy</text>
  <text x="160" y="535" fill="#ffffff" font-size="17">CEO-only work, crowded out. Confirms diagnosis.</text>

  <line x1="550" y1="610" x2="550" y2="680" stroke="#ffd700" stroke-width="4" marker-end="url(#arrow)"/>
  <defs>
    <marker id="arrow" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto">
      <polygon points="0 0, 12 6, 0 12" fill="#ffd700"/>
    </marker>
  </defs>

  <rect x="170" y="700" width="760" height="200" rx="14" fill="#6366f1" opacity="0.25" stroke="#6366f1" stroke-width="3"/>
  <text x="550" y="745" fill="#6366f1" font-size="24" font-weight="bold" text-anchor="middle">Verdict: Decision Queues</text>
  <text x="550" y="785" fill="#ffffff" font-size="18" text-anchor="middle">12 approval-hours = team blocked on her.</text>
  <text x="550" y="815" fill="#ffffff" font-size="18" text-anchor="middle">2 strategy-hours = CEO work crowded out.</text>
  <text x="550" y="855" fill="#ffd700" font-size="18" font-style="italic" text-anchor="middle">Both numbers point to the same trap.</text>
  <text x="550" y="885" fill="#10b981" font-size="17" font-weight="bold" text-anchor="middle">Diagnose by what's missing, not just what's there.</text>
</svg>`,
          caption: "The diagnosis comes from the COMBINATION — too many approvals and too little strategy."
        }
      },
      {
        type: "application",
        title: "Run Your Own Pareto Audit (This Week)",
        content: `**Action: Audit one full work week. No exceptions, no estimates.**

**Step 1 — Track every 30-minute block for 5 days.**
Use a spreadsheet or a tool like **Toggl** / **RescueTime**. Don't estimate later. **Track in real time** — memory lies, calendars lie, and inboxes lie. If you can't get 5 days, get 3. If you can't get 3, you're already too trapped to do this lesson.

**Step 2 — Categorize each block with one tag:**
- **Strategy** (vision, capital, hiring leads, market positioning)
- **Operations** (running today's business)
- **Substitution** (work a direct report could do but isn't doing)
- **Reactive** (someone else initiated this, you reacted)

**Step 3 — Score the 4 signs (1-5 each):**
1. Decision queues: How many "need your sign-off" pings/day?
2. Inbox-as-job: % of week reactive?
3. Identity fusion: Could you give up your top 3 tasks without grief?
4. Reactive calendar: How many self-initiated CEO blocks?

**Step 4 — Find the 80/20.**
List the top 5 activities that drove 80% of the **value created this week** (deals closed, hires landed, strategic decisions made). Now list everything else. The "everything else" is your **exit list** — what you need to stop, delegate, or systematize.

**Step 5 — The 30-day commitment.**
Pick **ONE category from the substitution column** and commit: in the next 30 days, you will hand it off **fully**. Not "advise on it." Not "review every time." **Off your plate, owned by someone else.**

**Common founder objection**: "*But I'm the best at this!*" — Of course you are. That's not the point. The point is whether you should be **doing it at all**. The CEO of a $50M company is not the best at any single function. They've made themselves the best at **building the people and systems that are**.

Bring your scored audit to Lesson 2, where we'll diagnose exactly **where you are the constraint**.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
  <rect width="1100" height="1100" fill="#1a1a2e"/>
  <text x="550" y="70" fill="#ffd700" font-size="32" font-weight="bold" text-anchor="middle">Your Pareto Audit — 5 Steps</text>
  <text x="550" y="110" fill="#888" font-size="20" text-anchor="middle">Run it this week. No exceptions.</text>

  <rect x="80" y="160" width="940" height="130" rx="12" fill="#6366f1" opacity="0.85"/>
  <text x="120" y="200" fill="#ffffff" font-size="22" font-weight="bold">1. Track in real time</text>
  <text x="120" y="232" fill="#ffffff" font-size="17">5 days, 30-min blocks. Toggl or a spreadsheet.</text>
  <text x="120" y="262" fill="#ffd700" font-size="16" font-style="italic">Don't estimate later — memory lies.</text>

  <rect x="80" y="305" width="940" height="130" rx="12" fill="#f59e0b" opacity="0.85"/>
  <text x="120" y="345" fill="#1a1a2e" font-size="22" font-weight="bold">2. Tag each block</text>
  <text x="120" y="377" fill="#1a1a2e" font-size="17">Strategy | Operations | Substitution | Reactive</text>
  <text x="120" y="407" fill="#1a1a2e" font-size="16" font-style="italic">Be ruthless. Substitution is the danger zone.</text>

  <rect x="80" y="450" width="940" height="130" rx="12" fill="#8b5cf6" opacity="0.85"/>
  <text x="120" y="490" fill="#ffffff" font-size="22" font-weight="bold">3. Score the 4 signs (1-5)</text>
  <text x="120" y="522" fill="#ffffff" font-size="17">Decision queues | Inbox-as-job | Identity | Reactive cal</text>
  <text x="120" y="552" fill="#ffd700" font-size="16" font-style="italic">Total &gt; 12 = you're the constraint.</text>

  <rect x="80" y="595" width="940" height="130" rx="12" fill="#0ea5e9" opacity="0.85"/>
  <text x="120" y="635" fill="#ffffff" font-size="22" font-weight="bold">4. Find the 80/20</text>
  <text x="120" y="667" fill="#ffffff" font-size="17">Top 5 activities = 80% of value. The rest is your exit list.</text>
  <text x="120" y="697" fill="#ffffff" font-size="16" font-style="italic">"Everything else" is what you'll hand off.</text>

  <rect x="80" y="740" width="940" height="130" rx="12" fill="#10b981" opacity="0.85"/>
  <text x="120" y="780" fill="#ffffff" font-size="22" font-weight="bold">5. The 30-day commitment</text>
  <text x="120" y="812" fill="#ffffff" font-size="17">Pick ONE substitution. Hand it off fully in 30 days.</text>
  <text x="120" y="842" fill="#ffd700" font-size="16" font-style="italic">Not "advise on." Off your plate, owned by someone else.</text>

  <text x="550" y="940" fill="#ffd700" font-size="22" font-weight="bold" text-anchor="middle">Bring your scored audit to Lesson 2.</text>
  <text x="550" y="980" fill="#888" font-size="17" font-style="italic" text-anchor="middle">"You can't manage what you don't measure." — Peter Drucker</text>
  <text x="550" y="1030" fill="#ef4444" font-size="17" text-anchor="middle">If you skip the audit, the rest of this book won't work.</text>
</svg>`,
          caption: "Five steps. One commitment. The audit is the price of admission for the rest of this book."
        }
      }
    ]
  },
  {
    id: "operator-to-owner-lesson-2",
    title: "Diagnose the Bottleneck",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "If You Are the Constraint, You Are the Cure",
        content: `**Eli Goldratt's Theory of Constraints** says every system has **one** bottleneck — and improving anything else is wasted effort until that constraint is fixed. In a company past product-market fit, **the founder is usually the constraint**. Not the market, not the funnel, not the engineering team. **You.**

Lesson 1 made you suspect you might be the bottleneck. Lesson 2 **proves it with data**, then tells you exactly where.

The tool is the **GSAD framework**: every hour of your week falls into one of four buckets:

- **G — Genius**: work only you can do. Strategy, capital allocation, key hires, narrative.
- **S — Skill**: things you're great at but others *could* be trained to do.
- **A — Activity**: routine work that anyone competent could handle.
- **D — Drudgery**: tasks that drain you and produce near-zero strategic value.

**Jeff Bezos** once said the most important decisions he made each year were **roughly 3**. Three. The rest could be made by others. The founder's job is to **maximize G, train S into someone else, automate or delegate A, and ruthlessly kill D**.

In this lesson, you'll:
1. Apply the **GSAD** lens to your week-long audit from Lesson 1.
2. Walk through a **worked example** of a real founder's diagnosis.
3. Find the **single block of time** that, if cleared, would unlock the most growth.
4. Build your **first delegation target**.

By the end, you'll have your **personal bottleneck statement** — a single sentence so specific it's almost embarrassing.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
  <rect width="1100" height="1100" fill="#1a1a2e"/>
  <text x="550" y="80" fill="#ffd700" font-size="36" font-weight="bold" text-anchor="middle">The GSAD Framework</text>
  <text x="550" y="125" fill="#888" font-size="20" text-anchor="middle">Every hour of your week lands in one of four buckets</text>

  <rect x="80" y="180" width="460" height="320" rx="16" fill="#10b981" opacity="0.85"/>
  <text x="310" y="230" fill="#ffffff" font-size="32" font-weight="bold" text-anchor="middle">G — Genius</text>
  <text x="310" y="275" fill="#ffffff" font-size="18" text-anchor="middle">Only you can do it.</text>
  <text x="310" y="310" fill="#ffffff" font-size="16" text-anchor="middle">Strategy. Vision.</text>
  <text x="310" y="340" fill="#ffffff" font-size="16" text-anchor="middle">Key hires. Capital allocation.</text>
  <text x="310" y="375" fill="#ffffff" font-size="16" text-anchor="middle">Narrative. Board.</text>
  <text x="310" y="430" fill="#ffd700" font-size="20" font-weight="bold" text-anchor="middle">Target: 60-70%</text>
  <text x="310" y="465" fill="#1a1a2e" font-size="16" text-anchor="middle">Actual founder avg: 5-10%</text>

  <rect x="560" y="180" width="460" height="320" rx="16" fill="#6366f1" opacity="0.85"/>
  <text x="790" y="230" fill="#ffffff" font-size="32" font-weight="bold" text-anchor="middle">S — Skill</text>
  <text x="790" y="275" fill="#ffffff" font-size="18" text-anchor="middle">You're great at it.</text>
  <text x="790" y="310" fill="#ffffff" font-size="16" text-anchor="middle">Others could be trained.</text>
  <text x="790" y="340" fill="#ffffff" font-size="16" text-anchor="middle">Enterprise sales. Product specs.</text>
  <text x="790" y="375" fill="#ffffff" font-size="16" text-anchor="middle">Hiring loops.</text>
  <text x="790" y="430" fill="#ffd700" font-size="20" font-weight="bold" text-anchor="middle">Target: 20-30%</text>
  <text x="790" y="465" fill="#ffffff" font-size="16" text-anchor="middle">Action: Train and transfer.</text>

  <rect x="80" y="520" width="460" height="320" rx="16" fill="#f59e0b" opacity="0.85"/>
  <text x="310" y="570" fill="#1a1a2e" font-size="32" font-weight="bold" text-anchor="middle">A — Activity</text>
  <text x="310" y="615" fill="#1a1a2e" font-size="18" text-anchor="middle">Anyone competent can do it.</text>
  <text x="310" y="650" fill="#1a1a2e" font-size="16" text-anchor="middle">Approvals. Status updates.</text>
  <text x="310" y="680" fill="#1a1a2e" font-size="16" text-anchor="middle">Triage. Scheduling.</text>
  <text x="310" y="710" fill="#1a1a2e" font-size="16" text-anchor="middle">Small-deal sales calls.</text>
  <text x="310" y="765" fill="#1a1a2e" font-size="20" font-weight="bold" text-anchor="middle">Target: &lt;10%</text>
  <text x="310" y="800" fill="#1a1a2e" font-size="16" text-anchor="middle">Action: Delegate or automate.</text>

  <rect x="560" y="520" width="460" height="320" rx="16" fill="#ef4444" opacity="0.85"/>
  <text x="790" y="570" fill="#ffffff" font-size="32" font-weight="bold" text-anchor="middle">D — Drudgery</text>
  <text x="790" y="615" fill="#ffffff" font-size="18" text-anchor="middle">Drains you, near-zero value.</text>
  <text x="790" y="650" fill="#ffffff" font-size="16" text-anchor="middle">Expense reports. Cal Tetris.</text>
  <text x="790" y="680" fill="#ffffff" font-size="16" text-anchor="middle">Recurring noise. Vendor mgmt.</text>
  <text x="790" y="710" fill="#ffffff" font-size="16" text-anchor="middle">Tool admin.</text>
  <text x="790" y="765" fill="#ffd700" font-size="20" font-weight="bold" text-anchor="middle">Target: 0%</text>
  <text x="790" y="800" fill="#ffffff" font-size="16" text-anchor="middle">Action: Kill or hand to EA.</text>

  <text x="550" y="910" fill="#ffd700" font-size="22" font-weight="bold" text-anchor="middle">Diagnosis lives in the gap</text>
  <text x="550" y="950" fill="#ffffff" font-size="18" text-anchor="middle">Target G is 60-70%. Most founders are at 5-10%.</text>
  <text x="550" y="990" fill="#10b981" font-size="18" text-anchor="middle">The other 90% is where you're the bottleneck.</text>
  <text x="550" y="1035" fill="#888" font-size="16" font-style="italic" text-anchor="middle">"The system has one constraint. Find it." — Goldratt</text>
</svg>`,
          caption: "GSAD: every hour of your week sorts cleanly into one of four buckets. Target G is 60-70%."
        }
      },
      {
        type: "concept",
        title: "The Self-Audit, Step by Step",
        content: `Here's the **mechanical procedure** for labeling every block of your week. Be ruthless — the temptation is to inflate your G column. **Don't.** Real diagnosis only happens with honest data.

**The 4 questions to ask for every time block:**

1. **"Could I document this so someone else could do it as well as me within 90 days?"** — If yes, it's **Skill** (S), not Genius. Genius cannot be transferred.

2. **"Does this require knowledge of the company's full strategic picture?"** — If no, it's **Activity** (A) at best. Genius requires strategic context.

3. **"Would I do this work if I were not the founder?"** — If no, it's **Drudgery** (D). Kill it.

4. **"If I were hit by a bus, would the company still need this done by ME?"** — If no, it's not Genius. The **bus test** is the hardest and most clarifying.

**Common mislabeling traps:**

- **"Sales is my Genius."** No. **Enterprise sales above $250k where your founder-narrative closes the deal** is Genius. *Discovery calls* are Skill. *Mid-market deals* are Activity. Be surgical.

- **"Hiring is my Genius."** Only **the top 5-10 hires per year** are Genius (VPs, key engineers). The next 50 hires are an HR/ops Skill that should be **systematized**.

- **"Customer escalations are my Genius."** Almost never. They feel important because customers thank you. But **a CS lead with the right playbook should be 95% as good**. You're substituting because it's emotionally rewarding, not because it's the highest leverage.

**The bottleneck statement.** After labeling, write **one sentence**:

> *"I am the bottleneck because I am spending [X hours/week] on [Activity category] when only I can do [Genius category], which I'm spending [Y hours/week] on."*

Example: *"I am the bottleneck because I am spending 18 hours/week on customer escalations when only I can do board-level fundraising strategy, which I'm spending 2 hours/week on."*

The statement should make you wince. That's the point. **The wince is the diagnosis.**`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
  <rect width="1100" height="1100" fill="#1a1a2e"/>
  <text x="550" y="70" fill="#ffd700" font-size="32" font-weight="bold" text-anchor="middle">The 4 Diagnostic Questions</text>
  <text x="550" y="115" fill="#888" font-size="20" text-anchor="middle">Ask of EVERY time block. Don't inflate G.</text>

  <rect x="80" y="160" width="940" height="150" rx="12" fill="#6366f1" opacity="0.85"/>
  <text x="120" y="200" fill="#ffffff" font-size="22" font-weight="bold">Q1: Could someone else do this as well in 90 days?</text>
  <text x="120" y="235" fill="#ffffff" font-size="17">YES → Skill (transferable). NO → maybe Genius.</text>
  <text x="120" y="275" fill="#ffd700" font-size="16" font-style="italic">Genius is non-transferable. Skill is what you train others on.</text>

  <rect x="80" y="325" width="940" height="150" rx="12" fill="#10b981" opacity="0.85"/>
  <text x="120" y="365" fill="#ffffff" font-size="22" font-weight="bold">Q2: Does this need full strategic context?</text>
  <text x="120" y="400" fill="#ffffff" font-size="17">NO → Activity. YES → may be Genius.</text>
  <text x="120" y="440" fill="#ffd700" font-size="16" font-style="italic">If a junior could handle it, it's not Genius. Period.</text>

  <rect x="80" y="490" width="940" height="150" rx="12" fill="#ef4444" opacity="0.85"/>
  <text x="120" y="530" fill="#ffffff" font-size="22" font-weight="bold">Q3: Would I do this if I weren't the founder?</text>
  <text x="120" y="565" fill="#ffffff" font-size="17">NO → Drudgery. Kill or delegate immediately.</text>
  <text x="120" y="605" fill="#ffd700" font-size="16" font-style="italic">If you're the only one who would tolerate it, it shouldn't exist.</text>

  <rect x="80" y="655" width="940" height="150" rx="12" fill="#8b5cf6" opacity="0.85"/>
  <text x="120" y="695" fill="#ffffff" font-size="22" font-weight="bold">Q4: Bus Test — would company need ME if I were gone?</text>
  <text x="120" y="730" fill="#ffffff" font-size="17">NO → not Genius. Find the next-best owner now.</text>
  <text x="120" y="770" fill="#ffd700" font-size="16" font-style="italic">If the answer is no, it's not your work.</text>

  <rect x="100" y="840" width="900" height="200" rx="14" fill="#ffd700" opacity="0.15" stroke="#ffd700" stroke-width="3"/>
  <text x="550" y="880" fill="#ffd700" font-size="22" font-weight="bold" text-anchor="middle">Bottleneck Statement Template</text>
  <text x="550" y="925" fill="#ffffff" font-size="17" text-anchor="middle">"I am the bottleneck because I spend [X hrs] on [A/D work]"</text>
  <text x="550" y="960" fill="#ffffff" font-size="17" text-anchor="middle">"when only I can do [G work], which I do [Y hrs]/week."</text>
  <text x="550" y="1010" fill="#10b981" font-size="18" font-style="italic" text-anchor="middle">The wince when you read it back IS the diagnosis.</text>
</svg>`,
          caption: "Four questions, ruthlessly applied to every block. The output is one wincing sentence."
        }
      },
      {
        type: "example",
        title: "Worked Example — Priya's Diagnosis",
        content: `**Priya**, founder of a 40-person fintech, completed Lesson 1's audit. Her week looked like this. Watch how the GSAD lens **transforms** it.

**Her raw audit (52 hours total):**

| Block | Hours | First instinct |
|---|---|---|
| Customer onboarding calls (top 20 accounts) | 9 | "Genius — I know our product best" |
| Investor updates / fundraising deck edits | 6 | "Genius — only I can tell the story" |
| Hiring loops (engineers, mid-level) | 8 | "Genius — culture matters" |
| Slack / async approvals | 11 | "Activity, I guess" |
| Product spec reviews | 7 | "Skill" |
| 1:1s with 8 direct reports | 6 | "Skill" |
| Expense report approvals | 1 | "Drudgery" |
| Strategy / planning | 2 | "Genius (rare)" |
| Random Zoom calls people invited me to | 2 | "Activity" |

**Now apply the 4 questions:**

- **Customer onboarding (9 hrs)** → Q1: "Could a great CS lead do this in 90 days?" → **YES.** This is **Skill, not Genius**. Priya was conflating expertise with non-transferability.

- **Investor updates (6 hrs)** → Q2: needs full strategic picture. **TRUE Genius.** But notice: only 6 hours.

- **Hiring loops, mid-level (8 hrs)** → Q4: bus test. "If I were gone, would the company need ME to interview a mid-level engineer?" → **NO.** This is **Activity**, dressed in Genius clothing.

- **Slack approvals (11 hrs)** → Pure **Activity**, possibly **Drudgery**. The fact that she was reflexively approving things means she wasn't even adding judgment — she was a **rubber stamp with a heartbeat**.

**Reclassified totals:**
- **Genius (true): 8 hrs** (investor work + strategy)
- **Skill: 16 hrs** (onboarding, specs, 1:1s)
- **Activity: 22 hrs** (Slack, hiring loops, random Zooms)
- **Drudgery: 6 hrs** (expenses + assorted noise)

**Her bottleneck statement:**

> *"I am the bottleneck because I spend 22 hours/week on Activity work — primarily Slack approvals and mid-level hiring loops — when only I can do board strategy and fundraising narrative, which I spend 8 hours/week on."*

**The fix Priya implemented in 60 days:**
1. Hired a Chief of Staff to absorb Slack approvals via a **decision-rights matrix**.
2. Pulled herself out of mid-level hiring loops (kept VP+ only).
3. Reclaimed 18 hrs/week → reinvested into investor relationships and a new product line.

**Outcome:** Series B closed 2 quarters later at a **2.3x valuation step-up** — directly attributable to the founder narrative work she finally had time to do.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
  <rect width="1100" height="1100" fill="#1a1a2e"/>
  <text x="550" y="70" fill="#ffd700" font-size="32" font-weight="bold" text-anchor="middle">Priya's Diagnosis</text>
  <text x="550" y="115" fill="#888" font-size="20" text-anchor="middle">From "I'm doing Genius work" to the real picture</text>

  <text x="275" y="170" fill="#ffffff" font-size="22" font-weight="bold" text-anchor="middle">First Instinct</text>
  <text x="825" y="170" fill="#ffffff" font-size="22" font-weight="bold" text-anchor="middle">After GSAD Filter</text>

  <rect x="60" y="200" width="430" height="80" rx="10" fill="#10b981" opacity="0.6"/>
  <text x="80" y="232" fill="#ffffff" font-size="17" font-weight="bold">"Genius" (claimed)</text>
  <text x="80" y="260" fill="#ffffff" font-size="15">25 hrs — onboarding, hiring, fundraising</text>

  <rect x="610" y="200" width="430" height="80" rx="10" fill="#10b981" opacity="0.95"/>
  <text x="630" y="232" fill="#ffffff" font-size="17" font-weight="bold">G (true)</text>
  <text x="630" y="260" fill="#ffffff" font-size="15">8 hrs — investor + strategy only</text>

  <rect x="60" y="295" width="430" height="80" rx="10" fill="#6366f1" opacity="0.6"/>
  <text x="80" y="327" fill="#ffffff" font-size="17" font-weight="bold">"Skill"</text>
  <text x="80" y="355" fill="#ffffff" font-size="15">13 hrs — specs, 1:1s</text>

  <rect x="610" y="295" width="430" height="80" rx="10" fill="#6366f1" opacity="0.95"/>
  <text x="630" y="327" fill="#ffffff" font-size="17" font-weight="bold">S (true)</text>
  <text x="630" y="355" fill="#ffffff" font-size="15">16 hrs — onboarding moved here</text>

  <rect x="60" y="390" width="430" height="80" rx="10" fill="#f59e0b" opacity="0.6"/>
  <text x="80" y="422" fill="#1a1a2e" font-size="17" font-weight="bold">"Activity"</text>
  <text x="80" y="450" fill="#1a1a2e" font-size="15">13 hrs — Slack, random Zooms</text>

  <rect x="610" y="390" width="430" height="80" rx="10" fill="#f59e0b" opacity="0.95"/>
  <text x="630" y="422" fill="#1a1a2e" font-size="17" font-weight="bold">A (true)</text>
  <text x="630" y="450" fill="#1a1a2e" font-size="15">22 hrs — hiring loops moved here</text>

  <rect x="60" y="485" width="430" height="80" rx="10" fill="#ef4444" opacity="0.6"/>
  <text x="80" y="517" fill="#ffffff" font-size="17" font-weight="bold">"Drudgery"</text>
  <text x="80" y="545" fill="#ffffff" font-size="15">1 hr — expenses</text>

  <rect x="610" y="485" width="430" height="80" rx="10" fill="#ef4444" opacity="0.95"/>
  <text x="630" y="517" fill="#ffffff" font-size="17" font-weight="bold">D (true)</text>
  <text x="630" y="545" fill="#ffffff" font-size="15">6 hrs — assorted noise found</text>

  <rect x="100" y="620" width="900" height="160" rx="14" fill="#ffd700" opacity="0.15" stroke="#ffd700" stroke-width="3"/>
  <text x="550" y="660" fill="#ffd700" font-size="20" font-weight="bold" text-anchor="middle">Priya's Bottleneck Statement</text>
  <text x="550" y="700" fill="#ffffff" font-size="17" text-anchor="middle">22 hrs on Activity (Slack + mid-level hiring)</text>
  <text x="550" y="730" fill="#ffffff" font-size="17" text-anchor="middle">vs. 8 hrs on Genius (investor narrative + strategy)</text>
  <text x="550" y="765" fill="#ec4899" font-size="17" font-weight="bold" font-style="italic" text-anchor="middle">She winced. Then she fixed it.</text>

  <rect x="100" y="820" width="900" height="200" rx="14" fill="#10b981" opacity="0.18" stroke="#10b981" stroke-width="3"/>
  <text x="550" y="860" fill="#10b981" font-size="20" font-weight="bold" text-anchor="middle">60-Day Outcome</text>
  <text x="550" y="895" fill="#ffffff" font-size="17" text-anchor="middle">Hired Chief of Staff → 18 hrs/week reclaimed</text>
  <text x="550" y="925" fill="#ffffff" font-size="17" text-anchor="middle">Reinvested into investor relationships</text>
  <text x="550" y="960" fill="#ffd700" font-size="18" font-weight="bold" text-anchor="middle">Series B closed at 2.3x step-up valuation</text>
  <text x="550" y="995" fill="#888" font-size="15" font-style="italic" text-anchor="middle">Diagnosis → action → leverage. In that order.</text>
</svg>`,
          caption: "Priya's first instinct vs. her real GSAD distribution. The truth was 8 hours of Genius, not 25."
        }
      },
      {
        type: "quiz",
        title: "Quick Check",
        question: "A founder labels her 8 hours/week of mid-level engineering hiring loops as 'Genius work because culture matters.' Apply the 4 diagnostic questions. What is the most likely true GSAD category?",
        options: [
          { text: "Genius — culture really does matter and only the founder can protect it", correct: false },
          { text: "Skill — she's great at it, but a trained hiring manager could match her in 90 days", correct: false },
          { text: "Activity — the bus test fails (the company doesn't need HER for mid-level engineer interviews), and the work doesn't require full strategic context", correct: true },
          { text: "Drudgery — interviewing engineers is universally unpleasant", correct: false }
        ],
        explanation: "Apply Q4 (bus test): if she were gone, would the company need HER specifically to interview a mid-level engineer? No — a hiring manager with a good rubric would suffice. Apply Q2: does mid-level hiring require full strategic context? No. That's Activity. 'Culture matters' is true but doesn't make every hire Genius work — only the top 5-10 hires/year (VPs, key technical leads) clear that bar. Mislabeling Activity as Genius is the single most common bottleneck a founder won't see.",
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
  <rect width="1100" height="1100" fill="#1a1a2e"/>
  <text x="550" y="80" fill="#ffd700" font-size="32" font-weight="bold" text-anchor="middle">Hiring Loops — The Test</text>
  <text x="550" y="125" fill="#888" font-size="20" text-anchor="middle">Run the 4 questions on this block</text>

  <rect x="150" y="180" width="800" height="100" rx="12" fill="#888" opacity="0.3" stroke="#888" stroke-width="2"/>
  <text x="550" y="220" fill="#ffffff" font-size="22" font-weight="bold" text-anchor="middle">Block: 8 hrs/week, mid-level engineer interviews</text>
  <text x="550" y="255" fill="#888" font-size="18" font-style="italic" text-anchor="middle">Claimed: "Genius — culture matters"</text>

  <rect x="80" y="310" width="940" height="80" rx="10" fill="#6366f1" opacity="0.85"/>
  <text x="120" y="345" fill="#ffffff" font-size="18" font-weight="bold">Q1: Trainable in 90 days?</text>
  <text x="120" y="375" fill="#ffd700" font-size="17">YES — hiring rubric + interview training. Not Genius.</text>

  <rect x="80" y="400" width="940" height="80" rx="10" fill="#10b981" opacity="0.85"/>
  <text x="120" y="435" fill="#ffffff" font-size="18" font-weight="bold">Q2: Needs full strategic context?</text>
  <text x="120" y="465" fill="#ffd700" font-size="17">NO — competence + culture-fit checks suffice. Activity range.</text>

  <rect x="80" y="490" width="940" height="80" rx="10" fill="#ef4444" opacity="0.85"/>
  <text x="120" y="525" fill="#ffffff" font-size="18" font-weight="bold">Q3: Would I do this if I weren't founder?</text>
  <text x="120" y="555" fill="#ffd700" font-size="17">Probably not — but not Drudgery either.</text>

  <rect x="80" y="580" width="940" height="80" rx="10" fill="#8b5cf6" opacity="0.85"/>
  <text x="120" y="615" fill="#ffffff" font-size="18" font-weight="bold">Q4: Bus test — needs ME specifically?</text>
  <text x="120" y="645" fill="#ffd700" font-size="17">NO. A trained hiring manager replaces her cleanly.</text>

  <line x1="550" y1="690" x2="550" y2="740" stroke="#ffd700" stroke-width="4" marker-end="url(#arr2)"/>
  <defs>
    <marker id="arr2" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto">
      <polygon points="0 0, 12 6, 0 12" fill="#ffd700"/>
    </marker>
  </defs>

  <rect x="200" y="760" width="700" height="160" rx="14" fill="#f59e0b" opacity="0.3" stroke="#f59e0b" stroke-width="3"/>
  <text x="550" y="805" fill="#f59e0b" font-size="26" font-weight="bold" text-anchor="middle">Verdict: Activity</text>
  <text x="550" y="845" fill="#ffffff" font-size="18" text-anchor="middle">Important work — but not work that requires HER.</text>
  <text x="550" y="880" fill="#ffd700" font-size="17" font-style="italic" text-anchor="middle">"Culture matters" is true but doesn't make this Genius.</text>

  <text x="550" y="980" fill="#ec4899" font-size="18" font-weight="bold" text-anchor="middle">Mislabeling Activity as Genius is the most common founder error.</text>
  <text x="550" y="1015" fill="#888" font-size="15" font-style="italic" text-anchor="middle">It's how 8 hours becomes a permanent bottleneck.</text>
</svg>`,
          caption: "All four questions point the same way: this is Activity, not Genius. The 'culture' story was a comfort blanket."
        }
      },
      {
        type: "application",
        title: "Write Your Bottleneck Statement (Today)",
        content: `**Action: Today, before you close your laptop, complete these three steps.**

**Step 1 — Apply GSAD to your Lesson 1 audit.**
Take your time-tracked week. Label every block **G / S / A / D**. For any block you instinctively call "Genius," **run the 4 questions** anyway. Be ruthless. If even one question says "no," demote it.

**Common labels that need demotion:**
- "*All customer escalations are Genius*" → mostly Skill, sometimes Activity
- "*All hiring is Genius*" → only VP/key roles; the rest is Activity
- "*Approving major spend is Genius*" → only over thresholds you set; under, it's Activity
- "*Product specs are Genius*" → only the strategic ones; tactical is Skill

**Step 2 — Total each bucket and compare to the target:**

| Bucket | Target | Yours | Gap |
|---|---|---|---|
| Genius | 60-70% | ? | ? |
| Skill | 20-30% | ? | ? |
| Activity | <10% | ? | ? |
| Drudgery | 0% | ? | ? |

The **biggest single gap** (target vs. actual) is your bottleneck.

**Step 3 — Write your bottleneck statement.**
Use this template, fill in the blanks:

> *"I am the bottleneck because I am spending **[___] hours/week** on **[Activity/Drudgery category]** when only I can do **[Genius category]**, which I'm spending **[___] hours/week** on."*

**Then read it out loud.** If you don't wince, you're not being honest. Rewrite until it's specific enough to be embarrassing.

**Step 4 — Identify the ONE block to attack first.**
From your bottleneck statement, pick the **single biggest Activity or Drudgery line item** you can off-load in 30 days. Write down:
- The exact task or category
- Who will own it (a name, not "the team")
- The success metric ("I will not touch this work for 14 consecutive days by [date]")

This is your **first delegation target**. We'll execute it in the next lessons.

**Founder reality check**: **Andy Grove** wrote in *High Output Management* that leverage = output ÷ time. If you can't name your bottleneck, you can't increase your leverage. **You're not managing — you're just busy**.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
  <rect width="1100" height="1100" fill="#1a1a2e"/>
  <text x="550" y="70" fill="#ffd700" font-size="32" font-weight="bold" text-anchor="middle">Your Bottleneck — Today's Action</text>
  <text x="550" y="115" fill="#888" font-size="20" text-anchor="middle">Three steps. Before you close your laptop.</text>

  <rect x="80" y="170" width="940" height="160" rx="12" fill="#6366f1" opacity="0.85"/>
  <text x="120" y="210" fill="#ffffff" font-size="22" font-weight="bold">Step 1: Label every block GSAD</text>
  <text x="120" y="245" fill="#ffffff" font-size="17">Run the 4 questions on EVERY block you instinct-call "Genius."</text>
  <text x="120" y="285" fill="#ffd700" font-size="16" font-style="italic">Demote ruthlessly. Most founders have ~3x less Genius than they think.</text>

  <rect x="80" y="345" width="940" height="220" rx="12" fill="#10b981" opacity="0.85"/>
  <text x="120" y="385" fill="#ffffff" font-size="22" font-weight="bold">Step 2: Compare to target</text>
  <text x="120" y="425" fill="#ffffff" font-size="17">G: target 60-70%   |   S: 20-30%   |   A: &lt;10%   |   D: 0%</text>
  <text x="120" y="465" fill="#ffffff" font-size="17">The biggest gap = your bottleneck.</text>
  <line x1="120" y1="490" x2="980" y2="490" stroke="#ffffff" stroke-width="1" opacity="0.4"/>
  <text x="120" y="520" fill="#ffd700" font-size="17" font-style="italic">If your Activity is &gt;40%, you're substituting for your team.</text>
  <text x="120" y="550" fill="#ffd700" font-size="17" font-style="italic">If your Genius is &lt;15%, the CEO seat is empty.</text>

  <rect x="80" y="580" width="940" height="180" rx="14" fill="#ffd700" opacity="0.2" stroke="#ffd700" stroke-width="3"/>
  <text x="550" y="620" fill="#ffd700" font-size="22" font-weight="bold" text-anchor="middle">Step 3: Write the statement</text>
  <text x="550" y="660" fill="#ffffff" font-size="16" text-anchor="middle">"I am the bottleneck because I spend [X hrs] on [A/D]"</text>
  <text x="550" y="690" fill="#ffffff" font-size="16" text-anchor="middle">"when only I can do [G], which I do [Y hrs]/week."</text>
  <text x="550" y="735" fill="#ec4899" font-size="17" font-style="italic" text-anchor="middle">Read it out loud. If you don't wince, rewrite.</text>

  <rect x="80" y="780" width="940" height="180" rx="12" fill="#ef4444" opacity="0.85"/>
  <text x="120" y="820" fill="#ffffff" font-size="22" font-weight="bold">Step 4: Pick ONE block to attack</text>
  <text x="120" y="855" fill="#ffffff" font-size="17">- Exact task or category</text>
  <text x="120" y="885" fill="#ffffff" font-size="17">- Owner (a name, not "the team")</text>
  <text x="120" y="915" fill="#ffffff" font-size="17">- Metric: "I will not touch this for 14 consecutive days by [date]"</text>
  <text x="120" y="945" fill="#ffd700" font-size="16" font-style="italic">This becomes your first delegation target.</text>

  <text x="550" y="1010" fill="#888" font-size="16" font-style="italic" text-anchor="middle">"Leverage = output ÷ time." — Andy Grove, High Output Management</text>
  <text x="550" y="1040" fill="#10b981" font-size="16" text-anchor="middle">No bottleneck statement = no leverage gain. Do it now.</text>
</svg>`,
          caption: "Four steps to a bottleneck statement. The wince when you read it out loud is the signal that you're being honest."
        }
      }
    ]
  },
  {
    id: "operator-to-owner-lesson-3",
    title: "Operator vs Owner — The Identity Shift",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "The Title Change That Changes Everything",
        content: `In 2008, **Brian Chesky** stopped calling himself "Founder of Airbnb" in internal documents. He started signing emails "CEO." It sounds cosmetic. It wasn't. **The title forced a different question every morning**: not *"What problem can I solve today?"* — but *"What system needs to exist so this problem stops landing on my desk?"*

That's the **Operator-to-Owner shift**. It's not a promotion. It's an **identity transplant**.

**Operators** are heroes. They show up, see what's broken, and fix it. They're the firefighter, the closer, the all-hands engineer. The team loves them, customers love them, and the work feels deeply meaningful.

**Owners** are architects. They look at a broken thing and ask **why a person had to fix it at all**. Then they build the system, hire the person, write the playbook, or change the incentive so that **future-broken-things resolve without them**.

Same broken thing. Two completely different responses. And the company you build is **entirely determined by which response is reflexive**.

Here's the kicker: **most founders intellectually agree with this** and **practically refuse it**. Because operating feels productive. Owning feels slow, abstract, and — worst of all — **it lets other people screw it up the first time**.

This lesson covers:
1. The **single sentence** that distinguishes Operator from Owner.
2. The **5 mindset shifts** you must make (and why each one is brutal).
3. Why **renaming yourself "CEO" or "Owner"** instead of "Founder" matters more than you think.
4. The **traps** that pull successful founders back into Operator mode — and how to escape them.

**Reid Hoffman** said blitzscaling requires you to *"intentionally let things break that you could have fixed yourself."* That sentence is the entry exam for ownership.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
  <rect width="1100" height="1100" fill="#1a1a2e"/>
  <text x="550" y="70" fill="#ffd700" font-size="36" font-weight="bold" text-anchor="middle">Operator vs Owner</text>
  <text x="550" y="115" fill="#888" font-size="20" text-anchor="middle">Same problem. Two different responses. Two different companies.</text>

  <rect x="60" y="170" width="480" height="700" rx="16" fill="#ef4444" opacity="0.25" stroke="#ef4444" stroke-width="3"/>
  <text x="300" y="215" fill="#ef4444" font-size="32" font-weight="bold" text-anchor="middle">OPERATOR</text>
  <text x="300" y="255" fill="#ffffff" font-size="18" text-anchor="middle">Sees a fire → puts it out</text>

  <line x1="80" y1="285" x2="520" y2="285" stroke="#ef4444" stroke-width="2" opacity="0.5"/>

  <text x="300" y="325" fill="#ffd700" font-size="20" font-weight="bold" text-anchor="middle">Reflex question:</text>
  <text x="300" y="360" fill="#ffffff" font-size="17" font-style="italic" text-anchor="middle">"How do I fix this?"</text>

  <text x="300" y="430" fill="#ffd700" font-size="20" font-weight="bold" text-anchor="middle">Time horizon:</text>
  <text x="300" y="465" fill="#ffffff" font-size="17" text-anchor="middle">Today, this week</text>

  <text x="300" y="535" fill="#ffd700" font-size="20" font-weight="bold" text-anchor="middle">Feels like:</text>
  <text x="300" y="570" fill="#ffffff" font-size="17" text-anchor="middle">Productive. Necessary.</text>
  <text x="300" y="600" fill="#ffffff" font-size="17" text-anchor="middle">Heroic.</text>

  <text x="300" y="670" fill="#ffd700" font-size="20" font-weight="bold" text-anchor="middle">Output:</text>
  <text x="300" y="705" fill="#ffffff" font-size="17" text-anchor="middle">A solved problem</text>

  <text x="300" y="775" fill="#ffd700" font-size="20" font-weight="bold" text-anchor="middle">Cost:</text>
  <text x="300" y="810" fill="#ec4899" font-size="17" text-anchor="middle">Same problem returns</text>
  <text x="300" y="840" fill="#ec4899" font-size="17" text-anchor="middle">next week. And the next.</text>

  <rect x="560" y="170" width="480" height="700" rx="16" fill="#10b981" opacity="0.25" stroke="#10b981" stroke-width="3"/>
  <text x="800" y="215" fill="#10b981" font-size="32" font-weight="bold" text-anchor="middle">OWNER</text>
  <text x="800" y="255" fill="#ffffff" font-size="18" text-anchor="middle">Sees a fire → builds sprinklers</text>

  <line x1="580" y1="285" x2="1020" y2="285" stroke="#10b981" stroke-width="2" opacity="0.5"/>

  <text x="800" y="325" fill="#ffd700" font-size="20" font-weight="bold" text-anchor="middle">Reflex question:</text>
  <text x="800" y="360" fill="#ffffff" font-size="17" font-style="italic" text-anchor="middle">"Why did this reach me?"</text>

  <text x="800" y="430" fill="#ffd700" font-size="20" font-weight="bold" text-anchor="middle">Time horizon:</text>
  <text x="800" y="465" fill="#ffffff" font-size="17" text-anchor="middle">90 days, 1 year, 5 years</text>

  <text x="800" y="535" fill="#ffd700" font-size="20" font-weight="bold" text-anchor="middle">Feels like:</text>
  <text x="800" y="570" fill="#ffffff" font-size="17" text-anchor="middle">Slow. Abstract.</text>
  <text x="800" y="600" fill="#ffffff" font-size="17" text-anchor="middle">Like you're not working.</text>

  <text x="800" y="670" fill="#ffd700" font-size="20" font-weight="bold" text-anchor="middle">Output:</text>
  <text x="800" y="705" fill="#ffffff" font-size="17" text-anchor="middle">A system that solves the class</text>

  <text x="800" y="775" fill="#ffd700" font-size="20" font-weight="bold" text-anchor="middle">Cost:</text>
  <text x="800" y="810" fill="#10b981" font-size="17" text-anchor="middle">Things break the first time.</text>
  <text x="800" y="840" fill="#10b981" font-size="17" text-anchor="middle">You let them.</text>

  <text x="550" y="940" fill="#ffd700" font-size="22" font-weight="bold" text-anchor="middle">"Operators solve problems. Owners build systems that solve them without them."</text>
  <text x="550" y="980" fill="#888" font-size="17" text-anchor="middle">— The one sentence that distinguishes the two roles</text>
  <text x="550" y="1035" fill="#10b981" font-size="17" font-style="italic" text-anchor="middle">Brian Chesky stopped signing emails "Founder." He signed "CEO." That mattered.</text>
</svg>`,
          caption: "Same fire, two responses. The Owner's response feels slower but creates systems that compound."
        }
      },
      {
        type: "concept",
        title: "The 5 Mindset Shifts",
        content: `Each shift sounds like wisdom and feels like loss. That's the tax of becoming an Owner.

**Shift 1 — From "What can I do?" to "What system should exist?"**
Operator sees a missed deadline → works late to ship it. Owner sees a missed deadline → asks *"What's broken in our planning/staffing/incentives that produced this?"* The Operator's fix is **one ship**. The Owner's fix is **a shipping function**. The Operator's response feels good. The Owner's response builds a company.

**Shift 2 — From "I'm the best at this" to "I will not be the best at this in 12 months."**
**Patrick Collison (Stripe)** has said that as CEO, his job is to be **mediocre at everything but excellent at hiring the people who are world-class at one thing each**. The hardest move for founders is admitting that **the company outgrows your personal excellence**. Your job is to **become obsolete in every function you currently dominate**, on a planned timeline.

**Shift 3 — From "Output" to "Outcomes."**
Operator measures: emails sent, calls taken, decks reviewed, bugs squashed. Owner measures: **revenue per employee, system uptime, time-to-hire, churn-by-cohort**. Outputs are what *you* did. Outcomes are what *the company achieved*. **Andy Grove**: *"What I measure is what I value."* If you're measuring your hours, you value your hours. If you're measuring the company's outcomes, you value those.

**Shift 4 — From "Let me handle it" to "Let it break (the first time)."**
**Reid Hoffman's blitzscaling principle**: at speed, you must **accept that things you could have prevented will go wrong**, because the cost of preventing every failure is **a single-threaded company that can't scale**. The first time your new VP runs a board meeting, it will be worse than yours. **Let it be worse.** The second time, it'll be better. The fifth time, it'll be better than yours ever was.

**Shift 5 — From "Founder" to "CEO" (or "Owner").**
The title isn't decoration. **Founder** is past tense — it describes how the company started. **CEO/Owner** is present tense — it describes what the role demands today. Every time you sign "Founder," you anchor yourself to the company's youth, not its current scale. **Change your signature. Change your title in your bio. Change how you introduce yourself.** Within a quarter, your reflexes shift to match.

These shifts compound. Skip one, and the others slip. Do all five, and you become — slowly, then suddenly — **someone else**.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
  <rect width="1100" height="1100" fill="#1a1a2e"/>
  <text x="550" y="70" fill="#ffd700" font-size="32" font-weight="bold" text-anchor="middle">The 5 Mindset Shifts</text>
  <text x="550" y="115" fill="#888" font-size="20" text-anchor="middle">Each one sounds like wisdom. Each one feels like loss.</text>

  <rect x="80" y="160" width="940" height="160" rx="12" fill="#6366f1" opacity="0.85"/>
  <text x="120" y="200" fill="#ffffff" font-size="22" font-weight="bold">1. "What can I do?" → "What system should exist?"</text>
  <text x="120" y="235" fill="#ffffff" font-size="17">Operator ships once. Owner builds a shipping function.</text>
  <text x="120" y="275" fill="#ffd700" font-size="16" font-style="italic">The Owner's fix is a class of problems, not an instance.</text>
  <text x="950" y="200" fill="#ffd700" font-size="40" font-weight="bold" text-anchor="middle">1</text>

  <rect x="80" y="335" width="940" height="160" rx="12" fill="#10b981" opacity="0.85"/>
  <text x="120" y="375" fill="#ffffff" font-size="22" font-weight="bold">2. "I'm the best" → "I won't be in 12 months"</text>
  <text x="120" y="410" fill="#ffffff" font-size="17">Become obsolete in every function on a planned timeline.</text>
  <text x="120" y="450" fill="#ffd700" font-size="16" font-style="italic">Collison: mediocre at everything, excellent at hiring world-class.</text>
  <text x="950" y="375" fill="#ffd700" font-size="40" font-weight="bold" text-anchor="middle">2</text>

  <rect x="80" y="510" width="940" height="160" rx="12" fill="#f59e0b" opacity="0.85"/>
  <text x="120" y="550" fill="#1a1a2e" font-size="22" font-weight="bold">3. Output → Outcomes</text>
  <text x="120" y="585" fill="#1a1a2e" font-size="17">From emails-sent to revenue-per-employee, churn, time-to-hire.</text>
  <text x="120" y="625" fill="#1a1a2e" font-size="16" font-style="italic">Grove: "What I measure is what I value."</text>
  <text x="950" y="550" fill="#1a1a2e" font-size="40" font-weight="bold" text-anchor="middle">3</text>

  <rect x="80" y="685" width="940" height="160" rx="12" fill="#ef4444" opacity="0.85"/>
  <text x="120" y="725" fill="#ffffff" font-size="22" font-weight="bold">4. "Let me handle it" → "Let it break (first time)"</text>
  <text x="120" y="760" fill="#ffffff" font-size="17">Blitzscaling: accept the cost of preventable failures.</text>
  <text x="120" y="800" fill="#ffd700" font-size="16" font-style="italic">A single-threaded company cannot scale.</text>
  <text x="950" y="725" fill="#ffd700" font-size="40" font-weight="bold" text-anchor="middle">4</text>

  <rect x="80" y="860" width="940" height="160" rx="12" fill="#8b5cf6" opacity="0.85"/>
  <text x="120" y="900" fill="#ffffff" font-size="22" font-weight="bold">5. "Founder" → "CEO" / "Owner"</text>
  <text x="120" y="935" fill="#ffffff" font-size="17">Founder = past tense. CEO = present tense.</text>
  <text x="120" y="975" fill="#ffd700" font-size="16" font-style="italic">Change signature, bio, intro. Reflexes follow.</text>
  <text x="950" y="900" fill="#ffd700" font-size="40" font-weight="bold" text-anchor="middle">5</text>

  <text x="550" y="1065" fill="#10b981" font-size="17" font-style="italic" text-anchor="middle">Skip one and the others slip. Do all five — and slowly, then suddenly, you're someone else.</text>
</svg>`,
          caption: "The 5 mindset shifts. Each one is uncomfortable. Each one is non-optional."
        }
      },
      {
        type: "example",
        title: "How Brian Chesky Made the Shift (and the Trap That Almost Pulled Him Back)",
        content: `In **2017**, **Brian Chesky** had been CEO of Airbnb for 9 years. He was, by external measures, doing it right: delegating, hiring, building systems. He had a COO, a CFO, a CMO. The org chart was textbook.

Then **COVID hit in March 2020**. Airbnb's revenue dropped **80% in 8 weeks**. Most of the executive team's first instinct: **defend their fiefdoms**, optimize their function, save what could be saved.

**Chesky's instinct was different.** He realized the **operator mode** — where everyone runs their function — would shrink the company defensively into oblivion. He needed to **shift the entire company back into founder mode** for a brief, deliberate window — but **without himself becoming the operator again**.

So he did something specific and counter-intuitive: he **flattened the org chart**, took the company **back to "founder mode"** at the leadership layer, but **explicitly kept his own role as the architect**, not the doer.

**What Operator-mode Chesky would have done:**
- Personally redesigned every feature.
- Approved every layoff list line-by-line.
- Run the IPO roadshow himself for every meeting.

**What Owner-mode Chesky actually did:**
- **Rewrote the company's strategic narrative** (one document, weeks of effort) — clearly Genius work.
- **Restructured leadership incentives** to align with the new strategy.
- **Said no** to ~80% of operational decisions that crossed his desk and **pushed them back down**.
- Let his head of product **rebuild the product organization**, knowing the first version would be flawed.

**The result**: Airbnb went public in **December 2020** at a **$47B valuation**. Chesky later wrote that his hardest discipline was **resisting the urge to "save" each problem himself**, because *"the moment I do it, my org chart's IQ drops by 30 points."*

**The trap that almost pulled him back**: a few weeks into the crisis, he caught himself rewriting an internal memo a VP had drafted. He stopped mid-edit and realized: *"If I rewrite this memo, I'm telling every VP that their drafts don't matter, and that the only safe path is to wait for me."*

He sent the VP's original. It had a typo. The world did not end.

**The lesson**: The shift is not a one-time event. It's a **thousand small refusals to operate**, made every week, for years. The trap is not failing to start — it's **slipping back when the stakes feel high**.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
  <rect width="1100" height="1100" fill="#1a1a2e"/>
  <text x="550" y="70" fill="#ffd700" font-size="32" font-weight="bold" text-anchor="middle">Chesky in 2020 — Two Possible Responses</text>
  <text x="550" y="115" fill="#888" font-size="20" text-anchor="middle">Revenue down 80%. The Owner's discipline gets tested.</text>

  <rect x="60" y="170" width="480" height="380" rx="16" fill="#ef4444" opacity="0.2" stroke="#ef4444" stroke-width="3"/>
  <text x="300" y="215" fill="#ef4444" font-size="26" font-weight="bold" text-anchor="middle">Operator Chesky</text>
  <text x="300" y="250" fill="#ffffff" font-size="17" font-style="italic" text-anchor="middle">(hypothetical)</text>

  <text x="300" y="305" fill="#ffd700" font-size="17" font-weight="bold" text-anchor="middle">Would have:</text>
  <text x="80" y="345" fill="#ffffff" font-size="16">- Redesigned features himself</text>
  <text x="80" y="375" fill="#ffffff" font-size="16">- Approved layoff lists line-by-line</text>
  <text x="80" y="405" fill="#ffffff" font-size="16">- Run IPO roadshow personally</text>
  <text x="80" y="435" fill="#ffffff" font-size="16">- Rewritten every VP's memo</text>
  <text x="80" y="465" fill="#ffffff" font-size="16">- Made every customer call himself</text>

  <text x="300" y="515" fill="#ef4444" font-size="16" font-weight="bold" font-style="italic" text-anchor="middle">Result: defensive shrinkage</text>

  <rect x="560" y="170" width="480" height="380" rx="16" fill="#10b981" opacity="0.2" stroke="#10b981" stroke-width="3"/>
  <text x="800" y="215" fill="#10b981" font-size="26" font-weight="bold" text-anchor="middle">Owner Chesky</text>
  <text x="800" y="250" fill="#ffffff" font-size="17" font-style="italic" text-anchor="middle">(what he actually did)</text>

  <text x="800" y="305" fill="#ffd700" font-size="17" font-weight="bold" text-anchor="middle">Did:</text>
  <text x="580" y="345" fill="#ffffff" font-size="16">- Rewrote strategic narrative</text>
  <text x="580" y="375" fill="#ffffff" font-size="16">- Restructured leadership incentives</text>
  <text x="580" y="405" fill="#ffffff" font-size="16">- Said NO to ~80% of decisions</text>
  <text x="580" y="435" fill="#ffffff" font-size="16">- Let head of product rebuild org</text>
  <text x="580" y="465" fill="#ffffff" font-size="16">- Sent VP's memo with the typo</text>

  <text x="800" y="515" fill="#10b981" font-size="16" font-weight="bold" font-style="italic" text-anchor="middle">Result: $47B IPO 9 months later</text>

  <rect x="100" y="590" width="900" height="190" rx="14" fill="#f59e0b" opacity="0.18" stroke="#f59e0b" stroke-width="3"/>
  <text x="550" y="630" fill="#f59e0b" font-size="22" font-weight="bold" text-anchor="middle">The Pullback Trap</text>
  <text x="550" y="670" fill="#ffffff" font-size="17" text-anchor="middle">He caught himself rewriting a VP's memo, mid-edit.</text>
  <text x="550" y="705" fill="#ffffff" font-size="17" text-anchor="middle">He stopped, deleted his edits, sent the original.</text>
  <text x="550" y="745" fill="#ffd700" font-size="17" font-style="italic" text-anchor="middle">"If I rewrite this memo, every VP learns to wait for me."</text>

  <rect x="100" y="810" width="900" height="200" rx="14" fill="#6366f1" opacity="0.25" stroke="#6366f1" stroke-width="3"/>
  <text x="550" y="855" fill="#6366f1" font-size="22" font-weight="bold" text-anchor="middle">The Real Lesson</text>
  <text x="550" y="895" fill="#ffffff" font-size="17" text-anchor="middle">The shift is not a one-time event.</text>
  <text x="550" y="925" fill="#ffffff" font-size="17" text-anchor="middle">It's a thousand small refusals to operate, every week.</text>
  <text x="550" y="965" fill="#ec4899" font-size="17" font-weight="bold" font-style="italic" text-anchor="middle">The trap isn't failing to start. It's slipping back when stakes feel high.</text>
  <text x="550" y="1000" fill="#888" font-size="15" text-anchor="middle">The world did not end. The typo went out. The company survived.</text>
</svg>`,
          caption: "Chesky's COVID moment — two possible Cheskys, one of whom built a $47B IPO."
        }
      },
      {
        type: "quiz",
        title: "Quick Check",
        question: "A founder's VP of Sales drafts a board update that contains a small forecasting error. The board meeting is in 6 hours. What is the highest-leverage OWNER response?",
        options: [
          { text: "Rewrite the update yourself. Stakes are too high to risk anything else.", correct: false },
          { text: "Send it back to the VP with the error flagged, give a 2-hour deadline, and accept that the next version might still be imperfect — preserving the system that develops the VP's judgment", correct: true },
          { text: "Edit the error silently and present the update yourself at the board meeting", correct: false },
          { text: "Forward it to the CFO to fix instead, since the CFO is more reliable", correct: false }
        ],
        explanation: "This is the Chesky-memo moment in miniature. Option B preserves the system: the VP owns the work, learns from the error, and grows. Option A (rewrite it) teaches the VP to wait for you forever. Option C (silently fix and present) hides the error and prevents learning — and signals you don't trust your VP at the board. Option D outsources the problem to another exec, which solves the immediate issue but undermines the VP's growth and creates resentment. The Owner's job is to build the VP, not to ship one perfect deck.",
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
  <rect width="1100" height="1100" fill="#1a1a2e"/>
  <text x="550" y="80" fill="#ffd700" font-size="32" font-weight="bold" text-anchor="middle">The Board Update Test</text>
  <text x="550" y="125" fill="#888" font-size="20" text-anchor="middle">Same problem. Four responses. Only one is Owner-mode.</text>

  <rect x="80" y="180" width="940" height="130" rx="12" fill="#ef4444" opacity="0.8"/>
  <text x="120" y="220" fill="#ffffff" font-size="20" font-weight="bold">A: Rewrite it yourself</text>
  <text x="120" y="255" fill="#ffffff" font-size="16">Short-term: deck is fine. Long-term: VP learns to wait for you.</text>
  <text x="120" y="290" fill="#ffd700" font-size="15" font-style="italic">Pure Operator reflex. The Chesky trap.</text>

  <rect x="80" y="330" width="940" height="130" rx="12" fill="#10b981" opacity="0.85"/>
  <text x="120" y="370" fill="#ffffff" font-size="20" font-weight="bold">B: Send back with flag + 2-hr deadline</text>
  <text x="120" y="405" fill="#ffffff" font-size="16">Short-term: deck might be 95% perfect. Long-term: VP gains judgment.</text>
  <text x="120" y="440" fill="#ffd700" font-size="15" font-style="italic">Owner: builds the person, accepts the cost.</text>

  <rect x="80" y="480" width="940" height="130" rx="12" fill="#f59e0b" opacity="0.8"/>
  <text x="120" y="520" fill="#1a1a2e" font-size="20" font-weight="bold">C: Silently fix and present yourself</text>
  <text x="120" y="555" fill="#1a1a2e" font-size="16">Hides the error. VP never learns. You become bottleneck of board narrative.</text>
  <text x="120" y="590" fill="#1a1a2e" font-size="15" font-style="italic">Worst of all worlds: looks like ownership, is operating.</text>

  <rect x="80" y="630" width="940" height="130" rx="12" fill="#8b5cf6" opacity="0.8"/>
  <text x="120" y="670" fill="#ffffff" font-size="20" font-weight="bold">D: Outsource to CFO instead</text>
  <text x="120" y="705" fill="#ffffff" font-size="16">Solves the deck. Skips the VP's growth. Creates resentment.</text>
  <text x="120" y="740" fill="#ffd700" font-size="15" font-style="italic">Lateral substitution, not ownership.</text>

  <line x1="550" y1="790" x2="550" y2="840" stroke="#ffd700" stroke-width="4" marker-end="url(#arr3)"/>
  <defs>
    <marker id="arr3" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto">
      <polygon points="0 0, 12 6, 0 12" fill="#ffd700"/>
    </marker>
  </defs>

  <rect x="180" y="860" width="740" height="170" rx="14" fill="#10b981" opacity="0.2" stroke="#10b981" stroke-width="3"/>
  <text x="550" y="905" fill="#10b981" font-size="22" font-weight="bold" text-anchor="middle">Answer: B</text>
  <text x="550" y="945" fill="#ffffff" font-size="17" text-anchor="middle">The Owner's job is to build the VP, not to ship a perfect deck.</text>
  <text x="550" y="985" fill="#ffd700" font-size="16" font-style="italic" text-anchor="middle">Every rewrite is a vote for a single-threaded company.</text>
</svg>`,
          caption: "Four responses. Only B builds the VP. The rest are Operator reflexes in different costumes."
        }
      },
      {
        type: "application",
        title: "Your Identity Shift — Concrete Moves This Week",
        content: `**Action: Implement these 5 changes this week. Each one anchors a specific mindset shift.**

**1. Change your title — everywhere — by Friday.**
- Email signature
- LinkedIn
- Internal Slack profile
- How you introduce yourself in meetings
From **"Founder"** to **"CEO"** or **"Owner"** or **"Founder & CEO"** (in that order — CEO first if you want the shift to stick). The micro-friction every time you write or say it **trains your brain**.

**2. Run the "system question" 3x daily.**
When a problem lands on your desk, **before solving it**, ask out loud (literally — say it):
> *"Why did this reach me? What system or person should have handled it?"*
Track for a week. You'll find that **40-60% of inbound problems** point to a missing process, unclear ownership, or a person who's afraid to decide.

**3. Pick ONE function to become obsolete in.**
Choose the function where you're currently the **operational ceiling** (often sales, product, or hiring). Write a **12-month obsolescence plan**: in 12 months, who will be the world-class person doing this? What do you need to hire / train / document so that on month 13, **you don't need to touch it**?

**4. Run the "let it break" experiment.**
Pick **one low-to-medium stakes thing** this week that you'd normally rescue. **Don't rescue it.** Let your VP / lead run it imperfectly. Document what happened:
- Did the company survive? (Yes.)
- Did the person learn? (Probably.)
- Did the next iteration improve? (Watch and see.)
Build the **muscle of restraint**. Without it, every shift in this lesson will collapse.

**5. Replace one Output metric with an Outcome metric.**
On your weekly dashboard (or notebook), remove one metric like *"hours worked"* or *"emails responded to"* and replace it with an **outcome** the **company** owns: *revenue per employee, NPS, time-to-close-a-VP-role, % of decisions made without my involvement*. Stare at it weekly. **It will train your attention.**

**The 90-day test**: in 90 days, your bottleneck statement (from Lesson 2) should be measurably different. If it reads the same, **the shift didn't happen — and no amount of reading this book will substitute for the practice.**

**Closing thought from Ben Horowitz** (*The Hard Thing About Hard Things*): *"As a startup CEO, I slept like a baby. I woke up every two hours and cried."* That's Operator-mode. **The shift to Owner is what lets you sleep again** — not because the problems shrink, but because **you stop being the only one carrying them.**`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
  <rect width="1100" height="1100" fill="#1a1a2e"/>
  <text x="550" y="70" fill="#ffd700" font-size="32" font-weight="bold" text-anchor="middle">This Week's 5 Concrete Moves</text>
  <text x="550" y="115" fill="#888" font-size="20" text-anchor="middle">Each one anchors a specific mindset shift</text>

  <rect x="80" y="155" width="940" height="155" rx="12" fill="#8b5cf6" opacity="0.85"/>
  <text x="120" y="195" fill="#ffffff" font-size="22" font-weight="bold">1. Change your title everywhere</text>
  <text x="120" y="230" fill="#ffffff" font-size="17">"Founder" → "CEO" or "Owner"</text>
  <text x="120" y="265" fill="#ffffff" font-size="17">Email sig, LinkedIn, Slack, intros.</text>
  <text x="120" y="295" fill="#ffd700" font-size="16" font-style="italic">Micro-friction trains the brain.</text>

  <rect x="80" y="325" width="940" height="155" rx="12" fill="#6366f1" opacity="0.85"/>
  <text x="120" y="365" fill="#ffffff" font-size="22" font-weight="bold">2. Ask the system question 3x daily</text>
  <text x="120" y="400" fill="#ffffff" font-size="17">"Why did this reach me? What should have caught it?"</text>
  <text x="120" y="435" fill="#ffffff" font-size="17">Track for a week.</text>
  <text x="120" y="465" fill="#ffd700" font-size="16" font-style="italic">40-60% will reveal missing systems.</text>

  <rect x="80" y="495" width="940" height="155" rx="12" fill="#10b981" opacity="0.85"/>
  <text x="120" y="535" fill="#ffffff" font-size="22" font-weight="bold">3. Pick one function to go obsolete in</text>
  <text x="120" y="570" fill="#ffffff" font-size="17">Write a 12-month obsolescence plan.</text>
  <text x="120" y="605" fill="#ffffff" font-size="17">Month 13: you don't touch it.</text>
  <text x="120" y="635" fill="#ffd700" font-size="16" font-style="italic">Pre-commit, then hire/train against the plan.</text>

  <rect x="80" y="665" width="940" height="155" rx="12" fill="#f59e0b" opacity="0.85"/>
  <text x="120" y="705" fill="#1a1a2e" font-size="22" font-weight="bold">4. Let one thing break</text>
  <text x="120" y="740" fill="#1a1a2e" font-size="17">Pick a low-stakes rescue. Don't rescue it.</text>
  <text x="120" y="775" fill="#1a1a2e" font-size="17">Document the outcome (the company survives).</text>
  <text x="120" y="805" fill="#1a1a2e" font-size="16" font-style="italic">Build the muscle of restraint.</text>

  <rect x="80" y="835" width="940" height="155" rx="12" fill="#ec4899" opacity="0.85"/>
  <text x="120" y="875" fill="#ffffff" font-size="22" font-weight="bold">5. Swap Output metric for Outcome metric</text>
  <text x="120" y="910" fill="#ffffff" font-size="17">Hours worked → revenue/employee, NPS, time-to-hire</text>
  <text x="120" y="945" fill="#ffffff" font-size="17">Stare at it weekly. It trains attention.</text>
  <text x="120" y="975" fill="#ffd700" font-size="16" font-style="italic">What you measure is what you become.</text>

  <text x="550" y="1040" fill="#888" font-size="16" font-style="italic" text-anchor="middle">"I slept like a baby. I woke up every two hours and cried." — Ben Horowitz</text>
  <text x="550" y="1075" fill="#10b981" font-size="16" text-anchor="middle">The shift to Owner is what lets you sleep again.</text>
</svg>`,
          caption: "Five moves this week. Title, question, obsolescence plan, restraint, outcome metric. The shift starts in the calendar."
        }
      }
    ]
  },
{
    id: "operator-to-owner-lesson-4",
    title: "The Delegation Matrix",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "Keep, Drop, Delegate, Develop",
        content: `You can't delegate your way out of the operator's trap by working harder. You need a filter — a fast, repeatable decision tool that tells you, for every task on your plate: keep it, drop it, delegate it, or develop someone into it.

The Delegation Matrix is a 2x2 grid. The vertical axis is IMPACT — how much this task moves the business forward (low to high). The horizontal axis is WHO-CAN-DO-THIS — can only you do it, or could someone else do it (with training, with a process, with a junior hire)?

Four quadrants emerge:
- High Impact + Only You: KEEP. This is your real job.
- High Impact + Someone Else Could: DEVELOP. Build a person or system to take it.
- Low Impact + Only You: DROP or systemize. You're being precious about it.
- Low Impact + Someone Else Could: DELEGATE. Today. This week. No excuses.

Most founders spend 60-70% of their week in the bottom-right quadrant — low-impact tasks anyone could do — because those tasks are familiar, urgent, and feel productive. Meanwhile the top-left quadrant (the work only they can do) gets squeezed into evenings and weekends.

In this lesson you'll learn the matrix, see it applied to a real founder's week, and run every task on your plate through the $100/hr filter — a brutal litmus test that surfaces the work you're stealing from yourself.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="38" font-weight="bold">THE DELEGATION MATRIX</text><text x="550" y="115" text-anchor="middle" fill="#ffffff" font-size="20">Impact vs. Who Can Do It</text><line x1="200" y1="200" x2="200" y2="950" stroke="#ffffff" stroke-width="3"/><line x1="200" y1="950" x2="1000" y2="950" stroke="#ffffff" stroke-width="3"/><line x1="600" y1="200" x2="600" y2="950" stroke="#888" stroke-width="2" stroke-dasharray="5,5"/><line x1="200" y1="575" x2="1000" y2="575" stroke="#888" stroke-width="2" stroke-dasharray="5,5"/><text x="120" y="400" text-anchor="middle" fill="#ffffff" font-size="22" transform="rotate(-90 120 400)">HIGH IMPACT</text><text x="120" y="780" text-anchor="middle" fill="#ffffff" font-size="22" transform="rotate(-90 120 780)">LOW IMPACT</text><text x="400" y="1000" text-anchor="middle" fill="#ffffff" font-size="22">ONLY YOU</text><text x="800" y="1000" text-anchor="middle" fill="#ffffff" font-size="22">SOMEONE ELSE COULD</text><rect x="220" y="220" width="360" height="335" fill="#10b981" opacity="0.85" rx="8"/><text x="400" y="290" text-anchor="middle" fill="#1a1a2e" font-size="44" font-weight="bold">KEEP</text><text x="400" y="340" text-anchor="middle" fill="#1a1a2e" font-size="18">Vision, key relationships,</text><text x="400" y="365" text-anchor="middle" fill="#1a1a2e" font-size="18">strategic bets, hiring leads</text><text x="400" y="430" text-anchor="middle" fill="#1a1a2e" font-size="16" font-style="italic">Protect this time fiercely</text><text x="400" y="500" text-anchor="middle" fill="#1a1a2e" font-size="14">Target: 60-70% of week</text><rect x="620" y="220" width="360" height="335" fill="#6366f1" opacity="0.85" rx="8"/><text x="800" y="290" text-anchor="middle" fill="#ffffff" font-size="44" font-weight="bold">DEVELOP</text><text x="800" y="340" text-anchor="middle" fill="#ffffff" font-size="18">Build a person or system</text><text x="800" y="365" text-anchor="middle" fill="#ffffff" font-size="18">to absorb it over 90 days</text><text x="800" y="430" text-anchor="middle" fill="#ffffff" font-size="16" font-style="italic">SOP, hire, train, hand off</text><text x="800" y="500" text-anchor="middle" fill="#ffffff" font-size="14">Target: 20-25% of week</text><rect x="220" y="595" width="360" height="335" fill="#f59e0b" opacity="0.85" rx="8"/><text x="400" y="665" text-anchor="middle" fill="#1a1a2e" font-size="44" font-weight="bold">DROP</text><text x="400" y="715" text-anchor="middle" fill="#1a1a2e" font-size="18">Why are you doing this?</text><text x="400" y="740" text-anchor="middle" fill="#1a1a2e" font-size="18">Kill it or automate it</text><text x="400" y="805" text-anchor="middle" fill="#1a1a2e" font-size="16" font-style="italic">No one needs it from you</text><text x="400" y="875" text-anchor="middle" fill="#1a1a2e" font-size="14">Target: 0-5% of week</text><rect x="620" y="595" width="360" height="335" fill="#ef4444" opacity="0.85" rx="8"/><text x="800" y="665" text-anchor="middle" fill="#ffffff" font-size="44" font-weight="bold">DELEGATE</text><text x="800" y="715" text-anchor="middle" fill="#ffffff" font-size="18">Hand off THIS WEEK</text><text x="800" y="740" text-anchor="middle" fill="#ffffff" font-size="18">VA, ops, junior staff</text><text x="800" y="805" text-anchor="middle" fill="#ffffff" font-size="16" font-style="italic">You're stealing your own time</text><text x="800" y="875" text-anchor="middle" fill="#ffffff" font-size="14">Target: 5-10% of week (transition out)</text><text x="550" y="1060" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">Every task on your list belongs in exactly ONE box.</text></svg>`,
          caption: "The 2x2 matrix every task on your calendar must pass through."
        }
      },
      {
        type: "concept",
        title: "The $100/Hour Filter",
        content: `Before you sort tasks into the matrix, run them through a single brutal question: "Is this task worth $100 an hour?"

The $100/hr filter is a sorting heuristic, not your actual hourly value (we'll calculate that in lesson 6). It's a thinking tool. If a task can be done by someone you could hire for less than $100/hr — a VA at $25/hr, a bookkeeper at $50/hr, an executive assistant at $40/hr, a junior marketer at $60/hr — and you're doing it yourself, you are actively losing money. You are paying the difference between your real hourly value and theirs out of your own pocket, in time you'll never get back.

Run these examples through the filter:
- Answering routine customer emails: $20/hr work. DELEGATE.
- Posting to social media: $30/hr work. DELEGATE.
- Reconciling Stripe transactions: $40/hr bookkeeper work. DELEGATE.
- Building this month's sales deck: $75/hr work. DEVELOP (junior + template).
- Calling your top 5 enterprise prospects: KEEP. Only you can do this.
- Closing a strategic partnership: KEEP. Only you can do this.
- Coaching your VP of Sales on her quarterly plan: KEEP.
- Onboarding a new hire personally: DEVELOP a system. KEEP only the culture conversation.

Founders resist the filter because they tell themselves stories: "I'm faster." "I care more." "No one will do it right." All three are true — and all three are irrelevant. The point isn't that someone will do it as well as you. The point is that someone will do it well enough, freeing you to do the work that produces 10x the return.

The filter is binary. If the answer is "yes, this is $100/hr+ work AND only I can do it," keep it. Everything else moves to the right side of the matrix. No exceptions for tasks you "enjoy" or are "good at."`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="38" font-weight="bold">THE $100/HOUR FILTER</text><text x="550" y="115" text-anchor="middle" fill="#ffffff" font-size="18">One question. Three outcomes.</text><rect x="350" y="170" width="400" height="100" fill="#6366f1" rx="10"/><text x="550" y="215" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">Is this task worth</text><text x="550" y="248" text-anchor="middle" fill="#ffd700" font-size="28" font-weight="bold">$100/hour?</text><line x1="550" y1="270" x2="250" y2="350" stroke="#ffffff" stroke-width="2"/><line x1="550" y1="270" x2="550" y2="350" stroke="#ffffff" stroke-width="2"/><line x1="550" y1="270" x2="850" y2="350" stroke="#ffffff" stroke-width="2"/><rect x="100" y="350" width="300" height="180" fill="#ef4444" rx="10"/><text x="250" y="395" text-anchor="middle" fill="#ffffff" font-size="24" font-weight="bold">NO</text><text x="250" y="430" text-anchor="middle" fill="#ffffff" font-size="16">Someone else can</text><text x="250" y="455" text-anchor="middle" fill="#ffffff" font-size="16">do it for less</text><text x="250" y="500" text-anchor="middle" fill="#1a1a2e" font-size="20" font-weight="bold">DELEGATE</text><rect x="400" y="350" width="300" height="180" fill="#f59e0b" rx="10"/><text x="550" y="395" text-anchor="middle" fill="#1a1a2e" font-size="22" font-weight="bold">YES, but...</text><text x="550" y="425" text-anchor="middle" fill="#1a1a2e" font-size="15">someone could be</text><text x="550" y="448" text-anchor="middle" fill="#1a1a2e" font-size="15">trained to do it</text><text x="550" y="500" text-anchor="middle" fill="#1a1a2e" font-size="20" font-weight="bold">DEVELOP</text><rect x="700" y="350" width="300" height="180" fill="#10b981" rx="10"/><text x="850" y="395" text-anchor="middle" fill="#1a1a2e" font-size="24" font-weight="bold">YES</text><text x="850" y="430" text-anchor="middle" fill="#1a1a2e" font-size="16">AND only YOU</text><text x="850" y="455" text-anchor="middle" fill="#1a1a2e" font-size="16">can do it well</text><text x="850" y="500" text-anchor="middle" fill="#1a1a2e" font-size="20" font-weight="bold">KEEP</text><text x="550" y="610" text-anchor="middle" fill="#ffd700" font-size="24" font-weight="bold">WORK-LEVEL PRICING REFERENCE</text><rect x="150" y="650" width="800" height="50" fill="#ef4444" opacity="0.3" rx="6"/><text x="180" y="682" fill="#ffffff" font-size="16">$15-30/hr</text><text x="400" y="682" fill="#ffffff" font-size="16">Data entry, scheduling, inbox triage, social posts</text><rect x="150" y="710" width="800" height="50" fill="#f59e0b" opacity="0.3" rx="6"/><text x="180" y="742" fill="#ffffff" font-size="16">$40-60/hr</text><text x="400" y="742" fill="#ffffff" font-size="16">Bookkeeping, basic copy, project coordination</text><rect x="150" y="770" width="800" height="50" fill="#6366f1" opacity="0.3" rx="6"/><text x="180" y="802" fill="#ffffff" font-size="16">$75-120/hr</text><text x="400" y="802" fill="#ffffff" font-size="16">Junior management, design, mid-level marketing</text><rect x="150" y="830" width="800" height="50" fill="#10b981" opacity="0.3" rx="6"/><text x="180" y="862" fill="#ffffff" font-size="16">$200-500/hr</text><text x="400" y="862" fill="#ffffff" font-size="16">Senior strategy, key relationships, M&amp;A, vision</text><rect x="150" y="890" width="800" height="50" fill="#ffd700" opacity="0.4" rx="6"/><text x="180" y="922" fill="#1a1a2e" font-size="16" font-weight="bold">$1000+/hr</text><text x="400" y="922" fill="#1a1a2e" font-size="16" font-weight="bold">Founder-only: vision, top hires, defining bets</text><text x="550" y="1010" text-anchor="middle" fill="#ffffff" font-size="18" font-style="italic">If you're doing $30/hr work, you're paying yourself</text><text x="550" y="1040" text-anchor="middle" fill="#ffffff" font-size="18" font-style="italic">the difference to NOT delegate.</text></svg>`,
          caption: "The single question that sorts your week."
        }
      },
      {
        type: "example",
        title: "Maya's Week, Sorted",
        content: `Meet Maya. She founded a marketing agency four years ago. Revenue: $1.4M. Team: 8 people. She works 62 hours a week and is on the edge of burnout. She tracked her week and pulled out 20 recurring tasks. Here's how the matrix sorted them.

KEEP (only her, high impact):
1. Weekly 1-on-1s with her 3 direct reports
2. Final pricing approvals on deals over $50K
3. Quarterly strategy session prep
4. Calls with her top 4 client accounts (60% of revenue)
5. Hiring decisions for senior roles

DEVELOP (high impact, someone could be trained):
6. Reviewing all client work before delivery (build QA lead)
7. Writing proposals (build template + train AE)
8. Monthly financial review with bookkeeper (train COO to lead, she reviews)
9. Onboarding new clients (build SOP, hand to project manager)
10. Updating the agency's case studies (train marketing coordinator)

DELEGATE (low impact, anyone can do it):
11. Replying to inbound contact-form emails — VA, $25/hr
12. Posting on LinkedIn and the agency blog — junior marketer
13. Booking her own travel — VA
14. Reconciling Stripe and QuickBooks — bookkeeper, $45/hr
15. Pulling weekly metrics dashboards — ops coordinator
16. Approving expense reports under $500 — set a policy, let it flow

DROP:
17. Sitting in on every weekly creative review (she didn't need to be there)
18. Personally reviewing every Slack channel daily
19. Manual time-tracking spreadsheet (replaced with software)
20. Hosting the company "Friday wrap" (rotate to team)

The result of sorting: Maya identified 9 hours/week she could immediately delegate to existing staff (VA, bookkeeper, junior marketer), 6 hours she could drop entirely, and a 90-day plan to develop two people who could absorb another 14 hours. Total: 29 hours back. Her 62-hour week becomes a 33-hour week — spent on the work only she can do. Revenue does not drop. It grows, because she's finally doing the work that grows it.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="60" text-anchor="middle" fill="#ffd700" font-size="34" font-weight="bold">MAYA'S 62-HOUR WEEK, SORTED</text><text x="550" y="100" text-anchor="middle" fill="#ffffff" font-size="18">20 recurring tasks across 4 quadrants</text><rect x="60" y="140" width="500" height="380" fill="#10b981" opacity="0.85" rx="10"/><text x="310" y="180" text-anchor="middle" fill="#1a1a2e" font-size="26" font-weight="bold">KEEP (5 tasks / 18 hrs)</text><text x="80" y="220" fill="#1a1a2e" font-size="15">1. Weekly 1:1s with 3 directs</text><text x="80" y="250" fill="#1a1a2e" font-size="15">2. Final pricing on $50K+ deals</text><text x="80" y="280" fill="#1a1a2e" font-size="15">3. Quarterly strategy prep</text><text x="80" y="310" fill="#1a1a2e" font-size="15">4. Top 4 client account calls (60% rev)</text><text x="80" y="340" fill="#1a1a2e" font-size="15">5. Senior role hiring decisions</text><text x="80" y="400" fill="#1a1a2e" font-size="14" font-weight="bold">Time stays here. Protected.</text><text x="80" y="430" fill="#1a1a2e" font-size="14">Real founder work.</text><text x="80" y="480" fill="#1a1a2e" font-size="13" font-style="italic">+ growth, + revenue, + leverage</text><rect x="580" y="140" width="460" height="380" fill="#6366f1" opacity="0.85" rx="10"/><text x="810" y="180" text-anchor="middle" fill="#ffffff" font-size="26" font-weight="bold">DEVELOP (5 / 14 hrs)</text><text x="600" y="220" fill="#ffffff" font-size="15">6. Client QA review (build QA lead)</text><text x="600" y="250" fill="#ffffff" font-size="15">7. Proposals (template + train AE)</text><text x="600" y="280" fill="#ffffff" font-size="15">8. Monthly finance (train COO)</text><text x="600" y="310" fill="#ffffff" font-size="15">9. Client onboarding (SOP to PM)</text><text x="600" y="340" fill="#ffffff" font-size="15">10. Case studies (marketing coord)</text><text x="600" y="400" fill="#ffffff" font-size="14" font-weight="bold">90-day build-out plan.</text><text x="600" y="430" fill="#ffffff" font-size="14">Systems + people.</text><text x="600" y="480" fill="#ffffff" font-size="13" font-style="italic">Exit gradually, supervise outcomes</text><rect x="60" y="540" width="500" height="380" fill="#f59e0b" opacity="0.85" rx="10"/><text x="310" y="580" text-anchor="middle" fill="#1a1a2e" font-size="26" font-weight="bold">DROP (4 / 6 hrs)</text><text x="80" y="620" fill="#1a1a2e" font-size="15">17. Weekly creative review attendance</text><text x="80" y="650" fill="#1a1a2e" font-size="15">18. Daily Slack channel review</text><text x="80" y="680" fill="#1a1a2e" font-size="15">19. Manual time-tracking sheet</text><text x="80" y="710" fill="#1a1a2e" font-size="15">20. Hosting "Friday wrap" meeting</text><text x="80" y="770" fill="#1a1a2e" font-size="14" font-weight="bold">Just stop. Nobody needs these.</text><text x="80" y="800" fill="#1a1a2e" font-size="14">Or automate with software.</text><text x="80" y="850" fill="#1a1a2e" font-size="13" font-style="italic">Reclaimed time, zero downside</text><rect x="580" y="540" width="460" height="380" fill="#ef4444" opacity="0.85" rx="10"/><text x="810" y="580" text-anchor="middle" fill="#ffffff" font-size="26" font-weight="bold">DELEGATE (6 / 9 hrs)</text><text x="600" y="620" fill="#ffffff" font-size="15">11. Inbound emails — VA $25/hr</text><text x="600" y="650" fill="#ffffff" font-size="15">12. LinkedIn / blog posts — junior</text><text x="600" y="680" fill="#ffffff" font-size="15">13. Travel booking — VA</text><text x="600" y="710" fill="#ffffff" font-size="15">14. Stripe + QB recs — bookkeeper</text><text x="600" y="740" fill="#ffffff" font-size="15">15. Weekly metric pulls — ops</text><text x="600" y="770" fill="#ffffff" font-size="15">16. Small expense approvals — policy</text><text x="600" y="820" fill="#ffffff" font-size="14" font-weight="bold">Move THIS WEEK. No delay.</text><text x="600" y="870" fill="#ffffff" font-size="13" font-style="italic">Cost: ~$2K/mo. Returns: 9 hrs/wk</text><rect x="200" y="950" width="700" height="110" fill="#ffd700" opacity="0.95" rx="10"/><text x="550" y="990" text-anchor="middle" fill="#1a1a2e" font-size="22" font-weight="bold">RESULT: 62 hrs → 33 hrs</text><text x="550" y="1020" text-anchor="middle" fill="#1a1a2e" font-size="16">29 hours reclaimed. Revenue continues growing.</text><text x="550" y="1045" text-anchor="middle" fill="#1a1a2e" font-size="15" font-style="italic">Maya now spends her week on Maya-only work.</text></svg>`,
          caption: "Maya's actual sort. 29 hours/week recovered in 90 days."
        }
      },
      {
        type: "quiz",
        title: "Quick Check",
        question: "You spend 4 hours each week building a sales deck. Your VP of Sales could be trained to do it with a template and one round of your feedback. What quadrant does this task belong in?",
        options: [
          { text: "KEEP — pitching is core founder work", correct: false },
          { text: "DEVELOP — high enough impact, but someone else could do it with training", correct: true },
          { text: "DROP — sales decks are low impact", correct: false },
          { text: "DELEGATE — hand it to a VA this week", correct: false }
        ],
        explanation: "Build a template and train your VP of Sales. Sales decks ARE high-impact (they close revenue), so it's not DROP or DELEGATE-to-a-VA. But they're not founder-exclusive — with a template and a feedback loop, your VP can own them within 90 days. That's textbook DEVELOP. You're not dumping the work; you're investing once to permanently remove it from your plate while keeping the strategic touch (you review final drafts on the biggest deals).",
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="80" text-anchor="middle" fill="#ffd700" font-size="36" font-weight="bold">DEVELOP: THE 90-DAY PLAY</text><text x="550" y="130" text-anchor="middle" fill="#ffffff" font-size="20">High impact + someone could be trained</text><rect x="100" y="180" width="900" height="120" fill="#6366f1" opacity="0.85" rx="10"/><text x="150" y="225" fill="#ffffff" font-size="24" font-weight="bold">Days 1-30:</text><text x="350" y="225" fill="#ffffff" font-size="20">Build the asset</text><text x="150" y="260" fill="#ffffff" font-size="16">Template, SOP, examples, a definition of "good"</text><text x="150" y="285" fill="#ffffff" font-size="16">You do the next deck WITH your VP, narrating the choices</text><rect x="100" y="330" width="900" height="120" fill="#6366f1" opacity="0.65" rx="10"/><text x="150" y="375" fill="#ffffff" font-size="24" font-weight="bold">Days 31-60:</text><text x="380" y="375" fill="#ffffff" font-size="20">Watch them do it</text><text x="150" y="410" fill="#ffffff" font-size="16">VP drafts, you edit. Mark every change.</text><text x="150" y="435" fill="#ffffff" font-size="16">Discuss the deltas. Update template with patterns.</text><rect x="100" y="480" width="900" height="120" fill="#6366f1" opacity="0.45" rx="10"/><text x="150" y="525" fill="#ffffff" font-size="24" font-weight="bold">Days 61-90:</text><text x="380" y="525" fill="#ffffff" font-size="20">Approve at the end only</text><text x="150" y="560" fill="#ffffff" font-size="16">VP fully owns. You see final draft 24 hrs before send.</text><text x="150" y="585" fill="#ffffff" font-size="16">Strategic feedback only on $250K+ deals.</text><rect x="200" y="650" width="700" height="200" fill="#10b981" opacity="0.85" rx="10"/><text x="550" y="700" text-anchor="middle" fill="#1a1a2e" font-size="28" font-weight="bold">RESULT @ DAY 90</text><text x="550" y="745" text-anchor="middle" fill="#1a1a2e" font-size="18">From: 4 hrs/wk → To: 20 min/wk review</text><text x="550" y="780" text-anchor="middle" fill="#1a1a2e" font-size="18">VP grows. Decks improve.</text><text x="550" y="820" text-anchor="middle" fill="#1a1a2e" font-size="18" font-weight="bold">~16 hrs/month permanently freed.</text><text x="550" y="920" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">DEVELOP is the highest-leverage move on the matrix.</text><text x="550" y="960" text-anchor="middle" fill="#ffffff" font-size="16">DELEGATE saves you hours. DEVELOP rebuilds the chair.</text><text x="550" y="1020" text-anchor="middle" fill="#888" font-size="14" font-style="italic">Worth keeping: final approval on top-tier deals only.</text></svg>`,
          caption: "DEVELOP is a 90-day investment that pays back for years."
        }
      },
      {
        type: "application",
        title: "Sort Your Week",
        content: `Do this now. Open your timesheet from lesson 2. Pull out every task — recurring meetings, one-off work, the inbox grind, the calls, the approvals. Aim for 15-25 line items.

For each one, ask in this exact order:

1. "If I stopped doing this for 30 days, would the business be measurably worse off?" If NO → DROP.

2. "Could someone I could hire for under $100/hr do this acceptably, today, with minimal training?" If YES → DELEGATE this week.

3. "Could someone be trained over 60-90 days to do this acceptably?" If YES → DEVELOP.

4. Whatever's left — that's KEEP. It should be 5-10 items max.

Now stress-test KEEP. For each item, write one sentence explaining why ONLY you can do it. "Because I'm faster" doesn't count. "Because the customer expects me" doesn't count if the customer relationship can transition. Real KEEP reasons sound like: "Because I'm the only person with full context on our 5-year direction" or "Because this relationship was built on me and the trust can't transfer in under 12 months."

Be ruthless. Most founders' first KEEP list has 12-15 items. After honest stress-testing, it shrinks to 5-7.

Then take three concrete actions this week:
- Pick 1 DROP task. Stop doing it. Don't announce it. Just stop. See what breaks.
- Pick 1 DELEGATE task. Assign it to someone on the team — or post a job for a VA today. Set a Friday deadline for handoff.
- Pick 1 DEVELOP task. Find the person. Schedule the first co-working session in the next 7 days. Block 4 hours on your calendar to build the SOP or template.

Three actions. One week. You will recover 4-8 hours immediately. That recovered time is the down payment on the rest of this book.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="36" font-weight="bold">YOUR 7-DAY SORTING PLAN</text><text x="550" y="115" text-anchor="middle" fill="#ffffff" font-size="18">Three actions. One week. Hours back.</text><rect x="100" y="160" width="900" height="80" fill="#888" opacity="0.4" rx="8"/><text x="120" y="200" fill="#ffd700" font-size="22" font-weight="bold">STEP 0:</text><text x="290" y="200" fill="#ffffff" font-size="18">Pull task list from lesson 2 timesheet (15-25 items)</text><text x="290" y="225" fill="#888" font-size="14">Be specific: not "email" but "respond to inbound leads"</text><line x1="550" y1="240" x2="550" y2="280" stroke="#ffd700" stroke-width="2"/><rect x="100" y="280" width="900" height="100" fill="#f59e0b" opacity="0.35" rx="8"/><text x="120" y="320" fill="#ffd700" font-size="22" font-weight="bold">STEP 1:</text><text x="290" y="320" fill="#ffffff" font-size="18">Sort every task into one quadrant</text><text x="290" y="350" fill="#ffffff" font-size="15">Ask the 3 filter questions in order. KEEP should be 5-7 max.</text><line x1="550" y1="380" x2="550" y2="410" stroke="#ffd700" stroke-width="2"/><rect x="100" y="410" width="900" height="510" fill="#1a1a2e" stroke="#ffd700" stroke-width="2" rx="10"/><text x="550" y="450" text-anchor="middle" fill="#ffd700" font-size="24" font-weight="bold">STEP 2: PICK 3 TASKS. ACT THIS WEEK.</text><rect x="130" y="480" width="270" height="280" fill="#f59e0b" opacity="0.85" rx="8"/><text x="265" y="515" text-anchor="middle" fill="#1a1a2e" font-size="22" font-weight="bold">DROP</text><text x="265" y="545" text-anchor="middle" fill="#1a1a2e" font-size="14">Stop one task entirely.</text><text x="265" y="570" text-anchor="middle" fill="#1a1a2e" font-size="14">Don't announce it.</text><text x="265" y="605" text-anchor="middle" fill="#1a1a2e" font-size="14" font-weight="bold">See what breaks.</text><text x="265" y="650" text-anchor="middle" fill="#1a1a2e" font-size="13" font-style="italic">Likely: nothing.</text><text x="265" y="710" text-anchor="middle" fill="#1a1a2e" font-size="14">Time saved: 1-3 hrs</text><rect x="415" y="480" width="270" height="280" fill="#ef4444" opacity="0.85" rx="8"/><text x="550" y="515" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">DELEGATE</text><text x="550" y="545" text-anchor="middle" fill="#ffffff" font-size="14">Assign or post a job</text><text x="550" y="570" text-anchor="middle" fill="#ffffff" font-size="14">for one task today.</text><text x="550" y="605" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="bold">Handoff by Friday.</text><text x="550" y="650" text-anchor="middle" fill="#ffffff" font-size="13" font-style="italic">VA, bookkeeper, junior</text><text x="550" y="710" text-anchor="middle" fill="#ffffff" font-size="14">Time saved: 2-4 hrs</text><rect x="700" y="480" width="270" height="280" fill="#6366f1" opacity="0.85" rx="8"/><text x="835" y="515" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">DEVELOP</text><text x="835" y="545" text-anchor="middle" fill="#ffffff" font-size="14">Pick the person.</text><text x="835" y="570" text-anchor="middle" fill="#ffffff" font-size="14">Schedule session 1.</text><text x="835" y="605" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="bold">Block 4 hrs to build SOP.</text><text x="835" y="650" text-anchor="middle" fill="#ffffff" font-size="13" font-style="italic">90-day handoff</text><text x="835" y="710" text-anchor="middle" fill="#ffffff" font-size="14">Time saved (eventually): 4-10 hrs</text><text x="550" y="810" text-anchor="middle" fill="#10b981" font-size="22" font-weight="bold">Expected reclaim: 4-8 hours by next Friday.</text><text x="550" y="850" text-anchor="middle" fill="#ffffff" font-size="16">This is your down payment on the rest of this book.</text><text x="550" y="890" text-anchor="middle" fill="#888" font-size="14" font-style="italic">Don't pick the easy DELEGATE. Pick the one that scares you.</text><text x="550" y="990" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">"Done" is better than "perfect."</text><text x="550" y="1030" text-anchor="middle" fill="#ffffff" font-size="16">An imperfect handoff today beats a perfect plan in Q3.</text></svg>`,
          caption: "Three actions. One week. Hours back."
        }
      }
    ]
  },
  {
    id: "operator-to-owner-lesson-5",
    title: "The Org Chart Above You",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "Draw the Chair You're Not Sitting In Yet",
        content: `Most org charts are drawn from the bottom up. You start with the people you have, write boxes around them, and connect the lines that match how the work actually flows. That's a current-state map.

We're going to do the opposite. You're going to draw the org chart from the TOP down — starting with YOUR future role at the apex, and then designing the three roles immediately below you that absorb everything you currently do but shouldn't.

This is the single most important diagram you'll draw this year. Here's why:

You can't hire your way out of the operator's trap if you don't know what you're hiring FOR. Founders hire reactively — they're drowning, they post a job, they pull whoever applies into the firehose, and six months later they're still drowning because the new hire just absorbed the worst of the work without the authority to actually own it.

The fix is to draw the destination before you take a step. Define the role you want to occupy in 12-24 months. Define the three roles that report to you and own everything else. Then — and only then — hire backwards from that picture.

Three roles, almost always:
1. A second-in-command who runs operations (COO, Head of Ops, GM).
2. A revenue leader who runs the growth engine (VP Sales, CRO, Head of Marketing).
3. A craft/delivery leader who owns what the company actually makes (VP Eng, Creative Director, Head of Product, Director of Clinical, etc.).

Below them: the rest of the company. Above them: a founder doing only founder work. You'll draw it in this lesson and identify the FIRST role to fill — which is almost never the one founders instinctively reach for.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="65" text-anchor="middle" fill="#ffd700" font-size="34" font-weight="bold">THE ORG CHART ABOVE YOU</text><text x="550" y="105" text-anchor="middle" fill="#ffffff" font-size="18">Design the destination before you hire</text><rect x="425" y="160" width="250" height="100" fill="#ffd700" rx="10"/><text x="550" y="205" text-anchor="middle" fill="#1a1a2e" font-size="22" font-weight="bold">FOUNDER</text><text x="550" y="235" text-anchor="middle" fill="#1a1a2e" font-size="14">Vision, key bets, top hires</text><line x1="550" y1="260" x2="200" y2="340" stroke="#ffffff" stroke-width="2"/><line x1="550" y1="260" x2="550" y2="340" stroke="#ffffff" stroke-width="2"/><line x1="550" y1="260" x2="900" y2="340" stroke="#ffffff" stroke-width="2"/><rect x="80" y="340" width="240" height="120" fill="#6366f1" rx="10"/><text x="200" y="380" text-anchor="middle" fill="#ffffff" font-size="20" font-weight="bold">OPERATIONS</text><text x="200" y="405" text-anchor="middle" fill="#ffffff" font-size="14">COO / GM / Head of Ops</text><text x="200" y="435" text-anchor="middle" fill="#ffffff" font-size="13" font-style="italic">"How the work runs"</text><rect x="430" y="340" width="240" height="120" fill="#10b981" rx="10"/><text x="550" y="380" text-anchor="middle" fill="#1a1a2e" font-size="20" font-weight="bold">REVENUE</text><text x="550" y="405" text-anchor="middle" fill="#1a1a2e" font-size="14">VP Sales / CRO / Mktg Lead</text><text x="550" y="435" text-anchor="middle" fill="#1a1a2e" font-size="13" font-style="italic">"How money comes in"</text><rect x="780" y="340" width="240" height="120" fill="#ec4899" rx="10"/><text x="900" y="380" text-anchor="middle" fill="#ffffff" font-size="20" font-weight="bold">CRAFT</text><text x="900" y="405" text-anchor="middle" fill="#ffffff" font-size="14">VP Eng / Creative Dir / Prod</text><text x="900" y="435" text-anchor="middle" fill="#ffffff" font-size="13" font-style="italic">"What we actually make"</text><line x1="200" y1="460" x2="100" y2="540" stroke="#888" stroke-width="2"/><line x1="200" y1="460" x2="200" y2="540" stroke="#888" stroke-width="2"/><line x1="200" y1="460" x2="300" y2="540" stroke="#888" stroke-width="2"/><line x1="550" y1="460" x2="450" y2="540" stroke="#888" stroke-width="2"/><line x1="550" y1="460" x2="550" y2="540" stroke="#888" stroke-width="2"/><line x1="550" y1="460" x2="650" y2="540" stroke="#888" stroke-width="2"/><line x1="900" y1="460" x2="800" y2="540" stroke="#888" stroke-width="2"/><line x1="900" y1="460" x2="900" y2="540" stroke="#888" stroke-width="2"/><line x1="900" y1="460" x2="1000" y2="540" stroke="#888" stroke-width="2"/><rect x="60" y="540" width="80" height="60" fill="#888" opacity="0.7" rx="6"/><rect x="160" y="540" width="80" height="60" fill="#888" opacity="0.7" rx="6"/><rect x="260" y="540" width="80" height="60" fill="#888" opacity="0.7" rx="6"/><rect x="410" y="540" width="80" height="60" fill="#888" opacity="0.7" rx="6"/><rect x="510" y="540" width="80" height="60" fill="#888" opacity="0.7" rx="6"/><rect x="610" y="540" width="80" height="60" fill="#888" opacity="0.7" rx="6"/><rect x="760" y="540" width="80" height="60" fill="#888" opacity="0.7" rx="6"/><rect x="860" y="540" width="80" height="60" fill="#888" opacity="0.7" rx="6"/><rect x="960" y="540" width="80" height="60" fill="#888" opacity="0.7" rx="6"/><text x="550" y="640" text-anchor="middle" fill="#888" font-size="14">individual contributors / managers / specialists</text><text x="550" y="710" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">THE 3 LAYERS THAT MATTER</text><text x="550" y="755" text-anchor="middle" fill="#ffffff" font-size="16">Founder (only-you work)</text><text x="550" y="785" text-anchor="middle" fill="#ffffff" font-size="16">3 leaders (everything else)</text><text x="550" y="815" text-anchor="middle" fill="#ffffff" font-size="16">Team (executes through them, not you)</text><rect x="200" y="870" width="700" height="160" fill="#ef4444" opacity="0.25" stroke="#ef4444" stroke-width="2" rx="10"/><text x="550" y="910" text-anchor="middle" fill="#ef4444" font-size="20" font-weight="bold">THE TRAP TO AVOID</text><text x="550" y="945" text-anchor="middle" fill="#ffffff" font-size="15">Hiring 6 ICs that all report to you = no relief.</text><text x="550" y="975" text-anchor="middle" fill="#ffffff" font-size="15">You've just multiplied your management load.</text><text x="550" y="1010" text-anchor="middle" fill="#ffd700" font-size="15" font-weight="bold">Hire the 3 leaders FIRST. They hire the ICs.</text></svg>`,
          caption: "The destination state — drawn before any hire is made."
        }
      },
      {
        type: "concept",
        title: "What Goes In Each Box",
        content: `The three roles below you are not titles — they are buckets of responsibility. The titles change by industry. The buckets don't.

OPERATIONS LEADER (the "how"). This person owns: financial operations, HR, internal systems, vendor management, legal/compliance, project management, internal communications, the calendar of the company. When something on the inside is broken — payroll late, contractors angry, no one running the all-hands — it lands here. In a service business this is often a COO or GM. In a product company it might be a Head of Ops or Chief of Staff who grows into COO. Common founder mistake: hiring a "general manager" expecting them to also do sales or product. They won't. Define this role narrowly.

REVENUE LEADER (the "in"). This person owns: pipeline, conversion, retention, expansion, pricing execution, marketing-to-sales handoff, account management, customer success. The single number on their dashboard is revenue (and its derivatives — pipeline, NRR, CAC payback). In a $1-5M company this might be a VP of Sales who also runs marketing. Above $10M these split. Common founder mistake: keeping sales themselves because "I'm the best closer." You may be. That's exactly the problem. You're locked into deal-by-deal motion forever.

CRAFT LEADER (the "what"). This person owns the thing you actually sell. In a software company: a VP Engineering or Head of Product. In an agency: a Creative or Strategy Director. In a clinic: a Medical Director. In a manufacturing business: a VP of Operations or Production Director (yes, separate from the ops leader above). They're accountable for quality, delivery timelines, the craft standard of the work. Common founder mistake: refusing to hire here because "no one will care like I do." Probably true. Hire someone who cares 80% as much and has 100% of the time you don't.

Each role should have a one-page scorecard: outcomes (3-5), KPIs (2-3 numbers), and competencies (5-7 behaviors). Without scorecards, you're hiring vibes.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="60" text-anchor="middle" fill="#ffd700" font-size="34" font-weight="bold">THREE ROLES, THREE BUCKETS</text><text x="550" y="100" text-anchor="middle" fill="#ffffff" font-size="16">Same architecture, different industries</text><rect x="60" y="140" width="320" height="800" fill="#6366f1" opacity="0.85" rx="10"/><text x="220" y="180" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">OPERATIONS</text><text x="220" y="208" text-anchor="middle" fill="#ffd700" font-size="16">The "HOW"</text><line x1="80" y1="225" x2="360" y2="225" stroke="#ffffff" stroke-width="1"/><text x="80" y="260" fill="#ffffff" font-size="15" font-weight="bold">Owns:</text><text x="80" y="285" fill="#ffffff" font-size="13">- Financial operations</text><text x="80" y="307" fill="#ffffff" font-size="13">- HR &amp; recruiting</text><text x="80" y="329" fill="#ffffff" font-size="13">- Internal systems</text><text x="80" y="351" fill="#ffffff" font-size="13">- Vendors &amp; contracts</text><text x="80" y="373" fill="#ffffff" font-size="13">- Legal &amp; compliance</text><text x="80" y="395" fill="#ffffff" font-size="13">- Project tracking</text><text x="80" y="417" fill="#ffffff" font-size="13">- Internal comms</text><line x1="80" y1="445" x2="360" y2="445" stroke="#888" stroke-width="1"/><text x="80" y="475" fill="#ffd700" font-size="14" font-weight="bold">Titles by industry:</text><text x="80" y="500" fill="#ffffff" font-size="13">- COO (most)</text><text x="80" y="522" fill="#ffffff" font-size="13">- GM (small co.)</text><text x="80" y="544" fill="#ffffff" font-size="13">- Head of Ops</text><text x="80" y="566" fill="#ffffff" font-size="13">- Chief of Staff (early)</text><line x1="80" y1="595" x2="360" y2="595" stroke="#888" stroke-width="1"/><text x="80" y="625" fill="#ffd700" font-size="14" font-weight="bold">KPIs:</text><text x="80" y="650" fill="#ffffff" font-size="13">- Margin</text><text x="80" y="672" fill="#ffffff" font-size="13">- Cash days</text><text x="80" y="694" fill="#ffffff" font-size="13">- On-time delivery</text><line x1="80" y1="720" x2="360" y2="720" stroke="#888" stroke-width="1"/><text x="80" y="750" fill="#ef4444" font-size="13" font-weight="bold">Trap:</text><text x="80" y="775" fill="#ffffff" font-size="13">Don't expect them</text><text x="80" y="795" fill="#ffffff" font-size="13">to do sales too.</text><rect x="390" y="140" width="320" height="800" fill="#10b981" opacity="0.85" rx="10"/><text x="550" y="180" text-anchor="middle" fill="#1a1a2e" font-size="22" font-weight="bold">REVENUE</text><text x="550" y="208" text-anchor="middle" fill="#1a1a2e" font-size="16" font-weight="bold">The "IN"</text><line x1="410" y1="225" x2="690" y2="225" stroke="#1a1a2e" stroke-width="1"/><text x="410" y="260" fill="#1a1a2e" font-size="15" font-weight="bold">Owns:</text><text x="410" y="285" fill="#1a1a2e" font-size="13">- Pipeline</text><text x="410" y="307" fill="#1a1a2e" font-size="13">- Conversion</text><text x="410" y="329" fill="#1a1a2e" font-size="13">- Retention &amp; expansion</text><text x="410" y="351" fill="#1a1a2e" font-size="13">- Pricing execution</text><text x="410" y="373" fill="#1a1a2e" font-size="13">- Marketing-sales handoff</text><text x="410" y="395" fill="#1a1a2e" font-size="13">- Account management</text><text x="410" y="417" fill="#1a1a2e" font-size="13">- Customer success</text><line x1="410" y1="445" x2="690" y2="445" stroke="#1a1a2e" stroke-width="1"/><text x="410" y="475" fill="#1a1a2e" font-size="14" font-weight="bold">Titles by industry:</text><text x="410" y="500" fill="#1a1a2e" font-size="13">- VP Sales</text><text x="410" y="522" fill="#1a1a2e" font-size="13">- CRO</text><text x="410" y="544" fill="#1a1a2e" font-size="13">- Head of Growth</text><text x="410" y="566" fill="#1a1a2e" font-size="13">- Director of Marketing</text><line x1="410" y1="595" x2="690" y2="595" stroke="#1a1a2e" stroke-width="1"/><text x="410" y="625" fill="#1a1a2e" font-size="14" font-weight="bold">KPIs:</text><text x="410" y="650" fill="#1a1a2e" font-size="13">- Revenue</text><text x="410" y="672" fill="#1a1a2e" font-size="13">- NRR</text><text x="410" y="694" fill="#1a1a2e" font-size="13">- CAC payback</text><line x1="410" y1="720" x2="690" y2="720" stroke="#1a1a2e" stroke-width="1"/><text x="410" y="750" fill="#ef4444" font-size="13" font-weight="bold">Trap:</text><text x="410" y="775" fill="#1a1a2e" font-size="13">"I'm the best closer"</text><text x="410" y="795" fill="#1a1a2e" font-size="13">= you're stuck forever.</text><rect x="720" y="140" width="320" height="800" fill="#ec4899" opacity="0.85" rx="10"/><text x="880" y="180" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">CRAFT</text><text x="880" y="208" text-anchor="middle" fill="#ffd700" font-size="16">The "WHAT"</text><line x1="740" y1="225" x2="1020" y2="225" stroke="#ffffff" stroke-width="1"/><text x="740" y="260" fill="#ffffff" font-size="15" font-weight="bold">Owns:</text><text x="740" y="285" fill="#ffffff" font-size="13">- The product / service</text><text x="740" y="307" fill="#ffffff" font-size="13">- Quality standards</text><text x="740" y="329" fill="#ffffff" font-size="13">- Delivery timelines</text><text x="740" y="351" fill="#ffffff" font-size="13">- The craft of the team</text><text x="740" y="373" fill="#ffffff" font-size="13">- Roadmap / pipeline</text><text x="740" y="395" fill="#ffffff" font-size="13">- Technical decisions</text><text x="740" y="417" fill="#ffffff" font-size="13">- The work itself</text><line x1="740" y1="445" x2="1020" y2="445" stroke="#888" stroke-width="1"/><text x="740" y="475" fill="#ffd700" font-size="14" font-weight="bold">Titles by industry:</text><text x="740" y="500" fill="#ffffff" font-size="13">- VP Eng (software)</text><text x="740" y="522" fill="#ffffff" font-size="13">- Creative Director (agency)</text><text x="740" y="544" fill="#ffffff" font-size="13">- Medical Director (clinic)</text><text x="740" y="566" fill="#ffffff" font-size="13">- Production Dir (mfg)</text><line x1="740" y1="595" x2="1020" y2="595" stroke="#888" stroke-width="1"/><text x="740" y="625" fill="#ffd700" font-size="14" font-weight="bold">KPIs:</text><text x="740" y="650" fill="#ffffff" font-size="13">- Quality / defect rate</text><text x="740" y="672" fill="#ffffff" font-size="13">- Delivery on time</text><text x="740" y="694" fill="#ffffff" font-size="13">- NPS / satisfaction</text><line x1="740" y1="720" x2="1020" y2="720" stroke="#888" stroke-width="1"/><text x="740" y="750" fill="#ef4444" font-size="13" font-weight="bold">Trap:</text><text x="740" y="775" fill="#ffffff" font-size="13">"No one cares like I do."</text><text x="740" y="795" fill="#ffffff" font-size="13">Hire 80%-as-much-care.</text><rect x="100" y="975" width="900" height="100" fill="#ffd700" opacity="0.95" rx="10"/><text x="550" y="1015" text-anchor="middle" fill="#1a1a2e" font-size="20" font-weight="bold">Each role needs a scorecard:</text><text x="550" y="1045" text-anchor="middle" fill="#1a1a2e" font-size="16">3-5 outcomes &middot; 2-3 KPIs &middot; 5-7 competencies</text></svg>`,
          caption: "Same architecture, industry-specific titles. Define buckets, not jobs."
        }
      },
      {
        type: "example",
        title: "Tom's Construction Business",
        content: `Tom runs a residential construction company in Phoenix. $4.2M annual revenue, 22 employees, growing 18%/year. He works 70 hours a week. He's been in the operator's trap for three years.

We sat down and drew his current org chart. Eleven people reported directly to him. Two foremen, three project managers, an estimator, a bookkeeper, an admin, and three field guys he'd somehow held onto since the early days. His "leadership team" was him plus a frazzled office manager named Linda.

Then we drew the destination chart — top down.

TOP: Tom (Owner). Future role: client relationships with the top 5 builders he subcontracts for, deal sourcing for development partnerships, hiring and firing the leadership team, capital allocation, vision/strategy. Estimated weekly load: 20-25 hours.

LAYER 1 — Three direct reports:

1. CONSTRUCTION DIRECTOR (Craft). Owns all job sites, all foremen, all delivery quality, all subcontractor management on the ground. KPI: gross margin per job, on-time completion, defect callbacks. Tom's first pick: promote his strongest foreman, Miguel, and pair him with an external superintendent hire.

2. SALES & ESTIMATING LEAD (Revenue). Owns the pipeline of jobs, the bidding process, conversion rates, pricing discipline, key customer relationships below the top 5. KPI: bid-to-win ratio, gross margin on signed work, pipeline coverage. Tom's pick: hire externally — he doesn't have this person internally yet.

3. OPERATIONS MANAGER (Operations). Owns finance, HR, scheduling, software systems, vendor billing, fleet, insurance, compliance. KPI: cash days, payroll accuracy, project schedule adherence. Tom's pick: promote Linda from office manager — invest in her with a $20K external CFO advisor on retainer.

When Tom drew this, he had a revelation: his FIRST hire shouldn't be another foreman or another estimator. It should be the Operations Manager seat — but he already had Linda. The real first DOLLAR hire was the external Sales & Estimating Lead, because Tom was the company's only salesperson and the bottleneck on every new project. Once that role landed, he could promote Miguel and reorganize the field guys under him.

Total leadership hires required: 1 external (Sales/Estimating Lead). Two internal promotions. Cost: ~$220K/year all-in. Reclaimed founder time: 35 hours/week within 9 months.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="55" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold">TOM'S CONSTRUCTION CO ($4.2M)</text><text x="550" y="92" text-anchor="middle" fill="#ffffff" font-size="16">BEFORE → AFTER</text><text x="275" y="135" text-anchor="middle" fill="#ef4444" font-size="22" font-weight="bold">BEFORE (today)</text><rect x="225" y="155" width="100" height="50" fill="#ffd700" rx="6"/><text x="275" y="185" text-anchor="middle" fill="#1a1a2e" font-size="16" font-weight="bold">TOM</text><line x1="275" y1="205" x2="60" y2="260" stroke="#888" stroke-width="1"/><line x1="275" y1="205" x2="120" y2="260" stroke="#888" stroke-width="1"/><line x1="275" y1="205" x2="180" y2="260" stroke="#888" stroke-width="1"/><line x1="275" y1="205" x2="240" y2="260" stroke="#888" stroke-width="1"/><line x1="275" y1="205" x2="300" y2="260" stroke="#888" stroke-width="1"/><line x1="275" y1="205" x2="360" y2="260" stroke="#888" stroke-width="1"/><line x1="275" y1="205" x2="420" y2="260" stroke="#888" stroke-width="1"/><line x1="275" y1="205" x2="480" y2="260" stroke="#888" stroke-width="1"/><line x1="275" y1="205" x2="40" y2="320" stroke="#888" stroke-width="1"/><line x1="275" y1="205" x2="100" y2="320" stroke="#888" stroke-width="1"/><line x1="275" y1="205" x2="160" y2="320" stroke="#888" stroke-width="1"/><rect x="30" y="260" width="55" height="40" fill="#888" opacity="0.7" rx="4"/><text x="57" y="285" text-anchor="middle" fill="#ffffff" font-size="10">FORE1</text><rect x="90" y="260" width="55" height="40" fill="#888" opacity="0.7" rx="4"/><text x="117" y="285" text-anchor="middle" fill="#ffffff" font-size="10">FORE2</text><rect x="150" y="260" width="55" height="40" fill="#888" opacity="0.7" rx="4"/><text x="177" y="285" text-anchor="middle" fill="#ffffff" font-size="10">PM1</text><rect x="210" y="260" width="55" height="40" fill="#888" opacity="0.7" rx="4"/><text x="237" y="285" text-anchor="middle" fill="#ffffff" font-size="10">PM2</text><rect x="270" y="260" width="55" height="40" fill="#888" opacity="0.7" rx="4"/><text x="297" y="285" text-anchor="middle" fill="#ffffff" font-size="10">PM3</text><rect x="330" y="260" width="55" height="40" fill="#888" opacity="0.7" rx="4"/><text x="357" y="285" text-anchor="middle" fill="#ffffff" font-size="10">EST</text><rect x="390" y="260" width="55" height="40" fill="#888" opacity="0.7" rx="4"/><text x="417" y="285" text-anchor="middle" fill="#ffffff" font-size="10">BOOK</text><rect x="450" y="260" width="55" height="40" fill="#888" opacity="0.7" rx="4"/><text x="477" y="285" text-anchor="middle" fill="#ffffff" font-size="10">LINDA</text><rect x="15" y="320" width="55" height="40" fill="#888" opacity="0.7" rx="4"/><text x="42" y="345" text-anchor="middle" fill="#ffffff" font-size="10">FIELD</text><rect x="75" y="320" width="55" height="40" fill="#888" opacity="0.7" rx="4"/><text x="102" y="345" text-anchor="middle" fill="#ffffff" font-size="10">FIELD</text><rect x="135" y="320" width="55" height="40" fill="#888" opacity="0.7" rx="4"/><text x="162" y="345" text-anchor="middle" fill="#ffffff" font-size="10">FIELD</text><text x="275" y="415" text-anchor="middle" fill="#ef4444" font-size="14" font-weight="bold">11 DIRECT REPORTS</text><text x="275" y="438" text-anchor="middle" fill="#ffffff" font-size="13">70 hrs/wk &middot; no leverage</text><line x1="540" y1="125" x2="540" y2="445" stroke="#ffffff" stroke-width="2"/><text x="825" y="135" text-anchor="middle" fill="#10b981" font-size="22" font-weight="bold">AFTER (12-18 mo)</text><rect x="775" y="155" width="100" height="50" fill="#ffd700" rx="6"/><text x="825" y="185" text-anchor="middle" fill="#1a1a2e" font-size="16" font-weight="bold">TOM</text><text x="825" y="225" text-anchor="middle" fill="#ffffff" font-size="11">20-25 hrs/wk only-Tom work</text><line x1="825" y1="205" x2="660" y2="270" stroke="#ffffff" stroke-width="2"/><line x1="825" y1="205" x2="825" y2="270" stroke="#ffffff" stroke-width="2"/><line x1="825" y1="205" x2="990" y2="270" stroke="#ffffff" stroke-width="2"/><rect x="600" y="270" width="120" height="80" fill="#ec4899" rx="6"/><text x="660" y="298" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="bold">CONSTRUCTION</text><text x="660" y="316" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="bold">DIRECTOR</text><text x="660" y="338" text-anchor="middle" fill="#ffd700" font-size="11">Promote Miguel</text><rect x="765" y="270" width="120" height="80" fill="#10b981" rx="6"/><text x="825" y="298" text-anchor="middle" fill="#1a1a2e" font-size="13" font-weight="bold">SALES &amp;</text><text x="825" y="316" text-anchor="middle" fill="#1a1a2e" font-size="13" font-weight="bold">ESTIMATING</text><text x="825" y="338" text-anchor="middle" fill="#ef4444" font-size="11" font-weight="bold">HIRE EXTERNAL</text><rect x="930" y="270" width="120" height="80" fill="#6366f1" rx="6"/><text x="990" y="298" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="bold">OPERATIONS</text><text x="990" y="316" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="bold">MANAGER</text><text x="990" y="338" text-anchor="middle" fill="#ffd700" font-size="11">Promote Linda</text><line x1="660" y1="350" x2="620" y2="400" stroke="#888" stroke-width="1"/><line x1="660" y1="350" x2="660" y2="400" stroke="#888" stroke-width="1"/><line x1="660" y1="350" x2="700" y2="400" stroke="#888" stroke-width="1"/><line x1="825" y1="350" x2="800" y2="400" stroke="#888" stroke-width="1"/><line x1="825" y1="350" x2="850" y2="400" stroke="#888" stroke-width="1"/><line x1="990" y1="350" x2="960" y2="400" stroke="#888" stroke-width="1"/><line x1="990" y1="350" x2="1020" y2="400" stroke="#888" stroke-width="1"/><rect x="600" y="400" width="40" height="30" fill="#888" rx="3"/><rect x="645" y="400" width="40" height="30" fill="#888" rx="3"/><rect x="690" y="400" width="40" height="30" fill="#888" rx="3"/><rect x="780" y="400" width="40" height="30" fill="#888" rx="3"/><rect x="830" y="400" width="40" height="30" fill="#888" rx="3"/><rect x="945" y="400" width="40" height="30" fill="#888" rx="3"/><rect x="1000" y="400" width="40" height="30" fill="#888" rx="3"/><text x="825" y="468" text-anchor="middle" fill="#10b981" font-size="14" font-weight="bold">3 DIRECT REPORTS</text><rect x="100" y="510" width="900" height="180" fill="#ffd700" opacity="0.15" stroke="#ffd700" stroke-width="2" rx="10"/><text x="550" y="555" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">THE FIRST DOLLAR HIRE</text><text x="550" y="595" text-anchor="middle" fill="#ffffff" font-size="16">Not another foreman. Not another estimator.</text><text x="550" y="625" text-anchor="middle" fill="#ffffff" font-size="16">The SALES &amp; ESTIMATING LEAD — because Tom is the only seller.</text><text x="550" y="660" text-anchor="middle" fill="#ffffff" font-size="16" font-style="italic">Tom is the bottleneck. Hire the role that unblocks him first.</text><rect x="100" y="720" width="900" height="280" fill="#1a1a2e" stroke="#10b981" stroke-width="2" rx="10"/><text x="550" y="760" text-anchor="middle" fill="#10b981" font-size="22" font-weight="bold">THE PLAN</text><text x="130" y="800" fill="#ffffff" font-size="16">Hire #1 (month 1-3):</text><text x="450" y="800" fill="#ffd700" font-size="16">External Sales &amp; Estimating Lead — $130K + comm</text><text x="130" y="835" fill="#ffffff" font-size="16">Promote #1 (month 4-6):</text><text x="450" y="835" fill="#ffd700" font-size="16">Miguel → Construction Director, + external superintendent</text><text x="130" y="870" fill="#ffffff" font-size="16">Promote #2 (month 6-9):</text><text x="450" y="870" fill="#ffd700" font-size="16">Linda → Operations Manager + $20K CFO advisor retainer</text><text x="130" y="930" fill="#ffffff" font-size="17">Total new cost:</text><text x="450" y="930" fill="#10b981" font-size="17" font-weight="bold">~$220K/year all-in</text><text x="130" y="970" fill="#ffffff" font-size="17">Reclaimed founder time:</text><text x="450" y="970" fill="#10b981" font-size="17" font-weight="bold">35 hrs/wk by month 9</text></svg>`,
          caption: "Tom's destination chart — and the first hire to make it real."
        }
      },
      {
        type: "quiz",
        title: "Quick Check",
        question: "You've drawn your future org chart with three roles below you: Operations, Revenue, Craft. You currently have a strong internal candidate for Operations and a decent one for Craft, but no one for Revenue and you're personally closing 90% of new deals. Which seat should you hire for FIRST?",
        options: [
          { text: "Craft — protect product quality before anything else", correct: false },
          { text: "Operations — internal systems are the foundation", correct: false },
          { text: "Revenue — you're the bottleneck on the function that brings in money", correct: true },
          { text: "Hire all three at once to move faster", correct: false }
        ],
        explanation: "Always hire the seat where YOU are the active bottleneck. If you personally close 90% of deals, the company can't scale past your calendar — every new sale requires you. The Operations seat is a promotion you can do internally over time. The Craft seat has a decent internal candidate. But the Revenue role unblocks the founder NOW. Rule of thumb: rank the three seats by 'where am I the constraint right now?' and fill that one first, even if the others are weaker on paper. Hiring all three at once almost always fails — you can't onboard three executives simultaneously and you can't afford the cash burn.",
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="34" font-weight="bold">WHICH SEAT FIRST?</text><text x="550" y="115" text-anchor="middle" fill="#ffffff" font-size="18">Hire the role where YOU are the active bottleneck</text><rect x="100" y="170" width="900" height="80" fill="#888" opacity="0.4" rx="8"/><text x="550" y="215" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">Decision rule: rank by founder-as-bottleneck severity</text><text x="120" y="300" fill="#ffffff" font-size="20" font-weight="bold">For each of the 3 seats, ask:</text><rect x="150" y="330" width="800" height="60" fill="#1a1a2e" stroke="#ffffff" stroke-width="1" rx="6"/><text x="170" y="367" fill="#ffffff" font-size="16">1. If this person disappeared tomorrow, would I personally fill in? Yes/No</text><rect x="150" y="400" width="800" height="60" fill="#1a1a2e" stroke="#ffffff" stroke-width="1" rx="6"/><text x="170" y="437" fill="#ffffff" font-size="16">2. How many hours/week am I currently spending on this function?</text><rect x="150" y="470" width="800" height="60" fill="#1a1a2e" stroke="#ffffff" stroke-width="1" rx="6"/><text x="170" y="507" fill="#ffffff" font-size="16">3. If I keep doing this, does the company hit its 12-month plan? Yes/No</text><text x="550" y="585" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">Highest score = first hire.</text><rect x="100" y="630" width="280" height="240" fill="#ef4444" opacity="0.85" rx="10"/><text x="240" y="675" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">REVENUE</text><text x="240" y="710" text-anchor="middle" fill="#ffffff" font-size="14">You close 90% of deals</text><text x="240" y="735" text-anchor="middle" fill="#ffffff" font-size="14">Bottleneck: SEVERE</text><text x="240" y="775" text-anchor="middle" fill="#ffffff" font-size="44" font-weight="bold">1st</text><text x="240" y="825" text-anchor="middle" fill="#ffd700" font-size="14" font-weight="bold">HIRE EXTERNAL NOW</text><rect x="410" y="630" width="280" height="240" fill="#f59e0b" opacity="0.85" rx="10"/><text x="550" y="675" text-anchor="middle" fill="#1a1a2e" font-size="22" font-weight="bold">CRAFT</text><text x="550" y="710" text-anchor="middle" fill="#1a1a2e" font-size="14">Decent internal candidate</text><text x="550" y="735" text-anchor="middle" fill="#1a1a2e" font-size="14">Bottleneck: MEDIUM</text><text x="550" y="775" text-anchor="middle" fill="#1a1a2e" font-size="44" font-weight="bold">2nd</text><text x="550" y="825" text-anchor="middle" fill="#1a1a2e" font-size="14" font-weight="bold">PROMOTE + COACH</text><rect x="720" y="630" width="280" height="240" fill="#10b981" opacity="0.85" rx="10"/><text x="860" y="675" text-anchor="middle" fill="#1a1a2e" font-size="22" font-weight="bold">OPERATIONS</text><text x="860" y="710" text-anchor="middle" fill="#1a1a2e" font-size="14">Strong internal candidate</text><text x="860" y="735" text-anchor="middle" fill="#1a1a2e" font-size="14">Bottleneck: LOW</text><text x="860" y="775" text-anchor="middle" fill="#1a1a2e" font-size="44" font-weight="bold">3rd</text><text x="860" y="825" text-anchor="middle" fill="#1a1a2e" font-size="14" font-weight="bold">PROMOTE + ADVISOR</text><rect x="200" y="910" width="700" height="160" fill="#ffd700" opacity="0.15" stroke="#ffd700" stroke-width="2" rx="10"/><text x="550" y="950" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">DO NOT hire all three at once.</text><text x="550" y="985" text-anchor="middle" fill="#ffffff" font-size="15">You can't onboard 3 executives simultaneously.</text><text x="550" y="1015" text-anchor="middle" fill="#ffffff" font-size="15">You can't afford the cash burn.</text><text x="550" y="1050" text-anchor="middle" fill="#ffffff" font-size="15">Sequence: 1 then 2 then 3, ~6 months apart.</text></svg>`,
          caption: "Hire the seat where you are the bottleneck. Sequence the rest."
        }
      },
      {
        type: "application",
        title: "Draw Your Destination Chart",
        content: `Take a blank page (or whiteboard). Do this in one sitting — 30-45 minutes.

STEP 1: Draw YOUR future role at the top. Write 5-8 bullets describing what you do all day in 18 months. The bullets should be founder-only work: vision, capital allocation, top-tier relationships, the 5 most important hires, the 3 biggest bets. If a bullet could be done by an executive you'd hire, cross it out.

STEP 2: Draw 3 boxes below you. Label them:
- OPERATIONS (the "how")
- REVENUE (the "in")
- CRAFT (the "what")

Use industry-appropriate titles (COO, VP Sales, VP Eng, Creative Director, Medical Director — whatever fits).

STEP 3: For each of the 3 roles, write:
- 3-5 OUTCOMES they own (verb-led, measurable: "Grow ARR from $4M to $8M in 12 months")
- 2-3 KPIs (the numbers they live by)
- 5-7 COMPETENCIES (behaviors a great hire would show)

This is the scorecard. Do not skip it.

STEP 4: Rank the 3 seats by FOUNDER-AS-BOTTLENECK SEVERITY:
- Hours/week you currently spend on that function
- Whether the company hits its 12-month plan if you don't change anything

Whichever seat scores highest = your first hire.

STEP 5: For each seat, decide PROMOTE or HIRE EXTERNAL.
- PROMOTE if you have someone within 70% of the role today AND you can coach the rest
- HIRE EXTERNAL if no one is within 70%, or the gap is in skills (not just experience) you can't transfer

STEP 6: Write your 12-month hiring sequence:
- Month 1-3: ____
- Month 4-6: ____
- Month 7-9: ____
- Month 10-12: ____

STEP 7: Calculate the cost. Total all-in (salary + benefits + bonus + recruiter fees). Reality-check against your cash runway. If you can't afford all three in 12 months, slow the sequence. Don't shrink the chart.

This chart goes on your wall. Look at it every Monday. Every hire you make either fits the chart or fights it. If it fights it, you're hiring out of panic.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="60" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold">YOUR 7-STEP CHART WORKSHEET</text><text x="550" y="100" text-anchor="middle" fill="#ffffff" font-size="16">30-45 minutes &middot; one sitting &middot; on your wall by tomorrow</text><rect x="80" y="140" width="940" height="90" fill="#ffd700" opacity="0.85" rx="8"/><text x="105" y="175" fill="#1a1a2e" font-size="20" font-weight="bold">STEP 1.</text><text x="220" y="175" fill="#1a1a2e" font-size="16">Draw YOUR future role at top. 5-8 bullets of founder-only work.</text><text x="220" y="205" fill="#1a1a2e" font-size="15" font-style="italic">Vision, capital, top-tier relationships, top 5 hires, top 3 bets.</text><rect x="80" y="240" width="940" height="90" fill="#6366f1" opacity="0.85" rx="8"/><text x="105" y="275" fill="#ffffff" font-size="20" font-weight="bold">STEP 2.</text><text x="220" y="275" fill="#ffffff" font-size="16">Draw 3 boxes: OPERATIONS, REVENUE, CRAFT.</text><text x="220" y="305" fill="#ffffff" font-size="15" font-style="italic">Use industry-appropriate titles. Three buckets, not five.</text><rect x="80" y="340" width="940" height="110" fill="#10b981" opacity="0.85" rx="8"/><text x="105" y="375" fill="#1a1a2e" font-size="20" font-weight="bold">STEP 3.</text><text x="220" y="375" fill="#1a1a2e" font-size="16">Scorecards for each: 3-5 outcomes, 2-3 KPIs, 5-7 competencies.</text><text x="220" y="405" fill="#1a1a2e" font-size="15" font-style="italic">"Grow ARR from $4M to $8M in 12 months." Not "manage sales."</text><text x="220" y="435" fill="#ef4444" font-size="14" font-weight="bold">Do not skip this step. Vibes don't hire executives.</text><rect x="80" y="460" width="940" height="90" fill="#ec4899" opacity="0.85" rx="8"/><text x="105" y="495" fill="#ffffff" font-size="20" font-weight="bold">STEP 4.</text><text x="220" y="495" fill="#ffffff" font-size="16">Rank seats by FOUNDER-AS-BOTTLENECK severity.</text><text x="220" y="525" fill="#ffffff" font-size="15" font-style="italic">Highest score = first hire. The painful one, not the easy one.</text><rect x="80" y="560" width="940" height="90" fill="#0ea5e9" opacity="0.85" rx="8"/><text x="105" y="595" fill="#ffffff" font-size="20" font-weight="bold">STEP 5.</text><text x="220" y="595" fill="#ffffff" font-size="16">For each seat: PROMOTE (70%+ candidate inside) or HIRE EXTERNAL.</text><text x="220" y="625" fill="#ffffff" font-size="15" font-style="italic">If you "kinda" have someone, you don't. Be honest.</text><rect x="80" y="660" width="940" height="120" fill="#f59e0b" opacity="0.85" rx="8"/><text x="105" y="695" fill="#1a1a2e" font-size="20" font-weight="bold">STEP 6.</text><text x="220" y="695" fill="#1a1a2e" font-size="16">12-month hiring sequence:</text><text x="220" y="725" fill="#1a1a2e" font-size="14">Month 1-3: ___________</text><text x="500" y="725" fill="#1a1a2e" font-size="14">Month 4-6: ___________</text><text x="220" y="755" fill="#1a1a2e" font-size="14">Month 7-9: ___________</text><text x="500" y="755" fill="#1a1a2e" font-size="14">Month 10-12: ___________</text><rect x="80" y="790" width="940" height="120" fill="#8b5cf6" opacity="0.85" rx="8"/><text x="105" y="825" fill="#ffffff" font-size="20" font-weight="bold">STEP 7.</text><text x="220" y="825" fill="#ffffff" font-size="16">Total cost (salary + benefits + bonus + recruiter). Cash check.</text><text x="220" y="855" fill="#ffffff" font-size="15">If you can't afford 3 in 12 months — slow the sequence.</text><text x="220" y="885" fill="#ffd700" font-size="15" font-weight="bold">Do NOT shrink the chart. Shrink the timeline.</text><rect x="200" y="940" width="700" height="120" fill="#ffd700" opacity="0.15" stroke="#ffd700" stroke-width="2" rx="10"/><text x="550" y="980" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">THE CHART GOES ON YOUR WALL.</text><text x="550" y="1015" text-anchor="middle" fill="#ffffff" font-size="16">Look at it every Monday.</text><text x="550" y="1045" text-anchor="middle" fill="#ffffff" font-size="16" font-style="italic">Every hire either fits the chart or fights it.</text></svg>`,
          caption: "Seven steps. One sitting. The chart that drives every hire."
        }
      }
    ]
  },
  {
    id: "operator-to-owner-lesson-6",
    title: "Your True Hourly Value",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "The Math That Forces the Decision",
        content: `Until now, this book has appealed to your strategic mind. This lesson appeals to your accountant.

You're going to calculate your TRUE hourly value — the actual dollars-per-hour your time produces for the business. Then you're going to compare that number to the hourly cost of every task you currently do yourself. The gap between those two numbers is what you are paying — in real money — to avoid delegating.

Founders resist this math because they suspect (correctly) that they won't like the answer. They tell themselves: "I do it because I save the company money." The math will show that's backwards. Every hour you spend doing $25/hr work when your time produces $400/hr of value is a $375 unforced error. Not metaphorically. Mathematically. The business loses $375 every time you reconcile an expense report.

The formula is simple:

TRUE HOURLY VALUE = Annual Business Revenue / Your Annual Working Hours

That's the starting point. We'll refine it. But the first cut alone is usually enough to break a founder out of the "I save money by doing it myself" delusion.

In this lesson:
1. The formula and why it works
2. A worked example: a $400/hr founder doing $25/hr bookkeeping
3. The "founder discount" — how every hour of $X work you do costs you (Your True Rate - $X)
4. Your turn: calculate your number and apply the discount across your week

By the end of this lesson, you'll have a single dollar figure that ends the delegation debate forever. When your future self is tempted to "just handle it," you'll remember the number. And you'll send the email instead.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="36" font-weight="bold">THE NUMBER THAT ENDS THE DEBATE</text><text x="550" y="120" text-anchor="middle" fill="#ffffff" font-size="18">When the spreadsheet wins, the operator loses.</text><rect x="100" y="180" width="900" height="140" fill="#ffd700" opacity="0.95" rx="12"/><text x="550" y="225" text-anchor="middle" fill="#1a1a2e" font-size="22" font-weight="bold">TRUE HOURLY VALUE</text><text x="550" y="270" text-anchor="middle" fill="#1a1a2e" font-size="32" font-weight="bold">= Annual Revenue</text><text x="550" y="305" text-anchor="middle" fill="#1a1a2e" font-size="32" font-weight="bold">&divide; Annual Working Hours</text><line x1="550" y1="340" x2="550" y2="400" stroke="#ffd700" stroke-width="3"/><polygon points="540,390 560,390 550,410" fill="#ffd700"/><rect x="100" y="420" width="900" height="220" fill="#1a1a2e" stroke="#ffd700" stroke-width="2" rx="10"/><text x="550" y="470" text-anchor="middle" fill="#ffd700" font-size="24" font-weight="bold">THE FOUNDER DISCOUNT</text><text x="550" y="515" text-anchor="middle" fill="#ffffff" font-size="20">For every hour of $X-work you do:</text><text x="550" y="565" text-anchor="middle" fill="#10b981" font-size="26" font-weight="bold">YOU LOSE = Your Rate - $X</text><text x="550" y="610" text-anchor="middle" fill="#888" font-size="16" font-style="italic">It's not "saving money." It's the most expensive mistake you make.</text><rect x="150" y="680" width="800" height="100" fill="#ef4444" opacity="0.85" rx="10"/><text x="550" y="720" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">EXAMPLE: $400/hr founder doing $25/hr bookkeeping</text><text x="550" y="755" text-anchor="middle" fill="#ffffff" font-size="20">Hidden cost: $375/hour. Every hour. Forever.</text><rect x="150" y="800" width="800" height="100" fill="#10b981" opacity="0.85" rx="10"/><text x="550" y="840" text-anchor="middle" fill="#1a1a2e" font-size="20" font-weight="bold">A bookkeeper at $50/hr "costs" $50.</text><text x="550" y="875" text-anchor="middle" fill="#1a1a2e" font-size="20" font-weight="bold">It actually saves you $350/hr in opportunity cost.</text><text x="550" y="960" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">The math wins this argument.</text><text x="550" y="1000" text-anchor="middle" fill="#ffffff" font-size="16">Every. Single. Time.</text><text x="550" y="1050" text-anchor="middle" fill="#888" font-size="14" font-style="italic">Run the math once. Tape it to your monitor.</text></svg>`,
          caption: "One formula. One number. End of debate."
        }
      },
      {
        type: "concept",
        title: "Three Cuts of the Formula",
        content: `The basic formula — revenue / hours — gets you the headline number. But there are three cuts that sharpen it:

CUT 1: GROSS REVENUE. Annual revenue / annual hours worked. Crude but instructive. A founder doing $2M revenue working 60 hrs/wk * 50 weeks = 3,000 hours/year. $2M / 3,000 = $667/hour. This is your "every hour you work generates this much top-line" number. Useful for shocking you. Less useful for decisions.

CUT 2: GROSS PROFIT. Annual gross profit / hours. Same founder with 40% gross margins: $800K gross profit / 3,000 hours = $267/hour. This is closer to the truth — top-line revenue isn't yours, gross profit is what's actually available to pay salaries (including yours). For a true "your hour produces this much economic value to the business," use this.

CUT 3: PROFIT PER HOUR (most honest). Annual operating profit / hours. Same founder with $300K of operating profit: $100/hour. This is what your hour is currently worth to YOU as the owner. If profit is low, this number is brutally low — which is itself a signal: you're not building a business, you're buying yourself a job.

Most founders should anchor on CUT 2 (gross profit per hour) for delegation decisions. Here's why: gross profit measures the value your time produces in the business engine. Operating profit is what's left after all the OTHER costs the business chose to incur (including, critically, the cost of NOT delegating earlier). Cut 2 gives you the right frame to evaluate "should I hire" decisions, because hiring will reduce your hours AND your operating profit — but if it converts gross-profit-producing time into more strategic work, the business expands.

The number to write down is Cut 2. Print it. Put it on your monitor. When you catch yourself reaching for a $30/hr task, look at the number. The math takes about three seconds. The decision gets easier every time.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="60" text-anchor="middle" fill="#ffd700" font-size="34" font-weight="bold">THREE CUTS OF THE FORMULA</text><text x="550" y="100" text-anchor="middle" fill="#ffffff" font-size="18">Same founder, three lenses on hourly value</text><rect x="100" y="140" width="900" height="80" fill="#888" opacity="0.4" rx="8"/><text x="550" y="170" text-anchor="middle" fill="#ffffff" font-size="16">Sample founder: $2M revenue &middot; 40% gross margin &middot; $300K operating profit</text><text x="550" y="200" text-anchor="middle" fill="#ffffff" font-size="16">Working 60 hrs/wk &times; 50 weeks = 3,000 hours/year</text><rect x="80" y="240" width="320" height="640" fill="#6366f1" opacity="0.85" rx="10"/><text x="240" y="280" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">CUT 1</text><text x="240" y="310" text-anchor="middle" fill="#ffd700" font-size="18">Gross Revenue</text><line x1="100" y1="325" x2="380" y2="325" stroke="#ffffff" stroke-width="1"/><text x="240" y="370" text-anchor="middle" fill="#ffffff" font-size="14">Formula:</text><text x="240" y="395" text-anchor="middle" fill="#ffffff" font-size="14">Revenue / Hours</text><text x="240" y="450" text-anchor="middle" fill="#ffffff" font-size="14">$2,000,000 / 3,000</text><rect x="120" y="475" width="240" height="70" fill="#1a1a2e" stroke="#ffd700" stroke-width="2" rx="6"/><text x="240" y="520" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold">$667/hr</text><line x1="100" y1="580" x2="380" y2="580" stroke="#888" stroke-width="1"/><text x="240" y="615" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="bold">Use for:</text><text x="240" y="645" text-anchor="middle" fill="#ffffff" font-size="13">Shock value</text><text x="240" y="670" text-anchor="middle" fill="#ffffff" font-size="13">Wake-up moment</text><text x="240" y="730" text-anchor="middle" fill="#ef4444" font-size="13" font-weight="bold">Don't anchor here</text><text x="240" y="770" text-anchor="middle" fill="#888" font-size="12">Revenue isn't yours.</text><text x="240" y="800" text-anchor="middle" fill="#888" font-size="12">Most of it pays costs.</text><rect x="410" y="240" width="320" height="640" fill="#10b981" opacity="0.95" rx="10"/><text x="570" y="280" text-anchor="middle" fill="#1a1a2e" font-size="22" font-weight="bold">CUT 2</text><text x="570" y="310" text-anchor="middle" fill="#1a1a2e" font-size="18">Gross Profit (use this)</text><line x1="430" y1="325" x2="710" y2="325" stroke="#1a1a2e" stroke-width="1"/><text x="570" y="370" text-anchor="middle" fill="#1a1a2e" font-size="14">Formula:</text><text x="570" y="395" text-anchor="middle" fill="#1a1a2e" font-size="14">Gross Profit / Hours</text><text x="570" y="450" text-anchor="middle" fill="#1a1a2e" font-size="14">$800,000 / 3,000</text><rect x="450" y="475" width="240" height="70" fill="#1a1a2e" stroke="#ffd700" stroke-width="3" rx="6"/><text x="570" y="520" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold">$267/hr</text><line x1="430" y1="580" x2="710" y2="580" stroke="#1a1a2e" stroke-width="1"/><text x="570" y="615" text-anchor="middle" fill="#1a1a2e" font-size="14" font-weight="bold">Use for:</text><text x="570" y="645" text-anchor="middle" fill="#1a1a2e" font-size="13">Delegation decisions</text><text x="570" y="670" text-anchor="middle" fill="#1a1a2e" font-size="13">Hiring math</text><text x="570" y="730" text-anchor="middle" fill="#ffd700" font-size="14" font-weight="bold">ANCHOR HERE</text><text x="570" y="770" text-anchor="middle" fill="#1a1a2e" font-size="12">Measures value</text><text x="570" y="795" text-anchor="middle" fill="#1a1a2e" font-size="12">your time PRODUCES.</text><text x="570" y="845" text-anchor="middle" fill="#1a1a2e" font-size="13" font-style="italic">Tape it to your monitor.</text><rect x="740" y="240" width="320" height="640" fill="#ec4899" opacity="0.85" rx="10"/><text x="900" y="280" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">CUT 3</text><text x="900" y="310" text-anchor="middle" fill="#ffd700" font-size="18">Operating Profit</text><line x1="760" y1="325" x2="1040" y2="325" stroke="#ffffff" stroke-width="1"/><text x="900" y="370" text-anchor="middle" fill="#ffffff" font-size="14">Formula:</text><text x="900" y="395" text-anchor="middle" fill="#ffffff" font-size="14">Op Profit / Hours</text><text x="900" y="450" text-anchor="middle" fill="#ffffff" font-size="14">$300,000 / 3,000</text><rect x="780" y="475" width="240" height="70" fill="#1a1a2e" stroke="#ffd700" stroke-width="2" rx="6"/><text x="900" y="520" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold">$100/hr</text><line x1="760" y1="580" x2="1040" y2="580" stroke="#888" stroke-width="1"/><text x="900" y="615" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="bold">Use for:</text><text x="900" y="645" text-anchor="middle" fill="#ffffff" font-size="13">Reality check</text><text x="900" y="670" text-anchor="middle" fill="#ffffff" font-size="13">"Job or business?"</text><text x="900" y="730" text-anchor="middle" fill="#ef4444" font-size="13" font-weight="bold">If this is low:</text><text x="900" y="755" text-anchor="middle" fill="#ffffff" font-size="13">You bought yourself</text><text x="900" y="775" text-anchor="middle" fill="#ffffff" font-size="13">a job. Not a business.</text><text x="900" y="820" text-anchor="middle" fill="#ffd700" font-size="13" font-style="italic">Fix by delegating, not</text><text x="900" y="840" text-anchor="middle" fill="#ffd700" font-size="13" font-style="italic">by working more hours.</text><rect x="200" y="930" width="700" height="120" fill="#ffd700" opacity="0.15" stroke="#ffd700" stroke-width="2" rx="10"/><text x="550" y="975" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">Anchor on Cut 2 ($267/hr).</text><text x="550" y="1010" text-anchor="middle" fill="#ffffff" font-size="16">It's the most honest answer to "what does an hour of mine produce?"</text><text x="550" y="1040" text-anchor="middle" fill="#ffffff" font-size="15" font-style="italic">Write it down. Look at it daily. The math will do the rest.</text></svg>`,
          caption: "Three cuts. Anchor on Cut 2 for delegation decisions."
        }
      },
      {
        type: "example",
        title: "Sarah's $400/Hour Truth",
        content: `Sarah owns a digital marketing agency in Austin. $3.6M annual revenue. 50% gross margin. $720K operating profit. She works 65 hrs/wk * 48 weeks = 3,120 hours/year (she takes 4 weeks off). Let's run her numbers.

CUT 1 (Revenue): $3,600,000 / 3,120 = $1,154/hr
CUT 2 (Gross Profit): $1,800,000 / 3,120 = $577/hr
CUT 3 (Op Profit): $720,000 / 3,120 = $231/hr

For delegation decisions, Sarah anchors on Cut 2: $577/hr. We round to $400/hr to be conservative (her gross profit fluctuates with project mix).

NOW THE BRUTAL PART. Sarah keeps a weekly task log. Here's what she found:

- Monthly bookkeeping reconciliation: 4 hrs/month * 12 = 48 hrs/year. Cost of doing it herself: 48 * $400 = $19,200 in foregone value. Cost of a bookkeeper at $50/hr: 48 * $50 = $2,400. NET LOSS to her business by not delegating: $19,200 - $2,400 = $16,800/year. For a task a $50/hr bookkeeper handles better than she does.

- Inbox triage (replying to non-strategic emails): 6 hrs/week * 48 = 288 hrs/year. Cost in foregone value: 288 * $400 = $115,200. Cost of a $30/hr executive assistant for the same hours: $8,640. NET LOSS: $106,560/year.

- Building proposals from scratch instead of using a template + her VP: 3 hrs/week * 48 = 144 hrs. Cost: 144 * $400 = $57,600. Cost of VP time at $80/hr: 144 * $80 = $11,520. NET LOSS: $46,080/year.

- Personally posting on the agency's LinkedIn: 2 hrs/week * 48 = 96 hrs. Cost: 96 * $400 = $38,400. Cost of junior marketer at $35/hr: 96 * $35 = $3,360. NET LOSS: $35,040/year.

TOTAL HIDDEN COST of these four tasks alone: $204,480 PER YEAR.

That number is more than the salary of any of the three executives Sarah needed to hire from lesson 5. The math doesn't say "you should hire when you can afford it." The math says: you can't afford NOT to. Every month you wait, you burn $17,000+ in unforced errors.

Sarah hired the bookkeeper that afternoon. The EA the next week. The VP got her template within 30 days. By month 6, she'd recovered 478 hours of founder time worth ~$191K in gross profit capacity. The new staff cost her ~$26K all-in over those 6 months. Net swing: $165K in 6 months — funded by stopping the bleeding she didn't realize she was doing.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="55" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold">SARAH'S $400/HR TRUTH</text><text x="550" y="92" text-anchor="middle" fill="#ffffff" font-size="16">$3.6M agency &middot; 50% margin &middot; 3,120 hrs/year</text><rect x="100" y="125" width="900" height="100" fill="#ffd700" opacity="0.85" rx="8"/><text x="550" y="160" text-anchor="middle" fill="#1a1a2e" font-size="18" font-weight="bold">CUT 2 (Gross Profit / Hours)</text><text x="550" y="195" text-anchor="middle" fill="#1a1a2e" font-size="22" font-weight="bold">$1,800,000 / 3,120 hrs = $577/hr (round to $400 conservative)</text><text x="100" y="260" fill="#ffd700" font-size="20" font-weight="bold">FOUR TASKS, ANNUAL HIDDEN COST</text><rect x="80" y="280" width="940" height="80" fill="#ef4444" opacity="0.8" rx="8"/><text x="100" y="312" fill="#ffffff" font-size="16" font-weight="bold">Bookkeeping</text><text x="100" y="338" fill="#ffffff" font-size="13">48 hrs/yr &times; $400 = $19,200 lost &middot; Bookkeeper @ $50/hr = $2,400 spent</text><text x="850" y="325" text-anchor="end" fill="#ffd700" font-size="22" font-weight="bold">-$16,800</text><text x="960" y="325" text-anchor="middle" fill="#ffffff" font-size="11">per year</text><rect x="80" y="370" width="940" height="80" fill="#ef4444" opacity="0.8" rx="8"/><text x="100" y="402" fill="#ffffff" font-size="16" font-weight="bold">Inbox triage</text><text x="100" y="428" fill="#ffffff" font-size="13">288 hrs/yr &times; $400 = $115,200 lost &middot; EA @ $30/hr = $8,640 spent</text><text x="850" y="415" text-anchor="end" fill="#ffd700" font-size="22" font-weight="bold">-$106,560</text><text x="960" y="415" text-anchor="middle" fill="#ffffff" font-size="11">per year</text><rect x="80" y="460" width="940" height="80" fill="#ef4444" opacity="0.8" rx="8"/><text x="100" y="492" fill="#ffffff" font-size="16" font-weight="bold">Proposal building (vs. template + VP)</text><text x="100" y="518" fill="#ffffff" font-size="13">144 hrs/yr &times; $400 = $57,600 lost &middot; VP @ $80/hr = $11,520 spent</text><text x="850" y="505" text-anchor="end" fill="#ffd700" font-size="22" font-weight="bold">-$46,080</text><text x="960" y="505" text-anchor="middle" fill="#ffffff" font-size="11">per year</text><rect x="80" y="550" width="940" height="80" fill="#ef4444" opacity="0.8" rx="8"/><text x="100" y="582" fill="#ffffff" font-size="16" font-weight="bold">LinkedIn posting</text><text x="100" y="608" fill="#ffffff" font-size="13">96 hrs/yr &times; $400 = $38,400 lost &middot; Junior @ $35/hr = $3,360 spent</text><text x="850" y="595" text-anchor="end" fill="#ffd700" font-size="22" font-weight="bold">-$35,040</text><text x="960" y="595" text-anchor="middle" fill="#ffffff" font-size="11">per year</text><rect x="80" y="650" width="940" height="100" fill="#1a1a2e" stroke="#ffd700" stroke-width="3" rx="10"/><text x="100" y="690" fill="#ffd700" font-size="20" font-weight="bold">TOTAL ANNUAL HIDDEN COST</text><text x="850" y="710" text-anchor="end" fill="#ffd700" font-size="34" font-weight="bold">-$204,480</text><text x="960" y="710" text-anchor="middle" fill="#ffffff" font-size="11">per year</text><text x="100" y="735" fill="#ffffff" font-size="14" font-style="italic">More than the salary of any one of the three executives she needs to hire.</text><rect x="80" y="770" width="940" height="220" fill="#10b981" opacity="0.85" rx="10"/><text x="550" y="810" text-anchor="middle" fill="#1a1a2e" font-size="22" font-weight="bold">WHAT SARAH ACTUALLY DID</text><text x="100" y="850" fill="#1a1a2e" font-size="15">Day 0:</text><text x="200" y="850" fill="#1a1a2e" font-size="15">Hired bookkeeper that afternoon.</text><text x="100" y="880" fill="#1a1a2e" font-size="15">Week 1:</text><text x="200" y="880" fill="#1a1a2e" font-size="15">Hired executive assistant.</text><text x="100" y="910" fill="#1a1a2e" font-size="15">Day 30:</text><text x="200" y="910" fill="#1a1a2e" font-size="15">VP working from proposal template, owns drafts.</text><text x="100" y="940" fill="#1a1a2e" font-size="15">Month 6:</text><text x="200" y="940" fill="#1a1a2e" font-size="15" font-weight="bold">478 hours recovered &middot; ~$191K capacity unlocked</text><text x="100" y="975" fill="#1a1a2e" font-size="15">Net swing:</text><text x="200" y="975" fill="#1a1a2e" font-size="16" font-weight="bold">+$165,000 in six months. Funded by stopping the bleed.</text><text x="550" y="1040" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">You can't afford NOT to delegate.</text></svg>`,
          caption: "Four tasks. $204K hidden cost. The math doesn't argue."
        }
      },
      {
        type: "quiz",
        title: "Quick Check",
        question: "You run a $1.2M business with 50% gross margin and work 2,500 hours/year. You spend 3 hours/week (150 hrs/year) personally doing data entry into your CRM. A VA could do it for $20/hour. What is the annual hidden cost of NOT delegating this task?",
        options: [
          { text: "$3,000 — that's just the cost of the VA you'd hire", correct: false },
          { text: "$30,000 — 150 hours times your $200/hr rate", correct: false },
          { text: "$33,000 — your foregone value plus the VA cost", correct: false },
          { text: "$33,000 in foregone value, minus $3,000 VA cost = $30,000 net annual hidden cost", correct: true }
        ],
        explanation: "First, calculate your true hourly value (Cut 2): Gross profit = $1.2M x 50% = $600,000. Divided by 2,500 hours = $240/hr (round to $220 for conservatism, but use $240 here). Then: 150 hours x $240 = $36,000 of value your time could be producing instead. Wait — using $220 conservative rate: 150 x $220 = $33,000 foregone. Hiring the VA costs 150 x $20 = $3,000. Net hidden cost of doing it yourself = $33,000 - $3,000 = $30,000 per year. That's the real number. You're not 'saving' $3,000 by not hiring the VA — you're losing $30,000 every year you do data entry yourself. (The exact dollars depend on which rate you use, but the principle is fixed: net hidden cost = (your rate - their rate) x hours.)",
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="65" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold">SOLVING THE PROBLEM</text><text x="550" y="110" text-anchor="middle" fill="#ffffff" font-size="18">$1.2M business &middot; 50% margin &middot; 2,500 hrs/yr</text><rect x="100" y="150" width="900" height="100" fill="#6366f1" opacity="0.85" rx="10"/><text x="120" y="185" fill="#ffd700" font-size="18" font-weight="bold">Step 1: Calculate your true hourly value (Cut 2)</text><text x="120" y="215" fill="#ffffff" font-size="16">Gross profit = $1,200,000 &times; 50% = $600,000</text><text x="120" y="240" fill="#ffffff" font-size="16">$600,000 / 2,500 hrs = $240/hr (use $220 conservative)</text><rect x="100" y="270" width="900" height="100" fill="#ef4444" opacity="0.85" rx="10"/><text x="120" y="305" fill="#ffd700" font-size="18" font-weight="bold">Step 2: Foregone value from doing it yourself</text><text x="120" y="335" fill="#ffffff" font-size="16">150 hrs/year &times; $220/hr = $33,000</text><text x="120" y="360" fill="#ffffff" font-size="14" font-style="italic">This is what your time could be producing in higher-leverage work.</text><rect x="100" y="390" width="900" height="100" fill="#f59e0b" opacity="0.85" rx="10"/><text x="120" y="425" fill="#1a1a2e" font-size="18" font-weight="bold">Step 3: Cost of hiring the VA</text><text x="120" y="455" fill="#1a1a2e" font-size="16">150 hrs/year &times; $20/hr = $3,000</text><text x="120" y="480" fill="#1a1a2e" font-size="14" font-style="italic">This is the cash you'd spend to delegate.</text><rect x="100" y="510" width="900" height="120" fill="#10b981" opacity="0.85" rx="10"/><text x="120" y="545" fill="#1a1a2e" font-size="18" font-weight="bold">Step 4: Net annual hidden cost</text><text x="120" y="580" fill="#1a1a2e" font-size="20">$33,000 (foregone value) - $3,000 (VA cost)</text><text x="120" y="610" fill="#1a1a2e" font-size="26" font-weight="bold">= $30,000 / year</text><rect x="200" y="660" width="700" height="120" fill="#1a1a2e" stroke="#ffd700" stroke-width="3" rx="10"/><text x="550" y="700" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">THE GENERAL FORMULA</text><text x="550" y="745" text-anchor="middle" fill="#ffffff" font-size="20">Hidden Cost = (Your Rate - Their Rate) &times; Hours</text><rect x="100" y="810" width="900" height="220" fill="#ffd700" opacity="0.15" stroke="#ffd700" stroke-width="2" rx="10"/><text x="550" y="850" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">THE TRAP THIS QUESTION TESTS</text><text x="550" y="890" text-anchor="middle" fill="#ffffff" font-size="15">Founders often think: "If I hire the VA, that's $3,000 of cost added."</text><text x="550" y="920" text-anchor="middle" fill="#ffffff" font-size="15">Wrong frame. The cost was already there — invisible.</text><text x="550" y="960" text-anchor="middle" fill="#ffffff" font-size="15">It was sitting in your timesheet as "I'm just doing the data entry."</text><text x="550" y="995" text-anchor="middle" fill="#10b981" font-size="17" font-weight="bold">Hiring the VA doesn't add cost. It surfaces savings.</text></svg>`,
          caption: "Hidden cost = (Your Rate - Their Rate) x Hours."
        }
      },
      {
        type: "application",
        title: "Run Your Numbers This Week",
        content: `Three steps. One spreadsheet. One hour total.

STEP 1: Calculate YOUR true hourly value.
- Annual revenue: __________
- Gross margin %: __________
- Annual gross profit (revenue x margin %): __________
- Annual working hours (be honest — hours/week x weeks worked): __________
- TRUE HOURLY VALUE (Cut 2) = Gross Profit / Hours = __________
- Round DOWN by 30% to be conservative. That's your operating rate. Tape it to your monitor.

STEP 2: Run the foregone-value calculation on your top 10 recurring tasks.
Use the table format:

| Task | Hours/year | Your Rate | Foregone Value | Their Rate | Their Cost | Net Hidden Cost |
|------|-----------|-----------|----------------|------------|-----------|----------------|

Pull tasks from your timesheet (lesson 2) and your DELEGATE/DEVELOP lists (lesson 4). Calculate the net hidden cost for each. Sum the column.

The total is what you are currently paying — in real dollars — to NOT delegate. Most founders' first calculation surfaces $80,000 to $300,000 in hidden annual cost. This is more than the salaries of the people who would absorb the work.

STEP 3: Use the number to make ONE decision this week.
Pick the task with the highest net hidden cost. Today — not next quarter — do one of:
- Post a job
- Reassign to an existing team member
- Sign a contract with a service (bookkeeping, EA, marketing) you've been delaying
- Block 4 hours on your calendar to build the SOP that lets you hand it off

Email yourself a one-line note: "I hired/handed off [task]. Stopped paying $[X]/year to do it myself." Save that email. Read it in six months when you're tempted to take a task back.

THE LARGER POINT: The math in this lesson isn't motivation. It's a forcing function. Strategy can be debated. Identity can be wrestled with. A spreadsheet cell that says "-$47,000/year" cannot. When you catch yourself reaching for $25/hr work, you'll look at the number — $200/hr or $400/hr or whatever you computed — and you'll send the email instead.

You've just finished the diagnostic half of this book. You know what role you're stuck in (lesson 1), what's bottlenecking you (lesson 2), who you need to become (lesson 3), how to sort your tasks (lesson 4), what the destination chart looks like (lesson 5), and what doing the wrong work is actually costing you (lesson 6).

Next: the building half. How to design the systems, hire the people, transfer the relationships, and finally — actually — exit the middle.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="60" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold">YOUR HIDDEN COST WORKSHEET</text><text x="550" y="100" text-anchor="middle" fill="#ffffff" font-size="16">One spreadsheet. One hour. Lifetime payback.</text><rect x="60" y="135" width="980" height="180" fill="#6366f1" opacity="0.85" rx="10"/><text x="80" y="170" fill="#ffd700" font-size="20" font-weight="bold">STEP 1: Calculate your true rate</text><text x="80" y="205" fill="#ffffff" font-size="14">Annual revenue: $__________</text><text x="450" y="205" fill="#ffffff" font-size="14">Gross margin %: __________</text><text x="80" y="232" fill="#ffffff" font-size="14">Annual gross profit: $__________</text><text x="450" y="232" fill="#ffffff" font-size="14">Annual working hours: __________</text><text x="80" y="265" fill="#ffd700" font-size="16" font-weight="bold">YOUR RATE = Gross Profit / Hours = $__________ /hr</text><text x="80" y="295" fill="#ffffff" font-size="13" font-style="italic">Round down 30% for conservatism. Tape it to your monitor.</text><rect x="60" y="335" width="980" height="400" fill="#10b981" opacity="0.85" rx="10"/><text x="80" y="370" fill="#1a1a2e" font-size="20" font-weight="bold">STEP 2: Score 10 recurring tasks</text><rect x="80" y="385" width="940" height="35" fill="#1a1a2e" rx="4"/><text x="90" y="408" fill="#ffd700" font-size="12" font-weight="bold">TASK</text><text x="270" y="408" fill="#ffd700" font-size="12" font-weight="bold">HRS/YR</text><text x="370" y="408" fill="#ffd700" font-size="12" font-weight="bold">YOUR RATE</text><text x="500" y="408" fill="#ffd700" font-size="12" font-weight="bold">FOREGONE</text><text x="640" y="408" fill="#ffd700" font-size="12" font-weight="bold">THEIR RATE</text><text x="770" y="408" fill="#ffd700" font-size="12" font-weight="bold">COST</text><text x="880" y="408" fill="#ffd700" font-size="12" font-weight="bold">NET LOSS</text><line x1="80" y1="430" x2="1020" y2="430" stroke="#1a1a2e" stroke-width="1"/><line x1="80" y1="455" x2="1020" y2="455" stroke="#1a1a2e" stroke-width="1" stroke-dasharray="3,3"/><line x1="80" y1="480" x2="1020" y2="480" stroke="#1a1a2e" stroke-width="1" stroke-dasharray="3,3"/><line x1="80" y1="505" x2="1020" y2="505" stroke="#1a1a2e" stroke-width="1" stroke-dasharray="3,3"/><line x1="80" y1="530" x2="1020" y2="530" stroke="#1a1a2e" stroke-width="1" stroke-dasharray="3,3"/><line x1="80" y1="555" x2="1020" y2="555" stroke="#1a1a2e" stroke-width="1" stroke-dasharray="3,3"/><line x1="80" y1="580" x2="1020" y2="580" stroke="#1a1a2e" stroke-width="1" stroke-dasharray="3,3"/><line x1="80" y1="605" x2="1020" y2="605" stroke="#1a1a2e" stroke-width="1" stroke-dasharray="3,3"/><line x1="80" y1="630" x2="1020" y2="630" stroke="#1a1a2e" stroke-width="1" stroke-dasharray="3,3"/><line x1="80" y1="655" x2="1020" y2="655" stroke="#1a1a2e" stroke-width="1" stroke-dasharray="3,3"/><line x1="80" y1="680" x2="1020" y2="680" stroke="#1a1a2e" stroke-width="2"/><text x="90" y="703" fill="#1a1a2e" font-size="14" font-weight="bold">TOTAL ANNUAL HIDDEN COST:</text><text x="880" y="703" fill="#ef4444" font-size="16" font-weight="bold">$__________</text><text x="90" y="725" fill="#1a1a2e" font-size="12" font-style="italic">Most founders score $80K - $300K on first calculation.</text><rect x="60" y="755" width="980" height="200" fill="#f59e0b" opacity="0.85" rx="10"/><text x="80" y="790" fill="#1a1a2e" font-size="20" font-weight="bold">STEP 3: Make ONE decision this week</text><text x="80" y="820" fill="#1a1a2e" font-size="14">Pick the highest-cost task. Today — not next quarter — do one of:</text><text x="100" y="850" fill="#1a1a2e" font-size="14">- Post a job listing</text><text x="100" y="875" fill="#1a1a2e" font-size="14">- Reassign to an existing team member</text><text x="100" y="900" fill="#1a1a2e" font-size="14">- Sign with a service (bookkeeping / EA / marketing)</text><text x="100" y="925" fill="#1a1a2e" font-size="14">- Block 4 hours on your calendar to build the SOP that lets you hand it off</text><rect x="100" y="975" width="900" height="100" fill="#ffd700" opacity="0.95" rx="10"/><text x="550" y="1010" text-anchor="middle" fill="#1a1a2e" font-size="18" font-weight="bold">END OF THE DIAGNOSTIC HALF</text><text x="550" y="1040" text-anchor="middle" fill="#1a1a2e" font-size="15">You now know the trap, the bottleneck, the identity, the matrix,</text><text x="550" y="1062" text-anchor="middle" fill="#1a1a2e" font-size="15">the chart, and the cost. Next half: build the exit.</text></svg>`,
          caption: "Three steps. One worksheet. The math that ends the debate."
        }
      }
    ]
  },
{
    id: "operator-to-owner-lesson-7",
    title: "Your First Executive Assistant",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "The Highest-Leverage Hire You'll Ever Make",
        content: `Most founders hire their first operator before their first executive assistant. That's backwards. An operator takes work off your plate inside the business. An EA takes work off your plate that prevents you from working ON the business at all.\n\nThink about your last seven days. How many hours went to scheduling meetings, rebooking a flight, chasing a vendor invoice, finding a contractor, ordering something from Amazon, replying to "got a sec?" emails, or sitting on hold with your bank? For most founders, that pile is 10-15 hours a week. At a $1,000/hour leverage rate, you're burning $40,000-$60,000 a month doing $25/hour work.\n\nA great EA — full-time, US-based, mid-career — runs $70,000-$90,000 all-in. The math is not close. You don't need to "scale to afford one." You can't afford NOT to have one once revenue clears about $1M.\n\nThe pushback you'll feel is emotional, not financial: "It feels indulgent." "I can do it myself in two minutes." "I don't want someone in my inbox." Every one of those reactions is the operator brain protecting its turf.\n\nThis lesson covers what an EA actually does day-to-day, the five most common hiring mistakes, and the real tradeoffs between a US-based EA and an offshore one. By the end you'll have a job spec and a clear next step.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="80" text-anchor="middle" fill="#ffd700" font-size="38" font-weight="bold">The Leverage Gap</text><text x="550" y="125" text-anchor="middle" fill="#ffffff" font-size="20">Without an EA vs. With an EA</text><rect x="80" y="180" width="440" height="800" fill="#1a1a2e" stroke="#ef4444" stroke-width="3" rx="12"/><text x="300" y="225" text-anchor="middle" fill="#ef4444" font-size="26" font-weight="bold">Without an EA</text><rect x="110" y="260" width="380" height="60" fill="#ef4444" opacity="0.2" rx="6"/><text x="130" y="298" fill="#ffffff" font-size="18">Scheduling: 4 hrs/wk</text><rect x="110" y="335" width="380" height="60" fill="#ef4444" opacity="0.25" rx="6"/><text x="130" y="373" fill="#ffffff" font-size="18">Inbox triage: 6 hrs/wk</text><rect x="110" y="410" width="380" height="60" fill="#ef4444" opacity="0.3" rx="6"/><text x="130" y="448" fill="#ffffff" font-size="18">Travel/logistics: 2 hrs/wk</text><rect x="110" y="485" width="380" height="60" fill="#ef4444" opacity="0.35" rx="6"/><text x="130" y="523" fill="#ffffff" font-size="18">Vendor chasing: 2 hrs/wk</text><rect x="110" y="560" width="380" height="60" fill="#ef4444" opacity="0.4" rx="6"/><text x="130" y="598" fill="#ffffff" font-size="18">Personal admin: 3 hrs/wk</text><text x="300" y="700" text-anchor="middle" fill="#ef4444" font-size="22" font-weight="bold">17 hrs/wk lost</text><text x="300" y="735" text-anchor="middle" fill="#ffffff" font-size="18">@ $1,000/hr leverage</text><text x="300" y="800" text-anchor="middle" fill="#ffd700" font-size="34" font-weight="bold">$68K/mo</text><text x="300" y="835" text-anchor="middle" fill="#ffffff" font-size="16">burned on admin</text><rect x="580" y="180" width="440" height="800" fill="#1a1a2e" stroke="#10b981" stroke-width="3" rx="12"/><text x="800" y="225" text-anchor="middle" fill="#10b981" font-size="26" font-weight="bold">With an EA</text><rect x="610" y="260" width="380" height="60" fill="#10b981" opacity="0.2" rx="6"/><text x="630" y="298" fill="#ffffff" font-size="18">Strategy time: 8 hrs/wk</text><rect x="610" y="335" width="380" height="60" fill="#10b981" opacity="0.25" rx="6"/><text x="630" y="373" fill="#ffffff" font-size="18">Customer calls: 5 hrs/wk</text><rect x="610" y="410" width="380" height="60" fill="#10b981" opacity="0.3" rx="6"/><text x="630" y="448" fill="#ffffff" font-size="18">Team 1:1s: 4 hrs/wk</text><rect x="610" y="485" width="380" height="60" fill="#10b981" opacity="0.35" rx="6"/><text x="630" y="523" fill="#ffffff" font-size="18">Recruiting: 3 hrs/wk</text><rect x="610" y="560" width="380" height="60" fill="#10b981" opacity="0.4" rx="6"/><text x="630" y="598" fill="#ffffff" font-size="18">Deep work: 4 hrs/wk</text><text x="800" y="700" text-anchor="middle" fill="#10b981" font-size="22" font-weight="bold">EA cost: $80K/yr</text><text x="800" y="735" text-anchor="middle" fill="#ffffff" font-size="18">= $6.7K/mo</text><text x="800" y="800" text-anchor="middle" fill="#ffd700" font-size="34" font-weight="bold">10x ROI</text><text x="800" y="835" text-anchor="middle" fill="#ffffff" font-size="16">in reclaimed time</text><text x="550" y="1040" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">The math is never close.</text></svg>`,
          caption: "Without an EA, 17 hours a week disappear into admin. With one, the same hours fund strategy, customers, and team."
        }
      },
      {
        type: "concept",
        title: "What an EA Actually Does",
        content: `A great EA is a force multiplier across six domains. Most founders think "EA" means "schedules meetings" and stop there. Here's the real scope.\n\n**1. Calendar (the highest-impact lever).** Owns your calendar end to end. Decides what gets time, defends focus blocks, batches like-with-like (all 1:1s Tuesday, all externals Thursday), reschedules without you touching it. Within 90 days, you should not be sending a calendar invite yourself.\n\n**2. Inbox.** Triages to four buckets: handle (60%), respond as you (20%), needs your eyes (15%), delete (5%). You only see the 15%. Tools: shared Gmail delegation, SaneBox, or a Superhuman split inbox.\n\n**3. Travel.** Books flights, hotels, ground transport. Maintains your travel profile (TSA precheck, frequent flyer numbers, dietary needs, hotel loyalty). Builds a one-page trip doc for every trip with addresses, times, contacts, confirmation numbers.\n\n**4. Research.** Pre-reads for meetings (background on the person, the company, last interaction). Vendor shortlists. Gift research. Restaurant scouting. Anything you'd Google for more than 10 minutes.\n\n**5. Vendor and project management.** Chases the contractor, gets three quotes, pays the bill, follows up on the deliverable. They become your single point of contact for accountants, lawyers, IT, household services.\n\n**6. Personal-business interface.** Doctor appointments, school forms, anniversary planning, home repairs. This isn't "personal stuff" — it's the cognitive load that keeps you from showing up at work as the CEO.\n\nThe litmus test: at month three, you should think about your EA the way you think about your right hand. Invisible until you need it.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="36" font-weight="bold">The 6 Domains of an EA</text><circle cx="550" cy="570" r="110" fill="#ffd700"/><text x="550" y="565" text-anchor="middle" fill="#1a1a2e" font-size="24" font-weight="bold">YOUR</text><text x="550" y="595" text-anchor="middle" fill="#1a1a2e" font-size="24" font-weight="bold">EA</text><circle cx="300" cy="280" r="120" fill="#6366f1" opacity="0.85"/><text x="300" y="265" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">CALENDAR</text><text x="300" y="295" text-anchor="middle" fill="#ffffff" font-size="14">Owns end-to-end</text><text x="300" y="315" text-anchor="middle" fill="#ffffff" font-size="14">Batches & defends</text><circle cx="800" cy="280" r="120" fill="#10b981" opacity="0.85"/><text x="800" y="265" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">INBOX</text><text x="800" y="295" text-anchor="middle" fill="#ffffff" font-size="14">4-bucket triage</text><text x="800" y="315" text-anchor="middle" fill="#ffffff" font-size="14">You see 15%</text><circle cx="180" cy="570" r="120" fill="#f59e0b" opacity="0.85"/><text x="180" y="555" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">TRAVEL</text><text x="180" y="585" text-anchor="middle" fill="#ffffff" font-size="14">Books + trip docs</text><text x="180" y="605" text-anchor="middle" fill="#ffffff" font-size="14">Loyalty programs</text><circle cx="920" cy="570" r="120" fill="#8b5cf6" opacity="0.85"/><text x="920" y="555" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">RESEARCH</text><text x="920" y="585" text-anchor="middle" fill="#ffffff" font-size="14">Meeting prep</text><text x="920" y="605" text-anchor="middle" fill="#ffffff" font-size="14">Vendor shortlists</text><circle cx="300" cy="860" r="120" fill="#0ea5e9" opacity="0.85"/><text x="300" y="845" text-anchor="middle" fill="#ffffff" font-size="20" font-weight="bold">VENDORS</text><text x="300" y="875" text-anchor="middle" fill="#ffffff" font-size="14">Quotes, payments,</text><text x="300" y="895" text-anchor="middle" fill="#ffffff" font-size="14">accountability</text><circle cx="800" cy="860" r="120" fill="#ec4899" opacity="0.85"/><text x="800" y="840" text-anchor="middle" fill="#ffffff" font-size="18" font-weight="bold">PERSONAL/</text><text x="800" y="862" text-anchor="middle" fill="#ffffff" font-size="18" font-weight="bold">BUSINESS</text><text x="800" y="895" text-anchor="middle" fill="#ffffff" font-size="14">Cognitive load</text><line x1="395" y1="350" x2="465" y2="500" stroke="#ffd700" stroke-width="3"/><line x1="705" y1="350" x2="635" y2="500" stroke="#ffd700" stroke-width="3"/><line x1="290" y1="615" x2="445" y2="585" stroke="#ffd700" stroke-width="3"/><line x1="810" y1="615" x2="655" y2="585" stroke="#ffd700" stroke-width="3"/><line x1="395" y1="790" x2="465" y2="640" stroke="#ffd700" stroke-width="3"/><line x1="705" y1="790" x2="635" y2="640" stroke="#ffd700" stroke-width="3"/><text x="550" y="1020" text-anchor="middle" fill="#888" font-size="20">All six, or you didn't actually hire an EA.</text></svg>`,
          caption: "An EA operates across six domains — calendar, inbox, travel, research, vendors, and the personal-business interface."
        }
      },
      {
        type: "example",
        title: "The 5 Mistakes Founders Make Hiring Their First EA",
        content: `Pattern recognition from 100+ first-EA hires. Avoid these and you'll succeed; commit any of them and you'll be back hiring in six months.\n\n**Mistake 1: Hiring junior to "grow into the role."** A 24-year-old administrative assistant cannot anticipate. They wait to be told. A first EA needs 8+ years in the seat. Pay for it: $75-95K for a US-based senior EA, $20-40K for an offshore one with comparable experience.\n\n**Mistake 2: Hiring someone who needs to like you.** Service-oriented people who confuse "helpful" with "submissive." You need an EA who will tell you "no, that meeting is dumb, I'm declining it for you" by week four. Screen for assertiveness in the interview: ask for an example of pushing back on a previous executive.\n\n**Mistake 3: Refusing to give inbox access.** "I'll just forward them what I need help with." That's not an EA, that's an inbox rules engine. Day one, they get full delegated access to your calendar and email. If you can't trust them with that, you hired wrong.\n\n**Mistake 4: No first-90-days plan.** You throw them in and "see how it goes." Three weeks later you're frustrated they don't know what you want. Build a 30/60/90 plan (next lesson covers this). Pre-write what they own at day 30, day 60, day 90.\n\n**Mistake 5: Hiring offshore-only when you need US-coverage.** Offshore EAs (Philippines, South Africa, LATAM) are extraordinary for async work — inbox processing, research, scheduling across timezones, vendor follow-up. They struggle with real-time judgment calls, US-based vendor calls during business hours, and reading domestic cultural nuance. The right answer for most $1-10M founders: one US-based EA (lead), one offshore support (4-6 hours/day). Total cost: ~$110K all-in, two people, 24-hour coverage.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="34" font-weight="bold">The 5 First-EA Mistakes</text><text x="550" y="110" text-anchor="middle" fill="#888" font-size="18">And what to do instead</text><rect x="60" y="160" width="1000" height="150" fill="#1a1a2e" stroke="#ef4444" stroke-width="2" rx="10"/><circle cx="120" cy="235" r="35" fill="#ef4444"/><text x="120" y="245" text-anchor="middle" fill="#ffffff" font-size="28" font-weight="bold">1</text><text x="180" y="205" fill="#ef4444" font-size="22" font-weight="bold">Hiring junior to "grow into it"</text><text x="180" y="235" fill="#ffffff" font-size="16">A 24-yr-old admin waits to be told. First EA = 8+ yrs.</text><text x="180" y="265" fill="#10b981" font-size="16">FIX: Pay $75-95K US / $20-40K offshore for senior talent</text><text x="180" y="290" fill="#888" font-size="14">Anticipation is the skill. You can't teach it in 90 days.</text><rect x="60" y="325" width="1000" height="150" fill="#1a1a2e" stroke="#ef4444" stroke-width="2" rx="10"/><circle cx="120" cy="400" r="35" fill="#ef4444"/><text x="120" y="410" text-anchor="middle" fill="#ffffff" font-size="28" font-weight="bold">2</text><text x="180" y="370" fill="#ef4444" font-size="22" font-weight="bold">Hiring someone who needs to like you</text><text x="180" y="400" fill="#ffffff" font-size="16">Submissive ≠ helpful. You need pushback by week 4.</text><text x="180" y="430" fill="#10b981" font-size="16">FIX: Screen for assertiveness. Ask for a "no" story.</text><text x="180" y="455" fill="#888" font-size="14">"I declined that meeting on your behalf" is the goal.</text><rect x="60" y="490" width="1000" height="150" fill="#1a1a2e" stroke="#ef4444" stroke-width="2" rx="10"/><circle cx="120" cy="565" r="35" fill="#ef4444"/><text x="120" y="575" text-anchor="middle" fill="#ffffff" font-size="28" font-weight="bold">3</text><text x="180" y="535" fill="#ef4444" font-size="22" font-weight="bold">Refusing full inbox/calendar access</text><text x="180" y="565" fill="#ffffff" font-size="16">"I'll forward what I need." That's a rules engine.</text><text x="180" y="595" fill="#10b981" font-size="16">FIX: Day 1, full Gmail delegation + calendar admin</text><text x="180" y="620" fill="#888" font-size="14">If you can't trust them with it, you hired wrong.</text><rect x="60" y="655" width="1000" height="150" fill="#1a1a2e" stroke="#ef4444" stroke-width="2" rx="10"/><circle cx="120" cy="730" r="35" fill="#ef4444"/><text x="120" y="740" text-anchor="middle" fill="#ffffff" font-size="28" font-weight="bold">4</text><text x="180" y="700" fill="#ef4444" font-size="22" font-weight="bold">No 30/60/90 plan</text><text x="180" y="730" fill="#ffffff" font-size="16">"See how it goes" = frustration by week 3.</text><text x="180" y="760" fill="#10b981" font-size="16">FIX: Pre-write what they own at 30, 60, 90 days</text><text x="180" y="785" fill="#888" font-size="14">Covered in Lesson 9.</text><rect x="60" y="820" width="1000" height="180" fill="#1a1a2e" stroke="#ef4444" stroke-width="2" rx="10"/><circle cx="120" cy="910" r="35" fill="#ef4444"/><text x="120" y="920" text-anchor="middle" fill="#ffffff" font-size="28" font-weight="bold">5</text><text x="180" y="865" fill="#ef4444" font-size="22" font-weight="bold">Offshore-only when you need US coverage</text><text x="180" y="895" fill="#ffffff" font-size="16">Offshore = great async. Real-time judgment is local.</text><text x="180" y="925" fill="#10b981" font-size="16">FIX: 1 US lead ($85K) + 1 offshore support ($25K)</text><text x="180" y="955" fill="#888" font-size="14">= $110K all-in, 24-hour coverage, two heads.</text><text x="180" y="980" fill="#888" font-size="14">Best ROI structure for $1-10M founders.</text></svg>`,
          caption: "Five mistakes that account for nearly every failed first-EA hire — and the fix for each."
        }
      },
      {
        type: "quiz",
        title: "Quick Check",
        question: "You're a founder of a $4M services business. You're about to hire your first EA. Which structure is the highest-ROI starting point?",
        options: [
          { text: "Hire one offshore EA in the Philippines at $25K/yr — keep costs low and see if it works before scaling up.", correct: false },
          { text: "Hire one senior US-based EA ($85K) plus one offshore support EA ($25K) for ~$110K total, giving 24-hour coverage and two perspectives.", correct: true },
          { text: "Hire a junior US-based admin at $50K and train them up over 12 months so they grow with the company.", correct: false },
          { text: "Don't hire yet — use Calendly, SaneBox, and an AI inbox assistant until revenue clears $10M.", correct: false }
        ],
        explanation: "The senior US lead + offshore support combination is the highest-ROI structure for a $1-10M founder. The US EA handles real-time judgment, domestic vendor calls, and cultural nuance; the offshore EA handles async work (inbox, research, scheduling) overnight. Total cost is roughly what one mid-market hire would be, but you get two heads and around-the-clock coverage. Junior hires can't anticipate, offshore-only struggles with real-time judgment, and tools-only is a false economy — you can't automate the parts of an EA that actually matter (relationships, anticipation, taste).",
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="80" text-anchor="middle" fill="#ffd700" font-size="36" font-weight="bold">The Hybrid EA Stack</text><text x="550" y="125" text-anchor="middle" fill="#ffffff" font-size="20">US lead + offshore support = best ROI for $1-10M founders</text><rect x="100" y="200" width="380" height="500" fill="#1a1a2e" stroke="#6366f1" stroke-width="3" rx="12"/><circle cx="290" cy="280" r="55" fill="#6366f1"/><text x="290" y="290" text-anchor="middle" fill="#ffffff" font-size="32" font-weight="bold">US</text><text x="290" y="370" text-anchor="middle" fill="#6366f1" font-size="24" font-weight="bold">Senior US EA</text><text x="290" y="400" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">$85K/yr</text><line x1="140" y1="430" x2="440" y2="430" stroke="#888" stroke-width="1"/><text x="120" y="465" fill="#ffffff" font-size="16">• Real-time judgment</text><text x="120" y="495" fill="#ffffff" font-size="16">• US vendor calls</text><text x="120" y="525" fill="#ffffff" font-size="16">• Cultural nuance</text><text x="120" y="555" fill="#ffffff" font-size="16">• High-stakes comms</text><text x="120" y="585" fill="#ffffff" font-size="16">• Owns calendar</text><text x="120" y="615" fill="#ffffff" font-size="16">• Sets standards</text><text x="120" y="660" fill="#10b981" font-size="14">Hours: 9-6 ET</text><rect x="620" y="200" width="380" height="500" fill="#1a1a2e" stroke="#0ea5e9" stroke-width="3" rx="12"/><circle cx="810" cy="280" r="55" fill="#0ea5e9"/><text x="810" y="295" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">OFF</text><text x="810" y="370" text-anchor="middle" fill="#0ea5e9" font-size="24" font-weight="bold">Offshore Support EA</text><text x="810" y="400" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">$25K/yr</text><line x1="660" y1="430" x2="960" y2="430" stroke="#888" stroke-width="1"/><text x="640" y="465" fill="#ffffff" font-size="16">• Inbox processing</text><text x="640" y="495" fill="#ffffff" font-size="16">• Research / pre-reads</text><text x="640" y="525" fill="#ffffff" font-size="16">• Travel booking</text><text x="640" y="555" fill="#ffffff" font-size="16">• Expense reports</text><text x="640" y="585" fill="#ffffff" font-size="16">• SOP maintenance</text><text x="640" y="615" fill="#ffffff" font-size="16">• Overnight handoff</text><text x="640" y="660" fill="#10b981" font-size="14">Hours: overnight US</text><rect x="200" y="780" width="700" height="200" fill="#ffd700" rx="12"/><text x="550" y="830" text-anchor="middle" fill="#1a1a2e" font-size="26" font-weight="bold">Total: ~$110K all-in</text><text x="550" y="870" text-anchor="middle" fill="#1a1a2e" font-size="20">24-hour coverage  •  Two heads  •  Built-in redundancy</text><text x="550" y="920" text-anchor="middle" fill="#1a1a2e" font-size="18">vs. one $95K senior hire = same cost, half the leverage</text><text x="550" y="950" text-anchor="middle" fill="#1a1a2e" font-size="16">Founders report 12-18 hrs/wk reclaimed in first 90 days</text></svg>`,
          caption: "The hybrid US-lead + offshore-support structure: same cost as one senior hire, twice the coverage."
        }
      },
      {
        type: "application",
        title: "Your EA Job Spec — Write It This Week",
        content: `Before you post, write the spec. This forces clarity on what you actually need. Block 90 minutes this week.\n\n**Step 1: Time audit (30 min).** Open last 14 days of your calendar and inbox. List every task that took >5 minutes that wasn't (a) strategy, (b) people leadership, (c) customer/revenue, or (d) deep work. That list IS your EA's job description.\n\n**Step 2: Write the job spec (45 min).** Use this template:\n\n*Title:* Executive Assistant to the CEO\n*Reports to:* You directly\n*Compensation:* $75-95K + health + 2 weeks PTO (US senior) OR $25-35K (offshore senior via Athena, Time etc, Persona, or Belay)\n*Location:* Remote, US time zone overlap (or [your city] if hybrid)\n*Day 90 outcomes (write these first):*\n  - You touch your own calendar 0 times per week\n  - You see <20% of incoming email\n  - Every external meeting has a pre-read in your inbox the night before\n  - All vendor follow-up runs through them\n  - Trip docs exist for every trip you take\n*Day-to-day responsibilities:* [paste your time audit list]\n*Must-haves:* 8+ years EA experience, supported a C-level, comfortable with full inbox/calendar access, examples of declining meetings on principal's behalf\n*Nice-to-haves:* Notion + Gmail + Calendar power user, project management exposure, previous founder-EA experience\n\n**Step 3: Source (15 min set up).** Three channels in parallel: (1) post in The EA Network or Maven Recruiting Group, (2) ask for referrals from three founder peers, (3) for offshore, contact Athena, Persona, or Time etc for matched candidates.\n\n**Step 4: Interview process.** Three rounds: (1) 30-min screen, (2) 60-min working session (have them schedule a fake meeting, triage 10 sample emails, plan a fake trip), (3) 45-min reference check with two prior principals.\n\n**Commit date:** Spec written by Friday. First candidate call within 14 days. Hired within 45 days.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="36" font-weight="bold">Your 45-Day Hiring Plan</text><text x="550" y="110" text-anchor="middle" fill="#888" font-size="18">From "I should get an EA" to "they start Monday"</text><rect x="80" y="170" width="940" height="160" fill="#1a1a2e" stroke="#6366f1" stroke-width="3" rx="10"/><circle cx="140" cy="250" r="40" fill="#6366f1"/><text x="140" y="262" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">WK 1</text><text x="210" y="215" fill="#6366f1" font-size="22" font-weight="bold">Spec it</text><text x="210" y="245" fill="#ffffff" font-size="16">30-min time audit of last 14 days</text><text x="210" y="270" fill="#ffffff" font-size="16">45-min: write job spec with Day 90 outcomes</text><text x="210" y="295" fill="#ffffff" font-size="16">15-min: set up sourcing channels</text><text x="210" y="320" fill="#10b981" font-size="14">Done by Friday</text><rect x="80" y="345" width="940" height="160" fill="#1a1a2e" stroke="#10b981" stroke-width="3" rx="10"/><circle cx="140" cy="425" r="40" fill="#10b981"/><text x="140" y="437" text-anchor="middle" fill="#ffffff" font-size="20" font-weight="bold">WK 2-3</text><text x="210" y="390" fill="#10b981" font-size="22" font-weight="bold">Source + screen</text><text x="210" y="420" fill="#ffffff" font-size="16">Post: EA Network / Maven Recruiting Group</text><text x="210" y="445" fill="#ffffff" font-size="16">Referrals: ask 3 founder peers</text><text x="210" y="470" fill="#ffffff" font-size="16">Offshore: Athena / Persona / Time etc / Belay</text><text x="210" y="495" fill="#ffd700" font-size="14">Target: 8-12 first-round screens</text><rect x="80" y="520" width="940" height="160" fill="#1a1a2e" stroke="#f59e0b" stroke-width="3" rx="10"/><circle cx="140" cy="600" r="40" fill="#f59e0b"/><text x="140" y="612" text-anchor="middle" fill="#ffffff" font-size="20" font-weight="bold">WK 4-5</text><text x="210" y="565" fill="#f59e0b" font-size="22" font-weight="bold">Working sessions</text><text x="210" y="595" fill="#ffffff" font-size="16">60-min real-task test (schedule, triage, plan trip)</text><text x="210" y="620" fill="#ffffff" font-size="16">Screen for assertiveness: "Tell me about a no"</text><text x="210" y="645" fill="#ffffff" font-size="16">Top 3 advance to references</text><text x="210" y="670" fill="#ffd700" font-size="14">Target: 3 finalists</text><rect x="80" y="695" width="940" height="160" fill="#1a1a2e" stroke="#8b5cf6" stroke-width="3" rx="10"/><circle cx="140" cy="775" r="40" fill="#8b5cf6"/><text x="140" y="787" text-anchor="middle" fill="#ffffff" font-size="20" font-weight="bold">WK 6</text><text x="210" y="740" fill="#8b5cf6" font-size="22" font-weight="bold">References + offer</text><text x="210" y="770" fill="#ffffff" font-size="16">45-min reference calls with 2 prior principals</text><text x="210" y="795" fill="#ffffff" font-size="16">Ask: "Would you hire them again? At what salary?"</text><text x="210" y="820" fill="#ffffff" font-size="16">Offer within 24 hrs of final reference</text><text x="210" y="845" fill="#10b981" font-size="14">Start date: 2 weeks out</text><rect x="200" y="900" width="700" height="120" fill="#ffd700" rx="12"/><text x="550" y="945" text-anchor="middle" fill="#1a1a2e" font-size="22" font-weight="bold">Commitment date</text><text x="550" y="985" text-anchor="middle" fill="#1a1a2e" font-size="18">Spec written by Friday. Hired within 45 days.</text></svg>`,
          caption: "A 45-day plan from blank spec to first day. Each week has a single output."
        }
      }
    ]
  },
  {
    id: "operator-to-owner-lesson-8",
    title: "The Delegation Brief",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "Why Tasks Boomerang Back",
        content: `You delegate the marketing report. Three days later it's back on your desk with a question. You answer it. Four days later it's back again. You give up, finish it yourself, and quietly conclude that "nobody can do it right." Sound familiar?\n\nThis is not a people problem. It's a brief problem.\n\nDelegation isn't "telling someone to do something." That's assignment. Delegation is transferring a complete decision-making package — outcome, inputs, constraints, standard of done, and authority — so the person can execute without coming back to you. Skip any one of the five and the task boomerangs. Guaranteed.\n\nThe most common failure mode: you delegate the task but not the authority. So every decision routes back through you. Now you're a bottleneck wrapped in the illusion of having delegated. The person doing the work hates it (they feel micromanaged), you hate it (it didn't free you), and the output is worse than if you'd done it yourself.\n\nThe second most common failure mode: you delegate the activity but not the outcome. "Send out the customer newsletter" vs. "Drive 50 reply-conversations from existing customers each month." The first invites mediocrity. The second creates ownership.\n\nThis lesson gives you a brief template you can copy, the rule for first-time vs. recurring delegations, and a list of the first five SOPs every founder should have written by their team — not by themselves. By the end you'll have one task delegated for real, not just assigned.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="36" font-weight="bold">The Boomerang Pattern</text><text x="550" y="115" text-anchor="middle" fill="#ffffff" font-size="20">Why tasks keep coming back to you</text><circle cx="220" cy="350" r="80" fill="#6366f1"/><text x="220" y="345" text-anchor="middle" fill="#ffffff" font-size="20" font-weight="bold">YOU</text><text x="220" y="370" text-anchor="middle" fill="#ffffff" font-size="14">(founder)</text><circle cx="880" cy="350" r="80" fill="#10b981"/><text x="880" y="345" text-anchor="middle" fill="#ffffff" font-size="20" font-weight="bold">THEM</text><text x="880" y="370" text-anchor="middle" fill="#ffffff" font-size="14">(team)</text><path d="M 300 320 Q 550 200 800 320" stroke="#ffd700" stroke-width="4" fill="none" marker-end="url(#arrow1)"/><defs><marker id="arrow1" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><polygon points="0 0, 10 3, 0 6" fill="#ffd700"/></marker><marker id="arrow2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><polygon points="0 0, 10 3, 0 6" fill="#ef4444"/></marker></defs><text x="550" y="200" text-anchor="middle" fill="#ffd700" font-size="18">"Handle this for me"</text><path d="M 800 380 Q 550 500 300 380" stroke="#ef4444" stroke-width="4" fill="none" marker-end="url(#arrow2)" stroke-dasharray="8 4"/><text x="550" y="510" text-anchor="middle" fill="#ef4444" font-size="18">"Quick question..."</text><path d="M 300 420 Q 550 540 800 420" stroke="#ffd700" stroke-width="4" fill="none" marker-end="url(#arrow1)"/><text x="550" y="555" text-anchor="middle" fill="#ffd700" font-size="16">"Here's the answer..."</text><path d="M 800 470 Q 550 600 300 470" stroke="#ef4444" stroke-width="4" fill="none" marker-end="url(#arrow2)" stroke-dasharray="8 4"/><text x="550" y="630" text-anchor="middle" fill="#ef4444" font-size="18">"Another quick one..."</text><rect x="150" y="720" width="800" height="280" fill="#1a1a2e" stroke="#ffd700" stroke-width="2" rx="10"/><text x="550" y="765" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">The root cause</text><text x="200" y="810" fill="#ffffff" font-size="18">Delegation requires 5 transfers. Skip any one and it boomerangs:</text><text x="220" y="850" fill="#10b981" font-size="17">  Outcome — what does "done" look like?</text><text x="220" y="885" fill="#10b981" font-size="17">  Inputs — what info do they have access to?</text><text x="220" y="920" fill="#10b981" font-size="17">  Constraints — budget, time, what's off-limits?</text><text x="220" y="955" fill="#10b981" font-size="17">  Standard of done — how will it be evaluated?</text><text x="220" y="990" fill="#10b981" font-size="17">  Decision authority — what can they decide alone?</text></svg>`,
          caption: "Tasks boomerang when any of the five transfers — outcome, inputs, constraints, standard, authority — is missing."
        }
      },
      {
        type: "concept",
        title: "The OICSD Brief Template",
        content: `Every recurring delegation gets a one-page brief using this template. Use Notion, Google Docs, or even a pinned Slack message — the medium doesn't matter, the discipline does.\n\n**O — Outcome (the WHAT, in business terms)**\nNot "send the weekly investor update." Instead: "Investors stay informed enough that they say yes within 5 days when we ask for an intro, and feel no surprises in quarterly board meetings." Outcome is measurable, behavioral, and tied to a business result.\n\n**I — Inputs (the WHAT-YOU-GET)**\nList every system, document, person, and tool they need. "Access to the financials folder. Permission to ping Sarah (CFO) for numbers. Last 6 months of investor updates in the Notion archive. Mailchimp login." Pre-stage all of it before handoff. If they have to ask you for an input, you didn't finish the brief.\n\n**C — Constraints (the WHAT-NOT)**\nThe guardrails. "Don't share revenue numbers below MRR breakdown level. Don't promise specific features by date. Don't email more than 2 days late. Budget for tools: $200/mo." Constraints are where founders most often under-specify, then get angry when someone "uses bad judgment."\n\n**S — Standard of Done (the HOW-WELL)**\nThe rubric. "Sent by Friday 5pm ET. Includes: revenue, runway, one win, one ask. Under 400 words. Reads like a founder wrote it. Two investors reply within 7 days (proxy for engagement)." Specific. Measurable. Pre-agreed.\n\n**D — Decision Authority (the WHAT-YOU-CAN-DECIDE)**\nThree tiers: (1) Decide and act — they own it fully. (2) Decide and inform — they act, then tell you. (3) Recommend and ask — they propose, you decide. For an EA's calendar work, declining a meeting under $X value = Tier 1. Adding a board meeting = Tier 3.\n\nWrite the brief once. Iterate it after the first cycle. Never re-explain.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="38" font-weight="bold">The OICSD Brief</text><text x="550" y="115" text-anchor="middle" fill="#888" font-size="20">Five transfers. One page. No boomerang.</text><rect x="80" y="170" width="940" height="155" fill="#1a1a2e" stroke="#6366f1" stroke-width="3" rx="10"/><circle cx="140" cy="247" r="42" fill="#6366f1"/><text x="140" y="260" text-anchor="middle" fill="#ffffff" font-size="34" font-weight="bold">O</text><text x="210" y="210" fill="#6366f1" font-size="22" font-weight="bold">OUTCOME</text><text x="210" y="240" fill="#ffffff" font-size="16">Business result, not activity. Measurable, behavioral.</text><text x="210" y="270" fill="#10b981" font-size="14">Bad: "Send weekly investor update"</text><text x="210" y="295" fill="#10b981" font-size="14">Good: "Investors say yes within 5 days when asked for intros"</text><rect x="80" y="340" width="940" height="155" fill="#1a1a2e" stroke="#10b981" stroke-width="3" rx="10"/><circle cx="140" cy="417" r="42" fill="#10b981"/><text x="140" y="430" text-anchor="middle" fill="#ffffff" font-size="34" font-weight="bold">I</text><text x="210" y="380" fill="#10b981" font-size="22" font-weight="bold">INPUTS</text><text x="210" y="410" fill="#ffffff" font-size="16">Every system, doc, person, tool — pre-staged.</text><text x="210" y="440" fill="#888" font-size="14">Access to financials folder, CFO ping permission,</text><text x="210" y="465" fill="#888" font-size="14">archive of last 6 months, Mailchimp login</text><rect x="80" y="510" width="940" height="155" fill="#1a1a2e" stroke="#f59e0b" stroke-width="3" rx="10"/><circle cx="140" cy="587" r="42" fill="#f59e0b"/><text x="140" y="600" text-anchor="middle" fill="#ffffff" font-size="34" font-weight="bold">C</text><text x="210" y="550" fill="#f59e0b" font-size="22" font-weight="bold">CONSTRAINTS</text><text x="210" y="580" fill="#ffffff" font-size="16">The guardrails. Where founders under-specify most.</text><text x="210" y="610" fill="#888" font-size="14">No revenue below MRR level. No date promises.</text><text x="210" y="635" fill="#888" font-size="14">Max 2 days late. Tool budget: $200/mo.</text><rect x="80" y="680" width="940" height="155" fill="#1a1a2e" stroke="#8b5cf6" stroke-width="3" rx="10"/><circle cx="140" cy="757" r="42" fill="#8b5cf6"/><text x="140" y="770" text-anchor="middle" fill="#ffffff" font-size="34" font-weight="bold">S</text><text x="210" y="720" fill="#8b5cf6" font-size="22" font-weight="bold">STANDARD OF DONE</text><text x="210" y="750" fill="#ffffff" font-size="16">The rubric. Specific. Pre-agreed.</text><text x="210" y="780" fill="#888" font-size="14">Friday 5pm ET. Under 400 words. Includes revenue,</text><text x="210" y="805" fill="#888" font-size="14">runway, win, ask. 2 investor replies within 7 days.</text><rect x="80" y="850" width="940" height="180" fill="#1a1a2e" stroke="#ec4899" stroke-width="3" rx="10"/><circle cx="140" cy="940" r="42" fill="#ec4899"/><text x="140" y="953" text-anchor="middle" fill="#ffffff" font-size="34" font-weight="bold">D</text><text x="210" y="895" fill="#ec4899" font-size="22" font-weight="bold">DECISION AUTHORITY</text><text x="210" y="925" fill="#ffffff" font-size="16">Three tiers. Pre-define which applies to what.</text><text x="210" y="955" fill="#10b981" font-size="14">Tier 1: Decide and act (e.g., decline meeting &lt; $X)</text><text x="210" y="980" fill="#f59e0b" font-size="14">Tier 2: Decide and inform (e.g., reschedule board prep)</text><text x="210" y="1005" fill="#ef4444" font-size="14">Tier 3: Recommend and ask (e.g., add new board member)</text></svg>`,
          caption: "OICSD — the five transfers that make a delegation real instead of a hopeful assignment."
        }
      },
      {
        type: "example",
        title: "Your First 5 SOPs and the Loom-Driven Method",
        content: `Stop writing SOPs yourself. The right way: you do the task while recording on Loom, the team member watches, then THEY write the SOP, and you edit it. Total founder time: 20 minutes for a task that would take 3 hours to document properly.\n\n**The Loom-driven SOP method (60 min):**\n1. Open Loom. Hit record with screen + camera on. (5 min setup)\n2. Do the task once, narrating every decision out loud — "I check this number first because... I ignore this email because..." (15-30 min)\n3. Send the Loom to the team member with the OICSD brief. (2 min)\n4. They write a step-by-step SOP in Notion based on the video. (60 min on their end)\n5. You review and edit. Add the "what to do when..." exceptions you remember. (15 min)\n6. They do the task next cycle following the SOP. You do nothing.\n7. They update the SOP after their first run. Living document forever.\n\n**The first 5 SOPs every founder should have:**\n\n**SOP 1: Inbox triage.** Your EA needs the rules to your inbox. Who gets a fast reply, who gets the auto-template, who you actually want to see, what gets archived. Outcome: 80% of email never reaches your eyes.\n\n**SOP 2: Meeting prep packet.** Every external meeting gets a one-page pre-read in your inbox the night before. Background on attendees, last interaction, agenda, your goal. Outcome: you walk into every meeting prepared without spending time preparing.\n\n**SOP 3: Travel booking.** Your preferences (aisle seat, Marriott when available, no red-eyes, etc.), approved booking tools, expense capture flow. Outcome: you say "I need to be in Austin Wed-Fri" and a trip doc lands in your inbox 4 hours later.\n\n**SOP 4: Customer escalation routing.** When a customer complaint hits your inbox or LinkedIn, who handles, what tone, when you get looped in. Outcome: you only see the 5% that actually need you.\n\n**SOP 5: Vendor evaluation.** Three quotes, standard scorecard, decision under $5K, recommend above. Outcome: you stop being the procurement department.\n\nStore in Notion under "SOPs." Each SOP has: owner, last updated, OICSD section, and step-by-step. Review monthly.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="36" font-weight="bold">The Loom-Driven SOP Flow</text><text x="550" y="115" text-anchor="middle" fill="#888" font-size="18">You record. They write. Living doc forever.</text><rect x="80" y="170" width="940" height="80" fill="#1a1a2e" stroke="#6366f1" stroke-width="2" rx="8"/><circle cx="130" cy="210" r="25" fill="#6366f1"/><text x="130" y="218" text-anchor="middle" fill="#ffffff" font-size="18" font-weight="bold">1</text><text x="180" y="200" fill="#6366f1" font-size="18" font-weight="bold">Open Loom + screen record</text><text x="180" y="230" fill="#ffffff" font-size="14">Camera on. Narrate every decision out loud. 15-30 min.</text><rect x="80" y="265" width="940" height="80" fill="#1a1a2e" stroke="#10b981" stroke-width="2" rx="8"/><circle cx="130" cy="305" r="25" fill="#10b981"/><text x="130" y="313" text-anchor="middle" fill="#ffffff" font-size="18" font-weight="bold">2</text><text x="180" y="295" fill="#10b981" font-size="18" font-weight="bold">Send Loom + OICSD brief to team member</text><text x="180" y="325" fill="#ffffff" font-size="14">Slack DM or Notion task. Set deadline: 48 hours.</text><rect x="80" y="360" width="940" height="80" fill="#1a1a2e" stroke="#f59e0b" stroke-width="2" rx="8"/><circle cx="130" cy="400" r="25" fill="#f59e0b"/><text x="130" y="408" text-anchor="middle" fill="#ffffff" font-size="18" font-weight="bold">3</text><text x="180" y="390" fill="#f59e0b" font-size="18" font-weight="bold">They write the SOP in Notion</text><text x="180" y="420" fill="#ffffff" font-size="14">Step by step, with screenshots. 60-90 min on their end.</text><rect x="80" y="455" width="940" height="80" fill="#1a1a2e" stroke="#8b5cf6" stroke-width="2" rx="8"/><circle cx="130" cy="495" r="25" fill="#8b5cf6"/><text x="130" y="503" text-anchor="middle" fill="#ffffff" font-size="18" font-weight="bold">4</text><text x="180" y="485" fill="#8b5cf6" font-size="18" font-weight="bold">You edit + add exceptions</text><text x="180" y="515" fill="#ffffff" font-size="14">"What to do when..." edge cases. 15 min max.</text><rect x="80" y="550" width="940" height="80" fill="#1a1a2e" stroke="#ec4899" stroke-width="2" rx="8"/><circle cx="130" cy="590" r="25" fill="#ec4899"/><text x="130" y="598" text-anchor="middle" fill="#ffffff" font-size="18" font-weight="bold">5</text><text x="180" y="580" fill="#ec4899" font-size="18" font-weight="bold">They run it. They update it.</text><text x="180" y="610" fill="#ffffff" font-size="14">SOP becomes living doc. Updated every cycle.</text><text x="550" y="690" text-anchor="middle" fill="#ffd700" font-size="26" font-weight="bold">The First 5 SOPs</text><rect x="120" y="720" width="180" height="100" fill="#6366f1" opacity="0.85" rx="8"/><text x="210" y="755" text-anchor="middle" fill="#ffffff" font-size="16" font-weight="bold">SOP 1</text><text x="210" y="780" text-anchor="middle" fill="#ffffff" font-size="14">Inbox triage</text><text x="210" y="805" text-anchor="middle" fill="#ffffff" font-size="11">80% never reaches you</text><rect x="320" y="720" width="180" height="100" fill="#10b981" opacity="0.85" rx="8"/><text x="410" y="755" text-anchor="middle" fill="#ffffff" font-size="16" font-weight="bold">SOP 2</text><text x="410" y="780" text-anchor="middle" fill="#ffffff" font-size="14">Meeting prep</text><text x="410" y="805" text-anchor="middle" fill="#ffffff" font-size="11">Pre-reads night before</text><rect x="520" y="720" width="180" height="100" fill="#f59e0b" opacity="0.85" rx="8"/><text x="610" y="755" text-anchor="middle" fill="#ffffff" font-size="16" font-weight="bold">SOP 3</text><text x="610" y="780" text-anchor="middle" fill="#ffffff" font-size="14">Travel booking</text><text x="610" y="805" text-anchor="middle" fill="#ffffff" font-size="11">Trip doc in 4 hrs</text><rect x="720" y="720" width="180" height="100" fill="#8b5cf6" opacity="0.85" rx="8"/><text x="810" y="755" text-anchor="middle" fill="#ffffff" font-size="16" font-weight="bold">SOP 4</text><text x="810" y="780" text-anchor="middle" fill="#ffffff" font-size="14">Customer escalation</text><text x="810" y="805" text-anchor="middle" fill="#ffffff" font-size="11">Only 5% reaches you</text><rect x="420" y="850" width="280" height="100" fill="#ec4899" opacity="0.85" rx="8"/><text x="560" y="885" text-anchor="middle" fill="#ffffff" font-size="16" font-weight="bold">SOP 5</text><text x="560" y="910" text-anchor="middle" fill="#ffffff" font-size="14">Vendor evaluation</text><text x="560" y="935" text-anchor="middle" fill="#ffffff" font-size="11">No more procurement</text><text x="550" y="1010" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">Founder time per SOP: ~20 min. Worth it forever.</text></svg>`,
          caption: "The Loom-driven SOP method shifts the writing work off your plate. Five SOPs is the starting set."
        }
      },
      {
        type: "quiz",
        title: "Quick Check",
        question: "You delegate the weekly investor update to your new EA. Three weeks in, it keeps coming back to you with questions like 'should I mention the lawsuit?' and 'how do I phrase the runway number?' Which OICSD component did you most likely under-specify?",
        options: [
          { text: "Outcome — the EA doesn't understand what the update is for.", correct: false },
          { text: "Inputs — the EA doesn't have access to the right financials.", correct: false },
          { text: "Constraints and Decision Authority — the EA doesn't know what's off-limits or what they can decide on their own.", correct: true },
          { text: "Standard of Done — the EA doesn't know how the update will be evaluated.", correct: false }
        ],
        explanation: "Questions like 'should I mention the lawsuit?' and 'how do I phrase the runway?' are decision-authority and constraint questions, not outcome or input questions. The EA understands what the update is and has the numbers. What they're missing: (1) constraints — what's off-limits to share, and (2) decision authority — which decisions they can make alone vs. need to escalate. A complete brief would specify: 'Don't mention active legal matters. Don't share monthly burn below team-level granularity. Phrasing on sensitive topics — recommend and ask. Number formatting — decide and act.' Founders under-specify these two more than any other.",
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="34" font-weight="bold">Diagnosing a Boomerang</text><text x="550" y="115" text-anchor="middle" fill="#ffffff" font-size="20">What kind of question = what kind of gap</text><rect x="80" y="170" width="940" height="120" fill="#1a1a2e" stroke="#6366f1" stroke-width="2" rx="10"/><text x="100" y="205" fill="#6366f1" font-size="20" font-weight="bold">Outcome gap</text><text x="100" y="235" fill="#ffffff" font-size="16">Sounds like: "What's this for?" / "Who reads it?"</text><text x="100" y="265" fill="#888" font-size="14">Fix: Rewrite outcome in business-result terms.</text><rect x="80" y="305" width="940" height="120" fill="#1a1a2e" stroke="#10b981" stroke-width="2" rx="10"/><text x="100" y="340" fill="#10b981" font-size="20" font-weight="bold">Input gap</text><text x="100" y="370" fill="#ffffff" font-size="16">Sounds like: "Where do I find...?" / "Can you ask Sarah for...?"</text><text x="100" y="400" fill="#888" font-size="14">Fix: Pre-stage access. Permission to ping people directly.</text><rect x="80" y="440" width="940" height="160" fill="#1a1a2e" stroke="#f59e0b" stroke-width="4" rx="10"/><text x="100" y="475" fill="#f59e0b" font-size="22" font-weight="bold">Constraint gap  ← THIS QUESTION</text><text x="100" y="505" fill="#ffffff" font-size="16">Sounds like: "Should I mention X?" / "Is it OK to share Y?"</text><text x="100" y="535" fill="#888" font-size="14">Fix: List what's off-limits. "Don't mention active legal."</text><text x="100" y="565" fill="#888" font-size="14">"Don't share burn below team-level granularity."</text><rect x="80" y="615" width="940" height="160" fill="#1a1a2e" stroke="#ec4899" stroke-width="4" rx="10"/><text x="100" y="650" fill="#ec4899" font-size="22" font-weight="bold">Decision authority gap  ← THIS QUESTION</text><text x="100" y="680" fill="#ffffff" font-size="16">Sounds like: "How should I phrase...?" / "Can I just decide on...?"</text><text x="100" y="710" fill="#888" font-size="14">Fix: Tier every decision. Sensitive phrasing = Tier 3 (ask).</text><text x="100" y="740" fill="#888" font-size="14">Number formatting = Tier 1 (decide and act).</text><rect x="80" y="790" width="940" height="120" fill="#1a1a2e" stroke="#8b5cf6" stroke-width="2" rx="10"/><text x="100" y="825" fill="#8b5cf6" font-size="20" font-weight="bold">Standard-of-done gap</text><text x="100" y="855" fill="#ffffff" font-size="16">Sounds like: "Is this good?" / "Did I do it right?"</text><text x="100" y="885" fill="#888" font-size="14">Fix: Pre-agreed rubric. Word count, format, success metric.</text><text x="550" y="980" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">The question reveals the gap. Patch the brief, not the person.</text></svg>`,
          caption: "Each kind of question maps to a specific OICSD gap. Patch the brief, not the person."
        }
      },
      {
        type: "application",
        title: "Write One Real Brief This Week",
        content: `Don't write all five SOPs this week. Write one brief. End-to-end. The point is to feel the discipline.\n\n**Step 1: Pick the task (5 min).** Choose one recurring task you do every week that takes 30+ minutes and shouldn't require you. Good candidates: weekly investor update, monthly board report, customer NPS survey send, vendor invoice reconciliation, candidate scheduling. Bad candidates: anything you've never done before (you can't brief what you haven't lived).\n\n**Step 2: Loom yourself doing it (30-45 min).** Hit record. Do it like normal. Narrate constantly — say WHY you're doing every step. "I open Stripe first because the revenue number anchors the rest. I copy-paste this format because investors expect it. I never share the runway number below 6 months because it spooks people." This narration becomes your constraints and standard.\n\n**Step 3: Write the OICSD brief (45 min).** One page. Use this exact structure:\n\n*Task name:* ____\n*Owner:* ____ (the person, not "the team")\n*Cadence:* Weekly / Monthly / Ad-hoc\n*Loom recording link:* ____\n\n**Outcome:** [Business result, behavioral, measurable]\n**Inputs:** [Every system, doc, person, tool — with access pre-staged]\n**Constraints:** [What's off-limits. What budget. What deadline.]\n**Standard of Done:** [Specific rubric. How will we know it's good?]\n**Decision Authority:**\n  - Tier 1 (decide and act): ____\n  - Tier 2 (decide and inform): ____\n  - Tier 3 (recommend and ask): ____\n\n**Step 4: Hand it off (10 min).** Slack the brief + Loom to the owner. Schedule a 20-min sync after their first cycle.\n\n**Step 5: Review after cycle 1 (20 min).** Don't redo their work. Mark up the output against the Standard of Done. Update the brief if it was ambiguous.\n\n**Commit date:** Brief written and handed off by end of next week. Reviewed after one cycle. Stop touching the task forever after cycle 3.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="36" font-weight="bold">Your One-Brief Sprint</text><text x="550" y="115" text-anchor="middle" fill="#888" font-size="18">Pick one task. Brief it. Hand it off. Two weeks.</text><rect x="120" y="180" width="860" height="100" fill="#1a1a2e" stroke="#6366f1" stroke-width="2" rx="10"/><circle cx="180" cy="230" r="35" fill="#6366f1"/><text x="180" y="240" text-anchor="middle" fill="#ffffff" font-size="20" font-weight="bold">1</text><text x="240" y="220" fill="#6366f1" font-size="20" font-weight="bold">Pick the task</text><text x="240" y="250" fill="#ffffff" font-size="15">Recurring weekly. 30+ min. Shouldn't need you.</text><text x="240" y="270" fill="#888" font-size="13">5 min</text><rect x="120" y="295" width="860" height="100" fill="#1a1a2e" stroke="#10b981" stroke-width="2" rx="10"/><circle cx="180" cy="345" r="35" fill="#10b981"/><text x="180" y="355" text-anchor="middle" fill="#ffffff" font-size="20" font-weight="bold">2</text><text x="240" y="335" fill="#10b981" font-size="20" font-weight="bold">Loom yourself doing it</text><text x="240" y="365" fill="#ffffff" font-size="15">Narrate every WHY. The narration = your constraints.</text><text x="240" y="385" fill="#888" font-size="13">30-45 min</text><rect x="120" y="410" width="860" height="100" fill="#1a1a2e" stroke="#f59e0b" stroke-width="2" rx="10"/><circle cx="180" cy="460" r="35" fill="#f59e0b"/><text x="180" y="470" text-anchor="middle" fill="#ffffff" font-size="20" font-weight="bold">3</text><text x="240" y="450" fill="#f59e0b" font-size="20" font-weight="bold">Write the OICSD brief</text><text x="240" y="480" fill="#ffffff" font-size="15">One page. Notion template. All 5 sections.</text><text x="240" y="500" fill="#888" font-size="13">45 min</text><rect x="120" y="525" width="860" height="100" fill="#1a1a2e" stroke="#8b5cf6" stroke-width="2" rx="10"/><circle cx="180" cy="575" r="35" fill="#8b5cf6"/><text x="180" y="585" text-anchor="middle" fill="#ffffff" font-size="20" font-weight="bold">4</text><text x="240" y="565" fill="#8b5cf6" font-size="20" font-weight="bold">Hand it off</text><text x="240" y="595" fill="#ffffff" font-size="15">Slack brief + Loom. Schedule 20-min review post-cycle.</text><text x="240" y="615" fill="#888" font-size="13">10 min</text><rect x="120" y="640" width="860" height="100" fill="#1a1a2e" stroke="#ec4899" stroke-width="2" rx="10"/><circle cx="180" cy="690" r="35" fill="#ec4899"/><text x="180" y="700" text-anchor="middle" fill="#ffffff" font-size="20" font-weight="bold">5</text><text x="240" y="680" fill="#ec4899" font-size="20" font-weight="bold">Review after cycle 1</text><text x="240" y="710" fill="#ffffff" font-size="15">Don't redo. Mark up against Standard of Done. Update brief.</text><text x="240" y="730" fill="#888" font-size="13">20 min</text><rect x="180" y="800" width="740" height="200" fill="#ffd700" rx="12"/><text x="550" y="850" text-anchor="middle" fill="#1a1a2e" font-size="22" font-weight="bold">The Test</text><text x="550" y="890" text-anchor="middle" fill="#1a1a2e" font-size="18">After cycle 3, you stop touching the task forever.</text><text x="550" y="925" text-anchor="middle" fill="#1a1a2e" font-size="16">No questions. No edits. No "let me just tweak this."</text><text x="550" y="960" text-anchor="middle" fill="#1a1a2e" font-size="16">If you can't let go — the brief is incomplete. Go back.</text></svg>`,
          caption: "One brief. Two weeks. Done means you stop touching the task after cycle 3 — forever."
        }
      }
    ]
  },
  {
    id: "operator-to-owner-lesson-9",
    title: "The 30/60/90 Handoff Plan",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "Where Most Handoffs Die",
        content: `Most handoffs fail at exactly week 4.\n\nWeeks 1-3, the new hire shadows. You're patient because they're new. You explain things. They take notes. Everyone feels great. The honeymoon is so smooth that you start to mentally check out — "they've got this."\n\nThen week 4 hits. The new hire is supposed to start owning the work. But you haven't actually transferred enough context for them to make calls without you. The first decision they make on their own is wrong (or feels wrong to you). You panic-grab the work back. They feel demoted. The handoff dies.\n\nThis is called "the cliff at week 4," and it's the #1 reason executive hires don't stick. It's not a hiring problem. It's a transition design problem. You front-loaded the easy part (shadowing) and skipped the hard part (graduated decision-making).\n\nThe 30/60/90 plan fixes this by treating the handoff as a 90-day, three-phase curriculum — not "they shadow until they're ready, then they own it." Each phase has explicit decision tiers, explicit review cadence, and explicit graduation criteria. You and the new hire BOTH know what week 31 looks like before week 1 starts.\n\nThis lesson gives you the week-by-week structure, the delegation curve that maps decision authority over time, and the rules for navigating the week-4 cliff. Use this for an EA, a head of operations, a new VP, or any role where you're transferring real ownership from yourself to someone else.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="36" font-weight="bold">The Week-4 Cliff</text><text x="550" y="115" text-anchor="middle" fill="#ffffff" font-size="20">Where most handoffs die</text><line x1="100" y1="800" x2="1000" y2="800" stroke="#888" stroke-width="2"/><line x1="100" y1="200" x2="100" y2="800" stroke="#888" stroke-width="2"/><text x="80" y="210" text-anchor="end" fill="#ffffff" font-size="14">100%</text><text x="80" y="500" text-anchor="end" fill="#ffffff" font-size="14">50%</text><text x="80" y="800" text-anchor="end" fill="#ffffff" font-size="14">0%</text><text x="550" y="850" text-anchor="middle" fill="#ffffff" font-size="16">Weeks since hire</text><text x="180" y="825" text-anchor="middle" fill="#888" font-size="12">1</text><text x="280" y="825" text-anchor="middle" fill="#888" font-size="12">4</text><text x="430" y="825" text-anchor="middle" fill="#888" font-size="12">8</text><text x="600" y="825" text-anchor="middle" fill="#888" font-size="12">12</text><text x="800" y="825" text-anchor="middle" fill="#888" font-size="12">26</text><text x="950" y="825" text-anchor="middle" fill="#888" font-size="12">52</text><text x="40" y="500" text-anchor="middle" fill="#ffffff" font-size="14" transform="rotate(-90 40 500)">Confidence</text><path d="M 130 280 L 250 270 L 280 750 L 320 760 L 420 770" stroke="#ef4444" stroke-width="5" fill="none"/><circle cx="280" cy="750" r="14" fill="#ef4444"/><text x="320" y="720" fill="#ef4444" font-size="18" font-weight="bold">THE CLIFF</text><text x="320" y="742" fill="#ef4444" font-size="14">Week 4: first solo decision</text><text x="320" y="762" fill="#ef4444" font-size="14">goes "wrong." Founder grabs back.</text><path d="M 130 280 L 200 290 L 280 350 L 400 400 L 550 430 L 700 380 L 850 340 L 970 300" stroke="#10b981" stroke-width="5" fill="none"/><circle cx="280" cy="350" r="14" fill="#10b981"/><text x="320" y="380" fill="#10b981" font-size="14" font-weight="bold">With 30/60/90 plan:</text><text x="320" y="402" fill="#10b981" font-size="13">authority graduates explicitly,</text><text x="320" y="422" fill="#10b981" font-size="13">no panic-grab moment</text><rect x="600" y="220" width="380" height="110" fill="#1a1a2e" stroke="#ffd700" stroke-width="2" rx="8"/><text x="790" y="250" text-anchor="middle" fill="#ffd700" font-size="18" font-weight="bold">The pattern</text><text x="615" y="280" fill="#ffffff" font-size="14">Shadow phase = easy. Honeymoon.</text><text x="615" y="302" fill="#ffffff" font-size="14">Solo phase = hard. First mistakes.</text><text x="615" y="324" fill="#ef4444" font-size="14">Founder panic-grabs. Handoff dies.</text><text x="550" y="960" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">The fix: graduate authority on a curve,</text><text x="550" y="995" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">not in a single cliff.</text></svg>`,
          caption: "Week 4 is where most handoffs die. The cliff is predictable — and avoidable with a curve, not a cliff."
        }
      },
      {
        type: "concept",
        title: "The 30/60/90 Phases",
        content: `Three phases. Three explicit goals. Three explicit review cadences. No ambiguity about what "ownership" means at each stage.\n\n**Days 1-30: SHADOW (Tier 3 — recommend and ask)**\nThe new hire watches you work. Sits in on calls. Reads every Slack thread. Reviews the OICSD briefs for every task they'll eventually own. Their job is NOT to do anything yet — it's to absorb context. They write a "context journal" daily — what they learned, what surprised them, what's still confusing.\n\nReview cadence: Daily 15-min sync (yes, daily). Friday 60-min recap. Decision authority: Tier 3 on everything (they recommend, you decide).\n\nGraduation criteria for day 30: They can answer "what would you do in this situation?" correctly 80% of the time on the tasks they'll own.\n\n**Days 31-60: DO-WITH-REVIEW (Tier 2 — decide and inform)**\nThe new hire does the work. You review every output before it ships externally. They make decisions; you red-line. Critical rule: you cannot redo their work. You can only edit it. If you find yourself rewriting from scratch, the brief was incomplete — fix the brief, not the work.\n\nReview cadence: 30-min sync three times a week. All external outputs reviewed before send. Decision authority: Tier 2 on owned tasks, Tier 3 on new territory.\n\nGraduation criteria for day 60: 90% of their output ships without your edits. The 10% you edit is style preference, not error.\n\n**Days 61-90: OWN (Tier 1 — decide and act)**\nThe new hire owns it. You see the output AFTER it ships. They escalate exceptions to you (Tier 3), but the default is Tier 1. You meet weekly for 30 minutes — focused on patterns, blockers, and what to delegate next.\n\nReview cadence: Weekly 30-min. Async updates daily via Slack. Decision authority: Tier 1 on owned tasks; they decide when to escalate.\n\nGraduation criteria for day 90: You can disappear for two weeks and nothing breaks. If that's not true, you didn't finish the handoff.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="60" text-anchor="middle" fill="#ffd700" font-size="36" font-weight="bold">The 30/60/90 Plan</text><text x="550" y="100" text-anchor="middle" fill="#888" font-size="18">Three phases. Three review cadences. Three graduation tests.</text><rect x="60" y="150" width="320" height="800" fill="#1a1a2e" stroke="#6366f1" stroke-width="3" rx="12"/><rect x="60" y="150" width="320" height="60" fill="#6366f1" rx="12"/><text x="220" y="192" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">Days 1-30: SHADOW</text><text x="220" y="245" text-anchor="middle" fill="#6366f1" font-size="18" font-weight="bold">Tier 3</text><text x="220" y="268" text-anchor="middle" fill="#ffffff" font-size="14">Recommend and ask</text><line x1="90" y1="290" x2="350" y2="290" stroke="#888" stroke-width="1"/><text x="80" y="320" fill="#ffffff" font-size="15" font-weight="bold">Their job:</text><text x="80" y="345" fill="#ffffff" font-size="14">Watch you work. Sit in</text><text x="80" y="365" fill="#ffffff" font-size="14">on every call. Read all</text><text x="80" y="385" fill="#ffffff" font-size="14">OICSD briefs. Context</text><text x="80" y="405" fill="#ffffff" font-size="14">journal daily.</text><text x="80" y="450" fill="#ffd700" font-size="15" font-weight="bold">Review cadence:</text><text x="80" y="475" fill="#ffffff" font-size="14">Daily 15-min sync</text><text x="80" y="495" fill="#ffffff" font-size="14">Friday 60-min recap</text><text x="80" y="540" fill="#10b981" font-size="15" font-weight="bold">Graduate when:</text><text x="80" y="565" fill="#ffffff" font-size="14">Can answer "what would</text><text x="80" y="585" fill="#ffffff" font-size="14">you do?" correctly 80%</text><text x="80" y="605" fill="#ffffff" font-size="14">of the time.</text><text x="80" y="700" fill="#888" font-size="12">Founder time: HIGH</text><text x="80" y="720" fill="#888" font-size="12">(but front-loaded)</text><rect x="390" y="150" width="320" height="800" fill="#1a1a2e" stroke="#f59e0b" stroke-width="3" rx="12"/><rect x="390" y="150" width="320" height="60" fill="#f59e0b" rx="12"/><text x="550" y="192" text-anchor="middle" fill="#ffffff" font-size="20" font-weight="bold">Days 31-60: DO-WITH-REVIEW</text><text x="550" y="245" text-anchor="middle" fill="#f59e0b" font-size="18" font-weight="bold">Tier 2</text><text x="550" y="268" text-anchor="middle" fill="#ffffff" font-size="14">Decide and inform</text><line x1="420" y1="290" x2="680" y2="290" stroke="#888" stroke-width="1"/><text x="410" y="320" fill="#ffffff" font-size="15" font-weight="bold">Their job:</text><text x="410" y="345" fill="#ffffff" font-size="14">Do the work. You review</text><text x="410" y="365" fill="#ffffff" font-size="14">every external output</text><text x="410" y="385" fill="#ffffff" font-size="14">before it ships. EDIT</text><text x="410" y="405" fill="#ffffff" font-size="14">only — never redo.</text><text x="410" y="450" fill="#ffd700" font-size="15" font-weight="bold">Review cadence:</text><text x="410" y="475" fill="#ffffff" font-size="14">3x/wk 30-min sync</text><text x="410" y="495" fill="#ffffff" font-size="14">All externals reviewed</text><text x="410" y="540" fill="#10b981" font-size="15" font-weight="bold">Graduate when:</text><text x="410" y="565" fill="#ffffff" font-size="14">90% of output ships</text><text x="410" y="585" fill="#ffffff" font-size="14">without edits. Other 10%</text><text x="410" y="605" fill="#ffffff" font-size="14">is style preference.</text><text x="410" y="700" fill="#888" font-size="12">Founder time: MEDIUM</text><text x="410" y="720" fill="#888" font-size="12">(the danger zone)</text><rect x="720" y="150" width="320" height="800" fill="#1a1a2e" stroke="#10b981" stroke-width="3" rx="12"/><rect x="720" y="150" width="320" height="60" fill="#10b981" rx="12"/><text x="880" y="192" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">Days 61-90: OWN</text><text x="880" y="245" text-anchor="middle" fill="#10b981" font-size="18" font-weight="bold">Tier 1</text><text x="880" y="268" text-anchor="middle" fill="#ffffff" font-size="14">Decide and act</text><line x1="750" y1="290" x2="1010" y2="290" stroke="#888" stroke-width="1"/><text x="740" y="320" fill="#ffffff" font-size="15" font-weight="bold">Their job:</text><text x="740" y="345" fill="#ffffff" font-size="14">Own it. You see output</text><text x="740" y="365" fill="#ffffff" font-size="14">AFTER it ships. They</text><text x="740" y="385" fill="#ffffff" font-size="14">escalate exceptions.</text><text x="740" y="450" fill="#ffd700" font-size="15" font-weight="bold">Review cadence:</text><text x="740" y="475" fill="#ffffff" font-size="14">Weekly 30-min</text><text x="740" y="495" fill="#ffffff" font-size="14">Daily Slack async</text><text x="740" y="540" fill="#10b981" font-size="15" font-weight="bold">Graduate when:</text><text x="740" y="565" fill="#ffffff" font-size="14">You can disappear for 2</text><text x="740" y="585" fill="#ffffff" font-size="14">weeks and nothing breaks.</text><text x="740" y="700" fill="#888" font-size="12">Founder time: LOW</text><text x="740" y="720" fill="#888" font-size="12">(the goal)</text><text x="550" y="1010" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">If day 90 fails the test, you didn't finish the handoff.</text></svg>`,
          caption: "Three phases — Shadow, Do-With-Review, Own — each with explicit decision tiers and graduation criteria."
        }
      },
      {
        type: "example",
        title: "Surviving the Week-4 Cliff",
        content: `Week 4 is when the new hire makes their first solo decision and you find out you disagree. This is the make-or-break moment of the entire handoff. How you handle this specific moment determines whether the hire works.\n\n**The scenario:** Your new EA declines a meeting invite from a former colleague who wanted to "pick your brain." You would have taken it (relationship investment). You see the calendar Friday morning and feel a flash of irritation.\n\n**The wrong move (kills the handoff):** You email the person yourself, apologize, and rebook the meeting. You then Slack the EA: "Hey, going forward, please don't decline meetings from people I've worked with for 5+ years without checking with me first." You feel responsible. You think you've coached. You haven't. You've just signaled: every decision is provisional. You'll override anything. The EA stops deciding.\n\n**The right move (saves the handoff):** Three steps.\n\n*Step 1 — Pause 24 hours.* Don't react in the moment. The decision is already made. Reversing it now costs more than living with it.\n\n*Step 2 — Ask, don't tell.* Monday 1:1, you say: "Walk me through how you thought about declining the meeting with Mike." Listen. Maybe they had a reason you didn't see (Mike had been emailed twice already, he's notorious for "quick brain picks" turning into hour-long requests). Maybe they didn't know context. Either way — you learn what was in their head, not just what was on the calendar.\n\n*Step 3 — Update the brief, not the person.* If the EA's framework was reasonable but missed context, add it to the brief: "Heuristic: When the requester is a former direct report, mentor, or 5+ year relationship, default-tier moves to T3 (recommend and ask) for the first 6 months. After that, T2 default." Now the brief teaches itself. Next time, the EA decides correctly without you intervening.\n\n**Why this works:** You preserved their authority while improving the rules. You treated the miss as a brief failure, not a person failure. You modeled how to disagree without overriding. The EA's confidence grows. By week 12, they make better calls than you would have, because they have more data than you do.\n\n**The rule:** Until you've corrected the brief three times for the same kind of decision and they still get it wrong, the problem is the brief.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="60" text-anchor="middle" fill="#ffd700" font-size="34" font-weight="bold">The Week-4 Decision</text><text x="550" y="100" text-anchor="middle" fill="#ffffff" font-size="18">Scenario: EA declines a meeting you'd have taken</text><rect x="60" y="140" width="490" height="800" fill="#1a1a2e" stroke="#ef4444" stroke-width="3" rx="12"/><rect x="60" y="140" width="490" height="60" fill="#ef4444" rx="12"/><text x="305" y="182" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">WRONG: Override</text><text x="80" y="240" fill="#ef4444" font-size="18" font-weight="bold">What you do:</text><text x="80" y="270" fill="#ffffff" font-size="14">1. Email the person yourself</text><text x="80" y="295" fill="#ffffff" font-size="14">2. Apologize. Rebook.</text><text x="80" y="320" fill="#ffffff" font-size="14">3. Slack EA: "Going forward,</text><text x="80" y="345" fill="#ffffff" font-size="14">   check with me first."</text><text x="80" y="395" fill="#ef4444" font-size="18" font-weight="bold">What you think:</text><text x="80" y="425" fill="#ffffff" font-size="14">"I'm being responsible."</text><text x="80" y="450" fill="#ffffff" font-size="14">"I'm coaching them."</text><text x="80" y="495" fill="#ef4444" font-size="18" font-weight="bold">What actually happens:</text><text x="80" y="525" fill="#ffffff" font-size="14">EA hears: every decision is</text><text x="80" y="550" fill="#ffffff" font-size="14">provisional. You'll override.</text><text x="80" y="600" fill="#ef4444" font-size="18" font-weight="bold">The result:</text><text x="80" y="630" fill="#ffffff" font-size="14">EA stops deciding. Every</text><text x="80" y="655" fill="#ffffff" font-size="14">judgment call comes to you.</text><text x="80" y="680" fill="#ffffff" font-size="14">You become the bottleneck</text><text x="80" y="705" fill="#ffffff" font-size="14">you hired them to remove.</text><text x="80" y="800" fill="#ef4444" font-size="20" font-weight="bold">Handoff dies week 6.</text><text x="80" y="830" fill="#888" font-size="14">EA fires themselves by month 4.</text><text x="80" y="860" fill="#888" font-size="14">You hire a replacement.</text><text x="80" y="890" fill="#888" font-size="14">You repeat the mistake.</text><rect x="560" y="140" width="490" height="800" fill="#1a1a2e" stroke="#10b981" stroke-width="3" rx="12"/><rect x="560" y="140" width="490" height="60" fill="#10b981" rx="12"/><text x="805" y="182" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">RIGHT: Update the brief</text><text x="580" y="240" fill="#10b981" font-size="18" font-weight="bold">Step 1: Pause 24 hours</text><text x="580" y="270" fill="#ffffff" font-size="14">Decision is made. Don't reverse.</text><text x="580" y="295" fill="#ffffff" font-size="14">Cost of reversal &gt; cost of miss.</text><text x="580" y="345" fill="#10b981" font-size="18" font-weight="bold">Step 2: Ask, don't tell</text><text x="580" y="375" fill="#ffffff" font-size="14">Monday 1:1: "Walk me through</text><text x="580" y="400" fill="#ffffff" font-size="14">how you thought about it."</text><text x="580" y="425" fill="#ffffff" font-size="14">Listen. Maybe they had context</text><text x="580" y="450" fill="#ffffff" font-size="14">you didn't see.</text><text x="580" y="500" fill="#10b981" font-size="18" font-weight="bold">Step 3: Update the brief</text><text x="580" y="530" fill="#ffffff" font-size="14">Add the heuristic to OICSD:</text><text x="580" y="555" fill="#ffd700" font-size="13">"Former direct reports + 5yr+</text><text x="580" y="575" fill="#ffd700" font-size="13">relationships = T3 default for</text><text x="580" y="595" fill="#ffd700" font-size="13">first 6 months."</text><text x="580" y="650" fill="#10b981" font-size="18" font-weight="bold">The result:</text><text x="580" y="680" fill="#ffffff" font-size="14">You preserved authority.</text><text x="580" y="705" fill="#ffffff" font-size="14">You improved the rules.</text><text x="580" y="730" fill="#ffffff" font-size="14">Brief teaches itself next time.</text><text x="580" y="800" fill="#10b981" font-size="20" font-weight="bold">Handoff survives.</text><text x="580" y="830" fill="#888" font-size="14">By week 12, EA makes better</text><text x="580" y="855" fill="#888" font-size="14">calls than you would — they</text><text x="580" y="880" fill="#888" font-size="14">have more data than you do.</text><text x="550" y="990" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">Rule: Fix the brief, not the person.</text></svg>`,
          caption: "Two paths from the same week-4 miss. One kills the handoff; the other makes it stronger."
        }
      },
      {
        type: "quiz",
        title: "Quick Check",
        question: "Your new head of operations is on day 45 of a 30/60/90 plan. They just shipped a vendor renewal that you would have negotiated differently — they took a 3-year commitment for a 7% discount, you'd have taken a 1-year commitment to preserve flexibility. What's the correct move?",
        options: [
          { text: "Call the vendor and renegotiate the contract. The 3-year commitment is a strategic error and you can't let it stand.", correct: false },
          { text: "Slack them immediately: 'Going forward, anything over 12 months needs my sign-off.' Set the rule firmly so it doesn't happen again.", correct: false },
          { text: "Pause 24 hours. In your next 1:1, ask how they thought about the trade-off. If their framework was reasonable, add the flexibility heuristic to the OICSD brief. Don't reverse the deal.", correct: true },
          { text: "Take the vendor renewal back into your portfolio. It's clearly above their authority level for now.", correct: false }
        ],
        explanation: "This is the week-4 cliff in a different costume — day 45 instead of week 4, vendor renewal instead of meeting decline, but the same dynamic. The right move is to pause, ask how they thought about it, and update the brief. The deal isn't catastrophic (it's a flexibility trade-off, not a fraud). Reversing it costs trust and signals you'll override; firm rules without conversation kills authority; pulling the work back undoes the entire handoff. Adding 'Default to ≤12 months on new vendors unless discount exceeds 15%' to the brief teaches the rule without removing the authority. Three months from now, they'll make decisions you wouldn't have thought of — because they have more context than you do.",
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="34" font-weight="bold">The Handoff Decision Tree</text><text x="550" y="115" text-anchor="middle" fill="#888" font-size="18">When their decision differs from yours</text><rect x="350" y="160" width="400" height="80" fill="#6366f1" rx="10"/><text x="550" y="195" text-anchor="middle" fill="#ffffff" font-size="20" font-weight="bold">Their decision differs.</text><text x="550" y="222" text-anchor="middle" fill="#ffffff" font-size="16">First question: is it catastrophic?</text><line x1="550" y1="240" x2="280" y2="310" stroke="#888" stroke-width="2"/><line x1="550" y1="240" x2="820" y2="310" stroke="#888" stroke-width="2"/><text x="380" y="290" fill="#10b981" font-size="16">NO (reversible)</text><text x="700" y="290" fill="#ef4444" font-size="16">YES (catastrophic)</text><rect x="80" y="320" width="400" height="220" fill="#1a1a2e" stroke="#10b981" stroke-width="3" rx="10"/><text x="280" y="355" text-anchor="middle" fill="#10b981" font-size="20" font-weight="bold">95% of cases</text><text x="100" y="395" fill="#ffffff" font-size="14">1. Pause 24 hours.</text><text x="100" y="425" fill="#ffffff" font-size="14">2. Ask in 1:1 how they thought</text><text x="100" y="445" fill="#ffffff" font-size="14">   about the trade-off.</text><text x="100" y="475" fill="#ffffff" font-size="14">3. If reasonable, update the</text><text x="100" y="495" fill="#ffffff" font-size="14">   brief with a heuristic.</text><text x="100" y="525" fill="#ffffff" font-size="14">4. Don't reverse the decision.</text><rect x="620" y="320" width="400" height="220" fill="#1a1a2e" stroke="#ef4444" stroke-width="3" rx="10"/><text x="820" y="355" text-anchor="middle" fill="#ef4444" font-size="20" font-weight="bold">5% of cases</text><text x="640" y="395" fill="#ffffff" font-size="14">Examples: legal exposure,</text><text x="640" y="415" fill="#ffffff" font-size="14">key customer offended, signed</text><text x="640" y="435" fill="#ffffff" font-size="14">deal you can't undo cleanly.</text><text x="640" y="475" fill="#ffffff" font-size="14">1. Reverse if you can.</text><text x="640" y="495" fill="#ffffff" font-size="14">2. Same 1:1 conversation.</text><text x="640" y="515" fill="#ffffff" font-size="14">3. Add to brief AND tier-up.</text><rect x="200" y="600" width="700" height="220" fill="#1a1a2e" stroke="#ffd700" stroke-width="3" rx="12"/><text x="550" y="640" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">The vendor renewal case</text><text x="220" y="680" fill="#ffffff" font-size="16">3-year commitment vs 1-year: a flexibility trade-off, not catastrophic.</text><text x="220" y="710" fill="#ffffff" font-size="16">Reasonable framework (lower price), missed nuance (you value optionality).</text><text x="220" y="745" fill="#10b981" font-size="16" font-weight="bold">Correct path: pause, ask, update brief.</text><text x="220" y="775" fill="#10b981" font-size="14">Add: "Default ≤12 months unless discount &gt; 15% or strategic vendor."</text><text x="550" y="900" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">If you override every disagreement, you didn't delegate.</text><text x="550" y="935" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">You just rented their hands.</text></svg>`,
          caption: "Catastrophic vs. reasonable misses get different responses — but neither is 'pull the work back.'"
        }
      },
      {
        type: "application",
        title: "Build Your 30/60/90 — Before Day One",
        content: `Write the 30/60/90 plan BEFORE the new hire starts. Hand it to them on day one. Walk through it together. Adjust together. Then commit.\n\n**Step 1: Pick the role (or new hire) and the scope (15 min).**\nWhich role? What set of responsibilities are you handing off? Be specific. Not "head of ops" but "head of ops: owns supply chain, vendor management, office operations, IT vendor relationships, recruiting ops. Does NOT own finance, product, or customer success."\n\n**Step 2: Draft the day-90 picture first (30 min).**\nWrite a paragraph describing what week 13 looks like when this works. "By day 90, [person] runs the weekly ops standup, owns the vendor budget end-to-end, has rewritten the vendor evaluation SOP, runs candidate scheduling without my involvement, and escalates only what's net-new. I spend 30 min/week with them, focused on what's NEXT, not what just happened." If you can't write that paragraph, you don't actually know what success looks like — solve that before hiring.\n\n**Step 3: Reverse-engineer the milestones (30 min).**\nGiven day-90 picture, what does day 60 look like? Day 30? Use this template:\n\n*Days 1-30 (Shadow):*\n- Decision authority: Tier 3 on all owned scope\n- Key activities: [list 5-8]\n- Graduation criteria: [specific test]\n- Review cadence: Daily 15-min + Friday 60-min\n\n*Days 31-60 (Do-with-review):*\n- Decision authority: Tier 2 on [specific list], Tier 3 on [specific list]\n- Key activities: [list 5-8]\n- Graduation criteria: 90% of output ships without your edits\n- Review cadence: 3x/wk 30-min\n\n*Days 61-90 (Own):*\n- Decision authority: Tier 1 on all owned scope\n- Key activities: own everything in the day-90 paragraph\n- Graduation criteria: you take 2 weeks off and nothing breaks\n- Review cadence: Weekly 30-min\n\n**Step 4: Set the week-4 conversation in advance.**\nOn the calendar, week 4 Friday: "Mid-shadow checkpoint." This is where you preempt the cliff by explicitly discussing how decision-making will shift in week 5. Walk through 2-3 hypothetical decisions and how they'd approach them.\n\n**Step 5: Share it on day one.**\nSend the plan before they start. First-day agenda: walk through 30/60/90 together, edit it together, both sign it. From then on, the plan is the source of truth. When in doubt — what does week 47 of the plan say?\n\n**Commit date:** 30/60/90 plan written before any new hire's start date. No exceptions, even if you have to delay the start date by a week to write it.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="60" text-anchor="middle" fill="#ffd700" font-size="36" font-weight="bold">Write the Plan First</text><text x="550" y="100" text-anchor="middle" fill="#888" font-size="18">Before day one. Reverse-engineered from day 90.</text><rect x="80" y="150" width="940" height="110" fill="#1a1a2e" stroke="#6366f1" stroke-width="2" rx="10"/><circle cx="140" cy="205" r="35" fill="#6366f1"/><text x="140" y="215" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">1</text><text x="200" y="190" fill="#6366f1" font-size="20" font-weight="bold">Pick the role + scope</text><text x="200" y="220" fill="#ffffff" font-size="15">Specific list of owned responsibilities + explicit "NOT owned"</text><text x="200" y="245" fill="#888" font-size="13">15 min</text><rect x="80" y="275" width="940" height="110" fill="#1a1a2e" stroke="#10b981" stroke-width="2" rx="10"/><circle cx="140" cy="330" r="35" fill="#10b981"/><text x="140" y="340" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">2</text><text x="200" y="315" fill="#10b981" font-size="20" font-weight="bold">Draft day-90 picture FIRST</text><text x="200" y="345" fill="#ffffff" font-size="15">A paragraph describing what week 13 looks like when this works.</text><text x="200" y="370" fill="#888" font-size="13">30 min. If you can't write it, you don't know what success is.</text><rect x="80" y="400" width="940" height="110" fill="#1a1a2e" stroke="#f59e0b" stroke-width="2" rx="10"/><circle cx="140" cy="455" r="35" fill="#f59e0b"/><text x="140" y="465" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">3</text><text x="200" y="440" fill="#f59e0b" font-size="20" font-weight="bold">Reverse-engineer milestones</text><text x="200" y="470" fill="#ffffff" font-size="15">Day 60 → Day 30 → Day 1. Tiers + activities + graduation criteria.</text><text x="200" y="495" fill="#888" font-size="13">30 min</text><rect x="80" y="525" width="940" height="110" fill="#1a1a2e" stroke="#8b5cf6" stroke-width="2" rx="10"/><circle cx="140" cy="580" r="35" fill="#8b5cf6"/><text x="140" y="590" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">4</text><text x="200" y="565" fill="#8b5cf6" font-size="20" font-weight="bold">Calendar the week-4 checkpoint</text><text x="200" y="595" fill="#ffffff" font-size="15">Preempt the cliff. Walk through 2-3 hypotheticals together.</text><text x="200" y="620" fill="#888" font-size="13">5 min to schedule</text><rect x="80" y="650" width="940" height="110" fill="#1a1a2e" stroke="#ec4899" stroke-width="2" rx="10"/><circle cx="140" cy="705" r="35" fill="#ec4899"/><text x="140" y="715" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">5</text><text x="200" y="690" fill="#ec4899" font-size="20" font-weight="bold">Share on day one</text><text x="200" y="720" fill="#ffffff" font-size="15">Walk through together. Edit together. Both sign. Source of truth.</text><text x="200" y="745" fill="#888" font-size="13">60 min on day 1</text><rect x="100" y="800" width="900" height="220" fill="#ffd700" rx="12"/><text x="550" y="850" text-anchor="middle" fill="#1a1a2e" font-size="26" font-weight="bold">The commitment</text><text x="550" y="890" text-anchor="middle" fill="#1a1a2e" font-size="18">30/60/90 plan written BEFORE the new hire's start date.</text><text x="550" y="920" text-anchor="middle" fill="#1a1a2e" font-size="18">No exceptions. Delay the start by a week if you need to.</text><text x="550" y="970" text-anchor="middle" fill="#1a1a2e" font-size="17">A hire without a 30/60/90 is a hire that will boomerang back to you</text><text x="550" y="995" text-anchor="middle" fill="#1a1a2e" font-size="17">— and you'll blame the person, not the missing plan.</text></svg>`,
          caption: "Write the 30/60/90 before day one. Reverse-engineer from the day-90 picture. No exceptions."
        }
      }
    ]
  },
{
    id: "operator-to-owner-lesson-10",
    title: "Trust and Verify — Managing Without Micromanaging",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "The Two Failure Modes",
        content: `You've delegated. Now what? Most owners fail at managing delegated work in one of two opposite directions — and both kill the handoff.

**Failure Mode 1: Dump-and-Disappear.** You hand off the work, breathe a sigh of relief, and don't look at it again for six weeks. Then you discover the salesperson hasn't sent quotes in 10 days, the new ops manager is overwhelmed and hiding it, or revenue cratered while you were "trusting the team." You confuse delegation with abandonment. The person you handed work to is drowning, and they don't know how to ask for help — or they're hoping you won't notice.

**Failure Mode 2: Hover-and-Rescue.** You can't let go. You read every email in the shared inbox. You jump into Slack threads uninvited. You correct the email tone of someone who's been doing this job longer than you have. You ask "how's it going?" four times a day. The person you delegated to feels watched, distrusted, and slowly stops bringing their own judgment to the work — because what's the point? You're going to override them anyway.

**The answer is neither, and not the middle either.** It's a specific operating system: a weekly rhythm, a dashboard with red flags, and a discipline of "I trust this report" rather than "I trust this person to figure it out alone."

This lesson gives you the cadence and instruments to know what's happening without being in the work. Done right, your team has more autonomy and you have more visibility. Done wrong, you'll oscillate between panic and disengagement for years.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="80" font-family="Arial" font-size="38" font-weight="bold" fill="#ffd700" text-anchor="middle">Two Failure Modes of Delegation</text>
            <text x="550" y="125" font-family="Arial" font-size="20" fill="#888" text-anchor="middle">Both kill the handoff. Aim for neither.</text>
            <rect x="80" y="180" width="430" height="780" rx="20" fill="#ef4444" opacity="0.18" stroke="#ef4444" stroke-width="3"/>
            <text x="295" y="240" font-family="Arial" font-size="26" font-weight="bold" fill="#ef4444" text-anchor="middle">DUMP &amp; DISAPPEAR</text>
            <text x="295" y="275" font-family="Arial" font-size="16" fill="#ffffff" text-anchor="middle">"They've got it. I'm out."</text>
            <text x="120" y="340" font-family="Arial" font-size="18" font-weight="bold" fill="#ffd700">Behaviors:</text>
            <text x="120" y="375" font-family="Arial" font-size="15" fill="#ffffff">- Hand off, never check in</text>
            <text x="120" y="405" font-family="Arial" font-size="15" fill="#ffffff">- No metrics, no dashboard</text>
            <text x="120" y="435" font-family="Arial" font-size="15" fill="#ffffff">- Skip 1:1s when busy</text>
            <text x="120" y="465" font-family="Arial" font-size="15" fill="#ffffff">- Assume silence = success</text>
            <text x="120" y="530" font-family="Arial" font-size="18" font-weight="bold" fill="#ffd700">Result:</text>
            <text x="120" y="565" font-family="Arial" font-size="15" fill="#ffffff">- Problems compound silently</text>
            <text x="120" y="595" font-family="Arial" font-size="15" fill="#ffffff">- Team feels unsupported</text>
            <text x="120" y="625" font-family="Arial" font-size="15" fill="#ffffff">- You discover the fire too late</text>
            <text x="120" y="690" font-family="Arial" font-size="18" font-weight="bold" fill="#ffd700">Time to detection:</text>
            <text x="120" y="730" font-family="Arial" font-size="42" font-weight="bold" fill="#ef4444">6-12 weeks</text>
            <text x="120" y="810" font-family="Arial" font-size="18" font-weight="bold" fill="#ffd700">Cost:</text>
            <text x="120" y="850" font-family="Arial" font-size="15" fill="#ffffff">A rescue mission, lost</text>
            <text x="120" y="875" font-family="Arial" font-size="15" fill="#ffffff">revenue, and the trust</text>
            <text x="120" y="900" font-family="Arial" font-size="15" fill="#ffffff">you tried to build.</text>
            <rect x="590" y="180" width="430" height="780" rx="20" fill="#f59e0b" opacity="0.18" stroke="#f59e0b" stroke-width="3"/>
            <text x="805" y="240" font-family="Arial" font-size="26" font-weight="bold" fill="#f59e0b" text-anchor="middle">HOVER &amp; RESCUE</text>
            <text x="805" y="275" font-family="Arial" font-size="16" fill="#ffffff" text-anchor="middle">"Let me just take a quick look."</text>
            <text x="630" y="340" font-family="Arial" font-size="18" font-weight="bold" fill="#ffd700">Behaviors:</text>
            <text x="630" y="375" font-family="Arial" font-size="15" fill="#ffffff">- Read every email/Slack</text>
            <text x="630" y="405" font-family="Arial" font-size="15" fill="#ffffff">- Jump into threads uninvited</text>
            <text x="630" y="435" font-family="Arial" font-size="15" fill="#ffffff">- Override small decisions</text>
            <text x="630" y="465" font-family="Arial" font-size="15" fill="#ffffff">- "Quick" status pings hourly</text>
            <text x="630" y="530" font-family="Arial" font-size="18" font-weight="bold" fill="#ffd700">Result:</text>
            <text x="630" y="565" font-family="Arial" font-size="15" fill="#ffffff">- Team waits for your call</text>
            <text x="630" y="595" font-family="Arial" font-size="15" fill="#ffffff">- Judgment never develops</text>
            <text x="630" y="625" font-family="Arial" font-size="15" fill="#ffffff">- Best people quit first</text>
            <text x="630" y="690" font-family="Arial" font-size="18" font-weight="bold" fill="#ffd700">Time to detection:</text>
            <text x="630" y="730" font-family="Arial" font-size="42" font-weight="bold" fill="#f59e0b">Immediate</text>
            <text x="630" y="810" font-family="Arial" font-size="18" font-weight="bold" fill="#ffd700">Cost:</text>
            <text x="630" y="850" font-family="Arial" font-size="15" fill="#ffffff">A team of order-takers</text>
            <text x="630" y="875" font-family="Arial" font-size="15" fill="#ffffff">and you, still buried in</text>
            <text x="630" y="900" font-family="Arial" font-size="15" fill="#ffffff">the work you delegated.</text>
            <text x="550" y="1010" font-family="Arial" font-size="22" font-weight="bold" fill="#10b981" text-anchor="middle">The answer is a third mode: Trust + Verify</text>
            <text x="550" y="1045" font-family="Arial" font-size="17" fill="#888" text-anchor="middle">Cadence. Dashboards. Surfacing red flags without reading every email.</text>
          </svg>`,
          caption: "Most owners oscillate between these two modes. Neither works."
        }
      },
      {
        type: "concept",
        title: "The Trust + Verify Operating System",
        content: `Trust and verify is not a slogan. It's three concrete instruments running on a weekly clock.

**Instrument 1: The Weekly 1:1 (60 minutes, recurring, never canceled).**
Same time, every week. Your direct report owns the agenda — they bring what they want to discuss. You bring questions, not orders. The structure most operators use:
- 10 min: Their priorities for the week ahead
- 15 min: Open issues, blockers, decisions they need from you
- 15 min: Their numbers (what's tracking, what's off)
- 10 min: Career, energy, what's frustrating
- 10 min: Anything else, plus your feedback

The 1:1 is not a status meeting. Status lives in the dashboard. The 1:1 is for the things a dashboard can't show: judgment calls, interpersonal friction, where they're confused, what they're worried about. If you find yourself asking "what did you do this week?" — the dashboard is broken.

**Instrument 2: The Dashboard That Surfaces Red Flags.**
Pick 5-9 numbers per function. For sales: pipeline created this week, closed-won, win rate, average deal size, deals stuck >30 days, NPS. For ops: orders fulfilled, on-time rate, defect rate, complaint count, cash days. Each number has a green/yellow/red threshold defined in advance. You read the dashboard Monday morning in 10 minutes. If everything is green, you don't ask about it in the 1:1. If something is red, that's the first agenda item.

**Instrument 3: The "I Trust This Report" Test.**
Before you commit to managing only by dashboard, ask: do I trust the source data? If the salesperson enters their own pipeline number with no verification — no, you don't. Tie at least one number to a system you can't fudge (Stripe, the ERP, the support tool). One verified number beats five self-reported ones.

**The cadence:** Monday, you read the dashboard. Wednesday or Thursday, you hold the 1:1. Friday, you write a 5-line note to your team summarizing what you learned. That's it. Total time per direct report per week: about 90 minutes. Compare that to 30 hours of doing their job yourself.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="70" font-family="Arial" font-size="36" font-weight="bold" fill="#ffd700" text-anchor="middle">Trust + Verify Operating System</text>
            <text x="550" y="115" font-family="Arial" font-size="18" fill="#888" text-anchor="middle">90 minutes per direct report per week</text>
            <rect x="60" y="160" width="320" height="500" rx="15" fill="#6366f1" opacity="0.2" stroke="#6366f1" stroke-width="3"/>
            <circle cx="220" cy="220" r="35" fill="#6366f1"/>
            <text x="220" y="232" font-family="Arial" font-size="32" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
            <text x="220" y="290" font-family="Arial" font-size="22" font-weight="bold" fill="#ffd700" text-anchor="middle">WEEKLY 1:1</text>
            <text x="220" y="320" font-family="Arial" font-size="16" fill="#ffffff" text-anchor="middle">60 min, same time, never skip</text>
            <text x="80" y="370" font-family="Arial" font-size="14" fill="#ffffff">10' Priorities ahead</text>
            <text x="80" y="400" font-family="Arial" font-size="14" fill="#ffffff">15' Issues + decisions</text>
            <text x="80" y="430" font-family="Arial" font-size="14" fill="#ffffff">15' Their numbers</text>
            <text x="80" y="460" font-family="Arial" font-size="14" fill="#ffffff">10' Career + energy</text>
            <text x="80" y="490" font-family="Arial" font-size="14" fill="#ffffff">10' Feedback + open</text>
            <text x="80" y="555" font-family="Arial" font-size="13" font-style="italic" fill="#0ea5e9">They own the agenda.</text>
            <text x="80" y="580" font-family="Arial" font-size="13" font-style="italic" fill="#0ea5e9">You bring questions,</text>
            <text x="80" y="605" font-family="Arial" font-size="13" font-style="italic" fill="#0ea5e9">not orders.</text>
            <rect x="390" y="160" width="320" height="500" rx="15" fill="#10b981" opacity="0.2" stroke="#10b981" stroke-width="3"/>
            <circle cx="550" cy="220" r="35" fill="#10b981"/>
            <text x="550" y="232" font-family="Arial" font-size="32" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
            <text x="550" y="290" font-family="Arial" font-size="22" font-weight="bold" fill="#ffd700" text-anchor="middle">DASHBOARD</text>
            <text x="550" y="320" font-family="Arial" font-size="16" fill="#ffffff" text-anchor="middle">5-9 numbers per function</text>
            <circle cx="420" cy="365" r="10" fill="#10b981"/>
            <text x="440" y="370" font-family="Arial" font-size="14" fill="#ffffff">Green = on track</text>
            <circle cx="420" cy="400" r="10" fill="#f59e0b"/>
            <text x="440" y="405" font-family="Arial" font-size="14" fill="#ffffff">Yellow = watch</text>
            <circle cx="420" cy="435" r="10" fill="#ef4444"/>
            <text x="440" y="440" font-family="Arial" font-size="14" fill="#ffffff">Red = act now</text>
            <text x="410" y="490" font-family="Arial" font-size="14" fill="#ffffff">Thresholds set in advance.</text>
            <text x="410" y="515" font-family="Arial" font-size="14" fill="#ffffff">Read Monday AM, 10 min.</text>
            <text x="410" y="555" font-family="Arial" font-size="13" font-style="italic" fill="#0ea5e9">If green, don't ask.</text>
            <text x="410" y="580" font-family="Arial" font-size="13" font-style="italic" fill="#0ea5e9">If red, it's agenda</text>
            <text x="410" y="605" font-family="Arial" font-size="13" font-style="italic" fill="#0ea5e9">item #1.</text>
            <rect x="720" y="160" width="320" height="500" rx="15" fill="#ec4899" opacity="0.2" stroke="#ec4899" stroke-width="3"/>
            <circle cx="880" cy="220" r="35" fill="#ec4899"/>
            <text x="880" y="232" font-family="Arial" font-size="32" font-weight="bold" fill="#ffffff" text-anchor="middle">3</text>
            <text x="880" y="290" font-family="Arial" font-size="22" font-weight="bold" fill="#ffd700" text-anchor="middle">TRUST TEST</text>
            <text x="880" y="320" font-family="Arial" font-size="16" fill="#ffffff" text-anchor="middle">"Do I trust this number?"</text>
            <text x="740" y="370" font-family="Arial" font-size="14" fill="#ffffff">Self-reported?</text>
            <text x="740" y="395" font-family="Arial" font-size="14" fill="#ef4444">- Probably gamed.</text>
            <text x="740" y="435" font-family="Arial" font-size="14" fill="#ffffff">Stripe / ERP / support?</text>
            <text x="740" y="460" font-family="Arial" font-size="14" fill="#10b981">+ Hard to fudge.</text>
            <text x="740" y="510" font-family="Arial" font-size="14" fill="#ffffff">One verified number</text>
            <text x="740" y="535" font-family="Arial" font-size="14" fill="#ffffff">&gt; five self-reported.</text>
            <text x="740" y="580" font-family="Arial" font-size="13" font-style="italic" fill="#0ea5e9">If you can't trust the</text>
            <text x="740" y="605" font-family="Arial" font-size="13" font-style="italic" fill="#0ea5e9">data, fix that first.</text>
            <rect x="80" y="710" width="940" height="280" rx="15" fill="#8b5cf6" opacity="0.18" stroke="#8b5cf6" stroke-width="3"/>
            <text x="550" y="755" font-family="Arial" font-size="24" font-weight="bold" fill="#ffd700" text-anchor="middle">The Weekly Cadence</text>
            <line x1="150" y1="850" x2="950" y2="850" stroke="#888" stroke-width="2"/>
            <circle cx="220" cy="850" r="22" fill="#10b981"/>
            <text x="220" y="858" font-family="Arial" font-size="16" font-weight="bold" fill="#ffffff" text-anchor="middle">M</text>
            <text x="220" y="900" font-family="Arial" font-size="14" fill="#ffffff" text-anchor="middle">Read dashboard</text>
            <text x="220" y="920" font-family="Arial" font-size="14" fill="#888" text-anchor="middle">10 min</text>
            <circle cx="450" cy="850" r="22" fill="#6366f1"/>
            <text x="450" y="858" font-family="Arial" font-size="16" font-weight="bold" fill="#ffffff" text-anchor="middle">W</text>
            <text x="450" y="900" font-family="Arial" font-size="14" fill="#ffffff" text-anchor="middle">Hold 1:1</text>
            <text x="450" y="920" font-family="Arial" font-size="14" fill="#888" text-anchor="middle">60 min</text>
            <circle cx="680" cy="850" r="22" fill="#f59e0b"/>
            <text x="680" y="858" font-family="Arial" font-size="16" font-weight="bold" fill="#ffffff" text-anchor="middle">F</text>
            <text x="680" y="900" font-family="Arial" font-size="14" fill="#ffffff" text-anchor="middle">5-line team note</text>
            <text x="680" y="920" font-family="Arial" font-size="14" fill="#888" text-anchor="middle">15 min</text>
            <circle cx="880" cy="850" r="22" fill="#ec4899"/>
            <text x="880" y="858" font-family="Arial" font-size="16" font-weight="bold" fill="#ffffff" text-anchor="middle">S</text>
            <text x="880" y="900" font-family="Arial" font-size="14" fill="#ffffff" text-anchor="middle">Off / reflect</text>
            <text x="880" y="920" font-family="Arial" font-size="14" fill="#888" text-anchor="middle">-</text>
            <text x="550" y="975" font-family="Arial" font-size="16" font-style="italic" fill="#ffd700" text-anchor="middle">90 min / week vs 30 hrs doing their job.</text>
            <text x="550" y="1050" font-family="Arial" font-size="16" fill="#888" text-anchor="middle">Trust the system. Verify with numbers. Skip neither.</text>
          </svg>`,
          caption: "Three instruments, one rhythm. The whole system runs on ~90 min/week."
        }
      },
      {
        type: "example",
        title: "Maya's Sales Dashboard (and the Friday She Almost Failed)",
        content: `Maya runs a $12M B2B software company. She promoted Devin to Head of Sales nine months ago and was determined not to hover. For the first six weeks, she did it right: read the dashboard Monday, held a 60-minute 1:1 Wednesday, sent a Friday summary. Devin's numbers were green. Maya felt liberated.

**Then she got sloppy.**

She skipped a 1:1 to attend a customer trip. The next week she canceled to get her inbox to zero. Week three, she did the 1:1 but didn't open the dashboard first. Week four, she stopped sending the Friday note. By week seven she'd downgraded the 1:1 to 30 minutes and was doing it via Slack huddle.

**The dashboard quietly turned yellow.** Pipeline created dropped from $850K/week to $510K. Devin had hired two new AEs and they were ramping slowly. The closed-won number was still green because the existing pipeline was converting — a lagging indicator that hid the leading indicator's collapse.

**The Friday she almost failed.** A board meeting was three weeks out. Maya opened the dashboard for the first time in a month and saw the pipeline trajectory. If the trend held, Q3 bookings would miss by 28%. She'd been "trusting Devin" while actually just ignoring him.

She didn't fire Devin. She fired the version of herself that had drifted. She rebuilt the cadence:
- Monday 8am: dashboard, no exceptions, locked calendar block
- Wednesday 2pm: 1:1, 60 min, owned by Devin, never canceled
- Friday 4pm: 10-line summary to the leadership team
- Added one number to the dashboard: "AEs at <60% of ramp target" — the leading indicator she'd missed

**Six weeks later, pipeline was back to $780K/week.** Devin told her later: "I knew something was off but I didn't want to raise it because you seemed so trusting." Her cadence had been the signal that *he* should escalate. Without it, he didn't.

**The lesson:** Trust + verify isn't a one-time setup. It's a discipline. The week you skip the 1:1 is the week the dashboard starts hiding things. Maya now has the cadence in her calendar as recurring events labeled "DO NOT MOVE." She hasn't moved one in 14 months.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="70" font-family="Arial" font-size="32" font-weight="bold" fill="#ffd700" text-anchor="middle">Maya's Weekly Pipeline — The Drift &amp; Recovery</text>
            <text x="550" y="110" font-family="Arial" font-size="17" fill="#888" text-anchor="middle">When cadence slips, dashboards lie.</text>
            <line x1="120" y1="600" x2="1020" y2="600" stroke="#888" stroke-width="2"/>
            <line x1="120" y1="200" x2="120" y2="600" stroke="#888" stroke-width="2"/>
            <text x="80" y="210" font-family="Arial" font-size="13" fill="#888" text-anchor="end">$900K</text>
            <text x="80" y="310" font-family="Arial" font-size="13" fill="#888" text-anchor="end">$750K</text>
            <text x="80" y="410" font-family="Arial" font-size="13" fill="#888" text-anchor="end">$600K</text>
            <text x="80" y="510" font-family="Arial" font-size="13" fill="#888" text-anchor="end">$450K</text>
            <text x="80" y="605" font-family="Arial" font-size="13" fill="#888" text-anchor="end">$300K</text>
            <line x1="120" y1="240" x2="1020" y2="240" stroke="#10b981" stroke-width="1" stroke-dasharray="4,4" opacity="0.4"/>
            <text x="1030" y="245" font-family="Arial" font-size="12" fill="#10b981">green &gt;$800K</text>
            <line x1="120" y1="380" x2="1020" y2="380" stroke="#f59e0b" stroke-width="1" stroke-dasharray="4,4" opacity="0.4"/>
            <text x="1030" y="385" font-family="Arial" font-size="12" fill="#f59e0b">yellow $600K</text>
            <line x1="120" y1="500" x2="1020" y2="500" stroke="#ef4444" stroke-width="1" stroke-dasharray="4,4" opacity="0.4"/>
            <text x="1030" y="505" font-family="Arial" font-size="12" fill="#ef4444">red &lt;$500K</text>
            <polyline points="180,235 240,240 300,245 360,250 420,260 480,280 540,310 600,360 660,420 720,480 780,510 840,495" fill="none" stroke="#0ea5e9" stroke-width="4"/>
            <circle cx="180" cy="235" r="6" fill="#10b981"/>
            <circle cx="240" cy="240" r="6" fill="#10b981"/>
            <circle cx="300" cy="245" r="6" fill="#10b981"/>
            <circle cx="360" cy="250" r="6" fill="#10b981"/>
            <circle cx="420" cy="260" r="6" fill="#10b981"/>
            <circle cx="480" cy="280" r="6" fill="#10b981"/>
            <circle cx="540" cy="310" r="6" fill="#f59e0b"/>
            <circle cx="600" cy="360" r="6" fill="#f59e0b"/>
            <circle cx="660" cy="420" r="6" fill="#f59e0b"/>
            <circle cx="720" cy="480" r="6" fill="#ef4444"/>
            <circle cx="780" cy="510" r="6" fill="#ef4444"/>
            <circle cx="840" cy="495" r="6" fill="#f59e0b"/>
            <polyline points="840,495 900,420 960,330 1010,260" fill="none" stroke="#10b981" stroke-width="4" stroke-dasharray="6,3"/>
            <circle cx="900" cy="420" r="6" fill="#f59e0b"/>
            <circle cx="960" cy="330" r="6" fill="#10b981"/>
            <circle cx="1010" cy="260" r="6" fill="#10b981"/>
            <text x="170" y="650" font-family="Arial" font-size="12" fill="#ffffff" text-anchor="middle">W1</text>
            <text x="420" y="650" font-family="Arial" font-size="12" fill="#ffffff" text-anchor="middle">W5</text>
            <text x="600" y="650" font-family="Arial" font-size="12" fill="#ffffff" text-anchor="middle">W8</text>
            <text x="780" y="650" font-family="Arial" font-size="12" fill="#ffffff" text-anchor="middle">W11</text>
            <text x="1000" y="650" font-family="Arial" font-size="12" fill="#ffffff" text-anchor="middle">W15</text>
            <line x1="420" y1="200" x2="420" y2="600" stroke="#ef4444" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/>
            <text x="420" y="195" font-family="Arial" font-size="13" fill="#ef4444" text-anchor="middle">cadence slips</text>
            <line x1="840" y1="200" x2="840" y2="600" stroke="#10b981" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/>
            <text x="840" y="195" font-family="Arial" font-size="13" fill="#10b981" text-anchor="middle">cadence restored</text>
            <rect x="120" y="700" width="280" height="280" rx="12" fill="#ef4444" opacity="0.18" stroke="#ef4444" stroke-width="2"/>
            <text x="260" y="735" font-family="Arial" font-size="18" font-weight="bold" fill="#ef4444" text-anchor="middle">What Slipped</text>
            <text x="140" y="775" font-family="Arial" font-size="14" fill="#ffffff">- Skipped 1:1 for trip</text>
            <text x="140" y="805" font-family="Arial" font-size="14" fill="#ffffff">- Canceled to clear inbox</text>
            <text x="140" y="835" font-family="Arial" font-size="14" fill="#ffffff">- Stopped reading dashboard</text>
            <text x="140" y="865" font-family="Arial" font-size="14" fill="#ffffff">- Dropped Friday note</text>
            <text x="140" y="895" font-family="Arial" font-size="14" fill="#ffffff">- 1:1 became 30-min Slack</text>
            <text x="140" y="945" font-family="Arial" font-size="13" font-style="italic" fill="#ffd700">Drift takes ~3 weeks.</text>
            <rect x="410" y="700" width="280" height="280" rx="12" fill="#f59e0b" opacity="0.18" stroke="#f59e0b" stroke-width="2"/>
            <text x="550" y="735" font-family="Arial" font-size="18" font-weight="bold" fill="#f59e0b" text-anchor="middle">What She Missed</text>
            <text x="430" y="775" font-family="Arial" font-size="14" fill="#ffffff">- Pipeline $850K to $510K</text>
            <text x="430" y="805" font-family="Arial" font-size="14" fill="#ffffff">- 2 new AEs ramping slow</text>
            <text x="430" y="835" font-family="Arial" font-size="14" fill="#ffffff">- Closed-won still green</text>
            <text x="430" y="865" font-family="Arial" font-size="14" fill="#ffffff">  (lagging hid leading)</text>
            <text x="430" y="895" font-family="Arial" font-size="14" fill="#ffffff">- Q3 trajectory: -28%</text>
            <text x="430" y="945" font-family="Arial" font-size="13" font-style="italic" fill="#ffd700">Devin knew. Didn't escalate.</text>
            <rect x="700" y="700" width="280" height="280" rx="12" fill="#10b981" opacity="0.18" stroke="#10b981" stroke-width="2"/>
            <text x="840" y="735" font-family="Arial" font-size="18" font-weight="bold" fill="#10b981" text-anchor="middle">The Recovery</text>
            <text x="720" y="775" font-family="Arial" font-size="14" fill="#ffffff">- Mon 8am dashboard</text>
            <text x="720" y="805" font-family="Arial" font-size="14" fill="#ffffff">- Wed 2pm 1:1, locked</text>
            <text x="720" y="835" font-family="Arial" font-size="14" fill="#ffffff">- Fri 4pm team summary</text>
            <text x="720" y="865" font-family="Arial" font-size="14" fill="#ffffff">- Added AE-ramp metric</text>
            <text x="720" y="895" font-family="Arial" font-size="14" fill="#ffffff">- 6 wks: back to $780K</text>
            <text x="720" y="945" font-family="Arial" font-size="13" font-style="italic" fill="#ffd700">Cal events: "DO NOT MOVE"</text>
            <text x="550" y="1030" font-family="Arial" font-size="16" font-style="italic" fill="#ffd700" text-anchor="middle">Devin's words: "I knew something was off, but you seemed so trusting I didn't want to raise it."</text>
          </svg>`,
          caption: "Maya's pipeline drift mirrored her cadence drift — almost perfectly."
        }
      },
      {
        type: "quiz",
        title: "Quick Check",
        question: "You promoted Sam to run operations 8 weeks ago. The dashboard shows on-time delivery (lagging, system-generated) is still 96% green. But you noticed last week the support ticket count nearly doubled, and Sam didn't mention it in the 1:1. What's the right move?",
        options: [
          { text: "Trust the green delivery metric — Sam will surface the ticket issue when it actually matters.", correct: false },
          { text: "Bring it up in this week's 1:1: 'Tickets doubled — what's the story?' and consider adding a leading indicator (e.g., complaint rate) to the dashboard before the lagging delivery number turns red.", correct: true },
          { text: "Take over the ops inbox for a week to investigate yourself, then report back to Sam what you found.", correct: false },
          { text: "Send Sam a Slack message right now demanding an explanation for the ticket spike.", correct: false }
        ],
        explanation: "Lagging indicators (like delivery rate) stay green even as leading indicators (like complaints, ticket volume, defect rate) deteriorate. The right move is to surface the leading signal in your existing 1:1 cadence — don't bypass it with a panicked Slack, don't take over the work, and definitely don't ignore it. Then add the leading indicator to the dashboard so next time you don't have to spot it manually. That's verify-without-hovering in action.",
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="80" font-family="Arial" font-size="34" font-weight="bold" fill="#ffd700" text-anchor="middle">Leading vs Lagging Indicators</text>
            <text x="550" y="125" font-family="Arial" font-size="18" fill="#888" text-anchor="middle">The dashboard is only as good as its leading signals</text>
            <rect x="80" y="200" width="440" height="700" rx="15" fill="#0ea5e9" opacity="0.15" stroke="#0ea5e9" stroke-width="3"/>
            <text x="300" y="250" font-family="Arial" font-size="24" font-weight="bold" fill="#0ea5e9" text-anchor="middle">LEADING INDICATORS</text>
            <text x="300" y="280" font-family="Arial" font-size="15" fill="#ffffff" text-anchor="middle">Predict the future. Move first.</text>
            <text x="105" y="340" font-family="Arial" font-size="17" font-weight="bold" fill="#ffd700">Operations:</text>
            <text x="125" y="370" font-family="Arial" font-size="15" fill="#ffffff">- Ticket volume</text>
            <text x="125" y="400" font-family="Arial" font-size="15" fill="#ffffff">- Defect rate</text>
            <text x="125" y="430" font-family="Arial" font-size="15" fill="#ffffff">- Cycle time</text>
            <text x="105" y="490" font-family="Arial" font-size="17" font-weight="bold" fill="#ffd700">Sales:</text>
            <text x="125" y="520" font-family="Arial" font-size="15" fill="#ffffff">- Pipeline created</text>
            <text x="125" y="550" font-family="Arial" font-size="15" fill="#ffffff">- Demos booked</text>
            <text x="125" y="580" font-family="Arial" font-size="15" fill="#ffffff">- Outbound activity</text>
            <text x="105" y="640" font-family="Arial" font-size="17" font-weight="bold" fill="#ffd700">People:</text>
            <text x="125" y="670" font-family="Arial" font-size="15" fill="#ffffff">- 1:1 frequency</text>
            <text x="125" y="700" font-family="Arial" font-size="15" fill="#ffffff">- Engagement pulse</text>
            <text x="125" y="730" font-family="Arial" font-size="15" fill="#ffffff">- Recruiting funnel</text>
            <text x="300" y="810" font-family="Arial" font-size="15" font-style="italic" fill="#10b981" text-anchor="middle">Move 4-8 weeks before</text>
            <text x="300" y="835" font-family="Arial" font-size="15" font-style="italic" fill="#10b981" text-anchor="middle">the lagging number does.</text>
            <text x="300" y="880" font-family="Arial" font-size="14" fill="#0ea5e9" text-anchor="middle">- WATCH THESE -</text>
            <rect x="580" y="200" width="440" height="700" rx="15" fill="#8b5cf6" opacity="0.15" stroke="#8b5cf6" stroke-width="3"/>
            <text x="800" y="250" font-family="Arial" font-size="24" font-weight="bold" fill="#8b5cf6" text-anchor="middle">LAGGING INDICATORS</text>
            <text x="800" y="280" font-family="Arial" font-size="15" fill="#ffffff" text-anchor="middle">Confirm the past. Move last.</text>
            <text x="605" y="340" font-family="Arial" font-size="17" font-weight="bold" fill="#ffd700">Operations:</text>
            <text x="625" y="370" font-family="Arial" font-size="15" fill="#ffffff">- On-time delivery %</text>
            <text x="625" y="400" font-family="Arial" font-size="15" fill="#ffffff">- Customer churn</text>
            <text x="625" y="430" font-family="Arial" font-size="15" fill="#ffffff">- NPS</text>
            <text x="605" y="490" font-family="Arial" font-size="17" font-weight="bold" fill="#ffd700">Sales:</text>
            <text x="625" y="520" font-family="Arial" font-size="15" fill="#ffffff">- Closed-won revenue</text>
            <text x="625" y="550" font-family="Arial" font-size="15" fill="#ffffff">- Win rate</text>
            <text x="625" y="580" font-family="Arial" font-size="15" fill="#ffffff">- ARR retention</text>
            <text x="605" y="640" font-family="Arial" font-size="17" font-weight="bold" fill="#ffd700">People:</text>
            <text x="625" y="670" font-family="Arial" font-size="15" fill="#ffffff">- Voluntary attrition</text>
            <text x="625" y="700" font-family="Arial" font-size="15" fill="#ffffff">- Time-to-hire</text>
            <text x="625" y="730" font-family="Arial" font-size="15" fill="#ffffff">- Promotion rate</text>
            <text x="800" y="810" font-family="Arial" font-size="15" font-style="italic" fill="#ef4444" text-anchor="middle">By the time these turn red,</text>
            <text x="800" y="835" font-family="Arial" font-size="15" font-style="italic" fill="#ef4444" text-anchor="middle">the damage is already done.</text>
            <text x="800" y="880" font-family="Arial" font-size="14" fill="#8b5cf6" text-anchor="middle">- VERIFY WITH THESE -</text>
            <text x="550" y="970" font-family="Arial" font-size="19" font-weight="bold" fill="#ffd700" text-anchor="middle">A great dashboard has BOTH — and emphasizes leading.</text>
            <text x="550" y="1010" font-family="Arial" font-size="16" fill="#888" text-anchor="middle">If your dashboard is all lagging, you're driving by the rearview mirror.</text>
          </svg>`,
          caption: "Lagging indicators tell you what already happened. Leading indicators tell you what's about to."
        }
      },
      {
        type: "application",
        title: "Build Your Trust + Verify System (90 minutes this week)",
        content: `Stop reading. Time to install the system for one direct report.

**Step 1 — Schedule the 1:1 (5 min).**
Open your calendar. Create a recurring weekly 60-minute event with one direct report. Title it: "[Name] 1:1 — DO NOT MOVE." Set it for the same day, same time, every week. Block the 15 minutes before for prep.

**Step 2 — Build the dashboard (45 min).**
Open a spreadsheet. List 5-9 numbers that tell you whether this person's function is healthy. For each number, define:
- Source (system it comes from — avoid self-reported where possible)
- Green / Yellow / Red thresholds
- Update frequency (weekly is fine for most)
- Leading or lagging (aim for 60% leading)

Pull last week's actual numbers. Color-code. Save as the template you'll use Monday mornings forever.

**Step 3 — The "I trust this report" audit (15 min).**
For each number, ask: "If this said 'green' but reality was red, how would I find out?" If you can't answer in 30 seconds, that number isn't trustworthy. Either tie it to a source system you can't fudge, or pair it with a verification number.

**Step 4 — Write the 1:1 agenda template (10 min).**
Send your direct report this exact note today:
> "Starting next week, our 1:1 is 60 min, same time every week. You own the agenda. Bring: (1) your priorities for the week, (2) blockers or decisions you need from me, (3) your dashboard with anything red explained, (4) anything frustrating or unclear, (5) one thing on your mind that's not about work. I'll bring questions, not orders."

**Step 5 — The Friday note (15 min, every Friday).**
Write a 5-10 line note to your team summarizing: what's tracking, what's off and what you're doing about it, one decision made this week, one thing you appreciated. This forces you to actually have a point of view on the data.

**The discipline check, 30 days from now:** Have you skipped any 1:1s? Have you read the dashboard every Monday? Have you sent every Friday note? If yes — you're operating like an owner. If no — re-read the Maya example and ask why you let it slip.

This is the system that lets you stop reading every email without flying blind.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="75" font-family="Arial" font-size="36" font-weight="bold" fill="#ffd700" text-anchor="middle">90-Minute Install Plan</text>
            <text x="550" y="120" font-family="Arial" font-size="18" fill="#888" text-anchor="middle">Block this week. Run it Monday onward.</text>
            <rect x="80" y="180" width="940" height="120" rx="12" fill="#10b981" opacity="0.15" stroke="#10b981" stroke-width="2"/>
            <circle cx="140" cy="240" r="32" fill="#10b981"/>
            <text x="140" y="252" font-family="Arial" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
            <text x="200" y="225" font-family="Arial" font-size="20" font-weight="bold" fill="#ffd700">Schedule the 1:1 (5 min)</text>
            <text x="200" y="255" font-family="Arial" font-size="15" fill="#ffffff">Recurring. 60 min. Same day/time forever.</text>
            <text x="200" y="280" font-family="Arial" font-size="14" fill="#888" font-style="italic">Title: "[Name] 1:1 — DO NOT MOVE"</text>
            <rect x="80" y="320" width="940" height="160" rx="12" fill="#6366f1" opacity="0.15" stroke="#6366f1" stroke-width="2"/>
            <circle cx="140" cy="400" r="32" fill="#6366f1"/>
            <text x="140" y="412" font-family="Arial" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
            <text x="200" y="365" font-family="Arial" font-size="20" font-weight="bold" fill="#ffd700">Build the dashboard (45 min)</text>
            <text x="200" y="395" font-family="Arial" font-size="15" fill="#ffffff">5-9 numbers. Each with source, thresholds,</text>
            <text x="200" y="420" font-family="Arial" font-size="15" fill="#ffffff">frequency, leading/lagging tag.</text>
            <text x="200" y="450" font-family="Arial" font-size="14" fill="#888" font-style="italic">Aim for 60% leading. Pull last week's actuals.</text>
            <rect x="80" y="500" width="940" height="120" rx="12" fill="#ec4899" opacity="0.15" stroke="#ec4899" stroke-width="2"/>
            <circle cx="140" cy="560" r="32" fill="#ec4899"/>
            <text x="140" y="572" font-family="Arial" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">3</text>
            <text x="200" y="545" font-family="Arial" font-size="20" font-weight="bold" fill="#ffd700">Trust audit (15 min)</text>
            <text x="200" y="575" font-family="Arial" font-size="15" fill="#ffffff">"If this lied to me, how would I find out?"</text>
            <text x="200" y="600" font-family="Arial" font-size="14" fill="#888" font-style="italic">Tie to system-of-record numbers wherever possible.</text>
            <rect x="80" y="640" width="940" height="120" rx="12" fill="#f59e0b" opacity="0.15" stroke="#f59e0b" stroke-width="2"/>
            <circle cx="140" cy="700" r="32" fill="#f59e0b"/>
            <text x="140" y="712" font-family="Arial" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">4</text>
            <text x="200" y="685" font-family="Arial" font-size="20" font-weight="bold" fill="#ffd700">Send agenda template (10 min)</text>
            <text x="200" y="715" font-family="Arial" font-size="15" fill="#ffffff">"You own the agenda. Bring 5 things..."</text>
            <text x="200" y="740" font-family="Arial" font-size="14" fill="#888" font-style="italic">Set the expectation in writing before week 1.</text>
            <rect x="80" y="780" width="940" height="120" rx="12" fill="#8b5cf6" opacity="0.15" stroke="#8b5cf6" stroke-width="2"/>
            <circle cx="140" cy="840" r="32" fill="#8b5cf6"/>
            <text x="140" y="852" font-family="Arial" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">5</text>
            <text x="200" y="825" font-family="Arial" font-size="20" font-weight="bold" fill="#ffd700">Friday note (15 min, weekly)</text>
            <text x="200" y="855" font-family="Arial" font-size="15" fill="#ffffff">5-10 lines: tracking, off, decision, appreciation.</text>
            <text x="200" y="880" font-family="Arial" font-size="14" fill="#888" font-style="italic">Forces you to form a weekly point of view.</text>
            <rect x="200" y="930" width="700" height="120" rx="15" fill="#0ea5e9" opacity="0.18" stroke="#0ea5e9" stroke-width="3"/>
            <text x="550" y="970" font-family="Arial" font-size="20" font-weight="bold" fill="#ffd700" text-anchor="middle">30-day check</text>
            <text x="550" y="1005" font-family="Arial" font-size="16" fill="#ffffff" text-anchor="middle">Skipped a 1:1? Missed a Monday? Skipped a Friday?</text>
            <text x="550" y="1035" font-family="Arial" font-size="16" fill="#0ea5e9" text-anchor="middle">Re-read Maya. Ask why you let it slip. Fix it this week.</text>
          </svg>`,
          caption: "Five steps. 90 minutes once, then 90 minutes a week forever."
        }
      }
    ]
  },
  {
    id: "operator-to-owner-lesson-11",
    title: "Re-entry Traps — Why Owners Pull Back Into Operations",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "The Gravitational Pull Back to the Work",
        content: `You did the hard thing. You delegated. You built dashboards. You stopped checking the shared inbox at 11pm. For three glorious months you operated like an owner.

Then something happens — a crisis, a launch, a bad week — and you find yourself elbows-deep in the work again. The shared inbox is open in another tab. You're writing code, or closing the deal, or doing the QC pass yourself. You tell yourself: "Just this once. It's important."

Six weeks later you're back where you started, except now your team is more confused than before. They built habits around your absence. Then you returned, undid their decisions, and they don't know if you're delegating or operating anymore.

**This is the re-entry trap.** It's not weakness. It's gravity. Operating is what you're good at. Operating produces immediate dopamine hits — a fixed bug, a closed deal, a happy customer. Ownership produces deferred ones — a team that runs without you, a business that compounds. Your nervous system prefers the immediate hit.

There's also a current debate in the founder community — Brian Chesky's "Founder Mode" essay sparked it — about whether founders should ever fully step out of operations. Steve Jobs ran Apple in detail. Elon Musk sleeps on the factory floor. Some great companies seem to require their founders' deep operational involvement forever.

The truth is more nuanced. The question isn't "operate or don't." The question is: **what are you the only person who can do, and is that what you're spending your time on?** This lesson catalogs the five re-entry traps, when "founder mode" is justified vs. self-deception, and how to plan re-entry so it doesn't become a relapse.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="80" font-family="Arial" font-size="36" font-weight="bold" fill="#ffd700" text-anchor="middle">The Re-entry Spiral</text>
            <text x="550" y="125" font-family="Arial" font-size="18" fill="#888" text-anchor="middle">How owners rebound into operations without realizing it</text>
            <ellipse cx="550" cy="600" rx="380" ry="380" fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="6,4" opacity="0.6"/>
            <ellipse cx="550" cy="600" rx="290" ry="290" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="6,4" opacity="0.6"/>
            <ellipse cx="550" cy="600" rx="200" ry="200" fill="none" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6,4" opacity="0.6"/>
            <circle cx="550" cy="600" r="110" fill="#1a1a2e" stroke="#ffd700" stroke-width="3"/>
            <text x="550" y="590" font-family="Arial" font-size="22" font-weight="bold" fill="#ffd700" text-anchor="middle">OPERATIONS</text>
            <text x="550" y="620" font-family="Arial" font-size="14" fill="#888" text-anchor="middle">(the gravity well)</text>
            <circle cx="550" cy="220" r="50" fill="#6366f1" opacity="0.85"/>
            <text x="550" y="217" font-family="Arial" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">OWNER</text>
            <text x="550" y="237" font-family="Arial" font-size="13" fill="#ffffff" text-anchor="middle">stable orbit</text>
            <path d="M 550 270 Q 700 320 730 420" stroke="#f59e0b" stroke-width="3" fill="none" marker-end="url(#a1)"/>
            <path d="M 730 420 Q 760 530 700 600" stroke="#f59e0b" stroke-width="3" fill="none"/>
            <text x="800" y="380" font-family="Arial" font-size="14" font-weight="bold" fill="#f59e0b">trap triggers</text>
            <path d="M 700 600 Q 700 680 620 720" stroke="#ef4444" stroke-width="3" fill="none"/>
            <text x="780" y="660" font-family="Arial" font-size="14" font-weight="bold" fill="#ef4444">"just this once"</text>
            <path d="M 620 720 Q 540 740 480 700" stroke="#ef4444" stroke-width="3" fill="none"/>
            <text x="350" y="780" font-family="Arial" font-size="14" font-weight="bold" fill="#ef4444">relapse</text>
            <text x="120" y="280" font-family="Arial" font-size="18" font-weight="bold" fill="#ffd700">5 Re-entry Triggers:</text>
            <circle cx="135" cy="320" r="10" fill="#ef4444"/>
            <text x="155" y="325" font-family="Arial" font-size="15" fill="#ffffff">Crisis ("they need me")</text>
            <circle cx="135" cy="355" r="10" fill="#f59e0b"/>
            <text x="155" y="360" font-family="Arial" font-size="15" fill="#ffffff">New product ("0-to-1")</text>
            <circle cx="135" cy="390" r="10" fill="#8b5cf6"/>
            <text x="155" y="395" font-family="Arial" font-size="15" fill="#ffffff">Ego fix ("I'm still it")</text>
            <circle cx="135" cy="425" r="10" fill="#ec4899"/>
            <text x="155" y="430" font-family="Arial" font-size="15" fill="#ffffff">Identity void</text>
            <circle cx="135" cy="460" r="10" fill="#0ea5e9"/>
            <text x="155" y="465" font-family="Arial" font-size="15" fill="#ffffff">Empty calendar</text>
            <text x="800" y="900" font-family="Arial" font-size="16" font-weight="bold" fill="#ffd700" text-anchor="middle">Closer = stronger pull</text>
            <text x="550" y="1050" font-family="Arial" font-size="17" font-style="italic" fill="#888" text-anchor="middle">The orbit is unstable. Without intent, you fall back to center.</text>
          </svg>`,
          caption: "Owner orbit is unstable. Re-entry triggers pull you back to the operational core."
        }
      },
      {
        type: "concept",
        title: "The 5 Re-entry Traps (and the Founder-Mode Debate)",
        content: `**Trap 1: The Crisis Rescue.** A big customer is angry. A key hire quit. The CFO miscounted runway. You jump in personally because "it's all-hands-on-deck." Real crises do warrant temporary re-entry. The trap: you stay in operating mode after the crisis resolves, because you got the dopamine of being needed. **Counter-move:** before you re-enter, write down "Re-exit date" and one specific signal — "When NPS is back to 60 for two weeks, I exit again." Put it in your calendar.

**Trap 2: The Shiny New Product.** You delegated the existing business. Then you start a new product line, and you operate that one personally — writing the code, doing the sales calls, designing the launch. This feels justified ("0-to-1 needs the founder") but is often just preferring the new toy over the harder work of governing. **Counter-move:** ask "Could I hire a founder-mode operator for this product and govern from above?" Sometimes yes, sometimes no — but at least answer the question honestly.

**Trap 3: The Ego Fix.** Someone tells you "the team isn't the same without you in the trenches." You feel a flush of pride and start showing up to sales calls again "to add energy." You're not solving a business problem. You're solving a feeling. **Counter-move:** when you feel the urge to re-enter, write down the business case in one sentence. If you can't write it without using the word "energy" or "morale," it's an ego fix.

**Trap 4: The Identity Void.** "If I'm not the one closing the deals, who am I?" Founders who built identity around being the best operator feel hollow when they're not in the work. This trap is the hardest because the void is real. **Counter-move:** invest in a new identity *before* you exit operations. Board work, an angel portfolio, writing, mentoring, a non-profit. If you exit operations without building a new identity, you will rebound.

**Trap 5: The Empty Calendar.** You delegated successfully. Now you have 30 unstructured hours a week. Nature abhors a vacuum, so you fill it with the work you used to do, just badly and at random. **Counter-move:** plan your owner-week before you delegate. Lesson 12 gives you the template.

**The Founder-Mode Debate.** In 2024, Brian Chesky argued at YC that conventional "hire great people and get out of their way" advice ruined his early years at Airbnb — and that founders should stay deeply involved in details (he calls it "founder mode"). Paul Graham wrote it up and it became gospel for some, blasphemy for others.

The honest read: "founder mode" is justified when (a) the company is in a 0-to-1 phase, (b) you're the only one with the strategic insight needed, or (c) you're an exceptional operator AND have built a team that thrives under deep involvement (Jobs, Musk, Chesky). For most middle-stage owners reading this book, "founder mode" is rationalization for not having done the work of building a team that runs without you. Be honest with yourself about which one you are.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="70" font-family="Arial" font-size="34" font-weight="bold" fill="#ffd700" text-anchor="middle">The Five Re-entry Traps</text>
            <text x="550" y="110" font-family="Arial" font-size="17" fill="#888" text-anchor="middle">Know the trigger. Plan the counter-move.</text>
            <rect x="60" y="150" width="500" height="180" rx="12" fill="#ef4444" opacity="0.15" stroke="#ef4444" stroke-width="2"/>
            <text x="85" y="190" font-family="Arial" font-size="38" font-weight="bold" fill="#ef4444">1</text>
            <text x="140" y="190" font-family="Arial" font-size="20" font-weight="bold" fill="#ffd700">Crisis Rescue</text>
            <text x="85" y="225" font-family="Arial" font-size="14" fill="#ffffff">Trigger: angry customer, runway scare, key quit</text>
            <text x="85" y="255" font-family="Arial" font-size="14" fill="#ffffff">Risk: stay in after crisis ends</text>
            <text x="85" y="290" font-family="Arial" font-size="14" font-weight="bold" fill="#10b981">Counter: pre-write the re-exit date + signal</text>
            <text x="85" y="315" font-family="Arial" font-size="13" font-style="italic" fill="#888">e.g. "NPS back to 60 for 2 weeks = exit"</text>
            <rect x="580" y="150" width="460" height="180" rx="12" fill="#f59e0b" opacity="0.15" stroke="#f59e0b" stroke-width="2"/>
            <text x="605" y="190" font-family="Arial" font-size="38" font-weight="bold" fill="#f59e0b">2</text>
            <text x="660" y="190" font-family="Arial" font-size="20" font-weight="bold" fill="#ffd700">New Product</text>
            <text x="605" y="225" font-family="Arial" font-size="14" fill="#ffffff">Trigger: launching a new line, "0-to-1 needs me"</text>
            <text x="605" y="255" font-family="Arial" font-size="14" fill="#ffffff">Risk: preferring the new toy</text>
            <text x="605" y="290" font-family="Arial" font-size="14" font-weight="bold" fill="#10b981">Counter: "Could I hire a founder-operator?"</text>
            <text x="605" y="315" font-family="Arial" font-size="13" font-style="italic" fill="#888">Answer honestly. Sometimes yes.</text>
            <rect x="60" y="350" width="500" height="180" rx="12" fill="#8b5cf6" opacity="0.15" stroke="#8b5cf6" stroke-width="2"/>
            <text x="85" y="390" font-family="Arial" font-size="38" font-weight="bold" fill="#8b5cf6">3</text>
            <text x="140" y="390" font-family="Arial" font-size="20" font-weight="bold" fill="#ffd700">Ego Fix</text>
            <text x="85" y="425" font-family="Arial" font-size="14" fill="#ffffff">Trigger: "team isn't the same without you"</text>
            <text x="85" y="455" font-family="Arial" font-size="14" fill="#ffffff">Risk: solving a feeling, not a business problem</text>
            <text x="85" y="490" font-family="Arial" font-size="14" font-weight="bold" fill="#10b981">Counter: write the business case in 1 sentence</text>
            <text x="85" y="515" font-family="Arial" font-size="13" font-style="italic" fill="#888">If "energy" or "morale" — it's ego.</text>
            <rect x="580" y="350" width="460" height="180" rx="12" fill="#ec4899" opacity="0.15" stroke="#ec4899" stroke-width="2"/>
            <text x="605" y="390" font-family="Arial" font-size="38" font-weight="bold" fill="#ec4899">4</text>
            <text x="660" y="390" font-family="Arial" font-size="20" font-weight="bold" fill="#ffd700">Identity Void</text>
            <text x="605" y="425" font-family="Arial" font-size="14" fill="#ffffff">Trigger: "If I'm not the operator, who am I?"</text>
            <text x="605" y="455" font-family="Arial" font-size="14" fill="#ffffff">Risk: rebound is near-certain</text>
            <text x="605" y="490" font-family="Arial" font-size="14" font-weight="bold" fill="#10b981">Counter: build new identity BEFORE you exit</text>
            <text x="605" y="515" font-family="Arial" font-size="13" font-style="italic" fill="#888">Board, angel, writing, non-profit.</text>
            <rect x="60" y="550" width="500" height="180" rx="12" fill="#0ea5e9" opacity="0.15" stroke="#0ea5e9" stroke-width="2"/>
            <text x="85" y="590" font-family="Arial" font-size="38" font-weight="bold" fill="#0ea5e9">5</text>
            <text x="140" y="590" font-family="Arial" font-size="20" font-weight="bold" fill="#ffd700">Empty Calendar</text>
            <text x="85" y="625" font-family="Arial" font-size="14" fill="#ffffff">Trigger: 30 unstructured hours/week</text>
            <text x="85" y="655" font-family="Arial" font-size="14" fill="#ffffff">Risk: fill with old work, badly &amp; at random</text>
            <text x="85" y="690" font-family="Arial" font-size="14" font-weight="bold" fill="#10b981">Counter: plan owner-week BEFORE delegating</text>
            <text x="85" y="715" font-family="Arial" font-size="13" font-style="italic" fill="#888">See Lesson 12 template.</text>
            <rect x="580" y="550" width="460" height="180" rx="12" fill="#6366f1" opacity="0.15" stroke="#6366f1" stroke-width="2"/>
            <text x="810" y="595" font-family="Arial" font-size="22" font-weight="bold" fill="#ffd700" text-anchor="middle">All five share one cure:</text>
            <text x="810" y="635" font-family="Arial" font-size="16" fill="#ffffff" text-anchor="middle">Plan the re-entry rules in</text>
            <text x="810" y="660" font-family="Arial" font-size="16" fill="#ffffff" text-anchor="middle">writing BEFORE you feel</text>
            <text x="810" y="685" font-family="Arial" font-size="16" fill="#ffffff" text-anchor="middle">the gravitational pull.</text>
            <text x="810" y="715" font-family="Arial" font-size="13" font-style="italic" fill="#0ea5e9" text-anchor="middle">Rules in calm beat willpower in heat.</text>
            <rect x="60" y="770" width="980" height="280" rx="15" fill="#ffd700" opacity="0.1" stroke="#ffd700" stroke-width="3"/>
            <text x="550" y="815" font-family="Arial" font-size="22" font-weight="bold" fill="#ffd700" text-anchor="middle">The Founder Mode Debate (Chesky, 2024)</text>
            <text x="90" y="855" font-family="Arial" font-size="15" fill="#ffffff">Brian Chesky at YC: conventional "hire great people, get out of the way" nearly ruined Airbnb.</text>
            <text x="90" y="880" font-family="Arial" font-size="15" fill="#ffffff">Paul Graham wrote it up. The internet split.</text>
            <text x="90" y="930" font-family="Arial" font-size="16" font-weight="bold" fill="#10b981">Founder mode is JUSTIFIED when:</text>
            <text x="110" y="960" font-family="Arial" font-size="14" fill="#ffffff">- 0-to-1 phase, or</text>
            <text x="110" y="985" font-family="Arial" font-size="14" fill="#ffffff">- you alone hold the strategic insight, or</text>
            <text x="110" y="1010" font-family="Arial" font-size="14" fill="#ffffff">- you're an exceptional operator AND your team thrives under it (Jobs, Musk, Chesky)</text>
            <text x="110" y="1040" font-family="Arial" font-size="14" font-style="italic" fill="#ef4444">For most: "founder mode" = rationalization for not having built the team.</text>
          </svg>`,
          caption: "Five traps. One cure: rules written in calm beat willpower in heat."
        }
      },
      {
        type: "example",
        title: "Raj's Three Re-entries (and the Third One That Stuck Right)",
        content: `Raj founded a logistics company in 2017. Got to $40M revenue by 2022. Hired a COO, delegated, and exited day-to-day operations. Three times he rebounded. Two were traps. One was correct.

**Re-entry #1: The Crisis (Trap 1 + Trap 3 combo).** Q4 2022, their biggest customer threatened to leave over a botched implementation. Raj jumped in personally — flew to the customer, ran the war room for six weeks, fixed it. Saved the account. But then he stayed. He kept attending all the customer success meetings "to make sure it didn't happen again." Six months later he was reviewing every onboarding plan, the COO was disengaged, and Raj realized he'd never set a re-exit signal. The crisis ended in week 6. He stayed in operations for 11 more months.

**Lesson he extracted:** before you re-enter, the re-exit must already be defined. He now writes both the entry and exit as a single calendar event: "Customer rescue: Nov 1 - Dec 15. Exit signal = NPS recovery + COO confirms ownership."

**Re-entry #2: The New Product (Trap 2).** Mid-2023, he started a new SaaS arm — a routing tool for mid-market shippers. He told himself it was 0-to-1 and "needed the founder." He spent eight months personally running product, hiring the engineering team, and doing the sales. The core business drifted because his COO wasn't getting his time. The new product hit $400K ARR, but the core business' growth rate dropped from 35% to 12%.

**Lesson he extracted:** he could have hired a founder-mode GM for the SaaS arm. He'd been seduced by the dopamine of building from scratch. He wrote a rule: "New ventures get a founder-operator hired in month 1, not month 12." When he started a logistics-finance product in 2024, he hired the GM first.

**Re-entry #3: The Justified One.** Q2 2024, a competitor announced a major acquisition that threatened the core business model. This wasn't a customer problem or a product launch — it was a strategic re-positioning question. Only Raj had the full context of board relationships, M&A history, and long-term vision. He re-entered for a defined 90-day strategy reset. He wrote the exit signal up front: "Strategy memo approved by board, COO confirms execution plan, three quarterly checkpoints scheduled." He hit all three by day 85 and exited cleanly.

**The pattern:** Re-entries #1 and #2 were trap-driven (crisis-then-stayed, shiny new toy). Re-entry #3 was the kind of work only the owner can do — strategic re-positioning with full board and historical context. He re-entered with rules, executed, and exited.

**Raj's rule today:** "Any re-entry over two weeks requires a written exit signal, a date, and a peer who tells me if I'm rationalizing. My COO has explicit permission to say: 'You're in a trap, get out.'"`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="70" font-family="Arial" font-size="32" font-weight="bold" fill="#ffd700" text-anchor="middle">Raj's Three Re-entries — 2022-2024</text>
            <text x="550" y="110" font-family="Arial" font-size="17" fill="#888" text-anchor="middle">Two traps, one correct re-entry. The difference was rules-up-front.</text>
            <line x1="100" y1="200" x2="1020" y2="200" stroke="#888" stroke-width="2"/>
            <text x="100" y="190" font-family="Arial" font-size="12" fill="#888" text-anchor="middle">2022</text>
            <text x="406" y="190" font-family="Arial" font-size="12" fill="#888" text-anchor="middle">2023</text>
            <text x="713" y="190" font-family="Arial" font-size="12" fill="#888" text-anchor="middle">2024</text>
            <text x="1020" y="190" font-family="Arial" font-size="12" fill="#888" text-anchor="middle">2025</text>
            <rect x="170" y="240" width="280" height="240" rx="12" fill="#ef4444" opacity="0.18" stroke="#ef4444" stroke-width="2"/>
            <text x="310" y="275" font-family="Arial" font-size="18" font-weight="bold" fill="#ef4444" text-anchor="middle">RE-ENTRY #1</text>
            <text x="310" y="300" font-family="Arial" font-size="14" fill="#888" text-anchor="middle">Crisis + Ego Combo</text>
            <text x="190" y="335" font-family="Arial" font-size="14" fill="#ffffff">Trigger: customer about to churn</text>
            <text x="190" y="360" font-family="Arial" font-size="14" fill="#ffffff">In: war room, 6 weeks, fixed</text>
            <text x="190" y="385" font-family="Arial" font-size="14" fill="#ffffff">Stayed: 11 more months</text>
            <text x="190" y="420" font-family="Arial" font-size="14" font-weight="bold" fill="#ef4444">No exit signal defined.</text>
            <text x="190" y="450" font-family="Arial" font-size="13" font-style="italic" fill="#ffd700">Lesson: write the exit BEFORE</text>
            <text x="190" y="470" font-family="Arial" font-size="13" font-style="italic" fill="#ffd700">you write the entry.</text>
            <line x1="310" y1="210" x2="310" y2="240" stroke="#ef4444" stroke-width="3"/>
            <circle cx="310" cy="200" r="8" fill="#ef4444"/>
            <rect x="480" y="500" width="280" height="240" rx="12" fill="#f59e0b" opacity="0.18" stroke="#f59e0b" stroke-width="2"/>
            <text x="620" y="535" font-family="Arial" font-size="18" font-weight="bold" fill="#f59e0b" text-anchor="middle">RE-ENTRY #2</text>
            <text x="620" y="560" font-family="Arial" font-size="14" fill="#888" text-anchor="middle">New Product Trap</text>
            <text x="500" y="595" font-family="Arial" font-size="14" fill="#ffffff">Trigger: new SaaS arm</text>
            <text x="500" y="620" font-family="Arial" font-size="14" fill="#ffffff">Reason: "0-to-1 needs founder"</text>
            <text x="500" y="645" font-family="Arial" font-size="14" fill="#ffffff">8 months personally building</text>
            <text x="500" y="680" font-family="Arial" font-size="14" font-weight="bold" fill="#f59e0b">Core growth: 35% to 12%</text>
            <text x="500" y="710" font-family="Arial" font-size="13" font-style="italic" fill="#ffd700">Lesson: hire founder-mode</text>
            <text x="500" y="730" font-family="Arial" font-size="13" font-style="italic" fill="#ffd700">GM in month 1, not month 12.</text>
            <line x1="620" y1="210" x2="620" y2="500" stroke="#f59e0b" stroke-width="3" stroke-dasharray="4,4"/>
            <circle cx="620" cy="200" r="8" fill="#f59e0b"/>
            <rect x="790" y="240" width="280" height="240" rx="12" fill="#10b981" opacity="0.18" stroke="#10b981" stroke-width="2"/>
            <text x="930" y="275" font-family="Arial" font-size="18" font-weight="bold" fill="#10b981" text-anchor="middle">RE-ENTRY #3</text>
            <text x="930" y="300" font-family="Arial" font-size="14" fill="#888" text-anchor="middle">Strategic Reset — Justified</text>
            <text x="810" y="335" font-family="Arial" font-size="14" fill="#ffffff">Trigger: competitor M&amp;A threat</text>
            <text x="810" y="360" font-family="Arial" font-size="14" fill="#ffffff">Only-owner work: board + vision</text>
            <text x="810" y="385" font-family="Arial" font-size="14" fill="#ffffff">90 days, exit signal set day 1</text>
            <text x="810" y="420" font-family="Arial" font-size="14" font-weight="bold" fill="#10b981">Exited day 85, clean.</text>
            <text x="810" y="450" font-family="Arial" font-size="13" font-style="italic" fill="#ffd700">Lesson: this is what</text>
            <text x="810" y="470" font-family="Arial" font-size="13" font-style="italic" fill="#ffd700">"founder mode" should be.</text>
            <line x1="930" y1="210" x2="930" y2="240" stroke="#10b981" stroke-width="3"/>
            <circle cx="930" cy="200" r="8" fill="#10b981"/>
            <rect x="100" y="800" width="920" height="220" rx="15" fill="#6366f1" opacity="0.18" stroke="#6366f1" stroke-width="3"/>
            <text x="560" y="845" font-family="Arial" font-size="22" font-weight="bold" fill="#ffd700" text-anchor="middle">Raj's Rule (2024)</text>
            <text x="560" y="890" font-family="Arial" font-size="17" fill="#ffffff" text-anchor="middle">"Any re-entry over two weeks requires:</text>
            <text x="560" y="920" font-family="Arial" font-size="16" fill="#ffffff" text-anchor="middle">(1) a written exit signal, (2) a date, (3) a peer who can call my BS."</text>
            <text x="560" y="975" font-family="Arial" font-size="16" fill="#ffffff" text-anchor="middle">His COO has explicit permission to say:</text>
            <text x="560" y="1005" font-family="Arial" font-size="18" font-weight="bold" fill="#ec4899" text-anchor="middle">"You're in a trap. Get out."</text>
          </svg>`,
          caption: "Same person, same company, three re-entries. The third one had rules. The first two didn't."
        }
      },
      {
        type: "quiz",
        title: "Quick Check",
        question: "Your company is launching a major new product. You feel the urge to personally run it, citing 'founder mode' and the Chesky doctrine. Which of the following best distinguishes a justified founder-mode re-entry from a re-entry trap?",
        options: [
          { text: "Justified if you're the founder — founders are always allowed to operate, per Chesky and Graham.", correct: false },
          { text: "Trap if you stay longer than 6 weeks. Anything under 6 weeks is fine, regardless of motivation.", correct: false },
          { text: "Justified when (a) you hold strategic insight others lack, AND (b) you've defined a written exit signal up front, AND (c) you've actively considered hiring a founder-mode operator instead — and concluded you can't.", correct: true },
          { text: "Trap if your COO objects. Justified if your COO endorses it.", correct: false }
        ],
        explanation: "Founder-mode is not a free pass — even Chesky's argument applies to specific conditions (0-to-1, deep strategic involvement, a team that thrives under it). The justified version requires three things: unique value only you can provide, a written exit signal up front, and a real consideration of the alternative (hiring a founder-operator GM). Without all three, 'founder mode' is usually rationalization for ego-fix or new-toy traps. Time alone is not the test, COO opinion alone is not the test, and being-the-founder is definitely not the test.",
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="80" font-family="Arial" font-size="34" font-weight="bold" fill="#ffd700" text-anchor="middle">Re-entry Decision Test</text>
            <text x="550" y="125" font-family="Arial" font-size="17" fill="#888" text-anchor="middle">Three gates. All three must be YES.</text>
            <rect x="120" y="200" width="860" height="180" rx="15" fill="#0ea5e9" opacity="0.18" stroke="#0ea5e9" stroke-width="3"/>
            <text x="160" y="245" font-family="Arial" font-size="48" font-weight="bold" fill="#0ea5e9">1</text>
            <text x="240" y="245" font-family="Arial" font-size="22" font-weight="bold" fill="#ffd700">Strategic uniqueness</text>
            <text x="240" y="280" font-family="Arial" font-size="16" fill="#ffffff">Is this work only you can do?</text>
            <text x="240" y="310" font-family="Arial" font-size="15" fill="#888">- Board relationships, M&amp;A context, founding vision</text>
            <text x="240" y="335" font-family="Arial" font-size="15" fill="#888">- NOT: "energy," "morale," "I'm just better at this"</text>
            <text x="240" y="365" font-family="Arial" font-size="14" font-style="italic" fill="#10b981">If you can write a brief for someone else to do it - it's not unique.</text>
            <rect x="120" y="410" width="860" height="180" rx="15" fill="#6366f1" opacity="0.18" stroke="#6366f1" stroke-width="3"/>
            <text x="160" y="455" font-family="Arial" font-size="48" font-weight="bold" fill="#6366f1">2</text>
            <text x="240" y="455" font-family="Arial" font-size="22" font-weight="bold" fill="#ffd700">Written exit signal</text>
            <text x="240" y="490" font-family="Arial" font-size="16" fill="#ffffff">What specifically tells you it's time to exit?</text>
            <text x="240" y="520" font-family="Arial" font-size="15" fill="#888">- Concrete metric or event, dated</text>
            <text x="240" y="545" font-family="Arial" font-size="15" fill="#888">- Written in your calendar BEFORE you re-enter</text>
            <text x="240" y="575" font-family="Arial" font-size="14" font-style="italic" fill="#10b981">"NPS back to 60 for 2 weeks" not "when it feels right."</text>
            <rect x="120" y="620" width="860" height="180" rx="15" fill="#ec4899" opacity="0.18" stroke="#ec4899" stroke-width="3"/>
            <text x="160" y="665" font-family="Arial" font-size="48" font-weight="bold" fill="#ec4899">3</text>
            <text x="240" y="665" font-family="Arial" font-size="22" font-weight="bold" fill="#ffd700">Alternative considered</text>
            <text x="240" y="700" font-family="Arial" font-size="16" fill="#ffffff">Could you hire a founder-mode operator instead?</text>
            <text x="240" y="730" font-family="Arial" font-size="15" fill="#888">- Did you actually run the search?</text>
            <text x="240" y="755" font-family="Arial" font-size="15" fill="#888">- Or is "no one good enough" untested?</text>
            <text x="240" y="785" font-family="Arial" font-size="14" font-style="italic" fill="#10b981">If you didn't even try - you don't know the answer.</text>
            <rect x="200" y="850" width="700" height="170" rx="15" fill="#10b981" opacity="0.2" stroke="#10b981" stroke-width="3"/>
            <text x="550" y="895" font-family="Arial" font-size="22" font-weight="bold" fill="#10b981" text-anchor="middle">All three YES = Justified re-entry</text>
            <text x="550" y="930" font-family="Arial" font-size="18" font-weight="bold" fill="#ef4444" text-anchor="middle">Any NO = Probably a trap</text>
            <text x="550" y="980" font-family="Arial" font-size="15" font-style="italic" fill="#ffffff" text-anchor="middle">Time-based rules ("under 6 weeks is fine") don't work.</text>
            <text x="550" y="1005" font-family="Arial" font-size="15" font-style="italic" fill="#ffffff" text-anchor="middle">"Founder gets a free pass" doesn't work. Substance does.</text>
          </svg>`,
          caption: "Three gates. All three must pass. Time and founder-status are not the test."
        }
      },
      {
        type: "application",
        title: "Write Your Re-entry Protocol",
        content: `Don't wait for the next crisis to figure out how you'll handle re-entry. Write it now, when you're calm. Print it. Tape it next to your monitor.

**Part 1 — The "I'm About to Re-enter" Pause (5 questions).**
Before you commit to re-entering any operational work for more than two weeks, answer these in writing:

1. **What's the trigger?** (Crisis / new product / ego fix / identity void / empty calendar — be brutally honest)
2. **What's the business case in one sentence?** (No "energy" or "morale" allowed.)
3. **Who else could do this?** (List 3 names — internal hires, contractors, new GM candidates. If you can't name 3, you haven't looked.)
4. **What's the exit signal?** (Specific metric, event, or date. Written.)
5. **Who has permission to call my BS?** (Name one person — peer, COO, board member, coach.)

If you can't answer all five, you're not ready to re-enter.

**Part 2 — Build the "Trap Detector" with someone you trust.**
Schedule a 30-min call this week with your COO, a board member, or a peer. Tell them: "If you ever see me drifting back into operations, here's how to call it. The five traps are: crisis-stayed, new-product, ego-fix, identity-void, empty-calendar. Here's the signal for each. You have explicit permission to say 'you're in trap #3 right now.'" Write down their name and the date. This makes them an external audit.

**Part 3 — Identity void prevention.**
This is the trap most owners deny they have. Ask yourself: "Outside of my company, who am I?" If your answer is thin, that's your warning. Pick one of these to start within 90 days:
- Join a peer CEO group (YPO, Vistage, EO)
- Make 2-3 angel investments
- Write publicly (LinkedIn, a newsletter, a book chapter)
- Mentor 2 founders formally
- Join a non-profit board

You're not doing these for the resume. You're building scaffolding for the version of you that isn't defined by being in the work.

**Part 4 — The annual re-entry audit.**
Once a year, look at your calendar for the past 12 months. Highlight every operational task you did. Ask: "Was this me being uniquely valuable, or was this me in a trap?" If more than 20% of your time was trap-driven, you have work to do.

**The bottom line:** the question isn't *whether* you'll feel the pull back to operations. You will. The question is whether you'll have the rules in place when you do.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="75" font-family="Arial" font-size="34" font-weight="bold" fill="#ffd700" text-anchor="middle">Your Re-entry Protocol — One Page</text>
            <text x="550" y="115" font-family="Arial" font-size="18" fill="#888" text-anchor="middle">Print it. Tape it next to your monitor.</text>
            <rect x="60" y="160" width="500" height="380" rx="12" fill="#6366f1" opacity="0.15" stroke="#6366f1" stroke-width="2"/>
            <text x="80" y="200" font-family="Arial" font-size="20" font-weight="bold" fill="#ffd700">PART 1: The 5 Questions</text>
            <text x="80" y="230" font-family="Arial" font-size="14" fill="#888">(Answer in writing before any re-entry &gt;2 weeks)</text>
            <text x="85" y="270" font-family="Arial" font-size="15" fill="#ffffff">1. What's the trigger?</text>
            <text x="105" y="295" font-family="Arial" font-size="13" fill="#888">Crisis / new product / ego / identity / calendar</text>
            <text x="85" y="330" font-family="Arial" font-size="15" fill="#ffffff">2. Business case in ONE sentence?</text>
            <text x="105" y="355" font-family="Arial" font-size="13" fill="#888">No "energy" or "morale" allowed.</text>
            <text x="85" y="390" font-family="Arial" font-size="15" fill="#ffffff">3. Three other names who could do this?</text>
            <text x="105" y="415" font-family="Arial" font-size="13" fill="#888">Can't name 3 = haven't looked.</text>
            <text x="85" y="450" font-family="Arial" font-size="15" fill="#ffffff">4. Exit signal (written, dated)?</text>
            <text x="105" y="475" font-family="Arial" font-size="13" fill="#888">Specific metric, not "feels right."</text>
            <text x="85" y="510" font-family="Arial" font-size="15" fill="#ffffff">5. Who can call my BS?</text>
            <text x="105" y="530" font-family="Arial" font-size="13" fill="#888">Name. Permission. Date.</text>
            <rect x="580" y="160" width="460" height="380" rx="12" fill="#ec4899" opacity="0.15" stroke="#ec4899" stroke-width="2"/>
            <text x="600" y="200" font-family="Arial" font-size="20" font-weight="bold" fill="#ffd700">PART 2: The Trap Detector</text>
            <text x="600" y="230" font-family="Arial" font-size="14" fill="#888">(30-min call this week)</text>
            <text x="600" y="275" font-family="Arial" font-size="15" fill="#ffffff">Schedule with: COO, board, peer, coach</text>
            <text x="600" y="320" font-family="Arial" font-size="15" fill="#ffffff">Brief them on the 5 traps:</text>
            <text x="620" y="350" font-family="Arial" font-size="14" fill="#ef4444">- Crisis-stayed</text>
            <text x="620" y="375" font-family="Arial" font-size="14" fill="#f59e0b">- New product</text>
            <text x="620" y="400" font-family="Arial" font-size="14" fill="#8b5cf6">- Ego fix</text>
            <text x="620" y="425" font-family="Arial" font-size="14" fill="#ec4899">- Identity void</text>
            <text x="620" y="450" font-family="Arial" font-size="14" fill="#0ea5e9">- Empty calendar</text>
            <text x="600" y="490" font-family="Arial" font-size="15" font-weight="bold" fill="#10b981">Give them explicit permission:</text>
            <text x="600" y="515" font-family="Arial" font-size="14" font-style="italic" fill="#ffffff">"Tell me 'you're in trap #3 right now.'"</text>
            <rect x="60" y="560" width="500" height="320" rx="12" fill="#10b981" opacity="0.15" stroke="#10b981" stroke-width="2"/>
            <text x="80" y="600" font-family="Arial" font-size="20" font-weight="bold" fill="#ffd700">PART 3: Identity Void Prevention</text>
            <text x="80" y="630" font-family="Arial" font-size="14" fill="#888">(Pick ONE, start within 90 days)</text>
            <circle cx="100" cy="670" r="6" fill="#10b981"/>
            <text x="115" y="675" font-family="Arial" font-size="15" fill="#ffffff">Peer CEO group (YPO / Vistage / EO)</text>
            <circle cx="100" cy="705" r="6" fill="#10b981"/>
            <text x="115" y="710" font-family="Arial" font-size="15" fill="#ffffff">2-3 angel investments</text>
            <circle cx="100" cy="740" r="6" fill="#10b981"/>
            <text x="115" y="745" font-family="Arial" font-size="15" fill="#ffffff">Write publicly (newsletter, LinkedIn)</text>
            <circle cx="100" cy="775" r="6" fill="#10b981"/>
            <text x="115" y="780" font-family="Arial" font-size="15" fill="#ffffff">Formally mentor 2 founders</text>
            <circle cx="100" cy="810" r="6" fill="#10b981"/>
            <text x="115" y="815" font-family="Arial" font-size="15" fill="#ffffff">Join a non-profit board</text>
            <text x="80" y="855" font-family="Arial" font-size="13" font-style="italic" fill="#888">Not for the resume. For the scaffolding.</text>
            <rect x="580" y="560" width="460" height="320" rx="12" fill="#f59e0b" opacity="0.15" stroke="#f59e0b" stroke-width="2"/>
            <text x="600" y="600" font-family="Arial" font-size="20" font-weight="bold" fill="#ffd700">PART 4: Annual Audit</text>
            <text x="600" y="630" font-family="Arial" font-size="14" fill="#888">(Once a year, calendar review)</text>
            <text x="600" y="675" font-family="Arial" font-size="15" fill="#ffffff">Highlight every operational task</text>
            <text x="600" y="700" font-family="Arial" font-size="15" fill="#ffffff">you did over 12 months.</text>
            <text x="600" y="745" font-family="Arial" font-size="15" fill="#ffffff">Tag each: uniquely valuable</text>
            <text x="600" y="770" font-family="Arial" font-size="15" fill="#ffffff">or trap-driven?</text>
            <text x="600" y="820" font-family="Arial" font-size="16" font-weight="bold" fill="#ef4444">If &gt;20% trap-driven:</text>
            <text x="600" y="850" font-family="Arial" font-size="14" fill="#ffffff">You have work to do.</text>
            <rect x="200" y="920" width="700" height="120" rx="15" fill="#ffd700" opacity="0.15" stroke="#ffd700" stroke-width="3"/>
            <text x="550" y="965" font-family="Arial" font-size="20" font-weight="bold" fill="#ffd700" text-anchor="middle">The question isn't WHETHER you'll feel the pull.</text>
            <text x="550" y="1005" font-family="Arial" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">It's whether you'll have the rules in place when you do.</text>
          </svg>`,
          caption: "Four parts. Write them now. Use them when the pull hits — and it will."
        }
      }
    ]
  },
  {
    id: "operator-to-owner-lesson-12",
    title: "The Owner's Calendar — Life After the Exit",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "What Should Your Week Even Look Like?",
        content: `You delegated. You installed the trust-and-verify system. You wrote the re-entry protocol. Now comes the strangest question of all: **what should I actually do with my time?**

Most owners can't answer this. They've been operators for so long that "owner work" feels abstract. They show up Monday morning with 30 unstructured hours and no idea how to fill them productively. Within weeks they either rebound into operations (Lesson 11's traps) or burn six months pretending to "work on the business" while actually checking the dashboard 40 times a day and calling it strategy.

Paul Graham wrote a now-famous essay called *Maker's Schedule, Manager's Schedule* — about how makers (engineers, writers) need long uninterrupted blocks, while managers operate in 30-minute chunks. There's a third schedule he didn't write about: the **owner's schedule**. It's neither maker nor manager. It's mostly *thinking, asking, learning, and making a small number of high-leverage decisions* — interspersed with deliberate connection to the business so you don't lose your edge.

The owner's job, done right, looks lazy from the outside. You spend three hours reading a competitor's annual report. You take a 90-minute walk thinking about pricing. You have a two-hour lunch with a customer who churned. You write a one-page memo that reshapes the next quarter. People who don't understand the role will think you're slacking. Your team — if you've built the right one — will be relieved that you're finally doing the work only you can do.

This lesson gives you a concrete weekly template, the five categories that should fill 80% of your time, and the closing reframe: **this isn't retiring from your business. It's becoming what your business actually needs you to be at this stage.**`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="75" font-family="Arial" font-size="36" font-weight="bold" fill="#ffd700" text-anchor="middle">Three Schedules</text>
            <text x="550" y="120" font-family="Arial" font-size="18" fill="#888" text-anchor="middle">Maker / Manager / Owner — each runs on different time</text>
            <rect x="60" y="180" width="320" height="680" rx="15" fill="#0ea5e9" opacity="0.15" stroke="#0ea5e9" stroke-width="3"/>
            <text x="220" y="225" font-family="Arial" font-size="22" font-weight="bold" fill="#0ea5e9" text-anchor="middle">MAKER</text>
            <text x="220" y="252" font-family="Arial" font-size="14" fill="#888" text-anchor="middle">(Graham, 2009)</text>
            <text x="220" y="290" font-family="Arial" font-size="15" fill="#ffffff" text-anchor="middle">Engineers, writers, designers</text>
            <text x="80" y="340" font-family="Arial" font-size="15" font-weight="bold" fill="#ffd700">Unit of time:</text>
            <text x="80" y="368" font-family="Arial" font-size="14" fill="#ffffff">4-hour blocks</text>
            <text x="80" y="410" font-family="Arial" font-size="15" font-weight="bold" fill="#ffd700">Killer:</text>
            <text x="80" y="438" font-family="Arial" font-size="14" fill="#ffffff">Any meeting destroys</text>
            <text x="80" y="458" font-family="Arial" font-size="14" fill="#ffffff">an entire afternoon</text>
            <rect x="80" y="490" width="280" height="100" fill="#0ea5e9" opacity="0.4"/>
            <rect x="80" y="600" width="280" height="100" fill="#0ea5e9" opacity="0.4"/>
            <text x="220" y="545" font-family="Arial" font-size="14" fill="#ffffff" text-anchor="middle">MAKE</text>
            <text x="220" y="655" font-family="Arial" font-size="14" fill="#ffffff" text-anchor="middle">MAKE</text>
            <text x="80" y="730" font-family="Arial" font-size="15" font-weight="bold" fill="#ffd700">Output:</text>
            <text x="80" y="758" font-family="Arial" font-size="14" fill="#ffffff">Code, prose, designs</text>
            <text x="80" y="810" font-family="Arial" font-size="13" font-style="italic" fill="#888">Looks busy from outside</text>
            <text x="80" y="835" font-family="Arial" font-size="13" font-style="italic" fill="#888">because they ARE busy.</text>
            <rect x="390" y="180" width="320" height="680" rx="15" fill="#f59e0b" opacity="0.15" stroke="#f59e0b" stroke-width="3"/>
            <text x="550" y="225" font-family="Arial" font-size="22" font-weight="bold" fill="#f59e0b" text-anchor="middle">MANAGER</text>
            <text x="550" y="252" font-family="Arial" font-size="14" fill="#888" text-anchor="middle">(traditional exec)</text>
            <text x="550" y="290" font-family="Arial" font-size="15" fill="#ffffff" text-anchor="middle">Directors, VPs, ops leads</text>
            <text x="410" y="340" font-family="Arial" font-size="15" font-weight="bold" fill="#ffd700">Unit of time:</text>
            <text x="410" y="368" font-family="Arial" font-size="14" fill="#ffffff">30-min meetings</text>
            <text x="410" y="410" font-family="Arial" font-size="15" font-weight="bold" fill="#ffd700">Killer:</text>
            <text x="410" y="438" font-family="Arial" font-size="14" fill="#ffffff">Long focus blocks feel</text>
            <text x="410" y="458" font-family="Arial" font-size="14" fill="#ffffff">wasteful and lonely</text>
            <rect x="410" y="490" width="280" height="22" fill="#f59e0b" opacity="0.4"/>
            <rect x="410" y="515" width="280" height="22" fill="#f59e0b" opacity="0.5"/>
            <rect x="410" y="540" width="280" height="22" fill="#f59e0b" opacity="0.4"/>
            <rect x="410" y="565" width="280" height="22" fill="#f59e0b" opacity="0.5"/>
            <rect x="410" y="590" width="280" height="22" fill="#f59e0b" opacity="0.4"/>
            <rect x="410" y="615" width="280" height="22" fill="#f59e0b" opacity="0.5"/>
            <rect x="410" y="640" width="280" height="22" fill="#f59e0b" opacity="0.4"/>
            <rect x="410" y="665" width="280" height="22" fill="#f59e0b" opacity="0.5"/>
            <rect x="410" y="690" width="280" height="22" fill="#f59e0b" opacity="0.4"/>
            <text x="410" y="745" font-family="Arial" font-size="15" font-weight="bold" fill="#ffd700">Output:</text>
            <text x="410" y="773" font-family="Arial" font-size="14" fill="#ffffff">Decisions, unblocking</text>
            <text x="410" y="810" font-family="Arial" font-size="13" font-style="italic" fill="#888">Calendar full to overflowing.</text>
            <text x="410" y="835" font-family="Arial" font-size="13" font-style="italic" fill="#888">Default operator mode.</text>
            <rect x="720" y="180" width="320" height="680" rx="15" fill="#10b981" opacity="0.15" stroke="#10b981" stroke-width="3"/>
            <text x="880" y="225" font-family="Arial" font-size="22" font-weight="bold" fill="#10b981" text-anchor="middle">OWNER</text>
            <text x="880" y="252" font-family="Arial" font-size="14" fill="#888" text-anchor="middle">(this lesson)</text>
            <text x="880" y="290" font-family="Arial" font-size="15" fill="#ffffff" text-anchor="middle">Founder/CEO post-exit-from-ops</text>
            <text x="740" y="340" font-family="Arial" font-size="15" font-weight="bold" fill="#ffd700">Unit of time:</text>
            <text x="740" y="368" font-family="Arial" font-size="14" fill="#ffffff">Half-days + reflection</text>
            <text x="740" y="410" font-family="Arial" font-size="15" font-weight="bold" fill="#ffd700">Killer:</text>
            <text x="740" y="438" font-family="Arial" font-size="14" fill="#ffffff">Looking too "busy" to</text>
            <text x="740" y="458" font-family="Arial" font-size="14" fill="#ffffff">think; or too "free" to act</text>
            <rect x="740" y="490" width="280" height="50" fill="#10b981" opacity="0.4"/>
            <text x="880" y="520" font-family="Arial" font-size="12" fill="#ffffff" text-anchor="middle">THINK</text>
            <rect x="740" y="545" width="280" height="30" fill="#10b981" opacity="0.6"/>
            <text x="880" y="565" font-family="Arial" font-size="12" fill="#ffffff" text-anchor="middle">1:1</text>
            <rect x="740" y="580" width="280" height="50" fill="#10b981" opacity="0.4"/>
            <text x="880" y="610" font-family="Arial" font-size="12" fill="#ffffff" text-anchor="middle">LEARN</text>
            <rect x="740" y="635" width="280" height="30" fill="#10b981" opacity="0.6"/>
            <text x="880" y="655" font-family="Arial" font-size="12" fill="#ffffff" text-anchor="middle">CUSTOMER</text>
            <rect x="740" y="670" width="280" height="40" fill="#10b981" opacity="0.4"/>
            <text x="880" y="695" font-family="Arial" font-size="12" fill="#ffffff" text-anchor="middle">WRITE / DECIDE</text>
            <text x="740" y="745" font-family="Arial" font-size="15" font-weight="bold" fill="#ffd700">Output:</text>
            <text x="740" y="773" font-family="Arial" font-size="14" fill="#ffffff">A few big bets per quarter</text>
            <text x="740" y="810" font-family="Arial" font-size="13" font-style="italic" fill="#888">Looks slow from outside.</text>
            <text x="740" y="835" font-family="Arial" font-size="13" font-style="italic" fill="#888">Compounds over years.</text>
            <text x="550" y="945" font-family="Arial" font-size="20" font-weight="bold" fill="#ffd700" text-anchor="middle">The owner's job is the most misunderstood role in business.</text>
            <text x="550" y="985" font-family="Arial" font-size="16" fill="#888" text-anchor="middle">It looks lazy until you measure outcomes.</text>
            <text x="550" y="1030" font-family="Arial" font-size="16" font-style="italic" fill="#0ea5e9" text-anchor="middle">"Solitude and long thinking are the work, not procrastination." — Bezos</text>
          </svg>`,
          caption: "Maker vs. Manager (Graham, 2009) vs. Owner. Different schedule, different output, different look."
        }
      },
      {
        type: "concept",
        title: "The Five Categories of Owner Work",
        content: `Eighty percent of an owner's productive time should fall into these five categories. The other 20% is rest, optionality, and serendipity — which are also work.

**Category 1: Strategic Thinking Blocks (25-30%).**
Long, uninterrupted time to think about the business at altitude. Where is the market going? What's our right-to-win in two years? Which products are we secretly underinvesting in? This is the work that produces 2-page memos that reshape quarters. Tools: long walks, a notebook, no laptop, no phone. Bezos famously protects mornings for this. Buffett spends most of his day reading. **Block format:** 3-4 hour chunks, twice a week, ideally Tuesday and Thursday mornings.

**Category 2: Team — 1:1s and Talent (20-25%).**
Weekly 1:1s with each direct report (Lesson 10). Quarterly skip-levels with high-potentials two layers down. Recruiting top talent yourself — even when you have a head of recruiting, the best hires close because *you* called them on a Sunday afternoon. **Block format:** Wednesdays and Fridays — manager-mode days. Group your 1:1s so other days stay clear for thinking.

**Category 3: Board, Investors, Capital (10-15%).**
Board prep, board meetings, investor relations, financing decisions, M&A conversations. Most owners under-invest here until a crisis. Steady investment compounds: trust banked with the board in calm quarters spends well in hard ones. **Block format:** one half-day per week, plus quarterly board prep weeks.

**Category 4: Customer Development (15-20%).**
You should still talk to customers — but for *insight*, not service. Five customer conversations per week: two with happy ones, two with churned/at-risk ones, one with a prospect. You're listening for what's changing, what's missing, where the market is pulling. This is where strategic insight comes from, not from internal meetings. **Block format:** lunches, dinners, and 30-min Zoom slots scattered through the week. Founders who lose touch with customers within 12 months stop being able to lead strategy.

**Category 5: Learning and Network (10-15%).**
Read three books a quarter. Talk to two other CEOs in your stage cohort each month. Attend one industry-adjacent conference per quarter. Take a class on something hard. Your job is to bring the outside in. If you only learn from inside your company, you become a closed system that slowly decays. **Block format:** Friday afternoons for reading. Monthly peer dinners. One annual deep-learning week (sabbatical-style).

**What's NOT on the list:** running the daily ops meeting, approving every hire below VP, doing QA on customer emails, jumping into engineering tickets. If you find yourself doing those, you've drifted back. Re-read Lesson 11.

The 80/20 rule for owner time: 80% in these five categories, 20% open. The open time is not slack — it's the strategic optionality that lets you respond to surprises without disrupting the core rhythm.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="70" font-family="Arial" font-size="34" font-weight="bold" fill="#ffd700" text-anchor="middle">The Owner's Time Pie</text>
            <text x="550" y="115" font-family="Arial" font-size="17" fill="#888" text-anchor="middle">Five categories. 80% productive. 20% optionality.</text>
            <circle cx="380" cy="540" r="270" fill="none" stroke="#888" stroke-width="2"/>
            <path d="M 380 540 L 380 270 A 270 270 0 0 1 638 622 Z" fill="#6366f1" opacity="0.7"/>
            <path d="M 380 540 L 638 622 A 270 270 0 0 1 500 783 Z" fill="#10b981" opacity="0.7"/>
            <path d="M 380 540 L 500 783 A 270 270 0 0 1 282 795 Z" fill="#f59e0b" opacity="0.7"/>
            <path d="M 380 540 L 282 795 A 270 270 0 0 1 130 470 Z" fill="#ec4899" opacity="0.7"/>
            <path d="M 380 540 L 130 470 A 270 270 0 0 1 240 312 Z" fill="#0ea5e9" opacity="0.7"/>
            <path d="M 380 540 L 240 312 A 270 270 0 0 1 380 270 Z" fill="#888" opacity="0.5"/>
            <text x="500" y="430" font-family="Arial" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">Strategic</text>
            <text x="500" y="450" font-family="Arial" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">Think</text>
            <text x="500" y="470" font-family="Arial" font-size="13" fill="#ffffff" text-anchor="middle">25-30%</text>
            <text x="540" y="640" font-family="Arial" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">Team</text>
            <text x="540" y="660" font-family="Arial" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">+ Talent</text>
            <text x="540" y="680" font-family="Arial" font-size="13" fill="#ffffff" text-anchor="middle">20-25%</text>
            <text x="380" y="710" font-family="Arial" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">Customer</text>
            <text x="380" y="730" font-family="Arial" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">Dev</text>
            <text x="380" y="750" font-family="Arial" font-size="13" fill="#ffffff" text-anchor="middle">15-20%</text>
            <text x="220" y="630" font-family="Arial" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">Board</text>
            <text x="220" y="650" font-family="Arial" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">+ Capital</text>
            <text x="220" y="670" font-family="Arial" font-size="13" fill="#ffffff" text-anchor="middle">10-15%</text>
            <text x="230" y="430" font-family="Arial" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">Learning</text>
            <text x="230" y="450" font-family="Arial" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">+ Network</text>
            <text x="230" y="470" font-family="Arial" font-size="13" fill="#ffffff" text-anchor="middle">10-15%</text>
            <text x="320" y="345" font-family="Arial" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">Open 20%</text>
            <rect x="700" y="180" width="340" height="100" rx="10" fill="#6366f1" opacity="0.2" stroke="#6366f1" stroke-width="2"/>
            <text x="720" y="210" font-family="Arial" font-size="16" font-weight="bold" fill="#6366f1">1. Strategic Thinking (25-30%)</text>
            <text x="720" y="235" font-family="Arial" font-size="13" fill="#ffffff">3-4 hr blocks, twice/week, Tue + Thu AM</text>
            <text x="720" y="258" font-family="Arial" font-size="13" fill="#888">Walks, notebooks, no devices. Bezos mornings.</text>
            <rect x="700" y="290" width="340" height="100" rx="10" fill="#10b981" opacity="0.2" stroke="#10b981" stroke-width="2"/>
            <text x="720" y="320" font-family="Arial" font-size="16" font-weight="bold" fill="#10b981">2. Team + Talent (20-25%)</text>
            <text x="720" y="345" font-family="Arial" font-size="13" fill="#ffffff">1:1s, skip-levels, recruiting closes</text>
            <text x="720" y="368" font-family="Arial" font-size="13" fill="#888">Group on Wed + Fri. Best hires need YOUR call.</text>
            <rect x="700" y="400" width="340" height="100" rx="10" fill="#ec4899" opacity="0.2" stroke="#ec4899" stroke-width="2"/>
            <text x="720" y="430" font-family="Arial" font-size="16" font-weight="bold" fill="#ec4899">3. Board + Capital (10-15%)</text>
            <text x="720" y="455" font-family="Arial" font-size="13" fill="#ffffff">Half-day/week, plus quarterly prep weeks</text>
            <text x="720" y="478" font-family="Arial" font-size="13" fill="#888">Bank trust in calm; spend in storms.</text>
            <rect x="700" y="510" width="340" height="100" rx="10" fill="#f59e0b" opacity="0.2" stroke="#f59e0b" stroke-width="2"/>
            <text x="720" y="540" font-family="Arial" font-size="16" font-weight="bold" fill="#f59e0b">4. Customer Dev (15-20%)</text>
            <text x="720" y="565" font-family="Arial" font-size="13" fill="#ffffff">5 convos/week: 2 happy, 2 churned, 1 prospect</text>
            <text x="720" y="588" font-family="Arial" font-size="13" fill="#888">Lose customer touch = lose strategic edge.</text>
            <rect x="700" y="620" width="340" height="100" rx="10" fill="#0ea5e9" opacity="0.2" stroke="#0ea5e9" stroke-width="2"/>
            <text x="720" y="650" font-family="Arial" font-size="16" font-weight="bold" fill="#0ea5e9">5. Learning + Network (10-15%)</text>
            <text x="720" y="675" font-family="Arial" font-size="13" fill="#ffffff">3 books/qtr. 2 peer CEOs/mo. 1 sabbatical/yr.</text>
            <text x="720" y="698" font-family="Arial" font-size="13" fill="#888">Bring the outside in. Closed systems decay.</text>
            <rect x="80" y="850" width="940" height="200" rx="15" fill="#ef4444" opacity="0.15" stroke="#ef4444" stroke-width="2"/>
            <text x="550" y="890" font-family="Arial" font-size="20" font-weight="bold" fill="#ef4444" text-anchor="middle">What is NOT on the owner's list</text>
            <text x="120" y="925" font-family="Arial" font-size="15" fill="#ffffff">- Daily ops standup</text>
            <text x="120" y="955" font-family="Arial" font-size="15" fill="#ffffff">- Approving hires below VP level</text>
            <text x="120" y="985" font-family="Arial" font-size="15" fill="#ffffff">- QC on customer emails</text>
            <text x="120" y="1015" font-family="Arial" font-size="15" fill="#ffffff">- Engineering tickets / code reviews</text>
            <text x="600" y="925" font-family="Arial" font-size="15" fill="#ffffff">- Inbox triage (your EA does it)</text>
            <text x="600" y="955" font-family="Arial" font-size="15" fill="#ffffff">- Sales calls (unless a top-10 account)</text>
            <text x="600" y="985" font-family="Arial" font-size="15" fill="#ffffff">- Vendor contract reviews</text>
            <text x="600" y="1015" font-family="Arial" font-size="15" font-style="italic" fill="#ffd700">If you find yourself there - re-read Lesson 11.</text>
          </svg>`,
          caption: "Five categories cover 80% of an owner's productive time. The other 20% is strategic optionality."
        }
      },
      {
        type: "example",
        title: "An Actual Owner's Week (Annotated)",
        content: `Here's the actual weekly template used by a $50M services-business owner who exited day-to-day ops 18 months ago. Names changed; structure preserved.

**MONDAY — "Numbers + Set the Week"**
- 7:00-8:00 AM: workout / no screens
- 8:00-9:00 AM: read dashboards (sales, ops, finance, people). Note red/yellow flags.
- 9:00-10:30 AM: leadership team weekly sync (she runs it; agenda fixed: numbers, blockers, big decisions)
- 10:30 AM-12:00 PM: open block (catch-up, follow-ups from the meeting)
- 12:00-1:30 PM: lunch with a customer (rotates weekly — happy, churned, prospect)
- 1:30-5:00 PM: **strategic thinking block** — currently working on a 5-page memo about geographic expansion
- 5:00 PM onward: off

**TUESDAY — "Think + Build"**
- 7:00-9:00 AM: reading (currently *The Outsiders* by Thorndike, second time)
- 9:00 AM-12:30 PM: **deep strategic block** — long walk, notebook only, then writing
- 12:30-2:00 PM: lunch alone or with one peer CEO
- 2:00-3:00 PM: COO 1:1 (60 min, she owns agenda)
- 3:00-4:00 PM: CFO 1:1
- 4:00-5:00 PM: open / Friday-note prep
- 5:00 PM onward: off (Tuesday is sacred — no evening events)

**WEDNESDAY — "Team Day"**
- 8:00-9:00 AM: workout
- 9:00-10:00 AM: VP Sales 1:1
- 10:00-11:00 AM: VP Engineering 1:1
- 11:00 AM-12:00 PM: VP Customer Success 1:1
- 12:00-1:30 PM: lunch with a high-potential two layers down (rotates monthly)
- 1:30-3:00 PM: recruiting (a recruit close call, a debrief on an interview loop, etc.)
- 3:00-5:00 PM: open + reactive (Slack, urgent decisions, whatever needs her)

**THURSDAY — "Outside-In Day"**
- 7:00-9:00 AM: reading + a long walk
- 9:00 AM-12:00 PM: **strategic thinking block** (rotates: competitor analysis, market trends, product strategy)
- 12:00-1:30 PM: lunch with a prospect or industry connection
- 1:30-3:30 PM: customer conversations (3 x 30-min Zoom — typically churned customers or NPS detractors)
- 3:30-5:00 PM: writing — her quarterly investor letter or a board memo

**FRIDAY — "Close the Loop"**
- 8:00-10:00 AM: board prep, investor email, capital decisions
- 10:00-11:30 AM: open + decisions she'd batched all week ("Friday Decisions" doc)
- 11:30 AM-1:00 PM: lunch with a peer CEO or a mentor
- 1:00-3:00 PM: reading + reflection
- 3:00-3:30 PM: writes the Friday Note to the team (5-10 lines: what's tracking, what's off, what she decided, what she appreciated)
- 3:30 PM onward: off — weekend starts.

**Observations.** She has only ~12 hours of structured meetings per week. She has 16+ hours of explicit thinking and learning time. She talks to 4-6 customers a week. She does NOT touch the daily ops cadence — her COO runs that. She doesn't read every email — her EA filters to ~15/day. When she breaks this template (which she does a few weeks a year for travel, board cycles, or crises), she returns to it deliberately. The template is the default; deviations are deliberate.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="55" font-family="Arial" font-size="30" font-weight="bold" fill="#ffd700" text-anchor="middle">An Owner's Week — Annotated Template</text>
            <text x="550" y="90" font-family="Arial" font-size="15" fill="#888" text-anchor="middle">$50M services CEO, 18 months post-exit from daily ops</text>
            <text x="180" y="135" font-family="Arial" font-size="16" font-weight="bold" fill="#ffd700" text-anchor="middle">MON</text>
            <text x="180" y="155" font-family="Arial" font-size="11" fill="#888" text-anchor="middle">Numbers + Set</text>
            <text x="350" y="135" font-family="Arial" font-size="16" font-weight="bold" fill="#ffd700" text-anchor="middle">TUE</text>
            <text x="350" y="155" font-family="Arial" font-size="11" fill="#888" text-anchor="middle">Think + Build</text>
            <text x="520" y="135" font-family="Arial" font-size="16" font-weight="bold" fill="#ffd700" text-anchor="middle">WED</text>
            <text x="520" y="155" font-family="Arial" font-size="11" fill="#888" text-anchor="middle">Team Day</text>
            <text x="690" y="135" font-family="Arial" font-size="16" font-weight="bold" fill="#ffd700" text-anchor="middle">THU</text>
            <text x="690" y="155" font-family="Arial" font-size="11" fill="#888" text-anchor="middle">Outside-In</text>
            <text x="860" y="135" font-family="Arial" font-size="16" font-weight="bold" fill="#ffd700" text-anchor="middle">FRI</text>
            <text x="860" y="155" font-family="Arial" font-size="11" fill="#888" text-anchor="middle">Close Loop</text>
            <text x="80" y="195" font-family="Arial" font-size="11" fill="#888" text-anchor="end">7-8a</text>
            <text x="80" y="225" font-family="Arial" font-size="11" fill="#888" text-anchor="end">8-9</text>
            <text x="80" y="255" font-family="Arial" font-size="11" fill="#888" text-anchor="end">9-10</text>
            <text x="80" y="285" font-family="Arial" font-size="11" fill="#888" text-anchor="end">10-11</text>
            <text x="80" y="315" font-family="Arial" font-size="11" fill="#888" text-anchor="end">11-12</text>
            <text x="80" y="345" font-family="Arial" font-size="11" fill="#888" text-anchor="end">12-1p</text>
            <text x="80" y="375" font-family="Arial" font-size="11" fill="#888" text-anchor="end">1-2</text>
            <text x="80" y="405" font-family="Arial" font-size="11" fill="#888" text-anchor="end">2-3</text>
            <text x="80" y="435" font-family="Arial" font-size="11" fill="#888" text-anchor="end">3-4</text>
            <text x="80" y="465" font-family="Arial" font-size="11" fill="#888" text-anchor="end">4-5</text>
            <rect x="100" y="180" width="160" height="28" fill="#888" opacity="0.4"/>
            <text x="180" y="200" font-family="Arial" font-size="11" fill="#ffffff" text-anchor="middle">workout</text>
            <rect x="100" y="210" width="160" height="28" fill="#ec4899" opacity="0.6"/>
            <text x="180" y="230" font-family="Arial" font-size="11" fill="#ffffff" text-anchor="middle">dashboards</text>
            <rect x="100" y="240" width="160" height="56" fill="#10b981" opacity="0.6"/>
            <text x="180" y="275" font-family="Arial" font-size="11" fill="#ffffff" text-anchor="middle">leadership sync</text>
            <rect x="100" y="298" width="160" height="42" fill="#888" opacity="0.3"/>
            <text x="180" y="324" font-family="Arial" font-size="11" fill="#ffffff" text-anchor="middle">open</text>
            <rect x="100" y="342" width="160" height="42" fill="#f59e0b" opacity="0.6"/>
            <text x="180" y="368" font-family="Arial" font-size="11" fill="#ffffff" text-anchor="middle">cust lunch</text>
            <rect x="100" y="386" width="160" height="98" fill="#6366f1" opacity="0.6"/>
            <text x="180" y="440" font-family="Arial" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">STRATEGIC THINK</text>
            <rect x="270" y="180" width="160" height="56" fill="#0ea5e9" opacity="0.6"/>
            <text x="350" y="215" font-family="Arial" font-size="11" fill="#ffffff" text-anchor="middle">reading</text>
            <rect x="270" y="238" width="160" height="100" fill="#6366f1" opacity="0.7"/>
            <text x="350" y="295" font-family="Arial" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">DEEP STRATEGIC</text>
            <rect x="270" y="340" width="160" height="42" fill="#0ea5e9" opacity="0.4"/>
            <text x="350" y="366" font-family="Arial" font-size="11" fill="#ffffff" text-anchor="middle">lunch + peer</text>
            <rect x="270" y="384" width="160" height="28" fill="#10b981" opacity="0.6"/>
            <text x="350" y="403" font-family="Arial" font-size="11" fill="#ffffff" text-anchor="middle">COO 1:1</text>
            <rect x="270" y="414" width="160" height="28" fill="#10b981" opacity="0.6"/>
            <text x="350" y="433" font-family="Arial" font-size="11" fill="#ffffff" text-anchor="middle">CFO 1:1</text>
            <rect x="270" y="444" width="160" height="40" fill="#888" opacity="0.3"/>
            <text x="350" y="468" font-family="Arial" font-size="11" fill="#ffffff" text-anchor="middle">open</text>
            <rect x="440" y="180" width="160" height="28" fill="#888" opacity="0.4"/>
            <text x="520" y="200" font-family="Arial" font-size="11" fill="#ffffff" text-anchor="middle">workout</text>
            <rect x="440" y="210" width="160" height="28" fill="#10b981" opacity="0.6"/>
            <text x="520" y="230" font-family="Arial" font-size="11" fill="#ffffff" text-anchor="middle">VP Sales 1:1</text>
            <rect x="440" y="240" width="160" height="28" fill="#10b981" opacity="0.6"/>
            <text x="520" y="260" font-family="Arial" font-size="11" fill="#ffffff" text-anchor="middle">VP Eng 1:1</text>
            <rect x="440" y="270" width="160" height="28" fill="#10b981" opacity="0.6"/>
            <text x="520" y="290" font-family="Arial" font-size="11" fill="#ffffff" text-anchor="middle">VP CS 1:1</text>
            <rect x="440" y="298" width="160" height="42" fill="#10b981" opacity="0.4"/>
            <text x="520" y="323" font-family="Arial" font-size="11" fill="#ffffff" text-anchor="middle">skip-level lunch</text>
            <rect x="440" y="342" width="160" height="42" fill="#10b981" opacity="0.5"/>
            <text x="520" y="367" font-family="Arial" font-size="11" fill="#ffffff" text-anchor="middle">recruiting</text>
            <rect x="440" y="386" width="160" height="98" fill="#888" opacity="0.3"/>
            <text x="520" y="438" font-family="Arial" font-size="11" fill="#ffffff" text-anchor="middle">open / react</text>
            <rect x="610" y="180" width="160" height="56" fill="#0ea5e9" opacity="0.6"/>
            <text x="690" y="215" font-family="Arial" font-size="11" fill="#ffffff" text-anchor="middle">reading + walk</text>
            <rect x="610" y="238" width="160" height="100" fill="#6366f1" opacity="0.7"/>
            <text x="690" y="295" font-family="Arial" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">STRATEGIC BLOCK</text>
            <rect x="610" y="340" width="160" height="42" fill="#f59e0b" opacity="0.6"/>
            <text x="690" y="366" font-family="Arial" font-size="11" fill="#ffffff" text-anchor="middle">prospect lunch</text>
            <rect x="610" y="384" width="160" height="56" fill="#f59e0b" opacity="0.5"/>
            <text x="690" y="416" font-family="Arial" font-size="11" fill="#ffffff" text-anchor="middle">3x customer calls</text>
            <rect x="610" y="442" width="160" height="42" fill="#ec4899" opacity="0.4"/>
            <text x="690" y="467" font-family="Arial" font-size="11" fill="#ffffff" text-anchor="middle">writing</text>
            <rect x="780" y="180" width="160" height="56" fill="#ec4899" opacity="0.6"/>
            <text x="860" y="215" font-family="Arial" font-size="11" fill="#ffffff" text-anchor="middle">board / capital</text>
            <rect x="780" y="238" width="160" height="42" fill="#888" opacity="0.4"/>
            <text x="860" y="264" font-family="Arial" font-size="11" fill="#ffffff" text-anchor="middle">batched decisions</text>
            <rect x="780" y="282" width="160" height="58" fill="#0ea5e9" opacity="0.4"/>
            <text x="860" y="315" font-family="Arial" font-size="11" fill="#ffffff" text-anchor="middle">peer / mentor</text>
            <rect x="780" y="342" width="160" height="56" fill="#0ea5e9" opacity="0.6"/>
            <text x="860" y="377" font-family="Arial" font-size="11" fill="#ffffff" text-anchor="middle">reading</text>
            <rect x="780" y="400" width="160" height="28" fill="#10b981" opacity="0.5"/>
            <text x="860" y="420" font-family="Arial" font-size="11" fill="#ffffff" text-anchor="middle">Friday note</text>
            <rect x="780" y="430" width="160" height="54" fill="#888" opacity="0.3"/>
            <text x="860" y="463" font-family="Arial" font-size="11" fill="#ffffff" text-anchor="middle">WEEKEND</text>
            <rect x="80" y="540" width="970" height="200" rx="15" fill="#ffd700" opacity="0.1" stroke="#ffd700" stroke-width="2"/>
            <text x="565" y="580" font-family="Arial" font-size="20" font-weight="bold" fill="#ffd700" text-anchor="middle">By the Numbers</text>
            <text x="170" y="625" font-family="Arial" font-size="38" font-weight="bold" fill="#6366f1" text-anchor="middle">12h</text>
            <text x="170" y="655" font-family="Arial" font-size="13" fill="#ffffff" text-anchor="middle">structured</text>
            <text x="170" y="673" font-family="Arial" font-size="13" fill="#ffffff" text-anchor="middle">meetings</text>
            <text x="370" y="625" font-family="Arial" font-size="38" font-weight="bold" fill="#0ea5e9" text-anchor="middle">16h+</text>
            <text x="370" y="655" font-family="Arial" font-size="13" fill="#ffffff" text-anchor="middle">thinking +</text>
            <text x="370" y="673" font-family="Arial" font-size="13" fill="#ffffff" text-anchor="middle">learning</text>
            <text x="570" y="625" font-family="Arial" font-size="38" font-weight="bold" fill="#f59e0b" text-anchor="middle">5</text>
            <text x="570" y="655" font-family="Arial" font-size="13" fill="#ffffff" text-anchor="middle">customer</text>
            <text x="570" y="673" font-family="Arial" font-size="13" fill="#ffffff" text-anchor="middle">conversations</text>
            <text x="770" y="625" font-family="Arial" font-size="38" font-weight="bold" fill="#10b981" text-anchor="middle">4</text>
            <text x="770" y="655" font-family="Arial" font-size="13" fill="#ffffff" text-anchor="middle">direct-report</text>
            <text x="770" y="673" font-family="Arial" font-size="13" fill="#ffffff" text-anchor="middle">1:1s</text>
            <text x="960" y="625" font-family="Arial" font-size="38" font-weight="bold" fill="#ec4899" text-anchor="middle">0</text>
            <text x="960" y="655" font-family="Arial" font-size="13" fill="#ffffff" text-anchor="middle">daily ops</text>
            <text x="960" y="673" font-family="Arial" font-size="13" fill="#ffffff" text-anchor="middle">touches</text>
            <text x="565" y="720" font-family="Arial" font-size="14" font-style="italic" fill="#888" text-anchor="middle">The template is the default. Deviations are deliberate, not drift.</text>
            <rect x="80" y="770" width="970" height="280" rx="15" fill="#1a1a2e" stroke="#888" stroke-width="2"/>
            <text x="565" y="810" font-family="Arial" font-size="18" font-weight="bold" fill="#ffd700" text-anchor="middle">Color legend</text>
            <rect x="120" y="830" width="20" height="20" fill="#6366f1" opacity="0.7"/>
            <text x="150" y="847" font-family="Arial" font-size="14" fill="#ffffff">Strategic Think</text>
            <rect x="120" y="860" width="20" height="20" fill="#10b981" opacity="0.6"/>
            <text x="150" y="877" font-family="Arial" font-size="14" fill="#ffffff">Team + Talent</text>
            <rect x="120" y="890" width="20" height="20" fill="#ec4899" opacity="0.6"/>
            <text x="150" y="907" font-family="Arial" font-size="14" fill="#ffffff">Board + Capital</text>
            <rect x="120" y="920" width="20" height="20" fill="#f59e0b" opacity="0.6"/>
            <text x="150" y="937" font-family="Arial" font-size="14" fill="#ffffff">Customer Dev</text>
            <rect x="120" y="950" width="20" height="20" fill="#0ea5e9" opacity="0.6"/>
            <text x="150" y="967" font-family="Arial" font-size="14" fill="#ffffff">Learning + Network</text>
            <rect x="120" y="980" width="20" height="20" fill="#888" opacity="0.4"/>
            <text x="150" y="997" font-family="Arial" font-size="14" fill="#ffffff">Open / personal</text>
            <text x="600" y="850" font-family="Arial" font-size="14" font-style="italic" fill="#ffffff">Tuesday is sacred — no evenings.</text>
            <text x="600" y="880" font-family="Arial" font-size="14" font-style="italic" fill="#ffffff">Friday Note: 5-10 lines to the team.</text>
            <text x="600" y="910" font-family="Arial" font-size="14" font-style="italic" fill="#ffffff">EA filters inbox to ~15 emails/day.</text>
            <text x="600" y="940" font-family="Arial" font-size="14" font-style="italic" fill="#ffffff">COO runs daily ops cadence.</text>
            <text x="600" y="970" font-family="Arial" font-size="14" font-style="italic" fill="#ffffff">When she breaks the template,</text>
            <text x="600" y="990" font-family="Arial" font-size="14" font-style="italic" fill="#ffffff">she returns to it deliberately.</text>
          </svg>`,
          caption: "An actual owner week. Notice: lots of think time, few meetings, daily ops untouched."
        }
      },
      {
        type: "quiz",
        title: "Quick Check",
        question: "You've adopted the owner-week template. Three months in, your direct reports tell you 'we miss your energy in the trenches — the team feels rudderless without you.' Which response is most aligned with the lessons from this book?",
        options: [
          { text: "Move back into operations — your team is telling you what they need. Trust their feedback over the template.", correct: false },
          { text: "Reject the feedback entirely — you're doing the right work, and the team needs to grow up.", correct: false },
          { text: "Probe what's actually missing: is it specific decisions, communication frequency, or someone's failure to lead? Strengthen team comms (e.g., Friday note, recorded all-hands video, town halls), make sure your 1:1s with execs are sharp — but do NOT default back to operations because of a vague feeling.", correct: true },
          { text: "Schedule daily standups with the whole team so they see you every morning.", correct: false }
        ],
        explanation: "This is exactly the kind of feedback that lures owners back into Trap #3 (Ego Fix). 'We miss your energy' is a feeling, not a business problem. The right move is to probe what's specifically missing — usually it's communication frequency (fix with Friday notes, monthly all-hands), decision velocity from execs (fix with 1:1 coaching), or a leadership gap somewhere in the org chart (fix by addressing the actual leader). Returning to operations would undo months of work and confuse the team further. Rejecting the feedback wholesale also misses the signal. Daily standups would be the worst response — it puts you back in the manager's schedule for symbolic reasons.",
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="75" font-family="Arial" font-size="32" font-weight="bold" fill="#ffd700" text-anchor="middle">"We miss your energy" — Decode It</text>
            <text x="550" y="120" font-family="Arial" font-size="17" fill="#888" text-anchor="middle">Feelings are signals, not orders</text>
            <rect x="300" y="170" width="500" height="100" rx="15" fill="#f59e0b" opacity="0.2" stroke="#f59e0b" stroke-width="3"/>
            <text x="550" y="210" font-family="Arial" font-size="20" font-style="italic" fill="#ffffff" text-anchor="middle">"We miss your energy in the trenches."</text>
            <text x="550" y="245" font-family="Arial" font-size="15" fill="#888" text-anchor="middle">A vague feeling. What's actually behind it?</text>
            <line x1="550" y1="280" x2="200" y2="340" stroke="#888" stroke-width="2"/>
            <line x1="550" y1="280" x2="550" y2="340" stroke="#888" stroke-width="2"/>
            <line x1="550" y1="280" x2="900" y2="340" stroke="#888" stroke-width="2"/>
            <rect x="60" y="340" width="280" height="280" rx="12" fill="#0ea5e9" opacity="0.15" stroke="#0ea5e9" stroke-width="2"/>
            <text x="200" y="375" font-family="Arial" font-size="17" font-weight="bold" fill="#0ea5e9" text-anchor="middle">Comms Gap</text>
            <text x="80" y="410" font-family="Arial" font-size="14" fill="#ffffff">Team doesn't hear from you</text>
            <text x="80" y="435" font-family="Arial" font-size="14" fill="#ffffff">enough about direction.</text>
            <text x="80" y="475" font-family="Arial" font-size="14" font-weight="bold" fill="#10b981">Fix:</text>
            <text x="80" y="500" font-family="Arial" font-size="13" fill="#ffffff">- Friday note to all</text>
            <text x="80" y="525" font-family="Arial" font-size="13" fill="#ffffff">- Monthly all-hands</text>
            <text x="80" y="550" font-family="Arial" font-size="13" fill="#ffffff">- Recorded video updates</text>
            <text x="80" y="580" font-family="Arial" font-size="13" fill="#ffffff">- Open-office hours</text>
            <text x="80" y="610" font-family="Arial" font-size="12" font-style="italic" fill="#888">NOT: return to ops.</text>
            <rect x="410" y="340" width="280" height="280" rx="12" fill="#6366f1" opacity="0.15" stroke="#6366f1" stroke-width="2"/>
            <text x="550" y="375" font-family="Arial" font-size="17" font-weight="bold" fill="#6366f1" text-anchor="middle">Decision Velocity</text>
            <text x="430" y="410" font-family="Arial" font-size="14" fill="#ffffff">Execs aren't deciding fast</text>
            <text x="430" y="435" font-family="Arial" font-size="14" fill="#ffffff">enough; team feels stuck.</text>
            <text x="430" y="475" font-family="Arial" font-size="14" font-weight="bold" fill="#10b981">Fix:</text>
            <text x="430" y="500" font-family="Arial" font-size="13" fill="#ffffff">- Coach execs in 1:1s</text>
            <text x="430" y="525" font-family="Arial" font-size="13" fill="#ffffff">- Clarify decision rights</text>
            <text x="430" y="550" font-family="Arial" font-size="13" fill="#ffffff">- "Friday Decisions" doc</text>
            <text x="430" y="575" font-family="Arial" font-size="13" fill="#ffffff">- Raise the velocity bar</text>
            <text x="430" y="610" font-family="Arial" font-size="12" font-style="italic" fill="#888">NOT: decide for them.</text>
            <rect x="760" y="340" width="280" height="280" rx="12" fill="#ec4899" opacity="0.15" stroke="#ec4899" stroke-width="2"/>
            <text x="900" y="375" font-family="Arial" font-size="17" font-weight="bold" fill="#ec4899" text-anchor="middle">Leadership Gap</text>
            <text x="780" y="410" font-family="Arial" font-size="14" fill="#ffffff">A specific leader isn't</text>
            <text x="780" y="435" font-family="Arial" font-size="14" fill="#ffffff">filling the role they own.</text>
            <text x="780" y="475" font-family="Arial" font-size="14" font-weight="bold" fill="#10b981">Fix:</text>
            <text x="780" y="500" font-family="Arial" font-size="13" fill="#ffffff">- Direct feedback to them</text>
            <text x="780" y="525" font-family="Arial" font-size="13" fill="#ffffff">- Coach or upgrade</text>
            <text x="780" y="550" font-family="Arial" font-size="13" fill="#ffffff">- Address it head-on</text>
            <text x="780" y="575" font-family="Arial" font-size="13" fill="#ffffff">- Don't paper over</text>
            <text x="780" y="610" font-family="Arial" font-size="12" font-style="italic" fill="#888">NOT: take over their job.</text>
            <rect x="60" y="660" width="980" height="180" rx="15" fill="#ef4444" opacity="0.15" stroke="#ef4444" stroke-width="3"/>
            <text x="550" y="700" font-family="Arial" font-size="20" font-weight="bold" fill="#ef4444" text-anchor="middle">The Wrong Response (and why)</text>
            <text x="100" y="735" font-family="Arial" font-size="15" fill="#ffffff">- Move back into operations - undoes months of work, confuses team about your role</text>
            <text x="100" y="765" font-family="Arial" font-size="15" fill="#ffffff">- Reject feedback entirely - misses real signal underneath the vague language</text>
            <text x="100" y="795" font-family="Arial" font-size="15" fill="#ffffff">- Daily standups with whole team - puts you back in manager-schedule for symbolic reasons</text>
            <text x="100" y="825" font-family="Arial" font-size="14" font-style="italic" fill="#ffd700">All three confuse "owner is present" with "owner is operating."</text>
            <rect x="200" y="880" width="700" height="160" rx="15" fill="#10b981" opacity="0.2" stroke="#10b981" stroke-width="3"/>
            <text x="550" y="925" font-family="Arial" font-size="20" font-weight="bold" fill="#10b981" text-anchor="middle">The Right Response</text>
            <text x="550" y="965" font-family="Arial" font-size="16" fill="#ffffff" text-anchor="middle">Probe specifically. Diagnose the actual gap.</text>
            <text x="550" y="995" font-family="Arial" font-size="16" fill="#ffffff" text-anchor="middle">Fix communication or leadership — NOT presence.</text>
            <text x="550" y="1025" font-family="Arial" font-size="15" font-style="italic" fill="#ffd700" text-anchor="middle">Vague feelings are signals, not orders.</text>
          </svg>`,
          caption: "Decode the feeling. Fix the actual gap. Don't undo months of progress for a vague signal."
        }
      },
      {
        type: "application",
        title: "Design Your Owner Week — and the Closing Reframe",
        content: `Stop reading. Open your calendar. Block these for next week — even imperfectly.

**Step 1 — Block the non-negotiables (10 min).**
Create recurring calendar events, labeled "DO NOT MOVE":
- Two 3-hour Strategic Thinking blocks (e.g., Tuesday 9am-12pm, Thursday 9am-12pm)
- Four 1:1s with direct reports (group on Wed + Fri morning)
- One half-day for board/capital work (e.g., Friday 8am-noon)
- Three 60-min customer conversations per week
- One reading block (e.g., Tuesday or Thursday 7-9am, or Friday 1-3pm)
- One Friday Note time (e.g., Friday 3:00-3:30pm)

That's your skeleton. About 20 hours of structured owner-work per week.

**Step 2 — Identify what falls off (10 min).**
Look at last week's calendar. Highlight everything that was operational work — daily standups, hiring loops below VP, email triage, ops fires. For each, decide: who picks it up? Do you have anyone? If not, what's the plan to hire/promote so you can?

**Step 3 — The "Pilot Week" experiment (next 7 days).**
Run the new template for one week. Resist re-entry. Take the long walks. Read the book. Talk to the customers. Notice what you feel: bored? guilty? underused? exposed? Those feelings are data — they tell you which traps from Lesson 11 you're most vulnerable to.

**Step 4 — Adjust, don't abandon (week 2-4).**
Most owners need 4-8 weeks to feel comfortable in the owner-week. The first week feels weird. The second week feels productive but lonely. By week 4, you'll either find a rhythm or realize you need to invest in identity (Lesson 11, Part 3).

---

**The Closing Reframe — What This Book Has Been About.**

You started with the Operator's Trap: the work that built the company became the thing holding it back. Across 12 lessons we built the system to escape it — bottleneck diagnosis, the delegation matrix, the org chart above you, the executive assistant, the brief, the 30/60/90 handoff, trust-and-verify, the re-entry protocol, and now the owner's week.

But the deepest shift wasn't about systems. It was about identity.

**This isn't retiring from your business.** It isn't slacking. It isn't "founder mode" vs. "manager mode" — that's a false binary. It's becoming what your business actually needs you to be at this stage of its life. A six-person company needs a founder who codes and sells. A sixty-person company needs a CEO who builds the team that codes and sells. A six-hundred-person company needs an owner who shapes the strategy, the capital, the culture — and trusts the team to execute.

You don't outgrow operations because you stop caring. You outgrow them because the business outgrew the version of you who did them.

**The work the business needs from you next is the work only you can do.** The strategic memo. The board relationship. The hire only you can close. The customer conversation that reveals a market shift. The long walk that produces the insight. The hard conversation with a senior leader. The capital decision. The vision refresh.

If you've done this work — really done it — your business is more valuable, more durable, and more able to outlive you than it was when you were the bottleneck. And paradoxically: when you finally let go of the work, the business often grows faster than it ever did under your daily hand.

That's the exit from the middle. Welcome to the top.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="75" font-family="Arial" font-size="34" font-weight="bold" fill="#ffd700" text-anchor="middle">Operator to Owner — The Arc</text>
            <text x="550" y="115" font-family="Arial" font-size="17" fill="#888" text-anchor="middle">12 lessons. One identity shift.</text>
            <line x1="100" y1="600" x2="1020" y2="600" stroke="#888" stroke-width="3"/>
            <circle cx="180" cy="600" r="40" fill="#ef4444" opacity="0.8"/>
            <text x="180" y="608" font-family="Arial" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">YOU</text>
            <text x="180" y="670" font-family="Arial" font-size="14" font-weight="bold" fill="#ef4444" text-anchor="middle">OPERATOR</text>
            <text x="180" y="695" font-family="Arial" font-size="12" fill="#888" text-anchor="middle">In every detail.</text>
            <text x="180" y="715" font-family="Arial" font-size="12" fill="#888" text-anchor="middle">The bottleneck.</text>
            <text x="180" y="540" font-family="Arial" font-size="14" fill="#ffffff" text-anchor="middle">Lessons 1-3</text>
            <text x="180" y="520" font-family="Arial" font-size="12" fill="#888" text-anchor="middle">Diagnose &amp; shift mindset</text>
            <circle cx="430" cy="600" r="40" fill="#f59e0b" opacity="0.8"/>
            <text x="430" y="608" font-family="Arial" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">YOU</text>
            <text x="430" y="670" font-family="Arial" font-size="14" font-weight="bold" fill="#f59e0b" text-anchor="middle">MANAGER</text>
            <text x="430" y="695" font-family="Arial" font-size="12" fill="#888" text-anchor="middle">Building team,</text>
            <text x="430" y="715" font-family="Arial" font-size="12" fill="#888" text-anchor="middle">delegating tasks.</text>
            <text x="430" y="540" font-family="Arial" font-size="14" fill="#ffffff" text-anchor="middle">Lessons 4-7</text>
            <text x="430" y="520" font-family="Arial" font-size="12" fill="#888" text-anchor="middle">Matrix, org, EA, value</text>
            <circle cx="680" cy="600" r="40" fill="#6366f1" opacity="0.8"/>
            <text x="680" y="608" font-family="Arial" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">YOU</text>
            <text x="680" y="670" font-family="Arial" font-size="14" font-weight="bold" fill="#6366f1" text-anchor="middle">LEADER</text>
            <text x="680" y="695" font-family="Arial" font-size="12" fill="#888" text-anchor="middle">Delegating systems,</text>
            <text x="680" y="715" font-family="Arial" font-size="12" fill="#888" text-anchor="middle">verifying outcomes.</text>
            <text x="680" y="540" font-family="Arial" font-size="14" fill="#ffffff" text-anchor="middle">Lessons 8-10</text>
            <text x="680" y="520" font-family="Arial" font-size="12" fill="#888" text-anchor="middle">Brief, handoff, trust+verify</text>
            <circle cx="930" cy="600" r="45" fill="#10b981" opacity="0.85"/>
            <text x="930" y="610" font-family="Arial" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">YOU</text>
            <text x="930" y="675" font-family="Arial" font-size="14" font-weight="bold" fill="#10b981" text-anchor="middle">OWNER</text>
            <text x="930" y="700" font-family="Arial" font-size="12" fill="#888" text-anchor="middle">Strategic, capital,</text>
            <text x="930" y="720" font-family="Arial" font-size="12" fill="#888" text-anchor="middle">vision, culture.</text>
            <text x="930" y="540" font-family="Arial" font-size="14" fill="#ffffff" text-anchor="middle">Lessons 11-12</text>
            <text x="930" y="520" font-family="Arial" font-size="12" fill="#888" text-anchor="middle">Traps, owner's week</text>
            <path d="M 220 600 L 390 600" stroke="#ffd700" stroke-width="3" marker-end="url(#arrow)"/>
            <path d="M 470 600 L 640 600" stroke="#ffd700" stroke-width="3" marker-end="url(#arrow)"/>
            <path d="M 720 600 L 880 600" stroke="#ffd700" stroke-width="3" marker-end="url(#arrow)"/>
            <defs>
              <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <polygon points="0 0, 10 3, 0 6" fill="#ffd700"/>
              </marker>
            </defs>
            <rect x="80" y="780" width="940" height="240" rx="20" fill="#ffd700" opacity="0.1" stroke="#ffd700" stroke-width="3"/>
            <text x="550" y="830" font-family="Arial" font-size="22" font-weight="bold" fill="#ffd700" text-anchor="middle">The Closing Reframe</text>
            <text x="550" y="875" font-family="Arial" font-size="17" fill="#ffffff" text-anchor="middle">This isn't retiring from your business.</text>
            <text x="550" y="905" font-family="Arial" font-size="17" fill="#ffffff" text-anchor="middle">It's becoming what your business needs you to be.</text>
            <text x="550" y="960" font-family="Arial" font-size="16" font-style="italic" fill="#10b981" text-anchor="middle">When you finally let go of the work,</text>
            <text x="550" y="990" font-family="Arial" font-size="16" font-style="italic" fill="#10b981" text-anchor="middle">the business often grows faster than it ever did under your hand.</text>
          </svg>`,
          caption: "Operator to Manager to Leader to Owner. The arc of 12 lessons. The closing reframe."
        }
      }
    ]
  }
]
};
