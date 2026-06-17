// External category module — CCA (Certified Coding Associate) Prep Track.
// AHIMA's entry-level coding credential, organized by exam domain.

(function () {
    const COMING_SOON_SVG = `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
        <rect width="1100" height="1100" fill="#1a1a2e"/>
        <rect x="80" y="180" width="940" height="740" rx="24" fill="rgba(139,92,246,0.08)" stroke="#8b5cf6" stroke-width="3"/>
        <text x="550" y="320" text-anchor="middle" font-size="78" fill="#ffd700" font-weight="bold">🚧 Coming Soon</text>
        <text x="550" y="410" text-anchor="middle" font-size="32" fill="#888">CCA Prep Track</text>
        <text x="550" y="540" text-anchor="middle" font-size="26" fill="#ffffff">This domain is being authored.</text>
        <text x="550" y="600" text-anchor="middle" font-size="26" fill="#ffffff">Start with Domain 1 — Health Information</text>
        <text x="550" y="650" text-anchor="middle" font-size="26" fill="#ffffff">Concepts — while the rest is built.</text>
        <text x="550" y="800" text-anchor="middle" font-size="22" fill="#8b5cf6">Each domain mirrors the AHIMA blueprint</text>
        <text x="550" y="840" text-anchor="middle" font-size="22" fill="#8b5cf6">for the actual CCA exam.</text>
    </svg>`;

    function comingSoonLessons(scope) {
        return [{
            id: 'coming-soon', title: 'Domain Outline & What You\'ll Learn', duration: '5',
            cards: [{
                type: 'intro',
                title: 'Coming Soon — Domain in Development',
                content: `This domain covers **${scope}**.\n\nThe full lesson content is being authored. In the meantime, start with **Domain 1 — Health Information Concepts** to anchor the rest of the track.\n\nThe Exam Center already tracks your spaced-repetition queue and study streak across whichever domains are live.`,
                visual: { type: 'diagram', svg: COMING_SOON_SVG, caption: 'Coming soon' }
            }]
        }];
    }

    const DOMAIN1_PLACEHOLDER_LESSONS = [
  {
    id: "cca-him-concepts-lesson-1",
    title: "The Health Record: Legal Document, Communication Tool, Reimbursement Driver",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "Three Hats, One Record",
        content: `The **health record** is the single most-scrutinized document a hospital produces. It wears three hats at once — and on the **CCA exam**, you must know which hat you're wearing in each scenario.

As a **legal document**, it must be accurate, timely, complete, and authenticated. As a **communication tool**, it lets dozens of clinicians coordinate care across shifts and specialties. As the **reimbursement driver**, it is the source from which every CPT, HCPCS, and ICD-10-CM/PCS code is abstracted.

Get the record wrong and you face three penalties: lawsuits, patient harm, and **claim denials**. The coder sits at the intersection of all three — which is why HIM professionals are the guardians of record integrity.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="70" font-family="Arial" font-size="38" fill="#ffd700" text-anchor="middle" font-weight="bold">The Three Roles of the Health Record</text>
            <text x="550" y="115" font-family="Arial" font-size="20" fill="#888" text-anchor="middle">One document, three accountability streams</text>
            <rect x="100" y="180" width="280" height="320" rx="12" fill="#6366f1" opacity="0.25" stroke="#6366f1" stroke-width="3"/>
            <text x="240" y="225" font-family="Arial" font-size="24" fill="#ffd700" text-anchor="middle" font-weight="bold">LEGAL</text>
            <text x="240" y="255" font-family="Arial" font-size="16" fill="#ffffff" text-anchor="middle">Business record rule</text>
            <text x="240" y="295" font-family="Arial" font-size="14" fill="#ffffff" text-anchor="middle">• Authenticated entries</text>
            <text x="240" y="325" font-family="Arial" font-size="14" fill="#ffffff" text-anchor="middle">• Date + time stamped</text>
            <text x="240" y="355" font-family="Arial" font-size="14" fill="#ffffff" text-anchor="middle">• No back-dating</text>
            <text x="240" y="385" font-family="Arial" font-size="14" fill="#ffffff" text-anchor="middle">• Amendment policy</text>
            <text x="240" y="415" font-family="Arial" font-size="14" fill="#ffffff" text-anchor="middle">• Retention schedule</text>
            <text x="240" y="465" font-family="Arial" font-size="13" fill="#ef4444" text-anchor="middle">Risk: malpractice</text>
            <rect x="410" y="180" width="280" height="320" rx="12" fill="#10b981" opacity="0.25" stroke="#10b981" stroke-width="3"/>
            <text x="550" y="225" font-family="Arial" font-size="24" fill="#ffd700" text-anchor="middle" font-weight="bold">COMMUNICATION</text>
            <text x="550" y="255" font-family="Arial" font-size="16" fill="#ffffff" text-anchor="middle">Continuity of care</text>
            <text x="550" y="295" font-family="Arial" font-size="14" fill="#ffffff" text-anchor="middle">• Provider handoffs</text>
            <text x="550" y="325" font-family="Arial" font-size="14" fill="#ffffff" text-anchor="middle">• Multidisciplinary team</text>
            <text x="550" y="355" font-family="Arial" font-size="14" fill="#ffffff" text-anchor="middle">• Med reconciliation</text>
            <text x="550" y="385" font-family="Arial" font-size="14" fill="#ffffff" text-anchor="middle">• Discharge planning</text>
            <text x="550" y="415" font-family="Arial" font-size="14" fill="#ffffff" text-anchor="middle">• Patient portal</text>
            <text x="550" y="465" font-family="Arial" font-size="13" fill="#ef4444" text-anchor="middle">Risk: patient harm</text>
            <rect x="720" y="180" width="280" height="320" rx="12" fill="#f59e0b" opacity="0.25" stroke="#f59e0b" stroke-width="3"/>
            <text x="860" y="225" font-family="Arial" font-size="24" fill="#ffd700" text-anchor="middle" font-weight="bold">REIMBURSEMENT</text>
            <text x="860" y="255" font-family="Arial" font-size="16" fill="#ffffff" text-anchor="middle">Source of truth for codes</text>
            <text x="860" y="295" font-family="Arial" font-size="14" fill="#ffffff" text-anchor="middle">• ICD-10-CM / PCS</text>
            <text x="860" y="325" font-family="Arial" font-size="14" fill="#ffffff" text-anchor="middle">• CPT / HCPCS</text>
            <text x="860" y="355" font-family="Arial" font-size="14" fill="#ffffff" text-anchor="middle">• MS-DRG assignment</text>
            <text x="860" y="385" font-family="Arial" font-size="14" fill="#ffffff" text-anchor="middle">• APC grouping</text>
            <text x="860" y="415" font-family="Arial" font-size="14" fill="#ffffff" text-anchor="middle">• Audit defense</text>
            <text x="860" y="465" font-family="Arial" font-size="13" fill="#ef4444" text-anchor="middle">Risk: claim denial</text>
            <rect x="200" y="560" width="700" height="120" rx="10" fill="#8b5cf6" opacity="0.2" stroke="#8b5cf6" stroke-width="2"/>
            <text x="550" y="605" font-family="Arial" font-size="22" fill="#ffd700" text-anchor="middle" font-weight="bold">The HIM Coder Sits Here</text>
            <text x="550" y="640" font-family="Arial" font-size="16" fill="#ffffff" text-anchor="middle">Every code abstracted touches all three roles simultaneously.</text>
            <text x="550" y="665" font-family="Arial" font-size="14" fill="#888" text-anchor="middle">Wrong code → legal exposure + miscommunication + denied claim.</text>
            <text x="550" y="760" font-family="Arial" font-size="20" fill="#ffd700" text-anchor="middle" font-weight="bold">CCA Exam Tip</text>
            <text x="550" y="800" font-family="Arial" font-size="16" fill="#ffffff" text-anchor="middle">When you see "primary purpose of the health record" questions,</text>
            <text x="550" y="825" font-family="Arial" font-size="16" fill="#ffffff" text-anchor="middle">remember: PATIENT CARE is the #1 purpose. Everything else is secondary.</text>
            <text x="550" y="900" font-family="Arial" font-size="18" fill="#0ea5e9" text-anchor="middle" font-style="italic">"If it isn't documented, it wasn't done."</text>
            <text x="550" y="930" font-family="Arial" font-size="14" fill="#888" text-anchor="middle">— HIM proverb, and the rule every coder lives by.</text>
          </svg>`,
          caption: "The same document is judged by three different audiences with three different standards.",
        },
      },
      {
        type: "concept",
        title: "Anatomy of a Complete Health Record",
        content: `A **complete inpatient record** has predictable components, and **CCA** items will test whether you can identify each. The **admission record** captures demographics and the chief complaint. The **history and physical (H&P)** must be completed within **24 hours of admission** per **Joint Commission** standards.

**Progress notes** track the clinical course. **Physician orders** authorize every test, medication, and procedure — and must be authenticated. **Operative reports** are required immediately after surgery; a brief op note goes in the chart before the patient leaves the OR.

The **discharge summary** is the coder's best friend — it synthesizes the principal diagnosis, secondary diagnoses, procedures, and disposition. It is required within **30 days of discharge**.

**Authentication** means signature, initials, or electronic verification by the author. **Timeliness, legibility, and completeness** are the three pillars Joint Commission surveyors check. Missing any of these and the record fails review.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="65" font-family="Arial" font-size="36" fill="#ffd700" text-anchor="middle" font-weight="bold">Inpatient Record Components</text>
            <text x="550" y="105" font-family="Arial" font-size="18" fill="#888" text-anchor="middle">Timing requirements per Joint Commission &amp; CMS</text>
            <line x1="80" y1="150" x2="1020" y2="150" stroke="#ffd700" stroke-width="2"/>
            <text x="100" y="180" font-family="Arial" font-size="20" fill="#ffd700" font-weight="bold">COMPONENT</text>
            <text x="520" y="180" font-family="Arial" font-size="20" fill="#ffd700" font-weight="bold">CONTENT</text>
            <text x="850" y="180" font-family="Arial" font-size="20" fill="#ffd700" font-weight="bold">DEADLINE</text>
            <line x1="80" y1="200" x2="1020" y2="200" stroke="#ffd700" stroke-width="2"/>
            <text x="100" y="240" font-family="Arial" font-size="16" fill="#ffffff" font-weight="bold">Admission Record</text>
            <text x="520" y="240" font-family="Arial" font-size="15" fill="#ffffff">Demographics, chief complaint</text>
            <text x="850" y="240" font-family="Arial" font-size="15" fill="#10b981">At admission</text>
            <line x1="80" y1="260" x2="1020" y2="260" stroke="#888" stroke-width="0.5"/>
            <text x="100" y="295" font-family="Arial" font-size="16" fill="#ffffff" font-weight="bold">History &amp; Physical</text>
            <text x="520" y="295" font-family="Arial" font-size="15" fill="#ffffff">PMH, ROS, exam, assessment</text>
            <text x="850" y="295" font-family="Arial" font-size="15" fill="#f59e0b">Within 24 hrs</text>
            <line x1="80" y1="315" x2="1020" y2="315" stroke="#888" stroke-width="0.5"/>
            <text x="100" y="350" font-family="Arial" font-size="16" fill="#ffffff" font-weight="bold">Physician Orders</text>
            <text x="520" y="350" font-family="Arial" font-size="15" fill="#ffffff">Meds, tests, procedures, diet</text>
            <text x="850" y="350" font-family="Arial" font-size="15" fill="#10b981">Real-time</text>
            <line x1="80" y1="370" x2="1020" y2="370" stroke="#888" stroke-width="0.5"/>
            <text x="100" y="405" font-family="Arial" font-size="16" fill="#ffffff" font-weight="bold">Progress Notes</text>
            <text x="520" y="405" font-family="Arial" font-size="15" fill="#ffffff">Daily clinical course (SOAP)</text>
            <text x="850" y="405" font-family="Arial" font-size="15" fill="#10b981">Daily minimum</text>
            <line x1="80" y1="425" x2="1020" y2="425" stroke="#888" stroke-width="0.5"/>
            <text x="100" y="460" font-family="Arial" font-size="16" fill="#ffffff" font-weight="bold">Consent Forms</text>
            <text x="520" y="460" font-family="Arial" font-size="15" fill="#ffffff">General &amp; procedure-specific</text>
            <text x="850" y="460" font-family="Arial" font-size="15" fill="#f59e0b">Before procedure</text>
            <line x1="80" y1="480" x2="1020" y2="480" stroke="#888" stroke-width="0.5"/>
            <text x="100" y="515" font-family="Arial" font-size="16" fill="#ffffff" font-weight="bold">Operative Report</text>
            <text x="520" y="515" font-family="Arial" font-size="15" fill="#ffffff">Findings, technique, EBL</text>
            <text x="850" y="515" font-family="Arial" font-size="15" fill="#ef4444">Immediately post-op</text>
            <line x1="80" y1="535" x2="1020" y2="535" stroke="#888" stroke-width="0.5"/>
            <text x="100" y="570" font-family="Arial" font-size="16" fill="#ffffff" font-weight="bold">Anesthesia Record</text>
            <text x="520" y="570" font-family="Arial" font-size="15" fill="#ffffff">Pre/intra/post-op anesthesia</text>
            <text x="850" y="570" font-family="Arial" font-size="15" fill="#f59e0b">Per case</text>
            <line x1="80" y1="590" x2="1020" y2="590" stroke="#888" stroke-width="0.5"/>
            <text x="100" y="625" font-family="Arial" font-size="16" fill="#ffffff" font-weight="bold">Pathology Report</text>
            <text x="520" y="625" font-family="Arial" font-size="15" fill="#ffffff">Tissue diagnosis</text>
            <text x="850" y="625" font-family="Arial" font-size="15" fill="#f59e0b">When available</text>
            <line x1="80" y1="645" x2="1020" y2="645" stroke="#888" stroke-width="0.5"/>
            <text x="100" y="680" font-family="Arial" font-size="16" fill="#ffffff" font-weight="bold">Nursing Notes</text>
            <text x="520" y="680" font-family="Arial" font-size="15" fill="#ffffff">Vitals, I&amp;O, assessments</text>
            <text x="850" y="680" font-family="Arial" font-size="15" fill="#10b981">Every shift</text>
            <line x1="80" y1="700" x2="1020" y2="700" stroke="#888" stroke-width="0.5"/>
            <text x="100" y="735" font-family="Arial" font-size="16" fill="#ffffff" font-weight="bold">Discharge Summary</text>
            <text x="520" y="735" font-family="Arial" font-size="15" fill="#ffffff">Dx, procedures, disposition</text>
            <text x="850" y="735" font-family="Arial" font-size="15" fill="#ef4444">Within 30 days</text>
            <line x1="80" y1="755" x2="1020" y2="755" stroke="#ffd700" stroke-width="2"/>
            <rect x="100" y="800" width="900" height="220" rx="10" fill="#6366f1" opacity="0.2" stroke="#6366f1" stroke-width="2"/>
            <text x="550" y="840" font-family="Arial" font-size="22" fill="#ffd700" text-anchor="middle" font-weight="bold">The Three Pillars of Record Quality</text>
            <text x="280" y="890" font-family="Arial" font-size="18" fill="#10b981" text-anchor="middle" font-weight="bold">TIMELY</text>
            <text x="280" y="920" font-family="Arial" font-size="14" fill="#ffffff" text-anchor="middle">Entries within</text>
            <text x="280" y="940" font-family="Arial" font-size="14" fill="#ffffff" text-anchor="middle">required windows</text>
            <text x="550" y="890" font-family="Arial" font-size="18" fill="#f59e0b" text-anchor="middle" font-weight="bold">LEGIBLE</text>
            <text x="550" y="920" font-family="Arial" font-size="14" fill="#ffffff" text-anchor="middle">Readable</text>
            <text x="550" y="940" font-family="Arial" font-size="14" fill="#ffffff" text-anchor="middle">(EHR helps!)</text>
            <text x="820" y="890" font-family="Arial" font-size="18" fill="#ec4899" text-anchor="middle" font-weight="bold">COMPLETE</text>
            <text x="820" y="920" font-family="Arial" font-size="14" fill="#ffffff" text-anchor="middle">All elements present</text>
            <text x="820" y="940" font-family="Arial" font-size="14" fill="#ffffff" text-anchor="middle">&amp; authenticated</text>
            <text x="550" y="995" font-family="Arial" font-size="14" fill="#888" text-anchor="middle">Joint Commission surveys check all three on every chart audit.</text>
          </svg>`,
          caption: "Each component has a deadline. The CCA exam loves to ask 'when must the H&P be completed?' Answer: 24 hours.",
        },
      },
      {
        type: "example",
        title: "A Real Chart Audit at Mercy General",
        content: `Mercy General Hospital had **17 inpatient charts** pulled for a Joint Commission survey. The HIM director, Maria, walked the surveyor through each one.

**Chart #4** was for a 68-year-old admitted with chest pain on Monday at 11 PM. The H&P was time-stamped Wednesday at 8 AM — **31 hours after admission**. Surveyor flagged it: **H&P must be within 24 hours**. Mercy received a deficiency.

**Chart #11** was a hip replacement. The op report was dictated 4 days post-surgery. The surveyor asked: "Where's the brief op note?" There wasn't one. Another deficiency — **a brief operative note is required in the chart before the patient leaves the OR** when the full dictation is delayed.

**Chart #15** had a verbal order from the ICU on a Friday night. The order was never countersigned by the physician within the **48-hour** window per hospital policy. Deficiency.

Maria's takeaway: timing rules aren't bureaucratic — they're how the record proves care happened **when** it should have. Three deficiencies became three CDI (Clinical Documentation Improvement) education sessions the following month.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="65" font-family="Arial" font-size="34" fill="#ffd700" text-anchor="middle" font-weight="bold">Mercy General: 3 Chart Deficiencies</text>
            <text x="550" y="105" font-family="Arial" font-size="18" fill="#888" text-anchor="middle">Real Joint Commission survey findings</text>
            <rect x="80" y="150" width="940" height="270" rx="10" fill="#ef4444" opacity="0.15" stroke="#ef4444" stroke-width="2"/>
            <text x="110" y="190" font-family="Arial" font-size="22" fill="#ef4444" font-weight="bold">CHART #4 — H&amp;P Late</text>
            <text x="110" y="225" font-family="Arial" font-size="16" fill="#ffffff">68 y/o male, chest pain admission</text>
            <text x="110" y="255" font-family="Arial" font-size="15" fill="#ffffff">Admitted: Monday 11:00 PM</text>
            <text x="110" y="280" font-family="Arial" font-size="15" fill="#ffffff">H&amp;P signed: Wednesday 8:00 AM</text>
            <text x="110" y="310" font-family="Arial" font-size="16" fill="#f59e0b" font-weight="bold">Elapsed: 31 hours</text>
            <text x="110" y="345" font-family="Arial" font-size="16" fill="#10b981" font-weight="bold">Standard: ≤ 24 hours</text>
            <text x="110" y="380" font-family="Arial" font-size="15" fill="#ec4899">Finding: Joint Commission deficiency — 7 hours over.</text>
            <rect x="80" y="445" width="940" height="225" rx="10" fill="#f59e0b" opacity="0.15" stroke="#f59e0b" stroke-width="2"/>
            <text x="110" y="485" font-family="Arial" font-size="22" fill="#f59e0b" font-weight="bold">CHART #11 — Missing Brief Op Note</text>
            <text x="110" y="520" font-family="Arial" font-size="16" fill="#ffffff">Right total hip arthroplasty</text>
            <text x="110" y="550" font-family="Arial" font-size="15" fill="#ffffff">Full op report dictated: Day 4 post-op</text>
            <text x="110" y="575" font-family="Arial" font-size="15" fill="#ffffff">Brief op note: NOT IN CHART</text>
            <text x="110" y="610" font-family="Arial" font-size="16" fill="#10b981" font-weight="bold">Standard: Brief note before patient leaves OR</text>
            <text x="110" y="645" font-family="Arial" font-size="15" fill="#ec4899">Finding: Continuity-of-care risk during post-op transfer.</text>
            <rect x="80" y="695" width="940" height="225" rx="10" fill="#8b5cf6" opacity="0.15" stroke="#8b5cf6" stroke-width="2"/>
            <text x="110" y="735" font-family="Arial" font-size="22" fill="#8b5cf6" font-weight="bold">CHART #15 — Unauthenticated Verbal Order</text>
            <text x="110" y="770" font-family="Arial" font-size="16" fill="#ffffff">ICU verbal order Friday 11:00 PM</text>
            <text x="110" y="800" font-family="Arial" font-size="15" fill="#ffffff">Countersigned: NEVER</text>
            <text x="110" y="825" font-family="Arial" font-size="15" fill="#ffffff">Hospital policy: 48 hours</text>
            <text x="110" y="860" font-family="Arial" font-size="16" fill="#10b981" font-weight="bold">Standard: All orders authenticated</text>
            <text x="110" y="895" font-family="Arial" font-size="15" fill="#ec4899">Finding: Authentication failure — order legally void.</text>
            <text x="550" y="970" font-family="Arial" font-size="18" fill="#ffd700" text-anchor="middle" font-weight="bold">Result: 3 CDI training sessions scheduled.</text>
            <text x="550" y="1000" font-family="Arial" font-size="14" fill="#888" text-anchor="middle">Each deficiency would have triggered a denial if the auditor were a payer.</text>
          </svg>`,
          caption: "Three real deficiencies. The HIM department converted each into staff training.",
        },
      },
      {
        type: "quiz",
        title: "Knowledge Check: H&P Timing",
        content: `Per Joint Commission standards, when must the **history and physical (H&P)** be completed and placed in the inpatient record?`,
        question: "Per Joint Commission standards, when must the history and physical (H&P) be completed and placed in the inpatient record?",
        options: [
          { text: "Within 24 hours of admission", correct: true },
          { text: "Within 48 hours of admission", correct: false },
          { text: "Before any orders are written", correct: false },
          { text: "Within 30 days of discharge", correct: false },
        ],
        explanation: "The H&P must be completed within **24 hours of admission** OR within 30 days **prior** to admission and updated on admission. 48 hours is incorrect — that's a common distractor. 30 days post-discharge is the deadline for the discharge summary, not the H&P. Orders can be written before the H&P is dictated, but the H&P itself must be on the chart within 24 hours.",
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="65" font-family="Arial" font-size="36" fill="#ffd700" text-anchor="middle" font-weight="bold">H&amp;P Timing Rules — Memorize This</text>
            <text x="550" y="105" font-family="Arial" font-size="18" fill="#888" text-anchor="middle">CCA exam loves this exact question</text>
            <line x1="100" y1="200" x2="1000" y2="200" stroke="#888" stroke-width="3"/>
            <circle cx="200" cy="200" r="14" fill="#10b981"/>
            <text x="200" y="170" font-family="Arial" font-size="16" fill="#10b981" text-anchor="middle" font-weight="bold">Day −30 to 0</text>
            <text x="200" y="240" font-family="Arial" font-size="13" fill="#ffffff" text-anchor="middle">Pre-admission</text>
            <text x="200" y="260" font-family="Arial" font-size="13" fill="#ffffff" text-anchor="middle">H&amp;P OK if</text>
            <text x="200" y="280" font-family="Arial" font-size="13" fill="#ffffff" text-anchor="middle">updated at admit</text>
            <circle cx="500" cy="200" r="18" fill="#ffd700"/>
            <text x="500" y="170" font-family="Arial" font-size="16" fill="#ffd700" text-anchor="middle" font-weight="bold">ADMISSION</text>
            <text x="500" y="240" font-family="Arial" font-size="13" fill="#ffffff" text-anchor="middle">Clock starts</text>
            <circle cx="800" cy="200" r="14" fill="#ef4444"/>
            <text x="800" y="170" font-family="Arial" font-size="16" fill="#ef4444" text-anchor="middle" font-weight="bold">+24 hours</text>
            <text x="800" y="240" font-family="Arial" font-size="13" fill="#ffffff" text-anchor="middle">DEADLINE</text>
            <text x="800" y="260" font-family="Arial" font-size="13" fill="#ffffff" text-anchor="middle">for H&amp;P</text>
            <rect x="100" y="340" width="900" height="160" rx="10" fill="#10b981" opacity="0.2" stroke="#10b981" stroke-width="2"/>
            <text x="550" y="380" font-family="Arial" font-size="22" fill="#10b981" text-anchor="middle" font-weight="bold">CORRECT: Within 24 hours of admission</text>
            <text x="550" y="420" font-family="Arial" font-size="15" fill="#ffffff" text-anchor="middle">Joint Commission MS.03.01.01 / CMS CoP §482.22(c)(5)</text>
            <text x="550" y="460" font-family="Arial" font-size="15" fill="#ffffff" text-anchor="middle">OR completed within 30 days prior to admission with an</text>
            <text x="550" y="485" font-family="Arial" font-size="15" fill="#ffffff" text-anchor="middle">"update note" on admission confirming no changes.</text>
            <rect x="100" y="540" width="900" height="380" rx="10" fill="#ef4444" opacity="0.12" stroke="#ef4444" stroke-width="2"/>
            <text x="550" y="580" font-family="Arial" font-size="22" fill="#ef4444" text-anchor="middle" font-weight="bold">DISTRACTORS — know why each is wrong</text>
            <text x="130" y="625" font-family="Arial" font-size="17" fill="#f59e0b" font-weight="bold">"48 hours"</text>
            <text x="160" y="650" font-family="Arial" font-size="15" fill="#ffffff">Wrong. 48 hours is the typical countersignature window</text>
            <text x="160" y="673" font-family="Arial" font-size="15" fill="#ffffff">for verbal orders — not for the H&amp;P document itself.</text>
            <text x="130" y="715" font-family="Arial" font-size="17" fill="#f59e0b" font-weight="bold">"Before any orders are written"</text>
            <text x="160" y="740" font-family="Arial" font-size="15" fill="#ffffff">Wrong. Admitting orders almost always precede the H&amp;P;</text>
            <text x="160" y="763" font-family="Arial" font-size="15" fill="#ffffff">the H&amp;P can be dictated later in the 24-hour window.</text>
            <text x="130" y="805" font-family="Arial" font-size="17" fill="#f59e0b" font-weight="bold">"Within 30 days of discharge"</text>
            <text x="160" y="830" font-family="Arial" font-size="15" fill="#ffffff">Wrong — that's the DISCHARGE SUMMARY deadline.</text>
            <text x="160" y="853" font-family="Arial" font-size="15" fill="#ffffff">Don't confuse H&amp;P (admission doc) with discharge summary.</text>
            <text x="550" y="980" font-family="Arial" font-size="20" fill="#ffd700" text-anchor="middle" font-weight="bold">Memory hook: "24 in, 30 out."</text>
            <text x="550" y="1010" font-family="Arial" font-size="14" fill="#888" text-anchor="middle">H&amp;P within 24 hrs of admission · Discharge summary within 30 days of discharge.</text>
          </svg>`,
          caption: "Two numbers to memorize for the CCA: 24 hours for H&P, 30 days for discharge summary.",
        },
      },
      {
        type: "application",
        title: "Apply It: Auditing Your Own Charts",
        content: `**Workplace exercise**: Pull 5 inpatient charts from last month. For each, check the H&P timestamp, verbal order countersignatures, and discharge summary date. Build a simple deficiency log.

**Why this matters**: HIM professionals are graded on **record completion rate**. Most hospitals target **≥95%** of charts complete within their stated cycle (typically 30 days post-discharge). Below that, **CMS** can flag the facility, and **Joint Commission** can issue a Requirement for Improvement.

**Your daily HIM role**: Run a **deficiency report** from the EHR each morning. Flag charts missing H&Ps, op reports, or signatures. Send **deficiency notices** to providers — many EHRs have a "suspend privileges" workflow if a provider has >X delinquent charts.

**CCA exam application**: When a question describes a chart-completion scenario, identify the **deficiency type** (timing, authentication, completeness) and the **responsible role** (provider, coder, HIM tech). The exam never asks you to discipline a doctor — it asks whether you can spot the problem.

Build the habit of asking, **"What's missing? Who owns it? When was it due?"** That's the HIM mindset.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="65" font-family="Arial" font-size="36" fill="#ffd700" text-anchor="middle" font-weight="bold">Your HIM Deficiency Workflow</text>
            <text x="550" y="105" font-family="Arial" font-size="18" fill="#888" text-anchor="middle">From EHR alert to provider notice</text>
            <rect x="100" y="170" width="900" height="100" rx="10" fill="#6366f1" opacity="0.25" stroke="#6366f1" stroke-width="2"/>
            <text x="140" y="210" font-family="Arial" font-size="22" fill="#ffd700" font-weight="bold">STEP 1</text>
            <text x="140" y="240" font-family="Arial" font-size="16" fill="#ffffff">Run morning deficiency report from EHR (Epic, Cerner, Meditech all support this)</text>
            <polygon points="540,290 560,290 550,310" fill="#ffd700"/>
            <rect x="100" y="320" width="900" height="100" rx="10" fill="#10b981" opacity="0.25" stroke="#10b981" stroke-width="2"/>
            <text x="140" y="360" font-family="Arial" font-size="22" fill="#ffd700" font-weight="bold">STEP 2</text>
            <text x="140" y="390" font-family="Arial" font-size="16" fill="#ffffff">Categorize each deficiency: timing · authentication · missing element</text>
            <polygon points="540,440 560,440 550,460" fill="#ffd700"/>
            <rect x="100" y="470" width="900" height="100" rx="10" fill="#f59e0b" opacity="0.25" stroke="#f59e0b" stroke-width="2"/>
            <text x="140" y="510" font-family="Arial" font-size="22" fill="#ffd700" font-weight="bold">STEP 3</text>
            <text x="140" y="540" font-family="Arial" font-size="16" fill="#ffffff">Send deficiency notice to responsible provider (in-EHR message + email)</text>
            <polygon points="540,590 560,590 550,610" fill="#ffd700"/>
            <rect x="100" y="620" width="900" height="100" rx="10" fill="#ec4899" opacity="0.25" stroke="#ec4899" stroke-width="2"/>
            <text x="140" y="660" font-family="Arial" font-size="22" fill="#ffd700" font-weight="bold">STEP 4</text>
            <text x="140" y="690" font-family="Arial" font-size="16" fill="#ffffff">Re-audit after 7 days; escalate to chief of staff if not corrected</text>
            <polygon points="540,740 560,740 550,760" fill="#ffd700"/>
            <rect x="100" y="770" width="900" height="100" rx="10" fill="#8b5cf6" opacity="0.25" stroke="#8b5cf6" stroke-width="2"/>
            <text x="140" y="810" font-family="Arial" font-size="22" fill="#ffd700" font-weight="bold">STEP 5</text>
            <text x="140" y="840" font-family="Arial" font-size="16" fill="#ffffff">Track facility completion rate; report monthly to medical staff committee</text>
            <rect x="200" y="910" width="700" height="140" rx="10" fill="#0ea5e9" opacity="0.2" stroke="#0ea5e9" stroke-width="2"/>
            <text x="550" y="950" font-family="Arial" font-size="20" fill="#ffd700" text-anchor="middle" font-weight="bold">Target Completion Rate: ≥ 95%</text>
            <text x="550" y="985" font-family="Arial" font-size="15" fill="#ffffff" text-anchor="middle">Below this threshold, CMS can flag the facility,</text>
            <text x="550" y="1010" font-family="Arial" font-size="15" fill="#ffffff" text-anchor="middle">and Joint Commission can issue a Requirement for Improvement.</text>
          </svg>`,
          caption: "Five steps from EHR alert to monthly committee report — the daily rhythm of HIM operations.",
        },
      },
    ],
  },
  {
    id: "cca-him-concepts-lesson-2",
    title: "Data Sets That Run Healthcare: UHDDS, UACDS, MDS, OASIS",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "Four Acronyms That Decide How You Code",
        content: `Every care setting has its own **standardized data set** — a list of data elements that **must** be collected on every patient. These data sets are not optional. They drive **coding, reimbursement, quality reporting, and federal benchmarking**.

The big four for the **CCA exam**: **UHDDS** (inpatient hospitals), **UACDS** (ambulatory care), **MDS** (long-term care / nursing homes), and **OASIS** (home health).

Each was created by a different federal body for a different setting, but they share one purpose: make patient data **comparable across facilities**. Without them, you couldn't compare a hip replacement at Mercy General to one at Mayo Clinic.

For coders, the most consequential is **UHDDS** — its definitions of **principal diagnosis** and **principal procedure** are the exact definitions you apply every day in inpatient coding. Get UHDDS wrong on the exam and you'll get reimbursement questions wrong too.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="65" font-family="Arial" font-size="36" fill="#ffd700" text-anchor="middle" font-weight="bold">The Big Four Data Sets</text>
            <text x="550" y="105" font-family="Arial" font-size="18" fill="#888" text-anchor="middle">One acronym per care setting</text>
            <rect x="80" y="170" width="460" height="380" rx="12" fill="#6366f1" opacity="0.25" stroke="#6366f1" stroke-width="3"/>
            <text x="310" y="215" font-family="Arial" font-size="32" fill="#ffd700" text-anchor="middle" font-weight="bold">UHDDS</text>
            <text x="310" y="250" font-family="Arial" font-size="15" fill="#888" text-anchor="middle">Uniform Hospital Discharge Data Set</text>
            <text x="310" y="295" font-family="Arial" font-size="18" fill="#ffffff" text-anchor="middle" font-weight="bold">Setting: INPATIENT HOSPITAL</text>
            <text x="310" y="335" font-family="Arial" font-size="15" fill="#ffffff" text-anchor="middle">Created: 1974 · HHS / NCVHS</text>
            <text x="310" y="370" font-family="Arial" font-size="15" fill="#ffffff" text-anchor="middle">Defines: principal diagnosis,</text>
            <text x="310" y="395" font-family="Arial" font-size="15" fill="#ffffff" text-anchor="middle">other diagnoses, principal procedure</text>
            <text x="310" y="440" font-family="Arial" font-size="15" fill="#10b981" text-anchor="middle">Drives: MS-DRG assignment</text>
            <text x="310" y="465" font-family="Arial" font-size="15" fill="#10b981" text-anchor="middle">CCA EXAM HOT TOPIC</text>
            <text x="310" y="510" font-family="Arial" font-size="14" fill="#ec4899" text-anchor="middle">"Condition established after study</text>
            <text x="310" y="530" font-family="Arial" font-size="14" fill="#ec4899" text-anchor="middle">to be chiefly responsible for admission"</text>
            <rect x="560" y="170" width="460" height="380" rx="12" fill="#10b981" opacity="0.25" stroke="#10b981" stroke-width="3"/>
            <text x="790" y="215" font-family="Arial" font-size="32" fill="#ffd700" text-anchor="middle" font-weight="bold">UACDS</text>
            <text x="790" y="250" font-family="Arial" font-size="15" fill="#888" text-anchor="middle">Uniform Ambulatory Care Data Set</text>
            <text x="790" y="295" font-family="Arial" font-size="18" fill="#ffffff" text-anchor="middle" font-weight="bold">Setting: AMBULATORY / OUTPT</text>
            <text x="790" y="335" font-family="Arial" font-size="15" fill="#ffffff" text-anchor="middle">Created: 1989 · NCVHS</text>
            <text x="790" y="370" font-family="Arial" font-size="15" fill="#ffffff" text-anchor="middle">Defines: reason for encounter,</text>
            <text x="790" y="395" font-family="Arial" font-size="15" fill="#ffffff" text-anchor="middle">services, disposition</text>
            <text x="790" y="440" font-family="Arial" font-size="15" fill="#10b981" text-anchor="middle">Drives: outpatient quality measures</text>
            <text x="790" y="475" font-family="Arial" font-size="14" fill="#ec4899" text-anchor="middle">Uses FIRST-LISTED diagnosis</text>
            <text x="790" y="500" font-family="Arial" font-size="14" fill="#ec4899" text-anchor="middle">(not "principal" like UHDDS)</text>
            <rect x="80" y="570" width="460" height="380" rx="12" fill="#f59e0b" opacity="0.25" stroke="#f59e0b" stroke-width="3"/>
            <text x="310" y="615" font-family="Arial" font-size="32" fill="#ffd700" text-anchor="middle" font-weight="bold">MDS</text>
            <text x="310" y="650" font-family="Arial" font-size="15" fill="#888" text-anchor="middle">Minimum Data Set 3.0</text>
            <text x="310" y="695" font-family="Arial" font-size="18" fill="#ffffff" text-anchor="middle" font-weight="bold">Setting: NURSING HOME / SNF</text>
            <text x="310" y="735" font-family="Arial" font-size="15" fill="#ffffff" text-anchor="middle">Mandated by OBRA 1987</text>
            <text x="310" y="770" font-family="Arial" font-size="15" fill="#ffffff" text-anchor="middle">Administered by CMS</text>
            <text x="310" y="810" font-family="Arial" font-size="15" fill="#ffffff" text-anchor="middle">~400 data elements per resident</text>
            <text x="310" y="855" font-family="Arial" font-size="15" fill="#10b981" text-anchor="middle">Drives: PDPM payment groups,</text>
            <text x="310" y="880" font-family="Arial" font-size="15" fill="#10b981" text-anchor="middle">Nursing Home Compare star ratings</text>
            <text x="310" y="920" font-family="Arial" font-size="14" fill="#ec4899" text-anchor="middle">Triggers CAAs (Care Area Assessments)</text>
            <rect x="560" y="570" width="460" height="380" rx="12" fill="#ec4899" opacity="0.25" stroke="#ec4899" stroke-width="3"/>
            <text x="790" y="615" font-family="Arial" font-size="32" fill="#ffd700" text-anchor="middle" font-weight="bold">OASIS</text>
            <text x="790" y="650" font-family="Arial" font-size="15" fill="#888" text-anchor="middle">Outcome &amp; Assessment Info Set</text>
            <text x="790" y="695" font-family="Arial" font-size="18" fill="#ffffff" text-anchor="middle" font-weight="bold">Setting: HOME HEALTH</text>
            <text x="790" y="735" font-family="Arial" font-size="15" fill="#ffffff" text-anchor="middle">Mandated by CMS for HHA</text>
            <text x="790" y="770" font-family="Arial" font-size="15" fill="#ffffff" text-anchor="middle">Current version: OASIS-E</text>
            <text x="790" y="810" font-family="Arial" font-size="15" fill="#ffffff" text-anchor="middle">Collected: SOC, recert, discharge</text>
            <text x="790" y="855" font-family="Arial" font-size="15" fill="#10b981" text-anchor="middle">Drives: PDGM home health payment,</text>
            <text x="790" y="880" font-family="Arial" font-size="15" fill="#10b981" text-anchor="middle">Home Health Compare</text>
            <text x="790" y="920" font-family="Arial" font-size="14" fill="#ec4899" text-anchor="middle">Skilled need + homebound required</text>
            <text x="550" y="1010" font-family="Arial" font-size="16" fill="#888" text-anchor="middle">Memory hook: U-Hospital · U-Ambulatory · M-Nursing home · O-Home</text>
          </svg>`,
          caption: "Four settings, four data sets. The CCA exam expects you to match each acronym to its setting.",
        },
      },
      {
        type: "concept",
        title: "UHDDS in Depth — The Coder's Bible",
        content: `**UHDDS** is the single most-tested data set on the CCA because its definitions **govern inpatient coding**. Memorize these word-for-word.

**Principal diagnosis**: "That condition **established after study** to be **chiefly responsible** for occasioning the **admission** of the patient to the hospital." The phrase "after study" matters — it can differ from the admitting diagnosis.

**Other (secondary) diagnoses**: Conditions that **coexist** at admission, **develop subsequently**, or **affect treatment**. They must impact care to be reported.

**Principal procedure**: One that is performed for **definitive treatment** (not diagnostic), or one performed to deal with a **complication**. If two procedures qualify, choose the one **most related to the principal diagnosis**.

**Other UHDDS data elements**: patient ID, date of birth, sex, race, ethnicity, residence, healthcare facility ID, admission/discharge dates, attending physician, expected payer, disposition.

These definitions flow directly into **MS-DRG** assignment. Get the principal diagnosis wrong and the DRG is wrong — meaning **incorrect reimbursement** and potential **fraud exposure**.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="65" font-family="Arial" font-size="36" fill="#ffd700" text-anchor="middle" font-weight="bold">UHDDS Definitions to Memorize</text>
            <text x="550" y="105" font-family="Arial" font-size="18" fill="#888" text-anchor="middle">The exam quotes these verbatim</text>
            <rect x="80" y="150" width="940" height="220" rx="10" fill="#6366f1" opacity="0.2" stroke="#6366f1" stroke-width="3"/>
            <text x="110" y="195" font-family="Arial" font-size="24" fill="#ffd700" font-weight="bold">PRINCIPAL DIAGNOSIS</text>
            <text x="110" y="240" font-family="Arial" font-size="17" fill="#ffffff">"That condition established after study to be chiefly</text>
            <text x="110" y="265" font-family="Arial" font-size="17" fill="#ffffff">responsible for occasioning the admission of the patient</text>
            <text x="110" y="290" font-family="Arial" font-size="17" fill="#ffffff">to the hospital for care."</text>
            <text x="110" y="335" font-family="Arial" font-size="15" fill="#10b981">Key phrase: "after study" — may differ from admit diagnosis.</text>
            <rect x="80" y="395" width="940" height="200" rx="10" fill="#10b981" opacity="0.2" stroke="#10b981" stroke-width="3"/>
            <text x="110" y="440" font-family="Arial" font-size="24" fill="#ffd700" font-weight="bold">OTHER (SECONDARY) DIAGNOSES</text>
            <text x="110" y="485" font-family="Arial" font-size="17" fill="#ffffff">Conditions that COEXIST at admission, develop subsequently,</text>
            <text x="110" y="510" font-family="Arial" font-size="17" fill="#ffffff">or affect treatment received and/or length of stay.</text>
            <text x="110" y="555" font-family="Arial" font-size="15" fill="#10b981">Must require clinical evaluation, therapy, monitoring,</text>
            <text x="110" y="578" font-family="Arial" font-size="15" fill="#10b981">extended LOS, or increased nursing care.</text>
            <rect x="80" y="620" width="940" height="220" rx="10" fill="#f59e0b" opacity="0.2" stroke="#f59e0b" stroke-width="3"/>
            <text x="110" y="665" font-family="Arial" font-size="24" fill="#ffd700" font-weight="bold">PRINCIPAL PROCEDURE</text>
            <text x="110" y="710" font-family="Arial" font-size="17" fill="#ffffff">Performed for DEFINITIVE TREATMENT (not diagnostic),</text>
            <text x="110" y="735" font-family="Arial" font-size="17" fill="#ffffff">or to deal with a complication.</text>
            <text x="110" y="780" font-family="Arial" font-size="15" fill="#10b981">Tie-breaker: choose the one most related</text>
            <text x="110" y="803" font-family="Arial" font-size="15" fill="#10b981">to the principal diagnosis.</text>
            <rect x="80" y="865" width="940" height="180" rx="10" fill="#ec4899" opacity="0.2" stroke="#ec4899" stroke-width="3"/>
            <text x="110" y="905" font-family="Arial" font-size="22" fill="#ffd700" font-weight="bold">UHDDS Data Elements (CCA may list)</text>
            <text x="110" y="940" font-family="Arial" font-size="15" fill="#ffffff">Patient ID · DOB · Sex · Race · Ethnicity · Residence ·</text>
            <text x="110" y="965" font-family="Arial" font-size="15" fill="#ffffff">Facility ID · Admit/discharge dates · Attending physician ·</text>
            <text x="110" y="990" font-family="Arial" font-size="15" fill="#ffffff">Expected payer · Diagnoses · Procedures · Disposition</text>
            <text x="110" y="1025" font-family="Arial" font-size="14" fill="#888">These elements flow directly into MS-DRG grouping software.</text>
          </svg>`,
          caption: "These three definitions are the foundation of inpatient coding. The exam quotes them verbatim.",
        },
      },
      {
        type: "example",
        title: "Coding a Case: Pneumonia With COPD Exacerbation",
        content: `**Case**: Mr. Davis, 72, was admitted through the ED with shortness of breath. The ED physician's working diagnosis was **"COPD exacerbation."** Mr. Davis was admitted to the medical floor.

On hospital day 2, a chest X-ray and sputum culture confirmed **bacterial pneumonia**. The pulmonologist documented: "Admission was driven by **pneumonia** with secondary COPD exacerbation."

**Applying UHDDS**: The admitting diagnosis was COPD exacerbation, but the condition **established after study** as **chiefly responsible** for admission is **pneumonia**. Pneumonia is the **principal diagnosis**.

COPD exacerbation is a **secondary diagnosis** — it coexists, it affects treatment (steroids, bronchodilators), and it impacts length of stay.

The coder assigns **J15.9** (bacterial pneumonia, unspecified) as principal and **J44.1** (COPD with exacerbation) as secondary. This combination groups to a different **MS-DRG** than COPD alone — typically higher-weighted, meaning higher reimbursement.

**If the coder mistakenly used COPD as principal**, the DRG would understate severity and the hospital would lose roughly **$2,000–$4,000** on this case. Multiply by hundreds of cases and you see why UHDDS definitions matter to the CFO.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="65" font-family="Arial" font-size="34" fill="#ffd700" text-anchor="middle" font-weight="bold">Case: Pneumonia vs COPD as Principal Dx</text>
            <text x="550" y="105" font-family="Arial" font-size="18" fill="#888" text-anchor="middle">Walking UHDDS through a real admission</text>
            <rect x="80" y="150" width="940" height="170" rx="10" fill="#6366f1" opacity="0.2" stroke="#6366f1" stroke-width="2"/>
            <text x="110" y="190" font-family="Arial" font-size="22" fill="#ffd700" font-weight="bold">ADMISSION (ED)</text>
            <text x="110" y="225" font-family="Arial" font-size="16" fill="#ffffff">Mr. Davis, 72 · Shortness of breath · Tachypnea · SpO2 88%</text>
            <text x="110" y="255" font-family="Arial" font-size="16" fill="#ffffff">ED working dx: COPD exacerbation</text>
            <text x="110" y="290" font-family="Arial" font-size="15" fill="#888">Admitting diagnosis ≠ principal diagnosis (yet)</text>
            <polygon points="540,335 560,335 550,355" fill="#ffd700"/>
            <rect x="80" y="370" width="940" height="170" rx="10" fill="#10b981" opacity="0.2" stroke="#10b981" stroke-width="2"/>
            <text x="110" y="410" font-family="Arial" font-size="22" fill="#ffd700" font-weight="bold">HOSPITAL DAY 2 — "AFTER STUDY"</text>
            <text x="110" y="445" font-family="Arial" font-size="16" fill="#ffffff">CXR: right lower lobe infiltrate</text>
            <text x="110" y="475" font-family="Arial" font-size="16" fill="#ffffff">Sputum culture: S. pneumoniae</text>
            <text x="110" y="505" font-family="Arial" font-size="16" fill="#ffffff">Pulm note: "Pneumonia drove admission; COPD secondary"</text>
            <polygon points="540,555 560,555 550,575" fill="#ffd700"/>
            <rect x="80" y="590" width="440" height="240" rx="10" fill="#10b981" opacity="0.25" stroke="#10b981" stroke-width="3"/>
            <text x="300" y="635" font-family="Arial" font-size="22" fill="#ffd700" text-anchor="middle" font-weight="bold">CORRECT</text>
            <text x="300" y="675" font-family="Arial" font-size="16" fill="#ffffff" text-anchor="middle">Principal Dx: J15.9 Pneumonia</text>
            <text x="300" y="705" font-family="Arial" font-size="16" fill="#ffffff" text-anchor="middle">Secondary: J44.1 COPD exac</text>
            <text x="300" y="745" font-family="Arial" font-size="15" fill="#10b981" text-anchor="middle">MS-DRG 193 (w/ MCC)</text>
            <text x="300" y="770" font-family="Arial" font-size="15" fill="#10b981" text-anchor="middle">Reimbursement: ~$8,400</text>
            <text x="300" y="805" font-family="Arial" font-size="14" fill="#888" text-anchor="middle">Matches UHDDS definition</text>
            <rect x="580" y="590" width="440" height="240" rx="10" fill="#ef4444" opacity="0.25" stroke="#ef4444" stroke-width="3"/>
            <text x="800" y="635" font-family="Arial" font-size="22" fill="#ffd700" text-anchor="middle" font-weight="bold">WRONG</text>
            <text x="800" y="675" font-family="Arial" font-size="16" fill="#ffffff" text-anchor="middle">Principal Dx: J44.1 COPD exac</text>
            <text x="800" y="705" font-family="Arial" font-size="16" fill="#ffffff" text-anchor="middle">Secondary: J15.9 Pneumonia</text>
            <text x="800" y="745" font-family="Arial" font-size="15" fill="#ef4444" text-anchor="middle">MS-DRG 191 (lower weight)</text>
            <text x="800" y="770" font-family="Arial" font-size="15" fill="#ef4444" text-anchor="middle">Reimbursement: ~$5,200</text>
            <text x="800" y="805" font-family="Arial" font-size="14" fill="#888" text-anchor="middle">Lost ~$3,200 per case</text>
            <rect x="200" y="870" width="700" height="180" rx="10" fill="#ffd700" opacity="0.15" stroke="#ffd700" stroke-width="2"/>
            <text x="550" y="910" font-family="Arial" font-size="20" fill="#ffd700" text-anchor="middle" font-weight="bold">UHDDS Wins the Argument</text>
            <text x="550" y="950" font-family="Arial" font-size="15" fill="#ffffff" text-anchor="middle">"Established AFTER STUDY to be CHIEFLY RESPONSIBLE"</text>
            <text x="550" y="985" font-family="Arial" font-size="15" fill="#ffffff" text-anchor="middle">Pneumonia was the underlying cause — COPD was reactive.</text>
            <text x="550" y="1020" font-family="Arial" font-size="14" fill="#888" text-anchor="middle">Always re-read the discharge summary before finalizing codes.</text>
          </svg>`,
          caption: "UHDDS turns a $3,200 reimbursement difference into the correct answer.",
        },
      },
      {
        type: "quiz",
        title: "Knowledge Check: Match the Setting",
        content: `Which data set is mandated for **home health agencies** to assess patient outcomes and drive **PDGM** payment?`,
        question: "Which standardized data set is mandated for home health agencies to assess patient outcomes and drive PDGM payment?",
        options: [
          { text: "OASIS", correct: true },
          { text: "MDS", correct: false },
          { text: "UHDDS", correct: false },
          { text: "UACDS", correct: false },
        ],
        explanation: "**OASIS** (Outcome and Assessment Information Set) is the CMS-mandated data set for home health agencies. The current version is **OASIS-E**. It is collected at start of care (SOC), recertification, and discharge, and it drives the **PDGM** (Patient-Driven Groupings Model) payment system. **MDS** is for nursing homes (SNFs). **UHDDS** is for inpatient hospitals. **UACDS** is for ambulatory/outpatient care.",
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="65" font-family="Arial" font-size="36" fill="#ffd700" text-anchor="middle" font-weight="bold">Match the Setting to the Data Set</text>
            <text x="550" y="105" font-family="Arial" font-size="18" fill="#888" text-anchor="middle">CCA exam loves these matching items</text>
            <line x1="100" y1="160" x2="1000" y2="160" stroke="#ffd700" stroke-width="2"/>
            <text x="150" y="200" font-family="Arial" font-size="22" fill="#ffd700" font-weight="bold">SETTING</text>
            <text x="550" y="200" font-family="Arial" font-size="22" fill="#ffd700" font-weight="bold">DATA SET</text>
            <text x="850" y="200" font-family="Arial" font-size="22" fill="#ffd700" font-weight="bold">PAYMENT</text>
            <line x1="100" y1="220" x2="1000" y2="220" stroke="#ffd700" stroke-width="2"/>
            <text x="150" y="265" font-family="Arial" font-size="17" fill="#ffffff">Inpatient hospital</text>
            <text x="550" y="265" font-family="Arial" font-size="17" fill="#6366f1" font-weight="bold">UHDDS</text>
            <text x="850" y="265" font-family="Arial" font-size="17" fill="#10b981">MS-DRG</text>
            <line x1="100" y1="290" x2="1000" y2="290" stroke="#888" stroke-width="0.5"/>
            <text x="150" y="335" font-family="Arial" font-size="17" fill="#ffffff">Ambulatory / clinic</text>
            <text x="550" y="335" font-family="Arial" font-size="17" fill="#10b981" font-weight="bold">UACDS</text>
            <text x="850" y="335" font-family="Arial" font-size="17" fill="#10b981">APC / OPPS</text>
            <line x1="100" y1="360" x2="1000" y2="360" stroke="#888" stroke-width="0.5"/>
            <text x="150" y="405" font-family="Arial" font-size="17" fill="#ffffff">Nursing home / SNF</text>
            <text x="550" y="405" font-family="Arial" font-size="17" fill="#f59e0b" font-weight="bold">MDS 3.0</text>
            <text x="850" y="405" font-family="Arial" font-size="17" fill="#10b981">PDPM</text>
            <line x1="100" y1="430" x2="1000" y2="430" stroke="#888" stroke-width="0.5"/>
            <text x="150" y="475" font-family="Arial" font-size="17" fill="#ffffff">Home health</text>
            <text x="550" y="475" font-family="Arial" font-size="17" fill="#ec4899" font-weight="bold">OASIS-E</text>
            <text x="850" y="475" font-family="Arial" font-size="17" fill="#10b981">PDGM</text>
            <line x1="100" y1="500" x2="1000" y2="500" stroke="#ffd700" stroke-width="2"/>
            <rect x="100" y="550" width="900" height="220" rx="10" fill="#ec4899" opacity="0.15" stroke="#ec4899" stroke-width="3"/>
            <text x="550" y="595" font-family="Arial" font-size="26" fill="#ffd700" text-anchor="middle" font-weight="bold">CORRECT: OASIS</text>
            <text x="550" y="635" font-family="Arial" font-size="16" fill="#ffffff" text-anchor="middle">Outcome and Assessment Information Set</text>
            <text x="550" y="670" font-family="Arial" font-size="15" fill="#ffffff" text-anchor="middle">Current version: OASIS-E (rolled out Jan 2023)</text>
            <text x="550" y="700" font-family="Arial" font-size="15" fill="#ffffff" text-anchor="middle">Collection points: Start of care · Recertification · Transfer · Discharge</text>
            <text x="550" y="735" font-family="Arial" font-size="15" fill="#10b981" text-anchor="middle">Drives PDGM (Patient-Driven Groupings Model) and Home Health Compare</text>
            <rect x="100" y="800" width="900" height="240" rx="10" fill="#ef4444" opacity="0.12" stroke="#ef4444" stroke-width="2"/>
            <text x="550" y="840" font-family="Arial" font-size="22" fill="#ef4444" text-anchor="middle" font-weight="bold">Why the Other Three Are Wrong</text>
            <text x="130" y="880" font-family="Arial" font-size="16" fill="#f59e0b" font-weight="bold">MDS:</text>
            <text x="190" y="880" font-family="Arial" font-size="15" fill="#ffffff">Nursing homes / SNFs — drives PDPM, NOT home health.</text>
            <text x="130" y="920" font-family="Arial" font-size="16" fill="#f59e0b" font-weight="bold">UHDDS:</text>
            <text x="220" y="920" font-family="Arial" font-size="15" fill="#ffffff">Inpatient acute hospitals — drives MS-DRG.</text>
            <text x="130" y="960" font-family="Arial" font-size="16" fill="#f59e0b" font-weight="bold">UACDS:</text>
            <text x="220" y="960" font-family="Arial" font-size="15" fill="#ffffff">Outpatient / ambulatory clinics — not home-based care.</text>
            <text x="550" y="1010" font-family="Arial" font-size="14" fill="#888" text-anchor="middle">Memory: HOME → OASIS · HOSPITAL → UHDDS · NURSING HOME → MDS · CLINIC → UACDS</text>
          </svg>`,
          caption: "Match each setting to its data set and payment system. Practice until it's reflex.",
        },
      },
      {
        type: "application",
        title: "Apply It: Why Data Sets Matter at Your Desk",
        content: `**On the job**: Whatever setting you code in, you'll touch one of these data sets daily. Inpatient coders apply UHDDS in every chart they abstract. SNF coders read MDS sections (especially **Section I — Active Diagnoses**) before assigning ICD-10-CM codes. Home health coders coordinate with the **OASIS clinician** to confirm the **primary diagnosis** matches OASIS M1021.

**For your career**: Data-set mastery is **promotion fuel**. Coders who can audit MDS for **MDS-driven HCC capture** or who can defend UHDDS principal diagnosis selections in **payer appeals** become CDI specialists, auditors, and managers.

**For the CCA exam**: Expect 3–5 items that test data-set definitions, settings, or payment connections. The most common trap is confusing UHDDS "principal diagnosis" with UACDS "first-listed diagnosis" — they sound similar but apply to different settings.

**Your study habit**: Make flashcards with **setting → data set → payment system** on one side, and the **defining feature** on the other. Quiz yourself daily until you can name all four in 30 seconds. That's the level of fluency the CCA expects.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="65" font-family="Arial" font-size="34" fill="#ffd700" text-anchor="middle" font-weight="bold">Your Career Path with Data Sets</text>
            <text x="550" y="105" font-family="Arial" font-size="18" fill="#888" text-anchor="middle">From entry-level coder to CDI leader</text>
            <rect x="80" y="160" width="940" height="100" rx="10" fill="#6366f1" opacity="0.25" stroke="#6366f1" stroke-width="2"/>
            <text x="140" y="200" font-family="Arial" font-size="20" fill="#ffd700" font-weight="bold">ENTRY: Coder I</text>
            <text x="140" y="230" font-family="Arial" font-size="15" fill="#ffffff">Apply UHDDS / UACDS definitions to assign ICD-10-CM and CPT codes.</text>
            <text x="140" y="250" font-family="Arial" font-size="14" fill="#888">Salary: $42-52K · CCA required</text>
            <polygon points="540,275 560,275 550,295" fill="#ffd700"/>
            <rect x="80" y="305" width="940" height="100" rx="10" fill="#10b981" opacity="0.25" stroke="#10b981" stroke-width="2"/>
            <text x="140" y="345" font-family="Arial" font-size="20" fill="#ffd700" font-weight="bold">YEAR 2-3: Coder II / Senior Coder</text>
            <text x="140" y="375" font-family="Arial" font-size="15" fill="#ffffff">Audit chart-to-MDS or chart-to-OASIS alignment for accuracy.</text>
            <text x="140" y="395" font-family="Arial" font-size="14" fill="#888">Salary: $55-68K · CCS often expected</text>
            <polygon points="540,420 560,420 550,440" fill="#ffd700"/>
            <rect x="80" y="450" width="940" height="100" rx="10" fill="#f59e0b" opacity="0.25" stroke="#f59e0b" stroke-width="2"/>
            <text x="140" y="490" font-family="Arial" font-size="20" fill="#ffd700" font-weight="bold">YEAR 4-6: CDI Specialist</text>
            <text x="140" y="520" font-family="Arial" font-size="15" fill="#ffffff">Query providers for documentation that supports correct principal diagnosis.</text>
            <text x="140" y="540" font-family="Arial" font-size="14" fill="#888">Salary: $70-90K · CCDS or CDIP credential</text>
            <polygon points="540,565 560,565 550,585" fill="#ffd700"/>
            <rect x="80" y="595" width="940" height="100" rx="10" fill="#ec4899" opacity="0.25" stroke="#ec4899" stroke-width="2"/>
            <text x="140" y="635" font-family="Arial" font-size="20" fill="#ffd700" font-weight="bold">YEAR 6-10: Coding Manager / Auditor</text>
            <text x="140" y="665" font-family="Arial" font-size="15" fill="#ffffff">Defend MS-DRG selections in payer audits; lead RAC appeals.</text>
            <text x="140" y="685" font-family="Arial" font-size="14" fill="#888">Salary: $85-110K · RHIA preferred</text>
            <polygon points="540,710 560,710 550,730" fill="#ffd700"/>
            <rect x="80" y="740" width="940" height="100" rx="10" fill="#8b5cf6" opacity="0.25" stroke="#8b5cf6" stroke-width="2"/>
            <text x="140" y="780" font-family="Arial" font-size="20" fill="#ffd700" font-weight="bold">YEAR 10+: HIM Director / Compliance Officer</text>
            <text x="140" y="810" font-family="Arial" font-size="15" fill="#ffffff">Own facility-wide data integrity across UHDDS, MDS, OASIS reporting.</text>
            <text x="140" y="830" font-family="Arial" font-size="14" fill="#888">Salary: $110-160K · Master's degree common</text>
            <rect x="200" y="890" width="700" height="160" rx="10" fill="#ffd700" opacity="0.15" stroke="#ffd700" stroke-width="2"/>
            <text x="550" y="930" font-family="Arial" font-size="20" fill="#ffd700" text-anchor="middle" font-weight="bold">Your CCA Is the First Step</text>
            <text x="550" y="970" font-family="Arial" font-size="15" fill="#ffffff" text-anchor="middle">Every rung above requires fluency in the data sets.</text>
            <text x="550" y="1000" font-family="Arial" font-size="15" fill="#ffffff" text-anchor="middle">Master them now, and the rest of the ladder is climbable.</text>
            <text x="550" y="1030" font-family="Arial" font-size="14" fill="#888" text-anchor="middle">~70% of HIM directors started as coders. Source: AHIMA workforce survey.</text>
          </svg>`,
          caption: "Data-set mastery compounds across a 10-year HIM career. Start at the CCA, end at the corner office.",
        },
      },
    ],
  },
  {
    id: "cca-him-concepts-lesson-3",
    title: "HIPAA Privacy, Security, and the Designated Record Set",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "HIPAA Is the Job",
        content: `Every HIM coder is, by default, a **HIPAA enforcement officer**. The **Health Insurance Portability and Accountability Act** of 1996 — strengthened by the **HITECH Act** of 2009 and the **Omnibus Rule** of 2013 — is not paperwork. It is the legal frame around every chart you touch.

HIPAA has three operational rules you must know cold for the CCA: the **Privacy Rule** (how PHI is used and disclosed), the **Security Rule** (how electronic PHI is safeguarded), and the **Breach Notification Rule** (what happens when something goes wrong).

This lesson focuses on three exam-favorite concepts: what counts as **protected health information (PHI)**, the **minimum necessary** standard, and the **designated record set (DRS)** — the precise scope of records a patient can request and amend.

Mess up HIPAA and the penalties are personal. **Civil fines** range from $137 to $68,928 per violation. **Criminal penalties** can reach 10 years in prison for knowingly selling PHI. The CCA exam will not test the exact dollar amounts, but it will test whether you can identify a violation when you see one.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="65" font-family="Arial" font-size="36" fill="#ffd700" text-anchor="middle" font-weight="bold">HIPAA in One Picture</text>
            <text x="550" y="105" font-family="Arial" font-size="18" fill="#888" text-anchor="middle">The three rules that govern every HIM workday</text>
            <rect x="80" y="160" width="300" height="380" rx="12" fill="#6366f1" opacity="0.25" stroke="#6366f1" stroke-width="3"/>
            <text x="230" y="205" font-family="Arial" font-size="26" fill="#ffd700" text-anchor="middle" font-weight="bold">PRIVACY</text>
            <text x="230" y="235" font-family="Arial" font-size="14" fill="#888" text-anchor="middle">45 CFR 164.500-534</text>
            <text x="230" y="285" font-family="Arial" font-size="15" fill="#ffffff" text-anchor="middle">USE &amp; disclosure</text>
            <text x="230" y="310" font-family="Arial" font-size="15" fill="#ffffff" text-anchor="middle">of PHI</text>
            <text x="230" y="355" font-family="Arial" font-size="14" fill="#ffffff" text-anchor="middle">• TPO disclosures</text>
            <text x="230" y="380" font-family="Arial" font-size="14" fill="#ffffff" text-anchor="middle">• Patient rights</text>
            <text x="230" y="405" font-family="Arial" font-size="14" fill="#ffffff" text-anchor="middle">• Minimum necessary</text>
            <text x="230" y="430" font-family="Arial" font-size="14" fill="#ffffff" text-anchor="middle">• Notice of Privacy</text>
            <text x="230" y="455" font-family="Arial" font-size="14" fill="#ffffff" text-anchor="middle">  Practices (NPP)</text>
            <text x="230" y="500" font-family="Arial" font-size="13" fill="#ec4899" text-anchor="middle">Applies to: ALL PHI</text>
            <text x="230" y="520" font-family="Arial" font-size="13" fill="#ec4899" text-anchor="middle">(paper + electronic)</text>
            <rect x="400" y="160" width="300" height="380" rx="12" fill="#10b981" opacity="0.25" stroke="#10b981" stroke-width="3"/>
            <text x="550" y="205" font-family="Arial" font-size="26" fill="#ffd700" text-anchor="middle" font-weight="bold">SECURITY</text>
            <text x="550" y="235" font-family="Arial" font-size="14" fill="#888" text-anchor="middle">45 CFR 164.302-318</text>
            <text x="550" y="285" font-family="Arial" font-size="15" fill="#ffffff" text-anchor="middle">SAFEGUARDS</text>
            <text x="550" y="310" font-family="Arial" font-size="15" fill="#ffffff" text-anchor="middle">for electronic PHI</text>
            <text x="550" y="355" font-family="Arial" font-size="14" fill="#ffffff" text-anchor="middle">• Administrative</text>
            <text x="550" y="380" font-family="Arial" font-size="14" fill="#ffffff" text-anchor="middle">• Physical</text>
            <text x="550" y="405" font-family="Arial" font-size="14" fill="#ffffff" text-anchor="middle">• Technical</text>
            <text x="550" y="430" font-family="Arial" font-size="14" fill="#ffffff" text-anchor="middle">• Risk analysis</text>
            <text x="550" y="455" font-family="Arial" font-size="14" fill="#ffffff" text-anchor="middle">• Encryption</text>
            <text x="550" y="500" font-family="Arial" font-size="13" fill="#ec4899" text-anchor="middle">Applies to: ePHI only</text>
            <text x="550" y="520" font-family="Arial" font-size="13" fill="#ec4899" text-anchor="middle">(electronic data)</text>
            <rect x="720" y="160" width="300" height="380" rx="12" fill="#f59e0b" opacity="0.25" stroke="#f59e0b" stroke-width="3"/>
            <text x="870" y="205" font-family="Arial" font-size="22" fill="#ffd700" text-anchor="middle" font-weight="bold">BREACH NOTIFICATION</text>
            <text x="870" y="235" font-family="Arial" font-size="14" fill="#888" text-anchor="middle">45 CFR 164.400-414</text>
            <text x="870" y="285" font-family="Arial" font-size="15" fill="#ffffff" text-anchor="middle">NOTIFY when</text>
            <text x="870" y="310" font-family="Arial" font-size="15" fill="#ffffff" text-anchor="middle">PHI is breached</text>
            <text x="870" y="355" font-family="Arial" font-size="14" fill="#ffffff" text-anchor="middle">• Patients: ≤60 days</text>
            <text x="870" y="380" font-family="Arial" font-size="14" fill="#ffffff" text-anchor="middle">• HHS: ≤60 days</text>
            <text x="870" y="405" font-family="Arial" font-size="14" fill="#ffffff" text-anchor="middle">  (or annually if &lt;500)</text>
            <text x="870" y="430" font-family="Arial" font-size="14" fill="#ffffff" text-anchor="middle">• Media: ≤60 days</text>
            <text x="870" y="455" font-family="Arial" font-size="14" fill="#ffffff" text-anchor="middle">  (if ≥500 affected)</text>
            <text x="870" y="500" font-family="Arial" font-size="13" fill="#ec4899" text-anchor="middle">"Wall of shame"</text>
            <text x="870" y="520" font-family="Arial" font-size="13" fill="#ec4899" text-anchor="middle">on HHS.gov</text>
            <rect x="80" y="580" width="940" height="200" rx="10" fill="#8b5cf6" opacity="0.2" stroke="#8b5cf6" stroke-width="3"/>
            <text x="550" y="625" font-family="Arial" font-size="24" fill="#ffd700" text-anchor="middle" font-weight="bold">Penalty Tiers (2024 amounts)</text>
            <text x="130" y="670" font-family="Arial" font-size="15" fill="#10b981" font-weight="bold">Tier 1:</text>
            <text x="220" y="670" font-family="Arial" font-size="15" fill="#ffffff">Did not know → $137-$68,928/violation</text>
            <text x="130" y="700" font-family="Arial" font-size="15" fill="#f59e0b" font-weight="bold">Tier 2:</text>
            <text x="220" y="700" font-family="Arial" font-size="15" fill="#ffffff">Reasonable cause → $1,379-$68,928</text>
            <text x="130" y="730" font-family="Arial" font-size="15" fill="#ec4899" font-weight="bold">Tier 3:</text>
            <text x="220" y="730" font-family="Arial" font-size="15" fill="#ffffff">Willful neglect, corrected → $13,785-$68,928</text>
            <text x="130" y="760" font-family="Arial" font-size="15" fill="#ef4444" font-weight="bold">Tier 4:</text>
            <text x="220" y="760" font-family="Arial" font-size="15" fill="#ffffff">Willful neglect, not corrected → $68,928-$2,067,813</text>
            <rect x="200" y="810" width="700" height="200" rx="10" fill="#ef4444" opacity="0.2" stroke="#ef4444" stroke-width="3"/>
            <text x="550" y="850" font-family="Arial" font-size="20" fill="#ffd700" text-anchor="middle" font-weight="bold">Criminal Penalties (DOJ)</text>
            <text x="550" y="890" font-family="Arial" font-size="15" fill="#ffffff" text-anchor="middle">Knowingly obtain/disclose PHI: up to $50,000 + 1 year</text>
            <text x="550" y="920" font-family="Arial" font-size="15" fill="#ffffff" text-anchor="middle">False pretenses: up to $100,000 + 5 years</text>
            <text x="550" y="950" font-family="Arial" font-size="15" fill="#ffffff" text-anchor="middle">Intent to sell / personal gain: up to $250,000 + 10 years</text>
            <text x="550" y="985" font-family="Arial" font-size="14" fill="#888" text-anchor="middle">Individual employees can be prosecuted — not just the hospital.</text>
          </svg>`,
          caption: "Three rules, four civil tiers, and personal criminal exposure. HIPAA is real.",
        },
      },
      {
        type: "concept",
        title: "PHI, Minimum Necessary, and the DRS",
        content: `**Protected Health Information (PHI)** is any **individually identifiable health information** held by a covered entity, in **any form** — paper, electronic, or oral. HIPAA lists **18 identifiers** that, when combined with health info, make data PHI: name, geographic subdivisions smaller than a state, dates (except year) related to the individual, phone, fax, email, SSN, MRN, account number, certificate/license, vehicle ID, device ID, URL, IP, biometric, full face photo, and any other unique identifier.

**Minimum Necessary** is the workhorse rule: when using, disclosing, or requesting PHI, limit it to the **minimum necessary** to accomplish the purpose. Exceptions: disclosures to the **patient**, for **treatment**, when the patient **authorized** it, and certain **required-by-law** disclosures.

**Designated Record Set (DRS)** is the set of records the covered entity uses to **make decisions about individuals** — medical records, billing records, and any other records used in decision-making. Patients have rights to **access**, **request amendment**, and **request an accounting of disclosures** on the DRS.

Critically, the DRS is broader than the "legal health record" — it includes billing data the legal record may exclude. The CCA exam tests whether you can distinguish these scopes.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="65" font-family="Arial" font-size="34" fill="#ffd700" text-anchor="middle" font-weight="bold">PHI · Minimum Necessary · DRS</text>
            <text x="550" y="105" font-family="Arial" font-size="18" fill="#888" text-anchor="middle">The three CCA-favorite HIPAA concepts</text>
            <rect x="80" y="150" width="940" height="320" rx="10" fill="#6366f1" opacity="0.2" stroke="#6366f1" stroke-width="3"/>
            <text x="110" y="190" font-family="Arial" font-size="24" fill="#ffd700" font-weight="bold">18 PHI IDENTIFIERS (Safe Harbor)</text>
            <text x="120" y="225" font-family="Arial" font-size="14" fill="#ffffff">1. Names</text>
            <text x="380" y="225" font-family="Arial" font-size="14" fill="#ffffff">7. Email addresses</text>
            <text x="700" y="225" font-family="Arial" font-size="14" fill="#ffffff">13. Device identifiers</text>
            <text x="120" y="255" font-family="Arial" font-size="14" fill="#ffffff">2. Geographic data &lt; state</text>
            <text x="380" y="255" font-family="Arial" font-size="14" fill="#ffffff">8. Social Security Number</text>
            <text x="700" y="255" font-family="Arial" font-size="14" fill="#ffffff">14. URLs</text>
            <text x="120" y="285" font-family="Arial" font-size="14" fill="#ffffff">3. Dates (except year)</text>
            <text x="380" y="285" font-family="Arial" font-size="14" fill="#ffffff">9. Medical Record Number</text>
            <text x="700" y="285" font-family="Arial" font-size="14" fill="#ffffff">15. IP addresses</text>
            <text x="120" y="315" font-family="Arial" font-size="14" fill="#ffffff">4. Phone numbers</text>
            <text x="380" y="315" font-family="Arial" font-size="14" fill="#ffffff">10. Health plan beneficiary #</text>
            <text x="700" y="315" font-family="Arial" font-size="14" fill="#ffffff">16. Biometric IDs</text>
            <text x="120" y="345" font-family="Arial" font-size="14" fill="#ffffff">5. Fax numbers</text>
            <text x="380" y="345" font-family="Arial" font-size="14" fill="#ffffff">11. Account numbers</text>
            <text x="700" y="345" font-family="Arial" font-size="14" fill="#ffffff">17. Full-face photos</text>
            <text x="120" y="375" font-family="Arial" font-size="14" fill="#ffffff">6. (continued)</text>
            <text x="380" y="375" font-family="Arial" font-size="14" fill="#ffffff">12. Vehicle ID / plate</text>
            <text x="700" y="375" font-family="Arial" font-size="14" fill="#ffffff">18. Any other unique ID</text>
            <text x="110" y="430" font-family="Arial" font-size="15" fill="#10b981">De-identification = strip ALL 18 identifiers (Safe Harbor method)</text>
            <text x="110" y="455" font-family="Arial" font-size="15" fill="#10b981">OR Expert Determination (statistician certifies very low re-id risk)</text>
            <rect x="80" y="490" width="460" height="250" rx="10" fill="#10b981" opacity="0.2" stroke="#10b981" stroke-width="3"/>
            <text x="110" y="530" font-family="Arial" font-size="22" fill="#ffd700" font-weight="bold">MINIMUM NECESSARY</text>
            <text x="110" y="565" font-family="Arial" font-size="14" fill="#ffffff">Limit PHI to what's needed for the purpose.</text>
            <text x="110" y="600" font-family="Arial" font-size="15" fill="#10b981" font-weight="bold">Exceptions (no limit applies):</text>
            <text x="110" y="625" font-family="Arial" font-size="14" fill="#ffffff">• Disclosure TO the patient</text>
            <text x="110" y="650" font-family="Arial" font-size="14" fill="#ffffff">• Disclosure for TREATMENT</text>
            <text x="110" y="675" font-family="Arial" font-size="14" fill="#ffffff">• Patient AUTHORIZATION on file</text>
            <text x="110" y="700" font-family="Arial" font-size="14" fill="#ffffff">• Required by LAW</text>
            <text x="110" y="725" font-family="Arial" font-size="14" fill="#ffffff">• Required by HHS for compliance</text>
            <rect x="560" y="490" width="460" height="250" rx="10" fill="#f59e0b" opacity="0.2" stroke="#f59e0b" stroke-width="3"/>
            <text x="590" y="530" font-family="Arial" font-size="22" fill="#ffd700" font-weight="bold">DESIGNATED RECORD SET</text>
            <text x="590" y="565" font-family="Arial" font-size="14" fill="#ffffff">Records used to make decisions</text>
            <text x="590" y="585" font-family="Arial" font-size="14" fill="#ffffff">about the individual:</text>
            <text x="590" y="615" font-family="Arial" font-size="14" fill="#ffffff">• Medical records</text>
            <text x="590" y="640" font-family="Arial" font-size="14" fill="#ffffff">• Billing records</text>
            <text x="590" y="665" font-family="Arial" font-size="14" fill="#ffffff">• Enrollment, payment, claims</text>
            <text x="590" y="690" font-family="Arial" font-size="14" fill="#ffffff">• Case/medical management records</text>
            <text x="590" y="725" font-family="Arial" font-size="15" fill="#10b981">Patient rights apply to the DRS</text>
            <rect x="80" y="765" width="940" height="280" rx="10" fill="#ec4899" opacity="0.2" stroke="#ec4899" stroke-width="3"/>
            <text x="550" y="805" font-family="Arial" font-size="22" fill="#ffd700" text-anchor="middle" font-weight="bold">Patient Rights Under HIPAA (on the DRS)</text>
            <text x="130" y="845" font-family="Arial" font-size="16" fill="#10b981" font-weight="bold">ACCESS:</text>
            <text x="280" y="845" font-family="Arial" font-size="15" fill="#ffffff">Inspect &amp; receive copy (within 30 days, one 30-day extension allowed)</text>
            <text x="130" y="880" font-family="Arial" font-size="16" fill="#10b981" font-weight="bold">AMENDMENT:</text>
            <text x="280" y="880" font-family="Arial" font-size="15" fill="#ffffff">Request correction (CE may deny if accurate)</text>
            <text x="130" y="915" font-family="Arial" font-size="16" fill="#10b981" font-weight="bold">ACCOUNTING:</text>
            <text x="280" y="915" font-family="Arial" font-size="15" fill="#ffffff">List of disclosures (last 6 yrs; excludes TPO)</text>
            <text x="130" y="950" font-family="Arial" font-size="16" fill="#10b981" font-weight="bold">RESTRICTION:</text>
            <text x="280" y="950" font-family="Arial" font-size="15" fill="#ffffff">Request limits on use/disclosure</text>
            <text x="130" y="985" font-family="Arial" font-size="16" fill="#10b981" font-weight="bold">CONFIDENTIAL COMM:</text>
            <text x="380" y="985" font-family="Arial" font-size="15" fill="#ffffff">Receive PHI at alternate address/phone</text>
            <text x="130" y="1020" font-family="Arial" font-size="16" fill="#10b981" font-weight="bold">NOTICE:</text>
            <text x="280" y="1020" font-family="Arial" font-size="15" fill="#ffffff">Receive a Notice of Privacy Practices (NPP)</text>
          </svg>`,
          caption: "18 identifiers · 5 minimum-necessary exceptions · 6 patient rights. Drill them.",
        },
      },
      {
        type: "example",
        title: "The Curious Coworker Scenario",
        content: `**Scenario**: Carla is an inpatient coder. A coworker from accounting, Beth, stops by Carla's desk: "Hey, did you happen to code Steve from IT's chart last week? He was admitted for chest pain — is he okay?"

**The HIPAA analysis**: Steve is a patient. His admission, diagnosis, and treatment are **PHI**. Beth has **no treatment, payment, or operations (TPO)** purpose for asking. Carla **cannot share anything** — not even confirming Steve was admitted.

Carla's correct response: **"I can't discuss any patient. If Steve wants to share, that's his choice."** She then logs the inquiry per facility policy.

**Variation 1**: A nurse practitioner caring for Steve calls Carla to ask about a code Carla assigned. **Allowed** — treatment disclosure, TPO exception, minimum necessary applies but isn't violated.

**Variation 2**: The hospital's billing department asks Carla for Steve's diagnoses to appeal a denial. **Allowed** — payment purpose, TPO exception.

**Variation 3**: Carla looks up Steve's chart out of curiosity, doesn't share with anyone, just reads it. **Still a violation** — **unauthorized access** is itself a breach. Most EHRs audit-log every view. Carla can be **terminated and fined** even though she "didn't tell anyone."

The CCA exam tests these distinctions constantly. Curiosity is not a permitted purpose.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="65" font-family="Arial" font-size="34" fill="#ffd700" text-anchor="middle" font-weight="bold">"Is Steve Okay?" — Four Versions</text>
            <text x="550" y="105" font-family="Arial" font-size="18" fill="#888" text-anchor="middle">Same chart, different requesters, different answers</text>
            <rect x="80" y="150" width="940" height="200" rx="10" fill="#ef4444" opacity="0.15" stroke="#ef4444" stroke-width="3"/>
            <text x="110" y="190" font-family="Arial" font-size="22" fill="#ef4444" font-weight="bold">Version 1: Beth from Accounting (curious)</text>
            <text x="110" y="225" font-family="Arial" font-size="16" fill="#ffffff">Purpose: personal curiosity</text>
            <text x="110" y="255" font-family="Arial" font-size="16" fill="#ffffff">TPO exception applies? NO</text>
            <text x="110" y="285" font-family="Arial" font-size="16" fill="#ffffff">Authorization on file? NO</text>
            <text x="110" y="320" font-family="Arial" font-size="18" fill="#ef4444" font-weight="bold">VIOLATION if Carla shares — must refuse politely</text>
            <rect x="80" y="370" width="940" height="180" rx="10" fill="#10b981" opacity="0.15" stroke="#10b981" stroke-width="3"/>
            <text x="110" y="410" font-family="Arial" font-size="22" fill="#10b981" font-weight="bold">Version 2: NP caring for Steve</text>
            <text x="110" y="445" font-family="Arial" font-size="16" fill="#ffffff">Purpose: TREATMENT</text>
            <text x="110" y="475" font-family="Arial" font-size="16" fill="#ffffff">TPO exception applies? YES</text>
            <text x="110" y="510" font-family="Arial" font-size="18" fill="#10b981" font-weight="bold">PERMITTED — minimum necessary doesn't apply to treatment</text>
            <rect x="80" y="570" width="940" height="180" rx="10" fill="#10b981" opacity="0.15" stroke="#10b981" stroke-width="3"/>
            <text x="110" y="610" font-family="Arial" font-size="22" fill="#10b981" font-weight="bold">Version 3: Billing department for denial appeal</text>
            <text x="110" y="645" font-family="Arial" font-size="16" fill="#ffffff">Purpose: PAYMENT</text>
            <text x="110" y="675" font-family="Arial" font-size="16" fill="#ffffff">TPO exception applies? YES</text>
            <text x="110" y="710" font-family="Arial" font-size="18" fill="#10b981" font-weight="bold">PERMITTED — apply minimum necessary (only codes &amp; dx needed)</text>
            <rect x="80" y="770" width="940" height="220" rx="10" fill="#ef4444" opacity="0.15" stroke="#ef4444" stroke-width="3"/>
            <text x="110" y="810" font-family="Arial" font-size="22" fill="#ef4444" font-weight="bold">Version 4: Carla peeks out of curiosity, tells no one</text>
            <text x="110" y="845" font-family="Arial" font-size="16" fill="#ffffff">Purpose: personal curiosity</text>
            <text x="110" y="875" font-family="Arial" font-size="16" fill="#ffffff">Disclosure to anyone? NO</text>
            <text x="110" y="905" font-family="Arial" font-size="16" fill="#ffffff">Audit-logged in EHR? YES (every access logged)</text>
            <text x="110" y="940" font-family="Arial" font-size="18" fill="#ef4444" font-weight="bold">VIOLATION — unauthorized ACCESS itself is a breach</text>
            <text x="110" y="970" font-family="Arial" font-size="14" fill="#888">Sanctions: termination, fines, possible loss of credential</text>
            <text x="550" y="1030" font-family="Arial" font-size="16" fill="#ffd700" text-anchor="middle" font-weight="bold">Rule of thumb: "Need to know" must come BEFORE you click "Open chart."</text>
          </svg>`,
          caption: "Same patient, four scenarios. Only treatment and payment justify access — curiosity never does.",
        },
      },
      {
        type: "quiz",
        title: "Knowledge Check: Minimum Necessary Exception",
        content: `Which of the following disclosures is **EXEMPT** from the HIPAA minimum necessary rule?`,
        question: "Which of the following disclosures is EXEMPT from the HIPAA minimum necessary rule?",
        options: [
          { text: "Disclosure to another provider for treatment", correct: true },
          { text: "Disclosure to a workers' compensation carrier", correct: false },
          { text: "Disclosure to a research team without authorization", correct: false },
          { text: "Disclosure to a hospital fundraising department", correct: false },
        ],
        explanation: "Disclosures for **treatment** are exempt from the minimum necessary rule — providers may share whatever PHI is clinically useful without limiting to a minimum subset. The other exceptions are: disclosure to the **patient**, disclosure based on patient **authorization**, disclosure **required by law**, and certain disclosures to **HHS** for compliance. Workers' comp, research, and fundraising are all subject to minimum necessary and typically require additional authorization or de-identification.",
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="65" font-family="Arial" font-size="34" fill="#ffd700" text-anchor="middle" font-weight="bold">Minimum Necessary — Exceptions</text>
            <text x="550" y="105" font-family="Arial" font-size="18" fill="#888" text-anchor="middle">Memorize the 5 disclosures that are EXEMPT</text>
            <rect x="100" y="170" width="900" height="280" rx="10" fill="#10b981" opacity="0.2" stroke="#10b981" stroke-width="3"/>
            <text x="550" y="215" font-family="Arial" font-size="24" fill="#ffd700" text-anchor="middle" font-weight="bold">5 Exemptions from Minimum Necessary</text>
            <text x="150" y="265" font-family="Arial" font-size="17" fill="#10b981" font-weight="bold">1.</text>
            <text x="190" y="265" font-family="Arial" font-size="17" fill="#ffffff">Disclosure to the PATIENT (or personal rep)</text>
            <text x="150" y="305" font-family="Arial" font-size="17" fill="#10b981" font-weight="bold">2.</text>
            <text x="190" y="305" font-family="Arial" font-size="17" fill="#ffffff">Disclosure for TREATMENT (provider-to-provider)</text>
            <text x="150" y="345" font-family="Arial" font-size="17" fill="#10b981" font-weight="bold">3.</text>
            <text x="190" y="345" font-family="Arial" font-size="17" fill="#ffffff">Disclosure made with patient AUTHORIZATION</text>
            <text x="150" y="385" font-family="Arial" font-size="17" fill="#10b981" font-weight="bold">4.</text>
            <text x="190" y="385" font-family="Arial" font-size="17" fill="#ffffff">Disclosure REQUIRED BY LAW (subpoena, mandatory report)</text>
            <text x="150" y="425" font-family="Arial" font-size="17" fill="#10b981" font-weight="bold">5.</text>
            <text x="190" y="425" font-family="Arial" font-size="17" fill="#ffffff">Disclosure to HHS for HIPAA compliance investigation</text>
            <rect x="100" y="475" width="900" height="540" rx="10" fill="#ef4444" opacity="0.12" stroke="#ef4444" stroke-width="2"/>
            <text x="550" y="515" font-family="Arial" font-size="22" fill="#ef4444" text-anchor="middle" font-weight="bold">Why the Other Options Are Subject to Minimum Necessary</text>
            <rect x="130" y="545" width="840" height="130" rx="8" fill="#f59e0b" opacity="0.15" stroke="#f59e0b" stroke-width="1"/>
            <text x="160" y="580" font-family="Arial" font-size="17" fill="#f59e0b" font-weight="bold">Workers' Comp Carrier</text>
            <text x="160" y="610" font-family="Arial" font-size="14" fill="#ffffff">Permitted disclosure under §164.512(l) but still subject to</text>
            <text x="160" y="632" font-family="Arial" font-size="14" fill="#ffffff">minimum necessary — only send what's needed for the claim,</text>
            <text x="160" y="654" font-family="Arial" font-size="14" fill="#ffffff">not the entire chart.</text>
            <rect x="130" y="695" width="840" height="130" rx="8" fill="#f59e0b" opacity="0.15" stroke="#f59e0b" stroke-width="1"/>
            <text x="160" y="730" font-family="Arial" font-size="17" fill="#f59e0b" font-weight="bold">Research Without Authorization</text>
            <text x="160" y="760" font-family="Arial" font-size="14" fill="#ffffff">Requires IRB/Privacy Board waiver AND minimum necessary,</text>
            <text x="160" y="782" font-family="Arial" font-size="14" fill="#ffffff">OR use de-identified data / limited data set with data use</text>
            <text x="160" y="804" font-family="Arial" font-size="14" fill="#ffffff">agreement (DUA).</text>
            <rect x="130" y="845" width="840" height="130" rx="8" fill="#f59e0b" opacity="0.15" stroke="#f59e0b" stroke-width="1"/>
            <text x="160" y="880" font-family="Arial" font-size="17" fill="#f59e0b" font-weight="bold">Hospital Fundraising</text>
            <text x="160" y="910" font-family="Arial" font-size="14" fill="#ffffff">Permitted with limited PHI (demographics, dates, dept of service,</text>
            <text x="160" y="932" font-family="Arial" font-size="14" fill="#ffffff">treating physician, outcome info) — but always subject to</text>
            <text x="160" y="954" font-family="Arial" font-size="14" fill="#ffffff">minimum necessary + opt-out rights.</text>
            <text x="550" y="1010" font-family="Arial" font-size="14" fill="#888" text-anchor="middle">"Treatment" is the only listed option fully exempt — that's why it's the correct answer.</text>
          </svg>`,
          caption: "Five exemptions, and 'treatment' is one of them. Everything else gets the minimum-necessary haircut.",
        },
      },
      {
        type: "application",
        title: "Apply It: Daily HIPAA Hygiene",
        content: `**Your daily HIPAA checklist as a coder**: (1) **Lock your screen** every time you leave your desk — Windows+L is your friend. (2) **Never access** a chart unless your work queue assigns it. (3) **Apply minimum necessary** when responding to release-of-information (ROI) requests — send only what was requested, not the full chart.

**When patients call**: For an **access request**, log it, route to the **ROI team**, and confirm the **30-day clock** has started. The CE has 30 days, with one 30-day extension if needed. Charge only **reasonable, cost-based** fees per HHS guidance (most states cap at ~$6.50 per electronic copy).

**When you spot a potential breach**: Report it to the **Privacy Officer** immediately. A breach assessment uses the **four-factor test**: nature of PHI involved, unauthorized recipient, whether PHI was actually viewed/acquired, and extent of mitigation. If risk is more than low, **breach notification** clocks start.

**For your career**: HIPAA fluency separates good coders from indispensable ones. Many HIM departments promote internal candidates to **Privacy Officer** or **Compliance Analyst** roles — both pay 20–40% more than coding. Start now: read your facility's NPP, audit policy, and sanctions schedule. Show curiosity about compliance, not patients.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="65" font-family="Arial" font-size="36" fill="#ffd700" text-anchor="middle" font-weight="bold">Your Daily HIPAA Hygiene Routine</text>
            <text x="550" y="105" font-family="Arial" font-size="18" fill="#888" text-anchor="middle">7 habits of a HIPAA-safe coder</text>
            <rect x="80" y="150" width="940" height="80" rx="8" fill="#6366f1" opacity="0.25" stroke="#6366f1" stroke-width="2"/>
            <text x="120" y="190" font-family="Arial" font-size="20" fill="#ffd700" font-weight="bold">1.</text>
            <text x="160" y="190" font-family="Arial" font-size="17" fill="#ffffff">Lock your screen every time you stand up (Win+L on PC, Ctrl+Cmd+Q on Mac)</text>
            <text x="160" y="215" font-family="Arial" font-size="13" fill="#888">Most facilities require auto-lock within 5 minutes — beat it with manual habit.</text>
            <rect x="80" y="245" width="940" height="80" rx="8" fill="#10b981" opacity="0.25" stroke="#10b981" stroke-width="2"/>
            <text x="120" y="285" font-family="Arial" font-size="20" fill="#ffd700" font-weight="bold">2.</text>
            <text x="160" y="285" font-family="Arial" font-size="17" fill="#ffffff">Never open a chart not assigned to you — even your own family's</text>
            <text x="160" y="310" font-family="Arial" font-size="13" fill="#888">Audit logs see all. "I didn't share it" is not a defense.</text>
            <rect x="80" y="340" width="940" height="80" rx="8" fill="#f59e0b" opacity="0.25" stroke="#f59e0b" stroke-width="2"/>
            <text x="120" y="380" font-family="Arial" font-size="20" fill="#ffd700" font-weight="bold">3.</text>
            <text x="160" y="380" font-family="Arial" font-size="17" fill="#ffffff">Apply minimum necessary on every ROI fulfillment</text>
            <text x="160" y="405" font-family="Arial" font-size="13" fill="#888">Send only the specific records requested, not the entire DRS.</text>
            <rect x="80" y="435" width="940" height="80" rx="8" fill="#ec4899" opacity="0.25" stroke="#ec4899" stroke-width="2"/>
            <text x="120" y="475" font-family="Arial" font-size="20" fill="#ffd700" font-weight="bold">4.</text>
            <text x="160" y="475" font-family="Arial" font-size="17" fill="#ffffff">Use facility-approved encrypted email/fax for any ePHI transmission</text>
            <text x="160" y="500" font-family="Arial" font-size="13" fill="#888">Personal Gmail/text/Slack = automatic violation.</text>
            <rect x="80" y="530" width="940" height="80" rx="8" fill="#8b5cf6" opacity="0.25" stroke="#8b5cf6" stroke-width="2"/>
            <text x="120" y="570" font-family="Arial" font-size="20" fill="#ffd700" font-weight="bold">5.</text>
            <text x="160" y="570" font-family="Arial" font-size="17" fill="#ffffff">Shred any paper PHI before leaving for the day</text>
            <text x="160" y="595" font-family="Arial" font-size="13" fill="#888">"Confidential bin" if shredder unavailable — never trash or recycle.</text>
            <rect x="80" y="625" width="940" height="80" rx="8" fill="#0ea5e9" opacity="0.25" stroke="#0ea5e9" stroke-width="2"/>
            <text x="120" y="665" font-family="Arial" font-size="20" fill="#ffd700" font-weight="bold">6.</text>
            <text x="160" y="665" font-family="Arial" font-size="17" fill="#ffffff">Report suspected breach to Privacy Officer within the workday</text>
            <text x="160" y="690" font-family="Arial" font-size="13" fill="#888">Four-factor risk assessment runs from there. Speed protects everyone.</text>
            <rect x="80" y="720" width="940" height="80" rx="8" fill="#ef4444" opacity="0.25" stroke="#ef4444" stroke-width="2"/>
            <text x="120" y="760" font-family="Arial" font-size="20" fill="#ffd700" font-weight="bold">7.</text>
            <text x="160" y="760" font-family="Arial" font-size="17" fill="#ffffff">Complete annual HIPAA training — and read the updates</text>
            <text x="160" y="785" font-family="Arial" font-size="13" fill="#888">2024-2025 brought new reproductive-health privacy rules.</text>
            <rect x="200" y="830" width="700" height="200" rx="10" fill="#ffd700" opacity="0.15" stroke="#ffd700" stroke-width="3"/>
            <text x="550" y="875" font-family="Arial" font-size="22" fill="#ffd700" text-anchor="middle" font-weight="bold">Career Move</text>
            <text x="550" y="915" font-family="Arial" font-size="15" fill="#ffffff" text-anchor="middle">HIPAA-fluent coders get tapped for Privacy Officer and</text>
            <text x="550" y="940" font-family="Arial" font-size="15" fill="#ffffff" text-anchor="middle">Compliance Analyst openings — 20-40% pay bump.</text>
            <text x="550" y="980" font-family="Arial" font-size="15" fill="#10b981" text-anchor="middle">Add the CHPS (Certified in Healthcare Privacy and Security)</text>
            <text x="550" y="1005" font-family="Arial" font-size="15" fill="#10b981" text-anchor="middle">credential to accelerate the move.</text>
          </svg>`,
          caption: "Seven habits that keep you, your patients, and your facility on the right side of the law.",
        },
      },
    ],
  },
];

    const BOOKS = [
        {
            id: 'cca-domain-1', title: 'CCA Domain 1: Health Information Concepts',
            author: 'Synthesis Learning',
            description: 'The legal/clinical/financial roles of the health record, the standard data sets that drive coding, and HIPAA\'s rules around protected health information.',
            lessons: 3, duration: 45, progress: 0, category: 'cca-prep',
            lessonList: DOMAIN1_PLACEHOLDER_LESSONS,
        },
        {
            id: 'cca-domain-2', title: 'CCA Domain 2: ICD-10-CM Diagnosis Coding',
            author: 'Synthesis Learning',
            description: 'The Official Guidelines, alphabetic/tabular workflow, principal vs. additional diagnoses, and the conditions that always trip up new coders.',
            lessons: 1, duration: 5, progress: 0, category: 'cca-prep',
            lessonList: comingSoonLessons('ICD-10-CM Official Guidelines, alphabetic/tabular workflow, and principal vs. additional diagnoses'),
        },
        {
            id: 'cca-domain-3', title: 'CCA Domain 3: ICD-10-PCS Procedure Coding',
            author: 'Synthesis Learning',
            description: 'The 7-character structure, the medical/surgical section\'s 31 root operations, and how to build a code that didn\'t exist in ICD-9.',
            lessons: 1, duration: 5, progress: 0, category: 'cca-prep',
            lessonList: comingSoonLessons('the ICD-10-PCS 7-character code structure, the 31 medical/surgical root operations, and the body-system tables'),
        },
        {
            id: 'cca-domain-4', title: 'CCA Domain 4: CPT Outpatient Coding',
            author: 'Synthesis Learning',
            description: 'CPT structure, E/M services, surgery section bundling, modifiers — focused on the outpatient encounters CCA emphasizes.',
            lessons: 1, duration: 5, progress: 0, category: 'cca-prep',
            lessonList: comingSoonLessons('CPT structure, E/M services, the surgery section\'s bundling rules, and outpatient-focused modifiers'),
        },
        {
            id: 'cca-domain-5', title: 'CCA Domain 5: Compliance and Regulatory Standards',
            author: 'Synthesis Learning',
            description: 'NCCI edits, CMS compliance, the Office of Inspector General work plan, and what triggers an audit.',
            lessons: 1, duration: 5, progress: 0, category: 'cca-prep',
            lessonList: comingSoonLessons('NCCI edits, CMS compliance, the OIG work plan, and audit triggers in claim data'),
        },
        {
            id: 'cca-domain-6', title: 'CCA Domain 6: Information Technology',
            author: 'Synthesis Learning',
            description: 'EHRs, computer-assisted coding (CAC), the master patient index, data security, and the IT infrastructure that holds HIM together.',
            lessons: 1, duration: 5, progress: 0, category: 'cca-prep',
            lessonList: comingSoonLessons('EHR functionality, computer-assisted coding (CAC), the master patient index, and HIM data security'),
        },
        {
            id: 'cca-domain-7', title: 'CCA Domain 7: Reimbursement Methodologies',
            author: 'Synthesis Learning',
            description: 'MS-DRGs, APCs, RBRVS, prospective payment systems, and where the dollars actually come from.',
            lessons: 1, duration: 5, progress: 0, category: 'cca-prep',
            lessonList: comingSoonLessons('MS-DRGs, APCs, RBRVS, and the prospective payment systems that drive reimbursement'),
        },
        {
            id: 'cca-mock', title: 'CCA Mock Exam Bank & Test-Day Strategy',
            author: 'Synthesis Learning',
            description: '105-question mock exams in CCA format (90 min, 60% pass), domain-weighted, with item analysis after each.',
            lessons: 1, duration: 5, progress: 0, category: 'cca-prep',
            lessonList: comingSoonLessons('105-question domain-weighted CCA-format mock exams with item analysis and test-day strategy'),
        },
    ];

    window.CCA_PREP_CATEGORY = {
        id: 'cca-prep',
        name: 'CCA Cert Prep',
        icon: '🥇',
        color: '#8b5cf6',
        description: 'An 8-book track aligned to AHIMA\'s Certified Coding Associate exam blueprint. CCA is the recommended first coding credential after the MBC track — same exam-gated, spaced-repetition study system, organized by the 7 official CCA domains.',
        examCenterTrack: false,
        courseHub: true,
        parts: [
            { romanNum: 'Part I',   title: 'Foundation',                  bookIds: ['cca-domain-1'] },
            { romanNum: 'Part II',  title: 'Coding Systems',              bookIds: ['cca-domain-2','cca-domain-3','cca-domain-4'] },
            { romanNum: 'Part III', title: 'Compliance & Operations',     bookIds: ['cca-domain-5','cca-domain-6','cca-domain-7'] },
            { romanNum: 'Part IV',  title: 'Mock Exam',                   bookIds: ['cca-mock'] },
        ],
        books: BOOKS,
    };
})();
