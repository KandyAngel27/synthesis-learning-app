# Plan: Recreate HITT 1341 — Coding & Classification Systems

## Current State
- **Location**: data.js lines ~89006-89928 (~922 lines)
- **Current**: 10 lessons, 75 min, old SVG format, not college-depth
- **Next book after**: HITT 1342 (starts line 89929)

## Target State
- **24 lessons**, college-depth, every card has full SVG to current standards
- **12-15+ cards per lesson**, at least 2 quizzes each
- **~280+ minutes** of content
- This is THE core coding course — needs maximum depth covering ICD-10-CM, ICD-10-PCS, and classification fundamentals

## Lesson Plan (24 Lessons)

### Unit 1: Classification Foundations (L1-4)
1. **"Why We Code: The Purpose of Clinical Classification"** — Why coding exists, uses of coded data (reimbursement, research, public health, quality, resource allocation), history of classification (Bills of Mortality → ICD-1 through ICD-10), WHO maintenance, NCHS and CMS roles, cooperating parties (AHA, AHIMA, CMS, NCHS)
2. **"ICD-10-CM Overview & Structure"** — ICD-10-CM structure: 21 chapters organized by body system/etiology, code format (3-7 characters: category, etiology, anatomic site, severity, extension), alphabetic index vs tabular list, placeholder "X", 7th character extensions (A/D/S for injuries)
3. **"ICD-10-CM Conventions & Symbols"** — Includes/Excludes1/Excludes2 notes, "Code first"/"Use additional code"/"Code also", NEC vs NOS, brackets, colons, braces, "and" means "and/or", "with" means associated with, default codes, laterality, instructional notations
4. **"Official Coding Guidelines (Sections I.A-I.C)"** — General coding guidelines: locating codes, level of detail, signs/symptoms, conditions integral to disease, conditions not integral, multiple coding, combination codes, sequela (late effects), laterality, documentation requirements

### Unit 2: ICD-10-CM Body System Coding (L5-12)
5. **"Infectious & Parasitic Diseases (Ch 1) + Neoplasms (Ch 2)"** — Chapter 1: HIV coding rules (B20, Z21, inconclusive), sepsis/severe sepsis/septic shock sequencing, MRSA/MSSA. Chapter 2: Neoplasm table (malignant primary/secondary, benign, uncertain, unspecified), sequencing with treatment directed at neoplasm, anemia due to neoplasm, adverse effects of treatment
6. **"Diseases of Blood, Endocrine, Mental/Behavioral (Ch 3-5)"** — Chapter 3: anemias, coagulation defects. Chapter 4: diabetes mellitus (Type 1/Type 2/secondary, with complications, insulin use, E11 vs E13, "with" convention). Chapter 5: mental disorders, substance use/abuse/dependence hierarchy, pain disorders
7. **"Nervous System & Sense Organs (Ch 6-8)"** — Chapter 6: dominant vs nondominant side (hemiplegia), epilepsy, pain (G89). Chapter 7: glaucoma (7th character for eye), diabetic eye conditions. Chapter 8: otitis media, hearing loss
8. **"Circulatory System (Ch 9)"** — Hypertension (I10-I16, assumed causal relationship with heart/kidney disease), MI coding (I21-I22, STEMI vs NSTEMI, 4-week window), heart failure, cerebrovascular disease, atherosclerosis with angina, sequencing guidelines
9. **"Respiratory & Digestive Systems (Ch 10-11)"** — Chapter 10: influenza, pneumonia, COPD with acute exacerbation, asthma, ventilator-associated conditions. Chapter 11: hernias, GI hemorrhage, K codes
10. **"Skin, Musculoskeletal, Genitourinary (Ch 12-14)"** — Chapter 12: pressure ulcers (stages, site-specific), non-pressure ulcers. Chapter 13: pathological fractures (7th character), dorsopathies, site/laterality. Chapter 14: CKD stages, dialysis, transplant status
11. **"Pregnancy, Childbirth & Perinatal (Ch 15-16)"** — Chapter 15: trimester rules, 7th character for fetus, sequencing in pregnancy, gestational diabetes vs pre-existing. Chapter 16: codes only on newborn record, birth weight, prematurity, conditions originating in perinatal period
12. **"Congenital, Symptoms, External Causes (Ch 17-20)"** — Chapter 17: congenital vs acquired. Chapter 18: R codes (symptoms/signs), when to code symptoms vs definitive diagnosis. Chapter 19: injury coding (7th characters A/D/S), fracture coding, adverse effects vs poisoning vs underdosing. Chapter 20: external cause codes (place, activity, status)

