// External category module — CPC (Certified Professional Coder) Prep Track.
// Loaded BEFORE data.js so it's available when integrateExternalCategories() runs.
// AAPC's CPC is the most-sought medical-coding certification in the US.

(function () {
    const COMING_SOON_SVG = `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
        <rect width="1100" height="1100" fill="#1a1a2e"/>
        <rect x="80" y="180" width="940" height="740" rx="24" fill="rgba(14,165,233,0.08)" stroke="#0ea5e9" stroke-width="3"/>
        <text x="550" y="320" text-anchor="middle" font-size="78" fill="#ffd700" font-weight="bold">🚧 Coming Soon</text>
        <text x="550" y="410" text-anchor="middle" font-size="32" fill="#888">CPC Prep Track</text>
        <text x="550" y="540" text-anchor="middle" font-size="26" fill="#ffffff">This book is being authored.</text>
        <text x="550" y="600" text-anchor="middle" font-size="26" fill="#ffffff">Start with Book 1 — CPC Foundation —</text>
        <text x="550" y="650" text-anchor="middle" font-size="26" fill="#ffffff">while the rest of the track is built out.</text>
        <text x="550" y="800" text-anchor="middle" font-size="22" fill="#0ea5e9">Pass each lesson's quiz at 80%</text>
        <text x="550" y="840" text-anchor="middle" font-size="22" fill="#0ea5e9">to unlock the next.</text>
    </svg>`;

    function comingSoonLessons(scope) {
        return [{
            id: 'coming-soon',
            title: 'Book Outline & What You\'ll Learn',
            duration: '5',
            cards: [{
                type: 'intro',
                title: 'Coming Soon — Book in Development',
                content: `This book covers **${scope}**.\n\nThe full lesson content is being authored. In the meantime, start with **Book 1 — CPC Foundation** to build the medical terminology and anatomy base every CPC question assumes you have.\n\nThe Exam Center already works for the books that are live — your spaced-repetition queue and streak both count any lesson you complete.`,
                visual: { type: 'diagram', svg: COMING_SOON_SVG, caption: 'Coming soon' }
            }]
        }];
    }

    // ============================
    // BOOK 1 — CPC FOUNDATION (seed; real lessons spliced in)
    // ============================
    const FOUNDATION_PLACEHOLDER_LESSONS = [
{
    id: "cpc-foundation-lesson-1",
    title: "Why Medical Coders Must Master Anatomy and Terminology First",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "The Foundation Beneath Every Code",
        content: `Every CPT and ICD-10-CM code you assign begins as a sentence written by a physician — and that sentence is written in **anatomy and medical terminology**. If you can't decode what the provider documented, you can't pick the right code.

The CPC exam tests this directly: roughly **14% of questions** assume working knowledge of anatomy and medical terminology, but the truth is that **100% of the exam** depends on it. Every operative report, every pathology note, every E/M chart speaks this language.

Coders who skip the fundamentals plateau fast. They guess at codes, get denials, and never break past entry-level accuracy. The coders who **dominate audits** are the ones who can read "**laparoscopic cholecystectomy with intraoperative cholangiography**" and immediately know the organ, the approach, and the add-on code — without looking anything up.

This book is your foundation. Skip it and everything above it collapses.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
  <rect width="1100" height="1100" fill="#1a1a2e"/>
  <text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="38" font-weight="bold">The Coder's Knowledge Stack</text>
  <text x="550" y="110" text-anchor="middle" fill="#888" font-size="20">Each layer depends on the one beneath it</text>

  <rect x="200" y="180" width="700" height="90" fill="#ef4444" rx="8"/>
  <text x="550" y="225" text-anchor="middle" fill="#ffffff" font-size="24" font-weight="bold">Audit-Proof Coding &amp; Appeals</text>
  <text x="550" y="252" text-anchor="middle" fill="#ffffff" font-size="16">Defending codes against payer denials</text>

  <rect x="200" y="290" width="700" height="90" fill="#f59e0b" rx="8"/>
  <text x="550" y="335" text-anchor="middle" fill="#1a1a2e" font-size="24" font-weight="bold">Modifier &amp; Bundling Logic</text>
  <text x="550" y="362" text-anchor="middle" fill="#1a1a2e" font-size="16">NCCI edits, -59, -51, -25</text>

  <rect x="200" y="400" width="700" height="90" fill="#10b981" rx="8"/>
  <text x="550" y="445" text-anchor="middle" fill="#1a1a2e" font-size="24" font-weight="bold">CPT &amp; ICD-10-CM Code Selection</text>
  <text x="550" y="472" text-anchor="middle" fill="#1a1a2e" font-size="16">Matching documentation to code descriptors</text>

  <rect x="200" y="510" width="700" height="90" fill="#6366f1" rx="8"/>
  <text x="550" y="555" text-anchor="middle" fill="#ffffff" font-size="24" font-weight="bold">Reading the Op Report</text>
  <text x="550" y="582" text-anchor="middle" fill="#ffffff" font-size="16">Parsing procedure, approach, and anatomy</text>

  <rect x="200" y="620" width="700" height="90" fill="#8b5cf6" rx="8"/>
  <text x="550" y="665" text-anchor="middle" fill="#ffffff" font-size="24" font-weight="bold">Medical Terminology</text>
  <text x="550" y="692" text-anchor="middle" fill="#ffffff" font-size="16">Roots, prefixes, suffixes</text>

  <rect x="200" y="730" width="700" height="90" fill="#0ea5e9" rx="8"/>
  <text x="550" y="775" text-anchor="middle" fill="#ffffff" font-size="24" font-weight="bold">Anatomy &amp; Physiology</text>
  <text x="550" y="802" text-anchor="middle" fill="#ffffff" font-size="16">Body systems, structures, function</text>

  <text x="550" y="900" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">Foundation = This Book</text>
  <text x="550" y="940" text-anchor="middle" fill="#ffffff" font-size="18">Weak base = every layer above wobbles</text>
  <text x="550" y="980" text-anchor="middle" fill="#888" font-size="16">CPC exam, real-world accuracy, salary growth — all built here</text>
</svg>`,
          caption: "Anatomy and terminology are the bedrock layers that every coding skill rests on."
        }
      },
      {
        type: "concept",
        title: "What Goes Wrong When You Don't Know the Anatomy",
        content: `Picture a coder who has memorized CPT but skipped A&P. The op report says "**excision of 2.5 cm lesion from the dorsum of the hand**." The coder grabs **11423** (excision, benign, scalp/neck/hands/feet/genitalia, 2.1-3.0 cm). Reasonable, right?

Wrong. The note also documents the lesion as **malignant** per path, and "dorsum of the hand" is a specific anatomical location — the **back of the hand**, not the palm. The correct code is **11623** (excision, malignant lesion, 2.1-3.0 cm). A single anatomical word — **dorsum** — separated a benign code from a malignant one, and the reimbursement difference is **roughly double**.

This is why payers hire coders who know anatomy. **CMS, AAPC audits, and RAC reviewers** routinely flag charts where the code doesn't match the documented site. Denied claims, takebacks, and even **fraud allegations** start with anatomical mistakes.

The fix is not memorizing every code. It's knowing the **body well enough to read the chart**.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
  <rect width="1100" height="1100" fill="#1a1a2e"/>
  <text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="36" font-weight="bold">Same Procedure, Wrong Anatomy = Wrong Code</text>
  <text x="550" y="110" text-anchor="middle" fill="#888" font-size="20">One anatomical word changes everything</text>

  <rect x="80" y="170" width="460" height="380" fill="#ef4444" opacity="0.15" stroke="#ef4444" stroke-width="3" rx="10"/>
  <text x="310" y="215" text-anchor="middle" fill="#ef4444" font-size="26" font-weight="bold">Coder Misreads</text>
  <text x="310" y="260" text-anchor="middle" fill="#ffffff" font-size="18">"Excision of 2.5 cm lesion,</text>
  <text x="310" y="285" text-anchor="middle" fill="#ffffff" font-size="18">dorsum of the hand"</text>
  <text x="310" y="335" text-anchor="middle" fill="#888" font-size="16">Skips "dorsum" + "malignant"</text>
  <text x="310" y="385" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">Code: 11423</text>
  <text x="310" y="415" text-anchor="middle" fill="#ffffff" font-size="16">Benign, hand, 2.1-3.0 cm</text>
  <text x="310" y="465" text-anchor="middle" fill="#ffffff" font-size="16">Reimbursement: ~$165</text>
  <text x="310" y="510" text-anchor="middle" fill="#ef4444" font-size="18" font-weight="bold">DENIED on audit</text>

  <rect x="560" y="170" width="460" height="380" fill="#10b981" opacity="0.15" stroke="#10b981" stroke-width="3" rx="10"/>
  <text x="790" y="215" text-anchor="middle" fill="#10b981" font-size="26" font-weight="bold">Coder Reads It Right</text>
  <text x="790" y="260" text-anchor="middle" fill="#ffffff" font-size="18">Recognizes "dorsum" = back</text>
  <text x="790" y="285" text-anchor="middle" fill="#ffffff" font-size="18">Cross-checks path = malignant</text>
  <text x="790" y="335" text-anchor="middle" fill="#888" font-size="16">Reads full chart context</text>
  <text x="790" y="385" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">Code: 11623</text>
  <text x="790" y="415" text-anchor="middle" fill="#ffffff" font-size="16">Malignant, hand, 2.1-3.0 cm</text>
  <text x="790" y="465" text-anchor="middle" fill="#ffffff" font-size="16">Reimbursement: ~$330</text>
  <text x="790" y="510" text-anchor="middle" fill="#10b981" font-size="18" font-weight="bold">CLEAN claim</text>

  <text x="550" y="620" text-anchor="middle" fill="#ffd700" font-size="24" font-weight="bold">Consequences of Anatomical Errors</text>
  <rect x="100" y="650" width="900" height="55" fill="#6366f1" opacity="0.2" rx="6"/>
  <text x="550" y="685" text-anchor="middle" fill="#ffffff" font-size="18">Denied claims &amp; lost revenue for the practice</text>
  <rect x="100" y="720" width="900" height="55" fill="#f59e0b" opacity="0.2" rx="6"/>
  <text x="550" y="755" text-anchor="middle" fill="#ffffff" font-size="18">RAC audits, takebacks, repayment demands</text>
  <rect x="100" y="790" width="900" height="55" fill="#ec4899" opacity="0.2" rx="6"/>
  <text x="550" y="825" text-anchor="middle" fill="#ffffff" font-size="18">Compliance flags &amp; potential fraud allegations</text>
  <rect x="100" y="860" width="900" height="55" fill="#ef4444" opacity="0.2" rx="6"/>
  <text x="550" y="895" text-anchor="middle" fill="#ffffff" font-size="18">CPC certification revoked for pattern of errors</text>

  <text x="550" y="980" text-anchor="middle" fill="#ffd700" font-size="20" font-style="italic">Anatomy isn't optional. It's the difference between paid and denied.</text>
</svg>`,
          caption: "A single missed anatomical term cascades into denials, audits, and compliance risk."
        }
      },
      {
        type: "example",
        title: "Real Op Report: Spotting the Anatomy Coders Miss",
        content: `Here is an excerpt from a real ENT operative report:

> "Patient placed supine. **Bilateral functional endoscopic sinus surgery** performed. **Maxillary antrostomies** completed bilaterally with removal of polypoid disease. **Anterior ethmoidectomy** performed on the right; **total ethmoidectomy** with **sphenoidotomy** on the left."

A trained coder sees five distinct CPT codes here, not one. The anatomy tells you each:

- **Maxillary antrostomy** (both sides) → **31256-50**
- **Anterior ethmoidectomy, right** → **31254-RT**
- **Total ethmoidectomy, left** → **31255-LT**
- **Sphenoidotomy, left** → **31287-LT**

A coder who doesn't know that the **ethmoid sinuses sit between the eyes**, the **sphenoid sits behind them**, and the **maxillary sits in the cheek** would lump this into one code and **leave thousands of dollars uncollected**. The anatomy is the unbundling key.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
  <rect width="1100" height="1100" fill="#1a1a2e"/>
  <text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="36" font-weight="bold">Sinus Anatomy = Five CPT Codes</text>
  <text x="550" y="110" text-anchor="middle" fill="#888" font-size="20">One op report, broken down by location</text>

  <ellipse cx="550" cy="430" rx="280" ry="320" fill="#1a1a2e" stroke="#888" stroke-width="2"/>
  <text x="550" y="170" text-anchor="middle" fill="#888" font-size="14">Anterior view of skull (schematic)</text>

  <ellipse cx="450" cy="320" rx="55" ry="35" fill="#6366f1" opacity="0.6" stroke="#6366f1" stroke-width="2"/>
  <ellipse cx="650" cy="320" rx="55" ry="35" fill="#6366f1" opacity="0.6" stroke="#6366f1" stroke-width="2"/>
  <text x="550" y="270" text-anchor="middle" fill="#6366f1" font-size="16" font-weight="bold">Frontal sinus</text>

  <rect x="495" y="370" width="110" height="60" fill="#10b981" opacity="0.6" stroke="#10b981" stroke-width="2" rx="4"/>
  <text x="550" y="405" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="bold">Ethmoid</text>
  <text x="900" y="395" text-anchor="middle" fill="#10b981" font-size="16" font-weight="bold">31254 / 31255</text>
  <line x1="605" y1="400" x2="820" y2="395" stroke="#10b981" stroke-width="2"/>

  <ellipse cx="550" cy="490" rx="35" ry="25" fill="#f59e0b" opacity="0.6" stroke="#f59e0b" stroke-width="2"/>
  <text x="550" y="495" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="bold">Sphenoid</text>
  <text x="900" y="490" text-anchor="middle" fill="#f59e0b" font-size="16" font-weight="bold">31287</text>
  <line x1="585" y1="490" x2="820" y2="490" stroke="#f59e0b" stroke-width="2"/>

  <ellipse cx="420" cy="560" rx="70" ry="55" fill="#ec4899" opacity="0.6" stroke="#ec4899" stroke-width="2"/>
  <ellipse cx="680" cy="560" rx="70" ry="55" fill="#ec4899" opacity="0.6" stroke="#ec4899" stroke-width="2"/>
  <text x="420" y="565" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="bold">Maxillary</text>
  <text x="680" y="565" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="bold">Maxillary</text>
  <text x="200" y="560" text-anchor="middle" fill="#ec4899" font-size="16" font-weight="bold">31256-50</text>
  <line x1="280" y1="560" x2="350" y2="560" stroke="#ec4899" stroke-width="2"/>

  <text x="550" y="800" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">Final code set</text>
  <rect x="200" y="820" width="700" height="35" fill="#ec4899" opacity="0.25" rx="4"/>
  <text x="550" y="844" text-anchor="middle" fill="#ffffff" font-size="16">31256-50  Maxillary antrostomy, bilateral</text>
  <rect x="200" y="860" width="700" height="35" fill="#10b981" opacity="0.25" rx="4"/>
  <text x="550" y="884" text-anchor="middle" fill="#ffffff" font-size="16">31254-RT  Anterior ethmoidectomy, right</text>
  <rect x="200" y="900" width="700" height="35" fill="#10b981" opacity="0.25" rx="4"/>
  <text x="550" y="924" text-anchor="middle" fill="#ffffff" font-size="16">31255-LT  Total ethmoidectomy, left</text>
  <rect x="200" y="940" width="700" height="35" fill="#f59e0b" opacity="0.25" rx="4"/>
  <text x="550" y="964" text-anchor="middle" fill="#ffffff" font-size="16">31287-LT  Sphenoidotomy, left</text>

  <text x="550" y="1030" text-anchor="middle" fill="#888" font-size="16" font-style="italic">Without the anatomy, this becomes one weak code instead of four.</text>
</svg>`,
          caption: "Knowing where each sinus sits is what lets the coder capture every billable procedure."
        }
      },
      {
        type: "quiz",
        title: "Test Your Coder Instincts",
        question: "An operative report documents 'excision of a 1.8 cm malignant lesion from the patient's plantar surface.' A coder unfamiliar with anatomy bills 11602 (excision, malignant lesion, trunk/arms/legs, 1.1-2.0 cm). Why is this wrong?",
        options: [
          { text: "The size is wrong — 1.8 cm requires a different code.", correct: false },
          { text: "Plantar surface is the sole of the foot, which falls under the hands/feet code family (11620-11626).", correct: true },
          { text: "Malignant lesions cannot be excised in the office setting.", correct: false },
          { text: "The code 11602 is only for benign lesions.", correct: false }
        ],
        explanation: "**Plantar** means the sole of the foot. CPT groups excisions by anatomical site, and feet have their own series. The correct code is **11622** (excision, malignant lesion, scalp/neck/hands/feet/genitalia, 1.1-2.0 cm). The coder picked the right size range but the wrong body region — a classic anatomy-driven error that audits catch immediately.",
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
  <rect width="1100" height="1100" fill="#1a1a2e"/>
  <text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="36" font-weight="bold">CPT Lesion Codes: Site Matters</text>
  <text x="550" y="110" text-anchor="middle" fill="#888" font-size="20">Excision codes split by body region</text>

  <rect x="100" y="170" width="900" height="60" fill="#6366f1" opacity="0.3" rx="6"/>
  <text x="120" y="208" fill="#ffd700" font-size="20" font-weight="bold">Region</text>
  <text x="500" y="208" fill="#ffd700" font-size="20" font-weight="bold">Benign series</text>
  <text x="780" y="208" fill="#ffd700" font-size="20" font-weight="bold">Malignant series</text>

  <rect x="100" y="240" width="900" height="55" fill="#ffffff" opacity="0.05" rx="6"/>
  <text x="120" y="275" fill="#ffffff" font-size="17">Trunk / arms / legs</text>
  <text x="500" y="275" fill="#10b981" font-size="17">11400-11406</text>
  <text x="780" y="275" fill="#ef4444" font-size="17">11600-11606</text>

  <rect x="100" y="305" width="900" height="55" fill="#ffffff" opacity="0.05" rx="6"/>
  <text x="120" y="340" fill="#ffffff" font-size="17">Scalp / neck / hands / feet / genitalia</text>
  <text x="500" y="340" fill="#10b981" font-size="17">11420-11426</text>
  <text x="780" y="340" fill="#ef4444" font-size="17">11620-11626</text>

  <rect x="100" y="370" width="900" height="55" fill="#ffffff" opacity="0.05" rx="6"/>
  <text x="120" y="405" fill="#ffffff" font-size="17">Face / ears / eyelids / nose / lips</text>
  <text x="500" y="405" fill="#10b981" font-size="17">11440-11446</text>
  <text x="780" y="405" fill="#ef4444" font-size="17">11640-11646</text>

  <text x="550" y="490" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">"Plantar surface" decoded</text>

  <rect x="200" y="520" width="700" height="50" fill="#8b5cf6" opacity="0.2" rx="6"/>
  <text x="550" y="552" text-anchor="middle" fill="#ffffff" font-size="18">Plantar = sole of the foot (the bottom)</text>

  <rect x="200" y="585" width="700" height="50" fill="#8b5cf6" opacity="0.2" rx="6"/>
  <text x="550" y="617" text-anchor="middle" fill="#ffffff" font-size="18">Foot → uses the hands/feet code family</text>

  <rect x="200" y="650" width="700" height="50" fill="#10b981" opacity="0.25" rx="6"/>
  <text x="550" y="682" text-anchor="middle" fill="#ffffff" font-size="18" font-weight="bold">Correct code: 11622 (malignant, 1.1-2.0 cm)</text>

  <text x="550" y="780" text-anchor="middle" fill="#ef4444" font-size="20" font-weight="bold">Wrong code chosen: 11602</text>
  <text x="550" y="810" text-anchor="middle" fill="#ffffff" font-size="16">(Right size, wrong body region — denied or downcoded on audit)</text>

  <text x="550" y="900" text-anchor="middle" fill="#ffd700" font-size="20">Coder takeaway</text>
  <text x="550" y="935" text-anchor="middle" fill="#ffffff" font-size="17">Never code a lesion until you've mapped the site word to a body region.</text>
  <text x="550" y="965" text-anchor="middle" fill="#ffffff" font-size="17">Plantar, dorsum, palmar, volar — these words pick the code series.</text>
</svg>`,
          caption: "CPT lesion codes split by body region — anatomical vocabulary picks the right series."
        }
      },
      {
        type: "application",
        title: "Your Week-One Coder Habit",
        content: `Start the habit that separates good coders from great ones: **read the anatomy first, then look at the code.**

This week, pick any operative report you have access to — your own training material, AAPC practice charts, or a sample op note. Before opening your CPT book, **circle every anatomical term** in the report. Dorsum, plantar, distal, lateral, retroperitoneal, fascia, periosteum — every one.

Then, for each circled word, write one sentence: "**This means ___, and it tells me ___ about the code I'll pick.**" If you can't finish the sentence, that's your study target.

Do this on **five reports this week**. By Friday you'll notice a shift — you'll stop seeing op reports as walls of jargon and start seeing them as **maps to the right code**. This is the cognitive move every CPC-certified coder eventually makes. Start it now and the rest of this book becomes ten times more useful.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
  <rect width="1100" height="1100" fill="#1a1a2e"/>
  <text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="36" font-weight="bold">The Anatomy-First Coding Habit</text>
  <text x="550" y="110" text-anchor="middle" fill="#888" font-size="20">A 5-day practice routine</text>

  <circle cx="200" cy="280" r="60" fill="#6366f1"/>
  <text x="200" y="290" text-anchor="middle" fill="#ffffff" font-size="36" font-weight="bold">1</text>
  <text x="320" y="265" fill="#ffd700" font-size="22" font-weight="bold">Pick a report</text>
  <text x="320" y="295" fill="#ffffff" font-size="16">Any op note, path report, or H&amp;P</text>
  <text x="320" y="320" fill="#ffffff" font-size="16">Don't open CPT yet</text>

  <circle cx="200" cy="430" r="60" fill="#10b981"/>
  <text x="200" y="440" text-anchor="middle" fill="#ffffff" font-size="36" font-weight="bold">2</text>
  <text x="320" y="415" fill="#ffd700" font-size="22" font-weight="bold">Circle every anatomical term</text>
  <text x="320" y="445" fill="#ffffff" font-size="16">Dorsum, plantar, distal, fascia,</text>
  <text x="320" y="470" fill="#ffffff" font-size="16">retroperitoneal, periosteum...</text>

  <circle cx="200" cy="580" r="60" fill="#f59e0b"/>
  <text x="200" y="590" text-anchor="middle" fill="#1a1a2e" font-size="36" font-weight="bold">3</text>
  <text x="320" y="565" fill="#ffd700" font-size="22" font-weight="bold">Define each one out loud</text>
  <text x="320" y="595" fill="#ffffff" font-size="16">"This means ___ and it tells</text>
  <text x="320" y="620" fill="#ffffff" font-size="16">me ___ about the code"</text>

  <circle cx="200" cy="730" r="60" fill="#ec4899"/>
  <text x="200" y="740" text-anchor="middle" fill="#ffffff" font-size="36" font-weight="bold">4</text>
  <text x="320" y="715" fill="#ffd700" font-size="22" font-weight="bold">Mark gaps as study targets</text>
  <text x="320" y="745" fill="#ffffff" font-size="16">Couldn't finish the sentence?</text>
  <text x="320" y="770" fill="#ffffff" font-size="16">That word goes on your flashcards</text>

  <circle cx="200" cy="880" r="60" fill="#8b5cf6"/>
  <text x="200" y="890" text-anchor="middle" fill="#ffffff" font-size="36" font-weight="bold">5</text>
  <text x="320" y="865" fill="#ffd700" font-size="22" font-weight="bold">Repeat on 5 reports this week</text>
  <text x="320" y="895" fill="#ffffff" font-size="16">By Friday the language shifts from</text>
  <text x="320" y="920" fill="#ffffff" font-size="16">noise to a map of billable codes</text>

  <line x1="200" y1="340" x2="200" y2="370" stroke="#ffd700" stroke-width="3"/>
  <line x1="200" y1="490" x2="200" y2="520" stroke="#ffd700" stroke-width="3"/>
  <line x1="200" y1="640" x2="200" y2="670" stroke="#ffd700" stroke-width="3"/>
  <line x1="200" y1="790" x2="200" y2="820" stroke="#ffd700" stroke-width="3"/>

  <text x="550" y="1010" text-anchor="middle" fill="#ffd700" font-size="20" font-style="italic">Anatomy first. Code second. Every time.</text>
</svg>`,
          caption: "A five-step weekly routine that builds the anatomical reflex every senior coder uses."
        }
      }
    ]
  },
  {
    id: "cpc-foundation-lesson-2",
    title: "Anatomical Position, Body Planes, and Directional Terms",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "The Shared Language of Coder and Surgeon",
        content: `When a surgeon dictates "**a 4 cm incision was made on the anterior aspect of the proximal left tibia**," every word is precise. **Anterior** rules out the back. **Proximal** rules out the ankle end. **Left** rules out laterality modifier confusion. The whole sentence is built on **anatomical position**.

Anatomical position is the reference frame physicians and coders agree to use: body upright, face forward, **palms forward**, feet together. Every directional term in the chart assumes the patient is in this pose — even if they were actually face down on the OR table.

For coders, this matters because **ICD-10-CM and CPT use these terms in code descriptors**. "Distal radius fracture" is a different code than "proximal radius fracture." "Anterior chamber" is a different eye structure than "posterior chamber." Miss the directional term and you miss the code.

This lesson gives you the vocabulary surgeons assume you already know.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
  <rect width="1100" height="1100" fill="#1a1a2e"/>
  <text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="36" font-weight="bold">Anatomical Position</text>
  <text x="550" y="110" text-anchor="middle" fill="#888" font-size="20">The default reference frame for every chart you'll ever code</text>

  <ellipse cx="550" cy="220" rx="50" ry="55" fill="none" stroke="#ffffff" stroke-width="3"/>
  <line x1="550" y1="275" x2="550" y2="600" stroke="#ffffff" stroke-width="3"/>
  <line x1="550" y1="350" x2="380" y2="500" stroke="#ffffff" stroke-width="3"/>
  <line x1="550" y1="350" x2="720" y2="500" stroke="#ffffff" stroke-width="3"/>
  <circle cx="380" cy="500" r="20" fill="#ffd700" stroke="#ffffff" stroke-width="2"/>
  <circle cx="720" cy="500" r="20" fill="#ffd700" stroke="#ffffff" stroke-width="2"/>
  <text x="370" y="540" fill="#ffd700" font-size="14">palm forward</text>
  <text x="710" y="540" fill="#ffd700" font-size="14">palm forward</text>
  <line x1="550" y1="600" x2="490" y2="820" stroke="#ffffff" stroke-width="3"/>
  <line x1="550" y1="600" x2="610" y2="820" stroke="#ffffff" stroke-width="3"/>
  <line x1="465" y1="820" x2="510" y2="820" stroke="#ffffff" stroke-width="4"/>
  <line x1="590" y1="820" x2="635" y2="820" stroke="#ffffff" stroke-width="4"/>

  <text x="100" y="220" fill="#ffd700" font-size="18" font-weight="bold">Standing upright</text>
  <line x1="240" y1="215" x2="500" y2="215" stroke="#ffd700" stroke-width="2" stroke-dasharray="4"/>

  <text x="100" y="350" fill="#ffd700" font-size="18" font-weight="bold">Face forward</text>
  <line x1="220" y1="345" x2="500" y2="345" stroke="#ffd700" stroke-width="2" stroke-dasharray="4"/>

  <text x="100" y="500" fill="#ffd700" font-size="18" font-weight="bold">Arms at sides</text>
  <line x1="220" y1="495" x2="370" y2="495" stroke="#ffd700" stroke-width="2" stroke-dasharray="4"/>

  <text x="800" y="500" fill="#ffd700" font-size="18" font-weight="bold">Palms forward</text>
  <line x1="730" y1="495" x2="790" y2="495" stroke="#ffd700" stroke-width="2" stroke-dasharray="4"/>

  <text x="100" y="820" fill="#ffd700" font-size="18" font-weight="bold">Feet together</text>
  <line x1="225" y1="815" x2="450" y2="815" stroke="#ffd700" stroke-width="2" stroke-dasharray="4"/>

  <rect x="100" y="900" width="900" height="80" fill="#6366f1" opacity="0.2" rx="8"/>
  <text x="550" y="935" text-anchor="middle" fill="#ffffff" font-size="18">Every directional term — anterior, posterior, medial, lateral, proximal, distal —</text>
  <text x="550" y="965" text-anchor="middle" fill="#ffffff" font-size="18">is measured from THIS pose, no matter how the patient is actually positioned.</text>
</svg>`,
          caption: "Anatomical position: the universal pose all chart language is measured from."
        }
      },
      {
        type: "concept",
        title: "Planes and Directional Terms Coders See Every Day",
        content: `Three **body planes** slice the body for imaging and surgery:

- **Sagittal plane** — vertical, splits left and right. A **midsagittal** cut creates equal halves.
- **Frontal (coronal) plane** — vertical, splits front and back.
- **Transverse plane** — horizontal, splits upper and lower. CT scans are read in this plane.

**Directional terms** are the words coders see most:

- **Anterior / posterior** — front / back. "Anterior cruciate ligament" vs. "posterior cruciate ligament."
- **Superior / inferior** — above / below. "Superior vena cava" sits above the heart.
- **Medial / lateral** — toward midline / away from midline. **Medial meniscus tear** ≠ lateral.
- **Proximal / distal** — closer to / farther from the trunk. **Distal radius fracture** is at the wrist.
- **Superficial / deep** — closer to / farther from the skin surface.
- **Dorsal / ventral** — back / front (often used for hand and foot).

These words appear in **thousands of ICD-10 and CPT descriptors**. Mastering them is non-negotiable.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
  <rect width="1100" height="1100" fill="#1a1a2e"/>
  <text x="550" y="60" text-anchor="middle" fill="#ffd700" font-size="34" font-weight="bold">Body Planes &amp; Directional Pairs</text>
  <text x="550" y="95" text-anchor="middle" fill="#888" font-size="18">The vocabulary embedded in code descriptors</text>

  <text x="280" y="150" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">Body Planes</text>

  <ellipse cx="280" cy="350" rx="80" ry="160" fill="none" stroke="#ffffff" stroke-width="2"/>
  <line x1="280" y1="190" x2="280" y2="510" stroke="#6366f1" stroke-width="3"/>
  <text x="280" y="540" text-anchor="middle" fill="#6366f1" font-size="16" font-weight="bold">Sagittal</text>
  <text x="280" y="560" text-anchor="middle" fill="#ffffff" font-size="13">left / right</text>

  <ellipse cx="280" cy="700" rx="80" ry="40" fill="none" stroke="#ffffff" stroke-width="2"/>
  <line x1="200" y1="700" x2="360" y2="700" stroke="#10b981" stroke-width="3"/>
  <text x="280" y="760" text-anchor="middle" fill="#10b981" font-size="16" font-weight="bold">Transverse</text>
  <text x="280" y="780" text-anchor="middle" fill="#ffffff" font-size="13">upper / lower</text>

  <ellipse cx="280" cy="880" rx="80" ry="40" fill="none" stroke="#ffffff" stroke-width="2"/>
  <ellipse cx="280" cy="880" rx="80" ry="40" fill="none" stroke="#f59e0b" stroke-width="3" stroke-dasharray="6"/>
  <text x="280" y="940" text-anchor="middle" fill="#f59e0b" font-size="16" font-weight="bold">Frontal (Coronal)</text>
  <text x="280" y="960" text-anchor="middle" fill="#ffffff" font-size="13">front / back</text>

  <text x="780" y="150" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">Directional Pairs</text>

  <rect x="550" y="180" width="470" height="55" fill="#6366f1" opacity="0.25" rx="6"/>
  <text x="570" y="215" fill="#ffffff" font-size="16"><tspan font-weight="bold">Anterior / Posterior</tspan> — front / back</text>

  <rect x="550" y="245" width="470" height="55" fill="#10b981" opacity="0.25" rx="6"/>
  <text x="570" y="280" fill="#ffffff" font-size="16"><tspan font-weight="bold">Superior / Inferior</tspan> — above / below</text>

  <rect x="550" y="310" width="470" height="55" fill="#f59e0b" opacity="0.25" rx="6"/>
  <text x="570" y="345" fill="#ffffff" font-size="16"><tspan font-weight="bold">Medial / Lateral</tspan> — toward / away from midline</text>

  <rect x="550" y="375" width="470" height="55" fill="#ec4899" opacity="0.25" rx="6"/>
  <text x="570" y="410" fill="#ffffff" font-size="16"><tspan font-weight="bold">Proximal / Distal</tspan> — closer / farther from trunk</text>

  <rect x="550" y="440" width="470" height="55" fill="#8b5cf6" opacity="0.25" rx="6"/>
  <text x="570" y="475" fill="#ffffff" font-size="16"><tspan font-weight="bold">Superficial / Deep</tspan> — near skin / far from skin</text>

  <rect x="550" y="505" width="470" height="55" fill="#0ea5e9" opacity="0.25" rx="6"/>
  <text x="570" y="540" fill="#ffffff" font-size="16"><tspan font-weight="bold">Dorsal / Ventral</tspan> — back / front (hand, foot)</text>

  <text x="780" y="610" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">Codes that hinge on these words</text>

  <rect x="550" y="630" width="470" height="40" fill="#ffffff" opacity="0.06" rx="4"/>
  <text x="570" y="657" fill="#ffffff" font-size="15">S52.50 — distal radius fx</text>

  <rect x="550" y="680" width="470" height="40" fill="#ffffff" opacity="0.06" rx="4"/>
  <text x="570" y="707" fill="#ffffff" font-size="15">S52.10 — proximal radius fx</text>

  <rect x="550" y="730" width="470" height="40" fill="#ffffff" opacity="0.06" rx="4"/>
  <text x="570" y="757" fill="#ffffff" font-size="15">S83.241A — medial meniscus tear, R knee</text>

  <rect x="550" y="780" width="470" height="40" fill="#ffffff" opacity="0.06" rx="4"/>
  <text x="570" y="807" fill="#ffffff" font-size="15">S83.281A — lateral meniscus tear, R knee</text>

  <rect x="550" y="830" width="470" height="40" fill="#ffffff" opacity="0.06" rx="4"/>
  <text x="570" y="857" fill="#ffffff" font-size="15">66984 — cataract, anterior approach</text>

  <text x="550" y="1030" text-anchor="middle" fill="#888" font-size="15" font-style="italic">One word changes one digit changes the entire claim.</text>
</svg>`,
          caption: "Planes slice the body; directional pairs label the pieces. Both live inside code descriptors."
        }
      },
      {
        type: "example",
        title: "Op Report Walkthrough: Directional Words Drive the Code",
        content: `Orthopedic op note:

> "Patient with displaced **comminuted fracture of the distal third of the left tibia**. Open reduction internal fixation performed via an **anteromedial approach**. Hardware placed along the **medial border** of the **distal tibial metaphysis**."

Watch every directional word do work:

- **Distal third of the left tibia** → tells you this is **S82.392A** (other fracture of lower end of left tibia, initial encounter), not the shaft (S82.20-) or proximal (S82.10-).
- **Open reduction internal fixation** of the distal tibia → **CPT 27758** (ORIF, tibia, distal, with or without fibular fixation).
- **Anteromedial approach** explains the surgical access in the op note — relevant if any modifiers describe approach later.
- **Medial border** confirms the hardware location for the operative summary.

Strip the directional terms and the same procedure could be coded **three or four different ways**. The directional vocabulary is what locks in a single correct code.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
  <rect width="1100" height="1100" fill="#1a1a2e"/>
  <text x="550" y="60" text-anchor="middle" fill="#ffd700" font-size="34" font-weight="bold">Mapping Directional Words to Codes</text>
  <text x="550" y="95" text-anchor="middle" fill="#888" font-size="18">Tibia fracture op report decoded</text>

  <line x1="300" y1="170" x2="300" y2="780" stroke="#ffffff" stroke-width="50" stroke-linecap="round"/>
  <text x="380" y="200" fill="#ffd700" font-size="18" font-weight="bold">Proximal third</text>
  <text x="380" y="225" fill="#ffffff" font-size="14">(near knee)</text>
  <line x1="295" y1="200" x2="370" y2="200" stroke="#ffd700" stroke-width="2"/>
  <text x="80" y="200" fill="#888" font-size="16">S82.10-</text>

  <text x="380" y="470" fill="#ffd700" font-size="18" font-weight="bold">Shaft / middle third</text>
  <line x1="295" y1="470" x2="370" y2="470" stroke="#ffd700" stroke-width="2"/>
  <text x="80" y="470" fill="#888" font-size="16">S82.20-</text>

  <rect x="270" y="680" width="60" height="100" fill="#ef4444" opacity="0.5" stroke="#ef4444" stroke-width="3"/>
  <text x="380" y="720" fill="#ef4444" font-size="20" font-weight="bold">Distal third</text>
  <text x="380" y="745" fill="#ffffff" font-size="14">(near ankle)</text>
  <line x1="335" y1="725" x2="370" y2="725" stroke="#ef4444" stroke-width="2"/>
  <text x="80" y="725" fill="#ef4444" font-size="16" font-weight="bold">S82.39-</text>

  <text x="700" y="870" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">Anteromedial approach</text>
  <circle cx="270" cy="730" r="14" fill="#10b981"/>
  <text x="700" y="900" text-anchor="middle" fill="#ffffff" font-size="15">(front + middle side of bone)</text>

  <rect x="630" y="180" width="400" height="55" fill="#10b981" opacity="0.25" rx="6"/>
  <text x="830" y="215" text-anchor="middle" fill="#ffffff" font-size="17"><tspan font-weight="bold">Distal</tspan> → tibia code series S82.39-</text>

  <rect x="630" y="250" width="400" height="55" fill="#6366f1" opacity="0.25" rx="6"/>
  <text x="830" y="285" text-anchor="middle" fill="#ffffff" font-size="17"><tspan font-weight="bold">Left</tspan> → 7th-character laterality "2"</text>

  <rect x="630" y="320" width="400" height="55" fill="#f59e0b" opacity="0.25" rx="6"/>
  <text x="830" y="355" text-anchor="middle" fill="#1a1a2e" font-size="17"><tspan font-weight="bold">Comminuted</tspan> → 5th character specificity</text>

  <rect x="630" y="390" width="400" height="55" fill="#ec4899" opacity="0.25" rx="6"/>
  <text x="830" y="425" text-anchor="middle" fill="#ffffff" font-size="17"><tspan font-weight="bold">Initial encounter</tspan> → 7th char "A"</text>

  <rect x="630" y="460" width="400" height="55" fill="#8b5cf6" opacity="0.25" rx="6"/>
  <text x="830" y="495" text-anchor="middle" fill="#ffffff" font-size="17"><tspan font-weight="bold">ORIF + distal tibia</tspan> → CPT 27758</text>

  <text x="700" y="600" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">Final codes</text>
  <rect x="500" y="620" width="400" height="45" fill="#ef4444" opacity="0.3" rx="6"/>
  <text x="700" y="650" text-anchor="middle" fill="#ffffff" font-size="17">ICD-10: S82.392A</text>
  <rect x="500" y="670" width="400" height="45" fill="#8b5cf6" opacity="0.3" rx="6"/>
  <text x="700" y="700" text-anchor="middle" fill="#ffffff" font-size="17">CPT: 27758</text>

  <text x="550" y="1030" text-anchor="middle" fill="#888" font-size="15" font-style="italic">Each directional word locks one more code digit into place.</text>
</svg>`,
          caption: "Proximal vs. distal, left vs. right, anterior vs. medial — every term locks in a digit."
        }
      },
      {
        type: "quiz",
        title: "Read Like a Coder",
        question: "A path report describes a tumor located in the 'inferolateral aspect of the right lobe of the thyroid.' Which combination correctly interprets the directional terms?",
        options: [
          { text: "Upper and inner portion of the right thyroid lobe.", correct: false },
          { text: "Lower and outer portion of the right thyroid lobe.", correct: true },
          { text: "Front and back portion of the right thyroid lobe.", correct: false },
          { text: "Deep and superficial portion of the right thyroid lobe.", correct: false }
        ],
        explanation: "**Inferolateral** combines two directional terms: **inferior** (below / lower) and **lateral** (away from the midline / outer). So the tumor sits in the **lower-outer portion** of the right thyroid lobe. Coders who recognize compound directional terms can immediately picture the location, which matters for codes that specify lobe and region, and for surgical planning notes that drive CPT selection.",
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
  <rect width="1100" height="1100" fill="#1a1a2e"/>
  <text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="36" font-weight="bold">Compound Directional Terms</text>
  <text x="550" y="110" text-anchor="middle" fill="#888" font-size="20">"Inferolateral" = inferior + lateral</text>

  <ellipse cx="400" cy="500" rx="100" ry="170" fill="#6366f1" opacity="0.3" stroke="#6366f1" stroke-width="3"/>
  <ellipse cx="700" cy="500" rx="100" ry="170" fill="#6366f1" opacity="0.3" stroke="#6366f1" stroke-width="3"/>
  <rect x="500" y="450" width="100" height="100" fill="#6366f1" opacity="0.3" stroke="#6366f1" stroke-width="3"/>

  <text x="400" y="350" text-anchor="middle" fill="#ffffff" font-size="16" font-weight="bold">Left lobe</text>
  <text x="700" y="350" text-anchor="middle" fill="#ffffff" font-size="16" font-weight="bold">Right lobe</text>
  <text x="550" y="430" text-anchor="middle" fill="#888" font-size="13">isthmus</text>

  <line x1="550" y1="280" x2="550" y2="720" stroke="#888" stroke-width="2" stroke-dasharray="6"/>
  <text x="550" y="270" text-anchor="middle" fill="#888" font-size="13">midline</text>

  <text x="950" y="350" text-anchor="middle" fill="#ffd700" font-size="16" font-weight="bold">Superior</text>
  <line x1="800" y1="345" x2="900" y2="345" stroke="#ffd700" stroke-width="2"/>
  <text x="950" y="660" text-anchor="middle" fill="#ffd700" font-size="16" font-weight="bold">Inferior</text>
  <line x1="800" y1="655" x2="900" y2="655" stroke="#ffd700" stroke-width="2"/>

  <text x="700" y="220" text-anchor="middle" fill="#10b981" font-size="16" font-weight="bold">Medial ↔ Lateral</text>
  <line x1="610" y1="240" x2="800" y2="240" stroke="#10b981" stroke-width="2"/>
  <text x="612" y="255" fill="#10b981" font-size="13">medial</text>
  <text x="765" y="255" fill="#10b981" font-size="13">lateral</text>

  <circle cx="770" cy="620" r="28" fill="#ef4444"/>
  <text x="770" y="627" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="bold">tumor</text>

  <line x1="770" y1="650" x2="900" y2="780" stroke="#ef4444" stroke-width="2"/>
  <text x="910" y="785" fill="#ef4444" font-size="16" font-weight="bold">inferolateral</text>
  <text x="910" y="805" fill="#ffffff" font-size="14">(lower + outer)</text>

  <rect x="200" y="850" width="700" height="55" fill="#10b981" opacity="0.25" rx="6"/>
  <text x="550" y="887" text-anchor="middle" fill="#ffffff" font-size="18"><tspan font-weight="bold">inferior</tspan> = below  +  <tspan font-weight="bold">lateral</tspan> = away from midline</text>

  <rect x="200" y="915" width="700" height="55" fill="#ffd700" opacity="0.25" rx="6"/>
  <text x="550" y="952" text-anchor="middle" fill="#ffffff" font-size="18">Mentally combine the words — picture the quadrant first, then code.</text>
</svg>`,
          caption: "Compound terms like inferolateral, anteromedial, and posterosuperior are just two pairs combined."
        }
      },
      {
        type: "application",
        title: "Build Your Directional Reflex",
        content: `Stand up. Right now, while you're reading this. Put yourself in **anatomical position**: feet together, arms at sides, palms forward.

Now point to: your **anterior shoulder**. Your **posterior calf**. The **lateral side** of your knee. Your **proximal humerus**. Your **distal phalanges**. The **dorsum** of your foot. Say each word out loud as you point.

Do this drill **once a day this week**. It feels silly. It works. You are wiring your brain to translate directional words into spatial pictures in **under a second** — which is exactly the speed a working coder needs to read a chart fluently.

When you can hear "**distal medial epicondyle of the right humerus**" and instantly point to the spot on your own elbow, you are operating at coder fluency. From there, finding the right ICD-10 or CPT code becomes a lookup, not a guess.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
  <rect width="1100" height="1100" fill="#1a1a2e"/>
  <text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="36" font-weight="bold">The Point-and-Say Drill</text>
  <text x="550" y="110" text-anchor="middle" fill="#888" font-size="20">Daily, 2 minutes, builds spatial fluency</text>

  <ellipse cx="300" cy="240" rx="40" ry="45" fill="none" stroke="#ffffff" stroke-width="3"/>
  <line x1="300" y1="285" x2="300" y2="540" stroke="#ffffff" stroke-width="3"/>
  <line x1="300" y1="340" x2="180" y2="470" stroke="#ffffff" stroke-width="3"/>
  <line x1="300" y1="340" x2="420" y2="470" stroke="#ffffff" stroke-width="3"/>
  <circle cx="180" cy="470" r="14" fill="#ffd700"/>
  <circle cx="420" cy="470" r="14" fill="#ffd700"/>
  <line x1="300" y1="540" x2="250" y2="760" stroke="#ffffff" stroke-width="3"/>
  <line x1="300" y1="540" x2="350" y2="760" stroke="#ffffff" stroke-width="3"/>

  <circle cx="300" cy="330" r="8" fill="#10b981"/>
  <text x="115" y="335" fill="#10b981" font-size="14" font-weight="bold">anterior shoulder</text>

  <circle cx="370" cy="700" r="8" fill="#6366f1"/>
  <text x="395" y="705" fill="#6366f1" font-size="14" font-weight="bold">posterior calf</text>

  <circle cx="265" cy="650" r="8" fill="#f59e0b"/>
  <text x="100" y="655" fill="#f59e0b" font-size="14" font-weight="bold">lateral knee</text>

  <circle cx="350" cy="380" r="8" fill="#ec4899"/>
  <text x="370" y="385" fill="#ec4899" font-size="14" font-weight="bold">proximal humerus</text>

  <circle cx="180" cy="475" r="6" fill="#8b5cf6"/>
  <text x="60" y="500" fill="#8b5cf6" font-size="14" font-weight="bold">distal phalanges</text>

  <text x="780" y="200" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">Daily 5-term sprint</text>

  <rect x="580" y="230" width="400" height="50" fill="#10b981" opacity="0.25" rx="6"/>
  <text x="780" y="262" text-anchor="middle" fill="#ffffff" font-size="17">1. Anterior shoulder</text>

  <rect x="580" y="290" width="400" height="50" fill="#6366f1" opacity="0.25" rx="6"/>
  <text x="780" y="322" text-anchor="middle" fill="#ffffff" font-size="17">2. Posterior calf</text>

  <rect x="580" y="350" width="400" height="50" fill="#f59e0b" opacity="0.25" rx="6"/>
  <text x="780" y="382" text-anchor="middle" fill="#1a1a2e" font-size="17">3. Lateral knee</text>

  <rect x="580" y="410" width="400" height="50" fill="#ec4899" opacity="0.25" rx="6"/>
  <text x="780" y="442" text-anchor="middle" fill="#ffffff" font-size="17">4. Proximal humerus</text>

  <rect x="580" y="470" width="400" height="50" fill="#8b5cf6" opacity="0.25" rx="6"/>
  <text x="780" y="502" text-anchor="middle" fill="#ffffff" font-size="17">5. Distal phalanges</text>

  <text x="780" y="600" text-anchor="middle" fill="#ffd700" font-size="20">Progression</text>

  <text x="780" y="640" text-anchor="middle" fill="#ffffff" font-size="16">Day 1: with hesitation</text>
  <text x="780" y="675" text-anchor="middle" fill="#ffffff" font-size="16">Day 3: smooth</text>
  <text x="780" y="710" text-anchor="middle" fill="#ffffff" font-size="16">Day 7: under one second per term</text>

  <rect x="200" y="900" width="700" height="100" fill="#ffd700" opacity="0.15" rx="8"/>
  <text x="550" y="935" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">Goal</text>
  <text x="550" y="965" text-anchor="middle" fill="#ffffff" font-size="17">Hear the term → see the spot on your body → know the code series</text>
  <text x="550" y="990" text-anchor="middle" fill="#ffffff" font-size="17">in under a second. That's coder fluency.</text>
</svg>`,
          caption: "Two minutes a day for a week trades hesitation for instant spatial recognition."
        }
      }
    ]
  },
  {
    id: "cpc-foundation-lesson-3",
    title: "Decoding Medical Terms: Roots, Prefixes, and Suffixes for Coders",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "The Lego System Behind Every Medical Word",
        content: `Medical terminology looks impossible until you see the trick: it's **modular**. Every long word is built from a small set of recyclable parts — **prefixes**, **word roots**, and **suffixes**. Learn the parts and you can read words you've **never seen before**.

This is the single highest-leverage skill in a coder's foundation. There are roughly **600 active CPT codes** that change every year and **70,000+ ICD-10-CM codes**. You will never memorize them. You don't have to. You will read them.

A coder who sees **"cholecystectomy"** for the first time should immediately decode:
- **chol/e** = bile
- **cyst** = bladder (here, gallbladder)
- **-ectomy** = surgical removal

→ Removal of the gallbladder. CPT range **47562-47564**.

This lesson hands you the system. From here, the medical dictionary becomes optional.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
  <rect width="1100" height="1100" fill="#1a1a2e"/>
  <text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="36" font-weight="bold">Words Are Built, Not Memorized</text>
  <text x="550" y="110" text-anchor="middle" fill="#888" font-size="20">Three parts, infinite combinations</text>

  <rect x="100" y="200" width="280" height="180" fill="#6366f1" rx="10"/>
  <text x="240" y="260" text-anchor="middle" fill="#ffffff" font-size="28" font-weight="bold">PREFIX</text>
  <text x="240" y="295" text-anchor="middle" fill="#ffffff" font-size="16">Beginning</text>
  <text x="240" y="325" text-anchor="middle" fill="#ffffff" font-size="16">Modifies meaning</text>
  <text x="240" y="355" text-anchor="middle" fill="#ffd700" font-size="16" font-weight="bold">hyper-, hypo-, peri-</text>

  <rect x="410" y="200" width="280" height="180" fill="#10b981" rx="10"/>
  <text x="550" y="260" text-anchor="middle" fill="#1a1a2e" font-size="28" font-weight="bold">ROOT</text>
  <text x="550" y="295" text-anchor="middle" fill="#1a1a2e" font-size="16">Body part or system</text>
  <text x="550" y="325" text-anchor="middle" fill="#1a1a2e" font-size="16">Core meaning</text>
  <text x="550" y="355" text-anchor="middle" fill="#1a1a2e" font-size="16" font-weight="bold">cardi/o, gastr/o, oste/o</text>

  <rect x="720" y="200" width="280" height="180" fill="#f59e0b" rx="10"/>
  <text x="860" y="260" text-anchor="middle" fill="#1a1a2e" font-size="28" font-weight="bold">SUFFIX</text>
  <text x="860" y="295" text-anchor="middle" fill="#1a1a2e" font-size="16">Ending</text>
  <text x="860" y="325" text-anchor="middle" fill="#1a1a2e" font-size="16">Action or condition</text>
  <text x="860" y="355" text-anchor="middle" fill="#1a1a2e" font-size="16" font-weight="bold">-ectomy, -itis, -ology</text>

  <text x="550" y="460" text-anchor="middle" fill="#ffd700" font-size="24" font-weight="bold">Worked example: cholecystectomy</text>

  <rect x="200" y="500" width="220" height="90" fill="#6366f1" opacity="0.3" rx="8"/>
  <text x="310" y="540" text-anchor="middle" fill="#6366f1" font-size="22" font-weight="bold">chol/e</text>
  <text x="310" y="570" text-anchor="middle" fill="#ffffff" font-size="16">bile</text>

  <rect x="440" y="500" width="220" height="90" fill="#10b981" opacity="0.3" rx="8"/>
  <text x="550" y="540" text-anchor="middle" fill="#10b981" font-size="22" font-weight="bold">cyst</text>
  <text x="550" y="570" text-anchor="middle" fill="#ffffff" font-size="16">bladder</text>

  <rect x="680" y="500" width="220" height="90" fill="#f59e0b" opacity="0.3" rx="8"/>
  <text x="790" y="540" text-anchor="middle" fill="#f59e0b" font-size="22" font-weight="bold">-ectomy</text>
  <text x="790" y="570" text-anchor="middle" fill="#ffffff" font-size="16">surgical removal</text>

  <line x1="550" y1="600" x2="550" y2="650" stroke="#ffd700" stroke-width="3"/>
  <polygon points="540,645 560,645 550,665" fill="#ffd700"/>

  <rect x="200" y="680" width="700" height="80" fill="#ffd700" opacity="0.2" rx="8"/>
  <text x="550" y="720" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">"surgical removal of the gallbladder"</text>
  <text x="550" y="748" text-anchor="middle" fill="#ffffff" font-size="16">→ CPT 47562 (laparoscopic) / 47564 (with cholangiography)</text>

  <text x="550" y="850" text-anchor="middle" fill="#888" font-size="18">Decode any word the same way:</text>
  <text x="550" y="885" text-anchor="middle" fill="#ffffff" font-size="18">read suffix first, then root, then prefix.</text>
  <text x="550" y="920" text-anchor="middle" fill="#ffffff" font-size="18">Build the meaning back-to-front.</text>

  <text x="550" y="1020" text-anchor="middle" fill="#ffd700" font-size="18" font-style="italic">No dictionary needed.</text>
</svg>`,
          caption: "Every medical term is a stack of recyclable parts. Learn the parts, read everything."
        }
      },
      {
        type: "concept",
        title: "The High-Frequency Parts Every Coder Memorizes",
        content: `Out of thousands of word parts, a small core appears in **80%+ of medical terms coders touch**. Memorize these and you decode the rest.

**Suffixes (the action / condition ending):**
- **-ectomy** removal · **-otomy** cutting into · **-ostomy** new opening · **-plasty** repair
- **-itis** inflammation · **-osis** abnormal condition · **-emia** blood condition · **-pathy** disease
- **-graphy** imaging · **-scopy** visual exam · **-algia** pain

**Roots (the body part / system):**
- **cardi/o** heart · **pneum/o** lung · **gastr/o** stomach · **hepat/o** liver
- **nephr/o** kidney · **oste/o** bone · **arthr/o** joint · **derm/o** skin
- **hem/o, hemat/o** blood · **enter/o** intestine · **col/o** colon · **cyst/o** bladder

**Prefixes (modifiers):**
- **hyper-** above/excess · **hypo-** below/deficient · **brady-** slow · **tachy-** fast
- **peri-** around · **endo-** within · **epi-** upon · **sub-** below · **a-, an-** without

Stack these and you can read **"endoscopic gastroduodenoscopy with biopsy"** without breaking stride.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
  <rect width="1100" height="1100" fill="#1a1a2e"/>
  <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-size="34" font-weight="bold">Coder's Core Word-Part Cheat Sheet</text>
  <text x="550" y="90" text-anchor="middle" fill="#888" font-size="17">Learn these and decode ~80% of charts</text>

  <text x="180" y="140" fill="#f59e0b" font-size="22" font-weight="bold">SUFFIXES</text>
  <rect x="60" y="155" width="320" height="35" fill="#f59e0b" opacity="0.15" rx="4"/>
  <text x="75" y="180" fill="#ffffff" font-size="14">-ectomy &#8594; removal</text>
  <rect x="60" y="195" width="320" height="35" fill="#f59e0b" opacity="0.15" rx="4"/>
  <text x="75" y="220" fill="#ffffff" font-size="14">-otomy &#8594; cutting into</text>
  <rect x="60" y="235" width="320" height="35" fill="#f59e0b" opacity="0.15" rx="4"/>
  <text x="75" y="260" fill="#ffffff" font-size="14">-ostomy &#8594; new opening</text>
  <rect x="60" y="275" width="320" height="35" fill="#f59e0b" opacity="0.15" rx="4"/>
  <text x="75" y="300" fill="#ffffff" font-size="14">-plasty &#8594; repair</text>
  <rect x="60" y="315" width="320" height="35" fill="#f59e0b" opacity="0.15" rx="4"/>
  <text x="75" y="340" fill="#ffffff" font-size="14">-itis &#8594; inflammation</text>
  <rect x="60" y="355" width="320" height="35" fill="#f59e0b" opacity="0.15" rx="4"/>
  <text x="75" y="380" fill="#ffffff" font-size="14">-osis &#8594; abnormal condition</text>
  <rect x="60" y="395" width="320" height="35" fill="#f59e0b" opacity="0.15" rx="4"/>
  <text x="75" y="420" fill="#ffffff" font-size="14">-emia &#8594; blood condition</text>
  <rect x="60" y="435" width="320" height="35" fill="#f59e0b" opacity="0.15" rx="4"/>
  <text x="75" y="460" fill="#ffffff" font-size="14">-pathy &#8594; disease</text>
  <rect x="60" y="475" width="320" height="35" fill="#f59e0b" opacity="0.15" rx="4"/>
  <text x="75" y="500" fill="#ffffff" font-size="14">-graphy &#8594; imaging</text>
  <rect x="60" y="515" width="320" height="35" fill="#f59e0b" opacity="0.15" rx="4"/>
  <text x="75" y="540" fill="#ffffff" font-size="14">-scopy &#8594; visual exam</text>
  <rect x="60" y="555" width="320" height="35" fill="#f59e0b" opacity="0.15" rx="4"/>
  <text x="75" y="580" fill="#ffffff" font-size="14">-algia &#8594; pain</text>

  <text x="550" y="140" fill="#10b981" font-size="22" font-weight="bold">ROOTS</text>
  <rect x="400" y="155" width="320" height="35" fill="#10b981" opacity="0.15" rx="4"/>
  <text x="415" y="180" fill="#ffffff" font-size="14">cardi/o &#8594; heart</text>
  <rect x="400" y="195" width="320" height="35" fill="#10b981" opacity="0.15" rx="4"/>
  <text x="415" y="220" fill="#ffffff" font-size="14">pneum/o &#8594; lung</text>
  <rect x="400" y="235" width="320" height="35" fill="#10b981" opacity="0.15" rx="4"/>
  <text x="415" y="260" fill="#ffffff" font-size="14">gastr/o &#8594; stomach</text>
  <rect x="400" y="275" width="320" height="35" fill="#10b981" opacity="0.15" rx="4"/>
  <text x="415" y="300" fill="#ffffff" font-size="14">hepat/o &#8594; liver</text>
  <rect x="400" y="315" width="320" height="35" fill="#10b981" opacity="0.15" rx="4"/>
  <text x="415" y="340" fill="#ffffff" font-size="14">nephr/o &#8594; kidney</text>
  <rect x="400" y="355" width="320" height="35" fill="#10b981" opacity="0.15" rx="4"/>
  <text x="415" y="380" fill="#ffffff" font-size="14">oste/o &#8594; bone</text>
  <rect x="400" y="395" width="320" height="35" fill="#10b981" opacity="0.15" rx="4"/>
  <text x="415" y="420" fill="#ffffff" font-size="14">arthr/o &#8594; joint</text>
  <rect x="400" y="435" width="320" height="35" fill="#10b981" opacity="0.15" rx="4"/>
  <text x="415" y="460" fill="#ffffff" font-size="14">derm/o &#8594; skin</text>
  <rect x="400" y="475" width="320" height="35" fill="#10b981" opacity="0.15" rx="4"/>
  <text x="415" y="500" fill="#ffffff" font-size="14">hem/o &#8594; blood</text>
  <rect x="400" y="515" width="320" height="35" fill="#10b981" opacity="0.15" rx="4"/>
  <text x="415" y="540" fill="#ffffff" font-size="14">enter/o &#8594; intestine</text>
  <rect x="400" y="555" width="320" height="35" fill="#10b981" opacity="0.15" rx="4"/>
  <text x="415" y="580" fill="#ffffff" font-size="14">cyst/o &#8594; bladder</text>

  <text x="900" y="140" fill="#6366f1" font-size="22" font-weight="bold">PREFIXES</text>
  <rect x="740" y="155" width="320" height="35" fill="#6366f1" opacity="0.15" rx="4"/>
  <text x="755" y="180" fill="#ffffff" font-size="14">hyper- &#8594; excess / above</text>
  <rect x="740" y="195" width="320" height="35" fill="#6366f1" opacity="0.15" rx="4"/>
  <text x="755" y="220" fill="#ffffff" font-size="14">hypo- &#8594; deficient / below</text>
  <rect x="740" y="235" width="320" height="35" fill="#6366f1" opacity="0.15" rx="4"/>
  <text x="755" y="260" fill="#ffffff" font-size="14">brady- &#8594; slow</text>
  <rect x="740" y="275" width="320" height="35" fill="#6366f1" opacity="0.15" rx="4"/>
  <text x="755" y="300" fill="#ffffff" font-size="14">tachy- &#8594; fast</text>
  <rect x="740" y="315" width="320" height="35" fill="#6366f1" opacity="0.15" rx="4"/>
  <text x="755" y="340" fill="#ffffff" font-size="14">peri- &#8594; around</text>
  <rect x="740" y="355" width="320" height="35" fill="#6366f1" opacity="0.15" rx="4"/>
  <text x="755" y="380" fill="#ffffff" font-size="14">endo- &#8594; within</text>
  <rect x="740" y="395" width="320" height="35" fill="#6366f1" opacity="0.15" rx="4"/>
  <text x="755" y="420" fill="#ffffff" font-size="14">epi- &#8594; upon</text>
  <rect x="740" y="435" width="320" height="35" fill="#6366f1" opacity="0.15" rx="4"/>
  <text x="755" y="460" fill="#ffffff" font-size="14">sub- &#8594; below</text>
  <rect x="740" y="475" width="320" height="35" fill="#6366f1" opacity="0.15" rx="4"/>
  <text x="755" y="500" fill="#ffffff" font-size="14">a- / an- &#8594; without</text>
  <rect x="740" y="515" width="320" height="35" fill="#6366f1" opacity="0.15" rx="4"/>
  <text x="755" y="540" fill="#ffffff" font-size="14">dys- &#8594; difficult / painful</text>
  <rect x="740" y="555" width="320" height="35" fill="#6366f1" opacity="0.15" rx="4"/>
  <text x="755" y="580" fill="#ffffff" font-size="14">poly- &#8594; many</text>

  <text x="550" y="660" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">Stack example: gastr/o + enter/o + -itis</text>

  <rect x="200" y="690" width="200" height="70" fill="#10b981" opacity="0.3" rx="8"/>
  <text x="300" y="725" text-anchor="middle" fill="#10b981" font-size="20" font-weight="bold">gastr/o</text>
  <text x="300" y="748" text-anchor="middle" fill="#ffffff" font-size="14">stomach</text>

  <rect x="450" y="690" width="200" height="70" fill="#10b981" opacity="0.3" rx="8"/>
  <text x="550" y="725" text-anchor="middle" fill="#10b981" font-size="20" font-weight="bold">enter/o</text>
  <text x="550" y="748" text-anchor="middle" fill="#ffffff" font-size="14">intestine</text>

  <rect x="700" y="690" width="200" height="70" fill="#f59e0b" opacity="0.3" rx="8"/>
  <text x="800" y="725" text-anchor="middle" fill="#f59e0b" font-size="20" font-weight="bold">-itis</text>
  <text x="800" y="748" text-anchor="middle" fill="#ffffff" font-size="14">inflammation</text>

  <rect x="200" y="800" width="700" height="60" fill="#ffd700" opacity="0.2" rx="8"/>
  <text x="550" y="838" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">gastroenteritis = stomach + intestine inflammation</text>

  <text x="550" y="930" text-anchor="middle" fill="#ffffff" font-size="18">ICD-10: K52.9 (noninfective gastroenteritis &amp; colitis, unspecified)</text>
  <text x="550" y="965" text-anchor="middle" fill="#888" font-size="15" font-style="italic">Read the parts; the code reveals itself.</text>
</svg>`,
          caption: "A small core of suffixes, roots, and prefixes unlocks the majority of clinical vocabulary."
        }
      },
      {
        type: "example",
        title: "Decoding a Word You've Never Seen Before",
        content: `Suppose a path report uses the term **"nephrolithotripsy."** You've never heard it. Don't reach for a dictionary — **decode it.**

Pull it apart, **suffix first**:

- **-tripsy** = crushing (from Greek *tribein*, to rub or crush)
- **lith/o** = stone (think monolith, lithograph)
- **nephr/o** = kidney

Read back to front: **"crushing of a stone in the kidney."** That's a procedure done for kidney stones.

Now check the CPT range for kidney stone procedures — **50080-50081** (percutaneous nephrostolithotomy / nephrolithotomy) or **50590** (extracorporeal shock wave lithotripsy for the kidney). The decoded word tells you which family to search before you even open the index.

This is the move that separates beginner coders from production coders. The beginner Googles the word. The production coder **decodes**, narrows the code family, and looks up only the final modifier or laterality. **Speed and accuracy both climb.**`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
  <rect width="1100" height="1100" fill="#1a1a2e"/>
  <text x="550" y="60" text-anchor="middle" fill="#ffd700" font-size="34" font-weight="bold">Live Decode: "nephrolithotripsy"</text>
  <text x="550" y="95" text-anchor="middle" fill="#888" font-size="18">A word you've never seen, decoded in 10 seconds</text>

  <text x="550" y="160" text-anchor="middle" fill="#ffffff" font-size="32" font-weight="bold">n e p h r o · l i t h o · t r i p s y</text>

  <line x1="200" y1="200" x2="200" y2="280" stroke="#10b981" stroke-width="3"/>
  <line x1="500" y1="200" x2="500" y2="280" stroke="#8b5cf6" stroke-width="3"/>
  <line x1="800" y1="200" x2="800" y2="280" stroke="#f59e0b" stroke-width="3"/>

  <rect x="80" y="290" width="240" height="100" fill="#10b981" opacity="0.25" rx="8"/>
  <text x="200" y="325" text-anchor="middle" fill="#10b981" font-size="22" font-weight="bold">nephr/o</text>
  <text x="200" y="355" text-anchor="middle" fill="#ffffff" font-size="16">kidney</text>
  <text x="200" y="378" text-anchor="middle" fill="#888" font-size="13">(root)</text>

  <rect x="380" y="290" width="240" height="100" fill="#8b5cf6" opacity="0.25" rx="8"/>
  <text x="500" y="325" text-anchor="middle" fill="#8b5cf6" font-size="22" font-weight="bold">lith/o</text>
  <text x="500" y="355" text-anchor="middle" fill="#ffffff" font-size="16">stone</text>
  <text x="500" y="378" text-anchor="middle" fill="#888" font-size="13">(combining root)</text>

  <rect x="680" y="290" width="240" height="100" fill="#f59e0b" opacity="0.25" rx="8"/>
  <text x="800" y="325" text-anchor="middle" fill="#f59e0b" font-size="22" font-weight="bold">-tripsy</text>
  <text x="800" y="355" text-anchor="middle" fill="#ffffff" font-size="16">crushing</text>
  <text x="800" y="378" text-anchor="middle" fill="#888" font-size="13">(suffix)</text>

  <text x="550" y="450" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">Read back-to-front:</text>
  <text x="550" y="490" text-anchor="middle" fill="#ffffff" font-size="22">"crushing of a stone in the kidney"</text>

  <line x1="550" y1="510" x2="550" y2="555" stroke="#ffd700" stroke-width="3"/>
  <polygon points="540,550 560,550 550,570" fill="#ffd700"/>

  <text x="550" y="610" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">Now narrow the CPT code family</text>

  <rect x="150" y="640" width="800" height="55" fill="#6366f1" opacity="0.25" rx="6"/>
  <text x="550" y="675" text-anchor="middle" fill="#ffffff" font-size="17">50080-50081 — Percutaneous nephrostolithotomy / nephrolithotomy</text>

  <rect x="150" y="705" width="800" height="55" fill="#10b981" opacity="0.25" rx="6"/>
  <text x="550" y="740" text-anchor="middle" fill="#ffffff" font-size="17">50590 — Extracorporeal shock wave lithotripsy (ESWL), kidney</text>

  <rect x="150" y="770" width="800" height="55" fill="#ec4899" opacity="0.25" rx="6"/>
  <text x="550" y="805" text-anchor="middle" fill="#ffffff" font-size="17">52353 — Ureteroscopy with lithotripsy</text>

  <text x="550" y="880" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">Last step: read the chart for the approach</text>
  <text x="550" y="915" text-anchor="middle" fill="#ffffff" font-size="17">percutaneous? shock wave? ureteroscopic?</text>
  <text x="550" y="950" text-anchor="middle" fill="#ffffff" font-size="17">→ one of three codes, picked in seconds</text>

  <text x="550" y="1020" text-anchor="middle" fill="#888" font-size="15" font-style="italic">No dictionary. No Google. Just word parts.</text>
</svg>`,
          caption: "Decode the term, identify the code family, then pick by approach — production coder workflow."
        }
      },
      {
        type: "quiz",
        title: "Decode This Term",
        question: "A discharge summary mentions the patient underwent a 'pericardiocentesis.' Using your word parts, what does this procedure involve?",
        options: [
          { text: "Surgical removal of the heart muscle.", correct: false },
          { text: "Repair of the membrane around the heart.", correct: false },
          { text: "Surgical puncture to withdraw fluid from the sac around the heart.", correct: true },
          { text: "Imaging study of the heart's blood vessels.", correct: false }
        ],
        explanation: "Break it down: **peri-** (around) + **cardi/o** (heart) + **-centesis** (surgical puncture to remove fluid). Combined: **'surgical puncture around the heart'** — specifically, draining fluid from the **pericardial sac**. The CPT code is **33010** (pericardiocentesis, initial) or **33011** (subsequent). Knowing the suffix **-centesis** (used in thoracentesis, paracentesis, amniocentesis) signals the procedure family before you even look at CPT.",
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
  <rect width="1100" height="1100" fill="#1a1a2e"/>
  <text x="550" y="60" text-anchor="middle" fill="#ffd700" font-size="34" font-weight="bold">Decoding "pericardiocentesis"</text>
  <text x="550" y="95" text-anchor="middle" fill="#888" font-size="18">peri- + cardi/o + -centesis</text>

  <rect x="100" y="160" width="280" height="120" fill="#6366f1" opacity="0.25" rx="10"/>
  <text x="240" y="205" text-anchor="middle" fill="#6366f1" font-size="26" font-weight="bold">peri-</text>
  <text x="240" y="240" text-anchor="middle" fill="#ffffff" font-size="17">around</text>
  <text x="240" y="265" text-anchor="middle" fill="#888" font-size="13">(prefix)</text>

  <rect x="410" y="160" width="280" height="120" fill="#10b981" opacity="0.25" rx="10"/>
  <text x="550" y="205" text-anchor="middle" fill="#10b981" font-size="26" font-weight="bold">cardi/o</text>
  <text x="550" y="240" text-anchor="middle" fill="#ffffff" font-size="17">heart</text>
  <text x="550" y="265" text-anchor="middle" fill="#888" font-size="13">(root)</text>

  <rect x="720" y="160" width="280" height="120" fill="#f59e0b" opacity="0.25" rx="10"/>
  <text x="860" y="205" text-anchor="middle" fill="#f59e0b" font-size="26" font-weight="bold">-centesis</text>
  <text x="860" y="240" text-anchor="middle" fill="#ffffff" font-size="17">surgical puncture</text>
  <text x="860" y="265" text-anchor="middle" fill="#888" font-size="13">(suffix)</text>

  <ellipse cx="550" cy="500" rx="180" ry="140" fill="none" stroke="#ec4899" stroke-width="3" stroke-dasharray="8"/>
  <text x="550" y="370" text-anchor="middle" fill="#ec4899" font-size="14">pericardial sac (peri-)</text>

  <path d="M 480 440 Q 460 480 480 540 Q 510 580 550 580 Q 590 580 620 540 Q 640 480 620 440 Q 590 410 550 410 Q 510 410 480 440 Z" fill="#ef4444" opacity="0.6" stroke="#ef4444" stroke-width="3"/>
  <text x="550" y="510" text-anchor="middle" fill="#ffffff" font-size="18" font-weight="bold">HEART</text>

  <line x1="780" y1="420" x2="640" y2="510" stroke="#ffd700" stroke-width="4"/>
  <polygon points="640,510 660,505 655,495" fill="#ffd700"/>
  <text x="820" y="415" fill="#ffd700" font-size="16" font-weight="bold">needle (-centesis)</text>

  <text x="550" y="710" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">Meaning</text>
  <rect x="150" y="730" width="800" height="55" fill="#ffd700" opacity="0.2" rx="8"/>
  <text x="550" y="765" text-anchor="middle" fill="#ffffff" font-size="18">Surgical puncture to withdraw fluid from the sac around the heart</text>

  <text x="550" y="850" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">CPT mapping</text>
  <rect x="150" y="870" width="800" height="45" fill="#10b981" opacity="0.25" rx="6"/>
  <text x="550" y="900" text-anchor="middle" fill="#ffffff" font-size="17">33010 — pericardiocentesis, initial</text>
  <rect x="150" y="925" width="800" height="45" fill="#10b981" opacity="0.25" rx="6"/>
  <text x="550" y="955" text-anchor="middle" fill="#ffffff" font-size="17">33011 — pericardiocentesis, subsequent</text>

  <text x="550" y="1020" text-anchor="middle" fill="#888" font-size="15" font-style="italic">Same -centesis suffix: thoracentesis, paracentesis, amniocentesis.</text>
</svg>`,
          caption: "Suffix recognition — -centesis means fluid puncture — gets you to the right CPT family fast."
        }
      },
      {
        type: "application",
        title: "Your Word-Part Reps for This Week",
        content: `Make this week the week your brain stops translating medical terms and starts **reading them natively**. Two-part drill:

**Part 1 — Memorize the core list.** Take the suffixes, roots, and prefixes from this lesson and put each on a flashcard (paper or Anki). **Drill twice a day, three minutes each session.** By Friday you should be able to recall any one in under two seconds.

**Part 2 — Decode in the wild.** Every time you encounter a medical term this week — in a podcast, a TV show, a chart, a study guide — **stop and decode it out loud**. Suffix first. Then root. Then prefix. Say the meaning. Then look it up to check.

Track your hit rate. By the end of the week, aim for **80% accuracy on unfamiliar terms**. That is the threshold where you stop fearing op reports and start reading them like a newspaper.

This single skill, practiced consistently, is **the highest-ROI study habit in CPC prep**. Lock it in now.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
  <rect width="1100" height="1100" fill="#1a1a2e"/>
  <text x="550" y="60" text-anchor="middle" fill="#ffd700" font-size="34" font-weight="bold">The Word-Part Mastery Week</text>
  <text x="550" y="95" text-anchor="middle" fill="#888" font-size="18">Two drills, seven days, lifetime payoff</text>

  <rect x="60" y="150" width="490" height="500" fill="#6366f1" opacity="0.15" stroke="#6366f1" stroke-width="2" rx="10"/>
  <text x="305" y="195" text-anchor="middle" fill="#6366f1" font-size="24" font-weight="bold">Drill 1 — Flashcards</text>

  <rect x="90" y="220" width="430" height="50" fill="#6366f1" opacity="0.25" rx="6"/>
  <text x="305" y="252" text-anchor="middle" fill="#ffffff" font-size="16">Card per suffix, root, prefix</text>

  <rect x="90" y="285" width="430" height="50" fill="#6366f1" opacity="0.25" rx="6"/>
  <text x="305" y="317" text-anchor="middle" fill="#ffffff" font-size="16">2 sessions/day, 3 minutes each</text>

  <rect x="90" y="350" width="430" height="50" fill="#6366f1" opacity="0.25" rx="6"/>
  <text x="305" y="382" text-anchor="middle" fill="#ffffff" font-size="16">Front: word part &#8226; Back: meaning</text>

  <rect x="90" y="415" width="430" height="50" fill="#6366f1" opacity="0.25" rx="6"/>
  <text x="305" y="447" text-anchor="middle" fill="#ffffff" font-size="16">Shuffle daily, no cheating</text>

  <rect x="90" y="480" width="430" height="50" fill="#6366f1" opacity="0.25" rx="6"/>
  <text x="305" y="512" text-anchor="middle" fill="#ffffff" font-size="16">Goal: under 2s recall by Friday</text>

  <rect x="90" y="555" width="430" height="70" fill="#10b981" opacity="0.3" rx="6"/>
  <text x="305" y="585" text-anchor="middle" fill="#10b981" font-size="16" font-weight="bold">Total time/week: ~42 minutes</text>
  <text x="305" y="610" text-anchor="middle" fill="#ffffff" font-size="14">For a lifetime skill</text>

  <rect x="570" y="150" width="490" height="500" fill="#f59e0b" opacity="0.15" stroke="#f59e0b" stroke-width="2" rx="10"/>
  <text x="815" y="195" text-anchor="middle" fill="#f59e0b" font-size="24" font-weight="bold">Drill 2 — Decode in the Wild</text>

  <rect x="600" y="220" width="430" height="50" fill="#f59e0b" opacity="0.25" rx="6"/>
  <text x="815" y="252" text-anchor="middle" fill="#1a1a2e" font-size="16">Hear an unfamiliar term? Pause.</text>

  <rect x="600" y="285" width="430" height="50" fill="#f59e0b" opacity="0.25" rx="6"/>
  <text x="815" y="317" text-anchor="middle" fill="#1a1a2e" font-size="16">Say it out loud: suffix &#8594; root &#8594; prefix</text>

  <rect x="600" y="350" width="430" height="50" fill="#f59e0b" opacity="0.25" rx="6"/>
  <text x="815" y="382" text-anchor="middle" fill="#1a1a2e" font-size="16">Guess the meaning before looking</text>

  <rect x="600" y="415" width="430" height="50" fill="#f59e0b" opacity="0.25" rx="6"/>
  <text x="815" y="447" text-anchor="middle" fill="#1a1a2e" font-size="16">Verify, then tally hit or miss</text>

  <rect x="600" y="480" width="430" height="50" fill="#f59e0b" opacity="0.25" rx="6"/>
  <text x="815" y="512" text-anchor="middle" fill="#1a1a2e" font-size="16">Target: 80% accuracy by Friday</text>

  <rect x="600" y="555" width="430" height="70" fill="#10b981" opacity="0.3" rx="6"/>
  <text x="815" y="585" text-anchor="middle" fill="#10b981" font-size="16" font-weight="bold">Time cost: zero extra</text>
  <text x="815" y="610" text-anchor="middle" fill="#ffffff" font-size="14">Layered onto normal life</text>

  <text x="550" y="720" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">By next Monday</text>

  <rect x="150" y="750" width="800" height="50" fill="#ec4899" opacity="0.2" rx="6"/>
  <text x="550" y="782" text-anchor="middle" fill="#ffffff" font-size="17">You will read op reports faster than most CPT instructors</text>

  <rect x="150" y="815" width="800" height="50" fill="#8b5cf6" opacity="0.2" rx="6"/>
  <text x="550" y="847" text-anchor="middle" fill="#ffffff" font-size="17">Unfamiliar codes become a known unknown, not a panic moment</text>

  <rect x="150" y="880" width="800" height="50" fill="#10b981" opacity="0.2" rx="6"/>
  <text x="550" y="912" text-anchor="middle" fill="#ffffff" font-size="17">Every future lesson in this app builds on a foundation that holds</text>

  <text x="550" y="1010" text-anchor="middle" fill="#ffd700" font-size="18" font-style="italic">Highest-ROI study habit in CPC prep. Start today.</text>
</svg>`,
          caption: "A flashcard sprint plus real-world decoding turns word parts into permanent fluency."
        }
      }
    ]
  },
{
    id: "cpc-foundation-lesson-4",
    title: "Cardiovascular System for Coders: Vessels, Chambers, and the Most-Coded Procedures",
    duration: "18",
    cards: [
      {
        type: "intro",
        title: "Why Cardiac Anatomy Pays the Bills",
        content: `Cardiology is one of the **highest-volume, highest-revenue** specialties in medical coding, and the CPC exam reflects that. Expect **8-12 cardiovascular questions** on test day, ranging from vessel identification to differentiating diagnostic catheterization from interventional procedures.

You don't need to perform a **CABG** (coronary artery bypass graft) to code one, but you do need to know that the **LAD** (left anterior descending) is a branch of the left main, that grafting it requires CPT **33533**, and that adding a venous graft bumps you into the **33517-33523** add-on family.

Same story with **PCI** (percutaneous coronary intervention). Code **92928** covers stent placement in a single major vessel — but only if you know which vessel was treated and whether a branch was involved.

This lesson maps the **vessels, chambers, valves, and conduction pathway** to the CPT codes that depend on them. Get this anatomy locked in and you'll recover hours on exam day.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="36" font-weight="bold">Cardiac Coding: The Big Five</text>
            <text x="550" y="110" text-anchor="middle" fill="#888" font-size="20">Procedures that account for 80% of cardiology CPT volume</text>
            <rect x="80" y="160" width="460" height="180" rx="12" fill="none" stroke="#6366f1" stroke-width="3"/>
            <text x="310" y="200" text-anchor="middle" fill="#6366f1" font-size="24" font-weight="bold">CABG</text>
            <text x="310" y="230" text-anchor="middle" fill="#ffffff" font-size="16">Coronary Artery Bypass Graft</text>
            <text x="310" y="265" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">33533-33536</text>
            <text x="310" y="295" text-anchor="middle" fill="#ffffff" font-size="14">Arterial graft (LIMA to LAD)</text>
            <text x="310" y="320" text-anchor="middle" fill="#ffffff" font-size="14">+33517-33523 venous add-on</text>
            <rect x="560" y="160" width="460" height="180" rx="12" fill="none" stroke="#10b981" stroke-width="3"/>
            <text x="790" y="200" text-anchor="middle" fill="#10b981" font-size="24" font-weight="bold">PCI</text>
            <text x="790" y="230" text-anchor="middle" fill="#ffffff" font-size="16">Percutaneous Coronary Intervention</text>
            <text x="790" y="265" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">92928 / 92920</text>
            <text x="790" y="295" text-anchor="middle" fill="#ffffff" font-size="14">Stent placement, single vessel</text>
            <text x="790" y="320" text-anchor="middle" fill="#ffffff" font-size="14">Angioplasty alone = 92920</text>
            <rect x="80" y="370" width="460" height="180" rx="12" fill="none" stroke="#f59e0b" stroke-width="3"/>
            <text x="310" y="410" text-anchor="middle" fill="#f59e0b" font-size="24" font-weight="bold">Diagnostic Cath</text>
            <text x="310" y="440" text-anchor="middle" fill="#ffffff" font-size="16">Left heart catheterization</text>
            <text x="310" y="475" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">93452 - 93461</text>
            <text x="310" y="505" text-anchor="middle" fill="#ffffff" font-size="14">Bundles imaging + injection</text>
            <text x="310" y="530" text-anchor="middle" fill="#ffffff" font-size="14">Do NOT report PCI separately</text>
            <rect x="560" y="370" width="460" height="180" rx="12" fill="none" stroke="#ec4899" stroke-width="3"/>
            <text x="790" y="410" text-anchor="middle" fill="#ec4899" font-size="24" font-weight="bold">Pacemaker</text>
            <text x="790" y="440" text-anchor="middle" fill="#ffffff" font-size="16">Single or dual chamber insertion</text>
            <text x="790" y="475" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">33206 / 33207 / 33208</text>
            <text x="790" y="505" text-anchor="middle" fill="#ffffff" font-size="14">Atrial / Ventricular / Dual</text>
            <text x="790" y="530" text-anchor="middle" fill="#ffffff" font-size="14">Includes generator + leads</text>
            <rect x="320" y="580" width="460" height="180" rx="12" fill="none" stroke="#8b5cf6" stroke-width="3"/>
            <text x="550" y="620" text-anchor="middle" fill="#8b5cf6" font-size="24" font-weight="bold">Valve Replacement (TAVR)</text>
            <text x="550" y="650" text-anchor="middle" fill="#ffffff" font-size="16">Transcatheter aortic valve replacement</text>
            <text x="550" y="685" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">33361 - 33369</text>
            <text x="550" y="715" text-anchor="middle" fill="#ffffff" font-size="14">Differs by approach: femoral, apical,</text>
            <text x="550" y="740" text-anchor="middle" fill="#ffffff" font-size="14">aortic, axillary, transcarotid</text>
            <rect x="80" y="800" width="940" height="200" rx="12" fill="#0ea5e9" opacity="0.15"/>
            <text x="550" y="840" text-anchor="middle" fill="#0ea5e9" font-size="22" font-weight="bold">CPC Exam Pattern</text>
            <text x="550" y="880" text-anchor="middle" fill="#ffffff" font-size="16">Anatomy first: identify the vessel or chamber from the op report</text>
            <text x="550" y="910" text-anchor="middle" fill="#ffffff" font-size="16">Approach second: open (sternotomy) vs. percutaneous (catheter)</text>
            <text x="550" y="940" text-anchor="middle" fill="#ffffff" font-size="16">Modifier third: -LD, -LC, -RC for vessel-specific PCI add-ons</text>
            <text x="550" y="975" text-anchor="middle" fill="#ffd700" font-size="18" font-weight="bold">Master the anatomy and the CPT falls into place</text>
          </svg>`,
          caption: "The five highest-volume cardiac procedures and the CPT ranges every CPC candidate should memorize."
        }
      },
      {
        type: "concept",
        title: "Chambers, Valves, and the Conduction System",
        content: `The heart has **four chambers**: right atrium, right ventricle, left atrium, left ventricle. Blood moves **right side -> lungs -> left side -> body**. Memorize the order, because op notes describe procedures by chamber and the wrong chamber means the wrong CPT.

The **four valves** gate flow between chambers and great vessels. **Tricuspid** (right AV), **pulmonic** (RV to pulmonary artery), **mitral** (left AV, also called bicuspid), and **aortic** (LV to aorta). Mnemonic: **"Try Pulling My Aorta"** — Tricuspid, Pulmonic, Mitral, Aortic in flow order.

The **conduction system** is electrical, not muscular. The **SA node** in the right atrium fires first (the natural pacemaker, 60-100 bpm). The signal travels to the **AV node**, down the **Bundle of His**, through the **left and right bundle branches**, and terminates in the **Purkinje fibers**. A **complete heart block** between SA and AV is the most common reason for a pacemaker (CPT 33208).

The **coronary arteries** feed the heart muscle itself. The **left main** branches into the **LAD** (left anterior descending — "the widow maker") and the **LCX** (left circumflex). The **RCA** (right coronary artery) runs solo on the right. **These three vessels are the targets of nearly every CABG and PCI on the exam.**`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="60" text-anchor="middle" fill="#ffd700" font-size="34" font-weight="bold">Heart Anatomy for CPT Coding</text>
            <text x="550" y="95" text-anchor="middle" fill="#888" font-size="18">Chambers, valves, conduction, and coronary arteries</text>
            <text x="280" y="150" text-anchor="middle" fill="#6366f1" font-size="22" font-weight="bold">Four Chambers</text>
            <rect x="160" y="170" width="240" height="60" rx="6" fill="#6366f1" opacity="0.3" stroke="#6366f1"/>
            <text x="280" y="207" text-anchor="middle" fill="#ffffff" font-size="16">1. Right Atrium (RA)</text>
            <rect x="160" y="240" width="240" height="60" rx="6" fill="#6366f1" opacity="0.3" stroke="#6366f1"/>
            <text x="280" y="277" text-anchor="middle" fill="#ffffff" font-size="16">2. Right Ventricle (RV)</text>
            <rect x="160" y="310" width="240" height="60" rx="6" fill="#ef4444" opacity="0.3" stroke="#ef4444"/>
            <text x="280" y="347" text-anchor="middle" fill="#ffffff" font-size="16">3. Left Atrium (LA)</text>
            <rect x="160" y="380" width="240" height="60" rx="6" fill="#ef4444" opacity="0.3" stroke="#ef4444"/>
            <text x="280" y="417" text-anchor="middle" fill="#ffffff" font-size="16">4. Left Ventricle (LV)</text>
            <text x="820" y="150" text-anchor="middle" fill="#10b981" font-size="22" font-weight="bold">Four Valves (in flow order)</text>
            <rect x="680" y="170" width="280" height="50" rx="6" fill="#10b981" opacity="0.2" stroke="#10b981"/>
            <text x="820" y="202" text-anchor="middle" fill="#ffffff" font-size="15">Tricuspid: RA -> RV</text>
            <rect x="680" y="230" width="280" height="50" rx="6" fill="#10b981" opacity="0.2" stroke="#10b981"/>
            <text x="820" y="262" text-anchor="middle" fill="#ffffff" font-size="15">Pulmonic: RV -> Pulm Artery</text>
            <rect x="680" y="290" width="280" height="50" rx="6" fill="#10b981" opacity="0.2" stroke="#10b981"/>
            <text x="820" y="322" text-anchor="middle" fill="#ffffff" font-size="15">Mitral: LA -> LV</text>
            <rect x="680" y="350" width="280" height="50" rx="6" fill="#10b981" opacity="0.2" stroke="#10b981"/>
            <text x="820" y="382" text-anchor="middle" fill="#ffffff" font-size="15">Aortic: LV -> Aorta</text>
            <text x="820" y="430" text-anchor="middle" fill="#ffd700" font-size="14" font-style="italic">"Try Pulling My Aorta"</text>
            <text x="550" y="500" text-anchor="middle" fill="#f59e0b" font-size="22" font-weight="bold">Conduction Pathway</text>
            <rect x="80" y="525" width="170" height="60" rx="6" fill="#f59e0b" opacity="0.3" stroke="#f59e0b"/>
            <text x="165" y="555" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="bold">SA Node</text>
            <text x="165" y="575" text-anchor="middle" fill="#ffffff" font-size="11">60-100 bpm pacemaker</text>
            <text x="265" y="563" fill="#ffd700" font-size="24">-></text>
            <rect x="300" y="525" width="170" height="60" rx="6" fill="#f59e0b" opacity="0.3" stroke="#f59e0b"/>
            <text x="385" y="555" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="bold">AV Node</text>
            <text x="385" y="575" text-anchor="middle" fill="#ffffff" font-size="11">Delays signal 0.1s</text>
            <text x="485" y="563" fill="#ffd700" font-size="24">-></text>
            <rect x="520" y="525" width="170" height="60" rx="6" fill="#f59e0b" opacity="0.3" stroke="#f59e0b"/>
            <text x="605" y="555" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="bold">Bundle of His</text>
            <text x="605" y="575" text-anchor="middle" fill="#ffffff" font-size="11">Septum descent</text>
            <text x="705" y="563" fill="#ffd700" font-size="24">-></text>
            <rect x="740" y="525" width="170" height="60" rx="6" fill="#f59e0b" opacity="0.3" stroke="#f59e0b"/>
            <text x="825" y="555" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="bold">Bundle Branches</text>
            <text x="825" y="575" text-anchor="middle" fill="#ffffff" font-size="11">L and R branches</text>
            <rect x="380" y="615" width="320" height="60" rx="6" fill="#ec4899" opacity="0.3" stroke="#ec4899"/>
            <text x="540" y="650" text-anchor="middle" fill="#ffffff" font-size="15" font-weight="bold">Purkinje Fibers -> Ventricular contraction</text>
            <text x="550" y="730" text-anchor="middle" fill="#8b5cf6" font-size="22" font-weight="bold">Coronary Arteries (CABG/PCI targets)</text>
            <rect x="80" y="760" width="300" height="240" rx="10" fill="none" stroke="#8b5cf6" stroke-width="2"/>
            <text x="230" y="795" text-anchor="middle" fill="#8b5cf6" font-size="20" font-weight="bold">LEFT MAIN</text>
            <text x="230" y="825" text-anchor="middle" fill="#ffffff" font-size="14">Splits into two:</text>
            <text x="230" y="860" text-anchor="middle" fill="#ffd700" font-size="18" font-weight="bold">LAD</text>
            <text x="230" y="885" text-anchor="middle" fill="#ffffff" font-size="13">Left Anterior Descending</text>
            <text x="230" y="905" text-anchor="middle" fill="#ef4444" font-size="13">"The Widow Maker"</text>
            <text x="230" y="940" text-anchor="middle" fill="#ffd700" font-size="18" font-weight="bold">LCX</text>
            <text x="230" y="965" text-anchor="middle" fill="#ffffff" font-size="13">Left Circumflex</text>
            <text x="230" y="985" text-anchor="middle" fill="#ffffff" font-size="13">Feeds lateral wall</text>
            <rect x="400" y="760" width="300" height="240" rx="10" fill="none" stroke="#0ea5e9" stroke-width="2"/>
            <text x="550" y="795" text-anchor="middle" fill="#0ea5e9" font-size="20" font-weight="bold">RIGHT MAIN</text>
            <text x="550" y="830" text-anchor="middle" fill="#ffd700" font-size="18" font-weight="bold">RCA</text>
            <text x="550" y="855" text-anchor="middle" fill="#ffffff" font-size="13">Right Coronary Artery</text>
            <text x="550" y="880" text-anchor="middle" fill="#ffffff" font-size="13">Feeds RV, inferior LV</text>
            <text x="550" y="915" text-anchor="middle" fill="#ffffff" font-size="13">Supplies SA node in 60%</text>
            <text x="550" y="945" text-anchor="middle" fill="#ffffff" font-size="13">of patients</text>
            <text x="550" y="985" text-anchor="middle" fill="#ec4899" font-size="13">Inferior MI source</text>
            <rect x="720" y="760" width="300" height="240" rx="10" fill="#10b981" opacity="0.15" stroke="#10b981"/>
            <text x="870" y="795" text-anchor="middle" fill="#10b981" font-size="20" font-weight="bold">CPT MAPPING</text>
            <text x="870" y="830" text-anchor="middle" fill="#ffffff" font-size="14">LAD stent: 92928-LD</text>
            <text x="870" y="860" text-anchor="middle" fill="#ffffff" font-size="14">LCX stent: 92928-LC</text>
            <text x="870" y="890" text-anchor="middle" fill="#ffffff" font-size="14">RCA stent: 92928-RC</text>
            <text x="870" y="920" text-anchor="middle" fill="#ffffff" font-size="14">CABG 3 grafts: 33533 +</text>
            <text x="870" y="945" text-anchor="middle" fill="#ffffff" font-size="14">33518 (2 add-on grafts)</text>
            <text x="870" y="985" text-anchor="middle" fill="#ffd700" font-size="13">Modifiers = vessels</text>
          </svg>`,
          caption: "The chambers, valves, conduction pathway, and coronary arteries that drive cardiac CPT selection."
        }
      },
      {
        type: "example",
        title: "Worked Example: CABG x3 with LIMA",
        content: `**Op Report Excerpt:** "Median sternotomy performed. **Left internal mammary artery (LIMA)** was harvested and anastomosed to the **LAD**. A **saphenous vein graft** was placed from the aorta to the **first obtuse marginal branch of the LCX**, and a second saphenous vein graft was placed from the aorta to the **posterior descending artery of the RCA**. Patient weaned off bypass without difficulty."

**Step 1 — Count arterial grafts:** One (LIMA to LAD). That triggers **CPT 33533** (CABG, arterial, single graft).

**Step 2 — Count venous grafts:** Two (saphenous to LCX-OM1, saphenous to RCA-PDA). For two venous grafts as an **add-on** to an arterial CABG, use **CPT 33518** (CABG, venous, two grafts — list separately).

**Step 3 — Watch for the trap:** Many candidates code **33511** (CABG, venous, two grafts standalone). That's wrong — when an arterial graft is also performed, you must use the **33517-33523 add-on series**, not the standalone 33510-33516 codes.

**Final coding:** **33533 + 33518**. Three vessels grafted, one arterial CPT, one venous add-on. Total RVUs reflect both. Miss the add-on family and the surgeon loses thousands.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="60" text-anchor="middle" fill="#ffd700" font-size="34" font-weight="bold">CABG x3 Coding Walk-Through</text>
            <text x="550" y="95" text-anchor="middle" fill="#888" font-size="18">One arterial + two venous = two CPT codes</text>
            <rect x="60" y="140" width="500" height="380" rx="12" fill="none" stroke="#6366f1" stroke-width="3"/>
            <text x="310" y="180" text-anchor="middle" fill="#6366f1" font-size="22" font-weight="bold">Op Report Findings</text>
            <text x="80" y="225" fill="#ffffff" font-size="16">Graft 1 (Arterial):</text>
            <text x="100" y="252" fill="#ffd700" font-size="15">LIMA -> LAD</text>
            <text x="100" y="275" fill="#888" font-size="13">Left Internal Mammary to</text>
            <text x="100" y="295" fill="#888" font-size="13">Left Anterior Descending</text>
            <text x="80" y="340" fill="#ffffff" font-size="16">Graft 2 (Venous):</text>
            <text x="100" y="367" fill="#10b981" font-size="15">SVG -> LCX-OM1</text>
            <text x="100" y="390" fill="#888" font-size="13">Saphenous vein to obtuse</text>
            <text x="100" y="410" fill="#888" font-size="13">marginal branch of LCX</text>
            <text x="80" y="450" fill="#ffffff" font-size="16">Graft 3 (Venous):</text>
            <text x="100" y="477" fill="#10b981" font-size="15">SVG -> RCA-PDA</text>
            <text x="100" y="500" fill="#888" font-size="13">Saphenous vein to posterior</text>
            <text x="100" y="520" fill="#888" font-size="13">descending artery of RCA</text>
            <rect x="600" y="140" width="440" height="380" rx="12" fill="none" stroke="#10b981" stroke-width="3"/>
            <text x="820" y="180" text-anchor="middle" fill="#10b981" font-size="22" font-weight="bold">Decision Tree</text>
            <text x="620" y="225" fill="#ffffff" font-size="15">Q1: Arterial graft present?</text>
            <text x="640" y="250" fill="#ffd700" font-size="14">Yes -> Primary code from</text>
            <text x="640" y="270" fill="#ffd700" font-size="14">33533-33536 family</text>
            <text x="620" y="315" fill="#ffffff" font-size="15">Q2: How many arterial grafts?</text>
            <text x="640" y="340" fill="#ffd700" font-size="14">1 graft -> 33533</text>
            <text x="640" y="360" fill="#ffffff" font-size="13">2 grafts -> 33534</text>
            <text x="640" y="380" fill="#ffffff" font-size="13">3 grafts -> 33535</text>
            <text x="620" y="420" fill="#ffffff" font-size="15">Q3: Venous grafts added?</text>
            <text x="640" y="445" fill="#ffd700" font-size="14">Yes -> Use 33517-33523</text>
            <text x="640" y="465" fill="#ffd700" font-size="14">add-on (NOT 33510-33516)</text>
            <text x="620" y="500" fill="#ef4444" font-size="13" font-weight="bold">Trap: standalone venous codes</text>
            <text x="620" y="518" fill="#ef4444" font-size="13" font-weight="bold">are for venous-only CABG</text>
            <rect x="60" y="550" width="980" height="240" rx="12" fill="#0ea5e9" opacity="0.15" stroke="#0ea5e9" stroke-width="2"/>
            <text x="550" y="595" text-anchor="middle" fill="#0ea5e9" font-size="24" font-weight="bold">Final CPT Coding</text>
            <line x1="550" y1="615" x2="550" y2="780" stroke="#888" stroke-width="1" stroke-dasharray="4 4"/>
            <text x="300" y="650" text-anchor="middle" fill="#ffd700" font-size="42" font-weight="bold">33533</text>
            <text x="300" y="685" text-anchor="middle" fill="#ffffff" font-size="16">CABG, arterial, single graft</text>
            <text x="300" y="710" text-anchor="middle" fill="#888" font-size="14">(LIMA to LAD)</text>
            <text x="300" y="745" text-anchor="middle" fill="#10b981" font-size="14">Primary procedure</text>
            <text x="300" y="765" text-anchor="middle" fill="#10b981" font-size="14">RVU: ~57.5</text>
            <text x="800" y="650" text-anchor="middle" fill="#ffd700" font-size="42" font-weight="bold">+33518</text>
            <text x="800" y="685" text-anchor="middle" fill="#ffffff" font-size="16">Venous graft, 2 grafts</text>
            <text x="800" y="710" text-anchor="middle" fill="#888" font-size="14">(SVG to OM1 + SVG to PDA)</text>
            <text x="800" y="745" text-anchor="middle" fill="#10b981" font-size="14">Add-on (no modifier 51)</text>
            <text x="800" y="765" text-anchor="middle" fill="#10b981" font-size="14">RVU: ~4.6</text>
            <rect x="60" y="820" width="980" height="200" rx="12" fill="#ef4444" opacity="0.15" stroke="#ef4444" stroke-width="2"/>
            <text x="550" y="865" text-anchor="middle" fill="#ef4444" font-size="22" font-weight="bold">Common Errors to Avoid</text>
            <text x="550" y="905" text-anchor="middle" fill="#ffffff" font-size="16">Coding 33511 (standalone venous x2) when arterial is also present</text>
            <text x="550" y="935" text-anchor="middle" fill="#ffffff" font-size="16">Adding modifier 51 to the add-on code (add-ons are modifier-51 exempt)</text>
            <text x="550" y="965" text-anchor="middle" fill="#ffffff" font-size="16">Counting LIMA harvest as a separate procedure (it is bundled)</text>
            <text x="550" y="1000" text-anchor="middle" fill="#ffd700" font-size="16" font-weight="bold">Always check: arterial present + venous added = 33533 + 33517-33523</text>
          </svg>`,
          caption: "Three-vessel CABG broken down by graft type, with the correct primary and add-on CPT codes."
        }
      },
      {
        type: "quiz",
        title: "Quick Check: Vessel-Specific PCI",
        content: `A patient presents with a non-ST elevation MI. The interventional cardiologist performs **percutaneous coronary intervention with drug-eluting stent placement in the left circumflex artery**. No other vessels are treated.

What is the most appropriate CPT code and modifier?`,
        question: "Which CPT/modifier combination correctly reports stent placement in the LCX only?",
        options: [
          { text: "92928-LD (single vessel stent, left anterior descending)", correct: false },
          { text: "92928-LC (single vessel stent, left circumflex)", correct: true },
          { text: "92920-RC (angioplasty only, right coronary)", correct: false },
          { text: "33533-LC (CABG, single graft, left circumflex)", correct: false }
        ],
        explanation: "**92928** is the correct base code for **percutaneous transcatheter stent placement, single major coronary artery**. The HCPCS-style modifier **-LC** specifies the **left circumflex** vessel (the other options being -LD for LAD and -RC for RCA). 92920 is angioplasty WITHOUT a stent, and 33533 is CABG (open surgery, not percutaneous). Always match the procedure family to the approach: 9292x = percutaneous, 3353x = open surgery.",
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="70" text-anchor="middle" fill="#ffd700" font-size="34" font-weight="bold">PCI Coding Cheat Sheet</text>
            <text x="550" y="110" text-anchor="middle" fill="#888" font-size="18">Base code + vessel modifier = correct claim</text>
            <rect x="80" y="160" width="940" height="220" rx="12" fill="none" stroke="#6366f1" stroke-width="3"/>
            <text x="550" y="200" text-anchor="middle" fill="#6366f1" font-size="24" font-weight="bold">PCI Base Codes (single major vessel)</text>
            <rect x="120" y="225" width="280" height="130" rx="8" fill="#6366f1" opacity="0.2"/>
            <text x="260" y="255" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">92920</text>
            <text x="260" y="285" text-anchor="middle" fill="#ffffff" font-size="14">Angioplasty</text>
            <text x="260" y="310" text-anchor="middle" fill="#ffffff" font-size="14">(balloon only)</text>
            <text x="260" y="340" text-anchor="middle" fill="#888" font-size="12">No stent placed</text>
            <rect x="410" y="225" width="280" height="130" rx="8" fill="#10b981" opacity="0.2"/>
            <text x="550" y="255" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">92928</text>
            <text x="550" y="285" text-anchor="middle" fill="#ffffff" font-size="14">Stent placement</text>
            <text x="550" y="310" text-anchor="middle" fill="#ffffff" font-size="14">(bare or drug-eluting)</text>
            <text x="550" y="340" text-anchor="middle" fill="#888" font-size="12">Most common PCI code</text>
            <rect x="700" y="225" width="280" height="130" rx="8" fill="#f59e0b" opacity="0.2"/>
            <text x="840" y="255" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">92933</text>
            <text x="840" y="285" text-anchor="middle" fill="#ffffff" font-size="14">Atherectomy +</text>
            <text x="840" y="310" text-anchor="middle" fill="#ffffff" font-size="14">stent</text>
            <text x="840" y="340" text-anchor="middle" fill="#888" font-size="12">Plaque removal first</text>
            <rect x="80" y="410" width="940" height="220" rx="12" fill="none" stroke="#10b981" stroke-width="3"/>
            <text x="550" y="450" text-anchor="middle" fill="#10b981" font-size="24" font-weight="bold">Vessel-Specific Modifiers</text>
            <rect x="120" y="480" width="270" height="130" rx="8" fill="#ec4899" opacity="0.2"/>
            <text x="255" y="515" text-anchor="middle" fill="#ec4899" font-size="28" font-weight="bold">-LD</text>
            <text x="255" y="545" text-anchor="middle" fill="#ffffff" font-size="15">Left Anterior</text>
            <text x="255" y="568" text-anchor="middle" fill="#ffffff" font-size="15">Descending</text>
            <text x="255" y="595" text-anchor="middle" fill="#888" font-size="12">Widow maker</text>
            <rect x="415" y="480" width="270" height="130" rx="8" fill="#8b5cf6" opacity="0.2"/>
            <text x="550" y="515" text-anchor="middle" fill="#8b5cf6" font-size="28" font-weight="bold">-LC</text>
            <text x="550" y="545" text-anchor="middle" fill="#ffffff" font-size="15">Left Circumflex</text>
            <text x="550" y="595" text-anchor="middle" fill="#888" font-size="12">Lateral wall</text>
            <rect x="710" y="480" width="270" height="130" rx="8" fill="#0ea5e9" opacity="0.2"/>
            <text x="845" y="515" text-anchor="middle" fill="#0ea5e9" font-size="28" font-weight="bold">-RC</text>
            <text x="845" y="545" text-anchor="middle" fill="#ffffff" font-size="15">Right Coronary</text>
            <text x="845" y="595" text-anchor="middle" fill="#888" font-size="12">Inferior wall</text>
            <rect x="80" y="660" width="940" height="350" rx="12" fill="#0ea5e9" opacity="0.15" stroke="#0ea5e9" stroke-width="2"/>
            <text x="550" y="705" text-anchor="middle" fill="#0ea5e9" font-size="24" font-weight="bold">This Question Decoded</text>
            <text x="100" y="755" fill="#ffffff" font-size="17">Procedure: stent placement (not angioplasty alone) -> base code 92928</text>
            <text x="100" y="795" fill="#ffffff" font-size="17">Vessel: left circumflex -> modifier -LC</text>
            <text x="100" y="835" fill="#ffffff" font-size="17">Approach: percutaneous (catheter) -> 9292x family, NOT 3353x CABG</text>
            <text x="100" y="875" fill="#ffffff" font-size="17">Final answer: 92928-LC</text>
            <text x="550" y="930" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">Pattern to memorize</text>
            <text x="550" y="965" text-anchor="middle" fill="#ffffff" font-size="16">Base code = WHAT (angioplasty / stent / atherectomy)</text>
            <text x="550" y="995" text-anchor="middle" fill="#ffffff" font-size="16">Modifier = WHERE (LD / LC / RC)</text>
          </svg>`,
          caption: "PCI base codes pair with vessel-specific modifiers; choose the base code first, then the vessel."
        }
      },
      {
        type: "application",
        title: "Apply It: Building Your Cardiac Code Reflex",
        content: `**Build a vessel-to-modifier flashcard set.** Make three cards: **LAD = -LD**, **LCX = -LC**, **RCA = -RC**. Add a fourth: **Left Main = -LM**. The exam will give you the vessel name in the op report and expect the modifier. Speed here saves minutes.

**Practice the CABG family decision.** When you see a CABG op note: count arterial grafts first (drives 33533/33534/33535), then count venous grafts (drives 33517/33518/33519 add-ons). If venous-only with no arterial, jump to **33510-33516**. This one branching question handles 90% of CABG questions.

**Drill diagnostic cath vs. PCI.** A **93458** (left heart cath with coronary angiography) bundles imaging. If the cardiologist sees a lesion and stents it in the same session, you bill **93458 + 92928-LD** (or appropriate vessel). But if it's a planned PCI with no diagnostic component, **don't add the cath code.**

**Read every op note out loud, naming the vessel and chamber.** Saying "LAD, left anterior descending, widow maker, -LD modifier" three times locks in muscle memory. CPC exam questions reward fast pattern recognition, not slow code-book searching.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="60" text-anchor="middle" fill="#ffd700" font-size="34" font-weight="bold">Your Cardiac Coding Practice Plan</text>
            <text x="550" y="95" text-anchor="middle" fill="#888" font-size="18">Five drills that build exam-day reflex</text>
            <rect x="60" y="140" width="480" height="180" rx="12" fill="none" stroke="#6366f1" stroke-width="3"/>
            <text x="300" y="180" text-anchor="middle" fill="#6366f1" font-size="22" font-weight="bold">Drill 1: Vessel Modifiers</text>
            <text x="80" y="220" fill="#ffffff" font-size="16">LAD = -LD</text>
            <text x="80" y="248" fill="#ffffff" font-size="16">LCX = -LC</text>
            <text x="80" y="276" fill="#ffffff" font-size="16">RCA = -RC</text>
            <text x="80" y="304" fill="#ffffff" font-size="16">Left Main = -LM</text>
            <rect x="560" y="140" width="480" height="180" rx="12" fill="none" stroke="#10b981" stroke-width="3"/>
            <text x="800" y="180" text-anchor="middle" fill="#10b981" font-size="22" font-weight="bold">Drill 2: CABG Family</text>
            <text x="580" y="220" fill="#ffffff" font-size="15">Step 1: Count arterial grafts</text>
            <text x="580" y="248" fill="#ffffff" font-size="15">Step 2: Count venous grafts</text>
            <text x="580" y="276" fill="#ffd700" font-size="15">Arterial -> 33533/34/35 primary</text>
            <text x="580" y="304" fill="#ffd700" font-size="15">Venous add-on -> 33517-33523</text>
            <rect x="60" y="350" width="480" height="180" rx="12" fill="none" stroke="#f59e0b" stroke-width="3"/>
            <text x="300" y="390" text-anchor="middle" fill="#f59e0b" font-size="22" font-weight="bold">Drill 3: Cath vs. PCI</text>
            <text x="80" y="430" fill="#ffffff" font-size="15">Diagnostic only -> 93458</text>
            <text x="80" y="458" fill="#ffffff" font-size="15">Cath + same-session PCI -></text>
            <text x="80" y="478" fill="#ffd700" font-size="15">93458 + 92928-[vessel]</text>
            <text x="80" y="510" fill="#ffffff" font-size="15">Planned PCI only -> 92928 only</text>
            <rect x="560" y="350" width="480" height="180" rx="12" fill="none" stroke="#ec4899" stroke-width="3"/>
            <text x="800" y="390" text-anchor="middle" fill="#ec4899" font-size="22" font-weight="bold">Drill 4: Pacemaker Choice</text>
            <text x="580" y="430" fill="#ffffff" font-size="15">Atrial lead only -> 33206</text>
            <text x="580" y="458" fill="#ffffff" font-size="15">Ventricular lead only -> 33207</text>
            <text x="580" y="486" fill="#ffd700" font-size="15">Dual chamber -> 33208</text>
            <text x="580" y="514" fill="#888" font-size="13">Generator + leads bundled</text>
            <rect x="60" y="560" width="980" height="180" rx="12" fill="none" stroke="#8b5cf6" stroke-width="3"/>
            <text x="550" y="600" text-anchor="middle" fill="#8b5cf6" font-size="22" font-weight="bold">Drill 5: Read Op Notes Aloud</text>
            <text x="550" y="640" text-anchor="middle" fill="#ffffff" font-size="16">For each op note, verbally identify:</text>
            <text x="200" y="680" fill="#ffd700" font-size="15">1. Vessel(s)</text>
            <text x="400" y="680" fill="#ffd700" font-size="15">2. Approach</text>
            <text x="600" y="680" fill="#ffd700" font-size="15">3. Device used</text>
            <text x="820" y="680" fill="#ffd700" font-size="15">4. CPT + modifier</text>
            <text x="550" y="720" text-anchor="middle" fill="#888" font-size="14">Verbalizing locks in the pattern faster than silent reading</text>
            <rect x="60" y="770" width="980" height="240" rx="12" fill="#0ea5e9" opacity="0.15" stroke="#0ea5e9" stroke-width="2"/>
            <text x="550" y="815" text-anchor="middle" fill="#0ea5e9" font-size="22" font-weight="bold">Daily 15-Minute Routine</text>
            <text x="80" y="855" fill="#ffffff" font-size="16">Minutes 0-3: Flashcards (vessel modifiers, valve order)</text>
            <text x="80" y="885" fill="#ffffff" font-size="16">Minutes 3-8: Two sample op notes -> code aloud</text>
            <text x="80" y="915" fill="#ffffff" font-size="16">Minutes 8-12: Review one CABG and one PCI from CPT book</text>
            <text x="80" y="945" fill="#ffffff" font-size="16">Minutes 12-15: Self-quiz on conduction system + pacemaker codes</text>
            <text x="550" y="990" text-anchor="middle" fill="#ffd700" font-size="18" font-weight="bold">Two weeks of this = cardiac section locked</text>
          </svg>`,
          caption: "Five focused drills, fifteen minutes a day, build the cardiac coding reflex the CPC exam rewards."
        }
      }
    ]
  },
  {
    id: "cpc-foundation-lesson-5",
    title: "Musculoskeletal System for Coders: Fracture Care, Joints, and the -Otomy/-Ostomy/-Ectomy Trap",
    duration: "17",
    cards: [
      {
        type: "intro",
        title: "Why MSK Is the Single Biggest Section on the CPC",
        content: `The musculoskeletal CPT range (**20100-29999**) is the **largest single section** of the surgical codebook. On the CPC exam, expect **10-14 MSK questions** — more than any other surgical subsection. Master this section and you can afford to be slower in others.

The challenge isn't the volume of codes — it's the **decision tree at every step**. Was the fracture **open or closed**? Was the **treatment** open or closed? Was **manipulation** required? Was **internal fixation** placed? Each branch sends you to a different five-digit code.

Then come the **suffix family traps**: -**tomy** (cut into), -**ostomy** (create an opening), -**ectomy** (remove). Misreading "laminotomy" as "laminectomy" lands you in a different CPT range entirely. The exam **specifically** tests this confusion.

This lesson maps the **skeletal regions**, the **joint types**, the **fracture-care decision tree**, and the **suffix family that sinks 4-5 questions every test**. By the end you'll be able to look at a phrase like "open treatment of closed tibial shaft fracture with internal fixation" and code **27758** without flinching.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="60" text-anchor="middle" fill="#ffd700" font-size="34" font-weight="bold">MSK: The CPC Exam's Biggest Section</text>
            <text x="550" y="100" text-anchor="middle" fill="#888" font-size="18">20100-29999 covers more CPT codes than any other surgical range</text>
            <rect x="80" y="150" width="940" height="180" rx="12" fill="none" stroke="#6366f1" stroke-width="3"/>
            <text x="550" y="190" text-anchor="middle" fill="#6366f1" font-size="24" font-weight="bold">Why MSK Eats Exam Time</text>
            <text x="100" y="230" fill="#ffffff" font-size="16">5900+ CPT codes in the MSK range (largest surgical section)</text>
            <text x="100" y="260" fill="#ffffff" font-size="16">10-14 questions on the CPC exam (most of any subsection)</text>
            <text x="100" y="290" fill="#ffffff" font-size="16">Heavy use of modifiers -RT, -LT, -50, -F1-F9, -T1-T9</text>
            <text x="100" y="320" fill="#ffffff" font-size="16">Two decision trees per code: open/closed fracture + open/closed treatment</text>
            <rect x="80" y="360" width="450" height="320" rx="12" fill="none" stroke="#10b981" stroke-width="3"/>
            <text x="305" y="400" text-anchor="middle" fill="#10b981" font-size="22" font-weight="bold">CPT Subsections</text>
            <text x="100" y="435" fill="#ffd700" font-size="15">20100-20999</text>
            <text x="250" y="435" fill="#ffffff" font-size="15">General/Wounds</text>
            <text x="100" y="465" fill="#ffd700" font-size="15">21010-21899</text>
            <text x="250" y="465" fill="#ffffff" font-size="15">Head/Neck/Thorax</text>
            <text x="100" y="495" fill="#ffd700" font-size="15">22010-22899</text>
            <text x="250" y="495" fill="#ffffff" font-size="15">Spine</text>
            <text x="100" y="525" fill="#ffd700" font-size="15">23000-23929</text>
            <text x="250" y="525" fill="#ffffff" font-size="15">Shoulder</text>
            <text x="100" y="555" fill="#ffd700" font-size="15">24000-25999</text>
            <text x="250" y="555" fill="#ffffff" font-size="15">Humerus / Forearm</text>
            <text x="100" y="585" fill="#ffd700" font-size="15">26010-26989</text>
            <text x="250" y="585" fill="#ffffff" font-size="15">Hand / Fingers</text>
            <text x="100" y="615" fill="#ffd700" font-size="15">27000-27899</text>
            <text x="250" y="615" fill="#ffffff" font-size="15">Pelvis / Femur / Knee / Leg</text>
            <text x="100" y="645" fill="#ffd700" font-size="15">28001-28899</text>
            <text x="250" y="645" fill="#ffffff" font-size="15">Foot / Toes</text>
            <text x="100" y="675" fill="#ffd700" font-size="15">29000-29999</text>
            <text x="250" y="675" fill="#ffffff" font-size="15">Casts / Arthroscopy</text>
            <rect x="560" y="360" width="460" height="320" rx="12" fill="none" stroke="#f59e0b" stroke-width="3"/>
            <text x="790" y="400" text-anchor="middle" fill="#f59e0b" font-size="22" font-weight="bold">Three Trap Patterns</text>
            <text x="580" y="445" fill="#ef4444" font-size="16" font-weight="bold">Trap 1: Suffix confusion</text>
            <text x="600" y="470" fill="#ffffff" font-size="14">laminOTOMY vs laminECTOMY</text>
            <text x="600" y="492" fill="#888" font-size="13">Cut into vs. remove the lamina</text>
            <text x="580" y="535" fill="#ef4444" font-size="16" font-weight="bold">Trap 2: Open/closed mismatch</text>
            <text x="600" y="560" fill="#ffffff" font-size="14">"Closed Fx, open treatment"</text>
            <text x="600" y="582" fill="#888" font-size="13">Skin intact, but surgeon cuts down</text>
            <text x="580" y="620" fill="#ef4444" font-size="16" font-weight="bold">Trap 3: Cast/strap inclusion</text>
            <text x="600" y="645" fill="#ffffff" font-size="14">Initial cast is usually bundled</text>
            <text x="600" y="667" fill="#888" font-size="13">Replacement = 29000-29799</text>
            <rect x="80" y="710" width="940" height="300" rx="12" fill="#0ea5e9" opacity="0.15" stroke="#0ea5e9" stroke-width="2"/>
            <text x="550" y="755" text-anchor="middle" fill="#0ea5e9" font-size="22" font-weight="bold">What This Lesson Covers</text>
            <text x="100" y="800" fill="#ffffff" font-size="16">Skeletal anatomy by region (axial vs. appendicular)</text>
            <text x="100" y="835" fill="#ffffff" font-size="16">Joint classifications (synovial, cartilaginous, fibrous)</text>
            <text x="100" y="870" fill="#ffffff" font-size="16">Fracture care decision tree (closed vs. open, treatment type, fixation)</text>
            <text x="100" y="905" fill="#ffffff" font-size="16">The suffix family: -tomy / -ostomy / -ectomy / -plasty / -desis</text>
            <text x="100" y="940" fill="#ffffff" font-size="16">Real CPT walk-throughs: 27758 (tibial Fx), 23472 (TSA)</text>
            <text x="550" y="990" text-anchor="middle" fill="#ffd700" font-size="18" font-weight="bold">Five core skills = 10+ exam points</text>
          </svg>`,
          caption: "MSK is the largest CPT section by code count and exam weight; this lesson covers the highest-yield patterns."
        }
      },
      {
        type: "concept",
        title: "Fracture Decision Tree and the Suffix Family",
        content: `**Fracture coding has two layers.** First: is the fracture itself **open** (bone visible through skin) or **closed** (skin intact)? Second: how is it **treated** — **closed treatment** (no skin incision), **open treatment** (surgical exposure), or **percutaneous skeletal fixation** (pins through skin without exposure)?

These four variables — fracture type x treatment type x manipulation yes/no x fixation yes/no — drive every CPT in the fracture care section. A **closed fracture treated openly with internal fixation** is the most common scenario after a fall.

**The suffix family is where the exam gets sneaky.** Memorize these four:
- **-tomy** = **cut into** (laminotomy = partial cut into the lamina to relieve nerve pressure)
- **-ostomy** = **create a permanent opening** (colostomy = opening in colon to skin)
- **-ectomy** = **surgical removal** (laminectomy = full removal of the lamina)
- **-plasty** = **surgical repair/reshape** (arthroplasty = joint replacement)

A fifth, **-desis**, means **fusion** (arthrodesis = surgical fusion of a joint, the opposite of arthroplasty). Mistaking arthrodesis for arthroplasty sends you to a CPT code thousands of dollars apart in reimbursement. The exam will give you a sentence and ask which one applies — pattern-recognition speed is the goal.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="60" text-anchor="middle" fill="#ffd700" font-size="34" font-weight="bold">Fracture Care + The Suffix Family</text>
            <text x="550" y="100" text-anchor="middle" fill="#888" font-size="18">Two decision trees that drive most MSK CPT selection</text>
            <rect x="60" y="140" width="1010" height="380" rx="12" fill="none" stroke="#6366f1" stroke-width="3"/>
            <text x="565" y="180" text-anchor="middle" fill="#6366f1" font-size="24" font-weight="bold">Fracture Decision Tree</text>
            <rect x="430" y="210" width="270" height="60" rx="8" fill="#6366f1" opacity="0.3" stroke="#6366f1"/>
            <text x="565" y="246" text-anchor="middle" fill="#ffffff" font-size="16" font-weight="bold">Fracture documented</text>
            <line x1="565" y1="270" x2="220" y2="305" stroke="#888" stroke-width="2"/>
            <line x1="565" y1="270" x2="910" y2="305" stroke="#888" stroke-width="2"/>
            <rect x="80" y="305" width="280" height="60" rx="8" fill="#10b981" opacity="0.3" stroke="#10b981"/>
            <text x="220" y="340" text-anchor="middle" fill="#ffffff" font-size="15">Closed fracture (skin intact)</text>
            <rect x="770" y="305" width="280" height="60" rx="8" fill="#ef4444" opacity="0.3" stroke="#ef4444"/>
            <text x="910" y="340" text-anchor="middle" fill="#ffffff" font-size="15">Open fracture (skin broken)</text>
            <line x1="220" y1="365" x2="100" y2="400" stroke="#888" stroke-width="2"/>
            <line x1="220" y1="365" x2="220" y2="400" stroke="#888" stroke-width="2"/>
            <line x1="220" y1="365" x2="340" y2="400" stroke="#888" stroke-width="2"/>
            <rect x="60" y="400" width="120" height="50" rx="6" fill="#f59e0b" opacity="0.3" stroke="#f59e0b"/>
            <text x="120" y="430" text-anchor="middle" fill="#ffffff" font-size="13">Closed Tx</text>
            <rect x="190" y="400" width="120" height="50" rx="6" fill="#f59e0b" opacity="0.3" stroke="#f59e0b"/>
            <text x="250" y="430" text-anchor="middle" fill="#ffffff" font-size="13">Open Tx</text>
            <rect x="320" y="400" width="120" height="50" rx="6" fill="#f59e0b" opacity="0.3" stroke="#f59e0b"/>
            <text x="380" y="430" text-anchor="middle" fill="#ffffff" font-size="13">Percutaneous</text>
            <text x="220" y="490" text-anchor="middle" fill="#ffd700" font-size="14">+/- manipulation, +/- internal fixation</text>
            <line x1="910" y1="365" x2="800" y2="400" stroke="#888" stroke-width="2"/>
            <line x1="910" y1="365" x2="910" y2="400" stroke="#888" stroke-width="2"/>
            <line x1="910" y1="365" x2="1020" y2="400" stroke="#888" stroke-width="2"/>
            <rect x="745" y="400" width="120" height="50" rx="6" fill="#f59e0b" opacity="0.3" stroke="#f59e0b"/>
            <text x="805" y="430" text-anchor="middle" fill="#ffffff" font-size="13">Closed Tx</text>
            <rect x="875" y="400" width="120" height="50" rx="6" fill="#f59e0b" opacity="0.3" stroke="#f59e0b"/>
            <text x="935" y="430" text-anchor="middle" fill="#ffffff" font-size="13">Open Tx</text>
            <rect x="1005" y="400" width="55" height="50" rx="6" fill="#f59e0b" opacity="0.3" stroke="#f59e0b"/>
            <text x="1032" y="430" text-anchor="middle" fill="#ffffff" font-size="11">Perc</text>
            <text x="910" y="490" text-anchor="middle" fill="#ffd700" font-size="14">Open Fx usually = open treatment</text>
            <rect x="60" y="550" width="1010" height="460" rx="12" fill="none" stroke="#10b981" stroke-width="3"/>
            <text x="565" y="590" text-anchor="middle" fill="#10b981" font-size="24" font-weight="bold">The Suffix Family</text>
            <rect x="100" y="620" width="290" height="170" rx="10" fill="#ec4899" opacity="0.2" stroke="#ec4899"/>
            <text x="245" y="655" text-anchor="middle" fill="#ec4899" font-size="22" font-weight="bold">-TOMY</text>
            <text x="245" y="685" text-anchor="middle" fill="#ffffff" font-size="15">"cut into"</text>
            <text x="245" y="715" text-anchor="middle" fill="#ffffff" font-size="14">laminotomy</text>
            <text x="245" y="740" text-anchor="middle" fill="#ffffff" font-size="14">tracheotomy</text>
            <text x="245" y="770" text-anchor="middle" fill="#888" font-size="12">Incision, no removal</text>
            <rect x="400" y="620" width="290" height="170" rx="10" fill="#8b5cf6" opacity="0.2" stroke="#8b5cf6"/>
            <text x="545" y="655" text-anchor="middle" fill="#8b5cf6" font-size="22" font-weight="bold">-OSTOMY</text>
            <text x="545" y="685" text-anchor="middle" fill="#ffffff" font-size="15">"create opening"</text>
            <text x="545" y="715" text-anchor="middle" fill="#ffffff" font-size="14">colostomy</text>
            <text x="545" y="740" text-anchor="middle" fill="#ffffff" font-size="14">tracheostomy</text>
            <text x="545" y="770" text-anchor="middle" fill="#888" font-size="12">Permanent stoma</text>
            <rect x="700" y="620" width="290" height="170" rx="10" fill="#ef4444" opacity="0.2" stroke="#ef4444"/>
            <text x="845" y="655" text-anchor="middle" fill="#ef4444" font-size="22" font-weight="bold">-ECTOMY</text>
            <text x="845" y="685" text-anchor="middle" fill="#ffffff" font-size="15">"remove"</text>
            <text x="845" y="715" text-anchor="middle" fill="#ffffff" font-size="14">laminectomy</text>
            <text x="845" y="740" text-anchor="middle" fill="#ffffff" font-size="14">appendectomy</text>
            <text x="845" y="770" text-anchor="middle" fill="#888" font-size="12">Tissue is excised</text>
            <rect x="250" y="810" width="290" height="170" rx="10" fill="#0ea5e9" opacity="0.2" stroke="#0ea5e9"/>
            <text x="395" y="845" text-anchor="middle" fill="#0ea5e9" font-size="22" font-weight="bold">-PLASTY</text>
            <text x="395" y="875" text-anchor="middle" fill="#ffffff" font-size="15">"surgical repair"</text>
            <text x="395" y="905" text-anchor="middle" fill="#ffffff" font-size="14">arthroplasty</text>
            <text x="395" y="930" text-anchor="middle" fill="#ffffff" font-size="14">rhinoplasty</text>
            <text x="395" y="960" text-anchor="middle" fill="#888" font-size="12">Reshape or replace</text>
            <rect x="560" y="810" width="290" height="170" rx="10" fill="#f59e0b" opacity="0.2" stroke="#f59e0b"/>
            <text x="705" y="845" text-anchor="middle" fill="#f59e0b" font-size="22" font-weight="bold">-DESIS</text>
            <text x="705" y="875" text-anchor="middle" fill="#ffffff" font-size="15">"fusion"</text>
            <text x="705" y="905" text-anchor="middle" fill="#ffffff" font-size="14">arthrodesis</text>
            <text x="705" y="930" text-anchor="middle" fill="#ffffff" font-size="14">spondylodesis</text>
            <text x="705" y="960" text-anchor="middle" fill="#888" font-size="12">Make immobile</text>
          </svg>`,
          caption: "Two decision trees: fracture coding (type x treatment) and the surgical suffix family that drives every procedure name."
        }
      },
      {
        type: "example",
        title: "Worked Example: Tibial Shaft Fracture (CPT 27758)",
        content: `**Op Report Excerpt:** "Patient sustained a **closed displaced fracture of the right tibial shaft** in a fall. Patient was taken to the OR. **Longitudinal incision was made** over the anterior tibial crest. The fracture was reduced under direct visualization, and a **9-hole locking plate was applied** with eight cortical screws. **Fluoroscopy confirmed acceptable alignment.** Closure in standard fashion."

**Step 1 — Identify the fracture:** **Tibial shaft** = code range **27750-27759**. The shaft is the diaphysis (middle), not the plateau (proximal) or plafond (distal).

**Step 2 — Open or closed fracture?** **Closed.** Skin intact.

**Step 3 — Open or closed treatment?** **Open.** The surgeon made an incision and visualized the fracture directly. (Closed treatment would mean reducing it without an incision — just manipulating from outside.)

**Step 4 — Internal fixation?** **Yes.** Plate and screws.

**Step 5 — Look up:** **27758** — Open treatment of tibial shaft fracture, with plate/screws, with or without cerclage. The "**with** internal fixation" version. If no fixation had been used, you'd code **27752** (closed treatment) or **27756** (percutaneous).

**Step 6 — Add modifier:** **-RT** for the right side. Final: **27758-RT**. The fluoroscopy is **bundled** into 27758, do NOT add 76000.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="60" text-anchor="middle" fill="#ffd700" font-size="34" font-weight="bold">Coding 27758 Step-by-Step</text>
            <text x="550" y="100" text-anchor="middle" fill="#888" font-size="18">Closed tibial shaft Fx with open treatment + plate fixation</text>
            <rect x="60" y="140" width="500" height="430" rx="12" fill="none" stroke="#6366f1" stroke-width="3"/>
            <text x="310" y="180" text-anchor="middle" fill="#6366f1" font-size="22" font-weight="bold">Op Note Cues</text>
            <text x="80" y="220" fill="#ffd700" font-size="15">"closed displaced fracture"</text>
            <text x="100" y="243" fill="#888" font-size="13">-> Closed fracture (skin intact)</text>
            <text x="80" y="280" fill="#ffd700" font-size="15">"right tibial shaft"</text>
            <text x="100" y="303" fill="#888" font-size="13">-> Diaphysis, CPT 27750-27759 range</text>
            <text x="80" y="340" fill="#ffd700" font-size="15">"longitudinal incision"</text>
            <text x="100" y="363" fill="#888" font-size="13">-> Open treatment (surgeon cut down)</text>
            <text x="80" y="400" fill="#ffd700" font-size="15">"9-hole locking plate, 8 screws"</text>
            <text x="100" y="423" fill="#888" font-size="13">-> Internal fixation YES</text>
            <text x="80" y="460" fill="#ffd700" font-size="15">"fluoroscopy confirmed"</text>
            <text x="100" y="483" fill="#888" font-size="13">-> Bundled, do NOT bill 76000</text>
            <text x="80" y="520" fill="#ffd700" font-size="15">"right tibia"</text>
            <text x="100" y="543" fill="#888" font-size="13">-> Append modifier -RT</text>
            <rect x="580" y="140" width="460" height="430" rx="12" fill="none" stroke="#10b981" stroke-width="3"/>
            <text x="810" y="180" text-anchor="middle" fill="#10b981" font-size="22" font-weight="bold">CPT 27750-27759 Map</text>
            <rect x="600" y="210" width="420" height="55" rx="6" fill="#10b981" opacity="0.2"/>
            <text x="620" y="232" fill="#ffd700" font-size="15">27750</text>
            <text x="700" y="232" fill="#ffffff" font-size="14">Closed Tx, no manipulation</text>
            <text x="700" y="252" fill="#888" font-size="12">Cast/splint only</text>
            <rect x="600" y="275" width="420" height="55" rx="6" fill="#10b981" opacity="0.2"/>
            <text x="620" y="297" fill="#ffd700" font-size="15">27752</text>
            <text x="700" y="297" fill="#ffffff" font-size="14">Closed Tx, WITH manipulation</text>
            <text x="700" y="317" fill="#888" font-size="12">Reduce without cutting</text>
            <rect x="600" y="340" width="420" height="55" rx="6" fill="#10b981" opacity="0.2"/>
            <text x="620" y="362" fill="#ffd700" font-size="15">27756</text>
            <text x="700" y="362" fill="#ffffff" font-size="14">Percutaneous fixation</text>
            <text x="700" y="382" fill="#888" font-size="12">Pins through skin</text>
            <rect x="600" y="405" width="420" height="55" rx="6" fill="#ffd700" opacity="0.3" stroke="#ffd700" stroke-width="2"/>
            <text x="620" y="427" fill="#ffd700" font-size="15" font-weight="bold">27758</text>
            <text x="700" y="427" fill="#ffffff" font-size="14" font-weight="bold">Open Tx, WITH fixation</text>
            <text x="700" y="447" fill="#ffffff" font-size="12">THIS CASE</text>
            <rect x="600" y="470" width="420" height="55" rx="6" fill="#10b981" opacity="0.2"/>
            <text x="620" y="492" fill="#ffd700" font-size="15">27759</text>
            <text x="700" y="492" fill="#ffffff" font-size="14">Intramedullary nail</text>
            <text x="700" y="512" fill="#888" font-size="12">Rod through marrow</text>
            <rect x="60" y="600" width="980" height="180" rx="12" fill="#0ea5e9" opacity="0.15" stroke="#0ea5e9" stroke-width="2"/>
            <text x="550" y="640" text-anchor="middle" fill="#0ea5e9" font-size="22" font-weight="bold">Final Answer</text>
            <text x="550" y="700" text-anchor="middle" fill="#ffd700" font-size="60" font-weight="bold">27758-RT</text>
            <text x="550" y="745" text-anchor="middle" fill="#ffffff" font-size="16">Open treatment, tibial shaft Fx, with plate/screws, right side</text>
            <rect x="60" y="810" width="980" height="200" rx="12" fill="#ef4444" opacity="0.15" stroke="#ef4444" stroke-width="2"/>
            <text x="550" y="850" text-anchor="middle" fill="#ef4444" font-size="22" font-weight="bold">Common Errors</text>
            <text x="80" y="895" fill="#ffffff" font-size="16">Coding 27752 (closed Tx) just because the fracture itself was closed</text>
            <text x="80" y="925" fill="#ffffff" font-size="16">Adding 76000 for fluoroscopy (bundled in 27758)</text>
            <text x="80" y="955" fill="#ffffff" font-size="16">Forgetting -RT and getting denied for laterality</text>
            <text x="80" y="985" fill="#ffffff" font-size="16">Choosing 27759 (IM nail) when the surgeon used a plate</text>
          </svg>`,
          caption: "27758 walk-through: closed fracture, open treatment, internal fixation, right tibia."
        }
      },
      {
        type: "quiz",
        title: "Quick Check: Spine Suffixes",
        content: `A neurosurgeon performs a procedure described in the op note as: "**Surgical removal of the entire L4 lamina** to decompress the cauda equina."

Which suffix and procedure name correctly describe this operation?`,
        question: "Which term correctly describes complete removal of the L4 lamina?",
        options: [
          { text: "Laminotomy (the entire lamina is cut into but preserved)", correct: false },
          { text: "Laminectomy (the entire lamina is surgically removed)", correct: true },
          { text: "Laminostomy (a permanent opening is created in the lamina)", correct: false },
          { text: "Laminoplasty (the lamina is reshaped and replaced)", correct: false }
        ],
        explanation: "**-ectomy** = surgical removal. **Laminectomy** is the complete excision of the lamina, used to decompress the spinal canal in stenosis cases. **Laminotomy** (-tomy = cut into) is a partial cut, often to access a disc, and codes to a different CPT range. **Laminoplasty** (-plasty = reshape) preserves and reconstructs the lamina, common in cervical spine. **Laminostomy** is not a real surgical term — exam writers include it as a distractor to test whether candidates blindly match suffixes. When the op note says 'removal,' always reach for -ectomy.",
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="60" text-anchor="middle" fill="#ffd700" font-size="34" font-weight="bold">Lamina Procedures Compared</text>
            <text x="550" y="100" text-anchor="middle" fill="#888" font-size="18">Same anatomy, four very different procedures</text>
            <rect x="60" y="150" width="480" height="280" rx="12" fill="none" stroke="#ec4899" stroke-width="3"/>
            <text x="300" y="190" text-anchor="middle" fill="#ec4899" font-size="22" font-weight="bold">LAMINOTOMY</text>
            <text x="300" y="220" text-anchor="middle" fill="#ffffff" font-size="16">-tomy = cut into</text>
            <text x="80" y="265" fill="#ffffff" font-size="15">Partial removal or window cut</text>
            <text x="80" y="295" fill="#ffffff" font-size="15">Preserves most of the lamina</text>
            <text x="80" y="325" fill="#ffffff" font-size="15">Used to access a disc fragment</text>
            <text x="80" y="365" fill="#ffd700" font-size="15">CPT example: 63020-63035</text>
            <text x="80" y="395" fill="#888" font-size="13">Often combined with discectomy</text>
            <rect x="560" y="150" width="480" height="280" rx="12" fill="#10b981" opacity="0.2" stroke="#10b981" stroke-width="3"/>
            <text x="800" y="190" text-anchor="middle" fill="#10b981" font-size="22" font-weight="bold">LAMINECTOMY</text>
            <text x="800" y="220" text-anchor="middle" fill="#ffffff" font-size="16">-ectomy = remove</text>
            <text x="580" y="265" fill="#ffffff" font-size="15">Complete removal of lamina</text>
            <text x="580" y="295" fill="#ffffff" font-size="15">Decompresses spinal canal</text>
            <text x="580" y="325" fill="#ffffff" font-size="15">Used for spinal stenosis</text>
            <text x="580" y="365" fill="#ffd700" font-size="15">CPT example: 63045-63048</text>
            <text x="580" y="395" fill="#10b981" font-size="13" font-weight="bold">THIS QUESTION'S ANSWER</text>
            <rect x="60" y="450" width="480" height="280" rx="12" fill="none" stroke="#0ea5e9" stroke-width="3"/>
            <text x="300" y="490" text-anchor="middle" fill="#0ea5e9" font-size="22" font-weight="bold">LAMINOPLASTY</text>
            <text x="300" y="520" text-anchor="middle" fill="#ffffff" font-size="16">-plasty = reshape</text>
            <text x="80" y="565" fill="#ffffff" font-size="15">Lamina is hinged open</text>
            <text x="80" y="595" fill="#ffffff" font-size="15">Then reattached with spacers</text>
            <text x="80" y="625" fill="#ffffff" font-size="15">Common in cervical spine</text>
            <text x="80" y="665" fill="#ffd700" font-size="15">CPT example: 63050-63051</text>
            <text x="80" y="695" fill="#888" font-size="13">Preserves stability vs. -ectomy</text>
            <rect x="560" y="450" width="480" height="280" rx="12" fill="none" stroke="#ef4444" stroke-width="3"/>
            <text x="800" y="490" text-anchor="middle" fill="#ef4444" font-size="22" font-weight="bold">"LAMINOSTOMY"</text>
            <text x="800" y="520" text-anchor="middle" fill="#ffffff" font-size="16">NOT a real procedure</text>
            <text x="580" y="565" fill="#ffffff" font-size="15">Exam distractor only</text>
            <text x="580" y="595" fill="#ffffff" font-size="15">-ostomy = permanent opening</text>
            <text x="580" y="625" fill="#ffffff" font-size="15">(used for hollow organs)</text>
            <text x="580" y="665" fill="#ef4444" font-size="15">If you pick this, you fail</text>
            <text x="580" y="695" fill="#888" font-size="13">Tests blind suffix matching</text>
            <rect x="60" y="760" width="980" height="250" rx="12" fill="#0ea5e9" opacity="0.15" stroke="#0ea5e9" stroke-width="2"/>
            <text x="550" y="805" text-anchor="middle" fill="#0ea5e9" font-size="22" font-weight="bold">How to Lock This In</text>
            <text x="100" y="850" fill="#ffffff" font-size="16">Translate first, code second: "removal of lamina" -> -ectomy -> laminectomy</text>
            <text x="100" y="885" fill="#ffffff" font-size="16">If the op note says "removed/excised" -> -ectomy</text>
            <text x="100" y="920" fill="#ffffff" font-size="16">If it says "incised/cut" -> -tomy</text>
            <text x="100" y="955" fill="#ffffff" font-size="16">If it says "reshaped/repaired" -> -plasty</text>
            <text x="100" y="990" fill="#ffffff" font-size="16">If it says "fused/immobilized" -> -desis</text>
          </svg>`,
          caption: "Four lamina procedures, four different CPT ranges; reading the op note verb tells you which suffix applies."
        }
      },
      {
        type: "application",
        title: "Apply It: MSK Decision Reflexes",
        content: `**Build a fracture-care flow card.** Top to bottom: Fracture type (open/closed) -> Treatment (closed/open/percutaneous) -> Manipulation (yes/no) -> Fixation (none/internal/external). Tape it inside your CPT book. Every fracture question on the exam follows this exact tree.

**Memorize the verb-to-suffix mapping.** "**Removed**" or "**excised**" = -ectomy. "**Incised**" or "**cut into**" = -tomy. "**Created an opening to skin**" = -ostomy. "**Repaired**" or "**reconstructed**" = -plasty. "**Fused**" = -desis. Drill these for ten minutes a day until you can translate without looking.

**Practice laterality modifiers.** **-RT** (right), **-LT** (left), **-50** (bilateral). For fingers: **-F1 through -F9** (left/right thumb and four fingers). For toes: **-T1 through -T9**. Skipping the modifier means denial — these are free points if you remember.

**Drill bundling rules.** Imaging guidance (fluoroscopy, ultrasound) used during a fracture-care code is **almost always bundled**. The initial cast/splint applied at the same encounter is **also bundled**. Replacement casts use the **29000-29799** range. Knowing what NOT to code is half the battle.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="60" text-anchor="middle" fill="#ffd700" font-size="34" font-weight="bold">Your MSK Reflex Training Plan</text>
            <text x="550" y="100" text-anchor="middle" fill="#888" font-size="18">Four drills to build automatic CPT selection</text>
            <rect x="60" y="140" width="500" height="240" rx="12" fill="none" stroke="#6366f1" stroke-width="3"/>
            <text x="310" y="180" text-anchor="middle" fill="#6366f1" font-size="22" font-weight="bold">Drill 1: Verb -> Suffix</text>
            <text x="80" y="220" fill="#ffd700" font-size="15">"removed" / "excised"</text>
            <text x="380" y="220" fill="#ffffff" font-size="15">-> -ectomy</text>
            <text x="80" y="250" fill="#ffd700" font-size="15">"incised" / "cut into"</text>
            <text x="380" y="250" fill="#ffffff" font-size="15">-> -tomy</text>
            <text x="80" y="280" fill="#ffd700" font-size="15">"opening to skin"</text>
            <text x="380" y="280" fill="#ffffff" font-size="15">-> -ostomy</text>
            <text x="80" y="310" fill="#ffd700" font-size="15">"repaired" / "reshaped"</text>
            <text x="380" y="310" fill="#ffffff" font-size="15">-> -plasty</text>
            <text x="80" y="340" fill="#ffd700" font-size="15">"fused" / "joined"</text>
            <text x="380" y="340" fill="#ffffff" font-size="15">-> -desis</text>
            <rect x="580" y="140" width="460" height="240" rx="12" fill="none" stroke="#10b981" stroke-width="3"/>
            <text x="810" y="180" text-anchor="middle" fill="#10b981" font-size="22" font-weight="bold">Drill 2: Fracture Flow</text>
            <text x="600" y="220" fill="#ffffff" font-size="14">Q1: Open or closed fracture?</text>
            <text x="600" y="250" fill="#ffffff" font-size="14">Q2: Open, closed, or perc Tx?</text>
            <text x="600" y="280" fill="#ffffff" font-size="14">Q3: Manipulation performed?</text>
            <text x="600" y="310" fill="#ffffff" font-size="14">Q4: Internal fixation placed?</text>
            <text x="600" y="345" fill="#ffd700" font-size="15">Answer all four = correct CPT</text>
            <rect x="60" y="400" width="500" height="240" rx="12" fill="none" stroke="#f59e0b" stroke-width="3"/>
            <text x="310" y="440" text-anchor="middle" fill="#f59e0b" font-size="22" font-weight="bold">Drill 3: Laterality</text>
            <text x="80" y="480" fill="#ffd700" font-size="15">-RT</text>
            <text x="180" y="480" fill="#ffffff" font-size="15">right side</text>
            <text x="80" y="510" fill="#ffd700" font-size="15">-LT</text>
            <text x="180" y="510" fill="#ffffff" font-size="15">left side</text>
            <text x="80" y="540" fill="#ffd700" font-size="15">-50</text>
            <text x="180" y="540" fill="#ffffff" font-size="15">bilateral</text>
            <text x="80" y="570" fill="#ffd700" font-size="15">-F1 to -F9</text>
            <text x="180" y="570" fill="#ffffff" font-size="15">fingers (L/R thumb to pinky)</text>
            <text x="80" y="600" fill="#ffd700" font-size="15">-T1 to -T9</text>
            <text x="180" y="600" fill="#ffffff" font-size="15">toes</text>
            <rect x="580" y="400" width="460" height="240" rx="12" fill="none" stroke="#ec4899" stroke-width="3"/>
            <text x="810" y="440" text-anchor="middle" fill="#ec4899" font-size="22" font-weight="bold">Drill 4: What's Bundled</text>
            <text x="600" y="480" fill="#ffffff" font-size="14">Fluoroscopy in fracture care</text>
            <text x="600" y="510" fill="#ffffff" font-size="14">Initial cast/splint at same visit</text>
            <text x="600" y="540" fill="#ffffff" font-size="14">Approach incision (sternotomy etc.)</text>
            <text x="600" y="570" fill="#ffffff" font-size="14">Wound closure for the procedure</text>
            <text x="600" y="605" fill="#ec4899" font-size="14" font-weight="bold">Replacement cast IS billable</text>
            <text x="600" y="625" fill="#ec4899" font-size="13">(29000-29799 range)</text>
            <rect x="60" y="660" width="980" height="350" rx="12" fill="#0ea5e9" opacity="0.15" stroke="#0ea5e9" stroke-width="2"/>
            <text x="550" y="705" text-anchor="middle" fill="#0ea5e9" font-size="22" font-weight="bold">Daily 20-Minute Routine</text>
            <text x="80" y="745" fill="#ffffff" font-size="16">Minutes 0-5: Suffix flashcards (-tomy / -ostomy / -ectomy / -plasty / -desis)</text>
            <text x="80" y="775" fill="#ffffff" font-size="16">Minutes 5-12: Three fracture op notes -> code with decision tree</text>
            <text x="80" y="805" fill="#ffffff" font-size="16">Minutes 12-17: One arthroscopy + one open joint case -> compare ranges</text>
            <text x="80" y="835" fill="#ffffff" font-size="16">Minutes 17-20: Self-quiz on laterality modifiers</text>
            <text x="550" y="885" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">Track your reflex time</text>
            <text x="550" y="920" text-anchor="middle" fill="#ffffff" font-size="16">Week 1: 90 seconds per fracture case</text>
            <text x="550" y="950" text-anchor="middle" fill="#ffffff" font-size="16">Week 3: 45 seconds per fracture case</text>
            <text x="550" y="985" text-anchor="middle" fill="#10b981" font-size="16" font-weight="bold">Exam-ready: under 30 seconds</text>
          </svg>`,
          caption: "Four drills, twenty minutes a day, and the MSK section becomes the easiest twenty points on the test."
        }
      }
    ]
  },
  {
    id: "cpc-foundation-lesson-6",
    title: "Combining Forms vs. Roots: The Subtle Rules That Sink Test Scores",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "Why This Tiny Rule Costs Real Points",
        content: `Most CPC candidates breeze past medical-term construction because Lesson 3 made it look easy. **Prefix + root + suffix.** Done, right? Then 4-5 questions on the actual exam ask things like: *"Which is correctly constructed: cardiacology, cardiology, or cardioology?"* and they panic.

The trap is the **combining vowel** — usually **"o"** — that sits between roots and the next word part. The rule sounds simple: **use the combining vowel before a consonant, drop it before a vowel.** But the exceptions, the doubled-root scenarios, and the difference between a **root** and a **combining form** trip up even experienced coders.

This lesson breaks down the **three core rules**: when to keep the "o", when to drop it, and how to handle two roots strung together (like **naso-pharyng-itis**). You'll see why **cardi-o-vascular** keeps the "o" but **cardi-ac** drops it, and why **gastr-o-enteritis** keeps both roots' vowels even though "enteritis" starts with a vowel.

Get this lesson right and the entire med-term section of the CPC becomes free points. Get it wrong and you're losing 4-5 questions to a rule you could have memorized in fifteen minutes.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="60" text-anchor="middle" fill="#ffd700" font-size="34" font-weight="bold">Combining Forms: The Hidden CPC Trap</text>
            <text x="550" y="100" text-anchor="middle" fill="#888" font-size="18">A 15-minute lesson worth 4-5 exam points</text>
            <rect x="80" y="150" width="940" height="180" rx="12" fill="none" stroke="#6366f1" stroke-width="3"/>
            <text x="550" y="190" text-anchor="middle" fill="#6366f1" font-size="24" font-weight="bold">What Most Candidates Miss</text>
            <text x="100" y="230" fill="#ffffff" font-size="16">Lesson 3 said: prefix + root + suffix. Easy.</text>
            <text x="100" y="260" fill="#ffffff" font-size="16">Lesson 6 reality: a hidden vowel rule governs WHEN to glue parts together.</text>
            <text x="100" y="290" fill="#ffffff" font-size="16">CPC exam writers know candidates skip this rule and write 4-5 questions on it.</text>
            <text x="100" y="320" fill="#ffd700" font-size="16" font-weight="bold">Master the rule, recover the points.</text>
            <rect x="80" y="360" width="440" height="320" rx="12" fill="none" stroke="#10b981" stroke-width="3"/>
            <text x="300" y="400" text-anchor="middle" fill="#10b981" font-size="22" font-weight="bold">Two Key Terms</text>
            <rect x="100" y="425" width="400" height="100" rx="8" fill="#10b981" opacity="0.2"/>
            <text x="300" y="455" text-anchor="middle" fill="#ffd700" font-size="18" font-weight="bold">ROOT</text>
            <text x="300" y="485" text-anchor="middle" fill="#ffffff" font-size="14">The core meaning unit</text>
            <text x="300" y="510" text-anchor="middle" fill="#ffffff" font-size="14">Example: cardi (heart)</text>
            <rect x="100" y="545" width="400" height="115" rx="8" fill="#10b981" opacity="0.2"/>
            <text x="300" y="575" text-anchor="middle" fill="#ffd700" font-size="18" font-weight="bold">COMBINING FORM</text>
            <text x="300" y="605" text-anchor="middle" fill="#ffffff" font-size="14">Root + combining vowel</text>
            <text x="300" y="630" text-anchor="middle" fill="#ffffff" font-size="14">Example: cardi/o (heart + o)</text>
            <text x="300" y="655" text-anchor="middle" fill="#888" font-size="12">Written with a slash in books</text>
            <rect x="560" y="360" width="460" height="320" rx="12" fill="none" stroke="#ec4899" stroke-width="3"/>
            <text x="790" y="400" text-anchor="middle" fill="#ec4899" font-size="22" font-weight="bold">Three Rules This Lesson Teaches</text>
            <text x="580" y="440" fill="#ffd700" font-size="16" font-weight="bold">Rule 1</text>
            <text x="580" y="465" fill="#ffffff" font-size="14">Use combining vowel before</text>
            <text x="580" y="485" fill="#ffffff" font-size="14">a consonant-starting suffix</text>
            <text x="580" y="510" fill="#888" font-size="13">cardi/o + vascular = cardiovascular</text>
            <text x="580" y="555" fill="#ffd700" font-size="16" font-weight="bold">Rule 2</text>
            <text x="580" y="580" fill="#ffffff" font-size="14">Drop combining vowel before</text>
            <text x="580" y="600" fill="#ffffff" font-size="14">a vowel-starting suffix</text>
            <text x="580" y="625" fill="#888" font-size="13">cardi + ac = cardiac</text>
            <text x="580" y="660" fill="#ffd700" font-size="16" font-weight="bold">Rule 3: Always keep "o" between two roots</text>
            <rect x="80" y="710" width="940" height="300" rx="12" fill="#0ea5e9" opacity="0.15" stroke="#0ea5e9" stroke-width="2"/>
            <text x="550" y="755" text-anchor="middle" fill="#0ea5e9" font-size="22" font-weight="bold">Examples to Compare</text>
            <text x="100" y="800" fill="#ffd700" font-size="17">cardi/o + vascular</text>
            <text x="500" y="800" fill="#ffffff" font-size="17">-> cardiOvascular (keep o)</text>
            <text x="100" y="835" fill="#ffd700" font-size="17">cardi + ac</text>
            <text x="500" y="835" fill="#ffffff" font-size="17">-> cardiac (drop o)</text>
            <text x="100" y="870" fill="#ffd700" font-size="17">gastr/o + enter/o + itis</text>
            <text x="500" y="870" fill="#ffffff" font-size="17">-> gastrOenterItis (keep both)</text>
            <text x="100" y="905" fill="#ffd700" font-size="17">nas/o + pharyng + itis</text>
            <text x="500" y="905" fill="#ffffff" font-size="17">-> nasOpharyngitis (keep between)</text>
            <text x="100" y="940" fill="#ffd700" font-size="17">arthr + itis</text>
            <text x="500" y="940" fill="#ffffff" font-size="17">-> arthritis (drop o)</text>
            <text x="550" y="990" text-anchor="middle" fill="#ffd700" font-size="18" font-weight="bold">Same root "cardi" -> two valid words, two different rules</text>
          </svg>`,
          caption: "Combining forms differ from roots by a single 'o' — the rule that decides when to use which costs points on every CPC."
        }
      },
      {
        type: "concept",
        title: "The Three Rules That Actually Matter",
        content: `**Rule 1 — Combining vowel BEFORE a consonant.** When the next word part starts with a consonant, you keep the combining vowel (almost always **"o"**). Example: **cardi/o + vascular** -> **cardiovascular**. The "v" is a consonant, so the "o" survives.

**Rule 2 — Drop the combining vowel BEFORE a vowel.** When the next part starts with a vowel, you drop the "o". Example: **cardi + ac** -> **cardiac**. The "a" is a vowel, so "cardio + ac" would awkwardly produce "cardioac" — the rule drops the "o" to give **cardiac**. Same logic: **arthr + itis** -> **arthritis** (drop the o because "i" is a vowel), not "arthroitis".

**Rule 3 — ALWAYS keep "o" BETWEEN two roots, even if the second root starts with a vowel.** This is the rule that catches everyone. Example: **gastr/o + enter/o + itis** -> **gastroenteritis**. The "e" in "enter" is a vowel, but because we're connecting two roots (gastr and enter), we keep the "o". Same for **nas/o + pharyng + itis** -> **nasopharyngitis**.

**Why the rule exists:** spoken pronunciation. Without the "o" between roots, words like "gastrenteritis" become tongue-twisters. The combining vowel is a linguistic shock absorber. Once you understand the **why**, the rule sticks. Once it sticks, the CPC med-term section is yours.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="60" text-anchor="middle" fill="#ffd700" font-size="34" font-weight="bold">The Three Combining-Vowel Rules</text>
            <text x="550" y="100" text-anchor="middle" fill="#888" font-size="18">Memorize these and the med-term section becomes free points</text>
            <rect x="60" y="140" width="1010" height="270" rx="12" fill="none" stroke="#10b981" stroke-width="3"/>
            <text x="565" y="180" text-anchor="middle" fill="#10b981" font-size="24" font-weight="bold">Rule 1: Keep "o" before a CONSONANT</text>
            <rect x="100" y="210" width="220" height="60" rx="8" fill="#10b981" opacity="0.2"/>
            <text x="210" y="245" text-anchor="middle" fill="#ffffff" font-size="16">cardi/o + vascular</text>
            <text x="350" y="247" fill="#ffd700" font-size="28">-></text>
            <rect x="410" y="210" width="220" height="60" rx="8" fill="#ffd700" opacity="0.3"/>
            <text x="520" y="245" text-anchor="middle" fill="#ffffff" font-size="16">cardiOvascular</text>
            <text x="660" y="247" fill="#888" font-size="16">"v" is consonant -> keep "o"</text>
            <rect x="100" y="290" width="220" height="60" rx="8" fill="#10b981" opacity="0.2"/>
            <text x="210" y="325" text-anchor="middle" fill="#ffffff" font-size="16">arthr/o + scopy</text>
            <text x="350" y="327" fill="#ffd700" font-size="28">-></text>
            <rect x="410" y="290" width="220" height="60" rx="8" fill="#ffd700" opacity="0.3"/>
            <text x="520" y="325" text-anchor="middle" fill="#ffffff" font-size="16">arthrOscopy</text>
            <text x="660" y="327" fill="#888" font-size="16">"s" is consonant -> keep "o"</text>
            <text x="565" y="385" text-anchor="middle" fill="#ffd700" font-size="14" font-style="italic">Pattern: root/o + [consonant-start] = root + o + rest</text>
            <rect x="60" y="430" width="1010" height="270" rx="12" fill="none" stroke="#ef4444" stroke-width="3"/>
            <text x="565" y="470" text-anchor="middle" fill="#ef4444" font-size="24" font-weight="bold">Rule 2: Drop "o" before a VOWEL</text>
            <rect x="100" y="500" width="220" height="60" rx="8" fill="#ef4444" opacity="0.2"/>
            <text x="210" y="535" text-anchor="middle" fill="#ffffff" font-size="16">cardi + ac</text>
            <text x="350" y="537" fill="#ffd700" font-size="28">-></text>
            <rect x="410" y="500" width="220" height="60" rx="8" fill="#ffd700" opacity="0.3"/>
            <text x="520" y="535" text-anchor="middle" fill="#ffffff" font-size="16">cardiac</text>
            <text x="660" y="537" fill="#888" font-size="16">"a" is vowel -> drop "o"</text>
            <rect x="100" y="580" width="220" height="60" rx="8" fill="#ef4444" opacity="0.2"/>
            <text x="210" y="615" text-anchor="middle" fill="#ffffff" font-size="16">arthr + itis</text>
            <text x="350" y="617" fill="#ffd700" font-size="28">-></text>
            <rect x="410" y="580" width="220" height="60" rx="8" fill="#ffd700" opacity="0.3"/>
            <text x="520" y="615" text-anchor="middle" fill="#ffffff" font-size="16">arthritis</text>
            <text x="660" y="617" fill="#888" font-size="16">"i" is vowel -> drop "o"</text>
            <text x="565" y="675" text-anchor="middle" fill="#ffd700" font-size="14" font-style="italic">Pattern: root + [vowel-start suffix] = root + rest (no "o")</text>
            <rect x="60" y="720" width="1010" height="290" rx="12" fill="none" stroke="#ec4899" stroke-width="3"/>
            <text x="565" y="760" text-anchor="middle" fill="#ec4899" font-size="24" font-weight="bold">Rule 3: ALWAYS keep "o" between TWO ROOTS</text>
            <rect x="100" y="790" width="320" height="60" rx="8" fill="#ec4899" opacity="0.2"/>
            <text x="260" y="825" text-anchor="middle" fill="#ffffff" font-size="15">gastr/o + enter/o + itis</text>
            <text x="450" y="827" fill="#ffd700" font-size="28">-></text>
            <rect x="510" y="790" width="320" height="60" rx="8" fill="#ffd700" opacity="0.3"/>
            <text x="670" y="825" text-anchor="middle" fill="#ffffff" font-size="15">gastrOenterItis</text>
            <rect x="100" y="870" width="320" height="60" rx="8" fill="#ec4899" opacity="0.2"/>
            <text x="260" y="905" text-anchor="middle" fill="#ffffff" font-size="15">nas/o + pharyng + itis</text>
            <text x="450" y="907" fill="#ffd700" font-size="28">-></text>
            <rect x="510" y="870" width="320" height="60" rx="8" fill="#ffd700" opacity="0.3"/>
            <text x="670" y="905" text-anchor="middle" fill="#ffffff" font-size="15">nasOpharyngitis</text>
            <text x="565" y="960" text-anchor="middle" fill="#ffd700" font-size="16">Even if root #2 starts with vowel, the "o" between roots STAYS</text>
            <text x="565" y="990" text-anchor="middle" fill="#888" font-size="14" font-style="italic">Without it: "gastrenteritis" is unpronounceable. Linguistic shock absorber.</text>
          </svg>`,
          caption: "Three rules. Two for joining roots to suffixes. One for joining roots to roots. Memorize once, score forever."
        }
      },
      {
        type: "example",
        title: "Worked Example: Naso-pharyng-itis vs. Nas-itis",
        content: `**Test prompt:** Construct the medical term for "inflammation of the nose and throat."

**Step 1 — Identify the building blocks.** Two roots and a suffix:
- **nas/o** = nose (combining form)
- **pharyng** = throat (root)
- **-itis** = inflammation (suffix)

**Step 2 — Apply Rule 3 between the two roots.** Even though **pharyng** starts with a consonant (so technically Rule 1 would also keep "o"), the more important guideline is: **between any two roots, keep the combining vowel**. Result so far: **naso + pharyng**.

**Step 3 — Apply Rule 2 between the root and the suffix.** The suffix **-itis** starts with **"i"**, a vowel. So we drop the "o" of pharyng/o (if there were one). Result: **nasopharyng + itis** -> **nasopharyngitis**.

**Step 4 — Compare to the simpler case.** "Inflammation of the nose alone" = **nas + itis** -> **nasitis**? Wait — actual usage is **rhinitis** (different root, **rhin/o** for nose). But linguistically, **nas + itis** drops the "o" because "i" is a vowel. The rule still holds.

**The exam trap:** test writers will offer "nasopharyngeitis" (keeping the "o" before "itis") or "nasopharyngitis" (correct). One letter difference, full point lost.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="60" text-anchor="middle" fill="#ffd700" font-size="34" font-weight="bold">Building "Nasopharyngitis" Step by Step</text>
            <text x="550" y="100" text-anchor="middle" fill="#888" font-size="18">Two roots + one suffix + two rules = one correct term</text>
            <rect x="60" y="140" width="1010" height="220" rx="12" fill="none" stroke="#6366f1" stroke-width="3"/>
            <text x="565" y="180" text-anchor="middle" fill="#6366f1" font-size="24" font-weight="bold">Step 1: Identify the Parts</text>
            <rect x="100" y="210" width="280" height="120" rx="10" fill="#6366f1" opacity="0.2"/>
            <text x="240" y="245" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">nas/o</text>
            <text x="240" y="275" text-anchor="middle" fill="#ffffff" font-size="15">"nose"</text>
            <text x="240" y="305" text-anchor="middle" fill="#888" font-size="13">Combining form (root + o)</text>
            <rect x="410" y="210" width="280" height="120" rx="10" fill="#6366f1" opacity="0.2"/>
            <text x="550" y="245" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">pharyng</text>
            <text x="550" y="275" text-anchor="middle" fill="#ffffff" font-size="15">"throat"</text>
            <text x="550" y="305" text-anchor="middle" fill="#888" font-size="13">Root</text>
            <rect x="720" y="210" width="280" height="120" rx="10" fill="#6366f1" opacity="0.2"/>
            <text x="860" y="245" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">-itis</text>
            <text x="860" y="275" text-anchor="middle" fill="#ffffff" font-size="15">"inflammation"</text>
            <text x="860" y="305" text-anchor="middle" fill="#888" font-size="13">Suffix (starts with vowel)</text>
            <rect x="60" y="380" width="1010" height="200" rx="12" fill="none" stroke="#10b981" stroke-width="3"/>
            <text x="565" y="420" text-anchor="middle" fill="#10b981" font-size="24" font-weight="bold">Step 2: Apply Rule 3 (Between Roots)</text>
            <text x="565" y="465" text-anchor="middle" fill="#ffffff" font-size="18">Joining root #1 (nas) to root #2 (pharyng)</text>
            <text x="565" y="500" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">Always keep "o" between roots</text>
            <text x="565" y="545" text-anchor="middle" fill="#10b981" font-size="22" font-weight="bold">Result: naso + pharyng</text>
            <rect x="60" y="600" width="1010" height="200" rx="12" fill="none" stroke="#ef4444" stroke-width="3"/>
            <text x="565" y="640" text-anchor="middle" fill="#ef4444" font-size="24" font-weight="bold">Step 3: Apply Rule 2 (Before Vowel Suffix)</text>
            <text x="565" y="685" text-anchor="middle" fill="#ffffff" font-size="18">Joining pharyng + "-itis" (vowel start)</text>
            <text x="565" y="720" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">Drop the "o" before -itis</text>
            <text x="565" y="765" text-anchor="middle" fill="#ef4444" font-size="22" font-weight="bold">Result: nasopharyng + itis</text>
            <rect x="60" y="820" width="1010" height="190" rx="12" fill="#0ea5e9" opacity="0.15" stroke="#0ea5e9" stroke-width="3"/>
            <text x="565" y="865" text-anchor="middle" fill="#0ea5e9" font-size="22" font-weight="bold">Final Answer</text>
            <text x="565" y="935" text-anchor="middle" fill="#ffd700" font-size="50" font-weight="bold">nasopharyngitis</text>
            <text x="565" y="985" text-anchor="middle" fill="#888" font-size="16" font-style="italic">Watch for the trap: "nasopharyngeitis" is the wrong-answer distractor</text>
          </svg>`,
          caption: "Two roots + vowel-suffix: keep the 'o' between roots, drop the 'o' before the vowel suffix."
        }
      },
      {
        type: "quiz",
        title: "Quick Check: Cardiology vs. Cardioology",
        content: `A CPC exam question presents these four choices for "the study of the heart":

Pick the correctly constructed medical term.`,
        question: "Which is correctly constructed?",
        options: [
          { text: "cardioology (combining vowel kept before -ology)", correct: false },
          { text: "cardiology (combining vowel partially preserved before consonant-start suffix)", correct: true },
          { text: "cardiology is wrong; the correct form is cardiacology", correct: false },
          { text: "cardology (drop both the 'i' of the root and the combining 'o')", correct: false }
        ],
        explanation: "The root **cardi** + combining vowel **'o'** + suffix **-logy** ('study of') = **cardiology**. The suffix **-logy** starts with the consonant **'l'**, so Rule 1 says keep the combining vowel ('o'). The 'o' you see in 'cardiology' IS the combining vowel — it doesn't disappear, it just looks like part of the suffix '-ology' when written together. 'Cardioology' would double the 'o' (wrong). 'Cardiacology' adds a non-existent suffix (wrong). 'Cardology' drops too much (wrong). The construction is cardi + o + logy -> cardiology.",
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="60" text-anchor="middle" fill="#ffd700" font-size="34" font-weight="bold">Constructing "Cardiology" Correctly</text>
            <text x="550" y="100" text-anchor="middle" fill="#888" font-size="18">cardi + o + logy = cardiology</text>
            <rect x="60" y="140" width="1010" height="220" rx="12" fill="none" stroke="#10b981" stroke-width="3"/>
            <text x="565" y="180" text-anchor="middle" fill="#10b981" font-size="24" font-weight="bold">Correct Construction</text>
            <rect x="120" y="210" width="200" height="120" rx="10" fill="#10b981" opacity="0.2"/>
            <text x="220" y="245" text-anchor="middle" fill="#ffd700" font-size="24" font-weight="bold">cardi</text>
            <text x="220" y="275" text-anchor="middle" fill="#ffffff" font-size="14">root</text>
            <text x="220" y="305" text-anchor="middle" fill="#888" font-size="13">"heart"</text>
            <text x="350" y="285" fill="#ffd700" font-size="36">+</text>
            <rect x="410" y="210" width="200" height="120" rx="10" fill="#10b981" opacity="0.2"/>
            <text x="510" y="245" text-anchor="middle" fill="#ffd700" font-size="24" font-weight="bold">o</text>
            <text x="510" y="275" text-anchor="middle" fill="#ffffff" font-size="14">combining vowel</text>
            <text x="510" y="305" text-anchor="middle" fill="#888" font-size="13">kept (consonant next)</text>
            <text x="640" y="285" fill="#ffd700" font-size="36">+</text>
            <rect x="700" y="210" width="200" height="120" rx="10" fill="#10b981" opacity="0.2"/>
            <text x="800" y="245" text-anchor="middle" fill="#ffd700" font-size="24" font-weight="bold">logy</text>
            <text x="800" y="275" text-anchor="middle" fill="#ffffff" font-size="14">suffix</text>
            <text x="800" y="305" text-anchor="middle" fill="#888" font-size="13">"study of"</text>
            <rect x="60" y="380" width="1010" height="120" rx="12" fill="#0ea5e9" opacity="0.15" stroke="#0ea5e9" stroke-width="3"/>
            <text x="565" y="450" text-anchor="middle" fill="#ffd700" font-size="48" font-weight="bold">cardiology</text>
            <rect x="60" y="520" width="1010" height="240" rx="12" fill="none" stroke="#ef4444" stroke-width="3"/>
            <text x="565" y="560" text-anchor="middle" fill="#ef4444" font-size="22" font-weight="bold">Why Each Wrong Answer Fails</text>
            <text x="80" y="600" fill="#ef4444" font-size="16">cardioology</text>
            <text x="350" y="600" fill="#ffffff" font-size="15">Doubled 'o' — only one combining vowel needed</text>
            <text x="80" y="635" fill="#ef4444" font-size="16">cardiacology</text>
            <text x="350" y="635" fill="#ffffff" font-size="15">Adds "ac" — not a valid linking element</text>
            <text x="80" y="670" fill="#ef4444" font-size="16">cardology</text>
            <text x="350" y="670" fill="#ffffff" font-size="15">Dropped the root's own 'i' — corrupts the root</text>
            <text x="80" y="705" fill="#ef4444" font-size="16">heartology</text>
            <text x="350" y="705" fill="#ffffff" font-size="15">English root with Greek suffix — never combine languages</text>
            <text x="565" y="745" text-anchor="middle" fill="#888" font-size="14" font-style="italic">All four use real-looking word parts; only one applies the rules correctly</text>
            <rect x="60" y="780" width="1010" height="230" rx="12" fill="#10b981" opacity="0.15" stroke="#10b981" stroke-width="2"/>
            <text x="565" y="825" text-anchor="middle" fill="#10b981" font-size="22" font-weight="bold">Three-Step Mental Check</text>
            <text x="100" y="870" fill="#ffffff" font-size="17">1. What's the root? -> cardi (heart)</text>
            <text x="100" y="905" fill="#ffffff" font-size="17">2. Does the next part start with a vowel or consonant? -> 'l' (consonant)</text>
            <text x="100" y="940" fill="#ffffff" font-size="17">3. Consonant -> keep combining vowel -> cardi + o + logy</text>
            <text x="565" y="990" text-anchor="middle" fill="#ffd700" font-size="18" font-weight="bold">Three seconds. Free point.</text>
          </svg>`,
          caption: "cardi + o + logy follows Rule 1 perfectly: keep the combining vowel before a consonant-starting suffix."
        }
      },
      {
        type: "application",
        title: "Apply It: Locking In the Vowel Rules",
        content: `**Build a 20-word drill list.** Mix Rule 1, Rule 2, and Rule 3 examples. Suggested set: **cardiovascular, cardiac, arthritis, arthroscopy, gastroenteritis, nasopharyngitis, hepatomegaly, hepatitis, neurology, neuritis, osteoarthritis, osteoporosis, dermatology, dermatitis, electrocardiogram, electroencephalography, otolaryngology, otitis, cardiomyopathy, myocarditis.** Construct each from root + (o?) + suffix and check your work.

**Read the suffix out loud first.** Before you write the term, **say the suffix**. If it starts with a vowel sound (-itis, -ectomy, -al, -ic), drop the combining vowel. If it starts with a consonant sound (-logy, -scopy, -graphy, -plasty), keep it. This audio cue is faster than spelling rules.

**Spot the two-root patterns.** Any time you see **two body parts** in the term ("nose AND throat", "stomach AND intestines", "ear AND larynx"), Rule 3 kicks in — keep the "o" between them. **Otolaryngology** = ot/o + laryng + o + logy = ear + throat + study of. Three parts, two combining vowels.

**Drill the look-alikes.** Make pairs: cardiac vs. cardiology, arthritis vs. arthroscopy, neuritis vs. neurology. Each pair shows Rule 1 and Rule 2 side by side. After fifty pairs, your eyes auto-detect the suffix's first letter and your brain auto-applies the rule. **Free CPC points unlocked.**`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="60" text-anchor="middle" fill="#ffd700" font-size="34" font-weight="bold">Locking In the Vowel Rules</text>
            <text x="550" y="100" text-anchor="middle" fill="#888" font-size="18">Four practice patterns that build automatic recognition</text>
            <rect x="60" y="140" width="1010" height="320" rx="12" fill="none" stroke="#6366f1" stroke-width="3"/>
            <text x="565" y="180" text-anchor="middle" fill="#6366f1" font-size="24" font-weight="bold">The 20-Word Drill List</text>
            <text x="80" y="220" fill="#10b981" font-size="14" font-weight="bold">Rule 1 (keep "o"):</text>
            <text x="80" y="245" fill="#ffffff" font-size="14">cardiovascular, arthroscopy, neurology, dermatology,</text>
            <text x="80" y="265" fill="#ffffff" font-size="14">hepatomegaly, osteoporosis, electrocardiogram, cardiomyopathy</text>
            <text x="80" y="305" fill="#ef4444" font-size="14" font-weight="bold">Rule 2 (drop "o"):</text>
            <text x="80" y="330" fill="#ffffff" font-size="14">cardiac, arthritis, neuritis, dermatitis, hepatitis, otitis,</text>
            <text x="80" y="350" fill="#ffffff" font-size="14">myocarditis</text>
            <text x="80" y="390" fill="#ec4899" font-size="14" font-weight="bold">Rule 3 (keep between roots):</text>
            <text x="80" y="415" fill="#ffffff" font-size="14">gastroenteritis, nasopharyngitis, osteoarthritis,</text>
            <text x="80" y="435" fill="#ffffff" font-size="14">otolaryngology, electroencephalography</text>
            <rect x="60" y="480" width="500" height="240" rx="12" fill="none" stroke="#10b981" stroke-width="3"/>
            <text x="310" y="520" text-anchor="middle" fill="#10b981" font-size="22" font-weight="bold">Audio Cue Drill</text>
            <text x="80" y="560" fill="#ffffff" font-size="15">SAY the suffix out loud first:</text>
            <text x="80" y="595" fill="#ffd700" font-size="15">Vowel-start sound -> DROP "o"</text>
            <text x="100" y="618" fill="#888" font-size="13">-itis, -ectomy, -al, -ic, -ar</text>
            <text x="80" y="655" fill="#ffd700" font-size="15">Consonant-start sound -> KEEP "o"</text>
            <text x="100" y="678" fill="#888" font-size="13">-logy, -scopy, -graphy, -plasty</text>
            <text x="80" y="710" fill="#10b981" font-size="14">Faster than spelling rules</text>
            <rect x="580" y="480" width="490" height="240" rx="12" fill="none" stroke="#ec4899" stroke-width="3"/>
            <text x="825" y="520" text-anchor="middle" fill="#ec4899" font-size="22" font-weight="bold">Two-Root Spotter</text>
            <text x="600" y="560" fill="#ffffff" font-size="14">If the term names TWO body parts,</text>
            <text x="600" y="580" fill="#ffffff" font-size="14">Rule 3 applies. Keep "o" between them.</text>
            <text x="600" y="620" fill="#ffd700" font-size="14">"ear AND throat" -> ot/o + laryng + ...</text>
            <text x="600" y="645" fill="#ffd700" font-size="14">"stomach AND intestine" -> gastr/o + enter + ...</text>
            <text x="600" y="670" fill="#ffd700" font-size="14">"nose AND throat" -> nas/o + pharyng + ...</text>
            <text x="600" y="705" fill="#888" font-size="13">"AND" in English = "o" in Greek</text>
            <rect x="60" y="740" width="1010" height="270" rx="12" fill="#0ea5e9" opacity="0.15" stroke="#0ea5e9" stroke-width="2"/>
            <text x="565" y="785" text-anchor="middle" fill="#0ea5e9" font-size="22" font-weight="bold">Daily 10-Minute Routine</text>
            <text x="80" y="825" fill="#ffffff" font-size="16">Minutes 0-3: Recite the 20-word list, calling out which rule applies</text>
            <text x="80" y="855" fill="#ffffff" font-size="16">Minutes 3-6: Construct 5 new terms from random root/suffix combos</text>
            <text x="80" y="885" fill="#ffffff" font-size="16">Minutes 6-8: Quiz a partner on look-alike pairs (cardiac vs. cardiology)</text>
            <text x="80" y="915" fill="#ffffff" font-size="16">Minutes 8-10: Review any errors and note the misread suffix</text>
            <text x="565" y="965" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">After two weeks: rule application is automatic</text>
            <text x="565" y="995" text-anchor="middle" fill="#10b981" font-size="16">4-5 med-term questions on the CPC become guaranteed points</text>
          </svg>`,
          caption: "Build a 20-word drill, listen for the suffix's first sound, watch for two-root patterns, then race the clock."
        }
      }
    ]
  }
];

    const BOOKS = [
        {
            id: 'cpc-foundation',
            title: 'CPC Foundation: Med Term & A&P Review for Coders',
            author: 'Synthesis Learning',
            description: 'The anatomy, body planes, and medical-term decoding system that every CPC exam question assumes you already know. The base layer for everything else in the track.',
            lessons: 6, duration: 90, progress: 0,
            category: 'cpc-prep',
            lessonList: FOUNDATION_PLACEHOLDER_LESSONS, // replaced by seed content when available
        },
        {
            id: 'cpc-icd10cm',
            title: 'ICD-10-CM Coding Conventions and Guidelines',
            author: 'Synthesis Learning',
            description: 'The Official Guidelines for Coding and Reporting, alphabetic vs. tabular index, code-first/use-additional, laterality, combination codes.',
            lessons: 1, duration: 5, progress: 0, category: 'cpc-prep',
            lessonList: comingSoonLessons('ICD-10-CM conventions, the Official Guidelines for Coding and Reporting, and the alphabetic/tabular index workflow'),
        },
        {
            id: 'cpc-cpt-surg-1',
            title: 'CPT Surgical Section I: Integumentary, Musculoskeletal, Respiratory',
            author: 'Synthesis Learning',
            description: 'Lesion excisions, fracture care, endoscopies — including the bundling rules and add-on codes that trip up new coders.',
            lessons: 1, duration: 5, progress: 0, category: 'cpc-prep',
            lessonList: comingSoonLessons('integumentary lesion excision, musculoskeletal fracture care, and respiratory endoscopy coding'),
        },
        {
            id: 'cpc-cpt-surg-2',
            title: 'CPT Surgical Section II: Cardiovascular, Digestive, Urinary',
            author: 'Synthesis Learning',
            description: 'Cath labs, GI endoscopies, urologic procedures, and the parenthetical instructions that change the right code.',
            lessons: 1, duration: 5, progress: 0, category: 'cpc-prep',
            lessonList: comingSoonLessons('cardiovascular cath/PCI coding, GI endoscopy, and urology procedural coding'),
        },
        {
            id: 'cpc-cpt-radpath',
            title: 'CPT Radiology, Pathology, and Medicine Sections',
            author: 'Synthesis Learning',
            description: 'Imaging guidance and supervision-vs-interpretation, lab panels, the medicine section\'s odd corners (vaccines, infusions, dialysis).',
            lessons: 1, duration: 5, progress: 0, category: 'cpc-prep',
            lessonList: comingSoonLessons('radiology supervision-and-interpretation, pathology panels, and medicine-section infusion/vaccine coding'),
        },
        {
            id: 'cpc-em',
            title: 'Evaluation and Management (E/M) Services',
            author: 'Synthesis Learning',
            description: 'The 2021/2023 E/M guideline overhaul — MDM levels, time-based coding, new vs. established patients, hospital and SNF E/M.',
            lessons: 1, duration: 5, progress: 0, category: 'cpc-prep',
            lessonList: comingSoonLessons('the 2021/2023 E/M guidelines, MDM-based and time-based level selection, and the office/hospital/SNF E/M families'),
        },
        {
            id: 'cpc-modifiers',
            title: 'Modifiers: -25, -59, -76, -77, -91 and the Rest',
            author: 'Synthesis Learning',
            description: 'The 2-character codes that change reimbursement, unbundle correctly, and protect you from RAC audits.',
            lessons: 1, duration: 5, progress: 0, category: 'cpc-prep',
            lessonList: comingSoonLessons('how modifiers -25, -59 (and the X{EPSU} subset), -76, -77, -91, -50, -51, and -LT/-RT change claim adjudication'),
        },
        {
            id: 'cpc-hcpcs',
            title: 'HCPCS Level II: J-Codes, Supplies, and Outpatient Drugs',
            author: 'Synthesis Learning',
            description: 'When CPT runs out, HCPCS picks up — drug J-codes, DME, ambulance, and the modifier overlap.',
            lessons: 1, duration: 5, progress: 0, category: 'cpc-prep',
            lessonList: comingSoonLessons('HCPCS Level II structure, J-codes for injectable drugs, DME and ambulance coding'),
        },
        {
            id: 'cpc-compliance',
            title: 'Compliance, Audits, and the OIG Work Plan',
            author: 'Synthesis Learning',
            description: 'The False Claims Act, the OIG annual work plan, RAC/MAC/ZPIC audits, and the documentation that survives them.',
            lessons: 1, duration: 5, progress: 0, category: 'cpc-prep',
            lessonList: comingSoonLessons('the False Claims Act, the OIG annual work plan, and how to prepare documentation for RAC/MAC/ZPIC audits'),
        },
        {
            id: 'cpc-mock',
            title: 'CPC Mock Exam Bank & Test-Taking Strategy',
            author: 'Synthesis Learning',
            description: '5+ full-length 100-question mock exams in CPC format, plus the timing, elimination, and code-book strategies that buy you 30 extra minutes.',
            lessons: 1, duration: 5, progress: 0, category: 'cpc-prep',
            lessonList: comingSoonLessons('5+ full-length 100-question CPC-format mock exams plus timing, elimination, and code-book strategies'),
        },
    ];

    window.CPC_PREP_CATEGORY = {
        id: 'cpc-prep',
        name: 'CPC Cert Prep',
        icon: '📋',
        color: '#0ea5e9',
        description: 'A 10-book track for the AAPC Certified Professional Coder exam — the most-sought medical-coding credential in the US. Starts with the anatomy/terminology base every CPC question assumes, then walks the code books (ICD-10-CM, CPT, HCPCS) section by section, finishes with modifiers, compliance, and full-length mock exams.',
        examCenterTrack: false,
        courseHub: true,
        parts: [
            { romanNum: 'Part I',   title: 'Foundation',                bookIds: ['cpc-foundation'] },
            { romanNum: 'Part II',  title: 'Code Books',                bookIds: ['cpc-icd10cm','cpc-cpt-surg-1','cpc-cpt-surg-2','cpc-cpt-radpath','cpc-em'] },
            { romanNum: 'Part III', title: 'Modifiers & HCPCS',         bookIds: ['cpc-modifiers','cpc-hcpcs'] },
            { romanNum: 'Part IV',  title: 'Compliance & Mock Exam',    bookIds: ['cpc-compliance','cpc-mock'] },
        ],
        books: BOOKS,
    };
})();
