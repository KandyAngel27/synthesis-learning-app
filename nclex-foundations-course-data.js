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
  }
];

    const BOOKS = [
        {
            id: 'nclex-fundamentals',
            title: 'NCLEX Fundamentals: The ABCs, Maslow, and Nursing Process',
            author: 'Synthesis Learning',
            description: 'The three priority frameworks every NCLEX question hides behind its wording — the ABCs (airway/breathing/circulation), Maslow\'s hierarchy as a triage tool, and the nursing process (ADPIE).',
            lessons: 6, duration: 90, progress: 0, category: 'nclex-foundations',
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