### Unit 3: ICD-10-PCS Procedure Coding (L13-18)
13. **"ICD-10-PCS Structure & Format"** — 7-character alphanumeric structure, 34 possible values per character (0-9, A-H, J-N, P-Z — no O or I), 17 sections, tables and index, how to build a code character by character, difference from ICD-10-CM
14. **"Medical & Surgical Section (Section 0) — Root Operations Part 1"** — Root operations that take out some/all of body part: Excision (B), Resection (T), Detachment (6), Destruction (5), Extraction (D). Definitions, examples, coding exercises. Qualifier usage.
15. **"Medical & Surgical Section — Root Operations Part 2"** — Root operations that take out solids/fluids/gases: Drainage (9), Extirpation (C), Fragmentation (F). Root operations involving cutting/separation: Division (8), Release (N). Root operations that put in/put back/move: Transplantation (Y), Reattachment (M), Transfer (X), Reposition (S)
16. **"Medical & Surgical Section — Root Operations Part 3"** — Root operations that alter diameter/route: Bypass (1), Dilation (7), Occlusion (L), Restriction (V). Root operations involving examination: Inspection (J), Map (K). Root operations that define other repairs: Repair (Q), Control (3), Creation (4)
17. **"Medical & Surgical Section — Root Operations Part 4"** — Root operations involving devices: Insertion (H), Replacement (R), Supplement (U), Change (2), Removal (P), Revision (W). Approaches: Open (0), Percutaneous (3), Percutaneous Endoscopic (4), Via Natural/Artificial Opening (7/8), External (X). Device values.
18. **"Other PCS Sections (1-X)"** — Obstetrics (1), Placement (2), Administration (3), Measurement/Monitoring (4/5), Extracorporeal/Osteopathic (6-8), Chiropractic (9), Imaging (B), Nuclear Medicine (C), Radiation Therapy (D), Physical Rehab (F), Mental Health (G), Substance Abuse (H), New Technology (X)

### Unit 4: Coding Practice & Compliance (L19-24)
19. **"Selecting the Principal Diagnosis"** — UHDDS definitions, principal diagnosis selection rules, circumstances of admission, two or more equally meeting definition, symptoms with definitive diagnosis, original treatment plan not carried out, complications of surgery, uncertain diagnosis at discharge
20. **"Sequencing: Secondary Diagnoses, POA & Complications"** — Secondary diagnosis selection (reporting additional conditions), CC/MCC impact on DRGs, present on admission (POA) indicators (Y, N, U, W, 1), POA exemption list, complications vs comorbidities, hospital-acquired conditions (HAC) list
21. **"Principal Procedure & Operative Report Coding"** — Selecting principal procedure, significant procedure definition, reading operative reports for PCS coding, identifying root operation from documentation, approach determination, body part mapping, device identification
22. **"Coding Compliance & Ethics"** — Upcoding, unbundling, DRG creep, False Claims Act, OIG Work Plan, coding audits (prospective, concurrent, retrospective), query process (compliant queries), AHIMA Standards of Ethical Coding, coder-physician communication
23. **"Coding Accuracy & Productivity"** — Coding accuracy rate calculation, quality metrics, productivity standards by setting (inpatient vs outpatient), denial management, RAC audits (Recovery Audit Contractors), CERT (Comprehensive Error Rate Testing), PEPPER reports, CDI collaboration
24. **"Capstone: Integrated Coding Case Studies"** — Complex multi-system case studies combining ICD-10-CM and ICD-10-PCS, sequencing exercises, documentation analysis, connecting coding to reimbursement (DRGs, APCs), RHIT/CCS exam preparation, coding career paths

## Execution Plan
1. **6 parallel agents**: L1-4, L5-8, L9-12, L13-16, L17-20, L21-24
2. **Assembly**: Assemble → fix formats → validate → splice
3. **Splice point**: Replace lines ~89006-89928 in data.js
4. **Verify**: Parse validation, card/visual count, open in browser

## Key Content Notes
- This is THE most critical coding course — students must memorize conventions, guidelines, root operations
- SVGs should show code structures, decision trees, chapter organization, root operation comparisons
- Quiz questions should include code selection exercises ("Which code is correct for...?")
- Include mnemonics where helpful (root operation groups, 7th character values)
- Real-world coding scenarios: reading documentation → selecting codes → sequencing
- ICD-10-PCS table navigation must be visually taught step by step

## Estimated Output
- 24 lessons × ~13 cards × ~50 lines/card = ~15,600 lines
- ~310+ total cards, ~72+ quizzes
- ~280 minutes duration
