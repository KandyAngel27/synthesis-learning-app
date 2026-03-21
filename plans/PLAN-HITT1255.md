# Plan: Recreate HITT 1255 — Health Care Statistics

## Current State
- **Location**: data.js lines ~105062-105507 (~445 lines)
- **Current**: 6 lessons, 40 min, basic content, old SVG format
- **Next book after**: HITT 2343 (starts line 105508)

## Target State
- **20 lessons**, college-depth, every card has full SVG to current standards
- **12-15 cards per lesson**, at least 2 quizzes each
- **~200+ minutes** of content
- Covers a full semester of Healthcare Statistics with real formulas, calculations, and data presentation

## Lesson Plan (20 Lessons)

### Unit 1: Statistical Foundations (L1-5)
1. **"Why Statistics Matter in Healthcare"** — Role of statistics in healthcare decision-making, evidence-based medicine, quality reporting, regulatory compliance, HIM professional's role as data steward, types of healthcare data (administrative, clinical, financial)
2. **"Data Types & Measurement Scales"** — Qualitative vs quantitative data, discrete vs continuous, nominal/ordinal/interval/ratio scales, primary vs secondary data sources, data collection methods, healthcare data sources (UB-04, CMS-1500, vital records, registries)
3. **"Frequency Distributions & Data Organization"** — Frequency tables, grouped vs ungrouped data, class intervals, cumulative frequencies, relative frequencies, stem-and-leaf plots, organizing large healthcare datasets
4. **"Measures of Central Tendency"** — Mean (arithmetic, weighted, trimmed), median, mode, when to use each, effect of outliers, calculating from frequency distributions, application to LOS data, cost data, patient satisfaction scores
5. **"Measures of Variability & Position"** — Range, variance, standard deviation (population vs sample), coefficient of variation, percentiles, quartiles, IQR, z-scores, box-and-whisker plots, normal distribution, empirical rule (68-95-99.7)

### Unit 2: Hospital Statistics (L6-10)
6. **"Census & Bed Occupancy Statistics"** — Inpatient census, daily inpatient census (DIPC), average daily census (ADC), inpatient bed count, bed occupancy rate (percentage of occupancy), bed turnover rate, bassinet statistics (newborn vs adult/pedi), formulas with worked examples
7. **"Length of Stay Statistics"** — LOS calculation (discharge date - admission date), total LOS (discharge days), ALOS, median LOS, LOS by service/DRG/payer, leave of absence days, impact on reimbursement, CMS GMLOS and outlier thresholds
8. **"Hospital Death (Mortality) Rates"** — Gross death rate, net death rate (institutional), newborn death rate, fetal death rate, maternal death rate, postoperative death rate, anesthesia death rate, formulas with numerator/denominator specifications, when to include/exclude from calculations
9. **"Autopsy Rates"** — Gross autopsy rate, net autopsy rate, hospital autopsy rate (adjusted), coroner/ME cases, available bodies for autopsy, forensic vs hospital autopsies, why autopsy rates matter for quality, formulas with worked examples
10. **"Infection & Complication Rates"** — Hospital-acquired infection (HAI) rate, nosocomial infection rate, community-acquired vs hospital-acquired, surgical site infection rate, postoperative complication rate, consultation rate, C-section rate, NHSN (National Healthcare Safety Network) reporting

### Unit 3: Vital Statistics & Population Health Data (L11-14)
11. **"Vital Statistics & Public Health Reporting"** — Birth rate (crude, age-specific, fertility rate), death rate (crude, age-specific, cause-specific, age-adjusted/standardized), infant mortality rate, neonatal vs postneonatal mortality, maternal mortality rate, vital records systems, CDC WONDER, NVSS
12. **"Morbidity & Prevalence Measures"** — Incidence rate vs prevalence rate (point vs period), incidence proportion vs incidence rate (person-time), attack rate, case fatality rate, relative risk, odds ratio, attributable risk, NNT (number needed to treat), application to epidemiological studies
13. **"Survival Analysis & Life Tables"** — Survival rate, 5-year survival rate, case fatality rate, life tables (current vs cohort), Kaplan-Meier curves, median survival time, cancer registry statistics, SEER program, risk adjustment basics
14. **"Data Quality & Integrity"** — AHIMA data quality model (accuracy, accessibility, comprehensiveness, consistency, currency, definition, granularity, precision, relevancy, timeliness), data validation, data cleansing, coding accuracy (abstracting quality), CDI metrics, HIM's role in data governance

### Unit 4: Data Presentation & Analysis (L15-18)
15. **"Tables & Graphs in Healthcare"** — Designing effective tables (title, headings, stubs, cells, source notes), bar charts (simple, grouped, stacked, 100%), pie charts, histograms vs bar charts, frequency polygons, line graphs, scatter plots, choosing the right chart type
16. **"Advanced Data Visualization"** — Run charts, control charts (Shewhart charts: X-bar, p-chart, c-chart, u-chart), upper/lower control limits, special cause vs common cause variation, Pareto charts (80/20 rule), dashboards, scorecards, data storytelling for leadership
17. **"Descriptive vs Inferential Statistics"** — Sampling methods (random, stratified, systematic, cluster, convenience), sampling error, confidence intervals, hypothesis testing basics (null/alternative, Type I/II errors, p-values, significance levels), t-test, chi-square, ANOVA overview, correlation vs causation
18. **"Healthcare Quality Indicators & Benchmarking"** — CMS Hospital Compare, Leapfrog, AHRQ Quality Indicators (PSI, IQI, PDI, PQI), HEDIS measures, core measures/eCQMs, benchmarking methods (internal, external, competitive), risk adjustment (O/E ratios, CMI), public reporting

### Unit 5: Applications & Capstone (L19-20)
19. **"Statistics in Practice: Revenue Cycle & Compliance"** — Coding accuracy rates, denial rates, days in A/R, clean claim rate, case mix index (CMI) calculation, CMI's impact on reimbursement, CC/MCC capture rate, CDI query rates, audit sampling methodology, OIG compliance statistics
20. **"Capstone: Becoming a Healthcare Data Professional"** — Integrating all statistical concepts, real-world HIM statistical reports (monthly/quarterly), presenting data to C-suite, Excel and statistical tools, career paths (data analyst, quality coordinator, cancer registrar, CDI specialist), RHIT/RHIA exam statistical competencies, synthesis of all 20 lessons

## Execution Plan
1. **5 parallel agents**: L1-4, L5-8, L9-12, L13-16, L17-20
2. **Assembly**: Assemble → fix formats → validate → splice
3. **Splice point**: Replace lines ~105062-105507 in data.js
4. **Verify**: Parse validation, card/visual count, open in browser

## Key Content Notes
- This course is MATH-HEAVY — every formula must be shown with:
  - The formula itself (in SVG)
  - A worked example with real healthcare numbers
  - The interpretation of the result
- SVG visuals should show formulas, calculation steps, and data visualizations
- Quiz questions should test both formula knowledge AND interpretation
- Use realistic hospital data (ADC of 150, bed count of 200, etc.)

## Estimated Output
- 20 lessons × ~13 cards × ~50 lines/card = ~13,000 lines
- ~250+ total cards, ~60+ quizzes
- ~200 minutes duration
