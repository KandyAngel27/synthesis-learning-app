# Plan: Recreate HITT 2149 — RHIT Competency Review

## Current State
- **Location**: data.js lines ~106558-107201 (~643 lines)
- **Current**: 8 lessons, 60 min, old SVG format (many cards have no visuals)
- **LAST book in HIM category** — followed by `]` closing books array, then `}` closing category, then `],` closing categories, then `dailyInsights`
- **Splice note**: Must preserve the closing structure after this book

## Target State
- **28 lessons**, maximum exam-prep depth, every card has full SVG to current standards
- **14-18 cards per lesson** — more than other courses because this is exam review
- **4+ quizzes per lesson** — this is EXAM PREP, drilling is the primary purpose
- **~350+ minutes** of content
- This is the CAPSTONE exam review course — must drill ALL 5 AHIMA RHIT domains
- **GOAL: A student who completes this course should be able to pass the RHIT exam**

## RHIT Exam Structure (2023+)
- **150 questions** (130 scored + 20 pretest), 3.5 hours
- Computer-based testing (CBT) via Pearson VUE
- **Scaled scoring**: 100-400, **pass = 300**
- **5 Domains** with approximate weights:
  - **Domain 1**: Data Content, Structure & Information Governance (**22%** → ~29 questions)
  - **Domain 2**: Information Protection: Access, Use, Disclosure, Privacy & Security (**18%** → ~23 questions)
  - **Domain 3**: Informatics, Analytics & Data Use (**18%** → ~23 questions)
  - **Domain 4**: Revenue Cycle Management (**24%** → ~31 questions)
  - **Domain 5**: Compliance (**18%** → ~23 questions)

## AHIMA Domain Subtasks (What They Actually Test)

### Domain 1 Subtasks (22%)
- 1.1 Analyze health record documentation guidelines and regulations
- 1.2 Apply health data standards and information governance concepts
- 1.3 Evaluate the completeness of health record documentation
- 1.4 Manage health data using appropriate classifications/terminologies
- 1.5 Verify documentation supports coded data
- 1.6 Manage secondary data sources

### Domain 2 Subtasks (18%)
- 2.1 Apply privacy strategies to health information
- 2.2 Apply security strategies to health information
- 2.3 Manage access to health information
- 2.4 Manage disclosure of health information

### Domain 3 Subtasks (18%)
- 3.1 Apply analytics to health data
- 3.2 Apply informatics concepts to health data
- 3.3 Manage clinical information systems
- 3.4 Apply data visualization techniques

### Domain 4 Subtasks (24%)
- 4.1 Manage coding processes
- 4.2 Manage reimbursement processes
- 4.3 Manage revenue cycle processes
- 4.4 Apply clinical coding guidelines

### Domain 5 Subtasks (18%)
- 5.1 Apply regulatory requirements
- 5.2 Manage compliance processes
- 5.3 Apply risk management strategies
- 5.4 Apply organizational management techniques

## Lesson Plan (28 Lessons)

### Unit 1: Exam Mastery Strategy (L1-2)
1. **"RHIT Exam Blueprint & Domination Strategy"** — Exam format (150 questions, 130 scored + 20 pretest, 3.5 hrs, Pearson VUE), 5 domains with exact weights and question counts, scoring (scaled 100-400, pass=300), AHIMA eligibility (associate degree from CAHIIM-accredited program), study timeline (8-12 weeks recommended), domain-weighted study plan, test-taking strategies (eliminate 2 → 50/50, read ALL options before choosing, "BEST/FIRST/MOST" = hierarchy keywords, never leave blank), anxiety management techniques, exam day logistics (Pearson VUE check-in, 2 forms of ID, no personal items)
   - **SVG**: Domain weight pie chart, study timeline calendar, strategy decision tree
   - **Quizzes**: Test exam logistics knowledge, domain weight awareness

