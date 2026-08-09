// External book module — The Metabolic Reset (metabolic health & aging)
// Registered in integrateExternalCategories() in data.js; loaded via index.html.
window.METABOLIC_HEALTH_AGING_BOOK = {
    id: "metabolic-health-aging",
    title: "The Metabolic Reset: Keeping Your Engine Strong at Every Age",
    author: "Synthesis Curriculum",
    description: "The science of metabolic dysfunction — and the research-backed playbook of exercise, food, sleep, and lab tracking that keeps your metabolism healthy for decades.",
    lessons: 12,
    duration: 84,
    progress: 0,
    category: "health",
    featured: true,
    lessonList: [
{
    id: 1,
    title: "The Silent Epidemic: Why Only 1 in 8 Adults Is Metabolically Healthy",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "Would You Bet You're the One in Eight?",
            content: "Line up eight American adults. Statistically, only ONE of them is metabolically healthy — meaning their body processes fuel the way it was designed to.\n\nThe other seven? Their systems are quietly drifting toward heart disease, type 2 diabetes, stroke, fatty liver, and even dementia — usually without a single symptom.\n\nHere's the uncomfortable part: most of those seven feel fine. Many look fine. Some are thin. Almost none of them know.\n\nIn 2019, researchers at the University of North Carolina put a hard number on this, and it stunned the medical world. In this lesson you'll learn what metabolic health actually means, the five markers that define it, why it's the upstream driver of nearly every major chronic disease — and why, despite all of that, this story ends with genuine hope.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE SILENT EPIDEMIC</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Only 1 in 8 US adults is metabolically healthy</text>
                    <circle cx="205" cy="300" r="60" fill="rgba(255,215,0,0.25)" stroke="#ffd700" stroke-width="4"/>
                    <text x="205" y="312" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="30">1</text>
                    <circle cx="435" cy="300" r="60" fill="rgba(239,68,68,0.12)" stroke="#ef4444" stroke-width="2"/>
                    <text x="435" y="312" text-anchor="middle" fill="#ef4444" font-size="30">2</text>
                    <circle cx="665" cy="300" r="60" fill="rgba(239,68,68,0.12)" stroke="#ef4444" stroke-width="2"/>
                    <text x="665" y="312" text-anchor="middle" fill="#ef4444" font-size="30">3</text>
                    <circle cx="895" cy="300" r="60" fill="rgba(239,68,68,0.12)" stroke="#ef4444" stroke-width="2"/>
                    <text x="895" y="312" text-anchor="middle" fill="#ef4444" font-size="30">4</text>
                    <circle cx="205" cy="480" r="60" fill="rgba(239,68,68,0.12)" stroke="#ef4444" stroke-width="2"/>
                    <text x="205" y="492" text-anchor="middle" fill="#ef4444" font-size="30">5</text>
                    <circle cx="435" cy="480" r="60" fill="rgba(239,68,68,0.12)" stroke="#ef4444" stroke-width="2"/>
                    <text x="435" y="492" text-anchor="middle" fill="#ef4444" font-size="30">6</text>
                    <circle cx="665" cy="480" r="60" fill="rgba(239,68,68,0.12)" stroke="#ef4444" stroke-width="2"/>
                    <text x="665" y="492" text-anchor="middle" fill="#ef4444" font-size="30">7</text>
                    <circle cx="895" cy="480" r="60" fill="rgba(239,68,68,0.12)" stroke="#ef4444" stroke-width="2"/>
                    <text x="895" y="492" text-anchor="middle" fill="#ef4444" font-size="30">8</text>
                    <rect x="150" y="640" width="800" height="150" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="700" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="24">Just 12% pass all five markers</text>
                    <text x="550" y="745" text-anchor="middle" fill="#fff" font-size="19">The other 88% are drifting toward chronic disease</text>
                    <rect x="200" y="850" width="700" height="110" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="898" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">The good news: this is largely reversible</text>
                    <text x="550" y="935" text-anchor="middle" fill="#888" font-size="17">And this book is your roadmap back</text>
                </svg>`,
                caption: "Eight adults, one metabolically healthy — which one are you?"
            }
        },
        {
            type: "concept",
            title: "What Metabolic Health Actually Means",
            content: "Strip away the jargon and **metabolism** is simply this: your body's system for turning fuel into energy. Every bite you eat arrives as **glucose** (sugar) or **fat**, and your body must decide — burn it now, or store it for later.\n\n**Metabolic health** is how smoothly that fuel-handling system runs:\n\n• **Glucose gets cleared quickly** — after a meal, blood sugar rises modestly and returns to baseline within a couple of hours\n• **Insulin stays low and effective** — a small hormonal whisper is enough to move fuel into cells\n• **Fat is stored safely** — under the skin, not packed around your liver, pancreas, and heart\n• **You switch fuels flexibly** — burning carbs after meals, fat between meals, without energy crashes\n\nThink of it like a car engine. A healthy engine burns fuel cleanly and idles smoothly. A dysfunctional one floods, sputters, and leaks fuel into places it doesn't belong. **Metabolic dysfunction** is fuel going where it shouldn't — sugar lingering in your blood, fat infiltrating your organs — years before any disease gets a name.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">YOUR FUEL SYSTEM</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Metabolic health = fuel handled cleanly</text>
                    <rect x="90" y="170" width="280" height="130" rx="20" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="230" y="225" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">FOOD IN</text>
                    <text x="230" y="265" text-anchor="middle" fill="#fff" font-size="17">Glucose + fat arrive</text>
                    <path d="M370 235 L430 235" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="430,235 418,227 418,243" fill="#14b8a6"/>
                    <rect x="430" y="170" width="280" height="130" rx="20" fill="rgba(99,102,241,0.15)" stroke="#6366f1" stroke-width="2"/>
                    <text x="570" y="225" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">DECISION</text>
                    <text x="570" y="265" text-anchor="middle" fill="#fff" font-size="17">Burn now or store?</text>
                    <path d="M710 235 L770 235" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="770,235 758,227 758,243" fill="#14b8a6"/>
                    <rect x="770" y="170" width="240" height="130" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="890" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">ENERGY</text>
                    <text x="890" y="265" text-anchor="middle" fill="#fff" font-size="17">Cells powered</text>
                    <rect x="90" y="380" width="440" height="300" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="310" y="435" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">HEALTHY ENGINE</text>
                    <text x="310" y="485" text-anchor="middle" fill="#fff" font-size="17">Glucose cleared in ~2 hours</text>
                    <text x="310" y="525" text-anchor="middle" fill="#fff" font-size="17">Insulin whispers, cells listen</text>
                    <text x="310" y="565" text-anchor="middle" fill="#fff" font-size="17">Fat stored safely under skin</text>
                    <text x="310" y="605" text-anchor="middle" fill="#fff" font-size="17">Switches fuels flexibly</text>
                    <text x="310" y="645" text-anchor="middle" fill="#888" font-size="16">Steady energy all day</text>
                    <rect x="570" y="380" width="440" height="300" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="790" y="435" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">SPUTTERING ENGINE</text>
                    <text x="790" y="485" text-anchor="middle" fill="#fff" font-size="17">Sugar lingers in the blood</text>
                    <text x="790" y="525" text-anchor="middle" fill="#fff" font-size="17">Insulin shouts, cells ignore</text>
                    <text x="790" y="565" text-anchor="middle" fill="#fff" font-size="17">Fat leaks into liver + organs</text>
                    <text x="790" y="605" text-anchor="middle" fill="#fff" font-size="17">Stuck in storage mode</text>
                    <text x="790" y="645" text-anchor="middle" fill="#888" font-size="16">Crashes, cravings, fatigue</text>
                    <rect x="150" y="760" width="800" height="100" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="805" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="20">Dysfunction = fuel going where it shouldn't</text>
                    <text x="550" y="840" text-anchor="middle" fill="#888" font-size="16">Years before any disease gets a name</text>
                </svg>`,
                caption: "A healthy metabolism burns and stores fuel cleanly — dysfunction is fuel in the wrong places"
            }
        },
        {
            type: "visual",
            title: "The Five Markers That Define Metabolic Health",
            content: "Metabolic health isn't a feeling — it's five measurable numbers, drawn from the **ATP III criteria** doctors use to diagnose **metabolic syndrome**. Fail three or more and you have metabolic syndrome (roughly **1 in 3 US adults** does). To count as fully metabolically healthy, you need to pass **all five** — without medications propping any of them up.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE FIVE MARKERS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Pass all five, with no meds, to be metabolically healthy</text>
                    <rect x="100" y="160" width="900" height="130" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="160" y="215" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="22">1. WAIST CIRCUMFERENCE</text>
                    <text x="160" y="255" text-anchor="start" fill="#fff" font-size="18">Under 40 in (men) / under 35 in (women)</text>
                    <rect x="100" y="315" width="900" height="130" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="160" y="370" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="22">2. TRIGLYCERIDES</text>
                    <text x="160" y="410" text-anchor="start" fill="#fff" font-size="18">Under 150 mg/dL — fat circulating in your blood</text>
                    <rect x="100" y="470" width="900" height="130" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="160" y="525" text-anchor="start" fill="#10b981" font-weight="bold" font-size="22">3. HDL CHOLESTEROL</text>
                    <text x="160" y="565" text-anchor="start" fill="#fff" font-size="18">Above 40 mg/dL (men) / above 50 (women)</text>
                    <rect x="100" y="625" width="900" height="130" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="160" y="680" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="22">4. BLOOD PRESSURE</text>
                    <text x="160" y="720" text-anchor="start" fill="#fff" font-size="18">Under 130/85 mmHg</text>
                    <rect x="100" y="780" width="900" height="130" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="160" y="835" text-anchor="start" fill="#3b82f6" font-weight="bold" font-size="22">5. FASTING GLUCOSE</text>
                    <text x="160" y="875" text-anchor="start" fill="#fff" font-size="18">Under 100 mg/dL</text>
                    <rect x="150" y="945" width="800" height="110" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="993" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">Fail 3 or more = metabolic syndrome</text>
                    <text x="550" y="1030" text-anchor="middle" fill="#888" font-size="16">Roughly 1 in 3 US adults already qualifies</text>
                </svg>`,
                caption: "The five ATP III markers — metabolic health means passing every one without medication"
            }
        },
        {
            type: "example",
            title: "The Study That Shocked Researchers",
            content: "In 2019, **Joana Araújo** and her team at the **University of North Carolina** asked a simple question: how many American adults are actually metabolically healthy?\n\nThey analyzed **NHANES data from 2009 to 2016** — a nationally representative sample of about **8,700 US adults** — checking all five markers plus medication use.\n\nThe result: only **12.2%** passed. Roughly **1 in 8**.\n\nDrill into the subgroups and it gets starker:\n\n• Among adults with **obesity**, metabolic health was nearly nonexistent — around **0.5%**\n• Even among **normal-weight adults**, only about **1 in 3** qualified\n• Metabolic health declined sharply with **age** and was lower in men and in people with less physical activity\n\nWhy does this matter to you? Because these five numbers aren't trivia — each failed marker independently raises your risk of heart attack, stroke, and diabetes. And the odds say most people reading this sentence are somewhere in the 88%.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE UNC FINDING (2019)</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Araujo et al. — NHANES 2009-2016, ~8,700 adults</text>
                    <rect x="150" y="200" width="180" height="560" rx="15" fill="rgba(16,185,129,0.25)" stroke="#10b981" stroke-width="2"/>
                    <rect x="150" y="692" width="180" height="68" rx="15" fill="rgba(16,185,129,0.6)" stroke="#10b981" stroke-width="2"/>
                    <text x="240" y="800" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">12.2%</text>
                    <text x="240" y="835" text-anchor="middle" fill="#888" font-size="16">Healthy</text>
                    <rect x="430" y="200" width="180" height="560" rx="15" fill="rgba(239,68,68,0.5)" stroke="#ef4444" stroke-width="2"/>
                    <text x="520" y="800" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">87.8%</text>
                    <text x="520" y="835" text-anchor="middle" fill="#888" font-size="16">Not healthy</text>
                    <rect x="680" y="200" width="340" height="270" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="850" y="255" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="20">SUBGROUPS</text>
                    <text x="850" y="305" text-anchor="middle" fill="#fff" font-size="17">Obesity: ~0.5% healthy</text>
                    <text x="850" y="345" text-anchor="middle" fill="#fff" font-size="17">Normal BMI: ~1 in 3</text>
                    <text x="850" y="385" text-anchor="middle" fill="#fff" font-size="17">Declines with age</text>
                    <text x="850" y="425" text-anchor="middle" fill="#888" font-size="15">Lower with inactivity</text>
                    <rect x="680" y="500" width="340" height="260" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="850" y="555" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">WHY IT MATTERS</text>
                    <text x="850" y="605" text-anchor="middle" fill="#fff" font-size="16">Each failed marker raises</text>
                    <text x="850" y="640" text-anchor="middle" fill="#fff" font-size="16">risk of heart attack,</text>
                    <text x="850" y="675" text-anchor="middle" fill="#fff" font-size="16">stroke, and diabetes</text>
                    <text x="850" y="715" text-anchor="middle" fill="#888" font-size="15">independently</text>
                    <rect x="150" y="880" width="800" height="110" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="928" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">Odds are, you're in the 88%</text>
                    <text x="550" y="965" text-anchor="middle" fill="#888" font-size="16">Most people in it have no idea — no symptoms yet</text>
                </svg>`,
                caption: "Only 12.2% of ~8,700 US adults passed all five markers in the UNC analysis"
            }
        },
        {
            type: "quiz",
            question: "According to the 2019 Araújo (UNC) study of NHANES data, what share of US adults is metabolically healthy?",
            options: [
                { text: "About half — most adults pass the five markers", correct: false },
                { text: "About 1 in 3 — the same share that has metabolic syndrome", correct: false },
                { text: "About 12% — roughly 1 in 8 adults", correct: true },
                { text: "Under 1% — metabolic health is essentially extinct", correct: false }
            ],
            explanation: "The UNC team found only 12.2% of US adults — about 1 in 8 — passed all five markers (waist, triglycerides, HDL, blood pressure, fasting glucose) without medication. The '1 in 3' figure is tempting but backwards: that's roughly the share who already have full metabolic syndrome (3+ failed markers). And while under 1% sounds dramatic, that figure only applies to the subgroup with obesity (~0.5%).",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="140" width="800" height="220" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="200" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE HEADLINE NUMBER</text>
                    <text x="550" y="250" text-anchor="middle" fill="#fff" font-size="18">Araujo et al. 2019 — University of North Carolina</text>
                    <text x="550" y="290" text-anchor="middle" fill="#fff" font-size="18">NHANES 2009-2016 - about 8,700 US adults</text>
                    <text x="550" y="330" text-anchor="middle" fill="#888" font-size="16">Five markers, no medications allowed</text>
                    <circle cx="550" cy="560" r="150" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="3"/>
                    <text x="550" y="545" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="48">?</text>
                    <text x="550" y="605" text-anchor="middle" fill="#fff" font-size="20">What fraction passed?</text>
                    <rect x="200" y="790" width="700" height="100" rx="20" fill="rgba(20,184,166,0.15)" stroke="#14b8a6" stroke-width="2"/>
                    <text x="550" y="835" text-anchor="middle" fill="#14b8a6" font-weight="bold" font-size="19">Hint: think of eight people in a line</text>
                    <text x="550" y="870" text-anchor="middle" fill="#888" font-size="16">How many of them run a clean fuel system?</text>
                </svg>`,
                caption: "Test your understanding of the headline finding"
            }
        },
        {
            type: "concept",
            title: "One Root, Many Branches",
            content: "Here's the reframe that changes everything: heart disease, type 2 diabetes, stroke, fatty liver disease, many cancers, and dementia look like separate diseases. Increasingly, researchers see them as **branches of the same tree** — and the root is **metabolic dysfunction**.\n\nFollow the chain:\n\n• Chronically elevated **glucose and insulin** damage blood vessel linings → **heart disease and stroke**\n• Overloaded fat storage spills lipids into the liver → **non-alcoholic fatty liver disease**, now affecting roughly 1 in 4 adults worldwide\n• Exhausted insulin signaling collapses → **type 2 diabetes**\n• High insulin acts as a **growth signal** — one reason metabolic dysfunction is linked to higher risk of several **cancers**, including colorectal, breast, and pancreatic\n\nThis is why treating each disease separately — one pill per branch — so often disappoints. You can trim branches forever. The root keeps feeding them.\n\nAnd the most surprising branch of all reaches into your brain. That's next.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">ONE ROOT, MANY BRANCHES</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Separate diseases, same upstream driver</text>
                    <rect x="70" y="170" width="300" height="120" rx="20" fill="rgba(239,68,68,0.12)" stroke="#ef4444" stroke-width="2"/>
                    <text x="220" y="220" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="19">HEART DISEASE</text>
                    <text x="220" y="258" text-anchor="middle" fill="#888" font-size="15">Damaged vessel linings</text>
                    <rect x="400" y="170" width="300" height="120" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="220" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="19">TYPE 2 DIABETES</text>
                    <text x="550" y="258" text-anchor="middle" fill="#888" font-size="15">Insulin signaling collapses</text>
                    <rect x="730" y="170" width="300" height="120" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="880" y="220" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="19">STROKE</text>
                    <text x="880" y="258" text-anchor="middle" fill="#888" font-size="15">Vascular damage in brain</text>
                    <rect x="70" y="330" width="300" height="120" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="220" y="380" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="19">FATTY LIVER</text>
                    <text x="220" y="418" text-anchor="middle" fill="#888" font-size="15">Fat spills into the liver</text>
                    <rect x="400" y="330" width="300" height="120" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="550" y="380" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="19">MANY CANCERS</text>
                    <text x="550" y="418" text-anchor="middle" fill="#888" font-size="15">Insulin as growth signal</text>
                    <rect x="730" y="330" width="300" height="120" rx="20" fill="rgba(20,184,166,0.15)" stroke="#14b8a6" stroke-width="2"/>
                    <text x="880" y="380" text-anchor="middle" fill="#14b8a6" font-weight="bold" font-size="19">DEMENTIA</text>
                    <text x="880" y="418" text-anchor="middle" fill="#888" font-size="15">The brain branch</text>
                    <line x1="220" y1="450" x2="550" y2="640" stroke="#ffd700" stroke-width="2" stroke-dasharray="6" opacity="0.5"/>
                    <line x1="550" y1="450" x2="550" y2="640" stroke="#ffd700" stroke-width="2" stroke-dasharray="6" opacity="0.5"/>
                    <line x1="880" y1="450" x2="550" y2="640" stroke="#ffd700" stroke-width="2" stroke-dasharray="6" opacity="0.5"/>
                    <line x1="220" y1="290" x2="130" y2="640" stroke="#ffd700" stroke-width="2" stroke-dasharray="6" opacity="0.3"/>
                    <line x1="880" y1="290" x2="970" y2="640" stroke="#ffd700" stroke-width="2" stroke-dasharray="6" opacity="0.3"/>
                    <rect x="250" y="640" width="600" height="160" rx="25" fill="rgba(255,215,0,0.12)" stroke="#ffd700" stroke-width="3"/>
                    <text x="550" y="705" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="26">THE ROOT</text>
                    <text x="550" y="750" text-anchor="middle" fill="#fff" font-size="20">Metabolic dysfunction</text>
                    <rect x="150" y="870" width="800" height="110" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="918" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">Trim branches forever, or treat the root</text>
                    <text x="550" y="955" text-anchor="middle" fill="#888" font-size="16">One pill per branch never fixes the tree</text>
                </svg>`,
                caption: "The major chronic diseases as branches fed by one metabolic root"
            }
        },
        {
            type: "concept",
            title: "Type 3 Diabetes: The Brain Connection",
            content: "Your brain is 2% of your body weight but burns roughly **20% of your energy**. So what happens when the fuel system feeding it breaks down?\n\nSome researchers now call Alzheimer's disease **\"type 3 diabetes\"** — a provocative (and still debated) hypothesis with striking evidence behind it:\n\n• Brain imaging shows **reduced glucose uptake** in Alzheimer's-affected regions years before symptoms — neurons literally starving amid plenty\n• The brain has its own **insulin signaling**, involved in memory formation — and it can become **insulin resistant**, just like muscle\n• People with **type 2 diabetes** have roughly a **50-100% higher risk** of developing dementia\n• Insulin resistance is linked to more **amyloid plaque** buildup, a hallmark of Alzheimer's\n\nTo be clear: Alzheimer's is complex, and metabolism isn't the whole story. But the implication is enormous — the same choices that protect your heart and pancreas in your 40s and 50s appear to protect your **memory** in your 70s and 80s.\n\nYou're not just eating and moving for this decade. You're doing it for the person you'll be in thirty years.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">TYPE 3 DIABETES?</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">The metabolic hypothesis of dementia</text>
                    <circle cx="550" cy="330" r="160" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="3"/>
                    <text x="550" y="300" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="24">YOUR BRAIN</text>
                    <text x="550" y="345" text-anchor="middle" fill="#fff" font-size="18">2% of body weight</text>
                    <text x="550" y="385" text-anchor="middle" fill="#fff" font-size="18">~20% of energy use</text>
                    <rect x="80" y="560" width="450" height="180" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="305" y="615" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">THE EVIDENCE</text>
                    <text x="305" y="660" text-anchor="middle" fill="#fff" font-size="16">Glucose uptake drops in affected</text>
                    <text x="305" y="695" text-anchor="middle" fill="#fff" font-size="16">regions years before symptoms</text>
                    <rect x="570" y="560" width="450" height="180" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="795" y="615" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">THE RISK LINK</text>
                    <text x="795" y="660" text-anchor="middle" fill="#fff" font-size="16">Type 2 diabetes raises dementia</text>
                    <text x="795" y="695" text-anchor="middle" fill="#fff" font-size="16">risk by roughly 50-100%</text>
                    <rect x="80" y="770" width="940" height="130" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="822" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">The brain has its own insulin signaling</text>
                    <text x="550" y="862" text-anchor="middle" fill="#fff" font-size="17">It is used in memory formation — and it can become resistant</text>
                    <rect x="150" y="940" width="800" height="110" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="988" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">Protecting your metabolism now protects</text>
                    <text x="550" y="1023" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">your memory decades from now</text>
                </svg>`,
                caption: "A hungry brain in a broken fuel system — the case for metabolic dementia risk"
            }
        },
        {
            type: "example",
            title: "TOFI: Thin Outside, Fat Inside",
            content: "Meet a composite of millions of real patients: a 45-year-old who runs a normal **BMI of 23**, wears the same jeans as in college, and assumes the metabolic epidemic is someone else's problem.\n\nThen the labs come back: triglycerides 180, HDL 38, fasting glucose 104. Three failed markers. Full metabolic syndrome — in a \"thin\" body.\n\nResearchers call this **TOFI: Thin Outside, Fat Inside**. In the UNC analysis, only about **1 in 3 normal-weight adults** was metabolically healthy — meaning roughly **two-thirds of normal-BMI adults are metabolically unhealthy** on at least one marker.\n\nThe culprit is **where** fat is stored, not how much shows:\n\n• **Subcutaneous fat** (under the skin) is relatively benign storage\n• **Visceral fat** (packed around the liver, pancreas, and intestines) is metabolically toxic — it pumps out inflammatory signals and free fatty acids straight into your organs\n\nA slim person can carry substantial visceral fat, especially with a sedentary life, poor sleep, and an ultra-processed diet. The scale and the mirror can't see it. **Only your labs can.**",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THIN OUTSIDE, FAT INSIDE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Normal weight does not mean metabolically healthy</text>
                    <rect x="80" y="170" width="450" height="420" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="305" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">WHAT THE MIRROR SEES</text>
                    <ellipse cx="305" cy="330" rx="55" ry="70" fill="rgba(16,185,129,0.25)" stroke="#10b981" stroke-width="2"/>
                    <rect x="270" y="400" width="70" height="130" rx="30" fill="rgba(16,185,129,0.25)" stroke="#10b981" stroke-width="2"/>
                    <text x="305" y="565" text-anchor="middle" fill="#fff" font-size="17">BMI 23 — looks lean</text>
                    <rect x="570" y="170" width="450" height="420" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="795" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">WHAT THE LABS SEE</text>
                    <text x="795" y="290" text-anchor="middle" fill="#fff" font-size="17">Triglycerides: 180 (high)</text>
                    <text x="795" y="330" text-anchor="middle" fill="#fff" font-size="17">HDL: 38 (low)</text>
                    <text x="795" y="370" text-anchor="middle" fill="#fff" font-size="17">Fasting glucose: 104 (high)</text>
                    <text x="795" y="425" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="18">3 failed markers =</text>
                    <text x="795" y="460" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="18">metabolic syndrome</text>
                    <text x="795" y="520" text-anchor="middle" fill="#888" font-size="15">Visceral fat wrapped around</text>
                    <text x="795" y="550" text-anchor="middle" fill="#888" font-size="15">liver, pancreas, intestines</text>
                    <rect x="80" y="640" width="450" height="200" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="305" y="695" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="19">SUBCUTANEOUS FAT</text>
                    <text x="305" y="740" text-anchor="middle" fill="#fff" font-size="16">Under the skin</text>
                    <text x="305" y="775" text-anchor="middle" fill="#888" font-size="15">Relatively safe storage</text>
                    <rect x="570" y="640" width="450" height="200" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="795" y="695" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="19">VISCERAL FAT</text>
                    <text x="795" y="740" text-anchor="middle" fill="#fff" font-size="16">Around your organs</text>
                    <text x="795" y="775" text-anchor="middle" fill="#888" font-size="15">Inflammatory, metabolically toxic</text>
                    <rect x="150" y="890" width="800" height="110" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="938" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="20">~2 of 3 normal-BMI adults fail a marker</text>
                    <text x="550" y="975" text-anchor="middle" fill="#888" font-size="16">The mirror can't see visceral fat — only labs can</text>
                </svg>`,
                caption: "TOFI — a lean body can hide organ-wrapping visceral fat and failed lab markers"
            }
        },
        {
            type: "concept",
            title: "Why You Can't Feel It Coming",
            content: "Here's the cruelest feature of metabolic dysfunction: it is **silent for years — often decades**.\n\nWhy? Because your body is brilliant at **compensating**:\n\n• When cells respond sluggishly to insulin, your pancreas simply **makes more** — blood sugar stays normal while the effort behind the scenes skyrockets\n• When blood vessels stiffen, your heart **pushes harder** — you feel nothing while pressure quietly climbs\n• When your liver accumulates fat, it has **no pain nerves** to complain with\n\nIt's like an iceberg. Above the waterline: you feel fine, maybe a little tired, maybe carrying \"a few extra pounds.\" Below the waterline: rising insulin, growing visceral fat, creeping inflammation, stiffening arteries.\n\nBy the time symptoms surface — a diabetes diagnosis, chest pain, a stroke — the process has usually been running **10 to 20 years**. For many people, the first \"symptom\" of heart disease is a **heart attack**.\n\nThis is why \"I feel fine\" is not a health strategy, and why the next card gives you something better: numbers.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE ICEBERG</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">What you feel vs what is happening</text>
                    <rect x="100" y="160" width="900" height="220" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="550" y="215" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="22">ABOVE THE WATERLINE</text>
                    <text x="550" y="265" text-anchor="middle" fill="#fff" font-size="18">You feel fine — maybe a little tired</text>
                    <text x="550" y="305" text-anchor="middle" fill="#fff" font-size="18">Maybe a few extra pounds — nothing alarming</text>
                    <text x="550" y="345" text-anchor="middle" fill="#888" font-size="16">No pain, no warning lights</text>
                    <line x1="60" y1="420" x2="1040" y2="420" stroke="#14b8a6" stroke-width="3" stroke-dasharray="12"/>
                    <text x="550" y="455" text-anchor="middle" fill="#14b8a6" font-size="17">— the waterline: where feeling stops and biology continues —</text>
                    <rect x="100" y="490" width="900" height="340" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="545" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">BELOW THE WATERLINE</text>
                    <text x="550" y="600" text-anchor="middle" fill="#fff" font-size="18">Insulin rising as the pancreas compensates</text>
                    <text x="550" y="640" text-anchor="middle" fill="#fff" font-size="18">Visceral fat growing around organs</text>
                    <text x="550" y="680" text-anchor="middle" fill="#fff" font-size="18">Inflammation creeping upward</text>
                    <text x="550" y="720" text-anchor="middle" fill="#fff" font-size="18">Arteries stiffening, liver quietly filling with fat</text>
                    <text x="550" y="775" text-anchor="middle" fill="#888" font-size="16">Running silently for 10-20 years</text>
                    <rect x="150" y="880" width="800" height="120" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="930" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="20">For many, the first symptom of heart</text>
                    <text x="550" y="968" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="20">disease is a heart attack</text>
                </svg>`,
                caption: "Metabolic dysfunction runs silently below the surface for a decade or more"
            }
        },
        {
            type: "application",
            title: "Know Your Numbers This Week",
            content: "You can't manage what you don't measure. This week, start building your metabolic dashboard:\n\n1. **Measure your waist** — tape at the belly button, relaxed, after exhaling. Under 40 in (men) / 35 in (women) is the target\n\n2. **Check your blood pressure** — free at most pharmacies, or a home cuff (~$30). You want under 130/85\n\n3. **Pull your last lab report** — find triglycerides, HDL, and fasting glucose. Most people have these from an old physical and never looked\n\n4. **Count your markers** — how many of the five do you pass? Be honest. This number is your baseline, not your verdict\n\n5. **Book a physical if your labs are over a year old** — and ask your clinician to include a metabolic panel. (This book informs, it doesn't diagnose — your clinician is your partner here.)\n\nWrite your five numbers down. By the end of this book, you'll know exactly which levers move each one.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">YOUR ACTION PLAN</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Build your metabolic dashboard this week</text>
                    <rect x="150" y="160" width="800" height="120" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="212" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="22">1.</text>
                    <text x="245" y="212" text-anchor="start" fill="#fff" font-size="19">Measure your waist at the belly button</text>
                    <text x="245" y="250" text-anchor="start" fill="#888" font-size="16">Target: under 40 in (men) / 35 in (women)</text>
                    <rect x="150" y="310" width="800" height="120" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="362" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="22">2.</text>
                    <text x="245" y="362" text-anchor="start" fill="#fff" font-size="19">Check your blood pressure</text>
                    <text x="245" y="400" text-anchor="start" fill="#888" font-size="16">Free at pharmacies — target under 130/85</text>
                    <rect x="150" y="460" width="800" height="120" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="512" text-anchor="start" fill="#10b981" font-weight="bold" font-size="22">3.</text>
                    <text x="245" y="512" text-anchor="start" fill="#fff" font-size="19">Pull your last lab report</text>
                    <text x="245" y="550" text-anchor="start" fill="#888" font-size="16">Find triglycerides, HDL, fasting glucose</text>
                    <rect x="150" y="610" width="800" height="120" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="662" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="22">4.</text>
                    <text x="245" y="662" text-anchor="start" fill="#fff" font-size="19">Count how many of the 5 markers you pass</text>
                    <text x="245" y="700" text-anchor="start" fill="#888" font-size="16">Your baseline — not your verdict</text>
                    <rect x="150" y="760" width="800" height="120" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="812" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="22">5.</text>
                    <text x="245" y="812" text-anchor="start" fill="#fff" font-size="19">Book a physical if labs are over a year old</text>
                    <text x="245" y="850" text-anchor="start" fill="#888" font-size="16">Ask for a metabolic panel — partner with your clinician</text>
                    <rect x="200" y="920" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="975" text-anchor="middle" fill="#ffd700" font-size="19">Write your five numbers down — that's your baseline</text>
                </svg>`,
                caption: "Five concrete steps to establish your metabolic baseline this week"
            }
        },
        {
            type: "quote",
            content: "The prevalence of metabolic health in American adults is alarmingly low, even in normal weight individuals.",
            author: "Joana Araújo, lead author of the 2019 UNC study",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">WISDOM</text>
                    <rect x="100" y="200" width="900" height="300" rx="20" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="160" y="280" text-anchor="start" fill="#fff" font-style="italic" font-size="23">"The prevalence of metabolic health in</text>
                    <text x="160" y="325" text-anchor="start" fill="#fff" font-style="italic" font-size="23">American adults is alarmingly low,</text>
                    <text x="160" y="370" text-anchor="start" fill="#fff" font-style="italic" font-size="23">even in normal weight individuals."</text>
                    <text x="940" y="445" text-anchor="end" fill="#8b5cf6" font-size="19">— Joana Araujo, UNC (2019)</text>
                    <rect x="150" y="580" width="800" height="200" rx="20" fill="rgba(255,215,0,0.08)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="645" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="20">Why this line matters</text>
                    <text x="550" y="695" text-anchor="middle" fill="#fff" font-size="17">The researcher who ran the numbers chose the</text>
                    <text x="550" y="730" text-anchor="middle" fill="#fff" font-size="17">word "alarming" — and aimed it at thin people too</text>
                    <rect x="250" y="840" width="600" height="90" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="895" text-anchor="middle" fill="#10b981" font-size="18">Alarm is useful only if it leads to action</text>
                </svg>`,
                caption: "A moment of reflection from the study's lead researcher"
            }
        },
        {
            type: "quiz",
            question: "A friend with a normal BMI of 22 says, 'I'm thin, so metabolic health isn't my problem.' Based on this lesson, what's the most accurate response?",
            options: [
                { text: "Correct — normal weight reliably indicates good metabolic health", correct: false },
                { text: "Only about 1 in 3 normal-BMI adults is metabolically healthy — visceral fat and labs, not the mirror, tell the truth", correct: true },
                { text: "Thin people are actually at higher metabolic risk than people with obesity", correct: false },
                { text: "BMI is meaningless, so weight has no relationship to metabolic health at all", correct: false }
            ],
            explanation: "This is TOFI — thin outside, fat inside. In the UNC analysis, only about a third of normal-weight adults passed all five markers, because visceral fat around the organs can accumulate invisibly in lean bodies. The last option overcorrects: BMI does correlate with metabolic risk on average (metabolic health was ~0.5% among adults with obesity) — it's just far from sufficient. Being thin lowers the odds of dysfunction; it doesn't rule it out. Labs do.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="140" width="800" height="200" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="200" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE TOFI QUESTION</text>
                    <text x="550" y="250" text-anchor="middle" fill="#fff" font-size="18">"I'm thin, so I don't need to worry"</text>
                    <text x="550" y="290" text-anchor="middle" fill="#888" font-size="16">Is the mirror a reliable metabolic test?</text>
                    <rect x="150" y="400" width="380" height="260" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="340" y="455" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">OUTSIDE</text>
                    <text x="340" y="510" text-anchor="middle" fill="#fff" font-size="17">BMI 22</text>
                    <text x="340" y="550" text-anchor="middle" fill="#fff" font-size="17">Looks lean</text>
                    <text x="340" y="590" text-anchor="middle" fill="#888" font-size="15">Mirror says: fine</text>
                    <rect x="570" y="400" width="380" height="260" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="760" y="455" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">INSIDE</text>
                    <text x="760" y="510" text-anchor="middle" fill="#fff" font-size="17">Visceral fat?</text>
                    <text x="760" y="550" text-anchor="middle" fill="#fff" font-size="17">Lab markers?</text>
                    <text x="760" y="590" text-anchor="middle" fill="#888" font-size="15">Mirror says: nothing</text>
                    <rect x="200" y="730" width="700" height="100" rx="20" fill="rgba(20,184,166,0.15)" stroke="#14b8a6" stroke-width="2"/>
                    <text x="550" y="775" text-anchor="middle" fill="#14b8a6" font-weight="bold" font-size="19">Hint: what fraction of normal-BMI adults</text>
                    <text x="550" y="810" text-anchor="middle" fill="#14b8a6" font-weight="bold" font-size="19">passed all five markers?</text>
                </svg>`,
                caption: "Test yourself on the thin-outside, fat-inside phenomenon"
            }
        },
        {
            type: "concept",
            title: "The Hopeful Part: This Is Largely Reversible",
            content: "If this lesson felt heavy, here's the payoff — and it's the entire premise of this book:\n\n**Metabolic dysfunction is one of the most reversible major health problems in medicine.**\n\nUnlike a genetic disease or an old injury, your metabolism responds to inputs — this week's inputs:\n\n• **Movement** changes how muscle pulls glucose from your blood within a single workout\n• **Strength training** rebuilds the muscle that acts as your body's biggest glucose sink\n• **Food quality, sleep, and stress** each move the five markers measurably in weeks to months\n• In the landmark **DiRECT trial**, roughly a third of type 2 diabetes patients put their disease into full **remission** at two years through weight loss alone — a disease once called irreversible\n\nEvery marker on your dashboard can move. People lower triglycerides by 30% in a month, drop blood pressure into a healthy range in a season, and pull fasting glucose back from the prediabetic edge.\n\nThe rest of this book is that roadmap: insulin, muscle, mitochondria, fitness, food, sleep, stress, and how each changes with age. You now know the stakes — next, you learn the machinery.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE ROAD BACK</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Metabolic dysfunction is largely reversible</text>
                    <rect x="80" y="180" width="290" height="140" rx="20" fill="rgba(239,68,68,0.12)" stroke="#ef4444" stroke-width="2"/>
                    <text x="225" y="235" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">WHERE YOU ARE</text>
                    <text x="225" y="280" text-anchor="middle" fill="#fff" font-size="16">Your 5-marker baseline</text>
                    <path d="M370 250 L430 250" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="430,250 418,242 418,258" fill="#14b8a6"/>
                    <rect x="430" y="180" width="290" height="140" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="575" y="235" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">THE LEVERS</text>
                    <text x="575" y="280" text-anchor="middle" fill="#fff" font-size="16">Move, lift, eat, sleep</text>
                    <path d="M720 250 L780 250" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="780,250 768,242 768,258" fill="#14b8a6"/>
                    <rect x="780" y="180" width="240" height="140" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="900" y="235" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">REVERSAL</text>
                    <text x="900" y="280" text-anchor="middle" fill="#fff" font-size="16">Markers normalize</text>
                    <rect x="100" y="400" width="900" height="300" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="455" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">PROOF IT MOVES</text>
                    <text x="550" y="510" text-anchor="middle" fill="#fff" font-size="17">One workout changes how muscle pulls in glucose</text>
                    <text x="550" y="550" text-anchor="middle" fill="#fff" font-size="17">Triglycerides can fall ~30% in a month</text>
                    <text x="550" y="590" text-anchor="middle" fill="#fff" font-size="17">Blood pressure can normalize in a season</text>
                    <text x="550" y="630" text-anchor="middle" fill="#fff" font-size="17">DiRECT trial: ~1/3 of type 2 diabetes in remission at 2 yrs</text>
                    <text x="550" y="670" text-anchor="middle" fill="#888" font-size="15">A disease once called irreversible</text>
                    <rect x="100" y="760" width="900" height="180" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="820" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="21">THIS BOOK IS THE ROADMAP</text>
                    <text x="550" y="870" text-anchor="middle" fill="#fff" font-size="17">Insulin, muscle, mitochondria, fitness,</text>
                    <text x="550" y="905" text-anchor="middle" fill="#fff" font-size="17">food, sleep, stress — and how each changes with age</text>
                </svg>`,
                caption: "From baseline to reversal — the roadmap the rest of this book follows"
            }
        }
    ]
},
{
    id: 2,
    title: "Insulin Resistance: The Root of the Tree",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "The Ten-Year Warning You Never Hear",
            content: "Imagine a smoke detector that stays silent while the fire smolders in your walls for a decade — then finally beeps when the roof is already burning.\n\nThat's how most people discover **insulin resistance**. By the time a doctor says 'your blood sugar is high,' the underlying process has usually been running for **10 or more years**. The alarm didn't fail — we were just listening to the wrong sensor.\n\nHere's what makes this lesson personal: insulin resistance is the root of the disease tree you met in Lesson 1 — the common soil under type 2 diabetes, heart disease, fatty liver, and more. Somewhere between a quarter and half of adults are somewhere along this path right now, and most have flawless fasting glucose.\n\nIn the next few minutes you'll learn what insulin actually does, exactly how resistance develops, which four lab markers reveal it a decade early — and the trial that proved even full-blown type 2 diabetes can be pushed into remission.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE SILENT DECADE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Insulin resistance precedes diabetes by 10+ years</text>
                    <rect x="80" y="200" width="940" height="130" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="252" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">Year 0: cells begin ignoring insulin</text>
                    <text x="550" y="295" text-anchor="middle" fill="#888" font-size="16">You feel nothing — fasting glucose looks perfect</text>
                    <path d="M550 330 L550 380" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,380 542,368 558,368" fill="#14b8a6"/>
                    <rect x="80" y="380" width="940" height="130" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="432" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">Years 1-10: pancreas compensates harder</text>
                    <text x="550" y="475" text-anchor="middle" fill="#888" font-size="16">Insulin climbs quietly — the fire smolders in the walls</text>
                    <path d="M550 510 L550 560" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,560 542,548 558,548" fill="#14b8a6"/>
                    <rect x="80" y="560" width="940" height="130" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="612" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="21">Year 10+: glucose finally rises</text>
                    <text x="550" y="655" text-anchor="middle" fill="#888" font-size="16">Now the standard test beeps — the roof is burning</text>
                    <rect x="150" y="760" width="800" height="130" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="812" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">This lesson: read the right sensor</text>
                    <text x="550" y="852" text-anchor="middle" fill="#888" font-size="16">Four markers catch it a decade early</text>
                </svg>`,
                caption: "The smoke detector that only beeps when the roof is burning"
            }
        },
        {
            type: "concept",
            title: "Insulin: Your Body's Storage Hormone",
            content: "Before you can understand resistance, meet the hormone itself.\n\n**Insulin** is made by the beta cells of your **pancreas** and released whenever blood glucose rises — mostly after meals. Its core job: get fuel **out of your blood** and **into storage**. Think of it as a key that unlocks your cells:\n\n• In **muscle**, insulin opens glucose doorways (transporters called GLUT4) so muscle can burn or bank the sugar — skeletal muscle handles about **80% of insulin-stimulated glucose disposal**\n• In the **liver**, insulin says 'stop releasing glucose — we have plenty coming in'\n• In **fat tissue**, insulin says 'store this energy, and don't release fat while we're storing'\n\nNotice the theme: insulin is the **storage signal**. When insulin is high, your body is in save mode — building, storing, holding onto fat. When insulin falls between meals, you flip into spend mode and burn stored fuel.\n\nA healthy system uses a whisper of insulin to do all this. Blood sugar rises after a meal, insulin ushers it into cells, both fall back to baseline within a couple of hours. Elegant. Efficient.\n\nUntil the cells stop answering the door.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE STORAGE HORMONE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Insulin is the key that moves fuel into cells</text>
                    <rect x="350" y="160" width="400" height="130" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="212" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="21">PANCREAS</text>
                    <text x="550" y="252" text-anchor="middle" fill="#fff" font-size="16">Releases insulin as glucose rises</text>
                    <path d="M300 290 L200 380" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="200,380 206,367 216,378" fill="#14b8a6"/>
                    <path d="M550 290 L550 380" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,380 542,368 558,368" fill="#14b8a6"/>
                    <path d="M800 290 L900 380" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="900,380 884,378 894,367" fill="#14b8a6"/>
                    <rect x="60" y="390" width="310" height="230" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="215" y="445" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">MUSCLE</text>
                    <text x="215" y="495" text-anchor="middle" fill="#fff" font-size="16">Opens GLUT4 doors,</text>
                    <text x="215" y="530" text-anchor="middle" fill="#fff" font-size="16">pulls in glucose</text>
                    <text x="215" y="575" text-anchor="middle" fill="#888" font-size="15">~80% of glucose disposal</text>
                    <rect x="395" y="390" width="310" height="230" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="445" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">LIVER</text>
                    <text x="550" y="495" text-anchor="middle" fill="#fff" font-size="16">"Stop releasing glucose —</text>
                    <text x="550" y="530" text-anchor="middle" fill="#fff" font-size="16">plenty is coming in"</text>
                    <text x="550" y="575" text-anchor="middle" fill="#888" font-size="15">Pauses glucose output</text>
                    <rect x="730" y="390" width="310" height="230" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="885" y="445" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="20">FAT TISSUE</text>
                    <text x="885" y="495" text-anchor="middle" fill="#fff" font-size="16">"Store this energy,</text>
                    <text x="885" y="530" text-anchor="middle" fill="#fff" font-size="16">release nothing"</text>
                    <text x="885" y="575" text-anchor="middle" fill="#888" font-size="15">Save mode engaged</text>
                    <rect x="100" y="690" width="440" height="180" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="320" y="745" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="19">INSULIN HIGH</text>
                    <text x="320" y="790" text-anchor="middle" fill="#fff" font-size="16">Save mode: build + store</text>
                    <text x="320" y="825" text-anchor="middle" fill="#888" font-size="15">Fat burning paused</text>
                    <rect x="570" y="690" width="440" height="180" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="790" y="745" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">INSULIN LOW</text>
                    <text x="790" y="790" text-anchor="middle" fill="#fff" font-size="16">Spend mode: burn stored fuel</text>
                    <text x="790" y="825" text-anchor="middle" fill="#888" font-size="15">Between meals + overnight</text>
                    <rect x="200" y="930" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="985" text-anchor="middle" fill="#ffd700" font-size="19">A healthy system needs only a whisper of insulin</text>
                </svg>`,
                caption: "Insulin's three commands: muscle stores, liver pauses, fat tissue saves"
            }
        },
        {
            type: "concept",
            title: "When Cells Stop Listening",
            content: "**Insulin resistance** is exactly what it sounds like: your cells gradually stop responding to insulin's signal. The key still fits the lock — but the lock is getting rusty.\n\nHere's the vicious cycle, step by step:\n\n1. Muscle, liver, and fat cells respond **sluggishly** to insulin — glucose lingers in the blood after meals\n\n2. Your pancreas, sensing lingering glucose, does the only thing it can: **pumps out more insulin**. Where a whisper once worked, now it has to shout\n\n3. The flood of insulin forces glucose into cells, so blood sugar looks **normal** — but you now live in a state of chronically high insulin: **hyperinsulinemia**\n\n4. High insulin itself makes things worse — it locks your body in **storage mode**, promotes fat accumulation (especially visceral), and further desensitizes cells\n\n5. After years of shouting, the pancreatic beta cells begin to **fail**. Insulin output can no longer keep up, glucose finally breaks upward — first **prediabetes**, then **type 2 diabetes**\n\nThe crucial insight: type 2 diabetes isn't a disease that strikes suddenly. It's the **final chapter** of a story that hyperinsulinemia has been writing for a decade — often the earliest sign that anything is wrong.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE VICIOUS CYCLE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">From rusty locks to a failing pancreas</text>
                    <rect x="150" y="160" width="800" height="120" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="212" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="21">1.</text>
                    <text x="245" y="212" text-anchor="start" fill="#fff" font-size="18">Cells respond sluggishly to insulin</text>
                    <text x="245" y="250" text-anchor="start" fill="#888" font-size="15">Glucose lingers in the blood after meals</text>
                    <rect x="150" y="310" width="800" height="120" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="362" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="21">2.</text>
                    <text x="245" y="362" text-anchor="start" fill="#fff" font-size="18">Pancreas pumps out MORE insulin</text>
                    <text x="245" y="400" text-anchor="start" fill="#888" font-size="15">Where a whisper worked, now it shouts</text>
                    <rect x="150" y="460" width="800" height="120" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="512" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="21">3.</text>
                    <text x="245" y="512" text-anchor="start" fill="#fff" font-size="18">Hyperinsulinemia: glucose looks normal</text>
                    <text x="245" y="550" text-anchor="start" fill="#888" font-size="15">The dysfunction hides behind a normal lab value</text>
                    <rect x="150" y="610" width="800" height="120" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="662" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="21">4.</text>
                    <text x="245" y="662" text-anchor="start" fill="#fff" font-size="18">High insulin worsens resistance + stores fat</text>
                    <text x="245" y="700" text-anchor="start" fill="#888" font-size="15">Storage mode locked on — visceral fat grows</text>
                    <rect x="150" y="760" width="800" height="120" rx="20" fill="rgba(239,68,68,0.12)" stroke="#ef4444" stroke-width="2"/>
                    <text x="200" y="812" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="21">5.</text>
                    <text x="245" y="812" text-anchor="start" fill="#fff" font-size="18">Beta cells fail — glucose finally rises</text>
                    <text x="245" y="850" text-anchor="start" fill="#888" font-size="15">Prediabetes, then type 2 diabetes</text>
                    <rect x="200" y="930" width="700" height="100" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="975" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="19">Type 2 diabetes is the FINAL chapter —</text>
                    <text x="550" y="1010" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="19">hyperinsulinemia writes the first ten</text>
                </svg>`,
                caption: "Five steps from sluggish cells to type 2 diabetes"
            }
        },
        {
            type: "visual",
            title: "The Hidden Decade: Why Fasting Glucose Misses It",
            content: "This chart is the most important picture in metabolic health. For years, rising **insulin** holds **glucose** artificially normal — so the standard fasting glucose test says 'all clear' while resistance deepens. Pathologist **Joseph Kraft**, who ran insulin-response assays on over 14,000 patients, found that a large share of people with completely normal glucose tolerance had wildly abnormal insulin patterns — what he called **'diabetes in situ'**: diabetes already in place, waiting to be unmasked.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE HIDDEN DECADE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Insulin climbs for years before glucose moves</text>
                    <line x1="120" y1="640" x2="1000" y2="640" stroke="#888" stroke-width="2"/>
                    <line x1="120" y1="640" x2="120" y2="160" stroke="#888" stroke-width="2"/>
                    <text x="560" y="690" text-anchor="middle" fill="#888" font-size="17">Time (years) — arrow points toward diagnosis</text>
                    <path d="M120 560 C300 520 520 420 700 300 C780 250 880 210 980 190" stroke="#ef4444" stroke-width="5" fill="none"/>
                    <text x="820" y="165" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">INSULIN (climbing early)</text>
                    <path d="M120 600 L700 595 C800 590 900 480 980 380" stroke="#3b82f6" stroke-width="5" fill="none"/>
                    <text x="330" y="575" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="20">GLUCOSE (flat for years)</text>
                    <line x1="700" y1="640" x2="700" y2="200" stroke="#ffd700" stroke-width="2" stroke-dasharray="8" opacity="0.6"/>
                    <text x="700" y="180" text-anchor="middle" fill="#ffd700" font-size="16">glucose finally breaks upward</text>
                    <rect x="120" y="730" width="430" height="180" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="335" y="785" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="19">WHAT DOCTORS TEST</text>
                    <text x="335" y="830" text-anchor="middle" fill="#fff" font-size="16">Fasting glucose — the blue line</text>
                    <text x="335" y="865" text-anchor="middle" fill="#888" font-size="15">Normal until the last act</text>
                    <rect x="580" y="730" width="430" height="180" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="795" y="785" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">WHAT REVEALS IT EARLY</text>
                    <text x="795" y="830" text-anchor="middle" fill="#fff" font-size="16">Fasting insulin — the red line</text>
                    <text x="795" y="865" text-anchor="middle" fill="#888" font-size="15">Abnormal a decade sooner</text>
                    <rect x="150" y="950" width="800" height="100" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="995" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="19">Kraft's 14,000+ assays: normal glucose can</text>
                    <text x="550" y="1030" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="19">hide "diabetes in situ" for years</text>
                </svg>`,
                caption: "Insulin rises for a decade while glucose stays flat — the standard test watches the wrong line"
            }
        },
        {
            type: "quiz",
            question: "Your annual physical shows fasting glucose of 92 mg/dL (normal). Why can this NOT rule out insulin resistance?",
            options: [
                { text: "Because glucose tests are usually inaccurate by 20 or more points", correct: false },
                { text: "Because a compensating pancreas can hold glucose normal for years by secreting ever more insulin", correct: true },
                { text: "Because insulin resistance only shows up in post-meal glucose, never fasting values", correct: false },
                { text: "Because fasting glucose only matters in people who are overweight", correct: false }
            ],
            explanation: "During the hidden decade, the pancreas compensates for resistant cells by shouting — secreting more and more insulin. That flood keeps forcing glucose into cells, so fasting glucose reads normal while hyperinsulinemia deepens. This is what Kraft's insulin assays exposed: normal glucose, wildly abnormal insulin ('diabetes in situ'). The third option holds a grain of truth — post-meal glucose often deteriorates before fasting glucose — but insulin, not glucose, is the earliest signal, which is why a normal fasting glucose alone proves little.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="140" width="800" height="200" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="200" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE NORMAL-GLUCOSE TRAP</text>
                    <text x="550" y="250" text-anchor="middle" fill="#fff" font-size="18">Fasting glucose: 92 mg/dL — "all clear"</text>
                    <text x="550" y="290" text-anchor="middle" fill="#888" font-size="16">Can resistance still be hiding underneath?</text>
                    <rect x="150" y="400" width="380" height="240" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="340" y="455" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="20">THE TEST SEES</text>
                    <text x="340" y="510" text-anchor="middle" fill="#fff" font-size="17">Glucose: 92</text>
                    <text x="340" y="550" text-anchor="middle" fill="#fff" font-size="17">Verdict: normal</text>
                    <text x="340" y="595" text-anchor="middle" fill="#888" font-size="15">One line of the chart</text>
                    <rect x="570" y="400" width="380" height="240" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="760" y="455" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">THE TEST MISSES</text>
                    <text x="760" y="510" text-anchor="middle" fill="#fff" font-size="17">Insulin: how hard is the</text>
                    <text x="760" y="550" text-anchor="middle" fill="#fff" font-size="17">pancreas working?</text>
                    <text x="760" y="595" text-anchor="middle" fill="#888" font-size="15">The line that moves first</text>
                    <rect x="200" y="710" width="700" height="100" rx="20" fill="rgba(20,184,166,0.15)" stroke="#14b8a6" stroke-width="2"/>
                    <text x="550" y="755" text-anchor="middle" fill="#14b8a6" font-weight="bold" font-size="19">Hint: think about WHO is holding</text>
                    <text x="550" y="790" text-anchor="middle" fill="#14b8a6" font-weight="bold" font-size="19">glucose down — and at what cost</text>
                </svg>`,
                caption: "Why a normal fasting glucose can't rule out insulin resistance"
            }
        },
        {
            type: "concept",
            title: "The Drivers: Visceral Fat, Ectopic Fat, and Inflammation",
            content: "What makes cells stop listening in the first place? Three interlocking drivers:\n\n**1. Visceral fat.** When subcutaneous storage overflows — or cortisol from chronic stress steers fat inward — fat accumulates around your organs. Visceral fat isn't inert; it behaves like a rogue endocrine organ, releasing **free fatty acids** and inflammatory signals directly into the liver's blood supply.\n\n**2. Ectopic fat.** Worse still, lipids infiltrate tissues never meant to store them — **liver cells** and **muscle fibers**. These intracellular fat droplets (and their byproducts like diacylglycerols and ceramides) physically **jam the insulin signaling cascade** inside the cell. A fatty liver keeps releasing glucose when it shouldn't; fatty muscle stops absorbing it when it should.\n\n**3. Chronic inflammation.** Overstuffed fat tissue attracts immune cells that release **inflammatory cytokines** (like TNF-alpha and IL-6). These directly interfere with insulin receptor signaling — inflammation and insulin resistance feed each other in a loop.\n\nNotice what this means: insulin resistance isn't caused by sugar alone, or fat alone, or stress alone. It's a **storage-overflow problem** — too much energy in, too little burned, spilling into the wrong compartments. That framing tells you exactly where the exits are.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE THREE DRIVERS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Why cells stop answering the door</text>
                    <rect x="80" y="170" width="300" height="280" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="230" y="225" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">VISCERAL FAT</text>
                    <text x="230" y="275" text-anchor="middle" fill="#fff" font-size="16">Fat around organs</text>
                    <text x="230" y="310" text-anchor="middle" fill="#fff" font-size="16">acts like a rogue</text>
                    <text x="230" y="345" text-anchor="middle" fill="#fff" font-size="16">endocrine organ</text>
                    <text x="230" y="395" text-anchor="middle" fill="#888" font-size="15">Free fatty acids flow</text>
                    <text x="230" y="425" text-anchor="middle" fill="#888" font-size="15">straight to the liver</text>
                    <rect x="400" y="170" width="300" height="280" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="225" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">ECTOPIC FAT</text>
                    <text x="550" y="275" text-anchor="middle" fill="#fff" font-size="16">Lipid droplets inside</text>
                    <text x="550" y="310" text-anchor="middle" fill="#fff" font-size="16">liver + muscle cells</text>
                    <text x="550" y="345" text-anchor="middle" fill="#fff" font-size="16">jam insulin signaling</text>
                    <text x="550" y="395" text-anchor="middle" fill="#888" font-size="15">Fatty liver leaks glucose,</text>
                    <text x="550" y="425" text-anchor="middle" fill="#888" font-size="15">fatty muscle refuses it</text>
                    <rect x="720" y="170" width="300" height="280" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="870" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">INFLAMMATION</text>
                    <text x="870" y="275" text-anchor="middle" fill="#fff" font-size="16">Cytokines from immune</text>
                    <text x="870" y="310" text-anchor="middle" fill="#fff" font-size="16">cells (TNF-alpha, IL-6)</text>
                    <text x="870" y="345" text-anchor="middle" fill="#fff" font-size="16">block insulin receptors</text>
                    <text x="870" y="395" text-anchor="middle" fill="#888" font-size="15">Feeds resistance in</text>
                    <text x="870" y="425" text-anchor="middle" fill="#888" font-size="15">a two-way loop</text>
                    <line x1="230" y1="450" x2="550" y2="620" stroke="#ffd700" stroke-width="2" stroke-dasharray="6" opacity="0.5"/>
                    <line x1="550" y1="450" x2="550" y2="620" stroke="#ffd700" stroke-width="2" stroke-dasharray="6" opacity="0.5"/>
                    <line x1="870" y1="450" x2="550" y2="620" stroke="#ffd700" stroke-width="2" stroke-dasharray="6" opacity="0.5"/>
                    <rect x="250" y="620" width="600" height="150" rx="25" fill="rgba(255,215,0,0.12)" stroke="#ffd700" stroke-width="3"/>
                    <text x="550" y="680" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="24">INSULIN RESISTANCE</text>
                    <text x="550" y="725" text-anchor="middle" fill="#fff" font-size="18">A storage-overflow problem</text>
                    <rect x="150" y="840" width="800" height="130" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="892" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">The overflow framing shows the exits:</text>
                    <text x="550" y="932" text-anchor="middle" fill="#fff" font-size="17">burn more (move + muscle), overflow less (diet + sleep)</text>
                </svg>`,
                caption: "Visceral fat, ectopic fat, and inflammation converge on the insulin receptor"
            }
        },
        {
            type: "concept",
            title: "How Insulin Resistance Shows Up Differently With Age",
            content: "Insulin resistance isn't one-size-fits-all — it wears different disguises across the decades:\n\n**In your 20s-30s**, it often hides behind youth. Muscle mass and activity keep glucose disposal strong, so early resistance shows up subtly: energy crashes after carb-heavy meals, stubborn belly fat, creeping triglycerides.\n\n**In your 40s-50s**, the disguise slips. Adults lose roughly **3-8% of muscle per decade after 30** — and since skeletal muscle handles about **80% of insulin-stimulated glucose disposal**, shrinking muscle means a shrinking glucose sink. For women, **menopause** is a metabolic inflection point: as estrogen falls, fat storage shifts toward the **visceral** pattern, and the risk of metabolic syndrome roughly **doubles across the transition**. Men's gradual testosterone decline quietly erodes muscle too.\n\n**In your 60s and beyond**, sarcopenia accelerates and **anabolic resistance** appears — aging muscle responds more weakly to protein and training, so it takes more stimulus to maintain the sink.\n\nThe takeaway isn't doom — it's targeting. The older you get, the more your insulin sensitivity depends on one thing you can directly build: **muscle**. That's why resistance training moves from 'nice to have' to 'metabolic medicine' with every passing decade.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">RESISTANCE ACROSS AGES</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Same disease, different disguises</text>
                    <rect x="100" y="170" width="900" height="180" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="160" y="225" text-anchor="start" fill="#10b981" font-weight="bold" font-size="21">20s-30s: HIDDEN BY YOUTH</text>
                    <text x="160" y="270" text-anchor="start" fill="#fff" font-size="17">Muscle masks it — watch for carb crashes,</text>
                    <text x="160" y="305" text-anchor="start" fill="#fff" font-size="17">belly fat, creeping triglycerides</text>
                    <rect x="100" y="380" width="900" height="220" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="160" y="435" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="21">40s-50s: THE DISGUISE SLIPS</text>
                    <text x="160" y="480" text-anchor="start" fill="#fff" font-size="17">Muscle falls 3-8% per decade — the glucose sink shrinks</text>
                    <text x="160" y="515" text-anchor="start" fill="#fff" font-size="17">Menopause shifts fat visceral; metabolic syndrome</text>
                    <text x="160" y="550" text-anchor="start" fill="#fff" font-size="17">risk roughly doubles across the transition</text>
                    <rect x="100" y="630" width="900" height="180" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="160" y="685" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="21">60s+: SARCOPENIA + ANABOLIC RESISTANCE</text>
                    <text x="160" y="730" text-anchor="start" fill="#fff" font-size="17">Muscle loss accelerates; muscle responds less to</text>
                    <text x="160" y="765" text-anchor="start" fill="#fff" font-size="17">protein and training — more stimulus needed</text>
                    <rect x="150" y="870" width="800" height="130" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="922" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">Every decade, insulin sensitivity depends</text>
                    <text x="550" y="962" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">more on the muscle you build and keep</text>
                </svg>`,
                caption: "How insulin resistance presents in your 30s, 50s, and 70s — and why muscle matters more each decade"
            }
        },
        {
            type: "visual",
            title: "Four Numbers That Tell the Truth",
            content: "You don't need a research lab to catch insulin resistance early. Four checkable markers — two of which are probably already in your lab history — reveal what fasting glucose hides. **Fasting insulin** is the most direct early-warning signal; **HOMA-IR** combines glucose and insulin into one resistance score; the **triglyceride:HDL ratio** is a free proxy hiding in every standard lipid panel; and **HbA1c** shows your 3-month glucose average. Ask your clinician to add fasting insulin — it's a cheap test that's rarely ordered unless you request it.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">YOUR EARLY-WARNING PANEL</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Four markers that catch what glucose hides</text>
                    <rect x="80" y="170" width="440" height="300" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="300" y="225" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">FASTING INSULIN</text>
                    <text x="300" y="275" text-anchor="middle" fill="#fff" font-size="17">The most direct early signal</text>
                    <text x="300" y="320" text-anchor="middle" fill="#fff" font-size="17">Single-digit values (uIU/mL)</text>
                    <text x="300" y="355" text-anchor="middle" fill="#fff" font-size="17">are generally favorable</text>
                    <text x="300" y="405" text-anchor="middle" fill="#888" font-size="15">Cheap — but you usually</text>
                    <text x="300" y="435" text-anchor="middle" fill="#888" font-size="15">have to ASK for it</text>
                    <rect x="580" y="170" width="440" height="300" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="800" y="225" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="21">HOMA-IR</text>
                    <text x="800" y="275" text-anchor="middle" fill="#fff" font-size="17">Glucose x insulin / 405</text>
                    <text x="800" y="320" text-anchor="middle" fill="#fff" font-size="17">One number for resistance</text>
                    <text x="800" y="355" text-anchor="middle" fill="#fff" font-size="17">Under ~2 is reassuring</text>
                    <text x="800" y="405" text-anchor="middle" fill="#888" font-size="15">Computed free from two</text>
                    <text x="800" y="435" text-anchor="middle" fill="#888" font-size="15">labs you may already have</text>
                    <rect x="80" y="500" width="440" height="300" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="300" y="555" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">TRIG : HDL RATIO</text>
                    <text x="300" y="605" text-anchor="middle" fill="#fff" font-size="17">Free proxy in every lipid panel</text>
                    <text x="300" y="650" text-anchor="middle" fill="#fff" font-size="17">Under ~1.5 is excellent</text>
                    <text x="300" y="685" text-anchor="middle" fill="#fff" font-size="17">Over ~3 is a red flag</text>
                    <text x="300" y="735" text-anchor="middle" fill="#888" font-size="15">High trigs + low HDL is the</text>
                    <text x="300" y="765" text-anchor="middle" fill="#888" font-size="15">classic resistance signature</text>
                    <rect x="580" y="500" width="440" height="300" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="800" y="555" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">HbA1c</text>
                    <text x="800" y="605" text-anchor="middle" fill="#fff" font-size="17">3-month glucose average</text>
                    <text x="800" y="650" text-anchor="middle" fill="#fff" font-size="17">Under 5.7% = normal range</text>
                    <text x="800" y="685" text-anchor="middle" fill="#fff" font-size="17">5.7-6.4% = prediabetes</text>
                    <text x="800" y="735" text-anchor="middle" fill="#888" font-size="15">A later signal than insulin,</text>
                    <text x="800" y="765" text-anchor="middle" fill="#888" font-size="15">but tracks the trend</text>
                    <rect x="150" y="860" width="800" height="130" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="912" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="20">Interpret WITH your clinician</text>
                    <text x="550" y="952" text-anchor="middle" fill="#fff" font-size="17">These are conversation starters, not diagnoses</text>
                </svg>`,
                caption: "Fasting insulin, HOMA-IR, triglyceride:HDL ratio, and HbA1c — the panel that sees the hidden decade"
            }
        },
        {
            type: "example",
            title: "The DiRECT Trial: Diabetes in Reverse",
            content: "For decades, type 2 diabetes was described as 'chronic and progressive' — a one-way street. Then came **DiRECT**.\n\nThe **Diabetes Remission Clinical Trial**, run through ordinary UK primary-care practices, took roughly **300 adults** with type 2 diabetes and randomized half to an intensive weight-management program: about 12 weeks of a **~850-calorie formula diet**, followed by structured food reintroduction and long-term support. No exotic drugs. No surgery.\n\nThe results rewrote textbooks:\n\n• At **1 year**, nearly **half** the intervention group was in **remission** — non-diabetic blood sugar with no diabetes medications\n• At **2 years**, **36%** remained in remission\n• Weight loss was the dose: among participants who maintained **10+ kg of weight loss**, remission held for about **8 in 10**\n• Remission tracked with recovering **beta-cell function** — the pancreas, freed from fat overload, began working again\n\nThe mechanism matters as much as the numbers: losing visceral and liver fat **drained the overflow** that drives resistance, exactly as the storage-overflow model predicts.\n\nOne caution: DiRECT participants averaged under 6 years since diagnosis — earlier action means better odds. The tree is easiest to heal at the root, before the branches harden.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE DiRECT TRIAL</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Type 2 diabetes remission in primary care</text>
                    <rect x="100" y="170" width="900" height="130" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="222" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">THE INTERVENTION</text>
                    <text x="550" y="262" text-anchor="middle" fill="#fff" font-size="17">~850 kcal/day formula diet ~12 weeks, then structured support</text>
                    <rect x="100" y="340" width="280" height="330" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="240" y="395" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">AT 1 YEAR</text>
                    <text x="240" y="475" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="44">~46%</text>
                    <text x="240" y="540" text-anchor="middle" fill="#fff" font-size="16">in remission —</text>
                    <text x="240" y="575" text-anchor="middle" fill="#fff" font-size="16">no diabetes meds</text>
                    <rect x="410" y="340" width="280" height="330" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="395" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">AT 2 YEARS</text>
                    <text x="550" y="475" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="44">36%</text>
                    <text x="550" y="540" text-anchor="middle" fill="#fff" font-size="16">still in remission</text>
                    <text x="550" y="575" text-anchor="middle" fill="#fff" font-size="16">two years on</text>
                    <rect x="720" y="340" width="280" height="330" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="860" y="395" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="20">KEPT 10+ KG OFF</text>
                    <text x="860" y="475" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="44">~8/10</text>
                    <text x="860" y="540" text-anchor="middle" fill="#fff" font-size="16">of them stayed</text>
                    <text x="860" y="575" text-anchor="middle" fill="#fff" font-size="16">in remission</text>
                    <rect x="100" y="710" width="900" height="140" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="762" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">THE MECHANISM</text>
                    <text x="550" y="805" text-anchor="middle" fill="#fff" font-size="17">Draining liver + visceral fat let beta cells recover</text>
                    <rect x="150" y="890" width="800" height="110" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="938" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="19">Caution: earlier action = better odds</text>
                    <text x="550" y="975" text-anchor="middle" fill="#888" font-size="16">Participants averaged under 6 years since diagnosis</text>
                </svg>`,
                caption: "DiRECT — 36% remission at 2 years, ~8 in 10 among those keeping 10+ kg off"
            }
        },
        {
            type: "example",
            title: "The Other Lever: Muscle That Eats Glucose",
            content: "Weight loss isn't the only proven reversal path — **movement changes insulin sensitivity on its own**, sometimes within hours.\n\nConsider what the exercise research shows:\n\n• A **single bout of exercise** increases muscle glucose uptake for 24-48 hours — working muscle can pull in glucose through a pathway that **doesn't even require insulin** (contraction moves GLUT4 transporters to the cell surface directly)\n\n• **Strength training** builds the glucose sink itself. More muscle means more storage capacity for every gram of carbohydrate you eat — and meta-analyses link ~2 sessions per week to **10-17% lower all-cause mortality**\n\n• A 2025 **Frontiers in Physiology** review found that **combined aerobic + resistance training** produces the best glucose control in older adults — better than either alone\n\n• Even trivial doses count: a 2022 meta-analysis by **Buffey and colleagues** (Sports Medicine) found that just **2-5 minutes of light walking after a meal** significantly blunts the post-meal glucose spike, because contracting muscle soaks up glucose exactly when it floods in\n\nThis is why the exercise lessons later in this book are really insulin lessons in disguise. Every workout is a direct message to your cells: **start listening again**.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">MUSCLE EATS GLUCOSE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Exercise restores insulin sensitivity directly</text>
                    <rect x="80" y="170" width="440" height="220" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="300" y="225" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">ONE WORKOUT</text>
                    <text x="300" y="275" text-anchor="middle" fill="#fff" font-size="16">Boosts muscle glucose uptake</text>
                    <text x="300" y="310" text-anchor="middle" fill="#fff" font-size="16">for 24-48 hours — no insulin</text>
                    <text x="300" y="345" text-anchor="middle" fill="#fff" font-size="16">required for the contraction path</text>
                    <rect x="580" y="170" width="440" height="220" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="800" y="225" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">STRENGTH 2x/WEEK</text>
                    <text x="800" y="275" text-anchor="middle" fill="#fff" font-size="16">Builds the glucose sink itself —</text>
                    <text x="800" y="310" text-anchor="middle" fill="#fff" font-size="16">linked to 10-17% lower</text>
                    <text x="800" y="345" text-anchor="middle" fill="#fff" font-size="16">all-cause mortality</text>
                    <rect x="80" y="420" width="440" height="220" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="300" y="475" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">COMBO WINS</text>
                    <text x="300" y="525" text-anchor="middle" fill="#fff" font-size="16">Aerobic + resistance together:</text>
                    <text x="300" y="560" text-anchor="middle" fill="#fff" font-size="16">best glucose control in older</text>
                    <text x="300" y="595" text-anchor="middle" fill="#fff" font-size="16">adults (Frontiers, 2025)</text>
                    <rect x="580" y="420" width="440" height="220" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="800" y="475" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">2-5 MIN WALKS</text>
                    <text x="800" y="525" text-anchor="middle" fill="#fff" font-size="16">Light walking after meals blunts</text>
                    <text x="800" y="560" text-anchor="middle" fill="#fff" font-size="16">glucose spikes significantly</text>
                    <text x="800" y="595" text-anchor="middle" fill="#fff" font-size="16">(Buffey et al. 2022)</text>
                    <rect x="150" y="700" width="800" height="160" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="758" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="21">Every workout is a message to your cells:</text>
                    <text x="550" y="800" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="21">start listening again</text>
                    <rect x="250" y="910" width="600" height="90" rx="20" fill="rgba(20,184,166,0.15)" stroke="#14b8a6" stroke-width="2"/>
                    <text x="550" y="965" text-anchor="middle" fill="#14b8a6" font-size="18">Contraction opens glucose doors insulin can't</text>
                </svg>`,
                caption: "Four evidence-backed ways movement restores insulin sensitivity"
            }
        },
        {
            type: "application",
            title: "Your Insulin-Sensitivity Starter Plan",
            content: "Insulin resistance responds to this week's behavior. Start here:\n\n1. **Request the right labs** — at your next blood draw, ask your clinician to add **fasting insulin** alongside glucose and HbA1c. It's inexpensive and rarely included by default\n\n2. **Calculate your TG:HDL ratio today** — divide triglycerides by HDL from your last lipid panel. Under ~1.5 is excellent; over ~3 deserves a conversation with your doctor\n\n3. **Walk after your biggest meal** — just 2-5 minutes of easy walking blunts the glucose spike. Attach it to dinner every day this week\n\n4. **Schedule two strength sessions** — even 20-30 minutes of basic full-body work (squats, pushes, pulls) starts rebuilding your glucose sink. Put them on the calendar now\n\n5. **Protect one habit that lowers overflow** — pick ONE this week: swap a sugary drink for water, add a protein-and-fiber breakfast, or set a consistent bedtime. Small drains on the overflow add up\n\nNone of this requires a diagnosis, a gym membership, or perfection. It requires starting before the smoke detector beeps.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">YOUR STARTER PLAN</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Five moves against insulin resistance — this week</text>
                    <rect x="150" y="160" width="800" height="120" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="212" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="22">1.</text>
                    <text x="245" y="212" text-anchor="start" fill="#fff" font-size="19">Ask for fasting insulin at your next blood draw</text>
                    <text x="245" y="250" text-anchor="start" fill="#888" font-size="16">Cheap, revealing, rarely ordered by default</text>
                    <rect x="150" y="310" width="800" height="120" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="362" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="22">2.</text>
                    <text x="245" y="362" text-anchor="start" fill="#fff" font-size="19">Calculate TG divided by HDL from your last panel</text>
                    <text x="245" y="400" text-anchor="start" fill="#888" font-size="16">Under ~1.5 excellent — over ~3, talk to your doctor</text>
                    <rect x="150" y="460" width="800" height="120" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="512" text-anchor="start" fill="#10b981" font-weight="bold" font-size="22">3.</text>
                    <text x="245" y="512" text-anchor="start" fill="#fff" font-size="19">Walk 2-5 minutes after dinner, every day</text>
                    <text x="245" y="550" text-anchor="start" fill="#888" font-size="16">Contracting muscle soaks up the glucose flood</text>
                    <rect x="150" y="610" width="800" height="120" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="662" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="22">4.</text>
                    <text x="245" y="662" text-anchor="start" fill="#fff" font-size="19">Put two 20-30 min strength sessions on the calendar</text>
                    <text x="245" y="700" text-anchor="start" fill="#888" font-size="16">Squats, pushes, pulls — rebuild the glucose sink</text>
                    <rect x="150" y="760" width="800" height="120" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="812" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="22">5.</text>
                    <text x="245" y="812" text-anchor="start" fill="#fff" font-size="19">Pick ONE overflow-lowering habit this week</text>
                    <text x="245" y="850" text-anchor="start" fill="#888" font-size="16">Drink swap, protein breakfast, or consistent bedtime</text>
                    <rect x="200" y="920" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="975" text-anchor="middle" fill="#ffd700" font-size="19">Start before the smoke detector beeps</text>
                </svg>`,
                caption: "Five actions this week — labs, a ratio, walks, strength, and one overflow habit"
            }
        },
        {
            type: "quote",
            content: "Those with cardiovascular disease not identified with diabetes are simply undiagnosed.",
            author: "Dr. Joseph Kraft, pathologist who ran insulin assays on 14,000+ patients",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">WISDOM</text>
                    <rect x="100" y="200" width="900" height="280" rx="20" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="160" y="285" text-anchor="start" fill="#fff" font-style="italic" font-size="23">"Those with cardiovascular disease</text>
                    <text x="160" y="330" text-anchor="start" fill="#fff" font-style="italic" font-size="23">not identified with diabetes</text>
                    <text x="160" y="375" text-anchor="start" fill="#fff" font-style="italic" font-size="23">are simply undiagnosed."</text>
                    <text x="940" y="440" text-anchor="end" fill="#8b5cf6" font-size="19">— Dr. Joseph Kraft</text>
                    <rect x="150" y="560" width="800" height="220" rx="20" fill="rgba(255,215,0,0.08)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="625" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="20">Why this claim is so bold</text>
                    <text x="550" y="675" text-anchor="middle" fill="#fff" font-size="17">After 14,000+ insulin assays, Kraft concluded that</text>
                    <text x="550" y="710" text-anchor="middle" fill="#fff" font-size="17">hidden insulin dysfunction underlies most vascular</text>
                    <text x="550" y="745" text-anchor="middle" fill="#fff" font-size="17">disease — even when glucose looks perfectly normal</text>
                    <rect x="250" y="840" width="600" height="90" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="895" text-anchor="middle" fill="#10b981" font-size="18">Measure insulin — not just its shadow</text>
                </svg>`,
                caption: "Kraft's provocation: heart disease as undiagnosed insulin dysfunction"
            }
        },
        {
            type: "quiz",
            question: "In the DiRECT trial, what most strongly determined whether type 2 diabetes stayed in remission at 2 years?",
            options: [
                { text: "Taking a new diabetes medication alongside the diet program", correct: false },
                { text: "Maintaining substantial weight loss — about 8 in 10 who kept off 10+ kg stayed in remission", correct: true },
                { text: "How long ago diabetes was diagnosed — remission only worked within the first year", correct: false },
                { text: "Cutting carbohydrates specifically, regardless of total weight change", correct: false }
            ],
            explanation: "DiRECT's dose-response was unmistakable: remission tracked with maintained weight loss. Overall, 36% were in remission at 2 years — but among participants keeping 10+ kg off, roughly 8 in 10 held remission, with no diabetes medications at all. Diagnosis timing mattered (earlier is better — participants averaged under 6 years in), but there was no one-year cliff. And the trial's formula diet worked by draining liver and visceral fat overall, not through carb-cutting specifically — the overflow model in action.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="140" width="800" height="200" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="200" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE DiRECT TRIAL</text>
                    <text x="550" y="250" text-anchor="middle" fill="#fff" font-size="18">Type 2 diabetes pushed into remission —</text>
                    <text x="550" y="290" text-anchor="middle" fill="#888" font-size="16">but what made remission STICK?</text>
                    <rect x="150" y="400" width="380" height="240" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="340" y="455" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">ALL PARTICIPANTS</text>
                    <text x="340" y="530" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="40">36%</text>
                    <text x="340" y="590" text-anchor="middle" fill="#fff" font-size="16">in remission at 2 years</text>
                    <rect x="570" y="400" width="380" height="240" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="760" y="455" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">THE ? SUBGROUP</text>
                    <text x="760" y="530" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="40">~80%</text>
                    <text x="760" y="590" text-anchor="middle" fill="#fff" font-size="16">what set them apart?</text>
                    <rect x="200" y="710" width="700" height="100" rx="20" fill="rgba(20,184,166,0.15)" stroke="#14b8a6" stroke-width="2"/>
                    <text x="550" y="755" text-anchor="middle" fill="#14b8a6" font-weight="bold" font-size="19">Hint: the trial's 'dose' wasn't a drug —</text>
                    <text x="550" y="790" text-anchor="middle" fill="#14b8a6" font-weight="bold" font-size="19">it was something participants kept off</text>
                </svg>`,
                caption: "What separated the 36% from the ~80%?"
            }
        }
    ]
},
{
    id: 3,
    title: "Mitochondria: Your Aging Power Plants",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "The Trillions of Engines You Never Think About",
            content: "Right now, inside almost every cell in your body, hundreds to thousands of tiny power plants are burning fuel to keep you alive. They are called **mitochondria**, and you have roughly **10 million billion** of them — about 10% of your body weight.\n\nEvery heartbeat, every thought, every step up the stairs runs on the energy they produce. And here's what should get your attention: how well they work in your 60s, 70s, and 80s is being decided by what you do **this decade**.\n\nWhen mitochondria decline, you feel it as fatigue, stubborn weight gain, and muscles that shrink no matter what you eat. Scientists now list **mitochondrial dysfunction** as one of the official hallmarks of aging itself.\n\nThe good news? Unlike your birthday, your mitochondria are **negotiable**. They respond to demand. This lesson shows you how to make that demand — and why it may be the single most powerful anti-aging lever you own.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">YOUR HIDDEN POWER GRID</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Tiny engines inside nearly every cell</text>
                    <circle cx="550" cy="420" r="230" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="3"/>
                    <text x="550" y="330" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="26">ONE OF YOUR CELLS</text>
                    <ellipse cx="450" cy="420" rx="70" ry="38" fill="rgba(245,158,11,0.25)" stroke="#f59e0b" stroke-width="3"/>
                    <path d="M395 420 Q420 395 445 420 Q470 445 495 420" stroke="#f59e0b" stroke-width="2" fill="none"/>
                    <ellipse cx="650" cy="480" rx="70" ry="38" fill="rgba(245,158,11,0.25)" stroke="#f59e0b" stroke-width="3"/>
                    <path d="M595 480 Q620 455 645 480 Q670 505 695 480" stroke="#f59e0b" stroke-width="2" fill="none"/>
                    <ellipse cx="600" cy="350" rx="70" ry="38" fill="rgba(245,158,11,0.25)" stroke="#f59e0b" stroke-width="3"/>
                    <path d="M545 350 Q570 325 595 350 Q620 375 645 350" stroke="#f59e0b" stroke-width="2" fill="none"/>
                    <text x="550" y="560" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">Mitochondria: the power plants</text>
                    <rect x="100" y="720" width="430" height="150" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="315" y="775" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">~10 MILLION BILLION</text>
                    <text x="315" y="815" text-anchor="middle" fill="#fff" font-size="18">mitochondria in your body</text>
                    <text x="315" y="848" text-anchor="middle" fill="#888" font-size="16">roughly 10% of your weight</text>
                    <rect x="570" y="720" width="430" height="150" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="785" y="775" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">EVERY MOVE YOU MAKE</text>
                    <text x="785" y="815" text-anchor="middle" fill="#fff" font-size="18">runs on the ATP they produce</text>
                    <text x="785" y="848" text-anchor="middle" fill="#888" font-size="16">heartbeats, thoughts, steps</text>
                    <rect x="150" y="940" width="800" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="985" text-anchor="middle" fill="#ffd700" font-size="20">How they age is negotiable —</text>
                    <text x="550" y="1015" text-anchor="middle" fill="#ffd700" font-size="20">they respond to the demand you create</text>
                </svg>`,
                caption: "Trillions of cellular power plants decide how much energy your life runs on"
            }
        },
        {
            type: "concept",
            title: "ATP: The Currency Your Body Actually Spends",
            content: "Your body doesn't run directly on pizza or oatmeal. It runs on **ATP (adenosine triphosphate)** — the universal energy currency of the cell. Mitochondria are where nearly all of it gets made.\n\nHere's the remarkable part: mitochondria are **dual-fuel engines**. They can burn:\n• **Fat** — your massive reserve tank (even lean people carry 50,000+ calories of it), burned slowly and cleanly at rest and during easy activity\n• **Glucose** — your quick-access fuel, burned fast during intense effort\n\nThe ability to **switch smoothly between fat and glucose** — burning fat while you sleep and stroll, shifting to glucose when you sprint for a bus — is called **metabolic flexibility**. It is one of the clearest signatures of a healthy metabolism.\n\nWhen mitochondria are numerous and healthy, that switch is effortless. When they are sparse or damaged, the switch **jams**: fat sits unburned, glucose lingers in the blood, and fuel backs up in the system. Researchers call the jammed state **metabolic inflexibility**, and it sits upstream of insulin resistance, energy crashes, and stubborn fat gain.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE DUAL-FUEL ENGINE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Two fuels in, one energy currency out</text>
                    <rect x="80" y="180" width="400" height="200" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="280" y="240" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="24">FAT</text>
                    <text x="280" y="285" text-anchor="middle" fill="#fff" font-size="18">Huge reserve tank</text>
                    <text x="280" y="318" text-anchor="middle" fill="#888" font-size="16">50,000+ calories stored</text>
                    <text x="280" y="350" text-anchor="middle" fill="#888" font-size="16">Slow, clean burn at rest</text>
                    <rect x="620" y="180" width="400" height="200" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="820" y="240" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="24">GLUCOSE</text>
                    <text x="820" y="285" text-anchor="middle" fill="#fff" font-size="18">Quick-access fuel</text>
                    <text x="820" y="318" text-anchor="middle" fill="#888" font-size="16">Limited storage</text>
                    <text x="820" y="350" text-anchor="middle" fill="#888" font-size="16">Fast burn for hard efforts</text>
                    <path d="M280 380 L500 500" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="500,500 482,492 490,478" fill="#14b8a6"/>
                    <path d="M820 380 L600 500" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="600,500 610,478 618,492" fill="#14b8a6"/>
                    <ellipse cx="550" cy="580" rx="220" ry="110" fill="rgba(99,102,241,0.15)" stroke="#6366f1" stroke-width="3"/>
                    <text x="550" y="565" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="24">MITOCHONDRION</text>
                    <text x="550" y="605" text-anchor="middle" fill="#fff" font-size="18">burns either fuel on demand</text>
                    <path d="M550 690 L550 770" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,770 542,752 558,752" fill="#14b8a6"/>
                    <rect x="330" y="780" width="440" height="120" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="835" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="26">ATP</text>
                    <text x="550" y="872" text-anchor="middle" fill="#fff" font-size="18">the energy your cells spend</text>
                    <rect x="130" y="950" width="840" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="990" text-anchor="middle" fill="#ffd700" font-size="20">Metabolic flexibility = switching fuels</text>
                    <text x="550" y="1022" text-anchor="middle" fill="#ffd700" font-size="20">smoothly, at the right moment</text>
                </svg>`,
                caption: "Mitochondria turn fat and glucose into ATP — flexibility is switching fuels on demand"
            }
        },
        {
            type: "visual",
            title: "Flexible vs Inflexible: Two Metabolisms Compared",
            content: "Picture two people eating the same dinner. In a **metabolically flexible** body, insulin rises, glucose gets burned or stored, then the system switches back to fat-burning within a few hours. In an **inflexible** body, the switch sticks — glucose stays elevated, fat-burning stays suppressed, and energy feels like a rollercoaster.\n\nThe difference isn't willpower. It's largely the **number and health of the mitochondria** doing the burning.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">TWO METABOLISMS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Same dinner, very different night</text>
                    <rect x="60" y="170" width="460" height="420" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">FLEXIBLE</text>
                    <text x="290" y="270" text-anchor="middle" fill="#fff" font-size="18">Many healthy mitochondria</text>
                    <text x="290" y="305" text-anchor="middle" fill="#888" font-size="16">Glucose cleared quickly</text>
                    <text x="290" y="338" text-anchor="middle" fill="#888" font-size="16">Back to fat-burning in hours</text>
                    <text x="290" y="371" text-anchor="middle" fill="#888" font-size="16">Steady energy, easy fasting</text>
                    <path d="M110 520 Q180 450 250 505 Q340 555 470 515" stroke="#10b981" stroke-width="4" fill="none"/>
                    <text x="290" y="565" text-anchor="middle" fill="#10b981" font-size="16">glucose rises, then settles fast</text>
                    <rect x="580" y="170" width="460" height="420" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="810" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">INFLEXIBLE</text>
                    <text x="810" y="270" text-anchor="middle" fill="#fff" font-size="18">Few, damaged mitochondria</text>
                    <text x="810" y="305" text-anchor="middle" fill="#888" font-size="16">Glucose lingers for hours</text>
                    <text x="810" y="338" text-anchor="middle" fill="#888" font-size="16">Fat-burning stays switched off</text>
                    <text x="810" y="371" text-anchor="middle" fill="#888" font-size="16">Crashes, cravings, fuel backup</text>
                    <path d="M630 530 Q700 420 780 440 Q880 465 990 455" stroke="#ef4444" stroke-width="4" fill="none"/>
                    <text x="810" y="565" text-anchor="middle" fill="#ef4444" font-size="16">glucose spikes and stays high</text>
                    <rect x="80" y="650" width="940" height="180" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="705" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">WHAT MAKES THE DIFFERENCE?</text>
                    <text x="550" y="748" text-anchor="middle" fill="#fff" font-size="19">Not willpower — mitochondrial number and health.</text>
                    <text x="550" y="785" text-anchor="middle" fill="#888" font-size="17">More engines burning fuel = faster clearing, smoother switching.</text>
                    <rect x="150" y="900" width="800" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="940" text-anchor="middle" fill="#ffd700" font-size="20">Inflexibility sits upstream of insulin</text>
                    <text x="550" y="972" text-anchor="middle" fill="#ffd700" font-size="20">resistance — and it is trainable</text>
                </svg>`,
                caption: "Flexible metabolisms clear fuel and switch back; inflexible ones jam"
            }
        },
        {
            type: "example",
            title: "Why Your Heart Never Takes a Day Off",
            content: "Want proof that mitochondria matter? Look at where your body puts the most of them.\n\n**Your heart** beats about **100,000 times a day** and can never rest. So heart muscle cells are packed wall-to-wall — roughly **a third of their volume is pure mitochondria**. That density is what lets your heart run for decades without a single break.\n\n**Your skeletal muscle** is the second great mitochondrial stronghold — and it matters far beyond movement. Muscle handles about **80% of insulin-stimulated glucose disposal**, making it your body's biggest glucose sink. When you eat carbs, muscle mitochondria are the furnaces that burn the surge.\n\nCompare a trained endurance athlete's thigh muscle to a sedentary person's under a microscope: the athlete's fibers are **crowded with large, networked mitochondria**; the sedentary fibers look sparse. That single difference shows up as the athlete cruising up a hill in fat-burning mode while the untrained person's heart pounds and their glucose spikes.\n\n**Why this matters to you**: the tissues that keep you alive and independent — heart and muscle — are exactly the tissues where mitochondrial decline hurts most. Protect the engines, and you protect the machine.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">WHERE THE ENGINES LIVE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">High-demand tissue = high mitochondria</text>
                    <rect x="60" y="180" width="460" height="330" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="290" y="235" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="22">HEART MUSCLE</text>
                    <path d="M290 300 C250 260 190 285 200 335 C208 375 260 405 290 430 C320 405 372 375 380 335 C390 285 330 260 290 300 Z" fill="rgba(236,72,153,0.3)" stroke="#ec4899" stroke-width="3"/>
                    <text x="290" y="465" text-anchor="middle" fill="#fff" font-size="18">~1/3 of cell volume is</text>
                    <text x="290" y="495" text-anchor="middle" fill="#fff" font-size="18">mitochondria — 100,000 beats/day</text>
                    <rect x="580" y="180" width="460" height="330" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="810" y="235" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">SKELETAL MUSCLE</text>
                    <rect x="660" y="280" width="300" height="45" rx="22" fill="rgba(99,102,241,0.3)" stroke="#6366f1" stroke-width="2"/>
                    <rect x="660" y="345" width="300" height="45" rx="22" fill="rgba(99,102,241,0.3)" stroke="#6366f1" stroke-width="2"/>
                    <text x="810" y="465" text-anchor="middle" fill="#fff" font-size="18">Handles ~80% of insulin-driven</text>
                    <text x="810" y="495" text-anchor="middle" fill="#fff" font-size="18">glucose disposal — your glucose sink</text>
                    <rect x="60" y="570" width="460" height="240" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="625" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">TRAINED FIBER</text>
                    <circle cx="180" cy="690" r="18" fill="#10b981" opacity="0.8"/>
                    <circle cx="240" cy="710" r="18" fill="#10b981" opacity="0.8"/>
                    <circle cx="300" cy="685" r="18" fill="#10b981" opacity="0.8"/>
                    <circle cx="360" cy="715" r="18" fill="#10b981" opacity="0.8"/>
                    <circle cx="215" cy="755" r="18" fill="#10b981" opacity="0.8"/>
                    <circle cx="330" cy="758" r="18" fill="#10b981" opacity="0.8"/>
                    <circle cx="400" cy="690" r="18" fill="#10b981" opacity="0.8"/>
                    <rect x="580" y="570" width="460" height="240" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="810" y="625" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">SEDENTARY FIBER</text>
                    <circle cx="740" cy="700" r="14" fill="#ef4444" opacity="0.7"/>
                    <circle cx="880" cy="740" r="14" fill="#ef4444" opacity="0.7"/>
                    <text x="810" y="785" text-anchor="middle" fill="#888" font-size="16">sparse, smaller engines</text>
                    <rect x="130" y="880" width="840" height="130" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="930" text-anchor="middle" fill="#ffd700" font-size="20">Heart and muscle keep you alive and independent —</text>
                    <text x="550" y="965" text-anchor="middle" fill="#ffd700" font-size="20">and they are where mitochondrial decline hurts most</text>
                </svg>`,
                caption: "Heart and muscle are mitochondrial strongholds — and your biggest glucose sinks"
            }
        },
        {
            type: "quiz",
            question: "What is 'metabolic flexibility'?",
            options: [
                { text: "The ability to eat any diet without gaining weight", correct: false },
                { text: "The ability to switch smoothly between burning fat and glucose as conditions change", correct: true },
                { text: "Having a naturally fast metabolism that burns extra calories at rest", correct: false },
                { text: "The liver's ability to store unlimited glycogen for later use", correct: false }
            ],
            explanation: "Metabolic flexibility is the mitochondria-powered ability to switch fuels on demand — burning fat at rest and during easy activity, shifting to glucose for intense efforts, then switching back after meals. It is not about diet immunity or a 'fast metabolism'; a person can gain weight and still be flexible. When the switch jams (metabolic inflexibility), glucose lingers, fat-burning stays suppressed, and insulin resistance often follows.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="130" width="800" height="200" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="190" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">METABOLIC FLEXIBILITY</text>
                    <text x="550" y="235" text-anchor="middle" fill="#fff" font-size="18">Two fuels. One engine. One smooth switch.</text>
                    <text x="550" y="270" text-anchor="middle" fill="#888" font-size="16">Which definition captures it?</text>
                    <rect x="130" y="420" width="380" height="180" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="320" y="480" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">FAT</text>
                    <text x="320" y="520" text-anchor="middle" fill="#fff" font-size="17">rest + easy movement</text>
                    <text x="320" y="553" text-anchor="middle" fill="#888" font-size="15">slow, steady burn</text>
                    <rect x="590" y="420" width="380" height="180" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="780" y="480" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="20">GLUCOSE</text>
                    <text x="780" y="520" text-anchor="middle" fill="#fff" font-size="17">hard, fast efforts</text>
                    <text x="780" y="553" text-anchor="middle" fill="#888" font-size="15">quick-access fuel</text>
                    <path d="M510 480 L590 480" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="590,480 574,472 574,488" fill="#14b8a6"/>
                    <path d="M590 540 L510 540" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="510,540 526,532 526,548" fill="#14b8a6"/>
                    <rect x="150" y="680" width="800" height="100" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="725" text-anchor="middle" fill="#ffd700" font-size="20">Hint: the key word is switch —</text>
                    <text x="550" y="758" text-anchor="middle" fill="#ffd700" font-size="20">what jams in metabolic inflexibility?</text>
                </svg>`,
                caption: "Test your understanding of fuel-switching"
            }
        },
        {
            type: "concept",
            title: "How Power Plants Fail: The Four Hits of Aging",
            content: "With each passing decade — especially in sedentary bodies — mitochondria take four compounding hits:\n\n• **Fewer new plants built**. The construction program, called **mitochondrial biogenesis**, slows down. Old, worn engines aren't replaced at the rate they once were.\n\n• **Damaged blueprints**. Mitochondria carry their own DNA (**mtDNA**), sitting right next to the furnace with weaker repair systems than the DNA in your nucleus. Mutations accumulate, and each damaged copy builds slightly defective machinery.\n\n• **More sparks flying**. Struggling mitochondria leak more **reactive oxygen species (ROS)** — unstable molecules that, in excess, damage nearby proteins, membranes, and yet more mtDNA. A vicious cycle: damage creates leaks, leaks create damage.\n\n• **Weaker maximum output**. Studies of muscle biopsies show older, sedentary adults can lose a substantial fraction of their **respiratory capacity** — the peak rate at which mitochondria can make ATP.\n\nThe result is an energy grid running on fewer, older, leakier plants. You experience it not as a lab value, but as **fatigue that arrives earlier**, workouts that take longer to recover from, and a metabolism that mishandles fuel.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE FOUR HITS OF AGING</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">How mitochondria decline over decades</text>
                    <rect x="80" y="170" width="440" height="200" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="300" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">1. FEWER BUILT</text>
                    <text x="300" y="268" text-anchor="middle" fill="#fff" font-size="17">Biogenesis slows —</text>
                    <text x="300" y="300" text-anchor="middle" fill="#fff" font-size="17">worn engines not replaced</text>
                    <text x="300" y="335" text-anchor="middle" fill="#888" font-size="15">construction program idles</text>
                    <rect x="580" y="170" width="440" height="200" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="800" y="225" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">2. DAMAGED BLUEPRINTS</text>
                    <text x="800" y="268" text-anchor="middle" fill="#fff" font-size="17">mtDNA mutations pile up</text>
                    <text x="800" y="300" text-anchor="middle" fill="#fff" font-size="17">next to the furnace</text>
                    <text x="800" y="335" text-anchor="middle" fill="#888" font-size="15">weak repair systems</text>
                    <rect x="80" y="410" width="440" height="200" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="300" y="465" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">3. MORE SPARKS (ROS)</text>
                    <text x="300" y="508" text-anchor="middle" fill="#fff" font-size="17">Leaky electron transport</text>
                    <text x="300" y="540" text-anchor="middle" fill="#fff" font-size="17">damages nearby machinery</text>
                    <text x="300" y="575" text-anchor="middle" fill="#888" font-size="15">damage breeds more damage</text>
                    <rect x="580" y="410" width="440" height="200" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="800" y="465" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="20">4. WEAKER OUTPUT</text>
                    <text x="800" y="508" text-anchor="middle" fill="#fff" font-size="17">Respiratory capacity falls</text>
                    <text x="800" y="540" text-anchor="middle" fill="#fff" font-size="17">— lower peak ATP rate</text>
                    <text x="800" y="575" text-anchor="middle" fill="#888" font-size="15">the grid loses headroom</text>
                    <path d="M550 630 L550 700" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,700 542,682 558,682" fill="#14b8a6"/>
                    <rect x="130" y="710" width="840" height="170" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="765" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">WHAT YOU FEEL</text>
                    <text x="550" y="808" text-anchor="middle" fill="#fff" font-size="19">Earlier fatigue • slower recovery • fuel mishandled</text>
                    <text x="550" y="845" text-anchor="middle" fill="#888" font-size="16">an energy grid running on fewer, older, leakier plants</text>
                    <rect x="150" y="940" width="800" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="980" text-anchor="middle" fill="#ffd700" font-size="20">Much of this decline tracks disuse,</text>
                    <text x="550" y="1012" text-anchor="middle" fill="#ffd700" font-size="20">not just birthdays — that is the opening</text>
                </svg>`,
                caption: "Reduced biogenesis, mtDNA damage, ROS leaks, and falling respiratory capacity"
            }
        },
        {
            type: "visual",
            title: "The Downward Spiral — and Where It Leads",
            content: "The four hits don't stay contained inside the cell. They cascade outward into the three complaints of aging you hear most often: **fatigue** (less ATP available), **insulin resistance** (muscle can't burn the glucose arriving), and **sarcopenia** (muscle fibers wither without energy support).\n\nNotice the loop: weaker mitochondria → less activity → even less demand for mitochondria → faster decline. Breaking that loop is the whole game.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE DOWNWARD SPIRAL</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">From cell damage to how your life feels</text>
                    <rect x="300" y="160" width="500" height="110" rx="20" fill="rgba(239,68,68,0.15)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="207" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">MITOCHONDRIAL DECLINE</text>
                    <text x="550" y="243" text-anchor="middle" fill="#888" font-size="16">fewer, older, leakier power plants</text>
                    <path d="M400 270 L240 370" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="240,370 252,350 262,364" fill="#14b8a6"/>
                    <path d="M550 270 L550 370" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,370 542,352 558,352" fill="#14b8a6"/>
                    <path d="M700 270 L860 370" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="860,370 838,364 848,350" fill="#14b8a6"/>
                    <rect x="60" y="380" width="320" height="190" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="220" y="435" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">FATIGUE</text>
                    <text x="220" y="478" text-anchor="middle" fill="#fff" font-size="16">Less ATP on tap —</text>
                    <text x="220" y="508" text-anchor="middle" fill="#fff" font-size="16">effort feels harder,</text>
                    <text x="220" y="538" text-anchor="middle" fill="#888" font-size="15">energy fades earlier</text>
                    <rect x="390" y="380" width="320" height="190" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="435" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">INSULIN RESISTANCE</text>
                    <text x="550" y="478" text-anchor="middle" fill="#fff" font-size="16">Muscle burns less glucose;</text>
                    <text x="550" y="508" text-anchor="middle" fill="#fff" font-size="16">fuel backs up in blood</text>
                    <text x="550" y="538" text-anchor="middle" fill="#888" font-size="15">the glucose sink shrinks</text>
                    <rect x="720" y="380" width="320" height="190" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="880" y="435" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="20">SARCOPENIA</text>
                    <text x="880" y="478" text-anchor="middle" fill="#fff" font-size="16">Fibers wither without</text>
                    <text x="880" y="508" text-anchor="middle" fill="#fff" font-size="16">energy support</text>
                    <text x="880" y="538" text-anchor="middle" fill="#888" font-size="15">3-8% muscle lost per decade</text>
                    <path d="M550 570 L550 650" stroke="#ef4444" stroke-width="3"/>
                    <polygon points="550,650 542,632 558,632" fill="#ef4444"/>
                    <rect x="250" y="660" width="600" height="110" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="707" text-anchor="middle" fill="#fff" font-size="19">Less activity, less demand</text>
                    <text x="550" y="742" text-anchor="middle" fill="#888" font-size="16">the body builds even fewer mitochondria</text>
                    <path d="M250 715 Q100 500 295 235" stroke="#ef4444" stroke-width="3" stroke-dasharray="8" fill="none"/>
                    <polygon points="295,235 278,248 290,258" fill="#ef4444"/>
                    <text x="130" y="620" text-anchor="middle" fill="#ef4444" font-size="16">the loop</text>
                    <rect x="150" y="850" width="800" height="150" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="905" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">THE WHOLE GAME</text>
                    <text x="550" y="948" text-anchor="middle" fill="#fff" font-size="19">Break the loop by adding demand back in —</text>
                    <text x="550" y="980" text-anchor="middle" fill="#888" font-size="16">the spiral runs in reverse when you do</text>
                </svg>`,
                caption: "Mitochondrial decline cascades into fatigue, insulin resistance, and sarcopenia — then loops"
            }
        },
        {
            type: "concept",
            title: "Official Status: A Hallmark of Aging Itself",
            content: "This isn't a fringe theory. In 2023, biologist **Carlos López-Otín** and colleagues published the updated **'Hallmarks of Aging'** — the field's master list of the **12 core biological processes** that drive aging. Two of them sit squarely in this lesson:\n\n• **Mitochondrial dysfunction** — the declining power grid you just learned about\n\n• **Deregulated nutrient sensing** — the fuel-management network going out of tune. Four famous pathways run it:\n  • **Insulin/IGF-1** — signals fuel abundance and growth\n  • **mTOR** — the 'build mode' switch, activated by food and amino acids\n  • **AMPK** — the 'low fuel' sensor, activated by exercise and fasting\n  • **Sirtuins** — repair-and-defend proteins tied to cellular energy state\n\nHere's the wow: these two hallmarks are **deeply intertwined**. AMPK and the sirtuins directly stimulate mitochondrial biogenesis; chronically high insulin and overactive mTOR suppress cellular cleanup. Metabolism doesn't just *reflect* aging — it sits **at the control panel** of aging biology.\n\nWhich means the levers that tune nutrient sensing — exercise, eating pattern, sleep — are pulling on the machinery of aging itself.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">12 HALLMARKS OF AGING</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Lopez-Otin et al., 2023 — two are metabolic</text>
                    <rect x="80" y="160" width="940" height="130" rx="20" fill="rgba(255,255,255,0.05)" stroke="#888" stroke-width="2"/>
                    <text x="550" y="210" text-anchor="middle" fill="#888" font-size="17">genomic instability • telomere attrition • epigenetic alterations</text>
                    <text x="550" y="243" text-anchor="middle" fill="#888" font-size="17">loss of proteostasis • disabled autophagy • cellular senescence</text>
                    <text x="550" y="276" text-anchor="middle" fill="#888" font-size="17">stem cell exhaustion • altered communication • dysbiosis • inflammation</text>
                    <rect x="80" y="330" width="460" height="180" rx="20" fill="rgba(239,68,68,0.12)" stroke="#ef4444" stroke-width="3"/>
                    <text x="310" y="390" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">MITOCHONDRIAL</text>
                    <text x="310" y="425" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">DYSFUNCTION</text>
                    <text x="310" y="470" text-anchor="middle" fill="#fff" font-size="16">the declining power grid</text>
                    <rect x="560" y="330" width="460" height="180" rx="20" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="3"/>
                    <text x="790" y="390" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="21">DEREGULATED</text>
                    <text x="790" y="425" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="21">NUTRIENT SENSING</text>
                    <text x="790" y="470" text-anchor="middle" fill="#fff" font-size="16">fuel management out of tune</text>
                    <line x1="540" y1="420" x2="560" y2="420" stroke="#ffd700" stroke-width="3"/>
                    <rect x="80" y="560" width="220" height="150" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="190" y="615" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="19">INSULIN/IGF-1</text>
                    <text x="190" y="652" text-anchor="middle" fill="#fff" font-size="15">fuel abundance</text>
                    <text x="190" y="680" text-anchor="middle" fill="#888" font-size="14">growth signal</text>
                    <rect x="320" y="560" width="220" height="150" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="430" y="615" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="19">mTOR</text>
                    <text x="430" y="652" text-anchor="middle" fill="#fff" font-size="15">build mode</text>
                    <text x="430" y="680" text-anchor="middle" fill="#888" font-size="14">fed-state switch</text>
                    <rect x="560" y="560" width="220" height="150" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="670" y="615" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">AMPK</text>
                    <text x="670" y="652" text-anchor="middle" fill="#fff" font-size="15">low-fuel sensor</text>
                    <text x="670" y="680" text-anchor="middle" fill="#888" font-size="14">exercise + fasting</text>
                    <rect x="800" y="560" width="220" height="150" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="910" y="615" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="19">SIRTUINS</text>
                    <text x="910" y="652" text-anchor="middle" fill="#fff" font-size="15">repair + defend</text>
                    <text x="910" y="680" text-anchor="middle" fill="#888" font-size="14">energy-state linked</text>
                    <path d="M670 710 L400 800" stroke="#10b981" stroke-width="3" stroke-dasharray="7"/>
                    <rect x="130" y="810" width="840" height="120" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="858" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">AMPK + sirtuins stimulate new mitochondria</text>
                    <text x="550" y="895" text-anchor="middle" fill="#888" font-size="16">chronically high insulin + overactive mTOR suppress cleanup</text>
                    <rect x="150" y="970" width="800" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1010" text-anchor="middle" fill="#ffd700" font-size="20">Metabolism sits at the control panel</text>
                    <text x="550" y="1042" text-anchor="middle" fill="#ffd700" font-size="20">of aging biology itself</text>
                </svg>`,
                caption: "Two of the 12 hallmarks of aging are metabolic — and they are intertwined"
            }
        },
        {
            type: "example",
            title: "The Best-Proven Mitochondrial Therapy Is Free",
            content: "No drug yet invented builds mitochondria as reliably as **exercise**. The mechanism is elegant:\n\nWhen a workout drains cellular energy, **AMPK** — the low-fuel sensor — switches on. AMPK activates a master regulator called **PGC-1 alpha**, often described as the foreman of mitochondrial construction. PGC-1 alpha then commands the cell to **build new mitochondria and expand the existing network**.\n\nTwo styles of training pull this lever from different angles:\n\n• **Zone 2 cardio** — a steady, 'can hold a conversation' pace, about 60-70% of max heart rate, for 45-60 minutes. This is time spent burning fat at high rates, and it drives up **mitochondrial density and fat-oxidation capacity**. Elite endurance coaches build most of their athletes' training here.\n\n• **HIIT** — short, hard intervals (think 4 x 4 minutes hard with recovery). The intense energy demand spikes **AMPK and PGC-1 alpha** powerfully, triggering biogenesis with a small time investment.\n\nIn training studies, previously sedentary adults — including adults in their 60s and 70s — grow measurably more mitochondria within **weeks** of consistent training. Age slows the response; it does not abolish it. Your construction program never fully retires.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">EXERCISE BUILDS ENGINES</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">The AMPK to PGC-1 alpha construction line</text>
                    <rect x="60" y="180" width="220" height="110" rx="15" fill="rgba(239,68,68,0.2)" stroke="#ef4444" stroke-width="2"/>
                    <text x="170" y="230" text-anchor="middle" fill="#fff" font-size="18">Workout drains</text>
                    <text x="170" y="260" text-anchor="middle" fill="#fff" font-size="18">cell energy</text>
                    <path d="M280 235 L340 235" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="340,235 328,227 328,243" fill="#14b8a6"/>
                    <rect x="340" y="180" width="220" height="110" rx="15" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="2"/>
                    <text x="450" y="230" text-anchor="middle" fill="#fff" font-size="18">AMPK sensor</text>
                    <text x="450" y="260" text-anchor="middle" fill="#fff" font-size="18">switches on</text>
                    <path d="M560 235 L620 235" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="620,235 608,227 608,243" fill="#14b8a6"/>
                    <rect x="620" y="180" width="220" height="110" rx="15" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="730" y="230" text-anchor="middle" fill="#fff" font-size="18">PGC-1 alpha</text>
                    <text x="730" y="260" text-anchor="middle" fill="#fff" font-size="18">foreman activated</text>
                    <path d="M840 235 L900 235" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="900,235 888,227 888,243" fill="#14b8a6"/>
                    <rect x="900" y="180" width="150" height="110" rx="15" fill="rgba(99,102,241,0.2)" stroke="#6366f1" stroke-width="2"/>
                    <text x="975" y="230" text-anchor="middle" fill="#fff" font-size="17">New</text>
                    <text x="975" y="260" text-anchor="middle" fill="#fff" font-size="17">mitochondria</text>
                    <rect x="60" y="370" width="460" height="300" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="290" y="425" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="22">ZONE 2</text>
                    <text x="290" y="468" text-anchor="middle" fill="#fff" font-size="17">Conversational pace</text>
                    <text x="290" y="500" text-anchor="middle" fill="#fff" font-size="17">~60-70% max heart rate</text>
                    <text x="290" y="532" text-anchor="middle" fill="#fff" font-size="17">45-60 min steady sessions</text>
                    <text x="290" y="575" text-anchor="middle" fill="#888" font-size="15">grows density + fat-burning</text>
                    <text x="290" y="605" text-anchor="middle" fill="#888" font-size="15">capacity over time</text>
                    <rect x="580" y="370" width="460" height="300" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="810" y="425" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="22">HIIT</text>
                    <text x="810" y="468" text-anchor="middle" fill="#fff" font-size="17">Short, hard intervals</text>
                    <text x="810" y="500" text-anchor="middle" fill="#fff" font-size="17">e.g. 4 x 4 min efforts</text>
                    <text x="810" y="532" text-anchor="middle" fill="#fff" font-size="17">big stimulus, small time cost</text>
                    <text x="810" y="575" text-anchor="middle" fill="#888" font-size="15">spikes AMPK + PGC-1 alpha</text>
                    <text x="810" y="605" text-anchor="middle" fill="#888" font-size="15">powerfully</text>
                    <rect x="130" y="740" width="840" height="160" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="795" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">IT WORKS AT EVERY AGE</text>
                    <text x="550" y="838" text-anchor="middle" fill="#fff" font-size="18">Sedentary adults in their 60s and 70s grow measurably</text>
                    <text x="550" y="870" text-anchor="middle" fill="#fff" font-size="18">more mitochondria within weeks of training</text>
                    <rect x="150" y="960" width="800" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1010" text-anchor="middle" fill="#ffd700" font-size="20">No drug builds mitochondria like movement</text>
                </svg>`,
                caption: "Zone 2 and HIIT both trigger the AMPK/PGC-1 alpha construction program"
            }
        },
        {
            type: "concept",
            title: "The Cleanup Crew: Mitophagy and Fusion",
            content: "Building new power plants is only half the job. A healthy grid also needs **demolition and maintenance** — and your cells run both programs, especially when food is scarce.\n\n• **Mitophagy** (literally 'mitochondria eating') is targeted recycling: the cell tags a damaged, ROS-leaking mitochondrion, engulfs it, and breaks it down for parts. Bad engines off the grid before they poison the neighborhood.\n\n• **Fusion** is the opposite trick: mitochondria physically **merge into connected networks**, sharing proteins and healthy mtDNA copies so that minor damage in one unit gets diluted across the whole. Think of neighborhood generators wiring themselves into one resilient utility.\n\nWhat flips these programs on? **Energy scarcity.** During a **fast** — even the simple overnight kind — insulin falls, **AMPK and sirtuins** rise, and the cell shifts from building mode to maintenance mode. Research on intermittent fasting shows it promotes exactly this: more mitophagy, more fusion, a cleaner and more connected network.\n\nThe practical takeaway is a rhythm, not a hack: **periods of demand** (exercise) that trigger building, and **periods of scarcity** (time between meals, a true overnight fast) that trigger cleanup. Grids need both construction *and* maintenance windows.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE CLEANUP CREW</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Fasting flips cells into maintenance mode</text>
                    <rect x="60" y="170" width="460" height="360" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="290" y="225" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">MITOPHAGY</text>
                    <text x="290" y="262" text-anchor="middle" fill="#888" font-size="16">targeted recycling</text>
                    <ellipse cx="200" cy="330" rx="55" ry="30" fill="rgba(239,68,68,0.3)" stroke="#ef4444" stroke-width="2"/>
                    <text x="200" y="337" text-anchor="middle" fill="#ef4444" font-size="14">damaged</text>
                    <path d="M265 330 L330 330" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="330,330 318,322 318,338" fill="#14b8a6"/>
                    <circle cx="395" cy="330" r="52" fill="none" stroke="#8b5cf6" stroke-width="3" stroke-dasharray="8"/>
                    <ellipse cx="395" cy="330" rx="32" ry="18" fill="rgba(239,68,68,0.3)" stroke="#ef4444" stroke-width="2"/>
                    <text x="395" y="410" text-anchor="middle" fill="#888" font-size="15">engulfed, recycled</text>
                    <text x="290" y="465" text-anchor="middle" fill="#fff" font-size="17">Bad engines removed before</text>
                    <text x="290" y="497" text-anchor="middle" fill="#fff" font-size="17">they leak ROS everywhere</text>
                    <rect x="580" y="170" width="460" height="360" rx="20" fill="rgba(20,184,166,0.15)" stroke="#14b8a6" stroke-width="2"/>
                    <text x="810" y="225" text-anchor="middle" fill="#14b8a6" font-weight="bold" font-size="22">FUSION</text>
                    <text x="810" y="262" text-anchor="middle" fill="#888" font-size="16">merging into networks</text>
                    <ellipse cx="700" cy="320" rx="45" ry="24" fill="rgba(20,184,166,0.3)" stroke="#14b8a6" stroke-width="2"/>
                    <ellipse cx="810" cy="350" rx="45" ry="24" fill="rgba(20,184,166,0.3)" stroke="#14b8a6" stroke-width="2"/>
                    <ellipse cx="920" cy="320" rx="45" ry="24" fill="rgba(20,184,166,0.3)" stroke="#14b8a6" stroke-width="2"/>
                    <path d="M740 330 L775 342" stroke="#14b8a6" stroke-width="4"/>
                    <path d="M850 342 L885 330" stroke="#14b8a6" stroke-width="4"/>
                    <text x="810" y="420" text-anchor="middle" fill="#888" font-size="15">one connected utility</text>
                    <text x="810" y="465" text-anchor="middle" fill="#fff" font-size="17">Healthy parts shared;</text>
                    <text x="810" y="497" text-anchor="middle" fill="#fff" font-size="17">damage diluted across the grid</text>
                    <rect x="130" y="590" width="840" height="180" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="645" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">THE TRIGGER: ENERGY SCARCITY</text>
                    <text x="550" y="690" text-anchor="middle" fill="#fff" font-size="18">Fasting drops insulin; AMPK and sirtuins rise;</text>
                    <text x="550" y="723" text-anchor="middle" fill="#fff" font-size="18">the cell shifts from building to maintenance</text>
                    <rect x="130" y="830" width="840" height="200" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="885" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="21">THE RHYTHM, NOT A HACK</text>
                    <text x="550" y="930" text-anchor="middle" fill="#fff" font-size="18">Demand (exercise) triggers building.</text>
                    <text x="550" y="963" text-anchor="middle" fill="#fff" font-size="18">Scarcity (time between meals) triggers cleanup.</text>
                    <text x="550" y="1000" text-anchor="middle" fill="#888" font-size="16">A healthy grid needs both windows</text>
                </svg>`,
                caption: "Mitophagy recycles damaged units; fusion pools healthy parts — fasting triggers both"
            }
        },
        {
            type: "application",
            title: "Your Mitochondrial Training Plan, Starting This Week",
            content: "You don't need a lab or a supplement stack. You need **demand and rhythm**:\n\n1. **Schedule two Zone 2 sessions this week** — 30-45 minutes of brisk walking, cycling, or rowing at a pace where you can talk in full sentences but wouldn't want to sing. This is your mitochondrial base-builder.\n\n2. **Add one interval day** — after a warm-up, do 4 rounds of 3-4 minutes at a genuinely hard (not maximal) effort with equal recovery. One HIIT day per week is enough to spike the AMPK/PGC-1 alpha signal.\n\n3. **Lift twice this week** — muscle is where your mitochondria live; strength training preserves the real estate. Even two 30-minute full-body sessions count.\n\n4. **Give your cells a nightly maintenance window** — aim for a simple **12-hour overnight fast** (dinner at 7pm, breakfast at 7am). No extreme protocols needed; this alone supports the mitophagy/fusion cleanup cycle. If you have diabetes or take glucose-lowering medication, talk to your clinician before extending fasts.\n\n5. **Break up sitting** — a 2-5 minute walk after meals gives your muscle mitochondria a job right when fuel is arriving.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">YOUR TRAINING PLAN</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Five moves to rebuild your power grid</text>
                    <rect x="150" y="160" width="800" height="120" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="212" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="22">1.</text>
                    <text x="245" y="212" text-anchor="start" fill="#fff" font-size="19">Two Zone 2 sessions — 30-45 min</text>
                    <text x="245" y="248" text-anchor="start" fill="#888" font-size="16">talk-but-not-sing pace, base builder</text>
                    <rect x="150" y="310" width="800" height="120" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="362" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="22">2.</text>
                    <text x="245" y="362" text-anchor="start" fill="#fff" font-size="19">One interval day — 4 x 3-4 min hard</text>
                    <text x="245" y="398" text-anchor="start" fill="#888" font-size="16">spikes the AMPK / PGC-1 alpha signal</text>
                    <rect x="150" y="460" width="800" height="120" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="512" text-anchor="start" fill="#10b981" font-weight="bold" font-size="22">3.</text>
                    <text x="245" y="512" text-anchor="start" fill="#fff" font-size="19">Lift twice — protect the real estate</text>
                    <text x="245" y="548" text-anchor="start" fill="#888" font-size="16">muscle is where your mitochondria live</text>
                    <rect x="150" y="610" width="800" height="120" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="662" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="22">4.</text>
                    <text x="245" y="662" text-anchor="start" fill="#fff" font-size="19">12-hour overnight fast — 7pm to 7am</text>
                    <text x="245" y="698" text-anchor="start" fill="#888" font-size="16">nightly maintenance window for cleanup</text>
                    <rect x="150" y="760" width="800" height="120" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="812" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="22">5.</text>
                    <text x="245" y="812" text-anchor="start" fill="#fff" font-size="19">Walk 2-5 min after meals</text>
                    <text x="245" y="848" text-anchor="start" fill="#888" font-size="16">give muscle a job when fuel arrives</text>
                    <rect x="150" y="930" width="800" height="110" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="978" text-anchor="middle" fill="#ffd700" font-size="20">Demand builds. Scarcity cleans.</text>
                    <text x="550" y="1012" text-anchor="middle" fill="#ffd700" font-size="20">Your grid rebuilds within weeks.</text>
                </svg>`,
                caption: "This week's five-part plan: build with demand, clean with rhythm"
            }
        },
        {
            type: "concept",
            title: "Flexibility Is a Skill — and Skills Are Trained",
            content: "Here's the reframe to carry out of this lesson: **metabolic flexibility isn't a trait you're born with or without. It's a capacity — like strength or endurance — that grows with training and shrinks with disuse.**\n\nThe evidence for trainability is consistent:\n• Endurance training **doubles fat-oxidation rates** at a given intensity in a matter of months\n• Formerly sedentary adults improve insulin sensitivity within **weeks** of starting Zone 2 plus strength work\n• Even single sessions matter: one bout of exercise improves muscle glucose uptake for **24-48 hours** afterward\n\nAnd the reverse is just as real: bed-rest studies show measurable insulin resistance in healthy young people after **days** of inactivity. The system tracks demand in both directions, at every age.\n\nThis is why 'my metabolism is broken' is rarely the right diagnosis — and never a life sentence. What's usually true is that the mitochondrial network has been **under-demanded**: too little movement asking for energy, too few maintenance windows between meals, too little muscle holding the engines.\n\nYou now know the levers: **Zone 2, intervals, strength, an overnight fast, post-meal walks**. Pull them consistently and you are — quite literally — rebuilding the power grid your next 30 years will run on.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">FLEXIBILITY IS TRAINABLE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">The system tracks demand in both directions</text>
                    <rect x="60" y="170" width="460" height="340" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">TRAIN IT: IT GROWS</text>
                    <text x="290" y="270" text-anchor="middle" fill="#fff" font-size="17">Fat-oxidation can double</text>
                    <text x="290" y="302" text-anchor="middle" fill="#888" font-size="15">within months of endurance work</text>
                    <text x="290" y="345" text-anchor="middle" fill="#fff" font-size="17">Insulin sensitivity improves</text>
                    <text x="290" y="377" text-anchor="middle" fill="#888" font-size="15">within weeks of consistent training</text>
                    <text x="290" y="420" text-anchor="middle" fill="#fff" font-size="17">One session boosts glucose</text>
                    <text x="290" y="452" text-anchor="middle" fill="#888" font-size="15">uptake for 24-48 hours</text>
                    <path d="M110 480 L200 470 L290 450 L380 420 L470 380" stroke="#10b981" stroke-width="4" fill="none"/>
                    <rect x="580" y="170" width="460" height="340" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="810" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">IGNORE IT: IT SHRINKS</text>
                    <text x="810" y="270" text-anchor="middle" fill="#fff" font-size="17">Bed rest causes measurable</text>
                    <text x="810" y="302" text-anchor="middle" fill="#888" font-size="15">insulin resistance within days</text>
                    <text x="810" y="345" text-anchor="middle" fill="#fff" font-size="17">Even in healthy young people</text>
                    <text x="810" y="377" text-anchor="middle" fill="#888" font-size="15">disuse is read as a signal</text>
                    <text x="810" y="420" text-anchor="middle" fill="#fff" font-size="17">Under-demanded, not broken</text>
                    <text x="810" y="452" text-anchor="middle" fill="#888" font-size="15">rarely a life sentence</text>
                    <path d="M630 380 L720 420 L810 450 L900 470 L990 480" stroke="#ef4444" stroke-width="4" fill="none"/>
                    <rect x="130" y="570" width="840" height="220" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="625" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">YOUR FIVE LEVERS</text>
                    <text x="550" y="672" text-anchor="middle" fill="#fff" font-size="19">Zone 2 • Intervals • Strength</text>
                    <text x="550" y="708" text-anchor="middle" fill="#fff" font-size="19">Overnight fast • Post-meal walks</text>
                    <text x="550" y="752" text-anchor="middle" fill="#888" font-size="16">pulled consistently, at any age</text>
                    <rect x="150" y="850" width="800" height="140" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="905" text-anchor="middle" fill="#ffd700" font-size="21">You are rebuilding the power grid</text>
                    <text x="550" y="942" text-anchor="middle" fill="#ffd700" font-size="21">your next 30 years will run on</text>
                </svg>`,
                caption: "Metabolic flexibility grows with demand and shrinks with disuse — at every age"
            }
        },
        {
            type: "quiz",
            question: "During a fast, what happens inside your cells that benefits the mitochondrial network?",
            options: [
                { text: "Insulin rises, activating mTOR to build extra mitochondria while no food is arriving", correct: false },
                { text: "Insulin falls and AMPK and sirtuins rise, triggering mitophagy and fusion — the cleanup and networking programs", correct: true },
                { text: "Mitochondria shut down completely to conserve energy until the next meal", correct: false },
                { text: "ROS production rises sharply, which burns away old mitochondria in a controlled fire", correct: false }
            ],
            explanation: "Fasting creates energy scarcity: insulin falls, and the low-fuel sensors AMPK and the sirtuins rise. That shifts cells from building mode into maintenance mode — mitophagy recycles damaged, ROS-leaking mitochondria, and fusion merges healthy ones into resilient networks. Insulin and mTOR do the opposite (they signal the fed state and suppress cleanup), mitochondria never shut down entirely, and ROS is a damaging by-product, not a cleanup tool.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="130" width="800" height="180" rx="20" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="190" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">THE FASTED STATE</text>
                    <text x="550" y="235" text-anchor="middle" fill="#fff" font-size="18">Hours pass without food. Insulin drops.</text>
                    <text x="550" y="270" text-anchor="middle" fill="#888" font-size="16">What switches on inside your cells?</text>
                    <rect x="130" y="400" width="400" height="230" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="330" y="455" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="20">FED STATE</text>
                    <text x="330" y="498" text-anchor="middle" fill="#fff" font-size="17">insulin + mTOR up</text>
                    <text x="330" y="530" text-anchor="middle" fill="#fff" font-size="17">build mode</text>
                    <text x="330" y="565" text-anchor="middle" fill="#888" font-size="15">cleanup suppressed</text>
                    <rect x="570" y="400" width="400" height="230" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="770" y="455" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">FASTED STATE</text>
                    <text x="770" y="498" text-anchor="middle" fill="#fff" font-size="17">AMPK + sirtuins up</text>
                    <text x="770" y="530" text-anchor="middle" fill="#fff" font-size="17">maintenance mode</text>
                    <text x="770" y="565" text-anchor="middle" fill="#888" font-size="15">cleanup crews active</text>
                    <path d="M530 515 L570 515" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="570,515 558,507 558,523" fill="#14b8a6"/>
                    <rect x="150" y="710" width="800" height="100" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="755" text-anchor="middle" fill="#ffd700" font-size="20">Hint: which two sensors rise when fuel</text>
                    <text x="550" y="788" text-anchor="middle" fill="#ffd700" font-size="20">is scarce — and which two programs run?</text>
                </svg>`,
                caption: "Final check: what does fasting trigger in the mitochondrial network?"
            }
        }
    ]
},
{
    id: 4,
    title: "Five Numbers That Predict Your Future",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "The Report Card You've Never Actually Read",
            content: "Somewhere in a patient portal you rarely open sits a set of numbers that predicts your future better than your family history, your horoscope, or your bathroom scale.\n\nFive of them, to be exact. Waist size. Triglycerides. HDL. Blood pressure. Fasting glucose.\n\nCross the line on **three or more**, and you have **metabolic syndrome** — the condition that roughly **1 in 3 American adults** already has, most without knowing it. And when researchers at UNC applied even stricter criteria to national NHANES data (Araújo et al., 2019), only about **12% of US adults** qualified as metabolically healthy.\n\nHere's what makes these five numbers different from most health information: they're **cheap to measure, they move early — years before disease shows up — and every single one responds to things you can do**.\n\nThis lesson teaches you to read your own dashboard: what each number means, what 'optimal' actually looks like (spoiler: it's not the same as 'normal'), and which deeper labs are worth asking for. Not medical advice — think of it as learning the language before your next conversation with your clinician.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">YOUR HIDDEN REPORT CARD</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Five numbers most people never look at</text>
                    <rect x="150" y="170" width="800" height="380" rx="20" fill="rgba(255,255,255,0.05)" stroke="#888" stroke-width="2"/>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-weight="bold" font-size="22">LAB REPORT — UNREAD</text>
                    <rect x="220" y="260" width="660" height="40" rx="10" fill="rgba(99,102,241,0.15)" stroke="#6366f1" stroke-width="1"/>
                    <text x="250" y="287" text-anchor="start" fill="#6366f1" font-size="17">Waist circumference</text>
                    <rect x="220" y="315" width="660" height="40" rx="10" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="1"/>
                    <text x="250" y="342" text-anchor="start" fill="#8b5cf6" font-size="17">Triglycerides</text>
                    <rect x="220" y="370" width="660" height="40" rx="10" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="1"/>
                    <text x="250" y="397" text-anchor="start" fill="#10b981" font-size="17">HDL cholesterol</text>
                    <rect x="220" y="425" width="660" height="40" rx="10" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="1"/>
                    <text x="250" y="452" text-anchor="start" fill="#f59e0b" font-size="17">Blood pressure</text>
                    <rect x="220" y="480" width="660" height="40" rx="10" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="1"/>
                    <text x="250" y="507" text-anchor="start" fill="#3b82f6" font-size="17">Fasting glucose</text>
                    <rect x="100" y="620" width="430" height="160" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="315" y="675" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="24">~1 IN 3</text>
                    <text x="315" y="715" text-anchor="middle" fill="#fff" font-size="17">US adults already has</text>
                    <text x="315" y="747" text-anchor="middle" fill="#fff" font-size="17">metabolic syndrome</text>
                    <rect x="570" y="620" width="430" height="160" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="785" y="675" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="24">ONLY ~12%</text>
                    <text x="785" y="715" text-anchor="middle" fill="#fff" font-size="17">metabolically healthy</text>
                    <text x="785" y="747" text-anchor="middle" fill="#888" font-size="15">Araujo et al. 2019, NHANES</text>
                    <rect x="150" y="850" width="800" height="150" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="905" text-anchor="middle" fill="#ffd700" font-size="20">Cheap to measure. Move years before disease.</text>
                    <text x="550" y="940" text-anchor="middle" fill="#ffd700" font-size="20">Every one responds to what you do.</text>
                    <text x="550" y="975" text-anchor="middle" fill="#888" font-size="16">Time to learn the language of your own dashboard</text>
                </svg>`,
                caption: "Five inexpensive numbers predict metabolic disease years before symptoms"
            }
        },
        {
            type: "concept",
            title: "The Checklist: ATP III Criteria for Metabolic Syndrome",
            content: "The standard definition comes from the **NCEP ATP III criteria** — the checklist clinicians use worldwide. You meet a criterion if you cross the threshold (or take medication for it):\n\n• **Waist circumference**: more than **40 inches (men)** / **35 inches (women)** — measured at the belly button, not your pants size\n\n• **Triglycerides**: **150 mg/dL or higher** (fasting)\n\n• **HDL cholesterol**: below **40 mg/dL (men)** / **50 mg/dL (women)** — this one counts when it's too *low*\n\n• **Blood pressure**: **130/85 mmHg or higher**\n\n• **Fasting glucose**: **100 mg/dL or higher**\n\n**Three or more = metabolic syndrome.**\n\nWhy does a checklist matter? Because these five travel together — they're five windows into the same underlying process, usually **insulin resistance plus excess visceral fat**. And the combination multiplies risk: metabolic syndrome roughly **doubles cardiovascular disease risk** and raises type 2 diabetes risk about **five-fold**.\n\nHere's the empowering part: you can know your score **today**. A tape measure, a drugstore BP cuff, and one standard fasting blood panel cover all five.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE ATP III CHECKLIST</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Cross 3 of 5 lines = metabolic syndrome</text>
                    <rect x="100" y="160" width="900" height="105" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="150" y="205" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">1. WAIST</text>
                    <text x="150" y="240" text-anchor="start" fill="#fff" font-size="17">over 40 in (men) / 35 in (women)</text>
                    <rect x="100" y="285" width="900" height="105" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="150" y="330" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="20">2. TRIGLYCERIDES</text>
                    <text x="150" y="365" text-anchor="start" fill="#fff" font-size="17">150 mg/dL or higher, fasting</text>
                    <rect x="100" y="410" width="900" height="105" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="150" y="455" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">3. HDL — TOO LOW</text>
                    <text x="150" y="490" text-anchor="start" fill="#fff" font-size="17">under 40 (men) / under 50 (women) mg/dL</text>
                    <rect x="100" y="535" width="900" height="105" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="150" y="580" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">4. BLOOD PRESSURE</text>
                    <text x="150" y="615" text-anchor="start" fill="#fff" font-size="17">130/85 mmHg or higher</text>
                    <rect x="100" y="660" width="900" height="105" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="150" y="705" text-anchor="start" fill="#3b82f6" font-weight="bold" font-size="20">5. FASTING GLUCOSE</text>
                    <text x="150" y="740" text-anchor="start" fill="#fff" font-size="17">100 mg/dL or higher</text>
                    <rect x="100" y="810" width="440" height="130" rx="20" fill="rgba(239,68,68,0.12)" stroke="#ef4444" stroke-width="2"/>
                    <text x="320" y="862" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">3+ CRITERIA</text>
                    <text x="320" y="900" text-anchor="middle" fill="#fff" font-size="17">= metabolic syndrome</text>
                    <rect x="560" y="810" width="440" height="130" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="780" y="855" text-anchor="middle" fill="#fff" font-size="17">~2x cardiovascular risk</text>
                    <text x="780" y="890" text-anchor="middle" fill="#fff" font-size="17">~5x type 2 diabetes risk</text>
                    <rect x="150" y="980" width="800" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1030" text-anchor="middle" fill="#ffd700" font-size="20">Tape measure + BP cuff + one fasting panel = your score</text>
                </svg>`,
                caption: "The five ATP III thresholds — three or more defines metabolic syndrome"
            }
        },
        {
            type: "visual",
            title: "Your Five-Gauge Dashboard",
            content: "Think of these five as **gauges on a dashboard**, not pass/fail grades. Each one can sit deep in the green, hover near the line, or cross into the red — and the *direction of drift over years* matters more than any single reading.\n\nA triglyceride reading of 148 isn't a win over 152; both gauges are telling the same story. Watch trajectories, not thresholds.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE FIVE-GAUGE DASHBOARD</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Watch trajectories, not just thresholds</text>
                    <circle cx="290" cy="300" r="115" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="3"/>
                    <path d="M205 350 A100 100 0 0 1 375 350" stroke="#10b981" stroke-width="8" fill="none" opacity="0.35"/>
                    <line x1="290" y1="300" x2="240" y2="230" stroke="#6366f1" stroke-width="5"/>
                    <text x="290" y="320" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="18">WAIST</text>
                    <text x="290" y="445" text-anchor="middle" fill="#888" font-size="15">inches at the navel</text>
                    <circle cx="550" cy="300" r="115" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="3"/>
                    <path d="M465 350 A100 100 0 0 1 635 350" stroke="#10b981" stroke-width="8" fill="none" opacity="0.35"/>
                    <line x1="550" y1="300" x2="550" y2="215" stroke="#8b5cf6" stroke-width="5"/>
                    <text x="550" y="320" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="16">TRIGLYCERIDES</text>
                    <text x="550" y="445" text-anchor="middle" fill="#888" font-size="15">fat in transit</text>
                    <circle cx="810" cy="300" r="115" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="3"/>
                    <path d="M725 350 A100 100 0 0 1 895 350" stroke="#10b981" stroke-width="8" fill="none" opacity="0.35"/>
                    <line x1="810" y1="300" x2="870" y2="235" stroke="#10b981" stroke-width="5"/>
                    <text x="810" y="320" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="18">HDL</text>
                    <text x="810" y="445" text-anchor="middle" fill="#888" font-size="15">higher is better</text>
                    <circle cx="420" cy="620" r="115" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="3"/>
                    <path d="M335 670 A100 100 0 0 1 505 670" stroke="#10b981" stroke-width="8" fill="none" opacity="0.35"/>
                    <line x1="420" y1="620" x2="370" y2="550" stroke="#f59e0b" stroke-width="5"/>
                    <text x="420" y="640" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="16">BLOOD PRESSURE</text>
                    <text x="420" y="765" text-anchor="middle" fill="#888" font-size="15">force on artery walls</text>
                    <circle cx="690" cy="620" r="115" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="3"/>
                    <path d="M605 670 A100 100 0 0 1 775 670" stroke="#10b981" stroke-width="8" fill="none" opacity="0.35"/>
                    <line x1="690" y1="620" x2="640" y2="550" stroke="#3b82f6" stroke-width="5"/>
                    <text x="690" y="640" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="16">FASTING GLUCOSE</text>
                    <text x="690" y="765" text-anchor="middle" fill="#888" font-size="15">morning fuel level</text>
                    <rect x="130" y="820" width="840" height="120" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="868" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">148 IS NOT A WIN OVER 152</text>
                    <text x="550" y="905" text-anchor="middle" fill="#fff" font-size="17">A gauge drifting toward the line tells the same story</text>
                    <rect x="150" y="980" width="800" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1030" text-anchor="middle" fill="#ffd700" font-size="20">Direction of drift over years beats any single reading</text>
                </svg>`,
                caption: "Five gauges, one dashboard — trajectory matters more than any snapshot"
            }
        },
        {
            type: "concept",
            title: "What Each Number Is Actually Telling You",
            content: "These aren't arbitrary lab values — each is a window into a specific physiological process:\n\n• **Waist** is a proxy for **visceral fat**, the metabolically active fat wrapped around your organs. Unlike thigh or hip fat, visceral fat pumps inflammatory signals and free fatty acids straight into the liver.\n\n• **Triglycerides** measure fat in transit. When the liver is flooded with excess energy — especially refined carbohydrate — it packages the surplus into triglyceride-rich particles and ships them out. High fasting triglycerides usually mean an **overloaded liver**, an early insulin-resistance fingerprint.\n\n• **HDL** particles run 'reverse transport' — hauling cholesterol out of tissues and artery walls. Insulin resistance actively **lowers** HDL, which is why low HDL flags trouble.\n\n• **Blood pressure** reflects the force on your artery walls. High insulin makes the kidneys retain sodium and stiffens vessel responses — so BP creeps up alongside the other four, and the endothelial lining takes the beating.\n\n• **Fasting glucose** shows what your metabolism does with **no food on board**. If it's elevated at 7am, your liver is releasing glucose that insulin should be restraining — a sign the hormone's signal is being ignored.\n\nFive gauges, one engine: **insulin resistance and visceral fat** drive them all.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">FIVE WINDOWS, ONE ENGINE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">What each gauge physiologically reflects</text>
                    <ellipse cx="550" cy="270" rx="270" ry="95" fill="rgba(239,68,68,0.15)" stroke="#ef4444" stroke-width="3"/>
                    <text x="550" y="250" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">INSULIN RESISTANCE</text>
                    <text x="550" y="290" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">+ VISCERAL FAT</text>
                    <path d="M330 340 L220 430" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="220,430 232,410 243,423" fill="#14b8a6"/>
                    <path d="M470 360 L430 430" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="430,430 432,408 446,415" fill="#14b8a6"/>
                    <path d="M630 360 L670 430" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="670,430 654,415 668,408" fill="#14b8a6"/>
                    <path d="M770 340 L880 430" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="880,430 857,423 868,410" fill="#14b8a6"/>
                    <rect x="70" y="440" width="290" height="190" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="215" y="490" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="18">WAIST</text>
                    <text x="215" y="527" text-anchor="middle" fill="#fff" font-size="15">visceral fat around</text>
                    <text x="215" y="555" text-anchor="middle" fill="#fff" font-size="15">the organs, feeding</text>
                    <text x="215" y="583" text-anchor="middle" fill="#888" font-size="14">inflammation to the liver</text>
                    <rect x="405" y="440" width="290" height="190" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="490" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="18">TRIGLYCERIDES</text>
                    <text x="550" y="527" text-anchor="middle" fill="#fff" font-size="15">overloaded liver</text>
                    <text x="550" y="555" text-anchor="middle" fill="#fff" font-size="15">shipping out surplus</text>
                    <text x="550" y="583" text-anchor="middle" fill="#888" font-size="14">early IR fingerprint</text>
                    <rect x="740" y="440" width="290" height="190" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="885" y="490" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="18">LOW HDL</text>
                    <text x="885" y="527" text-anchor="middle" fill="#fff" font-size="15">reverse transport</text>
                    <text x="885" y="555" text-anchor="middle" fill="#fff" font-size="15">crew depleted by</text>
                    <text x="885" y="583" text-anchor="middle" fill="#888" font-size="14">insulin resistance</text>
                    <rect x="230" y="680" width="290" height="190" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="375" y="730" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="18">BLOOD PRESSURE</text>
                    <text x="375" y="767" text-anchor="middle" fill="#fff" font-size="15">sodium retention +</text>
                    <text x="375" y="795" text-anchor="middle" fill="#fff" font-size="15">stiffer vessels under</text>
                    <text x="375" y="823" text-anchor="middle" fill="#888" font-size="14">high insulin</text>
                    <rect x="565" y="680" width="290" height="190" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="710" y="730" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="18">FASTING GLUCOSE</text>
                    <text x="710" y="767" text-anchor="middle" fill="#fff" font-size="15">liver ignoring insulin,</text>
                    <text x="710" y="795" text-anchor="middle" fill="#fff" font-size="15">releasing glucose</text>
                    <text x="710" y="823" text-anchor="middle" fill="#888" font-size="14">with no food on board</text>
                    <rect x="150" y="930" width="800" height="110" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="978" text-anchor="middle" fill="#ffd700" font-size="20">Five gauges, one underlying engine —</text>
                    <text x="550" y="1012" text-anchor="middle" fill="#ffd700" font-size="20">which is why they travel together</text>
                </svg>`,
                caption: "Each criterion is a window into the same process: insulin resistance plus visceral fat"
            }
        },
        {
            type: "quiz",
            question: "A 52-year-old woman has: waist 37 inches, triglycerides 165 mg/dL, HDL 52 mg/dL, BP 128/82, fasting glucose 104 mg/dL. Does she meet ATP III criteria for metabolic syndrome?",
            options: [
                { text: "No — only her triglycerides are abnormal, and one criterion isn't enough", correct: false },
                { text: "Yes — waist over 35, triglycerides 150 or higher, and glucose 100 or higher make three criteria", correct: true },
                { text: "No — her blood pressure and HDL are fine, and you need all five criteria", correct: false },
                { text: "Yes — any woman with fasting glucose over 100 automatically has metabolic syndrome", correct: false }
            ],
            explanation: "Count the criteria: waist 37 in exceeds the 35-inch female threshold (1), triglycerides 165 meets the 150+ threshold (2), and fasting glucose 104 meets the 100+ threshold (3). Her HDL (52, above the under-50 line) and BP (128/82, under 130/85) don't count — but three of five is exactly the definition. This is why you can't judge by any single number, in either direction: metabolic syndrome is a pattern, not one bad value.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="160" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">COUNT THE CRITERIA</text>
                    <text x="550" y="222" text-anchor="middle" fill="#fff" font-size="18">Thresholds: waist 40/35 • TG 150 • HDL 40/50</text>
                    <text x="550" y="255" text-anchor="middle" fill="#888" font-size="16">BP 130/85 • glucose 100 — need 3 of 5</text>
                    <rect x="150" y="330" width="800" height="90" rx="15" fill="rgba(255,255,255,0.05)" stroke="#888" stroke-width="2"/>
                    <text x="200" y="385" text-anchor="start" fill="#fff" font-size="18">Waist: 37 in (limit 35)</text>
                    <text x="880" y="385" text-anchor="middle" fill="#888" font-size="20">?</text>
                    <rect x="150" y="440" width="800" height="90" rx="15" fill="rgba(255,255,255,0.05)" stroke="#888" stroke-width="2"/>
                    <text x="200" y="495" text-anchor="start" fill="#fff" font-size="18">Triglycerides: 165 (limit 150)</text>
                    <text x="880" y="495" text-anchor="middle" fill="#888" font-size="20">?</text>
                    <rect x="150" y="550" width="800" height="90" rx="15" fill="rgba(255,255,255,0.05)" stroke="#888" stroke-width="2"/>
                    <text x="200" y="605" text-anchor="start" fill="#fff" font-size="18">HDL: 52 (flag if under 50)</text>
                    <text x="880" y="605" text-anchor="middle" fill="#888" font-size="20">?</text>
                    <rect x="150" y="660" width="800" height="90" rx="15" fill="rgba(255,255,255,0.05)" stroke="#888" stroke-width="2"/>
                    <text x="200" y="715" text-anchor="start" fill="#fff" font-size="18">BP: 128/82 (limit 130/85)</text>
                    <text x="880" y="715" text-anchor="middle" fill="#888" font-size="20">?</text>
                    <rect x="150" y="770" width="800" height="90" rx="15" fill="rgba(255,255,255,0.05)" stroke="#888" stroke-width="2"/>
                    <text x="200" y="825" text-anchor="start" fill="#fff" font-size="18">Fasting glucose: 104 (limit 100)</text>
                    <text x="880" y="825" text-anchor="middle" fill="#888" font-size="20">?</text>
                    <rect x="150" y="920" width="800" height="100" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="965" text-anchor="middle" fill="#ffd700" font-size="20">Check each line against its threshold —</text>
                    <text x="550" y="998" text-anchor="middle" fill="#ffd700" font-size="20">how many are crossed?</text>
                </svg>`,
                caption: "Apply the ATP III thresholds to a real case"
            }
        },
        {
            type: "concept",
            title: "The Deeper Panel Worth Asking For",
            content: "The standard five catch trouble in progress. Four additional labs catch it **earlier** — often a decade earlier:\n\n• **Fasting insulin**. This is the big one. Your pancreas can hold glucose 'normal' for years by pumping out ever more insulin — so glucose looks fine while insulin quietly triples. **Hyperinsulinemia is often the earliest detectable sign** of metabolic dysfunction, preceding type 2 diabetes by 10+ years. Rarely ordered unless you ask.\n\n• **HbA1c**. Glucose bonds to hemoglobin in your red blood cells; A1c measures how much, giving a **~3-month average** of blood glucose. It catches patterns a single fasting draw misses. (5.7-6.4% flags prediabetes.)\n\n• **ApoB**. Every artery-damaging lipoprotein particle carries exactly one ApoB protein, so this test **counts the particles** that can invade artery walls — a better risk measure than standard LDL-C, especially in insulin resistance where particles run small and numerous.\n\n• **Triglyceride:HDL ratio**. Free with any lipid panel — just divide. A ratio **under 1.5 is excellent**; over 3 suggests insulin resistance. It's one of the cheapest insulin-resistance screens available.\n\nNone of these are exotic. They're standard, inexpensive labs — they just aren't part of the default annual physical. You have to know to ask.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE DEEPER PANEL</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Four labs that catch trouble a decade earlier</text>
                    <rect x="80" y="170" width="440" height="270" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="3"/>
                    <text x="300" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">FASTING INSULIN</text>
                    <text x="300" y="268" text-anchor="middle" fill="#fff" font-size="16">The earliest alarm —</text>
                    <text x="300" y="298" text-anchor="middle" fill="#fff" font-size="16">rises years before glucose</text>
                    <text x="300" y="335" text-anchor="middle" fill="#888" font-size="15">hyperinsulinemia precedes</text>
                    <text x="300" y="363" text-anchor="middle" fill="#888" font-size="15">T2 diabetes by 10+ years</text>
                    <text x="300" y="405" text-anchor="middle" fill="#ef4444" font-size="15">rarely ordered unless you ask</text>
                    <rect x="580" y="170" width="440" height="270" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="800" y="225" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="21">HbA1c</text>
                    <text x="800" y="268" text-anchor="middle" fill="#fff" font-size="16">~3-month glucose average</text>
                    <text x="800" y="298" text-anchor="middle" fill="#fff" font-size="16">via sugared hemoglobin</text>
                    <text x="800" y="335" text-anchor="middle" fill="#888" font-size="15">catches patterns one</text>
                    <text x="800" y="363" text-anchor="middle" fill="#888" font-size="15">fasting draw misses</text>
                    <text x="800" y="405" text-anchor="middle" fill="#8b5cf6" font-size="15">5.7-6.4% = prediabetes range</text>
                    <rect x="80" y="480" width="440" height="270" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="300" y="535" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="21">ApoB</text>
                    <text x="300" y="578" text-anchor="middle" fill="#fff" font-size="16">Counts artery-invading</text>
                    <text x="300" y="608" text-anchor="middle" fill="#fff" font-size="16">particles — one ApoB each</text>
                    <text x="300" y="645" text-anchor="middle" fill="#888" font-size="15">beats LDL-C when particles</text>
                    <text x="300" y="673" text-anchor="middle" fill="#888" font-size="15">run small and numerous</text>
                    <text x="300" y="715" text-anchor="middle" fill="#3b82f6" font-size="15">key in insulin resistance</text>
                    <rect x="580" y="480" width="440" height="270" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="800" y="535" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">TG : HDL RATIO</text>
                    <text x="800" y="578" text-anchor="middle" fill="#fff" font-size="16">Free with any lipid panel —</text>
                    <text x="800" y="608" text-anchor="middle" fill="#fff" font-size="16">just divide the two</text>
                    <text x="800" y="645" text-anchor="middle" fill="#888" font-size="15">under 1.5 = excellent</text>
                    <text x="800" y="673" text-anchor="middle" fill="#888" font-size="15">over 3 = suggests IR</text>
                    <text x="800" y="715" text-anchor="middle" fill="#10b981" font-size="15">cheapest IR screen there is</text>
                    <rect x="130" y="810" width="840" height="120" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="858" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">GLUCOSE CAN LOOK NORMAL FOR YEARS</text>
                    <text x="550" y="895" text-anchor="middle" fill="#fff" font-size="17">while insulin quietly triples to hold the line</text>
                    <rect x="150" y="970" width="800" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1020" text-anchor="middle" fill="#ffd700" font-size="20">Standard, inexpensive labs — you just have to ask</text>
                </svg>`,
                caption: "Fasting insulin, HbA1c, ApoB, and TG:HDL catch dysfunction years earlier"
            }
        },
        {
            type: "visual",
            title: "'Normal' Is Not the Same as 'Optimal'",
            content: "Lab 'reference ranges' describe the **population the lab serves** — and in a country where only ~12% of adults are metabolically healthy, 'normal' means 'typical for a fairly unhealthy population.' That's a low bar.\n\n**Optimal** ranges — the values associated with lowest long-term risk in cohort studies — are consistently tighter. Falling 'within normal limits' while drifting away from optimal is exactly how metabolic disease sneaks up over a decade.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">NORMAL vs OPTIMAL</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Reference ranges describe a sick population</text>
                    <rect x="60" y="170" width="460" height="560" rx="20" fill="rgba(245,158,11,0.1)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="290" y="225" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">LAB-SHEET NORMAL</text>
                    <text x="290" y="285" text-anchor="middle" fill="#fff" font-size="17">Fasting glucose: up to 99</text>
                    <text x="290" y="345" text-anchor="middle" fill="#fff" font-size="17">HbA1c: up to 5.6%</text>
                    <text x="290" y="405" text-anchor="middle" fill="#fff" font-size="17">Triglycerides: up to 149</text>
                    <text x="290" y="465" text-anchor="middle" fill="#fff" font-size="17">Fasting insulin: up to ~24</text>
                    <text x="290" y="525" text-anchor="middle" fill="#fff" font-size="17">BP: below 130/85</text>
                    <text x="290" y="600" text-anchor="middle" fill="#888" font-size="15">= typical for a population where</text>
                    <text x="290" y="630" text-anchor="middle" fill="#888" font-size="15">only ~12% are metabolically healthy</text>
                    <text x="290" y="685" text-anchor="middle" fill="#f59e0b" font-size="16">a low bar to clear</text>
                    <rect x="580" y="170" width="460" height="560" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">RISK-BASED OPTIMAL</text>
                    <text x="810" y="285" text-anchor="middle" fill="#fff" font-size="17">Fasting glucose: ~70-90</text>
                    <text x="810" y="345" text-anchor="middle" fill="#fff" font-size="17">HbA1c: ~5.0-5.4%</text>
                    <text x="810" y="405" text-anchor="middle" fill="#fff" font-size="17">Triglycerides: under ~100</text>
                    <text x="810" y="465" text-anchor="middle" fill="#fff" font-size="17">Fasting insulin: single digits</text>
                    <text x="810" y="525" text-anchor="middle" fill="#fff" font-size="17">BP: near 115/75</text>
                    <text x="810" y="600" text-anchor="middle" fill="#888" font-size="15">= values tied to lowest long-term</text>
                    <text x="810" y="630" text-anchor="middle" fill="#888" font-size="15">risk in cohort studies</text>
                    <text x="810" y="685" text-anchor="middle" fill="#10b981" font-size="16">the target worth aiming for</text>
                    <rect x="130" y="790" width="840" height="130" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="840" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">THE SNEAK-UP ZONE</text>
                    <text x="550" y="880" text-anchor="middle" fill="#fff" font-size="17">'Within normal limits' while drifting from optimal —</text>
                    <text x="550" y="908" text-anchor="middle" fill="#888" font-size="15">how disease builds quietly for a decade</text>
                    <rect x="150" y="960" width="800" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1000" text-anchor="middle" fill="#ffd700" font-size="20">Discuss YOUR targets with your clinician —</text>
                    <text x="550" y="1032" text-anchor="middle" fill="#ffd700" font-size="20">context and medications change the picture</text>
                </svg>`,
                caption: "Population-normal is a low bar; risk-based optimal is the real target"
            }
        },
        {
            type: "concept",
            title: "Retire Your BMI: Measure Waist-to-Height Instead",
            content: "BMI — weight divided by height squared — was invented in the 1830s to describe populations, not people. It can't tell **muscle from fat**, or dangerous visceral fat from harmless subcutaneous fat. A muscular person flags 'overweight'; a slim person with organ fat sails through.\n\nThat second case has a name: **TOFI — thin outside, fat inside**. Roughly **one-third of normal-BMI adults are metabolically unhealthy**, carrying visceral fat and insulin resistance behind a 'healthy weight.' Normal weight does not equal metabolic health.\n\nA better screen costs nothing: **waist-to-height ratio**. Measure your waist at the navel, divide by your height (same units). The rule:\n\n• **Under 0.5** — 'keep your waist less than half your height' — is the widely validated target\n• **0.5-0.6** — elevated central fat; metabolic risk climbing\n• **Over 0.6** — high risk zone\n\nMeta-analyses covering hundreds of thousands of people show waist-to-height ratio **outperforms BMI** at predicting cardiometabolic risk, because it tracks the fat that matters — the visceral kind pressing against your organs.\n\nExample: at 5'6\" (66 inches), the target waist is under 33 inches. One tape measure, ten seconds, more information than the bathroom scale gives you all year.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">WAIST-TO-HEIGHT RATIO</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Keep your waist under half your height</text>
                    <rect x="60" y="170" width="460" height="300" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">WHY BMI FAILS</text>
                    <text x="290" y="270" text-anchor="middle" fill="#fff" font-size="16">Cannot tell muscle from fat</text>
                    <text x="290" y="303" text-anchor="middle" fill="#fff" font-size="16">Cannot see visceral fat</text>
                    <text x="290" y="336" text-anchor="middle" fill="#888" font-size="15">1830s population statistic</text>
                    <text x="290" y="385" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="18">TOFI: thin outside, fat inside</text>
                    <text x="290" y="425" text-anchor="middle" fill="#fff" font-size="15">~1/3 of normal-BMI adults are</text>
                    <text x="290" y="452" text-anchor="middle" fill="#fff" font-size="15">metabolically unhealthy</text>
                    <rect x="580" y="170" width="460" height="300" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">THE BETTER SCREEN</text>
                    <text x="810" y="275" text-anchor="middle" fill="#fff" font-size="18">waist at navel / height</text>
                    <text x="810" y="310" text-anchor="middle" fill="#888" font-size="15">same units, ten seconds</text>
                    <text x="810" y="360" text-anchor="middle" fill="#fff" font-size="16">Outperforms BMI in</text>
                    <text x="810" y="390" text-anchor="middle" fill="#fff" font-size="16">meta-analyses of hundreds</text>
                    <text x="810" y="420" text-anchor="middle" fill="#fff" font-size="16">of thousands of people</text>
                    <rect x="100" y="520" width="900" height="90" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="575" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">UNDER 0.5</text>
                    <text x="480" y="575" text-anchor="start" fill="#fff" font-size="18">healthy zone — the target</text>
                    <rect x="100" y="640" width="900" height="90" rx="20" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="695" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">0.5 - 0.6</text>
                    <text x="480" y="695" text-anchor="start" fill="#fff" font-size="18">central fat elevated, risk climbing</text>
                    <rect x="100" y="760" width="900" height="90" rx="20" fill="rgba(239,68,68,0.15)" stroke="#ef4444" stroke-width="2"/>
                    <text x="200" y="815" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="20">OVER 0.6</text>
                    <text x="480" y="815" text-anchor="start" fill="#fff" font-size="18">high-risk zone — act now</text>
                    <rect x="150" y="910" width="800" height="130" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="960" text-anchor="middle" fill="#ffd700" font-size="20">Example: 5 ft 6 in = 66 inches tall</text>
                    <text x="550" y="995" text-anchor="middle" fill="#ffd700" font-size="20">target waist: under 33 inches</text>
                </svg>`,
                caption: "Waist-to-height under 0.5 beats BMI at predicting cardiometabolic risk"
            }
        },
        {
            type: "example",
            title: "Reading a Real Lab Report: Maria's Decade",
            content: "Maria, 48, pulls up her patient portal. Everything says 'within normal limits.' But she's learned to read **trends**, so she lines up ten years of results:\n\n• **Fasting glucose**: 84 → 91 → 96 → 99. Still 'normal' — and climbing 15 points in a decade, one point from the prediabetes line.\n• **Triglycerides**: 88 → 110 → 132 → 146. 'Normal.' Drifting steadily toward 150.\n• **HDL**: 62 → 58 → 54 → 51. 'Normal.' Falling.\n• **TG:HDL ratio** (she computes it herself): 1.4 → 1.9 → 2.4 → **2.9**. From excellent toward the insulin-resistance zone.\n• **Weight**: up only 9 pounds — but her waist is up **4 inches**, and at 5'4\" her waist-to-height ratio just crossed **0.5**.\n\nNo single report ever flagged her. The *pattern* screams early insulin resistance — visible **years** before a diagnosis, while it's still highly reversible.\n\nMaria books a visit, asks for a **fasting insulin and HbA1c**, and starts strength training and post-meal walks. That's the entire skill: **plot your numbers over years, not visits**. Any spreadsheet — or a sheet of paper — turns 'within normal limits' into a story you can actually read.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">MARIA'S DECADE OF DATA</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Every value 'normal' — the trend says otherwise</text>
                    <rect x="100" y="160" width="900" height="440" rx="20" fill="rgba(255,255,255,0.05)" stroke="#888" stroke-width="2"/>
                    <line x1="180" y1="540" x2="950" y2="540" stroke="#888" stroke-width="2"/>
                    <line x1="180" y1="220" x2="180" y2="540" stroke="#888" stroke-width="2"/>
                    <text x="270" y="575" text-anchor="middle" fill="#888" font-size="15">2016</text>
                    <text x="500" y="575" text-anchor="middle" fill="#888" font-size="15">2019</text>
                    <text x="730" y="575" text-anchor="middle" fill="#888" font-size="15">2022</text>
                    <text x="930" y="575" text-anchor="middle" fill="#888" font-size="15">2026</text>
                    <path d="M270 480 L500 440 L730 400 L930 370" stroke="#3b82f6" stroke-width="4" fill="none"/>
                    <circle cx="930" cy="370" r="8" fill="#3b82f6"/>
                    <text x="850" y="340" text-anchor="middle" fill="#3b82f6" font-size="16">glucose 84 to 99</text>
                    <path d="M270 500 L500 430 L730 350 L930 290" stroke="#8b5cf6" stroke-width="4" fill="none"/>
                    <circle cx="930" cy="290" r="8" fill="#8b5cf6"/>
                    <text x="830" y="260" text-anchor="middle" fill="#8b5cf6" font-size="16">triglycerides 88 to 146</text>
                    <path d="M270 300 L500 330 L730 370 L930 410" stroke="#10b981" stroke-width="4" fill="none"/>
                    <circle cx="930" cy="410" r="8" fill="#10b981"/>
                    <text x="860" y="450" text-anchor="middle" fill="#10b981" font-size="16">HDL 62 to 51</text>
                    <line x1="180" y1="250" x2="950" y2="250" stroke="#ef4444" stroke-width="2" stroke-dasharray="8"/>
                    <text x="320" y="240" text-anchor="middle" fill="#ef4444" font-size="14">thresholds still not crossed — yet</text>
                    <rect x="100" y="650" width="440" height="170" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="320" y="705" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">TG:HDL RATIO</text>
                    <text x="320" y="748" text-anchor="middle" fill="#fff" font-size="18">1.4 to 1.9 to 2.4 to 2.9</text>
                    <text x="320" y="785" text-anchor="middle" fill="#888" font-size="15">drifting toward the IR zone</text>
                    <rect x="560" y="650" width="440" height="170" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="780" y="705" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">WAIST + 4 INCHES</text>
                    <text x="780" y="748" text-anchor="middle" fill="#fff" font-size="18">weight up only 9 lb</text>
                    <text x="780" y="785" text-anchor="middle" fill="#888" font-size="15">waist-to-height crossed 0.5</text>
                    <rect x="130" y="880" width="840" height="160" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="935" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">THE SKILL: PLOT YEARS, NOT VISITS</text>
                    <text x="550" y="978" text-anchor="middle" fill="#fff" font-size="18">The pattern shows early insulin resistance while</text>
                    <text x="550" y="1010" text-anchor="middle" fill="#fff" font-size="18">it is still highly reversible</text>
                </svg>`,
                caption: "Ten years of 'normal' results form an unmistakable trend line"
            }
        },
        {
            type: "example",
            title: "Fitness Numbers Are Vital Signs Too",
            content: "Your dashboard isn't complete with blood work alone. Two **fitness numbers** predict your future as strongly as anything a needle can draw:\n\n**Grip strength.** The **PURE study** (Lancet, 2015) tracked nearly **140,000 adults across 17 countries** with a simple handgrip device. Every **5 kg drop** in grip strength meant about **16% higher all-cause mortality** — and grip predicted cardiovascular death *better than systolic blood pressure did*. Grip is a proxy for total-body muscle, and muscle (as you now know) is your glucose sink.\n\n**VO2max** — your engine's peak aerobic output. **Mandsager et al. 2018** (JAMA Network Open) analyzed **122,007 patients** at the Cleveland Clinic who had treadmill-tested fitness. The findings stunned even cardiologists: **low fitness carried a bigger mortality risk than smoking, diabetes, or heart disease**. Elite fitness in the 70+ group kept paying off — the study found **no upper limit** to the benefit.\n\nAnd the kicker: being in the *least-fit 25%* compared to the most fit carried a risk ratio larger than most treatable diseases — yet fitness never appears on a lab report.\n\nVO2max falls roughly **10% per decade** if you're sedentary. Zone 2 plus intervals bends that curve. Your gym sessions are, quite literally, moving a vital sign.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">FITNESS AS A VITAL SIGN</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Two numbers no lab report includes</text>
                    <rect x="60" y="170" width="460" height="380" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="290" y="225" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">GRIP STRENGTH</text>
                    <text x="290" y="262" text-anchor="middle" fill="#888" font-size="15">PURE study, Lancet 2015</text>
                    <text x="290" y="292" text-anchor="middle" fill="#888" font-size="15">~140,000 adults, 17 countries</text>
                    <rect x="120" y="330" width="340" height="90" rx="15" fill="rgba(239,68,68,0.15)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="368" text-anchor="middle" fill="#fff" font-size="16">every 5 kg weaker grip =</text>
                    <text x="290" y="400" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="18">~16% higher mortality</text>
                    <text x="290" y="465" text-anchor="middle" fill="#fff" font-size="16">Predicted CV death better</text>
                    <text x="290" y="495" text-anchor="middle" fill="#fff" font-size="16">than systolic blood pressure</text>
                    <text x="290" y="530" text-anchor="middle" fill="#888" font-size="14">grip = proxy for total muscle</text>
                    <rect x="580" y="170" width="460" height="380" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="810" y="225" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="22">VO2MAX</text>
                    <text x="810" y="262" text-anchor="middle" fill="#888" font-size="15">Mandsager 2018, JAMA Netw Open</text>
                    <text x="810" y="292" text-anchor="middle" fill="#888" font-size="15">122,007 Cleveland Clinic patients</text>
                    <rect x="640" y="330" width="340" height="90" rx="15" fill="rgba(239,68,68,0.15)" stroke="#ef4444" stroke-width="2"/>
                    <text x="810" y="368" text-anchor="middle" fill="#fff" font-size="16">low fitness riskier than</text>
                    <text x="810" y="400" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="18">smoking or diabetes</text>
                    <text x="810" y="465" text-anchor="middle" fill="#fff" font-size="16">No upper limit found —</text>
                    <text x="810" y="495" text-anchor="middle" fill="#fff" font-size="16">elite fitness kept paying off</text>
                    <text x="810" y="530" text-anchor="middle" fill="#888" font-size="14">even in the 70+ age group</text>
                    <rect x="130" y="610" width="840" height="170" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="665" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">THE SEDENTARY DEFAULT</text>
                    <text x="550" y="708" text-anchor="middle" fill="#fff" font-size="18">VO2max falls ~10% per decade without training</text>
                    <text x="550" y="742" text-anchor="middle" fill="#888" font-size="16">Zone 2 + intervals bend the curve at any age</text>
                    <rect x="150" y="840" width="800" height="180" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="895" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="21">TRACK THEM LIKE LABS</text>
                    <text x="550" y="940" text-anchor="middle" fill="#fff" font-size="18">Grip: inexpensive hand dynamometer</text>
                    <text x="550" y="975" text-anchor="middle" fill="#fff" font-size="18">VO2max: watch estimate or 12-min walk-run test</text>
                </svg>`,
                caption: "Grip strength and VO2max predict mortality as strongly as any blood test"
            }
        },
        {
            type: "application",
            title: "Build Your Metabolic Dashboard This Month",
            content: "Turn this lesson into a one-page tracking sheet you update yearly:\n\n1. **Measure the free stuff today** — waist at the navel (relaxed, after exhaling), waist divided by height, and blood pressure (many pharmacies have free cuffs; take 2-3 readings on different days).\n\n2. **Request the panel at your next visit** — say: 'Along with the standard panel, could we add **fasting insulin, HbA1c, and ApoB**? I'm tracking my metabolic health over time.' These are routine, inexpensive tests; most clinicians are glad you asked. If cost is an issue, ask which are covered as preventive care.\n\n3. **Compute your two ratios** — triglycerides divided by HDL (aim under 1.5-2), and waist divided by height (aim under 0.5).\n\n4. **Add two fitness vitals** — grip strength (a hand dynamometer costs about $30) and an estimated VO2max from a fitness watch or a 12-minute walk-run test.\n\n5. **Build the sheet** — one row per year; columns: date, waist, W:H ratio, BP, fasting glucose, fasting insulin, HbA1c, triglycerides, HDL, TG:HDL, ApoB, grip, VO2max. Pull past results from your patient portal to backfill the trend.\n\nReview it with your clinician — trends, not single values, are where the conversation gets useful. **This sheet is information, not diagnosis.**",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">YOUR YEARLY DASHBOARD</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Five steps to a one-page tracking sheet</text>
                    <rect x="150" y="160" width="800" height="115" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="212" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="22">1.</text>
                    <text x="245" y="212" text-anchor="start" fill="#fff" font-size="19">Measure free stuff: waist, W:H, BP</text>
                    <text x="245" y="248" text-anchor="start" fill="#888" font-size="16">tape measure + pharmacy cuff, today</text>
                    <rect x="150" y="305" width="800" height="115" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="357" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="22">2.</text>
                    <text x="245" y="357" text-anchor="start" fill="#fff" font-size="19">Ask: fasting insulin, HbA1c, ApoB</text>
                    <text x="245" y="393" text-anchor="start" fill="#888" font-size="16">routine labs — you just have to request them</text>
                    <rect x="150" y="450" width="800" height="115" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="502" text-anchor="start" fill="#10b981" font-weight="bold" font-size="22">3.</text>
                    <text x="245" y="502" text-anchor="start" fill="#fff" font-size="19">Compute ratios: TG:HDL and waist:height</text>
                    <text x="245" y="538" text-anchor="start" fill="#888" font-size="16">targets: under 1.5-2 and under 0.5</text>
                    <rect x="150" y="595" width="800" height="115" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="647" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="22">4.</text>
                    <text x="245" y="647" text-anchor="start" fill="#fff" font-size="19">Add fitness vitals: grip + VO2max estimate</text>
                    <text x="245" y="683" text-anchor="start" fill="#888" font-size="16">$30 dynamometer, watch or walk-run test</text>
                    <rect x="150" y="740" width="800" height="115" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="792" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="22">5.</text>
                    <text x="245" y="792" text-anchor="start" fill="#fff" font-size="19">One row per year — backfill from your portal</text>
                    <text x="245" y="828" text-anchor="start" fill="#888" font-size="16">review trends with your clinician annually</text>
                    <rect x="150" y="910" width="800" height="130" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="960" text-anchor="middle" fill="#ffd700" font-size="20">Information, not diagnosis —</text>
                    <text x="550" y="995" text-anchor="middle" fill="#ffd700" font-size="20">the trend line is the conversation starter</text>
                </svg>`,
                caption: "Five steps to a yearly metabolic tracking sheet you own"
            }
        },
        {
            type: "quote",
            content: "Take care of your body. It's the only place you have to live.",
            author: "Jim Rohn",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">WISDOM</text>
                    <rect x="100" y="180" width="900" height="260" rx="20" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="160" y="260" text-anchor="start" fill="#8b5cf6" font-size="60">&#8220;</text>
                    <text x="550" y="290" text-anchor="middle" fill="#fff" font-style="italic" font-size="24">Take care of your body. It's the only</text>
                    <text x="550" y="335" text-anchor="middle" fill="#fff" font-style="italic" font-size="24">place you have to live.</text>
                    <text x="900" y="400" text-anchor="end" fill="#8b5cf6" font-size="19">— Jim Rohn</text>
                    <circle cx="550" cy="640" r="130" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="3"/>
                    <path d="M550 570 C510 530 450 555 460 605 C468 645 520 670 550 695 C580 670 632 645 640 605 C650 555 590 530 550 570 Z" fill="rgba(16,185,129,0.35)" stroke="#10b981" stroke-width="3"/>
                    <rect x="150" y="850" width="800" height="150" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="905" text-anchor="middle" fill="#ffd700" font-size="20">The five numbers are how you check</text>
                    <text x="550" y="940" text-anchor="middle" fill="#ffd700" font-size="20">on the only home you will ever have —</text>
                    <text x="550" y="975" text-anchor="middle" fill="#888" font-size="16">once a year, ten minutes, decades of payoff</text>
                </svg>`,
                caption: "A moment of reflection before your final check"
            }
        },
        {
            type: "quiz",
            question: "Why can a 'normal' fasting glucose give false reassurance about metabolic health?",
            options: [
                { text: "Fasting glucose machines are unreliable and often read 20+ points too low", correct: false },
                { text: "The pancreas can hold glucose normal for years by secreting extra insulin — so glucose stays fine while fasting insulin quietly climbs", correct: true },
                { text: "Glucose only matters after meals; the fasting value has no clinical significance", correct: false },
                { text: "Normal ranges are set too strictly, so most healthy people falsely appear diabetic", correct: false }
            ],
            explanation: "This is compensated insulin resistance: as tissues stop responding, the pancreas pumps out more insulin to force glucose into cells — holding fasting glucose 'normal' for as long as a decade while hyperinsulinemia builds. That's why fasting insulin (with HbA1c, TG:HDL ratio, and waist-to-height) catches trouble earlier than glucose alone, and why 'within normal limits' on one number is not the same as metabolically healthy. Reference ranges are, if anything, too loose — not too strict.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="130" width="800" height="170" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="190" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE HIDDEN DECADE</text>
                    <text x="550" y="232" text-anchor="middle" fill="#fff" font-size="18">Glucose: 'normal' year after year</text>
                    <text x="550" y="265" text-anchor="middle" fill="#888" font-size="16">So why did diabetes still arrive?</text>
                    <rect x="100" y="370" width="900" height="380" rx="20" fill="rgba(255,255,255,0.05)" stroke="#888" stroke-width="2"/>
                    <line x1="180" y1="690" x2="950" y2="690" stroke="#888" stroke-width="2"/>
                    <line x1="180" y1="420" x2="180" y2="690" stroke="#888" stroke-width="2"/>
                    <path d="M200 640 L400 638 L600 630 L800 610 L930 560" stroke="#3b82f6" stroke-width="5" fill="none"/>
                    <text x="350" y="615" text-anchor="middle" fill="#3b82f6" font-size="17">glucose: looks flat and fine</text>
                    <path d="M200 620 L400 560 L600 500 L800 460 L930 430" stroke="#ef4444" stroke-width="5" stroke-dasharray="10" fill="none"/>
                    <text x="480" y="470" text-anchor="middle" fill="#ef4444" font-size="17">insulin: quietly tripling</text>
                    <text x="565" y="725" text-anchor="middle" fill="#888" font-size="15">10+ years</text>
                    <rect x="150" y="800" width="800" height="110" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="845" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="19">WHAT THE STANDARD PANEL MISSES</text>
                    <text x="550" y="882" text-anchor="middle" fill="#fff" font-size="17">the rising line is almost never ordered</text>
                    <rect x="150" y="950" width="800" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="990" text-anchor="middle" fill="#ffd700" font-size="20">Hint: which hormone compensates —</text>
                    <text x="550" y="1022" text-anchor="middle" fill="#ffd700" font-size="20">and what does that hide?</text>
                </svg>`,
                caption: "Final check: the mechanism behind falsely reassuring glucose"
            }
        }
    ]
},
{
    id: 5,
    title: "The Blood Sugar Rollercoaster",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "You've Felt the Crash. Here's What It Actually Was.",
            content: "It's 2:47 PM. You ate a perfectly normal lunch — a sandwich, some chips, maybe a sweet tea. Now your eyelids weigh a hundred pounds, your focus is gone, and something in your brain is whispering *vending machine*.\n\nThat's not laziness. That's not a character flaw. That's your blood sugar on a **rollercoaster** — a steep spike after eating, followed by a crash that leaves you tired, foggy, and craving the exact foods that started the ride.\n\nHere's the part almost nobody knows: when Stanford researchers put continuous glucose monitors on people with 'normal' lab results, many of them were spiking into **prediabetic and even diabetic ranges** after ordinary meals. Their annual checkups said fine. Their actual glucose said rollercoaster.\n\nIn this lesson you'll learn what happens in the 2 hours after you eat, why the crash hits so hard, why decades of spikes quietly damage vessels and nerves — and the surprisingly small tactics, backed by real trials, that flatten the ride.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE 2:47 PM CRASH</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Your afternoon, explained by one curve</text>
                    <line x1="120" y1="820" x2="1000" y2="820" stroke="#888" stroke-width="2"/>
                    <line x1="120" y1="820" x2="120" y2="180" stroke="#888" stroke-width="2"/>
                    <text x="80" y="510" text-anchor="middle" fill="#888" font-size="16" transform="rotate(-90 80 510)">Blood glucose</text>
                    <text x="560" y="870" text-anchor="middle" fill="#888" font-size="16">Time after lunch</text>
                    <line x1="120" y1="620" x2="1000" y2="620" stroke="#10b981" stroke-width="2" stroke-dasharray="8" opacity="0.5"/>
                    <text x="980" y="605" text-anchor="end" fill="#10b981" font-size="16">Steady zone</text>
                    <path d="M140 640 C 240 630, 300 300, 420 260 C 520 230, 580 420, 660 700 C 720 900, 800 760, 980 660" stroke="#ef4444" stroke-width="5" fill="none"/>
                    <circle cx="420" cy="260" r="14" fill="#f59e0b"/>
                    <text x="420" y="215" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">THE SPIKE</text>
                    <circle cx="680" cy="770" r="14" fill="#ef4444"/>
                    <text x="700" y="960" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">THE CRASH: 2:47 PM</text>
                    <text x="700" y="995" text-anchor="middle" fill="#888" font-size="16">Fatigue, fog, cravings</text>
                    <rect x="180" y="1020" width="740" height="60" rx="16" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1058" text-anchor="middle" fill="#ffd700" font-size="18">What goes up fast comes down hard</text>
                </svg>`,
                caption: "The spike-and-crash pattern behind your afternoon slump"
            }
        },
        {
            type: "concept",
            title: "The 2 Hours After You Eat",
            content: "Every time you eat carbohydrates — bread, rice, fruit, sugar — they're broken down into **glucose**, which enters your bloodstream. Within 15–30 minutes, blood glucose rises. Then your pancreas responds.\n\n**The normal sequence:**\n• **Glucose rises** — how high depends on what you ate, how fast it digests, and what you ate it with\n• **Insulin is released** — your pancreas secretes insulin, the 'storage hormone,' which acts like a key unlocking your cells\n• **Glucose gets stored** — muscle and liver take up glucose as **glycogen** (short-term fuel); once those tanks are full, the surplus is converted to **fat**\n• **Levels return to baseline** — ideally within about 2 hours, with a gentle rise and gentle fall\n\nIn a metabolically healthy person, this curve looks like a rolling hill. Fasting glucose sits around **70–99 mg/dL**, and even after a meal it stays mostly under **140 mg/dL**.\n\nThe trouble starts when the hill becomes a mountain — a fast, high spike that forces a huge insulin surge. That surge is what sets up the crash you'll meet on the next card.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">AFTER THE FIRST BITE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">The four-step glucose handling sequence</text>
                    <rect x="150" y="160" width="800" height="150" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="215" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">1. GLUCOSE RISES</text>
                    <text x="550" y="255" text-anchor="middle" fill="#fff" font-size="18">Carbs digest into glucose in 15-30 min</text>
                    <text x="550" y="288" text-anchor="middle" fill="#888" font-size="16">Speed depends on the food and its company</text>
                    <path d="M550 310 L550 350" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,360 540,344 560,344" fill="#14b8a6"/>
                    <rect x="150" y="370" width="800" height="150" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="425" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">2. INSULIN RESPONDS</text>
                    <text x="550" y="465" text-anchor="middle" fill="#fff" font-size="18">Pancreas releases the storage hormone</text>
                    <text x="550" y="498" text-anchor="middle" fill="#888" font-size="16">Insulin is the key that unlocks your cells</text>
                    <path d="M550 520 L550 560" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,570 540,554 560,554" fill="#14b8a6"/>
                    <rect x="150" y="580" width="800" height="150" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="635" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">3. STORAGE</text>
                    <text x="550" y="675" text-anchor="middle" fill="#fff" font-size="18">Muscle and liver store glycogen first</text>
                    <text x="550" y="708" text-anchor="middle" fill="#888" font-size="16">Overflow beyond full tanks becomes fat</text>
                    <path d="M550 730 L550 770" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,780 540,764 560,764" fill="#14b8a6"/>
                    <rect x="150" y="790" width="800" height="150" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="845" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">4. BACK TO BASELINE</text>
                    <text x="550" y="885" text-anchor="middle" fill="#fff" font-size="18">Healthy curve settles within about 2 hours</text>
                    <text x="550" y="918" text-anchor="middle" fill="#888" font-size="16">A rolling hill, not a mountain</text>
                    <rect x="200" y="990" width="700" height="70" rx="18" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1033" text-anchor="middle" fill="#ffd700" font-size="18">Healthy: fasting 70-99, meals mostly under 140 mg/dL</text>
                </svg>`,
                caption: "Rise, insulin, storage, return — the healthy glucose sequence"
            }
        },
        {
            type: "visual",
            title: "Anatomy of a Spike and Crash",
            content: "When you eat fast-digesting carbs alone — white bread, juice, cereal, candy — glucose floods in faster than your body planned for. Your pancreas panics and **oversecretes insulin**.\n\nThat oversized insulin surge doesn't just bring glucose back to baseline. It often **overshoots**, dragging blood sugar below where you started. This dip is called **reactive hypoglycemia** — and it's the biology behind the crash.\n\n**What the dip feels like:**\n• Sudden fatigue and brain fog 1–3 hours after eating\n• Shakiness, irritability ('hangry'), poor concentration\n• Intense cravings for quick carbs — your brain's emergency signal for fast fuel\n\nAnd here's the vicious loop: the crash makes you crave exactly the foods that cause the next spike. Ride the rollercoaster at breakfast, and you may ride it all day.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">SPIKE, SURGE, CRASH</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Why the dip below baseline drives cravings</text>
                    <line x1="120" y1="760" x2="1000" y2="760" stroke="#888" stroke-width="2"/>
                    <line x1="120" y1="160" x2="120" y2="760" stroke="#888" stroke-width="2"/>
                    <line x1="120" y1="560" x2="1000" y2="560" stroke="#10b981" stroke-width="2" stroke-dasharray="8" opacity="0.6"/>
                    <text x="985" y="545" text-anchor="end" fill="#10b981" font-size="16">Baseline glucose</text>
                    <path d="M140 570 C 220 560, 280 220, 380 210 C 470 205, 520 380, 600 640 C 650 800, 730 720, 980 600" stroke="#ef4444" stroke-width="5" fill="none"/>
                    <path d="M140 700 C 260 700, 320 330, 430 320 C 540 315, 620 560, 720 620 C 810 670, 900 690, 980 700" stroke="#6366f1" stroke-width="4" fill="none" stroke-dasharray="10"/>
                    <circle cx="380" cy="210" r="13" fill="#f59e0b"/>
                    <text x="380" y="170" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="19">1. FAST CARB SPIKE</text>
                    <circle cx="430" cy="320" r="13" fill="#6366f1"/>
                    <text x="600" y="290" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="19">2. INSULIN SURGE</text>
                    <circle cx="620" cy="690" r="13" fill="#ef4444"/>
                    <text x="620" y="820" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="19">3. REACTIVE HYPOGLYCEMIA</text>
                    <text x="620" y="852" text-anchor="middle" fill="#888" font-size="16">Below baseline: fog, shakiness, hunger</text>
                    <rect x="90" y="900" width="440" height="130" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="310" y="950" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">THE CRASH SAYS</text>
                    <text x="310" y="990" text-anchor="middle" fill="#fff" font-size="17">Eat quick carbs NOW</text>
                    <path d="M540 965 L580 965" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="590,965 574,955 574,975" fill="#14b8a6"/>
                    <rect x="600" y="900" width="440" height="130" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="820" y="950" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">WHICH TRIGGERS</text>
                    <text x="820" y="990" text-anchor="middle" fill="#fff" font-size="17">The next spike. Repeat.</text>
                </svg>`,
                caption: "The insulin overshoot creates the crash — and the craving loop"
            }
        },
        {
            type: "example",
            title: "Stanford Put CGMs on 'Healthy' People. Uh-Oh.",
            content: "In 2018, researchers at Stanford led by Michael Snyder ran a now-famous experiment (**Hall et al., PLOS Biology 2018**). They fitted **57 adults without diagnosed diabetes** with continuous glucose monitors and watched what actually happened after real-world meals.\n\n**What they found:**\n• People fell into distinct **'glucotypes'** — low, moderate, and severe spikers — even when standard labs called them normal\n• Many participants classified as healthy spent significant time with glucose in the **prediabetic range**, and some spiked into the **diabetic range** after ordinary foods\n• A plain bowl of **cornflakes and milk** pushed the majority of participants — about **80%** — above 140 mg/dL, the prediabetic post-meal threshold\n• Responses were highly **individual**: the same cookie could barely move one person and send another soaring\n\nThe takeaway isn't panic — it's that a single fasting glucose test is a snapshot of a rollercoaster taken from far away. What your glucose does all day, after your actual meals, is a different and often surprising story.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE GLUCOTYPES STUDY</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Hall et al., PLOS Biology 2018 - Stanford</text>
                    <rect x="150" y="150" width="800" height="110" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="550" y="198" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="20">57 ADULTS, NO DIABETES DIAGNOSIS</text>
                    <text x="550" y="235" text-anchor="middle" fill="#fff" font-size="17">Wore CGMs through normal life and test meals</text>
                    <rect x="80" y="300" width="300" height="220" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="230" y="355" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">LOW</text>
                    <text x="230" y="395" text-anchor="middle" fill="#fff" font-size="16">Gentle curves</text>
                    <path d="M130 470 C 180 465, 210 440, 250 438 C 290 437, 310 460, 330 465" stroke="#10b981" stroke-width="4" fill="none"/>
                    <rect x="400" y="300" width="300" height="220" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="355" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">MODERATE</text>
                    <text x="550" y="395" text-anchor="middle" fill="#fff" font-size="16">Regular big swings</text>
                    <path d="M450 480 C 500 470, 520 400, 560 400 C 600 400, 620 460, 650 470" stroke="#f59e0b" stroke-width="4" fill="none"/>
                    <rect x="720" y="300" width="300" height="220" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="870" y="355" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">SEVERE</text>
                    <text x="870" y="395" text-anchor="middle" fill="#fff" font-size="16">Diabetic-range spikes</text>
                    <path d="M770 490 C 810 480, 830 340, 870 340 C 910 340, 930 460, 970 480" stroke="#ef4444" stroke-width="4" fill="none"/>
                    <rect x="150" y="580" width="800" height="170" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="635" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">THE CORNFLAKES FINDING</text>
                    <text x="550" y="675" text-anchor="middle" fill="#fff" font-size="18">About 80% spiked over 140 mg/dL</text>
                    <text x="550" y="710" text-anchor="middle" fill="#888" font-size="16">after a standard bowl of cornflakes and milk</text>
                    <rect x="150" y="800" width="800" height="130" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="850" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="20">THE WOW FACT</text>
                    <text x="550" y="890" text-anchor="middle" fill="#fff" font-size="17">Normal lab results can hide a severe-spiker pattern</text>
                    <text x="550" y="990" text-anchor="middle" fill="#888" font-size="16">A fasting test is one photo of a rollercoaster.</text>
                    <text x="550" y="1022" text-anchor="middle" fill="#888" font-size="16">A CGM is the whole ride, frame by frame.</text>
                </svg>`,
                caption: "Three glucotypes hiding inside 'normal' lab results"
            }
        },
        {
            type: "quiz",
            question: "In the Stanford 'glucotypes' study (Hall et al., 2018), what surprising pattern did CGMs reveal in adults without diagnosed diabetes?",
            options: [
                { text: "Nearly all participants kept glucose in the healthy range, confirming their normal lab results", correct: false },
                { text: "Many spiked into prediabetic or even diabetic glucose ranges after ordinary meals, despite normal standard labs", correct: true },
                { text: "Only participants who were overweight showed any glucose spikes after meals", correct: false },
                { text: "Everyone responded almost identically to the same foods, making personal testing unnecessary", correct: false }
            ],
            explanation: "The study's headline finding was that 'normal' can hide a rollercoaster: many non-diabetic participants — including lean ones — spiked into prediabetic or diabetic ranges after everyday foods like cornflakes. Responses were also highly individual, which is the opposite of everyone reacting identically. Body weight didn't neatly predict who spiked, which is why the standard fasting snapshot missed these severe-spiker patterns entirely.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE GLUCOTYPES STUDY</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">What did CGMs reveal about 'healthy' adults?</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">Stanford, PLOS Biology 2018</text>
                    <rect x="200" y="360" width="700" height="240" rx="20" fill="rgba(255,255,255,0.05)" stroke="#888" stroke-width="2"/>
                    <text x="550" y="415" text-anchor="middle" fill="#fff" font-size="19">Standard labs said: NORMAL</text>
                    <path d="M550 440 L550 480" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,490 540,474 560,474" fill="#14b8a6"/>
                    <text x="550" y="530" text-anchor="middle" fill="#ef4444" font-size="19">The CGM said: something else entirely</text>
                    <text x="550" y="568" text-anchor="middle" fill="#888" font-size="16">Which answer matches the data?</text>
                    <path d="M200 720 C 300 700, 360 420, 460 410 C 560 405, 620 640, 720 700 C 820 750, 900 720, 950 700" stroke="#f59e0b" stroke-width="5" fill="none"/>
                    <line x1="150" y1="500" x2="990" y2="500" stroke="#ef4444" stroke-width="2" stroke-dasharray="8" opacity="0.4"/>
                    <rect x="200" y="900" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="950" text-anchor="middle" fill="#ffd700" font-size="19">Think: snapshot vs. the whole ride</text>
                </svg>`,
                caption: "Test your understanding of what CGMs uncovered"
            }
        },
        {
            type: "concept",
            title: "Variability Beats Averages: What a CGM Really Tells You",
            content: "Your yearly labs report **averages and snapshots**: one fasting glucose reading, and HbA1c (a rough 3-month average). But two people can share the same average with wildly different realities. One cruises at a steady 100 mg/dL. The other swings between 70 and 190 — and averages 100.\n\nThat swing has a name: **glycemic variability**. Growing evidence links high variability — independent of average glucose — with **oxidative stress, blood vessel dysfunction, and worse energy and hunger regulation**. The rollercoaster itself does damage, not just the altitude.\n\nA **continuous glucose monitor (CGM)** is a small sensor on the back of your arm that reads glucose around the clock for about two weeks. It reveals:\n• **Which specific meals** spike YOU — remember, responses are individual\n• **How high and how long** your spikes run, and whether you crash after\n• What sleep, stress, and a post-meal walk visibly do to your curve\n\n**Who benefits most?** People with prediabetes or strong family history, and anyone who wants a few weeks of personal data. You don't need one forever — even **2–4 weeks** teaches most people their personal trigger foods. And the free alternative: notice how you feel 90 minutes after meals. Crashes are data too.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">SAME AVERAGE, DIFFERENT RIDE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Why glycemic variability matters</text>
                    <rect x="80" y="150" width="450" height="330" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="305" y="205" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">PERSON A: STEADY</text>
                    <text x="305" y="240" text-anchor="middle" fill="#888" font-size="16">Average 100 mg/dL</text>
                    <path d="M130 380 C 200 370, 250 360, 305 365 C 360 370, 420 360, 480 370" stroke="#10b981" stroke-width="4" fill="none"/>
                    <text x="305" y="445" text-anchor="middle" fill="#fff" font-size="16">Gentle waves, steady energy</text>
                    <rect x="570" y="150" width="450" height="330" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="795" y="205" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">PERSON B: ROLLERCOASTER</text>
                    <text x="795" y="240" text-anchor="middle" fill="#888" font-size="16">Also averages 100 mg/dL</text>
                    <path d="M620 400 C 660 280, 700 270, 730 350 C 760 430, 790 260, 830 300 C 870 340, 890 420, 970 290" stroke="#ef4444" stroke-width="4" fill="none"/>
                    <text x="795" y="445" text-anchor="middle" fill="#fff" font-size="16">70 to 190 swings, crash cycles</text>
                    <rect x="150" y="530" width="800" height="120" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="580" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">HIGH VARIABILITY IS LINKED TO</text>
                    <text x="550" y="620" text-anchor="middle" fill="#fff" font-size="17">Oxidative stress, vessel dysfunction, hunger swings</text>
                    <rect x="150" y="690" width="800" height="230" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="742" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">WHAT A CGM SHOWS YOU</text>
                    <text x="550" y="785" text-anchor="middle" fill="#fff" font-size="17">Which meals spike YOU specifically</text>
                    <text x="550" y="820" text-anchor="middle" fill="#fff" font-size="17">Spike height, duration, and crashes</text>
                    <text x="550" y="855" text-anchor="middle" fill="#fff" font-size="17">Effects of sleep, stress, and walks</text>
                    <text x="550" y="893" text-anchor="middle" fill="#888" font-size="16">Even 2-4 weeks of data teaches your triggers</text>
                    <rect x="200" y="960" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1010" text-anchor="middle" fill="#ffd700" font-size="19">Averages hide the ride. Variability reveals it.</text>
                </svg>`,
                caption: "Two identical averages, two very different metabolic realities"
            }
        },
        {
            type: "concept",
            title: "Why Chronic Spikes Do Damage (Glycation and Oxidative Stress)",
            content: "A single spike isn't dangerous. Thousands of them, decade after decade, are — and here's the mechanism.\n\n**Glycation: sugar sticks to things.** Glucose is chemically sticky. At high concentrations it bonds to proteins in your blood vessels, nerves, skin, and eyes, forming **advanced glycation end-products (AGEs)** — fittingly abbreviated, because they literally age your tissues. Glycated proteins turn stiff and dysfunctional. Your **HbA1c** lab value is actually a glycation measure: the percentage of your hemoglobin with sugar stuck to it.\n\n**Oxidative stress: the spike-crash whiplash.** Rapid glucose swings generate bursts of **reactive oxygen species** — molecular sparks that damage the delicate **endothelium**, the one-cell-thick lining of your blood vessels. Damaged endothelium is step one of atherosclerosis.\n\n**Where the damage shows up first:**\n• **Smallest vessels suffer most** — the capillaries feeding your **nerves** (tingling feet, neuropathy), **eyes** (retinopathy), and **kidneys**\n• **Large vessels** stiffen and accumulate plaque over time\n\nThis is why diabetes complications hit feet, eyes, and kidneys — and why keeping spikes moderate for the next 30 years is one of the highest-leverage things you can do for your future body.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">HOW SPIKES AGE YOU</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Two damage pathways, decades in the making</text>
                    <rect x="80" y="160" width="450" height="300" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="305" y="215" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">GLYCATION</text>
                    <text x="305" y="255" text-anchor="middle" fill="#fff" font-size="17">Sticky glucose bonds to proteins</text>
                    <text x="305" y="290" text-anchor="middle" fill="#fff" font-size="17">Forms AGEs: stiff, aged tissue</text>
                    <text x="305" y="325" text-anchor="middle" fill="#888" font-size="15">HbA1c = glycated hemoglobin %</text>
                    <circle cx="230" cy="390" r="26" fill="rgba(245,158,11,0.3)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="230" y="397" text-anchor="middle" fill="#fff" font-size="14">sugar</text>
                    <path d="M260 390 L320 390" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="330,390 314,380 314,400" fill="#14b8a6"/>
                    <circle cx="380" cy="390" r="26" fill="rgba(239,68,68,0.3)" stroke="#ef4444" stroke-width="2"/>
                    <text x="380" y="397" text-anchor="middle" fill="#fff" font-size="13">protein</text>
                    <rect x="570" y="160" width="450" height="300" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="795" y="215" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">OXIDATIVE STRESS</text>
                    <text x="795" y="255" text-anchor="middle" fill="#fff" font-size="17">Rapid swings spark ROS bursts</text>
                    <text x="795" y="290" text-anchor="middle" fill="#fff" font-size="17">Damage hits the endothelium</text>
                    <text x="795" y="325" text-anchor="middle" fill="#888" font-size="15">Vessel lining = one cell thick</text>
                    <path d="M640 400 L680 370 L710 410 L740 365 L770 405 L800 370 L830 400" stroke="#ef4444" stroke-width="3" fill="none"/>
                    <text x="900" y="395" text-anchor="middle" fill="#888" font-size="14">whiplash</text>
                    <rect x="150" y="510" width="800" height="300 " rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="562" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">SMALLEST VESSELS SUFFER FIRST</text>
                    <circle cx="300" cy="670" r="60" fill="rgba(139,92,246,0.3)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="300" y="663" text-anchor="middle" fill="#fff" font-size="16">Nerves</text>
                    <text x="300" y="690" text-anchor="middle" fill="#888" font-size="13">neuropathy</text>
                    <circle cx="550" cy="670" r="60" fill="rgba(59,130,246,0.3)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="550" y="663" text-anchor="middle" fill="#fff" font-size="16">Eyes</text>
                    <text x="550" y="690" text-anchor="middle" fill="#888" font-size="13">retinopathy</text>
                    <circle cx="800" cy="670" r="60" fill="rgba(20,184,166,0.3)" stroke="#14b8a6" stroke-width="2"/>
                    <text x="800" y="663" text-anchor="middle" fill="#fff" font-size="16">Kidneys</text>
                    <text x="800" y="690" text-anchor="middle" fill="#888" font-size="13">nephropathy</text>
                    <text x="550" y="775" text-anchor="middle" fill="#888" font-size="16">Large arteries stiffen and build plaque over decades</text>
                    <rect x="150" y="870" width="800" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="907" text-anchor="middle" fill="#ffd700" font-size="18">One spike is nothing. Thirty years of spikes</text>
                    <text x="550" y="940" text-anchor="middle" fill="#ffd700" font-size="18">is vascular and nerve aging you can prevent.</text>
                </svg>`,
                caption: "Glycation plus oxidative stress: how chronic spikes damage vessels and nerves"
            }
        },
        {
            type: "example",
            title: "Same Meal, Flatter Curve: The Order-of-Eating Trick",
            content: "Here's a study that sounds too easy to be real. Researchers at **Weill Cornell (Shukla et al., Diabetes Care 2015)** fed people with type 2 diabetes the exact same meal — ciabatta bread, orange juice, chicken, salad — on different days, changing only the **order** they ate it in.\n\n**Vegetables and protein first, carbs last:** post-meal glucose was roughly **30–40% lower** at 30–60 minutes than when they ate the carbs first. Same food. Same calories. Different curve.\n\n**Why it works:** fiber and protein slow stomach emptying, so the carbs drip into your bloodstream instead of flooding it. Protein also triggers hormones (like **GLP-1** — yes, the one the famous drugs mimic) that boost insulin response early.\n\n**Two more evidence-backed pairings:**\n• **Never eat 'naked carbs'** — pair bread, rice, or fruit with protein, fat, or fiber, and the same carb digests slower and spikes less\n• **Vinegar before meals** — about a tablespoon of vinegar (in water or dressing) modestly blunts post-meal glucose in multiple small trials, likely by slowing stomach emptying and improving muscle glucose uptake\n\nYou don't have to give up the bread. You just change when — and with what — it arrives.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">EAT IN ORDER, SPIKE LESS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Shukla et al., Diabetes Care 2015 - same meal, new order</text>
                    <rect x="80" y="160" width="450" height="360" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="305" y="212" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">CARBS FIRST</text>
                    <text x="305" y="250" text-anchor="middle" fill="#fff" font-size="16">Bread and juice, then chicken, salad</text>
                    <path d="M130 460 C 190 450, 230 280, 300 275 C 370 272, 410 400, 480 440" stroke="#ef4444" stroke-width="5" fill="none"/>
                    <text x="305" y="500" text-anchor="middle" fill="#888" font-size="15">Steep spike at 30-60 minutes</text>
                    <rect x="570" y="160" width="450" height="360" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="795" y="212" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">VEGGIES + PROTEIN FIRST</text>
                    <text x="795" y="250" text-anchor="middle" fill="#fff" font-size="16">Salad, chicken - carbs arrive last</text>
                    <path d="M620 460 C 680 455, 720 380, 790 375 C 860 372, 900 420, 970 440" stroke="#10b981" stroke-width="5" fill="none"/>
                    <text x="795" y="500" text-anchor="middle" fill="#888" font-size="15">Roughly 30-40% lower glucose rise</text>
                    <rect x="150" y="570" width="800" height="120" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="620" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">WHY IT WORKS</text>
                    <text x="550" y="660" text-anchor="middle" fill="#fff" font-size="17">Fiber and protein slow the carb drip and boost GLP-1</text>
                    <rect x="80" y="730" width="450" height="150" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="305" y="782" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="19">NO NAKED CARBS</text>
                    <text x="305" y="820" text-anchor="middle" fill="#fff" font-size="16">Pair carbs with protein,</text>
                    <text x="305" y="850" text-anchor="middle" fill="#fff" font-size="16">fat, or fiber - every time</text>
                    <rect x="570" y="730" width="450" height="150" rx="20" fill="rgba(20,184,166,0.15)" stroke="#14b8a6" stroke-width="2"/>
                    <text x="795" y="782" text-anchor="middle" fill="#14b8a6" font-weight="bold" font-size="19">VINEGAR ASSIST</text>
                    <text x="795" y="820" text-anchor="middle" fill="#fff" font-size="16">~1 tbsp in water or dressing</text>
                    <text x="795" y="850" text-anchor="middle" fill="#fff" font-size="16">modestly blunts the spike</text>
                    <rect x="200" y="940" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="990" text-anchor="middle" fill="#ffd700" font-size="19">Same food, same calories - flatter curve</text>
                </svg>`,
                caption: "Food order changed the glucose curve by 30-40% — same exact meal"
            }
        },
        {
            type: "concept",
            title: "The 2-Minute Walk That Beats the Spike",
            content: "Of all the spike-flattening tactics, one stands out for its ridiculous effort-to-payoff ratio: **moving after you eat**.\n\nIn 2022, **Buffey and colleagues** published a meta-analysis in **Sports Medicine** pooling studies that compared sitting after meals with standing or light walking. The result: as little as **2 to 5 minutes of light-intensity walking** after a meal **significantly lowered postprandial (post-meal) glucose** compared to sitting. Standing helped a little; walking helped meaningfully more.\n\n**Why something so small works:** your muscles are your body's biggest glucose consumers. When muscle fibers contract, they pull glucose out of the bloodstream through transporters called **GLUT4** — and here's the beautiful part — **without needing insulin**. Contraction opens a side door. Your muscles literally eat the spike before it peaks.\n\n**Timing matters:** glucose typically peaks **30–90 minutes** after you start eating. A walk that begins within about **60–90 minutes** of the meal intercepts the curve on its way up.\n\nDishes, a stroll around the block, pacing on a phone call — it all counts. The worst thing you can do after a big meal is exactly what most of us do: sink into the couch.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">MUSCLES EAT THE SPIKE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Buffey et al. 2022 meta-analysis, Sports Medicine</text>
                    <rect x="80" y="160" width="300 " height="200" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="230" y="215" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">SITTING</text>
                    <text x="230" y="255" text-anchor="middle" fill="#fff" font-size="16">Full spike,</text>
                    <text x="230" y="285" text-anchor="middle" fill="#fff" font-size="16">full crash</text>
                    <rect x="400" y="160" width="300" height="200" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="215" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">STANDING</text>
                    <text x="550" y="255" text-anchor="middle" fill="#fff" font-size="16">Slightly lower</text>
                    <text x="550" y="285" text-anchor="middle" fill="#fff" font-size="16">glucose peak</text>
                    <rect x="720" y="160" width="300" height="200" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="870" y="215" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">LIGHT WALK</text>
                    <text x="870" y="255" text-anchor="middle" fill="#fff" font-size="16">2-5 min: significantly</text>
                    <text x="870" y="285" text-anchor="middle" fill="#fff" font-size="16">lower post-meal glucose</text>
                    <rect x="150" y="410" width="800" height="260" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="462" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">THE INSULIN-FREE SIDE DOOR</text>
                    <circle cx="300" cy="565" r="55" fill="rgba(245,158,11,0.3)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="300" y="572" text-anchor="middle" fill="#fff" font-size="15">Glucose</text>
                    <path d="M360 565 L470 565" stroke="#14b8a6" stroke-width="4"/>
                    <polygon points="480,565 464,555 464,575" fill="#14b8a6"/>
                    <rect x="490" y="510" width="180" height="110" rx="16" fill="rgba(16,185,129,0.25)" stroke="#10b981" stroke-width="2"/>
                    <text x="580" y="558" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="17">GLUT4</text>
                    <text x="580" y="590" text-anchor="middle" fill="#fff" font-size="14">opened by</text>
                    <text x="580" y="612" text-anchor="middle" fill="#fff" font-size="14">contraction</text>
                    <path d="M680 565 L790 565" stroke="#14b8a6" stroke-width="4"/>
                    <polygon points="800,565 784,555 784,575" fill="#14b8a6"/>
                    <circle cx="870" cy="565" r="55" fill="rgba(139,92,246,0.3)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="870" y="572" text-anchor="middle" fill="#fff" font-size="15">Muscle</text>
                    <text x="550" y="650" text-anchor="middle" fill="#888" font-size="16">Working muscle pulls in glucose with NO insulin required</text>
                    <rect x="150" y="720" width="800" height="130" rx="20" fill="rgba(20,184,166,0.15)" stroke="#14b8a6" stroke-width="2"/>
                    <text x="550" y="772" text-anchor="middle" fill="#14b8a6" font-weight="bold" font-size="20">TIMING WINDOW</text>
                    <text x="550" y="812" text-anchor="middle" fill="#fff" font-size="17">Glucose peaks 30-90 min after eating - walk inside that window</text>
                    <rect x="200" y="910" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="947" text-anchor="middle" fill="#ffd700" font-size="18">Dishes, a block, pacing on a call:</text>
                    <text x="550" y="980" text-anchor="middle" fill="#ffd700" font-size="18">it all intercepts the curve</text>
                </svg>`,
                caption: "Two to five minutes of walking intercepts the glucose curve"
            }
        },
        {
            type: "concept",
            title: "Morning Highs and Aging Curves: It's Not Fate",
            content: "Two last puzzle pieces before you build your plan.\n\n**The dawn phenomenon.** If you've ever seen a high morning glucose reading before eating anything, meet your circadian biology. In the pre-dawn hours, your body releases **cortisol and growth hormone** to prep you for waking, prompting your liver to release stored glucose. In insulin-sensitive people it's barely noticeable; as insulin resistance creeps in, those morning numbers drift higher. A high fasting reading often reflects **yesterday's biology and your liver** — not last night's snack alone.\n\n**Does glucose control have to decline with age?** Glucose tolerance does typically stiffen across the decades — but researchers find most of that decline tracks with two changeable things:\n• **Shrinking muscle** — from Lesson 6: muscle disposes of ~80% of post-meal glucose. Less muscle = a smaller tank to pour glucose into\n• **Declining mitochondria and activity** — fewer, weaker cellular engines burning less fuel, plus more sitting\n\nWhen older adults strength-train and stay active, their glucose handling improves dramatically — studies show muscle glucose uptake responds to training at **any age**. The 'aging' of your blood sugar is mostly the aging of your muscle mass and movement habits. Both are yours to change.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">DAWN AND THE DECADES</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Morning highs, aging curves, and what is changeable</text>
                    <rect x="150" y="150" width="800" height="270" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="202" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">THE DAWN PHENOMENON</text>
                    <path d="M220 360 C 300 358, 380 352, 460 340 C 560 322, 640 280, 720 262 C 800 245, 860 250, 900 255" stroke="#f59e0b" stroke-width="4" fill="none"/>
                    <text x="250" y="395" text-anchor="middle" fill="#888" font-size="15">2 AM</text>
                    <text x="870" y="395" text-anchor="middle" fill="#888" font-size="15">7 AM waking</text>
                    <text x="550" y="250 " text-anchor="middle" fill="#fff" font-size="16">Cortisol + growth hormone tell the liver: release glucose</text>
                    <rect x="80" y="470" width="450" height="250" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="305" y="522" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">WHY CURVES STIFFEN</text>
                    <text x="305" y="565" text-anchor="middle" fill="#fff" font-size="17">Muscle shrinks with age:</text>
                    <text x="305" y="597" text-anchor="middle" fill="#fff" font-size="17">smaller glucose tank</text>
                    <text x="305" y="640" text-anchor="middle" fill="#fff" font-size="17">Mitochondria weaken,</text>
                    <text x="305" y="672" text-anchor="middle" fill="#fff" font-size="17">activity drops</text>
                    <rect x="570" y="470" width="450" height="250" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="795" y="522" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">WHY IT IS NOT FATE</text>
                    <text x="795" y="565" text-anchor="middle" fill="#fff" font-size="17">Training rebuilds muscle</text>
                    <text x="795" y="597" text-anchor="middle" fill="#fff" font-size="17">glucose uptake at ANY age</text>
                    <text x="795" y="640" text-anchor="middle" fill="#fff" font-size="17">Exercise regrows</text>
                    <text x="795" y="672" text-anchor="middle" fill="#fff" font-size="17">mitochondrial capacity</text>
                    <rect x="150" y="770" width="800" height="130" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="822" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">REFRAME</text>
                    <text x="550" y="862" text-anchor="middle" fill="#fff" font-size="17">Blood sugar does not age. Muscle and habits do.</text>
                    <rect x="200" y="950" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1000" text-anchor="middle" fill="#ffd700" font-size="19">Both are trainable - at 40, 60, and 90</text>
                </svg>`,
                caption: "The dawn phenomenon, and why aging glucose curves are mostly trainable"
            }
        },
        {
            type: "application",
            title: "Flatten Your Curve Starting at Your Next Meal",
            content: "You don't need a new diet. You need a new sequence. Here's your spike-flattening protocol, deployable today:\n\n1. **Reorder your next meal** — eat the vegetables and protein on your plate first, carbs last. Zero extra cost, roughly 30–40% flatter curve (Shukla 2015)\n\n2. **Dress your carbs** — never eat naked carbs. Add nuts to fruit, protein to toast, olive oil and vinegar to anything with bread or rice\n\n3. **Move for 2–10 minutes after eating** — walk the dog, do the dishes, pace on a call. Start within 60–90 minutes of the meal (Buffey 2022). Dinner is the highest-value slot, since evenings are when we sit most\n\n4. **Notice your 90-minute mark** — after lunch tomorrow, set a timer. Foggy and craving sugar? You probably rode the rollercoaster. Track which meals crash you for one week\n\n5. **Ask about your numbers** — at your next checkup, ask for fasting glucose AND HbA1c, and discuss whether a 2-week CGM trial makes sense for you. Not medical advice — build the plan with your clinician",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">YOUR FLAT-CURVE PROTOCOL</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Five moves, starting at your next meal</text>
                    <rect x="150" y="150" width="800" height="130" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="203" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="22">1.</text>
                    <text x="245" y="203" text-anchor="start" fill="#fff" font-size="19">Reorder: veggies and protein first, carbs last</text>
                    <text x="245" y="245" text-anchor="start" fill="#888" font-size="16">Same meal, ~30-40% flatter curve</text>
                    <rect x="150" y="310" width="800" height="130" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="363" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="22">2.</text>
                    <text x="245" y="363" text-anchor="start" fill="#fff" font-size="19">Dress your carbs: add protein, fat, or fiber</text>
                    <text x="245" y="405" text-anchor="start" fill="#888" font-size="16">No naked carbs - nuts with fruit, protein with toast</text>
                    <rect x="150" y="470" width="800" height="130" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="523" text-anchor="start" fill="#10b981" font-weight="bold" font-size="22">3.</text>
                    <text x="245" y="523" text-anchor="start" fill="#fff" font-size="19">Move 2-10 minutes after meals, especially dinner</text>
                    <text x="245" y="565" text-anchor="start" fill="#888" font-size="16">Within 60-90 min - dishes and dog walks count</text>
                    <rect x="150" y="630" width="800" height="130" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="683" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="22">4.</text>
                    <text x="245" y="683" text-anchor="start" fill="#fff" font-size="19">Run the 90-minute check after lunch this week</text>
                    <text x="245" y="725" text-anchor="start" fill="#888" font-size="16">Fog + cravings = you rode the rollercoaster</text>
                    <rect x="150" y="790" width="800" height="130" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="843" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="22">5.</text>
                    <text x="245" y="843" text-anchor="start" fill="#fff" font-size="19">Ask your clinician: fasting glucose, HbA1c, CGM trial</text>
                    <text x="245" y="885" text-anchor="start" fill="#888" font-size="16">Get real data before guessing</text>
                    <rect x="200" y="960" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1010" text-anchor="middle" fill="#ffd700" font-size="19">Not a new diet - a new sequence</text>
                </svg>`,
                caption: "Your five-step spike-flattening action plan"
            }
        },
        {
            type: "quote",
            content: "Every time we eat, we have an opportunity to nourish our body or to challenge it. The glucose response to food is one of the clearest windows we have into that choice.",
            author: "Michael Snyder, PhD — Stanford geneticist and glucotypes study senior author",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">WISDOM</text>
                    <rect x="100" y="300" width="900" height="330" rx="20" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="160" y="380" text-anchor="start" fill="#fff" font-style="italic" font-size="22">"Every time we eat, we have an opportunity</text>
                    <text x="160" y="425" text-anchor="start" fill="#fff" font-style="italic" font-size="22">to nourish our body or to challenge it.</text>
                    <text x="160" y="470" text-anchor="start" fill="#fff" font-style="italic" font-size="22">The glucose response to food is one of the</text>
                    <text x="160" y="515" text-anchor="start" fill="#fff" font-style="italic" font-size="22">clearest windows we have into that choice."</text>
                    <text x="940" y="585" text-anchor="end" fill="#8b5cf6" font-size="18">- Michael Snyder, PhD, Stanford</text>
                    <circle cx="550" cy="770" r="90" fill="rgba(255,215,0,0.08)" stroke="#ffd700" stroke-width="2"/>
                    <path d="M480 790 C 510 785, 525 740, 550 738 C 575 737, 590 775, 620 785" stroke="#10b981" stroke-width="4" fill="none"/>
                    <text x="550" y="900 " text-anchor="middle" fill="#888" font-size="17">Roughly 1,000 meals a year - 1,000 chances</text>
                    <text x="550" y="935" text-anchor="middle" fill="#888" font-size="17">to pick the gentle curve</text>
                </svg>`,
                caption: "A moment of reflection on your next 1,000 meals"
            }
        },
        {
            type: "quiz",
            question: "According to the Buffey et al. 2022 meta-analysis, what is the minimum amount of post-meal activity shown to significantly lower postprandial glucose?",
            options: [
                { text: "At least 30 minutes of brisk walking, since shorter bouts show no measurable effect", correct: false },
                { text: "As little as 2-5 minutes of light-intensity walking after the meal", correct: true },
                { text: "A high-intensity workout completed before the meal, not after it", correct: false },
                { text: "Standing after meals works just as well as walking, so either is fine", correct: false }
            ],
            explanation: "The 2022 Sports Medicine meta-analysis found that even 2-5 minutes of light walking after eating significantly lowered postprandial glucose versus sitting — because contracting muscle pulls glucose from the blood through GLUT4 transporters without needing insulin. Thirty minutes isn't required (though more helps), and while standing beat sitting slightly, it was clearly inferior to walking — so 'either is fine' overstates it. The magic is muscle contraction during the 30-90 minute glucose rise.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">POST-MEAL MOVEMENT</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">How little walking still flattens the spike?</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">Buffey et al. 2022, Sports Medicine</text>
                    <rect x="100" y="370" width="280" height="200" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="240" y="425" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="19">SIT</text>
                    <path d="M140 520 C 180 515, 200 440, 240 435 C 280 432, 310 490, 340 510" stroke="#ef4444" stroke-width="4" fill="none"/>
                    <rect x="410" y="370" width="280" height="200" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="425" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="19">STAND</text>
                    <path d="M450 520 C 490 516, 510 455, 550 452 C 590 450, 620 495, 650 510" stroke="#f59e0b" stroke-width="4" fill="none"/>
                    <rect x="720" y="370" width="280" height="200" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="860" y="425" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">WALK ?</text>
                    <path d="M760 520 C 800 518, 820 480, 860 478 C 900 477, 930 500, 960 508" stroke="#10b981" stroke-width="4" fill="none"/>
                    <rect x="200" y="640 " width="700" height="120" rx="20" fill="rgba(20,184,166,0.15)" stroke="#14b8a6" stroke-width="2"/>
                    <text x="550" y="690" text-anchor="middle" fill="#14b8a6" font-weight="bold" font-size="20">RECALL THE MECHANISM</text>
                    <text x="550" y="730" text-anchor="middle" fill="#fff" font-size="17">Muscle contraction opens GLUT4 - no insulin needed</text>
                    <rect x="200" y="820" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="870" text-anchor="middle" fill="#ffd700" font-size="19">How small can the walking dose be?</text>
                </svg>`,
                caption: "Final check: the post-meal movement evidence"
            }
        }
    ]
},
{
    id: 6,
    title: "Muscle: The Organ of Longevity",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "The Retirement Account You Didn't Know You Had",
            content: "Imagine discovering, at 45, that you've had a retirement account since birth — one that pays out in independence, steady blood sugar, unbroken hips, and extra years of life. Then imagine learning it's been quietly losing **3–8% of its balance every decade** since you turned 30, and you've never once made a deposit.\n\nThat account is your **skeletal muscle**.\n\nMost people think of muscle as a vanity project — something for athletes and gym selfies. The research says otherwise. Muscle is your body's largest **glucose sink**, an **endocrine organ** that sends chemical messages to your brain, and one of the strongest physical predictors of how long you'll live. In one study of nearly 140,000 people, a simple **grip strength** test predicted death better than blood pressure did.\n\nHere's the best news in this entire book: this account accepts deposits at ANY age. Researchers put **90-year-olds** in nursing homes on strength training and watched their strength jump dramatically in 8 weeks. Your balance today doesn't matter. Your deposits starting this week do.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">YOUR MUSCLE ACCOUNT</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">The balance that pays out in years of life</text>
                    <rect x="200" y="160" width="700" height="300" rx="24" fill="rgba(255,215,0,0.08)" stroke="#ffd700" stroke-width="3"/>
                    <text x="550" y="225" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="24">MUSCLE SAVINGS ACCOUNT</text>
                    <text x="550" y="280" text-anchor="middle" fill="#fff" font-size="19">Pays out: independence, stable glucose,</text>
                    <text x="550" y="315" text-anchor="middle" fill="#fff" font-size="19">strong bones, extra years</text>
                    <text x="550" y="375" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">Auto-withdrawal: 3-8% per decade after 30</text>
                    <text x="550" y="420" text-anchor="middle" fill="#888" font-size="16">Accelerating after age 60</text>
                    <rect x="80" y="520" width="440" height="220" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="300" y="575" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">NEVER DEPOSIT</text>
                    <path d="M130 630 L200 645 L280 665 L360 695 L470 720" stroke="#ef4444" stroke-width="4" fill="none"/>
                    <text x="300" y="705" text-anchor="middle" fill="#888" font-size="15">Frailty, falls, dependence</text>
                    <rect x="580" y="520" width="440" height="220" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="800" y="575" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">DEPOSIT WEEKLY</text>
                    <path d="M630 700 L700 690 L780 670 L860 655 L970 640" stroke="#10b981" stroke-width="4" fill="none"/>
                    <text x="800" y="705" text-anchor="middle" fill="#888" font-size="15">Strong into your 90s</text>
                    <rect x="150" y="800" width="800 " height="120" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="850" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">THE ACCOUNT NEVER CLOSES</text>
                    <text x="550" y="890" text-anchor="middle" fill="#fff" font-size="17">90-year-olds gained strength in 8 weeks of training</text>
                    <text x="550" y="990" text-anchor="middle" fill="#888" font-size="17">Your balance today matters less than</text>
                    <text x="550" y="1025" text-anchor="middle" fill="#888" font-size="17">the deposits you start this week</text>
                </svg>`,
                caption: "Muscle as a lifelong savings account — with automatic withdrawals"
            }
        },
        {
            type: "concept",
            title: "The Body's Biggest Glucose Sink",
            content: "Remember the blood sugar rollercoaster from Lesson 5? Here's who actually flattens it: your muscle.\n\nSkeletal muscle is responsible for roughly **80% of insulin-stimulated glucose disposal**. When insulin says 'store this glucose,' about four-fifths of it gets pulled into muscle tissue and stored as **glycogen** — ready fuel for movement.\n\nThink of your muscle mass as a **sink** under a faucet:\n• **Big sink (lots of muscle)** — a carb-heavy meal pours in and drains smoothly. Modest spike, quick return to baseline\n• **Small sink (low muscle)** — the same meal overflows. Glucose lingers high in the blood, the pancreas pumps extra insulin, and the surplus is shunted to fat — especially **visceral fat**\n\nThis is why muscle loss and insulin resistance travel together, and why **sarcopenia** (age-related muscle loss) is metabolic bad news long before it's a mobility problem. Every kilogram of muscle you keep is storage capacity your pancreas doesn't have to compensate for.\n\nAnd the reverse is powerful too: resistance training makes muscle more **insulin-sensitive** and, as you learned, contracting muscle can pull in glucose **without insulin at all**. More muscle isn't just strength. It's blood sugar infrastructure.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE GLUCOSE SINK</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Muscle handles ~80% of insulin-driven glucose disposal</text>
                    <circle cx="550" cy="330" r="160" fill="none" stroke="#6366f1" stroke-width="3"/>
                    <path d="M550 170 A 160 160 0 1 1 396 375 L550 330 Z" fill="rgba(99,102,241,0.35)" stroke="#6366f1" stroke-width="2"/>
                    <text x="600" y="300" text-anchor="middle" fill="#fff" font-weight="bold" font-size="26">~80%</text>
                    <text x="600" y="340" text-anchor="middle" fill="#fff" font-size="17">to MUSCLE</text>
                    <text x="420" y="440" text-anchor="middle" fill="#888" font-size="15">~20% elsewhere</text>
                    <text x="550" y="545" text-anchor="middle" fill="#888" font-size="16">Where insulin-stimulated glucose goes after a meal</text>
                    <rect x="80" y="600" width="450" height="280" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="305" y="652" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">BIG SINK</text>
                    <rect x="180" y="690" width="250" height="110" rx="12" fill="rgba(16,185,129,0.25)" stroke="#10b981" stroke-width="2"/>
                    <path d="M305 640 L305 685" stroke="#3b82f6" stroke-width="6" opacity="0.6"/>
                    <text x="305" y="755" text-anchor="middle" fill="#fff" font-size="16">Meal drains smoothly</text>
                    <text x="305" y="845" text-anchor="middle" fill="#888" font-size="15">Modest spike, fast recovery</text>
                    <rect x="570" y="600" width="450" height="280" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="795" y="652" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">SMALL SINK</text>
                    <rect x="730" y="740" width="130" height="60" rx="10" fill="rgba(239,68,68,0.25)" stroke="#ef4444" stroke-width="2"/>
                    <path d="M795 640 L795 735" stroke="#3b82f6" stroke-width="6" opacity="0.6"/>
                    <path d="M720 745 C 700 760, 690 780, 685 800" stroke="#ef4444" stroke-width="3" fill="none"/>
                    <path d="M870 745 C 890 760, 900 780, 905 800" stroke="#ef4444" stroke-width="3" fill="none"/>
                    <text x="795" y="845" text-anchor="middle" fill="#888" font-size="15">Overflow: high glucose, visceral fat</text>
                    <rect x="150" y="930" width="800" height="110" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="975" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="19">EVERY KILOGRAM OF MUSCLE</text>
                    <text x="550" y="1012" text-anchor="middle" fill="#fff" font-size="17">is glucose storage your pancreas never has to fight for</text>
                </svg>`,
                caption: "Big sink vs small sink: why muscle mass sets your glucose ceiling"
            }
        },
        {
            type: "visual",
            title: "Sarcopenia: The Slow Leak",
            content: "**Sarcopenia** — from the Greek for 'poverty of flesh' — is the age-related loss of muscle mass and strength. It is not rare and it is not optional by default: it's the trajectory of every human body that doesn't actively resist it.\n\n**The timeline:**\n• **Age 30** — peak muscle for most people; the slow leak begins\n• **30 to 60** — roughly **3–8% of muscle lost per decade**, mostly unnoticed because daily life masks it\n• **After 60** — the leak accelerates; fast-twitch fibers (the powerful, catch-yourself-when-you-trip fibers) decline fastest\n• **By 80** — a sedentary person may have lost **30% or more** of their peak muscle\n\nThe deceptive part: the scale barely moves, because lost muscle is often replaced by fat. Your weight looks stable while your engine shrinks — one reason body composition tells you more than body weight ever will.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE SLOW LEAK</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Muscle mass across the decades - two paths</text>
                    <line x1="130" y1="760" x2="1000" y2="760" stroke="#888" stroke-width="2"/>
                    <line x1="130" y1="180" x2="130" y2="760" stroke="#888" stroke-width="2"/>
                    <text x="90" y="480" text-anchor="middle" fill="#888" font-size="16" transform="rotate(-90 90 480)">Muscle mass</text>
                    <text x="180" y="800" text-anchor="middle" fill="#888" font-size="16">20</text>
                    <text x="380" y="800" text-anchor="middle" fill="#888" font-size="16">40</text>
                    <text x="580" y="800" text-anchor="middle" fill="#888" font-size="16">60</text>
                    <text x="780" y="800" text-anchor="middle" fill="#888" font-size="16">80</text>
                    <text x="960" y="800" text-anchor="middle" fill="#888" font-size="16">Age</text>
                    <path d="M180 260 C 280 255, 330 270, 380 300 C 480 360, 530 420, 580 480 C 680 600, 780 680, 900 720" stroke="#ef4444" stroke-width="5" fill="none"/>
                    <text x="840" y="660" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="18">SEDENTARY</text>
                    <path d="M180 260 C 280 250, 330 250, 380 265 C 480 290, 530 310, 580 335 C 680 380, 780 420, 900 460" stroke="#10b981" stroke-width="5" fill="none"/>
                    <text x="840" y="415" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="18">TRAINING</text>
                    <circle cx="380" cy="300" r="11" fill="#f59e0b"/>
                    <text x="330" y="245" text-anchor="middle" fill="#f59e0b" font-size="16">3-8% lost per decade</text>
                    <circle cx="580" cy="480" r="11" fill="#ef4444"/>
                    <text x="565" y="530" text-anchor="middle" fill="#ef4444" font-size="16">Leak accelerates at 60</text>
                    <rect x="80" y="850" width="450" height="150" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="305" y="900" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="19">FAST-TWITCH FIRST</text>
                    <text x="305" y="938" text-anchor="middle" fill="#fff" font-size="16">The catch-yourself-mid-trip</text>
                    <text x="305" y="968" text-anchor="middle" fill="#fff" font-size="16">fibers decline fastest</text>
                    <rect x="570" y="850" width="450" height="150" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="795" y="900" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="19">THE SCALE LIES</text>
                    <text x="795" y="938" text-anchor="middle" fill="#fff" font-size="16">Lost muscle is replaced by fat -</text>
                    <text x="795" y="968" text-anchor="middle" fill="#fff" font-size="16">weight stable, engine shrinking</text>
                </svg>`,
                caption: "Sarcopenia's decline curve — and the trainable alternative"
            }
        },
        {
            type: "example",
            title: "A Handshake That Predicts the Future",
            content: "In 2015, **The Lancet** published results from the **PURE study** — nearly **140,000 adults across 17 countries** followed for about four years. Among the measurements: a simple squeeze of a handheld device to test **grip strength**.\n\n**The findings were startling:**\n• Every **5 kg decrease** in grip strength was associated with a **16% higher risk of death** from any cause during follow-up\n• Grip strength predicted all-cause and cardiovascular mortality **better than systolic blood pressure did**\n• The association held across rich and poor countries, men and women\n\nWhy would a handshake foretell mortality? Grip strength isn't magic — it's a **proxy for total-body muscle mass and strength**, which reflects reserves you draw on to survive illness, surgery, infection, and falls. Clinicians call it a window into 'physiological reserve.'\n\nPicture two 75-year-olds hospitalized with pneumonia. One has maintained muscle; she gets out of bed, coughs forcefully, and walks the hallway on day two. The other, sarcopenic, cannot — and every day in bed costs older adults measurable muscle. Same illness, very different odds.\n\nStrength isn't cosmetic. It's a survival reserve you can measure with a handshake.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE GRIP TEST</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">PURE study, The Lancet 2015 - ~140,000 adults, 17 countries</text>
                    <rect x="150" y="150" width="800" height="160" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="550" y="205" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="21">EVERY 5 KG LESS GRIP STRENGTH</text>
                    <text x="550" y="248" text-anchor="middle" fill="#fff" font-size="18">= 16% higher risk of death from any cause</text>
                    <text x="550" y="283" text-anchor="middle" fill="#888" font-size="16">during roughly four years of follow-up</text>
                    <rect x="80" y="360" width="450" height="220" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="305" y="412" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="19">STRONGER PREDICTOR</text>
                    <text x="305" y="452" text-anchor="middle" fill="#fff" font-size="17">Grip beat systolic blood</text>
                    <text x="305" y="485" text-anchor="middle" fill="#fff" font-size="17">pressure at predicting</text>
                    <text x="305" y="518" text-anchor="middle" fill="#fff" font-size="17">mortality</text>
                    <rect x="570" y="360" width="450" height="220" rx="20" fill="rgba(20,184,166,0.15)" stroke="#14b8a6" stroke-width="2"/>
                    <text x="795" y="412" text-anchor="middle" fill="#14b8a6" font-weight="bold" font-size="19">WHY IT WORKS</text>
                    <text x="795" y="452" text-anchor="middle" fill="#fff" font-size="17">Grip is a proxy for whole-body</text>
                    <text x="795" y="485" text-anchor="middle" fill="#fff" font-size="17">muscle - your physiological</text>
                    <text x="795" y="518" text-anchor="middle" fill="#fff" font-size="17">reserve for hard times</text>
                    <rect x="150" y="630" width="800" height="250" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="682" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">TWO 75-YEAR-OLDS, SAME PNEUMONIA</text>
                    <text x="340" y="730" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="17">With muscle reserve</text>
                    <text x="340" y="765" text-anchor="middle" fill="#fff" font-size="15">Out of bed day two,</text>
                    <text x="340" y="793" text-anchor="middle" fill="#fff" font-size="15">walking the hallway</text>
                    <line x1="550" y1="710" x2="550" y2="820" stroke="#888" stroke-width="2" stroke-dasharray="6" opacity="0.5"/>
                    <text x="760" y="730" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="17">Sarcopenic</text>
                    <text x="760" y="765" text-anchor="middle" fill="#fff" font-size="15">Bed-bound - and each day</text>
                    <text x="760" y="793" text-anchor="middle" fill="#fff" font-size="15">in bed costs more muscle</text>
                    <text x="550" y="852" text-anchor="middle" fill="#888" font-size="15">Same illness, very different odds</text>
                    <rect x="200" y="930" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="968" text-anchor="middle" fill="#ffd700" font-size="18">Strength is not cosmetic.</text>
                    <text x="550" y="1000" text-anchor="middle" fill="#ffd700" font-size="18">It is a measurable survival reserve.</text>
                </svg>`,
                caption: "Grip strength outpredicted blood pressure for mortality in 140,000 people"
            }
        },
        {
            type: "quiz",
            question: "Skeletal muscle is called the body's biggest 'glucose sink' because it handles approximately what share of insulin-stimulated glucose disposal?",
            options: [
                { text: "About 20% — the liver does most of the work of clearing glucose after meals", correct: false },
                { text: "About 50% — muscle and fat tissue split glucose disposal roughly evenly", correct: false },
                { text: "About 80% — the large majority of insulin-driven glucose uptake goes into muscle", correct: true },
                { text: "Nearly 100% — muscle is the only tissue capable of absorbing blood glucose", correct: false }
            ],
            explanation: "Skeletal muscle handles roughly 80% of insulin-stimulated glucose disposal, which is why losing muscle shrinks your 'sink' and pushes you toward insulin resistance — and why building muscle is blood sugar infrastructure. The liver matters (it stores glycogen and regulates fasting glucose), but it's not the main destination for insulin-driven post-meal glucose. And muscle isn't the only tissue that takes up glucose — the brain, liver, and fat all do — it's simply the overwhelming majority shareholder.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE GLUCOSE SINK</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">What share of insulin-driven glucose disposal</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">does skeletal muscle handle?</text>
                    <rect x="120" y="380" width="180" height="240" rx="16" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="210" y="480" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="26">20%?</text>
                    <rect x="340" y="380" width="180" height="240" rx="16" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="430" y="480" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="26">50%?</text>
                    <rect x="560" y="380" width="180" height="240" rx="16" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="650" y="480" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="26">80%?</text>
                    <rect x="780" y="380" width="180" height="240" rx="16" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="870" y="480" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="26">100%?</text>
                    <rect x="200" y="700" width="700" height="120" rx="20" fill="rgba(20,184,166,0.15)" stroke="#14b8a6" stroke-width="2"/>
                    <text x="550" y="750" text-anchor="middle" fill="#14b8a6" font-weight="bold" font-size="20">HINT: THINK OF THE SINK</text>
                    <text x="550" y="790" text-anchor="middle" fill="#fff" font-size="17">Where does a carb-heavy meal mostly drain to?</text>
                    <rect x="200" y="880" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="930" text-anchor="middle" fill="#ffd700" font-size="19">More muscle = a bigger sink under the faucet</text>
                </svg>`,
                caption: "Mid-lesson check: muscle's role in glucose disposal"
            }
        },
        {
            type: "concept",
            title: "Your Muscle Is Talking to Your Brain",
            content: "For most of medical history, muscle was considered dumb tissue — meat that moves bones. That view collapsed when researchers discovered that contracting muscle secretes hundreds of signaling molecules called **myokines**. Muscle, it turns out, is an **endocrine organ** — like the thyroid, but one you control with a pair of dumbbells.\n\n**Meet three messengers released when muscle contracts:**\n• **Irisin** — helps convert white fat toward more metabolically active 'beige' fat, and appears to support bone density and brain health\n• **BDNF (brain-derived neurotrophic factor)** — exercise raises this 'fertilizer for neurons,' which supports learning, memory, and the growth of new brain-cell connections\n• **IL-6 in exercise bursts** — chronically elevated IL-6 (from visceral fat) is inflammatory, but the sharp, short **pulses** released by working muscle act differently: they improve glucose uptake and trigger an **anti-inflammatory** cascade afterward. Same molecule, opposite meaning — context is everything\n\nThis is why exercise shows up in research on depression, dementia, and metabolic disease all at once. Every workout is your muscle mailing chemical letters to your brain, bones, fat, and immune system. Sedentary muscle sends almost none.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE MYOKINE MAIL SERVICE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Contracting muscle is an endocrine organ</text>
                    <circle cx="550" cy="360" r="120" fill="rgba(99,102,241,0.25)" stroke="#6366f1" stroke-width="3"/>
                    <text x="550" y="350" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">WORKING</text>
                    <text x="550" y="385" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">MUSCLE</text>
                    <line x1="460" y1="270" x2="270" y2="180" stroke="#ec4899" stroke-width="3" stroke-dasharray="8" opacity="0.7"/>
                    <line x1="640" y1="270" x2="830" y2="180" stroke="#3b82f6" stroke-width="3" stroke-dasharray="8" opacity="0.7"/>
                    <line x1="450" y1="440" x2="270" y2="560" stroke="#f59e0b" stroke-width="3" stroke-dasharray="8" opacity="0.7"/>
                    <line x1="650" y1="440" x2="830" y2="560" stroke="#10b981" stroke-width="3" stroke-dasharray="8" opacity="0.7"/>
                    <circle cx="220" cy="150" r="70" fill="rgba(236,72,153,0.2)" stroke="#ec4899" stroke-width="2"/>
                    <text x="220" y="145" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="17">BRAIN</text>
                    <text x="220" y="172" text-anchor="middle" fill="#fff" font-size="13">BDNF</text>
                    <circle cx="880" cy="150" r="70" fill="rgba(59,130,246,0.2)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="880" y="145" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="17">BONE</text>
                    <text x="880" y="172" text-anchor="middle" fill="#fff" font-size="13">irisin</text>
                    <circle cx="220" cy="590" r="70" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="220" y="585" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="17">FAT</text>
                    <text x="220" y="612" text-anchor="middle" fill="#fff" font-size="13">irisin: beiging</text>
                    <circle cx="880" cy="590" r="70" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="2"/>
                    <text x="880" y="585" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="17">IMMUNE</text>
                    <text x="880" y="612" text-anchor="middle" fill="#fff" font-size="13">IL-6 bursts</text>
                    <rect x="150" y="720" width="800" height="170" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="772" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">THE IL-6 PARADOX</text>
                    <text x="550" y="812" text-anchor="middle" fill="#fff" font-size="17">Chronic IL-6 from visceral fat: inflammatory</text>
                    <text x="550" y="847" text-anchor="middle" fill="#fff" font-size="17">Sharp exercise pulses: anti-inflammatory + better glucose uptake</text>
                    <rect x="200" y="940" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="978" text-anchor="middle" fill="#ffd700" font-size="18">Sedentary muscle sends almost no mail.</text>
                    <text x="550" y="1010" text-anchor="middle" fill="#ffd700" font-size="18">Every workout is a stack of letters.</text>
                </svg>`,
                caption: "Myokines: chemical letters from muscle to brain, bone, fat, and immune system"
            }
        },
        {
            type: "concept",
            title: "Anabolic Resistance: Why 'Enough' Protein Stops Being Enough",
            content: "Here's a cruel twist of aging biology: the older you get, the **worse your muscle listens to protein**.\n\nIn young adults, a modest dose of protein triggers **muscle protein synthesis (MPS)** — the rebuild signal. In older adults, the same dose produces a blunted response. Scientists call this **anabolic resistance**: the machinery still works, but the volume knob has been turned down. So the same breakfast that maintained muscle at 30 quietly fails to at 65.\n\n**The evidence-based response is to speak louder:**\n• **Raise the daily total** — the RDA of **0.8 g/kg/day** was set to prevent deficiency, not to preserve aging muscle. Research groups like PROT-AGE recommend **1.2–1.6 g/kg/day** for older adults (for a 154 lb / 70 kg person, that's roughly **84–112 g/day**)\n• **Hit a per-meal threshold** — MPS is switch-like. You need about **25–30 g of protein** in a sitting, including roughly **2.5–3 g of leucine** (the amino acid that flips the switch), to fully trigger it\n• **Spread it out** — 90 g of protein at dinner alone triggers MPS once. 30 g at each of three meals triggers it three times. Most people eat almost no protein at breakfast — the meal where it matters most\n\nPair the protein signal with the training signal (next cards) and even 90-year-old muscle answers.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">SPEAK LOUDER TO OLDER MUSCLE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Anabolic resistance and the protein response</text>
                    <rect x="80" y="150" width="450" height="230" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="305" y="202" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">MUSCLE AT 30</text>
                    <text x="305" y="242" text-anchor="middle" fill="#fff" font-size="16">Modest protein dose =</text>
                    <text x="305" y="272" text-anchor="middle" fill="#fff" font-size="16">full rebuild signal</text>
                    <path d="M160 340 L250 335 L310 250 L380 245 L460 240" stroke="#10b981" stroke-width="4" fill="none"/>
                    <rect x="570" y="150" width="450" height="230" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="795" y="202" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">MUSCLE AT 70</text>
                    <text x="795" y="242" text-anchor="middle" fill="#fff" font-size="16">Same dose = blunted signal:</text>
                    <text x="795" y="272" text-anchor="middle" fill="#fff" font-size="16">anabolic resistance</text>
                    <path d="M650 340 L740 337 L800 310 L870 306 L950 303" stroke="#ef4444" stroke-width="4" fill="none"/>
                    <rect x="150" y="430" width="800" height="160" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="482" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">DAILY TARGET: 1.2-1.6 G/KG</text>
                    <text x="550" y="522" text-anchor="middle" fill="#fff" font-size="17">vs the 0.8 RDA - roughly 84-112 g/day at 70 kg</text>
                    <text x="550" y="557" text-anchor="middle" fill="#888" font-size="15">RDA prevents deficiency; it does not preserve aging muscle</text>
                    <rect x="150" y="620" width="800" height="160" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="672" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">PER-MEAL SWITCH: 25-30 G PROTEIN</text>
                    <text x="550" y="712" text-anchor="middle" fill="#fff" font-size="17">with ~2.5-3 g leucine to flip on muscle protein synthesis</text>
                    <text x="550" y="747" text-anchor="middle" fill="#888" font-size="15">MPS is switch-like - under the threshold, little happens</text>
                    <rect x="150" y="810" width="800" height="160" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="862" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">SPREAD ACROSS 3 MEALS</text>
                    <text x="550" y="902" text-anchor="middle" fill="#fff" font-size="17">30g x 3 flips the switch three times - one huge dinner, once</text>
                    <text x="550" y="937" text-anchor="middle" fill="#888" font-size="15">Breakfast is where most people miss entirely</text>
                    <rect x="200" y="1000" width="700" height="70" rx="18" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1044" text-anchor="middle" fill="#ffd700" font-size="18">Older muscle still listens - you just speak louder</text>
                </svg>`,
                caption: "The three-part answer to anabolic resistance: more, per-meal, spread out"
            }
        },
        {
            type: "example",
            title: "The 90-Year-Olds Who Tripled Their Strength",
            content: "In 1990, Dr. **Maria Fiatarone** and colleagues at Tufts published a study in **JAMA** that rewrote the rules of aging. The subjects: **frail nursing-home residents aged 86 to 96**, several of whom used walkers or had histories of falls. The intervention: **8 weeks of supervised high-intensity leg strength training**, three sessions a week.\n\nThe medical assumption at the time was that training this population was pointless, maybe dangerous. The results:\n• **Strength gains averaging about 174%** — participants nearly tripled their leg strength\n• **Measurable increases in muscle size** — muscle grew, even past age 90\n• **Faster walking speed**, and some participants improved from walker-dependent toward more independent mobility\n\nOne detail worth sitting with: these results came in **8 weeks**, in people born before World War I, starting from profound frailty. Nobody is too old, too weak, or too late.\n\nFollow-up research confirmed it at scale. Meta-analyses now link strength training roughly **2x/week** with **10–17% lower all-cause mortality**. And it's dose-efficient: most of the longevity benefit shows up in the first hour or two per week.\n\nThe deposit window on your muscle account never closes. Fiatarone proved it with people in their tenth decade.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">STRONG AT 96</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Fiatarone et al., JAMA 1990 - nursing-home trial</text>
                    <rect x="150" y="150" width="800" height="150" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="550" y="202" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="20">FRAIL RESIDENTS, AGES 86-96</text>
                    <text x="550" y="242" text-anchor="middle" fill="#fff" font-size="17">8 weeks of supervised leg strength training, 3x/week</text>
                    <text x="550" y="277" text-anchor="middle" fill="#888" font-size="15">A population medicine assumed could not adapt</text>
                    <text x="550" y="360" text-anchor="middle" fill="#888" font-size="17">Leg strength, before and after</text>
                    <rect x="280" y="560" width="180" height="120" rx="12" fill="rgba(239,68,68,0.25)" stroke="#ef4444" stroke-width="2"/>
                    <text x="370" y="630" text-anchor="middle" fill="#fff" font-size="17">BEFORE</text>
                    <rect x="640" y="400" width="180" height="280" rx="12" fill="rgba(16,185,129,0.3)" stroke="#10b981" stroke-width="2"/>
                    <text x="730" y="550" text-anchor="middle" fill="#fff" font-size="17">AFTER</text>
                    <text x="730" y="375" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="24">+174% AVERAGE</text>
                    <line x1="200" y1="680" x2="900" y2="680" stroke="#888" stroke-width="2"/>
                    <rect x="80" y="730" width="450" height="150" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="305" y="782" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="19">MUSCLE GREW</text>
                    <text x="305" y="820" text-anchor="middle" fill="#fff" font-size="16">Measurable size increases</text>
                    <text x="305" y="850" text-anchor="middle" fill="#fff" font-size="16">past age 90</text>
                    <rect x="570" y="730" width="450" height="150" rx="20" fill="rgba(20,184,166,0.15)" stroke="#14b8a6" stroke-width="2"/>
                    <text x="795" y="782" text-anchor="middle" fill="#14b8a6" font-weight="bold" font-size="19">MOBILITY RETURNED</text>
                    <text x="795" y="820" text-anchor="middle" fill="#fff" font-size="16">Faster walking, less</text>
                    <text x="795" y="850" text-anchor="middle" fill="#fff" font-size="16">walker dependence</text>
                    <rect x="150" y="920" width="800" height="120" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="965" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="19">TODAY'S META-ANALYSES AGREE</text>
                    <text x="550" y="1005" text-anchor="middle" fill="#fff" font-size="17">Strength training ~2x/week: 10-17% lower all-cause mortality</text>
                </svg>`,
                caption: "Eight weeks of training nearly tripled strength in 86-96 year olds"
            }
        },
        {
            type: "concept",
            title: "Strength Training: The Longevity Prescription",
            content: "If strength training were a pill, it would be front-page news. Here's the evidence file:\n\n**Mortality.** Large meta-analyses (including a 2022 pooled analysis in the *British Journal of Sports Medicine*) associate resistance training about **2x/week** — even just 30–60 minutes weekly — with **10–17% lower all-cause mortality**, plus lower cardiovascular disease, diabetes, and cancer mortality. The benefit adds to, and stacks with, aerobic exercise.\n\n**Metabolism.** More muscle means a bigger glucose sink, better insulin sensitivity, and a higher resting energy burn. A 2025 Frontiers in Physiology review concluded that **combined aerobic + resistance training** gives older adults the best glucose control of any exercise mix.\n\n**Falls and fractures — the underrated killer.** Falls are the leading cause of injury death in adults 65+. A hip fracture is a life-changing event: many older adults never regain prior independence. Strength training attacks this from three directions:\n• **Stronger legs** catch a stumble before it becomes a fall\n• **Fast-twitch power** — trained explosiveness is your trip-recovery reflex\n• **Denser bones** — loading bone stimulates it to rebuild, directly reducing fracture risk\n\nEvery rep is simultaneously a deposit in your glucose account, your fall-insurance policy, and your mortality curve.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">IF IT WERE A PILL</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">The strength training evidence file</text>
                    <rect x="80" y="160" width="300" height="260" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="230" y="212" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">MORTALITY</text>
                    <text x="230" y="262" text-anchor="middle" fill="#fff" font-weight="bold" font-size="30">-10-17%</text>
                    <text x="230" y="305" text-anchor="middle" fill="#fff" font-size="15">all-cause mortality</text>
                    <text x="230" y="340" text-anchor="middle" fill="#888" font-size="14">~2x/week, 30-60 min total</text>
                    <text x="230" y="370" text-anchor="middle" fill="#888" font-size="14">BJSM 2022 meta-analysis</text>
                    <rect x="400" y="160" width="300" height="260" rx="20" fill="rgba(99,102,241,0.15)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="212" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">METABOLISM</text>
                    <text x="550" y="262" text-anchor="middle" fill="#fff" font-size="15">Bigger glucose sink</text>
                    <text x="550" y="295" text-anchor="middle" fill="#fff" font-size="15">Better insulin sensitivity</text>
                    <text x="550" y="328" text-anchor="middle" fill="#fff" font-size="15">Higher resting burn</text>
                    <text x="550" y="370" text-anchor="middle" fill="#888" font-size="13">Best combo: aerobic + resistance</text>
                    <text x="550" y="396" text-anchor="middle" fill="#888" font-size="13">Frontiers in Physiology 2025</text>
                    <rect x="720" y="160" width="300" height="260" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="870" y="212" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">FALL-PROOFING</text>
                    <text x="870" y="262" text-anchor="middle" fill="#fff" font-size="15">Stronger legs</text>
                    <text x="870" y="295" text-anchor="middle" fill="#fff" font-size="15">Trip-recovery power</text>
                    <text x="870" y="328" text-anchor="middle" fill="#fff" font-size="15">Denser, loaded bones</text>
                    <text x="870" y="370" text-anchor="middle" fill="#888" font-size="13">Falls: #1 injury death</text>
                    <text x="870" y="396" text-anchor="middle" fill="#888" font-size="13">cause at 65+</text>
                    <rect x="150" y="480" width="800" height="180" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="532" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">WHY HIP FRACTURES MATTER SO MUCH</text>
                    <text x="550" y="575" text-anchor="middle" fill="#fff" font-size="17">Many older adults never regain prior independence</text>
                    <text x="550" y="612" text-anchor="middle" fill="#888" font-size="15">Prevention beats recovery - build the reserve before the stumble</text>
                    <rect x="150" y="700" width="800" height="150" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="752" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">DOSE-EFFICIENT</text>
                    <text x="550" y="792" text-anchor="middle" fill="#fff" font-size="17">Most longevity benefit arrives in the first 1-2 hours/week</text>
                    <text x="550" y="827" text-anchor="middle" fill="#888" font-size="15">You do not need to live in a gym</text>
                    <rect x="200" y="910" width="700" height="100" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="950" text-anchor="middle" fill="#ffd700" font-size="18">Every rep: a glucose deposit, a fall-insurance</text>
                    <text x="550" y="985" text-anchor="middle" fill="#ffd700" font-size="18">payment, and a bend in your mortality curve</text>
                </svg>`,
                caption: "Three payouts per rep: mortality, metabolism, fall-proofing"
            }
        },
        {
            type: "application",
            title: "Your First Two Deposits This Week",
            content: "You need exactly **two sessions this week**, 20–30 minutes each. No gym required. (New to exercise, or managing a condition? Clear it with your clinician first, and consider a session with a trainer for form.)\n\n1. **Schedule 2 sessions now** — put them in your calendar like appointments. Evidence says ~2x/week captures most of the mortality benefit\n\n2. **Do the Big 4 pattern** — each session: a **squat pattern** (sit-to-stand from a chair), a **push** (wall or counter push-ups), a **pull** (resistance band rows), and a **hinge or carry** (glute bridges, or carry heavy groceries). 2–3 sets of 8–12 reps each\n\n3. **Apply progressive overload** — when 12 reps feels easy, make it harder: slow the lowering phase, add a backpack with books, or use a thicker band. Muscle only adapts to challenge\n\n4. **Anchor each session with protein** — get your 25–30 g within a couple of hours of training (Greek yogurt with nuts, eggs, a shake — and don't skip protein at breakfast)\n\n5. **Track one number** — your sit-to-stand max in 30 seconds, tested on day 1 and every 4 weeks. Watching it climb is the deposit slip for your muscle account",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">TWO DEPOSITS A WEEK</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Your starter resistance plan - no gym required</text>
                    <rect x="150" y="150" width="800" height="130" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="203" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="22">1.</text>
                    <text x="245" y="203" text-anchor="start" fill="#fff" font-size="19">Calendar 2 sessions, 20-30 min each</text>
                    <text x="245" y="245" text-anchor="start" fill="#888" font-size="16">Treat them like appointments - 2x/week is the dose</text>
                    <rect x="150" y="310" width="800" height="130" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="363" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="22">2.</text>
                    <text x="245" y="363" text-anchor="start" fill="#fff" font-size="19">Big 4: squat, push, pull, hinge or carry</text>
                    <text x="245" y="405" text-anchor="start" fill="#888" font-size="16">Chair stands, wall push-ups, band rows, glute bridges</text>
                    <rect x="150" y="470" width="800" height="130" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="523" text-anchor="start" fill="#10b981" font-weight="bold" font-size="22">3.</text>
                    <text x="245" y="523" text-anchor="start" fill="#fff" font-size="19">Progress when 12 reps feels easy</text>
                    <text x="245" y="565" text-anchor="start" fill="#888" font-size="16">Slow the lowering, add a loaded backpack, thicker band</text>
                    <rect x="150" y="630" width="800" height="130" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="683" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="22">4.</text>
                    <text x="245" y="683" text-anchor="start" fill="#fff" font-size="19">Anchor sessions with 25-30 g protein</text>
                    <text x="245" y="725" text-anchor="start" fill="#888" font-size="16">Yogurt and nuts, eggs, shake - and protein at breakfast</text>
                    <rect x="150" y="790" width="800" height="130" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="843" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="22">5.</text>
                    <text x="245" y="843" text-anchor="start" fill="#fff" font-size="19">Track 30-second sit-to-stands every 4 weeks</text>
                    <text x="245" y="885" text-anchor="start" fill="#888" font-size="16">Your rising number is the deposit slip</text>
                    <rect x="200" y="960" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1010" text-anchor="middle" fill="#ffd700" font-size="19">Session one can happen in your kitchen tonight</text>
                </svg>`,
                caption: "Five steps to your first week of muscle deposits"
            }
        },
        {
            type: "quote",
            content: "It is a shame for a man to grow old without seeing the beauty and strength of which his body is capable.",
            author: "Socrates, as recorded by Xenophon in Memorabilia",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">WISDOM</text>
                    <rect x="100" y="300" width="900" height="280" rx="20" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="160" y="390" text-anchor="start" fill="#fff" font-style="italic" font-size="22">"It is a shame for a man to grow old</text>
                    <text x="160" y="435" text-anchor="start" fill="#fff" font-style="italic" font-size="22">without seeing the beauty and strength</text>
                    <text x="160" y="480" text-anchor="start" fill="#fff" font-style="italic" font-size="22">of which his body is capable."</text>
                    <text x="940" y="540" text-anchor="end" fill="#8b5cf6" font-size="18">- Socrates, via Xenophon's Memorabilia</text>
                    <circle cx="550" cy="750" r="100" fill="rgba(255,215,0,0.08)" stroke="#ffd700" stroke-width="2"/>
                    <rect x="505" y="735" width="90" height="14" rx="7" fill="#ffd700" opacity="0.8"/>
                    <circle cx="495" cy="742" r="22" fill="none" stroke="#ffd700" stroke-width="5"/>
                    <circle cx="605" cy="742" r="22" fill="none" stroke="#ffd700" stroke-width="5"/>
                    <text x="550" y="910" text-anchor="middle" fill="#888" font-size="17">A 2,400-year-old observation that Fiatarone's</text>
                    <text x="550" y="945" text-anchor="middle" fill="#888" font-size="17">90-year-olds proved is never out of date</text>
                </svg>`,
                caption: "Ancient wisdom, modern evidence"
            }
        },
        {
            type: "quiz",
            question: "A 68-year-old eats 10 g of protein at breakfast, 20 g at lunch, and 60 g at dinner (90 g total). Based on this lesson, what's the main problem with this pattern?",
            options: [
                { text: "Nothing — 90 g total exceeds her needs, and only the daily total matters for muscle", correct: false },
                { text: "Only dinner reliably crosses the ~25-30 g per-meal threshold, so muscle protein synthesis is fully triggered just once a day", correct: true },
                { text: "The total is dangerously high — older adults should stay near the RDA of 0.8 g/kg to protect their kidneys", correct: false },
                { text: "She should concentrate even more protein at dinner, since muscle only rebuilds during nighttime sleep", correct: false }
            ],
            explanation: "Because of anabolic resistance, older adults need about 25-30 g of protein (with ~2.5-3 g leucine) in a single sitting to flip the muscle protein synthesis switch. Her breakfast and lunch fall below that threshold, so despite a solid 90 g daily total, MPS fires robustly only after dinner. Redistributing toward ~30 g per meal would trigger rebuilding three times daily. The 'total is all that matters' answer misses the switch-like threshold, and for healthy older adults, 1.2-1.6 g/kg/day is the evidence-based recommendation — not a hazard.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE PROTEIN PATTERN PROBLEM</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">10 g breakfast + 20 g lunch + 60 g dinner</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">What does anabolic resistance say about this?</text>
                    <line x1="150" y1="560" x2="950" y2="560" stroke="#10b981" stroke-width="3" stroke-dasharray="10" opacity="0.7"/>
                    <text x="940" y="540" text-anchor="end" fill="#10b981" font-size="16">MPS threshold: ~25-30 g</text>
                    <rect x="200" y="600" width="160" height="60" rx="10" fill="rgba(239,68,68,0.3)" stroke="#ef4444" stroke-width="2"/>
                    <text x="280" y="700" text-anchor="middle" fill="#fff" font-size="17">Breakfast</text>
                    <text x="280" y="732" text-anchor="middle" fill="#888" font-size="15">10 g</text>
                    <rect x="470" y="540" width="160" height="120" rx="10" fill="rgba(245,158,11,0.3)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="700" text-anchor="middle" fill="#fff" font-size="17">Lunch</text>
                    <text x="550" y="732" text-anchor="middle" fill="#888" font-size="15">20 g</text>
                    <rect x="740" y="380" width="160" height="280" rx="10" fill="rgba(16,185,129,0.3)" stroke="#10b981" stroke-width="2"/>
                    <text x="820" y="700" text-anchor="middle" fill="#fff" font-size="17">Dinner</text>
                    <text x="820" y="732" text-anchor="middle" fill="#888" font-size="15">60 g</text>
                    <rect x="200" y="800" width="700" height="100" rx="20" fill="rgba(20,184,166,0.15)" stroke="#14b8a6" stroke-width="2"/>
                    <text x="550" y="842" text-anchor="middle" fill="#14b8a6" font-weight="bold" font-size="20">HINT</text>
                    <text x="550" y="878" text-anchor="middle" fill="#fff" font-size="17">How many of these bars cross the switch line?</text>
                    <rect x="200" y="940" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="990" text-anchor="middle" fill="#ffd700" font-size="19">MPS is a switch, not a slider</text>
                </svg>`,
                caption: "Final check: apply the per-meal protein threshold"
            }
        },
        {
            type: "concept",
            title: "The Compounding Account: Your Muscle Strategy for Life",
            content: "Let's close the loop on the retirement account metaphor, because it holds up remarkably well:\n\n• **Compound interest works both ways.** Muscle built in your 40s and 50s makes training easier in your 60s and 70s, which preserves independence in your 80s. Neglect also compounds: weakness leads to less activity, which leads to more weakness\n• **The best time to start was 20 years ago. The second-best time is this week.** Fiatarone's 90-year-olds prove late deposits still pay — muscle remains trainable in your tenth decade\n• **You're saving for a specific purchase.** Not a beach body — the ability to rise from the floor unassisted, carry your own groceries, survive a hospitalization with reserve to spare, and lift a grandchild without fear\n\nAnd notice how this lesson locks into the rest of the book: muscle is the **glucose sink** that flattens the rollercoaster from Lesson 5, a **myokine pharmacy** for your brain and immune system, the counterweight to **anabolic resistance**, and the engine behind the grip strength that predicted survival in 140,000 people.\n\nEvery system in this book runs better with muscle behind it. That's why it's not vanity tissue. It's the **organ of longevity** — and the account is open for deposits today.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">WHY MUSCLE IS THE ORGAN</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Everything in this book runs better with muscle</text>
                    <circle cx="550" cy="450" r="130" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="3"/>
                    <text x="550" y="440" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="24">MUSCLE</text>
                    <text x="550" y="478" text-anchor="middle" fill="#888" font-size="15">the longevity organ</text>
                    <line x1="440" y1="360" x2="290" y2="255" stroke="#6366f1" stroke-width="3" stroke-dasharray="8" opacity="0.7"/>
                    <line x1="660" y1="360" x2="810" y2="255" stroke="#ec4899" stroke-width="3" stroke-dasharray="8" opacity="0.7"/>
                    <line x1="440" y1="540" x2="290" y2="645" stroke="#10b981" stroke-width="3" stroke-dasharray="8" opacity="0.7"/>
                    <line x1="660" y1="540" x2="810" y2="645" stroke="#f59e0b" stroke-width="3" stroke-dasharray="8" opacity="0.7"/>
                    <circle cx="240" cy="210" r="80" fill="rgba(99,102,241,0.2)" stroke="#6366f1" stroke-width="2"/>
                    <text x="240" y="200" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="16">GLUCOSE SINK</text>
                    <text x="240" y="228" text-anchor="middle" fill="#fff" font-size="13">flattens Lesson 5's</text>
                    <text x="240" y="250" text-anchor="middle" fill="#fff" font-size="13">rollercoaster</text>
                    <circle cx="860" cy="210" r="80" fill="rgba(236,72,153,0.2)" stroke="#ec4899" stroke-width="2"/>
                    <text x="860" y="200" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="16">MYOKINES</text>
                    <text x="860" y="228" text-anchor="middle" fill="#fff" font-size="13">letters to brain,</text>
                    <text x="860" y="250" text-anchor="middle" fill="#fff" font-size="13">bone, immunity</text>
                    <circle cx="240" cy="690" r="80" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="2"/>
                    <text x="240" y="680" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="16">SURVIVAL</text>
                    <text x="240" y="708" text-anchor="middle" fill="#fff" font-size="13">reserve for illness,</text>
                    <text x="240" y="730" text-anchor="middle" fill="#fff" font-size="13">falls, surgery</text>
                    <circle cx="860" cy="690" r="80" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="860" y="680" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="16">INDEPENDENCE</text>
                    <text x="860" y="708" text-anchor="middle" fill="#fff" font-size="13">floor, groceries,</text>
                    <text x="860" y="730" text-anchor="middle" fill="#fff" font-size="13">grandchildren</text>
                    <rect x="150" y="830" width="800" height="120" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="880" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">COMPOUNDING WORKS BOTH WAYS</text>
                    <text x="550" y="920" text-anchor="middle" fill="#fff" font-size="17">Strength compounds. So does neglect. Choose the curve.</text>
                    <rect x="200" y="990" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1040" text-anchor="middle" fill="#ffd700" font-size="19">The account is open for deposits today</text>
                </svg>`,
                caption: "Muscle at the center: glucose, myokines, survival reserve, independence"
            }
        }
    ]
},
{
    id: 7,
    title: "Exercise Is Medicine: Zone 2, VO2max, and Lifting for Life",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "What If One Number Predicted Your Lifespan Better Than Smoking?",
            content: "In 2018, Cleveland Clinic researchers published something that should have been front-page news. Mandsager and colleagues analyzed **122,007 patients** who had done treadmill tests, then tracked who lived and who died (JAMA Network Open).\n\nThe result? **Cardiorespiratory fitness was one of the strongest predictors of all-cause mortality they had ever measured.** Being in the lowest fitness group was riskier than being a smoker. Riskier than having diabetes. Riskier than heart disease.\n\nAnd here's the part that matters most for you: unlike your genes or your age, fitness is **trainable at any age**. The study found no upper limit to the benefit — the fittest people kept gaining protection all the way up.\n\nThis lesson gives you the three pillars of exercise as medicine — Zone 2, intervals, and strength — and a realistic weekly plan that fits an actual human life.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE FITNESS FINDING</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Mandsager 2018 - JAMA Network Open</text>
                    <rect x="150" y="150" width="800" height="140" rx="20" fill="rgba(99,102,241,0.15)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="210" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="26">122,007 PATIENTS</text>
                    <text x="550" y="255" text-anchor="middle" fill="#fff" font-size="20">Treadmill-tested at Cleveland Clinic</text>
                    <rect x="150" y="330" width="800" height="200" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="390" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="24">LOW FITNESS WAS RISKIER THAN:</text>
                    <text x="550" y="440" text-anchor="middle" fill="#fff" font-size="20">Smoking - Diabetes - Heart disease</text>
                    <text x="550" y="485" text-anchor="middle" fill="#888" font-size="17">For predicting death from any cause</text>
                    <rect x="150" y="570" width="800" height="200" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="630" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="24">NO UPPER LIMIT TO BENEFIT</text>
                    <text x="550" y="680" text-anchor="middle" fill="#fff" font-size="20">Elite-fitness patients had the lowest risk of all</text>
                    <text x="550" y="725" text-anchor="middle" fill="#888" font-size="17">More fitness kept adding protection</text>
                    <rect x="150" y="810" width="800" height="160" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="875" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="22">THE GOOD NEWS</text>
                    <text x="550" y="925" text-anchor="middle" fill="#fff" font-size="20">Fitness is trainable at any age</text>
                </svg>`,
                caption: "Low fitness predicted death better than smoking or diabetes"
            }
        },
        {
            type: "concept",
            title: "VO2max: The Engine Size You Can Actually Upgrade",
            content: "**VO2max** is the maximum amount of oxygen your body can use per minute — the size of your aerobic engine. It reflects your heart, lungs, blood, and mitochondria all working together, which is exactly why it predicts survival so well.\n\nHere's what the research shows:\n\n• **It declines about 10% per decade** if you're sedentary — that's why stairs feel harder at 55 than at 35\n\n• **The decline is not destiny** — it's highly trainable at any age. Training studies show 60- and 70-year-olds improving VO2max by 15-25%\n\n• **Every step up matters** — in the Mandsager data, moving from 'low' to 'below average' fitness produced one of the biggest drops in mortality risk of any change\n\n• **It's a functional reserve** — a higher VO2max at 50 means that at 80, ordinary life (stairs, groceries, travel) still sits comfortably inside your capacity\n\nThink of VO2max as a retirement account for your physiology. Every aerobic session is a deposit, and compound interest is real: the fitness you build in midlife is the independence you spend in late life.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">VO2MAX ACROSS LIFE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Sedentary decline vs trained trajectory</text>
                    <line x1="150" y1="800" x2="1000" y2="800" stroke="#888" stroke-width="2"/>
                    <line x1="150" y1="800" x2="150" y2="180" stroke="#888" stroke-width="2"/>
                    <text x="200" y="850" text-anchor="middle" fill="#888" font-size="18">30</text>
                    <text x="400" y="850" text-anchor="middle" fill="#888" font-size="18">45</text>
                    <text x="600" y="850" text-anchor="middle" fill="#888" font-size="18">60</text>
                    <text x="800" y="850" text-anchor="middle" fill="#888" font-size="18">75</text>
                    <text x="975" y="850" text-anchor="middle" fill="#888" font-size="18">90</text>
                    <text x="575" y="900" text-anchor="middle" fill="#888" font-size="20">Age</text>
                    <text x="105" y="500" text-anchor="middle" fill="#888" font-size="20" transform="rotate(-90 105 500)">VO2max</text>
                    <path d="M200 300 L400 400 L600 520 L800 660 L975 780" stroke="#ef4444" stroke-width="4" fill="none"/>
                    <text x="700" y="740" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">Sedentary: -10% per decade</text>
                    <path d="M200 300 L400 280 L600 340 L800 430 L975 540" stroke="#10b981" stroke-width="4" fill="none"/>
                    <text x="680" y="330" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">Trained: higher, slower decline</text>
                    <line x1="150" y1="700" x2="1000" y2="700" stroke="#f59e0b" stroke-width="2" stroke-dasharray="8"/>
                    <text x="330" y="685" text-anchor="middle" fill="#f59e0b" font-size="17">Threshold for independent living</text>
                    <rect x="150" y="940" width="800" height="110" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="990" text-anchor="middle" fill="#ffd700" font-size="20">The gap between the two lines is</text>
                    <text x="550" y="1025" text-anchor="middle" fill="#fff" font-size="20">decades of independence - and it is trainable</text>
                </svg>`,
                caption: "Training bends the aerobic aging curve"
            }
        },
        {
            type: "visual",
            title: "Fitness vs the Famous Killers",
            content: "When the Cleveland Clinic team compared risk factors head to head, the picture was striking. **Low cardiorespiratory fitness carried a mortality risk comparable to — or greater than — smoking, diabetes, and coronary artery disease.**\n\nWe screen relentlessly for blood pressure and cholesterol, yet almost no one gets their fitness measured. This chart is the argument for treating your aerobic capacity as a vital sign.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">RELATIVE MORTALITY RISK</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Compared with being highly fit (Mandsager 2018)</text>
                    <text x="290" y="215" text-anchor="end" fill="#fff" font-size="20">Smoking</text>
                    <rect x="320" y="185" width="380" height="50" rx="10" fill="rgba(245,158,11,0.6)"/>
                    <text x="290" y="335" text-anchor="end" fill="#fff" font-size="20">Diabetes</text>
                    <rect x="320" y="305" width="330" height="50" rx="10" fill="rgba(245,158,11,0.6)"/>
                    <text x="290" y="455" text-anchor="end" fill="#fff" font-size="20">Heart disease</text>
                    <rect x="320" y="425" width="350" height="50" rx="10" fill="rgba(245,158,11,0.6)"/>
                    <text x="290" y="575" text-anchor="end" fill="#ef4444" font-weight="bold" font-size="20">Low fitness</text>
                    <rect x="320" y="545" width="560" height="50" rx="10" fill="rgba(239,68,68,0.7)" stroke="#ef4444" stroke-width="2"/>
                    <text x="910" y="580" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="18">Highest</text>
                    <text x="290" y="695" text-anchor="end" fill="#10b981" font-weight="bold" font-size="20">Elite fitness</text>
                    <rect x="320" y="665" width="60" height="50" rx="10" fill="rgba(16,185,129,0.7)" stroke="#10b981" stroke-width="2"/>
                    <text x="410" y="700" text-anchor="start" fill="#10b981" font-size="18">Lowest risk of all groups</text>
                    <rect x="150" y="790" width="800" height="130" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="845" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">WE TREAT THE TOP THREE AGGRESSIVELY</text>
                    <text x="550" y="890" text-anchor="middle" fill="#fff" font-size="19">Yet fitness is rarely even measured</text>
                    <rect x="150" y="950" width="800" height="100" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1010" text-anchor="middle" fill="#ffd700" font-size="20">Treat your fitness like a vital sign</text>
                </svg>`,
                caption: "Low fitness out-predicted the classic risk factors"
            }
        },
        {
            type: "example",
            title: "Two 62-Year-Olds, Two Different Futures",
            content: "Meet two 62-year-olds with identical bloodwork.\n\n**Linda** stopped exercising in her 40s. Her VO2max has drifted down about 10% per decade, so a flight of stairs now pushes her near her maximum — she arrives at the top breathless. Ordinary life is becoming a workout she didn't sign up for.\n\n**Carol** started walking briskly at 55, added two strength sessions at 58, and now cycles three mornings a week. Training studies show people her age can raise VO2max **15-25%** — and she did. The same staircase uses maybe half her capacity. She notices nothing.\n\nHere's the wow: research on lifelong exercisers in their 70s (Ball State University, 2018) found their muscles' aerobic capacity resembled people **decades younger** — and late starters captured much of the same benefit.\n\nCarol isn't lucky. She just made deposits Linda didn't. And the account was open to both of them — it's still open to you, whether you're 35 or 75.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">SAME AGE, DIFFERENT ENGINE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">The same staircase, two very different bodies</text>
                    <rect x="60" y="160" width="460" height="440" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="220" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="24">LINDA, 62</text>
                    <text x="290" y="265" text-anchor="middle" fill="#888" font-size="17">Sedentary since her 40s</text>
                    <rect x="120" y="300" width="340" height="60" rx="12" fill="rgba(255,255,255,0.05)"/>
                    <rect x="120" y="300" width="310" height="60" rx="12" fill="rgba(239,68,68,0.5)"/>
                    <text x="290" y="340" text-anchor="middle" fill="#fff" font-size="17">Stairs use ~90% of capacity</text>
                    <text x="290" y="420" text-anchor="middle" fill="#fff" font-size="18">Breathless at the top</text>
                    <text x="290" y="460" text-anchor="middle" fill="#fff" font-size="18">Avoids hills and long walks</text>
                    <text x="290" y="500" text-anchor="middle" fill="#fff" font-size="18">World slowly shrinking</text>
                    <text x="290" y="555" text-anchor="middle" fill="#888" font-size="16">VO2max drifted -10% per decade</text>
                    <rect x="580" y="160" width="460" height="440" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="220" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="24">CAROL, 62</text>
                    <text x="810" y="265" text-anchor="middle" fill="#888" font-size="17">Started training at 55</text>
                    <rect x="640" y="300" width="340" height="60" rx="12" fill="rgba(255,255,255,0.05)"/>
                    <rect x="640" y="300" width="170" height="60" rx="12" fill="rgba(16,185,129,0.5)"/>
                    <text x="810" y="340" text-anchor="middle" fill="#fff" font-size="17">Stairs use ~50% of capacity</text>
                    <text x="810" y="420" text-anchor="middle" fill="#fff" font-size="18">Barely notices the climb</text>
                    <text x="810" y="460" text-anchor="middle" fill="#fff" font-size="18">Hikes, travels, keeps up</text>
                    <text x="810" y="500" text-anchor="middle" fill="#fff" font-size="18">World stays wide open</text>
                    <text x="810" y="555" text-anchor="middle" fill="#888" font-size="16">Raised VO2max 15-25% after 55</text>
                    <rect x="150" y="660" width="800" height="180" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="720" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE WOW FACT</text>
                    <text x="550" y="765" text-anchor="middle" fill="#fff" font-size="19">Lifelong exercisers in their 70s had muscle</text>
                    <text x="550" y="800" text-anchor="middle" fill="#fff" font-size="19">aerobic capacity of people decades younger</text>
                    <rect x="150" y="880" width="800" height="120" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="930" text-anchor="middle" fill="#ffd700" font-size="20">The difference was not luck or genes.</text>
                    <text x="550" y="970" text-anchor="middle" fill="#fff" font-size="20">It was deposits - and the account is still open.</text>
                </svg>`,
                caption: "Trained capacity turns hard tasks back into easy ones"
            }
        },
        {
            type: "quiz",
            question: "In the Mandsager 2018 study of 122,007 patients, what did researchers find about cardiorespiratory fitness and mortality?",
            options: [
                { text: "Fitness helped, but smoking and diabetes were far stronger predictors of death", correct: false },
                { text: "Low fitness was riskier than smoking or diabetes, and there was no upper limit to the benefit of being fitter", correct: true },
                { text: "Benefits plateaued at moderate fitness - extreme fitness slightly increased mortality", correct: false },
                { text: "Fitness only predicted mortality in patients who already had heart disease", correct: false }
            ],
            explanation: "Low fitness carried a mortality risk greater than smoking, diabetes, or heart disease — and the fittest group had the lowest risk of all, with no upper limit to the benefit. The 'plateau' answer is the classic misconception; this study specifically looked for harm at elite fitness levels and found none. The finding held across ages and in people with and without existing disease.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="200" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">MANDSAGER 2018</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">122,007 patients - Cleveland Clinic</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">Treadmill fitness vs all-cause mortality</text>
                    <rect x="150" y="380" width="800" height="300" rx="20" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="440" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">RECALL BEFORE YOU ANSWER</text>
                    <text x="550" y="495" text-anchor="middle" fill="#fff" font-size="19">How did low fitness compare with</text>
                    <text x="550" y="530" text-anchor="middle" fill="#fff" font-size="19">smoking and diabetes?</text>
                    <text x="550" y="590" text-anchor="middle" fill="#fff" font-size="19">Was there a ceiling on the benefit</text>
                    <text x="550" y="625" text-anchor="middle" fill="#fff" font-size="19">of getting fitter?</text>
                    <rect x="150" y="740" width="800" height="110" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="790" text-anchor="middle" fill="#ffd700" font-size="20">Hint: the study made headlines because</text>
                    <text x="550" y="825" text-anchor="middle" fill="#fff" font-size="20">fitness beat the famous risk factors</text>
                </svg>`,
                caption: "Test your understanding of the fitness-mortality link"
            }
        },
        {
            type: "concept",
            title: "Zone 2: The Boring Pace That Rebuilds Your Mitochondria",
            content: "**Zone 2** is steady aerobic work at roughly **60-70% of your maximum heart rate** — the pace where you can still hold a conversation, but singing would be a stretch. It feels almost too easy. That's the point.\n\nWhat's happening inside at that pace:\n\n• **Mitochondrial density grows** — Zone 2 is the strongest stimulus for building more of the cellular power plants that decline with age\n\n• **Fat oxidation improves** — you train your muscles to burn fat efficiently, a hallmark of metabolic flexibility\n\n• **Your glucose sink deepens** — muscles packed with healthy mitochondria pull sugar out of your blood more easily, improving insulin sensitivity\n\n• **It's recoverable** — because the intensity is low, you can do a lot of it without wearing yourself down\n\nThe dose the evidence supports: **at least 150 minutes per week**, and more is better — think three to four sessions of 30-60 minutes. Brisk walking, easy cycling, incline treadmill, rowing, swimming — the modality doesn't matter.\n\nThe classic mistake is going too hard. If you can't speak in full sentences, you've left Zone 2. Slow down. The magic is in the easy miles, accumulated over months.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">FINDING ZONE 2</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">60-70% of max heart rate - the talk test</text>
                    <rect x="100" y="160" width="900" height="90" rx="15" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="250" y="215" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="20">ZONE 1</text>
                    <text x="650" y="200" text-anchor="middle" fill="#fff" font-size="17">Strolling - easy to chat and sing</text>
                    <text x="650" y="230" text-anchor="middle" fill="#888" font-size="15">Recovery, not much adaptation</text>
                    <rect x="100" y="270" width="900" height="130" rx="15" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="3"/>
                    <text x="250" y="330" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="24">ZONE 2</text>
                    <text x="250" y="365" text-anchor="middle" fill="#10b981" font-size="16">60-70% max HR</text>
                    <text x="650" y="320" text-anchor="middle" fill="#fff" font-size="18">Conversational - full sentences, no singing</text>
                    <text x="650" y="355" text-anchor="middle" fill="#fff" font-size="17">Mitochondria grow, fat-burning improves</text>
                    <text x="650" y="385" text-anchor="middle" fill="#888" font-size="15">The metabolic sweet spot</text>
                    <rect x="100" y="420" width="900" height="90" rx="15" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="250" y="475" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">ZONE 3-4</text>
                    <text x="650" y="460" text-anchor="middle" fill="#fff" font-size="17">Short phrases only - breathing hard</text>
                    <text x="650" y="490" text-anchor="middle" fill="#888" font-size="15">Harder to recover from daily</text>
                    <rect x="100" y="530" width="900" height="90" rx="15" fill="rgba(239,68,68,0.15)" stroke="#ef4444" stroke-width="2"/>
                    <text x="250" y="585" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">ZONE 5</text>
                    <text x="650" y="570" text-anchor="middle" fill="#fff" font-size="17">One word at a time - near maximum</text>
                    <text x="650" y="600" text-anchor="middle" fill="#888" font-size="15">Reserve for short intervals</text>
                    <rect x="100" y="670" width="440" height="180" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="320" y="730" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">THE DOSE</text>
                    <text x="320" y="775" text-anchor="middle" fill="#fff" font-size="18">150+ minutes per week</text>
                    <text x="320" y="810" text-anchor="middle" fill="#888" font-size="16">e.g. 3-4 sessions of 30-60 min</text>
                    <rect x="560" y="670" width="440" height="180" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="780" y="730" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="21">THE PAYOFF</text>
                    <text x="780" y="775" text-anchor="middle" fill="#fff" font-size="18">More mitochondria, better</text>
                    <text x="780" y="810" text-anchor="middle" fill="#fff" font-size="18">fat burning, deeper glucose sink</text>
                    <rect x="150" y="900" width="800" height="120" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="950" text-anchor="middle" fill="#ffd700" font-size="20">If you cannot speak in full sentences,</text>
                    <text x="550" y="990" text-anchor="middle" fill="#fff" font-size="20">slow down - the magic is in the easy miles</text>
                </svg>`,
                caption: "The talk test keeps you in the mitochondria-building zone"
            }
        },
        {
            type: "concept",
            title: "HIIT: Small Doses, Big Signals",
            content: "If Zone 2 is the slow simmer, **high-intensity interval training (HIIT)** is the flash of heat — brief, hard efforts (think 30 seconds to 4 minutes) separated by recovery.\n\nWhy such short work produces such big results comes down to cell signaling:\n\n• Hard efforts drain muscle energy fast, activating **AMPK** — your cell's low-fuel alarm\n\n• AMPK switches on **PGC-1a**, often called the master regulator of **mitochondrial biogenesis** — the command to build new mitochondria and upgrade old ones\n\n• The result: HIIT is one of the fastest known ways to raise **VO2max**, the number from card one that predicts survival\n\nA famous line of research (Gibala and colleagues, McMaster University) showed that a few minutes of hard intervals could match hours of moderate cardio for some mitochondrial adaptations.\n\nThe practical dose is small: **once, maybe twice a week**. A simple version: after a warm-up, do **4 rounds of 4 minutes hard** (breathing too hard to talk) with 3 easy minutes between — the well-studied Norwegian 4x4 — or start gentler with 30-second brisk pushes on a walk.\n\nHIIT is potent, which is exactly why you don't need much. Zone 2 builds the base; intervals raise the ceiling.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">HOW HIIT REWIRES CELLS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">From hard effort to new mitochondria</text>
                    <rect x="150" y="160" width="800" height="110" rx="20" fill="rgba(239,68,68,0.15)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="210" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">HARD EFFORT (30 sec - 4 min)</text>
                    <text x="550" y="248" text-anchor="middle" fill="#fff" font-size="18">Muscle energy drains rapidly</text>
                    <path d="M550 270 L550 320" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,330 542,316 558,316" fill="#14b8a6"/>
                    <rect x="150" y="340" width="800" height="110" rx="20" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="390" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">AMPK ACTIVATES</text>
                    <text x="550" y="428" text-anchor="middle" fill="#fff" font-size="18">The cell's low-fuel alarm goes off</text>
                    <path d="M550 450 L550 500" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,510 542,496 558,496" fill="#14b8a6"/>
                    <rect x="150" y="520" width="800" height="110" rx="20" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="570" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">PGC-1a SWITCHES ON</text>
                    <text x="550" y="608" text-anchor="middle" fill="#fff" font-size="18">Master regulator of mitochondrial biogenesis</text>
                    <path d="M550 630 L550 680" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,690 542,676 558,676" fill="#14b8a6"/>
                    <rect x="150" y="700" width="800" height="110" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="750" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">NEW MITOCHONDRIA + HIGHER VO2MAX</text>
                    <text x="550" y="788" text-anchor="middle" fill="#fff" font-size="18">More power plants, bigger aerobic engine</text>
                    <rect x="100" y="860" width="440" height="160" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="320" y="915" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">THE DOSE</text>
                    <text x="320" y="955" text-anchor="middle" fill="#fff" font-size="17">1-2 sessions per week</text>
                    <text x="320" y="990" text-anchor="middle" fill="#888" font-size="16">e.g. Norwegian 4x4 intervals</text>
                    <rect x="560" y="860" width="440" height="160" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="780" y="915" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="20">THE ROLES</text>
                    <text x="780" y="955" text-anchor="middle" fill="#fff" font-size="17">Zone 2 builds the base</text>
                    <text x="780" y="990" text-anchor="middle" fill="#fff" font-size="17">Intervals raise the ceiling</text>
                </svg>`,
                caption: "The AMPK to PGC-1a cascade turns effort into new mitochondria"
            }
        },
        {
            type: "concept",
            title: "The Third Pillar: Lifting for Life",
            content: "Cardio builds the engine. **Strength training protects the chassis** — and after 30, you're losing it: **3-8% of muscle per decade**, accelerating after 60. Since muscle handles about **80% of insulin-stimulated glucose disposal**, losing it means losing your body's biggest blood-sugar sink.\n\nWhat resistance training delivers:\n\n• **Meta-analyses link ~2 strength sessions per week to 10-17% lower all-cause mortality**\n\n• Muscle contraction pulls glucose from blood **without needing insulin** — a workaround for insulin resistance\n\n• Stronger legs and grip predict independence; **grip strength predicted mortality** in the PURE study (Lancet, 2015)\n\n• Bone density, joint protection, and fall prevention come along for free\n\nAnd here's the finding that ties it together: a **2025 review in Frontiers in Physiology** concluded that **combined aerobic plus resistance training produces better glucose control in older adults than either alone**. Cardio deepens the sink; lifting enlarges it.\n\nThe minimum effective dose is friendly: **two sessions a week**, covering the big patterns — squat, hinge, push, pull, carry — with weights that feel challenging by the last couple of reps. Machines, dumbbells, bands, or bodyweight all count.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE THREE PILLARS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Combined training beats any single mode</text>
                    <rect x="80" y="170" width="300" height="260" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="230" y="230" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">ZONE 2</text>
                    <text x="230" y="275" text-anchor="middle" fill="#fff" font-size="17">Mitochondrial base</text>
                    <text x="230" y="310" text-anchor="middle" fill="#fff" font-size="17">Fat oxidation</text>
                    <text x="230" y="345" text-anchor="middle" fill="#888" font-size="16">150+ min per week</text>
                    <text x="230" y="390" text-anchor="middle" fill="#888" font-size="16">3-4 sessions</text>
                    <rect x="400" y="170" width="300" height="260" rx="20" fill="rgba(239,68,68,0.12)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="230" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">INTERVALS</text>
                    <text x="550" y="275" text-anchor="middle" fill="#fff" font-size="17">VO2max ceiling</text>
                    <text x="550" y="310" text-anchor="middle" fill="#fff" font-size="17">PGC-1a signaling</text>
                    <text x="550" y="345" text-anchor="middle" fill="#888" font-size="16">1-2 sessions</text>
                    <text x="550" y="390" text-anchor="middle" fill="#888" font-size="16">per week</text>
                    <rect x="720" y="170" width="300" height="260" rx="20" fill="rgba(99,102,241,0.15)" stroke="#6366f1" stroke-width="2"/>
                    <text x="870" y="230" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">STRENGTH</text>
                    <text x="870" y="275" text-anchor="middle" fill="#fff" font-size="17">Muscle = glucose sink</text>
                    <text x="870" y="310" text-anchor="middle" fill="#fff" font-size="17">10-17% lower mortality</text>
                    <text x="870" y="345" text-anchor="middle" fill="#888" font-size="16">2 sessions</text>
                    <text x="870" y="390" text-anchor="middle" fill="#888" font-size="16">per week</text>
                    <path d="M230 430 L500 540" stroke="#14b8a6" stroke-width="2" stroke-dasharray="6"/>
                    <path d="M550 430 L550 540" stroke="#14b8a6" stroke-width="2" stroke-dasharray="6"/>
                    <path d="M870 430 L600 540" stroke="#14b8a6" stroke-width="2" stroke-dasharray="6"/>
                    <rect x="200" y="560" width="700" height="170" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="3"/>
                    <text x="550" y="620" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">2025 FRONTIERS IN PHYSIOLOGY</text>
                    <text x="550" y="665" text-anchor="middle" fill="#fff" font-size="19">Aerobic + resistance combined = best</text>
                    <text x="550" y="700" text-anchor="middle" fill="#fff" font-size="19">glucose control in older adults</text>
                    <rect x="150" y="780" width="800" height="130" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="835" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="21">WHY MUSCLE MATTERS SO MUCH</text>
                    <text x="550" y="880" text-anchor="middle" fill="#fff" font-size="18">Muscle takes up ~80% of insulin-stimulated glucose</text>
                    <rect x="150" y="940" width="800" height="110" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="990" text-anchor="middle" fill="#ffd700" font-size="20">Cardio deepens the glucose sink.</text>
                    <text x="550" y="1025" text-anchor="middle" fill="#fff" font-size="20">Lifting enlarges it. You want both.</text>
                </svg>`,
                caption: "Zone 2, intervals, and strength cover complementary systems"
            }
        },
        {
            type: "example",
            title: "Exercise Snacks: The Workout Hiding in Your Day",
            content: "You don't need a gym membership to start banking benefits. Two underrated tools:\n\n**Exercise snacks** — brief bursts of movement scattered through the day. Real research examples:\n\n• Climbing **3 flights of stairs, 3 times a day, 3 days a week** measurably improved fitness in office workers (McMaster University research)\n\n• Just **2-5 minutes of light walking after meals** significantly lowers post-meal glucose (Buffey et al. 2022 meta-analysis, Sports Medicine) — the muscle contractions pull sugar straight out of your blood\n\n**NEAT** — non-exercise activity thermogenesis, the calories burned by everything that isn't formal exercise: walking to the store, taking stairs, standing while on calls, pacing, gardening. NEAT can differ between two similar people by **hundreds of calories a day**, and it often quietly collapses with desk jobs and age.\n\nA vivid case: a consultant named Dave couldn't commit to gym sessions, so he changed defaults instead — stairs always, walking meetings for every 1-on-1, parking at the far end of the lot, 5-minute walks after lunch and dinner. Six months later his resting heart rate had dropped and his afternoon energy crashes were gone. No gym. Just a day redesigned so movement was the default, not the exception.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">MOVEMENT HIDDEN IN A DAY</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Exercise snacks + NEAT add up fast</text>
                    <rect x="150" y="160" width="800" height="90" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="210" y="215" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">8 AM</text>
                    <text x="330" y="215" text-anchor="start" fill="#fff" font-size="18">Take the stairs, not the elevator</text>
                    <rect x="150" y="270" width="800" height="90" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="210" y="325" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">12:30</text>
                    <text x="330" y="325" text-anchor="start" fill="#fff" font-size="18">5-minute walk after lunch - lowers glucose</text>
                    <rect x="150" y="380" width="800" height="90" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="210" y="435" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="20">2 PM</text>
                    <text x="330" y="435" text-anchor="start" fill="#fff" font-size="18">Walking meeting instead of conference room</text>
                    <rect x="150" y="490" width="800" height="90" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="210" y="545" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">4 PM</text>
                    <text x="330" y="545" text-anchor="start" fill="#fff" font-size="18">Stair snack: 3 flights, brisk pace</text>
                    <rect x="150" y="600" width="800" height="90" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="210" y="655" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="20">7 PM</text>
                    <text x="330" y="655" text-anchor="start" fill="#fff" font-size="18">10-minute walk after dinner</text>
                    <rect x="150" y="730" width="800" height="150" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="550" y="785" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="21">BUFFEY 2022 META-ANALYSIS</text>
                    <text x="550" y="830" text-anchor="middle" fill="#fff" font-size="18">Even 2-5 min of light walking after eating</text>
                    <text x="550" y="862" text-anchor="middle" fill="#fff" font-size="18">significantly lowers post-meal glucose</text>
                    <rect x="150" y="920" width="800" height="120" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="970" text-anchor="middle" fill="#ffd700" font-size="20">NEAT can differ by hundreds of calories a day</text>
                    <text x="550" y="1008" text-anchor="middle" fill="#fff" font-size="19">Redesign defaults so movement happens automatically</text>
                </svg>`,
                caption: "A day redesigned so movement is the default"
            }
        },
        {
            type: "application",
            title: "Your Realistic Week: The Template",
            content: "Here's a complete evidence-based week — about 5 hours total, every piece adjustable to your level:\n\n1. **3x Zone 2 sessions (30-45 min each)** — brisk walk, bike, or incline treadmill at conversational pace. Mon / Wed / Sat, or whatever fits\n\n2. **2x strength sessions (30-40 min)** — squat, hinge, push, pull, carry. Challenging by the last 2 reps. Tue / Fri\n\n3. **1x interval session (20 min)** — after a warm-up, 4 rounds of 3-4 minutes hard with easy recovery between. Thu. (Skip until you have 4+ weeks of consistency)\n\n4. **Daily: walk after your biggest meal (5-10 min)** and take stairs when they're an option\n\n5. **Starting from zero, older, or managing a condition?** Begin with just steps 1 and 4 for a month — walking only. Add strength in month two, intervals when ready — and check in with your clinician first if you have heart disease, uncontrolled blood pressure, or new symptoms\n\n**Consistency beats intensity.** A modest plan done 48 weeks a year outperforms a heroic plan abandoned by February.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">YOUR TRAINING WEEK</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">About 5 hours - every piece scalable</text>
                    <rect x="150" y="150" width="800" height="90" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="215" y="205" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">MON</text>
                    <text x="340" y="205" text-anchor="start" fill="#fff" font-size="18">Zone 2 - 40 min conversational pace</text>
                    <rect x="150" y="260" width="800" height="90" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="215" y="315" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">TUE</text>
                    <text x="340" y="315" text-anchor="start" fill="#fff" font-size="18">Strength - squat, push, pull, carry</text>
                    <rect x="150" y="370" width="800" height="90" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="215" y="425" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">WED</text>
                    <text x="340" y="425" text-anchor="start" fill="#fff" font-size="18">Zone 2 - 40 min</text>
                    <rect x="150" y="480" width="800" height="90" rx="20" fill="rgba(239,68,68,0.12)" stroke="#ef4444" stroke-width="2"/>
                    <text x="215" y="535" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="20">THU</text>
                    <text x="340" y="535" text-anchor="start" fill="#fff" font-size="18">Intervals - 4 x 4 min hard, easy between</text>
                    <rect x="150" y="590" width="800" height="90" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="215" y="645" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">FRI</text>
                    <text x="340" y="645" text-anchor="start" fill="#fff" font-size="18">Strength - hinge, push, pull, core</text>
                    <rect x="150" y="700" width="800" height="90" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="215" y="755" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">SAT</text>
                    <text x="340" y="755" text-anchor="start" fill="#fff" font-size="18">Zone 2 - long easy walk, hike, or ride</text>
                    <rect x="150" y="810" width="800" height="90" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="215" y="865" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="20">DAILY</text>
                    <text x="340" y="865" text-anchor="start" fill="#fff" font-size="18">Post-meal walks + stairs + NEAT</text>
                    <rect x="150" y="940" width="800" height="110" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="990" text-anchor="middle" fill="#ffd700" font-size="20">Consistency beats intensity:</text>
                    <text x="550" y="1025" text-anchor="middle" fill="#fff" font-size="19">a modest plan done all year wins</text>
                </svg>`,
                caption: "3x Zone 2, 2x strength, 1x intervals, daily walks"
            }
        },
        {
            type: "concept",
            title: "Starting Safely: Consistency Is the Whole Game",
            content: "The biggest risk in exercise isn't injury — it's **quitting**. Most people fail by starting at a level their current body can't sustain, getting hurt or exhausted, and stopping entirely.\n\nThe safe-start rules:\n\n• **Start below your ability.** If you think you can walk 30 minutes, start with 20. Success on week one builds week two\n\n• **Progress ~10% per week** — in time or load, not both at once\n\n• **Zone 2 first, intervals last.** Build 4+ weeks of aerobic base before adding high intensity. Your tendons and heart adapt slower than your enthusiasm\n\n• **Soreness is normal; sharp pain is a stop sign.** Distinguish the two ruthlessly\n\n• **Talk to your clinician first** if you have heart disease, chest pain, dizziness, or uncontrolled blood pressure — this lesson is education, not medical advice\n\nAnd remember what the research actually rewards: in the Mandsager data, the single biggest mortality improvement came from **the bottom group simply becoming below-average**. You don't need to become an athlete. You need to become *someone who moves most days* — and keep being that person for years.\n\nThe best program is the one still running next December.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">START LOW, WIN LONG</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">The biggest gains go to the least fit</text>
                    <rect x="60" y="160" width="460" height="330" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="220" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">THE FAILURE PATTERN</text>
                    <text x="290" y="275" text-anchor="middle" fill="#fff" font-size="18">Start too hard, too fast</text>
                    <text x="290" y="315" text-anchor="middle" fill="#fff" font-size="18">Get sore, hurt, exhausted</text>
                    <text x="290" y="355" text-anchor="middle" fill="#fff" font-size="18">Miss a week, then a month</text>
                    <text x="290" y="395" text-anchor="middle" fill="#fff" font-size="18">Quit until next January</text>
                    <text x="290" y="450" text-anchor="middle" fill="#888" font-size="16">Heroic plans die by February</text>
                    <rect x="580" y="160" width="460" height="330" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="220" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">THE SUCCESS PATTERN</text>
                    <text x="810" y="275" text-anchor="middle" fill="#fff" font-size="18">Start below your ability</text>
                    <text x="810" y="315" text-anchor="middle" fill="#fff" font-size="18">Progress ~10% per week</text>
                    <text x="810" y="355" text-anchor="middle" fill="#fff" font-size="18">Zone 2 base before intervals</text>
                    <text x="810" y="395" text-anchor="middle" fill="#fff" font-size="18">Never miss twice in a row</text>
                    <text x="810" y="450" text-anchor="middle" fill="#888" font-size="16">Modest plans compound for years</text>
                    <rect x="150" y="550" width="800" height="200" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="610" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE BIGGEST WIN IN THE DATA</text>
                    <text x="550" y="660" text-anchor="middle" fill="#fff" font-size="19">Moving from lowest fitness to merely</text>
                    <text x="550" y="695" text-anchor="middle" fill="#fff" font-size="19">below-average cut mortality risk the most</text>
                    <text x="550" y="730" text-anchor="middle" fill="#888" font-size="16">You do not need to become an athlete</text>
                    <rect x="150" y="790" width="800" height="130" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="845" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">SAFETY FIRST</text>
                    <text x="550" y="890" text-anchor="middle" fill="#fff" font-size="18">Heart disease, chest pain, dizziness? See a clinician first</text>
                    <rect x="150" y="950" width="800" height="100" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1010" text-anchor="middle" fill="#ffd700" font-size="20">The best program is the one still running next December</text>
                </svg>`,
                caption: "Sustainable progression beats heroic starts"
            }
        },
        {
            type: "quote",
            content: "If exercise could be packaged in a pill, it would be the single most widely prescribed and beneficial medicine in the nation.",
            author: "Robert Butler, M.D., founding director of the National Institute on Aging",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">WISDOM</text>
                    <rect x="100" y="150" width="900" height="320" rx="20" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="150" y="230" text-anchor="start" fill="#fff" font-style="italic" font-size="24">"If exercise could be packaged in a pill,</text>
                    <text x="150" y="280" text-anchor="start" fill="#fff" font-style="italic" font-size="24">it would be the single most widely</text>
                    <text x="150" y="330" text-anchor="start" fill="#fff" font-style="italic" font-size="24">prescribed and beneficial medicine</text>
                    <text x="150" y="380" text-anchor="start" fill="#fff" font-style="italic" font-size="24">in the nation."</text>
                    <text x="950" y="435" text-anchor="end" fill="#8b5cf6" font-size="19">- Robert Butler, M.D., National Institute on Aging</text>
                    <rect x="150" y="540" width="800" height="260" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="600" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">WHAT THE PILL WOULD TREAT</text>
                    <text x="550" y="650" text-anchor="middle" fill="#fff" font-size="19">Insulin resistance - Blood pressure - Mood</text>
                    <text x="550" y="690" text-anchor="middle" fill="#fff" font-size="19">Bone loss - Sarcopenia - Brain aging</text>
                    <text x="550" y="730" text-anchor="middle" fill="#fff" font-size="19">Cardiovascular disease - All-cause mortality</text>
                    <text x="550" y="775" text-anchor="middle" fill="#888" font-size="16">No drug on earth matches this list</text>
                    <rect x="200" y="860" width="700" height="100" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="920" text-anchor="middle" fill="#ffd700" font-size="20">The prescription is free - and refillable daily</text>
                </svg>`,
                caption: "A moment of reflection"
            }
        },
        {
            type: "quiz",
            question: "You want the best glucose control possible as you age. Based on the 2025 Frontiers in Physiology review and this lesson, which weekly approach fits the evidence best?",
            options: [
                { text: "Daily long-distance running - maximum cardio is always the answer", correct: false },
                { text: "Strength training only, since muscle is the body's main glucose sink", correct: false },
                { text: "Combined aerobic training (Zone 2 plus some intervals) and resistance training, plus short walks after meals", correct: true },
                { text: "One weekly HIIT session, since it triggers the strongest PGC-1a signal per minute", correct: false }
            ],
            explanation: "The 2025 Frontiers in Physiology review found combined aerobic plus resistance training gives better glucose control in older adults than either mode alone — cardio improves mitochondrial function while lifting preserves the muscle that handles ~80% of insulin-stimulated glucose disposal. Strength-only and cardio-only both leave benefits on the table, and one HIIT session, while potent for VO2max signaling, is too small a total dose on its own. Post-meal walks add an immediate glucose-lowering effect (Buffey 2022).",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">FINAL KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE THREE PILLARS</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">Zone 2 - Intervals - Strength</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">Which combination controls glucose best?</text>
                    <rect x="100" y="360" width="280" height="180" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="240" y="425" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">AEROBIC</text>
                    <text x="240" y="465" text-anchor="middle" fill="#fff" font-size="16">Mitochondria +</text>
                    <text x="240" y="495" text-anchor="middle" fill="#fff" font-size="16">insulin sensitivity</text>
                    <rect x="410" y="360" width="280" height="180" rx="20" fill="rgba(99,102,241,0.15)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="425" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">RESISTANCE</text>
                    <text x="550" y="465" text-anchor="middle" fill="#fff" font-size="16">Muscle mass =</text>
                    <text x="550" y="495" text-anchor="middle" fill="#fff" font-size="16">glucose sink</text>
                    <rect x="720" y="360" width="280" height="180" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="860" y="425" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">POST-MEAL</text>
                    <text x="860" y="465" text-anchor="middle" fill="#fff" font-size="16">2-5 min walks</text>
                    <text x="860" y="495" text-anchor="middle" fill="#fff" font-size="16">blunt spikes</text>
                    <path d="M240 540 L500 640" stroke="#14b8a6" stroke-width="2" stroke-dasharray="6"/>
                    <path d="M550 540 L550 640" stroke="#14b8a6" stroke-width="2" stroke-dasharray="6"/>
                    <path d="M860 540 L600 640" stroke="#14b8a6" stroke-width="2" stroke-dasharray="6"/>
                    <rect x="200" y="660" width="700" height="130" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="715" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="21">WHAT DOES THE EVIDENCE FAVOR?</text>
                    <text x="550" y="760" text-anchor="middle" fill="#fff" font-size="18">One pillar alone - or the combination?</text>
                </svg>`,
                caption: "Final check: putting the pillars together"
            }
        }
    ]
},
{
    id: 8,
    title: "Eating for Metabolic Health: What the Studies Actually Show",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "What If the Diet Wars Have Been Fighting Over the Wrong Question?",
            content: "Keto versus vegan. Low-carb versus low-fat. Paleo versus plant-based. The diet wars generate endless noise — and meanwhile, the most rigorous nutrition experiment of the decade quietly answered a different question entirely.\n\nIn 2019, NIH researcher Kevin Hall locked volunteers in a metabolic ward and controlled every bite they ate. The result didn't crown keto or low-fat. It pointed at something both sides had been ignoring: **how processed the food was**.\n\nHere's the secret the shouting hides: beneath the tribal labels, the evidence-backed diets agree on far more than they disagree. Protein. Fiber. Whole foods. Limited added sugar. Patterns you can actually sustain.\n\nIn this lesson, you'll see what the best studies — metabolic ward RCTs, a landmark Mediterranean trial, decades of fiber research — actually show, and walk away with a plate-building framework that ends the war on your own kitchen counter.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">BEYOND THE DIET WARS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">What the rigorous studies converge on</text>
                    <rect x="60" y="170" width="300" height="140" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="210" y="230" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">KETO</text>
                    <text x="210" y="270" text-anchor="middle" fill="#888" font-size="16">vs low-fat</text>
                    <rect x="400" y="170" width="300" height="140" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="230" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">PALEO</text>
                    <text x="550" y="270" text-anchor="middle" fill="#888" font-size="16">vs plant-based</text>
                    <rect x="740" y="170" width="300" height="140" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="890" y="230" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="20">VEGAN</text>
                    <text x="890" y="270" text-anchor="middle" fill="#888" font-size="16">vs carnivore</text>
                    <path d="M210 310 L500 430" stroke="#14b8a6" stroke-width="2" stroke-dasharray="6"/>
                    <path d="M550 310 L550 430" stroke="#14b8a6" stroke-width="2" stroke-dasharray="6"/>
                    <path d="M890 310 L600 430" stroke="#14b8a6" stroke-width="2" stroke-dasharray="6"/>
                    <rect x="150" y="450" width="800" height="280" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="3"/>
                    <text x="550" y="510" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="24">THE COMMON GROUND</text>
                    <text x="550" y="565" text-anchor="middle" fill="#fff" font-size="19">Mostly whole, minimally processed food</text>
                    <text x="550" y="605" text-anchor="middle" fill="#fff" font-size="19">Adequate protein - Plenty of fiber</text>
                    <text x="550" y="645" text-anchor="middle" fill="#fff" font-size="19">Limited added sugar and liquid calories</text>
                    <text x="550" y="695" text-anchor="middle" fill="#888" font-size="17">A pattern you can sustain for years</text>
                    <rect x="150" y="790" width="800" height="180" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="850" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THIS LESSON</text>
                    <text x="550" y="895" text-anchor="middle" fill="#fff" font-size="19">The NIH ward study, PREDIMED, protein, fiber -</text>
                    <text x="550" y="930" text-anchor="middle" fill="#fff" font-size="19">and a plate framework that ends the war</text>
                </svg>`,
                caption: "The evidence-backed diets agree more than they fight"
            }
        },
        {
            type: "concept",
            title: "The Metabolic Ward Study That Settled Something",
            content: "Most nutrition research relies on people remembering what they ate. **Hall et al. 2019** (NIH, published in Cell Metabolism) did something almost never done: it locked the variables down.\n\nThe design:\n\n• **20 adults lived at the NIH Clinical Center** for a month — every meal provided, every bite measured\n\n• Two weeks on an **ultra-processed diet**, two weeks on an **unprocessed diet** — in random order\n\n• The clever part: both diets were **matched for calories offered, sugar, fat, fiber, and macronutrients**. People could eat as much or as little as they wanted\n\nThe result:\n\n• On the ultra-processed diet, people spontaneously ate about **500 more calories per day**\n\n• They **gained roughly 2 pounds in two weeks**; on the unprocessed diet, the same people **lost** about 2 pounds\n\n• They ate faster, and ate more calories per minute\n\nThis is arguably the single clearest diet finding of the decade: **ultra-processed food drives passive overeating**, even when the nutrition labels look similar. It's not just what nutrients are in food — it's what form the food takes.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">HALL 2019 - NIH WARD RCT</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Same people, matched nutrients, one variable</text>
                    <rect x="150" y="150" width="800" height="150" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="205" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE DESIGN</text>
                    <text x="550" y="248" text-anchor="middle" fill="#fff" font-size="18">20 adults, 1 month locked in a metabolic ward</text>
                    <text x="550" y="280" text-anchor="middle" fill="#888" font-size="16">Diets matched for sugar, fat, fiber, macros - eat freely</text>
                    <rect x="60" y="340" width="460" height="380" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="400" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">ULTRA-PROCESSED</text>
                    <text x="290" y="440" text-anchor="middle" fill="#888" font-size="16">2 weeks</text>
                    <rect x="120" y="470" width="340" height="70" rx="12" fill="rgba(239,68,68,0.25)"/>
                    <text x="290" y="513" text-anchor="middle" fill="#fff" font-weight="bold" font-size="20">+500 kcal per day</text>
                    <text x="290" y="590" text-anchor="middle" fill="#fff" font-size="18">Gained ~2 lb in 2 weeks</text>
                    <text x="290" y="630" text-anchor="middle" fill="#fff" font-size="18">Ate faster, more kcal/min</text>
                    <text x="290" y="680" text-anchor="middle" fill="#888" font-size="16">Packaged snacks, refined staples</text>
                    <rect x="580" y="340" width="460" height="380" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="400" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">UNPROCESSED</text>
                    <text x="810" y="440" text-anchor="middle" fill="#888" font-size="16">2 weeks - same people</text>
                    <rect x="640" y="470" width="340" height="70" rx="12" fill="rgba(16,185,129,0.25)"/>
                    <text x="810" y="513" text-anchor="middle" fill="#fff" font-weight="bold" font-size="20">Ate naturally less</text>
                    <text x="810" y="590" text-anchor="middle" fill="#fff" font-size="18">Lost ~2 lb in 2 weeks</text>
                    <text x="810" y="630" text-anchor="middle" fill="#fff" font-size="18">Slower eating, more satiety</text>
                    <text x="810" y="680" text-anchor="middle" fill="#888" font-size="16">Whole foods, simple ingredients</text>
                    <rect x="150" y="770" width="800" height="150" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="830" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="21">THE CLEAREST DIET FINDING OF THE DECADE</text>
                    <text x="550" y="875" text-anchor="middle" fill="#fff" font-size="19">Ultra-processed food drives passive overeating -</text>
                    <text x="550" y="905" text-anchor="middle" fill="#888" font-size="17">even with matched nutrition labels</text>
                </svg>`,
                caption: "Ultra-processed food drove ~500 extra kcal/day"
            }
        },
        {
            type: "visual",
            title: "Why Processing Changes Everything",
            content: "How does food with a similar label produce 500 extra calories of eating? The **form** of the food changes how your body responds to it. Ultra-processed foods are typically soft, calorie-dense, hyper-palatable, and fast to eat — your satiety signals simply can't keep pace with the intake speed.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE OVEREATING MACHINE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Four ways processing outruns satiety</text>
                    <rect x="80" y="170" width="440" height="200" rx="20" fill="rgba(239,68,68,0.12)" stroke="#ef4444" stroke-width="2"/>
                    <text x="300" y="230" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">SOFT TEXTURE</text>
                    <text x="300" y="275" text-anchor="middle" fill="#fff" font-size="17">Little chewing needed</text>
                    <text x="300" y="310" text-anchor="middle" fill="#888" font-size="16">Calories arrive before</text>
                    <text x="300" y="340" text-anchor="middle" fill="#888" font-size="16">fullness signals fire</text>
                    <rect x="580" y="170" width="440" height="200" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="800" y="230" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">CALORIE DENSITY</text>
                    <text x="800" y="275" text-anchor="middle" fill="#fff" font-size="17">More kcal per bite</text>
                    <text x="800" y="310" text-anchor="middle" fill="#888" font-size="16">Stomach volume fills slowly,</text>
                    <text x="800" y="340" text-anchor="middle" fill="#888" font-size="16">calories stack up fast</text>
                    <rect x="80" y="410" width="440" height="200" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="300" y="470" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="21">HYPER-PALATABLE</text>
                    <text x="300" y="515" text-anchor="middle" fill="#fff" font-size="17">Engineered salt-sugar-fat combos</text>
                    <text x="300" y="550" text-anchor="middle" fill="#888" font-size="16">Reward circuits override</text>
                    <text x="300" y="580" text-anchor="middle" fill="#888" font-size="16">the "I'm done" signal</text>
                    <rect x="580" y="410" width="440" height="200" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="800" y="470" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="21">EATING SPEED</text>
                    <text x="800" y="515" text-anchor="middle" fill="#fff" font-size="17">More calories per minute</text>
                    <text x="800" y="550" text-anchor="middle" fill="#888" font-size="16">Ward subjects ate UPF meals</text>
                    <text x="800" y="580" text-anchor="middle" fill="#888" font-size="16">measurably faster</text>
                    <rect x="150" y="670" width="800" height="170" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="730" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">THE WHOLE-FOOD ANTIDOTE</text>
                    <text x="550" y="775" text-anchor="middle" fill="#fff" font-size="18">Chewing, water content, fiber, and intact structure</text>
                    <text x="550" y="810" text-anchor="middle" fill="#fff" font-size="18">let satiety catch up to intake</text>
                    <rect x="200" y="890" width="700" height="110" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="940" text-anchor="middle" fill="#ffd700" font-size="20">You are not weak-willed -</text>
                    <text x="550" y="975" text-anchor="middle" fill="#fff" font-size="20">the food is engineered to outrun your brakes</text>
                </svg>`,
                caption: "Texture, density, palatability, and speed drive passive overeating"
            }
        },
        {
            type: "example",
            title: "Two Breakfasts, Same Calories on Paper",
            content: "Watch the ward study play out on a real plate.\n\n**Breakfast A (ultra-processed):** a sweetened cereal with low-fat milk, a blueberry muffin from a package, and orange juice. Soft, fast, delicious. Total eating time: about **6 minutes**. Two hours later you're hungry again — and the vending machine is right there.\n\n**Breakfast B (minimally processed):** two scrambled eggs, plain Greek yogurt with real blueberries, oatmeal with walnuts. Similar calories *on paper*. Eating time: about **15 minutes** of actual chewing. You're comfortably full until lunch.\n\nSame person, same morning, same calorie label — completely different day of eating. Breakfast A quietly invites a mid-morning snack, a bigger lunch, an afternoon cookie: exactly how the ward subjects drifted **+500 kcal/day** without trying.\n\nAnd notice: nobody 'cheated.' Nobody lacked willpower. The *form of the food* made the decision before the person did. That's why the most powerful diet change isn't a rule about carbs or fat — it's swapping the form your calories arrive in.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">TWO BREAKFASTS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Similar label - very different day</text>
                    <rect x="60" y="160" width="460" height="420" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="220" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">BREAKFAST A</text>
                    <text x="290" y="255" text-anchor="middle" fill="#888" font-size="16">Ultra-processed</text>
                    <text x="290" y="305" text-anchor="middle" fill="#fff" font-size="17">Sweetened cereal + milk</text>
                    <text x="290" y="340" text-anchor="middle" fill="#fff" font-size="17">Packaged muffin</text>
                    <text x="290" y="375" text-anchor="middle" fill="#fff" font-size="17">Orange juice</text>
                    <rect x="120" y="410" width="340" height="60" rx="12" fill="rgba(239,68,68,0.25)"/>
                    <text x="290" y="448" text-anchor="middle" fill="#fff" font-weight="bold" font-size="18">Eaten in ~6 minutes</text>
                    <text x="290" y="510" text-anchor="middle" fill="#fff" font-size="17">Hungry again by 10 AM</text>
                    <text x="290" y="548" text-anchor="middle" fill="#888" font-size="16">Snack - big lunch - cookie</text>
                    <rect x="580" y="160" width="460" height="420" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="220" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">BREAKFAST B</text>
                    <text x="810" y="255" text-anchor="middle" fill="#888" font-size="16">Minimally processed</text>
                    <text x="810" y="305" text-anchor="middle" fill="#fff" font-size="17">Two scrambled eggs</text>
                    <text x="810" y="340" text-anchor="middle" fill="#fff" font-size="17">Greek yogurt + blueberries</text>
                    <text x="810" y="375" text-anchor="middle" fill="#fff" font-size="17">Oatmeal with walnuts</text>
                    <rect x="640" y="410" width="340" height="60" rx="12" fill="rgba(16,185,129,0.25)"/>
                    <text x="810" y="448" text-anchor="middle" fill="#fff" font-weight="bold" font-size="18">Eaten in ~15 minutes</text>
                    <text x="810" y="510" text-anchor="middle" fill="#fff" font-size="17">Comfortably full until lunch</text>
                    <text x="810" y="548" text-anchor="middle" fill="#888" font-size="16">No grazing needed</text>
                    <rect x="150" y="640" width="800" height="170" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="700" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">HOW +500 KCAL/DAY HAPPENS</text>
                    <text x="550" y="745" text-anchor="middle" fill="#fff" font-size="18">Not one big binge - a day of small extras</text>
                    <text x="550" y="780" text-anchor="middle" fill="#888" font-size="16">triggered by fast, low-satiety food</text>
                    <rect x="150" y="870" width="800" height="130" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="925" text-anchor="middle" fill="#ffd700" font-size="20">The form of the food made the decision</text>
                    <text x="550" y="965" text-anchor="middle" fill="#fff" font-size="20">before the person did</text>
                </svg>`,
                caption: "Same calorie label, completely different eating day"
            }
        },
        {
            type: "quiz",
            question: "In the Hall 2019 NIH metabolic ward study, the ultra-processed and unprocessed diets were matched for calories offered, sugar, fat, and fiber. What happened?",
            options: [
                { text: "People ate the same amount on both diets, proving processing does not matter if nutrients match", correct: false },
                { text: "People on the ultra-processed diet ate about 500 more calories per day and gained weight; on the unprocessed diet they lost weight", correct: true },
                { text: "People lost weight on both diets because ward meals were strictly portion-controlled", correct: false },
                { text: "People ate more on the unprocessed diet because whole foods are less filling per bite", correct: false }
            ],
            explanation: "Even with matched nutrition labels, participants spontaneously ate ~500 extra kcal/day on the ultra-processed diet and gained about 2 pounds in two weeks — then lost about 2 pounds on the unprocessed diet. The portion-control answer is the trap: meals were deliberately NOT restricted; people ate freely, which is what made the finding so powerful. Processing itself — texture, density, palatability, eating speed — drove the overeating.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE NIH WARD STUDY</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">Matched nutrients - free eating - one variable</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">What did processing alone change?</text>
                    <rect x="60" y="360" width="460" height="220" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="420" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">ULTRA-PROCESSED WEEKS</text>
                    <text x="290" y="475" text-anchor="middle" fill="#fff" font-size="18">Intake: ?</text>
                    <text x="290" y="520" text-anchor="middle" fill="#fff" font-size="18">Weight: ?</text>
                    <rect x="580" y="360" width="460" height="220" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="420" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">UNPROCESSED WEEKS</text>
                    <text x="810" y="475" text-anchor="middle" fill="#fff" font-size="18">Intake: ?</text>
                    <text x="810" y="520" text-anchor="middle" fill="#fff" font-size="18">Weight: ?</text>
                    <rect x="150" y="650" width="800" height="130" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="705" text-anchor="middle" fill="#ffd700" font-size="20">Hint: participants could eat as much</text>
                    <text x="550" y="745" text-anchor="middle" fill="#fff" font-size="20">or as little as they wanted</text>
                </svg>`,
                caption: "Test your recall of the decade's clearest diet finding"
            }
        },
        {
            type: "concept",
            title: "Protein: The Anchor Nutrient",
            content: "Whatever diet tribe wins the argument, **protein** does three jobs nothing else does as well:\n\n• **Satiety** — protein is the most filling macronutrient per calorie. Higher-protein meals reliably reduce spontaneous snacking in controlled studies\n\n• **Thermic effect** — digesting protein burns **20-30% of its own calories** (versus 5-10% for carbs, 0-3% for fat). A 200-calorie chicken breast nets closer to 150\n\n• **Muscle preservation** — protein supplies the raw material for the muscle you learned to protect in earlier lessons. This matters double during weight loss, when the body will happily burn muscle along with fat\n\nThe age wrinkle: older bodies develop **anabolic resistance** — muscle responds more weakly to protein. That's why research supports **1.2-1.6 g per kg of body weight daily** for older adults, roughly 50-100% above the standard RDA of 0.8, ideally spread as **25-30 g per meal** to repeatedly trigger muscle protein synthesis.\n\nFor a 165-lb (75 kg) person, that's **90-120 g per day** — say, eggs and Greek yogurt at breakfast, a palm-sized chicken portion at lunch, salmon or lentils and cottage cheese at dinner. Front-load it: breakfast is where most people run lowest.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">PROTEIN'S THREE JOBS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Satiety, thermic effect, muscle preservation</text>
                    <rect x="80" y="160" width="300" height="230" rx="20" fill="rgba(99,102,241,0.15)" stroke="#6366f1" stroke-width="2"/>
                    <text x="230" y="220" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">SATIETY</text>
                    <text x="230" y="265" text-anchor="middle" fill="#fff" font-size="17">Most filling</text>
                    <text x="230" y="298" text-anchor="middle" fill="#fff" font-size="17">macro per calorie</text>
                    <text x="230" y="345" text-anchor="middle" fill="#888" font-size="15">Less snacking, effortlessly</text>
                    <rect x="400" y="160" width="300" height="230" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="220" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">THERMIC EFFECT</text>
                    <text x="550" y="265" text-anchor="middle" fill="#fff" font-size="17">Burns 20-30% of its</text>
                    <text x="550" y="298" text-anchor="middle" fill="#fff" font-size="17">own calories digesting</text>
                    <text x="550" y="345" text-anchor="middle" fill="#888" font-size="15">Carbs 5-10%, fat 0-3%</text>
                    <rect x="720" y="160" width="300" height="230" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="870" y="220" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">MUSCLE</text>
                    <text x="870" y="265" text-anchor="middle" fill="#fff" font-size="17">Raw material for your</text>
                    <text x="870" y="298" text-anchor="middle" fill="#fff" font-size="17">glucose-sink tissue</text>
                    <text x="870" y="345" text-anchor="middle" fill="#888" font-size="15">Critical during weight loss</text>
                    <rect x="150" y="450" width="800" height="230" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="510" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">THE OLDER-ADULT TARGET</text>
                    <text x="550" y="560" text-anchor="middle" fill="#fff" font-size="19">1.2-1.6 g per kg per day</text>
                    <text x="550" y="600" text-anchor="middle" fill="#fff" font-size="18">~25-30 g protein per meal to trigger synthesis</text>
                    <text x="550" y="645" text-anchor="middle" fill="#888" font-size="16">vs the RDA of 0.8 g/kg - anabolic resistance raises the bar</text>
                    <rect x="150" y="740" width="800" height="160" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="795" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">FOR A 165-LB (75 KG) PERSON</text>
                    <text x="550" y="840" text-anchor="middle" fill="#fff" font-size="18">90-120 g/day - eggs, yogurt, chicken, fish,</text>
                    <text x="550" y="872" text-anchor="middle" fill="#fff" font-size="18">lentils, cottage cheese across three meals</text>
                    <rect x="200" y="950" width="700" height="100" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1010" text-anchor="middle" fill="#ffd700" font-size="20">Front-load protein - breakfast runs lowest</text>
                </svg>`,
                caption: "Protein anchors satiety, metabolism, and muscle"
            }
        },
        {
            type: "concept",
            title: "Fiber: The 20-Gram Gap Almost Everyone Has",
            content: "Here's a quiet epidemic: the evidence-based fiber target is **25-38 grams per day**. The average American gets about **15**. That 10-to-20-gram gap may matter as much as any macro debate.\n\nWhat fiber actually does:\n\n• **Feeds your gut microbes** — fermentable fiber is the preferred fuel of your gut bacteria\n\n• Microbes ferment it into **short-chain fatty acids (SCFAs)** like butyrate — compounds that nourish your gut lining, calm inflammation, and **improve insulin sensitivity**\n\n• **Slows glucose absorption** — fiber blunts post-meal spikes by slowing how fast carbs hit your bloodstream\n\n• **Stretches satiety** — fiber adds bulk and slows stomach emptying, part of why the ward study's unprocessed arm was more filling\n\nLarge cohort analyses (like the Reynolds 2019 Lancet review commissioned for the WHO) link higher fiber intake with **15-30% reductions** in cardiovascular disease, type 2 diabetes, and all-cause mortality.\n\nClosing the gap is concrete: a cup of black beans (~15 g), a cup of raspberries (~8 g), an apple with skin (~4.5 g), a half-cup of oats (~4 g), an ounce of chia seeds (~10 g). One fiber source added to each meal usually closes it — go gradually and drink water; your gut needs a couple of weeks to adapt.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE FIBER GAP</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Where you are vs where the evidence points</text>
                    <text x="280" y="200" text-anchor="end" fill="#fff" font-size="19">Average American</text>
                    <rect x="310" y="170" width="240" height="55" rx="10" fill="rgba(239,68,68,0.6)"/>
                    <text x="580" y="207" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="19">~15 g/day</text>
                    <text x="280" y="310" text-anchor="end" fill="#fff" font-size="19">Evidence target</text>
                    <rect x="310" y="280" width="560" height="55" rx="10" fill="rgba(16,185,129,0.6)"/>
                    <text x="900" y="317" text-anchor="start" fill="#10b981" font-weight="bold" font-size="19">25-38 g</text>
                    <rect x="150" y="390" width="800" height="240" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="450" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">THE FIBER-TO-INSULIN PIPELINE</text>
                    <text x="550" y="500" text-anchor="middle" fill="#fff" font-size="18">Fiber feeds gut microbes</text>
                    <text x="550" y="540" text-anchor="middle" fill="#fff" font-size="18">Microbes make short-chain fatty acids (butyrate)</text>
                    <text x="550" y="580" text-anchor="middle" fill="#fff" font-size="18">SCFAs calm inflammation + improve insulin sensitivity</text>
                    <rect x="150" y="690" width="800" height="230" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="750" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">GAP-CLOSERS (GRAMS OF FIBER)</text>
                    <text x="550" y="800" text-anchor="middle" fill="#fff" font-size="18">Black beans, 1 cup: ~15 - Chia, 1 oz: ~10</text>
                    <text x="550" y="840" text-anchor="middle" fill="#fff" font-size="18">Raspberries, 1 cup: ~8 - Apple with skin: ~4.5</text>
                    <text x="550" y="885" text-anchor="middle" fill="#888" font-size="16">Add one fiber source per meal - increase gradually</text>
                    <rect x="200" y="960" width="700" height="100" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1020" text-anchor="middle" fill="#ffd700" font-size="20">Higher fiber: 15-30% lower disease risk (Lancet 2019)</text>
                </svg>`,
                caption: "Most people are 10-20 grams short of the target"
            }
        },
        {
            type: "example",
            title: "PREDIMED: The Trial That Made Olive Oil Famous",
            content: "If you want a whole dietary *pattern* with hard-outcome evidence, the landmark is **PREDIMED** — a Spanish randomized trial of about **7,400 people** at high cardiovascular risk.\n\nThe setup: participants were assigned to a **Mediterranean diet supplemented with extra-virgin olive oil**, the same diet **supplemented with nuts**, or a lower-fat control diet.\n\nThe result: roughly **30% fewer major cardiovascular events** (heart attack, stroke, cardiovascular death) in the Mediterranean groups. The trial was so convincing it was stopped early — continuing the control arm was considered unfair. (After a data-handling critique, it was re-analyzed and republished in 2018 in the New England Journal of Medicine — the ~30% finding held.)\n\nWhat were people actually eating? Vegetables, fruit, legumes, fish, whole grains, generous **extra-virgin olive oil**, a handful of **nuts**, modest wine with meals, little red or processed meat.\n\nNotice what this is: not low-carb, not low-fat — a **whole-food pattern rich in healthy fats and fiber**. It lands squarely on the common ground from the start of this lesson. And unlike extreme diets, people sustained it for **years** — which, as you'll see, is the real active ingredient.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">PREDIMED TRIAL</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">~7,400 high-risk adults, randomized, Spain</text>
                    <rect x="80" y="160" width="300" height="220" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="230" y="215" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">MED DIET +</text>
                    <text x="230" y="248" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">OLIVE OIL</text>
                    <text x="230" y="300" text-anchor="middle" fill="#fff" font-size="17">~30% fewer</text>
                    <text x="230" y="333" text-anchor="middle" fill="#fff" font-size="17">CV events</text>
                    <rect x="400" y="160" width="300" height="220" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="215" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">MED DIET +</text>
                    <text x="550" y="248" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">NUTS</text>
                    <text x="550" y="300" text-anchor="middle" fill="#fff" font-size="17">~30% fewer</text>
                    <text x="550" y="333" text-anchor="middle" fill="#fff" font-size="17">CV events</text>
                    <rect x="720" y="160" width="300" height="220" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="870" y="215" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="19">LOWER-FAT</text>
                    <text x="870" y="248" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="19">CONTROL</text>
                    <text x="870" y="300" text-anchor="middle" fill="#fff" font-size="17">Reference</text>
                    <text x="870" y="333" text-anchor="middle" fill="#888" font-size="15">Arm stopped early</text>
                    <rect x="150" y="440" width="800" height="230" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="500" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">WHAT THEY ATE</text>
                    <text x="550" y="550" text-anchor="middle" fill="#fff" font-size="18">Vegetables - Legumes - Fish - Whole grains</text>
                    <text x="550" y="590" text-anchor="middle" fill="#fff" font-size="18">Extra-virgin olive oil - Nuts - Fruit</text>
                    <text x="550" y="635" text-anchor="middle" fill="#888" font-size="16">Little red or processed meat, few sweets</text>
                    <rect x="150" y="730" width="800" height="150" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="785" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">RE-ANALYZED AND REPUBLISHED (NEJM 2018)</text>
                    <text x="550" y="830" text-anchor="middle" fill="#fff" font-size="18">The ~30% reduction held up under scrutiny</text>
                    <rect x="200" y="940" width="700" height="110" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="990" text-anchor="middle" fill="#ffd700" font-size="20">Not low-carb, not low-fat -</text>
                    <text x="550" y="1025" text-anchor="middle" fill="#fff" font-size="20">a whole-food pattern people kept for years</text>
                </svg>`,
                caption: "A Mediterranean pattern cut cardiovascular events ~30%"
            }
        },
        {
            type: "concept",
            title: "Sugar You Drink, Fats You Should Actually Fear",
            content: "Two clean-up notes the evidence is unambiguous about:\n\n**Liquid calories are the stealth path to a fatty liver.** Sugar-sweetened drinks deliver large doses of **fructose**, and fructose is processed almost entirely by the liver. Chronic overload pushes the liver into **de novo lipogenesis** — literally converting sugar into liver fat — a driver of fatty liver disease and insulin resistance. Worse, liquid sugar barely registers with satiety: a 300-calorie soda doesn't make you eat 300 fewer calories at dinner. Juice, sweet coffee drinks, and sports drinks count too. This is the single highest-leverage subtraction in most diets.\n\n**Not all fats are the enemy — but one truly was.** Decades of fat-phobia lumped together things the data now separates:\n\n• **Unsaturated fats** — olive oil, nuts, avocados, fatty fish — are the backbone of the PREDIMED result and support cardiovascular and metabolic health\n\n• **Artificial trans fats** — partially hydrogenated oils once common in margarine and packaged snacks — raised heart-attack risk so clearly that the **FDA banned them from the US food supply (fully phased out by 2020)**\n\n• Saturated fat sits in between: the strongest evidence supports *replacing* some of it with unsaturated fats, not fearing fat itself\n\nSimple rule: **eat your fat from plants and fish; don't drink your sugar.**",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">TWO CLEAN-UP RULES</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Liquid sugar and the fat hierarchy</text>
                    <rect x="150" y="150" width="800" height="290" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="210" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">THE FRUCTOSE-TO-LIVER-FAT PATH</text>
                    <rect x="200" y="240" width="180" height="70" rx="12" fill="rgba(239,68,68,0.25)"/>
                    <text x="290" y="283" text-anchor="middle" fill="#fff" font-size="16">Sugary drink</text>
                    <path d="M380 275 L450 275" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="460,275 448,267 448,283" fill="#14b8a6"/>
                    <rect x="460" y="240" width="180" height="70" rx="12" fill="rgba(245,158,11,0.25)"/>
                    <text x="550" y="283" text-anchor="middle" fill="#fff" font-size="16">Liver overload</text>
                    <path d="M640 275 L710 275" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="720,275 708,267 708,283" fill="#14b8a6"/>
                    <rect x="720" y="240" width="180" height="70" rx="12" fill="rgba(139,92,246,0.25)"/>
                    <text x="810" y="283" text-anchor="middle" fill="#fff" font-size="16">Liver fat</text>
                    <text x="550" y="360" text-anchor="middle" fill="#fff" font-size="18">Liquid sugar barely registers with satiety -</text>
                    <text x="550" y="395" text-anchor="middle" fill="#888" font-size="16">you do not eat less to compensate</text>
                    <rect x="60" y="490" width="320" height="260" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="220" y="550" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">EMBRACE</text>
                    <text x="220" y="600" text-anchor="middle" fill="#fff" font-size="17">Olive oil - Nuts</text>
                    <text x="220" y="635" text-anchor="middle" fill="#fff" font-size="17">Avocado - Fatty fish</text>
                    <text x="220" y="690" text-anchor="middle" fill="#888" font-size="15">Unsaturated fats</text>
                    <rect x="400" y="490" width="320" height="260" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="560" y="550" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">MODERATE</text>
                    <text x="560" y="600" text-anchor="middle" fill="#fff" font-size="17">Butter - Red meat</text>
                    <text x="560" y="635" text-anchor="middle" fill="#fff" font-size="17">Full-fat dairy</text>
                    <text x="560" y="690" text-anchor="middle" fill="#888" font-size="15">Swap some for unsaturated</text>
                    <rect x="740" y="490" width="320" height="260" rx="20" fill="rgba(239,68,68,0.12)" stroke="#ef4444" stroke-width="2"/>
                    <text x="900" y="550" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">BANNED</text>
                    <text x="900" y="600" text-anchor="middle" fill="#fff" font-size="17">Artificial trans fats</text>
                    <text x="900" y="635" text-anchor="middle" fill="#fff" font-size="17">(partially hydrogenated oils)</text>
                    <text x="900" y="690" text-anchor="middle" fill="#888" font-size="15">FDA ban, phased out 2020</text>
                    <rect x="150" y="810" width="800" height="120" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="865" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">HIGHEST-LEVERAGE SUBTRACTION</text>
                    <text x="550" y="905" text-anchor="middle" fill="#fff" font-size="18">Sugar-sweetened drinks, including juice and sweet coffees</text>
                    <rect x="200" y="960" width="700" height="100" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1020" text-anchor="middle" fill="#ffd700" font-size="20">Eat fat from plants and fish - do not drink sugar</text>
                </svg>`,
                caption: "Fructose overload builds liver fat; fat quality beats fat phobia"
            }
        },
        {
            type: "concept",
            title: "Why Extreme Diets Fail: Adherence Is the Active Ingredient",
            content: "Here's the finding that ends most diet arguments. Head-to-head randomized trials — like Gardner's **DIETFITS** study (JAMA 2018, 609 adults, healthy low-fat vs healthy low-carb for a full year) — keep landing in the same place:\n\n• **Average results are nearly identical** between well-constructed diets\n\n• **Individual variation is enormous** — in every group, some people lost 50 pounds and some gained\n\n• The strongest predictor of success isn't the diet's name. It's **adherence** — whether you were still following it at month 12\n\nExtreme diets fail predictably because they fight biology and life at once:\n\n• **Biology pushes back** — aggressive restriction raises hunger hormones (ghrelin) and lowers satiety signals (leptin) for months\n\n• **Restriction narrows life** — no birthdays, no restaurants, no shared meals. Willpower loses to environment eventually\n\n• **The rebound** — when the unsustainable ends, old defaults return, often with interest\n\nThe implication is liberating: you don't need the *optimal* diet. You need a *good* diet — whole foods, protein, fiber, limited liquid sugar — that fits your culture, budget, and preferences well enough to still be running in five years. The best diet is the one you'll actually keep.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">ADHERENCE WINS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">DIETFITS: low-fat vs low-carb, 609 adults, 1 year</text>
                    <rect x="60" y="160" width="460" height="280" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="290" y="220" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">HEALTHY LOW-FAT</text>
                    <text x="290" y="270" text-anchor="middle" fill="#fff" font-size="18">Average loss: ~5.3 kg</text>
                    <text x="290" y="315" text-anchor="middle" fill="#888" font-size="16">Huge individual spread:</text>
                    <text x="290" y="348" text-anchor="middle" fill="#888" font-size="16">big losses AND gains</text>
                    <text x="290" y="400" text-anchor="middle" fill="#fff" font-size="17">Winners = the consistent</text>
                    <rect x="580" y="160" width="460" height="280" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="810" y="220" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="21">HEALTHY LOW-CARB</text>
                    <text x="810" y="270" text-anchor="middle" fill="#fff" font-size="18">Average loss: ~6.0 kg</text>
                    <text x="810" y="315" text-anchor="middle" fill="#888" font-size="16">Statistically no different</text>
                    <text x="810" y="348" text-anchor="middle" fill="#888" font-size="16">from the low-fat group</text>
                    <text x="810" y="400" text-anchor="middle" fill="#fff" font-size="17">Winners = the consistent</text>
                    <rect x="150" y="500" width="800" height="230" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="560" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">WHY EXTREME DIETS COLLAPSE</text>
                    <text x="550" y="610" text-anchor="middle" fill="#fff" font-size="18">Hunger hormones (ghrelin) rise, satiety signals fall</text>
                    <text x="550" y="650" text-anchor="middle" fill="#fff" font-size="18">Restriction collides with real life and shared meals</text>
                    <text x="550" y="695" text-anchor="middle" fill="#888" font-size="16">Then the rebound - old defaults return with interest</text>
                    <rect x="150" y="790" width="800" height="150" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="845" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">THE LIBERATING IMPLICATION</text>
                    <text x="550" y="890" text-anchor="middle" fill="#fff" font-size="18">A good diet you keep beats a perfect diet you quit</text>
                    <rect x="200" y="970" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1025" text-anchor="middle" fill="#ffd700" font-size="20">Adherence is the active ingredient</text>
                </svg>`,
                caption: "Diet name matters less than still doing it at month 12"
            }
        },
        {
            type: "visual",
            title: "The Plate-Building Framework",
            content: "Forget counting everything. Build each plate with four moves: **anchor with protein** (25-30 g), **fill half with plants**, **add a fiber source**, and **finish with smart carbs and fats** — whole grains, legumes, olive oil, sized to your activity. Four decisions, no app required — and every principle in this lesson is baked in.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">BUILD YOUR PLATE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Four moves, every meal, no counting</text>
                    <circle cx="550" cy="430" r="280" fill="rgba(255,255,255,0.05)" stroke="#888" stroke-width="2"/>
                    <path d="M550 430 L550 150 A280 280 0 0 1 830 430 Z" fill="rgba(99,102,241,0.25)" stroke="#6366f1" stroke-width="2"/>
                    <text x="670" y="290" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">PROTEIN</text>
                    <text x="670" y="322" text-anchor="middle" fill="#fff" font-size="15">25-30 g anchor</text>
                    <path d="M550 430 L830 430 A280 280 0 0 1 550 710 Z" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="680" y="570" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="19">SMART CARBS</text>
                    <text x="680" y="602" text-anchor="middle" fill="#fff" font-size="15">+ healthy fats</text>
                    <path d="M550 430 L550 710 A280 280 0 0 1 270 430 Z" fill="rgba(16,185,129,0.25)" stroke="#10b981" stroke-width="2"/>
                    <text x="420" y="570" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">PLANTS</text>
                    <text x="420" y="602" text-anchor="middle" fill="#fff" font-size="15">half the plate</text>
                    <path d="M550 430 L270 430 A280 280 0 0 1 550 150 Z" fill="rgba(139,92,246,0.25)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="425" y="290" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">FIBER</text>
                    <text x="425" y="322" text-anchor="middle" fill="#fff" font-size="15">beans, berries, oats</text>
                    <rect x="150" y="770" width="800" height="140" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="825" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">EXAMPLE PLATE</text>
                    <text x="550" y="870" text-anchor="middle" fill="#fff" font-size="18">Salmon + big salad with olive oil + lentils + quinoa</text>
                    <rect x="200" y="940" width="700" height="110" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="990" text-anchor="middle" fill="#ffd700" font-size="20">Every study in this lesson,</text>
                    <text x="550" y="1025" text-anchor="middle" fill="#fff" font-size="20">baked into one plate</text>
                </svg>`,
                caption: "Protein anchor + plants + fiber + smart carbs"
            }
        },
        {
            type: "application",
            title: "Your One-Week Upgrade Plan",
            content: "Don't overhaul your diet. Upgrade it — one default at a time, starting today:\n\n1. **Swap three ultra-processed staples** — replace your usual cereal, packaged snack, and frozen entree with a whole-food version (oats, nuts and fruit, a sheet-pan meal). This attacks the +500 kcal mechanism directly\n\n2. **Front-load protein** — build breakfast around 25-30 g: eggs plus Greek yogurt, or a protein smoothie. Watch what happens to your 10 AM cravings\n\n3. **Add one fiber source per meal** — beans at lunch, berries at breakfast, a vegetable you actually like at dinner. That's the 20-gram gap closed by Friday\n\n4. **Zero liquid sugar for 7 days** — soda, juice, sweetened coffee drinks. Sparkling water, coffee, and tea are unlimited\n\n5. **Keep a two-line log** — each evening note: how was hunger today, how was energy? By day 7 you'll have your own metabolic-ward data\n\nNone of this requires a food scale, an app, or a tribe. It's the common ground of the evidence, applied to your actual kitchen.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">ONE-WEEK UPGRADE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Five defaults, no overhaul required</text>
                    <rect x="150" y="160" width="800" height="130" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="210" y="215" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="22">1.</text>
                    <text x="260" y="215" text-anchor="start" fill="#fff" font-size="19">Swap 3 ultra-processed staples</text>
                    <text x="260" y="255" text-anchor="start" fill="#888" font-size="16">Cereal, snack, frozen entree - whole-food versions</text>
                    <rect x="150" y="310" width="800" height="130" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="210" y="365" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="22">2.</text>
                    <text x="260" y="365" text-anchor="start" fill="#fff" font-size="19">Front-load protein at breakfast</text>
                    <text x="260" y="405" text-anchor="start" fill="#888" font-size="16">25-30 g - eggs, Greek yogurt, or a smoothie</text>
                    <rect x="150" y="460" width="800" height="130" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="210" y="515" text-anchor="start" fill="#10b981" font-weight="bold" font-size="22">3.</text>
                    <text x="260" y="515" text-anchor="start" fill="#fff" font-size="19">Add one fiber source per meal</text>
                    <text x="260" y="555" text-anchor="start" fill="#888" font-size="16">Beans, berries, oats, vegetables - close the 20 g gap</text>
                    <rect x="150" y="610" width="800" height="130" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="210" y="665" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="22">4.</text>
                    <text x="260" y="665" text-anchor="start" fill="#fff" font-size="19">Zero liquid sugar for 7 days</text>
                    <text x="260" y="705" text-anchor="start" fill="#888" font-size="16">Soda, juice, sweet coffees - water, coffee, tea instead</text>
                    <rect x="150" y="760" width="800" height="130" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="210" y="815" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="22">5.</text>
                    <text x="260" y="815" text-anchor="start" fill="#fff" font-size="19">Two-line evening log</text>
                    <text x="260" y="855" text-anchor="start" fill="#888" font-size="16">Hunger? Energy? Your own 7-day experiment</text>
                    <rect x="150" y="930" width="800" height="120" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="980" text-anchor="middle" fill="#ffd700" font-size="20">No scale, no app, no tribe -</text>
                    <text x="550" y="1018" text-anchor="middle" fill="#fff" font-size="20">just the evidence, applied to your kitchen</text>
                </svg>`,
                caption: "Five swaps that apply the whole lesson this week"
            }
        },
        {
            type: "quiz",
            question: "Head-to-head trials like DIETFITS (JAMA 2018) compared healthy low-fat and healthy low-carb diets for a year. What best summarizes what such trials found?",
            options: [
                { text: "Low-carb clearly won - cutting carbohydrates is metabolically superior for weight loss", correct: false },
                { text: "Average weight loss was nearly identical; adherence to a whole-food pattern predicted success far better than the diet's name", correct: true },
                { text: "Both diets failed, proving weight loss is almost entirely genetic", correct: false },
                { text: "Low-fat won on cholesterol, making it the safer choice for anyone over 50", correct: false }
            ],
            explanation: "DIETFITS found statistically similar average weight loss (~5.3 vs ~6.0 kg) between healthy low-fat and healthy low-carb groups, with enormous individual variation inside each group. The consistent winners in both arms were people who stuck with a whole-food version of their diet — adherence is the active ingredient. Both extreme answers repeat diet-war talking points the data doesn't support: neither macronutrient camp won, and results were far from uniform failure.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">FINAL KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE DIET-WAR VERDICT</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">Low-fat vs low-carb, 609 adults, 12 months</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">What actually predicted success?</text>
                    <rect x="60" y="360" width="460" height="240" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="290" y="420" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">THE DIET'S NAME?</text>
                    <text x="290" y="475" text-anchor="middle" fill="#fff" font-size="18">Keto, low-fat, paleo,</text>
                    <text x="290" y="510" text-anchor="middle" fill="#fff" font-size="18">Mediterranean...</text>
                    <text x="290" y="560" text-anchor="middle" fill="#888" font-size="16">Averages nearly identical</text>
                    <rect x="580" y="360" width="460" height="240" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="420" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">STILL DOING IT?</text>
                    <text x="810" y="475" text-anchor="middle" fill="#fff" font-size="18">Whole foods, protein, fiber,</text>
                    <text x="810" y="510" text-anchor="middle" fill="#fff" font-size="18">sustained at month 12</text>
                    <text x="810" y="560" text-anchor="middle" fill="#888" font-size="16">The real predictor</text>
                    <rect x="150" y="660" width="800" height="130" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="715" text-anchor="middle" fill="#ffd700" font-size="20">Hint: recall what this lesson called</text>
                    <text x="550" y="755" text-anchor="middle" fill="#fff" font-size="20">"the active ingredient"</text>
                </svg>`,
                caption: "Final check: what the head-to-head trials really showed"
            }
        }
    ]
},
{
    id: 9,
    title: "When You Eat Matters: Fasting, Meal Timing, and Your Body Clock",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "The Same Meal Is Not the Same Meal",
            content: "Here's an experiment researchers have run many times: give someone the exact same bowl of rice at 9 AM, then again at 9 PM. Same food. Same calories. Same person.\n\nThe 9 PM meal produces a **significantly larger blood glucose spike** — in some studies the evening response looks almost prediabetic in people who are perfectly healthy in the morning.\n\nNothing about the food changed. What changed was the **time on your body's internal clock**. Your metabolism is not a machine that runs the same 24 hours a day. It has an opening time and a closing time, and most of us are eating during the hours when the kitchen staff has gone home.\n\nIn this lesson you'll learn the circadian biology of metabolism, what the fasting research actually shows (including the honest, unglamorous parts), and the simple timing shifts that let you work with your clock instead of against it.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">SAME MEAL, DIFFERENT BODY</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Your metabolic response depends on the clock</text>
                    <rect x="60" y="170" width="460" height="380" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <circle cx="290" cy="270" r="55" fill="rgba(255,215,0,0.15)" stroke="#ffd700" stroke-width="3"/>
                    <text x="290" y="280" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="24">9 AM</text>
                    <text x="290" y="380" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">MORNING MEAL</text>
                    <text x="290" y="425" text-anchor="middle" fill="#fff" font-size="18">Insulin works efficiently</text>
                    <text x="290" y="460" text-anchor="middle" fill="#fff" font-size="18">Modest glucose rise</text>
                    <text x="290" y="495" text-anchor="middle" fill="#888" font-size="16">Body clock: fully open for business</text>
                    <rect x="580" y="170" width="460" height="380" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <circle cx="810" cy="270" r="55" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6" stroke-width="3"/>
                    <text x="810" y="280" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="24">9 PM</text>
                    <text x="810" y="380" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">EVENING MEAL</text>
                    <text x="810" y="425" text-anchor="middle" fill="#fff" font-size="18">Insulin response sluggish</text>
                    <text x="810" y="460" text-anchor="middle" fill="#fff" font-size="18">Much larger glucose spike</text>
                    <text x="810" y="495" text-anchor="middle" fill="#888" font-size="16">Body clock: winding down for sleep</text>
                    <rect x="150" y="620" width="800" height="130" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="675" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">IDENTICAL FOOD, IDENTICAL CALORIES</text>
                    <text x="550" y="715" text-anchor="middle" fill="#fff" font-size="18">The only variable that changed was the time</text>
                    <rect x="200" y="810" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="860" text-anchor="middle" fill="#ffd700" font-size="20">WHEN you eat is a real metabolic lever</text>
                </svg>`,
                caption: "The identical meal produces a bigger glucose spike at night"
            }
        },
        {
            type: "concept",
            title: "Your Metabolism Runs on a Clock",
            content: "Deep in your brain, a cluster of about 20,000 neurons called the **suprachiasmatic nucleus (SCN)** acts as a master clock, synced to light. But here's the part most people don't know: **almost every organ has its own clock** — liver, pancreas, muscle, fat tissue all run circadian programs.\n\nThose clocks schedule your metabolic machinery:\n\n• **Insulin sensitivity peaks in the morning** — your muscles and liver are primed to absorb glucose after the overnight fast\n• **The pancreas releases insulin more effectively earlier in the day**\n• **By evening, insulin sensitivity falls** — the same carbs require more insulin and clear more slowly\n• **Melatonin rises at night** and actively dampens insulin secretion, preparing your body for sleep, not digestion\n\nThis is why researchers say we become **transiently more 'diabetic-like' every evening** — it's a normal, programmed downshift. The problem is modern life: late dinners, midnight snacks, and glowing screens push food into the hours when your metabolic machinery is powering down.\n\nEating in sync with this clock is called **chrononutrition**, and it's one of the most underrated ideas in metabolic health.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE METABOLIC CLOCK</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Insulin sensitivity follows a daily rhythm</text>
                    <circle cx="550" cy="450" r="250" fill="rgba(99,102,241,0.08)" stroke="#6366f1" stroke-width="3"/>
                    <circle cx="550" cy="450" r="70" fill="rgba(255,215,0,0.12)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="440" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="20">SCN</text>
                    <text x="550" y="470" text-anchor="middle" fill="#888" font-size="14">master clock</text>
                    <rect x="430" y="150" width="240" height="70" rx="15" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="18">MORNING</text>
                    <text x="550" y="205" text-anchor="middle" fill="#fff" font-size="15">Insulin sensitivity HIGH</text>
                    <rect x="820" y="410" width="240" height="70" rx="15" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="940" y="440" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="18">AFTERNOON</text>
                    <text x="940" y="465" text-anchor="middle" fill="#fff" font-size="15">Gradually declining</text>
                    <rect x="430" y="690" width="240" height="70" rx="15" fill="rgba(239,68,68,0.12)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="720" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="18">NIGHT</text>
                    <text x="550" y="745" text-anchor="middle" fill="#fff" font-size="15">Insulin sensitivity LOW</text>
                    <rect x="40" y="410" width="240" height="70" rx="15" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="160" y="440" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="18">LATE NIGHT</text>
                    <text x="160" y="465" text-anchor="middle" fill="#fff" font-size="15">Melatonin blunts insulin</text>
                    <line x1="550" y1="380" x2="550" y2="230" stroke="#10b981" stroke-width="2" stroke-dasharray="6" opacity="0.6"/>
                    <line x1="720" y1="445" x2="810" y2="445" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6" opacity="0.6"/>
                    <line x1="550" y1="520" x2="550" y2="680" stroke="#ef4444" stroke-width="2" stroke-dasharray="6" opacity="0.6"/>
                    <line x1="380" y1="445" x2="290" y2="445" stroke="#8b5cf6" stroke-width="2" stroke-dasharray="6" opacity="0.6"/>
                    <rect x="150" y="830" width="800" height="120" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="880" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="20">Liver, pancreas, muscle and fat each keep time</text>
                    <text x="550" y="920" text-anchor="middle" fill="#fff" font-size="17">Every evening your body downshifts glucose handling</text>
                </svg>`,
                caption: "Insulin sensitivity peaks in the morning and falls through the evening"
            }
        },
        {
            type: "visual",
            title: "One Meal, Two Very Different Spikes",
            content: "Picture continuous glucose monitor traces from the same person eating the same meal twice. The morning curve rises gently and returns to baseline quickly. The evening curve climbs **higher and stays elevated longer** — the same carbohydrates linger in the bloodstream because insulin sensitivity has dropped and melatonin is suppressing insulin release.\n\nRepeated night after night for years, those taller, longer evening spikes add up to real metabolic wear: more insulin demand, more fat storage signaling, and higher average glucose.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">GLUCOSE CURVES BY TIME</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Same meal, measured morning vs evening</text>
                    <line x1="150" y1="620" x2="950" y2="620" stroke="#888" stroke-width="2"/>
                    <line x1="150" y1="620" x2="150" y2="180" stroke="#888" stroke-width="2"/>
                    <text x="130" y="200" text-anchor="end" fill="#888" font-size="15">high</text>
                    <text x="130" y="615" text-anchor="end" fill="#888" font-size="15">base</text>
                    <text x="550" y="660" text-anchor="middle" fill="#888" font-size="16">time after the meal (hours)</text>
                    <path d="M150 590 C 280 590, 300 430, 420 460 C 540 490, 650 580, 950 590" fill="none" stroke="#10b981" stroke-width="5"/>
                    <path d="M150 590 C 260 580, 300 240, 460 250 C 620 260, 720 480, 950 560" fill="none" stroke="#ef4444" stroke-width="5"/>
                    <rect x="620" y="200" width="300" height="120" rx="15" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="770" y="245" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="19">9 PM MEAL</text>
                    <text x="770" y="280" text-anchor="middle" fill="#fff" font-size="16">Higher peak,</text>
                    <text x="770" y="303" text-anchor="middle" fill="#fff" font-size="16">slower return</text>
                    <rect x="620" y="350" width="300" height="120" rx="15" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="770" y="395" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">9 AM MEAL</text>
                    <text x="770" y="430" text-anchor="middle" fill="#fff" font-size="16">Gentle rise,</text>
                    <text x="770" y="453" text-anchor="middle" fill="#fff" font-size="16">quick recovery</text>
                    <rect x="150" y="720" width="800" height="150" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="770" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">WHY THE EVENING CURVE IS WORSE</text>
                    <text x="550" y="810" text-anchor="middle" fill="#fff" font-size="17">Lower insulin sensitivity + rising melatonin</text>
                    <text x="550" y="843" text-anchor="middle" fill="#888" font-size="16">Repeated nightly, the extra exposure compounds</text>
                    <rect x="200" y="920" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="970" text-anchor="middle" fill="#ffd700" font-size="19">Shift the same calories earlier: smaller spikes</text>
                </svg>`,
                caption: "The evening meal climbs higher and clears more slowly"
            }
        },
        {
            type: "example",
            title: "The Shift-Work Warning",
            content: "The most dramatic proof of circadian metabolism comes from people forced to live against the clock.\n\nIn a landmark lab study, **Scheer et al. (2009)** put healthy volunteers on an artificial schedule that gradually flipped their days and nights — eating and sleeping in complete conflict with their internal clocks. Within days, results were startling:\n\n• **Glucose and insulin rose** even though meals were identical\n• **Three of the eight participants** developed glucose responses in the **prediabetic range**\n• Blood pressure went up and the sleep hormone rhythm inverted\n\nThese were healthy people. All it took was misaligned timing.\n\nThe real-world echo is grim: large studies consistently find **night-shift workers have a substantially higher risk of type 2 diabetes and obesity** — even when diet quality looks similar. Their food keeps landing in a body that's biochemically prepared for sleep.\n\nYou don't work nights? A 10 PM dinner, midnight snacking, and 1 AM scrolling create a **mild version of shift work** — what researchers call 'social jetlag.' Your liver can't tell the difference between a night shift and a Netflix binge with snacks.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">LIVING AGAINST THE CLOCK</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Scheer et al. 2009 — circadian misalignment</text>
                    <rect x="150" y="160" width="800" height="170" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="210" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">THE EXPERIMENT</text>
                    <text x="550" y="250" text-anchor="middle" fill="#fff" font-size="18">Healthy adults ate and slept on a schedule</text>
                    <text x="550" y="283" text-anchor="middle" fill="#fff" font-size="18">that drifted fully out of sync with their clock</text>
                    <rect x="60" y="380" width="460" height="230" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="430" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">WITHIN DAYS</text>
                    <text x="290" y="475" text-anchor="middle" fill="#fff" font-size="17">Glucose and insulin climbed</text>
                    <text x="290" y="510" text-anchor="middle" fill="#fff" font-size="17">3 of 8 hit prediabetic-range</text>
                    <text x="290" y="543" text-anchor="middle" fill="#fff" font-size="17">glucose responses</text>
                    <text x="290" y="580" text-anchor="middle" fill="#888" font-size="15">Same meals, wrong timing</text>
                    <rect x="580" y="380" width="460" height="230" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="810" y="430" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">REAL-WORLD ECHO</text>
                    <text x="810" y="475" text-anchor="middle" fill="#fff" font-size="17">Night-shift workers show</text>
                    <text x="810" y="510" text-anchor="middle" fill="#fff" font-size="17">higher type 2 diabetes and</text>
                    <text x="810" y="543" text-anchor="middle" fill="#fff" font-size="17">obesity risk in large studies</text>
                    <text x="810" y="580" text-anchor="middle" fill="#888" font-size="15">Even with similar diets</text>
                    <rect x="150" y="670" width="800" height="150" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="720" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="21">YOUR MILD VERSION: SOCIAL JETLAG</text>
                    <text x="550" y="760" text-anchor="middle" fill="#fff" font-size="17">Late dinners + midnight snacks + 1 AM screens</text>
                    <text x="550" y="793" text-anchor="middle" fill="#888" font-size="16">Your liver reads it as a night shift</text>
                    <rect x="200" y="880" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="930" text-anchor="middle" fill="#ffd700" font-size="19">Misaligned timing alone impairs glucose control</text>
                </svg>`,
                caption: "Days of misaligned eating pushed healthy people toward prediabetic responses"
            }
        },
        {
            type: "quiz",
            question: "Why does the same meal eaten at 9 PM produce a larger glucose spike than at 9 AM?",
            options: [
                { text: "Food digests more slowly at night, so more glucose is absorbed from it", correct: false },
                { text: "Insulin sensitivity is lower in the evening and rising melatonin blunts insulin release", correct: true },
                { text: "Evening meals are always larger, so the comparison is unfair", correct: false },
                { text: "The liver stops processing glucose entirely after sunset", correct: false }
            ],
            explanation: "Your circadian clocks schedule insulin sensitivity to peak in the morning and decline through the evening, while rising melatonin actively dampens insulin secretion at night. So identical carbs meet a weaker insulin response after dark and clear more slowly. The digestion answer is the tempting trap — absorption isn't the issue; the hormonal handling of the glucose is. Studies control for meal size, and the liver keeps working at night, just less efficiently for glucose disposal.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">CIRCADIAN METABOLISM</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">The clock schedules your insulin response</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">Morning body and evening body are different</text>
                    <rect x="60" y="360" width="460" height="200" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="420" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">MORNING</text>
                    <text x="290" y="465" text-anchor="middle" fill="#fff" font-size="18">High insulin sensitivity</text>
                    <text x="290" y="500" text-anchor="middle" fill="#888" font-size="16">Glucose clears quickly</text>
                    <rect x="580" y="360" width="460" height="200" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="810" y="420" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">EVENING</text>
                    <text x="810" y="465" text-anchor="middle" fill="#fff" font-size="18">Lower sensitivity + melatonin</text>
                    <text x="810" y="500" text-anchor="middle" fill="#888" font-size="16">Same carbs, bigger spike</text>
                    <rect x="200" y="630" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="680" text-anchor="middle" fill="#ffd700" font-size="20">Which mechanism explains the difference?</text>
                </svg>`,
                caption: "Test your understanding of the evening downshift"
            }
        },
        {
            type: "concept",
            title: "Time-Restricted Eating: The Panda Discovery",
            content: "In 2012, **Satchin Panda's lab at the Salk Institute** ran an experiment that launched a thousand fasting apps. Two groups of mice ate the identical high-fat diet — but one group could eat around the clock, while the other could only eat within an **8-hour window**.\n\nThe result stunned researchers: the time-restricted mice were **protected from obesity, fatty liver, and glucose problems** despite eating the same food and roughly the same calories. Timing alone changed the outcome — in mice.\n\nThat spawned **time-restricted eating (TRE)** in humans: confining all food to a consistent **8–10 hour daily window** (say, 9 AM to 6 PM), giving the body a long overnight fast.\n\nEarly human studies were encouraging:\n\n• **Wilkinson et al. (2020)**: 10-hour TRE in adults with metabolic syndrome improved weight, blood pressure, and lipids over 12 weeks\n• People often **spontaneously eat less** without counting anything\n• Late-night snacking — the most metabolically damaging eating — gets structurally eliminated\n\nBut mouse magic doesn't always translate to humans. The rigorous trials that followed told a more sober, and more useful, story — that's next.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE SALK MOUSE STUDY</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Panda lab, 2012 — same food, different windows</text>
                    <rect x="60" y="170" width="460" height="300" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="220" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">EAT ANYTIME (24H)</text>
                    <rect x="110" y="250" width="360" height="36" rx="18" fill="rgba(239,68,68,0.35)"/>
                    <text x="290" y="330" text-anchor="middle" fill="#fff" font-size="17">Obesity, fatty liver,</text>
                    <text x="290" y="363" text-anchor="middle" fill="#fff" font-size="17">glucose intolerance</text>
                    <text x="290" y="420" text-anchor="middle" fill="#888" font-size="15">High-fat diet, grazing all hours</text>
                    <rect x="580" y="170" width="460" height="300" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="220" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">8-HOUR WINDOW</text>
                    <rect x="630" y="250" width="360" height="36" rx="18" fill="rgba(255,255,255,0.05)"/>
                    <rect x="740" y="250" width="140" height="36" rx="18" fill="rgba(16,185,129,0.5)"/>
                    <text x="810" y="330" text-anchor="middle" fill="#fff" font-size="17">Protected from obesity</text>
                    <text x="810" y="363" text-anchor="middle" fill="#fff" font-size="17">and metabolic damage</text>
                    <text x="810" y="420" text-anchor="middle" fill="#888" font-size="15">Same high-fat diet, similar calories</text>
                    <rect x="150" y="530" width="800" height="180" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="580" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">HUMAN VERSION: TRE</text>
                    <text x="550" y="620" text-anchor="middle" fill="#fff" font-size="18">All food inside a consistent 8-10 hour window</text>
                    <text x="550" y="655" text-anchor="middle" fill="#fff" font-size="18">Wilkinson 2020: better weight, BP, lipids in 12 wks</text>
                    <text x="550" y="688" text-anchor="middle" fill="#888" font-size="16">Late-night eating disappears by design</text>
                    <rect x="200" y="770" width="700" height="80" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="820" text-anchor="middle" fill="#f59e0b" font-size="19">Caveat: mice are not people. Enter the RCTs...</text>
                </svg>`,
                caption: "Timing alone protected mice — humans needed rigorous trials to check"
            }
        },
        {
            type: "concept",
            title: "The Honest Read: What the Big Trials Showed",
            content: "Here's where intellectual honesty matters more than hype.\n\nThe most rigorous test came from **Liu et al. (2022, New England Journal of Medicine)**: 139 adults with obesity followed for a **full year**. One group did calorie restriction alone; the other did the same calorie restriction **plus** an 8-hour eating window.\n\nThe result? Both groups lost meaningful weight (~6–8 kg), and TRE added **no significant extra benefit** for weight, waist, blood pressure, glucose, or lipids. The window itself wasn't magic — **the calorie control was doing the work**.\n\nOther trials, like **Lowe et al. (2020, the TREAT study)**, found similarly modest effects when TRE was tested without dietary guidance.\n\nSo is meal timing worthless? No — the honest synthesis is:\n\n• TRE's main power is **behavioral**: a simple fence that cuts grazing and late-night calories without counting\n• For many people it's the **easiest adherence tool** they've ever tried — and adherence beats elegance\n• Circadian benefits likely favor **earlier windows** (research is ongoing)\n• If you eat within a window but stuff it with the same excess calories, **don't expect miracles**\n\nUse TRE as a tool, not a religion.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE NEJM REALITY CHECK</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Liu et al. 2022 — 139 adults, 12 months</text>
                    <rect x="60" y="170" width="460" height="280" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="290" y="225" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="20">CALORIES ONLY</text>
                    <text x="290" y="270" text-anchor="middle" fill="#fff" font-size="18">Calorie restriction,</text>
                    <text x="290" y="303" text-anchor="middle" fill="#fff" font-size="18">eat any time of day</text>
                    <text x="290" y="365" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="26">-6.3 kg</text>
                    <text x="290" y="410" text-anchor="middle" fill="#888" font-size="15">Meaningful loss at one year</text>
                    <rect x="580" y="170" width="460" height="280" rx="20" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="810" y="225" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">CALORIES + 8H WINDOW</text>
                    <text x="810" y="270" text-anchor="middle" fill="#fff" font-size="18">Same calorie restriction</text>
                    <text x="810" y="303" text-anchor="middle" fill="#fff" font-size="18">plus time-restricted eating</text>
                    <text x="810" y="365" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="26">-8.0 kg</text>
                    <text x="810" y="410" text-anchor="middle" fill="#888" font-size="15">No statistically significant edge</text>
                    <rect x="150" y="510" width="800" height="140" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="560" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">VERDICT: THE CALORIES DID THE WORK</text>
                    <text x="550" y="600" text-anchor="middle" fill="#fff" font-size="17">The window itself added no measurable magic</text>
                    <text x="550" y="630" text-anchor="middle" fill="#888" font-size="15">TREAT trial (Lowe 2020) found similar modest effects</text>
                    <rect x="150" y="710" width="800" height="150" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="760" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">BUT TRE STILL EARNS ITS PLACE</text>
                    <text x="550" y="800" text-anchor="middle" fill="#fff" font-size="17">It is a simple fence that makes eating less feel easy</text>
                    <text x="550" y="833" text-anchor="middle" fill="#888" font-size="16">Adherence beats elegance in every diet study</text>
                    <rect x="200" y="920" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="970" text-anchor="middle" fill="#ffd700" font-size="19">Use the window as a tool, not a religion</text>
                </svg>`,
                caption: "TRE plus calories matched calories alone — the fence helps you eat less"
            }
        },
        {
            type: "concept",
            title: "What Fasting Does Inside Your Cells",
            content: "Beyond weight, fasting researchers are excited about something subtler: **cellular housekeeping**.\n\nWhen you go 12+ hours without food, falling insulin and rising AMPK flip your cells from 'growth mode' to 'maintenance mode':\n\n• **Autophagy** ('self-eating') ramps up — cells break down and recycle damaged proteins and worn-out parts. Yoshinori Ohsumi won the **2016 Nobel Prize** for mapping this machinery\n• **Mitophagy** — the targeted removal of damaged mitochondria, your cells' defective power plants\n• **Mitochondrial fusion** — remaining mitochondria link into efficient networks, improving energy output\n\nRemember from earlier lessons: damaged mitochondria are a core driver of insulin resistance and a hallmark of aging. A daily fasting window may be a scheduled maintenance shift.\n\n**Now the honest framing**: the strongest evidence here comes from **animal and cell studies**. Human autophagy is hard to measure directly, so we don't yet know exactly how many fasting hours meaningfully move it in people, or how much it matters for human aging.\n\nIt's a plausible, promising mechanism — not a proven anti-aging guarantee. The overnight fast costs you nothing, though, and the machinery it activates is real biology.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">CELLULAR HOUSEKEEPING</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">What a 12+ hour fast switches on</text>
                    <rect x="150" y="160" width="800" height="110" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="207" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">FED STATE: GROWTH MODE</text>
                    <text x="550" y="243" text-anchor="middle" fill="#fff" font-size="17">Insulin high, cells build and store</text>
                    <path d="M550 280 L550 330" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,340 540,325 560,325" fill="#14b8a6"/>
                    <text x="700" y="315" text-anchor="middle" fill="#14b8a6" font-size="16">12+ hours without food</text>
                    <rect x="80" y="360" width="300" height="220" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="230" y="410" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">AUTOPHAGY</text>
                    <text x="230" y="450" text-anchor="middle" fill="#fff" font-size="16">Cells recycle damaged</text>
                    <text x="230" y="480" text-anchor="middle" fill="#fff" font-size="16">proteins and parts</text>
                    <text x="230" y="535" text-anchor="middle" fill="#888" font-size="14">Ohsumi: 2016 Nobel Prize</text>
                    <rect x="400" y="360" width="300" height="220" rx="20" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="410" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">MITOPHAGY</text>
                    <text x="550" y="450" text-anchor="middle" fill="#fff" font-size="16">Defective mitochondria</text>
                    <text x="550" y="480" text-anchor="middle" fill="#fff" font-size="16">get cleared out</text>
                    <text x="550" y="535" text-anchor="middle" fill="#888" font-size="14">Bad power plants removed</text>
                    <rect x="720" y="360" width="300" height="220" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="870" y="410" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">FUSION</text>
                    <text x="870" y="450" text-anchor="middle" fill="#fff" font-size="16">Mitochondria join into</text>
                    <text x="870" y="480" text-anchor="middle" fill="#fff" font-size="16">efficient networks</text>
                    <text x="870" y="535" text-anchor="middle" fill="#888" font-size="14">Better energy output</text>
                    <rect x="150" y="640" width="800" height="150" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="690" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">HONESTY BOX</text>
                    <text x="550" y="728" text-anchor="middle" fill="#fff" font-size="17">Strongest evidence is from animal and cell studies</text>
                    <text x="550" y="761" text-anchor="middle" fill="#888" font-size="16">Human dose and payoff are not yet nailed down</text>
                    <rect x="200" y="850" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="900" text-anchor="middle" fill="#ffd700" font-size="19">Promising mechanism, not a proven guarantee</text>
                </svg>`,
                caption: "Fasting flips cells into maintenance mode — best proven in animals so far"
            }
        },
        {
            type: "example",
            title: "CALERIE 2: Eating Less, Aging Slower",
            content: "What happens when humans simply eat modestly less for years? A landmark NIH trial answered that.\n\n**CALERIE 2** was a 2-year randomized controlled trial in healthy, non-obese adults. The target was 25% calorie restriction; participants actually achieved about **11–12% fewer calories** — roughly 250–300 fewer calories a day. Not extreme. Skipping-a-daily-pastry territory.\n\nThe results:\n\n• **Improved cardiometabolic markers** — better cholesterol, blood pressure, and insulin sensitivity\n• **Reduced inflammation** — a core driver of nearly every age-related disease\n• And the headline finding, published in **Nature Aging (2023)**: restriction **slowed the pace of biological aging by ~2–3%** on **DunedinPACE**, an epigenetic 'speedometer' of aging built from DNA methylation\n\nA 2–3% slower aging pace sounds small — but modeling suggests sustained effects of that size could translate into meaningfully lower mortality risk over decades.\n\nThe caution: participants also lost some muscle and bone density — a reminder that in midlife and beyond, calorie restriction must be paired with **adequate protein and strength training**, which you learned about earlier in this book. Less fuel, same machinery maintenance.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE CALERIE 2 TRIAL</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">2-year RCT of modest calorie restriction</text>
                    <rect x="150" y="160" width="800" height="140" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="210" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">THE DOSE: ~11-12% FEWER CALORIES</text>
                    <text x="550" y="250" text-anchor="middle" fill="#fff" font-size="18">About 250-300 kcal/day — one pastry's worth</text>
                    <text x="550" y="282" text-anchor="middle" fill="#888" font-size="15">Healthy non-obese adults, randomized, 2 years</text>
                    <rect x="80" y="360" width="300" height="200" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="230" y="415" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">HEART MARKERS</text>
                    <text x="230" y="455" text-anchor="middle" fill="#fff" font-size="16">Better lipids, BP,</text>
                    <text x="230" y="485" text-anchor="middle" fill="#fff" font-size="16">insulin sensitivity</text>
                    <rect x="400" y="360" width="300" height="200" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="550" y="415" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="19">INFLAMMATION</text>
                    <text x="550" y="455" text-anchor="middle" fill="#fff" font-size="16">Reduced — a driver of</text>
                    <text x="550" y="485" text-anchor="middle" fill="#fff" font-size="16">age-related disease</text>
                    <rect x="720" y="360" width="300" height="200" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="870" y="415" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="19">PACE OF AGING</text>
                    <text x="870" y="455" text-anchor="middle" fill="#fff" font-size="16">DunedinPACE slowed</text>
                    <text x="870" y="485" text-anchor="middle" fill="#fff" font-size="16">by ~2-3%</text>
                    <text x="550" y="605" text-anchor="middle" fill="#888" font-size="16">Published in Nature Aging, 2023</text>
                    <rect x="150" y="650" width="800" height="150" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="700" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">THE CATCH</text>
                    <text x="550" y="738" text-anchor="middle" fill="#fff" font-size="17">Some muscle and bone loss came with it</text>
                    <text x="550" y="771" text-anchor="middle" fill="#888" font-size="16">Pair any restriction with protein + strength work</text>
                    <rect x="200" y="860" width="700" height="80" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="910" text-anchor="middle" fill="#8b5cf6" font-size="19">Modest, sustained restriction slowed human aging</text>
                </svg>`,
                caption: "~11-12% fewer calories for 2 years measurably slowed biological aging"
            }
        },
        {
            type: "concept",
            title: "Who Should NOT Fast",
            content: "Fasting content on the internet rarely includes this card. It should.\n\n**Older adults at risk of sarcopenia.** After 60, your body needs **more** protein, distributed across the day (~25–30g per meal) to overcome anabolic resistance and keep muscle. Long fasting windows make that distribution nearly impossible — you can't fit 90–100g of protein into one or two meals effectively. For many older adults, aggressive fasting trades a speculative longevity benefit for a **very real muscle loss risk**. Muscle is your glucose sink and your independence insurance; don't starve it.\n\n**Anyone with a history of disordered eating.** Fasting's rules and restriction can reactivate binge-restrict cycles. If food rules have ever controlled you, structured meal timing is the wrong tool — full stop.\n\n**Also check with a clinician first if you:**\n• Take insulin or glucose-lowering medication (hypoglycemia risk)\n• Are pregnant or breastfeeding\n• Are underweight or recovering from illness or surgery\n• Are a growing teenager\n\nThe good news: the biggest circadian wins — an overnight fast of ~12 hours and an earlier dinner — are gentle enough for almost everyone and don't require anything extreme.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">FASTING IS NOT FOR EVERYONE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">The card the internet forgets to show you</text>
                    <rect x="80" y="170" width="440" height="260" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="300" y="220" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">OLDER ADULTS AT</text>
                    <text x="300" y="250" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">SARCOPENIA RISK</text>
                    <text x="300" y="295" text-anchor="middle" fill="#fff" font-size="16">Need 25-30g protein per meal,</text>
                    <text x="300" y="325" text-anchor="middle" fill="#fff" font-size="16">spread across the day</text>
                    <text x="300" y="365" text-anchor="middle" fill="#888" font-size="15">Long fasts crowd out protein</text>
                    <text x="300" y="395" text-anchor="middle" fill="#888" font-size="15">and accelerate muscle loss</text>
                    <rect x="580" y="170" width="440" height="260" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="800" y="220" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">HISTORY OF</text>
                    <text x="800" y="250" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">DISORDERED EATING</text>
                    <text x="800" y="295" text-anchor="middle" fill="#fff" font-size="16">Rigid food rules can reactivate</text>
                    <text x="800" y="325" text-anchor="middle" fill="#fff" font-size="16">binge-restrict cycles</text>
                    <text x="800" y="365" text-anchor="middle" fill="#888" font-size="15">Structured restriction is the</text>
                    <text x="800" y="395" text-anchor="middle" fill="#888" font-size="15">wrong tool here — full stop</text>
                    <rect x="150" y="490" width="800" height="200" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="540" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">TALK TO A CLINICIAN FIRST IF YOU...</text>
                    <text x="550" y="580" text-anchor="middle" fill="#fff" font-size="17">Take insulin or glucose-lowering meds</text>
                    <text x="550" y="613" text-anchor="middle" fill="#fff" font-size="17">Are pregnant, underweight, or recovering</text>
                    <text x="550" y="646" text-anchor="middle" fill="#fff" font-size="17">Are a still-growing teenager</text>
                    <rect x="150" y="750" width="800" height="140" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="800" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">THE GENTLE DEFAULT WORKS FOR ALMOST ALL</text>
                    <text x="550" y="840" text-anchor="middle" fill="#fff" font-size="17">~12h overnight fast + earlier dinner = safe wins</text>
                </svg>`,
                caption: "Muscle preservation and mental health outrank fasting trends"
            }
        },
        {
            type: "application",
            title: "Your Body-Clock Eating Plan",
            content: "You don't need an extreme protocol. Start with the moves that carry the best evidence-to-effort ratio:\n\n1. **Set a 12-hour overnight fast as your default** — finish dinner at 7 PM, eat breakfast at 7 AM. This is the safe, sustainable baseline nearly everyone can keep\n\n2. **Move dinner earlier** — aim to finish eating **2–3 hours before bed**, so food stops landing on a melatonin-soaked metabolism\n\n3. **Front-load your calories** — make breakfast and lunch your bigger meals; treat dinner as the lighter one. Same food, better clock alignment\n\n4. **Keep meal times consistent** — your organs' clocks entrain to regular schedules; eating at wildly different times each day is mini jet lag\n\n5. **If you try a shorter window (8–10h), place it early** and keep protein adequate — and skip it entirely if you're in one of the not-for-you groups from the last card\n\nThis week, just do step 1: pick your 12-hour window and write it down. Kitchen closes at a set time. That single fence eliminates most late-night eating — the most damaging eating you do.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">YOUR TIMING PLAYBOOK</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Five moves, ranked by evidence and ease</text>
                    <rect x="150" y="150" width="800" height="120" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="200" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="22">1.</text>
                    <text x="245" y="200" text-anchor="start" fill="#fff" font-size="19">12-hour overnight fast as default</text>
                    <text x="245" y="238" text-anchor="start" fill="#888" font-size="16">e.g., kitchen closed 7 PM to 7 AM</text>
                    <rect x="150" y="300" width="800" height="120" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="350" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="22">2.</text>
                    <text x="245" y="350" text-anchor="start" fill="#fff" font-size="19">Finish dinner 2-3 hours before bed</text>
                    <text x="245" y="388" text-anchor="start" fill="#888" font-size="16">Stop feeding a melatonin-soaked metabolism</text>
                    <rect x="150" y="450" width="800" height="120" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="500" text-anchor="start" fill="#10b981" font-weight="bold" font-size="22">3.</text>
                    <text x="245" y="500" text-anchor="start" fill="#fff" font-size="19">Front-load calories earlier in the day</text>
                    <text x="245" y="538" text-anchor="start" fill="#888" font-size="16">Bigger breakfast and lunch, lighter dinner</text>
                    <rect x="150" y="600" width="800" height="120" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="650" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="22">4.</text>
                    <text x="245" y="650" text-anchor="start" fill="#fff" font-size="19">Eat at consistent times daily</text>
                    <text x="245" y="688" text-anchor="start" fill="#888" font-size="16">Random meal times = mini jet lag for organs</text>
                    <rect x="150" y="750" width="800" height="120" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="800" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="22">5.</text>
                    <text x="245" y="800" text-anchor="start" fill="#fff" font-size="19">Optional: early 8-10h window, protein intact</text>
                    <text x="245" y="838" text-anchor="start" fill="#888" font-size="16">Skip if in a not-for-you group</text>
                    <rect x="200" y="920" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="970" text-anchor="middle" fill="#ffd700" font-size="19">This week: just pick your 12-hour window</text>
                </svg>`,
                caption: "Start with the gentle default — the kitchen-closed fence"
            }
        },
        {
            type: "quiz",
            question: "In the Liu 2022 NEJM trial, what happened when time-restricted eating was added to calorie restriction for a year?",
            options: [
                { text: "The TRE group lost twice as much weight, proving timing beats calories", correct: false },
                { text: "TRE added no significant benefit — calorie control was doing the real work", correct: true },
                { text: "The TRE group gained weight because they overate inside the window", correct: false },
                { text: "The trial was stopped early because fasting proved dangerous", correct: false }
            ],
            explanation: "Liu et al. followed 139 adults for 12 months: calorie restriction alone versus the same restriction plus an 8-hour window. Both groups lost meaningful weight, and TRE added no statistically significant advantage for weight or metabolic markers. That's the honest read: the window's main value is behavioral — it makes eating less easier by fencing out grazing and late-night calories. The 'timing beats calories' answer is the popular myth this rigorous trial specifically tested and did not support.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE TRE EVIDENCE</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">139 adults, 12 months, NEJM 2022</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">Window + calories vs calories alone</text>
                    <rect x="60" y="360" width="460" height="180" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="290" y="420" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="20">CALORIES ONLY</text>
                    <text x="290" y="465" text-anchor="middle" fill="#fff" font-size="18">Meaningful weight loss</text>
                    <rect x="580" y="360" width="460" height="180" rx="20" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="810" y="420" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">CALORIES + WINDOW</text>
                    <text x="810" y="465" text-anchor="middle" fill="#fff" font-size="18">What was the difference?</text>
                    <rect x="200" y="610" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="660" text-anchor="middle" fill="#ffd700" font-size="20">What did the year-long trial show?</text>
                </svg>`,
                caption: "Test your honest read of the fasting research"
            }
        },
        {
            type: "concept",
            title: "The Timing Hierarchy: What Actually Matters",
            content: "Let's stack everything from this lesson into an honest hierarchy — most proven at the top:\n\n• **Tier 1 — Solid**: Don't eat late at night. Circadian biology, shift-work data, and controlled studies all agree that food late in the evening meets a body poorly prepared for it. An earlier dinner and a ~12-hour overnight fast are the highest-confidence wins\n\n• **Tier 2 — Useful tool**: Time-restricted eating (8–10h windows). It reliably helps people eat less without counting — but per Liu 2022, don't expect magic beyond the calorie control it enables\n\n• **Tier 3 — Promising but unproven in humans**: Fasting-triggered autophagy, mitophagy, and mitochondrial fusion as anti-aging therapy. Real biology, mostly animal evidence\n\n• **Proven but different**: Modest sustained calorie restriction (CALERIE 2) genuinely slowed measured aging — that's about *how much*, not *when*, but it shows the nutrient-sensing pathways respond in humans\n\nNotice something? The highest-confidence advice is also the easiest: **stop eating a few hours before bed, most nights**. No app, no willpower marathon, no skipped breakfasts required. Timing is a lever — just hold it with an evidence-calibrated grip.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE EVIDENCE PYRAMID</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Meal timing claims, ranked by confidence</text>
                    <rect x="150" y="160" width="800" height="150" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="3"/>
                    <text x="550" y="210" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">TIER 1: SOLID EVIDENCE</text>
                    <text x="550" y="250" text-anchor="middle" fill="#fff" font-size="18">Avoid late-night eating; ~12h overnight fast</text>
                    <text x="550" y="283" text-anchor="middle" fill="#888" font-size="16">Circadian labs + shift-work data + RCTs agree</text>
                    <rect x="200" y="340" width="700" height="150" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="550" y="390" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="21">TIER 2: USEFUL TOOL</text>
                    <text x="550" y="430" text-anchor="middle" fill="#fff" font-size="18">8-10h TRE — works mainly via easier calorie control</text>
                    <text x="550" y="463" text-anchor="middle" fill="#888" font-size="16">Liu 2022: no magic beyond the calories</text>
                    <rect x="250" y="520" width="600" height="150" rx="20" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="570" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="21">TIER 3: PROMISING</text>
                    <text x="550" y="610" text-anchor="middle" fill="#fff" font-size="17">Autophagy / mitophagy as anti-aging</text>
                    <text x="550" y="643" text-anchor="middle" fill="#888" font-size="16">Mostly animal evidence so far</text>
                    <rect x="150" y="720" width="800" height="140" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="770" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="20">RELATED: CALERIE 2 (HOW MUCH, NOT WHEN)</text>
                    <text x="550" y="810" text-anchor="middle" fill="#fff" font-size="17">Modest restriction slowed measured human aging</text>
                    <rect x="200" y="910" width="700" height="80" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="960" text-anchor="middle" fill="#6366f1" font-size="19">Best-proven move is also easiest: eat earlier</text>
                </svg>`,
                caption: "Hold the timing lever with an evidence-calibrated grip"
            }
        }
    ]
},
{
    id: 10,
    title: "Sleep and Stress: The Hidden Metabolic Levers",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "How to Become Prediabetic in Four Nights",
            content: "Imagine a 23-year-old — lean, athletic, perfect blood work. Now put them in a sleep lab and let them sleep only **4.5 hours a night for four nights**. That's it. Same food, same activity.\n\nBy the end of the week, their **insulin sensitivity has dropped by roughly 25%**. Their fat cells respond to insulin like the fat cells of someone decades older. Metabolically, this healthy young adult now looks **temporarily prediabetic** — from nothing but short sleep.\n\nThis isn't a scare story. It's a real experiment (Broussard et al., 2012), and it has been replicated in different forms since 1999.\n\nHere's why this lesson might be the most important one in this book: you can eat well and exercise hard, and **short sleep plus chronic stress will quietly undo much of it**. The good news cuts both ways — these are the two most fixable levers you have, and improvements show up in days, not months. Let's look at the evidence, then build your counterattack.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">FOUR NIGHTS IS ALL IT TAKES</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Broussard et al. 2012 — healthy young adults</text>
                    <rect x="60" y="170" width="460" height="330" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">BEFORE</text>
                    <circle cx="290" cy="310" r="55" fill="rgba(16,185,129,0.25)" stroke="#10b981" stroke-width="3"/>
                    <text x="290" y="320" text-anchor="middle" fill="#fff" font-size="18">age 23</text>
                    <text x="290" y="410" text-anchor="middle" fill="#fff" font-size="17">Lean, fit, normal labs</text>
                    <text x="290" y="445" text-anchor="middle" fill="#888" font-size="15">Insulin works normally</text>
                    <rect x="580" y="170" width="460" height="330" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="810" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">AFTER 4 SHORT NIGHTS</text>
                    <circle cx="810" cy="310" r="55" fill="rgba(239,68,68,0.25)" stroke="#ef4444" stroke-width="3"/>
                    <text x="810" y="320" text-anchor="middle" fill="#fff" font-size="16">4.5h/night</text>
                    <text x="810" y="410" text-anchor="middle" fill="#fff" font-size="17">Insulin sensitivity down ~25%</text>
                    <text x="810" y="445" text-anchor="middle" fill="#888" font-size="15">Temporarily prediabetic profile</text>
                    <path d="M520 335 L580 335" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="580,335 566,326 566,344" fill="#14b8a6"/>
                    <rect x="150" y="570" width="800" height="140" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="620" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">SAME FOOD. SAME ACTIVITY.</text>
                    <text x="550" y="660" text-anchor="middle" fill="#fff" font-size="18">The only variable removed was sleep</text>
                    <rect x="200" y="770" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="820" text-anchor="middle" fill="#ffd700" font-size="20">Sleep is a metabolic organ — treat it like one</text>
                </svg>`,
                caption: "Four short nights made healthy young adults temporarily prediabetic"
            }
        },
        {
            type: "concept",
            title: "Sleep Debt Is Metabolic Debt",
            content: "The science here goes back further than most people realize.\n\n**Spiegel et al. (1999)** — the founding experiment. Eleven healthy young men slept just **4 hours a night for 6 nights**. Their glucose clearance slowed by **40%**, and their glucose tolerance dropped to levels resembling early diabetes. The researchers' conclusion shocked the field: sleep debt has 'a harmful impact on carbohydrate metabolism and endocrine function.'\n\n**Broussard et al. (2012)** went deeper — literally into the fat cells. After **4 nights of 4.5-hour sleep**, whole-body insulin sensitivity fell **~16–25%**, and the fat cells themselves became **~30% less responsive** to insulin. Your cells stop listening to insulin when you're sleep-deprived.\n\nWhat's happening mechanically:\n\n• **Sympathetic nervous system activation** — your body treats short sleep as a threat\n• **Elevated evening cortisol** — which raises blood glucose\n• **Reduced glucose uptake by muscle** — your biggest glucose sink goes quiet\n• **Growth hormone disruption** — less overnight repair\n\nThe hopeful flip side: these effects reversed when normal sleep resumed. Sleep debt is real debt — but it's also **repayable**, fast.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">TWO LANDMARK STUDIES</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">What short sleep does to insulin, measured</text>
                    <rect x="60" y="170" width="460" height="300" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="290" y="220" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">SPIEGEL 1999</text>
                    <text x="290" y="260" text-anchor="middle" fill="#888" font-size="15">4h/night for 6 nights</text>
                    <text x="290" y="330" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="34">-40%</text>
                    <text x="290" y="375" text-anchor="middle" fill="#fff" font-size="17">glucose clearance rate</text>
                    <text x="290" y="425" text-anchor="middle" fill="#888" font-size="15">Tolerance resembled early diabetes</text>
                    <rect x="580" y="170" width="460" height="300" rx="20" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="810" y="220" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="21">BROUSSARD 2012</text>
                    <text x="810" y="260" text-anchor="middle" fill="#888" font-size="15">4.5h/night for 4 nights</text>
                    <text x="810" y="330" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="34">-25%</text>
                    <text x="810" y="375" text-anchor="middle" fill="#fff" font-size="17">whole-body insulin sensitivity</text>
                    <text x="810" y="425" text-anchor="middle" fill="#888" font-size="15">Fat cells ~30% less insulin-responsive</text>
                    <rect x="150" y="530" width="800" height="180" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="580" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">THE MACHINERY BEHIND IT</text>
                    <text x="550" y="620" text-anchor="middle" fill="#fff" font-size="17">Stress-system activation + evening cortisol up</text>
                    <text x="550" y="653" text-anchor="middle" fill="#fff" font-size="17">Muscle glucose uptake down + less repair</text>
                    <rect x="150" y="770" width="800" height="120" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="820" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">THE GOOD NEWS</text>
                    <text x="550" y="858" text-anchor="middle" fill="#fff" font-size="17">Effects reversed once normal sleep resumed</text>
                </svg>`,
                caption: "Days of short sleep measurably impair glucose handling — and recovery is fast"
            }
        },
        {
            type: "concept",
            title: "Ghrelin Up, Leptin Down: Why Tired You Is Hungry You",
            content: "Sleep loss doesn't just impair how you *process* food — it changes how much you *want*.\n\nTwo hormones run your appetite thermostat:\n\n• **Ghrelin** — the 'I'm hungry' hormone, produced in your stomach\n• **Leptin** — the 'I'm full' hormone, produced by fat cells\n\nAfter even two nights of short sleep, studies show **ghrelin rises ~15–28%** and **leptin falls ~15–18%**. Your appetite thermostat gets rewired to 'seek food' — and not just any food. Brain-imaging studies show sleep deprivation amps up reward-center responses to **high-carb, high-fat foods** specifically. Nobody craves salmon and broccoli at midnight.\n\nThe measured result: sleep-restricted people eat roughly **300 extra calories a day** in controlled studies — without feeling like they're overeating.\n\nRun that forward: 300 extra calories daily, on top of ~25% worse insulin handling of those calories, is a compounding formula for weight gain and glucose problems. This is why chronic short sleepers have substantially higher rates of obesity and type 2 diabetes in long-term cohort studies.\n\nThe takeaway reframe: **willpower problems at night are often sleep problems in disguise.**",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE HUNGER REWIRE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">What two short nights do to appetite hormones</text>
                    <rect x="60" y="170" width="460" height="260" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">GHRELIN (HUNGRY)</text>
                    <path d="M230 370 L290 290 L350 370" fill="none" stroke="#ef4444" stroke-width="5"/>
                    <polygon points="290,280 278,300 302,300" fill="#ef4444"/>
                    <text x="290" y="410" text-anchor="middle" fill="#fff" font-size="18">Rises ~15-28%</text>
                    <rect x="580" y="170" width="460" height="260" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="810" y="225" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="22">LEPTIN (FULL)</text>
                    <path d="M750 290 L810 370 L870 290" fill="none" stroke="#3b82f6" stroke-width="5"/>
                    <polygon points="810,380 798,360 822,360" fill="#3b82f6"/>
                    <text x="810" y="410" text-anchor="middle" fill="#fff" font-size="18">Falls ~15-18%</text>
                    <rect x="150" y="490" width="800" height="160" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="540" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">THE MEASURED RESULT</text>
                    <text x="550" y="583" text-anchor="middle" fill="#fff" font-size="18">~300 extra calories eaten per day in studies</text>
                    <text x="550" y="618" text-anchor="middle" fill="#888" font-size="16">Cravings skew toward high-carb, high-fat foods</text>
                    <rect x="150" y="710" width="800" height="140" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="760" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">THE DOUBLE HIT</text>
                    <text x="550" y="800" text-anchor="middle" fill="#fff" font-size="17">More calories in + worse insulin handling of them</text>
                    <rect x="200" y="910" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="960" text-anchor="middle" fill="#ffd700" font-size="19">Midnight cravings are biology, not weak will</text>
                </svg>`,
                caption: "Short sleep flips both appetite hormones the wrong way"
            }
        },
        {
            type: "quiz",
            question: "In the Broussard 2012 study, what happened after healthy young adults slept ~4.5 hours a night for just four nights?",
            options: [
                { text: "Nothing measurable — metabolic damage from sleep loss takes months to appear", correct: false },
                { text: "Insulin sensitivity dropped roughly 25%, producing a temporarily prediabetic profile", correct: true },
                { text: "They lost weight because being awake longer burned more calories", correct: false },
                { text: "Only their mood and reaction time suffered; glucose control was unchanged", correct: false }
            ],
            explanation: "Four nights of ~4.5-hour sleep cut whole-body insulin sensitivity by roughly 25%, and the participants' fat cells became about 30% less responsive to insulin — a temporarily prediabetic pattern in lean, healthy twenty-somethings. The 'takes months' answer is the key misconception: sleep is one of the fastest-acting metabolic levers, moving in days. And while being awake burns slightly more energy, sleep loss reliably drives ~300 extra calories of intake, more than erasing it.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">SLEEP RESTRICTION SCIENCE</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">Healthy adults, 4.5h/night, four nights</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">Same food, same activity — sleep was the variable</text>
                    <rect x="200" y="360" width="700" height="220" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="420" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">FOUR SHORT NIGHTS</text>
                    <text x="550" y="470" text-anchor="middle" fill="#fff" font-size="19">What did the glucose lab work show?</text>
                    <text x="550" y="530" text-anchor="middle" fill="#888" font-size="16">Hint: it did not take months</text>
                    <rect x="200" y="650" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="700" text-anchor="middle" fill="#ffd700" font-size="20">Pick the finding the study actually reported</text>
                </svg>`,
                caption: "Test your grasp of how fast sleep loss hits metabolism"
            }
        },
        {
            type: "example",
            title: "Sleep Apnea: The Saboteur Nobody Tests For",
            content: "Here's a scenario worth taking seriously: you sleep a full 8 hours but wake up exhausted. You snore. Afternoon fatigue is constant. Your glucose numbers keep creeping up despite decent habits.\n\nThat pattern deserves a name: **obstructive sleep apnea (OSA)** — your airway repeatedly collapses during sleep, sometimes dozens of times per hour. Each collapse briefly drops your oxygen and jolts your brain toward wakefulness (usually without you remembering).\n\nWhy it's a metabolic saboteur:\n\n• **Intermittent oxygen drops** trigger stress-hormone surges all night — every night\n• It **shatters deep sleep**, the stage where glucose regulation and repair happen\n• OSA is independently linked to **insulin resistance, hypertension, and type 2 diabetes** — even after accounting for weight\n• An estimated **80% of moderate-to-severe cases are undiagnosed**. People assume snoring is a quirk, not a condition\n\nThe screening question is simple: **loud snoring + witnessed pauses in breathing + daytime sleepiness = get tested.** Home sleep tests are now cheap and common; ask your clinician.\n\nTreatment (CPAP, oral devices, weight loss) can transform energy, blood pressure, and glucose control. If this card sounds like you or your partner, it may be the highest-leverage health move in this entire book.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE UNDIAGNOSED SABOTEUR</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Obstructive sleep apnea and your metabolism</text>
                    <rect x="150" y="160" width="800" height="130" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="210" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">~80% OF MODERATE-SEVERE CASES</text>
                    <text x="550" y="250" text-anchor="middle" fill="#fff" font-size="18">are never diagnosed</text>
                    <rect x="80" y="350" width="300" height="200" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="230" y="400" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="19">ALL-NIGHT STRESS</text>
                    <text x="230" y="440" text-anchor="middle" fill="#fff" font-size="16">Oxygen dips trigger</text>
                    <text x="230" y="470" text-anchor="middle" fill="#fff" font-size="16">hormone surges</text>
                    <rect x="400" y="350" width="300" height="200" rx="20" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="400" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="19">BROKEN DEEP SLEEP</text>
                    <text x="550" y="440" text-anchor="middle" fill="#fff" font-size="16">The repair stage gets</text>
                    <text x="550" y="470" text-anchor="middle" fill="#fff" font-size="16">shattered nightly</text>
                    <rect x="720" y="350" width="300" height="200" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="870" y="400" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="19">METABOLIC HIT</text>
                    <text x="870" y="440" text-anchor="middle" fill="#fff" font-size="16">Linked to insulin</text>
                    <text x="870" y="470" text-anchor="middle" fill="#fff" font-size="16">resistance and T2D</text>
                    <rect x="150" y="610" width="800" height="170" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="550" y="660" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="21">THE 3-PART SCREENING QUESTION</text>
                    <text x="550" y="700" text-anchor="middle" fill="#fff" font-size="18">Loud snoring + breathing pauses + daytime fatigue</text>
                    <text x="550" y="738" text-anchor="middle" fill="#888" font-size="16">Any two of three? Ask about a home sleep test</text>
                    <rect x="150" y="840" width="800" height="110" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="885" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">TREATABLE</text>
                    <text x="550" y="920" text-anchor="middle" fill="#fff" font-size="16">CPAP and other options improve energy, BP, glucose</text>
                </svg>`,
                caption: "Snoring plus daytime fatigue is a lab test waiting to happen"
            }
        },
        {
            type: "concept",
            title: "Cortisol: The Stress-Glucose Pipeline",
            content: "Your stress system was built for short emergencies: a predator appears, **cortisol and adrenaline** surge, your liver dumps glucose into your blood (via **gluconeogenesis** — literally 'making new glucose') so your muscles can sprint. Brilliant design — for 90 seconds of danger.\n\nModern stress isn't 90 seconds. It's a slow drip: inbox, deadlines, money worries, news feeds. And chronically elevated cortisol runs the emergency program **continuously**:\n\n• **Constant glucose release** — your liver keeps flooding blood sugar for a sprint that never happens\n• **Insulin resistance** — cortisol directly blunts insulin's action in muscle and fat\n• **Visceral fat storage** — deep belly fat cells have extra cortisol receptors; chronic stress preferentially feeds the most dangerous fat depot you have\n• **Muscle breakdown** — cortisol is catabolic, cannibalizing the very tissue that clears your glucose\n\nThen the behavioral loop kicks in: cortisol amplifies appetite for **calorie-dense comfort food** (this is measurable, not metaphorical — 'stress eating' is endocrinology). The comfort food spikes glucose, which crashes, which feels like stress, which triggers more eating.\n\nChronic stress is, hormonally speaking, a **slow-motion sugar infusion combined with a fat-storage signal**. That's why managing it is a metabolic intervention, not a luxury.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE CORTISOL PIPELINE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Chronic stress, translated into metabolism</text>
                    <rect x="350" y="150" width="400" height="90" rx="20" fill="rgba(239,68,68,0.15)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="190" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">CHRONIC STRESS</text>
                    <text x="550" y="220" text-anchor="middle" fill="#888" font-size="15">deadlines, worry, the slow drip</text>
                    <path d="M550 240 L550 290" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,300 540,285 560,285" fill="#14b8a6"/>
                    <rect x="350" y="300" width="400" height="80" rx="20" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="348" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">CORTISOL STAYS ELEVATED</text>
                    <path d="M420 380 L260 440" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="252,443 268,431 273,449" fill="#14b8a6"/>
                    <path d="M550 380 L550 440" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,450 540,435 560,435" fill="#14b8a6"/>
                    <path d="M680 380 L840 440" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="848,443 827,449 832,431" fill="#14b8a6"/>
                    <rect x="60" y="450" width="320" height="180" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="220" y="500" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="18">GLUCOSE DUMP</text>
                    <text x="220" y="540" text-anchor="middle" fill="#fff" font-size="15">Liver makes new sugar</text>
                    <text x="220" y="570" text-anchor="middle" fill="#888" font-size="14">(gluconeogenesis)</text>
                    <rect x="400" y="450" width="300" height="180" rx="20" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="500" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="18">VISCERAL FAT</text>
                    <text x="550" y="540" text-anchor="middle" fill="#fff" font-size="15">Belly depot preferentially</text>
                    <text x="550" y="570" text-anchor="middle" fill="#fff" font-size="15">stores under cortisol</text>
                    <rect x="720" y="450" width="320" height="180" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="880" y="500" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="18">INSULIN BLUNTED</text>
                    <text x="880" y="540" text-anchor="middle" fill="#fff" font-size="15">Muscle and fat stop</text>
                    <text x="880" y="570" text-anchor="middle" fill="#fff" font-size="15">listening to insulin</text>
                    <rect x="150" y="690" width="800" height="140" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="550" y="740" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="20">PLUS THE BEHAVIOR LOOP</text>
                    <text x="550" y="780" text-anchor="middle" fill="#fff" font-size="17">Cortisol drives comfort-food cravings — measurably</text>
                    <rect x="200" y="890" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="940" text-anchor="middle" fill="#ffd700" font-size="19">Stress management is metabolic management</text>
                </svg>`,
                caption: "Chronic cortisol is a slow sugar infusion plus a fat-storage signal"
            }
        },
        {
            type: "example",
            title: "One Bad Week: The Loop in Real Life",
            content: "Meet a composite of half the working world — call her Dana, 46, project manager.\n\n**Monday**: A product launch slips. Dana works until midnight, sleeps 5.5 hours.\n\n**Tuesday**: Running on cortisol and 6 AM coffee. By 3 PM her rewired hunger hormones find the vending machine — pastry, chips, another coffee. Her glucose spikes hit a body that's ~20% less insulin sensitive than last week.\n\n**Wednesday**: Two glasses of wine to 'take the edge off.' Alcohol knocks her out fast, then **fragments the second half of her night**, cutting deep sleep. She wakes at 3 AM, mind racing.\n\n**Thursday–Friday**: More stress, less sleep, more cravings, more caffeine — later caffeine, worse sleep. The loop is now feeding itself.\n\nOne week like this is harmless. Dana's problem is that it's been **most weeks for three years**. Her labs tell the story: fasting glucose 104, triglycerides creeping up, waist growing while her weight barely moved — the visceral-fat signature of chronic cortisol.\n\nHere's the leverage point: Dana doesn't need a new diet. **Her food choices are downstream of her sleep and stress.** Fix the nights, and the 3 PM vending machine loses most of its power — because the biology driving her there stands down.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">DANA'S WEEK</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">How the loop compounds, day by day</text>
                    <rect x="150" y="160" width="800" height="110" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="200" y="205" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="19">MON</text>
                    <text x="310" y="205" text-anchor="start" fill="#fff" font-size="17">Launch slips — midnight work, 5.5h sleep</text>
                    <text x="310" y="240" text-anchor="start" fill="#888" font-size="15">Cortisol high, insulin sensitivity starts dropping</text>
                    <rect x="150" y="300" width="800" height="110" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="345" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="19">TUE</text>
                    <text x="310" y="345" text-anchor="start" fill="#fff" font-size="17">3 PM vending machine — ghrelin is driving now</text>
                    <text x="310" y="380" text-anchor="start" fill="#888" font-size="15">Spikes hit a less insulin-sensitive body</text>
                    <rect x="150" y="440" width="800" height="110" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="485" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="19">WED</text>
                    <text x="310" y="485" text-anchor="start" fill="#fff" font-size="17">Wine to unwind — sleep fragments, 3 AM wake-up</text>
                    <text x="310" y="520" text-anchor="start" fill="#888" font-size="15">Alcohol trades sedation for deep sleep</text>
                    <rect x="150" y="580" width="800" height="110" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="625" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="19">THU+</text>
                    <text x="310" y="625" text-anchor="start" fill="#fff" font-size="17">Later caffeine, more cravings — loop self-feeds</text>
                    <text x="310" y="660" text-anchor="start" fill="#888" font-size="15">Repeat for three years...</text>
                    <rect x="150" y="730" width="800" height="140" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="780" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">THE LAB RESULT</text>
                    <text x="550" y="818" text-anchor="middle" fill="#fff" font-size="17">Fasting glucose 104, rising waist, stable weight</text>
                    <rect x="200" y="930" width="700" height="80" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="980" text-anchor="middle" fill="#10b981" font-size="19">Fix the nights and the cravings stand down</text>
                </svg>`,
                caption: "Food choices are often downstream of sleep and stress"
            }
        },
        {
            type: "concept",
            title: "Why Sleep Gets Harder With Age (and What Helps)",
            content: "If you're over 45 and sleeping worse than you did at 25, you're not imagining it — and it matters metabolically.\n\nThe biggest change is **deep sleep (slow-wave sleep)**. This is the stage where growth hormone is released, tissue repair happens, and glucose regulation gets tuned. Deep sleep **declines steeply from midlife on** — some estimates suggest adults in their 60s and 70s get a fraction of the slow-wave sleep they got as teenagers. Sleep also becomes more **fragmented** (more brief awakenings), and the circadian rhythm **flattens and shifts earlier**.\n\nYou can't fully reverse this — but you can meaningfully fight it:\n\n• **Exercise is the strongest natural deep-sleep booster** — especially regular aerobic work and strength training (not within ~2 hours of bed)\n• **Morning bright light** re-anchors your flattening rhythm — 10+ minutes outdoors early in the day\n• **A cool bedroom (~65–68°F / 18–20°C)** supports the core temperature drop that triggers deep sleep\n• **Guard the first half of the night** — that's when most deep sleep happens; alcohol and late nights hit it hardest\n• **Consistency beats duration heroics** — a fixed wake time trains an aging clock better than occasional 10-hour recovery sleeps\n\nOlder adults may need slightly less sleep than young adults — but the 7-hour floor still stands for most people. Aging changes sleep; it doesn't excuse abandoning it.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">SLEEP ACROSS THE DECADES</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Deep sleep declines — but it can be defended</text>
                    <line x1="180" y1="520" x2="950" y2="520" stroke="#888" stroke-width="2"/>
                    <line x1="180" y1="520" x2="180" y2="180" stroke="#888" stroke-width="2"/>
                    <text x="165" y="200" text-anchor="end" fill="#888" font-size="14">deep</text>
                    <text x="165" y="222" text-anchor="end" fill="#888" font-size="14">sleep</text>
                    <rect x="240" y="220" width="130" height="300" rx="12" fill="rgba(99,102,241,0.4)" stroke="#6366f1" stroke-width="2"/>
                    <text x="305" y="555" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="17">Age 20</text>
                    <rect x="440" y="320" width="130" height="200" rx="12" fill="rgba(139,92,246,0.4)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="505" y="555" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="17">Age 45</text>
                    <rect x="640" y="400" width="130" height="120" rx="12" fill="rgba(245,158,11,0.4)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="705" y="555" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="17">Age 65</text>
                    <rect x="800" y="330" width="150" height="70" rx="15" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="875" y="360" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="15">defendable</text>
                    <text x="875" y="385" text-anchor="middle" fill="#fff" font-size="14">with training</text>
                    <line x1="800" y1="400" x2="740" y2="430" stroke="#10b981" stroke-width="2" stroke-dasharray="6" opacity="0.7"/>
                    <rect x="150" y="620" width="800" height="200" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="670" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">THE DEFENSE PLAYBOOK</text>
                    <text x="550" y="710" text-anchor="middle" fill="#fff" font-size="17">Exercise (best deep-sleep booster) + morning light</text>
                    <text x="550" y="743" text-anchor="middle" fill="#fff" font-size="17">Cool room 65-68F + protect the first half of night</text>
                    <text x="550" y="776" text-anchor="middle" fill="#888" font-size="16">Fixed wake time beats weekend catch-up heroics</text>
                    <rect x="200" y="880" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="930" text-anchor="middle" fill="#ffd700" font-size="19">Aging changes sleep — it doesn't excuse it</text>
                </svg>`,
                caption: "Deep sleep falls with age, but exercise and light habits fight back"
            }
        },
        {
            type: "visual",
            title: "The Compounding Loop — and Where to Cut It",
            content: "Poor sleep and stress don't add up — they **multiply**. Short sleep raises cortisol and cravings; cravings drive glucose spikes and late eating; late eating and alcohol fragment sleep; fragmented sleep raises tomorrow's stress reactivity. Around and around.\n\nThe strategic insight: you don't have to fix everything. **Cut the loop at its easiest point and the whole spiral weakens.** For most people that's one of two cuts: a fixed wake time with morning light, or an alcohol/food curfew in the evening.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE DOWNWARD SPIRAL</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Each turn of the loop feeds the next</text>
                    <circle cx="550" cy="240" r="90" fill="rgba(239,68,68,0.15)" stroke="#ef4444" stroke-width="3"/>
                    <text x="550" y="230" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="18">POOR SLEEP</text>
                    <text x="550" y="260" text-anchor="middle" fill="#fff" font-size="14">cortisol + ghrelin up</text>
                    <circle cx="870" cy="480" r="90" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="3"/>
                    <text x="870" y="470" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="18">CRAVINGS</text>
                    <text x="870" y="500" text-anchor="middle" fill="#fff" font-size="14">comfort food wins</text>
                    <circle cx="550" cy="720" r="90" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="3"/>
                    <text x="550" y="705" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="18">SPIKES + LATE</text>
                    <text x="550" y="730" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="18">EATING, ALCOHOL</text>
                    <text x="550" y="760" text-anchor="middle" fill="#fff" font-size="14">glucose rollercoaster</text>
                    <circle cx="230" cy="480" r="90" fill="rgba(236,72,153,0.15)" stroke="#ec4899" stroke-width="3"/>
                    <text x="230" y="470" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="18">FRAGMENTED</text>
                    <text x="230" y="495" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="18">NIGHT</text>
                    <text x="230" y="525" text-anchor="middle" fill="#fff" font-size="14">stress reactivity up</text>
                    <path d="M630 290 Q 800 330 850 390" fill="none" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="855,398 838,390 852,378" fill="#14b8a6"/>
                    <path d="M820 550 Q 750 680 645 705" fill="none" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="637,707 650,694 655,713" fill="#14b8a6"/>
                    <path d="M460 700 Q 300 640 250 575" fill="none" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="245,568 262,573 250,587" fill="#14b8a6"/>
                    <path d="M260 395 Q 340 300 460 260" fill="none" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="470,257 456,270 452,251" fill="#14b8a6"/>
                    <line x1="380" y1="260" x2="330" y2="310" stroke="#10b981" stroke-width="6"/>
                    <rect x="60" y="180" width="270" height="90" rx="15" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="195" y="215" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="15">CUT 1: fixed wake time</text>
                    <text x="195" y="243" text-anchor="middle" fill="#fff" font-size="14">+ morning light</text>
                    <line x1="700" y1="640" x2="750" y2="590" stroke="#10b981" stroke-width="6"/>
                    <rect x="740" y="620" width="290" height="90" rx="15" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="885" y="655" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="15">CUT 2: evening curfew</text>
                    <text x="885" y="683" text-anchor="middle" fill="#fff" font-size="14">food + alcohol cutoff</text>
                    <rect x="150" y="880" width="800" height="120" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="930" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="20">ONE CLEAN CUT WEAKENS THE WHOLE LOOP</text>
                    <text x="550" y="968" text-anchor="middle" fill="#fff" font-size="17">You don't have to fix everything at once</text>
                </svg>`,
                caption: "Break the spiral at its easiest point — morning anchor or evening curfew"
            }
        },
        {
            type: "application",
            title: "Tonight's Protocol",
            content: "Every item below has trial evidence behind it. Pick the two easiest first:\n\n1. **Fix your wake time** — same time every day, weekends included (within an hour). This is the single strongest anchor for your circadian clock\n\n2. **Get 10+ minutes of morning light** — outside, no sunglasses, within an hour of waking. Daylight is 10–100x brighter than indoor light and sets your rhythm\n\n3. **Cool, dark, quiet room** — target **65–68°F (18–20°C)**, blackout or eye mask. Your core temperature must drop to enter deep sleep\n\n4. **Respect alcohol's sleep cost** — it sedates you, then fragments the second half of your night and slashes deep sleep. Keep it earlier, keep it modest, notice the difference\n\n5. **Install one daily stress valve** — pick one: 5 minutes of slow breathing (try 4 counts in, 6 out), a 15-minute walk outside, or a real conversation with someone you like. Small, daily, non-negotiable\n\n6. **Use exercise as your stress buffer** — it lowers baseline cortisol reactivity AND deepens slow-wave sleep. It's the only item on this list that pulls both levers at once\n\nNot medical advice — if insomnia persists or apnea signs are present, bring it to a clinician. Chronic insomnia has a first-line treatment (**CBT-I**) that beats sleeping pills in trials.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">TONIGHT'S PROTOCOL</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Six evidence-backed levers — pick two to start</text>
                    <rect x="150" y="150" width="800" height="110" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="197" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="21">1.</text>
                    <text x="245" y="197" text-anchor="start" fill="#fff" font-size="18">Fixed wake time, weekends included</text>
                    <text x="245" y="232" text-anchor="start" fill="#888" font-size="15">The strongest circadian anchor you have</text>
                    <rect x="150" y="280" width="800" height="110" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="327" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="21">2.</text>
                    <text x="245" y="327" text-anchor="start" fill="#fff" font-size="18">10+ min of morning daylight</text>
                    <text x="245" y="362" text-anchor="start" fill="#888" font-size="15">Within an hour of waking, outdoors</text>
                    <rect x="150" y="410" width="800" height="110" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="200" y="457" text-anchor="start" fill="#3b82f6" font-weight="bold" font-size="21">3.</text>
                    <text x="245" y="457" text-anchor="start" fill="#fff" font-size="18">Cool, dark, quiet: 65-68F</text>
                    <text x="245" y="492" text-anchor="start" fill="#888" font-size="15">Core temp must drop for deep sleep</text>
                    <rect x="150" y="540" width="800" height="110" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="200" y="587" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="21">4.</text>
                    <text x="245" y="587" text-anchor="start" fill="#fff" font-size="18">Count alcohol's sleep cost</text>
                    <text x="245" y="622" text-anchor="start" fill="#888" font-size="15">Sedation now, fragmented night later</text>
                    <rect x="150" y="670" width="800" height="110" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="717" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="21">5.</text>
                    <text x="245" y="717" text-anchor="start" fill="#fff" font-size="18">One daily stress valve</text>
                    <text x="245" y="752" text-anchor="start" fill="#888" font-size="15">Slow breathing, a walk, or real connection</text>
                    <rect x="150" y="800" width="800" height="110" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="847" text-anchor="start" fill="#10b981" font-weight="bold" font-size="21">6.</text>
                    <text x="245" y="847" text-anchor="start" fill="#fff" font-size="18">Exercise: the double lever</text>
                    <text x="245" y="882" text-anchor="start" fill="#888" font-size="15">Buffers stress AND deepens slow-wave sleep</text>
                    <rect x="200" y="950" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1000" text-anchor="middle" fill="#ffd700" font-size="18">Persistent insomnia? Ask a clinician about CBT-I</text>
                </svg>`,
                caption: "Six levers, ranked for tonight — start with the two easiest"
            }
        },
        {
            type: "quiz",
            question: "Chronic stress raises blood glucose even without any change in diet. What's the primary mechanism?",
            options: [
                { text: "Stress makes the gut absorb more glucose from the same amount of food", correct: false },
                { text: "Cortisol signals the liver to produce new glucose while blunting insulin's action", correct: true },
                { text: "Stress only raises glucose indirectly, through comfort-food overeating", correct: false },
                { text: "Adrenaline permanently destroys insulin-producing cells in the pancreas", correct: false }
            ],
            explanation: "Cortisol runs an emergency fuel program: it drives gluconeogenesis — the liver manufacturing new glucose — while simultaneously blunting insulin's action in muscle and fat, and steering storage toward visceral fat. That's a direct, diet-independent glucose rise. The 'only through overeating' answer is the tempting half-truth: stress eating is real and adds to the problem, but the hormonal pipeline raises glucose all by itself, which is why stress management is a genuine metabolic intervention.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">STRESS AND GLUCOSE</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">Same diet, higher blood sugar under stress</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">Trace the hormonal pipeline</text>
                    <rect x="100" y="380" width="260" height="140" rx="20" fill="rgba(239,68,68,0.12)" stroke="#ef4444" stroke-width="2"/>
                    <text x="230" y="440" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="19">STRESS</text>
                    <text x="230" y="475" text-anchor="middle" fill="#fff" font-size="15">chronic, unrelenting</text>
                    <path d="M360 450 L430 450" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="440,450 425,441 425,459" fill="#14b8a6"/>
                    <rect x="440" y="380" width="220" height="140" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="440" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="19">CORTISOL</text>
                    <text x="550" y="475" text-anchor="middle" fill="#fff" font-size="15">stays elevated</text>
                    <path d="M660 450 L730 450" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="740,450 725,441 725,459" fill="#14b8a6"/>
                    <rect x="740" y="380" width="260" height="140" rx="20" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="870" y="440" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="19">GLUCOSE UP?</text>
                    <text x="870" y="475" text-anchor="middle" fill="#fff" font-size="15">by what mechanism?</text>
                    <rect x="200" y="590" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="640" text-anchor="middle" fill="#ffd700" font-size="20">Pick the primary pathway</text>
                </svg>`,
                caption: "Test your understanding of the cortisol-glucose pipeline"
            }
        },
        {
            type: "quote",
            content: "The shorter your sleep, the shorter your life span.",
            author: "Matthew Walker, Why We Sleep",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">WISDOM</text>
                    <path d="M370 260 A 180 180 0 1 1 369 261" fill="none" stroke="#8b5cf6" stroke-width="3" opacity="0.6"/>
                    <circle cx="550" cy="330" r="120" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="3"/>
                    <path d="M600 250 A 95 95 0 1 0 630 400 A 120 120 0 0 1 600 250" fill="rgba(255,215,0,0.25)" stroke="#ffd700" stroke-width="2"/>
                    <circle cx="470" cy="300" r="6" fill="#ffd700"/>
                    <circle cx="500" cy="370" r="4" fill="#ffd700"/>
                    <circle cx="450" cy="350" r="3" fill="#ffd700"/>
                    <rect x="100" y="540" width="900" height="220" rx="20" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="625" text-anchor="middle" fill="#fff" font-style="italic" font-size="26">"The shorter your sleep,</text>
                    <text x="550" y="675" text-anchor="middle" fill="#fff" font-style="italic" font-size="26">the shorter your life span."</text>
                    <text x="920" y="725" text-anchor="end" fill="#8b5cf6" font-size="18">— Matthew Walker, Why We Sleep</text>
                    <rect x="150" y="830" width="800" height="120" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="880" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="20">SLEEP IS NOT LOST PRODUCTIVITY</text>
                    <text x="550" y="918" text-anchor="middle" fill="#fff" font-size="17">It is when your metabolism does its maintenance</text>
                </svg>`,
                caption: "A moment of reflection from sleep science's loudest advocate"
            }
        },
        {
            type: "concept",
            title: "The Two Levers That Multiply Everything Else",
            content: "Zoom out and place this lesson in the book's bigger picture.\n\nYou've learned that muscle is your glucose sink, that fitness predicts longevity, that food quality and timing shape your glucose curves. Sleep and stress are different: they're not another item *on* the list — they're the **multiplier applied to the whole list**:\n\n• **Sleep-deprived, you eat ~300 extra calories** and crave exactly the foods that spike you — your nutrition plan fights uphill\n• **At ~25% lower insulin sensitivity**, the same healthy meal produces worse glucose numbers — your diet gets less credit than it deserves\n• **Under chronic cortisol**, your body preferentially stores visceral fat and breaks down muscle — partially undoing your training\n• **Exhausted, you skip workouts** — the lever that would have fixed the other levers\n\nRun it in reverse and the multiplier flips positive: one week of honest 7.5-hour nights restores insulin sensitivity, calms cravings, powers better workouts, and lowers stress reactivity. Everything you're already doing starts working better — **for free**.\n\nThat's why the cheapest, least glamorous advice in this book — go to bed — may deliver more metabolic return than any supplement you will ever buy. The levers are in your hands tonight.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE MULTIPLIER EFFECT</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Sleep and stress scale everything else you do</text>
                    <circle cx="550" cy="330" r="120" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="3"/>
                    <text x="550" y="315" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="20">SLEEP +</text>
                    <text x="550" y="345" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="20">STRESS</text>
                    <text x="550" y="378" text-anchor="middle" fill="#888" font-size="15">the multiplier</text>
                    <rect x="80" y="180" width="240" height="100" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="222" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="18">NUTRITION</text>
                    <text x="200" y="255" text-anchor="middle" fill="#fff" font-size="14">cravings obey hormones</text>
                    <rect x="780" y="180" width="240" height="100" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="900" y="222" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="18">TRAINING</text>
                    <text x="900" y="255" text-anchor="middle" fill="#fff" font-size="14">recovery happens asleep</text>
                    <rect x="80" y="440" width="240" height="100" rx="20" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="482" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="18">GLUCOSE</text>
                    <text x="200" y="515" text-anchor="middle" fill="#fff" font-size="14">sensitivity swings ~25%</text>
                    <rect x="780" y="440" width="240" height="100" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="900" y="482" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="18">MUSCLE</text>
                    <text x="900" y="515" text-anchor="middle" fill="#fff" font-size="14">cortisol is catabolic</text>
                    <line x1="330" y1="245" x2="450" y2="290" stroke="#ffd700" stroke-width="2" stroke-dasharray="6" opacity="0.6"/>
                    <line x1="770" y1="245" x2="650" y2="290" stroke="#ffd700" stroke-width="2" stroke-dasharray="6" opacity="0.6"/>
                    <line x1="330" y1="470" x2="450" y2="380" stroke="#ffd700" stroke-width="2" stroke-dasharray="6" opacity="0.6"/>
                    <line x1="770" y1="470" x2="650" y2="380" stroke="#ffd700" stroke-width="2" stroke-dasharray="6" opacity="0.6"/>
                    <rect x="150" y="620" width="800" height="160" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="670" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">RUN THE MULTIPLIER IN REVERSE</text>
                    <text x="550" y="710" text-anchor="middle" fill="#fff" font-size="17">One week of full nights: sensitivity restored,</text>
                    <text x="550" y="743" text-anchor="middle" fill="#fff" font-size="17">cravings calm, workouts land, stress recedes</text>
                    <rect x="200" y="840" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="890" text-anchor="middle" fill="#ffd700" font-size="19">Cheapest advice, biggest return: go to bed</text>
                </svg>`,
                caption: "Sleep and stress multiply — or divide — every other metabolic effort"
            }
        }
    ]
},
{
    id: 11,
    title: "The Aging Metabolism: What Really Changes (and the New Science)",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "The Day Science Killed the 'Slow Metabolism' Excuse",
            content: "You've heard it a thousand times — maybe you've said it: 'Once I hit 40, my metabolism just died.' It feels true. The scale creeps up, the jeans shrink, and the obvious suspect is a furnace burning cooler every year.\n\nIn 2021, a team led by **Herman Pontzer** published a study in **Science** that blew that story apart. They measured energy burn in **~6,400 people** from 8 days old to 95 years old, using **doubly-labeled water** — the gold-standard method that tracks every calorie you burn in real life, not just on a treadmill.\n\nThe result? Adjusted for body size, your metabolism is **rock-stable from about age 20 to age 60**. No dip at 30. No crash at 40. No cliff at menopause — in the adjusted data.\n\nSo what IS changing in midlife? That's the real story of this lesson — and it's one you can actually do something about.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE MIDLIFE MYTH</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">What everyone believes vs. what science measured</text>
                    <rect x="60" y="170" width="460" height="330" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="230" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="24">THE STORY</text>
                    <text x="290" y="285" text-anchor="middle" fill="#fff" font-size="19">'My metabolism died at 40'</text>
                    <text x="290" y="325" text-anchor="middle" fill="#888" font-size="17">The furnace burns cooler</text>
                    <text x="290" y="360" text-anchor="middle" fill="#888" font-size="17">every year after 30</text>
                    <text x="290" y="410" text-anchor="middle" fill="#ef4444" font-size="17">Feels true. Isn't.</text>
                    <rect x="580" y="170" width="460" height="330" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="230" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="24">THE MEASUREMENT</text>
                    <text x="810" y="285" text-anchor="middle" fill="#fff" font-size="19">Adjusted metabolism is</text>
                    <text x="810" y="320" text-anchor="middle" fill="#fff" font-size="19">STABLE from ~20 to ~60</text>
                    <text x="810" y="370" text-anchor="middle" fill="#888" font-size="17">Pontzer et al. 2021, Science</text>
                    <text x="810" y="410" text-anchor="middle" fill="#888" font-size="17">No dip at 30, 40, or 50</text>
                    <rect x="100" y="560" width="900" height="120" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="615" text-anchor="middle" fill="#ffd700" font-size="21">~6,400 people, ages 8 days to 95 years</text>
                    <text x="550" y="655" text-anchor="middle" fill="#fff" font-size="18">Measured with doubly-labeled water, the gold standard</text>
                    <rect x="100" y="720" width="900" height="90" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="775" text-anchor="middle" fill="#fff" font-size="19">So if the engine didn't slow... what changed?</text>
                </svg>`,
                caption: "The 2021 Science study that rewrote the metabolism textbook"
            }
        },
        {
            type: "concept",
            title: "Pontzer 2021: The Four Phases of Your Metabolic Life",
            content: "**Doubly-labeled water** works by having you drink water tagged with harmless isotopes, then tracking how fast they leave your body — a direct readout of total daily energy burn in free-living humans. Pontzer's team pooled measurements from **~6,400 people across 29 countries** and adjusted for body size and composition. Four distinct phases emerged:\n\n• **Phase 1 — Infancy**: Babies are metabolic infernos, burning about **50% above the adult rate** (size-adjusted) by their first birthday\n\n• **Phase 2 — Childhood**: Metabolism cools by roughly **3% per year** until about age 20\n\n• **Phase 3 — The Long Plateau**: From **~20 to ~60**, adjusted metabolism holds steady. No midlife dip. No detectable drop in the adjusted data even across menopause\n\n• **Phase 4 — Late Decline**: After **~60**, it falls about **0.7% per year** — so a 90-year-old burns roughly **26% less** than a 60-year-old of similar size\n\nThe 'wow' here: your cells' energy economy doesn't betray you at 40. The decline that IS real starts later — and even that slope, you can flatten.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">FOUR METABOLIC PHASES</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Size-adjusted energy burn across a lifetime</text>
                    <rect x="80" y="170" width="440" height="210" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="300" y="230" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="22">1. INFANCY</text>
                    <text x="300" y="280" text-anchor="middle" fill="#fff" font-size="18">~50% above adult rate</text>
                    <text x="300" y="320" text-anchor="middle" fill="#888" font-size="16">Peaks around age 1</text>
                    <rect x="580" y="170" width="440" height="210" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="800" y="230" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">2. CHILDHOOD</text>
                    <text x="800" y="280" text-anchor="middle" fill="#fff" font-size="18">Cools ~3% per year</text>
                    <text x="800" y="320" text-anchor="middle" fill="#888" font-size="16">Until about age 20</text>
                    <rect x="80" y="420" width="440" height="210" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="300" y="480" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">3. THE PLATEAU</text>
                    <text x="300" y="530" text-anchor="middle" fill="#fff" font-size="18">Stable from ~20 to ~60</text>
                    <text x="300" y="570" text-anchor="middle" fill="#888" font-size="16">No midlife dip. None.</text>
                    <rect x="580" y="420" width="440" height="210" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="800" y="480" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">4. LATE DECLINE</text>
                    <text x="800" y="530" text-anchor="middle" fill="#fff" font-size="18">~0.7% per year after 60</text>
                    <text x="800" y="570" text-anchor="middle" fill="#888" font-size="16">~26% lower by the 90s</text>
                    <rect x="100" y="690" width="900" height="100" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="735" text-anchor="middle" fill="#ffd700" font-size="20">Method: doubly-labeled water</text>
                    <text x="550" y="770" text-anchor="middle" fill="#888" font-size="16">~6,400 people, 29 countries, ages 8 days to 95 years</text>
                </svg>`,
                caption: "Pontzer's four phases: inferno, cooling, plateau, gentle decline"
            }
        },
        {
            type: "visual",
            title: "The Real Metabolic Curve",
            content: "Here's the shape the doubly-labeled water data actually draws: a blazing start, a steep childhood descent, then a **four-decade flat line** through everything we blame on metabolism — your 30s, your 40s, your 50s — before a gentle slope begins around 60.\n\nStare at that plateau for a second. Every 'metabolism-boosting' product marketed to 40-year-olds is selling a fix for a decline that the best data says **isn't happening yet**.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE REAL CURVE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Size-adjusted daily energy burn by age</text>
                    <line x1="120" y1="220" x2="120" y2="850" stroke="#888" stroke-width="2"/>
                    <line x1="120" y1="850" x2="1010" y2="850" stroke="#888" stroke-width="2"/>
                    <path d="M140 260 C 200 300, 250 480, 310 600 L 760 600 C 830 610, 920 650, 980 690" stroke="#6366f1" stroke-width="5" fill="none"/>
                    <line x1="310" y1="600" x2="310" y2="850" stroke="#ffd700" stroke-width="2" stroke-dasharray="6" opacity="0.4"/>
                    <line x1="760" y1="600" x2="760" y2="850" stroke="#ffd700" stroke-width="2" stroke-dasharray="6" opacity="0.4"/>
                    <text x="140" y="890" text-anchor="middle" fill="#888" font-size="18">0</text>
                    <text x="310" y="890" text-anchor="middle" fill="#888" font-size="18">20</text>
                    <text x="760" y="890" text-anchor="middle" fill="#888" font-size="18">60</text>
                    <text x="980" y="890" text-anchor="middle" fill="#888" font-size="18">90</text>
                    <text x="550" y="930" text-anchor="middle" fill="#888" font-size="16">Age in years</text>
                    <text x="200" y="360" text-anchor="start" fill="#ec4899" font-size="17">Childhood cooling, ~3%/yr</text>
                    <rect x="360" y="500" width="360" height="60" rx="15" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="540" y="538" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">THE PLATEAU: 20 to 60</text>
                    <text x="850" y="620" text-anchor="middle" fill="#f59e0b" font-size="17">-0.7%/yr</text>
                    <rect x="120" y="980" width="880" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="560" y="1030" text-anchor="middle" fill="#ffd700" font-size="19">Your 40s sit in the middle of the flat line</text>
                </svg>`,
                caption: "Four decades of stability before any real decline begins"
            }
        },
        {
            type: "example",
            title: "So Why Did the Scale Move? An Autopsy of Midlife Weight Gain",
            content: "Meet **Dana, 44**. She eats 'about the same' as she did at 24, but she's 25 pounds heavier — and she blames her metabolism. The Pontzer data says the real suspects are hiding in plain sight:\n\n• **Muscle quietly left the building.** Untrained adults lose **3–8% of muscle per decade after 30**. Muscle is your body's biggest glucose sink — as it shrinks, calories that once fed muscle get stored instead\n\n• **Movement collapsed.** At 24, Dana waited tables and walked ~12,000 steps a day. At 44, she has a desk job, a car, and ~5,000 steps. That's hundreds of calories of daily burn gone — none of it 'metabolism'\n\n• **The food environment got engineered.** In Kevin Hall's 2019 NIH ward study, people on **ultra-processed diets** ate about **500 extra calories a day** versus matched unprocessed meals — without trying to\n\nAdd shorter sleep and higher stress, and you've explained Dana's 25 pounds without her metabolic rate dropping one single calorie. The engine didn't slow. The inputs changed — and inputs are fixable.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE REAL CULPRITS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Where midlife weight gain actually comes from</text>
                    <rect x="100" y="170" width="900" height="150" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">1. MUSCLE LOSS</text>
                    <text x="550" y="265" text-anchor="middle" fill="#fff" font-size="18">3-8% per decade after 30 if untrained</text>
                    <text x="550" y="298" text-anchor="middle" fill="#888" font-size="16">Your biggest glucose sink quietly shrinks</text>
                    <rect x="100" y="350" width="900" height="150" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="405" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">2. MOVEMENT DECLINE</text>
                    <text x="550" y="445" text-anchor="middle" fill="#fff" font-size="18">12,000 daily steps at 24 becomes 5,000 at 44</text>
                    <text x="550" y="478" text-anchor="middle" fill="#888" font-size="16">Desk, car, streaming — hundreds of kcal/day vanish</text>
                    <rect x="100" y="530" width="900" height="150" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="585" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">3. FOOD ENVIRONMENT</text>
                    <text x="550" y="625" text-anchor="middle" fill="#fff" font-size="18">Ultra-processed diets: +500 kcal/day (Hall 2019)</text>
                    <text x="550" y="658" text-anchor="middle" fill="#888" font-size="16">Plus shorter sleep and higher stress on top</text>
                    <rect x="100" y="720" width="900" height="100" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="765" text-anchor="middle" fill="#ffd700" font-size="21">The engine didn't slow.</text>
                    <text x="550" y="800" text-anchor="middle" fill="#fff" font-size="18">The inputs changed — and inputs are fixable.</text>
                </svg>`,
                caption: "Dana's 25 pounds, explained without a slowing metabolism"
            }
        },
        {
            type: "quiz",
            question: "According to Pontzer's 2021 doubly-labeled-water study of ~6,400 people, what happens to size-adjusted metabolism between ages 20 and 60?",
            options: [
                { text: "It declines steadily by 1-2% per year starting around age 30", correct: false },
                { text: "It stays essentially stable, then declines ~0.7% per year after 60", correct: true },
                { text: "It drops sharply at menopause for women, then stabilizes", correct: false },
                { text: "It rises until about 40, then falls quickly through midlife", correct: false }
            ],
            explanation: "The plateau is the headline finding: adjusted for body size and composition, metabolism holds steady from roughly 20 to 60, then declines about 0.7% per year. The tempting answer — a steady decline from 30 — is exactly the myth this study overturned. Even menopause showed no drop in the adjusted expenditure data; midlife weight gain traces to muscle loss, reduced movement, and the food environment instead.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="130" width="800" height="200" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="190" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">PONTZER 2021, SCIENCE</text>
                    <text x="550" y="235" text-anchor="middle" fill="#fff" font-size="18">~6,400 people, doubly-labeled water</text>
                    <text x="550" y="270" text-anchor="middle" fill="#888" font-size="16">What did it find for ages 20 to 60?</text>
                    <rect x="150" y="380" width="800" height="180" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <line x1="220" y1="470" x2="880" y2="470" stroke="#10b981" stroke-width="5"/>
                    <text x="550" y="440" text-anchor="middle" fill="#10b981" font-size="17">Hint: picture the shape of the curve in midlife</text>
                    <text x="550" y="520" text-anchor="middle" fill="#888" font-size="16">age 20 ............................................ age 60</text>
                </svg>`,
                caption: "Test your understanding of the plateau"
            }
        },
        {
            type: "concept",
            title: "What Aging Actually Changes",
            content: "The plateau doesn't mean nothing changes. Four real shifts happen with age — none of them is 'a slower furnace,' and all of them respond to action:\n\n• **Sarcopenia** — muscle loss of **3–8% per decade after 30**, accelerating after 60. Since skeletal muscle handles ~80% of insulin-stimulated glucose disposal, losing it erodes blood-sugar control\n\n• **Anabolic resistance** — aging muscle becomes 'harder of hearing' to protein. Older adults need **~25–30g of protein (2.5–3g leucine) per meal** and **1.2–1.6 g/kg/day** overall to trigger the same muscle-building signal a 25-year-old gets from less\n\n• **Mitochondrial decline** — fewer new mitochondria are built, mtDNA accumulates damage, and respiratory capacity weakens. The 2023 update of the **hallmarks of aging** lists mitochondrial dysfunction and deregulated nutrient sensing among the 12 core drivers\n\n• **Hormonal shifts** — estrogen falls fast at menopause; testosterone drifts down slowly in men\n\nHere's the empowering part: strength training, protein, and Zone 2 cardio directly counter the first three — and blunt the damage from the fourth.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">WHAT REALLY CHANGES</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Four true shifts of the aging metabolism</text>
                    <rect x="80" y="170" width="440" height="220" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="300" y="230" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">SARCOPENIA</text>
                    <text x="300" y="280" text-anchor="middle" fill="#fff" font-size="17">3-8% muscle lost per decade</text>
                    <text x="300" y="315" text-anchor="middle" fill="#888" font-size="15">Faster after 60; shrinks glucose sink</text>
                    <rect x="580" y="170" width="440" height="220" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="800" y="230" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">ANABOLIC RESISTANCE</text>
                    <text x="800" y="280" text-anchor="middle" fill="#fff" font-size="17">Muscle needs louder signals:</text>
                    <text x="800" y="315" text-anchor="middle" fill="#888" font-size="15">25-30g protein per meal, 1.2-1.6 g/kg/day</text>
                    <rect x="80" y="430" width="440" height="220" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="300" y="490" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="21">MITOCHONDRIA</text>
                    <text x="300" y="540" text-anchor="middle" fill="#fff" font-size="17">Fewer built, more damage</text>
                    <text x="300" y="575" text-anchor="middle" fill="#888" font-size="15">A core hallmark of aging (2023)</text>
                    <rect x="580" y="430" width="440" height="220" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="800" y="490" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="21">HORMONES</text>
                    <text x="800" y="540" text-anchor="middle" fill="#fff" font-size="17">Estrogen: fast fall at menopause</text>
                    <text x="800" y="575" text-anchor="middle" fill="#888" font-size="15">Testosterone: slow drift in men</text>
                    <rect x="100" y="710" width="900" height="90" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="765" text-anchor="middle" fill="#10b981" font-size="19">Every one of these responds to training and protein</text>
                </svg>`,
                caption: "The four real changes — all of them addressable"
            }
        },
        {
            type: "concept",
            title: "Menopause: The Metabolic Shift Nobody Prepares You For",
            content: "For women, midlife brings one change that is absolutely real and absolutely metabolic: **the loss of estrogen**.\n\nEstrogen isn't just a reproductive hormone — it helps direct where fat is stored and supports insulin sensitivity. When it falls across the menopause transition:\n\n• **Fat storage shifts inward** — from hips and thighs (subcutaneous) to the abdomen (**visceral fat**), the metabolically dangerous kind that wraps your organs\n\n• **Metabolic syndrome risk roughly doubles** across the transition\n\n• Within about five years of menopause, women burn roughly **150–200 fewer calories a day** — driven largely by accelerated muscle loss and reduced activity layered on top of the hormonal shift\n\n• The waistline can grow **even when the scale barely moves**, because composition is changing under the surface\n\nThis is why so many women say 'nothing changed but my body did.' They're right. The rules changed. The next card covers what the trial evidence says actually works — because plenty does.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE ESTROGEN SHIFT</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">How menopause rewrites fat storage rules</text>
                    <rect x="60" y="170" width="460" height="330" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="290" y="230" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="22">WITH ESTROGEN</text>
                    <text x="290" y="285" text-anchor="middle" fill="#fff" font-size="18">Fat favors hips and thighs</text>
                    <text x="290" y="320" text-anchor="middle" fill="#888" font-size="16">Subcutaneous, lower risk</text>
                    <text x="290" y="370" text-anchor="middle" fill="#fff" font-size="18">Insulin sensitivity supported</text>
                    <text x="290" y="420" text-anchor="middle" fill="#888" font-size="16">Storage rules favor safety</text>
                    <rect x="580" y="170" width="460" height="330" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="810" y="230" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">AFTER THE FALL</text>
                    <text x="810" y="285" text-anchor="middle" fill="#fff" font-size="18">Fat shifts to the abdomen</text>
                    <text x="810" y="320" text-anchor="middle" fill="#888" font-size="16">Visceral — wraps the organs</text>
                    <text x="810" y="370" text-anchor="middle" fill="#fff" font-size="18">MetSyn risk roughly doubles</text>
                    <text x="810" y="420" text-anchor="middle" fill="#888" font-size="16">~150-200 fewer kcal/day within 5 yrs</text>
                    <rect x="100" y="560" width="900" height="110" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="610" text-anchor="middle" fill="#f59e0b" font-size="20">The waist can grow while the scale barely moves</text>
                    <text x="550" y="648" text-anchor="middle" fill="#888" font-size="16">Body composition changes under the surface</text>
                    <rect x="100" y="710" width="900" height="90" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="765" text-anchor="middle" fill="#10b981" font-size="19">The rules changed — and there is a counter-playbook</text>
                </svg>`,
                caption: "Estrogen loss redirects fat to visceral storage"
            }
        },
        {
            type: "example",
            title: "The Menopause Counter-Playbook (What Trials Show)",
            content: "Here's the encouraging evidence for the menopause transition — and for men's slower slide:\n\n• **Lift heavy, go hard sometimes.** In randomized trials with postmenopausal women, **strength training and HIIT outperformed moderate steady-state cardio** at reducing visceral fat. Intensity and resistance send the signals that steady jogging doesn't\n\n• **Raise protein.** Aim for **1.2–1.6 g/kg/day** with **25–30g per meal** to fight the double hit of anabolic resistance plus estrogen loss\n\n• **Have the HRT conversation.** Hormone therapy can help with symptoms and may influence fat distribution for some women. It's individualized medicine — bring it to a clinician who knows your history, ideally within the early window of the transition\n\n• **For men:** testosterone drifts down roughly **1% per year from about age 30**. It's a slope, not a cliff — and progressive strength training is the best-proven first response. Testosterone therapy is a clinician conversation, not a default\n\nThe pattern in every study: the body still responds. It just demands a clearer signal than it used to.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">WHAT ACTUALLY HELPS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Ranked by the trial evidence</text>
                    <rect x="100" y="170" width="900" height="130" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="160" y="225" text-anchor="start" fill="#10b981" font-weight="bold" font-size="22">1.</text>
                    <text x="210" y="225" text-anchor="start" fill="#fff" font-size="19">Strength training + HIIT</text>
                    <text x="210" y="265" text-anchor="start" fill="#888" font-size="16">Beat moderate cardio for visceral fat in RCTs</text>
                    <rect x="100" y="330" width="900" height="130" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="160" y="385" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="22">2.</text>
                    <text x="210" y="385" text-anchor="start" fill="#fff" font-size="19">Protein: 1.2-1.6 g/kg/day</text>
                    <text x="210" y="425" text-anchor="start" fill="#888" font-size="16">25-30g per meal to overcome anabolic resistance</text>
                    <rect x="100" y="490" width="900" height="130" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="160" y="545" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="22">3.</text>
                    <text x="210" y="545" text-anchor="start" fill="#fff" font-size="19">The HRT conversation</text>
                    <text x="210" y="585" text-anchor="start" fill="#888" font-size="16">Individualized — discuss with your clinician</text>
                    <rect x="100" y="650" width="900" height="130" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="160" y="705" text-anchor="start" fill="#3b82f6" font-weight="bold" font-size="22">4.</text>
                    <text x="210" y="705" text-anchor="start" fill="#fff" font-size="19">For men: same tools</text>
                    <text x="210" y="745" text-anchor="start" fill="#888" font-size="16">Testosterone drifts ~1%/yr from 30 — lift first</text>
                    <rect x="100" y="820" width="900" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="875" text-anchor="middle" fill="#ffd700" font-size="19">The body still responds — it just needs a louder signal</text>
                </svg>`,
                caption: "The evidence-backed counter-playbook for midlife hormones"
            }
        },
        {
            type: "quiz",
            question: "In randomized trials with postmenopausal women, which exercise approach worked best for reducing visceral fat?",
            options: [
                { text: "Long moderate-pace cardio, because it burns the most fat during the session", correct: false },
                { text: "Strength training combined with high-intensity intervals (HIIT)", correct: true },
                { text: "High-volume core and ab exercises to target belly fat directly", correct: false },
                { text: "Exercise has little effect after menopause — only hormone therapy reduces visceral fat", correct: false }
            ],
            explanation: "RCTs in postmenopausal women found strength training plus HIIT outperformed moderate steady-state cardio for visceral fat. The 'fat-burning zone' logic is the tempting trap: what matters isn't fat burned during the session but the muscle, mitochondrial, and hormonal signals intensity creates. Spot-reducing belly fat with ab work doesn't happen, and exercise absolutely still works after menopause — HRT is a separate, individualized clinician conversation.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="130" width="800" height="200" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="190" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">MENOPAUSE AND EXERCISE</text>
                    <text x="550" y="235" text-anchor="middle" fill="#fff" font-size="18">Visceral fat responds to specific signals</text>
                    <text x="550" y="270" text-anchor="middle" fill="#888" font-size="16">Which training style won in the trials?</text>
                    <rect x="150" y="380" width="380" height="150" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="340" y="445" text-anchor="middle" fill="#ef4444" font-size="18">Steady + gentle?</text>
                    <text x="340" y="485" text-anchor="middle" fill="#888" font-size="15">Comfortable pace</text>
                    <rect x="570" y="380" width="380" height="150" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="760" y="445" text-anchor="middle" fill="#10b981" font-size="18">Heavy + intense?</text>
                    <text x="760" y="485" text-anchor="middle" fill="#888" font-size="15">Iron and intervals</text>
                </svg>`,
                caption: "Test yourself: which signal moves visceral fat?"
            }
        },
        {
            type: "concept",
            title: "The GLP-1 Earthquake",
            content: "No conversation about metabolic science in the 2020s is complete without the drugs reshaping obesity and diabetes care: **GLP-1 receptor agonists**.\n\n• **Semaglutide** (Ozempic/Wegovy) produced ~**15% average weight loss** in the STEP trials — territory once reserved for surgery\n\n• **Tirzepatide** (Mounjaro/Zepbound), a dual GIP/GLP-1 agonist, reached ~**20%** in SURMOUNT trials\n\n• They work upstream, quieting appetite circuits and slowing stomach emptying, while improving blood glucose — and in the **SELECT trial**, semaglutide cut major cardiovascular events by about **20%** in people with obesity and heart disease\n\nNow the honest caveats:\n\n• Rapid weight loss takes **muscle** along with fat — pairing these drugs with **strength training and adequate protein** is essential, especially in older adults already fighting sarcopenia\n\n• Stop the drug without changed habits, and most weight returns\n\n• As anti-aging agents specifically? **Promising, not proven.** These are genuine breakthroughs for metabolic disease — not a substitute for the behaviors that build muscle and mitochondria.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE GLP-1 EARTHQUAKE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Real breakthroughs — with real caveats</text>
                    <rect x="60" y="170" width="460" height="200" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="290" y="230" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">SEMAGLUTIDE</text>
                    <text x="290" y="280" text-anchor="middle" fill="#fff" font-size="18">~15% weight loss (STEP)</text>
                    <text x="290" y="315" text-anchor="middle" fill="#888" font-size="15">-20% CV events in SELECT</text>
                    <rect x="580" y="170" width="460" height="200" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="810" y="230" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="21">TIRZEPATIDE</text>
                    <text x="810" y="280" text-anchor="middle" fill="#fff" font-size="18">~20% weight loss (SURMOUNT)</text>
                    <text x="810" y="315" text-anchor="middle" fill="#888" font-size="15">Dual GIP + GLP-1 action</text>
                    <rect x="100" y="410" width="900" height="200" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="465" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">THE CAVEATS</text>
                    <text x="550" y="510" text-anchor="middle" fill="#fff" font-size="18">Muscle lost alongside fat — lift and eat protein</text>
                    <text x="550" y="545" text-anchor="middle" fill="#fff" font-size="18">Weight tends to return if the drug stops</text>
                    <text x="550" y="580" text-anchor="middle" fill="#888" font-size="16">Long-term effects on aging itself: unknown</text>
                    <rect x="100" y="650" width="900" height="100" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="695" text-anchor="middle" fill="#ffd700" font-size="20">Powerful medicine for metabolic disease</text>
                    <text x="550" y="730" text-anchor="middle" fill="#fff" font-size="17">Not a replacement for training, food, and sleep</text>
                </svg>`,
                caption: "GLP-1 drugs: genuine revolution, honest limits"
            }
        },
        {
            type: "concept",
            title: "The Longevity Pipeline: Promising, Not Proven",
            content: "Beyond GLP-1s, a wave of research is asking a bolder question: can we slow aging itself? Here's the honest state of the frontier:\n\n• **TAME trial (metformin)** — Researcher **Nir Barzilai** is leading Targeting Aging with Metformin, testing whether this cheap diabetes drug can delay the whole cluster of age-related diseases. It's the first FDA-sanctioned trial to treat aging as a target. Results: not in yet\n\n• **NAD+ decline** — This critical energy-metabolism molecule falls with age. Precursor supplements (NMN, NR) reliably raise NAD+ levels in blood — but human trials haven't yet shown meaningful health outcomes\n\n• **Rapamycin / mTOR** — Inhibiting the mTOR nutrient-sensing pathway extends lifespan in mice more robustly than almost any intervention tested. Human low-dose trials are early and dosing questions remain\n\n• **Senolytics** — Drugs designed to clear 'zombie' senescent cells that pump out inflammatory signals. Fascinating biology; small early human trials only\n\nNotice the pattern: every one targets pathways — **nutrient sensing, mitochondria, inflammation** — that exercise, diet, and sleep already influence, with decades of human outcome data behind them.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE LONGEVITY PIPELINE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Where the frontier science really stands</text>
                    <rect x="100" y="170" width="900" height="130" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="160" y="220" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">TAME / METFORMIN</text>
                    <text x="160" y="260" text-anchor="start" fill="#888" font-size="16">First trial to target aging itself — results pending</text>
                    <rect x="100" y="330" width="900" height="130" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="160" y="380" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="20">NAD+ PRECURSORS</text>
                    <text x="160" y="420" text-anchor="start" fill="#888" font-size="16">Raise blood NAD+ — health outcomes unproven</text>
                    <rect x="100" y="490" width="900" height="130" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="160" y="540" text-anchor="start" fill="#3b82f6" font-weight="bold" font-size="20">RAPAMYCIN / mTOR</text>
                    <text x="160" y="580" text-anchor="start" fill="#888" font-size="16">Extends mouse lifespan — human dosing trials early</text>
                    <rect x="100" y="650" width="900" height="130" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="160" y="700" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="20">SENOLYTICS</text>
                    <text x="160" y="740" text-anchor="start" fill="#888" font-size="16">Clear zombie cells — small early human trials</text>
                    <rect x="100" y="820" width="900" height="100" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="865" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">STATUS: PROMISING — NOT PROVEN</text>
                    <text x="550" y="900" text-anchor="middle" fill="#888" font-size="16">No human longevity outcome data yet for any of them</text>
                </svg>`,
                caption: "Four frontier bets — none with human longevity data yet"
            }
        },
        {
            type: "application",
            title: "Act on the Real Science Today",
            content: "**Turn this lesson into moves you can make this week:**\n\n1. **Retire the metabolism excuse** — audit the real levers instead: muscle, daily movement, food environment, sleep. Write down your honest numbers for each\n\n2. **Book two strength sessions this week** — put them in your calendar like meetings. After 45, this is the single highest-leverage habit you have\n\n3. **Anchor every meal with 25–30g protein** — the anabolic-resistance workaround. Eggs, Greek yogurt, fish, chicken, tofu, legumes\n\n4. **In the menopause transition?** Add 1–2 short HIIT finishers to your week, and book a clinician visit to discuss your labs and whether HRT fits your situation\n\n5. **Install the 'human outcome data' filter** — before any supplement or longevity drug tempts you, ask: has it improved health outcomes in humans, or just biomarkers in mice? Spend your money and effort where the answer is yes\n\nNone of this requires a prescription. All of it has evidence the frontier drugs still lack.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">YOUR MOVES THIS WEEK</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Five actions built on the real science</text>
                    <rect x="150" y="170" width="800" height="110" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="220" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">1.</text>
                    <text x="240" y="220" text-anchor="start" fill="#fff" font-size="18">Retire the metabolism excuse</text>
                    <text x="240" y="255" text-anchor="start" fill="#888" font-size="15">Audit muscle, movement, food, sleep instead</text>
                    <rect x="150" y="310" width="800" height="110" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="360" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="20">2.</text>
                    <text x="240" y="360" text-anchor="start" fill="#fff" font-size="18">Calendar two strength sessions</text>
                    <text x="240" y="395" text-anchor="start" fill="#888" font-size="15">Highest-leverage habit after 45</text>
                    <rect x="150" y="450" width="800" height="110" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="500" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">3.</text>
                    <text x="240" y="500" text-anchor="start" fill="#fff" font-size="18">Anchor meals with 25-30g protein</text>
                    <text x="240" y="535" text-anchor="start" fill="#888" font-size="15">The anabolic-resistance workaround</text>
                    <rect x="150" y="590" width="800" height="110" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="640" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">4.</text>
                    <text x="240" y="640" text-anchor="start" fill="#fff" font-size="18">Menopause? Add HIIT + clinician visit</text>
                    <text x="240" y="675" text-anchor="start" fill="#888" font-size="15">Labs and the HRT conversation</text>
                    <rect x="150" y="730" width="800" height="110" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="780" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="20">5.</text>
                    <text x="240" y="780" text-anchor="start" fill="#fff" font-size="18">Install the outcome-data filter</text>
                    <text x="240" y="815" text-anchor="start" fill="#888" font-size="15">Human outcomes, or just mouse biomarkers?</text>
                </svg>`,
                caption: "Today's action plan — no prescription required"
            }
        },
        {
            type: "quiz",
            question: "What is the most honest summary of where 'anti-aging' metabolic science stands today?",
            options: [
                { text: "NAD+ supplements and rapamycin are proven to extend human lifespan", correct: false },
                { text: "Several agents are promising, but none yet matches exercise, diet, and sleep for human outcome evidence", correct: true },
                { text: "The TAME trial already proved metformin slows aging in healthy adults", correct: false },
                { text: "GLP-1 drugs make exercise and diet unnecessary for metabolic health", correct: false }
            ],
            explanation: "This is the lesson's bottom line: GLP-1s are transforming obesity and diabetes care, and TAME, NAD+, rapamycin, and senolytics are legitimate science — but not one has human longevity outcome data yet. TAME's results aren't in; NAD+ precursors raise biomarkers, not proven outcomes. Meanwhile exercise, diet quality, and sleep have decades of hard human evidence — and even GLP-1 users need strength training and protein to protect muscle. The pill that beats lifestyle doesn't exist yet.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="130" width="800" height="200" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="190" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE BOTTOM LINE</text>
                    <text x="550" y="235" text-anchor="middle" fill="#fff" font-size="18">Frontier drugs vs. proven fundamentals</text>
                    <text x="550" y="270" text-anchor="middle" fill="#888" font-size="16">Where does the human outcome data live?</text>
                    <rect x="150" y="380" width="380" height="180" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="340" y="440" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="19">THE PIPELINE</text>
                    <text x="340" y="480" text-anchor="middle" fill="#888" font-size="15">Promising, unproven</text>
                    <text x="340" y="515" text-anchor="middle" fill="#888" font-size="15">Trials still running</text>
                    <rect x="570" y="380" width="380" height="180" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="760" y="440" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">THE BASICS</text>
                    <text x="760" y="480" text-anchor="middle" fill="#888" font-size="15">Exercise, diet, sleep</text>
                    <text x="760" y="515" text-anchor="middle" fill="#888" font-size="15">Decades of human data</text>
                </svg>`,
                caption: "Final check: the honest state of the science"
            }
        }
    ]
},
{
    id: 12,
    title: "Your Metabolic Longevity Blueprint",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "Two Eighty-Year-Olds Walk Into a Kitchen",
            content: "Picture two 80-year-olds. The first grips the counter to stand, counts out nine medications, and hasn't carried her own groceries in years. The second just got back from a walk with her granddaughter, lifts her carry-on into the overhead bin, and her labs read like a healthy 60-year-old's.\n\nSame age. Different bodies. And here's the uncomfortable, liberating truth this book has been building toward: the difference usually isn't luck or genes alone. It's **thirty years of metabolic inputs** — muscle built or lost, glucose kept steady or allowed to spike, sleep protected or sacrificed, one decade at a time.\n\nYou've now learned every piece: the 12% statistic, insulin resistance, the glucose sink, mitochondria, Zone 2, protein, sleep, stress, the Pontzer plateau. This final lesson assembles them into one blueprint — the causal chain, the five pillars, a decade-by-decade playbook, and the yearly dashboard that keeps you honest.\n\nThis is the lesson you'll come back to. Let's build your future self.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">TWO FUTURES</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Same age — different decades of inputs</text>
                    <rect x="60" y="170" width="460" height="360" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="230" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="24">DRIFT</text>
                    <text x="290" y="285" text-anchor="middle" fill="#fff" font-size="18">Grips the counter to stand</text>
                    <text x="290" y="325" text-anchor="middle" fill="#fff" font-size="18">Nine daily medications</text>
                    <text x="290" y="365" text-anchor="middle" fill="#fff" font-size="18">Depends on others for errands</text>
                    <text x="290" y="415" text-anchor="middle" fill="#888" font-size="16">Muscle, glucose, and sleep</text>
                    <text x="290" y="450" text-anchor="middle" fill="#888" font-size="16">left to chance for 30 years</text>
                    <rect x="580" y="170" width="460" height="360" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="230" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="24">DESIGN</text>
                    <text x="810" y="285" text-anchor="middle" fill="#fff" font-size="18">Walks daily, travels solo</text>
                    <text x="810" y="325" text-anchor="middle" fill="#fff" font-size="18">Lifts her own carry-on</text>
                    <text x="810" y="365" text-anchor="middle" fill="#fff" font-size="18">Labs of a healthy 60-year-old</text>
                    <text x="810" y="415" text-anchor="middle" fill="#888" font-size="16">Muscle, glucose, and sleep</text>
                    <text x="810" y="450" text-anchor="middle" fill="#888" font-size="16">managed one decade at a time</text>
                    <rect x="100" y="590" width="900" height="110" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="640" text-anchor="middle" fill="#ffd700" font-size="20">The difference is rarely luck</text>
                    <text x="550" y="678" text-anchor="middle" fill="#fff" font-size="18">It's decades of metabolic inputs — and you choose them</text>
                </svg>`,
                caption: "Drift or design: the choice this book has been building toward"
            }
        },
        {
            type: "concept",
            title: "The Causal Chain: How It All Connects",
            content: "Everything in this book collapses into one causal chain. Read it forward and you have a strategy; read it backward and you have a diagnosis:\n\n**Muscle + mitochondria → insulin sensitivity → stable glucose → low inflammation → healthy aging**\n\n• **Muscle** is your glucose sink — skeletal muscle handles roughly **80% of insulin-stimulated glucose disposal**. More trained muscle means more places for blood sugar to go\n\n• **Mitochondria**, multiplied by Zone 2 work and intensity, burn fuel cleanly — weak mitochondria leave cells 'clogged' and insulin-resistant\n\n• **Insulin sensitivity** keeps glucose and insulin low and steady, instead of the spike-crash-store pattern\n\n• **Stable glucose** means less glycation and less oxidative stress — fewer sugar-damaged proteins and vessels\n\n• **Low inflammation** protects arteries, brain, and joints from the slow burn driving heart disease, dementia, and frailty — which is why the **hallmarks of aging** put nutrient sensing and mitochondria at the center\n\nEvery pillar you've learned — training, food, sleep, stress, measurement — works by strengthening a link in this chain. That's the whole game.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE CAUSAL CHAIN</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">The whole book in five links</text>
                    <rect x="200" y="150" width="700" height="110" rx="20" fill="rgba(99,102,241,0.15)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="198" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">MUSCLE + MITOCHONDRIA</text>
                    <text x="550" y="235" text-anchor="middle" fill="#888" font-size="15">The glucose sink and the clean-burning engine</text>
                    <path d="M550 260 L550 300" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,310 542,296 558,296" fill="#14b8a6"/>
                    <rect x="200" y="320" width="700" height="110" rx="20" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="368" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="21">INSULIN SENSITIVITY</text>
                    <text x="550" y="405" text-anchor="middle" fill="#888" font-size="15">Cells respond to a whisper, not a shout</text>
                    <path d="M550 430 L550 470" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,480 542,466 558,466" fill="#14b8a6"/>
                    <rect x="200" y="490" width="700" height="110" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="550" y="538" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="21">STABLE GLUCOSE</text>
                    <text x="550" y="575" text-anchor="middle" fill="#888" font-size="15">No spike-crash-store; less glycation damage</text>
                    <path d="M550 600 L550 640" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,650 542,636 558,636" fill="#14b8a6"/>
                    <rect x="200" y="660" width="700" height="110" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="708" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">LOW INFLAMMATION</text>
                    <text x="550" y="745" text-anchor="middle" fill="#888" font-size="15">Arteries, brain, and joints spared the slow burn</text>
                    <path d="M550 770 L550 810" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,820 542,806 558,806" fill="#14b8a6"/>
                    <rect x="200" y="830" width="700" height="110" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="878" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="21">HEALTHY AGING</text>
                    <text x="550" y="915" text-anchor="middle" fill="#888" font-size="15">Independence, energy, and a sharp mind</text>
                </svg>`,
                caption: "Five links: strengthen any one and the whole chain improves"
            }
        },
        {
            type: "visual",
            title: "Five Pillars, One System",
            content: "The pillars aren't a menu you pick from — they're **one interlocking system**. Sleep restriction can cut insulin sensitivity by ~25% in under a week, sabotaging your training. Chronic **cortisol** shovels fat into visceral storage, undoing your diet. Post-meal walks flatten the glucose spikes your kitchen creates. And **measurement** closes the loop — you can't steer what you don't see.\n\nTrain. Eat. Sleep. De-stress. Measure. Each one amplifies the other four.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">FIVE PILLARS, ONE SYSTEM</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Each pillar amplifies the other four</text>
                    <line x1="550" y1="540" x2="550" y2="260" stroke="#14b8a6" stroke-width="2" opacity="0.5"/>
                    <line x1="550" y1="540" x2="860" y2="430" stroke="#14b8a6" stroke-width="2" opacity="0.5"/>
                    <line x1="550" y1="540" x2="760" y2="790" stroke="#14b8a6" stroke-width="2" opacity="0.5"/>
                    <line x1="550" y1="540" x2="340" y2="790" stroke="#14b8a6" stroke-width="2" opacity="0.5"/>
                    <line x1="550" y1="540" x2="240" y2="430" stroke="#14b8a6" stroke-width="2" opacity="0.5"/>
                    <circle cx="550" cy="540" r="120" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="3"/>
                    <text x="550" y="530" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="22">METABOLIC</text>
                    <text x="550" y="565" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="22">HEALTH</text>
                    <circle cx="550" cy="230" r="85" fill="rgba(99,102,241,0.3)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="225" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">TRAIN</text>
                    <text x="550" y="258" text-anchor="middle" fill="#fff" font-size="14">Zone 2 + strength</text>
                    <circle cx="890" cy="420" r="85" fill="rgba(16,185,129,0.3)" stroke="#10b981" stroke-width="2"/>
                    <text x="890" y="415" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">EAT</text>
                    <text x="890" y="448" text-anchor="middle" fill="#fff" font-size="14">Protein + fiber</text>
                    <circle cx="780" cy="820" r="85" fill="rgba(139,92,246,0.3)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="780" y="815" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="21">SLEEP</text>
                    <text x="780" y="848" text-anchor="middle" fill="#fff" font-size="14">7-8 hours</text>
                    <circle cx="320" cy="820" r="85" fill="rgba(236,72,153,0.3)" stroke="#ec4899" stroke-width="2"/>
                    <text x="320" y="815" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="20">DE-STRESS</text>
                    <text x="320" y="848" text-anchor="middle" fill="#fff" font-size="14">Tame cortisol</text>
                    <circle cx="210" cy="420" r="85" fill="rgba(245,158,11,0.3)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="210" y="415" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">MEASURE</text>
                    <text x="210" y="448" text-anchor="middle" fill="#fff" font-size="14">Yearly dashboard</text>
                    <rect x="150" y="980" width="800" height="80" rx="20" fill="rgba(255,255,255,0.05)" stroke="#888" stroke-width="1"/>
                    <text x="550" y="1030" text-anchor="middle" fill="#888" font-size="17">Skip one pillar and it quietly drains the other four</text>
                </svg>`,
                caption: "The five pillars orbiting one goal — and feeding each other"
            }
        },
        {
            type: "example",
            title: "The Playbook: Your 30s and 40s",
            content: "Metabolic strategy changes by decade. Here's the first half of the playbook:\n\n**Your 30s — Build the muscle bank.**\nMuscle mass peaks around 30, then drops 3–8% per decade untrained. Every pound you build now is a deposit you'll live off at 70. **Marcus, 33**, lifts twice a week and plays pickup soccer — he's not chasing abs; he's pre-funding his 70s. This is also the cheapest decade to install habits: the workout slot, the protein-first breakfast, the 11pm lights-out. Habits built at 33 run on autopilot at 53\n\n**Your 40s — Guard against the creep.**\nRemember: the Pontzer data says your metabolism has NOT slowed yet. The enemy is the quiet slide — 2,000 fewer daily steps, wine most nights, sleep traded for deadlines, one pound a year. **Priya, 46**, fights back with a step floor of 8,000, two strength sessions, and her first **full lab panel**: fasting glucose AND insulin, HbA1c, triglycerides, HDL, ApoB, blood pressure, waist. Insulin resistance brews silently for 10+ years — your 40s are when catching it is easy and reversing it is fast.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE PLAYBOOK: 30s + 40s</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Build the bank, then guard the vault</text>
                    <rect x="60" y="170" width="460" height="400" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="290" y="230" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="24">YOUR 30s</text>
                    <text x="290" y="280" text-anchor="middle" fill="#fff" font-size="18">Build the muscle bank</text>
                    <text x="290" y="320" text-anchor="middle" fill="#888" font-size="16">Muscle peaks ~30 — every pound</text>
                    <text x="290" y="352" text-anchor="middle" fill="#888" font-size="16">now is savings for your 70s</text>
                    <text x="290" y="400" text-anchor="middle" fill="#fff" font-size="18">Install the habits</text>
                    <text x="290" y="440" text-anchor="middle" fill="#888" font-size="16">Workout slot, protein breakfast,</text>
                    <text x="290" y="472" text-anchor="middle" fill="#888" font-size="16">consistent lights-out</text>
                    <rect x="580" y="170" width="460" height="400" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="810" y="230" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="24">YOUR 40s</text>
                    <text x="810" y="280" text-anchor="middle" fill="#fff" font-size="18">Guard against the creep</text>
                    <text x="810" y="320" text-anchor="middle" fill="#888" font-size="16">Steps, sleep, and pours slide —</text>
                    <text x="810" y="352" text-anchor="middle" fill="#888" font-size="16">not your metabolic rate</text>
                    <text x="810" y="400" text-anchor="middle" fill="#fff" font-size="18">First full lab panel</text>
                    <text x="810" y="440" text-anchor="middle" fill="#888" font-size="16">Glucose + insulin, HbA1c, lipids,</text>
                    <text x="810" y="472" text-anchor="middle" fill="#888" font-size="16">ApoB, BP, waist</text>
                    <rect x="100" y="630" width="900" height="100" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="675" text-anchor="middle" fill="#ffd700" font-size="20">Insulin resistance brews silently for 10+ years</text>
                    <text x="550" y="710" text-anchor="middle" fill="#fff" font-size="17">Your 40s are when catching it is easy and reversing it is fast</text>
                </svg>`,
                caption: "Decades one and two: deposit muscle, then defend it"
            }
        },
        {
            type: "quiz",
            question: "In the book's causal chain, why is building muscle so central to long-term metabolic health?",
            options: [
                { text: "Muscle burns so many calories at rest that it prevents weight gain by itself", correct: false },
                { text: "Muscle is the body's largest glucose sink, handling ~80% of insulin-stimulated glucose disposal", correct: true },
                { text: "Muscle permanently raises growth hormone and testosterone to youthful levels", correct: false },
                { text: "Muscle directly removes LDL cholesterol from the bloodstream", correct: false }
            ],
            explanation: "Muscle's resting calorie burn is real but modest — that's the tempting distractor. Its true superpower is glucose disposal: skeletal muscle soaks up roughly 80% of insulin-stimulated blood sugar, keeping glucose and insulin low and stable. That stability means less glycation, less inflammation, and healthier aging — the causal chain in action. Hormone effects are transient and muscle doesn't clear LDL; the glucose sink is the mechanism worth remembering for life.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="130" width="800" height="200" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="190" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE GLUCOSE SINK</text>
                    <text x="550" y="235" text-anchor="middle" fill="#fff" font-size="18">Why does muscle anchor the causal chain?</text>
                    <text x="550" y="270" text-anchor="middle" fill="#888" font-size="16">Think mechanism, not just calories</text>
                    <rect x="200" y="390" width="700" height="170" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="450" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">MUSCLE</text>
                    <text x="550" y="490" text-anchor="middle" fill="#fff" font-size="17">Where does ~80% of insulin-stimulated</text>
                    <text x="550" y="522" text-anchor="middle" fill="#fff" font-size="17">blood glucose end up?</text>
                </svg>`,
                caption: "Mid-lesson check: the mechanism behind the muscle bank"
            }
        },
        {
            type: "concept",
            title: "The Playbook: Your 50s and 60s+",
            content: "The second half of the playbook — where the stakes rise and the payoff compounds:\n\n**Your 50s — Adjust for the hormonal shift.**\n• **Menopause**: visceral fat risk jumps; strength training + HIIT beat moderate cardio in the RCTs; consider the HRT conversation with your clinician\n• **Andropause**: men's gradual testosterone decline accelerates muscle loss — lifting is non-negotiable, not optional\n• **Protein goes up**: 1.2–1.6 g/kg/day, 25–30g per meal, to shout over anabolic resistance\n\n**Your 60s and beyond — Train for independence.**\n• **Power training**: move weights with speed (safely). Power fades faster than strength, and power is what catches you when you trip\n• **Protein at every meal** — anabolic resistance is now at its loudest\n• **Balance work**: single-leg stands, heel-to-toe walks. Falls are the gateway to dependence\n• **Defend VO2max**: it falls ~10% per decade sedentary — but Mandsager's 122,007-patient study showed fitness predicts survival more strongly than smoking or diabetes, with **no upper limit to the benefit**\n\nGrip strength predicted mortality in the PURE study for a reason: what you can carry, you can keep — including your independence.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE PLAYBOOK: 50s + 60s+</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Adjust for hormones, train for independence</text>
                    <rect x="60" y="170" width="460" height="400" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="290" y="230" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="24">YOUR 50s</text>
                    <text x="290" y="280" text-anchor="middle" fill="#fff" font-size="18">Menopause / andropause shift</text>
                    <text x="290" y="320" text-anchor="middle" fill="#888" font-size="16">Strength + HIIT for visceral fat;</text>
                    <text x="290" y="352" text-anchor="middle" fill="#888" font-size="16">HRT is a clinician conversation</text>
                    <text x="290" y="400" text-anchor="middle" fill="#fff" font-size="18">Protein up: 1.2-1.6 g/kg/day</text>
                    <text x="290" y="440" text-anchor="middle" fill="#888" font-size="16">25-30g per meal</text>
                    <text x="290" y="490" text-anchor="middle" fill="#fff" font-size="18">Strength: non-negotiable</text>
                    <rect x="580" y="170" width="460" height="400" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="230" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="24">YOUR 60s+</text>
                    <text x="810" y="280" text-anchor="middle" fill="#fff" font-size="18">Power training — move fast</text>
                    <text x="810" y="320" text-anchor="middle" fill="#888" font-size="16">Power catches you when you trip</text>
                    <text x="810" y="368" text-anchor="middle" fill="#fff" font-size="18">Protein at every single meal</text>
                    <text x="810" y="408" text-anchor="middle" fill="#888" font-size="16">Anabolic resistance is loudest now</text>
                    <text x="810" y="456" text-anchor="middle" fill="#fff" font-size="18">Balance work + defend VO2max</text>
                    <text x="810" y="496" text-anchor="middle" fill="#888" font-size="16">Fitness beats smoking as a predictor</text>
                    <rect x="100" y="630" width="900" height="100" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="675" text-anchor="middle" fill="#ffd700" font-size="20">What you can carry, you can keep</text>
                    <text x="550" y="710" text-anchor="middle" fill="#fff" font-size="17">Grip strength predicted mortality in the PURE study</text>
                </svg>`,
                caption: "Decades three and four: hormones, power, and independence"
            }
        },
        {
            type: "concept",
            title: "Your Yearly Dashboard",
            content: "You measure what matters once a year — the same way a pilot runs a preflight check. Eight gauges, most available from one standard blood draw plus a tape measure and a stopwatch:\n\n• **Waist-to-height ratio** — keep your waist under half your height; catches visceral fat that BMI misses (remember TOFI: thin outside, fat inside)\n\n• **Blood pressure** — the silent one; aim under 120/80\n\n• **Fasting glucose AND fasting insulin** — insulin rises years before glucose does; it's your earliest smoke alarm (ask for it — it's often not standard)\n\n• **HbA1c** — your 3-month glucose average; under 5.7% is the line\n\n• **Triglyceride-to-HDL ratio** — a cheap insulin-resistance proxy; near 1 is excellent, above 3 is a warning\n\n• **ApoB** — counts the artery-damaging particles directly; better than LDL alone\n\n• **Grip strength** — the mortality-predicting handshake from the PURE study\n\n• **Resting heart rate** — your fitness trend line, free from any wrist wearable\n\n**Trends beat snapshots.** One odd reading means little; a three-year drift means everything. Review the numbers with a clinician — this dashboard is for steering, not self-diagnosis.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">YOUR YEARLY DASHBOARD</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Eight gauges, once a year</text>
                    <rect x="60" y="170" width="460" height="170" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="290" y="230" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="19">WAIST-TO-HEIGHT</text>
                    <text x="290" y="270" text-anchor="middle" fill="#fff" font-size="16">Waist under half your height</text>
                    <text x="290" y="303" text-anchor="middle" fill="#888" font-size="14">Catches what BMI misses</text>
                    <rect x="580" y="170" width="460" height="170" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="810" y="230" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="19">BLOOD PRESSURE</text>
                    <text x="810" y="270" text-anchor="middle" fill="#fff" font-size="16">Aim under 120/80</text>
                    <text x="810" y="303" text-anchor="middle" fill="#888" font-size="14">The silent gauge</text>
                    <rect x="60" y="370" width="460" height="170" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="290" y="430" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="19">GLUCOSE + INSULIN</text>
                    <text x="290" y="470" text-anchor="middle" fill="#fff" font-size="16">Fasting pair — ask for insulin</text>
                    <text x="290" y="503" text-anchor="middle" fill="#888" font-size="14">Insulin rises years earlier</text>
                    <rect x="580" y="370" width="460" height="170" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="810" y="430" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="19">HbA1c</text>
                    <text x="810" y="470" text-anchor="middle" fill="#fff" font-size="16">3-month average, under 5.7%</text>
                    <text x="810" y="503" text-anchor="middle" fill="#888" font-size="14">Your glucose report card</text>
                    <rect x="60" y="570" width="460" height="170" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="630" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">TRIG : HDL RATIO</text>
                    <text x="290" y="670" text-anchor="middle" fill="#fff" font-size="16">Near 1 excellent, above 3 warning</text>
                    <text x="290" y="703" text-anchor="middle" fill="#888" font-size="14">Cheap insulin-resistance proxy</text>
                    <rect x="580" y="570" width="460" height="170" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="810" y="630" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="19">ApoB</text>
                    <text x="810" y="670" text-anchor="middle" fill="#fff" font-size="16">Counts damaging particles</text>
                    <text x="810" y="703" text-anchor="middle" fill="#888" font-size="14">Sharper than LDL alone</text>
                    <rect x="60" y="770" width="460" height="170" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="290" y="830" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="19">GRIP STRENGTH</text>
                    <text x="290" y="870" text-anchor="middle" fill="#fff" font-size="16">The mortality handshake</text>
                    <text x="290" y="903" text-anchor="middle" fill="#888" font-size="14">PURE study, Lancet 2015</text>
                    <rect x="580" y="770" width="460" height="170" rx="20" fill="rgba(20,184,166,0.15)" stroke="#14b8a6" stroke-width="2"/>
                    <text x="810" y="830" text-anchor="middle" fill="#14b8a6" font-weight="bold" font-size="19">RESTING HEART RATE</text>
                    <text x="810" y="870" text-anchor="middle" fill="#fff" font-size="16">Your free fitness trend line</text>
                    <text x="810" y="903" text-anchor="middle" fill="#888" font-size="14">Any wearable tracks it</text>
                    <rect x="150" y="980" width="800" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1030" text-anchor="middle" fill="#ffd700" font-size="19">Trends beat snapshots — review yearly with a clinician</text>
                </svg>`,
                caption: "The eight-gauge preflight check for your metabolism"
            }
        },
        {
            type: "example",
            title: "The 80/20 Week: Maria's Minimum Effective Dose",
            content: "You don't need a biohacker's schedule. **Maria, 52**, a hospital administrator with two teenagers, runs the whole system on about **five hours a week**:\n\n• **150 minutes of Zone 2** — five 30-minute brisk walks or easy bike rides at can-still-talk pace, mostly before work. This is the mitochondria builder\n\n• **Two strength sessions** — 40 minutes each, Tuesday and Saturday: squats, rows, presses, carries. Meta-analyses tie ~2 sessions a week to **10–17% lower all-cause mortality**\n\n• **Protein + fiber anchor** — every meal starts with ~30g protein and vegetables; fiber lands near 30g/day. No forbidden foods, just anchors first\n\n• **7–8 hours of sleep** — with a consistent wake time, protecting the insulin sensitivity that one bad week of 5-hour nights can slash by ~25%\n\n• **Post-meal walks** — 10 minutes after dinner. Buffey's 2022 meta-analysis found even 2–5 minutes blunts the glucose spike\n\nA year in: waist down 2 inches, triglyceride:HDL from 2.8 to 1.4, HbA1c from 5.8 to 5.4. Not magic — **the minimum effective dose, repeated**.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE 80/20 WEEK</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Maria's minimum effective dose: ~5 hours</text>
                    <rect x="100" y="170" width="900" height="130" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="160" y="220" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">ZONE 2 x 150 MIN</text>
                    <text x="160" y="260" text-anchor="start" fill="#888" font-size="16">Five 30-min brisk walks — the mitochondria builder</text>
                    <rect x="100" y="330" width="900" height="130" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="160" y="380" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="20">STRENGTH x 2</text>
                    <text x="160" y="420" text-anchor="start" fill="#888" font-size="16">Tue + Sat, 40 min — tied to 10-17% lower mortality</text>
                    <rect x="100" y="490" width="900" height="130" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="160" y="540" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">PROTEIN + FIBER ANCHOR</text>
                    <text x="160" y="580" text-anchor="start" fill="#888" font-size="16">~30g protein each meal, ~30g fiber daily — anchors first</text>
                    <rect x="100" y="650" width="900" height="130" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="160" y="700" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="20">SLEEP 7-8h</text>
                    <text x="160" y="740" text-anchor="start" fill="#888" font-size="16">Consistent wake time — guards insulin sensitivity</text>
                    <rect x="100" y="810" width="900" height="130" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="160" y="860" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">POST-MEAL WALKS</text>
                    <text x="160" y="900" text-anchor="start" fill="#888" font-size="16">10 min after dinner — even 2-5 min blunts the spike</text>
                    <rect x="100" y="970" width="900" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1025" text-anchor="middle" fill="#ffd700" font-size="19">One year: waist -2 in, TG:HDL 2.8 to 1.4, HbA1c 5.8 to 5.4</text>
                </svg>`,
                caption: "Five hours a week that move every gauge on the dashboard"
            }
        },
        {
            type: "quiz",
            question: "Which weekly package best matches this book's 'minimum effective dose' for metabolic health?",
            options: [
                { text: "Daily 60-minute gym sessions plus a strict ketogenic diet", correct: false },
                { text: "150 min Zone 2 + 2 strength sessions + protein/fiber anchors + 7-8h sleep + post-meal walks", correct: true },
                { text: "Hitting 10,000 steps a day — steps alone cover everything the system needs", correct: false },
                { text: "Daily 20-minute HIIT sessions, since intensity replaces the need for volume or sleep", correct: false }
            ],
            explanation: "The 80/20 package is deliberately modest: ~150 minutes of Zone 2, two strength sessions (linked to 10-17% lower all-cause mortality), a protein-and-fiber anchor at meals, 7-8 hours of sleep, and short post-meal walks. Daily gym heroics and strict diets fail the sustainability test — the dose you repeat for decades beats the dose you quit. Steps alone skip the strength stimulus muscle needs, and daily HIIT without recovery or sleep undermines the very insulin sensitivity you're building.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="130" width="800" height="200" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="190" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">MINIMUM EFFECTIVE DOSE</text>
                    <text x="550" y="235" text-anchor="middle" fill="#fff" font-size="18">About five hours a week, five components</text>
                    <text x="550" y="270" text-anchor="middle" fill="#888" font-size="16">Which package is the real 80/20?</text>
                    <rect x="150" y="380" width="380" height="180" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="340" y="445" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="19">HEROIC</text>
                    <text x="340" y="485" text-anchor="middle" fill="#888" font-size="15">Impressive for 3 weeks</text>
                    <text x="340" y="518" text-anchor="middle" fill="#888" font-size="15">Abandoned by week 4</text>
                    <rect x="570" y="380" width="380" height="180" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="760" y="445" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">SUSTAINABLE</text>
                    <text x="760" y="485" text-anchor="middle" fill="#888" font-size="15">Modest every week</text>
                    <text x="760" y="518" text-anchor="middle" fill="#888" font-size="15">Repeated for decades</text>
                </svg>`,
                caption: "Test yourself: the dose you repeat beats the dose you quit"
            }
        },
        {
            type: "concept",
            title: "Identity Beats Willpower",
            content: "Here's the final piece — the one that determines whether any of this survives contact with real life.\n\n**Willpower is a battery; identity is a power plant.** People who white-knuckle a plan ('I'm forcing myself to work out') quit when the battery drains. People who shift identity ('I'm someone who trains') don't need the battery at all. The behavior becomes self-evident, like brushing your teeth.\n\nThree tools make the shift stick:\n\n• **Systems over goals** — don't aim to 'lose 20 pounds'; build the Tuesday/Saturday lifting slot that makes the outcome inevitable\n\n• **Environment design** — your kitchen and calendar out-vote your intentions. Fruit visible, ultra-processed food not in the house (remember Hall's +500 kcal/day), gym bag by the door, workouts booked like meetings\n\n• **Compounding math** — two strength sessions a week is ~100 a year — over **3,000 sessions** between 45 and 75. No single one matters; the sum decides which 80-year-old from our opening you become. Miss a day? Irrelevant. The rule is simple: **never miss twice**\n\nSmall inputs, decades of compounding. That's not a pep talk — it's arithmetic.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">IDENTITY BEATS WILLPOWER</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Systems, environment, and compounding</text>
                    <rect x="60" y="170" width="460" height="220" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="230" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">WILLPOWER</text>
                    <text x="290" y="280" text-anchor="middle" fill="#fff" font-size="17">A battery that drains</text>
                    <text x="290" y="315" text-anchor="middle" fill="#888" font-size="15">'I'm forcing myself to work out'</text>
                    <text x="290" y="350" text-anchor="middle" fill="#888" font-size="15">Quits on the hard weeks</text>
                    <rect x="580" y="170" width="460" height="220" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="230" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">IDENTITY</text>
                    <text x="810" y="280" text-anchor="middle" fill="#fff" font-size="17">A power plant that runs itself</text>
                    <text x="810" y="315" text-anchor="middle" fill="#888" font-size="15">'I'm someone who trains'</text>
                    <text x="810" y="350" text-anchor="middle" fill="#888" font-size="15">Automatic, like brushing teeth</text>
                    <line x1="150" y1="750" x2="150" y2="480" stroke="#888" stroke-width="2"/>
                    <line x1="150" y1="750" x2="960" y2="750" stroke="#888" stroke-width="2"/>
                    <line x1="160" y1="740" x2="950" y2="700" stroke="#888" stroke-width="3" stroke-dasharray="8" opacity="0.6"/>
                    <path d="M160 745 C 500 730, 780 660, 950 510" stroke="#ffd700" stroke-width="4" fill="none"/>
                    <text x="620" y="565" text-anchor="middle" fill="#ffd700" font-size="17">Compounding habits</text>
                    <text x="620" y="690" text-anchor="middle" fill="#888" font-size="15">One-off efforts</text>
                    <text x="555" y="790" text-anchor="middle" fill="#888" font-size="15">Age 45 ................................ Age 75</text>
                    <rect x="100" y="840" width="900" height="100" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="885" text-anchor="middle" fill="#ffd700" font-size="19">2 sessions/week = ~3,000 sessions from 45 to 75</text>
                    <text x="550" y="920" text-anchor="middle" fill="#fff" font-size="17">No single one matters. The sum decides everything.</text>
                </svg>`,
                caption: "The arithmetic of small habits over decades"
            }
        },
        {
            type: "application",
            title: "Build Your Blueprint This Week",
            content: "**Five moves, one week — the whole book in motion:**\n\n1. **Write your identity sentence** — one line, present tense: 'I'm someone who trains and protects my sleep.' Put it where you'll see it every morning\n\n2. **Calendar the minimum effective dose** — book 150 minutes of Zone 2 and two strength sessions as recurring appointments. They defend themselves better as calendar blocks than as intentions\n\n3. **Design your environment** — tonight, three changes: ultra-processed snacks out of sight, protein staples stocked, workout gear staged by the door\n\n4. **Book your dashboard labs** — request fasting glucose AND insulin, HbA1c, triglycerides, HDL, ApoB, plus BP and waist measurement. Ask your clinician to walk you through the results and set your baselines\n\n5. **Open your decade page** — pick the one adjustment your decade demands: 30s, add a lifting day; 40s, take the step-count audit; 50s, raise protein and add HIIT; 60s+, add power and balance work\n\nDone this week, these five steps convert twelve lessons of knowledge into a running system. Start with number 1 — it takes ninety seconds.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">YOUR BLUEPRINT</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Five moves this week</text>
                    <rect x="150" y="170" width="800" height="110" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="220" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">1.</text>
                    <text x="240" y="220" text-anchor="start" fill="#fff" font-size="18">Write your identity sentence</text>
                    <text x="240" y="255" text-anchor="start" fill="#888" font-size="15">Present tense, visible every morning</text>
                    <rect x="150" y="310" width="800" height="110" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="360" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="20">2.</text>
                    <text x="240" y="360" text-anchor="start" fill="#fff" font-size="18">Calendar the minimum effective dose</text>
                    <text x="240" y="395" text-anchor="start" fill="#888" font-size="15">150 min Zone 2 + 2 strength, recurring</text>
                    <rect x="150" y="450" width="800" height="110" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="500" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">3.</text>
                    <text x="240" y="500" text-anchor="start" fill="#fff" font-size="18">Design your environment tonight</text>
                    <text x="240" y="535" text-anchor="start" fill="#888" font-size="15">Snacks hidden, protein stocked, gear staged</text>
                    <rect x="150" y="590" width="800" height="110" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="640" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">4.</text>
                    <text x="240" y="640" text-anchor="start" fill="#fff" font-size="18">Book your dashboard labs</text>
                    <text x="240" y="675" text-anchor="start" fill="#888" font-size="15">Include fasting insulin and ApoB — then review</text>
                    <rect x="150" y="730" width="800" height="110" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="780" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="20">5.</text>
                    <text x="240" y="780" text-anchor="start" fill="#fff" font-size="18">Open your decade page</text>
                    <text x="240" y="815" text-anchor="start" fill="#888" font-size="15">One adjustment your decade demands</text>
                    <rect x="150" y="880" width="800" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="930" text-anchor="middle" fill="#ffd700" font-size="19">Step 1 takes ninety seconds. Start there.</text>
                </svg>`,
                caption: "Twelve lessons of knowledge, converted into a running system"
            }
        },
        {
            type: "quiz",
            question: "Which statement best captures the central thesis of this entire book?",
            options: [
                { text: "Aging is genetically programmed, so metabolic decline can only be accepted gracefully", correct: false },
                { text: "Metabolism collapses at 40, so midlife requires ever-stricter calorie restriction", correct: false },
                { text: "Metabolic health — built through muscle, mitochondria, food, sleep, and stress management — is largely within your control and forms the foundation of healthy aging", correct: true },
                { text: "New drugs like GLP-1s and metformin now make lifestyle changes largely unnecessary", correct: false }
            ],
            explanation: "The book's spine is the causal chain: muscle and mitochondria drive insulin sensitivity, which stabilizes glucose, which lowers inflammation, which is what healthy aging is made of. Pontzer 2021 dismantled the collapsing-metabolism story, and only ~12% of US adults are metabolically healthy — not because genes doomed the other 88%, but because the inputs drifted. Drugs are becoming powerful allies, but no pill yet matches exercise, diet, and sleep for human outcome data. The levers are yours.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">FINAL KNOWLEDGE CHECK</text>
                    <rect x="150" y="130" width="800" height="200" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="190" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE WHOLE BOOK, ONE LINE</text>
                    <text x="550" y="235" text-anchor="middle" fill="#fff" font-size="17">Muscle + mitochondria, insulin sensitivity,</text>
                    <text x="550" y="268" text-anchor="middle" fill="#888" font-size="16">stable glucose, low inflammation... then what?</text>
                    <rect x="200" y="390" width="700" height="170" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="450" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">TWELVE LESSONS</text>
                    <text x="550" y="490" text-anchor="middle" fill="#fff" font-size="17">One chain. Five pillars. Your levers.</text>
                    <text x="550" y="523" text-anchor="middle" fill="#888" font-size="15">What was the point of it all?</text>
                </svg>`,
                caption: "The final check: can you state the thesis?"
            }
        },
        {
            type: "quote",
            content: "We don't stop playing because we grow old; we grow old because we stop playing.",
            author: "George Bernard Shaw",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">YOUR FUTURE SELF</text>
                    <rect x="100" y="140" width="900" height="220" rx="20" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="215" text-anchor="middle" fill="#fff" font-style="italic" font-size="22">'We don't stop playing because we grow old;</text>
                    <text x="550" y="260" text-anchor="middle" fill="#fff" font-style="italic" font-size="22">we grow old because we stop playing.'</text>
                    <text x="880" y="320" text-anchor="end" fill="#8b5cf6" font-size="18">— George Bernard Shaw</text>
                    <rect x="100" y="420" width="900" height="330" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="480" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">THE PERSON YOU'RE BUILDING</text>
                    <text x="550" y="535" text-anchor="middle" fill="#fff" font-size="18">Carries the groceries. Lifts the grandkid.</text>
                    <text x="550" y="575" text-anchor="middle" fill="#fff" font-size="18">Climbs the trail. Travels light and alone.</text>
                    <text x="550" y="615" text-anchor="middle" fill="#fff" font-size="18">Stays sharp, steady, and independent.</text>
                    <text x="550" y="670" text-anchor="middle" fill="#888" font-size="16">Built from stable glucose, strong muscle,</text>
                    <text x="550" y="703" text-anchor="middle" fill="#888" font-size="16">deep sleep, and thirty years of ordinary Tuesdays</text>
                    <rect x="100" y="810" width="900" height="100" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="855" text-anchor="middle" fill="#ffd700" font-size="20">Your future self is under construction right now</text>
                    <text x="550" y="890" text-anchor="middle" fill="#fff" font-size="17">Every meal, every session, every night of sleep is a brick</text>
                </svg>`,
                caption: "Keep playing — your 80-year-old self is counting on you"
            }
        }
    ]
}
    ]
};
