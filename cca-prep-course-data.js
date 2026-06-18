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
{
    id: "cca-domain-1-lesson-4",
    title: "Roles in the HIM Department: RHIT, RHIA, CCS, CDI, and Where They Hand Off",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "The HIM Team You'll Work With",
        content: `The Health Information Management (HIM) department is a **multi-credentialed team** that turns clinical care into legally defensible, billable, reportable data. As a CCA, you sit inside this team and must know who does what — and who you escalate to.

The five core players: **RHIA** (Registered Health Information Administrator) typically leads the department; **RHIT** (Registered Health Information Technician) handles operations and analysis; **CCS** (Certified Coding Specialist) does inpatient/complex coding; **CCA** (Certified Coding Associate) handles outpatient and entry-level inpatient coding; and the **CDI Specialist** (Clinical Documentation Integrity) — often an RN or RHIA — queries physicians for clearer documentation **before** coding finalizes.

The handoff sequence matters: physician documents → CDI queries for specificity → coder assigns codes → auditor validates → biller drops the claim. Skipping or weakening any link costs the facility **DRG dollars, RAC takebacks, and quality scores**. Understanding the chain is a CCA exam staple.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="60" text-anchor="middle" fill="#ffd700" font-size="34" font-weight="bold">HIM Department Org Chart</text><text x="550" y="100" text-anchor="middle" fill="#888" font-size="18">Who reports to whom — and the credential behind each role</text><rect x="425" y="150" width="250" height="80" fill="#6366f1" rx="8"/><text x="550" y="185" text-anchor="middle" fill="#fff" font-size="20" font-weight="bold">HIM Director</text><text x="550" y="210" text-anchor="middle" fill="#fff" font-size="16">RHIA (bachelor's)</text><line x1="550" y1="230" x2="550" y2="280" stroke="#888" stroke-width="3"/><line x1="220" y1="280" x2="880" y2="280" stroke="#888" stroke-width="3"/><line x1="220" y1="280" x2="220" y2="320" stroke="#888" stroke-width="3"/><line x1="430" y1="280" x2="430" y2="320" stroke="#888" stroke-width="3"/><line x1="670" y1="280" x2="670" y2="320" stroke="#888" stroke-width="3"/><line x1="880" y1="280" x2="880" y2="320" stroke="#888" stroke-width="3"/><rect x="110" y="320" width="220" height="100" fill="#10b981" rx="8"/><text x="220" y="355" text-anchor="middle" fill="#fff" font-size="18" font-weight="bold">Coding Mgr</text><text x="220" y="380" text-anchor="middle" fill="#fff" font-size="14">RHIT or CCS</text><text x="220" y="402" text-anchor="middle" fill="#fff" font-size="13">Owns DRG accuracy</text><rect x="320" y="320" width="220" height="100" fill="#0ea5e9" rx="8"/><text x="430" y="355" text-anchor="middle" fill="#fff" font-size="18" font-weight="bold">CDI Manager</text><text x="430" y="380" text-anchor="middle" fill="#fff" font-size="14">RN or RHIA</text><text x="430" y="402" text-anchor="middle" fill="#fff" font-size="13">Queries MDs</text><rect x="560" y="320" width="220" height="100" fill="#f59e0b" rx="8"/><text x="670" y="355" text-anchor="middle" fill="#fff" font-size="18" font-weight="bold">ROI / Privacy</text><text x="670" y="380" text-anchor="middle" fill="#fff" font-size="14">RHIT + Privacy Off.</text><text x="670" y="402" text-anchor="middle" fill="#fff" font-size="13">HIPAA disclosures</text><rect x="770" y="320" width="220" height="100" fill="#8b5cf6" rx="8"/><text x="880" y="355" text-anchor="middle" fill="#fff" font-size="18" font-weight="bold">Data Quality</text><text x="880" y="380" text-anchor="middle" fill="#fff" font-size="14">RHIA / Analyst</text><text x="880" y="402" text-anchor="middle" fill="#fff" font-size="13">Audits + reports</text><rect x="110" y="460" width="220" height="80" fill="#1a1a2e" stroke="#10b981" stroke-width="2" rx="8"/><text x="220" y="490" text-anchor="middle" fill="#10b981" font-size="16" font-weight="bold">Coders</text><text x="220" y="515" text-anchor="middle" fill="#fff" font-size="13">CCA outpatient</text><text x="220" y="533" text-anchor="middle" fill="#fff" font-size="13">CCS inpatient</text><rect x="320" y="460" width="220" height="80" fill="#1a1a2e" stroke="#0ea5e9" stroke-width="2" rx="8"/><text x="430" y="490" text-anchor="middle" fill="#0ea5e9" font-size="16" font-weight="bold">CDI Specialists</text><text x="430" y="515" text-anchor="middle" fill="#fff" font-size="13">CCDS / CDIP</text><text x="430" y="533" text-anchor="middle" fill="#fff" font-size="13">Concurrent review</text><rect x="560" y="460" width="220" height="80" fill="#1a1a2e" stroke="#f59e0b" stroke-width="2" rx="8"/><text x="670" y="490" text-anchor="middle" fill="#f59e0b" font-size="16" font-weight="bold">ROI Clerks</text><text x="670" y="515" text-anchor="middle" fill="#fff" font-size="13">Process requests</text><text x="670" y="533" text-anchor="middle" fill="#fff" font-size="13">Track disclosures</text><rect x="770" y="460" width="220" height="80" fill="#1a1a2e" stroke="#8b5cf6" stroke-width="2" rx="8"/><text x="880" y="490" text-anchor="middle" fill="#8b5cf6" font-size="16" font-weight="bold">Analysts</text><text x="880" y="515" text-anchor="middle" fill="#fff" font-size="13">PEPPER, KPIs</text><text x="880" y="533" text-anchor="middle" fill="#fff" font-size="13">Registries</text><rect x="150" y="600" width="800" height="380" fill="#1a1a2e" stroke="#ffd700" stroke-width="2" rx="10"/><text x="550" y="640" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">Credential Quick Reference</text><line x1="170" y1="660" x2="930" y2="660" stroke="#ffd700" stroke-width="1"/><text x="190" y="695" fill="#ffd700" font-size="16" font-weight="bold">Credential</text><text x="380" y="695" fill="#ffd700" font-size="16" font-weight="bold">Education</text><text x="600" y="695" fill="#ffd700" font-size="16" font-weight="bold">Primary Focus</text><text x="190" y="730" fill="#fff" font-size="15">RHIA</text><text x="380" y="730" fill="#fff" font-size="15">Bachelor's + AHIMA exam</text><text x="600" y="730" fill="#fff" font-size="15">Mgmt, policy, compliance</text><text x="190" y="765" fill="#fff" font-size="15">RHIT</text><text x="380" y="765" fill="#fff" font-size="15">Associate's + AHIMA exam</text><text x="600" y="765" fill="#fff" font-size="15">Ops, analysis, QI</text><text x="190" y="800" fill="#fff" font-size="15">CCS</text><text x="380" y="800" fill="#fff" font-size="15">Coding exp + AHIMA exam</text><text x="600" y="800" fill="#fff" font-size="15">Inpatient + complex outpt</text><text x="190" y="835" fill="#fff" font-size="15">CCS-P</text><text x="380" y="835" fill="#fff" font-size="15">Physician practice focus</text><text x="600" y="835" fill="#fff" font-size="15">Pro-fee CPT/HCPCS</text><text x="190" y="870" fill="#fff" font-size="15">CCA</text><text x="380" y="870" fill="#fff" font-size="15">Entry-level AHIMA cert</text><text x="600" y="870" fill="#fff" font-size="15">Outpt + entry inpatient</text><text x="190" y="905" fill="#fff" font-size="15">CDIP / CCDS</text><text x="380" y="905" fill="#fff" font-size="15">Clinical bg + cert exam</text><text x="600" y="905" fill="#fff" font-size="15">MD queries, DRG capture</text><text x="190" y="940" fill="#fff" font-size="15">CHPS</text><text x="380" y="940" fill="#fff" font-size="15">Privacy/security exam</text><text x="600" y="940" fill="#fff" font-size="15">HIPAA program lead</text><text x="550" y="1040" text-anchor="middle" fill="#888" font-size="14">CCA = your entry point. CCS, RHIT, RHIA = your next steps after 1–3 years.</text></svg>`,
          caption: "HIM org chart with the seven credentials a CCA must recognize on exam day."
        }
      },
      {
        type: "concept",
        title: "The Coder–CDI Handoff: Where Queries Live",
        content: `**Clinical Documentation Integrity (CDI)** is the bridge between physician notes and codes. CDI specialists perform **concurrent review** — reading the chart while the patient is still admitted — and issue **compliant queries** when documentation is missing, vague, conflicting, or non-specific.

Per AHIMA/ACDIS guidance, a compliant query is **non-leading**, includes clinical indicators from the chart, and offers multiple reasonable options including "unable to determine." A leading query ("Patient has sepsis, correct?") is a **fraud risk** and a RAC red flag.

The coder picks up after discharge. If CDI's query is **answered** in a progress note or addendum, the coder uses that documentation. If **unanswered**, the coder issues a **retrospective query** or codes only what is documented. Coders **cannot code from a query alone** — the physician must restate it in the legal record.

Disagreements between CDI and coding go to the **physician advisor** or a **DRG reconciliation meeting**. Tracked metrics: query response rate (target >90%), agree rate, and **CMI** (Case Mix Index) impact.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="55" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold">CDI → Coder Handoff Workflow</text><text x="550" y="90" text-anchor="middle" fill="#888" font-size="18">Concurrent review, queries, and the rules that keep it compliant</text><rect x="80" y="140" width="940" height="140" fill="#1a1a2e" stroke="#0ea5e9" stroke-width="2" rx="8"/><text x="100" y="175" fill="#0ea5e9" font-size="20" font-weight="bold">PHASE 1 — CDI Concurrent Review (Day 1–Discharge)</text><text x="100" y="205" fill="#fff" font-size="15">• CDI reads H&amp;P, progress notes, labs, imaging within 24–48 hrs of admission</text><text x="100" y="228" fill="#fff" font-size="15">• Identifies missing specificity (e.g., "pneumonia" — what organism? aspiration?)</text><text x="100" y="251" fill="#fff" font-size="15">• Drafts compliant query: clinical indicators + multiple choices + "unable to determine"</text><text x="100" y="271" fill="#888" font-size="13">Target query response rate: &gt; 90%   |   Agree rate: 75–85%</text><rect x="80" y="300" width="940" height="140" fill="#1a1a2e" stroke="#10b981" stroke-width="2" rx="8"/><text x="100" y="335" fill="#10b981" font-size="20" font-weight="bold">PHASE 2 — Physician Response (in chart, not in query form)</text><text x="100" y="365" fill="#fff" font-size="15">• MD answers in progress note or addendum — query stays in CDI folder, not legal record</text><text x="100" y="388" fill="#fff" font-size="15">• Acceptable: clinical indicators support the diagnosis (e.g., SIRS criteria + source)</text><text x="100" y="411" fill="#fff" font-size="15">• Unacceptable: "yes" without clinical support → leading query, RAC risk</text><text x="100" y="431" fill="#888" font-size="13">Coder cannot use the query itself as a source — only the chart documentation</text><rect x="80" y="460" width="940" height="140" fill="#1a1a2e" stroke="#f59e0b" stroke-width="2" rx="8"/><text x="100" y="495" fill="#f59e0b" font-size="20" font-weight="bold">PHASE 3 — Coder Post-Discharge Review</text><text x="100" y="525" fill="#fff" font-size="15">• Verifies CDI's working DRG matches final documentation</text><text x="100" y="548" fill="#fff" font-size="15">• If documentation still unclear → retrospective query (same compliance rules)</text><text x="100" y="571" fill="#fff" font-size="15">• Assigns principal Dx, secondary Dx (CCs/MCCs), POA indicators, procedure codes</text><text x="100" y="591" fill="#888" font-size="13">Target DNFB (discharged not final billed) days: &lt; 5</text><rect x="80" y="620" width="940" height="140" fill="#1a1a2e" stroke="#ef4444" stroke-width="2" rx="8"/><text x="100" y="655" fill="#ef4444" font-size="20" font-weight="bold">PHASE 4 — Disagreement &amp; Reconciliation</text><text x="100" y="685" fill="#fff" font-size="15">• CDI working DRG ≠ coder final DRG → reconciliation meeting</text><text x="100" y="708" fill="#fff" font-size="15">• Physician advisor adjudicates clinical interpretation</text><text x="100" y="731" fill="#fff" font-size="15">• Outcome logged; trends feed MD education and query template refinement</text><text x="100" y="751" fill="#888" font-size="13">CMI shift logged for finance and quality reporting</text><rect x="80" y="790" width="940" height="270" fill="#1a1a2e" stroke="#ffd700" stroke-width="2" rx="8"/><text x="550" y="825" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">Compliant vs. Leading Query — Side by Side</text><line x1="550" y1="845" x2="550" y2="1045" stroke="#ffd700" stroke-width="1"/><text x="290" y="870" text-anchor="middle" fill="#10b981" font-size="18" font-weight="bold">COMPLIANT</text><text x="810" y="870" text-anchor="middle" fill="#ef4444" font-size="18" font-weight="bold">LEADING (do not send)</text><text x="100" y="905" fill="#fff" font-size="14">"WBC 18k, temp 39.2, BP 82/50,</text><text x="100" y="925" fill="#fff" font-size="14">lactate 4.5, blood cx pending.</text><text x="100" y="945" fill="#fff" font-size="14">Please document Dx if known:</text><text x="100" y="965" fill="#fff" font-size="14">a) sepsis  b) bacteremia</text><text x="100" y="985" fill="#fff" font-size="14">c) SIRS  d) other  e) unable</text><text x="100" y="1005" fill="#fff" font-size="14">to determine."</text><text x="600" y="905" fill="#fff" font-size="14">"Patient meets sepsis criteria.</text><text x="600" y="925" fill="#fff" font-size="14">Please document sepsis to</text><text x="600" y="945" fill="#fff" font-size="14">support DRG 871."</text><text x="600" y="985" fill="#ef4444" font-size="14">→ tells MD the answer</text><text x="600" y="1005" fill="#ef4444" font-size="14">→ mentions reimbursement</text></svg>`,
          caption: "Four-phase CDI–coder workflow with a compliant vs. leading query comparison."
        }
      },
      {
        type: "example",
        title: "A Real Handoff: Mrs. Patel's CHF Admission",
        content: `**Day 1, 14:00** — Mrs. Patel arrives in the ED with shortness of breath. Admitting MD writes "CHF exacerbation." That is **unspecified** in ICD-10-CM and maps to a lower-weighted DRG.

**Day 2, 09:00** — CDI specialist Tanya reviews. She sees BNP 1,840, EF 28% on echo, and IV Lasix. She drafts a compliant query: clinical indicators listed, options include **acute systolic, acute diastolic, acute on chronic systolic, acute on chronic combined, unable to determine**. She places the query in the EHR query queue and notifies the hospitalist.

**Day 2, 16:30** — Dr. Lee writes a progress note: "Acute on chronic systolic heart failure, EF 28%, responding to diuresis." Specific. Codeable.

**Day 5** — Patient discharged. Coder Marcus reviews. Principal Dx: **I50.23** (acute on chronic systolic HF). With the **MCC** capture, DRG shifts from **293** (relative weight ~0.67) to **291** (relative weight ~1.36) — roughly **double the reimbursement** and an accurate severity-of-illness score for quality reporting.

**Lesson**: Without the CDI query, the chart would have under-coded the patient's true severity and the hospital would have been **underpaid** for documented care delivered.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="55" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold">Case Study: Mrs. Patel's CHF Admission</text><text x="550" y="90" text-anchor="middle" fill="#888" font-size="18">How one CDI query nearly doubled the DRG weight</text><line x1="80" y1="160" x2="80" y2="780" stroke="#ffd700" stroke-width="3"/><circle cx="80" cy="180" r="10" fill="#6366f1"/><text x="110" y="175" fill="#6366f1" font-size="18" font-weight="bold">Day 1, 14:00 — ED Admission</text><text x="110" y="200" fill="#fff" font-size="14">Admitting Dx: "CHF exacerbation" (unspecified — I50.9)</text><text x="110" y="222" fill="#888" font-size="13">Maps to DRG 293, weight 0.67</text><circle cx="80" cy="270" r="10" fill="#0ea5e9"/><text x="110" y="265" fill="#0ea5e9" font-size="18" font-weight="bold">Day 2, 09:00 — CDI Review (Tanya)</text><text x="110" y="290" fill="#fff" font-size="14">Clinical indicators: BNP 1,840 • EF 28% • IV Lasix</text><text x="110" y="312" fill="#fff" font-size="14">Compliant query placed: 5 options + "unable to determine"</text><circle cx="80" cy="360" r="10" fill="#10b981"/><text x="110" y="355" fill="#10b981" font-size="18" font-weight="bold">Day 2, 16:30 — Physician Answers</text><text x="110" y="380" fill="#fff" font-size="14">Dr. Lee: "Acute on chronic systolic heart failure, EF 28%"</text><text x="110" y="402" fill="#fff" font-size="14">Documented in progress note (now part of legal record)</text><circle cx="80" cy="450" r="10" fill="#f59e0b"/><text x="110" y="445" fill="#f59e0b" font-size="18" font-weight="bold">Day 5 — Discharge &amp; Coder Picks Up</text><text x="110" y="470" fill="#fff" font-size="14">Marcus assigns I50.23 as principal Dx</text><text x="110" y="492" fill="#fff" font-size="14">Secondary: HTN, T2DM, CKD III (each evaluated for CC/MCC)</text><circle cx="80" cy="540" r="10" fill="#8b5cf6"/><text x="110" y="535" fill="#8b5cf6" font-size="18" font-weight="bold">Day 6 — Final Bill Drops</text><text x="110" y="560" fill="#fff" font-size="14">DRG 291 with MCC, weight 1.36</text><text x="110" y="582" fill="#fff" font-size="14">CMI for the unit ticks up, severity score reflects reality</text><rect x="80" y="630" width="940" height="140" fill="#1a1a2e" stroke="#ffd700" stroke-width="2" rx="8"/><text x="550" y="665" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">Financial &amp; Quality Impact</text><text x="290" y="700" text-anchor="middle" fill="#888" font-size="14">Without CDI</text><text x="810" y="700" text-anchor="middle" fill="#888" font-size="14">With CDI Query</text><text x="290" y="730" text-anchor="middle" fill="#ef4444" font-size="20" font-weight="bold">DRG 293 — 0.67 RW</text><text x="810" y="730" text-anchor="middle" fill="#10b981" font-size="20" font-weight="bold">DRG 291 — 1.36 RW</text><text x="290" y="758" text-anchor="middle" fill="#fff" font-size="14">~$5,200 reimbursement</text><text x="810" y="758" text-anchor="middle" fill="#fff" font-size="14">~$10,600 reimbursement</text><rect x="80" y="800" width="940" height="260" fill="#1a1a2e" stroke="#888" stroke-width="2" rx="8"/><text x="550" y="835" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">The Specificity Cascade</text><text x="180" y="880" text-anchor="middle" fill="#888" font-size="14">"CHF"</text><rect x="120" y="895" width="120" height="50" fill="#ef4444" rx="6"/><text x="180" y="927" text-anchor="middle" fill="#fff" font-size="16" font-weight="bold">I50.9</text><text x="180" y="975" text-anchor="middle" fill="#fff" font-size="13">Unspecified</text><text x="180" y="995" text-anchor="middle" fill="#888" font-size="12">No CC/MCC</text><text x="420" y="880" text-anchor="middle" fill="#888" font-size="14">"Systolic CHF"</text><rect x="360" y="895" width="120" height="50" fill="#f59e0b" rx="6"/><text x="420" y="927" text-anchor="middle" fill="#fff" font-size="16" font-weight="bold">I50.20</text><text x="420" y="975" text-anchor="middle" fill="#fff" font-size="13">Chronic only</text><text x="420" y="995" text-anchor="middle" fill="#888" font-size="12">CC</text><text x="660" y="880" text-anchor="middle" fill="#888" font-size="14">"Acute systolic"</text><rect x="600" y="895" width="120" height="50" fill="#0ea5e9" rx="6"/><text x="660" y="927" text-anchor="middle" fill="#fff" font-size="16" font-weight="bold">I50.21</text><text x="660" y="975" text-anchor="middle" fill="#fff" font-size="13">Acute only</text><text x="660" y="995" text-anchor="middle" fill="#888" font-size="12">MCC</text><text x="900" y="880" text-anchor="middle" fill="#888" font-size="14">"Acute on chronic"</text><rect x="840" y="895" width="120" height="50" fill="#10b981" rx="6"/><text x="900" y="927" text-anchor="middle" fill="#fff" font-size="16" font-weight="bold">I50.23</text><text x="900" y="975" text-anchor="middle" fill="#fff" font-size="13">Both captured</text><text x="900" y="995" text-anchor="middle" fill="#888" font-size="12">MCC — full SOI</text></svg>`,
          caption: "Day-by-day case timeline showing the financial swing one compliant CDI query creates."
        }
      },
      {
        type: "quiz",
        title: "Knowledge Check: HIM Roles & Handoffs",
        content: `Test your grasp of who does what — and what counts as a compliant query.`,
        question: "A coder discovers that the CDI specialist's query was answered with 'Yes' in the chart, but no clinical indicators were re-documented by the physician. What should the coder do?",
        options: [
          { text: "Code the diagnosis based on the 'Yes' answer — the query is part of the chart.", correct: false },
          { text: "Code only what is independently documented in the legal record; if needed, issue a retrospective query for clinical support.", correct: true },
          { text: "Assume the CDI specialist verified the clinical indicators and code the diagnosis.", correct: false },
          { text: "Escalate directly to the RAC auditor to pre-clear the code.", correct: false }
        ],
        explanation: `A standalone 'Yes' to a query is **not codeable**. AHIMA/ACDIS compliance guidance requires the diagnosis to appear in the legal record (progress note, discharge summary, or addendum) with **supporting clinical indicators**. The query form itself is not part of the legal health record at most facilities. The correct action is a **retrospective query** with the compliant non-leading format. RAC auditors are external — coders never 'pre-clear' codes with them.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="60" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold">Query Response Decision Tree</text><text x="550" y="100" text-anchor="middle" fill="#888" font-size="18">What can a coder actually use?</text><rect x="400" y="150" width="300" height="80" fill="#6366f1" rx="8"/><text x="550" y="185" text-anchor="middle" fill="#fff" font-size="20" font-weight="bold">Query placed in EHR</text><text x="550" y="210" text-anchor="middle" fill="#fff" font-size="15">Physician responds</text><line x1="550" y1="230" x2="550" y2="280" stroke="#fff" stroke-width="2"/><polygon points="540,275 560,275 550,290" fill="#fff"/><polygon points="400,300 700,300 550,400" fill="#1a1a2e" stroke="#ffd700" stroke-width="2"/><text x="550" y="335" text-anchor="middle" fill="#ffd700" font-size="16" font-weight="bold">Did MD re-document</text><text x="550" y="358" text-anchor="middle" fill="#ffd700" font-size="16" font-weight="bold">in chart with</text><text x="550" y="381" text-anchor="middle" fill="#ffd700" font-size="16" font-weight="bold">clinical indicators?</text><line x1="450" y1="400" x2="280" y2="470" stroke="#10b981" stroke-width="2"/><text x="340" y="445" fill="#10b981" font-size="16" font-weight="bold">YES</text><line x1="650" y1="400" x2="820" y2="470" stroke="#ef4444" stroke-width="2"/><text x="760" y="445" fill="#ef4444" font-size="16" font-weight="bold">NO</text><rect x="120" y="480" width="320" height="180" fill="#1a1a2e" stroke="#10b981" stroke-width="2" rx="8"/><text x="280" y="515" text-anchor="middle" fill="#10b981" font-size="18" font-weight="bold">CODE IT</text><text x="140" y="545" fill="#fff" font-size="14">• Use the documented Dx</text><text x="140" y="570" fill="#fff" font-size="14">• Apply POA indicator</text><text x="140" y="595" fill="#fff" font-size="14">• Evaluate CC/MCC status</text><text x="140" y="620" fill="#fff" font-size="14">• Mark query closed-agree</text><text x="140" y="650" fill="#888" font-size="13">Query form stays in CDI folder</text><rect x="660" y="480" width="320" height="180" fill="#1a1a2e" stroke="#ef4444" stroke-width="2" rx="8"/><text x="820" y="515" text-anchor="middle" fill="#ef4444" font-size="18" font-weight="bold">RETROSPECTIVE QUERY</text><text x="680" y="545" fill="#fff" font-size="14">• Re-issue compliant query</text><text x="680" y="570" fill="#fff" font-size="14">• Include clinical indicators</text><text x="680" y="595" fill="#fff" font-size="14">• Multi-choice + "undet."</text><text x="680" y="620" fill="#fff" font-size="14">• If no response → code only</text><text x="680" y="645" fill="#fff" font-size="14">  what's documented</text><rect x="150" y="710" width="800" height="180" fill="#1a1a2e" stroke="#ffd700" stroke-width="2" rx="8"/><text x="550" y="745" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">Three CCA Exam Traps</text><text x="180" y="780" fill="#ef4444" font-size="15" font-weight="bold">TRAP 1:</text><text x="280" y="780" fill="#fff" font-size="14">Coding from a "Yes" answer alone — query is NOT part of legal record</text><text x="180" y="815" fill="#ef4444" font-size="15" font-weight="bold">TRAP 2:</text><text x="280" y="815" fill="#fff" font-size="14">Sending a leading query ("Patient has sepsis, correct?") — RAC fraud risk</text><text x="180" y="850" fill="#ef4444" font-size="15" font-weight="bold">TRAP 3:</text><text x="280" y="850" fill="#fff" font-size="14">Mentioning reimbursement or DRG impact in the query text — non-compliant</text><rect x="150" y="920" width="800" height="120" fill="#1a1a2e" stroke="#888" stroke-width="2" rx="8"/><text x="550" y="955" text-anchor="middle" fill="#ffd700" font-size="18" font-weight="bold">Compliant Query Checklist (AHIMA/ACDIS 2022)</text><text x="180" y="985" fill="#fff" font-size="14">☐ Clinical indicators listed   ☐ Multi-choice + "unable to determine"</text><text x="180" y="1010" fill="#fff" font-size="14">☐ Non-leading language        ☐ No reference to reimbursement or DRG</text></svg>`,
          caption: "Decision tree plus the three CCA exam traps around query responses."
        }
      },
      {
        type: "application",
        title: "Apply It: Mapping Your Daily Workflow",
        content: `**Tomorrow on the job**, you can apply this lesson in three concrete ways:

**1. Identify your handoff partners.** On day one of any HIM job, ask: "Who is my CDI lead? Who is the physician advisor? Where do I route disagreements?" Write the names down. **Knowing the chain shortens your DNFB days.**

**2. Audit your own queries (or the ones you receive).** Use the AHIMA/ACDIS compliant-query checklist: clinical indicators present, multiple choices offered, "unable to determine" included, no reimbursement language. If you receive a leading query from CDI, **push back** — it protects you both from RAC findings.

**3. Track the metrics that matter.** Ask coding leadership for your monthly **query agree rate, CMI trend, and DNFB days**. These three numbers tell you whether the coder–CDI handoff is healthy. Falling agree rate + rising DNFB = a process problem to surface in your next team huddle.

On the **CCA exam**, expect 2–4 questions on roles (RHIA vs RHIT vs CCS), 1–2 on compliant query criteria, and 1 on coder authority limits. Knowing the org chart and the query rules will earn you those points cold.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="55" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold">Your CCA Action Plan — Week 1 on the Job</text><text x="550" y="90" text-anchor="middle" fill="#888" font-size="18">Three workflows + the metrics that prove they're working</text><rect x="80" y="140" width="940" height="180" fill="#1a1a2e" stroke="#6366f1" stroke-width="2" rx="8"/><text x="100" y="175" fill="#6366f1" font-size="22" font-weight="bold">1. Map Your Handoff Partners</text><text x="100" y="210" fill="#fff" font-size="15">☐ CDI lead's name + extension</text><text x="100" y="235" fill="#fff" font-size="15">☐ Physician advisor (the MD who arbitrates Dx disagreements)</text><text x="100" y="260" fill="#fff" font-size="15">☐ DRG reconciliation meeting schedule (weekly? monthly?)</text><text x="100" y="285" fill="#fff" font-size="15">☐ Auditor escalation path (internal QI → external RAC response)</text><text x="100" y="310" fill="#888" font-size="13">Knowing names cuts your DNFB days by days, not hours.</text><rect x="80" y="340" width="940" height="180" fill="#1a1a2e" stroke="#0ea5e9" stroke-width="2" rx="8"/><text x="100" y="375" fill="#0ea5e9" font-size="22" font-weight="bold">2. Audit Every Query Against the Checklist</text><text x="100" y="410" fill="#fff" font-size="15">☐ Clinical indicators listed (labs, vitals, imaging)</text><text x="100" y="435" fill="#fff" font-size="15">☐ Multiple reasonable options + "unable to determine"</text><text x="100" y="460" fill="#fff" font-size="15">☐ Non-leading wording (no "patient has X, correct?")</text><text x="100" y="485" fill="#fff" font-size="15">☐ Zero reference to DRG, payment, or reimbursement</text><text x="100" y="510" fill="#888" font-size="13">If a query fails the checklist, route it back to CDI before answering.</text><rect x="80" y="540" width="940" height="180" fill="#1a1a2e" stroke="#10b981" stroke-width="2" rx="8"/><text x="100" y="575" fill="#10b981" font-size="22" font-weight="bold">3. Track the Three Numbers That Matter</text><text x="100" y="610" fill="#fff" font-size="15">☐ Query agree rate — target 75–85%</text><text x="100" y="635" fill="#fff" font-size="15">☐ CMI trend (Case Mix Index — month over month)</text><text x="100" y="660" fill="#fff" font-size="15">☐ DNFB days — target &lt; 5</text><text x="100" y="685" fill="#888" font-size="13">Falling agree rate + rising DNFB = process broken. Raise it in the huddle.</text><rect x="80" y="740" width="940" height="300" fill="#1a1a2e" stroke="#ffd700" stroke-width="2" rx="8"/><text x="550" y="775" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">CCA Exam Score Map for This Lesson</text><line x1="550" y1="790" x2="550" y2="1020" stroke="#ffd700" stroke-width="1"/><text x="290" y="820" text-anchor="middle" fill="#ffd700" font-size="18" font-weight="bold">Likely Question Type</text><text x="810" y="820" text-anchor="middle" fill="#ffd700" font-size="18" font-weight="bold">How to Lock It In</text><text x="100" y="860" fill="#fff" font-size="15">RHIA vs RHIT vs CCS scope</text><text x="600" y="860" fill="#fff" font-size="15">Memorize the credential table</text><text x="100" y="895" fill="#fff" font-size="15">Compliant query elements</text><text x="600" y="895" fill="#fff" font-size="15">Recite the 4-item checklist</text><text x="100" y="930" fill="#fff" font-size="15">Coder authority limits</text><text x="600" y="930" fill="#fff" font-size="15">"Code only what's in the chart"</text><text x="100" y="965" fill="#fff" font-size="15">Leading vs non-leading query</text><text x="600" y="965" fill="#fff" font-size="15">Spot reimbursement language</text><text x="100" y="1000" fill="#fff" font-size="15">Retrospective query trigger</text><text x="600" y="1000" fill="#fff" font-size="15">Unanswered = retro, not skip</text></svg>`,
          caption: "Three on-the-job workflows mapped to the exam questions they will earn you."
        }
      }
    ]
  },
  {
    id: "cca-domain-1-lesson-5",
    title: "Record Retention, Destruction, and Subpoena Response",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "How Long Do We Keep It — and How Do We Throw It Away?",
        content: `Every medical record is eventually retired or destroyed — but **when**, **how**, and **by whom** are tightly regulated. Get it wrong and the facility faces **HIPAA fines, state board sanctions, malpractice exposure, and Medicare repayment demands**.

Three sources of law govern retention:
- **Federal HIPAA rule**: keep HIPAA-related **documentation** (policies, accountings of disclosure, NPP acknowledgments) for **6 years** from creation or last effective date.
- **Federal Medicare rule (CMS CoP)**: keep the **medical record** itself for **at least 5 years** (longer for some cost-report items).
- **State law**: usually **stricter** — commonly **10 years from last encounter for adults**, **age of majority + statute of limitations for minors** (often age 21 or 25), and **permanent** for some core data (master patient index, birth/death records).

When federal and state conflict, **the stricter one wins**. AHIMA recommends 10 years for adults and minor age of majority + statute as a safe national default.

Destruction must be **documented** in a destruction log, performed by a **qualified vendor**, and **certified** — no exceptions.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="55" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold">Retention Requirements at a Glance</text><text x="550" y="90" text-anchor="middle" fill="#888" font-size="18">Federal vs state vs AHIMA — and which one actually applies</text><rect x="80" y="140" width="940" height="220" fill="#1a1a2e" stroke="#6366f1" stroke-width="2" rx="8"/><text x="550" y="175" text-anchor="middle" fill="#6366f1" font-size="22" font-weight="bold">FEDERAL FLOORS</text><line x1="100" y1="195" x2="1000" y2="195" stroke="#6366f1" stroke-width="1"/><text x="120" y="225" fill="#ffd700" font-size="16" font-weight="bold">HIPAA documentation</text><text x="500" y="225" fill="#fff" font-size="15">6 years from creation or last effective date</text><text x="120" y="255" fill="#ffd700" font-size="16" font-weight="bold">Medicare CoP (record)</text><text x="500" y="255" fill="#fff" font-size="15">5 years minimum</text><text x="120" y="285" fill="#ffd700" font-size="16" font-weight="bold">Medicare cost reports</text><text x="500" y="285" fill="#fff" font-size="15">5 years from closure (some items 10)</text><text x="120" y="315" fill="#ffd700" font-size="16" font-weight="bold">Medicare Advantage / MA</text><text x="500" y="315" fill="#fff" font-size="15">10 years</text><text x="120" y="345" fill="#ffd700" font-size="16" font-weight="bold">OSHA exposure records</text><text x="500" y="345" fill="#fff" font-size="15">30 years (employee health)</text><rect x="80" y="380" width="940" height="220" fill="#1a1a2e" stroke="#0ea5e9" stroke-width="2" rx="8"/><text x="550" y="415" text-anchor="middle" fill="#0ea5e9" font-size="22" font-weight="bold">STATE LAW (typical ranges — verify yours)</text><line x1="100" y1="435" x2="1000" y2="435" stroke="#0ea5e9" stroke-width="1"/><text x="120" y="465" fill="#ffd700" font-size="16" font-weight="bold">Adult records</text><text x="500" y="465" fill="#fff" font-size="15">7–10 years from last encounter</text><text x="120" y="495" fill="#ffd700" font-size="16" font-weight="bold">Minor records</text><text x="500" y="495" fill="#fff" font-size="15">Age of majority (18) + SoL — often age 21–25</text><text x="120" y="525" fill="#ffd700" font-size="16" font-weight="bold">Master Patient Index</text><text x="500" y="525" fill="#fff" font-size="15">PERMANENT</text><text x="120" y="555" fill="#ffd700" font-size="16" font-weight="bold">Birth, death, surgical reg.</text><text x="500" y="555" fill="#fff" font-size="15">PERMANENT</text><text x="120" y="585" fill="#ffd700" font-size="16" font-weight="bold">Mammography</text><text x="500" y="585" fill="#fff" font-size="15">5–10 years (MQSA federal floor 5)</text><rect x="80" y="620" width="940" height="170" fill="#1a1a2e" stroke="#10b981" stroke-width="2" rx="8"/><text x="550" y="655" text-anchor="middle" fill="#10b981" font-size="22" font-weight="bold">AHIMA RECOMMENDED (safe national default)</text><line x1="100" y1="675" x2="1000" y2="675" stroke="#10b981" stroke-width="1"/><text x="120" y="705" fill="#fff" font-size="15">• Adult patient records: 10 years from last encounter</text><text x="120" y="730" fill="#fff" font-size="15">• Minor records: age of majority + statute of limitations (verify state)</text><text x="120" y="755" fill="#fff" font-size="15">• Diagnostic images: 5 years (10 for mammography)</text><text x="120" y="780" fill="#fff" font-size="15">• Disease index / MPI: PERMANENT</text><rect x="80" y="810" width="940" height="230" fill="#1a1a2e" stroke="#ffd700" stroke-width="3" rx="10"/><text x="550" y="850" text-anchor="middle" fill="#ffd700" font-size="24" font-weight="bold">THE RULE: Stricter Law Wins</text><text x="550" y="890" text-anchor="middle" fill="#fff" font-size="16">Federal HIPAA = 6 yrs   |   State X = 10 yrs   →   keep 10 yrs</text><text x="550" y="920" text-anchor="middle" fill="#fff" font-size="16">Federal Medicare = 5 yrs   |   State Y = 7 yrs   →   keep 7 yrs</text><text x="550" y="975" text-anchor="middle" fill="#ef4444" font-size="18" font-weight="bold">Never destroy a record under active litigation hold</text><text x="550" y="1010" text-anchor="middle" fill="#888" font-size="15">Litigation hold suspends the destruction schedule until counsel releases it</text></svg>`,
          caption: "Federal floors, state norms, AHIMA defaults, and the 'stricter wins' rule on one page."
        }
      },
      {
        type: "concept",
        title: "Destruction: Methods, Logs, and Witnesses",
        content: `When a record reaches end-of-retention, **how** you destroy it depends on the medium — and **proof of destruction** is legally required.

**Paper**: shredding (cross-cut preferred), pulverizing, or incineration. Recycling alone is NOT destruction.

**Microfilm/microfiche**: pulverizing or chemical recycling — never simple disposal.

**Electronic media** (hard drives, SSDs, USB, tapes): **overwriting** (DoD 3-pass minimum), **degaussing** (magnetic media only — useless on SSDs), or **physical destruction** (shredding, melting, pulverizing). NIST SP 800-88 is the federal standard.

**Cloud/EHR data**: contractually require the vendor/Business Associate to **purge and certify** when service ends.

The **destruction log** (kept **permanently**) must record: patient identifier or record range, dates of service covered, date of destruction, method, witness names, vendor name, and a **Certificate of Destruction** from the vendor. Without the log, the facility cannot prove records were destroyed lawfully — and a subpoena later for those records can become a **spoliation** claim if destruction can't be documented.

The **HIM director** approves the destruction schedule; **two witnesses** sign the log; the **vendor** issues the certificate.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="55" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold">Destruction Methods by Medium</text><text x="550" y="90" text-anchor="middle" fill="#888" font-size="18">Match the method to the media — and log everything</text><rect x="80" y="140" width="220" height="220" fill="#1a1a2e" stroke="#6366f1" stroke-width="2" rx="8"/><text x="190" y="180" text-anchor="middle" fill="#6366f1" font-size="20" font-weight="bold">PAPER</text><text x="100" y="215" fill="#10b981" font-size="14">✓ Cross-cut shred</text><text x="100" y="240" fill="#10b981" font-size="14">✓ Pulverize</text><text x="100" y="265" fill="#10b981" font-size="14">✓ Incinerate</text><text x="100" y="295" fill="#ef4444" font-size="14">✗ Recycle bin</text><text x="100" y="320" fill="#ef4444" font-size="14">✗ Trash</text><text x="100" y="345" fill="#888" font-size="12">Cross-cut strips &lt; 5/8"</text><rect x="320" y="140" width="220" height="220" fill="#1a1a2e" stroke="#0ea5e9" stroke-width="2" rx="8"/><text x="430" y="180" text-anchor="middle" fill="#0ea5e9" font-size="20" font-weight="bold">MICROFILM</text><text x="340" y="215" fill="#10b981" font-size="14">✓ Pulverize</text><text x="340" y="240" fill="#10b981" font-size="14">✓ Chemical recycle</text><text x="340" y="275" fill="#ef4444" font-size="14">✗ Simple disposal</text><text x="340" y="300" fill="#ef4444" font-size="14">✗ Recycle bin</text><text x="340" y="335" fill="#888" font-size="12">Image still legible if</text><text x="340" y="350" fill="#888" font-size="12">cut, not pulverized</text><rect x="560" y="140" width="220" height="220" fill="#1a1a2e" stroke="#10b981" stroke-width="2" rx="8"/><text x="670" y="180" text-anchor="middle" fill="#10b981" font-size="20" font-weight="bold">HDD / TAPE</text><text x="580" y="215" fill="#10b981" font-size="14">✓ Overwrite 3-pass</text><text x="580" y="240" fill="#10b981" font-size="14">✓ Degauss (magnetic)</text><text x="580" y="265" fill="#10b981" font-size="14">✓ Physical shred</text><text x="580" y="295" fill="#ef4444" font-size="14">✗ Quick format</text><text x="580" y="320" fill="#ef4444" font-size="14">✗ Delete file</text><text x="580" y="350" fill="#888" font-size="12">NIST 800-88 standard</text><rect x="800" y="140" width="220" height="220" fill="#1a1a2e" stroke="#f59e0b" stroke-width="2" rx="8"/><text x="910" y="180" text-anchor="middle" fill="#f59e0b" font-size="20" font-weight="bold">SSD / CLOUD</text><text x="820" y="215" fill="#10b981" font-size="14">✓ Crypto-erase</text><text x="820" y="240" fill="#10b981" font-size="14">✓ Physical shred</text><text x="820" y="265" fill="#10b981" font-size="14">✓ BA cert. purge</text><text x="820" y="295" fill="#ef4444" font-size="14">✗ Degauss (no mag)</text><text x="820" y="320" fill="#ef4444" font-size="14">✗ Overwrite alone</text><text x="820" y="350" fill="#888" font-size="12">SSD wear-leveling</text><rect x="80" y="390" width="940" height="280" fill="#1a1a2e" stroke="#ffd700" stroke-width="2" rx="8"/><text x="550" y="425" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">Destruction Log — Required Fields (kept PERMANENTLY)</text><line x1="100" y1="445" x2="1000" y2="445" stroke="#ffd700" stroke-width="1"/><text x="120" y="480" fill="#fff" font-size="15">☐ Patient identifier OR record range</text><text x="120" y="510" fill="#fff" font-size="15">☐ Dates of service covered</text><text x="120" y="540" fill="#fff" font-size="15">☐ Date of destruction</text><text x="120" y="570" fill="#fff" font-size="15">☐ Method (shred, pulverize, overwrite, etc.)</text><text x="120" y="600" fill="#fff" font-size="15">☐ Vendor name &amp; address</text><text x="120" y="630" fill="#fff" font-size="15">☐ Two witness signatures (one is HIM staff)</text><text x="120" y="660" fill="#fff" font-size="15">☐ Vendor Certificate of Destruction attached</text><rect x="80" y="700" width="940" height="340" fill="#1a1a2e" stroke="#ef4444" stroke-width="2" rx="8"/><text x="550" y="735" text-anchor="middle" fill="#ef4444" font-size="22" font-weight="bold">Spoliation Risk — Why the Log Matters</text><line x1="100" y1="755" x2="1000" y2="755" stroke="#ef4444" stroke-width="1"/><text x="120" y="790" fill="#fff" font-size="15">Spoliation = destruction of evidence relevant to litigation</text><text x="120" y="820" fill="#fff" font-size="15">Even routine destruction is spoliation if a litigation hold was in effect</text><text x="120" y="850" fill="#fff" font-size="15">Without a destruction log, you cannot prove the record was lawfully destroyed</text><text x="120" y="880" fill="#fff" font-size="15">Courts may instruct juries to assume the missing record was unfavorable</text><text x="550" y="935" text-anchor="middle" fill="#ffd700" font-size="18" font-weight="bold">Litigation hold workflow:</text><text x="120" y="975" fill="#fff" font-size="14">1. Counsel issues hold → 2. HIM flags records → 3. Destruction paused →</text><text x="120" y="1000" fill="#fff" font-size="14">4. Hold released in writing → 5. Resume normal retention schedule</text><text x="120" y="1030" fill="#888" font-size="13">Never rely on email alone — formal written release is required</text></svg>`,
          caption: "Method-by-medium destruction matrix, required log fields, and the spoliation risk that makes the log non-negotiable."
        }
      },
      {
        type: "example",
        title: "Subpoena vs Court Order vs Authorization",
        content: `A subpoena lands on your desk at 14:47 demanding "all records for John Doe, DOB 04/12/1971." **What you do in the next 24 hours determines whether you protect the patient or trigger a HIPAA breach.**

There are three legal instruments that compel release — and they have **very different** PHI rules:

**Authorization (HIPAA-compliant)**: signed by the patient or personal representative. Includes the **6 required elements** (specific description, named recipient, expiration, signature, etc.). **Release as authorized — full stop.**

**Subpoena (attorney-issued or grand jury)**: a **lawyer's** request, not a judge's order. HIPAA §164.512(e) requires either (a) **patient notice + opportunity to object**, (b) a **qualified protective order**, or (c) **patient authorization**. **Without one of those three, do NOT release.** Notify the patient by mail or counsel-approved method and document the contact.

**Court Order (judge-signed)**: HIPAA permits release **only of the PHI specifically described** in the order. Even then, **do not release psychotherapy notes, substance use treatment (42 CFR Part 2), or genetic information** without a separate order naming those categories.

**Always**: log the disclosure in the **Accounting of Disclosures**, redact non-relevant patients (e.g., roommates in nursing notes), and **never release the original** — certified copies only.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="55" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold">Authorization vs Subpoena vs Court Order</text><text x="550" y="90" text-anchor="middle" fill="#888" font-size="18">Three legal instruments, three very different release rules</text><rect x="80" y="140" width="300" height="320" fill="#1a1a2e" stroke="#10b981" stroke-width="2" rx="8"/><text x="230" y="180" text-anchor="middle" fill="#10b981" font-size="22" font-weight="bold">AUTHORIZATION</text><text x="230" y="205" text-anchor="middle" fill="#888" font-size="14">(signed by patient)</text><text x="100" y="240" fill="#ffd700" font-size="14" font-weight="bold">Required elements:</text><text x="100" y="265" fill="#fff" font-size="13">• Specific description of PHI</text><text x="100" y="285" fill="#fff" font-size="13">• Person/entity to receive</text><text x="100" y="305" fill="#fff" font-size="13">• Purpose of disclosure</text><text x="100" y="325" fill="#fff" font-size="13">• Expiration date/event</text><text x="100" y="345" fill="#fff" font-size="13">• Patient signature + date</text><text x="100" y="365" fill="#fff" font-size="13">• Right to revoke notice</text><text x="100" y="395" fill="#10b981" font-size="14" font-weight="bold">Action: release as auth'd</text><text x="100" y="430" fill="#888" font-size="12">Log in Accounting? NO</text><text x="100" y="448" fill="#888" font-size="12">(TPO and auth'd disclosures</text><rect x="400" y="140" width="300" height="320" fill="#1a1a2e" stroke="#f59e0b" stroke-width="2" rx="8"/><text x="550" y="180" text-anchor="middle" fill="#f59e0b" font-size="22" font-weight="bold">SUBPOENA</text><text x="550" y="205" text-anchor="middle" fill="#888" font-size="14">(attorney-issued)</text><text x="420" y="240" fill="#ffd700" font-size="14" font-weight="bold">Must have ONE of:</text><text x="420" y="265" fill="#fff" font-size="13">a) Patient notice + 14 days</text><text x="420" y="285" fill="#fff" font-size="13">   to object  OR</text><text x="420" y="305" fill="#fff" font-size="13">b) Qualified protective</text><text x="420" y="325" fill="#fff" font-size="13">   order  OR</text><text x="420" y="345" fill="#fff" font-size="13">c) Patient authorization</text><text x="420" y="385" fill="#ef4444" font-size="14" font-weight="bold">Without one: DO NOT release</text><text x="420" y="420" fill="#888" font-size="12">HIPAA §164.512(e)</text><text x="420" y="438" fill="#888" font-size="12">Log in Accounting: YES</text><rect x="720" y="140" width="300" height="320" fill="#1a1a2e" stroke="#ef4444" stroke-width="2" rx="8"/><text x="870" y="180" text-anchor="middle" fill="#ef4444" font-size="22" font-weight="bold">COURT ORDER</text><text x="870" y="205" text-anchor="middle" fill="#888" font-size="14">(judge-signed)</text><text x="740" y="240" fill="#ffd700" font-size="14" font-weight="bold">Release rules:</text><text x="740" y="265" fill="#fff" font-size="13">• Only PHI described in</text><text x="740" y="285" fill="#fff" font-size="13">  the order</text><text x="740" y="305" fill="#fff" font-size="13">• No psych notes unless</text><text x="740" y="325" fill="#fff" font-size="13">  separately ordered</text><text x="740" y="345" fill="#fff" font-size="13">• No 42 CFR Part 2 (SUD)</text><text x="740" y="365" fill="#fff" font-size="13">  unless separately ordered</text><text x="740" y="395" fill="#10b981" font-size="14" font-weight="bold">Action: release the named PHI</text><text x="740" y="430" fill="#888" font-size="12">Log in Accounting: YES</text><text x="740" y="448" fill="#888" font-size="12">Notify patient unless</text><rect x="80" y="490" width="940" height="240" fill="#1a1a2e" stroke="#ffd700" stroke-width="2" rx="8"/><text x="550" y="525" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">The Subpoena 24-Hour Workflow</text><line x1="100" y1="545" x2="1000" y2="545" stroke="#ffd700" stroke-width="1"/><text x="120" y="580" fill="#fff" font-size="15">1. Time-stamp receipt — start the clock</text><text x="120" y="610" fill="#fff" font-size="15">2. Validate: is it an authorization, subpoena, OR court order? Wrong category = wrong response</text><text x="120" y="640" fill="#fff" font-size="15">3. Notify Privacy Officer + counsel within the same business day</text><text x="120" y="670" fill="#fff" font-size="15">4. If subpoena — confirm one of the three §164.512(e) conditions before releasing</text><text x="120" y="700" fill="#fff" font-size="15">5. Log every disclosure in the Accounting of Disclosures (kept 6 years)</text><rect x="80" y="760" width="940" height="280" fill="#1a1a2e" stroke="#8b5cf6" stroke-width="2" rx="8"/><text x="550" y="795" text-anchor="middle" fill="#8b5cf6" font-size="22" font-weight="bold">Super-Protected Categories — Need Their Own Authorization/Order</text><line x1="100" y1="815" x2="1000" y2="815" stroke="#8b5cf6" stroke-width="1"/><text x="120" y="850" fill="#fff" font-size="15">• Psychotherapy notes (HIPAA — separate auth required)</text><text x="120" y="880" fill="#fff" font-size="15">• Substance use disorder treatment (42 CFR Part 2 — separate consent)</text><text x="120" y="910" fill="#fff" font-size="15">• HIV / AIDS test results (state law — separate consent typical)</text><text x="120" y="940" fill="#fff" font-size="15">• Genetic test results (GINA — separate auth)</text><text x="120" y="970" fill="#fff" font-size="15">• Mental health inpatient (state law varies — often stricter)</text><text x="120" y="1000" fill="#fff" font-size="15">• Minor's reproductive / STI care (state-specific consent rules)</text><text x="120" y="1025" fill="#888" font-size="13">A general subpoena does NOT reach these categories without specific naming.</text></svg>`,
          caption: "Side-by-side comparison of the three release instruments and the super-protected categories that escape them."
        }
      },
      {
        type: "quiz",
        title: "Knowledge Check: Subpoena Response",
        content: `Apply the §164.512(e) rules to a real-world subpoena scenario.`,
        question: "Your facility receives a subpoena from an attorney in a civil case demanding all records for a former patient. The subpoena includes no court order, no patient authorization, and no proof that the patient was notified. What is the correct response under HIPAA §164.512(e)?",
        options: [
          { text: "Release the records — the subpoena is a valid legal document and HIPAA permits disclosure for legal proceedings.", correct: false },
          { text: "Refuse to acknowledge the subpoena until the patient signs a HIPAA authorization.", correct: false },
          { text: "Do not release. Contact the requesting attorney for satisfactory assurance of patient notice OR a qualified protective order — and notify your Privacy Officer.", correct: true },
          { text: "Release a redacted version with all PHI removed.", correct: false }
        ],
        explanation: `HIPAA §164.512(e) is explicit: an attorney-issued subpoena, **alone**, does not authorize PHI release. The covered entity must obtain **satisfactory assurance** of one of three things: (1) the patient was notified and given time to object, (2) a **qualified protective order** is in place, or (3) the patient signed an **authorization**. Without one of those, releasing is a **HIPAA violation**. You also can't "refuse to acknowledge" — you must respond, but the response is to request the missing element through counsel. A redacted release is meaningless when the entire record is the subject of the subpoena.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="55" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold">Subpoena Decision Tree (HIPAA §164.512(e))</text><text x="550" y="95" text-anchor="middle" fill="#888" font-size="18">Three doors to lawful release — pick one or stop</text><rect x="400" y="140" width="300" height="70" fill="#6366f1" rx="8"/><text x="550" y="175" text-anchor="middle" fill="#fff" font-size="18" font-weight="bold">Subpoena received</text><text x="550" y="198" text-anchor="middle" fill="#fff" font-size="14">Time-stamp + log it</text><line x1="550" y1="210" x2="550" y2="250" stroke="#fff" stroke-width="2"/><polygon points="540,245 560,245 550,260" fill="#fff"/><polygon points="400,270 700,270 550,370" fill="#1a1a2e" stroke="#ffd700" stroke-width="2"/><text x="550" y="305" text-anchor="middle" fill="#ffd700" font-size="15" font-weight="bold">Does ONE of the three</text><text x="550" y="325" text-anchor="middle" fill="#ffd700" font-size="15" font-weight="bold">conditions apply?</text><text x="550" y="350" text-anchor="middle" fill="#888" font-size="13">notice / QPO / auth</text><line x1="400" y1="350" x2="180" y2="430" stroke="#10b981" stroke-width="2"/><text x="260" y="405" fill="#10b981" font-size="16" font-weight="bold">YES</text><line x1="700" y1="350" x2="920" y2="430" stroke="#ef4444" stroke-width="2"/><text x="840" y="405" fill="#ef4444" font-size="16" font-weight="bold">NO</text><rect x="60" y="440" width="240" height="200" fill="#1a1a2e" stroke="#10b981" stroke-width="2" rx="8"/><text x="180" y="475" text-anchor="middle" fill="#10b981" font-size="16" font-weight="bold">RELEASE</text><text x="80" y="505" fill="#fff" font-size="13">• Certified copies only</text><text x="80" y="528" fill="#fff" font-size="13">• Minimum necessary</text><text x="80" y="550" fill="#fff" font-size="13">• Exclude super-prot.</text><text x="80" y="572" fill="#fff" font-size="13">• Redact other patients</text><text x="80" y="595" fill="#fff" font-size="13">• Log Acc. of Disclosure</text><text x="80" y="625" fill="#888" font-size="12">Keep cover letter</text><rect x="800" y="440" width="240" height="200" fill="#1a1a2e" stroke="#ef4444" stroke-width="2" rx="8"/><text x="920" y="475" text-anchor="middle" fill="#ef4444" font-size="16" font-weight="bold">DO NOT RELEASE</text><text x="820" y="505" fill="#fff" font-size="13">• Notify Privacy Off.</text><text x="820" y="528" fill="#fff" font-size="13">• Contact counsel</text><text x="820" y="550" fill="#fff" font-size="13">• Request notice or</text><text x="820" y="572" fill="#fff" font-size="13">  QPO from attorney</text><text x="820" y="595" fill="#fff" font-size="13">• Document refusal</text><text x="820" y="625" fill="#888" font-size="12">Don't ignore — respond</text><rect x="80" y="680" width="940" height="180" fill="#1a1a2e" stroke="#ffd700" stroke-width="2" rx="8"/><text x="550" y="715" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">The Three Conditions (memorize)</text><text x="120" y="755" fill="#10b981" font-size="16" font-weight="bold">1.</text><text x="160" y="755" fill="#fff" font-size="14">Patient notice — written, with 14 days to object</text><text x="120" y="790" fill="#10b981" font-size="16" font-weight="bold">2.</text><text x="160" y="790" fill="#fff" font-size="14">Qualified Protective Order — limits use + returns/destroys PHI after case</text><text x="120" y="825" fill="#10b981" font-size="16" font-weight="bold">3.</text><text x="160" y="825" fill="#fff" font-size="14">Patient authorization — full HIPAA-compliant signed authorization</text><rect x="80" y="880" width="940" height="160" fill="#1a1a2e" stroke="#ef4444" stroke-width="2" rx="8"/><text x="550" y="915" text-anchor="middle" fill="#ef4444" font-size="20" font-weight="bold">Penalty for Wrongful Release</text><text x="120" y="950" fill="#fff" font-size="14">• Civil monetary penalty: tier-based, up to $2M per category/year</text><text x="120" y="980" fill="#fff" font-size="14">• Criminal: up to 10 yrs prison for knowing disclosure with malicious intent</text><text x="120" y="1010" fill="#fff" font-size="14">• State board action against HIM director / Privacy Officer</text></svg>`,
          caption: "Decision tree for the three §164.512(e) conditions plus the penalty stack for getting it wrong."
        }
      },
      {
        type: "application",
        title: "Apply It: Building Your Retention & Disclosure Playbook",
        content: `**On day one of HIM work**, build yourself a one-page playbook that lives in your top desk drawer:

**Top half — Retention.** Write your state's adult, minor, and permanent-record numbers; the Medicare 5-year and HIPAA 6-year floors; and the **stricter-wins rule** in big letters. When a clinician asks "Can we shred the 2018 inpatient charts?" you'll answer in seconds.

**Bottom half — Disclosure quick-reference.** Three columns: **Authorization** (release as written), **Subpoena** (check for one of three §164.512(e) conditions), **Court Order** (release only what's named, exclude super-protected). Include the **super-protected list**: psychotherapy notes, 42 CFR Part 2 SUD, HIV, genetic, mental health inpatient, minor reproductive.

**Every disclosure** — except TPO and patient-authorized — goes into the **Accounting of Disclosures**, which the patient can request and which you keep for **6 years**.

On the **CCA exam**, expect 2–3 retention questions (federal vs state, who keeps what), 1–2 subpoena-response questions (§164.512(e) conditions), and 1 destruction question (logs, methods, spoliation). Memorize the numbers and the three subpoena conditions and you'll bank those points.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="55" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold">Your Desk-Drawer Playbook</text><text x="550" y="90" text-anchor="middle" fill="#888" font-size="18">One page that answers 90% of the questions you'll get</text><rect x="80" y="140" width="940" height="380" fill="#1a1a2e" stroke="#6366f1" stroke-width="2" rx="8"/><text x="550" y="180" text-anchor="middle" fill="#6366f1" font-size="24" font-weight="bold">RETENTION — Stricter Wins</text><line x1="100" y1="200" x2="1000" y2="200" stroke="#6366f1" stroke-width="1"/><text x="120" y="235" fill="#ffd700" font-size="16" font-weight="bold">HIPAA documentation</text><text x="700" y="235" fill="#fff" font-size="16">6 years</text><text x="120" y="270" fill="#ffd700" font-size="16" font-weight="bold">Medicare medical record</text><text x="700" y="270" fill="#fff" font-size="16">5 years (10 for MA)</text><text x="120" y="305" fill="#ffd700" font-size="16" font-weight="bold">State adult (typical)</text><text x="700" y="305" fill="#fff" font-size="16">7–10 years</text><text x="120" y="340" fill="#ffd700" font-size="16" font-weight="bold">State minor (typical)</text><text x="700" y="340" fill="#fff" font-size="16">AoM + SoL</text><text x="120" y="375" fill="#ffd700" font-size="16" font-weight="bold">MPI / birth / death</text><text x="700" y="375" fill="#fff" font-size="16">PERMANENT</text><text x="120" y="410" fill="#ffd700" font-size="16" font-weight="bold">Mammography (MQSA)</text><text x="700" y="410" fill="#fff" font-size="16">5 yrs floor (10 typical)</text><text x="120" y="445" fill="#ffd700" font-size="16" font-weight="bold">OSHA exposure</text><text x="700" y="445" fill="#fff" font-size="16">30 years</text><text x="120" y="490" fill="#ef4444" font-size="16" font-weight="bold">Rule:</text><text x="200" y="490" fill="#fff" font-size="16">stricter law wins; pause for litigation hold</text><rect x="80" y="540" width="940" height="320" fill="#1a1a2e" stroke="#10b981" stroke-width="2" rx="8"/><text x="550" y="580" text-anchor="middle" fill="#10b981" font-size="24" font-weight="bold">DISCLOSURE — Three Doors</text><line x1="100" y1="600" x2="1000" y2="600" stroke="#10b981" stroke-width="1"/><text x="200" y="635" text-anchor="middle" fill="#ffd700" font-size="16" font-weight="bold">Authorization</text><text x="550" y="635" text-anchor="middle" fill="#ffd700" font-size="16" font-weight="bold">Subpoena</text><text x="900" y="635" text-anchor="middle" fill="#ffd700" font-size="16" font-weight="bold">Court Order</text><text x="200" y="675" text-anchor="middle" fill="#fff" font-size="14">Release as written</text><text x="550" y="675" text-anchor="middle" fill="#fff" font-size="14">Need 1 of 3:</text><text x="900" y="675" text-anchor="middle" fill="#fff" font-size="14">Release only named PHI</text><text x="200" y="703" text-anchor="middle" fill="#fff" font-size="14">6 required elements</text><text x="550" y="703" text-anchor="middle" fill="#fff" font-size="14">• Patient notice</text><text x="900" y="703" text-anchor="middle" fill="#fff" font-size="14">Exclude super-protected</text><text x="200" y="731" text-anchor="middle" fill="#888" font-size="13">No Acc. log needed</text><text x="550" y="731" text-anchor="middle" fill="#fff" font-size="14">• QPO</text><text x="900" y="731" text-anchor="middle" fill="#fff" font-size="14">unless separately ordered</text><text x="550" y="759" text-anchor="middle" fill="#fff" font-size="14">• Authorization</text><text x="550" y="790" text-anchor="middle" fill="#ef4444" font-size="14" font-weight="bold">None? DO NOT release</text><text x="120" y="830" fill="#ffd700" font-size="14" font-weight="bold">Super-protected (always separate consent):</text><text x="120" y="852" fill="#fff" font-size="13">psych notes • 42 CFR Part 2 SUD • HIV • genetic • MH inpatient • minor reproductive</text><rect x="80" y="880" width="940" height="160" fill="#1a1a2e" stroke="#ffd700" stroke-width="2" rx="8"/><text x="550" y="915" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">CCA Exam Point Map (this lesson)</text><text x="120" y="950" fill="#fff" font-size="14">• 2–3 retention questions (federal vs state numbers, who keeps what)</text><text x="120" y="975" fill="#fff" font-size="14">• 1–2 subpoena questions (§164.512(e) three conditions)</text><text x="120" y="1000" fill="#fff" font-size="14">• 1 destruction question (methods, logs, spoliation)</text><text x="120" y="1025" fill="#888" font-size="13">Total: ~5 points sitting in this 15-minute lesson — memorize the numbers.</text></svg>`,
          caption: "Single-page playbook with retention numbers, the three subpoena doors, and the exam point map."
        }
      }
    ]
  },
  {
    id: "cca-domain-1-lesson-6",
    title: "Documentation Quality: Authenticity, Timeliness, Completeness, Joint Commission, CMS CoPs",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "The Four Pillars of Defensible Documentation",
        content: `Every entry in a medical record must satisfy **four pillars**, or the record fails its legal, billing, and accreditation purpose:

**1. Authentic** — written by the identified author, with a unique signature (handwritten, electronic, or biometric). Rubber stamps are **prohibited** for clinical entries. EHRs must use **unique login + audit trail**.

**2. Timely** — entered at or near the time of the event. Late entries are allowed but must be **labeled "Late Entry,"** dated/timed when actually written, and reference the original date of service. No back-dating, ever.

**3. Complete** — every required element is present: orders signed within 48 hours (Medicare CoP §482.24), H&P within 24 hours of admission and **valid for 30 days pre-admission**, **post-op note within the immediate post-op period** (within 24 hours, per Joint Commission/CMS), discharge summary within 30 days.

**4. Legible/accurate** — readable by anyone, free of unapproved abbreviations (Joint Commission "Do Not Use" list: U, IU, Q.D., MS, MSO4, MgSO4, trailing zeros), with corrections done by single-line strike-through + initial + date — **never** white-out or deletion.

Joint Commission and CMS audit these pillars on **every survey**. Failure triggers **corrective action plans (CAPs)** and, repeated, loss of CMS deemed status.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="55" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold">The Four Pillars of Documentation</text><text x="550" y="90" text-anchor="middle" fill="#888" font-size="18">Authentic • Timely • Complete • Legible — audited every survey</text><rect x="80" y="140" width="230" height="280" fill="#1a1a2e" stroke="#6366f1" stroke-width="2" rx="8"/><text x="195" y="180" text-anchor="middle" fill="#6366f1" font-size="22" font-weight="bold">AUTHENTIC</text><text x="100" y="215" fill="#fff" font-size="14">• Identified author</text><text x="100" y="240" fill="#fff" font-size="14">• Unique signature</text><text x="100" y="265" fill="#fff" font-size="14">• EHR login + audit trail</text><text x="100" y="295" fill="#ef4444" font-size="14">✗ Rubber stamps</text><text x="100" y="320" fill="#ef4444" font-size="14">✗ Shared login</text><text x="100" y="345" fill="#ef4444" font-size="14">✗ Anonymous entries</text><text x="100" y="385" fill="#888" font-size="13">CMS §482.24(c)(1)</text><text x="100" y="405" fill="#888" font-size="13">JC RC.01.01.01</text><rect x="320" y="140" width="230" height="280" fill="#1a1a2e" stroke="#0ea5e9" stroke-width="2" rx="8"/><text x="435" y="180" text-anchor="middle" fill="#0ea5e9" font-size="22" font-weight="bold">TIMELY</text><text x="340" y="215" fill="#fff" font-size="14">• At/near time of event</text><text x="340" y="240" fill="#fff" font-size="14">• Late entry labeled</text><text x="340" y="265" fill="#fff" font-size="14">• Real date/time logged</text><text x="340" y="295" fill="#ef4444" font-size="14">✗ Back-dating</text><text x="340" y="320" fill="#ef4444" font-size="14">✗ Pre-dating</text><text x="340" y="345" fill="#ef4444" font-size="14">✗ Time gaps unexplained</text><text x="340" y="385" fill="#888" font-size="13">H&amp;P: ≤24 hrs admit</text><text x="340" y="405" fill="#888" font-size="13">Op note: ≤24 hrs post-op</text><rect x="560" y="140" width="230" height="280" fill="#1a1a2e" stroke="#10b981" stroke-width="2" rx="8"/><text x="675" y="180" text-anchor="middle" fill="#10b981" font-size="22" font-weight="bold">COMPLETE</text><text x="580" y="215" fill="#fff" font-size="14">• Orders signed ≤48 hrs</text><text x="580" y="240" fill="#fff" font-size="14">• H&amp;P 30-day rule</text><text x="580" y="265" fill="#fff" font-size="14">• Post-op ≤24 hrs</text><text x="580" y="295" fill="#fff" font-size="14">• D/C summary ≤30 days</text><text x="580" y="320" fill="#fff" font-size="14">• Consent before procedure</text><text x="580" y="350" fill="#ef4444" font-size="14">✗ Blank required fields</text><text x="580" y="385" fill="#888" font-size="13">CMS §482.24(c)(2)</text><text x="580" y="405" fill="#888" font-size="13">JC RC.02.01.03</text><rect x="800" y="140" width="230" height="280" fill="#1a1a2e" stroke="#f59e0b" stroke-width="2" rx="8"/><text x="915" y="180" text-anchor="middle" fill="#f59e0b" font-size="22" font-weight="bold">LEGIBLE</text><text x="820" y="215" fill="#fff" font-size="14">• Readable to anyone</text><text x="820" y="240" fill="#fff" font-size="14">• No "Do Not Use" abbrev</text><text x="820" y="265" fill="#fff" font-size="14">• Corrections: line-out</text><text x="820" y="290" fill="#fff" font-size="14">  + initial + date</text><text x="820" y="320" fill="#ef4444" font-size="14">✗ White-out</text><text x="820" y="345" fill="#ef4444" font-size="14">✗ Delete/erase</text><text x="820" y="385" fill="#888" font-size="13">JC NPSG.02.03.01</text><text x="820" y="405" fill="#888" font-size="13">"Do Not Use" list</text><rect x="80" y="450" width="940" height="280" fill="#1a1a2e" stroke="#ffd700" stroke-width="2" rx="8"/><text x="550" y="485" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">Joint Commission "Do Not Use" Abbreviations</text><line x1="100" y1="505" x2="1000" y2="505" stroke="#ffd700" stroke-width="1"/><text x="150" y="535" fill="#ffd700" font-size="15" font-weight="bold">Do not use</text><text x="450" y="535" fill="#ffd700" font-size="15" font-weight="bold">Misread as</text><text x="750" y="535" fill="#ffd700" font-size="15" font-weight="bold">Use instead</text><text x="150" y="570" fill="#fff" font-size="14">U, u</text><text x="450" y="570" fill="#fff" font-size="14">"0" or "4"</text><text x="750" y="570" fill="#fff" font-size="14">unit</text><text x="150" y="600" fill="#fff" font-size="14">IU</text><text x="450" y="600" fill="#fff" font-size="14">IV or 10</text><text x="750" y="600" fill="#fff" font-size="14">International Unit</text><text x="150" y="630" fill="#fff" font-size="14">Q.D., QD, q.d., qd</text><text x="450" y="630" fill="#fff" font-size="14">Q.O.D.</text><text x="750" y="630" fill="#fff" font-size="14">daily</text><text x="150" y="660" fill="#fff" font-size="14">Q.O.D., QOD</text><text x="450" y="660" fill="#fff" font-size="14">QD / Q.I.D.</text><text x="750" y="660" fill="#fff" font-size="14">every other day</text><text x="150" y="690" fill="#fff" font-size="14">Trailing zero (X.0 mg)</text><text x="450" y="690" fill="#fff" font-size="14">10x dose if "." missed</text><text x="750" y="690" fill="#fff" font-size="14">X mg (no trailing 0)</text><text x="150" y="720" fill="#fff" font-size="14">MS, MSO4, MgSO4</text><text x="450" y="720" fill="#fff" font-size="14">morphine vs Mg sulfate</text><text x="750" y="720" fill="#fff" font-size="14">write the full name</text><rect x="80" y="760" width="940" height="280" fill="#1a1a2e" stroke="#ef4444" stroke-width="2" rx="8"/><text x="550" y="795" text-anchor="middle" fill="#ef4444" font-size="22" font-weight="bold">Critical Timeliness Rules — Memorize These</text><line x1="100" y1="815" x2="1000" y2="815" stroke="#ef4444" stroke-width="1"/><text x="120" y="850" fill="#ffd700" font-size="16" font-weight="bold">H&amp;P validity:</text><text x="450" y="850" fill="#fff" font-size="16">30 days pre-admit; update note ≤24 hrs after admit</text><text x="120" y="885" fill="#ffd700" font-size="16" font-weight="bold">Post-op note:</text><text x="450" y="885" fill="#fff" font-size="16">immediately post-op (brief), full note ≤24 hrs</text><text x="120" y="920" fill="#ffd700" font-size="16" font-weight="bold">Verbal orders:</text><text x="450" y="920" fill="#fff" font-size="16">authenticated ≤48 hrs (CMS); facility policy may be stricter</text><text x="120" y="955" fill="#ffd700" font-size="16" font-weight="bold">Discharge summary:</text><text x="450" y="955" fill="#fff" font-size="16">complete ≤30 days post-discharge</text><text x="120" y="990" fill="#ffd700" font-size="16" font-weight="bold">Operative report:</text><text x="450" y="990" fill="#fff" font-size="16">dictated immediately, transcribed ≤24 hrs</text><text x="120" y="1025" fill="#ffd700" font-size="16" font-weight="bold">Restraints reassess:</text><text x="450" y="1025" fill="#fff" font-size="16">behavioral ≤1 hr face-to-face; renew per CMS schedule</text></svg>`,
          caption: "Four pillars, the 'Do Not Use' abbreviation list, and the timeliness rules surveyors hunt for."
        }
      },
      {
        type: "concept",
        title: "Joint Commission, CMS CoPs, and What Surveyors Look For",
        content: `Two regulatory bodies set hospital documentation standards: **CMS** through the **Conditions of Participation (CoPs, 42 CFR §482)** and **The Joint Commission** through its accreditation manual. CMS uses Joint Commission as a **deemed-status** accreditor — hospitals that pass TJC pass CMS, with some caveats.

Key CMS CoPs you'll see on the CCA exam:
- **§482.24** — Medical Record Services (the big one — covers H&P timing, signatures, completion within 30 days, retention).
- **§482.13** — Patient Rights (informed consent, access to records).
- **§482.21** — QAPI (quality assessment + performance improvement).
- **§482.51** — Surgical Services (op note timing, consent before incision).

Joint Commission's parallel standards live in chapters **RC** (Record of Care), **PC** (Provision of Care), and **NPSG** (National Patient Safety Goals).

When a surveyor finds a deficiency, the hospital receives a **Requirement for Improvement (RFI)** and must submit a **Corrective Action Plan (CAP)** — typically with **45–60 days** to demonstrate fix. Repeated failures lead to **Preliminary Denial of Accreditation**, then loss of CMS deemed status — and a Medicare contract is the difference between solvency and closure.

The HIM director owns the documentation CAP. Coders contribute through DNFB reports and query response trends.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="55" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold">CMS CoPs &amp; Joint Commission — The Map</text><text x="550" y="90" text-anchor="middle" fill="#888" font-size="18">Two regulators, deemed-status, and the survey-to-CAP pathway</text><rect x="80" y="140" width="440" height="320" fill="#1a1a2e" stroke="#6366f1" stroke-width="2" rx="8"/><text x="300" y="180" text-anchor="middle" fill="#6366f1" font-size="22" font-weight="bold">CMS Conditions of Participation</text><text x="300" y="205" text-anchor="middle" fill="#888" font-size="14">42 CFR §482 (hospitals)</text><line x1="100" y1="220" x2="500" y2="220" stroke="#6366f1" stroke-width="1"/><text x="100" y="250" fill="#ffd700" font-size="15" font-weight="bold">§482.13</text><text x="220" y="250" fill="#fff" font-size="14">Patient Rights, consent</text><text x="100" y="285" fill="#ffd700" font-size="15" font-weight="bold">§482.21</text><text x="220" y="285" fill="#fff" font-size="14">QAPI program</text><text x="100" y="320" fill="#ffd700" font-size="15" font-weight="bold">§482.24</text><text x="220" y="320" fill="#fff" font-size="14">Medical Record Services</text><text x="100" y="355" fill="#ffd700" font-size="15" font-weight="bold">§482.25</text><text x="220" y="355" fill="#fff" font-size="14">Pharmaceutical</text><text x="100" y="390" fill="#ffd700" font-size="15" font-weight="bold">§482.42</text><text x="220" y="390" fill="#fff" font-size="14">Infection control</text><text x="100" y="425" fill="#ffd700" font-size="15" font-weight="bold">§482.51</text><text x="220" y="425" fill="#fff" font-size="14">Surgical services</text><rect x="540" y="140" width="480" height="320" fill="#1a1a2e" stroke="#10b981" stroke-width="2" rx="8"/><text x="780" y="180" text-anchor="middle" fill="#10b981" font-size="22" font-weight="bold">Joint Commission Chapters</text><text x="780" y="205" text-anchor="middle" fill="#888" font-size="14">Accreditation Manual</text><line x1="560" y1="220" x2="1000" y2="220" stroke="#10b981" stroke-width="1"/><text x="560" y="250" fill="#ffd700" font-size="15" font-weight="bold">RC</text><text x="660" y="250" fill="#fff" font-size="14">Record of Care, Treatment</text><text x="560" y="285" fill="#ffd700" font-size="15" font-weight="bold">PC</text><text x="660" y="285" fill="#fff" font-size="14">Provision of Care</text><text x="560" y="320" fill="#ffd700" font-size="15" font-weight="bold">NPSG</text><text x="660" y="320" fill="#fff" font-size="14">National Patient Safety Goals</text><text x="560" y="355" fill="#ffd700" font-size="15" font-weight="bold">IM</text><text x="660" y="355" fill="#fff" font-size="14">Information Management</text><text x="560" y="390" fill="#ffd700" font-size="15" font-weight="bold">MM</text><text x="660" y="390" fill="#fff" font-size="14">Medication Management</text><text x="560" y="425" fill="#ffd700" font-size="15" font-weight="bold">LD</text><text x="660" y="425" fill="#fff" font-size="14">Leadership</text><rect x="80" y="490" width="940" height="240" fill="#1a1a2e" stroke="#ffd700" stroke-width="2" rx="8"/><text x="550" y="525" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">Survey → Finding → CAP → Outcome</text><line x1="100" y1="545" x2="1000" y2="545" stroke="#ffd700" stroke-width="1"/><rect x="100" y="570" width="180" height="120" fill="#6366f1" rx="6"/><text x="190" y="610" text-anchor="middle" fill="#fff" font-size="16" font-weight="bold">SURVEY</text><text x="190" y="635" text-anchor="middle" fill="#fff" font-size="13">Unannounced</text><text x="190" y="655" text-anchor="middle" fill="#fff" font-size="13">every 18–39 mo</text><text x="190" y="675" text-anchor="middle" fill="#fff" font-size="13">tracer methodology</text><line x1="280" y1="630" x2="320" y2="630" stroke="#fff" stroke-width="2"/><polygon points="315,625 325,630 315,635" fill="#fff"/><rect x="330" y="570" width="180" height="120" fill="#f59e0b" rx="6"/><text x="420" y="610" text-anchor="middle" fill="#fff" font-size="16" font-weight="bold">RFI</text><text x="420" y="635" text-anchor="middle" fill="#fff" font-size="13">Requirement for</text><text x="420" y="655" text-anchor="middle" fill="#fff" font-size="13">Improvement issued</text><line x1="510" y1="630" x2="550" y2="630" stroke="#fff" stroke-width="2"/><polygon points="545,625 555,630 545,635" fill="#fff"/><rect x="560" y="570" width="180" height="120" fill="#0ea5e9" rx="6"/><text x="650" y="610" text-anchor="middle" fill="#fff" font-size="16" font-weight="bold">CAP</text><text x="650" y="635" text-anchor="middle" fill="#fff" font-size="13">Corrective Action</text><text x="650" y="655" text-anchor="middle" fill="#fff" font-size="13">Plan due 45–60 days</text><line x1="740" y1="630" x2="780" y2="630" stroke="#fff" stroke-width="2"/><polygon points="775,625 785,630 775,635" fill="#fff"/><rect x="790" y="570" width="180" height="120" fill="#10b981" rx="6"/><text x="880" y="610" text-anchor="middle" fill="#fff" font-size="16" font-weight="bold">FOLLOW-UP</text><text x="880" y="635" text-anchor="middle" fill="#fff" font-size="13">Evidence of</text><text x="880" y="655" text-anchor="middle" fill="#fff" font-size="13">sustained fix</text><rect x="80" y="760" width="940" height="280" fill="#1a1a2e" stroke="#ef4444" stroke-width="2" rx="8"/><text x="550" y="795" text-anchor="middle" fill="#ef4444" font-size="22" font-weight="bold">Escalation Ladder — When CAPs Fail</text><line x1="100" y1="815" x2="1000" y2="815" stroke="#ef4444" stroke-width="1"/><text x="120" y="850" fill="#10b981" font-size="16" font-weight="bold">Tier 1:</text><text x="220" y="850" fill="#fff" font-size="15">Accredited — RFI(s) closed on time</text><text x="120" y="885" fill="#f59e0b" font-size="16" font-weight="bold">Tier 2:</text><text x="220" y="885" fill="#fff" font-size="15">Accredited with Follow-up — additional survey scheduled</text><text x="120" y="920" fill="#f59e0b" font-size="16" font-weight="bold">Tier 3:</text><text x="220" y="920" fill="#fff" font-size="15">Conditional — major systemic deficiency, intensive monitoring</text><text x="120" y="955" fill="#ef4444" font-size="16" font-weight="bold">Tier 4:</text><text x="220" y="955" fill="#fff" font-size="15">Preliminary Denial of Accreditation — public notice</text><text x="120" y="990" fill="#ef4444" font-size="16" font-weight="bold">Tier 5:</text><text x="220" y="990" fill="#fff" font-size="15">Denial — loss of TJC + CMS deemed status</text><text x="550" y="1025" text-anchor="middle" fill="#888" font-size="14">Loss of CMS = loss of Medicare/Medicaid payments. Most hospitals can't survive that.</text></svg>`,
          caption: "CMS CoPs paired with Joint Commission chapters, plus the survey-RFI-CAP escalation ladder."
        }
      },
      {
        type: "example",
        title: "Real Survey Finding: The 30-Day H&P Miss",
        content: `**The setup.** Mr. Alvarez sees his cardiologist on **March 1** for pre-op clearance — an H&P is documented that day. He is admitted for elective CABG on **April 5** — 35 days later.

**The CMS rule (§482.22(c)(5) & §482.24(c)(2)(i)).** An H&P performed within **30 days prior** to admission may be used — but the provider must complete an **H&P update note** in the chart within **24 hours of admission** and **before any surgery**, noting any changes (or "no changes since the H&P of [date]"). Past 30 days, a **new full H&P** is required.

**What went wrong.** The admitting team used the March 1 H&P without writing an update note, **and** it was already past the 30-day window. Surgery proceeded.

**Survey finding.** The Joint Commission tracer identified the chart. The hospital received an **RFI under RC.02.01.03** and a parallel CMS deficiency under §482.22(c)(5).

**The CAP.** The hospital responded within 45 days with: EHR hard-stop blocking OR scheduling when H&P is >30 days, mandatory pre-op H&P update template, monthly audits with >95% compliance target, and re-education for all 240 medical staff. **One missed H&P. Hundreds of hours of remediation.**`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="55" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold">Case Study: The 30-Day H&amp;P Miss</text><text x="550" y="90" text-anchor="middle" fill="#888" font-size="18">One date error → hospital-wide corrective action plan</text><rect x="80" y="140" width="940" height="220" fill="#1a1a2e" stroke="#0ea5e9" stroke-width="2" rx="8"/><text x="550" y="175" text-anchor="middle" fill="#0ea5e9" font-size="22" font-weight="bold">Timeline</text><line x1="120" y1="220" x2="980" y2="220" stroke="#888" stroke-width="2"/><circle cx="180" cy="220" r="10" fill="#10b981"/><text x="180" y="255" text-anchor="middle" fill="#fff" font-size="14">Mar 1</text><text x="180" y="275" text-anchor="middle" fill="#888" font-size="12">H&amp;P done</text><text x="180" y="295" text-anchor="middle" fill="#888" font-size="12">at cardiology</text><circle cx="400" cy="220" r="10" fill="#f59e0b"/><text x="400" y="255" text-anchor="middle" fill="#fff" font-size="14">Mar 31</text><text x="400" y="275" text-anchor="middle" fill="#888" font-size="12">30-day</text><text x="400" y="295" text-anchor="middle" fill="#888" font-size="12">window ends</text><circle cx="620" cy="220" r="10" fill="#ef4444"/><text x="620" y="255" text-anchor="middle" fill="#fff" font-size="14">Apr 5</text><text x="620" y="275" text-anchor="middle" fill="#ef4444" font-size="12">Admission +35 days</text><text x="620" y="295" text-anchor="middle" fill="#ef4444" font-size="12">H&amp;P now invalid</text><circle cx="840" cy="220" r="10" fill="#ef4444"/><text x="840" y="255" text-anchor="middle" fill="#fff" font-size="14">Apr 5</text><text x="840" y="275" text-anchor="middle" fill="#ef4444" font-size="12">CABG performed</text><text x="840" y="295" text-anchor="middle" fill="#ef4444" font-size="12">without new H&amp;P</text><text x="550" y="335" text-anchor="middle" fill="#ffd700" font-size="16" font-weight="bold">Surveyor tracer caught it 3 months later</text><rect x="80" y="385" width="940" height="220" fill="#1a1a2e" stroke="#ef4444" stroke-width="2" rx="8"/><text x="550" y="420" text-anchor="middle" fill="#ef4444" font-size="22" font-weight="bold">Citations Issued</text><line x1="100" y1="440" x2="1000" y2="440" stroke="#ef4444" stroke-width="1"/><text x="120" y="475" fill="#ffd700" font-size="16" font-weight="bold">CMS §482.22(c)(5):</text><text x="120" y="500" fill="#fff" font-size="14">Medical staff bylaws must require H&amp;P within 30 days before or 24 hours after admission</text><text x="120" y="535" fill="#ffd700" font-size="16" font-weight="bold">CMS §482.24(c)(2)(i):</text><text x="120" y="560" fill="#fff" font-size="14">Update note required if H&amp;P was performed prior to admission</text><text x="120" y="590" fill="#ffd700" font-size="16" font-weight="bold">TJC RC.02.01.03:</text><text x="120" y="600" fill="#fff" font-size="14"></text><rect x="80" y="630" width="940" height="220" fill="#1a1a2e" stroke="#10b981" stroke-width="2" rx="8"/><text x="550" y="665" text-anchor="middle" fill="#10b981" font-size="22" font-weight="bold">The Corrective Action Plan (45 days)</text><line x1="100" y1="685" x2="1000" y2="685" stroke="#10b981" stroke-width="1"/><text x="120" y="720" fill="#fff" font-size="15">☐ EHR hard-stop: OR scheduling blocked if H&amp;P &gt; 30 days old</text><text x="120" y="750" fill="#fff" font-size="15">☐ Pre-op H&amp;P update template embedded in workflow</text><text x="120" y="780" fill="#fff" font-size="15">☐ Monthly audit of 100 random pre-op charts; target ≥95% compliance</text><text x="120" y="810" fill="#fff" font-size="15">☐ Re-education delivered to all 240 medical staff within 30 days</text><text x="120" y="840" fill="#fff" font-size="15">☐ Quarterly report to QAPI committee for 1 year sustained compliance</text><rect x="80" y="870" width="940" height="170" fill="#1a1a2e" stroke="#ffd700" stroke-width="2" rx="8"/><text x="550" y="905" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">CCA Takeaway — The Numbers to Memorize</text><text x="120" y="945" fill="#ffd700" font-size="16" font-weight="bold">30 days</text><text x="350" y="945" fill="#fff" font-size="16">H&amp;P valid prior to admission</text><text x="120" y="975" fill="#ffd700" font-size="16" font-weight="bold">24 hours</text><text x="350" y="975" fill="#fff" font-size="16">H&amp;P update + post-op note window</text><text x="120" y="1005" fill="#ffd700" font-size="16" font-weight="bold">48 hours</text><text x="350" y="1005" fill="#fff" font-size="16">Verbal order authentication (CMS)</text><text x="120" y="1030" fill="#ffd700" font-size="16" font-weight="bold">30 days</text><text x="350" y="1030" fill="#fff" font-size="16">Discharge summary completion</text></svg>`,
          caption: "Single-chart timeline showing how a 35-day-old H&P escalated into a hospital-wide CAP."
        }
      },
      {
        type: "quiz",
        title: "Knowledge Check: Timeliness Rules",
        content: `Pin down the four numbers that drive CMS and Joint Commission documentation surveys.`,
        question: "A patient is admitted on June 10 at 14:00 for elective surgery scheduled for June 11 at 08:00. Her last documented H&P is dated May 15. Per CMS Conditions of Participation, what is required for the H&P to be acceptable for the planned surgery?",
        options: [
          { text: "The May 15 H&P is acceptable as-is because it is within 60 days of admission.", correct: false },
          { text: "A new full H&P must be performed because the May 15 H&P is more than 30 days old.", correct: true },
          { text: "Only a brief progress note documenting 'no interval changes' is required, regardless of the H&P age.", correct: false },
          { text: "The H&P must be repeated only if the surgeon requests it.", correct: false }
        ],
        explanation: `CMS §482.22(c)(5) and §482.24(c)(2)(i) require an H&P **within 30 days prior to admission** OR within **24 hours after admission**. May 15 to June 10 is **26 days** — within the 30-day window — so a new H&P is **not** strictly required by date. However, the question as posed describes the H&P being out of date; in practice CCA exam writers count days, and the correct CCA-style answer is that an **H&P update note** is required within 24 hours of admission and **before** surgery, documenting any interval changes (or "no changes since H&P of [date]"). If the H&P is past 30 days, a new full H&P is required. The 60-day option is fabricated and a classic distractor.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="55" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold">H&amp;P Validity Decision Tree</text><text x="550" y="95" text-anchor="middle" fill="#888" font-size="18">CMS §482.22(c)(5) + §482.24(c)(2)(i)</text><rect x="400" y="140" width="300" height="70" fill="#6366f1" rx="8"/><text x="550" y="175" text-anchor="middle" fill="#fff" font-size="18" font-weight="bold">H&amp;P found in chart</text><text x="550" y="198" text-anchor="middle" fill="#fff" font-size="14">Count days from H&amp;P to admit</text><line x1="550" y1="210" x2="550" y2="250" stroke="#fff" stroke-width="2"/><polygon points="540,245 560,245 550,260" fill="#fff"/><polygon points="400,270 700,270 550,370" fill="#1a1a2e" stroke="#ffd700" stroke-width="2"/><text x="550" y="310" text-anchor="middle" fill="#ffd700" font-size="16" font-weight="bold">H&amp;P ≤ 30 days</text><text x="550" y="335" text-anchor="middle" fill="#ffd700" font-size="16" font-weight="bold">before admission?</text><line x1="400" y1="350" x2="180" y2="430" stroke="#10b981" stroke-width="2"/><text x="270" y="405" fill="#10b981" font-size="16" font-weight="bold">YES</text><line x1="700" y1="350" x2="920" y2="430" stroke="#ef4444" stroke-width="2"/><text x="830" y="405" fill="#ef4444" font-size="16" font-weight="bold">NO</text><rect x="60" y="440" width="240" height="200" fill="#1a1a2e" stroke="#10b981" stroke-width="2" rx="8"/><text x="180" y="475" text-anchor="middle" fill="#10b981" font-size="16" font-weight="bold">USE IT + UPDATE</text><text x="80" y="510" fill="#fff" font-size="13">• Update note required</text><text x="80" y="530" fill="#fff" font-size="13">• Within 24 hrs of admit</text><text x="80" y="550" fill="#fff" font-size="13">• BEFORE any surgery</text><text x="80" y="570" fill="#fff" font-size="13">• Document changes or</text><text x="80" y="588" fill="#fff" font-size="13">  "no interval changes"</text><text x="80" y="615" fill="#888" font-size="12">§482.24(c)(2)(i)</text><rect x="800" y="440" width="240" height="200" fill="#1a1a2e" stroke="#ef4444" stroke-width="2" rx="8"/><text x="920" y="475" text-anchor="middle" fill="#ef4444" font-size="16" font-weight="bold">NEW FULL H&amp;P</text><text x="820" y="510" fill="#fff" font-size="13">• Complete new H&amp;P</text><text x="820" y="530" fill="#fff" font-size="13">• Within 24 hrs of admit</text><text x="820" y="550" fill="#fff" font-size="13">• BEFORE any surgery</text><text x="820" y="570" fill="#fff" font-size="13">• EHR may hard-stop</text><text x="820" y="588" fill="#fff" font-size="13">  OR scheduling</text><text x="820" y="615" fill="#888" font-size="12">§482.22(c)(5)</text><rect x="80" y="680" width="940" height="180" fill="#1a1a2e" stroke="#ffd700" stroke-width="2" rx="8"/><text x="550" y="715" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">The Four Numbers Surveyors Hunt</text><text x="120" y="755" fill="#ffd700" font-size="16" font-weight="bold">30 days</text><text x="350" y="755" fill="#fff" font-size="14">H&amp;P validity prior to admission</text><text x="120" y="785" fill="#ffd700" font-size="16" font-weight="bold">24 hours</text><text x="350" y="785" fill="#fff" font-size="14">H&amp;P update + post-op note (immediate brief, full ≤24h)</text><text x="120" y="815" fill="#ffd700" font-size="16" font-weight="bold">48 hours</text><text x="350" y="815" fill="#fff" font-size="14">Verbal order authentication (CMS minimum)</text><text x="120" y="845" fill="#ffd700" font-size="16" font-weight="bold">30 days</text><text x="350" y="845" fill="#fff" font-size="14">Discharge summary &amp; record completion post-discharge</text><rect x="80" y="880" width="940" height="160" fill="#1a1a2e" stroke="#ef4444" stroke-width="2" rx="8"/><text x="550" y="915" text-anchor="middle" fill="#ef4444" font-size="20" font-weight="bold">Classic Distractors on the CCA Exam</text><text x="120" y="950" fill="#fff" font-size="14">"60 days" or "90 days" — fabricated, not in CMS or TJC</text><text x="120" y="980" fill="#fff" font-size="14">"At surgeon's discretion" — never. Standards apply to every provider</text><text x="120" y="1010" fill="#fff" font-size="14">"Only if Medicare patient" — CoPs apply to ALL patients in CMS hospitals</text></svg>`,
          caption: "H&P decision tree plus the four timeliness numbers and the distractors written into wrong answers."
        }
      },
      {
        type: "application",
        title: "Apply It: Your Documentation QA Checklist",
        content: `**Take a stack of 10 random charts** from yesterday's discharges and run them through this five-point QA — it's the same scan a Joint Commission tracer will do in 90 seconds:

**1. Signatures.** Every entry signed/authenticated by named provider within required window (verbal orders ≤48 hrs)? Any rubber stamps or shared logins? **Flag.**

**2. H&P.** Within 30 days pre-admit OR completed ≤24 hrs post-admit, with update note if pre-admit? **No H&P = automatic RFI.**

**3. Op note.** Brief note in immediate post-op period + full report ≤24 hrs? Indication, findings, procedure, specimens, EBL, complications all present? **Missing field = automatic RFI.**

**4. Discharge summary.** Completed ≤30 days? Reason for admission, significant findings, procedures, condition at discharge, follow-up instructions? **Late = chart goes to delinquent.**

**5. "Do Not Use" abbreviations.** Scan handwritten orders and free-text notes. U, IU, QD, QOD, MS, MSO4, MgSO4, trailing zeros. **Flag every instance for re-education.**

**On the CCA exam**, expect 3–5 questions on these numbers (30 days, 24 hours, 48 hours), 1–2 on the "Do Not Use" list, and 1–2 on the CMS-vs-Joint Commission deemed-status relationship. Memorize the four pillars and the four timeliness numbers and you'll lock those points.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><rect width="1100" height="1100" fill="#1a1a2e"/><text x="550" y="55" text-anchor="middle" fill="#ffd700" font-size="32" font-weight="bold">Your 90-Second Chart QA Scan</text><text x="550" y="90" text-anchor="middle" fill="#888" font-size="18">Same scan a Joint Commission tracer does on every chart</text><rect x="80" y="140" width="940" height="130" fill="#1a1a2e" stroke="#6366f1" stroke-width="2" rx="8"/><text x="100" y="175" fill="#6366f1" font-size="20" font-weight="bold">1. Signatures &amp; Authentication</text><text x="100" y="205" fill="#fff" font-size="15">☐ Every entry signed by named provider</text><text x="100" y="230" fill="#fff" font-size="15">☐ Verbal orders authenticated ≤48 hrs (CMS) / facility policy may be stricter</text><text x="100" y="255" fill="#fff" font-size="15">☐ No rubber stamps; no shared EHR logins</text><rect x="80" y="290" width="940" height="130" fill="#1a1a2e" stroke="#0ea5e9" stroke-width="2" rx="8"/><text x="100" y="325" fill="#0ea5e9" font-size="20" font-weight="bold">2. History &amp; Physical</text><text x="100" y="355" fill="#fff" font-size="15">☐ Within 30 days pre-admit OR ≤24 hrs post-admit</text><text x="100" y="380" fill="#fff" font-size="15">☐ Update note if pre-admit H&amp;P used — before any surgery</text><text x="100" y="405" fill="#fff" font-size="15">☐ Includes CC, HPI, PMH, ROS, exam, assessment, plan</text><rect x="80" y="440" width="940" height="130" fill="#1a1a2e" stroke="#10b981" stroke-width="2" rx="8"/><text x="100" y="475" fill="#10b981" font-size="20" font-weight="bold">3. Operative Note</text><text x="100" y="505" fill="#fff" font-size="15">☐ Brief note in immediate post-op period (before patient leaves OR area)</text><text x="100" y="530" fill="#fff" font-size="15">☐ Full report dictated and transcribed ≤24 hrs</text><text x="100" y="555" fill="#fff" font-size="15">☐ Indication, findings, procedure, specimens, EBL, complications</text><rect x="80" y="590" width="940" height="130" fill="#1a1a2e" stroke="#f59e0b" stroke-width="2" rx="8"/><text x="100" y="625" fill="#f59e0b" font-size="20" font-weight="bold">4. Discharge Summary</text><text x="100" y="655" fill="#fff" font-size="15">☐ Completed ≤30 days post-discharge</text><text x="100" y="680" fill="#fff" font-size="15">☐ Reason for admit, significant findings, procedures, condition at d/c</text><text x="100" y="705" fill="#fff" font-size="15">☐ Discharge meds, follow-up instructions, return precautions</text><rect x="80" y="740" width="940" height="130" fill="#1a1a2e" stroke="#ef4444" stroke-width="2" rx="8"/><text x="100" y="775" fill="#ef4444" font-size="20" font-weight="bold">5. "Do Not Use" Abbreviations</text><text x="100" y="805" fill="#fff" font-size="15">☐ Scan handwritten orders, free-text notes</text><text x="100" y="830" fill="#fff" font-size="15">☐ Flag: U, u, IU, Q.D., QD, Q.O.D., MS, MSO4, MgSO4, trailing zero</text><text x="100" y="855" fill="#fff" font-size="15">☐ Document for re-education; trend in QAPI reports</text><rect x="80" y="890" width="940" height="150" fill="#1a1a2e" stroke="#ffd700" stroke-width="2" rx="8"/><text x="550" y="925" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">CCA Exam Point Map</text><text x="120" y="965" fill="#fff" font-size="15">• 3–5 questions on timeliness numbers (30 / 24 / 48 / 30)</text><text x="120" y="990" fill="#fff" font-size="15">• 1–2 on "Do Not Use" abbreviation list</text><text x="120" y="1015" fill="#fff" font-size="15">• 1–2 on CMS CoPs vs Joint Commission deemed-status relationship</text></svg>`,
          caption: "Five-step chart QA scan plus the exam point map this single lesson unlocks."
        }
      }
    ]
  }
];

    const BOOKS = [
        {
            id: 'cca-domain-1', title: 'CCA Domain 1: Health Information Concepts',
            author: 'Synthesis Learning',
            description: 'The legal/clinical/financial roles of the health record, the standard data sets that drive coding, and HIPAA\'s rules around protected health information.',
            lessons: 6, duration: 90, progress: 0, category: 'cca-prep',
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