2. **"Decoding RHIT Question Patterns"** — Question anatomy (stem → lead-in → 4 options → 1 best answer), Bloom's taxonomy levels (knowledge 15%, comprehension 25%, application 35%, analysis 25%), scenario-based question approach (WHO-WHAT-SITUATION-REGULATION), "Which of the following" patterns, EXCEPT/NOT reversal questions, "FIRST action" hierarchy (assess → document → report internally → report externally), "BEST" vs "MOST appropriate" distinctions, common distractor traps (true statement but doesn't answer the question, partially correct, opposite of correct, sounds impressive but wrong), practice dissecting 5+ sample questions
   - **SVG**: Question anatomy diagram, Bloom's pyramid with RHIT percentages
   - **Quizzes**: Meta-questions about how to answer RHIT questions

### Unit 2: Domain 1 — Data Content, Structure & Information Governance (22%) (L3-8)
3. **"Health Record Content & Documentation Requirements"** — Legal health record (LHR) definition vs designated record set (DRS), medical record components by care setting (acute: H&P within 24 hrs, progress notes, physician orders, consultation reports, operative reports, anesthesia records, pathology reports, discharge summary within 30 days; ambulatory: problem list, medication list, allergies; LTC: MDS), UHDDS (12 core data elements), UACDS, documentation requirements (CMS CoPs, TJC, state law), authentication requirements (signature, date, time, credentials), authorship, amendments vs corrections vs addenda vs late entries (definitions and rules for each), chart completion timelines (medical staff bylaws, typically 30 days for delinquent)
   - **4 quizzes**: LHR vs DRS scenario, UHDDS data elements, amendment vs correction, documentation timeline

4. **"Data Sets, Registries & Secondary Data Sources"** — All major data sets with settings: UHDDS (inpatient), UACDS (ambulatory), MDS 3.0 (SNF, triggers care planning), OASIS-E (home health, drives PDGM), IRF-PAI (inpatient rehab, drives CMG), DEEDS (emergency), HEDIS (managed care quality), data dictionaries (metadata, data definitions), cancer registries (state mandate, NAACCR standards, AJCC staging, accession numbers), trauma registries (NTDB), birth defect registries, transplant registries (UNOS), immunization registries (IIS), abstracting process, indices (master patient index, disease index, procedure index, physician index), vital statistics reporting
   - **4 quizzes**: Match data set to setting, registry identification, MDS/OASIS purpose, abstracting scenario

5. **"Health Record Formats & EHR Documentation"** — Source-oriented record (organized by department), problem-oriented medical record/POMR (Weed, problem list + SOAP notes), integrated record (chronological), hybrid format. Paper processes: chart assembly, analysis (quantitative = completeness, qualitative = consistency/quality), deficiency tracking, delinquent record management, suspension policies. EHR documentation: structured vs unstructured data, templates, smart phrases, copy-forward risks (cloning → audit risk), auto-population, voice recognition. Record storage: active vs inactive, microfilm/microfiche, optical disk, retention schedules (state minimums, AHIMA recommends 10 years adult/age of majority + statute of limitations for minors), destruction methods (shredding, degaussing, overwriting), destruction certificates
   - **4 quizzes**: POMR components, quantitative vs qualitative analysis, cloning risk scenario, retention schedule

6. **"Master Patient Index & Information Governance"** — MPI: purpose (unique patient identification across enterprise), data elements (name, DOB, SSN, medical record number, dates of service), duplicate management (identify, merge, overlay issues), EMPI (Enterprise MPI across facilities). Information Governance: AHIMA IG Principles (accountability, transparency, integrity, protection, compliance, availability, retention, disposition), IG vs data governance, data stewardship roles, AHIMA data quality model (10 characteristics: accuracy, accessibility, comprehensiveness, consistency, currency, definition, granularity, precision, relevancy, timeliness — KNOW ALL 10 for exam), data integrity, data mapping, metadata management
   - **4 quizzes**: MPI duplicate scenario, IG principle identification, data quality characteristic definitions, data stewardship role

