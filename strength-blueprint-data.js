// External book module — The Strength Blueprint: Lifting for Life
// Registered in integrateExternalCategories() in data.js; loaded via index.html.
window.STRENGTH_BLUEPRINT_BOOK = {
    id: "strength-blueprint",
    title: "The Strength Blueprint: Lifting for Life",
    author: "Synthesis Curriculum",
    description: "A complete how-to for strength training at any age — form for the six movement patterns, progressive overload, evidence-based programming, and home-vs-gym setups that make lifting a lifelong habit.",
    lessons: 12,
    duration: 84,
    progress: 0,
    category: "health",
    featured: true,
    lessonList: [
{
    id: 1,
    title: "Why Lifting Is Longevity",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "The Organ Nobody Told You About",
            content: "Quick question: what is the largest organ in your body that doctors almost never talk about?\n\nIt's your skeletal muscle — roughly 40% of your body weight, and one of the most powerful predictors of how long and how well you'll live. Not your cholesterol. Not your step count. Your muscle.\n\nHere's the uncomfortable part: from about age 30 onward, that organ is quietly shrinking. Every decade, a little more slips away — and with it goes your metabolism, your balance, your independence, and a surprising chunk of your disease resistance.\n\nThe good news? Unlike most things that decline with age, this one is almost entirely reversible, at any age, with a simple tool: progressive resistance training. In this lesson you'll see the research — real studies, real numbers — showing why lifting weights is less about biceps and more about buying yourself extra healthy years. Fair warning: by the end, you may never look at a dumbbell the same way again.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE LONGEVITY ORGAN</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Muscle does far more than move you</text>
                    <circle cx="550" cy="330" r="130" fill="rgba(99,102,241,0.2)" stroke="#6366f1" stroke-width="3"/>
                    <text x="550" y="320" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="30">MUSCLE</text>
                    <text x="550" y="360" text-anchor="middle" fill="#fff" font-size="18">40% of your body</text>
                    <rect x="80" y="560" width="290" height="160" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="225" y="625" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">MOVES YOU</text>
                    <text x="225" y="665" text-anchor="middle" fill="#888" font-size="16">Strength and balance</text>
                    <rect x="405" y="560" width="290" height="160" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="625" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">FUELS YOU</text>
                    <text x="550" y="665" text-anchor="middle" fill="#888" font-size="16">Stores and burns glucose</text>
                    <rect x="730" y="560" width="290" height="160" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="875" y="625" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">PROTECTS YOU</text>
                    <text x="875" y="665" text-anchor="middle" fill="#888" font-size="16">Reserve for illness</text>
                    <line x1="430" y1="420" x2="225" y2="560" stroke="#ffd700" stroke-width="2" stroke-dasharray="6" opacity="0.5"/>
                    <line x1="550" y1="460" x2="550" y2="560" stroke="#ffd700" stroke-width="2" stroke-dasharray="6" opacity="0.5"/>
                    <line x1="670" y1="420" x2="875" y2="560" stroke="#ffd700" stroke-width="2" stroke-dasharray="6" opacity="0.5"/>
                    <rect x="200" y="800" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="850" text-anchor="middle" fill="#ffd700" font-size="20">One organ, three jobs — all trainable</text>
                </svg>`,
                caption: "Skeletal muscle: the overlooked organ of longevity"
            }
        },
        {
            type: "concept",
            title: "Sarcopenia: The Slow Leak",
            content: "**Sarcopenia** — from the Greek for 'poverty of flesh' — is the age-related loss of muscle mass and strength. It's not a rare disease. It's the default trajectory of every human body that doesn't fight back.\n\nThe numbers researchers consistently report:\n• Adults lose roughly **3-8% of muscle mass per decade** after age 30\n• After **age 60**, the rate accelerates sharply\n• Strength declines even **faster** than mass — the nervous system's ability to recruit muscle fades too\n• By their 80s, many adults have lost **30-50%** of their peak muscle\n\nWhy does this matter beyond looking less toned? Because muscle is your buffer against life. Falls become fractures when there's no strength to catch yourself. A week of hospital bed rest strips muscle from an older adult that can take months to rebuild — if it comes back at all.\n\nHere's the crucial reframe: sarcopenia isn't purely 'aging.' A large share of it is **disuse** — decades of never asking muscle to do hard things. And disuse has a direct antidote. Muscle tissue remains responsive to training into your 90s. The leak is real, but you're holding the wrench.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE SLOW LEAK</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Muscle mass by decade without training</text>
                    <line x1="120" y1="760" x2="1000" y2="760" stroke="#888" stroke-width="2"/>
                    <rect x="150" y="260" width="110" height="500" rx="10" fill="rgba(16,185,129,0.35)" stroke="#10b981" stroke-width="2"/>
                    <text x="205" y="810" text-anchor="middle" fill="#fff" font-size="20">30s</text>
                    <rect x="290" y="310" width="110" height="450" rx="10" fill="rgba(16,185,129,0.3)" stroke="#10b981" stroke-width="2"/>
                    <text x="345" y="810" text-anchor="middle" fill="#fff" font-size="20">40s</text>
                    <rect x="430" y="370" width="110" height="390" rx="10" fill="rgba(245,158,11,0.3)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="485" y="810" text-anchor="middle" fill="#fff" font-size="20">50s</text>
                    <rect x="570" y="440" width="110" height="320" rx="10" fill="rgba(245,158,11,0.3)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="625" y="810" text-anchor="middle" fill="#fff" font-size="20">60s</text>
                    <rect x="710" y="540" width="110" height="220" rx="10" fill="rgba(239,68,68,0.3)" stroke="#ef4444" stroke-width="2"/>
                    <text x="765" y="810" text-anchor="middle" fill="#fff" font-size="20">70s</text>
                    <rect x="850" y="620" width="110" height="140" rx="10" fill="rgba(239,68,68,0.3)" stroke="#ef4444" stroke-width="2"/>
                    <text x="905" y="810" text-anchor="middle" fill="#fff" font-size="20">80s</text>
                    <text x="205" y="235" text-anchor="middle" fill="#10b981" font-size="18">Peak</text>
                    <text x="765" y="515" text-anchor="middle" fill="#ef4444" font-size="16">Loss speeds up</text>
                    <rect x="150" y="880" width="800" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="920" text-anchor="middle" fill="#ffd700" font-size="20">3-8% lost per decade after 30</text>
                    <text x="550" y="952" text-anchor="middle" fill="#888" font-size="16">Faster after 60 — unless you train</text>
                </svg>`,
                caption: "The untrained trajectory: steady loss that accelerates after 60"
            }
        },
        {
            type: "concept",
            title: "Muscle Is Metabolic Armor",
            content: "Think of muscle as your body's biggest fuel tank — and its best insurance policy.\n\n**Muscle as a glucose sink.** Skeletal muscle is where the majority of the glucose from your meals gets disposed of when insulin does its job — researchers estimate muscle handles roughly **70-80%** of insulin-stimulated glucose uptake. More muscle, and more *trained* muscle, means blood sugar has somewhere useful to go instead of lingering in your bloodstream. That's a direct lever on **type 2 diabetes risk**, and it's why resistance training keeps showing up in diabetes-prevention guidelines.\n\n**Muscle as an endocrine organ.** When muscle contracts, it releases signaling molecules called **myokines** that talk to your brain, bones, immune system, and fat tissue. Exercised muscle is literally sending anti-inflammatory chemical mail to the rest of your body.\n\n**Muscle as a protein reserve.** During serious illness, surgery, or injury, your body raids muscle for amino acids to fuel the immune system and repair tissue. People who enter a health crisis with more muscle simply have **deeper reserves to survive it** — one reason muscle mass keeps correlating with better outcomes in hospital studies.\n\nThat's the armor. Lifting is how you forge it.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">METABOLIC ARMOR</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Three ways muscle defends your health</text>
                    <circle cx="550" cy="380" r="120" fill="rgba(99,102,241,0.25)" stroke="#6366f1" stroke-width="3"/>
                    <text x="550" y="390" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="28">MUSCLE</text>
                    <rect x="70" y="620" width="300" height="200" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="220" y="680" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="20">GLUCOSE SINK</text>
                    <text x="220" y="720" text-anchor="middle" fill="#fff" font-size="16">Absorbs 70-80% of</text>
                    <text x="220" y="750" text-anchor="middle" fill="#fff" font-size="16">insulin-driven glucose</text>
                    <rect x="400" y="620" width="300" height="200" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="680" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">MYOKINES</text>
                    <text x="550" y="720" text-anchor="middle" fill="#fff" font-size="16">Anti-inflammatory</text>
                    <text x="550" y="750" text-anchor="middle" fill="#fff" font-size="16">signals to organs</text>
                    <rect x="730" y="620" width="300" height="200" rx="20" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="880" y="680" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">RESERVE TANK</text>
                    <text x="880" y="720" text-anchor="middle" fill="#fff" font-size="16">Amino acids for</text>
                    <text x="880" y="750" text-anchor="middle" fill="#fff" font-size="16">illness and repair</text>
                    <line x1="450" y1="470" x2="220" y2="620" stroke="#14b8a6" stroke-width="2" stroke-dasharray="6" opacity="0.6"/>
                    <line x1="550" y1="500" x2="550" y2="620" stroke="#14b8a6" stroke-width="2" stroke-dasharray="6" opacity="0.6"/>
                    <line x1="650" y1="470" x2="880" y2="620" stroke="#14b8a6" stroke-width="2" stroke-dasharray="6" opacity="0.6"/>
                    <rect x="200" y="900" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="950" text-anchor="middle" fill="#ffd700" font-size="20">More trained muscle = deeper defenses</text>
                </svg>`,
                caption: "Muscle defends blood sugar, calms inflammation, and stocks reserves"
            }
        },
        {
            type: "example",
            title: "The Handshake That Predicts the Future",
            content: "In 2015, *The Lancet* published results from the **PURE study** — the Prospective Urban Rural Epidemiology project — which followed nearly **140,000 adults across 17 countries** for about four years. Researchers measured something almost comically simple: how hard each person could squeeze a handgrip dynamometer.\n\nThe result stunned a lot of clinicians. Every **5 kg decrease in grip strength** was associated with roughly a **16% higher risk of death from any cause** during follow-up — plus higher risks of heart attack and stroke. In this dataset, grip strength was a *stronger* predictor of early death than systolic blood pressure.\n\nTo be clear about what this does and doesn't mean: it's observational data, so grip strength isn't magic — it's a **proxy for total-body strength and muscle health**. Squeezing a stress ball all day won't save you. But it tells you what your body is quietly reporting to anyone who shakes your hand: how much strength reserve you're carrying into the future.\n\nThe practical takeaway is simple. Strength is measurable, strength predicts outcomes, and — unlike your age or your genes — strength is something you can change starting this week.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE PURE STUDY</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">The Lancet, 2015 — grip strength and mortality</text>
                    <rect x="100" y="170" width="430" height="170" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="315" y="235" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="26">139,691 adults</text>
                    <text x="315" y="280" text-anchor="middle" fill="#fff" font-size="18">Followed about 4 years</text>
                    <rect x="570" y="170" width="430" height="170" rx="20" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="785" y="235" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="26">17 countries</text>
                    <text x="785" y="280" text-anchor="middle" fill="#fff" font-size="18">Rich and poor alike</text>
                    <rect x="150" y="420" width="800" height="220" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="490" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="26">Each 5 kg lower grip strength</text>
                    <text x="550" y="545" text-anchor="middle" fill="#fff" font-size="22">= about 16% higher risk of death</text>
                    <text x="550" y="590" text-anchor="middle" fill="#888" font-size="18">from any cause during follow-up</text>
                    <rect x="150" y="710" width="800" height="130" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="765" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">Grip beat blood pressure</text>
                    <text x="550" y="805" text-anchor="middle" fill="#fff" font-size="17">as a predictor of early death in this dataset</text>
                    <rect x="200" y="900" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="950" text-anchor="middle" fill="#ffd700" font-size="19">Grip is a window into whole-body strength</text>
                </svg>`,
                caption: "PURE study: weaker grip, higher mortality risk — across 17 countries"
            }
        },
        {
            type: "quiz",
            question: "In the PURE study (The Lancet, 2015), what was each 5 kg decrease in grip strength associated with?",
            options: [
                { text: "About a 16% higher risk of death from any cause", correct: true },
                { text: "A 50% higher risk of death, but only in people over 70", correct: false },
                { text: "Nothing — grip strength only predicted arthritis risk", correct: false },
                { text: "Higher mortality, but only in high-income countries", correct: false }
            ],
            explanation: "Across nearly 140,000 adults in 17 countries, every 5 kg drop in grip strength was associated with roughly a 16% higher all-cause mortality risk — in rich and poor countries alike, and across age groups. The tempting distractor is the age-limited one, but the association held broadly. Remember the caveat: grip is a proxy for whole-body strength, not a magic muscle — which is exactly why full-body training matters.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="140" width="800" height="200" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="205" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="24">GRIP STRENGTH</text>
                    <text x="550" y="255" text-anchor="middle" fill="#fff" font-size="19">A simple squeeze that predicts mortality</text>
                    <text x="550" y="295" text-anchor="middle" fill="#888" font-size="16">PURE study — 139,691 adults, 17 countries</text>
                    <rect x="250" y="420" width="600" height="150" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="485" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="24">-5 kg grip</text>
                    <text x="550" y="530" text-anchor="middle" fill="#fff" font-size="19">= how much extra risk?</text>
                    <rect x="250" y="640" width="600" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="695" text-anchor="middle" fill="#ffd700" font-size="19">Think back to the numbers you just saw</text>
                </svg>`,
                caption: "Test your understanding of the grip strength research"
            }
        },
        {
            type: "concept",
            title: "The Dose Is Smaller Than You Think",
            content: "Here's the objection everyone raises: 'I don't have time to live at the gym.' The research says you don't need to.\n\nIn 2022, **Momma and colleagues** published a meta-analysis in the *British Journal of Sports Medicine* pooling 16 prospective studies with over **1.5 million participants**. The question: how much resistance training is associated with living longer?\n\nThe findings:\n• **30-60 minutes per week** of resistance training was associated with roughly **10-17% lower risk** of all-cause mortality, cardiovascular disease, and cancer\n• That's *total weekly* time — two or three short sessions\n• Benefits appeared **independent of aerobic exercise**, and combining both was best of all\n\nOne honest wrinkle: the analysis found a **J-shaped curve** for some outcomes — benefits appeared to plateau, and possibly fade, at very high weekly volumes. Scientists are still debating whether that dip is real or a statistical artifact. Either way, the actionable news is at the *low* end: the biggest jump in benefit comes from going from **zero to some**.\n\nRemember, this is observational research — associations, not guaranteed causation. But it lines up with everything we know about muscle physiology. Thirty minutes a week is not a big ask for a 10-17% edge.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">A SMALL WEEKLY DOSE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Momma et al. 2022 — BJSM meta-analysis</text>
                    <rect x="150" y="170" width="800" height="150" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="550" y="230" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="24">16 studies, 1.5+ million people</text>
                    <text x="550" y="275" text-anchor="middle" fill="#fff" font-size="18">Prospective cohorts, pooled together</text>
                    <rect x="150" y="380" width="380" height="180" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="340" y="445" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="26">30-60 min</text>
                    <text x="340" y="490" text-anchor="middle" fill="#fff" font-size="19">of lifting per WEEK</text>
                    <path d="M560 470 L640 470" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="640,470 626,461 626,479" fill="#14b8a6"/>
                    <rect x="670" y="380" width="280" height="180" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="810" y="445" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="26">10-17%</text>
                    <text x="810" y="490" text-anchor="middle" fill="#fff" font-size="17">lower risk</text>
                    <rect x="120" y="640" width="270" height="120" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="255" y="690" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="18">ALL-CAUSE</text>
                    <text x="255" y="725" text-anchor="middle" fill="#888" font-size="15">mortality</text>
                    <rect x="415" y="640" width="270" height="120" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="550" y="690" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="18">HEART DISEASE</text>
                    <text x="550" y="725" text-anchor="middle" fill="#888" font-size="15">cardiovascular</text>
                    <rect x="710" y="640" width="270" height="120" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="845" y="690" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="18">CANCER</text>
                    <text x="845" y="725" text-anchor="middle" fill="#888" font-size="15">overall risk</text>
                    <rect x="150" y="840" width="800" height="90" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="880" text-anchor="middle" fill="#f59e0b" font-size="18">Honest note: benefits plateau at high volumes</text>
                    <text x="550" y="912" text-anchor="middle" fill="#888" font-size="16">The biggest win is going from zero to some</text>
                </svg>`,
                caption: "30-60 minutes of lifting per week: a measurable longevity edge"
            }
        },
        {
            type: "visual",
            title: "The Dose-Response Curve",
            content: "Picture the relationship as a curve. Risk drops steeply as you go from **zero lifting to about an hour a week** — that's where most of the benefit lives. Past that, the curve flattens; in some analyses it even bends slightly back up at very high volumes, though researchers debate whether that uptick is real. The shape teaches a liberating lesson: for *longevity* specifically, you don't need heroic gym hours. You need consistency at a modest dose. More training still builds more muscle and strength — but the mortality curve rewards showing up, not living there.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">DOSE AND RESPONSE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Mortality risk vs weekly lifting time</text>
                    <line x1="150" y1="750" x2="1000" y2="750" stroke="#888" stroke-width="2"/>
                    <line x1="150" y1="750" x2="150" y2="200" stroke="#888" stroke-width="2"/>
                    <text x="575" y="800" text-anchor="middle" fill="#888" font-size="18">Minutes of lifting per week</text>
                    <text x="110" y="480" text-anchor="middle" fill="#888" font-size="18" transform="rotate(-90 110 480)">Relative risk</text>
                    <path d="M150 280 L280 420 L420 530 L560 570 L700 565 L850 545 L980 520" stroke="#10b981" stroke-width="4" fill="none"/>
                    <circle cx="150" cy="280" r="10" fill="#ef4444"/>
                    <text x="215" y="255" text-anchor="middle" fill="#ef4444" font-size="17">Zero: highest risk</text>
                    <circle cx="490" cy="552" r="10" fill="#ffd700"/>
                    <text x="490" y="620" text-anchor="middle" fill="#ffd700" font-size="17">30-60 min: sweet spot</text>
                    <text x="850" y="480" text-anchor="middle" fill="#888" font-size="16">Plateau (debated uptick)</text>
                    <text x="290" y="825" text-anchor="middle" fill="#666" font-size="15">30</text>
                    <text x="490" y="825" text-anchor="middle" fill="#666" font-size="15">60</text>
                    <text x="700" y="825" text-anchor="middle" fill="#666" font-size="15">120</text>
                    <text x="900" y="825" text-anchor="middle" fill="#666" font-size="15">180+</text>
                    <rect x="200" y="900" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="950" text-anchor="middle" fill="#ffd700" font-size="20">Steepest gains: going from zero to some</text>
                </svg>`,
                caption: "Risk falls fastest in the first hour per week of lifting"
            }
        },
        {
            type: "example",
            title: "The 90-Year-Olds Who Tripled Their Strength",
            content: "If you think you've missed your window, meet the residents of the Hebrew Rehabilitation Center for Aged in Boston.\n\nIn 1990, Dr. **Maria Fiatarone** and her team at Tufts published a study in *JAMA* that broke everyone's assumptions about aging. Her subjects: **frail nursing home residents aged 86 to 96** — several used canes or walkers, some had a history of falls. Her intervention: **8 weeks of supervised, high-intensity leg strength training**, three times a week, at about 80% of their maximum.\n\nThe results:\n• Strength gains averaged about **174%** — nearly *tripling* their starting strength\n• Mid-thigh muscle area increased around **9%** — real new tissue, at 90+\n• Walking speed improved measurably; two participants **stopped needing their canes**\n\nEight weeks. Nonagenarians. That's the punchline of this entire lesson: muscle never stops listening. The signal — progressive resistance — works whether you're 25 or 95.\n\nOne sensible caveat: Fiatarone's subjects trained under medical supervision. If you're older, frail, or managing health conditions, that's your model too — this isn't medical advice, so clear a new training program with your doctor first. Then start. The data says your muscles are waiting.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">NEVER TOO LATE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Fiatarone 1990 — JAMA nursing home study</text>
                    <rect x="80" y="180" width="300" height="180" rx="20" fill="rgba(99,102,241,0.15)" stroke="#6366f1" stroke-width="2"/>
                    <text x="230" y="245" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="24">AGES 86-96</text>
                    <text x="230" y="290" text-anchor="middle" fill="#fff" font-size="17">Frail nursing home</text>
                    <text x="230" y="320" text-anchor="middle" fill="#fff" font-size="17">residents</text>
                    <rect x="400" y="180" width="300" height="180" rx="20" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="245" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="24">8 WEEKS</text>
                    <text x="550" y="290" text-anchor="middle" fill="#fff" font-size="17">Supervised leg</text>
                    <text x="550" y="320" text-anchor="middle" fill="#fff" font-size="17">training, 3x weekly</text>
                    <rect x="720" y="180" width="300" height="180" rx="20" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="870" y="245" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="24">80% MAX</text>
                    <text x="870" y="290" text-anchor="middle" fill="#fff" font-size="17">Genuinely heavy,</text>
                    <text x="870" y="320" text-anchor="middle" fill="#fff" font-size="17">not token effort</text>
                    <rect x="150" y="440" width="800" height="200" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="3"/>
                    <text x="550" y="515" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="36">+174% STRENGTH</text>
                    <text x="550" y="565" text-anchor="middle" fill="#fff" font-size="20">Average gain — nearly triple their start</text>
                    <text x="550" y="605" text-anchor="middle" fill="#888" font-size="17">Plus about 9% more mid-thigh muscle area</text>
                    <rect x="150" y="710" width="800" height="120" rx="20" fill="rgba(59,130,246,0.12)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="550" y="760" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="19">Faster walking — two retired their canes</text>
                    <text x="550" y="800" text-anchor="middle" fill="#888" font-size="16">Function returned with strength</text>
                    <rect x="200" y="890" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="940" text-anchor="middle" fill="#ffd700" font-size="20">Muscle responds to training at ANY age</text>
                </svg>`,
                caption: "Fiatarone 1990: nonagenarians nearly tripled their strength in 8 weeks"
            }
        },
        {
            type: "concept",
            title: "Three Myths, Three Funerals",
            content: "Let's bury the three excuses that keep people off the weight floor.\n\n**Myth 1: 'Lifting will make me bulky.'** Visible muscle mass is *slow and hard-won* — advanced lifters celebrate gaining a few pounds of muscle in a **year**, eating and training specifically for it. Nobody accidentally becomes a bodybuilder, the same way nobody accidentally wins a marathon. What beginners actually get: firmer, denser, more capable — not bulky.\n\n**Myth 2: 'Lifting is dangerous.'** Injury surveillance studies consistently put resistance training at roughly **2-4 injuries per 1,000 hours** of participation — *lower* than soccer, basketball, and running. The barbell doesn't tackle you. Most lifting injuries trace to ego (too much load, too fast) — which is a behavior problem with a simple fix you'll learn in Lesson 3: form first.\n\n**Myth 3: 'I'm too old to start.'** You just met the 90-year-olds who tripled their strength. The research shows older adults gain strength at *proportionally similar rates* to younger ones. The riskiest choice for an aging body isn't lifting — it's **not** lifting, and meeting your 80s with no reserve.\n\nEvery one of these myths shrinks when you look at it directly. That's what data is for.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">MYTH VS REALITY</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Three excuses under the microscope</text>
                    <rect x="70" y="170" width="450" height="170" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="295" y="230" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">I WILL GET BULKY</text>
                    <text x="295" y="275" text-anchor="middle" fill="#888" font-size="16">Fear of accidental mass</text>
                    <rect x="580" y="170" width="450" height="170" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="805" y="230" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">MUSCLE IS SLOW</text>
                    <text x="805" y="272" text-anchor="middle" fill="#fff" font-size="16">A few pounds a year is a</text>
                    <text x="805" y="302" text-anchor="middle" fill="#fff" font-size="16">win even for experts</text>
                    <rect x="70" y="400" width="450" height="170" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="295" y="460" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">IT IS DANGEROUS</text>
                    <text x="295" y="505" text-anchor="middle" fill="#888" font-size="16">Fear of getting hurt</text>
                    <rect x="580" y="400" width="450" height="170" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="805" y="460" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">2-4 PER 1,000 HRS</text>
                    <text x="805" y="502" text-anchor="middle" fill="#fff" font-size="16">Fewer injuries than soccer,</text>
                    <text x="805" y="532" text-anchor="middle" fill="#fff" font-size="16">basketball, or running</text>
                    <rect x="70" y="630" width="450" height="170" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="295" y="690" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">I AM TOO OLD</text>
                    <text x="295" y="735" text-anchor="middle" fill="#888" font-size="16">Fear the window closed</text>
                    <rect x="580" y="630" width="450" height="170" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="805" y="690" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">90+ STILL GAINS</text>
                    <text x="805" y="732" text-anchor="middle" fill="#fff" font-size="16">Fiatarone: +174% strength</text>
                    <text x="805" y="762" text-anchor="middle" fill="#fff" font-size="16">at ages 86-96</text>
                    <rect x="200" y="880" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="930" text-anchor="middle" fill="#ffd700" font-size="20">Every myth shrinks under real data</text>
                </svg>`,
                caption: "Bulky, dangerous, too old — all three collapse against the evidence"
            }
        },
        {
            type: "application",
            title: "Your First Move This Week",
            content: "You don't need a program yet — the next lessons build that. This week, you need momentum.\n\n1. **Measure your baseline** — Time how long you can stand from a chair 5 times without using your hands, and note it. That's a legitimate strength marker researchers actually use.\n\n2. **Book your dose** — Put two 30-minute blocks on your calendar this week labeled 'strength.' The Momma meta-analysis dose is 30-60 minutes weekly — you're scheduling exactly that.\n\n3. **Do the simplest session** — In each block: chair squats, wall or incline push-ups, and a light carry (walk holding grocery bags or heavy books). 2-3 sets each, stopping while you could still do a couple more reps.\n\n4. **Clear the runway if needed** — If you have heart disease, uncontrolled blood pressure, joint replacements, or any condition that worries you, message your doctor today to green-light training. This course isn't medical advice; your physician knows your history.\n\n5. **Tell one person** — Accountability roughly doubles follow-through. Text someone: 'I'm starting strength training this week.'\n\nSmall, scheduled, done. That's how every lifelong lifter started.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THIS WEEK'S PLAN</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Five moves to build momentum</text>
                    <rect x="150" y="160" width="800" height="110" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="212" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="22">1.</text>
                    <text x="245" y="212" text-anchor="start" fill="#fff" font-size="19">Measure: 5 chair stands, hands-free</text>
                    <text x="245" y="245" text-anchor="start" fill="#888" font-size="15">Note your time — it is your baseline</text>
                    <rect x="150" y="300" width="800" height="110" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="352" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="22">2.</text>
                    <text x="245" y="352" text-anchor="start" fill="#fff" font-size="19">Schedule two 30-minute strength blocks</text>
                    <text x="245" y="385" text-anchor="start" fill="#888" font-size="15">The exact research-backed weekly dose</text>
                    <rect x="150" y="440" width="800" height="110" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="492" text-anchor="start" fill="#10b981" font-weight="bold" font-size="22">3.</text>
                    <text x="245" y="492" text-anchor="start" fill="#fff" font-size="19">Do chair squats, push-ups, carries</text>
                    <text x="245" y="525" text-anchor="start" fill="#888" font-size="15">2-3 sets, stop with reps left in the tank</text>
                    <rect x="150" y="580" width="800" height="110" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="632" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="22">4.</text>
                    <text x="245" y="632" text-anchor="start" fill="#fff" font-size="19">Health conditions? Ask your doctor first</text>
                    <text x="245" y="665" text-anchor="start" fill="#888" font-size="15">One message today clears the runway</text>
                    <rect x="150" y="720" width="800" height="110" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="772" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="22">5.</text>
                    <text x="245" y="772" text-anchor="start" fill="#fff" font-size="19">Tell one person you are starting</text>
                    <text x="245" y="805" text-anchor="start" fill="#888" font-size="15">Accountability doubles follow-through</text>
                    <rect x="200" y="890" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="940" text-anchor="middle" fill="#ffd700" font-size="20">Small, scheduled, done</text>
                </svg>`,
                caption: "Your five-step launch plan for this week"
            }
        },
        {
            type: "quote",
            content: "We do not stop exercising because we grow old — we grow old because we stop exercising.",
            author: "Dr. Kenneth Cooper",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">WISDOM</text>
                    <rect x="100" y="180" width="900" height="260" rx="20" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="160" y="260" text-anchor="start" fill="#fff" font-style="italic" font-size="24">We do not stop exercising</text>
                    <text x="160" y="305" text-anchor="start" fill="#fff" font-style="italic" font-size="24">because we grow old — we grow old</text>
                    <text x="160" y="350" text-anchor="start" fill="#fff" font-style="italic" font-size="24">because we stop exercising.</text>
                    <text x="940" y="405" text-anchor="end" fill="#8b5cf6" font-size="19">— Dr. Kenneth Cooper</text>
                    <circle cx="550" cy="620" r="90" fill="rgba(255,215,0,0.08)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="612" text-anchor="middle" fill="#ffd700" font-size="18">Cause and</text>
                    <text x="550" y="644" text-anchor="middle" fill="#ffd700" font-size="18">effect, reversed</text>
                    <rect x="200" y="790" width="700" height="80" rx="20" fill="rgba(255,255,255,0.05)" stroke="#888" stroke-width="1"/>
                    <text x="550" y="840" text-anchor="middle" fill="#888" font-size="18">The father of the aerobics movement, on decline</text>
                </svg>`,
                caption: "A moment of reflection on aging and movement"
            }
        },
        {
            type: "quiz",
            question: "According to the Momma et al. 2022 meta-analysis in the British Journal of Sports Medicine, what weekly amount of resistance training was associated with a 10-17% lower risk of all-cause mortality, CVD, and cancer?",
            options: [
                { text: "At least 5 hours per week, spread over daily sessions", correct: false },
                { text: "30-60 minutes total per week", correct: true },
                { text: "30-60 minutes per day, every day", correct: false },
                { text: "Any amount, as long as it replaces all cardio", correct: false }
            ],
            explanation: "Just 30-60 minutes of resistance training per WEEK — not per day — was associated with 10-17% lower risk of all-cause mortality, cardiovascular disease, and cancer across 1.5+ million participants. The per-day option is the classic misreading, and it matters: the real dose fits into two short sessions. Note the honest caveat — benefits plateaued (and possibly reversed for some outcomes) at very high volumes, and lifting complements cardio rather than replacing it.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="140" width="800" height="200" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="205" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="24">THE WEEKLY DOSE</text>
                    <text x="550" y="255" text-anchor="middle" fill="#fff" font-size="19">Momma et al. 2022 — 1.5+ million people</text>
                    <text x="550" y="295" text-anchor="middle" fill="#888" font-size="16">How much lifting for the longevity edge?</text>
                    <rect x="250" y="420" width="600" height="160" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="485" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="26">? minutes per ?</text>
                    <text x="550" y="535" text-anchor="middle" fill="#fff" font-size="18">The unit matters as much as the number</text>
                    <rect x="250" y="650" width="600" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="705" text-anchor="middle" fill="#ffd700" font-size="19">Careful — one option is off by a factor of 7</text>
                </svg>`,
                caption: "Final check: the research-backed weekly dose"
            }
        }
    ]
},
{
    id: 2,
    title: "The Language of the Gym",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "Fluent in Barbell in Seven Minutes",
            content: "Imagine opening a workout program and reading: '3x8 @ RPE 7, rest 2-3 min.' To a beginner, that's hieroglyphics. To a lifter, it's a complete sentence — it says exactly what to do, how hard to push, and how long to breathe between efforts.\n\nHere's the thing nobody tells you: most gym intimidation isn't about the weights. It's about the *language*. When every program, video, and forum post assumes you know what a 'working set' is or what '2 RIR' means, it's easy to feel locked out of a club you never got the password to.\n\nThis lesson is the password. In the next few minutes you'll learn the small set of terms that describe every strength program ever written: sets, reps, load, effort scales, tempo, and rest. None of it is complicated — it's maybe a dozen words. But once you own them, you can read any program, follow any coach, and — most importantly — understand *why* your training is built the way it is. Fluency starts now.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">SPEAK BARBELL</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">One line of code, fully decoded ahead</text>
                    <rect x="150" y="200" width="800" height="160" rx="20" fill="rgba(99,102,241,0.15)" stroke="#6366f1" stroke-width="3"/>
                    <text x="550" y="290" text-anchor="middle" fill="#fff" font-weight="bold" font-size="40">3x8 @ RPE 7</text>
                    <rect x="100" y="470" width="280" height="150" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="240" y="530" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">HOW MANY</text>
                    <text x="240" y="570" text-anchor="middle" fill="#888" font-size="16">Sets and reps</text>
                    <rect x="410" y="470" width="280" height="150" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="530" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">HOW HARD</text>
                    <text x="550" y="570" text-anchor="middle" fill="#888" font-size="16">Effort scales</text>
                    <rect x="720" y="470" width="280" height="150" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="860" y="530" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">HOW LONG</text>
                    <text x="860" y="570" text-anchor="middle" fill="#888" font-size="16">Tempo and rest</text>
                    <line x1="350" y1="360" x2="240" y2="470" stroke="#14b8a6" stroke-width="2" stroke-dasharray="6" opacity="0.6"/>
                    <line x1="550" y1="360" x2="550" y2="470" stroke="#14b8a6" stroke-width="2" stroke-dasharray="6" opacity="0.6"/>
                    <line x1="750" y1="360" x2="860" y2="470" stroke="#14b8a6" stroke-width="2" stroke-dasharray="6" opacity="0.6"/>
                    <rect x="200" y="720" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="770" text-anchor="middle" fill="#ffd700" font-size="20">A dozen words unlock every program</text>
                </svg>`,
                caption: "Every strength program is written in the same short vocabulary"
            }
        },
        {
            type: "concept",
            title: "Sets, Reps, and Load: The Atoms",
            content: "Every workout ever written breaks down into three atoms.\n\n**Rep (repetition):** one complete movement — down and up on a squat, out and back on a press. Reps are the smallest unit of work.\n\n**Set:** a group of reps done back-to-back before you rest. Do 8 squats, rack the bar, breathe — that was one set of 8.\n\n**Load:** the weight you're moving, in pounds or kilos. Load is the variable that makes a set easy or brutal — 8 reps with an empty bar and 8 reps with 200 lb are different universes.\n\nWritten shorthand: **'3x8' means 3 sets of 8 reps** (sets first, reps second, nearly always). Add load and you get '3x8 @ 135 lb.'\n\nWhy do these atoms matter? Because **progressive overload** — the engine of all strength gain — is just nudging one of them upward over time: a little more load, an extra rep, an extra set. Your muscles adapt to what you ask of them, so the ask has to slowly grow. Track these three numbers and you're not just exercising — you're *training*, which means today's numbers exist to beat last month's.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE THREE ATOMS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Rep, set, load — everything is built from these</text>
                    <rect x="80" y="180" width="300" height="200" rx="20" fill="rgba(99,102,241,0.15)" stroke="#6366f1" stroke-width="2"/>
                    <text x="230" y="245" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="24">REP</text>
                    <text x="230" y="290" text-anchor="middle" fill="#fff" font-size="17">One complete</text>
                    <text x="230" y="320" text-anchor="middle" fill="#fff" font-size="17">movement</text>
                    <rect x="400" y="180" width="300" height="200" rx="20" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="245" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="24">SET</text>
                    <text x="550" y="290" text-anchor="middle" fill="#fff" font-size="17">Reps done together,</text>
                    <text x="550" y="320" text-anchor="middle" fill="#fff" font-size="17">then rest</text>
                    <rect x="720" y="180" width="300" height="200" rx="20" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="870" y="245" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="24">LOAD</text>
                    <text x="870" y="290" text-anchor="middle" fill="#fff" font-size="17">The weight on</text>
                    <text x="870" y="320" text-anchor="middle" fill="#fff" font-size="17">the bar</text>
                    <rect x="150" y="460" width="800" height="170" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="525" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="26">3x8 @ 135 lb</text>
                    <text x="550" y="575" text-anchor="middle" fill="#fff" font-size="19">= 3 sets of 8 reps with 135 pounds</text>
                    <rect x="150" y="700" width="800" height="150" rx="20" fill="rgba(59,130,246,0.12)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="550" y="755" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="20">PROGRESSIVE OVERLOAD</text>
                    <text x="550" y="800" text-anchor="middle" fill="#fff" font-size="17">Slowly raise reps, sets, or load over time</text>
                    <rect x="200" y="910" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="960" text-anchor="middle" fill="#ffd700" font-size="20">Track the atoms, and exercise becomes training</text>
                </svg>`,
                caption: "Reps build sets, load sets the difficulty, progression drives growth"
            }
        },
        {
            type: "concept",
            title: "Warm-Up Sets vs Working Sets",
            content: "Watch an experienced lifter squat and you'll notice something: they do the same exercise four or five times with different weights, but only some of those sets 'count.'\n\n**Warm-up sets** are light, easy sets that prepare you for the real work:\n• They **rehearse the movement pattern** while the load is forgiving\n• They warm tissues and joints and wake up the nervous system\n• They let you **feel out the day** — some days 135 feels light, some days heavy\n• They should never be exhausting — think 5 reps, then 3, then 1-2, climbing toward your target weight\n\n**Working sets** are the sets your program is actually prescribing — the challenging ones done at your target load and effort. When a program says '3x8,' it means **3 working sets**, not counting warm-ups.\n\nA typical squat session might look like: empty bar x10, 95x5, 135x3, 185x2 (all warm-ups), then 205 for 3x8 (the working sets).\n\nBeginners get this wrong in both directions — either skipping warm-ups entirely and going in cold, or turning warm-ups into exhausting extra workouts that steal energy from the sets that drive progress. The rule: **warm-ups prepare, working sets stimulate.** Save your effort for the sets that count.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE RAMP</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Warm-ups climb toward the sets that count</text>
                    <rect x="100" y="640" width="150" height="120" rx="12" fill="rgba(59,130,246,0.2)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="175" y="695" text-anchor="middle" fill="#3b82f6" font-size="17">Bar x10</text>
                    <text x="175" y="725" text-anchor="middle" fill="#888" font-size="14">warm-up</text>
                    <rect x="280" y="580" width="150" height="180" rx="12" fill="rgba(59,130,246,0.2)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="355" y="660" text-anchor="middle" fill="#3b82f6" font-size="17">95 x5</text>
                    <text x="355" y="690" text-anchor="middle" fill="#888" font-size="14">warm-up</text>
                    <rect x="460" y="500" width="150" height="260" rx="12" fill="rgba(59,130,246,0.2)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="535" y="615" text-anchor="middle" fill="#3b82f6" font-size="17">135 x3</text>
                    <text x="535" y="645" text-anchor="middle" fill="#888" font-size="14">warm-up</text>
                    <rect x="640" y="420" width="150" height="340" rx="12" fill="rgba(59,130,246,0.2)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="715" y="575" text-anchor="middle" fill="#3b82f6" font-size="17">185 x2</text>
                    <text x="715" y="605" text-anchor="middle" fill="#888" font-size="14">warm-up</text>
                    <rect x="820" y="300" width="180" height="460" rx="12" fill="rgba(16,185,129,0.25)" stroke="#10b981" stroke-width="3"/>
                    <text x="910" y="500" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">205 3x8</text>
                    <text x="910" y="535" text-anchor="middle" fill="#fff" font-size="15">WORKING SETS</text>
                    <line x1="100" y1="760" x2="1000" y2="760" stroke="#888" stroke-width="2"/>
                    <rect x="150" y="850" width="800" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="890" text-anchor="middle" fill="#ffd700" font-size="20">Warm-ups prepare, working sets stimulate</text>
                    <text x="550" y="922" text-anchor="middle" fill="#888" font-size="16">The 3x8 in your program means working sets only</text>
                </svg>`,
                caption: "A typical ramp: light rehearsal sets climbing to the working weight"
            }
        },
        {
            type: "example",
            title: "Decoding a Real Program Line",
            content: "Let's translate a real line the way a lifter reads it.\n\nThe program says: **'Squat — 3x8 @ RPE 7, rest 2-3 min.'**\n\nHere's the full decode:\n• **Squat** — the exercise\n• **3x8** — three working sets of eight reps each\n• **@ RPE 7** — effort level 7 out of 10: after each set, you should feel like you had about **3 more reps** in you (you'll meet RPE properly on the next cards)\n• **Rest 2-3 min** — set a timer and actually rest between sets; this isn't laziness, it's how you keep set 3 as strong as set 1\n\nSo the session looks like: warm up gradually, pick a weight where 8 reps leaves 3 in the tank, do 8, rest 2-3 minutes, repeat twice more. If set one felt like RPE 9 — barely got 8 — the weight's too heavy; drop it next set. If it felt like RPE 5, nudge it up.\n\nNotice what the line does NOT say: it doesn't prescribe an exact weight. That's deliberate. **Effort-based programs self-adjust** to your good days and bad days — the program tells you how hard to work, and the barbell tells you what that means today.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">FULL DECODE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Squat — 3x8 @ RPE 7, rest 2-3 min</text>
                    <rect x="150" y="170" width="800" height="130" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="222" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="22">SQUAT</text>
                    <text x="200" y="262" text-anchor="start" fill="#fff" font-size="18">The exercise — what movement you do</text>
                    <rect x="150" y="330" width="800" height="130" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="382" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="22">3x8</text>
                    <text x="200" y="422" text-anchor="start" fill="#fff" font-size="18">Three working sets of eight reps</text>
                    <rect x="150" y="490" width="800" height="130" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="542" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="22">@ RPE 7</text>
                    <text x="200" y="582" text-anchor="start" fill="#fff" font-size="18">Effort 7 of 10 — about 3 reps left in the tank</text>
                    <rect x="150" y="650" width="800" height="130" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="702" text-anchor="start" fill="#10b981" font-weight="bold" font-size="22">REST 2-3 MIN</text>
                    <text x="200" y="742" text-anchor="start" fill="#fff" font-size="18">Timed recovery so every set stays strong</text>
                    <rect x="150" y="850" width="800" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="890" text-anchor="middle" fill="#ffd700" font-size="19">No exact weight given — effort sets the load</text>
                    <text x="550" y="922" text-anchor="middle" fill="#888" font-size="16">The program self-adjusts to good and bad days</text>
                </svg>`,
                caption: "One program line, translated piece by piece"
            }
        },
        {
            type: "quiz",
            question: "Your program says 'Bench press — 3x8, rest 2-3 min.' What does 3x8 actually require?",
            options: [
                { text: "Three working sets of eight reps, with rest between sets", correct: true },
                { text: "Eight sets of three reps, done as fast as possible", correct: false },
                { text: "Three total sets including your warm-up sets", correct: false },
                { text: "24 reps done continuously without stopping", correct: false }
            ],
            explanation: "Sets come first, reps second: 3x8 is three sets of eight reps — and crucially, those are WORKING sets at your challenging target weight. Warm-up sets don't count toward the three; they're light preparation done beforehand. The 'includes warm-ups' option is the trap that leads beginners to under-train, doing only one or two genuinely hard sets. And the rest matters: 2-3 minutes between sets keeps your last set nearly as strong as your first.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="140" width="800" height="190" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="205" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="24">READING 3x8</text>
                    <text x="550" y="250" text-anchor="middle" fill="#fff" font-size="19">Sets first, reps second</text>
                    <text x="550" y="288" text-anchor="middle" fill="#888" font-size="16">And which sets count toward the number?</text>
                    <rect x="180" y="420" width="220" height="130" rx="15" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="480" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">SET 1</text>
                    <text x="290" y="515" text-anchor="middle" fill="#888" font-size="15">8 reps</text>
                    <rect x="440" y="420" width="220" height="130" rx="15" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="480" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">SET 2</text>
                    <text x="550" y="515" text-anchor="middle" fill="#888" font-size="15">8 reps</text>
                    <rect x="700" y="420" width="220" height="130" rx="15" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="480" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">SET 3</text>
                    <text x="810" y="515" text-anchor="middle" fill="#888" font-size="15">8 reps</text>
                    <rect x="250" y="640" width="600" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="695" text-anchor="middle" fill="#ffd700" font-size="19">Rest fully between each set</text>
                </svg>`,
                caption: "Test yourself: what a set-and-rep scheme really asks for"
            }
        },
        {
            type: "concept",
            title: "RPE and RIR: Effort You Can Measure",
            content: "Here's the question every program has to answer: *how hard should this set be?* Two scales answer it — and they're really the same scale wearing different clothes.\n\n**RPE (Rating of Perceived Exertion)** runs from 1 to 10:\n• **RPE 10** — all-out; you could not have done one more rep\n• **RPE 9** — one more rep was possible\n• **RPE 8** — two more in the tank\n• **RPE 7** — three more in the tank\n• **RPE 6 and below** — comfortable, warm-up territory\n\n**RIR (Reps In Reserve)** just counts from the other end: how many reps you *could have* done but didn't. RPE 8 = 2 RIR. RPE 9 = 1 RIR. Same information, flipped.\n\nWhy does this matter? Because research on hypertrophy shows most growth stimulus comes from those last few hard reps near failure — but training *to* failure every set wrecks recovery and technique. The evidence-based sweet spot for most working sets is **1-3 RIR (RPE 7-9)**: close enough to failure to grow, far enough to recover and lift again in two days.\n\nFair warning: beginners consistently *underestimate* effort — what feels like RPE 9 is often RPE 6. The skill sharpens with practice. For now, err on the honest side: if you're not sure you could do 3 more reps, you probably could.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">RPE AND RIR</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Two scales, one idea: distance from failure</text>
                    <rect x="150" y="170" width="800" height="110" rx="15" fill="rgba(239,68,68,0.15)" stroke="#ef4444" stroke-width="2"/>
                    <text x="230" y="235" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="24">RPE 10</text>
                    <text x="620" y="228" text-anchor="middle" fill="#fff" font-size="18">0 RIR — nothing left, true failure</text>
                    <rect x="150" y="300" width="800" height="110" rx="15" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="230" y="365" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="24">RPE 9</text>
                    <text x="620" y="358" text-anchor="middle" fill="#fff" font-size="18">1 RIR — one more rep was possible</text>
                    <rect x="150" y="430" width="800" height="110" rx="15" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="230" y="495" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="24">RPE 8</text>
                    <text x="620" y="488" text-anchor="middle" fill="#fff" font-size="18">2 RIR — two reps in the tank</text>
                    <rect x="150" y="560" width="800" height="110" rx="15" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="230" y="625" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="24">RPE 7</text>
                    <text x="620" y="618" text-anchor="middle" fill="#fff" font-size="18">3 RIR — three reps in the tank</text>
                    <rect x="150" y="690" width="800" height="110" rx="15" fill="rgba(59,130,246,0.12)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="230" y="755" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="22">RPE 6-</text>
                    <text x="620" y="748" text-anchor="middle" fill="#888" font-size="18">4+ RIR — easy, warm-up territory</text>
                    <rect x="150" y="860" width="800" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="900" text-anchor="middle" fill="#ffd700" font-size="20">Most working sets live at 1-3 RIR</text>
                    <text x="550" y="932" text-anchor="middle" fill="#888" font-size="16">Close to failure, but not living there</text>
                </svg>`,
                caption: "The effort ladder: RPE counts up, RIR counts down"
            }
        },
        {
            type: "visual",
            title: "The Tank: Seeing Reps in Reserve",
            content: "Picture every set as draining a fuel tank. Warm-ups barely touch the needle. A working set at 2 RIR drains it low but leaves fumes for two more reps. Failure is empty — dramatic, but expensive: it costs extra recovery time and your form is worst right at the end. Most productive training empties *most* of the tank, most sets, and saves true empty for rare tested moments. The skill worth building: knowing where your needle actually is. Every experienced lifter has miscalled it; the difference is they've practiced enough honest sets to be wrong less often.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE FUEL TANK</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Each set drains the tank toward failure</text>
                    <rect x="120" y="220" width="240" height="480" rx="20" fill="rgba(255,255,255,0.05)" stroke="#888" stroke-width="2"/>
                    <rect x="130" y="290" width="220" height="400" rx="14" fill="rgba(59,130,246,0.35)"/>
                    <text x="240" y="760" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="20">WARM-UP</text>
                    <text x="240" y="795" text-anchor="middle" fill="#888" font-size="15">Tank nearly full</text>
                    <rect x="430" y="220" width="240" height="480" rx="20" fill="rgba(255,255,255,0.05)" stroke="#888" stroke-width="2"/>
                    <rect x="440" y="560" width="220" height="130" rx="14" fill="rgba(16,185,129,0.4)"/>
                    <text x="550" y="760" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">2 RIR</text>
                    <text x="550" y="795" text-anchor="middle" fill="#888" font-size="15">The working zone</text>
                    <rect x="740" y="220" width="240" height="480" rx="20" fill="rgba(255,255,255,0.05)" stroke="#888" stroke-width="2"/>
                    <rect x="750" y="670" width="220" height="20" rx="8" fill="rgba(239,68,68,0.5)"/>
                    <text x="860" y="760" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">FAILURE</text>
                    <text x="860" y="795" text-anchor="middle" fill="#888" font-size="15">Empty — costly</text>
                    <rect x="150" y="880" width="800" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="920" text-anchor="middle" fill="#ffd700" font-size="19">Train low on the tank, not empty</text>
                    <text x="550" y="952" text-anchor="middle" fill="#888" font-size="16">Save true failure for rare tested moments</text>
                </svg>`,
                caption: "Warm-ups sip fuel, working sets drain it, failure empties it"
            }
        },
        {
            type: "concept",
            title: "Tempo and Rest: The Forgotten Variables",
            content: "Two more dials complete your vocabulary — and beginners routinely ignore both.\n\n**Tempo** is the speed of each rep, sometimes written as three or four numbers like **3-1-1**: three seconds lowering, one second pause, one second lifting. You usually don't need strict tempo prescriptions — but the principle underneath is gold: **control the lowering phase**. The eccentric (lowering) portion is where much of the growth stimulus lives, and dropping the weight like a hot pan throws that stimulus away while inviting sloppy form.\n\n**Rest intervals** are how long you breathe between sets — and they're not filler, they're programming:\n• **Compound lifts** (squats, deadlifts, presses — multiple joints working): rest **2-3 minutes**. Research comparing 1-minute vs 3-minute rests found longer rests produced more strength AND more muscle, because you lift more total weight when you're recovered\n• **Isolation exercises** (curls, lateral raises — one joint): **60-90 seconds** is plenty\n\nThe pattern behind the numbers: rest long enough that the *muscle*, not your gasping lungs, is the limiting factor on the next set. Cutting rest to 'feel the burn' mostly means your later sets get weaker — less total work, less growth. Bring a timer. Seriously.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">TEMPO AND REST</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">The dials most beginners never touch</text>
                    <rect x="80" y="180" width="440" height="300" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="300" y="240" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">TEMPO 3-1-1</text>
                    <text x="300" y="290" text-anchor="middle" fill="#fff" font-size="17">3 sec down</text>
                    <text x="300" y="325" text-anchor="middle" fill="#fff" font-size="17">1 sec pause</text>
                    <text x="300" y="360" text-anchor="middle" fill="#fff" font-size="17">1 sec up</text>
                    <text x="300" y="420" text-anchor="middle" fill="#888" font-size="15">Control the lowering —</text>
                    <text x="300" y="448" text-anchor="middle" fill="#888" font-size="15">that is where growth lives</text>
                    <rect x="580" y="180" width="440" height="300" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="800" y="240" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">REST INTERVALS</text>
                    <text x="800" y="295" text-anchor="middle" fill="#fff" font-size="17">Compound lifts: 2-3 min</text>
                    <text x="800" y="330" text-anchor="middle" fill="#fff" font-size="17">Isolation: 60-90 sec</text>
                    <text x="800" y="420" text-anchor="middle" fill="#888" font-size="15">Longer rest = stronger sets</text>
                    <text x="800" y="448" text-anchor="middle" fill="#888" font-size="15">= more total work = growth</text>
                    <rect x="150" y="560" width="800" height="150" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="620" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">THE TEST</text>
                    <text x="550" y="665" text-anchor="middle" fill="#fff" font-size="17">Is the muscle the limit — or your lungs?</text>
                    <rect x="200" y="790" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="840" text-anchor="middle" fill="#ffd700" font-size="20">Bring a timer to every session</text>
                </svg>`,
                caption: "Control the lowering; rest long enough to stay strong"
            }
        },
        {
            type: "example",
            title: "Maria, Two Machines, and a Barbell",
            content: "Maria, 52, joins a gym after two decades away. Day one, a friend insists she must use free weights because 'machines are useless.' Intimidated, she tries barbell squats cold, feels wobbly and unsafe, and nearly quits.\n\nA trainer offers a smarter path. For the first six weeks Maria builds her leg strength on the **leg press machine** and her pulling strength on the **seated row** — the machines guide the bar path, so she can safely push close to her limits from the very first session. Her working sets go from 90 lb to 180 lb on the press. She feels strong, not scared.\n\nWeek seven, she revisits the barbell. Different story: her muscles are stronger, and with a coach cueing her, she learns the squat pattern with just the bar. Within a month, free-weight squats are the anchor of her program — and she *still* uses the leg press for extra volume.\n\nHere's the honest truth Maria's story illustrates: **both machines and free weights build muscle** — the research shows comparable hypertrophy when effort is matched. Machines shine for beginners, isolation work, and training safely near failure. Free weights add balance, stabilizer muscles, and carryover to real-world movement. It was never either/or. The right answer is the tool that keeps you training.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">MACHINES VS FREE?</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Wrong question — both build muscle</text>
                    <rect x="60" y="180" width="460" height="360" rx="20" fill="rgba(59,130,246,0.12)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="290" y="240" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="22">MACHINES</text>
                    <text x="290" y="295" text-anchor="middle" fill="#fff" font-size="17">Guided path — beginner safe</text>
                    <text x="290" y="330" text-anchor="middle" fill="#fff" font-size="17">Easy to push near failure</text>
                    <text x="290" y="365" text-anchor="middle" fill="#fff" font-size="17">Great for isolation work</text>
                    <text x="290" y="425" text-anchor="middle" fill="#888" font-size="15">Less stabilizer demand</text>
                    <text x="290" y="455" text-anchor="middle" fill="#888" font-size="15">Fixed movement path</text>
                    <rect x="580" y="180" width="460" height="360" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="810" y="240" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">FREE WEIGHTS</text>
                    <text x="810" y="295" text-anchor="middle" fill="#fff" font-size="17">Train balance + stabilizers</text>
                    <text x="810" y="330" text-anchor="middle" fill="#fff" font-size="17">Transfer to real-life moves</text>
                    <text x="810" y="365" text-anchor="middle" fill="#fff" font-size="17">One barbell, every lift</text>
                    <text x="810" y="425" text-anchor="middle" fill="#888" font-size="15">Steeper learning curve</text>
                    <text x="810" y="455" text-anchor="middle" fill="#888" font-size="15">Form matters more early</text>
                    <rect x="150" y="620" width="800" height="160" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="680" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">MARIA'S PATH</text>
                    <text x="550" y="725" text-anchor="middle" fill="#fff" font-size="17">Machines first for confidence, barbell later,</text>
                    <text x="550" y="755" text-anchor="middle" fill="#fff" font-size="17">then both together — strength kept climbing</text>
                    <rect x="200" y="850" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="900" text-anchor="middle" fill="#ffd700" font-size="19">The best tool is the one you keep using</text>
                </svg>`,
                caption: "Maria's six-week journey: machines to barbell, then both"
            }
        },
        {
            type: "concept",
            title: "Compound vs Isolation: Build Your Menu",
            content: "The last vocabulary pair sorts every exercise in the gym into two bins.\n\n**Compound exercises** move multiple joints and muscle groups at once:\n• Squat (hips, knees, ankles), deadlift (hips, knees, spine), bench press (shoulders, elbows), row (shoulders, elbows), overhead press\n• They deliver the **most muscle worked per minute** — hugely efficient\n• They load the body the way life loads it: whole chains working together\n• This is why compound lifts earn the longer 2-3 minute rests and come **first** in your workout, while you're fresh\n\n**Isolation exercises** move one joint and target one muscle:\n• Biceps curls, leg extensions, lateral raises, calf raises\n• Perfect for bringing up a specific muscle, working around an injury, or adding extra volume without much fatigue\n• They come **later** in the session, with shorter rests\n\nA good program isn't compound *versus* isolation — it's compound *then* isolation: big rocks first, pebbles after. A classic beginner session: squat 3x8, bench 3x8, row 3x8 (compounds), then curls and calf raises 2x12 (isolation). Roughly 45 minutes, whole body trained.\n\nThat's the entire vocabulary. You now read Gym fluently — next lesson, we teach your body the grammar: movement patterns.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">TWO BINS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Every exercise is compound or isolation</text>
                    <rect x="60" y="180" width="460" height="380" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="290" y="240" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">COMPOUND</text>
                    <text x="290" y="285" text-anchor="middle" fill="#888" font-size="16">Multiple joints together</text>
                    <text x="290" y="335" text-anchor="middle" fill="#fff" font-size="17">Squat - Deadlift</text>
                    <text x="290" y="370" text-anchor="middle" fill="#fff" font-size="17">Bench - Row - Press</text>
                    <text x="290" y="425" text-anchor="middle" fill="#10b981" font-size="16">Do these FIRST, fresh</text>
                    <text x="290" y="460" text-anchor="middle" fill="#10b981" font-size="16">Rest 2-3 minutes</text>
                    <rect x="580" y="180" width="460" height="380" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="810" y="240" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="22">ISOLATION</text>
                    <text x="810" y="285" text-anchor="middle" fill="#888" font-size="16">One joint, one muscle</text>
                    <text x="810" y="335" text-anchor="middle" fill="#fff" font-size="17">Curls - Extensions</text>
                    <text x="810" y="370" text-anchor="middle" fill="#fff" font-size="17">Raises - Calf work</text>
                    <text x="810" y="425" text-anchor="middle" fill="#10b981" font-size="16">Do these AFTER</text>
                    <text x="810" y="460" text-anchor="middle" fill="#10b981" font-size="16">Rest 60-90 seconds</text>
                    <rect x="150" y="640" width="800" height="150" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="700" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">SAMPLE SESSION</text>
                    <text x="550" y="745" text-anchor="middle" fill="#fff" font-size="17">Squat, bench, row 3x8 — then curls 2x12</text>
                    <rect x="200" y="860" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="910" text-anchor="middle" fill="#ffd700" font-size="20">Big rocks first, pebbles after</text>
                </svg>`,
                caption: "Compounds anchor the session; isolation finishes it"
            }
        },
        {
            type: "application",
            title: "Practice Your New Language Today",
            content: "Vocabulary sticks when you use it. Three exercises for today — no gym required.\n\n1. **Decode this line**: 'Deadlift — 4x5 @ RPE 8, rest 3 min.' Out loud, say what each piece means: how many working sets, how many reps, how many reps left in the tank, how long you rest. (Answer: 4 working sets of 5, stopping with about 2 reps in reserve, 3 minutes between sets.)\n\n2. **Calibrate your RPE** — Do one set of push-ups (wall, knee, or full — whatever fits) and stop when you believe you have exactly 2 reps left. Rest 3 minutes. Then test: do a set to true failure and count. Most people discover their '2 RIR' was really 5+. That gap is your calibration project.\n\n3. **Write your first line** — Pick any exercise you can do at home and write yourself a real prescription: exercise, sets x reps, target RPE, rest. Sticky-note it somewhere visible. Tomorrow, do it exactly as written.\n\nDo all three and something shifts: programs stop being instructions you follow and become sentences you understand.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">USE IT TODAY</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Three drills to lock in the language</text>
                    <rect x="150" y="180" width="800" height="150" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="240" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="22">1.</text>
                    <text x="245" y="240" text-anchor="start" fill="#fff" font-size="19">Decode: 4x5 @ RPE 8, rest 3 min</text>
                    <text x="245" y="280" text-anchor="start" fill="#888" font-size="15">Say every piece out loud</text>
                    <rect x="150" y="370" width="800" height="150" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="430" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="22">2.</text>
                    <text x="245" y="430" text-anchor="start" fill="#fff" font-size="19">Calibrate: push-ups at 2 RIR, then test</text>
                    <text x="245" y="470" text-anchor="start" fill="#888" font-size="15">Find the gap between feel and reality</text>
                    <rect x="150" y="560" width="800" height="150" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="620" text-anchor="start" fill="#10b981" font-weight="bold" font-size="22">3.</text>
                    <text x="245" y="620" text-anchor="start" fill="#fff" font-size="19">Write your own program line, then do it</text>
                    <text x="245" y="660" text-anchor="start" fill="#888" font-size="15">Exercise, sets x reps, RPE, rest</text>
                    <rect x="200" y="790" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="840" text-anchor="middle" fill="#ffd700" font-size="20">Fluency comes from speaking, not reading</text>
                </svg>`,
                caption: "Three quick drills: decode, calibrate, prescribe"
            }
        },
        {
            type: "quiz",
            question: "You finish a set of rows and honestly feel you could have done 2 more reps with good form. What effort level did you just hit?",
            options: [
                { text: "RPE 8 — which is the same as 2 reps in reserve", correct: true },
                { text: "RPE 2 — because you had 2 reps left", correct: false },
                { text: "RPE 10 — every hard set counts as a 10", correct: false },
                { text: "2 RIR, which equals RPE 6", correct: false }
            ],
            explanation: "RPE and RIR are the same scale read from opposite ends: RPE 8 means 2 reps in reserve, RPE 9 means 1, RPE 10 means none. The trap is matching the RPE number to the reps remaining — RPE 2 would actually be an extremely easy set. Two reps shy of failure sits right in the 1-3 RIR sweet spot where most productive working sets live: enough stimulus to grow, enough left over to recover and train again.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="140" width="800" height="190" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="205" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="24">EFFORT SCALES</text>
                    <text x="550" y="250" text-anchor="middle" fill="#fff" font-size="19">RPE counts up from easy to maximal</text>
                    <text x="550" y="288" text-anchor="middle" fill="#888" font-size="16">RIR counts down: reps you left in the tank</text>
                    <rect x="200" y="420" width="330" height="160" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="365" y="485" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="24">2 left</text>
                    <text x="365" y="530" text-anchor="middle" fill="#fff" font-size="17">in the tank</text>
                    <path d="M550 500 L620 500" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="620,500 606,491 606,509" fill="#14b8a6"/>
                    <rect x="650" y="420" width="250" height="160" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="775" y="485" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="26">RPE ?</text>
                    <text x="775" y="530" text-anchor="middle" fill="#888" font-size="16">You tell us</text>
                    <rect x="250" y="670" width="600" height="90" rx="20" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="725" text-anchor="middle" fill="#8b5cf6" font-size="18">Hint: the two scales always sum to 10</text>
                </svg>`,
                caption: "Final check: converting between RIR and RPE"
            }
        }
    ]
},
{
    id: 3,
    title: "Form First: The Six Movement Patterns",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "Your Body Doesn't Know What a Bicep Is",
            content: "Here's a secret that separates people who lift for decades from people who quit in March: your body doesn't think in muscles. It thinks in *movements*.\n\nWhen you stand up from a chair, your brain doesn't fire off a memo to your quadriceps, glutes, and spinal erectors individually. It runs one program: *squat*. When you pick a laundry basket off the floor: *hinge*. Push a stubborn door: *press*. Your nervous system stores movements the way your phone stores apps — whole patterns, ready to launch.\n\nThat's why this course teaches you six movement patterns instead of a list of exercises: **squat, hinge, push, pull, lunge, and carry**. Master those six and you've covered essentially every muscle you own — and, more importantly, every physical task life will ever throw at you, from hauling groceries to getting up off the floor at 85.\n\nBut patterns only protect you if you do them well. So this lesson also hands you the two skills that make everything else safe: a braced, neutral spine, and the discipline to master form *before* chasing load. This is the lesson your future joints will thank you for.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">MOVEMENTS, NOT MUSCLES</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Your brain stores whole patterns</text>
                    <circle cx="550" cy="330" r="110" fill="rgba(99,102,241,0.25)" stroke="#6366f1" stroke-width="3"/>
                    <text x="550" y="320" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="24">BRAIN</text>
                    <text x="550" y="358" text-anchor="middle" fill="#fff" font-size="16">runs programs</text>
                    <rect x="90" y="540" width="280" height="120" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="230" y="592" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">STAND UP</text>
                    <text x="230" y="628" text-anchor="middle" fill="#888" font-size="15">= squat pattern</text>
                    <rect x="410" y="540" width="280" height="120" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="592" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="19">LIFT BASKET</text>
                    <text x="550" y="628" text-anchor="middle" fill="#888" font-size="15">= hinge pattern</text>
                    <rect x="730" y="540" width="280" height="120" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="870" y="592" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="19">PUSH DOOR</text>
                    <text x="870" y="628" text-anchor="middle" fill="#888" font-size="15">= press pattern</text>
                    <line x1="470" y1="420" x2="230" y2="540" stroke="#14b8a6" stroke-width="2" stroke-dasharray="6" opacity="0.6"/>
                    <line x1="550" y1="440" x2="550" y2="540" stroke="#14b8a6" stroke-width="2" stroke-dasharray="6" opacity="0.6"/>
                    <line x1="630" y1="420" x2="870" y2="540" stroke="#14b8a6" stroke-width="2" stroke-dasharray="6" opacity="0.6"/>
                    <rect x="200" y="750" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="800" text-anchor="middle" fill="#ffd700" font-size="20">Six patterns cover your whole body</text>
                </svg>`,
                caption: "The nervous system launches movements the way a phone launches apps"
            }
        },
        {
            type: "concept",
            title: "The Six Patterns That Cover Everything",
            content: "Here's your complete map. Every effective strength exercise is a variation of one of six patterns:\n\n• **Squat** — knees and hips bend together, torso stays fairly upright. Sitting down, standing up. Exercises: bodyweight squat, goblet squat, leg press.\n\n• **Hinge** — hips shoot back, torso tips forward, knees bend only slightly. The *hip* does the work. Exercises: deadlift, Romanian deadlift, kettlebell swing. This is the pattern most people have never learned — and the one that saves backs.\n\n• **Push** — press resistance away from your torso, horizontally (push-up, bench press) or vertically (overhead press).\n\n• **Pull** — draw resistance toward you: rows, pull-ups, lat pulldowns. Modern life is push-heavy and pull-starved; your posture already knows this.\n\n• **Lunge / single-leg** — one leg works while the other assists: lunges, split squats, step-ups. Builds the balance that prevents falls.\n\n• **Carry** — hold a heavy thing and walk: farmer's carry, suitcase carry. Deceptively simple, trains grip, core, and posture all at once.\n\nWhy organize this way? Because a program with all six patterns automatically trains every major muscle group — no anatomy degree required. Miss one, and you've left a hole in your armor.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE SIX PATTERNS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Every exercise you will ever need, sorted</text>
                    <rect x="80" y="170" width="440" height="200" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="300" y="235" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="24">SQUAT</text>
                    <text x="300" y="280" text-anchor="middle" fill="#fff" font-size="16">Knees + hips bend together</text>
                    <text x="300" y="312" text-anchor="middle" fill="#888" font-size="15">Goblet squat, leg press</text>
                    <rect x="580" y="170" width="440" height="200" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="800" y="235" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="24">HINGE</text>
                    <text x="800" y="280" text-anchor="middle" fill="#fff" font-size="16">Hips back, flat back</text>
                    <text x="800" y="312" text-anchor="middle" fill="#888" font-size="15">Deadlift, RDL, swing</text>
                    <rect x="80" y="410" width="440" height="200" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="300" y="475" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="24">PUSH</text>
                    <text x="300" y="520" text-anchor="middle" fill="#fff" font-size="16">Press away from torso</text>
                    <text x="300" y="552" text-anchor="middle" fill="#888" font-size="15">Push-up, bench, overhead</text>
                    <rect x="580" y="410" width="440" height="200" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="800" y="475" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="24">PULL</text>
                    <text x="800" y="520" text-anchor="middle" fill="#fff" font-size="16">Draw toward you</text>
                    <text x="800" y="552" text-anchor="middle" fill="#888" font-size="15">Row, pull-up, pulldown</text>
                    <rect x="80" y="650" width="440" height="200" rx="20" fill="rgba(59,130,246,0.12)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="300" y="715" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="24">LUNGE</text>
                    <text x="300" y="760" text-anchor="middle" fill="#fff" font-size="16">One leg leads the work</text>
                    <text x="300" y="792" text-anchor="middle" fill="#888" font-size="15">Split squat, step-up</text>
                    <rect x="580" y="650" width="440" height="200" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="800" y="715" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="24">CARRY</text>
                    <text x="800" y="760" text-anchor="middle" fill="#fff" font-size="16">Hold heavy, walk tall</text>
                    <text x="800" y="792" text-anchor="middle" fill="#888" font-size="15">Farmer's, suitcase carry</text>
                    <rect x="200" y="920" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="970" text-anchor="middle" fill="#ffd700" font-size="20">All six = every major muscle trained</text>
                </svg>`,
                caption: "The complete movement map: six patterns, whole-body coverage"
            }
        },
        {
            type: "visual",
            title: "Squat vs Hinge: The Confusion That Hurts Backs",
            content: "Two lower-body patterns, one crucial difference: **where the bend comes from**. In a squat, knees and hips bend together and your torso stays relatively upright — think 'sitting between your heels.' In a hinge, your hips travel *backward* while your knees stay softly bent and your flat back tips forward — think 'closing a car door with your butt.' Most back tweaks from lifting happen when someone tries to hinge with a rounded spine, or squats a load off the floor that wanted to be hinged. Learn to feel the difference unloaded and you've dodged the most common beginner injury in one move.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">SQUAT VS HINGE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Where does the bend come from?</text>
                    <rect x="60" y="170" width="460" height="560" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="290" y="230" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="24">SQUAT</text>
                    <line x1="290" y1="300" x2="290" y2="420" stroke="#fff" stroke-width="6"/>
                    <line x1="290" y1="420" x2="250" y2="520" stroke="#fff" stroke-width="6"/>
                    <line x1="250" y1="520" x2="290" y2="620" stroke="#fff" stroke-width="6"/>
                    <circle cx="290" cy="280" r="26" fill="#6366f1"/>
                    <text x="290" y="672" text-anchor="middle" fill="#fff" font-size="17">Torso upright</text>
                    <text x="290" y="704" text-anchor="middle" fill="#888" font-size="15">Knees and hips share the bend</text>
                    <rect x="580" y="170" width="460" height="560" rx="20" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="810" y="230" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="24">HINGE</text>
                    <line x1="760" y1="330" x2="850" y2="440" stroke="#fff" stroke-width="6"/>
                    <line x1="850" y1="440" x2="840" y2="540" stroke="#fff" stroke-width="6"/>
                    <line x1="840" y1="540" x2="850" y2="630" stroke="#fff" stroke-width="6"/>
                    <circle cx="742" cy="310" r="26" fill="#8b5cf6"/>
                    <text x="810" y="682" text-anchor="middle" fill="#fff" font-size="17">Hips travel back, flat back tips</text>
                    <text x="810" y="714" text-anchor="middle" fill="#888" font-size="15">Knees stay softly bent</text>
                    <rect x="150" y="800" width="800" height="100" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="845" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="19">Most back tweaks = hinging with a round spine</text>
                    <text x="550" y="880" text-anchor="middle" fill="#888" font-size="16">Learn the difference unloaded first</text>
                </svg>`,
                caption: "Squat: sit between your heels. Hinge: push your hips back."
            }
        },
        {
            type: "example",
            title: "Your Life Is Already a Gym",
            content: "Still wondering if six patterns really cover 'real life'? Run the tape on an ordinary Saturday.\n\n**7:40 am** — You get up off the floor after playing with the dog. That's a **lunge/single-leg** pattern; researchers even use the 'sitting-rising test' — getting off the floor with minimal support — as a health screen linked to mortality risk in adults over 50.\n\n**9:15 am** — Groceries. Two loaded bags from trunk to kitchen, one in each hand: a textbook **farmer's carry**. Grip, core, posture, all working.\n\n**11:30 am** — Your niece, 30 pounds of wiggling enthusiasm, wants 'up.' You drop your hips and lift her with a flat back — that's a **hinge**, the exact motor pattern of a deadlift. Do it with a rounded back a hundred times and your spine keeps the receipts.\n\n**2:00 pm** — Hauling the cooler onto a shelf: **push**. Dragging the garden hose in: **pull**. Getting in and out of the car all day: **squats**, dozens of them.\n\nHere's the punchline: you never stop doing these movements — you only stop doing them *well* and *strongly*. Training the six patterns with weights isn't a separate hobby from your life. It's a rehearsal for it, with progressively heavier stakes handled in a controlled room first.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">SATURDAY, DECODED</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">One ordinary day, six patterns</text>
                    <rect x="150" y="170" width="800" height="110" rx="20" fill="rgba(59,130,246,0.12)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="200" y="222" text-anchor="start" fill="#3b82f6" font-weight="bold" font-size="19">7:40</text>
                    <text x="300" y="222" text-anchor="start" fill="#fff" font-size="18">Up off the floor with the dog</text>
                    <text x="300" y="255" text-anchor="start" fill="#888" font-size="15">Lunge / single-leg pattern</text>
                    <rect x="150" y="310" width="800" height="110" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="362" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="19">9:15</text>
                    <text x="300" y="362" text-anchor="start" fill="#fff" font-size="18">Grocery bags, trunk to kitchen</text>
                    <text x="300" y="395" text-anchor="start" fill="#888" font-size="15">Farmer's carry</text>
                    <rect x="150" y="450" width="800" height="110" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="502" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="19">11:30</text>
                    <text x="300" y="502" text-anchor="start" fill="#fff" font-size="18">Lifting your niece — flat back, hips</text>
                    <text x="300" y="535" text-anchor="start" fill="#888" font-size="15">Hinge — a bodyweight deadlift</text>
                    <rect x="150" y="590" width="800" height="110" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="642" text-anchor="start" fill="#10b981" font-weight="bold" font-size="19">2:00</text>
                    <text x="300" y="642" text-anchor="start" fill="#fff" font-size="18">Cooler up, hose in, car all day</text>
                    <text x="300" y="675" text-anchor="start" fill="#888" font-size="15">Push, pull, and squats everywhere</text>
                    <rect x="150" y="760" width="800" height="100" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="805" text-anchor="middle" fill="#ffd700" font-size="19">You never stop doing these movements</text>
                    <text x="550" y="840" text-anchor="middle" fill="#888" font-size="16">You only stop doing them strongly</text>
                </svg>`,
                caption: "An ordinary Saturday runs all six movement patterns"
            }
        },
        {
            type: "quiz",
            question: "You bend down to pick a heavy box off the floor by pushing your hips back, keeping your back flat and knees only slightly bent. Which movement pattern are you using?",
            options: [
                { text: "The hinge — hips drive back, torso tips with a flat back", correct: true },
                { text: "The squat — any time you lower down, it's a squat", correct: false },
                { text: "The lunge — because your legs are doing the lifting", correct: false },
                { text: "The carry — because you end up holding the box", correct: false }
            ],
            explanation: "Hips traveling backward, a flat torso tipping forward, and only a slight knee bend is the signature of the hinge — the pattern behind deadlifts and safe real-world lifting. The squat is the tempting distractor, but a squat keeps the torso more upright with knees and hips bending together deeply. Carrying only begins after the lift is done. Confusing these two patterns under load — especially hinging with a rounded spine — is the most common source of beginner back tweaks.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="140" width="800" height="190" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="205" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="24">NAME THAT PATTERN</text>
                    <text x="550" y="250" text-anchor="middle" fill="#fff" font-size="19">Hips back, flat back, soft knees</text>
                    <text x="550" y="288" text-anchor="middle" fill="#888" font-size="16">A heavy box waits on the floor</text>
                    <rect x="320" y="420" width="460" height="200" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <line x1="480" y1="480" x2="560" y2="540" stroke="#fff" stroke-width="6"/>
                    <line x1="560" y1="540" x2="555" y2="590" stroke="#fff" stroke-width="6"/>
                    <circle cx="465" cy="465" r="20" fill="#8b5cf6"/>
                    <rect x="600" y="555" width="60" height="45" rx="6" fill="rgba(245,158,11,0.4)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="672" text-anchor="middle" fill="#888" font-size="16">Which program is the brain running?</text>
                    <rect x="250" y="720" width="600" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="775" text-anchor="middle" fill="#ffd700" font-size="19">Hint: the hips are doing the traveling</text>
                </svg>`,
                caption: "Mid-lesson check: identify the pattern from its signature"
            }
        },
        {
            type: "concept",
            title: "Neutral Spine and the 360-Degree Brace",
            content: "Before load ever touches your hands, two skills protect everything else.\n\n**Neutral spine** means your back keeps its natural gentle curves — not ramrod straight, not rounded, not over-arched. Imagine your torso as a cardboard tube: strong when its shape is intact, easy to buckle once it kinks. Under load, your job is to *keep the tube's shape* while your hips and legs do the moving.\n\n**The 360-degree brace** is how you lock that shape in:\n\n1. Take a breath **into your belly**, not your chest — imagine breathing down into the band of your waistband\n2. Feel pressure expand in **all directions** — front, sides, AND back, like inflating an inner tube around your belt line\n3. Then gently tighten your midsection on top of that pressure, as if someone's about to poke your stomach\n\nThat pressurized cylinder — intra-abdominal pressure — stabilizes your spine from the *inside*, which is exactly why serious lifters wear belts: the belt gives the brace something to push against.\n\nCommon mistake: sucking the belly *in*. That's the opposite of bracing — you want expansion and pressure, not a hollow. Practice it right now in your chair: breathe low, expand 360, brace. That's the exact sequence you'll run before every heavy set for the rest of your lifting life.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE 360 BRACE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Pressure in every direction, like an inner tube</text>
                    <circle cx="550" cy="430" r="180" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="3"/>
                    <circle cx="550" cy="430" r="90" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="422" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="19">SPINE</text>
                    <text x="550" y="452" text-anchor="middle" fill="#888" font-size="14">kept neutral</text>
                    <path d="M550 250 L550 190" stroke="#10b981" stroke-width="4"/>
                    <polygon points="550,180 541,196 559,196" fill="#10b981"/>
                    <path d="M550 610 L550 670" stroke="#10b981" stroke-width="4"/>
                    <polygon points="550,680 541,664 559,664" fill="#10b981"/>
                    <path d="M370 430 L310 430" stroke="#10b981" stroke-width="4"/>
                    <polygon points="300,430 316,421 316,439" fill="#10b981"/>
                    <path d="M730 430 L790 430" stroke="#10b981" stroke-width="4"/>
                    <polygon points="800,430 784,421 784,439" fill="#10b981"/>
                    <text x="550" y="160" text-anchor="middle" fill="#10b981" font-size="16">front</text>
                    <text x="550" y="720" text-anchor="middle" fill="#10b981" font-size="16">back</text>
                    <text x="255" y="437" text-anchor="middle" fill="#10b981" font-size="16">side</text>
                    <text x="848" y="437" text-anchor="middle" fill="#10b981" font-size="16">side</text>
                    <rect x="150" y="780" width="800" height="120" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="830" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">Breathe low - expand 360 - brace</text>
                    <text x="550" y="868" text-anchor="middle" fill="#888" font-size="16">Expansion and pressure, never sucking in</text>
                    <rect x="200" y="940" width="700" height="80" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="990" text-anchor="middle" fill="#ef4444" font-size="18">A kinked tube buckles — keep the shape</text>
                </svg>`,
                caption: "Breathe into the belt line and pressurize in all directions"
            }
        },
        {
            type: "concept",
            title: "The Form-Before-Load Rule",
            content: "Now the rule that governs your entire first three months: **you earn the right to add weight by owning the movement without it.**\n\nThe progression for every pattern:\n\n1. **Bodyweight only** — squat to a box, hinge with a dowel along your spine, push-ups on a wall. Goal: the pattern feels smooth and repeatable\n2. **Light load** — a goblet-held dumbbell, a light kettlebell, an empty bar. Goal: the pattern *survives* contact with weight, brace and all\n3. **Progressive load** — only now do the numbers start climbing, and only while form holds\n\nWhy so patient? Because motor learning is real: every rep you perform is a vote for how your nervous system will perform that movement forever. Reps with a rounded back under fatigue are *practice at moving badly* — and under heavier load, that practice gets expensive.\n\nHow do you know your form is actually good? You can't feel it reliably — nobody can at first. Two fixes:\n\n• **Film yourself** from the side with your phone. Thirty seconds of footage teaches more than an hour of guessing\n• **Hire a coach for one or two sessions.** You don't need a year-long trainer contract — a single hour of expert eyes on your squat and hinge is one of the highest-ROI purchases in fitness\n\nAnd if a movement causes sharp pain — not muscle burn, *pain* — stop and get it assessed. A physical therapist visit beats six months of training around an injury. That's not medical advice, that's arithmetic.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">EARN THE LOAD</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Three gates, passed in order</text>
                    <rect x="90" y="200" width="280" height="220" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="230" y="265" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="21">1. BODYWEIGHT</text>
                    <text x="230" y="310" text-anchor="middle" fill="#fff" font-size="16">Pattern smooth</text>
                    <text x="230" y="340" text-anchor="middle" fill="#fff" font-size="16">and repeatable</text>
                    <path d="M370 310 L420 310" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="420,310 406,301 406,319" fill="#14b8a6"/>
                    <rect x="420" y="200" width="280" height="220" rx="20" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="560" y="265" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">2. LIGHT LOAD</text>
                    <text x="560" y="310" text-anchor="middle" fill="#fff" font-size="16">Form survives</text>
                    <text x="560" y="340" text-anchor="middle" fill="#fff" font-size="16">contact with weight</text>
                    <path d="M700 310 L750 310" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="750,310 736,301 736,319" fill="#14b8a6"/>
                    <rect x="750" y="200" width="280" height="220" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="890" y="265" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">3. PROGRESS</text>
                    <text x="890" y="310" text-anchor="middle" fill="#fff" font-size="16">Add weight only</text>
                    <text x="890" y="340" text-anchor="middle" fill="#fff" font-size="16">while form holds</text>
                    <rect x="150" y="500" width="800" height="160" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="560" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">EVERY REP IS A VOTE</text>
                    <text x="550" y="605" text-anchor="middle" fill="#fff" font-size="17">Your nervous system learns exactly</text>
                    <text x="550" y="635" text-anchor="middle" fill="#fff" font-size="17">what you practice — good or bad</text>
                    <rect x="150" y="720" width="385" height="140" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="342" y="775" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="18">FILM YOURSELF</text>
                    <text x="342" y="815" text-anchor="middle" fill="#888" font-size="15">Side angle, 30 seconds</text>
                    <rect x="565" y="720" width="385" height="140" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="757" y="775" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="18">1-2 COACH SESSIONS</text>
                    <text x="757" y="815" text-anchor="middle" fill="#888" font-size="15">Expert eyes, huge ROI</text>
                </svg>`,
                caption: "Bodyweight, then light load, then progression — with feedback loops"
            }
        },
        {
            type: "example",
            title: "The 30-Second Video That Fixed Dave's Squat",
            content: "Dave, 44, had been squatting for two months and swore his form was solid. His knees ached anyway. He was *certain* he was hitting proper depth with an upright chest — that's what it felt like from the inside.\n\nThen a lifter at his gym suggested the thing you learned last card: film it. Dave propped his phone against a water bottle, side angle, and shot one set.\n\nThe footage was a revelation. What felt like 'hitting depth' was a half squat. What felt like 'chest up' was a forward-pitched torso with his heels floating off the floor as his weight rolled onto his toes — the exact recipe for cranky knees. His internal sense of his body — what scientists call **proprioception** — was reporting fiction. This is completely normal: under new movements and fatigue, everyone's internal map drifts. It's why even Olympic lifters train in front of coaches and mirrors.\n\nThe fix took one session: Dave dropped the weight 40%, squatted to a box that enforced honest depth, and kept filming one set per week. Four weeks later the knee pain was gone and his working weight passed his old numbers — with footage to prove the form held.\n\nTotal cost of the intervention: zero dollars and 30 seconds per week. The camera doesn't flatter, and that's the point.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">FELT VS FILMED</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Dave's internal map was reporting fiction</text>
                    <rect x="60" y="180" width="460" height="330" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="240" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">WHAT DAVE FELT</text>
                    <text x="290" y="295" text-anchor="middle" fill="#fff" font-size="17">Full depth reached</text>
                    <text x="290" y="330" text-anchor="middle" fill="#fff" font-size="17">Chest proudly up</text>
                    <text x="290" y="365" text-anchor="middle" fill="#fff" font-size="17">Weight balanced</text>
                    <text x="290" y="425" text-anchor="middle" fill="#888" font-size="15">Proprioception under</text>
                    <text x="290" y="455" text-anchor="middle" fill="#888" font-size="15">fatigue drifts — for everyone</text>
                    <rect x="580" y="180" width="460" height="330" rx="20" fill="rgba(59,130,246,0.12)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="810" y="240" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="22">WHAT THE VIDEO SAW</text>
                    <text x="810" y="295" text-anchor="middle" fill="#fff" font-size="17">Half squat only</text>
                    <text x="810" y="330" text-anchor="middle" fill="#fff" font-size="17">Torso pitched forward</text>
                    <text x="810" y="365" text-anchor="middle" fill="#fff" font-size="17">Heels floating up</text>
                    <text x="810" y="425" text-anchor="middle" fill="#888" font-size="15">30 seconds of footage,</text>
                    <text x="810" y="455" text-anchor="middle" fill="#888" font-size="15">total clarity</text>
                    <rect x="150" y="590" width="800" height="170" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="650" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">THE FIX</text>
                    <text x="550" y="695" text-anchor="middle" fill="#fff" font-size="17">-40% load, box squats for honest depth,</text>
                    <text x="550" y="725" text-anchor="middle" fill="#fff" font-size="17">one filmed set per week</text>
                    <rect x="200" y="830" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="880" text-anchor="middle" fill="#ffd700" font-size="20">The camera doesn't flatter — that's the point</text>
                </svg>`,
                caption: "Feel lies, footage doesn't: Dave's four-week form turnaround"
            }
        },
        {
            type: "quote",
            content: "Strong people are harder to kill than weak people, and more useful in general.",
            author: "Mark Rippetoe, strength coach",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">WISDOM</text>
                    <rect x="100" y="180" width="900" height="260" rx="20" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="160" y="260" text-anchor="start" fill="#fff" font-style="italic" font-size="24">Strong people are harder to kill</text>
                    <text x="160" y="305" text-anchor="start" fill="#fff" font-style="italic" font-size="24">than weak people, and more</text>
                    <text x="160" y="350" text-anchor="start" fill="#fff" font-style="italic" font-size="24">useful in general.</text>
                    <text x="940" y="405" text-anchor="end" fill="#8b5cf6" font-size="19">— Mark Rippetoe</text>
                    <circle cx="550" cy="620" r="90" fill="rgba(255,215,0,0.08)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="612" text-anchor="middle" fill="#ffd700" font-size="18">Blunt, but the</text>
                    <text x="550" y="644" text-anchor="middle" fill="#ffd700" font-size="18">data agrees</text>
                    <rect x="200" y="790" width="700" height="80" rx="20" fill="rgba(255,255,255,0.05)" stroke="#888" stroke-width="1"/>
                    <text x="550" y="840" text-anchor="middle" fill="#888" font-size="18">Lesson 1's mortality studies, in one sentence</text>
                </svg>`,
                caption: "A strength coach's blunt case for the barbell"
            }
        },
        {
            type: "application",
            title: "Your Pattern Audit — Tonight",
            content: "Time to meet your six patterns in person. Fifteen minutes, living room, no equipment.\n\n1. **Squat test** — Stand in front of a chair, arms crossed, and sit back until you lightly touch it, then stand. 10 slow reps. Notice: do your heels stay planted?\n\n2. **Hinge test** — Hold a broomstick along your spine touching head, upper back, and tailbone. Push your hips back until your torso tips 45 degrees, keeping all three contact points. 10 reps. Lose a contact point and you've found your project.\n\n3. **Push and pull check** — 5 slow wall push-ups. Then grab a filled backpack and do 5 bent-over rows with your new hinge and a flat back.\n\n4. **Single-leg and carry** — Step up onto the lowest stair 5 times per leg without pushing off the back foot. Then carry two heavy bags one lap around your home, tall posture, no leaning.\n\n5. **Film ONE pattern** — Pick your shakiest and shoot 30 seconds from the side. Watch it tonight. That's your 'before' footage — and your first act as your own coach.\n\nJot one note per pattern: easy, shaky, or hard. That list is literally your training priority order for the pattern lessons ahead.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">PATTERN AUDIT</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Fifteen minutes, no equipment needed</text>
                    <rect x="150" y="160" width="800" height="110" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="212" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="22">1.</text>
                    <text x="245" y="212" text-anchor="start" fill="#fff" font-size="19">Chair squats x10 — heels planted?</text>
                    <text x="245" y="245" text-anchor="start" fill="#888" font-size="15">Slow and controlled</text>
                    <rect x="150" y="300" width="800" height="110" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="352" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="22">2.</text>
                    <text x="245" y="352" text-anchor="start" fill="#fff" font-size="19">Broomstick hinge x10 — 3 contact points</text>
                    <text x="245" y="385" text-anchor="start" fill="#888" font-size="15">Head, upper back, tailbone stay touching</text>
                    <rect x="150" y="440" width="800" height="110" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="492" text-anchor="start" fill="#10b981" font-weight="bold" font-size="22">3.</text>
                    <text x="245" y="492" text-anchor="start" fill="#fff" font-size="19">Wall push-ups x5, backpack rows x5</text>
                    <text x="245" y="525" text-anchor="start" fill="#888" font-size="15">Push and pull, flat back on the rows</text>
                    <rect x="150" y="580" width="800" height="110" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="632" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="22">4.</text>
                    <text x="245" y="632" text-anchor="start" fill="#fff" font-size="19">Step-ups x5 each leg, then a loaded carry</text>
                    <text x="245" y="665" text-anchor="start" fill="#888" font-size="15">Tall posture, no leaning</text>
                    <rect x="150" y="720" width="800" height="110" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="772" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="22">5.</text>
                    <text x="245" y="772" text-anchor="start" fill="#fff" font-size="19">Film your shakiest pattern, side angle</text>
                    <text x="245" y="805" text-anchor="start" fill="#888" font-size="15">Your before footage — coach yourself</text>
                    <rect x="200" y="890" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="940" text-anchor="middle" fill="#ffd700" font-size="19">Rate each: easy, shaky, or hard</text>
                </svg>`,
                caption: "Tonight's audit: test all six patterns and film the weakest"
            }
        },
        {
            type: "concept",
            title: "The Road Ahead",
            content: "You now hold the three keys this whole book turns on: the *why* (muscle is longevity — Lesson 1), the *language* (sets, reps, RPE, rest — Lesson 2), and the *map* (six patterns, braced spine, form before load — this lesson).\n\nHere's how the rest of the journey unfolds:\n\n• **The pattern deep-dives** — dedicated lessons on the squat, the hinge, pushing, pulling, and the single-leg and carry work most programs forget. Each one takes a pattern from bodyweight to loaded, with the cues and common faults\n\n• **Programming** — how to assemble patterns into actual weekly training: how many days, how many sets, how to progress when it's easy and what to do when it's not\n\n• **The support system** — recovery, protein and eating to build, and training around the realities of busy weeks and aging joints\n\nNotice the order: patterns before programs. A program is just patterns scheduled and progressed — so the sharper your six movements, the more every future lesson pays off.\n\nYour audit list from the last card? Keep it. When the pattern lessons arrive, you'll start with your 'hard' rated movements — because training your weaknesses first is the closest thing lifting has to a cheat code.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE ROAD AHEAD</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Foundation laid — here is the route</text>
                    <rect x="150" y="170" width="800" height="130" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="222" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">DONE: WHY + LANGUAGE + MAP</text>
                    <text x="550" y="262" text-anchor="middle" fill="#fff" font-size="16">Lessons 1-3 — your foundation</text>
                    <path d="M550 300 L550 340" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,350 541,336 559,336" fill="#14b8a6"/>
                    <rect x="150" y="350" width="800" height="130" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="402" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">NEXT: PATTERN DEEP-DIVES</text>
                    <text x="550" y="442" text-anchor="middle" fill="#fff" font-size="16">Squat, hinge, push, pull, lunge, carry</text>
                    <path d="M550 480 L550 520" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,530 541,516 559,516" fill="#14b8a6"/>
                    <rect x="150" y="530" width="800" height="130" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="582" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">THEN: PROGRAMMING</text>
                    <text x="550" y="622" text-anchor="middle" fill="#fff" font-size="16">Days, sets, progression — your weekly plan</text>
                    <path d="M550 660 L550 700" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,710 541,696 559,696" fill="#14b8a6"/>
                    <rect x="150" y="710" width="800" height="130" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="762" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">FINALLY: THE SUPPORT SYSTEM</text>
                    <text x="550" y="802" text-anchor="middle" fill="#fff" font-size="16">Recovery, protein, lifting for life</text>
                    <rect x="200" y="900" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="950" text-anchor="middle" fill="#ffd700" font-size="19">Patterns first — programs are just patterns scheduled</text>
                </svg>`,
                caption: "The book's route: patterns, then programming, then support"
            }
        },
        {
            type: "quiz",
            question: "Before a heavy set, what does a proper 360-degree brace involve?",
            options: [
                { text: "Breathing into the belly and expanding pressure in all directions, then tightening", correct: true },
                { text: "Sucking the belly button in toward the spine as hard as possible", correct: false },
                { text: "Arching the lower back hard to keep the chest maximally lifted", correct: false },
                { text: "Taking a big chest breath and shrugging the shoulders up and back", correct: false }
            ],
            explanation: "The 360 brace starts with a breath low into the belly, expanding pressure forward, sideways, AND backward — like inflating an inner tube around your belt line — then tightening the midsection on top of that pressure. Sucking the belly in is the classic trap: it hollows the cylinder and reduces the intra-abdominal pressure that actually stabilizes your spine. Hard arching and chest-breathing both break neutral spine. Pressure plus a neutral spine is what keeps the cardboard tube from kinking under load.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="140" width="800" height="190" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="205" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="24">THE 360 BRACE</text>
                    <text x="550" y="250" text-anchor="middle" fill="#fff" font-size="19">The pre-lift ritual that guards your spine</text>
                    <text x="550" y="288" text-anchor="middle" fill="#888" font-size="16">Which direction does the pressure go?</text>
                    <circle cx="550" cy="500" r="120" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="3"/>
                    <text x="550" y="492" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">CORE</text>
                    <text x="550" y="526" text-anchor="middle" fill="#888" font-size="15">in or out?</text>
                    <path d="M550 360 L550 320" stroke="#ffd700" stroke-width="3"/>
                    <path d="M550 640 L550 680" stroke="#ffd700" stroke-width="3"/>
                    <path d="M410 500 L370 500" stroke="#ffd700" stroke-width="3"/>
                    <path d="M690 500 L730 500" stroke="#ffd700" stroke-width="3"/>
                    <rect x="250" y="760" width="600" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="815" text-anchor="middle" fill="#ffd700" font-size="19">Hint: think inner tube, not hollow straw</text>
                </svg>`,
                caption: "Final check: what a real brace looks like"
            }
        }
    ]
},
{
    id: 4,
    title: "The Squat: Sitting Down for Strength",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "You Squat Every Single Day — For Now",
            content: "Every time you sit on a chair, lower yourself onto a toilet, or crouch to pick something off the floor, you are squatting. You do it dozens of times a day without thinking. Here is the uncomfortable part: the ability quietly leaves. First the low sofa gets hard. Then you start using your arms to push out of chairs. Eventually, getting off the toilet without a grab bar becomes the dividing line between living at home and needing care.\n\nResearchers have turned this into a test. The **30-second chair stand** — how many times you can stand from a chair in half a minute — predicts falls and future disability with unsettling accuracy. A Brazilian study by Dr. Claudio Gil Araujo found that people who struggled to sit down to the floor and stand back up had markedly higher death rates over the following years.\n\nThe squat is not a gym exercise. It is the movement of independence — and in this lesson, you learn to train it deliberately so you never lose it.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE MOVEMENT OF DAILY LIFE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">You already squat — the question is for how long</text>
                    <rect x="80" y="170" width="300" height="200" rx="20" fill="rgba(99,102,241,0.15)" stroke="#6366f1" stroke-width="2"/>
                    <text x="230" y="235" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">CHAIRS</text>
                    <text x="230" y="280" text-anchor="middle" fill="#fff" font-size="16">Sitting down and</text>
                    <text x="230" y="310" text-anchor="middle" fill="#fff" font-size="16">standing up all day</text>
                    <rect x="400" y="170" width="300" height="200" rx="20" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="235" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">TOILETS</text>
                    <text x="550" y="280" text-anchor="middle" fill="#fff" font-size="16">The quiet dividing line</text>
                    <text x="550" y="310" text-anchor="middle" fill="#fff" font-size="16">of independence</text>
                    <rect x="720" y="170" width="300" height="200" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="870" y="235" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">THE FLOOR</text>
                    <text x="870" y="280" text-anchor="middle" fill="#fff" font-size="16">Getting down and</text>
                    <text x="870" y="310" text-anchor="middle" fill="#fff" font-size="16">back up unassisted</text>
                    <rect x="150" y="440" width="800" height="220" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="500" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">THE 30-SECOND CHAIR STAND TEST</text>
                    <text x="550" y="550" text-anchor="middle" fill="#fff" font-size="18">Stands per 30 seconds predicts falls and disability</text>
                    <text x="550" y="590" text-anchor="middle" fill="#888" font-size="16">Used by the CDC to screen older adults for fall risk</text>
                    <text x="550" y="625" text-anchor="middle" fill="#888" font-size="16">Trainable at any age — that is the good news</text>
                    <rect x="200" y="720" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="770" text-anchor="middle" fill="#ffd700" font-size="20">Use it deliberately, or lose it gradually</text>
                </svg>`,
                caption: "The squat pattern shows up everywhere in daily life"
            }
        },
        {
            type: "concept",
            title: "The Squat Is a Pattern, Not an Exercise",
            content: "Before it is a barbell lift, the squat is a **movement pattern**: hips and knees bend together, your torso stays mostly upright, and you lower your center of mass between your feet — then stand back up.\n\nWhat makes it worth training on purpose:\n• **It is unavoidable** — chairs, toilets, cars, gardening, playing with kids or grandkids all demand it\n• **It trains the biggest engines** — the quadriceps, glutes, and adductors are among the largest muscles you own\n• **It loads the skeleton where it matters** — the hips and spine, the two most devastating fracture sites in later life\n• **It degrades silently** — leg strength declines faster than upper-body strength with age, often 1-2% per year after 50 if untrained\n\nHere is the reframe: every training squat is a rehearsal for ten thousand future chair rises. When you add load — a dumbbell, a barbell — you are not doing something artificial. You are doing the same daily movement with a margin of safety built in, so the everyday version stays effortless for decades.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">PATTERN, NOT EXERCISE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">One movement, a lifetime of uses</text>
                    <circle cx="550" cy="330" r="120" fill="rgba(99,102,241,0.25)" stroke="#6366f1" stroke-width="3"/>
                    <text x="550" y="320" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="24">THE SQUAT</text>
                    <text x="550" y="355" text-anchor="middle" fill="#fff" font-size="16">Hips + knees bend,</text>
                    <text x="550" y="382" text-anchor="middle" fill="#fff" font-size="16">torso stays tall</text>
                    <circle cx="200" cy="620" r="85" fill="rgba(16,185,129,0.25)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="612" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="17">CHAIR</text>
                    <text x="200" y="640" text-anchor="middle" fill="#fff" font-size="14">rises</text>
                    <circle cx="435" cy="680" r="85" fill="rgba(245,158,11,0.25)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="435" y="672" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="17">LIFTING</text>
                    <text x="435" y="700" text-anchor="middle" fill="#fff" font-size="14">from low</text>
                    <circle cx="665" cy="680" r="85" fill="rgba(236,72,153,0.2)" stroke="#ec4899" stroke-width="2"/>
                    <text x="665" y="672" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="17">PLAY</text>
                    <text x="665" y="700" text-anchor="middle" fill="#fff" font-size="14">floor games</text>
                    <circle cx="900" cy="620" r="85" fill="rgba(59,130,246,0.25)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="900" y="612" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="17">GARDEN</text>
                    <text x="900" y="640" text-anchor="middle" fill="#fff" font-size="14">crouching</text>
                    <line x1="480" y1="430" x2="250" y2="550" stroke="#ffd700" stroke-width="2" stroke-dasharray="6" opacity="0.5"/>
                    <line x1="520" y1="445" x2="450" y2="595" stroke="#ffd700" stroke-width="2" stroke-dasharray="6" opacity="0.5"/>
                    <line x1="580" y1="445" x2="650" y2="595" stroke="#ffd700" stroke-width="2" stroke-dasharray="6" opacity="0.5"/>
                    <line x1="620" y1="430" x2="850" y2="550" stroke="#ffd700" stroke-width="2" stroke-dasharray="6" opacity="0.5"/>
                    <rect x="150" y="820" width="800" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="860" text-anchor="middle" fill="#ffd700" font-size="19">Every loaded squat is a rehearsal for</text>
                    <text x="550" y="892" text-anchor="middle" fill="#ffd700" font-size="19">ten thousand future chair rises</text>
                </svg>`,
                caption: "One pattern feeds every lower-body task in your life"
            }
        },
        {
            type: "concept",
            title: "The Progression Ladder: Meet Yourself Where You Are",
            content: "You do not start under a barbell. You start where your current strength lives, and you climb one rung at a time:\n\n1. **Box squat** — squat down to a sturdy chair or bench, touch lightly, stand up. The box gives you a depth target and a safety net. Raise the box if needed; lower it as you improve.\n\n2. **Bodyweight squat** — no box. Control the descent, pause briefly at the bottom, drive back up. Own 3 sets of 10-15 with clean form.\n\n3. **Goblet squat** — hold a dumbbell or kettlebell vertically against your chest, elbows tucked. Popularized by coach **Dan John**, the front-loaded weight acts as a counterbalance that actually makes squatting to depth easier and keeps your torso honest.\n\n4. **Barbell squat** — back squat (bar on your upper traps) or front squat (bar on your front shoulders). This is where load can climb for years, because the strongest muscles in your body deserve more than a dumbbell can offer.\n\nEach rung earns the next. Most people can move from box squats to confident goblet squats in 4-8 weeks. There is no prize for skipping steps — only sore knees and sloppy habits.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE SQUAT LADDER</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Climb one rung at a time</text>
                    <rect x="150" y="760" width="800" height="110" rx="20" fill="rgba(99,102,241,0.15)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="805" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="22">1. BOX SQUAT</text>
                    <text x="200" y="845" text-anchor="start" fill="#fff" font-size="17">Sit to a bench, touch lightly, stand — a built-in safety net</text>
                    <rect x="150" y="580" width="800" height="110" rx="20" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="625" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="22">2. BODYWEIGHT SQUAT</text>
                    <text x="200" y="665" text-anchor="start" fill="#fff" font-size="17">No box — own 3 sets of 10-15 with a controlled descent</text>
                    <rect x="150" y="400" width="800" height="110" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="445" text-anchor="start" fill="#10b981" font-weight="bold" font-size="22">3. GOBLET SQUAT</text>
                    <text x="200" y="485" text-anchor="start" fill="#fff" font-size="17">Weight held at chest counterbalances you into clean depth</text>
                    <rect x="150" y="220" width="800" height="110" rx="20" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="265" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="22">4. BARBELL SQUAT</text>
                    <text x="200" y="305" text-anchor="start" fill="#fff" font-size="17">Back or front squat — load can climb for years</text>
                    <path d="M1000 750 L1000 350" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="1000,340 990,360 1010,360" fill="#14b8a6"/>
                    <rect x="200" y="930" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="980" text-anchor="middle" fill="#ffd700" font-size="19">Each rung earns the next — no skipping</text>
                </svg>`,
                caption: "Box to bodyweight to goblet to barbell — earn each rung"
            }
        },
        {
            type: "example",
            title: "Ruth, 68: From Armrest-Pusher to Goblet Squatter",
            content: "Ruth noticed the change the way most people do: she started using her arms to get out of the car, then out of the armchair, then off the toilet. At 68, she scored **7 stands** on the 30-second chair stand test — below the fall-risk threshold for her age group (the CDC benchmark is about 12).\n\nHer trainer did not hand her a barbell. Week one: **box squats** to a high kitchen chair with a cushion, 3 sets of 8, holding the counter for confidence. Every two weeks, one change: cushion removed, then a lower chair, then no hands.\n\nBy week 8, Ruth was doing full **bodyweight squats**. By week 14, she was goblet squatting a **10 kg kettlebell** for sets of 10. Retested at six months: **15 chair stands in 30 seconds** — more than double, and safely out of the risk zone.\n\nThe part she cares about has nothing to do with numbers: she gets off the floor after playing with her granddaughter without planning her escape route first. That is what the squat ladder buys — not gym bragging rights, but an unremarkable, easy daily life.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">RUTH AT 68</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Six months on the squat ladder</text>
                    <rect x="60" y="180" width="460" height="300" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="240" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">BEFORE</text>
                    <text x="290" y="295" text-anchor="middle" fill="#fff" font-size="18">7 chair stands in 30 sec</text>
                    <text x="290" y="335" text-anchor="middle" fill="#888" font-size="16">Below fall-risk threshold</text>
                    <text x="290" y="375" text-anchor="middle" fill="#888" font-size="16">Pushing off armrests daily</text>
                    <text x="290" y="415" text-anchor="middle" fill="#888" font-size="16">Avoiding the floor entirely</text>
                    <rect x="580" y="180" width="460" height="300" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="240" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">AFTER 6 MONTHS</text>
                    <text x="810" y="295" text-anchor="middle" fill="#fff" font-size="18">15 chair stands in 30 sec</text>
                    <text x="810" y="335" text-anchor="middle" fill="#888" font-size="16">Goblet squats: 10 kg x 10</text>
                    <text x="810" y="375" text-anchor="middle" fill="#888" font-size="16">No hands, no planning</text>
                    <text x="810" y="415" text-anchor="middle" fill="#888" font-size="16">Floor play with granddaughter</text>
                    <rect x="150" y="550" width="800" height="260" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="605" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE CLIMB</text>
                    <text x="550" y="655" text-anchor="middle" fill="#fff" font-size="18">Weeks 1-4: box squat to high chair, hands on counter</text>
                    <text x="550" y="695" text-anchor="middle" fill="#fff" font-size="18">Weeks 5-8: lower box, then full bodyweight squats</text>
                    <text x="550" y="735" text-anchor="middle" fill="#fff" font-size="18">Weeks 9-14: goblet squats, load added slowly</text>
                    <text x="550" y="775" text-anchor="middle" fill="#888" font-size="16">One small change every two weeks — that is all it took</text>
                    <rect x="200" y="870" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="920" text-anchor="middle" fill="#ffd700" font-size="19">The goal was never the gym — it was her life</text>
                </svg>`,
                caption: "Small, patient progressions doubled Ruth's chair-stand score"
            }
        },
        {
            type: "quiz",
            question: "You can do solid box squats to a low bench but have never squatted with weight. According to the progression ladder, what comes next?",
            options: [
                { text: "Barbell back squats with light weight, since the bar teaches form fastest", correct: false },
                { text: "Bodyweight squats without the box, controlling the descent", correct: true },
                { text: "Goblet squats, because the counterbalance makes them easier than bodyweight", correct: false },
                { text: "Stay on box squats for at least six months to build a safe foundation", correct: false }
            ],
            explanation: "The ladder runs box squat, then bodyweight squat, then goblet, then barbell — and each rung earns the next. After owning box squats, you remove the box and prove you control the full range unassisted. The goblet option is tempting because the counterbalance genuinely helps depth, but it adds load before you have shown you own the unloaded pattern. And parking on box squats for months wastes trainable time — most people progress a rung in weeks, not seasons.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="130" width="800" height="200" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="190" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE SQUAT LADDER</text>
                    <text x="550" y="240" text-anchor="middle" fill="#fff" font-size="18">Box, bodyweight, goblet, barbell</text>
                    <text x="550" y="280" text-anchor="middle" fill="#888" font-size="16">Each rung earned before the next</text>
                    <rect x="120" y="420" width="200" height="90" rx="15" fill="rgba(99,102,241,0.2)" stroke="#6366f1" stroke-width="2"/>
                    <text x="220" y="475" text-anchor="middle" fill="#fff" font-size="17">Box</text>
                    <path d="M320 465 L360 465" stroke="#14b8a6" stroke-width="2"/>
                    <polygon points="360,465 348,457 348,473" fill="#14b8a6"/>
                    <rect x="360" y="420" width="200" height="90" rx="15" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="460" y="475" text-anchor="middle" fill="#fff" font-size="17">Bodyweight</text>
                    <path d="M560 465 L600 465" stroke="#14b8a6" stroke-width="2"/>
                    <polygon points="600,465 588,457 588,473" fill="#14b8a6"/>
                    <rect x="600" y="420" width="200" height="90" rx="15" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="2"/>
                    <text x="700" y="475" text-anchor="middle" fill="#fff" font-size="17">Goblet</text>
                    <path d="M800 465 L840 465" stroke="#14b8a6" stroke-width="2"/>
                    <polygon points="840,465 828,457 828,473" fill="#14b8a6"/>
                    <rect x="840" y="420" width="180" height="90" rx="15" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="930" y="475" text-anchor="middle" fill="#fff" font-size="17">Barbell</text>
                    <text x="550" y="600" text-anchor="middle" fill="#888" font-size="18">Which rung follows the box?</text>
                </svg>`,
                caption: "Test your understanding of the progression"
            }
        },
        {
            type: "concept",
            title: "Technique: Stance, Tripod Foot, and Depth",
            content: "Good squats are built from the ground up:\n\n• **Stance** — feet roughly shoulder-width, toes turned out 5-30 degrees. There is no single correct angle; your hip anatomy decides. Experiment until the bottom position feels stable, not pinchy.\n\n• **Tripod foot** — keep three points pressed into the floor: big-toe knuckle, little-toe knuckle, and heel. If any point lifts, your base is leaking force.\n\n• **Knees track over toes** — as you descend, push your knees out so they travel in line with your toes. Not caving inward, not forced comically wide — over the toes.\n\n• **Depth** — aim for **parallel or below** (hip crease level with the top of the knee) *as your mobility allows*. Deeper squats train more muscle through more range, but a clean squat to just-above-parallel beats a collapsing deep one every time. Depth is earned through practice and mobility work, not forced on day one.\n\n• **Torso** — braced and tall-ish. Some forward lean is normal, especially if you have long femurs. The spine holds its shape; the hips and knees do the moving.\n\nDescend with control — about two seconds down — pause briefly, then drive the floor away.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">BUILT FROM THE GROUND UP</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Five checkpoints for every rep</text>
                    <rect x="80" y="170" width="440" height="160" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="300" y="225" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">STANCE</text>
                    <text x="300" y="265" text-anchor="middle" fill="#fff" font-size="16">Shoulder-width, toes out</text>
                    <text x="300" y="295" text-anchor="middle" fill="#888" font-size="15">5-30 degrees — anatomy decides</text>
                    <rect x="580" y="170" width="440" height="160" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="800" y="225" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">TRIPOD FOOT</text>
                    <text x="800" y="265" text-anchor="middle" fill="#fff" font-size="16">Big toe + little toe + heel</text>
                    <text x="800" y="295" text-anchor="middle" fill="#888" font-size="15">Three points always planted</text>
                    <rect x="80" y="390" width="440" height="160" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="300" y="445" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">KNEES TRACK</text>
                    <text x="300" y="485" text-anchor="middle" fill="#fff" font-size="16">Knees follow the toes</text>
                    <text x="300" y="515" text-anchor="middle" fill="#888" font-size="15">Not caving in, not forced wide</text>
                    <rect x="580" y="390" width="440" height="160" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="800" y="445" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">DEPTH</text>
                    <text x="800" y="485" text-anchor="middle" fill="#fff" font-size="16">Parallel or below —</text>
                    <text x="800" y="515" text-anchor="middle" fill="#888" font-size="15">as your mobility allows</text>
                    <rect x="150" y="620" width="800" height="170" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="550" y="675" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="20">TORSO</text>
                    <text x="550" y="715" text-anchor="middle" fill="#fff" font-size="17">Braced and tall — some forward lean is normal</text>
                    <text x="550" y="750" text-anchor="middle" fill="#888" font-size="15">The spine holds its shape; hips and knees do the moving</text>
                    <rect x="200" y="850" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="900" text-anchor="middle" fill="#ffd700" font-size="19">Two seconds down, brief pause, drive up</text>
                </svg>`,
                caption: "The five technique checkpoints of a clean squat"
            }
        },
        {
            type: "concept",
            title: "Myth Bust: Knees Past Toes Is Not Dangerous",
            content: "You have probably heard the rule: *never let your knees go past your toes*. It sounds authoritative. It is also wrong for healthy knees — and it was never good science.\n\nForward knee travel is a **normal, necessary** part of deep squatting, stair descent, and lunging. Watch anyone walk down stairs: knees past toes on every step.\n\nThe key evidence: a 2003 study by **Fry and colleagues** in the Journal of Strength and Conditioning Research had lifters squat with knees restricted behind the toes versus squatting naturally. Restricting the knees reduced knee torque by about **22%** — but increased hip and low-back torque by roughly **10-fold**. The stress does not disappear; it relocates to tissues less prepared for it.\n\nA comprehensive 2013 review by **Hartmann, Wirth, and Klusemann** concluded that deep squats with proper technique do not damage healthy knees, and that forces on the ACL and menisci during squatting stay well within tissue tolerance — shear forces are actually *lowest* in the deep position.\n\nOne honest caveat: if you have an existing knee condition, forward knee stress may need managing — that is a conversation for your physio, not a universal rule for everyone. For healthy knees: let them travel.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">MYTH: KNEES PAST TOES</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">What the Fry 2003 study actually found</text>
                    <rect x="60" y="180" width="460" height="340" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="240" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">KNEES HELD BACK</text>
                    <text x="290" y="295" text-anchor="middle" fill="#fff" font-size="18">Knee torque: down ~22%</text>
                    <text x="290" y="340" text-anchor="middle" fill="#fff" font-size="18">Hip + low-back torque:</text>
                    <text x="290" y="375" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">up ~10-fold</text>
                    <text x="290" y="430" text-anchor="middle" fill="#888" font-size="15">Stress relocated, not removed</text>
                    <text x="290" y="465" text-anchor="middle" fill="#888" font-size="15">Awkward, tipped-forward squat</text>
                    <rect x="580" y="180" width="460" height="340" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="240" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">NATURAL KNEE TRAVEL</text>
                    <text x="810" y="295" text-anchor="middle" fill="#fff" font-size="18">Load shared across</text>
                    <text x="810" y="330" text-anchor="middle" fill="#fff" font-size="18">knees, hips, and back</text>
                    <text x="810" y="385" text-anchor="middle" fill="#888" font-size="15">Same motion as descending stairs</text>
                    <text x="810" y="420" text-anchor="middle" fill="#888" font-size="15">Shear lowest in the deep position</text>
                    <text x="810" y="455" text-anchor="middle" fill="#888" font-size="15">(Hartmann 2013 review)</text>
                    <rect x="150" y="590" width="800" height="180" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="645" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">THE HONEST CAVEAT</text>
                    <text x="550" y="690" text-anchor="middle" fill="#fff" font-size="17">Existing knee condition? Manage knee stress with your physio.</text>
                    <text x="550" y="725" text-anchor="middle" fill="#888" font-size="16">Healthy knees? Let them travel — it is what they are built for.</text>
                    <rect x="200" y="830" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="880" text-anchor="middle" fill="#ffd700" font-size="19">Restricting the knees just moves the stress</text>
                </svg>`,
                caption: "Blocking knee travel shifts stress to the hips and low back"
            }
        },
        {
            type: "visual",
            title: "Faults and Fixes: The Big Three",
            content: "Three faults account for most messy squats — and each has a straightforward fix:\n\n• **Heels rising** off the floor usually means limited ankle mobility. Fix: elevate your heels on small plates or wear lifting shoes while you work on calf and ankle mobility.\n\n• **Butt wink** — the pelvis tucking under at the very bottom. A small wink is common and usually harmless; a big one under load is a cue to limit depth to just above where the tuck begins, and expand range gradually.\n\n• **Knee valgus** — knees collapsing inward, often on the way up. Fix: lighten the load and cue *knees out* so they track over the toes; strengthening the glutes helps it stick.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">FAULTS AND FIXES</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">The three most common squat leaks</text>
                    <rect x="80" y="180" width="940" height="200" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="130" y="240" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="21">FAULT: HEELS RISING</text>
                    <text x="130" y="285" text-anchor="start" fill="#fff" font-size="17">Cause: limited ankle mobility</text>
                    <text x="130" y="330" text-anchor="start" fill="#10b981" font-size="17">Fix: elevate heels on plates + ankle mobility work</text>
                    <rect x="80" y="420" width="940" height="200" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="130" y="480" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="21">FAULT: BUTT WINK</text>
                    <text x="130" y="525" text-anchor="start" fill="#fff" font-size="17">Cause: pelvis tucks under at the very bottom</text>
                    <text x="130" y="570" text-anchor="start" fill="#10b981" font-size="17">Fix: limit depth to just above the tuck, expand slowly</text>
                    <rect x="80" y="660" width="940" height="200" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="130" y="720" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="21">FAULT: KNEE VALGUS</text>
                    <text x="130" y="765" text-anchor="start" fill="#fff" font-size="17">Cause: knees collapse inward, usually on the way up</text>
                    <text x="130" y="810" text-anchor="start" fill="#10b981" font-size="17">Fix: lighten load, cue knees out, strengthen glutes</text>
                    <rect x="200" y="920" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="970" text-anchor="middle" fill="#ffd700" font-size="19">Film one set from the side — faults hide from the front</text>
                </svg>`,
                caption: "Diagnose the fault, apply the fix, keep squatting"
            }
        },
        {
            type: "example",
            title: "Marcus Fixes His Squat With a Phone and Two Plates",
            content: "Marcus, 41, felt fine squatting — until he filmed a set from the side. The video showed all three classic faults in one rep: heels peeling off the floor in the bottom third, a visible **butt wink** at max depth, and his left knee drifting inward as he stood up.\n\nHe did not overhaul everything at once. He triaged:\n\n**Week 1** — He put a 2.5 kg plate under each heel. Instantly his heels stayed down and his torso stayed more upright. (Elevated heels reduce the ankle mobility demand — same reason weightlifting shoes have raised heels.)\n\n**Week 2** — He set his depth to stop just above where the wink began, about two inches higher than before. Full tension, no pelvic tuck.\n\n**Weeks 3-8** — He dropped his working weight by 20% and used the cue *spread the floor* on every rep. The left knee stopped caving around week five, and the weight came back with interest.\n\nBy week ten he was squatting deeper than his original videos, heels flat, knees tracking. Total cost: two small plates and thirty seconds of phone footage per session. The lesson: **you cannot fix what you cannot see** — film your sets.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE MARCUS TRIAGE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">One fault at a time, ten weeks total</text>
                    <rect x="150" y="180" width="800" height="130" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="230" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">WEEK 1</text>
                    <text x="200" y="270" text-anchor="start" fill="#fff" font-size="17">Plates under heels — ankles unlocked, torso upright</text>
                    <rect x="150" y="340" width="800" height="130" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="390" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="20">WEEK 2</text>
                    <text x="200" y="430" text-anchor="start" fill="#fff" font-size="17">Depth capped just above the butt wink</text>
                    <rect x="150" y="500" width="800" height="130" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="550" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">WEEKS 3-8</text>
                    <text x="200" y="590" text-anchor="start" fill="#fff" font-size="17">Load -20%, cue: spread the floor — valgus gone by week 5</text>
                    <rect x="150" y="660" width="800" height="130" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="710" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">WEEK 10</text>
                    <text x="200" y="750" text-anchor="start" fill="#fff" font-size="17">Deeper than before, heels flat, knees tracking</text>
                    <rect x="200" y="850" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="890" text-anchor="middle" fill="#ffd700" font-size="19">You cannot fix what you cannot see —</text>
                    <text x="550" y="922" text-anchor="middle" fill="#ffd700" font-size="19">film your sets from the side</text>
                </svg>`,
                caption: "Marcus fixed three faults with two plates and a phone camera"
            }
        },
        {
            type: "concept",
            title: "What Squats Actually Build",
            content: "A squat looks like a leg exercise. It is closer to a whole-body construction project:\n\n• **Quadriceps** — the four-muscle group on your front thigh that straightens the knee. Prime movers on every stair, every chair rise, every catch when you stumble.\n\n• **Glutes** — the hip extensors that drive you out of the bottom. The gluteus maximus is the largest muscle in your body, and squats put it to work.\n\n• **Adductors** — the inner-thigh muscles that stabilize and, from a deep position, powerfully assist hip extension. Chronically undertrained everywhere except the squat.\n\n• **Core** — your trunk braces isometrically the entire time to keep the spine shape steady. Heavy squats are a core workout hiding in plain sight.\n\n• **Bone** — this may matter most. Squats compress the **hip and spine**, exactly the two sites where osteoporotic fractures destroy independence. In the **LIFTMOR trial** (2018), postmenopausal women with low bone mass did twice-weekly heavy squats, deadlifts, and overhead presses: lumbar spine density *increased* about 3% while the control group lost density — with no serious injuries reported.\n\nOne pattern. Five systems. That is why the squat earns its place in every program in this book.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">ONE LIFT, FIVE SYSTEMS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">What every squat is quietly building</text>
                    <rect x="80" y="170" width="300" height="180" rx="20" fill="rgba(99,102,241,0.15)" stroke="#6366f1" stroke-width="2"/>
                    <text x="230" y="230" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">QUADS</text>
                    <text x="230" y="270" text-anchor="middle" fill="#fff" font-size="15">Stairs, chair rises,</text>
                    <text x="230" y="298" text-anchor="middle" fill="#fff" font-size="15">stumble recovery</text>
                    <rect x="400" y="170" width="300" height="180" rx="20" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="230" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">GLUTES</text>
                    <text x="550" y="270" text-anchor="middle" fill="#fff" font-size="15">Largest muscle you own,</text>
                    <text x="550" y="298" text-anchor="middle" fill="#fff" font-size="15">drives you upward</text>
                    <rect x="720" y="170" width="300" height="180" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="870" y="230" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">ADDUCTORS</text>
                    <text x="870" y="270" text-anchor="middle" fill="#fff" font-size="15">Inner thigh — stabilize</text>
                    <text x="870" y="298" text-anchor="middle" fill="#fff" font-size="15">and assist the drive</text>
                    <rect x="240" y="390" width="300" height="180" rx="20" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="390" y="450" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">CORE</text>
                    <text x="390" y="490" text-anchor="middle" fill="#fff" font-size="15">Braces isometrically</text>
                    <text x="390" y="518" text-anchor="middle" fill="#fff" font-size="15">for the entire rep</text>
                    <rect x="560" y="390" width="300" height="180" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="710" y="450" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="20">BONE</text>
                    <text x="710" y="490" text-anchor="middle" fill="#fff" font-size="15">Loads hip and spine —</text>
                    <text x="710" y="518" text-anchor="middle" fill="#fff" font-size="15">key fracture sites</text>
                    <rect x="150" y="640" width="800" height="200" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="550" y="695" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="21">LIFTMOR TRIAL (2018)</text>
                    <text x="550" y="740" text-anchor="middle" fill="#fff" font-size="17">Postmenopausal women, low bone mass, heavy lifting 2x/week</text>
                    <text x="550" y="775" text-anchor="middle" fill="#fff" font-size="17">Spine density up ~3% while controls kept losing</text>
                    <text x="550" y="810" text-anchor="middle" fill="#888" font-size="15">No serious injuries reported in the trial</text>
                    <rect x="200" y="900" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="950" text-anchor="middle" fill="#ffd700" font-size="19">A leg exercise on paper — a body project in practice</text>
                </svg>`,
                caption: "Quads, glutes, adductors, core, and bone — all in one pattern"
            }
        },
        {
            type: "application",
            title: "Your Squat Session This Week",
            content: "**Do this within the next 48 hours:**\n\n1. **Find your rung** — try 10 bodyweight squats to a chair. Effortless? Try 10 without the chair. Still clean? You have earned goblet squats.\n\n2. **Film one set from the side** — check heels, depth, and knee tracking. Thirty seconds of footage tells you more than a month of guessing.\n\n3. **Do 3 sets of 8-10** at your rung, twice this week — leave 2-3 reps in the tank each set, two seconds down, brief pause, drive up.\n\n4. **Apply one fix if needed** — heels rising: put small plates under them. Butt wink: stop just above the tuck. Knees caving: lighten and cue knees out.\n\n5. **Log it** — rung, sets, reps, load. Next week, add one rep per set or a small amount of weight. That slow climb is the entire method.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">YOUR SQUAT WEEK</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Five steps, starting within 48 hours</text>
                    <rect x="150" y="170" width="800" height="120" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="220" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">1.</text>
                    <text x="240" y="220" text-anchor="start" fill="#fff" font-size="18">Find your rung with the chair test</text>
                    <text x="240" y="258" text-anchor="start" fill="#888" font-size="15">10 clean reps unlocks the next level</text>
                    <rect x="150" y="320" width="800" height="120" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="370" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="20">2.</text>
                    <text x="240" y="370" text-anchor="start" fill="#fff" font-size="18">Film one set from the side</text>
                    <text x="240" y="408" text-anchor="start" fill="#888" font-size="15">Check heels, depth, knee tracking</text>
                    <rect x="150" y="470" width="800" height="120" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="520" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">3.</text>
                    <text x="240" y="520" text-anchor="start" fill="#fff" font-size="18">3 sets of 8-10, twice this week</text>
                    <text x="240" y="558" text-anchor="start" fill="#888" font-size="15">Leave 2-3 reps in the tank every set</text>
                    <rect x="150" y="620" width="800" height="120" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="670" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">4.</text>
                    <text x="240" y="670" text-anchor="start" fill="#fff" font-size="18">Apply one fix from the fault list</text>
                    <text x="240" y="708" text-anchor="start" fill="#888" font-size="15">Heels, wink, or valgus — one at a time</text>
                    <rect x="150" y="770" width="800" height="120" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="820" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="20">5.</text>
                    <text x="240" y="820" text-anchor="start" fill="#fff" font-size="18">Log it, then add a rep or a little load next week</text>
                    <text x="240" y="858" text-anchor="start" fill="#888" font-size="15">The slow climb is the entire method</text>
                </svg>`,
                caption: "Your five-step squat plan for this week"
            }
        },
        {
            type: "quiz",
            question: "A friend insists you should never let your knees pass your toes when squatting. Based on the research, what is the most accurate response?",
            options: [
                { text: "Correct — forward knee travel puts dangerous shear on the ACL in healthy knees", correct: false },
                { text: "Restricting knee travel lowers knee torque slightly but shifts far greater stress to the hips and low back", correct: true },
                { text: "It only matters for barbell squats; bodyweight squats are exempt from the rule", correct: false },
                { text: "Knees past toes is fine, but only if you squat above parallel", correct: false }
            ],
            explanation: "Fry's 2003 study found that blocking forward knee travel cut knee torque by about 22% but multiplied hip and low-back torque roughly 10-fold — the stress relocates rather than disappearing. The ACL answer is the tempting one, but the Hartmann 2013 review showed squatting forces stay well within healthy tissue tolerance, with shear actually lowest in deep positions. Knee travel is normal in every squat variation — and depth is not the deciding factor. The caveat is existing knee conditions, which deserve individual guidance.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="130" width="800" height="200" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="190" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">KNEES AND TOES</text>
                    <text x="550" y="240" text-anchor="middle" fill="#fff" font-size="18">Where does the stress go when you</text>
                    <text x="550" y="275" text-anchor="middle" fill="#fff" font-size="18">block forward knee travel?</text>
                    <rect x="120" y="420" width="400" height="220" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="320" y="480" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="19">KNEES BLOCKED</text>
                    <text x="320" y="530" text-anchor="middle" fill="#fff" font-size="16">Knee torque -22%</text>
                    <text x="320" y="570" text-anchor="middle" fill="#fff" font-size="16">Hip/back torque ~10x</text>
                    <rect x="580" y="420" width="400" height="220" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="780" y="480" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">KNEES FREE</text>
                    <text x="780" y="530" text-anchor="middle" fill="#fff" font-size="16">Load shared naturally</text>
                    <text x="780" y="570" text-anchor="middle" fill="#fff" font-size="16">Same as stair descent</text>
                    <text x="550" y="720" text-anchor="middle" fill="#888" font-size="18">Fry 2003 — the study behind the answer</text>
                </svg>`,
                caption: "Final check: the knees-past-toes question"
            }
        }
    ]
},
{
    id: 5,
    title: "The Hinge: The Most Valuable Pattern You've Never Trained",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "The Movement You Do Wrong a Hundred Times a Day",
            content: "Think about the last time you picked something off the ground — a laundry basket, a toddler, a dropped phone charger. How did you do it? If you are like most people, you bent at the waist, rounded your back, and hauled it up with barely a thought.\n\nNow think about how often that happens: groceries, gym bags, boxes, pets, kids. Lifting things off the floor is one of the most repeated physical acts of your life — and almost nobody ever *trains* it.\n\nThe trained version is called the **hip hinge**, and it is arguably the most valuable movement pattern in all of strength training. It is how a strong person picks up anything heavy: hips driving back, back staying solid, the powerful muscles of the hips and hamstrings doing the work that most people dump onto their spine.\n\nHere is the payoff for learning it: the hinge builds the entire back side of your body — the muscles that hold you upright, power your walk, and protect your lower back. In this lesson, you will learn to hinge on purpose. Your future self, lifting a suitcase into an overhead bin at 75, says thanks.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE UNTRAINED PATTERN</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">You lift from the floor constantly — untrained</text>
                    <rect x="80" y="180" width="300" height="170" rx="20" fill="rgba(99,102,241,0.15)" stroke="#6366f1" stroke-width="2"/>
                    <text x="230" y="240" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="19">GROCERIES</text>
                    <text x="230" y="280" text-anchor="middle" fill="#fff" font-size="15">Bags off the floor,</text>
                    <text x="230" y="308" text-anchor="middle" fill="#fff" font-size="15">boot of the car</text>
                    <rect x="400" y="180" width="300" height="170" rx="20" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="240" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="19">KIDS + PETS</text>
                    <text x="550" y="280" text-anchor="middle" fill="#fff" font-size="15">A wriggling 12 kg load</text>
                    <text x="550" y="308" text-anchor="middle" fill="#fff" font-size="15">with no handles</text>
                    <rect x="720" y="180" width="300" height="170" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="870" y="240" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">LUGGAGE</text>
                    <text x="870" y="280" text-anchor="middle" fill="#fff" font-size="15">Suitcases, boxes,</text>
                    <text x="870" y="308" text-anchor="middle" fill="#fff" font-size="15">moving day chaos</text>
                    <rect x="150" y="430" width="800" height="240" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="490" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">THE HIP HINGE</text>
                    <text x="550" y="540" text-anchor="middle" fill="#fff" font-size="18">Hips drive back, back stays solid,</text>
                    <text x="550" y="575" text-anchor="middle" fill="#fff" font-size="18">hips and hamstrings do the lifting</text>
                    <text x="550" y="625" text-anchor="middle" fill="#888" font-size="16">The trained way to pick up anything heavy</text>
                    <rect x="200" y="740" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="780" text-anchor="middle" fill="#ffd700" font-size="19">One of your most repeated movements —</text>
                    <text x="550" y="812" text-anchor="middle" fill="#ffd700" font-size="19">and almost nobody trains it</text>
                </svg>`,
                caption: "Lifting from the floor is constant — training it is rare"
            }
        },
        {
            type: "concept",
            title: "Hinge vs. Squat: Two Different Machines",
            content: "The hinge and the squat look related — both start standing and end lower. Mechanically, they are different machines:\n\n**The squat**:\n• Hips and knees bend *together*\n• Torso stays relatively upright\n• Knees travel forward\n• Quads share the work with glutes\n\n**The hinge**:\n• Hips travel *back* like closing a car door with your butt\n• Shins stay near vertical — knees bend only slightly\n• Torso tips forward as a rigid unit, sometimes near horizontal\n• Glutes and **hamstrings** dominate; quads mostly watch\n\nThe simplest test: where do you feel it? Squats burn the front of your thighs. A proper hinge lights up the *back* — hamstrings stretching taut on the way down like drawn bowstrings, glutes firing to snap you upright.\n\nWhy you need both: the squat is how you lower *yourself*; the hinge is how you lift *things*. A box on the floor, a deadlift bar, a stuck lawnmower — all hinge problems. Miss this pattern and your body improvises with the spine instead. Train it, and the strongest muscles you own finally show up for the job they were built for.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">HINGE VS. SQUAT</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Two machines, two jobs</text>
                    <rect x="60" y="180" width="460" height="420" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="290" y="240" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="22">SQUAT</text>
                    <text x="290" y="295" text-anchor="middle" fill="#fff" font-size="17">Hips + knees bend together</text>
                    <text x="290" y="335" text-anchor="middle" fill="#fff" font-size="17">Torso stays upright</text>
                    <text x="290" y="375" text-anchor="middle" fill="#fff" font-size="17">Knees travel forward</text>
                    <text x="290" y="415" text-anchor="middle" fill="#fff" font-size="17">Quads + glutes share work</text>
                    <text x="290" y="475" text-anchor="middle" fill="#888" font-size="16">Job: lowering and raising</text>
                    <text x="290" y="508" text-anchor="middle" fill="#888" font-size="16">YOURSELF</text>
                    <rect x="580" y="180" width="460" height="420" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="240" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">HINGE</text>
                    <text x="810" y="295" text-anchor="middle" fill="#fff" font-size="17">Hips travel straight back</text>
                    <text x="810" y="335" text-anchor="middle" fill="#fff" font-size="17">Torso tips as a rigid unit</text>
                    <text x="810" y="375" text-anchor="middle" fill="#fff" font-size="17">Shins near vertical</text>
                    <text x="810" y="415" text-anchor="middle" fill="#fff" font-size="17">Glutes + hamstrings dominate</text>
                    <text x="810" y="475" text-anchor="middle" fill="#888" font-size="16">Job: lifting THINGS</text>
                    <text x="810" y="508" text-anchor="middle" fill="#888" font-size="16">off the ground</text>
                    <rect x="150" y="670" width="800" height="170" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="725" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">THE FEEL TEST</text>
                    <text x="550" y="770" text-anchor="middle" fill="#fff" font-size="17">Squats burn the front of the thighs</text>
                    <text x="550" y="805" text-anchor="middle" fill="#fff" font-size="17">A true hinge stretches the hamstrings like bowstrings</text>
                    <rect x="200" y="900" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="950" text-anchor="middle" fill="#ffd700" font-size="19">Miss the hinge and the spine improvises instead</text>
                </svg>`,
                caption: "Squat lowers you; hinge lifts things — feel the difference"
            }
        },
        {
            type: "concept",
            title: "The Hinge Ladder: Bridge to Barbell",
            content: "Like the squat, the hinge has a ladder. Climb it in order:\n\n1. **Glute bridge** — lie on your back, knees bent, feet flat. Drive through your heels and lift your hips until your body forms a straight line from knees to shoulders. Squeeze the glutes hard at the top for two seconds. This teaches your glutes to fire *at all* — many desk-bound people have functionally forgotten.\n\n2. **Hip thrust** — same movement with your upper back on a bench and, eventually, weight across your hips. Bigger range, bigger load, same glute focus.\n\n3. **Romanian deadlift (RDL)** — the standing hinge. Start upright holding dumbbells or a bar. Push your hips *back*, letting the weight slide down your thighs, knees soft, back solid. When your hamstrings say *that is far enough* — usually around mid-shin — drive your hips forward to stand. The RDL is where you truly learn to hinge.\n\n4. **Deadlift from the floor** — the graduation lift. Same hinge, but starting from a dead stop at the bottom, which demands position, patience, and bracing all at once.\n\nSpend two to four weeks on each rung. The RDL is the crown jewel for most people — plenty of lifters productively stay there for months before pulling from the floor.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE HINGE LADDER</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">From floor bridge to barbell pull</text>
                    <rect x="150" y="760" width="800" height="110" rx="20" fill="rgba(99,102,241,0.15)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="805" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="22">1. GLUTE BRIDGE</text>
                    <text x="200" y="845" text-anchor="start" fill="#fff" font-size="17">Wake the glutes — squeeze 2 seconds at the top</text>
                    <rect x="150" y="580" width="800" height="110" rx="20" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="625" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="22">2. HIP THRUST</text>
                    <text x="200" y="665" text-anchor="start" fill="#fff" font-size="17">Shoulders on bench, load across hips, bigger range</text>
                    <rect x="150" y="400" width="800" height="110" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="445" text-anchor="start" fill="#10b981" font-weight="bold" font-size="22">3. ROMANIAN DEADLIFT</text>
                    <text x="200" y="485" text-anchor="start" fill="#fff" font-size="17">The standing hinge — where the pattern is truly learned</text>
                    <rect x="150" y="220" width="800" height="110" rx="20" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="265" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="22">4. DEADLIFT FROM FLOOR</text>
                    <text x="200" y="305" text-anchor="start" fill="#fff" font-size="17">Dead-stop start demands position, patience, bracing</text>
                    <path d="M1000 750 L1000 350" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="1000,340 990,360 1010,360" fill="#14b8a6"/>
                    <rect x="200" y="930" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="980" text-anchor="middle" fill="#ffd700" font-size="19">2-4 weeks per rung — the RDL is the crown jewel</text>
                </svg>`,
                caption: "Glute bridge to hip thrust to RDL to deadlift"
            }
        },
        {
            type: "concept",
            title: "Setup: Neutral Spine, Armpits, and Air",
            content: "Three setup skills turn a bend-over into a hinge:\n\n• **Neutral spine** — your spine has natural curves; *neutral* means holding them steady rather than flexing or arching to extremes. Cue: imagine a broomstick along your back touching the back of your head, upper back, and tailbone. Hinge without losing any of the three contact points. Neutral is a *range*, not a razor edge — small variation is normal.\n\n• **Lat engagement** — before you lift, pull your shoulder blades down and squeeze, as if you were trying to **protect your armpits** from being tickled, or crush oranges between your arms and ribs. This tightens the lats — the big muscles connecting arms to spine — turning your torso and the weight into one rigid system instead of a load swinging from loose ropes.\n\n• **Bracing** — take a breath into your belly, then tighten your trunk 360 degrees as if about to take a friendly punch. This raises intra-abdominal pressure, which stabilizes the spine from the inside like inflating a soda can before standing on it. Brace before the pull, exhale partially through the sticking point, re-breathe at the top.\n\nRun the checklist before every set: spine long, armpits protected, air in, then pull.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE THREE-PART SETUP</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Spine long, armpits protected, air in</text>
                    <rect x="80" y="180" width="300" height="260" rx="20" fill="rgba(99,102,241,0.15)" stroke="#6366f1" stroke-width="2"/>
                    <text x="230" y="240" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">NEUTRAL SPINE</text>
                    <text x="230" y="285" text-anchor="middle" fill="#fff" font-size="15">Broomstick touches head,</text>
                    <text x="230" y="313" text-anchor="middle" fill="#fff" font-size="15">upper back, tailbone</text>
                    <text x="230" y="360" text-anchor="middle" fill="#888" font-size="14">A range, not a razor edge</text>
                    <rect x="400" y="180" width="300" height="260" rx="20" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="240" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">LATS ON</text>
                    <text x="550" y="285" text-anchor="middle" fill="#fff" font-size="15">Protect your armpits —</text>
                    <text x="550" y="313" text-anchor="middle" fill="#fff" font-size="15">shoulder blades down</text>
                    <text x="550" y="360" text-anchor="middle" fill="#888" font-size="14">Torso + load become one unit</text>
                    <rect x="720" y="180" width="300" height="260" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="870" y="240" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">BRACE</text>
                    <text x="870" y="285" text-anchor="middle" fill="#fff" font-size="15">Belly breath, tighten</text>
                    <text x="870" y="313" text-anchor="middle" fill="#fff" font-size="15">360 degrees</text>
                    <text x="870" y="360" text-anchor="middle" fill="#888" font-size="14">Pressure stabilizes the spine</text>
                    <rect x="150" y="510" width="800" height="200" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="565" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">THE SODA CAN PRINCIPLE</text>
                    <text x="550" y="610" text-anchor="middle" fill="#fff" font-size="17">A sealed, pressurized can supports huge weight;</text>
                    <text x="550" y="645" text-anchor="middle" fill="#fff" font-size="17">a dented, open one crumples</text>
                    <text x="550" y="682" text-anchor="middle" fill="#888" font-size="15">Bracing pressurizes your trunk the same way</text>
                    <rect x="200" y="780" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="830" text-anchor="middle" fill="#ffd700" font-size="19">Spine long, armpits protected, air in — then pull</text>
                </svg>`,
                caption: "The pre-lift checklist that makes every hinge safer"
            }
        },
        {
            type: "quiz",
            question: "During a Romanian deadlift, which of these tells you the movement is a true hinge rather than a squat?",
            options: [
                { text: "Your knees bend deeply so your hips can drop toward the floor", correct: false },
                { text: "Your shins stay near vertical while your hips travel back and your hamstrings stretch", correct: true },
                { text: "Your torso stays completely upright throughout the movement", correct: false },
                { text: "You feel the burn mostly in the front of your thighs", correct: false }
            ],
            explanation: "A hinge means hips travel back, shins stay near vertical with only a soft knee bend, and the torso tips forward as a rigid unit — you feel the hamstrings stretch like bowstrings. Deeply bending knees and dropping hips describes a squat, as does an upright torso. And quad burn on the front of the thighs is the squat's signature; the hinge loads the back side — hamstrings and glutes. The feel test is the fastest way to know which machine you are actually using.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="130" width="800" height="200" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="190" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">THE HINGE SIGNATURE</text>
                    <text x="550" y="240" text-anchor="middle" fill="#fff" font-size="18">Hips back, shins vertical, torso tips</text>
                    <text x="550" y="280" text-anchor="middle" fill="#888" font-size="16">Hamstrings stretch, glutes drive</text>
                    <rect x="120" y="420" width="400" height="200" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="320" y="480" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="19">SQUAT FEEL</text>
                    <text x="320" y="530" text-anchor="middle" fill="#fff" font-size="16">Front of thighs burns</text>
                    <text x="320" y="568" text-anchor="middle" fill="#888" font-size="15">Knees forward, torso tall</text>
                    <rect x="580" y="420" width="400" height="200" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="780" y="480" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">HINGE FEEL</text>
                    <text x="780" y="530" text-anchor="middle" fill="#fff" font-size="16">Hamstrings pull taut</text>
                    <text x="780" y="568" text-anchor="middle" fill="#888" font-size="15">Hips back, shins vertical</text>
                    <text x="550" y="710" text-anchor="middle" fill="#888" font-size="18">Which signature marks a true hinge?</text>
                </svg>`,
                caption: "Mid-lesson check: spotting a true hinge"
            }
        },
        {
            type: "concept",
            title: "About 'Lifting With Your Back' — The Honest Version",
            content: "You have heard *lift with your legs, not your back* forever. The truth is more interesting — and more useful. (What follows is education, not medical advice; persistent back pain deserves a qualified professional.)\n\n**What is true**: repeatedly hauling *heavy* loads with a fully rounded back, especially when tired and untrained for it, raises injury risk. The hinge exists precisely so the hips and hamstrings — not spinal ligaments — handle serious weight.\n\n**What is also true**: your spine is a **robust, adaptable structure**, not a stack of china plates. It bends every time you tie your shoes. Some spinal flexion under light load is normal, safe, and unavoidable. Elite deadlifters routinely show *some* rounding under maximal weights without injury.\n\nHere is the part most people never hear: **fear of bending can hurt you more than bending**. Research on the **fear-avoidance model** (Vlaeyen and Linton, 2000) shows that people who become afraid of movement after back pain — who brace, avoid, and guard constantly — tend to have *worse* long-term outcomes than those who keep moving confidently.\n\nSo the goal is not a back that never bends. It is a back so well-trained that bending is a non-event — and heavy lifting is done by hips that know the job.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE HONEST VERSION</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Two truths about your back</text>
                    <rect x="60" y="180" width="460" height="300" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="290" y="240" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">TRUE</text>
                    <text x="290" y="290" text-anchor="middle" fill="#fff" font-size="16">Heavy + rounded + repeated</text>
                    <text x="290" y="322" text-anchor="middle" fill="#fff" font-size="16">+ untrained = higher risk</text>
                    <text x="290" y="375" text-anchor="middle" fill="#888" font-size="15">That is why the hinge exists:</text>
                    <text x="290" y="407" text-anchor="middle" fill="#888" font-size="15">hips take the heavy work</text>
                    <rect x="580" y="180" width="460" height="300" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="240" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">ALSO TRUE</text>
                    <text x="810" y="290" text-anchor="middle" fill="#fff" font-size="16">The spine is robust and</text>
                    <text x="810" y="322" text-anchor="middle" fill="#fff" font-size="16">adapts to training</text>
                    <text x="810" y="375" text-anchor="middle" fill="#888" font-size="15">It bends when you tie your</text>
                    <text x="810" y="407" text-anchor="middle" fill="#888" font-size="15">shoes — that is fine</text>
                    <rect x="150" y="550" width="800" height="230" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="605" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">THE FEAR-AVOIDANCE TRAP</text>
                    <text x="550" y="650" text-anchor="middle" fill="#fff" font-size="17">Vlaeyen + Linton (2000): fear of movement after pain</text>
                    <text x="550" y="685" text-anchor="middle" fill="#fff" font-size="17">predicts worse long-term outcomes</text>
                    <text x="550" y="725" text-anchor="middle" fill="#888" font-size="15">Guarding and avoiding can harm more than bending does</text>
                    <text x="550" y="757" text-anchor="middle" fill="#888" font-size="14">Educational content — persistent pain deserves a professional</text>
                    <rect x="200" y="850" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="890" text-anchor="middle" fill="#ffd700" font-size="19">Goal: a back so well-trained that</text>
                    <text x="550" y="922" text-anchor="middle" fill="#ffd700" font-size="19">bending is a non-event</text>
                </svg>`,
                caption: "Respect heavy rounded lifting; reject fear of all bending"
            }
        },
        {
            type: "concept",
            title: "The Engine Room: Hamstrings and Glutes",
            content: "Meet the muscles the hinge is built to train:\n\n• **Gluteus maximus** — the largest muscle in your body, and the most powerful hip extensor you own. Its job is driving your hips forward: standing up, climbing, sprinting, and locking out every deadlift. Hours of daily sitting leave it underused and often weak — physiotherapists sometimes call this pattern *gluteal amnesia*.\n\n• **Hamstrings** — three muscles (biceps femoris, semitendinosus, semimembranosus) running down the back of your thigh. They cross *two* joints, extending the hip and bending the knee, which is why they stretch so dramatically at the bottom of an RDL.\n\nWhy strong glutes matter for your back: hip extension is a job that *someone* must do every time you straighten up with a load. When glutes are strong, they do it. When they are weak, the low-back muscles and hamstrings compensate — doing overtime on a job they were never meant to lead. Strong glutes function like a well-staffed crew: the spine goes back to its actual job of staying rigid, instead of moonlighting as an engine.\n\nThe hinge is the single best tool for rebuilding this engine room — which is exactly why it earns the *most valuable pattern* title.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE ENGINE ROOM</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">The muscles behind every hinge</text>
                    <rect x="60" y="180" width="460" height="330" rx="20" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="290" y="240" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="21">GLUTEUS MAXIMUS</text>
                    <text x="290" y="290" text-anchor="middle" fill="#fff" font-size="16">Largest muscle in the body</text>
                    <text x="290" y="325" text-anchor="middle" fill="#fff" font-size="16">Most powerful hip extensor</text>
                    <text x="290" y="375" text-anchor="middle" fill="#888" font-size="15">Weakened by chronic sitting —</text>
                    <text x="290" y="407" text-anchor="middle" fill="#888" font-size="15">the gluteal amnesia pattern</text>
                    <text x="290" y="455" text-anchor="middle" fill="#888" font-size="15">Job: drive hips forward</text>
                    <rect x="580" y="180" width="460" height="330" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="240" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">HAMSTRINGS</text>
                    <text x="810" y="290" text-anchor="middle" fill="#fff" font-size="16">Biceps femoris +</text>
                    <text x="810" y="325" text-anchor="middle" fill="#fff" font-size="16">semitendinosus + semimembranosus</text>
                    <text x="810" y="375" text-anchor="middle" fill="#888" font-size="15">Cross two joints: extend hip,</text>
                    <text x="810" y="407" text-anchor="middle" fill="#888" font-size="15">bend knee</text>
                    <text x="810" y="455" text-anchor="middle" fill="#888" font-size="15">Why the RDL stretch is so deep</text>
                    <rect x="150" y="580" width="800" height="210" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="635" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">WHY YOUR BACK CARES</text>
                    <text x="550" y="680" text-anchor="middle" fill="#fff" font-size="17">Strong glutes lead hip extension; the spine stays rigid</text>
                    <text x="550" y="715" text-anchor="middle" fill="#fff" font-size="17">Weak glutes push overtime onto the low back</text>
                    <text x="550" y="752" text-anchor="middle" fill="#888" font-size="15">A well-staffed crew keeps every muscle on its own job</text>
                    <rect x="200" y="860" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="910" text-anchor="middle" fill="#ffd700" font-size="19">The hinge rebuilds the engine room</text>
                </svg>`,
                caption: "Glutes and hamstrings: the hinge's prime movers"
            }
        },
        {
            type: "example",
            title: "David's Moving Day: Two Versions of the Same Weekend",
            content: "David, 38, has helped friends move twice — once before he trained the hinge, once after.\n\n**Moving day, version one (age 35)**: forty boxes, a sofa, and a washing machine, all lifted the untrained way — stiff legs, rounded back, yanking loads away from his body. By Sunday night his lower back had seized. He spent three days shuffling around his apartment and two weeks feeling fragile. Nothing was torn — just tissues pushed far past what they were prepared for.\n\n**Moving day, version two (age 38)**: after a year that included RDLs at 80 kg for sets of eight, the same job felt like a light training session. He hinged to every box, kept loads close to his body, braced before the heavy ones, and squeezed his glutes through each lift. Monday morning he went for a run.\n\nThe difference was not caution — he actually moved *more* boxes the second time. The difference was **capacity**: tissues trained to handle multiples of moving-day weight treat moving day as a warm-up.\n\nThis is the quiet argument for the hinge: life does not stop presenting heavy objects. You can meet them prepared or unprepared, and preparation is trainable.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">TWO MOVING DAYS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Same boxes, different body</text>
                    <rect x="60" y="180" width="460" height="360" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="240" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">AGE 35: UNTRAINED</text>
                    <text x="290" y="295" text-anchor="middle" fill="#fff" font-size="16">Stiff legs, rounded back,</text>
                    <text x="290" y="327" text-anchor="middle" fill="#fff" font-size="16">loads yanked far from body</text>
                    <text x="290" y="380" text-anchor="middle" fill="#888" font-size="15">Back seized Sunday night</text>
                    <text x="290" y="412" text-anchor="middle" fill="#888" font-size="15">Three days shuffling</text>
                    <text x="290" y="444" text-anchor="middle" fill="#888" font-size="15">Two weeks feeling fragile</text>
                    <rect x="580" y="180" width="460" height="360" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="240" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">AGE 38: TRAINED</text>
                    <text x="810" y="295" text-anchor="middle" fill="#fff" font-size="16">RDLs at 80 kg x 8 in the bank</text>
                    <text x="810" y="327" text-anchor="middle" fill="#fff" font-size="16">Hinged, braced, loads close</text>
                    <text x="810" y="380" text-anchor="middle" fill="#888" font-size="15">Moved MORE boxes than before</text>
                    <text x="810" y="412" text-anchor="middle" fill="#888" font-size="15">Felt like a light session</text>
                    <text x="810" y="444" text-anchor="middle" fill="#888" font-size="15">Ran Monday morning</text>
                    <rect x="150" y="610" width="800" height="180" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="665" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">THE DIFFERENCE: CAPACITY</text>
                    <text x="550" y="710" text-anchor="middle" fill="#fff" font-size="17">Tissues trained beyond moving-day weight</text>
                    <text x="550" y="745" text-anchor="middle" fill="#fff" font-size="17">treat moving day as a warm-up</text>
                    <rect x="200" y="850" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="900" text-anchor="middle" fill="#ffd700" font-size="19">Life keeps presenting heavy objects — prepare</text>
                </svg>`,
                caption: "Trained capacity turned moving day into a warm-up"
            }
        },
        {
            type: "example",
            title: "Is the Deadlift Dangerous? What the Numbers Say",
            content: "The deadlift has a scary reputation — a barbell, a bent-over human, an internet full of injury compilations. The data tells a calmer story.\n\nInjury surveillance studies of **powerlifting** — the sport built around maximal squats, bench presses, and deadlifts — consistently report roughly **1 to 4 injuries per 1,000 hours of training** (Aasa and colleagues, 2017 systematic review). For comparison, studies of recreational **running** commonly report figures from about **2.5 to over 17 per 1,000 hours** depending on the population, and team sports like soccer run far higher. Lifting heavy things with a barbell is, statistically, one of the *safer* ways to use a body.\n\nAnd remember the flip side from Lesson 1: *not* lifting carries its own risk — sarcopenia, fragile bones, and falls injure vastly more people than deadlifts ever will.\n\nWhat actually hurts lifters is rarely the exercise itself. It is **dosage errors**: adding weight too fast, maxing out while exhausted, ignoring a niggle for six weeks, doing too much too soon after time off. A deadlift at an appropriate load, progressed patiently, is not a gamble. It is one of the most protective things you can teach your body — poorly dosed loading is the real hazard, and dosage is entirely under your control.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">DANGEROUS? CHECK THE DATA</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Injuries per 1,000 training hours</text>
                    <text x="180" y="230" text-anchor="start" fill="#fff" font-size="18">Powerlifting</text>
                    <rect x="180" y="250" width="160" height="50" rx="10" fill="rgba(16,185,129,0.4)" stroke="#10b981" stroke-width="2"/>
                    <text x="360" y="283" text-anchor="start" fill="#10b981" font-weight="bold" font-size="18">~1-4</text>
                    <text x="180" y="390" text-anchor="start" fill="#fff" font-size="18">Recreational running</text>
                    <rect x="180" y="410" width="420" height="50" rx="10" fill="rgba(245,158,11,0.4)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="620" y="443" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="18">~2.5-17+</text>
                    <text x="180" y="550" text-anchor="start" fill="#fff" font-size="18">Team sports (e.g. soccer)</text>
                    <rect x="180" y="570" width="650" height="50" rx="10" fill="rgba(239,68,68,0.4)" stroke="#ef4444" stroke-width="2"/>
                    <text x="850" y="603" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="18">far higher</text>
                    <text x="550" y="680" text-anchor="middle" fill="#888" font-size="15">Aasa et al. 2017 systematic review; running estimates vary by study</text>
                    <rect x="150" y="730" width="800" height="180" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="785" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">THE REAL HAZARD: DOSAGE ERRORS</text>
                    <text x="550" y="830" text-anchor="middle" fill="#fff" font-size="17">Too much weight, too fast, too tired, too soon</text>
                    <text x="550" y="865" text-anchor="middle" fill="#888" font-size="15">The exercise is not the risk — the dosing is</text>
                    <rect x="200" y="960" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1010" text-anchor="middle" fill="#ffd700" font-size="19">Well-dosed deadlifts protect; poor dosing hurts</text>
                </svg>`,
                caption: "Lifting is statistically among the safer physical pursuits"
            }
        },
        {
            type: "application",
            title: "Learn Your Hinge Today",
            content: "**Fifteen minutes, no equipment needed to start:**\n\n1. **Broomstick drill** — hold any stick along your spine touching head, upper back, and tailbone. Push your hips back until you feel your hamstrings stretch, then stand by squeezing your glutes. 2 sets of 10. All three contact points stay glued.\n\n2. **Glute bridges** — 2 sets of 12 with a two-second squeeze at the top. If your hamstrings cramp or you feel it only in your low back, your glutes are still asleep — slow down and squeeze harder.\n\n3. **Hip-hinge to a wall** — stand a foot from a wall, facing away. Push your hips back until they touch it. Step slightly farther away each set. This grooves the *hips back* motion without any weight.\n\n4. **Load it lightly** — once the pattern feels natural, hold a single dumbbell, kettlebell, or loaded backpack and do 2 sets of 8 RDLs. Weight slides down your thighs, shins vertical, armpits protected.\n\n5. **Use it in the wild** — next time you pick anything off the floor this week, hinge deliberately. Every rep counts, even the laundry.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">YOUR HINGE PRACTICE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Fifteen minutes, starting today</text>
                    <rect x="150" y="170" width="800" height="120" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="220" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">1.</text>
                    <text x="240" y="220" text-anchor="start" fill="#fff" font-size="18">Broomstick drill — 2 x 10</text>
                    <text x="240" y="258" text-anchor="start" fill="#888" font-size="15">Head, upper back, tailbone stay in contact</text>
                    <rect x="150" y="320" width="800" height="120" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="370" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="20">2.</text>
                    <text x="240" y="370" text-anchor="start" fill="#fff" font-size="18">Glute bridges — 2 x 12, squeeze at the top</text>
                    <text x="240" y="408" text-anchor="start" fill="#888" font-size="15">Two-second hold — wake those glutes</text>
                    <rect x="150" y="470" width="800" height="120" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="520" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">3.</text>
                    <text x="240" y="520" text-anchor="start" fill="#fff" font-size="18">Wall hinge — hips back until they touch</text>
                    <text x="240" y="558" text-anchor="start" fill="#888" font-size="15">Step farther from the wall each set</text>
                    <rect x="150" y="620" width="800" height="120" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="670" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">4.</text>
                    <text x="240" y="670" text-anchor="start" fill="#fff" font-size="18">Light RDLs — 2 x 8 with any weight you have</text>
                    <text x="240" y="708" text-anchor="start" fill="#888" font-size="15">Weight slides down thighs, shins vertical</text>
                    <rect x="150" y="770" width="800" height="120" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="820" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="20">5.</text>
                    <text x="240" y="820" text-anchor="start" fill="#fff" font-size="18">Hinge in the wild — every floor pickup this week</text>
                    <text x="240" y="858" text-anchor="start" fill="#888" font-size="15">Even the laundry counts as practice</text>
                </svg>`,
                caption: "Five drills to install the hinge pattern today"
            }
        },
        {
            type: "quote",
            content: "You don't get injured because your back is weak. You get injured when the demand exceeds what your back is prepared for. So prepare it.",
            author: "Adapted from the load-management principle in sports science",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">WISDOM</text>
                    <rect x="100" y="150" width="900" height="280" rx="20" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="160" y="220" text-anchor="start" fill="#fff" font-style="italic" font-size="22">You don't get injured because your</text>
                    <text x="160" y="260" text-anchor="start" fill="#fff" font-style="italic" font-size="22">back is weak. You get injured when the</text>
                    <text x="160" y="300" text-anchor="start" fill="#fff" font-style="italic" font-size="22">demand exceeds what your back is</text>
                    <text x="160" y="340" text-anchor="start" fill="#fff" font-style="italic" font-size="22">prepared for. So prepare it.</text>
                    <text x="940" y="395" text-anchor="end" fill="#8b5cf6" font-size="17">— the load-management principle</text>
                    <rect x="150" y="500" width="800" height="200" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="560" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">PREPARATION IS TRAINABLE</text>
                    <text x="550" y="605" text-anchor="middle" fill="#fff" font-size="17">Every hinge session raises the ceiling</text>
                    <text x="550" y="640" text-anchor="middle" fill="#fff" font-size="17">of what your back is prepared for</text>
                </svg>`,
                caption: "Capacity, not caution, is the real protection"
            }
        },
        {
            type: "quiz",
            question: "Which statement best captures the evidence on deadlifts and back safety?",
            options: [
                { text: "Deadlifts are inherently dangerous and should be replaced with machines that lock the spine in place", correct: false },
                { text: "Any spinal flexion under any load causes cumulative damage, so the back must never round", correct: false },
                { text: "Injury risk comes mainly from poor dosing — too much load, too fast, too fatigued — not from the lift itself", correct: true },
                { text: "Deadlifts are safe only for young lifters, since older spines can no longer adapt to loading", correct: false }
            ],
            explanation: "Powerlifting injury rates run around 1-4 per 1,000 training hours — lower than most recreational running estimates — so the lift itself is not the hazard. What hurts lifters is dosage error: load added too fast, maxing while exhausted, ignoring warning signs. The never-round answer is the tempting one, but the spine flexes safely under light load constantly, and fear-avoidance research shows fear of all bending worsens outcomes. Older adults adapt well to progressive loading too — the LIFTMOR trial proved it with heavy deadlifts.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="130" width="800" height="200" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="190" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">DEADLIFT SAFETY</text>
                    <text x="550" y="240" text-anchor="middle" fill="#fff" font-size="18">The lift, the load, or the dosing —</text>
                    <text x="550" y="275" text-anchor="middle" fill="#888" font-size="16">where does the real risk live?</text>
                    <rect x="120" y="420" width="270" height="180" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="255" y="480" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="18">GOOD DOSE</text>
                    <text x="255" y="525" text-anchor="middle" fill="#fff" font-size="15">Gradual load,</text>
                    <text x="255" y="553" text-anchor="middle" fill="#fff" font-size="15">patient progress</text>
                    <rect x="420" y="420" width="270" height="180" rx="20" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="555" y="480" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="18">RISKY DOSE</text>
                    <text x="555" y="525" text-anchor="middle" fill="#fff" font-size="15">Big jumps,</text>
                    <text x="555" y="553" text-anchor="middle" fill="#fff" font-size="15">maxing out tired</text>
                    <rect x="720" y="420" width="270" height="180" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="855" y="480" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="18">NO DOSE</text>
                    <text x="855" y="525" text-anchor="middle" fill="#fff" font-size="15">Untrained back</text>
                    <text x="855" y="553" text-anchor="middle" fill="#fff" font-size="15">meets moving day</text>
                    <text x="550" y="690" text-anchor="middle" fill="#888" font-size="18">Same exercise — three very different risks</text>
                </svg>`,
                caption: "Final check: dosage, not the deadlift, drives risk"
            }
        }
    ]
},
{
    id: 6,
    title: "Push & Pull: Balancing the Upper Body",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "Your Upper Body Is a Tug-of-War You're Losing",
            content: "Look at your posture right now. Shoulders drifting forward? Chest slightly caved? That is the shape of modern life: hours of pushing — keyboards, steering wheels, phones held out front — and almost nothing pulling you back the other way.\n\nYour upper body is a tug-of-war between the muscles on the front that **push** and the muscles on the back that **pull**. When one side trains all day by accident and the other side never trains at all, you get the rounded, forward-slumped shape you see in every office and airport on Earth — plus shoulders that ache when you finally do reach overhead.\n\nThe fix is not a posture gadget. It is training **both sides on purpose**: pushing movements like push-ups and presses, pulling movements like rows and pull-ups, in roughly equal amounts.\n\nIn this lesson you learn all four upper-body patterns — horizontal push, vertical push, horizontal pull, vertical pull — how to progress each from wherever you are today, and why the pulls quietly deliver a bonus that connects straight back to the grip-strength mortality data from Lesson 1. Time to win the tug-of-war.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE TUG-OF-WAR</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Front pushes all day — the back never pulls</text>
                    <rect x="60" y="200" width="460" height="300" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="260" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">FRONT: OVERWORKED</text>
                    <text x="290" y="315" text-anchor="middle" fill="#fff" font-size="16">Keyboards, phones, wheels —</text>
                    <text x="290" y="347" text-anchor="middle" fill="#fff" font-size="16">arms forward for hours</text>
                    <text x="290" y="400" text-anchor="middle" fill="#888" font-size="15">Chest and front shoulders</text>
                    <text x="290" y="432" text-anchor="middle" fill="#888" font-size="15">shorten and dominate</text>
                    <rect x="580" y="200" width="460" height="300" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="810" y="260" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="21">BACK: UNDERUSED</text>
                    <text x="810" y="315" text-anchor="middle" fill="#fff" font-size="16">Almost nothing in daily life</text>
                    <text x="810" y="347" text-anchor="middle" fill="#fff" font-size="16">pulls your shoulders back</text>
                    <text x="810" y="400" text-anchor="middle" fill="#888" font-size="15">Upper back and rear shoulders</text>
                    <text x="810" y="432" text-anchor="middle" fill="#888" font-size="15">weaken and lengthen</text>
                    <path d="M520 350 L580 350" stroke="#ffd700" stroke-width="3" stroke-dasharray="8"/>
                    <rect x="150" y="570" width="800" height="200" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="625" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">THE FIX: TRAIN BOTH SIDES</text>
                    <text x="550" y="670" text-anchor="middle" fill="#fff" font-size="17">Push-ups and presses for the front,</text>
                    <text x="550" y="705" text-anchor="middle" fill="#fff" font-size="17">rows and pull-ups for the back — roughly 1:1</text>
                    <rect x="200" y="830" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="880" text-anchor="middle" fill="#ffd700" font-size="19">Posture is not a gadget problem — it is a balance problem</text>
                </svg>`,
                caption: "Modern life overtrains the front and abandons the back"
            }
        },
        {
            type: "concept",
            title: "The Four Quadrants of Upper-Body Strength",
            content: "Every upper-body exercise worth doing fits a simple two-by-two grid — push or pull, horizontal or vertical:\n\n• **Horizontal push** — pressing away from your chest: **push-ups, bench press**. Builds chest, front shoulders, triceps. Real-world: pushing a door, a car, or yourself off the ground after a fall.\n\n• **Vertical push** — pressing overhead: **overhead press**. Builds shoulders and triceps, plus serious core work to keep you from arching. Real-world: luggage into overhead bins, boxes onto high shelves.\n\n• **Horizontal pull** — rowing toward your torso: **dumbbell rows, cable rows, inverted rows**. Builds the mid-back, rear shoulders, and biceps — the posture muscles.\n\n• **Vertical pull** — pulling your body or a bar down from overhead: **pull-ups, chin-ups, lat pulldowns**. Builds the lats, the biggest muscles of your back.\n\nWhy the grid matters: it is a completeness check. Most self-made programs are two-quadrant programs — usually horizontal push plus a token row — leaving whole regions untrained. Cover all four quadrants each week, even with just one exercise per box, and your upper body develops evenly: front and back, low and high. Balanced structure is what keeps shoulders happy for decades.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE FOUR QUADRANTS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Push or pull, horizontal or vertical</text>
                    <rect x="80" y="180" width="440" height="280" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="300" y="240" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">HORIZONTAL PUSH</text>
                    <text x="300" y="285" text-anchor="middle" fill="#fff" font-size="16">Push-up, bench press</text>
                    <text x="300" y="325" text-anchor="middle" fill="#888" font-size="15">Chest, front delts, triceps</text>
                    <text x="300" y="365" text-anchor="middle" fill="#888" font-size="15">Doors, floors, getting up</text>
                    <rect x="580" y="180" width="440" height="280" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="800" y="240" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">VERTICAL PUSH</text>
                    <text x="800" y="285" text-anchor="middle" fill="#fff" font-size="16">Overhead press</text>
                    <text x="800" y="325" text-anchor="middle" fill="#888" font-size="15">Shoulders, triceps, core</text>
                    <text x="800" y="365" text-anchor="middle" fill="#888" font-size="15">Overhead bins, high shelves</text>
                    <rect x="80" y="500" width="440" height="280" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="300" y="560" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">HORIZONTAL PULL</text>
                    <text x="300" y="605" text-anchor="middle" fill="#fff" font-size="16">Rows — dumbbell, cable, inverted</text>
                    <text x="300" y="645" text-anchor="middle" fill="#888" font-size="15">Mid-back, rear delts, biceps</text>
                    <text x="300" y="685" text-anchor="middle" fill="#888" font-size="15">The posture muscles</text>
                    <rect x="580" y="500" width="440" height="280" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="800" y="560" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">VERTICAL PULL</text>
                    <text x="800" y="605" text-anchor="middle" fill="#fff" font-size="16">Pull-up, chin-up, pulldown</text>
                    <text x="800" y="645" text-anchor="middle" fill="#888" font-size="15">Lats — the back's biggest muscles</text>
                    <text x="800" y="685" text-anchor="middle" fill="#888" font-size="15">Climbing, hoisting yourself</text>
                    <rect x="150" y="850" width="800" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="890" text-anchor="middle" fill="#ffd700" font-size="19">Cover all four boxes weekly —</text>
                    <text x="550" y="922" text-anchor="middle" fill="#ffd700" font-size="19">one exercise per box is enough to start</text>
                </svg>`,
                caption: "A two-by-two completeness check for your upper body"
            }
        },
        {
            type: "concept",
            title: "The Push-Up: A Moving Plank With a Ladder",
            content: "The push-up is the most accessible strength exercise on Earth — no equipment, infinitely scalable, and secretly a core exercise: it is a **moving plank**. From head to heels your body holds one rigid line while the arms do the pumping. Sagging hips or a piked butt means the plank failed before the arms did.\n\nThe ladder:\n\n1. **Wall push-up** — hands on a wall, body angled slightly. Master 3 sets of 15 with a rigid line.\n\n2. **Incline push-up** — hands on a counter, then a bench, then a low step. Every inch lower shifts more bodyweight onto your arms. This is the widest rung — most people live here for weeks, and that is exactly right.\n\n3. **Floor push-up** — hands under shoulders, elbows tracking about 45 degrees from your torso (not flared to 90), chest to within a fist of the floor. Even one clean rep is a milestone.\n\n4. **Deficit push-up** — hands elevated on blocks or dumbbells so your chest can travel *below* hand level. Greater range, greater stimulus — this rung keeps paying long after floor push-ups get easy.\n\nForm rules on every rung: squeeze your glutes, brace your trunk, and move as one unit. If your low back aches, the plank is leaking — go back up a rung.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE PUSH-UP LADDER</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">A moving plank, scaled to you</text>
                    <rect x="150" y="760" width="800" height="110" rx="20" fill="rgba(99,102,241,0.15)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="805" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="22">1. WALL</text>
                    <text x="200" y="845" text-anchor="start" fill="#fff" font-size="17">Hands on wall — master 3 x 15 with a rigid line</text>
                    <rect x="150" y="580" width="800" height="110" rx="20" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="625" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="22">2. INCLINE</text>
                    <text x="200" y="665" text-anchor="start" fill="#fff" font-size="17">Counter, bench, low step — lower inch by inch</text>
                    <rect x="150" y="400" width="800" height="110" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="445" text-anchor="start" fill="#10b981" font-weight="bold" font-size="22">3. FLOOR</text>
                    <text x="200" y="485" text-anchor="start" fill="#fff" font-size="17">Elbows ~45 degrees, chest within a fist of the floor</text>
                    <rect x="150" y="220" width="800" height="110" rx="20" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="265" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="22">4. DEFICIT</text>
                    <text x="200" y="305" text-anchor="start" fill="#fff" font-size="17">Hands elevated — chest travels below hand level</text>
                    <path d="M1000 750 L1000 350" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="1000,340 990,360 1010,360" fill="#14b8a6"/>
                    <rect x="200" y="930" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="980" text-anchor="middle" fill="#ffd700" font-size="19">Low back aching? The plank is leaking — go up a rung</text>
                </svg>`,
                caption: "Wall to incline to floor to deficit — the plank never leaks"
            }
        },
        {
            type: "example",
            title: "Forty Push-Ups: The Firefighter Study",
            content: "In 2019, researchers led by **Justin Yang** published a study in **JAMA Network Open** that gave the humble push-up a surprising credential.\n\nThey followed **1,104 male firefighters** (average age 39) for ten years. At baseline, each man did a simple test: max push-ups in time with a metronome. Then the researchers tracked cardiovascular events — heart attacks, heart failure, sudden cardiac death.\n\nThe result: men who could do **40 or more push-ups** had a **96% lower risk** of cardiovascular events over the decade compared with men who managed **fewer than 10**. Remarkably, push-up capacity predicted risk *better than the treadmill test* the researchers ran alongside it.\n\nNow the honest caveats: this was one occupational group — male firefighters — so the exact numbers do not transfer directly to everyone. And it is correlation: push-up capacity is a *marker* of overall fitness, body composition, and health, not a magic shield. Doing 40 sloppy push-ups tomorrow will not rewire your arteries overnight.\n\nBut the practical takeaway stands: a simple, equipment-free strength test carried a decade of prognostic information. Your push-up count is worth knowing — and worth moving. Test yours this week and write it down.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE FIREFIGHTER STUDY</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Yang et al., JAMA Network Open, 2019</text>
                    <rect x="150" y="170" width="800" height="160" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="550" y="225" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="20">THE SETUP</text>
                    <text x="550" y="268" text-anchor="middle" fill="#fff" font-size="17">1,104 male firefighters, average age 39,</text>
                    <text x="550" y="300" text-anchor="middle" fill="#fff" font-size="17">max push-up test, then 10 years of follow-up</text>
                    <rect x="60" y="390" width="460" height="280" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="450" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">UNDER 10 PUSH-UPS</text>
                    <text x="290" y="505" text-anchor="middle" fill="#fff" font-size="17">Highest rate of heart</text>
                    <text x="290" y="540" text-anchor="middle" fill="#fff" font-size="17">attacks and cardiac events</text>
                    <text x="290" y="595" text-anchor="middle" fill="#888" font-size="15">The reference group</text>
                    <rect x="580" y="390" width="460" height="280" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="450" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">40+ PUSH-UPS</text>
                    <text x="810" y="505" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="26">96% lower risk</text>
                    <text x="810" y="555" text-anchor="middle" fill="#fff" font-size="16">of cardiovascular events</text>
                    <text x="810" y="595" text-anchor="middle" fill="#888" font-size="15">Beat the treadmill test as a predictor</text>
                    <rect x="150" y="740" width="800" height="170" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="795" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">HONEST CAVEATS</text>
                    <text x="550" y="838" text-anchor="middle" fill="#fff" font-size="16">One occupational group; correlation, not magic —</text>
                    <text x="550" y="872" text-anchor="middle" fill="#fff" font-size="16">push-up capacity is a marker of overall fitness</text>
                    <rect x="200" y="960" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1010" text-anchor="middle" fill="#ffd700" font-size="19">Test your push-up count this week — write it down</text>
                </svg>`,
                caption: "Push-up capacity carried a decade of prognostic information"
            }
        },
        {
            type: "quiz",
            question: "During a set of floor push-ups your hips start sagging toward the ground while your arms can still press. What does the moving plank idea say you should do?",
            options: [
                { text: "Keep going — the arms are the target muscles and they have reps left", correct: false },
                { text: "Flare your elbows to 90 degrees so the chest takes over more of the load", correct: false },
                { text: "End the set or move to an easier incline — the rigid body line has failed", correct: true },
                { text: "Speed up your reps so the set ends before your hips drop further", correct: false }
            ],
            explanation: "A push-up is a moving plank: head to heels stays one rigid line while the arms do the pumping. Sagging hips mean the core has failed even though the arms still work — pressing on trains a broken position and often aggravates the low back. The right move is ending the set or stepping up a rung on the ladder to an incline where you can hold the line. Elbows flared to 90 degrees adds shoulder stress rather than fixing anything, and speeding up just hides the leak.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="130" width="800" height="200" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="190" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE MOVING PLANK</text>
                    <text x="550" y="240" text-anchor="middle" fill="#fff" font-size="18">One rigid line from head to heels</text>
                    <text x="550" y="280" text-anchor="middle" fill="#888" font-size="16">The set ends when the line breaks</text>
                    <rect x="120" y="420" width="400" height="200" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="320" y="480" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">LINE HOLDS</text>
                    <line x1="180" y1="545" x2="460" y2="545" stroke="#10b981" stroke-width="4"/>
                    <text x="320" y="595" text-anchor="middle" fill="#888" font-size="15">Glutes tight, trunk braced</text>
                    <rect x="580" y="420" width="400" height="200" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="780" y="480" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="19">LINE BREAKS</text>
                    <path d="M640 535 Q780 585 920 535" stroke="#ef4444" stroke-width="4" fill="none"/>
                    <text x="780" y="595" text-anchor="middle" fill="#888" font-size="15">Hips sag — set is over</text>
                    <text x="550" y="710" text-anchor="middle" fill="#888" font-size="18">Which side is your last rep on?</text>
                </svg>`,
                caption: "Mid-lesson check: when the plank fails, the set ends"
            }
        },
        {
            type: "concept",
            title: "Bench and Overhead: Pressing Without Grinding Your Shoulders",
            content: "When you graduate to barbells and dumbbells, setup is what keeps pressing shoulder-friendly:\n\n**Bench press setup**:\n• **Shoulder blades tucked** — squeeze them together and down, then pin them against the bench. They stay pinned the whole set. This creates a stable shelf and gives the shoulder joint room to move without pinching.\n• **Feet planted** — flat on the floor, driving gently. The bench press is a full-body lift wearing a chest-day costume.\n• **Bar path** — touch the lower chest, press up and slightly back toward the face; elbows about 45-70 degrees from your torso, not flared to 90.\n• **Slight arch** — a natural gap under your low back is normal and protective here, not cheating.\n\n**Overhead press setup**:\n• Squeeze glutes and brace hard — your trunk is the platform; a soft trunk turns the press into a back-bend.\n• Grip just outside shoulders, forearms vertical under the bar.\n• Press up and *slightly back*, moving your head through at the top so the bar stacks over your mid-foot.\n\nShoulder-friendly swaps if straight-bar pressing nags: dumbbells with palms facing each other, a slight incline instead of flat, or landmine presses. The pattern matters more than the implement.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">PRESS SETUP KEYS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Stability first, then strength</text>
                    <rect x="60" y="180" width="460" height="400" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="290" y="240" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">BENCH PRESS</text>
                    <text x="290" y="295" text-anchor="middle" fill="#fff" font-size="16">Shoulder blades tucked + pinned</text>
                    <text x="290" y="335" text-anchor="middle" fill="#fff" font-size="16">Feet planted, driving gently</text>
                    <text x="290" y="375" text-anchor="middle" fill="#fff" font-size="16">Bar: lower chest, up + slightly back</text>
                    <text x="290" y="415" text-anchor="middle" fill="#fff" font-size="16">Elbows 45-70 degrees, never 90</text>
                    <text x="290" y="470" text-anchor="middle" fill="#888" font-size="15">Slight natural arch is protective,</text>
                    <text x="290" y="502" text-anchor="middle" fill="#888" font-size="15">not cheating</text>
                    <rect x="580" y="180" width="460" height="400" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="810" y="240" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="21">OVERHEAD PRESS</text>
                    <text x="810" y="295" text-anchor="middle" fill="#fff" font-size="16">Glutes squeezed, trunk braced</text>
                    <text x="810" y="335" text-anchor="middle" fill="#fff" font-size="16">Forearms vertical under the bar</text>
                    <text x="810" y="375" text-anchor="middle" fill="#fff" font-size="16">Press up and slightly back</text>
                    <text x="810" y="415" text-anchor="middle" fill="#fff" font-size="16">Head through at the top</text>
                    <text x="810" y="470" text-anchor="middle" fill="#888" font-size="15">Soft trunk = accidental back-bend</text>
                    <text x="810" y="502" text-anchor="middle" fill="#888" font-size="15">Bar finishes over mid-foot</text>
                    <rect x="150" y="650" width="800" height="180" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="705" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">SHOULDER-FRIENDLY SWAPS</text>
                    <text x="550" y="750" text-anchor="middle" fill="#fff" font-size="17">Neutral-grip dumbbells, slight incline, landmine press</text>
                    <text x="550" y="785" text-anchor="middle" fill="#888" font-size="15">The pattern matters more than the implement</text>
                    <rect x="200" y="890" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="940" text-anchor="middle" fill="#ffd700" font-size="19">Pin the blades, plant the feet, own the bar path</text>
                </svg>`,
                caption: "Setup details that keep decades of pressing pain-free"
            }
        },
        {
            type: "concept",
            title: "Rows and the Road to Your First Pull-Up",
            content: "Now the neglected half of the tug-of-war.\n\n**Horizontal pulls — rows** — are where everyone can start today:\n• **One-arm dumbbell row** — knee and hand braced on a bench, pull the dumbbell to your hip (not your armpit), squeeze the shoulder blade back, lower with control.\n• **Inverted row** — hang under a sturdy bar or table edge, body straight, and pull your chest to it. A reverse push-up: raise your foot position to make it harder.\n• Cue for every row: lead with the elbow and finish with the shoulder blade — do not just yank with the biceps.\n\n**Vertical pulls — the pull-up road** — for most people the pull-up is a months-long project, and the road is well-marked:\n\n1. **Dead hangs** — just hang from the bar, building grip and shoulder tolerance. Work up to 30 seconds.\n2. **Band-assisted pull-ups** — a resistance band under your knee or foot offsets bodyweight; use progressively thinner bands.\n3. **Negatives** — jump or step to the top, then lower yourself as slowly as you can, aiming for 5 seconds down. Eccentric strength builds fastest.\n4. **Chin-up first** — palms facing you. The extra biceps involvement makes it slightly easier than the overhand pull-up, so it usually falls first. Celebrate, then chase the pull-up.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">TRAINING THE PULLS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Rows today, pull-ups down the road</text>
                    <rect x="80" y="170" width="940" height="230" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">ROWS — START TODAY</text>
                    <text x="550" y="270" text-anchor="middle" fill="#fff" font-size="17">One-arm dumbbell row: pull to the hip, squeeze the blade</text>
                    <text x="550" y="305" text-anchor="middle" fill="#fff" font-size="17">Inverted row: a reverse push-up under any sturdy bar</text>
                    <text x="550" y="345" text-anchor="middle" fill="#888" font-size="16">Cue: lead with the elbow, finish with the shoulder blade</text>
                    <rect x="80" y="440" width="940" height="440" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="495" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">THE PULL-UP ROAD</text>
                    <rect x="140" y="530" width="820" height="70" rx="15" fill="rgba(99,102,241,0.15)" stroke="#6366f1" stroke-width="2"/>
                    <text x="180" y="575" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="18">1.</text>
                    <text x="220" y="575" text-anchor="start" fill="#fff" font-size="17">Dead hangs — build to 30 seconds</text>
                    <rect x="140" y="615" width="820" height="70" rx="15" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="180" y="660" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="18">2.</text>
                    <text x="220" y="660" text-anchor="start" fill="#fff" font-size="17">Band-assisted — thinner bands over time</text>
                    <rect x="140" y="700" width="820" height="70" rx="15" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="180" y="745" text-anchor="start" fill="#10b981" font-weight="bold" font-size="18">3.</text>
                    <text x="220" y="745" text-anchor="start" fill="#fff" font-size="17">Negatives — 5 seconds down from the top</text>
                    <rect x="140" y="785" width="820" height="70" rx="15" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="180" y="830" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="18">4.</text>
                    <text x="220" y="830" text-anchor="start" fill="#fff" font-size="17">Chin-up first — palms toward you, then the pull-up</text>
                    <rect x="200" y="930" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="980" text-anchor="middle" fill="#ffd700" font-size="19">The first chin-up usually falls before the first pull-up</text>
                </svg>`,
                caption: "Rows are immediate; the pull-up is a well-marked project"
            }
        },
        {
            type: "example",
            title: "Priya's Ten-Month Pull-Up",
            content: "Priya, 34, could not hang from a bar for five seconds when she started. Ten months later she did a strict overhand pull-up. Here is the actual road, with its detours:\n\n**Months 1-2**: Dead hangs and one-arm rows. Her grip — not her back — was the first limiter. Hangs went from 4 seconds to 40. Rows went from 6 kg to 14 kg.\n\n**Months 3-5**: Band-assisted pull-ups with a thick band, 3 sets of 5, twice a week. She kept a written log of band color — the only way to see progress when the reps stay the same.\n\n**Months 6-7**: A plateau. Thinner band reps stalled at 2. Her fix, borrowed from this lesson: **negatives** — jump to the top, five seconds down, 4 sets of 3. Brutal and boring. It worked.\n\n**Month 9**: First strict **chin-up**, palms facing her — exactly the order the progression predicts, since the biceps assist more in that grip.\n\n**Month 10**: First strict pull-up. She filmed it and watched it, by her own admission, about thirty times.\n\nThe details worth stealing: two sessions weekly, never to failure, a written log, and a switch of tools at the plateau instead of quitting. Ten months sounds long — until you remember she gets to keep the strength for decades.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">PRIYA'S TEN MONTHS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">From a 4-second hang to a strict pull-up</text>
                    <rect x="150" y="170" width="800" height="120" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="218" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="19">MONTHS 1-2</text>
                    <text x="200" y="256" text-anchor="start" fill="#fff" font-size="16">Dead hangs 4s to 40s; rows 6 kg to 14 kg</text>
                    <rect x="150" y="315" width="800" height="120" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="363" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="19">MONTHS 3-5</text>
                    <text x="200" y="401" text-anchor="start" fill="#fff" font-size="16">Band-assisted 3 x 5, logging band color</text>
                    <rect x="150" y="460" width="800" height="120" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="200" y="508" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="19">MONTHS 6-7</text>
                    <text x="200" y="546" text-anchor="start" fill="#fff" font-size="16">Plateau — switched to 5-second negatives, 4 x 3</text>
                    <rect x="150" y="605" width="800" height="120" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="653" text-anchor="start" fill="#10b981" font-weight="bold" font-size="19">MONTH 9</text>
                    <text x="200" y="691" text-anchor="start" fill="#fff" font-size="16">First strict chin-up — palms facing, as predicted</text>
                    <rect x="150" y="750" width="800" height="120" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="798" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="19">MONTH 10</text>
                    <text x="200" y="836" text-anchor="start" fill="#fff" font-size="16">First strict pull-up — filmed and rewatched 30 times</text>
                    <rect x="200" y="920" width="700" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="960" text-anchor="middle" fill="#ffd700" font-size="19">Twice weekly, never to failure, always logged —</text>
                    <text x="550" y="992" text-anchor="middle" fill="#ffd700" font-size="19">and a tool switch at the plateau</text>
                </svg>`,
                caption: "Ten patient months, one strict pull-up, decades of payoff"
            }
        },
        {
            type: "concept",
            title: "The 1:1 Rule — and the Grip Bonus",
            content: "Two closing principles tie this lesson together:\n\n**Balance push and pull roughly 1:1.** For every set of pressing you do in a week, do about one set of pulling. Bench 3 sets? Row 3 sets. Overhead press twice a week? Pull-up work twice a week. Because daily life already pushes the front of your body into overdrive, many coaches even bias *toward* pulling — 1:1 is the floor, not the ceiling. The evidence on posture is nuanced — structure alone does not doom anyone — but balanced training demonstrably builds a resilient shoulder girdle, and lifters who press for years without pulling are the ones who show up in physio clinics with cranky shoulders.\n\n**The grip bonus.** Remember Lesson 1: in the **PURE study** of nearly 140,000 adults (Lancet, 2015), every 5 kg drop in grip strength tracked with a 16% rise in all-cause mortality — grip is one of the best simple biomarkers of aging we have. Here is the beautiful part: **you never have to train grip directly**. Every row, every dead hang, every pull-up rep is a grip workout in disguise. Your hands are the hooks that carry the load, and they adapt right alongside your back.\n\nPulls are the closest thing training has to a two-for-one sale: posture muscles and a longevity biomarker, same ticket.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">TWO CLOSING RULES</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Balance the volume, bank the bonus</text>
                    <rect x="60" y="180" width="460" height="320" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="290" y="240" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">PUSH : PULL = 1 : 1</text>
                    <text x="290" y="295" text-anchor="middle" fill="#fff" font-size="16">Every pressing set earns</text>
                    <text x="290" y="327" text-anchor="middle" fill="#fff" font-size="16">a pulling set</text>
                    <text x="290" y="380" text-anchor="middle" fill="#888" font-size="15">Daily life already biases push —</text>
                    <text x="290" y="412" text-anchor="middle" fill="#888" font-size="15">1:1 is the floor, not the ceiling</text>
                    <text x="290" y="455" text-anchor="middle" fill="#888" font-size="15">Resilient shoulders for decades</text>
                    <rect x="580" y="180" width="460" height="320" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="240" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">THE GRIP BONUS</text>
                    <text x="810" y="295" text-anchor="middle" fill="#fff" font-size="16">PURE study, Lancet 2015:</text>
                    <text x="810" y="327" text-anchor="middle" fill="#fff" font-size="16">-5 kg grip = +16% mortality risk</text>
                    <text x="810" y="380" text-anchor="middle" fill="#888" font-size="15">Rows, hangs, and pull-ups train</text>
                    <text x="810" y="412" text-anchor="middle" fill="#888" font-size="15">grip automatically — no extra</text>
                    <text x="810" y="444" text-anchor="middle" fill="#888" font-size="15">exercises needed</text>
                    <rect x="150" y="570" width="800" height="180" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="625" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">THE WEEKLY AUDIT</text>
                    <text x="550" y="670" text-anchor="middle" fill="#fff" font-size="17">Count your pressing sets, count your pulling sets</text>
                    <text x="550" y="705" text-anchor="middle" fill="#fff" font-size="17">If push wins, add rows before you add bench</text>
                    <rect x="200" y="810" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="860" text-anchor="middle" fill="#ffd700" font-size="19">Pulls: posture and a longevity marker, same ticket</text>
                </svg>`,
                caption: "Match pulls to pushes — and collect the grip dividend"
            }
        },
        {
            type: "visual",
            title: "One Week, Four Quadrants",
            content: "Here is what a minimal balanced week looks like on paper. Two upper-body days, each touching all four quadrants, with pulling volume matching pushing volume set for set. Notice there is nothing exotic — the power is in the coverage, not the exercises. This template scales from a living room (incline push-ups, table rows, backpack presses, dead hangs) to a full gym (bench, barbell rows, overhead press, pull-ups) without changing its shape.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">ONE BALANCED WEEK</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Two days, four quadrants, 1:1 volume</text>
                    <rect x="80" y="170" width="460" height="360" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="310" y="230" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">DAY 1 (e.g. MONDAY)</text>
                    <text x="310" y="285" text-anchor="middle" fill="#fff" font-size="16">Push-ups or bench — 3 sets</text>
                    <text x="310" y="325" text-anchor="middle" fill="#fff" font-size="16">Rows — 3 sets</text>
                    <text x="310" y="375" text-anchor="middle" fill="#888" font-size="15">Horizontal push + horizontal pull</text>
                    <text x="310" y="415" text-anchor="middle" fill="#888" font-size="15">3 push sets, 3 pull sets</text>
                    <text x="310" y="470" text-anchor="middle" fill="#10b981" font-size="16">Ratio: 1:1</text>
                    <rect x="560" y="170" width="460" height="360" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="790" y="230" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="21">DAY 2 (e.g. THURSDAY)</text>
                    <text x="790" y="285" text-anchor="middle" fill="#fff" font-size="16">Overhead press — 3 sets</text>
                    <text x="790" y="325" text-anchor="middle" fill="#fff" font-size="16">Pull-up work or pulldowns — 3 sets</text>
                    <text x="790" y="375" text-anchor="middle" fill="#888" font-size="15">Vertical push + vertical pull</text>
                    <text x="790" y="415" text-anchor="middle" fill="#888" font-size="15">3 push sets, 3 pull sets</text>
                    <text x="790" y="470" text-anchor="middle" fill="#10b981" font-size="16">Ratio: 1:1</text>
                    <rect x="150" y="600" width="800" height="200" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="655" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">SCALES ANYWHERE</text>
                    <text x="550" y="700" text-anchor="middle" fill="#fff" font-size="17">Living room: incline push-ups, table rows,</text>
                    <text x="550" y="735" text-anchor="middle" fill="#fff" font-size="17">backpack presses, dead hangs</text>
                    <text x="550" y="772" text-anchor="middle" fill="#888" font-size="15">Gym: bench, barbell rows, overhead press, pull-ups</text>
                    <rect x="200" y="860" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="910" text-anchor="middle" fill="#ffd700" font-size="19">The power is in the coverage, not the exercises</text>
                </svg>`,
                caption: "A minimal week that covers all four quadrants at 1:1"
            }
        },
        {
            type: "application",
            title: "Build Your Push-Pull Week",
            content: "**Set up your balanced upper-body week today:**\n\n1. **Find your push-up rung** — wall, counter, bench, or floor: the highest rung where you can do 8 clean moving-plank reps. Do 3 sets, twice this week.\n\n2. **Pick one row and match the volume** — one-arm dumbbell rows or inverted rows under a sturdy table: 3 sets of 8-12, the same two days. Push sets = pull sets, automatically.\n\n3. **Add one vertical of each** — 2 sets of light overhead pressing (dumbbells are fine) and 2 sets of vertical-pull work: dead hangs if you are new, band-assisted pull-ups or negatives if you have a bar.\n\n4. **Run the 1:1 audit** — at the end of the week, count total pressing sets vs. pulling sets in your log. If push won, your first fix next week is more rows — not more bench.\n\n5. **Record your baselines** — max clean push-ups at your rung, and max dead-hang time. Retest in eight weeks. These two numbers are your upper-body scoreboard.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">YOUR PUSH-PULL WEEK</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Five steps to a balanced upper body</text>
                    <rect x="150" y="170" width="800" height="120" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="220" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">1.</text>
                    <text x="240" y="220" text-anchor="start" fill="#fff" font-size="18">Find your push-up rung — 3 sets, twice weekly</text>
                    <text x="240" y="258" text-anchor="start" fill="#888" font-size="15">Highest rung with 8 clean reps</text>
                    <rect x="150" y="320" width="800" height="120" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="370" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="20">2.</text>
                    <text x="240" y="370" text-anchor="start" fill="#fff" font-size="18">Match with rows — 3 x 8-12, same days</text>
                    <text x="240" y="408" text-anchor="start" fill="#888" font-size="15">Dumbbell or inverted — push = pull</text>
                    <rect x="150" y="470" width="800" height="120" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="520" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">3.</text>
                    <text x="240" y="520" text-anchor="start" fill="#fff" font-size="18">Add verticals — light presses + hangs or assists</text>
                    <text x="240" y="558" text-anchor="start" fill="#888" font-size="15">2 sets of each is plenty to start</text>
                    <rect x="150" y="620" width="800" height="120" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="670" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">4.</text>
                    <text x="240" y="670" text-anchor="start" fill="#fff" font-size="18">Run the 1:1 audit at week's end</text>
                    <text x="240" y="708" text-anchor="start" fill="#888" font-size="15">If push won, add rows before bench</text>
                    <rect x="150" y="770" width="800" height="120" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="820" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="20">5.</text>
                    <text x="240" y="820" text-anchor="start" fill="#fff" font-size="18">Record baselines: push-ups + dead-hang time</text>
                    <text x="240" y="858" text-anchor="start" fill="#888" font-size="15">Retest in eight weeks — your scoreboard</text>
                </svg>`,
                caption: "A balanced week you can start with zero gym equipment"
            }
        },
        {
            type: "quiz",
            question: "Your current week has 6 sets of bench press, 3 sets of overhead press, and 3 sets of rows. What is the best next adjustment?",
            options: [
                { text: "Add more bench press — it is the main lift, so it deserves the most volume", correct: false },
                { text: "Add roughly 6 sets of pulling work to bring push and pull close to 1:1", correct: true },
                { text: "Drop the overhead press, since vertical pushing is optional for shoulder health", correct: false },
                { text: "Replace the rows with more push-ups, since they also work the back as a moving plank", correct: false }
            ],
            explanation: "The week totals 9 pushing sets against only 3 pulling sets — a 3:1 imbalance on top of a daily life that already overworks the front. The 1:1 rule says pulling volume should roughly match pushing volume, so adding about 6 sets of rows, pull-up work, or pulldowns restores balance. Cutting overhead press removes a valuable quadrant rather than fixing the ratio, and push-ups — whatever their core benefits — are still a push. When push wins the audit, the answer is more pulling.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="130" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="190" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE WEEKLY AUDIT</text>
                    <text x="550" y="240" text-anchor="middle" fill="#fff" font-size="18">9 sets pushing vs. 3 sets pulling</text>
                    <text x="550" y="275" text-anchor="middle" fill="#888" font-size="16">What does the 1:1 rule prescribe?</text>
                    <text x="250" y="420" text-anchor="middle" fill="#fff" font-size="18">PUSH</text>
                    <rect x="150" y="450" width="200" height="270" rx="15" fill="rgba(239,68,68,0.3)" stroke="#ef4444" stroke-width="2"/>
                    <text x="250" y="600" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="30">9</text>
                    <text x="700" y="420" text-anchor="middle" fill="#fff" font-size="18">PULL</text>
                    <rect x="600" y="630" width="200" height="90" rx="15" fill="rgba(59,130,246,0.3)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="700" y="690" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="30">3</text>
                    <path d="M850 560 L950 560" stroke="#10b981" stroke-width="3" stroke-dasharray="8"/>
                    <text x="900" y="530" text-anchor="middle" fill="#10b981" font-size="16">to 1:1</text>
                    <text x="550" y="820" text-anchor="middle" fill="#888" font-size="18">Balance the bars before adding to the taller one</text>
                </svg>`,
                caption: "Final check: auditing the push-pull ratio"
            }
        }
    ]
},
{
    id: 7,
    title: "Progressive Overload: The Engine of Every Gain",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "Why Does the Same Workout Stop Working?",
            content: "Here is a frustrating truth almost every lifter discovers around month three: the workout that transformed you in January does absolutely nothing by April. Same exercises, same weights, same effort — zero change.\n\nThat is not a flaw in the program. It is your body doing exactly what bodies do: adapting, then coasting. Your muscles have no interest in being bigger or stronger than they need to be. Muscle is metabolically expensive, and your body is a ruthless accountant.\n\nThe fix is a single principle that powers every gain you will ever make: **progressive overload** — asking your body to do slightly more than it did last time. Not heroically more. Slightly more. One rep. A few pounds. A little more control.\n\nThis lesson gives you the engine. Everything else in this book is just the chassis around it.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE ENGINE OF EVERY GAIN</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Same stimulus, same body. More stimulus, new body.</text>
                    <rect x="80" y="180" width="440" height="300" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="300" y="240" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="24">SAME WORKOUT</text>
                    <text x="300" y="295" text-anchor="middle" fill="#fff" font-size="19">Week 1: your body adapts</text>
                    <text x="300" y="335" text-anchor="middle" fill="#fff" font-size="19">Week 8: your body coasts</text>
                    <text x="300" y="375" text-anchor="middle" fill="#888" font-size="17">No new demand, no new muscle</text>
                    <text x="300" y="430" text-anchor="middle" fill="#ef4444" font-size="30">Progress flatlines</text>
                    <rect x="580" y="180" width="440" height="300" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="800" y="240" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="24">SLIGHTLY MORE</text>
                    <text x="800" y="295" text-anchor="middle" fill="#fff" font-size="19">One more rep this week</text>
                    <text x="800" y="335" text-anchor="middle" fill="#fff" font-size="19">A little more load next month</text>
                    <text x="800" y="375" text-anchor="middle" fill="#888" font-size="17">A new demand every session</text>
                    <text x="800" y="430" text-anchor="middle" fill="#10b981" font-size="30">Progress compounds</text>
                    <rect x="150" y="560" width="800" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="600" text-anchor="middle" fill="#ffd700" font-size="21">Your body only changes when it is asked</text>
                    <text x="550" y="635" text-anchor="middle" fill="#ffd700" font-size="21">to do slightly more than it can handle</text>
                </svg>`,
                caption: "The difference between a flatline and a lifetime of gains is one word: more"
            }
        },
        {
            type: "concept",
            title: "Stress, Recover, Adapt: The Supercompensation Cycle",
            content: "Every gain follows the same three-beat rhythm, a cycle physiologists call **supercompensation**:\n\n• **Stress** — A hard set damages muscle fibers slightly and drains energy stores. Immediately after training, you are actually *weaker* than when you walked in.\n\n• **Recover** — Over the next 24-72 hours, your body repairs the damage. Protein and sleep are the raw materials and the construction crew.\n\n• **Adapt** — Here is the magic: your body does not just repair back to baseline. It overshoots, rebuilding slightly stronger than before, as insurance against the next time you pull that stunt.\n\nThat overshoot is the entire game. Training does not build muscle — training creates the *demand* for muscle. Recovery builds it.\n\nTwo failure modes follow directly from this. Train again too soon, before recovery finishes, and you dig a deeper hole each session. Wait too long, and the adaptation quietly fades back to baseline. Progressive overload works when the next stress lands on top of the last adaptation — each cycle starting from a slightly higher floor.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">SUPERCOMPENSATION</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Stress, recover, adapt — then repeat from higher ground</text>
                    <rect x="80" y="170" width="290" height="200" rx="20" fill="rgba(239,68,68,0.12)" stroke="#ef4444" stroke-width="2"/>
                    <text x="225" y="230" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="24">1. STRESS</text>
                    <text x="225" y="280" text-anchor="middle" fill="#fff" font-size="18">Hard training drains</text>
                    <text x="225" y="315" text-anchor="middle" fill="#fff" font-size="18">and damages muscle</text>
                    <path d="M370 270 L420 270" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="420,270 406,261 406,279" fill="#14b8a6"/>
                    <rect x="420" y="170" width="290" height="200" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="565" y="230" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="24">2. RECOVER</text>
                    <text x="565" y="280" text-anchor="middle" fill="#fff" font-size="18">24-72 hours of repair</text>
                    <text x="565" y="315" text-anchor="middle" fill="#fff" font-size="18">fueled by food + sleep</text>
                    <path d="M710 270 L760 270" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="760,270 746,261 746,279" fill="#14b8a6"/>
                    <rect x="760" y="170" width="290" height="200" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="905" y="230" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="24">3. ADAPT</text>
                    <text x="905" y="280" text-anchor="middle" fill="#fff" font-size="18">Body overshoots:</text>
                    <text x="905" y="315" text-anchor="middle" fill="#fff" font-size="18">stronger than before</text>
                    <path d="M120 700 L340 700 L420 780 L560 620 L760 660 L1000 560" stroke="#10b981" stroke-width="4" fill="none"/>
                    <line x1="120" y1="700" x2="1000" y2="700" stroke="#888" stroke-width="2" stroke-dasharray="8" opacity="0.5"/>
                    <text x="420" y="830" text-anchor="middle" fill="#ef4444" font-size="17">dip: right after training</text>
                    <text x="560" y="590" text-anchor="middle" fill="#10b981" font-size="17">overshoot: new baseline</text>
                    <text x="1010" y="705" text-anchor="start" fill="#888" font-size="15">old you</text>
                    <rect x="150" y="900" width="800" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="950" text-anchor="middle" fill="#ffd700" font-size="20">Training creates the demand — recovery builds the muscle</text>
                </svg>`,
                caption: "The supercompensation cycle: each recovery overshoots, raising your baseline"
            }
        },
        {
            type: "visual",
            title: "The Staircase You Are Actually Climbing",
            content: "Zoom out and the cycle stops looking like a wave and starts looking like a **staircase**.\n\nEach step is one full cycle: stress on Monday, recovery through Wednesday, a slightly higher baseline by Friday. No single step is impressive — a rep here, a few pounds there. But steps stack.\n\nThis is why the lifters who look transformed after two years rarely did anything dramatic. They just never stopped climbing. Small overloads, applied relentlessly, beat heroic efforts applied occasionally — every single time.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE STRENGTH STAIRCASE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Tiny steps, stacked for months, become transformation</text>
                    <rect x="100" y="800" width="180" height="60" rx="8" fill="rgba(99,102,241,0.3)" stroke="#6366f1" stroke-width="2"/>
                    <rect x="280" y="720" width="180" height="140" rx="8" fill="rgba(99,102,241,0.35)" stroke="#6366f1" stroke-width="2"/>
                    <rect x="460" y="640" width="180" height="220" rx="8" fill="rgba(139,92,246,0.35)" stroke="#8b5cf6" stroke-width="2"/>
                    <rect x="640" y="560" width="180" height="300" rx="8" fill="rgba(139,92,246,0.4)" stroke="#8b5cf6" stroke-width="2"/>
                    <rect x="820" y="480" width="180" height="380" rx="8" fill="rgba(16,185,129,0.35)" stroke="#10b981" stroke-width="2"/>
                    <text x="190" y="785" text-anchor="middle" fill="#fff" font-size="18">Month 1</text>
                    <text x="370" y="705" text-anchor="middle" fill="#fff" font-size="18">Month 3</text>
                    <text x="550" y="625" text-anchor="middle" fill="#fff" font-size="18">Month 6</text>
                    <text x="730" y="545" text-anchor="middle" fill="#fff" font-size="18">Month 12</text>
                    <text x="910" y="465" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="18">Year 2</text>
                    <path d="M160 740 L300 660 L480 580 L660 500 L860 420" stroke="#ffd700" stroke-width="3" stroke-dasharray="10" fill="none" opacity="0.7"/>
                    <text x="190" y="900" text-anchor="middle" fill="#888" font-size="16">squat 95 lb</text>
                    <text x="910" y="900" text-anchor="middle" fill="#888" font-size="16">squat 225 lb</text>
                    <rect x="150" y="170" width="800" height="130" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="220" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">EACH STEP = ONE CYCLE</text>
                    <text x="550" y="262" text-anchor="middle" fill="#fff" font-size="19">Stress + recovery + adaptation, repeated weekly</text>
                </svg>`,
                caption: "One rep or a few pounds per step — the staircase does the rest"
            }
        },
        {
            type: "example",
            title: "Milo and the Modern Lifter",
            content: "The oldest story in strength training is still the truest. **Milo of Croton**, a 6th-century BC Greek wrestler, supposedly carried a newborn calf on his shoulders every day. The calf grew a little heavier each day — and Milo grew a little stronger to match. By the time it was a bull, he was the strongest man in Greece. Six Olympic wrestling titles say the legend earned its staying power.\n\nNow the modern version. **Maria**, 34, starts goblet squatting a 15 lb dumbbell for 3 sets of 8 in January. Each week she adds a rep or two. When she hits 3x12, she grabs the 20 lb dumbbell and drops back to 8s. Repeat.\n\nNo single workout is hard to imagine doing. But run the tape forward: by December she is squatting a 50 lb dumbbell for the same sets — more than **triple** her starting load, from roughly 2.5 lb of added weight per month.\n\nNobody lifts a bull on day one. Everybody can lift the calf.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE CALF BECOMES A BULL</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Milo of Croton, and Maria from your gym</text>
                    <rect x="80" y="170" width="440" height="330" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="300" y="230" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="23">MILO, 550 BC</text>
                    <text x="300" y="285" text-anchor="middle" fill="#fff" font-size="18">Carries a calf every day</text>
                    <text x="300" y="322" text-anchor="middle" fill="#fff" font-size="18">Calf grows heavier daily</text>
                    <text x="300" y="359" text-anchor="middle" fill="#fff" font-size="18">Milo grows stronger to match</text>
                    <text x="300" y="420" text-anchor="middle" fill="#8b5cf6" font-size="19">6 Olympic wrestling titles</text>
                    <rect x="580" y="170" width="440" height="330" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="800" y="230" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="23">MARIA, TODAY</text>
                    <text x="800" y="285" text-anchor="middle" fill="#fff" font-size="18">January: 15 lb, 3 sets of 8</text>
                    <text x="800" y="322" text-anchor="middle" fill="#fff" font-size="18">Adds reps, then adds load</text>
                    <text x="800" y="359" text-anchor="middle" fill="#fff" font-size="18">December: 50 lb, 3 sets of 8</text>
                    <text x="800" y="420" text-anchor="middle" fill="#10b981" font-size="19">Load tripled in one year</text>
                    <rect x="150" y="570" width="800" height="200" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="630" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">SAME PRINCIPLE, 2,500 YEARS APART</text>
                    <text x="550" y="680" text-anchor="middle" fill="#fff" font-size="19">The increase each day was almost nothing</text>
                    <text x="550" y="718" text-anchor="middle" fill="#fff" font-size="19">The increase over a year was everything</text>
                    <rect x="200" y="830" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="880" text-anchor="middle" fill="#ffd700" font-size="20">Nobody lifts the bull on day one. Lift the calf.</text>
                </svg>`,
                caption: "Progressive overload, from ancient legend to next Tuesday at your gym"
            }
        },
        {
            type: "quiz",
            question: "After a hard training session, when does your body actually become stronger?",
            options: [
                { text: "During the workout itself, as the muscles are working hardest", correct: false },
                { text: "During recovery afterward, when the body repairs and overshoots its old baseline", correct: true },
                { text: "Immediately after the last set, while the muscles are pumped and full of blood", correct: false },
                { text: "Only after several months, since single sessions have no measurable effect", correct: false }
            ],
            explanation: "Training only creates the demand for strength — it actually leaves you temporarily weaker. The adaptation happens during the 24-72 hours of recovery afterward, when your body repairs the damage and overshoots, rebuilding slightly stronger than before (supercompensation). The workout answer is the most tempting distractor, but the pump you feel mid-session is temporary fluid, not new muscle. This is why sleep and food are training tools, not afterthoughts.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">SUPERCOMPENSATION</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">Stress creates the demand for adaptation</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">When does the actual building happen?</text>
                    <rect x="150" y="360" width="800" height="220" rx="20" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="420" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="21">THINK IT THROUGH</text>
                    <text x="550" y="470" text-anchor="middle" fill="#fff" font-size="19">Right after a session you are weaker,</text>
                    <text x="550" y="508" text-anchor="middle" fill="#fff" font-size="19">not stronger. So where do gains come from?</text>
                    <text x="550" y="546" text-anchor="middle" fill="#888" font-size="17">Hint: it involves sleep and protein</text>
                </svg>`,
                caption: "Test your understanding of the adaptation cycle"
            }
        },
        {
            type: "concept",
            title: "Double Progression: The Simplest System That Works",
            content: "So how do you actually apply overload without guessing? The cleanest method for most lifters is **double progression** — you progress along two dials, one at a time:\n\n• **Dial 1: Reps.** Pick a rep range for an exercise, say **8-12**. Keep the weight fixed and try to add a rep or two each week: 3 sets of 8 becomes 3x9, 3x10... up to 3x12.\n\n• **Dial 2: Load.** Once you own the top of the range — all sets at 12 with solid form — increase the weight by roughly **2.5-5%** and drop back to 8s. Then climb the rep ladder again.\n\nWhy it works so well:\n\n• **It is self-regulating.** You only add weight after your body has proven it is ready, so form does not erode.\n\n• **Small jumps are always available.** Even when the next dumbbell is 5 lb heavier, a single added rep is still progress.\n\n• **It gives every workout a target.** You are never wondering what to do — you are chasing last week's logbook entry, plus one.\n\nOne honest caveat: progress is never perfectly linear. Some weeks you match last week instead of beating it. That still counts — holding ground under accumulating fatigue is quiet progress.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">DOUBLE PROGRESSION</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Fill the rep range, then raise the load, then repeat</text>
                    <rect x="120" y="170" width="860" height="90" rx="18" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="180" y="225" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">Week 1</text>
                    <text x="360" y="225" text-anchor="start" fill="#fff" font-size="19">50 lb — 3 sets of 8</text>
                    <rect x="120" y="285" width="860" height="90" rx="18" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="180" y="340" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">Week 3</text>
                    <text x="360" y="340" text-anchor="start" fill="#fff" font-size="19">50 lb — 3 sets of 10</text>
                    <rect x="120" y="400" width="860" height="90" rx="18" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="180" y="455" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">Week 5</text>
                    <text x="360" y="455" text-anchor="start" fill="#fff" font-size="19">50 lb — 3 sets of 12: range complete</text>
                    <rect x="120" y="515" width="860" height="90" rx="18" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="3"/>
                    <text x="180" y="570" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">Week 6</text>
                    <text x="360" y="570" text-anchor="start" fill="#fff" font-size="19">55 lb — back to 3 sets of 8</text>
                    <path d="M550 640 L550 690" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,690 541,676 559,676" fill="#14b8a6"/>
                    <rect x="200" y="700" width="700" height="90" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="740" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">CLIMB THE LADDER AGAIN</text>
                    <text x="550" y="772" text-anchor="middle" fill="#888" font-size="16">Reps 8 to 12, then add 2.5-5% load, forever</text>
                    <rect x="200" y="850" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="900" text-anchor="middle" fill="#ffd700" font-size="20">Add weight only after the reps prove you earned it</text>
                </svg>`,
                caption: "Double progression: two dials, turned one at a time"
            }
        },
        {
            type: "concept",
            title: "Train Hard, Not to Death: Reps in Reserve",
            content: "How hard should each set be? Closer to your limit than feels comfortable — but not all the way to it.\n\nThe tool for measuring this is **reps in reserve (RIR)**: how many more reps you *could* have done when you stopped. Ended a set of 10 knowing you had 2 more in you? That is 2 RIR.\n\nThe evidence-based sweet spot for most working sets is **1-3 RIR**. And here is the finding that surprises people: meta-analyses comparing training to absolute failure versus stopping a rep or two short — including work by Grgic and colleagues (2022) and a 2024 meta-analysis in *Sports Medicine* by Robinson and colleagues — show **similar muscle growth** either way. Going to failure mostly buys you the same hypertrophy at a much higher price:\n\n• **Far more fatigue** — recovery takes longer, and your next sets and sessions suffer\n\n• **Form breakdown** — grinding reps is where technique dissolves\n\n• **Higher injury and burnout risk** over months\n\nThe caveat: 1-3 RIR only works if you are honest. Beginners routinely stop at what is actually 5+ RIR because effort feels unfamiliar. Occasionally taking a safe exercise (machine or dumbbell, not a heavy barbell over your face) to true failure recalibrates your gauge. Hard sets, honest counting — failure optional.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">REPS IN RESERVE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Stop 1-3 reps shy of failure — the growth is the same</text>
                    <rect x="100" y="180" width="900" height="110" rx="18" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="230" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="21">5+ RIR</text>
                    <text x="380" y="230" text-anchor="start" fill="#fff" font-size="19">Too easy — not enough stimulus</text>
                    <text x="380" y="265" text-anchor="start" fill="#888" font-size="16">The most common beginner mistake</text>
                    <rect x="100" y="320" width="900" height="110" rx="18" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="3"/>
                    <text x="200" y="370" text-anchor="start" fill="#10b981" font-weight="bold" font-size="21">1-3 RIR</text>
                    <text x="380" y="370" text-anchor="start" fill="#fff" font-size="19">The sweet spot: full stimulus,</text>
                    <text x="380" y="405" text-anchor="start" fill="#fff" font-size="19">manageable fatigue, clean form</text>
                    <rect x="100" y="460" width="900" height="110" rx="18" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="200" y="510" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="21">0 RIR</text>
                    <text x="380" y="510" text-anchor="start" fill="#fff" font-size="19">Failure: similar growth, much more</text>
                    <text x="380" y="545" text-anchor="start" fill="#fff" font-size="19">fatigue and form breakdown</text>
                    <rect x="130" y="630" width="840" height="180" rx="20" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="685" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="21">WHAT THE META-ANALYSES FOUND</text>
                    <text x="550" y="730" text-anchor="middle" fill="#fff" font-size="18">Failure vs stopping short: similar hypertrophy</text>
                    <text x="550" y="765" text-anchor="middle" fill="#888" font-size="16">Grgic 2022; Robinson 2024, Sports Medicine</text>
                    <rect x="200" y="860" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="910" text-anchor="middle" fill="#ffd700" font-size="20">Effort is required. Failure is optional.</text>
                </svg>`,
                caption: "The RIR dial: hard enough to grow, controlled enough to recover"
            }
        },
        {
            type: "example",
            title: "Eight Weeks of a Real Logbook",
            content: "Here is what double progression at 1-3 RIR actually looks like — **Dev**, 41, dumbbell bench press, rep range 8-12:\n\n• **Week 1**: 40 lb — 12, 10, 8 (first set strong, fatigue trims the rest)\n\n• **Week 2**: 40 lb — 12, 11, 9\n\n• **Week 3**: 40 lb — 12, 11, 10\n\n• **Week 4**: 40 lb — 12, 12, 11 *(so close)*\n\n• **Week 5**: 40 lb — 12, 12, 12: range complete\n\n• **Week 6**: 45 lb — 9, 8, 8 (new weight feels heavy — that is the point)\n\n• **Week 7**: 45 lb — 10, 9, 8\n\n• **Week 8**: 45 lb — 11, 10, 9\n\nNotice three honest details. Progress came in **single reps**, not dramatic jumps. Week 4 was a near-miss, and nothing bad happened — he just finished the job in week 5. And week 6 *felt* like a step backward while being the biggest step forward on the chart.\n\nTotal reps with the heavier dumbbell climbed from 25 to 30 in three weeks. Every workout had a target; every entry beat one number from the week before. That is the whole system, running quietly in a $3 notebook.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">EIGHT WEEKS, ONE LIFT</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Dev's dumbbell bench: reps climb, then load climbs</text>
                    <rect x="100" y="170" width="430" height="90" rx="15" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="150" y="212" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="18">Wk 1 — 40 lb</text>
                    <text x="150" y="243" text-anchor="start" fill="#fff" font-size="17">12, 10, 8</text>
                    <rect x="100" y="280" width="430" height="90" rx="15" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="150" y="322" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="18">Wk 2 — 40 lb</text>
                    <text x="150" y="353" text-anchor="start" fill="#fff" font-size="17">12, 11, 9</text>
                    <rect x="100" y="390" width="430" height="90" rx="15" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="150" y="432" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="18">Wk 3 — 40 lb</text>
                    <text x="150" y="463" text-anchor="start" fill="#fff" font-size="17">12, 11, 10</text>
                    <rect x="100" y="500" width="430" height="90" rx="15" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="150" y="542" text-anchor="start" fill="#10b981" font-weight="bold" font-size="18">Wk 5 — 40 lb</text>
                    <text x="150" y="573" text-anchor="start" fill="#fff" font-size="17">12, 12, 12 — complete!</text>
                    <rect x="570" y="170" width="430" height="90" rx="15" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="3"/>
                    <text x="620" y="212" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="18">Wk 6 — 45 lb</text>
                    <text x="620" y="243" text-anchor="start" fill="#fff" font-size="17">9, 8, 8 — load up, reps reset</text>
                    <rect x="570" y="280" width="430" height="90" rx="15" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="620" y="322" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="18">Wk 7 — 45 lb</text>
                    <text x="620" y="353" text-anchor="start" fill="#fff" font-size="17">10, 9, 8</text>
                    <rect x="570" y="390" width="430" height="90" rx="15" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="620" y="432" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="18">Wk 8 — 45 lb</text>
                    <text x="620" y="463" text-anchor="start" fill="#fff" font-size="17">11, 10, 9</text>
                    <rect x="570" y="500" width="430" height="90" rx="15" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="620" y="542" text-anchor="start" fill="#ffd700" font-weight="bold" font-size="18">Trend</text>
                    <text x="620" y="573" text-anchor="start" fill="#fff" font-size="17">25 to 30 total reps at 45 lb</text>
                    <rect x="150" y="650" width="800" height="90" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="690" text-anchor="middle" fill="#10b981" font-size="20">Week 6 felt like a setback</text>
                    <text x="550" y="723" text-anchor="middle" fill="#fff" font-size="18">It was the biggest jump on the whole chart</text>
                </svg>`,
                caption: "A real logbook: single-rep progress that triples strength over years"
            }
        },
        {
            type: "concept",
            title: "More Than Weight: The Other Overload Levers",
            content: "Adding load is the most famous form of overload, but it is one lever on a dashboard. When the weight will not budge — or the next dumbbell is a 20% jump — pull a different lever:\n\n• **Sets** — Going from 3 to 4 hard sets of an exercise is more total work, and weekly set volume is one of the best-supported drivers of growth.\n\n• **Range of motion** — A deeper squat or a fuller stretch at the bottom of a press makes the same weight harder. Research on lengthened-position training suggests full ROM is not just harder — it may grow muscle better.\n\n• **Tempo and control** — Lowering the weight over a controlled 3 seconds removes momentum. Same dumbbell, brand-new challenge.\n\n• **Density** — Same work, less rest. If 4 sets took you 12 minutes last month and 10 minutes today at the same RIR, you got fitter.\n\n• **Better reps** — Cleaner technique that puts more tension on the target muscle is invisible on the bar but real in the tissue.\n\nThe rule: change **one lever at a time**, and log it. If you add weight AND cut rest AND deepen your squat in the same week, you cannot tell what worked — and you have probably outrun your recovery.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">FIVE OVERLOAD LEVERS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Load is one dial — the dashboard has more</text>
                    <rect x="80" y="180" width="440" height="170" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="300" y="240" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">LOAD</text>
                    <text x="300" y="285" text-anchor="middle" fill="#fff" font-size="18">More weight on the bar</text>
                    <text x="300" y="318" text-anchor="middle" fill="#888" font-size="16">2.5-5% jumps via double progression</text>
                    <rect x="580" y="180" width="440" height="170" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="800" y="240" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">SETS</text>
                    <text x="800" y="285" text-anchor="middle" fill="#fff" font-size="18">3 hard sets become 4</text>
                    <text x="800" y="318" text-anchor="middle" fill="#888" font-size="16">Volume is a proven growth driver</text>
                    <rect x="80" y="390" width="440" height="170" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="300" y="450" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">RANGE OF MOTION</text>
                    <text x="300" y="495" text-anchor="middle" fill="#fff" font-size="18">Deeper squat, fuller stretch</text>
                    <text x="300" y="528" text-anchor="middle" fill="#888" font-size="16">Same load, harder — maybe better</text>
                    <rect x="580" y="390" width="440" height="170" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="800" y="450" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">TEMPO</text>
                    <text x="800" y="495" text-anchor="middle" fill="#fff" font-size="18">3-second controlled lowering</text>
                    <text x="800" y="528" text-anchor="middle" fill="#888" font-size="16">Removes momentum from the rep</text>
                    <rect x="300" y="600" width="500" height="170" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="550" y="660" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="22">DENSITY</text>
                    <text x="550" y="705" text-anchor="middle" fill="#fff" font-size="18">Same work, less rest time</text>
                    <text x="550" y="738" text-anchor="middle" fill="#888" font-size="16">12 minutes of work done in 10</text>
                    <rect x="150" y="830" width="800" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="880" text-anchor="middle" fill="#ffd700" font-size="20">Change one lever at a time — and write it down</text>
                </svg>`,
                caption: "When the weight will not move, another lever always will"
            }
        },
        {
            type: "concept",
            title: "Plateaus Are Information, Not Failure",
            content: "Eventually a lift will stall for two or three weeks. This is not a crisis — it is a **status report**. A plateau is your body saying: something in the stress-recovery equation stopped adding up. Your job is to read the message, and the message is usually not about the gym.\n\nRun the audit in this order:\n\n• **Sleep** — Are you getting 7+ hours most nights? Sleep restriction measurably cuts strength performance and blunts muscle protein synthesis. This is the number-one plateau cause hiding in plain sight.\n\n• **Food** — Are you eating enough protein (~0.7g per pound of bodyweight) and enough total calories? You cannot build tissue out of a deficit forever.\n\n• **Stress** — A brutal month at work is a recovery cost your body pays from the same account as training. The bar does not care why you are drained.\n\n• **Only then, training** — If the first three check out, adjust the program: change a lever, swap a variation, or take an easy week (a **deload**) and come back fresh.\n\nMost lifters invert this — they stall, panic, and add *more* training on top of a recovery shortfall, which deepens the hole. The plateau was never the problem. It was the smoke alarm.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE PLATEAU AUDIT</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Check recovery before you blame the program</text>
                    <rect x="150" y="170" width="800" height="110" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="210" y="220" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="22">1. SLEEP</text>
                    <text x="210" y="258" text-anchor="start" fill="#fff" font-size="18">7+ hours most nights? The #1 hidden cause</text>
                    <rect x="150" y="310" width="800" height="110" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="210" y="360" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="22">2. FOOD</text>
                    <text x="210" y="398" text-anchor="start" fill="#fff" font-size="18">Enough protein and total calories to build?</text>
                    <rect x="150" y="450" width="800" height="110" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="210" y="500" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="22">3. STRESS</text>
                    <text x="210" y="538" text-anchor="start" fill="#fff" font-size="18">Life stress drains the same recovery account</text>
                    <rect x="150" y="590" width="800" height="110" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="210" y="640" text-anchor="start" fill="#10b981" font-weight="bold" font-size="22">4. TRAINING</text>
                    <text x="210" y="678" text-anchor="start" fill="#fff" font-size="18">Only now: change a lever, swap, or deload</text>
                    <rect x="150" y="760" width="800" height="130" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="810" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">THE CLASSIC MISTAKE</text>
                    <text x="550" y="850" text-anchor="middle" fill="#fff" font-size="18">Stalling, then adding MORE training on top</text>
                    <rect x="200" y="940" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="990" text-anchor="middle" fill="#ffd700" font-size="20">A plateau is a smoke alarm, not a verdict</text>
                </svg>`,
                caption: "The audit order: sleep, food, stress — then, and only then, training"
            }
        },
        {
            type: "application",
            title: "Start Your Training Log Today",
            content: "The training log is the highest-return tool in all of fitness — it costs nothing and it *is* progressive overload, made visible. What gets measured gets grown. Set yours up today:\n\n1. **Pick your tool tonight** — a $3 notebook or a notes app. The best log is the one you will actually open. Fancy is optional; permanent is not.\n\n2. **Record four things per exercise** — name, weight, reps per set, and how it felt (an RIR guess counts). Example: *Goblet squat — 40 lb — 12/10/9 — 2 RIR*.\n\n3. **Before each session, read last time's entry** — your entire workout plan is now one sentence: beat one number. One more rep on one set counts.\n\n4. **Assign every lift a rep range** — 8-12 for most exercises. Top of the range on all sets means add 2.5-5% next time and drop back down.\n\n5. **Flag stalls, do not fear them** — same numbers three sessions running? Run the audit: sleep, food, stress, then training.\n\nSix months from now, this log will be the most motivating document you own — page one will read like it was written by a different person.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">YOUR TRAINING LOG</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Five steps to the highest-ROI tool in fitness</text>
                    <rect x="150" y="170" width="800" height="110" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="220" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="21">1.</text>
                    <text x="250" y="220" text-anchor="start" fill="#fff" font-size="19">Pick your tool tonight</text>
                    <text x="250" y="255" text-anchor="start" fill="#888" font-size="16">Notebook or notes app — whichever you will open</text>
                    <rect x="150" y="305" width="800" height="110" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="355" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="21">2.</text>
                    <text x="250" y="355" text-anchor="start" fill="#fff" font-size="19">Log exercise, weight, reps, RIR</text>
                    <text x="250" y="390" text-anchor="start" fill="#888" font-size="16">Goblet squat — 40 lb — 12/10/9 — 2 RIR</text>
                    <rect x="150" y="440" width="800" height="110" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="490" text-anchor="start" fill="#10b981" font-weight="bold" font-size="21">3.</text>
                    <text x="250" y="490" text-anchor="start" fill="#fff" font-size="19">Read last entry, beat one number</text>
                    <text x="250" y="525" text-anchor="start" fill="#888" font-size="16">One more rep on one set counts</text>
                    <rect x="150" y="575" width="800" height="110" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="625" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="21">4.</text>
                    <text x="250" y="625" text-anchor="start" fill="#fff" font-size="19">Give every lift a rep range</text>
                    <text x="250" y="660" text-anchor="start" fill="#888" font-size="16">Top of range on all sets = add 2.5-5% load</text>
                    <rect x="150" y="710" width="800" height="110" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="760" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="21">5.</text>
                    <text x="250" y="760" text-anchor="start" fill="#fff" font-size="19">Flag stalls, run the recovery audit</text>
                    <text x="250" y="795" text-anchor="start" fill="#888" font-size="16">Sleep, food, stress — then training changes</text>
                    <rect x="200" y="870" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="920" text-anchor="middle" fill="#ffd700" font-size="20">What gets measured gets grown</text>
                </svg>`,
                caption: "Today's action plan: build the log that builds you"
            }
        },
        {
            type: "quiz",
            question: "Using double progression with an 8-12 rep range, you just hit 3 sets of 12 at 100 lb with good form. What do you do next session?",
            options: [
                { text: "Stay at 100 lb and push each set to failure to maximize growth", correct: false },
                { text: "Keep adding reps beyond 12 until the sets feel genuinely difficult", correct: false },
                { text: "Increase the load about 2.5-5% and drop back to 3 sets of 8", correct: true },
                { text: "Add 15-20% so the new weight forces adaptation immediately", correct: false }
            ],
            explanation: "Hitting the top of the range on all sets is the green light to turn the second dial: raise the load a modest 2.5-5% (here, roughly 102.5-105 lb) and restart the rep climb at 8. The failure option is tempting, but meta-analyses show training to failure produces similar hypertrophy to stopping 1-3 reps short — with much more fatigue. And a 15-20% jump usually wrecks form and stalls you. Small jumps, earned by reps, compound for years.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">DOUBLE PROGRESSION</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">Rep range 8-12, and you just hit 3 x 12</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">Which dial turns next?</text>
                    <rect x="150" y="360" width="380" height="160" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="340" y="420" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">DIAL 1: REPS</text>
                    <text x="340" y="465" text-anchor="middle" fill="#fff" font-size="17">Climb 8 to 12</text>
                    <path d="M540 440 L590 440" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="590,440 576,431 576,449" fill="#14b8a6"/>
                    <rect x="600" y="360" width="380" height="160" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="790" y="420" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">DIAL 2: LOAD</text>
                    <text x="790" y="465" text-anchor="middle" fill="#fff" font-size="17">Then reset the reps</text>
                </svg>`,
                caption: "Final check: the two dials of double progression"
            }
        }
    ]
},
{
    id: 8,
    title: "Programming 101: Sets, Splits & Schedules",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "The Question Every Beginner Asks Wrong",
            content: "Walk up to any experienced lifter and ask the classic beginner question — *what's the best program?* — and watch them wince. Not because it is a dumb question, but because it is the wrong one.\n\nThe internet will happily sell you the fantasy that there is a secret arrangement of exercises, a magical split, a sacred number of sets that separates the transformed from the frustrated. There is not. There is instead a short list of boring, well-researched dials: **how many hard sets per muscle per week**, **how often you train each muscle**, and **whether you actually show up**.\n\nHere is the liberating part: the research says the differences between reasonable programs are small, and the difference between *any* reasonable program and no program is enormous.\n\nBy the end of this lesson you will know the volume targets, the frequency evidence, the honest trade-offs between the famous splits — and you will have a complete beginner program in your hands. Not the best program in the world. The best one you will actually do.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">PROGRAMMING 101</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Three dials matter — the rest is decoration</text>
                    <rect x="80" y="180" width="300" height="200" rx="20" fill="rgba(99,102,241,0.15)" stroke="#6366f1" stroke-width="2"/>
                    <text x="230" y="245" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">VOLUME</text>
                    <text x="230" y="290" text-anchor="middle" fill="#fff" font-size="18">Hard sets per</text>
                    <text x="230" y="322" text-anchor="middle" fill="#fff" font-size="18">muscle per week</text>
                    <rect x="400" y="180" width="300" height="200" rx="20" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="245" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">FREQUENCY</text>
                    <text x="550" y="290" text-anchor="middle" fill="#fff" font-size="18">How often each</text>
                    <text x="550" y="322" text-anchor="middle" fill="#fff" font-size="18">muscle gets hit</text>
                    <rect x="720" y="180" width="300" height="200" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="870" y="245" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">ADHERENCE</text>
                    <text x="870" y="290" text-anchor="middle" fill="#fff" font-size="18">Whether you</text>
                    <text x="870" y="322" text-anchor="middle" fill="#fff" font-size="18">actually show up</text>
                    <rect x="150" y="450" width="800" height="200" rx="20" fill="rgba(245,158,11,0.1)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="510" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">THE HONEST MATH</text>
                    <text x="550" y="560" text-anchor="middle" fill="#fff" font-size="19">Reasonable program A vs B: small difference</text>
                    <text x="550" y="600" text-anchor="middle" fill="#fff" font-size="19">Any program vs no program: enormous difference</text>
                    <rect x="200" y="720" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="770" text-anchor="middle" fill="#ffd700" font-size="20">The best program is the one you will repeat</text>
                </svg>`,
                caption: "Forget the perfect program — learn the three dials that drive results"
            }
        },
        {
            type: "concept",
            title: "Volume Landmarks: How Many Sets Per Week?",
            content: "The single most useful programming number is **weekly volume**: how many *hard sets* (sets taken to 1-3 reps in reserve) each muscle gets per week.\n\nThe research anchor here is a series of **dose-response meta-analyses by Brad Schoenfeld and colleagues** (2017 onward), pooling dozens of training studies. The pattern:\n\n• **~10 or more sets per muscle per week** produced clearly more growth than lower volumes — roughly a graded, more-is-more relationship in the ranges studied.\n\n• **~10-20 sets per muscle per week** is the practical sweet spot most evidence-based coaches converge on for hypertrophy.\n\n• **Beginners grow on less** — even 4-6 hard sets per muscle per week produces solid gains in your first year. You do not need advanced volume to get advanced results early on; your body is exquisitely sensitive to a brand-new stimulus.\n\n• **More is not always better** — pile on sets beyond what you can recover from and the extra work just adds fatigue. The dose-response curve flattens, then can bend backward.\n\nCount honestly: only sets within a few reps of failure count. Ten lazy sets are not ten hard sets. And compound lifts count for multiple muscles — a row is back volume *and* biceps volume.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">WEEKLY VOLUME LANDMARKS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Hard sets per muscle per week — the key dial</text>
                    <rect x="100" y="180" width="900" height="120" rx="18" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="200" y="230" text-anchor="start" fill="#3b82f6" font-weight="bold" font-size="21">4-9 sets</text>
                    <text x="420" y="230" text-anchor="start" fill="#fff" font-size="19">Beginner zone: real growth,</text>
                    <text x="420" y="265" text-anchor="start" fill="#fff" font-size="19">especially in year one</text>
                    <rect x="100" y="330" width="900" height="120" rx="18" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="3"/>
                    <text x="200" y="380" text-anchor="start" fill="#10b981" font-weight="bold" font-size="21">10-20 sets</text>
                    <text x="420" y="380" text-anchor="start" fill="#fff" font-size="19">Hypertrophy sweet spot</text>
                    <text x="420" y="415" text-anchor="start" fill="#888" font-size="16">Schoenfeld dose-response meta-analyses</text>
                    <rect x="100" y="480" width="900" height="120" rx="18" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="200" y="530" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="21">25+ sets</text>
                    <text x="420" y="530" text-anchor="start" fill="#fff" font-size="19">Diminishing returns — recovery,</text>
                    <text x="420" y="565" text-anchor="start" fill="#fff" font-size="19">not effort, becomes the limit</text>
                    <rect x="130" y="660" width="840" height="180" rx="20" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="715" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="21">COUNTING RULES</text>
                    <text x="550" y="760" text-anchor="middle" fill="#fff" font-size="18">Only sets at 1-3 reps in reserve count</text>
                    <text x="550" y="795" text-anchor="middle" fill="#fff" font-size="18">Compounds count for every muscle they train</text>
                    <rect x="200" y="890" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="940" text-anchor="middle" fill="#ffd700" font-size="20">Ten honest sets beat twenty lazy ones</text>
                </svg>`,
                caption: "The volume landmarks: beginner zone, sweet spot, and the point of diminishing returns"
            }
        },
        {
            type: "concept",
            title: "Frequency: Why Twice a Week Wins",
            content: "Second dial: **frequency** — how many times per week each muscle gets trained.\n\nA 2016 meta-analysis by **Schoenfeld, Ogborn, and Krieger** in *Sports Medicine* compared training each muscle once versus multiple times per week and found that, when weekly volume was matched, **hitting a muscle twice per week produced growth at least equal to — and often better than — once per week**. Later research softened the once-vs-twice gap when volume is truly equal, but the practical case for higher frequency remains strong. Three reasons:\n\n• **Quality of sets.** Ten hard sets of chest in one session means sets 8-10 are done by a exhausted muscle with degraded form. Five sets on Monday and five on Thursday are all high-quality.\n\n• **More practice.** Strength is a skill. Squatting twice a week means 104 practice sessions a year instead of 52.\n\n• **Elevated signal.** Muscle protein synthesis rises for roughly 24-48 hours after training a muscle. Train it once weekly and the growth signal is quiet for most of the week.\n\nThe old-school bro split — one muscle per day, blasted once a week — built plenty of physiques, mostly on genetics, volume, and consistency. But for the same weekly work, spreading it across two visits per muscle is the better bet. Every split in the next card is built on that idea.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE FREQUENCY EFFECT</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Same 10 sets — two very different weeks</text>
                    <rect x="80" y="180" width="440" height="340" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="300" y="240" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">1x PER WEEK</text>
                    <text x="300" y="290" text-anchor="middle" fill="#fff" font-size="18">Monday: 10 sets of chest</text>
                    <text x="300" y="325" text-anchor="middle" fill="#888" font-size="16">Sets 8-10 done exhausted</text>
                    <text x="300" y="380" text-anchor="middle" fill="#fff" font-size="18">Growth signal: ~2 days on,</text>
                    <text x="300" y="415" text-anchor="middle" fill="#fff" font-size="18">~5 days quiet</text>
                    <text x="300" y="470" text-anchor="middle" fill="#ef4444" font-size="18">52 practice sessions/year</text>
                    <rect x="580" y="180" width="440" height="340" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="800" y="240" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">2x PER WEEK</text>
                    <text x="800" y="290" text-anchor="middle" fill="#fff" font-size="18">Mon: 5 sets, Thu: 5 sets</text>
                    <text x="800" y="325" text-anchor="middle" fill="#888" font-size="16">Every set fresh and high quality</text>
                    <text x="800" y="380" text-anchor="middle" fill="#fff" font-size="18">Growth signal raised</text>
                    <text x="800" y="415" text-anchor="middle" fill="#fff" font-size="18">twice each week</text>
                    <text x="800" y="470" text-anchor="middle" fill="#10b981" font-size="18">104 practice sessions/year</text>
                    <rect x="130" y="590" width="840" height="170" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="645" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">THE EVIDENCE</text>
                    <text x="550" y="690" text-anchor="middle" fill="#fff" font-size="18">2x/week at least equals 1x at matched volume</text>
                    <text x="550" y="725" text-anchor="middle" fill="#888" font-size="16">Schoenfeld, Ogborn + Krieger 2016, Sports Medicine</text>
                    <rect x="200" y="810" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="860" text-anchor="middle" fill="#ffd700" font-size="20">Hit every muscle at least twice a week</text>
                </svg>`,
                caption: "Same volume, split across two sessions: fresher sets, more practice, more signal"
            }
        },
        {
            type: "example",
            title: "Counting a Real Week: Where Sets Hide",
            content: "Volume counting sounds abstract until you audit a real week. Meet **Jonah**, 28, who trains full-body three times a week. His chest volume:\n\n• **Monday**: Barbell bench press, 3 hard sets\n\n• **Wednesday**: Incline dumbbell press, 3 hard sets\n\n• **Friday**: Push-ups to 2 RIR, 3 hard sets\n\nThat is **9 direct chest sets** — beginner-appropriate, heading toward the 10-20 zone as he adds a set per exercise over the coming months.\n\nNow the part most people miss: the *hidden* volume. Jonah also does 3 sets of overhead press (front delts and some upper chest) and 3 sets of dips. His pressing muscles see meaningful work in **11-15 sets**, depending on how you count.\n\nCompare that to **Priya**, who does a chest day: 16 sets every Monday, nothing the rest of the week. Same rough weekly volume — but her last 6 sets are ground out by a fried muscle, and her chest sees no training signal from Tuesday to Sunday.\n\nThe audit takes five minutes with your training log: list each muscle, count honest hard sets across the whole week. Most beginners discover two things — some muscle (often back or hamstrings) is quietly starved near zero sets, and some favorite (often chest or arms) is double-fed.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE WEEKLY SET AUDIT</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Jonah's chest volume, spread across the week</text>
                    <rect x="80" y="180" width="290" height="180" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="225" y="240" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">MONDAY</text>
                    <text x="225" y="285" text-anchor="middle" fill="#fff" font-size="17">Bench press</text>
                    <text x="225" y="320" text-anchor="middle" fill="#888" font-size="16">3 hard sets</text>
                    <rect x="405" y="180" width="290" height="180" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="240" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="21">WEDNESDAY</text>
                    <text x="550" y="285" text-anchor="middle" fill="#fff" font-size="17">Incline DB press</text>
                    <text x="550" y="320" text-anchor="middle" fill="#888" font-size="16">3 hard sets</text>
                    <rect x="730" y="180" width="290" height="180" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="875" y="240" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">FRIDAY</text>
                    <text x="875" y="285" text-anchor="middle" fill="#fff" font-size="17">Push-ups to 2 RIR</text>
                    <text x="875" y="320" text-anchor="middle" fill="#888" font-size="16">3 hard sets</text>
                    <path d="M550 390 L550 440" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,440 541,426 559,426" fill="#14b8a6"/>
                    <rect x="250" y="450" width="600" height="120" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="500" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">9 direct sets + hidden pressing work</text>
                    <text x="550" y="540" text-anchor="middle" fill="#fff" font-size="18">Overhead press and dips add 2-6 more</text>
                    <rect x="130" y="630" width="840" height="190" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="685" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">THE AUDIT USUALLY FINDS</text>
                    <text x="550" y="730" text-anchor="middle" fill="#fff" font-size="18">One muscle quietly starved near zero sets</text>
                    <text x="550" y="765" text-anchor="middle" fill="#fff" font-size="18">One favorite muscle quietly double-fed</text>
                    <rect x="200" y="870" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="920" text-anchor="middle" fill="#ffd700" font-size="20">Five minutes with your log reveals your real program</text>
                </svg>`,
                caption: "Count hard sets per muscle across the whole week — including the hidden ones"
            }
        },
        {
            type: "quiz",
            question: "Based on the Schoenfeld dose-response research, what is the practical weekly hypertrophy target for a trained lifter?",
            options: [
                { text: "About 10-20 hard sets per muscle per week, spread across 2+ sessions", correct: true },
                { text: "As many sets as possible — muscle growth rises without limit as volume rises", correct: false },
                { text: "About 5 sets per muscle per week — anything more is wasted effort", correct: false },
                { text: "30+ sets per muscle per week, since the meta-analyses found more is always better", correct: false }
            ],
            explanation: "The dose-response meta-analyses found a graded relationship — roughly 10+ weekly sets per muscle outperformed lower volumes — and evidence-based practice converges on about 10-20 hard sets per muscle per week for hypertrophy. The unlimited-volume options are the trap: the curve flattens as recovery becomes the limit, and junk volume adds fatigue, not muscle. And while 5 sets is genuinely enough for beginners to grow, it undershoots the target for trained lifters. Count only honest sets taken to 1-3 reps in reserve.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">WEEKLY VOLUME</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">The most useful number in programming</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">Hard sets per muscle per week — how many?</text>
                    <path d="M200 620 Q450 380 650 440 Q820 490 950 560" stroke="#10b981" stroke-width="4" fill="none"/>
                    <line x1="200" y1="620" x2="950" y2="620" stroke="#888" stroke-width="2" opacity="0.5"/>
                    <line x1="200" y1="620" x2="200" y2="360" stroke="#888" stroke-width="2" opacity="0.5"/>
                    <text x="575" y="670" text-anchor="middle" fill="#888" font-size="17">weekly sets per muscle</text>
                    <text x="185" y="490" text-anchor="end" fill="#888" font-size="17">growth</text>
                    <rect x="420" y="380" width="230" height="50" rx="12" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="2"/>
                    <text x="535" y="413" text-anchor="middle" fill="#10b981" font-size="17">curve flattens here</text>
                </svg>`,
                caption: "The dose-response curve: rising, then flattening as recovery caps returns"
            }
        },
        {
            type: "concept",
            title: "The Splits, Honestly Compared",
            content: "A **split** is just how you divide the body across the week. The famous ones, with their real trade-offs:\n\n• **Full-body, 3x/week** — Every muscle, every session, a day of rest between. Automatic 3x frequency, and missing one workout only costs a third of your week. Downside: sessions touch everything, so per-muscle volume ceilings are lower. **Best choice for beginners, and better than most people admit for everyone else.**\n\n• **Upper/Lower, 4x/week** — Two upper days, two lower days. Clean 2x frequency, more room per muscle, still forgiving. The natural second program once you want a fourth day.\n\n• **Push/Pull/Legs (PPL), 5-6x/week** — Pushing muscles, pulling muscles, legs, usually run twice through. Huge per-muscle focus, great for volume — but it demands 5-6 committed days, more exercise-selection skill, and missing days quickly wrecks the frequency it promises. An intermediate tool, not a starting point.\n\n• **Bro split, 5x/week** — One muscle per day. Fun, simple, Instagram-approved, and the weakest frequency of the bunch at matched volume.\n\nThe honest conclusion from the research: **at equal weekly volume and effort, splits produce remarkably similar growth**. The split is not the magic. It is a container for volume and frequency — pick the container that fits your actual calendar, because the best split is the one you will repeat for years.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">CHOOSE YOUR CONTAINER</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Four splits, real trade-offs, similar growth</text>
                    <rect x="80" y="170" width="440" height="200" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="3"/>
                    <text x="300" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">FULL-BODY 3x</text>
                    <text x="300" y="268" text-anchor="middle" fill="#fff" font-size="17">3x frequency, very forgiving</text>
                    <text x="300" y="300" text-anchor="middle" fill="#888" font-size="15">Best for beginners</text>
                    <text x="300" y="340" text-anchor="middle" fill="#10b981" font-size="16">Needs: 3 days</text>
                    <rect x="580" y="170" width="440" height="200" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="800" y="225" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">UPPER / LOWER 4x</text>
                    <text x="800" y="268" text-anchor="middle" fill="#fff" font-size="17">2x frequency, more room</text>
                    <text x="800" y="300" text-anchor="middle" fill="#888" font-size="15">The natural next step</text>
                    <text x="800" y="340" text-anchor="middle" fill="#6366f1" font-size="16">Needs: 4 days</text>
                    <rect x="80" y="410" width="440" height="200" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="300" y="465" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="21">PUSH / PULL / LEGS</text>
                    <text x="300" y="508" text-anchor="middle" fill="#fff" font-size="17">Big volume, big commitment</text>
                    <text x="300" y="540" text-anchor="middle" fill="#888" font-size="15">Intermediate tool, more skill</text>
                    <text x="300" y="580" text-anchor="middle" fill="#8b5cf6" font-size="16">Needs: 5-6 days</text>
                    <rect x="580" y="410" width="440" height="200" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="800" y="465" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">BRO SPLIT 5x</text>
                    <text x="800" y="508" text-anchor="middle" fill="#fff" font-size="17">One muscle per day</text>
                    <text x="800" y="540" text-anchor="middle" fill="#888" font-size="15">Weakest frequency of the four</text>
                    <text x="800" y="580" text-anchor="middle" fill="#ef4444" font-size="16">Needs: 5 days</text>
                    <rect x="150" y="680" width="800" height="130" rx="20" fill="rgba(245,158,11,0.1)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="730" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">AT EQUAL VOLUME AND EFFORT</text>
                    <text x="550" y="772" text-anchor="middle" fill="#fff" font-size="18">Growth is remarkably similar across splits</text>
                    <rect x="200" y="860" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="910" text-anchor="middle" fill="#ffd700" font-size="20">Pick the container that fits your real calendar</text>
                </svg>`,
                caption: "The split is a container for volume and frequency — not the magic itself"
            }
        },
        {
            type: "example",
            title: "Three Lifters, Three Right Answers",
            content: "**Sam**, 45, has three lunch hours a week and two kids. He runs full-body Monday/Wednesday/Friday, 45 minutes a session. When a work trip eats Wednesday, every muscle still got trained twice that week. Eighteen months in, he has never missed two consecutive sessions. His squat has gone from the empty bar to 205 lb.\n\n**Alicia**, 27, loves training and has four reliable evenings. She runs upper/lower: upper Monday, lower Tuesday, rest Wednesday, upper Thursday, lower Friday. Each muscle gets 12-16 sets a week in focused sessions, and her weekends stay free.\n\n**Marcus**, 23, tried the 6-day push/pull/legs his favorite YouTuber runs. On paper: beautiful. In reality, his shift schedule turned 6 days into an unpredictable 3-4, which meant legs sometimes went untrained for 10 days. He switched to upper/lower and — with *less* planned volume but far better consistency — finally started progressing again.\n\nSame principles, three different right answers. Notice what decided it in every case: not the muscles, the **calendar**. Marcus's story is the one to remember — the program that survives contact with your real life beats the prettier one that does not.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THREE RIGHT ANSWERS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">The calendar chooses the split, not the muscles</text>
                    <rect x="80" y="180" width="300" height="300" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="230" y="240" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">SAM, 45</text>
                    <text x="230" y="285" text-anchor="middle" fill="#fff" font-size="17">3 lunch hours,</text>
                    <text x="230" y="317" text-anchor="middle" fill="#fff" font-size="17">2 kids</text>
                    <text x="230" y="365" text-anchor="middle" fill="#10b981" font-size="17">Full-body 3x</text>
                    <text x="230" y="410" text-anchor="middle" fill="#888" font-size="15">Squat: bar to 205 lb</text>
                    <rect x="400" y="180" width="300" height="300" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="240" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">ALICIA, 27</text>
                    <text x="550" y="285" text-anchor="middle" fill="#fff" font-size="17">4 reliable</text>
                    <text x="550" y="317" text-anchor="middle" fill="#fff" font-size="17">evenings</text>
                    <text x="550" y="365" text-anchor="middle" fill="#6366f1" font-size="17">Upper/Lower 4x</text>
                    <text x="550" y="410" text-anchor="middle" fill="#888" font-size="15">12-16 sets per muscle</text>
                    <rect x="720" y="180" width="300" height="300" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="870" y="240" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">MARCUS, 23</text>
                    <text x="870" y="285" text-anchor="middle" fill="#fff" font-size="17">Shift work broke</text>
                    <text x="870" y="317" text-anchor="middle" fill="#fff" font-size="17">his 6-day PPL</text>
                    <text x="870" y="365" text-anchor="middle" fill="#f59e0b" font-size="17">Switched to U/L</text>
                    <text x="870" y="410" text-anchor="middle" fill="#888" font-size="15">Less volume, more gains</text>
                    <rect x="150" y="550" width="800" height="200" rx="20" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="610" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">THE PATTERN</text>
                    <text x="550" y="660" text-anchor="middle" fill="#fff" font-size="19">A program that survives your real life</text>
                    <text x="550" y="698" text-anchor="middle" fill="#fff" font-size="19">beats a prettier one that cannot</text>
                    <rect x="200" y="810" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="860" text-anchor="middle" fill="#ffd700" font-size="20">Consistency is the hidden variable in every study</text>
                </svg>`,
                caption: "Three schedules, three splits — the calendar made every decision"
            }
        },
        {
            type: "concept",
            title: "Anatomy of a Session: 45-60 Minutes, Start to Finish",
            content: "Zoom from the week down to the single workout. A well-built session has a skeleton:\n\n• **Warm-up (5-8 minutes).** First, raise your body temperature — 5 minutes of brisk incline walking, rowing, or jumping jacks until you are lightly warm. Then **ramp sets** on your first exercise: with the bar or a light weight, do 8 easy reps, add weight, do 5, add weight, do 3 — arriving at your working weight warmed up but not fatigued. Skip the 20-minute static-stretching ritual; save stretching for after.\n\n• **The work (35-45 minutes).** Aim for **4-6 exercises**, **compounds first** — squat, hinge, press, and pull patterns while you are fresh, because they demand the most from your form and pay the most per set. Isolation moves (curls, raises, extensions) come after. Rest 2-3 minutes between compound sets, 1-2 for isolation.\n\n• **Optional finish (5 minutes).** A stretch for whatever you trained, or nothing at all. Walking out the door on time is a legitimate finisher.\n\nTotal: **45-60 minutes**. If your sessions run past 90, you are usually resting too long, chatting too much, or doing volume your recovery cannot cash. Marathon sessions are not a badge of honor — they are usually a focus problem wearing a work ethic costume.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">ANATOMY OF A SESSION</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">45-60 minutes, structured for quality</text>
                    <rect x="150" y="170" width="800" height="160" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="210" y="225" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="21">WARM-UP — 5-8 min</text>
                    <text x="210" y="265" text-anchor="start" fill="#fff" font-size="18">Raise temperature, then ramp sets:</text>
                    <text x="210" y="298" text-anchor="start" fill="#888" font-size="16">light x8, medium x5, heavier x3, then work</text>
                    <path d="M550 350 L550 395" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,395 541,381 559,381" fill="#14b8a6"/>
                    <rect x="150" y="405" width="800" height="200" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="210" y="460" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="21">THE WORK — 35-45 min</text>
                    <text x="210" y="500" text-anchor="start" fill="#fff" font-size="18">4-6 exercises, compounds first</text>
                    <text x="210" y="535" text-anchor="start" fill="#fff" font-size="18">Squat, hinge, press, pull — then isolation</text>
                    <text x="210" y="570" text-anchor="start" fill="#888" font-size="16">Rest 2-3 min compounds, 1-2 min isolation</text>
                    <path d="M550 625 L550 670" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="550,670 541,656 559,656" fill="#14b8a6"/>
                    <rect x="150" y="680" width="800" height="140" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="210" y="735" text-anchor="start" fill="#10b981" font-weight="bold" font-size="21">FINISH — 0-5 min</text>
                    <text x="210" y="775" text-anchor="start" fill="#fff" font-size="18">Optional stretching — leaving on time counts</text>
                    <rect x="150" y="880" width="800" height="90" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="920" text-anchor="middle" fill="#ef4444" font-size="19">Past 90 minutes? Usually a focus problem</text>
                    <text x="550" y="952" text-anchor="middle" fill="#888" font-size="16">wearing a work ethic costume</text>
                </svg>`,
                caption: "Warm up fast, do the compounds first, get out in an hour"
            }
        },
        {
            type: "concept",
            title: "Your Complete Beginner Program, Written Out",
            content: "Here is a full program you could start this week — 3 days of full-body, each built on the squat/hinge/push/pull pattern with rotating variations. Rep range 8-12 unless noted, most sets at 1-3 RIR, double progression throughout.\n\n**Day A**\n• Goblet squat — 3 sets\n• Romanian deadlift — 3 sets\n• Dumbbell bench press — 3 sets\n• One-arm dumbbell row — 3 sets per side\n• Plank — 3 holds of 20-40 seconds\n\n**Day B**\n• Dumbbell split squat — 3 sets per side\n• Glute bridge or hip thrust — 3 sets\n• Overhead dumbbell press — 3 sets\n• Lat pulldown or assisted pull-up — 3 sets\n• Farmer carry — 3 walks of 30-40 steps\n\n**Day C**\n• Leg press or goblet squat — 3 sets\n• Back extension — 3 sets\n• Push-ups (elevate hands if needed) — 3 sets\n• Seated cable row — 3 sets\n• Side plank — 2 holds per side\n\nRun it Monday/Wednesday/Friday, or any three non-consecutive days. Every muscle gets hit three times weekly; weekly volume lands around 9 sets per movement pattern — exactly the beginner zone. Run this, progressing honestly, and it will carry you 6-12 months before you need anything fancier.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">YOUR STARTER PROGRAM</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">3 days, full-body, squat-hinge-push-pull</text>
                    <rect x="60" y="180" width="310" height="440" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="215" y="235" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">DAY A</text>
                    <text x="215" y="285" text-anchor="middle" fill="#fff" font-size="16">Goblet squat 3x</text>
                    <text x="215" y="320" text-anchor="middle" fill="#fff" font-size="16">Romanian deadlift 3x</text>
                    <text x="215" y="355" text-anchor="middle" fill="#fff" font-size="16">DB bench press 3x</text>
                    <text x="215" y="390" text-anchor="middle" fill="#fff" font-size="16">1-arm DB row 3x</text>
                    <text x="215" y="425" text-anchor="middle" fill="#fff" font-size="16">Plank 3 holds</text>
                    <rect x="395" y="180" width="310" height="440" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="235" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">DAY B</text>
                    <text x="550" y="285" text-anchor="middle" fill="#fff" font-size="16">Split squat 3x/side</text>
                    <text x="550" y="320" text-anchor="middle" fill="#fff" font-size="16">Hip thrust 3x</text>
                    <text x="550" y="355" text-anchor="middle" fill="#fff" font-size="16">Overhead press 3x</text>
                    <text x="550" y="390" text-anchor="middle" fill="#fff" font-size="16">Lat pulldown 3x</text>
                    <text x="550" y="425" text-anchor="middle" fill="#fff" font-size="16">Farmer carry 3x</text>
                    <rect x="730" y="180" width="310" height="440" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="885" y="235" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">DAY C</text>
                    <text x="885" y="285" text-anchor="middle" fill="#fff" font-size="16">Leg press 3x</text>
                    <text x="885" y="320" text-anchor="middle" fill="#fff" font-size="16">Back extension 3x</text>
                    <text x="885" y="355" text-anchor="middle" fill="#fff" font-size="16">Push-ups 3x</text>
                    <text x="885" y="390" text-anchor="middle" fill="#fff" font-size="16">Cable row 3x</text>
                    <text x="885" y="425" text-anchor="middle" fill="#fff" font-size="16">Side plank 2/side</text>
                    <rect x="150" y="680" width="800" height="150 " rx="20" fill="rgba(245,158,11,0.1)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="735" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">MON / WED / FRI — 8-12 REPS — 1-3 RIR</text>
                    <text x="550" y="778" text-anchor="middle" fill="#fff" font-size="18">Every pattern trained 3x weekly, ~9 sets each</text>
                    <rect x="200" y="880" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="930" text-anchor="middle" fill="#ffd700" font-size="20">This program can carry you 6-12 months</text>
                </svg>`,
                caption: "A complete 3-day beginner program — start it this week"
            }
        },
        {
            type: "concept",
            title: "Rest Days Are Programming, Not Laziness",
            content: "Look back at that program: three training days, **four rest days**. That ratio is not an apology — it is the design.\n\nRecall the supercompensation cycle from Lesson 7: adaptation happens in the 24-72 hours *after* training. Your rest days are literally when the muscle gets built. Deleting them does not add gains; it deletes the construction phase.\n\nWhat the research and coaching experience consistently show:\n\n• **A muscle needs roughly 48 hours** before it is ready for another productive hard session — which is exactly why full-body programs run Monday/Wednesday/Friday.\n\n• **Fatigue accumulates system-wide**, not just per muscle. Your nervous system, tendons, and sleep quality all pay into the same account. Consecutive heavy days are affordable occasionally, not perpetually.\n\n• **More training days help only when recovery keeps pace.** A 6-day plan on 6 hours of sleep is a slower route than a 3-day plan on 8 hours. (That is not a typo in the research — it is a typo in most people's lives.)\n\nReframe it this way: you are not *taking* a rest day. You *scheduled* one, on purpose, because that is when the adaptation you trained for actually gets delivered. An athlete guards recovery the way they guard training time. Rest without guilt. It is on the program.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">REST IS ON THE PROGRAM</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Four rest days is the design, not a compromise</text>
                    <rect x="80" y="200" width="120" height="120" rx="15" fill="rgba(99,102,241,0.25)" stroke="#6366f1" stroke-width="2"/>
                    <text x="140" y="250" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="18">MON</text>
                    <text x="140" y="285" text-anchor="middle" fill="#fff" font-size="15">Train A</text>
                    <rect x="215" y="200" width="120" height="120" rx="15" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="275" y="250" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="18">TUE</text>
                    <text x="275" y="285" text-anchor="middle" fill="#fff" font-size="15">Build</text>
                    <rect x="350" y="200" width="120" height="120" rx="15" fill="rgba(99,102,241,0.25)" stroke="#6366f1" stroke-width="2"/>
                    <text x="410" y="250" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="18">WED</text>
                    <text x="410" y="285" text-anchor="middle" fill="#fff" font-size="15">Train B</text>
                    <rect x="485" y="200" width="120" height="120" rx="15" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="545" y="250" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="18">THU</text>
                    <text x="545" y="285" text-anchor="middle" fill="#fff" font-size="15">Build</text>
                    <rect x="620" y="200" width="120" height="120" rx="15" fill="rgba(99,102,241,0.25)" stroke="#6366f1" stroke-width="2"/>
                    <text x="680" y="250" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="18">FRI</text>
                    <text x="680" y="285" text-anchor="middle" fill="#fff" font-size="15">Train C</text>
                    <rect x="755" y="200" width="120" height="120" rx="15" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="815" y="250" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="18">SAT</text>
                    <text x="815" y="285" text-anchor="middle" fill="#fff" font-size="15">Build</text>
                    <rect x="890" y="200" width="120" height="120" rx="15" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="950" y="250" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="18">SUN</text>
                    <text x="950" y="285" text-anchor="middle" fill="#fff" font-size="15">Build</text>
                    <rect x="150" y="400" width="800" height="180" rx="20" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="455" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="21">GREEN DAYS ARE NOT EMPTY</text>
                    <text x="550" y="500" text-anchor="middle" fill="#fff" font-size="18">They are when the adaptation gets delivered:</text>
                    <text x="550" y="535" text-anchor="middle" fill="#fff" font-size="18">repair, rebuild, overshoot — supercompensation</text>
                    <rect x="150" y="640" width="800" height="130" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="690" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="19">6 training days on 6 hours of sleep</text>
                    <text x="550" y="728" text-anchor="middle" fill="#fff" font-size="18">loses to 3 training days on 8 hours</text>
                    <rect x="200" y="830" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="880" text-anchor="middle" fill="#ffd700" font-size="20">You did not skip today — you scheduled it</text>
                </svg>`,
                caption: "Train, build, train, build — the green days are where the muscle appears"
            }
        },
        {
            type: "application",
            title: "Build Your Week in 15 Minutes",
            content: "Time to turn theory into your actual calendar:\n\n1. **Count your honest days** — Not your motivated-week days; your *worst*-week days. If the answer is 3, run full-body. If it is a reliable 4, upper/lower. (Almost nobody should answer 6.)\n\n2. **Put sessions in your calendar as appointments** — Monday/Wednesday/Friday at a specific time, repeating weekly. Vague intentions lose to scheduled events.\n\n3. **Adopt the starter program from this lesson** — or map your current exercises onto its squat/hinge/push/pull skeleton. Write Day A, B, and C at the top of your log tonight.\n\n4. **Audit your weekly sets** — Five minutes with last week's log: count hard sets per muscle. Anything at zero gets an exercise added; anything over 20 donates sets to the starving muscle.\n\n5. **Schedule the rest, too** — Mark your recovery days. If you feel the itch to train on them, walk. It fills the habit slot and speeds recovery instead of taxing it.\n\nDo this once and your programming decisions are made for the next several months. Every gym visit becomes execution, not deliberation — and execution is where the gains live.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">BUILD YOUR WEEK</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Fifteen minutes of planning, months of execution</text>
                    <rect x="150" y="170" width="800" height="110" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="220" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="21">1.</text>
                    <text x="250" y="220" text-anchor="start" fill="#fff" font-size="19">Count your worst-week days</text>
                    <text x="250" y="255" text-anchor="start" fill="#888" font-size="16">3 days = full-body, 4 days = upper/lower</text>
                    <rect x="150" y="305" width="800" height="110" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="355" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="21">2.</text>
                    <text x="250" y="355" text-anchor="start" fill="#fff" font-size="19">Calendar sessions as appointments</text>
                    <text x="250" y="390" text-anchor="start" fill="#888" font-size="16">Specific days, specific times, repeating</text>
                    <rect x="150" y="440" width="800" height="110" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="490" text-anchor="start" fill="#10b981" font-weight="bold" font-size="21">3.</text>
                    <text x="250" y="490" text-anchor="start" fill="#fff" font-size="19">Adopt the starter program</text>
                    <text x="250" y="525" text-anchor="start" fill="#888" font-size="16">Write Day A, B, C into your log tonight</text>
                    <rect x="150" y="575" width="800" height="110" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="625" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="21">4.</text>
                    <text x="250" y="625" text-anchor="start" fill="#fff" font-size="19">Audit weekly sets per muscle</text>
                    <text x="250" y="660" text-anchor="start" fill="#888" font-size="16">Feed the starving muscles, trim the stuffed ones</text>
                    <rect x="150" y="710" width="800" height="110" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="760" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="21">5.</text>
                    <text x="250" y="760" text-anchor="start" fill="#fff" font-size="19">Schedule rest days by name</text>
                    <text x="250" y="795" text-anchor="start" fill="#888" font-size="16">Feel the itch? Walk — it counts as recovery</text>
                    <rect x="200" y="870" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="920" text-anchor="middle" fill="#ffd700" font-size="20">Decide once — then just execute for months</text>
                </svg>`,
                caption: "Your 15-minute planning session: five steps to a week that runs itself"
            }
        },
        {
            type: "quote",
            content: "The best program is the one you can recover from and will actually do — everything else is a rounding error.",
            author: "Paraphrasing a principle echoed by every evidence-based coach from Schoenfeld's lab outward",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">WISDOM</text>
                    <rect x="100" y="160" width="900" height="260 " rx="20" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="160" y="230" text-anchor="start" fill="#fff" font-style="italic" font-size="23">"The best program is the one you can</text>
                    <text x="160" y="275" text-anchor="start" fill="#fff" font-style="italic" font-size="23">recover from and will actually do —</text>
                    <text x="160" y="320" text-anchor="start" fill="#fff" font-style="italic" font-size="23">everything else is a rounding error."</text>
                    <text x="940" y="380" text-anchor="end" fill="#8b5cf6" font-size="17">— the consensus of evidence-based coaching</text>
                    <rect x="200" y="490" width="700 " height="180" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="550" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">REMEMBER THE ORDER</text>
                    <text x="550" y="595" text-anchor="middle" fill="#fff" font-size="18">Showing up beats the split</text>
                    <text x="550" y="630" text-anchor="middle" fill="#fff" font-size="18">Recovery beats extra volume</text>
                </svg>`,
                caption: "A moment of reflection before the final check"
            }
        },
        {
            type: "quiz",
            question: "Dana can reliably train 3 days per week and wants the best results. According to the evidence in this lesson, what should she run?",
            options: [
                { text: "A 6-day push/pull/legs split, compressed into 3 days when life gets busy", correct: false },
                { text: "A full-body program 3x/week, hitting every muscle each session", correct: true },
                { text: "A bro split covering 3 muscle groups, rotating the rest to the next week", correct: false },
                { text: "One marathon 3-hour full-body session per week to maximize volume", correct: false }
            ],
            explanation: "With 3 reliable days, full-body training wins: every muscle gets trained three times weekly — beating the 2x/week frequency threshold the Schoenfeld 2016 meta-analysis supports — and a missed day still leaves each muscle trained twice. The compressed PPL is the tempting trap, but it turns a frequency-based design into a plan where muscles can go 10+ days untrained. The rotating bro split leaves muscles trained twice per month, and the marathon session sacrifices set quality and frequency for a volume number that recovery cannot cash.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">MATCHING SPLIT TO SCHEDULE</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">Dana has 3 reliable training days</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">Which container fits her calendar?</text>
                    <rect x="150" y="370" width="800" height="200" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="430" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">RECALL THE DIALS</text>
                    <text x="550" y="475" text-anchor="middle" fill="#fff" font-size="18">Volume: 10-20 hard sets per muscle weekly</text>
                    <text x="550" y="510" text-anchor="middle" fill="#fff" font-size="18">Frequency: each muscle 2x or more per week</text>
                    <text x="550" y="545" text-anchor="middle" fill="#888" font-size="16">Adherence: the plan must survive a bad week</text>
                </svg>`,
                caption: "Final check: choose the split that serves volume, frequency, and real life"
            }
        }
    ]
},
{
    id: 9,
    title: "Lifting Through the Decades",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "The Excuse With an Expiration Date That Never Comes",
            content: "There are two versions of the same excuse, and they cancel each other out.\n\nAt 22: *I'll get serious about strength later — I have time.* At 58: *I should have started years ago — it's too late now.* Somewhere between those two sentences is a person who never lifted, waiting for a perfect decade that does not exist.\n\nHere is what the research actually says: untrained beginners gain strength fast at **every** age. Twenty-somethings do. So do people in their 90s — in one famous JAMA trial, frail nursing-home residents averaging age 90 increased their strength by **174%** in eight weeks.\n\nYour body does not check your birth certificate before adapting. It checks whether you asked it to do slightly more than last time — the same engine from Lesson 7, running in every decade.\n\nThis lesson is a tour of lifting across a lifetime: what changes in your 40s and 50s, what matters most after 60, what the bone-density research overturned, and why the strongest argument for starting today is the version of you who shows up in 30 years.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">EVERY DECADE ADAPTS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Your body never checks your birth certificate</text>
                    <rect x="80" y="180" width="440" height="260" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="300" y="240" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">THE TWIN EXCUSES</text>
                    <text x="300" y="295" text-anchor="middle" fill="#fff" font-size="19">At 22: I have time,</text>
                    <text x="300" y="330" text-anchor="middle" fill="#fff" font-size="19">I'll start later</text>
                    <text x="300" y="380" text-anchor="middle" fill="#fff" font-size="19">At 58: too late,</text>
                    <text x="300" y="415" text-anchor="middle" fill="#fff" font-size="19">I missed my window</text>
                    <rect x="580" y="180" width="440" height="260" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="800" y="240" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">WHAT RESEARCH SAYS</text>
                    <text x="800" y="295" text-anchor="middle" fill="#fff" font-size="19">Untrained beginners gain</text>
                    <text x="800" y="330" text-anchor="middle" fill="#fff" font-size="19">fast at every age</text>
                    <text x="800" y="385" text-anchor="middle" fill="#10b981" font-size="20">Even at age 90:</text>
                    <text x="800" y="420" text-anchor="middle" fill="#10b981" font-size="20">+174% strength</text>
                    <rect x="150" y="510" width="800" height="90 " rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="550" text-anchor="middle" fill="#ffd700" font-size="21">The best time to start was 20 years ago</text>
                    <text x="550" y="585" text-anchor="middle" fill="#ffd700" font-size="21">The second-best time is this week</text>
                </svg>`,
                caption: "Two excuses that cancel each other out — and the trial data that retires both"
            }
        },
        {
            type: "concept",
            title: "Newbie Gains Have No Age Limit",
            content: "The single most encouraging fact in exercise science: the **untrained body is primed to adapt**, whatever its age.\n\nWhen you first start lifting, most of your early strength gain is not even new muscle — it is your **nervous system** learning to fire the muscle you already own: recruiting more fibers, coordinating them better, releasing the brakes. This neural learning happens rapidly at 25 and rapidly at 75. That is why beginners routinely add strength week after week — the famous **newbie gains** window, roughly your first 6-12 months.\n\nWhat the age research consistently shows:\n\n• **Relative gains are similar across ages.** As a percentage of starting strength, older beginners improve dramatically — often on par with the young. Absolute ceilings differ; the *slope* of early progress is strikingly democratic.\n\n• **Muscle protein synthesis still works.** Older muscle is somewhat less responsive per dose of training and protein — researchers call it **anabolic resistance** — but the answer is simply a stronger dose: adequate hard sets and more protein per meal, not resignation.\n\n• **The biggest predictor of results is not age.** It is consistency — training months in a row versus starting and stopping.\n\nHonest caveat: a 70-year-old will not out-bench their 25-year-old self. But that comparison is irrelevant. The comparison that matters is *you next year versus you now* — and that gap is wide open at any age.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">NEWBIE GAINS AT ANY AGE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Early strength is a skill your nerves learn fast</text>
                    <rect x="80" y="180" width="440" height="280" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="300" y="240" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">MONTHS 1-6</text>
                    <text x="300" y="290" text-anchor="middle" fill="#fff" font-size="18">Mostly neural gains:</text>
                    <text x="300" y="325" text-anchor="middle" fill="#fff" font-size="18">recruiting more fibers,</text>
                    <text x="300" y="360" text-anchor="middle" fill="#fff" font-size="18">better coordination</text>
                    <text x="300" y="415" text-anchor="middle" fill="#888" font-size="16">Fast at 25 — fast at 75</text>
                    <rect x="580" y="180" width="440" height="280" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="800" y="240" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">MONTHS 6+</text>
                    <text x="800" y="290" text-anchor="middle" fill="#fff" font-size="18">Muscle growth leads;</text>
                    <text x="800" y="325" text-anchor="middle" fill="#fff" font-size="18">older lifters need a</text>
                    <text x="800" y="360" text-anchor="middle" fill="#fff" font-size="18">stronger dose: sets + protein</text>
                    <text x="800" y="415" text-anchor="middle" fill="#888" font-size="16">Anabolic resistance is beatable</text>
                    <rect x="130" y="530" width="840" height="180" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="585" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">THE DEMOCRATIC SLOPE</text>
                    <text x="550" y="630" text-anchor="middle" fill="#fff" font-size="18">Relative early gains look similar across ages</text>
                    <text x="550" y="665" text-anchor="middle" fill="#fff" font-size="18">Consistency predicts results better than age</text>
                    <rect x="200" y="770" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="820" text-anchor="middle" fill="#ffd700" font-size="20">The only comparison that matters: you vs last year</text>
                </svg>`,
                caption: "Early gains are neural, rapid, and available in every decade of life"
            }
        },
        {
            type: "visual",
            title: "What Actually Declines — and What Training Does About It",
            content: "Without training, muscle mass declines roughly **3-8% per decade after 30**, accelerating past 60 — a process called **sarcopenia**. Power (how *fast* you can produce force) falls even faster than strength, and bone density drifts down with it.\n\nBut those curves describe the **untrained** body. Lifting does not just slow the decline — a trained 60-year-old is routinely stronger than an untrained 30-year-old. You are not fighting the curve. You are switching curves.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">SWITCHING CURVES</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Trained vs untrained across the decades</text>
                    <line x1="140" y1="760" x2="1000" y2="760" stroke="#888" stroke-width="2" opacity="0.6"/>
                    <line x1="140" y1="760" x2="140" y2="220" stroke="#888" stroke-width="2" opacity="0.6"/>
                    <text x="180" y="810" text-anchor="middle" fill="#888" font-size="17">30</text>
                    <text x="400" y="810" text-anchor="middle" fill="#888" font-size="17">45</text>
                    <text x="620" y="810" text-anchor="middle" fill="#888" font-size="17">60</text>
                    <text x="840" y="810" text-anchor="middle" fill="#888" font-size="17">75</text>
                    <text x="990" y="810" text-anchor="middle" fill="#888" font-size="17">90</text>
                    <text x="125" y="490" text-anchor="end" fill="#888" font-size="17">strength</text>
                    <path d="M180 560 Q400 570 620 640 Q820 710 990 750" stroke="#ef4444" stroke-width="4" fill="none"/>
                    <text x="700 " y="700" text-anchor="middle" fill="#ef4444" font-size="18">untrained decline</text>
                    <path d="M180 560 Q320 360 480 330 Q700 300 850 380 Q930 430 990 480" stroke="#10b981" stroke-width="4" fill="none"/>
                    <text x="560" y="280" text-anchor="middle" fill="#10b981" font-size="18">lifting: higher peak, slower slide</text>
                    <line x1="620" y1="330" x2="620" y2="760" stroke="#ffd700" stroke-width="2" stroke-dasharray="8" opacity="0.5"/>
                    <text x="620" y="870" text-anchor="middle" fill="#ffd700" font-size="17">trained 60 &gt; untrained 30</text>
                    <rect x="150" y="920" width="800" height="90" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="960" text-anchor="middle" fill="#6366f1" font-size="19">Untrained: muscle drops 3-8% per decade after 30</text>
                    <text x="550" y="995" text-anchor="middle" fill="#888" font-size="16">Power falls even faster — training rewrites both curves</text>
                </svg>`,
                caption: "Sarcopenia is the default path, not the mandatory one — training switches curves"
            }
        },
        {
            type: "concept",
            title: "Your 40s and 50s: Same Engine, Better Maintenance",
            content: "In your 40s and 50s the rules do not change — the **margins** do. The engine from Lesson 7 still drives everything; it just runs best with better maintenance:\n\n• **Recovery needs grow.** The stress-recover-adapt cycle takes longer to complete. Where 24-48 hours once covered it, hard sessions may now need 48-72. Practical fix: keep intensity, manage frequency per lift, and treat sleep like a training day.\n\n• **Warm-ups get longer and non-optional.** Cold tissue at 50 tolerates surprises worse than at 25. Add 5 extra minutes: more general warming, more ramp sets, and gradual re-introduction after any layoff.\n\n• **Joints want gradual ramping.** New exercises, new ranges, new loads — introduce them over weeks, not days. Tendons adapt more slowly than muscles and set the schedule.\n\n• **Consistency beats intensity spikes.** The weekend-warrior pattern — nothing all week, heroics on Saturday — is precisely backwards now. Three moderate sessions beat one heroic one, every time.\n\nFor women, this window brings **perimenopause and menopause**, and it matters enormously: as **estrogen declines, muscle loss and bone loss both accelerate**. Estrogen is protective of both tissues; losing it removes a shield. Lifting is the single best countermeasure — mechanical loading directly signals muscle and bone to be retained and rebuilt, exactly when your hormones stop making the argument for you. If any decade *demands* strength training, it is this one.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE 40s-50s PLAYBOOK</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Same engine — better maintenance schedule</text>
                    <rect x="80" y="170" width="440" height="170" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="300" y="225" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">RECOVERY GROWS</text>
                    <text x="300" y="270" text-anchor="middle" fill="#fff" font-size="17">Hard sessions may need</text>
                    <text x="300" y="302" text-anchor="middle" fill="#fff" font-size="17">48-72 hours, not 24-48</text>
                    <rect x="580" y="170" width="440" height="170" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="800" y="225" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">LONGER WARM-UPS</text>
                    <text x="800" y="270" text-anchor="middle" fill="#fff" font-size="17">5 extra minutes, more</text>
                    <text x="800" y="302" text-anchor="middle" fill="#fff" font-size="17">ramp sets, no cold starts</text>
                    <rect x="80" y="370" width="440" height="170" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="300" y="425" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">RAMP JOINTS SLOWLY</text>
                    <text x="300" y="470" text-anchor="middle" fill="#fff" font-size="17">Tendons adapt slower than</text>
                    <text x="300" y="502" text-anchor="middle" fill="#fff" font-size="17">muscle — they set the pace</text>
                    <rect x="580" y="370" width="440" height="170" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="800" y="425" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">NO HERO SATURDAYS</text>
                    <text x="800" y="470" text-anchor="middle" fill="#fff" font-size="17">Three moderate sessions</text>
                    <text x="800" y="502" text-anchor="middle" fill="#fff" font-size="17">beat one weekend spike</text>
                    <rect x="130" y="590" width="840" height="230" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="550" y="650" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="21">MENOPAUSE CHANGES THE STAKES</text>
                    <text x="550" y="700" text-anchor="middle" fill="#fff" font-size="18">Estrogen decline accelerates muscle + bone loss</text>
                    <text x="550" y="735" text-anchor="middle" fill="#fff" font-size="18">Loading directly signals both tissues to rebuild</text>
                    <text x="550" y="780" text-anchor="middle" fill="#ec4899" font-size="18">Lifting is the countermeasure</text>
                    <rect x="200" y="870" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="920" text-anchor="middle" fill="#ffd700" font-size="20">If any decade demands lifting, it is this one</text>
                </svg>`,
                caption: "The midlife adjustments: more recovery, longer warm-ups, relentless consistency"
            }
        },
        {
            type: "quiz",
            question: "Why is strength training especially important for women during and after menopause?",
            options: [
                { text: "Declining estrogen accelerates muscle and bone loss, and loading directly signals both tissues to rebuild", correct: true },
                { text: "Menopause makes cardio unsafe, leaving lifting as the only allowed exercise option", correct: false },
                { text: "Muscle gained before menopause disappears, so training must restart from zero", correct: false },
                { text: "Lifting restores estrogen production back to pre-menopause levels", correct: false }
            ],
            explanation: "Estrogen helps protect both muscle and bone; as it declines through perimenopause and menopause, losses in both tissues accelerate. Mechanical loading from strength training is the most direct countermeasure — it signals muscle and bone to be retained and rebuilt independent of hormones. The tempting distractor is the estrogen-restoration option: lifting does not meaningfully restore estrogen levels. It works around the hormonal change rather than reversing it, which is exactly why it remains effective. Cardio, meanwhile, stays safe and valuable — it just cannot replace loading.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="22">MENOPAUSE AND MUSCLE</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">A shield comes down — what steps up?</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">Think about what loading signals to tissue</text>
                    <rect x="150" y="360" width="380" height="180" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="340" y="420" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="19">ESTROGEN FALLS</text>
                    <text x="340" y="465" text-anchor="middle" fill="#fff" font-size="16">Muscle + bone loss</text>
                    <text x="340" y="497" text-anchor="middle" fill="#fff" font-size="16">accelerate</text>
                    <path d="M540 450 L590 450" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="590,450 576,441 576,459" fill="#14b8a6"/>
                    <rect x="600" y="360" width="380" height="180" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="790" y="420" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">LOADING STEPS IN</text>
                    <text x="790" y="465" text-anchor="middle" fill="#fff" font-size="16">Direct rebuild signal</text>
                    <text x="790" y="497" text-anchor="middle" fill="#fff" font-size="16">to muscle and bone</text>
                </svg>`,
                caption: "Mid-lesson check: hormones, tissue, and the loading countermeasure"
            }
        },
        {
            type: "concept",
            title: "60s and Beyond: Chase Power, Not Just Strength",
            content: "Past 60, one research finding should reshape your training: **power — the ability to produce force quickly — declines faster than strength**. Studies put power loss at roughly 3-4% per year in untrained older adults, versus 1-2% for strength. The fast-twitch fibers and quick nerve signals that produce speed are the first to fade.\n\nWhy this matters more than any gym number: catching yourself when you trip is a **power** event. You have about half a second to get a foot out and push hard. Slow strength cannot arrive in time; fast force can. Falls are the leading cause of injury death in adults 65+, and power is the physical quality standing between a stumble and a hip fracture.\n\nSo training after 60 adds one deliberate ingredient:\n\n• **Move light loads fast.** Take 40-60% of your usual weight and lift *briskly* on purpose (lower under control) — chair stands as fast as you can, quick step-ups, medicine-ball pushes. Research on high-velocity training in older adults shows power responds well when you specifically ask for speed.\n\n• **Keep lifting heavy too.** Strength remains the foundation power is built on.\n\n• **Add balance challenges** — single-leg work, carries — because fall prevention is a skill stack, not one exercise.\n\nNot medical advice — clear new explosive work with your doctor if you have joint or heart conditions. But do not let *gentle* become the default prescription. Gentle does not catch a fall.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">POWER FADES FIRST</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">After 60, train fast force on purpose</text>
                    <rect x="80" y="180" width="440" height="250" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="300" y="240" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">POWER</text>
                    <text x="300" y="290" text-anchor="middle" fill="#fff" font-size="19">Declines ~3-4% per year</text>
                    <text x="300" y="325" text-anchor="middle" fill="#fff" font-size="19">untrained after 60</text>
                    <text x="300" y="380" text-anchor="middle" fill="#888" font-size="16">Fast-twitch fibers fade first</text>
                    <rect x="580" y="180" width="440" height="250" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="800" y="240" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="22">STRENGTH</text>
                    <text x="800" y="290" text-anchor="middle" fill="#fff" font-size="19">Declines ~1-2% per year</text>
                    <text x="800" y="325" text-anchor="middle" fill="#fff" font-size="19">untrained after 60</text>
                    <text x="800" y="380" text-anchor="middle" fill="#888" font-size="16">Slower slide, same direction</text>
                    <rect x="130" y="500" width="840" height="190" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="555" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">WHY IT MATTERS: THE HALF-SECOND</text>
                    <text x="550" y="600" text-anchor="middle" fill="#fff" font-size="18">Catching a trip is a power event —</text>
                    <text x="550" y="635" text-anchor="middle" fill="#fff" font-size="18">force that arrives late arrives useless</text>
                    <rect x="130" y="750" width="840" height="150" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="805" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">THE PRESCRIPTION</text>
                    <text x="550" y="845" text-anchor="middle" fill="#fff" font-size="18">Light loads moved fast + heavy strength + balance</text>
                    <rect x="200" y="950" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="1000" text-anchor="middle" fill="#ffd700" font-size="20">Gentle does not catch a fall</text>
                </svg>`,
                caption: "Power declines roughly twice as fast as strength — so train speed deliberately"
            }
        },
        {
            type: "example",
            title: "The Nursing-Home Study That Shocked Medicine",
            content: "In 1990, **Dr. Maria Fiatarone** and colleagues published a trial in **JAMA** that medicine did not see coming. The subjects were not athletes — they were **frail nursing-home residents, ages 86 to 96**, average age 90. Several used walkers or canes; some had arthritis, heart disease, old fractures.\n\nThe intervention: **8 weeks of high-intensity leg strength training** — leg extensions at up to 80% of their one-rep max, three times a week. Not pastel dumbbells and gentle waving. Real, heavy-for-them lifting, carefully supervised and progressively loaded.\n\nThe results:\n\n• **Strength up 174%** on average\n\n• **Walking speed improved ~48%**\n\n• **Measurable muscle growth** — mid-thigh muscle area up about 9-10%\n\n• **Two participants stopped needing their canes**\n\nRead that middle bullet again: measurable *new muscle* — in nonagenarians — in **two months**.\n\nThe study upended a core assumption of geriatric care: that frailty is a one-way street to be managed with cushions and caution. It turned out much of what looked like irreversible aging was reversible **disuse** — and it responded to the same stimulus that works at 25: progressive overload, applied with appropriate supervision.\n\nIf a 92-year-old with arthritis can rebuild her legs in eight weeks, the question *am I too old to start?* has an answer, and the answer has a citation.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">FIATARONE 1990, JAMA</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Ages 86-96 — eight weeks of real lifting</text>
                    <rect x="150" y="170" width="800" height="140" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="225" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">THE SUBJECTS</text>
                    <text x="550" y="270" text-anchor="middle" fill="#fff" font-size="18">Frail nursing-home residents, average age 90</text>
                    <rect x="80" y="350" width="300" height="220" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="230" y="420" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="40">+174%</text>
                    <text x="230" y="475" text-anchor="middle" fill="#fff" font-size="18">average strength</text>
                    <text x="230" y="508" text-anchor="middle" fill="#888" font-size="15">in 8 weeks</text>
                    <rect x="400" y="350" width="300" height="220" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="550" y="420" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="40">+48%</text>
                    <text x="550" y="475" text-anchor="middle" fill="#fff" font-size="18">walking speed</text>
                    <text x="550" y="508" text-anchor="middle" fill="#888" font-size="15">tandem gait test</text>
                    <rect x="720" y="350" width="300" height="220" rx="20" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="870" y="420" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="40">~9%</text>
                    <text x="870" y="475" text-anchor="middle" fill="#fff" font-size="18">new thigh muscle</text>
                    <text x="870" y="508" text-anchor="middle" fill="#888" font-size="15">in nonagenarians</text>
                    <rect x="150" y="630" width="800" height="180" rx="20" fill="rgba(245,158,11,0.1)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="685" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">THE LESSON MEDICINE LEARNED</text>
                    <text x="550" y="730" text-anchor="middle" fill="#fff" font-size="18">Much of frailty is reversible disuse,</text>
                    <text x="550" y="765" text-anchor="middle" fill="#fff" font-size="18">not irreversible aging</text>
                    <rect x="200" y="870" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="920" text-anchor="middle" fill="#ffd700" font-size="20">Two participants put down their canes</text>
                </svg>`,
                caption: "The 1990 JAMA trial: progressive overload works at age 90"
            }
        },
        {
            type: "concept",
            title: "Bones Are Living Tissue — and They Listen to Load",
            content: "Your skeleton is not scaffolding; it is **living tissue that remodels constantly**, run by two cell crews: **osteoclasts** clearing old bone and **osteoblasts** laying down new. What tells the builders to work harder? **Mechanical load.** Bone adapts to the demands placed on it — the same logic as muscle, discovered a century earlier as **Wolff's Law**.\n\nThe catch: bone is a picky listener.\n\n• **Walking and swimming barely register.** They are wonderful for hearts and joints, but the loading is too gentle to push bone past its remodeling threshold.\n\n• **Bone responds to magnitude and novelty** — heavy loads and unfamiliar directions of stress. That means progressively loaded squats, deadlifts, and presses, plus impact work like hopping or jumping where appropriate.\n\nWhy this matters so much: after peak bone mass around age 30, density drifts downward — and in women, the drop steepens sharply in the years around menopause. **Osteoporosis** — bone fragile enough to fracture from minor falls — affects roughly one in three women and one in five men over 50 worldwide. A hip fracture at 80 is a life-altering event.\n\nFor decades, the standard advice to people with low bone density was to *avoid* heavy lifting — treat the skeleton like glass. The next card is about the trial that tested that dogma directly, in exactly the population everyone was afraid for.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">BONE LISTENS TO LOAD</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Wolff's Law: bone adapts to the demands placed on it</text>
                    <rect x="80" y="180" width="440" height="240" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="300" y="240" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">THE REMODELING CREW</text>
                    <text x="300" y="290" text-anchor="middle" fill="#fff" font-size="18">Osteoclasts clear old bone</text>
                    <text x="300" y="325" text-anchor="middle" fill="#fff" font-size="18">Osteoblasts build new bone</text>
                    <text x="300" y="375" text-anchor="middle" fill="#888" font-size="16">Load tells the builders to work</text>
                    <rect x="580" y="180" width="440" height="240" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="800" y="240" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">A PICKY LISTENER</text>
                    <text x="800" y="290" text-anchor="middle" fill="#fff" font-size="18">Walking + swimming: too gentle</text>
                    <text x="800" y="325" text-anchor="middle" fill="#fff" font-size="18">Heavy + novel load: builds</text>
                    <text x="800" y="375" text-anchor="middle" fill="#888" font-size="16">Magnitude and novelty matter</text>
                    <rect x="130" y="490" width="840" height="200" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="550" y="545" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="21">THE STAKES</text>
                    <text x="550" y="590" text-anchor="middle" fill="#fff" font-size="18">Osteoporosis: ~1 in 3 women, 1 in 5 men over 50</text>
                    <text x="550" y="625" text-anchor="middle" fill="#fff" font-size="18">Bone loss steepens sharply around menopause</text>
                    <text x="550" y="660" text-anchor="middle" fill="#888" font-size="16">Peak bone mass arrives near age 30, then drifts down</text>
                    <rect x="150" y="750" width="800" height="130" rx="20" fill="rgba(245,158,11,0.1)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="800" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="19">THE OLD DOGMA</text>
                    <text x="550" y="840" text-anchor="middle" fill="#fff" font-size="18">Fragile bones? Avoid heavy lifting... or so we thought</text>
                </svg>`,
                caption: "Bone remodels toward the loads you give it — and mostly ignores gentle ones"
            }
        },
        {
            type: "example",
            title: "LIFTMOR: Heavy Barbells for 'Fragile' Bones",
            content: "The **LIFTMOR trial**, published in the *Journal of Bone and Mineral Research* (2018) by Steven Watson, Belinda Beck, and colleagues in Australia, asked the question nobody dared: what if women with low bone mass did the *opposite* of the standard advice?\n\n**The setup:** 101 postmenopausal women with low to very low bone density (osteopenia or osteoporosis). Half did the conventional prescription — a gentle home program. Half did **HiRIT**: twice-weekly, 30-minute, closely supervised sessions of **heavy deadlifts, squats, and overhead presses at 80-85% of max**, plus impact chin-up drops.\n\n**After 8 months:**\n\n• **Lumbar spine bone density improved ~2.9%** in the lifting group — while the gentle-exercise group *lost* about 1.2%\n\n• Femoral neck (hip) density held or improved versus decline in controls\n\n• Height, posture, and functional strength measures improved\n\n• **Safety: one minor back tweak in thousands of heavy lifting exposures** — that is the entire injury report from the population everyone considered too fragile for a barbell\n\nThe dogma was not just wrong; it was backwards. Bones flagged as fragile did not need protection *from* load — they needed the load, properly dosed and supervised, to rebuild.\n\nOne critical detail: **supervised** is doing real work in that sentence. LIFTMOR's results came from coached technique and careful progression — a template for working *with* professionals, not a license to max out alone on day one.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE LIFTMOR TRIAL</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">J Bone Miner Res 2018 — 101 women, low bone mass</text>
                    <rect x="80" y="180" width="440" height="320" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="300" y="240" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">GENTLE HOME PROGRAM</text>
                    <text x="300" y="290" text-anchor="middle" fill="#fff" font-size="18">The conventional advice</text>
                    <text x="300" y="345" text-anchor="middle" fill="#ef4444" font-size="34">-1.2%</text>
                    <text x="300" y="395" text-anchor="middle" fill="#fff" font-size="18">spine bone density</text>
                    <text x="300" y="430" text-anchor="middle" fill="#888" font-size="16">still losing ground</text>
                    <rect x="580" y="180" width="440" height="320" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="800" y="240" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">HEAVY SUPERVISED HiRIT</text>
                    <text x="800" y="290" text-anchor="middle" fill="#fff" font-size="18">Deadlift, squat, press at 80-85%</text>
                    <text x="800" y="345" text-anchor="middle" fill="#10b981" font-size="34">+2.9%</text>
                    <text x="800" y="395" text-anchor="middle" fill="#fff" font-size="18">spine bone density</text>
                    <text x="800" y="430" text-anchor="middle" fill="#888" font-size="16">2x weekly, 30 minutes</text>
                    <rect x="130" y="570" width="840" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="625" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">THE SAFETY LEDGER</text>
                    <text x="550" y="670" text-anchor="middle" fill="#fff" font-size="18">One minor back tweak across thousands</text>
                    <text x="550" y="705" text-anchor="middle" fill="#fff" font-size="18">of heavy, supervised lifting exposures</text>
                    <rect x="150" y="810" width="800" height="90" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="850" text-anchor="middle" fill="#ffd700" font-size="20">Fragile bones did not need protection from load</text>
                    <text x="550" y="885" text-anchor="middle" fill="#ffd700" font-size="20">They needed the load — properly dosed</text>
                </svg>`,
                caption: "LIFTMOR: heavy supervised lifting built spine density while gentle exercise lost it"
            }
        },
        {
            type: "concept",
            title: "Training With a Diagnosis: Prescribed, Not Forbidden",
            content: "So what if you *have* a diagnosis — osteoporosis, arthritis, a heart condition, diabetes, a replaced hip? Here is the frame that decades of evidence now support: for most chronic conditions, appropriately dosed strength training is not the thing your doctor protects you from. **It is increasingly the thing they prescribe.**\n\n• **Osteoporosis** — as LIFTMOR showed, supervised heavy lifting can build bone. The form matters (avoid loaded spinal flexion); the loading is the medicine.\n\n• **Osteoarthritis** — strength training is a first-line recommendation in major clinical guidelines. Stronger muscles around a cranky knee absorb load the joint would otherwise take; pain typically *decreases* with sensible training.\n\n• **Heart conditions** — cardiac rehabilitation programs now routinely include resistance training. Lifting with moderate loads and good breathing (no straining breath-holds unless cleared) improves the heart's workload economy.\n\n• **Type 2 diabetes** — muscle is your largest site for blood-sugar disposal; resistance training measurably improves glucose control.\n\nThe honest and non-negotiable part: **this is not medical advice, and a diagnosis changes the dosing.** Work with your doctor or physical therapist to set your starting loads, exclusions, and progressions — then actually train, because their answer is rarely *don't*. It is almost always *yes, like this*.\n\nThe wrong takeaway from a diagnosis is the recliner. The evidence keeps pointing the same direction: individually dosed strength is part of the treatment.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">PRESCRIBED, NOT FORBIDDEN</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Strength training with a diagnosis — dosed, not dropped</text>
                    <rect x="80" y="180" width="440" height="180" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="300" y="235" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">OSTEOPOROSIS</text>
                    <text x="300" y="280" text-anchor="middle" fill="#fff" font-size="17">Supervised heavy lifting</text>
                    <text x="300" y="312" text-anchor="middle" fill="#fff" font-size="17">can build bone (LIFTMOR)</text>
                    <rect x="580" y="180" width="440" height="180" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="800" y="235" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">OSTEOARTHRITIS</text>
                    <text x="800" y="280" text-anchor="middle" fill="#fff" font-size="17">First-line in guidelines —</text>
                    <text x="800" y="312" text-anchor="middle" fill="#fff" font-size="17">strong muscles shield joints</text>
                    <rect x="80" y="390" width="440" height="180" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="300" y="445" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">HEART CONDITIONS</text>
                    <text x="300" y="490" text-anchor="middle" fill="#fff" font-size="17">Cardiac rehab now includes</text>
                    <text x="300" y="522" text-anchor="middle" fill="#fff" font-size="17">resistance training</text>
                    <rect x="580" y="390" width="440" height="180" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="800" y="445" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">TYPE 2 DIABETES</text>
                    <text x="800" y="490" text-anchor="middle" fill="#fff" font-size="17">Muscle is the biggest site</text>
                    <text x="800" y="522" text-anchor="middle" fill="#fff" font-size="17">for glucose disposal</text>
                    <rect x="130" y="630" width="840" height="180" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="685" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">THE RULE</text>
                    <text x="550" y="730" text-anchor="middle" fill="#fff" font-size="18">Doctor or physio sets the dose and exclusions —</text>
                    <text x="550" y="765" text-anchor="middle" fill="#fff" font-size="18">then you actually train</text>
                    <rect x="200" y="870" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="920" text-anchor="middle" fill="#ffd700" font-size="20">The answer is rarely no — it is yes, like this</text>
                </svg>`,
                caption: "Chronic conditions change the dose of training, not the direction of the advice"
            }
        },
        {
            type: "application",
            title: "Decade-Proof Your Training This Week",
            content: "Wherever you are on the timeline, take these steps now:\n\n1. **Audit your warm-up against your age** — Under 40: 5 minutes plus ramp sets. Over 40: double it, and add an extra ramp set on your first lift. Over 60: add 2-3 fast-but-light sets — chair stands or step-ups done briskly — to train power.\n\n2. **Load your bones on purpose** — Make sure your week includes progressively loaded squat, hinge, and press patterns. If osteoporosis runs in your family (ask — most people never do), treat this as non-negotiable and mention DEXA screening to your doctor at your next visit.\n\n3. **If you have a diagnosis, book the conversation** — One appointment with your doctor or a physical therapist: *I want to strength train — what is my starting dose and what should I avoid?* Bring the LIFTMOR trial up by name if bone density is the concern.\n\n4. **If you are over 60, add one explosive drill** — Five sets of 3 fast chair stands, twice a week, is a legitimate fall-prevention program that costs 4 minutes.\n\n5. **Write down your 30-year reason** — One sentence: what do you want your body to do at 80? Tape it inside your training log. That is who you are lifting for.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">DECADE-PROOF PLAN</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Five actions, whatever your birth year</text>
                    <rect x="150" y="170" width="800" height="110" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="220" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="21">1.</text>
                    <text x="250" y="220" text-anchor="start" fill="#fff" font-size="19">Match your warm-up to your decade</text>
                    <text x="250" y="255" text-anchor="start" fill="#888" font-size="16">40+: double it — 60+: add fast light sets</text>
                    <rect x="150" y="305" width="800" height="110" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="355" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="21">2.</text>
                    <text x="250" y="355" text-anchor="start" fill="#fff" font-size="19">Load bones: squat, hinge, press weekly</text>
                    <text x="250" y="390" text-anchor="start" fill="#888" font-size="16">Family history? Ask about DEXA screening</text>
                    <rect x="150" y="440" width="800" height="110" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="490" text-anchor="start" fill="#10b981" font-weight="bold" font-size="21">3.</text>
                    <text x="250" y="490" text-anchor="start" fill="#fff" font-size="19">Diagnosis? Book the dosing conversation</text>
                    <text x="250" y="525" text-anchor="start" fill="#888" font-size="16">Ask: what is my starting dose, what do I avoid?</text>
                    <rect x="150" y="575" width="800" height="110" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="625" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="21">4.</text>
                    <text x="250" y="625" text-anchor="start" fill="#fff" font-size="19">Over 60: one explosive drill, 2x weekly</text>
                    <text x="250" y="660" text-anchor="start" fill="#888" font-size="16">5 sets of 3 fast chair stands = 4 minutes</text>
                    <rect x="150" y="710" width="800" height="110" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="760" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="21">5.</text>
                    <text x="250" y="760" text-anchor="start" fill="#fff" font-size="19">Write your 30-year reason in your log</text>
                    <text x="250" y="795" text-anchor="start" fill="#888" font-size="16">What should your body still do at 80?</text>
                    <rect x="200" y="870" width="700" height="80" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="920" text-anchor="middle" fill="#ffd700" font-size="20">Start where you are — the timeline starts today</text>
                </svg>`,
                caption: "Today's action plan: warm-up, bone loading, dosing, power, and your 30-year reason"
            }
        },
        {
            type: "quote",
            content: "You do not stop lifting because you grow old. You grow old because you stop lifting — and the deposits you make today are still paying interest thirty years from now.",
            author: "Adapted from a saying beloved by strength coaches everywhere",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">STRENGTH IS COMPOUND INTEREST</text>
                    <rect x="100" y="150" width="900" height="260" rx="20" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="160" y="220" text-anchor="start" fill="#fff" font-style="italic" font-size="22">"You do not stop lifting because you grow old.</text>
                    <text x="160" y="265" text-anchor="start" fill="#fff" font-style="italic" font-size="22">You grow old because you stop lifting — and the</text>
                    <text x="160" y="310" text-anchor="start" fill="#fff" font-style="italic" font-size="22">deposits you make today are still paying</text>
                    <text x="160" y="355" text-anchor="start" fill="#fff" font-style="italic" font-size="22">interest thirty years from now."</text>
                    <text x="940" y="390" text-anchor="end" fill="#8b5cf6" font-size="16">— strength coaching proverb, adapted</text>
                    <rect x="150" y="490" width="800" height="220" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="550" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">SAME TEAM, DIFFERENT DECADES</text>
                    <text x="550" y="600" text-anchor="middle" fill="#fff" font-size="18">The 30-year-old you and the 70-year-old you</text>
                    <text x="550" y="635" text-anchor="middle" fill="#fff" font-size="18">are teammates — every rep today is a pass</text>
                    <text x="550" y="670" text-anchor="middle" fill="#fff" font-size="18">forward to the one who needs it most</text>
                </svg>`,
                caption: "A moment of reflection: every workout is a deposit your future self withdraws"
            }
        },
        {
            type: "quiz",
            question: "What did the LIFTMOR trial (J Bone Miner Res, 2018) find when postmenopausal women with low bone mass did heavy, supervised barbell training?",
            options: [
                { text: "Spine bone density improved ~2.9% with an excellent safety record, while gentle exercisers lost density", correct: true },
                { text: "Bone density improved, but frequent injuries confirmed heavy lifting is too risky for this group", correct: false },
                { text: "It was safe but no better for bone than gentle home exercise, so the standard advice held", correct: false },
                { text: "Bone density held steady but never improved, since adults cannot rebuild lost bone", correct: false }
            ],
            explanation: "LIFTMOR randomized 101 women with low to very low bone mass to either gentle home exercise or twice-weekly supervised heavy lifting (deadlift, squat, overhead press at 80-85% of max). The lifting group gained about 2.9% lumbar spine density while the gentle group lost about 1.2% — with essentially one minor injury across the entire trial. The tempting middle options preserve the old fragile-avoid-weights dogma, which is exactly what the data overturned. The caveat that remains: results came from supervised, progressively dosed lifting, not solo maximal attempts.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="120" width="800" height="180" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="180" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">THE LIFTMOR QUESTION</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="18">Heavy barbells for low bone mass:</text>
                    <text x="550" y="260" text-anchor="middle" fill="#888" font-size="16">reckless dogma-breaking, or good medicine?</text>
                    <rect x="150" y="370" width="380" height="190" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="340" y="430" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="19">OLD DOGMA</text>
                    <text x="340" y="475" text-anchor="middle" fill="#fff" font-size="16">Fragile = avoid</text>
                    <text x="340" y="507" text-anchor="middle" fill="#fff" font-size="16">heavy weights</text>
                    <path d="M540 465 L590 465" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="590,465 576,456 576,474" fill="#14b8a6"/>
                    <rect x="600" y="370" width="380" height="190" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="790" y="430" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">TRIAL EVIDENCE</text>
                    <text x="790" y="475" text-anchor="middle" fill="#fff" font-size="16">Supervised heavy load</text>
                    <text x="790" y="507" text-anchor="middle" fill="#fff" font-size="16">rebuilt spine density</text>
                </svg>`,
                caption: "Final check: what the LIFTMOR data actually showed"
            }
        }
    ]
},
{
    id: 10,
    title: "Home vs Gym: Your Training Environment",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "The Best Gym Is the One You Actually Enter",
            content: "Here is a question worth more than any program debate: where will you actually train, three months from now, on a rainy Tuesday when motivation is gone?\n\nPeople argue endlessly about home versus gym as if one is objectively superior. They are not. They are two different sets of trade-offs, and the right answer depends on one thing: **which environment removes YOUR most common excuse**.\n\nIf your gym is a 25-minute drive, that is 50 minutes of commute wrapped around every session — and on busy weeks, the commute is what kills the workout, not the workout. If your home setup is a dusty corner you walk past feeling guilty, maybe you need the energy and accountability of a building full of people lifting.\n\nIn this lesson you'll get an honest comparison, a complete home setup for roughly the price of three months of gym membership, bodyweight progressions that go far harder than you think, and a 20-minute hotel-room workout for when life scatters you. By the end, you'll know exactly where your training should live.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">HOME vs GYM</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">The real question is not which is better</text>
                    <rect x="60" y="180" width="460" height="300" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="290" y="240" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="26">THE GYM</text>
                    <text x="290" y="295" text-anchor="middle" fill="#fff" font-size="19">Heavy iron, energy,</text>
                    <text x="290" y="330" text-anchor="middle" fill="#fff" font-size="19">community, options</text>
                    <text x="290" y="380" text-anchor="middle" fill="#888" font-size="16">Cost: commute + fees</text>
                    <rect x="580" y="180" width="460" height="300" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="240" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="26">YOUR HOME</text>
                    <text x="810" y="295" text-anchor="middle" fill="#fff" font-size="19">Zero commute, privacy,</text>
                    <text x="810" y="330" text-anchor="middle" fill="#fff" font-size="19">open 24/7, always yours</text>
                    <text x="810" y="380" text-anchor="middle" fill="#888" font-size="16">Cost: lighter max loads</text>
                    <rect x="150" y="560" width="800" height="150" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="620" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="22">THE DECIDING QUESTION</text>
                    <text x="550" y="665" text-anchor="middle" fill="#fff" font-size="19">Which one removes YOUR most common excuse?</text>
                </svg>`,
                caption: "Two environments, two sets of trade-offs — one honest question"
            }
        },
        {
            type: "concept",
            title: "What a Gym Genuinely Offers",
            content: "Let's be fair to the gym first, because its advantages are real:\n\n• **Heavy loads on demand** — a barbell plus plates lets you load a hinge or squat with 200, 300, 400+ pounds. No home band setup replicates that ceiling. If your goal is a heavy barbell deadlift, you need a barbell.\n\n• **Zero setup cost per session** — the racks, benches, cables, and dumbbells from 5 to 120 pounds are just there. You walk in and train.\n\n• **Community and accountability** — training around other people lifting is quietly contagious. Research on group exercise consistently shows better adherence when workouts have a social component, and even a nodding acquaintance at the squat rack counts.\n\n• **Psychological separation** — for many people, walking through the gym door flips a switch: this is training time. Home is full of competing signals — dishes, kids, the couch.\n\n• **Specialty equipment** — leg press, cable stations, and machines that let you train safely around injuries.\n\nThe costs: membership fees (typically $10-80/month), the commute, limited hours at some facilities, and for some people, self-consciousness that keeps them from showing up at all. That last one matters more than gym marketing admits.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE GYM'S REAL EDGE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Four advantages that are hard to replicate</text>
                    <rect x="80" y="170" width="440" height="170" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="300" y="230" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="21">HEAVY LOADS</text>
                    <text x="300" y="270" text-anchor="middle" fill="#fff" font-size="17">Barbells scale to 400+ lb</text>
                    <text x="300" y="300" text-anchor="middle" fill="#888" font-size="15">No ceiling on progression</text>
                    <rect x="580" y="170" width="440" height="170" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="800" y="230" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="21">EVERYTHING READY</text>
                    <text x="800" y="270" text-anchor="middle" fill="#fff" font-size="17">Racks, cables, dumbbells</text>
                    <text x="800" y="300" text-anchor="middle" fill="#888" font-size="15">Zero setup per session</text>
                    <rect x="80" y="390" width="440" height="170" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="300" y="450" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">COMMUNITY</text>
                    <text x="300" y="490" text-anchor="middle" fill="#fff" font-size="17">Effort is contagious</text>
                    <text x="300" y="520" text-anchor="middle" fill="#888" font-size="15">Social ties boost adherence</text>
                    <rect x="580" y="390" width="440" height="170" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="800" y="450" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">MENTAL SWITCH</text>
                    <text x="800" y="490" text-anchor="middle" fill="#fff" font-size="17">The door means training</text>
                    <text x="800" y="520" text-anchor="middle" fill="#888" font-size="15">No couch, no dishes</text>
                    <rect x="150" y="630" width="800" height="130" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="685" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="20">THE HIDDEN COSTS</text>
                    <text x="550" y="725" text-anchor="middle" fill="#fff" font-size="17">Commute time, monthly fees, hours, gym anxiety</text>
                </svg>`,
                caption: "What you are really paying for with a membership — and what it costs"
            }
        },
        {
            type: "concept",
            title: "What Home Offers: The Friction Argument",
            content: "The home advantage comes down to one word: **friction**.\n\n• **Zero commute** — a gym 20 minutes away adds 40 minutes of overhead to every session. Over three sessions a week, that is roughly **100 hours a year** spent driving to exercise. A home session starts the moment you decide to start.\n\n• **24/7 access** — 5:40 a.m. before the kids wake up. 9:30 p.m. after a brutal workday. Fifteen spare minutes at lunch. The home gym never closes and never has a line for the squat rack.\n\n• **Total privacy** — no mirrors full of strangers, no worrying about form judgment, no waiting. For people with gym anxiety — which surveys suggest affects roughly half of new exercisers — this alone is the difference between training and not training.\n\n• **One-time cost** — a solid setup costs about what 4-8 months of membership costs, then it is free forever.\n\nThe honest downsides: your maximum loads are capped without serious equipment investment, nobody is watching (which cuts both ways), and home is full of distractions. Some people find that without the ritual of going somewhere, training never feels official — and it quietly stops happening.\n\nNeither list wins on paper. The tiebreaker is your life, not the equipment.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE FRICTION MATH</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">What a 20-minute commute really costs</text>
                    <rect x="100" y="180" width="900" height="150" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="550" y="240" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">GYM SESSION OVERHEAD</text>
                    <text x="550" y="285" text-anchor="middle" fill="#fff" font-size="19">20 min there + 20 min back = 40 min per session</text>
                    <rect x="100" y="370" width="900" height="150" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="430" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">OVER ONE YEAR</text>
                    <text x="550" y="475" text-anchor="middle" fill="#fff" font-size="19">3 sessions/week x 40 min = about 100 hours driving</text>
                    <rect x="100" y="560" width="900" height="150" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="620" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">HOME SESSION OVERHEAD</text>
                    <text x="550" y="665" text-anchor="middle" fill="#fff" font-size="19">Walk to the corner of the room: about 20 seconds</text>
                    <rect x="200" y="770" width="700" height="110" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="815" text-anchor="middle" fill="#ffd700" font-size="19">Friction is the silent killer of consistency.</text>
                    <text x="550" y="850" text-anchor="middle" fill="#888" font-size="16">Lower it wherever your excuses live.</text>
                </svg>`,
                caption: "The commute you stop noticing still costs you 100 hours a year"
            }
        },
        {
            type: "example",
            title: "Two Real Paths: Marcus and Elena",
            content: "**Marcus, 41, sales manager.** He joined a gym every January for six years. Each time, the pattern repeated: strong for three weeks, then a late meeting killed the commute window one day, then two, then the membership became a monthly donation. In year seven he spent $220 on adjustable dumbbells, a doorway pull-up bar, and a set of bands. He trains at 6:05 a.m. in his garage, three mornings a week, before anyone else is awake. Eighteen months later, he has not missed more than four sessions in any month. His excuse was the commute. Home deleted it.\n\n**Elena, 29, remote software developer.** She bought the same home setup — and it gathered dust. Working from home all day, her apartment had become a single undifferentiated blur of couch, desk, and kitchen. Training there felt like answering one more Slack message. She joined a gym a 12-minute walk away, and the walk became the ritual that flipped her brain into training mode. She has lifted three times a week for two years, and the front-desk staff know her name.\n\nSame equipment question, opposite answers. **The environment did not make them consistent — the fit between environment and excuse did.**",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">TWO PATHS, SAME GOAL</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">The fix matches the excuse, not the trend</text>
                    <rect x="60" y="180" width="460" height="380" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="240" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="24">MARCUS, 41</text>
                    <text x="290" y="290" text-anchor="middle" fill="#fff" font-size="18">Excuse: the commute</text>
                    <text x="290" y="330" text-anchor="middle" fill="#fff" font-size="18">Fix: $220 garage setup</text>
                    <text x="290" y="370" text-anchor="middle" fill="#fff" font-size="18">Trains 6:05 a.m., 3x/week</text>
                    <text x="290" y="420" text-anchor="middle" fill="#888" font-size="16">6 failed gym Januaries</text>
                    <text x="290" y="455" text-anchor="middle" fill="#888" font-size="16">18 months consistent at home</text>
                    <rect x="580" y="180" width="460" height="380" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="810" y="240" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="24">ELENA, 29</text>
                    <text x="810" y="290" text-anchor="middle" fill="#fff" font-size="18">Excuse: home = work blur</text>
                    <text x="810" y="330" text-anchor="middle" fill="#fff" font-size="18">Fix: gym 12 min away</text>
                    <text x="810" y="370" text-anchor="middle" fill="#fff" font-size="18">The walk = mental switch</text>
                    <text x="810" y="420" text-anchor="middle" fill="#888" font-size="16">Home dumbbells: dusty</text>
                    <text x="810" y="455" text-anchor="middle" fill="#888" font-size="16">2 years consistent at gym</text>
                    <rect x="150" y="630" width="800" height="120" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="680" text-anchor="middle" fill="#ffd700" font-size="19">The environment did not create consistency.</text>
                    <text x="550" y="718" text-anchor="middle" fill="#fff" font-size="17">The fit between environment and excuse did.</text>
                </svg>`,
                caption: "Marcus needed zero commute; Elena needed a door to walk through"
            }
        },
        {
            type: "quiz",
            question: "Based on this lesson, what is the single most important factor when choosing between training at home or at a gym?",
            options: [
                { text: "The gym is always better because it has heavier weights available", correct: false },
                { text: "Which environment removes your personal most common excuse for skipping sessions", correct: true },
                { text: "Home is always better because it saves membership fees and commute time", correct: false },
                { text: "Whichever option costs less money over the course of a full year", correct: false }
            ],
            explanation: "Neither environment wins on paper — gyms offer heavy loads and community, home offers zero friction and 24/7 access. The deciding factor is fit: Marcus thrived at home because commute was his excuse, while Elena needed the gym's physical separation from her work-from-home blur. Cost and equipment matter far less than the honest question of where you will actually show up on an unmotivated Tuesday, month after month.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="130" width="800" height="190" rx="20" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="190" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="22">CHOOSING YOUR ENVIRONMENT</text>
                    <text x="550" y="235" text-anchor="middle" fill="#fff" font-size="18">Gym and home each have real advantages</text>
                    <text x="550" y="272" text-anchor="middle" fill="#888" font-size="16">So what actually breaks the tie?</text>
                    <rect x="150" y="380" width="380" height="130" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="340" y="435" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="19">EQUIPMENT?</text>
                    <text x="340" y="472" text-anchor="middle" fill="#888" font-size="16">Matters, but secondary</text>
                    <rect x="570" y="380" width="380" height="130" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="760" y="435" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">YOUR EXCUSES?</text>
                    <text x="760" y="472" text-anchor="middle" fill="#888" font-size="16">This is the real test</text>
                </svg>`,
                caption: "Test your understanding of the environment decision"
            }
        },
        {
            type: "concept",
            title: "The $150-300 Setup That Covers 90% of Needs",
            content: "You do not need a $3,000 garage gym. Four purchases cover roughly 90% of what a beginner-to-intermediate lifter needs:\n\n1. **Adjustable dumbbells** ($100-180) — the backbone. A pair that adjusts from roughly 5 to 50 pounds handles goblet squats, presses, rows, lunges, Romanian deadlifts, and carries. Selectorized dial versions save space; classic spin-lock plates save money.\n\n2. **Resistance bands** ($25-40) — a set of loop bands from light to heavy. They load hinges, add resistance to push-ups, assist pull-ups, and pack into any suitcase.\n\n3. **Doorway pull-up bar** ($25-35) — the cheapest way to own the single best upper-body pull exercise, plus a place to anchor bands overhead.\n\n4. **Optional: a flat bench** ($50-100) — nice for presses, rows, and step-ups, but a sturdy chair, ottoman, or the floor substitutes for most of it early on.\n\nTotal: **$150-300** — about what many gyms charge for 4-8 months. What this setup cannot do: load a barbell squat or deadlift past a certain point. We will solve most of that in two cards with single-leg work and bands. For your first year or two of training, this corner of a room is genuinely enough.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE $150-300 HOME KIT</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Four purchases, 90% of your needs covered</text>
                    <rect x="80" y="170" width="440" height="180" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="300" y="225" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">ADJUSTABLE DUMBBELLS</text>
                    <text x="300" y="265" text-anchor="middle" fill="#fff" font-size="17">$100-180 — the backbone</text>
                    <text x="300" y="300" text-anchor="middle" fill="#888" font-size="15">Squats, presses, rows, RDLs</text>
                    <rect x="580" y="170" width="440" height="180" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="800" y="225" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">RESISTANCE BANDS</text>
                    <text x="800" y="265" text-anchor="middle" fill="#fff" font-size="17">$25-40 — light to heavy set</text>
                    <text x="800" y="300" text-anchor="middle" fill="#888" font-size="15">Load hinges, assist pulls</text>
                    <rect x="80" y="400" width="440" height="180" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="300" y="455" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">DOORWAY PULL-UP BAR</text>
                    <text x="300" y="495" text-anchor="middle" fill="#fff" font-size="17">$25-35 — best pull exercise</text>
                    <text x="300" y="530" text-anchor="middle" fill="#888" font-size="15">Plus a band anchor point</text>
                    <rect x="580" y="400" width="440" height="180" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="800" y="455" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">BENCH (OPTIONAL)</text>
                    <text x="800" y="495" text-anchor="middle" fill="#fff" font-size="17">$50-100 — nice, not vital</text>
                    <text x="800" y="530" text-anchor="middle" fill="#888" font-size="15">A sturdy chair works early</text>
                    <rect x="200" y="650" width="700" height="120" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="700" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="20">TOTAL: $150-300</text>
                    <text x="550" y="738" text-anchor="middle" fill="#fff" font-size="17">About 4-8 months of typical gym fees — once</text>
                </svg>`,
                caption: "The complete starter home gym, priced honestly"
            }
        },
        {
            type: "concept",
            title: "Bodyweight Ladders: Harder Than You Think",
            content: "No equipment at all? Bodyweight training progresses beautifully — if you climb the **progression ladders** instead of just adding endless reps:\n\n**Push ladder** (horizontal press):\nWall push-up → incline push-up (hands on counter) → knee push-up → full push-up → feet-elevated push-up → slow-tempo or archer push-up. Each rung shifts more bodyweight onto your arms — an incline push-up loads roughly 55-65% of bodyweight, a feet-elevated one closer to 75%.\n\n**Squat ladder** (knee-dominant):\nBox squat → bodyweight squat → split squat → rear-foot-elevated (Bulgarian) split squat → skater squat → **pistol squat progression**. A Bulgarian split squat puts nearly all your weight on one leg — instant doubling of load with zero equipment.\n\n**Pull ladder** (the hardest to improvise):\nDoorframe rows → **inverted rows under a sturdy table** (feet on floor, pull chest to the edge) → band-assisted pull-ups → pull-ups. The table row is the unsung hero of home training — check the table can take your weight first.\n\nThe rule from Lesson 7 still governs everything: when a rung becomes easy for your target reps, **climb to the next rung**. That is progressive overload without a single plate.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">PROGRESSION LADDERS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Climb a rung when the reps get easy</text>
                    <text x="550" y="175" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="24">PUSH LADDER</text>
                    <rect x="100" y="200" width="900" height="70" rx="15" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="245" text-anchor="middle" fill="#fff" font-size="17">Wall → incline → knee → full → feet-elevated → archer</text>
                    <text x="550" y="335" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="24">SQUAT LADDER</text>
                    <rect x="100" y="360" width="900" height="70" rx="15" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="405" text-anchor="middle" fill="#fff" font-size="17">Box → bodyweight → split → Bulgarian → skater → pistol</text>
                    <text x="550" y="495" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="24">PULL LADDER</text>
                    <rect x="100" y="520" width="900" height="70" rx="15" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="565" text-anchor="middle" fill="#fff" font-size="17">Doorframe row → table row → assisted → full pull-up</text>
                    <rect x="150" y="660" width="800" height="150" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="715" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">LOAD SHIFTS AS YOU CLIMB</text>
                    <text x="550" y="755" text-anchor="middle" fill="#fff" font-size="17">Incline push-up: ~55-65% bodyweight on your arms</text>
                    <text x="550" y="788" text-anchor="middle" fill="#888" font-size="15">Feet elevated: ~75% — same move, heavier rung</text>
                </svg>`,
                caption: "Three ladders that carry bodyweight training for years"
            }
        },
        {
            type: "concept",
            title: "Bands, Hinges, and the Single-Leg Secret",
            content: "The two hardest patterns to load at home are the **hinge** and the **squat** — your legs and hips are simply stronger than a 50-pound dumbbell. Two solutions:\n\n**Solution 1: Bands change the resistance curve.**\nStand on a heavy loop band, grip the top, and hinge: a **banded Romanian deadlift**. The band is lightest at the bottom and heaviest at lockout — exactly where your hips are strongest — so it feels surprisingly brutal at the top. Stack two bands, or combine a band with dumbbells, and the pattern loads meaningfully. Banded good mornings and pull-throughs (band anchored low behind you) round out the hinge menu.\n\n**Solution 2: Single-leg work is the home lifter's heavy barbell.**\nPhysics does the loading for you. A 180-pound person doing a Bulgarian split squat puts most of their bodyweight plus two 40-pound dumbbells through **one leg** — comparable leg stimulus to a much heavier barbell squat, with less spinal load and less equipment. Single-leg Romanian deadlifts do the same for the hinge, with a free balance challenge that Lesson 9 explained matters more every decade.\n\nEMG and training studies consistently show split-squat variations producing similar or greater muscle activation in the legs and glutes versus back squats at loads a home lifter can actually hold. **You are not settling — you are substituting intelligently.**",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">LOADING LEGS AT HOME</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Two ways around the missing barbell</text>
                    <rect x="60" y="180" width="460" height="330" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="290" y="240" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">BANDS FOR HINGES</text>
                    <text x="290" y="290" text-anchor="middle" fill="#fff" font-size="17">Stand on band, hinge up</text>
                    <text x="290" y="325" text-anchor="middle" fill="#fff" font-size="17">Heaviest at lockout —</text>
                    <text x="290" y="360" text-anchor="middle" fill="#fff" font-size="17">where hips are strongest</text>
                    <text x="290" y="410" text-anchor="middle" fill="#888" font-size="15">RDLs, good mornings,</text>
                    <text x="290" y="443" text-anchor="middle" fill="#888" font-size="15">pull-throughs, band + DB</text>
                    <rect x="580" y="180" width="460" height="330" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="240" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">SINGLE-LEG WORK</text>
                    <text x="810" y="290" text-anchor="middle" fill="#fff" font-size="17">One leg carries the load</text>
                    <text x="810" y="325" text-anchor="middle" fill="#fff" font-size="17">Bodyweight + 2 dumbbells</text>
                    <text x="810" y="360" text-anchor="middle" fill="#fff" font-size="17">= heavy stimulus, one leg</text>
                    <text x="810" y="410" text-anchor="middle" fill="#888" font-size="15">Bulgarian split squats,</text>
                    <text x="810" y="443" text-anchor="middle" fill="#888" font-size="15">single-leg RDLs + balance</text>
                    <rect x="150" y="580" width="800" height="140" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="635" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="20">NOT SETTLING — SUBSTITUTING</text>
                    <text x="550" y="675" text-anchor="middle" fill="#fff" font-size="17">Split squats show similar leg activation to back squats</text>
                    <text x="550" y="705" text-anchor="middle" fill="#888" font-size="15">at loads you can actually hold in your hands</text>
                </svg>`,
                caption: "Bands and single-leg physics replace most of the barbell's job"
            }
        },
        {
            type: "example",
            title: "The 20-Minute Hotel Room Workout",
            content: "You are three days into a work trip. The hotel gym is one broken treadmill and a yoga mat. Here is a complete, zero-equipment full-body session that lives in this book's patterns:\n\n**Warm-up (3 minutes)**: 30 seconds each — arm circles, bodyweight squats, hip hinges, marching in place, repeated twice.\n\n**Main circuit (15 minutes)** — 40 seconds work, 20 seconds rest, 3 rounds:\n1. **Split squats** (right leg) — knee-dominant\n2. **Split squats** (left leg)\n3. **Push-ups** — pick your ladder rung; use the desk for incline\n4. **Single-leg hip hinges** (alternating) — hinge pattern\n5. **Table or towel rows** — or a slow wall-press hold if nothing works\n\n**Finisher (2 minutes)**: a plank, broken into as many holds as needed.\n\nThat is all six movement patterns from Lessons 3-6 in twenty minutes, in a space the size of a bath towel. It will not set records — that is not the job. The job is keeping the habit alive so there is nothing to restart when you get home. Frequent travelers who maintain even one such session per trip report far less of the classic start-stop-restart cycle that erodes years of progress.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">HOTEL ROOM, 20 MIN</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Full body, zero equipment, towel-sized space</text>
                    <rect x="150" y="170" width="800" height="90" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="200" y="222" text-anchor="start" fill="#3b82f6" font-weight="bold" font-size="19">WARM-UP</text>
                    <text x="400" y="222" text-anchor="start" fill="#fff" font-size="17">3 min — circles, squats, hinges</text>
                    <rect x="150" y="290" width="800" height="90" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="342" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="19">1-2.</text>
                    <text x="300" y="342" text-anchor="start" fill="#fff" font-size="17">Split squats, each leg — 40s on / 20s off</text>
                    <rect x="150" y="410" width="800" height="90" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="462" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="19">3.</text>
                    <text x="300" y="462" text-anchor="start" fill="#fff" font-size="17">Push-ups — desk incline if needed</text>
                    <rect x="150" y="530" width="800" height="90" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="582" text-anchor="start" fill="#10b981" font-weight="bold" font-size="19">4.</text>
                    <text x="300" y="582" text-anchor="start" fill="#fff" font-size="17">Single-leg hip hinges, alternating</text>
                    <rect x="150" y="650" width="800" height="90" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="702" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="19">5.</text>
                    <text x="300" y="702" text-anchor="start" fill="#fff" font-size="17">Table rows — then plank finisher, 2 min</text>
                    <rect x="200" y="790" width="700" height="110" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="838" text-anchor="middle" fill="#ffd700" font-size="18">3 rounds x 5 moves = the habit stays alive</text>
                    <text x="550" y="872" text-anchor="middle" fill="#888" font-size="15">Nothing to restart when you get home</text>
                </svg>`,
                caption: "All six movement patterns in a 20-minute travel circuit"
            }
        },
        {
            type: "application",
            title: "Design Your Environment This Week",
            content: "**Run this audit today — it takes ten minutes:**\n\n1. **Name your #1 excuse.** Look at the last five workouts you skipped or almost skipped. Write down the actual reason — commute, time of day, self-consciousness, boredom, home distractions. Be honest; this decision hinges on it.\n\n2. **Match the environment to the excuse.** Commute or schedule chaos → build the home corner. Home feels like work or you need energy around you → pick the closest acceptable gym, not the fanciest one. Distance beats amenities.\n\n3. **If home: order the core kit.** Adjustable dumbbells, a band set, and a doorway pull-up bar — $150-250. Put them somewhere visible, not in a closet. Visible equipment is a standing invitation.\n\n4. **If gym: kill the friction.** Pack your bag the night before, pick fixed days and times, and choose a gym within 15 minutes of home or work — adherence research shows drop-off climbs sharply past that radius.\n\n5. **Build the travel fallback now.** Save the 20-minute hotel workout from the last card in your phone notes, so the decision is already made before the trip.\n\nEnvironment design is a one-time cost that pays every single week.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">YOUR ENVIRONMENT AUDIT</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Ten minutes today, paid back every week</text>
                    <rect x="150" y="170" width="800" height="100" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="228" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">1.</text>
                    <text x="245" y="228" text-anchor="start" fill="#fff" font-size="18">Name your #1 skipped-workout excuse</text>
                    <rect x="150" y="300" width="800" height="100" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="358" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="20">2.</text>
                    <text x="245" y="358" text-anchor="start" fill="#fff" font-size="18">Match environment to that excuse</text>
                    <rect x="150" y="430" width="800" height="100" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="488" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">3.</text>
                    <text x="245" y="488" text-anchor="start" fill="#fff" font-size="18">Home: order the kit, keep it visible</text>
                    <rect x="150" y="560" width="800" height="100" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="618" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">4.</text>
                    <text x="245" y="618" text-anchor="start" fill="#fff" font-size="18">Gym: within 15 min, bag packed, fixed days</text>
                    <rect x="150" y="690" width="800" height="100" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="748" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="20">5.</text>
                    <text x="245" y="748" text-anchor="start" fill="#fff" font-size="18">Save the travel workout in your phone now</text>
                </svg>`,
                caption: "Five steps to an environment that works with you, not against you"
            }
        },
        {
            type: "concept",
            title: "The Verdict: Consistency Beats Equipment",
            content: "Time to say the quiet part out loud. Exercise science comparisons of home-based versus facility-based resistance programs — including trials in older adults and cardiac rehab populations — repeatedly find something inconvenient for equipment marketers: **when the programs are matched for effort and progression, the results are similar. When adherence differs, adherence decides everything.**\n\nA mediocre program done consistently in a garage beats a perfect program abandoned at a beautiful gym. Every time.\n\nSo hold the comparison loosely:\n\n• Chasing a big barbell squat or deadlift? The gym's loading ceiling genuinely matters — go.\n• Protecting the habit through a chaotic season of life? The home corner's zero friction genuinely matters — stay.\n• Many lifters land on a **hybrid**: a home kit for busy weeks and travel, a gym for heavy days. That is not indecision; that is redundancy, and redundancy protects streaks.\n\nAnd notice one more thing: the skills transfer completely. The movement patterns, the effort gauges, the progression rules from this book — they work identically with a barbell, a dumbbell, a band, or your own bodyweight. **You are not a gym person or a home person. You are a person who trains, anywhere.**",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE VERDICT</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">What the comparison studies keep finding</text>
                    <rect x="60" y="180" width="460" height="280" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="240" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">PERFECT PROGRAM</text>
                    <text x="290" y="275" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">ABANDONED</text>
                    <text x="290" y="330" text-anchor="middle" fill="#fff" font-size="18">Beautiful gym, all the gear</text>
                    <text x="290" y="368" text-anchor="middle" fill="#888" font-size="16">Attendance fades by March</text>
                    <text x="290" y="420" text-anchor="middle" fill="#888" font-size="16">Result: nothing</text>
                    <rect x="580" y="180" width="460" height="280" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="240" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">DECENT PROGRAM</text>
                    <text x="810" y="275" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">DONE FOR YEARS</text>
                    <text x="810" y="330" text-anchor="middle" fill="#fff" font-size="18">Garage corner, three moves</text>
                    <text x="810" y="368" text-anchor="middle" fill="#888" font-size="16">Never misses a week</text>
                    <text x="810" y="420" text-anchor="middle" fill="#888" font-size="16">Result: transformation</text>
                    <rect x="150" y="530" width="800" height="150" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="590" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="22">CONSISTENCY BEATS EQUIPMENT</text>
                    <text x="550" y="632" text-anchor="middle" fill="#fff" font-size="18">Matched effort = similar results, home or gym.</text>
                    <text x="550" y="662" text-anchor="middle" fill="#888" font-size="16">Adherence is the variable that decides everything.</text>
                </svg>`,
                caption: "When effort is equal, showing up is the only variable left"
            }
        },
        {
            type: "quiz",
            question: "You can only train at home with dumbbells up to 50 pounds, which feels too light for your legs. What is the smartest way to keep leg training challenging?",
            options: [
                { text: "Accept that leg training requires a gym and skip legs until you can join one", correct: false },
                { text: "Do very high reps — 50 or more bodyweight squats — since reps fully replace load", correct: false },
                { text: "Shift to single-leg exercises like Bulgarian split squats, and use bands to load hinge patterns", correct: true },
                { text: "Buy a full barbell and power rack, since nothing else can effectively load the legs", correct: false }
            ],
            explanation: "Single-leg work is the home lifter's heavy substitute: a Bulgarian split squat routes most of your bodyweight plus both dumbbells through one leg, producing leg-muscle stimulus comparable to far heavier bilateral lifts. Banded RDLs and pull-throughs load the hinge similarly. Endless high-rep sets drift toward endurance rather than strength, and skipping legs sacrifices the most important patterns in the book. A rack is great but absolutely not required for years of progress.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="130" width="800" height="190" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="190" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">THE 50-POUND CEILING</text>
                    <text x="550" y="235" text-anchor="middle" fill="#fff" font-size="18">Your legs outgrow the dumbbells — now what?</text>
                    <text x="550" y="272" text-anchor="middle" fill="#888" font-size="16">Think physics, not just heavier metal</text>
                    <rect x="150" y="380" width="380" height="150" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="340" y="440" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="19">TWO LEGS</text>
                    <text x="340" y="478" text-anchor="middle" fill="#888" font-size="16">Load split in half</text>
                    <rect x="570" y="380" width="380" height="150" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="760" y="440" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="19">ONE LEG</text>
                    <text x="760" y="478" text-anchor="middle" fill="#888" font-size="16">Same weight, doubled</text>
                </svg>`,
                caption: "Test your grasp of home loading strategies"
            }
        }
    ]
},
{
    id: 11,
    title: "Recovery: Where the Growth Actually Happens",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "You Don't Get Stronger in the Gym",
            content: "Here is the plot twist most lifters take years to accept: **the workout does not make you stronger. The workout makes you temporarily weaker.**\n\nWalk out of a good session and your muscles carry microscopic damage, your fuel stores are down, and your nervous system is taxed. If you were tested an hour later, you would perform worse than when you walked in.\n\nThe getting-stronger part happens over the next one to three days — while you eat, sleep, and go about your life. Your body repairs the damage and, anticipating you will do that again, rebuilds slightly stronger. Training is the **stimulus**. Recovery is the **adaptation**. You have been thinking of rest days as the absence of progress; they are actually where all of it happens.\n\nThis lesson covers the recovery levers that the evidence says matter: protein (with a real target number), sleep (with a study that should scare you), planned deloads, why soreness is lying to you, and one honest card about the only supplement genuinely worth discussing. None of this is medical advice — but all of it is where your gains have been hiding.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE PLOT TWIST</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Where getting stronger actually happens</text>
                    <rect x="60" y="200" width="300" height="220" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="210" y="260" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">WORKOUT</text>
                    <text x="210" y="305" text-anchor="middle" fill="#fff" font-size="17">The stimulus</text>
                    <text x="210" y="340" text-anchor="middle" fill="#888" font-size="15">You leave weaker</text>
                    <text x="210" y="370" text-anchor="middle" fill="#888" font-size="15">than you arrived</text>
                    <path d="M370 310 L430 310" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="430,310 418,302 418,318" fill="#14b8a6"/>
                    <rect x="440" y="200" width="300" height="220" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="590" y="260" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="21">RECOVERY</text>
                    <text x="590" y="305" text-anchor="middle" fill="#fff" font-size="17">Eat, sleep, live</text>
                    <text x="590" y="340" text-anchor="middle" fill="#888" font-size="15">Repair runs for</text>
                    <text x="590" y="370" text-anchor="middle" fill="#888" font-size="15">24-72 hours</text>
                    <path d="M750 310 L810 310" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="810,310 798,302 798,318" fill="#14b8a6"/>
                    <rect x="820" y="200" width="220" height="220" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                    <text x="930" y="260" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">STRONGER</text>
                    <text x="930" y="305" text-anchor="middle" fill="#fff" font-size="17">Rebuilt above</text>
                    <text x="930" y="340" text-anchor="middle" fill="#fff" font-size="17">the old level</text>
                    <rect x="200" y="500" width="700" height="120" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="550" text-anchor="middle" fill="#ffd700" font-size="19">Training asks the question.</text>
                    <text x="550" y="588" text-anchor="middle" fill="#fff" font-size="18">Recovery is when your body answers.</text>
                </svg>`,
                caption: "Stimulus, recovery, adaptation — the real growth cycle"
            }
        },
        {
            type: "concept",
            title: "The 24-72 Hour Construction Window",
            content: "After resistance training, your body ramps up **muscle protein synthesis (MPS)** — the process of building new muscle proteins to repair and reinforce the fibers you stressed.\n\nWhat the muscle-biopsy research shows:\n\n• MPS rises within hours of a session and stays **elevated for roughly 24-72 hours**, with the peak in the first day or two. Trained lifters have shorter windows; beginners have longer, bigger ones — one reason newbie gains are so dramatic.\n\n• This is why hitting each muscle **roughly twice a week** (as your Lesson 8 program does) fits the biology: you restart the construction project as the previous one winds down.\n\n• The construction crew needs materials and a power supply. The materials are **dietary protein** — specifically amino acids. The power supply is overall food energy and the deep repair signaling that happens during **sleep**.\n\nTwo practical consequences:\n\n1. A brutal session followed by poor eating and 5 hours of sleep is a construction site with no bricks and no electricity. You paid for the stimulus and skipped the adaptation.\n\n2. Back-to-back heavy sessions for the same muscles cut into the repair window. Your program's rest days are not lost time — they are literally when the strength is installed.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE MPS WINDOW</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Muscle protein synthesis after one session</text>
                    <line x1="120" y1="620" x2="1000" y2="620" stroke="#888" stroke-width="2"/>
                    <line x1="120" y1="620" x2="120" y2="200" stroke="#888" stroke-width="2"/>
                    <path d="M120 600 Q 250 250 400 330 Q 600 430 780 560 L 980 600" stroke="#10b981" stroke-width="4" fill="none"/>
                    <text x="140" y="240" text-anchor="start" fill="#10b981" font-weight="bold" font-size="19">MPS elevated</text>
                    <text x="160" y="660" text-anchor="middle" fill="#888" font-size="17">0h</text>
                    <text x="400" y="660" text-anchor="middle" fill="#888" font-size="17">24h</text>
                    <text x="680" y="660" text-anchor="middle" fill="#888" font-size="17">48h</text>
                    <text x="960" y="660" text-anchor="middle" fill="#888" font-size="17">72h</text>
                    <line x1="400" y1="620" x2="400" y2="300" stroke="#ffd700" stroke-width="2" stroke-dasharray="6" opacity="0.5"/>
                    <text x="410" y="290" text-anchor="start" fill="#ffd700" font-size="16">peak: first 24-48h</text>
                    <rect x="150" y="740" width="800" height="150" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="795" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">WHY 2x/WEEK PER MUSCLE WORKS</text>
                    <text x="550" y="835" text-anchor="middle" fill="#fff" font-size="17">Restart the construction as the last window closes</text>
                    <text x="550" y="868" text-anchor="middle" fill="#888" font-size="15">Materials: protein. Power supply: sleep and food energy.</text>
                </svg>`,
                caption: "MPS stays elevated 24-72 hours — your program is built around it"
            }
        },
        {
            type: "concept",
            title: "Protein: The Number Is 1.6",
            content: "Protein advice online ranges from shrugs to absurdity. The best single answer comes from **Morton and colleagues, 2018**, in the British Journal of Sports Medicine: a meta-analysis of 49 studies and 1,863 participants on protein supplementation during resistance training.\n\nThe headline finding: gains in muscle and strength increased with protein intake up to about **1.6 grams per kilogram of bodyweight per day** — roughly **0.7 grams per pound** — and extra protein beyond that produced no further measurable benefit on average.\n\nWhat that means in real numbers:\n\n• A 150-lb (68 kg) person: about **110 g protein/day**\n• A 185-lb (84 kg) person: about **135 g/day**\n• A 220-lb (100 kg) person: about **160 g/day**\n\nPractical rules that flow from the evidence:\n\n• **Distribute it** — roughly 25-40 g across 3-4 meals appears to support MPS better than one giant dinner, since each protein feeding triggers a synthesis pulse.\n\n• **Food first** — chicken, fish, eggs, Greek yogurt, beans, lentils, tofu, cottage cheese. Protein powder is just a convenient food, not magic; use it to fill gaps, not as a foundation.\n\n• **Older lifters may need slightly more** per meal (Lesson 9's anabolic resistance) — the 1.6 target is a floor worth taking seriously after 60.\n\nNo supplement stack outperforms simply hitting this number daily.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">PROTEIN: THE NUMBER</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Morton 2018 meta-analysis, 49 studies, n=1863</text>
                    <rect x="150" y="170" width="800" height="170" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="235" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="26">1.6 g/kg/day (~0.7 g/lb)</text>
                    <text x="550" y="280" text-anchor="middle" fill="#fff" font-size="18">Benefits plateau above this on average</text>
                    <text x="550" y="313" text-anchor="middle" fill="#888" font-size="15">More is not harmful for healthy people — just unnecessary</text>
                    <rect x="80" y="390" width="300" height="160" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="230" y="445" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">150 lb</text>
                    <text x="230" y="490" text-anchor="middle" fill="#fff" font-size="19">~110 g/day</text>
                    <rect x="400" y="390" width="300" height="160" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="445" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">185 lb</text>
                    <text x="550" y="490" text-anchor="middle" fill="#fff" font-size="19">~135 g/day</text>
                    <rect x="720" y="390" width="300" height="160" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="870" y="445" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">220 lb</text>
                    <text x="870" y="490" text-anchor="middle" fill="#fff" font-size="19">~160 g/day</text>
                    <rect x="150" y="620" width="800" height="140" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="675" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="20">DISTRIBUTE: 25-40 g x 3-4 MEALS</text>
                    <text x="550" y="715" text-anchor="middle" fill="#fff" font-size="17">Each feeding triggers a synthesis pulse</text>
                    <text x="550" y="745" text-anchor="middle" fill="#888" font-size="15">Food first — powder fills gaps, nothing more</text>
                </svg>`,
                caption: "The evidence-based daily protein target, translated to real bodies"
            }
        },
        {
            type: "example",
            title: "What 135 Grams Actually Looks Like",
            content: "Numbers on paper feel abstract, so here is a completely ordinary day that lands a 185-lb lifter at their ~135 g target — no powder required:\n\n**Breakfast (~35 g)**: 3 eggs scrambled (18 g) + 1 cup Greek yogurt (17 g) with berries.\n\n**Lunch (~40 g)**: Chicken breast sandwich, about 5 oz of chicken (40 g), whatever bread and toppings you like.\n\n**Snack (~15 g)**: Cottage cheese, half a cup (14 g), or a handful of almonds plus a cheese stick.\n\n**Dinner (~45 g)**: 6 oz of salmon (42 g) with rice and vegetables, glass of milk (4 g extra if needed).\n\n**Total: roughly 135 g**, spread across four feedings of 15-45 g — right in the distribution pattern the research favors.\n\nA vegetarian version works the same way: Greek yogurt and eggs at breakfast, a lentil-and-quinoa bowl at lunch (~20 g), edamame or cottage cheese as a snack, and a tofu stir-fry with two cups of tofu at dinner (~40 g). Plant proteins have slightly lower leucine per gram, so vegetarian and vegan lifters often aim a bit higher — closer to 1.8-2.0 g/kg — which is exactly what careful studies of plant-based athletes suggest.\n\nNotice what is missing: nothing exotic, nothing expensive. Hitting 1.6 g/kg is a grocery-list problem, not a supplement problem.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">135 g IN REAL FOOD</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">An ordinary day for a 185-lb lifter</text>
                    <rect x="150" y="170" width="800" height="110" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="215" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="19">BREAKFAST ~35 g</text>
                    <text x="200" y="252" text-anchor="start" fill="#fff" font-size="17">3 eggs + 1 cup Greek yogurt with berries</text>
                    <rect x="150" y="310" width="800" height="110" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="355" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="19">LUNCH ~40 g</text>
                    <text x="200" y="392" text-anchor="start" fill="#fff" font-size="17">Chicken breast sandwich, ~5 oz chicken</text>
                    <rect x="150" y="450" width="800" height="110" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="495" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="19">SNACK ~15 g</text>
                    <text x="200" y="532" text-anchor="start" fill="#fff" font-size="17">Half cup cottage cheese or nuts + cheese stick</text>
                    <rect x="150" y="590" width="800" height="110" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="635" text-anchor="start" fill="#10b981" font-weight="bold" font-size="19">DINNER ~45 g</text>
                    <text x="200" y="672" text-anchor="start" fill="#fff" font-size="17">6 oz salmon, rice, vegetables, glass of milk</text>
                    <rect x="200" y="750" width="700" height="120" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="800" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="20">TOTAL: ~135 g, ZERO POWDER</text>
                    <text x="550" y="838" text-anchor="middle" fill="#888" font-size="16">A grocery-list problem, not a supplement problem</text>
                </svg>`,
                caption: "Four ordinary meals that hit the evidence-based target"
            }
        },
        {
            type: "quiz",
            question: "According to the Morton 2018 meta-analysis in BJSM, what daily protein intake maximized muscle gains from resistance training?",
            options: [
                { text: "About 0.8 g/kg/day — the standard RDA is already enough for lifters", correct: false },
                { text: "About 1.6 g/kg/day (~0.7 g/lb), with little extra benefit above that", correct: true },
                { text: "About 3.0 g/kg/day — muscle growth keeps scaling as protein increases", correct: false },
                { text: "There is no useful target; timing protein within 30 minutes after training is what matters", correct: false }
            ],
            explanation: "Analyzing 49 studies with 1,863 participants, Morton and colleagues found gains rose with protein intake up to roughly 1.6 g/kg/day, then plateaued — more was not harmful for healthy people, just unnecessary on average. The RDA of 0.8 g/kg is a floor to prevent deficiency, not a target for building muscle. And total daily intake plus reasonable distribution across meals matters far more than racing a 30-minute post-workout clock.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="130" width="800" height="190" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="190" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">THE PROTEIN TARGET</text>
                    <text x="550" y="235" text-anchor="middle" fill="#fff" font-size="18">49 studies, 1,863 lifters, one number</text>
                    <text x="550" y="272" text-anchor="middle" fill="#888" font-size="16">Where do the gains stop climbing?</text>
                    <rect x="200" y="390" width="700" height="140" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="450" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">RDA vs TRAINING TARGET</text>
                    <text x="550" y="492" text-anchor="middle" fill="#888" font-size="16">Preventing deficiency is not building muscle</text>
                </svg>`,
                caption: "Test your recall of the protein evidence"
            }
        },
        {
            type: "concept",
            title: "Sleep: The Study That Should Scare You",
            content: "If a supplement did what sleep does, it would be banned in sport. The evidence is blunt:\n\n• In a landmark crossover study by **Nedeltcheva and colleagues (2010)**, dieters spent two weeks sleeping 8.5 hours versus 5.5 hours a night. Same diet, same calorie deficit. The short-sleep condition lost **55% less fat** and **60% more lean mass**. Sleep restriction literally redirected weight loss from fat to muscle.\n\n• Sleep deprivation lowers testosterone, elevates cortisol, impairs glucose handling, and blunts the growth-hormone pulses that cluster in deep sleep — the exact hormonal environment you need for repair, sabotaged.\n\n• It also hits behavior: studies of restricted sleep show reduced training performance, worse decision-making around food, and higher perceived effort at the same loads. Everything feels heavier because, functionally, you are weaker.\n\nThe target for most adults: **7-9 hours**. Athletes in heavy training often do better toward the top of that range.\n\nThe boring, effective playbook: a consistent sleep and wake time (even weekends), a dark cool room, caffeine cut off 8-10 hours before bed, and screens dimmed in the last hour. If you have to choose between a 5:00 a.m. workout on five hours of sleep and skipping the workout to sleep — **sleep**. That is not laziness; per the evidence, it is the higher-return training decision.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">SLEEP AND YOUR GAINS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Nedeltcheva 2010: same diet, different sleep</text>
                    <rect x="60" y="180" width="460" height="330" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="240" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="23">8.5 HOURS</text>
                    <text x="290" y="290" text-anchor="middle" fill="#fff" font-size="18">Weight lost was</text>
                    <text x="290" y="325" text-anchor="middle" fill="#fff" font-size="18">mostly fat</text>
                    <text x="290" y="380" text-anchor="middle" fill="#888" font-size="16">Muscle largely protected</text>
                    <text x="290" y="440" text-anchor="middle" fill="#10b981" font-size="17">Hormones support repair</text>
                    <rect x="580" y="180" width="460" height="330" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="810" y="240" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="23">5.5 HOURS</text>
                    <text x="810" y="290" text-anchor="middle" fill="#fff" font-size="18">55% less fat lost</text>
                    <text x="810" y="325" text-anchor="middle" fill="#fff" font-size="18">60% more lean mass lost</text>
                    <text x="810" y="380" text-anchor="middle" fill="#888" font-size="16">Same diet, same deficit</text>
                    <text x="810" y="440" text-anchor="middle" fill="#ef4444" font-size="17">Cortisol up, T down</text>
                    <rect x="150" y="580" width="800" height="140" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="635" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="22">TARGET: 7-9 HOURS</text>
                    <text x="550" y="675" text-anchor="middle" fill="#fff" font-size="17">Consistent schedule, dark cool room, early caffeine cutoff</text>
                    <text x="550" y="705" text-anchor="middle" fill="#888" font-size="15">Exhausted? Sleeping IS the higher-return training decision.</text>
                </svg>`,
                caption: "Two weeks, same diet — sleep decided what the body kept"
            }
        },
        {
            type: "concept",
            title: "Deloads: Planned Rest Beats Forced Rest",
            content: "Push hard for enough consecutive weeks and fatigue quietly accumulates faster than you dissipate it. Joints ache, sleep worsens, weights that moved crisply start grinding, motivation sags. Ignore those signals long enough and your body schedules its own vacation — as a tweaked back, a dead-tired month, or an illness.\n\nThe fix is the **deload**: a deliberately easy week inserted **every 4-8 weeks** of hard training.\n\nHow to run one:\n\n• **Halve your volume** — if you normally do 4 sets per exercise, do 2.\n• **Reduce the load or stay well shy of failure** — everything should feel like a 5-6 out of 10 effort, smooth and fast.\n• **Keep moving** — same exercises, same schedule, easy weights. A deload is active maintenance, not a week on the couch. Movement keeps the habit's groove worn in and actually speeds recovery.\n\nWhen to schedule one: on a fixed calendar (every 6th week is a fine default), or responsively — when performance stalls across multiple sessions, sleep degrades, or your usual warm-up weights feel oddly heavy.\n\nLifters routinely return from a deload and hit personal bests within a week or two, because the fitness they built was being masked by fatigue. **Planned rest is a strategy. Forced rest is a consequence.** You will take one or the other; only one of them is on your terms.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE DELOAD WEEK</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Every 4-8 weeks: back off on purpose</text>
                    <rect x="80" y="180" width="220" height="120" rx="15" fill="rgba(99,102,241,0.15)" stroke="#6366f1" stroke-width="2"/>
                    <text x="190" y="230" text-anchor="middle" fill="#fff" font-size="17">Weeks 1-5</text>
                    <text x="190" y="265" text-anchor="middle" fill="#6366f1" font-size="16">Push hard</text>
                    <path d="M300 240 L360 240" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="360,240 348,232 348,248" fill="#14b8a6"/>
                    <rect x="360" y="180" width="220" height="120" rx="15" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="470" y="230" text-anchor="middle" fill="#fff" font-size="17">Week 6</text>
                    <text x="470" y="265" text-anchor="middle" fill="#f59e0b" font-size="16">DELOAD</text>
                    <path d="M580 240 L640 240" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="640,240 628,232 628,248" fill="#14b8a6"/>
                    <rect x="640" y="180" width="220" height="120" rx="15" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="2"/>
                    <text x="750" y="230" text-anchor="middle" fill="#fff" font-size="17">Week 7+</text>
                    <text x="750" y="265" text-anchor="middle" fill="#10b981" font-size="16">Often new PRs</text>
                    <rect x="150" y="370" width="800" height="240" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="550" y="430" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="21">HOW TO DELOAD</text>
                    <text x="550" y="475" text-anchor="middle" fill="#fff" font-size="18">Halve your sets — 4 becomes 2</text>
                    <text x="550" y="513" text-anchor="middle" fill="#fff" font-size="18">Effort at 5-6 of 10 — smooth and fast</text>
                    <text x="550" y="551" text-anchor="middle" fill="#fff" font-size="18">Keep moving — same schedule, easy weights</text>
                    <rect x="200" y="670" width="700" height="110" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="718" text-anchor="middle" fill="#ffd700" font-size="19">Planned rest is a strategy.</text>
                    <text x="550" y="752" text-anchor="middle" fill="#fff" font-size="17">Forced rest is a consequence.</text>
                </svg>`,
                caption: "Back off deliberately every 4-8 weeks — or your body chooses when"
            }
        },
        {
            type: "concept",
            title: "DOMS Is Not a Growth Meter",
            content: "**Delayed-onset muscle soreness (DOMS)** — the stiffness that peaks 24-72 hours after training — is the most misread signal in fitness. The gym culture translation is soreness = productive workout. The research translation is different: **soreness = novelty**, mostly.\n\nWhat actually drives DOMS:\n\n• **New or unaccustomed exercises** — first exposure hurts most; the same workout repeated a week later hurts far less (the well-documented *repeated bout effect*), even though it is building just as much muscle.\n• **Eccentric emphasis** — movements with big lengthening phases under load (downhill walking, Romanian deadlifts, slow negatives) produce disproportionate soreness.\n• **Sudden volume jumps** — doubling your sets in a week.\n\nWhat the studies show: soreness correlates poorly with muscle growth. Muscles like quads can grow substantially with little soreness; some of the sorest activities (like long downhill hikes) build little. Trained lifters often stop getting meaningfully sore while still progressing for years.\n\nSo recalibrate:\n\n• **Not sore?** Nothing is wrong. Check the log — if weights or reps are climbing, you are growing.\n• **Crushed for four days?** You did not have a great workout; you exceeded your current recoverability. That soreness is now taxing the next sessions.\n• **Track progress with your training log** (Lesson 7), not with how gingerly you descend stairs.\n\nSoreness is information about novelty. The logbook is information about progress. Trust the logbook.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">SORENESS DECODED</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">What DOMS measures — and what it does not</text>
                    <rect x="60" y="180" width="460" height="300" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="240" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">THE MYTH</text>
                    <text x="290" y="295" text-anchor="middle" fill="#fff" font-size="18">Sore = productive</text>
                    <text x="290" y="335" text-anchor="middle" fill="#fff" font-size="18">No pain, no gain</text>
                    <text x="290" y="390" text-anchor="middle" fill="#888" font-size="15">Chasing soreness leads to</text>
                    <text x="290" y="422" text-anchor="middle" fill="#888" font-size="15">random, excessive workouts</text>
                    <rect x="580" y="180" width="460" height="300" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="240" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">THE EVIDENCE</text>
                    <text x="810" y="295" text-anchor="middle" fill="#fff" font-size="18">Sore = novel stimulus</text>
                    <text x="810" y="335" text-anchor="middle" fill="#fff" font-size="18">Correlates poorly with growth</text>
                    <text x="810" y="390" text-anchor="middle" fill="#888" font-size="15">Repeated bout effect: same</text>
                    <text x="810" y="422" text-anchor="middle" fill="#888" font-size="15">workout, less pain, same gains</text>
                    <rect x="150" y="550" width="800" height="140" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="605" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="21">MEASURE PROGRESS IN THE LOGBOOK</text>
                    <text x="550" y="645" text-anchor="middle" fill="#fff" font-size="17">Climbing weights and reps = growth, sore or not</text>
                    <text x="550" y="675" text-anchor="middle" fill="#888" font-size="15">Soreness only tells you something was new</text>
                </svg>`,
                caption: "Soreness measures novelty; the logbook measures progress"
            }
        },
        {
            type: "concept",
            title: "Creatine, Honestly (and Everything Else)",
            content: "The supplement industry runs on hope. Here is the honest inventory — with the standard reminder that if you have kidney disease, take medications, or have any health conditions, **talk to your doctor before adding any supplement**.\n\n**Creatine monohydrate is the exception that proves the rule.** It is the most-studied sports supplement in existence — hundreds of trials over 30+ years:\n\n• **What it does**: increases stored phosphocreatine, the rapid-energy fuel for short intense efforts, letting you squeeze out an extra rep or two — which compounds into roughly **5-10% greater strength and lean-mass gains** versus training without it in meta-analyses.\n• **The dose**: **3-5 g per day**, every day, timing irrelevant. Plain monohydrate — the fancy forms show no advantage and cost more.\n• **Safety**: extensively studied and safe for healthy kidneys; position stands from the International Society of Sports Nutrition call it one of the safest, most effective supplements available. Expect a pound or two of water-weight gain inside the muscle. It is not a steroid and does not act like one.\n\n**Everything else, briefly**: protein powder is food in convenient form (useful, not magic). Caffeine modestly boosts performance. Vitamin D matters if you are deficient — test, don't guess. And the sprawling universe of test-boosters, BCAAs alongside adequate protein, and detox blends? The evidence ranges from marginal to nonexistent. **Food, sleep, and consistency are 95% of results. Creatine is the optional last 5%.**",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE SUPPLEMENT TRUTH</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">One earns its shelf space — most do not</text>
                    <rect x="150" y="170" width="800" height="280" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="230" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="24">CREATINE MONOHYDRATE</text>
                    <text x="550" y="280" text-anchor="middle" fill="#fff" font-size="18">3-5 g daily, timing irrelevant</text>
                    <text x="550" y="318" text-anchor="middle" fill="#fff" font-size="18">~5-10% extra strength and lean-mass gains</text>
                    <text x="550" y="356" text-anchor="middle" fill="#fff" font-size="18">Hundreds of trials, 30+ years of study</text>
                    <text x="550" y="405" text-anchor="middle" fill="#888" font-size="15">Safe for healthy kidneys — ask your doctor if unsure</text>
                    <rect x="60" y="510" width="460" height="200" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="290" y="565" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="19">WORTH A LOOK</text>
                    <text x="290" y="608" text-anchor="middle" fill="#fff" font-size="16">Protein powder (as food)</text>
                    <text x="290" y="640" text-anchor="middle" fill="#fff" font-size="16">Caffeine, vitamin D if low</text>
                    <text x="290" y="678" text-anchor="middle" fill="#888" font-size="14">Modest, situational benefits</text>
                    <rect x="580" y="510" width="460" height="200" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="810" y="565" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="19">MOSTLY MARKETING</text>
                    <text x="810" y="608" text-anchor="middle" fill="#fff" font-size="16">Test-boosters, detox blends</text>
                    <text x="810" y="640" text-anchor="middle" fill="#fff" font-size="16">BCAAs with enough protein</text>
                    <text x="810" y="678" text-anchor="middle" fill="#888" font-size="14">Marginal to no evidence</text>
                    <rect x="200" y="770" width="700" height="110" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="818" text-anchor="middle" fill="#ffd700" font-size="18">Food, sleep, consistency: 95% of results.</text>
                    <text x="550" y="852" text-anchor="middle" fill="#888" font-size="15">Creatine is the optional last 5%.</text>
                </svg>`,
                caption: "Thirty years of evidence, sorted into three honest piles"
            }
        },
        {
            type: "example",
            title: "The Friday Night Tax: Alcohol and Stress",
            content: "Meet **Dana, 34**, who trains hard Monday through Friday morning and then unwinds with five or six drinks on Friday nights. Her logbook keeps stalling, and she cannot figure out why. The research can.\n\n**The alcohol effect**: In a 2014 study by Parr and colleagues, athletes performed a hard training session, then received either protein, alcohol plus protein, or alcohol plus carbs. Alcohol (about 7 standard drinks in the protocol) suppressed muscle protein synthesis by roughly **24% even when taken with protein**, and 37% with carbs alone. Friday's session was Dana's hardest of the week — and Friday night quietly cancelled a chunk of its adaptation, while also wrecking that night's deep sleep (alcohol fragments sleep architecture even when it makes you drowsy).\n\nThe realistic fix was not teetotaling: she moved her big social night to Saturday (a rest day), capped it at two drinks most weeks, and finished drinking earlier in the evening. Her stalls became less frequent within two months.\n\n**The stress effect**: chronic psychological stress works the same tax. A 2014 study by Stults-Kolehmainen found that students with high life stress recovered strength and reported markedly worse muscle recovery for days after the same standardized workout compared to low-stress peers. During brutal life seasons, the smart move is Lesson 8's rule: shrink the program, keep the schedule. Recovery capacity is a budget — spend it deliberately.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE RECOVERY TAXES</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Two quiet leaks in the adaptation budget</text>
                    <rect x="60" y="180" width="460" height="330" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="240" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="22">ALCOHOL</text>
                    <text x="290" y="290" text-anchor="middle" fill="#fff" font-size="17">Parr 2014: heavy drinking</text>
                    <text x="290" y="325" text-anchor="middle" fill="#fff" font-size="17">post-workout cut MPS ~24%</text>
                    <text x="290" y="360" text-anchor="middle" fill="#fff" font-size="17">even taken WITH protein</text>
                    <text x="290" y="410" text-anchor="middle" fill="#888" font-size="15">Also fragments deep sleep</text>
                    <text x="290" y="443" text-anchor="middle" fill="#888" font-size="15">the same night</text>
                    <rect x="580" y="180" width="460" height="330" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="810" y="240" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="22">CHRONIC STRESS</text>
                    <text x="810" y="290" text-anchor="middle" fill="#fff" font-size="17">High-stress students took</text>
                    <text x="810" y="325" text-anchor="middle" fill="#fff" font-size="17">days longer to recover from</text>
                    <text x="810" y="360" text-anchor="middle" fill="#fff" font-size="17">the identical workout</text>
                    <text x="810" y="410" text-anchor="middle" fill="#888" font-size="15">Hard life season? Shrink the</text>
                    <text x="810" y="443" text-anchor="middle" fill="#888" font-size="15">program, keep the schedule</text>
                    <rect x="150" y="580" width="800" height="130" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="635" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="20">RECOVERY IS A BUDGET</text>
                    <text x="550" y="675" text-anchor="middle" fill="#fff" font-size="17">Every tax you cut goes straight to your gains</text>
                </svg>`,
                caption: "Dana's stalled logbook had nothing to do with her training"
            }
        },
        {
            type: "application",
            title: "Your Recovery Audit: Five Moves This Week",
            content: "**Do these five things over the next seven days:**\n\n1. **Calculate your protein number tonight.** Bodyweight in pounds x 0.7 (or kg x 1.6). Write it on a sticky note on the fridge. Then count one typical day honestly — most people discover they are 40-60 g short.\n\n2. **Fix the biggest protein gap first.** Usually breakfast. Adding Greek yogurt, eggs, or cottage cheese to your morning routinely closes a third of the gap in one move.\n\n3. **Set a sleep alarm.** Not a wake-up alarm — a go-to-bed alarm, set for 8.5 hours before you must get up (the extra 30 minutes covers falling asleep). Protect it like a meeting for two weeks and watch your training quality.\n\n4. **Put a deload on the calendar.** Count back — if you have trained hard for 6+ weeks straight, schedule an easy week within the next two. Halve sets, effort at 5-6 out of 10, keep the schedule.\n\n5. **Pick ONE tax to cut.** The Friday drinks, the midnight scrolling, the doom-news marathon before bed. One, not five — sustainable beats dramatic here too.\n\nOptional sixth: if creatine interests you and your doctor has no objection, plain monohydrate, 3-5 g daily, any time of day. Skip everything else on the supplement shelf.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">RECOVERY AUDIT</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Five moves over the next seven days</text>
                    <rect x="150" y="170" width="800" height="100" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="228" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">1.</text>
                    <text x="245" y="228" text-anchor="start" fill="#fff" font-size="18">Calculate your protein number — lb x 0.7</text>
                    <rect x="150" y="300" width="800" height="100" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="358" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="20">2.</text>
                    <text x="245" y="358" text-anchor="start" fill="#fff" font-size="18">Fix the biggest gap — usually breakfast</text>
                    <rect x="150" y="430" width="800" height="100" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="200" y="488" text-anchor="start" fill="#3b82f6" font-weight="bold" font-size="20">3.</text>
                    <text x="245" y="488" text-anchor="start" fill="#fff" font-size="18">Set a go-to-BED alarm, 8.5 h before wake</text>
                    <rect x="150" y="560" width="800" height="100" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="618" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">4.</text>
                    <text x="245" y="618" text-anchor="start" fill="#fff" font-size="18">Put a deload week on the calendar</text>
                    <rect x="150" y="690" width="800" height="100" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="748" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">5.</text>
                    <text x="245" y="748" text-anchor="start" fill="#fff" font-size="18">Cut ONE recovery tax — just one</text>
                </svg>`,
                caption: "The week-one recovery checklist — small moves, compounding returns"
            }
        },
        {
            type: "quote",
            content: "Fatigue masks fitness. Take away the fatigue, and the fitness shines through.",
            author: "Attributed to coaching wisdom popularized by exercise scientist Tudor Bompa's periodization tradition",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">WISDOM</text>
                    <rect x="100" y="150" width="900" height="230" rx="20" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="160" y="225" text-anchor="start" fill="#fff" font-style="italic" font-size="24">"Fatigue masks fitness.</text>
                    <text x="160" y="270" text-anchor="start" fill="#fff" font-style="italic" font-size="24">Take away the fatigue, and</text>
                    <text x="160" y="315" text-anchor="start" fill="#fff" font-style="italic" font-size="24">the fitness shines through."</text>
                    <text x="940" y="355" text-anchor="end" fill="#8b5cf6" font-size="17">— periodization tradition</text>
                    <rect x="200" y="450" width="700" height="130" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="505" text-anchor="middle" fill="#ffd700" font-size="18">The strength you built is already in there.</text>
                    <text x="550" y="543" text-anchor="middle" fill="#888" font-size="16">Recovery is how you let it out.</text>
                </svg>`,
                caption: "Why lifters hit personal bests the week after resting"
            }
        },
        {
            type: "quiz",
            question: "You wake up two days after a workout with zero soreness, but your training log shows your rows went from 8 reps to 10 at the same weight. What should you conclude?",
            options: [
                { text: "The workout was too easy — no soreness means it failed to stimulate growth", correct: false },
                { text: "You are progressing well; soreness measures novelty, and the logbook is the real progress meter", correct: true },
                { text: "You should switch exercises immediately, since adaptation means the movement stopped working", correct: false },
                { text: "You need more protein, because adequate soreness requires adequate muscle damage", correct: false }
            ],
            explanation: "Soreness correlates poorly with growth — it mainly signals that a stimulus was novel, and the repeated bout effect means familiar workouts stop hurting while still building muscle. Rising reps at the same weight is direct evidence of adaptation, exactly what your log exists to capture. Switching exercises every time soreness fades would constantly reset the novelty clock and sabotage the progressive overload that actually drives results. Trust the logbook, not the stairs test.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="130" width="800" height="190" rx="20" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="190" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="22">NO SORENESS, MORE REPS</text>
                    <text x="550" y="235" text-anchor="middle" fill="#fff" font-size="18">8 reps became 10 — but nothing hurts</text>
                    <text x="550" y="272" text-anchor="middle" fill="#888" font-size="16">Which signal do you trust?</text>
                    <rect x="150" y="380" width="380" height="150" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="340" y="440" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="19">SORENESS</text>
                    <text x="340" y="478" text-anchor="middle" fill="#888" font-size="16">Measures novelty</text>
                    <rect x="570" y="380" width="380" height="150" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="760" y="440" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="19">LOGBOOK</text>
                    <text x="760" y="478" text-anchor="middle" fill="#888" font-size="16">Measures progress</text>
                </svg>`,
                caption: "Final check: reading recovery signals correctly"
            }
        }
    ]
},
{
    id: 12,
    title: "The Lifetime Lifter: Your Path Forward",
    duration: 7,
    completed: false,
    cards: [
        {
            type: "intro",
            title: "Eleven Lessons Ago, You Couldn't Read This Map",
            content: "Think back to who you were at the start of this book. Words like *hinge*, *progressive overload*, *RPE*, and *deload* were noise. The gym was a room full of mysterious rituals. Maybe strength training was something other people did.\n\nNow look at what you are carrying: you know **why** strength is a longevity intervention, not a vanity project. You speak the **language** of sets, reps, and effort. You own the **movement patterns** that cover the whole body. You know the one **rule** that makes muscles adapt, how to fold it into a **program**, how it bends across the **decades**, where to **train**, and how **recovery** turns effort into results.\n\nThat is not trivia. That is a complete, functioning operating system for physical strength — one most people never acquire in their entire lives.\n\nThis final lesson does two things: it assembles the eleven pieces into one picture you can hold in your head, and then it hands you the only thing left — a concrete first month, and a way of thinking about the decades after it. The book ends here. Your training career starts now.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE COMPLETE MAP</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Everything you now carry</text>
                    <circle cx="550" cy="480" r="110" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="3"/>
                    <text x="550" y="470" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="22">YOU</text>
                    <text x="550" y="505" text-anchor="middle" fill="#fff" font-size="16">a person</text>
                    <text x="550" y="533" text-anchor="middle" fill="#fff" font-size="16">who trains</text>
                    <circle cx="250" cy="250" r="80" fill="rgba(99,102,241,0.2)" stroke="#6366f1" stroke-width="2"/>
                    <text x="250" y="245" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="17">WHY</text>
                    <text x="250" y="275" text-anchor="middle" fill="#fff" font-size="14">longevity</text>
                    <circle cx="550" cy="200" r="80" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="195" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="17">HOW</text>
                    <text x="550" y="225" text-anchor="middle" fill="#fff" font-size="14">patterns + rule</text>
                    <circle cx="850" cy="250" r="80" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="2"/>
                    <text x="850" y="245" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="17">PLAN</text>
                    <text x="850" y="275" text-anchor="middle" fill="#fff" font-size="14">program + place</text>
                    <circle cx="250" cy="720" r="80" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="250" y="715" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="17">WHEN</text>
                    <text x="250" y="745" text-anchor="middle" fill="#fff" font-size="14">every decade</text>
                    <circle cx="850" cy="720" r="80" fill="rgba(59,130,246,0.2)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="850" y="715" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="17">RECOVER</text>
                    <text x="850" y="745" text-anchor="middle" fill="#fff" font-size="14">eat, sleep, rest</text>
                    <line x1="310" y1="310" x2="470" y2="410" stroke="#888" stroke-width="2" stroke-dasharray="6" opacity="0.5"/>
                    <line x1="550" y1="280" x2="550" y2="370" stroke="#888" stroke-width="2" stroke-dasharray="6" opacity="0.5"/>
                    <line x1="790" y1="310" x2="630" y2="410" stroke="#888" stroke-width="2" stroke-dasharray="6" opacity="0.5"/>
                    <line x1="310" y1="660" x2="470" y2="550" stroke="#888" stroke-width="2" stroke-dasharray="6" opacity="0.5"/>
                    <line x1="790" y1="660" x2="630" y2="550" stroke="#888" stroke-width="2" stroke-dasharray="6" opacity="0.5"/>
                </svg>`,
                caption: "Eleven lessons, one operating system — with you at the center"
            }
        },
        {
            type: "concept",
            title: "The Arc of the Book in One Card",
            content: "Here is the whole blueprint, assembled:\n\n• **Lesson 1 — Why**: Strength predicts how long and how well you live. Grip strength and muscle mass track mortality; lifting is medicine with a dose.\n\n• **Lesson 2 — Language**: Sets, reps, load, RPE, tempo, rest. The grammar every program is written in.\n\n• **Lessons 3-6 — The Patterns**: Squat, hinge, push, pull, carry, and core. Six patterns cover the body; every exercise is a dialect of one of them.\n\n• **Lesson 7 — The Rule**: Progressive overload. Do slightly more over time — more reps, more load, better form — and log it, because the logbook is the engine.\n\n• **Lesson 8 — The Plan**: Full-body sessions, 2-3 days a week, each muscle roughly twice weekly, built from the patterns. Simple programs executed beat clever programs abandoned.\n\n• **Lesson 9 — The Decades**: The rule never changes; the dose and recovery do. Muscle is trainable at 25 and at 85 — the cost of quitting just rises with age.\n\n• **Lesson 10 — The Place**: Home or gym, the winner is whichever kills your most common excuse. Consistency beats equipment.\n\n• **Lesson 11 — The Growth**: Training is stimulus; adaptation happens in the 24-72 hours after — powered by ~1.6 g/kg protein, 7-9 hours of sleep, and planned rest.\n\nNotice the shape: **why → what → how → where → how it sticks**. Each piece is simple. The power is that you now hold all of them at once.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE ARC, ASSEMBLED</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Twelve lessons, one blueprint</text>
                    <rect x="150" y="160" width="800" height="80" rx="15" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="208" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="18">L1</text>
                    <text x="260" y="208" text-anchor="start" fill="#fff" font-size="17">WHY — strength is a longevity drug</text>
                    <rect x="150" y="260" width="800" height="80" rx="15" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="308" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="18">L2</text>
                    <text x="260" y="308" text-anchor="start" fill="#fff" font-size="17">LANGUAGE — sets, reps, load, RPE</text>
                    <rect x="150" y="360" width="800" height="80" rx="15" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="200" y="408" text-anchor="start" fill="#3b82f6" font-weight="bold" font-size="18">L3-6</text>
                    <text x="260" y="408" text-anchor="start" fill="#fff" font-size="17">PATTERNS — squat, hinge, push, pull, carry, core</text>
                    <rect x="150" y="460" width="800" height="80" rx="15" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="508" text-anchor="start" fill="#10b981" font-weight="bold" font-size="18">L7</text>
                    <text x="260" y="508" text-anchor="start" fill="#fff" font-size="17">RULE — progressive overload + the logbook</text>
                    <rect x="150" y="560" width="800" height="80" rx="15" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="608" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="18">L8-9</text>
                    <text x="260" y="608" text-anchor="start" fill="#fff" font-size="17">PLAN + DECADES — program it, adjust with age</text>
                    <rect x="150" y="660" width="800" height="80" rx="15" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="200" y="708" text-anchor="start" fill="#ec4899" font-weight="bold" font-size="18">L10-11</text>
                    <text x="290" y="708" text-anchor="start" fill="#fff" font-size="17">PLACE + RECOVERY — environment, protein, sleep</text>
                    <rect x="150" y="760" width="800" height="80" rx="15" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="200" y="808" text-anchor="start" fill="#ffd700" font-weight="bold" font-size="18">L12</text>
                    <text x="260" y="808" text-anchor="start" fill="#fff" font-size="17">FORWARD — the lifetime lifter</text>
                </svg>`,
                caption: "Why, what, how, where, and how it sticks — the whole book at a glance"
            }
        },
        {
            type: "concept",
            title: "The 80% Rule",
            content: "Here is the mindset shift that separates lifetime lifters from serial restarters: **stop aiming for perfect. Aim for 80%, forever.**\n\nRun the math on two lifters over three years:\n\n• **The perfectionist** plans 5 sessions a week, executes flawlessly for six weeks, misses one session, feels the streak is broken, spirals, quits, and restarts twice a year. Generous estimate: ~180 real sessions in three years, most of them in the low-progress restart phase where you regain what you lost.\n\n• **The 80-percenter** plans 3 sessions a week and hits about 80% of them — call it 2.4 a week, every week, through vacations, sick kids, and brutal quarters at work. Three years: **~375 sessions**, nearly all of them building on the last.\n\nDouble the training, from the person with the *less* impressive plan. And the compounding is steeper than the raw count suggests, because progressive overload only compounds on an unbroken base — the restarter keeps re-laying the same foundation.\n\nThe practical rules that fall out of this:\n\n• **A missed session is a data point, not a verdict.** The plan resumes at the next scheduled slot — no makeup guilt, no doubling up.\n• **Shrink before you skip** (Lesson 8's rule): a 15-minute session on a chaotic day counts as a hit, not a miss.\n• **Judge yourself monthly, not daily.** Did you hit roughly 80% of planned sessions this month? Then you are exactly on track for the decade.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE 80% RULE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Three years, two lifters, one obvious winner</text>
                    <rect x="60" y="180" width="460" height="360" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="240" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">THE PERFECTIONIST</text>
                    <text x="290" y="290" text-anchor="middle" fill="#fff" font-size="17">Plans 5 days, all-or-nothing</text>
                    <text x="290" y="325" text-anchor="middle" fill="#fff" font-size="17">Quits at first broken streak</text>
                    <text x="290" y="360" text-anchor="middle" fill="#fff" font-size="17">Restarts twice a year</text>
                    <text x="290" y="430" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="26">~180 sessions</text>
                    <text x="290" y="475" text-anchor="middle" fill="#888" font-size="15">mostly spent regaining losses</text>
                    <rect x="580" y="180" width="460" height="360" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="240" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">THE 80-PERCENTER</text>
                    <text x="810" y="290" text-anchor="middle" fill="#fff" font-size="17">Plans 3 days, hits ~80%</text>
                    <text x="810" y="325" text-anchor="middle" fill="#fff" font-size="17">Misses without spiraling</text>
                    <text x="810" y="360" text-anchor="middle" fill="#fff" font-size="17">Never fully stops</text>
                    <text x="810" y="430" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="26">~375 sessions</text>
                    <text x="810" y="475" text-anchor="middle" fill="#888" font-size="15">nearly all building on the last</text>
                    <rect x="150" y="610" width="800" height="140" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="665" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="21">80% FOR YEARS BEATS 100% FOR SIX WEEKS</text>
                    <text x="550" y="705" text-anchor="middle" fill="#fff" font-size="17">A missed session is a data point, not a verdict</text>
                </svg>`,
                caption: "The humble plan executed at 80% doubles the ambitious plan abandoned"
            }
        },
        {
            type: "example",
            title: "Priya's Decade: What 80% Looks Like Lived",
            content: "**Priya started lifting at 36** with two toddlers, a nursing career of rotating shifts, and zero athletic background. Her plan was almost embarrassingly modest: two full-body sessions a week, 35 minutes each, in the corner of her bedroom with adjustable dumbbells.\n\nWhat her decade actually looked like:\n\n• **Year 1**: Hit about 85% of sessions. First full push-up at month four. Goblet squats went from 15 lb to 40 lb.\n• **Year 3**: A shoulder tweak (from gardening, ironically) forced two months of modified pulling — she trained around it using Lesson 9's traffic-light rule instead of stopping.\n• **Year 5**: Divorce year. She hit maybe 55% of sessions for eight months — and considered that a victory, because she never went to zero. The habit survived the hardest season precisely because the bar was low.\n• **Year 8**: Added a third weekly session when the kids got older. First pull-up at 44.\n• **Year 10**: At 46, her DEXA scan showed the bone density of an average 33-year-old. She carries her own kayak.\n\nTotal sessions across the decade: roughly 900. Average per week: just over 1.7 — **well below even her modest plan**. There was no heroic phase, no transformation montage. There was a floor she refused to fall through, held for ten years. That is what a lifetime lifter actually looks like from the inside.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">PRIYA'S DECADE</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">No montage — just a floor she never fell through</text>
                    <rect x="150" y="170" width="800" height="95" rx="15" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="212" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="18">YEAR 1</text>
                    <text x="200" y="245" text-anchor="start" fill="#fff" font-size="16">85% adherence — first push-up at month four</text>
                    <rect x="150" y="285" width="800" height="95" rx="15" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="327" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="18">YEAR 3</text>
                    <text x="200" y="360" text-anchor="start" fill="#fff" font-size="16">Shoulder tweak — trained around it, not through it</text>
                    <rect x="150" y="400" width="800" height="95" rx="15" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="200" y="442" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="18">YEAR 5</text>
                    <text x="200" y="475" text-anchor="start" fill="#fff" font-size="16">Divorce year: 55% adherence — but never zero</text>
                    <rect x="150" y="515" width="800" height="95" rx="15" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="557" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="18">YEAR 8</text>
                    <text x="200" y="590" text-anchor="start" fill="#fff" font-size="16">First pull-up at age 44, third session added</text>
                    <rect x="150" y="630" width="800" height="95" rx="15" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="672" text-anchor="start" fill="#10b981" font-weight="bold" font-size="18">YEAR 10</text>
                    <text x="200" y="705" text-anchor="start" fill="#fff" font-size="16">Bone density of a 33-year-old; carries her own kayak</text>
                    <rect x="200" y="770" width="700" height="110" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="818" text-anchor="middle" fill="#ffd700" font-size="18">~900 sessions in 10 years — about 1.7 per week</text>
                    <text x="550" y="852" text-anchor="middle" fill="#888" font-size="15">Below plan, and it transformed her life anyway</text>
                </svg>`,
                caption: "Ten unglamorous years that outperformed every dramatic restart"
            }
        },
        {
            type: "quiz",
            question: "A lifter plans 3 sessions a week but only manages 2 or 3 most weeks, occasionally dropping to 1 during hard stretches. According to this lesson, what is the best assessment?",
            options: [
                { text: "They lack discipline and should recommit to hitting 100% of planned sessions", correct: false },
                { text: "They are succeeding — roughly 80% adherence sustained over years is the actual formula for lifetime results", correct: true },
                { text: "They should stop planning entirely, since plans clearly do not work for them", correct: false },
                { text: "They should double the plan to 6 sessions so that even half-adherence yields 3", correct: false }
            ],
            explanation: "Hitting about 80% of a realistic plan, indefinitely, beats hitting 100% of an ambitious plan for six weeks — the perfectionist's restart cycle costs roughly half the total sessions over three years. Missed sessions are data points, not verdicts, and the plan simply resumes at the next slot. Doubling the plan to game the math just recreates the perfectionist trap with a bigger, more discouraging gap between intention and reality.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">KNOWLEDGE CHECK</text>
                    <rect x="150" y="130" width="800" height="190" rx="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="190" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="22">GRADING ADHERENCE</text>
                    <text x="550" y="235" text-anchor="middle" fill="#fff" font-size="18">2 of 3 sessions, most weeks, for years</text>
                    <text x="550" y="272" text-anchor="middle" fill="#888" font-size="16">Failure or formula?</text>
                    <rect x="200" y="390" width="700" height="140" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="450" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="20">JUDGE MONTHLY, NOT DAILY</text>
                    <text x="550" y="492" text-anchor="middle" fill="#888" font-size="16">The decade is won at 80%</text>
                </svg>`,
                caption: "Test your grasp of the 80% mindset"
            }
        },
        {
            type: "concept",
            title: "The Minimum Viable Week",
            content: "For the seasons when even 80% of a modest plan feels impossible, you need to know the true floor — the smallest dose that still works.\n\nRecall the study from Lesson 1: **Momma and colleagues (2022)**, a British Journal of Sports Medicine meta-analysis of 16 prospective studies. Muscle-strengthening activity of just **30-60 minutes per week** was associated with a **10-17% lower risk** of all-cause mortality, cardiovascular disease, and cancer. The mortality curve dropped steeply in the first hour per week — most of the longevity benefit is bought by the *first* hour, not the tenth.\n\nSo here is your **minimum viable week**:\n\n• **Two sessions, 30 minutes each.**\n• Each session: one squat-pattern movement, one hinge, one push, one pull — 2-3 hard sets of each.\n• That is 60 minutes of weekly training that keeps every pattern greased, maintains nearly all of your strength (maintenance requires far less volume than building — studies show as little as one-ninth the volume can hold gains for months), and sits squarely in the dose associated with the biggest mortality benefit.\n\nThis is not the optimal week. It is the **floor** — the version of training you drop to during newborn months, job changes, and caregiving seasons, instead of dropping to zero. Lifetime lifters are not people who never fall. They are people who installed a floor before they needed one.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">MINIMUM VIABLE WEEK</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">The floor that keeps everything alive</text>
                    <rect x="150" y="170" width="800" height="160" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="550" y="230" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="22">MOMMA 2022, BJSM META-ANALYSIS</text>
                    <text x="550" y="272" text-anchor="middle" fill="#fff" font-size="18">30-60 min/week of strength work:</text>
                    <text x="550" y="305" text-anchor="middle" fill="#fff" font-size="18">10-17% lower all-cause mortality risk</text>
                    <rect x="60" y="390" width="460" height="240" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="290" y="450" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">SESSION A — 30 MIN</text>
                    <text x="290" y="500" text-anchor="middle" fill="#fff" font-size="17">Squat + push patterns</text>
                    <text x="290" y="535" text-anchor="middle" fill="#fff" font-size="17">2-3 hard sets each</text>
                    <text x="290" y="585" text-anchor="middle" fill="#888" font-size="15">plus a carry if time allows</text>
                    <rect x="580" y="390" width="460" height="240" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="810" y="450" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="21">SESSION B — 30 MIN</text>
                    <text x="810" y="500" text-anchor="middle" fill="#fff" font-size="17">Hinge + pull patterns</text>
                    <text x="810" y="535" text-anchor="middle" fill="#fff" font-size="17">2-3 hard sets each</text>
                    <text x="810" y="585" text-anchor="middle" fill="#888" font-size="15">plus core if time allows</text>
                    <rect x="150" y="700" width="800" height="130" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="755" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="20">THE FIRST HOUR BUYS THE MOST</text>
                    <text x="550" y="795" text-anchor="middle" fill="#fff" font-size="17">Drop to the floor in hard seasons — never to zero</text>
                </svg>`,
                caption: "Two 30-minute sessions — the smallest dose that still changes your odds"
            }
        },
        {
            type: "concept",
            title: "Identity: 'I Am Someone Who Trains'",
            content: "The deepest shift in this entire book is not physical. It is the move from *doing workouts* to **being someone who trains** — because identity survives circumstances that motivation does not.\n\nBehavioral research backs the framing: habits anchored to identity and context outlast habits anchored to goals. Goals expire the moment they are hit or missed; identity just keeps voting. Two mechanical tools make the identity real:\n\n**1. Habit stacking.** Attach training to an anchor that already happens daily, using the formula *after [existing habit], I [train]*. After I pour my first coffee, I do my warm-up. After the kids' bedtime, I walk to the garage. The anchor does the remembering, so willpower doesn't have to. Research on implementation intentions — the *if-then* planning studied by psychologist Peter Gollwitzer across hundreds of experiments — shows people who specify when and where they will act follow through at dramatically higher rates than people with mere intentions.\n\n**2. Schedule it like a meeting.** A workout that lives at *sometime today* dies at 9 p.m. A workout that lives at *Tuesday 6:30, garage* mostly happens. Put your sessions in the actual calendar, recurring, with the same protection you would give a doctor's appointment — because functionally, that is what they are.\n\nThen let the votes accumulate. Every session — including the shrunk 15-minute ones — is a vote for *I am someone who trains*. Miss one? The identity survives a missed vote. That is exactly the point.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">IDENTITY OVER GOALS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Every session is a vote for who you are</text>
                    <rect x="60" y="180" width="460" height="280" rx="20" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>
                    <text x="290" y="240" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="21">GOAL-DRIVEN</text>
                    <text x="290" y="290" text-anchor="middle" fill="#fff" font-size="17">I want to lose 20 pounds</text>
                    <text x="290" y="330" text-anchor="middle" fill="#888" font-size="15">Expires when hit or missed</text>
                    <text x="290" y="365" text-anchor="middle" fill="#888" font-size="15">Collapses under bad weeks</text>
                    <text x="290" y="415" text-anchor="middle" fill="#ef4444" font-size="16">Motivation-dependent</text>
                    <rect x="580" y="180" width="460" height="280" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="810" y="240" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="21">IDENTITY-DRIVEN</text>
                    <text x="810" y="290" text-anchor="middle" fill="#fff" font-size="17">I am someone who trains</text>
                    <text x="810" y="330" text-anchor="middle" fill="#888" font-size="15">Survives missed sessions</text>
                    <text x="810" y="365" text-anchor="middle" fill="#888" font-size="15">Keeps voting through chaos</text>
                    <text x="810" y="415" text-anchor="middle" fill="#10b981" font-size="16">Anchor-dependent</text>
                    <rect x="150" y="530" width="800" height="130" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="550" y="580" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">HABIT STACK: AFTER [ANCHOR], I TRAIN</text>
                    <text x="550" y="622" text-anchor="middle" fill="#fff" font-size="17">After my first coffee → warm-up. Kids asleep → garage.</text>
                    <rect x="150" y="700" width="800" height="130" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="550" y="750" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">SCHEDULE IT LIKE A MEETING</text>
                    <text x="550" y="792" text-anchor="middle" fill="#fff" font-size="17">Tuesday 6:30, garage — recurring, protected, real</text>
                </svg>`,
                caption: "Identity plus anchors outlasts motivation every time"
            }
        },
        {
            type: "example",
            title: "Your Milestone System: Retest Every 8-12 Weeks",
            content: "Long journeys need mile markers. Every **8-12 weeks**, run a simple retest day — same exercises, same conditions — and write down the results. Watching these numbers move is the most reliable motivation machine in training. Concrete milestones worth tracking, in rough order of when they arrive:\n\n**First year milestones**:\n• **First full push-up** from the floor (then 5, then 10)\n• **Goblet squat with 25% of bodyweight** for 10 clean reps (then 50%)\n• **A 30-second dead hang** from the pull-up bar (then 60 seconds)\n• **Farmer carry with half your bodyweight** (total, split between hands) for 30 meters\n\n**The multi-year milestones**:\n• **First pull-up** — for many adults, especially women, a genuinely life-list achievement\n• **Bodyweight goblet squat count**: how many reps with a dumbbell at 25-30% bodyweight — watch this climb from 6 to 20\n• **A 60-second carry** at bodyweight-total load\n• **Floor-to-stand without hands** — the sit-to-rise ability that longitudinal research links to longevity in older adults\n\nRetest protocol: pick 3-4 of these, always after a rest day, never when sick or wrecked. Log the date and numbers next to your daily training log. On the weeks when progress feels invisible, the retest sheet is the proof: the person who could not do one push-up is now doing eight. **Numbers do not flatter, and they do not lie.**",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">MILESTONE RETESTS</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Every 8-12 weeks — same tests, same conditions</text>
                    <rect x="80" y="170" width="440" height="180" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="300" y="225" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="20">PUSH-UPS</text>
                    <text x="300" y="265" text-anchor="middle" fill="#fff" font-size="16">First one → 5 → 10</text>
                    <text x="300" y="300" text-anchor="middle" fill="#888" font-size="14">full range, from the floor</text>
                    <rect x="580" y="170" width="440" height="180" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="800" y="225" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="20">GOBLET SQUAT</text>
                    <text x="800" y="265" text-anchor="middle" fill="#fff" font-size="16">25-30% bodyweight x reps</text>
                    <text x="800" y="300" text-anchor="middle" fill="#888" font-size="14">watch the count climb</text>
                    <rect x="80" y="400" width="440" height="180" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="300" y="455" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="20">HANG AND PULL</text>
                    <text x="300" y="495" text-anchor="middle" fill="#fff" font-size="16">30s hang → 60s → pull-up</text>
                    <text x="300" y="530" text-anchor="middle" fill="#888" font-size="14">a life-list achievement</text>
                    <rect x="580" y="400" width="440" height="180" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="800" y="455" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="20">CARRY DURATION</text>
                    <text x="800" y="495" text-anchor="middle" fill="#fff" font-size="16">Half bodyweight, 30 m → 60s</text>
                    <text x="800" y="530" text-anchor="middle" fill="#888" font-size="14">grip is a longevity marker</text>
                    <rect x="150" y="650" width="800" height="140" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="705" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="20">RETEST RULES</text>
                    <text x="550" y="745" text-anchor="middle" fill="#fff" font-size="17">After a rest day, 3-4 tests, log the date and numbers</text>
                    <text x="550" y="775" text-anchor="middle" fill="#888" font-size="15">Numbers do not flatter, and they do not lie</text>
                </svg>`,
                caption: "Four mile markers that prove the invisible progress is real"
            }
        },
        {
            type: "concept",
            title: "The Retirement Account You Can Start Today",
            content: "Here is the frame to carry for the next forty years: **strength is a retirement account, and every session is a deposit.**\n\nThe parallels are almost eerie:\n\n• **Compound interest**: Strength built in your 30s and 40s raises the peak you decline from later. Sarcopenia takes roughly 3-8% of muscle per decade after 30 and accelerates after 60 — but it subtracts from whatever balance you built. A higher peak means crossing the disability threshold years later, or never.\n\n• **It is never too late to start, but earlier is exponentially better**: Lesson 9 showed nursing-home residents in their 90s gaining significant strength in weeks. The account accepts deposits at any age. But the 40-year-old starting today gets decades of compounding the 70-year-old cannot buy back.\n\n• **Small regular deposits beat rare heroic ones**: Two modest sessions a week for twenty years dwarfs a year of daily training followed by nineteen years on the couch — exactly like retirement savings.\n\n• **The withdrawal phase is real**: The account pays out as carrying your own groceries at 75, getting off the floor at 85, surviving the fall that would have broken an unloaded hip, staying in your own home instead of assisted living.\n\nOne closing honesty, in the spirit of this whole book: this book is **education, not a prescription**. It gives you the evidence and the map. Your physician knows your heart, your joints, and your history; a good coach can watch you move in a way no book can. Use both — they personalize what these lessons can only generalize.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE STRENGTH ACCOUNT</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Two savers, one decline curve, different endings</text>
                    <line x1="120" y1="700" x2="1000" y2="700" stroke="#888" stroke-width="2"/>
                    <line x1="120" y1="700" x2="120" y2="180" stroke="#888" stroke-width="2"/>
                    <text x="230" y="740" text-anchor="middle" fill="#888" font-size="17">age 30</text>
                    <text x="560" y="740" text-anchor="middle" fill="#888" font-size="17">age 60</text>
                    <text x="940" y="740" text-anchor="middle" fill="#888" font-size="17">age 90</text>
                    <path d="M140 420 L340 250 Q 560 220 700 320 L 980 480" stroke="#10b981" stroke-width="4" fill="none"/>
                    <text x="330" y="215" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="18">trains: high peak</text>
                    <path d="M140 430 Q 400 460 600 560 L 980 670" stroke="#ef4444" stroke-width="4" fill="none" stroke-dasharray="10"/>
                    <text x="380" y="520" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="18">never trains</text>
                    <line x1="120" y1="600" x2="1000" y2="600" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6" opacity="0.7"/>
                    <text x="990" y="588" text-anchor="end" fill="#f59e0b" font-size="16">disability threshold</text>
                    <rect x="150" y="790" width="800" height="130" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="840" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="20">EVERY SESSION IS A DEPOSIT</text>
                    <text x="550" y="880" text-anchor="middle" fill="#fff" font-size="16">Education, not prescription — your doctor and coach personalize it</text>
                </svg>`,
                caption: "The higher your peak, the later — or never — you cross the threshold"
            }
        },
        {
            type: "quote",
            content: "You do not rise to the level of your goals. You fall to the level of your systems.",
            author: "James Clear, Atomic Habits",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">WISDOM</text>
                    <rect x="100" y="150" width="900" height="230" rx="20" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="160" y="225" text-anchor="start" fill="#fff" font-style="italic" font-size="24">"You do not rise to the level</text>
                    <text x="160" y="270" text-anchor="start" fill="#fff" font-style="italic" font-size="24">of your goals. You fall to the</text>
                    <text x="160" y="315" text-anchor="start" fill="#fff" font-style="italic" font-size="24">level of your systems."</text>
                    <text x="940" y="355" text-anchor="end" fill="#8b5cf6" font-size="18">— James Clear</text>
                    <rect x="200" y="450" width="700" height="160" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="505" text-anchor="middle" fill="#ffd700" font-size="18">Your system is now built:</text>
                    <text x="550" y="543" text-anchor="middle" fill="#fff" font-size="17">patterns, program, place, recovery, floor</text>
                    <text x="550" y="578" text-anchor="middle" fill="#888" font-size="15">The goals will take care of themselves</text>
                </svg>`,
                caption: "The whole book was never about goals — it was about the system"
            }
        },
        {
            type: "application",
            title: "Your First Month: The Complete Plan",
            content: "Everything in this book, compressed into 30 days. Start Monday.\n\n**Week 1 — Install the anchor.**\n• Pick your environment (Lesson 10 audit) and your two fixed time slots; put them in the calendar as recurring events.\n• Two sessions, 30 min: goblet squats, hip hinges, incline push-ups, table or band rows — 2 easy sets each, effort 5-6/10. You are practicing movements and building the groove, not chasing fatigue.\n• Start the log: date, exercises, weights, reps.\n\n**Week 2 — Add the baseline.**\n• Same two sessions, now 3 sets, effort 6-7/10.\n• Run your first milestone test day: max push-ups, goblet squat reps at 25% bodyweight, dead hang time, a carry. Write it down — this is the *before* photo in numbers.\n• Calculate your protein target (lb x 0.7) and fix breakfast.\n\n**Week 3 — Turn the overload key.**\n• Beat last week's log by a little: one more rep here, five more pounds there (Lesson 7's rule).\n• Set the go-to-bed alarm. Guard it for the full week.\n\n**Week 4 — Prove the floor works.**\n• One session this week, shrink on purpose to 20 minutes — practice the minimum viable session *before* a crisis forces it.\n• Sunday: review the month in your log, schedule the next retest 8 weeks out, and — if it makes sense for you — book that check-in with your doctor about your plans.\n\nThen keep going. That is the entire secret. **Welcome to the rest of your training life.**",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">YOUR FIRST MONTH</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Thirty days from reader to lifter</text>
                    <rect x="150" y="170" width="800" height="140" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="200" y="222" text-anchor="start" fill="#6366f1" font-weight="bold" font-size="20">WEEK 1</text>
                    <text x="200" y="258" text-anchor="start" fill="#fff" font-size="17">Anchor: 2 slots in calendar, 2 easy sessions</text>
                    <text x="200" y="290" text-anchor="start" fill="#888" font-size="15">4 patterns, 2 sets, effort 5-6/10, start the log</text>
                    <rect x="150" y="340" width="800" height="140" rx="20" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="200" y="392" text-anchor="start" fill="#8b5cf6" font-weight="bold" font-size="20">WEEK 2</text>
                    <text x="200" y="428" text-anchor="start" fill="#fff" font-size="17">Baseline: 3 sets, first milestone test day</text>
                    <text x="200" y="460" text-anchor="start" fill="#888" font-size="15">Protein target set, breakfast fixed</text>
                    <rect x="150" y="510" width="800" height="140" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="562" text-anchor="start" fill="#10b981" font-weight="bold" font-size="20">WEEK 3</text>
                    <text x="200" y="598" text-anchor="start" fill="#fff" font-size="17">Overload: beat last week's log by a little</text>
                    <text x="200" y="630" text-anchor="start" fill="#888" font-size="15">Go-to-bed alarm installed and guarded</text>
                    <rect x="150" y="680" width="800" height="140" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="200" y="732" text-anchor="start" fill="#f59e0b" font-weight="bold" font-size="20">WEEK 4</text>
                    <text x="200" y="768" text-anchor="start" fill="#fff" font-size="17">Floor drill: one 20-min session on purpose</text>
                    <text x="200" y="800" text-anchor="start" fill="#888" font-size="15">Month review, next retest scheduled 8 weeks out</text>
                    <rect x="250" y="870" width="600" height="100" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="915" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="20">WEEK 5+: KEEP GOING</text>
                    <text x="550" y="948" text-anchor="middle" fill="#888" font-size="15">That is the entire secret</text>
                </svg>`,
                caption: "The 30-day on-ramp to a lifetime of training"
            }
        },
        {
            type: "concept",
            title: "What You Do With the Next Forty Years",
            content: "A last honest look forward, because the road is long and it helps to know the terrain:\n\n• **Months 1-6**: The golden era. Newbie gains mean nearly every session sets a personal best. Enjoy it, log it, and do not change programs chasing even faster progress — you are already progressing as fast as humans can.\n\n• **Years 1-3**: Progress slows to monthly instead of weekly. This is where the 80% rule, the milestones, and the identity work carry you — and where most people quit because they mistake *slower* for *stopped*. The retest sheet will prove otherwise.\n\n• **Years 3-10**: Strength becomes background infrastructure, like brushing your teeth. Some years you will push; some years the minimum viable week is the whole story. Both count. Your interests may branch — kettlebells, hiking strength, sport, a barbell club. The six patterns underneath never change.\n\n• **The decades after**: You will be the 60-year-old who carries the luggage, the 75-year-old who gardens on their knees and stands back up, the 85-year-old the physical therapist marvels at. Not because of genetics or luck — because of a few hundred quiet deposits a year, made through every season of a real life.\n\nSomewhere in the first months, pay it forward once: show one person how to hinge, or send them Lesson 1. Lifters who train with a partner or bring someone along consistently adhere better — and besides, you know the map now. **You are someone who trains. Go make this week's deposit.**",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="36">THE LONG ROAD</text>
                    <text x="550" y="100" text-anchor="middle" fill="#888" font-size="23">Knowing the terrain keeps you on it</text>
                    <rect x="60" y="180" width="220" height="150" rx="15" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="2"/>
                    <text x="170" y="235" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="18">MONTHS 1-6</text>
                    <text x="170" y="270" text-anchor="middle" fill="#fff" font-size="15">PRs every week</text>
                    <text x="170" y="300" text-anchor="middle" fill="#888" font-size="13">the golden era</text>
                    <path d="M280 255 L330 255" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="330,255 318,247 318,263" fill="#14b8a6"/>
                    <rect x="330" y="180" width="220" height="150" rx="15" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="440" y="235" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="18">YEARS 1-3</text>
                    <text x="440" y="270" text-anchor="middle" fill="#fff" font-size="15">Slower, not stopped</text>
                    <text x="440" y="300" text-anchor="middle" fill="#888" font-size="13">where most quit</text>
                    <path d="M550 255 L600 255" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="600,255 588,247 588,263" fill="#14b8a6"/>
                    <rect x="600" y="180" width="220" height="150" rx="15" fill="rgba(99,102,241,0.2)" stroke="#6366f1" stroke-width="2"/>
                    <text x="710" y="235" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="18">YEARS 3-10</text>
                    <text x="710" y="270" text-anchor="middle" fill="#fff" font-size="15">Infrastructure</text>
                    <text x="710" y="300" text-anchor="middle" fill="#888" font-size="13">push and coast years</text>
                    <path d="M820 255 L870 255" stroke="#14b8a6" stroke-width="3"/>
                    <polygon points="870,255 858,247 858,263" fill="#14b8a6"/>
                    <rect x="870" y="180" width="170" height="150" rx="15" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="955" y="235" text-anchor="middle" fill="#8b5cf6" font-weight="bold" font-size="17">BEYOND</text>
                    <text x="955" y="270" text-anchor="middle" fill="#fff" font-size="14">the payout</text>
                    <text x="955" y="300" text-anchor="middle" fill="#888" font-size="13">decades</text>
                    <rect x="150" y="410" width="800" height="170" rx="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" stroke-width="2"/>
                    <text x="550" y="470" text-anchor="middle" fill="#ec4899" font-weight="bold" font-size="21">PAY IT FORWARD ONCE</text>
                    <text x="550" y="512" text-anchor="middle" fill="#fff" font-size="17">Teach one person to hinge, or share Lesson 1</text>
                    <text x="550" y="545" text-anchor="middle" fill="#888" font-size="15">Training partners adhere better — and now you know the map</text>
                    <rect x="200" y="650" width="700" height="120" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="700" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="21">YOU ARE SOMEONE WHO TRAINS</text>
                    <text x="550" y="738" text-anchor="middle" fill="#fff" font-size="17">Go make this week's deposit</text>
                </svg>`,
                caption: "The terrain ahead — and the one job that never changes"
            }
        },
        {
            type: "quiz",
            question: "Which statement best captures this book's complete formula for lifetime strength?",
            options: [
                { text: "Find the optimal program and follow it with 100% adherence, since program quality determines results", correct: false },
                { text: "Train the six patterns with progressive overload, recover with protein and sleep, hold ~80% consistency in whatever environment fits your life — for decades", correct: true },
                { text: "Maximize training frequency while young, since muscle built early is permanent and cannot be lost to aging", correct: false },
                { text: "Prioritize supplements and equipment first, because the physical inputs matter more than scheduling and habits", correct: false }
            ],
            explanation: "The blueprint is the whole arc: movement patterns loaded progressively (Lessons 3-7), programmed simply (Lesson 8), adapted across ages (Lesson 9), placed where your excuses die (Lesson 10), and converted into results by protein, sleep, and planned rest (Lesson 11) — all sustained at roughly 80% adherence for decades. No program survives contact with real life at 100%, muscle is lost without continued deposits at any age, and supplements are the optional last 5%, not the foundation.",
            visual: {
                type: "diagram",
                svg: `<svg viewBox="0 0 1100 1100" class="lesson-visual">
                    <rect x="0" y="0" width="1100" height="1100" fill="#1a1a2e"/>
                    <text x="550" y="55" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="34">FINAL KNOWLEDGE CHECK</text>
                    <rect x="150" y="130" width="800" height="190" rx="20" fill="rgba(255,215,0,0.1)" stroke="#ffd700" stroke-width="2"/>
                    <text x="550" y="190" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="22">THE STRENGTH BLUEPRINT</text>
                    <text x="550" y="235" text-anchor="middle" fill="#fff" font-size="18">Twelve lessons compress into one sentence</text>
                    <text x="550" y="272" text-anchor="middle" fill="#888" font-size="16">Which one is it?</text>
                    <rect x="120" y="390" width="270" height="140" rx="20" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="2"/>
                    <text x="255" y="450" text-anchor="middle" fill="#6366f1" font-weight="bold" font-size="18">PATTERNS</text>
                    <text x="255" y="485" text-anchor="middle" fill="#888" font-size="14">+ overload</text>
                    <rect x="415" y="390" width="270" height="140" rx="20" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <text x="550" y="450" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="18">RECOVERY</text>
                    <text x="550" y="485" text-anchor="middle" fill="#888" font-size="14">+ protein, sleep</text>
                    <rect x="710" y="390" width="270" height="140" rx="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="845" y="450" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="18">80% x DECADES</text>
                    <text x="845" y="485" text-anchor="middle" fill="#888" font-size="14">the multiplier</text>
                </svg>`,
                caption: "The final check — the whole book in one question"
            }
        }
    ]
}
]
};
