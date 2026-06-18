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
  },
{
    id: "nclex-fundamentals-lesson-4",
    title: "Therapeutic Communication: The Patterns NCLEX Scores High",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "Why Communication Questions Trip Up Smart Students",
        content: `**Therapeutic communication** is the silent backbone of nursing — and one of the most predictable categories on NCLEX. The exam isn't testing whether you're a kind person. It's testing whether you can recognize **specific verbal patterns** that open dialogue versus shut it down.

The good news: NCLEX uses a small, repeatable playbook. The **right answers** almost always involve **open-ended questions**, **reflection**, **validation**, or **therapeutic silence**. The **wrong answers** cluster around four classic mistakes: **false reassurance**, **"why" questions**, **changing the subject**, and **asking about feelings before facts** in an emergency.

A patient says, "I'm scared about my surgery tomorrow." A non-nurse says, "Don't worry, you'll be fine." A nurse says, "Tell me more about what's worrying you." The first **closes** the conversation. The second **opens** it. NCLEX rewards opening.

This lesson teaches you to **scan options for the trap words** — "everything," "fine," "why," "don't worry" — and choose the response that invites the patient to keep talking.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="70" font-size="34" font-weight="bold" fill="#ffd700" text-anchor="middle">Therapeutic Communication</text>
            <text x="550" y="110" font-size="20" fill="#888" text-anchor="middle">Open the door, don't close it</text>
            <rect x="80" y="160" width="440" height="380" rx="14" fill="#10b981" opacity="0.18" stroke="#10b981" stroke-width="2"/>
            <text x="300" y="200" font-size="24" font-weight="bold" fill="#10b981" text-anchor="middle">OPENS DIALOGUE</text>
            <text x="100" y="245" font-size="18" fill="#ffffff">Open-ended questions</text>
            <text x="120" y="270" font-size="15" fill="#888">"Tell me more about that."</text>
            <text x="100" y="310" font-size="18" fill="#ffffff">Reflection</text>
            <text x="120" y="335" font-size="15" fill="#888">"You sound frightened."</text>
            <text x="100" y="375" font-size="18" fill="#ffffff">Validation</text>
            <text x="120" y="400" font-size="15" fill="#888">"That makes sense given..."</text>
            <text x="100" y="440" font-size="18" fill="#ffffff">Therapeutic silence</text>
            <text x="120" y="465" font-size="15" fill="#888">Sit. Wait. Let them speak.</text>
            <text x="100" y="505" font-size="18" fill="#ffffff">Restating / clarifying</text>
            <text x="120" y="530" font-size="15" fill="#888">"You're saying the pain is worse?"</text>
            <rect x="580" y="160" width="440" height="380" rx="14" fill="#ef4444" opacity="0.18" stroke="#ef4444" stroke-width="2"/>
            <text x="800" y="200" font-size="24" font-weight="bold" fill="#ef4444" text-anchor="middle">CLOSES DIALOGUE</text>
            <text x="600" y="245" font-size="18" fill="#ffffff">False reassurance</text>
            <text x="620" y="270" font-size="15" fill="#888">"Everything will be fine."</text>
            <text x="600" y="310" font-size="18" fill="#ffffff">"Why" questions</text>
            <text x="620" y="335" font-size="15" fill="#888">"Why do you feel that way?"</text>
            <text x="600" y="375" font-size="18" fill="#ffffff">Changing the subject</text>
            <text x="620" y="400" font-size="15" fill="#888">"Let's talk about lunch."</text>
            <text x="600" y="440" font-size="18" fill="#ffffff">Giving advice</text>
            <text x="620" y="465" font-size="15" fill="#888">"You should just relax."</text>
            <text x="600" y="505" font-size="18" fill="#ffffff">Approving / disapproving</text>
            <text x="620" y="530" font-size="15" fill="#888">"That's a bad attitude."</text>
            <rect x="80" y="580" width="940" height="200" rx="14" fill="#6366f1" opacity="0.2" stroke="#6366f1" stroke-width="2"/>
            <text x="550" y="620" font-size="22" font-weight="bold" fill="#6366f1" text-anchor="middle">The NCLEX Scan</text>
            <text x="550" y="660" font-size="17" fill="#ffffff" text-anchor="middle">Read each option. Eliminate anything containing trap words:</text>
            <text x="550" y="695" font-size="17" fill="#ef4444" text-anchor="middle">"everything" • "fine" • "don't worry" • "why" • "should"</text>
            <text x="550" y="730" font-size="17" fill="#ffffff" text-anchor="middle">What remains: the option that invites the patient to keep talking.</text>
            <text x="550" y="760" font-size="16" fill="#888" text-anchor="middle">If two open-ended options remain, pick the one that addresses feelings.</text>
            <rect x="80" y="820" width="940" height="220" rx="14" fill="#f59e0b" opacity="0.18" stroke="#f59e0b" stroke-width="2"/>
            <text x="550" y="860" font-size="22" font-weight="bold" fill="#f59e0b" text-anchor="middle">Exception: Safety First</text>
            <text x="550" y="900" font-size="17" fill="#ffffff" text-anchor="middle">In a physical emergency (chest pain, bleeding, suicidal ideation),</text>
            <text x="550" y="930" font-size="17" fill="#ffffff" text-anchor="middle">collect FACTS before feelings.</text>
            <text x="550" y="975" font-size="16" fill="#888" text-anchor="middle">"Are you having thoughts of harming yourself right now?" beats</text>
            <text x="550" y="1000" font-size="16" fill="#888" text-anchor="middle">"Tell me how you've been feeling lately."</text>
          </svg>`,
          caption: "Open vs. close: the two-column scan that solves most NCLEX communication items."
        }
      },
      {
        type: "concept",
        title: "The Four Trap Patterns NCLEX Marks Wrong",
        content: `Memorize these four. Every wrong communication answer is a variation of one of them.

**1. False reassurance.** Any option containing "everything will be fine," "don't worry," "I'm sure you'll be okay," or "it could be worse" is wrong. It dismisses the patient's feelings and shuts down conversation. The patient learns: *don't bring this up again*.

**2. "Why" questions.** "Why are you crying?" "Why didn't you take your medication?" "Why" demands the patient justify themselves and triggers defensiveness. Replace with "Tell me what's happening" or "What got in the way of taking it?"

**3. Changing the subject.** A patient says, "I'm worried I have cancer." A wrong option redirects to vitals, meals, or the weather. This signals the topic is too uncomfortable for the nurse — and the patient is now alone with it.

**4. Asking about feelings before facts in an emergency.** If the patient just said "I'm having chest pain," the right move is "Describe the pain — where, how long, what makes it worse?" not "How does that make you feel?" Feelings come after the airway is open.

**Bonus traps:** giving advice ("you should..."), making promises you can't keep ("I'll make sure nothing bad happens"), and **approval/disapproval** ("That's the right attitude").`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="65" font-size="32" font-weight="bold" fill="#ffd700" text-anchor="middle">The Four Trap Patterns</text>
            <text x="550" y="105" font-size="18" fill="#888" text-anchor="middle">Every wrong answer is one of these</text>
            <rect x="60" y="150" width="490" height="220" rx="14" fill="#ef4444" opacity="0.15" stroke="#ef4444" stroke-width="2"/>
            <text x="80" y="190" font-size="22" font-weight="bold" fill="#ef4444">1. False Reassurance</text>
            <text x="80" y="225" font-size="15" fill="#888">WRONG:</text>
            <text x="80" y="250" font-size="16" fill="#ffffff">"Everything will be fine."</text>
            <text x="80" y="275" font-size="16" fill="#ffffff">"Don't worry about it."</text>
            <text x="80" y="305" font-size="15" fill="#10b981">RIGHT:</text>
            <text x="80" y="330" font-size="16" fill="#ffffff">"Tell me what worries you most."</text>
            <text x="80" y="358" font-size="14" fill="#888">Dismisses feelings → closes door</text>
            <rect x="560" y="150" width="490" height="220" rx="14" fill="#ef4444" opacity="0.15" stroke="#ef4444" stroke-width="2"/>
            <text x="580" y="190" font-size="22" font-weight="bold" fill="#ef4444">2. "Why" Questions</text>
            <text x="580" y="225" font-size="15" fill="#888">WRONG:</text>
            <text x="580" y="250" font-size="16" fill="#ffffff">"Why are you crying?"</text>
            <text x="580" y="275" font-size="16" fill="#ffffff">"Why didn't you take it?"</text>
            <text x="580" y="305" font-size="15" fill="#10b981">RIGHT:</text>
            <text x="580" y="330" font-size="16" fill="#ffffff">"What's going on right now?"</text>
            <text x="580" y="358" font-size="14" fill="#888">Demands justification → defensive</text>
            <rect x="60" y="390" width="490" height="220" rx="14" fill="#ef4444" opacity="0.15" stroke="#ef4444" stroke-width="2"/>
            <text x="80" y="430" font-size="22" font-weight="bold" fill="#ef4444">3. Changing Subject</text>
            <text x="80" y="465" font-size="15" fill="#888">WRONG:</text>
            <text x="80" y="490" font-size="16" fill="#ffffff">Pt: "I'm scared of cancer."</text>
            <text x="80" y="515" font-size="16" fill="#ffffff">RN: "Let's check your BP."</text>
            <text x="80" y="545" font-size="15" fill="#10b981">RIGHT:</text>
            <text x="80" y="570" font-size="16" fill="#ffffff">"Tell me about that fear."</text>
            <text x="80" y="598" font-size="14" fill="#888">Topic is too hot → patient alone</text>
            <rect x="560" y="390" width="490" height="220" rx="14" fill="#ef4444" opacity="0.15" stroke="#ef4444" stroke-width="2"/>
            <text x="580" y="430" font-size="22" font-weight="bold" fill="#ef4444">4. Feelings Before Facts</text>
            <text x="580" y="465" font-size="15" fill="#888">WRONG (emergency):</text>
            <text x="580" y="490" font-size="16" fill="#ffffff">Pt: "Chest pain!"</text>
            <text x="580" y="515" font-size="16" fill="#ffffff">RN: "How does that feel?"</text>
            <text x="580" y="545" font-size="15" fill="#10b981">RIGHT:</text>
            <text x="580" y="570" font-size="16" fill="#ffffff">"Where? On a scale of 0–10?"</text>
            <text x="580" y="598" font-size="14" fill="#888">Airway first, emotions later</text>
            <rect x="60" y="640" width="990" height="200" rx="14" fill="#6366f1" opacity="0.2" stroke="#6366f1" stroke-width="2"/>
            <text x="550" y="680" font-size="22" font-weight="bold" fill="#6366f1" text-anchor="middle">Bonus Traps to Eliminate</text>
            <text x="100" y="720" font-size="17" fill="#ffffff">• Giving advice: "You should just relax." → patronizing</text>
            <text x="100" y="750" font-size="17" fill="#ffffff">• Making promises: "I won't let anything bad happen." → cannot guarantee</text>
            <text x="100" y="780" font-size="17" fill="#ffffff">• Approval / disapproval: "That's the right attitude." → judgmental</text>
            <text x="100" y="810" font-size="17" fill="#ffffff">• Defending staff: "Your nurse is excellent." → invalidates complaint</text>
            <rect x="60" y="870" width="990" height="170" rx="14" fill="#10b981" opacity="0.18" stroke="#10b981" stroke-width="2"/>
            <text x="550" y="910" font-size="22" font-weight="bold" fill="#10b981" text-anchor="middle">The Universal Right Answer Shape</text>
            <text x="550" y="950" font-size="18" fill="#ffffff" text-anchor="middle">Acknowledges feeling + invites elaboration + no judgment</text>
            <text x="550" y="990" font-size="17" fill="#888" text-anchor="middle">"You seem worried. Can you tell me more about what's on your mind?"</text>
            <text x="550" y="1020" font-size="15" fill="#888" text-anchor="middle">If that pattern is in an option — start there.</text>
          </svg>`,
          caption: "The four trap patterns and the universal right-answer shape."
        }
      },
      {
        type: "example",
        title: "Walking Through Real NCLEX Stems",
        content: `Let's apply the scan to three stems.

**Stem 1:** A patient scheduled for mastectomy tomorrow says, "I'm afraid I won't be the same after surgery." The options:
A) "Many women adjust well — you'll be fine."
B) "Why are you focused on the negative?"
C) "Tell me more about your concerns."
D) "Let's review your pre-op checklist."

A is **false reassurance** — eliminate. B is a **"why" question** — eliminate. D **changes the subject** — eliminate. **C is correct.** It opens dialogue.

**Stem 2:** A patient post-MI says, "I don't want to talk about my diet today." Options:
A) "You really should learn about it — it's important."
B) "Okay. I'll come back later when you're ready."
C) "Why don't you want to talk about it?"
D) "Your wife asked me to teach you."

A is **giving advice**. C is a **"why" question**. D **uses guilt**. **B is correct** — respects autonomy and leaves the door open.

**Stem 3 (safety exception):** A patient on the psych unit says, "I just want it all to end." Options:
A) "Tell me more about how you've been feeling."
B) "Are you having thoughts of killing yourself right now?"
C) "Things will get better with time."
D) "Let's go to group therapy."

**B is correct.** Suicidal ideation requires **direct factual assessment first**. Feelings come after safety.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="60" font-size="30" font-weight="bold" fill="#ffd700" text-anchor="middle">Three NCLEX Stems, Solved</text>
            <text x="550" y="95" font-size="18" fill="#888" text-anchor="middle">Eliminate the traps, what remains is correct</text>
            <rect x="50" y="135" width="1000" height="290" rx="14" fill="#6366f1" opacity="0.15" stroke="#6366f1" stroke-width="2"/>
            <text x="70" y="170" font-size="20" font-weight="bold" fill="#6366f1">STEM 1: Pre-mastectomy fear</text>
            <text x="70" y="200" font-size="15" fill="#888">Pt: "I'm afraid I won't be the same after surgery."</text>
            <text x="70" y="235" font-size="16" fill="#ef4444">A) "Many women adjust well — you'll be fine."</text>
            <text x="720" y="235" font-size="14" fill="#ef4444">FALSE REASSURANCE</text>
            <text x="70" y="265" font-size="16" fill="#ef4444">B) "Why are you focused on the negative?"</text>
            <text x="720" y="265" font-size="14" fill="#ef4444">"WHY" QUESTION</text>
            <text x="70" y="295" font-size="16" fill="#10b981">C) "Tell me more about your concerns."  ✓</text>
            <text x="720" y="295" font-size="14" fill="#10b981">OPEN-ENDED</text>
            <text x="70" y="325" font-size="16" fill="#ef4444">D) "Let's review your pre-op checklist."</text>
            <text x="720" y="325" font-size="14" fill="#ef4444">CHANGES SUBJECT</text>
            <text x="70" y="380" font-size="17" font-weight="bold" fill="#10b981">Answer: C — opens dialogue, acknowledges concern</text>
            <rect x="50" y="445" width="1000" height="280" rx="14" fill="#8b5cf6" opacity="0.15" stroke="#8b5cf6" stroke-width="2"/>
            <text x="70" y="480" font-size="20" font-weight="bold" fill="#8b5cf6">STEM 2: Refusing diet teaching</text>
            <text x="70" y="510" font-size="15" fill="#888">Pt post-MI: "I don't want to talk about my diet today."</text>
            <text x="70" y="545" font-size="16" fill="#ef4444">A) "You really should learn it — it's important."</text>
            <text x="720" y="545" font-size="14" fill="#ef4444">ADVICE / SHOULD</text>
            <text x="70" y="575" font-size="16" fill="#10b981">B) "Okay. I'll come back when you're ready."  ✓</text>
            <text x="720" y="575" font-size="14" fill="#10b981">RESPECTS AUTONOMY</text>
            <text x="70" y="605" font-size="16" fill="#ef4444">C) "Why don't you want to talk about it?"</text>
            <text x="720" y="605" font-size="14" fill="#ef4444">"WHY" QUESTION</text>
            <text x="70" y="635" font-size="16" fill="#ef4444">D) "Your wife asked me to teach you."</text>
            <text x="720" y="635" font-size="14" fill="#ef4444">GUILT / PRESSURE</text>
            <text x="70" y="685" font-size="17" font-weight="bold" fill="#10b981">Answer: B — leaves door open without coercion</text>
            <rect x="50" y="745" width="1000" height="310" rx="14" fill="#ef4444" opacity="0.15" stroke="#ef4444" stroke-width="2"/>
            <text x="70" y="780" font-size="20" font-weight="bold" fill="#ef4444">STEM 3: Safety Exception</text>
            <text x="70" y="810" font-size="15" fill="#888">Pt: "I just want it all to end."</text>
            <text x="70" y="845" font-size="16" fill="#f59e0b">A) "Tell me how you've been feeling lately."</text>
            <text x="720" y="845" font-size="14" fill="#f59e0b">FEELINGS FIRST — NO</text>
            <text x="70" y="875" font-size="16" fill="#10b981">B) "Are you thinking of killing yourself now?"  ✓</text>
            <text x="720" y="875" font-size="14" fill="#10b981">FACTS / SAFETY</text>
            <text x="70" y="905" font-size="16" fill="#ef4444">C) "Things will get better with time."</text>
            <text x="720" y="905" font-size="14" fill="#ef4444">FALSE REASSURANCE</text>
            <text x="70" y="935" font-size="16" fill="#ef4444">D) "Let's go to group therapy."</text>
            <text x="720" y="935" font-size="14" fill="#ef4444">CHANGES SUBJECT</text>
            <text x="70" y="990" font-size="17" font-weight="bold" fill="#10b981">Answer: B — direct factual assessment, safety overrides</text>
            <text x="70" y="1020" font-size="15" fill="#888">Rule: in physical or psych emergency, get FACTS before feelings.</text>
          </svg>`,
          caption: "Three solved stems showing the elimination-by-trap-pattern method."
        }
      },
      {
        type: "quiz",
        title: "Quiz: Pick the Therapeutic Response",
        content: `Test your scan.`,
        question: "A patient newly diagnosed with diabetes states, 'I'll never be able to give myself injections — I can't do this.' Which response by the nurse is most therapeutic?",
        options: [
          { text: "Don't worry. Most patients learn how to inject themselves quickly.", correct: false },
          { text: "Why do you feel that way about giving injections?", correct: false },
          { text: "Learning a new skill can feel overwhelming. Tell me what concerns you most.", correct: true },
          { text: "You'll have to learn — there's no other way to control your blood sugar.", correct: false }
        ],
        explanation: `The correct answer **validates the feeling** ("can feel overwhelming") and then **invites elaboration** with an open-ended prompt — the universal right-answer shape on NCLEX.

Option 1 is **false reassurance** ("Don't worry" + "Most patients..."). It dismisses the patient's specific fear by generalizing.

Option 2 is a **"why" question**, which forces the patient to justify their emotion and breeds defensiveness.

Option 4 **gives advice with pressure** ("You'll have to") and offers no emotional acknowledgment — it shuts down dialogue and ignores the patient's distress. On NCLEX, the response that **acknowledges + invites** beats any response that **reassures, demands, or instructs**.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="65" font-size="30" font-weight="bold" fill="#ffd700" text-anchor="middle">Quiz Breakdown</text>
            <text x="550" y="105" font-size="18" fill="#888" text-anchor="middle">"I'll never be able to inject myself."</text>
            <rect x="60" y="145" width="980" height="150" rx="14" fill="#ef4444" opacity="0.15" stroke="#ef4444" stroke-width="2"/>
            <text x="80" y="185" font-size="20" font-weight="bold" fill="#ef4444">Option 1 — WRONG</text>
            <text x="80" y="220" font-size="17" fill="#ffffff">"Don't worry. Most patients learn quickly."</text>
            <text x="80" y="255" font-size="16" fill="#888">Trap: false reassurance + generalization</text>
            <text x="80" y="280" font-size="15" fill="#888">Dismisses the unique fear → patient learns to stop sharing</text>
            <rect x="60" y="315" width="980" height="150" rx="14" fill="#ef4444" opacity="0.15" stroke="#ef4444" stroke-width="2"/>
            <text x="80" y="355" font-size="20" font-weight="bold" fill="#ef4444">Option 2 — WRONG</text>
            <text x="80" y="390" font-size="17" fill="#ffffff">"Why do you feel that way?"</text>
            <text x="80" y="425" font-size="16" fill="#888">Trap: "why" question</text>
            <text x="80" y="450" font-size="15" fill="#888">Demands self-justification → defensive shutdown</text>
            <rect x="60" y="485" width="980" height="180" rx="14" fill="#10b981" opacity="0.2" stroke="#10b981" stroke-width="3"/>
            <text x="80" y="525" font-size="20" font-weight="bold" fill="#10b981">Option 3 — CORRECT ✓</text>
            <text x="80" y="560" font-size="17" fill="#ffffff">"Learning a new skill can feel overwhelming.</text>
            <text x="80" y="585" font-size="17" fill="#ffffff">Tell me what concerns you most."</text>
            <text x="80" y="620" font-size="16" fill="#10b981">Validates feeling + open-ended invitation</text>
            <text x="80" y="650" font-size="15" fill="#888">The universal right-answer shape</text>
            <rect x="60" y="685" width="980" height="150" rx="14" fill="#ef4444" opacity="0.15" stroke="#ef4444" stroke-width="2"/>
            <text x="80" y="725" font-size="20" font-weight="bold" fill="#ef4444">Option 4 — WRONG</text>
            <text x="80" y="760" font-size="17" fill="#ffffff">"You'll have to learn — no other way."</text>
            <text x="80" y="795" font-size="16" fill="#888">Trap: advice + pressure ("you'll have to")</text>
            <text x="80" y="820" font-size="15" fill="#888">No acknowledgment of distress → coercive</text>
            <rect x="60" y="860" width="980" height="180" rx="14" fill="#6366f1" opacity="0.2" stroke="#6366f1" stroke-width="2"/>
            <text x="550" y="900" font-size="22" font-weight="bold" fill="#6366f1" text-anchor="middle">The Pattern</text>
            <text x="550" y="940" font-size="17" fill="#ffffff" text-anchor="middle">Acknowledge → Invite → No judgment, no advice, no "why"</text>
            <text x="550" y="975" font-size="16" fill="#888" text-anchor="middle">3 wrong answers each violate one trap pattern.</text>
            <text x="550" y="1005" font-size="16" fill="#888" text-anchor="middle">1 right answer follows the universal shape.</text>
          </svg>`,
          caption: "Quiz breakdown: three traps, one universal right-answer shape."
        }
      },
      {
        type: "application",
        title: "Bedside Practice: Building Your Phrase Bank",
        content: `On the floor, you don't have time to deliberate over each sentence. You need a **rehearsed phrase bank** that comes out automatically.

**The five go-to openings.** Memorize and use these verbatim until they feel natural:
1. "Tell me more about that."
2. "What's been on your mind?"
3. "Help me understand what you're experiencing."
4. "It sounds like you're feeling ____. Is that right?"
5. *(silence — count to 10 before speaking)*

**The reflection technique.** Mirror the patient's words back: "You said the pain feels different today — different how?" This proves you're listening and invites detail without pushing.

**The validation move.** "Given everything you've been through, that reaction makes complete sense." Validation is **not agreement** — you can validate the feeling without endorsing the action.

**Therapeutic silence.** When a patient cries or pauses, **do not fill the space**. Sit. Make eye contact. Hand them a tissue. NCLEX often lists "remains silent and sits with the patient" as the correct option — choose it.

**Cultural humility.** Eye contact, touch, and personal space vary by culture. When unsure, ask: "Is there anything about your background I should know to take better care of you?" That single question is therapeutic, respectful, and patient-centered all at once.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="65" font-size="32" font-weight="bold" fill="#ffd700" text-anchor="middle">Your Phrase Bank</text>
            <text x="550" y="105" font-size="18" fill="#888" text-anchor="middle">Rehearsed lines for the bedside</text>
            <rect x="60" y="145" width="980" height="280" rx="14" fill="#10b981" opacity="0.18" stroke="#10b981" stroke-width="2"/>
            <text x="550" y="185" font-size="22" font-weight="bold" fill="#10b981" text-anchor="middle">Five Go-To Openings</text>
            <text x="100" y="225" font-size="18" fill="#ffffff">1. "Tell me more about that."</text>
            <text x="100" y="260" font-size="18" fill="#ffffff">2. "What's been on your mind?"</text>
            <text x="100" y="295" font-size="18" fill="#ffffff">3. "Help me understand what you're experiencing."</text>
            <text x="100" y="330" font-size="18" fill="#ffffff">4. "It sounds like you're feeling ____. Is that right?"</text>
            <text x="100" y="365" font-size="18" fill="#ffffff">5. (Therapeutic silence — count to 10)</text>
            <text x="550" y="405" font-size="15" fill="#888" text-anchor="middle">Use verbatim until they feel automatic</text>
            <rect x="60" y="445" width="475" height="270" rx="14" fill="#6366f1" opacity="0.18" stroke="#6366f1" stroke-width="2"/>
            <text x="297" y="485" font-size="20" font-weight="bold" fill="#6366f1" text-anchor="middle">Reflection</text>
            <text x="80" y="520" font-size="15" fill="#888">Mirror their own words back:</text>
            <text x="80" y="555" font-size="16" fill="#ffffff">Pt: "The pain feels different today."</text>
            <text x="80" y="590" font-size="16" fill="#ffffff">RN: "Different how?"</text>
            <text x="80" y="625" font-size="15" fill="#888">Proves listening, invites detail,</text>
            <text x="80" y="650" font-size="15" fill="#888">no leading or judging.</text>
            <text x="80" y="690" font-size="14" fill="#10b981">Common NCLEX-correct option.</text>
            <rect x="565" y="445" width="475" height="270" rx="14" fill="#8b5cf6" opacity="0.18" stroke="#8b5cf6" stroke-width="2"/>
            <text x="802" y="485" font-size="20" font-weight="bold" fill="#8b5cf6" text-anchor="middle">Validation</text>
            <text x="585" y="520" font-size="15" fill="#888">Acknowledge the feeling as reasonable:</text>
            <text x="585" y="555" font-size="16" fill="#ffffff">"Given what you've been through,</text>
            <text x="585" y="580" font-size="16" fill="#ffffff">that reaction makes complete sense."</text>
            <text x="585" y="620" font-size="15" fill="#888">Validation ≠ agreement.</text>
            <text x="585" y="645" font-size="15" fill="#888">You can validate without endorsing</text>
            <text x="585" y="670" font-size="15" fill="#888">behavior.</text>
            <rect x="60" y="735" width="980" height="140" rx="14" fill="#f59e0b" opacity="0.18" stroke="#f59e0b" stroke-width="2"/>
            <text x="550" y="775" font-size="20" font-weight="bold" fill="#f59e0b" text-anchor="middle">Therapeutic Silence</text>
            <text x="550" y="810" font-size="17" fill="#ffffff" text-anchor="middle">When the patient cries or pauses, DO NOT fill the space.</text>
            <text x="550" y="840" font-size="17" fill="#ffffff" text-anchor="middle">Sit. Make eye contact. Offer tissue.</text>
            <text x="550" y="865" font-size="15" fill="#888" text-anchor="middle">"Nurse sits quietly with patient" is often the NCLEX-correct option.</text>
            <rect x="60" y="895" width="980" height="145" rx="14" fill="#ec4899" opacity="0.18" stroke="#ec4899" stroke-width="2"/>
            <text x="550" y="935" font-size="20" font-weight="bold" fill="#ec4899" text-anchor="middle">Cultural Humility</text>
            <text x="550" y="970" font-size="17" fill="#ffffff" text-anchor="middle">Eye contact, touch, and personal space vary by culture.</text>
            <text x="550" y="1000" font-size="16" fill="#ffffff" text-anchor="middle">"Is there anything about your background I should know to care for you?"</text>
            <text x="550" y="1025" font-size="15" fill="#888" text-anchor="middle">One question = therapeutic + respectful + patient-centered.</text>
          </svg>`,
          caption: "Bedside phrase bank: rehearsed lines that pass NCLEX and serve real patients."
        }
      }
    ]
  },
  {
    id: "nclex-fundamentals-lesson-5",
    title: "Delegation: RN vs. LPN/LVN vs. UAP — The Five Rights",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "Why Delegation Questions Feel Like Traps",
        content: `**Delegation** is one of the highest-yield NCLEX categories — and one of the most missed. The reason: students try to memorize task lists for each role instead of applying a small, repeatable framework.

The framework is **the Five Rights of Delegation** (from the NCSBN): right **task**, right **circumstance**, right **person**, right **direction/communication**, and right **supervision/evaluation**. Every delegation question is solvable by checking which "right" is violated.

Layered on top is the **scope-of-practice hierarchy**. The **RN** assesses, plans, evaluates, teaches, and handles unstable patients and IV push meds. The **LPN/LVN** reinforces teaching, gives most PO/IM/SQ meds, monitors stable patients, and performs sterile dressing changes. The **UAP** (unlicensed assistive personnel — CNAs, PCTs) does ADLs, vital signs on stable patients, I&Os, ambulation, and basic comfort care.

The four **never-delegate-from-the-RN** tasks: **assessment**, the **unstable patient**, **teaching**, and **IV push meds**. Memorize these and a large fraction of delegation items collapse.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="65" font-size="32" font-weight="bold" fill="#ffd700" text-anchor="middle">Delegation Decoded</text>
            <text x="550" y="105" font-size="18" fill="#888" text-anchor="middle">A framework, not a memorized list</text>
            <rect x="60" y="145" width="980" height="220" rx="14" fill="#6366f1" opacity="0.2" stroke="#6366f1" stroke-width="2"/>
            <text x="550" y="185" font-size="22" font-weight="bold" fill="#6366f1" text-anchor="middle">The Five Rights of Delegation (NCSBN)</text>
            <text x="100" y="225" font-size="17" fill="#ffffff">1. Right TASK — within delegatee's scope and skills</text>
            <text x="100" y="255" font-size="17" fill="#ffffff">2. Right CIRCUMSTANCE — patient stable, outcome predictable</text>
            <text x="100" y="285" font-size="17" fill="#ffffff">3. Right PERSON — competent and trained for THIS patient</text>
            <text x="100" y="315" font-size="17" fill="#ffffff">4. Right DIRECTION — clear, specific instructions and limits</text>
            <text x="100" y="345" font-size="17" fill="#ffffff">5. Right SUPERVISION — RN follows up, evaluates outcome</text>
            <rect x="60" y="385" width="310" height="320" rx="14" fill="#10b981" opacity="0.2" stroke="#10b981" stroke-width="2"/>
            <text x="215" y="425" font-size="22" font-weight="bold" fill="#10b981" text-anchor="middle">RN</text>
            <text x="215" y="455" font-size="14" fill="#888" text-anchor="middle">Registered Nurse</text>
            <text x="80" y="495" font-size="15" fill="#ffffff">• Assessment</text>
            <text x="80" y="525" font-size="15" fill="#ffffff">• Care planning</text>
            <text x="80" y="555" font-size="15" fill="#ffffff">• Patient teaching</text>
            <text x="80" y="585" font-size="15" fill="#ffffff">• Unstable patient</text>
            <text x="80" y="615" font-size="15" fill="#ffffff">• IV push meds</text>
            <text x="80" y="645" font-size="15" fill="#ffffff">• Evaluation</text>
            <text x="80" y="675" font-size="15" fill="#ffffff">• Blood transfusions</text>
            <rect x="395" y="385" width="310" height="320" rx="14" fill="#f59e0b" opacity="0.2" stroke="#f59e0b" stroke-width="2"/>
            <text x="550" y="425" font-size="22" font-weight="bold" fill="#f59e0b" text-anchor="middle">LPN/LVN</text>
            <text x="550" y="455" font-size="14" fill="#888" text-anchor="middle">Licensed Practical</text>
            <text x="415" y="495" font-size="15" fill="#ffffff">• Reinforce teaching</text>
            <text x="415" y="525" font-size="15" fill="#ffffff">• PO / IM / SQ meds</text>
            <text x="415" y="555" font-size="15" fill="#ffffff">• Stable patient monitor</text>
            <text x="415" y="585" font-size="15" fill="#ffffff">• Sterile dressings</text>
            <text x="415" y="615" font-size="15" fill="#ffffff">• Foley insertion</text>
            <text x="415" y="645" font-size="15" fill="#ffffff">• Tracheostomy care</text>
            <text x="415" y="675" font-size="15" fill="#ffffff">• Data collection</text>
            <rect x="730" y="385" width="310" height="320" rx="14" fill="#8b5cf6" opacity="0.2" stroke="#8b5cf6" stroke-width="2"/>
            <text x="885" y="425" font-size="22" font-weight="bold" fill="#8b5cf6" text-anchor="middle">UAP</text>
            <text x="885" y="455" font-size="14" fill="#888" text-anchor="middle">CNA / PCT / NA</text>
            <text x="750" y="495" font-size="15" fill="#ffffff">• ADLs (bath, feed)</text>
            <text x="750" y="525" font-size="15" fill="#ffffff">• Vitals (STABLE pts)</text>
            <text x="750" y="555" font-size="15" fill="#ffffff">• I&Os, weights</text>
            <text x="750" y="585" font-size="15" fill="#ffffff">• Ambulation</text>
            <text x="750" y="615" font-size="15" fill="#ffffff">• Linen / hygiene</text>
            <text x="750" y="645" font-size="15" fill="#ffffff">• Basic glucose check</text>
            <text x="750" y="675" font-size="15" fill="#ffffff">• Position / comfort</text>
            <rect x="60" y="730" width="980" height="310" rx="14" fill="#ef4444" opacity="0.18" stroke="#ef4444" stroke-width="2"/>
            <text x="550" y="775" font-size="24" font-weight="bold" fill="#ef4444" text-anchor="middle">NEVER Delegate from the RN</text>
            <text x="550" y="820" font-size="20" fill="#ffffff" text-anchor="middle">A — Assessment (initial)</text>
            <text x="550" y="860" font-size="20" fill="#ffffff" text-anchor="middle">U — Unstable patient</text>
            <text x="550" y="900" font-size="20" fill="#ffffff" text-anchor="middle">T — Teaching (initial)</text>
            <text x="550" y="940" font-size="20" fill="#ffffff" text-anchor="middle">I — IV push medications</text>
            <text x="550" y="990" font-size="17" fill="#888" text-anchor="middle">Mnemonic: A.U.T.I. — these four belong to the RN, period.</text>
            <text x="550" y="1020" font-size="15" fill="#888" text-anchor="middle">Plus: blood administration, first-dose meds, evaluation of outcomes.</text>
          </svg>`,
          caption: "Five Rights + scope hierarchy + A.U.T.I. — the framework that solves most delegation items."
        }
      },
      {
        type: "concept",
        title: "Scope of Practice: Who Does What",
        content: `Let's drill into the boundaries.

**Registered Nurse (RN).** Owns the **nursing process**: initial **assessment**, **planning**, initial **teaching**, **evaluation** of outcomes. Manages **unstable** or unpredictable patients. Administers **IV push** medications, **blood products**, and **first-dose** meds (the patient hasn't been observed for reaction yet). Performs **admission**, **discharge**, and **transfer** assessments.

**Licensed Practical Nurse (LPN/LVN).** Works under RN supervision. **Reinforces** RN-initiated teaching (does not initiate). Administers **PO, IM, SQ, and inhaled** meds — typically not IV push (state-dependent). Monitors **stable** patients. Performs **sterile** procedures (dressing changes, Foley insertion, NG insertion). Provides **tracheostomy** and **ostomy** care. **Collects** data (RN interprets it). Can administer enteral feedings.

**Unlicensed Assistive Personnel (UAP / CNA / PCT).** **ADLs**: bathing, feeding, oral care, dressing. **Vital signs on stable patients** (not unstable). **I&Os**, **weights**, **ambulation**, **transfers**, **positioning**. Basic **glucose** checks where state allows. Reports findings — **never interprets** them.

**The hierarchy rule.** A task can always be done by someone **above** the listed level, but never below. An RN can take vitals; a UAP cannot administer meds. When in doubt, **delegate down only if** the task is routine, the patient is stable, and the outcome is predictable.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="65" font-size="32" font-weight="bold" fill="#ffd700" text-anchor="middle">Scope of Practice Matrix</text>
            <text x="550" y="105" font-size="18" fill="#888" text-anchor="middle">Tasks × Roles — who can do it?</text>
            <rect x="60" y="150" width="980" height="50" fill="#6366f1" opacity="0.3" stroke="#6366f1" stroke-width="1"/>
            <text x="350" y="183" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">TASK</text>
            <text x="650" y="183" font-size="18" font-weight="bold" fill="#10b981" text-anchor="middle">RN</text>
            <text x="780" y="183" font-size="18" font-weight="bold" fill="#f59e0b" text-anchor="middle">LPN/LVN</text>
            <text x="940" y="183" font-size="18" font-weight="bold" fill="#8b5cf6" text-anchor="middle">UAP</text>
            <line x1="60" y1="200" x2="1040" y2="200" stroke="#888" stroke-width="1"/>
            <text x="80" y="235" font-size="16" fill="#ffffff">Initial assessment</text>
            <text x="650" y="235" font-size="20" fill="#10b981" text-anchor="middle">✓</text>
            <text x="780" y="235" font-size="20" fill="#ef4444" text-anchor="middle">✗</text>
            <text x="940" y="235" font-size="20" fill="#ef4444" text-anchor="middle">✗</text>
            <text x="80" y="270" font-size="16" fill="#ffffff">Patient teaching (initial)</text>
            <text x="650" y="270" font-size="20" fill="#10b981" text-anchor="middle">✓</text>
            <text x="780" y="270" font-size="20" fill="#ef4444" text-anchor="middle">✗</text>
            <text x="940" y="270" font-size="20" fill="#ef4444" text-anchor="middle">✗</text>
            <text x="80" y="305" font-size="16" fill="#ffffff">Reinforce teaching</text>
            <text x="650" y="305" font-size="20" fill="#10b981" text-anchor="middle">✓</text>
            <text x="780" y="305" font-size="20" fill="#10b981" text-anchor="middle">✓</text>
            <text x="940" y="305" font-size="20" fill="#ef4444" text-anchor="middle">✗</text>
            <text x="80" y="340" font-size="16" fill="#ffffff">Unstable patient care</text>
            <text x="650" y="340" font-size="20" fill="#10b981" text-anchor="middle">✓</text>
            <text x="780" y="340" font-size="20" fill="#ef4444" text-anchor="middle">✗</text>
            <text x="940" y="340" font-size="20" fill="#ef4444" text-anchor="middle">✗</text>
            <text x="80" y="375" font-size="16" fill="#ffffff">IV push meds</text>
            <text x="650" y="375" font-size="20" fill="#10b981" text-anchor="middle">✓</text>
            <text x="780" y="375" font-size="20" fill="#ef4444" text-anchor="middle">✗</text>
            <text x="940" y="375" font-size="20" fill="#ef4444" text-anchor="middle">✗</text>
            <text x="80" y="410" font-size="16" fill="#ffffff">Blood administration</text>
            <text x="650" y="410" font-size="20" fill="#10b981" text-anchor="middle">✓</text>
            <text x="780" y="410" font-size="20" fill="#ef4444" text-anchor="middle">✗</text>
            <text x="940" y="410" font-size="20" fill="#ef4444" text-anchor="middle">✗</text>
            <text x="80" y="445" font-size="16" fill="#ffffff">PO / IM / SQ meds</text>
            <text x="650" y="445" font-size="20" fill="#10b981" text-anchor="middle">✓</text>
            <text x="780" y="445" font-size="20" fill="#10b981" text-anchor="middle">✓</text>
            <text x="940" y="445" font-size="20" fill="#ef4444" text-anchor="middle">✗</text>
            <text x="80" y="480" font-size="16" fill="#ffffff">Sterile dressing change</text>
            <text x="650" y="480" font-size="20" fill="#10b981" text-anchor="middle">✓</text>
            <text x="780" y="480" font-size="20" fill="#10b981" text-anchor="middle">✓</text>
            <text x="940" y="480" font-size="20" fill="#ef4444" text-anchor="middle">✗</text>
            <text x="80" y="515" font-size="16" fill="#ffffff">Foley / NG insertion</text>
            <text x="650" y="515" font-size="20" fill="#10b981" text-anchor="middle">✓</text>
            <text x="780" y="515" font-size="20" fill="#10b981" text-anchor="middle">✓</text>
            <text x="940" y="515" font-size="20" fill="#ef4444" text-anchor="middle">✗</text>
            <text x="80" y="550" font-size="16" fill="#ffffff">Tracheostomy care</text>
            <text x="650" y="550" font-size="20" fill="#10b981" text-anchor="middle">✓</text>
            <text x="780" y="550" font-size="20" fill="#10b981" text-anchor="middle">✓</text>
            <text x="940" y="550" font-size="20" fill="#ef4444" text-anchor="middle">✗</text>
            <text x="80" y="585" font-size="16" fill="#ffffff">Vitals — STABLE patient</text>
            <text x="650" y="585" font-size="20" fill="#10b981" text-anchor="middle">✓</text>
            <text x="780" y="585" font-size="20" fill="#10b981" text-anchor="middle">✓</text>
            <text x="940" y="585" font-size="20" fill="#10b981" text-anchor="middle">✓</text>
            <text x="80" y="620" font-size="16" fill="#ffffff">Vitals — UNSTABLE patient</text>
            <text x="650" y="620" font-size="20" fill="#10b981" text-anchor="middle">✓</text>
            <text x="780" y="620" font-size="20" fill="#f59e0b" text-anchor="middle">?</text>
            <text x="940" y="620" font-size="20" fill="#ef4444" text-anchor="middle">✗</text>
            <text x="80" y="655" font-size="16" fill="#ffffff">ADLs / bathing / feeding</text>
            <text x="650" y="655" font-size="20" fill="#10b981" text-anchor="middle">✓</text>
            <text x="780" y="655" font-size="20" fill="#10b981" text-anchor="middle">✓</text>
            <text x="940" y="655" font-size="20" fill="#10b981" text-anchor="middle">✓</text>
            <text x="80" y="690" font-size="16" fill="#ffffff">I&Os, weights, ambulation</text>
            <text x="650" y="690" font-size="20" fill="#10b981" text-anchor="middle">✓</text>
            <text x="780" y="690" font-size="20" fill="#10b981" text-anchor="middle">✓</text>
            <text x="940" y="690" font-size="20" fill="#10b981" text-anchor="middle">✓</text>
            <text x="80" y="725" font-size="16" fill="#ffffff">Glucose finger-stick (basic)</text>
            <text x="650" y="725" font-size="20" fill="#10b981" text-anchor="middle">✓</text>
            <text x="780" y="725" font-size="20" fill="#10b981" text-anchor="middle">✓</text>
            <text x="940" y="725" font-size="20" fill="#10b981" text-anchor="middle">✓</text>
            <text x="80" y="760" font-size="16" fill="#ffffff">Evaluation of outcomes</text>
            <text x="650" y="760" font-size="20" fill="#10b981" text-anchor="middle">✓</text>
            <text x="780" y="760" font-size="20" fill="#ef4444" text-anchor="middle">✗</text>
            <text x="940" y="760" font-size="20" fill="#ef4444" text-anchor="middle">✗</text>
            <rect x="60" y="800" width="980" height="240" rx="14" fill="#6366f1" opacity="0.2" stroke="#6366f1" stroke-width="2"/>
            <text x="550" y="840" font-size="22" font-weight="bold" fill="#6366f1" text-anchor="middle">The Hierarchy Rule</text>
            <text x="550" y="880" font-size="17" fill="#ffffff" text-anchor="middle">A task can be done by anyone AT or ABOVE the listed level.</text>
            <text x="550" y="910" font-size="17" fill="#ffffff" text-anchor="middle">An RN can do everything below; a UAP cannot do anything above.</text>
            <text x="550" y="950" font-size="16" fill="#888" text-anchor="middle">When in doubt, delegate down only if:</text>
            <text x="550" y="980" font-size="17" fill="#10b981" text-anchor="middle">routine task + stable patient + predictable outcome</text>
            <text x="550" y="1015" font-size="15" fill="#888" text-anchor="middle">If any of these is missing, the RN keeps the task.</text>
          </svg>`,
          caption: "Scope-of-practice matrix: 15 tasks across RN, LPN/LVN, and UAP."
        }
      },
      {
        type: "example",
        title: "Walking Through a Delegation Stem",
        content: `**Stem:** The RN is supervising on a med-surg unit with one LPN and one UAP. Which assignment is appropriate?

A) Assign the UAP to take vitals on a post-op day 1 hip replacement, alert and oriented.
B) Assign the LPN to perform the initial admission assessment on a new admit.
C) Assign the UAP to teach a newly diagnosed diabetic about insulin.
D) Assign the LPN to give IV push furosemide for acute pulmonary edema.

**Walking through it:**

**Option A.** UAP taking vitals on a **stable post-op patient** (alert, oriented, day 1, no listed instability). Vitals on stable patients are **within UAP scope**. Right task, right person, right circumstance. **This is appropriate.**

**Option B.** LPN doing **initial admission assessment**. Initial assessment is **RN-only** — it's part of the A in A.U.T.I. The LPN may collect data afterward, but the first head-to-toe is the RN's. **Wrong.**

**Option C.** UAP doing **initial teaching** on insulin. Teaching is **RN-only**; UAP doesn't even have the LPN's "reinforce" privilege. **Wrong.**

**Option D.** LPN giving **IV push** med to a patient in **acute pulmonary edema** — that patient is **unstable**, and **IV push is RN-only** in most states. Two violations in one option. **Wrong.**

**Answer: A.** The pattern: a single appropriate option survives both the **scope** check and the **stability** check.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="60" font-size="30" font-weight="bold" fill="#ffd700" text-anchor="middle">Delegation Stem Walkthrough</text>
            <text x="550" y="95" font-size="17" fill="#888" text-anchor="middle">Med-surg unit: RN + 1 LPN + 1 UAP — which assignment?</text>
            <rect x="50" y="130" width="1000" height="200" rx="14" fill="#10b981" opacity="0.2" stroke="#10b981" stroke-width="3"/>
            <text x="70" y="165" font-size="20" font-weight="bold" fill="#10b981">A) UAP → vitals on post-op day 1 hip, A&amp;O ✓ CORRECT</text>
            <text x="70" y="200" font-size="16" fill="#ffffff">Patient: alert, oriented, stable, predictable</text>
            <text x="70" y="230" font-size="16" fill="#ffffff">Task: vital signs (within UAP scope)</text>
            <text x="70" y="260" font-size="16" fill="#ffffff">Person: UAP trained for vitals</text>
            <text x="70" y="295" font-size="17" fill="#10b981">Five Rights: TASK ✓ CIRCUMSTANCE ✓ PERSON ✓ — appropriate</text>
            <rect x="50" y="350" width="1000" height="200" rx="14" fill="#ef4444" opacity="0.15" stroke="#ef4444" stroke-width="2"/>
            <text x="70" y="385" font-size="20" font-weight="bold" fill="#ef4444">B) LPN → initial admission assessment ✗</text>
            <text x="70" y="420" font-size="16" fill="#ffffff">Violates: Initial assessment is RN-only</text>
            <text x="70" y="450" font-size="16" fill="#ffffff">A.U.T.I. — A = Assessment</text>
            <text x="70" y="480" font-size="16" fill="#888">LPN may collect data later, but RN does the first head-to-toe</text>
            <text x="70" y="515" font-size="17" fill="#ef4444">Five Rights violated: TASK (out of scope)</text>
            <rect x="50" y="570" width="1000" height="200" rx="14" fill="#ef4444" opacity="0.15" stroke="#ef4444" stroke-width="2"/>
            <text x="70" y="605" font-size="20" font-weight="bold" fill="#ef4444">C) UAP → initial diabetes teaching ✗</text>
            <text x="70" y="640" font-size="16" fill="#ffffff">Violates: Teaching is RN-only</text>
            <text x="70" y="670" font-size="16" fill="#ffffff">A.U.T.I. — T = Teaching</text>
            <text x="70" y="700" font-size="16" fill="#888">UAP has no teaching role at all (LPN may reinforce, not initiate)</text>
            <text x="70" y="735" font-size="17" fill="#ef4444">Five Rights violated: TASK, PERSON</text>
            <rect x="50" y="790" width="1000" height="240" rx="14" fill="#ef4444" opacity="0.15" stroke="#ef4444" stroke-width="2"/>
            <text x="70" y="825" font-size="20" font-weight="bold" fill="#ef4444">D) LPN → IV push furosemide, acute pulm edema ✗</text>
            <text x="70" y="860" font-size="16" fill="#ffffff">Violation 1: IV push is RN-only (A.U.T.I. — I)</text>
            <text x="70" y="890" font-size="16" fill="#ffffff">Violation 2: Acute pulmonary edema = UNSTABLE patient</text>
            <text x="70" y="920" font-size="16" fill="#ffffff">A.U.T.I. — U = Unstable</text>
            <text x="70" y="955" font-size="17" fill="#ef4444">Five Rights violated: TASK + CIRCUMSTANCE</text>
            <text x="550" y="1000" font-size="22" font-weight="bold" fill="#10b981" text-anchor="middle">ANSWER: A</text>
          </svg>`,
          caption: "Each wrong option violates A.U.T.I. or one of the Five Rights — A survives both checks."
        }
      },
      {
        type: "quiz",
        title: "Quiz: Pick the Right Delegation",
        content: `Apply the framework.`,
        question: "Which task may the RN appropriately delegate to the UAP (CNA)?",
        options: [
          { text: "Assessing pain level in a patient who received IV morphine 30 minutes ago.", correct: false },
          { text: "Performing a sterile dressing change on a post-op abdominal incision.", correct: false },
          { text: "Assisting a stable post-stroke patient with morning hygiene and ambulation.", correct: true },
          { text: "Teaching a newly diagnosed COPD patient how to use a metered-dose inhaler.", correct: false }
        ],
        explanation: `The correct answer involves **ADLs (hygiene) and ambulation** on a **stable** patient — squarely within the UAP scope. The task is routine, the patient is stable, and the outcome is predictable. All Five Rights are satisfied.

Option 1 asks the UAP to **assess pain** — pain assessment is **part of the nursing assessment** (the A in A.U.T.I.) and the UAP cannot interpret or evaluate response to a medication. The RN must assess pain and evaluate medication effect.

Option 2 is a **sterile dressing change**, which is an **LPN/RN** task — UAPs do not perform sterile procedures.

Option 4 is **initial patient teaching**, which is **RN-only** (the T in A.U.T.I.). UAPs have no teaching role; even LPNs can only *reinforce* teaching, not initiate it. Only option 3 satisfies the routine + stable + predictable rule.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="60" font-size="30" font-weight="bold" fill="#ffd700" text-anchor="middle">Quiz Breakdown</text>
            <text x="550" y="100" font-size="18" fill="#888" text-anchor="middle">Which task can be delegated to UAP?</text>
            <rect x="60" y="135" width="980" height="170" rx="14" fill="#ef4444" opacity="0.15" stroke="#ef4444" stroke-width="2"/>
            <text x="80" y="175" font-size="20" font-weight="bold" fill="#ef4444">Option 1 — WRONG</text>
            <text x="80" y="210" font-size="17" fill="#ffffff">Assess pain after IV morphine</text>
            <text x="80" y="245" font-size="16" fill="#888">Violates: A.U.T.I. — Assessment is RN-only</text>
            <text x="80" y="275" font-size="16" fill="#888">UAP cannot evaluate response to a medication</text>
            <rect x="60" y="320" width="980" height="170" rx="14" fill="#ef4444" opacity="0.15" stroke="#ef4444" stroke-width="2"/>
            <text x="80" y="360" font-size="20" font-weight="bold" fill="#ef4444">Option 2 — WRONG</text>
            <text x="80" y="395" font-size="17" fill="#ffffff">Sterile dressing change on post-op abd incision</text>
            <text x="80" y="430" font-size="16" fill="#888">Violates: Sterile procedures are LPN/RN only</text>
            <text x="80" y="460" font-size="16" fill="#888">UAP scope ends at clean, non-sterile care</text>
            <rect x="60" y="505" width="980" height="195" rx="14" fill="#10b981" opacity="0.2" stroke="#10b981" stroke-width="3"/>
            <text x="80" y="545" font-size="20" font-weight="bold" fill="#10b981">Option 3 — CORRECT ✓</text>
            <text x="80" y="580" font-size="17" fill="#ffffff">Assist STABLE post-stroke patient with hygiene + ambulation</text>
            <text x="80" y="615" font-size="16" fill="#10b981">All Five Rights satisfied:</text>
            <text x="80" y="645" font-size="15" fill="#ffffff">Right task (ADLs) • Right circumstance (stable)</text>
            <text x="80" y="670" font-size="15" fill="#ffffff">Right person (UAP trained) • RN supervises</text>
            <rect x="60" y="715" width="980" height="170" rx="14" fill="#ef4444" opacity="0.15" stroke="#ef4444" stroke-width="2"/>
            <text x="80" y="755" font-size="20" font-weight="bold" fill="#ef4444">Option 4 — WRONG</text>
            <text x="80" y="790" font-size="17" fill="#ffffff">Teach COPD patient how to use MDI</text>
            <text x="80" y="825" font-size="16" fill="#888">Violates: A.U.T.I. — Teaching is RN-only</text>
            <text x="80" y="855" font-size="16" fill="#888">UAP has NO teaching role (even LPN can only reinforce)</text>
            <rect x="60" y="900" width="980" height="145" rx="14" fill="#6366f1" opacity="0.2" stroke="#6366f1" stroke-width="2"/>
            <text x="550" y="940" font-size="22" font-weight="bold" fill="#6366f1" text-anchor="middle">Pattern Check</text>
            <text x="550" y="975" font-size="17" fill="#ffffff" text-anchor="middle">Routine task + Stable patient + Predictable outcome</text>
            <text x="550" y="1010" font-size="16" fill="#888" text-anchor="middle">Option 3 = the only one that hits all three. Others violate A.U.T.I.</text>
          </svg>`,
          caption: "Quiz breakdown: A.U.T.I. eliminates three options, leaving the routine-stable-predictable winner."
        }
      },
      {
        type: "application",
        title: "Real-Floor Delegation: Charge Nurse Triage",
        content: `On a real shift, you're the **charge RN** making assignments in 60 seconds. Use this triage workflow.

**Step 1 — Patient acuity sort.** Scan the board for the **unstable, unpredictable, or new admits**. These belong to **you (RN)** — period. New post-ops in first 24 hours, fresh strokes, sepsis on pressors, anyone titrating IV gtts.

**Step 2 — LPN block.** Hand the LPN the **stable medical patients** who need PO/IM meds, sterile dressing changes, Foley care, or tube feedings. Pair them with patients whose assessments **you** have already completed once today.

**Step 3 — UAP block.** Give the UAP the **ADL-heavy stable patients**: bathing, ambulation, I&Os, q-shift vitals on stable patients, blood glucose checks. **Specify what to report back**: "Tell me if any vitals fall outside these parameters" or "Let me know when intake hits 500 mL."

**Step 4 — The Five Rights checklist before you walk away.** Right task? Right circumstance (patient stable)? Right person (competent)? Right direction (specific instructions + report-back triggers)? Right supervision (you'll round and evaluate)?

**Watch-out: the "I'll just do it myself" trap.** Refusing to delegate appropriate tasks is also wrong — it overloads the RN and leaves UAPs/LPNs underutilized. NCLEX rewards **appropriate delegation**, not heroic self-reliance.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="60" font-size="32" font-weight="bold" fill="#ffd700" text-anchor="middle">Charge Nurse Triage</text>
            <text x="550" y="100" font-size="18" fill="#888" text-anchor="middle">60-second assignment workflow</text>
            <rect x="60" y="140" width="980" height="180" rx="14" fill="#ef4444" opacity="0.18" stroke="#ef4444" stroke-width="2"/>
            <text x="80" y="180" font-size="22" font-weight="bold" fill="#ef4444">Step 1 — RN keeps these</text>
            <text x="80" y="215" font-size="17" fill="#ffffff">• Unstable / titrating drips / on pressors</text>
            <text x="80" y="245" font-size="17" fill="#ffffff">• New admits (initial assessment)</text>
            <text x="80" y="275" font-size="17" fill="#ffffff">• Post-op &lt; 24 hr, fresh stroke, sepsis</text>
            <text x="80" y="305" font-size="17" fill="#ffffff">• IV push meds, blood, first-dose meds</text>
            <rect x="60" y="340" width="980" height="180" rx="14" fill="#f59e0b" opacity="0.18" stroke="#f59e0b" stroke-width="2"/>
            <text x="80" y="380" font-size="22" font-weight="bold" fill="#f59e0b">Step 2 — LPN block</text>
            <text x="80" y="415" font-size="17" fill="#ffffff">• Stable med patients (RN already assessed today)</text>
            <text x="80" y="445" font-size="17" fill="#ffffff">• PO / IM / SQ meds; sterile dressings</text>
            <text x="80" y="475" font-size="17" fill="#ffffff">• Foley care, NG/tube feeds, tracheostomy care</text>
            <text x="80" y="505" font-size="17" fill="#ffffff">• Reinforce teaching RN started</text>
            <rect x="60" y="540" width="980" height="180" rx="14" fill="#8b5cf6" opacity="0.18" stroke="#8b5cf6" stroke-width="2"/>
            <text x="80" y="580" font-size="22" font-weight="bold" fill="#8b5cf6">Step 3 — UAP block</text>
            <text x="80" y="615" font-size="17" fill="#ffffff">• ADLs: bath, feed, hygiene, oral care</text>
            <text x="80" y="645" font-size="17" fill="#ffffff">• Ambulation, transfers, positioning</text>
            <text x="80" y="675" font-size="17" fill="#ffffff">• Vitals on STABLE pts, I&amp;Os, weights</text>
            <text x="80" y="705" font-size="17" fill="#ffffff">• Give explicit report-back triggers</text>
            <rect x="60" y="740" width="980" height="170" rx="14" fill="#10b981" opacity="0.2" stroke="#10b981" stroke-width="2"/>
            <text x="80" y="780" font-size="22" font-weight="bold" fill="#10b981">Step 4 — Five Rights checklist</text>
            <text x="80" y="815" font-size="16" fill="#ffffff">☐ Right TASK   ☐ Right CIRCUMSTANCE   ☐ Right PERSON</text>
            <text x="80" y="845" font-size="16" fill="#ffffff">☐ Right DIRECTION (specific + report-back)</text>
            <text x="80" y="875" font-size="16" fill="#ffffff">☐ Right SUPERVISION (round, evaluate, follow up)</text>
            <rect x="60" y="930" width="980" height="115" rx="14" fill="#6366f1" opacity="0.2" stroke="#6366f1" stroke-width="2"/>
            <text x="550" y="970" font-size="20" font-weight="bold" fill="#6366f1" text-anchor="middle">Watch-Out: "I'll just do it myself" is also wrong</text>
            <text x="550" y="1005" font-size="16" fill="#ffffff" text-anchor="middle">Failing to delegate overloads RN, underuses team — NCLEX marks this WRONG.</text>
            <text x="550" y="1030" font-size="15" fill="#888" text-anchor="middle">Appropriate delegation IS the right answer.</text>
          </svg>`,
          caption: "Charge-nurse triage: sort by acuity, assign by scope, supervise with Five Rights."
        }
      }
    ]
  },
  {
    id: "nclex-fundamentals-lesson-6",
    title: "Infection Control & Isolation Precautions",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "Standard Precautions: The Default for Every Patient",
        content: `**Infection control** is one of the most predictable NCLEX domains because it operates on a simple two-tier system: **Standard Precautions** apply to **every patient, every time**, and **Transmission-Based Precautions** layer on top for specific pathogens.

**Standard Precautions** assume that **every body fluid is potentially infectious**: blood, all body fluids (except sweat), non-intact skin, and mucous membranes. The components: **hand hygiene** before and after every patient contact, **gloves** when contact with body fluids is anticipated, **gown/mask/eye protection** when splash or spray is likely, **safe needle handling** (no recapping), and **proper disposal** of sharps and contaminated linens.

**Transmission-Based Precautions** come in three flavors based on how the bug spreads: **Contact** (touch — MRSA, C. diff, RSV), **Droplet** (large respiratory droplets within ~6 feet — flu, pertussis, meningitis), and **Airborne** (tiny droplet nuclei that float — TB, measles, varicella).

The exam tests three things: **what PPE to wear**, **what room to put the patient in**, and **what order to put PPE on and take it off**. Master those three and infection-control questions become free points.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="65" font-size="32" font-weight="bold" fill="#ffd700" text-anchor="middle">The Two-Tier System</text>
            <text x="550" y="105" font-size="18" fill="#888" text-anchor="middle">Standard + Transmission-Based Precautions</text>
            <rect x="60" y="145" width="980" height="280" rx="14" fill="#10b981" opacity="0.2" stroke="#10b981" stroke-width="2"/>
            <text x="550" y="185" font-size="24" font-weight="bold" fill="#10b981" text-anchor="middle">TIER 1: Standard Precautions</text>
            <text x="550" y="215" font-size="16" fill="#888" text-anchor="middle">Every patient, every encounter — assume all fluids infectious</text>
            <text x="100" y="255" font-size="17" fill="#ffffff">• Hand hygiene before AND after every contact</text>
            <text x="100" y="285" font-size="17" fill="#ffffff">• Gloves when body fluid contact anticipated</text>
            <text x="100" y="315" font-size="17" fill="#ffffff">• Gown / mask / eye protection when splash likely</text>
            <text x="100" y="345" font-size="17" fill="#ffffff">• Safe sharps handling — NO recapping</text>
            <text x="100" y="375" font-size="17" fill="#ffffff">• Respiratory hygiene (cover cough), patient placement</text>
            <text x="100" y="405" font-size="17" fill="#ffffff">• Reprocessing of equipment, environmental cleaning</text>
            <rect x="60" y="445" width="310" height="285" rx="14" fill="#6366f1" opacity="0.2" stroke="#6366f1" stroke-width="2"/>
            <text x="215" y="485" font-size="22" font-weight="bold" fill="#6366f1" text-anchor="middle">CONTACT</text>
            <text x="215" y="510" font-size="13" fill="#888" text-anchor="middle">spreads by TOUCH</text>
            <text x="80" y="545" font-size="15" fill="#ffffff">Gloves + gown</text>
            <text x="80" y="570" font-size="15" fill="#ffffff">Private room</text>
            <text x="80" y="600" font-size="14" fill="#888">Bugs:</text>
            <text x="80" y="625" font-size="14" fill="#ffffff">• MRSA / VRE</text>
            <text x="80" y="650" font-size="14" fill="#ffffff">• C. difficile *</text>
            <text x="80" y="675" font-size="14" fill="#ffffff">• RSV</text>
            <text x="80" y="700" font-size="14" fill="#ffffff">• Scabies, lice</text>
            <text x="80" y="725" font-size="11" fill="#f59e0b">* C.diff: soap+water, not gel</text>
            <rect x="395" y="445" width="310" height="285" rx="14" fill="#f59e0b" opacity="0.2" stroke="#f59e0b" stroke-width="2"/>
            <text x="550" y="485" font-size="22" font-weight="bold" fill="#f59e0b" text-anchor="middle">DROPLET</text>
            <text x="550" y="510" font-size="13" fill="#888" text-anchor="middle">large drops within 6 ft</text>
            <text x="415" y="545" font-size="15" fill="#ffffff">Surgical mask</text>
            <text x="415" y="570" font-size="15" fill="#ffffff">Private room</text>
            <text x="415" y="600" font-size="14" fill="#888">Bugs:</text>
            <text x="415" y="625" font-size="14" fill="#ffffff">• Influenza</text>
            <text x="415" y="650" font-size="14" fill="#ffffff">• Pertussis</text>
            <text x="415" y="675" font-size="14" fill="#ffffff">• Meningitis (bact.)</text>
            <text x="415" y="700" font-size="14" fill="#ffffff">• Mumps, rubella</text>
            <text x="415" y="725" font-size="14" fill="#ffffff">• Strep pneumonia</text>
            <rect x="730" y="445" width="310" height="285" rx="14" fill="#ef4444" opacity="0.2" stroke="#ef4444" stroke-width="2"/>
            <text x="885" y="485" font-size="22" font-weight="bold" fill="#ef4444" text-anchor="middle">AIRBORNE</text>
            <text x="885" y="510" font-size="13" fill="#888" text-anchor="middle">tiny nuclei float</text>
            <text x="750" y="545" font-size="15" fill="#ffffff">N95 respirator</text>
            <text x="750" y="570" font-size="15" fill="#ffffff">Negative-pressure rm</text>
            <text x="750" y="600" font-size="14" fill="#888">Bugs (M.T.V.):</text>
            <text x="750" y="625" font-size="14" fill="#ffffff">• Measles</text>
            <text x="750" y="650" font-size="14" fill="#ffffff">• Tuberculosis</text>
            <text x="750" y="675" font-size="14" fill="#ffffff">• Varicella</text>
            <text x="750" y="700" font-size="14" fill="#ffffff">  (chickenpox/shingles</text>
            <text x="750" y="722" font-size="14" fill="#ffffff">  disseminated)</text>
            <rect x="60" y="750" width="980" height="290" rx="14" fill="#8b5cf6" opacity="0.2" stroke="#8b5cf6" stroke-width="2"/>
            <text x="550" y="790" font-size="22" font-weight="bold" fill="#8b5cf6" text-anchor="middle">The Three Tested Things</text>
            <text x="100" y="830" font-size="18" fill="#ffffff">1. What PPE to wear (gloves, mask, gown, N95)</text>
            <text x="100" y="865" font-size="18" fill="#ffffff">2. What room (private, negative-pressure, door closed)</text>
            <text x="100" y="900" font-size="18" fill="#ffffff">3. What ORDER (donning vs. doffing sequence)</text>
            <text x="550" y="945" font-size="16" fill="#888" text-anchor="middle">Master these three and infection-control items become predictable.</text>
            <text x="550" y="985" font-size="17" fill="#10b981" text-anchor="middle">Standard always applies. Transmission-based layers on top.</text>
            <text x="550" y="1020" font-size="15" fill="#888" text-anchor="middle">A patient with TB still also gets standard precautions, never instead of.</text>
          </svg>`,
          caption: "Two-tier infection control: standard for everyone, transmission-based by route of spread."
        }
      },
      {
        type: "concept",
        title: "Transmission-Based Precautions: Bug-to-PPE Mapping",
        content: `**Contact Precautions.** The bug spreads when you **touch** the patient or contaminated surfaces. PPE: **gloves + gown** before entering the room. **Private room** preferred (or cohort with same-bug patients). Dedicated equipment (stethoscope, BP cuff) stays in the room.

Classic contact bugs: **MRSA**, **VRE**, **C. difficile**, **RSV**, **scabies**, **draining wounds**. **C. diff special rule:** alcohol hand gel does **not** kill C. diff spores — you **must use soap and water**. NCLEX loves this distractor.

**Droplet Precautions.** Large respiratory droplets travel **~3–6 feet** and fall by gravity. PPE: **surgical mask** within 6 feet of the patient. **Private room** with door that may stay open. Patient wears a mask during transport.

Classic droplet bugs: **influenza**, **pertussis** (whooping cough), **bacterial meningitis** (until 24 hr of antibiotics), **mumps**, **rubella**, **strep pneumonia**, **diphtheria**.

**Airborne Precautions.** Tiny droplet nuclei (<5 microns) stay suspended in air and travel beyond 6 feet. PPE: **fit-tested N95 respirator** (or PAPR). Room: **AIIR — airborne infection isolation room** — **negative pressure**, 6–12 air exchanges/hr, **door kept closed**. Patient wears a **surgical mask** during transport (not N95 — they exhale through it).

Classic airborne bugs — mnemonic **M.T.V.**: **Measles**, **Tuberculosis**, **Varicella** (chickenpox; also disseminated zoster). Some add COVID-19 in aerosol-generating procedures.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="60" font-size="30" font-weight="bold" fill="#ffd700" text-anchor="middle">Bug → PPE → Room</text>
            <text x="550" y="95" font-size="18" fill="#888" text-anchor="middle">Decision table</text>
            <rect x="60" y="130" width="980" height="50" fill="#6366f1" opacity="0.3" stroke="#6366f1" stroke-width="1"/>
            <text x="170" y="163" font-size="17" font-weight="bold" fill="#ffffff" text-anchor="middle">TYPE</text>
            <text x="450" y="163" font-size="17" font-weight="bold" fill="#ffffff" text-anchor="middle">PPE</text>
            <text x="700" y="163" font-size="17" font-weight="bold" fill="#ffffff" text-anchor="middle">ROOM</text>
            <text x="920" y="163" font-size="17" font-weight="bold" fill="#ffffff" text-anchor="middle">KEY BUGS</text>
            <rect x="60" y="180" width="980" height="180" fill="#6366f1" opacity="0.12" stroke="#6366f1" stroke-width="2"/>
            <text x="170" y="220" font-size="20" font-weight="bold" fill="#6366f1" text-anchor="middle">CONTACT</text>
            <text x="170" y="248" font-size="13" fill="#888" text-anchor="middle">touch / surfaces</text>
            <text x="320" y="220" font-size="15" fill="#ffffff">Gloves</text>
            <text x="320" y="245" font-size="15" fill="#ffffff">Gown</text>
            <text x="320" y="270" font-size="13" fill="#f59e0b">Soap+water for C.diff</text>
            <text x="580" y="220" font-size="15" fill="#ffffff">Private room</text>
            <text x="580" y="245" font-size="15" fill="#ffffff">(or cohort)</text>
            <text x="580" y="270" font-size="13" fill="#888">Dedicated equipment</text>
            <text x="820" y="215" font-size="14" fill="#ffffff">MRSA, VRE</text>
            <text x="820" y="240" font-size="14" fill="#ffffff">C. difficile</text>
            <text x="820" y="265" font-size="14" fill="#ffffff">RSV, rotavirus</text>
            <text x="820" y="290" font-size="14" fill="#ffffff">Scabies, lice</text>
            <text x="820" y="315" font-size="14" fill="#ffffff">Wound drainage</text>
            <text x="820" y="340" font-size="14" fill="#ffffff">Herpes (open)</text>
            <rect x="60" y="370" width="980" height="180" fill="#f59e0b" opacity="0.12" stroke="#f59e0b" stroke-width="2"/>
            <text x="170" y="410" font-size="20" font-weight="bold" fill="#f59e0b" text-anchor="middle">DROPLET</text>
            <text x="170" y="438" font-size="13" fill="#888" text-anchor="middle">large drops, ~6 ft</text>
            <text x="320" y="410" font-size="15" fill="#ffffff">Surgical mask</text>
            <text x="320" y="435" font-size="15" fill="#ffffff">(within 6 ft)</text>
            <text x="320" y="460" font-size="13" fill="#888">Pt masks for transport</text>
            <text x="580" y="410" font-size="15" fill="#ffffff">Private room</text>
            <text x="580" y="435" font-size="15" fill="#ffffff">Door may be open</text>
            <text x="580" y="460" font-size="13" fill="#888">No special airflow</text>
            <text x="820" y="405" font-size="14" fill="#ffffff">Influenza</text>
            <text x="820" y="430" font-size="14" fill="#ffffff">Pertussis</text>
            <text x="820" y="455" font-size="14" fill="#ffffff">Mening. (bact.)</text>
            <text x="820" y="480" font-size="14" fill="#ffffff">Mumps, rubella</text>
            <text x="820" y="505" font-size="14" fill="#ffffff">Strep pneumonia</text>
            <text x="820" y="530" font-size="14" fill="#ffffff">Diphtheria</text>
            <rect x="60" y="560" width="980" height="180" fill="#ef4444" opacity="0.12" stroke="#ef4444" stroke-width="2"/>
            <text x="170" y="600" font-size="20" font-weight="bold" fill="#ef4444" text-anchor="middle">AIRBORNE</text>
            <text x="170" y="628" font-size="13" fill="#888" text-anchor="middle">tiny nuclei float</text>
            <text x="320" y="600" font-size="15" fill="#ffffff">N95 respirator</text>
            <text x="320" y="625" font-size="15" fill="#ffffff">(fit-tested)</text>
            <text x="320" y="650" font-size="13" fill="#888">Pt: surgical mask, transport</text>
            <text x="580" y="600" font-size="15" fill="#ffffff">AIIR — negative</text>
            <text x="580" y="625" font-size="15" fill="#ffffff">pressure, door CLOSED</text>
            <text x="580" y="650" font-size="13" fill="#888">6–12 air exchanges/hr</text>
            <text x="820" y="600" font-size="16" font-weight="bold" fill="#ffd700">M.T.V.</text>
            <text x="820" y="625" font-size="14" fill="#ffffff">Measles</text>
            <text x="820" y="650" font-size="14" fill="#ffffff">Tuberculosis</text>
            <text x="820" y="675" font-size="14" fill="#ffffff">Varicella</text>
            <text x="820" y="700" font-size="14" fill="#ffffff">(chickenpox /</text>
            <text x="820" y="720" font-size="14" fill="#ffffff">dissem. zoster)</text>
            <rect x="60" y="760" width="980" height="135" rx="14" fill="#f59e0b" opacity="0.18" stroke="#f59e0b" stroke-width="2"/>
            <text x="550" y="800" font-size="20" font-weight="bold" fill="#f59e0b" text-anchor="middle">C. diff: The Hand-Hygiene Trap</text>
            <text x="550" y="835" font-size="17" fill="#ffffff" text-anchor="middle">Alcohol gel does NOT kill C. diff spores.</text>
            <text x="550" y="865" font-size="17" fill="#10b981" text-anchor="middle">Use SOAP AND WATER for hand hygiene after C. diff contact.</text>
            <rect x="60" y="915" width="980" height="125" rx="14" fill="#ec4899" opacity="0.18" stroke="#ec4899" stroke-width="2"/>
            <text x="550" y="955" font-size="20" font-weight="bold" fill="#ec4899" text-anchor="middle">Combined Precautions</text>
            <text x="550" y="990" font-size="16" fill="#ffffff" text-anchor="middle">Some bugs need TWO categories: SARS, COVID with AGPs → Airborne + Contact</text>
            <text x="550" y="1020" font-size="16" fill="#ffffff" text-anchor="middle">Disseminated varicella zoster → Airborne + Contact</text>
          </svg>`,
          caption: "Bug-to-PPE-to-room mapping with the C. diff hand-hygiene trap highlighted."
        }
      },
      {
        type: "example",
        title: "PPE Order: Donning and Doffing",
        content: `One of the highest-frequency NCLEX skills items: **what is the order to put PPE on (donning) and take it off (doffing)?** Get the order wrong and you contaminate yourself.

**Donning order (CDC):** **Gown → Mask/Respirator → Goggles/Face shield → Gloves.** Mnemonic: **G-M-G-G** (start gowned, end gloved). You build outward from the cleanest body part. Gloves go on **last** because they touch the patient first.

**Doffing order (CDC):** **Gloves → Goggles/Face shield → Gown → Mask/Respirator.** Mnemonic: **G-G-G-M** — *the reverse of donning, with one twist*: the **mask comes off LAST** because the front of the mask is contaminated and it protected your face during the whole encounter; you remove it only after leaving the room.

**The contamination logic.** The most contaminated items come off **first** (gloves — they touched everything). The mask comes off **last** because the air around the patient may still be contaminated until you exit. Always perform **hand hygiene** between steps and immediately after final removal.

**Common stems.** "Place the following PPE steps in correct order" (drag-and-drop). Memorize **G-M-G-G in, G-G-G-M out.** If the stem asks about an airborne-precaution room (TB), the **mask/N95 comes off AFTER leaving the room** and closing the door.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="60" font-size="32" font-weight="bold" fill="#ffd700" text-anchor="middle">PPE Donning &amp; Doffing</text>
            <text x="550" y="100" font-size="18" fill="#888" text-anchor="middle">G-M-G-G in, G-G-G-M out</text>
            <rect x="60" y="140" width="475" height="540" rx="14" fill="#10b981" opacity="0.18" stroke="#10b981" stroke-width="2"/>
            <text x="297" y="180" font-size="24" font-weight="bold" fill="#10b981" text-anchor="middle">DONNING (PUT ON)</text>
            <text x="297" y="205" font-size="14" fill="#888" text-anchor="middle">Cleanest → outward to patient</text>
            <circle cx="100" cy="255" r="22" fill="#10b981"/>
            <text x="100" y="262" font-size="20" font-weight="bold" fill="#1a1a2e" text-anchor="middle">1</text>
            <text x="140" y="252" font-size="20" font-weight="bold" fill="#ffffff">GOWN</text>
            <text x="140" y="275" font-size="14" fill="#888">Tie at neck and waist</text>
            <circle cx="100" cy="335" r="22" fill="#10b981"/>
            <text x="100" y="342" font-size="20" font-weight="bold" fill="#1a1a2e" text-anchor="middle">2</text>
            <text x="140" y="332" font-size="20" font-weight="bold" fill="#ffffff">MASK / N95</text>
            <text x="140" y="355" font-size="14" fill="#888">Fit-check seal (N95)</text>
            <circle cx="100" cy="415" r="22" fill="#10b981"/>
            <text x="100" y="422" font-size="20" font-weight="bold" fill="#1a1a2e" text-anchor="middle">3</text>
            <text x="140" y="412" font-size="20" font-weight="bold" fill="#ffffff">GOGGLES</text>
            <text x="140" y="435" font-size="14" fill="#888">Or face shield</text>
            <circle cx="100" cy="495" r="22" fill="#10b981"/>
            <text x="100" y="502" font-size="20" font-weight="bold" fill="#1a1a2e" text-anchor="middle">4</text>
            <text x="140" y="492" font-size="20" font-weight="bold" fill="#ffffff">GLOVES</text>
            <text x="140" y="515" font-size="14" fill="#888">Pull over gown cuffs</text>
            <text x="297" y="580" font-size="20" font-weight="bold" fill="#ffd700" text-anchor="middle">G — M — G — G</text>
            <text x="297" y="615" font-size="15" fill="#ffffff" text-anchor="middle">Hand hygiene BEFORE</text>
            <text x="297" y="645" font-size="15" fill="#ffffff" text-anchor="middle">Gloves go on LAST</text>
            <rect x="565" y="140" width="475" height="540" rx="14" fill="#ef4444" opacity="0.18" stroke="#ef4444" stroke-width="2"/>
            <text x="802" y="180" font-size="24" font-weight="bold" fill="#ef4444" text-anchor="middle">DOFFING (TAKE OFF)</text>
            <text x="802" y="205" font-size="14" fill="#888" text-anchor="middle">Most contaminated → first</text>
            <circle cx="605" cy="255" r="22" fill="#ef4444"/>
            <text x="605" y="262" font-size="20" font-weight="bold" fill="#1a1a2e" text-anchor="middle">1</text>
            <text x="645" y="252" font-size="20" font-weight="bold" fill="#ffffff">GLOVES</text>
            <text x="645" y="275" font-size="14" fill="#888">Glove-in-glove technique</text>
            <circle cx="605" cy="335" r="22" fill="#ef4444"/>
            <text x="605" y="342" font-size="20" font-weight="bold" fill="#1a1a2e" text-anchor="middle">2</text>
            <text x="645" y="332" font-size="20" font-weight="bold" fill="#ffffff">GOGGLES</text>
            <text x="645" y="355" font-size="14" fill="#888">Handle by headband</text>
            <circle cx="605" cy="415" r="22" fill="#ef4444"/>
            <text x="605" y="422" font-size="20" font-weight="bold" fill="#1a1a2e" text-anchor="middle">3</text>
            <text x="645" y="412" font-size="20" font-weight="bold" fill="#ffffff">GOWN</text>
            <text x="645" y="435" font-size="14" fill="#888">Roll inside out, away from body</text>
            <circle cx="605" cy="495" r="22" fill="#ef4444"/>
            <text x="605" y="502" font-size="20" font-weight="bold" fill="#1a1a2e" text-anchor="middle">4</text>
            <text x="645" y="492" font-size="20" font-weight="bold" fill="#ffffff">MASK / N95</text>
            <text x="645" y="515" font-size="14" fill="#888">Handle by straps, NOT front</text>
            <text x="802" y="580" font-size="20" font-weight="bold" fill="#ffd700" text-anchor="middle">G — G — G — M</text>
            <text x="802" y="615" font-size="15" fill="#ffffff" text-anchor="middle">Mask LAST (front contaminated)</text>
            <text x="802" y="645" font-size="15" fill="#ffffff" text-anchor="middle">Hand hygiene AFTER</text>
            <rect x="60" y="710" width="980" height="155" rx="14" fill="#6366f1" opacity="0.2" stroke="#6366f1" stroke-width="2"/>
            <text x="550" y="750" font-size="22" font-weight="bold" fill="#6366f1" text-anchor="middle">Why "Mask Last"?</text>
            <text x="550" y="785" font-size="17" fill="#ffffff" text-anchor="middle">The front of the mask filtered contaminated air during the entire visit.</text>
            <text x="550" y="815" font-size="17" fill="#ffffff" text-anchor="middle">It is the most contaminated item touching your face.</text>
            <text x="550" y="845" font-size="16" fill="#888" text-anchor="middle">Remove gloves/gown first to protect skin and clothes, mask very last by straps.</text>
            <rect x="60" y="880" width="980" height="160" rx="14" fill="#ef4444" opacity="0.18" stroke="#ef4444" stroke-width="2"/>
            <text x="550" y="920" font-size="22" font-weight="bold" fill="#ef4444" text-anchor="middle">Airborne (TB) Exception</text>
            <text x="550" y="955" font-size="17" fill="#ffffff" text-anchor="middle">For airborne precautions: remove N95 ONLY AFTER leaving the room</text>
            <text x="550" y="985" font-size="17" fill="#ffffff" text-anchor="middle">and closing the door (air in room may still be contaminated).</text>
            <text x="550" y="1020" font-size="15" fill="#888" text-anchor="middle">Sequence becomes: leave room → close door → remove N95 → hand hygiene.</text>
          </svg>`,
          caption: "G-M-G-G in, G-G-G-M out — with the airborne mask-last-and-outside-the-room exception."
        }
      },
      {
        type: "quiz",
        title: "Quiz: Pick the Right Precaution",
        content: `Apply the framework.`,
        question: "A patient is admitted with active pulmonary tuberculosis. Which intervention is the priority for the nurse?",
        options: [
          { text: "Place the patient in a private room with the door open and wear a surgical mask.", correct: false },
          { text: "Place the patient in a negative-pressure airborne isolation room and wear a fit-tested N95 respirator.", correct: true },
          { text: "Place the patient in any private room and wear gloves, gown, and surgical mask.", correct: false },
          { text: "Place the patient in a positive-pressure room and wear an N95 respirator.", correct: false }
        ],
        explanation: `Active pulmonary tuberculosis spreads via **droplet nuclei <5 microns** that **float** — so it requires **Airborne Precautions**. The correct setup is an **AIIR (airborne infection isolation room)** with **negative pressure** (air flows IN to the room, not OUT), **6–12 air exchanges per hour**, and a **door kept closed**. Staff entering must wear a **fit-tested N95 respirator** or PAPR.

Option 1 wrong: TB is not droplet — a surgical mask does not filter droplet nuclei, and an open door allows airborne spread to the hallway.

Option 3 describes **droplet + contact precautions** (gown, gloves, surgical mask) — wrong category for TB.

Option 4 names a **positive-pressure** room, which would push contaminated air **out** of the room into the hallway. Positive-pressure rooms protect **immunocompromised patients from the outside world** (the opposite use case). For TB, you need **negative pressure** to contain the bug **inside** the room.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="60" font-size="30" font-weight="bold" fill="#ffd700" text-anchor="middle">Quiz Breakdown</text>
            <text x="550" y="100" font-size="18" fill="#888" text-anchor="middle">Active pulmonary TB — best room and PPE?</text>
            <rect x="60" y="135" width="980" height="155" rx="14" fill="#ef4444" opacity="0.15" stroke="#ef4444" stroke-width="2"/>
            <text x="80" y="175" font-size="20" font-weight="bold" fill="#ef4444">Option 1 — WRONG</text>
            <text x="80" y="210" font-size="16" fill="#ffffff">Private room, door OPEN, surgical mask</text>
            <text x="80" y="240" font-size="15" fill="#888">TB is AIRBORNE — surgical mask does not filter droplet nuclei.</text>
            <text x="80" y="265" font-size="15" fill="#888">Open door allows nuclei to drift into hallway.</text>
            <rect x="60" y="305" width="980" height="180" rx="14" fill="#10b981" opacity="0.2" stroke="#10b981" stroke-width="3"/>
            <text x="80" y="345" font-size="20" font-weight="bold" fill="#10b981">Option 2 — CORRECT ✓</text>
            <text x="80" y="380" font-size="17" fill="#ffffff">Negative-pressure AIIR + fit-tested N95</text>
            <text x="80" y="415" font-size="16" fill="#10b981">• Door kept CLOSED</text>
            <text x="80" y="440" font-size="16" fill="#10b981">• Air flows IN to room (not out)</text>
            <text x="80" y="465" font-size="16" fill="#10b981">• 6–12 air exchanges/hr; HEPA filtered exhaust</text>
            <rect x="60" y="500" width="980" height="155" rx="14" fill="#ef4444" opacity="0.15" stroke="#ef4444" stroke-width="2"/>
            <text x="80" y="540" font-size="20" font-weight="bold" fill="#ef4444">Option 3 — WRONG</text>
            <text x="80" y="575" font-size="16" fill="#ffffff">Private room + gloves + gown + surgical mask</text>
            <text x="80" y="605" font-size="15" fill="#888">Describes contact + droplet, not airborne.</text>
            <text x="80" y="630" font-size="15" fill="#888">Still no negative pressure and no N95 — TB will escape.</text>
            <rect x="60" y="670" width="980" height="180" rx="14" fill="#ef4444" opacity="0.15" stroke="#ef4444" stroke-width="2"/>
            <text x="80" y="710" font-size="20" font-weight="bold" fill="#ef4444">Option 4 — WRONG (classic distractor)</text>
            <text x="80" y="745" font-size="16" fill="#ffffff">POSITIVE-pressure room + N95</text>
            <text x="80" y="775" font-size="15" fill="#f59e0b">Positive pressure pushes air OUT — spreads TB to hallway.</text>
            <text x="80" y="800" font-size="15" fill="#888">Positive pressure is for IMMUNOCOMPROMISED patients</text>
            <text x="80" y="825" font-size="15" fill="#888">(e.g., neutropenic, post-transplant) — opposite use case.</text>
            <rect x="60" y="865" width="980" height="175" rx="14" fill="#6366f1" opacity="0.2" stroke="#6366f1" stroke-width="2"/>
            <text x="550" y="905" font-size="22" font-weight="bold" fill="#6366f1" text-anchor="middle">Negative vs. Positive Pressure</text>
            <text x="100" y="945" font-size="17" fill="#ffffff">NEGATIVE — air flows IN, contains bug INSIDE (TB, measles, varicella)</text>
            <text x="100" y="980" font-size="17" fill="#ffffff">POSITIVE — air flows OUT, protects patient FROM outside (transplant, neutropenic)</text>
            <text x="550" y="1020" font-size="16" fill="#888" text-anchor="middle">Mix these up and the patient (or the hallway) gets sick.</text>
          </svg>`,
          caption: "Quiz breakdown: airborne TB needs negative-pressure AIIR + N95 — not droplet, not positive pressure."
        }
      },
      {
        type: "application",
        title: "Real-Floor Infection Control: From Door to Discharge",
        content: `On a real shift you'll do this **dozens of times**. Build a routine.

**Before entering any room.** Glance at the **isolation sign** outside. It tells you the category (contact/droplet/airborne) and the PPE required. Perform **hand hygiene**. Don PPE in the **anteroom or just outside** in the correct order: **G-M-G-G**. For airborne rooms, perform **N95 fit-check** every time (positive and negative pressure check with hands cupped over the mask).

**Inside the room.** Use **dedicated equipment** when possible. If you must bring a stethoscope in, **clean it before leaving**. **Group your care** to minimize entries: meds, vitals, and assessment in one trip. Limit movement and touching surfaces.

**Leaving the room.** Doff in the right order: **G-G-G-M**. For airborne, **leave the room and close the door** before removing the N95. **Hand hygiene immediately** — and for **C. diff** patients, **soap and water**, not alcohol gel.

**Special situations.** Patient needs a CT scan? Patient wears a **surgical mask** during transport (even for airborne — they exhale into it). Notify the receiving department in advance so they can prepare. Visitors get the same PPE the staff wears.

**Document.** Chart the precaution type, PPE used, patient and family education, and any breach in technique. Infection control is one of the most heavily audited domains because **breaches cost lives** and trigger reportable hospital-acquired infections.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="60" font-size="32" font-weight="bold" fill="#ffd700" text-anchor="middle">Real-Floor Workflow</text>
            <text x="550" y="100" font-size="18" fill="#888" text-anchor="middle">Door → bedside → out → document</text>
            <rect x="60" y="140" width="980" height="170" rx="14" fill="#6366f1" opacity="0.2" stroke="#6366f1" stroke-width="2"/>
            <text x="80" y="180" font-size="22" font-weight="bold" fill="#6366f1">1. BEFORE ENTERING</text>
            <text x="80" y="215" font-size="16" fill="#ffffff">• Check isolation sign — confirm category &amp; PPE</text>
            <text x="80" y="245" font-size="16" fill="#ffffff">• Hand hygiene (soap+water if C. diff)</text>
            <text x="80" y="275" font-size="16" fill="#ffffff">• Don PPE in anteroom: GOWN → MASK → GOGGLES → GLOVES</text>
            <text x="80" y="300" font-size="16" fill="#ffffff">• For N95: positive/negative seal check every time</text>
            <rect x="60" y="325" width="980" height="170" rx="14" fill="#10b981" opacity="0.2" stroke="#10b981" stroke-width="2"/>
            <text x="80" y="365" font-size="22" font-weight="bold" fill="#10b981">2. INSIDE THE ROOM</text>
            <text x="80" y="400" font-size="16" fill="#ffffff">• Use dedicated equipment (stethoscope, BP cuff, thermometer)</text>
            <text x="80" y="430" font-size="16" fill="#ffffff">• Group care: meds + vitals + assessment in one trip</text>
            <text x="80" y="460" font-size="16" fill="#ffffff">• Clean shared equipment before leaving</text>
            <text x="80" y="485" font-size="16" fill="#ffffff">• Limit touching surfaces; no charting on in-room paper</text>
            <rect x="60" y="510" width="980" height="170" rx="14" fill="#f59e0b" opacity="0.2" stroke="#f59e0b" stroke-width="2"/>
            <text x="80" y="550" font-size="22" font-weight="bold" fill="#f59e0b">3. LEAVING</text>
            <text x="80" y="585" font-size="16" fill="#ffffff">• Doff: GLOVES → GOGGLES → GOWN → MASK</text>
            <text x="80" y="615" font-size="16" fill="#ffffff">• Airborne: leave room + close door BEFORE removing N95</text>
            <text x="80" y="645" font-size="16" fill="#ffffff">• Hand hygiene immediately (soap+water for C. diff)</text>
            <text x="80" y="670" font-size="16" fill="#ffffff">• Discard PPE in proper receptacle inside or at threshold</text>
            <rect x="60" y="695" width="980" height="170" rx="14" fill="#8b5cf6" opacity="0.2" stroke="#8b5cf6" stroke-width="2"/>
            <text x="80" y="735" font-size="22" font-weight="bold" fill="#8b5cf6">4. SPECIAL SITUATIONS</text>
            <text x="80" y="770" font-size="16" fill="#ffffff">• Transport: patient wears SURGICAL mask (even airborne pts)</text>
            <text x="80" y="800" font-size="16" fill="#ffffff">• Notify receiving department before transport</text>
            <text x="80" y="830" font-size="16" fill="#ffffff">• Visitors don same PPE as staff; educate before entry</text>
            <text x="80" y="855" font-size="16" fill="#ffffff">• Combined precautions: stack PPE for both categories</text>
            <rect x="60" y="880" width="980" height="160" rx="14" fill="#ec4899" opacity="0.18" stroke="#ec4899" stroke-width="2"/>
            <text x="80" y="920" font-size="22" font-weight="bold" fill="#ec4899">5. DOCUMENT</text>
            <text x="80" y="955" font-size="16" fill="#ffffff">• Precaution type and PPE used</text>
            <text x="80" y="985" font-size="16" fill="#ffffff">• Patient and family teaching provided</text>
            <text x="80" y="1015" font-size="16" fill="#ffffff">• Any breach in technique → report per facility policy (HAI tracking)</text>
          </svg>`,
          caption: "Five-stage infection-control workflow from door to discharge documentation."
        }
      }
    ]
  },
{
    id: "nclex-fundamentals-lesson-7",
    title: "Pain Assessment: 0-10 Numeric, Wong-Baker, FLACC, and the Right Tool for the Patient",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "Pain Is What the Patient Says It Is",
        content: `Pain is the **fifth vital sign** — and on the NCLEX, the single most tested principle is this: **the patient's report of pain is the gold standard**. You do not override it with your judgment. You do not document "patient appears comfortable" instead of their rating. If a post-op patient is laughing on the phone and rates their pain a 9/10, you document **9/10** and treat it.

The trick on the exam is **picking the right tool for the right patient**:

- **Verbal adult, oriented** → **0-10 Numeric Rating Scale**
- **Child age 3-7** (or non-English speaker) → **Wong-Baker FACES**
- **Preverbal infant, intubated, or cognitively impaired** → **FLACC** (Face, Legs, Activity, Cry, Consolability)
- **Critically ill, non-communicative adult** → **CPOT** or **BPS**

Pick the wrong tool, and your assessment is invalid. The NCLEX rewards nurses who match the **developmental and cognitive level** of the patient.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="60" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold">Pick the Right Pain Scale</text>
            <text x="550" y="100" text-anchor="middle" fill="#888" font-size="18">Decision flow by patient profile</text>
            <rect x="400" y="140" width="300" height="60" fill="#6366f1" rx="8"/>
            <text x="550" y="178" text-anchor="middle" fill="#ffffff" font-size="20" font-weight="bold">Can patient verbalize?</text>
            <line x1="475" y1="200" x2="280" y2="260" stroke="#ffd700" stroke-width="3"/>
            <line x1="625" y1="200" x2="820" y2="260" stroke="#ffd700" stroke-width="3"/>
            <text x="370" y="240" fill="#10b981" font-size="18" font-weight="bold">YES</text>
            <text x="720" y="240" fill="#ef4444" font-size="18" font-weight="bold">NO</text>
            <rect x="130" y="260" width="300" height="60" fill="#0ea5e9" rx="8"/>
            <text x="280" y="298" text-anchor="middle" fill="#ffffff" font-size="18" font-weight="bold">Age 8+ &amp; oriented?</text>
            <rect x="670" y="260" width="300" height="60" fill="#0ea5e9" rx="8"/>
            <text x="820" y="298" text-anchor="middle" fill="#ffffff" font-size="18" font-weight="bold">Preverbal / impaired?</text>
            <line x1="205" y1="320" x2="120" y2="400" stroke="#ffd700" stroke-width="3"/>
            <line x1="355" y1="320" x2="440" y2="400" stroke="#ffd700" stroke-width="3"/>
            <line x1="745" y1="320" x2="660" y2="400" stroke="#ffd700" stroke-width="3"/>
            <line x1="895" y1="320" x2="980" y2="400" stroke="#ffd700" stroke-width="3"/>
            <rect x="40" y="400" width="220" height="100" fill="#10b981" rx="8"/>
            <text x="150" y="438" text-anchor="middle" fill="#ffffff" font-size="20" font-weight="bold">0-10 NUMERIC</text>
            <text x="150" y="465" text-anchor="middle" fill="#ffffff" font-size="14">Rate pain 0 (none)</text>
            <text x="150" y="485" text-anchor="middle" fill="#ffffff" font-size="14">to 10 (worst ever)</text>
            <rect x="290" y="400" width="220" height="100" fill="#f59e0b" rx="8"/>
            <text x="400" y="438" text-anchor="middle" fill="#ffffff" font-size="20" font-weight="bold">WONG-BAKER</text>
            <text x="400" y="465" text-anchor="middle" fill="#ffffff" font-size="14">Faces 0-10</text>
            <text x="400" y="485" text-anchor="middle" fill="#ffffff" font-size="14">Age 3-7, non-English</text>
            <rect x="540" y="400" width="220" height="100" fill="#ec4899" rx="8"/>
            <text x="650" y="438" text-anchor="middle" fill="#ffffff" font-size="20" font-weight="bold">FLACC</text>
            <text x="650" y="465" text-anchor="middle" fill="#ffffff" font-size="14">Behavioral scale</text>
            <text x="650" y="485" text-anchor="middle" fill="#ffffff" font-size="14">Infants, impaired</text>
            <rect x="790" y="400" width="220" height="100" fill="#8b5cf6" rx="8"/>
            <text x="900" y="438" text-anchor="middle" fill="#ffffff" font-size="20" font-weight="bold">CPOT / BPS</text>
            <text x="900" y="465" text-anchor="middle" fill="#ffffff" font-size="14">ICU / intubated</text>
            <text x="900" y="485" text-anchor="middle" fill="#ffffff" font-size="14">Vent, sedated adults</text>
            <rect x="100" y="560" width="900" height="180" fill="#1a1a2e" stroke="#ffd700" stroke-width="2" rx="10"/>
            <text x="550" y="595" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">THE GOLDEN RULE</text>
            <text x="550" y="630" text-anchor="middle" fill="#ffffff" font-size="18">Pain is whatever the patient says it is,</text>
            <text x="550" y="658" text-anchor="middle" fill="#ffffff" font-size="18">existing whenever the patient says it does.</text>
            <text x="550" y="695" text-anchor="middle" fill="#10b981" font-size="16">— Margo McCaffery, RN (the foundational nursing definition)</text>
            <text x="550" y="720" text-anchor="middle" fill="#ef4444" font-size="16" font-weight="bold">Never override the patient's self-report with your observation.</text>
            <rect x="100" y="780" width="900" height="280" fill="#1a1a2e" stroke="#6366f1" stroke-width="2" rx="10"/>
            <text x="550" y="815" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">Quick Reference: Pain Scale Selection</text>
            <line x1="120" y1="835" x2="980" y2="835" stroke="#6366f1" stroke-width="1"/>
            <text x="140" y="870" fill="#10b981" font-size="16" font-weight="bold">Adult, oriented:</text>
            <text x="400" y="870" fill="#ffffff" font-size="16">0-10 Numeric Rating Scale</text>
            <text x="140" y="905" fill="#10b981" font-size="16" font-weight="bold">Child 3-7 yrs:</text>
            <text x="400" y="905" fill="#ffffff" font-size="16">Wong-Baker FACES (smiley to crying)</text>
            <text x="140" y="940" fill="#10b981" font-size="16" font-weight="bold">Infant / preverbal:</text>
            <text x="400" y="940" fill="#ffffff" font-size="16">FLACC (0-10 from behaviors)</text>
            <text x="140" y="975" fill="#10b981" font-size="16" font-weight="bold">Dementia / nonverbal:</text>
            <text x="400" y="975" fill="#ffffff" font-size="16">PAINAD or FLACC</text>
            <text x="140" y="1010" fill="#10b981" font-size="16" font-weight="bold">Intubated ICU adult:</text>
            <text x="400" y="1010" fill="#ffffff" font-size="16">CPOT (Critical-Care Pain Observation)</text>
            <text x="140" y="1045" fill="#ef4444" font-size="16" font-weight="bold">NEVER:</text>
            <text x="400" y="1045" fill="#ffffff" font-size="16">Use vital signs alone to rate pain</text>
          </svg>`,
          caption: "Decision tree for pain scale selection — match the tool to the patient's developmental and cognitive level."
        }
      },
      {
        type: "concept",
        title: "PQRST: The Universal Pain Assessment Framework",
        content: `Every pain assessment — regardless of which **scale** you use to rate intensity — must include the **PQRST framework**. NCLEX questions love to ask "what does the nurse assess next?" and the right answer is almost always one of these letters.

- **P — Provocation/Palliation**: What makes it worse? What makes it better? ("Walking makes it worse, ice helps")
- **Q — Quality**: Describe the pain in your own words. ("Sharp, stabbing, dull, burning, crushing, throbbing")
- **R — Region/Radiation**: Where is it? Does it travel? (Crushing chest pain radiating to the **left jaw** = classic MI)
- **S — Severity**: 0-10 rating using the right scale
- **T — Timing**: When did it start? Constant or intermittent? Duration?

**Acute pain** (<6 months) often has **sympathetic responses**: tachycardia, hypertension, diaphoresis, dilated pupils. **Chronic pain** (>6 months) usually has **NO** vital sign changes — the body adapts. This is why NCLEX traps students: a chronic pain patient with normal vitals is **still in real pain**. Do not under-treat them because they "look fine."`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold">PQRST Pain Framework</text>
            <text x="550" y="90" text-anchor="middle" fill="#888" font-size="18">The 5 questions every pain assessment must answer</text>
            <rect x="80" y="130" width="180" height="160" fill="#ef4444" rx="12"/>
            <text x="170" y="180" text-anchor="middle" fill="#ffffff" font-size="48" font-weight="bold">P</text>
            <text x="170" y="220" text-anchor="middle" fill="#ffffff" font-size="16" font-weight="bold">Provocation</text>
            <text x="170" y="245" text-anchor="middle" fill="#ffffff" font-size="14">What makes</text>
            <text x="170" y="265" text-anchor="middle" fill="#ffffff" font-size="14">it better/worse?</text>
            <rect x="280" y="130" width="180" height="160" fill="#f59e0b" rx="12"/>
            <text x="370" y="180" text-anchor="middle" fill="#ffffff" font-size="48" font-weight="bold">Q</text>
            <text x="370" y="220" text-anchor="middle" fill="#ffffff" font-size="16" font-weight="bold">Quality</text>
            <text x="370" y="245" text-anchor="middle" fill="#ffffff" font-size="14">Sharp? Dull?</text>
            <text x="370" y="265" text-anchor="middle" fill="#ffffff" font-size="14">Burning? Crushing?</text>
            <rect x="480" y="130" width="180" height="160" fill="#10b981" rx="12"/>
            <text x="570" y="180" text-anchor="middle" fill="#ffffff" font-size="48" font-weight="bold">R</text>
            <text x="570" y="220" text-anchor="middle" fill="#ffffff" font-size="16" font-weight="bold">Region</text>
            <text x="570" y="245" text-anchor="middle" fill="#ffffff" font-size="14">Where? Does it</text>
            <text x="570" y="265" text-anchor="middle" fill="#ffffff" font-size="14">radiate?</text>
            <rect x="680" y="130" width="180" height="160" fill="#6366f1" rx="12"/>
            <text x="770" y="180" text-anchor="middle" fill="#ffffff" font-size="48" font-weight="bold">S</text>
            <text x="770" y="220" text-anchor="middle" fill="#ffffff" font-size="16" font-weight="bold">Severity</text>
            <text x="770" y="245" text-anchor="middle" fill="#ffffff" font-size="14">0-10 using</text>
            <text x="770" y="265" text-anchor="middle" fill="#ffffff" font-size="14">correct scale</text>
            <rect x="880" y="130" width="140" height="160" fill="#8b5cf6" rx="12"/>
            <text x="950" y="180" text-anchor="middle" fill="#ffffff" font-size="48" font-weight="bold">T</text>
            <text x="950" y="220" text-anchor="middle" fill="#ffffff" font-size="16" font-weight="bold">Timing</text>
            <text x="950" y="245" text-anchor="middle" fill="#ffffff" font-size="14">When? Constant</text>
            <text x="950" y="265" text-anchor="middle" fill="#ffffff" font-size="14">or intermittent?</text>
            <rect x="80" y="330" width="940" height="350" fill="#1a1a2e" stroke="#ffd700" stroke-width="2" rx="10"/>
            <text x="550" y="365" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">ACUTE vs CHRONIC PAIN — VITAL SIGN RESPONSE</text>
            <line x1="550" y1="385" x2="550" y2="660" stroke="#ffd700" stroke-width="2"/>
            <text x="300" y="415" text-anchor="middle" fill="#ef4444" font-size="20" font-weight="bold">ACUTE PAIN (&lt;6 mo)</text>
            <text x="800" y="415" text-anchor="middle" fill="#0ea5e9" font-size="20" font-weight="bold">CHRONIC PAIN (&gt;6 mo)</text>
            <text x="100" y="455" fill="#10b981" font-size="16">HR:</text>
            <text x="160" y="455" fill="#ffffff" font-size="16">elevated (tachycardia)</text>
            <text x="600" y="455" fill="#10b981" font-size="16">HR:</text>
            <text x="660" y="455" fill="#ffffff" font-size="16">NORMAL (adapted)</text>
            <text x="100" y="490" fill="#10b981" font-size="16">BP:</text>
            <text x="160" y="490" fill="#ffffff" font-size="16">elevated (hypertension)</text>
            <text x="600" y="490" fill="#10b981" font-size="16">BP:</text>
            <text x="660" y="490" fill="#ffffff" font-size="16">NORMAL</text>
            <text x="100" y="525" fill="#10b981" font-size="16">RR:</text>
            <text x="160" y="525" fill="#ffffff" font-size="16">elevated, shallow</text>
            <text x="600" y="525" fill="#10b981" font-size="16">RR:</text>
            <text x="660" y="525" fill="#ffffff" font-size="16">NORMAL</text>
            <text x="100" y="560" fill="#10b981" font-size="16">Skin:</text>
            <text x="160" y="560" fill="#ffffff" font-size="16">diaphoretic, pale</text>
            <text x="600" y="560" fill="#10b981" font-size="16">Skin:</text>
            <text x="660" y="560" fill="#ffffff" font-size="16">NORMAL</text>
            <text x="100" y="595" fill="#10b981" font-size="16">Behavior:</text>
            <text x="200" y="595" fill="#ffffff" font-size="16">grimace, guard</text>
            <text x="600" y="595" fill="#10b981" font-size="16">Behavior:</text>
            <text x="700" y="595" fill="#ffffff" font-size="16">depression, fatigue</text>
            <text x="300" y="640" text-anchor="middle" fill="#ffd700" font-size="14">Body in crisis mode</text>
            <text x="800" y="640" text-anchor="middle" fill="#ffd700" font-size="14">Body has adapted — pain still real!</text>
            <rect x="80" y="710" width="940" height="360" fill="#1a1a2e" stroke="#ef4444" stroke-width="3" rx="10"/>
            <text x="550" y="745" text-anchor="middle" fill="#ef4444" font-size="22" font-weight="bold">NCLEX RED FLAG RADIATION PATTERNS</text>
            <line x1="100" y1="760" x2="1000" y2="760" stroke="#ef4444" stroke-width="1"/>
            <text x="120" y="795" fill="#ffd700" font-size="16" font-weight="bold">Chest pain → left jaw/arm:</text>
            <text x="500" y="795" fill="#ffffff" font-size="16">Myocardial infarction (MI)</text>
            <text x="120" y="830" fill="#ffd700" font-size="16" font-weight="bold">Epigastric → back (boring):</text>
            <text x="500" y="830" fill="#ffffff" font-size="16">Pancreatitis / AAA dissection</text>
            <text x="120" y="865" fill="#ffd700" font-size="16" font-weight="bold">RUQ → right shoulder (Kehr):</text>
            <text x="500" y="865" fill="#ffffff" font-size="16">Gallbladder / diaphragm irritation</text>
            <text x="120" y="900" fill="#ffd700" font-size="16" font-weight="bold">Flank → groin (colicky):</text>
            <text x="500" y="900" fill="#ffffff" font-size="16">Kidney stone (renal calculi)</text>
            <text x="120" y="935" fill="#ffd700" font-size="16" font-weight="bold">Low back → leg below knee:</text>
            <text x="500" y="935" fill="#ffffff" font-size="16">Sciatica / herniated disc</text>
            <text x="120" y="970" fill="#ffd700" font-size="16" font-weight="bold">RLQ (McBurney's point):</text>
            <text x="500" y="970" fill="#ffffff" font-size="16">Appendicitis</text>
            <text x="120" y="1005" fill="#ffd700" font-size="16" font-weight="bold">Calf pain on dorsiflexion:</text>
            <text x="500" y="1005" fill="#ffffff" font-size="16">DVT (Homan's sign — outdated but tested)</text>
            <text x="120" y="1040" fill="#ffd700" font-size="16" font-weight="bold">Sudden "worst headache ever":</text>
            <text x="500" y="1040" fill="#ffffff" font-size="16">Subarachnoid hemorrhage</text>
          </svg>`,
          caption: "PQRST framework with acute vs chronic vital sign patterns and high-yield radiation red flags."
        }
      },
      {
        type: "example",
        title: "Three Patients, Three Scales — Picking Correctly",
        content: `Walk through three back-to-back assessments on a busy med-surg shift.

**Patient A — Mr. Johnson, 58, post-op day 1 lap chole, alert and oriented.**
You ask: "On a scale of 0 to 10, with 0 being no pain and 10 being the worst pain imaginable, how would you rate your pain right now?" He says **"7."** That's your number. You document **7/10 sharp RUQ pain, radiating to right shoulder, worse with deep breath.** Correct tool: **Numeric Rating Scale**.

**Patient B — Lily, 4 years old, post-tonsillectomy.**
A 4-year-old cannot reliably rate 0-10. You show her the **Wong-Baker FACES** chart: "Point to the face that shows how you feel inside." She points to the 4th face (rated **6**). You document **Wong-Baker 6/10**. NOT 0-10 numeric.

**Patient C — Mrs. Chen, 82, advanced dementia, post-hip ORIF.**
She cannot answer questions. You use **FLACC**: Face (grimacing = 2), Legs (kicking = 2), Activity (squirming = 2), Cry (whimpering = 1), Consolability (difficult = 2). **Total = 9/10**. You medicate based on the FLACC score — her inability to verbalize does not mean she isn't in severe pain.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-size="30" font-weight="bold">Three Patients, Three Scales</text>
            <text x="550" y="90" text-anchor="middle" fill="#888" font-size="16">Real-time bedside decisions on a med-surg shift</text>
            <rect x="40" y="120" width="340" height="940" fill="#1a1a2e" stroke="#10b981" stroke-width="2" rx="10"/>
            <rect x="40" y="120" width="340" height="60" fill="#10b981" rx="10"/>
            <text x="210" y="158" text-anchor="middle" fill="#ffffff" font-size="20" font-weight="bold">PATIENT A</text>
            <text x="210" y="210" text-anchor="middle" fill="#ffd700" font-size="16" font-weight="bold">Mr. Johnson, 58</text>
            <text x="210" y="235" text-anchor="middle" fill="#ffffff" font-size="14">Post-op day 1</text>
            <text x="210" y="255" text-anchor="middle" fill="#ffffff" font-size="14">Lap chole</text>
            <text x="210" y="275" text-anchor="middle" fill="#ffffff" font-size="14">Alert &amp; Oriented x4</text>
            <line x1="60" y1="300" x2="360" y2="300" stroke="#10b981" stroke-width="1"/>
            <text x="210" y="335" text-anchor="middle" fill="#ffd700" font-size="16" font-weight="bold">SCALE CHOSEN</text>
            <text x="210" y="365" text-anchor="middle" fill="#ffffff" font-size="18" font-weight="bold">0-10 NUMERIC</text>
            <text x="210" y="400" text-anchor="middle" fill="#10b981" font-size="14">Why: verbal adult,</text>
            <text x="210" y="420" text-anchor="middle" fill="#10b981" font-size="14">oriented, English-speaking</text>
            <rect x="80" y="450" width="260" height="80" fill="#1a1a2e" stroke="#ffd700" rx="6"/>
            <text x="210" y="480" text-anchor="middle" fill="#ffd700" font-size="14">Patient response:</text>
            <text x="210" y="510" text-anchor="middle" fill="#ffffff" font-size="24" font-weight="bold">"7 out of 10"</text>
            <text x="210" y="565" text-anchor="middle" fill="#ffd700" font-size="14" font-weight="bold">DOCUMENT:</text>
            <text x="210" y="590" text-anchor="middle" fill="#ffffff" font-size="13">7/10 sharp RUQ pain,</text>
            <text x="210" y="610" text-anchor="middle" fill="#ffffff" font-size="13">radiating to R shoulder,</text>
            <text x="210" y="630" text-anchor="middle" fill="#ffffff" font-size="13">worse w/ deep breath</text>
            <text x="210" y="680" text-anchor="middle" fill="#ffd700" font-size="14" font-weight="bold">PQRST:</text>
            <text x="60" y="710" fill="#10b981" font-size="13">P:</text>
            <text x="90" y="710" fill="#ffffff" font-size="13">worse w/ breath, ice helps</text>
            <text x="60" y="735" fill="#10b981" font-size="13">Q:</text>
            <text x="90" y="735" fill="#ffffff" font-size="13">sharp, stabbing</text>
            <text x="60" y="760" fill="#10b981" font-size="13">R:</text>
            <text x="90" y="760" fill="#ffffff" font-size="13">RUQ → R shoulder</text>
            <text x="60" y="785" fill="#10b981" font-size="13">S:</text>
            <text x="90" y="785" fill="#ffffff" font-size="13">7/10</text>
            <text x="60" y="810" fill="#10b981" font-size="13">T:</text>
            <text x="90" y="810" fill="#ffffff" font-size="13">since 0600, constant</text>
            <rect x="80" y="840" width="260" height="60" fill="#10b981" rx="6"/>
            <text x="210" y="875" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="bold">Action: PRN morphine 4mg IV</text>
            <text x="210" y="950" text-anchor="middle" fill="#888" font-size="12">VS: HR 102, BP 148/88</text>
            <text x="210" y="975" text-anchor="middle" fill="#888" font-size="12">→ classic acute sympathetic</text>
            <text x="210" y="1000" text-anchor="middle" fill="#888" font-size="12">response confirms pain</text>
            <rect x="385" y="120" width="340" height="940" fill="#1a1a2e" stroke="#f59e0b" stroke-width="2" rx="10"/>
            <rect x="385" y="120" width="340" height="60" fill="#f59e0b" rx="10"/>
            <text x="555" y="158" text-anchor="middle" fill="#ffffff" font-size="20" font-weight="bold">PATIENT B</text>
            <text x="555" y="210" text-anchor="middle" fill="#ffd700" font-size="16" font-weight="bold">Lily, 4 years</text>
            <text x="555" y="235" text-anchor="middle" fill="#ffffff" font-size="14">Post-tonsillectomy</text>
            <text x="555" y="255" text-anchor="middle" fill="#ffffff" font-size="14">Verbal, but young</text>
            <text x="555" y="275" text-anchor="middle" fill="#ffffff" font-size="14">Cannot abstract 0-10</text>
            <line x1="405" y1="300" x2="705" y2="300" stroke="#f59e0b" stroke-width="1"/>
            <text x="555" y="335" text-anchor="middle" fill="#ffd700" font-size="16" font-weight="bold">SCALE CHOSEN</text>
            <text x="555" y="365" text-anchor="middle" fill="#ffffff" font-size="18" font-weight="bold">WONG-BAKER FACES</text>
            <text x="555" y="400" text-anchor="middle" fill="#f59e0b" font-size="14">Why: age 3-7, can</text>
            <text x="555" y="420" text-anchor="middle" fill="#f59e0b" font-size="14">match feelings to faces</text>
            <circle cx="430" cy="475" r="18" fill="#10b981"/>
            <text x="430" y="481" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="bold">0</text>
            <circle cx="475" cy="475" r="18" fill="#10b981"/>
            <text x="475" y="481" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="bold">2</text>
            <circle cx="520" cy="475" r="18" fill="#ffd700"/>
            <text x="520" y="481" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="bold">4</text>
            <circle cx="565" cy="475" r="22" fill="#f59e0b" stroke="#ffffff" stroke-width="3"/>
            <text x="565" y="481" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="bold">6</text>
            <circle cx="615" cy="475" r="18" fill="#ef4444"/>
            <text x="615" y="481" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="bold">8</text>
            <circle cx="660" cy="475" r="18" fill="#ef4444"/>
            <text x="660" y="481" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="bold">10</text>
            <text x="555" y="525" text-anchor="middle" fill="#f59e0b" font-size="14">Lily points to 4th face</text>
            <text x="555" y="565" text-anchor="middle" fill="#ffd700" font-size="14" font-weight="bold">DOCUMENT:</text>
            <text x="555" y="590" text-anchor="middle" fill="#ffffff" font-size="13">Wong-Baker 6/10</text>
            <text x="555" y="610" text-anchor="middle" fill="#ffffff" font-size="13">throat pain</text>
            <text x="555" y="630" text-anchor="middle" fill="#ffffff" font-size="13">(NOT "numeric 6")</text>
            <text x="555" y="680" text-anchor="middle" fill="#ffd700" font-size="14" font-weight="bold">DO:</text>
            <text x="405" y="710" fill="#10b981" font-size="13">•</text>
            <text x="420" y="710" fill="#ffffff" font-size="13">offer popsicle (cool)</text>
            <text x="405" y="735" fill="#10b981" font-size="13">•</text>
            <text x="420" y="735" fill="#ffffff" font-size="13">distraction (cartoon)</text>
            <text x="405" y="760" fill="#10b981" font-size="13">•</text>
            <text x="420" y="760" fill="#ffffff" font-size="13">parent at bedside</text>
            <text x="405" y="785" fill="#10b981" font-size="13">•</text>
            <text x="420" y="785" fill="#ffffff" font-size="13">acetaminophen PO</text>
            <text x="555" y="830" text-anchor="middle" fill="#ef4444" font-size="14" font-weight="bold">DO NOT:</text>
            <text x="405" y="860" fill="#ef4444" font-size="13">•</text>
            <text x="420" y="860" fill="#ffffff" font-size="13">ASA (Reye's risk)</text>
            <text x="405" y="885" fill="#ef4444" font-size="13">•</text>
            <text x="420" y="885" fill="#ffffff" font-size="13">red/brown popsicles</text>
            <text x="405" y="910" fill="#ef4444" font-size="13">•</text>
            <text x="420" y="910" fill="#ffffff" font-size="13">straw (suction risk)</text>
            <text x="555" y="975" text-anchor="middle" fill="#888" font-size="12">Pediatric pain is often</text>
            <text x="555" y="1000" text-anchor="middle" fill="#888" font-size="12">UNDER-treated — believe</text>
            <text x="555" y="1025" text-anchor="middle" fill="#888" font-size="12">the face she points to</text>
            <rect x="730" y="120" width="340" height="940" fill="#1a1a2e" stroke="#ec4899" stroke-width="2" rx="10"/>
            <rect x="730" y="120" width="340" height="60" fill="#ec4899" rx="10"/>
            <text x="900" y="158" text-anchor="middle" fill="#ffffff" font-size="20" font-weight="bold">PATIENT C</text>
            <text x="900" y="210" text-anchor="middle" fill="#ffd700" font-size="16" font-weight="bold">Mrs. Chen, 82</text>
            <text x="900" y="235" text-anchor="middle" fill="#ffffff" font-size="14">Post-hip ORIF</text>
            <text x="900" y="255" text-anchor="middle" fill="#ffffff" font-size="14">Advanced dementia</text>
            <text x="900" y="275" text-anchor="middle" fill="#ffffff" font-size="14">Cannot self-report</text>
            <line x1="750" y1="300" x2="1050" y2="300" stroke="#ec4899" stroke-width="1"/>
            <text x="900" y="335" text-anchor="middle" fill="#ffd700" font-size="16" font-weight="bold">SCALE CHOSEN</text>
            <text x="900" y="365" text-anchor="middle" fill="#ffffff" font-size="18" font-weight="bold">FLACC</text>
            <text x="900" y="400" text-anchor="middle" fill="#ec4899" font-size="14">Why: behavioral scale</text>
            <text x="900" y="420" text-anchor="middle" fill="#ec4899" font-size="14">for nonverbal patients</text>
            <rect x="750" y="450" width="300" height="240" fill="#1a1a2e" stroke="#ffd700" rx="6"/>
            <text x="900" y="478" text-anchor="middle" fill="#ffd700" font-size="14" font-weight="bold">FLACC ASSESSMENT</text>
            <text x="770" y="510" fill="#10b981" font-size="13">Face (grimace):</text>
            <text x="1010" y="510" text-anchor="end" fill="#ffffff" font-size="13" font-weight="bold">2</text>
            <text x="770" y="540" fill="#10b981" font-size="13">Legs (kicking):</text>
            <text x="1010" y="540" text-anchor="end" fill="#ffffff" font-size="13" font-weight="bold">2</text>
            <text x="770" y="570" fill="#10b981" font-size="13">Activity (squirming):</text>
            <text x="1010" y="570" text-anchor="end" fill="#ffffff" font-size="13" font-weight="bold">2</text>
            <text x="770" y="600" fill="#10b981" font-size="13">Cry (whimper):</text>
            <text x="1010" y="600" text-anchor="end" fill="#ffffff" font-size="13" font-weight="bold">1</text>
            <text x="770" y="630" fill="#10b981" font-size="13">Consol. (difficult):</text>
            <text x="1010" y="630" text-anchor="end" fill="#ffffff" font-size="13" font-weight="bold">2</text>
            <line x1="770" y1="645" x2="1030" y2="645" stroke="#ffd700"/>
            <text x="770" y="675" fill="#ffd700" font-size="16" font-weight="bold">TOTAL:</text>
            <text x="1010" y="675" text-anchor="end" fill="#ef4444" font-size="20" font-weight="bold">9/10</text>
            <text x="900" y="725" text-anchor="middle" fill="#ffd700" font-size="14" font-weight="bold">DOCUMENT:</text>
            <text x="900" y="750" text-anchor="middle" fill="#ffffff" font-size="13">FLACC 9/10 — SEVERE</text>
            <rect x="750" y="780" width="300" height="60" fill="#ef4444" rx="6"/>
            <text x="900" y="815" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="bold">Action: Treat as severe</text>
            <text x="900" y="870" text-anchor="middle" fill="#ec4899" font-size="14" font-weight="bold">NCLEX TRAP:</text>
            <text x="900" y="895" text-anchor="middle" fill="#ffffff" font-size="12">Do not skip pain meds</text>
            <text x="900" y="915" text-anchor="middle" fill="#ffffff" font-size="12">because she "can't ask"</text>
            <text x="900" y="935" text-anchor="middle" fill="#ffffff" font-size="12">Untreated pain → delirium,</text>
            <text x="900" y="955" text-anchor="middle" fill="#ffffff" font-size="12">poor healing, agitation</text>
            <text x="900" y="1005" text-anchor="middle" fill="#888" font-size="12">Reassess FLACC q1h after</text>
            <text x="900" y="1030" text-anchor="middle" fill="#888" font-size="12">medication for effectiveness</text>
          </svg>`,
          caption: "Three patients on the same shift — the scale changes but the obligation to treat does not."
        }
      },
      {
        type: "quiz",
        title: "Quiz: Pick the Right Tool",
        content: `Test the principle: **the tool must match the patient**, and **the patient's report is gold**.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="60" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold">Quiz Strategy</text>
            <text x="550" y="100" text-anchor="middle" fill="#888" font-size="18">When a pain question feels tricky, walk through this checklist</text>
            <rect x="80" y="140" width="940" height="80" fill="#6366f1" rx="10"/>
            <text x="550" y="175" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">STEP 1: Identify the patient's developmental/cognitive level</text>
            <text x="550" y="205" text-anchor="middle" fill="#ffd700" font-size="16">Adult oriented? Child? Preverbal? Dementia? Intubated?</text>
            <rect x="80" y="240" width="940" height="80" fill="#0ea5e9" rx="10"/>
            <text x="550" y="275" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">STEP 2: Match level to tool</text>
            <text x="550" y="305" text-anchor="middle" fill="#ffd700" font-size="16">Adult→Numeric • Child 3-7→Wong-Baker • Preverbal→FLACC • ICU→CPOT</text>
            <rect x="80" y="340" width="940" height="80" fill="#10b981" rx="10"/>
            <text x="550" y="375" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">STEP 3: Believe the patient's number</text>
            <text x="550" y="405" text-anchor="middle" fill="#ffd700" font-size="16">Do not override based on appearance or vitals</text>
            <rect x="80" y="440" width="940" height="80" fill="#f59e0b" rx="10"/>
            <text x="550" y="475" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">STEP 4: Use PQRST to characterize</text>
            <text x="550" y="505" text-anchor="middle" fill="#ffd700" font-size="16">Provocation, Quality, Region, Severity, Timing</text>
            <rect x="80" y="540" width="940" height="80" fill="#ef4444" rx="10"/>
            <text x="550" y="575" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">STEP 5: Reassess after intervention</text>
            <text x="550" y="605" text-anchor="middle" fill="#ffd700" font-size="16">IV meds: 15-30 min • PO meds: 60 min • Document effect</text>
            <rect x="80" y="650" width="940" height="420" fill="#1a1a2e" stroke="#ffd700" stroke-width="2" rx="10"/>
            <text x="550" y="690" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">COMMON NCLEX DISTRACTORS — DO NOT FALL FOR THESE</text>
            <line x1="100" y1="705" x2="1000" y2="705" stroke="#ffd700"/>
            <text x="120" y="740" fill="#ef4444" font-size="16" font-weight="bold">WRONG:</text>
            <text x="240" y="740" fill="#ffffff" font-size="15">"Patient appears comfortable, so document 0/10"</text>
            <text x="120" y="765" fill="#10b981" font-size="15">RIGHT:</text>
            <text x="240" y="765" fill="#ffffff" font-size="15">Document the rating the patient gives, even if they "look fine"</text>
            <text x="120" y="810" fill="#ef4444" font-size="16" font-weight="bold">WRONG:</text>
            <text x="240" y="810" fill="#ffffff" font-size="15">"Vitals normal, so chronic pain patient isn't really in pain"</text>
            <text x="120" y="835" fill="#10b981" font-size="15">RIGHT:</text>
            <text x="240" y="835" fill="#ffffff" font-size="15">Chronic pain rarely shows VS changes — body adapts</text>
            <text x="120" y="880" fill="#ef4444" font-size="16" font-weight="bold">WRONG:</text>
            <text x="240" y="880" fill="#ffffff" font-size="15">Use 0-10 numeric on a 4-year-old</text>
            <text x="120" y="905" fill="#10b981" font-size="15">RIGHT:</text>
            <text x="240" y="905" fill="#ffffff" font-size="15">Use Wong-Baker FACES — children can't abstract numbers</text>
            <text x="120" y="950" fill="#ef4444" font-size="16" font-weight="bold">WRONG:</text>
            <text x="240" y="950" fill="#ffffff" font-size="15">Skip pain meds on demented patient because "she can't ask"</text>
            <text x="120" y="975" fill="#10b981" font-size="15">RIGHT:</text>
            <text x="240" y="975" fill="#ffffff" font-size="15">Use FLACC — high score = treat aggressively</text>
            <text x="120" y="1020" fill="#ef4444" font-size="16" font-weight="bold">WRONG:</text>
            <text x="240" y="1020" fill="#ffffff" font-size="15">Pain medication concern: "they might be drug-seeking"</text>
            <text x="120" y="1045" fill="#10b981" font-size="15">RIGHT:</text>
            <text x="240" y="1045" fill="#ffffff" font-size="15">Treat the reported pain. Addiction risk does not justify under-treatment.</text>
          </svg>`,
          caption: "Quiz strategy and the most common NCLEX pain-assessment distractors."
        },
        question: "A nurse is admitting a 4-year-old child for a tonsillectomy. The child is alert and cooperative but cannot reliably rate numbers from 0-10. Which pain assessment tool is MOST appropriate for this patient?",
        options: [
          { text: "0-10 Numeric Rating Scale, because the child is verbal and cooperative", correct: false },
          { text: "Wong-Baker FACES scale, because it uses faces the child can match to feelings", correct: true },
          { text: "FLACC scale, because the child is too young to participate in assessment", correct: false },
          { text: "CPOT scale, because pediatric patients require a behavioral tool", correct: false }
        ],
        explanation: "The Wong-Baker FACES scale is designed for children ages 3-7 who can identify emotions but cannot abstract numbers. The child points to the face that matches how they feel. A 4-year-old is too young for the 0-10 numeric scale (requires abstract thinking) but is not preverbal — so FLACC (which is for infants and nonverbal/cognitively impaired patients) is not the best fit. CPOT is for critically ill, intubated adults. Always match the tool to the patient's developmental level."
      },
      {
        type: "application",
        title: "Applying It: Chronic Pain Patient with Normal Vitals",
        content: `**Scenario:** Mrs. Patel, 67, was admitted for management of **chronic low back pain** related to spinal stenosis. She has had this pain for 8 years. Her vital signs on admission: **BP 122/78, HR 76, RR 16, SpO2 98%, T 98.4°F**. She rates her pain **8/10**, describes it as "constant aching, burning down my left leg." The night nurse documented "patient denies acute distress, vitals stable, pain reported 8/10."

The oncoming nurse questions if the pain is really an 8 — "she's just sitting there reading."

**Your job:**

1. **Believe the rating.** Chronic pain patients do not show acute sympathetic signs. Normal vitals do NOT disprove pain. The body has **physiologically adapted** to chronic pain — this is the most-tested NCLEX concept in this area.

2. **Use PQRST.** Document the burning, radiating-down-leg quality (neuropathic pattern), constant timing, 8-year history.

3. **Treat.** Administer the ordered scheduled analgesic + adjuvant (gabapentin for neuropathic pain). Reassess in **60 minutes** (PO).

4. **Educate the team.** Doubt expressed about the pain rating is **bias**. Document the rating she gives, not the rating you think she should give.

This single principle — "believe the patient" — appears on every NCLEX pain question.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-size="30" font-weight="bold">Application: Chronic Pain, Normal Vitals</text>
            <text x="550" y="90" text-anchor="middle" fill="#888" font-size="16">Mrs. Patel — 67yo, chronic low back pain x 8 years</text>
            <rect x="80" y="120" width="940" height="200" fill="#1a1a2e" stroke="#6366f1" stroke-width="2" rx="10"/>
            <text x="550" y="155" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">VITAL SIGNS ON ADMISSION</text>
            <line x1="100" y1="170" x2="1000" y2="170" stroke="#6366f1"/>
            <text x="200" y="210" text-anchor="middle" fill="#10b981" font-size="16" font-weight="bold">BP</text>
            <text x="200" y="240" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">122/78</text>
            <text x="200" y="265" text-anchor="middle" fill="#888" font-size="13">Normal</text>
            <text x="380" y="210" text-anchor="middle" fill="#10b981" font-size="16" font-weight="bold">HR</text>
            <text x="380" y="240" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">76</text>
            <text x="380" y="265" text-anchor="middle" fill="#888" font-size="13">Normal</text>
            <text x="560" y="210" text-anchor="middle" fill="#10b981" font-size="16" font-weight="bold">RR</text>
            <text x="560" y="240" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">16</text>
            <text x="560" y="265" text-anchor="middle" fill="#888" font-size="13">Normal</text>
            <text x="740" y="210" text-anchor="middle" fill="#10b981" font-size="16" font-weight="bold">SpO2</text>
            <text x="740" y="240" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">98%</text>
            <text x="740" y="265" text-anchor="middle" fill="#888" font-size="13">Normal</text>
            <text x="920" y="210" text-anchor="middle" fill="#10b981" font-size="16" font-weight="bold">T</text>
            <text x="920" y="240" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">98.4F</text>
            <text x="920" y="265" text-anchor="middle" fill="#888" font-size="13">Normal</text>
            <text x="550" y="305" text-anchor="middle" fill="#ef4444" font-size="18" font-weight="bold">PAIN: 8/10 — burning, constant, radiating down L leg</text>
            <rect x="80" y="340" width="940" height="160" fill="#1a1a2e" stroke="#ef4444" stroke-width="2" rx="10"/>
            <text x="550" y="375" text-anchor="middle" fill="#ef4444" font-size="22" font-weight="bold">THE NCLEX TRAP</text>
            <text x="550" y="410" text-anchor="middle" fill="#ffffff" font-size="16">"Vitals are normal, so the 8/10 pain rating must be exaggerated."</text>
            <text x="550" y="445" text-anchor="middle" fill="#ffd700" font-size="18" font-weight="bold">WRONG. This is a chronic pain patient.</text>
            <text x="550" y="475" text-anchor="middle" fill="#ffffff" font-size="15">After 8 years, the body has physiologically adapted — normal VS prove nothing.</text>
            <rect x="80" y="520" width="940" height="240" fill="#1a1a2e" stroke="#10b981" stroke-width="2" rx="10"/>
            <text x="550" y="555" text-anchor="middle" fill="#10b981" font-size="22" font-weight="bold">CORRECT NURSING ACTIONS</text>
            <line x1="100" y1="570" x2="1000" y2="570" stroke="#10b981"/>
            <text x="120" y="605" fill="#ffd700" font-size="16" font-weight="bold">1.</text>
            <text x="160" y="605" fill="#ffffff" font-size="16">Believe the patient — document 8/10, not your guess</text>
            <text x="120" y="640" fill="#ffd700" font-size="16" font-weight="bold">2.</text>
            <text x="160" y="640" fill="#ffffff" font-size="16">PQRST: burning quality + radiation = NEUROPATHIC pain</text>
            <text x="120" y="675" fill="#ffd700" font-size="16" font-weight="bold">3.</text>
            <text x="160" y="675" fill="#ffffff" font-size="16">Administer scheduled analgesic + adjuvant (gabapentin)</text>
            <text x="120" y="710" fill="#ffd700" font-size="16" font-weight="bold">4.</text>
            <text x="160" y="710" fill="#ffffff" font-size="16">Reassess in 60 min (PO meds) — document effectiveness</text>
            <text x="120" y="745" fill="#ffd700" font-size="16" font-weight="bold">5.</text>
            <text x="160" y="745" fill="#ffffff" font-size="16">Non-pharm: heat, repositioning, PT consult</text>
            <rect x="80" y="780" width="940" height="280" fill="#1a1a2e" stroke="#ffd700" stroke-width="3" rx="10"/>
            <text x="550" y="815" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">ACUTE vs CHRONIC PAIN MEDICATION DIFFERENCES</text>
            <line x1="100" y1="830" x2="1000" y2="830" stroke="#ffd700"/>
            <text x="300" y="865" text-anchor="middle" fill="#ef4444" font-size="18" font-weight="bold">ACUTE PAIN</text>
            <text x="800" y="865" text-anchor="middle" fill="#0ea5e9" font-size="18" font-weight="bold">CHRONIC PAIN</text>
            <text x="120" y="900" fill="#10b981" font-size="14">Schedule:</text>
            <text x="220" y="900" fill="#ffffff" font-size="14">PRN, short course</text>
            <text x="620" y="900" fill="#10b981" font-size="14">Schedule:</text>
            <text x="720" y="900" fill="#ffffff" font-size="14">ATC (around the clock)</text>
            <text x="120" y="930" fill="#10b981" font-size="14">First-line:</text>
            <text x="220" y="930" fill="#ffffff" font-size="14">Opioid for severe</text>
            <text x="620" y="930" fill="#10b981" font-size="14">First-line:</text>
            <text x="720" y="930" fill="#ffffff" font-size="14">Multimodal + adjuvants</text>
            <text x="120" y="960" fill="#10b981" font-size="14">Adjuvants:</text>
            <text x="220" y="960" fill="#ffffff" font-size="14">Acetaminophen, NSAID</text>
            <text x="620" y="960" fill="#10b981" font-size="14">Adjuvants:</text>
            <text x="720" y="960" fill="#ffffff" font-size="14">Gabapentin, SNRIs, TCAs</text>
            <text x="120" y="990" fill="#10b981" font-size="14">Goal:</text>
            <text x="220" y="990" fill="#ffffff" font-size="14">Eliminate pain</text>
            <text x="620" y="990" fill="#10b981" font-size="14">Goal:</text>
            <text x="720" y="990" fill="#ffffff" font-size="14">Improve function</text>
            <text x="120" y="1020" fill="#10b981" font-size="14">Duration:</text>
            <text x="220" y="1020" fill="#ffffff" font-size="14">Days to weeks</text>
            <text x="620" y="1020" fill="#10b981" font-size="14">Duration:</text>
            <text x="720" y="1020" fill="#ffffff" font-size="14">Months to years</text>
            <text x="550" y="1055" text-anchor="middle" fill="#ffd700" font-size="14" font-style="italic">Both deserve treatment. Both deserve to be believed.</text>
          </svg>`,
          caption: "Application breakdown — chronic pain demands belief and scheduled treatment, not skepticism."
        }
      }
    ]
  },
  {
    id: "nclex-fundamentals-lesson-8",
    title: "Vital Signs Normals, Abnormals, and the Action Triggers",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "The Numbers That Save Lives",
        content: `Vital signs are the **first quantitative window** into your patient's status. On the NCLEX, you will be given a set of vitals and asked: **act, monitor, or notify the provider?** Memorize the **adult normal ranges**:

- **BP**: 90/60 — 120/80 mmHg
- **HR**: 60 — 100 bpm
- **RR**: 12 — 20 breaths/min
- **SpO2**: ≥ 95% on room air
- **Temp**: 97 — 99°F (36.1 — 37.2°C)

Then memorize the **action triggers** — values that demand IMMEDIATE provider notification:

- **Sustained systolic BP < 90** (shock state)
- **HR < 50 or > 120** (sustained)
- **SpO2 < 90%** (severe hypoxia)
- **RR < 10 or > 24** (respiratory failure brewing)
- **Temp > 101.5°F or < 96°F**

These trigger thresholds appear in **rapid-response criteria** at virtually every hospital. The NCLEX wants you to recognize them on sight. Pediatric ranges shift dramatically with age — younger = faster heart and respiratory rates, lower blood pressure.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold">Adult Vital Signs Cheat Sheet</text>
            <text x="550" y="90" text-anchor="middle" fill="#888" font-size="18">Normal ranges + the action triggers that demand notification</text>
            <rect x="60" y="130" width="1000" height="60" fill="#6366f1" rx="8"/>
            <text x="120" y="170" fill="#ffffff" font-size="18" font-weight="bold">PARAMETER</text>
            <text x="380" y="170" fill="#ffffff" font-size="18" font-weight="bold">NORMAL</text>
            <text x="620" y="170" fill="#ffffff" font-size="18" font-weight="bold">CONCERNING</text>
            <text x="870" y="170" fill="#ffffff" font-size="18" font-weight="bold">CALL PROVIDER</text>
            <rect x="60" y="195" width="1000" height="65" fill="#1a1a2e" stroke="#6366f1" rx="6"/>
            <text x="80" y="225" fill="#ffd700" font-size="16" font-weight="bold">Blood Pressure</text>
            <text x="80" y="248" fill="#888" font-size="12">(systolic/diastolic mmHg)</text>
            <text x="380" y="232" fill="#10b981" font-size="16" font-weight="bold">90/60 — 120/80</text>
            <text x="620" y="225" fill="#f59e0b" font-size="14">SBP 80-89 or</text>
            <text x="620" y="248" fill="#f59e0b" font-size="14">SBP 140-180</text>
            <text x="870" y="225" fill="#ef4444" font-size="14" font-weight="bold">SBP &lt; 90 sustained</text>
            <text x="870" y="248" fill="#ef4444" font-size="14" font-weight="bold">SBP &gt; 180</text>
            <rect x="60" y="265" width="1000" height="65" fill="#1a1a2e" stroke="#6366f1" rx="6"/>
            <text x="80" y="295" fill="#ffd700" font-size="16" font-weight="bold">Heart Rate</text>
            <text x="80" y="318" fill="#888" font-size="12">(bpm)</text>
            <text x="380" y="302" fill="#10b981" font-size="16" font-weight="bold">60 — 100</text>
            <text x="620" y="295" fill="#f59e0b" font-size="14">50-59 or</text>
            <text x="620" y="318" fill="#f59e0b" font-size="14">101-119</text>
            <text x="870" y="295" fill="#ef4444" font-size="14" font-weight="bold">&lt; 50 or &gt; 120</text>
            <text x="870" y="318" fill="#ef4444" font-size="14" font-weight="bold">(sustained)</text>
            <rect x="60" y="335" width="1000" height="65" fill="#1a1a2e" stroke="#6366f1" rx="6"/>
            <text x="80" y="365" fill="#ffd700" font-size="16" font-weight="bold">Respiratory Rate</text>
            <text x="80" y="388" fill="#888" font-size="12">(breaths/min)</text>
            <text x="380" y="372" fill="#10b981" font-size="16" font-weight="bold">12 — 20</text>
            <text x="620" y="365" fill="#f59e0b" font-size="14">10-11 or</text>
            <text x="620" y="388" fill="#f59e0b" font-size="14">21-24</text>
            <text x="870" y="365" fill="#ef4444" font-size="14" font-weight="bold">&lt; 10 or &gt; 24</text>
            <text x="870" y="388" fill="#ef4444" font-size="14" font-weight="bold">(resp failure risk)</text>
            <rect x="60" y="405" width="1000" height="65" fill="#1a1a2e" stroke="#6366f1" rx="6"/>
            <text x="80" y="435" fill="#ffd700" font-size="16" font-weight="bold">SpO2</text>
            <text x="80" y="458" fill="#888" font-size="12">(% on RA)</text>
            <text x="380" y="442" fill="#10b981" font-size="16" font-weight="bold">95 — 100%</text>
            <text x="620" y="442" fill="#f59e0b" font-size="14">90 — 94%</text>
            <text x="870" y="442" fill="#ef4444" font-size="14" font-weight="bold">&lt; 90% (severe hypoxia)</text>
            <rect x="60" y="475" width="1000" height="65" fill="#1a1a2e" stroke="#6366f1" rx="6"/>
            <text x="80" y="505" fill="#ffd700" font-size="16" font-weight="bold">Temperature</text>
            <text x="80" y="528" fill="#888" font-size="12">(F / C)</text>
            <text x="380" y="505" fill="#10b981" font-size="16" font-weight="bold">97 — 99 F</text>
            <text x="380" y="528" fill="#10b981" font-size="14">(36.1 — 37.2 C)</text>
            <text x="620" y="505" fill="#f59e0b" font-size="14">99.1 — 101.5 F</text>
            <text x="620" y="528" fill="#f59e0b" font-size="14">or 96.0 — 96.9 F</text>
            <text x="870" y="505" fill="#ef4444" font-size="14" font-weight="bold">&gt; 101.5 F</text>
            <text x="870" y="528" fill="#ef4444" font-size="14" font-weight="bold">or &lt; 96 F (sepsis)</text>
            <rect x="60" y="570" width="1000" height="180" fill="#1a1a2e" stroke="#ffd700" stroke-width="2" rx="10"/>
            <text x="560" y="605" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">PAIN — THE 5TH VITAL SIGN</text>
            <text x="560" y="640" text-anchor="middle" fill="#ffffff" font-size="16">Always document pain alongside the other 4 numerical vitals.</text>
            <text x="560" y="670" text-anchor="middle" fill="#ffffff" font-size="16">Use the appropriate scale (Numeric / Wong-Baker / FLACC).</text>
            <text x="560" y="710" text-anchor="middle" fill="#ffd700" font-size="16" font-weight="bold">SOME HOSPITALS NOW USE A 6TH: LEVEL OF CONSCIOUSNESS</text>
            <text x="560" y="735" text-anchor="middle" fill="#888" font-size="14">AVPU: Alert, Verbal, Pain, Unresponsive — change = trigger</text>
            <rect x="60" y="775" width="1000" height="295" fill="#1a1a2e" stroke="#ef4444" stroke-width="3" rx="10"/>
            <text x="560" y="810" text-anchor="middle" fill="#ef4444" font-size="22" font-weight="bold">RAPID RESPONSE TEAM (RRT) TRIGGERS</text>
            <text x="560" y="840" text-anchor="middle" fill="#888" font-size="14">Any ONE of these triggers a rapid response — escalate immediately</text>
            <line x1="80" y1="855" x2="1040" y2="855" stroke="#ef4444"/>
            <text x="100" y="890" fill="#ef4444" font-size="20" font-weight="bold">•</text>
            <text x="130" y="890" fill="#ffffff" font-size="16">Sustained SBP &lt; 90 mmHg (shock)</text>
            <text x="100" y="920" fill="#ef4444" font-size="20" font-weight="bold">•</text>
            <text x="130" y="920" fill="#ffffff" font-size="16">HR &lt; 40 or &gt; 130 (sustained)</text>
            <text x="100" y="950" fill="#ef4444" font-size="20" font-weight="bold">•</text>
            <text x="130" y="950" fill="#ffffff" font-size="16">RR &lt; 8 or &gt; 28</text>
            <text x="100" y="980" fill="#ef4444" font-size="20" font-weight="bold">•</text>
            <text x="130" y="980" fill="#ffffff" font-size="16">SpO2 &lt; 90% despite supplemental oxygen</text>
            <text x="100" y="1010" fill="#ef4444" font-size="20" font-weight="bold">•</text>
            <text x="130" y="1010" fill="#ffffff" font-size="16">Acute change in mental status (new confusion)</text>
            <text x="100" y="1040" fill="#ef4444" font-size="20" font-weight="bold">•</text>
            <text x="130" y="1040" fill="#ffffff" font-size="16">Seizure, stridor, hemoptysis, severe uncontrolled pain</text>
          </svg>`,
          caption: "Adult vital sign normals, concerning ranges, and the absolute triggers for provider notification or RRT activation."
        }
      },
      {
        type: "concept",
        title: "Pediatric Vital Signs — Younger Means Faster",
        content: `Pediatric vital signs are the **#1 most-confused** content on the NCLEX. The rule is simple: **younger = faster heart rate, faster respiratory rate, lower blood pressure**. Memorize the ranges by age group:

**Heart Rate (awake, resting)**:
- **Newborn (0-1 mo)**: 100-205
- **Infant (1-12 mo)**: 100-180
- **Toddler (1-3 yr)**: 98-140
- **Preschool (3-5 yr)**: 80-120
- **School age (6-11 yr)**: 75-118
- **Adolescent (12+)**: 60-100 (adult)

**Respiratory Rate**:
- **Newborn**: 30-60
- **Infant**: 30-53
- **Toddler**: 22-37
- **Preschool**: 20-28
- **School age**: 18-25
- **Adolescent**: 12-20

**Systolic BP (rough rule)**: minimum acceptable = **70 + (2 × age in years)** for ages 1-10. Below this = **hypotension**.

Two pediatric pearls: **hypotension is a LATE sign of shock** in kids — they compensate with tachycardia for a long time, then crash suddenly. And **respiratory failure** is the most common cause of arrest in pediatrics — watch the RR closely.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-size="30" font-weight="bold">Pediatric Vital Signs by Age</text>
            <text x="550" y="90" text-anchor="middle" fill="#888" font-size="16">Younger = faster HR and RR, lower BP</text>
            <rect x="40" y="120" width="1020" height="50" fill="#6366f1" rx="8"/>
            <text x="170" y="153" text-anchor="middle" fill="#ffffff" font-size="16" font-weight="bold">AGE GROUP</text>
            <text x="420" y="153" text-anchor="middle" fill="#ffffff" font-size="16" font-weight="bold">HEART RATE</text>
            <text x="670" y="153" text-anchor="middle" fill="#ffffff" font-size="16" font-weight="bold">RESP RATE</text>
            <text x="920" y="153" text-anchor="middle" fill="#ffffff" font-size="16" font-weight="bold">SBP (min)</text>
            <rect x="40" y="175" width="1020" height="55" fill="#1a1a2e" stroke="#ec4899" rx="6"/>
            <text x="170" y="200" text-anchor="middle" fill="#ec4899" font-size="15" font-weight="bold">Newborn</text>
            <text x="170" y="220" text-anchor="middle" fill="#888" font-size="12">0-1 month</text>
            <text x="420" y="208" text-anchor="middle" fill="#ffffff" font-size="16">100 — 205</text>
            <text x="670" y="208" text-anchor="middle" fill="#ffffff" font-size="16">30 — 60</text>
            <text x="920" y="208" text-anchor="middle" fill="#ffffff" font-size="16">60</text>
            <rect x="40" y="235" width="1020" height="55" fill="#1a1a2e" stroke="#f59e0b" rx="6"/>
            <text x="170" y="260" text-anchor="middle" fill="#f59e0b" font-size="15" font-weight="bold">Infant</text>
            <text x="170" y="280" text-anchor="middle" fill="#888" font-size="12">1-12 months</text>
            <text x="420" y="268" text-anchor="middle" fill="#ffffff" font-size="16">100 — 180</text>
            <text x="670" y="268" text-anchor="middle" fill="#ffffff" font-size="16">30 — 53</text>
            <text x="920" y="268" text-anchor="middle" fill="#ffffff" font-size="16">70</text>
            <rect x="40" y="295" width="1020" height="55" fill="#1a1a2e" stroke="#10b981" rx="6"/>
            <text x="170" y="320" text-anchor="middle" fill="#10b981" font-size="15" font-weight="bold">Toddler</text>
            <text x="170" y="340" text-anchor="middle" fill="#888" font-size="12">1-3 years</text>
            <text x="420" y="328" text-anchor="middle" fill="#ffffff" font-size="16">98 — 140</text>
            <text x="670" y="328" text-anchor="middle" fill="#ffffff" font-size="16">22 — 37</text>
            <text x="920" y="328" text-anchor="middle" fill="#ffffff" font-size="16">72 — 76</text>
            <rect x="40" y="355" width="1020" height="55" fill="#1a1a2e" stroke="#0ea5e9" rx="6"/>
            <text x="170" y="380" text-anchor="middle" fill="#0ea5e9" font-size="15" font-weight="bold">Preschool</text>
            <text x="170" y="400" text-anchor="middle" fill="#888" font-size="12">3-5 years</text>
            <text x="420" y="388" text-anchor="middle" fill="#ffffff" font-size="16">80 — 120</text>
            <text x="670" y="388" text-anchor="middle" fill="#ffffff" font-size="16">20 — 28</text>
            <text x="920" y="388" text-anchor="middle" fill="#ffffff" font-size="16">76 — 80</text>
            <rect x="40" y="415" width="1020" height="55" fill="#1a1a2e" stroke="#8b5cf6" rx="6"/>
            <text x="170" y="440" text-anchor="middle" fill="#8b5cf6" font-size="15" font-weight="bold">School Age</text>
            <text x="170" y="460" text-anchor="middle" fill="#888" font-size="12">6-11 years</text>
            <text x="420" y="448" text-anchor="middle" fill="#ffffff" font-size="16">75 — 118</text>
            <text x="670" y="448" text-anchor="middle" fill="#ffffff" font-size="16">18 — 25</text>
            <text x="920" y="448" text-anchor="middle" fill="#ffffff" font-size="16">82 — 92</text>
            <rect x="40" y="475" width="1020" height="55" fill="#1a1a2e" stroke="#6366f1" rx="6"/>
            <text x="170" y="500" text-anchor="middle" fill="#6366f1" font-size="15" font-weight="bold">Adolescent</text>
            <text x="170" y="520" text-anchor="middle" fill="#888" font-size="12">12+ years</text>
            <text x="420" y="508" text-anchor="middle" fill="#ffffff" font-size="16">60 — 100</text>
            <text x="670" y="508" text-anchor="middle" fill="#ffffff" font-size="16">12 — 20</text>
            <text x="920" y="508" text-anchor="middle" fill="#ffffff" font-size="16">92 — 110</text>
            <rect x="40" y="555" width="1020" height="120" fill="#1a1a2e" stroke="#ffd700" stroke-width="2" rx="10"/>
            <text x="550" y="590" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">PEDIATRIC SBP MINIMUM FORMULA</text>
            <text x="550" y="625" text-anchor="middle" fill="#ffffff" font-size="20" font-weight="bold">Minimum SBP = 70 + (2 × age in years)</text>
            <text x="550" y="655" text-anchor="middle" fill="#888" font-size="14">Use ages 1-10. Example: 5yo minimum SBP = 70 + 10 = 80 mmHg. Below = hypotension.</text>
            <rect x="40" y="695" width="500" height="375" fill="#1a1a2e" stroke="#ef4444" stroke-width="3" rx="10"/>
            <text x="290" y="730" text-anchor="middle" fill="#ef4444" font-size="20" font-weight="bold">SHOCK IN PEDS</text>
            <text x="290" y="755" text-anchor="middle" fill="#888" font-size="13">— is dangerously deceptive —</text>
            <text x="60" y="790" fill="#ffd700" font-size="14" font-weight="bold">EARLY (compensated):</text>
            <text x="60" y="815" fill="#ffffff" font-size="14">• Tachycardia (FIRST sign)</text>
            <text x="60" y="838" fill="#ffffff" font-size="14">• Cool, mottled extremities</text>
            <text x="60" y="861" fill="#ffffff" font-size="14">• Delayed cap refill (&gt;2 sec)</text>
            <text x="60" y="884" fill="#ffffff" font-size="14">• Decreased urine output</text>
            <text x="60" y="907" fill="#ffffff" font-size="14">• Normal BP (compensated!)</text>
            <text x="60" y="935" fill="#ef4444" font-size="14" font-weight="bold">LATE (decompensated):</text>
            <text x="60" y="960" fill="#ffffff" font-size="14">• Hypotension (LATE sign)</text>
            <text x="60" y="983" fill="#ffffff" font-size="14">• Bradycardia (terminal)</text>
            <text x="60" y="1006" fill="#ffffff" font-size="14">• Altered mental status</text>
            <text x="60" y="1029" fill="#ffffff" font-size="14">• Imminent cardiac arrest</text>
            <text x="290" y="1058" text-anchor="middle" fill="#ef4444" font-size="13" font-weight="bold">DO NOT wait for hypotension</text>
            <rect x="560" y="695" width="500" height="375" fill="#1a1a2e" stroke="#0ea5e9" stroke-width="3" rx="10"/>
            <text x="810" y="730" text-anchor="middle" fill="#0ea5e9" font-size="20" font-weight="bold">RESPIRATORY FAILURE</text>
            <text x="810" y="755" text-anchor="middle" fill="#888" font-size="13">#1 cause of pediatric arrest</text>
            <text x="580" y="790" fill="#ffd700" font-size="14" font-weight="bold">EARLY (compensating):</text>
            <text x="580" y="815" fill="#ffffff" font-size="14">• Tachypnea</text>
            <text x="580" y="838" fill="#ffffff" font-size="14">• Nasal flaring</text>
            <text x="580" y="861" fill="#ffffff" font-size="14">• Retractions (subcostal)</text>
            <text x="580" y="884" fill="#ffffff" font-size="14">• Grunting</text>
            <text x="580" y="907" fill="#ffffff" font-size="14">• Head bobbing (infant)</text>
            <text x="580" y="935" fill="#ef4444" font-size="14" font-weight="bold">LATE (failing):</text>
            <text x="580" y="960" fill="#ffffff" font-size="14">• Bradypnea (&lt; expected)</text>
            <text x="580" y="983" fill="#ffffff" font-size="14">• Cyanosis (late)</text>
            <text x="580" y="1006" fill="#ffffff" font-size="14">• Decreased breath sounds</text>
            <text x="580" y="1029" fill="#ffffff" font-size="14">• Apnea — IMMINENT ARREST</text>
            <text x="810" y="1058" text-anchor="middle" fill="#ef4444" font-size="13" font-weight="bold">Act on RR before SpO2 drops</text>
          </svg>`,
          caption: "Pediatric vital sign ranges by age, the SBP formula, and the deceptive timelines of pediatric shock and respiratory failure."
        }
      },
      {
        type: "example",
        title: "Walking Through an Abnormal Vital Sign Set",
        content: `**Scenario:** You walk into Room 412 to take morning vitals on Mr. Alvarez, **72 years old, post-op day 2 hip ORIF**. He says "I just feel a little tired today." You obtain:

- **BP**: **84/52** mmHg (his baseline was 132/78)
- **HR**: **118** bpm (baseline 76)
- **RR**: **26** /min
- **SpO2**: **88%** on room air
- **Temp**: **101.8°F**
- **Pain**: 6/10 hip incision

**Step 1: Recognize the pattern.** Hypotension + tachycardia + tachypnea + hypoxia + fever in a post-op patient = think **sepsis** OR **pulmonary embolism** (post-op DVT). Both are life-threatening.

**Step 2: Trigger the action.** Multiple values cross RRT thresholds:
- SBP < 90 (shock)
- HR > 120 (approaching)
- RR > 24 (resp distress)
- SpO2 < 90 (hypoxia)
- Temp > 101.5 (sepsis criterion)

**Step 3: Act FAST.** Apply **oxygen** (titrate to SpO2 ≥ 94%), stay at bedside, call **Rapid Response**, get a recheck in **5 minutes**, prepare to draw **lactate, blood cultures, CBC**, and to **start IV fluids** per sepsis protocol.

**Step 4: Communicate using SBAR** (next card).`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-size="28" font-weight="bold">Mr. Alvarez — Reading the Vitals</text>
            <text x="550" y="90" text-anchor="middle" fill="#888" font-size="16">72yo, post-op day 2 hip ORIF — "just feel tired today"</text>
            <rect x="60" y="120" width="1000" height="240" fill="#1a1a2e" stroke="#ef4444" stroke-width="3" rx="10"/>
            <text x="560" y="155" text-anchor="middle" fill="#ef4444" font-size="22" font-weight="bold">CURRENT VITALS vs BASELINE</text>
            <line x1="80" y1="170" x2="1040" y2="170" stroke="#ef4444"/>
            <text x="200" y="200" text-anchor="middle" fill="#ffd700" font-size="14">BASELINE</text>
            <text x="500" y="200" text-anchor="middle" fill="#ffffff" font-size="14">→ NOW</text>
            <text x="850" y="200" text-anchor="middle" fill="#ef4444" font-size="14">CHANGE</text>
            <text x="100" y="235" fill="#10b981" font-size="14" font-weight="bold">BP</text>
            <text x="200" y="235" text-anchor="middle" fill="#ffffff" font-size="16">132/78</text>
            <text x="500" y="235" text-anchor="middle" fill="#ef4444" font-size="20" font-weight="bold">84/52</text>
            <text x="850" y="235" text-anchor="middle" fill="#ef4444" font-size="14">SHOCK</text>
            <text x="100" y="265" fill="#10b981" font-size="14" font-weight="bold">HR</text>
            <text x="200" y="265" text-anchor="middle" fill="#ffffff" font-size="16">76</text>
            <text x="500" y="265" text-anchor="middle" fill="#ef4444" font-size="20" font-weight="bold">118</text>
            <text x="850" y="265" text-anchor="middle" fill="#ef4444" font-size="14">TACHYCARDIC</text>
            <text x="100" y="295" fill="#10b981" font-size="14" font-weight="bold">RR</text>
            <text x="200" y="295" text-anchor="middle" fill="#ffffff" font-size="16">16</text>
            <text x="500" y="295" text-anchor="middle" fill="#ef4444" font-size="20" font-weight="bold">26</text>
            <text x="850" y="295" text-anchor="middle" fill="#ef4444" font-size="14">RESP DISTRESS</text>
            <text x="100" y="325" fill="#10b981" font-size="14" font-weight="bold">SpO2</text>
            <text x="200" y="325" text-anchor="middle" fill="#ffffff" font-size="16">97%</text>
            <text x="500" y="325" text-anchor="middle" fill="#ef4444" font-size="20" font-weight="bold">88%</text>
            <text x="850" y="325" text-anchor="middle" fill="#ef4444" font-size="14">SEVERE HYPOXIA</text>
            <text x="100" y="355" fill="#10b981" font-size="14" font-weight="bold">Temp</text>
            <text x="200" y="355" text-anchor="middle" fill="#ffffff" font-size="16">98.6F</text>
            <text x="500" y="355" text-anchor="middle" fill="#ef4444" font-size="20" font-weight="bold">101.8F</text>
            <text x="850" y="355" text-anchor="middle" fill="#ef4444" font-size="14">FEBRILE</text>
            <rect x="60" y="380" width="1000" height="120" fill="#1a1a2e" stroke="#ffd700" stroke-width="2" rx="10"/>
            <text x="560" y="415" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">DIFFERENTIAL — POST-OP DAY 2</text>
            <text x="160" y="450" text-anchor="middle" fill="#ef4444" font-size="16" font-weight="bold">SEPSIS</text>
            <text x="160" y="475" text-anchor="middle" fill="#ffffff" font-size="13">fever + tachy + ↓BP</text>
            <text x="380" y="450" text-anchor="middle" fill="#ef4444" font-size="16" font-weight="bold">PULMONARY EMBOLISM</text>
            <text x="380" y="475" text-anchor="middle" fill="#ffffff" font-size="13">post-op DVT risk + hypoxia</text>
            <text x="640" y="450" text-anchor="middle" fill="#ef4444" font-size="16" font-weight="bold">HEMORRHAGE</text>
            <text x="640" y="475" text-anchor="middle" fill="#ffffff" font-size="13">surgical bleed → ↓BP, ↑HR</text>
            <text x="900" y="450" text-anchor="middle" fill="#ef4444" font-size="16" font-weight="bold">MI</text>
            <text x="900" y="475" text-anchor="middle" fill="#ffffff" font-size="13">post-op cardiac event</text>
            <rect x="60" y="520" width="1000" height="540" fill="#1a1a2e" stroke="#10b981" stroke-width="2" rx="10"/>
            <text x="560" y="555" text-anchor="middle" fill="#10b981" font-size="22" font-weight="bold">ACTION SEQUENCE (in order)</text>
            <line x1="80" y1="570" x2="1040" y2="570" stroke="#10b981"/>
            <circle cx="100" cy="610" r="20" fill="#ffd700"/>
            <text x="100" y="617" text-anchor="middle" fill="#1a1a2e" font-size="18" font-weight="bold">1</text>
            <text x="140" y="605" fill="#ffd700" font-size="16" font-weight="bold">STAY AT BEDSIDE</text>
            <text x="140" y="625" fill="#ffffff" font-size="14">— do not leave. Use call light or phone for help.</text>
            <circle cx="100" cy="660" r="20" fill="#ffd700"/>
            <text x="100" y="667" text-anchor="middle" fill="#1a1a2e" font-size="18" font-weight="bold">2</text>
            <text x="140" y="655" fill="#ffd700" font-size="16" font-weight="bold">APPLY OXYGEN</text>
            <text x="140" y="675" fill="#ffffff" font-size="14">— NC 2-6 L/min, titrate to SpO2 ≥ 94% (ABCs)</text>
            <circle cx="100" cy="710" r="20" fill="#ffd700"/>
            <text x="100" y="717" text-anchor="middle" fill="#1a1a2e" font-size="18" font-weight="bold">3</text>
            <text x="140" y="705" fill="#ffd700" font-size="16" font-weight="bold">CALL RAPID RESPONSE</text>
            <text x="140" y="725" fill="#ffffff" font-size="14">— multiple RRT triggers met</text>
            <circle cx="100" cy="760" r="20" fill="#ffd700"/>
            <text x="100" y="767" text-anchor="middle" fill="#1a1a2e" font-size="18" font-weight="bold">4</text>
            <text x="140" y="755" fill="#ffd700" font-size="16" font-weight="bold">RAISE HEAD OF BED</text>
            <text x="140" y="775" fill="#ffffff" font-size="14">— semi-Fowler's eases breathing</text>
            <circle cx="100" cy="810" r="20" fill="#ffd700"/>
            <text x="100" y="817" text-anchor="middle" fill="#1a1a2e" font-size="18" font-weight="bold">5</text>
            <text x="140" y="805" fill="#ffd700" font-size="16" font-weight="bold">ESTABLISH 2 LARGE-BORE IVs</text>
            <text x="140" y="825" fill="#ffffff" font-size="14">— 18g preferred for fluid resuscitation</text>
            <circle cx="100" cy="860" r="20" fill="#ffd700"/>
            <text x="100" y="867" text-anchor="middle" fill="#1a1a2e" font-size="18" font-weight="bold">6</text>
            <text x="140" y="855" fill="#ffd700" font-size="16" font-weight="bold">DRAW LABS</text>
            <text x="140" y="875" fill="#ffffff" font-size="14">— lactate, blood cultures x 2, CBC, BMP, ABG</text>
            <circle cx="100" cy="910" r="20" fill="#ffd700"/>
            <text x="100" y="917" text-anchor="middle" fill="#1a1a2e" font-size="18" font-weight="bold">7</text>
            <text x="140" y="905" fill="#ffd700" font-size="16" font-weight="bold">START IV FLUIDS</text>
            <text x="140" y="925" fill="#ffffff" font-size="14">— 30 mL/kg LR or NS bolus for sepsis protocol</text>
            <circle cx="100" cy="960" r="20" fill="#ffd700"/>
            <text x="100" y="967" text-anchor="middle" fill="#1a1a2e" font-size="18" font-weight="bold">8</text>
            <text x="140" y="955" fill="#ffd700" font-size="16" font-weight="bold">RECHECK VITALS Q5 MIN</text>
            <text x="140" y="975" fill="#ffffff" font-size="14">— and continuously monitor</text>
            <circle cx="100" cy="1010" r="20" fill="#ffd700"/>
            <text x="100" y="1017" text-anchor="middle" fill="#1a1a2e" font-size="18" font-weight="bold">9</text>
            <text x="140" y="1005" fill="#ffd700" font-size="16" font-weight="bold">DOCUMENT &amp; COMMUNICATE</text>
            <text x="140" y="1025" fill="#ffffff" font-size="14">— SBAR to provider, accurate timeline</text>
            <text x="560" y="1055" text-anchor="middle" fill="#ffd700" font-size="14" font-style="italic">Remember: oxygen + IV access + fluids + call for help — first 5 minutes save lives</text>
          </svg>`,
          caption: "Pattern recognition for a deteriorating post-op patient and the 9-step action sequence."
        }
      },
      {
        type: "quiz",
        title: "Quiz: SBAR Communication",
        content: `When you call the provider about Mr. Alvarez, you need to communicate efficiently using **SBAR** (Situation, Background, Assessment, Recommendation).`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold">SBAR Framework</text>
            <text x="550" y="90" text-anchor="middle" fill="#888" font-size="18">The hand-off and escalation gold standard</text>
            <rect x="60" y="130" width="1000" height="200" fill="#ef4444" rx="10"/>
            <text x="100" y="180" fill="#ffffff" font-size="42" font-weight="bold">S</text>
            <text x="170" y="170" fill="#ffffff" font-size="22" font-weight="bold">SITUATION</text>
            <text x="170" y="200" fill="#ffd700" font-size="14">"This is Maria, RN, on 4 East. I'm calling about Mr. Alvarez,</text>
            <text x="170" y="225" fill="#ffd700" font-size="14">room 412, who is acutely decompensating."</text>
            <text x="170" y="265" fill="#ffffff" font-size="16">• Identify yourself + unit</text>
            <text x="170" y="290" fill="#ffffff" font-size="16">• Patient name + location</text>
            <text x="170" y="315" fill="#ffffff" font-size="16">• One-line summary of WHY you are calling</text>
            <rect x="60" y="340" width="1000" height="200" fill="#f59e0b" rx="10"/>
            <text x="100" y="390" fill="#ffffff" font-size="42" font-weight="bold">B</text>
            <text x="170" y="380" fill="#ffffff" font-size="22" font-weight="bold">BACKGROUND</text>
            <text x="170" y="410" fill="#ffd700" font-size="14">"72-year-old male, post-op day 2 from a right hip ORIF.</text>
            <text x="170" y="435" fill="#ffd700" font-size="14">PMH: HTN, type 2 DM. No anticoagulant ordered post-op."</text>
            <text x="170" y="475" fill="#ffffff" font-size="16">• Age, sex, diagnosis</text>
            <text x="170" y="500" fill="#ffffff" font-size="16">• Relevant PMH, current meds</text>
            <text x="170" y="525" fill="#ffffff" font-size="16">• Brief timeline of admission</text>
            <rect x="60" y="550" width="1000" height="240" fill="#10b981" rx="10"/>
            <text x="100" y="600" fill="#ffffff" font-size="42" font-weight="bold">A</text>
            <text x="170" y="590" fill="#ffffff" font-size="22" font-weight="bold">ASSESSMENT</text>
            <text x="170" y="620" fill="#ffd700" font-size="13">"Vitals now: BP 84/52 (from 132/78), HR 118, RR 26,</text>
            <text x="170" y="643" fill="#ffd700" font-size="13">SpO2 88% on room air, temp 101.8F. Lung sounds with</text>
            <text x="170" y="666" fill="#ffd700" font-size="13">crackles bilaterally. Surgical site clean, no obvious bleeding.</text>
            <text x="170" y="689" fill="#ffd700" font-size="13">Mental status slightly confused — new from baseline."</text>
            <text x="170" y="725" fill="#ffffff" font-size="16">• Current vitals with comparisons</text>
            <text x="170" y="750" fill="#ffffff" font-size="16">• Focused assessment findings</text>
            <text x="170" y="775" fill="#ffffff" font-size="16">• Your clinical impression (sepsis? PE?)</text>
            <rect x="60" y="800" width="1000" height="240" fill="#6366f1" rx="10"/>
            <text x="100" y="850" fill="#ffffff" font-size="42" font-weight="bold">R</text>
            <text x="170" y="840" fill="#ffffff" font-size="22" font-weight="bold">RECOMMENDATION / REQUEST</text>
            <text x="170" y="870" fill="#ffd700" font-size="13">"I'm concerned for sepsis or pulmonary embolism. I have</text>
            <text x="170" y="893" fill="#ffd700" font-size="13">started O2, RRT is here, I have 2 large-bore IVs. I need:</text>
            <text x="170" y="916" fill="#ffd700" font-size="13">orders for cultures, lactate, fluid bolus, and a STAT CT-PE.</text>
            <text x="170" y="939" fill="#ffd700" font-size="13">Can you come to the bedside, please?"</text>
            <text x="170" y="975" fill="#ffffff" font-size="16">• What YOU think is needed (be specific)</text>
            <text x="170" y="1000" fill="#ffffff" font-size="16">• Ask for orders, bedside evaluation, or transfer</text>
            <text x="170" y="1025" fill="#ffffff" font-size="16">• Read back any orders received</text>
          </svg>`,
          caption: "SBAR — Situation, Background, Assessment, Recommendation — the universal escalation language."
        },
        question: "A nurse is preparing to call the physician about a patient whose blood pressure has dropped from 130/80 to 86/52 in the past 30 minutes. Which statement BEST represents the ASSESSMENT portion of an SBAR communication?",
        options: [
          { text: "\"This is Sarah, the nurse caring for Mr. Lee in Room 308.\"", correct: false },
          { text: "\"Mr. Lee is a 65-year-old admitted yesterday for pneumonia, with a history of diabetes.\"", correct: false },
          { text: "\"His BP is 86/52 down from 130/80, HR is 122, RR is 24, SpO2 is 91%; he is diaphoretic and confused — I am concerned for septic shock.\"", correct: true },
          { text: "\"I need you to come to the bedside and order a fluid bolus and broad-spectrum antibiotics now.\"", correct: false }
        ],
        explanation: "The Assessment portion of SBAR conveys current clinical findings AND the nurse's interpretation/concern. Option 1 is Situation (who is calling and about whom). Option 2 is Background (history). Option 4 is Recommendation (what you want done). Option 3 lays out objective findings plus the nurse's clinical impression ('I am concerned for septic shock') — that interpretation is the heart of a strong nursing Assessment and helps the provider prioritize."
      },
      {
        type: "application",
        title: "Trending Matters More Than Single Numbers",
        content: `**Scenario:** You are caring for Mrs. Tran, **78 years old, admitted with pneumonia**. Her vitals over the last 4 hours:

| Time | BP | HR | RR | SpO2 | Temp |
|------|-----|-----|-----|------|------|
| 0800 | 128/76 | 88 | 18 | 96% | 100.4 |
| 1000 | 118/68 | 96 | 20 | 94% | 100.8 |
| 1200 | 108/62 | 108 | 22 | 92% | 101.2 |
| 1400 | 96/58 | 116 | 24 | 90% | 101.6 |

**Each individual set is not yet at RRT criteria** — but the **trend is unmistakable**. BP dropping, HR climbing, RR climbing, SpO2 dropping, temp climbing. This is **early sepsis**.

The NCLEX (and real-life nursing) reward nurses who **escalate on the trend**, not just on the absolute number. By 1400 you should already have:

1. **Notified the provider** at 1200, when the trend became clear
2. **Started oxygen** when SpO2 hit 92%
3. **Increased frequency of vitals** (q15 min)
4. **Drawn lactate / cultures** per sepsis protocol
5. **Anticipated a fluid bolus order**

Waiting until SBP < 90 to act would be **too late**. **Trends predict crashes.** Every shift report you give should include the **direction of change**, not just the last set of numbers.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-size="30" font-weight="bold">Trending: Mrs. Tran Over 6 Hours</text>
            <text x="550" y="90" text-anchor="middle" fill="#888" font-size="16">Each set looks "okay" — but the trend screams sepsis</text>
            <rect x="60" y="120" width="1000" height="50" fill="#6366f1" rx="6"/>
            <text x="120" y="153" fill="#ffffff" font-size="16" font-weight="bold">TIME</text>
            <text x="280" y="153" fill="#ffffff" font-size="16" font-weight="bold">BP</text>
            <text x="430" y="153" fill="#ffffff" font-size="16" font-weight="bold">HR</text>
            <text x="560" y="153" fill="#ffffff" font-size="16" font-weight="bold">RR</text>
            <text x="690" y="153" fill="#ffffff" font-size="16" font-weight="bold">SpO2</text>
            <text x="830" y="153" fill="#ffffff" font-size="16" font-weight="bold">TEMP</text>
            <text x="960" y="153" fill="#ffffff" font-size="16" font-weight="bold">STATUS</text>
            <rect x="60" y="175" width="1000" height="45" fill="#1a1a2e" stroke="#10b981" rx="4"/>
            <text x="120" y="203" fill="#ffd700" font-size="15" font-weight="bold">0800</text>
            <text x="280" y="203" fill="#ffffff" font-size="15">128/76</text>
            <text x="430" y="203" fill="#ffffff" font-size="15">88</text>
            <text x="560" y="203" fill="#ffffff" font-size="15">18</text>
            <text x="690" y="203" fill="#ffffff" font-size="15">96%</text>
            <text x="830" y="203" fill="#ffffff" font-size="15">100.4</text>
            <text x="960" y="203" fill="#10b981" font-size="14" font-weight="bold">OK</text>
            <rect x="60" y="225" width="1000" height="45" fill="#1a1a2e" stroke="#f59e0b" rx="4"/>
            <text x="120" y="253" fill="#ffd700" font-size="15" font-weight="bold">1000</text>
            <text x="280" y="253" fill="#ffffff" font-size="15">118/68</text>
            <text x="430" y="253" fill="#ffffff" font-size="15">96</text>
            <text x="560" y="253" fill="#ffffff" font-size="15">20</text>
            <text x="690" y="253" fill="#ffffff" font-size="15">94%</text>
            <text x="830" y="253" fill="#ffffff" font-size="15">100.8</text>
            <text x="960" y="253" fill="#f59e0b" font-size="14" font-weight="bold">WATCH</text>
            <rect x="60" y="275" width="1000" height="45" fill="#1a1a2e" stroke="#f59e0b" rx="4"/>
            <text x="120" y="303" fill="#ffd700" font-size="15" font-weight="bold">1200</text>
            <text x="280" y="303" fill="#ffffff" font-size="15">108/62</text>
            <text x="430" y="303" fill="#ffffff" font-size="15">108</text>
            <text x="560" y="303" fill="#ffffff" font-size="15">22</text>
            <text x="690" y="303" fill="#ffffff" font-size="15">92%</text>
            <text x="830" y="303" fill="#ffffff" font-size="15">101.2</text>
            <text x="960" y="303" fill="#f59e0b" font-size="14" font-weight="bold">NOTIFY</text>
            <rect x="60" y="325" width="1000" height="45" fill="#1a1a2e" stroke="#ef4444" stroke-width="2" rx="4"/>
            <text x="120" y="353" fill="#ffd700" font-size="15" font-weight="bold">1400</text>
            <text x="280" y="353" fill="#ef4444" font-size="15" font-weight="bold">96/58</text>
            <text x="430" y="353" fill="#ef4444" font-size="15" font-weight="bold">116</text>
            <text x="560" y="353" fill="#ef4444" font-size="15" font-weight="bold">24</text>
            <text x="690" y="353" fill="#ef4444" font-size="15" font-weight="bold">90%</text>
            <text x="830" y="353" fill="#ef4444" font-size="15" font-weight="bold">101.6</text>
            <text x="960" y="353" fill="#ef4444" font-size="14" font-weight="bold">ACT NOW</text>
            <rect x="60" y="390" width="1000" height="280" fill="#1a1a2e" stroke="#ffd700" stroke-width="2" rx="10"/>
            <text x="560" y="425" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">TREND VISUALIZATION</text>
            <line x1="100" y1="640" x2="100" y2="460" stroke="#888" stroke-width="2"/>
            <line x1="100" y1="640" x2="1020" y2="640" stroke="#888" stroke-width="2"/>
            <text x="80" y="466" text-anchor="end" fill="#888" font-size="11">High</text>
            <text x="80" y="645" text-anchor="end" fill="#888" font-size="11">Low</text>
            <text x="200" y="660" text-anchor="middle" fill="#888" font-size="12">0800</text>
            <text x="450" y="660" text-anchor="middle" fill="#888" font-size="12">1000</text>
            <text x="700" y="660" text-anchor="middle" fill="#888" font-size="12">1200</text>
            <text x="950" y="660" text-anchor="middle" fill="#888" font-size="12">1400</text>
            <polyline points="200,500 450,520 700,545 950,575" stroke="#10b981" stroke-width="3" fill="none"/>
            <circle cx="200" cy="500" r="5" fill="#10b981"/>
            <circle cx="450" cy="520" r="5" fill="#10b981"/>
            <circle cx="700" cy="545" r="5" fill="#10b981"/>
            <circle cx="950" cy="575" r="5" fill="#10b981"/>
            <text x="970" y="580" fill="#10b981" font-size="12">BP↓</text>
            <polyline points="200,580 450,555 700,520 950,495" stroke="#ef4444" stroke-width="3" fill="none"/>
            <circle cx="200" cy="580" r="5" fill="#ef4444"/>
            <circle cx="450" cy="555" r="5" fill="#ef4444"/>
            <circle cx="700" cy="520" r="5" fill="#ef4444"/>
            <circle cx="950" cy="495" r="5" fill="#ef4444"/>
            <text x="970" y="500" fill="#ef4444" font-size="12">HR↑</text>
            <polyline points="200,610 450,600 700,585 950,560" stroke="#f59e0b" stroke-width="3" fill="none"/>
            <circle cx="200" cy="610" r="5" fill="#f59e0b"/>
            <circle cx="450" cy="600" r="5" fill="#f59e0b"/>
            <circle cx="700" cy="585" r="5" fill="#f59e0b"/>
            <circle cx="950" cy="560" r="5" fill="#f59e0b"/>
            <text x="970" y="565" fill="#f59e0b" font-size="12">Temp↑</text>
            <rect x="60" y="690" width="1000" height="370" fill="#1a1a2e" stroke="#ef4444" stroke-width="3" rx="10"/>
            <text x="560" y="725" text-anchor="middle" fill="#ef4444" font-size="22" font-weight="bold">LESSON: ACT ON TRENDS, NOT ABSOLUTES</text>
            <line x1="80" y1="740" x2="1040" y2="740" stroke="#ef4444"/>
            <text x="100" y="775" fill="#10b981" font-size="16" font-weight="bold">By 1000:</text>
            <text x="200" y="775" fill="#ffffff" font-size="15">Notice the trend. Increase vitals frequency.</text>
            <text x="100" y="810" fill="#10b981" font-size="16" font-weight="bold">By 1200:</text>
            <text x="200" y="810" fill="#ffffff" font-size="15">NOTIFY provider. Start oxygen. Re-vital q15min.</text>
            <text x="100" y="845" fill="#10b981" font-size="16" font-weight="bold">By 1400:</text>
            <text x="200" y="845" fill="#ffffff" font-size="15">Draw lactate, cultures. Anticipate fluid bolus. Consider RRT.</text>
            <text x="100" y="895" fill="#ffd700" font-size="16" font-weight="bold">qSOFA SEPSIS SCREEN — 2 of 3 = high risk</text>
            <text x="100" y="925" fill="#ef4444" font-size="14">• Altered mental status (GCS &lt; 15)</text>
            <text x="100" y="950" fill="#ef4444" font-size="14">• Respiratory rate ≥ 22</text>
            <text x="100" y="975" fill="#ef4444" font-size="14">• Systolic BP ≤ 100 mmHg</text>
            <text x="560" y="1020" text-anchor="middle" fill="#ffd700" font-size="16" font-style="italic">"Trends predict crashes. Waiting for crisis numbers is waiting too long."</text>
          </svg>`,
          caption: "Trending vital signs predict deterioration hours before single-number criteria are met."
        }
      }
    ]
  },
  {
    id: "nclex-fundamentals-lesson-9",
    title: "Patient Safety: Fall Risk Assessment, Restraint Rules, and Never Events",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "Safety Is Always the Highest Priority",
        content: `On the NCLEX, **patient safety beats almost every other consideration** — including comfort, convenience, and even patient preference (when the patient is unable to make safe choices). The exam tests three interconnected safety domains:

1. **Fall Prevention** — the **Morse Fall Scale** is the most-tested screening tool. Score components: history of falls, secondary diagnosis, ambulatory aid, IV/heparin lock, gait, mental status. Score **≥ 45 = high risk** → activate the fall prevention bundle.

2. **Restraint Rules** — restraints are a **last resort**. Try every alternative first. When unavoidable, you must follow strict rules: **least restrictive type**, **MD order within 1 hour** of application, **face-to-face evaluation within 1 hour** (24 hr for non-violent), reassess **every 2 hours**, document **release** every 2 hours.

3. **Never Events** — the **14 CMS Never Events** are errors so preventable Medicare will not pay if they occur: wrong-site surgery, retained foreign object, air embolism, blood incompatibility, Stage 3/4 pressure injury, falls with serious injury, and more.

These topics together represent **15-20% of NCLEX safety questions**. Master the bundles and the timelines.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold">The 3 Pillars of Patient Safety</text>
            <text x="550" y="90" text-anchor="middle" fill="#888" font-size="18">Falls • Restraints • Never Events</text>
            <rect x="40" y="120" width="340" height="320" fill="#1a1a2e" stroke="#0ea5e9" stroke-width="3" rx="10"/>
            <rect x="40" y="120" width="340" height="60" fill="#0ea5e9" rx="10"/>
            <text x="210" y="158" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">FALL PREVENTION</text>
            <text x="210" y="210" text-anchor="middle" fill="#ffd700" font-size="16" font-weight="bold">Morse Fall Scale</text>
            <text x="60" y="245" fill="#10b981" font-size="14">• Hx of falling (25)</text>
            <text x="60" y="270" fill="#10b981" font-size="14">• Secondary dx (15)</text>
            <text x="60" y="295" fill="#10b981" font-size="14">• Ambulatory aid (0-30)</text>
            <text x="60" y="320" fill="#10b981" font-size="14">• IV/saline lock (20)</text>
            <text x="60" y="345" fill="#10b981" font-size="14">• Gait (0-20)</text>
            <text x="60" y="370" fill="#10b981" font-size="14">• Mental status (0-15)</text>
            <rect x="60" y="385" width="300" height="40" fill="#ef4444" rx="6"/>
            <text x="210" y="412" text-anchor="middle" fill="#ffffff" font-size="16" font-weight="bold">Score ≥ 45 = HIGH RISK</text>
            <rect x="390" y="120" width="320" height="320" fill="#1a1a2e" stroke="#f59e0b" stroke-width="3" rx="10"/>
            <rect x="390" y="120" width="320" height="60" fill="#f59e0b" rx="10"/>
            <text x="550" y="158" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">RESTRAINTS</text>
            <text x="550" y="210" text-anchor="middle" fill="#ffd700" font-size="16" font-weight="bold">Last Resort — Strict Rules</text>
            <text x="410" y="245" fill="#10b981" font-size="14">• Try alternatives FIRST</text>
            <text x="410" y="270" fill="#10b981" font-size="14">• Least restrictive type</text>
            <text x="410" y="295" fill="#10b981" font-size="14">• MD order within 1 hr</text>
            <text x="410" y="320" fill="#10b981" font-size="14">• Q2H assessment</text>
            <text x="410" y="345" fill="#10b981" font-size="14">• Q2H release</text>
            <text x="410" y="370" fill="#10b981" font-size="14">• Quick-release knot</text>
            <rect x="410" y="385" width="280" height="40" fill="#ef4444" rx="6"/>
            <text x="550" y="412" text-anchor="middle" fill="#ffffff" font-size="16" font-weight="bold">NEVER PRN — never as needed</text>
            <rect x="720" y="120" width="340" height="320" fill="#1a1a2e" stroke="#ef4444" stroke-width="3" rx="10"/>
            <rect x="720" y="120" width="340" height="60" fill="#ef4444" rx="10"/>
            <text x="890" y="158" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">NEVER EVENTS</text>
            <text x="890" y="210" text-anchor="middle" fill="#ffd700" font-size="16" font-weight="bold">14 CMS Categories</text>
            <text x="740" y="245" fill="#10b981" font-size="14">• Wrong-site surgery</text>
            <text x="740" y="270" fill="#10b981" font-size="14">• Retained object</text>
            <text x="740" y="295" fill="#10b981" font-size="14">• Air embolism</text>
            <text x="740" y="320" fill="#10b981" font-size="14">• Blood incompatibility</text>
            <text x="740" y="345" fill="#10b981" font-size="14">• Stage 3/4 pressure inj.</text>
            <text x="740" y="370" fill="#10b981" font-size="14">• Falls w/ serious injury</text>
            <rect x="740" y="385" width="300" height="40" fill="#ef4444" rx="6"/>
            <text x="890" y="412" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="bold">Medicare WILL NOT pay</text>
            <rect x="40" y="460" width="1020" height="320" fill="#1a1a2e" stroke="#ffd700" stroke-width="2" rx="10"/>
            <text x="550" y="495" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">FALL PREVENTION BUNDLE</text>
            <text x="550" y="525" text-anchor="middle" fill="#888" font-size="14">Apply ALL of these to Morse score ≥ 45</text>
            <line x1="60" y1="540" x2="1040" y2="540" stroke="#ffd700"/>
            <circle cx="100" cy="580" r="18" fill="#ffd700"/>
            <text x="100" y="586" text-anchor="middle" fill="#1a1a2e" font-size="14" font-weight="bold">1</text>
            <text x="140" y="586" fill="#ffffff" font-size="15">Yellow non-skid socks AND yellow armband</text>
            <circle cx="100" cy="620" r="18" fill="#ffd700"/>
            <text x="100" y="626" text-anchor="middle" fill="#1a1a2e" font-size="14" font-weight="bold">2</text>
            <text x="140" y="626" fill="#ffffff" font-size="15">Bed in LOWEST position, brakes locked</text>
            <circle cx="100" cy="660" r="18" fill="#ffd700"/>
            <text x="100" y="666" text-anchor="middle" fill="#1a1a2e" font-size="14" font-weight="bold">3</text>
            <text x="140" y="666" fill="#ffffff" font-size="15">Bed alarm ON, chair alarm if up to chair</text>
            <circle cx="100" cy="700" r="18" fill="#ffd700"/>
            <text x="100" y="706" text-anchor="middle" fill="#1a1a2e" font-size="14" font-weight="bold">4</text>
            <text x="140" y="706" fill="#ffffff" font-size="15">Call light within reach + items reachable</text>
            <circle cx="100" cy="740" r="18" fill="#ffd700"/>
            <text x="100" y="746" text-anchor="middle" fill="#1a1a2e" font-size="14" font-weight="bold">5</text>
            <text x="140" y="746" fill="#ffffff" font-size="15">Hourly rounding ("4Ps": Pain, Position, Potty, Possessions)</text>
            <circle cx="600" cy="580" r="18" fill="#ffd700"/>
            <text x="600" y="586" text-anchor="middle" fill="#1a1a2e" font-size="14" font-weight="bold">6</text>
            <text x="640" y="586" fill="#ffffff" font-size="15">Room close to nurse's station</text>
            <circle cx="600" cy="620" r="18" fill="#ffd700"/>
            <text x="600" y="626" text-anchor="middle" fill="#1a1a2e" font-size="14" font-weight="bold">7</text>
            <text x="640" y="626" fill="#ffffff" font-size="15">Toileting schedule (q2h or w/ rounding)</text>
            <circle cx="600" cy="660" r="18" fill="#ffd700"/>
            <text x="600" y="666" text-anchor="middle" fill="#1a1a2e" font-size="14" font-weight="bold">8</text>
            <text x="640" y="666" fill="#ffffff" font-size="15">Educate patient AND family on plan</text>
            <circle cx="600" cy="700" r="18" fill="#ffd700"/>
            <text x="600" y="706" text-anchor="middle" fill="#1a1a2e" font-size="14" font-weight="bold">9</text>
            <text x="640" y="706" fill="#ffffff" font-size="15">Med review (sedatives, diuretics, antihypertensives)</text>
            <circle cx="600" cy="740" r="18" fill="#ffd700"/>
            <text x="600" y="746" text-anchor="middle" fill="#1a1a2e" font-size="12" font-weight="bold">10</text>
            <text x="640" y="746" fill="#ffffff" font-size="15">PT/OT consult for gait/strength</text>
            <rect x="40" y="800" width="1020" height="260" fill="#1a1a2e" stroke="#ec4899" stroke-width="2" rx="10"/>
            <text x="550" y="835" text-anchor="middle" fill="#ec4899" font-size="22" font-weight="bold">RESTRAINT TIMELINE — MEMORIZE THESE NUMBERS</text>
            <line x1="60" y1="850" x2="1040" y2="850" stroke="#ec4899"/>
            <text x="120" y="890" fill="#ffd700" font-size="16" font-weight="bold">VIOLENT / SELF-DESTRUCTIVE</text>
            <text x="120" y="920" fill="#ffffff" font-size="14">• Initial order: max 4 hours (adult)</text>
            <text x="120" y="945" fill="#ffffff" font-size="14">• Pediatric 9-17: max 2 hours</text>
            <text x="120" y="970" fill="#ffffff" font-size="14">• Pediatric &lt; 9: max 1 hour</text>
            <text x="120" y="995" fill="#ffffff" font-size="14">• In-person eval: within 1 hour</text>
            <text x="120" y="1020" fill="#ffffff" font-size="14">• Assess Q15 min (cont. visual)</text>
            <text x="120" y="1045" fill="#ffffff" font-size="14">• Order re-write: q4h (adult)</text>
            <text x="600" y="890" fill="#ffd700" font-size="16" font-weight="bold">NON-VIOLENT (MEDICAL)</text>
            <text x="600" y="920" fill="#ffffff" font-size="14">• Initial order: max 24 hours</text>
            <text x="600" y="945" fill="#ffffff" font-size="14">• In-person eval: within 24 hours</text>
            <text x="600" y="970" fill="#ffffff" font-size="14">• Assess Q2H (circulation, skin)</text>
            <text x="600" y="995" fill="#ffffff" font-size="14">• Release Q2H, offer toileting</text>
            <text x="600" y="1020" fill="#ffffff" font-size="14">• Order re-write: q24h</text>
            <text x="600" y="1045" fill="#ef4444" font-size="14" font-weight="bold">• NEVER PRN — always specific event</text>
          </svg>`,
          caption: "The three patient safety pillars, the fall prevention bundle, and the strict restraint timeline."
        }
      },
      {
        type: "concept",
        title: "Morse Fall Scale — Scoring and the Bundle",
        content: `The **Morse Fall Scale** is the gold-standard tool you must know cold. Total score range is **0-125**:

| Item | Scoring |
|------|---------|
| **History of falling** (within 3 months) | No 0 / Yes 25 |
| **Secondary diagnosis** (>1 medical dx) | No 0 / Yes 15 |
| **Ambulatory aid** | None/bedrest/wheelchair/nurse 0 / Crutches/cane/walker 15 / Furniture 30 |
| **IV / saline lock** | No 0 / Yes 20 |
| **Gait** | Normal/bedrest 0 / Weak 10 / Impaired 20 |
| **Mental status** | Oriented to ability 0 / Forgets limitations 15 |

**Risk levels:**
- **0-24**: No / low risk → standard precautions
- **25-44**: Moderate risk → low-risk fall interventions
- **≥ 45**: HIGH risk → full bundle, including 1:1 monitoring consideration

**Key NCLEX traps**: An IV line **automatically adds 20 points** — a "well" patient with just an IV starts at 20 before anything else. The patient who **forgets their limitations** (tries to walk despite being told not to) scores 15 in mental status — this is the **demented or delirious patient who is most dangerous**. Score on admission, after a fall, after status change, and at minimum q shift.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold">Morse Fall Scale Scoring</text>
            <text x="550" y="90" text-anchor="middle" fill="#888" font-size="18">6 components — total 0 to 125</text>
            <rect x="60" y="130" width="1000" height="50" fill="#6366f1" rx="6"/>
            <text x="100" y="163" fill="#ffffff" font-size="16" font-weight="bold">ITEM</text>
            <text x="500" y="163" fill="#ffffff" font-size="16" font-weight="bold">SCORING</text>
            <text x="920" y="163" fill="#ffffff" font-size="16" font-weight="bold">MAX</text>
            <rect x="60" y="185" width="1000" height="60" fill="#1a1a2e" stroke="#6366f1" rx="6"/>
            <text x="80" y="215" fill="#ffd700" font-size="15" font-weight="bold">1. History of falling</text>
            <text x="80" y="235" fill="#888" font-size="12">(within 3 months)</text>
            <text x="500" y="222" fill="#ffffff" font-size="14">No = 0</text>
            <text x="700" y="222" fill="#ef4444" font-size="14">Yes = 25</text>
            <text x="930" y="225" fill="#ef4444" font-size="20" font-weight="bold">25</text>
            <rect x="60" y="250" width="1000" height="60" fill="#1a1a2e" stroke="#6366f1" rx="6"/>
            <text x="80" y="280" fill="#ffd700" font-size="15" font-weight="bold">2. Secondary diagnosis</text>
            <text x="80" y="300" fill="#888" font-size="12">(more than 1 medical dx)</text>
            <text x="500" y="287" fill="#ffffff" font-size="14">No = 0</text>
            <text x="700" y="287" fill="#f59e0b" font-size="14">Yes = 15</text>
            <text x="930" y="290" fill="#f59e0b" font-size="20" font-weight="bold">15</text>
            <rect x="60" y="315" width="1000" height="80" fill="#1a1a2e" stroke="#6366f1" rx="6"/>
            <text x="80" y="345" fill="#ffd700" font-size="15" font-weight="bold">3. Ambulatory aid</text>
            <text x="500" y="335" fill="#10b981" font-size="13">None / bedrest / wheelchair = 0</text>
            <text x="500" y="358" fill="#f59e0b" font-size="13">Crutches / cane / walker = 15</text>
            <text x="500" y="381" fill="#ef4444" font-size="13">Furniture (using to support) = 30</text>
            <text x="930" y="365" fill="#ef4444" font-size="20" font-weight="bold">30</text>
            <rect x="60" y="400" width="1000" height="60" fill="#1a1a2e" stroke="#6366f1" rx="6"/>
            <text x="80" y="430" fill="#ffd700" font-size="15" font-weight="bold">4. IV or saline lock</text>
            <text x="80" y="450" fill="#888" font-size="12">(any IV access)</text>
            <text x="500" y="437" fill="#ffffff" font-size="14">No = 0</text>
            <text x="700" y="437" fill="#ef4444" font-size="14">Yes = 20</text>
            <text x="930" y="440" fill="#ef4444" font-size="20" font-weight="bold">20</text>
            <rect x="60" y="465" width="1000" height="80" fill="#1a1a2e" stroke="#6366f1" rx="6"/>
            <text x="80" y="495" fill="#ffd700" font-size="15" font-weight="bold">5. Gait</text>
            <text x="500" y="485" fill="#10b981" font-size="13">Normal / bedrest / wheelchair = 0</text>
            <text x="500" y="508" fill="#f59e0b" font-size="13">Weak (stooped, short steps) = 10</text>
            <text x="500" y="531" fill="#ef4444" font-size="13">Impaired (cannot walk w/o assist) = 20</text>
            <text x="930" y="515" fill="#ef4444" font-size="20" font-weight="bold">20</text>
            <rect x="60" y="550" width="1000" height="60" fill="#1a1a2e" stroke="#6366f1" rx="6"/>
            <text x="80" y="580" fill="#ffd700" font-size="15" font-weight="bold">6. Mental status</text>
            <text x="80" y="600" fill="#888" font-size="12">(self-awareness)</text>
            <text x="500" y="575" fill="#10b981" font-size="13">Oriented to own ability = 0</text>
            <text x="500" y="598" fill="#ef4444" font-size="13">FORGETS LIMITATIONS = 15</text>
            <text x="930" y="590" fill="#ef4444" font-size="20" font-weight="bold">15</text>
            <rect x="60" y="630" width="1000" height="180" fill="#1a1a2e" stroke="#ffd700" stroke-width="2" rx="10"/>
            <text x="560" y="665" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">RISK CATEGORIES &amp; ACTION</text>
            <line x1="80" y1="680" x2="1040" y2="680" stroke="#ffd700"/>
            <rect x="100" y="700" width="280" height="90" fill="#10b981" rx="8"/>
            <text x="240" y="730" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">0 — 24</text>
            <text x="240" y="755" text-anchor="middle" fill="#ffffff" font-size="14">NO / LOW RISK</text>
            <text x="240" y="775" text-anchor="middle" fill="#ffffff" font-size="13">Standard precautions</text>
            <rect x="410" y="700" width="280" height="90" fill="#f59e0b" rx="8"/>
            <text x="550" y="730" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">25 — 44</text>
            <text x="550" y="755" text-anchor="middle" fill="#ffffff" font-size="14">MODERATE RISK</text>
            <text x="550" y="775" text-anchor="middle" fill="#ffffff" font-size="13">Low-fall interventions</text>
            <rect x="720" y="700" width="280" height="90" fill="#ef4444" rx="8"/>
            <text x="860" y="730" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">≥ 45</text>
            <text x="860" y="755" text-anchor="middle" fill="#ffffff" font-size="14">HIGH RISK</text>
            <text x="860" y="775" text-anchor="middle" fill="#ffffff" font-size="13">FULL bundle activated</text>
            <rect x="60" y="830" width="1000" height="230" fill="#1a1a2e" stroke="#ec4899" stroke-width="2" rx="10"/>
            <text x="560" y="865" text-anchor="middle" fill="#ec4899" font-size="20" font-weight="bold">WORKED EXAMPLE — MS. RIVERA, 78</text>
            <line x1="80" y1="880" x2="1040" y2="880" stroke="#ec4899"/>
            <text x="100" y="915" fill="#ffd700" font-size="14" font-weight="bold">Fell at home last week:</text>
            <text x="900" y="915" text-anchor="end" fill="#ef4444" font-size="16" font-weight="bold">+25</text>
            <text x="100" y="945" fill="#ffd700" font-size="14" font-weight="bold">HTN, DM, CHF (multiple dx):</text>
            <text x="900" y="945" text-anchor="end" fill="#ef4444" font-size="16" font-weight="bold">+15</text>
            <text x="100" y="975" fill="#ffd700" font-size="14" font-weight="bold">Uses a walker:</text>
            <text x="900" y="975" text-anchor="end" fill="#ef4444" font-size="16" font-weight="bold">+15</text>
            <text x="100" y="1005" fill="#ffd700" font-size="14" font-weight="bold">IV antibiotics running:</text>
            <text x="900" y="1005" text-anchor="end" fill="#ef4444" font-size="16" font-weight="bold">+20</text>
            <text x="100" y="1035" fill="#ffd700" font-size="14" font-weight="bold">Gait weak post-illness:</text>
            <text x="900" y="1035" text-anchor="end" fill="#ef4444" font-size="16" font-weight="bold">+10</text>
            <text x="100" y="1055" fill="#ffd700" font-size="14" font-weight="bold">Oriented to limitations:                                            TOTAL = 85 — HIGH RISK</text>
            <text x="900" y="1055" text-anchor="end" fill="#ef4444" font-size="16" font-weight="bold">+0</text>
          </svg>`,
          caption: "Morse Fall Scale items, scoring, and a worked example (85 = high risk → full bundle)."
        }
      },
      {
        type: "example",
        title: "Restraint Rules — A Walk-Through",
        content: `**Scenario:** Mr. Davis is post-op day 1 from abdominal surgery. He becomes **confused at night** (sundowning) and **repeatedly tries to pull out his NG tube and IV**. He has already pulled the NG once.

**Step 1 — Alternatives FIRST.** Before any restraint:
- Reorient frequently, soft lighting
- Family at bedside if possible
- Move closer to nurse's station
- Distract (familiar music, TV)
- Camouflage IV with long sleeves
- Treat underlying cause (pain, hypoxia, full bladder)
- **1:1 sitter** if available

**Step 2 — Choose least restrictive.** If alternatives fail and the patient remains at risk for **medical injury** (NG tube dislodgement is a medical concern, not a violent behavior), this is a **non-violent / medical restraint**. Options: mittens, soft wrist restraints.

**Step 3 — Get the order.** Provider order required **within 1 hour** of application (non-violent). The order must specify: **type of restraint, reason, duration (max 24 hr for non-violent), and behavior criteria for release**. **Never PRN** — every application is a specific clinical event.

**Step 4 — Maintenance.** Q2H: check **skin, circulation, range of motion**, offer **toileting, fluids, repositioning**. Document. **Release one limb at a time**. Use a **quick-release knot** tied to the bed frame (**not the side rail**) so the restraint moves with the bed.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-size="30" font-weight="bold">Restraint Decision Flow</text>
            <text x="550" y="90" text-anchor="middle" fill="#888" font-size="16">Mr. Davis — sundowning, repeated NG tube self-extubation</text>
            <rect x="350" y="120" width="400" height="60" fill="#6366f1" rx="10"/>
            <text x="550" y="158" text-anchor="middle" fill="#ffffff" font-size="20" font-weight="bold">Patient at risk for self-harm</text>
            <line x1="550" y1="180" x2="550" y2="210" stroke="#ffd700" stroke-width="3"/>
            <polygon points="550,215 540,200 560,200" fill="#ffd700"/>
            <rect x="200" y="220" width="700" height="100" fill="#10b981" rx="10"/>
            <text x="550" y="255" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">STEP 1: TRY ALTERNATIVES FIRST</text>
            <text x="550" y="285" text-anchor="middle" fill="#ffffff" font-size="14">Reorient • Family present • Move closer • Distract • Treat cause • 1:1 sitter</text>
            <text x="550" y="310" text-anchor="middle" fill="#ffd700" font-size="14" font-style="italic">Document attempts and effectiveness</text>
            <line x1="550" y1="320" x2="550" y2="350" stroke="#ffd700" stroke-width="3"/>
            <polygon points="550,355 540,340 560,340" fill="#ffd700"/>
            <rect x="200" y="360" width="700" height="80" fill="#f59e0b" rx="10"/>
            <text x="550" y="395" text-anchor="middle" fill="#ffffff" font-size="20" font-weight="bold">STEP 2: STILL AT RISK?</text>
            <text x="550" y="425" text-anchor="middle" fill="#ffffff" font-size="14">Choose the LEAST RESTRICTIVE that works</text>
            <line x1="200" y1="440" x2="200" y2="475" stroke="#ffd700" stroke-width="3"/>
            <line x1="550" y1="440" x2="550" y2="475" stroke="#ffd700" stroke-width="3"/>
            <line x1="900" y1="440" x2="900" y2="475" stroke="#ffd700" stroke-width="3"/>
            <rect x="80" y="480" width="240" height="120" fill="#0ea5e9" rx="10"/>
            <text x="200" y="510" text-anchor="middle" fill="#ffffff" font-size="16" font-weight="bold">MITTENS</text>
            <text x="200" y="535" text-anchor="middle" fill="#ffffff" font-size="13">Least restrictive</text>
            <text x="200" y="555" text-anchor="middle" fill="#ffffff" font-size="13">Prevent grasping</text>
            <text x="200" y="575" text-anchor="middle" fill="#ffffff" font-size="13">Hands stay free</text>
            <text x="200" y="595" text-anchor="middle" fill="#ffd700" font-size="13">First choice</text>
            <rect x="430" y="480" width="240" height="120" fill="#f59e0b" rx="10"/>
            <text x="550" y="510" text-anchor="middle" fill="#ffffff" font-size="16" font-weight="bold">SOFT WRIST</text>
            <text x="550" y="535" text-anchor="middle" fill="#ffffff" font-size="13">Moderate restrictive</text>
            <text x="550" y="555" text-anchor="middle" fill="#ffffff" font-size="13">Limits arm motion</text>
            <text x="550" y="575" text-anchor="middle" fill="#ffffff" font-size="13">Quick-release knot</text>
            <text x="550" y="595" text-anchor="middle" fill="#ffd700" font-size="13">Tie to bed FRAME</text>
            <rect x="780" y="480" width="240" height="120" fill="#ef4444" rx="10"/>
            <text x="900" y="510" text-anchor="middle" fill="#ffffff" font-size="16" font-weight="bold">4-POINT / VEST</text>
            <text x="900" y="535" text-anchor="middle" fill="#ffffff" font-size="13">Most restrictive</text>
            <text x="900" y="555" text-anchor="middle" fill="#ffffff" font-size="13">Violent restraint</text>
            <text x="900" y="575" text-anchor="middle" fill="#ffffff" font-size="13">Q15min monitoring</text>
            <text x="900" y="595" text-anchor="middle" fill="#ffd700" font-size="13">Last resort</text>
            <rect x="60" y="630" width="1000" height="220" fill="#1a1a2e" stroke="#ec4899" stroke-width="3" rx="10"/>
            <text x="560" y="665" text-anchor="middle" fill="#ec4899" font-size="22" font-weight="bold">STEP 3 — ORDER &amp; STEP 4 — MAINTENANCE</text>
            <line x1="80" y1="680" x2="1040" y2="680" stroke="#ec4899"/>
            <text x="100" y="715" fill="#ffd700" font-size="16" font-weight="bold">ORDER MUST INCLUDE:</text>
            <text x="100" y="745" fill="#ffffff" font-size="14">• Type (mittens / wrist / ankle / vest)</text>
            <text x="100" y="770" fill="#ffffff" font-size="14">• Specific reason (pulling at NG, etc.)</text>
            <text x="100" y="795" fill="#ffffff" font-size="14">• Duration (24 hr max non-violent)</text>
            <text x="100" y="820" fill="#ffffff" font-size="14">• Release criteria</text>
            <text x="100" y="845" fill="#ef4444" font-size="14" font-weight="bold">• NEVER a PRN order</text>
            <text x="580" y="715" fill="#ffd700" font-size="16" font-weight="bold">EVERY 2 HOURS:</text>
            <text x="580" y="745" fill="#ffffff" font-size="14">• Check skin, circulation (CSM)</text>
            <text x="580" y="770" fill="#ffffff" font-size="14">• Range of motion</text>
            <text x="580" y="795" fill="#ffffff" font-size="14">• Offer toileting, fluids</text>
            <text x="580" y="820" fill="#ffffff" font-size="14">• Reposition, reassess need</text>
            <text x="580" y="845" fill="#ffffff" font-size="14">• Release ONE LIMB at a time</text>
            <rect x="60" y="870" width="1000" height="190" fill="#1a1a2e" stroke="#ffd700" stroke-width="3" rx="10"/>
            <text x="560" y="905" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">CRITICAL SAFETY RULES — NEVER FORGET</text>
            <text x="100" y="940" fill="#ef4444" font-size="20">•</text>
            <text x="130" y="940" fill="#ffffff" font-size="15">Tie restraint to the BED FRAME, never to the side rail</text>
            <text x="100" y="970" fill="#ef4444" font-size="20">•</text>
            <text x="130" y="970" fill="#ffffff" font-size="15">Use a QUICK-RELEASE (slip) knot — code situations need fast removal</text>
            <text x="100" y="1000" fill="#ef4444" font-size="20">•</text>
            <text x="130" y="1000" fill="#ffffff" font-size="15">2-finger fit — should be snug but allow 2 fingers underneath</text>
            <text x="100" y="1030" fill="#ef4444" font-size="20">•</text>
            <text x="130" y="1030" fill="#ffffff" font-size="15">D/C as soon as criteria are met. Document attempts to release.</text>
            <text x="100" y="1055" fill="#ef4444" font-size="20">•</text>
            <text x="130" y="1055" fill="#ffffff" font-size="15">RESTRAINTS ARE NEVER FOR STAFF CONVENIENCE or as punishment</text>
          </svg>`,
          caption: "Restraint decision flow — alternatives first, least restrictive next, strict order requirements always."
        }
      },
      {
        type: "quiz",
        title: "Quiz: Never Events and CMS",
        content: `The Centers for Medicare and Medicaid Services (**CMS**) identifies events that should never happen in a hospital. Medicare will not reimburse hospitals for the cost of treating these events.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-size="30" font-weight="bold">14 CMS Never Events</text>
            <text x="550" y="90" text-anchor="middle" fill="#888" font-size="16">Hospital-acquired conditions Medicare will NOT pay to treat</text>
            <rect x="60" y="120" width="490" height="60" fill="#ef4444" rx="8"/>
            <text x="305" y="158" text-anchor="middle" fill="#ffffff" font-size="18" font-weight="bold">1. Foreign object retained after surgery</text>
            <rect x="560" y="120" width="490" height="60" fill="#ef4444" rx="8"/>
            <text x="805" y="158" text-anchor="middle" fill="#ffffff" font-size="18" font-weight="bold">2. Air embolism</text>
            <rect x="60" y="190" width="490" height="60" fill="#ef4444" rx="8"/>
            <text x="305" y="228" text-anchor="middle" fill="#ffffff" font-size="18" font-weight="bold">3. Blood incompatibility (wrong blood)</text>
            <rect x="560" y="190" width="490" height="60" fill="#ef4444" rx="8"/>
            <text x="805" y="228" text-anchor="middle" fill="#ffffff" font-size="18" font-weight="bold">4. Stage 3 / 4 pressure injuries</text>
            <rect x="60" y="260" width="490" height="60" fill="#ef4444" rx="8"/>
            <text x="305" y="298" text-anchor="middle" fill="#ffffff" font-size="18" font-weight="bold">5. Falls and trauma (with serious injury)</text>
            <rect x="560" y="260" width="490" height="60" fill="#ef4444" rx="8"/>
            <text x="805" y="298" text-anchor="middle" fill="#ffffff" font-size="18" font-weight="bold">6. Manifestations of poor glycemic control</text>
            <rect x="60" y="330" width="490" height="60" fill="#ef4444" rx="8"/>
            <text x="305" y="368" text-anchor="middle" fill="#ffffff" font-size="18" font-weight="bold">7. Catheter-associated UTI (CAUTI)</text>
            <rect x="560" y="330" width="490" height="60" fill="#ef4444" rx="8"/>
            <text x="805" y="368" text-anchor="middle" fill="#ffffff" font-size="18" font-weight="bold">8. Central line-associated BSI (CLABSI)</text>
            <rect x="60" y="400" width="490" height="60" fill="#ef4444" rx="8"/>
            <text x="305" y="438" text-anchor="middle" fill="#ffffff" font-size="18" font-weight="bold">9. Surgical site infection (specific procedures)</text>
            <rect x="560" y="400" width="490" height="60" fill="#ef4444" rx="8"/>
            <text x="805" y="438" text-anchor="middle" fill="#ffffff" font-size="18" font-weight="bold">10. DVT/PE after total knee/hip replacement</text>
            <rect x="60" y="470" width="490" height="60" fill="#ef4444" rx="8"/>
            <text x="305" y="508" text-anchor="middle" fill="#ffffff" font-size="18" font-weight="bold">11. Iatrogenic pneumothorax w/ central line</text>
            <rect x="560" y="470" width="490" height="60" fill="#ef4444" rx="8"/>
            <text x="805" y="508" text-anchor="middle" fill="#ffffff" font-size="18" font-weight="bold">12. Surgical wrong site / wrong patient / wrong procedure</text>
            <rect x="60" y="540" width="490" height="60" fill="#ef4444" rx="8"/>
            <text x="305" y="578" text-anchor="middle" fill="#ffffff" font-size="18" font-weight="bold">13. Medication errors causing serious harm</text>
            <rect x="560" y="540" width="490" height="60" fill="#ef4444" rx="8"/>
            <text x="805" y="578" text-anchor="middle" fill="#ffffff" font-size="18" font-weight="bold">14. Patient death/disability from misadministration</text>
            <rect x="60" y="630" width="1000" height="170" fill="#1a1a2e" stroke="#ffd700" stroke-width="2" rx="10"/>
            <text x="560" y="665" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">THE UNIVERSAL PROTOCOL (3 STEPS)</text>
            <text x="560" y="695" text-anchor="middle" fill="#888" font-size="14">Joint Commission requirement to prevent wrong-site / wrong-patient surgery</text>
            <line x1="80" y1="710" x2="1040" y2="710" stroke="#ffd700"/>
            <text x="160" y="745" text-anchor="middle" fill="#10b981" font-size="16" font-weight="bold">1. PRE-PROCEDURE</text>
            <text x="160" y="770" text-anchor="middle" fill="#ffffff" font-size="14">VERIFICATION</text>
            <text x="160" y="788" text-anchor="middle" fill="#ffffff" font-size="12">Patient + procedure + site</text>
            <text x="550" y="745" text-anchor="middle" fill="#10b981" font-size="16" font-weight="bold">2. SITE MARKING</text>
            <text x="550" y="770" text-anchor="middle" fill="#ffffff" font-size="14">Surgeon marks the site</text>
            <text x="550" y="788" text-anchor="middle" fill="#ffffff" font-size="12">With patient awake</text>
            <text x="930" y="745" text-anchor="middle" fill="#10b981" font-size="16" font-weight="bold">3. TIME-OUT</text>
            <text x="930" y="770" text-anchor="middle" fill="#ffffff" font-size="14">Immediately before incision</text>
            <text x="930" y="788" text-anchor="middle" fill="#ffffff" font-size="12">Entire team participates</text>
            <rect x="60" y="820" width="1000" height="240" fill="#1a1a2e" stroke="#0ea5e9" stroke-width="2" rx="10"/>
            <text x="560" y="855" text-anchor="middle" fill="#0ea5e9" font-size="20" font-weight="bold">PREVENTION BUNDLES YOU MUST KNOW</text>
            <line x1="80" y1="870" x2="1040" y2="870" stroke="#0ea5e9"/>
            <text x="100" y="905" fill="#ffd700" font-size="15" font-weight="bold">CAUTI:</text>
            <text x="220" y="905" fill="#ffffff" font-size="14">Insert ONLY when needed • Aseptic insertion • Daily necessity review • Remove ASAP</text>
            <text x="100" y="935" fill="#ffd700" font-size="15" font-weight="bold">CLABSI:</text>
            <text x="220" y="935" fill="#ffffff" font-size="14">Hand hygiene • Max barriers • CHG prep • Avoid femoral • Daily line review</text>
            <text x="100" y="965" fill="#ffd700" font-size="15" font-weight="bold">VAP:</text>
            <text x="220" y="965" fill="#ffffff" font-size="14">HOB 30-45° • Sedation vacation • CHG oral care • DVT/PUD prophylaxis</text>
            <text x="100" y="995" fill="#ffd700" font-size="15" font-weight="bold">Pressure inj.:</text>
            <text x="220" y="995" fill="#ffffff" font-size="14">Reposition Q2H • Braden scale • Skin assessment shift • Moisture management</text>
            <text x="100" y="1025" fill="#ffd700" font-size="15" font-weight="bold">Falls:</text>
            <text x="220" y="1025" fill="#ffffff" font-size="14">Morse scale on admission and shift • Bundle for ≥45 • Hourly rounding</text>
            <text x="100" y="1055" fill="#ffd700" font-size="15" font-weight="bold">Med errors:</text>
            <text x="220" y="1055" fill="#ffffff" font-size="14">5 (or 10) Rights • 2 patient identifiers • Read-back • Independent double-check on high-alert</text>
          </svg>`,
          caption: "The 14 CMS Never Events, the Universal Protocol, and the prevention bundles every nurse owns."
        },
        question: "A nurse is caring for a confused post-operative client who has been attempting to pull out his nasogastric tube. The nurse has tried reorientation, family presence, and a sitter at bedside without success. The provider orders soft wrist restraints. Which action by the nurse demonstrates correct restraint application?",
        options: [
          { text: "Tie the restraints to the side rails with a square knot to keep them secure", correct: false },
          { text: "Tie the restraints to the bed frame with a quick-release knot and assess the limbs every 2 hours", correct: true },
          { text: "Apply the restraints tightly enough that no fingers can fit underneath, to prevent the patient from pulling free", correct: false },
          { text: "Document a PRN order so the night nurse can reapply the restraints as needed if the patient becomes agitated again", correct: false }
        ],
        explanation: "Restraints must be tied to a NON-MOVING part of the bed (the bed FRAME), NOT the side rails — if rails are lowered, a side-rail-tied restraint can cause injury or strangulation. A QUICK-RELEASE (slip) knot allows rapid removal in an emergency such as a code or fire. Q2H assessment for non-violent restraints checks circulation, skin integrity, range of motion, and the need to continue. A snug 2-finger fit is correct (not too tight). Restraint orders are NEVER written PRN — every application requires a specific event-based order."
      },
      {
        type: "application",
        title: "Putting It Together — A Safe Shift",
        content: `**Scenario:** You start your shift with 4 patients. Apply everything you've learned about safety.

**Room 1 — Mrs. Lee, 84, admitted with UTI, mild dementia, walks with walker.**
- Morse: hx fall (25) + 2° dx (15) + walker (15) + IV (20) + weak gait (10) + forgets limits (15) = **100**. HIGH RISK.
- Action: Full bundle — yellow socks, bed alarm, hourly rounding, family at bedside, room near station, **no restraints needed yet** (sitter or family preferred).

**Room 2 — Mr. Patel, post-CABG day 2, central line in place.**
- Risk: CLABSI Never Event. CHG bathing, hand hygiene, daily line necessity review, sterile dressing changes.
- Risk: DVT (post-op, immobile). SCDs, early ambulation, anticoagulant per protocol.

**Room 3 — Ms. Chen, ICU on ventilator, sedated.**
- Risk: VAP (Never Event consideration). **HOB 30-45°**, daily sedation vacation, CHG oral care q2h, PUD/DVT prophylaxis.
- Risk: Pressure injury. Reposition Q2H, Braden q shift, specialty mattress.

**Room 4 — Mr. Adams, going to OR for L knee replacement.**
- Risk: Wrong-site surgery. Confirm consent matches, surgeon marks "YES" on LEFT knee, full TIME-OUT before incision.
- Risk: DVT (TKA). Compression devices, anticoagulant, ambulate POD #1.

A safe shift = every patient screened, every bundle applied, every documentation complete. **Safety is never a "later" task.**`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-size="30" font-weight="bold">A Safe Shift — 4 Patients, 4 Risk Profiles</text>
            <text x="550" y="90" text-anchor="middle" fill="#888" font-size="16">Apply Morse, restraint rules, and never-event bundles</text>
            <rect x="40" y="120" width="510" height="450" fill="#1a1a2e" stroke="#ec4899" stroke-width="2" rx="10"/>
            <rect x="40" y="120" width="510" height="50" fill="#ec4899" rx="10"/>
            <text x="295" y="153" text-anchor="middle" fill="#ffffff" font-size="18" font-weight="bold">ROOM 1 — Mrs. Lee, 84</text>
            <text x="60" y="195" fill="#ffd700" font-size="14" font-weight="bold">Background:</text>
            <text x="60" y="218" fill="#ffffff" font-size="13">UTI, mild dementia, walks with walker</text>
            <text x="60" y="248" fill="#ffd700" font-size="14" font-weight="bold">MORSE SCORE:</text>
            <text x="60" y="275" fill="#ffffff" font-size="13">Fall hx (25) + 2° dx (15) + walker (15)</text>
            <text x="60" y="295" fill="#ffffff" font-size="13">+ IV (20) + weak gait (10) + forgets (15)</text>
            <rect x="60" y="305" width="470" height="35" fill="#ef4444" rx="6"/>
            <text x="295" y="328" text-anchor="middle" fill="#ffffff" font-size="16" font-weight="bold">TOTAL = 100 (HIGH RISK)</text>
            <text x="60" y="365" fill="#ffd700" font-size="14" font-weight="bold">INTERVENTIONS:</text>
            <text x="60" y="392" fill="#ffffff" font-size="13">• Yellow socks + armband</text>
            <text x="60" y="415" fill="#ffffff" font-size="13">• Bed alarm + lowest bed position</text>
            <text x="60" y="438" fill="#ffffff" font-size="13">• Hourly rounding (4P's)</text>
            <text x="60" y="461" fill="#ffffff" font-size="13">• Family at bedside / sitter</text>
            <text x="60" y="484" fill="#ffffff" font-size="13">• Toileting schedule q2h</text>
            <text x="60" y="507" fill="#ffffff" font-size="13">• Room near nursing station</text>
            <text x="60" y="530" fill="#ffffff" font-size="13">• Review meds (diuretics, sedatives)</text>
            <text x="60" y="555" fill="#10b981" font-size="13" font-weight="bold">NO restraints — sitter / family first</text>
            <rect x="560" y="120" width="510" height="450" fill="#1a1a2e" stroke="#0ea5e9" stroke-width="2" rx="10"/>
            <rect x="560" y="120" width="510" height="50" fill="#0ea5e9" rx="10"/>
            <text x="815" y="153" text-anchor="middle" fill="#ffffff" font-size="18" font-weight="bold">ROOM 2 — Mr. Patel</text>
            <text x="580" y="195" fill="#ffd700" font-size="14" font-weight="bold">Background:</text>
            <text x="580" y="218" fill="#ffffff" font-size="13">CABG POD 2 with central line</text>
            <text x="580" y="248" fill="#ffd700" font-size="14" font-weight="bold">PRIMARY RISKS:</text>
            <text x="580" y="275" fill="#ef4444" font-size="13">• CLABSI (Never Event)</text>
            <text x="580" y="295" fill="#ef4444" font-size="13">• DVT/PE (Never Event for some)</text>
            <text x="580" y="315" fill="#ef4444" font-size="13">• Pressure injury (post-op immobility)</text>
            <text x="580" y="335" fill="#ef4444" font-size="13">• Pneumonia</text>
            <text x="580" y="365" fill="#ffd700" font-size="14" font-weight="bold">CLABSI BUNDLE:</text>
            <text x="580" y="392" fill="#ffffff" font-size="13">• Hand hygiene every contact</text>
            <text x="580" y="415" fill="#ffffff" font-size="13">• CHG bath daily</text>
            <text x="580" y="438" fill="#ffffff" font-size="13">• Daily line necessity review (D/C ASAP)</text>
            <text x="580" y="461" fill="#ffffff" font-size="13">• Sterile dressing change per protocol</text>
            <text x="580" y="491" fill="#ffd700" font-size="14" font-weight="bold">DVT BUNDLE:</text>
            <text x="580" y="518" fill="#ffffff" font-size="13">• SCDs continuous</text>
            <text x="580" y="541" fill="#ffffff" font-size="13">• Early ambulation</text>
            <text x="580" y="564" fill="#ffffff" font-size="13">• Anticoagulant per protocol</text>
            <rect x="40" y="585" width="510" height="455" fill="#1a1a2e" stroke="#8b5cf6" stroke-width="2" rx="10"/>
            <rect x="40" y="585" width="510" height="50" fill="#8b5cf6" rx="10"/>
            <text x="295" y="618" text-anchor="middle" fill="#ffffff" font-size="18" font-weight="bold">ROOM 3 — Ms. Chen (ICU)</text>
            <text x="60" y="660" fill="#ffd700" font-size="14" font-weight="bold">Background:</text>
            <text x="60" y="683" fill="#ffffff" font-size="13">ICU, ventilated, sedated</text>
            <text x="60" y="713" fill="#ffd700" font-size="14" font-weight="bold">VAP BUNDLE:</text>
            <text x="60" y="740" fill="#ffffff" font-size="13">• HOB 30-45 degrees</text>
            <text x="60" y="763" fill="#ffffff" font-size="13">• Daily sedation vacation (SAT)</text>
            <text x="60" y="786" fill="#ffffff" font-size="13">• Daily spontaneous breathing trial (SBT)</text>
            <text x="60" y="809" fill="#ffffff" font-size="13">• CHG oral care q2-4h</text>
            <text x="60" y="832" fill="#ffffff" font-size="13">• PUD prophylaxis (PPI)</text>
            <text x="60" y="855" fill="#ffffff" font-size="13">• DVT prophylaxis</text>
            <text x="60" y="885" fill="#ffd700" font-size="14" font-weight="bold">PRESSURE INJURY:</text>
            <text x="60" y="912" fill="#ffffff" font-size="13">• Reposition Q2H, document time</text>
            <text x="60" y="935" fill="#ffffff" font-size="13">• Braden scale each shift</text>
            <text x="60" y="958" fill="#ffffff" font-size="13">• Heel offloading, specialty mattress</text>
            <text x="60" y="981" fill="#ffffff" font-size="13">• Moisture management (incontinence)</text>
            <text x="60" y="1015" fill="#ef4444" font-size="13" font-weight="bold">Stage 3/4 = NEVER EVENT</text>
            <rect x="560" y="585" width="510" height="455" fill="#1a1a2e" stroke="#f59e0b" stroke-width="2" rx="10"/>
            <rect x="560" y="585" width="510" height="50" fill="#f59e0b" rx="10"/>
            <text x="815" y="618" text-anchor="middle" fill="#ffffff" font-size="18" font-weight="bold">ROOM 4 — Mr. Adams (Pre-OR)</text>
            <text x="580" y="660" fill="#ffd700" font-size="14" font-weight="bold">Background:</text>
            <text x="580" y="683" fill="#ffffff" font-size="13">Going to OR for L knee replacement</text>
            <text x="580" y="713" fill="#ffd700" font-size="14" font-weight="bold">UNIVERSAL PROTOCOL:</text>
            <text x="580" y="740" fill="#ffffff" font-size="13">1. Pre-op verification:</text>
            <text x="600" y="760" fill="#ffffff" font-size="13">consent + procedure + site</text>
            <text x="580" y="785" fill="#ffffff" font-size="13">2. Surgeon marks the site:</text>
            <text x="600" y="805" fill="#ffffff" font-size="13">"YES" on LEFT knee, awake patient</text>
            <text x="580" y="830" fill="#ffffff" font-size="13">3. TIME-OUT before incision:</text>
            <text x="600" y="850" fill="#ffffff" font-size="13">entire team participates, all stop</text>
            <text x="580" y="885" fill="#ffd700" font-size="14" font-weight="bold">POST-OP DVT BUNDLE:</text>
            <text x="580" y="912" fill="#ffffff" font-size="13">• SCDs immediately post-op</text>
            <text x="580" y="935" fill="#ffffff" font-size="13">• Anticoagulant (heparin/enoxaparin)</text>
            <text x="580" y="958" fill="#ffffff" font-size="13">• Ambulate POD #1</text>
            <text x="580" y="981" fill="#ffffff" font-size="13">• Ankle pumps in bed</text>
            <text x="580" y="1015" fill="#ef4444" font-size="13" font-weight="bold">DVT/PE after TKA = NEVER EVENT</text>
          </svg>`,
          caption: "Four patients, four bundles — Morse fall risk, CLABSI, VAP/pressure injury, and the Universal Protocol all in one shift."
        }
      }
    ]
  },
{
    id: "nclex-fundamentals-lesson-10",
    title: "Documentation and Charting: SOAP, DAR, Narrative, Charting by Exception",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "Why Documentation Wins (or Loses) Cases",
        content: `**If it wasn't charted, it wasn't done.** That single sentence is the foundation of nursing documentation and the legal standard the NCLEX expects you to internalize. Your chart is a **legal document**, a **communication tool** between shifts and disciplines, a **billing record**, and the primary evidence in any malpractice claim — sometimes years after the patient is discharged.

The NCLEX tests four major charting formats: **SOAP** (Subjective, Objective, Assessment, Plan), **DAR/Focus** (Data, Action, Response), **Narrative** (free-text chronological story), and **Charting by Exception** (CBE — only deviations from the established norm). Each has a sweet spot.

Beyond format, the exam tests the **non-negotiable legal rules**: never erase, never use Wite-Out, sign every entry, use **late entry** notation with the original date/time, and never document something before you actually do it. Miss any of these and the chart becomes evidence *against* the nurse.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="60" font-family="Arial" font-size="34" font-weight="bold" fill="#ffd700" text-anchor="middle">The Chart Is a Legal Document</text>
            <text x="550" y="100" font-family="Arial" font-size="20" fill="#ffffff" text-anchor="middle">"If it wasn't charted, it wasn't done."</text>
            <rect x="60" y="140" width="980" height="100" fill="#6366f1" rx="10"/>
            <text x="550" y="180" font-family="Arial" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">FOUR PURPOSES OF THE CHART</text>
            <text x="550" y="215" font-family="Arial" font-size="18" fill="#ffffff" text-anchor="middle">1. Legal record  2. Interdisciplinary communication  3. Billing  4. Quality/research data</text>
            <rect x="60" y="270" width="470" height="370" fill="#10b981" rx="10"/>
            <text x="295" y="305" font-family="Arial" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">DO</text>
            <text x="80" y="340" font-family="Arial" font-size="17" fill="#ffffff">- Chart immediately after care</text>
            <text x="80" y="370" font-family="Arial" font-size="17" fill="#ffffff">- Use objective, measurable language</text>
            <text x="80" y="400" font-family="Arial" font-size="17" fill="#ffffff">- Sign every entry (name + credentials)</text>
            <text x="80" y="430" font-family="Arial" font-size="17" fill="#ffffff">- Use approved abbreviations only</text>
            <text x="80" y="460" font-family="Arial" font-size="17" fill="#ffffff">- Single line through errors + initial</text>
            <text x="80" y="490" font-family="Arial" font-size="17" fill="#ffffff">- Mark "late entry" with original time</text>
            <text x="80" y="520" font-family="Arial" font-size="17" fill="#ffffff">- Quote patient ("I have chest pain")</text>
            <text x="80" y="550" font-family="Arial" font-size="17" fill="#ffffff">- Document refusals + teaching given</text>
            <text x="80" y="580" font-family="Arial" font-size="17" fill="#ffffff">- Chart in chronological order</text>
            <text x="80" y="610" font-family="Arial" font-size="17" fill="#ffffff">- Note who was notified + response</text>
            <rect x="570" y="270" width="470" height="370" fill="#ef4444" rx="10"/>
            <text x="805" y="305" font-family="Arial" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">DO NOT</text>
            <text x="590" y="340" font-family="Arial" font-size="17" fill="#ffffff">- Erase, scribble out, or use Wite-Out</text>
            <text x="590" y="370" font-family="Arial" font-size="17" fill="#ffffff">- Chart before care is performed</text>
            <text x="590" y="400" font-family="Arial" font-size="17" fill="#ffffff">- Document for another nurse</text>
            <text x="590" y="430" font-family="Arial" font-size="17" fill="#ffffff">- Leave blank lines or spaces</text>
            <text x="590" y="460" font-family="Arial" font-size="17" fill="#ffffff">- Use vague terms ("appears OK")</text>
            <text x="590" y="490" font-family="Arial" font-size="17" fill="#ffffff">- Make personal judgments ("rude")</text>
            <text x="590" y="520" font-family="Arial" font-size="17" fill="#ffffff">- Use non-approved abbreviations</text>
            <text x="590" y="550" font-family="Arial" font-size="17" fill="#ffffff">- Chart in pencil</text>
            <text x="590" y="580" font-family="Arial" font-size="17" fill="#ffffff">- Share login credentials</text>
            <text x="590" y="610" font-family="Arial" font-size="17" fill="#ffffff">- Alter entries after the fact</text>
            <rect x="60" y="670" width="980" height="380" fill="#ffd700" rx="10"/>
            <text x="550" y="710" font-family="Arial" font-size="24" font-weight="bold" fill="#1a1a2e" text-anchor="middle">THE FOUR FORMATS AT A GLANCE</text>
            <line x1="60" y1="730" x2="1040" y2="730" stroke="#1a1a2e" stroke-width="2"/>
            <text x="80" y="770" font-family="Arial" font-size="20" font-weight="bold" fill="#1a1a2e">SOAP:</text>
            <text x="180" y="770" font-family="Arial" font-size="18" fill="#1a1a2e">Subjective - Objective - Assessment - Plan (problem-oriented, MDs love it)</text>
            <text x="80" y="830" font-family="Arial" font-size="20" font-weight="bold" fill="#1a1a2e">DAR:</text>
            <text x="180" y="830" font-family="Arial" font-size="18" fill="#1a1a2e">Data - Action - Response (Focus charting; quick + outcome-driven)</text>
            <text x="80" y="890" font-family="Arial" font-size="20" font-weight="bold" fill="#1a1a2e">NARRATIVE:</text>
            <text x="260" y="890" font-family="Arial" font-size="18" fill="#1a1a2e">Free-text chronological story (rich detail, but slow + redundant)</text>
            <text x="80" y="950" font-family="Arial" font-size="20" font-weight="bold" fill="#1a1a2e">CBE:</text>
            <text x="180" y="950" font-family="Arial" font-size="18" fill="#1a1a2e">Chart only EXCEPTIONS to the established norm (fastest, risky if norms unclear)</text>
            <text x="550" y="1010" font-family="Arial" font-size="18" font-style="italic" fill="#1a1a2e" text-anchor="middle">No matter the format: objective, timely, signed, and legally defensible.</text>
          </svg>`,
          caption: "The chart is evidence. Every entry must be timely, objective, signed, and never altered with Wite-Out or erasure."
        }
      },
      {
        type: "concept",
        title: "The Four Formats — Side-by-Side",
        content: `**SOAP** is the classic problem-oriented format. **S**ubjective = what the patient says ("My pain is 8/10"). **O**bjective = what you measure (BP 168/94, grimacing, guarding RLQ). **A**ssessment = your nursing judgment ("Acute pain related to surgical incision"). **P**lan = the intervention ("Administer morphine 2 mg IV per order; reassess in 30 min"). Best for: complex problems, MD-collaborative settings.

**DAR (Focus charting)** trims SOAP into three columns. **D**ata combines subjective + objective. **A**ction = what you did. **R**esponse = how the patient reacted. Best for: busy med-surg units, single-issue notes.

**Narrative** is the oldest format — a paragraph telling the patient's story chronologically. Strength: nuance and storytelling. Weakness: slow, repetitive, easy to bury key data.

**Charting by Exception (CBE)** assumes everything is **WNL** (within normal limits) unless documented otherwise. You only chart deviations. Fastest format, but if "normal" isn't crystal-clear in policy, abnormal findings can be missed — a legal landmine.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="55" font-family="Arial" font-size="32" font-weight="bold" fill="#ffd700" text-anchor="middle">Four Charting Formats: Same Patient</text>
            <text x="550" y="90" font-family="Arial" font-size="18" fill="#888" text-anchor="middle">Mrs. Lee, post-op day 1, complains of incisional pain</text>
            <rect x="40" y="120" width="510" height="450" fill="#6366f1" rx="10"/>
            <text x="295" y="155" font-family="Arial" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">SOAP</text>
            <line x1="60" y1="170" x2="530" y2="170" stroke="#ffd700" stroke-width="2"/>
            <text x="55" y="200" font-family="Arial" font-size="16" font-weight="bold" fill="#ffd700">S (Subjective):</text>
            <text x="55" y="225" font-family="Arial" font-size="15" fill="#ffffff">"My belly hurts a lot, like an 8/10."</text>
            <text x="55" y="265" font-family="Arial" font-size="16" font-weight="bold" fill="#ffd700">O (Objective):</text>
            <text x="55" y="290" font-family="Arial" font-size="15" fill="#ffffff">BP 168/94, HR 112, grimacing,</text>
            <text x="55" y="312" font-family="Arial" font-size="15" fill="#ffffff">guarding RLQ. Incision dry/intact.</text>
            <text x="55" y="352" font-family="Arial" font-size="16" font-weight="bold" fill="#ffd700">A (Assessment):</text>
            <text x="55" y="377" font-family="Arial" font-size="15" fill="#ffffff">Acute pain r/t surgical incision.</text>
            <text x="55" y="417" font-family="Arial" font-size="16" font-weight="bold" fill="#ffd700">P (Plan):</text>
            <text x="55" y="442" font-family="Arial" font-size="15" fill="#ffffff">Morphine 2 mg IV per order.</text>
            <text x="55" y="464" font-family="Arial" font-size="15" fill="#ffffff">Reassess pain + VS in 30 min.</text>
            <text x="55" y="486" font-family="Arial" font-size="15" fill="#ffffff">Reposition; teach splinting.</text>
            <text x="55" y="540" font-family="Arial" font-size="14" font-style="italic" fill="#ffd700">Best: complex/multi-problem patients</text>
            <rect x="560" y="120" width="510" height="450" fill="#10b981" rx="10"/>
            <text x="815" y="155" font-family="Arial" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">DAR (Focus)</text>
            <line x1="580" y1="170" x2="1050" y2="170" stroke="#ffd700" stroke-width="2"/>
            <text x="575" y="200" font-family="Arial" font-size="16" font-weight="bold" fill="#ffd700">Focus:</text>
            <text x="575" y="222" font-family="Arial" font-size="15" fill="#ffffff">Acute incisional pain</text>
            <text x="575" y="262" font-family="Arial" font-size="16" font-weight="bold" fill="#ffd700">D (Data):</text>
            <text x="575" y="287" font-family="Arial" font-size="15" fill="#ffffff">Pt reports 8/10 abd pain.</text>
            <text x="575" y="309" font-family="Arial" font-size="15" fill="#ffffff">BP 168/94, HR 112, grimacing.</text>
            <text x="575" y="349" font-family="Arial" font-size="16" font-weight="bold" fill="#ffd700">A (Action):</text>
            <text x="575" y="374" font-family="Arial" font-size="15" fill="#ffffff">Morphine 2 mg IV given 0830.</text>
            <text x="575" y="396" font-family="Arial" font-size="15" fill="#ffffff">Repositioned L side. Splinting</text>
            <text x="575" y="418" font-family="Arial" font-size="15" fill="#ffffff">technique taught.</text>
            <text x="575" y="458" font-family="Arial" font-size="16" font-weight="bold" fill="#ffd700">R (Response):</text>
            <text x="575" y="483" font-family="Arial" font-size="15" fill="#ffffff">0900: pain 3/10, BP 138/82,</text>
            <text x="575" y="505" font-family="Arial" font-size="15" fill="#ffffff">resting comfortably.</text>
            <text x="575" y="540" font-family="Arial" font-size="14" font-style="italic" fill="#ffd700">Best: single focus, fast turnaround</text>
            <rect x="40" y="590" width="510" height="450" fill="#f59e0b" rx="10"/>
            <text x="295" y="625" font-family="Arial" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">NARRATIVE</text>
            <line x1="60" y1="640" x2="530" y2="640" stroke="#ffffff" stroke-width="2"/>
            <text x="55" y="670" font-family="Arial" font-size="15" fill="#ffffff">0830: Pt c/o sharp abdominal</text>
            <text x="55" y="692" font-family="Arial" font-size="15" fill="#ffffff">pain rated 8/10, located in RLQ</text>
            <text x="55" y="714" font-family="Arial" font-size="15" fill="#ffffff">near surgical incision. Observed</text>
            <text x="55" y="736" font-family="Arial" font-size="15" fill="#ffffff">grimacing, guarding. BP 168/94,</text>
            <text x="55" y="758" font-family="Arial" font-size="15" fill="#ffffff">HR 112, RR 22, SpO2 97% RA.</text>
            <text x="55" y="780" font-family="Arial" font-size="15" fill="#ffffff">Incision dry/intact, no drainage.</text>
            <text x="55" y="802" font-family="Arial" font-size="15" fill="#ffffff">Morphine 2 mg IV administered.</text>
            <text x="55" y="824" font-family="Arial" font-size="15" fill="#ffffff">Pt repositioned to L side, taught</text>
            <text x="55" y="846" font-family="Arial" font-size="15" fill="#ffffff">to splint incision when coughing.</text>
            <text x="55" y="876" font-family="Arial" font-size="15" fill="#ffffff">0900: Pain re-rated 3/10, VS:</text>
            <text x="55" y="898" font-family="Arial" font-size="15" fill="#ffffff">BP 138/82, HR 88. Resting. ---J.S., RN</text>
            <text x="55" y="990" font-family="Arial" font-size="14" font-style="italic" fill="#ffffff">Best: rich story, complex events</text>
            <text x="55" y="1014" font-family="Arial" font-size="14" font-style="italic" fill="#ffffff">Risk: slow, key data buried</text>
            <rect x="560" y="590" width="510" height="450" fill="#ec4899" rx="10"/>
            <text x="815" y="625" font-family="Arial" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">CHARTING BY EXCEPTION</text>
            <line x1="580" y1="640" x2="1050" y2="640" stroke="#ffffff" stroke-width="2"/>
            <text x="575" y="675" font-family="Arial" font-size="15" font-weight="bold" fill="#ffd700">Assumption: All WNL per protocol</text>
            <text x="815" y="715" font-family="Arial" font-size="40" fill="#10b981" text-anchor="middle">[checkmark]</text>
            <text x="575" y="755" font-family="Arial" font-size="15" fill="#ffffff">Only EXCEPTIONS charted:</text>
            <text x="575" y="785" font-family="Arial" font-size="15" fill="#ffffff">0830: PAIN - exception flagged.</text>
            <text x="575" y="807" font-family="Arial" font-size="15" fill="#ffffff">Pt 8/10 RLQ. Morphine 2 mg IV.</text>
            <text x="575" y="847" font-family="Arial" font-size="15" fill="#ffffff">0900: Pain 3/10 - resolved.</text>
            <text x="575" y="887" font-family="Arial" font-size="15" fill="#ffffff">All other systems WNL per</text>
            <text x="575" y="909" font-family="Arial" font-size="15" fill="#ffffff">unit protocol parameters.</text>
            <text x="575" y="975" font-family="Arial" font-size="14" font-style="italic" fill="#ffd700">Best: stable patients, fast</text>
            <text x="575" y="999" font-family="Arial" font-size="14" font-style="italic" fill="#ffd700">Risk: "normal" must be defined</text>
            <text x="575" y="1023" font-family="Arial" font-size="14" font-style="italic" fill="#ffd700">in writing - legal exposure</text>
          </svg>`,
          caption: "Same patient, four formats. SOAP is thorough, DAR is fast, narrative is rich, CBE is fastest but legally riskiest."
        }
      },
      {
        type: "example",
        title: "Late Entry, Error Correction, and the Legal Rules in Action",
        content: `**Scenario:** It's 1430. You realize you forgot to chart a pain medication you administered at 0930. You also notice a peer charted "BP 130/80" but the strip clearly shows 130/180 — a typo in someone else's note.

**The late entry rule:** You write a new entry **at the current time** but label it clearly. Example: *"1430 — Late entry for 0930: Morphine 4 mg IV administered for pain rated 7/10. Pt tolerated well, pain 2/10 at 1000. — J. Smith, RN."* You **never** squeeze the entry between earlier notes, change the time stamp, or pretend it happened at 0930.

**Error correction rule:** You **never** correct another nurse's entry. You alert the original charter and let them fix it with a single line through the error, their initials, the date, and "error" written above. **No Wite-Out, no scribbling, no erasing.**

**Refusal documentation:** If a patient refuses a med, chart it: *"Pt refused 0900 lisinopril. Stated 'I don't feel like taking it.' Educated re: BP control; pt verbalized understanding. MD Dr. Patel notified at 0915."*`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="55" font-family="Arial" font-size="30" font-weight="bold" fill="#ffd700" text-anchor="middle">Documentation in Action: The Legal Rules</text>
            <rect x="50" y="100" width="1000" height="280" fill="#ffffff" rx="10" stroke="#ffd700" stroke-width="3"/>
            <text x="550" y="135" font-family="Arial" font-size="22" font-weight="bold" fill="#1a1a2e" text-anchor="middle">SCENARIO 1: Late Entry (forgot to chart 0930 pain med, now 1430)</text>
            <line x1="80" y1="155" x2="1020" y2="155" stroke="#1a1a2e" stroke-width="1"/>
            <text x="80" y="190" font-family="Arial" font-size="18" font-weight="bold" fill="#ef4444">WRONG:</text>
            <text x="80" y="215" font-family="Arial" font-size="16" fill="#1a1a2e">Squeeze between earlier notes / backdate to 0930 / use a pencil to insert.</text>
            <text x="80" y="260" font-family="Arial" font-size="18" font-weight="bold" fill="#10b981">RIGHT:</text>
            <rect x="80" y="275" width="940" height="80" fill="#0ea5e9" rx="5"/>
            <text x="100" y="305" font-family="Courier" font-size="16" fill="#ffffff">1430 - LATE ENTRY for 0930:</text>
            <text x="100" y="328" font-family="Courier" font-size="16" fill="#ffffff">Morphine 4 mg IV administered for pain 7/10. Tolerated well.</text>
            <text x="100" y="350" font-family="Courier" font-size="16" fill="#ffffff">Reassessment 1000: pain 2/10. ----- J. Smith, RN</text>
            <rect x="50" y="395" width="1000" height="280" fill="#ffffff" rx="10" stroke="#ffd700" stroke-width="3"/>
            <text x="550" y="430" font-family="Arial" font-size="22" font-weight="bold" fill="#1a1a2e" text-anchor="middle">SCENARIO 2: Correcting Your Own Error</text>
            <line x1="80" y1="450" x2="1020" y2="450" stroke="#1a1a2e" stroke-width="1"/>
            <text x="80" y="485" font-family="Arial" font-size="18" font-weight="bold" fill="#ef4444">WRONG:</text>
            <text x="80" y="510" font-family="Arial" font-size="16" fill="#1a1a2e">Wite-Out / scribble out / erase / tear out page / delete electronic note</text>
            <text x="80" y="555" font-family="Arial" font-size="18" font-weight="bold" fill="#10b981">RIGHT:</text>
            <rect x="80" y="570" width="940" height="80" fill="#0ea5e9" rx="5"/>
            <text x="100" y="600" font-family="Courier" font-size="16" fill="#ffffff">BP 130/80 -- error JS 6/18 -- correct: BP 130/180</text>
            <text x="100" y="623" font-family="Courier" font-size="16" fill="#ffffff">Single line through error. Initial, date, write "error" above.</text>
            <text x="100" y="645" font-family="Courier" font-size="16" fill="#ffffff">Original entry remains LEGIBLE.</text>
            <rect x="50" y="690" width="1000" height="370" fill="#ffffff" rx="10" stroke="#ffd700" stroke-width="3"/>
            <text x="550" y="725" font-family="Arial" font-size="22" font-weight="bold" fill="#1a1a2e" text-anchor="middle">SCENARIO 3: Patient Refuses Medication</text>
            <line x1="80" y1="745" x2="1020" y2="745" stroke="#1a1a2e" stroke-width="1"/>
            <text x="80" y="780" font-family="Arial" font-size="18" font-weight="bold" fill="#ef4444">WRONG:</text>
            <text x="80" y="805" font-family="Arial" font-size="16" fill="#1a1a2e">Chart "med refused" with no further detail. No MD notification. No teaching.</text>
            <text x="80" y="850" font-family="Arial" font-size="18" font-weight="bold" fill="#10b981">RIGHT (5 elements):</text>
            <rect x="80" y="865" width="940" height="180" fill="#0ea5e9" rx="5"/>
            <text x="100" y="895" font-family="Courier" font-size="15" fill="#ffffff">0900 - Pt refused lisinopril 10 mg PO.</text>
            <text x="100" y="918" font-family="Courier" font-size="15" fill="#ffffff">1. Pt's words: "I don't feel like taking it today."</text>
            <text x="100" y="940" font-family="Courier" font-size="15" fill="#ffffff">2. Teaching: Educated re: BP control + stroke risk.</text>
            <text x="100" y="962" font-family="Courier" font-size="15" fill="#ffffff">3. Understanding: Pt verbalized understanding of risks.</text>
            <text x="100" y="984" font-family="Courier" font-size="15" fill="#ffffff">4. MD notified: Dr. Patel notified at 0915, no new orders.</text>
            <text x="100" y="1006" font-family="Courier" font-size="15" fill="#ffffff">5. Signature: ----- J. Smith, RN</text>
          </svg>`,
          caption: "Late entries: label clearly. Errors: single line, initial, no Wite-Out. Refusals: words, teaching, understanding, MD, signature."
        }
      },
      {
        type: "quiz",
        title: "NCLEX-Style Question: Documentation",
        content: `**Question:** A nurse realizes at the end of shift that she forgot to document a dressing change she performed 4 hours earlier. Which action is **most appropriate**?

The NCLEX is testing whether you understand that **omitted entries are added as late entries** — never backdated, never squeezed in, never falsified. The chart is a legal document; altering its appearance to hide an omission is **fraud**, even if the care was actually performed correctly. The right move is transparency: write a new entry now, label it "late entry," reference the original time, and sign it.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="55" font-family="Arial" font-size="28" font-weight="bold" fill="#ffd700" text-anchor="middle">NCLEX Practice: Late Entry</text>
            <rect x="50" y="90" width="1000" height="120" fill="#6366f1" rx="10"/>
            <text x="70" y="125" font-family="Arial" font-size="18" fill="#ffffff">A nurse realizes at 1900, end of shift, that a dressing change</text>
            <text x="70" y="150" font-family="Arial" font-size="18" fill="#ffffff">she performed at 1500 was never documented. Which action</text>
            <text x="70" y="175" font-family="Arial" font-size="18" fill="#ffffff">is MOST appropriate?</text>
            <rect x="50" y="240" width="1000" height="110" fill="#ef4444" rx="10"/>
            <text x="70" y="275" font-family="Arial" font-size="18" font-weight="bold" fill="#ffffff">A. Insert the entry between the 1430 and 1530 notes,</text>
            <text x="70" y="300" font-family="Arial" font-size="18" fill="#ffffff">     timing it as 1500 to preserve chronology.</text>
            <text x="70" y="330" font-family="Arial" font-size="16" font-style="italic" fill="#ffd700">[WRONG] Backdating = falsification. Never alter time stamps after the fact.</text>
            <rect x="50" y="370" width="1000" height="110" fill="#10b981" rx="10"/>
            <text x="70" y="405" font-family="Arial" font-size="18" font-weight="bold" fill="#ffffff">B. Document now at 1900: "Late entry for 1500: dressing</text>
            <text x="70" y="430" font-family="Arial" font-size="18" fill="#ffffff">     change performed as ordered..." with signature.</text>
            <text x="70" y="460" font-family="Arial" font-size="16" font-style="italic" fill="#ffd700">[CORRECT] Transparent, dated to current time, references original time, signed.</text>
            <rect x="50" y="500" width="1000" height="110" fill="#ef4444" rx="10"/>
            <text x="70" y="535" font-family="Arial" font-size="18" font-weight="bold" fill="#ffffff">C. Skip the documentation - the care was completed and</text>
            <text x="70" y="560" font-family="Arial" font-size="18" fill="#ffffff">     no harm was done.</text>
            <text x="70" y="590" font-family="Arial" font-size="16" font-style="italic" fill="#ffd700">[WRONG] "If it wasn't charted, it wasn't done." Skipping = legal liability.</text>
            <rect x="50" y="630" width="1000" height="110" fill="#ef4444" rx="10"/>
            <text x="70" y="665" font-family="Arial" font-size="18" font-weight="bold" fill="#ffffff">D. Ask the oncoming nurse to chart it during their shift.</text>
            <text x="70" y="700" font-family="Arial" font-size="16" font-style="italic" fill="#ffd700">[WRONG] Never document for, or have someone document for, care you provided.</text>
            <rect x="50" y="770" width="1000" height="290" fill="#ffd700" rx="10"/>
            <text x="550" y="810" font-family="Arial" font-size="24" font-weight="bold" fill="#1a1a2e" text-anchor="middle">EXPLANATION</text>
            <line x1="450" y1="822" x2="650" y2="822" stroke="#1a1a2e" stroke-width="2"/>
            <text x="70" y="860" font-family="Arial" font-size="17" fill="#1a1a2e">Answer B is correct. The standard late-entry rule has three parts:</text>
            <text x="70" y="895" font-family="Arial" font-size="17" fill="#1a1a2e">1. Chart at the CURRENT time (1900), never backdate.</text>
            <text x="70" y="925" font-family="Arial" font-size="17" fill="#1a1a2e">2. Label clearly: "Late entry for [original time]."</text>
            <text x="70" y="955" font-family="Arial" font-size="17" fill="#1a1a2e">3. Sign and credential.</text>
            <text x="70" y="1000" font-family="Arial" font-size="17" font-weight="bold" fill="#1a1a2e">A is fraud. C is negligence. D violates the rule that you only chart your</text>
            <text x="70" y="1025" font-family="Arial" font-size="17" font-weight="bold" fill="#1a1a2e">own care. Transparency protects the nurse AND the patient.</text>
          </svg>`,
          caption: "Late entries: current time, labeled, signed. Never backdate, skip, or delegate documentation of your own care."
        }
      },
      {
        type: "application",
        title: "Bedside Application: The 5-Second Charting Check",
        content: `Before you click **"Sign and Submit"** (or set down your pen), run this 5-second check. It catches 90% of charting errors before they become legal problems.

**1. Time:** Is the time accurate? Current time, not the time you wished you'd charted.
**2. Tense:** Past tense for what happened ("administered," "assessed"). Never future or speculative ("will give").
**3. Objective:** Did I use measurable language? "BP 168/94" — not "BP was high." "Patient ambulated 50 feet" — not "ambulated well."
**4. Yours:** Am I charting only **my own** care? Not what the CNA said. If you didn't see it, you can't chart it as fact.
**5. Signed:** Full name + credentials at the end of the entry.

**At handoff,** use **SBAR** (Situation, Background, Assessment, Recommendation) for verbal report — but never let SBAR replace written documentation. The chart is the permanent record; the handoff is the conversation. When in doubt, **chart it.** The exam loves the answer that includes documentation, MD notification, and patient teaching together.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="55" font-family="Arial" font-size="30" font-weight="bold" fill="#ffd700" text-anchor="middle">The 5-Second Charting Check</text>
            <text x="550" y="90" font-family="Arial" font-size="18" fill="#888" text-anchor="middle">Run this before every signature</text>
            <circle cx="180" cy="220" r="70" fill="#6366f1"/>
            <text x="180" y="215" font-family="Arial" font-size="40" font-weight="bold" fill="#ffd700" text-anchor="middle">1</text>
            <text x="180" y="245" font-family="Arial" font-size="18" fill="#ffffff" text-anchor="middle">TIME</text>
            <text x="280" y="200" font-family="Arial" font-size="18" font-weight="bold" fill="#ffffff">Is the time accurate?</text>
            <text x="280" y="225" font-family="Arial" font-size="16" fill="#ffffff">Current time, not retro. If late, label "Late entry"</text>
            <text x="280" y="248" font-family="Arial" font-size="16" fill="#ffffff">and reference the original time.</text>
            <circle cx="180" cy="380" r="70" fill="#10b981"/>
            <text x="180" y="375" font-family="Arial" font-size="40" font-weight="bold" fill="#ffd700" text-anchor="middle">2</text>
            <text x="180" y="405" font-family="Arial" font-size="18" fill="#ffffff" text-anchor="middle">TENSE</text>
            <text x="280" y="360" font-family="Arial" font-size="18" font-weight="bold" fill="#ffffff">Past tense only.</text>
            <text x="280" y="385" font-family="Arial" font-size="16" fill="#ffffff">"Administered," "assessed," "ambulated."</text>
            <text x="280" y="408" font-family="Arial" font-size="16" fill="#ef4444">NEVER: "will give" / "is going to..."</text>
            <circle cx="180" cy="540" r="70" fill="#f59e0b"/>
            <text x="180" y="535" font-family="Arial" font-size="40" font-weight="bold" fill="#ffd700" text-anchor="middle">3</text>
            <text x="180" y="565" font-family="Arial" font-size="18" fill="#ffffff" text-anchor="middle">OBJECTIVE</text>
            <text x="280" y="520" font-family="Arial" font-size="18" font-weight="bold" fill="#ffffff">Measurable, specific language.</text>
            <text x="280" y="545" font-family="Arial" font-size="16" fill="#10b981">"BP 168/94"  "Ambulated 50 feet"</text>
            <text x="280" y="568" font-family="Arial" font-size="16" fill="#ef4444">"BP was high"  "Did well"  "Appeared OK"</text>
            <circle cx="180" cy="700" r="70" fill="#8b5cf6"/>
            <text x="180" y="695" font-family="Arial" font-size="40" font-weight="bold" fill="#ffd700" text-anchor="middle">4</text>
            <text x="180" y="725" font-family="Arial" font-size="18" fill="#ffffff" text-anchor="middle">YOURS</text>
            <text x="280" y="680" font-family="Arial" font-size="18" font-weight="bold" fill="#ffffff">Only YOUR care. Only what you witnessed.</text>
            <text x="280" y="705" font-family="Arial" font-size="16" fill="#ffffff">If the CNA reported it, quote them:</text>
            <text x="280" y="728" font-family="Arial" font-size="16" fill="#ffffff">"CNA reports pt voided 300 mL at 0815."</text>
            <circle cx="180" cy="860" r="70" fill="#ec4899"/>
            <text x="180" y="855" font-family="Arial" font-size="40" font-weight="bold" fill="#ffd700" text-anchor="middle">5</text>
            <text x="180" y="885" font-family="Arial" font-size="18" fill="#ffffff" text-anchor="middle">SIGNED</text>
            <text x="280" y="840" font-family="Arial" font-size="18" font-weight="bold" fill="#ffffff">Full name + credentials.</text>
            <text x="280" y="865" font-family="Arial" font-size="16" fill="#ffffff">"J. Smith, RN" or "M. Garcia, BSN, RN"</text>
            <text x="280" y="888" font-family="Arial" font-size="16" fill="#ef4444">Initials alone = not legally sufficient.</text>
            <rect x="50" y="950" width="1000" height="120" fill="#ffd700" rx="10"/>
            <text x="550" y="985" font-family="Arial" font-size="20" font-weight="bold" fill="#1a1a2e" text-anchor="middle">HANDOFF = SBAR (verbal). CHART = permanent record (written).</text>
            <text x="550" y="1015" font-family="Arial" font-size="17" fill="#1a1a2e" text-anchor="middle">SBAR: Situation -- Background -- Assessment -- Recommendation</text>
            <text x="550" y="1045" font-family="Arial" font-size="17" font-style="italic" fill="#1a1a2e" text-anchor="middle">When in doubt: chart it. NCLEX loves "document + notify MD + educate patient."</text>
          </svg>`,
          caption: "Time, tense, objective, yours, signed. Five seconds before every signature prevents most documentation errors."
        }
      }
    ]
  },
  {
    id: "nclex-fundamentals-lesson-11",
    title: "Cultural Competence and Ethical Principles",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "Ethics + Culture: The Twin Pillars of Nursing Judgment",
        content: `Two questions on every NCLEX exam quietly test the same thing: *Can you honor the patient's values even when they conflict with your own — and can you name the ethical principle at stake?*

The five core principles are **autonomy** (the patient's right to choose), **beneficence** (do good), **nonmaleficence** (do no harm), **justice** (fair treatment for all), and **fidelity** (keep your promises). When these collide — for example, a Jehovah's Witness refusing a life-saving transfusion — **autonomy almost always wins** for a competent adult.

Cultural competence layers on top: knowing that a Muslim patient may decline pork-derived insulin, that a Hispanic family may want the eldest son to receive bad news first, that Orthodox Jewish patients may need a same-sex provider, that direct eye contact is disrespectful in some Asian and Indigenous cultures. The exam doesn't expect you to memorize every culture — it expects you to **ask, not assume**, and to advocate for the patient's stated preferences.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="55" font-family="Arial" font-size="30" font-weight="bold" fill="#ffd700" text-anchor="middle">Two Pillars: Ethics + Cultural Competence</text>
            <rect x="50" y="100" width="490" height="450" fill="#6366f1" rx="10"/>
            <text x="295" y="140" font-family="Arial" font-size="24" font-weight="bold" fill="#ffd700" text-anchor="middle">THE 5 ETHICAL PRINCIPLES</text>
            <line x1="80" y1="155" x2="510" y2="155" stroke="#ffd700" stroke-width="2"/>
            <text x="70" y="195" font-family="Arial" font-size="20" font-weight="bold" fill="#ffffff">AUTONOMY</text>
            <text x="70" y="220" font-family="Arial" font-size="15" fill="#ffffff">Patient's right to self-determination,</text>
            <text x="70" y="240" font-family="Arial" font-size="15" fill="#ffffff">to accept or refuse treatment.</text>
            <text x="70" y="280" font-family="Arial" font-size="20" font-weight="bold" fill="#ffffff">BENEFICENCE</text>
            <text x="70" y="305" font-family="Arial" font-size="15" fill="#ffffff">Acting in the patient's best interest.</text>
            <text x="70" y="325" font-family="Arial" font-size="15" fill="#ffffff">"Do good."</text>
            <text x="70" y="365" font-family="Arial" font-size="20" font-weight="bold" fill="#ffffff">NONMALEFICENCE</text>
            <text x="70" y="390" font-family="Arial" font-size="15" fill="#ffffff">"Do no harm." Avoid causing</text>
            <text x="70" y="410" font-family="Arial" font-size="15" fill="#ffffff">injury through action or omission.</text>
            <text x="70" y="450" font-family="Arial" font-size="20" font-weight="bold" fill="#ffffff">JUSTICE</text>
            <text x="70" y="475" font-family="Arial" font-size="15" fill="#ffffff">Fair, equitable distribution of</text>
            <text x="70" y="495" font-family="Arial" font-size="15" fill="#ffffff">care and resources.</text>
            <text x="70" y="525" font-family="Arial" font-size="20" font-weight="bold" fill="#ffffff">FIDELITY</text>
            <text x="70" y="544" font-family="Arial" font-size="15" fill="#ffffff">Keep promises, advocate, be loyal.</text>
            <rect x="560" y="100" width="490" height="450" fill="#10b981" rx="10"/>
            <text x="805" y="140" font-family="Arial" font-size="24" font-weight="bold" fill="#ffd700" text-anchor="middle">CULTURAL COMPETENCE</text>
            <line x1="590" y1="155" x2="1020" y2="155" stroke="#ffd700" stroke-width="2"/>
            <text x="580" y="195" font-family="Arial" font-size="18" font-weight="bold" fill="#ffffff">The 3 Rules of Culturally Safe Care:</text>
            <text x="600" y="230" font-family="Arial" font-size="17" fill="#ffffff">1. ASK, don't assume.</text>
            <text x="620" y="252" font-family="Arial" font-size="14" fill="#ffd700">"What's important to you about your care?"</text>
            <text x="600" y="290" font-family="Arial" font-size="17" fill="#ffffff">2. HONOR the patient's stated values,</text>
            <text x="620" y="310" font-family="Arial" font-size="17" fill="#ffffff">    not your own assumptions about</text>
            <text x="620" y="330" font-family="Arial" font-size="17" fill="#ffffff">    their group.</text>
            <text x="600" y="370" font-family="Arial" font-size="17" fill="#ffffff">3. USE a trained medical interpreter,</text>
            <text x="620" y="390" font-family="Arial" font-size="17" fill="#ffffff">    never family (especially children)</text>
            <text x="620" y="410" font-family="Arial" font-size="17" fill="#ffffff">    for clinical conversations.</text>
            <text x="580" y="455" font-family="Arial" font-size="17" font-weight="bold" fill="#ffd700">Each individual differs from group norms.</text>
            <text x="580" y="485" font-family="Arial" font-size="15" fill="#ffffff">Generalizations are starting points,</text>
            <text x="580" y="505" font-family="Arial" font-size="15" fill="#ffffff">not finish lines. Confirm with the patient.</text>
            <rect x="50" y="585" width="1000" height="470" fill="#ffd700" rx="10"/>
            <text x="550" y="625" font-family="Arial" font-size="24" font-weight="bold" fill="#1a1a2e" text-anchor="middle">WHEN PRINCIPLES COLLIDE: AUTONOMY USUALLY WINS</text>
            <line x1="200" y1="640" x2="900" y2="640" stroke="#1a1a2e" stroke-width="2"/>
            <text x="70" y="685" font-family="Arial" font-size="18" font-weight="bold" fill="#1a1a2e">Scenario:</text>
            <text x="200" y="685" font-family="Arial" font-size="17" fill="#1a1a2e">Competent adult Jehovah's Witness refuses blood.</text>
            <text x="70" y="720" font-family="Arial" font-size="18" font-weight="bold" fill="#1a1a2e">Conflict:</text>
            <text x="200" y="720" font-family="Arial" font-size="17" fill="#1a1a2e">Beneficence (save life) vs. Autonomy (honor refusal).</text>
            <text x="70" y="755" font-family="Arial" font-size="18" font-weight="bold" fill="#1a1a2e">Resolution:</text>
            <text x="200" y="755" font-family="Arial" font-size="17" fill="#1a1a2e">AUTONOMY wins. Honor refusal. Document. Offer alternatives.</text>
            <line x1="70" y1="785" x2="1030" y2="785" stroke="#1a1a2e" stroke-width="1"/>
            <text x="70" y="820" font-family="Arial" font-size="18" font-weight="bold" fill="#1a1a2e">EXCEPTIONS where autonomy may yield:</text>
            <text x="90" y="855" font-family="Arial" font-size="17" fill="#1a1a2e">- Minors (parents/court decide, but mature minor rules vary)</text>
            <text x="90" y="885" font-family="Arial" font-size="17" fill="#1a1a2e">- Mentally incompetent patient (surrogate / advance directive applies)</text>
            <text x="90" y="915" font-family="Arial" font-size="17" fill="#1a1a2e">- Public health emergencies (e.g., TB isolation orders)</text>
            <text x="90" y="945" font-family="Arial" font-size="17" fill="#1a1a2e">- Emergencies with no time for consent (implied consent doctrine)</text>
            <text x="550" y="1005" font-family="Arial" font-size="20" font-weight="bold" fill="#1a1a2e" text-anchor="middle">Nurse's job = advocate, inform, document, NEVER coerce.</text>
            <text x="550" y="1035" font-family="Arial" font-size="16" font-style="italic" fill="#1a1a2e" text-anchor="middle">You may share concerns; you may not override a competent adult's choice.</text>
          </svg>`,
          caption: "Five ethical principles plus three rules of cultural safety. For competent adults, autonomy wins almost every collision."
        }
      },
      {
        type: "concept",
        title: "Informed Consent, Advance Directives, and the Nurse's Role",
        content: `**Informed consent** has three parts: (1) **disclosure** of risks, benefits, and alternatives; (2) **comprehension** by the patient; (3) **voluntary agreement** without coercion. The **physician/surgeon** is responsible for obtaining consent for procedures. The **nurse's** role is to **witness the signature** and verify the patient understands. If the patient says "I don't really understand what they're doing to me," **stop the process** and call the provider back. Do not have the patient sign.

**Advance directives** include the **living will** (written instructions for end-of-life care) and the **durable power of attorney for healthcare** (DPOA-HC, names a surrogate decision-maker). A **DNR** (Do Not Resuscitate) order must be written by a physician based on the patient's wishes — it is not the same as comfort care, and a DNR patient still gets pain meds, antibiotics, and all non-resuscitative care unless otherwise specified.

Key NCLEX trap: a family member **cannot override** a competent patient's advance directive. If grandma's living will says "no intubation" and her son screams "do everything," **the living will controls**.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="55" font-family="Arial" font-size="30" font-weight="bold" fill="#ffd700" text-anchor="middle">Informed Consent + Advance Directives</text>
            <rect x="50" y="100" width="1000" height="400" fill="#6366f1" rx="10"/>
            <text x="550" y="140" font-family="Arial" font-size="24" font-weight="bold" fill="#ffd700" text-anchor="middle">INFORMED CONSENT: 3 Ingredients</text>
            <line x1="350" y1="155" x2="750" y2="155" stroke="#ffd700" stroke-width="2"/>
            <rect x="80" y="180" width="290" height="290" fill="#0ea5e9" rx="10"/>
            <text x="225" y="215" font-family="Arial" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">1. DISCLOSURE</text>
            <text x="100" y="250" font-family="Arial" font-size="15" fill="#ffffff">- Diagnosis explained</text>
            <text x="100" y="275" font-family="Arial" font-size="15" fill="#ffffff">- Procedure described</text>
            <text x="100" y="300" font-family="Arial" font-size="15" fill="#ffffff">- Risks listed</text>
            <text x="100" y="325" font-family="Arial" font-size="15" fill="#ffffff">- Benefits explained</text>
            <text x="100" y="350" font-family="Arial" font-size="15" fill="#ffffff">- Alternatives offered</text>
            <text x="100" y="375" font-family="Arial" font-size="15" fill="#ffffff">- Right to refuse stated</text>
            <text x="100" y="425" font-family="Arial" font-size="15" font-weight="bold" fill="#ffd700">RESPONSIBILITY:</text>
            <text x="100" y="448" font-family="Arial" font-size="15" font-weight="bold" fill="#ffd700">PROVIDER (MD/DO/NP)</text>
            <rect x="405" y="180" width="290" height="290" fill="#10b981" rx="10"/>
            <text x="550" y="215" font-family="Arial" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">2. COMPREHENSION</text>
            <text x="425" y="250" font-family="Arial" font-size="15" fill="#ffffff">- Pt restates in own words</text>
            <text x="425" y="275" font-family="Arial" font-size="15" fill="#ffffff">- Mentally competent</text>
            <text x="425" y="300" font-family="Arial" font-size="15" fill="#ffffff">- Not sedated/intoxicated</text>
            <text x="425" y="325" font-family="Arial" font-size="15" fill="#ffffff">- Language understood</text>
            <text x="425" y="350" font-family="Arial" font-size="15" fill="#ffffff">  (use interpreter PRN)</text>
            <text x="425" y="375" font-family="Arial" font-size="15" fill="#ffffff">- Adequate health literacy</text>
            <text x="425" y="425" font-family="Arial" font-size="15" font-weight="bold" fill="#ffd700">RESPONSIBILITY:</text>
            <text x="425" y="448" font-family="Arial" font-size="15" font-weight="bold" fill="#ffd700">NURSE VERIFIES + WITNESSES</text>
            <rect x="730" y="180" width="290" height="290" fill="#f59e0b" rx="10"/>
            <text x="875" y="215" font-family="Arial" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">3. VOLUNTARY</text>
            <text x="750" y="250" font-family="Arial" font-size="15" fill="#ffffff">- No coercion</text>
            <text x="750" y="275" font-family="Arial" font-size="15" fill="#ffffff">- No undue influence</text>
            <text x="750" y="300" font-family="Arial" font-size="15" fill="#ffffff">- Time to ask questions</text>
            <text x="750" y="325" font-family="Arial" font-size="15" fill="#ffffff">- May withdraw consent</text>
            <text x="750" y="350" font-family="Arial" font-size="15" fill="#ffffff">  at any time</text>
            <text x="750" y="375" font-family="Arial" font-size="15" fill="#ffffff">- Signed freely</text>
            <text x="750" y="425" font-family="Arial" font-size="15" font-weight="bold" fill="#ffffff">If "I don't understand"</text>
            <text x="750" y="448" font-family="Arial" font-size="15" font-weight="bold" fill="#ffffff">--> STOP. Call MD back.</text>
            <rect x="50" y="525" width="490" height="525" fill="#10b981" rx="10"/>
            <text x="295" y="565" font-family="Arial" font-size="22" font-weight="bold" fill="#ffd700" text-anchor="middle">LIVING WILL</text>
            <line x1="80" y1="580" x2="510" y2="580" stroke="#ffd700" stroke-width="2"/>
            <text x="70" y="615" font-family="Arial" font-size="16" font-weight="bold" fill="#ffffff">What it is:</text>
            <text x="70" y="640" font-family="Arial" font-size="15" fill="#ffffff">Written instructions for end-of-life</text>
            <text x="70" y="660" font-family="Arial" font-size="15" fill="#ffffff">care (intubation, CPR, feeding tube).</text>
            <text x="70" y="695" font-family="Arial" font-size="16" font-weight="bold" fill="#ffffff">Activates when:</text>
            <text x="70" y="720" font-family="Arial" font-size="15" fill="#ffffff">Patient is incapacitated AND</text>
            <text x="70" y="740" font-family="Arial" font-size="15" fill="#ffffff">terminally ill / permanently unconscious.</text>
            <text x="70" y="775" font-family="Arial" font-size="16" font-weight="bold" fill="#ffd700">CANNOT be overridden by family</text>
            <text x="70" y="797" font-family="Arial" font-size="16" font-weight="bold" fill="#ffd700">if patient was competent when signed.</text>
            <text x="70" y="840" font-family="Arial" font-size="16" font-weight="bold" fill="#ffffff">Nurse's role:</text>
            <text x="70" y="865" font-family="Arial" font-size="15" fill="#ffffff">- Ensure copy is in chart</text>
            <text x="70" y="890" font-family="Arial" font-size="15" fill="#ffffff">- Honor stated wishes</text>
            <text x="70" y="915" font-family="Arial" font-size="15" fill="#ffffff">- Advocate if team deviates</text>
            <text x="70" y="940" font-family="Arial" font-size="15" fill="#ffffff">- Update with changes in status</text>
            <text x="70" y="985" font-family="Arial" font-size="16" font-weight="bold" fill="#ffd700">DNR is a SEPARATE order;</text>
            <text x="70" y="1010" font-family="Arial" font-size="16" font-weight="bold" fill="#ffd700">must be written by MD/provider.</text>
            <text x="70" y="1035" font-family="Arial" font-size="15" font-style="italic" fill="#ffffff">DNR != comfort care. Pain meds continue.</text>
            <rect x="560" y="525" width="490" height="525" fill="#8b5cf6" rx="10"/>
            <text x="805" y="565" font-family="Arial" font-size="22" font-weight="bold" fill="#ffd700" text-anchor="middle">DPOA-HC (Proxy)</text>
            <line x1="590" y1="580" x2="1020" y2="580" stroke="#ffd700" stroke-width="2"/>
            <text x="580" y="615" font-family="Arial" font-size="16" font-weight="bold" fill="#ffffff">What it is:</text>
            <text x="580" y="640" font-family="Arial" font-size="15" fill="#ffffff">Patient names a SURROGATE to make</text>
            <text x="580" y="660" font-family="Arial" font-size="15" fill="#ffffff">healthcare decisions if incapacitated.</text>
            <text x="580" y="695" font-family="Arial" font-size="16" font-weight="bold" fill="#ffffff">Activates when:</text>
            <text x="580" y="720" font-family="Arial" font-size="15" fill="#ffffff">Patient loses decision-making capacity</text>
            <text x="580" y="740" font-family="Arial" font-size="15" fill="#ffffff">(determined by physician).</text>
            <text x="580" y="775" font-family="Arial" font-size="16" font-weight="bold" fill="#ffd700">Surrogate must follow patient's</text>
            <text x="580" y="797" font-family="Arial" font-size="16" font-weight="bold" fill="#ffd700">KNOWN wishes, not their own.</text>
            <text x="580" y="840" font-family="Arial" font-size="16" font-weight="bold" fill="#ffffff">Hierarchy when no DPOA:</text>
            <text x="580" y="865" font-family="Arial" font-size="15" fill="#ffffff">1. Spouse</text>
            <text x="580" y="890" font-family="Arial" font-size="15" fill="#ffffff">2. Adult children (consensus)</text>
            <text x="580" y="915" font-family="Arial" font-size="15" fill="#ffffff">3. Parents</text>
            <text x="580" y="940" font-family="Arial" font-size="15" fill="#ffffff">4. Adult siblings</text>
            <text x="580" y="965" font-family="Arial" font-size="15" fill="#ffffff">5. Closest relative</text>
            <text x="580" y="1005" font-family="Arial" font-size="15" fill="#ffffff">(varies by state - know yours)</text>
            <text x="580" y="1035" font-family="Arial" font-size="15" font-style="italic" fill="#ffffff">Competent pt always trumps surrogate.</text>
          </svg>`,
          caption: "Provider gets consent. Nurse witnesses understanding. Family cannot override a competent patient's advance directive."
        }
      },
      {
        type: "example",
        title: "Four Cultural Scenarios the NCLEX Loves",
        content: `**Scenario 1 — Jehovah's Witness.** Mr. Holt is bleeding post-op, Hgb 6.5. Doctor orders 2 units packed red cells; Mr. Holt refuses on religious grounds. **You honor the refusal**, notify the provider, document, and advocate for alternatives (cell salvage, erythropoietin, IV iron, volume expanders).

**Scenario 2 — Muslim dietary + Ramadan.** Mrs. Hassan is admitted during Ramadan with a UTI. She's fasting sunrise to sunset. She also can't have pork-derived insulin or gelatin. **Action:** ask about her specific practices, request a halal diet consult, time medications with the provider for sundown when possible, and document.

**Scenario 3 — Hispanic/Latino family-centered care.** Mr. Reyes was just diagnosed with metastatic cancer. His adult daughter asks the team **not** to tell him directly — she wants the family to share the news. **Action:** explore the patient's preference (some patients **want** the family to be the buffer; this is called **familism**). Ask Mr. Reyes: *"Some patients want all the information; others prefer family decide together. What do you prefer?"* Honor his answer.

**Scenario 4 — Native American end-of-life.** Mrs. Whitehorse is dying. Family requests a traditional ceremony and that the body not be touched until an elder arrives. **Action:** accommodate within hospital policy. Notify chaplain, mortuary, and unit leadership.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="55" font-family="Arial" font-size="28" font-weight="bold" fill="#ffd700" text-anchor="middle">Four Cultural Scenarios the Exam Loves</text>
            <rect x="50" y="100" width="490" height="450" fill="#6366f1" rx="10"/>
            <text x="295" y="135" font-family="Arial" font-size="20" font-weight="bold" fill="#ffd700" text-anchor="middle">1. JEHOVAH'S WITNESS</text>
            <line x1="80" y1="150" x2="510" y2="150" stroke="#ffd700" stroke-width="2"/>
            <text x="70" y="185" font-family="Arial" font-size="16" font-weight="bold" fill="#ffffff">Situation:</text>
            <text x="70" y="208" font-family="Arial" font-size="15" fill="#ffffff">Mr. Holt, Hgb 6.5, refuses blood.</text>
            <text x="70" y="248" font-family="Arial" font-size="16" font-weight="bold" fill="#10b981">Right action:</text>
            <text x="70" y="273" font-family="Arial" font-size="15" fill="#ffffff">- Honor refusal (competent adult)</text>
            <text x="70" y="295" font-family="Arial" font-size="15" fill="#ffffff">- Notify provider immediately</text>
            <text x="70" y="317" font-family="Arial" font-size="15" fill="#ffffff">- Document refusal + teaching</text>
            <text x="70" y="339" font-family="Arial" font-size="15" fill="#ffffff">- Offer ALTERNATIVES:</text>
            <text x="90" y="361" font-family="Arial" font-size="14" fill="#ffd700">  cell salvage, EPO, IV iron,</text>
            <text x="90" y="381" font-family="Arial" font-size="14" fill="#ffd700">  volume expanders, albumin</text>
            <text x="70" y="421" font-family="Arial" font-size="16" font-weight="bold" fill="#ef4444">Wrong: coerce, judge, hide blood</text>
            <text x="70" y="443" font-family="Arial" font-size="16" font-weight="bold" fill="#ef4444">in a "saline" bag, override</text>
            <text x="70" y="495" font-family="Arial" font-size="14" font-style="italic" fill="#ffffff">Principle: AUTONOMY > beneficence</text>
            <text x="70" y="525" font-family="Arial" font-size="14" font-style="italic" fill="#ffffff">Note: minors are court-decided</text>
            <rect x="560" y="100" width="490" height="450" fill="#10b981" rx="10"/>
            <text x="805" y="135" font-family="Arial" font-size="20" font-weight="bold" fill="#ffd700" text-anchor="middle">2. MUSLIM PATIENT (Ramadan)</text>
            <line x1="590" y1="150" x2="1020" y2="150" stroke="#ffd700" stroke-width="2"/>
            <text x="580" y="185" font-family="Arial" font-size="16" font-weight="bold" fill="#ffffff">Situation:</text>
            <text x="580" y="208" font-family="Arial" font-size="15" fill="#ffffff">Mrs. Hassan, UTI, fasting Ramadan.</text>
            <text x="580" y="248" font-family="Arial" font-size="16" font-weight="bold" fill="#ffd700">Right action:</text>
            <text x="580" y="273" font-family="Arial" font-size="15" fill="#ffffff">- ASK her specific practices</text>
            <text x="580" y="295" font-family="Arial" font-size="15" fill="#ffffff">- Sick exemption is OPTIONAL,</text>
            <text x="580" y="317" font-family="Arial" font-size="15" fill="#ffffff">  not automatic - she decides</text>
            <text x="580" y="339" font-family="Arial" font-size="15" fill="#ffffff">- Halal diet consult</text>
            <text x="580" y="361" font-family="Arial" font-size="15" fill="#ffffff">- Avoid pork-derived meds</text>
            <text x="580" y="381" font-family="Arial" font-size="15" fill="#ffffff">  (insulin, heparin, gelatin caps)</text>
            <text x="580" y="403" font-family="Arial" font-size="15" fill="#ffffff">- Time meds with sundown PRN</text>
            <text x="580" y="425" font-family="Arial" font-size="15" fill="#ffffff">- Same-sex provider if requested</text>
            <text x="580" y="447" font-family="Arial" font-size="15" fill="#ffffff">- Allow space/time for salat (prayer)</text>
            <text x="580" y="495" font-family="Arial" font-size="14" font-style="italic" fill="#ffffff">Principle: FIDELITY + autonomy</text>
            <text x="580" y="525" font-family="Arial" font-size="14" font-style="italic" fill="#ffffff">Note: needs vary widely - ASK</text>
            <rect x="50" y="580" width="490" height="460" fill="#f59e0b" rx="10"/>
            <text x="295" y="615" font-family="Arial" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">3. HISPANIC/LATINO FAMILY</text>
            <line x1="80" y1="630" x2="510" y2="630" stroke="#ffffff" stroke-width="2"/>
            <text x="70" y="665" font-family="Arial" font-size="16" font-weight="bold" fill="#ffffff">Situation:</text>
            <text x="70" y="688" font-family="Arial" font-size="15" fill="#ffffff">Daughter asks team to tell HER</text>
            <text x="70" y="708" font-family="Arial" font-size="15" fill="#ffffff">cancer dx so SHE can tell dad.</text>
            <text x="70" y="748" font-family="Arial" font-size="16" font-weight="bold" fill="#ffffff">Right action:</text>
            <text x="70" y="773" font-family="Arial" font-size="15" fill="#ffffff">ASK the PATIENT first:</text>
            <text x="70" y="800" font-family="Arial" font-size="15" font-style="italic" fill="#ffffff">"Some people want all the info;</text>
            <text x="70" y="820" font-family="Arial" font-size="15" font-style="italic" fill="#ffffff">others prefer the family decide</text>
            <text x="70" y="840" font-family="Arial" font-size="15" font-style="italic" fill="#ffffff">together. What do you prefer?"</text>
            <text x="70" y="880" font-family="Arial" font-size="15" fill="#ffffff">If pt wants familism-based</text>
            <text x="70" y="900" font-family="Arial" font-size="15" fill="#ffffff">shared decisions, HONOR it.</text>
            <text x="70" y="950" font-family="Arial" font-size="14" font-style="italic" fill="#ffffff">Principle: AUTONOMY (defined by</text>
            <text x="70" y="970" font-family="Arial" font-size="14" font-style="italic" fill="#ffffff">patient, not by Western default)</text>
            <text x="70" y="1010" font-family="Arial" font-size="14" fill="#ffffff">Patient may DELEGATE autonomy</text>
            <text x="70" y="1030" font-family="Arial" font-size="14" fill="#ffffff">- that is itself an autonomous choice.</text>
            <rect x="560" y="580" width="490" height="460" fill="#8b5cf6" rx="10"/>
            <text x="805" y="615" font-family="Arial" font-size="20" font-weight="bold" fill="#ffd700" text-anchor="middle">4. NATIVE AMERICAN END-OF-LIFE</text>
            <line x1="590" y1="630" x2="1020" y2="630" stroke="#ffd700" stroke-width="2"/>
            <text x="580" y="665" font-family="Arial" font-size="16" font-weight="bold" fill="#ffffff">Situation:</text>
            <text x="580" y="688" font-family="Arial" font-size="15" fill="#ffffff">Mrs. Whitehorse dying. Family</text>
            <text x="580" y="708" font-family="Arial" font-size="15" fill="#ffffff">wants ceremony + no touching</text>
            <text x="580" y="728" font-family="Arial" font-size="15" fill="#ffffff">body until elder arrives.</text>
            <text x="580" y="768" font-family="Arial" font-size="16" font-weight="bold" fill="#ffffff">Right action:</text>
            <text x="580" y="793" font-family="Arial" font-size="15" fill="#ffffff">- Accommodate ceremony</text>
            <text x="580" y="815" font-family="Arial" font-size="15" fill="#ffffff">- Pause routine post-mortem care</text>
            <text x="580" y="837" font-family="Arial" font-size="15" fill="#ffffff">- Notify chaplain + leadership</text>
            <text x="580" y="859" font-family="Arial" font-size="15" fill="#ffffff">- Coordinate with mortuary</text>
            <text x="580" y="881" font-family="Arial" font-size="15" fill="#ffffff">- Quiet, dim environment</text>
            <text x="580" y="903" font-family="Arial" font-size="15" fill="#ffffff">- Allow space for smudging if requested</text>
            <text x="580" y="945" font-family="Arial" font-size="14" font-style="italic" fill="#ffffff">Principle: FIDELITY + cultural</text>
            <text x="580" y="965" font-family="Arial" font-size="14" font-style="italic" fill="#ffffff">humility</text>
            <text x="580" y="1010" font-family="Arial" font-size="14" fill="#ffffff">Same humility extends to Orthodox</text>
            <text x="580" y="1030" font-family="Arial" font-size="14" fill="#ffffff">Jewish + Buddhist death rituals.</text>
          </svg>`,
          caption: "Four scenarios, one rule: ask the patient, honor the answer, document, and accommodate within policy."
        }
      },
      {
        type: "quiz",
        title: "NCLEX-Style Question: Ethics",
        content: `**Question:** A 78-year-old patient with end-stage COPD has a signed living will stating "no intubation, no CPR." She becomes unresponsive with agonal breathing. Her adult son arrives, sobbing, and shouts at the nurse: *"Do EVERYTHING — intubate her, save her!"* Which action by the nurse is **most appropriate**?

This question tests **fidelity to the patient's advance directive** versus emotional pressure from a family surrogate. A competent adult's prior written wishes — when documented and witnessed — bind the healthcare team. The family does **not** have the legal authority to override the patient's own decision. The nurse's role is to **honor the directive, support the family emotionally, and document**.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="55" font-family="Arial" font-size="28" font-weight="bold" fill="#ffd700" text-anchor="middle">NCLEX Practice: Advance Directive Override</text>
            <rect x="50" y="90" width="1000" height="140" fill="#6366f1" rx="10"/>
            <text x="70" y="125" font-family="Arial" font-size="17" fill="#ffffff">78 y/o with end-stage COPD has a signed, witnessed living will:</text>
            <text x="70" y="150" font-family="Arial" font-size="17" fill="#ffffff">"NO intubation, NO CPR." She becomes unresponsive with agonal breathing.</text>
            <text x="70" y="175" font-family="Arial" font-size="17" fill="#ffffff">Her son arrives and demands: "DO EVERYTHING - intubate her, SAVE HER!"</text>
            <text x="70" y="205" font-family="Arial" font-size="17" font-weight="bold" fill="#ffd700">Which action is MOST appropriate?</text>
            <rect x="50" y="250" width="1000" height="110" fill="#ef4444" rx="10"/>
            <text x="70" y="285" font-family="Arial" font-size="18" font-weight="bold" fill="#ffffff">A. Initiate full CPR and intubation per the son's request.</text>
            <text x="70" y="320" font-family="Arial" font-size="16" font-style="italic" fill="#ffd700">[WRONG] Family CANNOT override a competent adult's prior directive.</text>
            <text x="70" y="345" font-family="Arial" font-size="16" font-style="italic" fill="#ffd700">Doing so = battery + violation of autonomy.</text>
            <rect x="50" y="380" width="1000" height="110" fill="#ef4444" rx="10"/>
            <text x="70" y="415" font-family="Arial" font-size="18" font-weight="bold" fill="#ffffff">B. Tell the son: "I'm sorry, but I can't talk to you right now"</text>
            <text x="70" y="440" font-family="Arial" font-size="18" fill="#ffffff">     and leave the room.</text>
            <text x="70" y="475" font-family="Arial" font-size="16" font-style="italic" fill="#ffd700">[WRONG] Abandons the family in crisis. Violates therapeutic communication.</text>
            <rect x="50" y="510" width="1000" height="135" fill="#10b981" rx="10"/>
            <text x="70" y="545" font-family="Arial" font-size="18" font-weight="bold" fill="#ffffff">C. Honor the living will, provide comfort care, notify the</text>
            <text x="70" y="570" font-family="Arial" font-size="18" fill="#ffffff">     provider and chaplain, and offer emotional support to</text>
            <text x="70" y="595" font-family="Arial" font-size="18" fill="#ffffff">     the son.</text>
            <text x="70" y="625" font-family="Arial" font-size="16" font-style="italic" fill="#ffd700">[CORRECT] Honors autonomy, fulfills fidelity, supports family with empathy.</text>
            <rect x="50" y="665" width="1000" height="110" fill="#ef4444" rx="10"/>
            <text x="70" y="700" font-family="Arial" font-size="18" font-weight="bold" fill="#ffffff">D. Call the hospital ethics committee for an emergency vote</text>
            <text x="70" y="725" font-family="Arial" font-size="18" fill="#ffffff">     to decide whether to intubate.</text>
            <text x="70" y="760" font-family="Arial" font-size="16" font-style="italic" fill="#ffd700">[WRONG] No ethical conflict exists - directive is clear. No time, no need.</text>
            <rect x="50" y="800" width="1000" height="260" fill="#ffd700" rx="10"/>
            <text x="550" y="840" font-family="Arial" font-size="24" font-weight="bold" fill="#1a1a2e" text-anchor="middle">EXPLANATION</text>
            <line x1="450" y1="852" x2="650" y2="852" stroke="#1a1a2e" stroke-width="2"/>
            <text x="70" y="885" font-family="Arial" font-size="16" fill="#1a1a2e">Answer C honors all 5 principles:</text>
            <text x="90" y="915" font-family="Arial" font-size="16" fill="#1a1a2e">- AUTONOMY: respects the patient's prior decision</text>
            <text x="90" y="940" font-family="Arial" font-size="16" fill="#1a1a2e">- BENEFICENCE: comfort care, dignified death</text>
            <text x="90" y="965" font-family="Arial" font-size="16" fill="#1a1a2e">- NONMALEFICENCE: no painful, futile intubation</text>
            <text x="90" y="990" font-family="Arial" font-size="16" fill="#1a1a2e">- FIDELITY: keeps the promise made by the directive</text>
            <text x="90" y="1015" font-family="Arial" font-size="16" fill="#1a1a2e">- THERAPEUTIC COMMUNICATION: chaplain + emotional support for son</text>
            <text x="70" y="1045" font-family="Arial" font-size="16" font-weight="bold" fill="#1a1a2e">A is battery. B is abandonment. D wastes time on a non-conflict.</text>
          </svg>`,
          caption: "Family grief is real, but cannot override a competent patient's signed advance directive. Honor + comfort + chaplain."
        }
      },
      {
        type: "application",
        title: "Bedside Toolkit: Asking, Listening, Honoring",
        content: `Use these three sentences at the bedside and you will satisfy 90% of the cultural-competence NCLEX answers.

**Opening question (every admission):** *"Are there any cultural, religious, or personal practices that are important to your care while you're here?"* This single question unlocks dietary needs, prayer times, modesty requirements, family decision-making patterns, end-of-life rituals, and acceptable providers.

**Mid-care check (when a values conflict appears):** *"Help me understand what's most important to you about this decision."* This converts confrontation ("you have to take this") into collaboration. It surfaces values you can document and the team can honor.

**Closing check (before any major intervention):** *"Is there anyone you'd like with you, or anything we should do before we begin?"* Catches missed family notifications, last prayers, religious objects (rosary, prayer rug, Bible), and surrogate involvement.

Pair these with the **5 ethical principles** as labels — when the exam asks *"What principle is the nurse upholding?"*, you'll always have language ready: **autonomy, beneficence, nonmaleficence, justice, fidelity.**`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="55" font-family="Arial" font-size="30" font-weight="bold" fill="#ffd700" text-anchor="middle">Bedside Toolkit: Three Questions, Five Principles</text>
            <rect x="50" y="100" width="1000" height="190" fill="#6366f1" rx="10"/>
            <text x="550" y="138" font-family="Arial" font-size="22" font-weight="bold" fill="#ffd700" text-anchor="middle">QUESTION 1 - ADMISSION</text>
            <line x1="380" y1="152" x2="720" y2="152" stroke="#ffd700" stroke-width="2"/>
            <text x="550" y="190" font-family="Arial" font-size="20" font-style="italic" fill="#ffffff" text-anchor="middle">"Are there any cultural, religious, or personal practices</text>
            <text x="550" y="218" font-family="Arial" font-size="20" font-style="italic" fill="#ffffff" text-anchor="middle">that are important to your care while you're here?"</text>
            <text x="550" y="258" font-family="Arial" font-size="15" fill="#ffd700" text-anchor="middle">Unlocks: diet, prayer times, modesty, decision-making, rituals, providers</text>
            <rect x="50" y="310" width="1000" height="190" fill="#10b981" rx="10"/>
            <text x="550" y="348" font-family="Arial" font-size="22" font-weight="bold" fill="#ffd700" text-anchor="middle">QUESTION 2 - MID-CARE (when values conflict)</text>
            <line x1="280" y1="362" x2="820" y2="362" stroke="#ffd700" stroke-width="2"/>
            <text x="550" y="400" font-family="Arial" font-size="20" font-style="italic" fill="#ffffff" text-anchor="middle">"Help me understand what's most</text>
            <text x="550" y="428" font-family="Arial" font-size="20" font-style="italic" fill="#ffffff" text-anchor="middle">important to you about this decision."</text>
            <text x="550" y="468" font-family="Arial" font-size="15" fill="#ffd700" text-anchor="middle">Converts confrontation into collaboration. Surfaces values to document.</text>
            <rect x="50" y="520" width="1000" height="190" fill="#f59e0b" rx="10"/>
            <text x="550" y="558" font-family="Arial" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">QUESTION 3 - BEFORE ANY MAJOR INTERVENTION</text>
            <line x1="220" y1="572" x2="880" y2="572" stroke="#ffffff" stroke-width="2"/>
            <text x="550" y="610" font-family="Arial" font-size="20" font-style="italic" fill="#ffffff" text-anchor="middle">"Is there anyone you'd like with you, or</text>
            <text x="550" y="638" font-family="Arial" font-size="20" font-style="italic" fill="#ffffff" text-anchor="middle">anything we should do before we begin?"</text>
            <text x="550" y="678" font-family="Arial" font-size="15" fill="#ffffff" text-anchor="middle">Catches family, prayers, religious objects, surrogate involvement.</text>
            <rect x="50" y="735" width="1000" height="325" fill="#ffd700" rx="10"/>
            <text x="550" y="775" font-family="Arial" font-size="24" font-weight="bold" fill="#1a1a2e" text-anchor="middle">5 PRINCIPLES = 5 LABELS FOR EVERY EXAM ANSWER</text>
            <line x1="200" y1="790" x2="900" y2="790" stroke="#1a1a2e" stroke-width="2"/>
            <text x="80" y="830" font-family="Arial" font-size="18" font-weight="bold" fill="#1a1a2e">AUTONOMY</text>
            <text x="350" y="830" font-family="Arial" font-size="17" fill="#1a1a2e">"Refusing chemo." "Choosing alternative tx."</text>
            <text x="80" y="870" font-family="Arial" font-size="18" font-weight="bold" fill="#1a1a2e">BENEFICENCE</text>
            <text x="350" y="870" font-family="Arial" font-size="17" fill="#1a1a2e">Giving the antibiotic; pain management.</text>
            <text x="80" y="910" font-family="Arial" font-size="18" font-weight="bold" fill="#1a1a2e">NONMALEFICENCE</text>
            <text x="350" y="910" font-family="Arial" font-size="17" fill="#1a1a2e">Holding a med when contraindicated.</text>
            <text x="80" y="950" font-family="Arial" font-size="18" font-weight="bold" fill="#1a1a2e">JUSTICE</text>
            <text x="350" y="950" font-family="Arial" font-size="17" fill="#1a1a2e">Equal triage care regardless of insurance.</text>
            <text x="80" y="990" font-family="Arial" font-size="18" font-weight="bold" fill="#1a1a2e">FIDELITY</text>
            <text x="350" y="990" font-family="Arial" font-size="17" fill="#1a1a2e">"I'll be back in 15 minutes" - and you are.</text>
            <text x="550" y="1040" font-family="Arial" font-size="18" font-style="italic" fill="#1a1a2e" text-anchor="middle">Ask. Listen. Honor. Label. Document.</text>
          </svg>`,
          caption: "Three sentences at the bedside. Five principles for every answer choice. Cultural humility = active inquiry, not memorization."
        }
      }
    ]
  },
  {
    id: "nclex-fundamentals-lesson-12",
    title: "Capstone: The 4-Step Priority Algorithm for ANY NCLEX Question",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "One Algorithm to Rule Them All",
        content: `The NCLEX is, at its core, a **prioritization exam**. You're rarely asked "what is correct?" You're asked "what is correct **FIRST**?" That word — *first*, *initial*, *priority*, *most important*, *best* — appears on roughly half of all questions. If you can prioritize, you can pass.

Across the first 11 lessons, you've built every tool you need. This lesson welds them into a **4-Step Priority Algorithm** you can run on any question in under 30 seconds.

**Step 1: ABCs check** — is anyone's Airway, Breathing, or Circulation threatened? (Lesson 1)
**Step 2: Maslow check** — if ABCs are clear, who has the most pressing physiologic, then safety, need? (Lesson 2)
**Step 3: Acute vs. Chronic check** — among similar-priority patients, the new/unstable problem beats the chronic/stable one.
**Step 4: Nursing Process check** — what step of ADPIE are you on? **Assess before intervene.** (Lesson 3)

Run these in order. The first step that decisively picks a winner is your answer. Don't skip ahead.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="55" font-family="Arial" font-size="32" font-weight="bold" fill="#ffd700" text-anchor="middle">The 4-Step Priority Algorithm</text>
            <text x="550" y="92" font-family="Arial" font-size="18" fill="#888" text-anchor="middle">Run in order. First step that picks a winner = your answer.</text>
            <rect x="100" y="130" width="900" height="190" fill="#ef4444" rx="15"/>
            <text x="160" y="180" font-family="Arial" font-size="44" font-weight="bold" fill="#ffffff">1</text>
            <text x="230" y="170" font-family="Arial" font-size="26" font-weight="bold" fill="#ffd700">ABCs CHECK</text>
            <text x="230" y="200" font-family="Arial" font-size="18" fill="#ffffff">Is Airway, Breathing, or Circulation threatened?</text>
            <text x="230" y="225" font-family="Arial" font-size="16" fill="#ffffff">Stridor, RR &lt; 10, SpO2 &lt; 90%, no pulse, active bleeding, chest pain</text>
            <text x="230" y="255" font-family="Arial" font-size="16" font-weight="bold" fill="#ffd700">If YES --&gt; that patient/intervention WINS. Stop here.</text>
            <text x="230" y="285" font-family="Arial" font-size="16" font-style="italic" fill="#ffffff">A before B before C. Airway always trumps.</text>
            <line x1="550" y1="320" x2="550" y2="345" stroke="#ffd700" stroke-width="3"/>
            <polygon points="540,345 560,345 550,360" fill="#ffd700"/>
            <rect x="100" y="365" width="900" height="190" fill="#f59e0b" rx="15"/>
            <text x="160" y="415" font-family="Arial" font-size="44" font-weight="bold" fill="#ffffff">2</text>
            <text x="230" y="405" font-family="Arial" font-size="26" font-weight="bold" fill="#ffffff">MASLOW CHECK</text>
            <text x="230" y="435" font-family="Arial" font-size="18" fill="#ffffff">If ABCs clear: who has the lower-Maslow need?</text>
            <text x="230" y="460" font-family="Arial" font-size="16" fill="#ffffff">Physiologic &gt; Safety &gt; Love/Belonging &gt; Esteem &gt; Self-Actualization</text>
            <text x="230" y="490" font-family="Arial" font-size="16" font-weight="bold" fill="#1a1a2e">Hunger/sleep/pain beats safety. Safety beats loneliness.</text>
            <text x="230" y="520" font-family="Arial" font-size="16" font-style="italic" fill="#ffffff">Tip: pain, oxygen, elimination, nutrition all = physiologic.</text>
            <line x1="550" y1="555" x2="550" y2="580" stroke="#ffd700" stroke-width="3"/>
            <polygon points="540,580 560,580 550,595" fill="#ffd700"/>
            <rect x="100" y="600" width="900" height="190" fill="#10b981" rx="15"/>
            <text x="160" y="650" font-family="Arial" font-size="44" font-weight="bold" fill="#ffffff">3</text>
            <text x="230" y="640" font-family="Arial" font-size="26" font-weight="bold" fill="#ffd700">ACUTE vs CHRONIC CHECK</text>
            <text x="230" y="670" font-family="Arial" font-size="18" fill="#ffffff">Among similar Maslow priorities: NEW/UNSTABLE wins.</text>
            <text x="230" y="695" font-family="Arial" font-size="16" fill="#ffffff">Sudden chest pain &gt; chronic stable angina</text>
            <text x="230" y="720" font-family="Arial" font-size="16" fill="#ffffff">New confusion &gt; baseline dementia</text>
            <text x="230" y="750" font-family="Arial" font-size="16" font-weight="bold" fill="#ffd700">Watch for: "suddenly," "new onset," "first time," "worsening"</text>
            <text x="230" y="778" font-family="Arial" font-size="16" font-style="italic" fill="#ffffff">Unexpected findings &gt; expected findings.</text>
            <line x1="550" y1="790" x2="550" y2="815" stroke="#ffd700" stroke-width="3"/>
            <polygon points="540,815 560,815 550,830" fill="#ffd700"/>
            <rect x="100" y="835" width="900" height="225" fill="#6366f1" rx="15"/>
            <text x="160" y="885" font-family="Arial" font-size="44" font-weight="bold" fill="#ffffff">4</text>
            <text x="230" y="875" font-family="Arial" font-size="26" font-weight="bold" fill="#ffd700">NURSING PROCESS CHECK (ADPIE)</text>
            <text x="230" y="905" font-family="Arial" font-size="18" fill="#ffffff">What step are you on? ASSESS before INTERVENE.</text>
            <text x="230" y="935" font-family="Arial" font-size="16" fill="#ffffff">Assessment --&gt; Diagnosis --&gt; Planning --&gt; Implementation --&gt; Evaluation</text>
            <text x="230" y="970" font-family="Arial" font-size="16" font-weight="bold" fill="#ffd700">If two answers are correct, the ASSESSMENT one wins</text>
            <text x="230" y="995" font-family="Arial" font-size="16" font-weight="bold" fill="#ffd700">(unless ABCs demand immediate action).</text>
            <text x="230" y="1030" font-family="Arial" font-size="16" font-style="italic" fill="#ffffff">Exception: unwitnessed cardiac arrest --&gt; CPR FIRST, then assess rhythm.</text>
          </svg>`,
          caption: "Four steps, in order. ABCs first, then Maslow, then acute vs chronic, then nursing process. First decisive step wins."
        }
      },
      {
        type: "concept",
        title: "How the Algorithm Resolves Every Question Type",
        content: `**"Which patient should the nurse see first?"** Run all 4 patients through Step 1. If one has compromised ABCs, you're done. If two have ABC issues, see the **airway** problem first (A > B > C). If none do, move to Step 2 (Maslow), then Step 3 (acute vs chronic).

**"What is the priority nursing action?"** Step 1 asks: does any option directly address an ABC threat? If yes, pick it. Step 4 asks: is the question phrased "what should the nurse do first?" with one assess option and three intervention options? Pick **assess** — unless ABCs are already failing.

**"Which task can be delegated to the UAP?"** Layer the delegation rules (Lesson 5) onto the algorithm. UAPs do **stable, predictable, routine** tasks (bathing, ambulation, vitals on stable patients). LPNs handle stable patients, sterile dressings, meds (except IV push in most states). RNs handle the **acute, unstable, teaching, assessment, IV push, blood**.

**"What should the nurse do next?"** This is an ADPIE step question. You already assessed — what's next? Diagnose. You already planned — what's next? Implement. Then evaluate.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="55" font-family="Arial" font-size="28" font-weight="bold" fill="#ffd700" text-anchor="middle">How the Algorithm Resolves Every Question Type</text>
            <rect x="50" y="100" width="490" height="230" fill="#ef4444" rx="10"/>
            <text x="295" y="135" font-family="Arial" font-size="20" font-weight="bold" fill="#ffd700" text-anchor="middle">"WHICH PATIENT FIRST?"</text>
            <line x1="80" y1="148" x2="510" y2="148" stroke="#ffd700" stroke-width="2"/>
            <text x="70" y="180" font-family="Arial" font-size="16" fill="#ffffff">1. Run all 4 patients through ABCs</text>
            <text x="70" y="205" font-family="Arial" font-size="16" fill="#ffffff">2. If only 1 has ABC issue --&gt; that one</text>
            <text x="70" y="230" font-family="Arial" font-size="16" fill="#ffffff">3. If 2 do --&gt; airway beats breathing</text>
            <text x="70" y="255" font-family="Arial" font-size="16" fill="#ffffff">     beats circulation</text>
            <text x="70" y="285" font-family="Arial" font-size="16" fill="#ffd700">4. If none --&gt; lowest Maslow tier</text>
            <text x="70" y="310" font-family="Arial" font-size="16" fill="#ffd700">5. Tie-break with acute/new onset</text>
            <rect x="560" y="100" width="490" height="230" fill="#f59e0b" rx="10"/>
            <text x="805" y="135" font-family="Arial" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">"WHAT ACTION FIRST?"</text>
            <line x1="590" y1="148" x2="1020" y2="148" stroke="#ffffff" stroke-width="2"/>
            <text x="580" y="180" font-family="Arial" font-size="16" fill="#ffffff">1. Does any option directly fix an</text>
            <text x="580" y="202" font-family="Arial" font-size="16" fill="#ffffff">     ABC threat? --&gt; pick that one</text>
            <text x="580" y="232" font-family="Arial" font-size="16" fill="#ffffff">2. No ABC threat? --&gt; ASSESS first</text>
            <text x="580" y="257" font-family="Arial" font-size="16" fill="#ffffff">     before intervening</text>
            <text x="580" y="287" font-family="Arial" font-size="16" fill="#1a1a2e" font-weight="bold">3. Exception: cardiac arrest -&gt; CPR FIRST</text>
            <text x="580" y="312" font-family="Arial" font-size="16" fill="#1a1a2e" font-weight="bold">4. Exception: choking -&gt; clear airway FIRST</text>
            <rect x="50" y="360" width="490" height="230" fill="#10b981" rx="10"/>
            <text x="295" y="395" font-family="Arial" font-size="20" font-weight="bold" fill="#ffd700" text-anchor="middle">"WHAT TO DELEGATE?"</text>
            <line x1="80" y1="408" x2="510" y2="408" stroke="#ffd700" stroke-width="2"/>
            <text x="70" y="440" font-family="Arial" font-size="15" fill="#ffffff">UAP/CNA: stable, predictable, routine</text>
            <text x="90" y="462" font-family="Arial" font-size="14" fill="#ffd700">  bath, ambulate, VS on stable, feed</text>
            <text x="70" y="490" font-family="Arial" font-size="15" fill="#ffffff">LPN: stable pt, sterile dressing, PO meds</text>
            <text x="90" y="512" font-family="Arial" font-size="14" fill="#ffd700">  re-do dressings, give insulin, foley</text>
            <text x="70" y="540" font-family="Arial" font-size="15" fill="#ffffff">RN ONLY: acute, unstable, teach, IV push,</text>
            <text x="90" y="562" font-family="Arial" font-size="14" fill="#ffd700">  blood, assess, plan, initial admit eval</text>
            <rect x="560" y="360" width="490" height="230" fill="#6366f1" rx="10"/>
            <text x="805" y="395" font-family="Arial" font-size="20" font-weight="bold" fill="#ffd700" text-anchor="middle">"WHAT NEXT?" (ADPIE step)</text>
            <line x1="590" y1="408" x2="1020" y2="408" stroke="#ffd700" stroke-width="2"/>
            <text x="580" y="440" font-family="Arial" font-size="16" fill="#ffffff">After Assess --&gt; Diagnose</text>
            <text x="580" y="465" font-family="Arial" font-size="16" fill="#ffffff">After Diagnose --&gt; Plan</text>
            <text x="580" y="490" font-family="Arial" font-size="16" fill="#ffffff">After Plan --&gt; Implement</text>
            <text x="580" y="515" font-family="Arial" font-size="16" fill="#ffffff">After Implement --&gt; Evaluate</text>
            <text x="580" y="540" font-family="Arial" font-size="16" fill="#ffffff">After Evaluate --&gt; Reassess</text>
            <text x="580" y="572" font-family="Arial" font-size="15" font-style="italic" fill="#ffd700">Loop back -- the cycle continues.</text>
            <rect x="50" y="620" width="1000" height="430" fill="#ffd700" rx="10"/>
            <text x="550" y="660" font-family="Arial" font-size="24" font-weight="bold" fill="#1a1a2e" text-anchor="middle">QUICK-PICK TRIGGER WORDS</text>
            <line x1="380" y1="675" x2="720" y2="675" stroke="#1a1a2e" stroke-width="2"/>
            <text x="80" y="710" font-family="Arial" font-size="18" font-weight="bold" fill="#1a1a2e">"First," "Initial," "Priority," "Most important," "Best"</text>
            <text x="80" y="735" font-family="Arial" font-size="16" fill="#1a1a2e">  --&gt; This is a PRIORITY question. Run the 4-step algorithm.</text>
            <text x="80" y="775" font-family="Arial" font-size="18" font-weight="bold" fill="#1a1a2e">"Suddenly," "New onset," "Acute," "Worsening"</text>
            <text x="80" y="800" font-family="Arial" font-size="16" fill="#1a1a2e">  --&gt; Step 3 trigger - this beats the chronic stable patient.</text>
            <text x="80" y="840" font-family="Arial" font-size="18" font-weight="bold" fill="#1a1a2e">"Stable," "Chronic," "Baseline," "Scheduled"</text>
            <text x="80" y="865" font-family="Arial" font-size="16" fill="#1a1a2e">  --&gt; Lower priority - delegate-friendly.</text>
            <text x="80" y="905" font-family="Arial" font-size="18" font-weight="bold" fill="#1a1a2e">"Best response," "Therapeutic"</text>
            <text x="80" y="930" font-family="Arial" font-size="16" fill="#1a1a2e">  --&gt; Communication question. Reflect feelings, open-ended (Lesson 4).</text>
            <text x="80" y="970" font-family="Arial" font-size="18" font-weight="bold" fill="#1a1a2e">"Most appropriate teaching," "Verifies understanding"</text>
            <text x="80" y="995" font-family="Arial" font-size="16" fill="#1a1a2e">  --&gt; Evaluation step (ADPIE E). Look for pt's own correct restatement.</text>
            <text x="80" y="1035" font-family="Arial" font-size="18" font-weight="bold" fill="#1a1a2e">"Needs further teaching" --&gt; pick the WRONG statement.</text>
          </svg>`,
          caption: "Each question type maps to one or two algorithm steps. Trigger words tell you which step to enter on."
        }
      },
      {
        type: "example",
        title: "The Algorithm in Action: Three Worked NCLEX Questions",
        content: `**Q1 — Which patient first?** *(a) 70 y/o post-op day 2 with pain 4/10; (b) 55 y/o new-onset chest pain radiating to jaw; (c) 30 y/o stable diabetic awaiting discharge; (d) 80 y/o with chronic CHF, baseline edema.*
**Step 1 (ABCs):** Option (b) — new chest pain = possible MI = C-circulation threat. **WINNER: (b)**. Don't even run step 2.

**Q2 — What action first?** Patient gasping for air, SpO2 84%. Options: (a) call rapid response; (b) raise HOB and apply O2; (c) document; (d) assess lung sounds.
**Step 1 (ABCs):** (b) directly fixes B-Breathing. **WINNER: (b)**. Assessment normally beats intervention, but ABCs override.

**Q3 — What next?** Nurse has just assessed a fall risk patient, identified disorientation and gait instability, written the diagnosis "Risk for falls related to weakness." What is the next step?
**Step 4 (ADPIE):** Assessment ✓. Diagnosis ✓. Next = **Planning**. Set goals (no falls in 24h) and choose interventions (bed alarm, call light, non-skid socks). **WINNER: Plan**, not implement-yet.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="50" font-family="Arial" font-size="28" font-weight="bold" fill="#ffd700" text-anchor="middle">The Algorithm in Action: 3 Worked Questions</text>
            <rect x="40" y="85" width="1020" height="320" fill="#ef4444" rx="10"/>
            <text x="550" y="120" font-family="Arial" font-size="20" font-weight="bold" fill="#ffd700" text-anchor="middle">Q1: WHICH PATIENT FIRST?</text>
            <line x1="350" y1="132" x2="750" y2="132" stroke="#ffd700" stroke-width="2"/>
            <text x="60" y="160" font-family="Arial" font-size="15" fill="#ffffff">(a) 70 y/o post-op day 2, pain 4/10 - expected, chronic-ish, Maslow physiologic</text>
            <text x="60" y="185" font-family="Arial" font-size="15" fill="#ffffff">(b) 55 y/o NEW chest pain radiating to jaw - C threat, possible MI</text>
            <text x="60" y="210" font-family="Arial" font-size="15" fill="#ffffff">(c) 30 y/o stable diabetic awaiting discharge - safety/esteem, stable</text>
            <text x="60" y="235" font-family="Arial" font-size="15" fill="#ffffff">(d) 80 y/o CHF, BASELINE edema - chronic, expected, stable</text>
            <text x="60" y="280" font-family="Arial" font-size="17" font-weight="bold" fill="#ffd700">STEP 1 (ABCs): Option (b) threatens Circulation. STOP - done.</text>
            <text x="60" y="320" font-family="Arial" font-size="17" font-weight="bold" fill="#10b981">WINNER: (b) - new chest pain. Algorithm exited at Step 1.</text>
            <text x="60" y="360" font-family="Arial" font-size="15" font-style="italic" fill="#ffffff">Key trigger: "NEW" + chest pain + radiating to jaw = classic MI presentation.</text>
            <text x="60" y="385" font-family="Arial" font-size="15" font-style="italic" fill="#ffffff">Time = muscle. Cannot wait.</text>
            <rect x="40" y="425" width="1020" height="300" fill="#f59e0b" rx="10"/>
            <text x="550" y="460" font-family="Arial" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">Q2: WHAT ACTION FIRST?</text>
            <line x1="380" y1="472" x2="720" y2="472" stroke="#ffffff" stroke-width="2"/>
            <text x="60" y="500" font-family="Arial" font-size="15" fill="#ffffff">Pt gasping, SpO2 84%. Options:</text>
            <text x="60" y="525" font-family="Arial" font-size="15" fill="#ffffff">(a) Call rapid response</text>
            <text x="60" y="548" font-family="Arial" font-size="15" fill="#ffffff">(b) Raise HOB and apply O2</text>
            <text x="60" y="571" font-family="Arial" font-size="15" fill="#ffffff">(c) Document the findings</text>
            <text x="60" y="594" font-family="Arial" font-size="15" fill="#ffffff">(d) Auscultate lung sounds</text>
            <text x="60" y="630" font-family="Arial" font-size="17" font-weight="bold" fill="#1a1a2e">STEP 1 (ABCs): (b) directly fixes BREATHING. Done.</text>
            <text x="60" y="660" font-family="Arial" font-size="17" font-weight="bold" fill="#1a1a2e">WINNER: (b). ABCs override the usual "assess first" rule.</text>
            <text x="60" y="695" font-family="Arial" font-size="15" font-style="italic" fill="#ffffff">After (b): call rapid response. Then auscultate while waiting. Document after.</text>
            <rect x="40" y="745" width="1020" height="300" fill="#6366f1" rx="10"/>
            <text x="550" y="780" font-family="Arial" font-size="20" font-weight="bold" fill="#ffd700" text-anchor="middle">Q3: WHAT NEXT? (ADPIE)</text>
            <line x1="400" y1="792" x2="700" y2="792" stroke="#ffd700" stroke-width="2"/>
            <text x="60" y="820" font-family="Arial" font-size="15" fill="#ffffff">Nurse has assessed: disoriented, unsteady gait.</text>
            <text x="60" y="843" font-family="Arial" font-size="15" fill="#ffffff">Nurse wrote: "Risk for falls r/t weakness."</text>
            <text x="60" y="866" font-family="Arial" font-size="15" fill="#ffffff">What is the NEXT step?</text>
            <text x="60" y="902" font-family="Arial" font-size="17" font-weight="bold" fill="#ffd700">STEP 4 (ADPIE check):</text>
            <text x="60" y="930" font-family="Arial" font-size="15" fill="#ffffff">A done. D done. Next is P - PLANNING.</text>
            <text x="60" y="955" font-family="Arial" font-size="15" fill="#ffffff">Plan = set goals + select interventions</text>
            <text x="60" y="980" font-family="Arial" font-size="15" fill="#ffffff">(e.g., "no falls in 24h"; bed alarm, call light, non-skid socks, hourly rounds).</text>
            <text x="60" y="1020" font-family="Arial" font-size="17" font-weight="bold" fill="#10b981">WINNER: Planning. Implementation comes AFTER the plan is written.</text>
          </svg>`,
          caption: "Q1 stopped at Step 1 (ABCs). Q2 stopped at Step 1 (ABCs override assess-first). Q3 needed Step 4 (ADPIE)."
        }
      },
      {
        type: "quiz",
        title: "NCLEX-Style Question: The Capstone",
        content: `**Question:** A nurse on a busy med-surg unit receives report on 4 patients. Which patient should the nurse assess **first**?

This question is built specifically to make you run the 4-step algorithm. Multiple patients have problems; all sound urgent. The trick is to identify which problem is an **ABC threat** versus which is *concerning but stable*. Use Step 1 first. If multiple ABCs are flagged, A beats B beats C. If no clear ABC, move to Step 2 (Maslow) and Step 3 (acute vs chronic).

Notice the language tells you everything: "scheduled," "stable," "baseline" = lower priority. "New," "increasing," "worsening," "sudden" = higher priority. Tie that to the ABCs and you have your winner.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="50" font-family="Arial" font-size="26" font-weight="bold" fill="#ffd700" text-anchor="middle">NCLEX Capstone: Which Patient First?</text>
            <rect x="40" y="85" width="1020" height="120" fill="#6366f1" rx="10"/>
            <text x="60" y="120" font-family="Arial" font-size="17" fill="#ffffff">A nurse receives report on 4 patients on a busy med-surg unit.</text>
            <text x="60" y="148" font-family="Arial" font-size="17" fill="#ffffff">Which patient should the nurse assess FIRST?</text>
            <text x="60" y="183" font-family="Arial" font-size="16" font-style="italic" fill="#ffd700">Run the 4-step priority algorithm on each option.</text>
            <rect x="40" y="220" width="1020" height="100" fill="#ef4444" rx="10"/>
            <text x="60" y="252" font-family="Arial" font-size="17" font-weight="bold" fill="#ffffff">A. 65 y/o post-CABG, scheduled to ambulate, stable VS.</text>
            <text x="60" y="282" font-family="Arial" font-size="15" font-style="italic" fill="#ffd700">"Scheduled" + "stable" = routine. Algorithm Step 1: no ABC threat. NOT first.</text>
            <text x="60" y="307" font-family="Arial" font-size="15" font-style="italic" fill="#ffd700">Delegate ambulation to UAP after RN clears.</text>
            <rect x="40" y="335" width="1020" height="130" fill="#10b981" rx="10"/>
            <text x="60" y="367" font-family="Arial" font-size="17" font-weight="bold" fill="#ffffff">B. 50 y/o asthmatic with NEW expiratory wheeze, SpO2 88%,</text>
            <text x="60" y="392" font-family="Arial" font-size="17" font-weight="bold" fill="#ffffff">      using accessory muscles, tripod posture.</text>
            <text x="60" y="425" font-family="Arial" font-size="15" font-style="italic" fill="#ffd700">[CORRECT] AIRWAY + BREATHING threat. "New," "88%," tripod = severe</text>
            <text x="60" y="448" font-family="Arial" font-size="15" font-style="italic" fill="#ffd700">distress. Algorithm Step 1 picks this immediately. STOP.</text>
            <rect x="40" y="480" width="1020" height="100" fill="#ef4444" rx="10"/>
            <text x="60" y="512" font-family="Arial" font-size="17" font-weight="bold" fill="#ffffff">C. 72 y/o with chronic CHF, BASELINE 2+ pedal edema, no chg.</text>
            <text x="60" y="542" font-family="Arial" font-size="15" font-style="italic" fill="#ffd700">"Baseline" + "no change" = chronic, expected. Step 3 loses to (B).</text>
            <text x="60" y="567" font-family="Arial" font-size="15" font-style="italic" fill="#ffd700">Important but not URGENT.</text>
            <rect x="40" y="595" width="1020" height="100" fill="#ef4444" rx="10"/>
            <text x="60" y="627" font-family="Arial" font-size="17" font-weight="bold" fill="#ffffff">D. 28 y/o post-op appy, pain 3/10, request ice chips.</text>
            <text x="60" y="657" font-family="Arial" font-size="15" font-style="italic" fill="#ffd700">Pain 3/10 = tolerable. Comfort request = Maslow physiologic but stable.</text>
            <text x="60" y="682" font-family="Arial" font-size="15" font-style="italic" fill="#ffd700">Delegate ice chips to UAP. Pain reassess later.</text>
            <rect x="40" y="715" width="1020" height="340" fill="#ffd700" rx="10"/>
            <text x="550" y="755" font-family="Arial" font-size="22" font-weight="bold" fill="#1a1a2e" text-anchor="middle">FULL ALGORITHM TRACE</text>
            <line x1="430" y1="767" x2="670" y2="767" stroke="#1a1a2e" stroke-width="2"/>
            <text x="60" y="800" font-family="Arial" font-size="17" fill="#1a1a2e">STEP 1 (ABCs):</text>
            <text x="290" y="800" font-family="Arial" font-size="17" fill="#1a1a2e">B has airway/breathing threat (SpO2 88%, accessory)</text>
            <text x="60" y="830" font-family="Arial" font-size="17" fill="#1a1a2e">DECISIVE PICK:</text>
            <text x="290" y="830" font-family="Arial" font-size="17" font-weight="bold" fill="#1a1a2e">B (Step 1 already chose - don't run Steps 2-4)</text>
            <text x="60" y="875" font-family="Arial" font-size="16" font-weight="bold" fill="#1a1a2e">ANSWER: B - the asthmatic in respiratory distress.</text>
            <text x="60" y="915" font-family="Arial" font-size="16" fill="#1a1a2e">After assessing B: high-Fowler's, O2, albuterol nebulizer per order,</text>
            <text x="60" y="940" font-family="Arial" font-size="16" fill="#1a1a2e">notify provider, prepare for possible escalation.</text>
            <text x="60" y="985" font-family="Arial" font-size="15" font-style="italic" fill="#1a1a2e">Lesson: trigger words tell you everything. "New" + low SpO2 + tripod</text>
            <text x="60" y="1010" font-family="Arial" font-size="15" font-style="italic" fill="#1a1a2e">= Step 1 instant win. "Scheduled," "baseline," "stable" = NOT first.</text>
            <text x="60" y="1035" font-family="Arial" font-size="15" font-style="italic" fill="#1a1a2e">The algorithm picked B in &lt;10 seconds. That is the goal.</text>
          </svg>`,
          caption: "Step 1 (ABCs) picked B in seconds. Trigger words: 'new,' SpO2 88, tripod = severe distress. Algorithm exits immediately."
        }
      },
      {
        type: "application",
        title: "Test-Day Game Plan: 30 Seconds Per Question",
        content: `On test day, you have ~90 seconds per question. Spend **30 seconds running the algorithm**, **30 seconds eliminating wrong answers**, and **30 seconds confirming**. Here's the workflow.

**Read 1 (10 sec):** Read the stem. Identify the **trigger word** — *first, priority, next, best, most appropriate, needs further teaching, expected outcome*. The trigger word tells you which algorithm step you'll lean on.

**Read 2 (10 sec):** Identify the **patient population** (post-op, peds, pregnant, psych) and **what's stable vs unstable**. Underline new/sudden/worsening mentally.

**Algorithm (10 sec):** Run Step 1 (ABCs) → Step 2 (Maslow) → Step 3 (acute) → Step 4 (ADPIE). Stop at the first decisive step.

**Eliminate (30 sec):** Cross off any option that is unsafe, outside scope, requires an order you don't have, or that **does** before it **assesses** (unless ABC override). Cross off "always/never" absolutes.

**Confirm (30 sec):** Re-read the stem. Does your answer match the trigger word? If "needs further teaching," did you pick the wrong statement? If "best response," is it therapeutic? **Trust the algorithm. Move on.**`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="50" font-family="Arial" font-size="30" font-weight="bold" fill="#ffd700" text-anchor="middle">Test-Day Game Plan: 90 Seconds Per Question</text>
            <rect x="50" y="90" width="200" height="900" fill="#1a1a2e" stroke="#ffd700" stroke-width="2" rx="5"/>
            <text x="150" y="125" font-family="Arial" font-size="18" font-weight="bold" fill="#ffd700" text-anchor="middle">TIMER</text>
            <rect x="80" y="160" width="140" height="60" fill="#10b981" rx="5"/>
            <text x="150" y="195" font-family="Arial" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">0-10s</text>
            <rect x="80" y="245" width="140" height="60" fill="#10b981" rx="5"/>
            <text x="150" y="280" font-family="Arial" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">10-20s</text>
            <rect x="80" y="330" width="140" height="60" fill="#f59e0b" rx="5"/>
            <text x="150" y="365" font-family="Arial" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">20-30s</text>
            <rect x="80" y="415" width="140" height="100" fill="#6366f1" rx="5"/>
            <text x="150" y="470" font-family="Arial" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">30-60s</text>
            <rect x="80" y="540" width="140" height="100" fill="#ec4899" rx="5"/>
            <text x="150" y="595" font-family="Arial" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">60-90s</text>
            <text x="150" y="675" font-family="Arial" font-size="15" fill="#ffd700" text-anchor="middle">~90 sec</text>
            <text x="150" y="695" font-family="Arial" font-size="15" fill="#ffd700" text-anchor="middle">total</text>
            <rect x="280" y="160" width="770" height="60" fill="#10b981" rx="5"/>
            <text x="305" y="185" font-family="Arial" font-size="17" font-weight="bold" fill="#ffffff">READ 1: stem + trigger word</text>
            <text x="305" y="210" font-family="Arial" font-size="14" fill="#ffffff">"first" / "priority" / "best" / "needs further teaching" / "expected outcome"</text>
            <rect x="280" y="245" width="770" height="60" fill="#10b981" rx="5"/>
            <text x="305" y="270" font-family="Arial" font-size="17" font-weight="bold" fill="#ffffff">READ 2: population + stable vs unstable</text>
            <text x="305" y="295" font-family="Arial" font-size="14" fill="#ffffff">Underline mentally: new, sudden, worsening, scheduled, stable, baseline</text>
            <rect x="280" y="330" width="770" height="60" fill="#f59e0b" rx="5"/>
            <text x="305" y="355" font-family="Arial" font-size="17" font-weight="bold" fill="#ffffff">RUN ALGORITHM: ABCs --&gt; Maslow --&gt; Acute --&gt; ADPIE</text>
            <text x="305" y="380" font-family="Arial" font-size="14" fill="#ffffff">Stop at the first decisive step. Don't overthink. Don't keep running steps.</text>
            <rect x="280" y="415" width="770" height="100" fill="#6366f1" rx="5"/>
            <text x="305" y="445" font-family="Arial" font-size="17" font-weight="bold" fill="#ffffff">ELIMINATE: cross off wrong options</text>
            <text x="305" y="470" font-family="Arial" font-size="14" fill="#ffffff">- Unsafe (med error, scope violation)</text>
            <text x="305" y="490" font-family="Arial" font-size="14" fill="#ffffff">- Requires unwritten order</text>
            <text x="305" y="510" font-family="Arial" font-size="14" fill="#ffffff">- Intervenes before assessing (unless ABC override)</text>
            <rect x="280" y="540" width="770" height="100" fill="#ec4899" rx="5"/>
            <text x="305" y="570" font-family="Arial" font-size="17" font-weight="bold" fill="#ffffff">CONFIRM: does answer match the trigger word?</text>
            <text x="305" y="595" font-family="Arial" font-size="14" fill="#ffffff">- "needs further teaching" --&gt; pick WRONG statement</text>
            <text x="305" y="615" font-family="Arial" font-size="14" fill="#ffffff">- "best response" --&gt; therapeutic (reflect, open-ended)</text>
            <text x="305" y="635" font-family="Arial" font-size="14" fill="#ffffff">- "first" --&gt; ABC winner (or assess if no ABC threat)</text>
            <rect x="280" y="660" width="770" height="320" fill="#ffd700" rx="10"/>
            <text x="665" y="700" font-family="Arial" font-size="22" font-weight="bold" fill="#1a1a2e" text-anchor="middle">FINAL RULES OF THE ROAD</text>
            <line x1="450" y1="713" x2="880" y2="713" stroke="#1a1a2e" stroke-width="2"/>
            <text x="305" y="745" font-family="Arial" font-size="16" font-weight="bold" fill="#1a1a2e">1. ABCs always come first. Airway &gt; Breathing &gt; Circulation.</text>
            <text x="305" y="775" font-family="Arial" font-size="16" font-weight="bold" fill="#1a1a2e">2. Assess before intervene -- unless ABCs are failing.</text>
            <text x="305" y="805" font-family="Arial" font-size="16" font-weight="bold" fill="#1a1a2e">3. New/acute beats chronic/stable.</text>
            <text x="305" y="835" font-family="Arial" font-size="16" font-weight="bold" fill="#1a1a2e">4. Delegate stable + routine. RN keeps unstable + teaching.</text>
            <text x="305" y="865" font-family="Arial" font-size="16" font-weight="bold" fill="#1a1a2e">5. Therapeutic = reflect feelings, open-ended, no advice.</text>
            <text x="305" y="895" font-family="Arial" font-size="16" font-weight="bold" fill="#1a1a2e">6. Document objectively, sign every entry, never alter.</text>
            <text x="305" y="925" font-family="Arial" font-size="16" font-weight="bold" fill="#1a1a2e">7. Autonomy wins for the competent adult patient.</text>
            <text x="665" y="965" font-family="Arial" font-size="17" font-style="italic" fill="#1a1a2e" text-anchor="middle">Trust the algorithm. Move on. You've got this.</text>
          </svg>`,
          caption: "90 seconds per question: 20 to read, 10 to run the algorithm, 30 to eliminate, 30 to confirm. Trust the process."
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
            lessons: 12, duration: 180, progress: 0, category: 'nclex-foundations',
            lessonList: FUND_PLACEHOLDER_LESSONS,
        },
        {
            id: 'nclex-pharmacology',
            title: 'Pharmacology for the NCLEX',
            author: 'Synthesis Learning',
            description: 'High-yield drug classes, prefixes/suffixes that tell you the class, lab values, and the side effects NCLEX always tests.',
            lessons: 3, duration: 45, progress: 0, category: 'nclex-foundations',
            lessonList: [
{
    id: "nclex-pharmacology-lesson-1",
    title: "Drug Naming Suffixes That Decode the Class",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "The Pharmacology Cheat Code",
        content: `**Generic names** end in suffixes that reveal the **drug class**, mechanism, and side-effect profile. **Brand names** (capitalized) are marketing labels and vary by country — generics are universal. On the **NCLEX**, recognizing a suffix instantly tells you what the drug does, what to monitor, and what to teach.\n\nExample: a patient on **lisinopril** — the **-pril** suffix flags it as an **ACE inhibitor**. You immediately know: monitor **potassium** (hyperkalemia risk), watch for **dry cough** and **angioedema**, and avoid in pregnancy. No memorization of individual drugs needed — the suffix is the key. Master these 12 suffixes and you decode hundreds of medications.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="60" text-anchor="middle" fill="#ffd700" font-size="34" font-weight="bold">Generic Suffix = Drug Class</text><rect x="80" y="110" width="940" height="120" fill="#6366f1" rx="10"/><text x="550" y="155" text-anchor="middle" fill="#ffffff" font-size="26" font-weight="bold">lisinopril</text><text x="550" y="195" text-anchor="middle" fill="#ffd700" font-size="22">-pril → ACE inhibitor</text><rect x="80" y="260" width="940" height="120" fill="#10b981" rx="10"/><text x="550" y="305" text-anchor="middle" fill="#ffffff" font-size="26" font-weight="bold">metoprolol</text><text x="550" y="345" text-anchor="middle" fill="#ffd700" font-size="22">-olol → Beta-blocker</text><rect x="80" y="410" width="940" height="120" fill="#f59e0b" rx="10"/><text x="550" y="455" text-anchor="middle" fill="#1a1a2e" font-size="26" font-weight="bold">atorvastatin</text><text x="550" y="495" text-anchor="middle" fill="#1a1a2e" font-size="22">-statin → HMG-CoA reductase inhibitor</text><rect x="80" y="560" width="940" height="120" fill="#ec4899" rx="10"/><text x="550" y="605" text-anchor="middle" fill="#ffffff" font-size="26" font-weight="bold">omeprazole</text><text x="550" y="645" text-anchor="middle" fill="#ffd700" font-size="22">-prazole → Proton pump inhibitor</text><rect x="80" y="710" width="940" height="120" fill="#8b5cf6" rx="10"/><text x="550" y="755" text-anchor="middle" fill="#ffffff" font-size="26" font-weight="bold">ciprofloxacin</text><text x="550" y="795" text-anchor="middle" fill="#ffd700" font-size="22">-floxacin → Fluoroquinolone antibiotic</text><text x="550" y="900" text-anchor="middle" fill="#ffffff" font-size="22">Know the suffix → know the drug</text><text x="550" y="940" text-anchor="middle" fill="#888" font-size="18">Class reveals mechanism, monitoring, and patient teaching</text></svg>`,
          caption: "Suffix-based decoding unlocks pharmacology"
        }
      },
      {
        type: "concept",
        title: "The 12 Must-Know Suffixes",
        content: `Memorize these **12 suffixes** — they cover the highest-yield NCLEX drug classes:\n\n**Cardiovascular:** **-pril** = ACE inhibitor (lisinopril); **-sartan** = ARB (losartan); **-olol** = beta-blocker (metoprolol); **-dipine** = calcium channel blocker (amlodipine); **-statin** = HMG-CoA reductase inhibitor (atorvastatin).\n\n**GI:** **-prazole** = proton pump inhibitor (omeprazole); **-tidine** = H2 blocker (famotidine).\n\n**Anti-infectives:** **-azole** = antifungal (fluconazole); **-mycin** = aminoglycoside or glycopeptide antibiotic (gentamicin, vancomycin); **-floxacin** = fluoroquinolone (ciprofloxacin).\n\n**Other:** **-caine** = local anesthetic (lidocaine); **-ase** = thrombolytic enzyme (alteplase, "clot-buster").\n\nWhen you see an unfamiliar drug, **scan the suffix first** — it tells you the action and the priority assessments.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="50" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold">The 12 Suffix Decoder</text><rect x="40" y="90" width="340" height="50" fill="#6366f1" rx="6"/><text x="60" y="123" fill="#ffffff" font-size="20" font-weight="bold">-pril</text><text x="380" y="123" fill="#ffd700" font-size="18">ACE inhibitor</text><rect x="40" y="150" width="340" height="50" fill="#6366f1" rx="6"/><text x="60" y="183" fill="#ffffff" font-size="20" font-weight="bold">-sartan</text><text x="380" y="183" fill="#ffd700" font-size="18">ARB</text><rect x="40" y="210" width="340" height="50" fill="#6366f1" rx="6"/><text x="60" y="243" fill="#ffffff" font-size="20" font-weight="bold">-olol</text><text x="380" y="243" fill="#ffd700" font-size="18">Beta-blocker</text><rect x="40" y="270" width="340" height="50" fill="#6366f1" rx="6"/><text x="60" y="303" fill="#ffffff" font-size="20" font-weight="bold">-dipine</text><text x="380" y="303" fill="#ffd700" font-size="18">Calcium channel blocker</text><rect x="40" y="330" width="340" height="50" fill="#f59e0b" rx="6"/><text x="60" y="363" fill="#1a1a2e" font-size="20" font-weight="bold">-statin</text><text x="380" y="363" fill="#1a1a2e" font-size="18">HMG-CoA inhibitor</text><rect x="40" y="390" width="340" height="50" fill="#ec4899" rx="6"/><text x="60" y="423" fill="#ffffff" font-size="20" font-weight="bold">-prazole</text><text x="380" y="423" fill="#ffd700" font-size="18">PPI</text><rect x="40" y="450" width="340" height="50" fill="#ec4899" rx="6"/><text x="60" y="483" fill="#ffffff" font-size="20" font-weight="bold">-tidine</text><text x="380" y="483" fill="#ffd700" font-size="18">H2 blocker</text><rect x="40" y="510" width="340" height="50" fill="#8b5cf6" rx="6"/><text x="60" y="543" fill="#ffffff" font-size="20" font-weight="bold">-azole</text><text x="380" y="543" fill="#ffd700" font-size="18">Antifungal</text><rect x="40" y="570" width="340" height="50" fill="#8b5cf6" rx="6"/><text x="60" y="603" fill="#ffffff" font-size="20" font-weight="bold">-mycin</text><text x="380" y="603" fill="#ffd700" font-size="18">Aminoglycoside/glycopeptide</text><rect x="40" y="630" width="340" height="50" fill="#8b5cf6" rx="6"/><text x="60" y="663" fill="#ffffff" font-size="20" font-weight="bold">-floxacin</text><text x="380" y="663" fill="#ffd700" font-size="18">Fluoroquinolone</text><rect x="40" y="690" width="340" height="50" fill="#10b981" rx="6"/><text x="60" y="723" fill="#ffffff" font-size="20" font-weight="bold">-caine</text><text x="380" y="723" fill="#ffd700" font-size="18">Local anesthetic</text><rect x="40" y="750" width="340" height="50" fill="#ef4444" rx="6"/><text x="60" y="783" fill="#ffffff" font-size="20" font-weight="bold">-ase</text><text x="380" y="783" fill="#ffd700" font-size="18">Thrombolytic</text><text x="780" y="430" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">Color key</text><rect x="620" y="460" width="40" height="30" fill="#6366f1"/><text x="675" y="482" fill="#ffffff" font-size="16">CV drugs</text><rect x="620" y="500" width="40" height="30" fill="#ec4899"/><text x="675" y="522" fill="#ffffff" font-size="16">GI drugs</text><rect x="620" y="540" width="40" height="30" fill="#8b5cf6"/><text x="675" y="562" fill="#ffffff" font-size="16">Anti-infectives</text><rect x="620" y="580" width="40" height="30" fill="#10b981"/><text x="675" y="602" fill="#ffffff" font-size="16">Anesthetic</text><rect x="620" y="620" width="40" height="30" fill="#ef4444"/><text x="675" y="642" fill="#ffffff" font-size="16">Clot-buster</text><text x="550" y="900" text-anchor="middle" fill="#ffffff" font-size="20">Scan the suffix BEFORE you give the drug</text></svg>`,
          caption: "12 high-yield suffixes by body system"
        }
      },
      {
        type: "example",
        title: "Decoding an Unknown Drug Order",
        content: `**Scenario:** A new admission's MAR lists **valsartan 80 mg PO daily**, **nebivolol 5 mg PO daily**, and **rosuvastatin 20 mg PO at bedtime**. You've never given these specific drugs. What do you do?\n\n**Decode the suffixes:**\n- **valsartan** → **-sartan** → **ARB**. Monitor **BP**, **potassium** (hyperkalemia), **renal function**. Hold for SBP <100.\n- **nebivolol** → **-olol** → **beta-blocker**. Check **apical pulse for 1 full minute** — hold if HR <60. Monitor BP.\n- **rosuvastatin** → **-statin**. Monitor **LFTs** and watch for **muscle pain** (rhabdomyolysis). Give at **bedtime** (cholesterol synthesis peaks at night).\n\nWithout looking up a single drug, you know the **assessments, hold parameters, and patient teaching**. That is the power of the suffix system.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="50" text-anchor="middle" fill="#ffd700" font-size="30" font-weight="bold">Decode Before You Give</text><rect x="60" y="100" width="980" height="280" fill="#6366f1" rx="10"/><text x="80" y="140" fill="#ffd700" font-size="24" font-weight="bold">valsartan → -sartan → ARB</text><text x="80" y="180" fill="#ffffff" font-size="18">Assess: BP, K+, BUN/creatinine</text><text x="80" y="215" fill="#ffffff" font-size="18">Hold: SBP &lt; 100 mmHg</text><text x="80" y="250" fill="#ffffff" font-size="18">Teach: No salt substitutes (contain K+)</text><text x="80" y="285" fill="#ffffff" font-size="18">Avoid: pregnancy (teratogenic)</text><text x="80" y="335" fill="#ffd700" font-size="18">Red flag: angioedema → call provider</text><rect x="60" y="410" width="980" height="280" fill="#10b981" rx="10"/><text x="80" y="450" fill="#1a1a2e" font-size="24" font-weight="bold">nebivolol → -olol → Beta-blocker</text><text x="80" y="490" fill="#ffffff" font-size="18">Assess: Apical pulse x 1 full min, BP</text><text x="80" y="525" fill="#ffffff" font-size="18">Hold: HR &lt; 60 or SBP &lt; 100</text><text x="80" y="560" fill="#ffffff" font-size="18">Teach: Do NOT stop abruptly (rebound HTN)</text><text x="80" y="595" fill="#ffffff" font-size="18">Caution: asthma, diabetes (masks hypoglycemia)</text><text x="80" y="645" fill="#1a1a2e" font-size="18" font-weight="bold">Red flag: bradycardia, wheezing</text><rect x="60" y="720" width="980" height="280" fill="#f59e0b" rx="10"/><text x="80" y="760" fill="#1a1a2e" font-size="24" font-weight="bold">rosuvastatin → -statin → HMG-CoA</text><text x="80" y="800" fill="#1a1a2e" font-size="18">Assess: LFTs at baseline + periodically</text><text x="80" y="835" fill="#1a1a2e" font-size="18">Teach: Take at bedtime, avoid grapefruit</text><text x="80" y="870" fill="#1a1a2e" font-size="18">Report: unexplained muscle pain (rhabdo)</text><text x="80" y="905" fill="#1a1a2e" font-size="18">Lab: CK if myalgia present</text><text x="80" y="955" fill="#1a1a2e" font-size="18" font-weight="bold">Red flag: dark urine + muscle pain</text></svg>`,
          caption: "Three unknown drugs decoded in seconds"
        }
      },
      {
        type: "quiz",
        title: "Identify the Class",
        content: `Test your suffix recognition.`,
        question: "A patient is prescribed **enalapril**. Based on the suffix, what is the priority lab to monitor and the classic side effect to teach about?",
        options: [
          { text: "Monitor INR; teach about bleeding gums", correct: false },
          { text: "Monitor potassium; teach about persistent dry cough", correct: true },
          { text: "Monitor liver enzymes; teach about muscle pain", correct: false },
          { text: "Monitor magnesium; teach about prolonged QT", correct: false }
        ],
        explanation: "**Enalapril** ends in **-pril** = **ACE inhibitor**. ACE inhibitors block angiotensin II formation, reducing aldosterone and causing **potassium retention** (hyperkalemia risk — monitor K+). They also block bradykinin breakdown, causing the hallmark **dry, hacking cough** in ~10% of patients. INR is for warfarin; LFTs/muscle pain are for statins; QT prolongation is more associated with antiarrhythmics and certain antibiotics.",
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="60" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold">enalapril = -pril = ACE-I</text><circle cx="550" cy="350" r="180" fill="none" stroke="#6366f1" stroke-width="6"/><text x="550" y="330" text-anchor="middle" fill="#ffffff" font-size="26" font-weight="bold">ACE Inhibitor</text><text x="550" y="370" text-anchor="middle" fill="#ffd700" font-size="22">Blocks Angiotensin II</text><rect x="100" y="600" width="420" height="180" fill="#10b981" rx="10"/><text x="310" y="645" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">Monitor</text><text x="310" y="690" text-anchor="middle" fill="#ffffff" font-size="20">Potassium (↑K+)</text><text x="310" y="725" text-anchor="middle" fill="#ffffff" font-size="20">BP, BUN, creatinine</text><text x="310" y="760" text-anchor="middle" fill="#ffffff" font-size="18">No salt substitutes</text><rect x="580" y="600" width="420" height="180" fill="#ef4444" rx="10"/><text x="790" y="645" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">Teach about</text><text x="790" y="690" text-anchor="middle" fill="#ffffff" font-size="20">Dry hacking cough</text><text x="790" y="725" text-anchor="middle" fill="#ffffff" font-size="20">Angioedema = STOP</text><text x="790" y="760" text-anchor="middle" fill="#ffffff" font-size="18">First-dose hypotension</text><text x="550" y="880" text-anchor="middle" fill="#ffd700" font-size="20">Avoid in pregnancy (Category D/X)</text><text x="550" y="930" text-anchor="middle" fill="#888" font-size="18">Suffix → class → assessments</text></svg>`,
          caption: "ACE inhibitor priority assessments"
        }
      },
      {
        type: "application",
        title: "Suffix Triage on the Floor",
        content: `**Clinical workflow:** Before your med pass, scan the MAR and **circle every suffix**. Use a 3-step triage:\n\n**Step 1 — Identify class.** -olol, -pril, -sartan, -dipine all lower BP/HR. Stack the assessments: one set of vitals covers all of them.\n\n**Step 2 — Predict interactions.** A patient on **lisinopril + spironolactone + a salt substitute** = triple potassium load → check K+ before giving. A patient on **simvastatin + clarithromycin** = CYP3A4 conflict → rhabdo risk.\n\n**Step 3 — Time the doses.** **-statin** at bedtime; **-prazole** 30 min before breakfast; **-floxacin** away from antacids/dairy by 2 hours; **-mycin** (vancomycin) needs trough drawn **30 min before** the next dose.\n\nThe **suffix is a triage tool** — it lets you cluster assessments and catch errors before they reach the patient.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="50" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold">3-Step Suffix Triage</text><rect x="80" y="100" width="940" height="240" fill="#6366f1" rx="10"/><text x="110" y="145" fill="#ffd700" font-size="24" font-weight="bold">STEP 1: Identify class</text><text x="110" y="190" fill="#ffffff" font-size="20">Circle every suffix on the MAR</text><text x="110" y="230" fill="#ffffff" font-size="18">-olol + -pril + -sartan + -dipine → all lower BP/HR</text><text x="110" y="270" fill="#ffffff" font-size="18">Cluster vitals once, not 4 times</text><text x="110" y="310" fill="#ffd700" font-size="18">Save time, catch trends</text><rect x="80" y="370" width="940" height="240" fill="#f59e0b" rx="10"/><text x="110" y="415" fill="#1a1a2e" font-size="24" font-weight="bold">STEP 2: Predict interactions</text><text x="110" y="460" fill="#1a1a2e" font-size="20">-pril + K-sparing diuretic + salt sub = ↑↑↑ K+</text><text x="110" y="500" fill="#1a1a2e" font-size="20">-statin + -mycin (clarithro) = rhabdo risk</text><text x="110" y="540" fill="#1a1a2e" font-size="20">-floxacin + dairy/antacid = chelation, no absorption</text><text x="110" y="580" fill="#1a1a2e" font-size="18" font-weight="bold">Check labs/timing BEFORE pouring</text><rect x="80" y="640" width="940" height="320" fill="#10b981" rx="10"/><text x="110" y="685" fill="#ffffff" font-size="24" font-weight="bold">STEP 3: Time the dose</text><text x="110" y="730" fill="#ffffff" font-size="18">-statin → bedtime (cholesterol synth peaks at night)</text><text x="110" y="765" fill="#ffffff" font-size="18">-prazole → 30 min before breakfast</text><text x="110" y="800" fill="#ffffff" font-size="18">-floxacin → 2 h before/6 h after antacid or dairy</text><text x="110" y="835" fill="#ffffff" font-size="18">vancomycin trough → 30 min before next dose</text><text x="110" y="870" fill="#ffffff" font-size="18">-olol → check apical x 1 min FIRST</text><text x="110" y="910" fill="#ffd700" font-size="18">Right time = right effect = right safety</text></svg>`,
          caption: "Suffix triage prevents med errors"
        }
      }
    ]
  },
  {
    id: "nclex-pharmacology-lesson-2",
    title: "The Six Rights of Med Admin + ISMP High-Alert List",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "Six Rights = Six Safety Gates",
        content: `Every medication administration must pass **six independent safety gates**. Skipping one is how patients die.\n\nThe **Six Rights**: **right patient, right drug, right dose, right route, right time, right documentation**. Some texts add right reason, right response, and right to refuse — but the core six are what NCLEX tests.\n\nLayered on top is the **ISMP (Institute for Safe Medication Practices) High-Alert List** — drugs that cause **disproportionate harm** when given in error. These require an **independent double-check** by a second nurse. Examples: **insulin, heparin, opioids, neuromuscular blockers, chemotherapy, concentrated electrolytes (KCl)**.\n\nThe Six Rights catch routine errors. The High-Alert list catches catastrophic ones. **You need both — every dose, every time.**`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="60" text-anchor="middle" fill="#ffd700" font-size="34" font-weight="bold">Six Rights of Med Admin</text><rect x="80" y="120" width="940" height="80" fill="#6366f1" rx="10"/><text x="120" y="170" fill="#ffd700" font-size="28" font-weight="bold">1.</text><text x="180" y="170" fill="#ffffff" font-size="24">Right PATIENT — 2 identifiers</text><rect x="80" y="220" width="940" height="80" fill="#10b981" rx="10"/><text x="120" y="270" fill="#ffd700" font-size="28" font-weight="bold">2.</text><text x="180" y="270" fill="#ffffff" font-size="24">Right DRUG — check label x3</text><rect x="80" y="320" width="940" height="80" fill="#f59e0b" rx="10"/><text x="120" y="370" fill="#1a1a2e" font-size="28" font-weight="bold">3.</text><text x="180" y="370" fill="#1a1a2e" font-size="24">Right DOSE — verify math, weight-based</text><rect x="80" y="420" width="940" height="80" fill="#ec4899" rx="10"/><text x="120" y="470" fill="#ffd700" font-size="28" font-weight="bold">4.</text><text x="180" y="470" fill="#ffffff" font-size="24">Right ROUTE — PO, IV, IM, SubQ</text><rect x="80" y="520" width="940" height="80" fill="#8b5cf6" rx="10"/><text x="120" y="570" fill="#ffd700" font-size="28" font-weight="bold">5.</text><text x="180" y="570" fill="#ffffff" font-size="24">Right TIME — within 30 min window</text><rect x="80" y="620" width="940" height="80" fill="#0ea5e9" rx="10"/><text x="120" y="670" fill="#ffd700" font-size="28" font-weight="bold">6.</text><text x="180" y="670" fill="#ffffff" font-size="24">Right DOCUMENTATION — after giving</text><rect x="80" y="740" width="940" height="240" fill="#ef4444" rx="10"/><text x="550" y="790" text-anchor="middle" fill="#ffffff" font-size="26" font-weight="bold">+ ISMP High-Alert Drugs</text><text x="550" y="830" text-anchor="middle" fill="#ffd700" font-size="20">Insulin · Heparin · Opioids</text><text x="550" y="870" text-anchor="middle" fill="#ffd700" font-size="20">Neuromuscular blockers · Chemo</text><text x="550" y="910" text-anchor="middle" fill="#ffd700" font-size="20">Concentrated KCl</text><text x="550" y="950" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">→ Independent double-check required</text></svg>`,
          caption: "Six Rights plus the High-Alert overlay"
        }
      },
      {
        type: "concept",
        title: "Each Right in Practice",
        content: `**Right patient:** Use **two identifiers** — typically full **name + date of birth** (or MRN). **Never** the room number — patients move. Scan the wristband barcode if BCMA is available.\n\n**Right drug:** **Check the label three times** — pulling from drawer, preparing the dose, at the bedside. Compare to MAR. Beware **look-alike/sound-alike** drugs (hydroxyzine vs hydralazine).\n\n**Right dose:** Verify the **calculation**. Weight-based pediatric doses, renal-adjusted antibiotics, and unit conversions are landmines. Two nurses verify **insulin units** and **heparin units**.\n\n**Right route:** PO ≠ IV. **Some drugs are route-specific**: never give PO meds IV; never push KCl IV bolus.\n\n**Right time:** Most schedules allow ±30 min; **time-critical** drugs (insulin, antibiotics, anticoagulants) are tighter.\n\n**Right documentation:** Chart **after** administration, never before. Document refusal, hold reasons, and patient response.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="50" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold">Six Rights — How To</text><rect x="40" y="100" width="510" height="200" fill="#6366f1" rx="10"/><text x="295" y="140" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">Right Patient</text><text x="60" y="180" fill="#ffffff" font-size="16">2 identifiers: name + DOB</text><text x="60" y="210" fill="#ffffff" font-size="16">Scan wristband (BCMA)</text><text x="60" y="240" fill="#ef4444" font-size="16" font-weight="bold">NEVER use room number</text><text x="60" y="275" fill="#ffffff" font-size="16">Patients move; rooms don't</text><rect x="570" y="100" width="490" height="200" fill="#10b981" rx="10"/><text x="815" y="140" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">Right Drug</text><text x="590" y="180" fill="#ffffff" font-size="16">Check label x3:</text><text x="610" y="210" fill="#ffd700" font-size="16">1. Pulling from drawer</text><text x="610" y="240" fill="#ffd700" font-size="16">2. Preparing dose</text><text x="610" y="270" fill="#ffd700" font-size="16">3. At the bedside</text><rect x="40" y="320" width="510" height="200" fill="#f59e0b" rx="10"/><text x="295" y="360" text-anchor="middle" fill="#1a1a2e" font-size="22" font-weight="bold">Right Dose</text><text x="60" y="400" fill="#1a1a2e" font-size="16">Verify math, weight-based</text><text x="60" y="430" fill="#1a1a2e" font-size="16">Renal/hepatic adjustments</text><text x="60" y="460" fill="#1a1a2e" font-size="16" font-weight="bold">Double-check: insulin, heparin</text><text x="60" y="495" fill="#1a1a2e" font-size="16">Question doses > usual range</text><rect x="570" y="320" width="490" height="200" fill="#ec4899" rx="10"/><text x="815" y="360" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">Right Route</text><text x="590" y="400" fill="#ffffff" font-size="16">PO ≠ IV ≠ IM ≠ SubQ</text><text x="590" y="430" fill="#ffffff" font-size="16">Crushable? Enteric-coated?</text><text x="590" y="460" fill="#ffd700" font-size="16" font-weight="bold">Never IV push KCl</text><text x="590" y="495" fill="#ffffff" font-size="16">Check compatibility</text><rect x="40" y="540" width="510" height="200" fill="#8b5cf6" rx="10"/><text x="295" y="580" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">Right Time</text><text x="60" y="620" fill="#ffffff" font-size="16">Standard: ± 30 min window</text><text x="60" y="650" fill="#ffffff" font-size="16">Time-critical: tighter</text><text x="60" y="680" fill="#ffd700" font-size="16">Insulin, antibiotics, anticoag</text><text x="60" y="715" fill="#ffffff" font-size="16">PRNs: respect interval</text><rect x="570" y="540" width="490" height="200" fill="#0ea5e9" rx="10"/><text x="815" y="580" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">Right Documentation</text><text x="590" y="620" fill="#ffffff" font-size="16">AFTER giving, never before</text><text x="590" y="650" fill="#ffffff" font-size="16">Site (injections), response</text><text x="590" y="680" fill="#ffd700" font-size="16">Refusal? Held? Reason?</text><text x="590" y="715" fill="#ffffff" font-size="16">PRN: pre/post pain score</text><rect x="80" y="780" width="940" height="200" fill="#ef4444" rx="10"/><text x="550" y="830" text-anchor="middle" fill="#ffffff" font-size="24" font-weight="bold">High-Alert: Independent Double-Check</text><text x="550" y="875" text-anchor="middle" fill="#ffd700" font-size="20">Insulin · Heparin · Opioids (PCA)</text><text x="550" y="915" text-anchor="middle" fill="#ffd700" font-size="20">Neuromuscular blockers · Chemo · KCl</text><text x="550" y="955" text-anchor="middle" fill="#ffffff" font-size="18">Two nurses verify INDEPENDENTLY, then sign</text></svg>`,
          caption: "Practical steps for each right"
        }
      },
      {
        type: "example",
        title: "A Heparin Drip Setup",
        content: `**Scenario:** Provider orders **heparin 25,000 units in 250 mL D5W, infuse at 18 units/kg/hr**. Patient weighs **70 kg**.\n\n**Right patient:** Confirm with **wristband (name + DOB)** — not "Mr. Smith in 412." Patient says his name.\n\n**Right drug:** Heparin is **ISMP high-alert**. Check the vial label **three times**. Look for "heparin" vs "Hespan" (look-alike).\n\n**Right dose:** Calculate: 70 kg × 18 units/kg/hr = **1,260 units/hr**. Concentration = 25,000 units / 250 mL = 100 units/mL. Rate = 1,260 ÷ 100 = **12.6 mL/hr**.\n\n**Independent double-check:** A second RN independently calculates the same dose and verifies the pump settings — without looking at yours. Both sign.\n\n**Right route:** IV infusion via dedicated pump line.\n\n**Right time:** Start now; draw **aPTT 6 h after initiation** and adjust per protocol.\n\n**Right documentation:** Pump rate, start time, baseline aPTT, double-check name.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="50" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold">Heparin Drip: Six Rights + DC</text><rect x="80" y="100" width="940" height="160" fill="#6366f1" rx="10"/><text x="110" y="140" fill="#ffd700" font-size="22" font-weight="bold">The Order</text><text x="110" y="180" fill="#ffffff" font-size="18">Heparin 25,000 units / 250 mL D5W</text><text x="110" y="215" fill="#ffffff" font-size="18">Infuse 18 units/kg/hr · Patient 70 kg</text><text x="110" y="245" fill="#ffd700" font-size="18">ISMP HIGH-ALERT → independent double-check</text><rect x="80" y="280" width="940" height="220" fill="#10b981" rx="10"/><text x="110" y="320" fill="#ffffff" font-size="22" font-weight="bold">The Math</text><text x="110" y="360" fill="#ffffff" font-size="18">Dose: 70 kg × 18 units/kg/hr = 1,260 units/hr</text><text x="110" y="395" fill="#ffffff" font-size="18">Concentration: 25,000 ÷ 250 = 100 units/mL</text><text x="110" y="430" fill="#ffffff" font-size="18">Rate: 1,260 ÷ 100 = 12.6 mL/hr</text><text x="110" y="470" fill="#ffd700" font-size="20" font-weight="bold">Pump setting: 12.6 mL/hr</text><rect x="80" y="520" width="940" height="240" fill="#f59e0b" rx="10"/><text x="110" y="560" fill="#1a1a2e" font-size="22" font-weight="bold">Independent Double-Check</text><text x="110" y="600" fill="#1a1a2e" font-size="18">RN #2 calculates ALONE (no peeking)</text><text x="110" y="635" fill="#1a1a2e" font-size="18">RN #2 verifies pump screen matches</text><text x="110" y="670" fill="#1a1a2e" font-size="18">Both RNs sign the MAR / chart</text><text x="110" y="710" fill="#1a1a2e" font-size="18" font-weight="bold">If numbers disagree → STOP, recheck</text><rect x="80" y="780" width="940" height="200" fill="#ec4899" rx="10"/><text x="110" y="820" fill="#ffd700" font-size="22" font-weight="bold">Monitoring</text><text x="110" y="860" fill="#ffffff" font-size="18">Baseline aPTT before start</text><text x="110" y="895" fill="#ffffff" font-size="18">Repeat aPTT 6 hours after init</text><text x="110" y="930" fill="#ffffff" font-size="18">Target aPTT: 1.5–2.5 × control</text><text x="110" y="965" fill="#ffd700" font-size="18" font-weight="bold">Antidote ready: protamine sulfate</text></svg>`,
          caption: "High-alert workflow in action"
        }
      },
      {
        type: "quiz",
        title: "Identify the Error",
        content: `Apply the Six Rights to a real bedside scenario.`,
        question: "A nurse enters a room, says \"Hi Mr. Johnson, I have your morning insulin,\" and the patient nods. The nurse scans the patient's wristband, the MAR, and gives **10 units regular insulin SubQ** without a second nurse check. Which Right or safety step was **MOST violated**?",
        options: [
          { text: "Right patient — the nurse never used two identifiers", correct: false },
          { text: "Right time — insulin must be given exactly on the hour", correct: false },
          { text: "Insulin requires an independent double-check (ISMP high-alert) before administration", correct: true },
          { text: "Right route — insulin should be given IV, not SubQ", correct: false }
        ],
        explanation: "**Insulin** is on the **ISMP High-Alert Medication List** and requires an **independent double-check** by a second nurse before administration — dose, concentration, pump/syringe — to catch potentially fatal dosing errors. The nurse did use BCMA scanning (wristband + MAR), which satisfies two-identifier verification. Right time has a window, not exactly on the hour. Regular insulin is appropriately given SubQ (IV is reserved for specific situations like DKA per protocol). The missing safety step is the **independent double-check** required for high-alert drugs.",
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="60" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold">Independent Double-Check</text><rect x="80" y="120" width="940" height="160" fill="#ef4444" rx="10"/><text x="550" y="170" text-anchor="middle" fill="#ffffff" font-size="24" font-weight="bold">Why insulin needs 2 RNs</text><text x="550" y="215" text-anchor="middle" fill="#ffd700" font-size="20">Concentrated · narrow margin</text><text x="550" y="250" text-anchor="middle" fill="#ffd700" font-size="20">10x errors can be fatal</text><rect x="80" y="320" width="450" height="280" fill="#6366f1" rx="10"/><text x="305" y="360" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">RN #1</text><text x="100" y="400" fill="#ffffff" font-size="18">Reads order</text><text x="100" y="435" fill="#ffffff" font-size="18">Draws up dose</text><text x="100" y="470" fill="#ffffff" font-size="18">Sets pump rate</text><text x="100" y="510" fill="#ffd700" font-size="16">Then asks RN #2</text><text x="100" y="545" fill="#ffffff" font-size="16">"Independent check, please"</text><rect x="570" y="320" width="450" height="280" fill="#10b981" rx="10"/><text x="795" y="360" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">RN #2 (independent)</text><text x="590" y="400" fill="#ffffff" font-size="18">Reads same order</text><text x="590" y="435" fill="#ffffff" font-size="18">Calculates ALONE</text><text x="590" y="470" fill="#ffffff" font-size="18">Verifies syringe + label</text><text x="590" y="510" fill="#ffd700" font-size="16" font-weight="bold">No "peeking" at RN #1</text><text x="590" y="545" fill="#ffffff" font-size="16">Both sign MAR</text><rect x="80" y="640" width="940" height="180" fill="#f59e0b" rx="10"/><text x="550" y="685" text-anchor="middle" fill="#1a1a2e" font-size="22" font-weight="bold">ISMP High-Alert (always double-check)</text><text x="550" y="725" text-anchor="middle" fill="#1a1a2e" font-size="18">Insulin · Heparin · Opioids (PCA pumps)</text><text x="550" y="760" text-anchor="middle" fill="#1a1a2e" font-size="18">Neuromuscular blockers · Chemotherapy</text><text x="550" y="795" text-anchor="middle" fill="#1a1a2e" font-size="18">Concentrated KCl · Magnesium sulfate</text><text x="550" y="900" text-anchor="middle" fill="#ffd700" font-size="20">Two minds, one safe dose</text></svg>`,
          caption: "Independent double-check protocol"
        }
      },
      {
        type: "application",
        title: "Building the Habit",
        content: `**Make the Six Rights automatic** — they should fire without conscious thought. A practical checklist for every dose:\n\n**Before leaving the med room:**\n1. Read the **MAR**, then the **label** (1st label check).\n2. **Calculate** any non-standard dose; flag high-alert drugs.\n3. Pour/draw up; **2nd label check** before putting the vial down.\n\n**At the bedside:**\n4. **Two identifiers** — ask the patient to state name + DOB.\n5. **3rd label check** at the bedside (or BCMA scan).\n6. **Independent double-check** for insulin/heparin/opioid PCAs/chemo/neuromuscular blockers.\n7. Assess pre-administration parameters (HR for beta-blockers, BP for antihypertensives, blood glucose for insulin, pain score for opioids).\n8. **Administer**, then **document immediately** with response.\n\n**Right to refuse** is real — document refusal, notify the provider, and never force. Errors caught **before** administration are *near-misses* — still report them so the system learns.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="50" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold">Bedside Med Pass Checklist</text><rect x="80" y="100" width="940" height="350" fill="#6366f1" rx="10"/><text x="110" y="145" fill="#ffd700" font-size="24" font-weight="bold">In the med room</text><text x="110" y="190" fill="#ffffff" font-size="20">[ ] Read MAR + label #1</text><text x="110" y="225" fill="#ffffff" font-size="20">[ ] Calculate dose; verify hold parameters</text><text x="110" y="260" fill="#ffffff" font-size="20">[ ] Identify high-alert drugs (HAD list)</text><text x="110" y="295" fill="#ffffff" font-size="20">[ ] Draw/pour dose</text><text x="110" y="330" fill="#ffffff" font-size="20">[ ] Label #2 before putting vial down</text><text x="110" y="370" fill="#ffd700" font-size="18">[ ] Find RN #2 for independent check if HAD</text><text x="110" y="410" fill="#ffffff" font-size="18">[ ] Both sign before leaving room</text><rect x="80" y="470" width="940" height="380" fill="#10b981" rx="10"/><text x="110" y="515" fill="#ffffff" font-size="24" font-weight="bold">At the bedside</text><text x="110" y="560" fill="#ffffff" font-size="20">[ ] Two identifiers (name + DOB)</text><text x="110" y="595" fill="#ffffff" font-size="20">[ ] BCMA scan if available</text><text x="110" y="630" fill="#ffffff" font-size="20">[ ] Label check #3</text><text x="110" y="665" fill="#ffffff" font-size="20">[ ] Pre-assessment (HR, BP, BG, pain)</text><text x="110" y="700" fill="#ffffff" font-size="20">[ ] Confirm patient consent / allergies</text><text x="110" y="735" fill="#ffd700" font-size="20">[ ] Administer</text><text x="110" y="770" fill="#ffffff" font-size="20">[ ] Stay to assess response (IVP, first dose)</text><text x="110" y="805" fill="#ffffff" font-size="20">[ ] Document IMMEDIATELY after</text><rect x="80" y="870" width="940" height="110" fill="#ef4444" rx="10"/><text x="550" y="915" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">Near-miss? Report it.</text><text x="550" y="955" text-anchor="middle" fill="#ffd700" font-size="18">The system learns only from what's reported</text></svg>`,
          caption: "A repeatable med-pass routine"
        }
      }
    ]
  },
  {
    id: "nclex-pharmacology-lesson-3",
    title: "Therapeutic vs Toxic Levels + Antidotes",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "The Narrow-Window Drugs",
        content: `Some drugs have a **narrow therapeutic index** — the dose that helps and the dose that harms are uncomfortably close. These drugs are tested **constantly** on NCLEX because misreading a level can kill a patient.\n\nFor each, you must know **(1) the therapeutic range, (2) toxicity signs, and (3) the antidote**.\n\n**The classic eight:** digoxin, lithium, phenytoin, theophylline, vancomycin (trough), gentamicin (trough), warfarin (INR), and acetaminophen.\n\n**The classic antidote quartet:** **naloxone** for opioids, **flumazenil** for benzodiazepines, **vitamin K** for warfarin, **protamine** for heparin. Add **digoxin immune Fab (Digibind)** for digoxin and **N-acetylcysteine (NAC)** for acetaminophen.\n\nIf you memorize these ranges and reversal agents, you'll catch toxicity before it becomes a code blue.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="50" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold">Narrow Therapeutic Index</text><rect x="80" y="100" width="940" height="80" fill="#10b981" rx="10"/><text x="120" y="150" fill="#ffffff" font-size="22" font-weight="bold">Therapeutic</text><text x="500" y="150" fill="#ffffff" font-size="20">Drug helps, no harm</text><rect x="80" y="200" width="940" height="80" fill="#f59e0b" rx="10"/><text x="120" y="250" fill="#1a1a2e" font-size="22" font-weight="bold">Sub-therapeutic</text><text x="500" y="250" fill="#1a1a2e" font-size="20">Not enough — disease wins</text><rect x="80" y="300" width="940" height="80" fill="#ef4444" rx="10"/><text x="120" y="350" fill="#ffffff" font-size="22" font-weight="bold">Toxic</text><text x="500" y="350" fill="#ffffff" font-size="20">Drug harms — give antidote</text><text x="550" y="450" text-anchor="middle" fill="#ffd700" font-size="26" font-weight="bold">The Antidote Quartet</text><rect x="80" y="490" width="450" height="100" fill="#6366f1" rx="10"/><text x="305" y="535" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">Naloxone</text><text x="305" y="570" text-anchor="middle" fill="#ffffff" font-size="18">reverses opioids</text><rect x="570" y="490" width="450" height="100" fill="#6366f1" rx="10"/><text x="795" y="535" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">Flumazenil</text><text x="795" y="570" text-anchor="middle" fill="#ffffff" font-size="18">reverses benzodiazepines</text><rect x="80" y="610" width="450" height="100" fill="#6366f1" rx="10"/><text x="305" y="655" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">Vitamin K</text><text x="305" y="690" text-anchor="middle" fill="#ffffff" font-size="18">reverses warfarin</text><rect x="570" y="610" width="450" height="100" fill="#6366f1" rx="10"/><text x="795" y="655" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">Protamine</text><text x="795" y="690" text-anchor="middle" fill="#ffffff" font-size="18">reverses heparin</text><rect x="80" y="740" width="450" height="100" fill="#ec4899" rx="10"/><text x="305" y="785" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">Digibind</text><text x="305" y="820" text-anchor="middle" fill="#ffd700" font-size="18">reverses digoxin</text><rect x="570" y="740" width="450" height="100" fill="#ec4899" rx="10"/><text x="795" y="785" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">N-Acetylcysteine</text><text x="795" y="820" text-anchor="middle" fill="#ffd700" font-size="18">reverses acetaminophen</text><text x="550" y="930" text-anchor="middle" fill="#ffffff" font-size="20">Range + Toxicity + Antidote</text></svg>`,
          caption: "Narrow-index drugs and their reversal agents"
        }
      },
      {
        type: "concept",
        title: "The Lab Values You Must Memorize",
        content: `**Digoxin:** therapeutic **0.5–2 ng/mL**. Toxicity: nausea, vomiting, **yellow-green halos**, bradycardia. Antidote: **digoxin immune Fab (Digibind)**.\n\n**Lithium:** therapeutic **0.6–1.2 mEq/L**. Toxicity (>1.5): tremor, confusion, seizures. Maintain **fluid + sodium intake**; no specific antidote — dialysis if severe.\n\n**Phenytoin:** therapeutic **10–20 mcg/mL**. Toxicity: **nystagmus, ataxia, gingival hyperplasia**.\n\n**Theophylline:** therapeutic **10–20 mcg/mL**. Toxicity: tachycardia, seizures.\n\n**Vancomycin trough:** **10–20 mcg/mL** (draw 30 min before next dose). Toxicity: **nephrotoxicity + ototoxicity**.\n\n**Gentamicin trough:** **<2 mcg/mL**. Same toxicity profile.\n\n**Warfarin:** target **INR 2–3** (mechanical valve 2.5–3.5). Reverse: **vitamin K** (or FFP/PCC for emergencies).\n\n**Acetaminophen:** toxic **>150 mcg/mL at 4 hours** post-ingestion (Rumack-Matthew nomogram). Antidote: **N-acetylcysteine** within 8–10 hours.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="50" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold">Therapeutic Ranges</text><rect x="40" y="90" width="1020" height="55" fill="#6366f1" rx="6"/><text x="60" y="125" fill="#ffd700" font-size="20" font-weight="bold">Digoxin</text><text x="350" y="125" fill="#ffffff" font-size="18">0.5–2 ng/mL</text><text x="700" y="125" fill="#10b981" font-size="18">Antidote: Digibind</text><rect x="40" y="155" width="1020" height="55" fill="#6366f1" rx="6"/><text x="60" y="190" fill="#ffd700" font-size="20" font-weight="bold">Lithium</text><text x="350" y="190" fill="#ffffff" font-size="18">0.6–1.2 mEq/L</text><text x="700" y="190" fill="#10b981" font-size="18">No antidote · dialysis</text><rect x="40" y="220" width="1020" height="55" fill="#6366f1" rx="6"/><text x="60" y="255" fill="#ffd700" font-size="20" font-weight="bold">Phenytoin</text><text x="350" y="255" fill="#ffffff" font-size="18">10–20 mcg/mL</text><text x="700" y="255" fill="#10b981" font-size="18">Supportive care</text><rect x="40" y="285" width="1020" height="55" fill="#6366f1" rx="6"/><text x="60" y="320" fill="#ffd700" font-size="20" font-weight="bold">Theophylline</text><text x="350" y="320" fill="#ffffff" font-size="18">10–20 mcg/mL</text><text x="700" y="320" fill="#10b981" font-size="18">Activated charcoal</text><rect x="40" y="350" width="1020" height="55" fill="#ec4899" rx="6"/><text x="60" y="385" fill="#ffd700" font-size="20" font-weight="bold">Vancomycin trough</text><text x="350" y="385" fill="#ffffff" font-size="18">10–20 mcg/mL</text><text x="700" y="385" fill="#10b981" font-size="18">Stop · supportive</text><rect x="40" y="415" width="1020" height="55" fill="#ec4899" rx="6"/><text x="60" y="450" fill="#ffd700" font-size="20" font-weight="bold">Gentamicin trough</text><text x="350" y="450" fill="#ffffff" font-size="18">&lt; 2 mcg/mL</text><text x="700" y="450" fill="#10b981" font-size="18">Stop · supportive</text><rect x="40" y="480" width="1020" height="55" fill="#f59e0b" rx="6"/><text x="60" y="515" fill="#1a1a2e" font-size="20" font-weight="bold">Warfarin INR</text><text x="350" y="515" fill="#1a1a2e" font-size="18">2–3 (valve 2.5–3.5)</text><text x="700" y="515" fill="#1a1a2e" font-size="18">Vitamin K · FFP</text><rect x="40" y="545" width="1020" height="55" fill="#f59e0b" rx="6"/><text x="60" y="580" fill="#1a1a2e" font-size="20" font-weight="bold">Acetaminophen</text><text x="350" y="580" fill="#1a1a2e" font-size="18">Toxic &gt; 150 @ 4h</text><text x="700" y="580" fill="#1a1a2e" font-size="18">N-acetylcysteine</text><text x="550" y="680" text-anchor="middle" fill="#ffd700" font-size="26" font-weight="bold">Vancomycin trough timing</text><line x1="100" y1="780" x2="1000" y2="780" stroke="#888" stroke-width="2"/><circle cx="200" cy="780" r="10" fill="#10b981"/><text x="200" y="820" text-anchor="middle" fill="#ffffff" font-size="16">Dose 1</text><circle cx="500" cy="780" r="10" fill="#10b981"/><text x="500" y="820" text-anchor="middle" fill="#ffffff" font-size="16">Dose 2</text><circle cx="770" cy="780" r="14" fill="#ef4444"/><text x="770" y="820" text-anchor="middle" fill="#ffd700" font-size="16" font-weight="bold">Trough</text><circle cx="850" cy="780" r="10" fill="#10b981"/><text x="850" y="820" text-anchor="middle" fill="#ffffff" font-size="16">Dose 3</text><text x="550" y="900" text-anchor="middle" fill="#ffffff" font-size="20">Trough = 30 min BEFORE next dose</text><text x="550" y="940" text-anchor="middle" fill="#888" font-size="16">Peak = 60 min after IV infusion ends</text></svg>`,
          caption: "Eight critical drug levels"
        }
      },
      {
        type: "example",
        title: "Digoxin Toxicity Catch",
        content: `**Scenario:** A 78-year-old on **digoxin 0.25 mg PO daily** for heart failure reports new **nausea, blurred yellow-tinged vision, and a heart rate of 48**. The morning **digoxin level returns at 2.6 ng/mL**.\n\n**Decode it:**\n- Therapeutic range: **0.5–2 ng/mL**. **2.6 is toxic.**\n- Classic toxicity triad: **GI symptoms + visual changes (yellow halos) + bradydysrhythmia.**\n- Risk factors confirmed: elderly, possibly **hypokalemia** (low K+ potentiates digoxin) — check the K+.\n\n**Nursing actions (in order):**\n1. **Hold the next dose** of digoxin.\n2. Place patient on **continuous cardiac monitor** — watch for AV blocks.\n3. **Notify the provider** — recommend stat **K+, Mg+, renal panel**.\n4. Prepare **digoxin immune Fab (Digibind)** if level >10 ng/mL, life-threatening arrhythmia, or hyperkalemia >5.\n5. Correct **hypokalemia** if present — but cautiously with Digibind.\n6. Document: vitals, level, symptoms, actions, provider notification, response.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="50" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold">Digoxin Toxicity: 2.6 ng/mL</text><rect x="80" y="100" width="940" height="80" fill="#10b981" rx="10"/><text x="110" y="150" fill="#ffffff" font-size="20" font-weight="bold">Therapeutic 0.5 – 2.0 ng/mL</text><rect x="80" y="200" width="940" height="80" fill="#ef4444" rx="10"/><text x="110" y="250" fill="#ffffff" font-size="20" font-weight="bold">Patient level: 2.6 ng/mL → TOXIC</text><text x="550" y="330" text-anchor="middle" fill="#ffd700" font-size="26" font-weight="bold">Toxicity Triad</text><rect x="60" y="370" width="320" height="160" fill="#f59e0b" rx="10"/><text x="220" y="430" text-anchor="middle" fill="#1a1a2e" font-size="22" font-weight="bold">GI</text><text x="220" y="470" text-anchor="middle" fill="#1a1a2e" font-size="18">Nausea, vomiting</text><text x="220" y="500" text-anchor="middle" fill="#1a1a2e" font-size="18">Anorexia</text><rect x="390" y="370" width="320" height="160" fill="#f59e0b" rx="10"/><text x="550" y="430" text-anchor="middle" fill="#1a1a2e" font-size="22" font-weight="bold">Visual</text><text x="550" y="470" text-anchor="middle" fill="#1a1a2e" font-size="18">Yellow-green halos</text><text x="550" y="500" text-anchor="middle" fill="#1a1a2e" font-size="18">Blurred vision</text><rect x="720" y="370" width="320" height="160" fill="#f59e0b" rx="10"/><text x="880" y="430" text-anchor="middle" fill="#1a1a2e" font-size="22" font-weight="bold">Cardiac</text><text x="880" y="470" text-anchor="middle" fill="#1a1a2e" font-size="18">Bradycardia &lt;60</text><text x="880" y="500" text-anchor="middle" fill="#1a1a2e" font-size="18">AV blocks</text><rect x="80" y="570" width="940" height="380" fill="#6366f1" rx="10"/><text x="110" y="615" fill="#ffd700" font-size="22" font-weight="bold">Actions in order</text><text x="110" y="660" fill="#ffffff" font-size="18">1. HOLD next digoxin dose</text><text x="110" y="695" fill="#ffffff" font-size="18">2. Continuous cardiac monitor</text><text x="110" y="730" fill="#ffffff" font-size="18">3. Notify provider; stat K+, Mg+, BUN/Cr</text><text x="110" y="765" fill="#ffffff" font-size="18">4. Prepare Digibind (Fab) if severe</text><text x="110" y="800" fill="#ffffff" font-size="18">5. Correct hypokalemia (low K+ ↑ digoxin effect)</text><text x="110" y="835" fill="#ffffff" font-size="18">6. Document level, vitals, actions, response</text><text x="110" y="885" fill="#ffd700" font-size="20" font-weight="bold">Antidote: digoxin immune Fab (Digibind)</text><text x="110" y="920" fill="#ffffff" font-size="16">Indication: level &gt;10, life-threatening arrhythmia, K+ &gt;5</text></svg>`,
          caption: "Recognize, hold, treat, document"
        }
      },
      {
        type: "quiz",
        title: "Match the Antidote",
        content: `Antidote recall under pressure.`,
        question: "A patient on a **heparin drip** for PE develops sudden **hematuria** and the aPTT comes back at **120 seconds** (target 60–80). Which medication should the nurse anticipate the provider ordering?",
        options: [
          { text: "Vitamin K (phytonadione)", correct: false },
          { text: "Protamine sulfate", correct: true },
          { text: "N-acetylcysteine", correct: false },
          { text: "Flumazenil", correct: false }
        ],
        explanation: "**Protamine sulfate** is the antidote for **heparin** — it binds heparin and neutralizes it. Dose is roughly 1 mg protamine per 100 units of heparin given in the last 2–3 hours. **Vitamin K** reverses **warfarin** (different drug, different pathway). **N-acetylcysteine (NAC)** is for **acetaminophen** overdose. **Flumazenil** reverses **benzodiazepines**. Memorize the pairings: opioid → naloxone; benzo → flumazenil; warfarin → vitamin K; heparin → protamine; digoxin → Digibind; acetaminophen → NAC.",
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="60" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold">Antidote Pairings</text><rect x="80" y="120" width="440" height="100" fill="#6366f1" rx="10"/><text x="300" y="160" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">Heparin</text><text x="300" y="195" text-anchor="middle" fill="#ffd700" font-size="20">→ Protamine sulfate</text><rect x="580" y="120" width="440" height="100" fill="#6366f1" rx="10"/><text x="800" y="160" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">Warfarin</text><text x="800" y="195" text-anchor="middle" fill="#ffd700" font-size="20">→ Vitamin K</text><rect x="80" y="240" width="440" height="100" fill="#10b981" rx="10"/><text x="300" y="280" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">Opioids</text><text x="300" y="315" text-anchor="middle" fill="#ffd700" font-size="20">→ Naloxone (Narcan)</text><rect x="580" y="240" width="440" height="100" fill="#10b981" rx="10"/><text x="800" y="280" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">Benzodiazepines</text><text x="800" y="315" text-anchor="middle" fill="#ffd700" font-size="20">→ Flumazenil</text><rect x="80" y="360" width="440" height="100" fill="#ec4899" rx="10"/><text x="300" y="400" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">Digoxin</text><text x="300" y="435" text-anchor="middle" fill="#ffd700" font-size="20">→ Digoxin immune Fab</text><rect x="580" y="360" width="440" height="100" fill="#ec4899" rx="10"/><text x="800" y="400" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">Acetaminophen</text><text x="800" y="435" text-anchor="middle" fill="#ffd700" font-size="20">→ N-acetylcysteine</text><rect x="80" y="480" width="440" height="100" fill="#f59e0b" rx="10"/><text x="300" y="520" text-anchor="middle" fill="#1a1a2e" font-size="22" font-weight="bold">Magnesium sulfate</text><text x="300" y="555" text-anchor="middle" fill="#1a1a2e" font-size="20">→ Calcium gluconate</text><rect x="580" y="480" width="440" height="100" fill="#f59e0b" rx="10"/><text x="800" y="520" text-anchor="middle" fill="#1a1a2e" font-size="22" font-weight="bold">Iron</text><text x="800" y="555" text-anchor="middle" fill="#1a1a2e" font-size="20">→ Deferoxamine</text><rect x="80" y="640" width="940" height="280" fill="#8b5cf6" rx="10"/><text x="550" y="690" text-anchor="middle" fill="#ffffff" font-size="24" font-weight="bold">Case: aPTT 120 sec on heparin drip</text><text x="550" y="735" text-anchor="middle" fill="#ffd700" font-size="20">Stop drip → notify MD → ready protamine</text><text x="550" y="780" text-anchor="middle" fill="#ffffff" font-size="20">Dose: ~1 mg per 100 units heparin (last 2-3 h)</text><text x="550" y="825" text-anchor="middle" fill="#ffffff" font-size="20">Slow IV push, watch for hypotension</text><text x="550" y="875" text-anchor="middle" fill="#ffd700" font-size="20">Repeat aPTT after reversal</text></svg>`,
          caption: "Match each drug with its reversal"
        }
      },
      {
        type: "application",
        title: "Building the Toxicity Mindset",
        content: `**On every shift**, build a habit: when a level returns, ask three questions.\n\n**1. Where does the value sit?** Compare to the range. Above range = toxic, below = sub-therapeutic, in range = continue but reassess.\n\n**2. Is the patient symptomatic?** A subtherapeutic level with seizure activity matters more than a slightly high level with no symptoms. **Treat the patient, not just the number.**\n\n**3. What modifies the level?** **Renal impairment** raises **digoxin, lithium, vancomycin, gentamicin** levels. **Hypokalemia** worsens **digoxin** toxicity. **Drug interactions** (e.g., amiodarone + warfarin → bleeding) shift levels even on a stable dose.\n\n**Stock the antidote tray** mentally: every unit should have **naloxone** with opioid PCAs, **vitamin K** with warfarin patients, **calcium gluconate** with magnesium infusions, **protamine** with heparin drips. Know where they live before you need them.\n\n**Document every level**, every action, every notification — narrow-window drugs leave no room for ambiguity.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="50" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold">When a Level Returns</text><rect x="80" y="100" width="940" height="200" fill="#6366f1" rx="10"/><text x="110" y="145" fill="#ffd700" font-size="22" font-weight="bold">Q1: Where does the value sit?</text><text x="110" y="190" fill="#ffffff" font-size="18">Above range → toxic → hold + notify</text><text x="110" y="225" fill="#ffffff" font-size="18">In range → continue, reassess next dose</text><text x="110" y="260" fill="#ffffff" font-size="18">Below range → sub-therapeutic, may need increase</text><rect x="80" y="320" width="940" height="200" fill="#10b981" rx="10"/><text x="110" y="365" fill="#ffffff" font-size="22" font-weight="bold">Q2: Is the patient symptomatic?</text><text x="110" y="410" fill="#ffffff" font-size="18">Treat the patient, not the number</text><text x="110" y="445" fill="#ffffff" font-size="18">Symptomatic + toxic level → emergency</text><text x="110" y="480" fill="#ffd700" font-size="18">Asymp + minimally above range → recheck, hold</text><rect x="80" y="540" width="940" height="220" fill="#f59e0b" rx="10"/><text x="110" y="585" fill="#1a1a2e" font-size="22" font-weight="bold">Q3: What modifies the level?</text><text x="110" y="630" fill="#1a1a2e" font-size="18">Renal: ↑ digoxin, lithium, vanco, gent</text><text x="110" y="665" fill="#1a1a2e" font-size="18">Low K+: ↑ digoxin toxicity</text><text x="110" y="700" fill="#1a1a2e" font-size="18">Amiodarone: ↑ warfarin, digoxin levels</text><text x="110" y="735" fill="#1a1a2e" font-size="18">CYP inducers/inhibitors shift many drugs</text><rect x="80" y="780" width="940" height="200" fill="#ef4444" rx="10"/><text x="110" y="825" fill="#ffffff" font-size="22" font-weight="bold">Have antidotes ready</text><text x="110" y="870" fill="#ffffff" font-size="18">Opioid PCA → naloxone within reach</text><text x="110" y="905" fill="#ffffff" font-size="18">Heparin drip → protamine on unit</text><text x="110" y="940" fill="#ffd700" font-size="18">Warfarin → vitamin K; Mg infusion → Ca gluconate</text></svg>`,
          caption: "Three questions for every drug level"
        }
      }
    ]
  }
],
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
        courseHub: true,
        parts: [
            { romanNum: 'Part I',   title: 'Frameworks',              bookIds: ['nclex-fundamentals','nclex-strategy'] },
            { romanNum: 'Part II',  title: 'Pharm & Med-Surg',        bookIds: ['nclex-pharmacology','nclex-med-surg','nclex-pathophys'] },
            { romanNum: 'Part III', title: 'Specialty Nursing',       bookIds: ['nclex-pediatrics','nclex-maternal','nclex-mental-health','nclex-critical-care'] },
            { romanNum: 'Part IV',  title: 'Mock Exam',               bookIds: ['nclex-mock'] },
        ],
        books: BOOKS,
    };
})();