7. **"Clinical Vocabularies, Terminologies & Classification Systems"** — Classification vs nomenclature vs terminology (definitions matter for exam), ICD-10-CM (diagnosis classification, NCHS maintains), ICD-10-PCS (procedure classification, CMS maintains), CPT (physician procedures, AMA owns), HCPCS Level II (CMS, supplies/equipment), SNOMED CT (clinical reference terminology, NLM), LOINC (lab/clinical observations), RxNorm (medications, NLM), CDT (dental, ADA), DSM-5 (mental health, APA), NDC (drug identification, FDA), ICD-O-3 (oncology), mapping between systems (SNOMED CT → ICD-10-CM), UMLS (Metathesaurus, Semantic Network, SPECIALIST Lexicon), GEMs (General Equivalence Mappings)
   - **4 quizzes**: Match vocabulary to maintainer, classification vs nomenclature, mapping scenario, UMLS components

8. **"Domain 1 Exam Drill: 20-Question Practice Set"** — Rapid-fire exam-format questions covering ALL Domain 1 subtasks, each with detailed explanations. Mix of knowledge, comprehension, application, and analysis level questions. Focus on high-yield exam topics: LHR vs DRS, UHDDS, MPI integrity, data quality model, record retention, amendments vs corrections, quantitative vs qualitative analysis. Every card is either a quiz or a concept card reviewing the most commonly missed Domain 1 topics.
   - **8+ quizzes**: Full exam simulation for Domain 1

### Unit 3: Domain 2 — Information Protection (18%) (L9-12)
9. **"HIPAA Privacy Rule: Everything Testable"** — PHI definition (individually identifiable health information, any form), 18 HIPAA identifiers (LIST ALL 18 — frequently tested), covered entities (3 types: health plans, clearinghouses, providers who transmit electronically), business associates (definition, examples, BAA requirements, HITECH direct liability). Patient rights: right of access (30 days, one 30-day extension, reasonable cost-based fee), right to amendment (60 days, one 30-day extension, can deny if not created by CE), accounting of disclosures (6-year lookback, excludes TPO), right to restrict (must honor if self-pay in full), confidential communications. TPO definitions, minimum necessary standard (does NOT apply to: treatment, patient requests, DHHS investigations, required by law, to the individual), authorization requirements (6 core elements + 3 required statements), personal representatives, minors (state law governs), deceased (50-year protection), psychotherapy notes (separate authorization always), 42 CFR Part 2 (substance abuse — more restrictive than HIPAA, requires specific consent)
   - **5 quizzes**: 18 identifiers, patient rights timelines, minimum necessary exceptions, authorization elements, 42 CFR Part 2 vs HIPAA

10. **"HIPAA Security Rule & Breach Notification"** — Security Rule scope (ePHI only, not paper/oral). Three safeguard categories: Administrative (security officer designation, workforce training, access management, information access management, security incident procedures, contingency plan, evaluation, BAA), Physical (facility access controls, workstation use/security, device and media controls), Technical (access controls — unique user ID/emergency access/automatic logoff/encryption, audit controls, integrity controls — mechanism to authenticate ePHI, person/entity authentication, transmission security). Required vs Addressable (addressable ≠ optional — must implement, implement alternative, or document why not). Breach Notification: breach = unauthorized acquisition/access/use/disclosure of unsecured PHI, 4-factor risk assessment (nature of PHI, who, was PHI actually viewed, extent of mitigation), notification timelines (individuals within 60 days of discovery, HHS if 500+ within 60 days + media, HHS annual log if <500), HITECH penalty tiers (Tier 1: unknowing $100-$50K; Tier 2: reasonable cause $1K-$50K; Tier 3: willful neglect corrected $10K-$50K; Tier 4: willful neglect not corrected $50K-$1.9M), criminal penalties (DOJ: $50K/1yr, $100K/5yr, $250K/10yr)
   - **5 quizzes**: Safeguard classification, required vs addressable, breach assessment scenario, penalty tier identification, notification timeline

