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

    const FUND_PLACEHOLDER_LESSONS = [
  {
    id: "nclex-fundamentals-lesson-1",
    title: "ABCs First: Airway, Breathing, Circulation Always Win",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "ABCs: The Universal NCLEX Priority Rule",
        content: `When the NCLEX asks **"which client should the nurse see first?"** or **"what is the priority action?"**, your first filter is always the **ABCs**: **Airway, Breathing, Circulation**.

This rule predates Maslow, predates ADPIE, and overrides almost every other framework on the exam. A patent **airway** beats a low blood pressure. Adequate **breathing** beats an arrhythmia. **Circulation** beats a fall risk or a medication error that has not yet caused harm.

The trick is recognizing which answer choice contains an ABC threat. Words like *stridor*, *wheezing*, *gurgling*, *cyanosis*, *SpO2 < 90%*, *respiratory rate < 10 or > 30*, *unresponsive*, and *no pulse* are direct ABC red flags.

In this lesson you will learn to scan question stems for ABC keywords and rank competing problems in seconds — the single highest-yield habit on the entire NCLEX.`,
        visual: {
          type: "diagram",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 1100"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="80" text-anchor="middle" fill="#ffd700" font-size="44" font-weight="bold">ABCs: Priority Ranking</text><text x="550" y="130" text-anchor="middle" fill="#888" font-size="22">The universal first filter on every NCLEX priority question</text><rect x="200" y="200" width="700" height="140" rx="14" fill="#ef4444" opacity="0.85"/><text x="550" y="260" text-anchor="middle" fill="#ffffff" font-size="40" font-weight="bold">A — AIRWAY</text><text x="550" y="305" text-anchor="middle" fill="#ffffff" font-size="22">Is air moving? Stridor, gurgling, obstruction = act now</text><rect x="200" y="380" width="700" height="140" rx="14" fill="#f59e0b" opacity="0.85"/><text x="550" y="440" text-anchor="middle" fill="#1a1a2e" font-size="40" font-weight="bold">B — BREATHING</text><text x="550" y="485" text-anchor="middle" fill="#1a1a2e" font-size="22">RR &lt; 10 or &gt; 30, SpO2 &lt; 90%, accessory muscles</text><rect x="200" y="560" width="700" height="140" rx="14" fill="#6366f1" opacity="0.85"/><text x="550" y="620" text-anchor="middle" fill="#ffffff" font-size="40" font-weight="bold">C — CIRCULATION</text><text x="550" y="665" text-anchor="middle" fill="#ffffff" font-size="22">No pulse, hypotension, active hemorrhage, cool/clammy</text><text x="550" y="780" text-anchor="middle" fill="#ffd700" font-size="26" font-weight="bold">Rule: a threat to A always beats B; B always beats C</text><text x="550" y="830" text-anchor="middle" fill="#ffffff" font-size="20">And any ABC threat beats every non-ABC problem on the screen</text><rect x="250" y="880" width="600" height="120" rx="10" fill="#10b981" opacity="0.25" stroke="#10b981" stroke-width="2"/><text x="550" y="925" text-anchor="middle" fill="#10b981" font-size="22" font-weight="bold">Scan stems for: stridor, cyanosis, gasping,</text><text x="550" y="960" text-anchor="middle" fill="#10b981" font-size="22" font-weight="bold">unresponsive, no pulse, SpO2 drop, RR extremes</text></svg>`,
          caption: "Airway always outranks Breathing, which always outranks Circulation."
        }
      },
      {
        type: "concept",
        title: "Spotting ABC Keywords in a Question Stem",
        content: `Every priority question hides its answer in **specific language**. Learn to scan for these triggers instead of reading every option twice.

**Airway triggers**: *stridor, crowing, snoring, gurgling, drooling (in pediatrics), tongue swelling, facial burns, foreign body*. Any of these means the airway is at imminent risk — pick that client first, no matter what the other distractors say.

**Breathing triggers**: *respiratory rate under 10 or over 30, SpO2 < 90%, use of accessory muscles, nasal flaring, retractions, tripod position, one-word sentences, new onset wheezing*. A patient breathing inadequately is minutes from coding.

**Circulation triggers**: *no palpable pulse, systolic BP < 90, capillary refill > 3 seconds, frank bleeding, chest pain with diaphoresis, mottling*. These signal shock or arrest.

Non-ABC distractors that **look urgent but are not** include pain, anxiety, nausea, full bladder, missed medication, and a patient asking questions. The NCLEX loves to make these the loud answer — but ABC always wins.`,
        visual: {
          type: "diagram",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 1100"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="40" font-weight="bold">Keyword Decision Tree</text><text x="550" y="115" text-anchor="middle" fill="#888" font-size="20">Read the stem → tag every option as ABC or non-ABC</text><rect x="350" y="160" width="400" height="80" rx="12" fill="#6366f1"/><text x="550" y="210" text-anchor="middle" fill="#ffffff" font-size="24" font-weight="bold">Question stem</text><line x1="550" y1="240" x2="550" y2="290" stroke="#ffffff" stroke-width="3"/><rect x="50" y="300" width="320" height="100" rx="10" fill="#ef4444"/><text x="210" y="340" text-anchor="middle" fill="#ffffff" font-size="20" font-weight="bold">Airway words?</text><text x="210" y="375" text-anchor="middle" fill="#ffffff" font-size="16">stridor, gurgling, drooling</text><rect x="390" y="300" width="320" height="100" rx="10" fill="#f59e0b"/><text x="550" y="340" text-anchor="middle" fill="#1a1a2e" font-size="20" font-weight="bold">Breathing words?</text><text x="550" y="375" text-anchor="middle" fill="#1a1a2e" font-size="16">RR extremes, SpO2 &lt; 90</text><rect x="730" y="300" width="320" height="100" rx="10" fill="#0ea5e9"/><text x="890" y="340" text-anchor="middle" fill="#ffffff" font-size="20" font-weight="bold">Circulation words?</text><text x="890" y="375" text-anchor="middle" fill="#ffffff" font-size="16">no pulse, BP &lt; 90, bleeding</text><line x1="210" y1="400" x2="210" y2="450" stroke="#10b981" stroke-width="3"/><line x1="550" y1="400" x2="550" y2="450" stroke="#10b981" stroke-width="3"/><line x1="890" y1="400" x2="890" y2="450" stroke="#10b981" stroke-width="3"/><rect x="100" y="460" width="900" height="80" rx="12" fill="#10b981" opacity="0.3" stroke="#10b981" stroke-width="2"/><text x="550" y="510" text-anchor="middle" fill="#10b981" font-size="24" font-weight="bold">YES to any → that option wins. Stop reading.</text><rect x="200" y="600" width="700" height="60" rx="10" fill="#ef4444" opacity="0.3" stroke="#ef4444" stroke-width="2"/><text x="550" y="640" text-anchor="middle" fill="#ef4444" font-size="22" font-weight="bold">Distractor traps (NOT priority over ABC):</text><text x="550" y="700" text-anchor="middle" fill="#ffffff" font-size="20">• Pain (even severe)         • Anxiety / crying</text><text x="550" y="735" text-anchor="middle" fill="#ffffff" font-size="20">• Nausea / vomiting        • Full bladder / I&amp;O</text><text x="550" y="770" text-anchor="middle" fill="#ffffff" font-size="20">• Missed PO med            • Patient questions</text><text x="550" y="805" text-anchor="middle" fill="#ffffff" font-size="20">• Family at bedside        • Discharge teaching</text><text x="550" y="900" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">Stable + uncomfortable ≠ unstable</text><text x="550" y="940" text-anchor="middle" fill="#ffffff" font-size="20">The loudest patient is rarely the sickest one.</text></svg>`,
          caption: "Tag each option by keyword class; ABC tags win over non-ABC tags every time."
        }
      },
      {
        type: "example",
        title: "Clinical Scenario: Four Postop Clients",
        content: `**Stem**: A nurse on a postop unit receives report on four clients. Which client should the nurse assess **first**?

**A.** A 62-year-old day 1 post-op total knee with pain rated 8/10
**B.** A 45-year-old day 0 post-op thyroidectomy with new onset **high-pitched stridor**
**C.** A 70-year-old day 2 post-op hip with a temperature of 100.8 °F (38.2 °C)
**D.** A 30-year-old day 1 post-op appendectomy who has not voided in 6 hours

Work through it: A is **pain** (non-ABC, uncomfortable but stable). C is **fever** (concerning, but not an immediate airway/breathing/circulation collapse). D is a **full bladder** (urgent-ish, definitely not ABC).

B has **stridor** — a textbook **airway** keyword. After thyroidectomy, stridor signals possible hematoma compressing the trachea or hypocalcemic laryngospasm. This is minutes from respiratory arrest.

**Answer: B.** The stridor patient is the only one with an active ABC threat. Even though every other patient has a real problem, none of them will die in the next ten minutes. The stridor patient might.`,
        visual: {
          type: "diagram",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 1100"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="40" font-weight="bold">Four Postop Clients — Triage</text><text x="550" y="115" text-anchor="middle" fill="#888" font-size="20">Which one gets seen first?</text><rect x="80" y="170" width="940" height="160" rx="12" fill="#1a1a2e" stroke="#888" stroke-width="2"/><text x="110" y="210" fill="#ffffff" font-size="22" font-weight="bold">A. Knee post-op, pain 8/10</text><text x="110" y="245" fill="#888" font-size="18">Tag: PAIN — not ABC</text><text x="110" y="280" fill="#888" font-size="18">Uncomfortable but stable. Medicate after priority client.</text><text x="900" y="260" text-anchor="middle" fill="#888" font-size="40" font-weight="bold">#3</text><rect x="80" y="350" width="940" height="160" rx="12" fill="#ef4444" stroke="#ffd700" stroke-width="4"/><text x="110" y="390" fill="#ffffff" font-size="22" font-weight="bold">B. Thyroidectomy, NEW STRIDOR</text><text x="110" y="425" fill="#ffffff" font-size="18">Tag: AIRWAY — possible hematoma or laryngospasm</text><text x="110" y="460" fill="#ffffff" font-size="18">Respiratory arrest within minutes if untreated. SEE FIRST.</text><text x="900" y="445" text-anchor="middle" fill="#ffd700" font-size="48" font-weight="bold">#1</text><rect x="80" y="530" width="940" height="160" rx="12" fill="#1a1a2e" stroke="#888" stroke-width="2"/><text x="110" y="570" fill="#ffffff" font-size="22" font-weight="bold">C. Hip post-op, T 100.8 °F</text><text x="110" y="605" fill="#888" font-size="18">Tag: INFECTION RISK — concerning, not yet ABC</text><text x="110" y="640" fill="#888" font-size="18">Assess soon, draw cultures — but not the first stop.</text><text x="900" y="620" text-anchor="middle" fill="#888" font-size="40" font-weight="bold">#2</text><rect x="80" y="710" width="940" height="160" rx="12" fill="#1a1a2e" stroke="#888" stroke-width="2"/><text x="110" y="750" fill="#ffffff" font-size="22" font-weight="bold">D. Appendectomy, no void × 6 hr</text><text x="110" y="785" fill="#888" font-size="18">Tag: URINARY RETENTION — not ABC</text><text x="110" y="820" fill="#888" font-size="18">Bladder scan & straight cath later. Won't die in 10 min.</text><text x="900" y="800" text-anchor="middle" fill="#888" font-size="40" font-weight="bold">#4</text><text x="550" y="950" text-anchor="middle" fill="#10b981" font-size="26" font-weight="bold">Stridor = airway emergency = always first</text></svg>`,
          caption: "Tagging each option by ABC vs non-ABC instantly reveals the priority client."
        }
      },
      {
        type: "quiz",
        title: "Practice: Pick the Priority",
        content: `Apply the ABC rule to a fresh four-client scenario. Read each option, tag it (A / B / C / non-ABC), and pick the winner.`,
        question: "A nurse on a medical-surgical unit must reassess four clients. Which client should the nurse see FIRST?",
        options: [
          { text: "A 55-year-old with pneumonia, respiratory rate 28 and SpO2 of 86% on room air", correct: true },
          { text: "A 40-year-old 2 hours post-cholecystectomy reporting incisional pain rated 7/10", correct: false },
          { text: "A 68-year-old with a urinary tract infection and an oral temperature of 101.4 °F", correct: false },
          { text: "A 72-year-old admitted for congestive heart failure asking when discharge teaching will begin", correct: false }
        ],
        explanation: `**Correct: SpO2 86% with RR 28.** This is a textbook **Breathing** failure — hypoxemia plus tachypnea means the patient is decompensating and may need oxygen, repositioning, or rapid response within minutes.

The cholecystectomy pain is real but non-ABC (pain does not kill in 10 minutes). The 101.4 °F fever in a known UTI is expected and stable. The CHF patient asking about teaching is the calmest, most stable client on the list — a classic NCLEX distractor designed to look "important."

**Key principle**: An SpO2 under 90% with abnormal respiratory rate is one of the most common Breathing triggers on the NCLEX. Whenever you see oxygen saturation in the 80s, that option almost always wins the priority question.`,
        visual: {
          type: "diagram",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 1100"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="40" font-weight="bold">Quiz Logic Map</text><text x="550" y="115" text-anchor="middle" fill="#888" font-size="20">Tag each option, then sort</text><rect x="80" y="170" width="940" height="110" rx="10" fill="#10b981" opacity="0.3" stroke="#10b981" stroke-width="3"/><text x="120" y="210" fill="#10b981" font-size="22" font-weight="bold">A. RR 28, SpO2 86%</text><text x="120" y="245" fill="#ffffff" font-size="18">Tag: B (BREATHING) → hypoxemia, minutes to crisis ✓ PRIORITY</text><rect x="80" y="300" width="940" height="100" rx="10" fill="#ef4444" opacity="0.2" stroke="#ef4444" stroke-width="2"/><text x="120" y="340" fill="#ffffff" font-size="22" font-weight="bold">B. Post-op pain 7/10</text><text x="120" y="375" fill="#888" font-size="18">Tag: non-ABC (pain) → uncomfortable, not unstable</text><rect x="80" y="420" width="940" height="100" rx="10" fill="#ef4444" opacity="0.2" stroke="#ef4444" stroke-width="2"/><text x="120" y="460" fill="#ffffff" font-size="22" font-weight="bold">C. UTI, T 101.4 °F</text><text x="120" y="495" fill="#888" font-size="18">Tag: non-ABC (expected fever) → assess later</text><rect x="80" y="540" width="940" height="100" rx="10" fill="#ef4444" opacity="0.2" stroke="#ef4444" stroke-width="2"/><text x="120" y="580" fill="#ffffff" font-size="22" font-weight="bold">D. CHF asks about teaching</text><text x="120" y="615" fill="#888" font-size="18">Tag: non-ABC (stable, talking) → classic distractor</text><rect x="200" y="700" width="700" height="180" rx="14" fill="#6366f1" opacity="0.3" stroke="#6366f1" stroke-width="2"/><text x="550" y="745" text-anchor="middle" fill="#ffd700" font-size="24" font-weight="bold">Decision rule</text><text x="550" y="785" text-anchor="middle" fill="#ffffff" font-size="20">Only one option carries an ABC tag.</text><text x="550" y="820" text-anchor="middle" fill="#ffffff" font-size="20">SpO2 &lt; 90% + RR &gt; 24 = Breathing emergency.</text><text x="550" y="855" text-anchor="middle" fill="#10b981" font-size="22" font-weight="bold">Answer: A — see hypoxemic client first.</text><text x="550" y="960" text-anchor="middle" fill="#888" font-size="20">When in doubt, the patient who can't breathe wins.</text></svg>`,
          caption: "When one option carries an ABC tag and the others do not, the ABC option is the answer."
        }
      },
      {
        type: "application",
        title: "Build the Habit: Three Stems a Day",
        content: `To make the ABC rule **reflexive**, drill it daily until it becomes automatic.

**Daily routine (10 minutes):** Open any NCLEX question bank, filter by *"priority"* or *"which client first"*, and answer **three** stems. For each stem, do not just pick — out loud, **tag every option** with A, B, C, or non-ABC. Then pick the winner. Then read the rationale.

**Watch for the "shiny distractor"**: a patient in obvious pain, a crying family member, a chest tube that "just started bubbling" (often expected!), a glucose of 250 (high but rarely immediately lethal). The NCLEX uses these to test whether you can override emotion with the ABC framework.

**Red-flag vocabulary to memorize this week**: *stridor, gurgling, accessory muscles, retractions, tripod, agonal, mottled, weak thready pulse, frank bleeding, unresponsive*. Whenever any of these appear, that option is almost certainly correct.

After 30 stems, you will tag in 5 seconds and your priority accuracy will climb above 85% on first-pass questions — the single largest score gain available on the NCLEX.`,
        visual: {
          type: "diagram",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 1100"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="40" font-weight="bold">Daily ABC Drill</text><text x="550" y="115" text-anchor="middle" fill="#888" font-size="20">10 minutes a day → automatic priority sorting</text><circle cx="200" cy="280" r="80" fill="#6366f1"/><text x="200" y="290" text-anchor="middle" fill="#ffffff" font-size="42" font-weight="bold">1</text><text x="200" y="400" text-anchor="middle" fill="#ffffff" font-size="20" font-weight="bold">Open Qbank</text><text x="200" y="430" text-anchor="middle" fill="#888" font-size="16">Filter: priority</text><circle cx="450" cy="280" r="80" fill="#10b981"/><text x="450" y="290" text-anchor="middle" fill="#1a1a2e" font-size="42" font-weight="bold">2</text><text x="450" y="400" text-anchor="middle" fill="#ffffff" font-size="20" font-weight="bold">Tag options</text><text x="450" y="430" text-anchor="middle" fill="#888" font-size="16">A / B / C / non</text><circle cx="700" cy="280" r="80" fill="#f59e0b"/><text x="700" y="290" text-anchor="middle" fill="#1a1a2e" font-size="42" font-weight="bold">3</text><text x="700" y="400" text-anchor="middle" fill="#ffffff" font-size="20" font-weight="bold">Pick winner</text><text x="700" y="430" text-anchor="middle" fill="#888" font-size="16">ABC &gt; non-ABC</text><circle cx="950" cy="280" r="80" fill="#ec4899"/><text x="950" y="290" text-anchor="middle" fill="#ffffff" font-size="42" font-weight="bold">4</text><text x="950" y="400" text-anchor="middle" fill="#ffffff" font-size="20" font-weight="bold">Read rationale</text><text x="950" y="430" text-anchor="middle" fill="#888" font-size="16">Lock in pattern</text><line x1="280" y1="280" x2="370" y2="280" stroke="#ffffff" stroke-width="3"/><line x1="530" y1="280" x2="620" y2="280" stroke="#ffffff" stroke-width="3"/><line x1="780" y1="280" x2="870" y2="280" stroke="#ffffff" stroke-width="3"/><rect x="100" y="500" width="900" height="220" rx="14" fill="#1a1a2e" stroke="#ffd700" stroke-width="2"/><text x="550" y="545" text-anchor="middle" fill="#ffd700" font-size="24" font-weight="bold">Red-flag vocabulary (memorize)</text><text x="550" y="590" text-anchor="middle" fill="#ef4444" font-size="20">Airway: stridor • gurgling • drooling • snoring (new)</text><text x="550" y="625" text-anchor="middle" fill="#f59e0b" font-size="20">Breathing: accessory muscles • retractions • tripod • agonal</text><text x="550" y="660" text-anchor="middle" fill="#6366f1" font-size="20">Circulation: mottled • thready pulse • frank bleeding</text><text x="550" y="695" text-anchor="middle" fill="#888" font-size="18">If any appear in an option, that option is the answer.</text><text x="550" y="820" text-anchor="middle" fill="#10b981" font-size="26" font-weight="bold">30 stems → tagged in 5 seconds</text><text x="550" y="870" text-anchor="middle" fill="#10b981" font-size="22">Largest single score gain on the NCLEX.</text></svg>`,
          caption: "Tag-pick-read for three stems a day until the ABC sort becomes automatic."
        }
      }
    ]
  },
  {
    id: "nclex-fundamentals-lesson-2",
    title: "Maslow's Hierarchy as a Triage Tool",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "Maslow: When ABCs Don't Decide It",
        content: `When **no option** in a priority question contains an Airway, Breathing, or Circulation threat, your next filter is **Maslow's hierarchy of needs**. Maslow ranks human needs from most basic to most aspirational, and on the NCLEX, **lower needs always trump higher needs**.

The five levels, from base to peak: **Physiological** (food, water, oxygen, elimination, sleep, pain relief), **Safety** (falls, infection, suicidal ideation, environment), **Love and Belonging** (family, social support), **Esteem** (dignity, independence), and **Self-actualization** (purpose, growth).

The trick: when both options sound physical, look closely. A patient who hasn't urinated in 8 hours (physiologic — elimination) outranks a patient who feels lonely (love/belonging). A patient at risk for a fall (safety) outranks a patient who wants to talk about prognosis (esteem).

This lesson turns the pyramid into a fast lookup table you can run in your head during the exam.`,
        visual: {
          type: "diagram",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 1100"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="40" font-weight="bold">Maslow's Pyramid for NCLEX</text><text x="550" y="115" text-anchor="middle" fill="#888" font-size="20">Lower needs always outrank higher needs</text><polygon points="550,180 720,280 380,280" fill="#ec4899"/><text x="550" y="245" text-anchor="middle" fill="#ffffff" font-size="20" font-weight="bold">Self-actualization</text><polygon points="380,280 720,280 800,380 300,380" fill="#8b5cf6"/><text x="550" y="340" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">Esteem</text><text x="550" y="365" text-anchor="middle" fill="#ffffff" font-size="16">dignity, independence</text><polygon points="300,380 800,380 880,480 220,480" fill="#6366f1"/><text x="550" y="440" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">Love &amp; Belonging</text><text x="550" y="465" text-anchor="middle" fill="#ffffff" font-size="16">family, social support</text><polygon points="220,480 880,480 960,580 140,580" fill="#10b981"/><text x="550" y="540" text-anchor="middle" fill="#1a1a2e" font-size="24" font-weight="bold">Safety</text><text x="550" y="565" text-anchor="middle" fill="#1a1a2e" font-size="16">falls, infection, suicide risk</text><polygon points="140,580 960,580 1040,700 60,700" fill="#ef4444"/><text x="550" y="640" text-anchor="middle" fill="#ffffff" font-size="28" font-weight="bold">Physiological</text><text x="550" y="675" text-anchor="middle" fill="#ffffff" font-size="18">oxygen, food, water, elimination, sleep, pain</text><text x="60" y="750" fill="#ffd700" font-size="22" font-weight="bold">Rule of thumb</text><text x="60" y="790" fill="#ffffff" font-size="20">• Physical need beats safety need</text><text x="60" y="820" fill="#ffffff" font-size="20">• Safety beats love/belonging</text><text x="60" y="850" fill="#ffffff" font-size="20">• Love beats esteem</text><text x="60" y="880" fill="#ffffff" font-size="20">• Esteem beats self-actualization</text><text x="550" y="970" text-anchor="middle" fill="#10b981" font-size="22" font-weight="bold">Use Maslow only after ABCs rule nothing in.</text></svg>`,
          caption: "Walk down the pyramid: the option closest to the base wins."
        }
      },
      {
        type: "concept",
        title: "Tagging Options by Maslow Level",
        content: `Just like with ABCs, the win comes from **tagging each option** with its Maslow level and picking the lowest one.

**Physiological tags**: oxygen, breathing comfort, hunger, thirst, **urinary retention**, **constipation**, **uncontrolled pain**, fatigue, hypothermia. These are body functions failing — they always win when no ABC is in play.

**Safety tags**: fall risk, **suicidal ideation**, elopement, infection control, medication error, side rails, restraint, side effects of new meds. Safety is huge on the NCLEX because of nursing's "do no harm" mandate.

**Love and belonging tags**: family visiting, social isolation, loneliness, grieving, fear of being abandoned. Important, but rarely the first answer.

**Esteem tags**: privacy during a bath, calling the patient by name, allowing choice, asking about preferences, autonomy.

**Self-actualization tags**: spiritual care requests, advance directive conversations, long-term goal planning, education for personal growth.

When two answers tie at the same level (two physiological options, for example), fall back to **acuity within that level** — a blocked airway beats a missed meal, retention beats constipation, severe pain beats hunger.`,
        visual: {
          type: "diagram",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 1100"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="40" font-weight="bold">Tagging Cheat Sheet</text><text x="550" y="115" text-anchor="middle" fill="#888" font-size="20">Match each option to one of these buckets</text><rect x="80" y="160" width="940" height="140" rx="12" fill="#ef4444" opacity="0.85"/><text x="110" y="200" fill="#ffffff" font-size="24" font-weight="bold">PHYSIOLOGICAL (lowest, strongest)</text><text x="110" y="235" fill="#ffffff" font-size="18">oxygen • hunger • thirst • urinary retention</text><text x="110" y="265" fill="#ffffff" font-size="18">constipation • uncontrolled pain • fatigue • hypothermia</text><rect x="80" y="320" width="940" height="140" rx="12" fill="#10b981" opacity="0.85"/><text x="110" y="360" fill="#1a1a2e" font-size="24" font-weight="bold">SAFETY</text><text x="110" y="395" fill="#1a1a2e" font-size="18">fall risk • suicide risk • elopement • infection</text><text x="110" y="425" fill="#1a1a2e" font-size="18">med errors • new med side effects • restraint issues</text><rect x="80" y="480" width="940" height="120" rx="12" fill="#6366f1" opacity="0.85"/><text x="110" y="520" fill="#ffffff" font-size="24" font-weight="bold">LOVE / BELONGING</text><text x="110" y="555" fill="#ffffff" font-size="18">isolation • grieving • family at bedside • loneliness</text><rect x="80" y="620" width="940" height="120" rx="12" fill="#8b5cf6" opacity="0.85"/><text x="110" y="660" fill="#ffffff" font-size="24" font-weight="bold">ESTEEM</text><text x="110" y="695" fill="#ffffff" font-size="18">privacy • dignity • offering choice • autonomy</text><rect x="80" y="760" width="940" height="120" rx="12" fill="#ec4899" opacity="0.85"/><text x="110" y="800" fill="#ffffff" font-size="24" font-weight="bold">SELF-ACTUALIZATION (highest, weakest priority)</text><text x="110" y="835" fill="#ffffff" font-size="18">spiritual care • advance directives • long-term goals</text><text x="550" y="950" text-anchor="middle" fill="#ffd700" font-size="24" font-weight="bold">Tie inside a level? Pick the higher-acuity one.</text></svg>`,
          caption: "Map each answer to a Maslow level, then pick the one furthest down the pyramid."
        }
      },
      {
        type: "example",
        title: "Clinical Scenario: Four Med-Surg Needs",
        content: `**Stem**: A nurse cares for four medical-surgical clients with the following needs. Which client should the nurse address **first**?

**A.** A client who has not voided in 8 hours and reports lower abdominal fullness
**B.** A client whose adult daughter is at the bedside crying about the upcoming surgery
**C.** A client who refuses to be called "Mr." and prefers his first name
**D.** A client asking the nurse about completing an advance directive

Quick scan: no Airway, Breathing, or Circulation threat in any option — so we use **Maslow**.

Tag them: **A = Physiological** (elimination — urinary retention is a body function failing). **B = Love/Belonging** (family emotional support). **C = Esteem** (dignity/naming preference). **D = Self-actualization** (life-planning).

Walk down the pyramid: A sits at the base, the rest are higher up.

**Answer: A.** The retention patient needs a bladder scan and likely a straight catheterization to prevent bladder damage and pain. The daughter, the dignity issue, and the advance directive all matter — and you will get to them — but elimination wins among non-ABC options because the body has to keep functioning first.`,
        visual: {
          type: "diagram",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 1100"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="40" font-weight="bold">Four Med-Surg Needs</text><text x="550" y="115" text-anchor="middle" fill="#888" font-size="20">No ABC in play → walk down Maslow</text><rect x="80" y="170" width="940" height="140" rx="12" fill="#ef4444" stroke="#ffd700" stroke-width="4"/><text x="110" y="210" fill="#ffffff" font-size="22" font-weight="bold">A. No void × 8 hr, abd fullness</text><text x="110" y="245" fill="#ffffff" font-size="18">Tag: PHYSIOLOGICAL (elimination)</text><text x="110" y="280" fill="#ffffff" font-size="18">Bladder scan, straight cath. → SEE FIRST</text><text x="930" y="250" text-anchor="middle" fill="#ffd700" font-size="48" font-weight="bold">#1</text><rect x="80" y="330" width="940" height="130" rx="12" fill="#1a1a2e" stroke="#6366f1" stroke-width="3"/><text x="110" y="370" fill="#ffffff" font-size="22" font-weight="bold">B. Daughter crying at bedside</text><text x="110" y="405" fill="#888" font-size="18">Tag: LOVE / BELONGING</text><text x="110" y="435" fill="#888" font-size="18">Emotional support — important, not first.</text><text x="930" y="405" text-anchor="middle" fill="#888" font-size="40" font-weight="bold">#2</text><rect x="80" y="480" width="940" height="130" rx="12" fill="#1a1a2e" stroke="#8b5cf6" stroke-width="3"/><text x="110" y="520" fill="#ffffff" font-size="22" font-weight="bold">C. Prefers first name (dignity)</text><text x="110" y="555" fill="#888" font-size="18">Tag: ESTEEM</text><text x="110" y="585" fill="#888" font-size="18">Honor preference, but later.</text><text x="930" y="555" text-anchor="middle" fill="#888" font-size="40" font-weight="bold">#3</text><rect x="80" y="630" width="940" height="130" rx="12" fill="#1a1a2e" stroke="#ec4899" stroke-width="3"/><text x="110" y="670" fill="#ffffff" font-size="22" font-weight="bold">D. Asking about advance directive</text><text x="110" y="705" fill="#888" font-size="18">Tag: SELF-ACTUALIZATION</text><text x="110" y="735" fill="#888" font-size="18">Schedule a conversation when stable.</text><text x="930" y="705" text-anchor="middle" fill="#888" font-size="40" font-weight="bold">#4</text><text x="550" y="850" text-anchor="middle" fill="#10b981" font-size="26" font-weight="bold">Answer: A — physiologic need wins.</text><text x="550" y="900" text-anchor="middle" fill="#888" font-size="20">All four matter. Only one is at the base of the pyramid.</text></svg>`,
          caption: "When the stem hides no ABC threat, the physiologic option claims priority."
        }
      },
      {
        type: "quiz",
        title: "Practice: Maslow in Action",
        content: `Apply the Maslow rule when no Airway, Breathing, or Circulation threat is present. Tag each option and pick the lowest level.`,
        question: "A nurse on a psychiatric unit must address four client needs. Which need should the nurse address FIRST?",
        options: [
          { text: "A client who has not eaten in 24 hours and refuses meal trays", correct: true },
          { text: "A client requesting to speak with a chaplain about life meaning", correct: false },
          { text: "A client upset that staff did not knock before entering the room", correct: false },
          { text: "A client whose spouse has not visited in two days and feels lonely", correct: false }
        ],
        explanation: `**Correct: not eaten in 24 hours.** Nutrition is a **physiological** need — the lowest level of Maslow. A psychiatric patient refusing food risks dehydration, hypoglycemia, and worsening cognition. The nurse must assess intake and develop a plan (sit with them at meals, offer alternatives, evaluate for medication side effects).

The chaplain request is **self-actualization** (meaning/purpose). The privacy complaint is **esteem** (dignity). The lonely spouse situation is **love/belonging**.

All four are real nursing concerns — and you will address them — but the body has to be fed before the soul gets attention. On the NCLEX, when no ABC threat exists, the answer that mentions a basic body function (food, fluids, elimination, sleep, pain) almost always wins.

**Watch the trap**: psychiatric units often tempt students to pick the "emotional" answer because the unit is emotional. Maslow doesn't care — physiological still rules.`,
        visual: {
          type: "diagram",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 1100"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="40" font-weight="bold">Quiz Logic Map</text><text x="550" y="115" text-anchor="middle" fill="#888" font-size="20">Psych unit — but Maslow still rules</text><rect x="80" y="170" width="940" height="120" rx="10" fill="#10b981" opacity="0.3" stroke="#10b981" stroke-width="3"/><text x="110" y="210" fill="#10b981" font-size="22" font-weight="bold">A. No food × 24 hr</text><text x="110" y="245" fill="#ffffff" font-size="18">Tag: PHYSIOLOGICAL → lowest level</text><text x="110" y="275" fill="#10b981" font-size="20" font-weight="bold">✓ PRIORITY</text><rect x="80" y="310" width="940" height="100" rx="10" fill="#ec4899" opacity="0.2" stroke="#ec4899" stroke-width="2"/><text x="110" y="350" fill="#ffffff" font-size="22" font-weight="bold">B. Wants chaplain — life meaning</text><text x="110" y="385" fill="#888" font-size="18">Tag: SELF-ACTUALIZATION → top of pyramid</text><rect x="80" y="430" width="940" height="100" rx="10" fill="#8b5cf6" opacity="0.2" stroke="#8b5cf6" stroke-width="2"/><text x="110" y="470" fill="#ffffff" font-size="22" font-weight="bold">C. Staff didn't knock</text><text x="110" y="505" fill="#888" font-size="18">Tag: ESTEEM → dignity, important but high level</text><rect x="80" y="550" width="940" height="100" rx="10" fill="#6366f1" opacity="0.2" stroke="#6366f1" stroke-width="2"/><text x="110" y="590" fill="#ffffff" font-size="22" font-weight="bold">D. Spouse hasn't visited, lonely</text><text x="110" y="625" fill="#888" font-size="18">Tag: LOVE / BELONGING → middle of pyramid</text><rect x="150" y="700" width="800" height="190" rx="14" fill="#1a1a2e" stroke="#ffd700" stroke-width="2"/><text x="550" y="745" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">Decision rule</text><text x="550" y="785" text-anchor="middle" fill="#ffffff" font-size="20">Only A tags at the base of the pyramid.</text><text x="550" y="820" text-anchor="middle" fill="#ffffff" font-size="20">Even on a psych unit, nutrition wins over emotion.</text><text x="550" y="860" text-anchor="middle" fill="#10b981" font-size="22" font-weight="bold">Answer: A.</text><text x="550" y="980" text-anchor="middle" fill="#888" font-size="20">Body first, feelings second.</text></svg>`,
          caption: "Physiological tag at the base of the pyramid wins the Maslow priority question."
        }
      },
      {
        type: "application",
        title: "Build the Habit: Two-Filter System",
        content: `For every priority question, run a **two-filter system** in this exact order:

**Filter 1: ABC scan.** Read the four options. Is there an Airway, Breathing, or Circulation threat in any of them? If yes → pick that one. Done.

**Filter 2: Maslow walk.** If no ABC threat exists, tag each option (Physiological / Safety / Love / Esteem / Self-actualization). Pick the one closest to the base of the pyramid. Done.

**Common Filter-2 errors to avoid**:
- Confusing "patient is sad" with **Physiological**. Sadness is Love/Belonging or Esteem, never base level.
- Forgetting **Safety** includes suicide risk. A patient with active suicidal ideation outranks a hungry patient — safety beats an empty stomach when life is in immediate danger.
- Picking the "talking" patient. A patient asking questions is almost always the stablest — the silent, withdrawn, or somatically symptomatic patient usually wins.

**Drill**: 10 priority questions a day for two weeks. After each one, ask yourself out loud: "ABCs? No. So Maslow — which option was lowest?" Speak the framework until it becomes silent reflex. This single discipline is worth 5-10 raw points on test day.`,
        visual: {
          type: "diagram",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 1100"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="40" font-weight="bold">Two-Filter Priority System</text><text x="550" y="115" text-anchor="middle" fill="#888" font-size="20">Run in order — never skip Filter 1</text><rect x="200" y="180" width="700" height="120" rx="14" fill="#ef4444"/><text x="550" y="225" text-anchor="middle" fill="#ffffff" font-size="28" font-weight="bold">FILTER 1: ABC scan</text><text x="550" y="265" text-anchor="middle" fill="#ffffff" font-size="20">Any Airway, Breathing, Circulation threat?</text><line x1="350" y1="310" x2="350" y2="370" stroke="#10b981" stroke-width="4"/><text x="305" y="345" fill="#10b981" font-size="20" font-weight="bold">YES</text><line x1="750" y1="310" x2="750" y2="370" stroke="#f59e0b" stroke-width="4"/><text x="795" y="345" fill="#f59e0b" font-size="20" font-weight="bold">NO</text><rect x="120" y="380" width="450" height="100" rx="12" fill="#10b981" opacity="0.85"/><text x="345" y="420" text-anchor="middle" fill="#1a1a2e" font-size="22" font-weight="bold">Pick the ABC option.</text><text x="345" y="455" text-anchor="middle" fill="#1a1a2e" font-size="20">Done. Move to next question.</text><rect x="600" y="380" width="380" height="100" rx="12" fill="#f59e0b" opacity="0.85"/><text x="790" y="420" text-anchor="middle" fill="#1a1a2e" font-size="22" font-weight="bold">Go to Filter 2.</text><rect x="200" y="520" width="700" height="120" rx="14" fill="#6366f1"/><text x="550" y="565" text-anchor="middle" fill="#ffffff" font-size="28" font-weight="bold">FILTER 2: Maslow walk</text><text x="550" y="605" text-anchor="middle" fill="#ffffff" font-size="20">Tag each option → pick lowest pyramid level</text><rect x="120" y="680" width="860" height="200" rx="14" fill="#1a1a2e" stroke="#ffd700" stroke-width="2"/><text x="550" y="725" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">Common Filter-2 traps</text><text x="150" y="765" fill="#ffffff" font-size="18">• Sadness is NOT physiological — it's Love or Esteem</text><text x="150" y="800" fill="#ffffff" font-size="18">• Safety includes suicide risk — beats hunger</text><text x="150" y="835" fill="#ffffff" font-size="18">• The talkative patient is almost never the priority</text><text x="150" y="870" fill="#ffffff" font-size="18">• Two physiological options? Pick higher acuity.</text><text x="550" y="970" text-anchor="middle" fill="#10b981" font-size="22" font-weight="bold">Speak the framework aloud until silent reflex.</text></svg>`,
          caption: "ABCs first; Maslow second. Two filters, one habit, ten extra raw points."
        }
      }
    ]
  },
  {
    id: "nclex-fundamentals-lesson-3",
    title: "The Nursing Process: ADPIE in NCLEX Question Stems",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "ADPIE: The Order of Operations",
        content: `The **nursing process** is the third great NCLEX framework. It has five ordered steps you must memorize as **ADPIE**: **Assessment → Diagnosis → Planning → Implementation → Evaluation**.

When the stem asks "what should the nurse do **first**?", "the nurse's **initial action**?", or "what is the nurse's **best response**?", the answer is almost always the **earliest ADPIE step** present in the options — and that step is usually **Assessment**.

The trick is that NCLEX writers love to make Implementation options (giving meds, calling the provider, repositioning) **look** like the right answer because they are concrete and active. But you cannot intervene safely without first assessing.

**Exception**: if an ABC emergency is already obvious in the stem (the patient is choking, has no pulse, or is in respiratory arrest), skip straight to Implementation. Otherwise, **assess first, intervene second**.

This lesson teaches the "first action trick" and the small set of exceptions that override it.`,
        visual: {
          type: "diagram",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 1100"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="40" font-weight="bold">ADPIE — Nursing Process Flow</text><text x="550" y="115" text-anchor="middle" fill="#888" font-size="20">Five steps in strict order</text><circle cx="170" cy="280" r="90" fill="#ef4444"/><text x="170" y="270" text-anchor="middle" fill="#ffffff" font-size="36" font-weight="bold">A</text><text x="170" y="310" text-anchor="middle" fill="#ffffff" font-size="20" font-weight="bold">Assess</text><circle cx="360" cy="280" r="90" fill="#f59e0b"/><text x="360" y="270" text-anchor="middle" fill="#1a1a2e" font-size="36" font-weight="bold">D</text><text x="360" y="310" text-anchor="middle" fill="#1a1a2e" font-size="20" font-weight="bold">Diagnose</text><circle cx="550" cy="280" r="90" fill="#10b981"/><text x="550" y="270" text-anchor="middle" fill="#1a1a2e" font-size="36" font-weight="bold">P</text><text x="550" y="310" text-anchor="middle" fill="#1a1a2e" font-size="20" font-weight="bold">Plan</text><circle cx="740" cy="280" r="90" fill="#6366f1"/><text x="740" y="270" text-anchor="middle" fill="#ffffff" font-size="36" font-weight="bold">I</text><text x="740" y="310" text-anchor="middle" fill="#ffffff" font-size="20" font-weight="bold">Implement</text><circle cx="930" cy="280" r="90" fill="#8b5cf6"/><text x="930" y="270" text-anchor="middle" fill="#ffffff" font-size="36" font-weight="bold">E</text><text x="930" y="310" text-anchor="middle" fill="#ffffff" font-size="20" font-weight="bold">Evaluate</text><line x1="260" y1="280" x2="270" y2="280" stroke="#ffffff" stroke-width="3"/><line x1="450" y1="280" x2="460" y2="280" stroke="#ffffff" stroke-width="3"/><line x1="640" y1="280" x2="650" y2="280" stroke="#ffffff" stroke-width="3"/><line x1="830" y1="280" x2="840" y2="280" stroke="#ffffff" stroke-width="3"/><polygon points="270,275 285,280 270,285" fill="#ffffff"/><polygon points="460,275 475,280 460,285" fill="#ffffff"/><polygon points="650,275 665,280 650,285" fill="#ffffff"/><polygon points="840,275 855,280 840,285" fill="#ffffff"/><rect x="80" y="430" width="940" height="240" rx="14" fill="#1a1a2e" stroke="#ffd700" stroke-width="2"/><text x="550" y="475" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">The "first action" trick</text><text x="100" y="520" fill="#ffffff" font-size="20">Q: "What should the nurse do FIRST?"</text><text x="100" y="555" fill="#10b981" font-size="20" font-weight="bold">A: pick the earliest ADPIE step in the options.</text><text x="100" y="595" fill="#ffffff" font-size="20">Usually Assessment (auscultate, palpate, check vitals,</text><text x="100" y="625" fill="#ffffff" font-size="20">ask about pain, observe). Sometimes Planning.</text><text x="100" y="655" fill="#ffffff" font-size="20">Implementation only if assessment is already in the stem.</text><rect x="80" y="710" width="940" height="180" rx="14" fill="#ef4444" opacity="0.25" stroke="#ef4444" stroke-width="2"/><text x="550" y="755" text-anchor="middle" fill="#ef4444" font-size="22" font-weight="bold">Exceptions: skip to Implementation when…</text><text x="100" y="795" fill="#ffffff" font-size="20">• Active ABC emergency (no pulse, choking, arrest)</text><text x="100" y="825" fill="#ffffff" font-size="20">• Patient is actively falling, seizing, or hemorrhaging</text><text x="100" y="855" fill="#ffffff" font-size="20">• Stem already gave you the assessment data</text><text x="550" y="970" text-anchor="middle" fill="#10b981" font-size="22" font-weight="bold">Assess first, intervene second — almost always.</text></svg>`,
          caption: "Assess before you intervene unless the stem hands you an emergency."
        }
      },
      {
        type: "concept",
        title: "The First-Action Trick: Tag Each Option by ADPIE Step",
        content: `Just like with ABCs and Maslow, **tag every option** with its ADPIE step, then pick the earliest one.

**Assessment verbs**: *auscultate, palpate, inspect, percuss, observe, check, monitor, measure, ask, assess, take vitals, listen for*. These are data-gathering actions — almost always the right "first" answer.

**Diagnosis verbs**: not really a verb step on NCLEX — diagnosis is the conclusion you draw, rarely an option itself.

**Planning verbs**: *prioritize, set a goal, develop a plan, decide on outcomes*. Sometimes appears as "establish that the patient will…"

**Implementation verbs**: *administer, give, teach, reposition, suction, irrigate, ambulate, call the provider, raise the head of bed, start oxygen*. These are interventions — only correct after assessment.

**Evaluation verbs**: *determine if the intervention worked, reassess after, compare to baseline*.

**The trap**: NCLEX will offer four options where three are Implementation (giving meds, calling MD, repositioning) and one is Assessment (auscultate, check pulse). Even if the implementations seem helpful, **the lone assessment option is the answer** — unless the stem already established the assessment.

This is the single most testable trick in the entire exam.`,
        visual: {
          type: "diagram",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 1100"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="40" font-weight="bold">Verb Cheat Sheet</text><text x="550" y="115" text-anchor="middle" fill="#888" font-size="20">Tag the verb → tag the ADPIE step</text><rect x="80" y="160" width="940" height="160" rx="12" fill="#ef4444" opacity="0.85"/><text x="110" y="200" fill="#ffffff" font-size="26" font-weight="bold">ASSESSMENT (almost always "first")</text><text x="110" y="240" fill="#ffffff" font-size="20">auscultate • palpate • inspect • percuss • observe</text><text x="110" y="275" fill="#ffffff" font-size="20">check • monitor • measure • ask • take vitals • listen</text><text x="110" y="305" fill="#ffffff" font-size="18" font-style="italic">If one option starts with an assessment verb, pick it.</text><rect x="80" y="340" width="940" height="120" rx="12" fill="#f59e0b" opacity="0.85"/><text x="110" y="380" fill="#1a1a2e" font-size="26" font-weight="bold">PLANNING</text><text x="110" y="420" fill="#1a1a2e" font-size="20">prioritize • set goal • establish outcome • develop plan</text><text x="110" y="445" fill="#1a1a2e" font-size="18" font-style="italic">Picked only when assessment is done and you must rank actions.</text><rect x="80" y="480" width="940" height="160" rx="12" fill="#6366f1" opacity="0.85"/><text x="110" y="520" fill="#ffffff" font-size="26" font-weight="bold">IMPLEMENTATION (the seductive trap)</text><text x="110" y="560" fill="#ffffff" font-size="20">administer • give • teach • reposition • suction • irrigate</text><text x="110" y="595" fill="#ffffff" font-size="20">call provider • raise HOB • start O₂ • ambulate</text><text x="110" y="625" fill="#ffffff" font-size="18" font-style="italic">Three of four options are usually here — don't take the bait.</text><rect x="80" y="660" width="940" height="130" rx="12" fill="#8b5cf6" opacity="0.85"/><text x="110" y="700" fill="#ffffff" font-size="26" font-weight="bold">EVALUATION</text><text x="110" y="740" fill="#ffffff" font-size="20">reassess after intervention • compare to baseline</text><text x="110" y="770" fill="#ffffff" font-size="18" font-style="italic">"Determine if the intervention was effective…"</text><rect x="80" y="810" width="940" height="120" rx="12" fill="#10b981" opacity="0.3" stroke="#10b981" stroke-width="3"/><text x="550" y="855" text-anchor="middle" fill="#10b981" font-size="22" font-weight="bold">Pick the earliest ADPIE step present.</text><text x="550" y="895" text-anchor="middle" fill="#ffffff" font-size="20">If assessment is offered, it almost always wins.</text></svg>`,
          caption: "Tag verbs by step; the earliest step on the screen is the first action."
        }
      },
      {
        type: "example",
        title: "Clinical Scenario: New Chest Pain",
        content: `**Stem**: A client on a cardiac unit calls the nurse and reports new chest pain that started 5 minutes ago. Which action should the nurse take **first**?

**A.** Administer the PRN nitroglycerin tablet sublingually
**B.** **Assess the client's pain (location, quality, radiation, severity) and check vital signs**
**C.** Call the healthcare provider to report the chest pain
**D.** Obtain a 12-lead electrocardiogram

Walk it: there is no ABC arrest in the stem — the patient is **talking** and reporting symptoms. So we run ADPIE.

Tag the options: A is **Implementation** (give a med). B is **Assessment** (gather data). C is **Implementation** (call provider). D is **Implementation** (obtain test).

Three of four are Implementation. The lone Assessment option, **B**, is the answer.

Why it matters clinically: nitroglycerin can drop the blood pressure dangerously. If the patient is already hypotensive (BP 84/52), giving nitro could cause cardiogenic shock. You **must** check vitals and characterize the pain first. The ECG and the provider call follow within minutes — but the assessment comes first.

**Answer: B.** Assess before you intervene unless the stem already gave you the data.`,
        visual: {
          type: "diagram",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 1100"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="40" font-weight="bold">New Chest Pain — ADPIE Tags</text><text x="550" y="115" text-anchor="middle" fill="#888" font-size="20">Three Implementations, one Assessment</text><rect x="80" y="170" width="940" height="140" rx="12" fill="#1a1a2e" stroke="#6366f1" stroke-width="3"/><text x="110" y="210" fill="#ffffff" font-size="22" font-weight="bold">A. Administer SL nitroglycerin</text><text x="110" y="245" fill="#6366f1" font-size="18" font-weight="bold">Tag: IMPLEMENTATION</text><text x="110" y="280" fill="#888" font-size="18">Risky if BP is low — must check vitals first.</text><rect x="80" y="330" width="940" height="140" rx="12" fill="#ef4444" stroke="#ffd700" stroke-width="4"/><text x="110" y="370" fill="#ffffff" font-size="22" font-weight="bold">B. Assess pain + check vitals</text><text x="110" y="405" fill="#ffd700" font-size="18" font-weight="bold">Tag: ASSESSMENT</text><text x="110" y="440" fill="#ffffff" font-size="18">Lone Assessment option → answer.</text><text x="930" y="410" text-anchor="middle" fill="#ffd700" font-size="44" font-weight="bold">✓</text><rect x="80" y="490" width="940" height="140" rx="12" fill="#1a1a2e" stroke="#6366f1" stroke-width="3"/><text x="110" y="530" fill="#ffffff" font-size="22" font-weight="bold">C. Call the provider</text><text x="110" y="565" fill="#6366f1" font-size="18" font-weight="bold">Tag: IMPLEMENTATION</text><text x="110" y="600" fill="#888" font-size="18">Provider will ask for vitals & pain description first.</text><rect x="80" y="650" width="940" height="140" rx="12" fill="#1a1a2e" stroke="#6366f1" stroke-width="3"/><text x="110" y="690" fill="#ffffff" font-size="22" font-weight="bold">D. Obtain 12-lead ECG</text><text x="110" y="725" fill="#6366f1" font-size="18" font-weight="bold">Tag: IMPLEMENTATION</text><text x="110" y="760" fill="#888" font-size="18">Important — but follows the bedside assessment.</text><text x="550" y="870" text-anchor="middle" fill="#10b981" font-size="26" font-weight="bold">Answer: B. Assess first, intervene second.</text><text x="550" y="920" text-anchor="middle" fill="#888" font-size="20">Three of four options were the trap.</text></svg>`,
          caption: "When three options are Implementation, the lone Assessment option is the answer."
        }
      },
      {
        type: "quiz",
        title: "Practice: First Action",
        content: `Tag every option, then pick the earliest ADPIE step that is present.`,
        question: "A nurse enters the room of a client receiving an intravenous infusion of normal saline. The client reports that the IV site \"feels burning and tight.\" Which action should the nurse take FIRST?",
        options: [
          { text: "Inspect the IV insertion site for swelling, redness, and temperature", correct: true },
          { text: "Stop the IV infusion and remove the catheter", correct: false },
          { text: "Notify the healthcare provider about the IV complication", correct: false },
          { text: "Apply a warm compress to the affected arm to promote comfort", correct: false }
        ],
        explanation: `**Correct: inspect the IV site.** Tag the options: inspect = **Assessment**; stop the infusion and remove = **Implementation**; notify provider = **Implementation**; apply warm compress = **Implementation**.

Three of four are Implementation, and one is Assessment. Even though stopping the IV sounds protective, you must **first confirm** what is happening at the site — is it infiltration (cool, swollen, pale), phlebitis (red, warm, tender), or extravasation of a vesicant? Each finding leads to a different next step (warm vs cold compress, elevate, photograph, call provider).

If you removed the catheter without inspecting, you might miss the chance to aspirate residual vesicant or document the extent of infiltration accurately.

**Key principle**: when the stem reports a symptom and the options mix one Assessment with several Implementations, **the Assessment always wins** — unless an ABC emergency is already underway. A burning IV site is uncomfortable but not airway, breathing, or circulation collapse. Assess first.`,
        visual: {
          type: "diagram",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 1100"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="40" font-weight="bold">Quiz Logic Map</text><text x="550" y="115" text-anchor="middle" fill="#888" font-size="20">IV site complaint — assess first</text><rect x="80" y="170" width="940" height="120" rx="10" fill="#10b981" opacity="0.3" stroke="#10b981" stroke-width="3"/><text x="110" y="210" fill="#10b981" font-size="22" font-weight="bold">A. Inspect IV site</text><text x="110" y="245" fill="#ffffff" font-size="18">Tag: ASSESSMENT → only data-gathering option</text><text x="110" y="275" fill="#10b981" font-size="20" font-weight="bold">✓ PRIORITY</text><rect x="80" y="310" width="940" height="100" rx="10" fill="#6366f1" opacity="0.2" stroke="#6366f1" stroke-width="2"/><text x="110" y="350" fill="#ffffff" font-size="22" font-weight="bold">B. Stop infusion / remove cath</text><text x="110" y="385" fill="#888" font-size="18">Tag: IMPLEMENTATION → premature without assessment</text><rect x="80" y="430" width="940" height="100" rx="10" fill="#6366f1" opacity="0.2" stroke="#6366f1" stroke-width="2"/><text x="110" y="470" fill="#ffffff" font-size="22" font-weight="bold">C. Notify provider</text><text x="110" y="505" fill="#888" font-size="18">Tag: IMPLEMENTATION → provider needs data first</text><rect x="80" y="550" width="940" height="100" rx="10" fill="#6366f1" opacity="0.2" stroke="#6366f1" stroke-width="2"/><text x="110" y="590" fill="#ffffff" font-size="22" font-weight="bold">D. Warm compress</text><text x="110" y="625" fill="#888" font-size="18">Tag: IMPLEMENTATION → wrong for infiltration!</text><rect x="150" y="700" width="800" height="220" rx="14" fill="#1a1a2e" stroke="#ffd700" stroke-width="2"/><text x="550" y="745" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">Why the trap works</text><text x="550" y="790" text-anchor="middle" fill="#ffffff" font-size="20">Stopping the IV feels protective.</text><text x="550" y="825" text-anchor="middle" fill="#ffffff" font-size="20">But each finding (infiltrate vs phlebitis vs extravasation)</text><text x="550" y="860" text-anchor="middle" fill="#ffffff" font-size="20">drives a different next step. Assess to decide.</text><text x="550" y="900" text-anchor="middle" fill="#10b981" font-size="22" font-weight="bold">Answer: A.</text></svg>`,
          caption: "Mixed options? The lone Assessment is the answer unless an ABC emergency is live."
        }
      },
      {
        type: "application",
        title: "Build the Habit: The Three-Filter Stack",
        content: `You now have **three frameworks** for priority and first-action questions. Run them in this stacked order, every time:

**Filter 1 — ABCs:** any Airway, Breathing, or Circulation threat? Pick that option immediately.

**Filter 2 — Maslow:** no ABC threat? Tag each option by pyramid level. Pick the lowest level.

**Filter 3 — ADPIE:** is the stem asking "what should the nurse do **first**" with possible interventions? Tag each option's verb (Assess, Plan, Implement, Evaluate). Pick the earliest step — almost always **Assessment**.

These filters do not compete; they layer. ABCs handle "which client first." Maslow handles "which need first" without an ABC. ADPIE handles "which **action** first" when the patient is identified.

**Common stack errors**:
- Picking an Implementation because it "sounds right" when an Assessment option exists. The NCLEX punishes this hard.
- Forgetting the ADPIE exception: if the stem already gave you assessment data ("the patient is unresponsive with no pulse"), skip to Implementation (start CPR).
- Using ADPIE on a "which client first" question. Use **ABCs/Maslow** for client triage; use **ADPIE** for action selection.

Drill 10 mixed priority + first-action stems daily. After two weeks, you will run the three-filter stack in under 15 seconds per question — the bedrock skill of NCLEX success.`,
        visual: {
          type: "diagram",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 1100"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="40" font-weight="bold">The Three-Filter Stack</text><text x="550" y="115" text-anchor="middle" fill="#888" font-size="20">Run in order, every priority question</text><rect x="100" y="170" width="900" height="130" rx="14" fill="#ef4444"/><text x="550" y="215" text-anchor="middle" fill="#ffffff" font-size="28" font-weight="bold">FILTER 1 — ABCs</text><text x="550" y="255" text-anchor="middle" fill="#ffffff" font-size="20">Airway / Breathing / Circulation threat?</text><text x="550" y="285" text-anchor="middle" fill="#ffffff" font-size="18">Yes → pick it. No → next filter.</text><line x1="550" y1="300" x2="550" y2="335" stroke="#ffffff" stroke-width="3"/><polygon points="545,335 555,335 550,350" fill="#ffffff"/><rect x="100" y="360" width="900" height="130" rx="14" fill="#6366f1"/><text x="550" y="405" text-anchor="middle" fill="#ffffff" font-size="28" font-weight="bold">FILTER 2 — Maslow</text><text x="550" y="445" text-anchor="middle" fill="#ffffff" font-size="20">Tag each option by pyramid level.</text><text x="550" y="475" text-anchor="middle" fill="#ffffff" font-size="18">Pick the lowest level. Walk down toward the base.</text><line x1="550" y1="490" x2="550" y2="525" stroke="#ffffff" stroke-width="3"/><polygon points="545,525 555,525 550,540" fill="#ffffff"/><rect x="100" y="550" width="900" height="130" rx="14" fill="#10b981"/><text x="550" y="595" text-anchor="middle" fill="#1a1a2e" font-size="28" font-weight="bold">FILTER 3 — ADPIE</text><text x="550" y="635" text-anchor="middle" fill="#1a1a2e" font-size="20">"What should the nurse do FIRST?"</text><text x="550" y="665" text-anchor="middle" fill="#1a1a2e" font-size="18">Tag verbs. Pick earliest step — usually Assessment.</text><rect x="100" y="720" width="900" height="200" rx="14" fill="#1a1a2e" stroke="#ffd700" stroke-width="2"/><text x="550" y="765" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">Stack errors to avoid</text><text x="130" y="805" fill="#ffffff" font-size="18">• Don't use ADPIE on "which CLIENT first" — that's ABC/Maslow.</text><text x="130" y="840" fill="#ffffff" font-size="18">• Don't skip Assessment unless ABC emergency is live.</text><text x="130" y="875" fill="#ffffff" font-size="18">• Don't fall for three identical Implementations vs one Assess.</text><text x="130" y="905" fill="#ffffff" font-size="18">• Don't confuse "loud" with "priority."</text><text x="550" y="980" text-anchor="middle" fill="#10b981" font-size="22" font-weight="bold">15 seconds per question after two weeks of drill.</text></svg>`,
          caption: "Stack the three filters in order — ABCs, Maslow, ADPIE — for every priority question."
        }
      }
    ]
  }
];

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
