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
  },
{
    id: "cca-domain-1-lesson-7",
    title: "The Master Patient Index (MPI): Patient Identification, Duplicates, and Overlay Errors",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "The MPI: Your Hospital's Single Source of Truth",
        content: `The **Master Patient Index (MPI)** is the authoritative database that links every patient to a **single, unique enterprise identifier**, called the **Enterprise Master Patient Index (EMPI)** when it spans multiple facilities. Without a clean MPI, the same patient may exist as **three or four different records**, each with partial history — a recipe for **medication errors, duplicate billing denials, and HIPAA breaches**.

AHIMA mandates a minimum of **5 identifiers** to confidently match a patient: **legal name, date of birth, gender, Social Security number (last 4), and address**. Best-practice MPIs use **10+ identifiers** including mother's maiden name, phone, and biometric data.

The two catastrophic MPI errors are **duplicates** (one patient, two records) and **overlays** (two patients sharing one record — far more dangerous because clinical data from Patient A appears in Patient B's chart). CCA candidates must know that **MPI cleanup is the foundational HIM task** — every downstream system (EHR, billing, HIE) depends on it.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-size="30" font-weight="bold">The MPI: One Patient, One Number, One Truth</text>
            <text x="550" y="90" text-anchor="middle" fill="#888" font-size="17">Every encounter ties back to a single Enterprise ID</text>
            <circle cx="550" cy="280" r="130" fill="#1a1a2e" stroke="#ffd700" stroke-width="4"/>
            <text x="550" y="265" text-anchor="middle" fill="#ffd700" font-size="22" font-weight="bold">EMPI</text>
            <text x="550" y="295" text-anchor="middle" fill="#ffffff" font-size="18">Patient #</text>
            <text x="550" y="320" text-anchor="middle" fill="#10b981" font-size="20" font-weight="bold">M-104772</text>
            <rect x="80" y="450" width="220" height="130" fill="#1a1a2e" stroke="#6366f1" stroke-width="2" rx="6"/>
            <text x="190" y="478" text-anchor="middle" fill="#6366f1" font-size="15" font-weight="bold">EHR (Epic)</text>
            <text x="190" y="505" text-anchor="middle" fill="#ffffff" font-size="13">Clinical notes</text>
            <text x="190" y="525" text-anchor="middle" fill="#ffffff" font-size="13">Lab results</text>
            <text x="190" y="545" text-anchor="middle" fill="#ffffff" font-size="13">Med history</text>
            <text x="190" y="568" text-anchor="middle" fill="#ffd700" font-size="13">→ M-104772</text>
            <rect x="320" y="450" width="220" height="130" fill="#1a1a2e" stroke="#10b981" stroke-width="2" rx="6"/>
            <text x="430" y="478" text-anchor="middle" fill="#10b981" font-size="15" font-weight="bold">Billing System</text>
            <text x="430" y="505" text-anchor="middle" fill="#ffffff" font-size="13">Claims</text>
            <text x="430" y="525" text-anchor="middle" fill="#ffffff" font-size="13">Insurance</text>
            <text x="430" y="545" text-anchor="middle" fill="#ffffff" font-size="13">Payments</text>
            <text x="430" y="568" text-anchor="middle" fill="#ffd700" font-size="13">→ M-104772</text>
            <rect x="560" y="450" width="220" height="130" fill="#1a1a2e" stroke="#f59e0b" stroke-width="2" rx="6"/>
            <text x="670" y="478" text-anchor="middle" fill="#f59e0b" font-size="15" font-weight="bold">Lab/Radiology</text>
            <text x="670" y="505" text-anchor="middle" fill="#ffffff" font-size="13">Imaging</text>
            <text x="670" y="525" text-anchor="middle" fill="#ffffff" font-size="13">Pathology</text>
            <text x="670" y="545" text-anchor="middle" fill="#ffffff" font-size="13">Specimens</text>
            <text x="670" y="568" text-anchor="middle" fill="#ffd700" font-size="13">→ M-104772</text>
            <rect x="800" y="450" width="220" height="130" fill="#1a1a2e" stroke="#ec4899" stroke-width="2" rx="6"/>
            <text x="910" y="478" text-anchor="middle" fill="#ec4899" font-size="15" font-weight="bold">HIE Exchange</text>
            <text x="910" y="505" text-anchor="middle" fill="#ffffff" font-size="13">External docs</text>
            <text x="910" y="525" text-anchor="middle" fill="#ffffff" font-size="13">Other hospitals</text>
            <text x="910" y="545" text-anchor="middle" fill="#ffffff" font-size="13">Pharmacy</text>
            <text x="910" y="568" text-anchor="middle" fill="#ffd700" font-size="13">→ M-104772</text>
            <line x1="450" y1="380" x2="190" y2="450" stroke="#6366f1" stroke-width="2"/>
            <line x1="500" y1="395" x2="430" y2="450" stroke="#10b981" stroke-width="2"/>
            <line x1="600" y1="395" x2="670" y2="450" stroke="#f59e0b" stroke-width="2"/>
            <line x1="650" y1="380" x2="910" y2="450" stroke="#ec4899" stroke-width="2"/>
            <rect x="200" y="680" width="700" height="220" fill="#1a1a2e" stroke="#ffd700" stroke-width="2" rx="6"/>
            <text x="550" y="710" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">AHIMA Minimum 5 Identifiers</text>
            <text x="240" y="745" fill="#ffffff" font-size="16">1. Legal Name (last, first, middle initial)</text>
            <text x="240" y="775" fill="#ffffff" font-size="16">2. Date of Birth (MM/DD/YYYY)</text>
            <text x="240" y="805" fill="#ffffff" font-size="16">3. Gender (M/F/U)</text>
            <text x="240" y="835" fill="#ffffff" font-size="16">4. SSN (last 4 digits)</text>
            <text x="240" y="865" fill="#ffffff" font-size="16">5. Current Address (with ZIP)</text>
            <text x="550" y="940" text-anchor="middle" fill="#ef4444" font-size="18" font-weight="bold">Best practice: 10+ identifiers (add mother's maiden name, phone, biometrics)</text>
            <text x="550" y="980" text-anchor="middle" fill="#10b981" font-size="16">Match probability rises from 92% (5 IDs) → 99.6% (10+ IDs)</text>
            <text x="550" y="1040" text-anchor="middle" fill="#888" font-size="14">CCA Exam Tip: The MPI is the foundation of every other HIM data system</text>
          </svg>`,
          caption: "The MPI links every clinical, billing, and lab system to one enterprise identifier — and AHIMA requires a 5-identifier minimum for safe matching."
        }
      },
      {
        type: "concept",
        title: "Duplicates vs Overlays: Two Errors, Two Disasters",
        content: `**Duplicate records** occur when one patient is registered **two or more times** under slightly different demographics — "Robert Smith" on Monday, "Bob Smith" on Tuesday. The patient now has **fragmented history** across two MRNs. The cost: **$1,000+ per duplicate per audit cycle** in rework, denied claims, and re-keyed data. Industry duplicate rate averages **8–12%** of MPI volume; AHIMA targets **<2%**.

**Overlays** are the catastrophic inverse: **two different patients share the same MRN**. Patient A's allergy list, surgical history, and HIV status get assigned to Patient B. Overlays cause **wrong-patient surgery, fatal medication errors, and HIPAA breaches** when one patient's data is disclosed to the other. The Joint Commission classifies overlays as **sentinel events**.

Detection methods: **deterministic matching** (exact match on key fields) and **probabilistic matching** (weighted score across many fields, used by IBM Initiate, NextGate, Verato). Resolution requires **merge** (combine duplicates) or **unmerge/split** (separate an overlay) — both must be **logged in an audit trail** and reviewed by an **HIM data integrity analyst**.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="50" text-anchor="middle" fill="#ffd700" font-size="28" font-weight="bold">Duplicate vs Overlay: Side-by-Side Anatomy</text>
            <rect x="40" y="90" width="500" height="450" fill="#1a1a2e" stroke="#f59e0b" stroke-width="3" rx="8"/>
            <text x="290" y="125" text-anchor="middle" fill="#f59e0b" font-size="22" font-weight="bold">DUPLICATE</text>
            <text x="290" y="150" text-anchor="middle" fill="#888" font-size="14">One patient → two MRNs</text>
            <rect x="65" y="175" width="210" height="130" fill="#1a1a2e" stroke="#6366f1" stroke-width="2"/>
            <text x="170" y="200" text-anchor="middle" fill="#6366f1" font-size="14" font-weight="bold">MRN 88421</text>
            <text x="75" y="225" fill="#ffffff" font-size="13">Robert J. Smith</text>
            <text x="75" y="245" fill="#ffffff" font-size="13">DOB: 03/14/1962</text>
            <text x="75" y="265" fill="#ffffff" font-size="13">SSN: ***-**-4421</text>
            <text x="75" y="285" fill="#ffffff" font-size="13">123 Oak St</text>
            <rect x="305" y="175" width="210" height="130" fill="#1a1a2e" stroke="#6366f1" stroke-width="2"/>
            <text x="410" y="200" text-anchor="middle" fill="#6366f1" font-size="14" font-weight="bold">MRN 91103</text>
            <text x="315" y="225" fill="#ffffff" font-size="13">Bob Smith</text>
            <text x="315" y="245" fill="#ffffff" font-size="13">DOB: 03/14/62</text>
            <text x="315" y="265" fill="#ffffff" font-size="13">SSN: ***-**-4421</text>
            <text x="315" y="285" fill="#ffffff" font-size="13">123 Oak Street</text>
            <text x="290" y="345" text-anchor="middle" fill="#ef4444" font-size="16" font-weight="bold">Result:</text>
            <text x="290" y="370" text-anchor="middle" fill="#ffffff" font-size="14">• History fragmented</text>
            <text x="290" y="392" text-anchor="middle" fill="#ffffff" font-size="14">• Duplicate labs ordered</text>
            <text x="290" y="414" text-anchor="middle" fill="#ffffff" font-size="14">• Insurance double-billed</text>
            <text x="290" y="436" text-anchor="middle" fill="#ffffff" font-size="14">• Claim denials rise</text>
            <text x="290" y="480" text-anchor="middle" fill="#f59e0b" font-size="16" font-weight="bold">Fix: MERGE</text>
            <text x="290" y="510" text-anchor="middle" fill="#888" font-size="13">Cost: ~$1,000+ per duplicate</text>
            <rect x="560" y="90" width="500" height="450" fill="#1a1a2e" stroke="#ef4444" stroke-width="3" rx="8"/>
            <text x="810" y="125" text-anchor="middle" fill="#ef4444" font-size="22" font-weight="bold">OVERLAY</text>
            <text x="810" y="150" text-anchor="middle" fill="#888" font-size="14">Two patients → one MRN</text>
            <rect x="585" y="175" width="450" height="130" fill="#1a1a2e" stroke="#ef4444" stroke-width="2"/>
            <text x="810" y="200" text-anchor="middle" fill="#ef4444" font-size="14" font-weight="bold">MRN 44218 (shared)</text>
            <text x="595" y="225" fill="#ffffff" font-size="13">Patient A: Maria Lopez — allergic to penicillin</text>
            <text x="595" y="248" fill="#ffffff" font-size="13">Patient B: Maria Lopez — diabetic, on metformin</text>
            <text x="595" y="271" fill="#ffd700" font-size="13">Same name, different people, ONE chart!</text>
            <text x="595" y="294" fill="#ef4444" font-size="13">→ Allergy + meds now cross-contaminated</text>
            <text x="810" y="345" text-anchor="middle" fill="#ef4444" font-size="16" font-weight="bold">Result:</text>
            <text x="810" y="370" text-anchor="middle" fill="#ffffff" font-size="14">• Wrong-patient surgery risk</text>
            <text x="810" y="392" text-anchor="middle" fill="#ffffff" font-size="14">• Fatal medication errors</text>
            <text x="810" y="414" text-anchor="middle" fill="#ffffff" font-size="14">• HIPAA disclosure breach</text>
            <text x="810" y="436" text-anchor="middle" fill="#ffffff" font-size="14">• Joint Commission sentinel event</text>
            <text x="810" y="480" text-anchor="middle" fill="#ef4444" font-size="16" font-weight="bold">Fix: UNMERGE / SPLIT</text>
            <text x="810" y="510" text-anchor="middle" fill="#888" font-size="13">Cost: legal liability + harm</text>
            <rect x="100" y="580" width="900" height="380" fill="#1a1a2e" stroke="#ffd700" stroke-width="2" rx="6"/>
            <text x="550" y="615" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">Matching Methods Comparison</text>
            <line x1="120" y1="640" x2="980" y2="640" stroke="#888" stroke-width="1"/>
            <text x="200" y="670" fill="#ffd700" font-size="15" font-weight="bold">Method</text>
            <text x="430" y="670" fill="#ffd700" font-size="15" font-weight="bold">How it works</text>
            <text x="720" y="670" fill="#ffd700" font-size="15" font-weight="bold">Accuracy</text>
            <text x="900" y="670" fill="#ffd700" font-size="15" font-weight="bold">Use</text>
            <line x1="120" y1="685" x2="980" y2="685" stroke="#888" stroke-width="1"/>
            <text x="200" y="715" fill="#6366f1" font-size="14" font-weight="bold">Deterministic</text>
            <text x="430" y="715" fill="#ffffff" font-size="14">Exact char-for-char match</text>
            <text x="720" y="715" fill="#ffffff" font-size="14">High precision</text>
            <text x="900" y="715" fill="#ffffff" font-size="14">Small MPI</text>
            <text x="200" y="755" fill="#10b981" font-size="14" font-weight="bold">Probabilistic</text>
            <text x="430" y="755" fill="#ffffff" font-size="14">Weighted score across fields</text>
            <text x="720" y="755" fill="#ffffff" font-size="14">High recall</text>
            <text x="900" y="755" fill="#ffffff" font-size="14">Enterprise</text>
            <text x="200" y="795" fill="#ec4899" font-size="14" font-weight="bold">Referential</text>
            <text x="430" y="795" fill="#ffffff" font-size="14">Compares to external IDs (Verato)</text>
            <text x="720" y="795" fill="#ffffff" font-size="14">Highest</text>
            <text x="900" y="795" fill="#ffffff" font-size="14">HIE/EMPI</text>
            <text x="200" y="835" fill="#f59e0b" font-size="14" font-weight="bold">Biometric</text>
            <text x="430" y="835" fill="#ffffff" font-size="14">Palm-vein, iris, fingerprint</text>
            <text x="720" y="835" fill="#ffffff" font-size="14">99.99%</text>
            <text x="900" y="835" fill="#ffffff" font-size="14">Adv ER</text>
            <text x="550" y="895" text-anchor="middle" fill="#10b981" font-size="16">AHIMA Target Duplicate Rate: &lt;2% | Industry Average: 8-12%</text>
            <text x="550" y="930" text-anchor="middle" fill="#888" font-size="14">Joint Commission classifies overlays as SENTINEL EVENTS — root cause analysis required</text>
          </svg>`,
          caption: "Duplicates fragment one patient across multiple MRNs (merge to fix); overlays merge two patients into one chart (split to fix — and report as a sentinel event)."
        }
      },
      {
        type: "example",
        title: "Real-World MPI Cleanup: A 1,200-Bed Health System",
        content: `**Case study**: A Texas health system audited its EMPI in 2022 and found **47,000 suspected duplicates** in a 1.2M-record database — a **3.9% duplicate rate**, double the AHIMA target. Estimated rework cost: **$47 million** annually in denied claims, duplicate testing, and registration labor.

**Step 1 — Identify**: ran probabilistic matching software (NextGate) with a confidence threshold of **95%**, flagging 47,000 record pairs.

**Step 2 — Triage**: an HIM data integrity team reviewed each pair, sorting into **auto-merge (>99% confidence, 12,000 pairs)**, **manual review (95–99%, 33,000 pairs)**, and **investigate (twin/family members, 2,000 pairs)**.

**Step 3 — Merge**: each merge documented patient name, both MRNs, surviving MRN, reviewer initials, and timestamp — kept in an **audit log retained 7 years** per state law.

**Step 4 — Prevent**: registration retrained to require **8 identifiers minimum**, biometric palm-vein scanning added at ER intake, and a **real-time duplicate alert** fires if a new registration matches an existing patient with >85% confidence. New duplicate rate after 18 months: **1.4%**.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="50" text-anchor="middle" fill="#ffd700" font-size="26" font-weight="bold">Texas Health System: 47,000 Duplicates Cleanup</text>
            <text x="550" y="80" text-anchor="middle" fill="#888" font-size="16">1.2M record MPI | 3.9% duplicate rate | $47M annual cost</text>
            <rect x="60" y="120" width="220" height="200" fill="#1a1a2e" stroke="#ef4444" stroke-width="2" rx="6"/>
            <text x="170" y="155" text-anchor="middle" fill="#ef4444" font-size="18" font-weight="bold">STEP 1</text>
            <text x="170" y="180" text-anchor="middle" fill="#ffd700" font-size="15">IDENTIFY</text>
            <text x="170" y="215" text-anchor="middle" fill="#ffffff" font-size="13">Probabilistic scan</text>
            <text x="170" y="240" text-anchor="middle" fill="#ffffff" font-size="13">NextGate engine</text>
            <text x="170" y="265" text-anchor="middle" fill="#ffffff" font-size="13">95% threshold</text>
            <text x="170" y="295" text-anchor="middle" fill="#10b981" font-size="14" font-weight="bold">→ 47,000 flagged</text>
            <rect x="290" y="120" width="220" height="200" fill="#1a1a2e" stroke="#f59e0b" stroke-width="2" rx="6"/>
            <text x="400" y="155" text-anchor="middle" fill="#f59e0b" font-size="18" font-weight="bold">STEP 2</text>
            <text x="400" y="180" text-anchor="middle" fill="#ffd700" font-size="15">TRIAGE</text>
            <text x="400" y="215" text-anchor="middle" fill="#ffffff" font-size="13">Auto-merge: 12K</text>
            <text x="400" y="240" text-anchor="middle" fill="#ffffff" font-size="13">Manual: 33K</text>
            <text x="400" y="265" text-anchor="middle" fill="#ffffff" font-size="13">Investigate: 2K</text>
            <text x="400" y="295" text-anchor="middle" fill="#10b981" font-size="14" font-weight="bold">Team of 8 analysts</text>
            <rect x="520" y="120" width="220" height="200" fill="#1a1a2e" stroke="#10b981" stroke-width="2" rx="6"/>
            <text x="630" y="155" text-anchor="middle" fill="#10b981" font-size="18" font-weight="bold">STEP 3</text>
            <text x="630" y="180" text-anchor="middle" fill="#ffd700" font-size="15">MERGE</text>
            <text x="630" y="215" text-anchor="middle" fill="#ffffff" font-size="13">Document both MRNs</text>
            <text x="630" y="240" text-anchor="middle" fill="#ffffff" font-size="13">Surviving MRN noted</text>
            <text x="630" y="265" text-anchor="middle" fill="#ffffff" font-size="13">Reviewer + time stamp</text>
            <text x="630" y="295" text-anchor="middle" fill="#10b981" font-size="14" font-weight="bold">7-year audit log</text>
            <rect x="750" y="120" width="220" height="200" fill="#1a1a2e" stroke="#ec4899" stroke-width="2" rx="6"/>
            <text x="860" y="155" text-anchor="middle" fill="#ec4899" font-size="18" font-weight="bold">STEP 4</text>
            <text x="860" y="180" text-anchor="middle" fill="#ffd700" font-size="15">PREVENT</text>
            <text x="860" y="215" text-anchor="middle" fill="#ffffff" font-size="13">8 IDs required</text>
            <text x="860" y="240" text-anchor="middle" fill="#ffffff" font-size="13">Palm-vein biometrics</text>
            <text x="860" y="265" text-anchor="middle" fill="#ffffff" font-size="13">Real-time alerts</text>
            <text x="860" y="295" text-anchor="middle" fill="#10b981" font-size="14" font-weight="bold">Rate: 3.9 → 1.4%</text>
            <line x1="280" y1="220" x2="290" y2="220" stroke="#ffd700" stroke-width="3" marker-end="url(#arr7)"/>
            <line x1="510" y1="220" x2="520" y2="220" stroke="#ffd700" stroke-width="3" marker-end="url(#arr7)"/>
            <line x1="740" y1="220" x2="750" y2="220" stroke="#ffd700" stroke-width="3" marker-end="url(#arr7)"/>
            <defs><marker id="arr7" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#ffd700"/></marker></defs>
            <rect x="100" y="370" width="900" height="320" fill="#1a1a2e" stroke="#ffd700" stroke-width="2" rx="6"/>
            <text x="550" y="405" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">Merge Audit Log Sample Entry</text>
            <line x1="130" y1="425" x2="970" y2="425" stroke="#888"/>
            <text x="150" y="455" fill="#ffd700" font-size="14" font-weight="bold">Field</text>
            <text x="500" y="455" fill="#ffd700" font-size="14" font-weight="bold">Value</text>
            <line x1="130" y1="465" x2="970" y2="465" stroke="#888"/>
            <text x="150" y="495" fill="#ffffff" font-size="14">Merge ID</text>
            <text x="500" y="495" fill="#10b981" font-size="14">MRG-2022-014772</text>
            <text x="150" y="525" fill="#ffffff" font-size="14">Patient Name</text>
            <text x="500" y="525" fill="#10b981" font-size="14">Smith, Robert J.</text>
            <text x="150" y="555" fill="#ffffff" font-size="14">Source MRN (retired)</text>
            <text x="500" y="555" fill="#10b981" font-size="14">91103</text>
            <text x="150" y="585" fill="#ffffff" font-size="14">Surviving MRN</text>
            <text x="500" y="585" fill="#10b981" font-size="14">88421</text>
            <text x="150" y="615" fill="#ffffff" font-size="14">Match Confidence</text>
            <text x="500" y="615" fill="#10b981" font-size="14">99.2% (probabilistic)</text>
            <text x="150" y="645" fill="#ffffff" font-size="14">Reviewer</text>
            <text x="500" y="645" fill="#10b981" font-size="14">J. Martinez, RHIA</text>
            <text x="150" y="675" fill="#ffffff" font-size="14">Timestamp</text>
            <text x="500" y="675" fill="#10b981" font-size="14">2022-08-14 14:32 CDT</text>
            <rect x="100" y="730" width="900" height="240" fill="#1a1a2e" stroke="#10b981" stroke-width="2" rx="6"/>
            <text x="550" y="765" text-anchor="middle" fill="#10b981" font-size="20" font-weight="bold">Outcomes After 18 Months</text>
            <text x="220" y="810" fill="#ffd700" font-size="16">Duplicate rate:</text>
            <text x="550" y="810" fill="#ffffff" font-size="16">3.9% → 1.4%</text>
            <text x="850" y="810" fill="#10b981" font-size="16">-64%</text>
            <text x="220" y="845" fill="#ffd700" font-size="16">Claim denials:</text>
            <text x="550" y="845" fill="#ffffff" font-size="16">11.2% → 4.8%</text>
            <text x="850" y="845" fill="#10b981" font-size="16">-57%</text>
            <text x="220" y="880" fill="#ffd700" font-size="16">Duplicate labs:</text>
            <text x="550" y="880" fill="#ffffff" font-size="16">$2.1M → $640K</text>
            <text x="850" y="880" fill="#10b981" font-size="16">-70%</text>
            <text x="220" y="915" fill="#ffd700" font-size="16">Net savings:</text>
            <text x="550" y="915" fill="#10b981" font-size="16" font-weight="bold">~$31M / year</text>
            <text x="850" y="915" fill="#10b981" font-size="16">+</text>
            <text x="550" y="1020" text-anchor="middle" fill="#888" font-size="15">ROI on $4.2M cleanup project: 738% in year 1</text>
          </svg>`,
          caption: "Texas case study: probabilistic matching, triaged review, full audit logging, and biometric prevention — duplicate rate dropped 64%, saving $31M/year."
        }
      },
      {
        type: "quiz",
        title: "Knowledge Check: MPI Errors",
        content: `Test your understanding of the most dangerous MPI error scenario.`,
        question: "A registration clerk pulls up MRN 44218 for a patient named Maria Lopez. The chart shows a penicillin allergy and a recent appendectomy. The patient in front of the clerk says she has no allergies and has never had surgery. What MPI error is most likely, and what is the correct immediate action?",
        options: [
          {
            text: "It's a duplicate — merge both records into MRN 44218 to consolidate Maria's history.",
            correct: false
          },
          {
            text: "It's an overlay — STOP, do not document under this MRN, alert HIM data integrity for an unmerge/split investigation.",
            correct: true
          },
          {
            text: "It's a typo — re-enter the patient's name and the system will auto-correct.",
            correct: false
          },
          {
            text: "It's a data entry lag — wait 24 hours for the chart to refresh and try again.",
            correct: false
          }
        ],
        explanation: `This is a classic **overlay**: two different patients share one MRN. Merging would compound the disaster by adding more data to the contaminated chart. The correct action is to **halt all documentation under MRN 44218**, register the current patient under a **new MRN**, and immediately notify the **HIM data integrity team** so they can split the chart, separate the records, and report it as a **Joint Commission sentinel event**. Overlays carry HIPAA breach exposure (Patient A's data was disclosed inside Patient B's chart) and patient-safety risk (wrong meds, wrong surgery). Never resolve an overlay at the registration desk — escalate every time.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-size="26" font-weight="bold">Overlay Response Protocol</text>
            <text x="550" y="90" text-anchor="middle" fill="#888" font-size="16">If a patient denies data in their chart → assume overlay until proven otherwise</text>
            <rect x="150" y="130" width="800" height="120" fill="#1a1a2e" stroke="#ef4444" stroke-width="3" rx="6"/>
            <text x="550" y="170" text-anchor="middle" fill="#ef4444" font-size="22" font-weight="bold">RED FLAG TRIGGERS</text>
            <text x="180" y="205" fill="#ffffff" font-size="15">• Patient denies allergies/surgeries the chart shows</text>
            <text x="180" y="230" fill="#ffffff" font-size="15">• DOB or sex on chart doesn't match the patient in front of you</text>
            <text x="600" y="205" fill="#ffffff" font-size="15">• Unexpected race/ethnicity mismatch</text>
            <text x="600" y="230" fill="#ffffff" font-size="15">• Clinical notes name a different person</text>
            <rect x="80" y="290" width="200" height="180" fill="#1a1a2e" stroke="#f59e0b" stroke-width="2" rx="6"/>
            <text x="180" y="325" text-anchor="middle" fill="#f59e0b" font-size="18" font-weight="bold">1. STOP</text>
            <text x="180" y="365" text-anchor="middle" fill="#ffffff" font-size="13">Do NOT chart</text>
            <text x="180" y="390" text-anchor="middle" fill="#ffffff" font-size="13">under this MRN</text>
            <text x="180" y="425" text-anchor="middle" fill="#ef4444" font-size="13">Freeze the record</text>
            <rect x="300" y="290" width="200" height="180" fill="#1a1a2e" stroke="#6366f1" stroke-width="2" rx="6"/>
            <text x="400" y="325" text-anchor="middle" fill="#6366f1" font-size="18" font-weight="bold">2. NEW MRN</text>
            <text x="400" y="365" text-anchor="middle" fill="#ffffff" font-size="13">Register current</text>
            <text x="400" y="390" text-anchor="middle" fill="#ffffff" font-size="13">patient with new ID</text>
            <text x="400" y="425" text-anchor="middle" fill="#10b981" font-size="13">8+ identifiers</text>
            <rect x="520" y="290" width="200" height="180" fill="#1a1a2e" stroke="#ec4899" stroke-width="2" rx="6"/>
            <text x="620" y="325" text-anchor="middle" fill="#ec4899" font-size="18" font-weight="bold">3. ESCALATE</text>
            <text x="620" y="365" text-anchor="middle" fill="#ffffff" font-size="13">HIM data integrity</text>
            <text x="620" y="390" text-anchor="middle" fill="#ffffff" font-size="13">+ Privacy Officer</text>
            <text x="620" y="425" text-anchor="middle" fill="#ef4444" font-size="13">Immediate page</text>
            <rect x="740" y="290" width="200" height="180" fill="#1a1a2e" stroke="#10b981" stroke-width="2" rx="6"/>
            <text x="840" y="325" text-anchor="middle" fill="#10b981" font-size="18" font-weight="bold">4. REPORT</text>
            <text x="840" y="365" text-anchor="middle" fill="#ffffff" font-size="13">Joint Commission</text>
            <text x="840" y="390" text-anchor="middle" fill="#ffffff" font-size="13">Sentinel event</text>
            <text x="840" y="425" text-anchor="middle" fill="#ffd700" font-size="13">Root cause analysis</text>
            <rect x="100" y="510" width="900" height="280" fill="#1a1a2e" stroke="#ffd700" stroke-width="2" rx="6"/>
            <text x="550" y="545" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">Why Merging Would Be Catastrophic</text>
            <text x="130" y="585" fill="#ffffff" font-size="15">Merge action assumes: same patient, multiple charts → combine into one</text>
            <text x="130" y="615" fill="#ef4444" font-size="15">Overlay reality: different patients in one chart → combining ADDS more contamination</text>
            <text x="130" y="655" fill="#ffffff" font-size="15">Result: Patient A's allergies merge with Patient B's meds; the wrong-patient prescription</text>
            <text x="130" y="680" fill="#ffffff" font-size="15">becomes "verified" because two charts now agree on the wrong data.</text>
            <text x="130" y="720" fill="#10b981" font-size="15">SPLIT action: identifies which encounters belong to Patient A vs B, reassigns each to</text>
            <text x="130" y="745" fill="#10b981" font-size="15">a correct MRN, and logs every move for the 7-year audit trail.</text>
            <text x="550" y="850" text-anchor="middle" fill="#ef4444" font-size="22" font-weight="bold">CCA EXAM TIP</text>
            <text x="550" y="895" text-anchor="middle" fill="#ffffff" font-size="17">Mismatched demographics + denied history = OVERLAY</text>
            <text x="550" y="925" text-anchor="middle" fill="#ffffff" font-size="17">Matching demographics + history both fit = DUPLICATE</text>
            <text x="550" y="985" text-anchor="middle" fill="#888" font-size="14">Never resolve an overlay at the registration desk — escalate every time</text>
          </svg>`,
          caption: "Overlay response: stop, register the live patient with a new MRN, escalate to HIM data integrity, and file a sentinel event report — never merge."
        }
      },
      {
        type: "application",
        title: "On the Job: MPI Quality as a CCA",
        content: `As a CCA in a clinic, hospital, or coding company, you will not run the MPI software — but you **will be the front line of MPI integrity** because every code you assign depends on the chart pulling correctly.

**Daily habits**: when a chart looks oddly thin (a 78-year-old with no past medical history) or oddly thick (a healthy 18-year-old with three cardiac surgeries), **stop and verify** the MRN. Cross-check **at least 3 identifiers** before coding: name, DOB, and one of (SSN, address, encounter date). If something is off, **flag the chart in the work queue** with a note like *"Suspect overlay — see allergy mismatch vs nursing note"* and escalate to your HIM lead.

**Productivity metric**: AHIMA's Coder Quality Standards expect you to **catch 1 MPI error per 500 charts coded**. Catching them is **billable productivity** (most coding companies pay a flag bonus) and **protects your CCA credential** — coding to the wrong patient is grounds for credential revocation under the AHIMA Code of Ethics.

**Documentation rule**: never resolve, never merge — only flag and escalate. Touching the MPI without authorization is a fireable HIPAA violation.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-size="26" font-weight="bold">The CCA's MPI Vigilance Checklist</text>
            <text x="550" y="90" text-anchor="middle" fill="#888" font-size="16">You are the front-line MPI integrity defender</text>
            <rect x="80" y="130" width="940" height="260" fill="#1a1a2e" stroke="#ffd700" stroke-width="2" rx="6"/>
            <text x="550" y="165" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">Before You Code Any Chart — 3-ID Verification</text>
            <line x1="110" y1="185" x2="990" y2="185" stroke="#888"/>
            <text x="200" y="225" text-anchor="middle" fill="#6366f1" font-size="40">1</text>
            <text x="200" y="255" text-anchor="middle" fill="#ffd700" font-size="16" font-weight="bold">Name</text>
            <text x="200" y="280" text-anchor="middle" fill="#ffffff" font-size="13">Match the chart's</text>
            <text x="200" y="300" text-anchor="middle" fill="#ffffff" font-size="13">legal name to the</text>
            <text x="200" y="320" text-anchor="middle" fill="#ffffff" font-size="13">face sheet exactly</text>
            <text x="550" y="225" text-anchor="middle" fill="#10b981" font-size="40">2</text>
            <text x="550" y="255" text-anchor="middle" fill="#ffd700" font-size="16" font-weight="bold">DOB</text>
            <text x="550" y="280" text-anchor="middle" fill="#ffffff" font-size="13">Year of birth</text>
            <text x="550" y="300" text-anchor="middle" fill="#ffffff" font-size="13">should fit the</text>
            <text x="550" y="320" text-anchor="middle" fill="#ffffff" font-size="13">clinical picture</text>
            <text x="900" y="225" text-anchor="middle" fill="#ec4899" font-size="40">3</text>
            <text x="900" y="255" text-anchor="middle" fill="#ffd700" font-size="16" font-weight="bold">One More</text>
            <text x="900" y="280" text-anchor="middle" fill="#ffffff" font-size="13">SSN last 4, address,</text>
            <text x="900" y="300" text-anchor="middle" fill="#ffffff" font-size="13">or encounter date</text>
            <text x="900" y="320" text-anchor="middle" fill="#ffffff" font-size="13">must match too</text>
            <text x="550" y="365" text-anchor="middle" fill="#ef4444" font-size="15">If ANY of 3 fails → STOP coding, flag the chart, escalate</text>
            <rect x="80" y="410" width="940" height="300" fill="#1a1a2e" stroke="#10b981" stroke-width="2" rx="6"/>
            <text x="550" y="445" text-anchor="middle" fill="#10b981" font-size="20" font-weight="bold">Red Flags in Your Work Queue</text>
            <text x="110" y="485" fill="#ffd700" font-size="15" font-weight="bold">Demographic mismatch</text>
            <text x="110" y="510" fill="#ffffff" font-size="14">Face sheet says 78 y/o female; H&amp;P references "young male athlete"</text>
            <text x="110" y="545" fill="#ffd700" font-size="15" font-weight="bold">Clinical impossibility</text>
            <text x="110" y="570" fill="#ffffff" font-size="14">3-year-old with prior CABG; pregnant male encounter; deceased patient ER visit</text>
            <text x="110" y="605" fill="#ffd700" font-size="15" font-weight="bold">History gaps or excess</text>
            <text x="110" y="630" fill="#ffffff" font-size="14">Healthy 18-year-old with 3 cardiac surgeries — likely overlay from another patient</text>
            <text x="110" y="665" fill="#ffd700" font-size="15" font-weight="bold">Allergy contradiction</text>
            <text x="110" y="690" fill="#ffffff" font-size="14">Penicillin allergy on face sheet; recent IV penicillin admin with no reaction noted</text>
            <rect x="80" y="730" width="940" height="280" fill="#1a1a2e" stroke="#ef4444" stroke-width="2" rx="6"/>
            <text x="550" y="765" text-anchor="middle" fill="#ef4444" font-size="20" font-weight="bold">What to Do — and What NOT to Do</text>
            <rect x="110" y="790" width="430" height="200" fill="#1a1a2e" stroke="#10b981" stroke-width="2" rx="4"/>
            <text x="325" y="820" text-anchor="middle" fill="#10b981" font-size="16" font-weight="bold">DO</text>
            <text x="130" y="850" fill="#ffffff" font-size="13">+ Flag chart in work queue</text>
            <text x="130" y="875" fill="#ffffff" font-size="13">+ Note specific mismatch detail</text>
            <text x="130" y="900" fill="#ffffff" font-size="13">+ Page HIM data integrity lead</text>
            <text x="130" y="925" fill="#ffffff" font-size="13">+ Hold coding until resolved</text>
            <text x="130" y="950" fill="#ffffff" font-size="13">+ Log every escalation (productivity)</text>
            <text x="130" y="975" fill="#ffffff" font-size="13">+ Earn flag bonus + protect cred</text>
            <rect x="560" y="790" width="430" height="200" fill="#1a1a2e" stroke="#ef4444" stroke-width="2" rx="4"/>
            <text x="775" y="820" text-anchor="middle" fill="#ef4444" font-size="16" font-weight="bold">DON'T</text>
            <text x="580" y="850" fill="#ffffff" font-size="13">- Edit demographics yourself</text>
            <text x="580" y="875" fill="#ffffff" font-size="13">- Merge or split records</text>
            <text x="580" y="900" fill="#ffffff" font-size="13">- Code "around" the mismatch</text>
            <text x="580" y="925" fill="#ffffff" font-size="13">- Assume it's a typo</text>
            <text x="580" y="950" fill="#ffffff" font-size="13">- Skip flagging "just this once"</text>
            <text x="580" y="975" fill="#ffffff" font-size="13">- Touch MPI = HIPAA violation</text>
            <text x="550" y="1050" text-anchor="middle" fill="#888" font-size="14">AHIMA Code of Ethics: coding to the wrong patient is grounds for CCA revocation</text>
          </svg>`,
          caption: "Your CCA value rises every time you catch and escalate an MPI mismatch — but never resolve it yourself; that's a HIPAA-violation firing offense."
        }
      }
    ]
  },
  {
    id: "cca-domain-1-lesson-8",
    title: "Release of Information (ROI): Authorizations, Verifications, and Disclosure Tracking",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "ROI: The Highest-Risk Operation in HIM",
        content: `**Release of Information (ROI)** is the formal process of disclosing **Protected Health Information (PHI)** to a requester — patient, attorney, insurer, court, or another provider. It is the **single highest-liability operation in HIM** because every disclosure either complies with HIPAA, state law, and the **Privacy Rule (45 CFR Part 164)** — or it triggers a **breach notification**, civil penalty, and patient lawsuit.

A valid **HIPAA authorization** under 45 CFR 164.508 must contain **six core elements** and three required statements; one missing element makes the authorization void and the disclosure illegal.

Beyond authorization, ROI requires **verification of identity** (driver's license, notarization for legal requests), **tracking of every disclosure** for the **6-year accounting-of-disclosures** rule under §164.528, and adherence to **15-day turnaround** for patient access requests under the 2024 final rule.

Special PHI categories — **psychotherapy notes, HIV/AIDS results, substance abuse (42 CFR Part 2), and genetic information (GINA)** — require **separate, specific authorizations**. A general authorization does NOT cover them; releasing them anyway is a per-record federal violation.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-size="28" font-weight="bold">The ROI Risk Stack</text>
            <text x="550" y="90" text-anchor="middle" fill="#888" font-size="16">Six elements must all pass before any PHI leaves the building</text>
            <rect x="80" y="130" width="940" height="60" fill="#1a1a2e" stroke="#ef4444" stroke-width="2" rx="4"/>
            <text x="550" y="170" text-anchor="middle" fill="#ef4444" font-size="20" font-weight="bold">Penalty for incorrect release: $100–$50,000 per record + civil suit + state law</text>
            <rect x="60" y="220" width="320" height="380" fill="#1a1a2e" stroke="#ffd700" stroke-width="2" rx="6"/>
            <text x="220" y="255" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">6 Core Elements</text>
            <text x="220" y="278" text-anchor="middle" fill="#888" font-size="13">45 CFR 164.508(c)(1)</text>
            <text x="80" y="315" fill="#ffffff" font-size="14">1. Specific description of PHI</text>
            <text x="80" y="350" fill="#ffffff" font-size="14">2. Who may disclose (provider)</text>
            <text x="80" y="385" fill="#ffffff" font-size="14">3. Who may receive (recipient)</text>
            <text x="80" y="420" fill="#ffffff" font-size="14">4. Purpose of disclosure</text>
            <text x="80" y="455" fill="#ffffff" font-size="14">5. Expiration date or event</text>
            <text x="80" y="490" fill="#ffffff" font-size="14">6. Signature + date</text>
            <text x="220" y="540" text-anchor="middle" fill="#ef4444" font-size="14" font-weight="bold">Missing 1 = VOID</text>
            <text x="220" y="565" text-anchor="middle" fill="#888" font-size="13">No partial credit</text>
            <rect x="400" y="220" width="320" height="380" fill="#1a1a2e" stroke="#10b981" stroke-width="2" rx="6"/>
            <text x="560" y="255" text-anchor="middle" fill="#10b981" font-size="20" font-weight="bold">3 Required Statements</text>
            <text x="560" y="278" text-anchor="middle" fill="#888" font-size="13">45 CFR 164.508(c)(2)</text>
            <text x="420" y="315" fill="#ffffff" font-size="14">A. Right to revoke in writing</text>
            <text x="420" y="350" fill="#ffffff" font-size="14">B. Treatment not conditioned</text>
            <text x="420" y="385" fill="#ffffff" font-size="14">    on signing</text>
            <text x="420" y="420" fill="#ffffff" font-size="14">C. Re-disclosure risk warning</text>
            <text x="420" y="455" fill="#ffffff" font-size="14">    (recipient may pass it on</text>
            <text x="420" y="480" fill="#ffffff" font-size="14">    outside HIPAA protection)</text>
            <text x="560" y="540" text-anchor="middle" fill="#10b981" font-size="14" font-weight="bold">All 3 verbatim</text>
            <text x="560" y="565" text-anchor="middle" fill="#888" font-size="13">on the form</text>
            <rect x="740" y="220" width="320" height="380" fill="#1a1a2e" stroke="#ec4899" stroke-width="2" rx="6"/>
            <text x="900" y="255" text-anchor="middle" fill="#ec4899" font-size="20" font-weight="bold">Special PHI</text>
            <text x="900" y="278" text-anchor="middle" fill="#888" font-size="13">Need separate authorization</text>
            <text x="760" y="315" fill="#ffffff" font-size="14">• Psychotherapy notes</text>
            <text x="760" y="350" fill="#ffffff" font-size="14">• HIV/AIDS test results</text>
            <text x="760" y="385" fill="#ffffff" font-size="14">• Substance abuse</text>
            <text x="760" y="410" fill="#ffffff" font-size="14">    (42 CFR Part 2)</text>
            <text x="760" y="445" fill="#ffffff" font-size="14">• Genetic info (GINA)</text>
            <text x="760" y="480" fill="#ffffff" font-size="14">• Mental health (state-level)</text>
            <text x="900" y="540" text-anchor="middle" fill="#ef4444" font-size="14" font-weight="bold">General auth ≠ enough</text>
            <text x="900" y="565" text-anchor="middle" fill="#888" font-size="13">Must check box specifically</text>
            <rect x="80" y="640" width="940" height="280" fill="#1a1a2e" stroke="#ffd700" stroke-width="2" rx="6"/>
            <text x="550" y="675" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">ROI Turnaround Standards</text>
            <line x1="110" y1="695" x2="990" y2="695" stroke="#888"/>
            <text x="250" y="725" fill="#ffd700" font-size="15" font-weight="bold">Request Type</text>
            <text x="600" y="725" fill="#ffd700" font-size="15" font-weight="bold">Standard</text>
            <text x="850" y="725" fill="#ffd700" font-size="15" font-weight="bold">Authority</text>
            <line x1="110" y1="740" x2="990" y2="740" stroke="#888"/>
            <text x="130" y="770" fill="#ffffff" font-size="14">Patient access (own records)</text>
            <text x="600" y="770" fill="#10b981" font-size="14">15 days</text>
            <text x="850" y="770" fill="#888" font-size="14">HIPAA 2024</text>
            <text x="130" y="805" fill="#ffffff" font-size="14">Continuity of care (treatment)</text>
            <text x="600" y="805" fill="#10b981" font-size="14">Immediate</text>
            <text x="850" y="805" fill="#888" font-size="14">TPO exception</text>
            <text x="130" y="840" fill="#ffffff" font-size="14">Subpoena (civil)</text>
            <text x="600" y="840" fill="#10b981" font-size="14">By return date</text>
            <text x="850" y="840" fill="#888" font-size="14">State court</text>
            <text x="130" y="875" fill="#ffffff" font-size="14">Court order</text>
            <text x="600" y="875" fill="#ef4444" font-size="14">Immediate / by date</text>
            <text x="850" y="875" fill="#888" font-size="14">Judicial</text>
            <text x="130" y="905" fill="#ffffff" font-size="14">Attorney request (civil)</text>
            <text x="600" y="905" fill="#10b981" font-size="14">30 days</text>
            <text x="850" y="905" fill="#888" font-size="14">State law</text>
            <text x="550" y="970" text-anchor="middle" fill="#10b981" font-size="16">2024 HIPAA rule: $25 max fee + electronic delivery for patient access</text>
            <text x="550" y="1010" text-anchor="middle" fill="#888" font-size="14">Late = OCR civil penalty up to $50K per record</text>
          </svg>`,
          caption: "Every ROI request hits a 6-element + 3-statement check, special-PHI verification, and a turnaround clock — miss any and OCR fines start at $100/record."
        }
      },
      {
        type: "concept",
        title: "The Accounting of Disclosures: 6-Year Tracking",
        content: `Under **45 CFR §164.528**, patients have the right to receive an **Accounting of Disclosures** showing every PHI disclosure made **without their authorization** during the **past 6 years**. The HIM department must produce this list within **60 days** of request (one 30-day extension allowed). Failure to track makes compliance impossible.

**What must be logged**: date of disclosure, recipient name and address, brief description of PHI disclosed, and the purpose. For routine recurring disclosures (e.g., monthly reporting to a state cancer registry), only the **first and last date and frequency** need be logged.

**What is excluded**: disclosures for **TPO (Treatment, Payment, Operations)**, disclosures **authorized by the patient**, disclosures to **the patient themselves**, **incidental** disclosures, and disclosures for a **facility directory or to family** (when patient was given opportunity to object).

**What must be logged anyway**: disclosures to **public health, law enforcement, OCR investigations, abuse/neglect reports, workers' comp, judicial subpoenas, and research without authorization**. Most ROI systems (Verisma, MRO, Ciox) auto-log these; manual systems are still common in small practices and are the leading source of audit-failure penalties.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="50" text-anchor="middle" fill="#ffd700" font-size="28" font-weight="bold">Accounting of Disclosures: What to Log</text>
            <text x="550" y="85" text-anchor="middle" fill="#888" font-size="16">6-year lookback | 60-day response | 45 CFR 164.528</text>
            <rect x="60" y="120" width="490" height="430" fill="#1a1a2e" stroke="#10b981" stroke-width="3" rx="8"/>
            <text x="305" y="160" text-anchor="middle" fill="#10b981" font-size="22" font-weight="bold">MUST LOG</text>
            <text x="305" y="185" text-anchor="middle" fill="#888" font-size="14">Disclosures requiring accounting entry</text>
            <text x="80" y="225" fill="#ffd700" font-size="15">+ Public health reporting</text>
            <text x="100" y="247" fill="#ffffff" font-size="13">(communicable disease, immunization registry)</text>
            <text x="80" y="278" fill="#ffd700" font-size="15">+ Law enforcement requests</text>
            <text x="100" y="300" fill="#ffffff" font-size="13">(crime victim, suspect identification)</text>
            <text x="80" y="331" fill="#ffd700" font-size="15">+ OCR / HHS investigation</text>
            <text x="100" y="353" fill="#ffffff" font-size="13">(HIPAA audit, complaint investigation)</text>
            <text x="80" y="384" fill="#ffd700" font-size="15">+ Abuse/neglect reports</text>
            <text x="100" y="406" fill="#ffffff" font-size="13">(child, elder, dependent adult)</text>
            <text x="80" y="437" fill="#ffd700" font-size="15">+ Workers' compensation</text>
            <text x="100" y="459" fill="#ffffff" font-size="13">(claim adjudication)</text>
            <text x="80" y="490" fill="#ffd700" font-size="15">+ Subpoena / court order</text>
            <text x="100" y="512" fill="#ffffff" font-size="13">(judicial proceeding)</text>
            <text x="80" y="540" fill="#ffd700" font-size="15">+ Research without authorization</text>
            <rect x="560" y="120" width="490" height="430" fill="#1a1a2e" stroke="#ef4444" stroke-width="3" rx="8"/>
            <text x="805" y="160" text-anchor="middle" fill="#ef4444" font-size="22" font-weight="bold">DO NOT LOG</text>
            <text x="805" y="185" text-anchor="middle" fill="#888" font-size="14">Disclosures excluded by §164.528(a)(1)</text>
            <text x="580" y="225" fill="#ffd700" font-size="15">– Treatment / Payment / Operations (TPO)</text>
            <text x="600" y="247" fill="#ffffff" font-size="13">99% of routine clinical work</text>
            <text x="580" y="278" fill="#ffd700" font-size="15">– Disclosures the patient authorized</text>
            <text x="600" y="300" fill="#ffffff" font-size="13">(they signed a release)</text>
            <text x="580" y="331" fill="#ffd700" font-size="15">– Disclosures TO the patient</text>
            <text x="600" y="353" fill="#ffffff" font-size="13">(self-access, my-chart download)</text>
            <text x="580" y="384" fill="#ffd700" font-size="15">– Incidental disclosures</text>
            <text x="600" y="406" fill="#ffffff" font-size="13">(overheard in hallway, sign-in sheet)</text>
            <text x="580" y="437" fill="#ffd700" font-size="15">– Facility directory / family</text>
            <text x="600" y="459" fill="#ffffff" font-size="13">(if patient had chance to object)</text>
            <text x="580" y="490" fill="#ffd700" font-size="15">– Limited data sets (research)</text>
            <text x="600" y="512" fill="#ffffff" font-size="13">(de-identified with DUA)</text>
            <text x="580" y="540" fill="#ffd700" font-size="15">– National security / intelligence</text>
            <rect x="80" y="585" width="940" height="320" fill="#1a1a2e" stroke="#ffd700" stroke-width="2" rx="6"/>
            <text x="550" y="620" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">Required Accounting Log Fields</text>
            <line x1="110" y1="640" x2="990" y2="640" stroke="#888"/>
            <text x="160" y="670" fill="#ffd700" font-size="14" font-weight="bold">Date</text>
            <text x="320" y="670" fill="#ffd700" font-size="14" font-weight="bold">Recipient</text>
            <text x="560" y="670" fill="#ffd700" font-size="14" font-weight="bold">PHI Disclosed</text>
            <text x="830" y="670" fill="#ffd700" font-size="14" font-weight="bold">Purpose</text>
            <line x1="110" y1="685" x2="990" y2="685" stroke="#888"/>
            <text x="120" y="715" fill="#ffffff" font-size="13">2024-03-14</text>
            <text x="320" y="715" fill="#ffffff" font-size="13">CA Cancer Registry</text>
            <text x="560" y="715" fill="#ffffff" font-size="13">Dx + stage + treatment</text>
            <text x="830" y="715" fill="#ffffff" font-size="13">Public health</text>
            <text x="120" y="750" fill="#ffffff" font-size="13">2024-04-22</text>
            <text x="320" y="750" fill="#ffffff" font-size="13">LAPD Det. Ruiz</text>
            <text x="560" y="750" fill="#ffffff" font-size="13">GSW location + admit</text>
            <text x="830" y="750" fill="#ffffff" font-size="13">Law enforcement</text>
            <text x="120" y="785" fill="#ffffff" font-size="13">2024-05-08</text>
            <text x="320" y="785" fill="#ffffff" font-size="13">Adult Protective Svcs</text>
            <text x="560" y="785" fill="#ffffff" font-size="13">Bruising note + dx</text>
            <text x="830" y="785" fill="#ffffff" font-size="13">Suspected abuse</text>
            <text x="120" y="820" fill="#ffffff" font-size="13">2024-06-30</text>
            <text x="320" y="820" fill="#ffffff" font-size="13">OCR Investigator</text>
            <text x="560" y="820" fill="#ffffff" font-size="13">Audit log + 5 charts</text>
            <text x="830" y="820" fill="#ffffff" font-size="13">HIPAA inv.</text>
            <text x="120" y="855" fill="#ffffff" font-size="13">2024-07-14</text>
            <text x="320" y="855" fill="#ffffff" font-size="13">Sup. Court (subpoena)</text>
            <text x="560" y="855" fill="#ffffff" font-size="13">Chart 1/1/22–7/14/24</text>
            <text x="830" y="855" fill="#ffffff" font-size="13">Civil litigation</text>
            <text x="550" y="965" text-anchor="middle" fill="#ec4899" font-size="16">Patient request → Hospital must produce list within 60 days (one 30-day extension)</text>
            <text x="550" y="995" text-anchor="middle" fill="#888" font-size="14">Recurring disclosures: log first &amp; last date + frequency only</text>
          </svg>`,
          caption: "Accounting of disclosures: TPO and patient-authorized releases are EXCLUDED; public health, law enforcement, subpoenas, and abuse reports are INCLUDED."
        }
      },
      {
        type: "example",
        title: "Catastrophic ROI Failure: The Psychotherapy Notes Breach",
        content: `**Case study**: A 2019 Massachusetts hospital received an ROI request from a divorcing spouse's attorney. The authorization, signed by the patient, requested *"my complete medical record from 2015–2019"*. The ROI clerk released **2,400 pages** including the patient's **psychotherapy notes**, **substance abuse treatment** (42 CFR Part 2), and **HIV status**.

The patient sued. OCR investigated. The findings:

1. **Psychotherapy notes** require a **specific separate authorization** explicitly identifying them (§164.508(a)(2)) — a general "complete record" request does **not** suffice.
2. **42 CFR Part 2** substance abuse records require an additional **federal-format authorization** with specific re-disclosure prohibition language.
3. The hospital had no policy to **flag charts** containing these special categories; the clerk processed the request as routine.

**Outcome**: $1.55M OCR settlement, mandatory 3-year **Corrective Action Plan**, 18 employees retrained, ROI software upgraded to **auto-block** special-PHI categories without specific authorization, and a public **breach notification** to **all 2.1M** patients in the system (because OCR designated the failure a "systemic risk").

The clerk was terminated; the HIM director resigned. Total cost when including the civil settlement: **$8.4M**.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="50" text-anchor="middle" fill="#ffd700" font-size="26" font-weight="bold">$8.4M Lesson: The Psychotherapy Notes Breach</text>
            <text x="550" y="80" text-anchor="middle" fill="#888" font-size="16">Massachusetts hospital, 2019 — 2,400 pages, 1 missing checkbox</text>
            <rect x="80" y="115" width="940" height="180" fill="#1a1a2e" stroke="#ef4444" stroke-width="2" rx="6"/>
            <text x="550" y="150" text-anchor="middle" fill="#ef4444" font-size="20" font-weight="bold">The Mistake</text>
            <text x="110" y="185" fill="#ffffff" font-size="15">• Attorney requested "complete medical record 2015–2019"</text>
            <text x="110" y="215" fill="#ffffff" font-size="15">• Patient signed standard HIPAA authorization (general)</text>
            <text x="110" y="245" fill="#ffffff" font-size="15">• Clerk released ALL 2,400 pages including psychotherapy + Part 2 + HIV</text>
            <text x="110" y="275" fill="#ef4444" font-size="15" font-weight="bold">• No specific authorization for psychotherapy notes or substance abuse — VIOLATION</text>
            <rect x="80" y="320" width="940" height="280" fill="#1a1a2e" stroke="#ffd700" stroke-width="2" rx="6"/>
            <text x="550" y="355" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">Three Layers of Violation</text>
            <rect x="110" y="380" width="290" height="200" fill="#1a1a2e" stroke="#ec4899" stroke-width="2" rx="4"/>
            <text x="255" y="410" text-anchor="middle" fill="#ec4899" font-size="16" font-weight="bold">Psychotherapy</text>
            <text x="255" y="430" text-anchor="middle" fill="#ec4899" font-size="14">45 CFR 164.508(a)(2)</text>
            <text x="125" y="465" fill="#ffffff" font-size="13">Must be its own auth</text>
            <text x="125" y="490" fill="#ffffff" font-size="13">"Authorization for</text>
            <text x="125" y="510" fill="#ffffff" font-size="13">disclosure of psycho-</text>
            <text x="125" y="530" fill="#ffffff" font-size="13">therapy notes"</text>
            <text x="255" y="565" text-anchor="middle" fill="#ef4444" font-size="14" font-weight="bold">General auth = VOID</text>
            <rect x="410" y="380" width="290" height="200" fill="#1a1a2e" stroke="#f59e0b" stroke-width="2" rx="4"/>
            <text x="555" y="410" text-anchor="middle" fill="#f59e0b" font-size="16" font-weight="bold">Substance Abuse</text>
            <text x="555" y="430" text-anchor="middle" fill="#f59e0b" font-size="14">42 CFR Part 2</text>
            <text x="425" y="465" fill="#ffffff" font-size="13">Federal-format auth</text>
            <text x="425" y="490" fill="#ffffff" font-size="13">Must include re-</text>
            <text x="425" y="510" fill="#ffffff" font-size="13">disclosure prohibition</text>
            <text x="425" y="530" fill="#ffffff" font-size="13">language verbatim</text>
            <text x="555" y="565" text-anchor="middle" fill="#ef4444" font-size="14" font-weight="bold">Stricter than HIPAA</text>
            <rect x="710" y="380" width="290" height="200" fill="#1a1a2e" stroke="#0ea5e9" stroke-width="2" rx="4"/>
            <text x="855" y="410" text-anchor="middle" fill="#0ea5e9" font-size="16" font-weight="bold">HIV / STI</text>
            <text x="855" y="430" text-anchor="middle" fill="#0ea5e9" font-size="14">State + federal</text>
            <text x="725" y="465" fill="#ffffff" font-size="13">Most states require</text>
            <text x="725" y="490" fill="#ffffff" font-size="13">explicit HIV release</text>
            <text x="725" y="510" fill="#ffffff" font-size="13">MA has strict</text>
            <text x="725" y="530" fill="#ffffff" font-size="13">consent law</text>
            <text x="855" y="565" text-anchor="middle" fill="#ef4444" font-size="14" font-weight="bold">No checkbox = void</text>
            <rect x="80" y="620" width="940" height="280" fill="#1a1a2e" stroke="#ef4444" stroke-width="2" rx="6"/>
            <text x="550" y="655" text-anchor="middle" fill="#ef4444" font-size="20" font-weight="bold">The Damage</text>
            <line x1="110" y1="675" x2="990" y2="675" stroke="#888"/>
            <text x="150" y="705" fill="#ffd700" font-size="15" font-weight="bold">Item</text>
            <text x="700" y="705" fill="#ffd700" font-size="15" font-weight="bold">Cost</text>
            <line x1="110" y1="720" x2="990" y2="720" stroke="#888"/>
            <text x="130" y="750" fill="#ffffff" font-size="14">OCR civil monetary penalty (settlement)</text>
            <text x="700" y="750" fill="#ef4444" font-size="14">$1,550,000</text>
            <text x="130" y="780" fill="#ffffff" font-size="14">3-year Corrective Action Plan (consultants)</text>
            <text x="700" y="780" fill="#ef4444" font-size="14">$1,200,000</text>
            <text x="130" y="810" fill="#ffffff" font-size="14">Patient civil lawsuit settlement</text>
            <text x="700" y="810" fill="#ef4444" font-size="14">$3,500,000</text>
            <text x="130" y="840" fill="#ffffff" font-size="14">2.1M breach notifications + credit monitoring</text>
            <text x="700" y="840" fill="#ef4444" font-size="14">$1,800,000</text>
            <text x="130" y="870" fill="#ffffff" font-size="14">ROI software upgrade + retraining</text>
            <text x="700" y="870" fill="#ef4444" font-size="14">$350,000</text>
            <line x1="110" y1="880" x2="990" y2="880" stroke="#888"/>
            <text x="130" y="900" fill="#ffd700" font-size="15" font-weight="bold">TOTAL</text>
            <text x="700" y="900" fill="#ef4444" font-size="16" font-weight="bold">$8,400,000</text>
            <text x="550" y="970" text-anchor="middle" fill="#ec4899" font-size="16">Clerk terminated. HIM director resigned. Patient lifelong harm.</text>
            <text x="550" y="1000" text-anchor="middle" fill="#888" font-size="14">All from one missing checkbox on a one-page authorization form</text>
          </svg>`,
          caption: "One missing checkbox cost $8.4M — psychotherapy, Part 2 substance abuse, and HIV each require their own explicit authorization."
        }
      },
      {
        type: "quiz",
        title: "Knowledge Check: Authorization Validity",
        content: `Test your ability to spot an invalid authorization before disclosing PHI.`,
        question: "An ROI request arrives with this authorization: signed by patient, dated 6 months ago, identifies the requesting attorney by name, asks for 'all records relating to my back injury from 1/1/2023 to 12/31/2023,' purpose stated as 'workers' compensation claim,' includes the revocation statement and re-disclosure warning, BUT has no expiration date or expiration event listed. The chart contains routine ortho notes plus one psychotherapy session related to chronic pain. What do you release?",
        options: [
          {
            text: "Release everything in scope (ortho + psychotherapy) — the missing expiration date is a minor issue you can fix by adding 'one year from signing.'",
            correct: false
          },
          {
            text: "Release nothing — the missing expiration date voids the authorization under §164.508(c)(1); return it to the attorney for correction.",
            correct: true
          },
          {
            text: "Release only the ortho notes — psychotherapy is excluded, and the expiration date isn't a required element.",
            correct: false
          },
          {
            text: "Release the ortho notes and call the patient to verbally authorize the psychotherapy notes too.",
            correct: false
          }
        ],
        explanation: `**Expiration date or expiration event is one of the 6 core elements** under 45 CFR §164.508(c)(1). Without it, the authorization is **invalid in its entirety** — you cannot release **anything**, including the ortho notes. You may NOT "fix" the authorization yourself; that would be document forgery. Return it to the attorney with a written explanation noting the missing required element, and start the clock fresh once a corrected, fully-signed authorization arrives. Note that even if the expiration date were present, the psychotherapy session would STILL require a separate specific authorization (§164.508(a)(2)). Calling the patient for verbal authorization does NOT meet HIPAA's written-authorization standard for psychotherapy notes.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-size="26" font-weight="bold">The 6-Element Validity Checklist</text>
            <text x="550" y="90" text-anchor="middle" fill="#888" font-size="16">Pass ALL six or release NOTHING — there is no partial credit</text>
            <rect x="80" y="130" width="940" height="600" fill="#1a1a2e" stroke="#ffd700" stroke-width="2" rx="6"/>
            <text x="550" y="165" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">Authorization Audit — Current Request</text>
            <line x1="110" y1="185" x2="990" y2="185" stroke="#888"/>
            <text x="150" y="215" fill="#ffd700" font-size="15" font-weight="bold">Required Element</text>
            <text x="650" y="215" fill="#ffd700" font-size="15" font-weight="bold">This Auth</text>
            <text x="850" y="215" fill="#ffd700" font-size="15" font-weight="bold">Status</text>
            <line x1="110" y1="230" x2="990" y2="230" stroke="#888"/>
            <text x="130" y="265" fill="#ffffff" font-size="14">1. Specific PHI description</text>
            <text x="650" y="265" fill="#ffffff" font-size="14">"back injury 2023"</text>
            <text x="850" y="265" fill="#10b981" font-size="14" font-weight="bold">PASS</text>
            <text x="130" y="300" fill="#ffffff" font-size="14">2. Who discloses</text>
            <text x="650" y="300" fill="#ffffff" font-size="14">(implied hospital)</text>
            <text x="850" y="300" fill="#10b981" font-size="14" font-weight="bold">PASS</text>
            <text x="130" y="335" fill="#ffffff" font-size="14">3. Who receives</text>
            <text x="650" y="335" fill="#ffffff" font-size="14">Attorney named</text>
            <text x="850" y="335" fill="#10b981" font-size="14" font-weight="bold">PASS</text>
            <text x="130" y="370" fill="#ffffff" font-size="14">4. Purpose</text>
            <text x="650" y="370" fill="#ffffff" font-size="14">"Workers' comp claim"</text>
            <text x="850" y="370" fill="#10b981" font-size="14" font-weight="bold">PASS</text>
            <text x="130" y="405" fill="#ef4444" font-size="14" font-weight="bold">5. Expiration date / event</text>
            <text x="650" y="405" fill="#ef4444" font-size="14">— MISSING —</text>
            <text x="850" y="405" fill="#ef4444" font-size="14" font-weight="bold">FAIL</text>
            <text x="130" y="440" fill="#ffffff" font-size="14">6. Signature + date</text>
            <text x="650" y="440" fill="#ffffff" font-size="14">Yes (6 months ago)</text>
            <text x="850" y="440" fill="#10b981" font-size="14" font-weight="bold">PASS</text>
            <line x1="110" y1="465" x2="990" y2="465" stroke="#888"/>
            <text x="130" y="500" fill="#ffd700" font-size="15" font-weight="bold">Required Statements</text>
            <line x1="110" y1="515" x2="990" y2="515" stroke="#888"/>
            <text x="130" y="545" fill="#ffffff" font-size="14">A. Right to revoke</text>
            <text x="850" y="545" fill="#10b981" font-size="14" font-weight="bold">PASS</text>
            <text x="130" y="580" fill="#ffffff" font-size="14">B. Treatment not conditioned</text>
            <text x="850" y="580" fill="#888" font-size="14">(assumed)</text>
            <text x="130" y="615" fill="#ffffff" font-size="14">C. Re-disclosure warning</text>
            <text x="850" y="615" fill="#10b981" font-size="14" font-weight="bold">PASS</text>
            <line x1="110" y1="640" x2="990" y2="640" stroke="#888"/>
            <text x="130" y="675" fill="#ec4899" font-size="15" font-weight="bold">Special PHI in chart?</text>
            <text x="130" y="700" fill="#ffffff" font-size="14">Psychotherapy session present → needs SEPARATE auth</text>
            <text x="850" y="700" fill="#ef4444" font-size="14" font-weight="bold">SPECIAL</text>
            <rect x="80" y="750" width="940" height="240" fill="#1a1a2e" stroke="#ef4444" stroke-width="2" rx="6"/>
            <text x="550" y="785" text-anchor="middle" fill="#ef4444" font-size="20" font-weight="bold">Verdict: RELEASE NOTHING</text>
            <text x="110" y="825" fill="#ffffff" font-size="15">• Missing expiration = VOID authorization (entire form fails)</text>
            <text x="110" y="855" fill="#ffffff" font-size="15">• Even if fixed, psychotherapy still requires its own separate authorization</text>
            <text x="110" y="885" fill="#ffffff" font-size="15">• Return to attorney in writing — note exactly which element is missing</text>
            <text x="110" y="915" fill="#ffffff" font-size="15">• Never "fix" the form yourself (forgery + breach of trust)</text>
            <text x="110" y="945" fill="#10b981" font-size="15">• Reset turnaround clock when corrected, signed authorization arrives</text>
            <text x="550" y="1050" text-anchor="middle" fill="#888" font-size="14">CCA exam: every "missing required element" question is the SAME answer — RELEASE NOTHING</text>
          </svg>`,
          caption: "Authorization audit: 5 of 6 elements pass but expiration is missing — the entire form is void, and psychotherapy notes would have needed a separate auth anyway."
        }
      },
      {
        type: "application",
        title: "On the Job: The 7-Step ROI Workflow",
        content: `Every ROI request you process should follow the same **7-step workflow**. Memorize it; deviation is how breaches happen.

**Step 1 — Receive**: log the request in the ROI system the day it arrives (turnaround clock starts).

**Step 2 — Verify requester identity**: government-issued photo ID for in-person, notarization for legal, BAA on file for business associates.

**Step 3 — Validate authorization**: check all **6 core elements + 3 statements** (lesson 8). If invalid, return same-day with specific deficiency.

**Step 4 — Check for special PHI**: open the chart and look for psychotherapy notes, Part 2 substance abuse, HIV/AIDS, genetic info. If found, **require separate specific authorization** for each before releasing.

**Step 5 — Compile only what was requested**: never release "extra" — scope creep is a breach.

**Step 6 — Log the disclosure**: date, recipient, PHI disclosed, purpose — for the 6-year accounting (unless TPO or patient-authorized).

**Step 7 — Send via secure channel**: encrypted email, secure portal, or certified mail. Never fax to a number not verified within 30 days.

A productivity benchmark: **a trained ROI specialist processes 30–50 requests/day** at >99.5% compliance.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="50" text-anchor="middle" fill="#ffd700" font-size="26" font-weight="bold">The 7-Step ROI Workflow</text>
            <text x="550" y="85" text-anchor="middle" fill="#888" font-size="16">Memorize this sequence — every breach skips one of these steps</text>
            <rect x="80" y="115" width="940" height="100" fill="#1a1a2e" stroke="#6366f1" stroke-width="2" rx="6"/>
            <circle cx="125" cy="165" r="28" fill="#6366f1"/>
            <text x="125" y="173" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">1</text>
            <text x="175" y="155" fill="#ffd700" font-size="17" font-weight="bold">RECEIVE</text>
            <text x="175" y="182" fill="#ffffff" font-size="14">Log request in ROI system same day arrived → turnaround clock starts</text>
            <text x="175" y="205" fill="#888" font-size="13">15 days for patient access | 30 days for attorneys | per court date for subpoena</text>
            <rect x="80" y="225" width="940" height="100" fill="#1a1a2e" stroke="#10b981" stroke-width="2" rx="6"/>
            <circle cx="125" cy="275" r="28" fill="#10b981"/>
            <text x="125" y="283" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">2</text>
            <text x="175" y="265" fill="#ffd700" font-size="17" font-weight="bold">VERIFY REQUESTER</text>
            <text x="175" y="292" fill="#ffffff" font-size="14">Photo ID (in-person) | Notarization (legal) | BAA on file (business associate)</text>
            <text x="175" y="315" fill="#888" font-size="13">Phone callback to known number for unfamiliar requesters</text>
            <rect x="80" y="335" width="940" height="100" fill="#1a1a2e" stroke="#f59e0b" stroke-width="2" rx="6"/>
            <circle cx="125" cy="385" r="28" fill="#f59e0b"/>
            <text x="125" y="393" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">3</text>
            <text x="175" y="375" fill="#ffd700" font-size="17" font-weight="bold">VALIDATE AUTHORIZATION</text>
            <text x="175" y="402" fill="#ffffff" font-size="14">Check 6 core elements + 3 statements — missing 1 = VOID, return same-day</text>
            <text x="175" y="425" fill="#888" font-size="13">Document the deficiency in writing to the requester</text>
            <rect x="80" y="445" width="940" height="100" fill="#1a1a2e" stroke="#ec4899" stroke-width="2" rx="6"/>
            <circle cx="125" cy="495" r="28" fill="#ec4899"/>
            <text x="125" y="503" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">4</text>
            <text x="175" y="485" fill="#ffd700" font-size="17" font-weight="bold">CHECK SPECIAL PHI</text>
            <text x="175" y="512" fill="#ffffff" font-size="14">Psychotherapy | Part 2 substance | HIV/AIDS | Genetic (GINA) | Mental health</text>
            <text x="175" y="535" fill="#ef4444" font-size="13">Each requires its OWN separate, specific authorization — general auth = NO</text>
            <rect x="80" y="555" width="940" height="100" fill="#1a1a2e" stroke="#8b5cf6" stroke-width="2" rx="6"/>
            <circle cx="125" cy="605" r="28" fill="#8b5cf6"/>
            <text x="125" y="613" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">5</text>
            <text x="175" y="595" fill="#ffd700" font-size="17" font-weight="bold">COMPILE ONLY WHAT'S REQUESTED</text>
            <text x="175" y="622" fill="#ffffff" font-size="14">Minimum Necessary Standard — release scoped records only, never extras</text>
            <text x="175" y="645" fill="#888" font-size="13">Scope creep is a breach: extra page = OCR penalty per page</text>
            <rect x="80" y="665" width="940" height="100" fill="#1a1a2e" stroke="#0ea5e9" stroke-width="2" rx="6"/>
            <circle cx="125" cy="715" r="28" fill="#0ea5e9"/>
            <text x="125" y="723" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">6</text>
            <text x="175" y="705" fill="#ffd700" font-size="17" font-weight="bold">LOG DISCLOSURE (if accountable)</text>
            <text x="175" y="732" fill="#ffffff" font-size="14">Date | Recipient | PHI | Purpose → 6-year accounting (§164.528)</text>
            <text x="175" y="755" fill="#888" font-size="13">Skip log only if TPO, patient-authorized, or to patient themselves</text>
            <rect x="80" y="775" width="940" height="100" fill="#1a1a2e" stroke="#ef4444" stroke-width="2" rx="6"/>
            <circle cx="125" cy="825" r="28" fill="#ef4444"/>
            <text x="125" y="833" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">7</text>
            <text x="175" y="815" fill="#ffd700" font-size="17" font-weight="bold">SEND SECURELY</text>
            <text x="175" y="842" fill="#ffffff" font-size="14">Encrypted email | Secure portal | Certified mail | Verified fax</text>
            <text x="175" y="865" fill="#ef4444" font-size="13">NEVER fax to a number not verified within last 30 days</text>
            <rect x="80" y="895" width="940" height="170" fill="#1a1a2e" stroke="#ffd700" stroke-width="2" rx="6"/>
            <text x="550" y="930" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">CCA Productivity Benchmarks</text>
            <text x="200" y="970" fill="#ffd700" font-size="15">Throughput:</text>
            <text x="500" y="970" fill="#ffffff" font-size="15">30–50 requests / day</text>
            <text x="200" y="1000" fill="#ffd700" font-size="15">Compliance rate:</text>
            <text x="500" y="1000" fill="#ffffff" font-size="15">&gt;99.5% (less than 1 error per 200)</text>
            <text x="200" y="1030" fill="#ffd700" font-size="15">Turnaround:</text>
            <text x="500" y="1030" fill="#ffffff" font-size="15">15 days patient | 30 days attorney</text>
          </svg>`,
          caption: "Seven non-negotiable steps for every ROI request — every documented HIPAA breach in the last decade traces back to skipping one."
        }
      }
    ]
  },
  {
    id: "cca-domain-1-lesson-9",
    title: "Health Record Storage and Format: Paper, Hybrid, EHR, and Migration Pitfalls",
    duration: "15",
    cards: [
      {
        type: "intro",
        title: "Three Record Formats — Each with Its Own Hazards",
        content: `Even in 2026, US healthcare records exist in **three formats simultaneously**:

**Paper records** remain in archives, off-site warehouses, and small specialty practices. They require **fire-rated cabinets (1-hour minimum)**, **climate control (60–75°F, 30–50% humidity)**, **pest control**, and **physical access logs**. Average annual cost: **$3–5 per chart per year** in storage alone.

**Hybrid records** exist in **70%+ of US hospitals** — part paper, part scanned, part EHR-native. The danger: clinicians document in EHR while older labs sit in paper, creating **clinically incomplete views** unless careful indexing is maintained.

**Fully electronic (EHR) records** under the **HITECH Act** and **CMS Promoting Interoperability** (formerly Meaningful Use) program must support **CPOE, e-prescribing, structured problem lists, patient portals, and certified interoperability (USCDI v3)**. Penalty for non-certified EHR: **up to 9% Medicare reimbursement cut**.

Every migration **between** formats introduces **orphan records, format incompatibility, and document-loss risk** — and the dangerous **"scan and toss"** policy where paper originals are destroyed before the scan is verified.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="50" text-anchor="middle" fill="#ffd700" font-size="28" font-weight="bold">Three Record Formats Side-by-Side</text>
            <text x="550" y="85" text-anchor="middle" fill="#888" font-size="16">Coexisting in 2026 — each with distinct compliance demands</text>
            <rect x="40" y="120" width="340" height="780" fill="#1a1a2e" stroke="#f59e0b" stroke-width="3" rx="8"/>
            <text x="210" y="160" text-anchor="middle" fill="#f59e0b" font-size="22" font-weight="bold">PAPER</text>
            <text x="210" y="185" text-anchor="middle" fill="#888" font-size="13">Still 12% of US records</text>
            <text x="60" y="220" fill="#ffd700" font-size="15" font-weight="bold">Storage Requirements</text>
            <text x="60" y="248" fill="#ffffff" font-size="13">• Fire-rated cabinet (1-hr min)</text>
            <text x="60" y="273" fill="#ffffff" font-size="13">• Climate: 60–75°F</text>
            <text x="60" y="298" fill="#ffffff" font-size="13">• Humidity: 30–50% RH</text>
            <text x="60" y="323" fill="#ffffff" font-size="13">• Pest control program</text>
            <text x="60" y="348" fill="#ffffff" font-size="13">• Physical access log</text>
            <text x="60" y="373" fill="#ffffff" font-size="13">• Locked at all times</text>
            <text x="60" y="408" fill="#ffd700" font-size="15" font-weight="bold">Cost</text>
            <text x="60" y="436" fill="#ffffff" font-size="13">$3–5 / chart / year</text>
            <text x="60" y="460" fill="#ffffff" font-size="13">$10K–50K / 1000 charts</text>
            <text x="60" y="495" fill="#ffd700" font-size="15" font-weight="bold">Pros</text>
            <text x="60" y="523" fill="#10b981" font-size="13">+ No cyber risk</text>
            <text x="60" y="548" fill="#10b981" font-size="13">+ No system downtime</text>
            <text x="60" y="573" fill="#10b981" font-size="13">+ Legible signatures</text>
            <text x="60" y="608" fill="#ffd700" font-size="15" font-weight="bold">Cons</text>
            <text x="60" y="636" fill="#ef4444" font-size="13">– Fire/flood loss</text>
            <text x="60" y="661" fill="#ef4444" font-size="13">– No remote access</text>
            <text x="60" y="686" fill="#ef4444" font-size="13">– No analytics</text>
            <text x="60" y="711" fill="#ef4444" font-size="13">– Slow ROI turnaround</text>
            <text x="60" y="746" fill="#ffd700" font-size="15" font-weight="bold">Where used</text>
            <text x="60" y="774" fill="#ffffff" font-size="13">Solo specialty, rural</text>
            <text x="60" y="799" fill="#ffffff" font-size="13">Behavioral health</text>
            <text x="60" y="824" fill="#ffffff" font-size="13">Archive shelves</text>
            <text x="210" y="870" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">Retention same as EHR</text>
            <rect x="385" y="120" width="340" height="780" fill="#1a1a2e" stroke="#8b5cf6" stroke-width="3" rx="8"/>
            <text x="555" y="160" text-anchor="middle" fill="#8b5cf6" font-size="22" font-weight="bold">HYBRID</text>
            <text x="555" y="185" text-anchor="middle" fill="#888" font-size="13">70%+ of US hospitals today</text>
            <text x="405" y="220" fill="#ffd700" font-size="15" font-weight="bold">What's in each format?</text>
            <text x="405" y="248" fill="#ffffff" font-size="13">Paper: pre-2010 charts</text>
            <text x="405" y="273" fill="#ffffff" font-size="13">Scanned: 2010–2018 docs</text>
            <text x="405" y="298" fill="#ffffff" font-size="13">EHR-native: 2018+</text>
            <text x="405" y="323" fill="#ffffff" font-size="13">External: HIE feeds</text>
            <text x="405" y="358" fill="#ffd700" font-size="15" font-weight="bold">Risk Surface</text>
            <text x="405" y="386" fill="#ef4444" font-size="13">– Clinically incomplete view</text>
            <text x="405" y="411" fill="#ef4444" font-size="13">– Indexing errors</text>
            <text x="405" y="436" fill="#ef4444" font-size="13">– Multiple ROI workflows</text>
            <text x="405" y="461" fill="#ef4444" font-size="13">– "Phantom" labs in paper</text>
            <text x="405" y="486" fill="#ef4444" font-size="13">– Auditor confusion</text>
            <text x="405" y="521" fill="#ffd700" font-size="15" font-weight="bold">Required Controls</text>
            <text x="405" y="549" fill="#ffffff" font-size="13">• Master Index of Sources</text>
            <text x="405" y="574" fill="#ffffff" font-size="13">  (MIS) flagged in EHR</text>
            <text x="405" y="599" fill="#ffffff" font-size="13">• Scanned document quality</text>
            <text x="405" y="624" fill="#ffffff" font-size="13">  audits (≥300 DPI)</text>
            <text x="405" y="649" fill="#ffffff" font-size="13">• Cross-format ROI policy</text>
            <text x="405" y="674" fill="#ffffff" font-size="13">• Designated record set</text>
            <text x="405" y="699" fill="#ffffff" font-size="13">  inventory updated</text>
            <text x="405" y="734" fill="#ffd700" font-size="15" font-weight="bold">Common Pitfall</text>
            <text x="405" y="762" fill="#ef4444" font-size="13">Clinician sees clean EHR,</text>
            <text x="405" y="787" fill="#ef4444" font-size="13">missing old paper labs</text>
            <text x="405" y="812" fill="#ef4444" font-size="13">→ orders duplicate tests or</text>
            <text x="405" y="837" fill="#ef4444" font-size="13">misses critical history</text>
            <text x="555" y="880" text-anchor="middle" fill="#8b5cf6" font-size="14" font-weight="bold">Transitional — highest risk</text>
            <rect x="730" y="120" width="340" height="780" fill="#1a1a2e" stroke="#10b981" stroke-width="3" rx="8"/>
            <text x="900" y="160" text-anchor="middle" fill="#10b981" font-size="22" font-weight="bold">EHR (full)</text>
            <text x="900" y="185" text-anchor="middle" fill="#888" font-size="13">Modern certified standard</text>
            <text x="750" y="220" fill="#ffd700" font-size="15" font-weight="bold">Certification Required</text>
            <text x="750" y="248" fill="#ffffff" font-size="13">• ONC certified (2015 Cures)</text>
            <text x="750" y="273" fill="#ffffff" font-size="13">• USCDI v3 data classes</text>
            <text x="750" y="298" fill="#ffffff" font-size="13">• FHIR R4 APIs</text>
            <text x="750" y="323" fill="#ffffff" font-size="13">• Patient access &lt;1 day</text>
            <text x="750" y="358" fill="#ffd700" font-size="15" font-weight="bold">CMS Promoting Interop</text>
            <text x="750" y="386" fill="#ffffff" font-size="13">• CPOE for med/lab/rad</text>
            <text x="750" y="411" fill="#ffffff" font-size="13">• E-prescribing</text>
            <text x="750" y="436" fill="#ffffff" font-size="13">• Patient portal</text>
            <text x="750" y="461" fill="#ffffff" font-size="13">• Health info exchange</text>
            <text x="750" y="486" fill="#ffffff" font-size="13">• Public health reporting</text>
            <text x="750" y="521" fill="#ffd700" font-size="15" font-weight="bold">Penalties</text>
            <text x="750" y="549" fill="#ef4444" font-size="13">Non-certified EHR =</text>
            <text x="750" y="574" fill="#ef4444" font-size="13">up to 9% Medicare cut</text>
            <text x="750" y="599" fill="#ef4444" font-size="13">Information blocking =</text>
            <text x="750" y="624" fill="#ef4444" font-size="13">$1M / violation</text>
            <text x="750" y="659" fill="#ffd700" font-size="15" font-weight="bold">Pros</text>
            <text x="750" y="687" fill="#10b981" font-size="13">+ Instant remote access</text>
            <text x="750" y="712" fill="#10b981" font-size="13">+ Decision support</text>
            <text x="750" y="737" fill="#10b981" font-size="13">+ Analytics + quality</text>
            <text x="750" y="762" fill="#10b981" font-size="13">+ Interoperability</text>
            <text x="750" y="787" fill="#ffd700" font-size="15" font-weight="bold">Cons</text>
            <text x="750" y="815" fill="#ef4444" font-size="13">– Cyber + ransomware</text>
            <text x="750" y="840" fill="#ef4444" font-size="13">– Downtime procedures</text>
            <text x="900" y="880" text-anchor="middle" fill="#10b981" font-size="14" font-weight="bold">Future state — but pricey</text>
            <text x="550" y="950" text-anchor="middle" fill="#ec4899" font-size="16">Retention requirements apply identically across all 3 formats</text>
            <text x="550" y="985" text-anchor="middle" fill="#888" font-size="14">5 yr Medicare | 7 yr most states | 10 yr Joint Commission | adult age 21+ for minors</text>
          </svg>`,
          caption: "Paper, hybrid, and EHR each demand different controls — hybrid carries the highest risk because clinicians see only one source at a time."
        }
      },
      {
        type: "concept",
        title: "EHR Certification & Meaningful Use Criteria",
        content: `Under the **HITECH Act of 2009** and now the **21st Century Cures Act of 2016**, only **ONC-Certified Health IT** can be used to qualify for Medicare/Medicaid bonuses (originally Meaningful Use, now **Promoting Interoperability**). The latest standard requires:

**Stage 1 — Capture**: e-prescribing, demographics, vitals, smoking status, clinical decision support, and electronic copy of records for patients.

**Stage 2 — Exchange**: structured data export, **patient portal access within 1 business day**, secure messaging, **CPOE for medications/labs/radiology**, summary of care document at transitions.

**Stage 3 — Outcomes**: USCDI v3 data classes, FHIR R4 APIs, **information-blocking rules (no withholding data without legal cause)**, public health reporting in 4+ areas, quality measure reporting (eCQMs).

**The Information Blocking Rule** (April 2021) prohibits providers, IT vendors, and HIEs from **interfering with electronic health information access**. Penalties: up to **$1M per violation** for vendors, **CMS payment reductions** for providers.

**USCDI v3 (United States Core Data for Interoperability)** is the mandatory **minimum data set** for exchange — patient demographics, problems, meds, allergies, vitals, lab results, procedures, immunizations, advance directives, encounter info, clinical notes, goals, **and care team members**.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="50" text-anchor="middle" fill="#ffd700" font-size="28" font-weight="bold">EHR Certification: ONC + Promoting Interop</text>
            <text x="550" y="85" text-anchor="middle" fill="#888" font-size="16">HITECH 2009 → Cures 2016 → Information Blocking Rule 2021</text>
            <rect x="60" y="115" width="320" height="280" fill="#1a1a2e" stroke="#6366f1" stroke-width="3" rx="8"/>
            <text x="220" y="148" text-anchor="middle" fill="#6366f1" font-size="20" font-weight="bold">STAGE 1: CAPTURE</text>
            <text x="220" y="172" text-anchor="middle" fill="#888" font-size="13">Data into EHR</text>
            <text x="80" y="210" fill="#ffffff" font-size="14">• E-prescribing (eRx)</text>
            <text x="80" y="240" fill="#ffffff" font-size="14">• Demographics structured</text>
            <text x="80" y="270" fill="#ffffff" font-size="14">• Vital signs entered</text>
            <text x="80" y="300" fill="#ffffff" font-size="14">• Smoking status</text>
            <text x="80" y="330" fill="#ffffff" font-size="14">• Clinical decision support</text>
            <text x="80" y="360" fill="#ffffff" font-size="14">• Electronic copy for pt</text>
            <text x="220" y="385" text-anchor="middle" fill="#10b981" font-size="13" font-weight="bold">Achieved by ~2014</text>
            <rect x="390" y="115" width="320" height="280" fill="#1a1a2e" stroke="#10b981" stroke-width="3" rx="8"/>
            <text x="550" y="148" text-anchor="middle" fill="#10b981" font-size="20" font-weight="bold">STAGE 2: EXCHANGE</text>
            <text x="550" y="172" text-anchor="middle" fill="#888" font-size="13">Data sharing</text>
            <text x="410" y="210" fill="#ffffff" font-size="14">• Structured data export</text>
            <text x="410" y="240" fill="#ffffff" font-size="14">• Portal access in 1 day</text>
            <text x="410" y="270" fill="#ffffff" font-size="14">• Secure messaging</text>
            <text x="410" y="300" fill="#ffffff" font-size="14">• CPOE: meds/lab/rad</text>
            <text x="410" y="330" fill="#ffffff" font-size="14">• Summary at transitions</text>
            <text x="410" y="360" fill="#ffffff" font-size="14">• Lab to public health</text>
            <text x="550" y="385" text-anchor="middle" fill="#10b981" font-size="13" font-weight="bold">Achieved by ~2018</text>
            <rect x="720" y="115" width="320" height="280" fill="#1a1a2e" stroke="#ec4899" stroke-width="3" rx="8"/>
            <text x="880" y="148" text-anchor="middle" fill="#ec4899" font-size="20" font-weight="bold">STAGE 3: OUTCOMES</text>
            <text x="880" y="172" text-anchor="middle" fill="#888" font-size="13">Quality + interop</text>
            <text x="740" y="210" fill="#ffffff" font-size="14">• USCDI v3 data classes</text>
            <text x="740" y="240" fill="#ffffff" font-size="14">• FHIR R4 APIs open</text>
            <text x="740" y="270" fill="#ffffff" font-size="14">• Info blocking ban</text>
            <text x="740" y="300" fill="#ffffff" font-size="14">• Public health (4+ areas)</text>
            <text x="740" y="330" fill="#ffffff" font-size="14">• eCQM quality measures</text>
            <text x="740" y="360" fill="#ffffff" font-size="14">• Patient API access</text>
            <text x="880" y="385" text-anchor="middle" fill="#ec4899" font-size="13" font-weight="bold">Current state 2024+</text>
            <rect x="80" y="430" width="940" height="320" fill="#1a1a2e" stroke="#ffd700" stroke-width="2" rx="6"/>
            <text x="550" y="465" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">USCDI v3 Data Classes (Mandatory for Exchange)</text>
            <line x1="110" y1="485" x2="990" y2="485" stroke="#888"/>
            <text x="130" y="520" fill="#10b981" font-size="14">+ Patient demographics</text>
            <text x="500" y="520" fill="#10b981" font-size="14">+ Problems (active dx)</text>
            <text x="800" y="520" fill="#10b981" font-size="14">+ Medications</text>
            <text x="130" y="555" fill="#10b981" font-size="14">+ Allergies + intolerances</text>
            <text x="500" y="555" fill="#10b981" font-size="14">+ Vital signs</text>
            <text x="800" y="555" fill="#10b981" font-size="14">+ Lab results</text>
            <text x="130" y="590" fill="#10b981" font-size="14">+ Procedures</text>
            <text x="500" y="590" fill="#10b981" font-size="14">+ Immunizations</text>
            <text x="800" y="590" fill="#10b981" font-size="14">+ Advance directives</text>
            <text x="130" y="625" fill="#10b981" font-size="14">+ Encounter info</text>
            <text x="500" y="625" fill="#10b981" font-size="14">+ Clinical notes (8 types)</text>
            <text x="800" y="625" fill="#10b981" font-size="14">+ Goals</text>
            <text x="130" y="660" fill="#10b981" font-size="14">+ Health concerns</text>
            <text x="500" y="660" fill="#10b981" font-size="14">+ Smoking status</text>
            <text x="800" y="660" fill="#10b981" font-size="14">+ Assessment/plan</text>
            <text x="130" y="695" fill="#10b981" font-size="14">+ Provenance</text>
            <text x="500" y="695" fill="#10b981" font-size="14">+ Care team members</text>
            <text x="800" y="695" fill="#10b981" font-size="14">+ Pt demographics+SOGI</text>
            <text x="550" y="735" text-anchor="middle" fill="#888" font-size="13">v3 added care-team, SOGI, and SDOH (social determinants of health)</text>
            <rect x="80" y="780" width="940" height="240" fill="#1a1a2e" stroke="#ef4444" stroke-width="2" rx="6"/>
            <text x="550" y="815" text-anchor="middle" fill="#ef4444" font-size="20" font-weight="bold">The Information Blocking Rule (Effective 2021)</text>
            <text x="110" y="855" fill="#ffd700" font-size="15">Prohibited:</text>
            <text x="110" y="885" fill="#ffffff" font-size="14">• Withholding records from patient without legal cause</text>
            <text x="110" y="915" fill="#ffffff" font-size="14">• Charging excessive fees to access EHI</text>
            <text x="110" y="945" fill="#ffffff" font-size="14">• Vendor contracts banning data export</text>
            <text x="110" y="975" fill="#ffffff" font-size="14">• Delaying API access beyond 1 day</text>
            <text x="700" y="855" fill="#ef4444" font-size="15">Penalties:</text>
            <text x="700" y="885" fill="#ffffff" font-size="14">Vendor: up to $1M / violation</text>
            <text x="700" y="915" fill="#ffffff" font-size="14">Provider: CMS reductions</text>
            <text x="700" y="945" fill="#ffffff" font-size="14">Reported to OIG</text>
          </svg>`,
          caption: "ONC certification + Stages 1–3 of Promoting Interop + USCDI v3 = the modern EHR standard; information blocking carries $1M-per-violation teeth."
        }
      },
      {
        type: "example",
        title: "The 'Scan and Toss' Disaster: Why Originals Matter",
        content: `**Case study**: A 2018 Florida community hospital began converting its **paper archive (180,000 charts)** to a hybrid EHR via a third-party scanning vendor. To save warehouse rent (**$48K/month**), the hospital adopted a **"scan and toss"** policy: as soon as a chart was scanned, the paper original was **shredded the next day** — before any **quality assurance review** of the scan.

The catastrophic problems found 14 months later:

1. **6,200 charts had unreadable pages** (faded carbon copies, double-fed pages, blank scans). The originals had already been shredded — the data was **gone forever**.
2. **400 charts were misindexed** — Patient A's lab results filed under Patient B's MRN. Without paper originals, **forensic reconstruction was impossible**.
3. **The state board of medicine subpoenaed 12 charts** in a malpractice case from 2015. Three were among the unreadable batch. The hospital had to **declare spoliation of evidence**, automatically losing the case. **Settlement: $9.2M**.

**The fix**: AHIMA recommends **scan + QA + retain original for 30–90 days** before destruction. Higher-stakes documents (signed consents, advance directives, legal forms) should be **scanned AND retained in paper indefinitely** if the original signature is legally required by state law.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="50" text-anchor="middle" fill="#ffd700" font-size="26" font-weight="bold">"Scan and Toss": A $9.2M Lesson</text>
            <text x="550" y="85" text-anchor="middle" fill="#888" font-size="16">Florida hospital, 180,000 charts, 1 catastrophic policy</text>
            <rect x="80" y="120" width="940" height="160" fill="#1a1a2e" stroke="#ef4444" stroke-width="2" rx="6"/>
            <text x="550" y="155" text-anchor="middle" fill="#ef4444" font-size="20" font-weight="bold">The Faulty Policy</text>
            <text x="110" y="195" fill="#ffffff" font-size="15">Day 1: chart scanned by vendor → uploaded to EHR document repository</text>
            <text x="110" y="225" fill="#ffffff" font-size="15">Day 2: paper original shredded — NO quality review yet</text>
            <text x="110" y="255" fill="#ef4444" font-size="15" font-weight="bold">Motive: save $48K/month warehouse rent. Outcome: $9.2M settlement.</text>
            <rect x="80" y="300" width="940" height="320" fill="#1a1a2e" stroke="#ffd700" stroke-width="2" rx="6"/>
            <text x="550" y="335" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">What Went Wrong</text>
            <rect x="110" y="360" width="290" height="220" fill="#1a1a2e" stroke="#f59e0b" stroke-width="2" rx="4"/>
            <text x="255" y="390" text-anchor="middle" fill="#f59e0b" font-size="16" font-weight="bold">Unreadable Scans</text>
            <text x="125" y="425" fill="#ffffff" font-size="13">6,200 charts had pages</text>
            <text x="125" y="450" fill="#ffffff" font-size="13">that were faded carbon,</text>
            <text x="125" y="475" fill="#ffffff" font-size="13">double-fed, or blank</text>
            <text x="125" y="510" fill="#ef4444" font-size="13">Originals shredded =</text>
            <text x="125" y="535" fill="#ef4444" font-size="13">data lost forever</text>
            <text x="255" y="570" text-anchor="middle" fill="#888" font-size="12">3.4% loss rate</text>
            <rect x="410" y="360" width="290" height="220" fill="#1a1a2e" stroke="#ec4899" stroke-width="2" rx="4"/>
            <text x="555" y="390" text-anchor="middle" fill="#ec4899" font-size="16" font-weight="bold">Misindexed Charts</text>
            <text x="425" y="425" fill="#ffffff" font-size="13">400 charts filed under</text>
            <text x="425" y="450" fill="#ffffff" font-size="13">wrong MRN — patient A</text>
            <text x="425" y="475" fill="#ffffff" font-size="13">labs in patient B chart</text>
            <text x="425" y="510" fill="#ef4444" font-size="13">No paper = no forensic</text>
            <text x="425" y="535" fill="#ef4444" font-size="13">reconstruction possible</text>
            <text x="555" y="570" text-anchor="middle" fill="#888" font-size="12">Overlay errors at scale</text>
            <rect x="710" y="360" width="290" height="220" fill="#1a1a2e" stroke="#ef4444" stroke-width="2" rx="4"/>
            <text x="855" y="390" text-anchor="middle" fill="#ef4444" font-size="16" font-weight="bold">Subpoena Failure</text>
            <text x="725" y="425" fill="#ffffff" font-size="13">12 charts subpoenaed</text>
            <text x="725" y="450" fill="#ffffff" font-size="13">in 2018 malpractice;</text>
            <text x="725" y="475" fill="#ffffff" font-size="13">3 were unreadable</text>
            <text x="725" y="510" fill="#ef4444" font-size="13">Spoliation of evidence</text>
            <text x="725" y="535" fill="#ef4444" font-size="13">→ auto loss of case</text>
            <text x="855" y="570" text-anchor="middle" fill="#888" font-size="12">$9.2M settlement</text>
            <rect x="80" y="640" width="940" height="330" fill="#1a1a2e" stroke="#10b981" stroke-width="2" rx="6"/>
            <text x="550" y="675" text-anchor="middle" fill="#10b981" font-size="20" font-weight="bold">The AHIMA-Recommended Scanning Workflow</text>
            <circle cx="170" cy="745" r="35" fill="#10b981"/>
            <text x="170" y="755" text-anchor="middle" fill="#ffffff" font-size="20" font-weight="bold">1</text>
            <text x="170" y="800" text-anchor="middle" fill="#ffd700" font-size="15" font-weight="bold">SCAN</text>
            <text x="170" y="825" text-anchor="middle" fill="#ffffff" font-size="13">300 DPI min</text>
            <text x="170" y="845" text-anchor="middle" fill="#ffffff" font-size="13">Color if signed</text>
            <circle cx="360" cy="745" r="35" fill="#6366f1"/>
            <text x="360" y="755" text-anchor="middle" fill="#ffffff" font-size="20" font-weight="bold">2</text>
            <text x="360" y="800" text-anchor="middle" fill="#ffd700" font-size="15" font-weight="bold">INDEX</text>
            <text x="360" y="825" text-anchor="middle" fill="#ffffff" font-size="13">MRN verified</text>
            <text x="360" y="845" text-anchor="middle" fill="#ffffff" font-size="13">Doc type tagged</text>
            <circle cx="550" cy="745" r="35" fill="#f59e0b"/>
            <text x="550" y="755" text-anchor="middle" fill="#ffffff" font-size="20" font-weight="bold">3</text>
            <text x="550" y="800" text-anchor="middle" fill="#ffd700" font-size="15" font-weight="bold">QA REVIEW</text>
            <text x="550" y="825" text-anchor="middle" fill="#ffffff" font-size="13">Page by page</text>
            <text x="550" y="845" text-anchor="middle" fill="#ffffff" font-size="13">2nd reviewer</text>
            <circle cx="740" cy="745" r="35" fill="#ec4899"/>
            <text x="740" y="755" text-anchor="middle" fill="#ffffff" font-size="20" font-weight="bold">4</text>
            <text x="740" y="800" text-anchor="middle" fill="#ffd700" font-size="15" font-weight="bold">RETAIN 30–90d</text>
            <text x="740" y="825" text-anchor="middle" fill="#ffffff" font-size="13">Paper kept</text>
            <text x="740" y="845" text-anchor="middle" fill="#ffffff" font-size="13">in fire cabinet</text>
            <circle cx="930" cy="745" r="35" fill="#ef4444"/>
            <text x="930" y="755" text-anchor="middle" fill="#ffffff" font-size="20" font-weight="bold">5</text>
            <text x="930" y="800" text-anchor="middle" fill="#ffd700" font-size="15" font-weight="bold">DESTROY</text>
            <text x="930" y="825" text-anchor="middle" fill="#ffffff" font-size="13">Shred + log</text>
            <text x="930" y="845" text-anchor="middle" fill="#ffffff" font-size="13">COD issued</text>
            <line x1="205" y1="745" x2="325" y2="745" stroke="#ffd700" stroke-width="2"/>
            <line x1="395" y1="745" x2="515" y2="745" stroke="#ffd700" stroke-width="2"/>
            <line x1="585" y1="745" x2="705" y2="745" stroke="#ffd700" stroke-width="2"/>
            <line x1="775" y1="745" x2="895" y2="745" stroke="#ffd700" stroke-width="2"/>
            <text x="550" y="920" text-anchor="middle" fill="#ec4899" font-size="15">Signed consents + advance directives: retain paper INDEFINITELY (state-specific)</text>
            <text x="550" y="950" text-anchor="middle" fill="#888" font-size="14">Certificate of Destruction (COD) required by HIPAA — vendor must provide</text>
          </svg>`,
          caption: "Scan-and-toss costs $9.2M; scan-QA-retain-then-destroy with a Certificate of Destruction is the AHIMA standard."
        }
      },
      {
        type: "quiz",
        title: "Knowledge Check: Hybrid Record Pitfalls",
        content: `Test your ability to spot a dangerous hybrid-record situation.`,
        question: "A new hospitalist sees a patient in the EHR who shows 'no past medical history' on the problem list. She orders a cardiac stress test. The lab tech later finds three earlier stress tests on paper in the off-site archive — all positive, leading to a prior CABG documented in pre-2015 paper notes that were NEVER scanned. What is the root cause of this hybrid-record failure, and what must HIM do?",
        options: [
          {
            text: "Root cause: clinician didn't search hard enough. Fix: send a memo reminding doctors to check off-site archives.",
            correct: false
          },
          {
            text: "Root cause: missing Master Index of Sources flag in the EHR. Fix: add an MIS alert to every chart that has pre-2015 paper records, perform a back-scanning project, and update the Designated Record Set inventory.",
            correct: true
          },
          {
            text: "Root cause: the paper records should have been shredded years ago. Fix: destroy all pre-2015 paper as a 'scan and toss' policy.",
            correct: false
          },
          {
            text: "Root cause: the off-site archive was poorly organized. Fix: re-organize the warehouse alphabetically.",
            correct: false
          }
        ],
        explanation: `Hybrid records are dangerous because clinicians **only see what's in front of them**. If pre-2015 paper records exist but the EHR shows no flag, the clinician assumes the chart is complete — and orders **duplicate, unnecessary, or contradictory care**. The structural fix is a **Master Index of Sources (MIS)**: every chart with content outside the EHR must carry a **persistent on-screen banner** ("Additional paper records 2008–2015 in off-site archive — request via ROI"). This is an AHIMA best practice and is auditable by Joint Commission. The long-term fix is a **back-scanning project** to bring legacy paper into the EHR (with proper QA). The **Designated Record Set inventory** under HIPAA must list every location where PHI lives — including off-site warehouses, microfilm, and scanned archives. **Never** destroy paper to "force" data into the EHR — that's the scan-and-toss disaster from the previous card.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-size="26" font-weight="bold">The Master Index of Sources (MIS) Solution</text>
            <text x="550" y="90" text-anchor="middle" fill="#888" font-size="16">Make hidden records VISIBLE to clinicians before they decide</text>
            <rect x="80" y="125" width="940" height="220" fill="#1a1a2e" stroke="#ef4444" stroke-width="3" rx="8"/>
            <text x="550" y="160" text-anchor="middle" fill="#ef4444" font-size="20" font-weight="bold">Before MIS: The Hidden Record Trap</text>
            <text x="110" y="195" fill="#ffffff" font-size="15">EHR view (what clinician sees):</text>
            <text x="130" y="222" fill="#10b981" font-size="14">Problem list: (empty)</text>
            <text x="130" y="248" fill="#10b981" font-size="14">Surgical history: none</text>
            <text x="130" y="274" fill="#10b981" font-size="14">Allergies: NKDA</text>
            <text x="130" y="305" fill="#ef4444" font-size="14" font-weight="bold">REALITY: 3 stress tests + CABG documented in paper archive</text>
            <text x="130" y="330" fill="#ef4444" font-size="14" font-weight="bold">Clinician orders DUPLICATE stress test, missing CABG context</text>
            <rect x="80" y="365" width="940" height="260" fill="#1a1a2e" stroke="#10b981" stroke-width="3" rx="8"/>
            <text x="550" y="400" text-anchor="middle" fill="#10b981" font-size="20" font-weight="bold">After MIS: Visible Source Flag</text>
            <rect x="120" y="430" width="860" height="80" fill="#1a1a2e" stroke="#ffd700" stroke-width="2" rx="4"/>
            <text x="140" y="460" fill="#ffd700" font-size="15" font-weight="bold">[!] ADDITIONAL RECORDS EXIST</text>
            <text x="140" y="485" fill="#ffffff" font-size="14">Pre-2015 paper records held off-site (Archive Bldg B, Aisle 14)</text>
            <text x="140" y="503" fill="#ffffff" font-size="13">Request via ROI form #4421-A | Turnaround 48 hours | Contact HIM x5500</text>
            <text x="110" y="545" fill="#10b981" font-size="15">Mandatory banner appears on chart open</text>
            <text x="110" y="572" fill="#10b981" font-size="15">Persists until clinician acknowledges with click</text>
            <text x="110" y="599" fill="#10b981" font-size="15">Logged in audit trail for Joint Commission review</text>
            <rect x="80" y="645" width="940" height="380" fill="#1a1a2e" stroke="#ffd700" stroke-width="2" rx="6"/>
            <text x="550" y="680" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">HIM 4-Part Remediation Plan</text>
            <line x1="110" y1="700" x2="990" y2="700" stroke="#888"/>
            <text x="130" y="735" fill="#6366f1" font-size="17" font-weight="bold">1. IMMEDIATE: Add MIS flag</text>
            <text x="150" y="760" fill="#ffffff" font-size="14">Identify all charts with pre-2015 paper. Set EHR alert banner.</text>
            <text x="150" y="785" fill="#ffffff" font-size="14">Target: within 30 days for known charts; 90 days for full archive index.</text>
            <text x="130" y="822" fill="#10b981" font-size="17" font-weight="bold">2. SHORT-TERM: Back-scan high-risk charts</text>
            <text x="150" y="847" fill="#ffffff" font-size="14">Prioritize: active patients, cardiology, oncology, surgical histories.</text>
            <text x="150" y="872" fill="#ffffff" font-size="14">Use AHIMA workflow: scan + QA + 30-day retention + COD destruction.</text>
            <text x="130" y="909" fill="#f59e0b" font-size="17" font-weight="bold">3. UPDATE: Designated Record Set inventory</text>
            <text x="150" y="934" fill="#ffffff" font-size="14">Every PHI location logged: archives, microfilm, off-site, vendor servers.</text>
            <text x="150" y="959" fill="#ffffff" font-size="14">Required under HIPAA §164.524 — auditable by OCR.</text>
            <text x="130" y="996" fill="#ec4899" font-size="17" font-weight="bold">4. POLICY: Joint Commission "complete record" std</text>
            <text x="150" y="1021" fill="#ffffff" font-size="14">Define what "complete" means for hybrid charts. Mandatory clinician training.</text>
            <text x="150" y="1046" fill="#ffffff" font-size="14">Pre-op checklist: confirm review of all sources before procedure.</text>
          </svg>`,
          caption: "Master Index of Sources alerts clinicians to records outside the EHR — without it, hybrid records cause duplicate or contradictory care."
        }
      },
      {
        type: "application",
        title: "On the Job: The HIM Migration Survival Kit",
        content: `When you join a hospital mid-migration (and most are in some kind of migration), use this checklist on day one:

**1. Designated Record Set Inventory**: pull the current list of every place PHI lives. If it's older than **12 months**, that's a HIPAA finding — flag it. The DRS must list **EHR system, scanned repository, paper archives, microfilm, billing system, lab system, imaging PACS, off-site warehouses, BAA vendors**.

**2. Hybrid record policy**: confirm a written policy exists naming exactly **what is "the legal medical record"** when paper and EHR conflict. Without it, your hospital cannot defend itself in court.

**3. Scanning QA logs**: review the past 90 days of scan QA. **Reject rate <2% = good; >5% = scanner or process problem**. Demand a re-scan policy for rejects.

**4. MIS (Master Index of Sources) banners**: spot-check 20 random charts with pre-EHR history. If no banner alerts the clinician, file an HIM quality variance.

**5. Downtime procedures**: know the **paper backup forms (5010, 5011, downtime H&P)** and where they live; CMS requires **5 minutes max from EHR down to paper available**.

A CCA who knows these five items is **immediately valuable** to any HIM director.`,
        visual: {
          type: "diagram",
          svg: `<svg viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg">
            <rect width="1100" height="1100" fill="#1a1a2e"/>
            <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-size="26" font-weight="bold">HIM Migration Survival Kit — Day-One Checklist</text>
            <text x="550" y="90" text-anchor="middle" fill="#888" font-size="16">Five audits that make you immediately valuable to your director</text>
            <rect x="80" y="125" width="940" height="160" fill="#1a1a2e" stroke="#6366f1" stroke-width="2" rx="6"/>
            <text x="115" y="160" fill="#6366f1" font-size="20" font-weight="bold">1. DESIGNATED RECORD SET INVENTORY</text>
            <text x="115" y="190" fill="#ffffff" font-size="14">Every place PHI lives — must include all 9 categories below:</text>
            <text x="135" y="215" fill="#10b981" font-size="13">+ EHR (Epic/Cerner)</text>
            <text x="335" y="215" fill="#10b981" font-size="13">+ Scanned repo</text>
            <text x="535" y="215" fill="#10b981" font-size="13">+ Paper archives</text>
            <text x="135" y="240" fill="#10b981" font-size="13">+ Microfilm</text>
            <text x="335" y="240" fill="#10b981" font-size="13">+ Billing system</text>
            <text x="535" y="240" fill="#10b981" font-size="13">+ Lab/Pathology</text>
            <text x="135" y="265" fill="#10b981" font-size="13">+ Imaging PACS</text>
            <text x="335" y="265" fill="#10b981" font-size="13">+ Off-site warehouse</text>
            <text x="535" y="265" fill="#10b981" font-size="13">+ BAA vendors</text>
            <text x="850" y="240" fill="#ef4444" font-size="14" font-weight="bold">RED FLAG: list older than 12 months = HIPAA finding</text>
            <rect x="80" y="305" width="940" height="140" fill="#1a1a2e" stroke="#10b981" stroke-width="2" rx="6"/>
            <text x="115" y="340" fill="#10b981" font-size="20" font-weight="bold">2. LEGAL MEDICAL RECORD POLICY</text>
            <text x="115" y="370" fill="#ffffff" font-size="14">When paper and EHR conflict, which wins? Hospital must define this in writing.</text>
            <text x="115" y="395" fill="#ffffff" font-size="14">Typical answer: "The EHR is the legal record; paper is reference until QA'd in."</text>
            <text x="115" y="420" fill="#ef4444" font-size="14" font-weight="bold">Without policy = indefensible in court; auto-loss on spoliation claims</text>
            <rect x="80" y="465" width="940" height="140" fill="#1a1a2e" stroke="#f59e0b" stroke-width="2" rx="6"/>
            <text x="115" y="500" fill="#f59e0b" font-size="20" font-weight="bold">3. SCANNING QA LOG REVIEW</text>
            <text x="115" y="530" fill="#ffffff" font-size="14">Pull past 90 days of scan rejects. Math the rejection rate.</text>
            <text x="135" y="558" fill="#10b981" font-size="14">&lt;2% rejection: healthy process</text>
            <text x="135" y="582" fill="#f59e0b" font-size="14">2–5%: train scanning staff</text>
            <text x="600" y="558" fill="#ef4444" font-size="14">&gt;5%: scanner hardware or process broken — escalate</text>
            <text x="600" y="582" fill="#ef4444" font-size="14">No re-scan policy = audit finding</text>
            <rect x="80" y="625" width="940" height="140" fill="#1a1a2e" stroke="#ec4899" stroke-width="2" rx="6"/>
            <text x="115" y="660" fill="#ec4899" font-size="20" font-weight="bold">4. MIS BANNERS — SPOT CHECK 20 CHARTS</text>
            <text x="115" y="690" fill="#ffffff" font-size="14">Open 20 random charts with pre-EHR history. Confirm banner alerts on each.</text>
            <text x="115" y="715" fill="#ffffff" font-size="14">If &gt;1 of 20 lacks banner, file HIM quality variance.</text>
            <text x="115" y="745" fill="#ef4444" font-size="14" font-weight="bold">Missing MIS = the hidden-record trap from the quiz scenario</text>
            <rect x="80" y="785" width="940" height="140" fill="#1a1a2e" stroke="#ef4444" stroke-width="2" rx="6"/>
            <text x="115" y="820" fill="#ef4444" font-size="20" font-weight="bold">5. DOWNTIME PROCEDURES</text>
            <text x="115" y="850" fill="#ffffff" font-size="14">When EHR is down (ransomware, network failure), where are paper forms?</text>
            <text x="115" y="875" fill="#ffffff" font-size="14">CMS requires 5-min max from EHR-down to paper-available.</text>
            <text x="115" y="905" fill="#ffffff" font-size="14">Forms: downtime H&amp;P, downtime med admin record (MAR), downtime orders.</text>
            <rect x="80" y="945" width="940" height="110" fill="#1a1a2e" stroke="#ffd700" stroke-width="2" rx="6"/>
            <text x="550" y="980" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">Why It Matters</text>
            <text x="550" y="1010" text-anchor="middle" fill="#ffffff" font-size="15">A CCA who walks in and audits these 5 items in week 1 becomes the</text>
            <text x="550" y="1035" text-anchor="middle" fill="#10b981" font-size="15">go-to person for the HIM director's Joint Commission prep — and gets promoted first</text>
          </svg>`,
          caption: "Five-item audit (DRS inventory, legal record policy, scan QA, MIS banners, downtime forms) — your fastest path from new CCA to indispensable team member."
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
            lessons: 9, duration: 135, progress: 0, category: 'cca-prep',
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