11. **"Release of Information & Disclosure Mastery"** — ROI workflow: receive request → validate (is it a valid authorization? subpoena? court order? permitted disclosure?) → verify requestor identity → determine scope (minimum necessary) → process (retrieve, review, redact if needed) → track in disclosure log → invoice if applicable. Valid authorization: 6 core elements (description of PHI, who authorized, who receives, purpose, expiration, signature/date) + 3 required statements (right to revoke, ability to condition treatment, potential for redisclosure). Subpoena: NOT same as court order — requires satisfactory assurance (notice to patient OR qualified protective order). Court order: signed by judge, must comply, scope limited to order. Permitted disclosures without authorization: public health, abuse/neglect, FDA, law enforcement (6 specific circumstances), judicial proceedings, coroners/funeral directors, organ procurement, research (waiver of authorization criteria, preparatory to research, decedent research), serious threat, essential government functions, workers' comp. Fees: HIPAA right of access (reasonable cost-based), state laws may set maximums
   - **5 quizzes**: Authorization validation scenario, subpoena vs court order, permitted disclosure identification, ROI workflow ordering, fee/timeline question

12. **"Domain 2 Exam Drill: 20-Question Practice Set"** — Rapid-fire exam-format questions covering ALL Domain 2 subtasks. Mix of scenario-based privacy/security questions. High-yield topics: 18 identifiers, TPO, minimum necessary exceptions, authorization elements, Security Rule safeguard classification, breach notification timelines, ROI validation, subpoena handling, 42 CFR Part 2. Every card is quiz-focused.
   - **8+ quizzes**: Full exam simulation for Domain 2

### Unit 4: Domain 3 — Informatics, Analytics & Data Use (18%) (L13-17)
13. **"Health Information Systems & EHR"** — EHR vs EMR (EHR = interoperable across organizations, EMR = single practice) vs PHR (patient-controlled). EHR core functions: CPOE (reduces medication errors), CDS (alerts, reminders, drug-drug interactions, order sets), e-prescribing (EPCS for controlled substances), clinical documentation, patient portal (HIPAA right of access), health information exchange. System lifecycle: strategic planning → needs assessment → RFI/RFP → vendor selection → contract negotiation → implementation → training → go-live → optimization. Interoperability levels: foundational, structural, semantic, organizational. Standards: HL7 v2 (messaging), HL7 FHIR (modern APIs), CDA/C-CDA (document exchange), X12 (EDI transactions: 837=claim, 835=remittance, 270/271=eligibility, 276/277=status, 278=authorization). ONC role, 21st Century Cures Act (information blocking, 8 exceptions, TEFCA), Promoting Interoperability program (formerly Meaningful Use)
   - **4 quizzes**: EHR vs EMR vs PHR, interoperability levels, standard matching (837/835/etc), system lifecycle ordering

14. **"Healthcare Statistics & Analytics"** — Measures of central tendency: mean, median, mode (when to use each — median for skewed data). Variability: range, variance, standard deviation, coefficient of variation. Rates and formulas (ALL FORMULAS — these WILL be on the exam): mortality rates (gross death rate, net death rate, newborn/fetal/maternal death rate), autopsy rates (gross, net, hospital-adjusted), infection rates (nosocomial, community-acquired), bed statistics (occupancy rate, bed turnover rate, ADC, ALOS). Frequency distributions, percentiles, normal distribution. Descriptive vs inferential statistics, correlation (positive/negative/none), reliability vs validity. Data presentation: tables, bar charts, line graphs, pie charts, histograms, scatter plots — when to use each
   - **FORMULA SVGs**: Every formula displayed visually with worked examples
   - **5 quizzes**: Formula application, rate calculation, chart selection, mean vs median scenario, statistical interpretation

