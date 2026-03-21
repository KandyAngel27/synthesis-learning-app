# Plan: Recreate HITT 2239 — HI Organization & Supervision

## Current State
- **Location**: data.js lines ~106086-106557 (~470 lines)
- **Current**: 6 lessons, 40 min, basic content, missing SVGs on many cards
- **Next book after**: HITT 2149 (starts line 106558)

## Target State
- **20 lessons**, college-depth, every card has full SVG
- **12-15 cards per lesson**, at least 2 quizzes each
- **~200+ minutes** of content
- Covers a full semester of HIM Organization & Supervision

## Lesson Plan (20 Lessons)

### Unit 1: HIM Department Foundations (L1-5)
1. **"The Modern HIM Department"** — Evolution from medical records to HIM, department mission, scope of services, reporting structure (reports to CFO, CMO, or CIO depending on org)
2. **"HIM Department Functions & Workflow"** — Core functions: coding, CDI, ROI, chart analysis, transcription, registry, data analytics, compliance. Workflow mapping, turnaround times
3. **"Organizational Structures in Healthcare"** — Organizational theory, org charts, chain of command, span of control, centralized vs decentralized HIM, matrix organizations, flat vs hierarchical
4. **"HIM Staffing Models & Job Design"** — Job analysis, job descriptions, FTE calculations, productivity standards (coder/analyst/ROI), remote work models, staffing ratios
5. **"Work Design & Process Improvement"** — Workflow analysis, process mapping (swimlane diagrams), lean methodology, Six Sigma (DMAIC), kaizen events, automation opportunities

### Unit 2: Management & Leadership (L6-10)
6. **"Management Functions: Planning"** — Strategic planning, operational planning, SWOT analysis, mission/vision/values, goals & objectives (SMART), budgeting (operating vs capital)
7. **"Management Functions: Organizing & Directing"** — Delegation, authority types (line/staff/functional), span of control, departmental policies & procedures, SOPs, directing techniques
8. **"Leadership Theories & Styles"** — Trait theory, behavioral theory, contingency/situational leadership (Hersey-Blanchard), transformational vs transactional, servant leadership, emotional intelligence
9. **"Communication in Healthcare Organizations"** — Formal vs informal channels, upward/downward/lateral, barriers to communication, written vs verbal, meeting management, conflict resolution
10. **"Team Building & Motivation"** — Maslow's hierarchy, Herzberg's two-factor theory, McGregor's Theory X/Y, team development stages (Tuckman: forming-storming-norming-performing-adjourning), motivation strategies

### Unit 3: Human Resources (L11-15)
11. **"Recruitment, Selection & Onboarding"** — Job postings, interviewing (behavioral, situational, panel), legal/illegal interview questions, background checks, offer letters, onboarding programs, orientation
12. **"Performance Management & Appraisal"** — Performance standards, appraisal methods (graphic rating, 360-degree, MBO, BARS), coaching, counseling, documentation, progressive discipline (verbal → written → suspension → termination)
13. **"Training & Development"** — Needs assessment, learning styles (VARK), training methods (OJT, classroom, e-learning, simulation), competency assessment, cross-training, succession planning, career ladders
14. **"Employment Law & Compliance"** — Title VII, ADA, ADEA, FMLA, Fair Labor Standards Act (exempt vs non-exempt), EEOC, sexual harassment, wrongful termination, at-will employment, workers' comp, OSHA
15. **"Compensation & Benefits"** — Salary structures, pay grades, merit increases, incentive pay, benefits administration, PTO policies, retention strategies, employee engagement, turnover analysis

### Unit 4: Operations & Projects (L16-20)
16. **"Budgeting & Financial Management"** — Operating budgets, capital budgets, variance analysis, cost-benefit analysis, ROI calculations, FTE budget justification, revenue cycle impact of HIM
17. **"Project Management Fundamentals"** — Project lifecycle (initiation, planning, execution, monitoring, closing), scope/time/cost triangle, WBS, Gantt charts, critical path, PMBOK basics
18. **"Information Governance & Data Management"** — IG principles (AHIMA), data governance, data quality (AHIMA data quality model: accuracy, accessibility, consistency, comprehensiveness, currency, definition, granularity, precision, relevancy, timeliness), master data management, record retention
19. **"Change Management & Innovation"** — Kotter's 8-step model, Lewin's change model (unfreeze-change-refreeze), resistance to change, stakeholder analysis, communication plans, EHR implementation as change management
20. **"Capstone: HIM Leadership in the Future"** — Emerging HIM roles (CDI specialist, data analyst, privacy officer, IG director), AHIMA's HIM Reimagined, healthcare trends impacting HIM, professional development, RHIA/RHIT competencies, synthesis of all concepts

## Execution Plan
1. **6 parallel agents**: L1-4, L5-8, L9-12, L13-16, L17-20 (5 agents, last one is only 1 lesson but combine L19-20)
   - Actually: L1-4, L5-8, L9-12, L13-16, L17-20 (5 agents of 4 lessons each)
2. **Assembly**: Same process as HITT 1345 — assemble, fix formats, validate, splice
3. **Splice point**: Replace lines 106086-106557 in data.js
4. **Verify**: Parse validation, card count, visual count, open in browser

## Estimated Output
- 20 lessons × ~13 cards × ~50 lines/card = ~13,000 lines
- ~250+ total cards
- ~60+ quizzes
- ~200 minutes duration
- ~1.5 MB of content