15. **"Quality & Performance Improvement"** — IOM "To Err Is Human" (44,000-98,000 deaths), "Crossing the Quality Chasm" (STEEEP: Safe, Timely, Effective, Efficient, Equitable, Patient-centered — MEMORIZE). Donabedian model: Structure (what you have) → Process (what you do) → Outcome (what happens). PI tools: PDCA/PDSA cycle, root cause analysis (RCA — used AFTER sentinel event), FMEA (proactive risk assessment — BEFORE event), fishbone/Ishikawa diagram, flowcharts, Pareto chart (80/20), run charts, control charts (common cause vs special cause variation). CMS quality programs: Hospital VBP (up to 2% incentive), HRRP (up to 3% penalty for 30-day readmissions), HAC Reduction Program (bottom 25% get 1% penalty). TJC National Patient Safety Goals. Core measures, eCQMs, HCAHPS (patient experience survey). CDI program metrics: query rate, query agreement rate, CC/MCC capture rate, CMI impact
   - **5 quizzes**: STEEEP mnemonic, Donabedian classification, RCA vs FMEA, CMS program penalties, PI tool selection

16. **"Research Methods & Decision Support"** — Research types: quantitative (experimental, quasi-experimental, descriptive) vs qualitative (phenomenology, ethnography, grounded theory). Study designs: RCT (gold standard), cohort, case-control, cross-sectional. Sampling: random, stratified, systematic, cluster, convenience (know pros/cons). Key concepts: independent vs dependent variable, hypothesis (null/alternative), p-value (<0.05 = significant), Type I error (false positive, reject true null) vs Type II error (false negative, accept false null), confidence intervals, IRB levels of review (exempt, expedited, full), Belmont Report (respect for persons, beneficence, justice), informed consent in research. Evidence hierarchy: systematic review/meta-analysis → RCT → cohort → case-control → case series → expert opinion. CDS: knowledge-based vs non-knowledge-based, alerts and reminders, clinical pathways, five rights of CDS (right information, right person, right format, right channel, right time)
   - **4 quizzes**: Study design identification, Type I vs Type II error, IRB level, evidence hierarchy ranking

17. **"Domain 3 Exam Drill: 20-Question Practice Set"** — Rapid-fire exam-format questions covering ALL Domain 3 subtasks. High-yield: formulas/calculations (occupancy rate, death rates, ALOS), STEEEP, Donabedian, PDCA vs RCA vs FMEA, EHR functions, interoperability, data visualization selection, research methodology, IRB. Heavy on calculations and application questions.
   - **8+ quizzes**: Full exam simulation for Domain 3, including formula-based questions

### Unit 5: Domain 4 — Revenue Cycle Management (24%) (L18-24)
18. **"ICD-10-CM Coding Review: Guidelines & High-Yield Chapters"** — Official Coding Guidelines review: locating codes (index then tabular), code to highest specificity, signs/symptoms (code if no definitive diagnosis), combination codes, laterality, 7th characters (A=initial, D=subsequent, S=sequela for injuries), Excludes1 (NEVER code together) vs Excludes2 (CAN code together if documented). HIGH-YIELD CHAPTERS: Diabetes (E08-E13, type/cause + manifestation, "with" = causal, insulin use Z79.4), Hypertension (I10-I16, assumed causal with heart I11/kidney I12/both I13), MI (I21-I22, STEMI vs NSTEMI, 4-week rule, type 1 vs type 2), Sepsis (A40-A41, R65.2x severe sepsis, sequencing rules), Pregnancy (trimester, 7th character fetus), Neoplasms (table: primary/secondary/CA in situ/benign/uncertain/unspecified, treatment-directed sequencing), Injuries (7th character, external cause codes required)
   - **5 quizzes**: Excludes1 vs Excludes2 scenario, diabetes coding, hypertension sequencing, sepsis coding, injury 7th character

19. **"ICD-10-PCS Coding Review: Structure & Root Operations"** — 7-character structure (section, body system, root operation, body part, approach, device, qualifier). 34 valid characters (0-9, A-H, J-N, P-Z — no O or I to avoid confusion). Medical & Surgical section (Section 0): 31 root operations organized in groups. MOST TESTED root operations: Excision (B, cutting out portion WITHOUT replacement) vs Resection (T, cutting out ALL of body part), Repair (Q, restoring to normal) vs Supplement (U, putting in biological/synthetic to reinforce), Bypass (1, altering route), Drainage (9), Inspection (J, visual/manual exploration), Replacement (R, put in device that replaces body part) vs Supplement (U, reinforces/augments). Approaches: Open (0), Percutaneous (3), Percutaneous Endoscopic (4), Via Natural or Artificial Opening (7), Via Natural/Artificial Opening Endoscopic (8), Via Natural/Artificial Opening with Percutaneous Endoscopic Assistance (F), External (X). Device values, qualifier values.
   - **5 quizzes**: Root operation identification from scenario, Excision vs Resection, approach selection, code building exercise, device vs no device

20. **"CPT/HCPCS Coding Review"** — CPT structure: 6 sections (E/M, Anesthesia, Surgery, Radiology, Pathology/Lab, Medicine). E/M 2021 guidelines: based on MDM OR time (for office visits). MDM table: 4 levels × 3 elements (problems, data, risk) — must meet/exceed 2 of 3. Modifiers: -25 (significant separate E/M same day as procedure), -26 (professional component), -TC (technical component), -59 (distinct procedural service), -50 (bilateral), -51 (multiple procedures), -52 (reduced), -57 (decision for surgery), -76/-77 (repeat same/different physician). Surgical package (global period: 0/10/90 days, includes pre-op day of, intra-op, typical uncomplicated post-op). HCPCS Level II (CMS, letter + 4 digits, DME/supplies/drugs). NCCI edits: Column 1/Column 2, mutually exclusive, modifier indicator (0=never unbundle, 1=modifier allowed, 9=not applicable), MUE (medically unlikely edits)
   - **5 quizzes**: E/M MDM level determination, modifier selection scenario, global period question, NCCI edit scenario, HCPCS identification

21. **"Reimbursement Systems & Payment Methodologies"** — Fee-for-service vs prospective vs value-based. ALL prospective payment systems (KNOW THE TABLE):
   | Setting | PPS | Payment Unit | Classification |
   |---------|-----|-------------|----------------|
   | Inpatient Hospital | IPPS | Per discharge | MS-DRG |
   | Outpatient Hospital | OPPS | Per service | APC |
   | Physician | MPFS | Per service | RVU |
   | SNF | SNF PPS | Per diem | PDPM |
   | Home Health | HH PPS | Per 30-day period | PDGM |
   | Inpatient Rehab | IRF PPS | Per discharge | CMG |
   | Long-term Acute Care | LTCH PPS | Per discharge | MS-LTC-DRG |
   | Hospice | Hospice | Per diem | 4 levels of care |
   Chargemaster/CDM management, claim forms (UB-04 for institutional, CMS-1500 for professional), EOB (to patient) vs ERA/RA (to provider), coordination of benefits, Medicare as secondary payer rules
   - **5 quizzes**: PPS matching (setting → system → classification), claim form selection, chargemaster scenario, payment calculation, COB scenario

22. **"Revenue Cycle: Front End to Back End"** — Complete revenue cycle: Scheduling → Pre-registration → Insurance verification/Pre-authorization → Registration/Patient access → Charge capture (CDM) → Coding (HIM) → Claim scrubbing → Claim submission (837) → Remittance processing (835) → Payment posting → Denial management → Appeals (5 Medicare levels: redetermination, reconsideration/QIC, ALJ, Medicare Appeals Council, federal court) → Collections → A/R follow-up. Key metrics: Days in A/R (target <40), clean claim rate (target >95%), denial rate (target <5%), DNFB (discharged not final billed), DNFC (discharged not final coded), case mix index (CMI = sum of DRG weights / discharges), CDI query rate, coding accuracy rate. CDI programs: concurrent review, physician queries (compliant query = non-leading), CC/MCC capture
   - **5 quizzes**: Revenue cycle step ordering, metric calculation, denial management scenario, CDI query compliance, appeals level identification

23. **"Value-Based Care & Modern Reimbursement"** — MACRA (2015, repealed SGR): Quality Payment Program with 2 tracks. MIPS: 4 categories (Quality 30%, Promoting Interoperability 25%, Improvement Activities 15%, Cost 30%), composite score 0-100, payment adjustment +/-9%. APMs: Advanced APMs get 5% bonus, exempt from MIPS, qualifying criteria (sufficient revenue/patients through APM). ACO models: MSSP (580+ ACOs, 11M+ beneficiaries), one-sided vs two-sided risk, ACO REACH. Bundled payments: BPCI Advanced (29 clinical episodes, 90-day window, target price). Risk adjustment: HCC (Hierarchical Condition Category) coding, RAF (Risk Adjustment Factor) scores, prospective vs concurrent review, impact on Medicare Advantage payment. Pay-for-performance, star ratings (Medicare Advantage), public reporting impact
   - **5 quizzes**: MIPS category weights, APM vs MIPS track, HCC/risk adjustment scenario, bundled payment calculation, ACO model identification

24. **"Domain 4 Exam Drill: 25-Question Practice Set"** — LARGEST practice set (Domain 4 = 24% of exam). Heavy on coding scenarios (ICD-10-CM sequencing, PCS root operations, CPT modifier selection), PPS matching, revenue cycle operations, CDI queries, metric calculations (CMI, ALOS, days in A/R). Every card is either a quiz or a high-yield review concept.
   - **10+ quizzes**: Full exam simulation for Domain 4

### Unit 6: Domain 5 — Compliance (18%) (L25-27)
25. **"Compliance Programs & Regulatory Framework"** — OIG 7 elements of effective compliance program: 1) Written policies/procedures/code of conduct, 2) Compliance officer and committee, 3) Training and education, 4) Communication lines (hotline, open door, non-retaliation), 5) Internal monitoring and auditing, 6) Enforcement through disciplinary guidelines, 7) Response to detected offenses. Corporate Integrity Agreements (CIAs — result of OIG settlement). Compliance officer: reports to CEO/Board, independent of billing/coding. Accreditation bodies: TJC (deemed status, unannounced surveys, tracer methodology), DNV GL (ISO 9001, annual surveys), CARF (rehab), NCQA (health plans), AAAHC (ambulatory). CMS CoPs/CfCs: conditions for Medicare participation. State licensure: facility licensure vs individual licensure vs certification (voluntary)
   - **5 quizzes**: OIG 7 elements ordering, compliance officer reporting, accreditation body matching, deemed status explanation, licensure vs certification

26. **"Fraud, Abuse & Healthcare Law"** — False Claims Act: civil, treble damages + $13,946-$27,894 per claim (2024), "knowingly" standard (no specific intent required, includes reckless disregard/deliberate ignorance), qui tam/whistleblower (15-30% of recovery). Anti-Kickback Statute: CRIMINAL, any remuneration to induce referrals, "one purpose" test, safe harbors (employee, personal services, space/equipment rental, investment in ASCs/group practices), penalties (up to $100K + 10 years per offense). Stark Law: CIVIL, physician self-referral prohibition for designated health services (DHS — list of 12 including clinical lab, imaging, DME, home health, outpatient Rx, inpatient/outpatient hospital), exceptions (in-office ancillary, physician services, fair market value). EMTALA: MSE + stabilize/transfer, applies to all patients regardless of payment, penalties up to $119,942. OIG: Work Plan (annual audit priorities), LEIE (exclusion list — must check monthly), ZPICs/UPICs (program integrity). Coding fraud indicators: upcoding, unbundling, phantom billing, duplicate billing, DRG creep, misrepresenting diagnosis
   - **5 quizzes**: FCA qui tam scenario, AKS vs Stark distinction, EMTALA requirement, OIG exclusion list, fraud indicator identification

27. **"Domain 5 Exam Drill: 20-Question Practice Set"** — Exam-format questions: compliance program scenarios, fraud identification, FIRST/BEST action for compliance issues (document → report internally → report externally), ethical dilemmas (AHIMA Code of Ethics), legal scenarios (subpoena handling, malpractice, informed consent), regulatory matching (which agency enforces what). Every card is quiz-focused.
   - **8+ quizzes**: Full exam simulation for Domain 5

### Unit 7: Full Exam Simulation & Final Prep (L28)
28. **"RHIT Final Exam: 30-Question Cross-Domain Simulation"** — Full mixed-domain exam simulation. 30 questions weighted by domain (7 D1, 5 D2, 5 D3, 8 D4, 5 D5). Cross-domain questions (coding + compliance, privacy + informatics, quality + revenue cycle). Includes the tricky "two answers seem right" pattern. Detailed explanations for every question referencing which domain/subtask is tested. Followed by: formula cheat sheet SVG, acronym master list SVG, "night before the exam" strategy card, exam day timeline card, post-exam next steps (CE requirements: 30 CEs per 2-year cycle, RHIT maintenance, career advancement to RHIA)
   - **15 quizzes**: Full mixed-domain exam simulation
   - **Application card**: Exam day checklist and strategy

## Execution Plan
1. **7 parallel agents**: L1-4, L5-8, L9-12, L13-16, L17-20, L21-24, L25-28
2. **Assembly**: Assemble → fix formats → validate → splice
3. **Splice point**: Replace lines ~106558-107201 in data.js
4. **CRITICAL**: This is the LAST book in HIM category. After the closing `}` of this book:
   ```
   ]       // closes books array
   }       // closes HIM category
   ],      // closes categories array
   dailyInsights: [...]
   ```
   Must preserve this closing structure exactly.
5. **Verify**: Parse validation, card/visual count, verify dailyInsights still accessible, open in browser

## Special Exam-Prep Card Patterns

Every lesson should include these exam-prep-specific patterns:

### "EXAM TIP" Concept Cards
SVG header with gold banner reading "EXAM TIP" — contains a high-yield test-taking insight specific to the topic. Example: "If a question asks about the FIRST action when discovering a breach, the answer is almost always 'conduct a risk assessment' — NOT 'notify patients.'"

### "HIGH-YIELD FACTS" Visual Cards
SVG with a dense grid of must-know facts for that topic. Formatted as a study reference card the student can mentally photograph. Example: all 18 HIPAA identifiers in a grid, or all PPS systems in a comparison table.

### "TRAP ALERT" Cards
SVG with red warning banner. Highlights common wrong-answer traps for that topic. Example: "TRAP: 'Addressable' does NOT mean 'optional' in the Security Rule. You MUST implement it, implement an alternative, or document why neither is reasonable."

### Enhanced Quiz Format
Every quiz explanation should include:
- Why the correct answer is correct
- Why the MOST tempting wrong answer is wrong (identify the trap)
- Which RHIT domain/subtask this tests
- Difficulty level (knowledge/comprehension/application/analysis)

## Key Content Notes
- **QUIZ DENSITY**: 4-5+ quizzes per content lesson, 8-15 per drill lesson. Target: **120+ total quizzes**
- **Domain 4 gets the most content** (24% = 7 lessons including drill)
- Every formula must appear in an SVG with a worked example
- Include mnemonics: STEEEP, OIG 7 elements, Donabedian (S-P-O), HIPAA rights, authorization elements
- Questions must use RHIT stem patterns ("BEST action," "FIRST step," "MOST appropriate")
- Cross-reference other HITT courses ("as covered in HITT 1341 Coding & Classification...")
- Final lesson must feel like a real exam experience

## Estimated Output
- 28 lessons × ~15 cards × ~55 lines/card = ~23,100 lines
- ~420+ total cards
- **120+ quizzes** (exam prep demands maximum drilling)
- ~350 minutes duration
- ~2.3 MB of content
